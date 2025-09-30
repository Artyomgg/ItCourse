export const testData = {
	6: {
		tests: [
			{
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
						question:
							'Что из перечисленного можно отнести к свойствам информации?',
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
						question:
							'Сведения об объектах и событиях окружающего мира - это...',
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
			},
			{
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
						question:
							'Для вывода и передачи информации пользователю предназначен...',
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
						question:
							'Какие из перечисленных устройств находятся в системном блоке?',
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
			},
		],
	},
	7: {
		tests: [
			{
				id: 1,
				title: 'ИНФОРМАЦИЯ И ИНФОРМАЦИОННЫЕ ПРОЦЕССЫ',
				description: 'Основные понятия информации и информационных процессов',
				icon: '📊',
				questions: 12,
				duration: '25 минут',
				path: '/courses/forschool/7/test/1',
				maxScore: 12,
				questions: [
					{
						id: 1,
						question:
							'Какой код используют для кодирования информации в компьютере?',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'код Юлия Цезаря', correct: false },
							{ id: 2, text: 'двоичный', correct: true },
							{ id: 3, text: 'QR-код', correct: false },
							{ id: 4, text: 'штрих-код', correct: false },
						],
					},
					{
						id: 2,
						question: 'Измерение температуры представляет собой...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'процесс поиска информации', correct: false },
							{ id: 2, text: 'процесс передачи информации', correct: true },
							{ id: 3, text: 'процесс получения информации', correct: false },
							{ id: 4, text: 'процесс обработки информации', correct: false },
							{ id: 5, text: 'процесс хранения информации', correct: false },
						],
					},
					{
						id: 3,
						question: 'Объект, который передаёт информацию?',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'Приёмник', correct: false },
							{ id: 2, text: 'Передатчик', correct: false },
							{ id: 3, text: 'Источник', correct: true },
							{ id: 4, text: 'Переносчик', correct: false },
							{ id: 5, text: 'Носитель', correct: false },
						],
					},
					{
						id: 4,
						question: 'Выберите из списка носители информации:',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'папирус', correct: true },
							{ id: 2, text: 'бумага', correct: true },
							{ id: 3, text: 'глаз', correct: false },
							{ id: 4, text: 'компакт-диск (CD, DVD)', correct: true },
							{ id: 5, text: 'флеш-накопитель', correct: true },
							{ id: 6, text: 'парта', correct: false },
						],
					},
					{
						id: 5,
						question: 'Что такое код?',
						type: 'single',
						points: 1,
						options: [
							{
								id: 1,
								text: 'запись информации в виде последовательности нулей и единиц',
								correct: false,
							},
							{ id: 2, text: 'запись на алфавите со сдвигом', correct: false },
							{
								id: 3,
								text: 'совокупность условных знаков, каждому из которых присваивается определённое значение',
								correct: true,
							},
							{
								id: 4,
								text: 'единица измерения количества информации',
								correct: false,
							},
						],
					},
					{
						id: 6,
						question:
							'К какому информационному процессу вы отнесёте объяснение учителем нового материала?',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'процесс хранения информации', correct: false },
							{ id: 2, text: 'процесс поиска информации', correct: false },
							{ id: 3, text: 'процесс передачи информации', correct: true },
							{ id: 4, text: 'процесс обработки информации', correct: false },
							{ id: 5, text: 'процесс получения информации', correct: false },
						],
					},
					{
						id: 7,
						question: 'Тактильную информацию человек получает посредством...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'органов осязания', correct: true },
							{ id: 2, text: 'органов обоняния', correct: false },
							{ id: 3, text: 'органов слуха', correct: false },
							{ id: 4, text: 'органов зрения', correct: false },
							{ id: 5, text: 'вкусовых рецепторов', correct: false },
						],
					},
					{
						id: 8,
						question: 'Выберите из списка единицы измерения информации:',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'бэйт', correct: false },
							{ id: 2, text: 'гигагерц', correct: false },
							{ id: 3, text: 'бит', correct: true },
							{ id: 4, text: 'терабэйт', correct: false },
							{ id: 5, text: 'мегабайт', correct: true },
							{ id: 6, text: 'тераватт', correct: false },
							{ id: 7, text: 'гигабайт', correct: true },
						],
					},
					{
						id: 9,
						question:
							'Наибольший объём информации человек получает при помощи...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'органов обоняния', correct: false },
							{ id: 2, text: 'органов зрения', correct: true },
							{ id: 3, text: 'органов осязания', correct: false },
							{ id: 4, text: 'органов слуха', correct: false },
							{ id: 5, text: 'вкусовых рецепторов', correct: false },
						],
					},
					{
						id: 10,
						question: 'Что понимается под информацией?',
						type: 'single',
						points: 1,
						options: [
							{
								id: 1,
								text: 'слух, зрение, вкус, запах, ощущение',
								correct: false,
							},
							{
								id: 2,
								text: 'хранение, передача, обработка, поиск данных',
								correct: false,
							},
							{ id: 3, text: 'текст, звук, числа, графика', correct: false },
							{
								id: 4,
								text: 'сведения о предметах, событиях, явлениях и процессах окружающего мира',
								correct: true,
							},
						],
					},
					{
						id: 11,
						question:
							'На какие виды можно разделить информацию по форме представления?',
						type: 'single',
						points: 1,
						options: [
							{
								id: 1,
								text: 'актуальная, достоверная, полная, неизвестная, искомая',
								correct: false,
							},
							{
								id: 2,
								text: 'визуальная, звуковая, тактильная, вкусовая, информация о запахах',
								correct: false,
							},
							{
								id: 3,
								text: 'текстовая, графическая, комбинированная',
								correct: true,
							},
							{
								id: 4,
								text: 'хранимая, передаваемая, обрабатываемая',
								correct: false,
							},
						],
					},
					{
						id: 12,
						question: 'Какие информационные процессы выполняет человек?',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'поиск', correct: true },
							{ id: 2, text: 'рисование', correct: false },
							{ id: 3, text: 'передача', correct: true },
							{ id: 4, text: 'хранение', correct: true },
							{ id: 5, text: 'чтение', correct: false },
							{ id: 6, text: 'обработка', correct: true },
						],
					},
				],
			},
			{
				id: 2,
				title: 'ЛОГИКА ВЫСКАЗЫВАНИЙ И ОПЕРАЦИИ',
				description: 'Основы логики высказываний и логические операции',
				icon: '🧠',
				questions: 12,
				duration: '25 минут',
				path: '/courses/forschool/7/test/2',
				maxScore: 12,
				questions: [
					{
						id: 1,
						question: 'Что такое высказывание?',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'Любое предложение', correct: false },
							{ id: 2, text: 'Фраза', correct: false },
							{
								id: 3,
								text: 'Утверждение, о котором в настоящее время можно сказать, истинно оно или ложно',
								correct: true,
							},
							{ id: 4, text: 'Словосочетание', correct: false },
						],
					},
					{
						id: 2,
						question: 'Что делает логическая операция отрицание?',
						type: 'single',
						points: 1,
						options: [
							{
								id: 1,
								text: 'Меняет значение высказывания на ложь',
								correct: false,
							},
							{
								id: 2,
								text: 'Меняет значение высказывания на противоположное',
								correct: true,
							},
							{
								id: 3,
								text: 'Меняет значение высказывания на истину',
								correct: false,
							},
							{
								id: 4,
								text: 'Не меняет значения высказывания',
								correct: false,
							},
						],
					},
					{
						id: 3,
						question:
							'Высказывания, образованные из других высказываний с помощью логических связок, называются...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'составными', correct: true },
							{ id: 2, text: 'двойными', correct: false },
							{ id: 3, text: 'элементарными', correct: false },
							{ id: 4, text: 'сложными', correct: false },
							{ id: 5, text: 'одиночными', correct: false },
						],
					},
					{
						id: 4,
						question:
							'Первым систематизировал формы и правила мышления, разработал теорию умозаключений и доказательств, описал логические операции...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'Джордж Буль', correct: false },
							{ id: 2, text: 'Аристотель', correct: true },
							{ id: 3, text: 'Архимед', correct: false },
							{ id: 4, text: 'Готфрид Вильгельм Лейбниц', correct: false },
							{ id: 5, text: 'Блез Паскаль', correct: false },
						],
					},
					{
						id: 5,
						question: 'Логическую операцию И называют...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'логическим сложением', correct: false },
							{ id: 2, text: 'логическим вычитанием', correct: false },
							{ id: 3, text: 'логическим отрицанием', correct: false },
							{ id: 4, text: 'логическим делением', correct: false },
							{ id: 5, text: 'логическим умножением', correct: true },
						],
					},
					{
						id: 6,
						question: 'Наука, изучающая формы рассуждений, называется...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'математической логикой', correct: false },
							{ id: 2, text: 'формальной логикой', correct: true },
							{ id: 3, text: 'высказыванием', correct: false },
							{ id: 4, text: 'логикой высказываний', correct: false },
						],
					},
					{
						id: 7,
						question:
							'Назовите предложения, которые не являются высказываниями.',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'С Новым годом!', correct: true },
							{ id: 2, text: 'Хлеб - всему голова!', correct: true },
							{ id: 3, text: 'Каранаши лежит на столе.', correct: false },
							{ id: 4, text: 'Пейте молоко - будете здоровы!', correct: true },
							{
								id: 5,
								text: 'Могилёв - областной центр Беларуси.',
								correct: false,
							},
							{ id: 6, text: 'Почему образуется туман?', correct: true },
						],
					},
					{
						id: 8,
						question:
							'У истоков современной логики стоит известный математик...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'Джордж Буль', correct: false },
							{ id: 2, text: 'Готфрид Вильгельм Лейбниц', correct: true },
							{ id: 3, text: 'Аристотель', correct: false },
							{ id: 4, text: 'Архимед', correct: false },
							{ id: 5, text: 'Блез Паскаль', correct: false },
						],
					},
					{
						id: 9,
						question: 'Определите, какие высказывания являются истинными?',
						type: 'multiple',
						points: 1,
						options: [
							{
								id: 1,
								text: 'Пять - нечётное число и шесть - чётное число',
								correct: true,
							},
							{ id: 2, text: 'Неверно, что скунь - рыба', correct: false },
							{
								id: 3,
								text: 'Процессор не предназначен для обработки информации',
								correct: false,
							},
							{ id: 4, text: 'Не все птицы улетают на юг', correct: true },
							{
								id: 5,
								text: 'Не все прямоугольники - квадраты',
								correct: true,
							},
							{
								id: 6,
								text: 'Земля вращается вокруг Луны или Земля вращается вокруг Солнца',
								correct: true,
							},
						],
					},
					{
						id: 10,
						question:
							'Этот известный математик перенес на логику законы и правила математических действий, создав тем самым алгебру логики',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'Архимед', correct: false },
							{ id: 2, text: 'Джордж Буль', correct: true },
							{ id: 3, text: 'Блез Паскаль', correct: false },
							{ id: 4, text: 'Аристотель', correct: false },
							{ id: 5, text: 'Готфрид Вильгельм Лейбниц', correct: false },
						],
					},
					{
						id: 11,
						question: 'Какие значения могут иметь высказывания?',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'Истина', correct: true },
							{ id: 2, text: 'Любые числа', correct: false },
							{ id: 3, text: 'Неопределенные значения', correct: false },
							{ id: 4, text: 'Ложь', correct: true },
							{ id: 5, text: 'Определенные значения', correct: false },
						],
					},
					{
						id: 12,
						question: 'Логическую операцию ИЛИ называют...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'логическим умножением', correct: false },
							{ id: 2, text: 'логическим делением', correct: false },
							{ id: 3, text: 'логическим отрицанием', correct: false },
							{ id: 4, text: 'логическим вычитанием', correct: false },
							{ id: 5, text: 'логическим сложением', correct: true },
						],
					},
				],
			},
		],
	},
	8: {
		tests: [
			{
				id: 1,
				title: 'ЗАПИСЬ АУДИО И ВИДЕОИНФОРМАЦИИ',
				description: 'Основы аудио и видео технологий, форматы файлов и кодеки',
				icon: '🎵',
				questions: 12,
				duration: '25 минут',
				path: 'courses/forschool/8/test/1',
				maxScore: 12,
				questions: [
					{
						id: 1,
						question: 'К основным форматам аудиофайлов относят...',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'wma', correct: true },
							{ id: 2, text: 'midi', correct: true },
							{ id: 3, text: 'mp4', correct: false },
							{ id: 4, text: 'mov', correct: false },
							{ id: 5, text: 'wav', correct: true },
							{ id: 6, text: 'mp3', correct: true },
						],
					},
					{
						id: 2,
						question:
							'Знаменитый американский изобретатель Томас Эдисон изготовил первый прибор для записи и воспроизведения звука "фюнограф". В каком году это произошло?',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: '1857', correct: false },
							{ id: 2, text: '1896', correct: false },
							{ id: 3, text: '1877', correct: true },
							{ id: 4, text: '1900', correct: false },
							{ id: 5, text: '1895', correct: false },
						],
					},
					{
						id: 3,
						question: 'Аудиоинформация может быть представлена в ...',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'аналоговой форме', correct: true },
							{ id: 2, text: 'цифровой форме', correct: true },
							{ id: 3, text: 'волновой форме', correct: false },
							{ id: 4, text: 'импульсной форме', correct: false },
							{ id: 5, text: 'числовой форме', correct: false },
						],
					},
					{
						id: 4,
						question: 'Укажите правильные утверждения.',
						type: 'multiple',
						points: 1,
						options: [
							{
								id: 1,
								text: 'Видеоинформация в цифровой форме является набором электронных фотографий.',
								correct: true,
							},
							{
								id: 2,
								text: 'Имена видеокодеков с именами видеоформатов не совпадают.',
								correct: true,
							},
							{
								id: 3,
								text: 'Форматы для записи в видеофайл только видеоинформации не предусмотрены.',
								correct: false,
							},
							{
								id: 4,
								text: 'При записи и воспроизведении видеофайла не всегда нужно использовать пару из аудиокодеков и видеокодеков.',
								correct: false,
							},
							{
								id: 5,
								text: 'Аудиокодеки носят имена форматов аудиофайлов.',
								correct: true,
							},
						],
					},
					{
						id: 5,
						question: 'К основным форматам видеофайлов относят...',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'mpeg', correct: true },
							{ id: 2, text: 'mov', correct: true },
							{ id: 3, text: 'wav', correct: false },
							{ id: 4, text: 'mp4', correct: true },
							{ id: 5, text: 'mp3', correct: false },
							{ id: 6, text: 'dvd', correct: true },
						],
					},
					{
						id: 6,
						question:
							'История кинематографа началась, когда французы Огюст и Луи Люммеры впервые провели демонстрацию кинофильмов. В каком году это было?',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: '1896', correct: false },
							{ id: 2, text: '1895', correct: true },
							{ id: 3, text: '1877', correct: false },
							{ id: 4, text: '1900', correct: false },
						],
					},
					{
						id: 7,
						question:
							'Файл с видеоинформацией и сопровождающей её аудиоинформацией в цифровой форме - это...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'видеоинформация', correct: false },
							{ id: 2, text: 'аудиоинформация', correct: false },
							{ id: 3, text: 'кодекс', correct: false },
							{ id: 4, text: 'видеофайл', correct: true },
							{ id: 5, text: 'аудиофайл', correct: false },
						],
					},
					{
						id: 8,
						question:
							'Специальная программа, которая сжимает и восстанавливает первоначальный объём аудио или видеофайла - это...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'кодек', correct: true },
							{ id: 2, text: 'плеер', correct: false },
							{ id: 3, text: 'медиаплеер', correct: false },
							{ id: 4, text: 'диктофон', correct: false },
							{ id: 5, text: 'камера', correct: false },
						],
					},
					{
						id: 9,
						question:
							'История записи аналогового звука началась, когда француз Эдуард Леон Скотт де Мартенвиль изобрёл прибор - "фоноватограф". В каком году это произошло?',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: '1895', correct: false },
							{ id: 2, text: '1877', correct: false },
							{ id: 3, text: '1845', correct: false },
							{ id: 4, text: '1896', correct: false },
							{ id: 5, text: '1857', correct: true },
						],
					},
					{
						id: 10,
						question: 'Файл с аудиоинформацией в цифровой форме - это...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'кодек', correct: false },
							{ id: 2, text: 'звукозапись', correct: false },
							{ id: 3, text: 'аудиофайл', correct: true },
							{ id: 4, text: 'видеофайл', correct: false },
						],
					},
					{
						id: 11,
						question:
							'Изображение движущихся объектов, записанное каким-либо образом, пригодным для воспроизведения - это...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'аудиоинформация', correct: false },
							{ id: 2, text: 'кодек', correct: false },
							{ id: 3, text: 'видеофайл', correct: false },
							{ id: 4, text: 'аудиофайл', correct: false },
							{ id: 5, text: 'видеоинформация', correct: true },
						],
					},
					{
						id: 12,
						question:
							'Звуковая информация, записанная каким-либо образом, пригодным для воспроизведения - это...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'видеоинформация', correct: false },
							{ id: 2, text: 'кодекс', correct: false },
							{ id: 3, text: 'аудиоинформация', correct: true },
							{ id: 4, text: 'видеофайл', correct: false },
							{ id: 5, text: 'аудиофайл', correct: false },
						],
					},
				],
			},
			{
				id: 2,
				title: 'ОБРАБОТКА АУДИО И ВИДЕОФАЙЛОВ',
				description: 'Редактирование, конвертация и монтаж мультимедиа',
				icon: '🎬',
				questions: 12,
				duration: '25 минут',
				path: 'courses/forschool/8/test/2',
				maxScore: 12,
				questions: [
					{
						id: 1,
						question: 'Какие способы выделения фрагментов аудиофайлов бывают?',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'Объёмный', correct: false },
							{ id: 2, text: 'Общий', correct: false },
							{ id: 3, text: 'Примерный', correct: false },
							{ id: 4, text: 'Обзорный', correct: true },
							{ id: 5, text: 'Точный', correct: true },
						],
					},
					{
						id: 2,
						question: 'Среди бесплатных аудиоредакторов выделяют...',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'Convertilla', correct: false },
							{ id: 2, text: 'Wavosaur', correct: true },
							{ id: 3, text: 'WavePad Sound Editor', correct: true },
							{ id: 4, text: 'Shotcut', correct: false },
							{ id: 5, text: 'Audacity', correct: true },
						],
					},
					{
						id: 3,
						question: 'К видам обработки аудиофайлов относят...',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'декодирование', correct: false },
							{ id: 2, text: 'конвертация', correct: true },
							{ id: 3, text: 'форматирование', correct: false },
							{ id: 4, text: 'редактирование', correct: true },
						],
					},
					{
						id: 4,
						question:
							'К основным операциям с фрагментами при редактировании аудиофайлов относят...',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'копирование', correct: true },
							{ id: 2, text: 'выделение', correct: true },
							{ id: 3, text: 'удаление', correct: true },
							{ id: 4, text: 'применение эффекта', correct: true },
							{ id: 5, text: 'перемещение', correct: true },
						],
					},
					{
						id: 5,
						question: 'Процесс изменения формата аудиофайла называют...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'декодированием', correct: false },
							{ id: 2, text: 'конвертацией', correct: true },
							{ id: 3, text: 'редактированием', correct: false },
							{ id: 4, text: 'форматированием', correct: false },
							{ id: 5, text: 'кодированием', correct: false },
						],
					},
					{
						id: 6,
						question:
							'Видеофильм сохраненный во внутреннем формате видеоредактора Videopad имеет расширение...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: '.mpl', correct: false },
							{ id: 2, text: '.mov', correct: false },
							{ id: 3, text: '.avi', correct: false },
							{ id: 4, text: '.vmv', correct: false },
							{ id: 5, text: '.vpi', correct: true },
						],
					},
					{
						id: 7,
						question: 'Программное средство для видеомонтажа называется...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'видеоконвертером', correct: false },
							{ id: 2, text: 'монтажером', correct: false },
							{ id: 3, text: 'видеоредактором', correct: true },
							{ id: 4, text: 'видеомонтажером', correct: false },
							{ id: 5, text: 'сценаристом', correct: false },
						],
					},
					{
						id: 8,
						question:
							'Звуковая информация сохраненная во внутреннем формате аудиоредактора Audacity имеет расширение...',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: '.mp3', correct: false },
							{ id: 2, text: '.sup', correct: false },
							{ id: 3, text: '.ac3', correct: false },
							{ id: 4, text: '.wma', correct: false },
							{ id: 5, text: '.aup', correct: true },
						],
					},
					{
						id: 9,
						question: 'К видам обработки видеофайлов относят...',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'редактирование', correct: false },
							{ id: 2, text: 'видеомонтаж', correct: true },
							{ id: 3, text: 'кодирование', correct: false },
							{ id: 4, text: 'конвертация', correct: true },
							{ id: 5, text: 'форматирование', correct: false },
						],
					},
					{
						id: 10,
						question:
							'Среди бесплатных видеоредакторов для компьютеров выделяют...',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'Audacity', correct: false },
							{ id: 2, text: 'Windows Movie Maker', correct: true },
							{ id: 3, text: 'VideoPad', correct: true },
							{ id: 4, text: 'Wavosaur', correct: false },
							{ id: 5, text: 'Lightworks', correct: true },
						],
					},
					{
						id: 11,
						question: 'Что такое конвертация аудиофайла?',
						type: 'single',
						points: 1,
						options: [
							{ id: 1, text: 'Изменение громкости звука', correct: false },
							{ id: 2, text: 'Изменение формата файла', correct: true },
							{ id: 3, text: 'Удаление фрагментов записи', correct: false },
							{ id: 4, text: 'Добавление звуковых эффектов', correct: false },
							{ id: 5, text: 'Создание копии файла', correct: false },
						],
					},
					{
						id: 12,
						question:
							'Какие операции можно выполнять с фрагментами аудиофайла в редакторе?',
						type: 'multiple',
						points: 1,
						options: [
							{ id: 1, text: 'Копирование', correct: true },
							{ id: 2, text: 'Удаление', correct: true },
							{ id: 3, text: 'Перемещение', correct: true },
							{ id: 4, text: 'Изменение формата', correct: false },
							{ id: 5, text: 'Применение эффектов', correct: true },
						],
					},
				],
			},
		],
	},
}
