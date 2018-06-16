//Задаем пользователю вопрос

let mainList = {
	attitudes: name,


attitudes: function attitudes() {
			
			let attitudes = prompt("Какое у вас отношение к технике Apple?", 'Все окей!!');
			while ( !isNaN(attitudes) || attitudes === '' || attitudes === null)  {	
			attitudes = prompt('Какое у вас отношение к технике Apple?', 'Все окей!!');	
		}
	}

};

window.onload = function() {
   mainList.attitudes();
};

//Удаляем рукламу

let elem = document.querySelector('.adv');
	elem.remove();

//меняем фон картинки
var ReplaceBackground = function() {
   document.body.style.background = 'url(img/apple_true.jpg)';
}

document.addEventListener("DOMContentLoaded", ReplaceBackground);

//Изменить заколовок страницы

document.getElementById("title").innerHTML="Мы продаем только подлинную технику Apple";


//добавляем элемент меню

let li = document.createElement('li'); //создаем элемент
let ul_menu = document.getElementsByClassName('menu'); //обращаемся к элементу ul_menu и добавляем класс
let ul_li = document.getElementsByTagName('li'); //Обращение ко всем элементам li
ul_menu[0].insertBefore(ul_li[2], ul_li[1]); //Меняем элементы местами

li.classList.add('menu-item');
li.textContent = 'Пятый пункт';

ul_menu[0].appendChild(li);
