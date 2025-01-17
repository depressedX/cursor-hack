import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../../base/common/actions.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/iterator.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/marshallingIds.js';
import '../../../../../base/common/observable.js';
import '../../../../../base/common/strings.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/types.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/contextview/browser/contextView.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/list/browser/listService.js';
import '../../../../../platform/progress/common/progress.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../platform/theme/common/iconRegistry.js';
import '../explorerProjections/testItemContextOverlay.js';
import '../icons.js';
import '../testMessageColorizer.js';
import './testResultsSubject.js';
import '../../common/constants.js';
import '../../common/testCoverageService.js';
import '../../common/testExplorerFilterState.js';
import '../../common/testProfileService.js';
import '../../common/testResult.js';
import '../../common/testResultService.js';
import '../../common/testTypes.js';
import '../../common/testingContextKeys.js';
import '../../common/testingStates.js';
import '../../common/testingUri.js';
import '../../../../services/editor/common/editorService.js';
define(
			de[3843],
			he([
				1, 0, 7, 105, 182, 50, 15, 14, 6, 103, 3, 221, 77, 37, 26, 28, 4, 92,
				11, 31, 8, 49, 5, 93, 84, 32, 79, 1267, 470, 999, 1002, 353, 630, 1001,
				420, 421, 381, 185, 380, 563, 813, 18,
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
				F,
				x,
			) {
				"use strict";
				var H;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zLc = void 0),
					(t = mt(t)),
					(P = mt(P));
				class q {
					get icon() {
						return P.$PKc.get(
							this.value.completedAt === void 0
								? B.TestResultState.Running
								: (0, R.$N4)(this.value.counts),
						);
					}
					constructor(Z) {
						(this.value = Z),
							(this.changeEmitter = new m.$re()),
							(this.onDidChange = this.changeEmitter.event),
							(this.type = "result"),
							(this.context = this.value.id),
							(this.id = this.value.id),
							(this.label = this.value.name);
					}
				}
				const V = (0, p.localize)(10820, null),
					G = (0, p.localize)(10821, null);
				class K {
					get label() {
						return this.isOpen ? G : V;
					}
					get icon() {
						return this.isOpen ? I.$bP : P.$MKc;
					}
					get isOpen() {
						return this.f.selected.get()?.fromTaskId === this.task.id;
					}
					constructor(Z, se, re) {
						(this.d = Z),
							(this.task = se),
							(this.f = re),
							(this.type = "coverage"),
							(this.id = `coverage-${this.d.id}/${this.task.id}`),
							(this.onDidChange = m.Event.fromObservableLight(re.selected));
					}
				}
				class J {
					constructor(Z) {
						(this.d = Z),
							(this.type = "older"),
							(this.id = `older-${this.d}`),
							(this.onDidChange = m.Event.None),
							(this.label = (0, p.localize)(10822, null, Z));
					}
				}
				class W {
					get onDidChange() {
						return this.results instanceof R.$O4
							? m.Event.filter(
									this.results.onChange,
									(Z) => Z.item.item.extId === this.test.item.extId,
								)
							: m.Event.None;
					}
					get state() {
						return this.test.tasks[this.taskIndex].state;
					}
					get label() {
						return this.test.item.label;
					}
					get labelWithIcons() {
						return (0, w.$Sib)(this.label);
					}
					get icon() {
						return P.$PKc.get(this.state);
					}
					get outputSubject() {
						return new L.$gLc(this.results, this.taskIndex, this.test);
					}
					constructor(Z, se, re) {
						(this.results = Z),
							(this.test = se),
							(this.taskIndex = re),
							(this.type = "test"),
							(this.context = {
								$mid: a.MarshalledId.TestItemContext,
								tests: [B.InternalTestItem.serialize(this.test)],
							}),
							(this.id = `${this.results.id}/${this.test.item.extId}`);
					}
				}
				class X {
					get icon() {
						return this.results.tasks[this.index].running
							? P.$PKc.get(B.TestResultState.Running)
							: void 0;
					}
					constructor(Z, se, re) {
						(this.results = Z),
							(this.task = se),
							(this.index = re),
							(this.changeEmitter = new m.$re()),
							(this.onDidChange = this.changeEmitter.event),
							(this.type = "task"),
							(this.itemsCache = new _()),
							(this.id = `${Z.id}/${re}`),
							(this.task = Z.tasks[re]),
							(this.context = { resultId: Z.id, taskId: this.task.id }),
							(this.label = this.task.name);
					}
				}
				class Y {
					get onDidChange() {
						return this.result instanceof R.$O4
							? m.Event.filter(
									this.result.onChange,
									(Z) => Z.item.item.extId === this.test.item.extId,
								)
							: m.Event.None;
					}
					get context() {
						return (0, L.$cLc)(this.test, this.message);
					}
					get outputSubject() {
						return new L.$gLc(this.result, this.taskIndex, this.test);
					}
					constructor(Z, se, re, le) {
						(this.result = Z),
							(this.test = se),
							(this.taskIndex = re),
							(this.messageIndex = le),
							(this.type = "message");
						const oe = (this.message = se.tasks[re].messages[le]);
						(this.location = oe.location),
							(this.contextValue =
								oe.type === B.TestMessageType.Error ? oe.contextValue : void 0),
							(this.uri = (0, F.$3Kc)({
								type: F.TestUriType.ResultMessage,
								messageIndex: le,
								resultId: Z.id,
								taskIndex: re,
								testExtId: se.item.extId,
							})),
							(this.id = this.uri.toString());
						const ae = (0, k.$VKc)(oe.message),
							pe = (0, c.$pf)(
								ae.trimEnd(),
								`
`,
							);
						(this.label = te(ae)),
							pe > 0 &&
								(this.description =
									pe > 1
										? (0, p.localize)(10823, null, pe)
										: (0, p.localize)(10824, null));
					}
				}
				let ie = class extends u.$1c {
					constructor(Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(),
							(this.q = le),
							(this.f = !1),
							(this.j = this.D(new m.$re())),
							(this.onDidRequestReview = this.j.event),
							(this.h = ae.createInstance(
								ee,
								re.showRevealLocationOnMessages,
								this.j,
							));
						const fe = {
							getId(Ke) {
								return Ke.id;
							},
						};
						this.g = this.D(
							ae.createInstance(
								$.$DMb,
								"Test Output Peek",
								Z,
								{ getHeight: () => 22, getTemplateId: () => ne.ID },
								[ae.createInstance(ne, this.h)],
								{
									compressionEnabled: !0,
									hideTwistiesOfChildlessElements: !0,
									identityProvider: fe,
									sorter: {
										compare(Ke, Je) {
											return Ke instanceof W && Je instanceof W
												? (0, z.$y4)(Ke.state, Je.state)
												: 0;
										},
									},
									accessibilityProvider: {
										getAriaLabel(Ke) {
											return Ke.ariaLabel || Ke.label;
										},
										getWidgetAriaLabel() {
											return (0, p.localize)(10825, null);
										},
									},
								},
							),
						);
						const me = new _(),
							ve = (Ke) => {
								const { results: Je, index: Te, itemsCache: Ee, task: Ie } = Ke,
									Be = r.Iterable.filter(
										Je.tests,
										(ke) =>
											ke.tasks[Te].state >= B.TestResultState.Running ||
											ke.tasks[Te].messages.length > 0,
									);
								let Se = r.Iterable.map(Be, (ke) => ({
									element: Ee.getOrCreate(ke, () => new W(Je, ke, Te)),
									incompressible: !0,
									children: ge(Je, ke, Te),
								}));
								return (
									Ie.coverage.get() &&
										(Se = r.Iterable.concat(
											r.Iterable.single({
												element: new K(Je, Ie, $e),
												collapsible: !0,
												incompressible: !0,
											}),
											Se,
										)),
									Se
								);
							},
							ge = (Ke, Je, Te) =>
								Je.tasks[Te].messages
									.map((Ee, Ie) =>
										Ee.type === B.TestMessageType.Error
											? {
													element: me.getOrCreate(
														Ee,
														() => new Y(Ke, Je, Te, Ie),
													),
													incompressible: !1,
												}
											: void 0,
									)
									.filter(g.$tg),
							be = (Ke) =>
								Ke.tasks.map((Je, Te) => {
									const Ee = me.getOrCreate(Je, () => new X(Ke, Je, Te));
									return {
										element: Ee,
										incompressible: !1,
										collapsible: !0,
										children: ve(Ee),
									};
								}),
							Ce = () => {
								let Ke = [];
								const Je = [];
								for (const Te of oe.results)
									if (!Ke.length && Te.tasks.length) Ke = be(Te);
									else if (Ke) {
										const Ee = me.getOrCreate(Te, () => new q(Te));
										Je.push({
											element: Ee,
											incompressible: !0,
											collapsible: !0,
											collapsed: this.g.hasElement(Ee)
												? this.g.isCollapsed(Ee)
												: !0,
											children: be(Te),
										});
									}
								return Ke.length
									? (Je.length &&
											Ke.push({
												element: new J(Je.length),
												incompressible: !0,
												collapsible: !0,
												collapsed: !0,
												children: Je,
											}),
										Ke)
									: Je;
							},
							Le = new Set(),
							Fe = this.D(
								new C.$Yh(() => {
									for (const Ke of Le)
										this.g.hasElement(Ke) &&
											this.g.setChildren(Ke, ve(Ke), {
												diffIdentityProvider: fe,
											});
									Le.clear();
								}, 300),
							),
							Oe = (Ke) => {
								Le.add(Ke), Fe.isScheduled() || Fe.schedule();
							},
							xe = (Ke) => {
								const Je = new u.$Zc();
								Je.add(
									Ke.onNewTask((Te) => {
										this.g.setChildren(null, Ce(), {
											diffIdentityProvider: fe,
										}),
											Ke.tasks.length === 1 && this.j.fire(new L.$fLc(Ke, 0));
										const Ee = Ke.tasks[Te];
										Je.add(
											(0, h.autorun)((Ie) => {
												Ee.coverage.read(Ie), Oe(me.get(Ee));
											}),
										);
									}),
								),
									Je.add(
										Ke.onEndTask((Te) => {
											me.get(Ke.tasks[Te])?.changeEmitter.fire();
										}),
									),
									Je.add(
										Ke.onChange((Te) => {
											for (const [Ee, Ie] of Ke.tasks.entries()) {
												const Be = me.get(Ie);
												if (!this.g.hasElement(Be)) continue;
												const Se = Be.itemsCache.get(Te.item);
												if (Se && this.g.hasElement(Se)) {
													Te.reason ===
														R.TestResultItemChangeReason.NewMessage &&
														Te.message.type === B.TestMessageType.Error &&
														this.g.setChildren(Se, ge(Ke, Te.item, Ee), {
															diffIdentityProvider: fe,
														});
													return;
												}
												Oe(Be);
											}
										}),
									),
									Je.add(
										Ke.onComplete(() => {
											me.get(Ke)?.changeEmitter.fire(), Je.dispose();
										}),
									);
							};
						this.D(
							oe.onResultsChanged((Ke) => {
								this.f ||
									("completed" in Ke
										? me.get(Ke.completed)?.changeEmitter.fire()
										: "started" in Ke
											? xe(Ke.started)
											: this.g.setChildren(null, Ce(), {
													diffIdentityProvider: fe,
												}));
							}),
						);
						const He = (Ke, Je) => {
							this.g.setFocus([Ke]),
								this.g.setSelection([Ke]),
								Je || this.g.domFocus();
						};
						this.D(
							se(async ({ subject: Ke, preserveFocus: Je = !1 }) => {
								if (Ke instanceof L.$fLc) {
									const Ie = this.g
										.getNode(null)
										.children.find((Be) =>
											Be.element instanceof X
												? Be.element.results.id === Ke.result.id &&
													Be.element.index === Ke.taskIndex
												: Be.element instanceof q
													? Be.element.id === Ke.result.id
													: !1,
										);
									Ie && He(Ie.element, Je);
									return;
								}
								const Te =
									Ke instanceof L.$gLc
										? me.get(Ke.task)?.itemsCache.get(Ke.test)
										: me.get(Ke.message);
								if (!Te || !this.g.hasElement(Te)) return;
								const Ee = [];
								for (
									let Ie = this.g.getParentElement(Te);
									Ie;
									Ie = this.g.getParentElement(Ie)
								)
									Ee.unshift(Ie);
								for (const Ie of Ee) this.g.expand(Ie);
								this.g.getRelativeTop(Te) === null && this.g.reveal(Te, 0.5),
									He(Te, Je);
							}),
						),
							this.D(
								this.g.onDidOpen(async (Ke) => {
									if (Ke.element instanceof Y)
										this.j.fire(
											new L.$eLc(
												Ke.element.result,
												Ke.element.test,
												Ke.element.taskIndex,
												Ke.element.messageIndex,
											),
										);
									else if (Ke.element instanceof W) {
										const Je = Ke.element,
											Te = (0, L.$iLc)(
												Ke.element.test,
												(Ee, Ie, Be, Se) =>
													new L.$eLc(Je.results, Je.test, Se, Be),
											);
										this.j.fire(Te || new L.$gLc(Je.results, 0, Je.test));
									} else if (Ke.element instanceof K) {
										const Je = Ke.element.task;
										if (Ke.element.isOpen) return $e.closeCoverage();
										ye.withProgress({ location: re.locationForProgress }, () =>
											$e.openCoverage(Je, !0),
										);
									}
								}),
							),
							this.D(
								this.g.onDidChangeSelection((Ke) => {
									for (const Je of Ke.elements)
										if (Je && "test" in Je) {
											pe.reveal.value = Je.test.item.extId;
											break;
										}
								}),
							),
							this.D(this.g.onContextMenu((Ke) => this.r(Ke))),
							this.D(
								this.g.onDidChangeCollapseState((Ke) => {
									Ke.node.element instanceof J &&
										!Ke.node.collapsed &&
										ue.publicLog2("testing.expandOlderResults");
								}),
							),
							this.g.setChildren(null, Ce());
						for (const Ke of oe.results)
							!Ke.completedAt && Ke instanceof R.$O4 && xe(Ke);
					}
					layout(Z, se) {
						this.g.layout(Z, se);
					}
					r(Z) {
						if (!Z.element) return;
						const se = this.h.provideActionBar(Z.element);
						this.q.showContextMenu({
							getAnchor: () => Z.anchor,
							getActions: () =>
								se.secondary.length
									? [...se.primary, new E.$tj(), ...se.secondary]
									: se.primary,
							getActionsContext: () => Z.element?.context,
						});
					}
					dispose() {
						super.dispose(), (this.f = !0);
					}
				};
				(e.$zLc = ie),
					(e.$zLc = ie =
						Ne(
							[
								j(3, l.$Xxb),
								j(4, O.$Kqc),
								j(5, y.$Li),
								j(6, N.$xLc),
								j(7, M.$TJc),
								j(8, v.$8N),
								j(9, S.$km),
							],
							ie,
						));
				let ne = class {
					static {
						H = this;
					}
					static {
						this.ID = "testRunElementRenderer";
					}
					constructor(Z, se) {
						(this.d = Z), (this.f = se), (this.templateId = H.ID);
					}
					renderCompressedElements(Z, se, re) {
						const le = Z.element.elements,
							oe = le[le.length - 1];
						(oe instanceof X || oe instanceof Y) && le.length >= 2
							? this.g(le[le.length - 2], re, oe)
							: this.g(oe, re);
					}
					renderTemplate(Z) {
						const se = new u.$Zc(),
							re = t.$fhb(Z, t.$(".test-peek-item")),
							le = t.$fhb(re, t.$(".state")),
							oe = t.$fhb(re, t.$(".name")),
							ae = new i.$eib(re, {
								actionViewItemProvider: ($e, ye) =>
									$e instanceof f.$2X
										? this.f.createInstance(o.$Lyb, $e, {
												hoverDelegate: ye.hoverDelegate,
											})
										: void 0,
							}),
							pe = new u.$Zc();
						return (
							se.add(pe),
							se.add(ae),
							{
								icon: le,
								label: oe,
								actionBar: ae,
								elementDisposable: pe,
								templateDisposable: se,
							}
						);
					}
					renderElement(Z, se, re) {
						this.g(Z.element, re);
					}
					disposeTemplate(Z) {
						Z.templateDisposable.dispose();
					}
					g(Z, se, re) {
						se.elementDisposable.clear(),
							se.elementDisposable.add(Z.onDidChange(() => this.g(Z, se, re))),
							this.h(Z, se, re);
					}
					h(Z, se, re) {
						let { label: le, labelWithIcons: oe, description: ae } = Z;
						re instanceof Y && (ae = re.label);
						const pe = ae ? t.$("span.test-label-description", {}, ae) : "";
						oe ? t.$hhb(se.label, ...oe, pe) : t.$hhb(se.label, le, pe);
						const $e = Z.icon;
						se.icon.className = `computed-state ${$e ? n.ThemeIcon.asClassName($e) : ""}`;
						const ye = this.d.provideActionBar(Z);
						se.actionBar.clear(),
							(se.actionBar.context = Z.context),
							se.actionBar.push(ye.primary, { icon: !0, label: !1 });
					}
				};
				ne = H = Ne([j(1, y.$Li)], ne);
				let ee = class {
					constructor(Z, se, re, le, oe, ae, pe) {
						(this.d = Z),
							(this.f = se),
							(this.g = re),
							(this.h = le),
							(this.j = oe),
							(this.k = ae),
							(this.l = pe);
					}
					provideActionBar(Z) {
						const se = Z instanceof W ? Z.test : void 0,
							re = se ? this.k.capabilitiesForTest(se.item) : 0,
							le = [
								["peek", D.Testing.OutputPeekContributionId],
								[U.TestingContextKeys.peekItemType.key, Z.type],
							];
						let oe = f.$XX.TestPeekElement;
						const ae = [],
							pe = [];
						if (
							(Z instanceof X &&
								(ae.push(
									new E.$rj(
										"testing.outputPeek.showResultOutput",
										(0, p.localize)(10826, null),
										n.ThemeIcon.asClassName(d.$ak.terminal),
										void 0,
										() => this.f.fire(new L.$fLc(Z.results, Z.index)),
									),
								),
								Z.task.running &&
									ae.push(
										new E.$rj(
											"testing.outputPeek.cancel",
											(0, p.localize)(10827, null),
											n.ThemeIcon.asClassName(P.$BKc),
											void 0,
											() =>
												this.j.executeCommand(
													D.TestCommandId.CancelTestRunAction,
													Z.results.id,
													Z.task.id,
												),
										),
									)),
							Z instanceof q &&
								(Z.value.tasks.length === 1 &&
									ae.push(
										new E.$rj(
											"testing.outputPeek.showResultOutput",
											(0, p.localize)(10828, null),
											n.ThemeIcon.asClassName(d.$ak.terminal),
											void 0,
											() => this.f.fire(new L.$fLc(Z.value, 0)),
										),
									),
								ae.push(
									new E.$rj(
										"testing.outputPeek.reRunLastRun",
										(0, p.localize)(10829, null),
										n.ThemeIcon.asClassName(P.$uKc),
										void 0,
										() =>
											this.j.executeCommand("testing.reRunLastRun", Z.value.id),
									),
								),
								re & B.TestRunProfileBitset.Debug &&
									ae.push(
										new E.$rj(
											"testing.outputPeek.debugLastRun",
											(0, p.localize)(10830, null),
											n.ThemeIcon.asClassName(P.$yKc),
											void 0,
											() =>
												this.j.executeCommand(
													"testing.debugLastRun",
													Z.value.id,
												),
										),
									)),
							Z instanceof W || Z instanceof Y)
						) {
							le.push(
								[U.TestingContextKeys.testResultOutdated.key, Z.test.retired],
								[
									U.TestingContextKeys.testResultState.key,
									B.$l4[Z.test.ownComputedState],
								],
								...(0, T.$UKc)(Z.test, re),
							);
							const fe = Z.test.item.extId;
							Z.test.tasks[Z.taskIndex].messages.some(
								(me) => me.type === B.TestMessageType.Output,
							) &&
								ae.push(
									new E.$rj(
										"testing.outputPeek.showResultOutput",
										(0, p.localize)(10831, null),
										n.ThemeIcon.asClassName(d.$ak.terminal),
										void 0,
										() => this.f.fire(Z.outputSubject),
									),
								),
								pe.push(
									new E.$rj(
										"testing.outputPeek.revealInExplorer",
										(0, p.localize)(10832, null),
										n.ThemeIcon.asClassName(d.$ak.listTree),
										void 0,
										() => this.j.executeCommand("_revealTestInExplorer", fe),
									),
								),
								re & B.TestRunProfileBitset.Run &&
									ae.push(
										new E.$rj(
											"testing.outputPeek.runTest",
											(0, p.localize)(10833, null),
											n.ThemeIcon.asClassName(P.$uKc),
											void 0,
											() =>
												this.j.executeCommand(
													"vscode.runTestsById",
													B.TestRunProfileBitset.Run,
													fe,
												),
										),
									),
								re & B.TestRunProfileBitset.Debug &&
									ae.push(
										new E.$rj(
											"testing.outputPeek.debugTest",
											(0, p.localize)(10834, null),
											n.ThemeIcon.asClassName(P.$yKc),
											void 0,
											() =>
												this.j.executeCommand(
													"vscode.runTestsById",
													B.TestRunProfileBitset.Debug,
													fe,
												),
										),
									);
						}
						Z instanceof Y &&
							((oe = f.$XX.TestMessageContext),
							le.push([
								U.TestingContextKeys.testMessageContext.key,
								Z.contextValue,
							]),
							ae.push(
								new E.$rj(
									"testing.outputPeek.goToTest",
									(0, p.localize)(10835, null),
									n.ThemeIcon.asClassName(d.$ak.goToFile),
									void 0,
									() =>
										this.j.executeCommand(
											"vscode.revealTest",
											Z.test.item.extId,
										),
								),
							),
							this.d &&
								Z.location &&
								ae.push(
									new E.$rj(
										"testing.outputPeek.goToError",
										(0, p.localize)(10836, null),
										n.ThemeIcon.asClassName(d.$ak.goToFile),
										void 0,
										() =>
											this.l.openEditor({
												resource: Z.location.uri,
												options: {
													selection: Z.location.range,
													preserveFocus: !0,
												},
											}),
									),
								));
						const $e = this.g.createOverlay(le),
							ye = { primary: ae, secondary: pe },
							ue = this.h.getMenuActions(oe, $e, { arg: Z.context });
						return (0, o.$Kyb)(ue, ye, "inline"), ye;
					}
				};
				ee = Ne(
					[j(2, s.$6j), j(3, f.$YX), j(4, b.$ek), j(5, A.$Bqc), j(6, x.$IY)],
					ee,
				);
				class _ {
					constructor() {
						this.d = new WeakMap();
					}
					get(Z) {
						return this.d.get(Z);
					}
					getOrCreate(Z, se) {
						const re = this.d.get(Z);
						if (re) return re;
						const le = se();
						return this.d.set(Z, le), le;
					}
				}
				const te = (Q) => {
					const Z = Q.indexOf(`
`);
					return Z === -1 ? Q : Q.slice(0, Z);
				};
			},
		),
		