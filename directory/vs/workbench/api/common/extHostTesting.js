import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/buffer.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/event.js';
import '../../../base/common/functional.js';
import '../../../base/common/hash.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/marshallingIds.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../../base/common/uuid.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/log/common/log.js';
import './extHost.protocol.js';
import './extHostCommands.js';
import './extHostDocumentsAndEditors.js';
import './extHostRpcService.js';
import './extHostTestItem.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import '../../contrib/testing/common/constants.js';
import '../../contrib/testing/common/testId.js';
import '../../contrib/testing/common/testItemCollection.js';
import '../../contrib/testing/common/testTypes.js';
import '../../services/extensions/common/extensions.js';
define(
			Pe[147],
			Ne([
				1, 0, 9, 22, 23, 4, 130, 78, 3, 55, 19, 2, 38, 5, 14, 6, 44, 93, 21,
				303, 17, 11, 529, 113, 188, 114, 29,
			]),
			function (
				we,
				t,
				e,
				r,
				S,
				N,
				P,
				I,
				l,
				n,
				p,
				y,
				d,
				k,
				g,
				c,
				h,
				$,
				T,
				a,
				u,
				s,
				f,
				o,
				w,
				m,
				E,
			) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$cid = t.$bid = t.$aid = t.$_hd = t.$$hd = void 0),
					(u = tt(u));
				let R = 0;
				const C = new WeakMap();
				t.$$hd = (0, k.$Mi)("IExtHostTesting");
				let O = class extends l.$1c {
					constructor(G, fe, ae, Se) {
						super(),
							(this.z = fe),
							(this.C = ae),
							(this.F = Se),
							(this.f = this.D(new N.$re())),
							(this.g = new Map()),
							(this.q = this.D(new N.$re())),
							(this.w = new Set()),
							(this.y = new Map()),
							(this.onResultsChanged = this.f.event),
							(this.results = []),
							(this.h = G.getProxy(c.$lbb.MainThreadTesting)),
							(this.m = new Q(this.h)),
							(this.j = new b(this.h, fe)),
							ae.registerArgumentProcessor({
								processArgument: (he) => {
									switch (he?.$mid) {
										case n.MarshalledId.TestItemContext: {
											const _ = he,
												oe = _.tests[_.tests.length - 1].item.extId;
											return (
												this.g.get(o.$k4.root(oe))?.collection.tree.get(oe)
													?.actual ?? (0, a.$Ydb)(he)
											);
										}
										case n.MarshalledId.TestMessageMenuArgs: {
											const { test: _, message: oe } = he,
												ke = _.item.extId;
											return {
												test:
													this.g.get(o.$k4.root(ke))?.collection.tree.get(ke)
														?.actual ??
													(0, a.$Ydb)({
														$mid: n.MarshalledId.TestItemContext,
														tests: [_],
													}),
												message: u.TestMessage.to(oe),
											};
										}
										default:
											return he;
									}
								},
							}),
							ae.registerCommand(
								!1,
								"testing.getExplorerSelection",
								async () => {
									const he = await ae.executeCommand(
											f.TestCommandId.GetExplorerSelection,
										),
										_ = (oe) => {
											const ke = this.g.get(o.$k4.root(oe));
											if (ke)
												return o.$k4.isRoot(oe)
													? ke.controller
													: ke.collection.tree.get(oe)?.actual;
										};
									return {
										include: he?.include.map(_).filter(p.$tg) || [],
										exclude: he?.exclude.map(_).filter(p.$tg) || [],
									};
								},
							);
					}
					createTestController(G, fe, ae, Se) {
						if (this.g.has(fe))
							throw new Error(
								`Attempt to insert a duplicate controller with ID "${fe}"`,
							);
						const he = new l.$Zc(),
							_ = he.add(new a.$2db(fe, ae, this.F));
						_.root.label = ae;
						const oe = new Map(),
							ke = new Set(),
							ge = this.h,
							ee = () => {
								let de = 0;
								Se && (de |= m.TestControllerCapability.Refresh);
								const Le = ne.relatedCodeProvider;
								return (
									Le &&
										(Le?.provideRelatedTests &&
											(de |= m.TestControllerCapability.TestRelatedToCode),
										Le?.provideRelatedCode &&
											(de |= m.TestControllerCapability.CodeRelatedToTest)),
									de
								);
							},
							me = {
								items: _.root.children,
								get label() {
									return ae;
								},
								set label(de) {
									(ae = de),
										(_.root.label = de),
										ge.$updateController(fe, { label: ae });
								},
								get refreshHandler() {
									return Se;
								},
								set refreshHandler(de) {
									(Se = de), ge.$updateController(fe, { capabilities: ee() });
								},
								get id() {
									return fe;
								},
								get relatedCodeProvider() {
									return ne.relatedCodeProvider;
								},
								set relatedCodeProvider(de) {
									(0, E.$u2)(G, "testRelatedCode"),
										(ne.relatedCodeProvider = de),
										ge.$updateController(fe, { capabilities: ee() });
								},
								createRunProfile: (de, Le, Ce, je, We, pe) => {
									let Re = (0, I.$Aj)(de);
									for (; oe.has(Re); ) Re++;
									return new B(
										this.h,
										oe,
										ke,
										this.q.event,
										fe,
										Re,
										de,
										Le,
										Ce,
										je,
										We,
										pe,
									);
								},
								createTestItem(de, Le, Ce) {
									return new a.$Zdb(fe, de, Le, Ce);
								},
								createTestRun: (de, Le, Ce = !0) =>
									this.j.createTestRun(G, fe, _, de, Le, Ce),
								invalidateTestResults: (de) => {
									if (de === void 0) this.h.$markTestRetired(void 0);
									else {
										const Le = de instanceof Array ? de : [de];
										this.h.$markTestRetired(
											Le.map((Ce) =>
												o.$k4.fromExtHostTestItem(Ce, fe).toString(),
											),
										);
									}
								},
								set resolveHandler(de) {
									_.resolveHandler = de;
								},
								get resolveHandler() {
									return _.resolveHandler;
								},
								dispose: () => {
									he.dispose();
								},
							},
							ne = {
								controller: me,
								collection: _,
								profiles: oe,
								extension: G,
								activeProfiles: ke,
							};
						return (
							ge.$registerTestController(fe, ae, ee()),
							he.add((0, l.$Yc)(() => ge.$unregisterTestController(fe))),
							this.g.set(fe, ne),
							he.add((0, l.$Yc)(() => this.g.delete(fe))),
							he.add(
								_.onDidGenerateDiff((de) =>
									ge.$publishDiff(fe, de.map(m.TestsDiffOp.serialize)),
								),
							),
							me
						);
					}
					createTestObserver() {
						return this.m.checkout();
					}
					async runTests(G, fe = S.CancellationToken.None) {
						const ae = F(G);
						if (!ae)
							throw new Error(
								"The request passed to `vscode.test.runTests` must include a profile",
							);
						const Se = this.g.get(ae.controllerId);
						if (!Se) throw new Error("Controller not found");
						await this.h.$runTests(
							{
								preserveFocus: G.preserveFocus ?? !0,
								group: U[ae.kind],
								targets: [
									{
										testIds: G.include?.map((he) =>
											o.$k4
												.fromExtHostTestItem(he, Se.collection.root.id)
												.toString(),
										) ?? [Se.collection.root.id],
										profileId: ae.profileId,
										controllerId: ae.controllerId,
									},
								],
								exclude: G.exclude?.map((he) => he.id),
							},
							fe,
						);
					}
					registerTestFollowupProvider(G) {
						return (
							this.w.add(G),
							{
								dispose: () => {
									this.w.delete(G);
								},
							}
						);
					}
					async $getTestsRelatedToCode(G, fe, ae) {
						const Se = this.F.getDocument(y.URI.revive(G));
						if (!Se) return [];
						const he = u.Position.to(fe),
							_ = [];
						return (
							await Promise.all(
								[...this.g.values()].map(async (oe) => {
									let ke;
									try {
										ke = await oe.relatedCodeProvider?.provideRelatedTests?.(
											Se.document,
											he,
											ae,
										);
									} catch (ge) {
										ae.isCancellationRequested ||
											this.z.warn(
												`Error thrown while providing related tests for ${oe.controller.label}`,
												ge,
											);
									}
									if (ke) {
										for (const ge of ke)
											_.push(
												o.$k4
													.fromExtHostTestItem(ge, oe.controller.id)
													.toString(),
											);
										oe.collection.flushDiff();
									}
								}),
							),
							_
						);
					}
					async $getCodeRelatedToTest(G, fe) {
						const ae = this.g.get(o.$k4.root(G));
						if (!ae) return [];
						const Se = ae.collection.tree.get(G);
						return Se
							? ((
									await ae.relatedCodeProvider?.provideRelatedCode?.(
										Se.actual,
										fe,
									)
								)?.map(u.location.from) ?? [])
							: [];
					}
					$syncTests() {
						for (const { collection: G } of this.g.values()) G.flushDiff();
						return Promise.resolve();
					}
					async $getCoverageDetails(G, fe, ae) {
						return (await this.j.getCoverageDetails(G, fe, ae))?.map(
							u.TestCoverage.fromDetails,
						);
					}
					async $disposeRun(G) {
						this.j.disposeTestRun(G);
					}
					$configureRunProfile(G, fe) {
						this.g.get(G)?.profiles.get(fe)?.configureHandler?.();
					}
					$setDefaultRunProfiles(G) {
						const fe = new Map();
						for (const [ae, Se] of Object.entries(G)) {
							const he = this.g.get(ae);
							if (!he) continue;
							const _ = new Map(),
								oe = Se.filter((ge) => !he.activeProfiles.has(ge)),
								ke = [...he.activeProfiles].filter((ge) => !Se.includes(ge));
							for (const ge of oe) _.set(ge, !0), he.activeProfiles.add(ge);
							for (const ge of ke) _.set(ge, !1), he.activeProfiles.delete(ge);
							_.size && fe.set(ae, _);
						}
						this.q.fire(fe);
					}
					async $refreshTests(G, fe) {
						await this.g.get(G)?.controller.refreshHandler?.(fe);
					}
					$publishTestResults(G) {
						(this.results = Object.freeze(
							G.map((fe) => {
								const ae = u.TestResults.to(fe),
									Se = fe.tasks.findIndex((he) => he.hasCoverage);
								return (
									Se !== -1 &&
										(ae.getDetailedCoverage = (
											he,
											_ = S.CancellationToken.None,
										) =>
											this.h
												.$getCoverageDetails(fe.id, Se, he, _)
												.then((oe) => oe.map(u.TestCoverage.to))),
									C.set(ae, fe.id),
									ae
								);
							})
								.concat(this.results)
								.sort((fe, ae) => ae.completedAt - fe.completedAt)
								.slice(0, 32),
						)),
							this.f.fire();
					}
					async $expandTest(G, fe) {
						const ae = this.g.get(o.$k4.fromString(G).controllerId)?.collection;
						ae && (await ae.expand(G, fe < 0 ? 1 / 0 : fe), ae.flushDiff());
					}
					$acceptDiff(G) {
						this.m.applyDiff(
							G.map((fe) =>
								m.TestsDiffOp.deserialize({ asCanonicalUri: (ae) => ae }, fe),
							),
						);
					}
					async $runControllerTests(G, fe) {
						return Promise.all(G.map((ae) => this.G(ae, !1, fe)));
					}
					async $startContinuousRun(G, fe) {
						const ae = new S.$Ce(fe),
							Se = await Promise.all(G.map((he) => this.G(he, !0, ae.token)));
						return (
							!fe.isCancellationRequested &&
								!Se.some((he) => he.error) &&
								(await new Promise((he) => fe.onCancellationRequested(he))),
							ae.dispose(!0),
							Se
						);
					}
					async $provideTestFollowups(G, fe) {
						const ae = this.results.find((_) => C.get(_) === G.resultId),
							Se = ae && Z(o.$k4.fromString(G.extId), ae?.results);
						if (!Se) return [];
						let he = [];
						return (
							await Promise.all(
								[...this.w].map(async (_) => {
									try {
										const oe = await _.provideFollowup(
											ae,
											Se,
											G.taskIndex,
											G.messageIndex,
											fe,
										);
										oe && (he = he.concat(oe));
									} catch (oe) {
										this.z.error(
											"Error thrown while providing followup for test message",
											oe,
										);
									}
								}),
							),
							fe.isCancellationRequested
								? []
								: he.map((_) => {
										const oe = R++;
										return this.y.set(oe, _), { title: _.title, id: oe };
									})
						);
					}
					$disposeTestFollowups(G) {
						for (const fe of G) this.y.delete(fe);
					}
					$executeTestFollowup(G) {
						const fe = this.y.get(G);
						return fe
							? this.C.executeCommand(fe.command, ...(fe.arguments || []))
							: Promise.resolve();
					}
					$cancelExtensionTestRun(G, fe) {
						G === void 0 ? this.j.cancelAllRuns() : this.j.cancelRunById(G, fe);
					}
					getMetadataForRun(G) {
						for (const fe of this.j.trackers) {
							const ae = fe.getTaskIdForRun(G);
							if (ae) return { taskId: ae, runId: fe.id };
						}
					}
					async G(G, fe, ae) {
						const Se = this.g.get(G.controllerId);
						if (!Se) return {};
						const { collection: he, profiles: _, extension: oe } = Se,
							ke = _.get(G.profileId);
						if (!ke) return {};
						const ge = G.testIds.map((de) => he.tree.get(de)).filter(p.$tg),
							ee = G.excludeExtIds
								.map((de) => Se.collection.tree.get(de))
								.filter(p.$tg)
								.filter((de) =>
									ge.some(
										(Le) =>
											Le.fullId.compare(de.fullId) === o.TestPosition.IsChild,
									),
								);
						if (!ge.length) return {};
						const me = new s.$3cb(
								ge.some((de) => de.actual instanceof a.$1db)
									? void 0
									: ge.map((de) => de.actual),
								ee.map((de) => de.actual),
								ke,
								fe,
							),
							ne =
								(0, m.$n4)(G) &&
								this.j.prepareForMainThreadTestRun(
									oe,
									me,
									D.fromInternal(G, Se.collection),
									ke,
									ae,
								);
						try {
							return await ke.runHandler(me, ae), {};
						} catch (de) {
							return { error: String(de) };
						} finally {
							ne &&
								ne.hasRunningTasks &&
								!ae.isCancellationRequested &&
								(await N.Event.toPromise(ne.onEnd));
						}
					}
				};
				(t.$_hd = O),
					(t.$_hd = O =
						wt([rt(0, T.$08), rt(1, g.$ik), rt(2, h.$8db), rt(3, $.$Xdb)], O));
				const A = 1e4;
				var J;
				(function (W) {
					(W[(W.Running = 0)] = "Running"),
						(W[(W.Cancelling = 1)] = "Cancelling"),
						(W[(W.Ended = 2)] = "Ended");
				})(J || (J = {}));
				class L extends l.$1c {
					get hasRunningTasks() {
						return this.g > 0;
					}
					get id() {
						return this.z.id;
					}
					constructor(G, fe, ae, Se, he, _) {
						super(),
							(this.z = G),
							(this.C = fe),
							(this.F = ae),
							(this.G = Se),
							(this.H = he),
							(this.f = J.Running),
							(this.g = 0),
							(this.h = new Map()),
							(this.j = new Set()),
							(this.q = this.D(new N.$re())),
							(this.y = new Map()),
							(this.onEnd = this.q.event),
							(this.m = this.D(new S.$Ce(_)));
						const oe = this.D(new e.$Yh(() => this.I(), A));
						this.D(this.m.token.onCancellationRequested(() => oe.schedule()));
						const ke = new N.$re();
						(this.w = ke.event),
							this.D(
								(0, l.$Yc)(() => {
									ke.fire(), ke.dispose();
								}),
							);
					}
					getTaskIdForRun(G) {
						for (const [fe, { run: ae }] of this.h) if (ae === G) return fe;
					}
					cancel(G) {
						G
							? this.h.get(G)?.cts.cancel()
							: this.f === J.Running
								? (this.m.cancel(), (this.f = J.Cancelling))
								: this.f === J.Cancelling && this.I();
					}
					async getCoverageDetails(G, fe, ae) {
						const [, Se] = o.$k4.fromString(G).path,
							he = this.y.get(G);
						if (!he) return [];
						const { report: _, extIds: oe } = he,
							ke = this.h.get(Se);
						if (!ke) throw new Error("unreachable: run task was not found");
						let ge;
						if (fe && _ instanceof s.$9cb) {
							const me = oe.indexOf(fe);
							if (me === -1) return [];
							ge = _.fromTests[me];
						}
						return (
							(await (ge
								? this.G?.loadDetailedCoverageForTest?.(ke.run, _, ge, ae)
								: this.G?.loadDetailedCoverage?.(ke.run, _, ae))) ?? []
						);
					}
					createRun(G) {
						const fe = this.z.id,
							ae = this.z.controllerId,
							Se = (0, d.$9g)(),
							he =
								(ee) =>
								(me, ...ne) => {
									if (oe) {
										this.F.warn(
											`Setting the state of test "${me.id}" is a no-op after the run ends.`,
										);
										return;
									}
									this.L(me), ee(me, ...ne);
								},
							_ = (ee, me) => {
								const ne =
									me instanceof Array
										? me.map(u.TestMessage.from)
										: [u.TestMessage.from(me)];
								if (ee.uri && ee.range) {
									const de = { range: u.Range.from(ee.range), uri: ee.uri };
									for (const Le of ne) Le.location = Le.location || de;
								}
								this.C.$appendTestMessagesInRun(
									fe,
									Se,
									o.$k4.fromExtHostTestItem(ee, ae).toString(),
									ne,
								);
							};
						let oe = !1;
						const ke = this.D(new S.$Ce(this.m.token)),
							ge = {
								isPersisted: this.z.isPersisted,
								token: ke.token,
								name: G,
								onDidDispose: this.w,
								addCoverage: (ee) => {
									if (oe) return;
									const me = ee instanceof s.$9cb ? ee.fromTests : [];
									if (me.length) {
										(0, E.$u2)(this.H, "attributableCoverage");
										for (const Le of me) this.L(Le);
									}
									const ne = ee.uri.toString(),
										de = new o.$k4([fe, Se, ne]).toString();
									this.y.set(de, {
										report: ee,
										extIds: me.map((Le) =>
											o.$k4.fromExtHostTestItem(Le, ae).toString(),
										),
									}),
										this.C.$appendCoverage(
											fe,
											Se,
											u.TestCoverage.fromFile(ae, de, ee),
										);
								},
								enqueued: he((ee) => {
									this.C.$updateTestStateInRun(
										fe,
										Se,
										o.$k4.fromExtHostTestItem(ee, ae).toString(),
										m.TestResultState.Queued,
									);
								}),
								skipped: he((ee) => {
									this.C.$updateTestStateInRun(
										fe,
										Se,
										o.$k4.fromExtHostTestItem(ee, ae).toString(),
										m.TestResultState.Skipped,
									);
								}),
								started: he((ee) => {
									this.C.$updateTestStateInRun(
										fe,
										Se,
										o.$k4.fromExtHostTestItem(ee, ae).toString(),
										m.TestResultState.Running,
									);
								}),
								errored: he((ee, me, ne) => {
									_(ee, me),
										this.C.$updateTestStateInRun(
											fe,
											Se,
											o.$k4.fromExtHostTestItem(ee, ae).toString(),
											m.TestResultState.Errored,
											ne,
										);
								}),
								failed: he((ee, me, ne) => {
									_(ee, me),
										this.C.$updateTestStateInRun(
											fe,
											Se,
											o.$k4.fromExtHostTestItem(ee, ae).toString(),
											m.TestResultState.Failed,
											ne,
										);
								}),
								passed: he((ee, me) => {
									this.C.$updateTestStateInRun(
										fe,
										Se,
										o.$k4
											.fromExtHostTestItem(ee, this.z.controllerId)
											.toString(),
										m.TestResultState.Passed,
										me,
									);
								}),
								appendOutput: (ee, me, ne) => {
									oe ||
										(ne && this.L(ne),
										this.C.$appendOutputToRun(
											fe,
											Se,
											r.$Te.fromString(ee),
											me && u.location.from(me),
											ne && o.$k4.fromExtHostTestItem(ne, ae).toString(),
										));
								},
								end: () => {
									oe ||
										((oe = !0),
										this.C.$finishedTestRunTask(fe, Se),
										--this.g || this.J());
								},
							};
						return (
							this.g++,
							this.h.set(Se, { run: ge, cts: ke }),
							this.C.$startedTestRunTask(fe, {
								id: Se,
								ctrlId: this.z.controllerId,
								name: G || this.H.displayName || this.H.identifier.value,
								running: !0,
							}),
							ge
						);
					}
					I() {
						for (const { run: G } of this.h.values()) G.end();
					}
					J() {
						this.f !== J.Ended && ((this.f = J.Ended), this.q.fire());
					}
					L(G) {
						if (!(G instanceof a.$Zdb)) throw new w.$b9(G.id);
						if (
							this.j.has(
								o.$k4.fromExtHostTestItem(G, this.z.controllerId).toString(),
							)
						)
							return;
						const fe = [],
							ae = this.z.colllection.root;
						for (;;) {
							const Se = u.TestItem.from(G);
							if (
								(fe.unshift(Se),
								this.j.has(Se.extId) || (this.j.add(Se.extId), G === ae))
							)
								break;
							G = G.parent || ae;
						}
						this.C.$addTestsToRun(this.z.controllerId, this.z.id, fe);
					}
					dispose() {
						this.J(), super.dispose();
					}
				}
				class b {
					get trackers() {
						return this.f.values();
					}
					constructor(G, fe) {
						(this.h = G),
							(this.j = fe),
							(this.f = new Map()),
							(this.g = new Map());
					}
					getCoverageDetails(G, fe, ae) {
						const Se = o.$k4.root(G);
						return this.g.get(Se)?.getCoverageDetails(G, fe, ae) || [];
					}
					disposeTestRun(G) {
						this.g.get(G)?.dispose(), this.g.delete(G);
						for (const [fe, { id: ae }] of this.f)
							ae === G && this.f.delete(fe);
					}
					prepareForMainThreadTestRun(G, fe, ae, Se, he) {
						return this.k(fe, ae, Se, G, he);
					}
					cancelRunById(G, fe) {
						this.g.get(G)?.cancel(fe);
					}
					cancelAllRuns() {
						for (const G of this.f.values()) G.cancel();
					}
					createTestRun(G, fe, ae, Se, he, _) {
						const oe = this.f.get(Se);
						if (oe) return oe.createRun(he);
						const ke = D.fromPublic(fe, ae, Se, _),
							ge = F(Se);
						this.h.$startedExtensionTestRun({
							controllerId: fe,
							continuous: !!Se.continuous,
							profile: ge && { group: U[ge.kind], id: ge.profileId },
							exclude:
								Se.exclude?.map((me) =>
									o.$k4.fromExtHostTestItem(me, ae.root.id).toString(),
								) ?? [],
							id: ke.id,
							include: Se.include?.map((me) =>
								o.$k4.fromExtHostTestItem(me, ae.root.id).toString(),
							) ?? [ae.root.id],
							preserveFocus: Se.preserveFocus ?? !0,
							persist: _,
						});
						const ee = this.k(Se, ke, Se.profile, G);
						return (
							N.Event.once(ee.onEnd)(() => {
								this.h.$finishedExtensionTestRun(ke.id);
							}),
							ee.createRun(he)
						);
					}
					k(G, fe, ae, Se, he) {
						const _ = new L(fe, this.h, this.j, ae, Se, he);
						return this.f.set(G, _), this.g.set(_.id, _), _;
					}
				}
				t.$aid = b;
				const F = (W) => {
					if (W.profile) {
						if (!(W.profile instanceof B))
							throw new Error(
								"TestRunRequest.profile is not an instance created from TestController.createRunProfile",
							);
						return W.profile;
					}
				};
				class D {
					static fromPublic(G, fe, ae, Se) {
						return new D(G, (0, d.$9g)(), Se, fe);
					}
					static fromInternal(G, fe) {
						return new D(G.controllerId, G.runId, !0, fe);
					}
					constructor(G, fe, ae, Se) {
						(this.controllerId = G),
							(this.id = fe),
							(this.isPersisted = ae),
							(this.colllection = Se);
					}
				}
				t.$bid = D;
				class M {
					get isEmpty() {
						return this.f.size === 0 && this.h.size === 0 && this.g.size === 0;
					}
					constructor(G) {
						(this.k = G),
							(this.f = new Set()),
							(this.g = new Set()),
							(this.h = new Set()),
							(this.j = new Set());
					}
					add(G) {
						this.f.add(G);
					}
					update(G) {
						Object.assign(G.revived, u.TestItem.toPlain(G.item)),
							this.f.has(G) || this.g.add(G);
					}
					remove(G) {
						if (this.f.has(G)) {
							this.f.delete(G);
							return;
						}
						this.g.delete(G);
						const fe = o.$k4.parentId(G.item.extId);
						if (fe && this.j.has(fe.toString())) {
							this.j.add(G.item.extId);
							return;
						}
						this.h.add(G);
					}
					getChangeEvent() {
						const { f: G, g: fe, h: ae } = this;
						return {
							get added() {
								return [...G].map((Se) => Se.revived);
							},
							get updated() {
								return [...fe].map((Se) => Se.revived);
							},
							get removed() {
								return [...ae].map((Se) => Se.revived);
							},
						};
					}
					complete() {
						this.isEmpty || this.k.fire(this.getChangeEvent());
					}
				}
				class z extends m.$t4 {
					constructor() {
						super(...arguments),
							(this.z = new N.$re()),
							(this.onDidChangeTests = this.z.event);
					}
					get rootTests() {
						return this.h;
					}
					getMirroredTestDataById(G) {
						return this.g.get(G);
					}
					getMirroredTestDataByReference(G) {
						return this.g.get(G.id);
					}
					y(G, fe) {
						return {
							...G,
							revived: u.TestItem.toPlain(G.item),
							depth: fe ? fe.depth + 1 : 0,
							children: new Set(),
						};
					}
					x() {
						return new M(this.z);
					}
				}
				class Q {
					constructor(G) {
						this.g = G;
					}
					checkout() {
						this.f || (this.f = this.h());
						const G = this.f;
						return (
							G.observers++,
							{
								onDidChangeTest: G.tests.onDidChangeTests,
								get tests() {
									return [...G.tests.rootTests].map((fe) => fe.revived);
								},
								dispose: (0, P.$hb)(() => {
									--G.observers === 0 &&
										(this.g.$unsubscribeFromDiffs(), (this.f = void 0));
								}),
							}
						);
					}
					getMirroredTestDataByReference(G) {
						return this.f?.tests.getMirroredTestDataByReference(G);
					}
					applyDiff(G) {
						this.f?.tests.apply(G);
					}
					h() {
						const G = new z({ asCanonicalUri: (fe) => fe });
						return this.g.$subscribeToDiffs(), { observers: 0, tests: G };
					}
				}
				const H = (W, G, fe, ae) => {
					fe
						? Object.assign(fe, ae)
						: G.$updateTestRunConfig(W.controllerId, W.profileId, ae);
				};
				class B {
					#e;
					#t;
					#n;
					#i;
					#r;
					get label() {
						return this.g;
					}
					set label(G) {
						G !== this.g &&
							((this.g = G), H(this, this.#e, this.#i, { label: G }));
					}
					get supportsContinuousRun() {
						return this.h;
					}
					set supportsContinuousRun(G) {
						G !== this.h &&
							((this.h = G),
							H(this, this.#e, this.#i, { supportsContinuousRun: G }));
					}
					get isDefault() {
						return this.#t.has(this.profileId);
					}
					set isDefault(G) {
						G !== this.isDefault &&
							(G ? this.#t.add(this.profileId) : this.#t.delete(this.profileId),
							H(this, this.#e, this.#i, { isDefault: G }));
					}
					get tag() {
						return this._tag;
					}
					set tag(G) {
						G?.id !== this._tag?.id &&
							((this._tag = G),
							H(this, this.#e, this.#i, {
								tag: G ? u.TestTag.namespace(this.controllerId, G.id) : null,
							}));
					}
					get configureHandler() {
						return this.f;
					}
					set configureHandler(G) {
						G !== this.f &&
							((this.f = G),
							H(this, this.#e, this.#i, { hasConfigurationHandler: !!G }));
					}
					get onDidChangeDefault() {
						return N.Event.chain(this.#n, (G) =>
							G.map((fe) =>
								fe.get(this.controllerId)?.get(this.profileId),
							).filter(p.$tg),
						);
					}
					constructor(
						G,
						fe,
						ae,
						Se,
						he,
						_,
						oe,
						ke,
						ge,
						ee = !1,
						me = void 0,
						ne = !1,
					) {
						(this.controllerId = he),
							(this.profileId = _),
							(this.g = oe),
							(this.kind = ke),
							(this.runHandler = ge),
							(this._tag = me),
							(this.h = ne),
							(this.#e = G),
							(this.#r = fe),
							(this.#t = ae),
							(this.#n = Se),
							fe.set(_, this);
						const de = U[ke];
						if (typeof de != "number")
							throw new Error(`Unknown TestRunProfile.group ${ke}`);
						ee && ae.add(_),
							(this.#i = {
								profileId: _,
								controllerId: he,
								tag: me ? u.TestTag.namespace(this.controllerId, me.id) : null,
								label: oe,
								group: de,
								isDefault: ee,
								hasConfigurationHandler: !1,
								supportsContinuousRun: ne,
							}),
							queueMicrotask(() => {
								this.#i &&
									(this.#e.$publishTestRunProfile(this.#i), (this.#i = void 0));
							});
					}
					dispose() {
						this.#r?.delete(this.profileId) &&
							((this.#r = void 0),
							this.#e.$removeTestProfile(this.controllerId, this.profileId)),
							(this.#i = void 0);
					}
				}
				t.$cid = B;
				const U = {
					[s.TestRunProfileKind.Coverage]: m.TestRunProfileBitset.Coverage,
					[s.TestRunProfileKind.Debug]: m.TestRunProfileBitset.Debug,
					[s.TestRunProfileKind.Run]: m.TestRunProfileBitset.Run,
				};
				function Z(W, G) {
					for (let fe = 0; fe < W.path.length; fe++) {
						const ae = G.find((Se) => Se.id === W.path[fe]);
						if (!ae) return;
						if (fe === W.path.length - 1) return ae;
						G = ae.children;
					}
				}
			},
		),
		