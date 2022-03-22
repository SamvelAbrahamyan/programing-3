var side = 25;
var types = [0, 1];
var types2 = [2, 3, 4, 5];

var xotArr = []; //խոտերի զանգված
var eatArr = []; //խոտակերների զանգված
var predatorArr = [];
var personagre1Arr = [];
var personagre2Arr = [];

 class Matrix {
    constructor(N, M) {
        this.width = M;
        this.height = N;
        this.matrix = [];
    }

    get widthArray() {
        let array = [];
        for (let i = 0; i < this.width; i++) {
            array.push(
                this.getRandomType(i)
            );
        }
        return this.shuffle(array);
    }

    get heightArray() {
        for (let i = 0; i < this.height; i++) {
            this.matrix.push(this.widthArray)
        }
        return this.matrix;
    }

    getRandomType(index) {
        return index > (this.width - 5) ? types2[Math.floor(Math.random() * types2.length)] :
            types[Math.floor(Math.random() * types.length)]
    }

    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    setup(matrix) {
        //Կրկնակի ցիկլը լցնում է օբյեկտներով խոտերի և խոտակերների զանգվածները
        //հիմնվելով մատրիցի վրա
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                if (matrix[y][x] === 2) {
                    let eatgrass = new Eatgrass(x, y);
                    eatArr.push(eatgrass);
                } else if (matrix[y][x] === 1) {
                    let grass = new Grass(x, y);
                    xotArr.push(grass);
                } else if (matrix[y][x] === 5) {
                    let personage2 = new Personage2(x, y);
                    personagre2Arr.push(personage2);
                } else if (matrix[y][x] === 4) {
                    let personage1 = new Personage1(x, y);
                    personagre1Arr.push(personage1);
                } else if (matrix[y][x] === 3) {
                    let predator = new Predator(x, y);
                    predatorArr.push(predator);
                }
            }
        }
    }

    draw(matrix) {
        //Գծում է աշխարհը, հիմվելով matrix-ի վրա
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) { // xot
                    fill("green");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) { // xotaker
                    fill("orange");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) { // datarkutyun
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) { //predator
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) { // personage 1
                    fill('blue');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) { // personage 2
                    fill('black');
                    rect(j * side, i * side, side, side);
                }
            }
        }


        //յուրաքանչյուր խոտ փորձում է բազմանալ
        for (var i in xotArr) {
            xotArr[i].mul();
        }

        //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
        for (var i in eatArr) {
            eatArr[i].eat();
        }
        //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
        for (var i in predatorArr) {
            predatorArr[i].eat();
        }//յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
        //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
        for (var i in personagre1Arr) {
            personagre1Arr[i].eat();
        }
        for (var i in personagre2Arr) {
            personagre2Arr[i].eat();

        }
    }
}