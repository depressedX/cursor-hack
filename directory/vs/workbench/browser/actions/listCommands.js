define(
			de[2944],
			he([
				1, 0, 27, 43, 7, 278, 93, 1578, 24, 8, 1169, 1170, 1582, 31, 1167, 411,
				7, 11, 10, 4, 72,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (w = mt(w));
				function l(P) {
					const k = P?.getHTMLElement();
					k && !(0, p.$Kgb)(k) && P?.domFocus();
				}
				async function y(P, k) {
					if (!C.$rMb.getValue(P.contextKeyService)) return k(P);
					const L = P.getFocus(),
						D = P.getSelection();
					await k(P);
					const M = P.getFocus();
					if (D.length > 1 || !(0, m.$yb)(L, D) || (0, m.$yb)(L, M)) return;
					const N = new KeyboardEvent("keydown");
					P.setSelection(M, N);
				}
				async function $(P, k) {
					if (!P) return;
					await y(P, k);
					const L = P.getFocus();
					L.length && P.reveal(L[0]), P.setAnchor(L[0]), l(P);
				}
				i.$TX.registerCommandAndKeybindingRule({
					id: "list.focusDown",
					weight: i.KeybindingWeight.WorkbenchContrib,
					when: C.$nMb,
					primary: t.KeyCode.DownArrow,
					mac: {
						primary: t.KeyCode.DownArrow,
						secondary: [t.KeyMod.WinCtrl | t.KeyCode.KeyN],
					},
					handler: (P, k) => {
						$(P.get(C.$fMb).lastFocusedList, async (L) => {
							const D = new KeyboardEvent("keydown");
							await L.focusNext(typeof k == "number" ? k : 1, !1, D);
						});
					},
				}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusUp",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyCode.UpArrow,
						mac: {
							primary: t.KeyCode.UpArrow,
							secondary: [t.KeyMod.WinCtrl | t.KeyCode.KeyP],
						},
						handler: (P, k) => {
							$(P.get(C.$fMb).lastFocusedList, async (L) => {
								const D = new KeyboardEvent("keydown");
								await L.focusPrevious(typeof k == "number" ? k : 1, !1, D);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusAnyDown",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyMod.Alt | t.KeyCode.DownArrow,
						mac: {
							primary: t.KeyMod.Alt | t.KeyCode.DownArrow,
							secondary: [t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.KeyN],
						},
						handler: (P, k) => {
							$(P.get(C.$fMb).lastFocusedList, async (L) => {
								const D = new KeyboardEvent("keydown", { altKey: !0 });
								await L.focusNext(typeof k == "number" ? k : 1, !1, D);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusAnyUp",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyMod.Alt | t.KeyCode.UpArrow,
						mac: {
							primary: t.KeyMod.Alt | t.KeyCode.UpArrow,
							secondary: [t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.KeyP],
						},
						handler: (P, k) => {
							$(P.get(C.$fMb).lastFocusedList, async (L) => {
								const D = new KeyboardEvent("keydown", { altKey: !0 });
								await L.focusPrevious(typeof k == "number" ? k : 1, !1, D);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusPageDown",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyCode.PageDown,
						handler: (P) => {
							$(P.get(C.$fMb).lastFocusedList, async (k) => {
								const L = new KeyboardEvent("keydown");
								await k.focusNextPage(L);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusPageUp",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyCode.PageUp,
						handler: (P) => {
							$(P.get(C.$fMb).lastFocusedList, async (k) => {
								const L = new KeyboardEvent("keydown");
								await k.focusPreviousPage(L);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusFirst",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyCode.Home,
						handler: (P) => {
							$(P.get(C.$fMb).lastFocusedList, async (k) => {
								const L = new KeyboardEvent("keydown");
								await k.focusFirst(L);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusLast",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyCode.End,
						handler: (P) => {
							$(P.get(C.$fMb).lastFocusedList, async (k) => {
								const L = new KeyboardEvent("keydown");
								await k.focusLast(L);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusAnyFirst",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyMod.Alt | t.KeyCode.Home,
						handler: (P) => {
							$(P.get(C.$fMb).lastFocusedList, async (k) => {
								const L = new KeyboardEvent("keydown", { altKey: !0 });
								await k.focusFirst(L);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusAnyLast",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyMod.Alt | t.KeyCode.End,
						handler: (P) => {
							$(P.get(C.$fMb).lastFocusedList, async (k) => {
								const L = new KeyboardEvent("keydown", { altKey: !0 });
								await k.focusLast(L);
							});
						},
					});
				function v(P, k) {
					if (
						P instanceof E.List ||
						P instanceof d.$8ob ||
						P instanceof n.$ipb
					) {
						const L = P,
							D = L.getFocus() ? L.getFocus()[0] : void 0,
							M = L.getSelection();
						M && typeof D == "number" && M.indexOf(D) >= 0
							? L.setSelection(M.filter((N) => N !== k))
							: typeof D == "number" && L.setSelection(M.concat(D));
					} else if (
						P instanceof u.$Dpb ||
						P instanceof h.$Hpb ||
						P instanceof a.$Fpb
					) {
						const L = P,
							D = L.getFocus() ? L.getFocus()[0] : void 0;
						if (k === D) return;
						const M = L.getSelection(),
							N = new KeyboardEvent("keydown", { shiftKey: !0 });
						M && M.indexOf(D) >= 0
							? L.setSelection(
									M.filter((A) => A !== k),
									N,
								)
							: L.setSelection(M.concat(D), N);
					}
				}
				function S(P, k) {
					const L = P.getStickyScrollFocus();
					if (L.length === 0) throw new Error("StickyScroll has no focus");
					if (L.length > 1)
						throw new Error("StickyScroll can only have a single focused item");
					P.reveal(L[0]), P.getHTMLElement().focus(), P.setFocus(L), k?.(L[0]);
				}
				i.$TX.registerCommandAndKeybindingRule({
					id: "list.expandSelectionDown",
					weight: i.KeybindingWeight.WorkbenchContrib,
					when: r.$Kj.and(C.$nMb, C.$mMb),
					primary: t.KeyMod.Shift | t.KeyCode.DownArrow,
					handler: (P, k) => {
						const L = P.get(C.$fMb).lastFocusedList;
						if (!L) return;
						const D = L.getFocus() ? L.getFocus()[0] : void 0,
							M = new KeyboardEvent("keydown");
						L.focusNext(typeof k == "number" ? k : 1, !1, M), v(L, D);
						const N = L.getFocus();
						N.length && L.reveal(N[0]), l(L);
					},
				}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.expandSelectionUp",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, C.$mMb),
						primary: t.KeyMod.Shift | t.KeyCode.UpArrow,
						handler: (P, k) => {
							const L = P.get(C.$fMb).lastFocusedList;
							if (!L) return;
							const D = L.getFocus() ? L.getFocus()[0] : void 0,
								M = new KeyboardEvent("keydown");
							L.focusPrevious(typeof k == "number" ? k : 1, !1, M), v(L, D);
							const N = L.getFocus();
							N.length && L.reveal(N[0]), l(L);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.collapse",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, r.$Kj.or(C.$tMb, C.$uMb)),
						primary: t.KeyCode.LeftArrow,
						mac: {
							primary: t.KeyCode.LeftArrow,
							secondary: [t.KeyMod.CtrlCmd | t.KeyCode.UpArrow],
						},
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (
								!k ||
								!(
									k instanceof u.$Dpb ||
									k instanceof h.$Hpb ||
									k instanceof a.$Fpb
								)
							)
								return;
							const L = k,
								D = L.getFocus();
							if (D.length === 0) return;
							const M = D[0];
							if (!L.collapse(M)) {
								const N = L.getParentElement(M);
								N &&
									$(k, (A) => {
										const R = new KeyboardEvent("keydown");
										A.setFocus([N], R);
									});
							}
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.stickyScroll.collapse",
						weight: i.KeybindingWeight.WorkbenchContrib + 50,
						when: C.$lMb,
						primary: t.KeyCode.LeftArrow,
						mac: {
							primary: t.KeyCode.LeftArrow,
							secondary: [t.KeyMod.CtrlCmd | t.KeyCode.UpArrow],
						},
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							!k ||
								!(
									k instanceof u.$Dpb ||
									k instanceof h.$Hpb ||
									k instanceof a.$Fpb
								) ||
								S(k, (L) => k.collapse(L));
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.collapseAll",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyMod.CtrlCmd | t.KeyCode.LeftArrow,
						mac: {
							primary: t.KeyMod.CtrlCmd | t.KeyCode.LeftArrow,
							secondary: [
								t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.UpArrow,
							],
						},
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							k &&
								!(
									k instanceof E.List ||
									k instanceof d.$8ob ||
									k instanceof n.$ipb
								) &&
								k.collapseAll();
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.collapseAllToFocus",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList,
								L = (0, C.$BMb)("keydown", !0);
							if (
								k instanceof u.$Dpb ||
								k instanceof h.$Hpb ||
								k instanceof a.$Fpb
							) {
								const D = k,
									M = D.getFocus();
								M.length > 0 && D.collapse(M[0], !0),
									D.setSelection(M, L),
									D.setAnchor(M[0]);
							}
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusParent",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (
								!k ||
								!(
									k instanceof u.$Dpb ||
									k instanceof h.$Hpb ||
									k instanceof a.$Fpb
								)
							)
								return;
							const L = k,
								D = L.getFocus();
							if (D.length === 0) return;
							const M = D[0],
								N = L.getParentElement(M);
							N &&
								$(k, (A) => {
									const R = new KeyboardEvent("keydown");
									A.setFocus([N], R);
								});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.expand",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, r.$Kj.or(C.$vMb, C.$wMb)),
						primary: t.KeyCode.RightArrow,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (k) {
								if (k instanceof u.$Dpb || k instanceof h.$Hpb) {
									const L = k.getFocus();
									if (L.length === 0) return;
									const D = L[0];
									if (!k.expand(D)) {
										const M = k.getFirstElementChild(D);
										M &&
											k.getNode(M).visible &&
											$(k, (A) => {
												const R = new KeyboardEvent("keydown");
												A.setFocus([M], R);
											});
									}
								} else if (k instanceof a.$Fpb) {
									const L = k.getFocus();
									if (L.length === 0) return;
									const D = L[0];
									k.expand(D).then((M) => {
										if (D && !M) {
											const N = k.getFirstElementChild(D);
											N &&
												k.getNode(N).visible &&
												$(k, (R) => {
													const O = new KeyboardEvent("keydown");
													R.setFocus([N], O);
												});
										}
									});
								}
							}
						},
					});
				function I(P, k) {
					const L = P.get(C.$fMb).lastFocusedList,
						D = (0, C.$BMb)("keydown", k);
					if (
						L instanceof E.List ||
						L instanceof d.$8ob ||
						L instanceof n.$ipb
					) {
						const M = L;
						M.setAnchor(M.getFocus()[0]), M.setSelection(M.getFocus(), D);
					} else if (
						L instanceof u.$Dpb ||
						L instanceof h.$Hpb ||
						L instanceof a.$Fpb
					) {
						const M = L,
							N = M.getFocus();
						if (N.length > 0) {
							let A = !0;
							(M.expandOnlyOnTwistieClick === !0 ||
								(typeof M.expandOnlyOnTwistieClick != "boolean" &&
									M.expandOnlyOnTwistieClick(N[0]))) &&
								(A = !1),
								A && M.toggleCollapsed(N[0]);
						}
						M.setAnchor(N[0]), M.setSelection(N, D);
					}
				}
				i.$TX.registerCommandAndKeybindingRule({
					id: "list.select",
					weight: i.KeybindingWeight.WorkbenchContrib,
					when: C.$nMb,
					primary: t.KeyCode.Enter,
					mac: {
						primary: t.KeyCode.Enter,
						secondary: [t.KeyMod.CtrlCmd | t.KeyCode.DownArrow],
					},
					handler: (P) => {
						I(P, !1);
					},
				}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.stickyScrollselect",
						weight: i.KeybindingWeight.WorkbenchContrib + 50,
						when: C.$lMb,
						primary: t.KeyCode.Enter,
						mac: {
							primary: t.KeyCode.Enter,
							secondary: [t.KeyMod.CtrlCmd | t.KeyCode.DownArrow],
						},
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							!k ||
								!(
									k instanceof u.$Dpb ||
									k instanceof h.$Hpb ||
									k instanceof a.$Fpb
								) ||
								S(k, (L) => k.setSelection([L]));
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.selectAndPreserveFocus",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						handler: (P) => {
							I(P, !0);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.selectAll",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, C.$mMb),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyA,
						handler: (P) => {
							const k = w.$Ngb().activeElement;
							if (w.$Ygb(k) && k.getAttribute("contenteditable") === "true")
								return;
							const L = P.get(C.$fMb).lastFocusedList;
							if (
								L instanceof E.List ||
								L instanceof d.$8ob ||
								L instanceof n.$ipb
							) {
								const D = L,
									M = new KeyboardEvent("keydown");
								D.setSelection((0, m.$Vb)(D.length), M);
							} else if (
								L instanceof u.$Dpb ||
								L instanceof h.$Hpb ||
								L instanceof a.$Fpb
							) {
								const D = L,
									M = D.getFocus(),
									N = D.getSelection();
								let A;
								M.length > 0 &&
									(N.length === 0 || !N.includes(M[0])) &&
									(A = M[0]),
									!A && N.length > 0 && (A = N[0]);
								let R;
								A ? (R = D.getParentElement(A)) : (R = void 0);
								const O = [],
									B = (z) => {
										for (const F of z.children)
											F.visible && (O.push(F.element), F.collapsed || B(F));
									};
								B(D.getNode(R)), R && N.length === O.length && O.unshift(R);
								const U = new KeyboardEvent("keydown");
								D.setSelection(O, U);
							}
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.toggleSelection",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Enter,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (!k) return;
							const L = k.getFocus();
							if (L.length === 0) return;
							const D = k.getSelection(),
								M = D.indexOf(L[0]);
							M > -1
								? k.setSelection([...D.slice(0, M), ...D.slice(M + 1)])
								: k.setSelection([...D, L[0]]);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.showHover",
						weight: i.KeybindingWeight.WorkbenchContrib,
						primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyI),
						mac: {
							primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyI),
						},
						when: C.$nMb,
						handler: async (P, ...k) => {
							const D = P.get(C.$fMb).lastFocusedList;
							if (!D) return;
							const M = D.getFocus();
							if (!M || M.length === 0) return;
							const O = D.getHTMLElement()
								.querySelector(".monaco-scrollable-element")
								?.querySelector(".monaco-list-rows")
								?.querySelector(".focused");
							if (!O) return;
							const B = T(O);
							B && P.get(s.$Uyb).showManagedHover(B);
						},
					});
				function T(P) {
					if (P.matches('[custom-hover="true"]')) return P;
					const k = P.querySelector(
						'[custom-hover="true"]:not([tabindex]):not(.action-item)',
					);
					if (k) return k;
				}
				i.$TX.registerCommandAndKeybindingRule({
					id: "list.toggleExpand",
					weight: i.KeybindingWeight.WorkbenchContrib,
					when: C.$nMb,
					primary: t.KeyCode.Space,
					handler: (P) => {
						const k = P.get(C.$fMb).lastFocusedList;
						if (
							k instanceof u.$Dpb ||
							k instanceof h.$Hpb ||
							k instanceof a.$Fpb
						) {
							const L = k,
								D = L.getFocus();
							if (D.length > 0 && L.isCollapsible(D[0])) {
								L.toggleCollapsed(D[0]);
								return;
							}
						}
						I(P, !0);
					},
				}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.stickyScrolltoggleExpand",
						weight: i.KeybindingWeight.WorkbenchContrib + 50,
						when: C.$lMb,
						primary: t.KeyCode.Space,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							!k ||
								!(
									k instanceof u.$Dpb ||
									k instanceof h.$Hpb ||
									k instanceof a.$Fpb
								) ||
								S(k);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.clear",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, C.$oMb),
						primary: t.KeyCode.Escape,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (!k) return;
							const L = k.getSelection(),
								D = new KeyboardEvent("keydown");
							if (L.length > 1)
								if (C.$rMb.getValue(k.contextKeyService)) {
									const N = k.getFocus();
									k.setSelection([N[0]], D);
								} else k.setSelection([], D);
							else k.setSelection([], D), k.setFocus([], D);
							k.setAnchor(void 0);
						},
					}),
					c.$fk.registerCommand({
						id: "list.triggerTypeNavigation",
						handler: (P) => {
							P.get(C.$fMb).lastFocusedList?.triggerTypeNavigation();
						},
					}),
					c.$fk.registerCommand({
						id: "list.toggleFindMode",
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (k instanceof g.$wpb || k instanceof a.$Fpb) {
								const L = k;
								L.findMode =
									L.findMode === g.TreeFindMode.Filter
										? g.TreeFindMode.Highlight
										: g.TreeFindMode.Filter;
							}
						},
					}),
					c.$fk.registerCommand({
						id: "list.toggleFindMatchType",
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (k instanceof g.$wpb || k instanceof a.$Fpb) {
								const L = k;
								L.findMatchType =
									L.findMatchType === g.TreeFindMatchType.Contiguous
										? g.TreeFindMatchType.Fuzzy
										: g.TreeFindMatchType.Contiguous;
							}
						},
					}),
					c.$fk.registerCommandAlias(
						"list.toggleKeyboardNavigation",
						"list.triggerTypeNavigation",
					),
					c.$fk.registerCommandAlias(
						"list.toggleFilterOnType",
						"list.toggleFindMode",
					),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.find",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$kMb, C.$sMb),
						primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyF,
						secondary: [t.KeyCode.F3],
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							k instanceof E.List ||
								k instanceof d.$8ob ||
								k instanceof n.$ipb ||
								((k instanceof g.$wpb || k instanceof a.$Fpb) && k.openFind());
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.closeFind",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$kMb, C.$xMb),
						primary: t.KeyCode.Escape,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							(k instanceof g.$wpb || k instanceof a.$Fpb) && k.closeFind();
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.scrollUp",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, C.$iMb?.negate()),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.UpArrow,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							k && (k.scrollTop -= 10);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.scrollDown",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, C.$jMb?.negate()),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.DownArrow,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							k && (k.scrollTop += 10);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.scrollLeft",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							k && (k.scrollLeft -= 10);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.scrollRight",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							k && (k.scrollLeft += 10);
						},
					}),
					(0, o.$4X)(
						class extends o.$3X {
							constructor() {
								super({
									id: "tree.toggleStickyScroll",
									title: {
										...(0, b.localize2)(2932, "Toggle Tree Sticky Scroll"),
										mnemonicTitle: (0, b.localize)(2930, null),
									},
									category: "View",
									metadata: { description: (0, b.localize)(2931, null) },
									f1: !0,
								});
							}
							run(k) {
								const L = k.get(f.$gj),
									D = !L.getValue("workbench.tree.enableStickyScroll");
								L.updateValue("workbench.tree.enableStickyScroll", D);
							}
						},
					);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	