import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/types.js';
import '../../../platform/instantiation/common/extensions.js';
import '../../../platform/instantiation/common/instantiation.js';
import './auxiliarybar/auxiliaryBarPart.js';
import './panel/panelPart.js';
import './sidebar/sidebarPart.js';
import '../../common/views.js';
import '../../services/panecomposite/browser/panecomposite.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../base/common/constants.js';
import './sidebar/sidebarPart2.js';
define(
			de[4122],
			he([1, 0, 6, 28, 20, 5, 1938, 1939, 1940, 60, 142, 3, 10, 58, 4121]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*types*/,
 w /*extensions*/,
 E /*instantiation*/,
 C /*auxiliaryBarPart*/,
 d /*panelPart*/,
 m /*sidebarPart*/,
 r /*views*/,
 u /*panecomposite*/,
 a /*lifecycle*/,
 h /*configuration*/,
 c /*constants*/,
 n /*sidebarPart2*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0uc = void 0);
				let g = class extends a.$1c {
					constructor(o, f) {
						super(), (this.a = new Map());
						const b = f.getValue(c.$LW),
							s = o.createInstance(d.$Quc),
							l = o.createInstance(C.$Puc),
							y =
								b === "vertical"
									? { case: "vertical", v: o.createInstance(m.$Uuc) }
									: { case: "horizontal", v: o.createInstance(n.$9uc) };
						this.a.set(r.ViewContainerLocation.Panel, s),
							this.a.set(r.ViewContainerLocation.Sidebar, y.v),
							this.a.set(r.ViewContainerLocation.AuxiliaryBar, l);
						const $ = this.D(new a.$Zc());
						(this.onDidPaneCompositeOpen = t.Event.any(
							...r.$I1.map((v) =>
								t.Event.map(
									this.a.get(v).onDidPaneCompositeOpen,
									(S) => ({ composite: S, viewContainerLocation: v }),
									$,
								),
							),
						)),
							(this.onDidPaneCompositeClose = t.Event.any(
								...r.$I1.map((v) =>
									t.Event.map(
										this.a.get(v).onDidPaneCompositeClose,
										(S) => ({ composite: S, viewContainerLocation: v }),
										$,
									),
								),
							));
					}
					openPaneComposite(o, f, b) {
						return this.b(f).openPaneComposite(o, b);
					}
					getActivePaneComposite(o) {
						return this.b(o).getActivePaneComposite();
					}
					getPaneComposite(o, f) {
						return this.b(f).getPaneComposite(o);
					}
					getPaneComposites(o) {
						return this.b(o).getPaneComposites();
					}
					getPinnedPaneCompositeIds(o) {
						return this.b(o).getPinnedPaneCompositeIds();
					}
					getVisiblePaneCompositeIds(o) {
						return this.b(o).getVisiblePaneCompositeIds();
					}
					getProgressIndicator(o, f) {
						return this.b(f).getProgressIndicator(o);
					}
					hideActivePaneComposite(o) {
						this.b(o).hideActivePaneComposite();
					}
					getLastActivePaneCompositeId(o) {
						return this.b(o).getLastActivePaneCompositeId();
					}
					b(o) {
						return (0, i.$wg)(this.a.get(o));
					}
				};
				(e.$0uc = g),
					(e.$0uc = g = Ne([j(0, E.$Li), j(1, h.$gj)], g)),
					(0, w.$lK)(u.$6Sb, g, w.InstantiationType.Delayed);
			},
		)
