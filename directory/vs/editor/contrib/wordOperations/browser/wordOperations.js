import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../browser/editorExtensions.js';
import '../../../common/commands/replaceCommand.js';
import '../../../common/config/editorOptions.js';
import '../../../common/cursorCommon.js';
import '../../../common/cursorEvents.js';
import '../../../common/cursor/cursorWordOperations.js';
import '../../../common/core/wordCharacterClassifier.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/core/selection.js';
import '../../../common/editorCommon.js';
import '../../../common/editorContextKeys.js';
import '../../../common/languages/languageConfigurationRegistry.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextkey/common/contextkeys.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
define(
			de[1648],
			he([
				1, 0, 27, 46, 655, 38, 346, 248, 944, 747, 48, 17, 104, 98, 71, 152, 4,
				91, 8, 179, 43,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$alc =
						e.$_kc =
						e.$$kc =
						e.$0kc =
						e.$9kc =
						e.$8kc =
						e.$7kc =
						e.$6kc =
						e.$5kc =
						e.$4kc =
						e.$3kc =
						e.$2kc =
						e.$1kc =
						e.$Zkc =
						e.$Ykc =
						e.$Xkc =
						e.$Wkc =
						e.$Vkc =
						e.$Ukc =
						e.$Tkc =
						e.$Skc =
						e.$Rkc =
						e.$Qkc =
						e.$Pkc =
						e.$Okc =
						e.$Nkc =
						e.$Mkc =
						e.$Lkc =
						e.$Kkc =
							void 0),
					(p = mt(p));
				class l extends i.$htb {
					constructor(ie) {
						super(ie),
							(this.d = ie.inSelectionMode),
							(this.e = ie.wordNavigationType);
					}
					runEditorCommand(ie, ne, ee) {
						if (!ne.hasModel()) return;
						const _ = (0, r.$QL)(
								ne.getOption(E.EditorOption.wordSeparators),
								ne.getOption(E.EditorOption.wordSegmenterLocales),
							),
							te = ne.getModel(),
							Q = ne.getSelections(),
							Z = Q.length > 1,
							se = Q.map((re) => {
								const le = new u.$hL(re.positionLineNumber, re.positionColumn),
									oe = this.j(_, te, le, this.e, Z);
								return this.h(re, oe, this.d);
							});
						if (
							(te.pushStackElement(),
							ne._getViewModel().setCursorStates(
								"moveWordCommand",
								d.CursorChangeReason.Explicit,
								se.map((re) => C.$ysb.fromModelSelection(re)),
							),
							se.length === 1)
						) {
							const re = new u.$hL(
								se[0].positionLineNumber,
								se[0].positionColumn,
							);
							ne.revealPosition(re, c.ScrollType.Smooth);
						}
					}
					h(ie, ne, ee) {
						return ee
							? new h.$kL(
									ie.selectionStartLineNumber,
									ie.selectionStartColumn,
									ne.lineNumber,
									ne.column,
								)
							: new h.$kL(ne.lineNumber, ne.column, ne.lineNumber, ne.column);
					}
				}
				e.$Kkc = l;
				class y extends l {
					j(ie, ne, ee, _, te) {
						return m.$Ftb.moveWordLeft(ie, ne, ee, _, te);
					}
				}
				e.$Lkc = y;
				class $ extends l {
					j(ie, ne, ee, _, te) {
						return m.$Ftb.moveWordRight(ie, ne, ee, _);
					}
				}
				e.$Mkc = $;
				class v extends y {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "cursorWordStartLeft",
							precondition: void 0,
						});
					}
				}
				e.$Nkc = v;
				class S extends y {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "cursorWordEndLeft",
							precondition: void 0,
						});
					}
				}
				e.$Okc = S;
				class I extends y {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordStartFast,
							id: "cursorWordLeft",
							precondition: void 0,
							kbOpts: {
								kbExpr: f.$Kj.and(
									n.EditorContextKeys.textInputFocus,
									f.$Kj.and(o.$YK, b.$6Lb)?.negate(),
								),
								primary: t.KeyMod.CtrlCmd | t.KeyCode.LeftArrow,
								mac: { primary: t.KeyMod.Alt | t.KeyCode.LeftArrow },
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$Pkc = I;
				class T extends y {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "cursorWordStartLeftSelect",
							precondition: void 0,
						});
					}
				}
				e.$Qkc = T;
				class P extends y {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "cursorWordEndLeftSelect",
							precondition: void 0,
						});
					}
				}
				e.$Rkc = P;
				class k extends y {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordStartFast,
							id: "cursorWordLeftSelect",
							precondition: void 0,
							kbOpts: {
								kbExpr: f.$Kj.and(
									n.EditorContextKeys.textInputFocus,
									f.$Kj.and(o.$YK, b.$6Lb)?.negate(),
								),
								primary:
									t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.LeftArrow,
								mac: {
									primary: t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.LeftArrow,
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$Skc = k;
				class L extends y {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordAccessibility,
							id: "cursorWordAccessibilityLeft",
							precondition: void 0,
						});
					}
					j(ie, ne, ee, _, te) {
						return super.j(
							(0, r.$QL)(
								E.EditorOptions.wordSeparators.defaultValue,
								ie.intlSegmenterLocales,
							),
							ne,
							ee,
							_,
							te,
						);
					}
				}
				e.$Tkc = L;
				class D extends y {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordAccessibility,
							id: "cursorWordAccessibilityLeftSelect",
							precondition: void 0,
						});
					}
					j(ie, ne, ee, _, te) {
						return super.j(
							(0, r.$QL)(
								E.EditorOptions.wordSeparators.defaultValue,
								ie.intlSegmenterLocales,
							),
							ne,
							ee,
							_,
							te,
						);
					}
				}
				e.$Ukc = D;
				class M extends $ {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "cursorWordStartRight",
							precondition: void 0,
						});
					}
				}
				e.$Vkc = M;
				class N extends $ {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "cursorWordEndRight",
							precondition: void 0,
							kbOpts: {
								kbExpr: f.$Kj.and(
									n.EditorContextKeys.textInputFocus,
									f.$Kj.and(o.$YK, b.$6Lb)?.negate(),
								),
								primary: t.KeyMod.CtrlCmd | t.KeyCode.RightArrow,
								mac: { primary: t.KeyMod.Alt | t.KeyCode.RightArrow },
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$Wkc = N;
				class A extends $ {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "cursorWordRight",
							precondition: void 0,
						});
					}
				}
				e.$Xkc = A;
				class R extends $ {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "cursorWordStartRightSelect",
							precondition: void 0,
						});
					}
				}
				e.$Ykc = R;
				class O extends $ {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "cursorWordEndRightSelect",
							precondition: void 0,
							kbOpts: {
								kbExpr: f.$Kj.and(
									n.EditorContextKeys.textInputFocus,
									f.$Kj.and(o.$YK, b.$6Lb)?.negate(),
								),
								primary:
									t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.RightArrow,
								mac: {
									primary: t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.RightArrow,
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$Zkc = O;
				class B extends $ {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "cursorWordRightSelect",
							precondition: void 0,
						});
					}
				}
				e.$1kc = B;
				class U extends $ {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordAccessibility,
							id: "cursorWordAccessibilityRight",
							precondition: void 0,
						});
					}
					j(ie, ne, ee, _, te) {
						return super.j(
							(0, r.$QL)(
								E.EditorOptions.wordSeparators.defaultValue,
								ie.intlSegmenterLocales,
							),
							ne,
							ee,
							_,
							te,
						);
					}
				}
				e.$2kc = U;
				class z extends $ {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordAccessibility,
							id: "cursorWordAccessibilityRightSelect",
							precondition: void 0,
						});
					}
					j(ie, ne, ee, _, te) {
						return super.j(
							(0, r.$QL)(
								E.EditorOptions.wordSeparators.defaultValue,
								ie.intlSegmenterLocales,
							),
							ne,
							ee,
							_,
							te,
						);
					}
				}
				e.$3kc = z;
				class F extends i.$htb {
					constructor(ie) {
						super(ie),
							(this.d = ie.whitespaceHeuristics),
							(this.e = ie.wordNavigationType);
					}
					runEditorCommand(ie, ne, ee) {
						const _ = ie.get(g.$aN);
						if (!ne.hasModel()) return;
						const te = (0, r.$QL)(
								ne.getOption(E.EditorOption.wordSeparators),
								ne.getOption(E.EditorOption.wordSegmenterLocales),
							),
							Q = ne.getModel(),
							Z = ne.getSelections(),
							se = ne.getOption(E.EditorOption.autoClosingBrackets),
							re = ne.getOption(E.EditorOption.autoClosingQuotes),
							le = _.getLanguageConfiguration(
								Q.getLanguageId(),
							).getAutoClosingPairs(),
							oe = ne._getViewModel(),
							ae = Z.map((pe) => {
								const $e = this.h(
									{
										wordSeparators: te,
										model: Q,
										selection: pe,
										whitespaceHeuristics: this.d,
										autoClosingDelete: ne.getOption(
											E.EditorOption.autoClosingDelete,
										),
										autoClosingBrackets: se,
										autoClosingQuotes: re,
										autoClosingPairs: le,
										autoClosedCharacters: oe.getCursorAutoClosedCharacters(),
									},
									this.e,
								);
								return new w.$wtb($e, "");
							});
						ne.pushUndoStop(),
							ne.executeCommands(this.id, ae),
							ne.pushUndoStop();
					}
				}
				e.$4kc = F;
				class x extends F {
					h(ie, ne) {
						const ee = m.$Ftb.deleteWordLeft(ie, ne);
						return ee || new a.$iL(1, 1, 1, 1);
					}
				}
				e.$5kc = x;
				class H extends F {
					h(ie, ne) {
						const ee = m.$Ftb.deleteWordRight(ie, ne);
						if (ee) return ee;
						const _ = ie.model.getLineCount(),
							te = ie.model.getLineMaxColumn(_);
						return new a.$iL(_, te, _, te);
					}
				}
				e.$6kc = H;
				class q extends x {
					constructor() {
						super({
							whitespaceHeuristics: !1,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "deleteWordStartLeft",
							precondition: n.EditorContextKeys.writable,
						});
					}
				}
				e.$7kc = q;
				class V extends x {
					constructor() {
						super({
							whitespaceHeuristics: !1,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "deleteWordEndLeft",
							precondition: n.EditorContextKeys.writable,
						});
					}
				}
				e.$8kc = V;
				class G extends x {
					constructor() {
						super({
							whitespaceHeuristics: !0,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "deleteWordLeft",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.textInputFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace,
								mac: { primary: t.KeyMod.Alt | t.KeyCode.Backspace },
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$9kc = G;
				class K extends H {
					constructor() {
						super({
							whitespaceHeuristics: !1,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "deleteWordStartRight",
							precondition: n.EditorContextKeys.writable,
						});
					}
				}
				e.$0kc = K;
				class J extends H {
					constructor() {
						super({
							whitespaceHeuristics: !1,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "deleteWordEndRight",
							precondition: n.EditorContextKeys.writable,
						});
					}
				}
				e.$$kc = J;
				class W extends H {
					constructor() {
						super({
							whitespaceHeuristics: !0,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "deleteWordRight",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.textInputFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.Delete,
								mac: { primary: t.KeyMod.Alt | t.KeyCode.Delete },
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$_kc = W;
				class X extends i.$itb {
					constructor() {
						super({
							id: "deleteInsideWord",
							precondition: n.EditorContextKeys.writable,
							label: p.localize(1594, null),
							alias: "Delete Word",
						});
					}
					run(ie, ne, ee) {
						if (!ne.hasModel()) return;
						const _ = (0, r.$QL)(
								ne.getOption(E.EditorOption.wordSeparators),
								ne.getOption(E.EditorOption.wordSegmenterLocales),
							),
							te = ne.getModel(),
							Z = ne.getSelections().map((se) => {
								const re = m.$Ftb.deleteInsideWord(_, te, se);
								return new w.$wtb(re, "");
							});
						ne.pushUndoStop(),
							ne.executeCommands(this.id, Z),
							ne.pushUndoStop();
					}
				}
				(e.$alc = X),
					(0, i.$mtb)(new v()),
					(0, i.$mtb)(new S()),
					(0, i.$mtb)(new I()),
					(0, i.$mtb)(new T()),
					(0, i.$mtb)(new P()),
					(0, i.$mtb)(new k()),
					(0, i.$mtb)(new M()),
					(0, i.$mtb)(new N()),
					(0, i.$mtb)(new A()),
					(0, i.$mtb)(new R()),
					(0, i.$mtb)(new O()),
					(0, i.$mtb)(new B()),
					(0, i.$mtb)(new L()),
					(0, i.$mtb)(new D()),
					(0, i.$mtb)(new U()),
					(0, i.$mtb)(new z()),
					(0, i.$mtb)(new q()),
					(0, i.$mtb)(new V()),
					(0, i.$mtb)(new G()),
					(0, i.$mtb)(new K()),
					(0, i.$mtb)(new J()),
					(0, i.$mtb)(new W()),
					(0, i.$ntb)(X);
			},
		),
		