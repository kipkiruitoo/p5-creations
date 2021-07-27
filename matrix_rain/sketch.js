// instantiate an empty array to hold our symbols
var symbols = [];

// create an array of x vvalues to hold our widths
var widtharr = _.range(0, window.innerWidth, 2);

// set our symbol size
var symbolSize = 30;


function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(0);

    // create a symbol objects from easch of our width points
    widtharr.forEach(x => {
        let symbol = new JSymbol(
        x,
        0,
        random(2, 10));

        symbol.setToRandomSymbol();
        textSize(symbolSize);
        symbols.push(
                symbol
        )
});
}


function draw(){
    background(0);

    // render each of our symbols
    symbols.forEach(symbol => {
        symbol.render();
    });
    
    
}
// create a symbol class
function JSymbol(x, y, speed){
        this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;

    this.setToRandomSymbol = function () {
        // get a random japanese / katakana unicode character
        this.value = String.fromCharCode(
            0x30A0 +  round(random(0, 96))
        );
    }

    this.render = function(){
        fill(0, 255, 70);
        text(this.value, this.x, this.y);
        this.rain()
    }

    this.rain = function(){
        if (this.y >= height) {
            this.y = 0;
        }
        this.y += this.speed;
    }
}
