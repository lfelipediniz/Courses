function uploadData() {

   let xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function() {

        if(xhr.readyState == 4 && xhr.status == 200) {

            document.getElementById("data").innerHTML = formatData(xhr.responseText);
        }
   }

        xhr.open("GET", "list.json", true);
        xhr.send();
   }

function formatData(strData) {

    let objData = JSON.parse(strData);
    let tableLine = '';

    for(la of objData['listOfAuthors']) {

        tableLine += '<tr>' +  
        
        '<td>' + la['id'] + '</td>' +
        '<td>' + la['name'] + '</td>' +
        '<td>' + la['age'] + '</td>' +
        '<td>' + la['email'] + '</td>'
        +   '</tr>'
    }

    return tableLine;
}

uploadData();


setInterval(function(){

    window.location.reload(1);

 }, 10000); // function to reload a page

