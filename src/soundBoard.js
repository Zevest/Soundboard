const fileName = [
    "work_it_", "make_it_", "do_it_", "makes_us_", "harder_", "better_", "faster_", "stronger_",
    "more_than_", "hour_", "our_", "never_", "ever_", "after_", "work_is_", "over_"
]
const soundfolder = "ressources/audio/";
const mapInfoFolder = "ressources/map/";
class SoundBoard {
    constructor(mapName) {
        this.soundButtons = [];
        this.pagesButtons = [];
        this.playButton = null;
        this.mapInfo = null;
        this.page = 0;
        this.mode = 1;
        this.pos = createVector();
        this.width = 0;
        this.height = 0;
        this.loadMap(mapName);
    }

    loadMap(mapName) {
        console.log(mapInfoFolder + mapName);
        let path = mapInfoFolder + mapName + ".json";
        loadJSON(path, e => this.buildMap(mapName, e));
    }

    buildMap(filename, data) {
        for (let j = 0; j < data.pages.length; ++j) {
            let tmp = [];
            for (let i = 0; i < data.pages[j].file.length; ++i) {
                tmp.push(new SoundButton(this.getFile(filename, data.pages[j].file[i])));
            }
            this.soundButtons.push(tmp);
            this.pagesButtons.push(new sButton(undefined, undefined, 100, 100, "" + (j + 1)));
            this.pagesButtons[j].action = () => this.page = j;
        }
        this.mapInfo = data.info;
        this.playButton = new SoundButton(this.getFile(filename, data.info.instrumental));
    }

    init(x, y, w, h) {
        this.pos.set(x, y);
        this.width = w;
        this.height = h;
        for (let j = 0; j < this.soundButtons.length; ++j) {
            this.pagesButtons[j].setPos((width / this.soundButtons.length) * j, 0)
            for (let i = 0; i < this.soundButtons[j].length; ++i) {
                this.soundButtons[j][i].setPos(this.pos.x + this.width / 4.0 * (i % 4), this.pos.y + this.height / 4 * parseInt(i / 4));
                this.soundButtons[j][i].setSize(this.width / 4.0, this.height / 4.0);
                this.soundButtons[j][i].setName(fileName[i]);
            }
        }
        this.playButton.setPos(width - 100, height - 100);
        this.playButton.setSize(100, 100);
        this.playButton.setName("Play");
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

    getFile(mapName, filename) {
        let path = soundfolder + mapName + "/" + filename + ".wav";
        return path;
    }
}