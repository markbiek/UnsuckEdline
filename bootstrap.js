chrome.tabs.onUpdated.addListener( function(id, info, tab) {
    if(tab.url != undefined && tab.url.toLowerCase().indexOf("edline.net") > -1) {
        chrome.pageAction.show(tab.id);
        chrome.tabs.executeScript(tab.id, {
            "file": "jquery.min.js"
        }, function() {
            chrome.tabs.executeScript(tab.id, {
                "file": "extension.js" 
            }, function() {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError.message);
                }
            });
        });
    }
});
