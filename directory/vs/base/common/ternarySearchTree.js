define(de[387], he([1, 0, 24, 120, 37]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Si = e.$Ri = e.$Qi = e.$Pi = e.$Oi = void 0);
			class E {
				constructor() {
					(this.b = ""), (this.c = 0);
				}
				reset(n) {
					return (this.b = n), (this.c = 0), this;
				}
				next() {
					return (this.c += 1), this;
				}
				hasNext() {
					return this.c < this.b.length - 1;
				}
				cmp(n) {
					const g = n.charCodeAt(0),
						p = this.b.charCodeAt(this.c);
					return g - p;
				}
				value() {
					return this.b[this.c];
				}
			}
			e.$Oi = E;
			class C {
				constructor(n = !0) {
					this.e = n;
				}
				reset(n) {
					return (this.b = n), (this.c = 0), (this.d = 0), this.next();
				}
				hasNext() {
					return this.d < this.b.length;
				}
				next() {
					this.c = this.d;
					let n = !0;
					for (; this.d < this.b.length; this.d++)
						if (this.b.charCodeAt(this.d) === i.CharCode.Period)
							if (n) this.c++;
							else break;
						else n = !1;
					return this;
				}
				cmp(n) {
					return this.e
						? (0, w.$Gf)(n, this.b, 0, n.length, this.c, this.d)
						: (0, w.$If)(n, this.b, 0, n.length, this.c, this.d);
				}
				value() {
					return this.b.substring(this.c, this.d);
				}
			}
			e.$Pi = C;
			class d {
				constructor(n = !0, g = !0) {
					(this.f = n), (this.g = g);
				}
				reset(n) {
					(this.d = 0), (this.e = 0), (this.b = n), (this.c = n.length);
					for (let g = n.length - 1; g >= 0; g--, this.c--) {
						const p = this.b.charCodeAt(g);
						if (
							!(
								p === i.CharCode.Slash ||
								(this.f && p === i.CharCode.Backslash)
							)
						)
							break;
					}
					return this.next();
				}
				hasNext() {
					return this.e < this.c;
				}
				next() {
					this.d = this.e;
					let n = !0;
					for (; this.e < this.c; this.e++) {
						const g = this.b.charCodeAt(this.e);
						if (
							g === i.CharCode.Slash ||
							(this.f && g === i.CharCode.Backslash)
						)
							if (n) this.d++;
							else break;
						else n = !1;
					}
					return this;
				}
				cmp(n) {
					return this.g
						? (0, w.$Gf)(n, this.b, 0, n.length, this.d, this.e)
						: (0, w.$If)(n, this.b, 0, n.length, this.d, this.e);
				}
				value() {
					return this.b.substring(this.d, this.e);
				}
			}
			e.$Qi = d;
			var m;
			(function (c) {
				(c[(c.Scheme = 1)] = "Scheme"),
					(c[(c.Authority = 2)] = "Authority"),
					(c[(c.Path = 3)] = "Path"),
					(c[(c.Query = 4)] = "Query"),
					(c[(c.Fragment = 5)] = "Fragment");
			})(m || (m = {}));
			class r {
				constructor(n, g) {
					(this.f = n), (this.g = g), (this.d = []), (this.e = 0);
				}
				reset(n) {
					return (
						(this.c = n),
						(this.d = []),
						this.c.scheme && this.d.push(m.Scheme),
						this.c.authority && this.d.push(m.Authority),
						this.c.path &&
							((this.b = new d(!1, !this.f(n))),
							this.b.reset(n.path),
							this.b.value() && this.d.push(m.Path)),
						this.g(n) ||
							(this.c.query && this.d.push(m.Query),
							this.c.fragment && this.d.push(m.Fragment)),
						(this.e = 0),
						this
					);
				}
				next() {
					return (
						this.d[this.e] === m.Path && this.b.hasNext()
							? this.b.next()
							: (this.e += 1),
						this
					);
				}
				hasNext() {
					return (
						(this.d[this.e] === m.Path && this.b.hasNext()) ||
						this.e < this.d.length - 1
					);
				}
				cmp(n) {
					if (this.d[this.e] === m.Scheme) return (0, w.$Hf)(n, this.c.scheme);
					if (this.d[this.e] === m.Authority)
						return (0, w.$Hf)(n, this.c.authority);
					if (this.d[this.e] === m.Path) return this.b.cmp(n);
					if (this.d[this.e] === m.Query) return (0, w.$Ff)(n, this.c.query);
					if (this.d[this.e] === m.Fragment)
						return (0, w.$Ff)(n, this.c.fragment);
					throw new Error();
				}
				value() {
					if (this.d[this.e] === m.Scheme) return this.c.scheme;
					if (this.d[this.e] === m.Authority) return this.c.authority;
					if (this.d[this.e] === m.Path) return this.b.value();
					if (this.d[this.e] === m.Query) return this.c.query;
					if (this.d[this.e] === m.Fragment) return this.c.fragment;
					throw new Error();
				}
			}
			e.$Ri = r;
			class u {
				constructor() {
					this.height = 1;
				}
				isEmpty() {
					return !this.left && !this.mid && !this.right && !this.value;
				}
				rotateLeft() {
					const n = this.right;
					return (
						(this.right = n.left),
						(n.left = this),
						this.updateHeight(),
						n.updateHeight(),
						n
					);
				}
				rotateRight() {
					const n = this.left;
					return (
						(this.left = n.right),
						(n.right = this),
						this.updateHeight(),
						n.updateHeight(),
						n
					);
				}
				updateHeight() {
					this.height = 1 + Math.max(this.heightLeft, this.heightRight);
				}
				balanceFactor() {
					return this.heightRight - this.heightLeft;
				}
				get heightLeft() {
					return this.left?.height ?? 0;
				}
				get heightRight() {
					return this.right?.height ?? 0;
				}
			}
			var a;
			(function (c) {
				(c[(c.Left = -1)] = "Left"),
					(c[(c.Mid = 0)] = "Mid"),
					(c[(c.Right = 1)] = "Right");
			})(a || (a = {}));
			class h {
				static forUris(n = () => !1, g = () => !1) {
					return new h(new r(n, g));
				}
				static forPaths(n = !1) {
					return new h(new d(void 0, !n));
				}
				static forStrings() {
					return new h(new E());
				}
				static forConfigKeys() {
					return new h(new C());
				}
				constructor(n) {
					this.b = n;
				}
				clear() {
					this.c = void 0;
				}
				fill(n, g) {
					if (g) {
						const p = g.slice(0);
						(0, t.$1b)(p);
						for (const o of p) this.set(o, n);
					} else {
						const p = n.slice(0);
						(0, t.$1b)(p);
						for (const o of p) this.set(o[0], o[1]);
					}
				}
				set(n, g) {
					const p = this.b.reset(n);
					let o;
					this.c || ((this.c = new u()), (this.c.segment = p.value()));
					const f = [];
					for (o = this.c; ; ) {
						const s = p.cmp(o.segment);
						if (s > 0)
							o.left || ((o.left = new u()), (o.left.segment = p.value())),
								f.push([a.Left, o]),
								(o = o.left);
						else if (s < 0)
							o.right || ((o.right = new u()), (o.right.segment = p.value())),
								f.push([a.Right, o]),
								(o = o.right);
						else if (p.hasNext())
							p.next(),
								o.mid || ((o.mid = new u()), (o.mid.segment = p.value())),
								f.push([a.Mid, o]),
								(o = o.mid);
						else break;
					}
					const b = o.value;
					(o.value = g), (o.key = n);
					for (let s = f.length - 1; s >= 0; s--) {
						const l = f[s][1];
						l.updateHeight();
						const y = l.balanceFactor();
						if (y < -1 || y > 1) {
							const $ = f[s][0],
								v = f[s + 1][0];
							if ($ === a.Right && v === a.Right) f[s][1] = l.rotateLeft();
							else if ($ === a.Left && v === a.Left) f[s][1] = l.rotateRight();
							else if ($ === a.Right && v === a.Left)
								(l.right = f[s + 1][1] = f[s + 1][1].rotateRight()),
									(f[s][1] = l.rotateLeft());
							else if ($ === a.Left && v === a.Right)
								(l.left = f[s + 1][1] = f[s + 1][1].rotateLeft()),
									(f[s][1] = l.rotateRight());
							else throw new Error();
							if (s > 0)
								switch (f[s - 1][0]) {
									case a.Left:
										f[s - 1][1].left = f[s][1];
										break;
									case a.Right:
										f[s - 1][1].right = f[s][1];
										break;
									case a.Mid:
										f[s - 1][1].mid = f[s][1];
										break;
								}
							else this.c = f[0][1];
						}
					}
					return b;
				}
				get(n) {
					return this.d(n)?.value;
				}
				d(n) {
					const g = this.b.reset(n);
					let p = this.c;
					for (; p; ) {
						const o = g.cmp(p.segment);
						if (o > 0) p = p.left;
						else if (o < 0) p = p.right;
						else if (g.hasNext()) g.next(), (p = p.mid);
						else break;
					}
					return p;
				}
				has(n) {
					const g = this.d(n);
					return !(g?.value === void 0 && g?.mid === void 0);
				}
				delete(n) {
					return this.e(n, !1);
				}
				deleteSuperstr(n) {
					return this.e(n, !0);
				}
				e(n, g) {
					const p = this.b.reset(n),
						o = [];
					let f = this.c;
					for (; f; ) {
						const b = p.cmp(f.segment);
						if (b > 0) o.push([a.Left, f]), (f = f.left);
						else if (b < 0) o.push([a.Right, f]), (f = f.right);
						else if (p.hasNext()) p.next(), o.push([a.Mid, f]), (f = f.mid);
						else break;
					}
					if (f) {
						if (
							(g
								? ((f.left = void 0),
									(f.mid = void 0),
									(f.right = void 0),
									(f.height = 1))
								: ((f.key = void 0), (f.value = void 0)),
							!f.mid && !f.value)
						)
							if (f.left && f.right) {
								const b = this.f(f.right);
								if (b.key) {
									const { key: s, value: l, segment: y } = b;
									this.e(b.key, !1),
										(f.key = s),
										(f.value = l),
										(f.segment = y);
								}
							} else {
								const b = f.left ?? f.right;
								if (o.length > 0) {
									const [s, l] = o[o.length - 1];
									switch (s) {
										case a.Left:
											l.left = b;
											break;
										case a.Mid:
											l.mid = b;
											break;
										case a.Right:
											l.right = b;
											break;
									}
								} else this.c = b;
							}
						for (let b = o.length - 1; b >= 0; b--) {
							const s = o[b][1];
							s.updateHeight();
							const l = s.balanceFactor();
							if (
								(l > 1
									? (s.right.balanceFactor() >= 0 ||
											(s.right = s.right.rotateRight()),
										(o[b][1] = s.rotateLeft()))
									: l < -1 &&
										(s.left.balanceFactor() <= 0 ||
											(s.left = s.left.rotateLeft()),
										(o[b][1] = s.rotateRight())),
								b > 0)
							)
								switch (o[b - 1][0]) {
									case a.Left:
										o[b - 1][1].left = o[b][1];
										break;
									case a.Right:
										o[b - 1][1].right = o[b][1];
										break;
									case a.Mid:
										o[b - 1][1].mid = o[b][1];
										break;
								}
							else this.c = o[0][1];
						}
					}
				}
				f(n) {
					for (; n.left; ) n = n.left;
					return n;
				}
				findSubstr(n) {
					const g = this.b.reset(n);
					let p = this.c,
						o;
					for (; p; ) {
						const f = g.cmp(p.segment);
						if (f > 0) p = p.left;
						else if (f < 0) p = p.right;
						else if (g.hasNext()) g.next(), (o = p.value || o), (p = p.mid);
						else break;
					}
					return (p && p.value) || o;
				}
				findSuperstr(n) {
					return this.g(n, !1);
				}
				g(n, g) {
					const p = this.b.reset(n);
					let o = this.c;
					for (; o; ) {
						const f = p.cmp(o.segment);
						if (f > 0) o = o.left;
						else if (f < 0) o = o.right;
						else if (p.hasNext()) p.next(), (o = o.mid);
						else return o.mid ? this.h(o.mid) : g ? o.value : void 0;
					}
				}
				hasElementOrSubtree(n) {
					return this.g(n, !0) !== void 0;
				}
				forEach(n) {
					for (const [g, p] of this) n(p, g);
				}
				*[Symbol.iterator]() {
					yield* this.h(this.c);
				}
				h(n) {
					const g = [];
					return this.j(n, g), g[Symbol.iterator]();
				}
				j(n, g) {
					n &&
						(n.left && this.j(n.left, g),
						n.value && g.push([n.key, n.value]),
						n.mid && this.j(n.mid, g),
						n.right && this.j(n.right, g));
				}
				_isBalanced() {
					const n = (g) => {
						if (!g) return !0;
						const p = g.balanceFactor();
						return p < -1 || p > 1 ? !1 : n(g.left) && n(g.right);
					};
					return n(this.c);
				}
			}
			e.$Si = h;
		}),
		