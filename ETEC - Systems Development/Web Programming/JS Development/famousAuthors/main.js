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

    for(ls of objData['listOfStudents']) {

        tableLine += '<tr>' +  
        
        '<td>' + ls['id'] + '</td>' +
        '<td>' + ls['name'] + '</td>' +
        '<td>' + ls['age'] + '</td>' +
        '<td>' + ls['email'] + '</td>'
        +   '</tr>'
    }

    return tableLine;
}

uploadData();


setInterval(function(){

    window.location.reload(1);

 }, 10000); // function to reload a page

