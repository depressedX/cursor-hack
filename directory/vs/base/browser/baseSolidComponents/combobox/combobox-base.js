import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../form-control/api.js';
import '../list/api.js';
import '../utils/api.js';
import '../popper/api.js';
import '../utils/api.js';
import '../selection/api.js';
import './combobox-context.js';
define(
			de[2670],
			he([1, 0, 2, 2, 115, 13, 593, 1570, 115, 1164, 115, 927, 486]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*api*/,
 E /*solid*/,
 C /*api*/,
 d /*api*/,
 m /*api*/,
 r /*api*/,
 u /*api*/,
 a /*api*/,
 h /*combobox-context*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$nnb = n);
				function c(g) {
					return (p) => (g(p), () => g(void 0));
				}
				function n(g) {
					const p = `combobox-${(0, E.createUniqueId)()}`,
						o = (0, w.$wjb)(
							{
								id: p,
								selectionMode: "single",
								disallowEmptySelection: !0,
								allowDuplicateSelectionEvents: !0,
								removeOnBackspace: !0,
								gutter: 8,
								sameWidth: !0,
								modal: !1,
								preventScroll: !1,
								triggerMode: "input",
								allowsEmptyCollection: !1,
							},
							g,
						),
						[f, b, s, l] = (0, E.splitProps)(
							o,
							[
								"itemComponent",
								"sectionComponent",
								"open",
								"defaultOpen",
								"onOpenChange",
								"onInputChange",
								"value",
								"defaultValue",
								"onChange",
								"triggerMode",
								"placeholder",
								"options",
								"optionValue",
								"optionTextValue",
								"optionLabel",
								"optionDisabled",
								"optionGroupChildren",
								"keyboardDelegate",
								"allowDuplicateSelectionEvents",
								"disallowEmptySelection",
								"shouldFocusWrap",
								"allowsEmptyCollection",
								"removeOnBackspace",
								"selectionBehavior",
								"selectionMode",
								"virtualized",
								"modal",
								"preventScroll",
								"forceMount",
							],
							[
								"getAnchorRect",
								"placement",
								"gutter",
								"shift",
								"flip",
								"slide",
								"overlap",
								"sameWidth",
								"fitViewport",
								"hideWhenDetached",
								"detachedPadding",
								"arrowPadding",
								"overflowPadding",
							],
							C.$6mb,
						),
						[y, $] = (0, E.createSignal)(),
						[v, S] = (0, E.createSignal)(),
						[I, T] = (0, E.createSignal)(),
						[P, k] = (0, E.createSignal)(),
						[L, D] = (0, E.createSignal)(),
						[M, N] = (0, E.createSignal)(),
						[A, R] = (0, E.createSignal)(!1),
						[O, B] = (0, E.createSignal)(!1),
						[U, z] = (0, E.createSignal)(f.options);
					let F = "focus";
					const x = (ue) => {
							const fe = f.optionValue;
							return fe == null
								? String(ue)
								: String((0, w.$Ajb)(fe) ? fe(ue) : ue[fe]);
						},
						H = (ue) => {
							const fe = f.optionLabel;
							return fe == null
								? String(ue)
								: String((0, w.$Ajb)(fe) ? fe(ue) : ue[fe]);
						},
						q = (0, E.createMemo)(() => {
							const ue = f.optionGroupChildren;
							return ue == null
								? f.options
								: (0, w.$Ajb)(ue)
									? f.options.flatMap((fe) => ue(fe) ?? fe)
									: f.options.flatMap((fe) => fe[ue] ?? fe);
						}),
						V = (ue) =>
							[...ue]
								.map((fe) => q().find((me) => x(me) === fe))
								.filter((fe) => fe != null),
						G = (0, u.$Ckb)({
							open: () => f.open,
							defaultOpen: () => f.defaultOpen,
							onOpenChange: (ue) => f.onOpenChange?.(ue, F),
						}),
						[K, J] = (0, u.$okb)({
							defaultValue: () => "",
							onChange: (ue) => {
								f.onInputChange?.(ue),
									ue === "" &&
										f.selectionMode === "single" &&
										!X.selectionManager().isEmpty() &&
										f.value === void 0 &&
										X.selectionManager().setSelectedKeys([]),
									X.selectionManager().setFocusedKey(void 0);
							},
						}),
						W = (0, E.createMemo)(() => (G.isOpen() ? f.options : U())),
						X = (0, d.$Wmb)({
							selectedKeys: () => f.value && f.value.map(x),
							defaultSelectedKeys: () =>
								f.defaultValue && f.defaultValue.map(x),
							onSelectionChange: (ue) => {
								f.onChange?.(V(ue)),
									f.selectionMode === "single"
										? (G.isOpen() && ue.size > 0 && _(), oe())
										: J("");
								const fe = I();
								fe &&
									(fe.setSelectionRange(fe.value.length, fe.value.length),
									fe.focus({ preventScroll: !0 }));
							},
							allowDuplicateSelectionEvents: () =>
								(0, w.access)(f.allowDuplicateSelectionEvents),
							disallowEmptySelection: () => f.disallowEmptySelection,
							selectionBehavior: () => (0, w.access)(f.selectionBehavior),
							selectionMode: () => f.selectionMode,
							dataSource: W,
							getKey: () => f.optionValue,
							getTextValue: () => f.optionTextValue,
							getDisabled: () => f.optionDisabled,
							getSectionChildren: () => f.optionGroupChildren,
						}),
						Y = (0, E.createMemo)(() => V(X.selectionManager().selectedKeys())),
						ie = (ue) => {
							X.selectionManager().toggleSelection(x(ue));
						},
						ne = (0, u.$Ukb)(() => f.forceMount || G.isOpen()),
						ee = (ue, fe) => {
							if (!f.allowsEmptyCollection && f.options.length <= 0) return;
							(F = fe), R(ue), G.open();
							let me = X.selectionManager().firstSelectedKey();
							me == null &&
								(ue === "first"
									? (me = X.collection().getFirstKey())
									: ue === "last" && (me = X.collection().getLastKey())),
								X.selectionManager().setFocused(!0),
								X.selectionManager().setFocusedKey(me);
						},
						_ = () => {
							z(f.options),
								G.close(),
								X.selectionManager().setFocused(!1),
								X.selectionManager().setFocusedKey(void 0);
						},
						te = (ue, fe) => {
							G.isOpen() ? _() : ee(ue, fe);
						},
						{ formControlContext: Q } = (0, C.$7mb)(s);
					(0, u.$Tkb)(I, () => {
						const ue = f.defaultValue
							? [...f.defaultValue].map(x)
							: new a.$Omb();
						X.selectionManager().setSelectedKeys(ue);
					});
					const Z = (0, E.createMemo)(() => {
							const ue = (0, w.access)(f.keyboardDelegate);
							return ue || new d.$Xmb(X.collection, M, void 0);
						}),
						se = (0, a.$Smb)(
							{
								selectionManager: () => X.selectionManager(),
								keyboardDelegate: Z,
								disallowTypeAhead: !0,
								disallowEmptySelection: !0,
								shouldFocusWrap: () => f.shouldFocusWrap,
								isVirtualized: !0,
							},
							I,
						),
						re = (ue) => {
							ue && f.triggerMode === "focus" && ee(!1, "focus"),
								B(ue),
								X.selectionManager().setFocused(ue);
						},
						le = (0, E.createMemo)(() => {
							const ue = X.selectionManager().focusedKey();
							if (ue) return M()?.querySelector(`[data-key="${ue}"]`)?.id;
						}),
						oe = () => {
							if (f.selectionMode === "single") {
								const ue = Y()[0];
								J(ue ? H(ue) : "");
							} else J("");
						},
						ae = (ue) => f.itemComponent?.({ item: ue }),
						pe = (ue) => f.sectionComponent?.({ section: ue });
					(0, E.onMount)(() => {
						f.selectionMode === "single" && oe();
					});
					const $e = (0, E.createMemo)(() => ({
							"data-expanded": G.isOpen() ? "" : void 0,
							"data-closed": G.isOpen() ? void 0 : "",
						})),
						ye = {
							dataset: $e,
							isOpen: G.isOpen,
							isDisabled: () => Q.isDisabled() ?? !1,
							isMultiple: () => (0, w.access)(f.selectionMode) === "multiple",
							isVirtualized: () => f.virtualized ?? !1,
							isModal: () => f.modal ?? !1,
							preventScroll: () => f.preventScroll ?? !1,
							allowsEmptyCollection: () => f.allowsEmptyCollection ?? !1,
							shouldFocusWrap: () => f.shouldFocusWrap ?? !1,
							removeOnBackspace: () => f.removeOnBackspace ?? !0,
							selectedOptions: Y,
							isInputFocused: O,
							contentPresence: ne,
							autoFocus: A,
							inputValue: K,
							triggerMode: () => f.triggerMode,
							activeDescendant: le,
							controlRef: v,
							inputRef: I,
							triggerRef: P,
							contentRef: L,
							listState: () => X,
							keyboardDelegate: Z,
							listboxId: y,
							triggerAriaLabel: () => "triggerLabel",
							listboxAriaLabel: () => "listboxLabel",
							setIsInputFocused: re,
							resetInputValue: oe,
							setInputValue: J,
							setControlRef: S,
							setInputRef: T,
							setTriggerRef: k,
							setContentRef: D,
							setListboxRef: N,
							open: ee,
							close: _,
							toggle: te,
							placeholder: () => f.placeholder,
							renderItem: ae,
							renderSection: pe,
							removeOptionFromSelection: ie,
							onInputKeyDown: (ue) => se.onKeyDown(ue),
							generateId: (0, w.$Ljb)(() => (0, w.access)(s.id)),
							registerListboxId: c($),
						};
					return (0, t.createComponent)(C.$4mb.Provider, {
						value: Q,
						get children() {
							return (0, t.createComponent)(h.$1mb.Provider, {
								value: ye,
								get children() {
									return (0, t.createComponent)(
										r.$Nmb,
										(0, i.mergeProps)({ anchorRef: v, contentRef: L }, b, {
											get children() {
												return (0, t.createComponent)(
													m.$5kb,
													(0, i.mergeProps)(
														{
															as: "div",
															role: "group",
															get id() {
																return (0, w.access)(s.id);
															},
														},
														() => Q.dataset(),
														$e,
														l,
													),
												);
											},
										}),
									);
								},
							});
						},
					});
				}
			},
		)
