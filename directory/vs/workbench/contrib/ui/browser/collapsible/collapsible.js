import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../loadingSpinner/loadingSpinner.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/collapsible/collapsible.js';
define(
			de[696],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 295, 2514]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*solid*/,
 r /*codicons*/,
 u /*themables*/,
 a /*loadingSpinner*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Zcc = n);
				const h = (0, t.template)("<div>"),
					c = (0, t.template)("<div><div><div><div>");
				function n(g) {
					return (() => {
						const p = c(),
							o = p.firstChild,
							f = o.firstChild,
							b = f.firstChild,
							s = g.setContainerRef;
						return (
							typeof s == "function"
								? (0, d.use)(s, p)
								: (g.setContainerRef = p),
							p.style.setProperty("display", "flex"),
							p.style.setProperty("flex-direction", "column"),
							p.style.setProperty("gap", "2px"),
							o.addEventListener("click", () => g.setIsOpen(!g.isOpen)),
							o.style.setProperty("display", "flex"),
							o.style.setProperty("align-items", "center"),
							o.style.setProperty("gap", "6px"),
							o.style.setProperty("cursor", "pointer"),
							o.style.setProperty("width", "100%"),
							o.style.setProperty("box-sizing", "border-box"),
							o.style.setProperty("overflow", "hidden"),
							(0, i.insert)(
								o,
								(0, w.createComponent)(m.Show, {
									get when() {
										return !g.isLoading;
									},
									get fallback() {
										return (0, w.createComponent)(a.$Z8b, { small: !0 });
									},
									get children() {
										const l = h();
										return (
											l.style.setProperty(
												"color",
												"var(--vscode-editor-foreground)",
											),
											l.style.setProperty("width", "9px"),
											l.style.setProperty("height", "9px"),
											l.style.setProperty("font-size", "12px !important"),
											l.style.setProperty("display", "flex"),
											l.style.setProperty("justify-content", "center"),
											l.style.setProperty("align-items", "center"),
											l.style.setProperty("transition", "transform 0.1s"),
											(0, C.effect)(
												(y) => {
													const $ = u.ThemeIcon.asClassName(r.$ak.chevronRight),
														v = g.isOpen ? "rotate(90deg)" : void 0;
													return (
														$ !== y._v$ && (0, E.className)(l, (y._v$ = $)),
														v !== y._v$2 &&
															((y._v$2 = v) != null
																? l.style.setProperty("transform", v)
																: l.style.removeProperty("transform")),
														y
													);
												},
												{ _v$: void 0, _v$2: void 0 },
											),
											l
										);
									},
								}),
								f,
							),
							f.style.setProperty("display", "flex"),
							f.style.setProperty("align-items", "center"),
							f.style.setProperty("gap", "4px"),
							f.style.setProperty("overflow", "hidden"),
							b.style.setProperty("color", "var(--vscode-editor-foreground)"),
							b.style.setProperty("font-size", "12px"),
							(0, i.insert)(b, () => g.title),
							(0, i.insert)(
								f,
								(0, w.createComponent)(m.Show, {
									get when() {
										return g.description;
									},
									get children() {
										const l = h();
										return (
											l.style.setProperty(
												"color",
												"var(--vscode-descriptionForeground)",
											),
											l.style.setProperty("font-size", "11px"),
											l.style.setProperty("flex", "1"),
											l.style.setProperty("min-width", "0"),
											l.style.setProperty("overflow", "hidden"),
											(0, i.insert)(l, () => g.description),
											l
										);
									},
								}),
								null,
							),
							(0, i.insert)(
								p,
								(0, w.createComponent)(m.Show, {
									get when() {
										return g.isOpen;
									},
									get children() {
										const l = h();
										return (
											l.style.setProperty("padding-left", "10px"),
											l.style.setProperty("margin-left", "4px"),
											l.style.setProperty(
												"border-left",
												"1px solid var(--vscode-commandCenter-activeBorder)",
											),
											(0, i.insert)(l, () => g.children),
											l
										);
									},
								}),
								null,
							),
							(0, C.effect)(() =>
								(0, E.className)(
									o,
									`collapsible-header ${g.headerClass ?? ""}`,
								),
							),
							p
						);
					})();
				}
			},
		)
