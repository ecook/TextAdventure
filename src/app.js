/**
 * Created by Ed on 7/24/2015.
 *
 * jslint browser: true, tolerate: nothing, maxerr: 50,
 * indent: 4
 * globals: TEXTAPP document
 */
(function (textApp) {
    'use strict';

    textApp.start = function (spec) {

        textApp.descriptionElement = document.getElementsByClassName(spec.descriptionClass)[0];
        textApp.inputElement = document.getElementById(spec.textInput);
        textApp.submitButton = document.getElementById(spec.submitButtonId);
        textApp.submitButton.onclick = TEXTAPP.parseText;
        textApp.historyElement = document.getElementsByClassName(spec.historyClass)[0];
        textApp.turn = 0;

        textApp.descriptionElement.innerHTML = "Welcome to a text adventure.<br>  Please enter <strong>look</strong> to see where you are or <strong>help</strong> to see a list of available commands.";

        textApp.inputElement.focus();
    };

    textApp.parseText = function () {
        var text = textApp.inputElement.value.toLowerCase(),
            result = 'do not recognize the command: ' + text,
            dropObj,
            takeObj;

        if (text.search(/look/) === 0) {
            if (text.length > 5) {
                result = textApp.player.location.look(text.substr(5));
            } else {
                result = textApp.player.location.look();
            }

        } else if (text.search(/use/) === 0) {
            result = textApp.player.location.use(text.substr(4));

        } else if (text.search(/inv|inventory/) === 0) {
            result = textApp.player.look();

        } else if (text.search(/take/) === 0) {
            takeObj = textApp.player.location.take(text.substr(5));
            if (takeObj) {
                textApp.player.drop(takeObj);
                result = takeObj.name + ' taken';
            } else {
                result = text.substr(5) + ' not found';
            }

        } else if (text.search(/drop/) === 0) {
            if (text.length > 5) {
                dropObj = textApp.player.take(text.substr(5));
                if (dropObj) {
                    textApp.player.location.drop(dropObj);
                    result = dropObj.name + ' dropped';
                } else {
                    result = 'you do not have the ' + text.substr(5);
                }
            } else {
                result = 'drop what?';
            }

        } else if (text.search(/help/) === 0) {
            result = 'acceptable actions: <br>' +
                    '<strong>help</strong> - this help text <br>' +
                    '<strong>look</strong> - description of the current room <br>' +
                    '<strong>take</strong> - add an item to your inventory <br>' +
                    '<strong>drop</strong> - to remove an item from your inventory <br>' +
                    '<strong>use</strong>  - to interact with items in the room <br>' +
                    '<strong>inv</strong>  - display your status and inventory';
        }

        // do actions here
        result += textApp.player.location.doActions();

        textApp.descriptionElement.innerHTML = result;
        textApp.historyElement.innerHTML += result + '<hr>';
        textApp.inputElement.value = '';
        textApp.turn += 1;
    };

}(TEXTAPP));

