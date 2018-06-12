let money,
	name,
	time,
	price


function start() {
	
	while (isNaN(money) || money == "" || money == null) {
		money = prompt('Какой ваш бюджет на месяц?', '100000');
		/*Задаем бюджет за 1 месяц */	
		/*Задаем бюджет только в цифрах, что бы не было пустых полей и окошко не закроется, 
		пока не введут цифры  */	
	}
		name = prompt ('Название вашего магазина' , 'games').toUpperCase();
		/*Задаем Название магазина */
		time = 19; /*Задаем время*/
}	

start();

let mainList = {
	budget: money, /*Вычисляем бюджет */
	shop: name, /*Задаем имя магазина */
	shopGoods: [], /*Масив товаров*/
	employers: {}, /*Объект с сотрудниками */
	open: false, /*открыт ли магазин? */
	discount: false
}

function chooseGoods() {
	/*цикл while*/
		let a = 0; /*Задаем a*/
		/*Цикл while , где а меньше 3*/
	while (a < 3) {
		let b = prompt ('Вопрос 1'); /*Задается вопрос пользвателю*/
		mainList.shopGoods[a] = b; /*масив товаров а приравнивается к b*/
		a++; /*Где а каждый шаг увеличивает на 1*/

	}
}

chooseGoods();




function workTime(time) {
	if (time < 0) {
		console.log('Такого просто не может быть!');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		}  else if (time < 24) {
			console.log('Уже слишком поздно!')
			} else {
				console.log('В сутках только 24 часа!')
			} 
}

workTime(18);



function moneyOneDay() {
	alert ("Бюджет на 1 день"+ ' ' + mainList.budget / 30); /*вычисляем бюджет за 1 день,
	от того числа, что выбирали в бюджете*/
	console.log(mainList); /*Выводит информацию из mainList*/	
	
}
	moneyOneDay();

function hireEmployers() { //Сотрудники
	for (let i = 0; i < 4; i++){
		let emp = prompt('Введите имя сотрудника', '');
		mainList.employers[i] = emp;
		emp = emp.charAt(0).toUpperCase() + emp.slice(1).toLowerCase(); //Делаем имя работника с закглавной буквы, а остальные прописные
			if ((typeof(emp)) === 'string' && (typeof(emp)) !== null && emp !== '' && emp.length < 50) {
				console.log('Работника добавлен');
				mainList.employers[i] = i+1 + ' - ' + emp; 
			} else{
				console.log('else block error');
				i--;
		}

	}
}

hireEmployers(); 

if (mainList.discount == true) { //80% от price, если discount = true 
	price = price * 0.8
} else {
	price = price
};






/*Цикл do while*/

/*Задается вопрос пользвателю
масив товаров а приравнивается к b
Где а каждый шаг увеличивает на 1
где а меньше 3*/

/*	let a = 0; 
do {
	let b = prompt ('Вопрос 2')  
	mainList.shopGoods[a] = b; 
	a++; 
}
	while (a < 3); */ 