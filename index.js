export class query {
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

    ready(of) {
        document.addEventListener("DOMContentLoaded", of);
    }

    setElements(of) {
        of = this.makeArray(of);

        this.length = of.length;
        of.map(($el, index) => (this[index] = $el));

        return this;
    }

    click(fn) {
        this.$els.addEventListener("click", fn);
        this.$els.map($el => $el.addEventListener("click", fn));
    }

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

export const $ = (arg) => new query(arg);

export default $;