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
import './InputBoxSelectionPin.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/hooks/useThemeHooks.js';
import '../../../../../css!vs/workbench/contrib/aichat/browser/components/InputBox.js';
define(
			de[4143],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 4142, 36, 331, 2377]),
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
 a /*InputBoxSelectionPin*/,
 h /*solid*/,
 c /*useThemeHooks*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$9fc = o);
				const n = (0, t.template)("<div>"),
					g = (0, t.template)('<div class="fade-in">'),
					p = (0, t.template)(
						'<div><div class="input-box-selection-header compact"><div></div><div></div><div><div><div>',
					);
				function o(f) {
					const b = (0, h.$odc)(),
						s = (0, c.$f$b)(b.themeService),
						l = (0, c.$g$b)(b.themeService);
					return (() => {
						const y = p(),
							$ = y.firstChild,
							v = $.firstChild,
							S = v.nextSibling,
							I = S.nextSibling,
							T = I.firstChild,
							P = T.firstChild;
						return (
							y.style.setProperty("border-radius", "4px"),
							y.style.setProperty(
								"background-color",
								"var(--vscode-editor-background)",
							),
							y.style.setProperty("overflow", "hidden"),
							y.style.setProperty("transition", "border 0.1s"),
							$.addEventListener("click", (k) => {
								k.stopPropagation(), f.setIsOpen(!f.isOpen);
							}),
							$.style.setProperty("display", "flex"),
							$.style.setProperty("flex-direction", "row"),
							$.style.setProperty("align-items", "center"),
							$.style.setProperty("cursor", "pointer"),
							(0, w.insert)(
								$,
								(0, E.createComponent)(m.Show, {
									get when() {
										return typeof f.icon == "string";
									},
									get fallback() {
										return f.icon;
									},
									get children() {
										const k = n();
										return (
											k.style.setProperty("margin", "0 4px"),
											k.style.setProperty("font-size", "13px"),
											(0, d.effect)(() => (0, C.className)(k, f.icon)),
											k
										);
									},
								}),
								v,
							),
							v.addEventListener("click", (k) => {
								!f.isOpen ||
									!f.onTitleClick ||
									(k.stopPropagation(), f.onTitleClick?.());
							}),
							v.style.setProperty("cursor", "pointer"),
							v.style.setProperty("white-space", "nowrap"),
							v.style.setProperty("overflow", "hidden"),
							v.style.setProperty("text-overflow", "ellipsis"),
							v.style.setProperty("text-wrap", "nowrap"),
							v.style.setProperty("font-size", "0.7em"),
							v.style.setProperty("padding", "2px 4px"),
							(0, w.insert)(v, () => f.title),
							(0, w.insert)(
								$,
								(0, E.createComponent)(m.Show, {
									get when() {
										return f.subTitle;
									},
									get children() {
										const k = n();
										return (
											k.addEventListener("click", (L) => {
												!f.isOpen ||
													!f.onTitleClick ||
													(L.stopPropagation(), f.onTitleClick());
											}),
											k.style.setProperty("opacity", "0.5"),
											k.style.setProperty("margin-left", "5px"),
											k.style.setProperty("min-width", "0"),
											k.style.setProperty("cursor", "pointer"),
											k.style.setProperty("font-size", "0.8em"),
											k.style.setProperty("text-overflow", "ellipsis"),
											k.style.setProperty("overflow", "hidden"),
											k.style.setProperty("text-wrap", "nowrap"),
											(0, w.insert)(k, () => f.subTitle),
											(0, d.effect)(() =>
												(0, i.setAttribute)(
													k,
													"title",
													typeof f.subTitle == "string" ? f.subTitle : void 0,
												),
											),
											k
										);
									},
								}),
								S,
							),
							S.style.setProperty("flex-grow", "1"),
							(0, w.insert)(
								I,
								(0, E.createComponent)(m.Show, {
									get when() {
										return f.customToolbar;
									},
									get children() {
										return f.customToolbar;
									},
								}),
								T,
							),
							T.style.setProperty("display", "flex"),
							T.style.setProperty("align-items", "center"),
							T.style.setProperty("gap", "4px"),
							T.style.setProperty("padding", "0 3px"),
							T.style.setProperty("z-index", "1"),
							(0, w.insert)(
								T,
								(0, E.createComponent)(m.Show, {
									get when() {
										return (
											f.canBePinned && (f.type === "file" || f.type === "code")
										);
									},
									get children() {
										return (0, E.createComponent)(a.$8fc, {
											get item() {
												return f.item;
											},
											get type() {
												return f.type;
											},
										});
									},
								}),
								P,
							),
							(0, w.insert)(
								T,
								(0, E.createComponent)(m.Show, {
									get when() {
										return f.showCloseButton !== !1;
									},
									get children() {
										const k = n();
										return (
											k.addEventListener("click", (L) => {
												L.stopPropagation(), f.onRemove?.();
											}),
											k.style.setProperty("cursor", "pointer"),
											k.style.setProperty("font-size", "1em"),
											(0, d.effect)(() =>
												(0, C.className)(
													k,
													u.ThemeIcon.asClassName(r.$ak.x) + " clickable",
												),
											),
											k
										);
									},
								}),
								P,
							),
							P.addEventListener("click", (k) => {
								k.stopPropagation(), f.setIsOpen(!f.isOpen);
							}),
							P.style.setProperty("cursor", "pointer"),
							P.style.setProperty("font-size", "1em"),
							(0, w.insert)(
								y,
								(0, E.createComponent)(m.Show, {
									get when() {
										return f.isOpen;
									},
									get children() {
										const k = g();
										return (
											k.style.setProperty("position", "relative"),
											k.style.setProperty(
												"border-top",
												"1px solid transparent",
											),
											(0, w.insert)(k, () => f.children),
											(0, d.effect)(() =>
												(f.isOpen ? s() : "transparent") != null
													? k.style.setProperty(
															"border-top-color",
															f.isOpen ? s() : "transparent",
														)
													: k.style.removeProperty("border-top-color"),
											),
											k
										);
									},
								}),
								null,
							),
							(0, d.effect)(
								(k) => {
									const L = "1px solid " + s(),
										D =
											!f.isOpen && !f.showBorders
												? "transparent"
												: f.isFocused
													? l()
													: s(),
										M = f.icon ? "0px" : "6px",
										N = typeof f.title == "string" ? f.title : void 0,
										A =
											"input-box-selection-header-tools" +
											(f.alwaysShowToolbar !== !1 ? "" : " autohide"),
										R = f.customToolbar ? "1px solid " + s() : "none",
										O = f.customToolbar ? "3px" : "0px",
										B = `rotate(${f.isOpen ? "90deg" : "0deg"})`,
										U =
											u.ThemeIcon.asClassName(r.$ak.chevronRight) +
											" clickable";
									return (
										L !== k._v$ &&
											((k._v$ = L) != null
												? y.style.setProperty("border", L)
												: y.style.removeProperty("border")),
										D !== k._v$2 &&
											((k._v$2 = D) != null
												? y.style.setProperty("border-color", D)
												: y.style.removeProperty("border-color")),
										M !== k._v$3 &&
											((k._v$3 = M) != null
												? $.style.setProperty("padding-left", M)
												: $.style.removeProperty("padding-left")),
										N !== k._v$4 &&
											(0, i.setAttribute)(v, "title", (k._v$4 = N)),
										A !== k._v$5 && (0, C.className)(I, (k._v$5 = A)),
										R !== k._v$6 &&
											((k._v$6 = R) != null
												? T.style.setProperty("border-left", R)
												: T.style.removeProperty("border-left")),
										O !== k._v$7 &&
											((k._v$7 = O) != null
												? T.style.setProperty("margin-left", O)
												: T.style.removeProperty("margin-left")),
										B !== k._v$8 &&
											((k._v$8 = B) != null
												? P.style.setProperty("transform", B)
												: P.style.removeProperty("transform")),
										U !== k._v$9 && (0, C.className)(P, (k._v$9 = U)),
										k
									);
								},
								{
									_v$: void 0,
									_v$2: void 0,
									_v$3: void 0,
									_v$4: void 0,
									_v$5: void 0,
									_v$6: void 0,
									_v$7: void 0,
									_v$8: void 0,
									_v$9: void 0,
								},
							),
							y
						);
					})();
				}
			},
		),
		