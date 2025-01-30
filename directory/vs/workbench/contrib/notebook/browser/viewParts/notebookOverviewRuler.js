import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/fastDomNode.js';
import '../../../../../base/browser/pixelRatio.js';
import '../../../../../platform/theme/common/themeService.js';
import '../notebookBrowser.js';
define(
			de[3504],
			he([1, 0, 7, 194, 345, 35, 108]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*fastDomNode*/,
 w /*pixelRatio*/,
 E /*themeService*/,
 C /*notebookBrowser*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$o4b = void 0);
				let d = class extends E.$pP {
					constructor(r, u, a) {
						super(a),
							(this.notebookEditor = r),
							(this.b = 3),
							(this.a = (0, i.$Shb)(document.createElement("canvas"))),
							this.a.setPosition("relative"),
							this.a.setLayerHinting(!0),
							this.a.setContain("strict"),
							u.appendChild(this.a.domNode),
							this.D(
								r.onDidChangeDecorations(() => {
									this.layout();
								}),
							),
							this.D(
								w.$sjb
									.getInstance((0, t.getWindow)(this.a.domNode))
									.onDidChange(() => {
										this.layout();
									}),
							);
					}
					layout() {
						const u = this.notebookEditor.getLayoutInfo(),
							a = u.scrollHeight,
							h = u.height,
							c = w.$sjb.getInstance((0, t.getWindow)(this.a.domNode)).value;
						this.a.setWidth(10),
							this.a.setHeight(h),
							(this.a.domNode.width = 10 * c),
							(this.a.domNode.height = h * c);
						const n = this.a.domNode.getContext("2d");
						n.clearRect(0, 0, 10 * c, h * c),
							this.c(n, 10 * c, h * c, a * c, c);
					}
					c(r, u, a, h, c) {
						const n = this.notebookEditor.getViewModel(),
							g = this.notebookEditor.getLayoutInfo().fontInfo,
							p = u / this.b;
						let o = 0;
						if (n)
							for (let f = 0; f < n.viewCells.length; f++) {
								const b = n.viewCells[f],
									s = b.textBuffer,
									l = b.getCellDecorations(),
									y = (b.layoutInfo.totalHeight / h) * c * a;
								l
									.filter(($) => $.overviewRuler)
									.forEach(($) => {
										const v = $.overviewRuler,
											S = this.w(v.color) ?? "#000000",
											I = Math.min(
												g.lineHeight,
												(b.layoutInfo.editorHeight / h / s.getLineCount()) *
													c *
													a,
											),
											T = v.modelRanges
												.map((L) => L.startLineNumber)
												.reduce(
													(L, D) => (
														(L.length === 0 || L[L.length - 1] !== D) &&
															L.push(D),
														L
													),
													[],
												);
										let P = 0;
										switch (v.position) {
											case C.NotebookOverviewRulerLane.Left:
												P = 0;
												break;
											case C.NotebookOverviewRulerLane.Center:
												P = p;
												break;
											case C.NotebookOverviewRulerLane.Right:
												P = p * 2;
												break;
											default:
												break;
										}
										const k =
											v.position === C.NotebookOverviewRulerLane.Full
												? p * 3
												: p;
										for (let L = 0; L < T.length; L++) {
											r.fillStyle = S;
											const M = (T[L] - 1) * I;
											r.fillRect(P, o + M, k, I);
										}
										if (v.includeOutput) {
											r.fillStyle = S;
											const L = (b.layoutInfo.editorHeight / h) * c * a,
												D = (g.lineHeight / h) * c * a;
											r.fillRect(p, o + L, p, D);
										}
									}),
									(o += y);
							}
					}
				};
				(e.$o4b = d), (e.$o4b = d = Ne([j(2, E.$iP)], d));
			},
		),
		