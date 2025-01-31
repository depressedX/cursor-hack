import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/core/editOperation.js';
import '../../../../editor/common/model.js';
import '../../../../base/common/async.js';
import '../../chat/common/chatWordCounter.js';
define(
			de[1734],
			he([1, 0, 188, 64, 15, 790]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editOperation*/,
 i /*model*/,
 w /*async*/,
 E /*chatWordCounter*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Yb = C),
					(e.$aZb = d);
				async function C(m, r, u, a) {
					const [h] = m.deltaDecorations(
						[],
						[
							{
								range: r.range,
								options: {
									description: "asyncTextEdit",
									stickiness:
										i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
								},
							},
						],
					);
					let c = !0;
					for await (const n of r.newText) {
						if (m.isDisposed()) break;
						const g = m.getDecorationRange(h);
						if (!g)
							throw new Error(
								"FAILED to perform async replace edit because the anchor decoration was removed",
							);
						const p = c
							? t.$jL.replace(g, n)
							: t.$jL.insert(g.getEndPosition(), n);
						a?.start(),
							m.pushEditOperations(null, [p], (o) => (u?.report(o), null)),
							a?.stop(),
							(c = !1);
					}
				}
				function d(m, r, u, a) {
					u = Math.max(30, u);
					const h = new w.$di();
					let c = r.text ?? "";
					m.cancelAndSet(() => {
						if (a.isCancellationRequested) return;
						const g = (0, E.$RKb)(c, 1);
						h.emitOne(g.value),
							(c = c.substring(g.value.length)),
							g.isFullString && (m.cancel(), h.resolve(), n.dispose());
					}, 1e3 / u);
					const n = a.onCancellationRequested(() => {
						m.cancel(), h.resolve(), n.dispose();
					});
					return { range: r.range, newText: h.asyncIterable };
				}
			},
		)
