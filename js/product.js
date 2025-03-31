let item_list = document.getElementsByClassName('item_list')[0]
let breadcrumb_product = document.getElementsByClassName('breadcrumb_product')[0]
let page_title = document.getElementsByClassName('page_title')[0]
let page_desc = document.getElementsByClassName('page_desc')[0]

let idx = get_cate_url_info('cateNo')

if(idx == 0) {
    document.title = `${PRODUCT[0].bc} | Koeniqsegg Gear`
    breadcrumb_product.innerHTML += `${PRODUCT[0].bc}`
    page_title.innerHTML += `${PRODUCT[0].title}`
    page_desc.innerHTML += `
        <span>
            ${PRODUCT[0].desc}
        </span>`
}
else if(idx == 1) {
    document.title = `${PRODUCT[1].bc} | Koeniqsegg Gear`
    breadcrumb_product.innerHTML += `${PRODUCT[1].bc}`
    page_title.innerHTML += `${PRODUCT[1].title}`
    page_desc.innerHTML += `
        <p>
            ${PRODUCT[1].desc}
        </p>`
}
else if(idx == 2) {
    document.title = `${PRODUCT[2].bc} - Car Detailing PRODUCTs | Koenigsegg Gear`
    breadcrumb_product.innerHTML += `${PRODUCT[2].bc}`
    page_title.innerHTML += `${PRODUCT[2].title}`
    page_desc.innerHTML += `
        <p>
            ${PRODUCT[2].desc}
        </p>`
}

for(let i=0; i<ALL_ITEMS.length; i++) {
    for(let j=0; j<ALL_ITEMS[i].length; j++) {

        // wearables
        if(idx == 0 && ALL_ITEMS[i][j].cateNo == 0) {
            item_list.innerHTML += `
                <div class="item_box">
                    <a href="item.html?productNo=${ALL_ITEMS[i][j].productNo}&item_no=${ALL_ITEMS[i][j].item_no}">
                        <div class="item_box_outer">
                            <div class="item_box_inner">
                                <img src="./img/koenigsegg/full/${ALL_ITEMS[i][j].src}">
                            </div>
                        </div>
                        <h2 class="item_name">${ALL_ITEMS[i][j].title}</h2>
                    </a>
                    <div class="item_price"> $${(ALL_ITEMS[i][j].usd_price).toLocaleString('ko')}</div>
                </div>`
        }
        // gift
        else if(idx == 1 && ALL_ITEMS[i][j].cateNo == 1) {
            item_list.innerHTML += `
                <div class="item_box">
                    <a href="item.html?productNo=${ALL_ITEMS[i][j].productNo}&item_no=${ALL_ITEMS[i][j].item_no}">
                        <div class="item_box_outer">
                            <div class="item_box_inner">
                                <img src="./img/koenigsegg/full/${ALL_ITEMS[i][j].src}">
                            </div>
                        </div>
                        <h2 class="item_name">${ALL_ITEMS[i][j].title}</h2>
                    </a>
                    <div class="item_price"> $${(ALL_ITEMS[i][j].usd_price).toLocaleString('ko')}</div>
                </div>`
        }
        // ghost gleam
        else if(idx == 2 && ALL_ITEMS[i][j].cateNo == 2) {
            item_list.innerHTML += `
                <div class="item_box">
                    <a href="item.html?productNo=${ALL_ITEMS[i][j].productNo}&item_no=${ALL_ITEMS[i][j].item_no}">
                        <div class="item_box_outer">
                            <div class="item_box_inner">
                                <img src="./img/koenigsegg/full/${ALL_ITEMS[i][j].src}">
                            </div>
                        </div>
                        <h2 class="item_name">${ALL_ITEMS[i][j].title}</h2>
                    </a>
                    <div class="item_price"> $${(ALL_ITEMS[i][j].usd_price).toLocaleString('ko')}</div>
                </div>`
        }
    }
}