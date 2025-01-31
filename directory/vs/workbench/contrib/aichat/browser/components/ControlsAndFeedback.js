import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../ui/browser/simpleButton/simpleButton.js';
import '../../../../../base/common/codicons.js';
import '../../../utils/browser/copyToClipboard.js';
import '../../../controlCommon/browser/solid.js';
import '../../../aiMarkdown/browser/useMarkdownHover.js';
define(
			de[4231],
			he([1, 0, 2, 2, 2, 2, 13, 147, 14, 1008, 36, 694]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*solid*/,
 d /*simpleButton*/,
 m /*codicons*/,
 r /*copyToClipboard*/,
 u /*solid*/,
 a /*useMarkdownHover*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$3ac = n);
				const h = (0, t.template)("<div>"),
					c = (0, t.template)("<div><div><div>");
				function n(g) {
					const p = (0, u.$odc)(),
						{ showHover: o, hideHover: f } = (0, a.$G$b)(),
						[b, s] = (0, C.createSignal)(null),
						[l, y] = (0, C.createSignal)(!1),
						[$, v] = (0, C.createSignal)(!1),
						S = (P) => {
							b() === P
								? (s(null), g.onSubmitFeedback(null))
								: (s(P),
									g.onSubmitFeedback(P),
									y(!0),
									setTimeout(() => y(!1), 4e3));
						},
						I = () => {
							(0, r.$Y$b)(g.copyText) && (v(!0), setTimeout(() => v(!1), 2e3));
						},
						T = (() => {
							const P = h();
							return (
								P.style.setProperty("display", "flex"),
								P.style.setProperty("flex-direction", "row"),
								P.style.setProperty("width", "fit-content"),
								P.style.setProperty("gap", "2px"),
								(0, w.insert)(
									P,
									(0, E.createComponent)(d.$rdc, {
										style: {
											padding: "4px 4px",
											display: "flex",
											"justify-content": "center",
											"align-items": "center",
										},
										codiconStyle: { "font-size": "14px" },
										type: "secondary",
										onClick: () => S(!0),
										get codicon() {
											return b() === !0 ? m.$ak.thumbsUpFilled : m.$ak.thumbsup;
										},
									}),
									null,
								),
								(0, w.insert)(
									P,
									(0, E.createComponent)(d.$rdc, {
										style: {
											padding: "4px 4px",
											display: "flex",
											"justify-content": "center",
											"align-items": "center",
										},
										codiconStyle: { "font-size": "14px" },
										type: "secondary",
										onClick: () => S(!1),
										get codicon() {
											return b() === !1
												? m.$ak.thumbsDownFilled
												: m.$ak.thumbsdown;
										},
									}),
									null,
								),
								P
							);
						})();
					return (() => {
						const P = c(),
							k = P.firstChild,
							L = k.firstChild;
						return (
							P.style.setProperty("display", "flex"),
							P.style.setProperty("flex-direction", "row"),
							P.style.setProperty("justify-content", "flex-end"),
							P.style.setProperty("overflow", "visible"),
							P.style.setProperty("align-self", "flex-end"),
							P.style.setProperty("flex-shrink", "0"),
							k.style.setProperty("display", "flex"),
							k.style.setProperty("flex-direction", "row"),
							k.style.setProperty("width", "fit-content"),
							k.style.setProperty("height", "fit-content"),
							k.style.setProperty("gap", "2px"),
							k.style.setProperty("opacity", "0.4"),
							(0, w.insert)(
								k,
								(0, E.createComponent)(C.Show, {
									get when() {
										return (
											g.shouldShowOpenInComposer &&
											p.reactiveStorageService.applicationUserPersistentStorage
												.composerState.isComposerEnabled2
										);
									},
									get children() {
										const D = h();
										return (
											(0, i.addEventListener)(D, "mouseleave", f),
											D.addEventListener("mouseenter", (M) => {
												o(M, "Open in Composer");
											}),
											D.style.setProperty("opacity", "1"),
											(0, w.insert)(
												D,
												(0, E.createComponent)(d.$rdc, {
													style: {
														padding: "4px 4px",
														display: "flex",
														"justify-content": "center",
														"align-items": "center",
													},
													codiconStyle: {
														"font-size": "14px",
														color: "var(--vscode-editor-foreground)",
													},
													type: "secondary",
													get codicon() {
														return m.$ak.symbolMethod;
													},
													onClick: (M) => {
														M?.stopImmediatePropagation(), g.onOpenInComposer();
													},
												}),
											),
											D
										);
									},
								}),
								L,
							),
							(0, i.addEventListener)(L, "mouseleave", f),
							L.addEventListener("mouseenter", (D) => {
								o(D, "Copy Message");
							}),
							L.style.setProperty("opacity", "1"),
							(0, w.insert)(
								L,
								(0, E.createComponent)(d.$rdc, {
									style: {
										padding: "4px 4px",
										display: "flex",
										"justify-content": "center",
										"align-items": "center",
									},
									codiconStyle: { "font-size": "14px" },
									type: "secondary",
									onClick: I,
									get disabled() {
										return $();
									},
									get codicon() {
										return $() ? m.$ak.check : m.$ak.copy;
									},
								}),
							),
							P
						);
					})();
				}
			},
		)
