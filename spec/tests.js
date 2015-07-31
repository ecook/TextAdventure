/**
 * Created by Dad on 7/29/2015.
 */
describe("Inventory", function() {

    var inventory = TEXTAPP.newInventory();

    it("object should be defined", function () {
        expect(inventory).toBeDefined();
    });

    it("should be able to add and remove an item", function () {

        inventory.add({name: "myobject1"});
        inventory.add({name: "myobject2"});

        inventory.add({name: "myobject"});
        var newObject = inventory.find('myobject');
        expect(newObject).toBeDefined();

        inventory.remove(newObject);
        var oldObject = inventory.find('myobject');
        expect(oldObject).toBeNull();
    });

    it("should be able to fire actions for each object that has an action", function () {

        var obj1 = {
            name: 'objectOne',
            action: function () {}
        };
        spyOn(obj1, 'action');

        var obj2 = {
            name: 'objectTwo',
            action: function () {}
        };
        spyOn(obj2, 'action');

        var obj3 = {
            name: 'objectThree'
        };

        inventory.add(obj1);
        inventory.add(obj2);
        inventory.add(obj3);

        inventory.doActions();

        expect(obj1.action).toHaveBeenCalled();
        expect(obj2.action).toHaveBeenCalled();
        expect(obj3.action).toBeUndefined();
    });

    it('should be able to list its items', function () {
        var inventory = TEXTAPP.newInventory();
        inventory.add({name: "myobject1"});
        inventory.add({name: "myobject2"});

        var result = inventory.look();

        expect(result).toContain('myobject1');
        expect(result).toContain('myobject2');

    });
});

describe("baseObject", function () {

    it('should be defined', function () {
        var obj = TEXTAPP.newGameObject({});

        expect(obj).toBeDefined();
    });

    it('should display its details', function () {
        var obj = TEXTAPP.newGameObject({
            name:'obj1',
            description:'myobject',
            inventory: [TEXTAPP.newGameObject({name:'candle', description:'unlit wax candle'})]
        });

        var result = obj.look();

        expect(result).toContain(obj.name);
        expect(result).toContain(obj.description);
        expect(result).toContain('candle');
    });

});