// chrome.browserAction.onClicked.addListener(function(){
// 	chrome.tabs.executeScript(null, {
//         "code": "document.body.style.backgroundColor='green'"
//     });
// })

// $(function(){
// 	$("#yellow").on("click",function(){
// 		alert("aaa");
// 	});
// }

function changeColor(color) {
    chrome.tabs.executeScript(null, {
        "code": "document.body.style.backgroundColor='"+color+"'"
    });
    $("li:last").append("<li>hoge</li>");

    $.get("test.php", function(data){
    	alert("Data Loaded: " + data);
    });
    
    alert($("li:last").text());
}
 
document.getElementById('red').onclick = function() {
    changeColor('red');
}
 
document.getElementById('yellow').onclick = function() {
    changeColor('yellow');
}
// document.getElementById('yellow').onclick = function() {
//     changeColor('yellow');
// }