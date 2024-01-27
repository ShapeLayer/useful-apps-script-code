/**
 * Get sheet's data from (startCol, startRow) to (startCol + lookupWidth, startRow + lookupHeight)
 * @param {string} sheetName The name of sheet to get data.
 * @param {number} startRow
 * @param {number} startCol
 * @param {number} lookupHeight
 * @param {number} lookupWidth
 * @return The sheet data for a given range.
 * @customfunction
*/
const GET_SHEET = (sheetName, startRow, startCol, lookupHeight, lookupWidth) => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName)
  const table = sheet.getRange(startRow, startCol, lookupHeight, lookupWidth).getValues()
  return table
}
