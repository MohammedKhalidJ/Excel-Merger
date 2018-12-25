'use strict';

var excelFetcherFunc = async function excelFetcherFunc() {
    var sourceFile = document.getElementById("SourceExcelId").files[0];

    var data = new FormData();
    data.append('file', sourceFile);
    data.append('user', 'hubot');

    await fetch('http://localhost:3000/excel', { // Your POST endpoint
        method: 'POST',
        body: data // This is your file object
    });
};
