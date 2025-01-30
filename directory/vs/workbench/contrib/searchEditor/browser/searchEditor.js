import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/async.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/types.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/core/selection.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../editor/contrib/gotoSymbol/browser/peek/referencesController.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../browser/parts/editor/textCodeEditor.js';
import '../../../common/editor.js';
import '../../search/browser/patternInputWidget.js';
import '../../search/browser/searchWidget.js';
import '../../../services/search/common/queryBuilder.js';
import '../../search/common/search.js';
import '../../search/browser/searchModel.js';
import './constants.js';
import './searchEditorSerialization.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/search/common/search.js';
import '../../search/browser/searchIcons.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/notification/common/notification.js';
import '../../search/browser/searchMessage.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/contrib/unusualLineTerminators/browser/unusualLineTerminators.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/log/common/log.js';
import '../../search/common/constants.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../css!vs/workbench/contrib/searchEditor/browser/media/searchEditor.js';
define(
			de[4169],
			he([
				1, 0, 7, 114, 127, 15, 27, 3, 28, 48, 17, 104, 67, 125, 840, 4, 31, 10,
				8, 49, 5, 128, 73, 84, 21, 32, 51, 35, 26, 25, 1337, 44, 1748, 1367,
				361, 568, 405, 615, 1067, 66, 18, 186, 561, 22, 41, 40, 1863, 46, 1647,
				106, 34, 377, 95, 72, 908,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*keyboardEvent*/,
				w /*aria*/,
				E /*async*/,
				C /*keyCodes*/,
				d /*lifecycle*/,
				m /*types*/,
				r /*position*/,
				u /*range*/,
				a /*selection*/,
				h /*model*/,
				c /*textResourceConfiguration*/,
				n /*referencesController*/,
				g /*nls*/,
				p /*commands*/,
				o /*configuration*/,
				f /*contextkey*/,
				b /*contextView*/,
				s /*instantiation*/,
				l /*serviceCollection*/,
				y /*label*/,
				$ /*progress*/,
				v /*storage*/,
				S /*telemetry*/,
				I /*colorRegistry*/,
				T /*themeService*/,
				P /*themables*/,
				k /*workspace*/,
				L /*textCodeEditor*/,
				D /*editor*/,
				M /*patternInputWidget*/,
				N /*searchWidget*/,
				A /*queryBuilder*/,
				R /*search*/,
				O /*searchModel*/,
				B /*constants*/,
				U /*searchEditorSerialization*/,
				z /*editorGroupsService*/,
				F /*editorService*/,
				x /*search*/,
				H /*searchIcons*/,
				q /*files*/,
				V /*opener*/,
				G /*notification*/,
				K /*searchMessage*/,
				J /*editorExtensions*/,
				W /*unusualLineTerminators*/,
				X /*defaultStyles*/,
				Y /*log*/,
				ie /*constants*/,
				ne /*hoverDelegateFactory*/,
				ee /*hover*/,
) {
				"use strict";
				var _;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VOc = void 0),
					(t = mt(t));
				const te = /^(\s+)(\d+)(: |  )(\s*)(.*)$/,
					Q = /^(\S.*):$/;
				let Z = class extends L.$lec {
					static {
						_ = this;
					}
					static {
						this.ID = B.$zOc;
					}
					static {
						this.SEARCH_EDITOR_VIEW_STATE_PREFERENCE_KEY =
							"searchEditorViewState";
					}
					get Yb() {
						return this.a;
					}
					constructor(
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
					) {
						super(_.ID, ae, pe, ve, ye, Oe, $e, He, xe, Je),
							(this.pc = ue),
							(this.qc = fe),
							(this.rc = me),
							(this.sc = ge),
							(this.tc = be),
							(this.uc = Ce),
							(this.vc = Le),
							(this.wc = Ke),
							(this.xc = Te),
							(this.yc = Ee),
							(this.fc = new E.$Jh(0)),
							(this.gc = !1),
							(this.hc = !1),
							(this.nc = 0),
							(this.oc = !1),
							(this.lc = t.$(".search-editor")),
							(this.ic = this.D(new $.$aO(Fe))),
							this.D((this.kc = new d.$Zc())),
							(this.jc = new E.$Jh(2e3)),
							(this.mc = this.D(this.m.createInstance(O.$RNc)));
					}
					Y(ae) {
						t.$fhb(ae, this.lc),
							(this.Zb = t.$fhb(this.lc, t.$(".query-container")));
						const pe = t.$fhb(this.lc, t.$(".search-results"));
						super.Y(pe), this.Ec();
						const $e = (0, m.$wg)(this.scopedContextKeyService);
						B.$vOc.bindTo($e).set(!0),
							this.Ac(
								this.Zb,
								this.D(this.m.createChild(new l.$Ki([f.$6j, $e]))),
								ie.$ooc.InputBoxFocusedKey.bindTo($e),
							);
					}
					Ac(ae, pe, $e) {
						const ye = (0, X.$xyb)({ inputBorder: se });
						(this.Xb = this.D(
							pe.createInstance(N.$FOc, ae, {
								_hideReplaceToggle: !0,
								showContextToggle: !0,
								inputBoxStyles: ye,
								toggleStyles: X.$pyb,
							}),
						)),
							this.D(this.Xb.onReplaceToggled(() => this.Mc())),
							this.D(this.Xb.onDidHeightChange(() => this.Mc())),
							this.D(
								this.Xb.onSearchSubmit(({ delay: be }) =>
									this.triggerSearch({ delay: be }),
								),
							),
							this.Xb.searchInput
								? this.D(
										this.Xb.searchInput.onDidOptionChange(() =>
											this.triggerSearch({ resetCursor: !1 }),
										),
									)
								: this.xc.warn(
										"SearchEditor: SearchWidget.searchInput is undefined, cannot register onDidOptionChange listener",
									),
							this.D(
								this.Xb.onDidToggleContext(() =>
									this.triggerSearch({ resetCursor: !1 }),
								),
							),
							(this.cc = t.$fhb(ae, t.$(".includes-excludes")));
						const ue = (0, g.localize)(9398, null);
						(this.dc = t.$fhb(
							this.cc,
							t.$(".expand" + P.ThemeIcon.asCSSSelector(H.$4Nc), {
								tabindex: 0,
								role: "button",
								"aria-label": ue,
							}),
						)),
							this.D(
								this.yc.setupManagedHover((0, ne.$cib)("element"), this.dc, ue),
							),
							this.D(
								t.$0fb(this.dc, t.$$gb.CLICK, (be) => {
									t.$ahb.stop(be), this.Pc();
								}),
							),
							this.D(
								t.$0fb(this.dc, t.$$gb.KEY_UP, (be) => {
									const Ce = new i.$7fb(be);
									(Ce.equals(C.KeyCode.Enter) || Ce.equals(C.KeyCode.Space)) &&
										(t.$ahb.stop(be), this.Pc());
								}),
							),
							this.D(
								t.$0fb(this.dc, t.$$gb.KEY_DOWN, (be) => {
									new i.$7fb(be).equals(C.KeyMod.Shift | C.KeyCode.Tab) &&
										(this.Xb.isReplaceActive()
											? this.Xb.focusReplaceAllAction()
											: this.Xb.isReplaceShown()
												? this.Xb.replaceInput?.focusOnPreserve()
												: this.Xb.focusRegexAction(),
										t.$ahb.stop(be));
								}),
							);
						const fe = t.$fhb(this.cc, t.$(".file-types.includes")),
							me = (0, g.localize)(9399, null);
						t.$fhb(fe, t.$("h4", void 0, me)),
							(this.ac = this.D(
								pe.createInstance(M.$mOc, fe, this.sc, {
									ariaLabel: (0, g.localize)(9400, null),
									inputBoxStyles: ye,
								}),
							)),
							this.ac.onSubmit((be) =>
								this.triggerSearch({
									resetCursor: !1,
									delay: be ? this.Fc.searchOnTypeDebouncePeriod : 0,
								}),
							),
							this.D(
								this.ac.onChangeSearchInEditorsBox(() => this.triggerSearch()),
							);
						const ve = t.$fhb(this.cc, t.$(".file-types.excludes")),
							ge = (0, g.localize)(9401, null);
						t.$fhb(ve, t.$("h4", void 0, ge)),
							(this.bc = this.D(
								pe.createInstance(M.$nOc, ve, this.sc, {
									ariaLabel: (0, g.localize)(9402, null),
									inputBoxStyles: ye,
								}),
							)),
							this.bc.onSubmit((be) =>
								this.triggerSearch({
									resetCursor: !1,
									delay: be ? this.Fc.searchOnTypeDebouncePeriod : 0,
								}),
							),
							this.D(this.bc.onChangeIgnoreBox(() => this.triggerSearch())),
							(this.ec = t.$fhb(
								ae,
								t.$(".messages.text-search-provider-messages"),
							)),
							[
								this.Xb.searchInputFocusTracker,
								this.Xb.replaceInputFocusTracker,
								this.bc.inputFocusTracker,
								this.ac.inputFocusTracker,
							].forEach((be) => {
								be &&
									(this.D(be.onDidFocus(() => setTimeout(() => $e.set(!0), 0))),
									this.D(be.onDidBlur(() => $e.set(!1))));
							});
					}
					Bc(ae) {
						if ((t.$9fb(this.ec), this.kc.clear(), ae)) {
							const pe = t.$fhb(
								this.ec,
								t.$(
									"a.pointer.prominent.message",
									{},
									(0, g.localize)(9403, null),
								),
							);
							this.kc.add(
								t.$0fb(pe, t.$$gb.CLICK, async () => {
									await this.triggerSearch(), this.Yb.focus();
								}),
							);
						}
					}
					Cc() {
						const ae = [W.$Jkc.ID];
						return J.EditorExtensionsRegistry.getEditorContributions().filter(
							(pe) => ae.indexOf(pe.id) === -1,
						);
					}
					Sb() {
						return { contributions: this.Cc() };
					}
					Ec() {
						this.Yb.onMouseUp((ae) => {
							if (ae.event.detail === 1) {
								const pe = this.Fc.searchEditor.singleClickBehaviour,
									$e = ae.target.position;
								if ($e && pe === "peekDefinition") {
									const ye =
										this.Yb.getModel()?.getLineContent($e.lineNumber) ?? "";
									(ye.match(Q) || ye.match(te)) &&
										(this.Yb.setSelection(u.$iL.fromPositions($e)),
										this.tc.executeCommand("editor.action.peekDefinition"));
								}
							} else if (ae.event.detail === 2) {
								const pe = this.Fc.searchEditor.doubleClickBehaviour,
									$e = ae.target.position;
								if ($e && pe !== "selectWord") {
									const ye =
										this.Yb.getModel()?.getLineContent($e.lineNumber) ?? "";
									ye.match(te)
										? (this.Yb.setSelection(u.$iL.fromPositions($e)),
											this.tc.executeCommand(
												pe === "goToLocation"
													? "editor.action.goToDeclaration"
													: "editor.action.openDeclarationToTheSide",
											))
										: ye.match(Q) &&
											(this.Yb.setSelection(u.$iL.fromPositions($e)),
											this.tc.executeCommand("editor.action.peekDefinition"));
								}
							}
						}),
							this.D(
								this.Yb.onDidChangeModelContent(() => {
									this.oc || this.Nc()?.setDirty(!0);
								}),
							);
					}
					getControl() {
						return this.Yb;
					}
					focus() {
						super.focus();
						const ae = this.jb(this.Nc());
						ae && ae.focused === "editor" ? this.Yb.focus() : this.Xb.focus();
					}
					focusSearchInput() {
						this.Xb.searchInput?.focus();
					}
					focusFilesToIncludeInput() {
						this.hc || this.Pc(!0), this.ac.focus();
					}
					focusFilesToExcludeInput() {
						this.hc || this.Pc(!0), this.bc.focus();
					}
					focusNextInput() {
						this.Xb.searchInputHasFocus()
							? this.hc
								? this.ac.focus()
								: this.Yb.focus()
							: this.ac.inputHasFocus()
								? this.bc.focus()
								: this.bc.inputHasFocus()
									? this.Yb.focus()
									: this.Yb.hasWidgetFocus();
					}
					focusPrevInput() {
						this.Xb.searchInputHasFocus()
							? this.Yb.focus()
							: this.ac.inputHasFocus()
								? this.Xb.searchInput?.focus()
								: this.bc.inputHasFocus()
									? this.ac.focus()
									: this.Yb.hasWidgetFocus();
					}
					setQuery(ae) {
						this.Xb.searchInput?.setValue(ae);
					}
					selectQuery() {
						this.Xb.searchInput?.select();
					}
					toggleWholeWords() {
						this.Xb.searchInput?.setWholeWords(
							!this.Xb.searchInput.getWholeWords(),
						),
							this.triggerSearch({ resetCursor: !1 });
					}
					toggleRegex() {
						this.Xb.searchInput?.setRegex(!this.Xb.searchInput.getRegex()),
							this.triggerSearch({ resetCursor: !1 });
					}
					toggleCaseSensitive() {
						this.Xb.searchInput?.setCaseSensitive(
							!this.Xb.searchInput.getCaseSensitive(),
						),
							this.triggerSearch({ resetCursor: !1 });
					}
					toggleContextLines() {
						this.Xb.toggleContextLines();
					}
					modifyContextLines(ae) {
						this.Xb.modifyContextLines(ae);
					}
					toggleQueryDetails(ae) {
						this.Pc(ae);
					}
					deleteResultBlock() {
						const ae = new Set(),
							pe = this.Yb.getSelections(),
							$e = this.Yb.getModel();
						if (!(pe && $e)) return;
						const ye = $e.getLineCount(),
							ue = 1,
							fe = (be) => {
								for (let Ce = be; Ce >= ue; Ce--) {
									const Le = $e.getLineContent(Ce);
									if ((ae.add(Ce), Le[0] !== void 0 && Le[0] !== " ")) break;
								}
							},
							me = (be) => {
								ae.add(be);
								for (let Ce = be + 1; Ce <= ye; Ce++) {
									const Le = $e.getLineContent(Ce);
									if (Le[0] !== void 0 && Le[0] !== " ") return Ce;
									ae.add(Ce);
								}
							},
							ve = [];
						for (const be of pe) {
							const Ce = be.startLineNumber;
							ve.push(me(Ce)), fe(Ce);
							for (let Le = be.startLineNumber; Le <= be.endLineNumber; Le++)
								ae.add(Le);
						}
						ve.length === 0 && ve.push(1);
						const ge = (be) => be !== void 0;
						$e.pushEditOperations(
							this.Yb.getSelections(),
							[...ae].map((be) => ({
								range: new u.$iL(be, 1, be + 1, 1),
								text: "",
							})),
							() => ve.filter(ge).map((be) => new a.$kL(be, 1, be, 1)),
						);
					}
					cleanState() {
						this.Nc()?.setDirty(!1);
					}
					get Fc() {
						return this.wc.getValue("search");
					}
					Gc(ae) {
						const pe = this.Yb.getModel();
						if (!pe) return;
						const $e = pe.getLineCount() ?? 1,
							ye = pe.getLineLength($e),
							ue = ae ? new r.$hL($e, ye) : new r.$hL(1, 1),
							fe = this.Yb.getSelection()?.getStartPosition() ?? ue,
							me = this.Nc()?.getMatchRanges();
						if (!me) return;
						const ve = (ae ? le : re)(me, fe);
						this.Yb.setSelection(ve),
							this.Yb.revealLineInCenterIfOutsideViewport(ve.startLineNumber),
							this.Yb.focus();
						const ge = pe.getLineContent(ve.startLineNumber),
							be = pe.getValueInRange(ve);
						let Ce = "";
						for (let Le = ve.startLineNumber; Le >= 1; Le--)
							if (pe.getValueInRange(new u.$iL(Le, 1, Le, 2)) !== " ") {
								Ce = pe.getLineContent(Le);
								break;
							}
						(0, w.$oib)(
							(0, g.localize)(9404, null, be, ge, Ce.slice(0, Ce.length - 1)),
						);
					}
					focusNextResult() {
						this.Gc(!1);
					}
					focusPreviousResult() {
						this.Gc(!0);
					}
					focusAllResults() {
						this.Yb.setSelections(
							(this.Nc()?.getMatchRanges() ?? []).map(
								(ae) =>
									new a.$kL(
										ae.startLineNumber,
										ae.startColumn,
										ae.endLineNumber,
										ae.endColumn,
									),
							),
						),
							this.Yb.focus();
					}
					async triggerSearch(ae) {
						const pe = this.Fc.searchEditor.focusResultsOnSearch;
						ae === void 0
							? (ae = { focusResults: pe })
							: ae.focusResults === void 0 && (ae.focusResults = pe);
						const $e = { resetCursor: !0, delay: 0, ...ae };
						this.Xb.searchInput?.inputBox.isInputValid() &&
							(this.gc ||
								(await this.fc.trigger(async () => {
									this.Bc(!1),
										await this.Ic(),
										$e.resetCursor &&
											(this.Yb.setPosition(new r.$hL(1, 1)),
											this.Yb.setScrollPosition({
												scrollTop: 0,
												scrollLeft: 0,
											})),
										$e.focusResults && this.Yb.focus();
								}, $e.delay)));
					}
					Hc() {
						return {
							isCaseSensitive: this.Xb.searchInput?.getCaseSensitive() ?? !1,
							contextLines: this.Xb.getContextLines(),
							filesToExclude: this.bc.getValue(),
							filesToInclude: this.ac.getValue(),
							query: this.Xb.searchInput?.getValue() ?? "",
							isRegexp: this.Xb.searchInput?.getRegex() ?? !1,
							matchWholeWord: this.Xb.searchInput?.getWholeWords() ?? !1,
							useExcludeSettingsAndIgnoreFiles:
								this.bc.useExcludesAndIgnoreFiles(),
							onlyOpenEditors: this.ac.onlySearchInOpenEditors(),
							showIncludesExcludes: this.hc,
							notebookSearchConfig: {
								includeMarkupInput: this.Xb.getNotebookFilters().markupInput,
								includeMarkupPreview:
									this.Xb.getNotebookFilters().markupPreview,
								includeCodeInput: this.Xb.getNotebookFilters().codeInput,
								includeOutput: this.Xb.getNotebookFilters().codeOutput,
							},
						};
					}
					async Ic() {
						this.mc.cancelSearch(!0);
						const ae = this.Nc();
						if (!ae) return;
						this.jc.trigger(() => {
							this.Xb.searchInput?.onSearchSubmit(),
								this.bc.onSearchSubmit(),
								this.ac.onSearchSubmit();
						});
						const pe = this.Hc();
						if (!pe.query) return;
						const $e = {
								pattern: pe.query,
								isRegExp: pe.isRegexp,
								isCaseSensitive: pe.isCaseSensitive,
								isWordMatch: pe.matchWholeWord,
							},
							ye = {
								_reason: "searchEditor",
								extraFileResources: this.m.invokeFunction(R.$P7),
								maxResults: this.Fc.maxResults ?? void 0,
								disregardIgnoreFiles:
									!pe.useExcludeSettingsAndIgnoreFiles || void 0,
								disregardExcludeSettings:
									!pe.useExcludeSettingsAndIgnoreFiles || void 0,
								excludePattern: [{ pattern: pe.filesToExclude }],
								includePattern: pe.filesToInclude,
								onlyOpenEditors: pe.onlyOpenEditors,
								previewOptions: { matchLines: 1, charsPerLine: 1e3 },
								surroundingContext: pe.contextLines,
								isSmartCase: this.Fc.smartCase,
								expandPatterns: !0,
								notebookSearchConfig: {
									includeMarkupInput:
										pe.notebookSearchConfig.includeMarkupInput,
									includeMarkupPreview:
										pe.notebookSearchConfig.includeMarkupPreview,
									includeCodeInput: pe.notebookSearchConfig.includeCodeInput,
									includeOutput: pe.notebookSearchConfig.includeOutput,
								},
							},
							ue = this.qc.getWorkspace().folders;
						let fe;
						try {
							fe = this.m.createInstance(A.$M8).text(
								$e,
								ue.map((Ce) => Ce.uri),
								ye,
							);
						} catch {
							return;
						}
						this.ic.start(500), this.nc++;
						const { configurationModel: me } = await ae.resolveModels();
						me.updateConfig(pe);
						const ve = this.mc.search(fe);
						ae.ongoingSearchOperation = ve.asyncResults.finally(() => {
							this.nc--, this.nc === 0 && this.ic.stop();
						});
						const ge = await ae.ongoingSearchOperation;
						await this.Jc(ge, pe, ae);
					}
					async Jc(ae, pe, $e) {
						const ye = this.Nc();
						if (
							!ye ||
							ye !== $e ||
							JSON.stringify(pe) !== JSON.stringify(this.Hc())
						)
							return;
						ye.ongoingSearchOperation = void 0;
						const ue = this.Fc.sortOrder;
						ue === x.SearchSortOrder.Modified &&
							(await this.Lc(this.mc.searchResult)),
							n.$EOb.get(this.Yb)?.closeWidget(!1);
						const me = (be) => this.rc.getUriLabel(be, { relative: !0 }),
							ve = (0, U.$LOc)(
								this.mc.searchResult,
								pe.filesToInclude,
								pe.filesToExclude,
								pe.contextLines,
								me,
								ue,
								ae?.limitHit,
							),
							{ resultsModel: ge } = await ye.resolveModels();
						if (
							((this.oc = !0),
							this.pc.updateModel(ge, ve.text),
							(this.oc = !1),
							ae && ae.messages)
						)
							for (const be of ae.messages) this.Kc(be);
						this.Mc(),
							ye.setDirty(
								!ye.hasCapability(D.EditorInputCapabilities.Untitled),
							),
							ye.setMatchRanges(ve.matchRanges);
					}
					Kc(ae) {
						let pe;
						this.ec.firstChild
							? (pe = this.ec.firstChild)
							: (pe = t.$fhb(this.ec, t.$(".message"))),
							t.$fhb(
								pe,
								(0, K.$UOc)(
									ae,
									this.m,
									this.vc,
									this.uc,
									this.tc,
									this.kc,
									() => this.triggerSearch(),
								),
							);
					}
					async Lc(ae) {
						const pe = ae
							.matches()
							.filter(($e) => !$e.fileStat)
							.map(($e) => $e.resolveFileStat(this.xb));
						await Promise.all(pe);
					}
					layout(ae) {
						(this.$b = ae), this.Mc();
					}
					getSelected() {
						const ae = this.Yb.getSelection();
						return ae ? (this.Yb.getModel()?.getValueInRange(ae) ?? "") : "";
					}
					Mc() {
						this.$b &&
							(this.Xb.setWidth(this.$b.width - 28),
							this.Yb.layout({
								height: this.$b.height - t.$zgb(this.Zb),
								width: this.$b.width,
							}),
							this.bc.setWidth(this.$b.width - 28),
							this.ac.setWidth(this.$b.width - 28));
					}
					Nc() {
						return this.input;
					}
					setSearchConfig(ae) {
						(this.Oc = ae),
							ae.query !== void 0 && this.Xb.setValue(ae.query),
							ae.isCaseSensitive !== void 0 &&
								this.Xb.searchInput?.setCaseSensitive(ae.isCaseSensitive),
							ae.isRegexp !== void 0 &&
								this.Xb.searchInput?.setRegex(ae.isRegexp),
							ae.matchWholeWord !== void 0 &&
								this.Xb.searchInput?.setWholeWords(ae.matchWholeWord),
							ae.contextLines !== void 0 &&
								this.Xb.setContextLines(ae.contextLines),
							ae.filesToExclude !== void 0 &&
								this.bc.setValue(ae.filesToExclude),
							ae.filesToInclude !== void 0 &&
								this.ac.setValue(ae.filesToInclude),
							ae.onlyOpenEditors !== void 0 &&
								this.ac.setOnlySearchInOpenEditors(ae.onlyOpenEditors),
							ae.useExcludeSettingsAndIgnoreFiles !== void 0 &&
								this.bc.setUseExcludesAndIgnoreFiles(
									ae.useExcludeSettingsAndIgnoreFiles,
								),
							ae.showIncludesExcludes !== void 0 &&
								this.Pc(ae.showIncludesExcludes);
					}
					async setInput(ae, pe, $e, ye) {
						if (
							(await super.setInput(ae, pe, $e, ye), ye.isCancellationRequested)
						)
							return;
						const { configurationModel: ue, resultsModel: fe } =
							await ae.resolveModels();
						if (
							!ye.isCancellationRequested &&
							(this.Yb.setModel(fe),
							(this.gc = !0),
							this.Bc(
								!ae.ongoingSearchOperation &&
									fe.getLineCount() === 1 &&
									fe.getValueLength() === 0 &&
									ue.config.query !== "",
							),
							this.setSearchConfig(ue.config),
							this.D(
								ue.onConfigDidUpdate((me) => {
									me !== this.Oc &&
										((this.gc = !0), this.setSearchConfig(me), (this.gc = !1));
								}),
							),
							this.Tc($e),
							pe?.preserveFocus || this.focus(),
							(this.gc = !1),
							ae.ongoingSearchOperation)
						) {
							const me = this.Hc();
							ae.ongoingSearchOperation.then((ve) => {
								this.Jc(ve, me, ae);
							});
						}
					}
					Pc(ae) {
						const pe = "expanded";
						(ae ?? !this.cc.classList.contains(pe))
							? (this.dc.setAttribute("aria-expanded", "true"),
								this.cc.classList.add(pe))
							: (this.dc.setAttribute("aria-expanded", "false"),
								this.cc.classList.remove(pe)),
							(this.hc = this.cc.classList.contains(pe)),
							this.Mc();
					}
					pb(ae) {
						if (ae.typeId === B.$DOc) return ae.modelUri;
					}
					mb(ae) {
						const $e = this.getControl().saveViewState();
						if ($e && ae.toString() === this.Nc()?.modelUri.toString())
							return {
								...$e,
								focused: this.Yb.hasWidgetFocus() ? "editor" : "input",
							};
					}
					nb(ae) {
						return ae.typeId === B.$DOc;
					}
					Tc(ae) {
						const pe = this.jb(this.Nc(), ae);
						pe && this.Yb.restoreViewState(pe);
					}
					getAriaLabel() {
						return this.Nc()?.getName() ?? (0, g.localize)(9405, null);
					}
				};
				(e.$VOc = Z),
					(e.$VOc =
						Z =
						_ =
							Ne(
								[
									j(1, S.$km),
									j(2, T.$iP),
									j(3, v.$lq),
									j(4, h.$QO),
									j(5, k.$Vi),
									j(6, y.$3N),
									j(7, s.$Li),
									j(8, b.$Wxb),
									j(9, p.$ek),
									j(10, V.$7rb),
									j(11, G.$4N),
									j(12, $.$bO),
									j(13, c.$XO),
									j(14, z.$EY),
									j(15, F.$IY),
									j(16, o.$gj),
									j(17, q.$ll),
									j(18, Y.$ik),
									j(19, ee.$Uyb),
								],
								Z,
							));
				const se = (0, I.$wP)(
					"searchEditor.textInputBorder",
					I.$VR,
					(0, g.localize)(9406, null),
				);
				function re(oe, ae) {
					for (const pe of oe)
						if (r.$hL.isBefore(ae, pe.getStartPosition())) return pe;
					return oe[0];
				}
				function le(oe, ae) {
					for (let pe = oe.length - 1; pe >= 0; pe--) {
						const $e = oe[pe];
						if (r.$hL.isBefore($e.getStartPosition(), ae)) return $e;
					}
					return oe[oe.length - 1];
				}
			},
		),
		