var index = 1;
var fist = document.getElementById('anh-chinh').src;
function tangSL(){
    index++;
    document.getElementById('sl').innerHTML = index;
}
function giamSL() {
    index--;
    if (index < 1) index = 1;
    document.getElementById('sl').innerHTML = index;
}
function doiAnh(anh) {
    var srcphu = anh.src;
    document.getElementById('anh-chinh').src = srcphu;
}
function undo() {
    document.getElementById('anh-chinh').src = fist;
}