define(de[137], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$sfc =
					e.$rfc =
					e.$qfc =
					e.$pfc =
					e.$ofc =
					e.$nfc =
					e.$mfc =
					e.$lfc =
					e.$kfc =
					e.$jfc =
					e.$ifc =
					e.$hfc =
					e.$gfc =
					e.CppSuggestionType =
					e.$ffc =
						void 0),
				(e.$ffc = (0, t.$Mi)("backgroundEditService"));
			var i;
			(function (w) {
				(w.GhostText = "ghostText"), (w.PreviewBox = "previewBox");
			})(i || (e.CppSuggestionType = i = {})),
				(e.$gfc = (0, t.$Mi)("watcherService")),
				(e.$hfc = (0, t.$Mi)("telemService")),
				(e.$ifc = (0, t.$Mi)("analyticsService")),
				(e.$jfc = (0, t.$Mi)("cppService")),
				(e.$kfc = (0, t.$Mi)("cursorPredictionService")),
				(e.$lfc = (0, t.$Mi)("importPredictionService")),
				(e.$mfc = (0, t.$Mi)("reactiveContextKeyService")),
				(e.$nfc = (0, t.$Mi)("aiPreviewService")),
				(e.$ofc = (0, t.$Mi)("aiReviewService")),
				(e.$pfc = (0, t.$Mi)("aiInstantSearchService")),
				(e.$qfc = (0, t.$Mi)("backgroundCmdKService")),
				(e.$rfc = (0, t.$Mi)("quickInputService2")),
				(e.$sfc = (0, t.$Mi)("cppSuggestionService"));
		}),
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
		define(
			de[820],
			he([
				1, 0, 7, 24, 33, 94, 3, 251, 936, 17, 61, 368, 4, 10, 41, 69, 38, 74,
				79, 14, 26, 29, 39, 160, 27, 72, 15, 1643, 31, 1593, 169, 219, 137, 32,
				12, 414, 414, 45, 15, 58,
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
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hhc = e.$ghc = void 0),
					(e.$ihc = W),
					(e.$jhc = Y),
					(t = mt(t)),
					(h = mt(h));
				const F = t.$,
					x = (0, f.$$O)(
						"hover-increase-verbosity",
						b.$ak.add,
						h.localize(1195, null),
					),
					H = (0, f.$$O)(
						"hover-decrease-verbosity",
						b.$ak.remove,
						h.localize(1196, null),
					);
				class q {
					constructor(ne, ee, _, te, Q, Z = void 0) {
						(this.owner = ne),
							(this.range = ee),
							(this.contents = _),
							(this.isBeforeContent = te),
							(this.ordinal = Q),
							(this.source = Z);
					}
					isValidForHoverAnchor(ne) {
						return (
							ne.type === a.HoverAnchorType.Range &&
							this.range.startColumn <= ne.range.startColumn &&
							this.range.endColumn >= ne.range.endColumn
						);
					}
				}
				e.$ghc = q;
				class V {
					constructor(ne, ee, _) {
						(this.hover = ne),
							(this.hoverProvider = ee),
							(this.hoverPosition = _);
					}
					supportsVerbosityAction(ne) {
						switch (ne) {
							case o.HoverVerbosityAction.Increase:
								return this.hover.canIncreaseVerbosity ?? !1;
							case o.HoverVerbosityAction.Decrease:
								return this.hover.canDecreaseVerbosity ?? !1;
						}
					}
				}
				let G = class {
					constructor(ne, ee, _, te, Q, Z, se, re, le, oe, ae, pe) {
						(this.b = ne),
							(this.c = ee),
							(this.f = _),
							(this.g = te),
							(this.h = Q),
							(this.i = Z),
							(this.j = se),
							(this.k = re),
							(this.l = le),
							(this.m = oe),
							(this.o = ae),
							(this.p = pe),
							(this.hoverOrdinal = 3);
					}
					createLoadingMessage(ne) {
						return new q(
							this,
							ne.range,
							[new E.$cl().appendText(h.localize(1197, null))],
							!1,
							2e3,
						);
					}
					computeSync(ne, ee) {
						if (!this.b.hasModel() || ne.type !== a.HoverAnchorType.Range)
							return [];
						if (
							this.b.isHallucinatedFunctionPreviewBox === !0 ||
							this.b.isChatCodeblock === !0
						)
							return [];
						const _ = this.b.getModel(),
							te = ne.range.startLineNumber,
							Q = _.getLineMaxColumn(te),
							Z = [];
						let se = 1e3;
						const re = _.getLineLength(te),
							le = _.getLanguageIdAtPosition(
								ne.range.startLineNumber,
								ne.range.startColumn,
							),
							oe = this.b.getOption(p.EditorOption.stopRenderingLineAfter),
							ae = this.g.getValue("editor.maxTokenizationLineLength", {
								overrideIdentifier: le,
							});
						let pe = !1;
						oe >= 0 &&
							re > oe &&
							ne.range.startColumn >= oe &&
							((pe = !0),
							Z.push(
								new q(
									this,
									ne.range,
									[{ value: h.localize(1198, null) }],
									!1,
									se++,
								),
							)),
							!pe &&
								typeof ae == "number" &&
								re >= ae &&
								Z.push(
									new q(
										this,
										ne.range,
										[{ value: h.localize(1199, null) }],
										!1,
										se++,
									),
								);
						let $e = !1;
						for (const ye of ee) {
							const ue =
									ye.range.startLineNumber === te ? ye.range.startColumn : 1,
								fe = ye.range.endLineNumber === te ? ye.range.endColumn : Q,
								me = ye.options.hoverMessage;
							if (!me || (0, E.$dl)(me)) continue;
							ye.options.beforeContentClassName && ($e = !0);
							const ve = new r.$iL(
								ne.range.startLineNumber,
								ue,
								ne.range.startLineNumber,
								fe,
							);
							Z.push(new q(this, ve, (0, i.$6b)(me), $e, se++));
						}
						return Z;
					}
					computeAsync(ne, ee, _) {
						if (
							!this.b.hasModel() ||
							ne.type !== a.HoverAnchorType.Range ||
							this.b.isHallucinatedFunctionPreviewBox === !0 ||
							this.b.isChatCodeblock === !0
						)
							return I.$ai.EMPTY;
						const te = this.b.getModel(),
							Q = this.h.hoverProvider;
						return Q.has(te) ? this.q(Q, te, ne, _) : I.$ai.EMPTY;
					}
					q(ne, ee, _, te) {
						if (
							this.b.isHallucinatedFunctionPreviewBox === !0 ||
							this.b.isChatCodeblock === !0
						)
							return I.$ai.EMPTY;
						const Q = _.range.getStartPosition();
						return (0, T.$1Db)(ne, ee, Q, te)
							.filter((re) => !(0, E.$dl)(re.hover.contents))
							.map((re) => {
								const le = re.hover.range
										? r.$iL.lift(re.hover.range)
										: _.range,
									oe = new V(re.hover, re.provider, Q);
								return new q(this, le, re.hover.contents, !1, re.ordinal, oe);
							});
					}
					renderHoverParts(ne, ee) {
						return (
							(this.a = new J(
								ee,
								ne.fragment,
								this,
								this.b,
								this.c,
								this.f,
								this.k,
								this.i,
								this.j,
								this.g,
								this.l,
								this.m,
								this.o,
								this.h,
								this.p,
								ne.onContentsChanged,
							)),
							this.a
						);
					}
					getAccessibleContent(ne) {
						return this.a?.getAccessibleContent(ne) ?? "";
					}
					doesMarkdownHoverAtIndexSupportVerbosityAction(ne, ee) {
						return (
							this.a?.doesMarkdownHoverAtIndexSupportVerbosityAction(ne, ee) ??
							!1
						);
					}
					updateMarkdownHoverVerbosityLevel(ne, ee, _) {
						return Promise.resolve(
							this.a?.updateMarkdownHoverPartVerbosityLevel(ne, ee, _),
						);
					}
				};
				(e.$hhc = G),
					(e.$hhc = G =
						Ne(
							[
								j(1, u.$nM),
								j(2, n.$7rb),
								j(3, c.$gj),
								j(4, g.$k3),
								j(5, y.$uZ),
								j(6, S.$Uyb),
								j(7, P.$ek),
								j(8, D.IComposerService),
								j(9, M.$ifc),
								j(10, N.$km),
								j(11, B.$0zb),
							],
							G,
						));
				class K {
					constructor(ne, ee, _) {
						(this.hoverPart = ne),
							(this.hoverElement = ee),
							(this.disposables = _);
					}
					get hoverAccessibleContent() {
						return this.hoverElement.innerText.trim();
					}
					dispose() {
						this.disposables.dispose();
					}
				}
				class J {
					constructor(
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
					) {
						(this.c = _),
							(this.f = te),
							(this.g = Q),
							(this.h = Z),
							(this.i = se),
							(this.j = re),
							(this.k = le),
							(this.l = oe),
							(this.m = ae),
							(this.o = pe),
							(this.p = $e),
							(this.q = ye),
							(this.r = ue),
							(this.s = fe),
							(this.a = new Map()),
							(this.b = new C.$Zc()),
							(this.renderedHoverParts = this.t(ne, ee, this.s)),
							this.b.add(
								(0, C.$Yc)(() => {
									this.renderedHoverParts.forEach((me) => {
										me.dispose();
									}),
										this.a.forEach((me) => {
											me.tokenSource.dispose(!0);
										});
								}),
							);
					}
					t(ne, ee, _) {
						return (
							ne.sort((0, i.$0b)((te) => te.ordinal, i.$_b)),
							ne.map((te) => {
								const Q = this.u(te, _);
								return ee.appendChild(Q.hoverElement), Q;
							})
						);
					}
					u(ne, ee) {
						const _ = this.v(ne, ee),
							te = _.hoverElement,
							Q = ne.source,
							Z = new C.$Zc();
						if ((Z.add(_), !Q)) return new K(ne, te, Z);
						const se = Q.supportsVerbosityAction(
								o.HoverVerbosityAction.Increase,
							),
							re = Q.supportsVerbosityAction(o.HoverVerbosityAction.Decrease);
						if (!se && !re) return new K(ne, te, Z);
						const le = F("div.verbosity-actions");
						return (
							te.prepend(le),
							Z.add(this.y(le, o.HoverVerbosityAction.Increase, se)),
							Z.add(this.y(le, o.HoverVerbosityAction.Decrease, re)),
							new K(ne, te, Z)
						);
					}
					v(ne, ee) {
						const _ = document.createElement("div"),
							te = F("div.hover-row");
						_.appendChild(te), (te.tabIndex = 0);
						const Q = X(this.f, ne, this.g, this.h, ee);
						return (
							te.appendChild(Q.hoverElement),
							this.l.getValue(z.$IW) && !1 && this.w(_, ne, ee),
							{
								hoverPart: ne,
								hoverElement: _,
								dispose: () => {
									Q.dispose();
								},
							}
						);
					}
					async w(ne, ee, _) {
						const te = this.f.getModel();
						if (!te) return;
						const Q = await this.x(
							this.f,
							3,
							ee.range.getStartPosition(),
							this.q,
						);
						if (Q.length > 0) {
							const Z = F("div.fix-buttons-container");
							ne.appendChild(Z);
							const se = F("div.fix-buttons-row");
							Z.appendChild(se);
							const re = (0, k.$fhc)(
								"Add to Composer",
								"edit",
								!0,
								this.m,
								this.o,
								this.p,
								"",
								te.uri.toString(),
								ee.range,
							);
							se.appendChild(re);
							const le = (ae, pe, $e, ye, ue, fe) => {
								const me = new U.$Yh(() => {
									(ae.textContent = ye),
										(ae.style.opacity = "0.5"),
										(ae.style.pointerEvents = "none");
								}, 500);
								return async (ve) => {
									ve.preventDefault(), ve.stopPropagation();
									const be = ve.ctrlKey || ve.metaKey ? $e : pe;
									me.schedule();
									try {
										await this.i.executeCommand(
											be,
											{
												locationLinks: Q,
												positionOverride: ee.range.getStartPosition(),
												uri: te.uri,
											},
											fe ? "chat" : void 0,
										);
									} finally {
										me.cancel(),
											(ae.textContent = ue),
											(ae.style.opacity = "1"),
											(ae.style.pointerEvents = "auto");
									}
								};
							};
							if (
								((re.onclick = le(
									re,
									L.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID,
									L.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID,
									"Adding to Composer...",
									"Add to Composer",
									!1,
								)),
								this.r.applicationUserPersistentStorage.composerState
									.unification !== !0)
							) {
								const ae = (0, k.$fhc)(
									"Add to Chat",
									"chat",
									!1,
									this.m,
									this.o,
									this.p,
									"",
									te.uri.toString(),
									ee.range,
								);
								se.appendChild(ae),
									(ae.onclick = le(
										ae,
										L.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID,
										L.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID,
										"Adding to Chat...",
										"Add to Chat",
										!0,
									));
							}
							if (
								this.r.applicationUserPersistentStorage.composerState
									.unification !== !0
							) {
								const ae = F("div.fix-buttons-hint"),
									pe = A.$m ? "\u2318" : "Ctrl";
								(ae.textContent = `${pe}+click to add to new composer`),
									Z.appendChild(ae);
							} else Z.style.marginBottom = "5px";
							_();
						}
					}
					async x(ne, ee, _, te) {
						const Q = ne.getModel();
						return Q === null || _ === null
							? []
							: (
									await (0, O.$UOb)(() =>
										(0, R.$POb)(
											te.definitionProvider,
											Q,
											_,
											!1,
											w.CancellationToken.None,
										),
									)
								).slice(0, ee);
					}
					y(ne, ee, _) {
						const te = new C.$Zc(),
							Q = ee === o.HoverVerbosityAction.Increase,
							Z = t.$fhb(ne, F(s.ThemeIcon.asCSSSelector(Q ? x : H)));
						Z.tabIndex = 0;
						const se = new S.$Vyb(
							"mouse",
							!1,
							{ target: ne, position: { hoverPosition: $.HoverPosition.LEFT } },
							this.l,
							this.k,
						);
						if ((te.add(this.k.setupManagedHover(se, Z, Y(this.j, ee))), !_))
							return Z.classList.add("disabled"), te;
						Z.classList.add("enabled");
						const re = () =>
							this.i.executeCommand(
								ee === o.HoverVerbosityAction.Increase ? m.$lCb : m.$oCb,
							);
						return (
							te.add(new $.$_hb(Z, re)),
							te.add(new $.$aib(Z, re, [v.KeyCode.Enter, v.KeyCode.Space])),
							te
						);
					}
					async updateMarkdownHoverPartVerbosityLevel(ne, ee, _ = !0) {
						const te = this.f.getModel();
						if (!te) return;
						const Q = this.C(ee),
							Z = Q?.hoverPart.source;
						if (!Q || !Z?.supportsVerbosityAction(ne)) return;
						const se = await this.z(Z, te, ne);
						if (!se) return;
						const re = new V(se, Z.hoverProvider, Z.hoverPosition),
							le = Q.hoverPart,
							oe = new q(
								this.c,
								le.range,
								se.contents,
								le.isBeforeContent,
								le.ordinal,
								re,
							),
							ae = this.u(oe, this.s);
						return (
							this.A(ee, ae, oe),
							_ && this.B(ee),
							{ hoverPart: oe, hoverElement: ae.hoverElement }
						);
					}
					getAccessibleContent(ne) {
						const ee = this.renderedHoverParts.findIndex(
							(Z) => Z.hoverPart === ne,
						);
						if (ee === -1) return;
						const _ = this.C(ee);
						return _
							? _.hoverElement.innerText.replace(/[^\S\n\r]+/gu, " ")
							: void 0;
					}
					doesMarkdownHoverAtIndexSupportVerbosityAction(ne, ee) {
						const _ = this.C(ne),
							te = _?.hoverPart.source;
						return !(!_ || !te?.supportsVerbosityAction(ee));
					}
					async z(ne, ee, _) {
						let te = _ === o.HoverVerbosityAction.Increase ? 1 : -1;
						const Q = ne.hoverProvider,
							Z = this.a.get(Q);
						Z && (Z.tokenSource.cancel(), (te += Z.verbosityDelta));
						const se = new w.$Ce();
						this.a.set(Q, { verbosityDelta: te, tokenSource: se });
						const re = {
							verbosityRequest: { verbosityDelta: te, previousHover: ne.hover },
						};
						let le;
						try {
							le = await Promise.resolve(
								Q.provideHover(ee, ne.hoverPosition, se.token, re),
							);
						} catch (oe) {
							(0, l.$5)(oe);
						}
						return se.dispose(), this.a.delete(Q), le;
					}
					A(ne, ee, _) {
						if (ne >= this.renderedHoverParts.length || ne < 0) return;
						const te = this.renderedHoverParts[ne],
							Q = te.hoverElement,
							Z = ee.hoverElement,
							se = Array.from(Z.children);
						Q.replaceChildren(...se);
						const re = new K(_, Q, ee.disposables);
						Q.focus(), te.dispose(), (this.renderedHoverParts[ne] = re);
					}
					B(ne) {
						this.renderedHoverParts[ne].hoverElement.focus();
					}
					C(ne) {
						return this.renderedHoverParts[ne];
					}
					dispose() {
						this.b.dispose();
					}
				}
				function W(ie, ne, ee, _, te) {
					ne.sort((0, i.$0b)((Z) => Z.ordinal, i.$_b));
					const Q = [];
					for (const Z of ne) Q.push(X(ee, Z, _, te, ie.onContentsChanged));
					return new a.$4Bb(Q);
				}
				function X(ie, ne, ee, _, te) {
					const Q = new C.$Zc(),
						Z = F("div.hover-row"),
						se = F("div.hover-row-contents");
					Z.appendChild(se);
					const re = ne.contents;
					for (const oe of re) {
						if ((0, E.$dl)(oe)) continue;
						const ae = F("div.markdown-hover"),
							pe = t.$fhb(ae, F("div.hover-contents")),
							$e = Q.add(new d.$Qzb({ editor: ie }, ee, _));
						Q.add(
							$e.onDidRenderAsync(() => {
								(pe.className = "hover-contents code-hover-contents"), te();
							}),
						);
						const ye = Q.add($e.render(oe));
						pe.appendChild(ye.element), se.appendChild(ae);
					}
					return {
						hoverPart: ne,
						hoverElement: Z,
						dispose() {
							Q.dispose();
						},
					};
				}
				function Y(ie, ne) {
					switch (ne) {
						case o.HoverVerbosityAction.Increase: {
							const ee = ie.lookupKeybinding(m.$lCb);
							return ee
								? h.localize(1200, null, ee.getLabel())
								: h.localize(1201, null);
						}
						case o.HoverVerbosityAction.Decrease: {
							const ee = ie.lookupKeybinding(m.$oCb);
							return ee
								? h.localize(1202, null, ee.getLabel())
								: h.localize(1203, null);
						}
					}
				}
			},
		),
		define(
			de[1788],
			he([
				1, 0, 127, 15, 27, 3, 210, 46, 38, 248, 1193, 17, 104, 98, 71, 618, 786,
				4, 11, 8, 43, 69, 1695, 5,
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
			) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xjc =
						e.$wjc =
						e.$vjc =
						e.$ujc =
						e.$tjc =
						e.$sjc =
						e.$rjc =
						e.$qjc =
						e.$pjc =
						e.$ojc =
						e.$njc =
						e.$mjc =
						e.$ljc =
						e.$kjc =
						e.$jjc =
							void 0),
					(o = mt(o));
				function S(J, W) {
					const X = W.filter((Y) => !J.find((ie) => ie.equals(Y)));
					if (X.length >= 1) {
						const Y = X.map(
								(ne) =>
									`line ${ne.viewState.position.lineNumber} column ${ne.viewState.position.column}`,
							).join(", "),
							ie =
								X.length === 1
									? o.localize(1315, null, Y)
									: o.localize(1316, null, Y);
						(0, t.$pib)(ie);
					}
				}
				class I extends d.$itb {
					constructor() {
						super({
							id: "editor.action.insertCursorAbove",
							label: o.localize(1317, null),
							alias: "Add Cursor Above",
							precondition: void 0,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.UpArrow,
								linux: {
									primary: w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.UpArrow,
									secondary: [
										w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.UpArrow,
									],
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$XX.MenubarSelectionMenu,
								group: "3_multi",
								title: o.localize(1318, null),
								order: 2,
							},
						});
					}
					run(W, X, Y) {
						if (!X.hasModel()) return;
						let ie = !0;
						Y && Y.logicalLine === !1 && (ie = !1);
						const ne = X._getViewModel();
						if (ne.cursorConfig.readOnly) return;
						ne.model.pushStackElement();
						const ee = ne.getCursorStates();
						ne.setCursorStates(
							Y.source,
							r.CursorChangeReason.Explicit,
							u.$Htb.addCursorUp(ne, ee, ie),
						),
							ne.revealTopMostCursor(Y.source),
							S(ee, ne.getCursorStates());
					}
				}
				e.$jjc = I;
				class T extends d.$itb {
					constructor() {
						super({
							id: "editor.action.insertCursorBelow",
							label: o.localize(1319, null),
							alias: "Add Cursor Below",
							precondition: void 0,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.DownArrow,
								linux: {
									primary: w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.DownArrow,
									secondary: [
										w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.DownArrow,
									],
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$XX.MenubarSelectionMenu,
								group: "3_multi",
								title: o.localize(1320, null),
								order: 3,
							},
						});
					}
					run(W, X, Y) {
						if (!X.hasModel()) return;
						let ie = !0;
						Y && Y.logicalLine === !1 && (ie = !1);
						const ne = X._getViewModel();
						if (ne.cursorConfig.readOnly) return;
						ne.model.pushStackElement();
						const ee = ne.getCursorStates();
						ne.setCursorStates(
							Y.source,
							r.CursorChangeReason.Explicit,
							u.$Htb.addCursorDown(ne, ee, ie),
						),
							ne.revealBottomMostCursor(Y.source),
							S(ee, ne.getCursorStates());
					}
				}
				e.$kjc = T;
				class P extends d.$itb {
					constructor() {
						super({
							id: "editor.action.insertCursorAtEndOfEachLineSelected",
							label: o.localize(1321, null),
							alias: "Add Cursors to Line Ends",
							precondition: void 0,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.KeyI,
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$XX.MenubarSelectionMenu,
								group: "3_multi",
								title: o.localize(1322, null),
								order: 4,
							},
						});
					}
					d(W, X, Y) {
						if (!W.isEmpty()) {
							for (let ie = W.startLineNumber; ie < W.endLineNumber; ie++) {
								const ne = X.getLineMaxColumn(ie);
								Y.push(new h.$kL(ie, ne, ie, ne));
							}
							W.endColumn > 1 &&
								Y.push(
									new h.$kL(
										W.endLineNumber,
										W.endColumn,
										W.endLineNumber,
										W.endColumn,
									),
								);
						}
					}
					run(W, X) {
						if (!X.hasModel()) return;
						const Y = X.getModel(),
							ie = X.getSelections(),
							ne = X._getViewModel(),
							ee = ne.getCursorStates(),
							_ = [];
						ie.forEach((te) => this.d(te, Y, _)),
							_.length > 0 && X.setSelections(_),
							S(ee, ne.getCursorStates());
					}
				}
				class k extends d.$itb {
					constructor() {
						super({
							id: "editor.action.addCursorsToBottom",
							label: o.localize(1323, null),
							alias: "Add Cursors To Bottom",
							precondition: void 0,
						});
					}
					run(W, X) {
						if (!X.hasModel()) return;
						const Y = X.getSelections(),
							ie = X.getModel().getLineCount(),
							ne = [];
						for (let te = Y[0].startLineNumber; te <= ie; te++)
							ne.push(new h.$kL(te, Y[0].startColumn, te, Y[0].endColumn));
						const ee = X._getViewModel(),
							_ = ee.getCursorStates();
						ne.length > 0 && X.setSelections(ne), S(_, ee.getCursorStates());
					}
				}
				class L extends d.$itb {
					constructor() {
						super({
							id: "editor.action.addCursorsToTop",
							label: o.localize(1324, null),
							alias: "Add Cursors To Top",
							precondition: void 0,
						});
					}
					run(W, X) {
						if (!X.hasModel()) return;
						const Y = X.getSelections(),
							ie = [];
						for (let _ = Y[0].startLineNumber; _ >= 1; _--)
							ie.push(new h.$kL(_, Y[0].startColumn, _, Y[0].endColumn));
						const ne = X._getViewModel(),
							ee = ne.getCursorStates();
						ie.length > 0 && X.setSelections(ie), S(ee, ne.getCursorStates());
					}
				}
				class D {
					constructor(W, X, Y) {
						(this.selections = W),
							(this.revealRange = X),
							(this.revealScrollType = Y);
					}
				}
				e.$ljc = D;
				class M {
					static create(W, X) {
						if (!W.hasModel()) return null;
						const Y = X.getState();
						if (!W.hasTextFocus() && Y.isRevealed && Y.searchString.length > 0)
							return new M(
								W,
								X,
								!1,
								Y.searchString,
								Y.wholeWord,
								Y.matchCase,
								null,
							);
						let ie = !1,
							ne,
							ee;
						const _ = W.getSelections();
						_.length === 1 && _[0].isEmpty()
							? ((ie = !0), (ne = !0), (ee = !0))
							: ((ne = Y.wholeWord), (ee = Y.matchCase));
						const te = W.getSelection();
						let Q,
							Z = null;
						if (te.isEmpty()) {
							const se = W.getConfiguredWordAtPosition(te.getStartPosition());
							if (!se) return null;
							(Q = se.word),
								(Z = new h.$kL(
									te.startLineNumber,
									se.startColumn,
									te.startLineNumber,
									se.endColumn,
								));
						} else
							Q = W.getModel()
								.getValueInRange(te)
								.replace(
									/\r\n/g,
									`
`,
								);
						return new M(W, X, ie, Q, ne, ee, Z);
					}
					constructor(W, X, Y, ie, ne, ee, _) {
						(this.a = W),
							(this.findController = X),
							(this.isDisconnectedFromFindController = Y),
							(this.searchText = ie),
							(this.wholeWord = ne),
							(this.matchCase = ee),
							(this.currentMatch = _);
					}
					addSelectionToNextFindMatch() {
						if (!this.a.hasModel()) return null;
						const W = this.b();
						if (!W) return null;
						const X = this.a.getSelections();
						return new D(X.concat(W), W, c.ScrollType.Smooth);
					}
					moveSelectionToNextFindMatch() {
						if (!this.a.hasModel()) return null;
						const W = this.b();
						if (!W) return null;
						const X = this.a.getSelections();
						return new D(
							X.slice(0, X.length - 1).concat(W),
							W,
							c.ScrollType.Smooth,
						);
					}
					b() {
						if (!this.a.hasModel()) return null;
						if (this.currentMatch) {
							const ie = this.currentMatch;
							return (this.currentMatch = null), ie;
						}
						this.findController.highlightFindOptions();
						const W = this.a.getSelections(),
							X = W[W.length - 1],
							Y = this.a
								.getModel()
								.findNextMatch(
									this.searchText,
									X.getEndPosition(),
									!1,
									this.matchCase,
									this.wholeWord
										? this.a.getOption(m.EditorOption.wordSeparators)
										: null,
									!1,
								);
						return Y
							? new h.$kL(
									Y.range.startLineNumber,
									Y.range.startColumn,
									Y.range.endLineNumber,
									Y.range.endColumn,
								)
							: null;
					}
					addSelectionToPreviousFindMatch() {
						if (!this.a.hasModel()) return null;
						const W = this.c();
						if (!W) return null;
						const X = this.a.getSelections();
						return new D(X.concat(W), W, c.ScrollType.Smooth);
					}
					moveSelectionToPreviousFindMatch() {
						if (!this.a.hasModel()) return null;
						const W = this.c();
						if (!W) return null;
						const X = this.a.getSelections();
						return new D(
							X.slice(0, X.length - 1).concat(W),
							W,
							c.ScrollType.Smooth,
						);
					}
					c() {
						if (!this.a.hasModel()) return null;
						if (this.currentMatch) {
							const ie = this.currentMatch;
							return (this.currentMatch = null), ie;
						}
						this.findController.highlightFindOptions();
						const W = this.a.getSelections(),
							X = W[W.length - 1],
							Y = this.a
								.getModel()
								.findPreviousMatch(
									this.searchText,
									X.getStartPosition(),
									!1,
									this.matchCase,
									this.wholeWord
										? this.a.getOption(m.EditorOption.wordSeparators)
										: null,
									!1,
								);
						return Y
							? new h.$kL(
									Y.range.startLineNumber,
									Y.range.startColumn,
									Y.range.endLineNumber,
									Y.range.endColumn,
								)
							: null;
					}
					selectAll(W) {
						if (!this.a.hasModel()) return [];
						this.findController.highlightFindOptions();
						const X = this.a.getModel();
						return W
							? X.findMatches(
									this.searchText,
									W,
									!1,
									this.matchCase,
									this.wholeWord
										? this.a.getOption(m.EditorOption.wordSeparators)
										: null,
									!1,
									C.Constants.MAX_SAFE_SMALL_INTEGER,
								)
							: X.findMatches(
									this.searchText,
									!0,
									!1,
									this.matchCase,
									this.wholeWord
										? this.a.getOption(m.EditorOption.wordSeparators)
										: null,
									!1,
									C.Constants.MAX_SAFE_SMALL_INTEGER,
								);
					}
				}
				e.$mjc = M;
				class N extends E.$1c {
					static {
						this.ID = "editor.contrib.multiCursorController";
					}
					static get(W) {
						return W.getContribution(N.ID);
					}
					constructor(W) {
						super(),
							(this.f = this.D(new E.$Zc())),
							(this.a = W),
							(this.b = !1),
							(this.c = null);
					}
					dispose() {
						this.h(), super.dispose();
					}
					g(W) {
						if (!this.c) {
							const X = M.create(this.a, W);
							if (!X) return;
							this.c = X;
							const Y = { searchString: this.c.searchText };
							this.c.isDisconnectedFromFindController &&
								((Y.wholeWordOverride = p.FindOptionOverride.True),
								(Y.matchCaseOverride = p.FindOptionOverride.True),
								(Y.isRegexOverride = p.FindOptionOverride.False)),
								W.getState().change(Y, !1),
								this.f.add(
									this.a.onDidChangeCursorSelection((ie) => {
										this.b || this.h();
									}),
								),
								this.f.add(
									this.a.onDidBlurEditorText(() => {
										this.h();
									}),
								),
								this.f.add(
									W.getState().onFindReplaceStateChange((ie) => {
										(ie.matchCase || ie.wholeWord) && this.h();
									}),
								);
						}
					}
					h() {
						if (
							(this.f.clear(),
							this.c && this.c.isDisconnectedFromFindController)
						) {
							const W = {
								wholeWordOverride: p.FindOptionOverride.NotSet,
								matchCaseOverride: p.FindOptionOverride.NotSet,
								isRegexOverride: p.FindOptionOverride.NotSet,
							};
							this.c.findController.getState().change(W, !1);
						}
						this.c = null;
					}
					n(W) {
						(this.b = !0), this.a.setSelections(W), (this.b = !1);
					}
					q(W, X) {
						if (!X.isEmpty()) return X;
						const Y = this.a.getConfiguredWordAtPosition(X.getStartPosition());
						return Y
							? new h.$kL(
									X.startLineNumber,
									Y.startColumn,
									X.startLineNumber,
									Y.endColumn,
								)
							: X;
					}
					t(W) {
						W &&
							(this.n(W.selections),
							W.revealRange &&
								this.a.revealRangeInCenterIfOutsideViewport(
									W.revealRange,
									W.revealScrollType,
								));
					}
					getSession(W) {
						return this.c;
					}
					addSelectionToNextFindMatch(W) {
						if (this.a.hasModel()) {
							if (!this.c) {
								const X = this.a.getSelections();
								if (X.length > 1) {
									const ie = W.getState().matchCase;
									if (!q(this.a.getModel(), X, ie)) {
										const ee = this.a.getModel(),
											_ = [];
										for (let te = 0, Q = X.length; te < Q; te++)
											_[te] = this.q(ee, X[te]);
										this.a.setSelections(_);
										return;
									}
								}
							}
							this.g(W), this.c && this.t(this.c.addSelectionToNextFindMatch());
						}
					}
					addSelectionToPreviousFindMatch(W) {
						this.g(W),
							this.c && this.t(this.c.addSelectionToPreviousFindMatch());
					}
					moveSelectionToNextFindMatch(W) {
						this.g(W), this.c && this.t(this.c.moveSelectionToNextFindMatch());
					}
					moveSelectionToPreviousFindMatch(W) {
						this.g(W),
							this.c && this.t(this.c.moveSelectionToPreviousFindMatch());
					}
					selectAll(W) {
						if (!this.a.hasModel()) return;
						let X = null;
						const Y = W.getState();
						if (Y.isRevealed && Y.searchString.length > 0 && Y.isRegex) {
							const ie = this.a.getModel();
							Y.searchScope
								? (X = ie.findMatches(
										Y.searchString,
										Y.searchScope,
										Y.isRegex,
										Y.matchCase,
										Y.wholeWord
											? this.a.getOption(m.EditorOption.wordSeparators)
											: null,
										!1,
										C.Constants.MAX_SAFE_SMALL_INTEGER,
									))
								: (X = ie.findMatches(
										Y.searchString,
										!0,
										Y.isRegex,
										Y.matchCase,
										Y.wholeWord
											? this.a.getOption(m.EditorOption.wordSeparators)
											: null,
										!1,
										C.Constants.MAX_SAFE_SMALL_INTEGER,
									));
						} else {
							if ((this.g(W), !this.c)) return;
							X = this.c.selectAll(Y.searchScope);
						}
						if (X.length > 0) {
							const ie = this.a.getSelection();
							for (let ne = 0, ee = X.length; ne < ee; ne++) {
								const _ = X[ne];
								if (_.range.intersectRanges(ie)) {
									(X[ne] = X[0]), (X[0] = _);
									break;
								}
							}
							this.n(
								X.map(
									(ne) =>
										new h.$kL(
											ne.range.startLineNumber,
											ne.range.startColumn,
											ne.range.endLineNumber,
											ne.range.endColumn,
										),
								),
							);
						}
					}
					selectAllUsingSelections(W) {
						W.length > 0 && this.n(W);
					}
				}
				e.$njc = N;
				class A extends d.$itb {
					run(W, X) {
						const Y = N.get(X);
						if (!Y) return;
						const ie = X._getViewModel();
						if (ie) {
							const ne = ie.getCursorStates(),
								ee = g.$ufc.get(X);
							if (ee) this.d(Y, ee);
							else {
								const _ = W.get($.$Li).createInstance(g.$ufc, X);
								this.d(Y, _), _.dispose();
							}
							S(ne, ie.getCursorStates());
						}
					}
				}
				e.$ojc = A;
				class R extends A {
					constructor() {
						super({
							id: "editor.action.addSelectionToNextFindMatch",
							label: o.localize(1325, null),
							alias: "Add Selection To Next Find Match",
							precondition: void 0,
							kbOpts: {
								kbExpr: n.EditorContextKeys.focus,
								primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyD,
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$XX.MenubarSelectionMenu,
								group: "3_multi",
								title: o.localize(1326, null),
								order: 5,
							},
						});
					}
					d(W, X) {
						W.addSelectionToNextFindMatch(X);
					}
				}
				e.$pjc = R;
				class O extends A {
					constructor() {
						super({
							id: "editor.action.addSelectionToPreviousFindMatch",
							label: o.localize(1327, null),
							alias: "Add Selection To Previous Find Match",
							precondition: void 0,
							menuOpts: {
								menuId: f.$XX.MenubarSelectionMenu,
								group: "3_multi",
								title: o.localize(1328, null),
								order: 6,
							},
						});
					}
					d(W, X) {
						W.addSelectionToPreviousFindMatch(X);
					}
				}
				e.$qjc = O;
				class B extends A {
					constructor() {
						super({
							id: "editor.action.moveSelectionToNextFindMatch",
							label: o.localize(1329, null),
							alias: "Move Last Selection To Next Find Match",
							precondition: void 0,
							kbOpts: {
								kbExpr: n.EditorContextKeys.focus,
								primary: (0, w.$os)(w.$ps, w.KeyMod.CtrlCmd | w.KeyCode.KeyD),
								mac: {
									primary: (0, w.$os)(w.$qs, w.KeyMod.CtrlCmd | w.KeyCode.KeyD),
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					d(W, X) {
						W.moveSelectionToNextFindMatch(X);
					}
				}
				e.$rjc = B;
				class U extends A {
					constructor() {
						super({
							id: "editor.action.moveSelectionToPreviousFindMatch",
							label: o.localize(1330, null),
							alias: "Move Last Selection To Previous Find Match",
							precondition: void 0,
						});
					}
					d(W, X) {
						W.moveSelectionToPreviousFindMatch(X);
					}
				}
				e.$sjc = U;
				class z extends A {
					constructor() {
						super({
							id: "editor.action.selectHighlights",
							label: o.localize(1331, null),
							alias: "Select All Occurrences of Find Match",
							precondition: void 0,
							kbOpts: {
								kbExpr: n.EditorContextKeys.focus,
								primary: w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.KeyL,
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$XX.MenubarSelectionMenu,
								group: "3_multi",
								title: o.localize(1332, null),
								order: 7,
							},
						});
					}
					d(W, X) {
						W.selectAll(X);
					}
				}
				e.$tjc = z;
				class F extends A {
					constructor() {
						super({
							id: "editor.action.changeAll",
							label: o.localize(1333, null),
							alias: "Change All Occurrences",
							precondition: b.$Kj.and(
								n.EditorContextKeys.writable,
								n.EditorContextKeys.editorTextFocus,
							),
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyCode.F2,
								weight: s.KeybindingWeight.EditorContrib,
							},
							contextMenuOpts: { group: "1_modification", order: 1.2 },
						});
					}
					d(W, X) {
						W.selectAll(X);
					}
				}
				e.$ujc = F;
				class x {
					constructor(W, X, Y, ie, ne) {
						(this.c = W),
							(this.d = X),
							(this.f = Y),
							(this.g = ie),
							(this.a = this.c.getVersionId()),
							(this.b = null),
							ne &&
								this.c === ne.c &&
								this.d === ne.d &&
								this.f === ne.f &&
								this.g === ne.g &&
								this.a === ne.a &&
								(this.b = ne.b);
					}
					findMatches() {
						return (
							this.b === null &&
								((this.b = this.c
									.findMatches(this.d, !0, !1, this.f, this.g, !1)
									.map((W) => W.range)),
								this.b.sort(a.$iL.compareRangesUsingStarts)),
							this.b
						);
					}
				}
				let H = class extends E.$1c {
					static {
						v = this;
					}
					static {
						this.ID = "editor.contrib.selectionHighlighter";
					}
					constructor(W, X) {
						super(),
							(this.h = X),
							(this.a = W),
							(this.b = W.getOption(m.EditorOption.selectionHighlight)),
							(this.c = W.createDecorationsCollection()),
							(this.f = this.D(new i.$Yh(() => this.n(), 300))),
							(this.g = null),
							this.D(
								W.onDidChangeConfiguration((ie) => {
									this.b = W.getOption(m.EditorOption.selectionHighlight);
								}),
							),
							this.D(
								W.onDidChangeCursorSelection((ie) => {
									this.b &&
										(ie.selection.isEmpty()
											? ie.reason === r.CursorChangeReason.Explicit
												? (this.g && this.t(null), this.f.schedule())
												: this.t(null)
											: this.n());
								}),
							),
							this.D(
								W.onDidChangeModel((ie) => {
									this.t(null);
								}),
							),
							this.D(
								W.onDidChangeModelContent((ie) => {
									this.b && this.f.schedule();
								}),
							);
						const Y = g.$ufc.get(W);
						Y &&
							this.D(
								Y.getState().onFindReplaceStateChange((ie) => {
									this.n();
								}),
							),
							this.f.schedule();
					}
					n() {
						this.t(v.q(this.g, this.b, this.a));
					}
					static q(W, X, Y) {
						if (!X || !Y.hasModel()) return null;
						const ie = Y.getSelection();
						if (ie.startLineNumber !== ie.endLineNumber) return null;
						const ne = N.get(Y);
						if (!ne) return null;
						const ee = g.$ufc.get(Y);
						if (!ee) return null;
						let _ = ne.getSession(ee);
						if (!_) {
							const Z = Y.getSelections();
							if (Z.length > 1) {
								const re = ee.getState().matchCase;
								if (!q(Y.getModel(), Z, re)) return null;
							}
							_ = M.create(Y, ee);
						}
						if (
							!_ ||
							_.currentMatch ||
							/^[ \t]+$/.test(_.searchText) ||
							_.searchText.length > 200
						)
							return null;
						const te = ee.getState(),
							Q = te.matchCase;
						if (te.isRevealed) {
							let Z = te.searchString;
							Q || (Z = Z.toLowerCase());
							let se = _.searchText;
							if (
								(Q || (se = se.toLowerCase()),
								Z === se &&
									_.matchCase === te.matchCase &&
									_.wholeWord === te.wholeWord &&
									!te.isRegex)
							)
								return null;
						}
						return new x(
							Y.getModel(),
							_.searchText,
							_.matchCase,
							_.wholeWord ? Y.getOption(m.EditorOption.wordSeparators) : null,
							W,
						);
					}
					t(W) {
						if (((this.g = W), !this.g)) {
							this.c.clear();
							return;
						}
						if (!this.a.hasModel()) return;
						const X = this.a.getModel();
						if (X.isTooLargeForTokenization()) return;
						const Y = this.g.findMatches(),
							ie = this.a.getSelections();
						ie.sort(a.$iL.compareRangesUsingStarts);
						const ne = [];
						for (let Q = 0, Z = 0, se = Y.length, re = ie.length; Q < se; ) {
							const le = Y[Q];
							if (Z >= re) ne.push(le), Q++;
							else {
								const oe = a.$iL.compareRangesUsingStarts(le, ie[Z]);
								oe < 0
									? ((ie[Z].isEmpty() || !a.$iL.areIntersecting(le, ie[Z])) &&
											ne.push(le),
										Q++)
									: (oe > 0 || Q++, Z++);
							}
						}
						const ee =
								this.a.getOption(m.EditorOption.occurrencesHighlight) !== "off",
							_ = this.h.documentHighlightProvider.has(X) && ee,
							te = ne.map((Q) => ({ range: Q, options: (0, y.$nPb)(_) }));
						this.c.set(te);
					}
					dispose() {
						this.t(null), super.dispose();
					}
				};
				(e.$vjc = H), (e.$vjc = H = v = Ne([j(1, l.$k3)], H));
				function q(J, W, X) {
					const Y = V(J, W[0], !X);
					for (let ie = 1, ne = W.length; ie < ne; ie++) {
						const ee = W[ie];
						if (ee.isEmpty()) return !1;
						const _ = V(J, ee, !X);
						if (Y !== _) return !1;
					}
					return !0;
				}
				function V(J, W, X) {
					const Y = J.getValueInRange(W);
					return X ? Y.toLowerCase() : Y;
				}
				class G extends d.$itb {
					constructor() {
						super({
							id: "editor.action.focusNextCursor",
							label: o.localize(1334, null),
							metadata: { description: o.localize(1335, null), args: [] },
							alias: "Focus Next Cursor",
							precondition: void 0,
						});
					}
					run(W, X, Y) {
						if (!X.hasModel()) return;
						const ie = X._getViewModel();
						if (ie.cursorConfig.readOnly) return;
						ie.model.pushStackElement();
						const ne = Array.from(ie.getCursorStates()),
							ee = ne.shift();
						ee &&
							(ne.push(ee),
							ie.setCursorStates(Y.source, r.CursorChangeReason.Explicit, ne),
							ie.revealPrimaryCursor(Y.source, !0),
							S(ne, ie.getCursorStates()));
					}
				}
				e.$wjc = G;
				class K extends d.$itb {
					constructor() {
						super({
							id: "editor.action.focusPreviousCursor",
							label: o.localize(1336, null),
							metadata: { description: o.localize(1337, null), args: [] },
							alias: "Focus Previous Cursor",
							precondition: void 0,
						});
					}
					run(W, X, Y) {
						if (!X.hasModel()) return;
						const ie = X._getViewModel();
						if (ie.cursorConfig.readOnly) return;
						ie.model.pushStackElement();
						const ne = Array.from(ie.getCursorStates()),
							ee = ne.pop();
						ee &&
							(ne.unshift(ee),
							ie.setCursorStates(Y.source, r.CursorChangeReason.Explicit, ne),
							ie.revealPrimaryCursor(Y.source, !0),
							S(ne, ie.getCursorStates()));
					}
				}
				(e.$xjc = K),
					(0, d.$qtb)(N.ID, N, d.EditorContributionInstantiation.Lazy),
					(0, d.$qtb)(
						H.ID,
						H,
						d.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, d.$ntb)(I),
					(0, d.$ntb)(T),
					(0, d.$ntb)(P),
					(0, d.$ntb)(R),
					(0, d.$ntb)(O),
					(0, d.$ntb)(B),
					(0, d.$ntb)(U),
					(0, d.$ntb)(z),
					(0, d.$ntb)(F),
					(0, d.$ntb)(k),
					(0, d.$ntb)(L),
					(0, d.$ntb)(G),
					(0, d.$ntb)(K);
			},
		),
		define(
			de[3221],
			he([
				1, 0, 15, 120, 14, 94, 3, 12, 37, 46, 38, 64, 122, 1630, 200, 61, 1631,
				368, 820, 2838, 4, 10, 5, 41, 63, 79, 174, 2325,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ikc =
						e.$Hkc =
						e.$Gkc =
						e.$Fkc =
						e.$Ekc =
						e.$Dkc =
						e.$Ckc =
						e.$Bkc =
						e.$Akc =
						e.$zkc =
							void 0),
					(d = mt(d)),
					(s = mt(s)),
					(e.$zkc = (0, S.$$O)(
						"extensions-warning-message",
						w.$ak.warning,
						s.localize(1553, null),
					));
				let T = class extends C.$1c {
					static {
						this.ID = "editor.contrib.unicodeHighlighter";
					}
					constructor(X, Y, ie, ne) {
						super(),
							(this.h = X),
							(this.j = Y),
							(this.m = ie),
							(this.a = null),
							(this.g = !1),
							(this.n = (ee) => {
								if (ee && ee.hasMore) {
									if (this.g) return;
									const _ = Math.max(
										ee.ambiguousCharacterCount,
										ee.nonBasicAsciiCharacterCount,
										ee.invisibleCharacterCount,
									);
									let te;
									if (ee.nonBasicAsciiCharacterCount >= _)
										te = { message: s.localize(1554, null), command: new q() };
									else if (ee.ambiguousCharacterCount >= _)
										te = { message: s.localize(1555, null), command: new x() };
									else if (ee.invisibleCharacterCount >= _)
										te = { message: s.localize(1556, null), command: new H() };
									else throw new Error("Unreachable");
									this.f.show({
										id: "unicodeHighlightBanner",
										message: te.message,
										icon: e.$zkc,
										actions: [
											{
												label: te.command.shortLabel,
												href: `command:${te.command.id}`,
											},
										],
										onClose: () => {
											this.g = !0;
										},
									});
								} else this.f.hide();
							}),
							(this.f = this.D(ne.createInstance(b.$ykc, X))),
							this.D(
								this.h.onDidChangeModel(() => {
									(this.g = !1), this.q();
								}),
							),
							(this.b = X.getOption(u.EditorOption.unicodeHighlighting)),
							this.D(
								ie.onDidChangeTrust((ee) => {
									this.q();
								}),
							),
							this.D(
								X.onDidChangeConfiguration((ee) => {
									ee.hasChanged(u.EditorOption.unicodeHighlighting) &&
										((this.b = X.getOption(u.EditorOption.unicodeHighlighting)),
										this.q());
								}),
							),
							this.q();
					}
					dispose() {
						this.a && (this.a.dispose(), (this.a = null)), super.dispose();
					}
					q() {
						if (
							(this.n(null),
							this.a && (this.a.dispose(), (this.a = null)),
							!this.h.hasModel())
						)
							return;
						const X = P(this.m.isWorkspaceTrusted(), this.b);
						if (
							[
								X.nonBasicASCII,
								X.ambiguousCharacters,
								X.invisibleCharacters,
							].every((ie) => ie === !1)
						)
							return;
						const Y = {
							nonBasicASCII: X.nonBasicASCII,
							ambiguousCharacters: X.ambiguousCharacters,
							invisibleCharacters: X.invisibleCharacters,
							includeComments: X.includeComments,
							includeStrings: X.includeStrings,
							allowedCodePoints: Object.keys(X.allowedCharacters).map((ie) =>
								ie.codePointAt(0),
							),
							allowedLocales: Object.keys(X.allowedLocales).map((ie) =>
								ie === "_os"
									? new Intl.NumberFormat().resolvedOptions().locale
									: ie === "_vscode"
										? d.$z
										: ie,
							),
						};
						this.j.canComputeUnicodeHighlights(this.h.getModel().uri)
							? (this.a = new k(this.h, Y, this.n, this.j))
							: (this.a = new L(this.h, Y, this.n));
					}
					getDecorationInfo(X) {
						return this.a ? this.a.getDecorationInfo(X) : null;
					}
				};
				(e.$Akc = T),
					(e.$Akc = T = Ne([j(1, n.$Cxb), j(2, I.$pO), j(3, y.$Li)], T));
				function P(W, X) {
					return {
						nonBasicASCII:
							X.nonBasicASCII === u.inUntrustedWorkspace ? !W : X.nonBasicASCII,
						ambiguousCharacters: X.ambiguousCharacters,
						invisibleCharacters: X.invisibleCharacters,
						includeComments:
							X.includeComments === u.inUntrustedWorkspace
								? !W
								: X.includeComments,
						includeStrings:
							X.includeStrings === u.inUntrustedWorkspace
								? !W
								: X.includeStrings,
						allowedCharacters: X.allowedCharacters,
						allowedLocales: X.allowedLocales,
					};
				}
				let k = class extends C.$1c {
					constructor(X, Y, ie, ne) {
						super(),
							(this.g = X),
							(this.h = Y),
							(this.j = ie),
							(this.m = ne),
							(this.a = this.g.getModel()),
							(this.f = this.g.createDecorationsCollection()),
							(this.b = this.D(new t.$Yh(() => this.n(), 250))),
							this.D(
								this.g.onDidChangeModelContent(() => {
									this.b.schedule();
								}),
							),
							this.b.schedule();
					}
					dispose() {
						this.f.clear(), super.dispose();
					}
					n() {
						if (this.a.isDisposed()) return;
						if (!this.a.mightContainNonBasicASCII()) {
							this.f.clear();
							return;
						}
						const X = this.a.getVersionId();
						this.m.computedUnicodeHighlights(this.a.uri, this.h).then((Y) => {
							if (this.a.isDisposed() || this.a.getVersionId() !== X) return;
							this.j(Y);
							const ie = [];
							if (!Y.hasMore)
								for (const ne of Y.ranges)
									ie.push({
										range: ne,
										options: U.instance.getDecorationFromOptions(this.h),
									});
							this.f.set(ie);
						});
					}
					getDecorationInfo(X) {
						if (!this.f.has(X)) return null;
						const Y = this.g.getModel();
						if (!(0, p.$mwb)(Y, X)) return null;
						const ie = Y.getValueInRange(X.range);
						return {
							reason: B(ie, this.h),
							inComment: (0, p.$nwb)(Y, X),
							inString: (0, p.$owb)(Y, X),
						};
					}
				};
				k = Ne([j(3, n.$Cxb)], k);
				class L extends C.$1c {
					constructor(X, Y, ie) {
						super(),
							(this.g = X),
							(this.h = Y),
							(this.j = ie),
							(this.a = this.g.getModel()),
							(this.f = this.g.createDecorationsCollection()),
							(this.b = this.D(new t.$Yh(() => this.m(), 250))),
							this.D(
								this.g.onDidLayoutChange(() => {
									this.b.schedule();
								}),
							),
							this.D(
								this.g.onDidScrollChange(() => {
									this.b.schedule();
								}),
							),
							this.D(
								this.g.onDidChangeHiddenAreas(() => {
									this.b.schedule();
								}),
							),
							this.D(
								this.g.onDidChangeModelContent(() => {
									this.b.schedule();
								}),
							),
							this.b.schedule();
					}
					dispose() {
						this.f.clear(), super.dispose();
					}
					m() {
						if (this.a.isDisposed()) return;
						if (!this.a.mightContainNonBasicASCII()) {
							this.f.clear();
							return;
						}
						const X = this.g.getVisibleRanges(),
							Y = [],
							ie = {
								ranges: [],
								ambiguousCharacterCount: 0,
								invisibleCharacterCount: 0,
								nonBasicAsciiCharacterCount: 0,
								hasMore: !1,
							};
						for (const ne of X) {
							const ee = c.$Ywb.computeUnicodeHighlights(this.a, this.h, ne);
							for (const _ of ee.ranges) ie.ranges.push(_);
							(ie.ambiguousCharacterCount += ie.ambiguousCharacterCount),
								(ie.invisibleCharacterCount += ie.invisibleCharacterCount),
								(ie.nonBasicAsciiCharacterCount +=
									ie.nonBasicAsciiCharacterCount),
								(ie.hasMore = ie.hasMore || ee.hasMore);
						}
						if (!ie.hasMore)
							for (const ne of ie.ranges)
								Y.push({
									range: ne,
									options: U.instance.getDecorationFromOptions(this.h),
								});
						this.j(ie), this.f.set(Y);
					}
					getDecorationInfo(X) {
						if (!this.f.has(X)) return null;
						const Y = this.g.getModel(),
							ie = Y.getValueInRange(X.range);
						return (0, p.$mwb)(Y, X)
							? {
									reason: B(ie, this.h),
									inComment: (0, p.$nwb)(Y, X),
									inString: (0, p.$owb)(Y, X),
								}
							: null;
					}
				}
				class D {
					constructor(X, Y, ie) {
						(this.owner = X), (this.range = Y), (this.decoration = ie);
					}
					isValidForHoverAnchor(X) {
						return (
							X.type === o.HoverAnchorType.Range &&
							this.range.startColumn <= X.range.startColumn &&
							this.range.endColumn >= X.range.endColumn
						);
					}
				}
				e.$Bkc = D;
				const M = s.localize(1557, null);
				let N = class {
					constructor(X, Y, ie) {
						(this.a = X), (this.b = Y), (this.f = ie), (this.hoverOrdinal = 5);
					}
					computeSync(X, Y) {
						if (!this.a.hasModel() || X.type !== o.HoverAnchorType.Range)
							return [];
						const ie = this.a.getModel(),
							ne = this.a.getContribution(T.ID);
						if (!ne) return [];
						const ee = [],
							_ = new Set();
						let te = 300;
						for (const Q of Y) {
							const Z = ne.getDecorationInfo(Q);
							if (!Z) continue;
							const re = ie.getValueInRange(Q.range).codePointAt(0),
								le = R(re);
							let oe;
							switch (Z.reason.kind) {
								case c.UnicodeHighlighterReasonKind.Ambiguous: {
									(0, m.$2f)(Z.reason.confusableWith)
										? (oe = s.localize(
												1558,
												null,
												le,
												R(Z.reason.confusableWith.codePointAt(0)),
											))
										: (oe = s.localize(
												1559,
												null,
												le,
												R(Z.reason.confusableWith.codePointAt(0)),
											));
									break;
								}
								case c.UnicodeHighlighterReasonKind.Invisible:
									oe = s.localize(1560, null, le);
									break;
								case c.UnicodeHighlighterReasonKind.NonBasicAscii:
									oe = s.localize(1561, null, le);
									break;
							}
							if (_.has(oe)) continue;
							_.add(oe);
							const ae = {
									codePoint: re,
									reason: Z.reason,
									inComment: Z.inComment,
									inString: Z.inString,
								},
								pe = s.localize(1562, null),
								$e = `command:${V.ID}?${encodeURIComponent(JSON.stringify(ae))}`,
								ye = new E.$cl("", !0)
									.appendMarkdown(oe)
									.appendText(" ")
									.appendLink($e, pe, M);
							ee.push(new f.$ghc(this, Q.range, [ye], !1, te++));
						}
						return ee;
					}
					renderHoverParts(X, Y) {
						return (0, f.$ihc)(X, Y, this.a, this.b, this.f);
					}
					getAccessibleContent(X) {
						return X.contents
							.map((Y) => Y.value)
							.join(`
`);
					}
				};
				(e.$Ckc = N), (e.$Ckc = N = Ne([j(1, g.$nM), j(2, $.$7rb)], N));
				function A(W) {
					return `U+${W.toString(16).padStart(4, "0")}`;
				}
				function R(W) {
					let X = `\`${A(W)}\``;
					return m.$kg.isInvisibleCharacter(W) || (X += ` "${`${O(W)}`}"`), X;
				}
				function O(W) {
					return W === i.CharCode.BackTick
						? "`` ` ``"
						: "`" + String.fromCodePoint(W) + "`";
				}
				function B(W, X) {
					return c.$Ywb.computeUnicodeHighlightReason(W, X);
				}
				class U {
					constructor() {
						this.a = new Map();
					}
					static {
						this.instance = new U();
					}
					getDecorationFromOptions(X) {
						return this.b(!X.includeComments, !X.includeStrings);
					}
					b(X, Y) {
						const ie = `${X}${Y}`;
						let ne = this.a.get(ie);
						return (
							ne ||
								((ne = h.$eY.createDynamic({
									description: "unicode-highlight",
									stickiness:
										a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
									className: "unicode-highlight",
									showIfCollapsed: !0,
									overviewRuler: null,
									minimap: null,
									hideInCommentTokens: X,
									hideInStringTokens: Y,
								})),
								this.a.set(ie, ne)),
							ne
						);
					}
				}
				class z extends r.$itb {
					static {
						this.ID =
							"editor.action.unicodeHighlight.disableHighlightingInComments";
					}
					constructor() {
						super({
							id: x.ID,
							label: s.localize(1564, null),
							alias: "Disable highlighting of characters in comments",
							precondition: void 0,
						}),
							(this.shortLabel = s.localize(1563, null));
					}
					async run(X, Y, ie) {
						const ne = X?.get(l.$gj);
						ne && this.runAction(ne);
					}
					async runAction(X) {
						await X.updateValue(
							u.unicodeHighlightConfigKeys.includeComments,
							!1,
							l.ConfigurationTarget.USER,
						);
					}
				}
				e.$Dkc = z;
				class F extends r.$itb {
					static {
						this.ID =
							"editor.action.unicodeHighlight.disableHighlightingInStrings";
					}
					constructor() {
						super({
							id: x.ID,
							label: s.localize(1566, null),
							alias: "Disable highlighting of characters in strings",
							precondition: void 0,
						}),
							(this.shortLabel = s.localize(1565, null));
					}
					async run(X, Y, ie) {
						const ne = X?.get(l.$gj);
						ne && this.runAction(ne);
					}
					async runAction(X) {
						await X.updateValue(
							u.unicodeHighlightConfigKeys.includeStrings,
							!1,
							l.ConfigurationTarget.USER,
						);
					}
				}
				e.$Ekc = F;
				class x extends r.$itb {
					static {
						this.ID =
							"editor.action.unicodeHighlight.disableHighlightingOfAmbiguousCharacters";
					}
					constructor() {
						super({
							id: x.ID,
							label: s.localize(1568, null),
							alias: "Disable highlighting of ambiguous characters",
							precondition: void 0,
						}),
							(this.shortLabel = s.localize(1567, null));
					}
					async run(X, Y, ie) {
						const ne = X?.get(l.$gj);
						ne && this.runAction(ne);
					}
					async runAction(X) {
						await X.updateValue(
							u.unicodeHighlightConfigKeys.ambiguousCharacters,
							!1,
							l.ConfigurationTarget.USER,
						);
					}
				}
				e.$Fkc = x;
				class H extends r.$itb {
					static {
						this.ID =
							"editor.action.unicodeHighlight.disableHighlightingOfInvisibleCharacters";
					}
					constructor() {
						super({
							id: H.ID,
							label: s.localize(1570, null),
							alias: "Disable highlighting of invisible characters",
							precondition: void 0,
						}),
							(this.shortLabel = s.localize(1569, null));
					}
					async run(X, Y, ie) {
						const ne = X?.get(l.$gj);
						ne && this.runAction(ne);
					}
					async runAction(X) {
						await X.updateValue(
							u.unicodeHighlightConfigKeys.invisibleCharacters,
							!1,
							l.ConfigurationTarget.USER,
						);
					}
				}
				e.$Gkc = H;
				class q extends r.$itb {
					static {
						this.ID =
							"editor.action.unicodeHighlight.disableHighlightingOfNonBasicAsciiCharacters";
					}
					constructor() {
						super({
							id: q.ID,
							label: s.localize(1572, null),
							alias: "Disable highlighting of non basic ASCII characters",
							precondition: void 0,
						}),
							(this.shortLabel = s.localize(1571, null));
					}
					async run(X, Y, ie) {
						const ne = X?.get(l.$gj);
						ne && this.runAction(ne);
					}
					async runAction(X) {
						await X.updateValue(
							u.unicodeHighlightConfigKeys.nonBasicASCII,
							!1,
							l.ConfigurationTarget.USER,
						);
					}
				}
				e.$Hkc = q;
				class V extends r.$itb {
					static {
						this.ID = "editor.action.unicodeHighlight.showExcludeOptions";
					}
					constructor() {
						super({
							id: V.ID,
							label: s.localize(1573, null),
							alias: "Show Exclude Options",
							precondition: void 0,
						});
					}
					async run(X, Y, ie) {
						const {
								codePoint: ne,
								reason: ee,
								inString: _,
								inComment: te,
							} = ie,
							Q = String.fromCodePoint(ne),
							Z = X.get(v.$DJ),
							se = X.get(l.$gj);
						function re(ae) {
							return m.$kg.isInvisibleCharacter(ae)
								? s.localize(1574, null, A(ae))
								: s.localize(1575, null, `${A(ae)} "${Q}"`);
						}
						const le = [];
						if (ee.kind === c.UnicodeHighlighterReasonKind.Ambiguous)
							for (const ae of ee.notAmbiguousInLocales)
								le.push({
									label: s.localize(1576, null, ae),
									run: async () => {
										K(se, [ae]);
									},
								});
						if ((le.push({ label: re(ne), run: () => G(se, [ne]) }), te)) {
							const ae = new z();
							le.push({ label: ae.label, run: async () => ae.runAction(se) });
						} else if (_) {
							const ae = new F();
							le.push({ label: ae.label, run: async () => ae.runAction(se) });
						}
						if (ee.kind === c.UnicodeHighlighterReasonKind.Ambiguous) {
							const ae = new x();
							le.push({ label: ae.label, run: async () => ae.runAction(se) });
						} else if (ee.kind === c.UnicodeHighlighterReasonKind.Invisible) {
							const ae = new H();
							le.push({ label: ae.label, run: async () => ae.runAction(se) });
						} else if (
							ee.kind === c.UnicodeHighlighterReasonKind.NonBasicAscii
						) {
							const ae = new q();
							le.push({ label: ae.label, run: async () => ae.runAction(se) });
						} else J(ee);
						const oe = await Z.pick(le, { title: M });
						oe && (await oe.run());
					}
				}
				e.$Ikc = V;
				async function G(W, X) {
					const Y = W.getValue(u.unicodeHighlightConfigKeys.allowedCharacters);
					let ie;
					typeof Y == "object" && Y ? (ie = Y) : (ie = {});
					for (const ne of X) ie[String.fromCodePoint(ne)] = !0;
					await W.updateValue(
						u.unicodeHighlightConfigKeys.allowedCharacters,
						ie,
						l.ConfigurationTarget.USER,
					);
				}
				async function K(W, X) {
					const Y = W.inspect(u.unicodeHighlightConfigKeys.allowedLocales).user
						?.value;
					let ie;
					typeof Y == "object" && Y ? (ie = Object.assign({}, Y)) : (ie = {});
					for (const ne of X) ie[ne] = !0;
					await W.updateValue(
						u.unicodeHighlightConfigKeys.allowedLocales,
						ie,
						l.ConfigurationTarget.USER,
					);
				}
				function J(W) {
					throw new Error(`Unexpected value: ${W}`);
				}
				(0, r.$ntb)(x),
					(0, r.$ntb)(H),
					(0, r.$ntb)(q),
					(0, r.$ntb)(V),
					(0, r.$qtb)(
						T.ID,
						T,
						r.EditorContributionInstantiation.AfterFirstRender,
					),
					o.$5Bb.register(N);
			},
		),
		define(
			de[1279],
			he([1, 0, 45, 3, 8, 137, 20, 58, 10]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_dc = e.$$dc = e.$0dc = e.$9dc = void 0),
					(e.$9dc = new w.$5j("editcontextbarcursor", !1)),
					(e.$0dc = new w.$5j("bigCommandKEnabled", !1)),
					(e.$$dc = new w.$5j("cppSuggestion", !1));
				let r = class extends i.$1c {
					constructor(a, h, c) {
						super(),
							(this.c = a),
							(this.f = h),
							(this.g = c),
							(this.b = new Map()),
							(this.a = this.D(this.c.createScoped(this)));
					}
					bindInitialKeys() {
						this._bindKey(e.$9dc, "promptBars"), this._bindCppSuggestionKey();
					}
					_bindKeyPersistent(a, h) {
						const c = a.bindTo(this.f);
						c.set(this.c.applicationUserPersistentStorage[h]),
							this.a.onChangeEffect({
								deps: [() => this.c.applicationUserPersistentStorage[h]],
								onChange: () => {
									c.set(this.c.applicationUserPersistentStorage[h]);
								},
							});
					}
					_bindKey(a, h) {
						const c = a.bindTo(this.f);
						this.a.onChangeEffect({
							deps: [() => this.c.nonPersistentStorage[h]],
							onChange: () => {
								c.set(this.c.nonPersistentStorage[h]);
							},
						});
					}
					_bindCppSuggestionKey() {
						const a = e.$$dc.bindTo(this.f);
						this.a.onChangeEffect({
							deps: [() => this.c.nonPersistentStorage.cppState?.suggestion],
							onChange: () => {
								const h = this.g.getValue(d.$zW) === !0;
								a.set(
									this.c.nonPersistentStorage.cppState?.suggestion !== void 0 &&
										h,
								);
							},
						});
					}
					getKey(a) {
						if (this.b.has(a)) return this.b.get(a);
						const h = new w.$5j(a, this.c.nonPersistentStorage[a]),
							c = h.bindTo(this.f);
						return (
							this.a.onChangeEffect({
								deps: [() => this.c.nonPersistentStorage[a]],
								onChange: () => {
									c.set(this.c.nonPersistentStorage[a]);
								},
							}),
							this.b.set(a, h),
							h
						);
					}
				};
				(e.$_dc = r),
					(e.$_dc = r = Ne([j(0, t.$0zb), j(1, w.$6j), j(2, m.$gj)], r)),
					(0, C.$lK)(E.$mfc, r, C.InstantiationType.Delayed);
			},
		),
		define(
			de[3222],
			he([1, 0, 3, 47, 1717, 6, 5, 137, 193, 64, 42]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$afc = void 0);
				const a = { shouldAutoSubmit: !0 };
				let h = class extends t.$1c {
					constructor(n, g, p, o, f, b, s) {
						super(),
							(this.uri = n),
							(this.initialRange = g),
							(this.source = p),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.generations = []),
							(this.a = !1),
							(this.f = this.D(new E.$re())),
							(this.onStatusChange = this.f.event),
							(this.g = this.D(new E.$re())),
							(this.onGenerationStatusChange = this.g.event);
						const [l, y] = (0, m.createStore)({ status: "none" }, {});
						(this.store = l),
							(this.setStore = y),
							(this.options = { ...a, ...o }),
							(this.id = (0, i.$9g)()),
							this.q();
					}
					getRangeToGenerate() {
						if (this.b && this.c) {
							const n = this.c.getDecorationRange(this.b);
							if (n) return n;
						}
						return this.initialRange;
					}
					get lastGenerationId() {
						return this.store.lastGenerationId;
					}
					get n() {
						return this.store.status;
					}
					dispose() {
						super.dispose(), this.generations.forEach((n) => n.dispose());
					}
					set n(n) {
						const g = this.n;
						this.setStore("status", n),
							g !== n && this.f.fire({ newStatus: n, oldStatus: g });
					}
					async run() {
						return this.j.runGeneration(
							this.generations[this.generations.length - 1],
						);
					}
					async add(n, g, p) {
						this.n === "none" && (this.n = "initial");
						const o = this.h.createInstance(
							w.$_ec,
							this.uri,
							this.getRangeToGenerate(),
							n,
							g,
							p,
						);
						if (
							((o.sequenceId = this.id),
							(o.abortController = g.abortController),
							this.D(
								o.onStatusChange((f) => {
									this.g.fire({
										generation: o,
										newStatus: f.newStatus,
										oldStatus: f.oldStatus,
									});
								}),
							),
							this.generations.push(o),
							this.setStore("lastGenerationId", o.id),
							this.options.shouldAutoSubmit)
						)
							return this.j.runGeneration(o);
					}
					followUp(n, g, p) {
						if (this.n === "none" || this.generations.length === 0) {
							console.error(
								"[bg-cmdk] cannot follow-up a sequence that has not been started. call 'add' instead",
							);
							return;
						}
						(this.n = "follow-up"), this.add(n, g, p);
					}
					findGenerationById(n) {
						return this.generations.find((g) => g.id === n);
					}
					async q() {
						if (this.a) return;
						const n = await this.m.createModelReference(this.uri);
						(this.c = n.object.textEditorModel), n.dispose();
						const g = this.initialRange,
							p = this.c.changeDecorations((o) =>
								o.addDecoration(g, {
									description: "background-cmdk-sequence",
									className: "background-cmdk-sequence",
									stickiness:
										r.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
								}),
							);
						p && (this.b = p), (this.a = !0);
					}
				};
				(e.$afc = h),
					(e.$afc = h = Ne([j(4, C.$Li), j(5, d.$qfc), j(6, u.$MO)], h));
			},
		),
		