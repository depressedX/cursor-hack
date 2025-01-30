import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/browser/ui/inputbox/inputBox.js';
import '../../../../base/browser/ui/tree/tree.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/network.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../../editor/common/core/selection.js';
import '../../../../editor/contrib/find/browser/findController.js';
import '../../../../editor/contrib/multicursor/browser/multicursor.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../browser/actions/workspaceActions.js';
import '../../../browser/dnd.js';
import '../../../browser/labels.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/memento.js';
import '../../../common/views.js';
import '../../notebook/browser/notebookEditor.js';
import './patternInputWidget.js';
import './searchActionsBase.js';
import './searchIcons.js';
import './searchMessage.js';
import './searchResultsView.js';
import './searchWidget.js';
import '../common/constants.js';
import './replace.js';
import '../common/search.js';
import '../common/searchHistoryService.js';
import './searchModel.js';
import '../../searchEditor/browser/searchEditorActions.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/preferences/common/preferences.js';
import '../../../services/search/common/queryBuilder.js';
import '../../../services/search/common/search.js';
import '../../../services/textfile/common/textfiles.js';
import '../../notebook/common/notebookService.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../platform/hover/browser/hover.js';
import '../../composer/browser/composer.js';
import '../../../services/selectedContext/browser/selectedContextData.js';
import '../../../services/ai/browser/utils.js';
import '../../aichat/browser/codeSelections.js';
import '../../../services/ai/browser/aiService.js';
import '../../../services/ai/common/dataScrubbingService.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/services/resolverService.js';
import '../../composer/browser/constants.js';
import '../../../../css!vs/workbench/contrib/search/browser/media/searchview.js';
define(
			de[1068],
			he([
				1, 0, 7, 114, 127, 292, 264, 15, 29, 6, 103, 27, 3, 12, 37, 9, 23, 56,
				65, 281, 104, 618, 1788, 4, 91, 11, 31, 10, 8, 49, 57, 22, 5, 128, 39,
				93, 40, 41, 84, 21, 32, 106, 35, 26, 25, 853, 362, 233, 146, 282, 60,
				1360, 1748, 483, 561, 1863, 4168, 1367, 377, 804, 568, 1258, 405, 1971,
				18, 131, 361, 186, 85, 161, 34, 184, 95, 72, 219, 298, 191, 354, 118,
				356, 17, 42, 169, 2488,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*keyboardEvent*/,
				w /*aria*/,
				E /*inputBox*/,
				C /*tree*/,
				d /*async*/,
				m /*errors*/,
				r /*event*/,
				u /*iterator*/,
				a /*keyCodes*/,
				h /*lifecycle*/,
				c /*platform*/,
				n /*strings*/,
				g /*uri*/,
				p /*network*/,
				o /*editorBrowser*/,
				f /*codeEditorService*/,
				b /*embeddedCodeEditorWidget*/,
				s /*selection*/,
				l /*findController*/,
				y /*multicursor*/,
				$ /*nls*/,
				v /*accessibility*/,
				S /*actions*/,
				I /*commands*/,
				T /*configuration*/,
				P /*contextkey*/,
				k /*contextView*/,
				L /*dialogs*/,
				D /*files*/,
				M /*instantiation*/,
				N /*serviceCollection*/,
				A /*keybinding*/,
				R /*listService*/,
				O /*notification*/,
				B /*opener*/,
				U /*progress*/,
				z /*storage*/,
				F /*telemetry*/,
				x /*defaultStyles*/,
				H /*themeService*/,
				q /*themables*/,
				V /*workspace*/,
				G /*workspaceActions*/,
				K /*dnd*/,
				J /*labels*/,
				W /*viewPane*/,
				X /*memento*/,
				Y /*views*/,
				ie /*notebookEditor*/,
				ne /*patternInputWidget*/,
				ee /*searchActionsBase*/,
				_ /*searchIcons*/,
				te /*searchMessage*/,
				Q /*searchResultsView*/,
				Z /*searchWidget*/,
				se /*constants*/,
				re /*replace*/,
				le /*search*/,
				oe /*searchHistoryService*/,
				ae /*searchModel*/,
				pe /*searchEditorActions*/,
				$e /*editorService*/,
				ye /*preferences*/,
				ue /*queryBuilder*/,
				fe /*search*/,
				me /*textfiles*/,
				ve /*notebookService*/,
				ge /*log*/,
				be /*accessibilitySignalService*/,
				Ce /*hoverDelegateFactory*/,
				Le /*hover*/,
				Fe /*composer*/,
				Oe /*selectedContextData*/,
				xe /*utils*/,
				He /*codeSelections*/,
				Ke /*aiService*/,
				Je /*dataScrubbingService*/,
				Te /*range*/,
				Ee /*resolverService*/,
				Ie /*constants*/,
) {
				"use strict";
				var Be;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dPc = e.SearchViewPosition = void 0),
					(e.$ePc = De),
					(e.$fPc = Re),
					(t = mt(t)),
					(w = mt(w)),
					(m = mt(m)),
					(c = mt(c)),
					(n = mt(n)),
					(p = mt(p)),
					($ = mt($)),
					(se = mt(se));
				const Se = t.$;
				var ke;
				(function (je) {
					(je[(je.SideBar = 0)] = "SideBar"), (je[(je.Panel = 1)] = "Panel");
				})(ke || (e.SearchViewPosition = ke = {}));
				const Ue = $.localize(9311, null),
					qe = 75;
				let Ae = class extends W.$TMb {
					static {
						Be = this;
					}
					static {
						this.c = "actions-right";
					}
					constructor(
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
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
						Kt,
						di,
						Ye,
						ze,
						Xe,
						It,
						Lt,
						xt,
						Vt,
						Bt,
						Gt,
						Mt,
						Ut,
						ei,
						mi,
						ii,
						Dt,
						Jt,
					) {
						super(Ve, It, ze, Rt, ti, ht, gt, xt, di, Vt, Bt),
							(this.Wc = Ze),
							(this.Xc = et),
							(this.Yc = rt),
							(this.Zc = ft),
							(this.$c = bt),
							(this.ad = nt),
							(this.bd = lt),
							(this.cd = ct),
							(this.dd = Nt),
							(this.ed = jt),
							(this.fd = kt),
							(this.gd = hi),
							(this.hd = Kt),
							(this.jd = Ye),
							(this.kd = Xe),
							(this.ld = Lt),
							(this.md = Gt),
							(this.nd = Mt),
							(this.od = Ut),
							(this.pd = ei),
							(this.qd = mi),
							(this.rd = ii),
							(this.sd = Dt),
							(this.td = Jt),
							(this.g = !1),
							(this.mc = "input"),
							(this.wc = new h.$Zc()),
							(this.Jc = Promise.resolve()),
							(this.Nc = !1),
							(this.Rc = 0),
							(this.Uc = void 0),
							(this.Vc = void 0),
							(this.h = t.$(".search-view")),
							(this.t = se.$ooc.SearchViewVisibleKey.bindTo(this.Bb)),
							(this.cc = se.$ooc.FirstMatchFocusKey.bindTo(this.Bb)),
							(this.dc = se.$ooc.FileMatchOrMatchFocusKey.bindTo(this.Bb)),
							(this.ec = se.$ooc.FileMatchOrFolderMatchFocusKey.bindTo(
								this.Bb,
							)),
							(this.fc =
								se.$ooc.FileMatchOrFolderMatchWithResourceFocusKey.bindTo(
									this.Bb,
								)),
							(this.gc = se.$ooc.FileFocusKey.bindTo(this.Bb)),
							(this.hc = se.$ooc.FolderFocusKey.bindTo(this.Bb)),
							(this.ic = se.$ooc.ResourceFolderFocusKey.bindTo(this.Bb)),
							(this.lc = se.$ooc.HasSearchResults.bindTo(this.Bb)),
							(this.jc = se.$ooc.MatchFocusKey.bindTo(this.Bb)),
							(this.nc = le.$R7.bindTo(this.Bb)),
							(this.oc = se.$ooc.ViewHasSearchPatternKey.bindTo(this.Bb)),
							(this.pc = se.$ooc.ViewHasReplacePatternKey.bindTo(this.Bb)),
							(this.qc = se.$ooc.ViewHasFilePatternKey.bindTo(this.Bb)),
							(this.rc = se.$ooc.ViewHasSomeCollapsibleKey.bindTo(this.Bb)),
							(this.Pc = se.$ooc.InTreeViewKey.bindTo(this.Bb)),
							(this.Qc = se.$ooc.AIResultsVisibleKey.bindTo(this.Bb)),
							this.D(
								this.Bb.onDidChangeContext((si) => {
									const Zt = se.$ooc.hasAIResultProvider.keys();
									si.affectsSome(new Set(Zt)) && this.xd();
								}),
							),
							(this.Bb = this.D(this.Bb.createScoped(this.h))),
							se.$ooc.SearchViewFocusedKey.bindTo(this.Bb).set(!0),
							(this.L = se.$ooc.InputBoxFocusedKey.bindTo(this.Bb)),
							(this.ab = se.$ooc.PatternIncludesFocusedKey.bindTo(this.Bb)),
							(this.sb = se.$ooc.PatternExcludesFocusedKey.bindTo(this.Bb)),
							(this.kc = se.$ooc.IsEditableItemKey.bindTo(this.Bb)),
							(this.Db = this.D(
								this.Db.createChild(new N.$Ki([P.$6j, this.Bb])),
							)),
							this.D(
								this.Ab.onDidChangeConfiguration((si) => {
									si.affectsConfiguration("search.sortOrder")
										? (this.Ce.sortOrder === fe.SearchSortOrder.Modified &&
												this.He(),
											this.refreshTree())
										: si.affectsConfiguration("search.aiResults") && this.xd();
								}),
							),
							(this.n = this.ed.searchModel),
							(this.j = this.Db.createInstance(ue.$M8)),
							(this.s = new X.$eEb(this.id, Lt)),
							(this.uc = this.s.getMemento(
								z.StorageScope.WORKSPACE,
								z.StorageTarget.MACHINE,
							)),
							(this.uc["query.queryDetailsExpanded"] =
								this.uc["query.queryDetailsExpanded"] ?? !0),
							this.D(this.Wc.onDidFilesChange((si) => this.Be(si))),
							this.D(
								this.gd.untitled.onWillDispose((si) => this.Ae(si.resource)),
							),
							this.D(this.dd.onDidChangeWorkbenchState(() => this.yd())),
							this.D(this.jd.onDidClearHistory(() => this.De())),
							this.D(this.Ab.onDidChangeConfiguration((si) => this.Fd(si))),
							(this.Gc = this.D(new d.$Jh(250))),
							(this.Kc = this.D(new d.$Jh(2e3))),
							(this.Lc = this.D(new d.$Jh(100))),
							(this.Mc = this.D(new d.$Jh(0))),
							(this.Oc = this.Db.createInstance(Q.$aPc, this)),
							(this.ud =
								this.uc["view.treeLayout"] ??
								this.Ce.defaultViewMode === fe.ViewMode.Tree),
							(this.Sc = this.D(new d.$Yh(this.ie.bind(this), 80))),
							this.D(
								this.ld.onWillSaveState(() => {
									this.Ee();
								}),
							),
							this.D(
								this.ld.onDidChangeValue(
									z.StorageScope.WORKSPACE,
									oe.$cPc.SEARCH_HISTORY_KEY,
									this.D(new h.$Zc()),
								)(() => {
									const si = this.jd.load();
									si.include && this.Dc.prependHistory(si.include),
										si.exclude && this.Cc.prependHistory(si.exclude),
										si.search && this.yc.prependSearchHistory(si.search),
										si.replace && this.yc.prependReplaceHistory(si.replace);
								}),
							),
							(this.Hc = this.hasSearchResults());
					}
					get ud() {
						return this.Pc.get() ?? !1;
					}
					set ud(Ve) {
						this.Pc.set(Ve);
					}
					get vd() {
						return this.Qc.get() ?? !1;
					}
					set vd(Ve) {
						this.Qc.set(Ve);
					}
					setTreeView(Ve) {
						Ve !== this.ud &&
							((this.ud = Ve),
							this.Bd(this.Fb.getFileIconTheme()),
							this.refreshTree());
					}
					async setAIResultsVisible(Ve) {
						Ve !== this.vd &&
							(Ve
								? ((this.Uc = this.de()),
									(this.Vc = this.yc.isReplaceShown()),
									this.yc.toggleReplace(!1),
									(this.Bc.style.display = "none"),
									(this.yc.replaceButtonVisibility = !1),
									this.toggleQueryDetails(void 0, !1))
								: ((this.Bc.style.display = ""),
									(this.yc.replaceButtonVisibility = !0),
									this.Vc && this.yc.toggleReplace(this.Vc),
									this.Uc && this.toggleQueryDetails(void 0, this.Uc)),
							(this.vd = Ve),
							!this.n.searchResult.isEmpty() &&
								(this.model.cancelAISearch(),
								Ve && (await this.model.addAIResults()),
								this.Hd(),
								this.je(
									() => {},
									void 0,
									void 0,
									this.n.searchResult.getCachedSearchComplete(Ve),
								)));
					}
					get wd() {
						return this.nc.get() ?? le.SearchUIState.Idle;
					}
					set wd(Ve) {
						this.nc.set(Ve);
					}
					getContainer() {
						return this.h;
					}
					get searchResult() {
						return this.n && this.n.searchResult;
					}
					get model() {
						return this.n;
					}
					xd() {
						const Ve = this.Ed();
						Ve &&
							this.yc.searchInput &&
							(this.yc.searchInput.sparkleVisible = Ve);
					}
					yd() {
						this.dd.getWorkbenchState() !== V.WorkbenchState.EMPTY &&
							this.Ic &&
							t.hide(this.Ic);
					}
					zd() {
						(this.Nc = !0),
							this.yc.setValue(
								this.n.searchResult.query?.contentPattern.pattern ?? "",
							),
							this.yc.setReplaceAllActionState(!1),
							this.yc.toggleReplace(!0),
							this.Dc.setOnlySearchInOpenEditors(
								this.n.searchResult.query?.onlyOpenEditors || !1,
							),
							this.Cc.setUseExcludesAndIgnoreFiles(
								!this.n.searchResult.query
									?.userDisabledExcludesAndIgnoreFiles || !0,
							),
							this.searchIncludePattern.setValue(""),
							this.searchExcludePattern.setValue(""),
							(this.Nc = !1);
					}
					async replaceSearchModel(Ve, Ze) {
						let et;
						this.Zc.withProgress(
							{ location: this.Yb(), delay: 0 },
							(bt) => new Promise((nt) => (et = nt)),
						);
						const rt = setTimeout(() => {
							this.wd = le.SearchUIState.SlowSearch;
						}, 2e3);
						if (
							(this.Sc.schedule(),
							(Ve.location = ae.SearchModelLocation.PANEL),
							(Ve.replaceActive = this.n.isReplaceActive()),
							(Ve.replaceString = this.yc.getReplaceValue()),
							this.Tc?.dispose(),
							(this.Tc = this.D(Ve.onSearchResultChanged((bt) => this.Hd(bt)))),
							(this.ed.searchModel = Ve),
							(this.n = Ve),
							this.Hd(),
							this.zd(),
							Ze.then(
								(bt) => {
									clearTimeout(rt), this.je(et, void 0, void 0, bt);
								},
								(bt) => {
									clearTimeout(rt), this.ke(bt, et, void 0, void 0);
								},
							),
							this.Ce.collapseResults !== "alwaysCollapse" &&
								this.n.searchResult.matches(this.vd).length === 1)
						) {
							const bt = this.n.searchResult.matches(this.vd)[0];
							bt.count() < 50 && this.sc.expand(bt);
						}
					}
					W(Ve) {
						super.W(Ve),
							(this.h = t.$fhb(Ve, t.$(".search-view"))),
							(this.xc = t.$fhb(this.h, Se(".search-widgets-container"))),
							this.Dd(this.xc),
							this.xd();
						const Ze = this.jd.load(),
							et = this.uc["query.filePatterns"] || "",
							rt = this.uc["query.folderExclusions"] || "",
							ft = Ze.exclude || [],
							bt = this.uc["query.folderIncludes"] || "",
							nt = Ze.include || [],
							lt = this.uc["query.onlyOpenEditors"] || !1,
							ct = this.uc["query.queryDetailsExpanded"] || "",
							gt =
								typeof this.uc["query.useExcludesAndIgnoreFiles"] == "boolean"
									? this.uc["query.useExcludesAndIgnoreFiles"]
									: !0;
						this.Ac = t.$fhb(this.xc, Se(".query-details"));
						const ht = $.localize(9312, null);
						(this.Bc = t.$fhb(
							this.Ac,
							Se(".more" + q.ThemeIcon.asCSSSelector(_.$4Nc), {
								tabindex: 0,
								role: "button",
								"aria-label": ht,
							}),
						)),
							this.D(
								this.Hb.setupManagedHover((0, Ce.$cib)("element"), this.Bc, ht),
							),
							this.D(
								t.$0fb(this.Bc, t.$$gb.CLICK, (Kt) => {
									t.$ahb.stop(Kt),
										this.toggleQueryDetails(!this.kd.isScreenReaderOptimized());
								}),
							),
							this.D(
								t.$0fb(this.Bc, t.$$gb.KEY_UP, (Kt) => {
									const di = new i.$7fb(Kt);
									(di.equals(a.KeyCode.Enter) || di.equals(a.KeyCode.Space)) &&
										(t.$ahb.stop(Kt), this.toggleQueryDetails(!1));
								}),
							),
							this.D(
								t.$0fb(this.Bc, t.$$gb.KEY_DOWN, (Kt) => {
									new i.$7fb(Kt).equals(a.KeyMod.Shift | a.KeyCode.Tab) &&
										(this.yc.isReplaceActive()
											? this.yc.focusReplaceAllAction()
											: this.yc.isReplaceShown()
												? this.yc.replaceInput?.focusOnPreserve()
												: this.yc.focusRegexAction(),
										t.$ahb.stop(Kt));
								}),
							);
						const Rt = t.$fhb(this.Ac, Se(".file-types.includes")),
							Nt = $.localize(9313, null);
						t.$fhb(Rt, Se("h4", void 0, Nt)),
							(this.Dc = this.D(
								this.Db.createInstance(ne.$mOc, Rt, this.cd, {
									ariaLabel: Nt,
									placeholder: $.localize(9314, null),
									showPlaceholderOnFocus: !0,
									history: nt,
									inputBoxStyles: x.$wyb,
								}),
							)),
							this.Dc.setValue(bt),
							this.Dc.setOnlySearchInOpenEditors(lt),
							this.D(this.Dc.onCancel(() => this.cancelSearch(!1))),
							this.D(
								this.Dc.onChangeSearchInEditorsBox(() =>
									this.triggerQueryChange(),
								),
							),
							this.Gd(this.Dc.inputFocusTracker, this.ab);
						const jt = t.$fhb(this.Ac, Se(".file-types.excludes")),
							ti = $.localize(9315, null);
						t.$fhb(jt, Se("h4", void 0, ti)),
							(this.Cc = this.D(
								this.Db.createInstance(ne.$nOc, jt, this.cd, {
									ariaLabel: ti,
									placeholder: $.localize(9316, null),
									showPlaceholderOnFocus: !0,
									history: ft,
									inputBoxStyles: x.$wyb,
								}),
							)),
							this.Cc.setValue(rt),
							this.Cc.setUseExcludesAndIgnoreFiles(gt),
							this.D(this.Cc.onCancel(() => this.cancelSearch(!1))),
							this.D(
								this.Cc.onChangeIgnoreBox(() => this.triggerQueryChange()),
							),
							this.Gd(this.Cc.inputFocusTracker, this.sb);
						const kt = () =>
							this.qc.set(
								this.Dc.getValue().length > 0 || this.Cc.getValue().length > 0,
							);
						kt();
						const hi = (Kt) => {
							this.triggerQueryChange({
								triggeredOnType: Kt,
								delay: this.Ce.searchOnTypeDebouncePeriod,
							}),
								Kt && kt();
						};
						this.D(this.Dc.onSubmit(hi)),
							this.D(this.Cc.onSubmit(hi)),
							(this.vc = t.$fhb(
								this.h,
								Se(".messages.text-search-provider-messages"),
							)),
							this.dd.getWorkbenchState() === V.WorkbenchState.EMPTY &&
								this.ve(),
							this.Rd(this.h),
							(et !== "" || rt !== "" || bt !== "" || ct !== "" || !gt) &&
								this.toggleQueryDetails(!0, !0, !0),
							(this.Tc = this.D(
								this.n.onSearchResultChanged((Kt) => this.Hd(Kt)),
							)),
							this.D(this.onDidChangeBodyVisibility((Kt) => this.Cd(Kt))),
							this.Bd(this.Fb.getFileIconTheme()),
							this.D(this.Fb.onDidFileIconThemeChange(this.Bd, this));
					}
					Bd(Ve) {
						this.Ec.classList.toggle(
							"hide-arrows",
							this.ud && Ve.hidesExplorerArrows,
						);
					}
					Cd(Ve) {
						this.t.set(Ve),
							Ve ? this.Hc && (this.Id(), (this.Hc = !1)) : (this.mc = "input"),
							this.n?.searchResult.toggleHighlights(Ve);
					}
					get searchAndReplaceWidget() {
						return this.yc;
					}
					get searchIncludePattern() {
						return this.Dc;
					}
					get searchExcludePattern() {
						return this.Cc;
					}
					Dd(Ve) {
						const Ze = this.uc["query.contentPattern"] || "",
							et = this.uc["query.replaceText"] || "",
							rt = this.uc["query.regex"] === !0,
							ft = this.uc["query.wholeWords"] === !0,
							bt = this.uc["query.caseSensitive"] === !0,
							nt = this.jd.load(),
							lt = nt.search || this.uc["query.searchHistory"] || [],
							ct = nt.replace || this.uc["query.replaceHistory"] || [],
							gt =
								typeof this.uc["view.showReplace"] == "boolean"
									? this.uc["view.showReplace"]
									: !0,
							ht = this.uc["query.preserveCase"] === !0,
							Rt = this.uc["query.isInNotebookMarkdownInput"] ?? !0,
							Nt = this.uc["query.isInNotebookMarkdownPreview"] ?? !0,
							jt = this.uc["query.isInNotebookCellInput"] ?? !0,
							ti = this.uc["query.isInNotebookCellOutput"] ?? !0;
						if (
							((this.yc = this.D(
								this.Db.createInstance(Z.$FOc, Ve, {
									value: Ze,
									replaceValue: et,
									isRegex: rt,
									isCaseSensitive: bt,
									isWholeWords: ft,
									searchHistory: lt,
									replaceHistory: ct,
									preserveCase: ht,
									inputBoxStyles: x.$wyb,
									toggleStyles: x.$pyb,
									notebookOptions: {
										isInNotebookMarkdownInput: Rt,
										isInNotebookMarkdownPreview: Nt,
										isInNotebookCellInput: jt,
										isInNotebookCellOutput: ti,
									},
									initialAIButtonVisibility: this.Ed(),
								}),
							)),
							!this.yc.searchInput || !this.yc.replaceInput)
						) {
							this.nd.warn(
								`Cannot fully create search widget. Search or replace input undefined. SearchInput: ${this.yc.searchInput}, ReplaceInput: ${this.yc.replaceInput}`,
							);
							return;
						}
						gt && this.yc.toggleReplace(!0),
							this.D(
								this.yc.onSearchSubmit((Kt) => this.triggerQueryChange(Kt)),
							),
							this.D(
								this.yc.onSearchCancel(({ focus: Kt }) =>
									this.cancelSearch(Kt),
								),
							),
							this.D(
								this.yc.searchInput.onDidOptionChange(() => {
									this.yc.searchInput &&
									this.yc.searchInput.isAIEnabled !== this.vd
										? this.setAIResultsVisible(this.yc.searchInput.isAIEnabled)
										: this.triggerQueryChange();
								}),
							),
							this.D(
								this.yc
									.getNotebookFilters()
									.onDidChange(() => this.triggerQueryChange()),
							);
						const kt = () =>
							this.oc.set(
								this.yc.searchInput
									? this.yc.searchInput.getValue().length > 0
									: !1,
							);
						kt(), this.D(this.yc.searchInput.onDidChange(() => kt()));
						const hi = () => this.pc.set(this.yc.getReplaceValue().length > 0);
						hi(),
							this.D(this.yc.replaceInput.inputBox.onDidChange(() => hi())),
							this.D(this.yc.onDidHeightChange(() => this.Zd())),
							this.D(this.yc.onReplaceToggled(() => this.Zd())),
							this.D(
								this.yc.onReplaceStateChange((Kt) => {
									(this.n.replaceActive = Kt), this.refreshTree();
								}),
							),
							this.D(
								this.yc.onPreserveCaseChange((Kt) => {
									(this.n.preserveCase = Kt), this.refreshTree();
								}),
							),
							this.D(
								this.yc.onReplaceValueChanged(() => {
									(this.n.replaceString = this.yc.getReplaceValue()),
										this.Gc.trigger(() => this.refreshTree());
								}),
							),
							this.D(
								this.yc.onBlur(() => {
									this.Bc.focus();
								}),
							),
							this.D(this.yc.onReplaceAll(() => this.Nd())),
							this.Gd(this.yc.searchInputFocusTracker),
							this.Gd(this.yc.replaceInputFocusTracker);
					}
					Ed() {
						const Ve = se.$ooc.hasAIResultProvider.getValue(this.Bb);
						return !!(this.Ab.getValue("search.aiResults") && Ve);
					}
					Fd(Ve) {
						Ve &&
							(Ve.affectsConfiguration("search.decorations.colors") ||
								Ve.affectsConfiguration("search.decorations.badges")) &&
							this.refreshTree();
					}
					Gd(Ve, Ze) {
						Ve &&
							(this.D(
								Ve.onDidFocus(() => {
									(this.mc = "input"), this.L.set(!0), Ze?.set(!0);
								}),
							),
							this.D(
								Ve.onDidBlur(() => {
									this.L.set(
										this.yc.searchInputHasFocus() ||
											this.yc.replaceInputHasFocus() ||
											this.Dc.inputHasFocus() ||
											this.Cc.inputHasFocus(),
									),
										Ze?.set(!1);
								}),
							));
					}
					Hd(Ve) {
						if (this.isVisible()) return this.Id(Ve);
						this.Hc = !0;
					}
					Id(Ve) {
						return (
							this.yc.setReplaceAllActionState(
								!this.n.searchResult.isEmpty(this.vd),
							),
							this.se(
								this.n.searchResult.query.userDisabledExcludesAndIgnoreFiles,
								this.n.searchResult.query?.onlyOpenEditors,
								Ve?.clearingAll,
							),
							this.refreshTree(Ve)
						);
					}
					refreshTree(Ve) {
						const Ze = this.Ce.collapseResults;
						!Ve || Ve.added || Ve.removed
							? this.Ce.sortOrder === fe.SearchSortOrder.Modified
								? this.Fe().then(() => this.sc.setChildren(null, this.Jd(Ze)))
								: this.sc.setChildren(null, this.Jd(Ze))
							: this.Ce.sortOrder === fe.SearchSortOrder.CountAscending ||
									this.Ce.sortOrder === fe.SearchSortOrder.CountDescending
								? this.sc.setChildren(null, this.Jd(Ze))
								: Ve.elements.forEach((et) => {
										this.sc.setChildren(et, this.Md(et, Ze)),
											this.sc.rerender(et);
									});
					}
					Jd(Ve) {
						const Ze = this.searchResult
							.folderMatches(this.vd)
							.filter((et) => !et.isEmpty())
							.sort(ae.$NNc);
						return Ze.length === 1
							? this.Kd(Ze[0], Ve, !0)
							: u.Iterable.map(Ze, (et) => {
									const rt = this.Kd(et, Ve, !0);
									return { element: et, children: rt, incompressible: !0 };
								});
					}
					Kd(Ve, Ze, et) {
						const rt = this.Ce.sortOrder,
							bt = (
								this.ud ? Ve.matches() : Ve.allDownstreamFileMatches()
							).sort((nt, lt) => (0, ae.$NNc)(nt, lt, rt));
						return u.Iterable.map(bt, (nt) => {
							let lt;
							nt instanceof ae.$INc
								? (lt = this.Ld(nt))
								: (lt = this.Kd(nt, Ze, !1));
							const ct =
								Ze === "alwaysCollapse" ||
								(nt.count() > 10 && Ze !== "alwaysExpand")
									? C.ObjectTreeElementCollapseState.PreserveOrCollapsed
									: C.ObjectTreeElementCollapseState.PreserveOrExpanded;
							return {
								element: nt,
								children: lt,
								collapsed: ct,
								incompressible: nt instanceof ae.$INc ? !0 : et,
							};
						});
					}
					Ld(Ve) {
						let Ze = Ve.matches().sort(ae.$NNc);
						return (
							this.vd || (Ze = Ze.filter((et) => !et.aiContributed)),
							u.Iterable.map(Ze, (et) => ({ element: et, incompressible: !0 }))
						);
					}
					Md(Ve, Ze) {
						return Ve instanceof ae.$QNc
							? this.Jd(Ze)
							: Ve instanceof ae.$JNc
								? this.Kd(Ve, Ze, !1)
								: this.Ld(Ve);
					}
					Nd() {
						if (this.n.searchResult.count() === 0) return;
						const Ve = this.n.searchResult.count(),
							Ze = this.n.searchResult.fileCount(),
							et = this.yc.getReplaceValue() || "",
							rt = this.Od(Ve, Ze, et);
						let ft, bt;
						this.Zc.withProgress(
							{ location: this.Yb(), delay: 100, total: Ve },
							(lt) => ((bt = lt), new Promise((ct) => (ft = ct))),
						);
						const nt = {
							title: $.localize(9317, null),
							message: this.Pd(Ve, Ze, et),
							primaryButton: $.localize(9318, null),
						};
						this.ad.confirm(nt).then((lt) => {
							lt.confirmed
								? (this.yc.setReplaceAllActionState(!1),
									this.n.searchResult.replaceAll(bt).then(
										() => {
											ft();
											const ct = this.Qd();
											t.$fhb(ct, rt), this.Zd();
										},
										(ct) => {
											ft(), m.$8(ct), this.$c.error(ct);
										},
									))
								: ft();
						});
					}
					Od(Ve, Ze, et) {
						return Ve === 1
							? Ze === 1
								? et
									? $.localize(9319, null, Ve, Ze, et)
									: $.localize(9320, null, Ve, Ze)
								: et
									? $.localize(9321, null, Ve, Ze, et)
									: $.localize(9322, null, Ve, Ze)
							: Ze === 1
								? et
									? $.localize(9323, null, Ve, Ze, et)
									: $.localize(9324, null, Ve, Ze)
								: et
									? $.localize(9325, null, Ve, Ze, et)
									: $.localize(9326, null, Ve, Ze);
					}
					Pd(Ve, Ze, et) {
						return Ve === 1
							? Ze === 1
								? et
									? $.localize(9327, null, Ve, Ze, et)
									: $.localize(9328, null, Ve, Ze)
								: et
									? $.localize(9329, null, Ve, Ze, et)
									: $.localize(9330, null, Ve, Ze)
							: Ze === 1
								? et
									? $.localize(9331, null, Ve, Ze, et)
									: $.localize(9332, null, Ve, Ze)
								: et
									? $.localize(9333, null, Ve, Ze, et)
									: $.localize(9334, null, Ve, Ze);
					}
					Qd() {
						this.Ic = void 0;
						const Ve = this.vc.style.display === "none";
						t.$9fb(this.vc), t.show(this.vc), this.wc.clear();
						const Ze = t.$fhb(this.vc, Se(".message"));
						return Ve && this.Zd(), Ze;
					}
					Rd(Ve) {
						this.Ec = t.$fhb(
							Ve,
							Se(".results.show-file-icons.file-icon-themable-tree"),
						);
						const Ze = this.Db.createInstance(Q.$9Oc),
							et = {
								getId(ft) {
									return ft.id();
								},
							};
						(this.tc = this.D(
							this.Db.createInstance(J.$uPb, {
								onDidChangeVisibility: this.onDidChangeBodyVisibility,
							}),
						)),
							(this.sc = this.D(
								this.Db.createInstance(
									R.$DMb,
									"SearchView",
									this.Ec,
									Ze,
									[
										this.D(this.Db.createInstance(Q.$0Oc, this, this.tc)),
										this.D(this.Db.createInstance(Q.$$Oc, this, this.tc)),
										this.D(this.Db.createInstance(Q.$_Oc, this)),
									],
									{
										identityProvider: et,
										accessibilityProvider: this.Oc,
										dnd: this.Db.createInstance(K.$VSb, (ft) =>
											ft instanceof ae.$INc
												? ft.resource
												: ft instanceof ae.$FNc
													? (0, B.$8rb)(ft.parent().resource, ft.range())
													: null,
										),
										multipleSelectionSupport: !0,
										selectionNavigation: !0,
										overrideStyles: this.Zb().listOverrideStyles,
										paddingBottom: Q.$9Oc.ITEM_HEIGHT,
									},
								),
							)),
							this.D(this.sc.onContextMenu((ft) => this.Sd(ft)));
						const rt = () => this.Lc.trigger(() => this.rc.set(this.Td()));
						rt(),
							this.D(this.sc.onDidChangeCollapseState(() => rt())),
							this.D(this.sc.onDidChangeModel(() => rt())),
							this.D(
								r.Event.debounce(
									this.sc.onDidOpen,
									(ft, bt) => bt,
									qe,
									!0,
								)((ft) => {
									if (ft.element instanceof ae.$FNc) {
										const bt = ft.element;
										this.Fc?.setSelectedMatch(null),
											(this.Fc = bt.parent()),
											this.Fc.setSelectedMatch(bt),
											this.ye(
												bt,
												ft.editorOptions.preserveFocus,
												ft.sideBySide,
												ft.editorOptions.pinned,
											);
									}
								}),
							),
							this.D(
								r.Event.debounce(
									this.sc.onDidChangeFocus,
									(ft, bt) => bt,
									qe,
									!0,
								)(() => {
									const ft = this.sc.getSelection(),
										bt = this.sc.getFocus()[0];
									ft.length > 1 && bt instanceof ae.$FNc && this.ye(bt, !0);
								}),
							),
							this.D(
								r.Event.any(
									this.sc.onDidFocus,
									this.sc.onDidChangeFocus,
								)(() => {
									const ft = this.sc.getFocus()[0];
									this.sc.isDOMFocused() &&
										(this.cc.set(this.sc.navigate().first() === ft),
										this.dc.set(!!ft),
										this.gc.set(ft instanceof ae.$INc),
										this.hc.set(ft instanceof ae.$JNc),
										this.jc.set(ft instanceof ae.$FNc),
										this.ec.set(ft instanceof ae.$INc || ft instanceof ae.$JNc),
										this.fc.set(ft instanceof ae.$INc || ft instanceof ae.$KNc),
										this.ic.set(ft instanceof ae.$KNc),
										(this.mc = "tree"));
									let bt = !1;
									ft instanceof ae.$FNc
										? (bt = ft instanceof ae.$HNc ? !ft.isReadonly() : !0)
										: (ft instanceof ae.$INc || ft instanceof ae.$JNc) &&
											(bt = !ft.hasOnlyReadOnlyMatches()),
										this.kc.set(bt);
								}),
							),
							this.D(
								this.sc.onDidBlur(() => {
									this.cc.reset(),
										this.dc.reset(),
										this.gc.reset(),
										this.hc.reset(),
										this.jc.reset(),
										this.ec.reset(),
										this.fc.reset(),
										this.ic.reset(),
										this.kc.reset();
								}),
							);
					}
					Sd(Ve) {
						Ve.browserEvent.preventDefault(),
							Ve.browserEvent.stopPropagation(),
							this.zb.showContextMenu({
								menuId: S.$XX.SearchContext,
								menuActionOptions: { shouldForwardArgs: !0 },
								contextKeyService: this.Bb,
								getAnchor: () => Ve.anchor,
								getActionsContext: () => Ve.element,
							});
					}
					Td() {
						const Ve = this.getControl(),
							Ze = Ve.navigate();
						let et = Ze.first();
						do if (!Ve.isCollapsed(et)) return !0;
						while ((et = Ze.next()));
						return !1;
					}
					selectNextMatch() {
						if (!this.hasSearchResults()) return;
						const [Ve] = this.sc.getSelection();
						Ve &&
							!(Ve instanceof ae.$FNc) &&
							this.sc.isCollapsed(Ve) &&
							this.sc.expand(Ve);
						const Ze = this.sc.navigate(Ve);
						let et = Ze.next();
						for (et || (et = Ze.first()); et && !(et instanceof ae.$FNc); )
							this.sc.isCollapsed(et) && this.sc.expand(et), (et = Ze.next());
						if (et) {
							et === Ve && this.sc.setFocus([]);
							const rt = (0, R.$BMb)(void 0, !1, !1);
							this.sc.setFocus([et], rt),
								this.sc.setSelection([et], rt),
								this.sc.reveal(et);
							const ft = this.Oc.getAriaLabel(et);
							ft && w.$pib(ft);
						}
					}
					selectPreviousMatch() {
						if (!this.hasSearchResults()) return;
						const [Ve] = this.sc.getSelection();
						let Ze = this.sc.navigate(Ve),
							et = Ze.previous();
						for (
							;
							!et || (!(et instanceof ae.$FNc) && !this.sc.isCollapsed(et));
						) {
							const rt = et ? Ze.previous() : Ze.last();
							if (!et && !rt) return;
							et = rt;
						}
						for (; !(et instanceof ae.$FNc); ) {
							const rt = Ze.next();
							this.sc.expand(et),
								(Ze = this.sc.navigate(rt)),
								(et = rt ? Ze.previous() : Ze.last());
						}
						if (et) {
							et === Ve && this.sc.setFocus([]);
							const rt = (0, R.$BMb)(void 0, !1, !1);
							this.sc.setFocus([et], rt),
								this.sc.setSelection([et], rt),
								this.sc.reveal(et);
							const ft = this.Oc.getAriaLabel(et);
							ft && w.$pib(ft);
						}
					}
					moveFocusToResults() {
						this.sc.domFocus();
					}
					focus() {
						if (
							(super.focus(), this.mc === "input" || !this.hasSearchResults())
						) {
							const Ve = this.Ce.seedOnFocus
								? this.Vd({ allowSearchOnType: !1 })
								: !1;
							this.yc.focus(void 0, void 0, Ve);
						} else this.sc.domFocus();
					}
					updateTextFromFindWidgetOrSelection({
						allowUnselectedWord: Ve = !0,
						allowSearchOnType: Ze = !0,
					}) {
						let et = this.Xc.activeTextEditorControl;
						if ((0, o.$0sb)(et) && !et?.hasTextFocus()) {
							const rt = l.$ufc.get(et);
							if (rt && rt.isFindInputFocused())
								return this.Ud(rt, { allowSearchOnType: Ze });
							et =
								this.Yc.listCodeEditors().find(
									(bt) =>
										bt instanceof b.$wDb &&
										bt.getParentEditor() === et &&
										bt.hasTextFocus(),
								) ?? et;
						}
						return this.Vd(
							{ allowUnselectedWord: Ve, allowSearchOnType: Ze },
							et,
						);
					}
					Ud(Ve, { allowSearchOnType: Ze = !0 }) {
						if (
							!this.Ce.seedWithNearestWord &&
							(t.$Ogb().getSelection()?.toString() ?? "") === ""
						)
							return !1;
						const et = Ve.getState().searchString;
						return et === ""
							? !1
							: (this.yc.searchInput?.setCaseSensitive(Ve.getState().matchCase),
								this.yc.searchInput?.setWholeWords(Ve.getState().wholeWord),
								this.yc.searchInput?.setRegex(Ve.getState().isRegex),
								this.Wd(et, Ze),
								!0);
					}
					Vd({ allowUnselectedWord: Ve = !0, allowSearchOnType: Ze = !0 }, et) {
						const rt =
							this.Ab.getValue("editor").find.seedSearchStringFromSelection;
						if (!rt || rt === "never") return !1;
						let ft = this.be(Ve, et);
						return ft === null
							? !1
							: (this.yc.searchInput?.getRegex() && (ft = n.$of(ft)),
								this.Wd(ft, Ze),
								!0);
					}
					Wd(Ve, Ze = !0) {
						Ze && !this.n.searchResult.isDirty
							? this.yc.setValue(Ve)
							: ((this.Nc = !0), this.yc.setValue(Ve), (this.Nc = !1));
					}
					focusNextInputBox() {
						if (this.yc.searchInputHasFocus()) {
							this.yc.isReplaceShown() ? this.yc.focus(!0, !0) : this.Xd();
							return;
						}
						if (this.yc.replaceInputHasFocus()) {
							this.Xd();
							return;
						}
						if (this.Dc.inputHasFocus()) {
							this.Cc.focus(), this.Cc.select();
							return;
						}
						if (this.Cc.inputHasFocus()) {
							this.ae();
							return;
						}
					}
					Xd() {
						this.ce() ? this.toggleQueryDetails(!0, this.ce()) : this.ae();
					}
					focusPreviousInputBox() {
						if (!this.yc.searchInputHasFocus()) {
							if (this.yc.replaceInputHasFocus()) {
								this.yc.focus(!0);
								return;
							}
							if (this.Dc.inputHasFocus()) {
								this.yc.focus(!0, !0);
								return;
							}
							if (this.Cc.inputHasFocus()) {
								this.Dc.focus(), this.Dc.select();
								return;
							}
							if (this.sc.isDOMFocused()) {
								this.Yd();
								return;
							}
						}
					}
					Yd() {
						this.ce()
							? this.toggleQueryDetails(!0, !0, !1, !0)
							: this.yc.focus(!0, !0);
					}
					Zd() {
						if (this.g || !this.zc) return;
						const Ve = this.Ce.actionsPosition;
						this.getContainer().classList.toggle(Be.c, Ve === "right"),
							this.yc.setWidth(this.zc.width - 28),
							this.Cc.setWidth(this.zc.width - 28),
							this.Dc.setWidth(this.zc.width - 28);
						const Ze = t.$zgb(this.xc),
							et = t.$zgb(this.vc);
						this.sc.layout(this.zc.height - Ze - et, this.zc.width - 28);
					}
					X(Ve, Ze) {
						super.X(Ve, Ze), (this.zc = new t.$pgb(Ze, Ve)), this.Zd();
					}
					getControl() {
						return this.sc;
					}
					allSearchFieldsClear() {
						return (
							this.yc.getReplaceValue() === "" &&
							(!this.yc.searchInput || this.yc.searchInput.getValue() === "")
						);
					}
					allFilePatternFieldsClear() {
						return (
							this.searchExcludePattern.getValue() === "" &&
							this.searchIncludePattern.getValue() === ""
						);
					}
					hasSearchResults() {
						return !this.n.searchResult.isEmpty(this.vd);
					}
					clearSearchResults(Ve = !0) {
						this.n.searchResult.clear(),
							this.we(!0),
							this.dd.getWorkbenchState() === V.WorkbenchState.EMPTY &&
								this.ve(),
							Ve &&
								(this.allSearchFieldsClear() && this.clearFilePatternFields(),
								this.yc.clear()),
							this.n.cancelSearch(),
							(this.sc.ariaLabel = $.localize(9335, null)),
							this.od.playSignal(be.$Twb.clear),
							this.Zd();
					}
					clearFilePatternFields() {
						this.searchExcludePattern.clear(),
							this.searchIncludePattern.clear();
					}
					cancelSearch(Ve = !0) {
						return this.n.cancelSearch() ? (Ve && this.yc.focus(), !0) : !1;
					}
					ae() {
						if (
							this.sc.getNode(null) &&
							(this.sc.domFocus(), this.sc.getSelection().length === 0)
						) {
							const Ze = (0, R.$BMb)();
							this.sc.focusNext(void 0, void 0, Ze),
								this.sc.setSelection(this.sc.getFocus(), Ze);
						}
					}
					be(Ve, Ze) {
						if (
							t.$Lgb(this.getContainer()) ||
							((Ze = Ze ?? this.Xc.activeTextEditorControl), !Ze)
						)
							return null;
						const et = this.Ce.seedWithNearestWord && Ve;
						return Re(et, Ze);
					}
					ce() {
						return this.Ac.classList.contains("more");
					}
					toggleCaseSensitive() {
						this.yc.searchInput?.setCaseSensitive(
							!this.yc.searchInput.getCaseSensitive(),
						),
							this.triggerQueryChange();
					}
					toggleWholeWords() {
						this.yc.searchInput?.setWholeWords(
							!this.yc.searchInput.getWholeWords(),
						),
							this.triggerQueryChange();
					}
					toggleRegex() {
						this.yc.searchInput?.setRegex(!this.yc.searchInput.getRegex()),
							this.triggerQueryChange();
					}
					togglePreserveCase() {
						this.yc.replaceInput?.setPreserveCase(
							!this.yc.replaceInput.getPreserveCase(),
						),
							this.triggerQueryChange();
					}
					setSearchParameters(Ve = {}) {
						typeof Ve.isCaseSensitive == "boolean" &&
							this.yc.searchInput?.setCaseSensitive(Ve.isCaseSensitive),
							typeof Ve.matchWholeWord == "boolean" &&
								this.yc.searchInput?.setWholeWords(Ve.matchWholeWord),
							typeof Ve.isRegex == "boolean" &&
								this.yc.searchInput?.setRegex(Ve.isRegex),
							typeof Ve.filesToInclude == "string" &&
								this.searchIncludePattern.setValue(String(Ve.filesToInclude)),
							typeof Ve.filesToExclude == "string" &&
								this.searchExcludePattern.setValue(String(Ve.filesToExclude)),
							typeof Ve.query == "string" &&
								this.yc.searchInput?.setValue(Ve.query),
							typeof Ve.replace == "string"
								? this.yc.replaceInput?.setValue(Ve.replace)
								: this.yc.replaceInput &&
									this.yc.replaceInput.getValue() !== "" &&
									this.yc.replaceInput.setValue(""),
							typeof Ve.triggerSearch == "boolean" &&
								Ve.triggerSearch &&
								this.triggerQueryChange(),
							typeof Ve.preserveCase == "boolean" &&
								this.yc.replaceInput?.setPreserveCase(Ve.preserveCase),
							typeof Ve.useExcludeSettingsAndIgnoreFiles == "boolean" &&
								this.Cc.setUseExcludesAndIgnoreFiles(
									Ve.useExcludeSettingsAndIgnoreFiles,
								),
							typeof Ve.onlyOpenEditors == "boolean" &&
								this.searchIncludePattern.setOnlySearchInOpenEditors(
									Ve.onlyOpenEditors,
								);
					}
					toggleQueryDetails(Ve = !0, Ze, et, rt) {
						const ft = "more";
						(Ze = typeof Ze > "u" ? !this.Ac.classList.contains(ft) : !!Ze),
							(this.uc["query.queryDetailsExpanded"] = Ze),
							(et = !!et),
							Ze
								? (this.Bc.setAttribute("aria-expanded", "true"),
									this.Ac.classList.add(ft),
									Ve &&
										(rt
											? (this.Cc.focus(), this.Cc.select())
											: (this.Dc.focus(), this.Dc.select())))
								: (this.Bc.setAttribute("aria-expanded", "false"),
									this.Ac.classList.remove(ft),
									Ve && this.yc.focus()),
							!et && this.zc && this.Zd();
					}
					de() {
						return this.Ac.classList.contains("more");
					}
					searchInFolders(Ve = []) {
						this.ee(!0, Ve);
					}
					searchOutsideOfFolders(Ve = []) {
						this.ee(!1, Ve);
					}
					ee(Ve, Ze) {
						if (!Ze.length || Ze.some((et) => et === ".")) {
							this.Dc.setValue(""), this.yc.focus();
							return;
						}
						this.ce() || this.toggleQueryDetails(!0, !0),
							(Ve ? this.Dc : this.Cc).setValue(Ze.join(", ")),
							this.yc.focus(!1);
					}
					triggerQueryChange(Ve) {
						const Ze = {
							preserveFocus: !0,
							triggeredOnType: !1,
							delay: 0,
							...Ve,
						};
						if (!(Ze.triggeredOnType && !this.Ce.searchOnType) && !this.Nc) {
							const et = Ze.triggeredOnType ? Ze.delay : 0;
							this.Mc.trigger(() => {
								this.fe(Ze.preserveFocus, Ze.triggeredOnType);
							}, et);
						}
					}
					fe(Ve, Ze = !1) {
						if (!this.yc.searchInput?.inputBox.isInputValid()) return;
						const et = this.yc.searchInput.getRegex(),
							rt = this.yc.getNotebookFilters().markupInput,
							ft = this.yc.getNotebookFilters().markupPreview,
							bt = this.yc.getNotebookFilters().codeInput,
							nt = this.yc.getNotebookFilters().codeOutput,
							lt = this.yc.searchInput.getWholeWords(),
							ct = this.yc.searchInput.getCaseSensitive(),
							gt = this.yc.searchInput.getValue(),
							ht = this.Cc.getValue().trim(),
							Rt = this.Dc.getValue().trim(),
							Nt = this.Cc.useExcludesAndIgnoreFiles(),
							jt = this.Dc.onlySearchInOpenEditors();
						if (gt.length === 0) {
							this.clearSearchResults(!1), this.Qd();
							return;
						}
						const ti = {
								pattern: gt,
								isRegExp: et,
								isCaseSensitive: ct,
								isWordMatch: lt,
								notebookInfo: {
									isInNotebookMarkdownInput: rt,
									isInNotebookMarkdownPreview: ft,
									isInNotebookCellInput: bt,
									isInNotebookCellOutput: nt,
								},
							},
							kt = [{ pattern: this.Cc.getValue() }],
							hi = this.Dc.getValue(),
							Kt = ti.isRegExp ? 1e4 : 1e3,
							di = {
								_reason: "searchView",
								extraFileResources: this.Db.invokeFunction(le.$P7),
								maxResults: this.Ce.maxResults ?? void 0,
								disregardIgnoreFiles: !Nt || void 0,
								disregardExcludeSettings: !Nt || void 0,
								onlyOpenEditors: jt,
								excludePattern: kt,
								includePattern: hi,
								previewOptions: { matchLines: 1, charsPerLine: Kt },
								isSmartCase: this.Ce.smartCase,
								expandPatterns: !0,
							},
							Ye = this.dd.getWorkspace().folders,
							ze = (It) => {
								this.yc.searchInput?.showMessage({
									content: It.message,
									type: E.MessageType.ERROR,
								}),
									this.n.searchResult.clear();
							};
						let Xe;
						try {
							Xe = this.j.text(
								ti,
								Ye.map((It) => It.uri),
								di,
							);
						} catch (It) {
							ze(It);
							return;
						}
						this.ge(Xe).then(() => {
							this.he(Xe, di, ht, Rt, Ze), Ve || this.yc.focus(!1, void 0, !0);
						}, ze);
					}
					ge(Ve) {
						const Ze = Ve.folderQueries.map((et) =>
							this.Wc.exists(et.folder).catch(() => !1),
						);
						return Promise.all(Ze).then((et) => {
							const rt = Ve.folderQueries.filter((ft, bt) => et[bt]);
							if (!Ve.folderQueries.length || rt.length) Ve.folderQueries = rt;
							else {
								const ft = Ve.folderQueries[0].folder.fsPath,
									bt = $.localize(9336, null, ft);
								return Promise.reject(new Error(bt));
							}
						});
					}
					he(Ve, Ze, et, rt, ft) {
						this.Kc.trigger(() => {
							this.yc.searchInput?.onSearchSubmit(),
								this.Cc.onSearchSubmit(),
								this.Dc.onSearchSubmit();
						}),
							this.n.cancelSearch(!0),
							this.n.cancelAISearch(!0),
							(this.Jc = this.Jc.then(() => this.le(Ve, et, rt, ft)).then(
								() => {},
								() => {},
							));
					}
					ie() {
						if (this.wd !== le.SearchUIState.Idle)
							try {
								const Ve = this.n.searchResult.fileCount(this.vd);
								this.Rc !== Ve && ((this.Rc = Ve), this.Id());
							} finally {
								this.Sc.schedule();
							}
					}
					je(Ve, Ze, et, rt) {
						if (
							((this.wd = le.SearchUIState.Idle),
							Ve(),
							this.Hd(),
							this.Ce.collapseResults !== "alwaysCollapse" &&
								this.n.searchResult.matches(this.vd).length === 1)
						) {
							const nt = this.n.searchResult.matches(this.vd)[0];
							nt.count() < 50 && this.sc.expand(nt);
						}
						const bt = !this.n.searchResult.isEmpty(this.vd);
						if (rt?.exit !== fe.SearchCompletionExitCode.NewSearchStarted) {
							if (bt)
								this.n.searchResult.toggleHighlights(this.isVisible()),
									w.$pib(
										$.localize(
											9349,
											null,
											this.n.searchResult.count(this.vd),
											this.n.searchResult.fileCount(),
										),
									);
							else {
								const nt = !!Ze,
									lt = !!et;
								let ct;
								rt
									? this.Dc.onlySearchInOpenEditors()
										? lt && nt
											? (ct = $.localize(9337, null, et, Ze))
											: lt
												? (ct = $.localize(9338, null, et))
												: nt
													? (ct = $.localize(9339, null, Ze))
													: (ct = $.localize(9340, null))
										: lt && nt
											? (ct = $.localize(9341, null, et, Ze))
											: lt
												? (ct = $.localize(9342, null, et))
												: nt
													? (ct = $.localize(9343, null, Ze))
													: (ct = $.localize(9344, null))
									: (ct = Ue),
									w.$pib(ct);
								const gt = this.Qd();
								if ((t.$fhb(gt, ct), rt))
									if (lt || nt) {
										const ht = this.wc.add(
											new Me(
												$.localize(9346, null),
												this.pe.bind(this),
												this.Hb,
											),
										);
										t.$fhb(gt, ht.element);
									} else {
										const ht = this.wc.add(
											new Me(
												$.localize(9347, null),
												this.me.bind(this),
												this.Hb,
											),
										);
										t.$fhb(gt, ht.element);
									}
								else {
									const ht = this.wc.add(
										new Me(
											$.localize(9345, null),
											() => this.triggerQueryChange({ preserveFocus: !1 }),
											this.Hb,
										),
									);
									t.$fhb(gt, ht.element);
								}
								if (rt) {
									t.$fhb(gt, Se("span", void 0, " - "));
									const ht = this.wc.add(
										new Me($.localize(9348, null), this.oe.bind(this), this.Hb),
									);
									t.$fhb(gt, ht.element);
								}
								this.dd.getWorkbenchState() === V.WorkbenchState.EMPTY &&
									this.ve(),
									this.Zd();
							}
							if (
								(rt &&
									rt.limitHit &&
									rt.messages.push({
										type: fe.TextSearchCompleteMessageType.Warning,
										text: $.localize(9350, null),
									}),
								rt && rt.messages)
							)
								for (const nt of rt.messages) this.te(nt);
							this.Zd();
						}
					}
					ke(Ve, Ze, et, rt, ft) {
						return (
							(this.wd = le.SearchUIState.Idle),
							m.$8(Ve)
								? this.je(Ze, et, rt, ft)
								: (Ze(),
									this.yc.searchInput?.showMessage({
										content: Ve.message,
										type: E.MessageType.ERROR,
									}),
									this.n.searchResult.clear(),
									Promise.resolve())
						);
					}
					le(Ve, Ze, et, rt) {
						let ft;
						this.Zc.withProgress(
							{ location: this.Yb(), delay: rt ? 300 : 0 },
							(lt) => new Promise((ct) => (ft = ct)),
						),
							this.yc.searchInput?.clearMessage(),
							(this.wd = le.SearchUIState.Searching),
							this.we();
						const bt = setTimeout(() => {
							this.wd = le.SearchUIState.SlowSearch;
						}, 2e3);
						(this.Rc = 0),
							this.Sc.schedule(),
							this.yc.setReplaceAllActionState(!1),
							this.sc.setSelection([]),
							this.sc.setFocus([]),
							(this.n.replaceString = this.yc.getReplaceValue());
						const nt = this.n.search(Ve);
						if (this.vd) {
							const lt = this.n.aiSearch({
								...Ve,
								contentPattern: Ve.contentPattern.pattern,
								type: fe.QueryType.aiText,
							});
							return nt.asyncResults.then(() =>
								lt.then(
									(ct) => {
										clearTimeout(bt), this.je(ft, Ze, et, ct);
									},
									(ct) => {
										clearTimeout(bt), this.ke(ct, ft, Ze, et);
									},
								),
							);
						}
						return nt.asyncResults.then(
							(lt) => {
								clearTimeout(bt), this.je(ft, Ze, et, lt);
							},
							(lt) => {
								clearTimeout(bt), this.ke(lt, ft, Ze, et);
							},
						);
					}
					me(Ve) {
						t.$ahb.stop(Ve, !1),
							this.ne(
								"@id:files.exclude,search.exclude,search.useParentIgnoreFiles,search.useGlobalIgnoreFiles,search.useIgnoreFiles",
							);
					}
					ne(Ve) {
						const Ze = { query: Ve };
						return this.dd.getWorkbenchState() !== V.WorkbenchState.EMPTY
							? this.hd.openWorkspaceSettings(Ze)
							: this.hd.openUserSettings(Ze);
					}
					oe() {
						this.Eb.open(
							g.URI.parse("https://go.microsoft.com/fwlink/?linkid=853977"),
						);
					}
					pe() {
						this.Cc.setValue(""),
							this.Dc.setValue(""),
							this.Dc.setOnlySearchInOpenEditors(!1),
							this.triggerQueryChange({ preserveFocus: !1 });
					}
					qe() {
						this.toggleQueryDetails(!1, !0),
							this.searchExcludePattern.setUseExcludesAndIgnoreFiles(!0);
					}
					re() {
						this.toggleQueryDetails(!1, !0),
							this.Dc.setOnlySearchInOpenEditors(!1);
					}
					se(Ve, Ze, et = !1) {
						const rt = this.n.searchResult.fileCount(this.vd),
							ft = this.n.searchResult.count(this.vd);
						this.lc.set(rt > 0);
						const bt = this.vc.style.display === "none",
							nt = this.Qd(),
							lt = et ? "" : this.ue(ft, rt);
						if (
							((this.sc.ariaLabel =
								lt +
								$.localize(
									9351,
									null,
									this.searchResult.query?.contentPattern.pattern ?? "",
								)),
							t.$fhb(nt, lt),
							rt > 0)
						) {
							if (Ve) {
								const jt = " - " + $.localize(9352, null) + " ",
									ti = this.wc.add(
										new Me(
											$.localize(9353, null),
											this.qe.bind(this),
											this.Hb,
											$.localize(9354, null),
										),
									);
								t.$fhb(nt, Se("span", void 0, jt, "(", ti.element, ")"));
							}
							if (Ze) {
								const jt = " - " + $.localize(9355, null) + " ",
									ti = this.wc.add(
										new Me(
											$.localize(9356, null),
											this.re.bind(this),
											this.Hb,
											$.localize(9357, null),
										),
									);
								t.$fhb(nt, Se("span", void 0, jt, "(", ti.element, ")"));
							}
							t.$fhb(nt, " - ");
							const ct = (0, ee.$qOc)(
									$.localize(9358, null),
									this.yb.lookupKeybinding(
										se.SearchCommandIds.OpenInEditorCommandId,
									),
								),
								gt = this.wc.add(
									new Me(
										$.localize(9359, null),
										() =>
											this.Db.invokeFunction(
												pe.$5Oc,
												this.searchResult,
												this.searchIncludePattern.getValue(),
												this.searchExcludePattern.getValue(),
												this.searchIncludePattern.onlySearchInOpenEditors(),
											),
										this.Hb,
										ct,
									),
								);
							t.$fhb(nt, gt.element);
							const ht = Se("span", void 0, " - ");
							t.$fhb(nt, ht);
							const Rt = this.wc.add(
								new Me(
									"",
									async () => {
										const jt = this.ze(),
											ti = (0, Oe.$2gc)();
										for (const kt of jt) {
											const hi = kt.resource;
											if ((0, xe.$n6b)(hi.scheme))
												for (const Kt of kt.matches) {
													let di;
													if (!kt.textModel)
														di = await (0, He.$Vfc)(
															this.td,
															this.sd,
															hi,
															Kt.range,
														);
													else {
														const Ye = new Te.$iL(
															Math.max(
																Kt.range.startLineNumber -
																	Ie.COMPOSER_CUBE_EXTENDED_LINE_RANGE,
																1,
															),
															Math.max(Kt.range.startColumn, 1),
															Math.min(
																Kt.range.endLineNumber +
																	Ie.COMPOSER_CUBE_EXTENDED_LINE_RANGE +
																	1,
																kt.textModel.getLineCount(),
															),
															Math.min(
																kt.textModel.getLineMaxColumn(
																	Math.min(
																		Kt.range.endLineNumber,
																		kt.textModel.getLineCount(),
																	) +
																		Ie.COMPOSER_CUBE_EXTENDED_LINE_RANGE +
																		1,
																),
																Kt.range.endColumn,
															),
														);
														di = await (0, He.$Wfc)({
															model: kt.textModel,
															dataScrubbingService: this.sd,
															inBoundsSelectionRange: Ye,
														});
													}
													di && ti.selections.push(di);
												}
										}
										this.pd.createComposer({
											partialState: { context: ti, hasChangedContext: !0 },
											dontRefreshReactiveContext: !0,
										});
									},
									this.Hb,
									$.localize(9360, null),
								),
							);
							Rt.element.classList.add(
								"codicon",
								"codicon-symbol-method",
								"search-composer-button",
							),
								(Rt.element.style.fontSize = "13px"),
								(Rt.element.style.verticalAlign = "middle"),
								(Rt.element.style.marginBottom = "2px"),
								(Rt.element.style.outline = "none"),
								t.$fhb(nt, Rt.element);
							const Nt = (jt) => {
								jt
									? ((ht.style.visibility = "visible"),
										(ht.style.pointerEvents = "auto"),
										(Rt.element.style.visibility = "visible"),
										(Rt.element.style.pointerEvents = "auto"))
									: ((ht.style.visibility = "hidden"),
										(ht.style.pointerEvents = "none"),
										(Rt.element.style.visibility = "hidden"),
										(Rt.element.style.pointerEvents = "none"));
							};
							Nt(this.pd.isComposerEnabled()),
								this.D(
									this.pd.onDidEnableDisableComposer(({ enabled: jt }) =>
										Nt(jt),
									),
								),
								this.Zd();
						} else bt || t.hide(this.vc);
					}
					te(Ve) {
						const Ze = this.vc.firstChild;
						Ze &&
							t.$fhb(
								Ze,
								(0, te.$UOc)(
									Ve,
									this.Db,
									this.$c,
									this.Eb,
									this.bd,
									this.wc,
									() => this.triggerQueryChange(),
								),
							);
					}
					ue(Ve, Ze) {
						return Ve === 1 && Ze === 1
							? $.localize(9361, null, Ve, Ze)
							: Ve === 1
								? $.localize(9362, null, Ve, Ze)
								: Ze === 1
									? $.localize(9363, null, Ve, Ze)
									: $.localize(9364, null, Ve, Ze);
					}
					ve() {
						this.Ic = this.Qd();
						const Ve = t.$fhb(this.Ic, Se("p", void 0, $.localize(9365, null))),
							Ze = this.wc.add(
								new Me(
									$.localize(9366, null),
									() => {
										this.bd
											.executeCommand(c.$m && c.$p ? G.$Jtc.ID : G.$Htc.ID)
											.catch((et) => m.$4(et));
									},
									this.Hb,
								),
							);
						t.$fhb(Ve, Ze.element);
					}
					we(Ve = !1) {
						((this.vc.firstChild?.textContent?.indexOf(Ue) ?? -1) > -1 ||
							Ve ||
							!this.Ab.getValue().search.searchOnType) &&
							t.hide(this.vc),
							t.show(this.Ec),
							(this.Fc = void 0);
					}
					xe(Ve, Ze) {
						return (
							Ve instanceof ae.$HNc ||
							(Ze.scheme !== p.Schemas.untitled &&
								this.md.getContributedNotebookTypes(Ze).length > 0)
						);
					}
					ye(Ve, Ze, et, rt) {
						const ft = this.Ab.getValue().search.useReplacePreview,
							bt = Ve instanceof ae.$FNc ? Ve.parent().resource : Ve.resource;
						return ft &&
							this.n.isReplaceActive() &&
							this.n.replaceString &&
							!this.xe(Ve, bt)
							? this.fd.openReplacePreview(Ve, Ze, et, rt)
							: this.open(Ve, Ze, et, rt, bt);
					}
					async open(Ve, Ze, et, rt, ft) {
						const bt = De(Ve, this.n),
							nt = Ve instanceof ae.$FNc ? Ve.parent().matches() : [],
							lt =
								ft ??
								(Ve instanceof ae.$FNc ? Ve.parent().resource : Ve.resource);
						let ct;
						const gt = {
							preserveFocus: Ze,
							pinned: rt,
							selection: bt,
							revealIfVisible: !0,
						};
						try {
							ct = await this.Xc.openEditor(
								{ resource: lt, options: gt },
								et ? $e.$KY : $e.$JY,
							);
							const ht = ct?.getControl();
							Ve instanceof ae.$FNc && Ze && (0, o.$0sb)(ht)
								? this.n.searchResult.rangeHighlightDecorations.highlightRange(
										ht.getModel(),
										Ve.range(),
									)
								: this.n.searchResult.rangeHighlightDecorations.removeHighlightRange();
						} catch (ht) {
							m.$4(ht);
							return;
						}
						if (ct instanceof ie.$B4b) {
							const ht = Ve.parent();
							if (Ve instanceof ae.$FNc)
								if (Ve instanceof ae.$HNc) Ve.parent().showMatch(Ve);
								else {
									const Rt = ct.getControl();
									if (Rt) {
										ht.bindNotebookEditorWidget(Rt),
											await ht.updateMatchesForEditorWidget();
										const Nt = nt.findIndex((kt) => kt.id() === Ve.id()),
											jt = ht.matches(),
											ti = Nt >= jt.length ? jt[jt.length - 1] : jt[Nt];
										ti instanceof ae.$HNc &&
											(ht.showMatch(ti),
											(!this.sc.getFocus().includes(ti) ||
												!this.sc.getSelection().includes(ti)) &&
												(this.sc.setSelection([ti], (0, R.$BMb)()),
												this.sc.setFocus([ti])));
									}
								}
						}
					}
					openEditorWithMultiCursor(Ve) {
						const Ze =
							Ve instanceof ae.$FNc ? Ve.parent().resource : Ve.resource;
						return this.Xc.openEditor({
							resource: Ze,
							options: { preserveFocus: !1, pinned: !0, revealIfVisible: !0 },
						}).then((et) => {
							if (et) {
								let rt = null;
								if (
									(Ve instanceof ae.$INc
										? (rt = Ve)
										: Ve instanceof ae.$FNc && (rt = Ve.parent()),
									rt)
								) {
									const ft = rt
											.matches()
											.map(
												(nt) =>
													new s.$kL(
														nt.range().startLineNumber,
														nt.range().startColumn,
														nt.range().endLineNumber,
														nt.range().endColumn,
													),
											),
										bt = (0, o.$btb)(et.getControl());
									bt && y.$njc.get(bt)?.selectAllUsingSelections(ft);
								}
							}
							this.n.searchResult.rangeHighlightDecorations.removeHighlightRange();
						}, m.$4);
					}
					ze() {
						return this.n.searchResult
							.matches(this.vd)
							.map((Ve) => ({
								resource: Ve.resource,
								textModel: Ve.getTextModel(),
								matches: Ve.matches().map((Ze) => ({
									lineNumber: Ze.range().startLineNumber,
									preview: Ze.text(),
									range: Ze.range(),
								})),
							}));
					}
					Ae(Ve) {
						if (!this.n) return;
						let Ze = this.n.searchResult.matches();
						for (let et = 0, rt = Ze.length; et < rt; et++)
							Ve.toString() === Ze[et].resource.toString() &&
								this.n.searchResult.remove(Ze[et]);
						Ze = this.n.searchResult.matches(!0);
						for (let et = 0, rt = Ze.length; et < rt; et++)
							Ve.toString() === Ze[et].resource.toString() &&
								this.n.searchResult.remove(Ze[et]);
					}
					Be(Ve) {
						if (
							!this.n ||
							(this.Ce.sortOrder !== fe.SearchSortOrder.Modified &&
								!Ve.gotDeleted())
						)
							return;
						const Ze = this.n.searchResult.matches();
						if (Ve.gotDeleted()) {
							const et = Ze.filter((rt) =>
								Ve.contains(rt.resource, D.FileChangeType.DELETED),
							);
							this.n.searchResult.remove(et);
						} else {
							const et = Ze.filter((rt) => Ve.contains(rt.resource));
							et.length &&
								this.Ce.sortOrder === fe.SearchSortOrder.Modified &&
								this.Ge(et).then(() => this.refreshTree());
						}
					}
					get Ce() {
						return this.Ab.getValue("search");
					}
					De() {
						this.yc.clearHistory(),
							this.Cc.clearHistory(),
							this.Dc.clearHistory();
					}
					saveState() {
						if (!this.yc) return;
						const Ve = this.Cc?.getValue().trim() ?? "",
							Ze = this.Dc?.getValue().trim() ?? "",
							et = this.Dc?.onlySearchInOpenEditors() ?? !1,
							rt = this.Cc?.useExcludesAndIgnoreFiles() ?? !0,
							ft = this.n.preserveCase;
						if (this.yc.searchInput) {
							const nt = this.yc.searchInput.getRegex(),
								lt = this.yc.searchInput.getWholeWords(),
								ct = this.yc.searchInput.getCaseSensitive(),
								gt = this.yc.searchInput.getValue(),
								ht = this.yc.getNotebookFilters().codeInput,
								Rt = this.yc.getNotebookFilters().codeOutput,
								Nt = this.yc.getNotebookFilters().markupInput,
								jt = this.yc.getNotebookFilters().markupPreview;
							(this.uc["query.contentPattern"] = gt),
								(this.uc["query.regex"] = nt),
								(this.uc["query.wholeWords"] = lt),
								(this.uc["query.caseSensitive"] = ct),
								(this.uc["query.isInNotebookMarkdownInput"] = Nt),
								(this.uc["query.isInNotebookMarkdownPreview"] = jt),
								(this.uc["query.isInNotebookCellInput"] = ht),
								(this.uc["query.isInNotebookCellOutput"] = Rt);
						}
						(this.uc["query.folderExclusions"] = Ve),
							(this.uc["query.folderIncludes"] = Ze),
							(this.uc["query.useExcludesAndIgnoreFiles"] = rt),
							(this.uc["query.preserveCase"] = ft),
							(this.uc["query.onlyOpenEditors"] = et);
						const bt = this.searchAndReplaceWidget.isReplaceShown();
						(this.uc["view.showReplace"] = bt),
							(this.uc["view.treeLayout"] = this.ud),
							(this.uc["query.replaceText"] = bt && this.yc.getReplaceValue()),
							this.Ee(),
							this.s.saveMemento(),
							super.saveState();
					}
					Ee() {
						if (this.yc === void 0) return;
						const Ve = Object.create(null),
							Ze = this.yc.getSearchHistory();
						Ze && Ze.length && (Ve.search = Ze);
						const et = this.yc.getReplaceHistory();
						et && et.length && (Ve.replace = et);
						const rt = this.Cc.getHistory();
						rt && rt.length && (Ve.exclude = rt);
						const ft = this.Dc.getHistory();
						ft && ft.length && (Ve.include = ft), this.jd.save(Ve);
					}
					async Fe() {
						const Ve = this.searchResult
							.matches(this.vd)
							.filter((Ze) => !Ze.fileStat)
							.map((Ze) => Ze.resolveFileStat(this.Wc));
						await Promise.all(Ve);
					}
					async Ge(Ve) {
						const Ze = Ve.map((et) => et.resolveFileStat(this.Wc));
						await Promise.all(Ze);
					}
					He() {
						for (const Ve of this.searchResult.matches()) Ve.fileStat = void 0;
						for (const Ve of this.searchResult.matches(!0))
							Ve.fileStat = void 0;
					}
					dispose() {
						(this.g = !0), this.saveState(), super.dispose();
					}
				};
				(e.$dPc = Ae),
					(e.$dPc =
						Ae =
						Be =
							Ne(
								[
									j(1, D.$ll),
									j(2, $e.$IY),
									j(3, f.$dtb),
									j(4, U.$8N),
									j(5, O.$4N),
									j(6, L.$GO),
									j(7, I.$ek),
									j(8, k.$Wxb),
									j(9, M.$Li),
									j(10, Y.$K1),
									j(11, T.$gj),
									j(12, V.$Vi),
									j(13, ae.$TNc),
									j(14, P.$6j),
									j(15, re.$XNc),
									j(16, me.$kZ),
									j(17, ye.$7Z),
									j(18, H.$iP),
									j(19, oe.$bPc),
									j(20, k.$Xxb),
									j(21, v.$XK),
									j(22, A.$uZ),
									j(23, z.$lq),
									j(24, B.$7rb),
									j(25, F.$km),
									j(26, Le.$Uyb),
									j(27, ve.$MIb),
									j(28, ge.$ik),
									j(29, be.$Owb),
									j(30, Fe.IComposerService),
									j(31, V.$Vi),
									j(32, Ke.$Nfc),
									j(33, Je.$zIb),
									j(34, Ee.$MO),
								],
								Ae,
							));
				class Me extends h.$1c {
					constructor(Ve, Ze, et, rt) {
						super(),
							(this.element = Se("a.pointer", { tabindex: 0 }, Ve)),
							this.D(
								et.setupManagedHover((0, Ce.$cib)("mouse"), this.element, rt),
							),
							this.c(Ze);
					}
					c(Ve) {
						const Ze = (et) => {
							t.$ahb.stop(et, !1), Ve(et);
						};
						this.D(t.$0fb(this.element, t.$$gb.CLICK, Ze)),
							this.D(
								t.$0fb(this.element, t.$$gb.KEY_DOWN, (et) => {
									const rt = new i.$7fb(et);
									(rt.equals(a.KeyCode.Space) || rt.equals(a.KeyCode.Enter)) &&
										(Ze(et), rt.preventDefault(), rt.stopPropagation());
								}),
							);
					}
				}
				function De(je, Ve) {
					let Ze = null;
					if (
						(je instanceof ae.$FNc && (Ze = je),
						je instanceof ae.$INc &&
							je.count() > 0 &&
							(Ze = je.matches()[je.matches().length - 1]),
						Ze)
					) {
						const et = Ze.range();
						if (Ve.isReplaceActive() && Ve.replaceString) {
							const rt = Ze.replaceString;
							return {
								startLineNumber: et.startLineNumber,
								startColumn: et.startColumn,
								endLineNumber: et.startLineNumber,
								endColumn: et.startColumn + rt.length,
							};
						}
						return et;
					}
				}
				function Re(je, Ve) {
					let Ze = Ve;
					if (
						((0, o.$$sb)(Ze) &&
							(Ze.getOriginalEditor().hasTextFocus()
								? (Ze = Ze.getOriginalEditor())
								: (Ze = Ze.getModifiedEditor())),
						!(0, o.$0sb)(Ze) || !Ze.hasModel())
					)
						return null;
					const et = Ze.getSelection();
					if (!et) return null;
					if (et.isEmpty())
						return je
							? (Ze.getModel().getWordAtPosition(et.getStartPosition())?.word ??
									null)
							: null;
					let rt = "";
					for (let ft = et.startLineNumber; ft <= et.endLineNumber; ft++) {
						let bt = Ze.getModel().getLineContent(ft);
						ft === et.endLineNumber && (bt = bt.substring(0, et.endColumn - 1)),
							ft === et.startLineNumber &&
								(bt = bt.substring(et.startColumn - 1)),
							ft !== et.startLineNumber &&
								(bt =
									`
` + bt),
							(rt += bt);
					}
					return rt;
				}
			},
		),
		