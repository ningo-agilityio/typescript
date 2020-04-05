import 'reflect-metadata';

@planeMetadata
class Plane {
  color: string = 'red';

  @markFunction("123")
  fly(): void {
    console.log("Vrrr");
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  }
}

function planeMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}
