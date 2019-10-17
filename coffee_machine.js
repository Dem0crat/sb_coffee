window.addEventListener("load", function(event) {
  var coffee_menu = {
    Эспрессо: 90,
    Латте: 130,
    Капучино: 110,
    "Банановый латте": 150,
    "Ванильный капучино": 150,
    "Флэт уайт": 100,
    Молоко: 25,
    "Вишневый сироп": 35
  };
  var price_for_cash;
  const list_of_goods = Object.keys(coffee_menu);
  const prices = Object.values(coffee_menu);

  //Кнопки кофе + добавки + цены
  for (let button_index = 1; button_index < 9; button_index++) {
    const buttons_collection = document.getElementsByClassName(
      "coffee_buttons"
    );
    buttons_collection[button_index].addEventListener("click", function() {
      set_display(list_of_goods[button_index - 1], prices[button_index - 1]);
    });
  }

  // Кнопка отмены заказа
  const abort_button = document.getElementById("abort");
  abort_button.addEventListener("click", function() {
    set_display();
  });

  //Установки экрана
  function set_display(coffee, price) {
    if ((coffee, price == undefined)) {
      let output_display = document.getElementById("display_text");
      output_display.innerHTML = "";
    } else {
      let output_display = document.getElementById("display_text");
      output_display.innerHTML = "Вы заказали: " + coffee + ". Цена: " + price;
      price_for_cash = price;
    }
  }

  //Кнопка оплаты
  const cash_button = document.getElementById("cash");
  cash_button.addEventListener("click", function() {
    cash();
  });

  //Функция оплаты
  function cash() {
    let enter_cash = prompt();
    if (Number(enter_cash) >= Number(price_for_cash)) {
      coffee_cook_progress();
    } else {
      let answer = document.getElementById("display_text");
      answer.innerHTML = "Недостаточно средств";
    }
  }

  //Прогресс-бар
  function coffee_cook_progress() {
    var counter = 0;
    document.getElementById("progress_bar").style.visibility = "visible";

    function progress() {
      counter++;
      document.getElementById("progress_bar").value = counter;
      if (counter == 100) {
        clearInterval(timer);
        let answer = document.getElementById("display_text");
        answer.innerHTML = "Успешная оплата";
        document.getElementById("progress_bar").value = 0;
        document.getElementById("progress_bar").style.visibility = "hidden";
      }
    }
    var timer = setInterval(progress, 100);
  }
});
