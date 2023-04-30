
// тех характеристики бассейна
let swimPool1 = {
    d: 2.2 ,   //Диаметр емкости
    h: 1.2 ,
    price: 40000 ,
    w: 3.42,
    s: 3.8,
};
 
// Запрос данных
alert(`Добрый день! С помощью данного ресурса вы сможете произвести расчеты узв!`);
let n = prompt(`Выберите действие и напишите номер:
1 - Расчет по площади помещения
2 - Расчет по количеству бассейнов `);
choose(n);

// Обработка введенных данных и запрос на получение новых данных
function choose(n) {
    switch (n) {
        case `1`:
            CalcHouse();
            if (swimPool1.number>0) {
                chooseFish();
            };
        break;
        case `2`:
            swimPool1.number = +prompt(`Введите количество бассейнов:`);
            if (swimPool1.number>0) {
                chooseFish();
            } else {
              alert(`Ввели некорректное значение!`)  
            };
            
        break;
    
        default:
            alert(`Вы ввели некоректное значение, повторите попытку!`)
            break;
    };
    
};

// выявление габаритов помещения и насколько помещение подходит для узв Фермы
function CalcHouse()  {
    let length = + prompt(`Введите длину помещения:`);
    let width = + prompt(`Введите ширину помещения:`);
    if (length > swimPool1.d && width > swimPool1.d) {
        swimPool1.number =Math.floor( (width * length*0.7)/(swimPool1.d*2));
    } else {
        alert(`Помещение неудовлетворяет минимальным критериям!`);
    };
};
    

// выявление, какой вид рыбы собирается разводить пользователь 

function chooseFish() {
    let output = document.getElementById("output");
    let n = prompt(`Выберите рыбу для разведения:
1 - Форель
2 - Стербел и бестер
3 - Клариевый сом`);
switch (n) {
    case `1`:
        money = calcForel();
        
for (let index = 0; index < money.length; index++) {
    output.innerHTML = money;
}
        return money;
    case `2`:
        money = calcOsetr();
        for (let index = 0; index < money.length; index++) {
            output.innerHTML = money;
        }
        return money;
    case `3`:
        money = calcSom();
        for (let index = 0; index < money.length; index++) {
            output.innerHTML = money;
        }
        return money;
                     
        

    default:
        break;
}

};


function calcForel() {
    let result = [];

    let quality =Math.floor (swimPool1.number* swimPool1.w * 80 *1.1 / 1.5);

    result.push (`Количество малька:`);
    result.push (`<br>`);
    result.push (quality);
    result.push (`шт.`);
    result.push (`<br>`);

    let price = + prompt(`Введите стоимость малька весом 5 гр:`);

    result.push (`Стоимость малька:`);
    result.push (`<br>`);
    result.push (price);
    result.push (`руб.`);
    result.push (`<br>`);

    price *=quality;
    let corm = + prompt (`Введите стоимость корма за кг:`);

    result.push (`Стоимость корма за 1 кг:`);
    result.push (`<br>`);
    result.push (corm);
    result.push (`руб.`);
    result.push (`<br>`);

    corm *= quality*0.9*1.5*1.2;
    let money = + prompt (`Введите стоимость 1 кг рыбы:`);

    result.push (`Стоимость реализации 1 кг рыбы:`);
    result.push (`<br>`);
    result.push (money);
    result.push (`руб.`);
    result.push (`<br>`);

    money = money*quality*0.9*1.5;

    console.log(`Стоимость продажи рыбы за  : ${money}`);

    result.push (`Cтоимость продажи всей рыбы:`);
    result.push (`<br>`);
    result.push (money);
    result.push (`руб.`);
    result.push (`<br>`);

    money -= corm;
    result.push (`Расходы на покупку рыбопосадочного материала составляет :`);
    result.push (`<br>`);
    result.push (price);
    result.push (`руб.`);
    result.push (`<br>`);
    result.push (`Расходы на покупку корма составляет :`);
    result.push (`<br>`);
    result.push (corm);
    result.push (`руб.`);
    result.push (`<br>`);
    result.push (`Полученная прибыль составляет:`);
    result.push (`<br>`);
    result.push (money);
    result.push (`руб.`);
    result.push (`<br>`);
    
    return result;
  };
function calcOsetr() {
    let result = [];

    let quality =Math.floor (swimPool1.number* swimPool1.s * 50 *1.1 / 1.5);

    result.push (`Количество малька:`);
    result.push (`<br>`);
    result.push (quality);
    result.push (`шт.`);
    result.push (`<br>`);

    let price = + prompt(`Введите стоимость малька весом 5 гр:`);

    result.push (`Стоимость малька:`);
    result.push (`<br>`);
    result.push (price);
    result.push (`руб.`);
    result.push (`<br>`);

    price *=quality;
    let corm = + prompt (`Введите стоимость корма за кг:`);

    result.push (`Стоимость корма за 1 кг:`);
    result.push (`<br>`);
    result.push (corm);
    result.push (`руб.`);
    result.push (`<br>`);

    corm *= quality*0.9*1.5*1.2;
    let money = + prompt (`Введите стоимость 1 кг рыбы:`);

    result.push (`Стоимость реализации 1 кг рыбы:`);
    result.push (`<br>`);
    result.push (money);
    result.push (`руб.`);
    result.push (`<br>`);

    money = money*quality*0.9*1.5;

    console.log(`Стоимость продажи рыбы за  : ${money}`);

    result.push (`Cтоимость продажи всей рыбы:`);
    result.push (`<br>`);
    result.push (money);
    result.push (`руб.`);
    result.push (`<br>`);

    money -= corm;
    result.push (`Расходы на покупку рыбопосадочного материала составляет :`);
    result.push (`<br>`);
    result.push (price);
    result.push (`руб.`);
    result.push (`<br>`);
    result.push (`Расходы на покупку корма составляет :`);
    result.push (`<br>`);
    result.push (corm);
    result.push (`руб.`);
    result.push (`<br>`);
    result.push (`Полученная прибыль составляет:`);
    result.push (`<br>`);
    result.push (money);
    result.push (`руб.`);
    result.push (`<br>`);
    
    return result;
  };
  function calcSom() {
    let result = [];

    let quality =Math.floor (swimPool1.number* swimPool1.w * 150 *1.1 / 1.5);

    result.push (`Количество малька:`);
    result.push (`<br>`);
    result.push (quality);
    result.push (`шт.`);
    result.push (`<br>`);

    let price = + prompt(`Введите стоимость малька весом 5 гр:`);

    result.push (`Стоимость малька:`);
    result.push (`<br>`);
    result.push (price);
    result.push (`руб.`);
    result.push (`<br>`);

    price *=quality;
    let corm = + prompt (`Введите стоимость корма за кг:`);

    result.push (`Стоимость корма за 1 кг:`);
    result.push (`<br>`);
    result.push (corm);
    result.push (`руб.`);
    result.push (`<br>`);

    corm *= quality*0.9*1.5*1.2;
    let money = + prompt (`Введите стоимость 1 кг рыбы:`);

    result.push (`Стоимость реализации 1 кг рыбы:`);
    result.push (`<br>`);
    result.push (money);
    result.push (`руб.`);
    result.push (`<br>`);

    money = money*quality*0.9*1.5;

    console.log(`Стоимость продажи рыбы за  : ${money}`);

    result.push (`Cтоимость продажи всей рыбы:`);
    result.push (`<br>`);
    result.push (money);
    result.push (`руб.`);
    result.push (`<br>`);

    money -= corm;
    result.push (`Расходы на покупку рыбопосадочного материала составляет :`);
    result.push (`<br>`);
    result.push (price);
    result.push (`руб.`);
    result.push (`<br>`);
    result.push (`Расходы на покупку корма составляет :`);
    result.push (`<br>`);
    result.push (corm);
    result.push (`руб.`);
    result.push (`<br>`);
    result.push (`Полученная прибыль составляет:`);
    result.push (`<br>`);
    result.push (money);
    result.push (`руб.`);
    result.push (`<br>`);
    
    return result;
  };







/* 
// В разработке!!!
function AskBio() {
    let ask = promnt(`Сделать полноценный расчет Строительства узв?);
    Ответ: да/нет`)
    switch (ask) {
        case 'да':
  
        CalcBio();
            break;
    
        default:
            alert(`До свидания!`)
            break;
    }
}; */