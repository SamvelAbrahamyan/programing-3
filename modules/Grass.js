let LivingCreature = require('./LivingCreature')

module.exports = class Grass extends LivingCreature {
    mul() {
        this.multiply++;
        if (this.multiply == 1) {

            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];


                var norXot = new Grass(x, y);
                xotArr.push(norXot);


                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }
}