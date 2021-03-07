import { getPageMetrics } from ".";
import { Webpage } from "./webpage";

const webpages: Webpage[] = [];
webpages.push(
    new Webpage("US Geography Quiz", "https://coloradoquiz.web.app/quiz/us-geography"),
    new Webpage("US History Quiz", "https://coloradoquiz.web.app/quiz/us-history"),
    new Webpage("US Civics Quiz", "https://coloradoquiz.web.app/quiz/us-civics")
);

getPageMetrics(webpages);
