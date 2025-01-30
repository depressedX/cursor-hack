import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../ui/browser/loadingSpinner/loadingSpinner.js';
define(
			de[1272],
			he([1, 0, 2, 2, 2, 2, 2, 13, 14, 26, 295]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*solid*/,
 m /*codicons*/,
 r /*themables*/,
 u /*loadingSpinner*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$$Yc = n);
				const a = (0, t.template)('<div class="ai-preview-section-loading">'),
					h = (0, t.template)('<div class="ai-preview-section-content">'),
					c = (0, t.template)(
						'<div class="fade-in"><div class="ai-preview-section-title ai-preview-clickable"><div></div><h2></h2><div>',
					);
				function n(g) {
					return (() => {
						const p = c(),
							o = p.firstChild,
							f = o.firstChild,
							b = f.nextSibling,
							s = b.nextSibling;
						return (
							p.style.setProperty("padding", "2px 4px"),
							p.style.setProperty("display", "flex"),
							p.style.setProperty("flex-direction", "column"),
							p.style.setProperty("gap", "2px"),
							p.style.setProperty("border-radius", "4px"),
							p.style.setProperty("border", "1px solid transparent"),
							o.addEventListener("click", (l) => {
								l.stopPropagation(), l.preventDefault(), g.setIsOpen(!g.isOpen);
							}),
							o.style.setProperty("display", "flex"),
							o.style.setProperty("align-items", "center"),
							o.style.setProperty("gap", "4px"),
							o.style.setProperty("cursor", "pointer"),
							f.style.setProperty("font-size", "12px"),
							f.style.setProperty("color", "rgb(147, 146, 147)"),
							b.style.setProperty("font-size", "0.7rem"),
							b.style.setProperty("font-weight", "500"),
							b.style.setProperty("margin", "0px"),
							b.style.setProperty("color", "rgb(147, 146, 147)"),
							b.style.setProperty("flex", "1"),
							(0, C.insert)(b, () => g.title),
							(0, C.insert)(
								o,
								(0, E.createComponent)(d.Show, {
									get when() {
										return g.isLoading;
									},
									get children() {
										const l = a();
										return (
											(0, C.insert)(
												l,
												(0, E.createComponent)(u.$Z8b, {
													class: "ai-preview-section-loading-spinner",
												}),
											),
											l
										);
									},
								}),
								s,
							),
							(0, C.insert)(o, () => g.toolbarContent, s),
							s.style.setProperty("color", "rgb(147, 146, 147)"),
							s.style.setProperty("transition", "transform 0.2s"),
							(0, C.insert)(
								p,
								(0, E.createComponent)(d.Show, {
									get when() {
										return g.isOpen;
									},
									get children() {
										const l = h();
										return (
											l.style.setProperty("display", "flex"),
											l.style.setProperty("flex-direction", "column"),
											l.style.setProperty("gap", "4px"),
											l.style.setProperty("transition", "height 0.2s"),
											(0, C.insert)(l, () => g.children),
											l
										);
									},
								}),
								null,
							),
							(0, w.effect)(
								(l) => {
									const y = g.isSelected
											? "var(--vscode-editor-foreground)"
											: "transparent",
										$ = g.iconClass,
										v = `rotate(${g.isOpen ? "90deg" : "0deg"})`,
										S = r.ThemeIcon.asClassName(m.$ak.chevronRight);
									return (
										y !== l._v$ &&
											((l._v$ = y) != null
												? p.style.setProperty("border-color", y)
												: p.style.removeProperty("border-color")),
										$ !== l._v$2 && (0, i.className)(f, (l._v$2 = $)),
										v !== l._v$3 &&
											((l._v$3 = v) != null
												? s.style.setProperty("transform", v)
												: s.style.removeProperty("transform")),
										S !== l._v$4 && (0, i.className)(s, (l._v$4 = S)),
										l
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0, _v$4: void 0 },
							),
							p
						);
					})();
				}
			},
		),
		