/**
 * Created by Dad on 7/28/2015.
 */
(function (textApp) {
    'use strict';

    var chest = function () {
        var that = {};
        var name = 'chest';
        var state = 'closed';
        //var description = 'There is a ' + state + ' ' + name + ' in the corner';

        var inventory = [];
        inventory.push(gold());

        that.look = function () {
            return ['There is a', state, name, 'in the corner'].join(" ");
        };

        that.processText = function (words) {
            var result = '';
            if (words[0].toLowerCase() === 'open') {
                if (state !== 'locked') {
                    state = 'open';
                }
                result = name + ' is ' + state;
            } else if (words[0].toLowerCase() === 'close') {
                state = 'close';
                result = name + ' is ' + state;
            } else if (words[0].toLowerCase() === 'look') {
                inventory.forEach(function (el) {
                    result += el.look() + '<br>';
                });
            } else if (words[0].toLowerCase() === 'take') {
                inventory.forEach(function (el, index) {
                    if (el.name && el.name === words[1].toLowerCase()) {
                        player.inventory.push(el);
                        inventory.slice(index, 1);
                    }
                });
            }
            return result;
        };

        that.name = name;

        return that;
    };



}(TEXTAPP));