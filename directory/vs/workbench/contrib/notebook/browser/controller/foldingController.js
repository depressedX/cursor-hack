import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../common/notebookContextKeys.js';
import '../notebookBrowser.js';
import '../viewModel/foldingModel.js';
import '../../common/notebookCommon.js';
import '../notebookEditorExtensions.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/contextkey/common/contextkeys.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../services/editor/common/editorService.js';
import './coreActions.js';
import '../../../../../nls.js';
define(
			de[1031],
			he([1, 0, 3, 176, 108, 1841, 70, 330, 11, 8, 179, 27, 43, 18, 238, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*notebookContextKeys*/,
 w /*notebookBrowser*/,
 E /*foldingModel*/,
 C /*notebookCommon*/,
 d /*notebookEditorExtensions*/,
 m /*actions*/,
 r /*contextkey*/,
 u /*contextkeys*/,
 a /*keyCodes*/,
 h /*keybindingsRegistry*/,
 c /*editorService*/,
 n /*coreActions*/,
 g /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$83b = void 0);
				class p extends t.$1c {
					static {
						this.id = "workbench.notebook.foldingController";
					}
					constructor(l) {
						super(),
							(this.c = l),
							(this.a = null),
							(this.b = this.D(new t.$Zc())),
							this.D(
								this.c.onMouseUp((y) => {
									this.onMouseUp(y);
								}),
							),
							this.D(
								this.c.onDidChangeModel(() => {
									this.b.clear(),
										this.c.hasModel() &&
											(this.b.add(
												this.c.onDidChangeCellState((y) => {
													y.source.editStateChanged &&
														y.cell.cellKind === C.CellKind.Markup &&
														this.a?.recompute();
												}),
											),
											(this.a = new E.$3Nb()),
											this.b.add(this.a),
											this.a.attachViewModel(this.c.getViewModel()),
											this.b.add(
												this.a.onDidFoldingRegionChanged(() => {
													this.f();
												}),
											));
								}),
							);
					}
					saveViewState() {
						return this.a?.getMemento() || [];
					}
					restoreViewState(l) {
						this.a?.applyMemento(l || []), this.f();
					}
					setFoldingStateDown(l, y, $) {
						const v = y === w.CellFoldingState.Collapsed,
							S = this.a.getRegionAtLine(l + 1),
							I = [];
						if (S && (S.isCollapsed !== v && I.push(S), $ > 1)) {
							const T = this.a.getRegionsInside(
								S,
								(P, k) => P.isCollapsed !== v && k < $,
							);
							I.push(...T);
						}
						I.forEach((T) =>
							this.a.setCollapsed(
								T.regionIndex,
								y === w.CellFoldingState.Collapsed,
							),
						),
							this.f();
					}
					setFoldingStateUp(l, y, $) {
						if (!this.a) return;
						this.a
							.getAllRegionsAtLine(
								l + 1,
								(S, I) =>
									S.isCollapsed !== (y === w.CellFoldingState.Collapsed) &&
									I <= $,
							)
							.forEach((S) =>
								this.a.setCollapsed(
									S.regionIndex,
									y === w.CellFoldingState.Collapsed,
								),
							),
							this.f();
					}
					f() {
						if (!this.a || !this.c.hasModel()) return;
						const l = this.c.getViewModel();
						l.updateFoldingRanges(this.a.regions);
						const y = l.getHiddenRanges();
						this.c.setHiddenAreas(y);
					}
					onMouseUp(l) {
						if (!l.event.target || !this.c.hasModel()) return;
						const y = this.c.getViewModel(),
							$ = l.event.target;
						if (
							$.classList.contains("codicon-notebook-collapsed") ||
							$.classList.contains("codicon-notebook-expanded")
						) {
							if (
								!$.parentElement.classList.contains(
									"notebook-folding-indicator",
								)
							)
								return;
							const S = l.target,
								I = y.getCellIndex(S),
								T = y.getFoldingState(I);
							if (T === w.CellFoldingState.None) return;
							this.setFoldingStateUp(
								I,
								T === w.CellFoldingState.Collapsed
									? w.CellFoldingState.Expanded
									: w.CellFoldingState.Collapsed,
								1,
							),
								this.c.focusElement(S);
						}
					}
				}
				(e.$83b = p), (0, d.$PKb)(p.id, p);
				const o = (0, g.localize)(7912, null),
					f = (0, g.localize2)(7913, "Unfold Cell"),
					b = {
						args: [
							{
								isOptional: !0,
								name: "index",
								description: "The cell index",
								schema: {
									type: "object",
									required: ["index", "direction"],
									properties: {
										index: { type: "number" },
										direction: {
											type: "string",
											enum: ["up", "down"],
											default: "down",
										},
										levels: { type: "number", default: 1 },
									},
								},
							},
						],
					};
				(0, m.$4X)(
					class extends m.$3X {
						constructor() {
							super({
								id: "notebook.fold",
								title: (0, g.localize2)(7914, "Fold Cell"),
								category: n.$p5b,
								keybinding: {
									when: r.$Kj.and(i.$pJb, r.$Kj.not(u.$aMb)),
									primary:
										a.KeyMod.CtrlCmd | a.KeyMod.Shift | a.KeyCode.BracketLeft,
									mac: {
										primary:
											a.KeyMod.CtrlCmd | a.KeyMod.Alt | a.KeyCode.BracketLeft,
										secondary: [a.KeyCode.LeftArrow],
									},
									secondary: [a.KeyCode.LeftArrow],
									weight: h.KeybindingWeight.WorkbenchContrib,
								},
								metadata: { description: o, args: b.args },
								precondition: i.$mJb,
								f1: !0,
							});
						}
						async run(s, l) {
							const y = s.get(c.$IY),
								$ = (0, w.$eJb)(y.activeEditorPane);
							if (!$ || !$.hasModel()) return;
							const v = (l && l.levels) || 1,
								S = l && l.direction === "up" ? "up" : "down";
							let I;
							if (l) I = l.index;
							else {
								const P = $.getActiveCell();
								if (!P) return;
								I = $.getCellIndex(P);
							}
							const T = $.getContribution(p.id);
							if (I !== void 0) {
								if (
									(I < 0 || I >= $.getLength() ? void 0 : $.cellAt(I))
										?.cellKind === C.CellKind.Code &&
									S === "down"
								)
									return;
								S === "up"
									? T.setFoldingStateUp(I, w.CellFoldingState.Collapsed, v)
									: T.setFoldingStateDown(I, w.CellFoldingState.Collapsed, v);
								const k = $.getViewModel().getNearestVisibleCellIndexUpwards(I);
								$.focusElement($.cellAt(k));
							}
						}
					},
				),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: "notebook.unfold",
									title: f,
									category: n.$p5b,
									keybinding: {
										when: r.$Kj.and(i.$pJb, r.$Kj.not(u.$aMb)),
										primary:
											a.KeyMod.CtrlCmd |
											a.KeyMod.Shift |
											a.KeyCode.BracketRight,
										mac: {
											primary:
												a.KeyMod.CtrlCmd |
												a.KeyMod.Alt |
												a.KeyCode.BracketRight,
											secondary: [a.KeyCode.RightArrow],
										},
										secondary: [a.KeyCode.RightArrow],
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
									metadata: { description: f, args: b.args },
									precondition: i.$mJb,
									f1: !0,
								});
							}
							async run(s, l) {
								const y = s.get(c.$IY),
									$ = (0, w.$eJb)(y.activeEditorPane);
								if (!$) return;
								const v = (l && l.levels) || 1,
									S = l && l.direction === "up" ? "up" : "down";
								let I;
								if (l) I = l.index;
								else {
									const P = $.getActiveCell();
									if (!P) return;
									I = $.getCellIndex(P);
								}
								const T = $.getContribution(p.id);
								I !== void 0 &&
									(S === "up"
										? T.setFoldingStateUp(I, w.CellFoldingState.Expanded, v)
										: T.setFoldingStateDown(I, w.CellFoldingState.Expanded, v));
							}
						},
					);
			},
		)
