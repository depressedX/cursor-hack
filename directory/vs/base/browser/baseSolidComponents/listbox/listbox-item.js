import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../utils/api.js';
import '../utils/api.js';
import '../selection/api.js';
import './listbox-context.js';
import './listbox-item-context.js';
define(
			de[2650],
			he([1, 0, 2, 2, 115, 13, 115, 115, 927, 1492, 895]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*api*/,
 E /*solid*/,
 C /*api*/,
 d /*api*/,
 m /*api*/,
 r /*listbox-context*/,
 u /*listbox-item-context*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$fnb = h);
				function a(c) {
					return (n) => (c(n), () => c(void 0));
				}
				function h(c) {
					let n;
					const g = (0, r.$cnb)(),
						p = `${g.generateId("item")}-${(0, E.createUniqueId)()}`,
						o = (0, w.$wjb)({ id: p }, c),
						[f, b] = (0, E.splitProps)(o, [
							"ref",
							"item",
							"aria-label",
							"aria-labelledby",
							"aria-describedby",
							"onPointerMove",
							"onPointerDown",
							"onPointerUp",
							"onClick",
							"onKeyDown",
							"onMouseDown",
							"onFocus",
						]),
						[s, l] = (0, E.createSignal)(),
						[y, $] = (0, E.createSignal)(),
						v = () => g.listState().selectionManager(),
						S = () => v().focusedKey() === f.item.key,
						I = (0, m.$Tmb)(
							{
								key: () => f.item.key,
								selectionManager: v,
								shouldSelectOnPressUp: g.shouldSelectOnPressUp,
								allowsDifferentPressOrigin: () =>
									g.shouldSelectOnPressUp() && g.shouldFocusOnHover(),
								shouldUseVirtualFocus: g.shouldUseVirtualFocus,
								disabled: () => f.item.disabled,
							},
							() => n,
						),
						T = () => {
							if (v().selectionMode() !== "none") return I.isSelected();
						},
						P = (0, E.createMemo)(() => !((0, w.$Bjb)() && (0, w.$Gjb)())),
						k = () => (P() ? f["aria-label"] : void 0),
						L = () => (P() ? s() : void 0),
						D = () => (P() ? y() : void 0),
						M = () => {
							if (!g.isVirtualized()) return;
							const B = g.listState().collection().getItem(f.item.key)?.index;
							return B != null ? B + 1 : void 0;
						},
						N = () => {
							if (g.isVirtualized())
								return (0, d.$zkb)(g.listState().collection());
						},
						A = (B) => {
							(0, w.$Kkb)(B, f.onPointerMove),
								B.pointerType === "mouse" &&
									!I.isDisabled() &&
									g.shouldFocusOnHover() &&
									(B.currentTarget.focus({ preventScroll: !0 }),
									v().setFocused(!0),
									v().setFocusedKey(f.item.key));
						},
						R = (0, E.createMemo)(() => ({
							"data-disabled": I.isDisabled() ? "" : void 0,
							"data-selected": I.isSelected() ? "" : void 0,
							"data-highlighted": S() ? "" : void 0,
						})),
						O = {
							isSelected: I.isSelected,
							dataset: R,
							generateId: (0, w.$Ljb)(() => b.id),
							registerLabelId: a(l),
							registerDescriptionId: a($),
						};
					return (0, t.createComponent)(u.$dnb.Provider, {
						value: O,
						get children() {
							return (0, t.createComponent)(
								C.$5kb,
								(0, i.mergeProps)(
									{
										as: "li",
										ref(B) {
											const U = (0, w.mergeRefs)((z) => (n = z), f.ref);
											typeof U == "function" && U(B);
										},
										role: "option",
										get tabIndex() {
											return I.tabIndex();
										},
										get "aria-disabled"() {
											return I.isDisabled();
										},
										get "aria-selected"() {
											return T();
										},
										get "aria-label"() {
											return k();
										},
										get "aria-labelledby"() {
											return L();
										},
										get "aria-describedby"() {
											return D();
										},
										get "aria-posinset"() {
											return M();
										},
										get "aria-setsize"() {
											return N();
										},
										get "data-key"() {
											return I.dataKey();
										},
										get onPointerDown() {
											return (0, w.$Lkb)([f.onPointerDown, I.onPointerDown]);
										},
										get onPointerUp() {
											return (0, w.$Lkb)([f.onPointerUp, I.onPointerUp]);
										},
										get onClick() {
											return (0, w.$Lkb)([f.onClick, I.onClick]);
										},
										get onKeyDown() {
											return (0, w.$Lkb)([f.onKeyDown, I.onKeyDown]);
										},
										get onMouseDown() {
											return (0, w.$Lkb)([f.onMouseDown, I.onMouseDown]);
										},
										get onFocus() {
											return (0, w.$Lkb)([f.onFocus, I.onFocus]);
										},
										onPointerMove: A,
									},
									R,
									b,
								),
							);
						},
					});
				}
			},
		),
		