/**
 * Created by Dad on 7/24/2015.
 *
 * jslint browser: true, sloppy: false, eqeq: false, vars: false, maxerr: 50,
 * indent: 4
 * globals:
 */
(function (textApp) {
    'use strict';

    textApp.start = function (spec) {

        textApp.descriptionElement = document.getElementsByClassName(spec.descriptionClass)[0];
        textApp.inputElement = document.getElementById(spec.textInput);
        textApp.submitButton = document.getElementById(spec.submitButtonId);
        textApp.submitButton.onclick = TEXTAPP.parseText;
        textApp.turn = 0;

        textApp.descriptionElement.innerHTML = "Welcome to a text adventure.  Please enter 'look' to see where you are.";

    };

    textApp.parseText = function () {
        var text = textApp.inputElement.value.toLowerCase(),
            result = 'do not recognize the command: ' + text;

        if (text === 'look') {
            result = textApp.player.location.look();
        } else if (text.substr(0, 4) === 'take'){
            var obj = textApp.player.location.take(text.substr(5));
            if (obj) {
                textApp.player.drop(obj);
                result = 'item taken';
            } else {
                result = [text.substr(5), 'not found'].join(' ');
            }
        }

        // do actions here
        result += textApp.player.location.doActions();

        textApp.descriptionElement.innerHTML = result;
        textApp.turn += 1;
    };

}(TEXTAPP));

