let cartButton = document.querySelector(".form-cart__button");

cartButton.addEventListener("click", (evt) => {
  evt.preventDefault();

  let formCartDateBegin = document.querySelector(".form-cart__date--begin")
    .value;
  let formCartDateEnd = document.querySelector(".form-cart__date--end").value;
  let formInputHour = document.querySelector(".form__input-hour").value;
  let formInputName = document.querySelector(".form__input-name").value;
  let formCartInputCompany = document.querySelector(
    ".form-cart__input--company"
  ).value;
  let formInputPhone = document.querySelector(".form__input--phone").value;
  let formCartInputMail = document.querySelector(".form-cart__input-mail")
    .value;
  let formCartTextarea = document.querySelector(".form-cart__textarea").value;
  let bascet = localStorage.getItem("cart");

  let urlRequest = "../mailer/form.php";
  if (formCartDateBegin != formCartDateEnd){
    formInputHour = '';
  }
  let bodyResponse = {
    dataBegin: formCartDateBegin,
    dataEnd: formCartDateEnd,
    hours: formInputHour,
    name: formInputName,
    nameCompany: formCartInputCompany,
    phone: formInputPhone,
    email: formCartInputMail,
    comment: formCartTextarea,
    bascet: bascet,
  };

  function sendRequest(method, url, body = null) {
    return fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      console.log("OK");
      $('.form-cart').hide();
    });
  }
  sendRequest("POST", urlRequest, bodyResponse);
});
