# Text Adventure
This is an exercise in writing proper javaScript as told in the book "javaScript the good parts" by Douglas Crockford.
we will endeavor to not use bad parts like: new, this, global variables, ... and we will strive to use the good parts, 
 such as: single variable name space, closures, javaScript object inheritance (not to be confused with classical object inheritance), ...
 Also, unit tests will be explored, using Jasmine.
 
 So, join us in learning how to write better javaScript, and have fun doing it :)

---

## Architecture
The baseobjects.js file contains the root objects for the game.  From these all other game object inherit.
  The rooms, player, containers, and items files are just extensions to these base objects.  The main start code is
  found in the app.js file.  This is where the UI controls are assigned and updated.  This is also where the input 
  text is parsed and executed.
  
The idea with this adventure is to have objects dynamically generated has more of the game is explored.  So the 
generation code, which is not yet written, will create unique objects based on a set of options.

The entire app is defined under the one global variable **TEXTAPP**.

---

## API

### start
This is the initialization function that assigns the UI controls to internal variables.

    TEXTAPP.start({descriptionClass:'description', textInput:'inputText', submitButtonId:'submitText'})
    
### parseText
This function is where the magic happens.  The text input from the input control is parsed and the result to written
back to the description element.

    TEXTAPP.parseText()
    