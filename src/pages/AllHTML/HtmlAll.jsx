import { Link } from 'react-router'

function HtmlAll(props) {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/html'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<section id='start'></section>
				<h1 style={{ textAlign: 'center' }}>Все уроки HTML</h1>
				<main>
					<h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Уроки:</h2>
					<ul>
						<li>
							<a href='#one'>Введение в HTML</a>
						</li>
						<li>
							<a href='#two'>Файл «index.html». Отображение сайта</a>
						</li>
						<li>
							<a href='#three'>
								Как создаются сайты? Смотрим код чужого проекта
							</a>
						</li>
						<li>
							<a href='#four'>Комментарии в HTML. Метаданные «meta»</a>
						</li>
						<li>
							<a href='#five'>Теги для работы с текстом</a>
						</li>
						<li>
							<a href='#six'>Работа со списками</a>
						</li>
						<li>
							<a href='#seven'>Что такое атрибуты в HTML?</a>
						</li>
						<li>
							<a href='#eight'>Создание ссылок. Разные типы ссылок в HTML</a>
						</li>
						<li>
							<a href='#nine'>Работа с изображениями</a>
						</li>
						<li>
							<a href='#ten'>Создание HTML таблиц: ряды, столбцы, ячейки</a>
						</li>
						<li>
							<a href='#eleven'>Теги для подключения файлов</a>
						</li>
						<li>
							<a href='#twelve'>Теги «Div» и «Span»</a>
						</li>
						<li>
							<a href='#thirteen'>Создание HTML форм и полей для ввода</a>
						</li>
						<li>
							<a href='#forteen'>
								Поле для ввода текста. Тег для создания кнопки
							</a>
						</li>
						<li>
							<a href='#fifteen'>Селекторы выбора информации</a>
						</li>
						<li>
							<a href='#sixteen'>Специальные HTML5 теги</a>
						</li>
						<li>
							<a href='#seventeen'>Оптимизация под браузеры</a>
						</li>
						<li>
							<a href='#eighteen'>Заключительная часть</a>
						</li>
					</ul>
				</main>
				<section id='one'>
					<h2>Введение в HTML</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/_R5a-Kc0pRc?si=-l-lTM4e6eChv9WE'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<section id='two'>
					<h2>Файл «index.html». Отображение сайта</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/YzYkebeN7mg?si=IkPbXkEmw6xNaaKr'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>
				<section id='three'>
					<h2>Как создаются сайты? Смотрим код чужого проекта</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/3V4qHup5BB8?si=NGkUlX07JAYKv7zb'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='four'>
					<h2>Комментарии в HTML. Метаданные «meta»</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/6RoXrWu2EuM?si=1kkhRsH__widP9yW'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='five'>
					<h2>Теги для работы с текстом</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/ow3LCjZTbsY?si=ODjzfpcYG8EGmSfk'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='six'>
					<h2>Работа со списками</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/1o1tXDk3_NM?si=baJ57oLqY4g-AWxI'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='seven'>
					<h2>Что такое атрибуты в HTML?</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/X2E4QdsscPM?si=awffajpynbx5GC4C'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='eight'>
					<h2>Создание ссылок. Разные типы ссылок в HTML</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/otxwUoo3iA0?si=gYnnfPx5g-0_V3v6'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='nine'>
					<h2>Работа с изображениями</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/rL62z-VZX_c?si=wMiWREmrWJ-6G5Z-'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='ten'>
					<h2>Создание HTML таблиц: ряды, столбцы, ячейки</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/6235dvRWABw?si=YMon9D-q7fPpInNV'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='eleven'>
					<h2>Теги для подключения файлов</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/D9toRUtfJ_0?si=A0qiOapv8NC9aZhR'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='twelve'>
					<h2>Теги «Div» и «Span»</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/x2Miug6g9wU?si=zqFpZjlH7QUzRWWr'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='thirteen'>
					<h2>Создание HTML форм и полей для ввода</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/EQ0vB9oEmcA?si=d2U-s0ilk_7rWcip'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='forteen'>
					<h2>Поле для ввода текста. Тег для создания кнопки</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/UXIB8nFjZQA?si=nG0kBbV89mSPjpVZ'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='fifteen'>
					<h2>Селекторы выбора информации</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/hrU9h90xS6E?si=48zJZlija3q6Edhi'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='sixteen'>
					<h2>Специальные HTML5 теги</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/oVqyRw3l3iI?si=nycB9gPiJoeFecrz'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='seventeen'>
					<h2>Оптимизация под браузеры</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/MgbS6_MMon4?si=GSMAgheGqTU8woCU'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='eighteen'>
					<h2>Заключительная часть</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/MQfyUdmrC-A?si=lzDORu_osAYnEjS6'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<p>Коллаборация с it-progger</p>
				<a href='#start'>
					<div class='strelka'>
						<i class='bx bx-up-arrow-alt'></i>
					</div>
				</a>
			</div>
		</>
	)
}

export default HtmlAll
