import { warn as We, inject as Ye, ref as re, computed as z, unref as I, defineComponent as kt, openBlock as et, createElementBlock as vt, mergeProps as Xe, renderSlot as Ze, watch as tn, createBlock as en, withCtx as nn, createElementVNode as Bt, normalizeClass as rn, normalizeStyle as on, nextTick as sn } from "vue";
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const cn = Object.prototype.hasOwnProperty, zt = (t, e) => cn.call(t, e), Nt = (t) => typeof t == "string", oe = (t) => t !== null && typeof t == "object";
function an(t) {
  for (var e = -1, n = t == null ? 0 : t.length, o = {}; ++e < n; ) {
    var r = t[e];
    o[r[0]] = r[1];
  }
  return o;
}
const un = (t) => t === void 0, ln = (t) => typeof t == "number", fn = (t) => Nt(t) ? !Number.isNaN(Number(t)) : !1;
class dn extends Error {
  constructor(e) {
    super(e), this.name = "ElementPlusError";
  }
}
function pn(t, e) {
  if (process.env.NODE_ENV !== "production") {
    const n = Nt(t) ? new dn(`[${t}] ${e}`) : t;
    console.warn(n);
  }
}
const hn = "utils/dom/style";
function gn(t, e = "px") {
  if (!t)
    return "";
  if (ln(t) || fn(t))
    return `${t}${e}`;
  if (Nt(t))
    return t;
  pn(hn, "binding value must be a string or number");
}
const se = "__epPropKey", yn = (t) => t, mn = (t) => oe(t) && !!t[se], bn = (t, e) => {
  if (!oe(t) || mn(t))
    return t;
  const { values: n, required: o, default: r, type: s, validator: i } = t, a = {
    type: s,
    required: !!o,
    validator: n || i ? (u) => {
      let l = !1, d = [];
      if (n && (d = Array.from(n), zt(t, "default") && d.push(r), l || (l = d.includes(u))), i && (l || (l = i(u))), !l && d.length > 0) {
        const p = [...new Set(d)].map((g) => JSON.stringify(g)).join(", ");
        We(`Invalid prop: validation failed${e ? ` for prop "${e}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return l;
    } : void 0,
    [se]: !0
  };
  return zt(t, "default") && (a.default = r), a;
}, vn = (t) => an(Object.entries(t).map(([e, n]) => [
  e,
  bn(n, e)
])), wn = (t, e) => {
  if (t.install = (n) => {
    for (const o of [t, ...Object.values(e ?? {})])
      n.component(o.name, o);
  }, e)
    for (const [n, o] of Object.entries(e))
      t[n] = o;
  return t;
}, Rt = "el", On = "is-", C = (t, e, n, o, r) => {
  let s = `${t}-${e}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, Sn = Symbol("namespaceContextKey"), xn = (t) => {
  const e = t || Ye(Sn, re(Rt));
  return z(() => I(e) || Rt);
}, In = (t, e) => {
  const n = xn(e);
  return {
    namespace: n,
    b: (f = "") => C(n.value, t, f, "", ""),
    e: (f) => f ? C(n.value, t, "", f, "") : "",
    m: (f) => f ? C(n.value, t, "", "", f) : "",
    be: (f, h) => f && h ? C(n.value, t, f, h, "") : "",
    em: (f, h) => f && h ? C(n.value, t, "", f, h) : "",
    bm: (f, h) => f && h ? C(n.value, t, f, "", h) : "",
    bem: (f, h, v) => f && h && v ? C(n.value, t, f, h, v) : "",
    is: (f, ...h) => {
      const v = h.length >= 1 ? h[0] : !0;
      return f && v ? `${On}${f}` : "";
    },
    cssVar: (f) => {
      const h = {};
      for (const v in f)
        f[v] && (h[`--${n.value}-${v}`] = f[v]);
      return h;
    },
    cssVarName: (f) => `--${n.value}-${f}`,
    cssVarBlock: (f) => {
      const h = {};
      for (const v in f)
        f[v] && (h[`--${n.value}-${t}-${v}`] = f[v]);
      return h;
    },
    cssVarBlockName: (f) => `--${n.value}-${t}-${f}`
  };
};
var jn = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, r] of e)
    n[o] = r;
  return n;
};
const Tn = vn({
  size: {
    type: yn([Number, String])
  },
  color: {
    type: String
  }
}), En = kt({
  name: "ElIcon",
  inheritAttrs: !1
}), Pn = /* @__PURE__ */ kt({
  ...En,
  props: Tn,
  setup(t) {
    const e = t, n = In("icon"), o = z(() => {
      const { size: r, color: s } = e;
      return !r && !s ? {} : {
        fontSize: un(r) ? void 0 : gn(r),
        "--color": s
      };
    });
    return (r, s) => (et(), vt("i", Xe({
      class: I(n).b(),
      style: I(o)
    }, r.$attrs), [
      Ze(r.$slots, "default")
    ], 16));
  }
});
var Cn = /* @__PURE__ */ jn(Pn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const _n = wn(Cn);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function qt(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function $n(t) {
  var e, n;
  return qt(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (n = e.prototype, !(qt(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)));
}
function R() {
  return R = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, R.apply(this, arguments);
}
function ie(t, e) {
  if (t == null)
    return {};
  var n, o, r = {}, s = Object.keys(t);
  for (o = 0; o < s.length; o++)
    e.indexOf(n = s[o]) >= 0 || (r[n] = t[n]);
  return r;
}
const wt = { silent: !1, logLevel: "warn" }, kn = ["validator"], ce = Object.prototype, ae = ce.toString, Nn = ce.hasOwnProperty, ue = /^\s*function (\w+)/;
function Ut(t) {
  var e;
  const n = (e = t == null ? void 0 : t.type) !== null && e !== void 0 ? e : t;
  if (n) {
    const o = n.toString().match(ue);
    return o ? o[1] : "";
  }
  return "";
}
const $ = $n, le = (t) => t;
let b = le;
process.env.NODE_ENV !== "production" && (b = typeof console < "u" ? function(e, n = wt.logLevel) {
  wt.silent === !1 && console[n](`[VueTypes warn]: ${e}`);
} : le);
const A = (t, e) => Nn.call(t, e), An = Number.isInteger || function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t;
}, L = Array.isArray || function(t) {
  return ae.call(t) === "[object Array]";
}, M = (t) => ae.call(t) === "[object Function]", st = (t, e) => $(t) && A(t, "_vueTypes_name") && (!e || t._vueTypes_name === e), fe = (t) => $(t) && (A(t, "type") || ["_vueTypes_name", "validator", "default", "required"].some((e) => A(t, e)));
function At(t, e) {
  return Object.defineProperty(t.bind(e), "__original", { value: t });
}
function N(t, e, n = !1) {
  let o, r = !0, s = "";
  o = $(t) ? t : { type: t };
  const i = st(o) ? o._vueTypes_name + " - " : "";
  if (fe(o) && o.type !== null) {
    if (o.type === void 0 || o.type === !0 || !o.required && e === void 0)
      return r;
    L(o.type) ? (r = o.type.some((c) => N(c, e, !0) === !0), s = o.type.map((c) => Ut(c)).join(" or ")) : (s = Ut(o), r = s === "Array" ? L(e) : s === "Object" ? $(e) : s === "String" || s === "Number" || s === "Boolean" || s === "Function" ? function(c) {
      if (c == null)
        return "";
      const a = c.constructor.toString().match(ue);
      return a ? a[1] : "";
    }(e) === s : e instanceof o.type);
  }
  if (!r) {
    const c = `${i}value "${e}" should be of type "${s}"`;
    return n === !1 ? (b(c), !1) : c;
  }
  if (A(o, "validator") && M(o.validator)) {
    const c = b, a = [];
    if (b = (u) => {
      a.push(u);
    }, r = o.validator(e), b = c, !r) {
      const u = (a.length > 1 ? "* " : "") + a.join(`
* `);
      return a.length = 0, n === !1 ? (b(u), r) : u;
    }
  }
  return r;
}
function S(t, e) {
  const n = Object.defineProperties(e, { _vueTypes_name: { value: t, writable: !0 }, isRequired: { get() {
    return this.required = !0, this;
  } }, def: { value(r) {
    return r === void 0 ? this.type === Boolean || Array.isArray(this.type) && this.type.includes(Boolean) ? void (this.default = void 0) : (A(this, "default") && delete this.default, this) : M(r) || N(this, r, !0) === !0 ? (this.default = L(r) ? () => [...r] : $(r) ? () => Object.assign({}, r) : r, this) : (b(`${this._vueTypes_name} - invalid default value: "${r}"`), this);
  } } }), { validator: o } = n;
  return M(o) && (n.validator = At(o, n)), n;
}
function j(t, e) {
  const n = S(t, e);
  return Object.defineProperty(n, "validate", { value(o) {
    return M(this.validator) && b(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`), this.validator = At(o, this), this;
  } });
}
function Ht(t, e, n) {
  const o = function(a) {
    const u = {};
    return Object.getOwnPropertyNames(a).forEach((l) => {
      u[l] = Object.getOwnPropertyDescriptor(a, l);
    }), Object.defineProperties({}, u);
  }(e);
  if (o._vueTypes_name = t, !$(n))
    return o;
  const { validator: r } = n, s = ie(n, kn);
  if (M(r)) {
    let { validator: a } = o;
    a && (a = (c = (i = a).__original) !== null && c !== void 0 ? c : i), o.validator = At(a ? function(u) {
      return a.call(this, u) && r.call(this, u);
    } : r, o);
  }
  var i, c;
  return Object.assign(o, s);
}
function lt(t) {
  return t.replace(/^(?!\s*$)/gm, "  ");
}
const Ln = () => j("any", {}), Mn = () => j("function", { type: Function }), Qt = () => j("boolean", { type: Boolean }), Fn = () => j("string", { type: String }), Vn = () => j("number", { type: Number }), Dn = () => j("array", { type: Array }), Bn = () => j("object", { type: Object }), zn = () => S("integer", { type: Number, validator(t) {
  const e = An(t);
  return e === !1 && b(`integer - "${t}" is not an integer`), e;
} }), Rn = () => S("symbol", { validator(t) {
  const e = typeof t == "symbol";
  return e === !1 && b(`symbol - invalid value "${t}"`), e;
} }), qn = () => Object.defineProperty({ type: null, validator(t) {
  const e = t === null;
  return e === !1 && b("nullable - value should be null"), e;
} }, "_vueTypes_name", { value: "nullable" });
function Un(t, e = "custom validation failed") {
  if (typeof t != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return S(t.name || "<<anonymous function>>", { type: null, validator(n) {
    const o = t(n);
    return o || b(`${this._vueTypes_name} - ${e}`), o;
  } });
}
function Hn(t) {
  if (!L(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  const e = `oneOf - value should be one of "${t.map((o) => typeof o == "symbol" ? o.toString() : o).join('", "')}".`, n = { validator(o) {
    const r = t.indexOf(o) !== -1;
    return r || b(e), r;
  } };
  if (t.indexOf(null) === -1) {
    const o = t.reduce((r, s) => {
      if (s != null) {
        const i = s.constructor;
        r.indexOf(i) === -1 && r.push(i);
      }
      return r;
    }, []);
    o.length > 0 && (n.type = o);
  }
  return S("oneOf", n);
}
function Qn(t) {
  if (!L(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  let e = !1, n = !1, o = [];
  for (let s = 0; s < t.length; s += 1) {
    const i = t[s];
    if (fe(i)) {
      if (M(i.validator) && (e = !0), st(i, "oneOf") && i.type) {
        o = o.concat(i.type);
        continue;
      }
      if (st(i, "nullable")) {
        n = !0;
        continue;
      }
      if (i.type === !0 || !i.type) {
        b('oneOfType - invalid usage of "true" and "null" as types.');
        continue;
      }
      o = o.concat(i.type);
    } else
      o.push(i);
  }
  o = o.filter((s, i) => o.indexOf(s) === i);
  const r = n === !1 && o.length > 0 ? o : null;
  return S("oneOfType", e ? { type: r, validator(s) {
    const i = [], c = t.some((a) => {
      const u = N(a, s, !0);
      return typeof u == "string" && i.push(u), u === !0;
    });
    return c || b(`oneOfType - provided value does not match any of the ${i.length} passed-in validators:
${lt(i.join(`
`))}`), c;
  } } : { type: r });
}
function Kn(t) {
  return S("arrayOf", { type: Array, validator(e) {
    let n = "";
    const o = e.every((r) => (n = N(t, r, !0), n === !0));
    return o || b(`arrayOf - value validation error:
${lt(n)}`), o;
  } });
}
function Gn(t) {
  return S("instanceOf", { type: t });
}
function Jn(t) {
  return S("objectOf", { type: Object, validator(e) {
    let n = "";
    const o = Object.keys(e).every((r) => (n = N(t, e[r], !0), n === !0));
    return o || b(`objectOf - value validation error:
${lt(n)}`), o;
  } });
}
function Wn(t) {
  const e = Object.keys(t), n = e.filter((r) => {
    var s;
    return !((s = t[r]) === null || s === void 0 || !s.required);
  }), o = S("shape", { type: Object, validator(r) {
    if (!$(r))
      return !1;
    const s = Object.keys(r);
    if (n.length > 0 && n.some((i) => s.indexOf(i) === -1)) {
      const i = n.filter((c) => s.indexOf(c) === -1);
      return b(i.length === 1 ? `shape - required property "${i[0]}" is not defined.` : `shape - required properties "${i.join('", "')}" are not defined.`), !1;
    }
    return s.every((i) => {
      if (e.indexOf(i) === -1)
        return this._vueTypes_isLoose === !0 || (b(`shape - shape definition does not include a "${i}" property. Allowed keys: "${e.join('", "')}".`), !1);
      const c = N(t[i], r[i], !0);
      return typeof c == "string" && b(`shape - "${i}" property validation error:
 ${lt(c)}`), c === !0;
    });
  } });
  return Object.defineProperty(o, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(o, "loose", { get() {
    return this._vueTypes_isLoose = !0, this;
  } }), o;
}
const Yn = ["name", "validate", "getter"], Xn = /* @__PURE__ */ (() => {
  var t;
  return (t = class {
    static get any() {
      return Ln();
    }
    static get func() {
      return Mn().def(this.defaults.func);
    }
    static get bool() {
      return this.defaults.bool === void 0 ? Qt() : Qt().def(this.defaults.bool);
    }
    static get string() {
      return Fn().def(this.defaults.string);
    }
    static get number() {
      return Vn().def(this.defaults.number);
    }
    static get array() {
      return Dn().def(this.defaults.array);
    }
    static get object() {
      return Bn().def(this.defaults.object);
    }
    static get integer() {
      return zn().def(this.defaults.integer);
    }
    static get symbol() {
      return Rn();
    }
    static get nullable() {
      return qn();
    }
    static extend(e) {
      if (b("VueTypes.extend is deprecated. Use the ES6+ method instead. See https://dwightjack.github.io/vue-types/advanced/extending-vue-types.html#extending-namespaced-validators-in-es6 for details."), L(e))
        return e.forEach((a) => this.extend(a)), this;
      const { name: n, validate: o = !1, getter: r = !1 } = e, s = ie(e, Yn);
      if (A(this, n))
        throw new TypeError(`[VueTypes error]: Type "${n}" already defined`);
      const { type: i } = s;
      if (st(i))
        return delete s.type, Object.defineProperty(this, n, r ? { get: () => Ht(n, i, s) } : { value(...a) {
          const u = Ht(n, i, s);
          return u.validator && (u.validator = u.validator.bind(u, ...a)), u;
        } });
      let c;
      return c = r ? { get() {
        const a = Object.assign({}, s);
        return o ? j(n, a) : S(n, a);
      }, enumerable: !0 } : { value(...a) {
        const u = Object.assign({}, s);
        let l;
        return l = o ? j(n, u) : S(n, u), u.validator && (l.validator = u.validator.bind(l, ...a)), l;
      }, enumerable: !0 }, Object.defineProperty(this, n, c);
    }
  }).defaults = {}, t.sensibleDefaults = void 0, t.config = wt, t.custom = Un, t.oneOf = Hn, t.instanceOf = Gn, t.oneOfType = Qn, t.arrayOf = Kn, t.objectOf = Jn, t.shape = Wn, t.utils = { validate: (e, n) => N(n, e, !0) === !0, toType: (e, n, o = !1) => o ? j(e, n) : S(e, n) }, t;
})();
function de(t = { func: () => {
}, bool: !0, string: "", number: 0, array: () => [], object: () => ({}), integer: 0 }) {
  var e;
  return (e = class extends Xn {
    static get sensibleDefaults() {
      return R({}, this.defaults);
    }
    static set sensibleDefaults(n) {
      this.defaults = n !== !1 ? R({}, n !== !0 ? n : t) : {};
    }
  }).defaults = R({}, t), e;
}
class _o extends de() {
}
const nt = de({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  object: void 0,
  integer: void 0
});
nt.extend([
  {
    name: "style",
    getter: !0,
    type: [String, Object],
    default: void 0
  }
]);
/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.1.1
*/
const pe = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), it = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), G = Object.freeze({
  ...pe,
  ...it
}), Ot = Object.freeze({
  ...G,
  body: "",
  hidden: !1
});
function Zn(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const o = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return o && (n.rotate = o), n;
}
function Kt(t, e) {
  const n = Zn(t, e);
  for (const o in Ot)
    o in it ? o in t && !(o in n) && (n[o] = it[o]) : o in e ? n[o] = e[o] : o in t && (n[o] = t[o]);
  return n;
}
function tr(t, e) {
  const n = t.icons, o = t.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  function s(i) {
    if (n[i])
      return r[i] = [];
    if (!(i in r)) {
      r[i] = null;
      const c = o[i] && o[i].parent, a = c && s(c);
      a && (r[i] = [c].concat(a));
    }
    return r[i];
  }
  return (e || Object.keys(n).concat(Object.keys(o))).forEach(s), r;
}
function er(t, e, n) {
  const o = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function i(c) {
    s = Kt(
      o[c] || r[c],
      s
    );
  }
  return i(e), n.forEach(i), Kt(t, s);
}
function he(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((r) => {
    e(r, null), n.push(r);
  });
  const o = tr(t);
  for (const r in o) {
    const s = o[r];
    s && (e(r, er(t, r, s)), n.push(r));
  }
  return n;
}
const q = /^[a-z0-9]+(-[a-z0-9]+)*$/, V = (t, e, n, o = "") => {
  const r = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (r.length < 2 || r.length > 3)
      return null;
    o = r.shift().slice(1);
  }
  if (r.length > 3 || !r.length)
    return null;
  if (r.length > 1) {
    const c = r.pop(), a = r.pop(), u = {
      // Allow provider without '@': "provider:prefix:name"
      provider: r.length > 0 ? r[0] : o,
      prefix: a,
      name: c
    };
    return e && !rt(u) ? null : u;
  }
  const s = r[0], i = s.split("-");
  if (i.length > 1) {
    const c = {
      provider: o,
      prefix: i.shift(),
      name: i.join("-")
    };
    return e && !rt(c) ? null : c;
  }
  if (n && o === "") {
    const c = {
      provider: o,
      prefix: "",
      name: s
    };
    return e && !rt(c, n) ? null : c;
  }
  return null;
}, rt = (t, e) => t ? !!((t.provider === "" || t.provider.match(q)) && (e && t.prefix === "" || t.prefix.match(q)) && t.name.match(q)) : !1, nr = {
  provider: "",
  aliases: {},
  not_found: {},
  ...pe
};
function yt(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function ge(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !yt(t, nr))
    return null;
  const n = e.icons;
  for (const r in n) {
    const s = n[r];
    if (!r.match(q) || typeof s.body != "string" || !yt(
      s,
      Ot
    ))
      return null;
  }
  const o = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const r in o) {
    const s = o[r], i = s.parent;
    if (!r.match(q) || typeof i != "string" || !n[i] && !o[i] || !yt(
      s,
      Ot
    ))
      return null;
  }
  return e;
}
const ct = /* @__PURE__ */ Object.create(null);
function rr(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function T(t, e) {
  const n = ct[t] || (ct[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = rr(t, e));
}
function Lt(t, e) {
  return ge(e) ? he(e, (n, o) => {
    o ? t.icons[n] = o : t.missing.add(n);
  }) : [];
}
function or(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
function sr(t, e) {
  let n = [];
  return (typeof t == "string" ? [t] : Object.keys(ct)).forEach((r) => {
    (typeof r == "string" && typeof e == "string" ? [e] : Object.keys(ct[r] || {})).forEach((i) => {
      const c = T(r, i);
      n = n.concat(
        Object.keys(c.icons).map(
          (a) => (r !== "" ? "@" + r + ":" : "") + i + ":" + a
        )
      );
    });
  }), n;
}
let Q = !1;
function ir(t) {
  return typeof t == "boolean" && (Q = t), Q;
}
function J(t) {
  const e = typeof t == "string" ? V(t, !0, Q) : t;
  if (e) {
    const n = T(e.provider, e.prefix), o = e.name;
    return n.icons[o] || (n.missing.has(o) ? null : void 0);
  }
}
function ye(t, e) {
  const n = V(t, !0, Q);
  if (!n)
    return !1;
  const o = T(n.provider, n.prefix);
  return or(o, n.name, e);
}
function me(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), Q && !e && !t.prefix) {
    let r = !1;
    return ge(t) && (t.prefix = "", he(t, (s, i) => {
      i && ye(s, i) && (r = !0);
    })), r;
  }
  const n = t.prefix;
  if (!rt({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const o = T(e, n);
  return !!Lt(o, t);
}
function cr(t) {
  return !!J(t);
}
function ar(t) {
  const e = J(t);
  return e ? {
    ...G,
    ...e
  } : null;
}
const be = Object.freeze({
  width: null,
  height: null
}), ve = Object.freeze({
  // Dimensions
  ...be,
  // Transformations
  ...it
}), ur = /(-?[0-9.]*[0-9]+[0-9.]*)/g, lr = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function St(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const o = t.split(ur);
  if (o === null || !o.length)
    return t;
  const r = [];
  let s = o.shift(), i = lr.test(s);
  for (; ; ) {
    if (i) {
      const c = parseFloat(s);
      isNaN(c) ? r.push(s) : r.push(Math.ceil(c * e * n) / n);
    } else
      r.push(s);
    if (s = o.shift(), s === void 0)
      return r.join("");
    i = !i;
  }
}
const fr = (t) => t === "unset" || t === "undefined" || t === "none";
function ft(t, e) {
  const n = {
    ...G,
    ...t
  }, o = {
    ...ve,
    ...e
  }, r = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let s = n.body;
  [n, o].forEach((m) => {
    const f = [], h = m.hFlip, v = m.vFlip;
    let w = m.rotate;
    h ? v ? w += 2 : (f.push(
      "translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"
    ), f.push("scale(-1 1)"), r.top = r.left = 0) : v && (f.push(
      "translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"
    ), f.push("scale(1 -1)"), r.top = r.left = 0);
    let O;
    switch (w < 0 && (w -= Math.floor(w / 4) * 4), w = w % 4, w) {
      case 1:
        O = r.height / 2 + r.top, f.unshift(
          "rotate(90 " + O.toString() + " " + O.toString() + ")"
        );
        break;
      case 2:
        f.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        O = r.width / 2 + r.left, f.unshift(
          "rotate(-90 " + O.toString() + " " + O.toString() + ")"
        );
        break;
    }
    w % 2 === 1 && (r.left !== r.top && (O = r.left, r.left = r.top, r.top = O), r.width !== r.height && (O = r.width, r.width = r.height, r.height = O)), f.length && (s = '<g transform="' + f.join(" ") + '">' + s + "</g>");
  });
  const i = o.width, c = o.height, a = r.width, u = r.height;
  let l, d;
  i === null ? (d = c === null ? "1em" : c === "auto" ? u : c, l = St(d, a / u)) : (l = i === "auto" ? a : i, d = c === null ? St(l, u / a) : c === "auto" ? u : c);
  const p = {}, g = (m, f) => {
    fr(f) || (p[m] = f.toString());
  };
  return g("width", l), g("height", d), p.viewBox = r.left.toString() + " " + r.top.toString() + " " + a.toString() + " " + u.toString(), {
    attributes: p,
    body: s
  };
}
const dr = /\sid="(\S+)"/g, pr = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let hr = 0;
function we(t, e = pr) {
  const n = [];
  let o;
  for (; o = dr.exec(t); )
    n.push(o[1]);
  if (!n.length)
    return t;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((s) => {
    const i = typeof e == "function" ? e(s) : e + (hr++).toString(), c = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + i + r + "$3"
    );
  }), t = t.replace(new RegExp(r, "g"), ""), t;
}
const _ = {
  local: !0,
  session: !0
}, Oe = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Mt = !1;
function gr(t) {
  Mt = t;
}
const Gt = "iconify2", K = "iconify", Se = K + "-count", Jt = K + "-version", xe = 36e5, yr = 168;
function xt(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function Ft(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function Wt(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function It(t, e) {
  return Ft(t, Se, e.toString());
}
function jt(t) {
  return parseInt(xt(t, Se)) || 0;
}
let Z = typeof window > "u" ? {} : window;
function Ie(t) {
  const e = t + "Storage";
  try {
    if (Z && Z[e] && typeof Z[e].length == "number")
      return Z[e];
  } catch {
  }
  _[t] = !1;
}
function je(t, e) {
  const n = Ie(t);
  if (!n)
    return;
  const o = xt(n, Jt);
  if (o !== Gt) {
    if (o) {
      const c = jt(n);
      for (let a = 0; a < c; a++)
        Wt(n, K + a.toString());
    }
    Ft(n, Jt, Gt), It(n, 0);
    return;
  }
  const r = Math.floor(Date.now() / xe) - yr, s = (c) => {
    const a = K + c.toString(), u = xt(n, a);
    if (typeof u == "string") {
      try {
        const l = JSON.parse(u);
        if (typeof l == "object" && typeof l.cached == "number" && l.cached > r && typeof l.provider == "string" && typeof l.data == "object" && typeof l.data.prefix == "string" && // Valid item: run callback
        e(l, c))
          return !0;
      } catch {
      }
      Wt(n, a);
    }
  };
  let i = jt(n);
  for (let c = i - 1; c >= 0; c--)
    s(c) || (c === i - 1 ? (i--, It(n, i)) : Oe[t].add(c));
}
function Te() {
  if (!Mt) {
    gr(!0);
    for (const t in _)
      je(t, (e) => {
        const n = e.data, o = e.provider, r = n.prefix, s = T(
          o,
          r
        );
        if (!Lt(s, n).length)
          return !1;
        const i = n.lastModified || -1;
        return s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, i) : i, !0;
      });
  }
}
function Ee(t, e) {
  switch (t) {
    case "local":
    case "session":
      _[t] = e;
      break;
    case "all":
      for (const n in _)
        _[n] = e;
      break;
  }
}
const Tt = /* @__PURE__ */ Object.create(null);
function Pe(t, e) {
  Tt[t] = e;
}
function Et(t) {
  return Tt[t] || Tt[""];
}
function Vt(t) {
  let e;
  if (typeof t.resources == "string")
    e = [t.resources];
  else if (e = t.resources, !(e instanceof Array) || !e.length)
    return null;
  return {
    // API hosts
    resources: e,
    // Root path
    path: t.path || "/",
    // URL length limit
    maxURL: t.maxURL || 500,
    // Timeout before next host is used.
    rotate: t.rotate || 750,
    // Timeout before failing query.
    timeout: t.timeout || 5e3,
    // Randomise default API end point.
    random: t.random === !0,
    // Start index
    index: t.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: t.dataAfterTimeout !== !1
  };
}
const dt = /* @__PURE__ */ Object.create(null), B = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], ot = [];
for (; B.length > 0; )
  B.length === 1 || Math.random() > 0.5 ? ot.push(B.shift()) : ot.push(B.pop());
dt[""] = Vt({
  resources: ["https://api.iconify.design"].concat(ot)
});
function Ce(t, e) {
  const n = Vt(e);
  return n === null ? !1 : (dt[t] = n, !0);
}
function pt(t) {
  return dt[t];
}
function mr() {
  return Object.keys(dt);
}
const br = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let at = br();
function vr(t) {
  at = t;
}
function wr() {
  return at;
}
function Or(t, e) {
  const n = pt(t);
  if (!n)
    return 0;
  let o;
  if (!n.maxURL)
    o = 0;
  else {
    let r = 0;
    n.resources.forEach((i) => {
      r = Math.max(r, i.length);
    });
    const s = e + ".json?icons=";
    o = n.maxURL - r - n.path.length - s.length;
  }
  return o;
}
function Sr(t) {
  return t === 404;
}
const xr = (t, e, n) => {
  const o = [], r = Or(t, e), s = "icons";
  let i = {
    type: s,
    provider: t,
    prefix: e,
    icons: []
  }, c = 0;
  return n.forEach((a, u) => {
    c += a.length + 1, c >= r && u > 0 && (o.push(i), i = {
      type: s,
      provider: t,
      prefix: e,
      icons: []
    }, c = a.length), i.icons.push(a);
  }), o.push(i), o;
};
function Ir(t) {
  if (typeof t == "string") {
    const e = pt(t);
    if (e)
      return e.path;
  }
  return "/";
}
const jr = (t, e, n) => {
  if (!at) {
    n("abort", 424);
    return;
  }
  let o = Ir(e.provider);
  switch (e.type) {
    case "icons": {
      const s = e.prefix, c = e.icons.join(","), a = new URLSearchParams({
        icons: c
      });
      o += s + ".json?" + a.toString();
      break;
    }
    case "custom": {
      const s = e.uri;
      o += s.slice(0, 1) === "/" ? s.slice(1) : s;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let r = 503;
  at(t + o).then((s) => {
    const i = s.status;
    if (i !== 200) {
      setTimeout(() => {
        n(Sr(i) ? "abort" : "next", i);
      });
      return;
    }
    return r = 501, s.json();
  }).then((s) => {
    if (typeof s != "object" || s === null) {
      setTimeout(() => {
        s === 404 ? n("abort", s) : n("next", r);
      });
      return;
    }
    setTimeout(() => {
      n("success", s);
    });
  }).catch(() => {
    n("next", r);
  });
}, Tr = {
  prepare: xr,
  send: jr
};
function Er(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  t.sort((r, s) => r.provider !== s.provider ? r.provider.localeCompare(s.provider) : r.prefix !== s.prefix ? r.prefix.localeCompare(s.prefix) : r.name.localeCompare(s.name));
  let o = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((r) => {
    if (o.name === r.name && o.prefix === r.prefix && o.provider === r.provider)
      return;
    o = r;
    const s = r.provider, i = r.prefix, c = r.name, a = n[s] || (n[s] = /* @__PURE__ */ Object.create(null)), u = a[i] || (a[i] = T(s, i));
    let l;
    c in u.icons ? l = e.loaded : i === "" || u.missing.has(c) ? l = e.missing : l = e.pending;
    const d = {
      provider: s,
      prefix: i,
      name: c
    };
    l.push(d);
  }), e;
}
function _e(t, e) {
  t.forEach((n) => {
    const o = n.loaderCallbacks;
    o && (n.loaderCallbacks = o.filter((r) => r.id !== e));
  });
}
function Pr(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let n = !1;
    const o = t.provider, r = t.prefix;
    e.forEach((s) => {
      const i = s.icons, c = i.pending.length;
      i.pending = i.pending.filter((a) => {
        if (a.prefix !== r)
          return !0;
        const u = a.name;
        if (t.icons[u])
          i.loaded.push({
            provider: o,
            prefix: r,
            name: u
          });
        else if (t.missing.has(u))
          i.missing.push({
            provider: o,
            prefix: r,
            name: u
          });
        else
          return n = !0, !0;
        return !1;
      }), i.pending.length !== c && (n || _e([t], s.id), s.callback(
        i.loaded.slice(0),
        i.missing.slice(0),
        i.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let Cr = 0;
function _r(t, e, n) {
  const o = Cr++, r = _e.bind(null, n, o);
  if (!e.pending.length)
    return r;
  const s = {
    id: o,
    icons: e,
    callback: t,
    abort: r
  };
  return n.forEach((i) => {
    (i.loaderCallbacks || (i.loaderCallbacks = [])).push(s);
  }), r;
}
function $r(t, e = !0, n = !1) {
  const o = [];
  return t.forEach((r) => {
    const s = typeof r == "string" ? V(r, e, n) : r;
    s && o.push(s);
  }), o;
}
var kr = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Nr(t, e, n, o) {
  const r = t.resources.length, s = t.random ? Math.floor(Math.random() * r) : t.index;
  let i;
  if (t.random) {
    let y = t.resources.slice(0);
    for (i = []; y.length > 1; ) {
      const x = Math.floor(Math.random() * y.length);
      i.push(y[x]), y = y.slice(0, x).concat(y.slice(x + 1));
    }
    i = i.concat(y);
  } else
    i = t.resources.slice(s).concat(t.resources.slice(0, s));
  const c = Date.now();
  let a = "pending", u = 0, l, d = null, p = [], g = [];
  typeof o == "function" && g.push(o);
  function m() {
    d && (clearTimeout(d), d = null);
  }
  function f() {
    a === "pending" && (a = "aborted"), m(), p.forEach((y) => {
      y.status === "pending" && (y.status = "aborted");
    }), p = [];
  }
  function h(y, x) {
    x && (g = []), typeof y == "function" && g.push(y);
  }
  function v() {
    return {
      startTime: c,
      payload: e,
      status: a,
      queriesSent: u,
      queriesPending: p.length,
      subscribe: h,
      abort: f
    };
  }
  function w() {
    a = "failed", g.forEach((y) => {
      y(void 0, l);
    });
  }
  function O() {
    p.forEach((y) => {
      y.status === "pending" && (y.status = "aborted");
    }), p = [];
  }
  function Je(y, x, D) {
    const X = x !== "success";
    switch (p = p.filter((P) => P !== y), a) {
      case "pending":
        break;
      case "failed":
        if (X || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (x === "abort") {
      l = D, w();
      return;
    }
    if (X) {
      l = D, p.length || (i.length ? gt() : w());
      return;
    }
    if (m(), O(), !t.random) {
      const P = t.resources.indexOf(y.resource);
      P !== -1 && P !== t.index && (t.index = P);
    }
    a = "completed", g.forEach((P) => {
      P(D);
    });
  }
  function gt() {
    if (a !== "pending")
      return;
    m();
    const y = i.shift();
    if (y === void 0) {
      if (p.length) {
        d = setTimeout(() => {
          m(), a === "pending" && (O(), w());
        }, t.timeout);
        return;
      }
      w();
      return;
    }
    const x = {
      status: "pending",
      resource: y,
      callback: (D, X) => {
        Je(x, D, X);
      }
    };
    p.push(x), u++, d = setTimeout(gt, t.rotate), n(y, e, x.callback);
  }
  return setTimeout(gt), v;
}
function $e(t) {
  const e = {
    ...kr,
    ...t
  };
  let n = [];
  function o() {
    n = n.filter((c) => c().status === "pending");
  }
  function r(c, a, u) {
    const l = Nr(
      e,
      c,
      a,
      (d, p) => {
        o(), u && u(d, p);
      }
    );
    return n.push(l), l;
  }
  function s(c) {
    return n.find((a) => c(a)) || null;
  }
  return {
    query: r,
    find: s,
    setIndex: (c) => {
      e.index = c;
    },
    getIndex: () => e.index,
    cleanup: o
  };
}
function Yt() {
}
const mt = /* @__PURE__ */ Object.create(null);
function Ar(t) {
  if (!mt[t]) {
    const e = pt(t);
    if (!e)
      return;
    const n = $e(e), o = {
      config: e,
      redundancy: n
    };
    mt[t] = o;
  }
  return mt[t];
}
function ke(t, e, n) {
  let o, r;
  if (typeof t == "string") {
    const s = Et(t);
    if (!s)
      return n(void 0, 424), Yt;
    r = s.send;
    const i = Ar(t);
    i && (o = i.redundancy);
  } else {
    const s = Vt(t);
    if (s) {
      o = $e(s);
      const i = t.resources ? t.resources[0] : "", c = Et(i);
      c && (r = c.send);
    }
  }
  return !o || !r ? (n(void 0, 424), Yt) : o.query(e, r, n)().abort;
}
function Lr(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const o in _)
      je(o, (r) => {
        const s = r.data;
        return r.provider !== t.provider || s.prefix !== t.prefix || s.lastModified === e;
      });
  return !0;
}
function Mr(t, e) {
  Mt || Te();
  function n(o) {
    let r;
    if (!_[o] || !(r = Ie(o)))
      return;
    const s = Oe[o];
    let i;
    if (s.size)
      s.delete(i = Array.from(s).shift());
    else if (i = jt(r), !It(r, i + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / xe),
      provider: t.provider,
      data: e
    };
    return Ft(
      r,
      K + i.toString(),
      JSON.stringify(c)
    );
  }
  e.lastModified && !Lr(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function Xt() {
}
function Fr(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, Pr(t);
  }));
}
function Vr(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: o } = t, r = t.iconsToLoad;
    delete t.iconsToLoad;
    let s;
    if (!r || !(s = Et(n)))
      return;
    s.prepare(n, o, r).forEach((c) => {
      ke(n, c, (a) => {
        if (typeof a != "object")
          c.icons.forEach((u) => {
            t.missing.add(u);
          });
        else
          try {
            const u = Lt(
              t,
              a
            );
            if (!u.length)
              return;
            const l = t.pendingIcons;
            l && u.forEach((d) => {
              l.delete(d);
            }), Mr(t, a);
          } catch (u) {
            console.error(u);
          }
        Fr(t);
      });
    });
  }));
}
const Dr = (t) => {
  const n = T(
    t.provider,
    t.prefix
  ).pendingIcons;
  return !!(n && n.has(t.name));
}, Dt = (t, e) => {
  const n = $r(t, !0, ir()), o = Er(n);
  if (!o.pending.length) {
    let a = !0;
    return e && setTimeout(() => {
      a && e(
        o.loaded,
        o.missing,
        o.pending,
        Xt
      );
    }), () => {
      a = !1;
    };
  }
  const r = /* @__PURE__ */ Object.create(null), s = [];
  let i, c;
  return o.pending.forEach((a) => {
    const { provider: u, prefix: l } = a;
    if (l === c && u === i)
      return;
    i = u, c = l, s.push(T(u, l));
    const d = r[u] || (r[u] = /* @__PURE__ */ Object.create(null));
    d[l] || (d[l] = []);
  }), o.pending.forEach((a) => {
    const { provider: u, prefix: l, name: d } = a, p = T(u, l), g = p.pendingIcons || (p.pendingIcons = /* @__PURE__ */ new Set());
    g.has(d) || (g.add(d), r[u][l].push(d));
  }), s.forEach((a) => {
    const { provider: u, prefix: l } = a;
    r[u][l].length && Vr(a, r[u][l]);
  }), e ? _r(e, o, s) : Xt;
}, Br = (t) => new Promise((e, n) => {
  const o = typeof t == "string" ? V(t, !0) : t;
  if (!o) {
    n(t);
    return;
  }
  Dt([o || t], (r) => {
    if (r.length && o) {
      const s = J(o);
      if (s) {
        e({
          ...G,
          ...s
        });
        return;
      }
    }
    n(t);
  });
});
function Ne(t, e) {
  const n = {
    ...t
  };
  for (const o in e) {
    const r = e[o], s = typeof r;
    o in be ? (r === null || r && (s === "string" || s === "number")) && (n[o] = r) : s === typeof n[o] && (n[o] = o === "rotate" ? r % 4 : r);
  }
  return n;
}
const ht = {
  ...ve,
  inline: !1
}, bt = "iconify", Pt = "iconify-inline", E = "iconifyData" + Date.now();
let k = [];
function W(t) {
  for (let e = 0; e < k.length; e++) {
    const n = k[e];
    if ((typeof n.node == "function" ? n.node() : n.node) === t)
      return n;
  }
}
function Ae(t, e = !1) {
  let n = W(t);
  return n ? (n.temporary && (n.temporary = e), n) : (n = {
    node: t,
    temporary: e
  }, k.push(n), n);
}
function zr() {
  if (document.documentElement)
    return Ae(document.documentElement);
  k.push({
    node: () => document.documentElement
  });
}
function Rr(t) {
  k = k.filter((e) => t !== e && t !== (typeof e.node == "function" ? e.node() : e.node));
}
function Y() {
  return k;
}
function qr(t) {
  const e = document;
  e.readyState && e.readyState !== "loading" ? t() : e.addEventListener("DOMContentLoaded", t);
}
let U = null;
const Ur = {
  childList: !0,
  subtree: !0,
  attributes: !0
};
function Le(t) {
  if (!t.observer)
    return;
  const e = t.observer;
  e.pendingScan || (e.pendingScan = setTimeout(() => {
    delete e.pendingScan, U && U(t);
  }));
}
function Hr(t, e) {
  if (!t.observer)
    return;
  const n = t.observer;
  if (!n.pendingScan)
    for (let o = 0; o < e.length; o++) {
      const r = e[o];
      if (
        // Check for added nodes
        r.addedNodes && r.addedNodes.length > 0 || // Check for icon or placeholder with modified attributes
        r.type === "attributes" && r.target[E] !== void 0
      ) {
        n.paused || Le(t);
        return;
      }
    }
}
function Me(t, e) {
  t.observer.instance.observe(e, Ur);
}
function ut(t) {
  let e = t.observer;
  if (e && e.instance)
    return;
  const n = typeof t.node == "function" ? t.node() : t.node;
  !n || !window || (e || (e = {
    paused: 0
  }, t.observer = e), e.instance = new window.MutationObserver(Hr.bind(null, t)), Me(t, n), e.paused || Le(t));
}
function Zt() {
  Y().forEach(ut);
}
function Fe(t) {
  if (!t.observer)
    return;
  const e = t.observer;
  e.pendingScan && (clearTimeout(e.pendingScan), delete e.pendingScan), e.instance && (e.instance.disconnect(), delete e.instance);
}
function Qr(t) {
  const e = U !== null;
  if (U !== t && (U = t, e && Y().forEach(Fe)), e) {
    Zt();
    return;
  }
  qr(Zt);
}
function Ct(t) {
  (t ? [t] : Y()).forEach((e) => {
    if (!e.observer) {
      e.observer = {
        paused: 1
      };
      return;
    }
    const n = e.observer;
    if (n.paused++, n.paused > 1 || !n.instance)
      return;
    n.instance.disconnect();
  });
}
function Kr(t) {
  if (t) {
    const e = W(t);
    e && Ct(e);
  } else
    Ct();
}
function _t(t) {
  (t ? [t] : Y()).forEach((e) => {
    if (!e.observer) {
      ut(e);
      return;
    }
    const n = e.observer;
    if (n.paused && (n.paused--, !n.paused)) {
      const o = typeof e.node == "function" ? e.node() : e.node;
      if (o)
        n.instance ? Me(e, o) : ut(e);
      else
        return;
    }
  });
}
function Gr(t) {
  if (t) {
    const e = W(t);
    e && _t(e);
  } else
    _t();
}
function Ve(t, e = !1) {
  const n = Ae(t, e);
  return ut(n), n;
}
function De(t) {
  const e = W(t);
  e && (Fe(e), Rr(t));
}
function Jr(t, e) {
  if (t.name !== e.name || t.mode !== e.mode)
    return !0;
  const n = t.customisations, o = e.customisations;
  for (const r in ht)
    if (n[r] !== o[r])
      return !0;
  return !1;
}
function Wr(t, e = 0) {
  const n = t.replace(/^-?[0-9.]*/, "");
  function o(r) {
    for (; r < 0; )
      r += 4;
    return r % 4;
  }
  if (n === "") {
    const r = parseInt(t);
    return isNaN(r) ? 0 : o(r);
  } else if (n !== t) {
    let r = 0;
    switch (n) {
      case "%":
        r = 25;
        break;
      case "deg":
        r = 90;
    }
    if (r) {
      let s = parseFloat(t.slice(0, t.length - n.length));
      return isNaN(s) ? 0 : (s = s / r, s % 1 === 0 ? o(s) : 0);
    }
  }
  return e;
}
const Yr = /[\s,]+/;
function Xr(t, e) {
  e.split(Yr).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
const Zr = ["width", "height"], to = [
  "inline",
  "hFlip",
  "vFlip"
];
function eo(t, e) {
  return t === e || t === "true" ? !0 : t === "" || t === "false" ? !1 : null;
}
function no(t) {
  const e = t.getAttribute("data-icon"), n = typeof e == "string" && V(e, !0);
  if (!n)
    return null;
  const o = {
    ...ht,
    inline: t.classList && t.classList.contains(Pt)
  };
  Zr.forEach((c) => {
    const a = t.getAttribute("data-" + c);
    a && (o[c] = a);
  });
  const r = t.getAttribute("data-rotate");
  typeof r == "string" && (o.rotate = Wr(r));
  const s = t.getAttribute("data-flip");
  typeof s == "string" && Xr(o, s), to.forEach((c) => {
    const a = "data-" + c, u = eo(t.getAttribute(a), a);
    typeof u == "boolean" && (o[c] = u);
  });
  const i = t.getAttribute("data-mode");
  return {
    name: e,
    icon: n,
    customisations: o,
    mode: i
  };
}
const ro = "svg." + bt + ", i." + bt + ", span." + bt + ", i." + Pt + ", span." + Pt;
function oo(t) {
  const e = [];
  return t.querySelectorAll(ro).forEach((n) => {
    const o = n[E] || n.tagName.toLowerCase() !== "svg" ? no(n) : null;
    o && e.push({
      node: n,
      props: o
    });
  }), e;
}
function Be(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const o in e)
    n += " " + o + '="' + e[o] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
let H;
function so() {
  try {
    H = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (t) => t
    });
  } catch {
    H = null;
  }
}
function io(t) {
  return H === void 0 && so(), H ? H.createHTML(t) : t;
}
function ze(t) {
  const e = /* @__PURE__ */ new Set(["iconify"]);
  return ["provider", "prefix"].forEach((n) => {
    t[n] && e.add("iconify--" + t[n]);
  }), e;
}
function Re(t, e, n, o) {
  const r = t.classList;
  if (o) {
    const i = o.classList;
    Array.from(i).forEach((c) => {
      r.add(c);
    });
  }
  const s = [];
  return e.forEach((i) => {
    r.contains(i) ? n.has(i) && s.push(i) : (r.add(i), s.push(i));
  }), n.forEach((i) => {
    e.has(i) || r.remove(i);
  }), s;
}
function qe(t, e, n) {
  const o = t.style;
  (n || []).forEach((s) => {
    o.removeProperty(s);
  });
  const r = [];
  for (const s in e)
    o.getPropertyValue(s) || (r.push(s), o.setProperty(s, e[s]));
  return r;
}
function Ue(t, e, n) {
  let o;
  try {
    o = document.createElement("span");
  } catch {
    return t;
  }
  const r = e.customisations, s = ft(n, r), i = t[E], c = Be(we(s.body), {
    "aria-hidden": "true",
    role: "img",
    ...s.attributes
  });
  o.innerHTML = io(c);
  const a = o.childNodes[0], u = t.attributes;
  for (let m = 0; m < u.length; m++) {
    const f = u.item(m), h = f.name;
    h !== "class" && !a.hasAttribute(h) && a.setAttribute(h, f.value);
  }
  const l = ze(e.icon), d = Re(a, l, new Set(i && i.addedClasses), t), p = qe(a, r.inline ? {
    "vertical-align": "-0.125em"
  } : {}, i && i.addedStyles), g = {
    ...e,
    status: "loaded",
    addedClasses: d,
    addedStyles: p
  };
  return a[E] = g, t.parentNode && t.parentNode.replaceChild(a, t), a;
}
function co(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function ao(t) {
  return "data:image/svg+xml," + co(t);
}
function uo(t) {
  return 'url("' + ao(t) + '")';
}
const lo = {
  display: "inline-block"
}, $t = {
  "background-color": "currentColor"
}, He = {
  "background-color": "transparent"
}, te = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, ee = {
  "-webkit-mask": $t,
  mask: $t,
  background: He
};
for (const t in ee) {
  const e = ee[t];
  for (const n in te)
    e[t + "-" + n] = te[n];
}
function ne(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function fo(t, e, n, o) {
  const r = e.customisations, s = ft(n, r), i = s.attributes, c = t[E], a = Be(s.body, {
    ...i,
    width: n.width + "",
    height: n.height + ""
  }), u = ze(e.icon), l = Re(t, u, new Set(c && c.addedClasses)), p = {
    "--svg": uo(a),
    width: ne(i.width),
    height: ne(i.height),
    ...lo,
    ...o ? $t : He
  };
  r.inline && (p["vertical-align"] = "-0.125em");
  const g = qe(t, p, c && c.addedStyles), m = {
    ...e,
    status: "loaded",
    addedClasses: l,
    addedStyles: g
  };
  return t[E] = m, t;
}
let tt = !1;
function po() {
  tt || (tt = !0, setTimeout(() => {
    tt && (tt = !1, F());
  }));
}
function F(t, e = !1) {
  const n = /* @__PURE__ */ Object.create(null);
  function o(r, s) {
    const { provider: i, prefix: c, name: a } = r, u = T(i, c), l = u.icons[a];
    if (l)
      return {
        status: "loaded",
        icon: l
      };
    if (u.missing.has(a))
      return {
        status: "missing"
      };
    if (s && !Dr(r)) {
      const d = n[i] || (n[i] = /* @__PURE__ */ Object.create(null));
      (d[c] || (d[c] = /* @__PURE__ */ new Set())).add(a);
    }
    return {
      status: "loading"
    };
  }
  (t ? [t] : Y()).forEach((r) => {
    const s = typeof r.node == "function" ? r.node() : r.node;
    if (!s || !s.querySelectorAll)
      return;
    let i = !1, c = !1;
    function a(u, l, d) {
      if (c || (c = !0, Ct(r)), u.tagName.toUpperCase() !== "SVG") {
        const p = l.mode, g = p === "mask" || (p === "bg" ? !1 : p === "style" ? d.body.indexOf("currentColor") !== -1 : null);
        if (typeof g == "boolean") {
          fo(u, l, {
            ...G,
            ...d
          }, g);
          return;
        }
      }
      Ue(u, l, d);
    }
    oo(s).forEach(({ node: u, props: l }) => {
      const d = u[E];
      if (!d) {
        const { status: g, icon: m } = o(l.icon, !0);
        if (m) {
          a(u, l, m);
          return;
        }
        i = i || g === "loading", u[E] = {
          ...l,
          status: g
        };
        return;
      }
      let p;
      if (Jr(d, l)) {
        if (p = o(l.icon, d.name !== l.name), !p.icon) {
          i = i || p.status === "loading", Object.assign(d, {
            ...l,
            status: p.status
          });
          return;
        }
      } else {
        if (d.status !== "loading")
          return;
        if (p = o(l.icon, !1), !p.icon) {
          d.status = p.status;
          return;
        }
      }
      a(u, l, p.icon);
    }), r.temporary && !i ? De(s) : e && i ? Ve(s, !0) : c && r.observer && _t(r);
  });
  for (const r in n) {
    const s = n[r];
    for (const i in s) {
      const c = s[i];
      Dt(Array.from(c).map((a) => ({
        provider: r,
        prefix: i,
        name: a
      })), po);
    }
  }
}
function ho(t) {
  const e = W(t);
  e ? F(e) : F({
    node: t,
    temporary: !0
  }, !0);
}
function Qe(t, e, n = !1) {
  const o = J(t);
  if (!o)
    return null;
  const r = V(t), s = Ne(ht, e || {}), i = Ue(document.createElement("span"), {
    name: t,
    icon: r,
    customisations: s
  }, o);
  return n ? i.outerHTML : i;
}
function go() {
  return "3.1.1";
}
function yo(t, e) {
  return Qe(t, e, !1);
}
function mo(t, e) {
  return Qe(t, e, !0);
}
function bo(t, e) {
  const n = J(t);
  if (!n)
    return null;
  const o = Ne(ht, e || {});
  return ft(n, o);
}
function vo(t) {
  t ? ho(t) : F();
}
if (typeof document < "u" && typeof window < "u") {
  zr();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((o) => {
      try {
        // Check if item is an object and not null/array
        (typeof o != "object" || o === null || o instanceof Array || // Check for 'icons' and 'prefix'
        typeof o.icons != "object" || typeof o.prefix != "string" || // Add icon set
        !me(o)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  setTimeout(() => {
    Qr(F), F();
  });
}
function wo(t, e) {
  Ee(t, e !== !1);
}
function Oo(t) {
  Ee(t, !0);
}
Pe("", Tr);
if (typeof document < "u" && typeof window < "u") {
  Te();
  const t = window;
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (const n in e) {
        const o = "IconifyProviders[" + n + "] is invalid.";
        try {
          const r = e[n];
          if (typeof r != "object" || !r || r.resources === void 0)
            continue;
          Ce(n, r) || console.error(o);
        } catch {
          console.error(o);
        }
      }
  }
}
const So = {
  getAPIConfig: pt,
  setAPIModule: Pe,
  sendAPIQuery: ke,
  setFetch: vr,
  getFetch: wr,
  listAPIProviders: mr
}, Ke = {
  // IconifyAPIInternalFunctions
  _api: So,
  // IconifyAPIFunctions
  addAPIProvider: Ce,
  loadIcons: Dt,
  loadIcon: Br,
  // IconifyStorageFunctions
  iconExists: cr,
  getIcon: ar,
  listIcons: sr,
  addIcon: ye,
  addCollection: me,
  // IconifyBuilderFunctions
  replaceIDs: we,
  calculateSize: St,
  buildIcon: ft,
  // IconifyCommonFunctions
  getVersion: go,
  renderSVG: yo,
  renderHTML: mo,
  renderIcon: bo,
  scan: vo,
  observe: Ve,
  stopObserving: De,
  pauseObserver: Kr,
  resumeObserver: Gr,
  // IconifyBrowserCacheFunctions
  enableCache: wo,
  disableCache: Oo
};
try {
  self.Iconify === void 0 && (self.Iconify = Ke);
} catch {
}
const xo = {
  key: 0,
  "aria-hidden": "true"
}, Io = ["xlink:href"], jo = ["data-icon"], To = {
  name: "Icon"
}, Ge = /* @__PURE__ */ kt({
  ...To,
  props: {
    icon: nt.string,
    color: nt.string,
    size: nt.string
    // size: propTypes.number.def(16)
  },
  setup(t) {
    const e = t, n = re(null), o = z(() => e.icon.startsWith("svg-icon:")), r = z(() => I(o) ? `#icon-${e.icon.split("svg-icon:")[1]}` : e.icon), s = z(() => {
      const { color: c, size: a } = e;
      return {
        fontSize: `${a}px`,
        color: c
      };
    }), i = async (c) => {
      if (I(o))
        return;
      const a = I(n);
      if (!a || (await sn(), !c))
        return;
      const u = Ke.renderSVG(c, {});
      if (u)
        a.textContent = "", a.appendChild(u);
      else {
        const l = document.createElement("span");
        l.className = "iconify", l.dataset.icon = c, a.textContent = "", a.appendChild(l);
      }
    };
    return tn(
      () => e.icon,
      (c) => {
        i(c);
      }
    ), (c, a) => (et(), en(I(_n), {
      size: t.size,
      color: t.color
    }, {
      default: nn(() => [
        I(o) ? (et(), vt("svg", xo, [
          Bt("use", { "xlink:href": I(r) }, null, 8, Io)
        ])) : (et(), vt("span", {
          key: 1,
          ref_key: "elRef",
          ref: n,
          class: rn(c.$attrs.class),
          style: on(I(s))
        }, [
          Bt("span", {
            class: "iconify",
            "data-icon": I(r)
          }, null, 8, jo)
        ], 6))
      ]),
      _: 1
    }, 8, ["size", "color"]));
  }
});
function Eo(t, e) {
  return t.install = (n) => {
    n.component(e, t);
  }, t;
}
const Po = [Ge], $o = Eo(Ge, "Icon"), ko = {
  install(t) {
    Po.forEach((e) => {
      t.component(e.name, e);
    });
  }
};
export {
  $o as Icon,
  ko as default
};
