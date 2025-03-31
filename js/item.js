let breadcrumb_product = document.getElementsByClassName('breadcrumb_product')[0]
let breadcrumb_item = document.getElementsByClassName('breadcrumb_item')[0]
let productNo = ""
let item_no = ""
let url = location.href

url = url.split("?");
if(url.length > 1) {
    url = url[1].split("&")
    tmp_productNo = url[0].split("=")
    tmp_item_no = url[1].split("=")
    productNo = tmp_productNo[1]
    item_no = tmp_item_no[1] - 1
}

let cateNo = ALL_ITEMS[productNo][item_no].cateNo

if(productNo == 0) {    
    breadcrumb_product.innerHTML += `<a href="product.html?cateNo=${cateNo}">${PRODUCT[cateNo].bc}</a>`
    breadcrumb_item.innerHTML += `${ALL_ITEMS[productNo][item_no].title}`
    document.title = `${ALL_ITEMS[productNo][item_no].title} | Koeniqsegg Gear`
}
else if(productNo == 1) {    
    breadcrumb_product.innerHTML += `<a href="product.html?cateNo=${cateNo}">${PRODUCT[cateNo].bc}</a>`
    breadcrumb_item.innerHTML += `${ALL_ITEMS[productNo][item_no].title}`
    document.title = `${ALL_ITEMS[productNo][item_no].title} | Koeniqsegg Gear`
}
else if(productNo == 2) {    
    breadcrumb_product.innerHTML += `<a href="product.html?cateNo=${cateNo}">${PRODUCT[cateNo].bc}</a>`
    breadcrumb_item.innerHTML += `${ALL_ITEMS[productNo][item_no].title}`
    document.title = `${ALL_ITEMS[productNo][item_no].title} | Koeniqsegg Gear`
}

/////////////////////////////////////////////////////////////////////////////////////

let item_img_outer = document.getElementsByClassName('item_img_outer')[0]
let item_img_sub_wrap = document.getElementsByClassName('item_img_sub_wrap')[0]
let item_img_box = document.getElementsByClassName('item_img_box')[0]
let item_img_length = Object.keys(ITEM_IMG[productNo][item_no]).length
let item_img_sub_box = document.getElementsByClassName('item_img_sub_box')

for(let i=0; i<item_img_length; i++) {
    item_img_outer.innerHTML += `
        <div class="item_img_inner item_img_inner${i}">
            <img src="./img/koenigsegg/item/${ITEM_IMG1[productNo][item_no][i]}" alt="">
        </div>`
}

let num = 0;
function slide(oPos, cIdx, cPos) {
    if(btn_chk) {
        item_img_sub_box[idx].classList.remove('active')
        item_img_sub_box[cIdx].classList.add('active')

        btn_chk = false
        let posX = 0;            
        
        let interval = setInterval(function(){                
            // 현재 보고있는 판 - 내보내기
            item_img_inner[idx % b_count].style.left = `${oPos*posX}%`;
            
            // 들어올 판 - 우측에서 들어오기
            item_img_inner[cIdx].style.left = `${cPos*(100 - posX)}%`;
            num = cIdx;
            posX+=1;
            if(posX > 100) {
                btn_chk = true;
                clearInterval(interval)
                idx = cIdx; // 다음 들어올 방 잡기
            }
        }, 1)
    }
}

let item_img_inner = document.getElementsByClassName('item_img_inner')
let b_count = item_img_length;
let idx = 0;
let btn_chk = true;


for(let i=0; i<item_img_length; i++) {
    item_img_sub_wrap.innerHTML += `
        <div class="item_img_sub_box" data-key=${i}>
            <img src="./img/koenigsegg/item/${ITEM_IMG1[productNo][item_no][i]}" alt="">
        </div>`
}
if(item_img_length <= 1) {
    item_img_sub_box[0].style.display = 'none';
}

item_img_sub_box[0].classList.add('active')
for(let i=0; i<item_img_length; i++) {
    item_img_sub_box[i].addEventListener('click', function(event){
        if(btn_chk) {
            let clickedBox = event.target.closest('.item_img_sub_box');
            if (!clickedBox) return;
            let sel_item_img_sub_box_idx = clickedBox.getAttribute('data-key');
            
            if(idx < sel_item_img_sub_box_idx)
                slide(-1, sel_item_img_sub_box_idx, 1)
            else if(idx > sel_item_img_sub_box_idx)
                slide(1, sel_item_img_sub_box_idx, -1)
        }
    })
}

for(let i=0; i<item_img_length; i++) {
    if(item_img_length >= 4) {
        item_img_sub_box[i].style.width = `calc((100% - (15px * 3)) / 4)`    
    }
    else {
        item_img_sub_box[i].style.width = `calc((100% - (15px * ${item_img_length-1})) / ${item_img_length})`
    }
}

window.onload = function() {
    let imgBox = document.querySelector(".item_img_outer");
    let img2 = document.querySelector(".item_img_sub_box img")
    let lens = document.createElement("div");

    lens.classList.add("magnifier-lens");
    imgBox.appendChild(lens);

    let zoomLevel = 1.5;
    let lensSize = 200;

    imgBox.addEventListener("mousemove", function(e) {
        let img = document.querySelectorAll(".item_img_inner img")[num];
        let { left, top, width, height } = imgBox.getBoundingClientRect();
        let x = e.clientX - left;
        let y = e.clientY - top;
        lens.style.left = `${x - lensSize / 2}px`;
        lens.style.top = `${y - lensSize / 2}px`;
        lens.style.display = "block";
        
        lens.style.backgroundImage = `url(${img.src})`;
        lens.style.backgroundSize = `${width * zoomLevel}px ${height * zoomLevel}px`;
        lens.style.backgroundPosition = `-${x * zoomLevel - lensSize / 2}px -${y * zoomLevel - lensSize / 2}px`;
    });

    imgBox.addEventListener("mouseleave", function() {
        lens.style.display = "none";
    });
};

////////////////////////////////////////////////////////////////////////////////////////////

let item_desc = document.getElementsByClassName('item_desc')[0]
item_desc.innerHTML += `
    <div class="item_desc_top">
        <div class="item_desc_top_title">
            <h1>${ALL_ITEMS[productNo][item_no].title}</h1>
        </div>
        <div class="item_desc_top_price">$${ALL_ITEMS[productNo][item_no].usd_price}</div>
        <div class="item_desc_top_desc">${ITEM_DESC[productNo][item_no].desc}</div>
    </div>
    <div class="item_desc_bot">
        <div class="item_count">
            <button type="button" class="minus">-</button>
            <label for="txt_qty" class="txt_qty_label"></label>
            <input type="number" value="1" id="txt_qty" size="4" min="1" max="825" step="1" inputmode="numeric" autocomplete="off">
            <button type="button" class="plus">+</button>
        </div>
        <input type="submit" value="Add to cart" name="add_btn" class="add_btn">
    </div>`

let plus = document.getElementsByClassName('plus')[0]
let minus = document.getElementsByClassName('minus')[0]

plus.addEventListener('click', function(){
    let qty = document.getElementById('txt_qty');
    qty.value = +qty.value + 1
})
minus.addEventListener('click', function(){
    let qty = document.getElementById('txt_qty');
    if(qty.value > 0) {
        qty.value = +qty.value - 1;
    }
})



