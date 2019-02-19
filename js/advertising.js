// файл advertising.js
'use strict';

(function () {

   // вставляем рекламные блоки по нумерации

	var productTemplate = document.getElementById('product-template').content;

	var productElement = productTemplate.cloneNode(true);

	cardList.appendChild(productElement);


	var advertisingTemplate = document.getElementById('advertising-template').content;

	var advertisingElement = advertisingTemplate.cloneNode(true);

	cardList.appendChild(advertisingElement);


	var els = document.querySelectorAll('.element');

	cardList.appendChild(els[0]);
	cardList.appendChild(els[1]);
	cardList.appendChild(els[2]);
	cardList.appendChild(els[3]);
	cardList.appendChild(els[9]);
	cardList.appendChild(els[4]);
	cardList.appendChild(els[10]);
	cardList.appendChild(els[5]);
	cardList.appendChild(els[6]);
	cardList.appendChild(els[7]);
	cardList.appendChild(els[8]);

	// изменяем размер часов

	var img = document.querySelectorAll('.card-img-top')

	img[5].style.width = '200px';


})();