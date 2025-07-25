import { Link } from 'react-router'

function PythonAll(props) {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/python'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<section id='start'></section>
				<h1 style={{ textAlign: 'center' }}>Все уроки Python</h1>
				<main>
					<h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Уроки:</h2>
					<ul>
						<li>
							<a href='#one'>Программирование на Питон для начинающих</a>
						</li>
						<li>
							<a href='#two'>Установка среды разработки</a>
						</li>
						<li>
							<a href='#three'>Базовые операции в языке Python</a>
						</li>
						<li>
							<a href='#four'>Переменные и типы данных в Python</a>
						</li>
						<li>
							<a href='#five'>Условные операторы</a>
						</li>
						<li>
							<a href='#six'>Циклы и операторы в них (for, while)</a>
						</li>
						<li>
							<a href='#seven'>Списки (list). Функции и их методы</a>
						</li>
						<li>
							<a href='#eight'>Функции строк. Индексы и срезы</a>
						</li>
						<li>
							<a href='#nine'>Кортежи (tuple)</a>
						</li>
						<li>
							<a href='#ten'>Словари (dict) и работа с ними</a>
						</li>
						<li>
							<a href='#eleven'>Множества (set и frozenset)</a>
						</li>
						<li>
							<a href='#twelve'>Функции (def, lambda)</a>
						</li>
						<li>
							<a href='#thirteen'>Работа с файлами за счет Питон</a>
						</li>
						<li>
							<a href='#forteen'>
								Обработчик исключений. Конструкция «try - except»
							</a>
						</li>
						<li>
							<a href='#fifteen'>Менеджер «With ... as» для работы с файлами</a>
						</li>
						<li>
							<a href='#sixteen'>
								Модули в языке Питон. Создание и работа с модулями
							</a>
						</li>
						<li>
							<a href='#seventeen'>Основы ООП. Создание класса и объекта</a>
						</li>
						<li>
							<a href='#eighteen'>Конструкторы, переопределение методов</a>
						</li>
						<li>
							<a href='#ninteen'>Наследование, инкапсуляция, полиморфизм</a>
						</li>
						<li>
							<a href='#twenty'>Декораторы функций</a>
						</li>
						<li>
							<a href='#twenty-one'>Заключительная часть Python</a>
						</li>
					</ul>
				</main>

				{/* Все секции с видео остаются без изменений */}
				<section id='one'>
					<h2>Программирование на Питон для начинающих</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/34Rp6KVGIEM?si=Tdb70Fu6dHbq-KkY'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<section id='two'>
					<h2>Установка среды разработки</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/CfqX2_xY8VQ?si=JYomEL6fQeZUxvF1'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='three'>
					<h2>Базовые операции в языке Python</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/ML5tP8m6SHw?si=sT903u6gINO74e4Z'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='four'>
					<h2>Переменные и типы данных в Python</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/DZvNZ9l9NT4?si=Q1M_eTAcBt9BZOkH'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='five'>
					<h2>Условные операторы</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/SUDNfS_0X-Q?si=C2CW7cXsopaAQRT2'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='six'>
					<h2>Циклы и операторы в них (for, while)</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/vMD6-jzgDvI?si=FPzFnc3pu4-Q0v1C'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='seven'>
					<h2>Списки (list). Функции и их методы</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/-X2ubBdP2Ak?si=sMUJn3V9KuZWXToo'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='eight'>
					<h2>Функции строк. Индексы и срезы</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/pqaBWcsBGyA?si=IJF9QbKAFO7cKOZY'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='nine'>
					<h2>Кортежи (tuple)</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/cQfu-hYo2o4?si=uJwXPkA5tw7efLSp'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='ten'>
					<h2>Словари (dict) и работа с ними</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/W2oO1Y-QDzo?si=_wYj8jcJNdhgDNlZ'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='eleven'>
					<h2>Множества (set и frozenset)</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/6eNtZ8wY7qI?si=A8mq-Lg7tiFoU__u'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='twelve'>
					<h2>Функции (def, lambda)</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/6K5v4--G__U?si=hRCK393-Hr_8dmRB'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='thirteen'>
					<h2>Работа с файлами за счет Питон</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/t-xQAhLNYSs?si=rAv_yvze_5hi9TGI'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='forteen'>
					<h2>Обработчик исключений. Конструкция «try - except»</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/3nveLco08Y0?si=dpC4Avd6NdqQuv3R'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='fifteen'>
					<h2>Менеджер «With ... as» для работы с файлами</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/uGsSTZjUoIc?si=WjBd7p2ZkbaO0AYs'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='sixteen'>
					<h2>Модули в языке Питон. Создание и работа с модулями</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/dNg3l-wpRdY?si=FYfqqZKkpIY0F3JE'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='seventeen'>
					<h2>Основы ООП. Создание класса и объекта</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/gFRa6qVN980?si=ecwpwK2d4_lK2VzN'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='eighteen'>
					<h2>Конструкторы, переопределение методов</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/Y6N-na2WOx8?si=xZv6VPSmyYVYajt7'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='ninteen'>
					<h2>Наследование, инкапсуляция, полиморфизм</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/4N4GSzLF7JM?si=NP2ZgLoesTUgHf2j'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='twenty'>
					<h2>Декораторы функций</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/tuFuDKE7DF8?si=KbXix2cBpRHnUUni'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='twenty-one'>
					<h2>Заключительная часть Python</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/-viVz4cwDU4?si=pMAn5nhBNt4tclpC'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<p>Коллаборация с it-progger</p>
				<a href='#start'>
					<div className='strelka'>
						<i className='bx bx-up-arrow-alt'></i>
					</div>
				</a>
			</div>
		</>
	)
}

export default PythonAll
