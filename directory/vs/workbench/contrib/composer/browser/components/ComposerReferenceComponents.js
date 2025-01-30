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
import '../../../../../base/common/path.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/codicons.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../platform/tracing/common/tracing.js';
import '../../../ui/browser/hooks/useIsUsingFileIconTheme.js';
define(
			de[1975],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 54, 26, 14, 156, 36, 216, 428]),
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
 u /*path*/,
 a /*themables*/,
 h /*codicons*/,
 c /*pureIcon*/,
 n /*solid*/,
 g /*tracing*/,
 p /*useIsUsingFileIconTheme*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerDocsReferenceComponent =
						e.ComposerCodeReferenceComponent =
						e.ComposerWebReferenceComponent =
							void 0);
				const o = (0, t.template)("<div><div></div><div>"),
					f = (0, t.template)("<span>"),
					b = (0, t.template)("<div><div>");
				function s() {
					var S =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (k, L) {
										var D = Error();
										return (
											(D.name = "SuppressedError"),
											(D.error = k),
											(D.suppressed = L),
											D
										);
									},
						I = {},
						T = [];
					function P(k, L) {
						if (L != null) {
							if (Object(L) !== L)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (k)
								var D =
									L[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								D === void 0 &&
								((D = L[Symbol.dispose || Symbol.for("Symbol.dispose")]), k)
							)
								var M = D;
							if (typeof D != "function")
								throw new TypeError("Object is not disposable.");
							M &&
								(D = function () {
									try {
										M.call(L);
									} catch (N) {
										return Promise.reject(N);
									}
								}),
								T.push({ v: L, d: D, a: k });
						} else k && T.push({ d: L, a: k });
						return L;
					}
					return {
						e: I,
						u: P.bind(null, !1),
						a: P.bind(null, !0),
						d: function () {
							var k,
								L = this.e,
								D = 0;
							function M() {
								for (; (k = T.pop()); )
									try {
										if (!k.a && D === 1)
											return (D = 0), T.push(k), Promise.resolve().then(M);
										if (k.d) {
											var A = k.d.call(k.v);
											if (k.a) return (D |= 2), Promise.resolve(A).then(M, N);
										} else D |= 1;
									} catch (R) {
										return N(R);
									}
								if (D === 1)
									return L !== I ? Promise.reject(L) : Promise.resolve();
								if (L !== I) throw L;
							}
							function N(A) {
								return (L = L !== I ? new S(A, L) : A), M();
							}
							return M();
						},
					};
				}
				const l = {
						"background-color": "var(--vscode-editor-background)",
						"flex-shrink": 0,
						"font-size": "12px",
						display: "flex",
						"align-items": "center",
						"justify-content": "center",
						gap: "2px",
						"border-radius": "4px",
						"user-select": "none",
						cursor: "pointer",
					},
					y = (S) => {
						try {
							var I = s();
							const T = I.u((0, g.span)("ComposerWebReferenceComponent")),
								P = (0, n.$odc)();
							return (() => {
								const k = o(),
									L = k.firstChild,
									D = L.nextSibling;
								return (
									k.addEventListener("click", () => {
										P.openerService.open(S.url);
									}),
									L.style.setProperty("font-size", "10px"),
									D.style.setProperty(
										"color",
										"var(--vscode-input-placeholderForeground)",
									),
									(0, d.insert)(
										D,
										(() => {
											const M = (0, m.memo)(() => S.title.length > 30);
											return () =>
												M() ? S.title.substring(0, 30) + "..." : S.title;
										})(),
									),
									(0, C.effect)(
										(M) => {
											const N = { ...l, padding: "0px 4px", gap: "4px" },
												A = a.ThemeIcon.asClassName(h.$ak.globe);
											return (
												(M._v$ = (0, E.style)(k, N, M._v$)),
												A !== M._v$2 && (0, w.className)(L, (M._v$2 = A)),
												M
											);
										},
										{ _v$: void 0, _v$2: void 0 },
									),
									k
								);
							})();
						} catch (T) {
							I.e = T;
						} finally {
							I.d();
						}
					};
				e.ComposerWebReferenceComponent = y;
				const $ = (S) => {
					const I = (0, n.$odc)(),
						T = (0, r.createMemo)(() => (0, u.$sc)(S.relativePath)),
						P = (0, p.$b$b)();
					return (() => {
						const k = b(),
							L = k.firstChild;
						return (
							k.addEventListener("click", () => {
								I.openerService.open(
									I.workspaceContextService.resolveRelativePath(S.relativePath),
								);
							}),
							(0, d.insert)(
								k,
								(0, i.createComponent)(r.Show, {
									get when() {
										return P();
									},
									get children() {
										const D = f();
										return (
											D.style.setProperty("margin-right", "-4px"),
											D.style.setProperty("scale", "0.8"),
											D.style.setProperty("height", "14px"),
											D.style.setProperty("display", "flex"),
											D.style.setProperty("align-items", "center"),
											(0, d.insert)(
												D,
												(0, i.createComponent)(c.$k$b, {
													get fileName() {
														return T();
													},
													get workspaceContextService() {
														return I.workspaceContextService;
													},
													get modelService() {
														return I.modelService;
													},
													get languageService() {
														return I.languageService;
													},
												}),
											),
											D
										);
									},
								}),
								L,
							),
							L.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							(0, d.insert)(
								L,
								(() => {
									const D = (0, m.memo)(() => T().length > 30);
									return () => (D() ? T().substring(0, 30) + "..." : T());
								})(),
							),
							(0, C.effect)((D) =>
								(0, E.style)(
									k,
									{
										...l,
										padding: "1px 2px",
										"padding-right": "4px",
										border:
											"1px solid var(--vscode-list-inactiveSelectionBackground)",
									},
									D,
								),
							),
							k
						);
					})();
				};
				e.ComposerCodeReferenceComponent = $;
				const v = (S) => {
					const I = (0, n.$odc)();
					return (() => {
						const T = o(),
							P = T.firstChild,
							k = P.nextSibling;
						return (
							T.addEventListener("click", () => {
								S.url && I.openerService.open(S.url), S.onClick?.();
							}),
							T.style.setProperty(
								"background-color",
								"var(--vscode-editor-background)",
							),
							T.style.setProperty("padding", "0px 6px"),
							T.style.setProperty("gap", "4px"),
							T.style.setProperty("font-size", "12px"),
							T.style.setProperty("display", "inline-flex"),
							T.style.setProperty("align-items", "center"),
							T.style.setProperty("justify-content", "center"),
							T.style.setProperty("border-radius", "4px"),
							T.style.setProperty("user-select", "none"),
							T.style.setProperty("cursor", "pointer"),
							P.style.setProperty("font-size", "10px"),
							k.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							(0, d.insert)(
								k,
								(() => {
									const L = (0, m.memo)(() => S.title.length > 30);
									return () =>
										L() ? S.title.substring(0, 30) + "..." : S.title;
								})(),
							),
							(0, C.effect)(() =>
								(0, w.className)(
									P,
									S.iconReplace ?? a.ThemeIcon.asClassName(h.$ak.notebook),
								),
							),
							T
						);
					})();
				};
				e.ComposerDocsReferenceComponent = v;
			},
		),
		