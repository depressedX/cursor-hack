import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/core/selection.js';
import '../../../common/editorContextKeys.js';
import '../../../common/model.js';
import '../../../common/model/textModel.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../css!vs/editor/contrib/bracketMatching/browser/bracketMatching.js';
define(
			de[1684],
			he([
				1, 0, 15, 27, 3, 46, 38, 48, 17, 104, 71, 64, 122, 4, 11, 43, 51, 35,
				2285,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*keyCodes*/,
 w /*lifecycle*/,
 E /*editorExtensions*/,
 C /*editorOptions*/,
 d /*position*/,
 m /*range*/,
 r /*selection*/,
 u /*editorContextKeys*/,
 a /*model*/,
 h /*textModel*/,
 c /*nls*/,
 n /*actions*/,
 g /*keybindingsRegistry*/,
 p /*colorRegistry*/,
 o /*themeService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ezb = void 0),
					(c = mt(c));
				const f = (0, p.$wP)(
					"editorOverviewRuler.bracketMatchForeground",
					"#A0A0A0",
					c.localize(865, null),
				);
				class b extends E.$itb {
					constructor() {
						super({
							id: "editor.action.jumpToBracket",
							label: c.localize(866, null),
							alias: "Go to Bracket",
							precondition: void 0,
							kbOpts: {
								kbExpr: u.EditorContextKeys.editorTextFocus,
								primary:
									i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.Backslash,
								weight: g.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(S, I) {
						$.get(I)?.jumpToBracket();
					}
				}
				class s extends E.$itb {
					constructor() {
						super({
							id: "editor.action.selectToBracket",
							label: c.localize(867, null),
							alias: "Select to Bracket",
							precondition: void 0,
							metadata: {
								description: c.localize2(
									870,
									"Select the text inside and including the brackets or curly braces",
								),
								args: [
									{
										name: "args",
										schema: {
											type: "object",
											properties: {
												selectBrackets: { type: "boolean", default: !0 },
											},
										},
									},
								],
							},
						});
					}
					run(S, I, T) {
						let P = !0;
						T && T.selectBrackets === !1 && (P = !1),
							$.get(I)?.selectToBracket(P);
					}
				}
				class l extends E.$itb {
					constructor() {
						super({
							id: "editor.action.removeBrackets",
							label: c.localize(868, null),
							alias: "Remove Brackets",
							precondition: void 0,
							kbOpts: {
								kbExpr: u.EditorContextKeys.editorTextFocus,
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.Backspace,
								weight: g.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(S, I) {
						$.get(I)?.removeBrackets(this.id);
					}
				}
				class y {
					constructor(S, I, T) {
						(this.position = S), (this.brackets = I), (this.options = T);
					}
				}
				class $ extends w.$1c {
					static {
						this.ID = "editor.contrib.bracketMatchingController";
					}
					static get(S) {
						return S.getContribution($.ID);
					}
					constructor(S) {
						super(),
							(this.a = S),
							(this.b = []),
							(this.c = 0),
							(this.f = this.a.createDecorationsCollection()),
							(this.g = this.D(new t.$Yh(() => this.n(), 50))),
							(this.h = this.a.getOption(C.EditorOption.matchBrackets)),
							this.g.schedule(),
							this.D(
								S.onDidChangeCursorPosition((I) => {
									this.h !== "never" && this.g.schedule();
								}),
							),
							this.D(
								S.onDidChangeModelContent((I) => {
									this.g.schedule();
								}),
							),
							this.D(
								S.onDidChangeModel((I) => {
									(this.b = []), this.g.schedule();
								}),
							),
							this.D(
								S.onDidChangeModelLanguageConfiguration((I) => {
									(this.b = []), this.g.schedule();
								}),
							),
							this.D(
								S.onDidChangeConfiguration((I) => {
									I.hasChanged(C.EditorOption.matchBrackets) &&
										((this.h = this.a.getOption(C.EditorOption.matchBrackets)),
										this.f.clear(),
										(this.b = []),
										(this.c = 0),
										this.g.schedule());
								}),
							),
							this.D(
								S.onDidBlurEditorWidget(() => {
									this.g.schedule();
								}),
							),
							this.D(
								S.onDidFocusEditorWidget(() => {
									this.g.schedule();
								}),
							);
					}
					jumpToBracket() {
						if (!this.a.hasModel()) return;
						const S = this.a.getModel(),
							I = this.a.getSelections().map((T) => {
								const P = T.getStartPosition(),
									k = S.bracketPairs.matchBracket(P);
								let L = null;
								if (k)
									k[0].containsPosition(P) && !k[1].containsPosition(P)
										? (L = k[1].getStartPosition())
										: k[1].containsPosition(P) && (L = k[0].getStartPosition());
								else {
									const D = S.bracketPairs.findEnclosingBrackets(P);
									if (D) L = D[1].getStartPosition();
									else {
										const M = S.bracketPairs.findNextBracket(P);
										M && M.range && (L = M.range.getStartPosition());
									}
								}
								return L
									? new r.$kL(L.lineNumber, L.column, L.lineNumber, L.column)
									: new r.$kL(P.lineNumber, P.column, P.lineNumber, P.column);
							});
						this.a.setSelections(I), this.a.revealRange(I[0]);
					}
					selectToBracket(S) {
						if (!this.a.hasModel()) return;
						const I = this.a.getModel(),
							T = [];
						this.a.getSelections().forEach((P) => {
							const k = P.getStartPosition();
							let L = I.bracketPairs.matchBracket(k);
							if (!L && ((L = I.bracketPairs.findEnclosingBrackets(k)), !L)) {
								const N = I.bracketPairs.findNextBracket(k);
								N &&
									N.range &&
									(L = I.bracketPairs.matchBracket(N.range.getStartPosition()));
							}
							let D = null,
								M = null;
							if (L) {
								L.sort(m.$iL.compareRangesUsingStarts);
								const [N, A] = L;
								if (
									((D = S ? N.getStartPosition() : N.getEndPosition()),
									(M = S ? A.getEndPosition() : A.getStartPosition()),
									A.containsPosition(k))
								) {
									const R = D;
									(D = M), (M = R);
								}
							}
							D &&
								M &&
								T.push(
									new r.$kL(D.lineNumber, D.column, M.lineNumber, M.column),
								);
						}),
							T.length > 0 &&
								(this.a.setSelections(T), this.a.revealRange(T[0]));
					}
					removeBrackets(S) {
						if (!this.a.hasModel()) return;
						const I = this.a.getModel();
						this.a.getSelections().forEach((T) => {
							const P = T.getPosition();
							let k = I.bracketPairs.matchBracket(P);
							k || (k = I.bracketPairs.findEnclosingBrackets(P)),
								k &&
									(this.a.pushUndoStop(),
									this.a.executeEdits(S, [
										{ range: k[0], text: "" },
										{ range: k[1], text: "" },
									]),
									this.a.pushUndoStop());
						});
					}
					static {
						this.j = h.$eY.register({
							description: "bracket-match-overview",
							stickiness: a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "bracket-match",
							overviewRuler: {
								color: (0, o.$jP)(f),
								position: a.OverviewRulerLane.Center,
							},
						});
					}
					static {
						this.m = h.$eY.register({
							description: "bracket-match-no-overview",
							stickiness: a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "bracket-match",
						});
					}
					n() {
						if (this.h === "never") return;
						this.q();
						const S = [];
						let I = 0;
						for (const T of this.b) {
							const P = T.brackets;
							P &&
								((S[I++] = { range: P[0], options: T.options }),
								(S[I++] = { range: P[1], options: T.options }));
						}
						this.f.set(S);
					}
					q() {
						if (!this.a.hasModel() || !this.a.hasWidgetFocus()) {
							(this.b = []), (this.c = 0);
							return;
						}
						const S = this.a.getSelections();
						if (S.length > 100) {
							(this.b = []), (this.c = 0);
							return;
						}
						const I = this.a.getModel(),
							T = I.getVersionId();
						let P = [];
						this.c === T && (P = this.b);
						const k = [];
						let L = 0;
						for (let R = 0, O = S.length; R < O; R++) {
							const B = S[R];
							B.isEmpty() && (k[L++] = B.getStartPosition());
						}
						k.length > 1 && k.sort(d.$hL.compare);
						const D = [];
						let M = 0,
							N = 0;
						const A = P.length;
						for (let R = 0, O = k.length; R < O; R++) {
							const B = k[R];
							for (; N < A && P[N].position.isBefore(B); ) N++;
							if (N < A && P[N].position.equals(B)) D[M++] = P[N];
							else {
								let U = I.bracketPairs.matchBracket(B, 20),
									z = $.j;
								!U &&
									this.h === "always" &&
									((U = I.bracketPairs.findEnclosingBrackets(B, 20)),
									(z = $.m)),
									(D[M++] = new y(B, U, z));
							}
						}
						(this.b = D), (this.c = T);
					}
				}
				(e.$ezb = $),
					(0, E.$qtb)(
						$.ID,
						$,
						E.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, E.$ntb)(s),
					(0, E.$ntb)(b),
					(0, E.$ntb)(l),
					n.$ZX.appendMenuItem(n.$XX.MenubarGoMenu, {
						group: "5_infile_nav",
						command: {
							id: "editor.action.jumpToBracket",
							title: c.localize(869, null),
						},
						order: 2,
					});
			},
		),
		