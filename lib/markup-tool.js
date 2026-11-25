import './lib.css';var Cg = Object.defineProperty;
var ou = (c) => {
  throw TypeError(c);
};
var Pg = (c, t, e) => t in c ? Cg(c, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[t] = e;
var W = (c, t, e) => Pg(c, typeof t != "symbol" ? t + "" : t, e), sh = (c, t, e) => t.has(c) || ou("Cannot " + e);
var a = (c, t, e) => (sh(c, t, "read from private field"), e ? e.call(c) : t.get(c)), v = (c, t, e) => t.has(c) ? ou("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(c) : t.set(c, e), m = (c, t, e, s) => (sh(c, t, "write to private field"), s ? s.call(c, e) : t.set(c, e), e), b = (c, t, e) => (sh(c, t, "access private method"), e);
var ge = (c, t, e, s) => ({
  set _(i) {
    m(c, t, i, e);
  },
  get _() {
    return a(c, t, s);
  }
});
import { jsx as ot, jsxs as io } from "react/jsx-runtime";
import * as wr from "react";
import { useRef as gs, useState as hh, useCallback as js, useEffect as St, createContext as Uu, useReducer as Rg, forwardRef as Lg, useImperativeHandle as kg, useMemo as Ge, useContext as $u, useLayoutEffect as Mg } from "react";
function Vu(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Wu = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(c) {
  (function() {
    var t = {}.hasOwnProperty;
    function e() {
      for (var n = "", r = 0; r < arguments.length; r++) {
        var o = arguments[r];
        o && (n = i(n, s(o)));
      }
      return n;
    }
    function s(n) {
      if (typeof n == "string" || typeof n == "number")
        return n;
      if (typeof n != "object")
        return "";
      if (Array.isArray(n))
        return e.apply(null, n);
      if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]"))
        return n.toString();
      var r = "";
      for (var o in n)
        t.call(n, o) && n[o] && (r = i(r, o));
      return r;
    }
    function i(n, r) {
      return r ? n ? n + " " + r : n + r : n;
    }
    c.exports ? (e.default = e, c.exports = e) : window.classNames = e;
  })();
})(Wu);
var Ig = Wu.exports;
const on = /* @__PURE__ */ Vu(Ig);
function Fg(c) {
  return Object.prototype.toString.call(c) === "[object Object]";
}
function lu(c) {
  return Fg(c) || Array.isArray(c);
}
function Dg() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Id(c, t) {
  const e = Object.keys(c), s = Object.keys(t);
  if (e.length !== s.length) return !1;
  const i = JSON.stringify(Object.keys(c.breakpoints || {})), n = JSON.stringify(Object.keys(t.breakpoints || {}));
  return i !== n ? !1 : e.every((r) => {
    const o = c[r], l = t[r];
    return typeof o == "function" ? `${o}` == `${l}` : !lu(o) || !lu(l) ? o === l : Id(o, l);
  });
}
function cu(c) {
  return c.concat().sort((t, e) => t.name > e.name ? 1 : -1).map((t) => t.options);
}
function Og(c, t) {
  if (c.length !== t.length) return !1;
  const e = cu(c), s = cu(t);
  return e.every((i, n) => {
    const r = s[n];
    return Id(i, r);
  });
}
function Fd(c) {
  return typeof c == "number";
}
function dh(c) {
  return typeof c == "string";
}
function jc(c) {
  return typeof c == "boolean";
}
function hu(c) {
  return Object.prototype.toString.call(c) === "[object Object]";
}
function Mt(c) {
  return Math.abs(c);
}
function Dd(c) {
  return Math.sign(c);
}
function no(c, t) {
  return Mt(c - t);
}
function Ng(c, t) {
  if (c === 0 || t === 0 || Mt(c) <= Mt(t)) return 0;
  const e = no(Mt(c), Mt(t));
  return Mt(e / c);
}
function Hg(c) {
  return Math.round(c * 100) / 100;
}
function lo(c) {
  return co(c).map(Number);
}
function bs(c) {
  return c[Pl(c)];
}
function Pl(c) {
  return Math.max(0, c.length - 1);
}
function Od(c, t) {
  return t === Pl(c);
}
function du(c, t = 0) {
  return Array.from(Array(c), (e, s) => t + s);
}
function co(c) {
  return Object.keys(c);
}
function qu(c, t) {
  return [c, t].reduce((e, s) => (co(s).forEach((i) => {
    const n = e[i], r = s[i], o = hu(n) && hu(r);
    e[i] = o ? qu(n, r) : r;
  }), e), {});
}
function uh(c, t) {
  return typeof t.MouseEvent < "u" && c instanceof t.MouseEvent;
}
function Bg(c, t) {
  const e = {
    start: s,
    center: i,
    end: n
  };
  function s() {
    return 0;
  }
  function i(l) {
    return n(l) / 2;
  }
  function n(l) {
    return t - l;
  }
  function r(l, h) {
    return dh(c) ? e[c](l) : c(t, l, h);
  }
  return {
    measure: r
  };
}
function ho() {
  let c = [];
  function t(i, n, r, o = {
    passive: !0
  }) {
    let l;
    if ("addEventListener" in i)
      i.addEventListener(n, r, o), l = () => i.removeEventListener(n, r, o);
    else {
      const h = i;
      h.addListener(r), l = () => h.removeListener(r);
    }
    return c.push(l), s;
  }
  function e() {
    c = c.filter((i) => i());
  }
  const s = {
    add: t,
    clear: e
  };
  return s;
}
function jg(c, t, e, s) {
  const i = ho(), n = 1e3 / 60;
  let r = null, o = 0, l = 0;
  function h() {
    i.add(c, "visibilitychange", () => {
      c.hidden && g();
    });
  }
  function d() {
    p(), i.clear();
  }
  function u(_) {
    if (!l) return;
    r || (r = _, e(), e());
    const y = _ - r;
    for (r = _, o += y; o >= n; )
      e(), o -= n;
    const w = o / n;
    s(w), l && (l = t.requestAnimationFrame(u));
  }
  function f() {
    l || (l = t.requestAnimationFrame(u));
  }
  function p() {
    t.cancelAnimationFrame(l), r = null, o = 0, l = 0;
  }
  function g() {
    r = null, o = 0;
  }
  return {
    init: h,
    destroy: d,
    start: f,
    stop: p,
    update: e,
    render: s
  };
}
function zg(c, t) {
  const e = t === "rtl", s = c === "y", i = s ? "y" : "x", n = s ? "x" : "y", r = !s && e ? -1 : 1, o = d(), l = u();
  function h(g) {
    const {
      height: A,
      width: _
    } = g;
    return s ? A : _;
  }
  function d() {
    return s ? "top" : e ? "right" : "left";
  }
  function u() {
    return s ? "bottom" : e ? "left" : "right";
  }
  function f(g) {
    return g * r;
  }
  return {
    scroll: i,
    cross: n,
    startEdge: o,
    endEdge: l,
    measureSize: h,
    direction: f
  };
}
function dr(c = 0, t = 0) {
  const e = Mt(c - t);
  function s(h) {
    return h < c;
  }
  function i(h) {
    return h > t;
  }
  function n(h) {
    return s(h) || i(h);
  }
  function r(h) {
    return n(h) ? s(h) ? c : t : h;
  }
  function o(h) {
    return e ? h - e * Math.ceil((h - t) / e) : h;
  }
  return {
    length: e,
    max: t,
    min: c,
    constrain: r,
    reachedAny: n,
    reachedMax: i,
    reachedMin: s,
    removeOffset: o
  };
}
function Xu(c, t, e) {
  const {
    constrain: s
  } = dr(0, c), i = c + 1;
  let n = r(t);
  function r(f) {
    return e ? Mt((i + f) % i) : s(f);
  }
  function o() {
    return n;
  }
  function l(f) {
    return n = r(f), u;
  }
  function h(f) {
    return d().set(o() + f);
  }
  function d() {
    return Xu(c, o(), e);
  }
  const u = {
    get: o,
    set: l,
    add: h,
    clone: d
  };
  return u;
}
function Gg(c, t, e, s, i, n, r, o, l, h, d, u, f, p, g, A, _, y, w) {
  const {
    cross: E,
    direction: S
  } = c, T = ["INPUT", "SELECT", "TEXTAREA"], x = {
    passive: !1
  }, C = ho(), P = ho(), R = dr(50, 225).constrain(p.measure(20)), k = {
    mouse: 300,
    touch: 400
  }, L = {
    mouse: 500,
    touch: 600
  }, U = g ? 43 : 25;
  let j = !1, H = 0, $ = 0, V = !1, F = !1, N = !1, _t = !1;
  function Dt(O) {
    if (!w) return;
    function G(at) {
      (jc(w) || w(O, at)) && yt(at);
    }
    const Q = t;
    C.add(Q, "dragstart", (at) => at.preventDefault(), x).add(Q, "touchmove", () => {
    }, x).add(Q, "touchend", () => {
    }).add(Q, "touchstart", G).add(Q, "mousedown", G).add(Q, "touchcancel", wt).add(Q, "contextmenu", wt).add(Q, "click", Ot, !0);
  }
  function At() {
    C.clear(), P.clear();
  }
  function ht() {
    const O = _t ? e : t;
    P.add(O, "touchmove", X, x).add(O, "touchend", wt).add(O, "mousemove", X, x).add(O, "mouseup", wt);
  }
  function rt(O) {
    const G = O.nodeName || "";
    return T.includes(G);
  }
  function Tt() {
    return (g ? L : k)[_t ? "mouse" : "touch"];
  }
  function te(O, G) {
    const Q = u.add(Dd(O) * -1), at = d.byDistance(O, !g).distance;
    return g || Mt(O) < R ? at : _ && G ? at * 0.5 : d.byIndex(Q.get(), 0).distance;
  }
  function yt(O) {
    const G = uh(O, s);
    _t = G, N = g && G && !O.buttons && j, j = no(i.get(), r.get()) >= 2, !(G && O.button !== 0) && (rt(O.target) || (V = !0, n.pointerDown(O), h.useFriction(0).useDuration(0), i.set(r), ht(), H = n.readPoint(O), $ = n.readPoint(O, E), f.emit("pointerDown")));
  }
  function X(O) {
    if (!uh(O, s) && O.touches.length >= 2) return wt(O);
    const Q = n.readPoint(O), at = n.readPoint(O, E), ut = no(Q, H), ae = no(at, $);
    if (!F && !_t && (!O.cancelable || (F = ut > ae, !F)))
      return wt(O);
    const Le = n.pointerMove(O);
    ut > A && (N = !0), h.useFriction(0.3).useDuration(0.75), o.start(), i.add(S(Le)), O.preventDefault();
  }
  function wt(O) {
    const Q = d.byDistance(0, !1).index !== u.get(), at = n.pointerUp(O) * Tt(), ut = te(S(at), Q), ae = Ng(at, ut), Le = U - 10 * ae, As = y + ae / 50;
    F = !1, V = !1, P.clear(), h.useDuration(Le).useFriction(As), l.distance(ut, !g), _t = !1, f.emit("pointerUp");
  }
  function Ot(O) {
    N && (O.stopPropagation(), O.preventDefault(), N = !1);
  }
  function st() {
    return V;
  }
  return {
    init: Dt,
    destroy: At,
    pointerDown: st
  };
}
function Ug(c, t) {
  let s, i;
  function n(u) {
    return u.timeStamp;
  }
  function r(u, f) {
    const g = `client${(f || c.scroll) === "x" ? "X" : "Y"}`;
    return (uh(u, t) ? u : u.touches[0])[g];
  }
  function o(u) {
    return s = u, i = u, r(u);
  }
  function l(u) {
    const f = r(u) - r(i), p = n(u) - n(s) > 170;
    return i = u, p && (s = u), f;
  }
  function h(u) {
    if (!s || !i) return 0;
    const f = r(i) - r(s), p = n(u) - n(s), g = n(u) - n(i) > 170, A = f / p;
    return p && !g && Mt(A) > 0.1 ? A : 0;
  }
  return {
    pointerDown: o,
    pointerMove: l,
    pointerUp: h,
    readPoint: r
  };
}
function $g() {
  function c(e) {
    const {
      offsetTop: s,
      offsetLeft: i,
      offsetWidth: n,
      offsetHeight: r
    } = e;
    return {
      top: s,
      right: i + n,
      bottom: s + r,
      left: i,
      width: n,
      height: r
    };
  }
  return {
    measure: c
  };
}
function Vg(c) {
  function t(s) {
    return c * (s / 100);
  }
  return {
    measure: t
  };
}
function Wg(c, t, e, s, i, n, r) {
  const o = [c].concat(s);
  let l, h, d = [], u = !1;
  function f(_) {
    return i.measureSize(r.measure(_));
  }
  function p(_) {
    if (!n) return;
    h = f(c), d = s.map(f);
    function y(w) {
      for (const E of w) {
        if (u) return;
        const S = E.target === c, T = s.indexOf(E.target), x = S ? h : d[T], C = f(S ? c : s[T]);
        if (Mt(C - x) >= 0.5) {
          _.reInit(), t.emit("resize");
          break;
        }
      }
    }
    l = new ResizeObserver((w) => {
      (jc(n) || n(_, w)) && y(w);
    }), e.requestAnimationFrame(() => {
      o.forEach((w) => l.observe(w));
    });
  }
  function g() {
    u = !0, l && l.disconnect();
  }
  return {
    init: p,
    destroy: g
  };
}
function qg(c, t, e, s, i, n) {
  let r = 0, o = 0, l = i, h = n, d = c.get(), u = 0;
  function f() {
    const x = s.get() - c.get(), C = !l;
    let P = 0;
    return C ? (r = 0, e.set(s), c.set(s), P = x) : (e.set(c), r += x / l, r *= h, d += r, c.add(r), P = d - u), o = Dd(P), u = d, T;
  }
  function p() {
    const x = s.get() - t.get();
    return Mt(x) < 1e-3;
  }
  function g() {
    return l;
  }
  function A() {
    return o;
  }
  function _() {
    return r;
  }
  function y() {
    return E(i);
  }
  function w() {
    return S(n);
  }
  function E(x) {
    return l = x, T;
  }
  function S(x) {
    return h = x, T;
  }
  const T = {
    direction: A,
    duration: g,
    velocity: _,
    seek: f,
    settled: p,
    useBaseFriction: w,
    useBaseDuration: y,
    useFriction: S,
    useDuration: E
  };
  return T;
}
function Xg(c, t, e, s, i) {
  const n = i.measure(10), r = i.measure(50), o = dr(0.1, 0.99);
  let l = !1;
  function h() {
    return !(l || !c.reachedAny(e.get()) || !c.reachedAny(t.get()));
  }
  function d(p) {
    if (!h()) return;
    const g = c.reachedMin(t.get()) ? "min" : "max", A = Mt(c[g] - t.get()), _ = e.get() - t.get(), y = o.constrain(A / r);
    e.subtract(_ * y), !p && Mt(_) < n && (e.set(c.constrain(e.get())), s.useDuration(25).useBaseFriction());
  }
  function u(p) {
    l = !p;
  }
  return {
    shouldConstrain: h,
    constrain: d,
    toggleActive: u
  };
}
function Yg(c, t, e, s, i) {
  const n = dr(-t + c, 0), r = u(), o = d(), l = f();
  function h(g, A) {
    return no(g, A) <= 1;
  }
  function d() {
    const g = r[0], A = bs(r), _ = r.lastIndexOf(g), y = r.indexOf(A) + 1;
    return dr(_, y);
  }
  function u() {
    return e.map((g, A) => {
      const {
        min: _,
        max: y
      } = n, w = n.constrain(g), E = !A, S = Od(e, A);
      return E ? y : S || h(_, w) ? _ : h(y, w) ? y : w;
    }).map((g) => parseFloat(g.toFixed(3)));
  }
  function f() {
    if (t <= c + i) return [n.max];
    if (s === "keepSnaps") return r;
    const {
      min: g,
      max: A
    } = o;
    return r.slice(g, A);
  }
  return {
    snapsContained: l,
    scrollContainLimit: o
  };
}
function Kg(c, t, e) {
  const s = t[0], i = e ? s - c : bs(t);
  return {
    limit: dr(i, s)
  };
}
function Qg(c, t, e, s) {
  const n = t.min + 0.1, r = t.max + 0.1, {
    reachedMin: o,
    reachedMax: l
  } = dr(n, r);
  function h(f) {
    return f === 1 ? l(e.get()) : f === -1 ? o(e.get()) : !1;
  }
  function d(f) {
    if (!h(f)) return;
    const p = c * (f * -1);
    s.forEach((g) => g.add(p));
  }
  return {
    loop: d
  };
}
function Jg(c) {
  const {
    max: t,
    length: e
  } = c;
  function s(n) {
    const r = n - t;
    return e ? r / -e : 0;
  }
  return {
    get: s
  };
}
function Zg(c, t, e, s, i) {
  const {
    startEdge: n,
    endEdge: r
  } = c, {
    groupSlides: o
  } = i, l = u().map(t.measure), h = f(), d = p();
  function u() {
    return o(s).map((A) => bs(A)[r] - A[0][n]).map(Mt);
  }
  function f() {
    return s.map((A) => e[n] - A[n]).map((A) => -Mt(A));
  }
  function p() {
    return o(h).map((A) => A[0]).map((A, _) => A + l[_]);
  }
  return {
    snaps: h,
    snapsAligned: d
  };
}
function tm(c, t, e, s, i, n) {
  const {
    groupSlides: r
  } = i, {
    min: o,
    max: l
  } = s, h = d();
  function d() {
    const f = r(n), p = !c || t === "keepSnaps";
    return e.length === 1 ? [n] : p ? f : f.slice(o, l).map((g, A, _) => {
      const y = !A, w = Od(_, A);
      if (y) {
        const E = bs(_[0]) + 1;
        return du(E);
      }
      if (w) {
        const E = Pl(n) - bs(_)[0] + 1;
        return du(E, bs(_)[0]);
      }
      return g;
    });
  }
  return {
    slideRegistry: h
  };
}
function em(c, t, e, s, i) {
  const {
    reachedAny: n,
    removeOffset: r,
    constrain: o
  } = s;
  function l(g) {
    return g.concat().sort((A, _) => Mt(A) - Mt(_))[0];
  }
  function h(g) {
    const A = c ? r(g) : o(g), _ = t.map((w, E) => ({
      diff: d(w - A, 0),
      index: E
    })).sort((w, E) => Mt(w.diff) - Mt(E.diff)), {
      index: y
    } = _[0];
    return {
      index: y,
      distance: A
    };
  }
  function d(g, A) {
    const _ = [g, g + e, g - e];
    if (!c) return g;
    if (!A) return l(_);
    const y = _.filter((w) => Dd(w) === A);
    return y.length ? l(y) : bs(_) - e;
  }
  function u(g, A) {
    const _ = t[g] - i.get(), y = d(_, A);
    return {
      index: g,
      distance: y
    };
  }
  function f(g, A) {
    const _ = i.get() + g, {
      index: y,
      distance: w
    } = h(_), E = !c && n(_);
    if (!A || E) return {
      index: y,
      distance: g
    };
    const S = t[y] - w, T = g + d(S, 0);
    return {
      index: y,
      distance: T
    };
  }
  return {
    byDistance: f,
    byIndex: u,
    shortcut: d
  };
}
function sm(c, t, e, s, i, n, r) {
  function o(u) {
    const f = u.distance, p = u.index !== t.get();
    n.add(f), f && (s.duration() ? c.start() : (c.update(), c.render(1), c.update())), p && (e.set(t.get()), t.set(u.index), r.emit("select"));
  }
  function l(u, f) {
    const p = i.byDistance(u, f);
    o(p);
  }
  function h(u, f) {
    const p = t.clone().set(u), g = i.byIndex(p.get(), f);
    o(g);
  }
  return {
    distance: l,
    index: h
  };
}
function im(c, t, e, s, i, n, r, o) {
  const l = {
    passive: !0,
    capture: !0
  };
  let h = 0;
  function d(p) {
    if (!o) return;
    function g(A) {
      if ((/* @__PURE__ */ new Date()).getTime() - h > 10) return;
      r.emit("slideFocusStart"), c.scrollLeft = 0;
      const w = e.findIndex((E) => E.includes(A));
      Fd(w) && (i.useDuration(0), s.index(w, 0), r.emit("slideFocus"));
    }
    n.add(document, "keydown", u, !1), t.forEach((A, _) => {
      n.add(A, "focus", (y) => {
        (jc(o) || o(p, y)) && g(_);
      }, l);
    });
  }
  function u(p) {
    p.code === "Tab" && (h = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: d
  };
}
function ja(c) {
  let t = c;
  function e() {
    return t;
  }
  function s(l) {
    t = r(l);
  }
  function i(l) {
    t += r(l);
  }
  function n(l) {
    t -= r(l);
  }
  function r(l) {
    return Fd(l) ? l : l.get();
  }
  return {
    get: e,
    set: s,
    add: i,
    subtract: n
  };
}
function Yu(c, t) {
  const e = c.scroll === "x" ? r : o, s = t.style;
  let i = null, n = !1;
  function r(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function o(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function l(f) {
    if (n) return;
    const p = Hg(c.direction(f));
    p !== i && (s.transform = e(p), i = p);
  }
  function h(f) {
    n = !f;
  }
  function d() {
    n || (s.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: d,
    to: l,
    toggleActive: h
  };
}
function nm(c, t, e, s, i, n, r, o, l) {
  const d = lo(i), u = lo(i).reverse(), f = y().concat(w());
  function p(C, P) {
    return C.reduce((R, k) => R - i[k], P);
  }
  function g(C, P) {
    return C.reduce((R, k) => p(R, P) > 0 ? R.concat([k]) : R, []);
  }
  function A(C) {
    return n.map((P, R) => ({
      start: P - s[R] + 0.5 + C,
      end: P + t - 0.5 + C
    }));
  }
  function _(C, P, R) {
    const k = A(P);
    return C.map((L) => {
      const U = R ? 0 : -e, j = R ? e : 0, H = R ? "end" : "start", $ = k[L][H];
      return {
        index: L,
        loopPoint: $,
        slideLocation: ja(-1),
        translate: Yu(c, l[L]),
        target: () => o.get() > $ ? U : j
      };
    });
  }
  function y() {
    const C = r[0], P = g(u, C);
    return _(P, e, !1);
  }
  function w() {
    const C = t - r[0] - 1, P = g(d, C);
    return _(P, -e, !0);
  }
  function E() {
    return f.every(({
      index: C
    }) => {
      const P = d.filter((R) => R !== C);
      return p(P, t) <= 0.1;
    });
  }
  function S() {
    f.forEach((C) => {
      const {
        target: P,
        translate: R,
        slideLocation: k
      } = C, L = P();
      L !== k.get() && (R.to(L), k.set(L));
    });
  }
  function T() {
    f.forEach((C) => C.translate.clear());
  }
  return {
    canLoop: E,
    clear: T,
    loop: S,
    loopPoints: f
  };
}
function rm(c, t, e) {
  let s, i = !1;
  function n(l) {
    if (!e) return;
    function h(d) {
      for (const u of d)
        if (u.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    s = new MutationObserver((d) => {
      i || (jc(e) || e(l, d)) && h(d);
    }), s.observe(c, {
      childList: !0
    });
  }
  function r() {
    s && s.disconnect(), i = !0;
  }
  return {
    init: n,
    destroy: r
  };
}
function am(c, t, e, s) {
  const i = {};
  let n = null, r = null, o, l = !1;
  function h() {
    o = new IntersectionObserver((g) => {
      l || (g.forEach((A) => {
        const _ = t.indexOf(A.target);
        i[_] = A;
      }), n = null, r = null, e.emit("slidesInView"));
    }, {
      root: c.parentElement,
      threshold: s
    }), t.forEach((g) => o.observe(g));
  }
  function d() {
    o && o.disconnect(), l = !0;
  }
  function u(g) {
    return co(i).reduce((A, _) => {
      const y = parseInt(_), {
        isIntersecting: w
      } = i[y];
      return (g && w || !g && !w) && A.push(y), A;
    }, []);
  }
  function f(g = !0) {
    if (g && n) return n;
    if (!g && r) return r;
    const A = u(g);
    return g && (n = A), g || (r = A), A;
  }
  return {
    init: h,
    destroy: d,
    get: f
  };
}
function om(c, t, e, s, i, n) {
  const {
    measureSize: r,
    startEdge: o,
    endEdge: l
  } = c, h = e[0] && i, d = g(), u = A(), f = e.map(r), p = _();
  function g() {
    if (!h) return 0;
    const w = e[0];
    return Mt(t[o] - w[o]);
  }
  function A() {
    if (!h) return 0;
    const w = n.getComputedStyle(bs(s));
    return parseFloat(w.getPropertyValue(`margin-${l}`));
  }
  function _() {
    return e.map((w, E, S) => {
      const T = !E, x = Od(S, E);
      return T ? f[E] + d : x ? f[E] + u : S[E + 1][o] - w[o];
    }).map(Mt);
  }
  return {
    slideSizes: f,
    slideSizesWithGaps: p,
    startGap: d,
    endGap: u
  };
}
function lm(c, t, e, s, i, n, r, o, l) {
  const {
    startEdge: h,
    endEdge: d,
    direction: u
  } = c, f = Fd(e);
  function p(y, w) {
    return lo(y).filter((E) => E % w === 0).map((E) => y.slice(E, E + w));
  }
  function g(y) {
    return y.length ? lo(y).reduce((w, E, S) => {
      const T = bs(w) || 0, x = T === 0, C = E === Pl(y), P = i[h] - n[T][h], R = i[h] - n[E][d], k = !s && x ? u(r) : 0, L = !s && C ? u(o) : 0, U = Mt(R - L - (P + k));
      return S && U > t + l && w.push(E), C && w.push(y.length), w;
    }, []).map((w, E, S) => {
      const T = Math.max(S[E - 1] || 0);
      return y.slice(T, w);
    }) : [];
  }
  function A(y) {
    return f ? p(y, e) : g(y);
  }
  return {
    groupSlides: A
  };
}
function cm(c, t, e, s, i, n, r) {
  const {
    align: o,
    axis: l,
    direction: h,
    startIndex: d,
    loop: u,
    duration: f,
    dragFree: p,
    dragThreshold: g,
    inViewThreshold: A,
    slidesToScroll: _,
    skipSnaps: y,
    containScroll: w,
    watchResize: E,
    watchSlides: S,
    watchDrag: T,
    watchFocus: x
  } = n, C = 2, P = $g(), R = P.measure(t), k = e.map(P.measure), L = zg(l, h), U = L.measureSize(R), j = Vg(U), H = Bg(o, U), $ = !u && !!w, V = u || !!w, {
    slideSizes: F,
    slideSizesWithGaps: N,
    startGap: _t,
    endGap: Dt
  } = om(L, R, k, e, V, i), At = lm(L, U, _, u, R, k, _t, Dt, C), {
    snaps: ht,
    snapsAligned: rt
  } = Zg(L, H, R, k, At), Tt = -bs(ht) + bs(N), {
    snapsContained: te,
    scrollContainLimit: yt
  } = Yg(U, Tt, rt, w, C), X = $ ? te : rt, {
    limit: wt
  } = Kg(Tt, X, u), Ot = Xu(Pl(X), d, u), st = Ot.clone(), dt = lo(e), O = ({
    dragHandler: vs,
    scrollBody: th,
    scrollBounds: eh,
    options: {
      loop: Dl
    }
  }) => {
    Dl || eh.constrain(vs.pointerDown()), th.seek();
  }, G = ({
    scrollBody: vs,
    translate: th,
    location: eh,
    offsetLocation: Dl,
    previousLocation: yg,
    scrollLooper: vg,
    slideLooper: _g,
    dragHandler: wg,
    animation: Eg,
    eventHandler: eu,
    scrollBounds: Sg,
    options: {
      loop: su
    }
  }, iu) => {
    const nu = vs.settled(), xg = !Sg.shouldConstrain(), ru = su ? nu : nu && xg, au = ru && !wg.pointerDown();
    au && Eg.stop();
    const Tg = eh.get() * iu + yg.get() * (1 - iu);
    Dl.set(Tg), su && (vg.loop(vs.direction()), _g.loop()), th.to(Dl.get()), au && eu.emit("settle"), ru || eu.emit("scroll");
  }, Q = jg(s, i, () => O(Si), (vs) => G(Si, vs)), at = 0.68, ut = X[Ot.get()], ae = ja(ut), Le = ja(ut), As = ja(ut), zs = ja(ut), ys = qg(ae, As, Le, zs, f, at), Da = em(u, X, Tt, wt, zs), Oa = sm(Q, Ot, st, ys, Da, zs, r), Il = Jg(wt), Fl = ho(), Zc = am(t, e, r, A), {
    slideRegistry: Gs
  } = tm($, w, X, yt, At, dt), _r = im(c, e, Gs, Oa, ys, Fl, r, x), Si = {
    ownerDocument: s,
    ownerWindow: i,
    eventHandler: r,
    containerRect: R,
    slideRects: k,
    animation: Q,
    axis: L,
    dragHandler: Gg(L, c, s, i, zs, Ug(L, i), ae, Q, Oa, ys, Da, Ot, r, j, p, g, y, at, T),
    eventStore: Fl,
    percentOfView: j,
    index: Ot,
    indexPrevious: st,
    limit: wt,
    location: ae,
    offsetLocation: As,
    previousLocation: Le,
    options: n,
    resizeHandler: Wg(t, r, i, e, L, E, P),
    scrollBody: ys,
    scrollBounds: Xg(wt, As, zs, ys, j),
    scrollLooper: Qg(Tt, wt, As, [ae, As, Le, zs]),
    scrollProgress: Il,
    scrollSnapList: X.map(Il.get),
    scrollSnaps: X,
    scrollTarget: Da,
    scrollTo: Oa,
    slideLooper: nm(L, U, Tt, F, N, ht, X, As, e),
    slideFocus: _r,
    slidesHandler: rm(t, r, S),
    slidesInView: Zc,
    slideIndexes: dt,
    slideRegistry: Gs,
    slidesToScroll: At,
    target: zs,
    translate: Yu(L, t)
  };
  return Si;
}
function hm() {
  let c = {}, t;
  function e(h) {
    t = h;
  }
  function s(h) {
    return c[h] || [];
  }
  function i(h) {
    return s(h).forEach((d) => d(t, h)), l;
  }
  function n(h, d) {
    return c[h] = s(h).concat([d]), l;
  }
  function r(h, d) {
    return c[h] = s(h).filter((u) => u !== d), l;
  }
  function o() {
    c = {};
  }
  const l = {
    init: e,
    emit: i,
    off: r,
    on: n,
    clear: o
  };
  return l;
}
const dm = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function um(c) {
  function t(n, r) {
    return qu(n, r || {});
  }
  function e(n) {
    const r = n.breakpoints || {}, o = co(r).filter((l) => c.matchMedia(l).matches).map((l) => r[l]).reduce((l, h) => t(l, h), {});
    return t(n, o);
  }
  function s(n) {
    return n.map((r) => co(r.breakpoints || {})).reduce((r, o) => r.concat(o), []).map(c.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: e,
    optionsMediaQueries: s
  };
}
function fm(c) {
  let t = [];
  function e(n, r) {
    return t = r.filter(({
      options: o
    }) => c.optionsAtMedia(o).active !== !1), t.forEach((o) => o.init(n, c)), r.reduce((o, l) => Object.assign(o, {
      [l.name]: l
    }), {});
  }
  function s() {
    t = t.filter((n) => n.destroy());
  }
  return {
    init: e,
    destroy: s
  };
}
function bc(c, t, e) {
  const s = c.ownerDocument, i = s.defaultView, n = um(i), r = fm(n), o = ho(), l = hm(), {
    mergeOptions: h,
    optionsAtMedia: d,
    optionsMediaQueries: u
  } = n, {
    on: f,
    off: p,
    emit: g
  } = l, A = L;
  let _ = !1, y, w = h(dm, bc.globalOptions), E = h(w), S = [], T, x, C;
  function P() {
    const {
      container: dt,
      slides: O
    } = E;
    x = (dh(dt) ? c.querySelector(dt) : dt) || c.children[0];
    const Q = dh(O) ? x.querySelectorAll(O) : O;
    C = [].slice.call(Q || x.children);
  }
  function R(dt) {
    const O = cm(c, x, C, s, i, dt, l);
    if (dt.loop && !O.slideLooper.canLoop()) {
      const G = Object.assign({}, dt, {
        loop: !1
      });
      return R(G);
    }
    return O;
  }
  function k(dt, O) {
    _ || (w = h(w, dt), E = d(w), S = O || S, P(), y = R(E), u([w, ...S.map(({
      options: G
    }) => G)]).forEach((G) => o.add(G, "change", L)), E.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(st), y.eventHandler.init(st), y.resizeHandler.init(st), y.slidesHandler.init(st), y.options.loop && y.slideLooper.loop(), x.offsetParent && C.length && y.dragHandler.init(st), T = r.init(st, S)));
  }
  function L(dt, O) {
    const G = At();
    U(), k(h({
      startIndex: G
    }, dt), O), l.emit("reInit");
  }
  function U() {
    y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), r.destroy(), o.clear();
  }
  function j() {
    _ || (_ = !0, o.clear(), U(), l.emit("destroy"), l.clear());
  }
  function H(dt, O, G) {
    !E.active || _ || (y.scrollBody.useBaseFriction().useDuration(O === !0 ? 0 : E.duration), y.scrollTo.index(dt, G || 0));
  }
  function $(dt) {
    const O = y.index.add(1).get();
    H(O, dt, -1);
  }
  function V(dt) {
    const O = y.index.add(-1).get();
    H(O, dt, 1);
  }
  function F() {
    return y.index.add(1).get() !== At();
  }
  function N() {
    return y.index.add(-1).get() !== At();
  }
  function _t() {
    return y.scrollSnapList;
  }
  function Dt() {
    return y.scrollProgress.get(y.offsetLocation.get());
  }
  function At() {
    return y.index.get();
  }
  function ht() {
    return y.indexPrevious.get();
  }
  function rt() {
    return y.slidesInView.get();
  }
  function Tt() {
    return y.slidesInView.get(!1);
  }
  function te() {
    return T;
  }
  function yt() {
    return y;
  }
  function X() {
    return c;
  }
  function wt() {
    return x;
  }
  function Ot() {
    return C;
  }
  const st = {
    canScrollNext: F,
    canScrollPrev: N,
    containerNode: wt,
    internalEngine: yt,
    destroy: j,
    off: p,
    on: f,
    emit: g,
    plugins: te,
    previousScrollSnap: ht,
    reInit: A,
    rootNode: X,
    scrollNext: $,
    scrollPrev: V,
    scrollProgress: Dt,
    scrollSnapList: _t,
    scrollTo: H,
    selectedScrollSnap: At,
    slideNodes: Ot,
    slidesInView: rt,
    slidesNotInView: Tt
  };
  return k(t, e), setTimeout(() => l.emit("init"), 0), st;
}
bc.globalOptions = void 0;
function Nd(c = {}, t = []) {
  const e = gs(c), s = gs(t), [i, n] = hh(), [r, o] = hh(), l = js(() => {
    i && i.reInit(e.current, s.current);
  }, [i]);
  return St(() => {
    Id(e.current, c) || (e.current = c, l());
  }, [c, l]), St(() => {
    Og(s.current, t) || (s.current = t, l());
  }, [t, l]), St(() => {
    if (Dg() && r) {
      bc.globalOptions = Nd.globalOptions;
      const h = bc(r, e.current, s.current);
      return n(h), () => h.destroy();
    } else
      n(void 0);
  }, [r, n]), [o, i];
}
Nd.globalOptions = void 0;
var ro = {};
ro.d = (c, t) => {
  for (var e in t)
    ro.o(t, e) && !ro.o(c, e) && Object.defineProperty(c, e, { enumerable: !0, get: t[e] });
};
ro.o = (c, t) => Object.prototype.hasOwnProperty.call(c, t);
var Y = globalThis.pdfjsLib = {};
ro.d(Y, {
  AbortException: () => (
    /* reexport */
    yr
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    Sd
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    q
  ),
  AnnotationEditorType: () => (
    /* reexport */
    J
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    fr
  ),
  AnnotationLayer: () => (
    /* reexport */
    dA
  ),
  AnnotationMode: () => (
    /* reexport */
    Ci
  ),
  ColorPicker: () => (
    /* reexport */
    _c
  ),
  DOMSVGFactory: () => (
    /* reexport */
    Yd
  ),
  DrawLayer: () => (
    /* reexport */
    Pd
  ),
  FeatureTest: () => (
    /* reexport */
    ve
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    Ai
  ),
  ImageKind: () => (
    /* reexport */
    zl
  ),
  InvalidPDFException: () => (
    /* reexport */
    Qu
  ),
  MissingPDFException: () => (
    /* reexport */
    Ar
  ),
  OPS: () => (
    /* reexport */
    es
  ),
  OutputScale: () => (
    /* reexport */
    bh
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    Xf
  ),
  PDFDateString: () => (
    /* reexport */
    Gd
  ),
  PDFWorker: () => (
    /* reexport */
    Ir
  ),
  PasswordResponses: () => (
    /* reexport */
    bm
  ),
  PermissionFlag: () => (
    /* reexport */
    mm
  ),
  PixelsPerInch: () => (
    /* reexport */
    en
  ),
  RenderingCancelledException: () => (
    /* reexport */
    jd
  ),
  TextLayer: () => (
    /* reexport */
    Vh
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    $c
  ),
  Util: () => (
    /* reexport */
    B
  ),
  VerbosityLevel: () => (
    /* reexport */
    zc
  ),
  XfaLayer: () => (
    /* reexport */
    Kf
  ),
  build: () => (
    /* reexport */
    Vb
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    _m
  ),
  fetchData: () => (
    /* reexport */
    Wc
  ),
  getDocument: () => (
    /* reexport */
    Ob
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    Lm
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    km
  ),
  getXfaPageViewport: () => (
    /* reexport */
    Mm
  ),
  isDataScheme: () => (
    /* reexport */
    qc
  ),
  isPdfFile: () => (
    /* reexport */
    zd
  ),
  noContextMenu: () => (
    /* reexport */
    Ze
  ),
  normalizeUnicode: () => (
    /* reexport */
    Cm
  ),
  setLayerDimensions: () => (
    /* reexport */
    ur
  ),
  shadow: () => (
    /* reexport */
    nt
  ),
  version: () => (
    /* reexport */
    $b
  )
});
const pe = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), Ku = [1, 0, 0, 1, 0, 0], fh = [1e-3, 0, 0, 1e-3, 0, 0], pm = 1e7, ih = 1.35, je = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, Ci = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, gm = "pdfjs_internal_editor_", J = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, q = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35
}, mm = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, oe = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, zl = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Gt = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, Na = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, zc = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, es = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93
}, bm = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Gc = zc.WARNINGS;
function Am(c) {
  Number.isInteger(c) && (Gc = c);
}
function ym() {
  return Gc;
}
function Uc(c) {
  Gc >= zc.INFOS && console.log(`Info: ${c}`);
}
function tt(c) {
  Gc >= zc.WARNINGS && console.log(`Warning: ${c}`);
}
function xt(c) {
  throw new Error(c);
}
function Wt(c, t) {
  c || xt(t);
}
function vm(c) {
  switch (c == null ? void 0 : c.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function _m(c, t = null, e = null) {
  if (!c)
    return null;
  try {
    if (e && typeof c == "string") {
      if (e.addDefaultProtocol && c.startsWith("www.")) {
        const i = c.match(/\./g);
        (i == null ? void 0 : i.length) >= 2 && (c = `http://${c}`);
      }
      if (e.tryConvertEncoding)
        try {
          c = Tm(c);
        } catch {
        }
    }
    const s = t ? new URL(c, t) : new URL(c);
    if (vm(s))
      return s;
  } catch {
  }
  return null;
}
function nt(c, t, e, s = !1) {
  return Object.defineProperty(c, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
const an = function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class ph extends an {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class gh extends an {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class Qu extends an {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class Ar extends an {
  constructor(t) {
    super(t, "MissingPDFException");
  }
}
class $c extends an {
  constructor(t, e) {
    super(t, "UnexpectedResponseException"), this.status = e;
  }
}
class wm extends an {
  constructor(t) {
    super(t, "FormatError");
  }
}
class yr extends an {
  constructor(t) {
    super(t, "AbortException");
  }
}
function Ju(c) {
  (typeof c != "object" || (c == null ? void 0 : c.length) === void 0) && xt("Invalid argument for bytesToString");
  const t = c.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, c);
  const s = [];
  for (let i = 0; i < t; i += e) {
    const n = Math.min(i + e, t), r = c.subarray(i, n);
    s.push(String.fromCharCode.apply(null, r));
  }
  return s.join("");
}
function Vc(c) {
  typeof c != "string" && xt("Invalid argument for stringToBytes");
  const t = c.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = c.charCodeAt(s) & 255;
  return e;
}
function Em(c) {
  return String.fromCharCode(c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, c & 255);
}
function Hd(c) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [e, s] of c)
    t[e] = s;
  return t;
}
function Sm() {
  const c = new Uint8Array(4);
  return c[0] = 1, new Uint32Array(c.buffer, 0, 1)[0] === 1;
}
function xm() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class ve {
  static get isLittleEndian() {
    return nt(this, "isLittleEndian", Sm());
  }
  static get isEvalSupported() {
    return nt(this, "isEvalSupported", xm());
  }
  static get isOffscreenCanvasSupported() {
    return nt(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? nt(this, "platform", {
      isMac: navigator.platform.includes("Mac"),
      isWindows: navigator.platform.includes("Win"),
      isFirefox: typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && navigator.userAgent.includes("Firefox")
    }) : nt(this, "platform", {
      isMac: !1,
      isWindows: !1,
      isFirefox: !1
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return nt(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const nh = Array.from(Array(256).keys(), (c) => c.toString(16).padStart(2, "0"));
var vi, Gl, mh;
class B {
  static makeHexColor(t, e, s) {
    return `#${nh[t]}${nh[e]}${nh[s]}`;
  }
  static scaleMinMax(t, e) {
    let s;
    t[0] ? (t[0] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[3], e[3] *= t[3]) : (s = e[0], e[0] = e[1], e[1] = s, s = e[2], e[2] = e[3], e[3] = s, t[1] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static applyTransform(t, e) {
    const s = t[0] * e[0] + t[1] * e[2] + e[4], i = t[0] * e[1] + t[1] * e[3] + e[5];
    return [s, i];
  }
  static applyInverseTransform(t, e) {
    const s = e[0] * e[3] - e[1] * e[2], i = (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / s, n = (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / s;
    return [i, n];
  }
  static getAxialAlignedBoundingBox(t, e) {
    const s = this.applyTransform(t, e), i = this.applyTransform(t.slice(2, 4), e), n = this.applyTransform([t[0], t[3]], e), r = this.applyTransform([t[2], t[1]], e);
    return [Math.min(s[0], i[0], n[0], r[0]), Math.min(s[1], i[1], n[1], r[1]), Math.max(s[0], i[0], n[0], r[0]), Math.max(s[1], i[1], n[1], r[1])];
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t) {
    const e = [t[0], t[2], t[1], t[3]], s = t[0] * e[0] + t[1] * e[2], i = t[0] * e[1] + t[1] * e[3], n = t[2] * e[0] + t[3] * e[2], r = t[2] * e[1] + t[3] * e[3], o = (s + r) / 2, l = Math.sqrt((s + r) ** 2 - 4 * (s * r - n * i)) / 2, h = o + l || 1, d = o - l || 1;
    return [Math.sqrt(h), Math.sqrt(d)];
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (s > i)
      return null;
    const n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), r = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return n > r ? null : [s, n, i, r];
  }
  static bezierBoundingBox(t, e, s, i, n, r, o, l, h) {
    return h ? (h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l)) : h = [Math.min(t, o), Math.min(e, l), Math.max(t, o), Math.max(e, l)], b(this, vi, mh).call(this, t, s, n, o, e, i, r, l, 3 * (-t + 3 * (s - n) + o), 6 * (t - 2 * s + n), 3 * (s - t), h), b(this, vi, mh).call(this, t, s, n, o, e, i, r, l, 3 * (-e + 3 * (i - r) + l), 6 * (e - 2 * i + r), 3 * (i - e), h), h;
  }
}
vi = new WeakSet(), Gl = function(t, e, s, i, n, r, o, l, h, d) {
  if (h <= 0 || h >= 1)
    return;
  const u = 1 - h, f = h * h, p = f * h, g = u * (u * (u * t + 3 * h * e) + 3 * f * s) + p * i, A = u * (u * (u * n + 3 * h * r) + 3 * f * o) + p * l;
  d[0] = Math.min(d[0], g), d[1] = Math.min(d[1], A), d[2] = Math.max(d[2], g), d[3] = Math.max(d[3], A);
}, mh = function(t, e, s, i, n, r, o, l, h, d, u, f) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(d) >= 1e-12 && b(this, vi, Gl).call(this, t, e, s, i, n, r, o, l, -u / d, f);
    return;
  }
  const p = d ** 2 - 4 * u * h;
  if (p < 0)
    return;
  const g = Math.sqrt(p), A = 2 * h;
  b(this, vi, Gl).call(this, t, e, s, i, n, r, o, l, (-d + g) / A, f), b(this, vi, Gl).call(this, t, e, s, i, n, r, o, l, (-d - g) / A, f);
}, v(B, vi);
function Tm(c) {
  return decodeURIComponent(escape(c));
}
let rh = null, uu = null;
function Cm(c) {
  return rh || (rh = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, uu = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), c.replaceAll(rh, (t, e, s) => e ? e.normalize("NFKC") : uu.get(s));
}
function Pm() {
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
    return crypto.randomUUID();
  const c = new Uint8Array(32);
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
    crypto.getRandomValues(c);
  else
    for (let t = 0; t < 32; t++)
      c[t] = Math.floor(Math.random() * 255);
  return Ju(c);
}
const Bd = "pdfjs_internal_id_", Us = {
  BEZIER_CURVE_TO: 0,
  MOVE_TO: 1,
  LINE_TO: 2,
  QUADRATIC_CURVE_TO: 3,
  RESTORE: 4,
  SAVE: 5,
  SCALE: 6,
  TRANSFORM: 7,
  TRANSLATE: 8
};
function Rm(c) {
  return Uint8Array.prototype.toBase64 ? c.toBase64() : btoa(Ju(c));
}
const Vs = "http://www.w3.org/2000/svg", fn = class fn {
};
W(fn, "CSS", 96), W(fn, "PDF", 72), W(fn, "PDF_TO_CSS_UNITS", fn.CSS / fn.PDF);
let en = fn;
async function Wc(c, t = "text") {
  if (za(c, document.baseURI)) {
    const e = await fetch(c);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, s) => {
    const i = new XMLHttpRequest();
    i.open("GET", c, !0), i.responseType = t, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(i.response);
              return;
          }
          e(i.responseText);
          return;
        }
        s(new Error(i.statusText));
      }
    }, i.send(null);
  });
}
class Rl {
  constructor({
    viewBox: t,
    scale: e,
    rotation: s,
    offsetX: i = 0,
    offsetY: n = 0,
    dontFlip: r = !1
  }) {
    this.viewBox = t, this.scale = e, this.rotation = s, this.offsetX = i, this.offsetY = n;
    const o = (t[2] + t[0]) / 2, l = (t[3] + t[1]) / 2;
    let h, d, u, f;
    switch (s %= 360, s < 0 && (s += 360), s) {
      case 180:
        h = -1, d = 0, u = 0, f = 1;
        break;
      case 90:
        h = 0, d = 1, u = 1, f = 0;
        break;
      case 270:
        h = 0, d = -1, u = -1, f = 0;
        break;
      case 0:
        h = 1, d = 0, u = 0, f = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    r && (u = -u, f = -f);
    let p, g, A, _;
    h === 0 ? (p = Math.abs(l - t[1]) * e + i, g = Math.abs(o - t[0]) * e + n, A = (t[3] - t[1]) * e, _ = (t[2] - t[0]) * e) : (p = Math.abs(o - t[0]) * e + i, g = Math.abs(l - t[1]) * e + n, A = (t[2] - t[0]) * e, _ = (t[3] - t[1]) * e), this.transform = [h * e, d * e, u * e, f * e, p - h * e * o - u * e * l, g - d * e * o - f * e * l], this.width = A, this.height = _;
  }
  get rawDims() {
    const {
      viewBox: t
    } = this;
    return nt(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: s = this.offsetX,
    offsetY: i = this.offsetY,
    dontFlip: n = !1
  } = {}) {
    return new Rl({
      viewBox: this.viewBox.slice(),
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: n
    });
  }
  convertToViewportPoint(t, e) {
    return B.applyTransform([t, e], this.transform);
  }
  convertToViewportRectangle(t) {
    const e = B.applyTransform([t[0], t[1]], this.transform), s = B.applyTransform([t[2], t[3]], this.transform);
    return [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    return B.applyInverseTransform([t, e], this.transform);
  }
}
class jd extends an {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function qc(c) {
  const t = c.length;
  let e = 0;
  for (; e < t && c[e].trim() === ""; )
    e++;
  return c.substring(e, e + 5).toLowerCase() === "data:";
}
function zd(c) {
  return typeof c == "string" && /\.pdf$/i.test(c);
}
function Lm(c) {
  return [c] = c.split(/[#?]/, 1), c.substring(c.lastIndexOf("/") + 1);
}
function km(c, t = "document.pdf") {
  if (typeof c != "string")
    return t;
  if (qc(c))
    return tt('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = e.exec(c);
  let n = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
  if (n && (n = n[0], n.includes("%")))
    try {
      n = s.exec(decodeURIComponent(n))[0];
    } catch {
    }
  return n || t;
}
class fu {
  constructor() {
    W(this, "started", /* @__PURE__ */ Object.create(null));
    W(this, "times", []);
  }
  time(t) {
    t in this.started && tt(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || tt(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: s
    } of this.times)
      e = Math.max(s.length, e);
    for (const {
      name: s,
      start: i,
      end: n
    } of this.times)
      t.push(`${s.padEnd(e)} ${n - i}ms
`);
    return t.join("");
  }
}
function za(c, t) {
  try {
    const {
      protocol: e
    } = t ? new URL(c, t) : new URL(c);
    return e === "http:" || e === "https:";
  } catch {
    return !1;
  }
}
function Ze(c) {
  c.preventDefault();
}
function pu(c) {
  console.log("Deprecated API usage: " + c);
}
var fo;
class Gd {
  static toDateObject(t) {
    if (!t || typeof t != "string")
      return null;
    a(this, fo) || m(this, fo, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = a(this, fo).exec(t);
    if (!e)
      return null;
    const s = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let n = parseInt(e[3], 10);
    n = n >= 1 && n <= 31 ? n : 1;
    let r = parseInt(e[4], 10);
    r = r >= 0 && r <= 23 ? r : 0;
    let o = parseInt(e[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let l = parseInt(e[6], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    const h = e[7] || "Z";
    let d = parseInt(e[8], 10);
    d = d >= 0 && d <= 23 ? d : 0;
    let u = parseInt(e[9], 10) || 0;
    return u = u >= 0 && u <= 59 ? u : 0, h === "-" ? (r += d, o += u) : h === "+" && (r -= d, o -= u), new Date(Date.UTC(s, i, n, r, o, l));
  }
}
fo = new WeakMap(), v(Gd, fo);
function Mm(c, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: i
  } = c.attributes.style, n = [0, 0, parseInt(s), parseInt(i)];
  return new Rl({
    viewBox: n,
    scale: t,
    rotation: e
  });
}
function Ud(c) {
  if (c.startsWith("#")) {
    const t = parseInt(c.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return c.startsWith("rgb(") ? c.slice(4, -1).split(",").map((t) => parseInt(t)) : c.startsWith("rgba(") ? c.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (tt(`Not a valid color format: "${c}"`), [0, 0, 0]);
}
function Im(c) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", document.body.append(t);
  for (const e of c.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    c.set(e, Ud(s));
  }
  t.remove();
}
function kt(c) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: n,
    f: r
  } = c.getTransform();
  return [t, e, s, i, n, r];
}
function $s(c) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: n,
    f: r
  } = c.getTransform().invertSelf();
  return [t, e, s, i, n, r];
}
function ur(c, t, e = !1, s = !0) {
  if (t instanceof Rl) {
    const {
      pageWidth: i,
      pageHeight: n
    } = t.rawDims, {
      style: r
    } = c, o = ve.isCSSRoundSupported, l = `var(--scale-factor) * ${i}px`, h = `var(--scale-factor) * ${n}px`, d = o ? `round(down, ${l}, var(--scale-round-x, 1px))` : `calc(${l})`, u = o ? `round(down, ${h}, var(--scale-round-y, 1px))` : `calc(${h})`;
    !e || t.rotation % 180 === 0 ? (r.width = d, r.height = u) : (r.width = u, r.height = d);
  }
  s && c.setAttribute("data-main-rotation", t.rotation);
}
class bh {
  constructor() {
    const t = window.devicePixelRatio || 1;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
}
var Pi, gn, ss, mn, po, go, Ec, Zu, _e, tf, ef, Ul, sf, yh;
const Ws = class Ws {
  constructor(t) {
    v(this, _e);
    v(this, Pi, null);
    v(this, gn, null);
    v(this, ss);
    v(this, mn, null);
    v(this, po, null);
    m(this, ss, t), a(Ws, go) || m(Ws, go, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button"
    }));
  }
  render() {
    const t = m(this, Pi, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = a(this, ss)._uiManager._signal;
    t.addEventListener("contextmenu", Ze, {
      signal: e
    }), t.addEventListener("pointerdown", b(Ws, Ec, Zu), {
      signal: e
    });
    const s = m(this, mn, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = a(this, ss).toolbarPosition;
    if (i) {
      const {
        style: n
      } = t, r = a(this, ss)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      n.insetInlineEnd = `${100 * r}%`, n.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return b(this, _e, sf).call(this), t;
  }
  get div() {
    return a(this, Pi);
  }
  hide() {
    var t;
    a(this, Pi).classList.add("hidden"), (t = a(this, gn)) == null || t.hideDropdown();
  }
  show() {
    var t;
    a(this, Pi).classList.remove("hidden"), (t = a(this, po)) == null || t.shown();
  }
  async addAltText(t) {
    const e = await t.render();
    b(this, _e, Ul).call(this, e), a(this, mn).prepend(e, a(this, _e, yh)), m(this, po, t);
  }
  addColorPicker(t) {
    m(this, gn, t);
    const e = t.renderButton();
    b(this, _e, Ul).call(this, e), a(this, mn).prepend(e, a(this, _e, yh));
  }
  remove() {
    var t;
    a(this, Pi).remove(), (t = a(this, gn)) == null || t.destroy(), m(this, gn, null);
  }
};
Pi = new WeakMap(), gn = new WeakMap(), ss = new WeakMap(), mn = new WeakMap(), po = new WeakMap(), go = new WeakMap(), Ec = new WeakSet(), Zu = function(t) {
  t.stopPropagation();
}, _e = new WeakSet(), tf = function(t) {
  a(this, ss)._focusEventsAllowed = !1, t.preventDefault(), t.stopPropagation();
}, ef = function(t) {
  a(this, ss)._focusEventsAllowed = !0, t.preventDefault(), t.stopPropagation();
}, Ul = function(t) {
  const e = a(this, ss)._uiManager._signal;
  t.addEventListener("focusin", b(this, _e, tf).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", b(this, _e, ef).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", Ze, {
    signal: e
  });
}, sf = function() {
  const {
    editorType: t,
    _uiManager: e
  } = a(this, ss), s = document.createElement("button");
  s.className = "delete", s.tabIndex = 0, s.setAttribute("data-l10n-id", a(Ws, go)[t]), b(this, _e, Ul).call(this, s), s.addEventListener("click", (i) => {
    e.delete();
  }, {
    signal: e._signal
  }), a(this, mn).append(s);
}, yh = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, v(Ws, Ec), v(Ws, go, null);
let Ah = Ws;
var mo, bn, An, nn, nf, rf, af;
class Fm {
  constructor(t) {
    v(this, nn);
    v(this, mo, null);
    v(this, bn, null);
    v(this, An);
    m(this, An, t);
  }
  show(t, e, s) {
    const [i, n] = b(this, nn, rf).call(this, e, s), {
      style: r
    } = a(this, bn) || m(this, bn, b(this, nn, nf).call(this));
    t.append(a(this, bn)), r.insetInlineEnd = `${100 * i}%`, r.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    a(this, bn).remove();
  }
}
mo = new WeakMap(), bn = new WeakMap(), An = new WeakMap(), nn = new WeakSet(), nf = function() {
  const t = m(this, bn, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", Ze, {
    signal: a(this, An)._signal
  });
  const e = m(this, mo, document.createElement("div"));
  return e.className = "buttons", t.append(e), b(this, nn, af).call(this), t;
}, rf = function(t, e) {
  let s = 0, i = 0;
  for (const n of t) {
    const r = n.y + n.height;
    if (r < s)
      continue;
    const o = n.x + (e ? n.width : 0);
    if (r > s) {
      i = o, s = r;
      continue;
    }
    e ? o > i && (i = o) : o < i && (i = o);
  }
  return [e ? 1 - i : i, s];
}, af = function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const s = a(this, An)._signal;
  t.addEventListener("contextmenu", Ze, {
    signal: s
  }), t.addEventListener("click", () => {
    a(this, An).highlightSelection("floating_button");
  }, {
    signal: s
  }), a(this, mo).append(t);
};
function Ac(c, t, e) {
  for (const s of e)
    t.addEventListener(s, c[s].bind(c));
}
function Dm(c) {
  return Math.round(Math.min(255, Math.max(1, 255 * c))).toString(16).padStart(2, "0");
}
var Sc;
class Om {
  constructor() {
    v(this, Sc, 0);
  }
  get id() {
    return `${gm}${ge(this, Sc)._++}`;
  }
}
Sc = new WeakMap();
var Or, bo, ce, Nr, $l;
const Jd = class Jd {
  constructor() {
    v(this, Nr);
    v(this, Or, Pm());
    v(this, bo, 0);
    v(this, ce, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = t;
    const n = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return nt(this, "_isSVGFittingCanvas", n);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: i,
      type: n
    } = t;
    return b(this, Nr, $l).call(this, `${e}_${s}_${i}_${n}`, t);
  }
  async getFromUrl(t) {
    return b(this, Nr, $l).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return b(this, Nr, $l).call(this, t, s);
  }
  async getFromId(t) {
    a(this, ce) || m(this, ce, /* @__PURE__ */ new Map());
    const e = a(this, ce).get(t);
    if (!e)
      return null;
    if (e.bitmap)
      return e.refCounter += 1, e;
    if (e.file)
      return this.getFromFile(e.file);
    if (e.blobPromise) {
      const {
        blobPromise: s
      } = e;
      return delete e.blobPromise, this.getFromBlob(e.id, s);
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    a(this, ce) || m(this, ce, /* @__PURE__ */ new Map());
    let s = a(this, ce).get(t);
    if (s != null && s.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${a(this, Or)}_${ge(this, bo)._++}`,
      refCounter: 1,
      isSvg: !1
    }, a(this, ce).set(t, s), a(this, ce).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = a(this, ce).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var i;
    a(this, ce) || m(this, ce, /* @__PURE__ */ new Map());
    const e = a(this, ce).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0))
      return;
    const {
      bitmap: s
    } = e;
    if (!e.url && !e.file) {
      const n = new OffscreenCanvas(s.width, s.height);
      n.getContext("bitmaprenderer").transferFromImageBitmap(s), e.blobPromise = n.convertToBlob();
    }
    (i = s.close) == null || i.call(s), e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${a(this, Or)}_`);
  }
};
Or = new WeakMap(), bo = new WeakMap(), ce = new WeakMap(), Nr = new WeakSet(), $l = async function(t, e) {
  a(this, ce) || m(this, ce, /* @__PURE__ */ new Map());
  let s = a(this, ce).get(t);
  if (s === null)
    return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = {
      bitmap: null,
      id: `image_${a(this, Or)}_${ge(this, bo)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (s.url = e, i = await Wc(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const n = Jd._isSVGFittingCanvas, r = new FileReader(), o = new Image(), l = new Promise((h, d) => {
        o.onload = () => {
          s.bitmap = o, s.isSvg = !0, h();
        }, r.onload = async () => {
          const u = s.svgUrl = r.result;
          o.src = await n ? `${u}#svgView(preserveAspectRatio(none))` : u;
        }, o.onerror = r.onerror = d;
      });
      r.readAsDataURL(i), await l;
    } else
      s.bitmap = await createImageBitmap(i);
    s.refCounter = 1;
  } catch (i) {
    console.error(i), s = null;
  }
  return a(this, ce).set(t, s), s && a(this, ce).set(s.id, s), s;
};
let vh = Jd;
var Yt, Ri, Ao, Kt;
class Nm {
  constructor(t = 128) {
    v(this, Yt, []);
    v(this, Ri, !1);
    v(this, Ao);
    v(this, Kt, -1);
    m(this, Ao, t);
  }
  add({
    cmd: t,
    undo: e,
    post: s,
    mustExec: i,
    type: n = NaN,
    overwriteIfSameType: r = !1,
    keepUndo: o = !1
  }) {
    if (i && t(), a(this, Ri))
      return;
    const l = {
      cmd: t,
      undo: e,
      post: s,
      type: n
    };
    if (a(this, Kt) === -1) {
      a(this, Yt).length > 0 && (a(this, Yt).length = 0), m(this, Kt, 0), a(this, Yt).push(l);
      return;
    }
    if (r && a(this, Yt)[a(this, Kt)].type === n) {
      o && (l.undo = a(this, Yt)[a(this, Kt)].undo), a(this, Yt)[a(this, Kt)] = l;
      return;
    }
    const h = a(this, Kt) + 1;
    h === a(this, Ao) ? a(this, Yt).splice(0, 1) : (m(this, Kt, h), h < a(this, Yt).length && a(this, Yt).splice(h)), a(this, Yt).push(l);
  }
  undo() {
    if (a(this, Kt) === -1)
      return;
    m(this, Ri, !0);
    const {
      undo: t,
      post: e
    } = a(this, Yt)[a(this, Kt)];
    t(), e == null || e(), m(this, Ri, !1), m(this, Kt, a(this, Kt) - 1);
  }
  redo() {
    if (a(this, Kt) < a(this, Yt).length - 1) {
      m(this, Kt, a(this, Kt) + 1), m(this, Ri, !0);
      const {
        cmd: t,
        post: e
      } = a(this, Yt)[a(this, Kt)];
      t(), e == null || e(), m(this, Ri, !1);
    }
  }
  hasSomethingToUndo() {
    return a(this, Kt) !== -1;
  }
  hasSomethingToRedo() {
    return a(this, Kt) < a(this, Yt).length - 1;
  }
  destroy() {
    m(this, Yt, null);
  }
}
Yt = new WeakMap(), Ri = new WeakMap(), Ao = new WeakMap(), Kt = new WeakMap();
var xc, of;
class Ll {
  constructor(t) {
    v(this, xc);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = ve.platform;
    for (const [s, i, n = {}] of t)
      for (const r of s) {
        const o = r.startsWith("mac+");
        e && o ? (this.callbacks.set(r.slice(4), {
          callback: i,
          options: n
        }), this.allKeys.add(r.split("+").at(-1))) : !e && !o && (this.callbacks.set(r, {
          callback: i,
          options: n
        }), this.allKeys.add(r.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const s = this.callbacks.get(b(this, xc, of).call(this, e));
    if (!s)
      return;
    const {
      callback: i,
      options: {
        bubbles: n = !1,
        args: r = [],
        checker: o = null
      }
    } = s;
    o && !o(t, e) || (i.bind(t, ...r, e)(), n || (e.stopPropagation(), e.preventDefault()));
  }
}
xc = new WeakSet(), of = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Tc = class Tc {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return Im(t), nt(this, "_colors", t);
  }
  convert(t) {
    const e = Ud(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, i] of this._colors)
      if (i.every((n, r) => n === e[r]))
        return Tc._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? B.makeHexColor(...e) : t;
  }
};
W(Tc, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let _h = Tc;
var Hr, Me, Ut, se, Br, Xs, jr, is, Li, zr, yn, ws, ns, vn, yo, vo, Gr, _o, Es, ki, Ur, Mi, Ss, Cc, Ii, wo, Fi, _n, Eo, So, Qt, ft, Ys, wn, xo, To, Di, xs, Ks, Co, Ve, I, Vl, wh, lf, cf, Wl, hf, df, uf, Eh, ff, Sh, xh, pf, me, xi, gf, mf, Th, bf, Ga, Ch;
const kr = class kr {
  constructor(t, e, s, i, n, r, o, l, h, d, u) {
    v(this, I);
    v(this, Hr, new AbortController());
    v(this, Me, null);
    v(this, Ut, /* @__PURE__ */ new Map());
    v(this, se, /* @__PURE__ */ new Map());
    v(this, Br, null);
    v(this, Xs, null);
    v(this, jr, null);
    v(this, is, new Nm());
    v(this, Li, null);
    v(this, zr, 0);
    v(this, yn, /* @__PURE__ */ new Set());
    v(this, ws, null);
    v(this, ns, null);
    v(this, vn, /* @__PURE__ */ new Set());
    v(this, yo, !1);
    v(this, vo, !1);
    v(this, Gr, !1);
    v(this, _o, null);
    v(this, Es, null);
    v(this, ki, null);
    v(this, Ur, null);
    v(this, Mi, !1);
    v(this, Ss, null);
    v(this, Cc, new Om());
    v(this, Ii, !1);
    v(this, wo, !1);
    v(this, Fi, null);
    v(this, _n, null);
    v(this, Eo, null);
    v(this, So, null);
    v(this, Qt, J.NONE);
    v(this, ft, /* @__PURE__ */ new Set());
    v(this, Ys, null);
    v(this, wn, null);
    v(this, xo, null);
    v(this, To, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    v(this, Di, [0, 0]);
    v(this, xs, null);
    v(this, Ks, null);
    v(this, Co, null);
    v(this, Ve, null);
    const f = this._signal = a(this, Hr).signal;
    m(this, Ks, t), m(this, Co, e), m(this, Br, s), this._eventBus = i, i._on("editingaction", this.onEditingAction.bind(this), {
      signal: f
    }), i._on("pagechanging", this.onPageChanging.bind(this), {
      signal: f
    }), i._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: f
    }), i._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: f
    }), i._on("setpreference", this.onSetPreference.bind(this), {
      signal: f
    }), i._on("switchannotationeditorparams", (p) => this.updateParams(p.type, p.value), {
      signal: f
    }), b(this, I, hf).call(this), b(this, I, pf).call(this), b(this, I, Eh).call(this), m(this, Xs, n.annotationStorage), m(this, _o, n.filterFactory), m(this, wn, r), m(this, Ur, o || null), m(this, yo, l), m(this, vo, h), m(this, Gr, d), m(this, So, u || null), this.viewParameters = {
      realScale: en.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1;
  }
  static get _keyboardManager() {
    const t = kr.prototype, e = (r) => a(r, Ks).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && r.hasSomethingToControl(), s = (r, {
      target: o
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: l
        } = o;
        return l !== "text" && l !== "number";
      }
      return !0;
    }, i = this.TRANSLATE_SMALL, n = this.TRANSLATE_BIG;
    return nt(this, "_keyboardManager", new Ll([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: s
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: s
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: s
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: s
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: (r, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && a(r, Ks).contains(o) && !r.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (r, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && a(r, Ks).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-n, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [n, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -n],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, i],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, n],
      checker: e
    }]]));
  }
  destroy() {
    var t, e, s, i;
    (t = a(this, Ve)) == null || t.resolve(), m(this, Ve, null), (e = a(this, Hr)) == null || e.abort(), m(this, Hr, null), this._signal = null;
    for (const n of a(this, se).values())
      n.destroy();
    a(this, se).clear(), a(this, Ut).clear(), a(this, vn).clear(), m(this, Me, null), a(this, ft).clear(), a(this, is).destroy(), (s = a(this, Br)) == null || s.destroy(), (i = a(this, Ss)) == null || i.hide(), m(this, Ss, null), a(this, Es) && (clearTimeout(a(this, Es)), m(this, Es, null)), a(this, xs) && (clearTimeout(a(this, xs)), m(this, xs, null));
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return a(this, So);
  }
  get useNewAltTextFlow() {
    return a(this, vo);
  }
  get useNewAltTextWhenAddingImage() {
    return a(this, Gr);
  }
  get hcmFilter() {
    return nt(this, "hcmFilter", a(this, wn) ? a(this, _o).addHCMFilter(a(this, wn).foreground, a(this, wn).background) : "none");
  }
  get direction() {
    return nt(this, "direction", getComputedStyle(a(this, Ks)).direction);
  }
  get highlightColors() {
    return nt(this, "highlightColors", a(this, Ur) ? new Map(a(this, Ur).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return nt(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  setMainHighlightColorPicker(t) {
    m(this, Eo, t);
  }
  editAltText(t, e = !1) {
    var s;
    (s = a(this, Br)) == null || s.editAltText(this, t, e);
  }
  switchToMode(t, e) {
    this._eventBus.on("annotationeditormodechanged", e, {
      once: !0,
      signal: this._signal
    }), this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode: t
    });
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: e
    });
  }
  onSetPreference({
    name: t,
    value: e
  }) {
    switch (t) {
      case "enableNewAltTextWhenAddingImage":
        m(this, Gr, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    m(this, zr, t - 1);
  }
  focusMainContainer() {
    a(this, Ks).focus();
  }
  findParent(t, e) {
    for (const s of a(this, se).values()) {
      const {
        x: i,
        y: n,
        width: r,
        height: o
      } = s.div.getBoundingClientRect();
      if (t >= i && t <= i + r && e >= n && e <= n + o)
        return s;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    a(this, Co).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    a(this, vn).add(t);
  }
  removeShouldRescale(t) {
    a(this, vn).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = t * en.PDF_TO_CSS_UNITS;
    for (const e of a(this, vn))
      e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "") {
    const e = document.getSelection();
    if (!e || e.isCollapsed)
      return;
    const {
      anchorNode: s,
      anchorOffset: i,
      focusNode: n,
      focusOffset: r
    } = e, o = e.toString(), h = b(this, I, Vl).call(this, e).closest(".textLayer"), d = this.getSelectionBoxes(h);
    if (!d)
      return;
    e.empty();
    const u = b(this, I, wh).call(this, h), f = a(this, Qt) === J.NONE, p = () => {
      u == null || u.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: d,
        anchorNode: s,
        anchorOffset: i,
        focusNode: n,
        focusOffset: r,
        text: o
      }), f && this.showAllEditors("highlight", !0, !0);
    };
    if (f) {
      this.switchToMode(J.HIGHLIGHT, p);
      return;
    }
    p();
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && a(this, Xs) && !a(this, Xs).has(t.id) && a(this, Xs).setValue(t.id, t);
  }
  blur() {
    if (this.isShiftKeyDown = !1, a(this, Mi) && (m(this, Mi, !1), b(this, I, Wl).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of a(this, ft))
      if (e.div.contains(t)) {
        m(this, _n, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!a(this, _n))
      return;
    const [t, e] = a(this, _n);
    m(this, _n, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    b(this, I, Eh).call(this), b(this, I, Sh).call(this);
  }
  removeEditListeners() {
    b(this, I, ff).call(this), b(this, I, xh).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of a(this, ns))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of a(this, ns))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var s;
    if (t.preventDefault(), (s = a(this, Me)) == null || s.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const i of a(this, ft)) {
      const n = i.serialize(!0);
      n && e.push(n);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  async paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const n of e.items)
      for (const r of a(this, ns))
        if (r.isHandlingMimeForPasting(n.type)) {
          r.paste(n, this.currentLayer);
          return;
        }
    let s = e.getData("application/pdfjs");
    if (!s)
      return;
    try {
      s = JSON.parse(s);
    } catch (n) {
      tt(`paste: "${n.message}".`);
      return;
    }
    if (!Array.isArray(s))
      return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const n = [];
      for (const l of s) {
        const h = await i.deserialize(l);
        if (!h)
          return;
        n.push(h);
      }
      const r = () => {
        for (const l of n)
          b(this, I, Th).call(this, l);
        b(this, I, Ch).call(this, n);
      }, o = () => {
        for (const l of n)
          l.remove();
      };
      this.addCommands({
        cmd: r,
        undo: o,
        mustExec: !0
      });
    } catch (n) {
      tt(`paste: "${n.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), a(this, Qt) !== J.NONE && !this.isEditorHandlingKeyboard && kr._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, a(this, Mi) && (m(this, Mi, !1), b(this, I, Wl).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  setEditingState(t) {
    t ? (b(this, I, df).call(this), b(this, I, Sh).call(this), b(this, I, me).call(this, {
      isEditing: a(this, Qt) !== J.NONE,
      isEmpty: b(this, I, Ga).call(this),
      hasSomethingToUndo: a(this, is).hasSomethingToUndo(),
      hasSomethingToRedo: a(this, is).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (b(this, I, uf).call(this), b(this, I, xh).call(this), b(this, I, me).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!a(this, ns)) {
      m(this, ns, t);
      for (const e of a(this, ns))
        b(this, I, xi).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return a(this, Cc).id;
  }
  get currentLayer() {
    return a(this, se).get(a(this, zr));
  }
  getLayer(t) {
    return a(this, se).get(t);
  }
  get currentPageIndex() {
    return a(this, zr);
  }
  addLayer(t) {
    a(this, se).set(t.pageIndex, t), a(this, Ii) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    a(this, se).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1) {
    if (a(this, Qt) !== t && !(a(this, Ve) && (await a(this, Ve).promise, !a(this, Ve)))) {
      if (m(this, Ve, Promise.withResolvers()), m(this, Qt, t), t === J.NONE) {
        this.setEditingState(!1), b(this, I, mf).call(this), a(this, Ve).resolve();
        return;
      }
      this.setEditingState(!0), await b(this, I, gf).call(this), this.unselectAll();
      for (const i of a(this, se).values())
        i.updateMode(t);
      if (!e) {
        s && this.addNewEditorFromKeyboard(), a(this, Ve).resolve();
        return;
      }
      for (const i of a(this, Ut).values())
        i.annotationElementId === e ? (this.setSelected(i), i.enterInEditMode()) : i.unselect();
      a(this, Ve).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t !== a(this, Qt) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: t
    });
  }
  updateParams(t, e) {
    var s;
    if (a(this, ns)) {
      switch (t) {
        case q.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case q.HIGHLIGHT_DEFAULT_COLOR:
          (s = a(this, Eo)) == null || s.updateColor(e);
          break;
        case q.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (a(this, xo) || m(this, xo, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const i of a(this, ft))
        i.updateParams(t, e);
      for (const i of a(this, ns))
        i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    var n;
    for (const r of a(this, Ut).values())
      r.editorType === t && r.show(e);
    (((n = a(this, xo)) == null ? void 0 : n.get(q.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && b(this, I, xi).call(this, [[q.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (a(this, wo) !== t) {
      m(this, wo, t);
      for (const e of a(this, se).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const s of a(this, Ut).values())
      s.pageIndex === t && e.push(s);
    return e;
  }
  getEditor(t) {
    return a(this, Ut).get(t);
  }
  addEditor(t) {
    a(this, Ut).set(t.id, t);
  }
  removeEditor(t) {
    var e;
    t.div.contains(document.activeElement) && (a(this, Es) && clearTimeout(a(this, Es)), m(this, Es, setTimeout(() => {
      this.focusMainContainer(), m(this, Es, null);
    }, 0))), a(this, Ut).delete(t.id), this.unselect(t), (!t.annotationElementId || !a(this, yn).has(t.annotationElementId)) && ((e = a(this, Xs)) == null || e.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    a(this, yn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return a(this, yn).has(t);
  }
  removeDeletedAnnotationElement(t) {
    a(this, yn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    a(this, Me) !== t && (m(this, Me, t), t && b(this, I, xi).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    a(this, I, bf) === t && b(this, I, xi).call(this, t.propertiesToUpdate);
  }
  toggleSelected(t) {
    if (a(this, ft).has(t)) {
      a(this, ft).delete(t), t.unselect(), b(this, I, me).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    a(this, ft).add(t), t.select(), b(this, I, xi).call(this, t.propertiesToUpdate), b(this, I, me).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    for (const e of a(this, ft))
      e !== t && e.unselect();
    a(this, ft).clear(), a(this, ft).add(t), t.select(), b(this, I, xi).call(this, t.propertiesToUpdate), b(this, I, me).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return a(this, ft).has(t);
  }
  get firstSelectedEditor() {
    return a(this, ft).values().next().value;
  }
  unselect(t) {
    t.unselect(), a(this, ft).delete(t), b(this, I, me).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return a(this, ft).size !== 0;
  }
  get isEnterHandled() {
    return a(this, ft).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    a(this, is).undo(), b(this, I, me).call(this, {
      hasSomethingToUndo: a(this, is).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: b(this, I, Ga).call(this)
    });
  }
  redo() {
    a(this, is).redo(), b(this, I, me).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: a(this, is).hasSomethingToRedo(),
      isEmpty: b(this, I, Ga).call(this)
    });
  }
  addCommands(t) {
    a(this, is).add(t), b(this, I, me).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: b(this, I, Ga).call(this)
    });
  }
  delete() {
    if (this.commitOrRemove(), !this.hasSelection)
      return;
    const t = [...a(this, ft)], e = () => {
      for (const i of t)
        i.remove();
    }, s = () => {
      for (const i of t)
        b(this, I, Th).call(this, i);
    };
    this.addCommands({
      cmd: e,
      undo: s,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = a(this, Me)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return a(this, Me) || this.hasSelection;
  }
  selectAll() {
    for (const t of a(this, ft))
      t.commit();
    b(this, I, Ch).call(this, a(this, Ut).values());
  }
  unselectAll() {
    if (!(a(this, Me) && (a(this, Me).commitOrRemove(), a(this, Qt) !== J.NONE)) && this.hasSelection) {
      for (const t of a(this, ft))
        t.unselect();
      a(this, ft).clear(), b(this, I, me).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    a(this, Di)[0] += t, a(this, Di)[1] += e;
    const [i, n] = a(this, Di), r = [...a(this, ft)], o = 1e3;
    a(this, xs) && clearTimeout(a(this, xs)), m(this, xs, setTimeout(() => {
      m(this, xs, null), a(this, Di)[0] = a(this, Di)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of r)
            a(this, Ut).has(l.id) && l.translateInPage(i, n);
        },
        undo: () => {
          for (const l of r)
            a(this, Ut).has(l.id) && l.translateInPage(-i, -n);
        },
        mustExec: !1
      });
    }, o));
    for (const l of r)
      l.translateInPage(t, e);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), m(this, ws, /* @__PURE__ */ new Map());
      for (const t of a(this, ft))
        a(this, ws).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!a(this, ws))
      return !1;
    this.disableUserSelect(!1);
    const t = a(this, ws);
    m(this, ws, null);
    let e = !1;
    for (const [{
      x: i,
      y: n,
      pageIndex: r
    }, o] of t)
      o.newX = i, o.newY = n, o.newPageIndex = r, e || (e = i !== o.savedX || n !== o.savedY || r !== o.savedPageIndex);
    if (!e)
      return !1;
    const s = (i, n, r, o) => {
      if (a(this, Ut).has(i.id)) {
        const l = a(this, se).get(o);
        l ? i._setParentAndPosition(l, n, r) : (i.pageIndex = o, i.x = n, i.y = r);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [i, {
          newX: n,
          newY: r,
          newPageIndex: o
        }] of t)
          s(i, n, r, o);
      },
      undo: () => {
        for (const [i, {
          savedX: n,
          savedY: r,
          savedPageIndex: o
        }] of t)
          s(i, n, r, o);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (a(this, ws))
      for (const s of a(this, ws).keys())
        s.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || a(this, ft).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return a(this, Me) === t;
  }
  getActive() {
    return a(this, Me);
  }
  getMode() {
    return a(this, Qt);
  }
  get imageManager() {
    return nt(this, "imageManager", new vh());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let h = 0, d = e.rangeCount; h < d; h++)
      if (!t.contains(e.getRangeAt(h).commonAncestorContainer))
        return null;
    const {
      x: s,
      y: i,
      width: n,
      height: r
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        o = (h, d, u, f) => ({
          x: (d - i) / r,
          y: 1 - (h + u - s) / n,
          width: f / r,
          height: u / n
        });
        break;
      case "180":
        o = (h, d, u, f) => ({
          x: 1 - (h + u - s) / n,
          y: 1 - (d + f - i) / r,
          width: u / n,
          height: f / r
        });
        break;
      case "270":
        o = (h, d, u, f) => ({
          x: 1 - (d + f - i) / r,
          y: (h - s) / n,
          width: f / r,
          height: u / n
        });
        break;
      default:
        o = (h, d, u, f) => ({
          x: (h - s) / n,
          y: (d - i) / r,
          width: u / n,
          height: f / r
        });
        break;
    }
    const l = [];
    for (let h = 0, d = e.rangeCount; h < d; h++) {
      const u = e.getRangeAt(h);
      if (!u.collapsed)
        for (const {
          x: f,
          y: p,
          width: g,
          height: A
        } of u.getClientRects())
          g === 0 || A === 0 || l.push(o(f, p, g, A));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (a(this, jr) || m(this, jr, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = a(this, jr)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = a(this, jr)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const s = a(this, Xs).getRawValue(e);
    s && (a(this, Qt) === J.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
};
Hr = new WeakMap(), Me = new WeakMap(), Ut = new WeakMap(), se = new WeakMap(), Br = new WeakMap(), Xs = new WeakMap(), jr = new WeakMap(), is = new WeakMap(), Li = new WeakMap(), zr = new WeakMap(), yn = new WeakMap(), ws = new WeakMap(), ns = new WeakMap(), vn = new WeakMap(), yo = new WeakMap(), vo = new WeakMap(), Gr = new WeakMap(), _o = new WeakMap(), Es = new WeakMap(), ki = new WeakMap(), Ur = new WeakMap(), Mi = new WeakMap(), Ss = new WeakMap(), Cc = new WeakMap(), Ii = new WeakMap(), wo = new WeakMap(), Fi = new WeakMap(), _n = new WeakMap(), Eo = new WeakMap(), So = new WeakMap(), Qt = new WeakMap(), ft = new WeakMap(), Ys = new WeakMap(), wn = new WeakMap(), xo = new WeakMap(), To = new WeakMap(), Di = new WeakMap(), xs = new WeakMap(), Ks = new WeakMap(), Co = new WeakMap(), Ve = new WeakMap(), I = new WeakSet(), Vl = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, wh = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of a(this, se).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, lf = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = b(this, I, Vl).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (a(this, Ss) || m(this, Ss, new Fm(this)), a(this, Ss).show(s, i, this.direction === "ltr"));
}, cf = function() {
  var n, r, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    a(this, Ys) && ((n = a(this, Ss)) == null || n.hide(), m(this, Ys, null), b(this, I, me).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === a(this, Ys))
    return;
  const i = b(this, I, Vl).call(this, t).closest(".textLayer");
  if (!i) {
    a(this, Ys) && ((r = a(this, Ss)) == null || r.hide(), m(this, Ys, null), b(this, I, me).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = a(this, Ss)) == null || o.hide(), m(this, Ys, e), b(this, I, me).call(this, {
    hasSelectedText: !0
  }), !(a(this, Qt) !== J.HIGHLIGHT && a(this, Qt) !== J.NONE) && (a(this, Qt) === J.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), m(this, Mi, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = a(this, Qt) === J.HIGHLIGHT ? b(this, I, wh).call(this, i) : null;
    l == null || l.toggleDrawing();
    const h = new AbortController(), d = this.combinedSignal(h), u = (f) => {
      f.type === "pointerup" && f.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), f.type === "pointerup" && b(this, I, Wl).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", u, {
      signal: d
    }), window.addEventListener("blur", u, {
      signal: d
    });
  }
}, Wl = function(t = "") {
  a(this, Qt) === J.HIGHLIGHT ? this.highlightSelection(t) : a(this, yo) && b(this, I, lf).call(this);
}, hf = function() {
  document.addEventListener("selectionchange", b(this, I, cf).bind(this), {
    signal: this._signal
  });
}, df = function() {
  if (a(this, ki))
    return;
  m(this, ki, new AbortController());
  const t = this.combinedSignal(a(this, ki));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, uf = function() {
  var t;
  (t = a(this, ki)) == null || t.abort(), m(this, ki, null);
}, Eh = function() {
  if (a(this, Fi))
    return;
  m(this, Fi, new AbortController());
  const t = this.combinedSignal(a(this, Fi));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, ff = function() {
  var t;
  (t = a(this, Fi)) == null || t.abort(), m(this, Fi, null);
}, Sh = function() {
  if (a(this, Li))
    return;
  m(this, Li, new AbortController());
  const t = this.combinedSignal(a(this, Li));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, xh = function() {
  var t;
  (t = a(this, Li)) == null || t.abort(), m(this, Li, null);
}, pf = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, me = function(t) {
  Object.entries(t).some(([s, i]) => a(this, To)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(a(this, To), t)
  }), a(this, Qt) === J.HIGHLIGHT && t.hasSelectedEditor === !1 && b(this, I, xi).call(this, [[q.HIGHLIGHT_FREE, !0]]));
}, xi = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, gf = async function() {
  if (!a(this, Ii)) {
    m(this, Ii, !0);
    const t = [];
    for (const e of a(this, se).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of a(this, Ut).values())
      e.enable();
  }
}, mf = function() {
  if (this.unselectAll(), a(this, Ii)) {
    m(this, Ii, !1);
    for (const t of a(this, se).values())
      t.disable();
    for (const t of a(this, Ut).values())
      t.disable();
  }
}, Th = function(t) {
  const e = a(this, se).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, bf = function() {
  let t = null;
  for (t of a(this, ft))
    ;
  return t;
}, Ga = function() {
  if (a(this, Ut).size === 0)
    return !0;
  if (a(this, Ut).size === 1)
    for (const t of a(this, Ut).values())
      return t.isEmpty();
  return !1;
}, Ch = function(t) {
  for (const e of a(this, ft))
    e.unselect();
  a(this, ft).clear();
  for (const e of t)
    e.isEmpty() || (a(this, ft).add(e), e.select());
  b(this, I, me).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, W(kr, "TRANSLATE_SMALL", 1), W(kr, "TRANSLATE_BIG", 10);
let fr = kr;
var Jt, Ts, rs, $r, Cs, Ie, Vr, Ps, xe, Qs, En, Rs, Oi, ms, Ua, ql;
const be = class be {
  constructor(t) {
    v(this, ms);
    v(this, Jt, null);
    v(this, Ts, !1);
    v(this, rs, null);
    v(this, $r, null);
    v(this, Cs, null);
    v(this, Ie, null);
    v(this, Vr, !1);
    v(this, Ps, null);
    v(this, xe, null);
    v(this, Qs, null);
    v(this, En, null);
    v(this, Rs, !1);
    m(this, xe, t), m(this, Rs, t._uiManager.useNewAltTextFlow), a(be, Oi) || m(be, Oi, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    be._l10n ?? (be._l10n = t);
  }
  async render() {
    const t = m(this, rs, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = m(this, $r, document.createElement("span"));
    t.append(e), a(this, Rs) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", a(be, Oi).missing), e.setAttribute("data-l10n-id", a(be, Oi)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = a(this, xe)._uiManager._signal;
    t.addEventListener("contextmenu", Ze, {
      signal: s
    }), t.addEventListener("pointerdown", (n) => n.stopPropagation(), {
      signal: s
    });
    const i = (n) => {
      n.preventDefault(), a(this, xe)._uiManager.editAltText(a(this, xe)), a(this, Rs) && a(this, xe)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: a(this, ms, Ua)
        }
      });
    };
    return t.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (n) => {
      n.target === t && n.key === "Enter" && (m(this, Vr, !0), i(n));
    }, {
      signal: s
    }), await b(this, ms, ql).call(this), t;
  }
  finish() {
    a(this, rs) && (a(this, rs).focus({
      focusVisible: a(this, Vr)
    }), m(this, Vr, !1));
  }
  isEmpty() {
    return a(this, Rs) ? a(this, Jt) === null : !a(this, Jt) && !a(this, Ts);
  }
  hasData() {
    return a(this, Rs) ? a(this, Jt) !== null || !!a(this, Qs) : this.isEmpty();
  }
  get guessedText() {
    return a(this, Qs);
  }
  async setGuessedText(t) {
    a(this, Jt) === null && (m(this, Qs, t), m(this, En, await be._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), b(this, ms, ql).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!a(this, Rs) || a(this, Jt)) {
      (e = a(this, Ps)) == null || e.remove(), m(this, Ps, null);
      return;
    }
    if (!a(this, Ps)) {
      const s = m(this, Ps, document.createElement("div"));
      s.className = "noAltTextBadge", a(this, xe).div.append(s);
    }
    a(this, Ps).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = a(this, Jt);
    return !t && a(this, Qs) === e && (e = a(this, En)), {
      altText: e,
      decorative: a(this, Ts),
      guessedText: a(this, Qs),
      textWithDisclaimer: a(this, En)
    };
  }
  get data() {
    return {
      altText: a(this, Jt),
      decorative: a(this, Ts)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: n = !1
  }) {
    s && (m(this, Qs, s), m(this, En, i)), !(a(this, Jt) === t && a(this, Ts) === e) && (n || (m(this, Jt, t), m(this, Ts, e)), b(this, ms, ql).call(this));
  }
  toggle(t = !1) {
    a(this, rs) && (!t && a(this, Ie) && (clearTimeout(a(this, Ie)), m(this, Ie, null)), a(this, rs).disabled = !t);
  }
  shown() {
    a(this, xe)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: a(this, ms, Ua)
      }
    });
  }
  destroy() {
    var t, e;
    (t = a(this, rs)) == null || t.remove(), m(this, rs, null), m(this, $r, null), m(this, Cs, null), (e = a(this, Ps)) == null || e.remove(), m(this, Ps, null);
  }
};
Jt = new WeakMap(), Ts = new WeakMap(), rs = new WeakMap(), $r = new WeakMap(), Cs = new WeakMap(), Ie = new WeakMap(), Vr = new WeakMap(), Ps = new WeakMap(), xe = new WeakMap(), Qs = new WeakMap(), En = new WeakMap(), Rs = new WeakMap(), Oi = new WeakMap(), ms = new WeakSet(), Ua = function() {
  return a(this, Jt) && "added" || a(this, Jt) === null && this.guessedText && "review" || "missing";
}, ql = async function() {
  var i, n, r;
  const t = a(this, rs);
  if (!t)
    return;
  if (a(this, Rs)) {
    if (t.classList.toggle("done", !!a(this, Jt)), t.setAttribute("data-l10n-id", a(be, Oi)[a(this, ms, Ua)]), (i = a(this, $r)) == null || i.setAttribute("data-l10n-id", a(be, Oi)[`${a(this, ms, Ua)}-label`]), !a(this, Jt)) {
      (n = a(this, Cs)) == null || n.remove();
      return;
    }
  } else {
    if (!a(this, Jt) && !a(this, Ts)) {
      t.classList.remove("done"), (r = a(this, Cs)) == null || r.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = a(this, Cs);
  if (!e) {
    m(this, Cs, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${a(this, xe).id}`;
    const o = 100, l = a(this, xe)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(a(this, Ie)), m(this, Ie, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      m(this, Ie, setTimeout(() => {
        m(this, Ie, null), a(this, Cs).classList.add("show"), a(this, xe)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var h;
      a(this, Ie) && (clearTimeout(a(this, Ie)), m(this, Ie, null)), (h = a(this, Cs)) == null || h.classList.remove("show");
    }, {
      signal: l
    });
  }
  a(this, Ts) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = a(this, Jt)), e.parentNode || t.append(e);
  const s = a(this, xe).getImageForAltText();
  s == null || s.setAttribute("aria-describedby", e.id);
}, v(be, Oi, null), W(be, "_l10n", null);
let yc = be;
var Sn, as, Rt, Wr, xn, ie, Tn, Ni, Po, Cn, Hi, Ro, Pn, Js, Ls, qr, Xr, We, Lo, Pc, Z, Ph, ko, Rh, Lh, Af, yf, kh, Mh, Ih, vf, Fh, _f, wf, Ef, Dh, $a;
const ct = class ct {
  constructor(t) {
    v(this, Z);
    v(this, Sn, null);
    v(this, as, null);
    v(this, Rt, null);
    v(this, Wr, !1);
    v(this, xn, !1);
    v(this, ie, null);
    v(this, Tn, null);
    v(this, Ni, null);
    v(this, Po, "");
    v(this, Cn, !1);
    v(this, Hi, null);
    v(this, Ro, !1);
    v(this, Pn, !1);
    v(this, Js, !1);
    v(this, Ls, null);
    v(this, qr, 0);
    v(this, Xr, 0);
    v(this, We, null);
    W(this, "_editToolbar", null);
    W(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    W(this, "_initialData", null);
    W(this, "_isVisible", !0);
    W(this, "_uiManager", null);
    W(this, "_focusEventsAllowed", !0);
    v(this, Lo, !1);
    v(this, Pc, ct._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: s,
        pageHeight: i,
        pageX: n,
        pageY: r
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, i], this.pageTranslation = [n, r];
    const [o, l] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = ct.prototype._resizeWithKeyboard, e = fr.TRANSLATE_SMALL, s = fr.TRANSLATE_BIG;
    return nt(this, "_resizerKeyboardManager", new Ll([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-s, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [s, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -s]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, s]
    }], [["Escape", "mac+Escape"], ct.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return nt(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new Hm({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (ct._l10n ?? (ct._l10n = t), ct._l10nResizer || (ct._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), ct._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    ct._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    xt("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return a(this, Lo);
  }
  set _isDraggable(t) {
    var e;
    m(this, Lo, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = a(this, Pc);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : b(this, Z, $a).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (a(this, Cn) ? m(this, Cn, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    var s;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (s = this.parent) != null && s.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, s, i) {
    const [n, r] = this.parentDimensions;
    [s, i] = this.screenToPageTranslation(s, i), this.x = (t + s) / n, this.y = (e + i) / r, this.fixAndSetPosition();
  }
  translate(t, e) {
    b(this, Z, Ph).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    a(this, Hi) || m(this, Hi, [this.x, this.y]), b(this, Z, Ph).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(t, e) {
    a(this, Hi) || m(this, Hi, [this.x, this.y]);
    const [s, i] = this.parentDimensions;
    if (this.x += t / s, this.y += e / i, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: h,
        y: d
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, h, d) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: n,
      y: r
    } = this;
    const [o, l] = this.getBaseTranslation();
    n += o, r += l, this.div.style.left = `${(100 * n).toFixed(2)}%`, this.div.style.top = `${(100 * r).toFixed(2)}%`, this.div.scrollIntoView({
      block: "nearest"
    });
  }
  get _hasBeenMoved() {
    return !!a(this, Hi) && (a(this, Hi)[0] !== this.x || a(this, Hi)[1] !== this.y);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: s
    } = ct, i = s / t, n = s / e;
    switch (this.rotation) {
      case 90:
        return [-i, n];
      case 180:
        return [i, n];
      case 270:
        return [i, -n];
      default:
        return [-i, -n];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const [e, s] = this.pageDimensions;
    let {
      x: i,
      y: n,
      width: r,
      height: o
    } = this;
    if (r *= e, o *= s, i *= e, n *= s, this._mustFixPosition)
      switch (t) {
        case 0:
          i = Math.max(0, Math.min(e - r, i)), n = Math.max(0, Math.min(s - o, n));
          break;
        case 90:
          i = Math.max(0, Math.min(e - o, i)), n = Math.min(s, Math.max(r, n));
          break;
        case 180:
          i = Math.min(e, Math.max(r, i)), n = Math.min(s, Math.max(o, n));
          break;
        case 270:
          i = Math.min(e, Math.max(o, i)), n = Math.max(0, Math.min(s - r, n));
          break;
      }
    this.x = i /= e, this.y = n /= s;
    const [l, h] = this.getBaseTranslation();
    i += l, n += h;
    const {
      style: d
    } = this.div;
    d.left = `${(100 * i).toFixed(2)}%`, d.top = `${(100 * n).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var s;
    return b(s = ct, ko, Rh).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return b(s = ct, ko, Rh).call(s, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, s]
    } = this;
    return [e * t, s * t];
  }
  setDims(t, e) {
    const [s, i] = this.parentDimensions;
    this.div.style.width = `${(100 * t / s).toFixed(2)}%`, a(this, xn) || (this.div.style.height = `${(100 * e / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: s
    } = t, i = s.endsWith("%"), n = !a(this, xn) && e.endsWith("%");
    if (i && n)
      return;
    const [r, o] = this.parentDimensions;
    i || (t.width = `${(100 * parseFloat(s) / r).toFixed(2)}%`), !a(this, xn) && !n && (t.height = `${(100 * parseFloat(e) / o).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  altTextFinish() {
    var t;
    (t = a(this, Rt)) == null || t.finish();
  }
  async addEditToolbar() {
    return this._editToolbar || a(this, Pn) ? this._editToolbar : (this._editToolbar = new Ah(this), this.div.append(this._editToolbar.render()), a(this, Rt) && await this._editToolbar.addAltText(a(this, Rt)), this._editToolbar);
  }
  removeEditToolbar() {
    var t;
    this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (t = a(this, Rt)) == null || t.destroy());
  }
  addContainer(t) {
    var s;
    const e = (s = this._editToolbar) == null ? void 0 : s.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    a(this, Rt) || (yc.initialize(ct._l10n), m(this, Rt, new yc(this)), a(this, Sn) && (a(this, Rt).data = a(this, Sn), m(this, Sn, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var t;
    return (t = a(this, Rt)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    a(this, Rt) && (a(this, Rt).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = a(this, Rt)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = a(this, Rt)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = a(this, Rt)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!a(this, Rt) && !a(this, Rt).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = a(this, Rt)) == null ? void 0 : t.hasData()) ?? !1;
  }
  render() {
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = a(this, Wr) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), b(this, Z, Fh).call(this);
    const [t, e] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * e / t).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * t / e).toFixed(2)}%`);
    const [s, i] = this.getInitialTranslation();
    return this.translate(s, i), Ac(this, this.div, ["pointerdown"]), this.div;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = ve.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (m(this, Cn, !0), this._isDraggable) {
      b(this, Z, vf).call(this, t);
      return;
    }
    b(this, Z, Ih).call(this, t);
  }
  get isSelected() {
    return this._uiManager.isSelected(this);
  }
  moveInDOM() {
    a(this, Ls) && clearTimeout(a(this, Ls)), m(this, Ls, setTimeout(() => {
      var t;
      m(this, Ls, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition();
  }
  getRect(t, e, s = this.rotation) {
    const i = this.parentScale, [n, r] = this.pageDimensions, [o, l] = this.pageTranslation, h = t / i, d = e / i, u = this.x * n, f = this.y * r, p = this.width * n, g = this.height * r;
    switch (s) {
      case 0:
        return [u + h + o, r - f - d - g + l, u + h + p + o, r - f - d + l];
      case 90:
        return [u + d + o, r - f + h + l, u + d + g + o, r - f + h + p + l];
      case 180:
        return [u - h - p + o, r - f + d + l, u - h + o, r - f + d + g + l];
      case 270:
        return [u - d - g + o, r - f - h - p + l, u - d + o, r - f - h + l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [s, i, n, r] = t, o = n - s, l = r - i;
    switch (this.rotation) {
      case 0:
        return [s, e - r, o, l];
      case 90:
        return [s, e - i, l, o];
      case 180:
        return [n, e - i, o, l];
      case 270:
        return [n, e - r, l, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded() {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    m(this, Pn, !0);
  }
  disableEditMode() {
    m(this, Pn, !1);
  }
  isInEditMode() {
    return a(this, Pn);
  }
  shouldGetKeyboardEvents() {
    return a(this, Js);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  rebuild() {
    b(this, Z, Fh).call(this);
  }
  rotate(t) {
  }
  serializeDeleted() {
    var t;
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || ""
    };
  }
  serialize(t = !1, e = null) {
    xt("An editor must be serializable");
  }
  static async deserialize(t, e, s) {
    const i = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: s
    });
    i.rotation = t.rotation, m(i, Sn, t.accessibilityData);
    const [n, r] = i.pageDimensions, [o, l, h, d] = i.getRectInCurrentCoords(t.rect, r);
    return i.x = o / n, i.y = l / r, i.width = h / n, i.height = d / r, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t;
    if ((t = a(this, Ni)) == null || t.abort(), m(this, Ni, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), a(this, Ls) && (clearTimeout(a(this, Ls)), m(this, Ls, null)), b(this, Z, $a).call(this), this.removeEditToolbar(), a(this, We)) {
      for (const e of a(this, We).values())
        clearTimeout(e);
      m(this, We, null);
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (b(this, Z, Af).call(this), a(this, ie).classList.remove("hidden"), Ac(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), m(this, Tn, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = a(this, ie).children;
    if (!a(this, as)) {
      m(this, as, Array.from(e));
      const r = b(this, Z, _f).bind(this), o = b(this, Z, wf).bind(this), l = this._uiManager._signal;
      for (const h of a(this, as)) {
        const d = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", r, {
          signal: l
        }), h.addEventListener("blur", o, {
          signal: l
        }), h.addEventListener("focus", b(this, Z, Ef).bind(this, d), {
          signal: l
        }), h.setAttribute("data-l10n-id", ct._l10nResizer[d]);
      }
    }
    const s = a(this, as)[0];
    let i = 0;
    for (const r of e) {
      if (r === s)
        break;
      i++;
    }
    const n = (360 - this.rotation + this.parentRotation) % 360 / 90 * (a(this, as).length / 4);
    if (n !== i) {
      if (n < i)
        for (let o = 0; o < i - n; o++)
          a(this, ie).append(a(this, ie).firstChild);
      else if (n > i)
        for (let o = 0; o < n - i; o++)
          a(this, ie).firstChild.before(a(this, ie).lastChild);
      let r = 0;
      for (const o of e) {
        const h = a(this, as)[r++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", ct._l10nResizer[h]);
      }
    }
    b(this, Z, Dh).call(this, 0), m(this, Js, !0), a(this, ie).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    a(this, Js) && b(this, Z, Mh).call(this, a(this, Po), {
      movementX: t,
      movementY: e
    });
  }
  _stopResizingWithKeyboard() {
    b(this, Z, $a).call(this), this.div.focus();
  }
  select() {
    var t, e, s;
    if (this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        var i, n;
        (i = this.div) != null && i.classList.contains("selectedEditor") && ((n = this._editToolbar) == null || n.show());
      });
      return;
    }
    (e = this._editToolbar) == null || e.show(), (s = a(this, Rt)) == null || s.toggleAltTextBadge(!1);
  }
  unselect() {
    var t, e, s, i, n;
    (t = a(this, ie)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = this._editToolbar) == null || i.hide(), (n = a(this, Rt)) == null || n.toggleAltTextBadge(!0);
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return a(this, Ro);
  }
  set isEditing(t) {
    m(this, Ro, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    m(this, xn, !0);
    const s = t / e, {
      style: i
    } = this.div;
    i.aspectRatio = s, i.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      a(this, We) || m(this, We, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let i = a(this, We).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), a(this, We).delete(s), a(this, We).size === 0 && m(this, We, null);
      }, ct._telemetryTimeout), a(this, We).set(s, i);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), m(this, Wr, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), m(this, Wr, !0);
  }
  renderAnnotationElement(t) {
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const s = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), s.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstChild: e
    } = t.container;
    (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
Sn = new WeakMap(), as = new WeakMap(), Rt = new WeakMap(), Wr = new WeakMap(), xn = new WeakMap(), ie = new WeakMap(), Tn = new WeakMap(), Ni = new WeakMap(), Po = new WeakMap(), Cn = new WeakMap(), Hi = new WeakMap(), Ro = new WeakMap(), Pn = new WeakMap(), Js = new WeakMap(), Ls = new WeakMap(), qr = new WeakMap(), Xr = new WeakMap(), We = new WeakMap(), Lo = new WeakMap(), Pc = new WeakMap(), Z = new WeakSet(), Ph = function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this.fixAndSetPosition();
}, ko = new WeakSet(), Rh = function(t, e, s) {
  switch (s) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, Lh = function(t) {
  switch (t) {
    case 90: {
      const [e, s] = this.pageDimensions;
      return [0, -e / s, s / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, s] = this.pageDimensions;
      return [0, e / s, -s / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, Af = function() {
  if (a(this, ie))
    return;
  m(this, ie, document.createElement("div")), a(this, ie).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    a(this, ie).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", b(this, Z, yf).bind(this, s), {
      signal: e
    }), i.addEventListener("contextmenu", Ze, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(a(this, ie));
}, yf = function(t, e) {
  var g;
  e.preventDefault();
  const {
    isMac: s
  } = ve.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  (g = a(this, Rt)) == null || g.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1;
  const n = new AbortController(), r = this._uiManager.combinedSignal(n);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", b(this, Z, Mh).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: r
  }), window.addEventListener("contextmenu", Ze, {
    signal: r
  });
  const o = this.x, l = this.y, h = this.width, d = this.height, u = this.parent.div.style.cursor, f = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const p = () => {
    var A;
    n.abort(), this.parent.togglePointerEvents(!0), (A = a(this, Rt)) == null || A.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = u, this.div.style.cursor = f, b(this, Z, kh).call(this, o, l, h, d);
  };
  window.addEventListener("pointerup", p, {
    signal: r
  }), window.addEventListener("blur", p, {
    signal: r
  });
}, kh = function(t, e, s, i) {
  const n = this.x, r = this.y, o = this.width, l = this.height;
  n === t && r === e && o === s && l === i || this.addCommands({
    cmd: () => {
      this.width = o, this.height = l, this.x = n, this.y = r;
      const [h, d] = this.parentDimensions;
      this.setDims(h * o, d * l), this.fixAndSetPosition();
    },
    undo: () => {
      this.width = s, this.height = i, this.x = t, this.y = e;
      const [h, d] = this.parentDimensions;
      this.setDims(h * s, d * i), this.fixAndSetPosition();
    },
    mustExec: !0
  });
}, Mh = function(t, e) {
  const [s, i] = this.parentDimensions, n = this.x, r = this.y, o = this.width, l = this.height, h = ct.MIN_SIZE / s, d = ct.MIN_SIZE / i, u = (F) => Math.round(F * 1e4) / 1e4, f = b(this, Z, Lh).call(this, this.rotation), p = (F, N) => [f[0] * F + f[2] * N, f[1] * F + f[3] * N], g = b(this, Z, Lh).call(this, 360 - this.rotation), A = (F, N) => [g[0] * F + g[2] * N, g[1] * F + g[3] * N];
  let _, y, w = !1, E = !1;
  switch (t) {
    case "topLeft":
      w = !0, _ = (F, N) => [0, 0], y = (F, N) => [F, N];
      break;
    case "topMiddle":
      _ = (F, N) => [F / 2, 0], y = (F, N) => [F / 2, N];
      break;
    case "topRight":
      w = !0, _ = (F, N) => [F, 0], y = (F, N) => [0, N];
      break;
    case "middleRight":
      E = !0, _ = (F, N) => [F, N / 2], y = (F, N) => [0, N / 2];
      break;
    case "bottomRight":
      w = !0, _ = (F, N) => [F, N], y = (F, N) => [0, 0];
      break;
    case "bottomMiddle":
      _ = (F, N) => [F / 2, N], y = (F, N) => [F / 2, 0];
      break;
    case "bottomLeft":
      w = !0, _ = (F, N) => [0, N], y = (F, N) => [F, 0];
      break;
    case "middleLeft":
      E = !0, _ = (F, N) => [0, N / 2], y = (F, N) => [F, N / 2];
      break;
  }
  const S = _(o, l), T = y(o, l);
  let x = p(...T);
  const C = u(n + x[0]), P = u(r + x[1]);
  let R = 1, k = 1, [L, U] = this.screenToPageTranslation(e.movementX, e.movementY);
  if ([L, U] = A(L / s, U / i), w) {
    const F = Math.hypot(o, l);
    R = k = Math.max(Math.min(Math.hypot(T[0] - S[0] - L, T[1] - S[1] - U) / F, 1 / o, 1 / l), h / o, d / l);
  } else E ? R = Math.max(h, Math.min(1, Math.abs(T[0] - S[0] - L))) / o : k = Math.max(d, Math.min(1, Math.abs(T[1] - S[1] - U))) / l;
  const j = u(o * R), H = u(l * k);
  x = p(...y(j, H));
  const $ = C - x[0], V = P - x[1];
  this.width = j, this.height = H, this.x = $, this.y = V, this.setDims(s * j, i * H), this.fixAndSetPosition();
}, Ih = function(t) {
  const {
    isMac: e
  } = ve.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, vf = function(t) {
  const {
    isSelected: e
  } = this;
  this._uiManager.setUpDragSession();
  const s = new AbortController(), i = this._uiManager.combinedSignal(s);
  if (e) {
    this.div.classList.add("moving"), m(this, qr, t.clientX), m(this, Xr, t.clientY);
    const r = (o) => {
      const {
        clientX: l,
        clientY: h
      } = o, [d, u] = this.screenToPageTranslation(l - a(this, qr), h - a(this, Xr));
      m(this, qr, l), m(this, Xr, h), this._uiManager.dragSelectedEditors(d, u);
    };
    window.addEventListener("pointermove", r, {
      passive: !0,
      capture: !0,
      signal: i
    });
  }
  const n = () => {
    s.abort(), e && this.div.classList.remove("moving"), m(this, Cn, !1), this._uiManager.endDragSession() || b(this, Z, Ih).call(this, t);
  };
  window.addEventListener("pointerup", n, {
    signal: i
  }), window.addEventListener("blur", n, {
    signal: i
  });
}, Fh = function() {
  if (a(this, Ni) || !this.div)
    return;
  m(this, Ni, new AbortController());
  const t = this._uiManager.combinedSignal(a(this, Ni));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, _f = function(t) {
  ct._resizerKeyboardManager.exec(this, t);
}, wf = function(t) {
  var e;
  a(this, Js) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== a(this, ie) && b(this, Z, $a).call(this);
}, Ef = function(t) {
  m(this, Po, a(this, Js) ? t : "");
}, Dh = function(t) {
  if (a(this, as))
    for (const e of a(this, as))
      e.tabIndex = t;
}, $a = function() {
  if (m(this, Js, !1), b(this, Z, Dh).call(this, -1), a(this, Tn)) {
    const {
      savedX: t,
      savedY: e,
      savedWidth: s,
      savedHeight: i
    } = a(this, Tn);
    b(this, Z, kh).call(this, t, e, s, i), m(this, Tn, null);
  }
}, v(ct, ko), W(ct, "_l10n", null), W(ct, "_l10nResizer", null), W(ct, "_borderLineWidth", -1), W(ct, "_colorManager", new _h()), W(ct, "_zIndex", 1), W(ct, "_telemetryTimeout", 1e3);
let gt = ct;
class Hm extends gt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const gu = 3285377520, $e = 4294901760, _s = 65535;
class Sf {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : gu, this.h2 = t ? t & 4294967295 : gu;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let A = 0, _ = t.length; A < _; A++) {
        const y = t.charCodeAt(A);
        y <= 255 ? e[s++] = y : (e[s++] = y >>> 8, e[s++] = y & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, n = s - i * 4, r = new Uint32Array(e.buffer, 0, i);
    let o = 0, l = 0, h = this.h1, d = this.h2;
    const u = 3432918353, f = 461845907, p = u & _s, g = f & _s;
    for (let A = 0; A < i; A++)
      A & 1 ? (o = r[A], o = o * u & $e | o * p & _s, o = o << 15 | o >>> 17, o = o * f & $e | o * g & _s, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = r[A], l = l * u & $e | l * p & _s, l = l << 15 | l >>> 17, l = l * f & $e | l * g & _s, d ^= l, d = d << 13 | d >>> 19, d = d * 5 + 3864292196);
    switch (o = 0, n) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * u & $e | o * p & _s, o = o << 15 | o >>> 17, o = o * f & $e | o * g & _s, i & 1 ? h ^= o : d ^= o;
    }
    this.h1 = h, this.h2 = d;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & $e | t * 36045 & _s, e = e * 4283543511 & $e | ((e << 16 | t >>> 16) * 2950163797 & $e) >>> 16, t ^= e >>> 1, t = t * 444984403 & $e | t * 60499 & _s, e = e * 3301882366 & $e | ((e << 16 | t >>> 16) * 3120437893 & $e) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const Oh = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var Rn, Ln, Zt, Rc, xf;
class $d {
  constructor() {
    v(this, Rc);
    v(this, Rn, !1);
    v(this, Ln, null);
    v(this, Zt, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const s = a(this, Zt).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return a(this, Zt).get(t);
  }
  remove(t) {
    if (a(this, Zt).delete(t), a(this, Zt).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of a(this, Zt).values())
        if (e instanceof gt)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = a(this, Zt).get(t);
    let i = !1;
    if (s !== void 0)
      for (const [n, r] of Object.entries(e))
        s[n] !== r && (i = !0, s[n] = r);
    else
      i = !0, a(this, Zt).set(t, e);
    i && b(this, Rc, xf).call(this), e instanceof gt && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return a(this, Zt).has(t);
  }
  getAll() {
    return a(this, Zt).size > 0 ? Hd(a(this, Zt)) : null;
  }
  setAll(t) {
    for (const [e, s] of Object.entries(t))
      this.setValue(e, s);
  }
  get size() {
    return a(this, Zt).size;
  }
  resetModified() {
    a(this, Rn) && (m(this, Rn, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Tf(this);
  }
  get serializable() {
    if (a(this, Zt).size === 0)
      return Oh;
    const t = /* @__PURE__ */ new Map(), e = new Sf(), s = [], i = /* @__PURE__ */ Object.create(null);
    let n = !1;
    for (const [r, o] of a(this, Zt)) {
      const l = o instanceof gt ? o.serialize(!1, i) : o;
      l && (t.set(r, l), e.update(`${r}:${JSON.stringify(l)}`), n || (n = !!l.bitmap));
    }
    if (n)
      for (const r of t.values())
        r.bitmap && s.push(r.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: s
    } : Oh;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const s of a(this, Zt).values()) {
      if (!(s instanceof gt))
        continue;
      const i = s.telemetryFinalData;
      if (!i)
        continue;
      const {
        type: n
      } = i;
      e.has(n) || e.set(n, Object.getPrototypeOf(s).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const r = t[n] || (t[n] = /* @__PURE__ */ new Map());
      for (const [o, l] of Object.entries(i)) {
        if (o === "type")
          continue;
        let h = r.get(o);
        h || (h = /* @__PURE__ */ new Map(), r.set(o, h));
        const d = h.get(l) ?? 0;
        h.set(l, d + 1);
      }
    }
    for (const [s, i] of e)
      t[s] = i.computeTelemetryFinalData(t[s]);
    return t;
  }
  resetModifiedIds() {
    m(this, Ln, null);
  }
  get modifiedIds() {
    if (a(this, Ln))
      return a(this, Ln);
    const t = [];
    for (const e of a(this, Zt).values())
      !(e instanceof gt) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
    return m(this, Ln, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
}
Rn = new WeakMap(), Ln = new WeakMap(), Zt = new WeakMap(), Rc = new WeakSet(), xf = function() {
  a(this, Rn) || (m(this, Rn, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var Mo;
class Tf extends $d {
  constructor(e) {
    super();
    v(this, Mo);
    const {
      map: s,
      hash: i,
      transfer: n
    } = e.serializable, r = structuredClone(s, n ? {
      transfer: n
    } : null);
    m(this, Mo, {
      map: r,
      hash: i,
      transfer: n
    });
  }
  get print() {
    xt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return a(this, Mo);
  }
  get modifiedIds() {
    return nt(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
Mo = new WeakMap();
var Yr;
class Bm {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    v(this, Yr, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), a(this, Yr).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    _inspectFont: e
  }) {
    if (!(!t || a(this, Yr).has(t.loadedName))) {
      if (Wt(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: i,
          style: n
        } = t, r = new FontFace(s, i, n);
        this.addNativeFontFace(r);
        try {
          await r.load(), a(this, Yr).add(s), e == null || e(t);
        } catch {
          tt(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(r);
        }
        return;
      }
      xt("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const s = t.createNativeFontFace();
      if (s) {
        this.addNativeFontFace(s);
        try {
          await s.loaded;
        } catch (i) {
          throw tt(`Failed to load font '${s.family}': '${i}'.`), t.disableFontFace = !0, i;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((s) => {
        const i = this._queueLoadingCallback(s);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const t = !!((e = this._document) != null && e.fonts);
    return nt(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    let t = !1;
    return (pe || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t = !0), nt(this, "isSyncFontLoadingSupported", t);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (Wt(!i.done, "completeRequest() cannot be called twice."), i.done = !0; s.length > 0 && s[0].done; ) {
        const n = s.shift();
        setTimeout(n.callback, 0);
      }
    }
    const {
      loadingRequests: s
    } = this, i = {
      done: !1,
      complete: e,
      callback: t
    };
    return s.push(i), i;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return nt(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(S, T) {
      return S.charCodeAt(T) << 24 | S.charCodeAt(T + 1) << 16 | S.charCodeAt(T + 2) << 8 | S.charCodeAt(T + 3) & 255;
    }
    function i(S, T, x, C) {
      const P = S.substring(0, T), R = S.substring(T + x);
      return P + C + R;
    }
    let n, r;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const l = o.getContext("2d");
    let h = 0;
    function d(S, T) {
      if (++h > 30) {
        tt("Load test font never loaded."), T();
        return;
      }
      if (l.font = "30px " + S, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        T();
        return;
      }
      setTimeout(d.bind(null, S, T));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let f = this._loadTestFont;
    f = i(f, 976, u.length, u);
    const g = 16, A = 1482184792;
    let _ = s(f, g);
    for (n = 0, r = u.length - 3; n < r; n += 4)
      _ = _ - A + s(u, n) | 0;
    n < u.length && (_ = _ - A + s(u + "XXX", n) | 0), f = i(f, g, 4, Em(_));
    const y = `url(data:font/opentype;base64,${btoa(f)});`, w = `@font-face {font-family:"${u}";src:${y}}`;
    this.insertRule(w);
    const E = this._document.createElement("div");
    E.style.visibility = "hidden", E.style.width = E.style.height = "10px", E.style.position = "absolute", E.style.top = E.style.left = "0px";
    for (const S of [t.loadedName, u]) {
      const T = this._document.createElement("span");
      T.textContent = "Hi", T.style.fontFamily = S, E.append(T);
    }
    this._document.body.append(E), d(u, () => {
      E.remove(), e.complete();
    });
  }
}
Yr = new WeakMap();
class jm {
  constructor(t, {
    disableFontFace: e = !1,
    inspectFont: s = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const i in t)
      this[i] = t[i];
    this.disableFontFace = e === !0, this._inspectFont = s;
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const s = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (s.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, s);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }
  createFontFaceRule() {
    var s;
    if (!this.data || this.disableFontFace)
      return null;
    const t = `url(data:${this.mimetype};base64,${Rm(this.data)});`;
    let e;
    if (!this.cssFontInfo)
      e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    else {
      let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${t}}`;
    }
    return (s = this._inspectFont) == null || s.call(this, this, t), e;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    let s;
    try {
      s = t.get(this.loadedName + "_path_" + e);
    } catch (n) {
      tt(`getPathGenerator - ignoring character: "${n}".`);
    }
    if (!Array.isArray(s) || s.length === 0)
      return this.compiledGlyphs[e] = function(n, r) {
      };
    const i = [];
    for (let n = 0, r = s.length; n < r; )
      switch (s[n++]) {
        case Us.BEZIER_CURVE_TO:
          {
            const [o, l, h, d, u, f] = s.slice(n, n + 6);
            i.push((p) => p.bezierCurveTo(o, l, h, d, u, f)), n += 6;
          }
          break;
        case Us.MOVE_TO:
          {
            const [o, l] = s.slice(n, n + 2);
            i.push((h) => h.moveTo(o, l)), n += 2;
          }
          break;
        case Us.LINE_TO:
          {
            const [o, l] = s.slice(n, n + 2);
            i.push((h) => h.lineTo(o, l)), n += 2;
          }
          break;
        case Us.QUADRATIC_CURVE_TO:
          {
            const [o, l, h, d] = s.slice(n, n + 4);
            i.push((u) => u.quadraticCurveTo(o, l, h, d)), n += 4;
          }
          break;
        case Us.RESTORE:
          i.push((o) => o.restore());
          break;
        case Us.SAVE:
          i.push((o) => o.save());
          break;
        case Us.SCALE:
          Wt(i.length === 2, "Scale command is only valid at the third position.");
          break;
        case Us.TRANSFORM:
          {
            const [o, l, h, d, u, f] = s.slice(n, n + 6);
            i.push((p) => p.transform(o, l, h, d, u, f)), n += 6;
          }
          break;
        case Us.TRANSLATE:
          {
            const [o, l] = s.slice(n, n + 2);
            i.push((h) => h.translate(o, l)), n += 2;
          }
          break;
      }
    return this.compiledGlyphs[e] = function(r, o) {
      i[0](r), i[1](r), r.scale(o, -o);
      for (let l = 2, h = i.length; l < h; l++)
        i[l](r);
    };
  }
}
var Io;
class Cf {
  constructor({
    enableHWA: t = !1
  }) {
    v(this, Io, !1);
    m(this, Io, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !a(this, Io)
      })
    };
  }
  reset(t, e, s) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || s <= 0)
      throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = s;
  }
  destroy(t) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    xt("Abstract method `_createCanvas` called.");
  }
}
Io = new WeakMap();
class zm extends Cf {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: e = !1
  }) {
    super({
      enableHWA: e
    }), this._document = t;
  }
  _createCanvas(t, e) {
    const s = this._document.createElement("canvas");
    return s.width = t, s.height = e, s;
  }
}
class Pf {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }) {
    this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({
    name: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!t)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(e).then((s) => ({
      cMapData: s,
      isCompressed: this.isCompressed
    })).catch((s) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  async _fetch(t) {
    xt("Abstract method `_fetch` called.");
  }
}
class Rf extends Pf {
  async _fetch(t) {
    const e = await Wc(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : Vc(e);
  }
}
class Lf {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, s, i, n) {
    return "none";
  }
  destroy(t = !1) {
  }
}
var kn, Mn, ks, Zs, he, Lc, In, D, le, Er, Sr, Xl, xr, kf, Nh, Tr, Va, Wa, Hh, qa;
class Gm extends Lf {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    v(this, D);
    v(this, kn);
    v(this, Mn);
    v(this, ks);
    v(this, Zs);
    v(this, he);
    v(this, Lc);
    v(this, In, 0);
    m(this, Zs, e), m(this, he, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = a(this, D, le).get(e);
    if (s)
      return s;
    const [i, n, r] = b(this, D, Xl).call(this, e), o = e.length === 1 ? i : `${i}${n}${r}`;
    if (s = a(this, D, le).get(o), s)
      return a(this, D, le).set(e, s), s;
    const l = `g_${a(this, Zs)}_transfer_map_${ge(this, In)._++}`, h = b(this, D, xr).call(this, l);
    a(this, D, le).set(e, h), a(this, D, le).set(o, h);
    const d = b(this, D, Tr).call(this, l);
    return b(this, D, Wa).call(this, i, n, r, d), h;
  }
  addHCMFilter(e, s) {
    var g;
    const i = `${e}-${s}`, n = "base";
    let r = a(this, D, Er).get(n);
    if ((r == null ? void 0 : r.key) === i || (r ? ((g = r.filter) == null || g.remove(), r.key = i, r.url = "none", r.filter = null) : (r = {
      key: i,
      url: "none",
      filter: null
    }, a(this, D, Er).set(n, r)), !e || !s))
      return r.url;
    const o = b(this, D, qa).call(this, e);
    e = B.makeHexColor(...o);
    const l = b(this, D, qa).call(this, s);
    if (s = B.makeHexColor(...l), a(this, D, Sr).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return r.url;
    const h = new Array(256);
    for (let A = 0; A <= 255; A++) {
      const _ = A / 255;
      h[A] = _ <= 0.03928 ? _ / 12.92 : ((_ + 0.055) / 1.055) ** 2.4;
    }
    const d = h.join(","), u = `g_${a(this, Zs)}_hcm_filter`, f = r.filter = b(this, D, Tr).call(this, u);
    b(this, D, Wa).call(this, d, d, d, f), b(this, D, Nh).call(this, f);
    const p = (A, _) => {
      const y = o[A] / 255, w = l[A] / 255, E = new Array(_ + 1);
      for (let S = 0; S <= _; S++)
        E[S] = y + S / _ * (w - y);
      return E.join(",");
    };
    return b(this, D, Wa).call(this, p(0, 5), p(1, 5), p(2, 5), f), r.url = b(this, D, xr).call(this, u), r.url;
  }
  addAlphaFilter(e) {
    let s = a(this, D, le).get(e);
    if (s)
      return s;
    const [i] = b(this, D, Xl).call(this, [e]), n = `alpha_${i}`;
    if (s = a(this, D, le).get(n), s)
      return a(this, D, le).set(e, s), s;
    const r = `g_${a(this, Zs)}_alpha_map_${ge(this, In)._++}`, o = b(this, D, xr).call(this, r);
    a(this, D, le).set(e, o), a(this, D, le).set(n, o);
    const l = b(this, D, Tr).call(this, r);
    return b(this, D, Hh).call(this, i, l), o;
  }
  addLuminosityFilter(e) {
    let s = a(this, D, le).get(e || "luminosity");
    if (s)
      return s;
    let i, n;
    if (e ? ([i] = b(this, D, Xl).call(this, [e]), n = `luminosity_${i}`) : n = "luminosity", s = a(this, D, le).get(n), s)
      return a(this, D, le).set(e, s), s;
    const r = `g_${a(this, Zs)}_luminosity_map_${ge(this, In)._++}`, o = b(this, D, xr).call(this, r);
    a(this, D, le).set(e, o), a(this, D, le).set(n, o);
    const l = b(this, D, Tr).call(this, r);
    return b(this, D, kf).call(this, l), e && b(this, D, Hh).call(this, i, l), o;
  }
  addHighlightHCMFilter(e, s, i, n, r) {
    var w;
    const o = `${s}-${i}-${n}-${r}`;
    let l = a(this, D, Er).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((w = l.filter) == null || w.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, a(this, D, Er).set(e, l)), !s || !i))
      return l.url;
    const [h, d] = [s, i].map(b(this, D, qa).bind(this));
    let u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), f = Math.round(0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]), [p, g] = [n, r].map(b(this, D, qa).bind(this));
    f < u && ([u, f, p, g] = [f, u, g, p]), a(this, D, Sr).style.color = "";
    const A = (E, S, T) => {
      const x = new Array(256), C = (f - u) / T, P = E / 255, R = (S - E) / (255 * T);
      let k = 0;
      for (let L = 0; L <= T; L++) {
        const U = Math.round(u + L * C), j = P + L * R;
        for (let H = k; H <= U; H++)
          x[H] = j;
        k = U + 1;
      }
      for (let L = k; L < 256; L++)
        x[L] = x[k - 1];
      return x.join(",");
    }, _ = `g_${a(this, Zs)}_hcm_${e}_filter`, y = l.filter = b(this, D, Tr).call(this, _);
    return b(this, D, Nh).call(this, y), b(this, D, Wa).call(this, A(p[0], g[0], 5), A(p[1], g[1], 5), A(p[2], g[2], 5), y), l.url = b(this, D, xr).call(this, _), l.url;
  }
  destroy(e = !1) {
    e && a(this, D, Er).size !== 0 || (a(this, ks) && (a(this, ks).parentNode.parentNode.remove(), m(this, ks, null)), a(this, Mn) && (a(this, Mn).clear(), m(this, Mn, null)), m(this, In, 0));
  }
}
kn = new WeakMap(), Mn = new WeakMap(), ks = new WeakMap(), Zs = new WeakMap(), he = new WeakMap(), Lc = new WeakMap(), In = new WeakMap(), D = new WeakSet(), le = function() {
  return a(this, Mn) || m(this, Mn, /* @__PURE__ */ new Map());
}, Er = function() {
  return a(this, Lc) || m(this, Lc, /* @__PURE__ */ new Map());
}, Sr = function() {
  if (!a(this, ks)) {
    const e = a(this, he).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = a(this, he).createElementNS(Vs, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), m(this, ks, a(this, he).createElementNS(Vs, "defs")), e.append(i), i.append(a(this, ks)), a(this, he).body.append(e);
  }
  return a(this, ks);
}, Xl = function(e) {
  if (e.length === 1) {
    const h = e[0], d = new Array(256);
    for (let f = 0; f < 256; f++)
      d[f] = h[f] / 255;
    const u = d.join(",");
    return [u, u, u];
  }
  const [s, i, n] = e, r = new Array(256), o = new Array(256), l = new Array(256);
  for (let h = 0; h < 256; h++)
    r[h] = s[h] / 255, o[h] = i[h] / 255, l[h] = n[h] / 255;
  return [r.join(","), o.join(","), l.join(",")];
}, xr = function(e) {
  if (a(this, kn) === void 0) {
    m(this, kn, "");
    const s = a(this, he).URL;
    s !== a(this, he).baseURI && (qc(s) ? tt('#createUrl: ignore "data:"-URL for performance reasons.') : m(this, kn, s.split("#", 1)[0]));
  }
  return `url(${a(this, kn)}#${e})`;
}, kf = function(e) {
  const s = a(this, he).createElementNS(Vs, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, Nh = function(e) {
  const s = a(this, he).createElementNS(Vs, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, Tr = function(e) {
  const s = a(this, he).createElementNS(Vs, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), a(this, D, Sr).append(s), s;
}, Va = function(e, s, i) {
  const n = a(this, he).createElementNS(Vs, s);
  n.setAttribute("type", "discrete"), n.setAttribute("tableValues", i), e.append(n);
}, Wa = function(e, s, i, n) {
  const r = a(this, he).createElementNS(Vs, "feComponentTransfer");
  n.append(r), b(this, D, Va).call(this, r, "feFuncR", e), b(this, D, Va).call(this, r, "feFuncG", s), b(this, D, Va).call(this, r, "feFuncB", i);
}, Hh = function(e, s) {
  const i = a(this, he).createElementNS(Vs, "feComponentTransfer");
  s.append(i), b(this, D, Va).call(this, i, "feFuncA", e);
}, qa = function(e) {
  return a(this, D, Sr).style.color = e, Ud(getComputedStyle(a(this, D, Sr)).getPropertyValue("color"));
};
class Mf {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!t)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((s) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  async _fetch(t) {
    xt("Abstract method `_fetch` called.");
  }
}
class If extends Mf {
  async _fetch(t) {
    const e = await Wc(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
if (pe) {
  var Bh = Promise.withResolvers(), ao = null;
  (async () => {
    const t = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.js"
    ), e = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.js"
    ), s = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.js"
    ), i = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.js"
    );
    let n, r;
    return new Map(Object.entries({
      fs: t,
      http: e,
      https: s,
      url: i,
      canvas: n,
      path2d: r
    }));
  })().then((t) => {
    ao = t, Bh.resolve();
  }, (t) => {
    tt(`loadPackages: ${t}`), ao = /* @__PURE__ */ new Map(), Bh.resolve();
  });
}
class sn {
  static get promise() {
    return Bh.promise;
  }
  static get(t) {
    return ao == null ? void 0 : ao.get(t);
  }
}
async function Ff(c) {
  const e = await sn.get("fs").promises.readFile(c);
  return new Uint8Array(e);
}
class Um extends Lf {
}
class $m extends Cf {
  _createCanvas(t, e) {
    return sn.get("canvas").createCanvas(t, e);
  }
}
class Vm extends Pf {
  async _fetch(t) {
    return Ff(t);
  }
}
class Wm extends Mf {
  async _fetch(t) {
    return Ff(t);
  }
}
const ye = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function jh(c, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), c.clip(i);
}
class Vd {
  getPattern() {
    xt("Abstract method `getPattern` called.");
  }
}
class qm extends Vd {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const s of this._colorStops)
      e.addColorStop(s[0], s[1]);
    return e;
  }
  getPattern(t, e, s, i) {
    let n;
    if (i === ye.STROKE || i === ye.FILL) {
      const r = e.current.getClippedPathBoundingBox(i, kt(t)) || [0, 0, 0, 0], o = Math.ceil(r[2] - r[0]) || 1, l = Math.ceil(r[3] - r[1]) || 1, h = e.cachedCanvases.getCanvas("pattern", o, l), d = h.context;
      d.clearRect(0, 0, d.canvas.width, d.canvas.height), d.beginPath(), d.rect(0, 0, d.canvas.width, d.canvas.height), d.translate(-r[0], -r[1]), s = B.transform(s, [1, 0, 0, 1, r[0], r[1]]), d.transform(...e.baseTransform), this.matrix && d.transform(...this.matrix), jh(d, this._bbox), d.fillStyle = this._createGradient(d), d.fill(), n = t.createPattern(h.canvas, "no-repeat");
      const u = new DOMMatrix(s);
      n.setTransform(u);
    } else
      jh(t, this._bbox), n = this._createGradient(t);
    return n;
  }
}
function ah(c, t, e, s, i, n, r, o) {
  const l = t.coords, h = t.colors, d = c.data, u = c.width * 4;
  let f;
  l[e + 1] > l[s + 1] && (f = e, e = s, s = f, f = n, n = r, r = f), l[s + 1] > l[i + 1] && (f = s, s = i, i = f, f = r, r = o, o = f), l[e + 1] > l[s + 1] && (f = e, e = s, s = f, f = n, n = r, r = f);
  const p = (l[e] + t.offsetX) * t.scaleX, g = (l[e + 1] + t.offsetY) * t.scaleY, A = (l[s] + t.offsetX) * t.scaleX, _ = (l[s + 1] + t.offsetY) * t.scaleY, y = (l[i] + t.offsetX) * t.scaleX, w = (l[i + 1] + t.offsetY) * t.scaleY;
  if (g >= w)
    return;
  const E = h[n], S = h[n + 1], T = h[n + 2], x = h[r], C = h[r + 1], P = h[r + 2], R = h[o], k = h[o + 1], L = h[o + 2], U = Math.round(g), j = Math.round(w);
  let H, $, V, F, N, _t, Dt, At;
  for (let ht = U; ht <= j; ht++) {
    if (ht < _) {
      const X = ht < g ? 0 : (g - ht) / (g - _);
      H = p - (p - A) * X, $ = E - (E - x) * X, V = S - (S - C) * X, F = T - (T - P) * X;
    } else {
      let X;
      ht > w ? X = 1 : _ === w ? X = 0 : X = (_ - ht) / (_ - w), H = A - (A - y) * X, $ = x - (x - R) * X, V = C - (C - k) * X, F = P - (P - L) * X;
    }
    let rt;
    ht < g ? rt = 0 : ht > w ? rt = 1 : rt = (g - ht) / (g - w), N = p - (p - y) * rt, _t = E - (E - R) * rt, Dt = S - (S - k) * rt, At = T - (T - L) * rt;
    const Tt = Math.round(Math.min(H, N)), te = Math.round(Math.max(H, N));
    let yt = u * ht + Tt * 4;
    for (let X = Tt; X <= te; X++)
      rt = (H - X) / (H - N), rt < 0 ? rt = 0 : rt > 1 && (rt = 1), d[yt++] = $ - ($ - _t) * rt | 0, d[yt++] = V - (V - Dt) * rt | 0, d[yt++] = F - (F - At) * rt | 0, d[yt++] = 255;
  }
}
function Xm(c, t, e) {
  const s = t.coords, i = t.colors;
  let n, r;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, l = Math.floor(s.length / o) - 1, h = o - 1;
      for (n = 0; n < l; n++) {
        let d = n * o;
        for (let u = 0; u < h; u++, d++)
          ah(c, e, s[d], s[d + 1], s[d + o], i[d], i[d + 1], i[d + o]), ah(c, e, s[d + o + 1], s[d + 1], s[d + o], i[d + o + 1], i[d + 1], i[d + o]);
      }
      break;
    case "triangles":
      for (n = 0, r = s.length; n < r; n += 3)
        ah(c, e, s[n], s[n + 1], s[n + 2], i[n], i[n + 1], i[n + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class Ym extends Vd {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), l = Math.floor(this._bounds[1]), h = Math.ceil(this._bounds[2]) - o, d = Math.ceil(this._bounds[3]) - l, u = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3), f = Math.min(Math.ceil(Math.abs(d * t[1] * 1.1)), 3e3), p = h / u, g = d / f, A = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / p,
      scaleY: 1 / g
    }, _ = u + 2 * 2, y = f + 2 * 2, w = s.getCanvas("mesh", _, y), E = w.context, S = E.createImageData(u, f);
    if (e) {
      const x = S.data;
      for (let C = 0, P = x.length; C < P; C += 4)
        x[C] = e[0], x[C + 1] = e[1], x[C + 2] = e[2], x[C + 3] = 255;
    }
    for (const x of this._figures)
      Xm(S, x, A);
    return E.putImageData(S, 2, 2), {
      canvas: w.canvas,
      offsetX: o - 2 * p,
      offsetY: l - 2 * g,
      scaleX: p,
      scaleY: g
    };
  }
  getPattern(t, e, s, i) {
    jh(t, this._bbox);
    let n;
    if (i === ye.SHADING)
      n = B.singularValueDecompose2dScale(kt(t));
    else if (n = B.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
      const o = B.singularValueDecompose2dScale(this.matrix);
      n = [n[0] * o[0], n[1] * o[1]];
    }
    const r = this._createMeshCanvas(n, i === ye.SHADING ? null : this._background, e.cachedCanvases);
    return i !== ye.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(r.offsetX, r.offsetY), t.scale(r.scaleX, r.scaleY), t.createPattern(r.canvas, "no-repeat");
  }
}
class Km extends Vd {
  getPattern() {
    return "hotpink";
  }
}
function Qm(c) {
  switch (c[0]) {
    case "RadialAxial":
      return new qm(c);
    case "Mesh":
      return new Ym(c);
    case "Dummy":
      return new Km();
  }
  throw new Error(`Unknown IR type: ${c[0]}`);
}
const mu = {
  COLORED: 1,
  UNCOLORED: 2
}, kc = class kc {
  constructor(t, e, s, i, n) {
    this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = s, this.canvasGraphicsFactory = i, this.baseTransform = n;
  }
  createPatternCanvas(t) {
    const {
      bbox: e,
      operatorList: s,
      paintType: i,
      tilingType: n,
      color: r,
      canvasGraphicsFactory: o
    } = this;
    let {
      xstep: l,
      ystep: h
    } = this;
    l = Math.abs(l), h = Math.abs(h), Uc("TilingType: " + n);
    const d = e[0], u = e[1], f = e[2], p = e[3], g = f - d, A = p - u, _ = B.singularValueDecompose2dScale(this.matrix), y = B.singularValueDecompose2dScale(this.baseTransform), w = _[0] * y[0], E = _[1] * y[1];
    let S = g, T = A, x = !1, C = !1;
    const P = Math.ceil(l * w), R = Math.ceil(h * E), k = Math.ceil(g * w), L = Math.ceil(A * E);
    P >= k ? S = l : x = !0, R >= L ? T = h : C = !0;
    const U = this.getSizeAndScale(S, this.ctx.canvas.width, w), j = this.getSizeAndScale(T, this.ctx.canvas.height, E), H = t.cachedCanvases.getCanvas("pattern", U.size, j.size), $ = H.context, V = o.createCanvasGraphics($);
    if (V.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(V, i, r), $.translate(-U.scale * d, -j.scale * u), V.transform(U.scale, 0, 0, j.scale, 0, 0), $.save(), this.clipBbox(V, d, u, f, p), V.baseTransform = kt(V.ctx), V.executeOperatorList(s), V.endDrawing(), $.restore(), x || C) {
      const F = H.canvas;
      x && (S = l), C && (T = h);
      const N = this.getSizeAndScale(S, this.ctx.canvas.width, w), _t = this.getSizeAndScale(T, this.ctx.canvas.height, E), Dt = N.size, At = _t.size, ht = t.cachedCanvases.getCanvas("pattern-workaround", Dt, At), rt = ht.context, Tt = x ? Math.floor(g / l) : 0, te = C ? Math.floor(A / h) : 0;
      for (let yt = 0; yt <= Tt; yt++)
        for (let X = 0; X <= te; X++)
          rt.drawImage(F, Dt * yt, At * X, Dt, At, 0, 0, Dt, At);
      return {
        canvas: ht.canvas,
        scaleX: N.scale,
        scaleY: _t.scale,
        offsetX: d,
        offsetY: u
      };
    }
    return {
      canvas: H.canvas,
      scaleX: U.scale,
      scaleY: j.scale,
      offsetX: d,
      offsetY: u
    };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(kc.MAX_PATTERN_SIZE, e);
    let n = Math.ceil(t * s);
    return n >= i ? n = i : s = n / t, {
      scale: s,
      size: n
    };
  }
  clipBbox(t, e, s, i, n) {
    const r = i - e, o = n - s;
    t.ctx.rect(e, s, r, o), t.current.updateRectMinMax(kt(t.ctx), [e, s, i, n]), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    const i = t.ctx, n = t.current;
    switch (e) {
      case mu.COLORED:
        const r = this.ctx;
        i.fillStyle = r.fillStyle, i.strokeStyle = r.strokeStyle, n.fillColor = r.fillStyle, n.strokeColor = r.strokeStyle;
        break;
      case mu.UNCOLORED:
        const o = B.makeHexColor(s[0], s[1], s[2]);
        i.fillStyle = o, i.strokeStyle = o, n.fillColor = o, n.strokeColor = o;
        break;
      default:
        throw new wm(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, s, i) {
    let n = s;
    i !== ye.SHADING && (n = B.transform(n, e.baseTransform), this.matrix && (n = B.transform(n, this.matrix)));
    const r = this.createPatternCanvas(e);
    let o = new DOMMatrix(n);
    o = o.translate(r.offsetX, r.offsetY), o = o.scale(1 / r.scaleX, 1 / r.scaleY);
    const l = t.createPattern(r.canvas, "repeat");
    return l.setTransform(o), l;
  }
};
W(kc, "MAX_PATTERN_SIZE", 3e3);
let zh = kc;
function Jm({
  src: c,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: n = 4294967295,
  inverseDecode: r = !1
}) {
  const o = ve.isLittleEndian ? 4278190080 : 255, [l, h] = r ? [n, o] : [o, n], d = s >> 3, u = s & 7, f = c.length;
  e = new Uint32Array(e.buffer);
  let p = 0;
  for (let g = 0; g < i; g++) {
    for (const _ = t + d; t < _; t++) {
      const y = t < f ? c[t] : 255;
      e[p++] = y & 128 ? h : l, e[p++] = y & 64 ? h : l, e[p++] = y & 32 ? h : l, e[p++] = y & 16 ? h : l, e[p++] = y & 8 ? h : l, e[p++] = y & 4 ? h : l, e[p++] = y & 2 ? h : l, e[p++] = y & 1 ? h : l;
    }
    if (u === 0)
      continue;
    const A = t < f ? c[t++] : 255;
    for (let _ = 0; _ < u; _++)
      e[p++] = A & 1 << 7 - _ ? h : l;
  }
  return {
    srcPos: t,
    destPos: p
  };
}
const bu = 16, Au = 100, Zm = 15, yu = 10, vu = 1e3, Pe = 16;
function tb(c, t) {
  if (c._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  c.__originalSave = c.save, c.__originalRestore = c.restore, c.__originalRotate = c.rotate, c.__originalScale = c.scale, c.__originalTranslate = c.translate, c.__originalTransform = c.transform, c.__originalSetTransform = c.setTransform, c.__originalResetTransform = c.resetTransform, c.__originalClip = c.clip, c.__originalMoveTo = c.moveTo, c.__originalLineTo = c.lineTo, c.__originalBezierCurveTo = c.bezierCurveTo, c.__originalRect = c.rect, c.__originalClosePath = c.closePath, c.__originalBeginPath = c.beginPath, c._removeMirroring = () => {
    c.save = c.__originalSave, c.restore = c.__originalRestore, c.rotate = c.__originalRotate, c.scale = c.__originalScale, c.translate = c.__originalTranslate, c.transform = c.__originalTransform, c.setTransform = c.__originalSetTransform, c.resetTransform = c.__originalResetTransform, c.clip = c.__originalClip, c.moveTo = c.__originalMoveTo, c.lineTo = c.__originalLineTo, c.bezierCurveTo = c.__originalBezierCurveTo, c.rect = c.__originalRect, c.closePath = c.__originalClosePath, c.beginPath = c.__originalBeginPath, delete c._removeMirroring;
  }, c.save = function() {
    t.save(), this.__originalSave();
  }, c.restore = function() {
    t.restore(), this.__originalRestore();
  }, c.translate = function(s, i) {
    t.translate(s, i), this.__originalTranslate(s, i);
  }, c.scale = function(s, i) {
    t.scale(s, i), this.__originalScale(s, i);
  }, c.transform = function(s, i, n, r, o, l) {
    t.transform(s, i, n, r, o, l), this.__originalTransform(s, i, n, r, o, l);
  }, c.setTransform = function(s, i, n, r, o, l) {
    t.setTransform(s, i, n, r, o, l), this.__originalSetTransform(s, i, n, r, o, l);
  }, c.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, c.rotate = function(s) {
    t.rotate(s), this.__originalRotate(s);
  }, c.clip = function(s) {
    t.clip(s), this.__originalClip(s);
  }, c.moveTo = function(e, s) {
    t.moveTo(e, s), this.__originalMoveTo(e, s);
  }, c.lineTo = function(e, s) {
    t.lineTo(e, s), this.__originalLineTo(e, s);
  }, c.bezierCurveTo = function(e, s, i, n, r, o) {
    t.bezierCurveTo(e, s, i, n, r, o), this.__originalBezierCurveTo(e, s, i, n, r, o);
  }, c.rect = function(e, s, i, n) {
    t.rect(e, s, i, n), this.__originalRect(e, s, i, n);
  }, c.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, c.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class eb {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, s) {
    let i;
    return this.cache[t] !== void 0 ? (i = this.cache[t], this.canvasFactory.reset(i, e, s)) : (i = this.canvasFactory.create(e, s), this.cache[t] = i), i;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function Ol(c, t, e, s, i, n, r, o, l, h) {
  const [d, u, f, p, g, A] = kt(c);
  if (u === 0 && f === 0) {
    const w = r * d + g, E = Math.round(w), S = o * p + A, T = Math.round(S), x = (r + l) * d + g, C = Math.abs(Math.round(x) - E) || 1, P = (o + h) * p + A, R = Math.abs(Math.round(P) - T) || 1;
    return c.setTransform(Math.sign(d), 0, 0, Math.sign(p), E, T), c.drawImage(t, e, s, i, n, 0, 0, C, R), c.setTransform(d, u, f, p, g, A), [C, R];
  }
  if (d === 0 && p === 0) {
    const w = o * f + g, E = Math.round(w), S = r * u + A, T = Math.round(S), x = (o + h) * f + g, C = Math.abs(Math.round(x) - E) || 1, P = (r + l) * u + A, R = Math.abs(Math.round(P) - T) || 1;
    return c.setTransform(0, Math.sign(u), Math.sign(f), 0, E, T), c.drawImage(t, e, s, i, n, 0, 0, R, C), c.setTransform(d, u, f, p, g, A), [R, C];
  }
  c.drawImage(t, e, s, i, n, r, o, l, h);
  const _ = Math.hypot(d, u), y = Math.hypot(f, p);
  return [_ * l, y * h];
}
function sb(c) {
  const {
    width: t,
    height: e
  } = c;
  if (t > vu || e > vu)
    return null;
  const s = 1e3, i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), n = t + 1;
  let r = new Uint8Array(n * (e + 1)), o, l, h;
  const d = t + 7 & -8;
  let u = new Uint8Array(d * e), f = 0;
  for (const y of c.data) {
    let w = 128;
    for (; w > 0; )
      u[f++] = y & w ? 0 : 255, w >>= 1;
  }
  let p = 0;
  for (f = 0, u[f] !== 0 && (r[0] = 1, ++p), l = 1; l < t; l++)
    u[f] !== u[f + 1] && (r[l] = u[f] ? 2 : 1, ++p), f++;
  for (u[f] !== 0 && (r[l] = 2, ++p), o = 1; o < e; o++) {
    f = o * d, h = o * n, u[f - d] !== u[f] && (r[h] = u[f] ? 1 : 8, ++p);
    let y = (u[f] ? 4 : 0) + (u[f - d] ? 8 : 0);
    for (l = 1; l < t; l++)
      y = (y >> 2) + (u[f + 1] ? 4 : 0) + (u[f - d + 1] ? 8 : 0), i[y] && (r[h + l] = i[y], ++p), f++;
    if (u[f - d] !== u[f] && (r[h + l] = u[f] ? 2 : 4, ++p), p > s)
      return null;
  }
  for (f = d * (e - 1), h = o * n, u[f] !== 0 && (r[h] = 8, ++p), l = 1; l < t; l++)
    u[f] !== u[f + 1] && (r[h + l] = u[f] ? 4 : 8, ++p), f++;
  if (u[f] !== 0 && (r[h + l] = 4, ++p), p > s)
    return null;
  const g = new Int32Array([0, n, -1, 0, -n, 0, 0, 0, 1]), A = new Path2D();
  for (o = 0; p && o <= e; o++) {
    let y = o * n;
    const w = y + t;
    for (; y < w && !r[y]; )
      y++;
    if (y === w)
      continue;
    A.moveTo(y % n, o);
    const E = y;
    let S = r[y];
    do {
      const T = g[S];
      do
        y += T;
      while (!r[y]);
      const x = r[y];
      x !== 5 && x !== 10 ? (S = x, r[y] = 0) : (S = x & 51 * S >> 4, r[y] &= S >> 2 | S << 2), A.lineTo(y % n, y / n | 0), r[y] || --p;
    } while (E !== y);
    --o;
  }
  return u = null, r = null, function(y) {
    y.save(), y.scale(1 / t, -1 / e), y.translate(0, -e), y.fill(A), y.beginPath(), y.restore();
  };
}
class _u {
  constructor(t, e) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = Ku, this.textMatrixScale = 1, this.fontMatrix = fh, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = oe.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e]);
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t;
  }
  setCurrentPoint(t, e) {
    this.x = t, this.y = e;
  }
  updatePathMinMax(t, e, s) {
    [e, s] = B.applyTransform([e, s], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, s), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, s);
  }
  updateRectMinMax(t, e) {
    const s = B.applyTransform(e, t), i = B.applyTransform(e.slice(2), t), n = B.applyTransform([e[0], e[3]], t), r = B.applyTransform([e[2], e[1]], t);
    this.minX = Math.min(this.minX, s[0], i[0], n[0], r[0]), this.minY = Math.min(this.minY, s[1], i[1], n[1], r[1]), this.maxX = Math.max(this.maxX, s[0], i[0], n[0], r[0]), this.maxY = Math.max(this.maxY, s[1], i[1], n[1], r[1]);
  }
  updateScalingPathMinMax(t, e) {
    B.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
  }
  updateCurvePathMinMax(t, e, s, i, n, r, o, l, h, d) {
    const u = B.bezierBoundingBox(e, s, i, n, r, o, l, h, d);
    d || this.updateRectMinMax(t, u);
  }
  getPathBoundingBox(t = ye.FILL, e = null) {
    const s = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === ye.STROKE) {
      e || xt("Stroke bounding box must include transform.");
      const i = B.singularValueDecompose2dScale(e), n = i[0] * this.lineWidth / 2, r = i[1] * this.lineWidth / 2;
      s[0] -= n, s[1] -= r, s[2] += n, s[3] += r;
    }
    return s;
  }
  updateClipFromPath() {
    const t = B.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(t = ye.FILL, e = null) {
    return B.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function wu(c, t) {
  if (typeof ImageData < "u" && t instanceof ImageData) {
    c.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % Pe, n = (e - i) / Pe, r = i === 0 ? n : n + 1, o = c.createImageData(s, Pe);
  let l = 0, h;
  const d = t.data, u = o.data;
  let f, p, g, A;
  if (t.kind === zl.GRAYSCALE_1BPP) {
    const _ = d.byteLength, y = new Uint32Array(u.buffer, 0, u.byteLength >> 2), w = y.length, E = s + 7 >> 3, S = 4294967295, T = ve.isLittleEndian ? 4278190080 : 255;
    for (f = 0; f < r; f++) {
      for (g = f < n ? Pe : i, h = 0, p = 0; p < g; p++) {
        const x = _ - l;
        let C = 0;
        const P = x > E ? s : x * 8 - 7, R = P & -8;
        let k = 0, L = 0;
        for (; C < R; C += 8)
          L = d[l++], y[h++] = L & 128 ? S : T, y[h++] = L & 64 ? S : T, y[h++] = L & 32 ? S : T, y[h++] = L & 16 ? S : T, y[h++] = L & 8 ? S : T, y[h++] = L & 4 ? S : T, y[h++] = L & 2 ? S : T, y[h++] = L & 1 ? S : T;
        for (; C < P; C++)
          k === 0 && (L = d[l++], k = 128), y[h++] = L & k ? S : T, k >>= 1;
      }
      for (; h < w; )
        y[h++] = 0;
      c.putImageData(o, 0, f * Pe);
    }
  } else if (t.kind === zl.RGBA_32BPP) {
    for (p = 0, A = s * Pe * 4, f = 0; f < n; f++)
      u.set(d.subarray(l, l + A)), l += A, c.putImageData(o, 0, p), p += Pe;
    f < r && (A = s * i * 4, u.set(d.subarray(l, l + A)), c.putImageData(o, 0, p));
  } else if (t.kind === zl.RGB_24BPP)
    for (g = Pe, A = s * g, f = 0; f < r; f++) {
      for (f >= n && (g = i, A = s * g), h = 0, p = A; p--; )
        u[h++] = d[l++], u[h++] = d[l++], u[h++] = d[l++], u[h++] = 255;
      c.putImageData(o, 0, f * Pe);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Eu(c, t) {
  if (t.bitmap) {
    c.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % Pe, n = (e - i) / Pe, r = i === 0 ? n : n + 1, o = c.createImageData(s, Pe);
  let l = 0;
  const h = t.data, d = o.data;
  for (let u = 0; u < r; u++) {
    const f = u < n ? Pe : i;
    ({
      srcPos: l
    } = Jm({
      src: h,
      srcPos: l,
      dest: d,
      width: s,
      height: f,
      nonBlackColor: 0
    })), c.putImageData(o, 0, u * Pe);
  }
}
function Ha(c, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    c[s] !== void 0 && (t[s] = c[s]);
  c.setLineDash !== void 0 && (t.setLineDash(c.getLineDash()), t.lineDashOffset = c.lineDashOffset);
}
function Nl(c) {
  if (c.strokeStyle = c.fillStyle = "#000000", c.fillRule = "nonzero", c.globalAlpha = 1, c.lineWidth = 1, c.lineCap = "butt", c.lineJoin = "miter", c.miterLimit = 10, c.globalCompositeOperation = "source-over", c.font = "10px sans-serif", c.setLineDash !== void 0 && (c.setLineDash([]), c.lineDashOffset = 0), !pe) {
    const {
      filter: t
    } = c;
    t !== "none" && t !== "" && (c.filter = "none");
  }
}
function Su(c, t) {
  if (t)
    return !0;
  const e = B.singularValueDecompose2dScale(c);
  e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
  const s = Math.fround((globalThis.devicePixelRatio || 1) * en.PDF_TO_CSS_UNITS);
  return e[0] <= s && e[1] <= s;
}
const ib = ["butt", "round", "square"], nb = ["miter", "round", "bevel"], rb = {}, xu = {};
var rn, Gh, Uh;
const Zd = class Zd {
  constructor(t, e, s, i, n, {
    optionalContentConfig: r,
    markedContentStack: o = null
  }, l, h) {
    v(this, rn);
    this.ctx = t, this.current = new _u(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = n, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = r, this.cachedCanvases = new eb(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(t, e = null) {
    return typeof t == "string" ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: s = !1,
    background: i = null
  }) {
    const n = this.ctx.canvas.width, r = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, n, r), this.ctx.fillStyle = o, s) {
      const l = this.cachedCanvases.getCanvas("transparent", n, r);
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...kt(this.compositeCtx));
    }
    this.ctx.save(), Nl(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = kt(this.ctx);
  }
  executeOperatorList(t, e, s, i) {
    const n = t.argsArray, r = t.fnArray;
    let o = e || 0;
    const l = n.length;
    if (l === o)
      return o;
    const h = l - o > yu && typeof s == "function", d = h ? Date.now() + Zm : 0;
    let u = 0;
    const f = this.commonObjs, p = this.objs;
    let g;
    for (; ; ) {
      if (i !== void 0 && o === i.nextBreakPoint)
        return i.breakIt(o, s), o;
      if (g = r[o], g !== es.dependency)
        this[g].apply(this, n[o]);
      else
        for (const A of n[o]) {
          const _ = A.startsWith("g_") ? f : p;
          if (!_.has(A))
            return _.get(A, s), o;
        }
      if (o++, o === l)
        return o;
      if (h && ++u > yu) {
        if (Date.now() > d)
          return s(), o;
        u = 0;
      }
    }
  }
  endDrawing() {
    b(this, rn, Gh).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), b(this, rn, Uh).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight;
    let n = Math.max(Math.hypot(e[0], e[1]), 1), r = Math.max(Math.hypot(e[2], e[3]), 1), o = s, l = i, h = "prescale1", d, u;
    for (; n > 2 && o > 1 || r > 2 && l > 1; ) {
      let f = o, p = l;
      n > 2 && o > 1 && (f = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), n /= o / f), r > 2 && l > 1 && (p = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, r /= l / p), d = this.cachedCanvases.getCanvas(h, f, p), u = d.context, u.clearRect(0, 0, f, p), u.drawImage(t, 0, 0, o, l, 0, 0, f, p), t = d.canvas, o = f, l = p, h = h === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: o,
      paintHeight: l
    };
  }
  _createMaskCanvas(t) {
    const e = this.ctx, {
      width: s,
      height: i
    } = t, n = this.current.fillColor, r = this.current.patternFill, o = kt(e);
    let l, h, d, u;
    if ((t.bitmap || t.data) && t.count > 1) {
      const P = t.bitmap || t.data.buffer;
      h = JSON.stringify(r ? o : [o.slice(0, 4), n]), l = this._cachedBitmapsMap.get(P), l || (l = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(P, l));
      const R = l.get(h);
      if (R && !r) {
        const k = Math.round(Math.min(o[0], o[2]) + o[4]), L = Math.round(Math.min(o[1], o[3]) + o[5]);
        return {
          canvas: R,
          offsetX: k,
          offsetY: L
        };
      }
      d = R;
    }
    d || (u = this.cachedCanvases.getCanvas("maskCanvas", s, i), Eu(u.context, t));
    let f = B.transform(o, [1 / s, 0, 0, -1 / i, 0, 0]);
    f = B.transform(f, [1, 0, 0, 1, 0, -i]);
    const [p, g, A, _] = B.getAxialAlignedBoundingBox([0, 0, s, i], f), y = Math.round(A - p) || 1, w = Math.round(_ - g) || 1, E = this.cachedCanvases.getCanvas("fillCanvas", y, w), S = E.context, T = p, x = g;
    S.translate(-T, -x), S.transform(...f), d || (d = this._scaleImage(u.canvas, $s(S)), d = d.img, l && r && l.set(h, d)), S.imageSmoothingEnabled = Su(kt(S), t.interpolate), Ol(S, d, 0, 0, d.width, d.height, 0, 0, s, i), S.globalCompositeOperation = "source-in";
    const C = B.transform($s(S), [1, 0, 0, 1, -T, -x]);
    return S.fillStyle = r ? n.getPattern(e, this, C, ye.FILL) : n, S.fillRect(0, 0, s, i), l && !r && (this.cachedCanvases.delete("fillCanvas"), l.set(h, E.canvas)), {
      canvas: E.canvas,
      offsetX: Math.round(T),
      offsetY: Math.round(x)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = ib[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = nb[t];
  }
  setMiterLimit(t) {
    this.ctx.miterLimit = t;
  }
  setDash(t, e) {
    const s = this.ctx;
    s.setLineDash !== void 0 && (s.setLineDash(t), s.lineDashOffset = e);
  }
  setRenderingIntent(t) {
  }
  setFlatness(t) {
  }
  setGState(t) {
    for (const [e, s] of t)
      switch (e) {
        case "LW":
          this.setLineWidth(s);
          break;
        case "LC":
          this.setLineCap(s);
          break;
        case "LJ":
          this.setLineJoin(s);
          break;
        case "ML":
          this.setMiterLimit(s);
          break;
        case "D":
          this.setDash(s[0], s[1]);
          break;
        case "RI":
          this.setRenderingIntent(s);
          break;
        case "FL":
          this.setFlatness(s);
          break;
        case "Font":
          this.setFont(s[0], s[1]);
          break;
        case "CA":
          this.current.strokeAlpha = s;
          break;
        case "ca":
          this.current.fillAlpha = s, this.ctx.globalAlpha = s;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = s;
          break;
        case "SMask":
          this.current.activeSMask = s ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const t = this.ctx.canvas.width, e = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, i = this.cachedCanvases.getCanvas(s, t, e);
    this.suspendedCtx = this.ctx, this.ctx = i.context;
    const n = this.ctx;
    n.setTransform(...kt(this.suspendedCtx)), Ha(this.suspendedCtx, n), tb(n, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Ha(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, s = this.suspendedCtx;
    this.composeSMask(s, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, s, i) {
    const n = i[0], r = i[1], o = i[2] - n, l = i[3] - r;
    o === 0 || l === 0 || (this.genericComposeSMask(e.context, s, o, l, e.subtype, e.backdrop, e.transferMap, n, r, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, s, i, n, r, o, l, h, d, u) {
    let f = t.canvas, p = l - d, g = h - u;
    if (r) {
      const _ = B.makeHexColor(...r);
      if (p < 0 || g < 0 || p + s > f.width || g + i > f.height) {
        const y = this.cachedCanvases.getCanvas("maskExtension", s, i), w = y.context;
        w.drawImage(f, -p, -g), w.globalCompositeOperation = "destination-atop", w.fillStyle = _, w.fillRect(0, 0, s, i), w.globalCompositeOperation = "source-over", f = y.canvas, p = g = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const y = new Path2D();
        y.rect(p, g, s, i), t.clip(y), t.globalCompositeOperation = "destination-atop", t.fillStyle = _, t.fillRect(p, g, s, i), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), n === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : n === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const A = new Path2D();
    A.rect(l, h, s, i), e.clip(A), e.globalCompositeOperation = "destination-in", e.drawImage(f, p, g, s, i, l, h, s, i), e.restore();
  }
  save() {
    this.inSMaskMode ? (Ha(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), Ha(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(t, e, s, i, n, r) {
    this.ctx.transform(t, e, s, i, n, r), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s) {
    const i = this.ctx, n = this.current;
    let r = n.x, o = n.y, l, h;
    const d = kt(i), u = d[0] === 0 && d[3] === 0 || d[1] === 0 && d[2] === 0, f = u ? s.slice(0) : null;
    for (let p = 0, g = 0, A = t.length; p < A; p++)
      switch (t[p] | 0) {
        case es.rectangle:
          r = e[g++], o = e[g++];
          const _ = e[g++], y = e[g++], w = r + _, E = o + y;
          i.moveTo(r, o), _ === 0 || y === 0 ? i.lineTo(w, E) : (i.lineTo(w, o), i.lineTo(w, E), i.lineTo(r, E)), u || n.updateRectMinMax(d, [r, o, w, E]), i.closePath();
          break;
        case es.moveTo:
          r = e[g++], o = e[g++], i.moveTo(r, o), u || n.updatePathMinMax(d, r, o);
          break;
        case es.lineTo:
          r = e[g++], o = e[g++], i.lineTo(r, o), u || n.updatePathMinMax(d, r, o);
          break;
        case es.curveTo:
          l = r, h = o, r = e[g + 4], o = e[g + 5], i.bezierCurveTo(e[g], e[g + 1], e[g + 2], e[g + 3], r, o), n.updateCurvePathMinMax(d, l, h, e[g], e[g + 1], e[g + 2], e[g + 3], r, o, f), g += 6;
          break;
        case es.curveTo2:
          l = r, h = o, i.bezierCurveTo(r, o, e[g], e[g + 1], e[g + 2], e[g + 3]), n.updateCurvePathMinMax(d, l, h, r, o, e[g], e[g + 1], e[g + 2], e[g + 3], f), r = e[g + 2], o = e[g + 3], g += 4;
          break;
        case es.curveTo3:
          l = r, h = o, r = e[g + 2], o = e[g + 3], i.bezierCurveTo(e[g], e[g + 1], r, o, r, o), n.updateCurvePathMinMax(d, l, h, e[g], e[g + 1], r, o, r, o, f), g += 4;
          break;
        case es.closePath:
          i.closePath();
          break;
      }
    u && n.updateScalingPathMinMax(d, f), n.setCurrentPoint(r, o);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t = !0) {
    const e = this.ctx, s = this.current.strokeColor;
    e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof s == "object" && (s != null && s.getPattern) ? (e.save(), e.strokeStyle = s.getPattern(e, this, $s(e), ye.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(t = !0) {
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    let n = !1;
    i && (e.save(), e.fillStyle = s.getPattern(e, this, $s(e), ye.FILL), n = !0);
    const r = this.current.getClippedPathBoundingBox();
    this.contentVisible && r !== null && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), n && e.restore(), t && this.consumePath(r);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = rb;
  }
  eoClip() {
    this.pendingClip = xu;
  }
  beginText() {
    this.current.textMatrix = Ku, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const t = this.pendingTextPaths, e = this.ctx;
    if (t === void 0) {
      e.beginPath();
      return;
    }
    e.save(), e.beginPath();
    for (const s of t)
      e.setTransform(...s.transform), e.translate(s.x, s.y), s.addToPath(e, s.fontSize);
    e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths;
  }
  setCharSpacing(t) {
    this.current.charSpacing = t;
  }
  setWordSpacing(t) {
    this.current.wordSpacing = t;
  }
  setHScale(t) {
    this.current.textHScale = t / 100;
  }
  setLeading(t) {
    this.current.leading = -t;
  }
  setFont(t, e) {
    var d;
    const s = this.commonObjs.get(t), i = this.current;
    if (!s)
      throw new Error(`Can't find font for ${t}`);
    if (i.fontMatrix = s.fontMatrix || fh, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && tt("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = s, this.current.fontSize = e, s.isType3Font)
      return;
    const n = s.loadedName || "sans-serif", r = ((d = s.systemFontInfo) == null ? void 0 : d.css) || `"${n}", ${s.fallbackName}`;
    let o = "normal";
    s.black ? o = "900" : s.bold && (o = "bold");
    const l = s.italic ? "italic" : "normal";
    let h = e;
    e < bu ? h = bu : e > Au && (h = Au), this.current.fontSizeScale = e / h, this.ctx.font = `${l} ${o} ${h}px ${r}`;
  }
  setTextRenderingMode(t) {
    this.current.textRenderingMode = t;
  }
  setTextRise(t) {
    this.current.textRise = t;
  }
  moveText(t, e) {
    this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e;
  }
  setLeadingMoveText(t, e) {
    this.setLeading(-e), this.moveText(t, e);
  }
  setTextMatrix(t, e, s, i, n, r) {
    this.current.textMatrix = [t, e, s, i, n, r], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(t, e, s, i) {
    const n = this.ctx, r = this.current, o = r.font, l = r.textRenderingMode, h = r.fontSize / r.fontSizeScale, d = l & oe.FILL_STROKE_MASK, u = !!(l & oe.ADD_TO_PATH_FLAG), f = r.patternFill && !o.missingFile;
    let p;
    (o.disableFontFace || u || f) && (p = o.getPathGenerator(this.commonObjs, t)), o.disableFontFace || f ? (n.save(), n.translate(e, s), n.beginPath(), p(n, h), i && n.setTransform(...i), (d === oe.FILL || d === oe.FILL_STROKE) && n.fill(), (d === oe.STROKE || d === oe.FILL_STROKE) && n.stroke(), n.restore()) : ((d === oe.FILL || d === oe.FILL_STROKE) && n.fillText(t, e, s), (d === oe.STROKE || d === oe.FILL_STROKE) && n.strokeText(t, e, s)), u && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: kt(n),
      x: e,
      y: s,
      fontSize: h,
      addToPath: p
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let s = !1;
    for (let i = 3; i < e.length; i += 4)
      if (e[i] > 0 && e[i] < 255) {
        s = !0;
        break;
      }
    return nt(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t) {
    const e = this.current, s = e.font;
    if (s.isType3Font)
      return this.showType3Text(t);
    const i = e.fontSize;
    if (i === 0)
      return;
    const n = this.ctx, r = e.fontSizeScale, o = e.charSpacing, l = e.wordSpacing, h = e.fontDirection, d = e.textHScale * h, u = t.length, f = s.vertical, p = f ? 1 : -1, g = s.defaultVMetrics, A = i * e.fontMatrix[0], _ = e.textRenderingMode === oe.FILL && !s.disableFontFace && !e.patternFill;
    n.save(), n.transform(...e.textMatrix), n.translate(e.x, e.y + e.textRise), h > 0 ? n.scale(d, -1) : n.scale(d, 1);
    let y;
    if (e.patternFill) {
      n.save();
      const x = e.fillColor.getPattern(n, this, $s(n), ye.FILL);
      y = kt(n), n.restore(), n.fillStyle = x;
    }
    let w = e.lineWidth;
    const E = e.textMatrixScale;
    if (E === 0 || w === 0) {
      const x = e.textRenderingMode & oe.FILL_STROKE_MASK;
      (x === oe.STROKE || x === oe.FILL_STROKE) && (w = this.getSinglePixelWidth());
    } else
      w /= E;
    if (r !== 1 && (n.scale(r, r), w /= r), n.lineWidth = w, s.isInvalidPDFjsFont) {
      const x = [];
      let C = 0;
      for (const P of t)
        x.push(P.unicode), C += P.width;
      n.fillText(x.join(""), 0, 0), e.x += C * A * d, n.restore(), this.compose();
      return;
    }
    let S = 0, T;
    for (T = 0; T < u; ++T) {
      const x = t[T];
      if (typeof x == "number") {
        S += p * x * i / 1e3;
        continue;
      }
      let C = !1;
      const P = (x.isSpace ? l : 0) + o, R = x.fontChar, k = x.accent;
      let L, U, j = x.width;
      if (f) {
        const $ = x.vmetric || g, V = -(x.vmetric ? $[1] : j * 0.5) * A, F = $[2] * A;
        j = $ ? -$[0] : j, L = V / r, U = (S + F) / r;
      } else
        L = S / r, U = 0;
      if (s.remeasure && j > 0) {
        const $ = n.measureText(R).width * 1e3 / i * r;
        if (j < $ && this.isFontSubpixelAAEnabled) {
          const V = j / $;
          C = !0, n.save(), n.scale(V, 1), L /= V;
        } else j !== $ && (L += (j - $) / 2e3 * i / r);
      }
      if (this.contentVisible && (x.isInFont || s.missingFile)) {
        if (_ && !k)
          n.fillText(R, L, U);
        else if (this.paintChar(R, L, U, y), k) {
          const $ = L + i * k.offset.x / r, V = U - i * k.offset.y / r;
          this.paintChar(k.fontChar, $, V, y);
        }
      }
      const H = f ? j * A - P * h : j * A + P * h;
      S += H, C && n.restore();
    }
    f ? e.y -= S : e.x += S * d, n.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, s = this.current, i = s.font, n = s.fontSize, r = s.fontDirection, o = i.vertical ? 1 : -1, l = s.charSpacing, h = s.wordSpacing, d = s.textHScale * r, u = s.fontMatrix || fh, f = t.length, p = s.textRenderingMode === oe.INVISIBLE;
    let g, A, _, y;
    if (!(p || n === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...s.textMatrix), e.translate(s.x, s.y), e.scale(d, r), g = 0; g < f; ++g) {
        if (A = t[g], typeof A == "number") {
          y = o * A * n / 1e3, this.ctx.translate(y, 0), s.x += y * d;
          continue;
        }
        const w = (A.isSpace ? h : 0) + l, E = i.charProcOperatorList[A.operatorListId];
        if (!E) {
          tt(`Type3 character "${A.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = A, this.save(), e.scale(n, n), e.transform(...u), this.executeOperatorList(E), this.restore()), _ = B.applyTransform([A.width, 0], u)[0] * n + w, e.translate(_, 0), s.x += _ * d;
      }
      e.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(t, e) {
  }
  setCharWidthAndBounds(t, e, s, i, n, r) {
    this.ctx.rect(s, i, n - s, r - i), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(t) {
    let e;
    if (t[0] === "TilingPattern") {
      const s = t[1], i = this.baseTransform || kt(this.ctx), n = {
        createCanvasGraphics: (r) => new Zd(r, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new zh(t, s, this.ctx, n, i);
    } else
      e = this._getPattern(t[1], t[2]);
    return e;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e, s) {
    this.ctx.strokeStyle = this.current.strokeColor = B.makeHexColor(t, e, s);
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent";
  }
  setFillRGBColor(t, e, s) {
    this.ctx.fillStyle = this.current.fillColor = B.makeHexColor(t, e, s), this.current.patternFill = !1;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(t, e = null) {
    let s;
    return this.cachedPatterns.has(t) ? s = this.cachedPatterns.get(t) : (s = Qm(this.getObject(t)), this.cachedPatterns.set(t, s)), e && (s.matrix = e), s;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const s = this._getPattern(t);
    e.fillStyle = s.getPattern(e, this, $s(e), ye.SHADING);
    const i = $s(e);
    {
      const {
        width: n,
        height: r
      } = e.canvas, [o, l, h, d] = B.getAxialAlignedBoundingBox([0, 0, n, r], i);
      this.ctx.fillRect(o, l, h - o, d - l);
    }
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    xt("Should not call beginInlineImage");
  }
  beginImageData() {
    xt("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = kt(this.ctx), e)) {
      const s = e[2] - e[0], i = e[3] - e[1];
      this.ctx.rect(e[0], e[1], s, i), this.current.updateRectMinMax(kt(this.ctx), e), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const e = this.ctx;
    t.isolated || Uc("TODO: Support non-isolated groups."), t.knockout && tt("Knockout groups not supported.");
    const s = kt(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let i = B.getAxialAlignedBoundingBox(t.bbox, kt(e));
    const n = [0, 0, e.canvas.width, e.canvas.height];
    i = B.intersect(i, n) || [0, 0, 0, 0];
    const r = Math.floor(i[0]), o = Math.floor(i[1]), l = Math.max(Math.ceil(i[2]) - r, 1), h = Math.max(Math.ceil(i[3]) - o, 1);
    this.current.startNewPathAndClipBox([0, 0, l, h]);
    let d = "groupAt" + this.groupLevel;
    t.smask && (d += "_smask_" + this.smaskCounter++ % 2);
    const u = this.cachedCanvases.getCanvas(d, l, h), f = u.context;
    f.translate(-r, -o), f.transform(...s), t.smask ? this.smaskStack.push({
      canvas: u.canvas,
      context: f,
      offsetX: r,
      offsetY: o,
      subtype: t.smask.subtype,
      backdrop: t.smask.backdrop,
      transferMap: t.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(r, o), e.save()), Ha(e, f), this.ctx = f, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
  }
  endGroup(t) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const e = this.ctx, s = this.groupStack.pop();
    if (this.ctx = s, this.ctx.imageSmoothingEnabled = !1, t.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const i = kt(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
      const n = B.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i);
      this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(n);
    }
  }
  beginAnnotation(t, e, s, i, n) {
    if (b(this, rn, Gh).call(this), Nl(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const r = e[2] - e[0], o = e[3] - e[1];
      if (n && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= e[0], s[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = r, e[3] = o;
        const [l, h] = B.singularValueDecompose2dScale(kt(this.ctx)), {
          viewportScale: d
        } = this, u = Math.ceil(r * this.outputScaleX * d), f = Math.ceil(o * this.outputScaleY * d);
        this.annotationCanvas = this.canvasFactory.create(u, f);
        const {
          canvas: p,
          context: g
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, p), this.annotationCanvas.savedCtx = this.ctx, this.ctx = g, this.ctx.save(), this.ctx.setTransform(l, 0, 0, -h, 0, o * h), Nl(this.ctx);
      } else
        Nl(this.ctx), this.endPath(), this.ctx.rect(e[0], e[1], r, o), this.ctx.clip(), this.ctx.beginPath();
    }
    this.current = new _u(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), b(this, rn, Uh).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.count;
    t = this.getObject(t.data, t), t.count = e;
    const s = this.ctx, i = this.processingType3;
    if (i && (i.compiled === void 0 && (i.compiled = sb(t)), i.compiled)) {
      i.compiled(s);
      return;
    }
    const n = this._createMaskCanvas(t), r = n.canvas;
    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(r, n.offsetX, n.offsetY), s.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, s = 0, i = 0, n, r) {
    if (!this.contentVisible)
      return;
    t = this.getObject(t.data, t);
    const o = this.ctx;
    o.save();
    const l = kt(o);
    o.transform(e, s, i, n, 0, 0);
    const h = this._createMaskCanvas(t);
    o.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]);
    for (let d = 0, u = r.length; d < u; d += 2) {
      const f = B.transform(l, [e, s, i, n, r[d], r[d + 1]]), [p, g] = B.applyTransform([0, 0], f);
      o.drawImage(h.canvas, p, g);
    }
    o.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    for (const n of t) {
      const {
        data: r,
        width: o,
        height: l,
        transform: h
      } = n, d = this.cachedCanvases.getCanvas("maskCanvas", o, l), u = d.context;
      u.save();
      const f = this.getObject(r, n);
      Eu(u, f), u.globalCompositeOperation = "source-in", u.fillStyle = i ? s.getPattern(u, this, $s(e), ye.FILL) : s, u.fillRect(0, 0, o, l), u.restore(), e.save(), e.transform(...h), e.scale(1, -1), Ol(e, d.canvas, 0, 0, o, l, 0, -1, 1, 1), e.restore();
    }
    this.compose();
  }
  paintImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = this.getObject(t);
    if (!e) {
      tt("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(e);
  }
  paintImageXObjectRepeat(t, e, s, i) {
    if (!this.contentVisible)
      return;
    const n = this.getObject(t);
    if (!n) {
      tt("Dependent image isn't ready yet");
      return;
    }
    const r = n.width, o = n.height, l = [];
    for (let h = 0, d = i.length; h < d; h += 2)
      l.push({
        transform: [e, 0, 0, s, i[h], i[h + 1]],
        x: 0,
        y: 0,
        w: r,
        h: o
      });
    this.paintInlineImageXObjectGroup(n, l);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return t.bitmap;
    const {
      bitmap: e,
      width: s,
      height: i
    } = t, n = this.cachedCanvases.getCanvas("inlineImage", s, i), r = n.context;
    return r.filter = this.current.transferMaps, r.drawImage(e, 0, 0), r.filter = "none", n.canvas;
  }
  paintInlineImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.width, s = t.height, i = this.ctx;
    if (this.save(), !pe) {
      const {
        filter: o
      } = i;
      o !== "none" && o !== "" && (i.filter = "none");
    }
    i.scale(1 / e, -1 / s);
    let n;
    if (t.bitmap)
      n = this.applyTransferMapsToBitmap(t);
    else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data)
      n = t;
    else {
      const l = this.cachedCanvases.getCanvas("inlineImage", e, s).context;
      wu(l, t), n = this.applyTransferMapsToCanvas(l);
    }
    const r = this._scaleImage(n, $s(i));
    i.imageSmoothingEnabled = Su(kt(i), t.interpolate), Ol(i, r.img, 0, 0, r.paintWidth, r.paintHeight, 0, -s, e, s), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    let i;
    if (t.bitmap)
      i = t.bitmap;
    else {
      const n = t.width, r = t.height, l = this.cachedCanvases.getCanvas("inlineImage", n, r).context;
      wu(l, t), i = this.applyTransferMapsToCanvas(l);
    }
    for (const n of e)
      s.save(), s.transform(...n.transform), s.scale(1, -1), Ol(s, i, n.x, n.y, n.w, n.h, 0, -1, 1, 1), s.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t) {
  }
  markPointProps(t, e) {
  }
  beginMarkedContent(t) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e) {
    t === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(e)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(t) {
    const e = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
    const s = this.ctx;
    this.pendingClip && (e || (this.pendingClip === xu ? s.clip("evenodd") : s.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), s.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = kt(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), s = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: s,
        c: i,
        d: n
      } = this.ctx.getTransform();
      let r, o;
      if (s === 0 && i === 0) {
        const l = Math.abs(e), h = Math.abs(n);
        if (l === h)
          if (t === 0)
            r = o = 1 / l;
          else {
            const d = l * t;
            r = o = d < 1 ? 1 / d : 1;
          }
        else if (t === 0)
          r = 1 / l, o = 1 / h;
        else {
          const d = l * t, u = h * t;
          r = d < 1 ? 1 / d : 1, o = u < 1 ? 1 / u : 1;
        }
      } else {
        const l = Math.abs(e * n - s * i), h = Math.hypot(e, s), d = Math.hypot(i, n);
        if (t === 0)
          r = d / l, o = h / l;
        else {
          const u = t * l;
          r = d > u ? d / u : 1, o = h > u ? h / u : 1;
        }
      }
      this._cachedScaleForStroking[0] = r, this._cachedScaleForStroking[1] = o;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t) {
    const {
      ctx: e
    } = this, {
      lineWidth: s
    } = this.current, [i, n] = this.getScaleForStroking();
    if (e.lineWidth = s || 1, i === 1 && n === 1) {
      e.stroke();
      return;
    }
    const r = e.getLineDash();
    if (t && e.save(), e.scale(i, n), r.length > 0) {
      const o = Math.max(i, n);
      e.setLineDash(r.map((l) => l / o)), e.lineDashOffset /= o;
    }
    e.stroke(), t && e.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
rn = new WeakSet(), Gh = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, Uh = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
};
let Mr = Zd;
for (const c in es)
  Mr.prototype[c] !== void 0 && (Mr.prototype[es[c]] = Mr.prototype[c]);
var Fo, Do;
class Ai {
  static get workerPort() {
    return a(this, Fo);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    m(this, Fo, t);
  }
  static get workerSrc() {
    return a(this, Do);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    m(this, Do, t);
  }
}
Fo = new WeakMap(), Do = new WeakMap(), v(Ai, Fo, null), v(Ai, Do, "");
const Hl = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
}, Bt = {
  UNKNOWN: 0,
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function ke(c) {
  switch (c instanceof Error || typeof c == "object" && c !== null || xt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), c.name) {
    case "AbortException":
      return new yr(c.message);
    case "MissingPDFException":
      return new Ar(c.message);
    case "PasswordException":
      return new ph(c.message, c.code);
    case "UnexpectedResponseException":
      return new $c(c.message, c.status);
    case "UnknownErrorException":
      return new gh(c.message, c.details);
    default:
      return new gh(c.message, c.toString());
  }
}
var Kr, Je, Df, Of, Nf, Yl;
class Xa {
  constructor(t, e, s) {
    v(this, Je);
    v(this, Kr, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", b(this, Je, Df).bind(this), {
      signal: a(this, Kr).signal
    });
  }
  on(t, e) {
    const s = this.actionHandler;
    if (s[t])
      throw new Error(`There is already an actionName called "${t}"`);
    s[t] = e;
  }
  send(t, e, s) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, s);
  }
  sendWithPromise(t, e, s) {
    const i = this.callbackId++, n = Promise.withResolvers();
    this.callbackCapabilities[i] = n;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: i,
        data: e
      }, s);
    } catch (r) {
      n.reject(r);
    }
    return n.promise;
  }
  sendWithStream(t, e, s, i) {
    const n = this.streamId++, r = this.sourceName, o = this.targetName, l = this.comObj;
    return new ReadableStream({
      start: (h) => {
        const d = Promise.withResolvers();
        return this.streamControllers[n] = {
          controller: h,
          startCall: d,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, l.postMessage({
          sourceName: r,
          targetName: o,
          action: t,
          streamId: n,
          data: e,
          desiredSize: h.desiredSize
        }, i), d.promise;
      },
      pull: (h) => {
        const d = Promise.withResolvers();
        return this.streamControllers[n].pullCall = d, l.postMessage({
          sourceName: r,
          targetName: o,
          stream: Bt.PULL,
          streamId: n,
          desiredSize: h.desiredSize
        }), d.promise;
      },
      cancel: (h) => {
        Wt(h instanceof Error, "cancel must have a valid reason");
        const d = Promise.withResolvers();
        return this.streamControllers[n].cancelCall = d, this.streamControllers[n].isClosed = !0, l.postMessage({
          sourceName: r,
          targetName: o,
          stream: Bt.CANCEL,
          streamId: n,
          reason: ke(h)
        }), d.promise;
      }
    }, s);
  }
  destroy() {
    var t;
    (t = a(this, Kr)) == null || t.abort(), m(this, Kr, null);
  }
}
Kr = new WeakMap(), Je = new WeakSet(), Df = function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    b(this, Je, Nf).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, i = this.callbackCapabilities[s];
    if (!i)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === Hl.DATA)
      i.resolve(t.data);
    else if (t.callback === Hl.ERROR)
      i.reject(ke(t.reason));
    else
      throw new Error("Unexpected callback case");
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e)
    throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const s = this.sourceName, i = t.sourceName, n = this.comObj;
    new Promise(function(r) {
      r(e(t.data));
    }).then(function(r) {
      n.postMessage({
        sourceName: s,
        targetName: i,
        callback: Hl.DATA,
        callbackId: t.callbackId,
        data: r
      });
    }, function(r) {
      n.postMessage({
        sourceName: s,
        targetName: i,
        callback: Hl.ERROR,
        callbackId: t.callbackId,
        reason: ke(r)
      });
    });
    return;
  }
  if (t.streamId) {
    b(this, Je, Of).call(this, t);
    return;
  }
  e(t.data);
}, Of = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, r = this, o = this.actionHandler[t.action], l = {
    enqueue(h, d = 1, u) {
      if (this.isCancelled)
        return;
      const f = this.desiredSize;
      this.desiredSize -= d, f > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), n.postMessage({
        sourceName: s,
        targetName: i,
        stream: Bt.ENQUEUE,
        streamId: e,
        chunk: h
      }, u);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, n.postMessage({
        sourceName: s,
        targetName: i,
        stream: Bt.CLOSE,
        streamId: e
      }), delete r.streamSinks[e]);
    },
    error(h) {
      Wt(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, n.postMessage({
        sourceName: s,
        targetName: i,
        stream: Bt.ERROR,
        streamId: e,
        reason: ke(h)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  l.sinkCapability.resolve(), l.ready = l.sinkCapability.promise, this.streamSinks[e] = l, new Promise(function(h) {
    h(o(t.data, l));
  }).then(function() {
    n.postMessage({
      sourceName: s,
      targetName: i,
      stream: Bt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(h) {
    n.postMessage({
      sourceName: s,
      targetName: i,
      stream: Bt.START_COMPLETE,
      streamId: e,
      reason: ke(h)
    });
  });
}, Nf = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, r = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case Bt.START_COMPLETE:
      t.success ? r.startCall.resolve() : r.startCall.reject(ke(t.reason));
      break;
    case Bt.PULL_COMPLETE:
      t.success ? r.pullCall.resolve() : r.pullCall.reject(ke(t.reason));
      break;
    case Bt.PULL:
      if (!o) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: Bt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, new Promise(function(l) {
        var h;
        l((h = o.onPull) == null ? void 0 : h.call(o));
      }).then(function() {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: Bt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(l) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: Bt.PULL_COMPLETE,
          streamId: e,
          reason: ke(l)
        });
      });
      break;
    case Bt.ENQUEUE:
      if (Wt(r, "enqueue should have stream controller"), r.isClosed)
        break;
      r.controller.enqueue(t.chunk);
      break;
    case Bt.CLOSE:
      if (Wt(r, "close should have stream controller"), r.isClosed)
        break;
      r.isClosed = !0, r.controller.close(), b(this, Je, Yl).call(this, r, e);
      break;
    case Bt.ERROR:
      Wt(r, "error should have stream controller"), r.controller.error(ke(t.reason)), b(this, Je, Yl).call(this, r, e);
      break;
    case Bt.CANCEL_COMPLETE:
      t.success ? r.cancelCall.resolve() : r.cancelCall.reject(ke(t.reason)), b(this, Je, Yl).call(this, r, e);
      break;
    case Bt.CANCEL:
      if (!o)
        break;
      new Promise(function(l) {
        var h;
        l((h = o.onCancel) == null ? void 0 : h.call(o, ke(t.reason)));
      }).then(function() {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: Bt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(l) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: Bt.CANCEL_COMPLETE,
          streamId: e,
          reason: ke(l)
        });
      }), o.sinkCapability.reject(ke(t.reason)), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Yl = async function(t, e) {
  var s, i, n;
  await Promise.allSettled([(s = t.startCall) == null ? void 0 : s.promise, (i = t.pullCall) == null ? void 0 : i.promise, (n = t.cancelCall) == null ? void 0 : n.promise]), delete this.streamControllers[e];
};
var Fn, Oo;
class ab {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    v(this, Fn);
    v(this, Oo);
    m(this, Fn, t), m(this, Oo, e);
  }
  getRaw() {
    return a(this, Oo);
  }
  get(t) {
    return a(this, Fn).get(t) ?? null;
  }
  getAll() {
    return Hd(a(this, Fn));
  }
  has(t) {
    return a(this, Fn).has(t);
  }
}
Fn = new WeakMap(), Oo = new WeakMap();
const Cr = Symbol("INTERNAL");
var No, Ho, Bo, Qr;
class ob {
  constructor(t, {
    name: e,
    intent: s,
    usage: i,
    rbGroups: n
  }) {
    v(this, No, !1);
    v(this, Ho, !1);
    v(this, Bo, !1);
    v(this, Qr, !0);
    m(this, No, !!(t & je.DISPLAY)), m(this, Ho, !!(t & je.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = n;
  }
  get visible() {
    if (a(this, Bo))
      return a(this, Qr);
    if (!a(this, Qr))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return a(this, No) ? (e == null ? void 0 : e.viewState) !== "OFF" : a(this, Ho) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== Cr && xt("Internal method `_setVisible` called."), m(this, Bo, s), m(this, Qr, e);
  }
}
No = new WeakMap(), Ho = new WeakMap(), Bo = new WeakMap(), Qr = new WeakMap();
var Bi, pt, Jr, Zr, jo, $h;
class lb {
  constructor(t, e = je.DISPLAY) {
    v(this, jo);
    v(this, Bi, null);
    v(this, pt, /* @__PURE__ */ new Map());
    v(this, Jr, null);
    v(this, Zr, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, m(this, Zr, t.order);
      for (const s of t.groups)
        a(this, pt).set(s.id, new ob(e, s));
      if (t.baseState === "OFF")
        for (const s of a(this, pt).values())
          s._setVisible(Cr, !1);
      for (const s of t.on)
        a(this, pt).get(s)._setVisible(Cr, !0);
      for (const s of t.off)
        a(this, pt).get(s)._setVisible(Cr, !1);
      m(this, Jr, this.getHash());
    }
  }
  isVisible(t) {
    if (a(this, pt).size === 0)
      return !0;
    if (!t)
      return Uc("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return a(this, pt).has(t.id) ? a(this, pt).get(t.id).visible : (tt(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return b(this, jo, $h).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!a(this, pt).has(e))
            return tt(`Optional content group not found: ${e}`), !0;
          if (a(this, pt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!a(this, pt).has(e))
            return tt(`Optional content group not found: ${e}`), !0;
          if (!a(this, pt).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!a(this, pt).has(e))
            return tt(`Optional content group not found: ${e}`), !0;
          if (!a(this, pt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!a(this, pt).has(e))
            return tt(`Optional content group not found: ${e}`), !0;
          if (a(this, pt).get(e).visible)
            return !1;
        }
        return !0;
      }
      return tt(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return tt(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, s = !0) {
    var n;
    const i = a(this, pt).get(t);
    if (!i) {
      tt(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && i.rbGroups.length)
      for (const r of i.rbGroups)
        for (const o of r)
          o !== t && ((n = a(this, pt).get(o)) == null || n._setVisible(Cr, !1, !0));
    i._setVisible(Cr, !!e, !0), m(this, Bi, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let s;
    for (const i of t) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = i;
          continue;
      }
      const n = a(this, pt).get(i);
      if (n)
        switch (s) {
          case "ON":
            this.setVisibility(i, !0, e);
            break;
          case "OFF":
            this.setVisibility(i, !1, e);
            break;
          case "Toggle":
            this.setVisibility(i, !n.visible, e);
            break;
        }
    }
    m(this, Bi, null);
  }
  get hasInitialVisibility() {
    return a(this, Jr) === null || this.getHash() === a(this, Jr);
  }
  getOrder() {
    return a(this, pt).size ? a(this, Zr) ? a(this, Zr).slice() : [...a(this, pt).keys()] : null;
  }
  getGroups() {
    return a(this, pt).size > 0 ? Hd(a(this, pt)) : null;
  }
  getGroup(t) {
    return a(this, pt).get(t) || null;
  }
  getHash() {
    if (a(this, Bi) !== null)
      return a(this, Bi);
    const t = new Sf();
    for (const [e, s] of a(this, pt))
      t.update(`${e}:${s.visible}`);
    return m(this, Bi, t.hexdigest());
  }
}
Bi = new WeakMap(), pt = new WeakMap(), Jr = new WeakMap(), Zr = new WeakMap(), jo = new WeakSet(), $h = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const n = t[i];
    let r;
    if (Array.isArray(n))
      r = b(this, jo, $h).call(this, n);
    else if (a(this, pt).has(n))
      r = a(this, pt).get(n).visible;
    else
      return tt(`Optional content group not found: ${n}`), !0;
    switch (s) {
      case "And":
        if (!r)
          return !1;
        break;
      case "Or":
        if (r)
          return !0;
        break;
      case "Not":
        return !r;
      default:
        return !0;
    }
  }
  return s === "And";
};
class cb {
  constructor(t, {
    disableRange: e = !1,
    disableStream: s = !1
  }) {
    Wt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: i,
      initialData: n,
      progressiveDone: r,
      contentDispositionFilename: o
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = r, this._contentDispositionFilename = o, (n == null ? void 0 : n.length) > 0) {
      const l = n instanceof Uint8Array && n.byteLength === n.buffer.byteLength ? n.buffer : new Uint8Array(n).buffer;
      this._queuedChunks.push(l);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !s, this._isRangeSupported = !e, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((l, h) => {
      this._onReceiveData({
        begin: l,
        chunk: h
      });
    }), t.addProgressListener((l, h) => {
      this._onProgress({
        loaded: l,
        total: h
      });
    }), t.addProgressiveReadListener((l) => {
      this._onReceiveData({
        chunk: l
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }) {
    const s = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(s) : this._queuedChunks.push(s);
    else {
      const i = this._rangeReaders.some(function(n) {
        return n._begin !== t ? !1 : (n._enqueue(s), !0);
      });
      Wt(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, s, i, n;
    t.total === void 0 ? (s = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || s.call(e, {
      loaded: t.loaded
    }) : (n = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || n.call(i, {
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    var t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    Wt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new hb(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new db(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeReaders.slice(0))
      s.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class hb {
  constructor(t, e, s = !1, i = null) {
    this._stream = t, this._done = s || !1, this._filename = zd(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const n of this._queuedChunks)
      this._loaded += n.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class db {
  constructor(t, e, s) {
    this._stream = t, this._begin = e, this._end = s, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1
        });
        for (const s of this._requests)
          s.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function ub(c) {
  let t = !0, e = s("filename\\*", "i").exec(c);
  if (e) {
    e = e[1];
    let d = o(e);
    return d = unescape(d), d = l(d), d = h(d), n(d);
  }
  if (e = r(c), e) {
    const d = h(e);
    return n(d);
  }
  if (e = s("filename", "i").exec(c), e) {
    e = e[1];
    let d = o(e);
    return d = h(d), n(d);
  }
  function s(d, u) {
    return new RegExp("(?:^|;)\\s*" + d + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', u);
  }
  function i(d, u) {
    if (d) {
      if (!/^[\x00-\xFF]+$/.test(u))
        return u;
      try {
        const f = new TextDecoder(d, {
          fatal: !0
        }), p = Vc(u);
        u = f.decode(p), t = !1;
      } catch {
      }
    }
    return u;
  }
  function n(d) {
    return t && /[\x80-\xff]/.test(d) && (d = i("utf-8", d), t && (d = i("iso-8859-1", d))), d;
  }
  function r(d) {
    const u = [];
    let f;
    const p = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (f = p.exec(d)) !== null; ) {
      let [, A, _, y] = f;
      if (A = parseInt(A, 10), A in u) {
        if (A === 0)
          break;
        continue;
      }
      u[A] = [_, y];
    }
    const g = [];
    for (let A = 0; A < u.length && A in u; ++A) {
      let [_, y] = u[A];
      y = o(y), _ && (y = unescape(y), A === 0 && (y = l(y))), g.push(y);
    }
    return g.join("");
  }
  function o(d) {
    if (d.startsWith('"')) {
      const u = d.slice(1).split('\\"');
      for (let f = 0; f < u.length; ++f) {
        const p = u[f].indexOf('"');
        p !== -1 && (u[f] = u[f].slice(0, p), u.length = f + 1), u[f] = u[f].replaceAll(/\\(.)/g, "$1");
      }
      d = u.join('"');
    }
    return d;
  }
  function l(d) {
    const u = d.indexOf("'");
    if (u === -1)
      return d;
    const f = d.slice(0, u), g = d.slice(u + 1).replace(/^[^']*'/, "");
    return i(f, g);
  }
  function h(d) {
    return !d.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(d) ? d : d.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(u, f, p, g) {
      if (p === "q" || p === "Q")
        return g = g.replaceAll("_", " "), g = g.replaceAll(/=([0-9a-fA-F]{2})/g, function(A, _) {
          return String.fromCharCode(parseInt(_, 16));
        }), i(f, g);
      try {
        g = atob(g);
      } catch {
      }
      return i(f, g);
    });
  }
  return "";
}
function Wd(c, t) {
  const e = new Headers();
  if (!c || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const i = t[s];
    i !== void 0 && e.append(s, i);
  }
  return e;
}
function qd({
  responseHeaders: c,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: s
}) {
  const i = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, n = parseInt(c.get("Content-Length"), 10);
  return !Number.isInteger(n) || (i.suggestedLength = n, n <= 2 * e) || s || !t || c.get("Accept-Ranges") !== "bytes" || (c.get("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
function Xd(c) {
  const t = c.get("Content-Disposition");
  if (t) {
    let e = ub(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (zd(e))
      return e;
  }
  return null;
}
function Xc(c, t) {
  return c === 404 || c === 0 && t.startsWith("file:") ? new Ar('Missing PDF "' + t + '".') : new $c(`Unexpected server response (${c}) while retrieving PDF "${t}".`, c);
}
function Hf(c) {
  return c === 200 || c === 206;
}
function Bf(c, t, e) {
  return {
    method: "GET",
    headers: c,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function jf(c) {
  return c instanceof Uint8Array ? c.buffer : c instanceof ArrayBuffer ? c : (tt(`getArrayBuffer - unexpected data format: ${c}`), new Uint8Array(c).buffer);
}
class Tu {
  constructor(t) {
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Wd(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Wt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new fb(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new pb(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class fb {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers), i = e.url;
    fetch(i, Bf(s, this._withCredentials, this._abortController)).then((n) => {
      if (!Hf(n.status))
        throw Xc(n.status, i);
      this._reader = n.body.getReader(), this._headersCapability.resolve();
      const r = n.headers, {
        allowRangeRequests: o,
        suggestedLength: l
      } = qd({
        responseHeaders: r,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = Xd(r), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new yr("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: jf(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class pb {
  constructor(t, e, s) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const n = new Headers(t.headers);
    n.append("Range", `bytes=${e}-${s - 1}`);
    const r = i.url;
    fetch(r, Bf(n, this._withCredentials, this._abortController)).then((o) => {
      if (!Hf(o.status))
        throw Xc(o.status, r);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._readCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: jf(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const oh = 200, lh = 206;
function gb(c) {
  const t = c.response;
  return typeof t != "string" ? t : Vc(t).buffer;
}
class mb {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: s
  }) {
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Wd(this.isHttp, e), this.withCredentials = s || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  requestRange(t, e, s) {
    const i = {
      begin: t,
      end: e
    };
    for (const n in s)
      i[n] = s[n];
    return this.request(i);
  }
  requestFull(t) {
    return this.request(t);
  }
  request(t) {
    const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [n, r] of this.headers)
      e.setRequestHeader(n, r);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = lh) : i.expectedStatus = oh, e.responseType = "arraybuffer", t.onError && (e.onerror = function(n) {
      t.onError(e.status);
    }), e.onreadystatechange = this.onStateChange.bind(this, s), e.onprogress = this.onProgress.bind(this, s), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), s;
  }
  onProgress(t, e) {
    var i;
    const s = this.pendingRequests[t];
    s && ((i = s.onProgress) == null || i.call(s, e));
  }
  onStateChange(t, e) {
    var l, h, d;
    const s = this.pendingRequests[t];
    if (!s)
      return;
    const i = s.xhr;
    if (i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
      (l = s.onError) == null || l.call(s, i.status);
      return;
    }
    const n = i.status || oh;
    if (!(n === oh && s.expectedStatus === lh) && n !== s.expectedStatus) {
      (h = s.onError) == null || h.call(s, i.status);
      return;
    }
    const o = gb(i);
    if (n === lh) {
      const u = i.getResponseHeader("Content-Range"), f = /bytes (\d+)-(\d+)\/(\d+)/.exec(u);
      s.onDone({
        begin: parseInt(f[1], 10),
        chunk: o
      });
    } else o ? s.onDone({
      begin: 0,
      chunk: o
    }) : (d = s.onError) == null || d.call(s, i.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class bb {
  constructor(t) {
    this._source = t, this._manager = new mb(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return Wt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new Ab(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new yb(this._manager, t, e);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class Ab {
  constructor(t, e) {
    this._manager = t;
    const s = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = e.url, this._fullRequestId = t.requestFull(s), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t), s = new Headers(e.getAllResponseHeaders().trim().split(/[\r\n]+/).map((r) => {
      const [o, ...l] = r.split(": ");
      return [o, l.join(": ")];
    })), {
      allowRangeRequests: i,
      suggestedLength: n
    } = qd({
      responseHeaders: s,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    i && (this._isRangeSupported = !0), this._contentLength = n || this._contentLength, this._filename = Xd(s), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = Xc(t, this._url), this._headersCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    var e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersCapability.reject(t);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class yb {
  constructor(t, e, s) {
    this._manager = t;
    const i = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = t.url, this._requestId = t.requestRange(e, s, i), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _close() {
    var t;
    (t = this.onClosed) == null || t.call(this, this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const s of this._requests)
      s.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError = Xc(t, this._url);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const vb = /^[a-z][a-z0-9\-+.]+:/i;
function _b(c) {
  if (vb.test(c))
    return new URL(c);
  const t = sn.get("url");
  return new URL(t.pathToFileURL(c));
}
function zf(c, t, e) {
  return c.protocol === "http:" ? sn.get("http").request(c, {
    headers: t
  }, e) : sn.get("https").request(c, {
    headers: t
  }, e);
}
class wb {
  constructor(t) {
    this.source = t, this.url = _b(t.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.headers = Wd(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Wt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new xb(this) : new Eb(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = this.isFsUrl ? new Tb(this, t, e) : new Sb(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class Gf {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new yr("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class Uf {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const e = t.source;
    this._isStreamingSupported = !e.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class Eb extends Gf {
  constructor(t) {
    super(t);
    const e = Object.fromEntries(t.headers), s = (i) => {
      if (i.statusCode === 404) {
        const l = new Ar(`Missing PDF "${this._url}".`);
        this._storedError = l, this._headersCapability.reject(l);
        return;
      }
      this._headersCapability.resolve(), this._setReadableStream(i);
      const n = new Headers(this._readableStream.headers), {
        allowRangeRequests: r,
        suggestedLength: o
      } = qd({
        responseHeaders: n,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = r, this._contentLength = o || this._contentLength, this._filename = Xd(n);
    };
    this._request = zf(this._url, e, s), this._request.on("error", (i) => {
      this._storedError = i, this._headersCapability.reject(i);
    }), this._request.end();
  }
}
class Sb extends Uf {
  constructor(t, e, s) {
    super(t);
    const i = Object.fromEntries(t.headers);
    i.Range = `bytes=${e}-${s - 1}`;
    const n = (r) => {
      if (r.statusCode === 404) {
        const o = new Ar(`Missing PDF "${this._url}".`);
        this._storedError = o;
        return;
      }
      this._setReadableStream(r);
    };
    this._request = zf(this._url, i, n), this._request.on("error", (r) => {
      this._storedError = r;
    }), this._request.end();
  }
}
class xb extends Gf {
  constructor(t) {
    super(t);
    const e = sn.get("fs");
    e.promises.lstat(this._url).then((s) => {
      this._contentLength = s.size, this._setReadableStream(e.createReadStream(this._url)), this._headersCapability.resolve();
    }, (s) => {
      s.code === "ENOENT" && (s = new Ar(`Missing PDF "${this._url}".`)), this._storedError = s, this._headersCapability.reject(s);
    });
  }
}
class Tb extends Uf {
  constructor(t, e, s) {
    super(t);
    const i = sn.get("fs");
    this._setReadableStream(i.createReadStream(this._url, {
      start: e,
      end: s - 1
    }));
  }
}
const Cb = 1e5, Ee = 30, Pb = 0.8;
var zu, ji, Te, zo, Go, Dn, ti, Uo, $o, On, ta, ea, zi, sa, Vo, ia, Nn, Wo, qo, Ft, Hn, Bn, Xo, Gi, na, wi, $f, Vf, Wh, Ue, Kl, qh, Wf, qf;
let Vh = (Ft = class {
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }) {
    v(this, wi);
    v(this, ji, Promise.withResolvers());
    v(this, Te, null);
    v(this, zo, !1);
    v(this, Go, !!((zu = globalThis.FontInspector) != null && zu.enabled));
    v(this, Dn, null);
    v(this, ti, null);
    v(this, Uo, 0);
    v(this, $o, 0);
    v(this, On, null);
    v(this, ta, null);
    v(this, ea, 0);
    v(this, zi, 0);
    v(this, sa, /* @__PURE__ */ Object.create(null));
    v(this, Vo, []);
    v(this, ia, null);
    v(this, Nn, []);
    v(this, Wo, /* @__PURE__ */ new WeakMap());
    v(this, qo, null);
    var l;
    if (t instanceof ReadableStream)
      m(this, ia, t);
    else if (typeof t == "object")
      m(this, ia, new ReadableStream({
        start(h) {
          h.enqueue(t), h.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    m(this, Te, m(this, ta, e)), m(this, zi, s.scale * (globalThis.devicePixelRatio || 1)), m(this, ea, s.rotation), m(this, ti, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: i,
      pageHeight: n,
      pageX: r,
      pageY: o
    } = s.rawDims;
    m(this, qo, [1, 0, 0, -1, -r, o + n]), m(this, $o, i), m(this, Uo, n), b(l = Ft, Ue, Wf).call(l), ur(e, s), a(this, ji).promise.finally(() => {
      a(Ft, na).delete(this), m(this, ti, null), m(this, sa, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = ve.platform;
    return nt(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      a(this, On).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          a(this, ji).resolve();
          return;
        }
        a(this, Dn) ?? m(this, Dn, e.lang), Object.assign(a(this, sa), e.styles), b(this, wi, $f).call(this, e.items), t();
      }, a(this, ji).reject);
    };
    return m(this, On, a(this, ia).getReader()), a(Ft, na).add(this), t(), a(this, ji).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var n;
    const s = t.scale * (globalThis.devicePixelRatio || 1), i = t.rotation;
    if (i !== a(this, ea) && (e == null || e(), m(this, ea, i), ur(a(this, ta), {
      rotation: i
    })), s !== a(this, zi)) {
      e == null || e(), m(this, zi, s);
      const r = {
        div: null,
        properties: null,
        ctx: b(n = Ft, Ue, Kl).call(n, a(this, Dn))
      };
      for (const o of a(this, Nn))
        r.properties = a(this, Wo).get(o), r.div = o, b(this, wi, Wh).call(this, r);
    }
  }
  cancel() {
    var e;
    const t = new yr("TextLayer task cancelled.");
    (e = a(this, On)) == null || e.cancel(t).catch(() => {
    }), m(this, On, null), a(this, ji).reject(t);
  }
  get textDivs() {
    return a(this, Nn);
  }
  get textContentItemsStr() {
    return a(this, Vo);
  }
  static cleanup() {
    if (!(a(this, na).size > 0)) {
      a(this, Hn).clear();
      for (const {
        canvas: t
      } of a(this, Bn).values())
        t.remove();
      a(this, Bn).clear();
    }
  }
}, ji = new WeakMap(), Te = new WeakMap(), zo = new WeakMap(), Go = new WeakMap(), Dn = new WeakMap(), ti = new WeakMap(), Uo = new WeakMap(), $o = new WeakMap(), On = new WeakMap(), ta = new WeakMap(), ea = new WeakMap(), zi = new WeakMap(), sa = new WeakMap(), Vo = new WeakMap(), ia = new WeakMap(), Nn = new WeakMap(), Wo = new WeakMap(), qo = new WeakMap(), Hn = new WeakMap(), Bn = new WeakMap(), Xo = new WeakMap(), Gi = new WeakMap(), na = new WeakMap(), wi = new WeakSet(), $f = function(t) {
  var i, n;
  if (a(this, zo))
    return;
  (n = a(this, ti)).ctx ?? (n.ctx = b(i = Ft, Ue, Kl).call(i, a(this, Dn)));
  const e = a(this, Nn), s = a(this, Vo);
  for (const r of t) {
    if (e.length > Cb) {
      tt("Ignoring additional textDivs for performance reasons."), m(this, zo, !0);
      return;
    }
    if (r.str === void 0) {
      if (r.type === "beginMarkedContentProps" || r.type === "beginMarkedContent") {
        const o = a(this, Te);
        m(this, Te, document.createElement("span")), a(this, Te).classList.add("markedContent"), r.id !== null && a(this, Te).setAttribute("id", `${r.id}`), o.append(a(this, Te));
      } else r.type === "endMarkedContent" && m(this, Te, a(this, Te).parentNode);
      continue;
    }
    s.push(r.str), b(this, wi, Vf).call(this, r);
  }
}, Vf = function(t) {
  var A;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  a(this, Nn).push(e);
  const i = B.transform(a(this, qo), t.transform);
  let n = Math.atan2(i[1], i[0]);
  const r = a(this, sa)[t.fontName];
  r.vertical && (n += Math.PI / 2);
  let o = a(this, Go) && r.fontSubstitution || r.fontFamily;
  o = Ft.fontFamilyMap.get(o) || o;
  const l = Math.hypot(i[2], i[3]), h = l * b(A = Ft, Ue, qf).call(A, o, a(this, Dn));
  let d, u;
  n === 0 ? (d = i[4], u = i[5] - h) : (d = i[4] + h * Math.sin(n), u = i[5] - h * Math.cos(n));
  const f = "calc(var(--scale-factor)*", p = e.style;
  a(this, Te) === a(this, ta) ? (p.left = `${(100 * d / a(this, $o)).toFixed(2)}%`, p.top = `${(100 * u / a(this, Uo)).toFixed(2)}%`) : (p.left = `${f}${d.toFixed(2)}px)`, p.top = `${f}${u.toFixed(2)}px)`), p.fontSize = `${f}${(a(Ft, Gi) * l).toFixed(2)}px)`, p.fontFamily = o, s.fontSize = l, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, a(this, Go) && (e.dataset.fontName = r.fontSubstitutionLoadedName || t.fontName), n !== 0 && (s.angle = n * (180 / Math.PI));
  let g = !1;
  if (t.str.length > 1)
    g = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const _ = Math.abs(t.transform[0]), y = Math.abs(t.transform[3]);
    _ !== y && Math.max(_, y) / Math.min(_, y) > 1.5 && (g = !0);
  }
  if (g && (s.canvasWidth = r.vertical ? t.height : t.width), a(this, Wo).set(e, s), a(this, ti).div = e, a(this, ti).properties = s, b(this, wi, Wh).call(this, a(this, ti)), s.hasText && a(this, Te).append(e), s.hasEOL) {
    const _ = document.createElement("br");
    _.setAttribute("role", "presentation"), a(this, Te).append(_);
  }
}, Wh = function(t) {
  var o;
  const {
    div: e,
    properties: s,
    ctx: i
  } = t, {
    style: n
  } = e;
  let r = "";
  if (a(Ft, Gi) > 1 && (r = `scale(${1 / a(Ft, Gi)})`), s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: l
    } = n, {
      canvasWidth: h,
      fontSize: d
    } = s;
    b(o = Ft, Ue, qh).call(o, i, d * a(this, zi), l);
    const {
      width: u
    } = i.measureText(e.textContent);
    u > 0 && (r = `scaleX(${h * a(this, zi) / u}) ${r}`);
  }
  s.angle !== 0 && (r = `rotate(${s.angle}deg) ${r}`), r.length > 0 && (n.transform = r);
}, Ue = new WeakSet(), Kl = function(t = null) {
  let e = a(this, Bn).get(t || (t = ""));
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), a(this, Bn).set(t, e), a(this, Xo).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, qh = function(t, e, s) {
  const i = a(this, Xo).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, Wf = function() {
  if (a(this, Gi) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), m(this, Gi, t.getBoundingClientRect().height), t.remove();
}, qf = function(t, e) {
  const s = a(this, Hn).get(t);
  if (s)
    return s;
  const i = b(this, Ue, Kl).call(this, e);
  i.canvas.width = i.canvas.height = Ee, b(this, Ue, qh).call(this, i, Ee, t);
  const n = i.measureText("");
  let r = n.fontBoundingBoxAscent, o = Math.abs(n.fontBoundingBoxDescent);
  if (r) {
    const d = r / (r + o);
    return a(this, Hn).set(t, d), i.canvas.width = i.canvas.height = 0, d;
  }
  i.strokeStyle = "red", i.clearRect(0, 0, Ee, Ee), i.strokeText("g", 0, 0);
  let l = i.getImageData(0, 0, Ee, Ee).data;
  o = 0;
  for (let d = l.length - 1 - 3; d >= 0; d -= 4)
    if (l[d] > 0) {
      o = Math.ceil(d / 4 / Ee);
      break;
    }
  i.clearRect(0, 0, Ee, Ee), i.strokeText("A", 0, Ee), l = i.getImageData(0, 0, Ee, Ee).data, r = 0;
  for (let d = 0, u = l.length; d < u; d += 4)
    if (l[d] > 0) {
      r = Ee - Math.floor(d / 4 / Ee);
      break;
    }
  i.canvas.width = i.canvas.height = 0;
  const h = r ? r / (r + o) : Pb;
  return a(this, Hn).set(t, h), h;
}, v(Ft, Ue), v(Ft, Hn, /* @__PURE__ */ new Map()), v(Ft, Bn, /* @__PURE__ */ new Map()), v(Ft, Xo, /* @__PURE__ */ new WeakMap()), v(Ft, Gi, null), v(Ft, na, /* @__PURE__ */ new Set()), Ft);
class uo {
  static textContent(t) {
    const e = [], s = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function i(n) {
      var l;
      if (!n)
        return;
      let r = null;
      const o = n.name;
      if (o === "#text")
        r = n.value;
      else if (uo.shouldBuildText(o))
        (l = n == null ? void 0 : n.attributes) != null && l.textContent ? r = n.attributes.textContent : n.value && (r = n.value);
      else return;
      if (r !== null && e.push({
        str: r
      }), !!n.children)
        for (const h of n.children)
          i(h);
    }
    return i(t), s;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
const Rb = 65536, Lb = 100, kb = 5e3, Mb = pe ? $m : zm, Ib = pe ? Vm : Rf, Fb = pe ? Um : Gm, Db = pe ? Wm : If;
function Ob(c = {}) {
  typeof c == "string" || c instanceof URL ? c = {
    url: c
  } : (c instanceof ArrayBuffer || ArrayBuffer.isView(c)) && (c = {
    data: c
  });
  const t = new Xh(), {
    docId: e
  } = t, s = c.url ? Nb(c.url) : null, i = c.data ? Hb(c.data) : null, n = c.httpHeaders || null, r = c.withCredentials === !0, o = c.password ?? null, l = c.range instanceof Xf ? c.range : null, h = Number.isInteger(c.rangeChunkSize) && c.rangeChunkSize > 0 ? c.rangeChunkSize : Rb;
  let d = c.worker instanceof Ir ? c.worker : null;
  const u = c.verbosity, f = typeof c.docBaseUrl == "string" && !qc(c.docBaseUrl) ? c.docBaseUrl : null, p = typeof c.cMapUrl == "string" ? c.cMapUrl : null, g = c.cMapPacked !== !1, A = c.CMapReaderFactory || Ib, _ = typeof c.standardFontDataUrl == "string" ? c.standardFontDataUrl : null, y = c.StandardFontDataFactory || Db, w = c.stopAtErrors !== !0, E = Number.isInteger(c.maxImageSize) && c.maxImageSize > -1 ? c.maxImageSize : -1, S = c.isEvalSupported !== !1, T = typeof c.isOffscreenCanvasSupported == "boolean" ? c.isOffscreenCanvasSupported : !pe, x = typeof c.isChrome == "boolean" ? c.isChrome : !ve.platform.isFirefox && typeof window < "u" && !!(window != null && window.chrome), C = Number.isInteger(c.canvasMaxAreaInBytes) ? c.canvasMaxAreaInBytes : -1, P = typeof c.disableFontFace == "boolean" ? c.disableFontFace : pe, R = c.fontExtraProperties === !0, k = c.enableXfa === !0, L = c.ownerDocument || globalThis.document, U = c.disableRange === !0, j = c.disableStream === !0, H = c.disableAutoFetch === !0, $ = c.pdfBug === !0, V = c.CanvasFactory || Mb, F = c.FilterFactory || Fb, N = c.enableHWA === !0, _t = l ? l.length : c.length ?? NaN, Dt = typeof c.useSystemFonts == "boolean" ? c.useSystemFonts : !pe && !P, At = typeof c.useWorkerFetch == "boolean" ? c.useWorkerFetch : A === Rf && y === If && p && _ && za(p, document.baseURI) && za(_, document.baseURI);
  c.canvasFactory && pu("`canvasFactory`-instance option, please use `CanvasFactory` instead."), c.filterFactory && pu("`filterFactory`-instance option, please use `FilterFactory` instead.");
  const ht = null;
  Am(u);
  const rt = {
    canvasFactory: new V({
      ownerDocument: L,
      enableHWA: N
    }),
    filterFactory: new F({
      docId: e,
      ownerDocument: L
    }),
    cMapReaderFactory: At ? null : new A({
      baseUrl: p,
      isCompressed: g
    }),
    standardFontDataFactory: At ? null : new y({
      baseUrl: _
    })
  };
  if (!d) {
    const yt = {
      verbosity: u,
      port: Ai.workerPort
    };
    d = yt.port ? Ir.fromPort(yt) : new Ir(yt), t._worker = d;
  }
  const Tt = {
    docId: e,
    apiVersion: "4.8.69",
    data: i,
    password: o,
    disableAutoFetch: H,
    rangeChunkSize: h,
    length: _t,
    docBaseUrl: f,
    enableXfa: k,
    evaluatorOptions: {
      maxImageSize: E,
      disableFontFace: P,
      ignoreErrors: w,
      isEvalSupported: S,
      isOffscreenCanvasSupported: T,
      isChrome: x,
      canvasMaxAreaInBytes: C,
      fontExtraProperties: R,
      useSystemFonts: Dt,
      cMapUrl: At ? p : null,
      standardFontDataUrl: At ? _ : null
    }
  }, te = {
    disableFontFace: P,
    fontExtraProperties: R,
    ownerDocument: L,
    pdfBug: $,
    styleElement: ht,
    loadingParams: {
      disableAutoFetch: H,
      enableXfa: k
    }
  };
  return d.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (d.destroyed)
      throw new Error("Worker was destroyed");
    const yt = d.messageHandler.sendWithPromise("GetDocRequest", Tt, i ? [i.buffer] : null);
    let X;
    if (l)
      X = new cb(l, {
        disableRange: U,
        disableStream: j
      });
    else if (!i) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      let wt;
      pe ? wt = typeof fetch < "u" && typeof Response < "u" && "body" in Response.prototype && za(s) ? Tu : wb : wt = za(s) ? Tu : bb, X = new wt({
        url: s,
        length: _t,
        httpHeaders: n,
        withCredentials: r,
        rangeChunkSize: h,
        disableRange: U,
        disableStream: j
      });
    }
    return yt.then((wt) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (d.destroyed)
        throw new Error("Worker was destroyed");
      const Ot = new Xa(e, wt, d.port), st = new Gb(Ot, t, X, te, rt);
      t._transport = st, Ot.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
function Nb(c) {
  if (c instanceof URL)
    return c.href;
  try {
    return new URL(c, window.location).href;
  } catch {
    if (pe && typeof c == "string")
      return c;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function Hb(c) {
  if (pe && typeof Buffer < "u" && c instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (c instanceof Uint8Array && c.byteLength === c.buffer.byteLength)
    return c;
  if (typeof c == "string")
    return Vc(c);
  if (c instanceof ArrayBuffer || ArrayBuffer.isView(c) || typeof c == "object" && !isNaN(c == null ? void 0 : c.length))
    return new Uint8Array(c);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function Cu(c) {
  return typeof c == "object" && Number.isInteger(c == null ? void 0 : c.num) && c.num >= 0 && Number.isInteger(c == null ? void 0 : c.gen) && c.gen >= 0;
}
var Mc;
const Ic = class Ic {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${ge(Ic, Mc)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, s;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (i) {
      throw (s = this._worker) != null && s.port && delete this._worker._pendingDestroy, i;
    }
    this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
  }
};
Mc = new WeakMap(), v(Ic, Mc, 0);
let Xh = Ic, Xf = class {
  constructor(t, e, s = !1, i = null) {
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(t) {
    this._rangeListeners.push(t);
  }
  addProgressListener(t) {
    this._progressListeners.push(t);
  }
  addProgressiveReadListener(t) {
    this._progressiveReadListeners.push(t);
  }
  addProgressiveDoneListener(t) {
    this._progressiveDoneListeners.push(t);
  }
  onDataRange(t, e) {
    for (const s of this._rangeListeners)
      s(t, e);
  }
  onDataProgress(t, e) {
    this._readyCapability.promise.then(() => {
      for (const s of this._progressListeners)
        s(t, e);
    });
  }
  onDataProgressiveRead(t) {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveReadListeners)
        e(t);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const t of this._progressiveDoneListeners)
        t();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(t, e) {
    xt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
};
class Bb {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return nt(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var Ui, ei, Ke, Pr, Ql;
class jb {
  constructor(t, e, s, i = !1) {
    v(this, Ke);
    v(this, Ui, null);
    v(this, ei, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new fu() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new Yf(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: s = 0,
    offsetY: i = 0,
    dontFlip: n = !1
  } = {}) {
    return new Rl({
      viewBox: this.view,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: n
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return nt(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    viewport: e,
    intent: s = "display",
    annotationMode: i = Ci.ENABLE,
    transform: n = null,
    background: r = null,
    optionalContentConfigPromise: o = null,
    annotationCanvasMap: l = null,
    pageColors: h = null,
    printAnnotationStorage: d = null,
    isEditing: u = !1
  }) {
    var S, T;
    (S = this._stats) == null || S.time("Overall");
    const f = this._transport.getRenderingIntent(s, i, d, u), {
      renderingIntent: p,
      cacheKey: g
    } = f;
    m(this, ei, !1), b(this, Ke, Ql).call(this), o || (o = this._transport.getOptionalContentConfig(p));
    let A = this._intentStates.get(g);
    A || (A = /* @__PURE__ */ Object.create(null), this._intentStates.set(g, A)), A.streamReaderCancelTimeout && (clearTimeout(A.streamReaderCancelTimeout), A.streamReaderCancelTimeout = null);
    const _ = !!(p & je.PRINT);
    A.displayReadyCapability || (A.displayReadyCapability = Promise.withResolvers(), A.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (T = this._stats) == null || T.time("Page Request"), this._pumpOperatorList(f));
    const y = (x) => {
      var C;
      A.renderTasks.delete(w), (this._maybeCleanupAfterRender || _) && m(this, ei, !0), b(this, Ke, Pr).call(this, !_), x ? (w.capability.reject(x), this._abortOperatorList({
        intentState: A,
        reason: x instanceof Error ? x : new Error(x)
      })) : w.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (C = globalThis.Stats) != null && C.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, w = new Kh({
      callback: y,
      params: {
        canvasContext: t,
        viewport: e,
        transform: n,
        background: r
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: l,
      operatorList: A.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !_,
      pdfBug: this._pdfBug,
      pageColors: h
    });
    (A.renderTasks || (A.renderTasks = /* @__PURE__ */ new Set())).add(w);
    const E = w.task;
    return Promise.all([A.displayReadyCapability.promise, o]).then(([x, C]) => {
      var P;
      if (this.destroyed) {
        y();
        return;
      }
      if ((P = this._stats) == null || P.time("Rendering"), !(C.renderingIntent & p))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      w.initializeGraphics({
        transparency: x,
        optionalContentConfig: C
      }), w.operatorListChanged();
    }).catch(y), E;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = Ci.ENABLE,
    printAnnotationStorage: s = null,
    isEditing: i = !1
  } = {}) {
    var h;
    function n() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const r = this._transport.getRenderingIntent(t, e, s, i, !0);
    let o = this._intentStates.get(r.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(r.cacheKey, o));
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = n, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (h = this._stats) == null || h.time("Page Request"), this._pumpOperatorList(r)), o.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(i) {
        return i.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((s) => uo.textContent(s));
    const e = this.streamTextContent(t);
    return new Promise(function(s, i) {
      function n() {
        r.read().then(function({
          value: l,
          done: h
        }) {
          if (h) {
            s(o);
            return;
          }
          o.lang ?? (o.lang = l.lang), Object.assign(o.styles, l.styles), o.items.push(...l.items), n();
        }, i);
      }
      const r = e.getReader(), o = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      n();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const s of e.renderTasks)
          t.push(s.completed), s.cancel();
    return this.objs.clear(), m(this, ei, !1), b(this, Ke, Ql).call(this), Promise.all(t);
  }
  cleanup(t = !1) {
    m(this, ei, !0);
    const e = b(this, Ke, Pr).call(this, !1);
    return t && e && this._stats && (this._stats = new fu()), e;
  }
  _startRenderPage(t, e) {
    var i, n;
    const s = this._intentStates.get(e);
    s && ((i = this._stats) == null || i.timeEnd("Page Request"), (n = s.displayReadyCapability) == null || n.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let s = 0, i = t.length; s < i; s++)
      e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const s of e.renderTasks)
      s.operatorListChanged();
    t.lastChunk && b(this, Ke, Pr).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: s,
    modifiedIds: i
  }) {
    const {
      map: n,
      transfer: r
    } = s, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: n,
      modifiedIds: i
    }, r).getReader(), h = this._intentStates.get(e);
    h.streamReader = l;
    const d = () => {
      l.read().then(({
        value: u,
        done: f
      }) => {
        if (f) {
          h.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(u, h), d());
      }, (u) => {
        if (h.streamReader = null, !this._transport.destroyed) {
          if (h.operatorList) {
            h.operatorList.lastChunk = !0;
            for (const f of h.renderTasks)
              f.operatorListChanged();
            b(this, Ke, Pr).call(this, !0);
          }
          if (h.displayReadyCapability)
            h.displayReadyCapability.reject(u);
          else if (h.opListReadCapability)
            h.opListReadCapability.reject(u);
          else
            throw u;
        }
      });
    };
    d();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: s = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !s) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof jd) {
          let i = Lb;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, i);
          return;
        }
      }
      if (t.streamReader.cancel(new yr(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [i, n] of this._intentStates)
          if (n === t) {
            this._intentStates.delete(i);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
Ui = new WeakMap(), ei = new WeakMap(), Ke = new WeakSet(), Pr = function(t = !1) {
  if (b(this, Ke, Ql).call(this), !a(this, ei) || this.destroyed)
    return !1;
  if (t)
    return m(this, Ui, setTimeout(() => {
      m(this, Ui, null), b(this, Ke, Pr).call(this, !1);
    }, kb)), !1;
  for (const {
    renderTasks: e,
    operatorList: s
  } of this._intentStates.values())
    if (e.size > 0 || !s.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), m(this, ei, !1), !0;
}, Ql = function() {
  a(this, Ui) && (clearTimeout(a(this, Ui)), m(this, Ui, null));
};
var si, Fc;
class zb {
  constructor() {
    v(this, si, /* @__PURE__ */ new Map());
    v(this, Fc, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    a(this, Fc).then(() => {
      for (const [i] of a(this, si))
        i.call(this, s);
    });
  }
  addEventListener(t, e, s = null) {
    let i = null;
    if ((s == null ? void 0 : s.signal) instanceof AbortSignal) {
      const {
        signal: n
      } = s;
      if (n.aborted) {
        tt("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const r = () => this.removeEventListener(t, e);
      i = () => n.removeEventListener("abort", r), n.addEventListener("abort", r);
    }
    a(this, si).set(e, i);
  }
  removeEventListener(t, e) {
    const s = a(this, si).get(e);
    s == null || s(), a(this, si).delete(e);
  }
  terminate() {
    for (const [, t] of a(this, si))
      t == null || t();
    a(this, si).clear();
  }
}
si = new WeakMap(), Fc = new WeakMap();
var Dc, jn, zn, ra, Jl, aa, Zl;
const Ct = class Ct {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = ym()
  } = {}) {
    v(this, ra);
    var i;
    if (this.name = t, this.destroyed = !1, this.verbosity = s, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
      if ((i = a(Ct, zn)) != null && i.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (a(Ct, zn) || m(Ct, zn, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
      return;
    }
    this._initialize();
  }
  get promise() {
    return pe ? Promise.all([sn.promise, this._readyCapability.promise]) : this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(t) {
    this._port = t, this._messageHandler = new Xa("main", "worker", t), this._messageHandler.on("ready", function() {
    }), b(this, ra, Jl).call(this);
  }
  _initialize() {
    if (a(Ct, jn) || a(Ct, aa, Zl)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc: t
    } = Ct;
    try {
      Ct._isSameOrigin(window.location.href, t) || (t = Ct._createCDNWrapper(new URL(t, window.location).href));
      const e = new Worker(t, {
        type: "module"
      }), s = new Xa("main", "worker", e), i = () => {
        n.abort(), s.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
      }, n = new AbortController();
      e.addEventListener("error", () => {
        this._webWorker || i();
      }, {
        signal: n.signal
      }), s.on("test", (o) => {
        if (n.abort(), this.destroyed || !o) {
          i();
          return;
        }
        this._messageHandler = s, this._port = e, this._webWorker = e, b(this, ra, Jl).call(this);
      }), s.on("ready", (o) => {
        if (n.abort(), this.destroyed) {
          i();
          return;
        }
        try {
          r();
        } catch {
          this._setupFakeWorker();
        }
      });
      const r = () => {
        const o = new Uint8Array();
        s.send("test", o, [o.buffer]);
      };
      r();
      return;
    } catch {
      Uc("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    a(Ct, jn) || (tt("Setting up fake worker."), m(Ct, jn, !0)), Ct._setupFakeWorkerGlobal.then((t) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new zb();
      this._port = e;
      const s = `fake${ge(Ct, Dc)._++}`, i = new Xa(s + "_worker", s, e);
      t.setup(i, e), this._messageHandler = new Xa(s, s + "_worker", e), b(this, ra, Jl).call(this);
    }).catch((t) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
    });
  }
  destroy() {
    var t;
    this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (t = a(Ct, zn)) == null || t.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
  }
  static fromPort(t) {
    var s;
    if (!(t != null && t.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = (s = a(this, zn)) == null ? void 0 : s.get(t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new Ct(t);
  }
  static get workerSrc() {
    if (Ai.workerSrc)
      return Ai.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return nt(this, "_setupFakeWorkerGlobal", (async () => a(this, aa, Zl) ? a(this, aa, Zl) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
Dc = new WeakMap(), jn = new WeakMap(), zn = new WeakMap(), ra = new WeakSet(), Jl = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, aa = new WeakSet(), Zl = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, v(Ct, aa), v(Ct, Dc, 0), v(Ct, jn, !1), v(Ct, zn), pe && (m(Ct, jn, !0), Ai.workerSrc || (Ai.workerSrc = "./pdf.worker.mjs")), Ct._isSameOrigin = (t, e) => {
  let s;
  try {
    if (s = new URL(t), !s.origin || s.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const i = new URL(e, s);
  return s.origin === i.origin;
}, Ct._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
};
let Ir = Ct;
var ii, Ms, oa, la, Is, Gn, Ya;
class Gb {
  constructor(t, e, s, i, n) {
    v(this, Gn);
    v(this, ii, /* @__PURE__ */ new Map());
    v(this, Ms, /* @__PURE__ */ new Map());
    v(this, oa, /* @__PURE__ */ new Map());
    v(this, la, /* @__PURE__ */ new Map());
    v(this, Is, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new Yf(), this.fontLoader = new Bm({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = n.canvasFactory, this.filterFactory = n.filterFactory, this.cMapReaderFactory = n.cMapReaderFactory, this.standardFontDataFactory = n.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return nt(this, "annotationStorage", new $d());
  }
  getRenderingIntent(t, e = Ci.ENABLE, s = null, i = !1, n = !1) {
    let r = je.DISPLAY, o = Oh;
    switch (t) {
      case "any":
        r = je.ANY;
        break;
      case "display":
        break;
      case "print":
        r = je.PRINT;
        break;
      default:
        tt(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = r & je.PRINT && s instanceof Tf ? s : this.annotationStorage;
    switch (e) {
      case Ci.DISABLE:
        r += je.ANNOTATIONS_DISABLE;
        break;
      case Ci.ENABLE:
        break;
      case Ci.ENABLE_FORMS:
        r += je.ANNOTATIONS_FORMS;
        break;
      case Ci.ENABLE_STORAGE:
        r += je.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        tt(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (r += je.IS_EDITING), n && (r += je.OPLIST);
    const {
      ids: h,
      hash: d
    } = l.modifiedIds, u = [r, o.hash, d];
    return {
      renderingIntent: r,
      cacheKey: u.join("_"),
      annotationStorageSerializable: o,
      modifiedIds: h
    };
  }
  destroy() {
    var s;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (s = a(this, Is)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of a(this, Ms).values())
      t.push(i._destroy());
    a(this, Ms).clear(), a(this, oa).clear(), a(this, la).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i;
      this.commonObjs.clear(), this.fontLoader.clear(), a(this, ii).clear(), this.filterFactory.destroy(), Vh.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new yr("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, i) => {
      Wt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (n) => {
        this._lastProgress = {
          loaded: n.loaded,
          total: n.total
        };
      }, i.onPull = () => {
        this._fullReader.read().then(function({
          value: n,
          done: r
        }) {
          if (r) {
            i.close();
            return;
          }
          Wt(n instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(n), 1, [n]);
        }).catch((n) => {
          i.error(n);
        });
      }, i.onCancel = (n) => {
        this._fullReader.cancel(n), i.ready.catch((r) => {
          if (!this.destroyed)
            throw r;
        });
      };
    }), t.on("ReaderHeadersReady", async (s) => {
      var o;
      await this._fullReader.headersReady;
      const {
        isStreamingSupported: i,
        isRangeSupported: n,
        contentLength: r
      } = this._fullReader;
      return (!i || !n) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), this._fullReader.onProgress = (l) => {
        var h;
        (h = e.onProgress) == null || h.call(e, {
          loaded: l.loaded,
          total: l.total
        });
      }), {
        isStreamingSupported: i,
        isRangeSupported: n,
        contentLength: r
      };
    }), t.on("GetRangeReader", (s, i) => {
      Wt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const n = this._networkStream.getRangeReader(s.begin, s.end);
      if (!n) {
        i.close();
        return;
      }
      i.onPull = () => {
        n.read().then(function({
          value: r,
          done: o
        }) {
          if (o) {
            i.close();
            return;
          }
          Wt(r instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          i.error(r);
        });
      }, i.onCancel = (r) => {
        n.cancel(r), i.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: s
    }) => {
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new Bb(s, this));
    }), t.on("DocException", function(s) {
      let i;
      switch (s.name) {
        case "PasswordException":
          i = new ph(s.message, s.code);
          break;
        case "InvalidPDFException":
          i = new Qu(s.message);
          break;
        case "MissingPDFException":
          i = new Ar(s.message);
          break;
        case "UnexpectedResponseException":
          i = new $c(s.message, s.status);
          break;
        case "UnknownErrorException":
          i = new gh(s.message, s.details);
          break;
        default:
          xt("DocException - expected a valid Error.");
      }
      e._capability.reject(i);
    }), t.on("PasswordRequest", (s) => {
      if (m(this, Is, Promise.withResolvers()), e.onPassword) {
        const i = (n) => {
          n instanceof Error ? a(this, Is).reject(n) : a(this, Is).resolve({
            password: n
          });
        };
        try {
          e.onPassword(i, s.code);
        } catch (n) {
          a(this, Is).reject(n);
        }
      } else
        a(this, Is).reject(new ph(s.message, s.code));
      return a(this, Is).promise;
    }), t.on("DataLoaded", (s) => {
      var i;
      (i = e.onProgress) == null || i.call(e, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      a(this, Ms).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, i, n]) => {
      var r;
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (i) {
        case "Font":
          const {
            disableFontFace: o,
            fontExtraProperties: l,
            pdfBug: h
          } = this._params;
          if ("error" in n) {
            const p = n.error;
            tt(`Error during font loading: ${p}`), this.commonObjs.resolve(s, p);
            break;
          }
          const d = h && ((r = globalThis.FontInspector) != null && r.enabled) ? (p, g) => globalThis.FontInspector.fontAdded(p, g) : null, u = new jm(n, {
            disableFontFace: o,
            inspectFont: d
          });
          this.fontLoader.bind(u).catch(() => t.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            !l && u.data && (u.data = null), this.commonObjs.resolve(s, u);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: f
          } = n;
          Wt(f, "The imageRef must be defined.");
          for (const p of a(this, Ms).values())
            for (const [, g] of p.objs)
              if ((g == null ? void 0 : g.ref) === f)
                return g.dataLen ? (this.commonObjs.resolve(s, structuredClone(g)), g.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(s, n);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), t.on("obj", ([s, i, n, r]) => {
      var l;
      if (this.destroyed)
        return;
      const o = a(this, Ms).get(i);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          (l = r == null ? void 0 : r.bitmap) == null || l.close();
          return;
        }
        switch (n) {
          case "Image":
            o.objs.resolve(s, r), (r == null ? void 0 : r.dataLen) > pm && (o._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            o.objs.resolve(s, r);
            break;
          default:
            throw new Error(`Got unknown object type ${n}`);
        }
      }
    }), t.on("DocProgress", (s) => {
      var i;
      this.destroyed || (i = e.onProgress) == null || i.call(e, {
        loaded: s.loaded,
        total: s.total
      });
    }), t.on("FetchBuiltInCMap", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.cMapReaderFactory)
        throw new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.");
      return this.cMapReaderFactory.fetch(s);
    }), t.on("FetchStandardFontData", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.standardFontDataFactory)
        throw new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.");
      return this.standardFontDataFactory.fetch(s);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var s;
    this.annotationStorage.size <= 0 && tt("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((s = this._fullReader) == null ? void 0 : s.filename) ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, s = a(this, oa).get(e);
    if (s)
      return s;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((n) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      n.refStr && a(this, la).set(n.refStr, t);
      const r = new jb(e, n, this, this._params.pdfBug);
      return a(this, Ms).set(e, r), r;
    });
    return a(this, oa).set(e, i), i;
  }
  getPageIndex(t) {
    return Cu(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects() {
    return b(this, Gn, Ya).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return b(this, Gn, Ya).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return b(this, Gn, Ya).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return b(this, Gn, Ya).call(this, "GetOptionalContentConfig").then((e) => new lb(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = a(this, ii).get(t);
    if (e)
      return e;
    const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var n, r;
      return {
        info: i[0],
        metadata: i[1] ? new ab(i[1]) : null,
        contentDispositionFilename: ((n = this._fullReader) == null ? void 0 : n.filename) ?? null,
        contentLength: ((r = this._fullReader) == null ? void 0 : r.contentLength) ?? null
      };
    });
    return a(this, ii).set(t, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of a(this, Ms).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), a(this, ii).clear(), this.filterFactory.destroy(!0), Vh.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!Cu(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return a(this, la).get(e) ?? null;
  }
}
ii = new WeakMap(), Ms = new WeakMap(), oa = new WeakMap(), la = new WeakMap(), Is = new WeakMap(), Gn = new WeakSet(), Ya = function(t, e = null) {
  const s = a(this, ii).get(t);
  if (s)
    return s;
  const i = this.messageHandler.sendWithPromise(t, e);
  return a(this, ii).set(t, i), i;
};
const Bl = Symbol("INITIAL_DATA");
var os, Yo, Yh;
class Yf {
  constructor() {
    v(this, Yo);
    v(this, os, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = b(this, Yo, Yh).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = a(this, os)[t];
    if (!s || s.data === Bl)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = a(this, os)[t];
    return !!e && e.data !== Bl;
  }
  resolve(t, e = null) {
    const s = b(this, Yo, Yh).call(this, t);
    s.data = e, s.resolve();
  }
  clear() {
    var t;
    for (const e in a(this, os)) {
      const {
        data: s
      } = a(this, os)[e];
      (t = s == null ? void 0 : s.bitmap) == null || t.close();
    }
    m(this, os, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in a(this, os)) {
      const {
        data: e
      } = a(this, os)[t];
      e !== Bl && (yield [t, e]);
    }
  }
}
os = new WeakMap(), Yo = new WeakSet(), Yh = function(t) {
  var e;
  return (e = a(this, os))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: Bl
  });
};
var $i;
class Ub {
  constructor(t) {
    v(this, $i, null);
    m(this, $i, t), this.onContinue = null;
  }
  get promise() {
    return a(this, $i).capability.promise;
  }
  cancel(t = 0) {
    a(this, $i).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = a(this, $i).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = a(this, $i);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
$i = new WeakMap();
var Vi, Un;
const pn = class pn {
  constructor({
    callback: t,
    params: e,
    objs: s,
    commonObjs: i,
    annotationCanvasMap: n,
    operatorList: r,
    pageIndex: o,
    canvasFactory: l,
    filterFactory: h,
    useRequestAnimationFrame: d = !1,
    pdfBug: u = !1,
    pageColors: f = null
  }) {
    v(this, Vi, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = n, this.operatorListIdx = null, this.operatorList = r, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = u, this.pageColors = f, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = d === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Ub(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var o, l;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (a(pn, Un).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      a(pn, Un).add(this._canvas);
    }
    this._pdfBug && ((o = globalThis.StepperManager) != null && o.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: s,
      viewport: i,
      transform: n,
      background: r
    } = this.params;
    this.gfx = new Mr(s, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: n,
      viewport: i,
      transparency: t,
      background: r
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (l = this.graphicsReadyCallback) == null || l.call(this);
  }
  cancel(t = null, e = 0) {
    var s;
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), a(this, Vi) && (window.cancelAnimationFrame(a(this, Vi)), m(this, Vi, null)), a(pn, Un).delete(this._canvas), this.callback(t || new jd(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
  }
  operatorListChanged() {
    var t;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.stepper) == null || t.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? m(this, Vi, window.requestAnimationFrame(() => {
      m(this, Vi, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), a(pn, Un).delete(this._canvas), this.callback())));
  }
};
Vi = new WeakMap(), Un = new WeakMap(), v(pn, Un, /* @__PURE__ */ new WeakSet());
let Kh = pn;
const $b = "4.8.69", Vb = "3634dab10";
function Pu(c) {
  return Math.floor(Math.max(0, Math.min(1, c)) * 255).toString(16).padStart(2, "0");
}
function Ba(c) {
  return Math.max(0, Math.min(255, 255 * c));
}
class Ru {
  static CMYK_G([t, e, s, i]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = Ba(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = Pu(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(Ba);
  }
  static RGB_HTML(t) {
    return `#${t.map(Pu).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, s, i]) {
    return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, s + i), 1 - Math.min(1, e + i)];
  }
  static CMYK_rgb([t, e, s, i]) {
    return [Ba(1 - Math.min(1, t + i)), Ba(1 - Math.min(1, s + i)), Ba(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, s]) {
    const i = 1 - t, n = 1 - e, r = 1 - s, o = Math.min(i, n, r);
    return ["CMYK", i, n, r, o];
  }
}
class Wb {
  create(t, e, s = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    xt("Abstract method `_createSVG` called.");
  }
}
class Yd extends Wb {
  _createSVG(t) {
    return document.createElementNS(Vs, t);
  }
}
class Kf {
  static setupStorage(t, e, s, i, n) {
    const r = i.getValue(e, {
      value: null
    });
    switch (s.name) {
      case "textarea":
        if (r.value !== null && (t.textContent = r.value), n === "print")
          break;
        t.addEventListener("input", (o) => {
          i.setValue(e, {
            value: o.target.value
          });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (r.value === s.attributes.xfaOn ? t.setAttribute("checked", !0) : r.value === s.attributes.xfaOff && t.removeAttribute("checked"), n === "print")
            break;
          t.addEventListener("change", (o) => {
            i.setValue(e, {
              value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (r.value !== null && t.setAttribute("value", r.value), n === "print")
            break;
          t.addEventListener("input", (o) => {
            i.setValue(e, {
              value: o.target.value
            });
          });
        }
        break;
      case "select":
        if (r.value !== null) {
          t.setAttribute("value", r.value);
          for (const o of s.children)
            o.attributes.value === r.value ? o.attributes.selected = !0 : o.attributes.hasOwnProperty("selected") && delete o.attributes.selected;
        }
        t.addEventListener("input", (o) => {
          const l = o.target.options, h = l.selectedIndex === -1 ? "" : l[l.selectedIndex].value;
          i.setValue(e, {
            value: h
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: s = null,
    intent: i,
    linkService: n
  }) {
    const {
      attributes: r
    } = e, o = t instanceof HTMLAnchorElement;
    r.type === "radio" && (r.name = `${r.name}-${i}`);
    for (const [l, h] of Object.entries(r))
      if (h != null)
        switch (l) {
          case "class":
            h.length && t.setAttribute(l, h.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", h);
            break;
          case "style":
            Object.assign(t.style, h);
            break;
          case "textContent":
            t.textContent = h;
            break;
          default:
            (!o || l !== "href" && l !== "newWindow") && t.setAttribute(l, h);
        }
    o && n.addLinkAttributes(t, r.href, r.newWindow), s && r.dataId && this.setupStorage(t, r.dataId, e, s);
  }
  static render(t) {
    var u, f;
    const e = t.annotationStorage, s = t.linkService, i = t.xfaHtml, n = t.intent || "display", r = document.createElement(i.name);
    i.attributes && this.setAttributes({
      html: r,
      element: i,
      intent: n,
      linkService: s
    });
    const o = n !== "richText", l = t.div;
    if (l.append(r), t.viewport) {
      const p = `matrix(${t.viewport.transform.join(",")})`;
      l.style.transform = p;
    }
    o && l.setAttribute("class", "xfaLayer xfaFont");
    const h = [];
    if (i.children.length === 0) {
      if (i.value) {
        const p = document.createTextNode(i.value);
        r.append(p), o && uo.shouldBuildText(i.name) && h.push(p);
      }
      return {
        textDivs: h
      };
    }
    const d = [[i, -1, r]];
    for (; d.length > 0; ) {
      const [p, g, A] = d.at(-1);
      if (g + 1 === p.children.length) {
        d.pop();
        continue;
      }
      const _ = p.children[++d.at(-1)[1]];
      if (_ === null)
        continue;
      const {
        name: y
      } = _;
      if (y === "#text") {
        const E = document.createTextNode(_.value);
        h.push(E), A.append(E);
        continue;
      }
      const w = (u = _ == null ? void 0 : _.attributes) != null && u.xmlns ? document.createElementNS(_.attributes.xmlns, y) : document.createElement(y);
      if (A.append(w), _.attributes && this.setAttributes({
        html: w,
        element: _,
        storage: e,
        intent: n,
        linkService: s
      }), ((f = _.children) == null ? void 0 : f.length) > 0)
        d.push([_, -1, w]);
      else if (_.value) {
        const E = document.createTextNode(_.value);
        o && uo.shouldBuildText(y) && h.push(E), w.append(E);
      }
    }
    for (const p of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      p.setAttribute("readOnly", !0);
    return {
      textDivs: h
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const kl = 1e3, qb = 9, pr = /* @__PURE__ */ new WeakSet();
function yi(c) {
  return {
    width: c[2] - c[0],
    height: c[3] - c[1]
  };
}
class Xb {
  static create(t) {
    switch (t.data.annotationType) {
      case Gt.LINK:
        return new Qf(t);
      case Gt.TEXT:
        return new Yb(t);
      case Gt.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new Kb(t);
          case "Btn":
            return t.data.radioButton ? new tp(t) : t.data.checkBox ? new Jb(t) : new Zb(t);
          case "Ch":
            return new tA(t);
          case "Sig":
            return new Qb(t);
        }
        return new vr(t);
      case Gt.POPUP:
        return new Jh(t);
      case Gt.FREETEXT:
        return new rp(t);
      case Gt.LINE:
        return new sA(t);
      case Gt.SQUARE:
        return new iA(t);
      case Gt.CIRCLE:
        return new nA(t);
      case Gt.POLYLINE:
        return new ap(t);
      case Gt.CARET:
        return new aA(t);
      case Gt.INK:
        return new Kd(t);
      case Gt.POLYGON:
        return new rA(t);
      case Gt.HIGHLIGHT:
        return new op(t);
      case Gt.UNDERLINE:
        return new oA(t);
      case Gt.SQUIGGLY:
        return new lA(t);
      case Gt.STRIKEOUT:
        return new cA(t);
      case Gt.STAMP:
        return new lp(t);
      case Gt.FILEATTACHMENT:
        return new hA(t);
      default:
        return new Ht(t);
    }
  }
}
var $n, ca, ha, Ko, Qh;
const tu = class tu {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    v(this, Ko);
    v(this, $n, null);
    v(this, ca, !1);
    v(this, ha, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: t,
    contentsObj: e,
    richText: s
  }) {
    return !!(t != null && t.str || e != null && e.str || s != null && s.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return tu._hasPopupData(this.data);
  }
  updateEdited(t) {
    var s;
    if (!this.container)
      return;
    a(this, $n) || m(this, $n, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = t;
    e && b(this, Ko, Qh).call(this, e), (s = a(this, ha)) == null || s.popup.updateEdited(t);
  }
  resetEdited() {
    var t;
    a(this, $n) && (b(this, Ko, Qh).call(this, a(this, $n).rect), (t = a(this, ha)) == null || t.popup.resetEdited(), m(this, $n, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: i
      }
    } = this, n = document.createElement("section");
    n.setAttribute("data-annotation-id", e.id), this instanceof vr || (n.tabIndex = kl);
    const {
      style: r
    } = n;
    if (r.zIndex = this.parent.zIndex++, e.alternativeText && (n.title = e.alternativeText), e.noRotate && n.classList.add("norotate"), !e.rect || this instanceof Jh) {
      const {
        rotation: A
      } = e;
      return !e.hasOwnCanvas && A !== 0 && this.setRotation(A, n), n;
    }
    const {
      width: o,
      height: l
    } = yi(e.rect);
    if (!t && e.borderStyle.width > 0) {
      r.borderWidth = `${e.borderStyle.width}px`;
      const A = e.borderStyle.horizontalCornerRadius, _ = e.borderStyle.verticalCornerRadius;
      if (A > 0 || _ > 0) {
        const w = `calc(${A}px * var(--scale-factor)) / calc(${_}px * var(--scale-factor))`;
        r.borderRadius = w;
      } else if (this instanceof tp) {
        const w = `calc(${o}px * var(--scale-factor)) / calc(${l}px * var(--scale-factor))`;
        r.borderRadius = w;
      }
      switch (e.borderStyle.style) {
        case Na.SOLID:
          r.borderStyle = "solid";
          break;
        case Na.DASHED:
          r.borderStyle = "dashed";
          break;
        case Na.BEVELED:
          tt("Unimplemented border style: beveled");
          break;
        case Na.INSET:
          tt("Unimplemented border style: inset");
          break;
        case Na.UNDERLINE:
          r.borderBottomStyle = "solid";
          break;
      }
      const y = e.borderColor || null;
      y ? (m(this, ca, !0), r.borderColor = B.makeHexColor(y[0] | 0, y[1] | 0, y[2] | 0)) : r.borderWidth = 0;
    }
    const h = B.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: d,
      pageHeight: u,
      pageX: f,
      pageY: p
    } = i.rawDims;
    r.left = `${100 * (h[0] - f) / d}%`, r.top = `${100 * (h[1] - p) / u}%`;
    const {
      rotation: g
    } = e;
    return e.hasOwnCanvas || g === 0 ? (r.width = `${100 * o / d}%`, r.height = `${100 * l / u}%`) : this.setRotation(g, n), n;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: s,
      pageHeight: i
    } = this.parent.viewport.rawDims, {
      width: n,
      height: r
    } = yi(this.data.rect);
    let o, l;
    t % 180 === 0 ? (o = 100 * n / s, l = 100 * r / i) : (o = 100 * r / s, l = 100 * n / i), e.style.width = `${o}%`, e.style.height = `${l}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, s, i) => {
      const n = i.detail[e], r = n[0], o = n.slice(1);
      i.target.style[s] = Ru[`${r}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: Ru[`${r}_rgb`](o)
      });
    };
    return nt(this, "_commonActions", {
      display: (e) => {
        const {
          display: s
        } = e.detail, i = s % 2 === 1;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: i,
          noPrint: s === 1 || s === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: s
        } = e.detail;
        this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: s,
          noView: s
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const s = e.detail.rotation;
        this.setRotation(s), this.annotationStorage.setValue(this.data.id, {
          rotation: s
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const s = this._commonActions;
    for (const i of Object.keys(e.detail)) {
      const n = t[i] || s[i];
      n == null || n(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const s = this._commonActions;
    for (const [i, n] of Object.entries(e)) {
      const r = s[i];
      if (r) {
        const o = {
          detail: {
            [i]: n
          },
          target: t
        };
        r(o), delete e[i];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, s, i, n] = this.data.rect.map((A) => Math.fround(A));
    if (t.length === 8) {
      const [A, _, y, w] = t.subarray(2, 6);
      if (i === A && n === _ && e === y && s === w)
        return;
    }
    const {
      style: r
    } = this.container;
    let o;
    if (a(this, ca)) {
      const {
        borderColor: A,
        borderWidth: _
      } = r;
      r.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${A}" stroke-width="${_}">`], this.container.classList.add("hasBorder");
    }
    const l = i - e, h = n - s, {
      svgFactory: d
    } = this, u = d.createElement("svg");
    u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0);
    const f = d.createElement("defs");
    u.append(f);
    const p = d.createElement("clipPath"), g = `clippath_${this.data.id}`;
    p.setAttribute("id", g), p.setAttribute("clipPathUnits", "objectBoundingBox"), f.append(p);
    for (let A = 2, _ = t.length; A < _; A += 8) {
      const y = t[A], w = t[A + 1], E = t[A + 2], S = t[A + 3], T = d.createElement("rect"), x = (E - e) / l, C = (n - w) / h, P = (y - E) / l, R = (w - S) / h;
      T.setAttribute("x", x), T.setAttribute("y", C), T.setAttribute("width", P), T.setAttribute("height", R), p.append(T), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${x}" y="${C}" width="${P}" height="${R}"/>`);
    }
    a(this, ca) && (o.push("</g></svg>')"), r.backgroundImage = o.join("")), this.container.append(u), this.container.style.clipPath = `url(#${g})`;
  }
  _createPopup() {
    const {
      data: t
    } = this, e = m(this, ha, new Jh({
      data: {
        color: t.color,
        titleObj: t.titleObj,
        modificationDate: t.modificationDate,
        contentsObj: t.contentsObj,
        richText: t.richText,
        parentRect: t.rect,
        borderStyle: 0,
        id: `popup_${t.id}`,
        rotation: t.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(e.render());
  }
  render() {
    xt("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const s = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[t];
      if (i)
        for (const {
          page: n,
          id: r,
          exportValues: o
        } of i) {
          if (n === -1 || r === e)
            continue;
          const l = typeof o == "string" ? o : null, h = document.querySelector(`[data-element-id="${r}"]`);
          if (h && !pr.has(h)) {
            tt(`_getElementsByName - element not allowed: ${r}`);
            continue;
          }
          s.push({
            id: r,
            exportValue: l,
            domElement: h
          });
        }
      return s;
    }
    for (const i of document.getElementsByName(t)) {
      const {
        exportValue: n
      } = i, r = i.getAttribute("data-element-id");
      r !== e && pr.has(i) && s.push({
        id: r,
        exportValue: n,
        domElement: i
      });
    }
    return s;
  }
  show() {
    var t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var s;
      (s = this.linkService.eventBus) == null || s.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e
      });
    });
  }
};
$n = new WeakMap(), ca = new WeakMap(), ha = new WeakMap(), Ko = new WeakSet(), Qh = function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: s,
      rotation: i
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: n,
          pageHeight: r,
          pageX: o,
          pageY: l
        }
      }
    }
  } = this;
  s == null || s.splice(0, 4, ...t);
  const {
    width: h,
    height: d
  } = yi(t);
  e.left = `${100 * (t[0] - o) / n}%`, e.top = `${100 * (r - t[3] + l) / r}%`, i === 0 ? (e.width = `${100 * h / n}%`, e.height = `${100 * d / r}%`) : this.setRotation(i);
};
let Ht = tu;
var ze, cn, Jf, Zf;
class Qf extends Ht {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(s != null && s.ignoreBorder),
      createQuadrilaterals: !0
    });
    v(this, ze);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let n = !1;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), n = !0) : e.action ? (this._bindNamedAction(i, e.action), n = !0) : e.attachment ? (b(this, ze, Jf).call(this, i, e.attachment, e.attachmentDest), n = !0) : e.setOCGState ? (b(this, ze, Zf).call(this, i, e.setOCGState), n = !0) : e.dest ? (this._bindLink(i, e.dest), n = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), n = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), n = !0) : this.isTooltipOnly && !n && (this._bindLink(i, ""), n = !0)), this.container.classList.add("linkAnnotation"), n && this.container.append(i), this.container;
  }
  _bindLink(e, s) {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && b(this, ze, cn).call(this);
  }
  _bindNamedAction(e, s) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), b(this, ze, cn).call(this);
  }
  _bindJSAction(e, s) {
    e.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const n of Object.keys(s.actions)) {
      const r = i.get(n);
      r && (e[r] = () => {
        var o;
        return (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: s.id,
            name: n
          }
        }), !1;
      });
    }
    e.onclick || (e.onclick = () => !1), b(this, ze, cn).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), b(this, ze, cn).call(this), !this._fieldObjects) {
      tt('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var u;
      i == null || i();
      const {
        fields: n,
        refs: r,
        include: o
      } = s, l = [];
      if (n.length !== 0 || r.length !== 0) {
        const f = new Set(r);
        for (const p of n) {
          const g = this._fieldObjects[p] || [];
          for (const {
            id: A
          } of g)
            f.add(A);
        }
        for (const p of Object.values(this._fieldObjects))
          for (const g of p)
            f.has(g.id) === o && l.push(g);
      } else
        for (const f of Object.values(this._fieldObjects))
          l.push(...f);
      const h = this.annotationStorage, d = [];
      for (const f of l) {
        const {
          id: p
        } = f;
        switch (d.push(p), f.type) {
          case "text": {
            const A = f.defaultValue || "";
            h.setValue(p, {
              value: A
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const A = f.defaultValue === f.exportValues;
            h.setValue(p, {
              value: A
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const A = f.defaultValue || "";
            h.setValue(p, {
              value: A
            });
            break;
          }
          default:
            continue;
        }
        const g = document.querySelector(`[data-element-id="${p}"]`);
        if (g) {
          if (!pr.has(g)) {
            tt(`_bindResetFormAction - element not allowed: ${p}`);
            continue;
          }
        } else continue;
        g.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((u = this.linkService.eventBus) == null || u.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: d,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
ze = new WeakSet(), cn = function() {
  this.container.setAttribute("data-internal-link", "");
}, Jf = function(e, s, i = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description && (e.title = s.description), e.onclick = () => {
    var n;
    return (n = this.downloadManager) == null || n.openOrDownloadData(s.content, s.filename, i), !1;
  }, b(this, ze, cn).call(this);
}, Zf = function(e, s) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), b(this, ze, cn).call(this);
};
class Yb extends Ht {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class vr extends Ht {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return ve.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, s, i, n) {
    s.includes("mouse") ? t.addEventListener(s, (r) => {
      var o;
      (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: n(r),
          shift: r.shiftKey,
          modifier: this._getKeyModifier(r)
        }
      });
    }) : t.addEventListener(s, (r) => {
      var o;
      if (s === "blur") {
        if (!e.focused || !r.relatedTarget)
          return;
        e.focused = !1;
      } else if (s === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      n && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: n(r)
        }
      }));
    });
  }
  _setEventListeners(t, e, s, i) {
    var n, r, o;
    for (const [l, h] of s)
      (h === "Action" || (n = this.data.actions) != null && n[h]) && ((h === "Focus" || h === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, l, h, i), h === "Focus" && !((r = this.data.actions) != null && r.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : h === "Blur" && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : B.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || qb, n = t.style;
    let r;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), d = Math.round(h / (ih * i)) || 1, u = h / d;
      r = Math.min(i, l(u / ih));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      r = Math.min(i, l(h / ih));
    }
    n.fontSize = `calc(${r}px * var(--scale-factor))`, n.color = B.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (n.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class Kb extends vr {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, s, i) {
    const n = this.annotationStorage;
    for (const r of this._getElementsByName(t.name, t.id))
      r.domElement && (r.domElement[e] = s), n.setValue(r.id, {
        [i]: s
      });
  }
  render() {
    var i, n;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const r = t.getValue(e, {
        value: this.data.fieldValue
      });
      let o = r.value || "";
      const l = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      l && o.length > l && (o = o.slice(0, l));
      let h = r.formattedValue || ((i = this.data.textContent) == null ? void 0 : i.join(`
`)) || null;
      h && this.data.comb && (h = h.replaceAll(/\s+/g, ""));
      const d = {
        userValue: o,
        formattedValue: h,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = h ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = "text", s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), pr.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = kl, this._setRequired(s, this.data.required), l && (s.maxLength = l), s.addEventListener("input", (f) => {
        t.setValue(e, {
          value: f.target.value
        }), this.setPropertyOnSiblings(s, "value", f.target.value, "value"), d.formattedValue = null;
      }), s.addEventListener("resetform", (f) => {
        const p = this.data.defaultFieldValue ?? "";
        s.value = d.userValue = p, d.formattedValue = null;
      });
      let u = (f) => {
        const {
          formattedValue: p
        } = d;
        p != null && (f.target.value = p), f.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (p) => {
          var A;
          if (d.focused)
            return;
          const {
            target: g
          } = p;
          d.userValue && (g.value = d.userValue), d.lastCommittedValue = g.value, d.commitKey = 1, (A = this.data.actions) != null && A.Focus || (d.focused = !0);
        }), s.addEventListener("updatefromsandbox", (p) => {
          this.showElementAndHideCanvas(p.target);
          const g = {
            value(A) {
              d.userValue = A.detail.value ?? "", t.setValue(e, {
                value: d.userValue.toString()
              }), A.target.value = d.userValue;
            },
            formattedValue(A) {
              const {
                formattedValue: _
              } = A.detail;
              d.formattedValue = _, _ != null && A.target !== document.activeElement && (A.target.value = _), t.setValue(e, {
                formattedValue: _
              });
            },
            selRange(A) {
              A.target.setSelectionRange(...A.detail.selRange);
            },
            charLimit: (A) => {
              var E;
              const {
                charLimit: _
              } = A.detail, {
                target: y
              } = A;
              if (_ === 0) {
                y.removeAttribute("maxLength");
                return;
              }
              y.setAttribute("maxLength", _);
              let w = d.userValue;
              !w || w.length <= _ || (w = w.slice(0, _), y.value = d.userValue = w, t.setValue(e, {
                value: w
              }), (E = this.linkService.eventBus) == null || E.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: w,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: y.selectionStart,
                  selEnd: y.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(g, p);
        }), s.addEventListener("keydown", (p) => {
          var _;
          d.commitKey = 1;
          let g = -1;
          if (p.key === "Escape" ? g = 0 : p.key === "Enter" && !this.data.multiLine ? g = 2 : p.key === "Tab" && (d.commitKey = 3), g === -1)
            return;
          const {
            value: A
          } = p.target;
          d.lastCommittedValue !== A && (d.lastCommittedValue = A, d.userValue = A, (_ = this.linkService.eventBus) == null || _.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: A,
              willCommit: !0,
              commitKey: g,
              selStart: p.target.selectionStart,
              selEnd: p.target.selectionEnd
            }
          }));
        });
        const f = u;
        u = null, s.addEventListener("blur", (p) => {
          var A, _;
          if (!d.focused || !p.relatedTarget)
            return;
          (A = this.data.actions) != null && A.Blur || (d.focused = !1);
          const {
            value: g
          } = p.target;
          d.userValue = g, d.lastCommittedValue !== g && ((_ = this.linkService.eventBus) == null || _.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: g,
              willCommit: !0,
              commitKey: d.commitKey,
              selStart: p.target.selectionStart,
              selEnd: p.target.selectionEnd
            }
          })), f(p);
        }), (n = this.data.actions) != null && n.Keystroke && s.addEventListener("beforeinput", (p) => {
          var T;
          d.lastCommittedValue = null;
          const {
            data: g,
            target: A
          } = p, {
            value: _,
            selectionStart: y,
            selectionEnd: w
          } = A;
          let E = y, S = w;
          switch (p.inputType) {
            case "deleteWordBackward": {
              const x = _.substring(0, y).match(/\w*[^\w]*$/);
              x && (E -= x[0].length);
              break;
            }
            case "deleteWordForward": {
              const x = _.substring(y).match(/^[^\w]*\w*/);
              x && (S += x[0].length);
              break;
            }
            case "deleteContentBackward":
              y === w && (E -= 1);
              break;
            case "deleteContentForward":
              y === w && (S += 1);
              break;
          }
          p.preventDefault(), (T = this.linkService.eventBus) == null || T.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: _,
              change: g || "",
              willCommit: !1,
              selStart: E,
              selEnd: S
            }
          });
        }), this._setEventListeners(s, d, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (p) => p.target.value);
      }
      if (u && s.addEventListener("blur", u), this.data.comb) {
        const p = (this.data.rect[2] - this.data.rect[0]) / l;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${p}px * var(--scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class Qb extends vr {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class Jb extends vr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof i == "string" && (i = i !== "Off", t.setValue(s, {
      value: i
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const n = document.createElement("input");
    return pr.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "checkbox", n.name = e.fieldName, i && n.setAttribute("checked", !0), n.setAttribute("exportValue", e.exportValue), n.tabIndex = kl, n.addEventListener("change", (r) => {
      const {
        name: o,
        checked: l
      } = r.target;
      for (const h of this._getElementsByName(o, s)) {
        const d = l && h.exportValue === e.exportValue;
        h.domElement && (h.domElement.checked = d), t.setValue(h.id, {
          value: d
        });
      }
      t.setValue(s, {
        value: l
      });
    }), n.addEventListener("resetform", (r) => {
      const o = e.defaultFieldValue || "Off";
      r.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (n.addEventListener("updatefromsandbox", (r) => {
      const o = {
        value(l) {
          l.target.checked = l.detail.value !== "Off", t.setValue(s, {
            value: l.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(o, r);
    }), this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (r) => r.target.checked)), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class tp extends vr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(s, {
      value: i
    })), i)
      for (const r of this._getElementsByName(e.fieldName, s))
        t.setValue(r.id, {
          value: !1
        });
    const n = document.createElement("input");
    if (pr.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "radio", n.name = e.fieldName, i && n.setAttribute("checked", !0), n.tabIndex = kl, n.addEventListener("change", (r) => {
      const {
        name: o,
        checked: l
      } = r.target;
      for (const h of this._getElementsByName(o, s))
        t.setValue(h.id, {
          value: !1
        });
      t.setValue(s, {
        value: l
      });
    }), n.addEventListener("resetform", (r) => {
      const o = e.defaultFieldValue;
      r.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const r = e.buttonValue;
      n.addEventListener("updatefromsandbox", (o) => {
        const l = {
          value: (h) => {
            const d = r === h.detail.value;
            for (const u of this._getElementsByName(h.target.name)) {
              const f = d && u.id === s;
              u.domElement && (u.domElement.checked = f), t.setValue(u.id, {
                value: f
              });
            }
          }
        };
        this._dispatchEventFromSandbox(l, o);
      }), this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked);
    }
    return this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class Zb extends Qf {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (s) => {
      this._dispatchEventFromSandbox({}, s);
    })), t;
  }
}
class tA extends vr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, s = t.getValue(e, {
      value: this.data.fieldValue
    }), i = document.createElement("select");
    pr.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = kl;
    let n = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (d) => {
      const u = this.data.defaultFieldValue;
      for (const f of i.options)
        f.selected = f.value === u;
    });
    for (const d of this.data.options) {
      const u = document.createElement("option");
      u.textContent = d.displayValue, u.value = d.exportValue, s.value.includes(d.exportValue) && (u.setAttribute("selected", !0), n = !1), i.append(u);
    }
    let r = null;
    if (n) {
      const d = document.createElement("option");
      d.value = " ", d.setAttribute("hidden", !0), d.setAttribute("selected", !0), i.prepend(d), r = () => {
        d.remove(), i.removeEventListener("input", r), r = null;
      }, i.addEventListener("input", r);
    }
    const o = (d) => {
      const u = d ? "value" : "textContent", {
        options: f,
        multiple: p
      } = i;
      return p ? Array.prototype.filter.call(f, (g) => g.selected).map((g) => g[u]) : f.selectedIndex === -1 ? null : f[f.selectedIndex][u];
    };
    let l = o(!1);
    const h = (d) => {
      const u = d.target.options;
      return Array.prototype.map.call(u, (f) => ({
        displayValue: f.textContent,
        exportValue: f.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (d) => {
      const u = {
        value(f) {
          r == null || r();
          const p = f.detail.value, g = new Set(Array.isArray(p) ? p : [p]);
          for (const A of i.options)
            A.selected = g.has(A.value);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        multipleSelection(f) {
          i.multiple = !0;
        },
        remove(f) {
          const p = i.options, g = f.detail.remove;
          p[g].selected = !1, i.remove(g), p.length > 0 && Array.prototype.findIndex.call(p, (_) => _.selected) === -1 && (p[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(f)
          }), l = o(!1);
        },
        clear(f) {
          for (; i.length !== 0; )
            i.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), l = o(!1);
        },
        insert(f) {
          const {
            index: p,
            displayValue: g,
            exportValue: A
          } = f.detail.insert, _ = i.children[p], y = document.createElement("option");
          y.textContent = g, y.value = A, _ ? _.before(y) : i.append(y), t.setValue(e, {
            value: o(!0),
            items: h(f)
          }), l = o(!1);
        },
        items(f) {
          const {
            items: p
          } = f.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const g of p) {
            const {
              displayValue: A,
              exportValue: _
            } = g, y = document.createElement("option");
            y.textContent = A, y.value = _, i.append(y);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(f)
          }), l = o(!1);
        },
        indices(f) {
          const p = new Set(f.detail.indices);
          for (const g of f.target.options)
            g.selected = p.has(g.index);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        editable(f) {
          f.target.disabled = !f.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(u, d);
    }), i.addEventListener("input", (d) => {
      var p;
      const u = o(!0), f = o(!1);
      t.setValue(e, {
        value: u
      }), d.preventDefault(), (p = this.linkService.eventBus) == null || p.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: l,
          change: f,
          changeEx: u,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (d) => d.target.value)) : i.addEventListener("input", function(d) {
      t.setValue(e, {
        value: o(!0)
      });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class Jh extends Ht {
  constructor(t) {
    const {
      data: e,
      elements: s
    } = t;
    super(t, {
      isRenderable: Ht._hasPopupData(e)
    }), this.elements = s, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const t = this.popup = new eA({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    }), e = [];
    for (const s of this.elements)
      s.popup = t, s.container.ariaHasPopup = "dialog", e.push(s.data.id), s.addHighlightArea();
    return this.container.setAttribute("aria-controls", e.map((s) => `${Bd}${s}`).join(",")), this.container;
  }
}
var da, Oc, Nc, ua, Vn, It, ni, fa, Qo, Jo, pa, ri, ls, ai, Zo, oi, tl, Wn, qn, bt, tc, Zh, ep, sp, ip, np, ec, sc, td;
class eA {
  constructor({
    container: t,
    color: e,
    elements: s,
    titleObj: i,
    modificationDate: n,
    contentsObj: r,
    richText: o,
    parent: l,
    rect: h,
    parentRect: d,
    open: u
  }) {
    v(this, bt);
    v(this, da, b(this, bt, ip).bind(this));
    v(this, Oc, b(this, bt, td).bind(this));
    v(this, Nc, b(this, bt, sc).bind(this));
    v(this, ua, b(this, bt, ec).bind(this));
    v(this, Vn, null);
    v(this, It, null);
    v(this, ni, null);
    v(this, fa, null);
    v(this, Qo, null);
    v(this, Jo, null);
    v(this, pa, null);
    v(this, ri, !1);
    v(this, ls, null);
    v(this, ai, null);
    v(this, Zo, null);
    v(this, oi, null);
    v(this, tl, null);
    v(this, Wn, null);
    v(this, qn, !1);
    var f;
    m(this, It, t), m(this, tl, i), m(this, ni, r), m(this, oi, o), m(this, Jo, l), m(this, Vn, e), m(this, Zo, h), m(this, pa, d), m(this, Qo, s), m(this, fa, Gd.toDateObject(n)), this.trigger = s.flatMap((p) => p.getElementsToTriggerPopup());
    for (const p of this.trigger)
      p.addEventListener("click", a(this, ua)), p.addEventListener("mouseenter", a(this, Nc)), p.addEventListener("mouseleave", a(this, Oc)), p.classList.add("popupTriggerArea");
    for (const p of s)
      (f = p.container) == null || f.addEventListener("keydown", a(this, da));
    a(this, It).hidden = !0, u && b(this, bt, ec).call(this);
  }
  render() {
    if (a(this, ls))
      return;
    const t = m(this, ls, document.createElement("div"));
    if (t.className = "popup", a(this, Vn)) {
      const n = t.style.outlineColor = B.makeHexColor(...a(this, Vn));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${n} 30%, white)` : t.style.backgroundColor = B.makeHexColor(...a(this, Vn).map((o) => Math.floor(0.7 * (255 - o) + o)));
    }
    const e = document.createElement("span");
    e.className = "header";
    const s = document.createElement("h1");
    if (e.append(s), {
      dir: s.dir,
      str: s.textContent
    } = a(this, tl), t.append(e), a(this, fa)) {
      const n = document.createElement("span");
      n.classList.add("popupDate"), n.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), n.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: a(this, fa).valueOf()
      })), e.append(n);
    }
    const i = a(this, bt, tc);
    if (i)
      Kf.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const n = this._formatContents(a(this, ni));
      t.append(n);
    }
    a(this, It).append(t);
  }
  _formatContents({
    str: t,
    dir: e
  }) {
    const s = document.createElement("p");
    s.classList.add("popupContent"), s.dir = e;
    const i = t.split(/(?:\r\n?|\n)/);
    for (let n = 0, r = i.length; n < r; ++n) {
      const o = i[n];
      s.append(document.createTextNode(o)), n < r - 1 && s.append(document.createElement("br"));
    }
    return s;
  }
  updateEdited({
    rect: t,
    popupContent: e
  }) {
    var s;
    a(this, Wn) || m(this, Wn, {
      contentsObj: a(this, ni),
      richText: a(this, oi)
    }), t && m(this, ai, null), e && (m(this, oi, b(this, bt, sp).call(this, e)), m(this, ni, null)), (s = a(this, ls)) == null || s.remove(), m(this, ls, null);
  }
  resetEdited() {
    var t;
    a(this, Wn) && ({
      contentsObj: ge(this, ni)._,
      richText: ge(this, oi)._
    } = a(this, Wn), m(this, Wn, null), (t = a(this, ls)) == null || t.remove(), m(this, ls, null), m(this, ai, null));
  }
  forceHide() {
    m(this, qn, this.isVisible), a(this, qn) && (a(this, It).hidden = !0);
  }
  maybeShow() {
    a(this, qn) && (a(this, ls) || b(this, bt, sc).call(this), m(this, qn, !1), a(this, It).hidden = !1);
  }
  get isVisible() {
    return a(this, It).hidden === !1;
  }
}
da = new WeakMap(), Oc = new WeakMap(), Nc = new WeakMap(), ua = new WeakMap(), Vn = new WeakMap(), It = new WeakMap(), ni = new WeakMap(), fa = new WeakMap(), Qo = new WeakMap(), Jo = new WeakMap(), pa = new WeakMap(), ri = new WeakMap(), ls = new WeakMap(), ai = new WeakMap(), Zo = new WeakMap(), oi = new WeakMap(), tl = new WeakMap(), Wn = new WeakMap(), qn = new WeakMap(), bt = new WeakSet(), tc = function() {
  const t = a(this, oi), e = a(this, ni);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && a(this, oi).html || null;
}, Zh = function() {
  var t, e, s;
  return ((s = (e = (t = a(this, bt, tc)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
}, ep = function() {
  var t, e, s;
  return ((s = (e = (t = a(this, bt, tc)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
}, sp = function(t) {
  const e = [], s = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, i = {
    style: {
      color: a(this, bt, ep),
      fontSize: a(this, bt, Zh) ? `calc(${a(this, bt, Zh)}px * var(--scale-factor))` : ""
    }
  };
  for (const n of t.split(`
`))
    e.push({
      name: "span",
      value: n,
      attributes: i
    });
  return s;
}, ip = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && a(this, ri)) && b(this, bt, ec).call(this);
}, np = function() {
  if (a(this, ai) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: s,
        pageX: i,
        pageY: n
      }
    }
  } = a(this, Jo);
  let r = !!a(this, pa), o = r ? a(this, pa) : a(this, Zo);
  for (const g of a(this, Qo))
    if (!o || B.intersect(g.data.rect, o) !== null) {
      o = g.data.rect, r = !0;
      break;
    }
  const l = B.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), d = r ? o[2] - o[0] + 5 : 0, u = l[0] + d, f = l[1];
  m(this, ai, [100 * (u - i) / e, 100 * (f - n) / s]);
  const {
    style: p
  } = a(this, It);
  p.left = `${a(this, ai)[0]}%`, p.top = `${a(this, ai)[1]}%`;
}, ec = function() {
  m(this, ri, !a(this, ri)), a(this, ri) ? (b(this, bt, sc).call(this), a(this, It).addEventListener("click", a(this, ua)), a(this, It).addEventListener("keydown", a(this, da))) : (b(this, bt, td).call(this), a(this, It).removeEventListener("click", a(this, ua)), a(this, It).removeEventListener("keydown", a(this, da)));
}, sc = function() {
  a(this, ls) || this.render(), this.isVisible ? a(this, ri) && a(this, It).classList.add("focused") : (b(this, bt, np).call(this), a(this, It).hidden = !1, a(this, It).style.zIndex = parseInt(a(this, It).style.zIndex) + 1e3);
}, td = function() {
  a(this, It).classList.remove("focused"), !(a(this, ri) || !this.isVisible) && (a(this, It).hidden = !0, a(this, It).style.zIndex = parseInt(a(this, It).style.zIndex) - 1e3);
};
class rp extends Ht {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = J.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const s = document.createElement("span");
        s.textContent = e, t.append(s);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var el;
class sA extends Ht {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    v(this, el, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = yi(e.rect), n = this.svgFactory.create(s, i, !0), r = m(this, el, this.svgFactory.createElement("svg:line"));
    return r.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), r.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), r.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), r.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), r.setAttribute("stroke-width", e.borderStyle.width || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), n.append(r), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, el);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
el = new WeakMap();
var sl;
class iA extends Ht {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    v(this, sl, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = yi(e.rect), n = this.svgFactory.create(s, i, !0), r = e.borderStyle.width, o = m(this, sl, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", r / 2), o.setAttribute("y", r / 2), o.setAttribute("width", s - r), o.setAttribute("height", i - r), o.setAttribute("stroke-width", r || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, sl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
sl = new WeakMap();
var il;
class nA extends Ht {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    v(this, il, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = yi(e.rect), n = this.svgFactory.create(s, i, !0), r = e.borderStyle.width, o = m(this, il, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - r / 2), o.setAttribute("ry", i / 2 - r / 2), o.setAttribute("stroke-width", r || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, il);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
il = new WeakMap();
var nl;
class ap extends Ht {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    v(this, nl, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: s,
        borderStyle: i,
        popupRef: n
      }
    } = this;
    if (!s)
      return this.container;
    const {
      width: r,
      height: o
    } = yi(e), l = this.svgFactory.create(r, o, !0);
    let h = [];
    for (let u = 0, f = s.length; u < f; u += 2) {
      const p = s[u] - e[0], g = e[3] - s[u + 1];
      h.push(`${p},${g}`);
    }
    h = h.join(" ");
    const d = m(this, nl, this.svgFactory.createElement(this.svgElementName));
    return d.setAttribute("points", h), d.setAttribute("stroke-width", i.width || 1), d.setAttribute("stroke", "transparent"), d.setAttribute("fill", "transparent"), l.append(d), this.container.append(l), !n && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, nl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
nl = new WeakMap();
class rA extends ap {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class aA extends Ht {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var rl;
class Kd extends Ht {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    v(this, rl, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? J.HIGHLIGHT : J.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        inkLists: s,
        borderStyle: i,
        popupRef: n
      }
    } = this, {
      width: r,
      height: o
    } = yi(e), l = this.svgFactory.create(r, o, !0);
    for (const h of s) {
      let d = [];
      for (let f = 0, p = h.length; f < p; f += 2) {
        const g = h[f] - e[0], A = e[3] - h[f + 1];
        d.push(`${g},${A}`);
      }
      d = d.join(" ");
      const u = this.svgFactory.createElement(this.svgElementName);
      a(this, rl).push(u), u.setAttribute("points", d), u.setAttribute("stroke-width", i.width || 1), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), l.append(u);
    }
    return !n && this.hasPopupData && this._createPopup(), this.container.append(l), this._editOnDoubleClick(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, rl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
rl = new WeakMap();
class op extends Ht {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = J.HIGHLIGHT;
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), this.container;
  }
}
class oA extends Ht {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class lA extends Ht {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
}
class cA extends Ht {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
}
class lp extends Ht {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = J.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var al, ol, ed;
class hA extends Ht {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    v(this, ol);
    v(this, al, null);
    const {
      file: s
    } = this.data;
    this.filename = s.filename, this.content = s.content, (i = this.linkService.eventBus) == null || i.dispatch("fileattachmentannotation", {
      source: this,
      ...s
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: s
    } = this;
    let i;
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", b(this, ol, ed).bind(this)), m(this, al, i);
    const {
      isMac: n
    } = ve.platform;
    return e.addEventListener("keydown", (r) => {
      r.key === "Enter" && (n ? r.metaKey : r.ctrlKey) && b(this, ol, ed).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return a(this, al);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
al = new WeakMap(), ol = new WeakSet(), ed = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var ll, Xn, Yn, cl, mr, cp, sd, Gu;
let dA = (Gu = class {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: n,
    viewport: r,
    structTreeLayer: o
  }) {
    v(this, mr);
    v(this, ll, null);
    v(this, Xn, null);
    v(this, Yn, /* @__PURE__ */ new Map());
    v(this, cl, null);
    this.div = t, m(this, ll, e), m(this, Xn, s), m(this, cl, o || null), this.page = n, this.viewport = r, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  hasEditableAnnotations() {
    return a(this, Yn).size > 0;
  }
  async render(t) {
    var r;
    const {
      annotations: e
    } = t, s = this.div;
    ur(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), n = {
      data: null,
      layer: s,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new Yd(),
      annotationStorage: t.annotationStorage || new $d(),
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const o of e) {
      if (o.noHTML)
        continue;
      const l = o.annotationType === Gt.POPUP;
      if (l) {
        const u = i.get(o.id);
        if (!u)
          continue;
        n.elements = u;
      } else {
        const {
          width: u,
          height: f
        } = yi(o.rect);
        if (u <= 0 || f <= 0)
          continue;
      }
      n.data = o;
      const h = Xb.create(n);
      if (!h.isRenderable)
        continue;
      if (!l && o.popupRef) {
        const u = i.get(o.popupRef);
        u ? u.push(h) : i.set(o.popupRef, [h]);
      }
      const d = h.render();
      o.hidden && (d.style.visibility = "hidden"), await b(this, mr, cp).call(this, d, o.id), h._isEditable && (a(this, Yn).set(h.data.id, h), (r = this._annotationEditorUIManager) == null || r.renderAnnotationElement(h));
    }
    b(this, mr, sd).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, ur(e, {
      rotation: t.rotation
    }), b(this, mr, sd).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(a(this, Yn).values());
  }
  getEditableAnnotation(t) {
    return a(this, Yn).get(t);
  }
}, ll = new WeakMap(), Xn = new WeakMap(), Yn = new WeakMap(), cl = new WeakMap(), mr = new WeakSet(), cp = async function(t, e) {
  var r, o;
  const s = t.firstChild || t, i = s.id = `${Bd}${e}`, n = await ((r = a(this, cl)) == null ? void 0 : r.getAriaAttributes(i));
  if (n)
    for (const [l, h] of n)
      s.setAttribute(l, h);
  this.div.append(t), (o = a(this, ll)) == null || o.moveElementInDOM(this.div, t, s, !1);
}, sd = function() {
  if (!a(this, Xn))
    return;
  const t = this.div;
  for (const [e, s] of a(this, Xn)) {
    const i = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!i)
      continue;
    s.className = "annotationContent";
    const {
      firstChild: n
    } = i;
    n ? n.nodeName === "CANVAS" ? n.replaceWith(s) : n.classList.contains("annotationContent") ? n.after(s) : n.before(s) : i.append(s);
  }
  a(this, Xn).clear();
}, Gu);
const jl = /\r\n?|\n/g;
var cs, Fe, hl, Kn, De, zt, hp, dp, up, ic, _i, nc, rc, fp, nd, pp;
const Et = class Et extends gt {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    v(this, zt);
    v(this, cs);
    v(this, Fe, "");
    v(this, hl, `${this.id}-editor`);
    v(this, Kn, null);
    v(this, De);
    m(this, cs, e.color || Et._defaultColor || gt._defaultLineColor), m(this, De, e.fontSize || Et._defaultFontSize);
  }
  static get _keyboardManager() {
    const e = Et.prototype, s = (r) => r.isEmpty(), i = fr.TRANSLATE_SMALL, n = fr.TRANSLATE_BIG;
    return nt(this, "_keyboardManager", new Ll([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-i, 0],
      checker: s
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-n, 0],
      checker: s
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [i, 0],
      checker: s
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [n, 0],
      checker: s
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -i],
      checker: s
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -n],
      checker: s
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, i],
      checker: s
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, n],
      checker: s
    }]]));
  }
  static initialize(e, s) {
    gt.initialize(e, s);
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case q.FREETEXT_SIZE:
        Et._defaultFontSize = s;
        break;
      case q.FREETEXT_COLOR:
        Et._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case q.FREETEXT_SIZE:
        b(this, zt, hp).call(this, s);
        break;
      case q.FREETEXT_COLOR:
        b(this, zt, dp).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[q.FREETEXT_SIZE, Et._defaultFontSize], [q.FREETEXT_COLOR, Et._defaultColor || gt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[q.FREETEXT_SIZE, a(this, De)], [q.FREETEXT_COLOR, a(this, cs)]];
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-Et._internalPadding * e, -(Et._internalPadding + a(this, De)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode())
      return;
    this.parent.setEditingState(!1), this.parent.updateToolbar(J.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), m(this, Kn, new AbortController());
    const e = this._uiManager.combinedSignal(a(this, Kn));
    this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: e
    });
  }
  disableEditMode() {
    var e;
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", a(this, hl)), this._isDraggable = !0, (e = a(this, Kn)) == null || e.abort(), m(this, Kn, null), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded() {
    var e;
    this.width || (this.enableEditMode(), this.editorDiv.focus(), (e = this._initialOptions) != null && e.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = a(this, Fe), s = m(this, Fe, b(this, zt, up).call(this).trimEnd());
    if (e === s)
      return;
    const i = (n) => {
      if (m(this, Fe, n), !n) {
        this.remove();
        return;
      }
      b(this, zt, rc).call(this), this._uiManager.rebuild(this), b(this, zt, ic).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(s);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), b(this, zt, ic).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(e) {
    this.enterInEditMode();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    Et._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    this.width && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", a(this, hl)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${a(this, De)}px * var(--scale-factor))`, i.color = a(this, cs), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), Ac(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [n, r] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [d, u] = this.pageDimensions, [f, p] = this.pageTranslation;
        let g, A;
        switch (this.rotation) {
          case 0:
            g = e + (o[0] - f) / d, A = s + this.height - (o[1] - p) / u;
            break;
          case 90:
            g = e + (o[0] - f) / d, A = s - (o[1] - p) / u, [l, h] = [h, -l];
            break;
          case 180:
            g = e - this.width + (o[0] - f) / d, A = s - (o[1] - p) / u, [l, h] = [-l, -h];
            break;
          case 270:
            g = e + (o[0] - f - this.height * u) / d, A = s + (o[1] - p - this.width * d) / u, [l, h] = [-h, l];
            break;
        }
        this.setAt(g * n, A * r, l, h);
      } else
        this.setAt(e * n, s * r, this.width * n, this.height * r);
      b(this, zt, rc).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var g, A, _;
    const s = e.clipboardData || window.clipboardData, {
      types: i
    } = s;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const n = b(g = Et, _i, nd).call(g, s.getData("text") || "").replaceAll(jl, `
`);
    if (!n)
      return;
    const r = window.getSelection();
    if (!r.rangeCount)
      return;
    this.editorDiv.normalize(), r.deleteFromDocument();
    const o = r.getRangeAt(0);
    if (!n.includes(`
`)) {
      o.insertNode(document.createTextNode(n)), this.editorDiv.normalize(), r.collapseToStart();
      return;
    }
    const {
      startContainer: l,
      startOffset: h
    } = o, d = [], u = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const y = l.parentElement;
      if (u.push(l.nodeValue.slice(h).replaceAll(jl, "")), y !== this.editorDiv) {
        let w = d;
        for (const E of this.editorDiv.childNodes) {
          if (E === y) {
            w = u;
            continue;
          }
          w.push(b(A = Et, _i, nc).call(A, E));
        }
      }
      d.push(l.nodeValue.slice(0, h).replaceAll(jl, ""));
    } else if (l === this.editorDiv) {
      let y = d, w = 0;
      for (const E of this.editorDiv.childNodes)
        w++ === h && (y = u), y.push(b(_ = Et, _i, nc).call(_, E));
    }
    m(this, Fe, `${d.join(`
`)}${n}${u.join(`
`)}`), b(this, zt, rc).call(this);
    const f = new Range();
    let p = d.reduce((y, w) => y + w.length, 0);
    for (const {
      firstChild: y
    } of this.editorDiv.childNodes)
      if (y.nodeType === Node.TEXT_NODE) {
        const w = y.nodeValue.length;
        if (p <= w) {
          f.setStart(y, p), f.setEnd(y, p);
          break;
        }
        p -= w;
      }
    r.removeAllRanges(), r.addRange(f);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(e, s, i) {
    var o;
    let n = null;
    if (e instanceof rp) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: h
          },
          rect: d,
          rotation: u,
          id: f,
          popupRef: p
        },
        textContent: g,
        textPosition: A,
        parent: {
          page: {
            pageNumber: _
          }
        }
      } = e;
      if (!g || g.length === 0)
        return null;
      n = e = {
        annotationType: J.FREETEXT,
        color: Array.from(h),
        fontSize: l,
        value: g.join(`
`),
        position: A,
        pageIndex: _ - 1,
        rect: d.slice(0),
        rotation: u,
        id: f,
        deleted: !1,
        popupRef: p
      };
    }
    const r = await super.deserialize(e, s, i);
    return m(r, De, e.fontSize), m(r, cs, B.makeHexColor(...e.color)), m(r, Fe, b(o = Et, _i, nd).call(o, e.value)), r.annotationElementId = e.id || null, r._initialData = n, r;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = Et._internalPadding * this.parentScale, i = this.getRect(s, s), n = gt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : a(this, cs)), r = {
      annotationType: J.FREETEXT,
      color: n,
      fontSize: a(this, De),
      value: b(this, zt, fp).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? r : this.annotationElementId && !b(this, zt, pp).call(this, r) ? null : (r.id = this.annotationElementId, r);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (this.deleted)
      return s;
    const {
      style: i
    } = s;
    i.fontSize = `calc(${a(this, De)}px * var(--scale-factor))`, i.color = a(this, cs), s.replaceChildren();
    for (const r of a(this, Fe).split(`
`)) {
      const o = document.createElement("div");
      o.append(r ? document.createTextNode(r) : document.createElement("br")), s.append(o);
    }
    const n = Et._internalPadding * this.parentScale;
    return e.updateEdited({
      rect: this.getRect(n, n),
      popupContent: a(this, Fe)
    }), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
cs = new WeakMap(), Fe = new WeakMap(), hl = new WeakMap(), Kn = new WeakMap(), De = new WeakMap(), zt = new WeakSet(), hp = function(e) {
  const s = (n) => {
    this.editorDiv.style.fontSize = `calc(${n}px * var(--scale-factor))`, this.translate(0, -(n - a(this, De)) * this.parentScale), m(this, De, n), b(this, zt, ic).call(this);
  }, i = a(this, De);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: q.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, dp = function(e) {
  const s = (n) => {
    m(this, cs, this.editorDiv.style.color = n);
  }, i = a(this, cs);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: q.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, up = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const n of this.editorDiv.childNodes)
    (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && n.nodeName === "BR" || (e.push(b(i = Et, _i, nc).call(i, n)), s = n);
  return e.join(`
`);
}, ic = function() {
  const [e, s] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM)
    i = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: n,
      div: r
    } = this, o = r.style.display, l = r.classList.contains("hidden");
    r.classList.remove("hidden"), r.style.display = "hidden", n.div.append(this.div), i = r.getBoundingClientRect(), r.remove(), r.style.display = o, r.classList.toggle("hidden", l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / e, this.height = i.height / s) : (this.width = i.height / e, this.height = i.width / s), this.fixAndSetPosition();
}, _i = new WeakSet(), nc = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(jl, "");
}, rc = function() {
  if (this.editorDiv.replaceChildren(), !!a(this, Fe))
    for (const e of a(this, Fe).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, fp = function() {
  return a(this, Fe).replaceAll(" ", " ");
}, nd = function(e) {
  return e.replaceAll(" ", " ");
}, pp = function(e) {
  const {
    value: s,
    fontSize: i,
    color: n,
    pageIndex: r
  } = this._initialData;
  return this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, l) => o !== n[l]) || e.pageIndex !== r;
}, v(Et, _i), W(Et, "_freeTextDefaultContent", ""), W(Et, "_internalPadding", 0), W(Et, "_defaultColor", null), W(Et, "_defaultFontSize", 10), W(Et, "_type", "freetext"), W(Et, "_editorType", J.FREETEXT);
let id = Et;
class gp {
  toSVGPath() {
    xt("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    xt("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    xt("Abstract method `serialize` must be implemented.");
  }
  get classNamesForDrawing() {
    xt("Abstract getter `classNamesForDrawing` must be implemented.");
  }
  get classNamesForOutlining() {
    xt("Abstract getter `classNamesForOutlining` must be implemented.");
  }
  get mustRemoveSelfIntersections() {
    return !1;
  }
}
var Oe, hs, ga, ma, Fs, et, Qn, Jn, dl, ul, ba, Aa, Wi, fl, Hc, Bc, qt, Ka, mp, bp, Ap, yp, vp, _p;
const qs = class qs {
  constructor({
    x: t,
    y: e
  }, s, i, n, r, o = 0) {
    v(this, qt);
    v(this, Oe);
    v(this, hs, []);
    v(this, ga);
    v(this, ma);
    v(this, Fs, []);
    v(this, et, new Float64Array(18));
    v(this, Qn);
    v(this, Jn);
    v(this, dl);
    v(this, ul);
    v(this, ba);
    v(this, Aa);
    v(this, Wi, []);
    m(this, Oe, s), m(this, Aa, n * i), m(this, ma, r), a(this, et).set([NaN, NaN, NaN, NaN, t, e], 6), m(this, ga, o), m(this, ul, a(qs, fl) * i), m(this, dl, a(qs, Bc) * i), m(this, ba, i), a(this, Wi).push(t, e);
  }
  isEmpty() {
    return isNaN(a(this, et)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var R;
    m(this, Qn, t), m(this, Jn, e);
    const [s, i, n, r] = a(this, Oe);
    let [o, l, h, d] = a(this, et).subarray(8, 12);
    const u = t - h, f = e - d, p = Math.hypot(u, f);
    if (p < a(this, dl))
      return !1;
    const g = p - a(this, ul), A = g / p, _ = A * u, y = A * f;
    let w = o, E = l;
    o = h, l = d, h += _, d += y, (R = a(this, Wi)) == null || R.push(t, e);
    const S = -y / g, T = _ / g, x = S * a(this, Aa), C = T * a(this, Aa);
    return a(this, et).set(a(this, et).subarray(2, 8), 0), a(this, et).set([h + x, d + C], 4), a(this, et).set(a(this, et).subarray(14, 18), 12), a(this, et).set([h - x, d - C], 16), isNaN(a(this, et)[6]) ? (a(this, Fs).length === 0 && (a(this, et).set([o + x, l + C], 2), a(this, Fs).push(NaN, NaN, NaN, NaN, (o + x - s) / n, (l + C - i) / r), a(this, et).set([o - x, l - C], 14), a(this, hs).push(NaN, NaN, NaN, NaN, (o - x - s) / n, (l - C - i) / r)), a(this, et).set([w, E, o, l, h, d], 6), !this.isEmpty()) : (a(this, et).set([w, E, o, l, h, d], 6), Math.abs(Math.atan2(E - l, w - o) - Math.atan2(y, _)) < Math.PI / 2 ? ([o, l, h, d] = a(this, et).subarray(2, 6), a(this, Fs).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / n, ((l + d) / 2 - i) / r), [o, l, w, E] = a(this, et).subarray(14, 18), a(this, hs).push(NaN, NaN, NaN, NaN, ((w + o) / 2 - s) / n, ((E + l) / 2 - i) / r), !0) : ([w, E, o, l, h, d] = a(this, et).subarray(0, 6), a(this, Fs).push(((w + 5 * o) / 6 - s) / n, ((E + 5 * l) / 6 - i) / r, ((5 * o + h) / 6 - s) / n, ((5 * l + d) / 6 - i) / r, ((o + h) / 2 - s) / n, ((l + d) / 2 - i) / r), [h, d, o, l, w, E] = a(this, et).subarray(12, 18), a(this, hs).push(((w + 5 * o) / 6 - s) / n, ((E + 5 * l) / 6 - i) / r, ((5 * o + h) / 6 - s) / n, ((5 * l + d) / 6 - i) / r, ((o + h) / 2 - s) / n, ((l + d) / 2 - i) / r), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = a(this, Fs), e = a(this, hs);
    if (isNaN(a(this, et)[6]) && !this.isEmpty())
      return b(this, qt, mp).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6)
      isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    b(this, qt, Ap).call(this, s);
    for (let i = e.length - 6; i >= 6; i -= 6)
      isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    return b(this, qt, bp).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, i, n, r) {
    return new wp(t, e, s, i, n, r);
  }
  getOutlines() {
    var u;
    const t = a(this, Fs), e = a(this, hs), s = a(this, et), [i, n, r, o] = a(this, Oe), l = new Float64Array((((u = a(this, Wi)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let f = 0, p = l.length - 2; f < p; f += 2)
      l[f] = (a(this, Wi)[f] - i) / r, l[f + 1] = (a(this, Wi)[f + 1] - n) / o;
    if (l[l.length - 2] = (a(this, Qn) - i) / r, l[l.length - 1] = (a(this, Jn) - n) / o, isNaN(s[6]) && !this.isEmpty())
      return b(this, qt, yp).call(this, l);
    const h = new Float64Array(a(this, Fs).length + 24 + a(this, hs).length);
    let d = t.length;
    for (let f = 0; f < d; f += 2) {
      if (isNaN(t[f])) {
        h[f] = h[f + 1] = NaN;
        continue;
      }
      h[f] = t[f], h[f + 1] = t[f + 1];
    }
    d = b(this, qt, _p).call(this, h, d);
    for (let f = e.length - 6; f >= 6; f -= 6)
      for (let p = 0; p < 6; p += 2) {
        if (isNaN(e[f + p])) {
          h[d] = h[d + 1] = NaN, d += 2;
          continue;
        }
        h[d] = e[f + p], h[d + 1] = e[f + p + 1], d += 2;
      }
    return b(this, qt, vp).call(this, h, d), this.newFreeDrawOutline(h, l, a(this, Oe), a(this, ba), a(this, ga), a(this, ma));
  }
};
Oe = new WeakMap(), hs = new WeakMap(), ga = new WeakMap(), ma = new WeakMap(), Fs = new WeakMap(), et = new WeakMap(), Qn = new WeakMap(), Jn = new WeakMap(), dl = new WeakMap(), ul = new WeakMap(), ba = new WeakMap(), Aa = new WeakMap(), Wi = new WeakMap(), fl = new WeakMap(), Hc = new WeakMap(), Bc = new WeakMap(), qt = new WeakSet(), Ka = function() {
  const t = a(this, et).subarray(4, 6), e = a(this, et).subarray(16, 18), [s, i, n, r] = a(this, Oe);
  return [(a(this, Qn) + (t[0] - e[0]) / 2 - s) / n, (a(this, Jn) + (t[1] - e[1]) / 2 - i) / r, (a(this, Qn) + (e[0] - t[0]) / 2 - s) / n, (a(this, Jn) + (e[1] - t[1]) / 2 - i) / r];
}, mp = function() {
  const [t, e, s, i] = a(this, Oe), [n, r, o, l] = b(this, qt, Ka).call(this);
  return `M${(a(this, et)[2] - t) / s} ${(a(this, et)[3] - e) / i} L${(a(this, et)[4] - t) / s} ${(a(this, et)[5] - e) / i} L${n} ${r} L${o} ${l} L${(a(this, et)[16] - t) / s} ${(a(this, et)[17] - e) / i} L${(a(this, et)[14] - t) / s} ${(a(this, et)[15] - e) / i} Z`;
}, bp = function(t) {
  const e = a(this, hs);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Ap = function(t) {
  const [e, s, i, n] = a(this, Oe), r = a(this, et).subarray(4, 6), o = a(this, et).subarray(16, 18), [l, h, d, u] = b(this, qt, Ka).call(this);
  t.push(`L${(r[0] - e) / i} ${(r[1] - s) / n} L${l} ${h} L${d} ${u} L${(o[0] - e) / i} ${(o[1] - s) / n}`);
}, yp = function(t) {
  const e = a(this, et), [s, i, n, r] = a(this, Oe), [o, l, h, d] = b(this, qt, Ka).call(this), u = new Float64Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - s) / n, (e[3] - i) / r, NaN, NaN, NaN, NaN, (e[4] - s) / n, (e[5] - i) / r, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, d, NaN, NaN, NaN, NaN, (e[16] - s) / n, (e[17] - i) / r, NaN, NaN, NaN, NaN, (e[14] - s) / n, (e[15] - i) / r], 0), this.newFreeDrawOutline(u, t, a(this, Oe), a(this, ba), a(this, ga), a(this, ma));
}, vp = function(t, e) {
  const s = a(this, hs);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, _p = function(t, e) {
  const s = a(this, et).subarray(4, 6), i = a(this, et).subarray(16, 18), [n, r, o, l] = a(this, Oe), [h, d, u, f] = b(this, qt, Ka).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - n) / o, (s[1] - r) / l, NaN, NaN, NaN, NaN, h, d, NaN, NaN, NaN, NaN, u, f, NaN, NaN, NaN, NaN, (i[0] - n) / o, (i[1] - r) / l], e), e += 24;
}, v(qs, fl, 8), v(qs, Hc, 2), v(qs, Bc, a(qs, fl) + a(qs, Hc));
let vc = qs;
var ya, Zn, li, pl, Ne, gl, Nt, Re, Qa, Ja, Ep;
class wp extends gp {
  constructor(e, s, i, n, r, o) {
    super();
    v(this, Re);
    v(this, ya);
    v(this, Zn, null);
    v(this, li);
    v(this, pl);
    v(this, Ne);
    v(this, gl);
    v(this, Nt);
    m(this, Nt, e), m(this, Ne, s), m(this, ya, i), m(this, gl, n), m(this, li, r), m(this, pl, o), b(this, Re, Ep).call(this, o);
    const {
      x: l,
      y: h,
      width: d,
      height: u
    } = a(this, Zn);
    for (let f = 0, p = e.length; f < p; f += 2)
      e[f] = (e[f] - l) / d, e[f + 1] = (e[f + 1] - h) / u;
    for (let f = 0, p = s.length; f < p; f += 2)
      s[f] = (s[f] - l) / d, s[f + 1] = (s[f + 1] - h) / u;
  }
  toSVGPath() {
    const e = [`M${a(this, Nt)[4]} ${a(this, Nt)[5]}`];
    for (let s = 6, i = a(this, Nt).length; s < i; s += 6) {
      if (isNaN(a(this, Nt)[s])) {
        e.push(`L${a(this, Nt)[s + 4]} ${a(this, Nt)[s + 5]}`);
        continue;
      }
      e.push(`C${a(this, Nt)[s]} ${a(this, Nt)[s + 1]} ${a(this, Nt)[s + 2]} ${a(this, Nt)[s + 3]} ${a(this, Nt)[s + 4]} ${a(this, Nt)[s + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, s, i, n], r) {
    const o = i - e, l = n - s;
    let h, d;
    switch (r) {
      case 0:
        h = b(this, Re, Qa).call(this, a(this, Nt), e, n, o, -l), d = b(this, Re, Qa).call(this, a(this, Ne), e, n, o, -l);
        break;
      case 90:
        h = b(this, Re, Ja).call(this, a(this, Nt), e, s, o, l), d = b(this, Re, Ja).call(this, a(this, Ne), e, s, o, l);
        break;
      case 180:
        h = b(this, Re, Qa).call(this, a(this, Nt), i, s, -o, l), d = b(this, Re, Qa).call(this, a(this, Ne), i, s, -o, l);
        break;
      case 270:
        h = b(this, Re, Ja).call(this, a(this, Nt), i, n, -o, -l), d = b(this, Re, Ja).call(this, a(this, Ne), i, n, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(d)]
    };
  }
  get box() {
    return a(this, Zn);
  }
  newOutliner(e, s, i, n, r, o = 0) {
    return new vc(e, s, i, n, r, o);
  }
  getNewOutline(e, s) {
    const {
      x: i,
      y: n,
      width: r,
      height: o
    } = a(this, Zn), [l, h, d, u] = a(this, ya), f = r * d, p = o * u, g = i * d + l, A = n * u + h, _ = this.newOutliner({
      x: a(this, Ne)[0] * f + g,
      y: a(this, Ne)[1] * p + A
    }, a(this, ya), a(this, gl), e, a(this, pl), s ?? a(this, li));
    for (let y = 2; y < a(this, Ne).length; y += 2)
      _.add({
        x: a(this, Ne)[y] * f + g,
        y: a(this, Ne)[y + 1] * p + A
      });
    return _.getOutlines();
  }
  get mustRemoveSelfIntersections() {
    return !0;
  }
}
ya = new WeakMap(), Zn = new WeakMap(), li = new WeakMap(), pl = new WeakMap(), Ne = new WeakMap(), gl = new WeakMap(), Nt = new WeakMap(), Re = new WeakSet(), Qa = function(e, s, i, n, r) {
  const o = new Float64Array(e.length);
  for (let l = 0, h = e.length; l < h; l += 2)
    o[l] = s + e[l] * n, o[l + 1] = i + e[l + 1] * r;
  return o;
}, Ja = function(e, s, i, n, r) {
  const o = new Float64Array(e.length);
  for (let l = 0, h = e.length; l < h; l += 2)
    o[l] = s + e[l + 1] * n, o[l + 1] = i + e[l] * r;
  return o;
}, Ep = function(e) {
  const s = a(this, Nt);
  let i = s[4], n = s[5], r = i, o = n, l = i, h = n, d = i, u = n;
  const f = e ? Math.max : Math.min;
  for (let y = 6, w = s.length; y < w; y += 6) {
    if (isNaN(s[y]))
      r = Math.min(r, s[y + 4]), o = Math.min(o, s[y + 5]), l = Math.max(l, s[y + 4]), h = Math.max(h, s[y + 5]), u < s[y + 5] ? (d = s[y + 4], u = s[y + 5]) : u === s[y + 5] && (d = f(d, s[y + 4]));
    else {
      const E = B.bezierBoundingBox(i, n, ...s.slice(y, y + 6));
      r = Math.min(r, E[0]), o = Math.min(o, E[1]), l = Math.max(l, E[2]), h = Math.max(h, E[3]), u < E[3] ? (d = E[2], u = E[3]) : u === E[3] && (d = f(d, E[2]));
    }
    i = s[y + 4], n = s[y + 5];
  }
  const p = r - a(this, li), g = o - a(this, li), A = l - r + 2 * a(this, li), _ = h - o + 2 * a(this, li);
  m(this, Zn, {
    x: p,
    y: g,
    width: A,
    height: _,
    lastPoint: [d, u]
  });
};
var ml, qi, ds, we, Sp, ac, xp, Tp, rd;
class Lu {
  constructor(t, e = 0, s = 0, i = !0) {
    v(this, we);
    v(this, ml);
    v(this, qi, []);
    v(this, ds, []);
    let n = 1 / 0, r = -1 / 0, o = 1 / 0, l = -1 / 0;
    const h = 10 ** -4;
    for (const {
      x: _,
      y,
      width: w,
      height: E
    } of t) {
      const S = Math.floor((_ - e) / h) * h, T = Math.ceil((_ + w + e) / h) * h, x = Math.floor((y - e) / h) * h, C = Math.ceil((y + E + e) / h) * h, P = [S, x, C, !0], R = [T, x, C, !1];
      a(this, qi).push(P, R), n = Math.min(n, S), r = Math.max(r, T), o = Math.min(o, x), l = Math.max(l, C);
    }
    const d = r - n + 2 * s, u = l - o + 2 * s, f = n - s, p = o - s, g = a(this, qi).at(i ? -1 : -2), A = [g[0], g[2]];
    for (const _ of a(this, qi)) {
      const [y, w, E] = _;
      _[0] = (y - f) / d, _[1] = (w - p) / u, _[2] = (E - p) / u;
    }
    m(this, ml, {
      x: f,
      y: p,
      width: d,
      height: u,
      lastPoint: A
    });
  }
  getOutlines() {
    a(this, qi).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of a(this, qi))
      e[3] ? (t.push(...b(this, we, rd).call(this, e)), b(this, we, xp).call(this, e)) : (b(this, we, Tp).call(this, e), t.push(...b(this, we, rd).call(this, e)));
    return b(this, we, Sp).call(this, t);
  }
}
ml = new WeakMap(), qi = new WeakMap(), ds = new WeakMap(), we = new WeakSet(), Sp = function(t) {
  const e = [], s = /* @__PURE__ */ new Set();
  for (const r of t) {
    const [o, l, h] = r;
    e.push([o, l, r], [o, h, r]);
  }
  e.sort((r, o) => r[1] - o[1] || r[0] - o[0]);
  for (let r = 0, o = e.length; r < o; r += 2) {
    const l = e[r][2], h = e[r + 1][2];
    l.push(h), h.push(l), s.add(l), s.add(h);
  }
  const i = [];
  let n;
  for (; s.size > 0; ) {
    const r = s.values().next().value;
    let [o, l, h, d, u] = r;
    s.delete(r);
    let f = o, p = l;
    for (n = [o, h], i.push(n); ; ) {
      let g;
      if (s.has(d))
        g = d;
      else if (s.has(u))
        g = u;
      else
        break;
      s.delete(g), [o, l, h, d, u] = g, f !== o && (n.push(f, p, o, p === l ? l : h), f = o), p = p === l ? h : l;
    }
    n.push(f, p);
  }
  return new uA(i, a(this, ml));
}, ac = function(t) {
  const e = a(this, ds);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const n = s + i >> 1, r = e[n][0];
    if (r === t)
      return n;
    r < t ? s = n + 1 : i = n - 1;
  }
  return i + 1;
}, xp = function([, t, e]) {
  const s = b(this, we, ac).call(this, t);
  a(this, ds).splice(s, 0, [t, e]);
}, Tp = function([, t, e]) {
  const s = b(this, we, ac).call(this, t);
  for (let i = s; i < a(this, ds).length; i++) {
    const [n, r] = a(this, ds)[i];
    if (n !== t)
      break;
    if (n === t && r === e) {
      a(this, ds).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [n, r] = a(this, ds)[i];
    if (n !== t)
      break;
    if (n === t && r === e) {
      a(this, ds).splice(i, 1);
      return;
    }
  }
}, rd = function(t) {
  const [e, s, i] = t, n = [[e, s, i]], r = b(this, we, ac).call(this, i);
  for (let o = 0; o < r; o++) {
    const [l, h] = a(this, ds)[o];
    for (let d = 0, u = n.length; d < u; d++) {
      const [, f, p] = n[d];
      if (!(h <= f || p <= l)) {
        if (f >= l) {
          if (p > h)
            n[d][1] = h;
          else {
            if (u === 1)
              return [];
            n.splice(d, 1), d--, u--;
          }
          continue;
        }
        n[d][2] = l, p > h && n.push([e, h, p]);
      }
    }
  }
  return n;
};
var bl, va;
class uA extends gp {
  constructor(e, s) {
    super();
    v(this, bl);
    v(this, va);
    m(this, va, e), m(this, bl, s);
  }
  toSVGPath() {
    const e = [];
    for (const s of a(this, va)) {
      let [i, n] = s;
      e.push(`M${i} ${n}`);
      for (let r = 2; r < s.length; r += 2) {
        const o = s[r], l = s[r + 1];
        o === i ? (e.push(`V${l}`), n = l) : l === n && (e.push(`H${o}`), i = o);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, s, i, n], r) {
    const o = [], l = i - e, h = n - s;
    for (const d of a(this, va)) {
      const u = new Array(d.length);
      for (let f = 0; f < d.length; f += 2)
        u[f] = e + d[f] * l, u[f + 1] = n - d[f + 1] * h;
      o.push(u);
    }
    return o;
  }
  get box() {
    return a(this, bl);
  }
  get classNamesForDrawing() {
    return ["highlight"];
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
bl = new WeakMap(), va = new WeakMap();
class ad extends vc {
  newFreeDrawOutline(t, e, s, i, n, r) {
    return new fA(t, e, s, i, n, r);
  }
  get classNamesForDrawing() {
    return ["highlight", "free"];
  }
}
class fA extends wp {
  get classNamesForDrawing() {
    return ["highlight", "free"];
  }
  get classNamesForOutlining() {
    return ["highlightOutline", "free"];
  }
  newOutliner(t, e, s, i, n, r = 0) {
    return new ad(t, e, s, i, n, r);
  }
}
var us, tr, _a, $t, Al, wa, yl, vl, Xi, fs, Ea, _l, mt, od, ld, cd, hn, Cp, Ti;
const Se = class Se {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    v(this, mt);
    v(this, us, null);
    v(this, tr, null);
    v(this, _a);
    v(this, $t, null);
    v(this, Al, !1);
    v(this, wa, !1);
    v(this, yl, null);
    v(this, vl);
    v(this, Xi, null);
    v(this, fs, null);
    v(this, Ea);
    var s;
    t ? (m(this, wa, !1), m(this, Ea, q.HIGHLIGHT_COLOR), m(this, yl, t)) : (m(this, wa, !0), m(this, Ea, q.HIGHLIGHT_DEFAULT_COLOR)), m(this, fs, (t == null ? void 0 : t._uiManager) || e), m(this, vl, a(this, fs)._eventBus), m(this, _a, (t == null ? void 0 : t.color) || ((s = a(this, fs)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98"), a(Se, _l) || m(Se, _l, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return nt(this, "_keyboardManager", new Ll([[["Escape", "mac+Escape"], Se.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], Se.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], Se.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], Se.prototype._moveToPrevious], [["Home", "mac+Home"], Se.prototype._moveToBeginning], [["End", "mac+End"], Se.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = m(this, us, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0);
    const e = a(this, fs)._signal;
    t.addEventListener("click", b(this, mt, hn).bind(this), {
      signal: e
    }), t.addEventListener("keydown", b(this, mt, cd).bind(this), {
      signal: e
    });
    const s = m(this, tr, document.createElement("span"));
    return s.className = "swatch", s.setAttribute("aria-hidden", !0), s.style.backgroundColor = a(this, _a), t.append(s), t;
  }
  renderMainDropdown() {
    const t = m(this, $t, b(this, mt, od).call(this));
    return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === a(this, us)) {
      b(this, mt, hn).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && b(this, mt, ld).call(this, e, t);
  }
  _moveToNext(t) {
    var e, s;
    if (!a(this, mt, Ti)) {
      b(this, mt, hn).call(this, t);
      return;
    }
    if (t.target === a(this, us)) {
      (e = a(this, $t).firstChild) == null || e.focus();
      return;
    }
    (s = t.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(t) {
    var e, s;
    if (t.target === ((e = a(this, $t)) == null ? void 0 : e.firstChild) || t.target === a(this, us)) {
      a(this, mt, Ti) && this._hideDropdownFromKeyboard();
      return;
    }
    a(this, mt, Ti) || b(this, mt, hn).call(this, t), (s = t.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!a(this, mt, Ti)) {
      b(this, mt, hn).call(this, t);
      return;
    }
    (e = a(this, $t).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!a(this, mt, Ti)) {
      b(this, mt, hn).call(this, t);
      return;
    }
    (e = a(this, $t).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = a(this, $t)) == null || t.classList.add("hidden"), (e = a(this, Xi)) == null || e.abort(), m(this, Xi, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!a(this, wa)) {
      if (!a(this, mt, Ti)) {
        (t = a(this, yl)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), a(this, us).focus({
        preventScroll: !0,
        focusVisible: a(this, Al)
      });
    }
  }
  updateColor(t) {
    if (a(this, tr) && (a(this, tr).style.backgroundColor = t), !a(this, $t))
      return;
    const e = a(this, fs).highlightColors.values();
    for (const s of a(this, $t).children)
      s.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    var t, e;
    (t = a(this, us)) == null || t.remove(), m(this, us, null), m(this, tr, null), (e = a(this, $t)) == null || e.remove(), m(this, $t, null);
  }
};
us = new WeakMap(), tr = new WeakMap(), _a = new WeakMap(), $t = new WeakMap(), Al = new WeakMap(), wa = new WeakMap(), yl = new WeakMap(), vl = new WeakMap(), Xi = new WeakMap(), fs = new WeakMap(), Ea = new WeakMap(), _l = new WeakMap(), mt = new WeakSet(), od = function() {
  const t = document.createElement("div"), e = a(this, fs)._signal;
  t.addEventListener("contextmenu", Ze, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [s, i] of a(this, fs).highlightColors) {
    const n = document.createElement("button");
    n.tabIndex = "0", n.role = "option", n.setAttribute("data-color", i), n.title = s, n.setAttribute("data-l10n-id", a(Se, _l)[s]);
    const r = document.createElement("span");
    n.append(r), r.className = "swatch", r.style.backgroundColor = i, n.setAttribute("aria-selected", i === a(this, _a)), n.addEventListener("click", b(this, mt, ld).bind(this, i), {
      signal: e
    }), t.append(n);
  }
  return t.addEventListener("keydown", b(this, mt, cd).bind(this), {
    signal: e
  }), t;
}, ld = function(t, e) {
  e.stopPropagation(), a(this, vl).dispatch("switchannotationeditorparams", {
    source: this,
    type: a(this, Ea),
    value: t
  });
}, cd = function(t) {
  Se._keyboardManager.exec(this, t);
}, hn = function(t) {
  if (a(this, mt, Ti)) {
    this.hideDropdown();
    return;
  }
  if (m(this, Al, t.detail === 0), a(this, Xi) || (m(this, Xi, new AbortController()), window.addEventListener("pointerdown", b(this, mt, Cp).bind(this), {
    signal: a(this, fs).combinedSignal(a(this, Xi))
  })), a(this, $t)) {
    a(this, $t).classList.remove("hidden");
    return;
  }
  const e = m(this, $t, b(this, mt, od).call(this));
  a(this, us).append(e);
}, Cp = function(t) {
  var e;
  (e = a(this, $t)) != null && e.contains(t.target) || this.hideDropdown();
}, Ti = function() {
  return a(this, $t) && !a(this, $t).classList.contains("hidden");
}, v(Se, _l, null);
let _c = Se;
var Sa, wl, ci, er, xa, qe, El, Sl, sr, ps, de, Ce, Ta, hi, Vt, Ca, Xe, xl, K, hd, oc, Pp, Rp, Lp, dd, dn, Qe, Rr, kp, lc, Za, Mp, Ip, Fp, Dp, Op;
const lt = class lt extends gt {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    v(this, K);
    v(this, Sa, null);
    v(this, wl, 0);
    v(this, ci);
    v(this, er, null);
    v(this, xa, null);
    v(this, qe, null);
    v(this, El, null);
    v(this, Sl, 0);
    v(this, sr, null);
    v(this, ps, null);
    v(this, de, null);
    v(this, Ce, !1);
    v(this, Ta, null);
    v(this, hi);
    v(this, Vt, null);
    v(this, Ca, "");
    v(this, Xe);
    v(this, xl, "");
    this.color = e.color || lt._defaultColor, m(this, Xe, e.thickness || lt._defaultThickness), m(this, hi, e.opacity || lt._defaultOpacity), m(this, ci, e.boxes || null), m(this, xl, e.methodOfCreation || ""), m(this, Ca, e.text || ""), this._isDraggable = !1, e.highlightId > -1 ? (m(this, Ce, !0), b(this, K, oc).call(this, e), b(this, K, dn).call(this)) : a(this, ci) && (m(this, Sa, e.anchorNode), m(this, wl, e.anchorOffset), m(this, El, e.focusNode), m(this, Sl, e.focusOffset), b(this, K, hd).call(this), b(this, K, dn).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const e = lt.prototype;
    return nt(this, "_keyboardManager", new Ll([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: a(this, Ce) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: a(this, Xe),
      methodOfCreation: a(this, xl)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, s) {
    var i;
    gt.initialize(e, s), lt._defaultColor || (lt._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case q.HIGHLIGHT_DEFAULT_COLOR:
        lt._defaultColor = s;
        break;
      case q.HIGHLIGHT_THICKNESS:
        lt._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return a(this, Ta);
  }
  updateParams(e, s) {
    switch (e) {
      case q.HIGHLIGHT_COLOR:
        b(this, K, Pp).call(this, s);
        break;
      case q.HIGHLIGHT_THICKNESS:
        b(this, K, Rp).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[q.HIGHLIGHT_DEFAULT_COLOR, lt._defaultColor], [q.HIGHLIGHT_THICKNESS, lt._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[q.HIGHLIGHT_COLOR, this.color || lt._defaultColor], [q.HIGHLIGHT_THICKNESS, a(this, Xe) || lt._defaultThickness], [q.HIGHLIGHT_FREE, a(this, Ce)]];
  }
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.highlightColors && (m(this, xa, new _c({
      editor: this
    })), e.addColorPicker(a(this, xa))), e) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(b(this, K, Za).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, b(this, K, Za).call(this));
  }
  onceAdded() {
    this.annotationElementId || this.parent.addUndoableEditor(this), this.div.focus();
  }
  remove() {
    b(this, K, dd).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, K, dn).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? b(this, K, dd).call(this) : e && (b(this, K, dn).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var n, r, o;
    const {
      drawLayer: s
    } = this.parent;
    let i;
    a(this, Ce) ? (e = (e - this.rotation + 360) % 360, i = b(n = lt, Qe, Rr).call(n, a(this, ps).box, e)) : i = b(r = lt, Qe, Rr).call(r, this, e), s.rotate(a(this, de), e), s.rotate(a(this, Vt), e), s.updateBox(a(this, de), i), s.updateBox(a(this, Vt), b(o = lt, Qe, Rr).call(o, a(this, qe).box, e));
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    a(this, Ca) && (e.setAttribute("aria-label", a(this, Ca)), e.setAttribute("role", "mark")), a(this, Ce) ? e.classList.add("free") : this.div.addEventListener("keydown", b(this, K, kp).bind(this), {
      signal: this._uiManager._signal
    });
    const s = m(this, sr, document.createElement("div"));
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = a(this, er);
    const [i, n] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * n), Ac(this, a(this, sr), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    this.isSelected || this.parent.drawLayer.addClass(a(this, Vt), "hovered");
  }
  pointerleave() {
    this.isSelected || this.parent.drawLayer.removeClass(a(this, Vt), "hovered");
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        b(this, K, lc).call(this, !0);
        break;
      case 1:
      case 3:
        b(this, K, lc).call(this, !1);
        break;
    }
  }
  select() {
    var e, s;
    super.select(), a(this, Vt) && ((e = this.parent) == null || e.drawLayer.removeClass(a(this, Vt), "hovered"), (s = this.parent) == null || s.drawLayer.addClass(a(this, Vt), "selected"));
  }
  unselect() {
    var e;
    super.unselect(), a(this, Vt) && ((e = this.parent) == null || e.drawLayer.removeClass(a(this, Vt), "selected"), a(this, Ce) || b(this, K, lc).call(this, !1));
  }
  get _mustFixPosition() {
    return !a(this, Ce);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.show(a(this, de), e), this.parent.drawLayer.show(a(this, Vt), e));
  }
  static startHighlighting(e, s, {
    target: i,
    x: n,
    y: r
  }) {
    const {
      x: o,
      y: l,
      width: h,
      height: d
    } = i.getBoundingClientRect(), u = new AbortController(), f = e.combinedSignal(u), p = (A) => {
      A.preventDefault(), A.stopPropagation();
    }, g = (A) => {
      u.abort(), b(this, Qe, Dp).call(this, e, A);
    };
    window.addEventListener("blur", g, {
      signal: f
    }), window.addEventListener("pointerup", g, {
      signal: f
    }), window.addEventListener("pointerdown", p, {
      capture: !0,
      passive: !1,
      signal: f
    }), window.addEventListener("contextmenu", Ze, {
      signal: f
    }), i.addEventListener("pointermove", b(this, Qe, Fp).bind(this, e), {
      signal: f
    }), this._freeHighlight = new ad({
      x: n,
      y: r
    }, [o, l, h, d], e.scale, this._defaultThickness / 2, s, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = e.drawLayer.draw(this._freeHighlight, this._defaultColor, this._defaultOpacity, !0);
  }
  static async deserialize(e, s, i) {
    var A, _, y, w;
    let n = null;
    if (e instanceof op) {
      const {
        data: {
          quadPoints: E,
          rect: S,
          rotation: T,
          id: x,
          color: C,
          opacity: P,
          popupRef: R
        },
        parent: {
          page: {
            pageNumber: k
          }
        }
      } = e;
      n = e = {
        annotationType: J.HIGHLIGHT,
        color: Array.from(C),
        opacity: P,
        quadPoints: E,
        boxes: null,
        pageIndex: k - 1,
        rect: S.slice(0),
        rotation: T,
        id: x,
        deleted: !1,
        popupRef: R
      };
    } else if (e instanceof Kd) {
      const {
        data: {
          inkLists: E,
          rect: S,
          rotation: T,
          id: x,
          color: C,
          borderStyle: {
            rawWidth: P
          },
          popupRef: R
        },
        parent: {
          page: {
            pageNumber: k
          }
        }
      } = e;
      n = e = {
        annotationType: J.HIGHLIGHT,
        color: Array.from(C),
        thickness: P,
        inkLists: E,
        boxes: null,
        pageIndex: k - 1,
        rect: S.slice(0),
        rotation: T,
        id: x,
        deleted: !1,
        popupRef: R
      };
    }
    const {
      color: r,
      quadPoints: o,
      inkLists: l,
      opacity: h
    } = e, d = await super.deserialize(e, s, i);
    d.color = B.makeHexColor(...r), m(d, hi, h || 1), l && m(d, Xe, e.thickness), d.annotationElementId = e.id || null, d._initialData = n;
    const [u, f] = d.pageDimensions, [p, g] = d.pageTranslation;
    if (o) {
      const E = m(d, ci, []);
      for (let S = 0; S < o.length; S += 8)
        E.push({
          x: (o[S] - p) / u,
          y: 1 - (o[S + 1] - g) / f,
          width: (o[S + 2] - o[S]) / u,
          height: (o[S + 1] - o[S + 5]) / f
        });
      b(A = d, K, hd).call(A), b(_ = d, K, dn).call(_), d.rotate(d.rotation);
    } else if (l) {
      m(d, Ce, !0);
      const E = l[0], S = {
        x: E[0] - p,
        y: f - (E[1] - g)
      }, T = new ad(S, [0, 0, u, f], 1, a(d, Xe) / 2, !0, 1e-3);
      for (let P = 0, R = E.length; P < R; P += 2)
        S.x = E[P] - p, S.y = f - (E[P + 1] - g), T.add(S);
      const {
        id: x,
        clipPathId: C
      } = s.drawLayer.draw(T, d.color, d._defaultOpacity, !0);
      b(y = d, K, oc).call(y, {
        highlightOutlines: T.getOutlines(),
        highlightId: x,
        clipPathId: C
      }), b(w = d, K, dn).call(w);
    }
    return d;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = this.getRect(0, 0), i = gt._colorManager.convert(this.color), n = {
      annotationType: J.HIGHLIGHT,
      color: i,
      opacity: a(this, hi),
      thickness: a(this, Xe),
      quadPoints: b(this, K, Mp).call(this),
      outlines: b(this, K, Ip).call(this, s),
      pageIndex: this.pageIndex,
      rect: s,
      rotation: b(this, K, Za).call(this),
      structTreeParentId: this._structTreeParentId
    };
    return this.annotationElementId && !b(this, K, Op).call(this, n) ? null : (n.id = this.annotationElementId, n);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Sa = new WeakMap(), wl = new WeakMap(), ci = new WeakMap(), er = new WeakMap(), xa = new WeakMap(), qe = new WeakMap(), El = new WeakMap(), Sl = new WeakMap(), sr = new WeakMap(), ps = new WeakMap(), de = new WeakMap(), Ce = new WeakMap(), Ta = new WeakMap(), hi = new WeakMap(), Vt = new WeakMap(), Ca = new WeakMap(), Xe = new WeakMap(), xl = new WeakMap(), K = new WeakSet(), hd = function() {
  const e = new Lu(a(this, ci), 1e-3);
  m(this, ps, e.getOutlines()), {
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  } = a(this, ps).box;
  const s = new Lu(a(this, ci), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  m(this, qe, s.getOutlines());
  const {
    lastPoint: i
  } = a(this, qe).box;
  m(this, Ta, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, oc = function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: i
}) {
  var u, f;
  if (m(this, ps, e), m(this, qe, e.getNewOutline(a(this, Xe) / 2 + 1.5, 25e-4)), s >= 0)
    m(this, de, s), m(this, er, i), this.parent.drawLayer.finalizeLine(s, e), m(this, Vt, this.parent.drawLayer.drawOutline(a(this, qe)));
  else if (this.parent) {
    const p = this.parent.viewport.rotation;
    this.parent.drawLayer.updateLine(a(this, de), e), this.parent.drawLayer.updateBox(a(this, de), b(u = lt, Qe, Rr).call(u, a(this, ps).box, (p - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(a(this, Vt), a(this, qe)), this.parent.drawLayer.updateBox(a(this, Vt), b(f = lt, Qe, Rr).call(f, a(this, qe).box, p));
  }
  const {
    x: r,
    y: o,
    width: l,
    height: h
  } = e.box;
  switch (this.rotation) {
    case 0:
      this.x = r, this.y = o, this.width = l, this.height = h;
      break;
    case 90: {
      const [p, g] = this.parentDimensions;
      this.x = o, this.y = 1 - r, this.width = l * g / p, this.height = h * p / g;
      break;
    }
    case 180:
      this.x = 1 - r, this.y = 1 - o, this.width = l, this.height = h;
      break;
    case 270: {
      const [p, g] = this.parentDimensions;
      this.x = 1 - o, this.y = r, this.width = l * g / p, this.height = h * p / g;
      break;
    }
  }
  const {
    lastPoint: d
  } = a(this, qe).box;
  m(this, Ta, [(d[0] - r) / l, (d[1] - o) / h]);
}, Pp = function(e) {
  const s = (r, o) => {
    var l, h, d;
    this.color = r, (l = this.parent) == null || l.drawLayer.changeColor(a(this, de), r), (h = a(this, xa)) == null || h.updateColor(r), m(this, hi, o), (d = this.parent) == null || d.drawLayer.changeOpacity(a(this, de), o);
  }, i = this.color, n = a(this, hi);
  this.addCommands({
    cmd: s.bind(this, e, lt._defaultOpacity),
    undo: s.bind(this, i, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: q.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(e)
  }, !0);
}, Rp = function(e) {
  const s = a(this, Xe), i = (n) => {
    m(this, Xe, n), b(this, K, Lp).call(this, n);
  };
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: q.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, Lp = function(e) {
  if (!a(this, Ce))
    return;
  b(this, K, oc).call(this, {
    highlightOutlines: a(this, ps).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [s, i] = this.parentDimensions;
  this.setDims(this.width * s, this.height * i);
}, dd = function() {
  a(this, de) === null || !this.parent || (this.parent.drawLayer.remove(a(this, de)), m(this, de, null), this.parent.drawLayer.remove(a(this, Vt)), m(this, Vt, null));
}, dn = function(e = this.parent) {
  a(this, de) === null && ({
    id: ge(this, de)._,
    clipPathId: ge(this, er)._
  } = e.drawLayer.draw(a(this, ps), this.color, a(this, hi)), m(this, Vt, e.drawLayer.drawOutline(a(this, qe))), a(this, sr) && (a(this, sr).style.clipPath = a(this, er)));
}, Qe = new WeakSet(), Rr = function({
  x: e,
  y: s,
  width: i,
  height: n
}, r) {
  switch (r) {
    case 90:
      return {
        x: 1 - s - n,
        y: e,
        width: n,
        height: i
      };
    case 180:
      return {
        x: 1 - e - i,
        y: 1 - s - n,
        width: i,
        height: n
      };
    case 270:
      return {
        x: s,
        y: 1 - e - i,
        width: n,
        height: i
      };
  }
  return {
    x: e,
    y: s,
    width: i,
    height: n
  };
}, kp = function(e) {
  lt._keyboardManager.exec(this, e);
}, lc = function(e) {
  if (!a(this, Sa))
    return;
  const s = window.getSelection();
  e ? s.setPosition(a(this, Sa), a(this, wl)) : s.setPosition(a(this, El), a(this, Sl));
}, Za = function() {
  return a(this, Ce) ? this.rotation : 0;
}, Mp = function() {
  if (a(this, Ce))
    return null;
  const [e, s] = this.pageDimensions, [i, n] = this.pageTranslation, r = a(this, ci), o = new Float32Array(r.length * 8);
  let l = 0;
  for (const {
    x: h,
    y: d,
    width: u,
    height: f
  } of r) {
    const p = h * e + i, g = (1 - d - f) * s + n;
    o[l] = o[l + 4] = p, o[l + 1] = o[l + 3] = g, o[l + 2] = o[l + 6] = p + u * e, o[l + 5] = o[l + 7] = g + f * s, l += 8;
  }
  return o;
}, Ip = function(e) {
  return a(this, ps).serialize(e, b(this, K, Za).call(this));
}, Fp = function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
}, Dp = function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, Op = function(e) {
  const {
    color: s
  } = this._initialData;
  return e.color.some((i, n) => i !== s[n]);
}, v(lt, Qe), W(lt, "_defaultColor", null), W(lt, "_defaultOpacity", 1), W(lt, "_defaultThickness", 12), W(lt, "_type", "highlight"), W(lt, "_editorType", J.HIGHLIGHT), W(lt, "_freeHighlightId", -1), W(lt, "_freeHighlight", null), W(lt, "_freeHighlightClipId", "");
let wc = lt;
var ir, nr, Ds, di, Ye, rr, ar, or, ui, Pa, lr, cr, Yi, M, Np, Hp, Bp, jp, fd, zp, pd, Gp, Up, $p, Vp, Wp, un, gd, md, bd, cc, hc, Lr, Ad, dc, Ei, qp, yd, Xp, Yp, vd, uc, to;
const Pt = class Pt extends gt {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    v(this, M);
    v(this, ir, 0);
    v(this, nr, 0);
    v(this, Ds, null);
    v(this, di, new Path2D());
    v(this, Ye, !1);
    v(this, rr, null);
    v(this, ar, !1);
    v(this, or, !1);
    v(this, ui, null);
    v(this, Pa, null);
    v(this, lr, 0);
    v(this, cr, 0);
    v(this, Yi, null);
    this.color = e.color || null, this.thickness = e.thickness || null, this.opacity = e.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
  }
  static initialize(e, s) {
    gt.initialize(e, s);
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case q.INK_THICKNESS:
        Pt._defaultThickness = s;
        break;
      case q.INK_COLOR:
        Pt._defaultColor = s;
        break;
      case q.INK_OPACITY:
        Pt._defaultOpacity = s / 100;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case q.INK_THICKNESS:
        b(this, M, Np).call(this, s);
        break;
      case q.INK_COLOR:
        b(this, M, Hp).call(this, s);
        break;
      case q.INK_OPACITY:
        b(this, M, Bp).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[q.INK_THICKNESS, Pt._defaultThickness], [q.INK_COLOR, Pt._defaultColor || gt._defaultLineColor], [q.INK_OPACITY, Math.round(Pt._defaultOpacity * 100)]];
  }
  get propertiesToUpdate() {
    return [[q.INK_THICKNESS, this.thickness || Pt._defaultThickness], [q.INK_COLOR, this.color || Pt._defaultColor || gt._defaultLineColor], [q.INK_OPACITY, Math.round(100 * (this.opacity ?? Pt._defaultOpacity))]];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.canvas || (b(this, M, cc).call(this), b(this, M, hc).call(this)), this.isAttachedToDOM || (this.parent.add(this), b(this, M, Lr).call(this)), b(this, M, to).call(this)));
  }
  remove() {
    var e;
    this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, a(this, Ds) && (clearTimeout(a(this, Ds)), m(this, Ds, null)), (e = a(this, ui)) == null || e.disconnect(), m(this, ui, null), super.remove());
  }
  setParent(e) {
    !this.parent && e ? this._uiManager.removeShouldRescale(this) : this.parent && e === null && this._uiManager.addShouldRescale(this), super.setParent(e);
  }
  onScaleChanging() {
    const [e, s] = this.parentDimensions, i = this.width * e, n = this.height * s;
    this.setDimensions(i, n);
  }
  enableEditMode() {
    a(this, Ye) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, b(this, M, gd).call(this));
  }
  disableEditMode() {
    !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), b(this, M, md).call(this));
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
  }
  commit() {
    a(this, Ye) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), m(this, Ye, !0), this.div.classList.add("disabled"), b(this, M, to).call(this, !0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
      preventScroll: !0
    }));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), this.enableEditMode());
  }
  canvasPointerdown(e) {
    e.button !== 0 || !this.isInEditMode() || a(this, Ye) || (this.setInForeground(), e.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({
      preventScroll: !0
    }), b(this, M, zp).call(this, e.offsetX, e.offsetY));
  }
  canvasPointermove(e) {
    e.preventDefault(), b(this, M, pd).call(this, e.offsetX, e.offsetY);
  }
  canvasPointerup(e) {
    e.preventDefault(), b(this, M, bd).call(this, e);
  }
  canvasPointerleave(e) {
    b(this, M, bd).call(this, e);
  }
  get isResizable() {
    return !this.isEmpty() && a(this, Ye);
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    this.width && (e = this.x, s = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
    const [i, n, r, o] = b(this, M, jp).call(this);
    if (this.setAt(i, n, 0, 0), this.setDims(r, o), b(this, M, cc).call(this), this.width) {
      const [l, h] = this.parentDimensions;
      this.setAspectRatio(this.width * l, this.height * h), this.setAt(e * l, s * h, this.width * l, this.height * h), m(this, or, !0), b(this, M, Lr).call(this), this.setDims(this.width * l, this.height * h), b(this, M, un).call(this), this.div.classList.add("disabled");
    } else
      this.div.classList.add("editing"), this.enableEditMode();
    return b(this, M, hc).call(this), this.div;
  }
  setDimensions(e, s) {
    const i = Math.round(e), n = Math.round(s);
    if (a(this, lr) === i && a(this, cr) === n)
      return;
    m(this, lr, i), m(this, cr, n), this.canvas.style.visibility = "hidden";
    const [r, o] = this.parentDimensions;
    this.width = e / r, this.height = s / o, this.fixAndSetPosition(), a(this, Ye) && b(this, M, Ad).call(this, e, s), b(this, M, Lr).call(this), b(this, M, un).call(this), this.canvas.style.visibility = "visible", this.fixDims();
  }
  static async deserialize(e, s, i) {
    var _, y, w;
    if (e instanceof Kd)
      return null;
    const n = await super.deserialize(e, s, i);
    n.thickness = e.thickness, n.color = B.makeHexColor(...e.color), n.opacity = e.opacity;
    const [r, o] = n.pageDimensions, l = n.width * r, h = n.height * o, d = n.parentScale, u = e.thickness / 2;
    m(n, Ye, !0), m(n, lr, Math.round(l)), m(n, cr, Math.round(h));
    const {
      paths: f,
      rect: p,
      rotation: g
    } = e;
    for (let {
      bezier: E
    } of f) {
      E = b(_ = Pt, Ei, Xp).call(_, E, p, g);
      const S = [];
      n.paths.push(S);
      let T = d * (E[0] - u), x = d * (E[1] - u);
      for (let P = 2, R = E.length; P < R; P += 6) {
        const k = d * (E[P] - u), L = d * (E[P + 1] - u), U = d * (E[P + 2] - u), j = d * (E[P + 3] - u), H = d * (E[P + 4] - u), $ = d * (E[P + 5] - u);
        S.push([[T, x], [k, L], [U, j], [H, $]]), T = H, x = $;
      }
      const C = b(this, Ei, qp).call(this, S);
      n.bezierPath2D.push(C);
    }
    const A = b(y = n, M, vd).call(y);
    return m(n, nr, Math.max(gt.MIN_SIZE, A[2] - A[0])), m(n, ir, Math.max(gt.MIN_SIZE, A[3] - A[1])), b(w = n, M, Ad).call(w, l, h), n;
  }
  serialize() {
    if (this.isEmpty())
      return null;
    const e = this.getRect(0, 0), s = gt._colorManager.convert(this.ctx.strokeStyle);
    return {
      annotationType: J.INK,
      color: s,
      thickness: this.thickness,
      opacity: this.opacity,
      paths: b(this, M, Yp).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, e),
      pageIndex: this.pageIndex,
      rect: e,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
  }
};
ir = new WeakMap(), nr = new WeakMap(), Ds = new WeakMap(), di = new WeakMap(), Ye = new WeakMap(), rr = new WeakMap(), ar = new WeakMap(), or = new WeakMap(), ui = new WeakMap(), Pa = new WeakMap(), lr = new WeakMap(), cr = new WeakMap(), Yi = new WeakMap(), M = new WeakSet(), Np = function(e) {
  const s = (n) => {
    this.thickness = n, b(this, M, to).call(this);
  }, i = this.thickness;
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: q.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Hp = function(e) {
  const s = (n) => {
    this.color = n, b(this, M, un).call(this);
  }, i = this.color;
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: q.INK_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Bp = function(e) {
  const s = (n) => {
    this.opacity = n, b(this, M, un).call(this);
  };
  e /= 100;
  const i = this.opacity;
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: q.INK_OPACITY,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, jp = function() {
  const {
    parentRotation: e,
    parentDimensions: [s, i]
  } = this;
  switch (e) {
    case 90:
      return [0, i, i, s];
    case 180:
      return [s, i, s, i];
    case 270:
      return [s, 0, i, s];
    default:
      return [0, 0, s, i];
  }
}, fd = function() {
  const {
    ctx: e,
    color: s,
    opacity: i,
    thickness: n,
    parentScale: r,
    scaleFactor: o
  } = this;
  e.lineWidth = n * r / o, e.lineCap = "round", e.lineJoin = "round", e.miterLimit = 10, e.strokeStyle = `${s}${Dm(i)}`;
}, zp = function(e, s) {
  this.canvas.addEventListener("contextmenu", Ze, {
    signal: this._uiManager._signal
  }), b(this, M, md).call(this), m(this, rr, new AbortController());
  const i = this._uiManager.combinedSignal(a(this, rr));
  this.canvas.addEventListener("pointerleave", this.canvasPointerleave.bind(this), {
    signal: i
  }), this.canvas.addEventListener("pointermove", this.canvasPointermove.bind(this), {
    signal: i
  }), this.canvas.addEventListener("pointerup", this.canvasPointerup.bind(this), {
    signal: i
  }), this.isEditing = !0, a(this, or) || (m(this, or, !0), b(this, M, Lr).call(this), this.thickness || (this.thickness = Pt._defaultThickness), this.color || (this.color = Pt._defaultColor || gt._defaultLineColor), this.opacity ?? (this.opacity = Pt._defaultOpacity)), this.currentPath.push([e, s]), m(this, ar, !1), b(this, M, fd).call(this), m(this, Yi, () => {
    b(this, M, $p).call(this), a(this, Yi) && window.requestAnimationFrame(a(this, Yi));
  }), window.requestAnimationFrame(a(this, Yi));
}, pd = function(e, s) {
  const [i, n] = this.currentPath.at(-1);
  if (this.currentPath.length > 1 && e === i && s === n)
    return;
  const r = this.currentPath;
  let o = a(this, di);
  if (r.push([e, s]), m(this, ar, !0), r.length <= 2) {
    o.moveTo(...r[0]), o.lineTo(e, s);
    return;
  }
  r.length === 3 && (m(this, di, o = new Path2D()), o.moveTo(...r[0])), b(this, M, Vp).call(this, o, ...r.at(-3), ...r.at(-2), e, s);
}, Gp = function() {
  if (this.currentPath.length === 0)
    return;
  const e = this.currentPath.at(-1);
  a(this, di).lineTo(...e);
}, Up = function(e, s) {
  m(this, Yi, null), e = Math.min(Math.max(e, 0), this.canvas.width), s = Math.min(Math.max(s, 0), this.canvas.height), b(this, M, pd).call(this, e, s), b(this, M, Gp).call(this);
  let i;
  if (this.currentPath.length !== 1)
    i = b(this, M, Wp).call(this);
  else {
    const h = [e, s];
    i = [[h, h.slice(), h.slice(), h]];
  }
  const n = a(this, di), r = this.currentPath;
  this.currentPath = [], m(this, di, new Path2D());
  const o = () => {
    this.allRawPaths.push(r), this.paths.push(i), this.bezierPath2D.push(n), this._uiManager.rebuild(this);
  }, l = () => {
    this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (b(this, M, cc).call(this), b(this, M, hc).call(this)), b(this, M, to).call(this));
  };
  this.addCommands({
    cmd: o,
    undo: l,
    mustExec: !0
  });
}, $p = function() {
  if (!a(this, ar))
    return;
  m(this, ar, !1);
  const e = Math.ceil(this.thickness * this.parentScale), s = this.currentPath.slice(-3), i = s.map((o) => o[0]), n = s.map((o) => o[1]);
  Math.min(...i) - e, Math.max(...i) + e, Math.min(...n) - e, Math.max(...n) + e;
  const {
    ctx: r
  } = this;
  r.save(), r.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (const o of this.bezierPath2D)
    r.stroke(o);
  r.stroke(a(this, di)), r.restore();
}, Vp = function(e, s, i, n, r, o, l) {
  const h = (s + n) / 2, d = (i + r) / 2, u = (n + o) / 2, f = (r + l) / 2;
  e.bezierCurveTo(h + 2 * (n - h) / 3, d + 2 * (r - d) / 3, u + 2 * (n - u) / 3, f + 2 * (r - f) / 3, u, f);
}, Wp = function() {
  const e = this.currentPath;
  if (e.length <= 2)
    return [[e[0], e[0], e.at(-1), e.at(-1)]];
  const s = [];
  let i, [n, r] = e[0];
  for (i = 1; i < e.length - 2; i++) {
    const [p, g] = e[i], [A, _] = e[i + 1], y = (p + A) / 2, w = (g + _) / 2, E = [n + 2 * (p - n) / 3, r + 2 * (g - r) / 3], S = [y + 2 * (p - y) / 3, w + 2 * (g - w) / 3];
    s.push([[n, r], E, S, [y, w]]), [n, r] = [y, w];
  }
  const [o, l] = e[i], [h, d] = e[i + 1], u = [n + 2 * (o - n) / 3, r + 2 * (l - r) / 3], f = [h + 2 * (o - h) / 3, d + 2 * (l - d) / 3];
  return s.push([[n, r], u, f, [h, d]]), s;
}, un = function() {
  if (this.isEmpty()) {
    b(this, M, dc).call(this);
    return;
  }
  b(this, M, fd).call(this);
  const {
    canvas: e,
    ctx: s
  } = this;
  s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, e.width, e.height), b(this, M, dc).call(this);
  for (const i of this.bezierPath2D)
    s.stroke(i);
}, gd = function() {
  if (a(this, Pa))
    return;
  m(this, Pa, new AbortController());
  const e = this._uiManager.combinedSignal(a(this, Pa));
  this.canvas.addEventListener("pointerdown", this.canvasPointerdown.bind(this), {
    signal: e
  });
}, md = function() {
  var e;
  (e = this.pointerdownAC) == null || e.abort(), this.pointerdownAC = null;
}, bd = function(e) {
  var s;
  (s = a(this, rr)) == null || s.abort(), m(this, rr, null), b(this, M, gd).call(this), a(this, Ds) && clearTimeout(a(this, Ds)), m(this, Ds, setTimeout(() => {
    m(this, Ds, null), this.canvas.removeEventListener("contextmenu", Ze);
  }, 10)), b(this, M, Up).call(this, e.offsetX, e.offsetY), this.addToAnnotationStorage(), this.setInBackground();
}, cc = function() {
  this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
}, hc = function() {
  m(this, ui, new ResizeObserver((e) => {
    const s = e[0].contentRect;
    s.width && s.height && this.setDimensions(s.width, s.height);
  })), a(this, ui).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var e;
    (e = a(this, ui)) == null || e.disconnect(), m(this, ui, null);
  }, {
    once: !0
  });
}, Lr = function() {
  if (!a(this, or))
    return;
  const [e, s] = this.parentDimensions;
  this.canvas.width = Math.ceil(this.width * e), this.canvas.height = Math.ceil(this.height * s), b(this, M, dc).call(this);
}, Ad = function(e, s) {
  const i = b(this, M, uc).call(this), n = (e - i) / a(this, nr), r = (s - i) / a(this, ir);
  this.scaleFactor = Math.min(n, r);
}, dc = function() {
  const e = b(this, M, uc).call(this) / 2;
  this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + e, this.translationY * this.scaleFactor + e);
}, Ei = new WeakSet(), qp = function(e) {
  const s = new Path2D();
  for (let i = 0, n = e.length; i < n; i++) {
    const [r, o, l, h] = e[i];
    i === 0 && s.moveTo(...r), s.bezierCurveTo(o[0], o[1], l[0], l[1], h[0], h[1]);
  }
  return s;
}, yd = function(e, s, i) {
  const [n, r, o, l] = s;
  switch (i) {
    case 0:
      for (let h = 0, d = e.length; h < d; h += 2)
        e[h] += n, e[h + 1] = l - e[h + 1];
      break;
    case 90:
      for (let h = 0, d = e.length; h < d; h += 2) {
        const u = e[h];
        e[h] = e[h + 1] + n, e[h + 1] = u + r;
      }
      break;
    case 180:
      for (let h = 0, d = e.length; h < d; h += 2)
        e[h] = o - e[h], e[h + 1] += r;
      break;
    case 270:
      for (let h = 0, d = e.length; h < d; h += 2) {
        const u = e[h];
        e[h] = o - e[h + 1], e[h + 1] = l - u;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return e;
}, Xp = function(e, s, i) {
  const [n, r, o, l] = s;
  switch (i) {
    case 0:
      for (let h = 0, d = e.length; h < d; h += 2)
        e[h] -= n, e[h + 1] = l - e[h + 1];
      break;
    case 90:
      for (let h = 0, d = e.length; h < d; h += 2) {
        const u = e[h];
        e[h] = e[h + 1] - r, e[h + 1] = u - n;
      }
      break;
    case 180:
      for (let h = 0, d = e.length; h < d; h += 2)
        e[h] = o - e[h], e[h + 1] -= r;
      break;
    case 270:
      for (let h = 0, d = e.length; h < d; h += 2) {
        const u = e[h];
        e[h] = l - e[h + 1], e[h + 1] = o - u;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return e;
}, Yp = function(e, s, i, n) {
  var d, u;
  const r = [], o = this.thickness / 2, l = e * s + o, h = e * i + o;
  for (const f of this.paths) {
    const p = [], g = [];
    for (let A = 0, _ = f.length; A < _; A++) {
      const [y, w, E, S] = f[A];
      if (y[0] === S[0] && y[1] === S[1] && _ === 1) {
        const j = e * y[0] + l, H = e * y[1] + h;
        p.push(j, H), g.push(j, H);
        break;
      }
      const T = e * y[0] + l, x = e * y[1] + h, C = e * w[0] + l, P = e * w[1] + h, R = e * E[0] + l, k = e * E[1] + h, L = e * S[0] + l, U = e * S[1] + h;
      A === 0 && (p.push(T, x), g.push(T, x)), p.push(C, P, R, k, L, U), g.push(C, P), A === _ - 1 && g.push(L, U);
    }
    r.push({
      bezier: b(d = Pt, Ei, yd).call(d, p, n, this.rotation),
      points: b(u = Pt, Ei, yd).call(u, g, n, this.rotation)
    });
  }
  return r;
}, vd = function() {
  let e = 1 / 0, s = -1 / 0, i = 1 / 0, n = -1 / 0;
  for (const r of this.paths)
    for (const [o, l, h, d] of r) {
      const u = B.bezierBoundingBox(...o, ...l, ...h, ...d);
      e = Math.min(e, u[0]), i = Math.min(i, u[1]), s = Math.max(s, u[2]), n = Math.max(n, u[3]);
    }
  return [e, i, s, n];
}, uc = function() {
  return a(this, Ye) ? Math.ceil(this.thickness * this.parentScale) : 0;
}, to = function(e = !1) {
  if (this.isEmpty())
    return;
  if (!a(this, Ye)) {
    b(this, M, un).call(this);
    return;
  }
  const s = b(this, M, vd).call(this), i = b(this, M, uc).call(this);
  m(this, nr, Math.max(gt.MIN_SIZE, s[2] - s[0])), m(this, ir, Math.max(gt.MIN_SIZE, s[3] - s[1]));
  const n = Math.ceil(i + a(this, nr) * this.scaleFactor), r = Math.ceil(i + a(this, ir) * this.scaleFactor), [o, l] = this.parentDimensions;
  this.width = n / o, this.height = r / l, this.setAspectRatio(n, r);
  const h = this.translationX, d = this.translationY;
  this.translationX = -s[0], this.translationY = -s[1], b(this, M, Lr).call(this), b(this, M, un).call(this), m(this, lr, n), m(this, cr, r), this.setDims(n, r);
  const u = e ? i / this.scaleFactor / 2 : 0;
  this.translate(h - this.translationX - u, d - this.translationY - u);
}, v(Pt, Ei), W(Pt, "_defaultColor", null), W(Pt, "_defaultOpacity", 1), W(Pt, "_defaultThickness", 1), W(Pt, "_type", "ink"), W(Pt, "_editorType", J.INK);
let ud = Pt;
var Lt, ne, Ki, fi, Qi, Ra, Os, pi, Ns, He, La, it, eo, so, fc, wd, Kp, pc, Ed, gc, Qp, Jp;
const oo = class oo extends gt {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    v(this, it);
    v(this, Lt, null);
    v(this, ne, null);
    v(this, Ki, null);
    v(this, fi, null);
    v(this, Qi, null);
    v(this, Ra, "");
    v(this, Os, null);
    v(this, pi, null);
    v(this, Ns, null);
    v(this, He, !1);
    v(this, La, !1);
    m(this, fi, e.bitmapUrl), m(this, Qi, e.bitmapFile);
  }
  static initialize(e, s) {
    gt.initialize(e, s);
  }
  static get supportedTypes() {
    return nt(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((s) => `image/${s}`));
  }
  static get supportedTypesStr() {
    return nt(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(e) {
    return this.supportedTypes.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor(J.STAMP, {
      bitmapFile: e.getAsFile()
    });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }
  get telemetryFinalData() {
    var e;
    return {
      type: "stamp",
      hasAltText: !!((e = this.altTextData) != null && e.altText)
    };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasAltText");
    return {
      hasAltText: s.get(!0) ?? 0,
      hasNoAltText: s.get(!1) ?? 0
    };
  }
  async mlGuessAltText(e = null, s = !0) {
    if (this.hasAltTextData())
      return null;
    const {
      mlManager: i
    } = this._uiManager;
    if (!i)
      throw new Error("No ML.");
    if (!await i.isEnabledFor("altText"))
      throw new Error("ML isn't enabled for alt text.");
    const {
      data: n,
      width: r,
      height: o
    } = e || this.copyCanvas(null, null, !0).imageData, l = await i.guess({
      name: "altText",
      request: {
        data: n,
        width: r,
        height: o,
        channels: n.length / (r * o)
      }
    });
    if (!l)
      throw new Error("No response from the AI service.");
    if (l.error)
      throw new Error("Error from the AI service.");
    if (l.cancel)
      return null;
    if (!l.output)
      throw new Error("No valid response from the AI service.");
    const h = l.output;
    return await this.setGuessedAltText(h), s && !this.hasAltTextData() && (this.altTextData = {
      alt: h,
      decorative: !1
    }), h;
  }
  remove() {
    var e, s;
    a(this, ne) && (m(this, Lt, null), this._uiManager.imageManager.deleteId(a(this, ne)), (e = a(this, Os)) == null || e.remove(), m(this, Os, null), (s = a(this, pi)) == null || s.disconnect(), m(this, pi, null), a(this, Ns) && (clearTimeout(a(this, Ns)), m(this, Ns, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      a(this, ne) && b(this, it, fc).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (a(this, ne) && a(this, Os) === null && b(this, it, fc).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded() {
    this._isDraggable = !0, this.div.focus();
  }
  isEmpty() {
    return !(a(this, Ki) || a(this, Lt) || a(this, fi) || a(this, Qi) || a(this, ne));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    if (this.width && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.div.setAttribute("role", "figure"), this.addAltTextButton(), a(this, Lt) ? b(this, it, wd).call(this) : b(this, it, fc).call(this), this.width && !this.annotationElementId) {
      const [i, n] = this.parentDimensions;
      this.setAt(e * i, s * n, this.width * i, this.height * n);
    }
    return this.div;
  }
  copyCanvas(e, s, i = !1) {
    var p;
    e || (e = 224);
    const {
      width: n,
      height: r
    } = a(this, Lt), o = new bh();
    let l = a(this, Lt), h = n, d = r, u = null;
    if (s) {
      if (n > s || r > s) {
        const P = Math.min(s / n, s / r);
        h = Math.floor(n * P), d = Math.floor(r * P);
      }
      u = document.createElement("canvas");
      const g = u.width = Math.ceil(h * o.sx), A = u.height = Math.ceil(d * o.sy);
      a(this, He) || (l = b(this, it, pc).call(this, g, A));
      const _ = u.getContext("2d");
      _.filter = this._uiManager.hcmFilter;
      let y = "white", w = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? w = "black" : (p = window.matchMedia) != null && p.call(window, "(prefers-color-scheme: dark)").matches && (y = "#8f8f9d", w = "#42414d");
      const E = 15, S = E * o.sx, T = E * o.sy, x = new OffscreenCanvas(S * 2, T * 2), C = x.getContext("2d");
      C.fillStyle = y, C.fillRect(0, 0, S * 2, T * 2), C.fillStyle = w, C.fillRect(0, 0, S, T), C.fillRect(S, T, S, T), _.fillStyle = _.createPattern(x, "repeat"), _.fillRect(0, 0, g, A), _.drawImage(l, 0, 0, l.width, l.height, 0, 0, g, A);
    }
    let f = null;
    if (i) {
      let g, A;
      if (o.symmetric && l.width < e && l.height < e)
        g = l.width, A = l.height;
      else if (l = a(this, Lt), n > e || r > e) {
        const w = Math.min(e / n, e / r);
        g = Math.floor(n * w), A = Math.floor(r * w), a(this, He) || (l = b(this, it, pc).call(this, g, A));
      }
      const y = new OffscreenCanvas(g, A).getContext("2d", {
        willReadFrequently: !0
      });
      y.drawImage(l, 0, 0, l.width, l.height, 0, 0, g, A), f = {
        width: g,
        height: A,
        data: y.getImageData(0, 0, g, A).data
      };
    }
    return {
      canvas: u,
      width: h,
      height: d,
      imageData: f
    };
  }
  getImageForAltText() {
    return a(this, Os);
  }
  static async deserialize(e, s, i) {
    var A;
    let n = null;
    if (e instanceof lp) {
      const {
        data: {
          rect: _,
          rotation: y,
          id: w,
          structParent: E,
          popupRef: S
        },
        container: T,
        parent: {
          page: {
            pageNumber: x
          }
        }
      } = e, C = T.querySelector("canvas"), P = i.imageManager.getFromCanvas(T.id, C);
      C.remove();
      const R = ((A = await s._structTree.getAriaAttributes(`${Bd}${w}`)) == null ? void 0 : A.get("aria-label")) || "";
      n = e = {
        annotationType: J.STAMP,
        bitmapId: P.id,
        bitmap: P.bitmap,
        pageIndex: x - 1,
        rect: _.slice(0),
        rotation: y,
        id: w,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: R
        },
        isSvg: !1,
        structParent: E,
        popupRef: S
      };
    }
    const r = await super.deserialize(e, s, i), {
      rect: o,
      bitmap: l,
      bitmapUrl: h,
      bitmapId: d,
      isSvg: u,
      accessibilityData: f
    } = e;
    d && i.imageManager.isValidId(d) ? (m(r, ne, d), l && m(r, Lt, l)) : m(r, fi, h), m(r, He, u);
    const [p, g] = r.pageDimensions;
    return r.width = (o[2] - o[0]) / p, r.height = (o[3] - o[1]) / g, r.annotationElementId = e.id || null, f && (r.altTextData = f), r._initialData = n, m(r, La, !!n), r;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = {
      annotationType: J.STAMP,
      bitmapId: a(this, ne),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: a(this, He),
      structTreeParentId: this._structTreeParentId
    };
    if (e)
      return i.bitmapUrl = b(this, it, gc).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i;
    const {
      decorative: n,
      altText: r
    } = this.serializeAltText(!1);
    if (!n && r && (i.accessibilityData = {
      type: "Figure",
      alt: r
    }), this.annotationElementId) {
      const l = b(this, it, Jp).call(this, i);
      if (l.isSame)
        return null;
      l.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1;
    }
    if (i.id = this.annotationElementId, s === null)
      return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const o = a(this, He) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(a(this, ne)))
      s.stamps.set(a(this, ne), {
        area: o,
        serialized: i
      }), i.bitmap = b(this, it, gc).call(this, !1);
    else if (a(this, He)) {
      const l = s.stamps.get(a(this, ne));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = b(this, it, gc).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
};
Lt = new WeakMap(), ne = new WeakMap(), Ki = new WeakMap(), fi = new WeakMap(), Qi = new WeakMap(), Ra = new WeakMap(), Os = new WeakMap(), pi = new WeakMap(), Ns = new WeakMap(), He = new WeakMap(), La = new WeakMap(), it = new WeakSet(), eo = function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  m(this, Lt, e.bitmap), s || (m(this, ne, e.id), m(this, He, e.isSvg)), e.file && m(this, Ra, e.file.name), b(this, it, wd).call(this);
}, so = function() {
  if (m(this, Ki, null), this._uiManager.enableWaiting(!1), !!a(this, Os)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && a(this, Lt)) {
      this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && a(this, Lt)) {
      this._reportTelemetry({
        action: "pdfjs.image.image_added",
        data: {
          alt_text_modal: !1,
          alt_text_type: "empty"
        }
      });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, fc = function() {
  if (a(this, ne)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(a(this, ne)).then((i) => b(this, it, eo).call(this, i, !0)).finally(() => b(this, it, so).call(this));
    return;
  }
  if (a(this, fi)) {
    const i = a(this, fi);
    m(this, fi, null), this._uiManager.enableWaiting(!0), m(this, Ki, this._uiManager.imageManager.getFromUrl(i).then((n) => b(this, it, eo).call(this, n)).finally(() => b(this, it, so).call(this)));
    return;
  }
  if (a(this, Qi)) {
    const i = a(this, Qi);
    m(this, Qi, null), this._uiManager.enableWaiting(!0), m(this, Ki, this._uiManager.imageManager.getFromFile(i).then((n) => b(this, it, eo).call(this, n)).finally(() => b(this, it, so).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = oo.supportedTypesStr;
  const s = this._uiManager._signal;
  m(this, Ki, new Promise((i) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const n = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({
          action: "pdfjs.image.image_selected",
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow
          }
        }), b(this, it, eo).call(this, n);
      }
      i();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => b(this, it, so).call(this))), e.click();
}, wd = function() {
  const {
    div: e
  } = this;
  let {
    width: s,
    height: i
  } = a(this, Lt);
  const [n, r] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * n, i = this.height * r;
  else if (s > o * n || i > o * r) {
    const u = Math.min(o * n / s, o * r / i);
    s *= u, i *= u;
  }
  const [l, h] = this.parentDimensions;
  this.setDims(s * l / n, i * h / r), this._uiManager.enableWaiting(!1);
  const d = m(this, Os, document.createElement("canvas"));
  d.setAttribute("role", "img"), this.addContainer(d), (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), b(this, it, Ed).call(this, s, i), b(this, it, Qp).call(this), a(this, La) || (this.parent.addUndoableEditor(this), m(this, La, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), a(this, Ra) && d.setAttribute("aria-label", a(this, Ra));
}, Kp = function(e, s) {
  var o;
  const [i, n] = this.parentDimensions;
  this.width = e / i, this.height = s / n, (o = this._initialOptions) != null && o.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, a(this, Ns) !== null && clearTimeout(a(this, Ns)), m(this, Ns, setTimeout(() => {
    m(this, Ns, null), b(this, it, Ed).call(this, e, s);
  }, 200));
}, pc = function(e, s) {
  const {
    width: i,
    height: n
  } = a(this, Lt);
  let r = i, o = n, l = a(this, Lt);
  for (; r > 2 * e || o > 2 * s; ) {
    const h = r, d = o;
    r > 2 * e && (r = r >= 16384 ? Math.floor(r / 2) - 1 : Math.ceil(r / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(r, o);
    u.getContext("2d").drawImage(l, 0, 0, h, d, 0, 0, r, o), l = u.transferToImageBitmap();
  }
  return l;
}, Ed = function(e, s) {
  const i = new bh(), n = Math.ceil(e * i.sx), r = Math.ceil(s * i.sy), o = a(this, Os);
  if (!o || o.width === n && o.height === r)
    return;
  o.width = n, o.height = r;
  const l = a(this, He) ? a(this, Lt) : b(this, it, pc).call(this, n, r), h = o.getContext("2d");
  h.filter = this._uiManager.hcmFilter, h.drawImage(l, 0, 0, l.width, l.height, 0, 0, n, r);
}, gc = function(e) {
  if (e) {
    if (a(this, He)) {
      const n = this._uiManager.imageManager.getSvgUrl(a(this, ne));
      if (n)
        return n;
    }
    const s = document.createElement("canvas");
    return {
      width: s.width,
      height: s.height
    } = a(this, Lt), s.getContext("2d").drawImage(a(this, Lt), 0, 0), s.toDataURL();
  }
  if (a(this, He)) {
    const [s, i] = this.pageDimensions, n = Math.round(this.width * s * en.PDF_TO_CSS_UNITS), r = Math.round(this.height * i * en.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(n, r);
    return o.getContext("2d").drawImage(a(this, Lt), 0, 0, a(this, Lt).width, a(this, Lt).height, 0, 0, n, r), o.transferToImageBitmap();
  }
  return structuredClone(a(this, Lt));
}, Qp = function() {
  this._uiManager._signal && (m(this, pi, new ResizeObserver((e) => {
    const s = e[0].contentRect;
    s.width && s.height && b(this, it, Kp).call(this, s.width, s.height);
  })), a(this, pi).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var e;
    (e = a(this, pi)) == null || e.disconnect(), m(this, pi, null);
  }, {
    once: !0
  }));
}, Jp = function(e) {
  var h;
  const {
    rect: s,
    pageIndex: i,
    accessibilityData: {
      altText: n
    }
  } = this._initialData, r = e.rect.every((d, u) => Math.abs(d - s[u]) < 1), o = e.pageIndex === i, l = (((h = e.accessibilityData) == null ? void 0 : h.alt) || "") === n;
  return {
    isSame: r && o && l,
    isSameAltText: l
  };
}, W(oo, "_type", "stamp"), W(oo, "_editorType", J.STAMP);
let _d = oo;
var hr, ka, Hs, Ji, gi, Be, Zi, Ma, Ia, ue, mi, z, tn, re, Zp, xd, Td, Cd, mc;
const ts = class ts {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: s,
    structTreeLayer: i,
    accessibilityManager: n,
    annotationLayer: r,
    drawLayer: o,
    textLayer: l,
    viewport: h,
    l10n: d
  }) {
    v(this, re);
    v(this, hr);
    v(this, ka, !1);
    v(this, Hs, null);
    v(this, Ji, null);
    v(this, gi, null);
    v(this, Be, /* @__PURE__ */ new Map());
    v(this, Zi, !1);
    v(this, Ma, !1);
    v(this, Ia, !1);
    v(this, ue, null);
    v(this, mi, null);
    v(this, z);
    const u = [...a(ts, tn).values()];
    if (!ts._initialized) {
      ts._initialized = !0;
      for (const f of u)
        f.initialize(d, t);
    }
    t.registerEditorTypes(u), m(this, z, t), this.pageIndex = e, this.div = s, m(this, hr, n), m(this, Hs, r), this.viewport = h, m(this, ue, l), this.drawLayer = o, this._structTree = i, a(this, z).addLayer(this);
  }
  get isEmpty() {
    return a(this, Be).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && a(this, z).getMode() === J.NONE;
  }
  updateToolbar(t) {
    a(this, z).updateToolbar(t);
  }
  updateMode(t = a(this, z).getMode()) {
    switch (b(this, re, mc).call(this), t) {
      case J.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case J.INK:
        this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
        break;
      case J.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    for (const s of a(ts, tn).values())
      e.toggle(`${s._type}Editing`, t === s._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = a(this, ue)) == null ? void 0 : e.div);
  }
  addInkEditorIfNeeded(t) {
    if (a(this, z).getMode() !== J.INK)
      return;
    if (!t) {
      for (const s of a(this, Be).values())
        if (s.isEmpty()) {
          s.setInBackground();
          return;
        }
    }
    this.createAndAddNewEditor({
      offsetX: 0,
      offsetY: 0
    }, !1).setInBackground();
  }
  setEditingState(t) {
    a(this, z).setEditingState(t);
  }
  addCommands(t) {
    a(this, z).addCommands(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = a(this, Hs)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const t = /* @__PURE__ */ new Set();
    for (const s of a(this, Be).values())
      s.enableEditing(), s.show(!0), s.annotationElementId && (a(this, z).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    if (!a(this, Hs))
      return;
    const e = a(this, Hs).getEditableAnnotations();
    for (const s of e) {
      if (s.hide(), a(this, z).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
        continue;
      const i = await this.deserialize(s);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
  }
  disable() {
    var i;
    m(this, Ia, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const n of a(this, Be).values())
      if (n.disableEditing(), !!n.annotationElementId) {
        if (n.serialize() !== null) {
          t.set(n.annotationElementId, n);
          continue;
        } else
          e.set(n.annotationElementId, n);
        (i = this.getEditableAnnotation(n.annotationElementId)) == null || i.show(), n.remove();
      }
    if (a(this, Hs)) {
      const n = a(this, Hs).getEditableAnnotations();
      for (const r of n) {
        const {
          id: o
        } = r.data;
        if (a(this, z).isDeletedAnnotationElement(o))
          continue;
        let l = e.get(o);
        if (l) {
          l.resetAnnotationElement(r), l.show(!1), r.show();
          continue;
        }
        l = t.get(o), l && (a(this, z).addChangedExistingAnnotation(l), l.renderAnnotationElement(r) && l.show(!1)), r.show();
      }
    }
    b(this, re, mc).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const n of a(ts, tn).values())
      s.remove(`${n._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), m(this, Ia, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = a(this, Hs)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    a(this, z).getActive() !== t && a(this, z).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = a(this, ue)) != null && t.div && !a(this, mi)) {
      m(this, mi, new AbortController());
      const e = a(this, z).combinedSignal(a(this, mi));
      a(this, ue).div.addEventListener("pointerdown", b(this, re, Zp).bind(this), {
        signal: e
      }), a(this, ue).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = a(this, ue)) != null && t.div && a(this, mi) && (a(this, mi).abort(), m(this, mi, null), a(this, ue).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (a(this, Ji))
      return;
    m(this, Ji, new AbortController());
    const t = a(this, z).combinedSignal(a(this, Ji));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t
    }), this.div.addEventListener("pointerup", this.pointerup.bind(this), {
      signal: t
    });
  }
  disableClick() {
    var t;
    (t = a(this, Ji)) == null || t.abort(), m(this, Ji, null);
  }
  attach(t) {
    a(this, Be).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && a(this, z).isDeletedAnnotationElement(e) && a(this, z).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    a(this, Be).delete(t.id), (e = a(this, hr)) == null || e.removePointerInTextLayer(t.contentDiv), !a(this, Ia) && t.annotationElementId && a(this, z).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), a(this, z).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1, a(this, Ma) || this.addInkEditorIfNeeded(!1);
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (a(this, z).addDeletedAnnotationElement(t.annotationElementId), gt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), a(this, z).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(), a(this, z).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var s;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !a(this, gi) && (t._focusEventsAllowed = !1, m(this, gi, setTimeout(() => {
      m(this, gi, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: a(this, z)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (s = a(this, hr)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), s = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: s,
      mustExec: !1
    });
  }
  getNextId() {
    return a(this, z).getId();
  }
  combinedSignal(t) {
    return a(this, z).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = a(this, re, xd)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    a(this, z).updateToolbar(t), a(this, z).updateMode(t);
    const {
      offsetX: s,
      offsetY: i
    } = b(this, re, Cd).call(this), n = this.getNextId(), r = b(this, re, Td).call(this, {
      parent: this,
      id: n,
      x: s,
      y: i,
      uiManager: a(this, z),
      isCentered: !0,
      ...e
    });
    r && this.add(r);
  }
  async deserialize(t) {
    var e;
    return await ((e = a(ts, tn).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, a(this, z))) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = this.getNextId(), n = b(this, re, Td).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: a(this, z),
      isCentered: e,
      ...s
    });
    return n && this.add(n), n;
  }
  addNewEditor() {
    this.createAndAddNewEditor(b(this, re, Cd).call(this), !0);
  }
  setSelected(t) {
    a(this, z).setSelected(t);
  }
  toggleSelected(t) {
    a(this, z).toggleSelected(t);
  }
  unselect(t) {
    a(this, z).unselect(t);
  }
  pointerup(t) {
    const {
      isMac: e
    } = ve.platform;
    if (!(t.button !== 0 || t.ctrlKey && e) && t.target === this.div && a(this, Zi)) {
      if (m(this, Zi, !1), !a(this, ka)) {
        m(this, ka, !0);
        return;
      }
      if (a(this, z).getMode() === J.STAMP) {
        a(this, z).unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, !1);
    }
  }
  pointerdown(t) {
    if (a(this, z).getMode() === J.HIGHLIGHT && this.enableTextSelection(), a(this, Zi)) {
      m(this, Zi, !1);
      return;
    }
    const {
      isMac: e
    } = ve.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    m(this, Zi, !0);
    const s = a(this, z).getActive();
    m(this, ka, !s || s.isEmpty());
  }
  findNewParent(t, e, s) {
    const i = a(this, z).findParent(e, s);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  destroy() {
    var t, e;
    ((t = a(this, z).getActive()) == null ? void 0 : t.parent) === this && (a(this, z).commitOrRemove(), a(this, z).setActiveEditor(null)), a(this, gi) && (clearTimeout(a(this, gi)), m(this, gi, null));
    for (const s of a(this, Be).values())
      (e = a(this, hr)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, a(this, Be).clear(), a(this, z).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, ur(this.div, t);
    for (const e of a(this, z).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    a(this, z).commitOrRemove(), b(this, re, mc).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, ur(this.div, {
      rotation: s
    }), e !== s)
      for (const i of a(this, Be).values())
        i.rotate(s);
    this.addInkEditorIfNeeded(!1);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return a(this, z).viewParameters.realScale;
  }
};
hr = new WeakMap(), ka = new WeakMap(), Hs = new WeakMap(), Ji = new WeakMap(), gi = new WeakMap(), Be = new WeakMap(), Zi = new WeakMap(), Ma = new WeakMap(), Ia = new WeakMap(), ue = new WeakMap(), mi = new WeakMap(), z = new WeakMap(), tn = new WeakMap(), re = new WeakSet(), Zp = function(t) {
  a(this, z).unselectAll();
  const {
    target: e
  } = t;
  if (e === a(this, ue).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && a(this, ue).div.contains(e)) {
    const {
      isMac: s
    } = ve.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    a(this, z).showAllEditors("highlight", !0, !0), a(this, ue).div.classList.add("free"), this.toggleDrawing(), wc.startHighlighting(this, a(this, z).direction === "ltr", {
      target: a(this, ue).div,
      x: t.x,
      y: t.y
    }), a(this, ue).div.addEventListener("pointerup", () => {
      a(this, ue).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: a(this, z)._signal
    }), t.preventDefault();
  }
}, xd = function() {
  return a(ts, tn).get(a(this, z).getMode());
}, Td = function(t) {
  const e = a(this, re, xd);
  return e ? new e.prototype.constructor(t) : null;
}, Cd = function() {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = this.div.getBoundingClientRect(), n = Math.max(0, t), r = Math.max(0, e), o = Math.min(window.innerWidth, t + s), l = Math.min(window.innerHeight, e + i), h = (n + o) / 2 - t, d = (r + l) / 2 - e, [u, f] = this.viewport.rotation % 180 === 0 ? [h, d] : [d, h];
  return {
    offsetX: u,
    offsetY: f
  };
}, mc = function() {
  m(this, Ma, !0);
  for (const t of a(this, Be).values())
    t.isEmpty() && t.remove();
  m(this, Ma, !1);
}, W(ts, "_initialized", !1), v(ts, tn, new Map([id, ud, _d, wc].map((t) => [t._editorType, t])));
let Sd = ts;
var Bs, Tl, jt, bi, Cl, Rd, br, Ld, tg;
const ee = class ee {
  constructor({
    pageIndex: t
  }) {
    v(this, br);
    v(this, Bs, null);
    v(this, Tl, 0);
    v(this, jt, /* @__PURE__ */ new Map());
    v(this, bi, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!a(this, Bs)) {
      m(this, Bs, t);
      return;
    }
    if (a(this, Bs) !== t) {
      if (a(this, jt).size > 0)
        for (const e of a(this, jt).values())
          e.remove(), t.append(e);
      m(this, Bs, t);
    }
  }
  static get _svgFactory() {
    return nt(this, "_svgFactory", new Yd());
  }
  draw(t, e, s, i = !1) {
    const n = ge(this, Tl)._++, r = b(this, br, Ld).call(this, t.box);
    r.classList.add(...t.classNamesForDrawing);
    const o = ee._svgFactory.createElement("defs");
    r.append(o);
    const l = ee._svgFactory.createElement("path");
    o.append(l);
    const h = `path_p${this.pageIndex}_${n}`;
    l.setAttribute("id", h), l.setAttribute("d", t.toSVGPath()), i && a(this, bi).set(n, l);
    const d = b(this, br, tg).call(this, o, h), u = ee._svgFactory.createElement("use");
    return r.append(u), r.setAttribute("fill", e), r.setAttribute("fill-opacity", s), u.setAttribute("href", `#${h}`), a(this, jt).set(n, r), {
      id: n,
      clipPathId: `url(#${d})`
    };
  }
  drawOutline(t) {
    const e = ge(this, Tl)._++, s = b(this, br, Ld).call(this, t.box);
    s.classList.add(...t.classNamesForOutlining);
    const i = ee._svgFactory.createElement("defs");
    s.append(i);
    const n = ee._svgFactory.createElement("path");
    i.append(n);
    const r = `path_p${this.pageIndex}_${e}`;
    n.setAttribute("id", r), n.setAttribute("d", t.toSVGPath()), n.setAttribute("vector-effect", "non-scaling-stroke");
    let o;
    if (t.mustRemoveSelfIntersections) {
      const d = ee._svgFactory.createElement("mask");
      i.append(d), o = `mask_p${this.pageIndex}_${e}`, d.setAttribute("id", o), d.setAttribute("maskUnits", "objectBoundingBox");
      const u = ee._svgFactory.createElement("rect");
      d.append(u), u.setAttribute("width", "1"), u.setAttribute("height", "1"), u.setAttribute("fill", "white");
      const f = ee._svgFactory.createElement("use");
      d.append(f), f.setAttribute("href", `#${r}`), f.setAttribute("stroke", "none"), f.setAttribute("fill", "black"), f.setAttribute("fill-rule", "nonzero"), f.classList.add("mask");
    }
    const l = ee._svgFactory.createElement("use");
    s.append(l), l.setAttribute("href", `#${r}`), o && l.setAttribute("mask", `url(#${o})`);
    const h = l.cloneNode();
    return s.append(h), l.classList.add("mainOutline"), h.classList.add("secondaryOutline"), a(this, jt).set(e, s), e;
  }
  finalizeLine(t, e) {
    const s = a(this, bi).get(t);
    a(this, bi).delete(t), this.updateBox(t, e.box), s.setAttribute("d", e.toSVGPath());
  }
  updateLine(t, e) {
    a(this, jt).get(t).firstChild.firstChild.setAttribute("d", e.toSVGPath());
  }
  updatePath(t, e) {
    a(this, bi).get(t).setAttribute("d", e.toSVGPath());
  }
  updateBox(t, e) {
    var s;
    b(s = ee, Cl, Rd).call(s, a(this, jt).get(t), e);
  }
  show(t, e) {
    a(this, jt).get(t).classList.toggle("hidden", !e);
  }
  rotate(t, e) {
    a(this, jt).get(t).setAttribute("data-main-rotation", e);
  }
  changeColor(t, e) {
    a(this, jt).get(t).setAttribute("fill", e);
  }
  changeOpacity(t, e) {
    a(this, jt).get(t).setAttribute("fill-opacity", e);
  }
  addClass(t, e) {
    a(this, jt).get(t).classList.add(e);
  }
  removeClass(t, e) {
    a(this, jt).get(t).classList.remove(e);
  }
  getSVGRoot(t) {
    return a(this, jt).get(t);
  }
  remove(t) {
    a(this, bi).delete(t), a(this, Bs) !== null && (a(this, jt).get(t).remove(), a(this, jt).delete(t));
  }
  destroy() {
    m(this, Bs, null);
    for (const t of a(this, jt).values())
      t.remove();
    a(this, jt).clear(), a(this, bi).clear();
  }
};
Bs = new WeakMap(), Tl = new WeakMap(), jt = new WeakMap(), bi = new WeakMap(), Cl = new WeakSet(), Rd = function(t, {
  x: e = 0,
  y: s = 0,
  width: i = 1,
  height: n = 1
} = {}) {
  const {
    style: r
  } = t;
  r.top = `${100 * s}%`, r.left = `${100 * e}%`, r.width = `${100 * i}%`, r.height = `${100 * n}%`;
}, br = new WeakSet(), Ld = function(t) {
  var s;
  const e = ee._svgFactory.create(1, 1, !0);
  return a(this, Bs).append(e), e.setAttribute("aria-hidden", !0), b(s = ee, Cl, Rd).call(s, e, t), e;
}, tg = function(t, e) {
  const s = ee._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const n = ee._svgFactory.createElement("use");
  return s.append(n), n.setAttribute("href", `#${e}`), n.classList.add("clip"), i;
}, v(ee, Cl);
let Pd = ee;
var pA = Y.AbortException, gA = Y.AnnotationEditorLayer, mA = Y.AnnotationEditorParamsType, bA = Y.AnnotationEditorType, AA = Y.AnnotationEditorUIManager, eg = Y.AnnotationLayer, sg = Y.AnnotationMode, yA = Y.ColorPicker, vA = Y.DOMSVGFactory, _A = Y.DrawLayer, wA = Y.FeatureTest, Qd = Y.GlobalWorkerOptions, EA = Y.ImageKind, SA = Y.InvalidPDFException, xA = Y.MissingPDFException, TA = Y.OPS, CA = Y.OutputScale, PA = Y.PDFDataRangeTransport, RA = Y.PDFDateString, LA = Y.PDFWorker, kA = Y.PasswordResponses, MA = Y.PermissionFlag, IA = Y.PixelsPerInch, FA = Y.RenderingCancelledException, ig = Y.TextLayer, DA = Y.UnexpectedResponseException, OA = Y.Util, NA = Y.VerbosityLevel, HA = Y.XfaLayer, BA = Y.build, jA = Y.createValidAbsoluteUrl, zA = Y.fetchData, ng = Y.getDocument, GA = Y.getFilenameFromUrl, UA = Y.getPdfFilenameFromUrl, $A = Y.getXfaPageViewport, VA = Y.isDataScheme, WA = Y.isPdfFile, qA = Y.noContextMenu, XA = Y.normalizeUnicode, YA = Y.setLayerDimensions, KA = Y.shadow, rg = Y.version;
const QA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: pA,
  AnnotationEditorLayer: gA,
  AnnotationEditorParamsType: mA,
  AnnotationEditorType: bA,
  AnnotationEditorUIManager: AA,
  AnnotationLayer: eg,
  AnnotationMode: sg,
  ColorPicker: yA,
  DOMSVGFactory: vA,
  DrawLayer: _A,
  FeatureTest: wA,
  GlobalWorkerOptions: Qd,
  ImageKind: EA,
  InvalidPDFException: SA,
  MissingPDFException: xA,
  OPS: TA,
  OutputScale: CA,
  PDFDataRangeTransport: PA,
  PDFDateString: RA,
  PDFWorker: LA,
  PasswordResponses: kA,
  PermissionFlag: MA,
  PixelsPerInch: IA,
  RenderingCancelledException: FA,
  TextLayer: ig,
  UnexpectedResponseException: DA,
  Util: OA,
  VerbosityLevel: NA,
  XfaLayer: HA,
  build: BA,
  createValidAbsoluteUrl: jA,
  fetchData: zA,
  getDocument: ng,
  getFilenameFromUrl: GA,
  getPdfFilenameFromUrl: UA,
  getXfaPageViewport: $A,
  isDataScheme: VA,
  isPdfFile: WA,
  noContextMenu: qA,
  normalizeUnicode: XA,
  setLayerDimensions: YA,
  shadow: KA,
  version: rg
}, Symbol.toStringTag, { value: "Module" }));
var Xt = function(c, t, e) {
  if (e || arguments.length === 2) for (var s = 0, i = t.length, n; s < i; s++)
    (n || !(s in t)) && (n || (n = Array.prototype.slice.call(t, 0, s)), n[s] = t[s]);
  return c.concat(n || Array.prototype.slice.call(t));
}, JA = ["onCopy", "onCut", "onPaste"], ZA = [
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate"
], ty = ["onFocus", "onBlur"], ey = ["onInput", "onInvalid", "onReset", "onSubmit"], sy = ["onLoad", "onError"], iy = ["onKeyDown", "onKeyPress", "onKeyUp"], ny = [
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onError",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting"
], ry = [
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp"
], ay = [
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop"
], oy = ["onSelect"], ly = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"], cy = [
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut"
], hy = ["onScroll"], dy = ["onWheel"], uy = [
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration"
], fy = ["onTransitionEnd"], py = ["onToggle"], gy = ["onChange"], my = Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt([], JA, !0), ZA, !0), ty, !0), ey, !0), sy, !0), iy, !0), ny, !0), ry, !0), ay, !0), oy, !0), ly, !0), cy, !0), hy, !0), dy, !0), uy, !0), fy, !0), gy, !0), py, !0);
function ag(c, t) {
  var e = {};
  return my.forEach(function(s) {
    var i = c[s];
    i && (t ? e[s] = function(n) {
      return i(n, t(s));
    } : e[s] = i);
  }), e;
}
function Ml(c) {
  var t = !1, e = new Promise(function(s, i) {
    c.then(function(n) {
      return !t && s(n);
    }).catch(function(n) {
      return !t && i(n);
    });
  });
  return {
    promise: e,
    cancel: function() {
      t = !0;
    }
  };
}
function og(c) {
  var t, e, s = "";
  if (typeof c == "string" || typeof c == "number") s += c;
  else if (typeof c == "object") if (Array.isArray(c)) {
    var i = c.length;
    for (t = 0; t < i; t++) c[t] && (e = og(c[t])) && (s && (s += " "), s += e);
  } else for (e in c) c[e] && (s && (s += " "), s += e);
  return s;
}
function Yc() {
  for (var c, t, e = 0, s = "", i = arguments.length; e < i; e++) (c = arguments[e]) && (t = og(c)) && (s && (s += " "), s += t);
  return s;
}
var by = process.env.NODE_ENV === "production", ch = "Invariant failed";
function vt(c, t) {
  if (!c) {
    if (by)
      throw new Error(ch);
    var e = typeof t == "function" ? t() : t, s = e ? "".concat(ch, ": ").concat(e) : ch;
    throw new Error(s);
  }
}
var Ay = process.env.NODE_ENV !== "production", lg = function() {
};
if (Ay) {
  var yy = function(t, e) {
    var s = arguments.length;
    e = new Array(s > 1 ? s - 1 : 0);
    for (var i = 1; i < s; i++)
      e[i - 1] = arguments[i];
    var n = 0, r = "Warning: " + t.replace(/%s/g, function() {
      return e[n++];
    });
    typeof console < "u" && console.error(r);
    try {
      throw new Error(r);
    } catch {
    }
  };
  lg = function(c, t, e) {
    var s = arguments.length;
    e = new Array(s > 2 ? s - 2 : 0);
    for (var i = 2; i < s; i++)
      e[i - 2] = arguments[i];
    if (t === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    c || yy.apply(null, [t].concat(e));
  };
}
var vy = lg;
const fe = /* @__PURE__ */ Vu(vy);
var ku = Object.prototype.hasOwnProperty;
function Mu(c, t, e) {
  for (e of c.keys())
    if (Fr(e, t)) return e;
}
function Fr(c, t) {
  var e, s, i;
  if (c === t) return !0;
  if (c && t && (e = c.constructor) === t.constructor) {
    if (e === Date) return c.getTime() === t.getTime();
    if (e === RegExp) return c.toString() === t.toString();
    if (e === Array) {
      if ((s = c.length) === t.length)
        for (; s-- && Fr(c[s], t[s]); ) ;
      return s === -1;
    }
    if (e === Set) {
      if (c.size !== t.size)
        return !1;
      for (s of c)
        if (i = s, i && typeof i == "object" && (i = Mu(t, i), !i) || !t.has(i)) return !1;
      return !0;
    }
    if (e === Map) {
      if (c.size !== t.size)
        return !1;
      for (s of c)
        if (i = s[0], i && typeof i == "object" && (i = Mu(t, i), !i) || !Fr(s[1], t.get(i)))
          return !1;
      return !0;
    }
    if (e === ArrayBuffer)
      c = new Uint8Array(c), t = new Uint8Array(t);
    else if (e === DataView) {
      if ((s = c.byteLength) === t.byteLength)
        for (; s-- && c.getInt8(s) === t.getInt8(s); ) ;
      return s === -1;
    }
    if (ArrayBuffer.isView(c)) {
      if ((s = c.byteLength) === t.byteLength)
        for (; s-- && c[s] === t[s]; ) ;
      return s === -1;
    }
    if (!e || typeof c == "object") {
      s = 0;
      for (e in c)
        if (ku.call(c, e) && ++s && !ku.call(t, e) || !(e in t) || !Fr(c[e], t[e])) return !1;
      return Object.keys(t).length === s;
    }
  }
  return c !== c && t !== t;
}
const cg = Uu(null);
function Dr({ children: c, type: t }) {
  return ot("div", { className: `react-pdf__message react-pdf__message--${t}`, children: c });
}
const _y = "noopener noreferrer nofollow";
class wy {
  constructor() {
    this.externalLinkEnabled = !0, this.externalLinkRel = void 0, this.externalLinkTarget = void 0, this.isInPresentationMode = !1, this.pdfDocument = void 0, this.pdfViewer = void 0;
  }
  setDocument(t) {
    this.pdfDocument = t;
  }
  setViewer(t) {
    this.pdfViewer = t;
  }
  setExternalLinkRel(t) {
    this.externalLinkRel = t;
  }
  setExternalLinkTarget(t) {
    this.externalLinkTarget = t;
  }
  setHistory() {
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    return vt(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber || 0;
  }
  set page(t) {
    vt(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber = t;
  }
  get rotation() {
    return 0;
  }
  set rotation(t) {
  }
  goToDestination(t) {
    return new Promise((e) => {
      vt(this.pdfDocument, "PDF document not loaded."), vt(t, "Destination is not specified."), typeof t == "string" ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e);
    }).then((e) => {
      vt(Array.isArray(e), `"${e}" is not a valid destination array.`);
      const s = e[0];
      new Promise((i) => {
        vt(this.pdfDocument, "PDF document not loaded."), s instanceof Object ? this.pdfDocument.getPageIndex(s).then((n) => {
          i(n);
        }).catch(() => {
          vt(!1, `"${s}" is not a valid page reference.`);
        }) : typeof s == "number" ? i(s) : vt(!1, `"${s}" is not a valid destination reference.`);
      }).then((i) => {
        const n = i + 1;
        vt(this.pdfViewer, "PDF viewer is not initialized."), vt(n >= 1 && n <= this.pagesCount, `"${n}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
          dest: e,
          pageIndex: i,
          pageNumber: n
        });
      });
    });
  }
  navigateTo(t) {
    this.goToDestination(t);
  }
  goToPage(t) {
    const e = t - 1;
    vt(this.pdfViewer, "PDF viewer is not initialized."), vt(t >= 1 && t <= this.pagesCount, `"${t}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
      pageIndex: e,
      pageNumber: t
    });
  }
  addLinkAttributes(t, e, s) {
    t.href = e, t.rel = this.externalLinkRel || _y, t.target = s ? "_blank" : this.externalLinkTarget || "";
  }
  getDestinationHash() {
    return "#";
  }
  getAnchorUrl() {
    return "#";
  }
  setHash() {
  }
  executeNamedAction() {
  }
  cachePageRef() {
  }
  isPageVisible() {
    return !0;
  }
  isPageCached() {
    return !0;
  }
  executeSetOCGState() {
  }
}
const Iu = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
}, Kc = typeof window < "u", hg = Kc && window.location.protocol === "file:";
function Ey(c) {
  return typeof c < "u";
}
function ln(c) {
  return Ey(c) && c !== null;
}
function Sy(c) {
  return typeof c == "string";
}
function xy(c) {
  return c instanceof ArrayBuffer;
}
function Ty(c) {
  return vt(Kc, "isBlob can only be used in a browser environment"), c instanceof Blob;
}
function kd(c) {
  return Sy(c) && /^data:/.test(c);
}
function Fu(c) {
  vt(kd(c), "Invalid data URI.");
  const [t = "", e = ""] = c.split(",");
  return t.split(";").indexOf("base64") !== -1 ? atob(e) : unescape(e);
}
function Cy() {
  return Kc && window.devicePixelRatio || 1;
}
const dg = "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";
function Du() {
  fe(!hg, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${dg}`);
}
function Py() {
  fe(!hg, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${dg}`);
}
function gr(c) {
  c != null && c.cancel && c.cancel();
}
function Md(c, t) {
  return Object.defineProperty(c, "width", {
    get() {
      return this.view[2] * t;
    },
    configurable: !0
  }), Object.defineProperty(c, "height", {
    get() {
      return this.view[3] * t;
    },
    configurable: !0
  }), Object.defineProperty(c, "originalWidth", {
    get() {
      return this.view[2];
    },
    configurable: !0
  }), Object.defineProperty(c, "originalHeight", {
    get() {
      return this.view[3];
    },
    configurable: !0
  }), c;
}
function Ry(c) {
  return c.name === "RenderingCancelledException";
}
function Ly(c) {
  return new Promise((t, e) => {
    const s = new FileReader();
    s.onload = () => {
      if (!s.result)
        return e(new Error("Error while reading a file."));
      t(s.result);
    }, s.onerror = (i) => {
      if (!i.target)
        return e(new Error("Error while reading a file."));
      const { error: n } = i.target;
      if (!n)
        return e(new Error("Error while reading a file."));
      switch (n.code) {
        case n.NOT_FOUND_ERR:
          return e(new Error("Error while reading a file: File not found."));
        case n.SECURITY_ERR:
          return e(new Error("Error while reading a file: Security error."));
        case n.ABORT_ERR:
          return e(new Error("Error while reading a file: Aborted."));
        default:
          return e(new Error("Error while reading a file."));
      }
    }, s.readAsArrayBuffer(c);
  });
}
function ky(c, t) {
  switch (t.type) {
    case "RESOLVE":
      return { value: t.value, error: void 0 };
    case "REJECT":
      return { value: !1, error: t.error };
    case "RESET":
      return { value: void 0, error: void 0 };
    default:
      return c;
  }
}
function Fa() {
  return Rg(ky, { value: void 0, error: void 0 });
}
var My = function(c, t, e, s) {
  function i(n) {
    return n instanceof e ? n : new e(function(r) {
      r(n);
    });
  }
  return new (e || (e = Promise))(function(n, r) {
    function o(d) {
      try {
        h(s.next(d));
      } catch (u) {
        r(u);
      }
    }
    function l(d) {
      try {
        h(s.throw(d));
      } catch (u) {
        r(u);
      }
    }
    function h(d) {
      d.done ? n(d.value) : i(d.value).then(o, l);
    }
    h((s = s.apply(c, t || [])).next());
  });
}, Ou = function(c, t) {
  var e = {};
  for (var s in c) Object.prototype.hasOwnProperty.call(c, s) && t.indexOf(s) < 0 && (e[s] = c[s]);
  if (c != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, s = Object.getOwnPropertySymbols(c); i < s.length; i++)
      t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(c, s[i]) && (e[s[i]] = c[s[i]]);
  return e;
};
const { PDFDataRangeTransport: Iy } = QA, Fy = (c, t) => {
  switch (t) {
    case Iu.NEED_PASSWORD: {
      const e = prompt("Enter the password to open this PDF file.");
      c(e);
      break;
    }
    case Iu.INCORRECT_PASSWORD: {
      const e = prompt("Invalid password. Please try again.");
      c(e);
      break;
    }
  }
};
function Nu(c) {
  return typeof c == "object" && c !== null && ("data" in c || "range" in c || "url" in c);
}
const Dy = Lg(function(t, e) {
  var { children: s, className: i, error: n = "Failed to load PDF file.", externalLinkRel: r, externalLinkTarget: o, file: l, inputRef: h, imageResourcesPath: d, loading: u = "Loading PDF…", noData: f = "No PDF file specified.", onItemClick: p, onLoadError: g, onLoadProgress: A, onLoadSuccess: _, onPassword: y = Fy, onSourceError: w, onSourceSuccess: E, options: S, renderMode: T, rotate: x } = t, C = Ou(t, ["children", "className", "error", "externalLinkRel", "externalLinkTarget", "file", "inputRef", "imageResourcesPath", "loading", "noData", "onItemClick", "onLoadError", "onLoadProgress", "onLoadSuccess", "onPassword", "onSourceError", "onSourceSuccess", "options", "renderMode", "rotate"]);
  const [P, R] = Fa(), { value: k, error: L } = P, [U, j] = Fa(), { value: H, error: $ } = U, V = gs(new wy()), F = gs([]), N = gs(void 0), _t = gs(void 0);
  l && l !== N.current && Nu(l) && (fe(!Fr(l, N.current), `File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`), N.current = l), S && S !== _t.current && (fe(!Fr(S, _t.current), `Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`), _t.current = S);
  const Dt = gs({
    // Handling jumping to internal links target
    scrollPageIntoView: (G) => {
      const { dest: Q, pageNumber: at, pageIndex: ut = at - 1 } = G;
      if (p) {
        p({ dest: Q, pageIndex: ut, pageNumber: at });
        return;
      }
      const ae = F.current[ut];
      if (ae) {
        ae.scrollIntoView();
        return;
      }
      fe(!1, `An internal link leading to page ${at} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
    }
  });
  kg(e, () => ({
    linkService: V,
    pages: F,
    viewer: Dt
  }), []);
  function At() {
    E && E();
  }
  function ht() {
    L && (fe(!1, L.toString()), w && w(L));
  }
  function rt() {
    R({ type: "RESET" });
  }
  St(rt, [l, R]);
  const Tt = js(() => My(this, void 0, void 0, function* () {
    if (!l)
      return null;
    if (typeof l == "string")
      return kd(l) ? { data: Fu(l) } : (Du(), { url: l });
    if (l instanceof Iy)
      return { range: l };
    if (xy(l))
      return { data: l };
    if (Kc && Ty(l))
      return { data: yield Ly(l) };
    if (vt(typeof l == "object", "Invalid parameter in file, need either Uint8Array, string or a parameter object"), vt(Nu(l), "Invalid parameter object: need either .data, .range or .url"), "url" in l && typeof l.url == "string") {
      if (kd(l.url)) {
        const { url: G } = l, Q = Ou(l, ["url"]), at = Fu(G);
        return Object.assign({ data: at }, Q);
      }
      Du();
    }
    return l;
  }), [l]);
  St(() => {
    const G = Ml(Tt());
    return G.promise.then((Q) => {
      R({ type: "RESOLVE", value: Q });
    }).catch((Q) => {
      R({ type: "REJECT", error: Q });
    }), () => {
      gr(G);
    };
  }, [Tt, R]), St(() => {
    if (!(typeof k > "u")) {
      if (k === !1) {
        ht();
        return;
      }
      At();
    }
  }, [k]);
  function te() {
    H && (_ && _(H), F.current = new Array(H.numPages), V.current.setDocument(H));
  }
  function yt() {
    $ && (fe(!1, $.toString()), g && g($));
  }
  St(function() {
    j({ type: "RESET" });
  }, [j, k]), St(function() {
    if (!k)
      return;
    const Q = S ? Object.assign(Object.assign({}, k), S) : k, at = ng(Q);
    A && (at.onProgress = A), y && (at.onPassword = y);
    const ut = at, ae = ut.promise.then((Le) => {
      j({ type: "RESOLVE", value: Le });
    }).catch((Le) => {
      ut.destroyed || j({ type: "REJECT", error: Le });
    });
    return () => {
      ae.finally(() => ut.destroy());
    };
  }, [S, j, k]), St(() => {
    if (!(typeof H > "u")) {
      if (H === !1) {
        yt();
        return;
      }
      te();
    }
  }, [H]), St(function() {
    V.current.setViewer(Dt.current), V.current.setExternalLinkRel(r), V.current.setExternalLinkTarget(o);
  }, [r, o]);
  const X = js((G, Q) => {
    F.current[G] = Q;
  }, []), wt = js((G) => {
    delete F.current[G];
  }, []), Ot = Ge(() => ({
    imageResourcesPath: d,
    linkService: V.current,
    onItemClick: p,
    pdf: H,
    registerPage: X,
    renderMode: T,
    rotate: x,
    unregisterPage: wt
  }), [d, p, H, X, T, x, wt]), st = Ge(
    () => ag(C, () => H),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [C, H]
  );
  function dt() {
    return ot(cg.Provider, { value: Ot, children: s });
  }
  function O() {
    return l ? H == null ? ot(Dr, { type: "loading", children: typeof u == "function" ? u() : u }) : H === !1 ? ot(Dr, { type: "error", children: typeof n == "function" ? n() : n }) : dt() : ot(Dr, { type: "no-data", children: typeof f == "function" ? f() : f });
  }
  return ot("div", Object.assign({
    className: Yc("react-pdf__Document", i),
    // Assertion is needed for React 18 compatibility
    ref: h,
    style: {
      "--scale-factor": "1"
    }
  }, st, { children: O() }));
});
function ug() {
  return $u(cg);
}
function fg() {
  for (var c = [], t = 0; t < arguments.length; t++)
    c[t] = arguments[t];
  var e = c.filter(Boolean);
  if (e.length <= 1) {
    var s = e[0];
    return s || null;
  }
  return function(n) {
    e.forEach(function(r) {
      typeof r == "function" ? r(n) : r && (r.current = n);
    });
  };
}
const pg = Uu(null), gg = {
  // Document level structure types
  Document: null,
  // There's a "document" role, but it doesn't make sense here.
  DocumentFragment: null,
  // Grouping level structure types
  Part: "group",
  Sect: "group",
  // XXX: There's a "section" role, but it's abstract.
  Div: "group",
  Aside: "note",
  NonStruct: "none",
  // Block level structure types
  P: null,
  // H<n>,
  H: "heading",
  Title: null,
  FENote: "note",
  // Sub-block level structure type
  Sub: "group",
  // General inline level structure types
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: "link",
  Annot: "note",
  Form: "form",
  // Ruby and Warichu structure types
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  // List standard structure types
  L: "list",
  LI: "listitem",
  LBody: null,
  // Table standard structure types
  Table: "table",
  TR: "row",
  TH: "columnheader",
  TD: "cell",
  THead: "columnheader",
  TBody: null,
  TFoot: null,
  // Standard structure type Caption
  Caption: null,
  // Standard structure type Figure
  Figure: "figure",
  // Standard structure type Formula
  Formula: null,
  // standard structure type Artifact
  Artifact: null
}, Oy = /^H(\d+)$/;
function Ny(c) {
  return c in gg;
}
function Qc(c) {
  return "children" in c;
}
function mg(c) {
  return Qc(c) ? c.children.length === 1 && 0 in c.children && "id" in c.children[0] : !1;
}
function Hy(c) {
  const t = {};
  if (Qc(c)) {
    const { role: e } = c, s = e.match(Oy);
    if (s)
      t.role = "heading", t["aria-level"] = Number(s[1]);
    else if (Ny(e)) {
      const i = gg[e];
      i && (t.role = i);
    }
  }
  return t;
}
function bg(c) {
  const t = {};
  if (Qc(c)) {
    if (c.alt !== void 0 && (t["aria-label"] = c.alt), c.lang !== void 0 && (t.lang = c.lang), mg(c)) {
      const [e] = c.children;
      if (e) {
        const s = bg(e);
        return Object.assign(Object.assign({}, t), s);
      }
    }
  } else
    "id" in c && (t["aria-owns"] = c.id);
  return t;
}
function By(c) {
  return c ? Object.assign(Object.assign({}, Hy(c)), bg(c)) : null;
}
function Ag({ className: c, node: t }) {
  const e = Ge(() => By(t), [t]), s = Ge(() => !Qc(t) || mg(t) ? null : t.children.map((i, n) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: index is stable here
    ot(Ag, { node: i }, n)
  )), [t]);
  return ot("span", Object.assign({ className: c }, e, { children: s }));
}
function Jc() {
  return $u(pg);
}
function jy() {
  const c = Jc();
  vt(c, "Unable to find Page context.");
  const { onGetStructTreeError: t, onGetStructTreeSuccess: e } = c, [s, i] = Fa(), { value: n, error: r } = s, { customTextRenderer: o, page: l } = c;
  function h() {
    n && e && e(n);
  }
  function d() {
    r && (fe(!1, r.toString()), t && t(r));
  }
  return St(function() {
    i({ type: "RESET" });
  }, [i, l]), St(function() {
    if (o || !l)
      return;
    const f = Ml(l.getStructTree()), p = f;
    return f.promise.then((g) => {
      i({ type: "RESOLVE", value: g });
    }).catch((g) => {
      i({ type: "REJECT", error: g });
    }), () => gr(p);
  }, [o, l, i]), St(() => {
    if (n !== void 0) {
      if (n === !1) {
        d();
        return;
      }
      h();
    }
  }, [n]), n ? ot(Ag, { className: "react-pdf__Page__structTree structTree", node: n }) : null;
}
const Hu = sg;
function zy(c) {
  const t = Jc();
  vt(t, "Unable to find Page context.");
  const e = Object.assign(Object.assign({}, t), c), { _className: s, canvasBackground: i, devicePixelRatio: n = Cy(), onRenderError: r, onRenderSuccess: o, page: l, renderForms: h, renderTextLayer: d, rotate: u, scale: f } = e, { canvasRef: p } = c;
  vt(l, "Attempted to render page canvas, but no page was specified.");
  const g = gs(null);
  function A() {
    l && o && o(Md(l, f));
  }
  function _(S) {
    Ry(S) || (fe(!1, S.toString()), r && r(S));
  }
  const y = Ge(() => l.getViewport({ scale: f * n, rotation: u }), [n, l, u, f]), w = Ge(() => l.getViewport({ scale: f, rotation: u }), [l, u, f]);
  St(function() {
    if (!l)
      return;
    l.cleanup();
    const { current: T } = g;
    if (!T)
      return;
    T.width = y.width, T.height = y.height, T.style.width = `${Math.floor(w.width)}px`, T.style.height = `${Math.floor(w.height)}px`, T.style.visibility = "hidden";
    const x = {
      annotationMode: h ? Hu.ENABLE_FORMS : Hu.ENABLE,
      canvasContext: T.getContext("2d", { alpha: !1 }),
      viewport: y
    };
    i && (x.background = i);
    const C = l.render(x), P = C;
    return C.promise.then(() => {
      T.style.visibility = "", A();
    }).catch(_), () => gr(P);
  }, [i, l, h, y, w]);
  const E = js(() => {
    const { current: S } = g;
    S && (S.width = 0, S.height = 0);
  }, []);
  return St(() => E, [E]), ot("canvas", { className: `${s}__canvas`, dir: "ltr", ref: fg(p, g), style: {
    display: "block",
    userSelect: "none"
  }, children: d ? ot(jy, {}) : null });
}
function Gy(c) {
  return "str" in c;
}
function Uy() {
  const c = Jc();
  vt(c, "Unable to find Page context.");
  const { customTextRenderer: t, onGetTextError: e, onGetTextSuccess: s, onRenderTextLayerError: i, onRenderTextLayerSuccess: n, page: r, pageIndex: o, pageNumber: l, rotate: h, scale: d } = c;
  vt(r, "Attempted to load page text content, but no page was specified.");
  const [u, f] = Fa(), { value: p, error: g } = u, A = gs(null);
  fe(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"), 10) === 1, "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");
  function _() {
    p && s && s(p);
  }
  function y() {
    g && (fe(!1, g.toString()), e && e(g));
  }
  St(function() {
    f({ type: "RESET" });
  }, [r, f]), St(function() {
    if (!r)
      return;
    const P = Ml(r.getTextContent()), R = P;
    return P.promise.then((k) => {
      f({ type: "RESOLVE", value: k });
    }).catch((k) => {
      f({ type: "REJECT", error: k });
    }), () => gr(R);
  }, [r, f]), St(() => {
    if (p !== void 0) {
      if (p === !1) {
        y();
        return;
      }
      _();
    }
  }, [p]);
  const w = js(() => {
    n && n();
  }, [n]), E = js((C) => {
    fe(!1, C.toString()), i && i(C);
  }, [i]);
  function S() {
    const C = A.current;
    C && C.classList.add("selecting");
  }
  function T() {
    const C = A.current;
    C && C.classList.remove("selecting");
  }
  const x = Ge(() => r.getViewport({ scale: d, rotation: h }), [r, h, d]);
  return Mg(function() {
    if (!r || !p)
      return;
    const { current: P } = A;
    if (!P)
      return;
    P.innerHTML = "";
    const R = r.streamTextContent({ includeMarkedContent: !0 }), k = {
      container: P,
      textContentSource: R,
      viewport: x
    }, L = new ig(k), U = L;
    return L.render().then(() => {
      const j = document.createElement("div");
      j.className = "endOfContent", P.append(j);
      const H = P.querySelectorAll('[role="presentation"]');
      if (t) {
        let $ = 0;
        p.items.forEach((V, F) => {
          if (!Gy(V))
            return;
          const N = H[$];
          if (!N)
            return;
          const _t = t(Object.assign({
            pageIndex: o,
            pageNumber: l,
            itemIndex: F
          }, V));
          N.innerHTML = _t, $ += V.str && V.hasEOL ? 2 : 1;
        });
      }
      w();
    }).catch(E), () => gr(U);
  }, [
    t,
    E,
    w,
    r,
    o,
    l,
    p,
    x
  ]), ot("div", { className: Yc("react-pdf__Page__textContent", "textLayer"), onMouseUp: T, onMouseDown: S, ref: A });
}
function $y() {
  const c = ug(), t = Jc();
  vt(t, "Unable to find Page context.");
  const e = Object.assign(Object.assign({}, c), t), { imageResourcesPath: s, linkService: i, onGetAnnotationsError: n, onGetAnnotationsSuccess: r, onRenderAnnotationLayerError: o, onRenderAnnotationLayerSuccess: l, page: h, pdf: d, renderForms: u, rotate: f, scale: p = 1 } = e;
  vt(d, "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop."), vt(h, "Attempted to load page annotations, but no page was specified."), vt(i, "Attempted to load page annotations, but no linkService was specified.");
  const [g, A] = Fa(), { value: _, error: y } = g, w = gs(null);
  fe(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"), 10) === 1, "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");
  function E() {
    _ && r && r(_);
  }
  function S() {
    y && (fe(!1, y.toString()), n && n(y));
  }
  St(function() {
    A({ type: "RESET" });
  }, [A, h]), St(function() {
    if (!h)
      return;
    const R = Ml(h.getAnnotations()), k = R;
    return R.promise.then((L) => {
      A({ type: "RESOLVE", value: L });
    }).catch((L) => {
      A({ type: "REJECT", error: L });
    }), () => {
      gr(k);
    };
  }, [A, h]), St(() => {
    if (_ !== void 0) {
      if (_ === !1) {
        S();
        return;
      }
      E();
    }
  }, [_]);
  function T() {
    l && l();
  }
  function x(P) {
    fe(!1, `${P}`), o && o(P);
  }
  const C = Ge(() => h.getViewport({ scale: p, rotation: f }), [h, f, p]);
  return St(function() {
    if (!d || !h || !i || !_)
      return;
    const { current: R } = w;
    if (!R)
      return;
    const k = C.clone({ dontFlip: !0 }), L = {
      accessibilityManager: null,
      // TODO: Implement this
      annotationCanvasMap: null,
      // TODO: Implement this
      annotationEditorUIManager: null,
      // TODO: Implement this
      div: R,
      l10n: null,
      // TODO: Implement this
      page: h,
      structTreeLayer: null,
      // TODO: Implement this
      viewport: k
    }, U = {
      annotations: _,
      annotationStorage: d.annotationStorage,
      div: R,
      imageResourcesPath: s,
      linkService: i,
      page: h,
      renderForms: u,
      viewport: k
    };
    R.innerHTML = "";
    try {
      new eg(L).render(U), T();
    } catch (j) {
      x(j);
    }
    return () => {
    };
  }, [_, s, i, h, d, u, C]), ot("div", { className: Yc("react-pdf__Page__annotations", "annotationLayer"), ref: w });
}
var Vy = function(c, t) {
  var e = {};
  for (var s in c) Object.prototype.hasOwnProperty.call(c, s) && t.indexOf(s) < 0 && (e[s] = c[s]);
  if (c != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, s = Object.getOwnPropertySymbols(c); i < s.length; i++)
      t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(c, s[i]) && (e[s[i]] = c[s[i]]);
  return e;
};
const Bu = 1;
function Wy(c) {
  const t = ug(), e = Object.assign(Object.assign({}, t), c), { _className: s = "react-pdf__Page", _enableRegisterUnregisterPage: i = !0, canvasBackground: n, canvasRef: r, children: o, className: l, customRenderer: h, customTextRenderer: d, devicePixelRatio: u, error: f = "Failed to load the page.", height: p, inputRef: g, loading: A = "Loading page…", noData: _ = "No page specified.", onGetAnnotationsError: y, onGetAnnotationsSuccess: w, onGetStructTreeError: E, onGetStructTreeSuccess: S, onGetTextError: T, onGetTextSuccess: x, onLoadError: C, onLoadSuccess: P, onRenderAnnotationLayerError: R, onRenderAnnotationLayerSuccess: k, onRenderError: L, onRenderSuccess: U, onRenderTextLayerError: j, onRenderTextLayerSuccess: H, pageIndex: $, pageNumber: V, pdf: F, registerPage: N, renderAnnotationLayer: _t = !0, renderForms: Dt = !1, renderMode: At = "canvas", renderTextLayer: ht = !0, rotate: rt, scale: Tt = Bu, unregisterPage: te, width: yt } = e, X = Vy(e, ["_className", "_enableRegisterUnregisterPage", "canvasBackground", "canvasRef", "children", "className", "customRenderer", "customTextRenderer", "devicePixelRatio", "error", "height", "inputRef", "loading", "noData", "onGetAnnotationsError", "onGetAnnotationsSuccess", "onGetStructTreeError", "onGetStructTreeSuccess", "onGetTextError", "onGetTextSuccess", "onLoadError", "onLoadSuccess", "onRenderAnnotationLayerError", "onRenderAnnotationLayerSuccess", "onRenderError", "onRenderSuccess", "onRenderTextLayerError", "onRenderTextLayerSuccess", "pageIndex", "pageNumber", "pdf", "registerPage", "renderAnnotationLayer", "renderForms", "renderMode", "renderTextLayer", "rotate", "scale", "unregisterPage", "width"]), [wt, Ot] = Fa(), { value: st, error: dt } = wt, O = gs(null);
  vt(F, "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.");
  const G = ln(V) ? V - 1 : $ ?? null, Q = V ?? (ln($) ? $ + 1 : null), at = rt ?? (st ? st.rotate : null), ut = Ge(() => {
    if (!st)
      return null;
    let Gs = 1;
    const _r = Tt ?? Bu;
    if (yt || p) {
      const Si = st.getViewport({ scale: 1, rotation: at });
      yt ? Gs = yt / Si.width : p && (Gs = p / Si.height);
    }
    return _r * Gs;
  }, [p, st, at, Tt, yt]);
  St(function() {
    return () => {
      ln(G) && i && te && te(G);
    };
  }, [i, F, G, te]);
  function ae() {
    if (P) {
      if (!st || !ut)
        return;
      P(Md(st, ut));
    }
    if (i && N) {
      if (!ln(G) || !O.current)
        return;
      N(G, O.current);
    }
  }
  function Le() {
    dt && (fe(!1, dt.toString()), C && C(dt));
  }
  St(function() {
    Ot({ type: "RESET" });
  }, [Ot, F, G]), St(function() {
    if (!F || !Q)
      return;
    const _r = Ml(F.getPage(Q)), Si = _r;
    return _r.promise.then((vs) => {
      Ot({ type: "RESOLVE", value: vs });
    }).catch((vs) => {
      Ot({ type: "REJECT", error: vs });
    }), () => gr(Si);
  }, [Ot, F, Q]), St(() => {
    if (st !== void 0) {
      if (st === !1) {
        Le();
        return;
      }
      ae();
    }
  }, [st, ut]);
  const As = Ge(() => (
    // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
    st && ln(G) && Q && ln(at) && ln(ut) ? {
      _className: s,
      canvasBackground: n,
      customTextRenderer: d,
      devicePixelRatio: u,
      onGetAnnotationsError: y,
      onGetAnnotationsSuccess: w,
      onGetStructTreeError: E,
      onGetStructTreeSuccess: S,
      onGetTextError: T,
      onGetTextSuccess: x,
      onRenderAnnotationLayerError: R,
      onRenderAnnotationLayerSuccess: k,
      onRenderError: L,
      onRenderSuccess: U,
      onRenderTextLayerError: j,
      onRenderTextLayerSuccess: H,
      page: st,
      pageIndex: G,
      pageNumber: Q,
      renderForms: Dt,
      renderTextLayer: ht,
      rotate: at,
      scale: ut
    } : null
  ), [
    s,
    n,
    d,
    u,
    y,
    w,
    E,
    S,
    T,
    x,
    R,
    k,
    L,
    U,
    j,
    H,
    st,
    G,
    Q,
    Dt,
    ht,
    at,
    ut
  ]), zs = Ge(
    () => ag(X, () => st && (ut ? Md(st, ut) : void 0)),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [X, st, ut]
  ), ys = `${G}@${ut}/${at}`;
  function Da() {
    switch (At) {
      case "custom":
        return vt(h, 'renderMode was set to "custom", but no customRenderer was passed.'), ot(h, {}, `${ys}_custom`);
      case "none":
        return null;
      case "canvas":
      default:
        return ot(zy, { canvasRef: r }, `${ys}_canvas`);
    }
  }
  function Oa() {
    return ht ? ot(Uy, {}, `${ys}_text`) : null;
  }
  function Il() {
    return _t ? ot($y, {}, `${ys}_annotations`) : null;
  }
  function Fl() {
    return io(pg.Provider, { value: As, children: [Da(), Oa(), Il(), o] });
  }
  function Zc() {
    return Q ? F === null || st === void 0 || st === null ? ot(Dr, { type: "loading", children: typeof A == "function" ? A() : A }) : F === !1 || st === !1 ? ot(Dr, { type: "error", children: typeof f == "function" ? f() : f }) : Fl() : ot(Dr, { type: "no-data", children: typeof _ == "function" ? _() : _ });
  }
  return ot("div", Object.assign({
    className: Yc(s, l),
    "data-page-number": Q,
    // Assertion is needed for React 18 compatibility
    ref: fg(g, O),
    style: {
      "--scale-factor": `${ut}`,
      backgroundColor: n || "white",
      position: "relative",
      minWidth: "min-content",
      minHeight: "min-content"
    }
  }, zs, { children: Zc() }));
}
Py();
Qd.workerSrc = "pdf.worker.mjs";
const ju = (c) => /* @__PURE__ */ wr.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...c }, /* @__PURE__ */ wr.createElement("g", { clipPath: "url(#clip0_2912_26253)" }, /* @__PURE__ */ wr.createElement("path", { d: "M12.3535 15.3535L11.8535 15.8535C11.7597 15.9472 11.6326 15.9999 11.5 15.9999C11.3674 15.9999 11.2402 15.9472 11.1465 15.8535L3.64648 8.3535C3.55275 8.25974 3.50009 8.13258 3.50009 8C3.50009 7.86742 3.55275 7.74026 3.64648 7.6465L11.1465 0.1465C11.2402 0.0527645 11.3674 0.000106812 11.5 0.000106812C11.6326 0.000106812 11.7597 0.0527645 11.8535 0.1465L12.3535 0.6465C12.4472 0.740264 12.4999 0.867418 12.4999 1C12.4999 1.13258 12.4472 1.25974 12.3535 1.3535L5.70698 8L12.3535 14.6465C12.4472 14.7403 12.4999 14.8674 12.4999 15C12.4999 15.1326 12.4472 15.2597 12.3535 15.3535Z", fill: "black", fillOpacity: 0.8 })), /* @__PURE__ */ wr.createElement("defs", null, /* @__PURE__ */ wr.createElement("clipPath", { id: "clip0_2912_26253" }, /* @__PURE__ */ wr.createElement("rect", { width: 16, height: 16, fill: "white" }))));
function qy(c, t, e) {
  return c.replace(t, (s) => `<mark class="${e}">${s}</mark>`);
}
const Xy = "_container_42ndq_1", Yy = "_head_42ndq_8", Ky = "_title_42ndq_14", Qy = "_currentSlide_42ndq_15", Jy = "_widthAdjuster_42ndq_24", Zy = "_pdf_42ndq_29", tv = "_carousel_42ndq_34", ev = "_slide_42ndq_39", sv = "_slideArrow_42ndq_48", iv = "_left_42ndq_56", nv = "_right_42ndq_61", rv = "_mark_42ndq_66", av = "_markupToolLink_42ndq_71", Ae = {
  container: Xy,
  head: Yy,
  title: Ky,
  currentSlide: Qy,
  widthAdjuster: Jy,
  pdf: Zy,
  carousel: tv,
  slide: ev,
  slideArrow: sv,
  left: iv,
  right: nv,
  mark: rv,
  markupToolLink: av
}, ov = (c) => /* @__PURE__ */ ot("div", { className: Ae.title, children: c }), lv = (c) => /* @__PURE__ */ ot("a", { className: Ae.markupToolLink, href: c, children: "Open in markup tool" }), cv = (c, t) => /* @__PURE__ */ io("div", { className: Ae.currentSlide, children: [
  c,
  "/",
  t
] }), gv = ({
  title: c,
  data: t,
  className: e,
  loadingPlaceholder: s,
  markupToolUrl: i,
  carouselProgressComponent: n = cv,
  markupToolLinkComponent: r = lv,
  titleComponent: o = ov,
  maxWidth: l = 900,
  ...h
}) => {
  const [d, u] = Nd(), [f, p] = hh(1), g = js(
    (E) => (S) => qy(S.str, E, Ae.mark),
    []
  ), A = js(() => {
    u && (p((E) => E - 1), u.scrollPrev());
  }, [u]), _ = js(() => {
    u && (p((E) => E + 1), u.scrollNext());
  }, [u]), y = Ge(() => !!(u != null && u.canScrollPrev()), [u, f]), w = Ge(() => !!(u != null && u.canScrollNext()), [u, f]);
  return /* @__PURE__ */ io("div", { className: on(Ae.container, e), ...h, children: [
    /* @__PURE__ */ io("div", { className: Ae.head, children: [
      o(c),
      n(f, t.length),
      /* @__PURE__ */ ot("div", { className: on(Ae.title, Ae.widthAdjuster), children: c })
    ] }),
    /* @__PURE__ */ io("div", { className: on(Ae.carousel, "embla"), ref: d, children: [
      /* @__PURE__ */ ot("div", { className: on(Ae.pdf, "embla__container"), style: { maxWidth: l }, children: t.map(({ file: E, page: S, text: T, id: x }) => /* @__PURE__ */ ot("div", { className: on(Ae.slide, "embla__slide"), children: /* @__PURE__ */ ot(Dy, { file: E, loading: s, children: /* @__PURE__ */ ot(
        Wy,
        {
          pageNumber: S,
          customTextRenderer: g(T),
          width: l,
          renderAnnotationLayer: !1,
          loading: s
        }
      ) }) }, x)) }),
      y && /* @__PURE__ */ ot("div", { className: on(Ae.slideArrow, Ae.left), onClick: A, children: /* @__PURE__ */ ot(ju, {}) }),
      w && /* @__PURE__ */ ot("div", { className: on(Ae.slideArrow, Ae.right), onClick: _, children: /* @__PURE__ */ ot(ju, {}) })
    ] }),
    i && r(i)
  ] });
};
function mv() {
  Qd.workerSrc = `https://unpkg.com/pdfjs-dist@${rg}/legacy/build/pdf.worker.min.mjs`;
}
export {
  gv as Widget,
  mv as setupPdfJs
};
