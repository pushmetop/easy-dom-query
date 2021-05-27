export class Base {
  constructor(of) {
    if (this.isString(of)) {
      return this.setElements(document.querySelectorAll(...arguments));
    }

    if (this.isFunction(of)) {
      return this.ready(of);
    }

    if (this.isUndefined(of.length)) {
      return this.setElements([of]);
    }

    return this.setElements(of);
  }

  setElements(of) {
    of = this.makeArray(of);

    this.length = of.length;
    this.$els = of.map(($el, index) => (this[index] = $el));

    return this;
  }
}

export default Base;
