var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getMove = function () {
        console.log(this.brand, 'is moving with', this.wheels, 'wheels');
    };
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(wheels, brand) {
        var _this = _super.call(this) || this;
        _this.wheels = wheels;
        _this.brand = brand;
        return _this;
    }
    Audi.prototype.allWheelDrive = function () {
        console.log('System "All Wheel Drive" is working');
    };
    return Audi;
}(Car));
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(wheels, brand) {
        var _this = _super.call(this) || this;
        _this.wheels = wheels;
        _this.brand = brand;
        return _this;
    }
    Tesla.prototype.electricEngine = function () {
        console.log('electric engine is working');
    };
    return Tesla;
}(Car));
var Porshe = /** @class */ (function (_super) {
    __extends(Porshe, _super);
    function Porshe(wheels, brand) {
        var _this = _super.call(this) || this;
        _this.wheels = wheels;
        _this.brand = brand;
        return _this;
    }
    Porshe.prototype.launchControl = function () {
        console.log('Launch control is always active');
    };
    return Porshe;
}(Car));
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(wheels, brand) {
        var _this = _super.call(this) || this;
        _this.wheels = wheels;
        _this.brand = brand;
        return _this;
    }
    BMW.prototype.sportMode = function () {
        console.log('Sport controls active');
    };
    return BMW;
}(Car));
var audi = new Audi(4, 'Q5');
audi.getMove();
audi.allWheelDrive();
console.log('============================');
var tesla = new Tesla(4, 'Model X');
tesla.getMove();
tesla.electricEngine();
console.log('============================');
var porshe = new Porshe(4, "Macan");
porshe.getMove();
porshe.launchControl();
console.log('============================');
var bmw = new BMW(4, 'X5M');
bmw.getMove();
bmw.sportMode();
console.log('============================');
var ConceptCar = /** @class */ (function (_super) {
    __extends(ConceptCar, _super);
    function ConceptCar(wheels, brand) {
        var _this = _super.call(this) || this;
        _this.wheels = wheels;
        _this.brand = brand;
        return _this;
    }
    return ConceptCar;
}(Car));
function applyMixins(derivedCtor, constructors) {
    constructors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}
applyMixins(ConceptCar, [Audi, Tesla, Porshe, BMW]);
var newCar = new ConceptCar(4, 'Concept');
newCar.getMove();
newCar.allWheelDrive();
newCar.electricEngine();
newCar.launchControl();
newCar.sportMode();
