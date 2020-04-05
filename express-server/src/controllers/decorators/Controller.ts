import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';

export function controller(routePrefix: string) {
  return function (target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata("path", target.prototype, key);
      if (path) {
        AppRouter.getInstance().get(`${routePrefix}${path}`, routeHandler);
      }
    }
  }
}