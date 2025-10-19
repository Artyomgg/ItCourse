export const Two = {
	id: 2,
	title: 'СТРУКТУРА КОМПЬЮТЕРА',
	description: 'Основные компоненты ПК и их функции',
	icon: '💻',
	questions: 10,
	duration: '25 минут',
	path: '/courses/forschool/6/test/2',
	maxScore: 10,
	questions: [
		{
			id: 1,
			question:
				'Какое устройство позволяет вводить тексты и рисунки с бумаги в компьютер?',
			type: 'single',
			points: 1,
			options: [
				{ id: 1, text: 'принтер', correct: false },
				{ id: 2, text: 'сканер', correct: true },
				{ id: 3, text: 'монитор', correct: false },
				{ id: 4, text: 'мышь', correct: false },
				{ id: 5, text: 'клавиатура', correct: false },
			],
		},
		{
			id: 2,
			question: 'Для вывода и передачи информации пользователю предназначен...',
			type: 'single',
			points: 1,
			options: [
				{ id: 1, text: 'сканер', correct: false },
				{ id: 2, text: 'системный блок', correct: false },
				{ id: 3, text: 'принтер', correct: false },
				{ id: 4, text: 'жесткий диск', correct: false },
				{ id: 5, text: 'монитор', correct: true },
			],
		},
		{
			id: 3,
			question:
				'Где сохраняется информация в компьютере после отключения питания?',
			type: 'single',
			points: 1,
			options: [
				{ id: 1, text: 'В оперативной памяти', correct: false },
				{ id: 2, text: 'В процессоре', correct: false },
				{ id: 3, text: 'На жёстком диске (винчестере)', correct: true },
				{ id: 4, text: 'На экране монитора', correct: false },
				{ id: 5, text: 'В постоянной памяти', correct: false },
			],
		},
		{
			id: 4,
			question:
				'Какие функции должен уметь выполнять компьютер, как универсальное устройство для работы с данными?',
			type: 'multiple',
			points: 1,
			options: [
				{ id: 1, text: 'Обмен данных', correct: false },
				{ id: 2, text: 'Ввод данных', correct: true },
				{ id: 3, text: 'Хранение данных', correct: true },
				{ id: 4, text: 'Вывод данных', correct: true },
				{ id: 5, text: 'Передача данных', correct: false },
				{ id: 6, text: 'Обработка данных', correct: true },
			],
		},
		{
			id: 5,
			question: 'Совокупность всех устройств компьютера называют его...',
			type: 'single',
			points: 1,
			options: [
				{
					id: 1,
					text: 'программным обеспечением компьютера',
					correct: false,
				},
				{
					id: 2,
					text: 'аппаратным обеспечением компьютера',
					correct: true,
				},
				{ id: 3, text: 'конфигурацией компьютера', correct: false },
				{ id: 4, text: 'системным блоком', correct: false },
			],
		},
		{
			id: 6,
			question:
				'Базовая конфигурация компьютера содержит следующие функциональные блоки...',
			type: 'multiple',
			points: 1,
			options: [
				{ id: 1, text: 'монитор', correct: true },
				{ id: 2, text: 'системный блок', correct: true },
				{ id: 3, text: 'сканер', correct: false },
				{ id: 4, text: 'мышь', correct: true },
				{ id: 5, text: 'принтер', correct: false },
				{ id: 6, text: 'клавиатура', correct: true },
			],
		},
		{
			id: 7,
			question: 'Какое устройство в компьютере обрабатывает информацию?',
			type: 'single',
			points: 1,
			options: [
				{ id: 1, text: 'Оперативная память', correct: false },
				{ id: 2, text: 'Процессор', correct: true },
				{ id: 3, text: 'Жёсткий диск (винчестер)', correct: false },
				{ id: 4, text: 'Монитор', correct: false },
				{ id: 5, text: 'Системный блок', correct: false },
			],
		},
		{
			id: 8,
			question:
				'Какое устройство служит для вывода текста и изображений на бумагу?',
			type: 'single',
			points: 1,
			options: [
				{ id: 1, text: 'Сканер', correct: false },
				{ id: 2, text: 'Принтер', correct: true },
				{ id: 3, text: 'Мышь', correct: false },
				{ id: 4, text: 'Клавиатура', correct: false },
				{ id: 5, text: 'Монитор', correct: false },
			],
		},
		{
			id: 9,
			question: 'Какие из перечисленных устройств находятся в системном блоке?',
			type: 'multiple',
			points: 1,
			options: [
				{ id: 1, text: 'Процессор', correct: true },
				{ id: 2, text: 'Жёсткий диск (винчестер)', correct: true },
				{ id: 3, text: 'Сканер', correct: false },
				{ id: 4, text: 'Постоянная память', correct: true },
				{ id: 5, text: 'Монитор', correct: false },
				{ id: 6, text: 'Мышь', correct: false },
				{ id: 7, text: 'Оперативная память', correct: true },
			],
		},
		{
			id: 10,
			question:
				'Основным устройством долговременного хранения информации в компьютере является...',
			type: 'single',
			points: 1,
			options: [
				{ id: 1, text: 'процессор', correct: false },
				{ id: 2, text: 'системный блок', correct: false },
				{ id: 3, text: 'постоянная память', correct: false },
				{ id: 4, text: 'оперативная память', correct: false },
				{ id: 5, text: 'жёсткий диск (винчестер)', correct: true },
			],
		},
	],
}
