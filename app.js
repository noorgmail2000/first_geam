const defaultConfig = {
  siteName: 'أركان',
  gameUrl: 'https://reliably-map-sandstone.ngrok-free.dev/'
};

const config = {
  ...defaultConfig,
  ...JSON.parse(localStorage.getItem('gameConfig') || '{}')
};

document.querySelectorAll('[data-site-name]').forEach((el) => {
  el.textContent = config.siteName;
});

document.querySelectorAll('[data-game-link]').forEach((el) => {
  el.href = config.gameUrl;
});

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');

    if (nav.classList.contains('mobile-open')) {
      nav.style.display = 'flex';
      nav.style.position = 'absolute';
      nav.style.top = '70px';
      nav.style.right = '0';
      nav.style.background = '#101526';
      nav.style.padding = '20px';
      nav.style.flexDirection = 'column';
      nav.style.width = '210px';
    } else {
      nav.style.display = '';
      nav.style.position = '';
      nav.style.top = '';
      nav.style.right = '';
      nav.style.background = '';
      nav.style.padding = '';
      nav.style.flexDirection = '';
      nav.style.width = '';
    }
  });
}