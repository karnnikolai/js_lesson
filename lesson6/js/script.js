let open = document.getElementById('open-btn'), //кнопка


//столбец слева
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],

//столбец справа (категории)
	goods_item = document.getElementsByClassName('goods-item'),

//кнопки 3 шт
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],


//поля ввода
	choose_items = document.querySelector('.choose-item'), //Введите продукты через запятую
	time_value = document.querySelector('.time-value'), //Сколько сейчас времени?
	count_budget_value = document.querySelector('.count-budget-value'), //Расчет дневного бюджета
	
//поля ввода имен сотрудников
	hire_employers_item = document.querySelectorAll('.hire-employers-item'); 


	budget_btn.disabled = 1; // отключение кнопок
	goods_btn.disabled = 1; // отключение кнопок
	employers_btn.disabled = 1; // отключение кнопок
//переменные
let money,
	price;

//ждем собитие при нажатии на кнопку, вводит бюджет, после вводим название магазина
open.addEventListener('click', () => {
		money = prompt('ваш бюджет?', '');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt('ваш бюджет?', '');
	}
	budget_value.textContent = money;

	name_value.textContent = prompt('Название вашего магазина?', '').toUpperCase();
	budget_btn.disabled = 0; // включение кнопок
	goods_btn.disabled = 0; // включение кнопок
	employers_btn.disabled = 0; // включение кнопок
});

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],

};

// сложение слов справа (из 4) и копирование их в левую строку, через запятую
goods_btn.addEventListener('click', () => {
		for (let i = 0; i < goods_item.length; i++) {
		let a = goods_item[i].value;
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50 ) { 
				console.log('все верно');
				mainList.shopGoods[i] = a;
				goods_value.textContent = mainList.shopGoods;
			} else {
				i = i - 1;
		}
	}
});


//автомат ввод данных с поля в таблицу
choose_items.addEventListener('change', () => {
	let items = choose_items.value;

	if ( isNaN(items) && items != '' )  {	
	mainList.shopItems = items.split(",");
	mainList.shopItems.sort();

	items_value.textContent = mainList.shopItems;
	}
})


// вычисление рабочего времени (зеленый / красный)
time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 0) {
	console.log('Такого не может быть!');
	mainList.open = false;
	

	}	else if (time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
		}	else if (time < 24) {
			console.log('Уже слишком поздно!');
			mainList.open = false;
			}	else {
				console.log('В сутках только 24 часа!');
				mainList.open = false;
	};

	if ( mainList.open == true ) {
		isopen_value.style.backgroundColor = 'green'
	} else {
		isopen_value.style.backgroundColor = 'red'
	}

});


// вычисление дисконта 

function discount() {
	if (mainList.discount = true){
		price = (price/100)*80;
	}
}


// расчет бюджета за 30 дней (по 1 дню) 
budget_btn.addEventListener('click', () =>{
	count_budget_value.value = money / 30;
});


//блокировка Input в бюджете
count_budget_value.readOnly = 1;

//найм сотрудников
employers_btn.addEventListener('click', () => {
		for (let i = 0; i < hire_employers_item.length ; i++) {
		let name = hire_employers_item[i].value;
		mainList.employers[i] = name;

		employers_value.textContent += mainList.employers[i] + ', ';
	}
})