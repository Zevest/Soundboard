class sButton {

    /**
    * @description A Button that play sound when pressed on.
    * @param {String} path path to the file that is loaded
    */

    constructor(xPos, yPos, wi, he, name) {
        this.col = color(200);
        this.highlight = color(255);
        this.w = wi != undefined ? wi : 0;
        this.h = he != undefined ? he : 0;
        this.x = xPos != undefined ? xPos : 0;
        this.y = yPos != undefined ? yPos : 0;
        this.name = name != undefined ? name : "";
    }

    display() {
        // console.log("()")
        fill(this.isPressed ? this.highlight : this.col);
        rect(this.x, this.y, this.w, this.h);
        fill(0);
        text(this.name, this.x + this.w / 2, this.y + this.h / 2);
    }

    /**
    * @param { Number } x x coordinate
    * @param { Number } y y coordinate
    */
    setPos(x, y) {
        this.x = x;
        this.y = y;
    }

    setName(name) {
        this.name = "";
        let tmp = name.split("_");
        for (let word in tmp) {
            this.name += tmp[word];
            this.name += " ";
        }
    }

    setSize(w, h) {
        this.w = w;
        this.h = h;
    }

    action() {

    }

    unPressed() {
        this.isPressed = false;
    }

    update() {
        if (mousePressed && this.isIn(mouseX, mouseY)) {
            this.action();
            this.isPressed = true;
        }
    }
    /**
    * @param {Number} x x coordinate
    * @param {Number} y y coordinate
    */
    isIn(x, y) {
        return !(x < this.x || x > this.x + this.w || y < this.y || y > this.y + this.h);
    }
}