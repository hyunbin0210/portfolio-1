//werables hover
let header = document.getElementsByClassName('header')[0]
let h_L_li1 = document.getElementsByClassName('h_L_li')[0]
let pan0 = document.getElementsByClassName('pan0')[0]
let sub_ul1 = document.getElementsByClassName('sub_ul1')
let pan_under0 = document.getElementsByClassName('pan_under0')[0]
let pan_wrap = document.getElementsByClassName('pan_wrap')[0]
let h_R_btn_icon = document.getElementsByClassName('h_R_btn_icon')
let overlay = document.getElementsByClassName('overlay')[0]
let search_bar = document.getElementsByClassName('search_bar')[0]
let login_register_pan = document.getElementsByClassName('login_register_pan')[0]
let cart_pan = document.getElementsByClassName('cart_pan')[0]
let height = 0;
h_L_li1.addEventListener('mouseenter', function () {
    height = 0;
    for (let i = 0; i < sub_ul1.length; i++) {
        sub_ul1[i].style.display = 'block';
        if (height < sub_ul1[i].getBoundingClientRect().height) {
            height = sub_ul1[i].getBoundingClientRect().height;
        }
    }
    let pan0_h = height;
    pan0.style.height = height + 'px';
    pan_wrap.style.top = (pan0_h + header.getBoundingClientRect().height) + 'px';
    pan_wrap.style.display = 'block';
    pan_wrap.style.background = 'rgba(0,0,0,0.5)';
    h_R_btn_icon[0].classList.remove('img_yellow')
    h_R_btn_icon[1].classList.remove('img_yellow')
    h_R_btn_icon[2].classList.remove('img_yellow')
    search_bar.classList.remove('active')
    cart_pan.classList.remove('active')
    overlay.classList.remove('active')
    overlay.classList.remove('login_active')
})
h_L_li1.addEventListener('mouseleave', function () {

    if (!h_L_li1.matches(':hover') && !pan0.matches(':hover')) {
        pan0.style.height = 0 + "px";
        for (let i = 0; i < sub_ul1.length; i++) {
            sub_ul1[i].style.display = "none";
        }
        pan_wrap.style.display = 'none';
        pan_wrap.style.background = 'transparent';
    }

})
pan0.addEventListener('mouseenter', function () {
    for (let i = 0; i < sub_ul1.length; i++) {
        sub_ul1[i].style.display = 'block';
        if (height < sub_ul1[i].getBoundingClientRect().height) {
            height = sub_ul1[i].getBoundingClientRect().height;
        }
    }
    pan0.style.height = height + 'px';
    let pan0_h = height;
    pan_wrap.style.top = (pan0_h + header.getBoundingClientRect().height) + 'px';
    pan_wrap.style.display = 'block';
    pan_wrap.style.background = 'rgba(0,0,0,0.5)';
})
pan0.addEventListener('mouseleave', function () {
    if (!h_L_li1.matches(':hover') && !pan0.matches(':hover')) {
        pan0.style.height = 0 + "px";
        for (let i = 0; i < sub_ul1.length; i++) {
            sub_ul1[i].style.display = "none";
        }
        pan_wrap.style.display = 'none';
        pan_wrap.style.background = 'transparent';
    }
})
// collectibles hover
let h_L_li2 = document.getElementsByClassName('h_L_li')[1]
let pan1 = document.getElementsByClassName('pan1')[0]
let sub_ul2 = document.getElementsByClassName('sub_ul2')
let pan_under1 = document.getElementsByClassName('pan_under1')[0]
let height2 = 0;
h_L_li2.addEventListener('mouseenter', function () {
    for (let i = 0; i < sub_ul2.length; i++) {
        sub_ul2[i].style.display = 'block';
        if (height2 < sub_ul2[i].getBoundingClientRect().height) {
            height2 = sub_ul2[i].getBoundingClientRect().height;
        }
    }
    pan1.style.height = height2 + 'px';
    let pan1_h = height2;
    pan_wrap.style.top = (pan1_h + header.getBoundingClientRect().height) + 'px';
    pan_wrap.style.display = 'block';
    pan_wrap.style.background = 'rgba(0,0,0,0.5)';
    h_R_btn_icon[0].classList.remove('img_yellow')
    h_R_btn_icon[1].classList.remove('img_yellow')
    h_R_btn_icon[2].classList.remove('img_yellow')
    search_bar.classList.remove('active')
    cart_pan.classList.remove('active')
    overlay.classList.remove('active')
    overlay.classList.remove('login_active')
})
h_L_li2.addEventListener('mouseleave', function () {
    pan1.style.height = 0 + "px";
    for (let i = 0; i < sub_ul2.length; i++) {
        sub_ul2[i].style.display = 'none';
    }
    pan_wrap.style.display = 'none';
    pan_wrap.style.background = 'transparent';
})
pan1.addEventListener('mouseenter', function () {
    for (let i = 0; i < sub_ul2.length; i++) {
        sub_ul2[i].style.display = 'block';
        if (height2 < sub_ul2[i].getBoundingClientRect().height) {
            height2 = sub_ul2[i].getBoundingClientRect().height;
        }
    }
    pan1.style.height = height2 + 'px';
    let pan1_h = height2;
    pan_wrap.style.top = (pan1_h + header.getBoundingClientRect().height) + 'px';
    pan_wrap.style.display = 'block';
    pan_wrap.style.background = 'rgba(0,0,0,0.5)';
})
pan1.addEventListener('mouseleave', function () {
    pan1.style.height = 0 + "px";
    for (let i = 0; i < sub_ul2.length; i++) {
        sub_ul2[i].style.display = 'none';
    }
    pan_wrap.style.display = 'none';
    pan_wrap.style.background = 'transparent';
})

// header 오른쪽 아이콘 클릭시 노란색
// let h_R_btn_icon = document.getElementsByClassName('h_R_btn_icon');
for (let i = 0; i < h_R_btn_icon.length; i++) {
    h_R_btn_icon[i].addEventListener('click', function () {
        for(let j=0; j<h_R_btn_icon.length; j++) {
            if(j !== i) {
                h_R_btn_icon[j].classList.remove('img_yellow');
            }
        }
        h_R_btn_icon[i].classList.toggle('img_yellow');
    })
}

// search_bar
let login_pan = document.getElementsByClassName('login_pan')[0]
let register_pan = document.getElementsByClassName('register_pan')[0]
let LR_close_btn = document.getElementsByClassName('LR_close_btn')
let cart_img = document.getElementsByClassName('cart_img')[0]
h_R_btn_icon[0].addEventListener('click', function(){
    cart_pan.classList.remove('active')
    overlay.classList.remove('active')
    overlay.classList.remove('login_active')
    login_register_pan.classList.remove('active')
    search_bar.classList.toggle('active')
})
h_R_btn_icon[1].addEventListener('click', function(){
    search_bar.classList.remove('active')
    cart_pan.classList.remove('active')
    overlay.classList.remove('active')
    overlay.classList.toggle('login_active')
    login_register_pan.classList.toggle('active')
    // login_pan.classList.toggle('active')
    // register_pan.classList.toggle('active')
})
h_R_btn_icon[2].addEventListener('click', function(){
    search_bar.classList.remove('active')
    overlay.classList.remove('login_active')
    login_register_pan.classList.remove('active')
    cart_pan.classList.toggle('active')    
    overlay.classList.toggle('active')
})
cart_img.addEventListener('click', function(){
    cart_pan.classList.remove('active')    
    overlay.classList.remove('active')
    h_R_btn_icon[2].classList.remove('img_yellow')
})
for(let i=0; i<LR_close_btn.length; i++) {
    LR_close_btn[i].addEventListener('click', function(){
        overlay.classList.remove('login_active')
        overlay.classList.remove('active')
        login_register_pan.classList.remove('active')
        h_R_btn_icon[1].classList.remove('img_yellow');
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const loginPanel = document.querySelector(".login_pan");
    const registerPanel = document.querySelector(".register_pan");

    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("switch_tab")) {
            event.preventDefault(); // 기본 링크 동작 방지

            if (loginPanel.classList.contains("active")) {
                loginPanel.classList.remove("active");
                registerPanel.classList.add("active");
            } else {
                registerPanel.classList.remove("active");
                loginPanel.classList.add("active");
            }
        }
    });
});