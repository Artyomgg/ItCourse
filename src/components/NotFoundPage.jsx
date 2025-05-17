export default function NotFoundPage() {
	return (
		<section className='home-of-course' style={{ minHeight: '100vh' }}>
			<div className='conteiner'>
				<h1 style={{ fontSize: '4rem', margin: '2rem 0' }}>404</h1>

				<h2>Страница потерялась в цифровых джунглях!</h2>

				<div className='block-help-color' style={{ margin: '2rem 0' }}>
					<p>Возможно, вы:</p>
					<ul style={{ textAlign: 'left' }}>
						<li>▶ Ввели неверный адрес</li>
						<li>▶ Перешли по устаревшей ссылке</li>
						<li>▶ Попытались найти секретную страницу</li>
					</ul>
				</div>

				<a href='/' className='fancy'>
					<span className='top-key'></span>
					<span className='text'>Вернуться на главную</span>
					<span className='bottom-key-1'></span>
					<span className='bottom-key-2'></span>
				</a>

				<div className='georgian-ribbon' style={{ margin: '3rem auto' }}></div>

				<div className='countdown-timer'>
					<div className='timer-block'>
						<div className='timer-value'>404</div>
						<div className='timer-label'>Ошибка</div>
					</div>
				</div>
			</div>
		</section>
	)
}
