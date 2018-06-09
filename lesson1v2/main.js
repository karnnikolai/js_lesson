let num = "33721"; /*Задается изначально число*/
	num = num.charAt(0)*num.charAt(1)*num.charAt(2)*num.charAt(3)*num.charAt(4);
	console.log(num) /*разбиваем число на части*/
let num1 = num**3; /*Возводим в куб*/
	num1 = String(num1); /*Делаем элемент строчным*/
let firstTwo = num1.charAt(0) + num1.charAt(1); /*Отбираем 0 и 1 число из полученного 
результата*/
alert(firstTwo);/*Показываем результат двух чисел*/
