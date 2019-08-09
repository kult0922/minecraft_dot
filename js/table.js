/* eslint-disable no-param-reassign */

/* tbody要素のすべての行を削除 */
const clearTableBody = (tbody) => {
  while (tbody.rows.length > 0) {
    tbody.deleteRow(-1);
  }
};

/* tbody要素に行を追加 */
const addTableRow = (tbody, rowData) => {
  // img に展開
  const img = document.createElement('img');
  img.src = rowData.path;
  const tr = tbody.insertRow(); // 末尾に行を作成
  // 各列の要素（セル）を作成
  let td = tr.insertCell();
  td.appendChild(img);
  td = tr.insertCell();
  td.appendChild(document.createTextNode(rowData.name));
  td = tr.insertCell();
  td.appendChild(document.createTextNode(rowData.number));
};

function tableUpdate(data) { // eslint-disable-line no-unused-vars
  // number = 0 を除外する
  data = data.filter(value => value.number);
  const tbody = document.getElementById('tableBody');

  // tbodyのクリア
  clearTableBody(tbody);
  // tbodyの作成
  data.forEach((rowData) => {
    addTableRow(tbody, rowData);
  });
}
