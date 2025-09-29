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
			// Место для тестов 7 класса
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
				duration: '30 минут',
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
				duration: '30 минут',
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
