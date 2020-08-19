var btns = [document.querySelector(".sections__btn"), document.querySelector(".address__btn")];


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(event) {

    if(event.target.classList.contains("btn-open")) {
      btns.forEach(function(btn) {
        btn.classList.remove("btn-open");
        btn.nextElementSibling.classList.remove("open");
      });
    } else {
      btns.forEach(function(btn) {
        btn.classList.remove("btn-open");
        btn.nextElementSibling.classList.remove("open");
      });
      event.target.classList.add("btn-open");
      event.target.nextElementSibling.classList.add("open");
    }
  })
}
