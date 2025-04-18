// cateNo:0 => wearables / cateNo:1 => gift / cateNo:2 => ghost gleam
const ALL_ITEMS = [
    [
        {src: 'STATEMENT-BLACK-FRONT.jpg', title: 'Statement Ghost Tee Black', usd_price: 66, eur_price: 60, sek_price: 700, item_no:1, cateNo:0, productNo:0},
        {src: 'MUGG1.jpg', title: 'Ghost Metal Mug', usd_price: 36, eur_price: 33, sek_price: 380, item_no:2, cateNo:1, productNo:0},
        {src: '30-TSHIRT-FRONT.jpg', title: '30 Years of Performance – Tee', usd_price: 73, eur_price: 67, sek_price: 780, item_no:3, cateNo:0, productNo:0},
        {src: 'Magazine-2.0.jpg', title: 'Koenigsegg Magazine No. 7', usd_price: 19, eur_price: 17, sek_price: 200, item_no:4, cateNo:1, productNo:0},
        {src: '30-CAP-BLACK-THUMB.jpg', title: '30 Years of Performance – Black Cap', usd_price: 47, eur_price: 43, sek_price: 500, item_no:5, cateNo:0, productNo:0},
        {src: '30-CAP-CREAM-THUMB.jpg', title: '30 Years of Performance – Cream Cap', usd_price: 47, eur_price: 43, sek_price: 500, item_no:6, cateNo:0, productNo:0},
        {src: '30-HOODIE-BLACK-FRONT.jpg', title: '30 Years of Performance – Black Hoodie', usd_price: 158, eur_price: 144, sek_price: 1680, item_no:7, cateNo:0, productNo:0},
        {src: '30-HOODIE-CREAM-FRONT.jpg', title: '30 Years of Performance – Cream Hoodie', usd_price: 158, eur_price: 144, sek_price: 1680, item_no:8, cateNo:0, productNo:0},
        {src: 'Jesko-White_1.jpg', title: 'LEGO Technic Jesko Absolut White', usd_price: 68, eur_price: 63, sek_price: 729, item_no:9, cateNo:1, productNo:0},
        {src: 'Jesko-Grey_1.jpg', title: 'LEGO Technic Jesko Absolut Grey', usd_price: 68, eur_price: 63, sek_price: 729, item_no:10, cateNo:1, productNo:0},
        {src: 'DIVIDED-TSHIRT-FRONT.jpg', title: 'Divide – Tee', usd_price: 73, eur_price: 67, sek_price: 780, item_no:11, cateNo:0, productNo:0},
        {src: 'GRIDDED-TSHIRT-FRONT.jpg', title: 'Gridded – Tee', usd_price: 73, eur_price: 67, sek_price: 780, item_no:12, cateNo:0, productNo:0},
        {src: 'SPINE-TSHIRT-FRONT.jpg', title: 'Spine – Tee', usd_price: 73, eur_price: 67, sek_price: 780, item_no:13, cateNo:0, productNo:0},
        {src: 'Scarf.png', title: 'Koenigsegg Scarf', usd_price: 131, eur_price: 120, sek_price: 1400, item_no:14, cateNo:1, productNo:0},
        {src: 'Storm-Catcher-Front.jpg', title: 'Storm Catcher – Jacket', usd_price: 202, eur_price: 185, sek_price: 2150, item_no:15, cateNo:0, productNo:0},
        {src: 'Koenigsegg-Sneaker-Charm.jpg', title: 'Ghost Sneaker Charm Silver', usd_price: 111, eur_price: 101, sek_price: 1180, item_no:16, cateNo:1, productNo:0},
        {src: 'Terry-Front-1.jpg', title: 'Terry Polo Shirt', usd_price: 82, eur_price: 76, sek_price: 879, item_no:17, cateNo:0, productNo:0},
    ], 
    [
        {src: '022-Ghost-pendant_Black-Silver_00000-scaled-1.jpg', title: 'Ghost Pendant – Silver', usd_price: 249, eur_price: 228, sek_price: 2650, item_no:1, cateNo:1, productNo:1},
        {src: 'black-cap-1-scaled.jpg', title: 'Black Cap', usd_price: 45, eur_price: 41, sek_price: 480, item_no:2, cateNo:0, productNo:1},
        {src: 'ghost-cap-black-1-copy-scaled.jpg', title: 'Black Ghost Cap', usd_price: 45, eur_price: 41, sek_price: 480, item_no:3, cateNo:0, productNo:1},
        {src: 'Ghost-Sweatshirt-Front.jpg', title: 'Ghost Sweatshirt', usd_price: 122, eur_price: 112, sek_price: 1300, item_no:4, cateNo:0, productNo:1},
        {src: 'Ghost-black.jpg', title: 'Ghost braided bracelet – Oxidized Silver', usd_price: 267, eur_price: 2850, sek_price: 500, item_no:5, cateNo:1, productNo:1},
        {src: 'Ghost-silver-1.jpg', title: 'Ghost braided bracelet – Silver', usd_price: 267, eur_price: 245, sek_price: 2850, item_no:6, cateNo:1, productNo:1},
        {src: 'statement_tshirt_white_01-scaled.jpg', title: 'Statement Ghost Tee White', usd_price: 66, eur_price: 60, sek_price: 700, item_no:7, cateNo:0, productNo:1},
        {src: 'ghost-cap-white-1-copy-scaled.jpg', title: 'White Ghost Cap', usd_price: 45, eur_price: 41, sek_price: 480, item_no:8, cateNo:0, productNo:1},
        {src: 'GHOST-TEE-FRONT.jpg', title: 'Ghost Tee White', usd_price: 66, eur_price: 60, sek_price: 700, item_no:9, cateNo:0, productNo:1},
    ], 
    [
        {src: 'Bucket_product.jpg', title: 'Wash Bucket 20L', usd_price: 33, eur_price: 30, sek_price: 349, item_no:1, cateNo:2, productNo:2},
        {src: 'PITSTOP-PACKAGE.jpg', title: 'Ghost Gleam - Pitstop Package', usd_price: 88, eur_price: 80, sek_price: 934, item_no:2, cateNo:2, productNo:2},
        {src: 'Gloss-Thumb-1.jpg', title: 'Ghost Gleam - Gloss Package', usd_price: 152, eur_price: 139, sek_price: 1622, item_no:3, cateNo:2, productNo:2},
        {src: 'PRE-WASH-PACKAGE.jpg', title: 'Ghost Gleam - Pre Wash Package', usd_price: 72, eur_price: 66, sek_price: 766, item_no:4, cateNo:2, productNo:2},
        {src: 'Thumb-full.jpg', title: 'Ghost Gleam - Full Package', usd_price: 300, eur_price: 275, sek_price: 3194, item_no:5, cateNo:2, productNo:2},
        {src: 'Tershine-Scrub-Pad.jpg', title: 'Scrub Pad', usd_price: 6, eur_price: 6, sek_price: 69, item_no:6, cateNo:2, productNo:2},
        {src: 'Tershine-Wheel-Cleaner.jpg', title: 'Wheel Brush', usd_price: 19, eur_price: 17, sek_price: 198, item_no:7, cateNo:2, productNo:2},
        {src: 'Tershine-Brushes.jpg', title: 'Ultra Soft Detailing Brushes', usd_price: 14, eur_price: 13, sek_price: 149, item_no:8, cateNo:2, productNo:2},
        {src: 'WASH-PAD.jpg', title: 'Microfiber Wash Pad', usd_price: 18, eur_price: 16, sek_price: 189, item_no:9, cateNo:2, productNo:2},
        {src: 'DRYING-TOWEL.jpg', title: 'Microfiber Drying Cloth', usd_price: 28, eur_price: 26, sek_price: 298, item_no:10, cateNo:2, productNo:2},
        {src: 'GLASS-CLOTH.jpg', title: 'Microfiber Glass Cloth', usd_price: 7, eur_price: 7, sek_price: 79, item_no:11, cateNo:2, productNo:2},
        {src: 'MICROFIBER-CLOTHS.jpg', title: 'Microfiber Cloths', usd_price: 19, eur_price: 17, sek_price: 198, item_no:12, cateNo:2, productNo:2},
        {src: 'TIRE-BRUSH.jpg', title: 'Tire Brush', usd_price: 12, eur_price: 11, sek_price: 129, item_no:13, cateNo:2, productNo:2},
        {src: 'RESOLVE1.jpg', title: 'Resolve - Degreaser', usd_price: 15, eur_price: 14, sek_price: 159, item_no:14, cateNo:2, productNo:2},
        {src: 'REVOLVE1.jpg', title: 'Revolve - Wheel Cleaner', usd_price: 26, eur_price: 24, sek_price: 279, item_no:15, cateNo:2, productNo:2},
        {src: 'SUMMIT1.jpg', title: 'Summit - Snow Foam', usd_price: 19, eur_price: 17, sek_price: 199, item_no:16, cateNo:2, productNo:2},
        {src: 'INSIDER1.jpg', title: 'Insider - Interior Cleaner', usd_price: 19, eur_price: 17, sek_price: 199, item_no:17, cateNo:2, productNo:2},
        {src: 'EMBRACE1.jpg', title: 'Embrace - Shampoo', usd_price: 31, eur_price: 28, sek_price: 329, item_no:18, cateNo:2, productNo:2},
        {src: 'LUCID1-1.jpg', title: 'Lucid - Glass Cleaner', usd_price: 17, eur_price: 15, sek_price: 179, item_no:19, cateNo:2, productNo:2},
        {src: 'PITSTOP1.jpg', title: 'Pitstop - Quick Wash', usd_price: 26, eur_price: 24, sek_price: 279, item_no:20, cateNo:2, productNo:2},
        {src: 'BRILLIANCE1.jpg', title: 'Brilliance - Ceramic Spray Wax', usd_price: 31, eur_price: 28, sek_price: 329, item_no:21, cateNo:2, productNo:2},
    ]
]


let PRODUCT = [
    {bc: 'Wearables', title: 'Wearables', desc: 'The Koenigsegg <strong>wearables</strong> collection includes ready-to-wear apparel, exclusive Koenigsegg accessories and kidswear that’s designed to set you and your family apart from the crowd.&nbsp; Featuring sustainable materials, the ultimate in comfort and beautiful modern design, the Koenigsegg wearables collection will be something you reach for every day.'},
    {bc: 'Gifts', title: 'Gifts', desc: 'Discover the perfect gift for the ultimate Koenigsegg enthusiast at the Koenigsegg Gear Shop.'},
    {bc: 'Ghost Gleam', title: 'Ghost Gleam', desc: 'The Ghost Gleam detailing range offers premium vehicle care products, including shampoo, quick wash, glass cleaner, ceramic spray wax, interior cleaner, wheel cleaner, degreaser, and snow foam.<br>All Ghost Gleam formulations are natural and biodegradable.<br>First and foremost Ghost Gleam will be used exclusively on all Koenigseggs at our Gripen Atelier, as part of our pre-delivery process to ensure quality, low environmental impact and a perfect result.<br>All Ghost Gleam products come in an uniquely designed, ergonomic and fully stackable bottle optimised for shipping and stowability.<br>Ghost Gleam is a collaboration between Koenigsegg and tershine, a Swedish company that develops world-leading vehicle rinse and detailing products.'},
]

let PRODUCT2 = [
    {bc: 'New Arrivals', title: 'New Arrivals', desc: `Discover the latest and greatest additions to your Koenigsegg gear collection with our New Arrivals category. From sleek apparel to must-have accessories, stay ahead of the curve with our freshest releases. Explore cutting-edge designs and top-quality craftsmanship that embody the spirit of Koenigsegg. Don’t miss out – shop now and elevate your style with the newest arrivals from the world of Koenigsegg.`},
    {bc: 'Bestsellers', title: 'Bestsellers', desc: 'Bestsellers'},
    {bc: 'Ghost Gleam', title: 'Ghost Gleam', desc: `The Ghost Gleam detailing range offers premium vehicle care products, including shampoo, quick wash, glass cleaner, ceramic spray wax, interior cleaner, wheel cleaner, degreaser, and snow foam.<br>All Ghost Gleam formulations are natural and biodegradable.<br>First and foremost Ghost Gleam will be used exclusively on all Koenigseggs at our Gripen Atelier, as part of our pre-delivery process to ensure quality, low environmental impact and a perfect result.<br>All Ghost Gleam products come in an uniquely designed, ergonomic and fully stackable bottle optimised for shipping and stowability.<br>Ghost Gleam is a collaboration between Koenigsegg and tershine, a Swedish company that develops world-leading vehicle rinse and detailing products.`},
]

let ITEM_IMG = [
    [
        {src0: 'STATEMENT-BLACK-FRONT.jpg', src1: 'STATEMENT-BLACK-BACK.jpg'},
        {src0: 'MUGG1.jpg', src1: 'MUGG2.jpg'},
        {src0: '30-TSHIRT-FRONT.jpg', src1: '30-TSHIRT-BACK.jpg', src2: '30-TSHIRT-DETAIL.jpg'},
        {src0: 'Magazine-2.0.jpg', src1: 'KOE-MAG-NO7-BACK.jpg'},
        {src0: '30-CAP-BLACK-FRONT.jpg', src1: '30-CAP-BLACK-BACK.jpg', src2: '30-CAP-BLACK-FRONT2.jpg', src3: '30-CAP-BLACK-DETAIL.jpg'},
        {src0: '30-CAP-CREAM-FRONT2.jpg', src1: '30-CAP-CREAM-BACK.jpg', src2: '30-CAP-CREAM-FRONT.jpg', src3: '30-CAP-CREAM-DETAIL.jpg'},
        {src0: '30-HOODIE-BLACK-FRONT.jpg', src1: '30-HOODIE-BLACK-BACK.jpg', src2: '30-HOODIE-BLACK-SIDE.jpg'},
        {src0: '30-HOODIE-CREAM-FRONT.jpg', src1: '30-HOODIE-CREAM-BACK.jpg', src2: '30-HOODIE-CREAM-SIDE.jpg'},
        {src0: 'Jesko-White_1.jpg', src1: 'Jesko-White_2.jpg', src2: 'Jesko-White_3.jpg', src3: 'Jesko-White_4.jpg', src4: 'Jesko-White_5.jpg', src5: 'Jesko-White_6.jpg', src6: 'Jesko-White_7.jpg'},
        {src0: 'Jesko-Grey_1.jpg', src1: 'Jesko-Grey_2.jpg', src2: 'Jesko-Grey_3.jpg', src3: 'Jesko-Grey_4.jpg', src4: 'Jesko-Grey_5.jpg', src5: 'Jesko-Grey_6.jpg', src6: 'Jesko-Grey_7.jpg'},
        {src0: 'DIVIDED-TSHIRT-FRONT.jpg', src1: 'DIVIDED-TSHIRT-BACK.jpg', src2: 'DIVIDED-TSHIRT-DETAIL.jpg'},
        {src0: 'GRIDDED-TSHIRT-FRONT.jpg', src1: 'GRIDDED-TSHIRT-BACK.jpg', src2: 'GRIDDED-TSHIRT-DETAIL.jpg'},
        {src0: 'SPINE-TSHIRT-FRONT.jpg', src1: 'SPINE-TSHIRT-BACK.jpg'},
        {src0: 'Scarf-1-scaled.jpg', src1: 'Scarf-2-scaled.jpg'},
        {src0: 'Storm-Catcher-Front.jpg', src1: 'Storm-Catcher-Back.jpg', src2: 'Storm-Catcher-Detail-1-Large.jpeg', src3: 'Storm-Catcher-Detail-2-Large.jpeg', src4: 'Storm-Catcher-Detail-3-Large.jpeg'},
        {src0: 'Koenigsegg-Sneaker-Charm.jpg', src1: 'sneaker_charm_03-scaled.jpg'},
        {src0: 'Terry-Front-1.jpg', src1: 'Terry-Back-1.jpg', src2: 'Terry-Detail.jpg'},
    ],
    [
        {src0: '022-Ghost-pendant_Black-Silver_00000-scaled-1.jpg', src1: '022-Ghost-pendant_Black-Silver_00001-scaled-1.jpg', src2: '022-Ghost-pendant_Black-Silver_00002-scaled-1.jpg', src3: '022-Ghost-pendant_Black-Silver_00003-scaled-1.jpg'},
        {src0: 'black-cap-2-scaled.jpg', src1: 'black-cap-3-scaled.jpg', src2: 'black-cap-4-scaled.jpg', src3: 'black-cap-5-scaled.jpg'},
        {src0: 'ghost-cap-black-1-scaled.jpg', src1: 'ghost-cap-black-3-1-scaled.jpg', src2: 'ghost-cap-black-2-scaled.jpg', src3: 'ghost-cap-black-3-scaled.jpg'},
        {src0: 'Ghost-Sweatshirt-Front.jpg', src1: 'Ghost-Sweatshirt-Back.jpg'},
        {src0: 'Ghost-black.jpg', src1: 'Ghost_Bracelet_Black_00004-scaled-1.jpg', src2: 'Ghost_Bracelet_Black_00003-scaled-1.jpg', src3: 'Ghost_Bracelet_Black_00002-scaled-1.jpg'},
        {src0: 'Ghost-silver-1.jpg', src1: 'Ghost_Bracelet_Silver_00004-scaled-1.jpg', src2: 'Ghost_Bracelet_Silver_00003-scaled-1.jpg', src3: 'Ghost_Bracelet_Silver_00002-scaled-1.jpg'},
        {src0: 'statement_tshirt_white_01-scaled.jpg', src1: 'statement_tshirt_white_02-scaled.jpg'},
        {src0: 'ghost-cap-white-1-scaled.jpg', src1: 'ghost-cap-white-4-scaled.jpg', src2: 'ghost-cap-white-2-scaled.jpg', src3: 'ghost-cap-white-3-scaled.jpg'},
        {src0: 'GHOST-TEE-FRONT.jpg', src1: 'GHOST-TEE-BACK.jpg'},
    ],
    [
        {src0: 'Bucket_product.jpg'},
        {src0: 'PITSTOP-PACKAGE.jpg', src1: 'PITSTOP-PACKAGE2.jpg'},
        {src0: 'GLOSS-PACKAGE.jpg', src1: 'GLOSS-PACKAGE2.jpg'},
        {src0: 'PRE-WASH-PACKAGE.jpg', src1: 'PRE-WASH-PACKAGE2.jpg'},
        {src0: 'FULL-PACKAGE.jpg', src1: 'FULL-PACKAGE2.jpg'},
        {src0: 'Tershine-Scrub-Pad.jpg'},
        {src0: 'Tershine-Wheel-Cleaner.jpg'},
        {src0: 'Tershine-Brushes.jpg'},
        {src0: 'WASH-PAD.jpg'},
        {src0: 'DRYING-TOWEL.jpg'},
        {src0: 'GLASS-CLOTH.jpg'},
        {src0: 'MICROFIBER-CLOTHS.jpg'},
        {src0: 'TIRE-BRUSH.jpg'},
        {src0: 'RESOLVE1.jpg', src1: 'RESOLVE3.jpg', src2: 'RESOLVE2.jpg'},
        {src0: 'REVOLVE1.jpg', src1: 'REVOLVE2.jpg', src2: 'REVOLVE3.jpg'},
        {src0: 'SUMMIT1.jpg', src1: 'SUMMIT2.jpg', src2: 'SUMMIT3.jpg'},
        {src0: 'INSIDER1.jpg', src1: 'INSIDER2.jpg', src2: 'INSIDER3.jpg'},
        {src0: 'EMBRACE1.jpg', src1: 'EMBRACE2.jpg', src2: 'EMBRACE3.jpg'},
        {src0: 'LUCID1-1.jpg', src1: 'LUCID2.jpg', src2: 'LUCID3.jpg'},
        {src0: 'PITSTOP1.jpg', src1: 'PITSTOP2.jpg', src2: 'PITSTOP3.jpg'},
        {src0: 'BRILLIANCE1.jpg', src1: 'BRILLIANCE2.jpg', src2: 'BRILLIANCE3.jpg'},
    ]
]

let ITEM_IMG1 = [
    [
        ['STATEMENT-BLACK-FRONT.jpg', 'STATEMENT-BLACK-BACK.jpg'],
        ['MUGG1.jpg', 'MUGG2.jpg'],
        ['30-TSHIRT-FRONT.jpg', '30-TSHIRT-BACK.jpg', '30-TSHIRT-DETAIL.jpg'],
        ['Magazine-2.0.jpg', 'KOE-MAG-NO7-BACK.jpg'],
        ['30-CAP-BLACK-FRONT.jpg', '30-CAP-BLACK-BACK.jpg', '30-CAP-BLACK-FRONT2.jpg', '30-CAP-BLACK-DETAIL.jpg'],
        ['30-CAP-CREAM-FRONT2.jpg', '30-CAP-CREAM-BACK.jpg', '30-CAP-CREAM-FRONT.jpg', '30-CAP-CREAM-DETAIL.jpg'],
        ['30-HOODIE-BLACK-FRONT.jpg', '30-HOODIE-BLACK-BACK.jpg', '30-HOODIE-BLACK-SIDE.jpg'],
        ['30-HOODIE-CREAM-FRONT.jpg', '30-HOODIE-CREAM-BACK.jpg', '30-HOODIE-CREAM-SIDE.jpg'],
        ['Jesko-White_1.jpg', 'Jesko-White_2.jpg', 'Jesko-White_3.jpg', 'Jesko-White_4.jpg', 'Jesko-White_5.jpg', 'Jesko-White_6.jpg', 'Jesko-White_7.jpg'],
        ['Jesko-Grey_1.jpg', 'Jesko-Grey_2.jpg', 'Jesko-Grey_3.jpg', 'Jesko-Grey_4.jpg', 'Jesko-Grey_5.jpg', 'Jesko-Grey_6.jpg', 'Jesko-Grey_7.jpg'],
        ['DIVIDED-TSHIRT-FRONT.jpg', 'DIVIDED-TSHIRT-BACK.jpg', 'DIVIDED-TSHIRT-DETAIL.jpg'],
        ['GRIDDED-TSHIRT-FRONT.jpg', 'GRIDDED-TSHIRT-BACK.jpg', 'GRIDDED-TSHIRT-DETAIL.jpg'],
        ['SPINE-TSHIRT-FRONT.jpg', 'SPINE-TSHIRT-BACK.jpg'],
        ['Scarf-1-scaled.jpg', 'Scarf-2-scaled.jpg'],
        ['Storm-Catcher-Front.jpg', 'Storm-Catcher-Back.jpg', 'Storm-Catcher-Detail-1-Large.jpeg', 'Storm-Catcher-Detail-2-Large.jpeg', 'Storm-Catcher-Detail-3-Large.jpeg'],
        ['Koenigsegg-Sneaker-Charm.jpg', 'sneaker_charm_03-scaled.jpg'],
        ['Terry-Front-1.jpg', 'Terry-Back-1.jpg', 'Terry-Detail.jpg']
    ],
    [
        ['022-Ghost-pendant_Black-Silver_00000-scaled-1.jpg', '022-Ghost-pendant_Black-Silver_00001-scaled-1.jpg', '022-Ghost-pendant_Black-Silver_00002-scaled-1.jpg', '022-Ghost-pendant_Black-Silver_00003-scaled-1.jpg'],
        ['black-cap-2-scaled.jpg', 'black-cap-3-scaled.jpg', 'black-cap-4-scaled.jpg', 'black-cap-5-scaled.jpg'],
        ['ghost-cap-black-1-scaled.jpg', 'ghost-cap-black-3-1-scaled.jpg', 'ghost-cap-black-2-scaled.jpg', 'ghost-cap-black-3-scaled.jpg'],
        ['Ghost-Sweatshirt-Front.jpg', 'Ghost-Sweatshirt-Back.jpg'],
        ['Ghost-black.jpg', 'Ghost_Bracelet_Black_00004-scaled-1.jpg', 'Ghost_Bracelet_Black_00003-scaled-1.jpg', 'Ghost_Bracelet_Black_00002-scaled-1.jpg'],
        ['Ghost-silver-1.jpg', 'Ghost_Bracelet_Silver_00004-scaled-1.jpg', 'Ghost_Bracelet_Silver_00003-scaled-1.jpg', 'Ghost_Bracelet_Silver_00002-scaled-1.jpg'],
        ['statement_tshirt_white_01-scaled.jpg', 'statement_tshirt_white_02-scaled.jpg'],
        ['ghost-cap-white-1-scaled.jpg', 'ghost-cap-white-4-scaled.jpg', 'ghost-cap-white-2-scaled.jpg', 'ghost-cap-white-3-scaled.jpg'],
        ['GHOST-TEE-FRONT.jpg', 'GHOST-TEE-BACK.jpg']
    ],
    [
        ['Bucket_product.jpg'],
        ['PITSTOP-PACKAGE.jpg', 'PITSTOP-PACKAGE2.jpg'],
        ['GLOSS-PACKAGE.jpg', 'GLOSS-PACKAGE2.jpg'],
        ['PRE-WASH-PACKAGE.jpg', 'PRE-WASH-PACKAGE2.jpg'],
        ['FULL-PACKAGE.jpg', 'FULL-PACKAGE2.jpg'],
        ['Tershine-Scrub-Pad.jpg'],
        ['Tershine-Wheel-Cleaner.jpg'],
        ['Tershine-Brushes.jpg'],
        ['WASH-PAD.jpg'],
        ['DRYING-TOWEL.jpg'],
        ['GLASS-CLOTH.jpg'],
        ['MICROFIBER-CLOTHS.jpg'],
        ['TIRE-BRUSH.jpg'],
        ['RESOLVE1.jpg', 'RESOLVE3.jpg', 'RESOLVE2.jpg'],
        ['REVOLVE1.jpg', 'REVOLVE2.jpg', 'REVOLVE3.jpg'],
        ['SUMMIT1.jpg', 'SUMMIT2.jpg', 'SUMMIT3.jpg'],
        ['INSIDER1.jpg', 'INSIDER2.jpg', 'INSIDER3.jpg'],
        ['EMBRACE1.jpg', 'EMBRACE2.jpg', 'EMBRACE3.jpg'],
        ['LUCID1-1.jpg', 'LUCID2.jpg', 'LUCID3.jpg'],
        ['PITSTOP1.jpg', 'PITSTOP2.jpg', 'PITSTOP3.jpg'],
        ['BRILLIANCE1.jpg', 'BRILLIANCE2.jpg', 'BRILLIANCE3.jpg']
    ]
]

let ITEM_DESC = [
    [
        {desc: `This iconic, black t-shirt features the famous Koenigsegg ghost on the back, with the Koenigsegg wordmark on the chest. Made from 100% organic cotton. The ghost is the icon that reveals a big part of Koenigsegg’s history – the Ghost Squadron. This name was inspired by the former occupants of our factory, which used to be home to a squad of fighter pilots. Now, the Ghost Squadron is what we call our fans and customers all over the world.`},
        {desc: `Koenigsegg Metal Mug – Featuring the Iconic Koenigsegg Ghost This Koenigsegg metal mug combines sleek design with durability, perfect for everyday use or as a collector's item. Crafted from high-quality metal, it’s built to withstand any adventure – whether you're at the track or in the office. The mug proudly features the iconic Koenigsegg Ghost, a subtle nod to the brand’s heritage and performance excellence. - Durable metal construction for everyday use - Features the Koenigsegg Ghost emblem - Perfect for 0,37 L of hot or cold drinks, both on the go or at home Practical and stylish, it’s a must-have for any Koenigsegg enthusiast.`},
        {desc: `Celebrate 30 Years of Koenigsegg with the 30 Years of Performance collection. This black tee perfectly blends style and heritage, featuring a bold "30" on the sleeve and a subtle Koenigsegg logo on the chest in purple. The back of the tee is adorned with "30 Years of Performance" text, paying tribute to three decades of innovation and performance. Crafted from premium materials, this t-shirt offers both style and comfort.`},
        {desc: `In this edition, we explore the 30-year history of Koenigsegg, the refined Jesko specification process, a deep dive into the technology behind the new Lightspeed Tourbillon Transmission and Hot-Vee V8 of the Gemera client specification, and a rediscovery of the CCGT.`},
        {desc: `Celebrate 30 Years of Koenigsegg with the 30 Years of Performance collection. This classic black baseball cap is adjustable and features an embroidered Koenigsegg 30 Logo on the front in white stitching. It’s the ideal accessory for when the sun is shining and is made from polyester.`},
        {desc: `Celebrate 30 Years of Koenigsegg with the 30 Years of Performance collection. This classic cream baseball cap is adjustable and features an embroidered Koenigsegg 30 Logo on the front in purple stitching. It’s the ideal accessory for when the sun is shining and is made from polyester.`},
        {desc: `Celebrate 30 Years of Koenigsegg with the 30 Years of Performance collection. This black hoodie is a standout piece, featuring a striking purple ghost logo on the back that embodies the Spirit of Performance. The front is subtly branded with a black embroidered shield, while the sleeve proudly displays the number "30" in bold purple, marking three decades of Innovation and Performance. Crafted from premium materials, this hoodie offers both style and comfort.`},
        {desc: `Celebrate 30 Years of Koenigsegg with the 30 Years of Performance collection. This cream hoodie is a standout piece, featuring a striking purple ghost logo on the back that embodies the Spirit of Performance. The front is subtly branded with a cream embroidered shield, while the sleeve proudly displays the number "30" in bold purple, marking three decades of Innovation and Performance. Crafted from premium materials, this hoodie offers both style and comfort.`},
        {desc: `Get ready for an exciting building experience with the LEGO® Technic Koenigsegg Jesko Absolut in White. This buildable model offers a rewarding challenge, allowing young builders to construct realistic details of one of the world’s fastest road-legal megacars. Packed with features for car enthusiasts, this model includes a working V8 engine, differential, and steering mechanism that can be tested using a removable knob integrated into the car's front. The standout dihedral synchro-helix door system allows the doors to swing 90 degrees and move outward, just like the real hypercar. Perfect for kids who love vehicles, this interactive model makes an ideal gift. Builders can enhance their experience with the LEGO Builder app, where they can zoom in, rotate models in 3D, and track their progress as they assemble this impressive megacar.`},
        {desc: `Get ready for an exciting building experience with the LEGO® Technic Koenigsegg Jesko Absolut in Grey. This buildable model offers a rewarding challenge, allowing young builders to construct realistic details of one of the world’s fastest road-legal megacars. Packed with features for car enthusiasts, this model includes a working V8 engine, differential, and steering mechanism that can be tested using a removable knob integrated into the car's front. The standout dihedral synchro-helix door system allows the doors to swing 90 degrees and move outward, just like the real hypercar. Perfect for kids who love vehicles, this interactive model makes an ideal gift. Builders can enhance their experience with the LEGO Builder app, where they can zoom in, rotate models in 3D, and track their progress as they assemble this impressive megacar.`},
        {desc: `Celebrate 30 Years of Koenigsegg with the 30 Years of Performance collection. The Divide - Tee is a cream-colored t-shirt that embodies Koenigsegg’s bold design and engineering prowess. The front features a subtle purple ghost logo on the chest, symbolizing the spirit of performance, while the side showcases a large outlined "30" and the Koenigsegg wordmark. The back is adorned with a small Koenigsegg shield at the top, adding a refined touch. Crafted from premium materials, this tee seamlessly blends style and comfort.`},
        {desc: `Celebrate 30 Years of Koenigsegg with the 30 Years of Performance collection. The Gridded - Tee is a stylish cream-colored t-shirt that perfectly embodies Koenigsegg's dedication to innovation and design. It features a unique grid of "30" logos on the chest, with one highlighted in purple. The back showcases the iconic Koenigsegg wordmark in bold black lettering. Crafted from premium materials, this t-shirt offers both style and comfort.`},
        {desc: `Celebrate 30 Years of Koenigsegg with the 30 Years of Performance collection. The Spine - Tee is a sleek, black t-shirt that merges style with Koenigsegg's legendary heritage. It features a subtle Koenigsegg 30 logo on the chest in purple and white. The back of the shirt is adorned with vertical "30 Years of Performance" text running down the spine. Crafted from premium materials, this t-shirt offers both style and comfort.`},
        {desc: `Elevate your accessory game with the sleek and sophisticated Koenigsegg Scarf. Woven from 100% wool, it provides unparalleled warmth and a soft touch against the skin. The reversible design features a striking contrast between the dark and light shades, showcasing the Koenigsegg wordmark in a subtle yet impactful way.`},
        {desc: `Experience versatility in all seasons with the lightweight, windproof Koenigsegg Storm Catcher. Crafted from 100% recycled polyester, this eco-friendly jacket comes in Hangar Teal and showcases an abundance of Koenigsegg branding. The iconic Koenigsegg shield embellishes both the chest and the zip pull, while the Koenigsegg wordmark is printed on the back. Additionally, the shoulders feature our Ghost and a Swedish flag motif reminiscent of the Koenigsegg Jesko badge.`},
        {desc: `Step up your sneaker game with the exclusive Ghost Sneaker Charm. Crafted from 925 sterling silver, this bespoke accessory is the perfect blend of automotive prestige and streetwear style, allowing enthusiasts and fashion-forward individuals to add a unique touch to their footwear.`},
        {desc: `The Terry is a bright yellow polo shirt that is ideal for the warmer months. It’s made from a terry material, and features a yellow, embroidered Koenigsegg shield on the chest. There’s also a yellow text logo on the back of the neck. 100% eco cotton is used, and it’s the ideal casual polo shirt for any wardrobe`},
    ],
    [
        {desc: `This stunning necklace is designed to look great on anyone and features an oxidized silver chain paired with an elegant, silver ghost pendant. The ghost measures 25mm from head to tail, and the chain itself is 620mm. It arrives in an exclusive Koenigsegg box, ideal as a gift or as a special present to yourself.<br><br>Oxidizing is a treatment of the precious metal surface making the silver appear greyish-black. Oxidized silver jewelry used daily becomes polished in exposed areas – grooves and dents are better protected – and will in time wear off entirely on smooth surfaces. Oxidized silver jewelry must not be exposed to jewelry detergents, which will only destroy the oxidized surface. An oxidized silver surface must only be cleaned with tepid water.`},
        {desc: `This classic black baseball cap is adjustable and features an embroidered Koenigsegg shield on the front in white stitching. It’s the ideal accessory for when the sun is shining and is made from polyester.`},
        {desc: `This classic black baseball cap is adjustable and features an embroidered Koenigsegg Ghost on the front in white stitching. It’s the ideal accessory for when the sun is shining and is made from polyester.`},
        {desc: `This black sweatshirt features the Koenigsegg shield embroidered on the front, with the famous Koenigsegg ghost printed large on the back. There’s also a smaller ghost on the right cuff. It’s made from 80% organic cotton/20% recycled polyester. The ghost is the icon that reveals a big part of Koenigsegg’s history – the Ghost Squadron. This name inspired by the former occupants of our factory, which used to be home to a squad of fighter pilots. Now, the Ghost Squadron is what we call our fans and customers all over the world.`},
        {desc: `This exclusive bracelet is made from grey, natural Italian silk, and features an iconic Koenigsegg ghost charm that’s set in oxidized silver, which develops a unique patina after multiple wears. It’s a clean and modern accessory that’s ideal for any look. The ghost size from head to tail is 18mm, and the piece arrives in an exclusive Koenigsegg box.<br><br>Oxidizing is a treatment of the precious metal surface making the silver appear greyish-black. Oxidized silver jewelry used daily becomes polished in exposed areas – grooves and dents are better protected – and will in time wear off entirely on smooth surfaces. Oxidized silver jewelry must not be exposed to jewelry detergents, which will only destroy the oxidized surface. An oxidized silver surface must only be cleaned with tepid water.`},
        {desc: `This exclusive bracelet is made from black, natural Italian silk, and features an iconic Koenigsegg ghost charm that’s set in silver. It’s a clean, simple, and elegant accessory that goes with any outfit. The ghost size from head to tail is 18mm, and the piece arrives in an exclusive Koenigsegg box.<br><br>Gold and silver are mouldable precious materials, soft enough to be processed and shaped. A patina of age and use on handcrafted surfaces is part of the natural beauty of a piece of gold or silver jewelry.`},
        {desc: `This iconic, white t-shirt now with a new more exclusive fit and material, features the famous Koenigsegg ghost on the back, with the Koenigsegg wordmark on the chest. Made from 93% organic cotton, it is designed to stretch slightly to offer a comfortable yet stylish fit. The ghost is the icon that reveals a big part of Koenigsegg’s history – the Ghost Squadron. This name was inspired by the former occupants of our factory, which used to be home to a squad of fighter pilots. Now, the Ghost Squadron is what we call our fans and customers all over the world.`},
        {desc: `This classic white baseball cap is adjustable and features an embroidered Koenigsegg Ghost on the front in black stitching. It’s the ideal accessory for when the sun is shining and is made from polyester.`},
        {desc: `This iconic, white t-shirt features the famous Koenigsegg ghost on the front, with the Koenigsegg logo on the back of the neck. It’s made from 100% organic cotton and is designed to stretch slightly to offer a comfortable yet stylish fit. The ghost is the icon that reveals a big part of Koenigsegg’s history – the Ghost Squadron. This name was inspired by the former occupants of our factory, which used to be home to a squad of fighter pilots. Now, the Ghost Squadron is what we call our fans and customers all over the world.`},
    ],
    [
        {desc: `A really neat and robust wash bucket that holds almost 20 liters. Equipped with a grit guard that traps dirt and particles at the bottom, minimizing the risk of scratches while washing. Comes with a waterproof lid, as well as a printed logo and liter markings on the side. A must-have wash bucket in the wash bay or on the driveway.`},
        {desc: `Introducing the Pitstop Package – everything you need for a quick and efficient pitstop wash, all at a bundled price. This package includes Pitstop Quick Wash, Lucid Glass Cleaner, Insider Interior Cleaner, and premium microfiber cloths, providing a complete and hassle-free cleaning experience.  `},
        {desc: `Introducing the Gloss Package – everything you need to make your vehicle shine  - all at a bundle price. From gloss-boosting products like Embrace, Pitstop, and Brilliance to premium accessories such as a Microfiber Drying Cloth, Microfiber Wash Pad, and Microfiber Cloths, this package has it all.`},
        {desc: `Introducing the Pre-Wash Package – everything you need for your pre-wash routine – all at a bundled price. Enjoy our Revolve, Resolve, and Summit products to achieve a fresh and clean surface before shampooing your car. It works perfectly for simpler washes if you just want to rinse off your vehicle.  `},
        {desc: `Get the entire Ghost Gleam range in one exclusive package - all at a bundle price. From powerful pre-wash essentials like Revolve, Resolve, and Summit to gloss-boosting favorites such as Embrace, Pitstop, and Brilliance – this bundle has it all. It also includes premium accessories.`},
        {desc: `Incredibly effective and safe cleaning sponge with short nylon fibers that clean deeply without damaging surfaces. Ideal for use with Ghost Gleam Insider - Interior Cleaner, it’s perfect for cleaning leather and plastic inside your vehicle.`},
        {desc: `This high-quality microfiber brush features a soft core for reaching tighter areas, a sturdy handle, and the Tershine logo on the foam grip. It’s chemical-resistant and can handle tough cleaning tasks. Safe for all types of wheels, making it an essential tool in any car care kit. If you can’t reach between the brake caliper and the wheel, move the car forward by 50 cm after cleaning the other areas.<br><br>For vehicles with large brake calipers (tight wheel clearance), a smaller brush or detailing brush may be more effective.`},
        {desc: `Chemical-resistant and ultra-soft brushes, perfect for both your vehicle's interior and exterior. Pairs perfectly with Insider, Summit, and Embrace. These incredibly soft brushes feel almost like makeup brushes, making them exceptionally gentle. They’re ideal for delicate areas on the exterior, such as emblems, lights, and trims, while the smaller brush is excellent for detailed interior work. Ultimately, you decide how and where to use them. And of course, they’re chemical-resistant!`},
        {desc: `Wash Pad of excellent quality! Minimizes the risk of scratches and absorbs a large amount of shampoo and water for a quick, scratch-free wash.  `},
        {desc: `This is a large microfiber drying cloth with outstanding absorption capacity, designed to be gentle on all types of surfaces.  `},
        {desc: `Microfiber cloth specially designed for glass cleaning, perfect for pairing with Ghost Gleam Lucid - Glass Cleaner.`},
        {desc: `These excellent microfiber cloths are designed for a wide range of applications. Extremely durable, they retain their quality even after multiple washes. Ideal for pairing with Ghost Gleam Insider, Brilliance, or Pitstop.`},
        {desc: `Sturdy tire brush with an ergonomic handle for effortless cleaning of your tire sidewalls. Pairs perfectly with Ghost Gleam Revolve & Resolve.`},
        {desc: `<b>GHOST GLEAM RESOLVE DEGREASER</b> is a highly effective alkaline solution suitable to remove dirt and grease from the entire exterior of your vehicle, including wheels. Whether your vehicle is made of Koenigsegg Naked Carbon fiber or is painted, it works just as well. RESOLVE works by lifting organic dirt off the surface that you are cleaning and has a delightful floral scent. It is ready to use, but you can add up to 50% tap water to Resolve if you want it to last longer for a lighter wash. It also works excellently to remove tougher dirt from floor mats. If you desire even more lift effect, also apply KOENIGSEGG SUMMIT SNOW FOAM on top and rinse off together. RESOLVE is biodegradable and has a low environmental impact. Always remember to recycle the plastic bottle in a responsible way when empty.`},
        {desc: `<b>GHOST GLEAM REVOLVE WHEEL CLEANER</b> is specifically designed to perform exceptionally well on vehicles with ceramic brakes and has excellent cleaning capabilities for tire sidewalls. REVOLVE works very well on all types of wheels, particularly on Koenigsegg Naked Carbon Aircore Wheels. Uniquely, REVOLVE is biodegradable and has a wonderful scent of sun-kissed cherries. Always remember to recycle the plastic bottle in a responsible way when empty.`},
        {desc: `<b>GHOST GLEAM SUMMIT SNOW FOAM</b> is a pre-wash solution designed to lift off all forms of organic dirt and grease. It produces a wonderful thick foam and has excellent cleaning capabilities. For maximum lift effect, start the process by first applying KOENIGSEGG RESOLVE DEGREASER and then layer SUMMIT on top and rinse off together. SUMMIT is biodegradable, is satisfying to apply, and has a dreamy milk and honey scent. Always remember to recycle the plastic bottle in a responsible way when empty.`},
        {desc: `<b>GHOST GLEAM INSIDER INTERIOR CLEANER</b> is a highly effective, biodegradable, plant-based all-purpose cleaner with a lavender scent, designed for use inside vehicles but equally effective virtually anywhere. INSIDER is completely safe to use on materials such as carbon fiber, leather, textiles, plastic, rubber, and more. INSIDER also contains an amazing odor-eliminating function that blocks bad smells while keeping the fresh scent going. Always remember to recycle the plastic bottle in a responsible way when empty.`},
        {desc: `<b>GHOST GLEAM EMBRACE SHAMPOO</b> represents the next generation of biodegradable, high-performing car shampoos that provide a deep clean and leave an amazing finish on all outer automotive surfaces, including exotic finishes such as Koenigsegg Naked Carbon. EMBRACE has a scent of sweet mango and with a dilution ratio potential of 1:1000, you can expect to get up to at least 50 car washes out of one bottle of EMBRACE. That is how powerful it is. Always remember to recycle the plastic bottle in a responsible way when empty.`},
        {desc: `<b>GHOST GLEAM LUCID GLASS CLEANER</b> can be used on all glass surfaces, leaving a smear-free, dry, and shiny finish. It is suitable for both interior and exterior use. This highly effective glass cleaner prevents fogging on the inside of your windows and allows for good visibility. Lucid is biodegradable and has a sun-kissed plum scent. Always remember to recycle the plastic bottle in a responsible way when empty.`},
        {desc: `<b>GHOST GLEAM PITSTOP QUICK WASH</b> is specifically designed for boosting shine and removing light dirt and dust when a washing bay is not available. PITSTOP effectively creates shine and sheen on any exterior surface. It can be used for removing bird droppings, bugs, mud, and other organic dirt. PITSTOP is also ideal for applications where you want to avoid water being pushed into components such as engine bays. It also works perfectly as a drying aid product. PITSTOP is biodegradable and has a wonderful peachy scent. Always remember to recycle the plastic bottle in a responsible way when empty.`},
        {desc: `<b>GHOST GLEAM BRILLIANCE CERAMIC SPRAY WAX</b> is an extremely easy-to-use coating and has a wonderful, sweet coconut scent. It leaves a protective layer on painted surfaces, Koenigsegg Naked Carbon Fiber, and even on plastic surfaces. BRILLIANCE gives your vehicle a magical shine and wonderful water repellency. BRILLIANCE is biodegradable. It cures almost immediately upon application and is antistatic. It also has scratch-filling properties that hide minor blemishes. It also provides UV protection and can be applied in multiple layers if desired. Always remember to recycle the plastic bottle in a responsible way when empty.`},
    ]
]