import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/event.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/types.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/observable/common/platformObservableUtils.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import './configuration.js';
import './mainThreadTestCollection.js';
import './observableValue.js';
import './storedValue.js';
import './testExclusions.js';
import './testId.js';
import './testingContextKeys.js';
import './testProfileService.js';
import './testResultService.js';
import './testTypes.js';
import '../../../services/editor/common/editorService.js';
define(
			de[3271],
			he([
				1, 0, 24, 33, 6, 103, 3, 77, 28, 4, 10, 8, 5, 40, 326, 21, 68, 174, 443,
				3179, 810, 515, 3177, 259, 380, 420, 381, 185, 18,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*cancellation*/,
				w /*event*/,
				E /*iterator*/,
				C /*lifecycle*/,
				d /*observable*/,
				m /*types*/,
				r /*nls*/,
				u /*configuration*/,
				a /*contextkey*/,
				h /*instantiation*/,
				c /*notification*/,
				n /*platformObservableUtils*/,
				g /*storage*/,
				p /*uriIdentity*/,
				o /*workspaceTrust*/,
				f /*configuration*/,
				b /*mainThreadTestCollection*/,
				s /*observableValue*/,
				l /*storedValue*/,
				y /*testExclusions*/,
				$ /*testId*/,
				v /*testingContextKeys*/,
				S /*testProfileService*/,
				I /*testResultService*/,
				T /*testTypes*/,
				P /*editorService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LLc = void 0);
				let k = class extends C.$1c {
					constructor(D, M, N, A, R, O, B, U, z, F) {
						super(),
							(this.y = N),
							(this.z = A),
							(this.C = R),
							(this.F = O),
							(this.G = B),
							(this.H = U),
							(this.I = z),
							(this.J = F),
							(this.g = (0, d.observableValue)("testControllers", new Map())),
							(this.h = new Set()),
							(this.j = new w.$re()),
							(this.m = new w.$re()),
							(this.n = new w.$re()),
							(this.q = new Set()),
							(this.w = new Map()),
							(this.onWillProcessDiff = this.m.event),
							(this.onDidProcessDiff = this.n.event),
							(this.onDidCancelTestRun = this.j.event),
							(this.collection = new b.$KLc(
								this.y,
								this.expandTest.bind(this),
							)),
							(this.showInlineOutput = this.D(
								s.$qqc.stored(
									new l.$oqc(
										{
											key: "inlineTestOutputVisible",
											scope: g.StorageScope.WORKSPACE,
											target: g.StorageTarget.USER,
										},
										this.z,
									),
									!0,
								),
							)),
							(this.excluded = M.createInstance(y.$rqc)),
							(this.s = v.TestingContextKeys.isRefreshingTests.bindTo(D)),
							(this.u = v.TestingContextKeys.activeEditorHasTests.bindTo(D)),
							this.D(
								(0, n.$Nwb)(
									v.TestingContextKeys.providerCount,
									D,
									(H) => this.g.read(H).size,
								),
							);
						const x = (H, q) =>
							this.D(
								(0, n.$Nwb)(H, D, (V) =>
									E.Iterable.some(
										this.g.read(V).values(),
										(G) => !!(G.capabilities.read(V) & q),
									),
								),
							);
						x(
							v.TestingContextKeys.canRefreshTests,
							T.TestControllerCapability.Refresh,
						),
							x(
								v.TestingContextKeys.canGoToRelatedCode,
								T.TestControllerCapability.CodeRelatedToTest,
							),
							x(
								v.TestingContextKeys.canGoToRelatedTest,
								T.TestControllerCapability.TestRelatedToCode,
							),
							this.D(R.onDidActiveEditorChange(() => this.L()));
					}
					async expandTest(D, M) {
						await this.g
							.get()
							.get($.$k4.fromString(D).controllerId)
							?.expandTest(D, M);
					}
					cancelTestRun(D, M) {
						if ((this.j.fire({ runId: D, taskId: M }), D === void 0))
							for (const N of this.w.values()) N.cancel();
						else M || this.w.get(D)?.cancel();
					}
					async runTests(D, M = i.CancellationToken.None) {
						const N = [];
						for (const R of D.tests) {
							const O = N.find((z) => (0, S.$Cqc)(z.profile, R));
							if (O) {
								O.tests.push(R);
								continue;
							}
							const B = this.F.getControllerProfiles(R.controllerId).filter(
									(z) => (z.group & D.group) !== 0 && (0, S.$Cqc)(z, R),
								),
								U = B.find((z) => z.isDefault) || B[0];
							U && N.push({ profile: U, tests: [R] });
						}
						const A = {
							targets: N.map(({ profile: R, tests: O }) => ({
								profileId: R.profileId,
								controllerId: O[0].controllerId,
								testIds: O.map((B) => B.item.extId),
							})),
							group: D.group,
							exclude: D.exclude?.map((R) => R.item.extId),
							continuous: D.continuous,
						};
						if (A.targets.length === 0)
							for (const R of (0, t.$Db)(D.tests, (O, B) =>
								O.controllerId === B.controllerId ? 0 : 1,
							)) {
								const O = this.F.getControllerProfiles(R[0].controllerId),
									B = R.map((U) => ({
										profile: O.find(
											(z) => z.group === D.group && (0, S.$Cqc)(z, U),
										),
										test: U,
									}));
								for (const U of (0, t.$Db)(B, (z, F) =>
									z.profile === F.profile ? 0 : 1,
								)) {
									const z = U[0].profile;
									z &&
										A.targets.push({
											testIds: U.map((F) => F.test.item.extId),
											profileId: z.profileId,
											controllerId: z.controllerId,
										});
								}
							}
						return this.runResolvedTests(A, M);
					}
					async startContinuousRun(D, M) {
						if (
							(D.exclude || (D.exclude = [...this.excluded.all]),
							!(await this.J.requestWorkspaceTrust({
								message: (0, r.localize)(10947, null),
							})))
						)
							return;
						const R = (0, t.$Db)(D.targets, (O, B) =>
							O.controllerId.localeCompare(B.controllerId),
						).map((O) =>
							this.getTestController(O[0].controllerId)
								?.startContinuousRun(
									O.map((B) => ({
										excludeExtIds: D.exclude.filter(
											(U) => !B.testIds.includes(U),
										),
										profileId: B.profileId,
										controllerId: B.controllerId,
										testIds: B.testIds,
									})),
									M,
								)
								.then((B) => {
									const U = B.map((z) => z.error).filter(m.$tg);
									U.length &&
										this.G.error((0, r.localize)(10948, null, U.join(" ")));
								}),
						);
						await Promise.all(R);
					}
					async runResolvedTests(D, M = i.CancellationToken.None) {
						D.exclude || (D.exclude = [...this.excluded.all]);
						const N = this.I.createLiveResult(D);
						if (
							!(await this.J.requestWorkspaceTrust({
								message: (0, r.localize)(10949, null),
							}))
						)
							return N.markComplete(), N;
						try {
							const R = new i.$Ce(M);
							this.w.set(N.id, R);
							const B = (0, t.$Db)(D.targets, (U, z) =>
								U.controllerId.localeCompare(z.controllerId),
							).map((U) =>
								this.getTestController(U[0].controllerId)
									?.runTests(
										U.map((z) => ({
											runId: N.id,
											excludeExtIds: D.exclude.filter(
												(F) => !z.testIds.includes(F),
											),
											profileId: z.profileId,
											controllerId: z.controllerId,
											testIds: z.testIds,
										})),
										R.token,
									)
									.then((z) => {
										const F = z.map((x) => x.error).filter(m.$tg);
										F.length &&
											this.G.error((0, r.localize)(10950, null, F.join(" ")));
									}),
							);
							return await this.M(D), await Promise.all(B), N;
						} finally {
							this.w.delete(N.id), N.markComplete();
						}
					}
					async provideTestFollowups(D, M) {
						const N = await Promise.all(
								[...this.h].map(async (R) => ({
									ctrl: R,
									followups: await R.provideTestFollowups(D, M),
								})),
							),
							A = {
								followups: N.flatMap(({ ctrl: R, followups: O }) =>
									O.map((B) => ({
										message: B.title,
										execute: () => R.executeTestFollowup(B.id),
									})),
								),
								dispose: () => {
									for (const { ctrl: R, followups: O } of N)
										R.disposeTestFollowups(O.map((B) => B.id));
								},
							};
						return M.isCancellationRequested && A.dispose(), A;
					}
					publishDiff(D, M) {
						this.m.fire(M), this.collection.apply(M), this.L(), this.n.fire(M);
					}
					getTestController(D) {
						return this.g.get().get(D);
					}
					async syncTests() {
						const D = new i.$Ce();
						try {
							await Promise.all(
								[...this.g.get().values()].map((M) => M.syncTests(D.token)),
							);
						} finally {
							D.dispose(!0);
						}
					}
					async refreshTests(D) {
						const M = new i.$Ce();
						this.q.add(M), this.s.set(!0);
						try {
							D
								? await this.getTestController(D)?.refreshTests(M.token)
								: await Promise.all(
										[...this.g.get().values()].map((N) =>
											N.refreshTests(M.token),
										),
									);
						} finally {
							this.q.delete(M), this.s.set(this.q.size > 0), M.dispose(!0);
						}
					}
					cancelRefreshTests() {
						for (const D of this.q) D.cancel();
						this.q.clear(), this.s.set(!1);
					}
					registerExtHost(D) {
						return this.h.add(D), (0, C.$Yc)(() => this.h.delete(D));
					}
					async getTestsRelatedToCode(D, M, N = i.CancellationToken.None) {
						return (
							await Promise.all(
								[...this.h.values()].map((R) =>
									R.getTestsRelatedToCode(D, M, N),
								),
							)
						)
							.flatMap((R) => R.map((O) => this.collection.getNodeById(O)))
							.filter(m.$tg);
					}
					registerTestController(D, M) {
						return (
							this.g.set(new Map(this.g.get()).set(D, M), void 0),
							(0, C.$Yc)(() => {
								const N = [];
								for (const R of this.collection.rootItems)
									R.controllerId === D &&
										N.push({
											op: T.TestDiffOpType.Remove,
											itemId: R.item.extId,
										});
								this.publishDiff(D, N);
								const A = new Map(this.g.get());
								A.delete(D), this.g.set(A, void 0);
							})
						);
					}
					async getCodeRelatedToTest(D, M = i.CancellationToken.None) {
						return (
							(await this.g
								.get()
								.get(D.controllerId)
								?.getRelatedCode(D.item.extId, M)) || []
						);
					}
					L() {
						const D = this.C.activeEditor?.resource;
						D
							? this.u.set(!E.Iterable.isEmpty(this.collection.getNodeByUrl(D)))
							: this.u.set(!1);
					}
					async M(D, M = this.H, N = this.C) {
						if (D.preserveFocus === !0) return;
						(0, f.$RJc)(this.H, f.TestingConfigKeys.SaveBeforeTest) &&
							(await N.saveAll());
					}
				};
				(e.$LLc = k),
					(e.$LLc = k =
						Ne(
							[
								j(0, a.$6j),
								j(1, h.$Li),
								j(2, p.$Vl),
								j(3, g.$lq),
								j(4, P.$IY),
								j(5, S.$Bqc),
								j(6, c.$4N),
								j(7, u.$gj),
								j(8, I.$Kqc),
								j(9, o.$qO),
							],
							k,
						));
			},
		),
		