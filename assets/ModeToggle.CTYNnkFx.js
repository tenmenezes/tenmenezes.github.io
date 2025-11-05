import {
  r as c,
  R as Jt,
  g as $o,
  a as zo,
  b as we,
} from "./index.B4p9QsDO.js";
var Mt = { exports: {} },
  We = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bn;
function Wo() {
  if (bn) return We;
  bn = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function n(r, o, s) {
    var i = null;
    if (
      (s !== void 0 && (i = "" + s),
      o.key !== void 0 && (i = "" + o.key),
      "key" in o)
    ) {
      s = {};
      for (var a in o) a !== "key" && (s[a] = o[a]);
    } else s = o;
    return (
      (o = s.ref),
      { $$typeof: e, type: r, key: i, ref: o !== void 0 ? o : null, props: s }
    );
  }
  return (We.Fragment = t), (We.jsx = n), (We.jsxs = n), We;
}
var yn;
function Bo() {
  return yn || ((yn = 1), (Mt.exports = Wo())), Mt.exports;
}
var b = Bo();
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Go = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r) =>
      r ? r.toUpperCase() : n.toLowerCase()
    ),
  wn = (e) => {
    const t = Go(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Qn = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim(),
  Uo = (e) => {
    for (const t in e)
      if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  };
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ho = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ko = c.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: s,
      iconNode: i,
      ...a
    },
    u
  ) =>
    c.createElement(
      "svg",
      {
        ref: u,
        ...Ho,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Qn("lucide", o),
        ...(!s && !Uo(a) && { "aria-hidden": "true" }),
        ...a,
      },
      [
        ...i.map(([l, d]) => c.createElement(l, d)),
        ...(Array.isArray(s) ? s : [s]),
      ]
    )
);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const er = (e, t) => {
  const n = c.forwardRef(({ className: r, ...o }, s) =>
    c.createElement(Ko, {
      ref: s,
      iconNode: t,
      className: Qn(`lucide-${Vo(wn(e))}`, `lucide-${e}`, r),
      ...o,
    })
  );
  return (n.displayName = wn(e)), n;
};
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yo = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ],
  Xo = er("moon", Yo);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qo = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  Zo = er("sun", qo);
function xn(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Ee(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = xn(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : xn(e[o], null);
        }
      };
  };
}
function X(...e) {
  return c.useCallback(Ee(...e), e);
}
var Jo = Symbol.for("react.lazy"),
  ft = Jt[" use ".trim().toString()];
function Qo(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function tr(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "$$typeof" in e &&
    e.$$typeof === Jo &&
    "_payload" in e &&
    Qo(e._payload)
  );
}
function es(e) {
  const t = ns(e),
    n = c.forwardRef((r, o) => {
      let { children: s, ...i } = r;
      tr(s) && typeof ft == "function" && (s = ft(s._payload));
      const a = c.Children.toArray(s),
        u = a.find(os);
      if (u) {
        const l = u.props.children,
          d = a.map((f) =>
            f === u
              ? c.Children.count(l) > 1
                ? c.Children.only(null)
                : c.isValidElement(l)
                ? l.props.children
                : null
              : f
          );
        return b.jsx(t, {
          ...i,
          ref: o,
          children: c.isValidElement(l) ? c.cloneElement(l, void 0, d) : null,
        });
      }
      return b.jsx(t, { ...i, ref: o, children: s });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var ts = es("Slot");
function ns(e) {
  const t = c.forwardRef((n, r) => {
    let { children: o, ...s } = n;
    if (
      (tr(o) && typeof ft == "function" && (o = ft(o._payload)),
      c.isValidElement(o))
    ) {
      const i = is(o),
        a = ss(s, o.props);
      return (
        o.type !== c.Fragment && (a.ref = r ? Ee(r, i) : i),
        c.cloneElement(o, a)
      );
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var rs = Symbol("radix.slottable");
function os(e) {
  return (
    c.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === rs
  );
}
function ss(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...a) => {
            const u = s(...a);
            return o(...a), u;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...s })
      : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function is(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function nr(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = nr(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function rr() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = nr(e)) && (r && (r += " "), (r += t));
  return r;
}
const Cn = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  En = rr,
  as = (e, t) => (n) => {
    var r;
    if (t?.variants == null) return En(e, n?.class, n?.className);
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((l) => {
        const d = n?.[l],
          f = s?.[l];
        if (d === null) return null;
        const m = Cn(d) || Cn(f);
        return o[l][m];
      }),
      a =
        n &&
        Object.entries(n).reduce((l, d) => {
          let [f, m] = d;
          return m === void 0 || (l[f] = m), l;
        }, {}),
      u =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((l, d) => {
              let { class: f, className: m, ...h } = d;
              return Object.entries(h).every((g) => {
                let [p, v] = g;
                return Array.isArray(v)
                  ? v.includes({ ...s, ...a }[p])
                  : { ...s, ...a }[p] === v;
              })
                ? [...l, f, m]
                : l;
            }, []);
    return En(e, i, u, n?.class, n?.className);
  },
  Qt = "-",
  cs = (e) => {
    const t = us(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const a = i.split(Qt);
        return a[0] === "" && a.length !== 1 && a.shift(), or(a, t) || ls(i);
      },
      getConflictingClassGroupIds: (i, a) => {
        const u = n[i] || [];
        return a && r[i] ? [...u, ...r[i]] : u;
      },
    };
  },
  or = (e, t) => {
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? or(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const s = e.join(Qt);
    return t.validators.find(({ validator: i }) => i(s))?.classGroupId;
  },
  Sn = /^\[(.+)\]$/,
  ls = (e) => {
    if (Sn.test(e)) {
      const t = Sn.exec(e)[1],
        n = t?.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  us = (e) => {
    const { theme: t, classGroups: n } = e,
      r = { nextPart: new Map(), validators: [] };
    for (const o in n) Wt(n[o], r, o, t);
    return r;
  },
  Wt = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const s = o === "" ? t : Rn(t, o);
        s.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (ds(o)) {
          Wt(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([s, i]) => {
        Wt(i, Rn(t, s), n, r);
      });
    });
  },
  Rn = (e, t) => {
    let n = e;
    return (
      t.split(Qt).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  ds = (e) => e.isThemeGetter,
  fs = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (s, i) => {
      n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(s) {
        let i = n.get(s);
        if (i !== void 0) return i;
        if ((i = r.get(s)) !== void 0) return o(s, i), i;
      },
      set(s, i) {
        n.has(s) ? n.set(s, i) : o(s, i);
      },
    };
  },
  Bt = "!",
  Vt = ":",
  ps = Vt.length,
  ms = (e) => {
    const { prefix: t, experimentalParseClassName: n } = e;
    let r = (o) => {
      const s = [];
      let i = 0,
        a = 0,
        u = 0,
        l;
      for (let g = 0; g < o.length; g++) {
        let p = o[g];
        if (i === 0 && a === 0) {
          if (p === Vt) {
            s.push(o.slice(u, g)), (u = g + ps);
            continue;
          }
          if (p === "/") {
            l = g;
            continue;
          }
        }
        p === "[" ? i++ : p === "]" ? i-- : p === "(" ? a++ : p === ")" && a--;
      }
      const d = s.length === 0 ? o : o.substring(u),
        f = hs(d),
        m = f !== d,
        h = l && l > u ? l - u : void 0;
      return {
        modifiers: s,
        hasImportantModifier: m,
        baseClassName: f,
        maybePostfixModifierPosition: h,
      };
    };
    if (t) {
      const o = t + Vt,
        s = r;
      r = (i) =>
        i.startsWith(o)
          ? s(i.substring(o.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: i,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (n) {
      const o = r;
      r = (s) => n({ className: s, parseClassName: o });
    }
    return r;
  },
  hs = (e) =>
    e.endsWith(Bt)
      ? e.substring(0, e.length - 1)
      : e.startsWith(Bt)
      ? e.substring(1)
      : e,
  gs = (e) => {
    const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
    return (r) => {
      if (r.length <= 1) return r;
      const o = [];
      let s = [];
      return (
        r.forEach((i) => {
          i[0] === "[" || t[i] ? (o.push(...s.sort(), i), (s = [])) : s.push(i);
        }),
        o.push(...s.sort()),
        o
      );
    };
  },
  vs = (e) => ({
    cache: fs(e.cacheSize),
    parseClassName: ms(e),
    sortModifiers: gs(e),
    ...cs(e),
  }),
  bs = /\s+/,
  ys = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
        sortModifiers: s,
      } = t,
      i = [],
      a = e.trim().split(bs);
    let u = "";
    for (let l = a.length - 1; l >= 0; l -= 1) {
      const d = a[l],
        {
          isExternal: f,
          modifiers: m,
          hasImportantModifier: h,
          baseClassName: g,
          maybePostfixModifierPosition: p,
        } = n(d);
      if (f) {
        u = d + (u.length > 0 ? " " + u : u);
        continue;
      }
      let v = !!p,
        y = r(v ? g.substring(0, p) : g);
      if (!y) {
        if (!v) {
          u = d + (u.length > 0 ? " " + u : u);
          continue;
        }
        if (((y = r(g)), !y)) {
          u = d + (u.length > 0 ? " " + u : u);
          continue;
        }
        v = !1;
      }
      const S = s(m).join(":"),
        w = h ? S + Bt : S,
        x = w + y;
      if (i.includes(x)) continue;
      i.push(x);
      const R = o(y, v);
      for (let O = 0; O < R.length; ++O) {
        const k = R[O];
        i.push(w + k);
      }
      u = d + (u.length > 0 ? " " + u : u);
    }
    return u;
  };
function ws() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = sr(t)) && (r && (r += " "), (r += n));
  return r;
}
const sr = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = sr(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function xs(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(u) {
    const l = t.reduce((d, f) => f(d), e());
    return (n = vs(l)), (r = n.cache.get), (o = n.cache.set), (s = a), a(u);
  }
  function a(u) {
    const l = r(u);
    if (l) return l;
    const d = ys(u, n);
    return o(u, d), d;
  }
  return function () {
    return s(ws.apply(null, arguments));
  };
}
const H = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  ir = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  ar = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Cs = /^\d+\/\d+$/,
  Es = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ss =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Rs = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  ks = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Ms =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Pe = (e) => Cs.test(e),
  I = (e) => !!e && !Number.isNaN(Number(e)),
  he = (e) => !!e && Number.isInteger(Number(e)),
  At = (e) => e.endsWith("%") && I(e.slice(0, -1)),
  ue = (e) => Es.test(e),
  As = () => !0,
  Ps = (e) => Ss.test(e) && !Rs.test(e),
  cr = () => !1,
  Os = (e) => ks.test(e),
  _s = (e) => Ms.test(e),
  Is = (e) => !M(e) && !A(e),
  Ts = (e) => Le(e, dr, cr),
  M = (e) => ir.test(e),
  xe = (e) => Le(e, fr, Ps),
  Pt = (e) => Le(e, js, I),
  kn = (e) => Le(e, lr, cr),
  Ns = (e) => Le(e, ur, _s),
  tt = (e) => Le(e, pr, Os),
  A = (e) => ar.test(e),
  Be = (e) => Fe(e, fr),
  Ds = (e) => Fe(e, $s),
  Mn = (e) => Fe(e, lr),
  Ls = (e) => Fe(e, dr),
  Fs = (e) => Fe(e, ur),
  nt = (e) => Fe(e, pr, !0),
  Le = (e, t, n) => {
    const r = ir.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Fe = (e, t, n = !1) => {
    const r = ar.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  lr = (e) => e === "position" || e === "percentage",
  ur = (e) => e === "image" || e === "url",
  dr = (e) => e === "length" || e === "size" || e === "bg-size",
  fr = (e) => e === "length",
  js = (e) => e === "number",
  $s = (e) => e === "family-name",
  pr = (e) => e === "shadow",
  zs = () => {
    const e = H("color"),
      t = H("font"),
      n = H("text"),
      r = H("font-weight"),
      o = H("tracking"),
      s = H("leading"),
      i = H("breakpoint"),
      a = H("container"),
      u = H("spacing"),
      l = H("radius"),
      d = H("shadow"),
      f = H("inset-shadow"),
      m = H("text-shadow"),
      h = H("drop-shadow"),
      g = H("blur"),
      p = H("perspective"),
      v = H("aspect"),
      y = H("ease"),
      S = H("animate"),
      w = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      x = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      R = () => [...x(), A, M],
      O = () => ["auto", "hidden", "clip", "visible", "scroll"],
      k = () => ["auto", "contain", "none"],
      E = () => [A, M, u],
      N = () => [Pe, "full", "auto", ...E()],
      L = () => [he, "none", "subgrid", A, M],
      W = () => ["auto", { span: ["full", he, A, M] }, he, A, M],
      z = () => [he, "auto", A, M],
      $ = () => ["auto", "min", "max", "fr", A, M],
      F = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      B = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      _ = () => ["auto", ...E()],
      j = () => [
        Pe,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...E(),
      ],
      C = () => [e, A, M],
      P = () => [...x(), Mn, kn, { position: [A, M] }],
      G = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      q = () => ["auto", "cover", "contain", Ls, Ts, { size: [A, M] }],
      ee = () => [At, Be, xe],
      V = () => ["", "none", "full", l, A, M],
      U = () => ["", I, Be, xe],
      le = () => ["solid", "dashed", "dotted", "double"],
      re = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      T = () => [I, At, Mn, kn],
      me = () => ["", "none", g, A, M],
      ke = () => ["none", I, A, M],
      Me = () => ["none", I, A, M],
      ze = () => [I, A, M],
      Ae = () => [Pe, "full", ...E()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [ue],
        breakpoint: [ue],
        color: [As],
        container: [ue],
        "drop-shadow": [ue],
        ease: ["in", "out", "in-out"],
        font: [Is],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [ue],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [ue],
        shadow: [ue],
        spacing: ["px", I],
        text: [ue],
        "text-shadow": [ue],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Pe, M, A, v] }],
        container: ["container"],
        columns: [{ columns: [I, M, A, a] }],
        "break-after": [{ "break-after": w() }],
        "break-before": [{ "break-before": w() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: R() }],
        overflow: [{ overflow: O() }],
        "overflow-x": [{ "overflow-x": O() }],
        "overflow-y": [{ "overflow-y": O() }],
        overscroll: [{ overscroll: k() }],
        "overscroll-x": [{ "overscroll-x": k() }],
        "overscroll-y": [{ "overscroll-y": k() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: N() }],
        "inset-x": [{ "inset-x": N() }],
        "inset-y": [{ "inset-y": N() }],
        start: [{ start: N() }],
        end: [{ end: N() }],
        top: [{ top: N() }],
        right: [{ right: N() }],
        bottom: [{ bottom: N() }],
        left: [{ left: N() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [he, "auto", A, M] }],
        basis: [{ basis: [Pe, "full", "auto", a, ...E()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [I, Pe, "auto", "initial", "none", M] }],
        grow: [{ grow: ["", I, A, M] }],
        shrink: [{ shrink: ["", I, A, M] }],
        order: [{ order: [he, "first", "last", "none", A, M] }],
        "grid-cols": [{ "grid-cols": L() }],
        "col-start-end": [{ col: W() }],
        "col-start": [{ "col-start": z() }],
        "col-end": [{ "col-end": z() }],
        "grid-rows": [{ "grid-rows": L() }],
        "row-start-end": [{ row: W() }],
        "row-start": [{ "row-start": z() }],
        "row-end": [{ "row-end": z() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": $() }],
        "auto-rows": [{ "auto-rows": $() }],
        gap: [{ gap: E() }],
        "gap-x": [{ "gap-x": E() }],
        "gap-y": [{ "gap-y": E() }],
        "justify-content": [{ justify: [...F(), "normal"] }],
        "justify-items": [{ "justify-items": [...B(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...B()] }],
        "align-content": [{ content: ["normal", ...F()] }],
        "align-items": [{ items: [...B(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...B(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": F() }],
        "place-items": [{ "place-items": [...B(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...B()] }],
        p: [{ p: E() }],
        px: [{ px: E() }],
        py: [{ py: E() }],
        ps: [{ ps: E() }],
        pe: [{ pe: E() }],
        pt: [{ pt: E() }],
        pr: [{ pr: E() }],
        pb: [{ pb: E() }],
        pl: [{ pl: E() }],
        m: [{ m: _() }],
        mx: [{ mx: _() }],
        my: [{ my: _() }],
        ms: [{ ms: _() }],
        me: [{ me: _() }],
        mt: [{ mt: _() }],
        mr: [{ mr: _() }],
        mb: [{ mb: _() }],
        ml: [{ ml: _() }],
        "space-x": [{ "space-x": E() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": E() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: j() }],
        w: [{ w: [a, "screen", ...j()] }],
        "min-w": [{ "min-w": [a, "screen", "none", ...j()] }],
        "max-w": [
          { "max-w": [a, "screen", "none", "prose", { screen: [i] }, ...j()] },
        ],
        h: [{ h: ["screen", "lh", ...j()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...j()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...j()] }],
        "font-size": [{ text: ["base", n, Be, xe] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, A, Pt] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              At,
              M,
            ],
          },
        ],
        "font-family": [{ font: [Ds, M, t] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [o, A, M] }],
        "line-clamp": [{ "line-clamp": [I, "none", A, Pt] }],
        leading: [{ leading: [s, ...E()] }],
        "list-image": [{ "list-image": ["none", A, M] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", A, M] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: C() }],
        "text-color": [{ text: C() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...le(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [I, "from-font", "auto", A, xe] },
        ],
        "text-decoration-color": [{ decoration: C() }],
        "underline-offset": [{ "underline-offset": [I, "auto", A, M] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: E() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              A,
              M,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", A, M] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: P() }],
        "bg-repeat": [{ bg: G() }],
        "bg-size": [{ bg: q() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  he,
                  A,
                  M,
                ],
                radial: ["", A, M],
                conic: [he, A, M],
              },
              Fs,
              Ns,
            ],
          },
        ],
        "bg-color": [{ bg: C() }],
        "gradient-from-pos": [{ from: ee() }],
        "gradient-via-pos": [{ via: ee() }],
        "gradient-to-pos": [{ to: ee() }],
        "gradient-from": [{ from: C() }],
        "gradient-via": [{ via: C() }],
        "gradient-to": [{ to: C() }],
        rounded: [{ rounded: V() }],
        "rounded-s": [{ "rounded-s": V() }],
        "rounded-e": [{ "rounded-e": V() }],
        "rounded-t": [{ "rounded-t": V() }],
        "rounded-r": [{ "rounded-r": V() }],
        "rounded-b": [{ "rounded-b": V() }],
        "rounded-l": [{ "rounded-l": V() }],
        "rounded-ss": [{ "rounded-ss": V() }],
        "rounded-se": [{ "rounded-se": V() }],
        "rounded-ee": [{ "rounded-ee": V() }],
        "rounded-es": [{ "rounded-es": V() }],
        "rounded-tl": [{ "rounded-tl": V() }],
        "rounded-tr": [{ "rounded-tr": V() }],
        "rounded-br": [{ "rounded-br": V() }],
        "rounded-bl": [{ "rounded-bl": V() }],
        "border-w": [{ border: U() }],
        "border-w-x": [{ "border-x": U() }],
        "border-w-y": [{ "border-y": U() }],
        "border-w-s": [{ "border-s": U() }],
        "border-w-e": [{ "border-e": U() }],
        "border-w-t": [{ "border-t": U() }],
        "border-w-r": [{ "border-r": U() }],
        "border-w-b": [{ "border-b": U() }],
        "border-w-l": [{ "border-l": U() }],
        "divide-x": [{ "divide-x": U() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": U() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...le(), "hidden", "none"] }],
        "divide-style": [{ divide: [...le(), "hidden", "none"] }],
        "border-color": [{ border: C() }],
        "border-color-x": [{ "border-x": C() }],
        "border-color-y": [{ "border-y": C() }],
        "border-color-s": [{ "border-s": C() }],
        "border-color-e": [{ "border-e": C() }],
        "border-color-t": [{ "border-t": C() }],
        "border-color-r": [{ "border-r": C() }],
        "border-color-b": [{ "border-b": C() }],
        "border-color-l": [{ "border-l": C() }],
        "divide-color": [{ divide: C() }],
        "outline-style": [{ outline: [...le(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [I, A, M] }],
        "outline-w": [{ outline: ["", I, Be, xe] }],
        "outline-color": [{ outline: C() }],
        shadow: [{ shadow: ["", "none", d, nt, tt] }],
        "shadow-color": [{ shadow: C() }],
        "inset-shadow": [{ "inset-shadow": ["none", f, nt, tt] }],
        "inset-shadow-color": [{ "inset-shadow": C() }],
        "ring-w": [{ ring: U() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: C() }],
        "ring-offset-w": [{ "ring-offset": [I, xe] }],
        "ring-offset-color": [{ "ring-offset": C() }],
        "inset-ring-w": [{ "inset-ring": U() }],
        "inset-ring-color": [{ "inset-ring": C() }],
        "text-shadow": [{ "text-shadow": ["none", m, nt, tt] }],
        "text-shadow-color": [{ "text-shadow": C() }],
        opacity: [{ opacity: [I, A, M] }],
        "mix-blend": [
          { "mix-blend": [...re(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": re() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [I] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": T() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": T() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": C() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": C() }],
        "mask-image-t-from-pos": [{ "mask-t-from": T() }],
        "mask-image-t-to-pos": [{ "mask-t-to": T() }],
        "mask-image-t-from-color": [{ "mask-t-from": C() }],
        "mask-image-t-to-color": [{ "mask-t-to": C() }],
        "mask-image-r-from-pos": [{ "mask-r-from": T() }],
        "mask-image-r-to-pos": [{ "mask-r-to": T() }],
        "mask-image-r-from-color": [{ "mask-r-from": C() }],
        "mask-image-r-to-color": [{ "mask-r-to": C() }],
        "mask-image-b-from-pos": [{ "mask-b-from": T() }],
        "mask-image-b-to-pos": [{ "mask-b-to": T() }],
        "mask-image-b-from-color": [{ "mask-b-from": C() }],
        "mask-image-b-to-color": [{ "mask-b-to": C() }],
        "mask-image-l-from-pos": [{ "mask-l-from": T() }],
        "mask-image-l-to-pos": [{ "mask-l-to": T() }],
        "mask-image-l-from-color": [{ "mask-l-from": C() }],
        "mask-image-l-to-color": [{ "mask-l-to": C() }],
        "mask-image-x-from-pos": [{ "mask-x-from": T() }],
        "mask-image-x-to-pos": [{ "mask-x-to": T() }],
        "mask-image-x-from-color": [{ "mask-x-from": C() }],
        "mask-image-x-to-color": [{ "mask-x-to": C() }],
        "mask-image-y-from-pos": [{ "mask-y-from": T() }],
        "mask-image-y-to-pos": [{ "mask-y-to": T() }],
        "mask-image-y-from-color": [{ "mask-y-from": C() }],
        "mask-image-y-to-color": [{ "mask-y-to": C() }],
        "mask-image-radial": [{ "mask-radial": [A, M] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": T() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": T() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": C() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": C() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": x() }],
        "mask-image-conic-pos": [{ "mask-conic": [I] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": T() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": T() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": C() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": C() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: P() }],
        "mask-repeat": [{ mask: G() }],
        "mask-size": [{ mask: q() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", A, M] }],
        filter: [{ filter: ["", "none", A, M] }],
        blur: [{ blur: me() }],
        brightness: [{ brightness: [I, A, M] }],
        contrast: [{ contrast: [I, A, M] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", h, nt, tt] }],
        "drop-shadow-color": [{ "drop-shadow": C() }],
        grayscale: [{ grayscale: ["", I, A, M] }],
        "hue-rotate": [{ "hue-rotate": [I, A, M] }],
        invert: [{ invert: ["", I, A, M] }],
        saturate: [{ saturate: [I, A, M] }],
        sepia: [{ sepia: ["", I, A, M] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", A, M] }],
        "backdrop-blur": [{ "backdrop-blur": me() }],
        "backdrop-brightness": [{ "backdrop-brightness": [I, A, M] }],
        "backdrop-contrast": [{ "backdrop-contrast": [I, A, M] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", I, A, M] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [I, A, M] }],
        "backdrop-invert": [{ "backdrop-invert": ["", I, A, M] }],
        "backdrop-opacity": [{ "backdrop-opacity": [I, A, M] }],
        "backdrop-saturate": [{ "backdrop-saturate": [I, A, M] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", I, A, M] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": E() }],
        "border-spacing-x": [{ "border-spacing-x": E() }],
        "border-spacing-y": [{ "border-spacing-y": E() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              A,
              M,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [I, "initial", A, M] }],
        ease: [{ ease: ["linear", "initial", y, A, M] }],
        delay: [{ delay: [I, A, M] }],
        animate: [{ animate: ["none", S, A, M] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [p, A, M] }],
        "perspective-origin": [{ "perspective-origin": R() }],
        rotate: [{ rotate: ke() }],
        "rotate-x": [{ "rotate-x": ke() }],
        "rotate-y": [{ "rotate-y": ke() }],
        "rotate-z": [{ "rotate-z": ke() }],
        scale: [{ scale: Me() }],
        "scale-x": [{ "scale-x": Me() }],
        "scale-y": [{ "scale-y": Me() }],
        "scale-z": [{ "scale-z": Me() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: ze() }],
        "skew-x": [{ "skew-x": ze() }],
        "skew-y": [{ "skew-y": ze() }],
        transform: [{ transform: [A, M, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: R() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Ae() }],
        "translate-x": [{ "translate-x": Ae() }],
        "translate-y": [{ "translate-y": Ae() }],
        "translate-z": [{ "translate-z": Ae() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: C() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: C() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              A,
              M,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": E() }],
        "scroll-mx": [{ "scroll-mx": E() }],
        "scroll-my": [{ "scroll-my": E() }],
        "scroll-ms": [{ "scroll-ms": E() }],
        "scroll-me": [{ "scroll-me": E() }],
        "scroll-mt": [{ "scroll-mt": E() }],
        "scroll-mr": [{ "scroll-mr": E() }],
        "scroll-mb": [{ "scroll-mb": E() }],
        "scroll-ml": [{ "scroll-ml": E() }],
        "scroll-p": [{ "scroll-p": E() }],
        "scroll-px": [{ "scroll-px": E() }],
        "scroll-py": [{ "scroll-py": E() }],
        "scroll-ps": [{ "scroll-ps": E() }],
        "scroll-pe": [{ "scroll-pe": E() }],
        "scroll-pt": [{ "scroll-pt": E() }],
        "scroll-pr": [{ "scroll-pr": E() }],
        "scroll-pb": [{ "scroll-pb": E() }],
        "scroll-pl": [{ "scroll-pl": E() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", A, M] },
        ],
        fill: [{ fill: ["none", ...C()] }],
        "stroke-w": [{ stroke: [I, Be, xe, Pt] }],
        stroke: [{ stroke: ["none", ...C()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  Ws = xs(zs);
function en(...e) {
  return Ws(rr(e));
}
const Bs = as(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-gray-300 dark:border-gray-600 bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-gray-200",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
function Vs({ className: e, variant: t, size: n, asChild: r = !1, ...o }) {
  const s = r ? ts : "button";
  return b.jsx(s, {
    "data-slot": "button",
    className: en(Bs({ variant: t, size: n, className: e })),
    ...o,
  });
}
function D(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e?.(o), n === !1 || !o.defaultPrevented)) return t?.(o);
  };
}
function Ye(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = c.createContext(i),
      u = n.length;
    n = [...n, i];
    const l = (f) => {
      const { scope: m, children: h, ...g } = f,
        p = m?.[e]?.[u] || a,
        v = c.useMemo(() => g, Object.values(g));
      return b.jsx(p.Provider, { value: v, children: h });
    };
    l.displayName = s + "Provider";
    function d(f, m) {
      const h = m?.[e]?.[u] || a,
        g = c.useContext(h);
      if (g) return g;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [l, d];
  }
  const o = () => {
    const s = n.map((i) => c.createContext(i));
    return function (a) {
      const u = a?.[e] || s;
      return c.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: u } }), [a, u]);
    };
  };
  return (o.scopeName = e), [r, Gs(o, ...t)];
}
function Gs(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((a, { useScope: u, scopeName: l }) => {
        const f = u(s)[`__scope${l}`];
        return { ...a, ...f };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var ve = globalThis?.document ? c.useLayoutEffect : () => {},
  Us = Jt[" useInsertionEffect ".trim().toString()] || ve;
function mr({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, s, i] = Hs({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    u = a ? e : o;
  {
    const d = c.useRef(e !== void 0);
    c.useEffect(() => {
      const f = d.current;
      f !== a &&
        console.warn(
          `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${
            a ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (d.current = a);
    }, [a, r]);
  }
  const l = c.useCallback(
    (d) => {
      if (a) {
        const f = Ks(d) ? d(e) : d;
        f !== e && i.current?.(f);
      } else s(d);
    },
    [a, e, s, i]
  );
  return [u, l];
}
function Hs({ defaultProp: e, onChange: t }) {
  const [n, r] = c.useState(e),
    o = c.useRef(n),
    s = c.useRef(t);
  return (
    Us(() => {
      s.current = t;
    }, [t]),
    c.useEffect(() => {
      o.current !== n && (s.current?.(n), (o.current = n));
    }, [n, o]),
    [n, r, s]
  );
}
function Ks(e) {
  return typeof e == "function";
}
var tn = zo();
const Ys = $o(tn);
function Xs(e) {
  const t = qs(e),
    n = c.forwardRef((r, o) => {
      const { children: s, ...i } = r,
        a = c.Children.toArray(s),
        u = a.find(Js);
      if (u) {
        const l = u.props.children,
          d = a.map((f) =>
            f === u
              ? c.Children.count(l) > 1
                ? c.Children.only(null)
                : c.isValidElement(l)
                ? l.props.children
                : null
              : f
          );
        return b.jsx(t, {
          ...i,
          ref: o,
          children: c.isValidElement(l) ? c.cloneElement(l, void 0, d) : null,
        });
      }
      return b.jsx(t, { ...i, ref: o, children: s });
    });
  return (n.displayName = `${e}.Slot`), n;
}
function qs(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = ei(o),
        a = Qs(s, o.props);
      return (
        o.type !== c.Fragment && (a.ref = r ? Ee(r, i) : i),
        c.cloneElement(o, a)
      );
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var Zs = Symbol("radix.slottable");
function Js(e) {
  return (
    c.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Zs
  );
}
function Qs(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...a) => {
            const u = s(...a);
            return o(...a), u;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...s })
      : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ei(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var ti = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  K = ti.reduce((e, t) => {
    const n = Xs(`Primitive.${t}`),
      r = c.forwardRef((o, s) => {
        const { asChild: i, ...a } = o,
          u = i ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          b.jsx(u, { ...a, ref: s })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function hr(e, t) {
  e && tn.flushSync(() => e.dispatchEvent(t));
}
function An(e) {
  const t = ni(e),
    n = c.forwardRef((r, o) => {
      const { children: s, ...i } = r,
        a = c.Children.toArray(s),
        u = a.find(oi);
      if (u) {
        const l = u.props.children,
          d = a.map((f) =>
            f === u
              ? c.Children.count(l) > 1
                ? c.Children.only(null)
                : c.isValidElement(l)
                ? l.props.children
                : null
              : f
          );
        return b.jsx(t, {
          ...i,
          ref: o,
          children: c.isValidElement(l) ? c.cloneElement(l, void 0, d) : null,
        });
      }
      return b.jsx(t, { ...i, ref: o, children: s });
    });
  return (n.displayName = `${e}.Slot`), n;
}
function ni(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = ii(o),
        a = si(s, o.props);
      return (
        o.type !== c.Fragment && (a.ref = r ? Ee(r, i) : i),
        c.cloneElement(o, a)
      );
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var ri = Symbol("radix.slottable");
function oi(e) {
  return (
    c.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === ri
  );
}
function si(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...a) => {
            const u = s(...a);
            return o(...a), u;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...s })
      : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ii(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function gr(e) {
  const t = e + "CollectionProvider",
    [n, r] = Ye(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (p) => {
      const { scope: v, children: y } = p,
        S = we.useRef(null),
        w = we.useRef(new Map()).current;
      return b.jsx(o, { scope: v, itemMap: w, collectionRef: S, children: y });
    };
  i.displayName = t;
  const a = e + "CollectionSlot",
    u = An(a),
    l = we.forwardRef((p, v) => {
      const { scope: y, children: S } = p,
        w = s(a, y),
        x = X(v, w.collectionRef);
      return b.jsx(u, { ref: x, children: S });
    });
  l.displayName = a;
  const d = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    m = An(d),
    h = we.forwardRef((p, v) => {
      const { scope: y, children: S, ...w } = p,
        x = we.useRef(null),
        R = X(v, x),
        O = s(d, y);
      return (
        we.useEffect(
          () => (
            O.itemMap.set(x, { ref: x, ...w }), () => void O.itemMap.delete(x)
          )
        ),
        b.jsx(m, { [f]: "", ref: R, children: S })
      );
    });
  h.displayName = d;
  function g(p) {
    const v = s(e + "CollectionConsumer", p);
    return we.useCallback(() => {
      const S = v.collectionRef.current;
      if (!S) return [];
      const w = Array.from(S.querySelectorAll(`[${f}]`));
      return Array.from(v.itemMap.values()).sort(
        (O, k) => w.indexOf(O.ref.current) - w.indexOf(k.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [{ Provider: i, Slot: l, ItemSlot: h }, g, r];
}
var ai = c.createContext(void 0);
function vr(e) {
  const t = c.useContext(ai);
  return e || t || "ltr";
}
function de(e) {
  const t = c.useRef(e);
  return (
    c.useEffect(() => {
      t.current = e;
    }),
    c.useMemo(
      () =>
        (...n) =>
          t.current?.(...n),
      []
    )
  );
}
function ci(e, t = globalThis?.document) {
  const n = de(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var li = "DismissableLayer",
  Gt = "dismissableLayer.update",
  ui = "dismissableLayer.pointerDownOutside",
  di = "dismissableLayer.focusOutside",
  Pn,
  br = c.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  yr = c.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: i,
        onDismiss: a,
        ...u
      } = e,
      l = c.useContext(br),
      [d, f] = c.useState(null),
      m = d?.ownerDocument ?? globalThis?.document,
      [, h] = c.useState({}),
      g = X(t, (k) => f(k)),
      p = Array.from(l.layers),
      [v] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = p.indexOf(v),
      S = d ? p.indexOf(d) : -1,
      w = l.layersWithOutsidePointerEventsDisabled.size > 0,
      x = S >= y,
      R = mi((k) => {
        const E = k.target,
          N = [...l.branches].some((L) => L.contains(E));
        !x || N || (o?.(k), i?.(k), k.defaultPrevented || a?.());
      }, m),
      O = hi((k) => {
        const E = k.target;
        [...l.branches].some((L) => L.contains(E)) ||
          (s?.(k), i?.(k), k.defaultPrevented || a?.());
      }, m);
    return (
      ci((k) => {
        S === l.layers.size - 1 &&
          (r?.(k), !k.defaultPrevented && a && (k.preventDefault(), a()));
      }, m),
      c.useEffect(() => {
        if (d)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Pn = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(d)),
            l.layers.add(d),
            On(),
            () => {
              n &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = Pn);
            }
          );
      }, [d, m, n, l]),
      c.useEffect(
        () => () => {
          d &&
            (l.layers.delete(d),
            l.layersWithOutsidePointerEventsDisabled.delete(d),
            On());
        },
        [d, l]
      ),
      c.useEffect(() => {
        const k = () => h({});
        return (
          document.addEventListener(Gt, k),
          () => document.removeEventListener(Gt, k)
        );
      }, []),
      b.jsx(K.div, {
        ...u,
        ref: g,
        style: {
          pointerEvents: w ? (x ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: D(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: D(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: D(e.onPointerDownCapture, R.onPointerDownCapture),
      })
    );
  });
yr.displayName = li;
var fi = "DismissableLayerBranch",
  pi = c.forwardRef((e, t) => {
    const n = c.useContext(br),
      r = c.useRef(null),
      o = X(t, r);
    return (
      c.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      b.jsx(K.div, { ...e, ref: o })
    );
  });
pi.displayName = fi;
function mi(e, t = globalThis?.document) {
  const n = de(e),
    r = c.useRef(!1),
    o = c.useRef(() => {});
  return (
    c.useEffect(() => {
      const s = (a) => {
          if (a.target && !r.current) {
            let u = function () {
              wr(ui, n, l, { discrete: !0 });
            };
            const l = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = u),
                t.addEventListener("click", o.current, { once: !0 }))
              : u();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function hi(e, t = globalThis?.document) {
  const n = de(e),
    r = c.useRef(!1);
  return (
    c.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          wr(di, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function On() {
  const e = new CustomEvent(Gt);
  document.dispatchEvent(e);
}
function wr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? hr(o, s) : o.dispatchEvent(s);
}
var Ot = 0;
function gi() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? _n()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? _n()),
      Ot++,
      () => {
        Ot === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Ot--;
      }
    );
  }, []);
}
function _n() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var _t = "focusScope.autoFocusOnMount",
  It = "focusScope.autoFocusOnUnmount",
  In = { bubbles: !1, cancelable: !0 },
  vi = "FocusScope",
  xr = c.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        ...i
      } = e,
      [a, u] = c.useState(null),
      l = de(o),
      d = de(s),
      f = c.useRef(null),
      m = X(t, (p) => u(p)),
      h = c.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    c.useEffect(() => {
      if (r) {
        let p = function (w) {
            if (h.paused || !a) return;
            const x = w.target;
            a.contains(x) ? (f.current = x) : ge(f.current, { select: !0 });
          },
          v = function (w) {
            if (h.paused || !a) return;
            const x = w.relatedTarget;
            x !== null && (a.contains(x) || ge(f.current, { select: !0 }));
          },
          y = function (w) {
            if (document.activeElement === document.body)
              for (const R of w) R.removedNodes.length > 0 && ge(a);
          };
        document.addEventListener("focusin", p),
          document.addEventListener("focusout", v);
        const S = new MutationObserver(y);
        return (
          a && S.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", p),
              document.removeEventListener("focusout", v),
              S.disconnect();
          }
        );
      }
    }, [r, a, h.paused]),
      c.useEffect(() => {
        if (a) {
          Nn.add(h);
          const p = document.activeElement;
          if (!a.contains(p)) {
            const y = new CustomEvent(_t, In);
            a.addEventListener(_t, l),
              a.dispatchEvent(y),
              y.defaultPrevented ||
                (bi(Ei(Cr(a)), { select: !0 }),
                document.activeElement === p && ge(a));
          }
          return () => {
            a.removeEventListener(_t, l),
              setTimeout(() => {
                const y = new CustomEvent(It, In);
                a.addEventListener(It, d),
                  a.dispatchEvent(y),
                  y.defaultPrevented || ge(p ?? document.body, { select: !0 }),
                  a.removeEventListener(It, d),
                  Nn.remove(h);
              }, 0);
          };
        }
      }, [a, l, d, h]);
    const g = c.useCallback(
      (p) => {
        if ((!n && !r) || h.paused) return;
        const v = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey,
          y = document.activeElement;
        if (v && y) {
          const S = p.currentTarget,
            [w, x] = yi(S);
          w && x
            ? !p.shiftKey && y === x
              ? (p.preventDefault(), n && ge(w, { select: !0 }))
              : p.shiftKey &&
                y === w &&
                (p.preventDefault(), n && ge(x, { select: !0 }))
            : y === S && p.preventDefault();
        }
      },
      [n, r, h.paused]
    );
    return b.jsx(K.div, { tabIndex: -1, ...i, ref: m, onKeyDown: g });
  });
xr.displayName = vi;
function bi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((ge(r, { select: t }), document.activeElement !== n)) return;
}
function yi(e) {
  const t = Cr(e),
    n = Tn(t, e),
    r = Tn(t.reverse(), e);
  return [n, r];
}
function Cr(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Tn(e, t) {
  for (const n of e) if (!wi(n, { upTo: t })) return n;
}
function wi(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function xi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ge(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && xi(e) && t && e.select();
  }
}
var Nn = Ci();
function Ci() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), (e = Dn(e, t)), e.unshift(t);
    },
    remove(t) {
      (e = Dn(e, t)), e[0]?.resume();
    },
  };
}
function Dn(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ei(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Si = Jt[" useId ".trim().toString()] || (() => {}),
  Ri = 0;
function Ut(e) {
  const [t, n] = c.useState(Si());
  return (
    ve(() => {
      n((r) => r ?? String(Ri++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const ki = ["top", "right", "bottom", "left"],
  be = Math.min,
  Z = Math.max,
  pt = Math.round,
  rt = Math.floor,
  ie = (e) => ({ x: e, y: e }),
  Mi = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Ai = { start: "end", end: "start" };
function Ht(e, t, n) {
  return Z(e, be(t, n));
}
function fe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pe(e) {
  return e.split("-")[0];
}
function je(e) {
  return e.split("-")[1];
}
function nn(e) {
  return e === "x" ? "y" : "x";
}
function rn(e) {
  return e === "y" ? "height" : "width";
}
const Pi = new Set(["top", "bottom"]);
function se(e) {
  return Pi.has(pe(e)) ? "y" : "x";
}
function on(e) {
  return nn(se(e));
}
function Oi(e, t, n) {
  n === void 0 && (n = !1);
  const r = je(e),
    o = on(e),
    s = rn(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (i = mt(i)), [i, mt(i)];
}
function _i(e) {
  const t = mt(e);
  return [Kt(e), t, Kt(t)];
}
function Kt(e) {
  return e.replace(/start|end/g, (t) => Ai[t]);
}
const Ln = ["left", "right"],
  Fn = ["right", "left"],
  Ii = ["top", "bottom"],
  Ti = ["bottom", "top"];
function Ni(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Fn : Ln) : t ? Ln : Fn;
    case "left":
    case "right":
      return t ? Ii : Ti;
    default:
      return [];
  }
}
function Di(e, t, n, r) {
  const o = je(e);
  let s = Ni(pe(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(Kt)))), s
  );
}
function mt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Mi[t]);
}
function Li(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Er(e) {
  return typeof e != "number"
    ? Li(e)
    : { top: e, right: e, bottom: e, left: e };
}
function ht(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function jn(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = se(t),
    i = on(t),
    a = rn(i),
    u = pe(t),
    l = s === "y",
    d = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    m = r[a] / 2 - o[a] / 2;
  let h;
  switch (u) {
    case "top":
      h = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      h = { x: d, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: f };
      break;
    case "left":
      h = { x: r.x - o.width, y: f };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (je(t)) {
    case "start":
      h[i] -= m * (n && l ? -1 : 1);
      break;
    case "end":
      h[i] += m * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const Fi = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    a = s.filter(Boolean),
    u = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: f } = jn(l, r, u),
    m = r,
    h = {},
    g = 0;
  for (let p = 0; p < a.length; p++) {
    const { name: v, fn: y } = a[p],
      {
        x: S,
        y: w,
        data: x,
        reset: R,
      } = await y({
        x: d,
        y: f,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: h,
        rects: l,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (d = S ?? d),
      (f = w ?? f),
      (h = { ...h, [v]: { ...h[v], ...x } }),
      R &&
        g <= 50 &&
        (g++,
        typeof R == "object" &&
          (R.placement && (m = R.placement),
          R.rects &&
            (l =
              R.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : R.rects),
          ({ x: d, y: f } = jn(l, m, u))),
        (p = -1));
  }
  return { x: d, y: f, placement: m, strategy: o, middlewareData: h };
};
async function Ge(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: a, strategy: u } = e,
    {
      boundary: l = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: m = !1,
      padding: h = 0,
    } = fe(t, e),
    g = Er(h),
    v = a[m ? (f === "floating" ? "reference" : "floating") : f],
    y = ht(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null ||
          n
            ? v
            : v.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(a.floating))),
        boundary: l,
        rootBoundary: d,
        strategy: u,
      })
    ),
    S =
      f === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    w = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(a.floating)),
    x = (await (s.isElement == null ? void 0 : s.isElement(w)))
      ? (await (s.getScale == null ? void 0 : s.getScale(w))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    R = ht(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: S,
            offsetParent: w,
            strategy: u,
          })
        : S
    );
  return {
    top: (y.top - R.top + g.top) / x.y,
    bottom: (R.bottom - y.bottom + g.bottom) / x.y,
    left: (y.left - R.left + g.left) / x.x,
    right: (R.right - y.right + g.right) / x.x,
  };
}
const ji = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: a,
          middlewareData: u,
        } = t,
        { element: l, padding: d = 0 } = fe(e, t) || {};
      if (l == null) return {};
      const f = Er(d),
        m = { x: n, y: r },
        h = on(o),
        g = rn(h),
        p = await i.getDimensions(l),
        v = h === "y",
        y = v ? "top" : "left",
        S = v ? "bottom" : "right",
        w = v ? "clientHeight" : "clientWidth",
        x = s.reference[g] + s.reference[h] - m[h] - s.floating[g],
        R = m[h] - s.reference[h],
        O = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
      let k = O ? O[w] : 0;
      (!k || !(await (i.isElement == null ? void 0 : i.isElement(O)))) &&
        (k = a.floating[w] || s.floating[g]);
      const E = x / 2 - R / 2,
        N = k / 2 - p[g] / 2 - 1,
        L = be(f[y], N),
        W = be(f[S], N),
        z = L,
        $ = k - p[g] - W,
        F = k / 2 - p[g] / 2 + E,
        B = Ht(z, F, $),
        _ =
          !u.arrow &&
          je(o) != null &&
          F !== B &&
          s.reference[g] / 2 - (F < z ? L : W) - p[g] / 2 < 0,
        j = _ ? (F < z ? F - z : F - $) : 0;
      return {
        [h]: m[h] + j,
        data: {
          [h]: B,
          centerOffset: F - B - j,
          ...(_ && { alignmentOffset: j }),
        },
        reset: _,
      };
    },
  }),
  $i = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: a,
              platform: u,
              elements: l,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: m,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: g = "none",
              flipAlignment: p = !0,
              ...v
            } = fe(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const y = pe(o),
            S = se(a),
            w = pe(a) === a,
            x = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)),
            R = m || (w || !p ? [mt(a)] : _i(a)),
            O = g !== "none";
          !m && O && R.push(...Di(a, p, g, x));
          const k = [a, ...R],
            E = await Ge(t, v),
            N = [];
          let L = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((d && N.push(E[y]), f)) {
            const F = Oi(o, i, x);
            N.push(E[F[0]], E[F[1]]);
          }
          if (
            ((L = [...L, { placement: o, overflows: N }]),
            !N.every((F) => F <= 0))
          ) {
            var W, z;
            const F = (((W = s.flip) == null ? void 0 : W.index) || 0) + 1,
              B = k[F];
            if (
              B &&
              (!(f === "alignment" ? S !== se(B) : !1) ||
                L.every((C) =>
                  se(C.placement) === S ? C.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: F, overflows: L },
                reset: { placement: B },
              };
            let _ =
              (z = L.filter((j) => j.overflows[0] <= 0).sort(
                (j, C) => j.overflows[1] - C.overflows[1]
              )[0]) == null
                ? void 0
                : z.placement;
            if (!_)
              switch (h) {
                case "bestFit": {
                  var $;
                  const j =
                    ($ = L.filter((C) => {
                      if (O) {
                        const P = se(C.placement);
                        return P === S || P === "y";
                      }
                      return !0;
                    })
                      .map((C) => [
                        C.placement,
                        C.overflows
                          .filter((P) => P > 0)
                          .reduce((P, G) => P + G, 0),
                      ])
                      .sort((C, P) => C[1] - P[1])[0]) == null
                      ? void 0
                      : $[0];
                  j && (_ = j);
                  break;
                }
                case "initialPlacement":
                  _ = a;
                  break;
              }
            if (o !== _) return { reset: { placement: _ } };
          }
          return {};
        },
      }
    );
  };
function $n(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function zn(e) {
  return ki.some((t) => e[t] >= 0);
}
const zi = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = fe(e, t);
          switch (r) {
            case "referenceHidden": {
              const s = await Ge(t, { ...o, elementContext: "reference" }),
                i = $n(s, n.reference);
              return {
                data: { referenceHiddenOffsets: i, referenceHidden: zn(i) },
              };
            }
            case "escaped": {
              const s = await Ge(t, { ...o, altBoundary: !0 }),
                i = $n(s, n.floating);
              return { data: { escapedOffsets: i, escaped: zn(i) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Sr = new Set(["left", "top"]);
async function Wi(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = pe(n),
    a = je(n),
    u = se(n) === "y",
    l = Sr.has(i) ? -1 : 1,
    d = s && u ? -1 : 1,
    f = fe(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: g,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    a && typeof g == "number" && (h = a === "end" ? g * -1 : g),
    u ? { x: h * d, y: m * l } : { x: m * l, y: h * d }
  );
}
const Bi = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: a } = t,
            u = await Wi(t, e);
          return i === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + u.x, y: s + u.y, data: { ...u, placement: i } };
        },
      }
    );
  },
  Vi = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: a = {
                fn: (v) => {
                  let { x: y, y: S } = v;
                  return { x: y, y: S };
                },
              },
              ...u
            } = fe(e, t),
            l = { x: n, y: r },
            d = await Ge(t, u),
            f = se(pe(o)),
            m = nn(f);
          let h = l[m],
            g = l[f];
          if (s) {
            const v = m === "y" ? "top" : "left",
              y = m === "y" ? "bottom" : "right",
              S = h + d[v],
              w = h - d[y];
            h = Ht(S, h, w);
          }
          if (i) {
            const v = f === "y" ? "top" : "left",
              y = f === "y" ? "bottom" : "right",
              S = g + d[v],
              w = g - d[y];
            g = Ht(S, g, w);
          }
          const p = a.fn({ ...t, [m]: h, [f]: g });
          return {
            ...p,
            data: { x: p.x - n, y: p.y - r, enabled: { [m]: s, [f]: i } },
          };
        },
      }
    );
  },
  Gi = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: a = 0, mainAxis: u = !0, crossAxis: l = !0 } = fe(e, t),
            d = { x: n, y: r },
            f = se(o),
            m = nn(f);
          let h = d[m],
            g = d[f];
          const p = fe(a, t),
            v =
              typeof p == "number"
                ? { mainAxis: p, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...p };
          if (u) {
            const w = m === "y" ? "height" : "width",
              x = s.reference[m] - s.floating[w] + v.mainAxis,
              R = s.reference[m] + s.reference[w] - v.mainAxis;
            h < x ? (h = x) : h > R && (h = R);
          }
          if (l) {
            var y, S;
            const w = m === "y" ? "width" : "height",
              x = Sr.has(pe(o)),
              R =
                s.reference[f] -
                s.floating[w] +
                ((x && ((y = i.offset) == null ? void 0 : y[f])) || 0) +
                (x ? 0 : v.crossAxis),
              O =
                s.reference[f] +
                s.reference[w] +
                (x ? 0 : ((S = i.offset) == null ? void 0 : S[f]) || 0) -
                (x ? v.crossAxis : 0);
            g < R ? (g = R) : g > O && (g = O);
          }
          return { [m]: h, [f]: g };
        },
      }
    );
  },
  Ui = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: s, platform: i, elements: a } = t,
            { apply: u = () => {}, ...l } = fe(e, t),
            d = await Ge(t, l),
            f = pe(o),
            m = je(o),
            h = se(o) === "y",
            { width: g, height: p } = s.floating;
          let v, y;
          f === "top" || f === "bottom"
            ? ((v = f),
              (y =
                m ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = f), (v = m === "end" ? "top" : "bottom"));
          const S = p - d.top - d.bottom,
            w = g - d.left - d.right,
            x = be(p - d[v], S),
            R = be(g - d[y], w),
            O = !t.middlewareData.shift;
          let k = x,
            E = R;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (E = w),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = S),
            O && !m)
          ) {
            const L = Z(d.left, 0),
              W = Z(d.right, 0),
              z = Z(d.top, 0),
              $ = Z(d.bottom, 0);
            h
              ? (E = g - 2 * (L !== 0 || W !== 0 ? L + W : Z(d.left, d.right)))
              : (k = p - 2 * (z !== 0 || $ !== 0 ? z + $ : Z(d.top, d.bottom)));
          }
          await u({ ...t, availableWidth: E, availableHeight: k });
          const N = await i.getDimensions(a.floating);
          return g !== N.width || p !== N.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function yt() {
  return typeof window < "u";
}
function $e(e) {
  return Rr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function J(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function ce(e) {
  var t;
  return (t = (Rr(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Rr(e) {
  return yt() ? e instanceof Node || e instanceof J(e).Node : !1;
}
function te(e) {
  return yt() ? e instanceof Element || e instanceof J(e).Element : !1;
}
function ae(e) {
  return yt() ? e instanceof HTMLElement || e instanceof J(e).HTMLElement : !1;
}
function Wn(e) {
  return !yt() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof J(e).ShadowRoot;
}
const Hi = new Set(["inline", "contents"]);
function Xe(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = ne(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Hi.has(o);
}
const Ki = new Set(["table", "td", "th"]);
function Yi(e) {
  return Ki.has($e(e));
}
const Xi = [":popover-open", ":modal"];
function wt(e) {
  return Xi.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const qi = ["transform", "translate", "scale", "rotate", "perspective"],
  Zi = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  Ji = ["paint", "layout", "strict", "content"];
function sn(e) {
  const t = an(),
    n = te(e) ? ne(e) : e;
  return (
    qi.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    Zi.some((r) => (n.willChange || "").includes(r)) ||
    Ji.some((r) => (n.contain || "").includes(r))
  );
}
function Qi(e) {
  let t = ye(e);
  for (; ae(t) && !De(t); ) {
    if (sn(t)) return t;
    if (wt(t)) return null;
    t = ye(t);
  }
  return null;
}
function an() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const ea = new Set(["html", "body", "#document"]);
function De(e) {
  return ea.has($e(e));
}
function ne(e) {
  return J(e).getComputedStyle(e);
}
function xt(e) {
  return te(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function ye(e) {
  if ($e(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Wn(e) && e.host) || ce(e);
  return Wn(t) ? t.host : t;
}
function kr(e) {
  const t = ye(e);
  return De(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : ae(t) && Xe(t)
    ? t
    : kr(t);
}
function Ue(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = kr(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = J(o);
  if (s) {
    const a = Yt(i);
    return t.concat(
      i,
      i.visualViewport || [],
      Xe(o) ? o : [],
      a && n ? Ue(a) : []
    );
  }
  return t.concat(o, Ue(o, [], n));
}
function Yt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Mr(e) {
  const t = ne(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = ae(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    a = pt(n) !== s || pt(r) !== i;
  return a && ((n = s), (r = i)), { width: n, height: r, $: a };
}
function cn(e) {
  return te(e) ? e : e.contextElement;
}
function Te(e) {
  const t = cn(e);
  if (!ae(t)) return ie(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = Mr(t);
  let i = (s ? pt(n.width) : n.width) / r,
    a = (s ? pt(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: i, y: a }
  );
}
const ta = ie(0);
function Ar(e) {
  const t = J(e);
  return !an() || !t.visualViewport
    ? ta
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function na(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== J(e)) ? !1 : t;
}
function Ce(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = cn(e);
  let i = ie(1);
  t && (r ? te(r) && (i = Te(r)) : (i = Te(e)));
  const a = na(s, n, r) ? Ar(s) : ie(0);
  let u = (o.left + a.x) / i.x,
    l = (o.top + a.y) / i.y,
    d = o.width / i.x,
    f = o.height / i.y;
  if (s) {
    const m = J(s),
      h = r && te(r) ? J(r) : r;
    let g = m,
      p = Yt(g);
    for (; p && r && h !== g; ) {
      const v = Te(p),
        y = p.getBoundingClientRect(),
        S = ne(p),
        w = y.left + (p.clientLeft + parseFloat(S.paddingLeft)) * v.x,
        x = y.top + (p.clientTop + parseFloat(S.paddingTop)) * v.y;
      (u *= v.x),
        (l *= v.y),
        (d *= v.x),
        (f *= v.y),
        (u += w),
        (l += x),
        (g = J(p)),
        (p = Yt(g));
    }
  }
  return ht({ width: d, height: f, x: u, y: l });
}
function Ct(e, t) {
  const n = xt(e).scrollLeft;
  return t ? t.left + n : Ce(ce(e)).left + n;
}
function Pr(e, t) {
  const n = e.getBoundingClientRect(),
    r = n.left + t.scrollLeft - Ct(e, n),
    o = n.top + t.scrollTop;
  return { x: r, y: o };
}
function ra(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = ce(r),
    a = t ? wt(t.floating) : !1;
  if (r === i || (a && s)) return n;
  let u = { scrollLeft: 0, scrollTop: 0 },
    l = ie(1);
  const d = ie(0),
    f = ae(r);
  if (
    (f || (!f && !s)) &&
    (($e(r) !== "body" || Xe(i)) && (u = xt(r)), ae(r))
  ) {
    const h = Ce(r);
    (l = Te(r)), (d.x = h.x + r.clientLeft), (d.y = h.y + r.clientTop);
  }
  const m = i && !f && !s ? Pr(i, u) : ie(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - u.scrollLeft * l.x + d.x + m.x,
    y: n.y * l.y - u.scrollTop * l.y + d.y + m.y,
  };
}
function oa(e) {
  return Array.from(e.getClientRects());
}
function sa(e) {
  const t = ce(e),
    n = xt(e),
    r = e.ownerDocument.body,
    o = Z(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = Z(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Ct(e);
  const a = -n.scrollTop;
  return (
    ne(r).direction === "rtl" && (i += Z(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: a }
  );
}
const Bn = 25;
function ia(e, t) {
  const n = J(e),
    r = ce(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    a = 0,
    u = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const d = an();
    (!d || (d && t === "fixed")) && ((a = o.offsetLeft), (u = o.offsetTop));
  }
  const l = Ct(r);
  if (l <= 0) {
    const d = r.ownerDocument,
      f = d.body,
      m = getComputedStyle(f),
      h =
        (d.compatMode === "CSS1Compat" &&
          parseFloat(m.marginLeft) + parseFloat(m.marginRight)) ||
        0,
      g = Math.abs(r.clientWidth - f.clientWidth - h);
    g <= Bn && (s -= g);
  } else l <= Bn && (s += l);
  return { width: s, height: i, x: a, y: u };
}
const aa = new Set(["absolute", "fixed"]);
function ca(e, t) {
  const n = Ce(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = ae(e) ? Te(e) : ie(1),
    i = e.clientWidth * s.x,
    a = e.clientHeight * s.y,
    u = o * s.x,
    l = r * s.y;
  return { width: i, height: a, x: u, y: l };
}
function Vn(e, t, n) {
  let r;
  if (t === "viewport") r = ia(e, n);
  else if (t === "document") r = sa(ce(e));
  else if (te(t)) r = ca(t, n);
  else {
    const o = Ar(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return ht(r);
}
function Or(e, t) {
  const n = ye(e);
  return n === t || !te(n) || De(n)
    ? !1
    : ne(n).position === "fixed" || Or(n, t);
}
function la(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ue(e, [], !1).filter((a) => te(a) && $e(a) !== "body"),
    o = null;
  const s = ne(e).position === "fixed";
  let i = s ? ye(e) : e;
  for (; te(i) && !De(i); ) {
    const a = ne(i),
      u = sn(i);
    !u && a.position === "fixed" && (o = null),
      (
        s
          ? !u && !o
          : (!u && a.position === "static" && !!o && aa.has(o.position)) ||
            (Xe(i) && !u && Or(e, i))
      )
        ? (r = r.filter((d) => d !== i))
        : (o = a),
      (i = ye(i));
  }
  return t.set(e, r), r;
}
function ua(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? wt(t)
          ? []
          : la(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = i[0],
    u = i.reduce((l, d) => {
      const f = Vn(t, d, o);
      return (
        (l.top = Z(f.top, l.top)),
        (l.right = be(f.right, l.right)),
        (l.bottom = be(f.bottom, l.bottom)),
        (l.left = Z(f.left, l.left)),
        l
      );
    }, Vn(t, a, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top,
  };
}
function da(e) {
  const { width: t, height: n } = Mr(e);
  return { width: t, height: n };
}
function fa(e, t, n) {
  const r = ae(t),
    o = ce(t),
    s = n === "fixed",
    i = Ce(e, !0, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const u = ie(0);
  function l() {
    u.x = Ct(o);
  }
  if (r || (!r && !s))
    if ((($e(t) !== "body" || Xe(o)) && (a = xt(t)), r)) {
      const h = Ce(t, !0, s, t);
      (u.x = h.x + t.clientLeft), (u.y = h.y + t.clientTop);
    } else o && l();
  s && !r && o && l();
  const d = o && !r && !s ? Pr(o, a) : ie(0),
    f = i.left + a.scrollLeft - u.x - d.x,
    m = i.top + a.scrollTop - u.y - d.y;
  return { x: f, y: m, width: i.width, height: i.height };
}
function Tt(e) {
  return ne(e).position === "static";
}
function Gn(e, t) {
  if (!ae(e) || ne(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return ce(e) === n && (n = n.ownerDocument.body), n;
}
function _r(e, t) {
  const n = J(e);
  if (wt(e)) return n;
  if (!ae(e)) {
    let o = ye(e);
    for (; o && !De(o); ) {
      if (te(o) && !Tt(o)) return o;
      o = ye(o);
    }
    return n;
  }
  let r = Gn(e, t);
  for (; r && Yi(r) && Tt(r); ) r = Gn(r, t);
  return r && De(r) && Tt(r) && !sn(r) ? n : r || Qi(e) || n;
}
const pa = async function (e) {
  const t = this.getOffsetParent || _r,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: fa(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function ma(e) {
  return ne(e).direction === "rtl";
}
const ha = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ra,
  getDocumentElement: ce,
  getClippingRect: ua,
  getOffsetParent: _r,
  getElementRects: pa,
  getClientRects: oa,
  getDimensions: da,
  getScale: Te,
  isElement: te,
  isRTL: ma,
};
function Ir(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function ga(e, t) {
  let n = null,
    r;
  const o = ce(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function i(a, u) {
    a === void 0 && (a = !1), u === void 0 && (u = 1), s();
    const l = e.getBoundingClientRect(),
      { left: d, top: f, width: m, height: h } = l;
    if ((a || t(), !m || !h)) return;
    const g = rt(f),
      p = rt(o.clientWidth - (d + m)),
      v = rt(o.clientHeight - (f + h)),
      y = rt(d),
      w = {
        rootMargin: -g + "px " + -p + "px " + -v + "px " + -y + "px",
        threshold: Z(0, be(1, u)) || 1,
      };
    let x = !0;
    function R(O) {
      const k = O[0].intersectionRatio;
      if (k !== u) {
        if (!x) return i();
        k
          ? i(!1, k)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      k === 1 && !Ir(l, e.getBoundingClientRect()) && i(), (x = !1);
    }
    try {
      n = new IntersectionObserver(R, { ...w, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(R, w);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function va(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: u = !1,
    } = r,
    l = cn(e),
    d = o || s ? [...(l ? Ue(l) : []), ...Ue(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n, { passive: !0 }),
      s && y.addEventListener("resize", n);
  });
  const f = l && a ? ga(l, n) : null;
  let m = -1,
    h = null;
  i &&
    ((h = new ResizeObserver((y) => {
      let [S] = y;
      S &&
        S.target === l &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var w;
          (w = h) == null || w.observe(t);
        }))),
        n();
    })),
    l && !u && h.observe(l),
    h.observe(t));
  let g,
    p = u ? Ce(e) : null;
  u && v();
  function v() {
    const y = Ce(e);
    p && !Ir(p, y) && n(), (p = y), (g = requestAnimationFrame(v));
  }
  return (
    n(),
    () => {
      var y;
      d.forEach((S) => {
        o && S.removeEventListener("scroll", n),
          s && S.removeEventListener("resize", n);
      }),
        f?.(),
        (y = h) == null || y.disconnect(),
        (h = null),
        u && cancelAnimationFrame(g);
    }
  );
}
const ba = Bi,
  ya = Vi,
  wa = $i,
  xa = Ui,
  Ca = zi,
  Un = ji,
  Ea = Gi,
  Sa = (e, t, n) => {
    const r = new Map(),
      o = { platform: ha, ...n },
      s = { ...o.platform, _c: r };
    return Fi(e, t, { ...o, platform: s });
  };
var Ra = typeof document < "u",
  ka = function () {},
  lt = Ra ? c.useLayoutEffect : ka;
function gt(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!gt(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !gt(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Tr(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Hn(e, t) {
  const n = Tr(e);
  return Math.round(t * n) / n;
}
function Nt(e) {
  const t = c.useRef(e);
  return (
    lt(() => {
      t.current = e;
    }),
    t
  );
}
function Ma(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: a = !0,
      whileElementsMounted: u,
      open: l,
    } = e,
    [d, f] = c.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, h] = c.useState(r);
  gt(m, r) || h(r);
  const [g, p] = c.useState(null),
    [v, y] = c.useState(null),
    S = c.useCallback((C) => {
      C !== O.current && ((O.current = C), p(C));
    }, []),
    w = c.useCallback((C) => {
      C !== k.current && ((k.current = C), y(C));
    }, []),
    x = s || g,
    R = i || v,
    O = c.useRef(null),
    k = c.useRef(null),
    E = c.useRef(d),
    N = u != null,
    L = Nt(u),
    W = Nt(o),
    z = Nt(l),
    $ = c.useCallback(() => {
      if (!O.current || !k.current) return;
      const C = { placement: t, strategy: n, middleware: m };
      W.current && (C.platform = W.current),
        Sa(O.current, k.current, C).then((P) => {
          const G = { ...P, isPositioned: z.current !== !1 };
          F.current &&
            !gt(E.current, G) &&
            ((E.current = G),
            tn.flushSync(() => {
              f(G);
            }));
        });
    }, [m, t, n, W, z]);
  lt(() => {
    l === !1 &&
      E.current.isPositioned &&
      ((E.current.isPositioned = !1), f((C) => ({ ...C, isPositioned: !1 })));
  }, [l]);
  const F = c.useRef(!1);
  lt(
    () => (
      (F.current = !0),
      () => {
        F.current = !1;
      }
    ),
    []
  ),
    lt(() => {
      if ((x && (O.current = x), R && (k.current = R), x && R)) {
        if (L.current) return L.current(x, R, $);
        $();
      }
    }, [x, R, $, L, N]);
  const B = c.useMemo(
      () => ({ reference: O, floating: k, setReference: S, setFloating: w }),
      [S, w]
    ),
    _ = c.useMemo(() => ({ reference: x, floating: R }), [x, R]),
    j = c.useMemo(() => {
      const C = { position: n, left: 0, top: 0 };
      if (!_.floating) return C;
      const P = Hn(_.floating, d.x),
        G = Hn(_.floating, d.y);
      return a
        ? {
            ...C,
            transform: "translate(" + P + "px, " + G + "px)",
            ...(Tr(_.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: P, top: G };
    }, [n, a, _.floating, d.x, d.y]);
  return c.useMemo(
    () => ({ ...d, update: $, refs: B, elements: _, floatingStyles: j }),
    [d, $, B, _, j]
  );
}
const Aa = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Un({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Un({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  Pa = (e, t) => ({ ...ba(e), options: [e, t] }),
  Oa = (e, t) => ({ ...ya(e), options: [e, t] }),
  _a = (e, t) => ({ ...Ea(e), options: [e, t] }),
  Ia = (e, t) => ({ ...wa(e), options: [e, t] }),
  Ta = (e, t) => ({ ...xa(e), options: [e, t] }),
  Na = (e, t) => ({ ...Ca(e), options: [e, t] }),
  Da = (e, t) => ({ ...Aa(e), options: [e, t] });
var La = "Arrow",
  Nr = c.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...s } = e;
    return b.jsx(K.svg, {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : b.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Nr.displayName = La;
var Fa = Nr;
function ja(e) {
  const [t, n] = c.useState(void 0);
  return (
    ve(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, a;
          if ("borderBoxSize" in s) {
            const u = s.borderBoxSize,
              l = Array.isArray(u) ? u[0] : u;
            (i = l.inlineSize), (a = l.blockSize);
          } else (i = e.offsetWidth), (a = e.offsetHeight);
          n({ width: i, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var ln = "Popper",
  [Dr, Lr] = Ye(ln),
  [$a, Fr] = Dr(ln),
  jr = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = c.useState(null);
    return b.jsx($a, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
jr.displayName = ln;
var $r = "PopperAnchor",
  zr = c.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = Fr($r, n),
      i = c.useRef(null),
      a = X(t, i),
      u = c.useRef(null);
    return (
      c.useEffect(() => {
        const l = u.current;
        (u.current = r?.current || i.current),
          l !== u.current && s.onAnchorChange(u.current);
      }),
      r ? null : b.jsx(K.div, { ...o, ref: a })
    );
  });
zr.displayName = $r;
var un = "PopperContent",
  [za, Wa] = Dr(un),
  Wr = c.forwardRef((e, t) => {
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: s = "center",
        alignOffset: i = 0,
        arrowPadding: a = 0,
        avoidCollisions: u = !0,
        collisionBoundary: l = [],
        collisionPadding: d = 0,
        sticky: f = "partial",
        hideWhenDetached: m = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: g,
        ...p
      } = e,
      v = Fr(un, n),
      [y, S] = c.useState(null),
      w = X(t, (T) => S(T)),
      [x, R] = c.useState(null),
      O = ja(x),
      k = O?.width ?? 0,
      E = O?.height ?? 0,
      N = r + (s !== "center" ? "-" + s : ""),
      L =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      W = Array.isArray(l) ? l : [l],
      z = W.length > 0,
      $ = { padding: L, boundary: W.filter(Va), altBoundary: z },
      {
        refs: F,
        floatingStyles: B,
        placement: _,
        isPositioned: j,
        middlewareData: C,
      } = Ma({
        strategy: "fixed",
        placement: N,
        whileElementsMounted: (...T) =>
          va(...T, { animationFrame: h === "always" }),
        elements: { reference: v.anchor },
        middleware: [
          Pa({ mainAxis: o + E, alignmentAxis: i }),
          u &&
            Oa({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? _a() : void 0,
              ...$,
            }),
          u && Ia({ ...$ }),
          Ta({
            ...$,
            apply: ({
              elements: T,
              rects: me,
              availableWidth: ke,
              availableHeight: Me,
            }) => {
              const { width: ze, height: Ae } = me.reference,
                et = T.floating.style;
              et.setProperty("--radix-popper-available-width", `${ke}px`),
                et.setProperty("--radix-popper-available-height", `${Me}px`),
                et.setProperty("--radix-popper-anchor-width", `${ze}px`),
                et.setProperty("--radix-popper-anchor-height", `${Ae}px`);
            },
          }),
          x && Da({ element: x, padding: a }),
          Ga({ arrowWidth: k, arrowHeight: E }),
          m && Na({ strategy: "referenceHidden", ...$ }),
        ],
      }),
      [P, G] = Gr(_),
      q = de(g);
    ve(() => {
      j && q?.();
    }, [j, q]);
    const ee = C.arrow?.x,
      V = C.arrow?.y,
      U = C.arrow?.centerOffset !== 0,
      [le, re] = c.useState();
    return (
      ve(() => {
        y && re(window.getComputedStyle(y).zIndex);
      }, [y]),
      b.jsx("div", {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: j ? B.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: le,
          "--radix-popper-transform-origin": [
            C.transformOrigin?.x,
            C.transformOrigin?.y,
          ].join(" "),
          ...(C.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: b.jsx(za, {
          scope: n,
          placedSide: P,
          onArrowChange: R,
          arrowX: ee,
          arrowY: V,
          shouldHideArrow: U,
          children: b.jsx(K.div, {
            "data-side": P,
            "data-align": G,
            ...p,
            ref: w,
            style: { ...p.style, animation: j ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Wr.displayName = un;
var Br = "PopperArrow",
  Ba = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Vr = c.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      s = Wa(Br, r),
      i = Ba[s.placedSide];
    return b.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: b.jsx(Fa, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
Vr.displayName = Br;
function Va(e) {
  return e !== null;
}
var Ga = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t,
      i = o.arrow?.centerOffset !== 0,
      a = i ? 0 : e.arrowWidth,
      u = i ? 0 : e.arrowHeight,
      [l, d] = Gr(n),
      f = { start: "0%", center: "50%", end: "100%" }[d],
      m = (o.arrow?.x ?? 0) + a / 2,
      h = (o.arrow?.y ?? 0) + u / 2;
    let g = "",
      p = "";
    return (
      l === "bottom"
        ? ((g = i ? f : `${m}px`), (p = `${-u}px`))
        : l === "top"
        ? ((g = i ? f : `${m}px`), (p = `${r.floating.height + u}px`))
        : l === "right"
        ? ((g = `${-u}px`), (p = i ? f : `${h}px`))
        : l === "left" &&
          ((g = `${r.floating.width + u}px`), (p = i ? f : `${h}px`)),
      { data: { x: g, y: p } }
    );
  },
});
function Gr(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Ua = jr,
  Ha = zr,
  Ka = Wr,
  Ya = Vr,
  Xa = "Portal",
  Ur = c.forwardRef((e, t) => {
    const { container: n, ...r } = e,
      [o, s] = c.useState(!1);
    ve(() => s(!0), []);
    const i = n || (o && globalThis?.document?.body);
    return i ? Ys.createPortal(b.jsx(K.div, { ...r, ref: t }), i) : null;
  });
Ur.displayName = Xa;
function qa(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var qe = (e) => {
  const { present: t, children: n } = e,
    r = Za(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n),
    s = X(r.ref, Ja(o));
  return typeof n == "function" || r.isPresent
    ? c.cloneElement(o, { ref: s })
    : null;
};
qe.displayName = "Presence";
function Za(e) {
  const [t, n] = c.useState(),
    r = c.useRef(null),
    o = c.useRef(e),
    s = c.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [a, u] = qa(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    c.useEffect(() => {
      const l = ot(r.current);
      s.current = a === "mounted" ? l : "none";
    }, [a]),
    ve(() => {
      const l = r.current,
        d = o.current;
      if (d !== e) {
        const m = s.current,
          h = ot(l);
        e
          ? u("MOUNT")
          : h === "none" || l?.display === "none"
          ? u("UNMOUNT")
          : u(d && m !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, u]),
    ve(() => {
      if (t) {
        let l;
        const d = t.ownerDocument.defaultView ?? window,
          f = (h) => {
            const p = ot(r.current).includes(CSS.escape(h.animationName));
            if (h.target === t && p && (u("ANIMATION_END"), !o.current)) {
              const v = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (l = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = v);
                }));
            }
          },
          m = (h) => {
            h.target === t && (s.current = ot(r.current));
          };
        return (
          t.addEventListener("animationstart", m),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            d.clearTimeout(l),
              t.removeEventListener("animationstart", m),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else u("ANIMATION_END");
    }, [t, u]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: c.useCallback((l) => {
        (r.current = l ? getComputedStyle(l) : null), n(l);
      }, []),
    }
  );
}
function ot(e) {
  return e?.animationName || "none";
}
function Ja(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Dt = "rovingFocusGroup.onEntryFocus",
  Qa = { bubbles: !1, cancelable: !0 },
  Ze = "RovingFocusGroup",
  [Xt, Hr, ec] = gr(Ze),
  [tc, Kr] = Ye(Ze, [ec]),
  [nc, rc] = tc(Ze),
  Yr = c.forwardRef((e, t) =>
    b.jsx(Xt.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: b.jsx(Xt.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: b.jsx(oc, { ...e, ref: t }),
      }),
    })
  );
Yr.displayName = Ze;
var oc = c.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: s,
        currentTabStopId: i,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: u,
        onEntryFocus: l,
        preventScrollOnEntryFocus: d = !1,
        ...f
      } = e,
      m = c.useRef(null),
      h = X(t, m),
      g = vr(s),
      [p, v] = mr({ prop: i, defaultProp: a ?? null, onChange: u, caller: Ze }),
      [y, S] = c.useState(!1),
      w = de(l),
      x = Hr(n),
      R = c.useRef(!1),
      [O, k] = c.useState(0);
    return (
      c.useEffect(() => {
        const E = m.current;
        if (E)
          return E.addEventListener(Dt, w), () => E.removeEventListener(Dt, w);
      }, [w]),
      b.jsx(nc, {
        scope: n,
        orientation: r,
        dir: g,
        loop: o,
        currentTabStopId: p,
        onItemFocus: c.useCallback((E) => v(E), [v]),
        onItemShiftTab: c.useCallback(() => S(!0), []),
        onFocusableItemAdd: c.useCallback(() => k((E) => E + 1), []),
        onFocusableItemRemove: c.useCallback(() => k((E) => E - 1), []),
        children: b.jsx(K.div, {
          tabIndex: y || O === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: D(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: D(e.onFocus, (E) => {
            const N = !R.current;
            if (E.target === E.currentTarget && N && !y) {
              const L = new CustomEvent(Dt, Qa);
              if ((E.currentTarget.dispatchEvent(L), !L.defaultPrevented)) {
                const W = x().filter((_) => _.focusable),
                  z = W.find((_) => _.active),
                  $ = W.find((_) => _.id === p),
                  B = [z, $, ...W].filter(Boolean).map((_) => _.ref.current);
                Zr(B, d);
              }
            }
            R.current = !1;
          }),
          onBlur: D(e.onBlur, () => S(!1)),
        }),
      })
    );
  }),
  Xr = "RovingFocusGroupItem",
  qr = c.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: s,
        children: i,
        ...a
      } = e,
      u = Ut(),
      l = s || u,
      d = rc(Xr, n),
      f = d.currentTabStopId === l,
      m = Hr(n),
      {
        onFocusableItemAdd: h,
        onFocusableItemRemove: g,
        currentTabStopId: p,
      } = d;
    return (
      c.useEffect(() => {
        if (r) return h(), () => g();
      }, [r, h, g]),
      b.jsx(Xt.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: b.jsx(K.span, {
          tabIndex: f ? 0 : -1,
          "data-orientation": d.orientation,
          ...a,
          ref: t,
          onMouseDown: D(e.onMouseDown, (v) => {
            r ? d.onItemFocus(l) : v.preventDefault();
          }),
          onFocus: D(e.onFocus, () => d.onItemFocus(l)),
          onKeyDown: D(e.onKeyDown, (v) => {
            if (v.key === "Tab" && v.shiftKey) {
              d.onItemShiftTab();
              return;
            }
            if (v.target !== v.currentTarget) return;
            const y = ac(v, d.orientation, d.dir);
            if (y !== void 0) {
              if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
              v.preventDefault();
              let w = m()
                .filter((x) => x.focusable)
                .map((x) => x.ref.current);
              if (y === "last") w.reverse();
              else if (y === "prev" || y === "next") {
                y === "prev" && w.reverse();
                const x = w.indexOf(v.currentTarget);
                w = d.loop ? cc(w, x + 1) : w.slice(x + 1);
              }
              setTimeout(() => Zr(w));
            }
          }),
          children:
            typeof i == "function"
              ? i({ isCurrentTabStop: f, hasTabStop: p != null })
              : i,
        }),
      })
    );
  });
qr.displayName = Xr;
var sc = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function ic(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function ac(e, t, n) {
  const r = ic(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return sc[r];
}
function Zr(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function cc(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var lc = Yr,
  uc = qr;
function dc(e) {
  const t = fc(e),
    n = c.forwardRef((r, o) => {
      const { children: s, ...i } = r,
        a = c.Children.toArray(s),
        u = a.find(mc);
      if (u) {
        const l = u.props.children,
          d = a.map((f) =>
            f === u
              ? c.Children.count(l) > 1
                ? c.Children.only(null)
                : c.isValidElement(l)
                ? l.props.children
                : null
              : f
          );
        return b.jsx(t, {
          ...i,
          ref: o,
          children: c.isValidElement(l) ? c.cloneElement(l, void 0, d) : null,
        });
      }
      return b.jsx(t, { ...i, ref: o, children: s });
    });
  return (n.displayName = `${e}.Slot`), n;
}
function fc(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = gc(o),
        a = hc(s, o.props);
      return (
        o.type !== c.Fragment && (a.ref = r ? Ee(r, i) : i),
        c.cloneElement(o, a)
      );
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var pc = Symbol("radix.slottable");
function mc(e) {
  return (
    c.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === pc
  );
}
function hc(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...a) => {
            const u = s(...a);
            return o(...a), u;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...s })
      : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function gc(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var vc = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Oe = new WeakMap(),
  st = new WeakMap(),
  it = {},
  Lt = 0,
  Jr = function (e) {
    return e && (e.host || Jr(e.parentNode));
  },
  bc = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Jr(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  yc = function (e, t, n, r) {
    var o = bc(t, Array.isArray(e) ? e : [e]);
    it[n] || (it[n] = new WeakMap());
    var s = it[n],
      i = [],
      a = new Set(),
      u = new Set(o),
      l = function (f) {
        !f || a.has(f) || (a.add(f), l(f.parentNode));
      };
    o.forEach(l);
    var d = function (f) {
      !f ||
        u.has(f) ||
        Array.prototype.forEach.call(f.children, function (m) {
          if (a.has(m)) d(m);
          else
            try {
              var h = m.getAttribute(r),
                g = h !== null && h !== "false",
                p = (Oe.get(m) || 0) + 1,
                v = (s.get(m) || 0) + 1;
              Oe.set(m, p),
                s.set(m, v),
                i.push(m),
                p === 1 && g && st.set(m, !0),
                v === 1 && m.setAttribute(n, "true"),
                g || m.setAttribute(r, "true");
            } catch (y) {
              console.error("aria-hidden: cannot operate on ", m, y);
            }
        });
    };
    return (
      d(t),
      a.clear(),
      Lt++,
      function () {
        i.forEach(function (f) {
          var m = Oe.get(f) - 1,
            h = s.get(f) - 1;
          Oe.set(f, m),
            s.set(f, h),
            m || (st.has(f) || f.removeAttribute(r), st.delete(f)),
            h || f.removeAttribute(n);
        }),
          Lt--,
          Lt ||
            ((Oe = new WeakMap()),
            (Oe = new WeakMap()),
            (st = new WeakMap()),
            (it = {}));
      }
    );
  },
  wc = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = vc(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))),
        yc(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  oe = function () {
    return (
      (oe =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
              Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
          }
          return t;
        }),
      oe.apply(this, arguments)
    );
  };
function Qr(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function xc(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var ut = "right-scroll-bar-position",
  dt = "width-before-scroll-bar",
  Cc = "with-scroll-bars-hidden",
  Ec = "--removed-body-scroll-bar-size";
function Ft(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Sc(e, t) {
  var n = c.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Rc = typeof window < "u" ? c.useLayoutEffect : c.useEffect,
  Kn = new WeakMap();
function kc(e, t) {
  var n = Sc(null, function (r) {
    return e.forEach(function (o) {
      return Ft(o, r);
    });
  });
  return (
    Rc(
      function () {
        var r = Kn.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          o.forEach(function (a) {
            s.has(a) || Ft(a, null);
          }),
            s.forEach(function (a) {
              o.has(a) || Ft(a, i);
            });
        }
        Kn.set(n, e);
      },
      [e]
    ),
    n
  );
}
function Mc(e) {
  return e;
}
function Ac(e, t) {
  t === void 0 && (t = Mc);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var i = t(s, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (a) {
              return a !== i;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(s);
        }
        n = {
          push: function (a) {
            return s(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var i = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(s), (i = n);
        }
        var u = function () {
            var d = i;
            (i = []), d.forEach(s);
          },
          l = function () {
            return Promise.resolve().then(u);
          };
        l(),
          (n = {
            push: function (d) {
              i.push(d), l();
            },
            filter: function (d) {
              return (i = i.filter(d)), n;
            },
          });
      },
    };
  return o;
}
function Pc(e) {
  e === void 0 && (e = {});
  var t = Ac(null);
  return (t.options = oe({ async: !0, ssr: !1 }, e)), t;
}
var eo = function (e) {
  var t = e.sideCar,
    n = Qr(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return c.createElement(r, oe({}, n));
};
eo.isSideCarExport = !0;
function Oc(e, t) {
  return e.useMedium(t), eo;
}
var to = Pc(),
  jt = function () {},
  Et = c.forwardRef(function (e, t) {
    var n = c.useRef(null),
      r = c.useState({
        onScrollCapture: jt,
        onWheelCapture: jt,
        onTouchMoveCapture: jt,
      }),
      o = r[0],
      s = r[1],
      i = e.forwardProps,
      a = e.children,
      u = e.className,
      l = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      m = e.sideCar,
      h = e.noRelative,
      g = e.noIsolation,
      p = e.inert,
      v = e.allowPinchZoom,
      y = e.as,
      S = y === void 0 ? "div" : y,
      w = e.gapMode,
      x = Qr(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      R = m,
      O = kc([n, t]),
      k = oe(oe({}, x), o);
    return c.createElement(
      c.Fragment,
      null,
      d &&
        c.createElement(R, {
          sideCar: to,
          removeScrollBar: l,
          shards: f,
          noRelative: h,
          noIsolation: g,
          inert: p,
          setCallbacks: s,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: w,
        }),
      i
        ? c.cloneElement(c.Children.only(a), oe(oe({}, k), { ref: O }))
        : c.createElement(S, oe({}, k, { className: u, ref: O }), a)
    );
  });
Et.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Et.classNames = { fullWidth: dt, zeroRight: ut };
var _c = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Ic() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = _c();
  return t && e.setAttribute("nonce", t), e;
}
function Tc(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Nc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Dc = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Ic()) && (Tc(t, n), Nc(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Lc = function () {
    var e = Dc();
    return function (t, n) {
      c.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  no = function () {
    var e = Lc(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  Fc = { left: 0, top: 0, right: 0, gap: 0 },
  $t = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  jc = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [$t(n), $t(r), $t(o)];
  },
  $c = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return Fc;
    var t = jc(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  zc = no(),
  Ne = "data-scroll-locked",
  Wc = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Cc,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          Ne,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  s,
                  `px;
    padding-right: `
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          ut,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          dt,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ut, " .")
        .concat(
          ut,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(dt, " .")
        .concat(
          dt,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          Ne,
          `] {
    `
        )
        .concat(Ec, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  Yn = function () {
    var e = parseInt(document.body.getAttribute(Ne) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  Bc = function () {
    c.useEffect(function () {
      return (
        document.body.setAttribute(Ne, (Yn() + 1).toString()),
        function () {
          var e = Yn() - 1;
          e <= 0
            ? document.body.removeAttribute(Ne)
            : document.body.setAttribute(Ne, e.toString());
        }
      );
    }, []);
  },
  Vc = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    Bc();
    var s = c.useMemo(
      function () {
        return $c(o);
      },
      [o]
    );
    return c.createElement(zc, { styles: Wc(s, !t, o, n ? "" : "!important") });
  },
  qt = !1;
if (typeof window < "u")
  try {
    var at = Object.defineProperty({}, "passive", {
      get: function () {
        return (qt = !0), !0;
      },
    });
    window.addEventListener("test", at, at),
      window.removeEventListener("test", at, at);
  } catch {
    qt = !1;
  }
var _e = qt ? { passive: !1 } : !1,
  Gc = function (e) {
    return e.tagName === "TEXTAREA";
  },
  ro = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Gc(e) && n[t] === "visible")
    );
  },
  Uc = function (e) {
    return ro(e, "overflowY");
  },
  Hc = function (e) {
    return ro(e, "overflowX");
  },
  Xn = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = oo(e, r);
      if (o) {
        var s = so(e, r),
          i = s[1],
          a = s[2];
        if (i > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Kc = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Yc = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  oo = function (e, t) {
    return e === "v" ? Uc(t) : Hc(t);
  },
  so = function (e, t) {
    return e === "v" ? Kc(t) : Yc(t);
  },
  Xc = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  qc = function (e, t, n, r, o) {
    var s = Xc(e, window.getComputedStyle(t).direction),
      i = s * r,
      a = n.target,
      u = t.contains(a),
      l = !1,
      d = i > 0,
      f = 0,
      m = 0;
    do {
      if (!a) break;
      var h = so(e, a),
        g = h[0],
        p = h[1],
        v = h[2],
        y = p - v - s * g;
      (g || y) && oo(e, a) && ((f += y), (m += g));
      var S = a.parentNode;
      a = S && S.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? S.host : S;
    } while ((!u && a !== document.body) || (u && (t.contains(a) || t === a)));
    return ((d && Math.abs(f) < 1) || (!d && Math.abs(m) < 1)) && (l = !0), l;
  },
  ct = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  qn = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Zn = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Zc = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Jc = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  Qc = 0,
  Ie = [];
function el(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    r = c.useRef(),
    o = c.useState(Qc++)[0],
    s = c.useState(no)[0],
    i = c.useRef(e);
  c.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    c.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var p = xc([e.lockRef.current], (e.shards || []).map(Zn), !0).filter(
            Boolean
          );
          return (
            p.forEach(function (v) {
              return v.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                p.forEach(function (v) {
                  return v.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = c.useCallback(function (p, v) {
      if (
        ("touches" in p && p.touches.length === 2) ||
        (p.type === "wheel" && p.ctrlKey)
      )
        return !i.current.allowPinchZoom;
      var y = ct(p),
        S = n.current,
        w = "deltaX" in p ? p.deltaX : S[0] - y[0],
        x = "deltaY" in p ? p.deltaY : S[1] - y[1],
        R,
        O = p.target,
        k = Math.abs(w) > Math.abs(x) ? "h" : "v";
      if ("touches" in p && k === "h" && O.type === "range") return !1;
      var E = Xn(k, O);
      if (!E) return !0;
      if ((E ? (R = k) : ((R = k === "v" ? "h" : "v"), (E = Xn(k, O))), !E))
        return !1;
      if (
        (!r.current && "changedTouches" in p && (w || x) && (r.current = R), !R)
      )
        return !0;
      var N = r.current || R;
      return qc(N, v, p, N === "h" ? w : x);
    }, []),
    u = c.useCallback(function (p) {
      var v = p;
      if (!(!Ie.length || Ie[Ie.length - 1] !== s)) {
        var y = "deltaY" in v ? qn(v) : ct(v),
          S = t.current.filter(function (R) {
            return (
              R.name === v.type &&
              (R.target === v.target || v.target === R.shadowParent) &&
              Zc(R.delta, y)
            );
          })[0];
        if (S && S.should) {
          v.cancelable && v.preventDefault();
          return;
        }
        if (!S) {
          var w = (i.current.shards || [])
              .map(Zn)
              .filter(Boolean)
              .filter(function (R) {
                return R.contains(v.target);
              }),
            x = w.length > 0 ? a(v, w[0]) : !i.current.noIsolation;
          x && v.cancelable && v.preventDefault();
        }
      }
    }, []),
    l = c.useCallback(function (p, v, y, S) {
      var w = { name: p, delta: v, target: y, should: S, shadowParent: tl(y) };
      t.current.push(w),
        setTimeout(function () {
          t.current = t.current.filter(function (x) {
            return x !== w;
          });
        }, 1);
    }, []),
    d = c.useCallback(function (p) {
      (n.current = ct(p)), (r.current = void 0);
    }, []),
    f = c.useCallback(function (p) {
      l(p.type, qn(p), p.target, a(p, e.lockRef.current));
    }, []),
    m = c.useCallback(function (p) {
      l(p.type, ct(p), p.target, a(p, e.lockRef.current));
    }, []);
  c.useEffect(function () {
    return (
      Ie.push(s),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: m,
      }),
      document.addEventListener("wheel", u, _e),
      document.addEventListener("touchmove", u, _e),
      document.addEventListener("touchstart", d, _e),
      function () {
        (Ie = Ie.filter(function (p) {
          return p !== s;
        })),
          document.removeEventListener("wheel", u, _e),
          document.removeEventListener("touchmove", u, _e),
          document.removeEventListener("touchstart", d, _e);
      }
    );
  }, []);
  var h = e.removeScrollBar,
    g = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    g ? c.createElement(s, { styles: Jc(o) }) : null,
    h
      ? c.createElement(Vc, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null
  );
}
function tl(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const nl = Oc(to, el);
var io = c.forwardRef(function (e, t) {
  return c.createElement(Et, oe({}, e, { ref: t, sideCar: nl }));
});
io.classNames = Et.classNames;
var Zt = ["Enter", " "],
  rl = ["ArrowDown", "PageUp", "Home"],
  ao = ["ArrowUp", "PageDown", "End"],
  ol = [...rl, ...ao],
  sl = { ltr: [...Zt, "ArrowRight"], rtl: [...Zt, "ArrowLeft"] },
  il = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  Je = "Menu",
  [He, al, cl] = gr(Je),
  [Se, co] = Ye(Je, [cl, Lr, Kr]),
  St = Lr(),
  lo = Kr(),
  [ll, Re] = Se(Je),
  [ul, Qe] = Se(Je),
  uo = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: o,
        onOpenChange: s,
        modal: i = !0,
      } = e,
      a = St(t),
      [u, l] = c.useState(null),
      d = c.useRef(!1),
      f = de(s),
      m = vr(o);
    return (
      c.useEffect(() => {
        const h = () => {
            (d.current = !0),
              document.addEventListener("pointerdown", g, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", g, {
                capture: !0,
                once: !0,
              });
          },
          g = () => (d.current = !1);
        return (
          document.addEventListener("keydown", h, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", h, { capture: !0 }),
              document.removeEventListener("pointerdown", g, { capture: !0 }),
              document.removeEventListener("pointermove", g, { capture: !0 });
          }
        );
      }, []),
      b.jsx(Ua, {
        ...a,
        children: b.jsx(ll, {
          scope: t,
          open: n,
          onOpenChange: f,
          content: u,
          onContentChange: l,
          children: b.jsx(ul, {
            scope: t,
            onClose: c.useCallback(() => f(!1), [f]),
            isUsingKeyboardRef: d,
            dir: m,
            modal: i,
            children: r,
          }),
        }),
      })
    );
  };
uo.displayName = Je;
var dl = "MenuAnchor",
  dn = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = St(n);
    return b.jsx(Ha, { ...o, ...r, ref: t });
  });
dn.displayName = dl;
var fn = "MenuPortal",
  [fl, fo] = Se(fn, { forceMount: void 0 }),
  po = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      s = Re(fn, t);
    return b.jsx(fl, {
      scope: t,
      forceMount: n,
      children: b.jsx(qe, {
        present: n || s.open,
        children: b.jsx(Ur, { asChild: !0, container: o, children: r }),
      }),
    });
  };
po.displayName = fn;
var Q = "MenuContent",
  [pl, pn] = Se(Q),
  mo = c.forwardRef((e, t) => {
    const n = fo(Q, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      s = Re(Q, e.__scopeMenu),
      i = Qe(Q, e.__scopeMenu);
    return b.jsx(He.Provider, {
      scope: e.__scopeMenu,
      children: b.jsx(qe, {
        present: r || s.open,
        children: b.jsx(He.Slot, {
          scope: e.__scopeMenu,
          children: i.modal
            ? b.jsx(ml, { ...o, ref: t })
            : b.jsx(hl, { ...o, ref: t }),
        }),
      }),
    });
  }),
  ml = c.forwardRef((e, t) => {
    const n = Re(Q, e.__scopeMenu),
      r = c.useRef(null),
      o = X(t, r);
    return (
      c.useEffect(() => {
        const s = r.current;
        if (s) return wc(s);
      }, []),
      b.jsx(mn, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: D(e.onFocusOutside, (s) => s.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  hl = c.forwardRef((e, t) => {
    const n = Re(Q, e.__scopeMenu);
    return b.jsx(mn, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  gl = dc("MenuContent.ScrollLock"),
  mn = c.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: a,
        onEntryFocus: u,
        onEscapeKeyDown: l,
        onPointerDownOutside: d,
        onFocusOutside: f,
        onInteractOutside: m,
        onDismiss: h,
        disableOutsideScroll: g,
        ...p
      } = e,
      v = Re(Q, n),
      y = Qe(Q, n),
      S = St(n),
      w = lo(n),
      x = al(n),
      [R, O] = c.useState(null),
      k = c.useRef(null),
      E = X(t, k, v.onContentChange),
      N = c.useRef(0),
      L = c.useRef(""),
      W = c.useRef(0),
      z = c.useRef(null),
      $ = c.useRef("right"),
      F = c.useRef(0),
      B = g ? io : c.Fragment,
      _ = g ? { as: gl, allowPinchZoom: !0 } : void 0,
      j = (P) => {
        const G = L.current + P,
          q = x().filter((T) => !T.disabled),
          ee = document.activeElement,
          V = q.find((T) => T.ref.current === ee)?.textValue,
          U = q.map((T) => T.textValue),
          le = Al(U, G, V),
          re = q.find((T) => T.textValue === le)?.ref.current;
        (function T(me) {
          (L.current = me),
            window.clearTimeout(N.current),
            me !== "" && (N.current = window.setTimeout(() => T(""), 1e3));
        })(G),
          re && setTimeout(() => re.focus());
      };
    c.useEffect(() => () => window.clearTimeout(N.current), []), gi();
    const C = c.useCallback(
      (P) => $.current === z.current?.side && Ol(P, z.current?.area),
      []
    );
    return b.jsx(pl, {
      scope: n,
      searchRef: L,
      onItemEnter: c.useCallback(
        (P) => {
          C(P) && P.preventDefault();
        },
        [C]
      ),
      onItemLeave: c.useCallback(
        (P) => {
          C(P) || (k.current?.focus(), O(null));
        },
        [C]
      ),
      onTriggerLeave: c.useCallback(
        (P) => {
          C(P) && P.preventDefault();
        },
        [C]
      ),
      pointerGraceTimerRef: W,
      onPointerGraceIntentChange: c.useCallback((P) => {
        z.current = P;
      }, []),
      children: b.jsx(B, {
        ..._,
        children: b.jsx(xr, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: D(s, (P) => {
            P.preventDefault(), k.current?.focus({ preventScroll: !0 });
          }),
          onUnmountAutoFocus: i,
          children: b.jsx(yr, {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onEscapeKeyDown: l,
            onPointerDownOutside: d,
            onFocusOutside: f,
            onInteractOutside: m,
            onDismiss: h,
            children: b.jsx(lc, {
              asChild: !0,
              ...w,
              dir: y.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: R,
              onCurrentTabStopIdChange: O,
              onEntryFocus: D(u, (P) => {
                y.isUsingKeyboardRef.current || P.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: b.jsx(Ka, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": Oo(v.open),
                "data-radix-menu-content": "",
                dir: y.dir,
                ...S,
                ...p,
                ref: E,
                style: { outline: "none", ...p.style },
                onKeyDown: D(p.onKeyDown, (P) => {
                  const q =
                      P.target.closest("[data-radix-menu-content]") ===
                      P.currentTarget,
                    ee = P.ctrlKey || P.altKey || P.metaKey,
                    V = P.key.length === 1;
                  q &&
                    (P.key === "Tab" && P.preventDefault(),
                    !ee && V && j(P.key));
                  const U = k.current;
                  if (P.target !== U || !ol.includes(P.key)) return;
                  P.preventDefault();
                  const re = x()
                    .filter((T) => !T.disabled)
                    .map((T) => T.ref.current);
                  ao.includes(P.key) && re.reverse(), kl(re);
                }),
                onBlur: D(e.onBlur, (P) => {
                  P.currentTarget.contains(P.target) ||
                    (window.clearTimeout(N.current), (L.current = ""));
                }),
                onPointerMove: D(
                  e.onPointerMove,
                  Ke((P) => {
                    const G = P.target,
                      q = F.current !== P.clientX;
                    if (P.currentTarget.contains(G) && q) {
                      const ee = P.clientX > F.current ? "right" : "left";
                      ($.current = ee), (F.current = P.clientX);
                    }
                  })
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
mo.displayName = Q;
var vl = "MenuGroup",
  hn = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return b.jsx(K.div, { role: "group", ...r, ref: t });
  });
hn.displayName = vl;
var bl = "MenuLabel",
  ho = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return b.jsx(K.div, { ...r, ref: t });
  });
ho.displayName = bl;
var vt = "MenuItem",
  Jn = "menu.itemSelect",
  Rt = c.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      s = c.useRef(null),
      i = Qe(vt, e.__scopeMenu),
      a = pn(vt, e.__scopeMenu),
      u = X(t, s),
      l = c.useRef(!1),
      d = () => {
        const f = s.current;
        if (!n && f) {
          const m = new CustomEvent(Jn, { bubbles: !0, cancelable: !0 });
          f.addEventListener(Jn, (h) => r?.(h), { once: !0 }),
            hr(f, m),
            m.defaultPrevented ? (l.current = !1) : i.onClose();
        }
      };
    return b.jsx(go, {
      ...o,
      ref: u,
      disabled: n,
      onClick: D(e.onClick, d),
      onPointerDown: (f) => {
        e.onPointerDown?.(f), (l.current = !0);
      },
      onPointerUp: D(e.onPointerUp, (f) => {
        l.current || f.currentTarget?.click();
      }),
      onKeyDown: D(e.onKeyDown, (f) => {
        const m = a.searchRef.current !== "";
        n ||
          (m && f.key === " ") ||
          (Zt.includes(f.key) && (f.currentTarget.click(), f.preventDefault()));
      }),
    });
  });
Rt.displayName = vt;
var go = c.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e,
      i = pn(vt, n),
      a = lo(n),
      u = c.useRef(null),
      l = X(t, u),
      [d, f] = c.useState(!1),
      [m, h] = c.useState("");
    return (
      c.useEffect(() => {
        const g = u.current;
        g && h((g.textContent ?? "").trim());
      }, [s.children]),
      b.jsx(He.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: b.jsx(uc, {
          asChild: !0,
          ...a,
          focusable: !r,
          children: b.jsx(K.div, {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: l,
            onPointerMove: D(
              e.onPointerMove,
              Ke((g) => {
                r
                  ? i.onItemLeave(g)
                  : (i.onItemEnter(g),
                    g.defaultPrevented ||
                      g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: D(
              e.onPointerLeave,
              Ke((g) => i.onItemLeave(g))
            ),
            onFocus: D(e.onFocus, () => f(!0)),
            onBlur: D(e.onBlur, () => f(!1)),
          }),
        }),
      })
    );
  }),
  yl = "MenuCheckboxItem",
  vo = c.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return b.jsx(Co, {
      scope: e.__scopeMenu,
      checked: n,
      children: b.jsx(Rt, {
        role: "menuitemcheckbox",
        "aria-checked": bt(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": vn(n),
        onSelect: D(o.onSelect, () => r?.(bt(n) ? !0 : !n), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
vo.displayName = yl;
var bo = "MenuRadioGroup",
  [wl, xl] = Se(bo, { value: void 0, onValueChange: () => {} }),
  yo = c.forwardRef((e, t) => {
    const { value: n, onValueChange: r, ...o } = e,
      s = de(r);
    return b.jsx(wl, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: s,
      children: b.jsx(hn, { ...o, ref: t }),
    });
  });
yo.displayName = bo;
var wo = "MenuRadioItem",
  xo = c.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = xl(wo, e.__scopeMenu),
      s = n === o.value;
    return b.jsx(Co, {
      scope: e.__scopeMenu,
      checked: s,
      children: b.jsx(Rt, {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": vn(s),
        onSelect: D(r.onSelect, () => o.onValueChange?.(n), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
xo.displayName = wo;
var gn = "MenuItemIndicator",
  [Co, Cl] = Se(gn, { checked: !1 }),
  Eo = c.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      s = Cl(gn, n);
    return b.jsx(qe, {
      present: r || bt(s.checked) || s.checked === !0,
      children: b.jsx(K.span, { ...o, ref: t, "data-state": vn(s.checked) }),
    });
  });
Eo.displayName = gn;
var El = "MenuSeparator",
  So = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return b.jsx(K.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: t,
    });
  });
So.displayName = El;
var Sl = "MenuArrow",
  Ro = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = St(n);
    return b.jsx(Ya, { ...o, ...r, ref: t });
  });
Ro.displayName = Sl;
var Rl = "MenuSub",
  [Ru, ko] = Se(Rl),
  Ve = "MenuSubTrigger",
  Mo = c.forwardRef((e, t) => {
    const n = Re(Ve, e.__scopeMenu),
      r = Qe(Ve, e.__scopeMenu),
      o = ko(Ve, e.__scopeMenu),
      s = pn(Ve, e.__scopeMenu),
      i = c.useRef(null),
      { pointerGraceTimerRef: a, onPointerGraceIntentChange: u } = s,
      l = { __scopeMenu: e.__scopeMenu },
      d = c.useCallback(() => {
        i.current && window.clearTimeout(i.current), (i.current = null);
      }, []);
    return (
      c.useEffect(() => d, [d]),
      c.useEffect(() => {
        const f = a.current;
        return () => {
          window.clearTimeout(f), u(null);
        };
      }, [a, u]),
      b.jsx(dn, {
        asChild: !0,
        ...l,
        children: b.jsx(go, {
          id: o.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": o.contentId,
          "data-state": Oo(n.open),
          ...e,
          ref: Ee(t, o.onTriggerChange),
          onClick: (f) => {
            e.onClick?.(f),
              !(e.disabled || f.defaultPrevented) &&
                (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
          },
          onPointerMove: D(
            e.onPointerMove,
            Ke((f) => {
              s.onItemEnter(f),
                !f.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !i.current &&
                  (s.onPointerGraceIntentChange(null),
                  (i.current = window.setTimeout(() => {
                    n.onOpenChange(!0), d();
                  }, 100)));
            })
          ),
          onPointerLeave: D(
            e.onPointerLeave,
            Ke((f) => {
              d();
              const m = n.content?.getBoundingClientRect();
              if (m) {
                const h = n.content?.dataset.side,
                  g = h === "right",
                  p = g ? -5 : 5,
                  v = m[g ? "left" : "right"],
                  y = m[g ? "right" : "left"];
                s.onPointerGraceIntentChange({
                  area: [
                    { x: f.clientX + p, y: f.clientY },
                    { x: v, y: m.top },
                    { x: y, y: m.top },
                    { x: y, y: m.bottom },
                    { x: v, y: m.bottom },
                  ],
                  side: h,
                }),
                  window.clearTimeout(a.current),
                  (a.current = window.setTimeout(
                    () => s.onPointerGraceIntentChange(null),
                    300
                  ));
              } else {
                if ((s.onTriggerLeave(f), f.defaultPrevented)) return;
                s.onPointerGraceIntentChange(null);
              }
            })
          ),
          onKeyDown: D(e.onKeyDown, (f) => {
            const m = s.searchRef.current !== "";
            e.disabled ||
              (m && f.key === " ") ||
              (sl[r.dir].includes(f.key) &&
                (n.onOpenChange(!0), n.content?.focus(), f.preventDefault()));
          }),
        }),
      })
    );
  });
Mo.displayName = Ve;
var Ao = "MenuSubContent",
  Po = c.forwardRef((e, t) => {
    const n = fo(Q, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      s = Re(Q, e.__scopeMenu),
      i = Qe(Q, e.__scopeMenu),
      a = ko(Ao, e.__scopeMenu),
      u = c.useRef(null),
      l = X(t, u);
    return b.jsx(He.Provider, {
      scope: e.__scopeMenu,
      children: b.jsx(qe, {
        present: r || s.open,
        children: b.jsx(He.Slot, {
          scope: e.__scopeMenu,
          children: b.jsx(mn, {
            id: a.contentId,
            "aria-labelledby": a.triggerId,
            ...o,
            ref: l,
            align: "start",
            side: i.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (d) => {
              i.isUsingKeyboardRef.current && u.current?.focus(),
                d.preventDefault();
            },
            onCloseAutoFocus: (d) => d.preventDefault(),
            onFocusOutside: D(e.onFocusOutside, (d) => {
              d.target !== a.trigger && s.onOpenChange(!1);
            }),
            onEscapeKeyDown: D(e.onEscapeKeyDown, (d) => {
              i.onClose(), d.preventDefault();
            }),
            onKeyDown: D(e.onKeyDown, (d) => {
              const f = d.currentTarget.contains(d.target),
                m = il[i.dir].includes(d.key);
              f &&
                m &&
                (s.onOpenChange(!1), a.trigger?.focus(), d.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
Po.displayName = Ao;
function Oo(e) {
  return e ? "open" : "closed";
}
function bt(e) {
  return e === "indeterminate";
}
function vn(e) {
  return bt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function kl(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Ml(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Al(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let i = Ml(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((l) => l !== n));
  const u = i.find((l) => l.toLowerCase().startsWith(o.toLowerCase()));
  return u !== n ? u : void 0;
}
function Pl(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s],
      u = t[i],
      l = a.x,
      d = a.y,
      f = u.x,
      m = u.y;
    d > r != m > r && n < ((f - l) * (r - d)) / (m - d) + l && (o = !o);
  }
  return o;
}
function Ol(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Pl(n, t);
}
function Ke(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var _l = uo,
  Il = dn,
  Tl = po,
  Nl = mo,
  Dl = hn,
  Ll = ho,
  Fl = Rt,
  jl = vo,
  $l = yo,
  zl = xo,
  Wl = Eo,
  Bl = So,
  Vl = Ro,
  Gl = Mo,
  Ul = Po,
  kt = "DropdownMenu",
  [Hl, ku] = Ye(kt, [co]),
  Y = co(),
  [Kl, _o] = Hl(kt),
  Io = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: o,
        defaultOpen: s,
        onOpenChange: i,
        modal: a = !0,
      } = e,
      u = Y(t),
      l = c.useRef(null),
      [d, f] = mr({ prop: o, defaultProp: s ?? !1, onChange: i, caller: kt });
    return b.jsx(Kl, {
      scope: t,
      triggerId: Ut(),
      triggerRef: l,
      contentId: Ut(),
      open: d,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((m) => !m), [f]),
      modal: a,
      children: b.jsx(_l, {
        ...u,
        open: d,
        onOpenChange: f,
        dir: r,
        modal: a,
        children: n,
      }),
    });
  };
Io.displayName = kt;
var To = "DropdownMenuTrigger",
  No = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      s = _o(To, n),
      i = Y(n);
    return b.jsx(Il, {
      asChild: !0,
      ...i,
      children: b.jsx(K.button, {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Ee(t, s.triggerRef),
        onPointerDown: D(e.onPointerDown, (a) => {
          !r &&
            a.button === 0 &&
            a.ctrlKey === !1 &&
            (s.onOpenToggle(), s.open || a.preventDefault());
        }),
        onKeyDown: D(e.onKeyDown, (a) => {
          r ||
            (["Enter", " "].includes(a.key) && s.onOpenToggle(),
            a.key === "ArrowDown" && s.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        }),
      }),
    });
  });
No.displayName = To;
var Yl = "DropdownMenuPortal",
  Do = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = Y(t);
    return b.jsx(Tl, { ...r, ...n });
  };
Do.displayName = Yl;
var Lo = "DropdownMenuContent",
  Fo = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = _o(Lo, n),
      s = Y(n),
      i = c.useRef(!1);
    return b.jsx(Nl, {
      id: o.contentId,
      "aria-labelledby": o.triggerId,
      ...s,
      ...r,
      ref: t,
      onCloseAutoFocus: D(e.onCloseAutoFocus, (a) => {
        i.current || o.triggerRef.current?.focus(),
          (i.current = !1),
          a.preventDefault();
      }),
      onInteractOutside: D(e.onInteractOutside, (a) => {
        const u = a.detail.originalEvent,
          l = u.button === 0 && u.ctrlKey === !0,
          d = u.button === 2 || l;
        (!o.modal || d) && (i.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
Fo.displayName = Lo;
var Xl = "DropdownMenuGroup",
  ql = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Y(n);
    return b.jsx(Dl, { ...o, ...r, ref: t });
  });
ql.displayName = Xl;
var Zl = "DropdownMenuLabel",
  Jl = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Y(n);
    return b.jsx(Ll, { ...o, ...r, ref: t });
  });
Jl.displayName = Zl;
var Ql = "DropdownMenuItem",
  jo = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Y(n);
    return b.jsx(Fl, { ...o, ...r, ref: t });
  });
jo.displayName = Ql;
var eu = "DropdownMenuCheckboxItem",
  tu = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Y(n);
    return b.jsx(jl, { ...o, ...r, ref: t });
  });
tu.displayName = eu;
var nu = "DropdownMenuRadioGroup",
  ru = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Y(n);
    return b.jsx($l, { ...o, ...r, ref: t });
  });
ru.displayName = nu;
var ou = "DropdownMenuRadioItem",
  su = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Y(n);
    return b.jsx(zl, { ...o, ...r, ref: t });
  });
su.displayName = ou;
var iu = "DropdownMenuItemIndicator",
  au = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Y(n);
    return b.jsx(Wl, { ...o, ...r, ref: t });
  });
au.displayName = iu;
var cu = "DropdownMenuSeparator",
  lu = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Y(n);
    return b.jsx(Bl, { ...o, ...r, ref: t });
  });
lu.displayName = cu;
var uu = "DropdownMenuArrow",
  du = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Y(n);
    return b.jsx(Vl, { ...o, ...r, ref: t });
  });
du.displayName = uu;
var fu = "DropdownMenuSubTrigger",
  pu = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Y(n);
    return b.jsx(Gl, { ...o, ...r, ref: t });
  });
pu.displayName = fu;
var mu = "DropdownMenuSubContent",
  hu = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Y(n);
    return b.jsx(Ul, {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
hu.displayName = mu;
var gu = Io,
  vu = No,
  bu = Do,
  yu = Fo,
  wu = jo;
function xu({ ...e }) {
  return b.jsx(gu, { "data-slot": "dropdown-menu", ...e });
}
function Cu({ ...e }) {
  return b.jsx(vu, { "data-slot": "dropdown-menu-trigger", ...e });
}
function Eu({ className: e, sideOffset: t = 4, ...n }) {
  return b.jsx(bu, {
    children: b.jsx(yu, {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: en(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...n,
    }),
  });
}
function zt({ className: e, inset: t, variant: n = "default", ...r }) {
  return b.jsx(wu, {
    "data-slot": "dropdown-menu-item",
    "data-inset": t,
    "data-variant": n,
    className: en(
      "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      e
    ),
    ...r,
  });
}
function Mu() {
  const [e, t] = c.useState("light");
  return (
    c.useEffect(() => {
      const r =
        typeof localStorage < "u" && localStorage.getItem("theme")
          ? localStorage.getItem("theme")
          : "system";
      t(r);
      const o =
        r === "dark" ||
        (r === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      document.documentElement.classList[o ? "add" : "remove"]("dark");
    }, []),
    c.useEffect(() => {
      const n =
        e === "dark" ||
        (e === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      document.documentElement.classList[n ? "add" : "remove"]("dark"),
        typeof localStorage < "u" && localStorage.setItem("theme", e);
    }, [e]),
    b.jsxs(xu, {
      children: [
        b.jsx(Cu, {
          asChild: !0,
          children: b.jsxs(Vs, {
            variant: "outline",
            size: "icon",
            className:
              "border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700",
            children: [
              b.jsx(Zo, {
                className:
                  "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-black dark:text-gray-200",
              }),
              b.jsx(Xo, {
                className:
                  "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-black dark:text-gray-200",
              }),
              b.jsx("span", { className: "sr-only", children: "Toggle theme" }),
            ],
          }),
        }),
        b.jsxs(Eu, {
          align: "end",
          children: [
            b.jsx(zt, { onClick: () => t("light"), children: "Light" }),
            b.jsx(zt, { onClick: () => t("dark"), children: "Dark" }),
            b.jsx(zt, { onClick: () => t("system"), children: "System" }),
          ],
        }),
      ],
    })
  );
}
export { Mu as ModeToggle };
