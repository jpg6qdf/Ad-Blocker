var url_list = []

async function fetchData() {
    const res = await fetch ("https://easylist.to/easylist/easylist.txt");
    const record = await res.text();
    var lines = record.split('\n');
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
            return {cancel: true}; 
        },
        { urls: url_list },
        ["blocking"]
    );
}

fetchData();

