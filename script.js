let m = new Matrix(25, 25);

var matrix = m.heightArray;

function setup() {

    noStroke();
    frameRate(4);
    createCanvas(m.width * side, m.height * side); 
    background('#acacac');
    frameRate(4)
    m.setup(matrix);

}


function draw() {
   
    background('#acacac');
    m.draw(matrix);

}

