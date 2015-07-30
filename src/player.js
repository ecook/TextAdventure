/**
 * Created by Dad on 7/28/2015.
 */
(function (textApp) {
    'use strict';
    var player = textApp.newGameObject({name:'bob', description:'tough guy'});

    // create the starting room
    player.location = textApp.newRoom({
        name: 'start',
        description: 'The starting location',
        inventory: [textApp.newGameObject({name:'candle', description:'unlit wax candle'})]
    });

    textApp.player = player;


}(TEXTAPP));