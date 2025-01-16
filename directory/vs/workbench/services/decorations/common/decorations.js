define(de[472], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$sPb = void 0),
				(e.$sPb = (0, t.$Mi)("IFileDecorationsService"));
		}),
		define(
			de[3254],
			he([
				1, 0, 6, 472, 387, 3, 15, 273, 7, 35, 26, 37, 4, 29, 33, 20, 136, 68,
				24, 51, 79,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gvc = void 0);
				class l {
					static keyOf(P) {
						if (Array.isArray(P)) return P.map(l.keyOf).join(",");
						{
							const { color: k, letter: L } = P;
							return u.ThemeIcon.isThemeIcon(L) ? `${k}+${L.id}` : `${k}/${L}`;
						}
					}
					static {
						this.c = "monaco-decoration";
					}
					constructor(P, k, L) {
						(this.themeService = P), (this.e = 0), (this.data = k);
						const D = (0, p.$Aj)(L).toString(36);
						(this.itemColorClassName = `${l.c}-itemColor-${D}`),
							(this.itemBadgeClassName = `${l.c}-itemBadge-${D}`),
							(this.bubbleBadgeClassName = `${l.c}-bubbleBadge-${D}`),
							(this.iconBadgeClassName = `${l.c}-iconBadge-${D}`);
					}
					acquire() {
						this.e += 1;
					}
					release() {
						return --this.e === 0;
					}
					appendCSSRules(P) {
						Array.isArray(this.data)
							? this.g(this.data, P)
							: this.f(this.data, P);
					}
					f(P, k) {
						const { color: L, letter: D } = P;
						(0, m.$Wgb)(`.${this.itemColorClassName}`, `color: ${S(L)};`, k),
							u.ThemeIcon.isThemeIcon(D)
								? this.h(D, L, k)
								: D &&
									(0, m.$Wgb)(
										`.${this.itemBadgeClassName}::after`,
										`content: "${D}"; color: ${S(L)};`,
										k,
									);
					}
					g(P, k) {
						const { color: L } = P.find((N) => !!N.color) ?? P[0];
						(0, m.$Wgb)(`.${this.itemColorClassName}`, `color: ${S(L)};`, k);
						const D = [];
						let M;
						for (const N of P)
							if (u.ThemeIcon.isThemeIcon(N.letter)) {
								M = N.letter;
								break;
							} else N.letter && D.push(N.letter);
						M
							? this.h(M, L, k)
							: (D.length &&
									(0, m.$Wgb)(
										`.${this.itemBadgeClassName}::after`,
										`content: "${D.join(", ")}"; color: ${S(L)};`,
										k,
									),
								(0, m.$Wgb)(
									`.${this.bubbleBadgeClassName}::after`,
									`content: "\uEA71"; color: ${S(L)}; font-family: codicon; font-size: 14px; margin-right: 14px; opacity: 0.4;`,
									k,
								));
					}
					h(P, k, L) {
						const D = u.ThemeIcon.getModifier(P);
						D && (P = u.ThemeIcon.modify(P, void 0));
						const M = (0, s.$_O)().getIcon(P.id);
						if (!M) return;
						const N = this.themeService.getProductIconTheme().getIcon(M);
						N &&
							(0, m.$Wgb)(
								`.${this.iconBadgeClassName}::after`,
								`content: '${N.fontCharacter}';
			color: ${P.color ? S(P.color.id) : S(k)};
			font-family: ${(0, m.$whb)(N.font?.id ?? "codicon")};
			font-size: 16px;
			margin-right: 14px;
			font-weight: normal;
			${D === "spin" ? "animation: codicon-spin 1.5s steps(30) infinite" : ""};
			`,
								L,
							);
					}
					removeCSSRules(P) {
						(0, m.$Xgb)(this.itemColorClassName, P),
							(0, m.$Xgb)(this.itemBadgeClassName, P),
							(0, m.$Xgb)(this.bubbleBadgeClassName, P),
							(0, m.$Xgb)(this.iconBadgeClassName, P);
					}
				}
				class y {
					constructor(P) {
						(this.g = P),
							(this.c = new E.$Zc()),
							(this.e = (0, m.$Rgb)(void 0, void 0, this.c)),
							(this.f = new Map());
					}
					dispose() {
						this.c.dispose();
					}
					asDecoration(P, k) {
						P.sort((B, U) => (U.weight || 0) - (B.weight || 0));
						const L = l.keyOf(P);
						let D = this.f.get(L);
						D ||
							((D = new l(this.g, P, L)),
							this.f.set(L, D),
							D.appendCSSRules(this.e)),
							D.acquire();
						const M = D.itemColorClassName;
						let N = D.itemBadgeClassName;
						const A = D.iconBadgeClassName;
						let R = (0, f.$Qb)(
							P.filter((B) => !(0, a.$jf)(B.tooltip)).map((B) => B.tooltip),
						).join(" \u2022 ");
						const O = P.some((B) => B.strikethrough);
						return (
							k &&
								((N = D.bubbleBadgeClassName),
								(R = (0, h.localize)(12196, null))),
							{
								labelClassName: M,
								badgeClassName: N,
								iconClassName: A,
								strikethrough: O,
								tooltip: R,
								dispose: () => {
									D?.release() &&
										(this.f.delete(L), D.removeCSSRules(this.e), (D = void 0));
								},
							}
						);
					}
				}
				class $ {
					constructor(P) {
						(this.c = w.$Si.forUris((k) => !0)), this.c.fill(!0, (0, f.$6b)(P));
					}
					affectsResource(P) {
						return this.c.hasElementOrSubtree(P);
					}
				}
				class v {
					constructor(P, k) {
						(this.source = P), (this.thenable = k);
					}
				}
				function S(T) {
					return T ? (0, b.$rP)(T) : "inherit";
				}
				let I = class {
					constructor(P, k) {
						(this.c = new E.$Zc()),
							(this.e = this.c.add(new t.$ve({ merge: (L) => L.flat() }))),
							(this.f = this.c.add(new t.$re())),
							(this.onDidChangeDecorations = this.f.event),
							(this.g = new d.$$c()),
							(this.h = new y(k)),
							(this.i = w.$Si.forUris((L) => P.extUri.ignorePathCasing(L))),
							this.c.add(
								this.e.event((L) => {
									this.f.fire(new $(L));
								}),
							);
					}
					dispose() {
						this.c.dispose(), this.i.clear();
					}
					registerDecorationsProvider(P) {
						const k = this.g.unshift(P);
						this.f.fire({
							affectsResource() {
								return !0;
							},
						});
						const L = () => {
								const M = [];
								for (const [N, A] of this.i) A.delete(P) && M.push(N);
								M.length > 0 && this.e.fire(M);
							},
							D = P.onDidChange((M) => {
								if (!M) L();
								else
									for (const N of M) {
										const A = this.j(N);
										this.k(A, N, P);
									}
							});
						return (0, E.$Yc)(() => {
							k(), D.dispose(), L();
						});
					}
					j(P) {
						let k = this.i.get(P);
						return k || ((k = new Map()), this.i.set(P, k)), k;
					}
					getDecoration(P, k) {
						const L = [];
						let D = !1;
						const M = this.j(P);
						for (const N of this.g) {
							let A = M.get(N);
							A === void 0 && (A = this.k(M, P, N)),
								A && !(A instanceof v) && L.push(A);
						}
						if (k) {
							const N = this.i.findSuperstr(P);
							if (N)
								for (const A of N)
									for (const R of A[1].values())
										R && !(R instanceof v) && R.bubble && (L.push(R), (D = !0));
						}
						return L.length === 0 ? void 0 : this.h.asDecoration(L, D);
					}
					k(P, k, L) {
						const D = P.get(L);
						D instanceof v && (D.source.cancel(), P.delete(L));
						const M = new n.$Ce(),
							N = L.provideDecorations(k, M.token);
						if ((0, C.$yh)(N)) {
							const A = new v(
								M,
								Promise.resolve(N)
									.then((R) => {
										P.get(L) === A && this.l(P, L, k, R);
									})
									.catch((R) => {
										!(0, c.$8)(R) && P.get(L) === A && P.delete(L);
									})
									.finally(() => {
										M.dispose();
									}),
							);
							return P.set(L, A), null;
						} else return M.dispose(), this.l(P, L, k, N);
					}
					l(P, k, L, D) {
						const M = D || null,
							N = P.get(k);
						return P.set(k, M), (M || N) && this.e.fire(L), M;
					}
				};
				(e.$gvc = I),
					(e.$gvc = I = Ne([j(0, o.$Vl), j(1, r.$iP)], I)),
					(0, g.$lK)(i.$sPb, I, g.InstantiationType.Delayed);
			},
		),
		define(
			de[399],
			he([1, 0, 6, 215, 3, 54, 19, 10, 20, 5, 25, 59]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QIb = e.$PIb = void 0);
				let c = class extends w.$1c {
					static {
						h = this;
					}
					static {
						this.SETTING_ID_PATTERNS = "workbench.editor.customLabels.patterns";
					}
					static {
						this.SETTING_ID_ENABLED = "workbench.editor.customLabels.enabled";
					}
					constructor(g, p) {
						super(),
							(this.j = g),
							(this.m = p),
							(this.c = this.D(new t.$re())),
							(this.onDidChange = this.c.event),
							(this.f = []),
							(this.g = !0),
							(this.h = new a.$Kc(1e3)),
							(this.s = /[a-zA-Z0-9]/),
							(this.y =
								/\$\{(dirname|filename|extname|extname\((?<extnameN>[-+]?\d+)\)|dirname\((?<dirnameN>[-+]?\d+)\))\}/g),
							(this.z = /(?<filename>^\.*[^.]*)/),
							this.r(),
							this.t(),
							this.q();
					}
					q() {
						this.D(
							this.j.onDidChangeConfiguration((g) => {
								if (g.affectsConfiguration(h.SETTING_ID_ENABLED)) {
									const p = this.g;
									this.r(), p !== this.g && this.f.length > 0 && this.c.fire();
								} else
									g.affectsConfiguration(h.SETTING_ID_PATTERNS) &&
										(this.h.clear(), this.t(), this.c.fire());
							}),
						);
					}
					r() {
						this.g = this.j.getValue(h.SETTING_ID_ENABLED);
					}
					t() {
						this.f = [];
						const g = this.j.getValue(h.SETTING_ID_PATTERNS);
						for (const p in g) {
							const o = g[p];
							if (!this.s.test(o)) continue;
							const f = (0, E.$nc)(p),
								b = (0, i.$Jk)(p);
							this.f.push({
								pattern: p,
								template: o,
								isAbsolutePath: f,
								parsedPattern: b,
							});
						}
						this.f.sort((p, o) => this.u(o.pattern) - this.u(p.pattern));
					}
					u(g) {
						let p = 0;
						for (const o of g.split("/"))
							o === "**"
								? (p += 1)
								: o === "*"
									? (p += 10)
									: o.includes("*") || o.includes("?")
										? (p += 50)
										: o !== "" && (p += 100);
						return p;
					}
					getName(g) {
						if (!this.g || this.f.length === 0) return;
						const p = g.toString(),
							o = this.h.get(p);
						if (o !== void 0) return o ?? void 0;
						const f = this.w(g);
						return this.h.set(p, f ?? null), f;
					}
					w(g) {
						const p = this.m.getWorkspaceFolder(g);
						let o;
						for (const f of this.f) {
							let b;
							if (
								(p && !f.isAbsolutePath
									? (o || (o = (0, C.$ph)((0, C.$mh)(p.uri), g) ?? g.path),
										(b = o))
									: (b = g.path),
								f.parsedPattern(b))
							)
								return this.C(f.template, g, b);
						}
					}
					C(g, p, o) {
						let f;
						return g.replace(this.y, (b, s, ...l) => {
							f = f ?? (0, E.$vc)(p.path);
							const { dirnameN: y = "0", extnameN: $ = "0" } = l.pop();
							if (s === "filename") {
								const { filename: v } = this.z.exec(f.base)?.groups ?? {};
								if (v) return v;
							} else if (s === "extname") {
								const v = this.H(f.base);
								if (v) return v;
							} else if (s.startsWith("extname")) {
								const v = parseInt($),
									S = this.I(f.base, v);
								if (S) return S;
							} else if (s.startsWith("dirname")) {
								const v = parseInt(y),
									S = this.G((0, E.$rc)(o), v);
								if (S) return S;
							}
							return b;
						});
					}
					F(g) {
						let p = g;
						for (; p.startsWith("."); ) p = p.slice(1);
						return p;
					}
					G(g, p) {
						g = g.startsWith("/") ? g.slice(1) : g;
						const o = g.split("/");
						return this.J(o, p);
					}
					H(g) {
						return this.F(g).split(".").slice(1).join(".");
					}
					I(g, p) {
						const o = this.F(g).split(".");
						return o.shift(), this.J(o, p);
					}
					J(g, p) {
						const o = g.length;
						let f;
						p < 0 ? (f = Math.abs(p) - 1) : (f = o - p - 1);
						const b = g[f];
						if (!(b === void 0 || b === "")) return b;
					}
				};
				(e.$PIb = c),
					(e.$PIb = c = h = Ne([j(0, d.$gj), j(1, u.$Vi)], c)),
					(e.$QIb = (0, r.$Mi)("ICustomEditorLabelService")),
					(0, m.$lK)(e.$QIb, c, m.InstantiationType.Delayed);
			},
		),
		