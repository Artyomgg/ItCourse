const answer2 = {
	ans1: 'img/Screenshot_4.png',
	ans2: 'img/Screenshot_5.png',
	
}

const answer3 = {
	ans1: 'Нарисуйте дом',
	ans2: 'Нарисуйте IPHONE 16',
	ans3: 'Нарисуйте планшет(любой)'
}

const ans = document.querySelectorAll('.inn-js')[0]
const geneRate = document
	.querySelectorAll('.btn-generate')[0]
	.addEventListener('click', () => {
		setTimeout(clickGenerate, 1000)
	})
let random = Math.floor(Math.random() * 2) + 1

function clickGenerate() {
	if (random == 1) {
		ans.src = answer2.ans1
	} else if (random == 2) {
		ans.src = answer2.ans2
	}
}
const ans2 = document.querySelectorAll('.inn-js')[1]
const geneRate2 = document
	.querySelectorAll('.btn-generate')[1]
	.addEventListener('click', () => {
		setTimeout(clickGenerate2, 1000)
	})
let random2 = Math.floor(Math.random() * 3) + 1

function clickGenerate2() {
	if (random2 == 1) {
		ans2.textContent = answer3.ans1
	} else if (random2 == 2) {
		ans2.textContent = answer3.ans2
	}else if (random2 == 3) {
		ans2.textContent = answer3.ans3
	}
}
