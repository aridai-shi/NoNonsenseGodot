function autoResize(ele) {
    var newheight;
    var newwidth;
    newheight = ele.contentWindow.document.body.scrollHeight;
    newwidth = ele.contentWindow.document.body.scrollWidth;
    ele.height = (newheight) + "px";
    ele.width = (newwidth) + "px";
}

function resizeToArticle(ele, doc) {
    var newheight;
    const min = 900;
    newheight = Math.max(min, doc.body.scrollHeight);
    ele.style.height = (newheight / min) * 100 + "%"
}