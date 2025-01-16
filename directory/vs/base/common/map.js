define(de[59], he([1, 0]), function (ce, e) {
			"use strict";
			var t, i, w;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Nc =
					e.$Mc =
					e.$Lc =
					e.$Kc =
					e.$Jc =
					e.$Ic =
					e.Touch =
					e.$Hc =
					e.$Gc =
						void 0),
				(e.$Dc = E),
				(e.$Ec = C),
				(e.$Fc = d),
				(e.$Oc = s);
			function E(l, y, $) {
				let v = l.get(y);
				return v === void 0 && ((v = $), l.set(y, v)), v;
			}
			function C(l) {
				const y = [];
				return (
					l.forEach(($, v) => {
						y.push(`${v} => ${$}`);
					}),
					`Map(${l.size}) {${y.join(", ")}}`
				);
			}
			function d(l) {
				const y = [];
				return (
					l.forEach(($) => {
						y.push($);
					}),
					`Set(${l.size}) {${y.join(", ")}}`
				);
			}
			class m {
				constructor(y, $) {
					(this.uri = y), (this.value = $);
				}
			}
			function r(l) {
				return Array.isArray(l);
			}
			class u {
				static {
					this.c = (y) => y.toString();
				}
				constructor(y, $) {
					if (((this[t] = "ResourceMap"), y instanceof u))
						(this.d = new Map(y.d)), (this.e = $ ?? u.c);
					else if (r(y)) {
						(this.d = new Map()), (this.e = $ ?? u.c);
						for (const [v, S] of y) this.set(v, S);
					} else (this.d = new Map()), (this.e = y ?? u.c);
				}
				set(y, $) {
					return this.d.set(this.e(y), new m(y, $)), this;
				}
				get(y) {
					return this.d.get(this.e(y))?.value;
				}
				has(y) {
					return this.d.has(this.e(y));
				}
				get size() {
					return this.d.size;
				}
				clear() {
					this.d.clear();
				}
				delete(y) {
					return this.d.delete(this.e(y));
				}
				forEach(y, $) {
					typeof $ < "u" && (y = y.bind($));
					for (const [v, S] of this.d) y(S.value, S.uri, this);
				}
				*values() {
					for (const y of this.d.values()) yield y.value;
				}
				*keys() {
					for (const y of this.d.values()) yield y.uri;
				}
				*entries() {
					for (const y of this.d.values()) yield [y.uri, y.value];
				}
				*[((t = Symbol.toStringTag), Symbol.iterator)]() {
					for (const [, y] of this.d) yield [y.uri, y.value];
				}
			}
			e.$Gc = u;
			class a {
				constructor(y, $) {
					(this[i] = "ResourceSet"),
						!y || typeof y == "function"
							? (this.c = new u(y))
							: ((this.c = new u($)), y.forEach(this.add, this));
				}
				get size() {
					return this.c.size;
				}
				add(y) {
					return this.c.set(y, y), this;
				}
				clear() {
					this.c.clear();
				}
				delete(y) {
					return this.c.delete(y);
				}
				forEach(y, $) {
					this.c.forEach((v, S) => y.call($, S, S, this));
				}
				has(y) {
					return this.c.has(y);
				}
				entries() {
					return this.c.entries();
				}
				keys() {
					return this.c.keys();
				}
				values() {
					return this.c.keys();
				}
				[((i = Symbol.toStringTag), Symbol.iterator)]() {
					return this.keys();
				}
			}
			e.$Hc = a;
			var h;
			(function (l) {
				(l[(l.None = 0)] = "None"),
					(l[(l.AsOld = 1)] = "AsOld"),
					(l[(l.AsNew = 2)] = "AsNew");
			})(h || (e.Touch = h = {}));
			class c {
				constructor() {
					(this[w] = "LinkedMap"),
						(this.c = new Map()),
						(this.d = void 0),
						(this.e = void 0),
						(this.f = 0),
						(this.g = 0);
				}
				clear() {
					this.c.clear(),
						(this.d = void 0),
						(this.e = void 0),
						(this.f = 0),
						this.g++;
				}
				isEmpty() {
					return !this.d && !this.e;
				}
				get size() {
					return this.f;
				}
				get first() {
					return this.d?.value;
				}
				get last() {
					return this.e?.value;
				}
				has(y) {
					return this.c.has(y);
				}
				get(y, $ = h.None) {
					const v = this.c.get(y);
					if (v) return $ !== h.None && this.m(v, $), v.value;
				}
				set(y, $, v = h.None) {
					let S = this.c.get(y);
					if (S) (S.value = $), v !== h.None && this.m(S, v);
					else {
						switch (
							((S = { key: y, value: $, next: void 0, previous: void 0 }), v)
						) {
							case h.None:
								this.k(S);
								break;
							case h.AsOld:
								this.j(S);
								break;
							case h.AsNew:
								this.k(S);
								break;
							default:
								this.k(S);
								break;
						}
						this.c.set(y, S), this.f++;
					}
					return this;
				}
				delete(y) {
					return !!this.remove(y);
				}
				remove(y) {
					const $ = this.c.get(y);
					if ($) return this.c.delete(y), this.l($), this.f--, $.value;
				}
				shift() {
					if (!this.d && !this.e) return;
					if (!this.d || !this.e) throw new Error("Invalid list");
					const y = this.d;
					return this.c.delete(y.key), this.l(y), this.f--, y.value;
				}
				forEach(y, $) {
					const v = this.g;
					let S = this.d;
					for (; S; ) {
						if (
							($ ? y.bind($)(S.value, S.key, this) : y(S.value, S.key, this),
							this.g !== v)
						)
							throw new Error("LinkedMap got modified during iteration.");
						S = S.next;
					}
				}
				keys() {
					const y = this,
						$ = this.g;
					let v = this.d;
					const S = {
						[Symbol.iterator]() {
							return S;
						},
						next() {
							if (y.g !== $)
								throw new Error("LinkedMap got modified during iteration.");
							if (v) {
								const I = { value: v.key, done: !1 };
								return (v = v.next), I;
							} else return { value: void 0, done: !0 };
						},
					};
					return S;
				}
				values() {
					const y = this,
						$ = this.g;
					let v = this.d;
					const S = {
						[Symbol.iterator]() {
							return S;
						},
						next() {
							if (y.g !== $)
								throw new Error("LinkedMap got modified during iteration.");
							if (v) {
								const I = { value: v.value, done: !1 };
								return (v = v.next), I;
							} else return { value: void 0, done: !0 };
						},
					};
					return S;
				}
				entries() {
					const y = this,
						$ = this.g;
					let v = this.d;
					const S = {
						[Symbol.iterator]() {
							return S;
						},
						next() {
							if (y.g !== $)
								throw new Error("LinkedMap got modified during iteration.");
							if (v) {
								const I = { value: [v.key, v.value], done: !1 };
								return (v = v.next), I;
							} else return { value: void 0, done: !0 };
						},
					};
					return S;
				}
				[((w = Symbol.toStringTag), Symbol.iterator)]() {
					return this.entries();
				}
				h(y) {
					if (y >= this.size) return;
					if (y === 0) {
						this.clear();
						return;
					}
					let $ = this.d,
						v = this.size;
					for (; $ && v > y; ) this.c.delete($.key), ($ = $.next), v--;
					(this.d = $), (this.f = v), $ && ($.previous = void 0), this.g++;
				}
				i(y) {
					if (y >= this.size) return;
					if (y === 0) {
						this.clear();
						return;
					}
					let $ = this.e,
						v = this.size;
					for (; $ && v > y; ) this.c.delete($.key), ($ = $.previous), v--;
					(this.e = $), (this.f = v), $ && ($.next = void 0), this.g++;
				}
				j(y) {
					if (!this.d && !this.e) this.e = y;
					else if (this.d) (y.next = this.d), (this.d.previous = y);
					else throw new Error("Invalid list");
					(this.d = y), this.g++;
				}
				k(y) {
					if (!this.d && !this.e) this.d = y;
					else if (this.e) (y.previous = this.e), (this.e.next = y);
					else throw new Error("Invalid list");
					(this.e = y), this.g++;
				}
				l(y) {
					if (y === this.d && y === this.e)
						(this.d = void 0), (this.e = void 0);
					else if (y === this.d) {
						if (!y.next) throw new Error("Invalid list");
						(y.next.previous = void 0), (this.d = y.next);
					} else if (y === this.e) {
						if (!y.previous) throw new Error("Invalid list");
						(y.previous.next = void 0), (this.e = y.previous);
					} else {
						const $ = y.next,
							v = y.previous;
						if (!$ || !v) throw new Error("Invalid list");
						($.previous = v), (v.next = $);
					}
					(y.next = void 0), (y.previous = void 0), this.g++;
				}
				m(y, $) {
					if (!this.d || !this.e) throw new Error("Invalid list");
					if (!($ !== h.AsOld && $ !== h.AsNew)) {
						if ($ === h.AsOld) {
							if (y === this.d) return;
							const v = y.next,
								S = y.previous;
							y === this.e
								? ((S.next = void 0), (this.e = S))
								: ((v.previous = S), (S.next = v)),
								(y.previous = void 0),
								(y.next = this.d),
								(this.d.previous = y),
								(this.d = y),
								this.g++;
						} else if ($ === h.AsNew) {
							if (y === this.e) return;
							const v = y.next,
								S = y.previous;
							y === this.d
								? ((v.previous = void 0), (this.d = v))
								: ((v.previous = S), (S.next = v)),
								(y.next = void 0),
								(y.previous = this.e),
								(this.e.next = y),
								(this.e = y),
								this.g++;
						}
					}
				}
				toJSON() {
					const y = [];
					return (
						this.forEach(($, v) => {
							y.push([v, $]);
						}),
						y
					);
				}
				fromJSON(y) {
					this.clear();
					for (const [$, v] of y) this.set($, v);
				}
			}
			e.$Ic = c;
			class n extends c {
				constructor(y, $ = 1) {
					super(), (this.n = y), (this.o = Math.min(Math.max(0, $), 1));
				}
				get limit() {
					return this.n;
				}
				set limit(y) {
					(this.n = y), this.p();
				}
				get ratio() {
					return this.o;
				}
				set ratio(y) {
					(this.o = Math.min(Math.max(0, y), 1)), this.p();
				}
				get(y, $ = h.AsNew) {
					return super.get(y, $);
				}
				peek(y) {
					return super.get(y, h.None);
				}
				set(y, $) {
					return super.set(y, $, h.AsNew), this;
				}
				p() {
					this.size > this.n && this.q(Math.round(this.n * this.o));
				}
			}
			class g extends n {
				constructor(y, $ = 1) {
					super(y, $);
				}
				q(y) {
					this.h(y);
				}
				set(y, $) {
					return super.set(y, $), this.p(), this;
				}
			}
			e.$Jc = g;
			class p extends n {
				constructor(y, $ = 1) {
					super(y, $);
				}
				q(y) {
					this.i(y);
				}
				set(y, $) {
					return (
						this.n <= this.size &&
							!this.has(y) &&
							this.q(Math.round(this.n * this.o) - 1),
						super.set(y, $),
						this
					);
				}
			}
			e.$Kc = p;
			class o {
				constructor() {
					this.c = new Map();
				}
				add(y) {
					return this.c.set(y, (this.c.get(y) || 0) + 1), this;
				}
				delete(y) {
					let $ = this.c.get(y) || 0;
					return $ === 0
						? !1
						: ($--, $ === 0 ? this.c.delete(y) : this.c.set(y, $), !0);
				}
				has(y) {
					return this.c.has(y);
				}
			}
			e.$Lc = o;
			class f {
				constructor(y) {
					if (((this.c = new Map()), (this.d = new Map()), y))
						for (const [$, v] of y) this.set($, v);
				}
				clear() {
					this.c.clear(), this.d.clear();
				}
				set(y, $) {
					this.c.set(y, $), this.d.set($, y);
				}
				get(y) {
					return this.c.get(y);
				}
				getKey(y) {
					return this.d.get(y);
				}
				delete(y) {
					const $ = this.c.get(y);
					return $ === void 0 ? !1 : (this.c.delete(y), this.d.delete($), !0);
				}
				forEach(y, $) {
					this.c.forEach((v, S) => {
						y.call($, v, S, this);
					});
				}
				keys() {
					return this.c.keys();
				}
				values() {
					return this.c.values();
				}
			}
			e.$Mc = f;
			class b {
				constructor() {
					this.c = new Map();
				}
				add(y, $) {
					let v = this.c.get(y);
					v || ((v = new Set()), this.c.set(y, v)), v.add($);
				}
				delete(y, $) {
					const v = this.c.get(y);
					v && (v.delete($), v.size === 0 && this.c.delete(y));
				}
				forEach(y, $) {
					const v = this.c.get(y);
					v && v.forEach($);
				}
				get(y) {
					const $ = this.c.get(y);
					return $ || new Set();
				}
			}
			e.$Nc = b;
			function s(l, y) {
				if (l === y) return !0;
				if (l.size !== y.size) return !1;
				for (const [$, v] of l) if (!y.has($) || y.get($) !== v) return !1;
				for (const [$] of y) if (!l.has($)) return !1;
				return !0;
			}
		}),
		