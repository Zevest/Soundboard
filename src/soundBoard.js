const fileName = [
    "work_it_", "make_it_", "do_it_", "makes_us_", "harder_", "better_", "faster_", "stronger_",
    "more_than_", "hour_", "our_", "never_", "ever_", "after_", "work_is_", "over_"
]
const soundfolder = "ressources/audio/";
class SoundBoard {
    constructor() {
        this.soundButtons = [];
        this.pagesButtons = [];
        this.playButton = new SoundButton(soundfolder + "instru.wav");
        this.page = 0;
        this.mode = 0;
        this.pos = createVector();
        this.width = 0;
        this.height = 0;
        let tmp = [];
        for (let i = 0; i < fileName.length; ++i) {
            tmp.push(new SoundButton(this.getFile(i, 1)));
        }
        this.soundButtons.push(tmp);
        tmp = [];
        for (let i = 0; i < fileName.length; ++i) {
            tmp.push(new SoundButton(this.getFile(i, i > 7 ? 2 : 1)));
        }
        this.soundButtons.push(tmp);
        tmp = [];
        for (let i = 0; i < fileName.length; ++i) {
            tmp.push(new SoundButton(this.getFile(i, 3)));
        }
        this.soundButtons.push(tmp);
        tmp = [];
        for (let i = 0; i < fileName.length; ++i) {
            tmp.push(new SoundButton(this.getFile(i, 4)));
        }
        this.soundButtons.push(tmp);
        tmp = [];
        for (let i = 0; i < fileName.length; ++i) {
            tmp.push(new SoundButton(this.getFile(i, i > 7 ? 5 : 4)));
        }
        this.soundButtons.push(tmp);
        for (let j = 0; j < this.soundButtons.length; ++j) {
            this.pagesButtons.push(new sButton(undefined, undefined, 100, 100, "" + (j + 1)));
            this.pagesButtons[j].action = () => this.page = j;
        }
    }

    init(x, y, w, h) {
        this.pos.set(x, y);
        this.width = w;
        this.height = h;
        for (let j = 0; j < this.soundButtons.length; ++j) {
            this.pagesButtons[j].setPos(this.pos.x + (this.width / this.soundButtons.length) * j, this.pos.y - 100)
            for (let i = 0; i < this.soundButtons[j].length; ++i) {
                this.soundButtons[j][i].setPos(this.pos.x + this.width / 4.0 * (i % 4), this.pos.y + this.height / 4 * parseInt(i / 4));
                this.soundButtons[j][i].setSize(this.width / 4.0, this.height / 4.0);
                this.soundButtons[j][i].setName(fileName[i]);
            }
        }
        this.playButton.setPos(width - 100, height - 100);
        this.playButton.setSize(100, 100);
        this.playButton.action = function () {
            if (this.sound.isPlaying())
                this.sound.stop();
            else
                this.sound.play();
        }
    }

    display() {

        for (let j = 0; j < this.pagesButtons.length; ++j) {
            if (j == this.page)
                this.pagesButtons[j].isPressed = true;
            else
                this.pagesButtons[j].isPressed = false;
            this.pagesButtons[j].display();
        }
        for (let i = 0; i < this.soundButtons[this.page % this.soundButtons.length].length; ++i) {
            this.soundButtons[this.page % this.soundButtons.length][i].display();
        }
        this.playButton.display();
    }

    update() {
        this.playButton.update();
        for (let j = 0; j < this.pagesButtons.length; ++j)
            this.pagesButtons[j].update();
        for (let i = 0; i < this.soundButtons[this.page % this.soundButtons.length].length; ++i) {
            this.soundButtons[this.page % this.soundButtons.length][i].update();
        }
    }

    trigger(i) {
        this.soundButtons[this.page % this.soundButtons.length][i].trigger();
    }

    getFile(i, j) {
        let path = soundfolder + fileName[i] + j + ".wav";
        //console.log("Loading : " + path);
        return path;
    }
}