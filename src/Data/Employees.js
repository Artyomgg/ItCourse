export const employeesData = {
	management: [
		{
			id: 1,
			name: 'Дудко Артем',
			position: 'Генеральный директор',
			experience: '2 года',
			department: 'Руководство',
			achievements: [
				'Основатель ITCOURSE',
				'Разработал стратегию развития компании',
				'Привлек 1000+ студентов',
			],
			avatar: '/img/avatars/director.jpg',
			skills: [
				'Стратегическое планирование',
				'Управление',
				'Бизнес-анализ',
				'Лидерство',
			],
			email: 'artem.dudko@itcourse.ru',
		},
		{
			id: 2,
			name: 'Федор Томашев',
			position: 'Заместитель директора',
			experience: '8 лет',
			department: 'Руководство',
			achievements: [
				'Координирует работу всех отделов',
				'Внедрил систему KPI для сотрудников',
				'Увеличил эффективность работы на 35%',
				'Разработал программу мотивации',
			],
			avatar: '/img/avatars/deputy.jpg',
			skills: [
				'Операционное управление',
				'Аналитика',
				'Командообразование',
				'Планирование',
			],
			email: 'fedor.tomashev@itcourse.ru',
		},
		{
			id: 3,
			name: 'Елена Бубкина',
			position: 'Менеджер генерального директора',
			experience: '5 лет',
			department: 'Руководство',
			achievements: [
				'Увеличила продажи на 40% за год',
				'Разработала стратегию привлечения клиентов',
				'Подготовила 20 успешных менеджеров',
				'Внедрила CRM систему',
			],
			avatar: '/img/avatars/manager1.jpg',
			skills: ['Продажи', 'Переговоры', 'Маркетинг', 'Аналитика'],
			email: 'elena.bubkina@itcourse.ru',
			phone: '+375-(29)-185-27-75',
		},
	],
}

// Функция для получения всех сотрудников руководства
export const getAllEmployees = () => {
	return employeesData.management
}

// Функция для получения лучших сотрудников (все руководство)
export const getBestEmployees = () => {
	return employeesData.management
}

// Функция для получения сотрудников по отделу (только руководство)
export const getEmployeesByDepartment = department => {
	if (department === 'management') {
		return employeesData.management
	}
	return []
}
