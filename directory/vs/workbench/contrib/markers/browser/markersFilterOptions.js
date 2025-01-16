define(
			de[1247],
			he([1, 0, 132, 215, 37, 19, 387]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CRc = e.$BRc = void 0),
					(w = mt(w));
				class d {
					constructor(u, a, h) {
						(this.a = (0, i.$Jk)(u)),
							(this.b = C.$Si.forUris((c) => h.extUri.ignorePathCasing(c)));
						for (const c of a)
							this.b.set(c.root, {
								root: c.root,
								expression: (0, i.$Jk)(c.expression),
							});
					}
					matches(u) {
						const a = this.b.findSubstr(u);
						if (a) {
							const h = (0, E.$ph)(a.root, u);
							if (h && a.expression(h)) return !0;
						}
						return !!this.a(u.path);
					}
				}
				e.$BRc = d;
				class m {
					static {
						this._filter = t.$1k;
					}
					static {
						this._messageFilter = t.$Zk;
					}
					static EMPTY(u) {
						return new m("", [], !1, !1, !1, u);
					}
					constructor(u, a, h, c, n, g) {
						(this.filter = u),
							(this.showWarnings = !1),
							(this.showErrors = !1),
							(this.showInfos = !1),
							(u = u.trim()),
							(this.showWarnings = h),
							(this.showErrors = c),
							(this.showInfos = n);
						const p = Array.isArray(a) ? a : [],
							o = Array.isArray(a) ? (0, i.$Ek)() : a;
						for (const { expression: s } of p)
							for (const l of Object.keys(s))
								l.endsWith("/**") || (s[`${w.$uf(l, "/")}/**`] = s[l]);
						const f = u.startsWith("!");
						this.textFilter = {
							text: (f ? w.$tf(u, "!") : u).trim(),
							negate: f,
						};
						const b = (0, i.$Ek)();
						if (u) {
							const s = (0, i.$Hk)(u, ",")
								.map((l) => l.trim())
								.filter((l) => !!l.length);
							for (const l of s)
								if (l.startsWith("!")) {
									const y = w.$tf(l, "!");
									y && this.a(o, y);
								} else this.a(b, l);
						}
						(this.excludesMatcher = new d(o, p, g)),
							(this.includesMatcher = new d(b, [], g));
					}
					a(u, a) {
						a[0] === "." && (a = "*" + a),
							(u[`**/${a}/**`] = !0),
							(u[`**/${a}`] = !0);
					}
				}
				e.$CRc = m;
			},
		),
		