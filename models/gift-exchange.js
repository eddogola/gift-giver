const BadRequestError = require("../utils/errors");

class GiftExchange {
    constructor() {

    }

    static pairs(names) {
        // if number of names is odd
        // throw an error
        if (names.length % 2) {
            throw new BadRequestError("the number of given names can't be odd");
        } 
        // otherwise, randomly pair names together
        else {
            let pairs = [];
            // make two copies and shuffle them
            let arr1 = names.slice(), arr2 = names.slice(); // copy names array twice
            // shuffle arrays
            arr1.sort(function() { return 0.5 - Math.random();}); 
            arr2.sort(function() { return 0.5 - Math.random();});

            // pair items from the shuffled arrays
            while (arr1.length) {
                let name1 = arr1.pop(), // get the last value of arr1
                name2 = arr2[0] === name1 ? arr2.pop() : arr2.shift();
                const indexToRemove = arr1.indexOf(name2);
                arr1.splice(indexToRemove, 1);
                const secondIndexToRemove = arr2.indexOf(name1);
                arr2.splice(secondIndexToRemove, 1);
                //        ^^ if the first value is the same as name1, 
                //           get the last value, otherwise get the first
                pairs.push([name1, name2])
            }

            return pairs;
        }
    }

    static traditional(names) {
        // generate a list of pairs
        // build strings with the paired names
        // return the list of strings
        let pairs = this.pairs(names);
        let new_pairs = [].concat(pairs);

        for(let i=0; i < pairs.length; i++) {
            const current_pair = pairs[i];
            const next_pair = (i + 1 === pairs.length) ? pairs[0] : pairs[i + 1];
            new_pairs.push([current_pair[1], next_pair[0]]);
        }

        return new_pairs.map(pair => `${pair[0]} is giving a gift to ${pair[1]}`);
    }
}

module.exports = GiftExchange