abstract class Car {
    abstract wheels: number;
    abstract brand: string;
    getMove(): void {
        console.log(this.brand, 'is moving with', this.wheels, 'wheels') 
    }

}

class Audi extends Car {
    
    constructor(public wheels: number, public brand: string) {
        super()
    }
    allWheelDrive() {
        console.log('System "All Wheel Drive" is working')
    }

}

class Tesla extends Car{
    constructor(public wheels: number, public brand: string) {
        super()
    }

    electricEngine() {
        console.log('electric engine is working')
    }

}

class Porshe extends Car {
    constructor(public wheels: number, public brand: string) {
        super()
    }

    launchControl() {
        console.log('Launch control is always active')
    }
}

class BMW extends Car {
    constructor(public wheels: number, public brand: string) {
        super()
    }

    sportMode() {
        console.log('Sport controls active')
    }
}

let audi = new Audi(4,'Q5')
audi.getMove();
audi.allWheelDrive();
console.log('============================')

let tesla = new Tesla(4, 'Model X')
tesla.getMove();
tesla.electricEngine();
console.log('============================')

let porshe = new Porshe(4, "Macan")
porshe.getMove();
porshe.launchControl();
console.log('============================')

let bmw = new BMW(4,'X5M');
bmw.getMove();
bmw.sportMode();
console.log('============================')

class ConceptCar extends Car {
    constructor(public wheels: number, public brand: string) {
        super()
    }
}

interface ConceptCar extends Audi, Tesla, Porshe, BMW {}

function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

applyMixins(ConceptCar, [Audi,Tesla,Porshe,BMW]);
let newCar = new ConceptCar(4,'Concept') 
newCar.getMove()
newCar.allWheelDrive()
newCar.electricEngine()
newCar.launchControl()
newCar.sportMode()