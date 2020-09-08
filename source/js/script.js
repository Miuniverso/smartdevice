// футер аккардеон

var items = [document.querySelector(".sections__title"), document.querySelector(".address__title")];

// var items = [document.querySelector(".sections"), document.querySelector(".address")];

var btns = [document.querySelector(".sections__btn"), document.querySelector(".address__btn")];


// for (var i = 0; i < items.length, i++) {
//   items[i].addEventListener("click", )
// }

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", accordion);
  // btns[i].addEventListener("click", accordion);
  // btns[i].addEventListener("click", function(event) {

    // if(event.target.classList.contains("btn-open")) {
    //   btns.forEach(function(btn) {
    //     btn.classList.remove("btn-open");
    //     btn.nextElementSibling.classList.remove("open");
    //   });
    // } else {
    //   btns.forEach(function(btn) {
    //     btn.classList.remove("btn-open");
    //     btn.nextElementSibling.classList.remove("open");
    //   });
    //   event.target.classList.add("btn-open");
    //   event.target.nextElementSibling.classList.add("open");
    // }
  // })
}

// function accordion(event) {
//   if(event.target.classList.contains("btn-open")) {
//     btns.forEach(function(btn) {
//       btn.classList.remove("btn-open");
//       btn.nextElementSibling.classList.remove("open");
//     });
//   } else {
//     btns.forEach(function(btn) {
//       btn.classList.remove("btn-open");
//       btn.nextElementSibling.classList.remove("open");
//     });
//     event.target.classList.add("btn-open");
//     event.target.nextElementSibling.classList.add("open");
//   }
// }

function accordion(event) {
  console.log(event.currentTarget);

  if(event.target.classList.contains("btn-open") || event.target.nextElementSibling.classList.contains("btn-open")) {
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
}

// заказать звонок ПОПАП

var mainBody = document.querySelector("body");
var popupBtn = document.querySelector(".nav__btn");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup__close");
var overlay = document.querySelector(".overlay");
var inputName = document.querySelector(".popup__name");
var phoneNumber = popup.querySelector(".popup__tel");
var question = popup.querySelector(".popup__text");
var storage = "";

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
  mainBody.classList.add("no-scroll");

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
  mainBody.classList.remove("no-scroll");
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

for (var i = 0; i < phoneInputs.length; i++) {
  new IMask(phoneInputs[i], {
    mask: "+{7}(000)000-00-00",
  });
}
