import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/browser/ui/mouseCursor/mouseCursor.js';
import '../../../../base/common/async.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/event.js';
import '../../../../base/common/history.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../editor/contrib/suggest/browser/suggestController.js';
import '../../../../nls.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/history/browser/contextScopedHistoryWidget.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../codeEditor/browser/simpleEditorOptions.js';
import './debugActionViewItems.js';
import './debugIcons.js';
import './linkDetector.js';
import './replFilter.js';
import './replViewer.js';
import '../common/debug.js';
import '../common/debugModel.js';
import '../common/replModel.js';
import '../../../services/editor/common/editorService.js';
import '../../../browser/actions/widgetNavigationCommands.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../platform/hover/browser/hover.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../accessibility/common/accessibilityCommands.js';
import '../../../../base/common/codicons.js';
import '../../../../css!vs/workbench/contrib/debug/browser/media/repl.js';
define(
			de[847],
			he([
				1, 0, 7, 127, 651, 15, 138, 6, 647, 27, 3, 37, 26, 9, 56, 46, 65, 206,
				38, 17, 71, 74, 69, 67, 125, 328, 4, 92, 11, 121, 10, 8, 49, 413, 5,
				128, 39, 43, 93, 34, 41, 21, 32, 51, 35, 146, 60, 89, 521, 1332, 352,
				709, 3686, 3824, 112, 300, 843, 18, 518, 184, 72, 130, 417, 14, 2433,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*aria*/,
				w /*mouseCursor*/,
				E /*async*/,
				C /*decorators*/,
				d /*event*/,
				m /*history*/,
				r /*keyCodes*/,
				u /*lifecycle*/,
				a /*strings*/,
				h /*themables*/,
				c /*uri*/,
				n /*editorBrowser*/,
				g /*editorExtensions*/,
				p /*codeEditorService*/,
				o /*codeEditorWidget*/,
				f /*editorOptions*/,
				b /*range*/,
				s /*editorContextKeys*/,
				l /*languages*/,
				y /*languageFeatures*/,
				$ /*model*/,
				v /*textResourceConfiguration*/,
				S /*suggestController*/,
				I /*nls*/,
				T /*menuEntryActionViewItem*/,
				P /*actions*/,
				k /*clipboardService*/,
				L /*configuration*/,
				D /*contextkey*/,
				M /*contextView*/,
				N /*contextScopedHistoryWidget*/,
				A /*instantiation*/,
				R /*serviceCollection*/,
				O /*keybinding*/,
				B /*keybindingsRegistry*/,
				U /*listService*/,
				z /*log*/,
				F /*opener*/,
				x /*storage*/,
				H /*telemetry*/,
				q /*colorRegistry*/,
				V /*themeService*/,
				G /*viewPane*/,
				K /*views*/,
				J /*viewsService*/,
				W /*simpleEditorOptions*/,
				X /*debugActionViewItems*/,
				Y /*debugIcons*/,
				ie /*linkDetector*/,
				ne /*replFilter*/,
				ee /*replViewer*/,
				_ /*debug*/,
				te /*debugModel*/,
				Q /*replModel*/,
				Z /*editorService*/,
				se /*widgetNavigationCommands*/,
				re /*accessibilitySignalService*/,
				le /*hover*/,
				oe /*accessibilityConfiguration*/,
				ae /*accessibilityCommands*/,
				pe /*codicons*/,
) {
				"use strict";
				var $e, ye;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.Repl = void 0),
					(e.$OJc = Ee),
					(t = mt(t)),
					(i = mt(i));
				const ue = t.$,
					fe = "debug.repl.history",
					me = "debug.repl.filterHistory",
					ve = "debug.repl.filterValue",
					ge = "replinputdecoration";
				function be(Be) {
					Be.scrollTop = Be.scrollHeight - Be.renderHeight;
				}
				const Ce = new Set(),
					Le = { getId: (Be) => Be.getId() };
				let Fe = class extends G.$UMb {
					static {
						$e = this;
					}
					static {
						this.a = 50;
					}
					static {
						this.b = c.URI.parse(`${_.$25}:replinput`);
					}
					constructor(
						Se,
						ke,
						Ue,
						qe,
						Ae,
						Me,
						De,
						Re,
						je,
						Ve,
						Ze,
						et,
						rt,
						ft,
						bt,
						nt,
						lt,
						ct,
						gt,
						ht,
					) {
						const Rt = qe.get(ve, x.StorageScope.WORKSPACE, "");
						super(
							{
								...Se,
								filterOptions: {
									placeholder: (0, I.localize)(5693, null),
									text: Rt,
									history: JSON.parse(
										qe.get(me, x.StorageScope.WORKSPACE, "[]"),
									),
								},
							},
							ft,
							Ve,
							Ze,
							De,
							je,
							Ue,
							bt,
							Ae,
							nt,
							lt,
						),
							(this.vc = ke),
							(this.wc = qe),
							(this.xc = Me),
							(this.Ab = Ze),
							(this.zc = et),
							(this.Ac = rt),
							(this.yb = ft),
							(this.Cc = gt),
							(this.Dc = ht),
							(this.ab = 0),
							(this.hc = 1),
							(this.nc = !1),
							(this.pc = u.$1c.None),
							(this.uc = !1),
							(this.sc = ct.createMenu(P.$XX.DebugConsoleContext, De)),
							this.D(this.sc),
							(this.f = new m.$Job(
								JSON.parse(this.wc.get(fe, x.StorageScope.WORKSPACE, "[]")),
								100,
							)),
							(this.qc = new ne.$AJc()),
							(this.qc.filterQuery = Rt),
							(this.rc = _.$S5.bindTo(De)),
							(this.r = this.D(
								this.Db.createInstance(Oe, this.id, () => this.Zb().background),
							)),
							this.D(this.r.onDidChange(() => this.Hc())),
							Re.registerDecorationType("repl-decoration", ge, {}),
							this.rc.set(this.Kc),
							this.Ec();
					}
					Ec() {
						this.vc.getViewModel().focusedSession &&
							this.Fc(this.vc.getViewModel().focusedSession),
							this.D(
								this.vc
									.getViewModel()
									.onDidFocusSession(async (Se) => this.Fc(Se)),
							),
							this.D(
								this.vc
									.getViewModel()
									.onDidEvaluateLazyExpression(async (Se) => {
										Se instanceof te.$K3 &&
											this.m?.hasNode(Se) &&
											(await this.m.updateChildren(Se, !1, !0),
											await this.m.expand(Se));
									}),
							),
							this.D(
								this.vc.onWillNewSession(async (Se) => {
									const ke = this.m?.getInput();
									(!ke || ke.state === _.State.Inactive) &&
										(await this.selectSession(Se)),
										this.rc.set(this.Kc);
								}),
							),
							this.D(
								this.vc.onDidEndSession(async () => {
									await Promise.resolve(), this.rc.set(this.Kc);
								}),
							),
							this.D(
								this.Fb.onDidColorThemeChange(() => {
									this.Rc(!1), this.isVisible() && this.Sc();
								}),
							),
							this.D(
								this.onDidChangeBodyVisibility((Se) => {
									Se &&
										(this.ic ||
											(this.ic =
												this.xc.getModel($e.b) ||
												this.xc.createModel("", null, $e.b, !0)),
										this.Gc(),
										this.ec.setModel(this.ic),
										this.Sc(),
										this.Rc(!0),
										this.nc && ((this.nc = !1), this.Hc()));
								}),
							),
							this.D(
								this.Ab.onDidChangeConfiguration((Se) => {
									if (
										(Se.affectsConfiguration("debug.console.wordWrap") &&
											this.m &&
											(this.m.dispose(),
											(this.dc.innerText = ""),
											t.$9fb(this.dc),
											this.Nc()),
										Se.affectsConfiguration(
											"debug.console.acceptSuggestionOnEnter",
										))
									) {
										const ke = this.Ab.getValue("debug");
										this.ec.updateOptions({
											acceptSuggestionOnEnter:
												ke.console.acceptSuggestionOnEnter === "on"
													? "on"
													: "off",
										});
									}
								}),
							),
							this.D(
								this.Ac.onDidActiveEditorChange(() => {
									this.Gc();
								}),
							),
							this.D(
								this.filterWidget.onDidChangeFilterText(() => {
									(this.qc.filterQuery = this.filterWidget.getFilterText()),
										this.m && (this.m.refilter(), be(this.m));
								}),
							);
					}
					async Fc(Se) {
						Se &&
							(Ce.delete(Se),
							this.oc?.dispose(),
							Se.capabilities.supportsCompletionsRequest &&
								(this.oc = this.Cc.completionProvider.register(
									{
										scheme: _.$25,
										pattern: "**/replinput",
										hasAccessToAllModels: !0,
									},
									{
										_debugDisplayName: "debugConsole",
										triggerCharacters: Se.capabilities
											.completionTriggerCharacters || ["."],
										provideCompletionItems: async (ke, Ue, qe, Ae) => {
											this.jc(!1);
											const Me = this.ec.getModel();
											if (Me) {
												const De = Me.getWordAtPosition(Ue),
													Re = De ? De.word.length : 0,
													je = Me.getValue(),
													Ve = this.vc.getViewModel().focusedStackFrame,
													Ze = Ve ? Ve.frameId : void 0,
													et = await Se.completions(
														Ze,
														Ve?.thread.threadId || 0,
														je,
														Ue,
														Re,
														Ae,
													),
													rt = [],
													ft = (bt) =>
														b.$iL.fromPositions(Ue.delta(0, -bt), Ue);
												if (
													(et &&
														et.body &&
														et.body.targets &&
														et.body.targets.forEach((bt) => {
															if (bt && bt.label) {
																let nt,
																	lt = bt.text || bt.label;
																if (typeof bt.selectionStart == "number") {
																	nt =
																		l.CompletionItemInsertTextRule
																			.InsertAsSnippet;
																	const ct =
																			typeof bt.selectionLength == "number"
																				? bt.selectionLength
																				: 0,
																		gt =
																			ct > 0
																				? "${1:" +
																					lt.substring(
																						bt.selectionStart,
																						bt.selectionStart + ct,
																					) +
																					"}$0"
																				: "$0";
																	lt =
																		lt.substring(0, bt.selectionStart) +
																		gt +
																		lt.substring(bt.selectionStart + ct);
																}
																rt.push({
																	label: bt.label,
																	insertText: lt,
																	detail: bt.detail,
																	kind: l.CompletionItemKinds.fromString(
																		bt.type || "property",
																	),
																	filterText:
																		bt.start && bt.length
																			? je
																					.substring(
																						bt.start,
																						bt.start + bt.length,
																					)
																					.concat(bt.label)
																			: void 0,
																	range: ft(bt.length || Re),
																	sortText: bt.sortText,
																	insertTextRules: nt,
																});
															}
														}),
													this.Ab.getValue("debug").console.historySuggestions)
												) {
													const bt = this.f.getHistory(),
														nt = String(bt.length).length;
													bt.forEach((lt, ct) =>
														rt.push({
															label: lt,
															insertText: lt,
															kind: l.CompletionItemKind.Text,
															range: ft(lt.length),
															sortText:
																"ZZZ" +
																String(bt.length - ct).padStart(nt, "0"),
														}),
													);
												}
												return { suggestions: rt };
											}
											return Promise.resolve({ suggestions: [] });
										},
									},
								))),
							await this.selectSession();
					}
					getFilterStats() {
						return {
							total: this.m?.getNode().children.length ?? 0,
							filtered:
								this.m?.getNode().children.filter((Se) => Se.visible).length ??
								0,
						};
					}
					get isReadonly() {
						const Se = this.m?.getInput();
						return !(Se && Se.state !== _.State.Inactive);
					}
					showPreviousValue() {
						this.isReadonly || this.Ic(!0);
					}
					showNextValue() {
						this.isReadonly || this.Ic(!1);
					}
					focusFilter() {
						this.filterWidget.focus();
					}
					openFind() {
						this.m?.openFind();
					}
					Gc() {
						if (!this.isVisible()) return;
						const Se = this.Ac.activeTextEditorControl;
						(0, n.$0sb)(Se) &&
							(this.pc.dispose(),
							(this.pc = Se.onDidChangeModelLanguage(() => this.Gc())),
							this.ic &&
								Se.hasModel() &&
								this.ic.setLanguage(Se.getModel().getLanguageId()));
					}
					Hc() {
						if (!this.isVisible()) {
							this.nc = !0;
							return;
						}
						if (this.mc) {
							this.ec.updateOptions({
								fontSize: this.r.replConfiguration.fontSize,
								lineHeight: this.r.replConfiguration.lineHeight,
								fontFamily:
									this.r.replConfiguration.fontFamily === "default"
										? f.EDITOR_FONT_DEFAULTS.fontFamily
										: this.r.replConfiguration.fontFamily,
							});
							const Se = this.ec.getOption(f.EditorOption.lineHeight);
							this.mc.textContent = `
				.repl .repl-input-wrapper .repl-input-chevron {
					line-height: ${Se}px
				}

				.repl .repl-input-wrapper .monaco-editor .lines-content {
					background-color: ${this.r.replConfiguration.backgroundColor};
				}
			`;
							const ke =
								this.r.replConfiguration.fontFamily === "default"
									? "var(--monaco-monospace-font)"
									: this.r.replConfiguration.fontFamily;
							this.cc.style.setProperty("--vscode-repl-font-family", ke),
								this.cc.style.setProperty(
									"--vscode-repl-font-size",
									`${this.r.replConfiguration.fontSize}px`,
								),
								this.cc.style.setProperty(
									"--vscode-repl-font-size-for-twistie",
									`${this.r.replConfiguration.fontSizeForTwistie}px`,
								),
								this.cc.style.setProperty(
									"--vscode-repl-line-height",
									this.r.replConfiguration.cssLineHeight,
								),
								this.m?.rerender(),
								this.gc && this.L(this.gc.height, this.gc.width);
						}
					}
					Ic(Se) {
						const ke =
							(Se ? (this.f.previous() ?? this.f.first()) : this.f.next()) ??
							"";
						this.ec.setValue(ke),
							i.$pib(ke),
							this.ec.setPosition({ lineNumber: 1, column: ke.length + 1 }),
							this.jc(!0);
					}
					async selectSession(Se) {
						const ke = this.m?.getInput();
						if (!Se) {
							const Ue = this.vc.getViewModel().focusedSession;
							Ue
								? (Se = Ue)
								: (!ke || Ce.has(ke)) &&
									(Se = this.vc
										.getModel()
										.getSessions(!0)
										.find((qe) => !Ce.has(qe)));
						}
						if (
							Se &&
							(this.lc?.dispose(),
							(this.lc = Se.onDidChangeReplElements(() => {
								this.Rc(Se.getReplElements().length === 0);
							})),
							this.m && ke !== Se)
						) {
							try {
								await this.m.setInput(Se);
							} catch (Ue) {
								this.Dc.error(Ue);
							}
							be(this.m);
						}
						this.ec?.updateOptions({ readOnly: this.isReadonly }), this.Sc();
					}
					async clearRepl() {
						const Se = this.m?.getInput();
						Se &&
							(Se.removeReplExpressions(),
							Se.state === _.State.Inactive &&
								(Ce.add(Se), await this.selectSession(), this.rc.set(this.Kc))),
							this.ec.focus();
					}
					acceptReplInput() {
						const Se = this.m?.getInput();
						if (Se && !this.isReadonly) {
							Se.addReplExpression(
								this.vc.getViewModel().focusedStackFrame,
								this.ec.getValue(),
							),
								be(this.m),
								this.f.add(this.ec.getValue()),
								this.ec.setValue("");
							const ke = this.hc > 1;
							(this.hc = 1),
								ke && this.gc && this.L(this.gc.height, this.gc.width);
						}
					}
					sendReplInput(Se) {
						const ke = this.m?.getInput();
						ke &&
							!this.isReadonly &&
							(ke.addReplExpression(
								this.vc.getViewModel().focusedStackFrame,
								Se,
							),
							be(this.m),
							this.f.add(Se));
					}
					getVisibleContent() {
						let Se = "";
						if (this.ic && this.m) {
							const ke = this.zc.getEOL(this.ic.uri),
								Ue = (qe) => {
									qe.children.forEach((Ae) => {
										Ae.visible &&
											((Se += Ae.element.toString().trimRight() + ke),
											!Ae.collapsed && Ae.children.length && Ue(Ae));
									});
								};
							Ue(this.m.getNode());
						}
						return (0, a.$9f)(Se);
					}
					L(Se, ke) {
						this.gc = new t.$pgb(ke, Se);
						const Ue = Math.min(this.ec.getContentHeight(), Se);
						if (this.m) {
							const qe =
									this.m.scrollTop + this.m.renderHeight >= this.m.scrollHeight,
								Ae = Se - Ue;
							(this.m.getHTMLElement().style.height = `${Ae}px`),
								this.m.layout(Ae, ke),
								qe && be(this.m);
						}
						(this.fc.style.height = `${Ue}px`),
							this.ec.layout({ width: ke - 30, height: Ue });
					}
					collapseAll() {
						this.m?.collapseAll();
					}
					getDebugSession() {
						return this.m?.getInput();
					}
					getReplInput() {
						return this.ec;
					}
					getReplDataSource() {
						return this.tc;
					}
					getFocusedElement() {
						return this.m?.getFocus()?.[0];
					}
					focusTree() {
						this.m?.domFocus();
					}
					focus() {
						super.focus(), setTimeout(() => this.ec.focus(), 0);
					}
					getActionViewItem(Se) {
						if (Se.id === Ie) {
							const ke =
								(this.m ? this.m.getInput() : void 0) ??
								this.vc.getViewModel().focusedSession;
							return this.Db.createInstance(Te, Se, ke);
						}
						return super.getActionViewItem(Se);
					}
					get Kc() {
						return (
							this.vc
								.getModel()
								.getSessions(!0)
								.filter((Se) => Se.hasSeparateRepl() && !Ce.has(Se)).length > 1
						);
					}
					get Lc() {
						const Se = new Set();
						return new E.$Yh(async () => {
							if (!this.m || !this.m.getInput()) return;
							await this.m.updateChildren(void 0, !0, !1, {
								diffIdentityProvider: Le,
							});
							const ke = this.m.getInput();
							if (ke) {
								const Ae = async (Me) => {
									for (const De of Me)
										De instanceof Q.$aIc &&
											(De.autoExpand &&
												!Se.has(De.getId()) &&
												(Se.add(De.getId()), await this.m.expand(De)),
											this.m.isCollapsed(De) || (await Ae(De.getChildren())));
								};
								await Ae(ke.getReplElements());
							}
							const { total: Ue, filtered: qe } = this.getFilterStats();
							this.filterWidget.updateBadge(
								Ue === qe || Ue === 0
									? void 0
									: (0, I.localize)(5694, null, qe, Ue),
							);
						}, $e.a);
					}
					render() {
						super.render(),
							this.D(
								(0, se.$D3b)({
									name: "repl",
									focusNotifiers: [this, this.filterWidget],
									focusNextWidget: () => {
										const Se = this.m?.getHTMLElement();
										this.filterWidget.hasFocus()
											? this.m?.domFocus()
											: Se && t.$Kgb(Se) && this.focus();
									},
									focusPreviousWidget: () => {
										const Se = this.m?.getHTMLElement();
										this.ec.hasTextFocus()
											? this.m?.domFocus()
											: Se && t.$Kgb(Se) && this.focusFilter();
									},
								}),
							);
					}
					W(Se) {
						super.W(Se),
							(this.cc = t.$fhb(Se, ue(".repl"))),
							(this.dc = t.$fhb(this.cc, ue(`.repl-tree.${w.$0ob}`))),
							this.Oc(this.cc),
							this.Nc();
					}
					Nc() {
						this.sb = new ee.$KJc(this.Ab, this.r);
						const Se = this.Ab.getValue("debug").console.wordWrap;
						this.dc.classList.toggle("word-wrap", Se);
						const ke = this.Db.createInstance(ie.$7Hc);
						this.tc = new ee.$LJc();
						const Ue = (this.m = this.Db.createInstance(
							U.$FMb,
							"DebugRepl",
							this.dc,
							this.sb,
							[
								this.Db.createInstance(ee.$IJc, ke),
								this.Db.createInstance(ee.$HJc, ke),
								new ee.$EJc(),
								this.Db.createInstance(ee.$FJc, ke),
								new ee.$GJc(ke, this.Hb),
								new ee.$JJc(ke, this.Hb),
							],
							this.tc,
							{
								filter: this.qc,
								accessibilityProvider: new ee.$MJc(),
								identityProvider: Le,
								mouseSupport: !1,
								findWidgetEnabled: !0,
								keyboardNavigationLabelProvider: {
									getKeyboardNavigationLabel: (Ae) => Ae.toString(!0),
								},
								horizontalScrolling: !Se,
								setRowLineHeight: !1,
								supportDynamicHeights: Se,
								overrideStyles: this.Zb().listOverrideStyles,
							},
						));
						this.D(
							Ue.onDidChangeContentHeight(() => {
								Ue.scrollHeight !== this.ab &&
									Ue.scrollTop + Ue.renderHeight >= this.ab - 2 &&
									setTimeout(() => {
										be(Ue);
									}, 0),
									(this.ab = Ue.scrollHeight);
							}),
						),
							this.D(Ue.onContextMenu((Ae) => this.Qc(Ae))),
							this.D(Ue.onDidChangeFindOpenState((Ae) => (this.uc = Ae)));
						let qe;
						this.D(
							Ue.onMouseClick(() => {
								if (this.uc) return;
								const Ae = t.getWindow(this.dc).getSelection();
								(!Ae || Ae.type !== "Range" || qe === Ae.toString()) &&
									this.ec.focus(),
									(qe = Ae ? Ae.toString() : "");
							}),
						),
							this.selectSession(),
							(this.mc = t.$Rgb(this.cc)),
							this.Hc();
					}
					Oc(Se) {
						(this.fc = t.$fhb(Se, ue(".repl-input-wrapper"))),
							t.$fhb(
								this.fc,
								ue(".repl-input-chevron" + h.ThemeIcon.asCSSSelector(Y.$JKb)),
							);
						const {
							historyNavigationBackwardsEnablement: ke,
							historyNavigationForwardsEnablement: Ue,
						} = this.D((0, N.$UCb)(this.xb, this));
						(this.jc = (Me) => {
							ke.set(Me), Ue.set(Me);
						}),
							_.$84.bindTo(this.xb).set(!0),
							(this.kc = this.D(
								this.Db.createChild(new R.$Ki([D.$6j, this.xb])),
							));
						const qe = (0, W.$xYb)(this.Ab);
						(qe.readOnly = !0), (qe.suggest = { showStatusBar: !0 });
						const Ae = this.Ab.getValue("debug");
						(qe.acceptSuggestionOnEnter =
							Ae.console.acceptSuggestionOnEnter === "on" ? "on" : "off"),
							(qe.ariaLabel = this.Pc()),
							(this.ec = this.kc.createInstance(
								o.$rwb,
								this.fc,
								qe,
								(0, W.$yYb)(),
							)),
							this.D(
								this.ec.onDidChangeModelContent(() => {
									const Me = this.ec.getModel();
									this.jc(!!Me && Me.getValue() === "");
									const De = Me ? Math.min(10, Me.getLineCount()) : 1;
									De !== this.hc &&
										((this.hc = De),
										this.gc && this.L(this.gc.height, this.gc.width));
								}),
							),
							this.D(this.ec.onDidFocusEditorText(() => this.Sc())),
							this.D(this.ec.onDidBlurEditorText(() => this.Sc())),
							this.D(
								t.$$fb(this.fc, t.$$gb.FOCUS, () =>
									this.fc.classList.add("synthetic-focus"),
								),
							),
							this.D(
								t.$$fb(this.fc, t.$$gb.BLUR, () =>
									this.fc.classList.remove("synthetic-focus"),
								),
							);
					}
					Pc() {
						let Se = (0, I.localize)(5695, null);
						if (!this.Ab.getValue(oe.AccessibilityVerbositySettingId.Debug))
							return Se;
						const ke = this.yb
							.lookupKeybinding(ae.AccessibilityCommandId.OpenAccessibilityHelp)
							?.getAriaLabel();
						return (
							ke
								? (Se = (0, I.localize)(5696, null, Se, ke))
								: (Se = (0, I.localize)(5697, null, Se)),
							Se
						);
					}
					Qc(Se) {
						const ke = [];
						(0, T.$Jyb)(
							this.sc,
							{ arg: Se.element, shouldForwardArgs: !1 },
							ke,
						),
							this.zb.showContextMenu({
								getAnchor: () => Se.anchor,
								getActions: () => ke,
								getActionsContext: () => Se.element,
							});
					}
					Rc(Se) {
						if (this.m && this.isVisible()) {
							if (this.Lc.isScheduled()) return;
							this.Lc.schedule(Se ? 0 : void 0);
						}
					}
					Sc() {
						if (!this.ec) return;
						const Se = [];
						if (
							this.isReadonly &&
							this.ec.hasTextFocus() &&
							!this.ec.getValue()
						) {
							const ke = (0, q.$GP)(
								q.$9P,
								this.Fb.getColorTheme(),
							)?.transparent(0.4);
							Se.push({
								range: {
									startLineNumber: 0,
									endLineNumber: 0,
									startColumn: 0,
									endColumn: 1,
								},
								renderOptions: {
									after: {
										contentText: (0, I.localize)(5698, null),
										color: ke ? ke.toString() : void 0,
									},
								},
							});
						}
						this.ec.setDecorationsByType("repl-decoration", ge, Se);
					}
					saveState() {
						const Se = this.f.getHistory();
						Se.length
							? this.wc.store(
									fe,
									JSON.stringify(Se),
									x.StorageScope.WORKSPACE,
									x.StorageTarget.MACHINE,
								)
							: this.wc.remove(fe, x.StorageScope.WORKSPACE);
						const ke = this.filterWidget.getHistory();
						ke.length
							? this.wc.store(
									me,
									JSON.stringify(ke),
									x.StorageScope.WORKSPACE,
									x.StorageTarget.MACHINE,
								)
							: this.wc.remove(me, x.StorageScope.WORKSPACE);
						const Ue = this.filterWidget.getFilterText();
						Ue
							? this.wc.store(
									ve,
									Ue,
									x.StorageScope.WORKSPACE,
									x.StorageTarget.MACHINE,
								)
							: this.wc.remove(ve, x.StorageScope.WORKSPACE),
							super.saveState();
					}
					dispose() {
						this.ec?.dispose(),
							this.lc?.dispose(),
							this.Lc.dispose(),
							this.pc.dispose(),
							super.dispose();
					}
				};
				(e.Repl = Fe),
					Ne([C.$ei], Fe.prototype, "Lc", null),
					(e.Repl =
						Fe =
						$e =
							Ne(
								[
									j(1, _.$75),
									j(2, A.$Li),
									j(3, x.$lq),
									j(4, V.$iP),
									j(5, $.$QO),
									j(6, D.$6j),
									j(7, p.$dtb),
									j(8, K.$K1),
									j(9, M.$Xxb),
									j(10, L.$gj),
									j(11, v.$YO),
									j(12, Z.$IY),
									j(13, O.$uZ),
									j(14, F.$7rb),
									j(15, H.$km),
									j(16, le.$Uyb),
									j(17, P.$YX),
									j(18, y.$k3),
									j(19, z.$ik),
								],
								Fe,
							));
				let Oe = class extends u.$1c {
					static {
						ye = this;
					}
					static {
						this.a = 1.4;
					}
					get replConfiguration() {
						return this.f;
					}
					constructor(Se, ke, Ue, qe, Ae) {
						super(),
							(this.g = ke),
							(this.j = Ue),
							(this.m = qe),
							(this.n = Ae),
							(this.b = this.D(new d.$re())),
							(this.onDidChange = this.b.event),
							this.D(this.m.onDidColorThemeChange((Me) => this.q())),
							this.D(
								this.n.onDidChangeLocation((Me) => {
									Me.views.some((De) => De.id === Se) && this.q();
								}),
							),
							this.D(
								this.j.onDidChangeConfiguration((Me) => {
									(Me.affectsConfiguration("debug.console.lineHeight") ||
										Me.affectsConfiguration("debug.console.fontSize") ||
										Me.affectsConfiguration("debug.console.fontFamily")) &&
										this.q();
								}),
							),
							this.q();
					}
					q() {
						const Se = this.j.getValue("debug").console;
						(this.f = {
							fontSize: Se.fontSize,
							fontFamily: Se.fontFamily,
							lineHeight: Se.lineHeight ? Se.lineHeight : ye.a * Se.fontSize,
							cssLineHeight: Se.lineHeight ? `${Se.lineHeight}px` : `${ye.a}em`,
							backgroundColor: this.m.getColorTheme().getColor(this.g()),
							fontSizeForTwistie: (Se.fontSize * ye.a) / 2 - 8,
						}),
							this.b.fire();
					}
				};
				Oe = ye = Ne([j(2, L.$gj), j(3, V.$iP), j(4, K.$K1)], Oe);
				class xe extends g.$itb {
					constructor() {
						super({
							id: "repl.action.acceptInput",
							label: (0, I.localize)(5699, null),
							alias: "Debug Console: Accept Input",
							precondition: _.$84,
							kbOpts: {
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: r.KeyCode.Enter,
								weight: B.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(Se, ke) {
						S.$KDb.get(ke)?.cancelSuggestWidget(),
							Ee(Se.get(J.$HMb))?.acceptReplInput();
					}
				}
				class He extends G.$WMb {
					constructor() {
						super({
							viewId: _.$Y4,
							id: "repl.action.filter",
							title: (0, I.localize)(5700, null),
							precondition: _.$84,
							keybinding: [
								{
									when: s.EditorContextKeys.textInputFocus,
									primary: r.KeyMod.CtrlCmd | r.KeyCode.KeyF,
									weight: B.KeybindingWeight.EditorContrib,
								},
							],
						});
					}
					runInView(Se, ke) {
						ke.focusFilter();
					}
				}
				class Ke extends G.$WMb {
					constructor() {
						super({
							viewId: _.$Y4,
							id: "repl.action.find",
							title: (0, I.localize)(5701, null),
							precondition: _.$84,
							keybinding: [
								{
									when: D.$Kj.or(
										_.$84,
										D.$Kj.equals("focusedView", "workbench.panel.repl.view"),
									),
									primary: r.KeyMod.CtrlCmd | r.KeyMod.Alt | r.KeyCode.KeyF,
									weight: B.KeybindingWeight.EditorContrib,
								},
							],
							icon: pe.$ak.search,
							menu: [
								{
									id: P.$XX.ViewTitle,
									group: "navigation",
									when: D.$Kj.equals("view", _.$Y4),
									order: 15,
								},
								{
									id: P.$XX.DebugConsoleContext,
									group: "z_commands",
									order: 25,
								},
							],
						});
					}
					runInView(Se, ke) {
						ke.openFind();
					}
				}
				class Je extends g.$itb {
					constructor() {
						super({
							id: "repl.action.copyAll",
							label: (0, I.localize)(5702, null),
							alias: "Debug Console Copy All",
							precondition: _.$84,
						});
					}
					run(Se, ke) {
						const Ue = Se.get(k.$Vxb),
							qe = Ee(Se.get(J.$HMb));
						if (qe) return Ue.writeText(qe.getVisibleContent());
					}
				}
				(0, g.$ntb)(xe), (0, g.$ntb)(Je), (0, P.$4X)(He), (0, P.$4X)(Ke);
				class Te extends X.$zJc {
					M() {
						return this.a
							.getModel()
							.getSessions(!0)
							.filter((Se) => Se.hasSeparateRepl() && !Ce.has(Se));
					}
					N(Se) {
						for (; Se.parentSession && !Se.hasSeparateRepl(); )
							Se = Se.parentSession;
						return Se;
					}
				}
				function Ee(Be) {
					return Be.getActiveViewWithId(_.$Y4) ?? void 0;
				}
				const Ie = "workbench.action.debug.selectRepl";
				(0, P.$4X)(
					class extends G.$WMb {
						constructor() {
							super({
								id: Ie,
								viewId: _.$Y4,
								title: (0, I.localize)(5703, null),
								f1: !1,
								menu: {
									id: P.$XX.ViewTitle,
									group: "navigation",
									when: D.$Kj.and(D.$Kj.equals("view", _.$Y4), _.$S5),
									order: 20,
								},
							});
						}
						async runInView(Be, Se, ke) {
							const Ue = Be.get(_.$75);
							if (
								ke &&
								ke.state !== _.State.Inactive &&
								ke !== Ue.getViewModel().focusedSession
							) {
								if (ke.state !== _.State.Stopped) {
									const qe = Ue.getModel()
										.getSessions()
										.find(
											(Ae) =>
												Ae.parentSession === ke && Ae.state === _.State.Stopped,
										);
									qe && (ke = qe);
								}
								await Ue.focusStackFrame(void 0, void 0, ke, { explicit: !0 });
							}
							await Se.selectSession(ke);
						}
					},
				),
					(0, P.$4X)(
						class extends G.$WMb {
							constructor() {
								super({
									id: "workbench.debug.panel.action.clearReplAction",
									viewId: _.$Y4,
									title: (0, I.localize2)(5708, "Clear Console"),
									metadata: {
										description: (0, I.localize2)(
											5709,
											"Clears all program output from your debug REPL",
										),
									},
									f1: !0,
									icon: Y.$AKb,
									menu: [
										{
											id: P.$XX.ViewTitle,
											group: "navigation",
											when: D.$Kj.equals("view", _.$Y4),
											order: 30,
										},
										{
											id: P.$XX.DebugConsoleContext,
											group: "z_commands",
											order: 20,
										},
									],
									keybinding: [
										{
											primary: 0,
											mac: { primary: r.KeyMod.CtrlCmd | r.KeyCode.KeyK },
											weight: B.KeybindingWeight.WorkbenchContrib + 1,
											when: D.$Kj.equals(
												"focusedView",
												"workbench.panel.repl.view",
											),
										},
									],
								});
							}
							runInView(Be, Se) {
								const ke = Be.get(re.$Owb);
								Se.clearRepl(), ke.playSignal(re.$Twb.clear);
							}
						},
					),
					(0, P.$4X)(
						class extends G.$WMb {
							constructor() {
								super({
									id: "debug.collapseRepl",
									title: (0, I.localize)(5704, null),
									viewId: _.$Y4,
									menu: {
										id: P.$XX.DebugConsoleContext,
										group: "z_commands",
										order: 10,
									},
								});
							}
							runInView(Be, Se) {
								Se.collapseAll(), Se.focus();
							}
						},
					),
					(0, P.$4X)(
						class extends G.$WMb {
							constructor() {
								super({
									id: "debug.replPaste",
									title: (0, I.localize)(5705, null),
									viewId: _.$Y4,
									precondition: _.$24.notEqualsTo((0, _.$45)(_.State.Inactive)),
									menu: {
										id: P.$XX.DebugConsoleContext,
										group: "2_cutcopypaste",
										order: 30,
									},
								});
							}
							async runInView(Be, Se) {
								const Ue = await Be.get(k.$Vxb).readText();
								if (Ue) {
									const qe = Se.getReplInput();
									qe.setValue(qe.getValue().concat(Ue)), Se.focus();
									const Ae = qe.getModel(),
										Me = Ae ? Ae.getLineCount() : 0,
										De = Ae?.getLineMaxColumn(Me);
									typeof Me == "number" &&
										typeof De == "number" &&
										qe.setPosition({ lineNumber: Me, column: De });
								}
							}
						},
					),
					(0, P.$4X)(
						class extends G.$WMb {
							constructor() {
								super({
									id: "workbench.debug.action.copyAll",
									title: (0, I.localize)(5706, null),
									viewId: _.$Y4,
									menu: {
										id: P.$XX.DebugConsoleContext,
										group: "2_cutcopypaste",
										order: 20,
									},
								});
							}
							async runInView(Be, Se) {
								await Be.get(k.$Vxb).writeText(Se.getVisibleContent());
							}
						},
					),
					(0, P.$4X)(
						class extends P.$3X {
							constructor() {
								super({
									id: "debug.replCopy",
									title: (0, I.localize)(5707, null),
									menu: {
										id: P.$XX.DebugConsoleContext,
										group: "2_cutcopypaste",
										order: 10,
									},
								});
							}
							async run(Be, Se) {
								const ke = Be.get(k.$Vxb),
									Ue = Be.get(_.$75),
									Ae = t.$Ogb().getSelection()?.toString();
								if (Ae && Ae.length > 0) return ke.writeText(Ae);
								if (Se)
									return ke.writeText((await this.a(Ue, Se)) || Se.toString());
							}
							async a(Be, Se) {
								if (!(Se instanceof Q.$_Hc)) return;
								const ke = Be.getViewModel().focusedStackFrame,
									Ue = Be.getViewModel().focusedSession;
								if (!(!ke || !Ue || !Ue.capabilities.supportsClipboardContext))
									try {
										return (
											await Ue.evaluate(
												Se.originalExpression,
												ke.frameId,
												"clipboard",
											)
										)?.body.result;
									} catch {
										return;
									}
							}
						},
					);
			},
		),
		