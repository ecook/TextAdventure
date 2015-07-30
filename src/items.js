/**
 * Created by Dad on 7/28/2015.
 */
(function (textApp) {
    'use strict';

    var items = {};

    var gold = function () {
        var that = {};

        var name = 'gold';
        var value = 10;
        var description = 'gold coins';

        that.look = function () {
            return value + ' ' + description;
        };

        that.name = name;

        return that;
    };


    textApp.newItem = items;


}(TEXTAPP));