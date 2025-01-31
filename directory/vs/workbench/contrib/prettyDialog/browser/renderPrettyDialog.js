import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../controlCommon/browser/solid.js';
import '../../ui/browser/ModalComponent.js';
import '../../ui/browser/simpleButton/simpleButton.js';
import '../../../../css!vs/workbench/contrib/prettyDialog/browser/prettyDialog.js';
define(
			de[4304],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 14, 26, 36, 815, 147, 2480]),
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
 u /*codicons*/,
 a /*themables*/,
 h /*solid*/,
 c /*ModalComponent*/,
 n /*simpleButton*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$gzc = s);
				const g = (0, t.template)('<div class="pretty-dialog-message">'),
					p = (0, t.template)(
						'<div class="pretty-dialog-content"><div class="pretty-dialog-header"><div></div><h1 class="pretty-dialog-title"></h1></div><div class="pretty-dialog-buttons">',
					),
					o = (0, t.template)("<div>"),
					f = (l) =>
						(0, d.createComponent)(
							n.$rdc,
							(0, m.mergeProps)(l, {
								get style() {
									return {
										"font-size": "10px",
										padding: "0px 4px",
										...l.style,
									};
								},
								get tabFocusable() {
									return l.tabFocusable;
								},
								get setRef() {
									return l.setRef;
								},
							}),
						),
					b = (l) => {
						const y = (0, h.$odc)(),
							$ = () => {
								y.prettyDialogService.closeDialog();
							};
						let v;
						const S = () => {
							const T = l.dialogData,
								P = l.dialogResolve;
							T?.onCancel?.(), T?.cancelButton && P(T.cancelButton.id), $();
						};
						(0, r.createEffect)(() => {
							(0, r.onMount)(() => {
								setTimeout(() => {
									v && v.focus();
								});
							});
							const T = (k) => {
								k.key === "Escape" && S();
							};
							y.window.addEventListener("keydown", T);
							const P = () => {
								y.window.removeEventListener("keydown", T);
							};
							(0, r.onCleanup)(P);
						});
						const I = (T) => {
							v = T;
						};
						return (0, d.createComponent)(c.$fzc, {
							isOpen: !0,
							onClose: $,
							class: "pretty-dialog-modal",
							parentStyle: {
								"flex-direction": "column",
								"align-items": "center",
								"justify-content": "flex-start",
							},
							get children() {
								const T = p(),
									P = T.firstChild,
									k = P.firstChild,
									L = k.nextSibling,
									D = P.nextSibling;
								return (
									T.addEventListener("click", () => {
										v?.focus();
									}),
									(0, C.insert)(L, () => l.dialogData.title),
									(0, C.insert)(
										T,
										(0, d.createComponent)(r.Show, {
											get when() {
												return l.dialogData.message;
											},
											get children() {
												const M = g();
												return (
													(0, C.insert)(
														M,
														(0, d.createComponent)(r.Show, {
															get when() {
																return typeof l.dialogData.message == "string";
															},
															get fallback() {
																return (0, d.createComponent)(r.For, {
																	get each() {
																		return l.dialogData.message;
																	},
																	children: (N) =>
																		(() => {
																			const A = o();
																			return (
																				(0, C.insert)(A, () => N.message),
																				(0, w.effect)(() =>
																					(0, i.className)(
																						A,
																						N.isDeemphasized
																							? "deemphasized"
																							: "",
																					),
																				),
																				A
																			);
																		})(),
																});
															},
															get children() {
																return (0, d.createComponent)(r.For, {
																	get each() {
																		return l.dialogData.message.split(`
`);
																	},
																	children: (N) =>
																		(() => {
																			const A = o();
																			return (0, C.insert)(A, N), A;
																		})(),
																});
															},
														}),
													),
													M
												);
											},
										}),
										D,
									),
									D.addEventListener("click", (M) =>
										M.stopImmediatePropagation(),
									),
									(0, C.insert)(
										D,
										(0, d.createComponent)(r.Show, {
											get when() {
												return l.dialogData.cancelButton;
											},
											get children() {
												return (0, d.createComponent)(f, {
													type: "secondary",
													onClick: S,
													class: "pretty-dialog-button",
													get style() {
														return {
															"margin-left": l.dialogData
																.placeCancelButtonOnLeft
																? "auto"
																: "0px",
														};
													},
													tabFocusable: !0,
													get children() {
														return [
															(0, E.memo)(
																() => l.dialogData.cancelButton.label,
															),
															" (esc)",
														];
													},
												});
											},
										}),
										null,
									),
									(0, C.insert)(
										D,
										(0, d.createComponent)(r.For, {
											get each() {
												return l.dialogData.extraButtons;
											},
											children: (M) =>
												(0, d.createComponent)(f, {
													tabFocusable: !0,
													get type() {
														return M.type ?? "secondary";
													},
													onClick: () => l.dialogResolve(M.id),
													class: "pretty-dialog-button",
													get children() {
														return M.label;
													},
												}),
										}),
										null,
									),
									(0, C.insert)(
										D,
										(0, d.createComponent)(f, {
											type: "primary",
											onClick: () => {
												l.dialogData.onAccept?.(),
													l.dialogResolve(l.dialogData.primaryButton.id);
											},
											class:
												"pretty-dialog-button pretty-dialog-button-primary",
											setRef: I,
											tabFocusable: !0,
											get children() {
												return [
													(0, E.memo)(() => l.dialogData.primaryButton.label),
													" (\u23CE)",
												];
											},
										}),
										null,
									),
									(0, w.effect)(
										(M) => {
											const N = `pretty-dialog-icon ${a.ThemeIcon.asClassName(u.$ak.warning)}`,
												A =
													l.dialogData.dialogIconColor ??
													"var(--vscode-editorWarning-foreground)";
											return (
												N !== M._v$ && (0, i.className)(k, (M._v$ = N)),
												A !== M._v$2 &&
													((M._v$2 = A) != null
														? k.style.setProperty("color", A)
														: k.style.removeProperty("color")),
												M
											);
										},
										{ _v$: void 0, _v$2: void 0 },
									),
									T
								);
							},
						});
					};
				function s(l, y) {
					return (0, h.$ndc)(
						() => {
							const $ = (0, h.$odc)(),
								v = (0, r.createMemo)(
									() =>
										$.reactiveStorageService.nonPersistentStorage.dialogData,
								),
								S = (0, r.createMemo)(
									() =>
										$.reactiveStorageService.nonPersistentStorage.dialogResolve,
								);
							return (0, d.createComponent)(r.Show, {
								get when() {
									return (0, E.memo)(() => !!S())() && v();
								},
								children: (I) =>
									(0, d.createComponent)(b, {
										get dialogData() {
											return I();
										},
										get dialogResolve() {
											return S();
										},
									}),
							});
						},
						l,
						y,
					);
				}
			},
		)
