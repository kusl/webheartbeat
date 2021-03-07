import { CSSStyleSheetHeader } from "./cssStylesheetHeader";

export function unusedCss(stylesheets: CSSStyleSheetHeader[], ruleUsage: any[]) {
    let usedCSS = 0
    let totalCSS = 0
    stylesheets.forEach((stylesheet: CSSStyleSheetHeader) => {
        totalCSS += stylesheet.length
        usedCSS += calcUsedLength(ruleUsage, stylesheet)
    });
    return 100 - Math.round(usedCSS / totalCSS * 100)
}

function calcUsedLength(ruleUsage: any[], stylesheet: CSSStyleSheetHeader) {
    const stylesheetRuleUsages = ruleUsage.filter(
        y => y.styleSheetId === stylesheet.styleSheetId
    )

    return stylesheetRuleUsages.reduce(
        (sum, x) => sum + x.endOffset - x.startOffset,
        0
    )
}
