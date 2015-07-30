/**
 * Created by Ed on 7/28/2015.
 *  *
 * jslint browser: true, tolerate: messy white space, maxerr: 50,
 * indent: 4
 * globals: TEXTAPP
 */
(function (textApp) {
    'use strict';

    textApp.newContainer = function (spec) {
        var that = textApp.newGameObject(spec);



        return that;
    };


}(TEXTAPP));