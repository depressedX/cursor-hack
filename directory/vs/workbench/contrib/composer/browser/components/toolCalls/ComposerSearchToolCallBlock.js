import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../base/browser/ui/hover/hoverWidget.js';
import './ComposerToolCallBlockContainer.js';
import '../../composerCapabilities.js';
import '../../../../ui/browser/collapsible/collapsible.js';
import '../../../../ui/browser/contextDisplay/listContextDisplay.js';
import '../../../../ui/browser/hooks/useVSHoverTooltip.js';
import '../../../../ui/browser/scrollableDiv.js';
import '../../../../ui/browser/hooks/useMeasureWidthHeight.js';
import '../../../../../../platform/tracing/common/tracing.js';
define(
			de[861],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 160, 792, 262, 696, 1070, 422, 135, 693,
				216,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerSearchToolCallBlock = y);
				const f = (0, t.template)("<div>"),
					b = (0, t.template)("<div><div>"),
					s = (0, t.template)("<div>Empty search results");
				function l() {
					var $ =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (T, P) {
										var k = Error();
										return (
											(k.name = "SuppressedError"),
											(k.error = T),
											(k.suppressed = P),
											k
										);
									},
						v = {},
						S = [];
					function I(T, P) {
						if (P != null) {
							if (Object(P) !== P)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (T)
								var k =
									P[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								k === void 0 &&
								((k = P[Symbol.dispose || Symbol.for("Symbol.dispose")]), T)
							)
								var L = k;
							if (typeof k != "function")
								throw new TypeError("Object is not disposable.");
							L &&
								(k = function () {
									try {
										L.call(P);
									} catch (D) {
										return Promise.reject(D);
									}
								}),
								S.push({ v: P, d: k, a: T });
						} else T && S.push({ d: P, a: T });
						return P;
					}
					return {
						e: v,
						u: I.bind(null, !1),
						a: I.bind(null, !0),
						d: function () {
							var T,
								P = this.e,
								k = 0;
							function L() {
								for (; (T = S.pop()); )
									try {
										if (!T.a && k === 1)
											return (k = 0), S.push(T), Promise.resolve().then(L);
										if (T.d) {
											var M = T.d.call(T.v);
											if (T.a) return (k |= 2), Promise.resolve(M).then(L, D);
										} else k |= 1;
									} catch (N) {
										return D(N);
									}
								if (k === 1)
									return P !== v ? Promise.reject(P) : Promise.resolve();
								if (P !== v) throw P;
							}
							function D(M) {
								return (P = P !== v ? new $(M, P) : M), L();
							}
							return L();
						},
					};
				}
				function y($) {
					try {
						var v = l();
						const S = v.u((0, o.span)("ComposerSearchToolCallBlock")),
							[I, T] = (0, a.createSignal)(!1),
							[P, k] = (0, a.createSignal)(void 0),
							[L, D] = (0, a.createSignal)(null),
							[M, N] = (0, a.createSignal)(null),
							{ showHover: A, hideHover: R } = (0, n.$z$b)(500);
						(0, m.createEffect)(() => {
							const F = L();
							F &&
								setTimeout(() => {
									k(F.clientHeight);
								});
						});
						const O = (0, p.$A$b)(M),
							B = () => O().width > 240,
							U = (F) =>
								(() => {
									const x = b(),
										H = x.firstChild;
									return (
										(0, d.addEventListener)(x, "mouseleave", R),
										x.addEventListener("mouseenter", z),
										x.style.setProperty("display", "flex"),
										x.style.setProperty("align-items", "center"),
										x.style.setProperty("width", "100%"),
										x.style.setProperty("min-width", "0"),
										x.style.setProperty("font-style", "italic"),
										(0, E.insert)(
											x,
											(0, w.createComponent)(m.Show, {
												get when() {
													return $.searchContext;
												},
												get children() {
													const q = f();
													return (
														q.style.setProperty("text-overflow", "ellipsis"),
														q.style.setProperty("overflow", "hidden"),
														q.style.setProperty("white-space", "nowrap"),
														q.style.setProperty(
															"color",
															"var(--vscode-descriptionForeground)",
														),
														(0, E.insert)(q, () =>
															$.searchContext ? `${$.searchContext}` : "",
														),
														q
													);
												},
											}),
											H,
										),
										H.style.setProperty("flex-shrink", "0"),
										H.style.setProperty("margin-left", "4px"),
										(0, E.insert)(
											H,
											(0, w.createComponent)(m.Show, {
												get when() {
													return $.searchContext;
												},
												children: "\u2022 ",
											}),
											null,
										),
										(0, E.insert)(
											H,
											() =>
												$.resultCountText?.($.results.length) ??
												`${$.results.length} ${$.results.length === 1 ? "result" : "results"}`,
											null,
										),
										x
									);
								})(),
							z = (F) => {
								A({
									content: $.searchContext || "",
									target: F.currentTarget,
									position: { hoverPosition: r.HoverPosition.ABOVE },
									appearance: { compact: !0 },
								});
							};
						return (0, w.createComponent)(u.ComposerToolCallBlockContainer, {
							get children() {
								return (0, w.createComponent)(h.$Zcc, {
									setContainerRef: N,
									get isOpen() {
										return I();
									},
									get title() {
										return (() => {
											const F = f();
											return (
												F.style.setProperty("display", "flex"),
												F.style.setProperty("align-items", "center"),
												F.style.setProperty("gap", "4px"),
												F.style.setProperty("flex-shrink", "0"),
												F.style.setProperty("white-space", "nowrap"),
												(0, E.insert)(
													F,
													(() => {
														const x = (0, C.memo)(() => !!$.statusText);
														return () =>
															x()
																? $.statusText($.isLoading)
																: $.isLoading
																	? "Searching codebase..."
																	: "Searched codebase";
													})(),
												),
												F
											);
										})();
									},
									get description() {
										return (0, C.memo)(() => !!(B() && !$.isLoading))()
											? U($.results.length)
											: void 0;
									},
									get isLoading() {
										return $.isLoading;
									},
									setIsOpen: T,
									get children() {
										const F = f();
										return (
											(0, E.insert)(
												F,
												(0, w.createComponent)(m.Show, {
													get when() {
														return $.results.length > 0;
													},
													get fallback() {
														return (() => {
															const x = s();
															return (
																x.style.setProperty("font-style", "italic"),
																x.style.setProperty(
																	"color",
																	"var(--vscode-input-placeholderForeground)",
																),
																x.style.setProperty("padding", "4px"),
																x
															);
														})();
													},
													get children() {
														return (0, w.createComponent)(g.$w0b, {
															style: { height: "100%", overflow: "hidden" },
															contentStyle: {
																display: "flex",
																"flex-direction": "column",
																"align-items": "center",
															},
															innerContainerStyle: { "min-height": "unset" },
															scrollingDirection: "vertical",
															get children() {
																return (0, w.createComponent)(c.$1cc, {
																	setContainerRef: D,
																	get files() {
																		return $.results.map((x) => ({
																			uri: x.uri,
																			onClick: () => $.onResultClick(x),
																			...$.formatResult(x),
																		}));
																	},
																	variant: "compact",
																	style: { "border-radius": "0px" },
																});
															},
														});
													},
												}),
											),
											(0, i.effect)(() =>
												($.results.length > 0
													? Math.min($.maxHeight ?? 200, P() ?? 0) + "px"
													: "auto") != null
													? F.style.setProperty(
															"height",
															$.results.length > 0
																? Math.min($.maxHeight ?? 200, P() ?? 0) + "px"
																: "auto",
														)
													: F.style.removeProperty("height"),
											),
											F
										);
									},
								});
							},
						});
					} catch (S) {
						v.e = S;
					} finally {
						v.d();
					}
				}
			},
		),
		