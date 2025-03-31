let sec2 = document.getElementsByClassName('sec2')[0]
let sec4 = document.getElementsByClassName('sec4')[0]
let sec7 = document.getElementsByClassName('sec7')[0]

// itembox 생성
function createitembox(item, swiper, mySwiper, swiperName) {
    item.innerHTML += `
        <div class="${swiper} mySwiper ${mySwiper}">
            <div class="swiper-wrapper ${swiperName}"></div>
        </div>`
}
//////////////////////////////////////////////////////////////////////////

// new arrivals
createitembox(sec2, 'swiper1', 'mySwiper1', 'na_swiper-wrapper')
// bestsellers
createitembox(sec4, 'swiper2', 'mySwiper2', 'bs_swiper-wrapper')
// ghost gleam
createitembox(sec7, 'swiper3', 'mySwiper3', 'gg_swiper-wrapper')

//////////////////////////////////////////////////////////////////////////

// new arrivals
var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },

    autoplay: {
        delay: 3000
    },
    speed: 1000
});
// bestsellers
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },

    autoplay: {
        delay: 3000
    },
    speed: 1000
});
// ghost gleam
var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },

    autoplay: {
        delay: 3000
    },
    speed: 1000
});

//////////////////////////////////////////////////////////////////////////

// new arrivals
document.getElementsByClassName('mySwiper')[0].addEventListener('mouseenter', function () {
    swiper1.autoplay.stop()
})
document.getElementsByClassName('mySwiper')[0].addEventListener('mouseleave', function () {
    swiper1.autoplay.start()
})
// bestsellers
document.getElementsByClassName('mySwiper')[1].addEventListener('mouseenter', function () {
    swiper2.autoplay.stop()
})
document.getElementsByClassName('mySwiper')[1].addEventListener('mouseleave', function () {
    swiper2.autoplay.start()
})
// ghost gleam
document.getElementsByClassName('mySwiper')[2].addEventListener('mouseenter', function () {
    swiper3.autoplay.stop()
})
document.getElementsByClassName('mySwiper')[2].addEventListener('mouseleave', function () {
    swiper3.autoplay.start()
})

//////////////////////////////////////////////////////////////////////////

// new arrivals
let swiper_wrapper = document.getElementsByClassName('swiper-wrapper')[0];
let na_swiper_wrapper = document.getElementsByClassName('na_swiper-wrapper')[0]
// bestsellers
let swiper_wrapper1 = document.getElementsByClassName('swiper-wrapper')[1];
let bs_swiper_wrapper = document.getElementsByClassName('bs_swiper-wrapper')[0]
// ghost gleam
let swiper_wrapper2 = document.getElementsByClassName('swiper-wrapper')[1];
let gg_swiper_wrapper = document.getElementsByClassName('gg_swiper-wrapper')[0]

//////////////////////////////////////////////////////////////////////////

// item 삽입
function createitem(qty, item, cate_num) {
    for (let i = 0; i < qty; i++) {
        item.innerHTML += `
            <div class="swiper-slide">
                <a href="item.html?productNo=${ALL_ITEMS[cate_num][i].productNo}&item_no=${ALL_ITEMS[cate_num][i].item_no}">
                    <div class="item_box">
                        <div class="item_box_inner">
                            <img src="./img/koenigsegg/full/${ALL_ITEMS[cate_num][i].src}">
                        </div>
                    </div>
                    <h2 class="item_name">${ALL_ITEMS[cate_num][i].title}</h2>
                </a>
                <div class="item_price"> $${(ALL_ITEMS[cate_num][i].usd_price).toLocaleString('ko')}</div>
            </div>`
    }
}
//////////////////////////////////////////////////////////////////////////
let na_length = ALL_ITEMS[0].length
let bs_length = ALL_ITEMS[1].length
let gg_length = ALL_ITEMS[2].length

// new arrivals
createitem(na_length, na_swiper_wrapper, 0)
// bestsellers
createitem(bs_length, bs_swiper_wrapper, 1)
// ghost gleam
createitem(gg_length, gg_swiper_wrapper, 2)
