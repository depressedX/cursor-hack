import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/color.js';
import '../../../../base/common/event.js';
import '../../../../base/common/iconLabels.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lazy.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/strings.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../../editor/browser/widget/diffEditor/embeddedDiffEditorWidget.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/peekView/browser/peekView.js';
import '../../../../nls.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/observable/common/platformObservableUtils.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/views.js';
import './testMessageColorizer.js';
import './testResultsView/testResultsSubject.js';
import './testResultsView/testResultsViewContent.js';
import './theme.js';
import '../common/configuration.js';
import '../common/constants.js';
import '../common/observableValue.js';
import '../common/storedValue.js';
import '../common/testResult.js';
import '../common/testResultService.js';
import '../common/testService.js';
import '../common/testTypes.js';
import '../common/testingContextKeys.js';
import '../common/testingPeekOpener.js';
import '../common/testingStates.js';
import '../common/testingUri.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/views/common/viewsService.js';
define(
			de[3845],
			he([
				1, 0, 7, 127, 14, 97, 6, 274, 103, 27, 149, 3, 77, 37, 56, 46, 65, 281,
				784, 38, 17, 98, 71, 42, 255, 4, 99, 92, 11, 31, 10, 8, 49, 116, 72, 5,
				128, 39, 43, 40, 326, 41, 21, 32, 51, 35, 68, 146, 60, 999, 1002, 3844,
				1771, 443, 353, 810, 515, 421, 381, 379, 185, 380, 812, 563, 813, 18,
				89,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*aria*/,
				w /*codicons*/,
				E /*color*/,
				C /*event*/,
				d /*iconLabels*/,
				m /*iterator*/,
				r /*keyCodes*/,
				u /*lazy*/,
				a /*lifecycle*/,
				h /*observable*/,
				c /*strings*/,
				n /*editorBrowser*/,
				g /*editorExtensions*/,
				p /*codeEditorService*/,
				o /*embeddedCodeEditorWidget*/,
				f /*embeddedDiffEditorWidget*/,
				b /*editorOptions*/,
				s /*range*/,
				l /*editorCommon*/,
				y /*editorContextKeys*/,
				$ /*resolverService*/,
				v /*peekView*/,
				S /*nls*/,
				I /*actionCommonCategories*/,
				T /*menuEntryActionViewItem*/,
				P /*actions*/,
				k /*commands*/,
				L /*configuration*/,
				D /*contextkey*/,
				M /*contextView*/,
				N /*editor*/,
				A /*hover*/,
				R /*instantiation*/,
				O /*serviceCollection*/,
				B /*keybinding*/,
				U /*keybindingsRegistry*/,
				z /*notification*/,
				F /*platformObservableUtils*/,
				x /*opener*/,
				H /*storage*/,
				q /*telemetry*/,
				V /*colorRegistry*/,
				G /*themeService*/,
				K /*uriIdentity*/,
				J /*viewPane*/,
				W /*views*/,
				X /*testMessageColorizer*/,
				Y /*testResultsSubject*/,
				ie /*testResultsViewContent*/,
				ne /*theme*/,
				ee /*configuration*/,
				_ /*constants*/,
				te /*observableValue*/,
				Q /*storedValue*/,
				Z /*testResult*/,
				se /*testResultService*/,
				re /*testService*/,
				le /*testTypes*/,
				oe /*testingContextKeys*/,
				ae /*testingPeekOpener*/,
				pe /*testingStates*/,
				$e /*testingUri*/,
				ye /*editorService*/,
				ue /*viewsService*/,
) {
				"use strict";
				var fe, me;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JLc =
						e.$ILc =
						e.$HLc =
						e.$GLc =
						e.$FLc =
						e.$ELc =
						e.$DLc =
						e.$CLc =
						e.$BLc =
							void 0),
					(t = mt(t));
				function* ve(qe) {
					for (const Ae of qe)
						for (const Me of Ae.tests)
							for (let De = 0; De < Me.tasks.length; De++)
								for (let Re = 0; Re < Me.tasks[De].messages.length; Re++)
									yield {
										result: Ae,
										test: Me,
										taskIndex: De,
										messageIndex: Re,
									};
				}
				let ge = class extends a.$1c {
					constructor(Ae, Me, De, Re, je, Ve, Ze, et, rt) {
						super(),
							(this.b = Ae),
							(this.f = Me),
							(this.g = De),
							(this.h = Re),
							(this.j = je),
							(this.n = Ve),
							(this.q = Ze),
							(this.s = et),
							(this.t = rt),
							(this.historyVisible = this.D(
								te.$qqc.stored(
									new Q.$oqc(
										{
											key: "testHistoryVisibleInPeek",
											scope: H.StorageScope.PROFILE,
											target: H.StorageTarget.USER,
										},
										this.n,
									),
									!1,
								),
							)),
							this.D(Re.onTestChanged(this.y, this));
					}
					async open() {
						let Ae;
						const Me = this.f.activeTextEditorControl;
						if ((0, n.$0sb)(Me) && Me.getModel()?.uri) {
							const De = Me.getModel()?.uri;
							De && (Ae = await this.z(De, Me.getPosition()));
						}
						return (
							Ae || (Ae = this.a), Ae || (Ae = this.C()), Ae ? this.w(Ae) : !1
						);
					}
					tryPeekFirstError(Ae, Me, De) {
						const Re = this.F(Me);
						return Re
							? (this.w(
									{
										type: $e.TestUriType.ResultMessage,
										documentUri: Re.location.uri,
										taskIndex: Re.taskId,
										messageIndex: Re.index,
										resultId: Ae.id,
										testExtId: Me.item.extId,
									},
									void 0,
									{
										selection: Re.location.range,
										selectionRevealType:
											N.TextEditorSelectionRevealType.NearTopIfOutsideViewport,
										...De,
									},
								),
								!0)
							: !1;
					}
					peekUri(Ae, Me = {}) {
						const De = (0, $e.$2Kc)(Ae),
							Re = De && this.h.getResult(De.resultId);
						if (!De || !Re || !("testExtId" in De) || !("messageIndex" in De))
							return !1;
						const je = Re.getStateById(De.testExtId)?.tasks[De.taskIndex]
							.messages[De.messageIndex];
						return je?.location
							? (this.w(
									{
										type: $e.TestUriType.ResultMessage,
										documentUri: je.location.uri,
										taskIndex: De.taskIndex,
										messageIndex: De.messageIndex,
										resultId: Re.id,
										testExtId: De.testExtId,
									},
									Me.inEditor,
									{ selection: je.location.range, ...Me.options },
								),
								!0)
							: !1;
					}
					closeAllPeeks() {
						for (const Ae of this.g.listCodeEditors()) be.get(Ae)?.removePeek();
					}
					openCurrentInEditor() {
						const Ae = this.u();
						if (!Ae) return;
						const Me = { pinned: !1, revealIfOpened: !0 };
						if (Ae instanceof Y.$fLc || Ae instanceof Y.$gLc) {
							this.f.openEditor({ resource: Ae.outputUri, options: Me });
							return;
						}
						if (Ae instanceof Y.$gLc) {
							this.f.openEditor({ resource: Ae.outputUri, options: Me });
							return;
						}
						const De = Ae.message;
						Ae.isDiffable
							? this.f.openEditor({
									original: { resource: Ae.expectedUri },
									modified: { resource: Ae.actualUri },
									options: Me,
								})
							: typeof De.message == "string"
								? this.f.openEditor({ resource: Ae.messageUri, options: Me })
								: this.s
										.executeCommand("markdown.showPreview", Ae.messageUri)
										.catch((Re) => {
											this.t.error((0, S.localize)(10798, null, Re.message));
										});
					}
					u() {
						const Ae = Te(this.g);
						return (
							(Ae && be.get(Ae))?.subject ??
							this.q.getActiveViewWithId(_.Testing.ResultsViewId)?.subject
						);
					}
					async w(Ae, Me, De) {
						if ((0, n.$0sb)(Me))
							return (this.a = Ae), be.get(Me)?.show((0, $e.$3Kc)(this.a)), !0;
						const je = (
							await this.f.openEditor({
								resource: Ae.documentUri,
								options: { revealIfOpened: !0, ...De },
							})
						)?.getControl();
						return (0, n.$0sb)(je)
							? ((this.a = Ae), be.get(je)?.show((0, $e.$3Kc)(this.a)), !0)
							: !1;
					}
					y(Ae) {
						if (
							Ae.reason !== Z.TestResultItemChangeReason.OwnStateChange ||
							!this.F(Ae.item) ||
							(Ae.result.request.continuous &&
								!(0, ee.$RJc)(
									this.b,
									ee.TestingConfigKeys.AutoOpenPeekViewDuringContinuousRun,
								))
						)
							return;
						const De = this.g.listCodeEditors();
						switch (
							(0, ee.$RJc)(this.b, ee.TestingConfigKeys.AutoOpenPeekView)
						) {
							case ee.AutoOpenPeekViewWhen.FailureVisible: {
								const Ve = new Set(
									De.map((Ze) => Ze.getModel()?.uri.toString()),
								);
								if (
									!m.Iterable.some(
										(0, Z.$M4)(Ae.result, Ae.item),
										(Ze) => Ze.item.uri && Ve.has(Ze.item.uri.toString()),
									)
								)
									return;
								break;
							}
							case ee.AutoOpenPeekViewWhen.FailureAnywhere:
								break;
							default:
								return;
						}
						De.map(be.get).some((Ve) => Ve?.subject) ||
							this.tryPeekFirstError(Ae.result, Ae.item);
					}
					async z(Ae, Me) {
						let De,
							Re = 1 / 0;
						const je = Ae.toString();
						for (const Ve of this.j.collection.all) {
							const Ze = this.h.getStateById(Ve.item.extId);
							Ze &&
								(0, Y.$iLc)(Ze[1], (et, rt, ft, bt) => {
									if (
										rt.type !== le.TestMessageType.Error ||
										!rt.location ||
										rt.location.uri.toString() !== je
									)
										return;
									const nt = Me
										? Math.abs(
												Me.lineNumber - rt.location.range.startLineNumber,
											)
										: 0;
									(!De || nt <= Re) &&
										((Re = nt),
										(De = {
											type: $e.TestUriType.ResultMessage,
											testExtId: Ze[1].item.extId,
											resultId: Ze[0].id,
											taskIndex: bt,
											messageIndex: ft,
											documentUri: Ae,
										}));
								});
						}
						return De;
					}
					C() {
						const Ae = new Set();
						for (const Me of this.h.results)
							for (const De of Me.tests) {
								if (Ae.has(De.item.extId)) continue;
								Ae.add(De.item.extId);
								const Re = (0, Y.$iLc)(
									De,
									(je, Ve, Ze, et) =>
										Ve.location && {
											type: $e.TestUriType.ResultMessage,
											testExtId: De.item.extId,
											resultId: Me.id,
											taskIndex: et,
											messageIndex: Ze,
											documentUri: Ve.location.uri,
										},
								);
								if (Re) return Re;
							}
					}
					F(Ae) {
						const Me =
							Ae.item.uri && Ae.item.range
								? { uri: Ae.item.uri, range: Ae.item.range }
								: void 0;
						let De;
						return (
							(0, Y.$iLc)(Ae, (Re, je, Ve, Ze) => {
								const et = je.location || Me;
								!(0, pe.$v4)(Re.state) ||
									!et ||
									(De && je.type !== le.TestMessageType.Error) ||
									(De = { taskId: Ze, index: Ve, message: je, location: et });
							}),
							De
						);
					}
				};
				(e.$BLc = ge),
					(e.$BLc = ge =
						Ne(
							[
								j(0, L.$gj),
								j(1, ye.$IY),
								j(2, p.$dtb),
								j(3, se.$Kqc),
								j(4, re.$sqc),
								j(5, H.$lq),
								j(6, ue.$HMb),
								j(7, k.$ek),
								j(8, z.$4N),
							],
							ge,
						));
				let be = (fe = class extends a.$1c {
					static get(Ae) {
						return Ae.getContribution(_.Testing.OutputPeekContributionId);
					}
					get subject() {
						return this.a.value?.current;
					}
					constructor(Ae, Me, De, Re, je) {
						super(),
							(this.f = Ae),
							(this.g = Me),
							(this.h = De),
							(this.j = Re),
							(this.a = this.D(new a.$2c())),
							(this.b = oe.TestingContextKeys.isPeekVisible.bindTo(je)),
							this.D(Ae.onDidChangeModel(() => this.a.clear())),
							this.D(Re.onResultsChanged(this.q, this)),
							this.D(Re.onTestChanged(this.n, this));
					}
					async show(Ae) {
						const Me = this.s(Ae);
						Me && this.showSubject(Me);
					}
					async showSubject(Ae) {
						this.a.value ||
							((this.a.value = this.h.createInstance(Ce, this.f)),
							this.a.value.onDidClose(() => {
								this.b.set(!1), (this.a.value = void 0);
							}),
							this.b.set(!0),
							this.a.value.create()),
							Ae instanceof Y.$eLc &&
								(0, i.$oib)((0, X.$VKc)(Ae.message.message)),
							this.a.value.setModel(Ae);
					}
					async openAndShow(Ae) {
						const Me = this.s(Ae);
						if (!Me) return;
						if (
							!Me.revealLocation ||
							Me.revealLocation.uri.toString() ===
								this.f.getModel()?.uri.toString()
						)
							return this.show(Ae);
						const De = await this.g.openCodeEditor(
							{
								resource: Me.revealLocation.uri,
								options: { pinned: !1, revealIfOpened: !0 },
							},
							this.f,
						);
						if (De) return fe.get(De)?.removePeek(), fe.get(De)?.show(Ae);
					}
					removePeek() {
						this.a.clear();
					}
					collapseStack() {
						this.a.value?.collapseStack();
					}
					next() {
						const Ae = this.a.value?.current;
						if (!Ae) return;
						let Me = !1;
						for (const {
							messageIndex: De,
							taskIndex: Re,
							result: je,
							test: Ve,
						} of ve(this.j.results)) {
							if (
								(Ae instanceof Y.$fLc && je.id === Ae.result.id && (Me = !0),
								Me)
							) {
								this.openAndShow(
									(0, $e.$3Kc)({
										type: $e.TestUriType.ResultMessage,
										messageIndex: De,
										taskIndex: Re,
										resultId: je.id,
										testExtId: Ve.item.extId,
									}),
								);
								return;
							}
							Ae instanceof Y.$gLc &&
								Ae.test.item.extId === Ve.item.extId &&
								Ae.taskIndex === Re &&
								Ae.result.id === je.id &&
								(Me = !0),
								Ae instanceof Y.$eLc &&
									Ae.test.extId === Ve.item.extId &&
									Ae.messageIndex === De &&
									Ae.taskIndex === Re &&
									Ae.result.id === je.id &&
									(Me = !0);
						}
					}
					previous() {
						const Ae = this.a.value?.current;
						if (!Ae) return;
						let Me;
						for (const De of ve(this.j.results)) {
							if (Ae instanceof Y.$fLc) {
								if (De.result.id === Ae.result.id) break;
								continue;
							}
							if (Ae instanceof Y.$gLc) {
								if (
									De.test.item.extId === Ae.test.item.extId &&
									De.result.id === Ae.result.id &&
									De.taskIndex === Ae.taskIndex
								)
									break;
								continue;
							}
							if (
								Ae.test.extId === De.test.item.extId &&
								Ae.messageIndex === De.messageIndex &&
								Ae.taskIndex === De.taskIndex &&
								Ae.result.id === De.result.id
							)
								break;
							Me = De;
						}
						Me &&
							this.openAndShow(
								(0, $e.$3Kc)({
									type: $e.TestUriType.ResultMessage,
									messageIndex: Me.messageIndex,
									taskIndex: Me.taskIndex,
									resultId: Me.result.id,
									testExtId: Me.test.item.extId,
								}),
							);
					}
					removeIfPeekingForTest(Ae) {
						const Me = this.a.value?.current;
						Me &&
							Me instanceof Y.$eLc &&
							Me.test.extId === Ae &&
							this.a.clear();
					}
					n(Ae) {
						Ae.reason !== Z.TestResultItemChangeReason.OwnStateChange ||
							Ae.previousState === Ae.item.ownComputedState ||
							this.removeIfPeekingForTest(Ae.item.item.extId);
					}
					q(Ae) {
						"started" in Ae && this.a.clear(),
							"removed" in Ae && this.j.results.length === 0 && this.a.clear();
					}
					s(Ae) {
						const Me = (0, $e.$2Kc)(Ae);
						if (!Me) return;
						const De = this.j.results.find((et) => et.id === Me.resultId);
						if (!De) return;
						if (Me.type === $e.TestUriType.TaskOutput)
							return new Y.$fLc(De, Me.taskIndex);
						if (Me.type === $e.TestUriType.TestOutput) {
							const et = De.getStateById(Me.testExtId);
							return et ? new Y.$gLc(De, Me.taskIndex, et) : void 0;
						}
						const { testExtId: Re, taskIndex: je, messageIndex: Ve } = Me,
							Ze = De?.getStateById(Re);
						if (!(!Ze || !Ze.tasks[Me.taskIndex]))
							return new Y.$eLc(De, Ze, je, Ve);
					}
				});
				(e.$CLc = be),
					(e.$CLc =
						be =
						fe =
							Ne([j(1, p.$dtb), j(2, R.$Li), j(3, se.$Kqc), j(4, D.$6j)], be));
				let Ce = class extends v.$9Mb {
					static {
						me = this;
					}
					get current() {
						return this.d.get();
					}
					constructor(Ae, Me, De, Re, je, Ve, Ze, et, rt, ft) {
						super(
							Ae,
							{
								showFrame: !0,
								frameWidth: 1,
								showArrow: !0,
								isResizeable: !0,
								isAccessible: !0,
								className: "test-output-peek",
							},
							Ze,
						),
							(this.ab = Me),
							(this.bb = Re),
							(this.cb = je),
							(this.db = Ve),
							(this.eb = et),
							(this.fb = rt),
							(this.gb = ft),
							(this.b = this.o.add(new C.$re())),
							(this.d = (0, h.observableValue)("testPeekCurrent", void 0)),
							this.o.add(Me.onDidColorThemeChange(this.hb, this)),
							this.o.add(this.onDidClose(() => this.b.fire(!1))),
							De.addExclusiveWidget(Ae, this);
					}
					hb() {
						const Ae = this.ab.getColorTheme(),
							Me =
								this.current instanceof Y.$eLc &&
								this.current.message.type === le.TestMessageType.Error,
							De =
								(Me ? Ae.getColor(ne.$0Jc) : Ae.getColor(ne.$$Jc)) ||
								E.$UL.transparent,
							Re =
								(Me ? Ae.getColor(ne.$_Jc) : Ae.getColor(ne.$aKc)) ||
								E.$UL.transparent,
							je = Ae.getColor(V.$8P);
						this.style({
							arrowColor: De,
							frameColor: De,
							headerBackgroundColor: je && Re ? Re.makeOpaque(je) : Re,
							primaryHeadingColor: Ae.getColor(v.$$Mb),
							secondaryHeadingColor: Ae.getColor(v.$_Mb),
						});
					}
					C(Ae) {
						if (!this.Y) {
							(this.Y = this.o.add(this.cb.createScoped(Ae))),
								oe.TestingContextKeys.isInPeek.bindTo(this.Y).set(!0);
							const Me = this.o.add(
								this.M.createChild(new O.$Ki([D.$6j, this.Y])),
							);
							(this.X = this.o.add(
								Me.createInstance(ie.$ALc, this.editor, {
									historyVisible: this.bb.historyVisible,
									showRevealLocationOnMessages: !1,
									locationForProgress: _.Testing.ResultsViewId,
								}),
							)),
								this.o.add(
									this.X.onClose(() => {
										be.get(this.editor)?.removePeek();
									}),
								);
						}
						super.C(Ae);
					}
					P(Ae) {
						super.P(Ae);
						const Me = this.o.add(this.cb.createScoped(Ae));
						this.o.add(
							(0, F.$Nwb)(oe.TestingContextKeys.peekHasStack, Me, (Ve) =>
								(0, Y.$dLc)(this.d.read(Ve)),
							),
						);
						const De = this.db.createMenu(P.$XX.TestPeekTitle, Me),
							Re = this.K;
						this.o.add(
							De.onDidChange(() => {
								for (
									je.length = 0, (0, T.$Kyb)(De, void 0, je);
									Re.getAction(1);
								)
									Re.pull(0);
								Re.push(je, { label: !1, icon: !0, index: 0 });
							}),
						);
						const je = [];
						(0, T.$Kyb)(De, void 0, je),
							Re.push(je, { label: !1, icon: !0, index: 0 });
					}
					T(Ae) {
						this.X.fillBody(Ae),
							this.o.add(
								this.X.onDidRequestReveal((Me) => {
									be.get(this.editor)?.show(
										Me instanceof Y.$eLc ? Me.messageUri : Me.outputUri,
									);
								}),
							);
					}
					setModel(Ae) {
						if (Ae instanceof Y.$fLc || Ae instanceof Y.$gLc)
							return this.d.set(Ae, void 0), this.showInPlace(Ae);
						const Me = Ae.message,
							De = this.current,
							Re = Ae.revealLocation?.range.getStartPosition();
						if (!Re && !De) return Promise.resolve();
						if ((this.d.set(Ae, void 0), !Re)) return this.showInPlace(Ae);
						const je =
							me.a ||
							Math.max((0, Y.$dLc)(Ae) ? Math.ceil(this.lb() / 2) : 0, Fe(Me));
						return (
							this.show(Re, je),
							this.editor.revealRangeNearTopIfOutsideViewport(
								s.$iL.fromPositions(Re),
								l.ScrollType.Smooth,
							),
							this.showInPlace(Ae)
						);
					}
					collapseStack() {
						this.X.collapseStack();
					}
					lb() {
						return Math.round(
							this.editor.getDomNode().clientHeight /
								this.editor.getOption(b.EditorOption.lineHeight),
						);
					}
					async showInPlace(Ae) {
						if (Ae instanceof Y.$eLc) {
							const Me = Ae.message;
							this.setTitle(
								Oe((0, X.$VKc)(Me.message)),
								(0, d.$$k)(Ae.test.label),
							);
						} else this.setTitle((0, S.localize)(10799, null));
						this.hb(), await this.X.reveal({ subject: Ae, preserveFocus: !1 });
					}
					F(Ae) {
						super.F(Ae), (me.a = Ae);
					}
					W(Ae, Me) {
						super.W(Ae, Me), this.X.onLayoutBody(Ae, Me);
					}
					D(Ae) {
						super.D(Ae),
							this.Z && (this.Z = new t.$pgb(Ae, this.Z.height)),
							this.X.onWidth(Ae);
					}
				};
				Ce = me = Ne(
					[
						j(1, G.$iP),
						j(2, v.$7Mb),
						j(3, ae.$ZKc),
						j(4, D.$6j),
						j(5, P.$YX),
						j(6, R.$Li),
						j(7, $.$MO),
						j(8, p.$dtb),
						j(9, K.$Vl),
					],
					Ce,
				);
				let Le = class extends J.$TMb {
					constructor(Ae, Me, De, Re, je, Ve, Ze, et, rt, ft, bt, nt) {
						super(Ae, Me, De, Re, je, Ve, Ze, et, rt, ft, bt),
							(this.b = nt),
							(this.a = new u.$Y(() =>
								this.D(
									this.Db.createInstance(ie.$ALc, void 0, {
										historyVisible: (0, te.$pqc)(!0),
										showRevealLocationOnMessages: !0,
										locationForProgress: _.Testing.ExplorerViewId,
									}),
								),
							));
					}
					get subject() {
						return this.a.rawValue?.current;
					}
					showLatestRun(Ae = !1) {
						const Me = this.b.results.find((De) => De.tasks.length);
						Me &&
							this.a.rawValue?.reveal({
								preserveFocus: Ae,
								subject: new Y.$fLc(Me, 0),
							});
					}
					W(Ae) {
						super.W(Ae),
							this.isBodyVisible()
								? this.h(Ae)
								: this.D(
										C.Event.once(
											C.Event.filter(this.onDidChangeBodyVisibility, Boolean),
										)(() => this.h(Ae)),
									);
					}
					X(Ae, Me) {
						super.X(Ae, Me), this.a.rawValue?.onLayoutBody(Ae, Me);
					}
					h(Ae) {
						const Me = this.a.value;
						Me.fillBody(Ae),
							this.D(
								Me.onDidRequestReveal((Re) =>
									Me.reveal({ preserveFocus: !0, subject: Re }),
								),
							);
						const [De] = this.b.results;
						De &&
							De.tasks.length &&
							Me.reveal({ preserveFocus: !0, subject: new Y.$fLc(De, 0) });
					}
				};
				(e.$DLc = Le),
					(e.$DLc = Le =
						Ne(
							[
								j(1, B.$uZ),
								j(2, M.$Xxb),
								j(3, L.$gj),
								j(4, D.$6j),
								j(5, W.$K1),
								j(6, R.$Li),
								j(7, x.$7rb),
								j(8, G.$iP),
								j(9, q.$km),
								j(10, A.$Uyb),
								j(11, se.$Kqc),
							],
							Le,
						));
				const Fe = (qe) =>
						(le.ITestMessage.isDiffable(qe)
							? Math.max(xe(qe.actual), xe(qe.expected))
							: xe(
									typeof qe.message == "string" ? qe.message : qe.message.value,
								)) + 8,
					Oe = (qe) => {
						const Ae = qe.indexOf(`
`);
						return Ae === -1 ? qe : qe.slice(0, Ae);
					},
					xe = (qe) =>
						Math.min(
							(0, c.$pf)(
								qe,
								`
`,
							),
							24,
						);
				function He(qe) {
					const Ae = qe.listDiffEditors();
					for (const Me of Ae)
						if (Me.hasTextFocus() && Me instanceof f.$7mc)
							return Me.getParentEditor();
					return null;
				}
				class Ke extends g.$ktb {
					constructor() {
						super({
							id: "editor.closeTestPeek",
							title: (0, S.localize2)(10800, "Close"),
							icon: w.$ak.close,
							precondition: D.$Kj.or(
								oe.TestingContextKeys.isInPeek,
								oe.TestingContextKeys.isPeekVisible,
							),
							keybinding: {
								weight: U.KeybindingWeight.EditorContrib - 101,
								primary: r.KeyCode.Escape,
								when: D.$Kj.not("config.editor.stablePeek"),
							},
						});
					}
					runEditorCommand(Ae, Me) {
						const De = Te(Ae.get(p.$dtb));
						be.get(De ?? Me)?.removePeek();
					}
				}
				e.$ELc = Ke;
				const Je = D.$Kj.and(
						y.EditorContextKeys.focus,
						oe.TestingContextKeys.isPeekVisible,
					),
					Te = (qe) => {
						const Ae = qe.getFocusedCodeEditor() || qe.getActiveCodeEditor();
						return Ae && Ee(qe, Ae);
					},
					Ee = (qe, Ae) => {
						if (be.get(Ae)?.subject) return Ae;
						if (Ae instanceof o.$wDb) return Ae.getParentEditor();
						const Me = He(qe);
						return Me || Ae;
					};
				class Ie extends P.$3X {
					static {
						this.ID = "testing.goToNextMessage";
					}
					constructor() {
						super({
							id: Ie.ID,
							f1: !0,
							title: (0, S.localize2)(10801, "Go to Next Test Failure"),
							metadata: {
								description: (0, S.localize2)(
									10802,
									"Shows the next failure message in your file",
								),
							},
							icon: w.$ak.arrowDown,
							category: I.$ck.Test,
							keybinding: {
								primary: r.KeyMod.Alt | r.KeyCode.F8,
								weight: U.KeybindingWeight.EditorContrib + 1,
								when: Je,
							},
							menu: [
								{ id: P.$XX.TestPeekTitle, group: "navigation", order: 2 },
								{ id: P.$XX.CommandPalette, when: Je },
							],
						});
					}
					run(Ae) {
						const Me = Te(Ae.get(p.$dtb));
						Me && be.get(Me)?.next();
					}
				}
				e.$FLc = Ie;
				class Be extends P.$3X {
					static {
						this.ID = "testing.goToPreviousMessage";
					}
					constructor() {
						super({
							id: Be.ID,
							f1: !0,
							title: (0, S.localize2)(10803, "Go to Previous Test Failure"),
							metadata: {
								description: (0, S.localize2)(
									10804,
									"Shows the previous failure message in your file",
								),
							},
							icon: w.$ak.arrowUp,
							category: I.$ck.Test,
							keybinding: {
								primary: r.KeyMod.Shift | r.KeyMod.Alt | r.KeyCode.F8,
								weight: U.KeybindingWeight.EditorContrib + 1,
								when: Je,
							},
							menu: [
								{ id: P.$XX.TestPeekTitle, group: "navigation", order: 1 },
								{ id: P.$XX.CommandPalette, when: Je },
							],
						});
					}
					run(Ae) {
						const Me = Te(Ae.get(p.$dtb));
						Me && be.get(Me)?.previous();
					}
				}
				e.$GLc = Be;
				class Se extends P.$3X {
					static {
						this.ID = "testing.collapsePeekStack";
					}
					constructor() {
						super({
							id: Se.ID,
							title: (0, S.localize2)(10805, "Collapse Stack Frames"),
							icon: w.$ak.collapseAll,
							category: I.$ck.Test,
							menu: [
								{
									id: P.$XX.TestPeekTitle,
									when: oe.TestingContextKeys.peekHasStack,
									group: "navigation",
									order: 4,
								},
							],
						});
					}
					run(Ae) {
						const Me = Te(Ae.get(p.$dtb));
						Me && be.get(Me)?.collapseStack();
					}
				}
				e.$HLc = Se;
				class ke extends P.$3X {
					static {
						this.ID = "testing.openMessageInEditor";
					}
					constructor() {
						super({
							id: ke.ID,
							f1: !1,
							title: (0, S.localize2)(10806, "Open in Editor"),
							icon: w.$ak.goToFile,
							category: I.$ck.Test,
							menu: [{ id: P.$XX.TestPeekTitle }],
						});
					}
					run(Ae) {
						Ae.get(ae.$ZKc).openCurrentInEditor();
					}
				}
				e.$ILc = ke;
				class Ue extends P.$3X {
					static {
						this.ID = "testing.toggleTestingPeekHistory";
					}
					constructor() {
						super({
							id: Ue.ID,
							f1: !0,
							title: (0, S.localize2)(10807, "Toggle Test History in Peek"),
							metadata: {
								description: (0, S.localize2)(
									10808,
									"Shows or hides the history of test runs in the peek view",
								),
							},
							icon: w.$ak.history,
							category: I.$ck.Test,
							menu: [
								{ id: P.$XX.TestPeekTitle, group: "navigation", order: 3 },
							],
							keybinding: {
								weight: U.KeybindingWeight.WorkbenchContrib,
								primary: r.KeyMod.Alt | r.KeyCode.KeyH,
								when: oe.TestingContextKeys.isPeekVisible.isEqualTo(!0),
							},
						});
					}
					run(Ae) {
						const Me = Ae.get(ae.$ZKc);
						Me.historyVisible.value = !Me.historyVisible.value;
					}
				}
				e.$JLc = Ue;
			},
		)
