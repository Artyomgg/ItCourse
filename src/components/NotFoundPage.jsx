export default function NotFoundPage() {
	return (
		<section id='courses' style={{
			 		minHeight: '85vh' ,
			 		gap: '10px'
			 }}>
			<div className='conteiner'>
				<h1 style={{ fontSize: '4rem', margin: '2rem 0' }}>Упс..... Ошибка 404</h1>

				<h2>Страница потерялась в цифровых джунглях!</h2>

					<h3>Возможно вы:</h3>
					<ul id='fourfourfour' style={{
						textAlign: 'left',
						width: "100%"
					}}>
						<li>Ввели неверный адрес</li>
						<li>Перешли по устаревшей ссылке</li>
						<li>Попытались найти секретную страницу</li>
						<li>Заметили баг со стороны разработчика</li>
					</ul>


				<a href='/' className='fancy'>
					<span className='top-key'></span>
					<span className='text'>Вернуться на главную</span>
					<span className='bottom-key-1'></span>
					<span className='bottom-key-2'></span>
				</a>

			</div>
		</section>
	)
}
