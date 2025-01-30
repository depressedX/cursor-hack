import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/themables.js';
import './icons.js';
import './utilities.js';
import '../../../ui/browser/widgets/codeBlock.js';
import '../../../controlCommon/browser/solid.js';
define(
			de[1363],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 26, 502, 1232, 312, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*web*/,
 r /*solid*/,
 u /*themables*/,
 a /*icons*/,
 h /*utilities*/,
 c /*codeBlock*/,
 n /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wbc = void 0),
					(e.$xbc = s);
				const g = (0, t.template)("<div>"),
					p = (0, t.template)("<span>"),
					o = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle">',
					),
					f = (0, t.template)('<div class="input-box-code-selection"><div>'),
					b = (l) => {
						const y = (0, n.$odc)(),
							$ = (0, r.createMemo)(() => l.selection),
							v = 12,
							S = 24,
							[I, T] = (0, r.createSignal)(!0),
							[P, k] = (0, r.createSignal)(!1),
							[L, D] = (0, r.createSignal)(
								$()
									.text.split(`
`)
									.slice(1, -1).length > S,
							),
							[M, N] = (0, r.createSignal)(null),
							A = (0, r.createMemo)(() => $().text),
							R = (() => {
								const B = g();
								return (
									B.style.setProperty("width", "100%"),
									B.style.setProperty("height", "100%"),
									B.style.setProperty("box-sizing", "border-box"),
									B
								);
							})();
						(0, r.createEffect)(() => {
							const B = $(),
								U = y.instantiationService.createInstance(
									c.$X0b,
									R,
									c.$X0b.getEditorOptions(y.configurationService),
									{},
								);
							O(U),
								N(U),
								k(!0),
								(0, r.onCleanup)(() => {
									U.getModel()?.dispose(), U.dispose();
								});
						});
						const O = (B) => {
							let U = "";
							const F = /```(\w*)/.exec(A());
							F && (U = F[1]);
							const x =
								y.languageService.createByLanguageNameOrFilepathOrFirstLine(
									U,
									null,
									void 0,
								);
							let H = (0, h.$vbc)();
							const q = A()
								.split(`
`)
								.slice(1, -1);
							D(q.length > S);
							const V = y.modelService.createModel(
								q.join(`
`),
								x,
								H,
								!1,
							);
							B.setModel(V);
						};
						return (
							(0, r.createEffect)(() => {
								const B = M();
								B &&
									(I()
										? L() &&
											(B.updateOptions({
												scrollbar: {
													vertical: "hidden",
													verticalScrollbarSize: 0,
													horizontal: "hidden",
													handleMouseWheel: !1,
													alwaysConsumeMouseWheel: !1,
													horizontalScrollbarSize: 0,
												},
											}),
											B.setScrollTop(0),
											B.setScrollLeft(0))
										: B.updateOptions({
												scrollbar: {
													vertical: "auto",
													verticalScrollbarSize: 10,
													horizontal: "auto",
													handleMouseWheel: !0,
													alwaysConsumeMouseWheel: !0,
													horizontalScrollbarSize: 10,
												},
											}));
							}),
							(0, r.onCleanup)(() => {
								const B = M();
								if (B) {
									const U = B.getModel();
									U && U.dispose(), B.dispose();
								}
							}),
							(() => {
								const B = f(),
									U = B.firstChild;
								return (
									U.style.setProperty("white-space", "pre"),
									U.style.setProperty("padding", "0.75rem"),
									(0, w.insert)(U, R, null),
									(0, w.insert)(
										U,
										(0, E.createComponent)(r.Show, {
											get when() {
												return (0, m.memo)(() => !!L())() && P();
											},
											get children() {
												const z = o();
												return (
													z.addEventListener("click", () => {
														T(!I());
													}),
													(0, w.insert)(
														z,
														(0, E.createComponent)(r.Switch, {
															get children() {
																return [
																	(0, E.createComponent)(r.Match, {
																		get when() {
																			return I();
																		},
																		get children() {
																			const F = p();
																			return (
																				(0, d.effect)(() =>
																					(0, C.className)(
																						F,
																						u.ThemeIcon.asClassName(a.$E0b),
																					),
																				),
																				F
																			);
																		},
																	}),
																	(0, E.createComponent)(r.Match, {
																		get when() {
																			return !I();
																		},
																		get children() {
																			const F = p();
																			return (
																				(0, d.effect)(() =>
																					(0, C.className)(
																						F,
																						u.ThemeIcon.asClassName(a.$F0b),
																					),
																				),
																				F
																			);
																		},
																	}),
																];
															},
														}),
													),
													z
												);
											},
										}),
										null,
									),
									(0, d.effect)(
										(z) => {
											const F = {
													position: "relative",
													overflow: "hidden",
													...l.style,
												},
												x = L()
													? I()
														? `${19 * v}px`
														: `${19 * S}px`
													: `${
															19 *
																A()
																	.split(`
`)
																	.slice(1, -1).length +
															10
														}px`,
												H = !P() || I() ? "0rem" : "1.5rem";
											return (
												(z._v$ = (0, i.style)(B, F, z._v$)),
												x !== z._v$2 &&
													((z._v$2 = x) != null
														? U.style.setProperty("height", x)
														: U.style.removeProperty("height")),
												H !== z._v$3 &&
													((z._v$3 = H) != null
														? U.style.setProperty("padding-bottom", H)
														: U.style.removeProperty("padding-bottom")),
												z
											);
										},
										{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
									),
									B
								);
							})()
						);
					};
				e.$wbc = b;
				function s(l) {
					return (0, E.createComponent)(r.Show, {
						get when() {
							return l.selection;
						},
						children: (y) =>
							(0, E.createComponent)(e.$wbc, {
								get selection() {
									return y();
								},
								get lines() {
									return l.lines;
								},
								get style() {
									return l.style;
								},
							}),
					});
				}
			},
		),
		