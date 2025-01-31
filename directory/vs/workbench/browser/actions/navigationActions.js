import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../services/editor/common/editorGroupsService.js';
import '../../services/layout/browser/layoutService.js';
import '../../../platform/actions/common/actions.js';
import '../../../platform/action/common/actionCommonCategories.js';
import '../../../base/browser/ui/grid/grid.js';
import '../../../base/common/keyCodes.js';
import '../../services/editor/common/editorService.js';
import '../../services/panecomposite/browser/panecomposite.js';
import '../../common/views.js';
import '../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/window.js';
define(
			de[3526],
			he([1, 0, 4, 66, 96, 11, 99, 759, 27, 18, 142, 60, 43, 7, 75]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*editorGroupsService*/,
 w /*layoutService*/,
 E /*actions*/,
 C /*actionCommonCategories*/,
 d /*grid*/,
 m /*keyCodes*/,
 r /*editorService*/,
 u /*panecomposite*/,
 a /*views*/,
 h /*keybindingsRegistry*/,
 c /*dom*/,
 n /*window*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class g extends E.$3X {
					constructor(f, b) {
						super(f), (this.a = b);
					}
					run(f) {
						const b = f.get(w.$mEb),
							s = f.get(i.$EY),
							l = f.get(u.$6Sb),
							y = b.hasFocus(w.Parts.EDITOR_PART),
							$ = b.hasFocus(w.Parts.PANEL_PART),
							v = b.hasFocus(w.Parts.SIDEBAR_PART),
							S = b.hasFocus(w.Parts.AUXILIARYBAR_PART);
						let I;
						if (y) {
							if (this.e(this.h(this.a), s)) return;
							I = b.getVisibleNeighborPart(w.Parts.EDITOR_PART, this.a);
						}
						$ && (I = b.getVisibleNeighborPart(w.Parts.PANEL_PART, this.a)),
							v && (I = b.getVisibleNeighborPart(w.Parts.SIDEBAR_PART, this.a)),
							S &&
								(I = I =
									b.getVisibleNeighborPart(w.Parts.AUXILIARYBAR_PART, this.a)),
							I === w.Parts.EDITOR_PART
								? this.g(this.h(this.a), s) ||
									this.f(
										this.a === d.Direction.Right
											? i.GroupLocation.FIRST
											: i.GroupLocation.LAST,
										s,
									)
								: I === w.Parts.SIDEBAR_PART
									? this.c(b, l)
									: I === w.Parts.PANEL_PART
										? this.b(b, l)
										: I === w.Parts.AUXILIARYBAR_PART && this.d(b, l);
					}
					async b(f, b) {
						if (!f.isVisible(w.Parts.PANEL_PART)) return !1;
						const s = b.getActivePaneComposite(a.ViewContainerLocation.Panel);
						if (!s) return !1;
						const l = s.getId(),
							y = await b.openPaneComposite(
								l,
								a.ViewContainerLocation.Panel,
								!0,
							);
						return y || !1;
					}
					async c(f, b) {
						if (!f.isVisible(w.Parts.SIDEBAR_PART)) return !1;
						const s = b.getActivePaneComposite(a.ViewContainerLocation.Sidebar);
						if (!s) return !1;
						const l = s.getId();
						return !!(await b.openPaneComposite(
							l,
							a.ViewContainerLocation.Sidebar,
							!0,
						));
					}
					async d(f, b) {
						if (!f.isVisible(w.Parts.AUXILIARYBAR_PART)) return !1;
						const s = b.getActivePaneComposite(
							a.ViewContainerLocation.AuxiliaryBar,
						);
						if (!s) return !1;
						const l = s.getId(),
							y = await b.openPaneComposite(
								l,
								a.ViewContainerLocation.AuxiliaryBar,
								!0,
							);
						return y || !1;
					}
					e(f, b) {
						return this.j({ direction: f }, b);
					}
					f(f, b) {
						return this.j({ location: f }, b);
					}
					g(f, b) {
						if (!b.activeGroup) return !1;
						const s = this.i(f);
						return b.findGroup({ direction: s }, b.activeGroup)
							? !1
							: (b.activeGroup.focus(), !0);
					}
					h(f) {
						switch (f) {
							case d.Direction.Down:
								return i.GroupDirection.DOWN;
							case d.Direction.Left:
								return i.GroupDirection.LEFT;
							case d.Direction.Right:
								return i.GroupDirection.RIGHT;
							case d.Direction.Up:
								return i.GroupDirection.UP;
						}
					}
					i(f) {
						switch (f) {
							case i.GroupDirection.UP:
								return i.GroupDirection.DOWN;
							case i.GroupDirection.RIGHT:
								return i.GroupDirection.LEFT;
							case i.GroupDirection.LEFT:
								return i.GroupDirection.RIGHT;
							case i.GroupDirection.DOWN:
								return i.GroupDirection.UP;
						}
					}
					j(f, b) {
						const s = b.findGroup(f, b.activeGroup);
						return s ? (s.focus(), !0) : !1;
					}
				}
				(0, E.$4X)(
					class extends g {
						constructor() {
							super(
								{
									id: "workbench.action.navigateLeft",
									title: (0, t.localize2)(
										2933,
										"Navigate to the View on the Left",
									),
									category: C.$ck.View,
									f1: !0,
								},
								d.Direction.Left,
							);
						}
					},
				),
					(0, E.$4X)(
						class extends g {
							constructor() {
								super(
									{
										id: "workbench.action.navigateRight",
										title: (0, t.localize2)(
											2934,
											"Navigate to the View on the Right",
										),
										category: C.$ck.View,
										f1: !0,
									},
									d.Direction.Right,
								);
							}
						},
					),
					(0, E.$4X)(
						class extends g {
							constructor() {
								super(
									{
										id: "workbench.action.navigateUp",
										title: (0, t.localize2)(2935, "Navigate to the View Above"),
										category: C.$ck.View,
										f1: !0,
									},
									d.Direction.Up,
								);
							}
						},
					),
					(0, E.$4X)(
						class extends g {
							constructor() {
								super(
									{
										id: "workbench.action.navigateDown",
										title: (0, t.localize2)(2936, "Navigate to the View Below"),
										category: C.$ck.View,
										f1: !0,
									},
									d.Direction.Down,
								);
							}
						},
					);
				class p extends E.$3X {
					constructor(f, b) {
						super(f), (this.a = b);
					}
					run(f) {
						const b = f.get(w.$mEb),
							s = f.get(r.$IY);
						this.c(b, s, this.a);
					}
					b(f, b, s) {
						const l = (0, c.$Ogb)(),
							y = (0, n.$Dfb)(l);
						let $;
						if (y)
							switch (b) {
								case w.Parts.EDITOR_PART:
									$ = w.Parts.STATUSBAR_PART;
									break;
								default:
									$ = w.Parts.EDITOR_PART;
							}
						else
							switch (b) {
								case w.Parts.EDITOR_PART:
									$ = s ? w.Parts.PANEL_PART : w.Parts.SIDEBAR_PART;
									break;
								case w.Parts.PANEL_PART:
									$ = s ? w.Parts.AUXILIARYBAR_PART : w.Parts.EDITOR_PART;
									break;
								case w.Parts.AUXILIARYBAR_PART:
									$ = s ? w.Parts.STATUSBAR_PART : w.Parts.PANEL_PART;
									break;
								case w.Parts.STATUSBAR_PART:
									f.activityBarDirection === "vertical"
										? ($ = s
												? w.Parts.ACTIVITYBAR_PART
												: w.Parts.AUXILIARYBAR_PART)
										: ($ = s ? w.Parts.SIDEBAR_PART : w.Parts.PANEL_PART);
									break;
								case w.Parts.ACTIVITYBAR_PART:
									$ = s ? w.Parts.SIDEBAR_PART : w.Parts.STATUSBAR_PART;
									break;
								case w.Parts.SIDEBAR_PART:
									f.activityBarDirection === "vertical"
										? ($ = s ? w.Parts.EDITOR_PART : w.Parts.ACTIVITYBAR_PART)
										: ($ = w.Parts.EDITOR_PART);
									break;
								default:
									$ = w.Parts.EDITOR_PART;
							}
						return f.isVisible($, l) || $ === w.Parts.EDITOR_PART
							? $
							: this.b(f, $, s);
					}
					c(f, b, s) {
						let l;
						b.activeEditorPane?.hasFocus() || f.hasFocus(w.Parts.EDITOR_PART)
							? (l = w.Parts.EDITOR_PART)
							: f.hasFocus(w.Parts.ACTIVITYBAR_PART)
								? (l = w.Parts.ACTIVITYBAR_PART)
								: f.hasFocus(w.Parts.STATUSBAR_PART)
									? (l = w.Parts.STATUSBAR_PART)
									: f.hasFocus(w.Parts.SIDEBAR_PART)
										? (l = w.Parts.SIDEBAR_PART)
										: f.hasFocus(w.Parts.AUXILIARYBAR_PART)
											? (l = w.Parts.AUXILIARYBAR_PART)
											: f.hasFocus(w.Parts.PANEL_PART) &&
												(l = w.Parts.PANEL_PART),
							f.focusPart(
								l ? this.b(f, l, s) : w.Parts.EDITOR_PART,
								(0, c.$Ogb)(),
							);
					}
				}
				(0, E.$4X)(
					class extends p {
						constructor() {
							super(
								{
									id: "workbench.action.focusNextPart",
									title: (0, t.localize2)(2937, "Focus Next Part"),
									category: C.$ck.View,
									f1: !0,
									keybinding: {
										primary: m.KeyCode.F6,
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
								},
								!0,
							);
						}
					},
				),
					(0, E.$4X)(
						class extends p {
							constructor() {
								super(
									{
										id: "workbench.action.focusPreviousPart",
										title: (0, t.localize2)(2938, "Focus Previous Part"),
										category: C.$ck.View,
										f1: !0,
										keybinding: {
											primary: m.KeyMod.Shift | m.KeyCode.F6,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
									},
									!1,
								);
							}
						},
					);
			},
		)
