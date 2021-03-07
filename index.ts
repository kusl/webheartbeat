const puppeteer = require('puppeteer')
import { unusedCss } from "./calcCss";
import { CSSStyleSheetHeader } from "./cssStylesheetHeader";
import { Webpage } from "./webpage";

let run_start_time: Date, run_end_time: Date;

export async function getPageMetrics(webpages: Webpage[]) {
    try {
        const args = [
            "--disable-setuid-sandbox",
            "--no-sandbox",
            "--blink-settings=imagesEnabled=true",
        ];
        const options = {
            args,
            headless: true,
            ignoreHTTPSErrors: true
        };
        logScriptStart();
        run_start_time = new Date();
        for (const webpage of webpages) {
            const browser = await puppeteer.launch(options)
            const page = await browser.newPage()
            await page.setViewport({
                width: 1920,
                height: 1080
            });
            await page._client.send('DOM.enable');
            await page._client.send('CSS.enable');
            await page._client.send('CSS.startRuleUsageTracking');
            await page._client.send('Performance.enable');

            const stylesheets: CSSStyleSheetHeader[] = [];
            page._client.on('CSS.styleSheetAdded', (s: { header: any; }) => stylesheets.push(s.header));

            const start_time = new Date();
            const goto = await page.goto(webpage.address, {
                waitUntil: 'networkidle2',
                timeout: 0
            });
            const end_time = new Date();

            const response = await page._client.send('Performance.getMetrics');
            const JSUsedSize = response.metrics.find((x: { name: string; }) => x.name === 'JSHeapUsedSize').value;
            const JSTotalSize = response.metrics.find((x: { name: string; }) => x.name === 'JSHeapTotalSize').value;
            const unusedJS = Math.round((JSUsedSize / JSTotalSize) * 100);
            const { ruleUsage } = await page._client.send('CSS.stopRuleUsageTracking');
            const unusedCSS = unusedCss(stylesheets, ruleUsage);
            console.log('\r\n');
            console.log('\r\n');
            console.log(`## For ${webpage.getWebpageName()}: `);
            console.log('\r\n');
            console.log(`Total load time is ${(end_time.getTime() - start_time.getTime()) / 1000} seconds`);
            console.log('\r\n');
            console.log(
                `${unusedCSS}% of CSS is unused, ${stylesheets.length
                } total stylesheets`
            );
            console.log('\r\n');
            console.log(`${unusedJS}% of JS is unused`);
            console.log('\r\n');
            console.log(`End of report for ${webpage.getWebpageName()}`);
            await browser.close();
        }
        run_end_time = new Date()
        logScriptEnd();
    } catch (error) {
        console.log({ error });
        console.log('\r\n');
        console.log('\r\n');
    }
}
function logScriptEnd() {
    console.log('\r\n');
    console.log(`End of run`);
    console.log('\r\n');
    console.log(`The whole thing took ${(run_end_time.getTime() - run_start_time.getTime()) / (60 * 1000)} minutes.`);
    console.log(`${new Date()}`);
    console.log('\r\n');
    console.log('\r\n');
}

function logScriptStart() {
    console.log(`# Perf matters`);
    console.log('\r\n');
    console.log(`Start a new run`);
    console.log(`${new Date()}`);
    console.log('\r\n');
    console.log('\r\n');
}

