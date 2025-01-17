import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/glob.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/path.js';
import '../../../../base/common/resources.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/map.js';
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
		