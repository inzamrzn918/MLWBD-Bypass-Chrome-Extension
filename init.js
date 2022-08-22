(function(){
    let url = 'https://raw.githubusercontent.com/inzamrzn918/database/main/mlwbd_domains.json';

    fetch(url)
    .then(res => res.json())
    .then(out =>{
        console.log('Checkout this JSON! ', out);
        chrome.storage.sync.set('url');
    })
    .catch(err => console.log(err));
    let table = document.getElementsByName("FU");
    let fn = document.getElementsByName("FN")
    let invdl = document.getElementsByTagName("a")


    
    // console.log(table);
    table.forEach(rows=>{
        if (rows['value'].includes("https://songslyric.site/")){
            console.log(rows['value']);
            let container = document.getElementsByClassName("fix-table")
            if (container.length>0){
                for (let i=0; i<invdl.length; i++){
                    if (invdl[i].getAttribute("href")=="#download"){
                        invdl[i].setAttribute("href", rows['value']);
                    }
                }
                container[0].innerHTML = `<a href="${rows['value']}" style="background-color: red; border: none; border-radius: 15px; color: #fff; /* Dark grey */ padding: 32px 32px">Download Movie</a>`;
            }
            
        }
    })

    console.log(table);
    
})();


function getHtmlFromUrl(url){
    return "";
}