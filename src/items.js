/**
 * Created by Ed on 7/25/2015.
 *
 * jslint browser: true, tolerate: messy white space, maxerr: 50,
 * indent: 4
 * globals: TEXTAPP
 */
(function (textApp) {
    'use strict';

    var itemNames = [
        'gold',
        'dagger',
        'sword',
        'key',
        'candle',
        'ring',
        'wand',
        'pistol',
        'ammo',
        'necklace',
        'boot',
        'hat',
        'can',
        'barrel',
        'figurine',
        'mace',
        'club',
        'wood',
        'flowers',
        'glasses',
        'apple',
        'meat',
        'painting',
        'book',
        'axe',
        'paper',
        'fish',
        'growth',
        'medicine',
        'soup',
        'vial'

    ];

    textApp.newItem = function (spec) {

        var item = textApp.newGameObject({
            name: (spec && spec.name) || textApp.adjectives.random() + ' ' + itemNames[Math.floor(Math.random() * itemNames.length)],
            description: (spec && spec.description) || textApp.adjectives.random() + ' item'
        });

        return item;

    };


}(TEXTAPP));