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
import '../../../../../base/browser/ui/progressbar/progressbar.js';
import '../../../../../base/common/themables.js';
import '../../../../../editor/browser/widget/diffEditor/diffEditorWidget.js';
import '../../../../../editor/contrib/hover/browser/diffCodeBlock.js';
import '../../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../../platform/progress/common/progress.js';
import './utilities.js';
import './icons.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../services/progress/browser/progressIndicator.js';
define(
			de[4140],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 436, 26, 309, 1689, 128, 84, 1232, 502,
				36, 707,
			]),
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
 u /*progressbar*/,
 a /*themables*/,
 h /*diffEditorWidget*/,
 c /*diffCodeBlock*/,
 n /*serviceCollection*/,
 g /*progress*/,
 p /*utilities*/,
 o /*icons*/,
 f /*solid*/,
 b /*progressIndicator*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Abc = void 0),
					(e.$Bbc = S);
				const s = (0, t.template)("<div>"),
					l = (0, t.template)("<span>"),
					y = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle">',
					),
					$ = (0, t.template)('<div class="input-box-code-selection"><div>'),
					v = (I, T, P) => {
						const [D, M] = (0, r.createSignal)(!0),
							N = (() => {
								const G = s();
								return (
									G.style.setProperty("width", "100%"),
									G.style.setProperty("height", "100%"),
									G.style.setProperty("box-sizing", "border-box"),
									G
								);
							})(),
							R = T.instantiationService
								.createChild(new n.$Ki([g.$bO, new b.$JMb(new u.$bpb(N))]))
								.createInstance(
									h.$3yb,
									N,
									{ ...c.$zbc.getEditorOptions(T.configurationService) },
									{
										originalEditor: { isSimpleWidget: !0 },
										modifiedEditor: { isSimpleWidget: !0 },
									},
								);
						(R.custom = !0), R.layout();
						let O = (0, p.$vbc)(),
							B = (0, p.$vbc)(),
							U = [],
							z = [];
						for (const G of I.diffs) {
							U.push(`--- a/${G.from}`),
								U.push(`+++ b/${G.to}`),
								z.push(`--- a/${G.from}`),
								z.push(`+++ b/${G.to}`);
							for (const K of G.chunks) {
								U.push(K.content), z.push(K.content);
								for (const J of K.lines)
									J[0] === "+"
										? z.push(J)
										: (J[0] === "-" || z.push(J), U.push(J));
							}
						}
						const F = Math.max(U.length, z.length),
							x = U.length > 24 || z.length > 24,
							H = T.languageService.createById("diff"),
							q = T.modelService.createModel(
								U.join(`
`),
								H,
								O,
								!0,
							),
							V = T.modelService.createModel(
								z.join(`
`),
								H,
								B,
								!0,
							);
						return (
							R.setModel({ original: q, modified: V }),
							(0, r.onMount)(() => {
								let G = 0;
								const K = T.window.setInterval(() => {
									R.layout(), G++, G >= 100 && T.window.clearInterval(K);
								}, 10);
							}),
							(0, r.createEffect)(() => {
								D()
									? x &&
										(R.updateOptions({
											scrollbar: {
												vertical: "hidden",
												verticalScrollbarSize: 0,
												horizontal: "hidden",
												handleMouseWheel: !1,
												alwaysConsumeMouseWheel: !1,
												horizontalScrollbarSize: 0,
											},
										}),
										R.getModifiedEditor().setScrollTop(0),
										R.getModifiedEditor().setScrollLeft(0))
									: R.updateOptions({
											scrollbar: {
												vertical: "auto",
												verticalScrollbarSize: 10,
												horizontal: "auto",
												handleMouseWheel: !0,
												alwaysConsumeMouseWheel: !0,
												horizontalScrollbarSize: 10,
											},
										});
							}),
							(0, r.onCleanup)(() => {
								R.dispose(), q.dispose(), V.dispose(), N.remove();
							}),
							(0, E.createComponent)(r.Show, {
								get when() {
									return U.length > 0 || z.length > 0;
								},
								get children() {
									const G = $(),
										K = G.firstChild;
									return (
										K.style.setProperty("white-space", "pre"),
										K.style.setProperty("padding", "0.75rem"),
										(x ? "1.5rem" : "0rem") != null
											? K.style.setProperty(
													"padding-bottom",
													x ? "1.5rem" : "0rem",
												)
											: K.style.removeProperty("padding-bottom"),
										(0, w.insert)(K, N, null),
										(0, w.insert)(
											K,
											(0, E.createComponent)(r.Show, {
												when: x,
												get children() {
													const J = y();
													return (
														J.addEventListener("click", () => {
															M(!D());
														}),
														(0, w.insert)(
															J,
															(0, E.createComponent)(r.Switch, {
																get children() {
																	return [
																		(0, E.createComponent)(r.Match, {
																			get when() {
																				return D();
																			},
																			get children() {
																				const W = l();
																				return (
																					(0, d.effect)(() =>
																						(0, C.className)(
																							W,
																							a.ThemeIcon.asClassName(o.$E0b),
																						),
																					),
																					W
																				);
																			},
																		}),
																		(0, E.createComponent)(r.Match, {
																			get when() {
																				return !D();
																			},
																			get children() {
																				const W = l();
																				return (
																					(0, d.effect)(() =>
																						(0, C.className)(
																							W,
																							a.ThemeIcon.asClassName(o.$F0b),
																						),
																					),
																					W
																				);
																			},
																		}),
																	];
																},
															}),
														),
														J
													);
												},
											}),
											null,
										),
										(0, d.effect)(
											(J) => {
												const W = {
														position: "relative",
														overflow: "hidden",
														...P,
													},
													X = x
														? D()
															? `${19 * 12}px`
															: `${19 * 24}px`
														: `${19 * F + 10}px`;
												return (
													(J._v$ = (0, i.style)(G, W, J._v$)),
													X !== J._v$2 &&
														((J._v$2 = X) != null
															? K.style.setProperty("height", X)
															: K.style.removeProperty("height")),
													J
												);
											},
											{ _v$: void 0, _v$2: void 0 },
										),
										G
									);
								},
							})
						);
					};
				e.$Abc = v;
				function S(I) {
					const T = (0, f.$odc)();
					return (0, m.memo)(() => (0, e.$Abc)(I.diff, T, I.style));
				}
			},
		)
