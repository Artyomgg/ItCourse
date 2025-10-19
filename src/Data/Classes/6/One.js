export const One = {
	id: 1,
	title: 'ИНФОРМАЦИЯ И ИНФОРМАТИКА',
	description: 'Проверка знаний по информации и информатике',
	icon: '📝',
	questions: 10,
	duration: '25 минут',
	path: '/courses/forschool/6/test/1',
	maxScore: 10,
	questions: [
		{
			id: 1,
			question: 'Что из перечисленного можно отнести к свойствам информации?',
			type: 'multiple',
			points: 1,
			options: [
				{ id: 1, text: 'Полная', correct: true },
				{ id: 2, text: 'Актуальная', correct: true },
				{ id: 3, text: 'Достоверная', correct: true },
				{ id: 4, text: 'Тонкая', correct: false },
				{ id: 5, text: 'Бесценная', correct: false },
			],
		},
		{
			id: 2,
			question:
				'Укажите составляющие, которые способствуют развитию компьютерных информационных технологий',
			type: 'multiple',
			points: 1,
			options: [
				{ id: 1, text: 'информационные процессы', correct: false }, // исправлено
				{ id: 2, text: 'программное обеспечение', correct: true },
				{ id: 3, text: 'алгоритмическое обеспечение', correct: true },
				{ id: 4, text: 'аппаратное обеспечение', correct: true },
				{ id: 5, text: 'данные', correct: false }, // исправлено
			],
		},
		{
			id: 3,
			question: 'Понятие информации всегда предполагает наличие...',
			type: 'multiple',
			points: 1,
			options: [
				{ id: 1, text: 'носителя информации', correct: false },
				{ id: 2, text: 'переносчика информации', correct: false },
				{ id: 3, text: 'получателя информации', correct: true },
				{ id: 4, text: 'хранителя информации', correct: false },
				{ id: 5, text: 'источника информации', correct: true },
			],
		},
		{
			id: 4,
			question:
				'С какой информационной революцией связано появление цифровой вычислительной техники?',
			type: 'single',
			points: 1,
			options: [
				{ id: 1, text: 'первой', correct: false },
				{ id: 2, text: 'пятой', correct: true },
				{ id: 3, text: 'второй', correct: false },
				{ id: 4, text: 'четвертой', correct: false },
				{ id: 5, text: 'третьей', correct: false },
			],
		},
		{
			id: 5,
			question:
				'Наука, изучающая методы представления, хранения, передачи, обработки и использования информации с применением компьютерных технологий - это ...',
			type: 'single',
			points: 1,
			options: [
				{ id: 1, text: 'источник', correct: false },
				{ id: 2, text: 'информатика', correct: true },
				{ id: 3, text: 'данные', correct: false },
				{ id: 4, text: 'приёмник', correct: false },
				{ id: 5, text: 'информация', correct: false },
			],
		},
		{
			id: 6,
			question:
				'В каком году американская фирма IBM выпустила первый персональный компьютер?',
			type: 'single',
			points: 1,
			options: [
				{ id: 1, text: '1981', correct: true }, // исправлено (было 1981 - правильно)
				{ id: 2, text: '1950', correct: false },
				{ id: 3, text: '1991', correct: false },
				{ id: 4, text: '1948', correct: false },
				{ id: 5, text: '1946', correct: false },
			],
		},
		{
			id: 7,
			question: 'Сведения об объектах и событиях окружающего мира - это...',
			type: 'single',
			points: 1,
			options: [
				{ id: 1, text: 'информатика', correct: false },
				{ id: 2, text: 'информационный процесс', correct: false },
				{ id: 3, text: 'информация', correct: true },
				{ id: 4, text: 'приёмник', correct: false },
				{ id: 5, text: 'источник', correct: false },
			],
		},
		{
			id: 8,
			question:
				'Сколько информационных революций произошло за время развития человечества?',
			type: 'single',
			points: 1,
			options: [
				{ id: 1, text: 'шесть', correct: false },
				{ id: 2, text: 'три', correct: false },
				{ id: 3, text: 'две', correct: false },
				{ id: 4, text: 'четыре', correct: false },
				{ id: 5, text: 'пять', correct: true },
			],
		},
		{
			id: 9,
			question: 'Для представления информации может использоваться...',
			type: 'multiple',
			points: 1,
			options: [
				{ id: 1, text: 'естественный язык', correct: true },
				{ id: 2, text: 'формальный язык', correct: true },
				{ id: 3, text: 'неестественный язык', correct: false },
				{ id: 4, text: 'неформальный язык', correct: false },
			],
		},
		{
			id: 10,
			question:
				'Первая электронная вычислительная машина "ЭНИАК" была создана в США в ...',
			type: 'single',
			points: 1,
			options: [
				{ id: 1, text: '1946 году', correct: true },
				{ id: 2, text: '1950 году', correct: false },
				{ id: 3, text: '1948 году', correct: false },
				{ id: 4, text: '1823 году', correct: false },
				{ id: 5, text: '1820 году', correct: false },
			],
		},
	],
}