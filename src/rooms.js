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
        var that = textApp.newGameObject(spec);



        return that;
    };



}(TEXTAPP));