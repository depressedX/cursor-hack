import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../list/api.js';
import '../utils/api.js';
import './listbox-context.js';
define(
			de[2651],
			he([1, 0, 2, 2, 115, 13, 1570, 115, 1492]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*api*/,
 E /*solid*/,
 C /*api*/,
 d /*api*/,
 m /*listbox-context*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$jnb = r);
				function r(u) {
					let a;
					const h = `listbox-${(0, E.createUniqueId)()}`,
						c = (0, w.$wjb)(
							{ id: h, selectionMode: "single", virtualized: !1 },
							u,
						),
						[n, g] = (0, E.splitProps)(c, [
							"ref",
							"children",
							"renderItem",
							"renderSection",
							"value",
							"defaultValue",
							"onChange",
							"options",
							"optionValue",
							"optionTextValue",
							"optionDisabled",
							"optionGroupChildren",
							"state",
							"keyboardDelegate",
							"autoFocus",
							"selectionMode",
							"shouldFocusWrap",
							"shouldUseVirtualFocus",
							"shouldSelectOnPressUp",
							"shouldFocusOnHover",
							"allowDuplicateSelectionEvents",
							"disallowEmptySelection",
							"selectionBehavior",
							"selectOnFocus",
							"disallowTypeAhead",
							"allowsTabNavigation",
							"virtualized",
							"scrollToItem",
							"scrollRef",
							"onKeyDown",
							"onMouseDown",
							"onFocusIn",
							"onFocusOut",
						]),
						p = (0, E.createMemo)(() =>
							n.state
								? n.state
								: (0, C.$Wmb)({
										selectedKeys: () => n.value,
										defaultSelectedKeys: () => n.defaultValue,
										onSelectionChange: n.onChange,
										allowDuplicateSelectionEvents: () =>
											(0, w.access)(n.allowDuplicateSelectionEvents),
										disallowEmptySelection: () =>
											(0, w.access)(n.disallowEmptySelection),
										selectionBehavior: () => (0, w.access)(n.selectionBehavior),
										selectionMode: () => (0, w.access)(n.selectionMode),
										dataSource: () => n.options ?? [],
										getKey: () => n.optionValue,
										getTextValue: () => n.optionTextValue,
										getDisabled: () => n.optionDisabled,
										getSectionChildren: () => n.optionGroupChildren,
									}),
						),
						o = (0, C.$Ymb)(
							{
								selectionManager: () => p().selectionManager(),
								collection: () => p().collection(),
								autoFocus: () => (0, w.access)(n.autoFocus),
								shouldFocusWrap: () => (0, w.access)(n.shouldFocusWrap),
								keyboardDelegate: () => n.keyboardDelegate,
								disallowEmptySelection: () =>
									(0, w.access)(n.disallowEmptySelection),
								selectOnFocus: () => (0, w.access)(n.selectOnFocus),
								disallowTypeAhead: () => (0, w.access)(n.disallowTypeAhead),
								shouldUseVirtualFocus: () =>
									(0, w.access)(n.shouldUseVirtualFocus),
								allowsTabNavigation: () => (0, w.access)(n.allowsTabNavigation),
								isVirtualized: () => n.virtualized,
								scrollToKey: () => n.scrollToItem,
							},
							() => a,
							() => n.scrollRef?.(),
						),
						f = {
							listState: p,
							generateId: (0, w.$Ljb)(() => g.id),
							shouldUseVirtualFocus: () => c.shouldUseVirtualFocus,
							shouldSelectOnPressUp: () => c.shouldSelectOnPressUp,
							shouldFocusOnHover: () => c.shouldFocusOnHover,
							isVirtualized: () => n.virtualized,
						};
					return (0, i.createComponent)(m.$bnb.Provider, {
						value: f,
						get children() {
							return (0, i.createComponent)(
								d.$5kb,
								(0, t.mergeProps)(
									{
										as: "ul",
										ref(b) {
											const s = (0, w.mergeRefs)((l) => (a = l), n.ref);
											typeof s == "function" && s(b);
										},
										role: "listbox",
										get tabIndex() {
											return o.tabIndex();
										},
										get "aria-multiselectable"() {
											return p().selectionManager().selectionMode() ===
												"multiple"
												? !0
												: void 0;
										},
										get onKeyDown() {
											return (0, w.$Lkb)([n.onKeyDown, o.onKeyDown]);
										},
										get onMouseDown() {
											return (0, w.$Lkb)([n.onMouseDown, o.onMouseDown]);
										},
										get onFocusIn() {
											return (0, w.$Lkb)([n.onFocusIn, o.onFocusIn]);
										},
										get onFocusOut() {
											return (0, w.$Lkb)([n.onFocusOut, o.onFocusOut]);
										},
									},
									g,
									{
										get children() {
											return (0, i.createComponent)(E.Show, {
												get when() {
													return !n.virtualized;
												},
												get fallback() {
													return n.children?.(p().collection);
												},
												get children() {
													return (0, i.createComponent)(w.Key, {
														get each() {
															return [...p().collection()];
														},
														by: "key",
														children: (b) =>
															(0, i.createComponent)(E.Switch, {
																get children() {
																	return [
																		(0, i.createComponent)(E.Match, {
																			get when() {
																				return b().type === "section";
																			},
																			get children() {
																				return n.renderSection?.(b());
																			},
																		}),
																		(0, i.createComponent)(E.Match, {
																			get when() {
																				return b().type === "item";
																			},
																			get children() {
																				return n.renderItem?.(b());
																			},
																		}),
																	];
																},
															}),
													});
												},
											});
										},
									},
								),
							);
						},
					});
				}
			},
		),
		