/**
 * Created by Ed on 7/29/2015.
 *
 * jslint browser: true, tolerate: messy white space, maxerr: 50,
 * indent: 4
 * globals: TEXTAPP document
 */

//(function () {
//    'use strict';
//    // create global object
//    TEXTAPP = {};
//}());
TEXTAPP = {};

(function (textApp) {

    'use strict';

    textApp.newInventory = function () {
        var that = {},
            inventory = [];

        that.find = function (name) {
            var result = null;

            inventory.forEach(function (item) {
                if (name === item.name) {
                    result = item;
                }
            });

            return result;
        };

        that.look = function () {
            var result = '';

            inventory.forEach(function (item) {
                result += item.name + ' ';
            });

            return result;
        };

        that.doActions = function () {
            inventory.forEach(function (item) {
                if (item.action) {
                    item.action();
                }
            });
        };

        that.add = function (obj) {
            inventory.push(obj);
        };

        that.remove = function (obj) {
            inventory.forEach(function (item, index) {
                if (obj.name === item.name) {
                    inventory.splice(index, 1);
                }
            });
        };

        return that;
    };

    textApp.newGameObject = function (spec) {
        var that = {},
            name = spec.name || '',
            description = spec.description || '',
            inventory = TEXTAPP.newInventory(),
            location = null;

        if (spec.inventory) {
            spec.inventory.forEach(function (item) {
                inventory.add(item);
            });
        }

        that.use = function (spec) {
            var result = '',
                itemName = spec.item;

            result = 'using ' + itemName;
            return result;
        };

        that.action = function () {
            var result = '';

            return result;
        };

        that.doActions = function () {
            inventory.doActions();
        };

        that.look = function () {
            //return [name, description, inventory.look()].join(' ');  // commented out to pass JSLint
            return name + ' ' + description + ' ' + inventory.look();
        };

        that.take = function (spec) {
            var item = inventory.find(spec.name);
            if (item) {
                inventory.remove(item);
            }

            return item;
        };

        that.drop = function (obj) {
            inventory.add(obj);
        };

        that.location = location;
        that.name = name;

        return that;
    };

}(TEXTAPP));