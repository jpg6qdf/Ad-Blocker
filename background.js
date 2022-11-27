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
    "*://*.ads.linkedin.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
        return {cancel: true}; 
    },
    { urls: url_list },
    ["blocking"]
  );