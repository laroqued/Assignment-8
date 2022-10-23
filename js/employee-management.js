var $ = function (id) {
  "use strict";
  return document.getElementById(id);
};

const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");

var employee_list = [
  [
    "Sally Smith",
    "Quality Insurance",
    "3423",
    `<td><button id="row-delete" class="deleteBtn">Delete</button></td>`,
  ],
  [
    "Mark Martin",
    "VP Sales",
    "3346",
    `<td><button id="row-delete" class="deleteBtn">Delete</button></td>`,
  ],
  [
    "John Johnson",
    "Marketing",
    "3232",
    `<td><button id="row-delete" class="deleteBtn">Delete</button></td>`,
  ],
  [
    "Donnyves Laroque",
    "IT",
    "3554",
    `<td><button id="row-delete" class="deleteBtn">Delete</button></td>`,
  ],
  [
    "Jack Bauer",
    "Security",
    "3193",
    `<td><button id="row-delete" class="deleteBtn">Delete</button></td>`,
  ],
];

employee_list.map(function (item, index) {
  console.log(`${index} ${item[0]} ${item[1]} ${item[2]} ${item[3]}`);
  tbodyEl.innerHTML += `
            <tr>
                    <td>${item[0]}</td>
                <td>${item[1]}</td>
                <td>${item[2]}</td>
                ${item[3]}
            </tr>
        `;
});

var result = document.querySelectorAll("tr").length;
result = result - 1;
document.getElementById("rowsCount").innerHTML = result;

function processEntries(e) {
  e.preventDefault();

  header = "";
  html = "";
  var name = $("name_input").value;
  var title = $("title_input").value;
  var extension = $("extension_input").value;
  var deleteButton = `<td><button id="row-delete" class="deleteBtn">Delete</button></td>`;

  required = "<span>Required field</span>";
  msg = "Please review your entries and complete all required fields";
  var required;

  var entry = [`${name}`, `${title}`, `${extension}`, `${deleteButton}`];

  var result1 = document.querySelectorAll("tr").length;
  document.getElementById("rowsCount").innerHTML = result1;
  employee_list.map(function (item) {
    console.log(`${item[0]} ${item[1]} ${item[2]} ${item[3]}`);
  });

  if (name === "") {
    name = required;
    header = msg;
  }
  if (title === "") {
    title = required;
    header = msg;
  }
  if (extension === "") {
    extension = required;
    header = msg;
  }

  $("registration_header").firstChild.nodeValue = header;

  if (header === msg) {
    html = `$<div style="color:red">Name:</div><p style="color:red"> ${name} </p> <br>"`;
    html = `$ <div style="color:red">Title:</div><p style="color:red"> ${title} </p><br>`;
    html = `$<div style="color:red">Extension:</div><p style="color:red"> ${extension} </p><br>`;
      result1 = document.querySelectorAll("tr").length - 1;
      document.getElementById("rowsCount").innerHTML = result1;
  }else{
     tbodyEl.innerHTML += `
            <tr>
                    <td>${name}</td>
                <td>${title}</td>
                <td>${extension}</td>
                <td><button id="row-delete" class="deleteBtn">Delete</button></td>
            </tr>
        `;
  }
 
}

function deleteRow(e) {
  result1 = document.querySelectorAll("tr").length - 1;
  document.getElementById("rowsCount").innerHTML = result1 - 1;
  console.log(result1);

  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

formEl.addEventListener("submit", processEntries);
tableEl.addEventListener("click", deleteRow);
