/**
 * Created by Dad on 8/5/2015.
 */
(function (textApp) {
    'use strict';

    var monsterNames = [
        'troll',
        'rat',
        'bat',
        'vampire',
        'zombie',
        'creeper',
        'bird',
        'dwarf',
        'elf',
        'witch',
        'sheep',
        'owl',
        'phoenix',
        'guardian',
        'tiger',
        'alligator',
        'ape',
        'squirrel',
        'cat',
        'dog',
        'mailman',
        'snake',
        'spider',
        'wraith'
    ];

    textApp.newMonster = function (spec) {

        var monster = textApp.newGameObject({
            name: (spec && spec.name) || textApp.adjectives.random() + ' ' + monsterNames[Math.floor(Math.random() * monsterNames.length)],
            description: (spec && spec.description) || textApp.adjectives.random() + ' monster'
        }),
            numOfItems = Math.floor(Math.random() * 5);

        // add items
        while (numOfItems) {
            monster.drop(textApp.newItem());
            numOfItems -= 1;
        }

        monster.action = function () {
            var result = monster.name + ' says hello';

            return result;
        };

        return monster;

    };


}(TEXTAPP));