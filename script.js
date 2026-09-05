document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');

  if (loader) {
    // Небольшая задержка (0.5 сек), чтобы анимация успела проиграться хотя бы один цикл
    setTimeout(() => {
      loader.classList.add('hidden');
      
      // Удаляем элемент из DOM через 800мс, чтобы он не занимал память и не мешал кликам
      setTimeout(() => {
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 800);
    }, 500);
  }
});
