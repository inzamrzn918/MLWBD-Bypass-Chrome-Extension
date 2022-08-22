var list_of_URLs; //you populate this array using AJAX, for instance.
let populate_list_of_URLs = ()=>{
    list_of_URLs =  chrome.storage.sync.get('url')
}
populate_list_of_URLs();

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if (list_of_URLs.indexOf(tab.url) != -1){
        chrome.tabs.executeScript(tabId,{file:"jquery.js"},function(){
            chrome.tabs.executeScript(tabId,{file:"myscript.js"});
        });
    }
});


