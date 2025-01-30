import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/arraysFind.js';
import '../../../../base/common/assert.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lazy.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/model.js';
import '../../../../nls.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/observable/common/platformObservableUtils.js';
import '../../../../platform/quickinput/common/quickInput.js';
import './codeCoverageDisplayUtils.js';
import './icons.js';
import './testCoverageBars.js';
import '../common/configuration.js';
import '../common/constants.js';
import '../common/testCoverage.js';
import '../common/testCoverageService.js';
import '../common/testId.js';
import '../common/testService.js';
import '../common/testTypes.js';
import '../common/testingContextKeys.js';
define(
			de[3841],
			he([
				1, 0, 7, 198, 105, 182, 50, 214, 229, 33, 14, 94, 27, 149, 3, 77, 26, 9,
				56, 65, 38, 48, 17, 64, 4, 99, 11, 31, 10, 8, 49, 5, 39, 43, 34, 326,
				63, 1266, 470, 1335, 443, 353, 1e3, 630, 259, 379, 185, 380,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*actionViewItems*/,
				w /*actionbar*/,
				E /*iconLabels*/,
				C /*actions*/,
				d /*arraysFind*/,
				m /*assert*/,
				r /*cancellation*/,
				u /*codicons*/,
				a /*htmlContent*/,
				h /*keyCodes*/,
				c /*lazy*/,
				n /*lifecycle*/,
				g /*observable*/,
				p /*themables*/,
				o /*uri*/,
				f /*editorBrowser*/,
				b /*codeEditorService*/,
				s /*editorOptions*/,
				l /*position*/,
				y /*range*/,
				$ /*model*/,
				v /*nls*/,
				S /*actionCommonCategories*/,
				I /*actions*/,
				T /*commands*/,
				P /*configuration*/,
				k /*contextkey*/,
				L /*contextView*/,
				D /*instantiation*/,
				M /*keybinding*/,
				N /*keybindingsRegistry*/,
				A /*log*/,
				R /*platformObservableUtils*/,
				O /*quickInput*/,
				B /*codeCoverageDisplayUtils*/,
				U /*icons*/,
				z /*testCoverageBars*/,
				F /*configuration*/,
				x /*constants*/,
				H /*testCoverage*/,
				q /*testCoverageService*/,
				V /*testId*/,
				G /*testService*/,
				K /*testTypes*/,
				J /*testingContextKeys*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RKc = e.$QKc = void 0),
					(t = mt(t)),
					(B = mt(B));
				const W = "coverage-deco-hit",
					X = "coverage-deco-miss",
					Y = (0, v.localize)(10610, null),
					ie = "testing.toggleInlineCoverage",
					ne = 4;
				let ee = class extends n.$1c {
					constructor($e, ye, ue, fe, me) {
						super(),
							(this.t = $e),
							(this.u = ue),
							(this.w = me),
							(this.g = this.D(new n.$Zc())),
							(this.j = this.D(new n.$Zc())),
							(this.n = new Map()),
							(this.m = new c.$Y(() => this.D(ye.createInstance(le, this.t))));
						const ve = (0, g.observableFromEvent)(
								this,
								$e.onDidChangeModel,
								() => $e.getModel(),
							),
							ge = (0, g.observableFromEvent)(
								this,
								$e.onDidChangeConfiguration,
								(Le) => Le,
							),
							be = (0, g.derived)((Le) => {
								const Fe = ue.selected.read(Le);
								if (!Fe) return;
								const Oe = ve.read(Le);
								if (!Oe) return;
								const xe = Fe.getUri(Oe.uri);
								if (xe)
									return (
										Fe.didAddCoverage.read(Le),
										{ file: xe, testId: ue.filterToTest.read(Le) }
									);
							});
						this.D(
							(0, g.autorun)((Le) => {
								const Fe = be.read(Le);
								Fe
									? this.F(
											$e.getModel(),
											Fe.file,
											Fe.testId,
											ue.showInline.read(Le),
										)
									: this.G();
							}),
						);
						const Ce = (0, R.$Mwb)(
							F.TestingConfigKeys.CoverageToolbarEnabled,
							!0,
							fe,
						);
						this.D(
							(0, g.autorun)((Le) => {
								const Fe = be.read(Le);
								Fe && Ce.read(Le)
									? this.m.value.setCoverage(Fe.file, Fe.testId)
									: this.m.rawValue?.clearCoverage();
							}),
						),
							this.D(
								(0, g.autorun)((Le) => {
									be.read(Le) &&
										ge.read(Le)?.hasChanged(s.EditorOption.lineHeight) !== !1 &&
										this.y();
								}),
							),
							this.D(
								$e.onMouseMove((Le) => {
									const Fe = $e.getModel();
									Le.target.type === f.MouseTargetType.GUTTER_LINE_NUMBERS && Fe
										? this.C($e.getModel(), Le.target.position.lineNumber)
										: ue.showInline.get() &&
												Le.target.type === f.MouseTargetType.CONTENT_TEXT &&
												Fe
											? this.z(Fe, Le.target.position)
											: this.j.clear();
								}),
							),
							this.D(
								$e.onWillChangeModel(() => {
									const Le = $e.getModel();
									if (!(!this.s || !Le))
										for (const Fe of Le.getAllDecorations()) {
											const Oe = this.n.get(Fe.id);
											Oe && (Oe.detail.range = Fe.range);
										}
								}),
							);
					}
					y() {
						const $e = this.t.getOption(s.EditorOption.lineHeight),
							{ style: ye } = this.t.getContainerDomNode();
						ye.setProperty("--vscode-testing-coverage-lineHeight", `${$e}px`);
					}
					z($e, ye) {
						const ue = $e.getDecorationsInRange(y.$iL.fromPositions(ye)),
							fe = (0, d.$vb)(ue, ({ id: me }) =>
								this.n.has(me) ? { id: me, deco: this.n.get(me) } : void 0,
							);
						fe !== this.q &&
							(this.j.clear(),
							(this.q = fe),
							fe &&
								($e.changeDecorations((me) => {
									me.changeDecorationOptions(fe.id, {
										...fe.deco.options,
										className: `${fe.deco.options.className} coverage-deco-hovered`,
									});
								}),
								this.j.add(
									(0, n.$Yc)(() => {
										(this.q = void 0),
											$e.changeDecorations((me) => {
												me.changeDecorationOptions(fe.id, fe.deco.options);
											});
									}),
								)));
					}
					C($e, ye) {
						if (ye === this.q || !this.s) return;
						this.j.clear(), (this.q = ye);
						const ue = [{ line: ye, dir: 0 }],
							fe = new Set(),
							me = this.t.getVisibleRanges();
						if (!this.u.showInline.get()) {
							for (let ve = 0; ve < ue.length; ve++) {
								const { line: ge, dir: be } = ue[ve];
								if (
									!me.some(
										(Le) => Le.startLineNumber <= ge && Le.endLineNumber >= ge,
									)
								)
									continue;
								let Ce = !1;
								for (const Le of $e.getLineDecorations(ge))
									this.n.has(Le.id) && (fe.add(Le.id), (Ce = !0));
								Ce &&
									(be <= 0 && ue.push({ line: ge - 1, dir: -1 }),
									be >= 0 && ue.push({ line: ge + 1, dir: 1 }));
							}
							$e.changeDecorations((ve) => {
								for (const ge of fe) {
									const { applyHoverOptions: be, options: Ce } = this.n.get(ge),
										Le = { ...Ce };
									be(Le), ve.changeDecorationOptions(ge, Le);
								}
							});
						}
						this.j.add(
							this.t.onMouseLeave(() => {
								this.j.clear();
							}),
						),
							this.j.add(
								(0, n.$Yc)(() => {
									(this.q = void 0),
										$e.changeDecorations((ve) => {
											for (const ge of fe) {
												const be = this.n.get(ge);
												be && ve.changeDecorationOptions(ge, be.options);
											}
										});
								}),
							);
					}
					async F($e, ye, ue, fe) {
						const me = (this.s = await this.H(ye, ue, $e));
						if (!me) return this.G();
						this.g.clear(),
							$e.changeDecorations((ve) => {
								for (const ge of me.ranges) {
									const {
										metadata: { detail: be, description: Ce },
										range: Le,
										primary: Fe,
									} = ge;
									if (be.type === K.DetailType.Branch) {
										const Oe = be.detail.branches[be.branch].count,
											xe = Oe ? W : X,
											He =
												!Oe &&
												Le.isEmpty() &&
												be.detail.branches.some((Te) => Te.count),
											Ke = {
												showIfCollapsed: He,
												description: "coverage-gutter",
												lineNumberClassName: `coverage-deco-gutter ${xe}`,
											},
											Je = (Te) => {
												(Te.hoverMessage = Ce),
													He
														? (Te.after = {
																content: "\xA0".repeat(ne),
																inlineClassName: `coverage-deco-branch-miss-indicator ${p.ThemeIcon.asClassName(U.$OKc)}`,
																inlineClassNameAffectsLetterSpacing: !0,
																cursorStops: $.InjectedTextCursorStops.None,
															})
														: ((Te.className = `coverage-deco-inline ${xe}`),
															Fe &&
																typeof Oe == "number" &&
																(Te.before = _(Oe)));
											};
										fe && Je(Ke),
											this.n.set(ve.addDecoration(Le, Ke), {
												options: Ke,
												applyHoverOptions: Je,
												detail: ge,
											});
									} else if (be.type === K.DetailType.Statement) {
										const Oe = be.count ? W : X,
											xe = {
												showIfCollapsed: !1,
												description: "coverage-inline",
												lineNumberClassName: `coverage-deco-gutter ${Oe}`,
											},
											He = (Ke) => {
												(Ke.className = `coverage-deco-inline ${Oe}`),
													(Ke.hoverMessage = Ce),
													Fe &&
														typeof be.count == "number" &&
														(Ke.before = _(be.count));
											};
										fe && He(xe),
											this.n.set(ve.addDecoration(Le, xe), {
												options: xe,
												applyHoverOptions: He,
												detail: ge,
											});
									}
								}
							}),
							this.g.add(
								(0, n.$Yc)(() => {
									$e.changeDecorations((ve) => {
										for (const ge of this.n.keys()) ve.removeDecoration(ge);
										this.n.clear();
									});
								}),
							);
					}
					G() {
						this.f?.cancel(), (this.f = void 0), this.g.clear(), this.j.clear();
					}
					async H($e, ye, ue) {
						const fe = (this.f = new r.$Ce());
						this.g.add(this.f);
						try {
							const me = ye
								? await $e.detailsForTest(ye, this.f.token)
								: await $e.details(this.f.token);
							return fe.token.isCancellationRequested ? void 0 : new te(me, ue);
						} catch (me) {
							this.w.error("Error loading coverage details", me);
						}
					}
				};
				(e.$QKc = ee),
					(e.$QKc = ee =
						Ne([j(1, D.$Li), j(2, q.$TJc), j(3, P.$gj), j(4, A.$ik)], ee));
				const _ = (pe) => {
					if (pe !== 0)
						return {
							content: `${pe > 99 ? "99+" : pe}x`,
							cursorStops: $.InjectedTextCursorStops.None,
							inlineClassName: "coverage-deco-inline-count",
							inlineClassNameAffectsLetterSpacing: !0,
						};
				};
				class te {
					constructor($e, ye) {
						(this.details = $e), (this.ranges = []);
						const ue = $e.map((ge) => ({
							range: Z(ge.location),
							primary: !0,
							metadata: { detail: ge, description: this.describe(ge, ye) },
						}));
						for (const {
							range: ge,
							metadata: { detail: be },
						} of ue)
							if (be.type === K.DetailType.Statement && be.branches)
								for (let Ce = 0; Ce < be.branches.length; Ce++) {
									const Le = {
										type: K.DetailType.Branch,
										branch: Ce,
										detail: be,
									};
									ue.push({
										range: Z(
											be.branches[Ce].location ||
												y.$iL.fromPositions(ge.getEndPosition()),
										),
										primary: !0,
										metadata: {
											detail: Le,
											description: this.describe(Le, ye),
										},
									});
								}
						ue.sort(
							(ge, be) =>
								y.$iL.compareRangesUsingStarts(ge.range, be.range) ||
								ge.metadata.detail.type - be.metadata.detail.type,
						);
						const fe = [],
							me = (this.ranges = []),
							ve = () => {
								const ge = fe.pop(),
									be = fe[fe.length - 1];
								be &&
									(be.range = be.range.setStartPosition(
										ge.range.endLineNumber,
										ge.range.endColumn,
									)),
									me.push(ge);
							};
						for (const ge of ue) {
							const be = ge.range.getStartPosition();
							for (; fe[fe.length - 1]?.range.containsPosition(be) === !1; )
								ve();
							if (ge.range.isEmpty()) {
								me.push(ge);
								continue;
							}
							const Ce = fe[fe.length - 1];
							if (Ce) {
								const Le = Ce.primary,
									Fe = Ce.range.setEndPosition(be.lineNumber, be.column);
								(Ce.range = Ce.range.setStartPosition(
									ge.range.endLineNumber,
									ge.range.endColumn,
								)),
									(Ce.primary = !1),
									Ce.range.isEmpty() && fe.pop(),
									me.push({ range: Fe, primary: Le, metadata: Ce.metadata });
							}
							fe.push(ge);
						}
						for (; fe.length; ) ve();
					}
					describe($e, ye) {
						if ($e.type === K.DetailType.Declaration) return Q($e.name, $e);
						if ($e.type === K.DetailType.Statement) {
							const ue = re(
								ye.getValueInRange(Z($e.location)).trim() ||
									"<empty statement>",
							);
							if ($e.branches?.length) {
								const fe = $e.branches.filter((me) => !!me.count).length;
								return new a.$cl().appendMarkdown(
									(0, v.localize)(10611, null, fe, $e.branches.length, ue),
								);
							} else return Q(ue, $e);
						} else if ($e.type === K.DetailType.Branch) {
							const ue = re(
									ye.getValueInRange(Z($e.detail.location)).trim() ||
										"<empty statement>",
								),
								{ count: fe, label: me } = $e.detail.branches[$e.branch],
								ve = me ? se(me) : `#${$e.branch + 1}`;
							return fe
								? fe === !0
									? new a.$cl().appendMarkdown(
											(0, v.localize)(10613, null, ve, ue),
										)
									: new a.$cl().appendMarkdown(
											(0, v.localize)(10614, null, ve, ue, fe),
										)
								: new a.$cl().appendMarkdown(
										(0, v.localize)(10612, null, ve, ue),
									);
						}
						(0, m.$kd)($e);
					}
				}
				e.$RKc = te;
				function Q(pe, $e) {
					return new a.$cl().appendMarkdown(
						$e.count
							? typeof $e.count == "number"
								? (0, v.localize)(10616, null, pe, $e.count)
								: (0, v.localize)(10617, null, pe)
							: (0, v.localize)(10615, null, pe),
					);
				}
				function Z(pe) {
					return pe instanceof l.$hL
						? y.$iL.fromPositions(pe, new l.$hL(pe.lineNumber, 2147483647))
						: pe;
				}
				function se(pe) {
					return "`" + pe.replace(/[\n\r`]/g, "") + "`";
				}
				function re(pe) {
					return pe.length > 50 && (pe = pe.slice(0, 40) + "..."), se(pe);
				}
				let le = class extends n.$1c {
					constructor($e, ye, ue, fe, me, ve, ge, be) {
						super(),
							(this.t = $e),
							(this.u = ye),
							(this.w = ue),
							(this.y = fe),
							(this.z = me),
							(this.C = ve),
							(this.F = ge),
							(this.g = !1),
							(this.j = !1),
							(this.m = this.D(new n.$Zc())),
							(this.q = t.h("div.coverage-summary-widget", [
								t.h("div", [
									t.h("span.bars@bars"),
									t.h("span.toolbar@toolbar"),
								]),
							])),
							(this.s = this.D(
								be.createInstance(z.$VJc, {
									compact: !1,
									overall: !1,
									container: this.q.bars,
								}),
							)),
							(this.n = this.D(
								be.createInstance(w.$eib, this.q.toolbar, {
									orientation: w.ActionsOrientation.HORIZONTAL,
									actionViewItemProvider: (Ce, Le) => {
										const Fe = new ae(void 0, Ce, Le);
										return Ce instanceof oe && (Fe.themeIcon = Ce.icon), Fe;
									},
								}),
							)),
							this.D(
								(0, g.autorun)((Ce) => {
									ge.showInline.read(Ce), this.G();
								}),
							),
							this.D(
								t.$$fb(this.q.root, t.$$gb.CONTEXT_MENU, (Ce) => {
									this.w.showContextMenu({
										menuId: I.$XX.StickyScrollContext,
										getAnchor: () => Ce,
									});
								}),
							);
					}
					getId() {
						return "coverage-summary-widget";
					}
					getDomNode() {
						return this.q.root;
					}
					getPosition() {
						return {
							preference: f.OverlayWidgetPositionPreference.TOP_CENTER,
							stackOridinal: 9,
						};
					}
					clearCoverage() {
						(this.f = void 0), this.s.setCoverageInfo(void 0), this.J();
					}
					setCoverage($e, ye) {
						(this.f = { coverage: $e, testId: ye }),
							this.s.setCoverageInfo($e),
							$e ? (this.G(), this.H()) : this.J();
					}
					G() {
						this.n.clear();
						const $e = this.f;
						if (!$e) return;
						const ye = new oe(
								"toggleInline",
								this.F.showInline.get()
									? (0, v.localize)(10618, null)
									: (0, v.localize)(10619, null),
								U.$MKc,
								void 0,
								() => this.F.showInline.set(!this.F.showInline.get(), void 0),
							),
							ue = this.z.lookupKeybinding(ie);
						if (
							(ue && (ye.tooltip = `${Y} (${ue.getLabel()})`),
							this.n.push(ye),
							$e.testId)
						) {
							const fe = $e.coverage.fromResult.getTestById(
								$e.testId.toString(),
							);
							(0, m.$ld)(!!fe, "got coverage for an unreported test"),
								this.n.push(
									new oe(
										"perTestFilter",
										B.labels.showingFilterFor(fe.label),
										U.$CKc,
										void 0,
										() =>
											this.C.executeCommand(
												x.TestCommandId.CoverageFilterToTestInEditor,
												this.f,
												this.t,
											),
									),
								);
						} else
							$e.coverage.perTestData?.size &&
								this.n.push(
									new oe(
										"perTestFilter",
										(0, v.localize)(10620, null, $e.coverage.perTestData.size),
										U.$CKc,
										void 0,
										() =>
											this.C.executeCommand(
												x.TestCommandId.CoverageFilterToTestInEditor,
												this.f,
												this.t,
											),
									),
								);
						this.n.push(
							new oe(
								"rerun",
								(0, v.localize)(10621, null),
								U.$vKc,
								!this.j,
								() => this.I(),
							),
						);
					}
					H() {
						if (this.g) return;
						this.g = !0;
						let $e;
						const ye = this.m;
						this.t.addOverlayWidget(this),
							this.t.changeViewZones((ue) => {
								$e = ue.addZone({
									afterLineNumber: 0,
									afterColumn: 0,
									domNode: document.createElement("div"),
									heightInPx: 30,
									ordinal: -1,
								});
							}),
							ye.add(
								(0, n.$Yc)(() => {
									(this.g = !1),
										this.t.removeOverlayWidget(this),
										this.t.changeViewZones((ue) => {
											ue.removeZone($e);
										});
								}),
							),
							ye.add(
								this.u.onDidChangeConfiguration((ue) => {
									this.f &&
										(ue.affectsConfiguration(
											F.TestingConfigKeys.CoverageBarThresholds,
										) ||
											ue.affectsConfiguration(
												F.TestingConfigKeys.CoveragePercent,
											)) &&
										this.setCoverage(this.f.coverage, this.f.testId);
								}),
							);
					}
					I() {
						const $e = this.f;
						$e &&
							((this.j = !0),
							this.G(),
							this.y
								.runResolvedTests($e.coverage.fromResult.request)
								.finally(() => {
									(this.j = !1), this.G();
								}));
					}
					J() {
						this.m.clear();
					}
				};
				(le = Ne(
					[
						j(1, P.$gj),
						j(2, L.$Xxb),
						j(3, G.$sqc),
						j(4, M.$uZ),
						j(5, T.$ek),
						j(6, q.$TJc),
						j(7, D.$Li),
					],
					le,
				)),
					(0, I.$4X)(
						class extends I.$3X {
							constructor() {
								super({
									id: ie,
									title: (0, v.localize2)(10623, "Toggle Inline Coverage"),
									category: S.$ck.Test,
									keybinding: {
										weight: N.KeybindingWeight.WorkbenchContrib,
										primary: (0, h.$os)(
											h.KeyMod.CtrlCmd | h.KeyCode.Semicolon,
											h.KeyMod.CtrlCmd | h.KeyMod.Shift | h.KeyCode.KeyI,
										),
									},
									toggled: {
										condition: J.TestingContextKeys.inlineCoverageEnabled,
										title: (0, v.localize)(10622, null),
									},
									icon: U.$MKc,
									menu: [
										{
											id: I.$XX.CommandPalette,
											when: J.TestingContextKeys.isTestCoverageOpen,
										},
										{
											id: I.$XX.EditorTitle,
											when: k.$Kj.and(
												J.TestingContextKeys.isTestCoverageOpen,
												J.TestingContextKeys.coverageToolbarEnabled.notEqualsTo(
													!0,
												),
											),
											group: "navigation",
										},
									],
								});
							}
							run($e) {
								const ye = $e.get(q.$TJc);
								ye.showInline.set(!ye.showInline.get(), void 0);
							}
						},
					),
					(0, I.$4X)(
						class extends I.$3X {
							constructor() {
								super({
									id: x.TestCommandId.CoverageToggleToolbar,
									title: (0, v.localize2)(10624, "Test Coverage Toolbar"),
									metadata: {
										description: (0, v.localize2)(
											10625,
											"Toggle the sticky coverage bar in the editor.",
										),
									},
									category: S.$ck.Test,
									toggled: {
										condition: J.TestingContextKeys.coverageToolbarEnabled,
									},
									menu: [
										{
											id: I.$XX.CommandPalette,
											when: J.TestingContextKeys.isTestCoverageOpen,
										},
										{
											id: I.$XX.StickyScrollContext,
											when: J.TestingContextKeys.isTestCoverageOpen,
										},
										{
											id: I.$XX.EditorTitle,
											when: J.TestingContextKeys.isTestCoverageOpen,
											group: "coverage@1",
										},
									],
								});
							}
							run($e) {
								const ye = $e.get(P.$gj),
									ue = (0, F.$RJc)(
										ye,
										F.TestingConfigKeys.CoverageToolbarEnabled,
									);
								ye.updateValue(F.TestingConfigKeys.CoverageToolbarEnabled, !ue);
							}
						},
					),
					(0, I.$4X)(
						class extends I.$3X {
							constructor() {
								super({
									id: x.TestCommandId.CoverageFilterToTestInEditor,
									title: (0, v.localize2)(10626, "Filter Coverage to Test"),
									category: S.$ck.Test,
									icon: u.$ak.filter,
									toggled: {
										icon: u.$ak.filterFilled,
										condition: J.TestingContextKeys.isCoverageFilteredToTest,
									},
									menu: [
										{
											id: I.$XX.EditorTitle,
											when: k.$Kj.and(
												J.TestingContextKeys.isTestCoverageOpen,
												J.TestingContextKeys.coverageToolbarEnabled.notEqualsTo(
													!0,
												),
											),
											group: "navigation",
										},
									],
								});
							}
							run($e, ye, ue) {
								const fe = $e.get(q.$TJc),
									me = $e.get(O.$DJ),
									ve = ue ?? $e.get(b.$dtb).getActiveCodeEditor();
								let ge;
								if (ye instanceof H.$J4) ge = ye;
								else if ((0, o.$Bc)(ye))
									ge = fe.selected.get()?.getUri(o.URI.from(ye));
								else {
									const Ke = ve?.getModel()?.uri;
									ge = Ke && fe.selected.get()?.getUri(Ke);
								}
								if (!ge || !ge.perTestData?.size) return;
								const be = [...ge.perTestData].map(V.$k4.fromString),
									Ce = V.$k4.getLengthOfCommonPrefix(be.length, (Ke) => be[Ke]),
									Le = ge.fromResult,
									Fe = fe.filterToTest.get(),
									Oe = [
										{ label: B.labels.allTests, testId: void 0 },
										{ type: "separator" },
										...be.map((Ke) => ({
											label: B.$2Jc(Le, Ke, Ce),
											testId: Ke,
										})),
									],
									xe = ve?.getScrollTop() || 0,
									He = new n.$2c();
								me.pick(Oe, {
									activeItem: Oe.find((Ke) => "item" in Ke && Ke.item === ge),
									placeHolder: B.labels.pickShowCoverage,
									onDidFocus: (Ke) => {
										if (!Ke.testId)
											He.clear(),
												ve?.setScrollTop(xe),
												fe.filterToTest.set(void 0, void 0);
										else {
											const Je = (He.value = new r.$Ce());
											ge.detailsForTest(Ke.testId, Je.token).then(
												(Te) => {
													const Ee = Te.find(
														(Ie) => Ie.type === K.DetailType.Statement,
													);
													!Je.token.isCancellationRequested &&
														Ee &&
														ve?.revealLineNearTop(
															Ee.location instanceof l.$hL
																? Ee.location.lineNumber
																: Ee.location.startLineNumber,
														);
												},
												() => {},
											),
												fe.filterToTest.set(Ke.testId, void 0);
										}
									},
								}).then((Ke) => {
									Ke || ve?.setScrollTop(xe),
										He.dispose(),
										fe.filterToTest.set(Ke ? Ke.testId : Fe, void 0);
								});
							}
						},
					);
				class oe extends C.$rj {
					constructor($e, ye, ue, fe, me) {
						super($e, ye, void 0, fe, me), (this.icon = ue);
					}
				}
				class ae extends i.$_ib {
					u() {
						this.m.label &&
							this.I &&
							this.themeIcon &&
							t.$hhb(this.I, (0, E.$Tib)(this.themeIcon), this.action.label);
					}
				}
			},
		),
		