@classDecorator
export class Boat {
  @propertyDecorator
  color: string = 'red';

  @propertyDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError("Oops, boat was sunk")
  pilot(@parameterDecorator speed: string, @parameterDecorator generatorWake: string): void {
    throw new Error();
    console.log("swish");
  }
}

function propertyDecorator(target: any, key: string) {
  console.log("Target: ", target);
  console.log("Key: ", key);
}

// index is the order of parameter in function
function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, '-', index);
}

function classDecorator(constructor: typeof Boat): void {
  console.log(constructor);
}

function logError(errMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    console.log("Target: ", target);
    console.log("Key: ", key);

    const method = desc.value;

    desc.value = () => {
      try {
        method();
      } catch (e) {
        console.log(errMessage);
      }
    }
  }
}

// (new Boat()).pilot();