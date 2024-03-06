import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoItemTemplate = (resto) => `
  <div class="resto-card" id="resto-card">
    <div class="resto-item__header">
      <picture>
          <source type="image/webp" data-srcset="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}">
          <source type="image/jpeg" data-srcset="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}">
          <img class="resto-item__header__image lazyload" alt="${resto.name}"
          data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/113/1000/500'}">
            <div class="city">${resto.city}</div>
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
      </picture>
    </div>
    
    <div class="resto-item__content">
      <h3 class="name"><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;
 
const createRestoDetailTemplate = (resto) => `
<div class="detail-section-body">
    <div class ="detail-header">
        <div class="detail-hero">
    <picture>
    <source type="image/webp" data-srcset="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}">
    <source type="image/jpeg" data-srcset="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}">
      <img class="resto-item-header-image lazyload" alt="${resto.name}"
      data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/113/1000/500'}">
    </picture>
            <p class="detail-resto-rating"><span class="fa fa-star checked"></span> ${resto.rating}</p>
        </div>
        <div class="detail-resto-title">
            <div class="detail-resto-title-section">
                <h1>${resto.name}</h1>
                <h2>${resto.city}</h2>
                <p>${resto.address}</p>
            </div>
            <div class="detail-resto-info">
                <h2>Description</h3>
                <p>${resto.description}</p>
            </div>
            <div class="detail-resto-categories">
              <h2>Categories</h2>
            <ul>${resto.categories.map((category) => `
                <li>${category.name}</li>`).join('')}</ul>
            </div>
        </div>
    </div>
</div>
<div class="detail-resto-menu">
    <h1>Menu List</h1>
    <div class="menu">
        <div class="list-menu">
            <h2>Foods</h2>
            <ul>${resto.menus.foods.map((food) => `
                <li>${food.name}</li>`).join('')}
            </ul>
        </div>
        <div class="list-drink">
            <h2>Drinks</h2>
            <ul>${resto.menus.drinks.map((drink) => `
            <li>${drink.name}</li>`).join('')}
            </ul>
        </div>
    </div>
</div>

<div class="resto-review-section">
    <h1>Reviews</h1>
    ${resto.customerReviews.map((review) => `
    <div class="resto-review-user">
        <div class="review">
            <h3>${review.name}</h3>
            <p class="resto-review-desc">${review.review}</p>
            <p class="resto-review-date">${review.date}</p>
        </div> 
    </div>
    `)}
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { 
  createRestoItemTemplate, 
  createRestoDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};