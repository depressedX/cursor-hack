import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../ui/browser/hooks/useThemeHooks.js';
import '../../../../ui/browser/dropdown/dropdown.js';
define(
			de[4186],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 36, 331, 523]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*solid*/,
 r /*solid*/,
 u /*useThemeHooks*/,
 a /*dropdown*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$WCc = n);
				const h = (0, t.template)("<p>"),
					c = (0, t.template)("<div><div><div><p>");
				function n(g) {
					const p = (0, r.$odc)();
					return (() => {
						const o = c(),
							f = o.firstChild,
							b = f.firstChild,
							s = b.firstChild;
						return (
							o.style.setProperty("display", "flex"),
							o.style.setProperty("flex-direction", "column"),
							o.style.setProperty("gap", "8px"),
							o.style.setProperty("cursor", "auto"),
							f.style.setProperty("display", "flex"),
							f.style.setProperty("align-items", "center"),
							f.style.setProperty("justify-content", "space-between"),
							f.style.setProperty("gap", "12px"),
							b.style.setProperty("display", "flex"),
							b.style.setProperty("font-size", "12px"),
							b.style.setProperty("flex-direction", "column"),
							b.style.setProperty("gap", "3px"),
							s.style.setProperty("margin", "0"),
							s.style.setProperty("color", "var(--vscode-foreground)"),
							s.style.setProperty("display", "flex"),
							s.style.setProperty("align-items", "center"),
							s.style.setProperty("gap", "4px"),
							(0, d.insert)(s, () => g.label, null),
							(0, d.insert)(s, () => g.labelExtra, null),
							(0, d.insert)(
								b,
								(0, C.createComponent)(m.Show, {
									get when() {
										return g.description;
									},
									get children() {
										const l = h();
										return (
											l.style.setProperty("margin", "0"),
											l.style.setProperty("line-height", "130%"),
											l.style.setProperty("color", "var(--vscode-foreground)"),
											l.style.setProperty("opacity", "0.6"),
											l.style.setProperty("font-size", "0.95em"),
											(0, d.insert)(l, () => g.description),
											l
										);
									},
								}),
								null,
							),
							(0, d.insert)(
								o,
								(0, C.createComponent)(
									a.$Kbc,
									(0, E.mergeProps)(
										{
											get origLabel() {
												return g.label;
											},
											get value() {
												return g.value;
											},
											get items() {
												return g.items;
											},
											get onSelect() {
												return g.onChange;
											},
										},
										() => g.dropdownProps,
									),
								),
								null,
							),
							(0, d.insert)(
								o,
								(0, C.createComponent)(m.Show, {
									get when() {
										return g.children;
									},
									get children() {
										return g.children;
									},
								}),
								null,
							),
							(0, w.effect)(() =>
								(0, i.className)(
									o,
									"settings-sub-section" +
										((0, u.$d$b)(p.themeService) ? " dark" : " light"),
								),
							),
							o
						);
					})();
				}
			},
		),
		