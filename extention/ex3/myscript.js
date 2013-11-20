chrome.browserAction.onClicked.addListener(function(){
	chrome.tabs.executeScript(null, {
        "code": "document.body.style.backgroundColor='green'"
    });
})

// function changeColor(color) {
    
// }
 
// document.getElementById('red').onclick = function() {
//     changeColor('red');
// }
 
// document.getElementById('yellow').onclick = function() {
//     changeColor('yellow');
// }