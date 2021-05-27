import Base from "./base";
import Util from "./util";
import Event from "./event";

const mixins = (base, traits) => traits.reduce((pre, cur) => (pre = cur(pre)), base);

class Query extends mixins(Base, [Util, Event]) { }

export default Query;
