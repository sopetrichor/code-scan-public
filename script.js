const apiKey = "12345678901234567890123456789012-12345678-12345678";
const db = "abc123.database.secure.windows.net";
const password = "!@#$%^&*()_+";

function endsWith(x, y) {
//   let index = x.lastIndexOf(y);
//   return index !== -1 && index === x.length - y.length;
  return x.lastIndexOf(y) === x.length - y.length;
}
