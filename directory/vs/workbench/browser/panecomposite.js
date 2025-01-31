import '../../../require.js';
import '../../../exports.js';
import '../../platform/registry/common/platform.js';
import './composite.js';
import '../../platform/instantiation/common/instantiation.js';
import '../../base/common/actions.js';
import '../../platform/actions/common/actions.js';
import '../../platform/contextview/browser/contextView.js';
import '../../platform/storage/common/storage.js';
import '../../platform/telemetry/common/telemetry.js';
import '../../platform/theme/common/themeService.js';
import '../../platform/workspace/common/workspace.js';
import './parts/views/viewPaneContainer.js';
import '../services/extensions/common/extensions.js';
import './parts/views/viewPane.js';
define(
			de[1056],
			he([1, 0, 30, 1701, 5, 50, 11, 49, 21, 32, 35, 25, 239, 53, 146]),
			function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*composite*/,
 w /*instantiation*/,
 E /*actions*/,
 C /*actions*/,
 d /*contextView*/,
 m /*storage*/,
 r /*telemetry*/,
 u /*themeService*/,
 a /*workspace*/,
 h /*viewPaneContainer*/,
 c /*extensions*/,
 n /*viewPane*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Sb = e.$4Sb = e.$3Sb = e.$2Sb = void 0);
				let g = class extends i.$gEb {
					constructor(b, s, l, y, $, v, S, I) {
						super(b, s, $, l),
							(this.b = l),
							(this.c = y),
							(this.f = v),
							(this.g = S),
							(this.j = I);
					}
					create(b) {
						super.create(b),
							(this.a = this.D(this.m(b))),
							this.D(this.a.onTitleAreaUpdate(() => this.R())),
							this.a.create(b);
					}
					setVisible(b) {
						super.setVisible(b), this.a?.setVisible(b);
					}
					layout(b) {
						this.a?.layout(b);
					}
					setBoundarySashes(b) {
						this.a?.setBoundarySashes(b);
					}
					getOptimalWidth() {
						return this.a?.getOptimalWidth() ?? 0;
					}
					openView(b, s) {
						return this.a?.openView(b, s);
					}
					getViewPaneContainer() {
						return this.a;
					}
					getActionsContext() {
						return this.getViewPaneContainer()?.getActionsContext();
					}
					getContextMenuActions() {
						return this.a?.menuActions?.getContextMenuActions() ?? [];
					}
					getMenuIds() {
						const b = [];
						return (
							this.a?.menuActions &&
								(b.push(this.a.menuActions.menuId),
								this.a.isViewMergedWithContainer() &&
									b.push(this.a.panes[0].menuActions.menuId)),
							b
						);
					}
					getActions() {
						const b = [];
						if (
							this.a?.menuActions &&
							(b.push(...this.a.menuActions.getPrimaryActions()),
							this.a.isViewMergedWithContainer())
						) {
							const s = this.a.panes[0];
							s.shouldShowFilterInHeader() && b.push(n.$SMb),
								b.push(...s.menuActions.getPrimaryActions());
						}
						return b;
					}
					getSecondaryActions() {
						if (!this.a?.menuActions) return [];
						const b = this.a.isViewMergedWithContainer()
							? this.a.panes[0].menuActions.getSecondaryActions()
							: [];
						let s = this.a.menuActions.getSecondaryActions();
						const l = s.findIndex(
							(y) => y instanceof C.$1X && y.item.submenu === h.$YSb,
						);
						if (l !== -1) {
							const y = s[l];
							y.actions.some(({ enabled: $ }) => $)
								? s.length === 1 && b.length === 0
									? (s = y.actions.slice())
									: l !== 0 && (s = [y, ...s.slice(0, l), ...s.slice(l + 1)])
								: s.splice(l, 1);
						}
						return s.length && b.length
							? [...s, new E.$tj(), ...b]
							: s.length
								? s
								: b;
					}
					getActionViewItem(b, s) {
						return this.a?.getActionViewItem(b, s);
					}
					getTitle() {
						return this.a?.getTitle() ?? "";
					}
					focus() {
						super.focus(), this.a?.focus();
					}
				};
				(e.$2Sb = g),
					(e.$2Sb = g =
						Ne(
							[
								j(1, r.$km),
								j(2, m.$lq),
								j(3, w.$Li),
								j(4, u.$iP),
								j(5, d.$Xxb),
								j(6, c.$q2),
								j(7, a.$Vi),
							],
							g,
						));
				class p extends i.$hEb {
					static create(b, s, l, y, $, v, S) {
						return new p(b, s, l, y, $, v, S);
					}
					constructor(b, s, l, y, $, v, S) {
						super(b, s, l, y, $, v), (this.iconUrl = S);
					}
				}
				(e.$3Sb = p),
					(e.$4Sb = {
						Viewlets: "workbench.contributions.viewlets",
						Panels: "workbench.contributions.panels",
						Auxiliary: "workbench.contributions.auxiliary",
					});
				class o extends i.$iEb {
					registerPaneComposite(b) {
						super.f(b);
					}
					deregisterPaneComposite(b) {
						super.g(b);
					}
					getPaneComposite(b) {
						return this.getComposite(b);
					}
					getPaneComposites() {
						return this.h();
					}
				}
				(e.$5Sb = o),
					t.$Io.add(e.$4Sb.Viewlets, new o()),
					t.$Io.add(e.$4Sb.Panels, new o()),
					t.$Io.add(e.$4Sb.Auxiliary, new o());
			},
		)
