window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1)

function showTabContent(b) {
	if ( tabContent[b].classList.contains('hide')){
		hideTabContent(0);
	    tabContent[b].classList.remove('hide');
	    tabContent[b].classList.remove('show');
		}
	}

	info.addEventListener('click', function(event){
		let target = event.target;
		if(target.className == 'info-header-tab'){
			for (let i = 0; i < tab.length; i++){
				if (target == tab[i]){
					showTabContent(i);
					break;
				}
			}
		};
	})

//timer 
	
	let deadline = '2018-03-20';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		second = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor((t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'second': second 
		};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('hours'),
			minutes = timer.querySelector('minutes'),
			second = timer.querySelector('second');
			
			function updateClock() {
				let t = getTimeRemaining(endtime);
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				second.innerHTML = t.second;

				if (t.total <= 0) {
					clearInterval(timeInterval);
				}
			};
			updateClock();
			let timeInterval = setInterval(updateClock, 1000);
	};


	setClock('timer', deadline);

});


