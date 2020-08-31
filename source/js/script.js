// футер аккардеон
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

// заказать звонок ПОПАП

var popupBtn = document.querySelector(".nav__btn");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup__close");
var overlay = document.querySelector(".overlay");
var inputName = document.querySelector(".popup__name");
var phoneNumber = popup.querySelector(".popup__tel");
var question = popup.querySelector(".popup__text");

popupBtn.addEventListener("click", openPopup);

popupClose.addEventListener("click", closePopup);

overlay.addEventListener("click", closePopup);


if (popup) {
  inputName.value = localStorage.getItem("inputName");
  phoneNumber.value = localStorage.getItem("phoneNumber");
  question.value = localStorage.getItem("question");

  var isStorageSupport = true;
}

function openPopup() {
  popup.classList.add("open");
  overlay.classList.add("open");

  if (storage) {
    inputName.value = storage;
    phoneNumber.focus();
  } else {
    inputName.focus();
  }
}

function closePopup() {
  popup.classList.remove("open");
  overlay.classList.remove("open");
}

function keyPress (e) {
    if(e.key === "Escape") {
        closePopup();
    }
}

document.addEventListener("keydown", keyPress);

popup.addEventListener("submit", function (evt) {
  console.log("1");
  if (!inputName.value || !phoneNumber.value || !question.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("inputName", inputName.value);
      localStorage.setItem("phoneNumber", phoneNumber.value);
      localStorage.setItem("question", question.value);
    }
  }
  closePopup();
    });


// маска телефона

var phoneInputs = document.querySelectorAll("input[type=tel]");

console.log(phoneInputs);

for (var i = 0; i < phoneInputs.length; i++) {
  new IMask(phoneInputs[i], {
    mask: "+{7}(000)000-00-00",
  });
}
