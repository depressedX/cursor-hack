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
import './useMarkdownHover.js';
import '../../controlCommon/browser/solid.js';
import '../../ui/browser/hooks/useThemeHooks.js';
import '../../utils/browser/copyToClipboard.js';
define(
			de[4127],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 14, 26, 694, 36, 331, 1008]),
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
 h /*useMarkdownHover*/,
 c /*solid*/,
 n /*useThemeHooks*/,
 g /*copyToClipboard*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Z$b = f);
				const p = (0, t.template)("<div><span>"),
					o = (0, t.template)(
						'<div class="markdown-section-toolbar-internal"><div><span>',
					);
				function f(b) {
					const s = (0, c.$odc)(),
						[l, y] = (0, r.createSignal)(!1),
						{ showHover: $, hideHover: v } = (0, h.$G$b)();
					let S;
					const I = (0, r.createMemo)(() => {
						const { composerExtras: T } = b.markdownProps,
							P = b.sectionIndex,
							k = b.rawText;
						return () => {
							if (!T) return;
							const { composerId: L, bubbleId: D } = T,
								{ composerService: M } = s;
							M.addContextToLastFocused({
								composerId: L,
								contextType: "quotes",
								value: { bubbleId: D, sectionIndex: P, markdown: k() },
							}),
								M.focus(L);
						};
					});
					return (() => {
						const T = o(),
							P = T.firstChild,
							k = P.firstChild,
							L = S;
						return (
							typeof L == "function" ? (0, m.use)(L, T) : (S = T),
							T.style.setProperty("display", "none"),
							(0, i.insert)(
								T,
								(0, w.createComponent)(r.Show, {
									get when() {
										return b.markdownProps.canQuoteMessages;
									},
									get children() {
										const D = p(),
											M = D.firstChild;
										return (
											(0, d.addEventListener)(D, "mouseleave", v),
											D.addEventListener("mouseenter", (N) => {
												$(N, "Reply");
											}),
											(0, d.addEventListener)(D, "click", I()),
											M.style.setProperty("font-size", "14px"),
											(0, C.effect)(
												(N) => {
													const A = (0, n.$e$b)(
															"markdown-section-toolbar-item",
															s.themeService,
														),
														R = a.ThemeIcon.asClassName(u.$ak.reply);
													return (
														A !== N._v$ && (0, E.className)(D, (N._v$ = A)),
														R !== N._v$2 && (0, E.className)(M, (N._v$2 = R)),
														N
													);
												},
												{ _v$: void 0, _v$2: void 0 },
											),
											D
										);
									},
								}),
								P,
							),
							(0, d.addEventListener)(P, "mouseleave", v),
							P.addEventListener("mouseenter", (D) => {
								$(D, "Copy");
							}),
							P.addEventListener("click", () => {
								s.tooltipService.registerEvent("chat.copy.markdownblock"),
									(0, g.$Y$b)(b.rawText()) &&
										(y(!0),
										setTimeout(() => {
											y(!1);
										}, 2e3));
							}),
							k.style.setProperty("font-size", "14px"),
							(0, C.effect)(
								(D) => {
									const M = l() ? "none" : "auto",
										N = (0, n.$e$b)(
											"markdown-section-toolbar-item markdown-section-toolbar-copy",
											s.themeService,
										),
										A = l()
											? a.ThemeIcon.asClassName(u.$ak.check)
											: a.ThemeIcon.asClassName(u.$ak.copy);
									return (
										M !== D._v$3 &&
											((D._v$3 = M) != null
												? P.style.setProperty("pointer-events", M)
												: P.style.removeProperty("pointer-events")),
										N !== D._v$4 && (0, E.className)(P, (D._v$4 = N)),
										A !== D._v$5 && (0, E.className)(k, (D._v$5 = A)),
										D
									);
								},
								{ _v$3: void 0, _v$4: void 0, _v$5: void 0 },
							),
							T
						);
					})();
				}
			},
		),
		