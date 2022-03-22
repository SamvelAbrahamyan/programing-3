let LivingCreature = require('./LivingCreature')

module.exports =  class Personage2  extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.energy = 5;
        this.directions = [];
    }
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
    }
    eat() {

        var cord = random(this.getDirections(1).concat(this.getDirections(3).concat(this.getDirections(4))));
        if (cord) {
            // console.log(cord);
            
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;
            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }
            for (var i in predatorArr) {
                if (x == predatorArr[i].x && y == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                }
            }
            for (var i in personagre1Arr) {
                if (x == personagre1Arr[i].x && y == personagre1Arr[i].y) {
                    personagre1Arr.splice(i, 1);
                }
            }
            if (this.multiply == 60) {
                this.mul()
                this.multiply = 0;
            }
        } else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }
    mul() {
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            var norPersonage2 = new Personage2(x, y);
            personagre2Arr.push(norPersonage2);
            matrix[y][x] = 5;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in personagre2Arr) {
            if (this.x == personagre2Arr[i].x && this.y == personagre2Arr[i].y) {
                personagre2Arr.splice(i, 1);
            }
        }
    }
}