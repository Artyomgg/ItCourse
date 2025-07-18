import React from 'react'
import { Link } from 'react-router'

function CSS(props) {
	return (
		<>
			<head>
				<title>Курс по CSS | IT Course</title>
				<meta name='description' content='Курс по CSS' />
			</head>
			<h1 style={{ textAlign: 'center' }}>CSS</h1>
			<div className='home-of-course'>
				<h3>Уроки CSS для начинающих</h3>
				<img
					src='https://itproger.com/img/courses/x1476977488.jpg.pagespeed.ic.g49ksfOi_C.webp'
					alt=''
					className='preview-img'
				/>
				<h3>Информация про CSS</h3>
				<p>
					CSS является языком, что отвечает за оформление вида страницы. Он
					позволяет указать стилевое оформление каждого из HTML элементов. Также
					за счёт CSS можно указывать стили для файлов с XML-разметок: XUL, SVG
					и прочие.
				</p>
				<p>
					Чистый HTML-документ выглядит ужасно без использования стилей.
					Каскадные таблицы стилей или же CSS помогает указать всё оформление
					для веб сайта. Используя лишь HTML и CSS можно создать любой дизайн
					сайта, какой вам только будет нужен.
				</p>
				<h3>План курса</h3>
				<p>
					В курсе по изучению языка стилей CSS для начинающих мы научимся
					прописывать CSS3 стили, изучим основы CSS, научимся работать с
					селекторами и по итогу разработаем множество мини проектов на HTML и
					CSS.
				</p>
				<p>
					К концу видеокурса CSS у вас будут стойкие знания в самом языке и
					понимание как можно сделать красивый веб сайт.
				</p>
				<main>
					<ul className='one'>
						<li>
							<Link to='css'>Перейти к курсу</Link>
						</li>
					</ul>
				</main>
				<br />
				<br />
				<div>
					<h2>Задание</h2>
					<p>
						<b>
							🎯 Сверстать веб-страничку, как в примере
							<br />
							🔸За полное выполнение этого задания можно получить до `200XP` и
							медаль мастер верстки <br />
							🔸Изначально тут отсутствуют переходы и анимации, но никто не
							запрещает Вам добавить свои. <br />
							🔸Не стесняйтесь добавлять что-то от себя. Это будет большим
							плюсом. <br />
							🔸Обязательно к использованию в этом задании: <br />
							css :
							<br />
							box-sizing:border-box;
							<br />
							display: flex;
							<br />
							justify-content: ...;
							<br />
							align-items: ...;
							<br />
							flex-direction: ...;
						</b>
					</p>
					<img
						src='/img/course/code/unknown.png'
						alt=''
						style={{ width: '70%' }}
					/>
				</div>
			</div>
		</>
	)
}

export default CSS
