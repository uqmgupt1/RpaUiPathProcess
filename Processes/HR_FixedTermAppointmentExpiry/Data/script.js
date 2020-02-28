async function(element, input) {
	let status;
	let response = await fetch("yourUrl", {
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