import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../common/core/lineRange.js';
import '../../../../common/core/offsetRange.js';
define(
			de[2690],
			he([1, 0, 7, 3, 77, 196, 289]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*observable*/,
 E /*lineRange*/,
 C /*offsetRange*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gyb = void 0);
				class d extends i.$1c {
					constructor(u, a, h) {
						super(),
							(this.m = u),
							(this.n = a),
							(this.q = h),
							(this.a = (0, w.observableFromEvent)(
								this,
								this.m.onDidScrollChange,
								(g) => this.m.getScrollTop(),
							)),
							(this.b = this.a.map((g) => g === 0)),
							(this.c = (0, w.observableFromEvent)(
								this,
								this.m.onDidChangeModel,
								(g) => this.m.hasModel(),
							)),
							(this.f = (0, w.observableSignalFromEvent)(
								"onDidChangeViewZones",
								this.m.onDidChangeViewZones,
							)),
							(this.g = (0, w.observableSignalFromEvent)(
								"onDidContentSizeChange",
								this.m.onDidContentSizeChange,
							)),
							(this.j = (0, w.observableSignal)("domNodeSizeChanged")),
							(this.r = new Map()),
							(this.n.className = "gutter monaco-editor");
						const c = this.n.appendChild(
								(0, t.h)("div.scroll-decoration", {
									role: "presentation",
									ariaHidden: "true",
									style: { width: "100%" },
								}).root,
							),
							n = new ResizeObserver(() => {
								(0, w.transaction)((g) => {
									this.j.trigger(g);
								});
							});
						n.observe(this.n),
							this.D((0, i.$Yc)(() => n.disconnect())),
							this.D(
								(0, w.autorun)((g) => {
									c.className = this.b.read(g) ? "" : "scroll-decoration";
								}),
							),
							this.D((0, w.autorun)((g) => this.s(g)));
					}
					dispose() {
						super.dispose(), (0, t.$hhb)(this.n);
					}
					s(u) {
						if (!this.c.read(u)) return;
						this.j.read(u), this.f.read(u), this.g.read(u);
						const a = this.a.read(u),
							h = this.m.getVisibleRanges(),
							c = new Set(this.r.keys()),
							n = C.$pL.ofStartAndLength(0, this.n.clientHeight);
						if (!n.isEmpty)
							for (const g of h) {
								const p = new E.$rL(g.startLineNumber, g.endLineNumber + 1),
									o = this.q.getIntersectingGutterItems(p, u);
								(0, w.transaction)((f) => {
									for (const b of o) {
										if (!b.range.intersect(p)) continue;
										c.delete(b.id);
										let s = this.r.get(b.id);
										if (s) s.item.set(b, f);
										else {
											const v = document.createElement("div");
											this.n.appendChild(v);
											const S = (0, w.observableValue)("item", b),
												I = this.q.createView(S, v);
											(s = new m(S, I, v)), this.r.set(b.id, s);
										}
										const l =
												b.range.startLineNumber <=
												this.m.getModel().getLineCount()
													? this.m.getTopForLineNumber(
															b.range.startLineNumber,
															!0,
														) - a
													: this.m.getBottomForLineNumber(
															b.range.startLineNumber - 1,
															!1,
														) - a,
											$ =
												(b.range.endLineNumberExclusive === 1
													? Math.max(
															l,
															this.m.getTopForLineNumber(
																b.range.startLineNumber,
																!1,
															) - a,
														)
													: Math.max(
															l,
															this.m.getBottomForLineNumber(
																b.range.endLineNumberExclusive - 1,
																!0,
															) - a,
														)) - l;
										(s.domNode.style.top = `${l}px`),
											(s.domNode.style.height = `${$}px`),
											s.gutterItemView.layout(C.$pL.ofStartAndLength(l, $), n);
									}
								});
							}
						for (const g of c) {
							const p = this.r.get(g);
							p.gutterItemView.dispose(), p.domNode.remove(), this.r.delete(g);
						}
					}
				}
				e.$gyb = d;
				class m {
					constructor(u, a, h) {
						(this.item = u), (this.gutterItemView = a), (this.domNode = h);
					}
				}
			},
		),
		