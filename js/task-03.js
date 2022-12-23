const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
const elem = images.map(el => {
  return (`<li><img src="${el.url}" alt="${el.alt}" width="360" style="border-radius: 10px"></li>`);
})
  .join('');

galleryEl.insertAdjacentHTML("beforeend", elem);

galleryEl.style.display = "flex";
galleryEl.style.alignItems = 'center';
galleryEl.style.flexDirection = 'column';
galleryEl.style.listStyle = 'none';

