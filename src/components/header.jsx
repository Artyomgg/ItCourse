import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import '../css/hamburger.menu.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className='top-nav' ref={menuRef}>
      <div className='block-logo'>
        <img alt='' src='/icons8-шапка-выпускника-90.png' />
        <h1>IT-COURSE</h1>
      </div>

      <div
        className='menu-button-container'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={`menu-button ${isMenuOpen ? 'open' : ''}`} />
      </div>

      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to='/' onClick={() => setIsMenuOpen(false)}>
            Главная
          </Link>
        </li>
        <li>
          <Link to='courses' onClick={() => setIsMenuOpen(false)}>
            Курсы
          </Link>
        </li>
        <li>
          <Link to='/check' onClick={() => setIsMenuOpen(false)}>
            Проверить задания
          </Link>
        </li>
        <li>
          <Link to='/emloyees' onClick={() => setIsMenuOpen(false)}>
            Сотрудники
          </Link>
        </li>
        <li>
          <a
            href='https://chart-beryl.vercel.app/'
            onClick={() => setIsMenuOpen(false)}
            target='_blank'
            rel='noopener noreferrer'
          >
            Таблица лидеров
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Header;