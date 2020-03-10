function() {
	var status;
	var xhr = new XMLHttpRequest();
	xhr.open("POST","yourUrl",true);
	xhr.setRequestHeader('Content-Type','application/json');
	xhr.onreadystatechange = function(){
		if (xhr.readyState == XMLHttpRequest.DONE) {
			status = xhr.status;
		};
	};
	xhr.send(JSON.stringify(jsonText));
	alert(status);
	return status;
};