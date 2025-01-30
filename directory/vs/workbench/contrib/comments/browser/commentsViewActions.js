import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/event.js';
import './comments.js';
import '../../../../platform/actions/common/actions.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import './commentsTreeViewer.js';
import '../../../common/contextkeys.js';
import '../../../browser/parts/views/viewFilter.js';
import '../../../../base/common/codicons.js';
define(
			de[3812],
			he([1, 0, 27, 3, 4, 8, 6, 1724, 11, 146, 43, 683, 100, 1224, 14]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*lifecycle*/,
 w /*nls*/,
 E /*contextkey*/,
 C /*event*/,
 d /*comments*/,
 m /*actions*/,
 r /*viewPane*/,
 u /*keybindingsRegistry*/,
 a /*commentsTreeViewer*/,
 h /*contextkeys*/,
 c /*viewFilter*/,
 n /*codicons*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gpc = e.CommentsSortOrder = void 0);
				var g;
				(function (l) {
					(l.ResourceAscending = "resourceAscending"),
						(l.UpdatedAtDescending = "updatedAtDescending");
				})(g || (e.CommentsSortOrder = g = {}));
				const p = new E.$5j("commentsView.showResolvedFilter", !0),
					o = new E.$5j("commentsView.showUnResolvedFilter", !0),
					f = new E.$5j("commentsView.sortBy", g.ResourceAscending);
				class b extends i.$1c {
					constructor(y, $) {
						super(),
							(this.b = $),
							(this.a = this.D(new C.$re())),
							(this.onDidChange = this.a.event),
							(this.c = o.bindTo(this.b)),
							(this.f = p.bindTo(this.b)),
							(this.g = f.bindTo(this.b)),
							this.f.set(y.showResolved),
							this.c.set(y.showUnresolved),
							this.g.set(y.sortBy);
					}
					get showUnresolved() {
						return !!this.c.get();
					}
					set showUnresolved(y) {
						this.c.get() !== y &&
							(this.c.set(y), this.a.fire({ showUnresolved: !0 }));
					}
					get showResolved() {
						return !!this.f.get();
					}
					set showResolved(y) {
						this.f.get() !== y &&
							(this.f.set(y), this.a.fire({ showResolved: !0 }));
					}
					get sortBy() {
						return this.g.get() ?? g.ResourceAscending;
					}
					set sortBy(y) {
						this.g.get() !== y && (this.g.set(y), this.a.fire({ sortBy: y }));
					}
				}
				(e.$gpc = b),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: "commentsFocusViewFromFilter",
									title: (0, w.localize)(5077, null),
									keybinding: {
										when: d.$hpc,
										weight: u.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyMod.CtrlCmd | t.KeyCode.DownArrow,
									},
									viewId: a.$$oc,
								});
							}
							async runInView(l, y) {
								y.focus();
							}
						},
					),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: "commentsClearFilterText",
									title: (0, w.localize)(5078, null),
									keybinding: {
										when: d.$hpc,
										weight: u.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyCode.Escape,
									},
									viewId: a.$$oc,
								});
							}
							async runInView(l, y) {
								y.clearFilterText();
							}
						},
					),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: "commentsFocusFilter",
									title: (0, w.localize)(5079, null),
									keybinding: {
										when: h.$zQb.isEqualTo(a.$$oc),
										weight: u.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyF,
									},
									viewId: a.$$oc,
								});
							}
							async runInView(l, y) {
								y.focusFilter();
							}
						},
					),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: `workbench.actions.${a.$$oc}.toggleUnResolvedComments`,
									title: (0, w.localize)(5080, null),
									category: (0, w.localize)(5081, null),
									toggled: { condition: o, title: (0, w.localize)(5082, null) },
									menu: {
										id: c.$OMb,
										group: "1_filter",
										when: E.$Kj.equals("view", a.$$oc),
										order: 1,
									},
									viewId: a.$$oc,
								});
							}
							async runInView(l, y) {
								y.filters.showUnresolved = !y.filters.showUnresolved;
							}
						},
					),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: `workbench.actions.${a.$$oc}.toggleResolvedComments`,
									title: (0, w.localize)(5083, null),
									category: (0, w.localize)(5084, null),
									toggled: { condition: p, title: (0, w.localize)(5085, null) },
									menu: {
										id: c.$OMb,
										group: "1_filter",
										when: E.$Kj.equals("view", a.$$oc),
										order: 1,
									},
									viewId: a.$$oc,
								});
							}
							async runInView(l, y) {
								y.filters.showResolved = !y.filters.showResolved;
							}
						},
					);
				const s = new m.$XX("submenu.filter.commentSort");
				m.$ZX.appendMenuItem(c.$OMb, {
					submenu: s,
					title: (0, w.localize)(5086, null),
					group: "2_sort",
					icon: n.$ak.history,
					when: E.$Kj.equals("view", a.$$oc),
				}),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: `workbench.actions.${a.$$oc}.toggleSortByUpdatedAt`,
									title: (0, w.localize)(5087, null),
									category: (0, w.localize)(5088, null),
									icon: n.$ak.history,
									viewId: a.$$oc,
									toggled: {
										condition: E.$Kj.equals(f.key, g.UpdatedAtDescending),
										title: (0, w.localize)(5089, null),
									},
									menu: {
										id: s,
										group: "navigation",
										order: 1,
										isHiddenByDefault: !1,
									},
								});
							}
							async runInView(l, y) {
								y.filters.sortBy = g.UpdatedAtDescending;
							}
						},
					),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: `workbench.actions.${a.$$oc}.toggleSortByResource`,
									title: (0, w.localize)(5090, null),
									category: (0, w.localize)(5091, null),
									icon: n.$ak.history,
									viewId: a.$$oc,
									toggled: {
										condition: E.$Kj.equals(f.key, g.ResourceAscending),
										title: (0, w.localize)(5092, null),
									},
									menu: {
										id: s,
										group: "navigation",
										order: 0,
										isHiddenByDefault: !1,
									},
								});
							}
							async runInView(l, y) {
								y.filters.sortBy = g.ResourceAscending;
							}
						},
					);
			},
		),
		