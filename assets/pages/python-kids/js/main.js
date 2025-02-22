//1
const answer = {
	ans1: 'Напишите команду для построения изображений: цифры 1;',
	ans2: 'Напишите команду для построения изображений: цифры 8;',
	ans3: 'Напишите команду для построения изображений: цифры 9;',
	ans4: 'Напишите команду для построения изображений: цифры 3;',
	ans5: 'Напишите команду для построения изображений: цифры 6;',
	ans6: 'Напишите команду для построения изображений: цифры 7;',
	ans7: 'Напишите команду для построения изображений: цифры 2;',
	ans8: 'Напишите команду для построения изображений: цифры 4;',
	ans9: 'Напишите команду для построения изображений: цифры 5;',
}

const ans1 = document.querySelector('.inn-js')
const geneRate = document
	.querySelector('.btn-generate')
	.addEventListener('click', () => {
		setTimeout(clickGenerate, 1000)
	})
let random = Math.floor(Math.random() * 9) + 1

function clickGenerate() {
	if (random == 1) {
		ans1.textContent = answer.ans1
	} else if (random == 2) {
		ans1.textContent = answer.ans2
	} else if (random == 3) {
		ans1.textContent = answer.ans3
	} else if (random == 4) {
		ans1.textContent = answer.ans4
	} else if (random == 5) {
		ans1.textContent = answer.ans5
	} else if (random == 6) {
		ans1.textContent = answer.ans6
	} else if (random == 7) {
		ans1.textContent = answer.ans7
	} else if (random == 8) {
		ans1.textContent = answer.ans8
	} else if (random == 9) {
		ans1.textContent = answer.ans9
	}
}

