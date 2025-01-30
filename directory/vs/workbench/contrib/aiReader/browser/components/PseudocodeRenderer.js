import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/uri.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../platform/editor/common/editor.js';
import '../../../../../platform/opener/common/opener.js';
import './pseudocodeBlock.js';
import '../../../aichat/browser/components/icons.js';
import '../../../controlCommon/browser/solid.js';
define(
			de[4133],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 26, 9, 17, 116, 41, 3020, 502, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*solid*/,
 r /*themables*/,
 u /*uri*/,
 a /*range*/,
 h /*editor*/,
 c /*opener*/,
 n /*pseudocodeBlock*/,
 g /*icons*/,
 p /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$wZc = y);
				const o = (0, t.template)("<div>"),
					f = (0, t.template)("<span>"),
					b = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle">',
					),
					s = (0, t.template)("<div><div>"),
					l = () => Math.random().toString(36).substring(2);
				function y($) {
					const v = (0, p.$odc)(),
						S = 12,
						I = 24,
						[T, P] = (0, m.createSignal)(!0),
						k = (() => {
							const R = o();
							return (
								R.style.setProperty("width", "100%"),
								R.style.setProperty("height", "100%"),
								R.style.setProperty("box-sizing", "border-box"),
								R
							);
						})(),
						L = (0, m.createMemo)(
							() =>
								$.rawText.split(`
`).length > I,
						),
						[D, M] = (0, m.createSignal)(null),
						N = (0, m.createMemo)(() =>
							u.URI.parse(`aichat-code-block-anysphere-${l()}://`),
						);
					(0, m.createEffect)(() => {
						if (!D()) {
							const R = v.instantiationService.createInstance(
									n.$vZc,
									k,
									n.$vZc.getEditorOptions(v.configurationService),
								),
								O = $.onCodeChange;
							R.onDidChangeModelContent(() => {
								O?.(R.getValue());
							}),
								M(R);
						}
					}),
						(0, m.createEffect)(() => {
							const R = D();
							if (!R || !$.onLineClick) return;
							const O = [],
								B = $.onLineClick;
							O.push(
								R.onMouseDown((F) => {
									F.target.position && B?.(F.target.position.lineNumber);
								}),
							);
							const U = 0;
							function z() {
								R.getModel()?.removeAllDecorationsWithOwnerId(U);
							}
							O.push(
								R.onMouseMove(
									(F) => {
										const x = F.target.position?.lineNumber;
										if (x === void 0) return;
										const H = R.getModel();
										z(),
											H?.deltaDecorations(
												[],
												[
													{
														range: new a.$iL(x, 1, x, 1),
														options: {
															className: "pseudocode-line-highlight",
															isWholeLine: !0,
															description: "",
														},
													},
												],
												U,
											);
									},
									[$.onLineClick],
								),
							),
								O.push(
									R.onMouseLeave((F) => {
										z();
									}),
								),
								(0, m.onCleanup)(() => {
									for (const F of O) F.dispose();
									z();
								});
						}),
						(0, m.createEffect)(() => {
							const R = D();
							R && R.updateOptions({ readOnly: !$.editable });
						}, [$.editable]),
						(0, m.createEffect)(() => {
							const R = D(),
								O = $.rawText.split(`
`);
							if (R) {
								let B = N();
								const U =
									v.modelService.getModel(B) ||
									v.modelService.createModel(
										O.join(`
`),
										$.language ?? null,
										B,
										!1,
									);
								R.getModel() !== U
									? R.setModel(U)
									: U.setValue(
											O.join(`
`),
										);
							}
						}),
						(0, m.createEffect)(() => {
							const R = D();
							R &&
								(T()
									? L() &&
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
										R.setScrollTop(0),
										R.setScrollLeft(0))
									: R.updateOptions({
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
						(0, m.onCleanup)(() => {
							D()?.dispose(), D()?.getModel()?.dispose(), M(null);
						});
					const A = async (R, O, B) => {
						const U = (0, c.$8rb)(R, {
							startLineNumber: O.selectionStartLineNumber,
							startColumn: O.selectionStartColumn,
							endLineNumber: O.positionLineNumber,
							endColumn: O.positionColumn,
						});
						B.open(U, {
							openToSide: !1,
							editorOptions: {
								revealIfVisible: !0,
								revealIfOpened: !0,
								source: h.EditorOpenSource.USER,
							},
							fromUserGesture: !0,
						});
					};
					return (() => {
						const R = s(),
							O = R.firstChild;
						return (
							R.style.setProperty("position", "relative"),
							O.style.setProperty("white-space", "pre"),
							(0, i.insert)(O, k, null),
							(0, i.insert)(
								O,
								(0, w.createComponent)(m.Show, {
									get when() {
										return (0, d.memo)(() => !!$.collapsible)() && L();
									},
									get children() {
										const B = b();
										return (
											B.addEventListener("click", () => {
												P(!T());
											}),
											(0, i.insert)(
												B,
												(0, w.createComponent)(m.Switch, {
													get children() {
														return [
															(0, w.createComponent)(m.Match, {
																get when() {
																	return T();
																},
																get children() {
																	const U = f();
																	return (
																		(0, C.effect)(() =>
																			(0, E.className)(
																				U,
																				r.ThemeIcon.asClassName(g.$E0b),
																			),
																		),
																		U
																	);
																},
															}),
															(0, w.createComponent)(m.Match, {
																get when() {
																	return !T();
																},
																get children() {
																	const U = f();
																	return (
																		(0, C.effect)(() =>
																			(0, E.className)(
																				U,
																				r.ThemeIcon.asClassName(g.$F0b),
																			),
																		),
																		U
																	);
																},
															}),
														];
													},
												}),
											),
											B
										);
									},
								}),
								null,
							),
							(0, C.effect)(() =>
								(!L() || !$.collapsible
									? `${
											19 *
												$.rawText.split(`
`).length +
											10
										}px`
									: T()
										? `${19 * S}px`
										: `${19 * I}px`) != null
									? O.style.setProperty(
											"height",
											!L() || !$.collapsible
												? `${
														19 *
															$.rawText.split(`
`).length +
														10
													}px`
												: T()
													? `${19 * S}px`
													: `${19 * I}px`,
										)
									: O.style.removeProperty("height"),
							),
							R
						);
					})();
				}
			},
		),
		