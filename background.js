var extension_status = "on";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({state: 'on'})
  });

async function extensionOn() {
    const res = await fetch ("https://easylist.to/easylist/easylist.txt");
    const record = await res.text();
    var lines = record.split('\n');
    var url_list = []
    for (var i = 1; i < lines.length; i++){
        line = lines[i];

        if ('||' == line.substring(0,2) & line.indexOf('^') != -1 & line.indexOf('*') == -1){
            last_index = line.indexOf('^')
            url = '*://*.' + line.substring(2,last_index) + '/*'
            url_list.push(url);
        }
    }
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            console.log("on")
            if (extension_status == "on"){
                return {cancel: true}; 
            }
            else{
                return {cancel: false}
            }
        },
        { urls: url_list },
        ["blocking"]
    );
}

function extensionOff(){}

chrome.browserAction.onClicked.addListener((tab) => {
    chrome.storage.local.get('state', function(data) {
      if(data.state == 'on') {
        chrome.storage.local.set({state: 'off'});
        extension_status = "on"
        chrome.tabs.reload(extensionOn)
      } else {
        chrome.storage.local.set({state: 'on'})
        extension_status = "off"
        chrome.tabs.reload(extensionOff)
      }
    });
  });