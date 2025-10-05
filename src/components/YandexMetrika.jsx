import { useEffect } from 'react';
import { useLocation } from 'react-router';

const YandexMetrika = () => {
  const location = useLocation();

  useEffect(() => {
    // Инициализация Яндекс.Метрики для SPA
    if (!window.ym) {
      (function(m,e,t,r,i,k,a){
        m[i] = m[i] || function(){(m[i].a = m[i].a || []).push(arguments)};
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) { return; }
        }
        k = e.createElement(t), a = e.getElementsByTagName(t)[0];
        k.async = 1;
        k.src = r;
        a.parentNode.insertBefore(k, a);
      })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

      // ВАЖНО: Для SPA убираем ssr:true и добавляем trackHash
      ym(104386082, 'init', {
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        accurateTrackBounce: true,
        trackLinks: true,
        trackHash: true,  // ✅ Отслеживает изменения hash в URL (для HashRouter)
        triggerEvent: true // ✅ Позволяет отправлять кастомные события
      });
    }
  }, []);

  useEffect(() => {
    // ОСНОВНОЕ: Отслеживание смены маршрутов в SPA
    if (window.ym) {
      // Для SPA используем hit для каждого изменения маршрута
      ym(104386082, 'hit', window.location.href, {
        referer: document.referrer,
        title: document.title
      });
      
      // Альтернативный способ
      ym(104386082, 'notBounce');
    }
  }, [location]); // Срабатывает при каждой смене маршрута

  return (
    <noscript>
      <div>
        <img 
          src="https://mc.yandex.ru/watch/104386082" 
          style={{ position: 'absolute', left: '-9999px' }} 
          alt="" 
        />
      </div>
    </noscript>
  );
};

export default YandexMetrika;