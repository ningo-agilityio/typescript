import 'reflect-metadata';
import { Methods } from '../decorators'

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata("path", path, target, key);
      Reflect.defineMetadata("method", method, target, key);
    }
  }
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);

