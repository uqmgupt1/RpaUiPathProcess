/*function sendRequest(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, false);
	xhr.setRequestHeader('Content-Type','application/json');
	xhr.send(JSON.stringify(jsonText));
        xhr.onreadystatechange = function() {
		if (xhr.readyState == XMLHttpRequest.DONE) {
			callback(xhr.status);
		};
	};

};

//sendRequest("yourUrl", function(status){return status;});

var url = 'https://google.com.au'; //A local page
a = sendRequest(url, function(status){return status;});

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}


function() {
	var url = "yourUrl";
        var status;
    	var sendRequest = function(url, callback) {
      		var xhr = new XMLHttpRequest();
    		xhr.open("POST", url, false);
		xhr.setRequestHeader('Content-Type','application/json');
		xhr.onreadystatechange = function() {
		if (xhr.readyState == XMLHttpRequest.DONE) {
			callback(xhr.status);
		};
		xhr.send(JSON.stringify(jsonText));
	}
	sendRequest(url, function(){});
	return status;
}

(async() => {
        let response = await fetch("yourUrl", {
		method:"POST",
		headers: {
      			'Content-Type': 'application/json'
      		},
                body: JSON.stringify(jsonText),
	})
	.then(data => console.log(data.json()))
	.then(res => console.log(res))
	.catch(error => console.log(error));
})();
*/

async function(element, input) {

//function(element, input) {
	let status;
	let response = await fetch("yourUrl", {
	//let response = fetch("yourUrl", {
		method:"POST",
		headers: {
      			'Content-Type': 'application/json'
      		},
		body: JSON.stringify(jsonText),
	})
	//.then(data => {return data.json()})
	//.then(data => console.log(data.json()))
	.then(res => {status = res.status;})
	.catch(error => console.log(error));

        document.getElementsByTagName('iframe')[0].contentDocument.getElementById('taskName').value = status
return;
}


