import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/event.js';
import '../../../../base/common/stopwatch.js';
import '../../../common/core/lineRange.js';
import '../../../common/diff/rangeMapping.js';
import '../../../common/services/editorWorker.js';
import '../../../../platform/telemetry/common/telemetry.js';
define(
			de[953],
			he([1, 0, 20, 5, 6, 162, 196, 342, 200, 32]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*instantiation*/,
 w /*event*/,
 E /*stopwatch*/,
 C /*lineRange*/,
 d /*rangeMapping*/,
 m /*editorWorker*/,
 r /*telemetry*/) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fxb = e.$Exb = e.$Dxb = void 0),
					(e.$Dxb = (0, i.$Mi)("diffProviderFactoryService"));
				let a = class {
					constructor(n) {
						this.a = n;
					}
					createDiffProvider(n) {
						return this.a.createInstance(h, n);
					}
				};
				(e.$Exb = a),
					(e.$Exb = a = Ne([j(0, i.$Li)], a)),
					(0, t.$lK)(e.$Dxb, a, t.InstantiationType.Delayed);
				let h = class {
					static {
						u = this;
					}
					static {
						this.e = new Map();
					}
					constructor(n, g, p) {
						(this.f = g),
							(this.g = p),
							(this.a = new w.$re()),
							(this.onDidChange = this.a.event),
							(this.b = "advanced"),
							(this.d = void 0),
							this.setOptions(n);
					}
					dispose() {
						this.d?.dispose();
					}
					async computeDiff(n, g, p, o) {
						if (typeof this.b != "string")
							return this.b.computeDiff(n, g, p, o);
						if (n.isDisposed() || g.isDisposed())
							return { changes: [], identical: !0, quitEarly: !1, moves: [] };
						if (n.getLineCount() === 1 && n.getLineMaxColumn(1) === 1)
							return g.getLineCount() === 1 && g.getLineMaxColumn(1) === 1
								? { changes: [], identical: !0, quitEarly: !1, moves: [] }
								: {
										changes: [
											new d.$CL(
												new C.$rL(1, 2),
												new C.$rL(1, g.getLineCount() + 1),
												[
													new d.$DL(
														n.getFullModelRange(),
														g.getFullModelRange(),
													),
												],
											),
										],
										identical: !1,
										quitEarly: !1,
										moves: [],
									};
						const f = JSON.stringify([n.uri.toString(), g.uri.toString()]),
							b = JSON.stringify([
								n.id,
								g.id,
								n.getAlternativeVersionId(),
								g.getAlternativeVersionId(),
								JSON.stringify(p),
							]),
							s = u.e.get(f);
						if (s && s.context === b) return s.result;
						const l = E.$le.create(),
							y = await this.f.computeDiff(n.uri, g.uri, p, this.b),
							$ = l.elapsed();
						if (
							(this.g.publicLog2("diffEditor.computeDiff", {
								timeMs: $,
								timedOut: y?.quitEarly ?? !0,
								detectedMoves: p.computeMoves ? (y?.moves.length ?? 0) : -1,
							}),
							o.isCancellationRequested)
						)
							return { changes: [], identical: !1, quitEarly: !0, moves: [] };
						if (!y) throw new Error("no diff result available");
						return (
							u.e.size > 10 && u.e.delete(u.e.keys().next().value),
							u.e.set(f, { result: y, context: b }),
							y
						);
					}
					setOptions(n) {
						let g = !1;
						n.diffAlgorithm &&
							this.b !== n.diffAlgorithm &&
							(this.d?.dispose(),
							(this.d = void 0),
							(this.b = n.diffAlgorithm),
							typeof n.diffAlgorithm != "string" &&
								(this.d = n.diffAlgorithm.onDidChange(() => this.a.fire())),
							(g = !0)),
							g && this.a.fire();
					}
				};
				(e.$Fxb = h), (e.$Fxb = h = u = Ne([j(1, m.$Cxb), j(2, r.$km)], h));
			},
		),
		