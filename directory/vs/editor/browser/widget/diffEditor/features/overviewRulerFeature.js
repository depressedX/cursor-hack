import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/fastDomNode.js';
import '../../../../../base/browser/ui/scrollbar/scrollbarState.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../utils.js';
import '../../../../common/config/editorOptions.js';
import '../../../../common/core/position.js';
import '../../../../common/viewModel/overviewZoneManager.js';
import '../../../../../platform/theme/common/colorRegistry.js';
import '../../../../../platform/theme/common/themeService.js';
define(
			de[1663],
			he([1, 0, 7, 194, 1128, 3, 77, 370, 38, 48, 1546, 51, 35]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$xb = void 0);
				let n = class extends E.$1c {
					static {
						c = this;
					}
					static {
						this.a = 15;
					}
					static {
						this.ENTIRE_DIFF_OVERVIEW_WIDTH = this.a * 2;
					}
					constructor(p, o, f, b, s, l, y) {
						super(),
							(this.b = p),
							(this.c = o),
							(this.f = f),
							(this.g = b),
							(this.j = s),
							(this.n = l),
							(this.q = y),
							(this.width = c.ENTIRE_DIFF_OVERVIEW_WIDTH);
						const $ = (0, C.observableFromEvent)(
								this.q.onDidColorThemeChange,
								() => this.q.getColorTheme(),
							),
							v = (0, C.derived)((T) => {
								const P = $.read(T),
									k =
										P.getColor(a.$5Q) ||
										(P.getColor(a.$YQ) || a.$WQ).transparent(2),
									L =
										P.getColor(a.$6Q) ||
										(P.getColor(a.$ZQ) || a.$XQ).transparent(2);
								return { insertColor: k, removeColor: L };
							}),
							S = (0, i.$Shb)(document.createElement("div"));
						S.setClassName("diffViewport"), S.setPosition("absolute");
						const I = (0, t.h)("div.diffOverview", {
							style: {
								position: "absolute",
								top: "0px",
								width: c.ENTIRE_DIFF_OVERVIEW_WIDTH + "px",
							},
						}).root;
						this.D((0, d.$ywb)(I, S.domNode)),
							this.D(
								(0, t.$$fb)(I, t.$$gb.POINTER_DOWN, (T) => {
									this.b.modified.delegateVerticalScrollbarPointerDown(T);
								}),
							),
							this.D(
								(0, t.$0fb)(
									I,
									t.$$gb.MOUSE_WHEEL,
									(T) => {
										this.b.modified.delegateScrollFromMouseWheelEvent(T);
									},
									{ passive: !1 },
								),
							),
							this.D((0, d.$ywb)(this.c, I)),
							this.D(
								(0, C.autorunWithStore)((T, P) => {
									const k = this.f.read(T),
										L = this.b.original.createOverviewRuler(
											"original diffOverviewRuler",
										);
									L && (P.add(L), P.add((0, d.$ywb)(I, L.getDomNode())));
									const D = this.b.modified.createOverviewRuler(
										"modified diffOverviewRuler",
									);
									if (
										(D && (P.add(D), P.add((0, d.$ywb)(I, D.getDomNode()))),
										!L || !D)
									)
										return;
									const M = (0, C.observableSignalFromEvent)(
											"viewZoneChanged",
											this.b.original.onDidChangeViewZones,
										),
										N = (0, C.observableSignalFromEvent)(
											"viewZoneChanged",
											this.b.modified.onDidChangeViewZones,
										),
										A = (0, C.observableSignalFromEvent)(
											"hiddenRangesChanged",
											this.b.original.onDidChangeHiddenAreas,
										),
										R = (0, C.observableSignalFromEvent)(
											"hiddenRangesChanged",
											this.b.modified.onDidChangeHiddenAreas,
										);
									P.add(
										(0, C.autorun)((O) => {
											M.read(O), N.read(O), A.read(O), R.read(O);
											const B = v.read(O),
												U = k?.diff.read(O)?.mappings;
											function z(H, q, V) {
												const G = V._getViewModel();
												return G
													? H.filter((K) => K.length > 0).map((K) => {
															const J =
																	G.coordinatesConverter.convertModelPositionToViewPosition(
																		new r.$hL(K.startLineNumber, 1),
																	),
																W =
																	G.coordinatesConverter.convertModelPositionToViewPosition(
																		new r.$hL(K.endLineNumberExclusive, 1),
																	),
																X = W.lineNumber - J.lineNumber;
															return new u.$8sb(
																J.lineNumber,
																W.lineNumber,
																X,
																q.toString(),
															);
														})
													: [];
											}
											const F = z(
													(U || []).map((H) => H.lineRangeMapping.original),
													B.removeColor,
													this.b.original,
												),
												x = z(
													(U || []).map((H) => H.lineRangeMapping.modified),
													B.insertColor,
													this.b.modified,
												);
											L?.setZones(F), D?.setZones(x);
										}),
									),
										P.add(
											(0, C.autorun)((O) => {
												const B = this.j.read(O),
													U = this.g.read(O),
													z = this.n.read(O);
												if (z) {
													const F = c.ENTIRE_DIFF_OVERVIEW_WIDTH - 2 * c.a;
													L.setLayout({
														top: 0,
														height: B,
														right: F + c.a,
														width: c.a,
													}),
														D.setLayout({
															top: 0,
															height: B,
															right: 0,
															width: c.a,
														});
													const x = this.b.modifiedScrollTop.read(O),
														H = this.b.modifiedScrollHeight.read(O),
														q = this.b.modified.getOption(
															m.EditorOption.scrollbar,
														),
														V = new w.$Xhb(
															q.verticalHasArrows ? q.arrowSize : 0,
															q.verticalScrollbarSize,
															0,
															z.height,
															H,
															x,
														);
													S.setTop(V.getSliderPosition()),
														S.setHeight(V.getSliderSize());
												} else S.setTop(0), S.setHeight(0);
												(I.style.height = B + "px"),
													(I.style.left =
														U - c.ENTIRE_DIFF_OVERVIEW_WIDTH + "px"),
													S.setWidth(c.ENTIRE_DIFF_OVERVIEW_WIDTH);
											}),
										);
								}),
							);
					}
				};
				(e.$$xb = n), (e.$$xb = n = c = Ne([j(6, h.$iP)], n));
			},
		),
		