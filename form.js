function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  sheet.appendRow([
    new Date(),
    e.parameter.name,
    e.parameter.father,
    e.parameter.dob,
    e.parameter.gender,
    e.parameter.mobile,
    e.parameter.email,
    e.parameter.address,
    e.parameter.qualification,
    e.parameter.course,
    e.parameter.duration,
    e.parameter.batch,
    e.parameter.experience,
    e.parameter.remarks
  ]);

  return ContentService.createTextOutput("Success");
}
