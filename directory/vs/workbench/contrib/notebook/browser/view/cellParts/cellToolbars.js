import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/browser/ui/toolbar/toolbar.js';
import '../../../../../../base/common/async.js';
import '../../../../../../base/common/event.js';
import '../../../../../../base/common/marshallingIds.js';
import '../../../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/contextview/browser/contextView.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/keybinding/common/keybinding.js';
import './cellActionView.js';
import '../cellPart.js';
import './cellToolbarStickyScroll.js';
import '../../../../../../platform/actions/browser/toolbar.js';
import '../../../../../../base/browser/ui/hover/hoverDelegateFactory.js';
define(
			de[3098],
			he([
				1, 0, 7, 461, 15, 6, 221, 92, 11, 8, 49, 5, 39, 801, 294, 1741, 173, 95,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*toolbar*/,
 w /*async*/,
 E /*event*/,
 C /*marshallingIds*/,
 d /*menuEntryActionViewItem*/,
 m /*actions*/,
 r /*contextkey*/,
 u /*contextView*/,
 a /*instantiation*/,
 h /*keybinding*/,
 c /*cellActionView*/,
 n /*cellPart*/,
 g /*cellToolbarStickyScroll*/,
 p /*toolbar*/,
 o /*hoverDelegateFactory*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R3b = e.$Q3b = void 0),
					(t = mt(t));
				let f = class extends n.$B1b {
					constructor($, v, S, I, T, P, k) {
						super(),
							(this.f = $),
							(this.h = S),
							(this.j = I),
							(this.m = T),
							(this.n = P),
							(this.q = k);
					}
					r() {
						if (this.c) return this.c;
						const $ = this.D(
							new i.$jpb(this.h, this.m, {
								actionViewItemProvider: (I, T) => {
									if (I instanceof m.$2X)
										return this.f.notebookOptions.getDisplayOptions()
											.insertToolbarAlignment === "center"
											? this.j.createInstance(c.$M3b, I, {
													hoverDelegate: T.hoverDelegate,
												})
											: this.j.createInstance(d.$Lyb, I, {
													hoverDelegate: T.hoverDelegate,
												});
								},
							}),
						);
						this.c = $;
						const v = this.D(
								this.q.createMenu(
									this.f.creationOptions.menuIds.cellInsertToolbar,
									this.n,
								),
							),
							S = () => {
								const I = s(v);
								$.setActions(I.primary, I.secondary);
							};
						return (
							this.D(v.onDidChange(() => S())),
							this.D(
								this.f.notebookOptions.onDidChangeOptions((I) => {
									I.insertToolbarAlignment && S();
								}),
							),
							S(),
							$
						);
					}
					didRenderCell($) {
						const v = this.r();
						this.f.hasModel() &&
							(v.context = {
								ui: !0,
								cell: $,
								notebookEditor: this.f,
								source: "insertToolbar",
								$mid: C.MarshalledId.NotebookCellActionContext,
							}),
							this.updateInternalLayoutNow($);
					}
					updateInternalLayoutNow($) {
						const v = $.layoutInfo.bottomToolbarOffset;
						this.h.style.transform = `translateY(${v}px)`;
					}
				};
				(e.$Q3b = f),
					(e.$Q3b = f =
						Ne([j(3, a.$Li), j(4, u.$Xxb), j(5, r.$6j), j(6, m.$YX)], f));
				let b = class extends n.$B1b {
					get hasActions() {
						return this.c
							? this.c.actions.primary.length +
									this.c.actions.secondary.length +
									this.c.deleteActions.primary.length +
									this.c.deleteActions.secondary.length >
									0
							: !1;
					}
					constructor($, v, S, I, T, P, k, L) {
						super(),
							(this.j = $),
							(this.m = v),
							(this.n = S),
							(this.q = I),
							(this.r = T),
							(this.s = P),
							(this.t = k),
							(this.u = L),
							(this.h = this.D(new E.$re())),
							(this.onDidUpdateActions = this.h.event);
					}
					w() {
						if (this.c) return this.c;
						const $ = this.D(this.t.createMenu(this.n, this.s)),
							v = this.D(this.t.createMenu(this.q, this.s)),
							S = s($),
							I = s(v);
						return (
							(this.c = {
								titleMenu: $,
								actions: S,
								deleteMenu: v,
								deleteActions: I,
							}),
							this.c
						);
					}
					y($, v) {
						if (this.f) return this.f;
						const S = this.D((0, o.$dib)()),
							I = this.D(
								this.u.createInstance(p.$Syb, this.j, {
									actionViewItemProvider: (P, k) => (0, d.$Pyb)(this.u, P, k),
									renderDropdownAsChildElement: !0,
									hoverDelegate: S,
								}),
							),
							T = this.D(
								this.u.invokeFunction((P) =>
									l(P, this.j, S, "cell-delete-toolbar"),
								),
							);
						return (
							($.deleteActions.primary.length !== 0 ||
								$.deleteActions.secondary.length !== 0) &&
								T.setActions(
									$.deleteActions.primary,
									$.deleteActions.secondary,
								),
							this.C(I, $.titleMenu, $.actions),
							this.C(T, $.deleteMenu, $.deleteActions),
							(this.f = { toolbar: I, deleteToolbar: T }),
							this.f
						);
					}
					prepareRenderCell($) {
						this.w();
					}
					didRenderCell($) {
						const v = this.w(),
							S = this.y(v, $);
						if (
							(this.b.add(
								(0, g.$P3b)(this.r, $, this.j, { extraOffset: 4, min: -14 }),
							),
							this.r.hasModel())
						) {
							const I = {
								ui: !0,
								cell: $,
								notebookEditor: this.r,
								source: "cellToolbar",
								$mid: C.MarshalledId.NotebookCellActionContext,
							};
							this.z(S, I);
						}
					}
					z($, v) {
						($.toolbar.context = v), ($.deleteToolbar.context = v);
					}
					C($, v, S) {
						let I = !1,
							T;
						this.F($, S),
							this.D(
								v.onDidChange(() => {
									if (I) {
										const k = s(v);
										T = () => this.F($, k);
										return;
									}
									const P = s(v);
									this.F($, P);
								}),
							),
							this.m.toggle("cell-toolbar-dropdown-active", !1),
							this.D(
								$.onDidChangeDropdownVisibility((P) => {
									(I = P),
										this.m.toggle("cell-toolbar-dropdown-active", P),
										T &&
											!P &&
											((0, w.$Oh)(
												() => {
													T?.();
												},
												0,
												this.B,
											),
											(T = void 0));
								}),
							);
					}
					F($, v) {
						const S = t.$Lgb($.getElement());
						$.setActions(v.primary, v.secondary),
							S && this.r.focus(),
							v.primary.length || v.secondary.length
								? (this.m.toggle("cell-has-toolbar-actions", !0), this.h.fire())
								: (this.m.toggle("cell-has-toolbar-actions", !1),
									this.h.fire());
					}
				};
				(e.$R3b = b),
					(e.$R3b = b = Ne([j(5, r.$6j), j(6, m.$YX), j(7, a.$Li)], b));
				function s(y) {
					const S = { primary: [], secondary: [] };
					return (
						(0, d.$Kyb)(y, { shouldForwardArgs: !0 }, S, (I) =>
							/^inline/.test(I),
						),
						S
					);
				}
				function l(y, $, v, S) {
					const I = y.get(u.$Xxb),
						T = y.get(h.$uZ),
						P = y.get(a.$Li),
						k = new i.$jpb($, I, {
							getKeyBinding: (L) => T.lookupKeybinding(L.id),
							actionViewItemProvider: (L, D) => (0, d.$Pyb)(P, L, D),
							renderDropdownAsChildElement: !0,
							hoverDelegate: v,
						});
					return S && k.getElement().classList.add(S), k;
				}
			},
		)
