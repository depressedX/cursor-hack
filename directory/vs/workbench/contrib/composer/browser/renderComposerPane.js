import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../controlCommon/browser/solid.js';
import './composerData.js';
import './components/ComposerPane.js';
import '../../../../../external/solid/solid.js';
import '../../ui/browser/loadingSpinner/loadingSpinner.js';
import './hooks/useComposerLocation.js';
import './hooks/useForceModeComposerHandle.js';
import '../../../../platform/tracing/common/tracing.js';
define(
			de[1075],
			he([1, 0, 2, 2, 2, 36, 225, 4413, 13, 295, 1969, 4153, 216]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.renderComposerPane = void 0);
				const c = (0, t.template)("<div>Loading ");
				function n() {
					var p =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (s, l) {
										var y = Error();
										return (
											(y.name = "SuppressedError"),
											(y.error = s),
											(y.suppressed = l),
											y
										);
									},
						o = {},
						f = [];
					function b(s, l) {
						if (l != null) {
							if (Object(l) !== l)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (s)
								var y =
									l[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								y === void 0 &&
								((y = l[Symbol.dispose || Symbol.for("Symbol.dispose")]), s)
							)
								var $ = y;
							if (typeof y != "function")
								throw new TypeError("Object is not disposable.");
							$ &&
								(y = function () {
									try {
										$.call(l);
									} catch (v) {
										return Promise.reject(v);
									}
								}),
								f.push({ v: l, d: y, a: s });
						} else s && f.push({ d: l, a: s });
						return l;
					}
					return {
						e: o,
						u: b.bind(null, !1),
						a: b.bind(null, !0),
						d: function () {
							var s,
								l = this.e,
								y = 0;
							function $() {
								for (; (s = f.pop()); )
									try {
										if (!s.a && y === 1)
											return (y = 0), f.push(s), Promise.resolve().then($);
										if (s.d) {
											var S = s.d.call(s.v);
											if (s.a) return (y |= 2), Promise.resolve(S).then($, v);
										} else y |= 1;
									} catch (I) {
										return v(I);
									}
								if (y === 1)
									return l !== o ? Promise.reject(l) : Promise.resolve();
								if (l !== o) throw l;
							}
							function v(S) {
								return (l = l !== o ? new p(S, l) : S), $();
							}
							return $();
						},
					};
				}
				const g = (p, o, f, b) =>
					(0, E.$ndc)(
						() => {
							try {
								var s = n();
								const l = s.u((0, h.span)("renderComposerPane")),
									y = (0, a.useForceModeComposerHandle)(b);
								return (0, w.createComponent)(C.AllComposersContext.Provider, {
									value: { forcedMode: b },
									get children() {
										return (0, w.createComponent)(m.Show, {
											get when() {
												return y();
											},
											get fallback() {
												return (() => {
													const $ = c(),
														v = $.firstChild;
													return (
														$.style.setProperty("display", "flex"),
														$.style.setProperty("align-items", "center"),
														$.style.setProperty("justify-content", "center"),
														$.style.setProperty("gap", "4px"),
														$.style.setProperty("opacity", "0.5"),
														$.style.setProperty("height", "100%"),
														$.style.setProperty("width", "100%"),
														(0, i.insert)(
															$,
															b === "chat" ? "Chat" : "Composer",
															null,
														),
														(0, i.insert)(
															$,
															(0, w.createComponent)(r.$Z8b, {}),
															null,
														),
														$
													);
												})();
											},
											children: ($) => {
												const v = (0, u.useComposerLocation)($),
													S = (0, m.createMemo)(() =>
														v() !== f ? "history" : "composer",
													);
												return (0, w.createComponent)(d.ComposerPane, {
													location: f,
													get composerDataHandle() {
														return $();
													},
													get renderAs() {
														return S();
													},
												});
											},
										});
									},
								});
							} catch (l) {
								s.e = l;
							} finally {
								s.d();
							}
						},
						p,
						o,
					);
				e.renderComposerPane = g;
			},
		),
		