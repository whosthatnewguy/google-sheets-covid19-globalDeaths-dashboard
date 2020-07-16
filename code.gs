function getCovidData(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const s = ss.getSheetByName("<sheetName>");

  // get covid data from spreadsheet
  const textData = s.getRange(1, 1, s.getLastRow()-1,s.getLastColumn()).getDisplayValues();
  return textData.map(r =>[r[0],parseInt(r[1]), parseInt(r[2])]);
}
