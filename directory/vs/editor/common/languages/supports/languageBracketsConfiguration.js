import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cache.js';
import './richEditBrackets.js';
define(de[2692], he([1, 0, 744, 934]), function (ce /*require*/,
 e /*exports*/,
 t /*cache*/,
 i /*richEditBrackets*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$AM = e.$zM = e.$yM = e.$xM = void 0);
			class w {
				constructor(u, a) {
					this.languageId = u;
					const h = a.brackets ? E(a.brackets) : [],
						c = new t.$gf((p) => {
							const o = new Set();
							return { info: new d(this, p, o), closing: o };
						}),
						n = new t.$gf((p) => {
							const o = new Set(),
								f = new Set();
							return {
								info: new m(this, p, o, f),
								opening: o,
								openingColorized: f,
							};
						});
					for (const [p, o] of h) {
						const f = c.get(p),
							b = n.get(o);
						f.closing.add(b.info), b.opening.add(f.info);
					}
					const g = a.colorizedBracketPairs
						? E(a.colorizedBracketPairs)
						: h.filter((p) => !(p[0] === "<" && p[1] === ">"));
					for (const [p, o] of g) {
						const f = c.get(p),
							b = n.get(o);
						f.closing.add(b.info),
							b.openingColorized.add(f.info),
							b.opening.add(f.info);
					}
					(this.a = new Map([...c.cachedValues].map(([p, o]) => [p, o.info]))),
						(this.b = new Map(
							[...n.cachedValues].map(([p, o]) => [p, o.info]),
						));
				}
				get openingBrackets() {
					return [...this.a.values()];
				}
				get closingBrackets() {
					return [...this.b.values()];
				}
				getOpeningBracketInfo(u) {
					return this.a.get(u);
				}
				getClosingBracketInfo(u) {
					return this.b.get(u);
				}
				getBracketInfo(u) {
					return this.getOpeningBracketInfo(u) || this.getClosingBracketInfo(u);
				}
				getBracketRegExp(u) {
					const a = Array.from([...this.a.keys(), ...this.b.keys()]);
					return (0, i.$vM)(a, u);
				}
			}
			e.$xM = w;
			function E(r) {
				return r.filter(([u, a]) => u !== "" && a !== "");
			}
			class C {
				constructor(u, a) {
					(this.a = u), (this.bracketText = a);
				}
				get languageId() {
					return this.a.languageId;
				}
			}
			e.$yM = C;
			class d extends C {
				constructor(u, a, h) {
					super(u, a), (this.openedBrackets = h), (this.isOpeningBracket = !0);
				}
			}
			e.$zM = d;
			class m extends C {
				constructor(u, a, h, c) {
					super(u, a),
						(this.openingBrackets = h),
						(this.b = c),
						(this.isOpeningBracket = !1);
				}
				closes(u) {
					return u.a !== this.a ? !1 : this.openingBrackets.has(u);
				}
				closesColorized(u) {
					return u.a !== this.a ? !1 : this.b.has(u);
				}
				getOpeningBrackets() {
					return [...this.openingBrackets];
				}
			}
			e.$AM = m;
		}),
		