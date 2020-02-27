function(element,input){
	var xhr = new XMLHttpRequest();
	xhr.open("POST","yourUrl",true);
	xhr.setRequestHeader('Content-Type','application/json');
	xhr.send(JSON.stringify(jsonText));
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4){
			xhr.status
			}
		}
	};