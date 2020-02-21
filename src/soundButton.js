class SoundButton extends sButton {

    /**
    * @description A Button that play sound when pressed on.
    * @param {String} name of the Button
    * @param {String} path path to the file that is loaded
    */
    constructor(path) {
        super();
        this.sound = loadSound(path);
        this.sound.setVolume(0.6);
    }

    display() {
        // console.log("()")
        fill(this.sound.isPlaying() ? this.highlight : this.col);
        rect(this.x, this.y, this.w, this.h);
        fill(0);
        text(this.name, this.x + this.w / 2, this.y + this.h / 2);
    }

    setName(name) {
        this.name = "";
        let tmp = name.split("_");

        for (let word in tmp) {
            this.name += tmp[word];
            this.name += " ";
        }
    }

    update() {
        super.update();
    }

    action() {
        this.trigger();
    }

    trigger() {
        if (!this.sound.isPlaying())
            this.sound.play();
    }
    /**
    * @param {Number} x x coordinate
    * @param {Number} y y coordinate
    */
    isIn(x, y) {
        return !(x < this.x || x > this.x + this.w || y < this.y || y > this.y + this.h);
    }
}