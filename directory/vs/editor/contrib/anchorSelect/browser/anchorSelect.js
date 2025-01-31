import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/keyCodes.js';
import '../../../browser/editorExtensions.js';
import '../../../common/core/selection.js';
import '../../../common/editorContextKeys.js';
import '../../../common/model.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../css!vs/editor/contrib/anchorSelect/browser/anchorSelect.js';
define(
			de[2800],
			he([1, 0, 127, 94, 27, 46, 104, 71, 64, 4, 8, 43, 2284]),
			function (ce /*require*/,
 e /*exports*/,
 t /*aria*/,
 i /*htmlContent*/,
 w /*keyCodes*/,
 E /*editorExtensions*/,
 C /*selection*/,
 d /*editorContextKeys*/,
 m /*model*/,
 r /*nls*/,
 u /*contextkey*/,
 a /*keybindingsRegistry*/) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dzb = void 0),
					(e.$dzb = new u.$5j("selectionAnchorSet", !1));
				let c = class {
					static {
						h = this;
					}
					static {
						this.ID = "editor.contrib.selectionAnchorController";
					}
					static get(b) {
						return b.getContribution(h.ID);
					}
					constructor(b, s) {
						(this.d = b),
							(this.b = e.$dzb.bindTo(s)),
							(this.c = b.onDidChangeModel(() => this.b.reset()));
					}
					setSelectionAnchor() {
						if (this.d.hasModel()) {
							const b = this.d.getPosition();
							this.d.changeDecorations((s) => {
								this.a && s.removeDecoration(this.a),
									(this.a = s.addDecoration(C.$kL.fromPositions(b, b), {
										description: "selection-anchor",
										stickiness:
											m.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
										hoverMessage: new i.$cl().appendText(
											(0, r.localize)(859, null),
										),
										className: "selection-anchor",
									}));
							}),
								this.b.set(!!this.a),
								(0, t.$oib)((0, r.localize)(860, null, b.lineNumber, b.column));
						}
					}
					goToSelectionAnchor() {
						if (this.d.hasModel() && this.a) {
							const b = this.d.getModel().getDecorationRange(this.a);
							b && this.d.setPosition(b.getStartPosition());
						}
					}
					selectFromAnchorToCursor() {
						if (this.d.hasModel() && this.a) {
							const b = this.d.getModel().getDecorationRange(this.a);
							if (b) {
								const s = this.d.getPosition();
								this.d.setSelection(
									C.$kL.fromPositions(b.getStartPosition(), s),
								),
									this.cancelSelectionAnchor();
							}
						}
					}
					cancelSelectionAnchor() {
						if (this.a) {
							const b = this.a;
							this.d.changeDecorations((s) => {
								s.removeDecoration(b), (this.a = void 0);
							}),
								this.b.set(!1);
						}
					}
					dispose() {
						this.cancelSelectionAnchor(), this.c.dispose();
					}
				};
				c = h = Ne([j(1, u.$6j)], c);
				class n extends E.$itb {
					constructor() {
						super({
							id: "editor.action.setSelectionAnchor",
							label: (0, r.localize)(861, null),
							alias: "Set Selection Anchor",
							precondition: void 0,
							kbOpts: {
								kbExpr: d.EditorContextKeys.editorTextFocus,
								primary: (0, w.$os)(w.$ps, w.KeyMod.CtrlCmd | w.KeyCode.KeyB),
								mac: {
									primary: (0, w.$os)(w.$qs, w.KeyMod.CtrlCmd | w.KeyCode.KeyB),
								},
								weight: a.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(b, s) {
						c.get(s)?.setSelectionAnchor();
					}
				}
				class g extends E.$itb {
					constructor() {
						super({
							id: "editor.action.goToSelectionAnchor",
							label: (0, r.localize)(862, null),
							alias: "Go to Selection Anchor",
							precondition: e.$dzb,
						});
					}
					async run(b, s) {
						c.get(s)?.goToSelectionAnchor();
					}
				}
				class p extends E.$itb {
					constructor() {
						super({
							id: "editor.action.selectFromAnchorToCursor",
							label: (0, r.localize)(863, null),
							alias: "Select from Anchor to Cursor",
							precondition: e.$dzb,
							kbOpts: {
								kbExpr: d.EditorContextKeys.editorTextFocus,
								primary: (0, w.$os)(w.$ps, w.KeyMod.CtrlCmd | w.KeyCode.KeyK),
								mac: {
									primary: (0, w.$os)(w.$qs, w.KeyMod.CtrlCmd | w.KeyCode.KeyK),
								},
								weight: a.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(b, s) {
						c.get(s)?.selectFromAnchorToCursor();
					}
				}
				class o extends E.$itb {
					constructor() {
						super({
							id: "editor.action.cancelSelectionAnchor",
							label: (0, r.localize)(864, null),
							alias: "Cancel Selection Anchor",
							precondition: e.$dzb,
							kbOpts: {
								kbExpr: d.EditorContextKeys.editorTextFocus,
								primary: w.KeyCode.Escape,
								weight: a.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(b, s) {
						c.get(s)?.cancelSelectionAnchor();
					}
				}
				(0, E.$qtb)(c.ID, c, E.EditorContributionInstantiation.Lazy),
					(0, E.$ntb)(n),
					(0, E.$ntb)(g),
					(0, E.$ntb)(p),
					(0, E.$ntb)(o);
			},
		)
