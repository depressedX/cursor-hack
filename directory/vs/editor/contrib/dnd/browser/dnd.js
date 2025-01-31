import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../browser/editorBrowser.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
import '../../../common/cursorEvents.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/core/selection.js';
import '../../../common/editorCommon.js';
import '../../../common/model/textModel.js';
import './dragAndDropCommand.js';
import '../../../../css!vs/editor/contrib/dnd/browser/dnd.js';
define(
			de[1687],
			he([1, 0, 27, 3, 12, 56, 46, 38, 248, 48, 17, 104, 98, 122, 2582, 2293]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*lifecycle*/,
 w /*platform*/,
 E /*editorBrowser*/,
 C /*editorExtensions*/,
 d /*editorOptions*/,
 m /*cursorEvents*/,
 r /*position*/,
 u /*range*/,
 a /*selection*/,
 h /*editorCommon*/,
 c /*textModel*/,
 n /*dragAndDropCommand*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hhc = void 0);
				function g(o) {
					return w.$m ? o.altKey : o.ctrlKey;
				}
				class p extends i.$1c {
					static {
						this.ID = "editor.contrib.dragAndDrop";
					}
					static {
						this.TRIGGER_KEY_VALUE = w.$m ? t.KeyCode.Alt : t.KeyCode.Ctrl;
					}
					static get(f) {
						return f.getContribution(p.ID);
					}
					constructor(f) {
						super(),
							(this.a = f),
							(this.c = this.a.createDecorationsCollection()),
							this.D(this.a.onMouseDown((b) => this.n(b))),
							this.D(this.a.onMouseUp((b) => this.q(b))),
							this.D(this.a.onMouseDrag((b) => this.r(b))),
							this.D(this.a.onMouseDrop((b) => this.t(b))),
							this.D(this.a.onMouseDropCanceled(() => this.s())),
							this.D(this.a.onKeyDown((b) => this.j(b))),
							this.D(this.a.onKeyUp((b) => this.m(b))),
							this.D(this.a.onDidBlurEditorWidget(() => this.h())),
							this.D(this.a.onDidBlurEditorText(() => this.h())),
							(this.f = !1),
							(this.g = !1),
							(this.b = null);
					}
					h() {
						this.w(), (this.b = null), (this.f = !1), (this.g = !1);
					}
					j(f) {
						!this.a.getOption(d.EditorOption.dragAndDrop) ||
							this.a.getOption(d.EditorOption.columnSelection) ||
							(g(f) && (this.g = !0),
							this.f && g(f) && this.a.updateOptions({ mouseStyle: "copy" }));
					}
					m(f) {
						!this.a.getOption(d.EditorOption.dragAndDrop) ||
							this.a.getOption(d.EditorOption.columnSelection) ||
							(g(f) && (this.g = !1),
							this.f &&
								f.keyCode === p.TRIGGER_KEY_VALUE &&
								this.a.updateOptions({ mouseStyle: "default" }));
					}
					n(f) {
						this.f = !0;
					}
					q(f) {
						(this.f = !1), this.a.updateOptions({ mouseStyle: "text" });
					}
					r(f) {
						const b = f.target;
						if (this.b === null) {
							const l = (this.a.getSelections() || []).filter(
								(y) => b.position && y.containsPosition(b.position),
							);
							if (l.length === 1) this.b = l[0];
							else return;
						}
						g(f.event)
							? this.a.updateOptions({ mouseStyle: "copy" })
							: this.a.updateOptions({ mouseStyle: "default" }),
							b.position &&
								(this.b.containsPosition(b.position)
									? this.w()
									: this.showAt(b.position));
					}
					s() {
						this.a.updateOptions({ mouseStyle: "text" }),
							this.w(),
							(this.b = null),
							(this.f = !1);
					}
					t(f) {
						if (
							f.target &&
							(this.y(f.target) || this.z(f.target)) &&
							f.target.position
						) {
							const b = new r.$hL(
								f.target.position.lineNumber,
								f.target.position.column,
							);
							if (this.b === null) {
								let s = null;
								if (f.event.shiftKey) {
									const l = this.a.getSelection();
									if (l) {
										const {
											selectionStartLineNumber: y,
											selectionStartColumn: $,
										} = l;
										s = [new a.$kL(y, $, b.lineNumber, b.column)];
									}
								} else
									s = (this.a.getSelections() || []).map((l) =>
										l.containsPosition(b)
											? new a.$kL(
													b.lineNumber,
													b.column,
													b.lineNumber,
													b.column,
												)
											: l,
									);
								this.a.setSelections(
									s || [],
									"mouse",
									m.CursorChangeReason.Explicit,
								);
							} else
								(!this.b.containsPosition(b) ||
									((g(f.event) || this.g) &&
										(this.b.getEndPosition().equals(b) ||
											this.b.getStartPosition().equals(b)))) &&
									(this.a.pushUndoStop(),
									this.a.executeCommand(
										p.ID,
										new n.$Ghc(this.b, b, g(f.event) || this.g),
									),
									this.a.pushUndoStop());
						}
						this.a.updateOptions({ mouseStyle: "text" }),
							this.w(),
							(this.b = null),
							(this.f = !1);
					}
					static {
						this.u = c.$eY.register({
							description: "dnd-target",
							className: "dnd-target",
						});
					}
					showAt(f) {
						this.c.set([
							{
								range: new u.$iL(
									f.lineNumber,
									f.column,
									f.lineNumber,
									f.column,
								),
								options: p.u,
							},
						]),
							this.a.revealPosition(f, h.ScrollType.Immediate);
					}
					w() {
						this.c.clear();
					}
					y(f) {
						return (
							f.type === E.MouseTargetType.CONTENT_TEXT ||
							f.type === E.MouseTargetType.CONTENT_EMPTY
						);
					}
					z(f) {
						return (
							f.type === E.MouseTargetType.GUTTER_GLYPH_MARGIN ||
							f.type === E.MouseTargetType.GUTTER_LINE_NUMBERS ||
							f.type === E.MouseTargetType.GUTTER_LINE_DECORATIONS
						);
					}
					dispose() {
						this.w(),
							(this.b = null),
							(this.f = !1),
							(this.g = !1),
							super.dispose();
					}
				}
				(e.$Hhc = p),
					(0, C.$qtb)(
						p.ID,
						p,
						C.EditorContributionInstantiation.BeforeFirstInteraction,
					);
			},
		)
