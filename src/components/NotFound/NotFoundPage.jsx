import React from 'react';
import styles from './NotFoundPage.module.css';
import { Link } from 'react-router'

export default function NotFoundPage() {
    return (
        <section className={styles.notFoundSection}>
            <div className={styles.container}>
                <div className={styles.glitchContainer}>
                    <h1 className={styles.glitch} data-text="404">404</h1>
                    <h2 className={styles.subtitle}>Страница потерялась в цифровых джунглях!</h2>
                </div>
                
                <div className={styles.content}>
                    <div className={styles.book}>
                        <div className={styles.bookPage}>
                            <h3>Возможно вы:</h3>
                            <ul className={styles.reasonsList}>
                                <li>Ввели неверный адрес</li>
                                <li>Перешли по устаревшей ссылке</li>
                                <li>Попытались найти секретную страницу</li>
                                <li>Заметили баг со стороны разработчика</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className={styles.searchAnimation}>
                        <div className={styles.magnifier}>
                            <div className={styles.magnifierHandle}></div>
                        </div>
                        <div className={styles.paperSheet}>
                            <p>Поиск страницы...</p>
                        </div>
                    </div>
                </div>
                
                <Link to='/' className={styles.homeButton}>
                    <span className={styles.buttonText}>Вернуться на главную</span>
                    <div className={styles.buttonArrow}></div>
                </Link>
            </div>
            
            <div className={styles.floatingElements}>
                <div className={styles.floatingIcon}>📚</div>
                <div className={styles.floatingIcon}>🔍</div>
                <div className={styles.floatingIcon}>📝</div>
                <div className={styles.floatingIcon}>✏️</div>
            </div>
        </section>
    )
}