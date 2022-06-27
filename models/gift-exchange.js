class GiftExchange {
    constructor() {

    }

    static pairs(names) {
        // if number of names is odd
        // throw an error
        if (names.length % 2) {
            throw new Error("the number of given names can't odd");
        } 
        // otherwise, randomly pair names together
        else {
            let pairs = [];

            return pairs;
        }

        
        // pick a random item from the array
        // remove that from the original array
        // return the paired names
    }

    static traditional(names) {
        // generate a list of pairs
        // build strings with the paired names
        // return the list of strings
        let pairs = this.pairs(names);
        let new_pairs = [].concat(pairs);

        for(let i=0; i < pairs.length; i++) {
            current_pair = pairs[i];
            next_pair = (i + 1 === pairs.length) ? pairs[0] : pairs[i + 1];
            new_pairs.push([current_pair[1], next_pair[0]]);
        }

        return new_pairs.map(pair => `${pair[0]} is giving a gift to ${pair[1]}`);
    }
}

module.exports = GiftExchange