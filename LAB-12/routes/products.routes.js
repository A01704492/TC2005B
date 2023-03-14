const express = require('express');

const router = express.Router();

const products = [
    {
        product : "Men's Nike George Kittle Scarlet San Francisco 49ers",
        image : "https://fanatics.frgimages.com/san-francisco-49ers/mens-nike-george-kittle-scarlet-san-francisco-49ers-player-game-jersey_pi4825000_altimages_ff_4825901-fa7bd185bc19f50eac45alt1_full.jpg?_hv=2&w=900",
        description : "Game Player Jersey", 
        price : "$129.99"
    },
    {
        product : "Men's Antigua Black San Francisco 49ers",
        image : "https://fanatics.frgimages.com/san-francisco-49ers/mens-antigua-black-san-francisco-49ers-tonal-logo-generation-quarter-zip-pullover-top_pi5127000_altimages_ff_5127065-06c24b7630456882be01alt1_full.jpg?_hv=2&w=900",
        description : "Tonal Logo Generation Quarter-Zip Pullover Top", 
        price : "$94.99"
    },
    {
        product : "Men's New Era San Francisco 49ers", 
        image : "https://fanatics.frgimages.com/san-francisco-49ers/mens-new-era-san-francisco-49ers-white-on-white-59fifty-fitted-hat_pi3154000_altimages_ff_3154689alt1_full.jpg?_hv=2&w=900",
        description : "White on White 59FIFTY Fitted Hat", 
        price : "$41.99"
    },
    {
        product : "Men's Nike Christian McCaffrey Scarlet San Francisco 49ers", 
        image : "https://fanatics.frgimages.com/san-francisco-49ers/mens-nike-christian-mccaffrey-scarlet-san-francisco-49ers-game-player-jersey_pi5207000_altimages_ff_5207635-ef0c29189502e78b4fbcalt1_full.jpg?_hv=2&w=900",
        description : "Game Player Jersey", 
        price : "$129.99"
    }
];

router.get('/', (request, response, next) => {
    response.render('lista', {products: products});
});

module.exports = router;
