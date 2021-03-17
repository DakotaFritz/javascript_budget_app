// I want a title on the page and then two columns of content.
// Ideally, I want the right side to be the summary and maybe have visualization to it.
// I want the right side to be static and the left side to scroll.
// I want the right side to contain the total numbers for each category.
// I want a file upload button in the top right.
// I want a way to indicate that I only can handle CSV files.
// I want an input transaction button to be next to the file upload button.
// I want to show each category of transaction and the transactions within the category listed down in whatever specific order
// I want a floating "Edit" button to follow the cursor down the page and then transforms those fields to input or drop-down menu (for category)

function appendToCategories() {
  let categories = document.getElementById("preset-categories");
  let newCategoriesOption = document.createElement("option");
  let inputCategory = document.getElementById("createCategory");
  newCategoriesOption.text = inputCategory.value;
  categories.add(newCategoriesOption)
}


let presetCategoriesDiv = document.getElementById("presetCategoriesDiv");
let getPresetJSON = require("./budget-categories.json");
console.log(getPresetJSON);
let presetCategories = JSON.parse(getPresetJSON);
presetCategoriesDiv.innerHTML = presetCategories.value;




function uploadDealcsv () {}; 

  /*------ Method for read uploded csv file ------*/
  uploadDealcsv.prototype.getCsv = function(e) {
       
      let input = document.querySelector('input[type="file"]');
      input.addEventListener('change', function() {

        

        // console.log(input.files)

        let reader = new FileReader()
        reader.onload = function () {
            const lines = reader.result.split('\n').slice(1)
            lines.forEach(element => {
                const column = element.split(',')
                const transDate = column[0]
                const postDate = column[1]
                console.log(transDate, postDate)
            });
        }
        reader.readAsText(input.files[0])

        // if (this.files && this.files[0]) {

        //     var myFile = this.files[0];
        //     var reader = new FileReader();
            
        //     reader.addEventListener('load', function (e) {
                
        //         let csvdata = e.target.result; 
        //         parseCsv.getParsecsvdata(csvdata); // calling function for parse csv data 
        //     });
            
        //     reader.readAsBinaryString(myFile);
        // }
      });
    }


    /*------- Method for parse csv data and display --------------*/
    // uploadDealcsv.prototype.getParsecsvdata = function(data) {

    //     let parsedata = [];

    //     let newLinebrk = data.split("\n");
    //     for(let i = 0; i < newLinebrk.length; i++) {

    //         parsedata.push(newLinebrk[i].split(","))
    //     }

    //     console.table(parsedata);
    // }


    // Google Sheets API stuff
    // const {google} = require('googleapis');
    // const keys = require('./keys.json');

    // const client = new google.auth.JWT(
    //     keys.client_email, 
    //     null, 
    //     keys.private_key, 
    //     ['https://www.googleapis.com/auth/spreadsheets']
    // );

    // client.authorize(function(err, tokens){

    //     if(err){
    //         console.log(err);
    //         return;
    //     } else {
    //         console.log('Connected');
    //         gsrun(client);
    //     }
    // });


    // async function gsrun(cl){

    //     const gsapi = google.sheets({version: 'v4', auth: cl });

    //     const opt = {
    //         spreadsheetId: '1CQVh7_iw-3smPkQA_aEDZtki7tHIillQqcWw1Bgr1Po',
    //         range: 'Current Transactions!A2:D78'
    //     };

    //     let data = await gsapi.spreadsheets.values.get(opt);
    //     let dataArray = data.data.values;
    //     let newDataArray = dataArray.map(function(r){
    //         r.push(r[0] + '-' + r[1]);
    //         return r;
    //     })

    //     dataArray = dataArray.map(function(r){
    //         while(r.length < 2){
    //             r.push('');
    //         }
    //         return r;
    //     });

    //     const updateOptions = {
    //         spreadsheetId: '1CQVh7_iw-3smPkQA_aEDZtki7tHIillQqcWw1Bgr1Po',
    //         range: 'Current Transactions!E2',
    //         valueInputOption: 'USER_ENTERED',
    //         resource: { values: newDataArray}
    //     };

    //     let res = await gsapi.spreadsheets.values.update(updateOptions);
    // }