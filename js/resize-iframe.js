function autoResize(ele) {
    var newheight;
    var newwidth;

    if (document.getElementById) {
        newheight = ele.contentWindow.document.body.scrollHeight;
        newwidth = ele.contentWindow.document.body.scrollWidth;
    }

    ele.height = (newheight) + "px";
    ele.width = (newwidth) + "px";
}