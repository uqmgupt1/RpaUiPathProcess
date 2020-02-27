function(element,input){
var xhr = new XMLHttpRequest();
xhr.open("POST","yourUrl",true);
xhr.setRequestHeader('Content-Type','application/json');
xhr.send(JSON.stringify(jsonText));
return xhr.status + ""
}