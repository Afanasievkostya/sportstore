// файл card.js
'use strict';
(function () {
	var cardsDatas = [{
			imgUrl: 'img/Layer7.png',
			text: 'Stefan Janoski Max',
			sale: '$100.00',
			price: '$200',
			isAvailable: true
		},
		{
			imgUrl: 'img/Layer4.png',
			text: 'Vandal High Supreme',
			sale: '$150.00',
			price: '$250',
			isAvailable: true
		},
		{
			imgUrl: 'img/Layer5.png',
			text: 'New Zoom',
			sale: '$200.00',
			price: '$300',
			isAvailable: true
		},
		{
			imgUrl: 'img/Layer6.png',
			text: 'Fit Shoes',
			sale: '$160.00',
			price: '$280',
			isAvailable: true
		},
		{
			imgUrl: 'img/Layer9.png',
			text: 'Free Shipping',
			sale: '$300.00',
			price: '$470',
			isAvailable: true
		},
		{
			imgUrl: 'img/Layer3.png',
			text: 'Apple Watch',
			sale: '$180.00',
			price: '$300',
			isAvailable: true
		},
		{
			imgUrl: 'img/Layer8.png',
			text: 'Sports Shoes',
			sale: '$165.00',
			price: '$222',
			isAvailable: true
		},
		{
			imgUrl: 'img/Layer6.png',
			text: 'Men Shoes',
			sale: '$105.00',
			price: '$255',
			isAvailable: true
		},
		{
			imgUrl: 'img/Layer2.png',
			text: 'Girl Shoe',
			sale: '$105.00',
			price: '$255',
			isAvailable: true
		}
	];


	window.cardList = document.querySelector('.product-card--row');

	// копирование

	var cardTemplate = document.getElementById('card-template').content;

	var renderCard = function (cardsData) {

		var cardElement = cardTemplate.cloneNode(true);

		cardElement.querySelector('.card-img-top').src = cardsData.imgUrl;

		cardElement.querySelector('.card-img-top').alt = cardsData.text;

		cardElement.querySelector('.card-product__title').textContent = cardsData.text;

		cardElement.querySelector('.card-text--sale').textContent = cardsData.sale;

		cardElement.querySelector('.card-text--price').textContent = cardsData.price;


		var availabilityClass = 'available';

		if (!cardsData.isAvailable) {

			availabilityClass = 'disabled';

		}

		cardElement.querySelector('.card').classList.add(availabilityClass);


		if (cardsData.isAvailable === false) {
			var onDisabled = cardElement.querySelector('.disabled-on');
			onDisabled.style.display = 'block';
		};


		return cardElement;

	};


	for (var i = 0; i < cardsDatas.length; i++) {

		cardList.appendChild(renderCard(cardsDatas[i]));

	}


})();