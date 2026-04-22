function fromJSONToHTMLTable(input) {
  let arr = JSON.parse(input);

  function escape(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  let result = "<table>\n";

  let keys = Object.keys(arr[0]);
  result += "   <tr>";
  for (let key of keys) {
    result += `<th>${escape(key)}</th>`;
  }
  result += "</tr>\n";

  for (let obj of arr) {
    result += "   <tr>";
    for (let key of keys) {
      let val = obj[key] ?? "";
      result += `<td>${escape(val)}</td>`;
    }
    result += "</tr>\n";
  }

  result += "</table>";
  return result;
}
