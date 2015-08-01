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
            super_look = that.superior('look');

        // extending the behavior of the look method
        that.look = function () {
            var result = that.name + ' room<br>';

            result += super_look();

            return result;
        };

        return that;
    };



}(TEXTAPP));