import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../form-control/api.js';
import '../selection/utils.js';
define(
			de[2654],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 115, 13, 593, 2653]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*web*/,
 r /*web*/,
 u /*web*/,
 a /*api*/,
 h /*solid*/,
 c /*api*/,
 n /*utils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$tnb = f);
				const g = (0, t.template)("<option>"),
					p = (0, t.template)(
						'<div aria-hidden="true"><input type="text"><select tabindex="-1"><option>',
					),
					o = {
						border: "0",
						clip: "rect(0 0 0 0)",
						"clip-path": "inset(50%)",
						height: "1px",
						margin: "0 -1px -1px 0",
						overflow: "hidden",
						padding: "0",
						position: "absolute",
						width: "1px",
						"white-space": "nowrap",
					};
				function f(b) {
					let s;
					const [l, y] = (0, h.splitProps)(b, [
							"ref",
							"onChange",
							"collection",
							"selectionManager",
							"isOpen",
							"isMultiple",
							"isVirtualized",
							"focusTrigger",
						]),
						$ = (0, c.$5mb)(),
						[v, S] = (0, h.createSignal)(!1),
						I = (T) => {
							const P = l.collection.getItem(T);
							return (0, m.createComponent)(h.Show, {
								get when() {
									return P?.type === "item";
								},
								get children() {
									const k = g();
									return (
										(k.value = T),
										(0, u.insert)(k, () => P?.textValue),
										(0, r.effect)(
											() => (k.selected = l.selectionManager.isSelected(T)),
										),
										k
									);
								},
							});
						};
					return (
						(0, h.createEffect)(
							(0, h.on)(
								() => l.selectionManager.selectedKeys(),
								(T, P) => {
									(P && (0, n.$snb)(T, P)) ||
										(S(!0),
										s?.dispatchEvent(
											new Event("input", { bubbles: !0, cancelable: !0 }),
										),
										s?.dispatchEvent(
											new Event("change", { bubbles: !0, cancelable: !0 }),
										));
								},
								{ defer: !0 },
							),
						),
						(() => {
							const T = p(),
								P = T.firstChild,
								k = P.nextSibling,
								L = k.firstChild;
							(0, d.style)(T, o),
								P.addEventListener("focus", () => l.focusTrigger()),
								P.style.setProperty("font-size", "16px"),
								k.addEventListener("change", (M) => {
									(0, a.$Kkb)(M, l.onChange),
										v() ||
											l.selectionManager.setSelectedKeys(
												new Set([M.target.value]),
											),
										S(!1);
								});
							const D = (0, a.mergeRefs)((M) => (s = M), l.ref);
							return (
								typeof D == "function" && (0, w.use)(D, k),
								(0, E.spread)(
									k,
									(0, C.mergeProps)(
										{
											get multiple() {
												return l.isMultiple;
											},
											get name() {
												return $.name();
											},
											get required() {
												return $.isRequired();
											},
											get disabled() {
												return $.isDisabled();
											},
											get size() {
												return l.collection.getSize();
											},
											get value() {
												return l.selectionManager.firstSelectedKey() ?? "";
											},
										},
										y,
									),
									!1,
									!0,
								),
								(0, u.insert)(
									k,
									(0, m.createComponent)(h.Show, {
										get when() {
											return l.isVirtualized;
										},
										get fallback() {
											return (0, m.createComponent)(h.For, {
												get each() {
													return [...l.collection.getKeys()];
												},
												children: (M) => I(M),
											});
										},
										get children() {
											return (0, m.createComponent)(h.For, {
												get each() {
													return [...l.selectionManager.selectedKeys()];
												},
												children: (M) => I(M),
											});
										},
									}),
									null,
								),
								(0, r.effect)(
									(M) => {
										const N =
												l.selectionManager.isFocused() || l.isOpen ? -1 : 0,
											A = $.isRequired(),
											R = $.isDisabled(),
											O = $.isReadOnly();
										return (
											N !== M._v$ &&
												(0, i.setAttribute)(P, "tabindex", (M._v$ = N)),
											A !== M._v$2 && (P.required = M._v$2 = A),
											R !== M._v$3 && (P.disabled = M._v$3 = R),
											O !== M._v$4 && (P.readOnly = M._v$4 = O),
											M
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0, _v$4: void 0 },
								),
								T
							);
						})()
					);
				}
			},
		),
		