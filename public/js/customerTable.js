$(document).ready(function () {
    //Create Date Editor
    console.log("Sanity")
    var dateEditor = function (cell, onRendered, success, cancel) {
      //cell - the cell component for the editable cell
      //onRendered - function to call when the editor has been rendered
      //success - function to call to pass the succesfully updated value to Tabulator
      //cancel - function to call to abort the edit and return to a normal cell
    
      //create and style editor
      var editor = $("<input type='date'></input>");
      editor.css({
          'padding': '3px',
          'width': '100%',
          'box-sizing': 'border-box',
      });
    
      //Set value of editor to the current value of the cell
      editor.val(moment(cell.getValue(), "DD/MM/YYYY").format("YYYY-MM-DD"));
    
      //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
      onRendered(function () {
          editor.focus();
          editor.css("height", "100%");
      });
    
      //when the value has been set, trigger the cell to update
      editor.on("change blur", function (e) {
          success(moment(editor.val(), "YYYY-MM-DD").format("DD/MM/YYYY"));
      });
    
      //return the editor element
      return editor;
    };
    
    //Build Tabulator
    $("#example-table").tabulator({
      // height: "311px",
      layout: "fitColumns",
      columns: [
          { title: "ID", field: "id" },
          { title: "Name", field: "name" },
          { title: "Business", field: "business" },
          { title: "Work Phone", field: "workphone" },
          { title: "Mobile Phone", field: "mobilephone" },
          
      ],
    
      cellEdited: function (cell) {
          //This callback is called any time a cell is edidted
          var propertyToPersist;
          console.log(Object.keys(cell.cell));
          console.log("Old Value: " + cell.cell.oldValue);
          console.log("New Value: " + cell.cell.value);
    
          // call http action and method here                 
      }
    });
    //define some sample data
    var tabledata = [{
      "id": "2356",
      "name": "Cristy Sillerico",
      "business": "Sweet Treat Inc",
      "workphone": "321-867-2322",
      "mobilephone": "321-905-0213"
      
      
    },
    {
      "id": "2356",
      "name": "Conner Best",
      "business": "Premier Technology",
      "workphone": "334-232-2552",
      "mobilephone": "761-9430-1232"
    },
    {
      "id": "2356",
      "name": "Chris Frizs",
      "business": "Real Estate",
      "workphone": "305-205-2222",
      "mobilephone": "934-900-9832"
    },
    {
      "id": "2356",
      "name": "Gabe ",
      "business": "Blue Diamond",
      "workphone": "407-312-0923",
      "mobilephone": "873-900-1232"
    },
    {
      "id": "2356",
      "name": "Phun Pham",
      "business": "Mobile Protein",
      "workphone": "343-555-7686",
      "mobilephone": "765-866-5665" 
    }
    ]
    // Do AJAX get request for customerList 
    // use data from API to set the data of tabulator
    // can delete example data once data is coming from API
    /////////////////////////////////////////////////////////
    // $.get("/api/customers").then(function(result) {
    //   console.log(result)
    //   $("#example-table").tabulator("setData", result);
    // })
    //////////////////////////////////////////////////////////
    
    //load sample data into the table
    $("#example-table").tabulator("setData", tabledata);
    
    });