const apiKey = "12345678901234567890123456789012-12345678-12345678";
const db = "abc123.database.secure.windows.net"

// define database and app
const pg = require('pg');
const app = require('express')();
const pool = new pg.Pool();

// Get a category from the database
app.get("/category/:category", function (req, res) {
  
  var query1 = "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY='"
             + req.params.category + 
             "' ORDER BY PRICE";

  pool.query(query1, [], function(err, results) {
    // process results
  });
 
 res.send('Results')

});

// shortened endsWith function by one line of code
function endsWith(x, y) {
  return x.lastIndexOf(y) === x.length - y.length;
}
