async function() {

    let result = await doFetch();

    return result;


    function doFetch() {

        return new Promise(function(resolve, reject){

            let xhr = new XMLHttpRequest();

            xhr.open("POST","url", true);

            xhr.setRequestHeader('Content-Type','application/json');

            xhr.onload = function () {

                resolve(this.status);

            };
            xhr.send(JSON.stringify(jsonText));

        })

    };

}