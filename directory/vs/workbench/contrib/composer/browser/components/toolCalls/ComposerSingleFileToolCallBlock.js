import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../base/common/path.js';
import '../../../../../../platform/tracing/common/tracing.js';
import '../ComposerToolbarSimpleButton.js';
import './ComposerToolCallBlockContainer.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../../ui/browser/hooks/useVSHoverTooltip.js';
import '../../../../ui/browser/loadingSpinner/loadingSpinner.js';
import '../../../../ui/browser/hooks/useIsUsingFileIconTheme.js';
import '../../../../../../css!vs/workbench/contrib/composer/browser/components/toolCalls/ComposerSingleFileToolCallBlock.js';
define(
			de[1380],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 54, 216, 485, 792, 36, 156, 422, 295, 428,
				2421,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerSingleFileToolCallBlock = $);
				const f = (0, t.template)("<span>"),
					b = (0, t.template)("<span>:<!>-"),
					s = (0, t.template)("<div>"),
					l = (0, t.template)(
						'<div><div class="composer-single-file-block"><span></span><div><span>',
					);
				function y() {
					var v =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (P, k) {
										var L = Error();
										return (
											(L.name = "SuppressedError"),
											(L.error = P),
											(L.suppressed = k),
											L
										);
									},
						S = {},
						I = [];
					function T(P, k) {
						if (k != null) {
							if (Object(k) !== k)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (P)
								var L =
									k[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								L === void 0 &&
								((L = k[Symbol.dispose || Symbol.for("Symbol.dispose")]), P)
							)
								var D = L;
							if (typeof L != "function")
								throw new TypeError("Object is not disposable.");
							D &&
								(L = function () {
									try {
										D.call(k);
									} catch (M) {
										return Promise.reject(M);
									}
								}),
								I.push({ v: k, d: L, a: P });
						} else P && I.push({ d: k, a: P });
						return k;
					}
					return {
						e: S,
						u: T.bind(null, !1),
						a: T.bind(null, !0),
						d: function () {
							var P,
								k = this.e,
								L = 0;
							function D() {
								for (; (P = I.pop()); )
									try {
										if (!P.a && L === 1)
											return (L = 0), I.push(P), Promise.resolve().then(D);
										if (P.d) {
											var N = P.d.call(P.v);
											if (P.a) return (L |= 2), Promise.resolve(N).then(D, M);
										} else L |= 1;
									} catch (A) {
										return M(A);
									}
								if (L === 1)
									return k !== S ? Promise.reject(k) : Promise.resolve();
								if (k !== S) throw k;
							}
							function M(N) {
								return (k = k !== S ? new v(N, k) : N), D();
							}
							return D();
						},
					};
				}
				function $(v) {
					try {
						var S = y();
						const I = S.u((0, u.span)("ComposerSingleFileToolCallBlock")),
							T = (0, c.$odc)(),
							{ showHover: P, hideHover: k } = (0, g.$z$b)(500),
							L = (M) => {
								const N = (0, r.$sc)(v.relativeWorkspacePath ?? "");
								P({
									content:
										v.startLine !== void 0 || v.endLine !== void 0
											? `${N}:${v.startLine}-${v.endLine}`
											: N,
									target: M.currentTarget,
									appearance: { compact: !0 },
								});
							},
							D = (0, o.$b$b)();
						return (0, d.createComponent)(h.ComposerToolCallBlockContainer, {
							get style() {
								return {
									"padding-bottom":
										v.decision && v.decision() === void 0 ? "8px" : void 0,
								};
							},
							get children() {
								const M = l(),
									N = M.firstChild,
									A = N.firstChild,
									R = A.nextSibling,
									O = R.firstChild;
								return (
									M.style.setProperty("display", "flex"),
									M.style.setProperty("flex-direction", "column"),
									M.style.setProperty("width", "100%"),
									M.style.setProperty("gap", "4px"),
									N.addEventListener(
										"click",
										() => !v.unclickable && v.onClick?.(),
									),
									N.style.setProperty("display", "flex"),
									N.style.setProperty("align-items", "center"),
									N.style.setProperty("gap", "6px"),
									N.style.setProperty("width", "100%"),
									(0, E.insert)(
										N,
										(0, d.createComponent)(m.Show, {
											get when() {
												return v.isLoading;
											},
											get children() {
												return (0, d.createComponent)(p.$Z8b, {
													small: !0,
													extras: { style: { "margin-right": "2px" } },
												});
											},
										}),
										A,
									),
									A.style.setProperty("font-size", "12px"),
									A.style.setProperty(
										"color",
										"var(--vscode-descriptionForeground)",
									),
									A.style.setProperty("white-space", "nowrap"),
									(0, E.insert)(A, () =>
										v.isLoading ? v.loadingText : v.actionText,
									),
									(0, E.insert)(
										N,
										(0, d.createComponent)(m.Show, {
											get when() {
												return D();
											},
											get children() {
												const B = f();
												return (
													B.style.setProperty("margin-right", "-4px"),
													B.style.setProperty("display", "flex"),
													B.style.setProperty("scale", "0.8"),
													B.style.setProperty("width", "15px"),
													B.style.setProperty("align-items", "center"),
													B.style.setProperty("justify-content", "center"),
													(0, E.insert)(
														B,
														(0, d.createComponent)(n.$k$b, {
															get fileName() {
																return (0, r.$sc)(
																	v.relativeWorkspacePath ?? "",
																);
															},
															get workspaceContextService() {
																return T.workspaceContextService;
															},
															get modelService() {
																return T.modelService;
															},
															get languageService() {
																return T.languageService;
															},
															height: 16,
														}),
													),
													B
												);
											},
										}),
										R,
									),
									(0, w.addEventListener)(R, "mouseleave", k),
									R.addEventListener("mouseenter", L),
									R.style.setProperty("display", "flex"),
									R.style.setProperty("overflow", "hidden"),
									O.style.setProperty("font-size", "12px"),
									O.style.setProperty("white-space", "nowrap"),
									O.style.setProperty("flex-shrink", "0"),
									O.style.setProperty(
										"color",
										"var(--vscode-input-foreground)",
									),
									(0, E.insert)(O, () =>
										(0, r.$sc)(v.relativeWorkspacePath ?? ""),
									),
									(0, E.insert)(
										R,
										(0, d.createComponent)(m.Show, {
											get when() {
												return v.startLine !== void 0 || v.endLine !== void 0;
											},
											get children() {
												const B = b(),
													U = B.firstChild,
													z = U.nextSibling,
													F = z.nextSibling;
												return (
													B.style.setProperty("font-size", "12px"),
													B.style.setProperty(
														"color",
														"var(--vscode-descriptionForeground)",
													),
													(0, E.insert)(B, () => v.startLine, z),
													(0, E.insert)(B, () => v.endLine, null),
													B
												);
											},
										}),
										null,
									),
									(0, E.insert)(
										M,
										(0, d.createComponent)(m.Show, {
											get when() {
												return (
													(0, C.memo)(
														() => !!(v.onAccept && v.onReject && v.decision),
													)() && v.decision() === void 0
												);
											},
											get children() {
												const B = s();
												return (
													B.style.setProperty("display", "flex"),
													B.style.setProperty("gap", "8px"),
													B.style.setProperty("margin-left", "auto"),
													B.style.setProperty("align-items", "center"),
													B.style.setProperty("justify-content", "flex-end"),
													(0, E.insert)(
														B,
														(0, d.createComponent)(
															a.ComposerToolbarSimpleButton,
															{
																onClick: () => v.onReject?.(),
																type: "secondary",
																children: "Reject",
															},
														),
														null,
													),
													(0, E.insert)(
														B,
														(0, d.createComponent)(
															a.ComposerToolbarSimpleButton,
															{
																onClick: () => v.onAccept?.(),
																children: "Accept",
															},
														),
														null,
													),
													B
												);
											},
										}),
										null,
									),
									(0, i.effect)(
										(B) => {
											const U = v.unclickable ? "default" : "pointer",
												z = v.unclickable ? 0.7 : void 0;
											return (
												U !== B._v$ &&
													((B._v$ = U) != null
														? N.style.setProperty("cursor", U)
														: N.style.removeProperty("cursor")),
												z !== B._v$2 &&
													((B._v$2 = z) != null
														? N.style.setProperty("opacity", z)
														: N.style.removeProperty("opacity")),
												B
											);
										},
										{ _v$: void 0, _v$2: void 0 },
									),
									M
								);
							},
						});
					} catch (I) {
						S.e = I;
					} finally {
						S.d();
					}
				}
			},
		),
		