const seasons = () => {
	let month = +prompt("Введите номер месяца от  1 до 12");
	if (month === 1 || month === 2 || month === 12) {
		alert("Зима");
	} else if (month >= 3 && month <= 5) {
		alert("Весна");
	} else if (month >= 6 && month <= 8) {
		alert("Лето");
	} else if (month >= 9 && month <= 11) {
		alert("Осень");
	} else {
		alert("Неверно ввели число. Попробуйте ещё раз");
	}
}


const rememberWords = () => {
	let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
	arr = arr.sort(() => Math.random() - 0.5);
	let arrForUser = arr.join(', ');
	alert(arrForUser);
	for (i = 0; i < arr.length; i++) {
		arr[i] = arr[i].toLowerCase();
	}
	let firstElem = prompt('Чему равнялся первый элемент?');
	firstElem = firstElem.toLowerCase();
	let lastElem = prompt('Чему равнялся последний элемент?');
	lastElem = lastElem.toLowerCase();
	if (firstElem == arr[0] && lastElem == arr[arr.length - 1]) {
		alert('Поздравляю. У вас хорошая память!');
	} else if (firstElem === arr[0] || lastElem === arr[arr.length - 1]) {
		alert('Вы были близки к победе!');
	} else {
		alert('Вы не угадали ни одного элемента');
	}
}


const puzzles = () => {
	const puzzle1 = {
		question: 'Сидит дед во сто шуб одет, кто его раздевает, тот слезы проливает',
		answer: 'лук',
		hint: ['Первая подсказка: Это овощ', 'Вторая подсказка: У него много слоев']
	}

	let userAnswer = prompt(puzzle1.question).toLowerCase();

	for (let i = 0; i <= 1; i++) {
		if (userAnswer !== puzzle1.answer) {
			userAnswer = prompt(puzzle1.hint[i]).toLowerCase();
		}
		if (userAnswer == puzzle1.answer) {
			alert('Поздравляю! Вы угадали!');
			break;
		} 
		if (i === 1 && userAnswer !== puzzle1.answer) {
			alert('Попробуйте в другой раз');
		}
	}
}
