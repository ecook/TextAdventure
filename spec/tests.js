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
        var obj = TEXTAPP.newGameObject({
            name:'new room',
            description:'room description',
            inventory: [TEXTAPP.newGameObject({name:'sticky candle'})]
        });

        expect(obj).toBeDefined();
    });

    describe('should display', function () {
        var result = '',
            obj = TEXTAPP.newRoom({
                name:'test',
                description:'room description',
                inventory: [TEXTAPP.newGameObject({name:'sticky candle'})]
            });

        beforeEach(function () {
            result = obj.look();
        });

        it('the room name', function () {
            expect(result).toContain(obj.name);
        });

        it('the room description', function () {
            expect(result).toContain('room description');
        });

        it('the rooms inventory', function () {
            expect(result).toContain('sticky candle');
        });
    });

});