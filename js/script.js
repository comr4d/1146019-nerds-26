      var link = document.querySelector(".button-link");

      var popup = document.querySelector(".modal");

      var close = popup.querySelector(".close-button");

      var form = popup.querySelector(".fillform");

      var login = popup.querySelector("[name=name]");

      var email = popup.querySelector("[name=email]");

      var message = popup.querySelector("[name=message]");

      var isStorageSupport = true;

      var storage = "";

      try {
        storage = localStorage.getItem("login");

      } catch (err) {
        isStorageSupport = false;
      }

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");

        if (storage) {
        login.value = storage;
        email.focus();}

        else {
        login.focus();
        }
      });

      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      });

      form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !message.value) {
      evt.preventDefault();
      console.log('Нужно ввести имя и электронную почту');
      popup.classList.add("modal-error");
    }else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", login.value);
      }
    }
  });

    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
