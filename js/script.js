"use strict";

!function() {
    var e = [ {
        imgUrl: "img/Layer7.png",
        text: "Stefan Janoski Max",
        sale: "$100.00",
        price: "$200",
        isAvailable: !0
    }, {
        imgUrl: "img/Layer4.png",
        text: "Vandal High Supreme",
        sale: "$150.00",
        price: "$250",
        isAvailable: !0
    }, {
        imgUrl: "img/Layer5.png",
        text: "New Zoom",
        sale: "$200.00",
        price: "$300",
        isAvailable: !0
    }, {
        imgUrl: "img/Layer6.png",
        text: "Fit Shoes",
        sale: "$160.00",
        price: "$280",
        isAvailable: !0
    }, {
        imgUrl: "img/Layer9.png",
        text: "Free Shipping",
        sale: "$300.00",
        price: "$470",
        isAvailable: !0
    }, {
        imgUrl: "img/Layer3.png",
        text: "Apple Watch",
        sale: "$180.00",
        price: "$300",
        isAvailable: !0
    }, {
        imgUrl: "img/Layer8.png",
        text: "Sports Shoes",
        sale: "$165.00",
        price: "$222",
        isAvailable: !0
    }, {
        imgUrl: "img/Layer6.png",
        text: "Men Shoes",
        sale: "$105.00",
        price: "$255",
        isAvailable: !0
    }, {
        imgUrl: "img/Layer2.png",
        text: "Girl Shoe",
        sale: "$105.00",
        price: "$255",
        isAvailable: !0
    } ];
    window.cardList = document.querySelector(".product-card--row");
    for (var l = document.getElementById("card-template").content, t = function(e) {
        var t = l.cloneNode(!0);
        t.querySelector(".card-img-top").src = e.imgUrl, t.querySelector(".card-img-top").alt = e.text, 
        t.querySelector(".card-product__title").textContent = e.text, t.querySelector(".card-text--sale").textContent = e.sale, 
        t.querySelector(".card-text--price").textContent = e.price;
        var i = "available";
        (e.isAvailable || (i = "disabled"), t.querySelector(".card").classList.add(i), !1 === e.isAvailable) && (t.querySelector(".disabled-on").style.display = "block");
        return t;
    }, i = 0; i < e.length; i++) cardList.appendChild(t(e[i]));
}(), function() {
    var e = document.getElementById("product-template").content.cloneNode(!0);
    cardList.appendChild(e);
    var t = document.getElementById("advertising-template").content.cloneNode(!0);
    cardList.appendChild(t), window.els = document.querySelectorAll(".element"), cardList.appendChild(els[0]), 
    cardList.appendChild(els[1]), cardList.appendChild(els[2]), cardList.appendChild(els[3]), 
    cardList.appendChild(els[9]), cardList.appendChild(els[4]), cardList.appendChild(els[10]), 
    cardList.appendChild(els[5]), cardList.appendChild(els[6]), cardList.appendChild(els[7]), 
    cardList.appendChild(els[8]), document.querySelectorAll(".card-img-top")[5].style.width = "200px";
}(), function() {
    var a = document.querySelector(".product-template");
    window.addEventListener("scroll", function() {
        var e, t, i, l;
        e = window.pageYOffset + a.getBoundingClientRect().top, t = window.pageYOffset + a.getBoundingClientRect().bottom, 
        i = window.pageYOffset, l = window.pageYOffset + document.documentElement.clientHeight, 
        i < t && e < l && (a.style.transform = "scale(1)");
    });
    var r = document.querySelector(".advertising-element");
    window.addEventListener("scroll", function() {
        var e, t, i, l;
        e = window.pageYOffset + r.getBoundingClientRect().top, t = window.pageYOffset + r.getBoundingClientRect().bottom, 
        i = window.pageYOffset, l = window.pageYOffset + document.documentElement.clientHeight, 
        i < t && e < l && (r.style.transform = "scale(1)");
    });
}();