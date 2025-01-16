define(
			de[970],
			he([1, 0, 9, 82, 54, 6, 19, 3, 215, 25, 10, 23, 59, 249]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$0Y = void 0);
				let g = class extends d.$1c {
					static {
						n = this;
					}
					static {
						this.a = null;
					}
					constructor(o, f, b, s) {
						super(),
							(this.g = o),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.b = this.D(new E.$re())),
							(this.onExpressionChange = this.b.event),
							(this.c = new Map()),
							(this.f = new Map()),
							this.q(!1),
							this.n();
					}
					n() {
						this.D(
							this.m.onDidChangeConfiguration((o) => {
								this.h(o) && this.q(!0);
							}),
						),
							this.D(this.j.onDidChangeWorkspaceFolders(() => this.q(!0)));
					}
					q(o) {
						let f = !1;
						for (const y of this.j.getWorkspace().folders) {
							const $ = y.uri.toString(),
								v = this.r(y.uri),
								S = this.f.get($);
							v
								? (!S || !(0, i.$zo)(S.expression, v.expression)) &&
									((f = !0),
									this.c.set($, (0, m.$Jk)(v.expression)),
									this.f.set($, v))
								: S && ((f = !0), this.c.delete($), this.f.delete($));
						}
						const b = new h.$Hc(
							this.j.getWorkspace().folders.map((y) => y.uri),
						);
						for (const [y] of this.f)
							y !== n.a &&
								(b.has(t.URI.parse(y)) ||
									(this.c.delete(y), this.f.delete(y), (f = !0)));
						const s = this.r(void 0),
							l = this.f.get(n.a);
						s
							? (!l || !(0, i.$zo)(l.expression, s.expression)) &&
								((f = !0),
								this.c.set(n.a, (0, m.$Jk)(s.expression)),
								this.f.set(n.a, s))
							: l && ((f = !0), this.c.delete(n.a), this.f.delete(n.a)),
							o && f && this.b.fire();
					}
					r(o) {
						const f = this.g(o);
						if (!f) return;
						const b = Object.keys(f);
						if (b.length === 0) return;
						let s = !1;
						const l = Object.create(null);
						for (const y of b) {
							s || (s = (0, w.$nc)(y));
							let $ = y;
							const v = (0, c.$Rg)($, !0);
							if (v) {
								const S = v.toLowerCase();
								v !== v.toLowerCase() && ($ = `${S}${$.substring(1)}`);
							}
							l[$] = f[y];
						}
						return { expression: l, hasAbsolutePath: s };
					}
					matches(o, f) {
						if (this.c.size === 0) return !1;
						const b = this.j.getWorkspaceFolder(o);
						let s, l;
						if (
							(b && this.c.has(b.uri.toString())
								? ((s = this.c.get(b.uri.toString())),
									(l = this.f.get(b.uri.toString())))
								: ((s = this.c.get(n.a)), (l = this.f.get(n.a))),
							!s)
						)
							return !1;
						let y;
						return (
							b ? (y = (0, C.$ph)(b.uri, o)) : (y = this.s(o)),
							typeof y == "string" && s(y, void 0, f)
								? !0
								: y !== this.s(o) && l?.hasAbsolutePath
									? !!s(this.s(o), void 0, f)
									: !1
						);
					}
					s(o) {
						return o.scheme === a.Schemas.file ? o.fsPath : o.path;
					}
				};
				(e.$0Y = g), (e.$0Y = g = n = Ne([j(2, r.$Vi), j(3, u.$gj)], g));
			},
		),
		