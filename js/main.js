var items = document.querySelectorAll(".box-item");
var boxSelect = document.querySelector(".box-select");
var submit = document.querySelector(".box-btn");
var result = document.querySelector(".box-result");
console.log(items);
submit.addEventListener("click", function (e) {
  result.classList.add("box-show");
});
items.forEach(function (item) {
  item.addEventListener("click", function () {
    items.forEach(function (item) {
      item.classList.remove("show");
    });
    item.classList.add("show");
    var temp = `You selected ${item.textContent} out of 5`;
    boxSelect.textContent = temp;
    console.log(temp);
  });
});

result.addEventListener("click", function (e) {
  if (e.target.matches(".box-result")) {
    result.classList.remove("box-show");
  }
});
