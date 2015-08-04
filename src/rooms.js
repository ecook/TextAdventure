/**
 * Created by Ed on 7/25/2015.
 *
 * jslint browser: true, tolerate: messy white space, maxerr: 50,
 * indent: 4
 * globals: TEXTAPP
 */
(function (textApp) {
    'use strict';

    textApp.newRoom = function (spec) {
        var that = textApp.newGameObject(spec),
            super_look = that.superior('look'),
            numOfItems = Math.floor(Math.random() * 5),  // the max number of items that might be generated
            numOfExits = Math.floor(Math.random() * 3);  // the max number of exits that might be generated

        // add items
        while (numOfItems) {
            that.drop(textApp.newItem());
            numOfItems -= 1;
        }

        // add exits
        while (numOfExits) {
            that.drop(textApp.newExit({location: that}));
            numOfExits -= 1;
        }

        // extending the behavior of the look method
        that.look = function () {
            var result = '<span class="roomName">' + that.name + ' room</span><br>';

            result += super_look();

            return result;
        };

        return that;
    };

    textApp.newExit = function (spec) {
        var exitNames = ['door', 'hole', 'passage', 'stair'],
            goes = (spec && spec.goes) || null,
            exit = textApp.newGameObject({
                name: (spec && spec.name) || textApp.adjectives.random() + ' ' + exitNames[Math.floor(Math.random() * exitNames.length)],
                location: (spec && spec.location) || null
            });

        exit.use = function () {
            if (!goes) {
                var room = textApp.newRoom();
                var newExitObj = textApp.newExit({name: exit.name, location: room, goes: exit});
                room.drop(newExitObj);
                goes = newExitObj;
            }
            textApp.player.location = goes.location;
            return 'you go through the ' + exit.name;
        };

        return exit;
    };

}(TEXTAPP));