import { useEffect, useState } from 'react'
import { Event } from '../components/NineOfMAy/Event'

function NineThOfMay(props) {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
	const [eventStarted, setEventStarted] = useState(false)

	useEffect(() => {
		const timer = setInterval(() => {
			const newTimeLeft = calculateTimeLeft()
			setTimeLeft(newTimeLeft)

			// Проверяем, наступила ли целевая дата
			if (newTimeLeft.total <= 0) {
				setEventStarted(true)
				clearInterval(timer)
			}
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	function calculateTimeLeft() {
		const targetDate = new Date()
		targetDate.setMonth(4) // май (0-11)
		targetDate.setDate(8)
		targetDate.setHours(22, 0, 0, 0)

		const now = new Date()
		const difference = targetDate - now

		if (difference <= 0) {
			return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
		}

		return {
			total: difference,
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		}
	}

	return (
		<>
			<head>
				<title>9 мая | IT Course</title>
				<meta name='description' content='Cтраница к евенту к 9 мая' />
			</head>
			<div className='victory-day-container'>
				{/* Фоновое изображение */}
				<div className='victory-day-bg'></div>

				{/* Основное содержимое */}
				<div className='victory-day-content'>
					<h1 className='victory-day-title'>День Победы</h1>
					<h2 className='victory-day-subtitle'>9 мая 1945 года</h2>
					<h2 className='victory-day-subtitle'>
						Сегодня мы вспоминаем героев, отдавших жизнь за нашу свободу.
						Почтите их память минутой молчания.
					</h2>

					{/* Вкладка с заданием */}
					<div className='assignment-tab'>
						<div className='tab-header'>О событии</div>
						<p className='event-end'>
							Проходите задания которые начнут появляться с 8 мая.
						</p>
						<br />
						<div className='tab-content'>
							{eventStarted ? (
								<>
									<p>
										Событие началось! Выполняйте задания и получайте награды!
									</p>
									<Event></Event>
									<p className='event-end'>Конец события - 20 мая! Успейте!</p>
								</>
							) : (
								<>
									<p>Событие начнётся 8 мая в 22:00. Осталось:</p>
									<div className='countdown-timer'>
										<div className='timer-block'>
											<span className='timer-value'>{timeLeft.days}</span>
											<span className='timer-label'>дней</span>
										</div>
										<div className='timer-block'>
											<span className='timer-value'>{timeLeft.hours}</span>
											<span className='timer-label'>часов</span>
										</div>
										<div className='timer-block'>
											<span className='timer-value'>{timeLeft.minutes}</span>
											<span className='timer-label'>минут</span>
										</div>
										<div className='timer-block'>
											<span className='timer-value'>{timeLeft.seconds}</span>
											<span className='timer-label'>секунд</span>
										</div>
									</div>
								</>
							)}
						</div>
					</div>

					{/* Георгиевская ленточка */}
					<div className='georgian-ribbon'></div>
				</div>
			</div>
		</>
	)
}

export default NineThOfMay
