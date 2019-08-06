/* eslint-disable no-param-reassign */
function createTable(data, tableId) { // eslint-disable-line no-unused-vars
  // number = 0 を除外する
  data = data.filter(value => value.number);
  const rows = [];
  const table = document.createElement('table');

  for (let i = 0; i < data.length; i += 1) {
    rows.push(table.insertRow(-1));
    const cell = rows[i].insertCell(-1);
    const img = document.createElement('img');
    img.src = data[i].path;
    cell.appendChild(img);
    cell.appendChild(document.createTextNode(data[i].name));
    cell.appendChild(document.createTextNode(data[i].number));
  }
  document.getElementById(tableId).appendChild(table);
}
