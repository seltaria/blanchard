const modalList = document.querySelector('.modal__list');

function addModal(container, artCounter, artSrc, artArtist, artName, artYear, artText) {
  const modalItem = document.createElement('li');
  const modalImg = document.createElement('div');
  const modalDescription = document.createElement('div');
  const modalCloseButton = document.createElement('button');
  const modalArtist = document.createElement('p');
  const modalName = document.createElement('p');
  const modalYear = document.createElement('p');
  const modalText = document.createElement('p');

  modalItem.className = 'modal__item';
  modalImg.className = 'modal__img';
  modalDescription.className = 'modal__description';
  modalCloseButton.className = 'modal__close';
  modalArtist.className = 'modal__artist';
  modalName.className = 'modal__name';
  modalYear.className = 'modal__year';
  modalText.className = 'modal__text';

  modalItem.append(modalImg);
  modalItem.append(modalDescription);
  modalDescription.append(modalCloseButton);
  modalDescription.append(modalArtist);
  modalDescription.append(modalName);
  modalDescription.append(modalYear);
  modalDescription.append(modalText);

  modalItem.dataset.target = artCounter;
  modalImg.innerHTML = `<img src="${artSrc}" alt="${artArtist}, ${artName}">`;
  modalCloseButton.innerHTML = `<svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M0.666641 15.3044L15.3333 0.000153846L16 0.695801L1.33331 16L0.666641 15.3044Z"
      fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M0.666695 -0.000125032L15.3334 15.3041L14.6667 15.9998L2.70967e-05 0.695522L0.666695 -0.000125032Z"
      fill="black" />
    </svg>`;
  modalArtist.textContent = artArtist;
  modalName.textContent = `"${artName}"`;
  modalYear.textContent = artYear;
  modalText.textContent = artText;

  container.append(modalItem);
}

const modalData = [
  {
    artCounter: 'one',
    artSrc: 'img/art-1.jpg',
    artArtist: 'Казимир Малевич',
    artName: 'Половина женщины',
    artYear: '1931-1932',
    artText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste neque necessitatibus hic voluptatibus itaque impedit praesentium illo et voluptate, nostrum inventore eaque dolorum! Explicabo numquam necessitatibus earum quidem ex ad.'
  },
  {
    artCounter: 'two',
    artSrc: 'img/art-2.jpg',
    artArtist: 'Казимир Малевич',
    artName: 'Женщина с граблями',
    artYear: '1931-1932',
    artText: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.'
  },
  {
    artCounter: 'three',
    artSrc: 'img/art-3.jpg',
    artArtist: 'Казимир Малевич',
    artName: 'Сбор урожая',
    artYear: '1931-1932',
    artText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam fuga totam nihil consectetur minima earum laudantium hic asperiores culpa rerum possimus ex sequi distinctio, dolorum recusandae qui saepe praesentium.'
  },
  {
    artCounter: 'four',
    artSrc: 'img/art-4.jpg',
    artArtist: 'Казимир Малевич',
    artName: 'Хаотичные фигуры',
    artYear: '1931-1932',
    artText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor optio libero asperiores cupiditate tempora! Dolor impedit, nemo sint facilis aliquid sapiente modi placeat? Cupiditate, placeat amet. Possimus ratione maiores facilis.'
  },
  {
    artCounter: 'five',
    artSrc: 'img/art-5.jpg',
    artArtist: 'Казимир Малевич',
    artName: 'Трехмерный хаос',
    artYear: '1931-1932',
    artText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis animi quasi incidunt aspernatur voluptas suscipit modi nostrum temporibus sapiente minima eveniet cum, doloribus, atque distinctio a? Cumque odio impedit quod.'
  },
  {
    artCounter: 'six',
    artSrc: 'img/art-6.jpg',
    artArtist: 'Казимир Малевич',
    artName: 'Фигурная абстракция',
    artYear: '1931-1932',
    artText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni quasi ex sapiente hic, pariatur est doloremque iste quidem corporis quisquam, perspiciatis voluptate libero laborum? Dolore eum eveniet provident perspiciatis?'
  },
]

for (let modal of modalData) {
  addModal(modalList, modal.artCounter, modal.artSrc, modal.artArtist, modal.artName, modal.artYear, modal.artText);
}
