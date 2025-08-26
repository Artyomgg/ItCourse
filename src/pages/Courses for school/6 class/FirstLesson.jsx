import React from 'react';

function FirstLesson(props) {
  return (
    <>
      <div className="conteiner">
        <h1>Заголовок (тема урока)</h1>
        
        <div className="block-5">
          <h2>1. С чем познакомимся</h2>
          <ul>
            <li>Пункт 1</li>
            <li>Пункт 2</li>
            <li>Пункт 3</li>
          </ul>
        </div>
        
        <div className="block-5">
          <h2>2. Что будем знать по окончанию пройденного урока</h2>
          <ul>
            <li>Навык 1</li>
            <li>Навык 2</li>
            <li>Навык 3</li>
          </ul>
        </div>
        
        <div className="block-5">
          <h2>3. Теория</h2>
          <p>
            Здесь находится теоретический материал урока. Вы можете разместить 
            любой текст, который необходим для изучения темы.
          </p>
          <p>
            Второй абзац теории. Можно добавлять столько текста, сколько нужно.
          </p>
        </div>
        
        <div className="block-5">
          <h2>4. Иллюстрации</h2>
          <div className="block-img">
            <img src="https://via.placeholder.com/600x300" alt="Пример изображения" />
            <p>Подпись к изображению</p>
          </div>
        </div>
        
        <div className="block-5">
          <h2>5. Важные понятия</h2>
          <p>
            Обычный текст с <span className="highlight">выделенным понятием</span> и еще текст.
            Еще одно <span className="highlight">важное понятие</span> в середине предложения.
          </p>
        </div>
        
        <div className="block-5">
          <h2>6. Задания</h2>
          
          <div className="task">
            <h3>Задание 1: Название задания</h3>
            <div className="task-condition">
              <h4>Условие:</h4>
              <p>Здесь находится условие первого задания. Опишите, что нужно сделать.</p>
            </div>
          </div>
          
          <div className="task">
            <h3>Задание 2: Название второго задания</h3>
            <div className="task-condition">
              <h4>Условие:</h4>
              <p>Условие второго задания. Можно добавить конкретные требования.</p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .highlight {
          color: var(--orangeColor);
          font-weight: bold;
        }
        
        .task {
          margin-bottom: 25px;
          padding: 15px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          border-left: 4px solid var(--orangeColor);
        }
        
        .task-condition {
          margin-top: 10px;
          padding: 10px;
          background: var(--codeDarkColor);
          border-radius: 8px;
        }
        
        .task h3 {
          color: var(--orangeColor);
          margin-bottom: 10px;
          text-align: left;
        }
        
        .task h4 {
          color: var(--orangeColor);
          margin-bottom: 8px;
        }
      `}</style>
    </>
  );
}

export default FirstLesson;