export const Util = (extendsClass) => class extends extendsClass {
  makeArray(of) {
    return Array.from(of);
  }

  isString(of) {
    return typeof of === 'string';
  }

  isFunction(of) {
    return typeof of === 'function';
  }

  isUndefined(of) {
    return of === undefined;
  }
}

export default Util;
