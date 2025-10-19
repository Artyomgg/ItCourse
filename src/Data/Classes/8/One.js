export const One = {
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
}
