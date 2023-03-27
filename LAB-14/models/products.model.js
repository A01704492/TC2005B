const products = [
    {
        name : "Jersey Kittle",
        product : "Men's Nike George Kittle Scarlet San Francisco 49ers Game Player Jersey.",
        image : "https://fanatics.frgimages.com/san-francisco-49ers/mens-nike-george-kittle-scarlet-san-francisco-49ers-player-game-jersey_pi4825000_altimages_ff_4825901-fa7bd185bc19f50eac45alt1_full.jpg?_hv=2&w=900",
        handle : "@kittle" ,
        description : "Nike Game player Jersey, George Kittle"
    },
    {
        name : "Black Hoddie",
        product : "Men's Antigua Black San Francisco 49ers Tonal Logo Generation Quarter-Zip Pullover Top.",
        image : "https://fanatics.frgimages.com/san-francisco-49ers/mens-antigua-black-san-francisco-49ers-tonal-logo-generation-quarter-zip-pullover-top_pi5127000_altimages_ff_5127065-06c24b7630456882be01alt1_full.jpg?_hv=2&w=900",
        handle : "@blackHoddie" ,
        description : "Black Pullover SF"
    },
    {
        name : "White Hat",
        product : "Men's New Era San Francisco 49ers White on White 59FIFTY Fitted Hat",
        image : "https://fanatics.frgimages.com/san-francisco-49ers/mens-new-era-san-francisco-49ers-white-on-white-59fifty-fitted-hat_pi3154000_altimages_ff_3154689alt1_full.jpg?_hv=2&w=900",
        handle : "@59FIFTY" ,
        description : "New Era White Hat"
    },
    {
        name : "Jersey McCaffrey",
        product : "Men's Nike Christian McCaffrey Scarlet San Francisco 49ers Game Player Jersey.",
        image : "https://fanatics.frgimages.com/san-francisco-49ers/mens-nike-christian-mccaffrey-scarlet-san-francisco-49ers-game-player-jersey_pi5207000_altimages_ff_5207635-ef0c29189502e78b4fbcalt1_full.jpg?_hv=2&w=900",
        handle : "@mccaffrey" ,
        description : "Nike Game player Jersey, Christian McCaffrey"
    }
];

module.exports = class Products {

    constructor(nuevo_product) {
        this.name = nuevo_product.name || 'Deebo Samuel Autograph';
        this.product = nuevo_product.product || 'Deebo Samuel San Francisco 49ers Autographed 16" x 20" TD Run vs. Rams Photograph';
        this.image = nuevo_product.image || 'https://fanatics.frgimages.com/san-francisco-49ers/deebo-samuel-san-francisco-49ers-autographed-16-x-20-td-run-vs-rams-photograph_pi4640000_ff_4640054-35abb86bda98134337e4_full.jpg?_hv=2&w=900';
        this.handle = nuevo_product.hanlde || '@deebo';
        this.description = nuevo_product.description || 'Cool autograph of Deebo TD';
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }

}