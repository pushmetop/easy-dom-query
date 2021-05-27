export const Event = (extendsClass) => class extends extendsClass {
  ready(of) {
    document.addEventListener("DOMContentLoaded", of);
  }

  click(fn) {
    this.$els.addEventListener("click", fn);
    this.$els.map($el => $el.addEventListener("click", fn));
  }
}

export default Event;
