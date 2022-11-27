url_list = [
    "*://*.doubleclick.net/*",
	"*://*.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
    "*://*.moat.com/*",
    "*://*.amazon-adsystem.com/*",
    "*://*.ads.linkedin.com/*",
    "*://*.insight.adsrvr.org/*",
    "*://*.outbrain.com/*"
]

async function fetchData() {
    const res = await fetch ("https://www.github.developerdan.com/hosts/lists/ads-and-tracking-extended.txt");
    const record = await res.text();
    document.getElementById("date").innerHTML=record.data[0].date;
    document.getElementById("areaName").innerHTML=record.data[0].areaName;
    document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
        return {cancel: true}; 
    },
    { urls: url_list },
    ["blocking"]
  );