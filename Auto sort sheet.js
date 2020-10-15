// Automatically sort all columns in spreadsheet when editing

// Sort ascending or descending?
const sort_ascending = true;

// Sort by this column
const sort_by_column_number = 1;

// Name of sheet which will be sorted
const sheet_name = "Sheet1";

// Emergency disable
var disable_script = false;


function sortColumns() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(sheet_name);

    if (!sort_ascending) {
        sheet.sort(sort_by_column_number, false);
    }
    else {
        sheet.sort(sort_by_column_number);
    }
}

function onEdit() {
    if (!disable_script) {
        sortColumns();
    }
}

function onOpen() {
    if (!disable_script) {
        sortColumns();
    }
}
