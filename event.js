export const Event = (extendsClass) => class extends extendsClass {
  ready(of) {
    document.addEventListener("DOMContentLoaded", of);
  }

  click(fn) {
    this.on("click", fn);
  }

  on(of, fn) {
    of
      .split(" ")
      .map(event => this.$els.map($el => $el.addEventListener(event, fn)));
  }

  off(of, fn) {
    of
      .split(" ")
      .map(event => this.$els.map($el => $el.removeEventListener(event, fn)));
  }
}

export default Event;
