import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import './ComposerToolCallBlockContainer.js';
import '../../../../ui/browser/loadingSpinner/loadingSpinner.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../../../base/common/constants.js';
import '../../../../aiConfig/browser/aiConfigHelper.js';
import '../../../../../../css!vs/workbench/contrib/composer/browser/components/toolCalls/ComposerLintingToolCallBlock.js';
define(
			de[4149],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 792, 295, 36, 58, 270, 2419]),
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
 u /*ComposerToolCallBlockContainer*/,
 a /*loadingSpinner*/,
 h /*solid*/,
 c /*constants*/,
 n /*aiConfigHelper*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerLintingToolCallBlock = void 0);
				const g = (0, t.template)('<div class="tool-call-block-content">'),
					p = (0, t.template)(
						'<div class="tool-call-status"><span>Reading lints...',
					),
					o = (0, t.template)(
						'<div class="tool-call-status"><span class="codicon codicon-check"></span><span>No linter errors',
					),
					f = (0, t.template)('<div class="tool-call-status">Found lints:'),
					b = (0, t.template)('<div class="lint-error"><span>And <!> more'),
					s = (0, t.template)('<div class="lint-error-disable-auto-fix">'),
					l = (0, t.template)('<div class="lint-errors">'),
					y = (0, t.template)(
						'<div class="lint-error"><span class="codicon codicon-warning"></span><span>',
					),
					$ = 3,
					v = (S) => {
						const I = (0, h.$odc)(),
							[T, P] = (0, r.createSignal)(!1),
							[k, L] = (0, n.$K0b)(c.$JW, I.configurationService, !0),
							D = () => {
								P(!T());
							},
							M = (A) => {
								A.stopPropagation(), L(!1);
							},
							N = (A) => {
								A.stopPropagation(), L(!0);
							};
						return (0, d.createComponent)(u.ComposerToolCallBlockContainer, {
							get children() {
								const A = g();
								return (
									A.addEventListener("click", D),
									(0, C.insert)(
										A,
										(0, d.createComponent)(r.Show, {
											get when() {
												return S.lintingStatus === "linted";
											},
											get fallback() {
												return (() => {
													const R = p(),
														O = R.firstChild;
													return (
														(0, C.insert)(
															R,
															(0, d.createComponent)(a.$Z8b, {
																small: !0,
																extras: { style: { "margin-right": "6px" } },
															}),
															O,
														),
														O.style.setProperty(
															"color",
															"var(--vscode-descriptionForeground)",
														),
														R
													);
												})();
											},
											get children() {
												return (0, d.createComponent)(r.Show, {
													get when() {
														return S.linterErrors && S.linterErrors.length > 0
															? S.linterErrors
															: !1;
													},
													get fallback() {
														return (() => {
															const R = o(),
																O = R.firstChild;
															return (
																O.style.setProperty(
																	"color",
																	"var(--vscode-testing-iconPassed)",
																),
																O.style.setProperty("margin-right", "6px"),
																R
															);
														})();
													},
													children: (R) => [
														f(),
														(() => {
															const O = l();
															return (
																(0, C.insert)(
																	O,
																	(0, d.createComponent)(r.For, {
																		get each() {
																			return (0, m.memo)(() => !!T())()
																				? R()
																				: R().slice(0, $);
																		},
																		children: (B) =>
																			(() => {
																				const U = y(),
																					z = U.firstChild,
																					F = z.nextSibling;
																				return (
																					z.style.setProperty(
																						"color",
																						"var(--vscode-editorWarning-foreground)",
																					),
																					z.style.setProperty(
																						"margin-right",
																						"6px",
																					),
																					(0, C.insert)(F, () => B.message),
																					(0, w.effect)(() =>
																						(0, i.className)(
																							F,
																							`lint-message ${T() ? "multiline" : "ellipsized"}`,
																						),
																					),
																					U
																				);
																			})(),
																	}),
																	null,
																),
																(0, C.insert)(
																	O,
																	(0, d.createComponent)(r.Show, {
																		get when() {
																			return (
																				(0, m.memo)(() => !T())() &&
																				R().length > $
																			);
																		},
																		get children() {
																			const B = b(),
																				U = B.firstChild,
																				z = U.firstChild,
																				F = z.nextSibling,
																				x = F.nextSibling;
																			return (
																				U.style.setProperty(
																					"color",
																					"var(--vscode-descriptionForeground)",
																				),
																				(0, C.insert)(
																					U,
																					() => R().length - $,
																					F,
																				),
																				B
																			);
																		},
																	}),
																	null,
																),
																(0, C.insert)(
																	O,
																	(0, d.createComponent)(r.Show, {
																		get when() {
																			return T();
																		},
																		get children() {
																			const B = s();
																			return (
																				(0, E.addEventListener)(
																					B,
																					"click",
																					k() ? M : N,
																				),
																				(0, C.insert)(B, () =>
																					k()
																						? "Click to disable auto-fixing of lints"
																						: "Auto lint fixing is disabled, click to re-enable",
																				),
																				B
																			);
																		},
																	}),
																	null,
																),
																O
															);
														})(),
													],
												});
											},
										}),
									),
									A
								);
							},
						});
					};
				e.ComposerLintingToolCallBlock = v;
			},
		),
		