/**
 * Created by Ed on 7/28/2015.
 *  *
 * jslint browser: true, tolerate: messy white space, maxerr: 50,
 * indent: 4
 * globals: TEXTAPP
 */
(function (textApp) {
    'use strict';
    var player = textApp.newGameObject({
        name: 'bob',
        description: textApp.adjectives.random() + ' tough guy'
    });

    // create the starting room
    player.location = textApp.newRoom({
        name: textApp.adjectives.random(),
        description: 'The starting location',
        inventory: [textApp.newGameObject({
            name: textApp.adjectives.random() + ' candle'
        })]
    });

    textApp.player = player;


}(TEXTAPP));