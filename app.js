var win;
function openwin() {
    win = window.open("", "", "width=100, height=50");

}
function closewin() {
    win.close()
}

function rightop() {
    win.moveTo(500, 0);
    win.focus()

}
function leftop() {
    win.moveTo(-500, 0);
    win.focus()

}
function topp() {
    win.moveTo(0, -100);
    win.focus()

}
function dow() {
    win.moveTo(0, 400);
    win.focus()

}