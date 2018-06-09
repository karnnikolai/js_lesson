let week = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
	for(let i = 0; 1 < 7; i++){
		if (i > 3){
			 
			document.write(week[i].bold() + '<br>');  
		}
		else if (i <= 3){

			document.write(week[i].italics() + '<br>');
		}
	}

