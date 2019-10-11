var list = document.querySelector(".makeList ul");
var btns = document.querySelectorAll(".listItem div");
var done = document.querySelector(".planningItem");

list.addEventListener('click', function(e){
  if(e.target.className == 'deleteButton'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
})

var addItem = document.getElementById('addItemBox');
var addItemButton = document.getElementById('addItemButton');



addItemButton.addEventListener('click', function(e){
  e.preventDefault();
  const value = addItem.querySelector('input[type="text"]').value;

  //Create ITEMS
  var li = document.createElement("li");
  var locationName = document.createElement("h2");
  var deleteButton = document.createElement("div");

  //Add content
  deleteButton.textContent = "verwijder";
  locationName.textContent = value;

  deleteButton.classList.add("deleteButton");
  li.classList.add("listItem");

  //Append to Document
  li.appendChild(locationName);
  li.appendChild(deleteButton);
  list.appendChild(li);
});
