const keyLoc = [
    [
        'a', 'z', 'e', 'r',

        'u', 'i', 'o', 'p',

        'q', 's', 'd', 'f',

        'j', 'k', 'l', 'm',

        '&', 'é', '"', '\'', '(', '-',
    ],
    [
        'q', 'w', 'e', 'r',

        'u', 'i', 'o', 'p',

        'a', 's', 'd', 'f',

        'j', 'k', 'l', ';',

        '1', '2', '3', '4', '5', '6',
    ]
]
let soundboard;


function preload() {
    soundFormats('wav');
    //button = new SoundButton(width / 2, height / 2, 200, 200, getFile(0, 1));*
    soundboard = new SoundBoard();
}

function setup() {
    createCanvas(600, 600);
    soundboard.init(0, 100, 500, 500);
    textSize(20);
}

function draw() {
    textAlign(CENTER);
    background(0);
    soundboard.display();
    //noLoop();
}

function mousePressed() {
    soundboard.update();
}

function keyPressed() {

    switch (key) {
        case ' ':
            soundboard.playButton.action();
            break;
        case keyLoc[soundboard.mode][0]:
            //button[0].trigger();
            soundboard.trigger(0);
            break;
        case keyLoc[soundboard.mode][1]:
            //button[1].trigger();
            soundboard.trigger(1);
            break;
        case keyLoc[soundboard.mode][2]:
            //button[2].trigger();
            soundboard.trigger(2);
            break;
        case keyLoc[soundboard.mode][3]:
            //button[3].trigger();
            soundboard.trigger(3);
            break;
        case keyLoc[soundboard.mode][4]:
            //button[8].trigger();
            soundboard.trigger(4);
            break;
        case keyLoc[soundboard.mode][5]:
            //button[9].trigger();
            soundboard.trigger(5);
            break;
        case keyLoc[soundboard.mode][6]:
            //button[10].trigger();
            soundboard.trigger(6);
            break;
        case keyLoc[soundboard.mode][7]:
            //button[11].trigger();
            soundboard.trigger(7);
            break;
        case keyLoc[soundboard.mode][8]:
            //button[4].trigger();
            soundboard.trigger(8);
            break;
        case keyLoc[soundboard.mode][9]:
            //button[5].trigger();
            soundboard.trigger(9);
            break;
        case keyLoc[soundboard.mode][10]:
            //button[6].trigger();
            soundboard.trigger(10);
            break;
        case keyLoc[soundboard.mode][11]:
            //button[7].trigger();
            soundboard.trigger(11);
            break;
        case keyLoc[soundboard.mode][12]:
            //button[12].trigger()
            soundboard.trigger(12);
            break;
        case keyLoc[soundboard.mode][13]:
            //button[13].trigger();
            soundboard.trigger(13);
            break;
        case keyLoc[soundboard.mode][14]:
            //button[14].trigger();
            soundboard.trigger(14);
            break;
        case keyLoc[soundboard.mode][15]:
            //button[15].trigger();
            soundboard.trigger(15);
            break;
        case keyLoc[soundboard.mode][16]:
            soundboard.page = 0;
            break;
        case keyLoc[soundboard.mode][17]:
            soundboard.page = 1;
            break;
        case keyLoc[soundboard.mode][18]:
            soundboard.page = 2;
            break;
        case keyLoc[soundboard.mode][19]:
            soundboard.page = 3;
            break;
        case keyLoc[soundboard.mode][20]:
            soundboard.page = 4;
            break;
        case keyLoc[soundboard.mode][21]:
            soundboard.page = 5;
            break;

    }
}