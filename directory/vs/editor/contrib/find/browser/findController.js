import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/editorColorRegistry.js';
import '../../../common/editorContextKeys.js';
import '../../../common/model.js';
import './findModel.js';
import './findOptionsWidget.js';
import './findState.js';
import './findWidget.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../workbench/services/ai/browser/aiMiscServices.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../base/common/event.js';
define(
			de[618],
			he([
				1, 0, 15, 27, 3, 37, 46, 38, 307, 71, 64, 547, 2912, 786, 961, 4, 11,
				121, 8, 49, 39, 43, 40, 63, 21, 35, 137, 72, 6,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
			) {
				"use strict";
				var k;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hfc =
						e.$Gfc =
						e.$Ffc =
						e.$Efc =
						e.$Dfc =
						e.$Cfc =
						e.$Bfc =
						e.$Afc =
						e.$zfc =
						e.$yfc =
						e.$xfc =
						e.$wfc =
						e.$vfc =
						e.$ufc =
						e.FindStartFocusAction =
							void 0),
					(e.$tfc = D),
					(E = mt(E)),
					(g = mt(g));
				const L = 524288;
				function D(J, W = "single", X = !1) {
					if (!J.hasModel()) return null;
					const Y = J.getSelection();
					if (
						(W === "single" && Y.startLineNumber === Y.endLineNumber) ||
						W === "multiple"
					) {
						if (Y.isEmpty()) {
							const ie = J.getConfiguredWordAtPosition(Y.getStartPosition());
							if (ie && X === !1) return ie.word;
						} else if (J.getModel().getValueLengthInRange(Y) < L)
							return J.getModel().getValueInRange(Y);
					}
					return null;
				}
				var M;
				(function (J) {
					(J[(J.NoFocusChange = 0)] = "NoFocusChange"),
						(J[(J.FocusFindInput = 1)] = "FocusFindInput"),
						(J[(J.FocusReplaceInput = 2)] = "FocusReplaceInput");
				})(M || (e.FindStartFocusAction = M = {}));
				let N = class extends w.$1c {
					static {
						k = this;
					}
					static {
						this.ID = "editor.contrib.findController";
					}
					get editor() {
						return this.a;
					}
					static get(W) {
						return W.getContribution(k.ID);
					}
					constructor(W, X, Y, ie, ne, ee) {
						super(),
							(this.r = new P.$re()),
							(this.onDidChangeState = this.r.event),
							(this.a = W),
							(this.b = a.$_1b.bindTo(X)),
							(this.m = X),
							(this.h = Y),
							(this.j = ie),
							(this.n = ne),
							(this.q = ee),
							(this.f = new t.$Jh(500)),
							(this.c = this.D(new c.$l2b())),
							this.w(),
							this.D(this.c.onFindReplaceStateChange((_) => this.t(_))),
							(this.g = null),
							this.D(
								this.a.onDidChangeModel(() => {
									const _ = this.a.getModel() && this.c.isRevealed;
									this.s(),
										this.c.change(
											{
												searchScope: null,
												matchCase: this.h.getBoolean(
													"editor.matchCase",
													v.StorageScope.WORKSPACE,
													!1,
												),
												wholeWord: this.h.getBoolean(
													"editor.wholeWord",
													v.StorageScope.WORKSPACE,
													!1,
												),
												isRegex: this.h.getBoolean(
													"editor.isRegex",
													v.StorageScope.WORKSPACE,
													!1,
												),
												preserveCase: this.h.getBoolean(
													"editor.preserveCase",
													v.StorageScope.WORKSPACE,
													!1,
												),
											},
											!1,
										),
										_ &&
											this.y({
												forceRevealReplace: !1,
												seedSearchStringFromSelection: "none",
												seedSearchStringFromNonEmptySelection: !1,
												seedSearchStringFromGlobalClipboard: !1,
												shouldFocus: M.NoFocusChange,
												shouldAnimate: !1,
												updateSearchScope: !1,
												loop: this.a.getOption(d.EditorOption.find).loop,
											});
								}),
							),
							this.D(this.c.onFindReplaceStateChange((_) => this.r.fire(_)));
					}
					dispose() {
						this.s(), super.dispose();
					}
					s() {
						this.g && (this.g.dispose(), (this.g = null));
					}
					t(W) {
						this.u(W),
							W.isRevealed &&
								(this.c.isRevealed
									? this.b.set(!0)
									: (this.b.reset(), this.s())),
							W.searchString && this.setGlobalBufferTerm(this.c.searchString);
					}
					u(W) {
						W.isRegex &&
							this.h.store(
								"editor.isRegex",
								this.c.actualIsRegex,
								v.StorageScope.WORKSPACE,
								v.StorageTarget.MACHINE,
							),
							W.wholeWord &&
								this.h.store(
									"editor.wholeWord",
									this.c.actualWholeWord,
									v.StorageScope.WORKSPACE,
									v.StorageTarget.MACHINE,
								),
							W.matchCase &&
								this.h.store(
									"editor.matchCase",
									this.c.actualMatchCase,
									v.StorageScope.WORKSPACE,
									v.StorageTarget.MACHINE,
								),
							W.preserveCase &&
								this.h.store(
									"editor.preserveCase",
									this.c.actualPreserveCase,
									v.StorageScope.WORKSPACE,
									v.StorageTarget.MACHINE,
								);
					}
					w() {
						this.c.change(
							{
								matchCase: this.h.getBoolean(
									"editor.matchCase",
									v.StorageScope.WORKSPACE,
									this.c.matchCase,
								),
								wholeWord: this.h.getBoolean(
									"editor.wholeWord",
									v.StorageScope.WORKSPACE,
									this.c.wholeWord,
								),
								isRegex: this.h.getBoolean(
									"editor.isRegex",
									v.StorageScope.WORKSPACE,
									this.c.isRegex,
								),
								preserveCase: this.h.getBoolean(
									"editor.preserveCase",
									v.StorageScope.WORKSPACE,
									this.c.preserveCase,
								),
							},
							!1,
						);
					}
					isFindInputFocused() {
						return !!a.$b2b.getValue(this.m);
					}
					getState() {
						return this.c;
					}
					closeFindWidget() {
						this.c.change({ isRevealed: !1, searchScope: null }, !1),
							this.a.focus();
					}
					toggleCaseSensitive() {
						this.c.change({ matchCase: !this.c.matchCase }, !1),
							this.c.isRevealed || this.highlightFindOptions();
					}
					toggleWholeWords() {
						this.c.change({ wholeWord: !this.c.wholeWord }, !1),
							this.c.isRevealed || this.highlightFindOptions();
					}
					toggleRegex() {
						this.c.change({ isRegex: !this.c.isRegex }, !1),
							this.c.isRevealed || this.highlightFindOptions();
					}
					togglePreserveCase() {
						this.c.change({ preserveCase: !this.c.preserveCase }, !1),
							this.c.isRevealed || this.highlightFindOptions();
					}
					toggleSearchScope() {
						if (this.c.searchScope) this.c.change({ searchScope: null }, !0);
						else if (this.a.hasModel()) {
							let W = this.a.getSelections();
							(W = W.map(
								(X) => (
									X.endColumn === 1 &&
										X.endLineNumber > X.startLineNumber &&
										(X = X.setEndPosition(
											X.endLineNumber - 1,
											this.a.getModel().getLineMaxColumn(X.endLineNumber - 1),
										)),
									X.isEmpty() ? null : X
								),
							).filter((X) => !!X)),
								W.length && this.c.change({ searchScope: W }, !0);
						}
					}
					setSearchString(W) {
						this.c.isRegex && (W = E.$of(W)),
							this.c.change({ searchString: W }, !1);
					}
					highlightFindOptions(W = !1) {}
					async y(W, X) {
						if ((this.s(), !this.a.hasModel())) return;
						const Y = { ...X, isRevealed: !0 };
						if (W.seedSearchStringFromSelection === "single") {
							const ie = D(
								this.a,
								W.seedSearchStringFromSelection,
								W.seedSearchStringFromNonEmptySelection,
							);
							ie &&
								(this.c.isRegex
									? (Y.searchString = E.$of(ie))
									: (Y.searchString = ie));
						} else if (
							W.seedSearchStringFromSelection === "multiple" &&
							!W.updateSearchScope
						) {
							const ie = D(this.a, W.seedSearchStringFromSelection);
							ie && (Y.searchString = ie);
						}
						if (!Y.searchString && W.seedSearchStringFromGlobalClipboard) {
							const ie = await this.getGlobalBufferTerm();
							if (!this.a.hasModel()) return;
							ie && (Y.searchString = ie);
						}
						if (
							(W.forceRevealReplace || Y.isReplaceRevealed
								? (Y.isReplaceRevealed = !0)
								: this.b.get() || (Y.isReplaceRevealed = !1),
							W.updateSearchScope)
						) {
							const ie = this.a.getSelections();
							ie.some((ne) => !ne.isEmpty()) && (Y.searchScope = ie);
						}
						(Y.loop = W.loop),
							this.c.change(Y, !1),
							this.g || (this.g = new a.$k2b(this.a, this.c));
					}
					start(W, X) {
						return this.y(W, X);
					}
					moveToNextMatch() {
						return this.g ? (this.g.moveToNextMatch(), !0) : !1;
					}
					moveToPrevMatch() {
						return this.g ? (this.g.moveToPrevMatch(), !0) : !1;
					}
					goToMatch(W) {
						return this.g ? (this.g.moveToMatch(W), !0) : !1;
					}
					replace() {
						return this.g ? (this.g.replace(), !0) : !1;
					}
					replaceAll() {
						return this.g
							? this.a.getModel()?.isTooLargeForHeapOperation()
								? (this.n.warn(g.localize(1004, null)), !1)
								: (this.g.replaceAll(), !0)
							: !1;
					}
					selectAllMatches() {
						return this.g
							? (this.g.selectAllMatches(), this.a.focus(), !0)
							: !1;
					}
					async getGlobalBufferTerm() {
						return this.a.getOption(d.EditorOption.find).globalFindClipboard &&
							this.a.hasModel() &&
							!this.a.getModel().isTooLargeForSyncing()
							? this.j.readFindText()
							: "";
					}
					setGlobalBufferTerm(W) {
						this.a.getOption(d.EditorOption.find).globalFindClipboard &&
							this.a.hasModel() &&
							!this.a.getModel().isTooLargeForSyncing() &&
							this.j.writeFindText(W);
					}
				};
				(e.$ufc = N),
					(e.$ufc =
						N =
						k =
							Ne(
								[
									j(1, f.$6j),
									j(2, v.$lq),
									j(3, o.$Vxb),
									j(4, y.$4N),
									j(5, T.$Uyb),
								],
								N,
							));
				let A = class extends N {
					constructor(W, X, Y, ie, ne, ee, _, te, Q) {
						super(W, Y, _, te, ee, Q),
							(this.G = X),
							(this.H = ie),
							(this.I = ne),
							(this.F = new P.$re()),
							(this.onWidgetHeightChanged = this.F.event),
							(this.z = null),
							(this.C = null);
					}
					async y(W, X) {
						this.z || this.L();
						const Y = this.a.getSelection();
						let ie = !1;
						switch (this.a.getOption(d.EditorOption.find).autoFindInSelection) {
							case "always":
								ie = !0;
								break;
							case "never":
								ie = !1;
								break;
							case "multiline": {
								ie = !!Y && Y.startLineNumber !== Y.endLineNumber;
								break;
							}
							default:
								break;
						}
						(W.updateSearchScope = W.updateSearchScope || ie),
							await super.y(W, X),
							this.z &&
								(W.shouldFocus === M.FocusReplaceInput
									? this.z.focusReplaceInput()
									: W.shouldFocus === M.FocusFindInput &&
										this.z.focusFindInput());
					}
					focusFindInputWithoutSelecting() {
						this.z && this.z.focusFindInputWithoutSelecting();
					}
					isActive() {
						return this.z?.isActive() ?? !1;
					}
					getWidgetHeight() {
						if (this.c.isRevealed) return this.z?.getHeight();
					}
					highlightFindOptions(W = !1) {
						this.z || this.L(),
							this.c.isRevealed && !W
								? this.z.highlightFindOptions()
								: this.C.highlightFindOptions();
					}
					L() {
						(this.z = this.D(
							new n.$h7b(
								this.a,
								this,
								this.c,
								this.G,
								this.H,
								this.m,
								this.I,
								this.h,
								this.n,
								this.q,
								this.F.fire.bind(this.F),
							),
						)),
							(this.C = this.D(new h.$$6b(this.a, this.c, this.H)));
					}
					saveViewState() {
						return this.z?.getViewState();
					}
					restoreViewState(W) {
						this.z?.setViewState(W);
					}
				};
				(e.$vfc = A),
					(e.$vfc = A =
						Ne(
							[
								j(1, b.$Wxb),
								j(2, f.$6j),
								j(3, s.$uZ),
								j(4, S.$iP),
								j(5, y.$4N),
								j(6, v.$lq),
								j(7, o.$Vxb),
								j(8, T.$Uyb),
							],
							A,
						)),
					(e.$wfc = (0, C.$otb)(
						new C.$jtb({
							id: a.$i2b.StartFindAction,
							label: g.localize(1005, null),
							alias: "Find",
							precondition: f.$Kj.or(
								r.EditorContextKeys.focus,
								f.$Kj.has("editorIsOpen"),
							),
							kbOpts: {
								kbExpr: null,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyF,
								weight: l.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: p.$XX.MenubarEditMenu,
								group: "3_find",
								title: g.localize(1006, null),
								order: 1,
							},
						}),
					)),
					e.$wfc.addImplementation(0, (J, W, X) => {
						const Y = N.get(W);
						return Y
							? Y.start({
									forceRevealReplace: !1,
									seedSearchStringFromSelection:
										W.getOption(d.EditorOption.find)
											.seedSearchStringFromSelection !== "never"
											? "single"
											: "none",
									seedSearchStringFromNonEmptySelection:
										W.getOption(d.EditorOption.find)
											.seedSearchStringFromSelection === "selection",
									seedSearchStringFromGlobalClipboard: W.getOption(
										d.EditorOption.find,
									).globalFindClipboard,
									shouldFocus: M.FocusFindInput,
									shouldAnimate: !0,
									updateSearchScope: !1,
									loop: W.getOption(d.EditorOption.find).loop,
								})
							: !1;
					});
				const R = {
					description: "Open a new In-Editor Find Widget.",
					args: [
						{
							name: "Open a new In-Editor Find Widget args",
							schema: {
								properties: {
									searchString: { type: "string" },
									replaceString: { type: "string" },
									isRegex: { type: "boolean" },
									matchWholeWord: { type: "boolean" },
									isCaseSensitive: { type: "boolean" },
									preserveCase: { type: "boolean" },
									findInSelection: { type: "boolean" },
								},
							},
						},
					],
				};
				class O extends C.$itb {
					constructor() {
						super({
							id: a.$i2b.StartFindWithArgs,
							label: g.localize(1007, null),
							alias: "Find With Arguments",
							precondition: void 0,
							kbOpts: {
								kbExpr: null,
								primary: 0,
								weight: l.KeybindingWeight.EditorContrib,
							},
							metadata: R,
						});
					}
					async run(W, X, Y) {
						const ie = N.get(X);
						if (ie) {
							const ne = Y
								? {
										searchString: Y.searchString,
										replaceString: Y.replaceString,
										isReplaceRevealed: Y.replaceString !== void 0,
										isRegex: Y.isRegex,
										wholeWord: Y.matchWholeWord,
										matchCase: Y.isCaseSensitive,
										preserveCase: Y.preserveCase,
									}
								: {};
							await ie.start(
								{
									forceRevealReplace: !1,
									seedSearchStringFromSelection:
										ie.getState().searchString.length === 0 &&
										X.getOption(d.EditorOption.find)
											.seedSearchStringFromSelection !== "never"
											? "single"
											: "none",
									seedSearchStringFromNonEmptySelection:
										X.getOption(d.EditorOption.find)
											.seedSearchStringFromSelection === "selection",
									seedSearchStringFromGlobalClipboard: !0,
									shouldFocus: M.FocusFindInput,
									shouldAnimate: !0,
									updateSearchScope: Y?.findInSelection || !1,
									loop: X.getOption(d.EditorOption.find).loop,
								},
								ne,
							),
								ie.setGlobalBufferTerm(ie.getState().searchString);
						}
					}
				}
				e.$xfc = O;
				class B extends C.$itb {
					constructor() {
						super({
							id: a.$i2b.StartFindWithSelection,
							label: g.localize(1008, null),
							alias: "Find With Selection",
							precondition: void 0,
							kbOpts: {
								kbExpr: null,
								primary: 0,
								mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyE },
								weight: l.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(W, X) {
						const Y = N.get(X);
						Y &&
							(await Y.start({
								forceRevealReplace: !1,
								seedSearchStringFromSelection: "multiple",
								seedSearchStringFromNonEmptySelection: !1,
								seedSearchStringFromGlobalClipboard: !1,
								shouldFocus: M.NoFocusChange,
								shouldAnimate: !0,
								updateSearchScope: !1,
								loop: X.getOption(d.EditorOption.find).loop,
							}),
							Y.setGlobalBufferTerm(Y.getState().searchString));
					}
				}
				e.$yfc = B;
				class U extends C.$itb {
					async run(W, X) {
						const Y = N.get(X);
						Y &&
							!this.d(Y) &&
							(await Y.start({
								forceRevealReplace: !1,
								seedSearchStringFromSelection:
									Y.getState().searchString.length === 0 &&
									X.getOption(d.EditorOption.find)
										.seedSearchStringFromSelection !== "never"
										? "single"
										: "none",
								seedSearchStringFromNonEmptySelection:
									X.getOption(d.EditorOption.find)
										.seedSearchStringFromSelection === "selection",
								seedSearchStringFromGlobalClipboard: !0,
								shouldFocus: M.NoFocusChange,
								shouldAnimate: !0,
								updateSearchScope: !1,
								loop: X.getOption(d.EditorOption.find).loop,
							}),
							this.d(Y));
					}
				}
				e.$zfc = U;
				class z extends U {
					constructor() {
						super({
							id: a.$i2b.NextMatchFindAction,
							label: g.localize(1009, null),
							alias: "Find Next",
							precondition: void 0,
							kbOpts: [
								{
									kbExpr: r.EditorContextKeys.focus,
									primary: i.KeyCode.F3,
									mac: {
										primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyG,
										secondary: [i.KeyCode.F3],
									},
									weight: l.KeybindingWeight.EditorContrib,
								},
								{
									kbExpr: f.$Kj.and(r.EditorContextKeys.focus, a.$b2b),
									primary: i.KeyCode.Enter,
									weight: l.KeybindingWeight.EditorContrib,
								},
							],
						});
					}
					d(W) {
						return W.moveToNextMatch() ? (W.editor.pushUndoStop(), !0) : !1;
					}
				}
				e.$Afc = z;
				class F extends C.$itb {
					constructor() {
						super({
							id: a.$i2b.StartAiInstantSearchAction,
							label: "Start AI Instant Search",
							alias: "Start AI Instant Search",
							precondition: void 0,
							kbOpts: {
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyG,
								weight: l.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(W, X) {
						const Y = W?.get(I.$pfc);
						if (!Y) return;
						const ie = X.getSelection(),
							ne =
								X.getOption(d.EditorOption.find)
									.seedSearchStringFromSelection === "selection" && ie
									? X.getModel()?.getValueInRange(ie)
									: "";
						Y.show(ne || "");
					}
				}
				e.$Bfc = F;
				class x extends U {
					constructor() {
						super({
							id: a.$i2b.PreviousMatchFindAction,
							label: g.localize(1010, null),
							alias: "Find Previous",
							precondition: void 0,
							kbOpts: [
								{
									kbExpr: r.EditorContextKeys.focus,
									primary: i.KeyMod.Shift | i.KeyCode.F3,
									mac: {
										primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyG,
										secondary: [i.KeyMod.Shift | i.KeyCode.F3],
									},
									weight: l.KeybindingWeight.EditorContrib,
								},
								{
									kbExpr: f.$Kj.and(r.EditorContextKeys.focus, a.$b2b),
									primary: i.KeyMod.Shift | i.KeyCode.Enter,
									weight: l.KeybindingWeight.EditorContrib,
								},
							],
						});
					}
					d(W) {
						return W.moveToPrevMatch();
					}
				}
				e.$Cfc = x;
				class H extends C.$itb {
					constructor() {
						super({
							id: a.$i2b.GoToMatchFindAction,
							label: g.localize(1011, null),
							alias: "Go to Match...",
							precondition: a.$_1b,
						}),
							(this.d = []);
					}
					run(W, X, Y) {
						const ie = N.get(X);
						if (!ie) return;
						const ne = ie.getState().matchesCount;
						if (ne < 1) {
							W.get(y.$4N).notify({
								severity: y.Severity.Warning,
								message: g.localize(1012, null),
							});
							return;
						}
						const ee = W.get($.$DJ),
							_ = new w.$Zc(),
							te = _.add(ee.createInputBox());
						te.placeholder = g.localize(1013, null, ne);
						const Q = (se) => {
								const re = parseInt(se);
								if (isNaN(re)) return;
								const le = ie.getState().matchesCount;
								if (re > 0 && re <= le) return re - 1;
								if (re < 0 && re >= -le) return le + re;
							},
							Z = (se) => {
								const re = Q(se);
								if (typeof re == "number") {
									(te.validationMessage = void 0), ie.goToMatch(re);
									const le = ie.getState().currentMatch;
									le && this.j(X, le);
								} else
									(te.validationMessage = g.localize(
										1014,
										null,
										ie.getState().matchesCount,
									)),
										this.h(X);
							};
						_.add(
							te.onDidChangeValue((se) => {
								Z(se);
							}),
						),
							_.add(
								te.onDidAccept(() => {
									const se = Q(te.value);
									typeof se == "number"
										? (ie.goToMatch(se), te.hide())
										: (te.validationMessage = g.localize(
												1015,
												null,
												ie.getState().matchesCount,
											));
								}),
							),
							_.add(
								te.onDidHide(() => {
									this.h(X), _.dispose();
								}),
							),
							te.show();
					}
					h(W) {
						W.changeDecorations((X) => {
							this.d = X.deltaDecorations(this.d, []);
						});
					}
					j(W, X) {
						W.changeDecorations((Y) => {
							this.d = Y.deltaDecorations(this.d, [
								{
									range: X,
									options: {
										description: "find-match-quick-access-range-highlight",
										className: "rangeHighlight",
										isWholeLine: !0,
									},
								},
								{
									range: X,
									options: {
										description:
											"find-match-quick-access-range-highlight-overview",
										overviewRuler: {
											color: (0, S.$jP)(m.$8T),
											position: u.OverviewRulerLane.Full,
										},
									},
								},
							]);
						});
					}
				}
				e.$Dfc = H;
				class q extends C.$itb {
					async run(W, X) {
						const Y = N.get(X);
						if (!Y) return;
						const ie = D(X, "single", !1);
						ie && Y.setSearchString(ie),
							this.d(Y) ||
								(await Y.start({
									forceRevealReplace: !1,
									seedSearchStringFromSelection: "none",
									seedSearchStringFromNonEmptySelection: !1,
									seedSearchStringFromGlobalClipboard: !1,
									shouldFocus: M.NoFocusChange,
									shouldAnimate: !0,
									updateSearchScope: !1,
									loop: X.getOption(d.EditorOption.find).loop,
								}),
								this.d(Y));
					}
				}
				e.$Efc = q;
				class V extends q {
					constructor() {
						super({
							id: a.$i2b.NextSelectionMatchFindAction,
							label: g.localize(1016, null),
							alias: "Find Next Selection",
							precondition: void 0,
							kbOpts: {
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.F3,
								weight: l.KeybindingWeight.EditorContrib,
							},
						});
					}
					d(W) {
						return W.moveToNextMatch();
					}
				}
				e.$Ffc = V;
				class G extends q {
					constructor() {
						super({
							id: a.$i2b.PreviousSelectionMatchFindAction,
							label: g.localize(1017, null),
							alias: "Find Previous Selection",
							precondition: void 0,
							kbOpts: {
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.F3,
								weight: l.KeybindingWeight.EditorContrib,
							},
						});
					}
					d(W) {
						return W.moveToPrevMatch();
					}
				}
				(e.$Gfc = G),
					(e.$Hfc = (0, C.$otb)(
						new C.$jtb({
							id: a.$i2b.StartFindReplaceAction,
							label: g.localize(1018, null),
							alias: "Replace",
							precondition: f.$Kj.or(
								r.EditorContextKeys.focus,
								f.$Kj.has("editorIsOpen"),
							),
							kbOpts: {
								kbExpr: null,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyH,
								mac: {
									primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.KeyF,
								},
								weight: l.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: p.$XX.MenubarEditMenu,
								group: "3_find",
								title: g.localize(1019, null),
								order: 2,
							},
						}),
					)),
					e.$Hfc.addImplementation(0, (J, W, X) => {
						if (!W.hasModel() || W.getOption(d.EditorOption.readOnly))
							return !1;
						const Y = N.get(W);
						if (!Y) return !1;
						const ie = W.getSelection(),
							ne = Y.isFindInputFocused(),
							ee =
								!ie.isEmpty() &&
								ie.startLineNumber === ie.endLineNumber &&
								W.getOption(d.EditorOption.find)
									.seedSearchStringFromSelection !== "never" &&
								!ne,
							_ = ne || ee ? M.FocusReplaceInput : M.FocusFindInput;
						return Y.start({
							forceRevealReplace: !0,
							seedSearchStringFromSelection: ee ? "single" : "none",
							seedSearchStringFromNonEmptySelection:
								W.getOption(d.EditorOption.find)
									.seedSearchStringFromSelection === "selection",
							seedSearchStringFromGlobalClipboard:
								W.getOption(d.EditorOption.find)
									.seedSearchStringFromSelection !== "never",
							shouldFocus: _,
							shouldAnimate: !0,
							updateSearchScope: !1,
							loop: W.getOption(d.EditorOption.find).loop,
						});
					}),
					(0, C.$qtb)(N.ID, A, C.EditorContributionInstantiation.Eager),
					(0, C.$ntb)(O),
					(0, C.$ntb)(B),
					(0, C.$ntb)(z),
					(0, C.$ntb)(x),
					(0, C.$ntb)(H),
					(0, C.$ntb)(V),
					(0, C.$ntb)(G);
				const K = C.$htb.bindToContribution(N.get);
				(0, C.$mtb)(
					new K({
						id: a.$i2b.CloseFindWidgetCommand,
						precondition: a.$_1b,
						handler: (J) => J.closeFindWidget(),
						kbOpts: {
							weight: l.KeybindingWeight.EditorContrib + 5,
							kbExpr: f.$Kj.and(
								r.EditorContextKeys.focus,
								f.$Kj.not("isComposing"),
							),
							primary: i.KeyCode.Escape,
							secondary: [i.KeyMod.Shift | i.KeyCode.Escape],
						},
					}),
				),
					(0, C.$mtb)(
						new K({
							id: a.$i2b.ToggleCaseSensitiveCommand,
							precondition: void 0,
							handler: (J) => J.toggleCaseSensitive(),
							kbOpts: {
								weight: l.KeybindingWeight.EditorContrib + 5,
								kbExpr: r.EditorContextKeys.focus,
								primary: a.$d2b.primary,
								mac: a.$d2b.mac,
								win: a.$d2b.win,
								linux: a.$d2b.linux,
							},
						}),
					),
					(0, C.$mtb)(
						new K({
							id: a.$i2b.ToggleWholeWordCommand,
							precondition: void 0,
							handler: (J) => J.toggleWholeWords(),
							kbOpts: {
								weight: l.KeybindingWeight.EditorContrib + 5,
								kbExpr: r.EditorContextKeys.focus,
								primary: a.$e2b.primary,
								mac: a.$e2b.mac,
								win: a.$e2b.win,
								linux: a.$e2b.linux,
							},
						}),
					),
					(0, C.$mtb)(
						new K({
							id: a.$i2b.ToggleRegexCommand,
							precondition: void 0,
							handler: (J) => J.toggleRegex(),
							kbOpts: {
								weight: l.KeybindingWeight.EditorContrib + 5,
								kbExpr: r.EditorContextKeys.focus,
								primary: a.$f2b.primary,
								mac: a.$f2b.mac,
								win: a.$f2b.win,
								linux: a.$f2b.linux,
							},
						}),
					),
					(0, C.$mtb)(
						new K({
							id: a.$i2b.ToggleSearchScopeCommand,
							precondition: void 0,
							handler: (J) => J.toggleSearchScope(),
							kbOpts: {
								weight: l.KeybindingWeight.EditorContrib + 5,
								kbExpr: r.EditorContextKeys.focus,
								primary: a.$g2b.primary,
								mac: a.$g2b.mac,
								win: a.$g2b.win,
								linux: a.$g2b.linux,
							},
						}),
					),
					(0, C.$mtb)(
						new K({
							id: a.$i2b.TogglePreserveCaseCommand,
							precondition: void 0,
							handler: (J) => J.togglePreserveCase(),
							kbOpts: {
								weight: l.KeybindingWeight.EditorContrib + 5,
								kbExpr: r.EditorContextKeys.focus,
								primary: a.$h2b.primary,
								mac: a.$h2b.mac,
								win: a.$h2b.win,
								linux: a.$h2b.linux,
							},
						}),
					),
					(0, C.$mtb)(
						new K({
							id: a.$i2b.ReplaceOneAction,
							precondition: a.$_1b,
							handler: (J) => J.replace(),
							kbOpts: {
								weight: l.KeybindingWeight.EditorContrib + 5,
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.Digit1,
							},
						}),
					),
					(0, C.$mtb)(
						new K({
							id: a.$i2b.ReplaceOneAction,
							precondition: a.$_1b,
							handler: (J) => J.replace(),
							kbOpts: {
								weight: l.KeybindingWeight.EditorContrib + 5,
								kbExpr: f.$Kj.and(r.EditorContextKeys.focus, a.$c2b),
								primary: i.KeyCode.Enter,
							},
						}),
					),
					(0, C.$mtb)(
						new K({
							id: a.$i2b.ReplaceAllAction,
							precondition: a.$_1b,
							handler: (J) => J.replaceAll(),
							kbOpts: {
								weight: l.KeybindingWeight.EditorContrib + 5,
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.Enter,
							},
						}),
					),
					(0, C.$mtb)(
						new K({
							id: a.$i2b.ReplaceAllAction,
							precondition: a.$_1b,
							handler: (J) => J.replaceAll(),
							kbOpts: {
								weight: l.KeybindingWeight.EditorContrib + 5,
								kbExpr: f.$Kj.and(r.EditorContextKeys.focus, a.$c2b),
								primary: void 0,
								mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter },
							},
						}),
					),
					(0, C.$mtb)(
						new K({
							id: a.$i2b.SelectAllMatchesAction,
							precondition: a.$_1b,
							handler: (J) => J.selectAllMatches(),
							kbOpts: {
								weight: l.KeybindingWeight.EditorContrib + 5,
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyMod.Alt | i.KeyCode.Enter,
							},
						}),
					);
			},
		),
		