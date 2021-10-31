function autoResize(ele) {
    var newheight;
    var newwidth;
    newheight = ele.contentWindow.document.body.scrollHeight;
    newwidth = ele.contentWindow.document.body.scrollWidth;

    if (document.getElementsByClassName("banner")) {
        ele.height = (newheight) + "px";
    } else {
        ele.height = "100%";
    }
    ele.width = (newwidth) + "px";
}