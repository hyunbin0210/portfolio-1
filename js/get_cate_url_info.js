function get_cate_url_info(key) {
    let url = location.href;
    url = url.split("?");
    if (url.length > 1) {
        url = url[1].split("&");
        let tmp_url = url[0].split("=");
        if (tmp_url[0] == key) {
            return tmp_url[1];
        }
    }
}