import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../common/core/range.js';
import '../../../common/services/model.js';
import '../../../../platform/commands/common/commands.js';
import '../../../common/services/languageFeatures.js';
define(
			de[2710],
			he([1, 0, 24, 33, 29, 3, 28, 9, 17, 67, 31, 69]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Ob = e.Link = void 0),
					(e.$5Ob = n);
				class h {
					constructor(p, o) {
						(this.a = p), (this.b = o);
					}
					toJSON() {
						return { range: this.range, url: this.url, tooltip: this.tooltip };
					}
					get range() {
						return this.a.range;
					}
					get url() {
						return this.a.url;
					}
					get tooltip() {
						return this.a.tooltip;
					}
					async resolve(p) {
						return this.a.url
							? this.a.url
							: typeof this.b.resolveLink == "function"
								? Promise.resolve(this.b.resolveLink(this.a, p)).then(
										(o) => (
											(this.a = o || this.a),
											this.a.url
												? this.resolve(p)
												: Promise.reject(new Error("missing"))
										),
									)
								: Promise.reject(new Error("missing"));
					}
				}
				e.Link = h;
				class c {
					constructor(p) {
						this.a = new E.$Zc();
						let o = [];
						for (const [f, b] of p) {
							const s = f.links.map((l) => new h(l, b));
							(o = c.b(o, s)), (0, E.$Uc)(f) && this.a.add(f);
						}
						this.links = o;
					}
					dispose() {
						this.a.dispose(), (this.links.length = 0);
					}
					static b(p, o) {
						const f = [];
						let b, s, l, y;
						for (b = 0, l = 0, s = p.length, y = o.length; b < s && l < y; ) {
							const $ = p[b],
								v = o[l];
							if (m.$iL.areIntersectingOrTouching($.range, v.range)) {
								b++;
								continue;
							}
							m.$iL.compareRangesUsingStarts($.range, v.range) < 0
								? (f.push($), b++)
								: (f.push(v), l++);
						}
						for (; b < s; b++) f.push(p[b]);
						for (; l < y; l++) f.push(o[l]);
						return f;
					}
				}
				e.$4Ob = c;
				function n(g, p, o) {
					const f = [],
						b = g
							.ordered(p)
							.reverse()
							.map((s, l) =>
								Promise.resolve(s.provideLinks(p, o)).then((y) => {
									y && (f[l] = [y, s]);
								}, w.$5),
							);
					return Promise.all(b).then(() => {
						const s = new c((0, t.$Lb)(f));
						return o.isCancellationRequested ? (s.dispose(), new c([])) : s;
					});
				}
				u.$fk.registerCommand("_executeLinkProvider", async (g, ...p) => {
					let [o, f] = p;
					(0, C.$vg)(o instanceof d.URI), typeof f != "number" && (f = 0);
					const { linkProvider: b } = g.get(a.$k3),
						s = g.get(r.$QO).getModel(o);
					if (!s) return [];
					const l = await n(b, s, i.CancellationToken.None);
					if (!l) return [];
					for (let $ = 0; $ < Math.min(f, l.links.length); $++)
						await l.links[$].resolve(i.CancellationToken.None);
					const y = l.links.slice(0);
					return l.dispose(), y;
				});
			},
		),
		