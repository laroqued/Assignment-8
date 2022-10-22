/*eslint-env browser*/

var $ = function (id) {
  "use strict";
  return document.getElementById(id);
};

var processEntries = function () {
  "use strict";
  console.log(`Add Row clicked`);

  var header, html, required, msg, name, title, email;
};

window.addEventListener("load", function () {
  "use strict";
  $("add_row").addEventListener("click", processEntries);

  $("name_input").focus();
});
