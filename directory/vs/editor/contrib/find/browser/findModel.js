import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arraysFind.js';
import '../../../../base/common/async.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uint.js';
import '../../../common/commands/replaceCommand.js';
import '../../../common/config/editorOptions.js';
import '../../../common/cursorEvents.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/core/selection.js';
import '../../../common/editorCommon.js';
import '../../../common/model.js';
import '../../../common/model/textModelSearch.js';
import './findDecorations.js';
import './replaceAllCommand.js';
import './replacePattern.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(
			de[547],
			he([
				1, 0, 214, 15, 27, 3, 210, 655, 38, 248, 48, 17, 104, 98, 64, 543, 1688,
				2583, 1550, 8,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$k2b =
						e.$j2b =
						e.$i2b =
						e.$h2b =
						e.$g2b =
						e.$f2b =
						e.$e2b =
						e.$d2b =
						e.$c2b =
						e.$b2b =
						e.$a2b =
						e.$_1b =
							void 0),
					(e.$_1b = new b.$5j("findWidgetVisible", !1)),
					(e.$a2b = e.$_1b.toNegated()),
					(e.$b2b = new b.$5j("findInputFocussed", !1)),
					(e.$c2b = new b.$5j("replaceInputFocussed", !1)),
					(e.$d2b = {
						primary: w.KeyMod.Alt | w.KeyCode.KeyC,
						mac: { primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.KeyC },
					}),
					(e.$e2b = {
						primary: w.KeyMod.Alt | w.KeyCode.KeyW,
						mac: { primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.KeyW },
					}),
					(e.$f2b = {
						primary: w.KeyMod.Alt | w.KeyCode.KeyR,
						mac: { primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.KeyR },
					}),
					(e.$g2b = {
						primary: w.KeyMod.Alt | w.KeyCode.KeyL,
						mac: { primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.KeyL },
					}),
					(e.$h2b = {
						primary: w.KeyMod.Alt | w.KeyCode.KeyP,
						mac: { primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.KeyP },
					}),
					(e.$i2b = {
						StartFindAction: "actions.find",
						StartFindWithSelection: "actions.findWithSelection",
						StartFindWithArgs: "editor.actions.findWithArgs",
						NextMatchFindAction: "editor.action.nextMatchFindAction",
						PreviousMatchFindAction: "editor.action.previousMatchFindAction",
						GoToMatchFindAction: "editor.action.goToMatchFindAction",
						NextSelectionMatchFindAction:
							"editor.action.nextSelectionMatchFindAction",
						PreviousSelectionMatchFindAction:
							"editor.action.previousSelectionMatchFindAction",
						StartFindReplaceAction: "editor.action.startFindReplaceAction",
						CloseFindWidgetCommand: "closeFindWidget",
						ToggleCaseSensitiveCommand: "toggleFindCaseSensitive",
						ToggleWholeWordCommand: "toggleFindWholeWord",
						ToggleRegexCommand: "toggleFindRegex",
						ToggleSearchScopeCommand: "toggleFindInSelection",
						TogglePreserveCaseCommand: "togglePreserveCase",
						ReplaceOneAction: "editor.action.replaceOne",
						ReplaceAllAction: "editor.action.replaceAll",
						SelectAllMatchesAction: "editor.action.selectAllMatches",
						StartAiInstantSearchAction: "editor.action.startAiInstantSearch",
					}),
					(e.$j2b = 19999);
				const s = 240;
				class l {
					constructor($, v) {
						(this.c = new E.$Zc()),
							(this.a = $),
							(this.b = v),
							(this.j = !1),
							(this.g = new i.$Wh()),
							(this.d = new p.$71b($)),
							this.c.add(this.d),
							(this.h = new i.$Yh(() => {
								if (this.a.hasModel()) return this.n(!1);
							}, 100)),
							this.c.add(this.h),
							this.c.add(
								this.a.onDidChangeCursorPosition((S) => {
									(S.reason === r.CursorChangeReason.Explicit ||
										S.reason === r.CursorChangeReason.Undo ||
										S.reason === r.CursorChangeReason.Redo) &&
										this.d.setStartPosition(this.a.getPosition());
								}),
							),
							(this.f = !1),
							this.c.add(
								this.a.onDidChangeModelContent((S) => {
									this.f ||
										(S.isFlush && this.d.reset(),
										this.d.setStartPosition(this.a.getPosition()),
										this.h.schedule());
								}),
							),
							this.c.add(this.b.onFindReplaceStateChange((S) => this.k(S))),
							this.n(!1, this.b.searchScope);
					}
					dispose() {
						(this.j = !0), (0, E.$Vc)(this.g), this.c.dispose();
					}
					k($) {
						this.j ||
							(this.a.hasModel() &&
								($.searchString ||
									$.isReplaceRevealed ||
									$.isRegex ||
									$.wholeWord ||
									$.matchCase ||
									$.searchScope) &&
								(this.a.getModel().isTooLargeForSyncing()
									? (this.g.cancel(),
										this.g.setIfNotSet(() => {
											$.searchScope
												? this.n($.moveCursor, this.b.searchScope)
												: this.n($.moveCursor);
										}, s))
									: $.searchScope
										? this.n($.moveCursor, this.b.searchScope)
										: this.n($.moveCursor)));
					}
					static l($, v) {
						return v || $.getFullModelRange();
					}
					n($, v) {
						let S = null;
						typeof v < "u"
							? v !== null && (Array.isArray(v) ? (S = v) : (S = [v]))
							: (S = this.d.getFindScopes()),
							S !== null &&
								(S = S.map((k) => {
									if (k.startLineNumber !== k.endLineNumber) {
										let L = k.endLineNumber;
										return (
											k.endColumn === 1 && (L = L - 1),
											new a.$iL(
												k.startLineNumber,
												1,
												L,
												this.a.getModel().getLineMaxColumn(L),
											)
										);
									}
									return k;
								}));
						const I = this.y(S, !1, e.$j2b);
						this.d.set(I, S);
						const T = this.a.getSelection();
						let P = this.d.getCurrentMatchesPosition(T);
						if (P === 0 && I.length > 0) {
							const k = (0, t.$ob)(
								I.map((L) => L.range),
								(L) => a.$iL.compareRangesUsingStarts(L, T) >= 0,
							);
							P = k > 0 ? k - 1 + 1 : P;
						}
						this.b.changeMatchInfo(P, this.d.getCount(), void 0),
							$ &&
								this.a.getOption(m.EditorOption.find).cursorMoveOnType &&
								this.u(this.d.getStartPosition());
					}
					o() {
						return this.b.matchesCount > 0;
					}
					p() {
						if (!this.o()) {
							const $ = this.d.getFindScope();
							return (
								$ &&
									this.a.revealRangeInCenterIfOutsideViewport(
										$,
										c.ScrollType.Smooth,
									),
								!0
							);
						}
						return !1;
					}
					q($) {
						const v = this.d.setCurrentFindMatch($);
						this.b.changeMatchInfo(v, this.d.getCount(), $),
							this.a.setSelection($),
							this.a.revealRangeInCenterIfOutsideViewport(
								$,
								c.ScrollType.Smooth,
							);
					}
					r($) {
						const v =
							this.b.isRegex &&
							(this.b.searchString.indexOf("^") >= 0 ||
								this.b.searchString.indexOf("$") >= 0);
						let { lineNumber: S, column: I } = $;
						const T = this.a.getModel();
						return (
							v || I === 1
								? (S === 1 ? (S = T.getLineCount()) : S--,
									(I = T.getLineMaxColumn(S)))
								: I--,
							new u.$hL(S, I)
						);
					}
					s($, v = !1) {
						if (!this.b.canNavigateBack()) {
							const M = this.d.matchAfterPosition($);
							M && this.q(M);
							return;
						}
						if (this.d.getCount() < e.$j2b) {
							let M = this.d.matchBeforePosition($);
							M &&
								M.isEmpty() &&
								M.getStartPosition().equals($) &&
								(($ = this.r($)), (M = this.d.matchBeforePosition($))),
								M && this.q(M);
							return;
						}
						if (this.p()) return;
						const S = this.d.getFindScope(),
							I = l.l(this.a.getModel(), S);
						I.getEndPosition().isBefore($) && ($ = I.getEndPosition()),
							$.isBefore(I.getStartPosition()) && ($ = I.getEndPosition());
						const { lineNumber: T, column: P } = $,
							k = this.a.getModel();
						let L = new u.$hL(T, P),
							D = k.findPreviousMatch(
								this.b.searchString,
								L,
								this.b.isRegex,
								this.b.matchCase,
								this.b.wholeWord
									? this.a.getOption(m.EditorOption.wordSeparators)
									: null,
								!1,
							);
						if (
							(D &&
								D.range.isEmpty() &&
								D.range.getStartPosition().equals(L) &&
								((L = this.r(L)),
								(D = k.findPreviousMatch(
									this.b.searchString,
									L,
									this.b.isRegex,
									this.b.matchCase,
									this.b.wholeWord
										? this.a.getOption(m.EditorOption.wordSeparators)
										: null,
									!1,
								))),
							!!D)
						) {
							if (!v && !I.containsRange(D.range))
								return this.s(D.range.getStartPosition(), !0);
							this.q(D.range);
						}
					}
					moveToPrevMatch() {
						this.s(this.a.getSelection().getStartPosition());
					}
					t($) {
						const v =
							this.b.isRegex &&
							(this.b.searchString.indexOf("^") >= 0 ||
								this.b.searchString.indexOf("$") >= 0);
						let { lineNumber: S, column: I } = $;
						const T = this.a.getModel();
						return (
							v || I === T.getLineMaxColumn(S)
								? (S === T.getLineCount() ? (S = 1) : S++, (I = 1))
								: I++,
							new u.$hL(S, I)
						);
					}
					u($) {
						if (!this.b.canNavigateForward()) {
							const S = this.d.matchBeforePosition($);
							S && this.q(S);
							return;
						}
						if (this.d.getCount() < e.$j2b) {
							let S = this.d.matchAfterPosition($);
							S &&
								S.isEmpty() &&
								S.getStartPosition().equals($) &&
								(($ = this.t($)), (S = this.d.matchAfterPosition($))),
								S && this.q(S);
							return;
						}
						const v = this.v($, !1, !0);
						v && this.q(v.range);
					}
					v($, v, S, I = !1) {
						if (this.p()) return null;
						const T = this.d.getFindScope(),
							P = l.l(this.a.getModel(), T);
						P.getEndPosition().isBefore($) && ($ = P.getStartPosition()),
							$.isBefore(P.getStartPosition()) && ($ = P.getStartPosition());
						const { lineNumber: k, column: L } = $,
							D = this.a.getModel();
						let M = new u.$hL(k, L),
							N = D.findNextMatch(
								this.b.searchString,
								M,
								this.b.isRegex,
								this.b.matchCase,
								this.b.wholeWord
									? this.a.getOption(m.EditorOption.wordSeparators)
									: null,
								v,
							);
						return (
							S &&
								N &&
								N.range.isEmpty() &&
								N.range.getStartPosition().equals(M) &&
								((M = this.t(M)),
								(N = D.findNextMatch(
									this.b.searchString,
									M,
									this.b.isRegex,
									this.b.matchCase,
									this.b.wholeWord
										? this.a.getOption(m.EditorOption.wordSeparators)
										: null,
									v,
								))),
							N
								? !I && !P.containsRange(N.range)
									? this.v(N.range.getEndPosition(), v, S, !0)
									: N
								: null
						);
					}
					moveToNextMatch() {
						this.u(this.a.getSelection().getEndPosition());
					}
					w($) {
						const v = this.d.getDecorationRangeAt($);
						v && this.q(v);
					}
					moveToMatch($) {
						this.w($);
					}
					x() {
						return this.b.isRegex
							? (0, f.$$1b)(this.b.replaceString)
							: f.$91b.fromStaticValue(this.b.replaceString);
					}
					replace() {
						if (!this.o()) return;
						const $ = this.x(),
							v = this.a.getSelection(),
							S = this.v(v.getStartPosition(), !0, !1);
						if (S)
							if (v.equalsRange(S.range)) {
								const I = $.buildReplaceString(S.matches, this.b.preserveCase),
									T = new d.$wtb(v, I);
								this.B("replace", T),
									this.d.setStartPosition(
										new u.$hL(v.startLineNumber, v.startColumn + I.length),
									),
									this.n(!0);
							} else
								this.d.setStartPosition(this.a.getPosition()), this.q(S.range);
					}
					y($, v, S) {
						const I = ($ || [null]).map((T) => l.l(this.a.getModel(), T));
						return this.a
							.getModel()
							.findMatches(
								this.b.searchString,
								I,
								this.b.isRegex,
								this.b.matchCase,
								this.b.wholeWord
									? this.a.getOption(m.EditorOption.wordSeparators)
									: null,
								v,
								S,
							);
					}
					replaceAll() {
						if (!this.o()) return;
						const $ = this.d.getFindScopes();
						$ === null && this.b.matchesCount >= e.$j2b ? this.z() : this.A($),
							this.n(!1);
					}
					z() {
						const v = new g.$XU(
							this.b.searchString,
							this.b.isRegex,
							this.b.matchCase,
							this.b.wholeWord
								? this.a.getOption(m.EditorOption.wordSeparators)
								: null,
						).parseSearchRequest();
						if (!v) return;
						let S = v.regex;
						if (!S.multiline) {
							let N = "mu";
							S.ignoreCase && (N += "i"),
								S.global && (N += "g"),
								(S = new RegExp(S.source, N));
						}
						const I = this.a.getModel(),
							T = I.getValue(n.EndOfLinePreference.LF),
							P = I.getFullModelRange(),
							k = this.x();
						let L;
						const D = this.b.preserveCase;
						k.hasReplacementPatterns || D
							? (L = T.replace(S, function () {
									return k.buildReplaceString(arguments, D);
								}))
							: (L = T.replace(S, k.buildReplaceString(null, D)));
						const M = new d.$Atb(P, L, this.a.getSelection());
						this.B("replaceAll", M);
					}
					A($) {
						const v = this.x(),
							S = this.y(
								$,
								v.hasReplacementPatterns || this.b.preserveCase,
								C.Constants.MAX_SAFE_SMALL_INTEGER,
							),
							I = [];
						for (let P = 0, k = S.length; P < k; P++)
							I[P] = v.buildReplaceString(S[P].matches, this.b.preserveCase);
						const T = new o.$81b(
							this.a.getSelection(),
							S.map((P) => P.range),
							I,
						);
						this.B("replaceAll", T);
					}
					selectAllMatches() {
						if (!this.o()) return;
						const $ = this.d.getFindScopes();
						let S = this.y($, !1, C.Constants.MAX_SAFE_SMALL_INTEGER).map(
							(T) =>
								new h.$kL(
									T.range.startLineNumber,
									T.range.startColumn,
									T.range.endLineNumber,
									T.range.endColumn,
								),
						);
						const I = this.a.getSelection();
						for (let T = 0, P = S.length; T < P; T++)
							if (S[T].equalsRange(I)) {
								S = [I].concat(S.slice(0, T)).concat(S.slice(T + 1));
								break;
							}
						this.a.setSelections(S);
					}
					B($, v) {
						try {
							(this.f = !0),
								this.a.pushUndoStop(),
								this.a.executeCommand($, v),
								this.a.pushUndoStop();
						} finally {
							this.f = !1;
						}
					}
				}
				e.$k2b = l;
			},
		),
		