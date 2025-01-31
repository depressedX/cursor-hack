import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/quickinput/browser/pickerQuickAccess.js';
import '../../../../base/common/fuzzyScorer.js';
import '../../../services/search/common/queryBuilder.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../common/search.js';
import '../../../services/search/common/search.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/labels.js';
import '../../../services/path/common/pathService.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/resources.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/label/common/label.js';
import '../../../../editor/common/services/getIconClasses.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/languages/language.js';
import '../../../../nls.js';
import '../../../services/workingCopy/common/workingCopyService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../common/editor.js';
import '../../../services/editor/common/editorService.js';
import '../../../../editor/common/core/range.js';
import '../../../../base/common/async.js';
import '../common/cacheState.js';
import '../../../services/history/common/history.js';
import '../../../../base/common/network.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../../base/common/map.js';
import './symbolsQuickAccess.js';
import '../../../../platform/quickinput/common/quickAccess.js';
import '../../../browser/quickaccess.js';
import '../../codeEditor/browser/quickaccess/gotoSymbolQuickAccess.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../base/common/event.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../base/common/iconLabels.js';
import '../../../../base/common/lazy.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/registry/common/platform.js';
import '../../chat/browser/actions/chatQuickInputActions.js';
import '../../chat/browser/chat.js';
import '../../../../platform/log/common/log.js';
import '../../../services/editor/common/customEditorLabelService.js';
import '../../notepad/browser/notepad.js';
import '../../notepad/browser/constants.js';
import '../../semSearch/browser/semSearchService.js';
import '../../semSearch/browser/constants.js';
import '../../../services/selectedContext/browser/selectedContext.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../quickInput2/browser/utils.js';
import '../../aiFeatureStatusService/browser/aiFeatureStatusService.js';
import '../../aiCpp/browser/cppEventLogger.js';
import '../../../../css!vs/workbench/contrib/search/browser/media/anythingQuickAccess.js';
define(
			de[721],
			he([
				1, 0, 63, 392, 322, 361, 5, 568, 186, 25, 222, 165, 9, 19, 78, 22, 3,
				73, 252, 67, 61, 4, 227, 10, 44, 18, 17, 15, 3132, 245, 23, 170, 59,
				827, 348, 473, 1313, 42, 98, 6, 14, 26, 68, 274, 149, 39, 30, 1358, 208,
				34, 399, 467, 558, 993, 1750, 271, 204, 69, 1746, 287, 332, 2487,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*quickInput*/,
				i /*pickerQuickAccess*/,
				w /*fuzzyScorer*/,
				E /*queryBuilder*/,
				C /*instantiation*/,
				d /*search*/,
				m /*search*/,
				r /*workspace*/,
				u /*labels*/,
				a /*pathService*/,
				h /*uri*/,
				c /*resources*/,
				n /*environmentService*/,
				g /*files*/,
				p /*lifecycle*/,
				o /*label*/,
				f /*getIconClasses*/,
				b /*model*/,
				s /*language*/,
				l /*nls*/,
				y /*workingCopyService*/,
				$ /*configuration*/,
				v /*editor*/,
				S /*editorService*/,
				I /*range*/,
				T /*async*/,
				P /*cacheState*/,
				k /*history*/,
				L /*network*/,
				D /*filesConfigurationService*/,
				M /*map*/,
				N /*symbolsQuickAccess*/,
				A /*quickAccess*/,
				R /*quickaccess*/,
				O /*gotoSymbolQuickAccess*/,
				B /*resolverService*/,
				U /*editorCommon*/,
				z /*event*/,
				F /*codicons*/,
				x /*themables*/,
				H /*uriIdentity*/,
				q /*iconLabels*/,
				V /*lazy*/,
				G /*keybinding*/,
				K /*platform*/,
				J /*chatQuickInputActions*/,
				W /*chat*/,
				X /*log*/,
				Y /*customEditorLabelService*/,
				ie /*notepad*/,
				ne /*constants*/,
				ee /*semSearchService*/,
				_ /*constants*/,
				te /*selectedContext*/,
				Q /*outlineModel*/,
				Z /*languageFeatures*/,
				se /*utils*/,
				re /*aiFeatureStatusService*/,
				le /*cppEventLogger*/,
) {
				"use strict";
				var oe;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$S9b = void 0);
				const ae = (0, l.localize)(9125, null),
					pe = (0, l.localize)(9126, null);
				function $e(ue) {
					const fe = ue;
					return (
						!!fe?.range &&
						!!fe.resource &&
						!fe.semSearchData &&
						!fe.cppReportEvent
					);
				}
				let ye = class extends i.$GLb {
					static {
						oe = this;
					}
					static {
						this.PREFIX = "";
					}
					static {
						this.j = { label: (0, l.localize)(9127, null), isNoResults: !0 };
					}
					static {
						this.m = 512;
					}
					static {
						this.n = 200;
					}
					static {
						this.q = 200;
					}
					get scorerCache() {
						return this.s.scorerCache;
					}
					get defaultFilterValue() {
						if (this.eb.preserveInput)
							return A.DefaultQuickAccessFilterValue.LAST;
					}
					constructor(
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
						Ie,
						Be,
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
					) {
						super(oe.PREFIX, {
							canAcceptInBackground: !0,
							noResultsPick: oe.j,
						}),
							(this.t = fe),
							(this.u = me),
							(this.w = ve),
							(this.y = ge),
							(this.z = be),
							(this.C = Ce),
							(this.F = Le),
							(this.G = Fe),
							(this.H = Oe),
							(this.I = xe),
							(this.J = He),
							(this.L = Ke),
							(this.M = Je),
							(this.N = Te),
							(this.O = Ee),
							(this.P = Ie),
							(this.Q = Be),
							(this.R = Se),
							(this.S = ke),
							(this.U = Ue),
							(this.W = qe),
							(this.X = Ae),
							(this.Y = Me),
							(this.Z = De),
							(this.$ = Re),
							(this.ab = je),
							(this.bb = Ve),
							(this.cb = Ze),
							(this.db = et),
							(this.s = this.D(
								new (class extends p.$1c {
									constructor(rt, ft) {
										super(),
											(this.c = rt),
											(this.f = ft),
											(this.picker = void 0),
											(this.editorViewState = this.D(
												this.f.createInstance(R.$k9b),
											)),
											(this.scorerCache = Object.create(null)),
											(this.fileQueryCache = void 0),
											(this.lastOriginalFilter = void 0),
											(this.lastFilter = void 0),
											(this.lastRange = void 0),
											(this.lastGlobalPicks = void 0),
											(this.isQuickNavigating = void 0);
									}
									set(rt) {
										(this.picker = rt),
											z.Event.once(rt.onDispose)(() => {
												rt === this.picker && (this.picker = void 0);
											});
										const ft = !!rt.quickNavigate;
										ft ||
											((this.fileQueryCache = this.c.nb()),
											(this.scorerCache = Object.create(null))),
											(this.isQuickNavigating = ft),
											(this.lastOriginalFilter = void 0),
											(this.lastFilter = void 0),
											(this.lastRange = void 0),
											(this.lastGlobalPicks = void 0),
											this.editorViewState.reset();
									}
								})(this, this.t),
							)),
							(this.jb = new t.$BJ({ skipDescription: !0 })),
							(this.lb = this.D(new T.$Kh(oe.n))),
							(this.mb = this.t.createInstance(E.$M8)),
							(this.ub = new V.$Y(() => K.$Io.as(A.$1r.Quickaccess))),
							(this.wb = this.D(this.t.createInstance(N.$Ifc))),
							(this.yb = this.t.createInstance(O.$n9b)),
							(this.Nb = []);
					}
					get eb() {
						const fe = this.J.getValue().workbench?.editor,
							me = this.J.getValue().search,
							ve = this.J.getValue().workbench.quickOpen;
						return {
							openEditorPinned:
								!fe?.enablePreviewFromQuickOpen || !fe?.enablePreview,
							openSideBySideDirection: fe?.openSideBySideDirection,
							includeSymbols: me?.quickOpen.includeSymbols,
							includeHistory: me?.quickOpen.includeHistory,
							historyFilterSortOrder: me?.quickOpen.history.filterSortOrder,
							preserveInput: ve.preserveInput,
						};
					}
					provide(fe, me, ve) {
						const ge = new p.$Zc();
						this.s.set(fe),
							ge.add(
								fe.onDidAccept(() => {
									const Ce = [],
										Le = new Map();
									for (const He of fe.items) {
										if (He.type === "separator") {
											Ce.push({
												type: "separator",
												separatorLabel: He.label ?? "",
											});
											continue;
										}
										He.resource &&
											(Ce.push({
												type: "resource",
												resource: He.resource,
												range: He.semSearchData
													? He.semSearchData.highlightRange
													: void 0,
											}),
											Le.set(He, Ce.length - 1));
									}
									const Fe = [];
									for (const He of fe.selectedItems) {
										const Ke = Le.get(He);
										Ke !== void 0 && Fe.push(Ke);
									}
									const Oe = Fe.reduce((He, Ke) => Math.max(He, Ke), -1),
										xe = Ce.slice(0, Oe + 16);
									this.db.recordAnythingQuickAccessSelectionEvent(
										fe.value,
										xe,
										Fe,
									);
								}),
							);
						const be = ge.add(new p.$2c());
						return (
							ge.add(
								fe.onDidChangeActive(() => {
									be.value = void 0;
									const [Ce] = fe.activeItems;
									$e(Ce) && (be.value = this.fb(Ce));
								}),
							),
							ge.add(
								z.Event.once(fe.onDidHide)(({ reason: Ce }) => {
									Ce === t.QuickInputHideReason.Gesture &&
										this.s.editorViewState.restore();
								}),
							),
							ge.add(super.provide(fe, me, ve)),
							ge
						);
					}
					fb(fe) {
						const me = this.L.activeEditor;
						if (!this.P.extUri.isEqual(fe.resource, me?.resource))
							return p.$1c.None;
						const ve = this.L.activeTextEditorControl;
						return ve
							? (this.s.editorViewState.set(),
								ve.revealRangeInCenter(fe.range.selection, U.ScrollType.Smooth),
								this.addDecorations(ve, fe.range.decoration),
								(0, p.$Yc)(() => this.clearDecorations(ve)))
							: p.$1c.None;
					}
					g(fe, me, ve, ge) {
						const be = (0, d.$Q7)(fe, [O.$n9b.PREFIX]);
						let Ce;
						if (
							(be ? (Ce = be.filter) : (Ce = fe),
							(this.s.lastRange = be?.range),
							fe !== this.s.lastOriginalFilter && Ce === this.s.lastFilter)
						)
							return null;
						const Le = !!this.s.lastOriginalFilter;
						(this.s.lastOriginalFilter = fe), (this.s.lastFilter = Ce);
						const Fe = this.s.picker?.items,
							Oe = this.s.picker?.activeItems[0];
						if (Fe && Oe) {
							const xe = $e(Oe),
								He = Oe === oe.j && Ce.indexOf(O.$n9b.PREFIX) >= 0;
							!xe &&
								!He &&
								(this.s.lastGlobalPicks = { items: Fe, active: Oe });
						}
						return this.hb(Ce, { ...ge, enableEditorSymbolSearch: Le }, me, ve);
					}
					initializeCaches() {
						(this.s.fileQueryCache = this.nb()),
							(this.s.scorerCache = Object.create(null));
					}
					doGetPicksPublic(fe, me, ve, ge) {
						return this.hb(fe, me, ve, ge);
					}
					hb(fe, me, ve, ge) {
						const be = me?.excludeCursorIgnore ?? !1,
							Ce = (0, w.$hs)(fe),
							Le = (Ke) =>
								Ke.filter(
									(Je) =>
										!(
											"resource" in Je &&
											Je.resource &&
											this.ab.shouldIgnoreUri(Je.resource)
										),
								);
						let Fe = [];
						if (!me.excludeSemanticSearch) {
							const { fast: Ke, slow: Je } = this.Gb(Ce, ge);
							(Fe = Ke),
								Je.then((Te) => {
									if (Te.length > 0 && !ge.isCancellationRequested) {
										const Ee = [{ type: "separator", label: pe }, ...Te];
										this.Ob(Ee, !0);
									}
								}).catch((Te) => {});
						}
						if (me.enableEditorSymbolSearch) {
							const Ke = this.zb(Ce, ve, ge);
							if (Ke) return Ke;
						}
						const Oe = this.s.picker?.activeItems[0];
						if ($e(Oe) && this.s.lastGlobalPicks) return this.s.lastGlobalPicks;
						const xe = be ? Le(this.kb(Ce)) : this.kb(Ce);
						let He = new Array();
						if (me.additionPicks)
							for (const Ke of me.additionPicks) {
								if (Ke.type === "separator") {
									He.push(Ke);
									continue;
								}
								if (!Ce.original) {
									(Ke.highlights = void 0), He.push(Ke);
									continue;
								}
								const {
									score: Je,
									labelMatch: Te,
									descriptionMatch: Ee,
								} = (0, w.$fs)(Ke, Ce, !0, t.$CJ, this.s.scorerCache);
								Je &&
									((Ke.highlights = { label: Te, description: Ee }),
									He.push(Ke));
							}
						return (
							this.s.isQuickNavigating
								? (He.length > 0 &&
										He.push({
											type: "separator",
											label: (0, l.localize)(9128, null),
										}),
									(He = xe))
								: (me.includeHelp && He.push(...this.vb(Ce, ge, me)),
									xe.length !== 0 &&
										(He.push({
											type: "separator",
											label: (0, l.localize)(9129, null),
										}),
										He.push(...xe))),
							be &&
								(He = He.filter(
									(Ke) =>
										Ke.type === "separator" ||
										!("resource" in Ke) ||
										!Ke.resource ||
										!this.ab.shouldIgnoreUri(Ke.resource),
								)),
							{
								picks: me.filter ? He.filter((Ke) => me.filter?.(Ke)) : He,
								additionalPicks: (async () => {
									const Ke = new M.$Gc();
									for (const Be of xe) Be.resource && Ke.set(Be.resource, !0);
									let { highScoringPicks: Je, lowScoringPicks: Te } =
										await this.ib(
											Ce,
											Ke,
											this.eb.includeSymbols,
											me.excludeNotepads ?? !1,
											ge,
										);
									if (
										(be && ((Je = Le(Je)), (Te = Le(Te))),
										me.filter &&
											((Je = Je.filter(me.filter)),
											(Te = Te.filter(me.filter))),
										ge.isCancellationRequested)
									)
										return [];
									let Ee = [];
									const Ie = this.eb.includeSymbols
										? (0, l.localize)(9130, null)
										: (0, l.localize)(9131, null);
									return (
										me.excludeSemanticSearch
											? ((Ee = [...Je, ...Te]),
												(Ee =
													Ee.length > 0
														? [{ type: "separator", label: Ie }, ...Ee]
														: []))
											: (Je.length > 0 &&
													(Ee = [
														...Ee,
														{ type: "separator", label: Ie },
														...Je,
													]),
												Fe.length > 0
													? (Ee = [
															...Ee,
															{ type: "separator", label: pe },
															...Fe,
														])
													: Te.length > 0 &&
														(Ee = [
															...Ee,
															{ type: "separator", label: ae },
															...Te,
														])),
										Ee
									);
								})(),
								mergeDelay: oe.q,
							}
						);
					}
					async ib(fe, me, ve, ge, be) {
						const [Ce, Le, Fe] = await Promise.all([
							this.getFilePicks(fe, me, be),
							this.xb(fe, ve, be),
							ge ? [] : this.Db(fe, be),
						]);
						if (be.isCancellationRequested)
							return { highScoringPicks: [], lowScoringPicks: [] };
						const Oe = [...Ce, ...Le, ...Fe];
						Oe.sort((Se, ke) =>
							(0, w.$gs)(Se, ke, fe, !0, t.$CJ, this.s.scorerCache),
						);
						const xe = _.$I9b.HIGH_SCORING_THRESHOLD,
							He = _.$I9b.HIGH_SCORING_CAP_ITEMS,
							Ke = [],
							Je = [];
						for (const Se of Oe) {
							const {
									score: ke,
									labelMatch: Ue,
									descriptionMatch: qe,
								} = (0, w.$fs)(Se, fe, !0, t.$CJ, this.s.scorerCache),
								Ae = { ...Se, highlights: { label: Ue, description: qe } };
							if (
								(ke >= xe && Ke.length < He ? Ke.push(Ae) : Je.push(Ae),
								Ke.length + Je.length >= oe.m)
							)
								break;
						}
						const Te = oe.m,
							Ee = Math.min(Ke.length, Te),
							Ie = Math.min(Je.length, Te - Ee);
						return {
							highScoringPicks: Ke.filter((Se) => {
								const ke = [
									...(Se.highlights?.label ?? []),
									...(Se.highlights?.description ?? []),
								];
								return (fe.values?.length ?? 1) <= 1
									? Se
									: ke.reduce((qe, Ae) => qe + (Ae.end - Ae.start), 0) /
											ke.length >
											3;
							}).slice(0, Ee),
							lowScoringPicks: Je.slice(0, Ie),
						};
					}
					kb(fe) {
						const me = this.eb;
						if (!fe.normalized)
							return this.M.getHistory().map((be) => this.Bb(be, me));
						if (!this.eb.includeHistory) return [];
						const ve = fe.containsPathSeparator ? t.$CJ : this.jb,
							ge = [];
						for (const be of this.M.getHistory()) {
							const Ce = be.resource;
							if (
								!Ce ||
								(!this.C.hasProvider(Ce) &&
									Ce.scheme !== L.Schemas.untitled &&
									Ce.scheme !== L.Schemas.vscodeTerminal &&
									Ce.scheme !== L.Schemas.aiChat)
							)
								continue;
							const Le = this.Bb(be, me),
								{
									score: Fe,
									labelMatch: Oe,
									descriptionMatch: xe,
								} = (0, w.$fs)(Le, fe, !1, ve, this.s.scorerCache);
							Fe &&
								((Le.highlights = { label: Oe, description: xe }), ge.push(Le));
						}
						return this.eb.historyFilterSortOrder === "recency"
							? ge
							: ge.sort((be, Ce) =>
									(0, w.$gs)(be, Ce, fe, !1, ve, this.s.scorerCache),
								);
					}
					nb() {
						return new P.$d9b(
							(fe) =>
								this.mb.file(
									this.w.getWorkspace().folders,
									this.rb({ cacheKey: fe }),
								),
							(fe) => this.u.fileSearch(fe),
							(fe) => this.u.clearCache(fe),
							this.s.fileQueryCache,
						).load();
					}
					async getFilePicks(fe, me, ve) {
						if (!fe.normalized) return [];
						const ge = await this.sb(fe, ve);
						if (ve.isCancellationRequested) return [];
						let be;
						if (ge) {
							if (me.has(ge)) return [];
							const Le = this.Bb(ge, this.eb);
							return (
								(Le.highlights = {
									label: [{ start: 0, end: Le.label.length }],
									description: Le.description
										? [{ start: 0, end: Le.description.length }]
										: void 0,
								}),
								[Le]
							);
						}
						if (
							(this.s.fileQueryCache?.isLoaded
								? (be = await this.ob(fe, ve))
								: (be = await this.lb.trigger(async () =>
										ve.isCancellationRequested ? [] : this.ob(fe, ve),
									)),
							ve.isCancellationRequested)
						)
							return [];
						const Ce = this.eb;
						return be.filter((Le) => !me.has(Le)).map((Le) => this.Bb(Le, Ce));
					}
					async ob(fe, me) {
						const [ve, ge] = await Promise.all([
							this.pb(fe, me),
							this.tb(fe, me),
						]);
						if (me.isCancellationRequested) return [];
						if (!ge) return ve;
						const be = new M.$Gc();
						for (const Ce of ge) be.set(Ce, !0);
						return [...ve.filter((Ce) => !be.has(Ce)), ...ge];
					}
					async pb(fe, me) {
						let ve = "";
						fe.values && fe.values.length > 1
							? (ve = fe.values[0].original)
							: (ve = fe.original);
						const ge = await this.qb(ve, me);
						if (me.isCancellationRequested) return [];
						if (ge.limitHit && fe.values && fe.values.length > 1) {
							const be = await this.qb(fe.original, me);
							if (me.isCancellationRequested) return [];
							const Ce = new M.$Gc();
							for (const Le of ge.results) Ce.set(Le.resource, !0);
							for (const Le of be.results)
								Ce.has(Le.resource) || ge.results.push(Le);
						}
						return ge.results.map((be) => be.resource);
					}
					qb(fe, me) {
						const ve = Date.now();
						return this.u
							.fileSearch(
								this.mb.file(
									this.w.getWorkspace().folders,
									this.rb({
										filePattern: fe,
										cacheKey: this.s.fileQueryCache?.cacheKey,
										maxResults: oe.m,
									}),
								),
								me,
							)
							.finally(() => {
								this.U.trace(`QuickAccess fileSearch ${Date.now() - ve}ms`);
							});
					}
					rb(fe) {
						return {
							_reason: "openFileHandler",
							extraFileResources: this.t.invokeFunction(d.$P7),
							filePattern: fe.filePattern || "",
							cacheKey: fe.cacheKey,
							maxResults: fe.maxResults || 0,
							sortByScore: !0,
						};
					}
					async sb(fe, me) {
						if (!fe.containsPathSeparator) return;
						const ve = await this.y.userHome(),
							ge = (0, u.$zO)(
								fe.original,
								ve.scheme === L.Schemas.file ? ve.fsPath : ve.path,
							);
						if (me.isCancellationRequested) return;
						const be = (await this.y.path).isAbsolute(ge);
						if (!me.isCancellationRequested && be) {
							const Ce = (0, c.$xh)(
								await this.y.fileURI(ge),
								this.z.remoteAuthority,
								this.y.defaultUriScheme,
							);
							if (me.isCancellationRequested) return;
							try {
								if ((await this.C.stat(Ce)).isFile) return Ce;
							} catch {}
						}
					}
					async tb(fe, me) {
						if (!fe.containsPathSeparator) return;
						if (!(await this.y.path).isAbsolute(fe.original)) {
							const ge = [];
							for (const be of this.w.getWorkspace().folders) {
								if (me.isCancellationRequested) break;
								const Ce = (0, c.$xh)(
									be.toResource(fe.original),
									this.z.remoteAuthority,
									this.y.defaultUriScheme,
								);
								try {
									(await this.C.stat(Ce)).isFile && ge.push(Ce);
								} catch {}
							}
							return ge;
						}
					}
					vb(fe, me, ve) {
						if (fe.normalized) return [];
						const ge = this.ub.value
							.getQuickAccessProviders()
							.filter((be) =>
								be.helpEntries.some((Ce) => Ce.commandCenterOrder !== void 0),
							)
							.flatMap((be) =>
								be.helpEntries
									.filter((Ce) => Ce.commandCenterOrder !== void 0)
									.map((Ce) => {
										const Le = {
												...ve,
												includeHelp:
													be.prefix === oe.PREFIX ? !1 : ve?.includeHelp,
											},
											Fe = Ce.commandCenterLabel ?? Ce.description;
										return {
											label: Fe,
											description: Ce.prefix ?? be.prefix,
											commandCenterOrder: Ce.commandCenterOrder,
											keybinding: Ce.commandId
												? this.R.lookupKeybinding(Ce.commandId)
												: void 0,
											ariaLabel: (0, l.localize)(
												9132,
												null,
												Fe,
												Ce.description,
											),
											accept: () => {
												this.Q.quickAccess.show(be.prefix, {
													preserveValue: !0,
													providerOptions: Le,
												});
											},
										};
									}),
							);
						return (
							this.S.enabled &&
								ge.push({
									label: (0, l.localize)(9133, null),
									commandCenterOrder: 30,
									keybinding: this.R.lookupKeybinding(J.$o9b),
									accept: () => this.S.toggle(),
								}),
							ge.sort((be, Ce) => be.commandCenterOrder - Ce.commandCenterOrder)
						);
					}
					async xb(fe, me, ve) {
						return !fe.normalized || !me || this.s.lastRange
							? []
							: this.wb.getSymbolPicks(
									fe.original,
									{ skipLocal: !0, skipSorting: !0, delay: oe.n },
									ve,
								);
					}
					zb(fe, me, ve) {
						const ge = fe.original.split(O.$n9b.PREFIX),
							be = ge.length > 1 ? ge[ge.length - 1].trim() : void 0;
						if (typeof be != "string") return null;
						const Ce = this.s.lastGlobalPicks?.active;
						if (!Ce) return null;
						const Le = Ce.resource;
						return !Le ||
							(!this.C.hasProvider(Le) && Le.scheme !== L.Schemas.untitled) ||
							((Ce.label.includes(O.$n9b.PREFIX) ||
								Ce.description?.includes(O.$n9b.PREFIX)) &&
								ge.length < 3)
							? null
							: this.Ab(Ce, Le, be, me, ve);
					}
					async Ab(fe, me, ve, ge, be) {
						try {
							this.s.editorViewState.set(),
								await this.s.editorViewState.openTransientEditor({
									resource: me,
									options: {
										preserveFocus: !0,
										revealIfOpened: !0,
										ignoreError: !0,
									},
								});
						} catch {
							return [];
						}
						if (be.isCancellationRequested) return [];
						let Ce = this.G.getModel(me);
						if (!Ce)
							try {
								const Fe = ge.add(await this.O.createModelReference(me));
								if (be.isCancellationRequested) return [];
								Ce = Fe.object.textEditorModel;
							} catch {
								return [];
							}
						const Le = await this.yb.getSymbolPicks(
							Ce,
							ve,
							{ extraContainerLabel: (0, q.$$k)(fe.label) },
							ge,
							be,
						);
						return be.isCancellationRequested
							? []
							: Le.map((Fe) =>
									Fe.type === "separator"
										? Fe
										: {
												...Fe,
												resource: me,
												description: Fe.description,
												trigger: (Oe, xe) => (
													this.Cb(me, {
														keyMods: xe,
														range: Fe.range?.selection,
														forceOpenSideBySide: !0,
													}),
													i.TriggerAction.CLOSE_PICKER
												),
												accept: (Oe, xe) =>
													this.Cb(me, {
														keyMods: Oe,
														range: Fe.range?.selection,
														preserveFocus: xe.inBackground,
														forcePinned: xe.inBackground,
													}),
											},
								);
					}
					addDecorations(fe, me) {
						this.yb.addDecorations(fe, me);
					}
					clearDecorations(fe) {
						this.yb.clearDecorations(fe);
					}
					Bb(fe, me) {
						const ve = !h.URI.isUri(fe);
						let ge, be, Ce, Le, Fe, Oe;
						if ((0, v.$r1)(fe))
							(ge = v.$A1.getOriginalUri(fe)),
								(be = fe.getName()),
								(Ce = fe.getDescription()),
								(Le = fe.isDirty() && !fe.isSaving()),
								(Fe = fe.getLabelExtraClasses()),
								(Oe = fe.getIcon());
						else {
							ge = h.URI.isUri(fe) ? fe : fe.resource;
							const Je = this.W.getName(ge);
							(be = Je || (0, c.$jh)(ge)),
								(Ce = this.F.getUriLabel(Je ? ge : (0, c.$mh)(ge), {
									relative: !0,
								})),
								(Le = this.I.isDirty(ge) && !this.N.hasShortAutoSaveDelay(ge)),
								(Fe = []);
						}
						const xe = Ce ? `${be} ${Ce}` : be,
							He = new V.$Y(() =>
								(0, f.$BDb)(this.G, this.H, ge, void 0, Oe).concat(Fe),
							),
							Ke = new V.$Y(() => {
								const Je = me.openSideBySideDirection,
									Te = [];
								return (
									Te.push({
										iconClass:
											Je === "right"
												? x.ThemeIcon.asClassName(F.$ak.splitHorizontal)
												: x.ThemeIcon.asClassName(F.$ak.splitVertical),
										tooltip:
											Je === "right"
												? (0, l.localize)(9134, null)
												: (0, l.localize)(9135, null),
									}),
									ve &&
										Te.push({
											iconClass: Le
												? "dirty-anything " +
													x.ThemeIcon.asClassName(F.$ak.circleFilled)
												: x.ThemeIcon.asClassName(F.$ak.close),
											tooltip: (0, l.localize)(9136, null),
											alwaysVisible: Le,
										}),
									Te
								);
							});
						return {
							resource: ge,
							label: be,
							ariaLabel: Le ? (0, l.localize)(9137, null, xe) : xe,
							description: Ce,
							get iconClasses() {
								return He.value;
							},
							get buttons() {
								return Ke.value;
							},
							trigger: (Je, Te) => {
								switch (Je) {
									case 0:
										return (
											this.Cb(fe, {
												keyMods: Te,
												range: this.s.lastRange,
												forceOpenSideBySide: !0,
											}),
											i.TriggerAction.CLOSE_PICKER
										);
									case 1:
										if (!h.URI.isUri(fe))
											return (
												this.M.removeFromHistory(fe),
												i.TriggerAction.REMOVE_ITEM
											);
								}
								return i.TriggerAction.NO_ACTION;
							},
							accept: (Je, Te) =>
								this.Cb(fe, {
									keyMods: Je,
									range: this.s.lastRange,
									preserveFocus: Te.inBackground,
									forcePinned: Te.inBackground,
								}),
						};
					}
					async Cb(fe, me) {
						const ve = {
								preserveFocus: me.preserveFocus,
								pinned:
									me.keyMods?.ctrlCmd ||
									me.forcePinned ||
									this.eb.openEditorPinned,
								selection: me.range ? I.$iL.collapseToStart(me.range) : void 0,
							},
							ge =
								me.keyMods?.alt ||
								(this.eb.openEditorPinned && me.keyMods?.ctrlCmd) ||
								me.forceOpenSideBySide
									? S.$KY
									: S.$JY;
						if (
							(ge === S.$KY && (await this.s.editorViewState.restore()),
							(0, v.$r1)(fe))
						)
							await this.L.openEditor(fe, ve, ge);
						else {
							let be;
							h.URI.isUri(fe)
								? (be = { resource: fe, options: ve })
								: (be = { ...fe, options: { ...fe.options, ...ve } }),
								await this.L.openEditor(be, ge);
						}
					}
					async Db(fe, me) {
						if (!fe.normalized) return [];
						const ve = this.Y.notepadsData.notepads,
							ge = [];
						for (const be in ve) {
							const Ce = ve[be],
								Le = {
									notepadData: Ce,
									label: Ce.name ?? ne.$F9b,
									description: "Notepad",
									iconClass: x.ThemeIcon.asClassName(F.$ak.book),
									resource: h.URI.parse(`notepad:${be}`),
									accept: (He, Ke) =>
										this.Eb(be, {
											keyMods: He,
											preserveFocus: Ke.inBackground,
										}),
								},
								{
									score: Fe,
									labelMatch: Oe,
									descriptionMatch: xe,
								} = (0, w.$fs)(Le, fe, !0, t.$CJ, this.s.scorerCache);
							Fe &&
								((Le.highlights = { label: Oe, description: xe }), ge.push(Le));
						}
						return ge;
					}
					async Eb(fe, me) {
						await this.X.openNotepadAsEditor(fe);
					}
					Fb() {
						return (
							this.s.picker?.items?.filter(
								(me) => me.type !== "separator" && me.semSearchData !== void 0,
							) ?? []
						);
					}
					Gb(fe, me) {
						if (
							(fe.original.split(" ").length <= 1 && fe.original.length < 8) ||
							!fe.normalized
						)
							return { fast: [], slow: Promise.resolve([]) };
						const ge = performance.now();
						if (me.isCancellationRequested)
							return { fast: [], slow: Promise.resolve([]) };
						for (const Oe of this.Nb) Oe.abortC.abort();
						this.Nb = [];
						const be = new AbortController();
						this.Nb.push({
							abortC: be,
							query: fe.original,
							startTime: Date.now(),
						});
						const Ce = (Oe) => {
								const { startPosition: xe, endPosition: He } =
									Oe.codeBlock?.range ?? {};
								if (!xe || !He) return null;
								const Ke = I.$iL.lift({
									startColumn: xe.column,
									startLineNumber: xe.line,
									endColumn: He.column,
									endLineNumber: He.line,
								});
								return JSON.stringify({
									relativeWorkspacePath: Oe.codeBlock?.relativeWorkspacePath,
									range: Ke,
								});
							},
							Le = (Oe) =>
								JSON.stringify({
									relativeWorkspacePath:
										Oe.resource && this.$.asRelativePath(Oe.resource),
									range: Oe.range,
								}),
							Fe = (Oe) => {
								const xe = this.s.picker?.items;
								xe !== void 0 &&
									this.Ob(
										xe
											.filter(
												(He) => He.type !== "separator" && He.semSearchData,
											)
											.map((He) => {
												const { codeResult: Ke } = Oe;
												if (!Ke) return He;
												if (Ce(Ke) === Le(He)) {
													const Je =
															Oe.lineNumberClassification?.highlightRange,
														Te = Je
															? I.$iL.lift({
																	startColumn: Je.startColumn,
																	startLineNumber: Je.startLineNumber,
																	endColumn: Je.endColumn,
																	endLineNumber: Je.endLineNumberInclusive,
																})
															: void 0;
													return {
														...He,
														semSearchData: {
															...(He.type === "item" ? He.semSearchData : {}),
															focusLine:
																Oe.lineNumberClassification?.detailedLine
																	?.lineNumber,
															highlightRange: Te,
														},
													};
												}
												return He;
											}),
										!0,
									);
							};
						return {
							fast: this.Fb(),
							slow: (async () => {
								try {
									let Oe = [];
									if (
										(await this.cb
											.maybeRefreshConfig("semSearchInCmdP")
											.catch(() => {}),
										(this.cb.getCachedConfig("semSearchInCmdP") ?? !0) &&
											(Oe = await this.Z.search({
												query: fe.original,
												token: me,
												abortSignal: be.signal,
												updateLineNumberClassification: Fe,
											})),
										be.signal.aborted)
									)
										return this.Fb();
									console.log(
										"anythingQuickAccess.getSemanticSearchPicks latency",
										performance.now() - ge,
									);
									const He = new Map();
									for (const Ie of Oe) {
										const Be = Ie.resource.toString();
										He.has(Be) || He.set(Be, []), He.get(Be).push(Ie);
									}
									const Ke = Array.from(He.keys()).map(async (Ie) => {
											const Be = h.URI.parse(Ie),
												Se = await this.Hb(Be, me);
											return { resourceKey: Ie, outlineModel: Se };
										}),
										Je = await Promise.all(Ke),
										Te = new Map(
											Je.map(({ resourceKey: Ie, outlineModel: Be }) => [
												Ie,
												Be,
											]),
										);
									return Array.from(He.entries())
										.flatMap(([Ie, Be]) => {
											const Se = Te.get(Ie);
											return Be.map((ke) => {
												const Ue = Se ? this.Ib(Se, ke.range) : void 0;
												return {
													result: ke,
													outlineModel: Se,
													relevantLeaf: Ue,
												};
											});
										})
										.map(
											({ result: Ie, outlineModel: Be, relevantLeaf: Se }) => {
												const ke = _.$I9b.DESCRIPTION_TYPE === "resource",
													Ue = Be ? this.Mb(Be, Se) : void 0;
												return {
													resource: Ie.resource,
													label: Ie.title,
													description: ke
														? this.F.getUriLabel((0, c.$mh)(Ie.resource), {
																relative: !0,
															})
														: Ie.description,
													iconClasses: (0, f.$BDb)(this.G, this.H, Ie.resource),
													range: _.$I9b.USE_SYMBOL_RANGE
														? (Ie.symbolRange ?? Ie.range)
														: Ie.range,
													breadcrumbPath: Ue,
													semSearchData: {
														outlineModel: Be ? this.Kb(Be) : void 0,
														relevantLeaf: this.Lb(Se),
														outlineBreadcrumbs: Ue,
													},
													accept: (qe, Ae) =>
														this.Cb(Ie.resource, {
															keyMods: qe,
															range: _.$I9b.USE_SYMBOL_RANGE
																? (Ie.symbolRange ?? Ie.range)
																: Ie.range,
															preserveFocus: Ae.inBackground,
															forcePinned: Ae.inBackground,
														}),
												};
											},
										);
								} catch {
									return this.Fb();
								} finally {
									this.Nb = this.Nb.filter((Oe) => Oe.abortC !== be);
								}
							})(),
						};
					}
					async Hb(fe, me) {
						const ve = await this.O.createModelReference(fe),
							ge = ve.object.textEditorModel;
						try {
							const be = new Promise((Fe, Oe) => {
									setTimeout(
										() => Oe(new Error("Outline model loading timeout")),
										850,
									);
								}),
								Ce = Q.$8Db.create(this.bb.documentSymbolProvider, ge, me);
							return await Promise.race([Ce, be]);
						} catch (be) {
							console.warn("Failed to load outline model:", be);
							return;
						} finally {
							ve.dispose();
						}
					}
					Ib(fe, me) {
						if (!me) return;
						const ve = (ge) => {
							if (
								ge instanceof Q.$8Db ||
								ge instanceof Q.$7Db ||
								ge.children?.size > 0
							) {
								let be,
									Ce = -1;
								const Le = (ge instanceof Q.$8Db, ge.children.values());
								for (const Fe of Le)
									if (Fe instanceof Q.$6Db) {
										const Oe = ve(Fe);
										if (Oe) {
											const xe = this.Jb(Oe.symbol.range, me);
											xe > Ce && ((Ce = xe), (be = Oe));
										}
									}
								return be;
							} else if (ge instanceof Q.$6Db) return ge;
						};
						return ve(fe);
					}
					Jb(fe, me) {
						const ve = (Fe, Oe) => {
								const xe = Math.max(Fe.startLineNumber, Oe.startLineNumber),
									He = Math.min(Fe.endLineNumber, Oe.endLineNumber);
								return Math.max(0, He - xe + 1);
							},
							ge = fe.endLineNumber - fe.startLineNumber + 1,
							be = me.endLineNumber - me.startLineNumber + 1,
							Ce = ve(fe, me),
							Le = ge + be - Ce;
						return Ce / Le;
					}
					Kb(fe) {
						return {
							children: Array.from(fe.children.values())
								.filter((me) => me instanceof Q.$6Db)
								.map((me) => this.Lb(me)),
						};
					}
					Lb(fe) {
						if (fe)
							return {
								id: fe.id,
								symbol: {
									name: fe.symbol.name,
									detail: fe.symbol.detail,
									kind: fe.symbol.kind,
									range: fe.symbol.range,
									selectionRange: fe.symbol.selectionRange,
									tags: fe.symbol.tags,
								},
								children: Array.from(fe.children.values()).map((me) =>
									this.Lb(me),
								),
							};
					}
					Mb(fe, me) {
						if (!me) return;
						const ve = (Ce, Le) => {
							if (!(!Ce || !("children" in Ce)))
								for (const Fe of Array.from(Ce.children.values())) {
									if (Fe.id === Le) return Ce;
									const Oe = ve(Fe, Le);
									if (Oe) return Oe;
								}
						};
						return ((Ce, Le) => {
							const Fe = [];
							let Oe = Le;
							for (; Oe && Oe.symbol; ) Fe.unshift(Oe), (Oe = ve(Ce, Oe.id));
							return Fe;
						})(fe, me).map((Ce) => ({
							className: (0, se.$R9b)(Ce.symbol.kind),
							label: Ce.symbol.name,
						}));
					}
					dispose() {
						for (const fe of this.Nb) fe.abortC.abort();
						(this.Nb = []), super.dispose();
					}
					Ob(fe, me = !1) {
						if (this.s.picker) {
							let ve = this.s.picker.items;
							const ge = this.s.picker.activeItems,
								be = ve.indexOf(ge[0]);
							if (me) {
								ve = ve.filter(
									(Fe) =>
										!Fe.semSearchData &&
										!(Fe.type === "separator" && Fe.label === pe) &&
										Fe !== oe.j,
								);
								const Le = ve.findIndex(
									(Fe) => Fe.type === "separator" && Fe.label === ae,
								);
								Le !== -1 ? ve.splice(Le, 0, ...fe) : ve.push(...fe);
							} else ve = [...ve, ...fe];
							const Ce = ve.findIndex(
								(Le) => Le.type !== "separator" && Le.semSearchData !== void 0,
							);
							(ve.length > 1 || (ve.length === 1 && ve[0] !== oe.j)) &&
								(ve = ve.filter((Le) => Le !== oe.j)),
								(this.s.picker.items = ve),
								be <= Ce &&
									(be !== -1 && be < ve.length
										? (this.s.picker.activeItems = [ve[be]])
										: ve.length > 0 && (this.s.picker.activeItems = [ve[0]]));
						}
					}
				};
				(e.$S9b = ye),
					(e.$S9b =
						ye =
						oe =
							Ne(
								[
									j(0, C.$Li),
									j(1, m.$p7),
									j(2, r.$Vi),
									j(3, a.$I8),
									j(4, n.$r8),
									j(5, g.$ll),
									j(6, o.$3N),
									j(7, b.$QO),
									j(8, s.$nM),
									j(9, y.$gY),
									j(10, $.$gj),
									j(11, S.$IY),
									j(12, k.$Feb),
									j(13, D.$_Y),
									j(14, B.$MO),
									j(15, H.$Vl),
									j(16, t.$DJ),
									j(17, G.$uZ),
									j(18, W.$IYb),
									j(19, X.$ik),
									j(20, Y.$QIb),
									j(21, ie.$z9b),
									j(22, ie.$y9b),
									j(23, ee.$H9b),
									j(24, r.$Vi),
									j(25, te.$Q9b),
									j(26, Z.$k3),
									j(27, re.$H7b),
									j(28, le.$V7b),
								],
								ye,
							));
			},
		)
