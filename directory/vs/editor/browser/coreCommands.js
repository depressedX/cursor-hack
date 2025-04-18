import '../../../require.js';
import '../../../exports.js';
import '../../nls.js';
import '../../base/browser/browser.js';
import '../../base/common/keyCodes.js';
import '../../base/common/types.js';
import '../../base/browser/ui/aria/aria.js';
import './editorExtensions.js';
import './services/codeEditorService.js';
import '../common/cursor/cursorColumnSelection.js';
import '../common/cursorCommon.js';
import '../common/cursor/cursorDeleteOperations.js';
import '../common/cursorEvents.js';
import '../common/cursor/cursorMoveCommands.js';
import '../common/cursor/cursorTypeOperations.js';
import '../common/core/position.js';
import '../common/core/range.js';
import '../common/editorCommon.js';
import '../common/editorContextKeys.js';
import '../common/viewEvents.js';
import '../../platform/contextkey/common/contextkey.js';
import '../../platform/keybinding/common/keybindingsRegistry.js';
import '../common/config/editorOptions.js';
import '../../base/browser/dom.js';
import '../common/cursor/cursorTypeEditOperations.js';
define(
			de[498],
			he([
				1, 0, 4, 139, 27, 28, 127, 46, 65, 2722, 346, 943, 248, 1193, 949, 48,
				17, 98, 71, 493, 8, 43, 38, 7, 948,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*browser*/,
				w /*keyCodes*/,
				E /*types*/,
				C /*aria*/,
				d /*editorExtensions*/,
				m /*codeEditorService*/,
				r /*cursorColumnSelection*/,
				u /*cursorCommon*/,
				a /*cursorDeleteOperations*/,
				h /*cursorEvents*/,
				c /*cursorMoveCommands*/,
				n /*cursorTypeOperations*/,
				g /*position*/,
				p /*range*/,
				o /*editorCommon*/,
				f /*editorContextKeys*/,
				b /*viewEvents*/,
				s /*contextkey*/,
				l /*keybindingsRegistry*/,
				y /*editorOptions*/,
				$ /*dom*/,
				v /*cursorTypeEditOperations*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.CoreEditingCommands =
						e.CoreNavigationCommands =
						e.NavigationCommandRevealType =
						e.RevealLine_ =
						e.EditorScroll_ =
						e.$aub =
							void 0),
					(t = mt(t)),
					(E = mt(E));
				const S = l.KeybindingWeight.EditorCore;
				class I extends d.$htb {
					runEditorCommand(z, F, x) {
						const H = F._getViewModel();
						H && this.runCoreEditorCommand(H, x || {});
					}
				}
				e.$aub = I;
				var T;
				(function (U) {
					const z = function (q) {
						if (!E.$ng(q)) return !1;
						const V = q;
						return !(
							!E.$lg(V.to) ||
							(!E.$sg(V.by) && !E.$lg(V.by)) ||
							(!E.$sg(V.value) && !E.$pg(V.value)) ||
							(!E.$sg(V.revealCursor) && !E.$rg(V.revealCursor))
						);
					};
					(U.metadata = {
						description: "Scroll editor in the given direction",
						args: [
							{
								name: "Editor scroll argument object",
								description:
									"Property-value pairs that can be passed through this argument:\n					* 'to': A mandatory direction value.\n						```\n						'up', 'down'\n						```\n					* 'by': Unit to move. Default is computed based on 'to' value.\n						```\n						'line', 'wrappedLine', 'page', 'halfPage', 'editor'\n						```\n					* 'value': Number of units to move. Default is '1'.\n					* 'revealCursor': If 'true' reveals the cursor if it is outside view port.\n				",
								constraint: z,
								schema: {
									type: "object",
									required: ["to"],
									properties: {
										to: { type: "string", enum: ["up", "down"] },
										by: {
											type: "string",
											enum: [
												"line",
												"wrappedLine",
												"page",
												"halfPage",
												"editor",
											],
										},
										value: { type: "number", default: 1 },
										revealCursor: { type: "boolean" },
									},
								},
							},
						],
					}),
						(U.RawDirection = {
							Up: "up",
							Right: "right",
							Down: "down",
							Left: "left",
						}),
						(U.RawUnit = {
							Line: "line",
							WrappedLine: "wrappedLine",
							Page: "page",
							HalfPage: "halfPage",
							Editor: "editor",
							Column: "column",
						});
					function F(q) {
						let V;
						switch (q.to) {
							case U.RawDirection.Up:
								V = x.Up;
								break;
							case U.RawDirection.Right:
								V = x.Right;
								break;
							case U.RawDirection.Down:
								V = x.Down;
								break;
							case U.RawDirection.Left:
								V = x.Left;
								break;
							default:
								return null;
						}
						let G;
						switch (q.by) {
							case U.RawUnit.Line:
								G = H.Line;
								break;
							case U.RawUnit.WrappedLine:
								G = H.WrappedLine;
								break;
							case U.RawUnit.Page:
								G = H.Page;
								break;
							case U.RawUnit.HalfPage:
								G = H.HalfPage;
								break;
							case U.RawUnit.Editor:
								G = H.Editor;
								break;
							case U.RawUnit.Column:
								G = H.Column;
								break;
							default:
								G = H.WrappedLine;
						}
						const K = Math.floor(q.value || 1),
							J = !!q.revealCursor;
						return {
							direction: V,
							unit: G,
							value: K,
							revealCursor: J,
							select: !!q.select,
						};
					}
					U.parse = F;
					let x;
					(function (q) {
						(q[(q.Up = 1)] = "Up"),
							(q[(q.Right = 2)] = "Right"),
							(q[(q.Down = 3)] = "Down"),
							(q[(q.Left = 4)] = "Left");
					})((x = U.Direction || (U.Direction = {})));
					let H;
					(function (q) {
						(q[(q.Line = 1)] = "Line"),
							(q[(q.WrappedLine = 2)] = "WrappedLine"),
							(q[(q.Page = 3)] = "Page"),
							(q[(q.HalfPage = 4)] = "HalfPage"),
							(q[(q.Editor = 5)] = "Editor"),
							(q[(q.Column = 6)] = "Column");
					})((H = U.Unit || (U.Unit = {})));
				})(T || (e.EditorScroll_ = T = {}));
				var P;
				(function (U) {
					const z = function (F) {
						if (!E.$ng(F)) return !1;
						const x = F;
						return !(
							(!E.$pg(x.lineNumber) && !E.$lg(x.lineNumber)) ||
							(!E.$sg(x.at) && !E.$lg(x.at))
						);
					};
					(U.metadata = {
						description: "Reveal the given line at the given logical position",
						args: [
							{
								name: "Reveal line argument object",
								description:
									"Property-value pairs that can be passed through this argument:\n					* 'lineNumber': A mandatory line number value.\n					* 'at': Logical position at which line has to be revealed.\n						```\n						'top', 'center', 'bottom'\n						```\n				",
								constraint: z,
								schema: {
									type: "object",
									required: ["lineNumber"],
									properties: {
										lineNumber: { type: ["number", "string"] },
										at: { type: "string", enum: ["top", "center", "bottom"] },
									},
								},
							},
						],
					}),
						(U.RawAtArgument = {
							Top: "top",
							Center: "center",
							Bottom: "bottom",
						});
				})(P || (e.RevealLine_ = P = {}));
				class k {
					constructor(z) {
						z.addImplementation(1e4, "code-editor", (F, x) => {
							const H = F.get(m.$dtb).getFocusedCodeEditor();
							return H && H.hasTextFocus()
								? this._runEditorCommand(F, H, x)
								: !1;
						}),
							z.addImplementation(1e3, "generic-dom-input-textarea", (F, x) => {
								const H = (0, $.$Jgb)();
								return H &&
									(["input", "textarea"].indexOf(H.tagName.toLowerCase()) >=
										0 ||
										((0, $.$Ygb)(H) && H.isContentEditable))
									? (this.runDOMCommand(H), !0)
									: !1;
							}),
							z.addImplementation(0, "generic-dom", (F, x) => {
								const H = F.get(m.$dtb).getActiveCodeEditor();
								return H ? (H.focus(), this._runEditorCommand(F, H, x)) : !1;
							});
					}
					_runEditorCommand(z, F, x) {
						const H = this.runEditorCommand(z, F, x);
						return H || !0;
					}
				}
				var L;
				(function (U) {
					(U[(U.Regular = 0)] = "Regular"),
						(U[(U.Minimal = 1)] = "Minimal"),
						(U[(U.None = 2)] = "None");
				})(L || (e.NavigationCommandRevealType = L = {}));
				var D;
				(function (U) {
					class z extends I {
						constructor(Z) {
							super(Z), (this.d = Z.inSelectionMode);
						}
						runCoreEditorCommand(Z, se) {
							if (!se.position) return;
							Z.model.pushStackElement(),
								Z.setCursorStates(se.source, h.CursorChangeReason.Explicit, [
									c.$Htb.moveTo(
										Z,
										Z.getPrimaryCursorState(),
										this.d,
										se.position,
										se.viewPosition,
									),
								]) &&
									se.revealType !== L.None &&
									Z.revealAllCursors(se.source, !0, !0);
						}
					}
					(U.MoveTo = (0, d.$mtb)(
						new z({ id: "_moveTo", inSelectionMode: !1, precondition: void 0 }),
					)),
						(U.MoveToSelect = (0, d.$mtb)(
							new z({
								id: "_moveToSelect",
								inSelectionMode: !0,
								precondition: void 0,
							}),
						));
					class F extends I {
						runCoreEditorCommand(Z, se) {
							Z.model.pushStackElement();
							const re = this.d(
								Z,
								Z.getPrimaryCursorState(),
								Z.getCursorColumnSelectData(),
								se,
							);
							re !== null &&
								(Z.setCursorStates(
									se.source,
									h.CursorChangeReason.Explicit,
									re.viewStates.map((le) => u.$ysb.fromViewState(le)),
								),
								Z.setCursorColumnSelectData({
									isReal: !0,
									fromViewLineNumber: re.fromLineNumber,
									fromViewVisualColumn: re.fromVisualColumn,
									toViewLineNumber: re.toLineNumber,
									toViewVisualColumn: re.toVisualColumn,
								}),
								re.reversed
									? Z.revealTopMostCursor(se.source)
									: Z.revealBottomMostCursor(se.source));
						}
					}
					(U.ColumnSelect = (0, d.$mtb)(
						new (class extends F {
							constructor() {
								super({ id: "columnSelect", precondition: void 0 });
							}
							d(Q, Z, se, re) {
								if (
									typeof re.position > "u" ||
									typeof re.viewPosition > "u" ||
									typeof re.mouseColumn > "u"
								)
									return null;
								const le = Q.model.validatePosition(re.position),
									oe = Q.coordinatesConverter.validateViewPosition(
										new g.$hL(
											re.viewPosition.lineNumber,
											re.viewPosition.column,
										),
										le,
									),
									ae = re.doColumnSelect
										? se.fromViewLineNumber
										: oe.lineNumber,
									pe = re.doColumnSelect
										? se.fromViewVisualColumn
										: re.mouseColumn - 1;
								return r.$vtb.columnSelect(
									Q.cursorConfig,
									Q,
									ae,
									pe,
									oe.lineNumber,
									re.mouseColumn - 1,
								);
							}
						})(),
					)),
						(U.CursorColumnSelectLeft = (0, d.$mtb)(
							new (class extends F {
								constructor() {
									super({
										id: "cursorColumnSelectLeft",
										precondition: void 0,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
											primary:
												w.KeyMod.CtrlCmd |
												w.KeyMod.Shift |
												w.KeyMod.Alt |
												w.KeyCode.LeftArrow,
											linux: { primary: 0 },
										},
									});
								}
								d(Q, Z, se, re) {
									return r.$vtb.columnSelectLeft(Q.cursorConfig, Q, se);
								}
							})(),
						)),
						(U.CursorColumnSelectRight = (0, d.$mtb)(
							new (class extends F {
								constructor() {
									super({
										id: "cursorColumnSelectRight",
										precondition: void 0,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
											primary:
												w.KeyMod.CtrlCmd |
												w.KeyMod.Shift |
												w.KeyMod.Alt |
												w.KeyCode.RightArrow,
											linux: { primary: 0 },
										},
									});
								}
								d(Q, Z, se, re) {
									return r.$vtb.columnSelectRight(Q.cursorConfig, Q, se);
								}
							})(),
						));
					class x extends F {
						constructor(Z) {
							super(Z), (this.e = Z.isPaged);
						}
						d(Z, se, re, le) {
							return r.$vtb.columnSelectUp(Z.cursorConfig, Z, re, this.e);
						}
					}
					(U.CursorColumnSelectUp = (0, d.$mtb)(
						new x({
							isPaged: !1,
							id: "cursorColumnSelectUp",
							precondition: void 0,
							kbOpts: {
								weight: S,
								kbExpr: f.EditorContextKeys.textInputFocus,
								primary:
									w.KeyMod.CtrlCmd |
									w.KeyMod.Shift |
									w.KeyMod.Alt |
									w.KeyCode.UpArrow,
								linux: { primary: 0 },
							},
						}),
					)),
						(U.CursorColumnSelectPageUp = (0, d.$mtb)(
							new x({
								isPaged: !0,
								id: "cursorColumnSelectPageUp",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary:
										w.KeyMod.CtrlCmd |
										w.KeyMod.Shift |
										w.KeyMod.Alt |
										w.KeyCode.PageUp,
									linux: { primary: 0 },
								},
							}),
						));
					class H extends F {
						constructor(Z) {
							super(Z), (this.e = Z.isPaged);
						}
						d(Z, se, re, le) {
							return r.$vtb.columnSelectDown(Z.cursorConfig, Z, re, this.e);
						}
					}
					(U.CursorColumnSelectDown = (0, d.$mtb)(
						new H({
							isPaged: !1,
							id: "cursorColumnSelectDown",
							precondition: void 0,
							kbOpts: {
								weight: S,
								kbExpr: f.EditorContextKeys.textInputFocus,
								primary:
									w.KeyMod.CtrlCmd |
									w.KeyMod.Shift |
									w.KeyMod.Alt |
									w.KeyCode.DownArrow,
								linux: { primary: 0 },
							},
						}),
					)),
						(U.CursorColumnSelectPageDown = (0, d.$mtb)(
							new H({
								isPaged: !0,
								id: "cursorColumnSelectPageDown",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary:
										w.KeyMod.CtrlCmd |
										w.KeyMod.Shift |
										w.KeyMod.Alt |
										w.KeyCode.PageDown,
									linux: { primary: 0 },
								},
							}),
						));
					class q extends I {
						constructor() {
							super({
								id: "cursorMove",
								precondition: void 0,
								metadata: c.CursorMove.metadata,
							});
						}
						runCoreEditorCommand(Z, se) {
							const re = c.CursorMove.parse(se);
							re && this.d(Z, se.source, re);
						}
						d(Z, se, re) {
							Z.model.pushStackElement(),
								Z.setCursorStates(
									se,
									h.CursorChangeReason.Explicit,
									q.e(Z, Z.getCursorStates(), re),
								),
								Z.revealAllCursors(se, !0);
						}
						static e(Z, se, re) {
							const le = re.select,
								oe = re.value;
							switch (re.direction) {
								case c.CursorMove.Direction.Left:
								case c.CursorMove.Direction.Right:
								case c.CursorMove.Direction.Up:
								case c.CursorMove.Direction.Down:
								case c.CursorMove.Direction.PrevBlankLine:
								case c.CursorMove.Direction.NextBlankLine:
								case c.CursorMove.Direction.WrappedLineStart:
								case c.CursorMove.Direction
									.WrappedLineFirstNonWhitespaceCharacter:
								case c.CursorMove.Direction.WrappedLineColumnCenter:
								case c.CursorMove.Direction.WrappedLineEnd:
								case c.CursorMove.Direction
									.WrappedLineLastNonWhitespaceCharacter:
									return c.$Htb.simpleMove(
										Z,
										se,
										re.direction,
										le,
										oe,
										re.unit,
									);
								case c.CursorMove.Direction.ViewPortTop:
								case c.CursorMove.Direction.ViewPortBottom:
								case c.CursorMove.Direction.ViewPortCenter:
								case c.CursorMove.Direction.ViewPortIfOutside:
									return c.$Htb.viewportMove(Z, se, re.direction, le, oe);
								default:
									return null;
							}
						}
					}
					(U.CursorMoveImpl = q), (U.CursorMove = (0, d.$mtb)(new q()));
					let V;
					(function (Q) {
						Q[(Q.PAGE_SIZE_MARKER = -1)] = "PAGE_SIZE_MARKER";
					})(V || (V = {}));
					class G extends I {
						constructor(Z) {
							super(Z), (this.d = Z.args);
						}
						runCoreEditorCommand(Z, se) {
							let re = this.d;
							this.d.value === V.PAGE_SIZE_MARKER &&
								(re = {
									direction: this.d.direction,
									unit: this.d.unit,
									select: this.d.select,
									value: se.pageSize || Z.cursorConfig.pageSize,
								}),
								Z.model.pushStackElement(),
								Z.setCursorStates(
									se.source,
									h.CursorChangeReason.Explicit,
									c.$Htb.simpleMove(
										Z,
										Z.getCursorStates(),
										re.direction,
										re.select,
										re.value,
										re.unit,
									),
								),
								Z.revealAllCursors(se.source, !0);
						}
					}
					(U.CursorLeft = (0, d.$mtb)(
						new G({
							args: {
								direction: c.CursorMove.Direction.Left,
								unit: c.CursorMove.Unit.None,
								select: !1,
								value: 1,
							},
							id: "cursorLeft",
							precondition: void 0,
							kbOpts: {
								weight: S,
								kbExpr: f.EditorContextKeys.textInputFocus,
								primary: w.KeyCode.LeftArrow,
								mac: {
									primary: w.KeyCode.LeftArrow,
									secondary: [w.KeyMod.WinCtrl | w.KeyCode.KeyB],
								},
							},
						}),
					)),
						(U.CursorLeftSelect = (0, d.$mtb)(
							new G({
								args: {
									direction: c.CursorMove.Direction.Left,
									unit: c.CursorMove.Unit.None,
									select: !0,
									value: 1,
								},
								id: "cursorLeftSelect",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyMod.Shift | w.KeyCode.LeftArrow,
								},
							}),
						)),
						(U.CursorRight = (0, d.$mtb)(
							new G({
								args: {
									direction: c.CursorMove.Direction.Right,
									unit: c.CursorMove.Unit.None,
									select: !1,
									value: 1,
								},
								id: "cursorRight",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyCode.RightArrow,
									mac: {
										primary: w.KeyCode.RightArrow,
										secondary: [w.KeyMod.WinCtrl | w.KeyCode.KeyF],
									},
								},
							}),
						)),
						(U.CursorRightSelect = (0, d.$mtb)(
							new G({
								args: {
									direction: c.CursorMove.Direction.Right,
									unit: c.CursorMove.Unit.None,
									select: !0,
									value: 1,
								},
								id: "cursorRightSelect",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyMod.Shift | w.KeyCode.RightArrow,
								},
							}),
						)),
						(U.CursorUp = (0, d.$mtb)(
							new G({
								args: {
									direction: c.CursorMove.Direction.Up,
									unit: c.CursorMove.Unit.WrappedLine,
									select: !1,
									value: 1,
								},
								id: "cursorUp",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyCode.UpArrow,
									mac: {
										primary: w.KeyCode.UpArrow,
										secondary: [w.KeyMod.WinCtrl | w.KeyCode.KeyP],
									},
								},
							}),
						)),
						(U.CursorUpSelect = (0, d.$mtb)(
							new G({
								args: {
									direction: c.CursorMove.Direction.Up,
									unit: c.CursorMove.Unit.WrappedLine,
									select: !0,
									value: 1,
								},
								id: "cursorUpSelect",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyMod.Shift | w.KeyCode.UpArrow,
									secondary: [
										w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.UpArrow,
									],
									mac: { primary: w.KeyMod.Shift | w.KeyCode.UpArrow },
									linux: { primary: w.KeyMod.Shift | w.KeyCode.UpArrow },
								},
							}),
						)),
						(U.CursorPageUp = (0, d.$mtb)(
							new G({
								args: {
									direction: c.CursorMove.Direction.Up,
									unit: c.CursorMove.Unit.WrappedLine,
									select: !1,
									value: V.PAGE_SIZE_MARKER,
								},
								id: "cursorPageUp",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyCode.PageUp,
								},
							}),
						)),
						(U.CursorPageUpSelect = (0, d.$mtb)(
							new G({
								args: {
									direction: c.CursorMove.Direction.Up,
									unit: c.CursorMove.Unit.WrappedLine,
									select: !0,
									value: V.PAGE_SIZE_MARKER,
								},
								id: "cursorPageUpSelect",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyMod.Shift | w.KeyCode.PageUp,
								},
							}),
						)),
						(U.CursorDown = (0, d.$mtb)(
							new G({
								args: {
									direction: c.CursorMove.Direction.Down,
									unit: c.CursorMove.Unit.WrappedLine,
									select: !1,
									value: 1,
								},
								id: "cursorDown",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyCode.DownArrow,
									mac: {
										primary: w.KeyCode.DownArrow,
										secondary: [w.KeyMod.WinCtrl | w.KeyCode.KeyN],
									},
								},
							}),
						)),
						(U.CursorDownSelect = (0, d.$mtb)(
							new G({
								args: {
									direction: c.CursorMove.Direction.Down,
									unit: c.CursorMove.Unit.WrappedLine,
									select: !0,
									value: 1,
								},
								id: "cursorDownSelect",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyMod.Shift | w.KeyCode.DownArrow,
									secondary: [
										w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.DownArrow,
									],
									mac: { primary: w.KeyMod.Shift | w.KeyCode.DownArrow },
									linux: { primary: w.KeyMod.Shift | w.KeyCode.DownArrow },
								},
							}),
						)),
						(U.CursorPageDown = (0, d.$mtb)(
							new G({
								args: {
									direction: c.CursorMove.Direction.Down,
									unit: c.CursorMove.Unit.WrappedLine,
									select: !1,
									value: V.PAGE_SIZE_MARKER,
								},
								id: "cursorPageDown",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyCode.PageDown,
								},
							}),
						)),
						(U.CursorPageDownSelect = (0, d.$mtb)(
							new G({
								args: {
									direction: c.CursorMove.Direction.Down,
									unit: c.CursorMove.Unit.WrappedLine,
									select: !0,
									value: V.PAGE_SIZE_MARKER,
								},
								id: "cursorPageDownSelect",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyMod.Shift | w.KeyCode.PageDown,
								},
							}),
						)),
						(U.CreateCursor = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({ id: "createCursor", precondition: void 0 });
								}
								runCoreEditorCommand(Q, Z) {
									if (!Z.position) return;
									let se;
									Z.wholeLine
										? (se = c.$Htb.line(
												Q,
												Q.getPrimaryCursorState(),
												!1,
												Z.position,
												Z.viewPosition,
											))
										: (se = c.$Htb.moveTo(
												Q,
												Q.getPrimaryCursorState(),
												!1,
												Z.position,
												Z.viewPosition,
											));
									const re = Q.getCursorStates();
									if (re.length > 1) {
										const le = se.modelState ? se.modelState.position : null,
											oe = se.viewState ? se.viewState.position : null;
										for (let ae = 0, pe = re.length; ae < pe; ae++) {
											const $e = re[ae];
											if (
												!(
													le && !$e.modelState.selection.containsPosition(le)
												) &&
												!(oe && !$e.viewState.selection.containsPosition(oe))
											) {
												re.splice(ae, 1),
													Q.model.pushStackElement(),
													Q.setCursorStates(
														Z.source,
														h.CursorChangeReason.Explicit,
														re,
													);
												return;
											}
										}
									}
									re.push(se),
										Q.model.pushStackElement(),
										Q.setCursorStates(
											Z.source,
											h.CursorChangeReason.Explicit,
											re,
										);
								}
							})(),
						)),
						(U.LastCursorMoveToSelect = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({
										id: "_lastCursorMoveToSelect",
										precondition: void 0,
									});
								}
								runCoreEditorCommand(Q, Z) {
									if (!Z.position) return;
									const se = Q.getLastAddedCursorIndex(),
										re = Q.getCursorStates(),
										le = re.slice(0);
									(le[se] = c.$Htb.moveTo(
										Q,
										re[se],
										!0,
										Z.position,
										Z.viewPosition,
									)),
										Q.model.pushStackElement(),
										Q.setCursorStates(
											Z.source,
											h.CursorChangeReason.Explicit,
											le,
										);
								}
							})(),
						));
					class K extends I {
						constructor(Z) {
							super(Z), (this.d = Z.inSelectionMode);
						}
						runCoreEditorCommand(Z, se) {
							Z.model.pushStackElement(),
								Z.setCursorStates(
									se.source,
									h.CursorChangeReason.Explicit,
									c.$Htb.moveToBeginningOfLine(Z, Z.getCursorStates(), this.d),
								),
								Z.revealAllCursors(se.source, !0);
						}
					}
					(U.CursorHome = (0, d.$mtb)(
						new K({
							inSelectionMode: !1,
							id: "cursorHome",
							precondition: void 0,
							kbOpts: {
								weight: S,
								kbExpr: f.EditorContextKeys.textInputFocus,
								primary: w.KeyCode.Home,
								mac: {
									primary: w.KeyCode.Home,
									secondary: [w.KeyMod.CtrlCmd | w.KeyCode.LeftArrow],
								},
							},
						}),
					)),
						(U.CursorHomeSelect = (0, d.$mtb)(
							new K({
								inSelectionMode: !0,
								id: "cursorHomeSelect",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyMod.Shift | w.KeyCode.Home,
									mac: {
										primary: w.KeyMod.Shift | w.KeyCode.Home,
										secondary: [
											w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.LeftArrow,
										],
									},
								},
							}),
						));
					class J extends I {
						constructor(Z) {
							super(Z), (this.d = Z.inSelectionMode);
						}
						runCoreEditorCommand(Z, se) {
							Z.model.pushStackElement(),
								Z.setCursorStates(
									se.source,
									h.CursorChangeReason.Explicit,
									this.e(Z.getCursorStates()),
								),
								Z.revealAllCursors(se.source, !0);
						}
						e(Z) {
							const se = [];
							for (let re = 0, le = Z.length; re < le; re++) {
								const oe = Z[re],
									ae = oe.modelState.position.lineNumber;
								se[re] = u.$ysb.fromModelState(
									oe.modelState.move(this.d, ae, 1, 0),
								);
							}
							return se;
						}
					}
					(U.CursorLineStart = (0, d.$mtb)(
						new J({
							inSelectionMode: !1,
							id: "cursorLineStart",
							precondition: void 0,
							kbOpts: {
								weight: S,
								kbExpr: f.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.KeyA },
							},
						}),
					)),
						(U.CursorLineStartSelect = (0, d.$mtb)(
							new J({
								inSelectionMode: !0,
								id: "cursorLineStartSelect",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: 0,
									mac: {
										primary: w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyCode.KeyA,
									},
								},
							}),
						));
					class W extends I {
						constructor(Z) {
							super(Z), (this.d = Z.inSelectionMode);
						}
						runCoreEditorCommand(Z, se) {
							Z.model.pushStackElement(),
								Z.setCursorStates(
									se.source,
									h.CursorChangeReason.Explicit,
									c.$Htb.moveToEndOfLine(
										Z,
										Z.getCursorStates(),
										this.d,
										se.sticky || !1,
									),
								),
								Z.revealAllCursors(se.source, !0);
						}
					}
					(U.CursorEnd = (0, d.$mtb)(
						new W({
							inSelectionMode: !1,
							id: "cursorEnd",
							precondition: void 0,
							kbOpts: {
								args: { sticky: !1 },
								weight: S,
								kbExpr: f.EditorContextKeys.textInputFocus,
								primary: w.KeyCode.End,
								mac: {
									primary: w.KeyCode.End,
									secondary: [w.KeyMod.CtrlCmd | w.KeyCode.RightArrow],
								},
							},
							metadata: {
								description: "Go to End",
								args: [
									{
										name: "args",
										schema: {
											type: "object",
											properties: {
												sticky: {
													description: t.localize(178, null),
													type: "boolean",
													default: !1,
												},
											},
										},
									},
								],
							},
						}),
					)),
						(U.CursorEndSelect = (0, d.$mtb)(
							new W({
								inSelectionMode: !0,
								id: "cursorEndSelect",
								precondition: void 0,
								kbOpts: {
									args: { sticky: !1 },
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyMod.Shift | w.KeyCode.End,
									mac: {
										primary: w.KeyMod.Shift | w.KeyCode.End,
										secondary: [
											w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.RightArrow,
										],
									},
								},
								metadata: {
									description: "Select to End",
									args: [
										{
											name: "args",
											schema: {
												type: "object",
												properties: {
													sticky: {
														description: t.localize(179, null),
														type: "boolean",
														default: !1,
													},
												},
											},
										},
									],
								},
							}),
						));
					class X extends I {
						constructor(Z) {
							super(Z), (this.d = Z.inSelectionMode);
						}
						runCoreEditorCommand(Z, se) {
							Z.model.pushStackElement(),
								Z.setCursorStates(
									se.source,
									h.CursorChangeReason.Explicit,
									this.e(Z, Z.getCursorStates()),
								),
								Z.revealAllCursors(se.source, !0);
						}
						e(Z, se) {
							const re = [];
							for (let le = 0, oe = se.length; le < oe; le++) {
								const ae = se[le],
									pe = ae.modelState.position.lineNumber,
									$e = Z.model.getLineMaxColumn(pe);
								re[le] = u.$ysb.fromModelState(
									ae.modelState.move(this.d, pe, $e, 0),
								);
							}
							return re;
						}
					}
					(U.CursorLineEnd = (0, d.$mtb)(
						new X({
							inSelectionMode: !1,
							id: "cursorLineEnd",
							precondition: void 0,
							kbOpts: {
								weight: S,
								kbExpr: f.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.KeyE },
							},
						}),
					)),
						(U.CursorLineEndSelect = (0, d.$mtb)(
							new X({
								inSelectionMode: !0,
								id: "cursorLineEndSelect",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: 0,
									mac: {
										primary: w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyCode.KeyE,
									},
								},
							}),
						));
					class Y extends I {
						constructor(Z) {
							super(Z), (this.d = Z.inSelectionMode);
						}
						runCoreEditorCommand(Z, se) {
							Z.model.pushStackElement(),
								Z.setCursorStates(
									se.source,
									h.CursorChangeReason.Explicit,
									c.$Htb.moveToBeginningOfBuffer(
										Z,
										Z.getCursorStates(),
										this.d,
									),
								),
								Z.revealAllCursors(se.source, !0);
						}
					}
					(U.CursorTop = (0, d.$mtb)(
						new Y({
							inSelectionMode: !1,
							id: "cursorTop",
							precondition: void 0,
							kbOpts: {
								weight: S,
								kbExpr: f.EditorContextKeys.textInputFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyCode.Home,
								mac: { primary: w.KeyMod.CtrlCmd | w.KeyCode.UpArrow },
							},
						}),
					)),
						(U.CursorTopSelect = (0, d.$mtb)(
							new Y({
								inSelectionMode: !0,
								id: "cursorTopSelect",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.Home,
									mac: {
										primary:
											w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.UpArrow,
									},
								},
							}),
						));
					class ie extends I {
						constructor(Z) {
							super(Z), (this.d = Z.inSelectionMode);
						}
						runCoreEditorCommand(Z, se) {
							Z.model.pushStackElement(),
								Z.setCursorStates(
									se.source,
									h.CursorChangeReason.Explicit,
									c.$Htb.moveToEndOfBuffer(Z, Z.getCursorStates(), this.d),
								),
								Z.revealAllCursors(se.source, !0);
						}
					}
					(U.CursorBottom = (0, d.$mtb)(
						new ie({
							inSelectionMode: !1,
							id: "cursorBottom",
							precondition: void 0,
							kbOpts: {
								weight: S,
								kbExpr: f.EditorContextKeys.textInputFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyCode.End,
								mac: { primary: w.KeyMod.CtrlCmd | w.KeyCode.DownArrow },
							},
						}),
					)),
						(U.CursorBottomSelect = (0, d.$mtb)(
							new ie({
								inSelectionMode: !0,
								id: "cursorBottomSelect",
								precondition: void 0,
								kbOpts: {
									weight: S,
									kbExpr: f.EditorContextKeys.textInputFocus,
									primary: w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.End,
									mac: {
										primary:
											w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.DownArrow,
									},
								},
							}),
						));
					class ne extends I {
						constructor() {
							super({
								id: "editorScroll",
								precondition: void 0,
								metadata: T.metadata,
							});
						}
						determineScrollMethod(Z) {
							const se = [T.Unit.Column],
								re = [
									T.Unit.Line,
									T.Unit.WrappedLine,
									T.Unit.Page,
									T.Unit.HalfPage,
									T.Unit.Editor,
									T.Unit.Column,
								],
								le = [T.Direction.Left, T.Direction.Right],
								oe = [T.Direction.Up, T.Direction.Down];
							return se.includes(Z.unit) && le.includes(Z.direction)
								? this._runHorizontalEditorScroll.bind(this)
								: re.includes(Z.unit) && oe.includes(Z.direction)
									? this._runVerticalEditorScroll.bind(this)
									: null;
						}
						runCoreEditorCommand(Z, se) {
							const re = T.parse(se);
							if (!re) return;
							const le = this.determineScrollMethod(re);
							le && le(Z, se.source, re);
						}
						_runVerticalEditorScroll(Z, se, re) {
							const le = this.d(Z, re);
							if (re.revealCursor) {
								const oe = Z.getCompletelyVisibleViewRangeAtScrollTop(le);
								Z.setCursorStates(se, h.CursorChangeReason.Explicit, [
									c.$Htb.findPositionInViewportIfOutside(
										Z,
										Z.getPrimaryCursorState(),
										oe,
										re.select,
									),
								]);
							}
							Z.viewLayout.setScrollPosition(
								{ scrollTop: le },
								o.ScrollType.Smooth,
							);
						}
						d(Z, se) {
							if (se.unit === T.Unit.Line) {
								const oe = Z.viewLayout.getFutureViewport(),
									ae = Z.getCompletelyVisibleViewRangeAtScrollTop(oe.top),
									pe = Z.coordinatesConverter.convertViewRangeToModelRange(ae);
								let $e;
								se.direction === T.Direction.Up
									? ($e = Math.max(1, pe.startLineNumber - se.value))
									: ($e = Math.min(
											Z.model.getLineCount(),
											pe.startLineNumber + se.value,
										));
								const ye =
									Z.coordinatesConverter.convertModelPositionToViewPosition(
										new g.$hL($e, 1),
									);
								return Z.viewLayout.getVerticalOffsetForLineNumber(
									ye.lineNumber,
								);
							}
							if (se.unit === T.Unit.Editor) {
								let oe = 0;
								return (
									se.direction === T.Direction.Down &&
										(oe = Z.model.getLineCount() - Z.cursorConfig.pageSize),
									Z.viewLayout.getVerticalOffsetForLineNumber(oe)
								);
							}
							let re;
							se.unit === T.Unit.Page
								? (re = Z.cursorConfig.pageSize * se.value)
								: se.unit === T.Unit.HalfPage
									? (re = Math.round(Z.cursorConfig.pageSize / 2) * se.value)
									: (re = se.value);
							const le = (se.direction === T.Direction.Up ? -1 : 1) * re;
							return (
								Z.viewLayout.getCurrentScrollTop() +
								le * Z.cursorConfig.lineHeight
							);
						}
						_runHorizontalEditorScroll(Z, se, re) {
							const le = this._computeDesiredScrollLeft(Z, re);
							Z.viewLayout.setScrollPosition(
								{ scrollLeft: le },
								o.ScrollType.Smooth,
							);
						}
						_computeDesiredScrollLeft(Z, se) {
							const re =
								(se.direction === T.Direction.Left ? -1 : 1) * se.value;
							return (
								Z.viewLayout.getCurrentScrollLeft() +
								re * Z.cursorConfig.typicalHalfwidthCharacterWidth
							);
						}
					}
					(U.EditorScrollImpl = ne),
						(U.EditorScroll = (0, d.$mtb)(new ne())),
						(U.ScrollLineUp = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({
										id: "scrollLineUp",
										precondition: void 0,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
											primary: w.KeyMod.CtrlCmd | w.KeyCode.UpArrow,
											mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.PageUp },
										},
									});
								}
								runCoreEditorCommand(Q, Z) {
									U.EditorScroll.runCoreEditorCommand(Q, {
										to: T.RawDirection.Up,
										by: T.RawUnit.WrappedLine,
										value: 1,
										revealCursor: !1,
										select: !1,
										source: Z.source,
									});
								}
							})(),
						)),
						(U.ScrollPageUp = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({
										id: "scrollPageUp",
										precondition: void 0,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
											primary: w.KeyMod.CtrlCmd | w.KeyCode.PageUp,
											win: { primary: w.KeyMod.Alt | w.KeyCode.PageUp },
											linux: { primary: w.KeyMod.Alt | w.KeyCode.PageUp },
										},
									});
								}
								runCoreEditorCommand(Q, Z) {
									U.EditorScroll.runCoreEditorCommand(Q, {
										to: T.RawDirection.Up,
										by: T.RawUnit.Page,
										value: 1,
										revealCursor: !1,
										select: !1,
										source: Z.source,
									});
								}
							})(),
						)),
						(U.ScrollEditorTop = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({
										id: "scrollEditorTop",
										precondition: void 0,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
										},
									});
								}
								runCoreEditorCommand(Q, Z) {
									U.EditorScroll.runCoreEditorCommand(Q, {
										to: T.RawDirection.Up,
										by: T.RawUnit.Editor,
										value: 1,
										revealCursor: !1,
										select: !1,
										source: Z.source,
									});
								}
							})(),
						)),
						(U.ScrollLineDown = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({
										id: "scrollLineDown",
										precondition: void 0,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
											primary: w.KeyMod.CtrlCmd | w.KeyCode.DownArrow,
											mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.PageDown },
										},
									});
								}
								runCoreEditorCommand(Q, Z) {
									U.EditorScroll.runCoreEditorCommand(Q, {
										to: T.RawDirection.Down,
										by: T.RawUnit.WrappedLine,
										value: 1,
										revealCursor: !1,
										select: !1,
										source: Z.source,
									});
								}
							})(),
						)),
						(U.ScrollPageDown = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({
										id: "scrollPageDown",
										precondition: void 0,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
											primary: w.KeyMod.CtrlCmd | w.KeyCode.PageDown,
											win: { primary: w.KeyMod.Alt | w.KeyCode.PageDown },
											linux: { primary: w.KeyMod.Alt | w.KeyCode.PageDown },
										},
									});
								}
								runCoreEditorCommand(Q, Z) {
									U.EditorScroll.runCoreEditorCommand(Q, {
										to: T.RawDirection.Down,
										by: T.RawUnit.Page,
										value: 1,
										revealCursor: !1,
										select: !1,
										source: Z.source,
									});
								}
							})(),
						)),
						(U.ScrollEditorBottom = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({
										id: "scrollEditorBottom",
										precondition: void 0,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
										},
									});
								}
								runCoreEditorCommand(Q, Z) {
									U.EditorScroll.runCoreEditorCommand(Q, {
										to: T.RawDirection.Down,
										by: T.RawUnit.Editor,
										value: 1,
										revealCursor: !1,
										select: !1,
										source: Z.source,
									});
								}
							})(),
						)),
						(U.ScrollLeft = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({
										id: "scrollLeft",
										precondition: void 0,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
										},
									});
								}
								runCoreEditorCommand(Q, Z) {
									U.EditorScroll.runCoreEditorCommand(Q, {
										to: T.RawDirection.Left,
										by: T.RawUnit.Column,
										value: 2,
										revealCursor: !1,
										select: !1,
										source: Z.source,
									});
								}
							})(),
						)),
						(U.ScrollRight = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({
										id: "scrollRight",
										precondition: void 0,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
										},
									});
								}
								runCoreEditorCommand(Q, Z) {
									U.EditorScroll.runCoreEditorCommand(Q, {
										to: T.RawDirection.Right,
										by: T.RawUnit.Column,
										value: 2,
										revealCursor: !1,
										select: !1,
										source: Z.source,
									});
								}
							})(),
						));
					class ee extends I {
						constructor(Z) {
							super(Z), (this.d = Z.inSelectionMode);
						}
						runCoreEditorCommand(Z, se) {
							se.position &&
								(Z.model.pushStackElement(),
								Z.setCursorStates(se.source, h.CursorChangeReason.Explicit, [
									c.$Htb.word(
										Z,
										Z.getPrimaryCursorState(),
										this.d,
										se.position,
									),
								]),
								se.revealType !== L.None &&
									Z.revealAllCursors(se.source, !0, !0));
						}
					}
					(U.WordSelect = (0, d.$mtb)(
						new ee({
							inSelectionMode: !1,
							id: "_wordSelect",
							precondition: void 0,
						}),
					)),
						(U.WordSelectDrag = (0, d.$mtb)(
							new ee({
								inSelectionMode: !0,
								id: "_wordSelectDrag",
								precondition: void 0,
							}),
						)),
						(U.LastCursorWordSelect = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({ id: "lastCursorWordSelect", precondition: void 0 });
								}
								runCoreEditorCommand(Q, Z) {
									if (!Z.position) return;
									const se = Q.getLastAddedCursorIndex(),
										re = Q.getCursorStates(),
										le = re.slice(0),
										oe = re[se];
									(le[se] = c.$Htb.word(
										Q,
										oe,
										oe.modelState.hasSelection(),
										Z.position,
									)),
										Q.model.pushStackElement(),
										Q.setCursorStates(
											Z.source,
											h.CursorChangeReason.Explicit,
											le,
										);
								}
							})(),
						));
					class _ extends I {
						constructor(Z) {
							super(Z), (this.d = Z.inSelectionMode);
						}
						runCoreEditorCommand(Z, se) {
							se.position &&
								(Z.model.pushStackElement(),
								Z.setCursorStates(se.source, h.CursorChangeReason.Explicit, [
									c.$Htb.line(
										Z,
										Z.getPrimaryCursorState(),
										this.d,
										se.position,
										se.viewPosition,
									),
								]),
								se.revealType !== L.None &&
									Z.revealAllCursors(se.source, !1, !0));
						}
					}
					(U.LineSelect = (0, d.$mtb)(
						new _({
							inSelectionMode: !1,
							id: "_lineSelect",
							precondition: void 0,
						}),
					)),
						(U.LineSelectDrag = (0, d.$mtb)(
							new _({
								inSelectionMode: !0,
								id: "_lineSelectDrag",
								precondition: void 0,
							}),
						));
					class te extends I {
						constructor(Z) {
							super(Z), (this.d = Z.inSelectionMode);
						}
						runCoreEditorCommand(Z, se) {
							if (!se.position) return;
							const re = Z.getLastAddedCursorIndex(),
								le = Z.getCursorStates(),
								oe = le.slice(0);
							(oe[re] = c.$Htb.line(
								Z,
								le[re],
								this.d,
								se.position,
								se.viewPosition,
							)),
								Z.model.pushStackElement(),
								Z.setCursorStates(se.source, h.CursorChangeReason.Explicit, oe);
						}
					}
					(U.LastCursorLineSelect = (0, d.$mtb)(
						new te({
							inSelectionMode: !1,
							id: "lastCursorLineSelect",
							precondition: void 0,
						}),
					)),
						(U.LastCursorLineSelectDrag = (0, d.$mtb)(
							new te({
								inSelectionMode: !0,
								id: "lastCursorLineSelectDrag",
								precondition: void 0,
							}),
						)),
						(U.CancelSelection = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({
										id: "cancelSelection",
										precondition: f.EditorContextKeys.hasNonEmptySelection,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
											primary: w.KeyCode.Escape,
											secondary: [w.KeyMod.Shift | w.KeyCode.Escape],
										},
									});
								}
								runCoreEditorCommand(Q, Z) {
									Q.model.pushStackElement(),
										Q.setCursorStates(Z.source, h.CursorChangeReason.Explicit, [
											c.$Htb.cancelSelection(Q, Q.getPrimaryCursorState()),
										]),
										Q.revealAllCursors(Z.source, !0);
								}
							})(),
						)),
						(U.RemoveSecondaryCursors = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({
										id: "removeSecondaryCursors",
										precondition: f.EditorContextKeys.hasMultipleSelections,
										kbOpts: {
											weight: S + 1,
											kbExpr: f.EditorContextKeys.textInputFocus,
											primary: w.KeyCode.Escape,
											secondary: [w.KeyMod.Shift | w.KeyCode.Escape],
										},
									});
								}
								runCoreEditorCommand(Q, Z) {
									Q.model.pushStackElement(),
										Q.setCursorStates(Z.source, h.CursorChangeReason.Explicit, [
											Q.getPrimaryCursorState(),
										]),
										Q.revealAllCursors(Z.source, !0),
										(0, C.$pib)(t.localize(180, null));
								}
							})(),
						)),
						(U.RevealLine = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({
										id: "revealLine",
										precondition: void 0,
										metadata: P.metadata,
									});
								}
								runCoreEditorCommand(Q, Z) {
									const se = Z,
										re = se.lineNumber || 0;
									let le = typeof re == "number" ? re + 1 : parseInt(re) + 1;
									le < 1 && (le = 1);
									const oe = Q.model.getLineCount();
									le > oe && (le = oe);
									const ae = new p.$iL(le, 1, le, Q.model.getLineMaxColumn(le));
									let pe = b.VerticalRevealType.Simple;
									if (se.at)
										switch (se.at) {
											case P.RawAtArgument.Top:
												pe = b.VerticalRevealType.Top;
												break;
											case P.RawAtArgument.Center:
												pe = b.VerticalRevealType.Center;
												break;
											case P.RawAtArgument.Bottom:
												pe = b.VerticalRevealType.Bottom;
												break;
											default:
												break;
										}
									const $e =
										Q.coordinatesConverter.convertModelRangeToViewRange(ae);
									Q.revealRange(Z.source, !1, $e, pe, o.ScrollType.Smooth);
								}
							})(),
						)),
						(U.SelectAll = new (class extends k {
							constructor() {
								super(d.$utb);
							}
							runDOMCommand(Q) {
								i.$Ofb && (Q.focus(), Q.select()),
									Q.ownerDocument.execCommand("selectAll");
							}
							runEditorCommand(Q, Z, se) {
								const re = Z._getViewModel();
								re && this.runCoreEditorCommand(re, se);
							}
							runCoreEditorCommand(Q, Z) {
								Q.model.pushStackElement(),
									Q.setCursorStates("keyboard", h.CursorChangeReason.Explicit, [
										c.$Htb.selectAll(Q, Q.getPrimaryCursorState()),
									]);
							}
						})()),
						(U.SetSelection = (0, d.$mtb)(
							new (class extends I {
								constructor() {
									super({ id: "setSelection", precondition: void 0 });
								}
								runCoreEditorCommand(Q, Z) {
									Z.selection &&
										(Q.model.pushStackElement(),
										Q.setCursorStates(Z.source, h.CursorChangeReason.Explicit, [
											u.$ysb.fromModelSelection(Z.selection),
										]));
								}
							})(),
						));
				})(D || (e.CoreNavigationCommands = D = {}));
				const M = s.$Kj.and(
					f.EditorContextKeys.textInputFocus,
					f.EditorContextKeys.columnSelection,
				);
				function N(U, z) {
					l.$TX.registerKeybindingRule({
						id: U,
						primary: z,
						when: M,
						weight: S + 1,
					});
				}
				N(D.CursorColumnSelectLeft.id, w.KeyMod.Shift | w.KeyCode.LeftArrow),
					N(
						D.CursorColumnSelectRight.id,
						w.KeyMod.Shift | w.KeyCode.RightArrow,
					),
					N(D.CursorColumnSelectUp.id, w.KeyMod.Shift | w.KeyCode.UpArrow),
					N(D.CursorColumnSelectPageUp.id, w.KeyMod.Shift | w.KeyCode.PageUp),
					N(D.CursorColumnSelectDown.id, w.KeyMod.Shift | w.KeyCode.DownArrow),
					N(
						D.CursorColumnSelectPageDown.id,
						w.KeyMod.Shift | w.KeyCode.PageDown,
					);
				function A(U) {
					return U.register(), U;
				}
				var R;
				(function (U) {
					class z extends d.$htb {
						runEditorCommand(x, H, q) {
							const V = H._getViewModel();
							V && this.runCoreEditingCommand(H, V, q || {});
						}
					}
					(U.CoreEditingCommand = z),
						(U.LineBreakInsert = (0, d.$mtb)(
							new (class extends z {
								constructor() {
									super({
										id: "lineBreakInsert",
										precondition: f.EditorContextKeys.writable,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
											primary: 0,
											mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.KeyO },
										},
									});
								}
								runCoreEditingCommand(F, x, H) {
									F.pushUndoStop(),
										F.executeCommands(
											this.id,
											v.$2tb.lineBreakInsert(
												x.cursorConfig,
												x.model,
												x.getCursorStates().map((q) => q.modelState.selection),
											),
										);
								}
							})(),
						)),
						(U.Outdent = (0, d.$mtb)(
							new (class extends z {
								constructor() {
									super({
										id: "outdent",
										precondition: f.EditorContextKeys.writable,
										kbOpts: {
											weight: S,
											kbExpr: s.$Kj.and(
												f.EditorContextKeys.editorTextFocus,
												f.EditorContextKeys.tabDoesNotMoveFocus,
											),
											primary: w.KeyMod.Shift | w.KeyCode.Tab,
										},
									});
								}
								runCoreEditingCommand(F, x, H) {
									F.pushUndoStop(),
										F.executeCommands(
											this.id,
											n.$$tb.outdent(
												x.cursorConfig,
												x.model,
												x.getCursorStates().map((q) => q.modelState.selection),
											),
										),
										F.pushUndoStop();
								}
							})(),
						)),
						(U.Tab = (0, d.$mtb)(
							new (class extends z {
								constructor() {
									super({
										id: "tab",
										precondition: f.EditorContextKeys.writable,
										kbOpts: {
											weight: S,
											kbExpr: s.$Kj.and(
												f.EditorContextKeys.editorTextFocus,
												f.EditorContextKeys.tabDoesNotMoveFocus,
											),
											primary: w.KeyCode.Tab,
										},
									});
								}
								runCoreEditingCommand(F, x, H) {
									F.pushUndoStop(),
										F.executeCommands(
											this.id,
											n.$$tb.tab(
												x.cursorConfig,
												x.model,
												x.getCursorStates().map((q) => q.modelState.selection),
											),
										),
										F.pushUndoStop();
								}
							})(),
						)),
						(U.DeleteLeft = (0, d.$mtb)(
							new (class extends z {
								constructor() {
									super({
										id: "deleteLeft",
										precondition: void 0,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
											primary: w.KeyCode.Backspace,
											secondary: [w.KeyMod.Shift | w.KeyCode.Backspace],
											mac: {
												primary: w.KeyCode.Backspace,
												secondary: [
													w.KeyMod.Shift | w.KeyCode.Backspace,
													w.KeyMod.WinCtrl | w.KeyCode.KeyH,
													w.KeyMod.WinCtrl | w.KeyCode.Backspace,
												],
											},
										},
									});
								}
								runCoreEditingCommand(F, x, H) {
									const [q, V] = a.$Etb.deleteLeft(
										x.getPrevEditOperationType(),
										x.cursorConfig,
										x.model,
										x.getCursorStates().map((G) => G.modelState.selection),
										x.getCursorAutoClosedCharacters(),
									);
									q && F.pushUndoStop(),
										F.executeCommands(this.id, V),
										x.setPrevEditOperationType(
											u.EditOperationType.DeletingLeft,
										);
								}
							})(),
						)),
						(U.DeleteRight = (0, d.$mtb)(
							new (class extends z {
								constructor() {
									super({
										id: "deleteRight",
										precondition: void 0,
										kbOpts: {
											weight: S,
											kbExpr: f.EditorContextKeys.textInputFocus,
											primary: w.KeyCode.Delete,
											mac: {
												primary: w.KeyCode.Delete,
												secondary: [
													w.KeyMod.WinCtrl | w.KeyCode.KeyD,
													w.KeyMod.WinCtrl | w.KeyCode.Delete,
												],
											},
										},
									});
								}
								runCoreEditingCommand(F, x, H) {
									const [q, V] = a.$Etb.deleteRight(
										x.getPrevEditOperationType(),
										x.cursorConfig,
										x.model,
										x.getCursorStates().map((G) => G.modelState.selection),
									);
									q && F.pushUndoStop(),
										F.executeCommands(this.id, V),
										x.setPrevEditOperationType(
											u.EditOperationType.DeletingRight,
										);
								}
							})(),
						)),
						(U.Undo = new (class extends k {
							constructor() {
								super(d.$stb);
							}
							runDOMCommand(F) {
								F.ownerDocument.execCommand("undo");
							}
							runEditorCommand(F, x, H) {
								if (
									!(
										!x.hasModel() || x.getOption(y.EditorOption.readOnly) === !0
									)
								)
									return x.getModel().undo();
							}
						})()),
						(U.Redo = new (class extends k {
							constructor() {
								super(d.$ttb);
							}
							runDOMCommand(F) {
								F.ownerDocument.execCommand("redo");
							}
							runEditorCommand(F, x, H) {
								if (
									!(
										!x.hasModel() || x.getOption(y.EditorOption.readOnly) === !0
									)
								)
									return x.getModel().redo();
							}
						})());
				})(R || (e.CoreEditingCommands = R = {}));
				class O extends d.$etb {
					constructor(z, F, x) {
						super({ id: z, precondition: void 0, metadata: x }), (this.d = F);
					}
					runCommand(z, F) {
						const x = z.get(m.$dtb).getFocusedCodeEditor();
						x && x.trigger("keyboard", this.d, F);
					}
				}
				function B(U, z) {
					A(new O("default:" + U, U)), A(new O(U, U, z));
				}
				B(o.Handler.Type, {
					description: "Type",
					args: [
						{
							name: "args",
							schema: {
								type: "object",
								required: ["text"],
								properties: { text: { type: "string" } },
							},
						},
					],
				}),
					B(o.Handler.ReplacePreviousChar),
					B(o.Handler.CompositionType),
					B(o.Handler.CompositionStart),
					B(o.Handler.CompositionEnd),
					B(o.Handler.Paste),
					B(o.Handler.Cut);
			},
		)
