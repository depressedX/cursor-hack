import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/map.js';
import '../../../common/core/range.js';
import './codelens.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/browser/window.js';
import '../../../../base/browser/dom.js';
define(
			de[2892],
			he([1, 0, 6, 59, 17, 1601, 20, 5, 21, 75, 7]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*map*/,
 w /*range*/,
 E /*codelens*/,
 C /*extensions*/,
 d /*instantiation*/,
 m /*storage*/,
 r /*window*/,
 u /*dom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MBb = e.$LBb = void 0),
					(e.$LBb = (0, d.$Mi)("ICodeLensCache"));
				class a {
					constructor(n, g) {
						(this.lineCount = n), (this.data = g);
					}
				}
				let h = class {
					constructor(n) {
						(this.a = new (class {
							provideCodeLenses() {
								throw new Error("not supported");
							}
						})()),
							(this.b = new i.$Jc(20, 0.75));
						const g = "codelens/cache";
						(0, u.$egb)(r.$Bfb, () => n.remove(g, m.StorageScope.WORKSPACE));
						const p = "codelens/cache2",
							o = n.get(p, m.StorageScope.WORKSPACE, "{}");
						this.f(o);
						const f = t.Event.filter(
							n.onWillSaveState,
							(b) => b.reason === m.WillSaveStateReason.SHUTDOWN,
						);
						t.Event.once(f)((b) => {
							n.store(
								p,
								this.c(),
								m.StorageScope.WORKSPACE,
								m.StorageTarget.MACHINE,
							);
						});
					}
					put(n, g) {
						const p = g.lenses.map((b) => ({
								range: b.symbol.range,
								command: b.symbol.command && {
									id: "",
									title: b.symbol.command?.title,
								},
							})),
							o = new E.$JBb();
						o.add({ lenses: p, dispose: () => {} }, this.a);
						const f = new a(n.getLineCount(), o);
						this.b.set(n.uri.toString(), f);
					}
					get(n) {
						const g = this.b.get(n.uri.toString());
						return g && g.lineCount === n.getLineCount() ? g.data : void 0;
					}
					delete(n) {
						this.b.delete(n.uri.toString());
					}
					c() {
						const n = Object.create(null);
						for (const [g, p] of this.b) {
							const o = new Set();
							for (const f of p.data.lenses)
								o.add(f.symbol.range.startLineNumber);
							n[g] = { lineCount: p.lineCount, lines: [...o.values()] };
						}
						return JSON.stringify(n);
					}
					f(n) {
						try {
							const g = JSON.parse(n);
							for (const p in g) {
								const o = g[p],
									f = [];
								for (const s of o.lines)
									f.push({ range: new w.$iL(s, 1, s, 11) });
								const b = new E.$JBb();
								b.add({ lenses: f, dispose() {} }, this.a),
									this.b.set(p, new a(o.lineCount, b));
							}
						} catch {}
					}
				};
				(e.$MBb = h),
					(e.$MBb = h = Ne([j(0, m.$lq)], h)),
					(0, C.$lK)(e.$LBb, h, C.InstantiationType.Delayed);
			},
		)
