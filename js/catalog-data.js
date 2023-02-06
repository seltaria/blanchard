const catalogList = document.querySelector('.cat__list');

function addArtist(container, title, artistList = []) {
  const catItem = document.createElement('li');
  const catButton = document.createElement('button');
  const catTitle = document.createElement('span');
  const catContent = document.createElement('div');
  const catContentWrapper = document.createElement('div');
  const catArtistList = document.createElement('ul');

  catItem.classList.add('cat__item', 'ac');
  catButton.classList.add('cat__name', 'ac-trigger');
  catContent.classList.add('cat__content', 'ac-panel');
  catContentWrapper.classList.add('cat__content-wrapper');
  catArtistList.classList.add('list', 'cat__artist-list');

  catItem.append(catButton);
  catButton.append(catTitle);
  catItem.append(catContent);
  catContent.append(catContentWrapper);
  catContentWrapper.append(catArtistList);

  catTitle.textContent = title;
  catButton.innerHTML += `<svg width="50" height="50" viewbox="-1 -1 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
      fill="#ECECEC" />
    <path
      d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
      stroke="#ECECEC" />
    <path d="M33.3333 23.3333L25 31.6667L16.6667 23.3333" stroke="black" />
    </svg>`;

  if (artistList.length !== 0) {
    for (let artist of artistList) {
      const catArtistItem = document.createElement('li');
      const catItemText = document.createElement('span');
      catArtistItem.classList.add('cat__artist-item');
      catItemText.classList.add('cat__btn-tab');

      catItemText.dataset.artistPath = artist.path;
      catItemText.textContent = artist.name;

      catArtistList.append(catArtistItem);
      catArtistItem.append(catItemText);
    }
  } else {
    catItem.innerHTML = `<button class="cat__name ac-trigger">
    <span>${title}</span>
    <svg width="50" height="50" viewbox="-1 -1 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
        fill="#ECECEC" />
      <path
        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
        stroke="#ECECEC" />
      <path d="M33.3333 23.3333L25 31.6667L16.6667 23.3333" stroke="black" />
    </svg>
    </button>
    <div class="cat__content ac-panel">
      <div class="cat__content-wrapper no-content">
        <img class="cat__no-content-img" src="./img/no-content.png" />
        <div class="cat__no-content">
          <p class="cat__no-content-name">
            Здесь пока пусто
          </p>
          <p class="cat__no-content-text">
            А в галерее вы всегда можете найти
            что-то интересное для себя
          </p>
          <a href="#gallery" class="cat__no-content-link">
            <span>В галерею</span>
          </a>
        </div>
      </div>
    </div>`
  }

  container.append(catItem);
}

const artistData = [
  {
    title: 'С 1400 по 1499 гг.',
    artistList: [
      {
        path: 1,
        name: 'Бенедетто ди Биндо',
      },
      {
        path: 2,
        name: 'Бергоньоне, Амброджо',
      },
      {
        path: 2,
        name: 'Биссоло, Франческо',
      },
      {
        path: 2,
        name: 'Больтраффио, Джованни',
      },
      {
        path: 2,
        name: 'Бонсиньори, Франческо',
      },
      {
        path: 2,
        name: 'Боттичини, Рафаэлло',
      },
      {
        path: 2,
        name: 'Брамантино',
      },
      {
        path: 2,
        name: 'Бреа, Людовико',
      },
      {
        path: 2,
        name: 'Бьяджо д’Антонио Туччи',
      },
      {
        path: 2,
        name: 'Веккьетта',
      },
      {
        path: 2,
        name: 'Андреа Верроккьо',
      },
      {
        path: 2,
        name: 'Доменико Гирландайо',
      },
      {
        path: 2,
        name: 'Беноццо Гоццоли',
      },
      {
        path: 2,
        name: 'Граначчи, Франческо',
      },
      {
        path: 2,
        name: 'Грегорио ди Чекко',
      },
      {
        path: 2,
        name: 'Джованни да Удине',
      },
      {
        path: 2,
        name: 'Джованни ди Паоло',
      },
      {
        path: 2,
        name: 'Джорджоне',
      },
      {
        path: 2,
        name: 'Парентино, Бернардо',
      },
      {
        path: 2,
        name: 'Пезеллино',
      },
      {
        path: 2,
        name: 'Пьетро Перуджино',
      },
      {
        path: 2,
        name: 'Перуцци, Бальдассаре',
      },
      {
        path: 2,
        name: 'Пизанелло',
      },
      {
        path: 2,
        name: 'Пинтуриккьо',
      },
    ]
  },
  {
    title: 'C 1500 по 1599 гг.',
  },
  {
    title: 'C 1600 по 1699 гг.',
  },
  {
    title: 'C 1700 по 1799 гг.',
  },
  {
    title: 'C 1800 по 1899 гг.',
  },
  {
    title: 'C 1900 по 1999 гг.',
  },
  {
    title: 'C 2000 г.',
  },
]

for (let artist of artistData) {
  addArtist(catalogList, artist.title, artist.artistList);
}
