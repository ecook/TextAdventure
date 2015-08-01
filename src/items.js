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
        'candle'
    ];

    textApp.newItem = function (spec) {

        var item = textApp.newGameObject({
            name: spec.name || itemNames[Math.floor((Math.random() * itemNames.length))],
            description: spec.description || textApp.adjectives.random()
        });

        return item;

    };


}(TEXTAPP));