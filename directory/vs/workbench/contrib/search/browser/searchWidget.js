import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../base/browser/ui/inputbox/inputBox.js';
import '../../../../base/browser/ui/widget.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/keyCodes.js';
import '../../../../editor/contrib/find/browser/findModel.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/themables.js';
import '../../../../platform/history/browser/contextScopedHistoryWidget.js';
import './searchActionsBase.js';
import '../common/constants.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../base/common/platform.js';
import '../../../../base/browser/ui/toggle/toggle.js';
import '../../../services/views/common/viewsService.js';
import './searchIcons.js';
import '../../searchEditor/browser/constants.js';
import '../../../../platform/history/browser/historyWidgetKeybindingHint.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../notebook/browser/contrib/find/findFilters.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/editor/common/editorService.js';
import '../../notebook/common/notebookEditorInput.js';
import '../../../common/editor.js';
import './searchFindInput.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/common/lifecycle.js';
import '../../notebook/common/notebookCommon.js';
define(
			de[1367],
			he([
				1, 0, 4, 7, 105, 183, 292, 235, 50, 15, 6, 27, 547, 121, 10, 8, 49, 39,
				43, 26, 413, 483, 377, 91, 12, 268, 89, 561, 615, 664, 106, 1838, 5, 18,
				360, 44, 3506, 95, 3, 70,
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
				var F;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FOc = void 0),
					(e.$GOc = J),
					(t = mt(t)),
					(i = mt(i)),
					(y = mt(y));
				const x = 26;
				class H extends m.$rj {
					static {
						this.ID = "search.action.replaceAll";
					}
					constructor(X) {
						super(H.ID, "", b.ThemeIcon.asClassName(T.$9Nc), !1), (this.a = X);
					}
					set searchWidget(X) {
						this.a = X;
					}
					run() {
						return this.a ? this.a.triggerReplaceAll() : Promise.resolve(null);
					}
				}
				const q = v.$m ? a.KeyMod.WinCtrl : a.KeyMod.CtrlCmd;
				function V(W, X, Y) {
					const ie = !!X.match(/\n/);
					if (Y && (ie || Y.clientHeight > x) && Y.selectionStart > 0) {
						W.stopPropagation();
						return;
					}
				}
				function G(W, X, Y) {
					const ie = !!X.match(/\n/);
					if (
						Y &&
						(ie || Y.clientHeight > x) &&
						Y.selectionEnd < Y.value.length
					) {
						W.stopPropagation();
						return;
					}
				}
				let K = class extends d.$Uhb {
					static {
						F = this;
					}
					static {
						this.a = 134;
					}
					static {
						this.b = t.localize(9367, null);
					}
					static {
						this.c = (X) => {
							const Y = X.lookupKeybinding(H.ID);
							return (0, l.$qOc)(t.localize(9368, null), Y);
						};
					}
					constructor(X, Y, ie, ne, ee, _, te, Q, Z, se, re) {
						super(),
							(this.bb = ie),
							(this.cb = ne),
							(this.db = ee),
							(this.eb = _),
							(this.fb = te),
							(this.gb = Q),
							(this.hb = Z),
							(this.ib = se),
							(this.jb = re),
							(this.J = !1),
							(this.L = null),
							(this.M = this.D(new u.$re())),
							(this.onSearchSubmit = this.M.event),
							(this.N = this.D(new u.$re())),
							(this.onSearchCancel = this.N.event),
							(this.O = this.D(new u.$re())),
							(this.onReplaceToggled = this.O.event),
							(this.P = this.D(new u.$re())),
							(this.onReplaceStateChange = this.P.event),
							(this.Q = this.D(new u.$re())),
							(this.onPreserveCaseChange = this.Q.event),
							(this.R = this.D(new u.$re())),
							(this.onReplaceValueChanged = this.R.event),
							(this.S = this.D(new u.$re())),
							(this.onReplaceAll = this.S.event),
							(this.U = this.D(new u.$re())),
							(this.onBlur = this.U.event),
							(this.W = this.D(new u.$re())),
							(this.onDidHeightChange = this.W.event),
							(this.X = new u.$re()),
							(this.onDidToggleContext = this.X.event),
							(this.t = y.$ooc.ReplaceActiveKey.bindTo(this.cb)),
							(this.g = y.$ooc.SearchInputBoxFocusedKey.bindTo(this.cb)),
							(this.n = y.$ooc.ReplaceInputBoxFocusedKey.bindTo(this.cb));
						const le = Y.notebookOptions ?? {
							isInNotebookMarkdownInput: !0,
							isInNotebookMarkdownPreview: !0,
							isInNotebookCellInput: !0,
							isInNotebookCellOutput: !0,
						};
						(this.Z = this.D(
							new D.$m2b(
								le.isInNotebookMarkdownInput,
								le.isInNotebookMarkdownPreview,
								le.isInNotebookCellInput,
								le.isInNotebookCellOutput,
								{ findScopeType: z.NotebookFindScopeType.None },
							),
						)),
							this.D(
								this.Z.onDidChange(() => {
									this.searchInput && this.searchInput.updateFilterStyles();
								}),
							),
							this.D(
								this.jb.onDidEditorsChange((oe) => {
									this.searchInput &&
										oe.event.editor instanceof A.$TIb &&
										(oe.event.kind === R.GroupModelChangeKind.EDITOR_OPEN ||
											oe.event.kind === R.GroupModelChangeKind.EDITOR_CLOSE) &&
										(this.searchInput.filterVisible = this.lb());
								}),
							),
							(this.y = new r.$Jh(500)),
							(this.ab = this.D(new U.$2c())),
							this.mb(X, Y),
							this.D(
								this.fb.onDidChangeConfiguration((oe) => {
									oe.affectsConfiguration("editor.accessibilitySupport") &&
										this.nb();
								}),
							),
							this.D(this.gb.onDidChangeScreenReaderOptimized(() => this.nb())),
							this.nb();
					}
					lb() {
						return this.jb.editors.some((Y) => Y instanceof A.$TIb);
					}
					getNotebookFilters() {
						return this.Z;
					}
					focus(X = !0, Y = !1, ie = !1) {
						(this.J = ie),
							Y && this.isReplaceShown()
								? this.replaceInput &&
									(this.replaceInput.focus(), X && this.replaceInput.select())
								: this.searchInput &&
									(this.searchInput.focus(), X && this.searchInput.select());
					}
					setWidth(X) {
						this.searchInput?.inputBox.layout(),
							this.replaceInput &&
								((this.replaceInput.width = X - 28),
								this.replaceInput.inputBox.layout());
					}
					clear() {
						this.searchInput?.clear(),
							this.replaceInput?.setValue(""),
							this.setReplaceAllActionState(!1);
					}
					isReplaceShown() {
						return this.h ? !this.h.classList.contains("disabled") : !1;
					}
					isReplaceActive() {
						return !!this.t.get();
					}
					getReplaceValue() {
						return this.replaceInput?.getValue() ?? "";
					}
					toggleReplace(X) {
						(X === void 0 || X !== this.isReplaceShown()) && this.sb();
					}
					getSearchHistory() {
						return this.searchInput?.inputBox.getHistory() ?? [];
					}
					getReplaceHistory() {
						return this.replaceInput?.inputBox.getHistory() ?? [];
					}
					prependSearchHistory(X) {
						this.searchInput?.inputBox.prependHistory(X);
					}
					prependReplaceHistory(X) {
						this.replaceInput?.inputBox.prependHistory(X);
					}
					clearHistory() {
						this.searchInput?.inputBox.clearHistory(),
							this.replaceInput?.inputBox.clearHistory();
					}
					showNextSearchTerm() {
						this.searchInput?.inputBox.showNextValue();
					}
					showPreviousSearchTerm() {
						this.searchInput?.inputBox.showPreviousValue();
					}
					showNextReplaceTerm() {
						this.replaceInput?.inputBox.showNextValue();
					}
					showPreviousReplaceTerm() {
						this.replaceInput?.inputBox.showPreviousValue();
					}
					searchInputHasFocus() {
						return !!this.g.get();
					}
					replaceInputHasFocus() {
						return !!this.replaceInput?.inputBox.hasFocus();
					}
					focusReplaceAllAction() {
						this.w?.focus(!0);
					}
					focusRegexAction() {
						this.searchInput?.focusOnRegex();
					}
					set replaceButtonVisibility(X) {
						this.r && (this.r.element.style.display = X ? "" : "none");
					}
					mb(X, Y) {
						(this.domNode = i.$fhb(X, i.$(".search-widget"))),
							(this.domNode.style.position = "relative"),
							Y._hideReplaceToggle || this.ob(this.domNode),
							this.pb(this.domNode, Y),
							this.rb(this.domNode, Y);
					}
					nb() {
						this.searchInput?.setFocusInputOnOptionClick(
							!this.gb.isScreenReaderOptimized(),
						);
					}
					ob(X) {
						const Y = {
							buttonBackground: void 0,
							buttonBorder: void 0,
							buttonForeground: void 0,
							buttonHoverBackground: void 0,
							buttonSecondaryBackground: void 0,
							buttonSecondaryForeground: void 0,
							buttonSecondaryHoverBackground: void 0,
							buttonSeparator: void 0,
							title: t.localize(9369, null),
							hoverDelegate: (0, B.$cib)("element"),
						};
						(this.r = this.D(new E.$oob(X, Y))),
							this.r.element.setAttribute("aria-expanded", "false"),
							this.r.element.classList.add("toggle-replace-button"),
							(this.r.icon = T.$7Nc),
							(this.ab.value = this.r.onDidClick(() => this.sb()));
					}
					pb(X, Y) {
						const ie = {
								label: t.localize(9370, null),
								validation: (ee) => this.ub(ee),
								placeholder: t.localize(9371, null),
								appendCaseSensitiveLabel: (0, l.$qOc)(
									"",
									this.db.lookupKeybinding(
										y.SearchCommandIds.ToggleCaseSensitiveCommandId,
									),
								),
								appendWholeWordsLabel: (0, l.$qOc)(
									"",
									this.db.lookupKeybinding(
										y.SearchCommandIds.ToggleWholeWordCommandId,
									),
								),
								appendRegexLabel: (0, l.$qOc)(
									"",
									this.db.lookupKeybinding(
										y.SearchCommandIds.ToggleRegexCommandId,
									),
								),
								history: Y.searchHistory,
								showHistoryHint: () => (0, k.$NMb)(this.db),
								flexibleHeight: !0,
								flexibleMaxHeight: F.a,
								showCommonFindToggles: !0,
								inputBoxStyles: Y.inputBoxStyles,
								toggleStyles: Y.toggleStyles,
							},
							ne = i.$fhb(X, i.$(".search-container.input-box"));
						(this.searchInput = this.D(
							new O.$EOc(
								ne,
								this.bb,
								ie,
								this.cb,
								this.hb,
								this.ib,
								this.Z,
								Y.initialAIButtonVisibility ?? !1,
								this.lb(),
							),
						)),
							this.D(this.searchInput.onKeyDown((ee) => this.wb(ee))),
							this.searchInput.setValue(Y.value || ""),
							this.searchInput.setRegex(!!Y.isRegex),
							this.searchInput.setCaseSensitive(!!Y.isCaseSensitive),
							this.searchInput.setWholeWords(!!Y.isWholeWords),
							this.D(
								this.searchInput.onCaseSensitiveKeyDown((ee) => this.xb(ee)),
							),
							this.D(this.searchInput.onRegexKeyDown((ee) => this.yb(ee))),
							this.D(this.searchInput.inputBox.onDidChange(() => this.vb())),
							this.D(
								this.searchInput.inputBox.onDidHeightChange(() =>
									this.W.fire(),
								),
							),
							this.D(
								this.onReplaceValueChanged(() => {
									this.y.trigger(() =>
										this.replaceInput?.inputBox.addToHistory(),
									);
								}),
							),
							(this.searchInputFocusTracker = this.D(
								i.$dhb(this.searchInput.inputBox.inputElement),
							)),
							this.D(
								this.searchInputFocusTracker.onDidFocus(async () => {
									this.g.set(!0);
									const ee = this.Db.globalFindClipboard;
									if (!this.J && ee) {
										const _ = await this.eb.readFindText();
										_ &&
											this.L !== _ &&
											(this.searchInput?.inputBox.addToHistory(),
											this.searchInput?.setValue(_),
											this.searchInput?.select()),
											(this.L = _);
									}
									this.J = !1;
								}),
							),
							this.D(
								this.searchInputFocusTracker.onDidBlur(() => this.g.set(!1)),
							),
							(this.Y = new S.$8ib({
								isChecked: !1,
								title: (0, l.$qOc)(
									t.localize(9372, null),
									this.db.lookupKeybinding(P.$COc),
								),
								icon: T.$6Nc,
								hoverDelegate: (0, B.$cib)("element"),
								...L.$pyb,
							})),
							this.D(this.Y.onChange(() => this.qb())),
							Y.showContextToggle &&
								((this.contextLinesInput = new C.$Mob(ne, this.bb, {
									type: "number",
									inputBoxStyles: L.$wyb,
								})),
								this.contextLinesInput.element.classList.add(
									"context-lines-input",
								),
								(this.contextLinesInput.value =
									"" +
									(this.fb.getValue("search").searchEditor
										.defaultNumberOfContextLines ?? 1)),
								this.D(
									this.contextLinesInput.onDidChange((ee) => {
										ee !== "0" && (this.Y.checked = !0), this.qb();
									}),
								),
								i.$fhb(ne, this.Y.domNode));
					}
					qb() {
						this.X.fire(),
							this.contextLinesInput.value.includes("-") &&
								(this.contextLinesInput.value = "0"),
							this.X.fire();
					}
					setContextLines(X) {
						this.contextLinesInput &&
							(X === 0
								? (this.Y.checked = !1)
								: ((this.Y.checked = !0),
									(this.contextLinesInput.value = "" + X)));
					}
					rb(X, Y) {
						this.h = i.$fhb(X, i.$(".replace-container.disabled"));
						const ie = i.$fhb(this.h, i.$(".replace-input"));
						(this.replaceInput = this.D(
							new s.$XCb(
								ie,
								this.bb,
								{
									label: t.localize(9373, null),
									placeholder: t.localize(9374, null),
									appendPreserveCaseLabel: (0, l.$qOc)(
										"",
										this.db.lookupKeybinding(
											y.SearchCommandIds.TogglePreserveCaseId,
										),
									),
									history: Y.replaceHistory,
									showHistoryHint: () => (0, k.$NMb)(this.db),
									flexibleHeight: !0,
									flexibleMaxHeight: F.a,
									inputBoxStyles: Y.inputBoxStyles,
									toggleStyles: Y.toggleStyles,
								},
								this.cb,
								!0,
							),
						)),
							this.D(
								this.replaceInput.onDidOptionChange((ne) => {
									ne ||
										(this.replaceInput &&
											this.Q.fire(this.replaceInput.getPreserveCase()));
								}),
							),
							this.D(this.replaceInput.onKeyDown((ne) => this.Ab(ne))),
							this.replaceInput.setValue(Y.replaceValue || ""),
							this.D(
								this.replaceInput.inputBox.onDidChange(() => this.R.fire()),
							),
							this.D(
								this.replaceInput.inputBox.onDidHeightChange(() =>
									this.W.fire(),
								),
							),
							(this.s = new H(this)),
							(this.s.label = F.b),
							(this.w = this.D(new w.$eib(this.h))),
							this.w.push([this.s], { icon: !0, label: !1 }),
							this.u(this.w.domNode, (ne) => this.Bb(ne)),
							(this.replaceInputFocusTracker = this.D(
								i.$dhb(this.replaceInput.inputBox.inputElement),
							)),
							this.D(
								this.replaceInputFocusTracker.onDidFocus(() => this.n.set(!0)),
							),
							this.D(
								this.replaceInputFocusTracker.onDidBlur(() => this.n.set(!1)),
							),
							this.D(
								this.replaceInput.onPreserveCaseKeyDown((ne) => this.zb(ne)),
							);
					}
					triggerReplaceAll() {
						return this.S.fire(), Promise.resolve(null);
					}
					sb() {
						this.h?.classList.toggle("disabled"),
							this.isReplaceShown()
								? (this.r?.element.classList.remove(
										...b.ThemeIcon.asClassNameArray(T.$7Nc),
									),
									this.r?.element.classList.add(
										...b.ThemeIcon.asClassNameArray(T.$8Nc),
									))
								: (this.r?.element.classList.remove(
										...b.ThemeIcon.asClassNameArray(T.$8Nc),
									),
									this.r?.element.classList.add(
										...b.ThemeIcon.asClassNameArray(T.$7Nc),
									)),
							this.r?.element.setAttribute(
								"aria-expanded",
								this.isReplaceShown() ? "true" : "false",
							),
							this.tb(),
							this.O.fire();
					}
					setValue(X) {
						this.searchInput?.setValue(X);
					}
					setReplaceAllActionState(X) {
						this.s &&
							this.s.enabled !== X &&
							((this.s.enabled = X),
							(this.s.label = X ? F.c(this.db) : F.b),
							this.tb());
					}
					tb() {
						const X = this.isReplaceActive(),
							Y = this.isReplaceShown() && !!this.s?.enabled;
						X !== Y &&
							(this.t.set(Y),
							this.P.fire(Y),
							this.replaceInput?.inputBox.layout());
					}
					ub(X) {
						if (X.length === 0 || !this.searchInput?.getRegex()) return null;
						try {
							new RegExp(X, "u");
						} catch (Y) {
							return { content: Y.message };
						}
						return null;
					}
					vb() {
						if (
							(this.searchInput?.clearMessage(),
							this.setReplaceAllActionState(!1),
							this.Db.searchOnType)
						) {
							const X =
								this.searchInput && this.searchInput.isAIEnabled ? 5 : 1;
							if (this.searchInput?.getRegex())
								try {
									const Y = new RegExp(this.searchInput.getValue(), "ug"),
										ie =
											`
								~!@#$%^&*()_+
								\`1234567890-=
								qwertyuiop[]\\
								QWERTYUIOP{}|
								asdfghjkl;'
								ASDFGHJKL:"
								zxcvbnm,./
								ZXCVBNM<>? `.match(Y)?.length ?? 0,
										ne = ie < 50 ? 1 : ie < 100 ? 5 : 10;
									this.Cb(!0, this.Db.searchOnTypeDebouncePeriod * ne * X);
								} catch {}
							else this.Cb(!0, this.Db.searchOnTypeDebouncePeriod * X);
						}
					}
					wb(X) {
						if (
							(X.equals(q | a.KeyCode.Enter) &&
								(this.searchInput?.inputBox.insertAtCursor(`
`),
								X.preventDefault()),
							X.equals(a.KeyCode.Enter))
						)
							this.searchInput?.onSearchSubmit(), this.Cb(), X.preventDefault();
						else if (X.equals(a.KeyCode.Escape))
							this.N.fire({ focus: !0 }), X.preventDefault();
						else if (X.equals(a.KeyCode.Tab))
							this.isReplaceShown()
								? this.replaceInput?.focus()
								: this.searchInput?.focusOnCaseSensitive(),
								X.preventDefault();
						else if (X.equals(a.KeyCode.UpArrow))
							V(
								X,
								this.searchInput?.getValue() ?? "",
								this.searchInput?.domNode.querySelector("textarea") ?? null,
							);
						else if (X.equals(a.KeyCode.DownArrow))
							G(
								X,
								this.searchInput?.getValue() ?? "",
								this.searchInput?.domNode.querySelector("textarea") ?? null,
							);
						else if (X.equals(a.KeyCode.PageUp)) {
							const Y = this.searchInput?.inputBox.inputElement;
							Y && (Y.setSelectionRange(0, 0), Y.focus(), X.preventDefault());
						} else if (X.equals(a.KeyCode.PageDown)) {
							const Y = this.searchInput?.inputBox.inputElement;
							if (Y) {
								const ie = Y.value.length;
								Y.setSelectionRange(ie, ie), Y.focus(), X.preventDefault();
							}
						}
					}
					xb(X) {
						X.equals(a.KeyMod.Shift | a.KeyCode.Tab) &&
							this.isReplaceShown() &&
							(this.replaceInput?.focus(), X.preventDefault());
					}
					yb(X) {
						X.equals(a.KeyCode.Tab) &&
							this.isReplaceShown() &&
							(this.replaceInput?.focusOnPreserve(), X.preventDefault());
					}
					zb(X) {
						X.equals(a.KeyCode.Tab)
							? (this.isReplaceActive()
									? this.focusReplaceAllAction()
									: this.U.fire(),
								X.preventDefault())
							: X.equals(a.KeyMod.Shift | a.KeyCode.Tab) &&
								(this.focusRegexAction(), X.preventDefault());
					}
					Ab(X) {
						X.equals(q | a.KeyCode.Enter) &&
							(this.replaceInput?.inputBox.insertAtCursor(`
`),
							X.preventDefault()),
							X.equals(a.KeyCode.Enter)
								? (this.Cb(), X.preventDefault())
								: X.equals(a.KeyCode.Tab)
									? (this.searchInput?.focusOnCaseSensitive(),
										X.preventDefault())
									: X.equals(a.KeyMod.Shift | a.KeyCode.Tab)
										? (this.searchInput?.focus(), X.preventDefault())
										: X.equals(a.KeyCode.UpArrow)
											? V(
													X,
													this.replaceInput?.getValue() ?? "",
													this.replaceInput?.domNode.querySelector(
														"textarea",
													) ?? null,
												)
											: X.equals(a.KeyCode.DownArrow) &&
												G(
													X,
													this.replaceInput?.getValue() ?? "",
													this.replaceInput?.domNode.querySelector(
														"textarea",
													) ?? null,
												);
					}
					Bb(X) {
						X.equals(a.KeyMod.Shift | a.KeyCode.Tab) &&
							(this.focusRegexAction(), X.preventDefault());
					}
					async Cb(X = !1, Y = 0) {
						if (
							(this.searchInput?.validate(),
							!this.searchInput?.inputBox.isInputValid())
						)
							return;
						const ie = this.searchInput.getValue(),
							ne = this.Db.globalFindClipboard;
						ie && ne && (await this.eb.writeFindText(ie)),
							this.M.fire({ triggeredOnType: X, delay: Y });
					}
					getContextLines() {
						return this.Y.checked ? +this.contextLinesInput.value : 0;
					}
					modifyContextLines(X) {
						const ie = +this.contextLinesInput.value + (X ? 1 : -1);
						(this.Y.checked = ie !== 0),
							(this.contextLinesInput.value = "" + ie);
					}
					toggleContextLines() {
						(this.Y.checked = !this.Y.checked), this.qb();
					}
					dispose() {
						this.setReplaceAllActionState(!1), super.dispose();
					}
					get Db() {
						return this.fb.getValue("search");
					}
				};
				(e.$FOc = K),
					(e.$FOc =
						K =
						F =
							Ne(
								[
									j(2, p.$Wxb),
									j(3, g.$6j),
									j(4, o.$uZ),
									j(5, c.$Vxb),
									j(6, n.$gj),
									j(7, $.$XK),
									j(8, p.$Xxb),
									j(9, M.$Li),
									j(10, N.$IY),
								],
								K,
							));
				function J() {
					f.$TX.registerCommandAndKeybindingRule({
						id: H.ID,
						weight: f.KeybindingWeight.WorkbenchContrib,
						when: g.$Kj.and(
							y.$ooc.SearchViewVisibleKey,
							y.$ooc.ReplaceActiveKey,
							h.$a2b,
						),
						primary: a.KeyMod.Alt | a.KeyMod.CtrlCmd | a.KeyCode.Enter,
						handler: (W) => {
							const X = W.get(I.$HMb);
							if ((0, l.$pOc)(X)) {
								const Y = (0, l.$rOc)(X);
								Y && new H(Y.searchAndReplaceWidget).run();
							}
						},
					});
				}
			},
		),
		