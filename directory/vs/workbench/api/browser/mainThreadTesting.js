import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/observable.js';
import '../../../base/common/prefixTree.js';
import '../../../base/common/uri.js';
import '../../../editor/common/core/range.js';
import '../../../platform/uriIdentity/common/uriIdentity.js';
import '../../contrib/testing/common/testCoverage.js';
import '../../contrib/testing/common/testId.js';
import '../../contrib/testing/common/testProfileService.js';
import '../../contrib/testing/common/testResult.js';
import '../../contrib/testing/common/testResultService.js';
import '../../contrib/testing/common/testService.js';
import '../../contrib/testing/common/testTypes.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../common/extHost.protocol.js';
define(
			de[3371],
			he([
				1, 0, 6, 3, 77, 743, 9, 17, 68, 1e3, 259, 420, 421, 381, 379, 185, 101,
				88,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mqc = void 0);
				let f = class extends i.$1c {
					constructor(s, l, y, $, v) {
						super(),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.b = this.D(new i.$2c())),
							(this.c = new Map()),
							(this.a = s.getProxy(o.$mbb.ExtHostTesting)),
							this.D(
								this.g.registerExtHost({
									provideTestFollowups: (S, I) =>
										this.a.$provideTestFollowups(S, I),
									executeTestFollowup: (S) => this.a.$executeTestFollowup(S),
									disposeTestFollowups: (S) => this.a.$disposeTestFollowups(S),
									getTestsRelatedToCode: (S, I, T) =>
										this.a.$getTestsRelatedToCode(S, I, T),
								}),
							),
							this.D(
								this.g.onDidCancelTestRun(({ runId: S, taskId: I }) => {
									this.a.$cancelExtensionTestRun(S, I);
								}),
							),
							this.D(
								t.Event.debounce(
									$.onDidChange,
									(S, I) => I,
								)(() => {
									const S = {};
									for (const I of [
										g.TestRunProfileBitset.Run,
										g.TestRunProfileBitset.Debug,
										g.TestRunProfileBitset.Coverage,
									])
										for (const T of this.h.getGroupDefaultProfiles(I))
											(S[T.controllerId] ??= []),
												S[T.controllerId].push(T.profileId);
									this.a.$setDefaultRunProfiles(S);
								}),
							),
							this.D(
								v.onResultsChanged((S) => {
									if ("completed" in S) {
										const I = S.completed.toJSONWithMessages();
										I && this.a.$publishTestResults([I]);
									} else
										"removed" in S &&
											S.removed.forEach((I) => {
												I instanceof h.$O4 && this.a.$disposeRun(I.id);
											});
								}),
							);
					}
					$markTestRetired(s) {
						let l;
						if (s) {
							l = new E.$j4();
							for (const y of s) l.insert(u.$k4.fromString(y).path, void 0);
						}
						for (const y of this.j.results)
							y instanceof h.$O4 && y.markRetired(l);
					}
					$publishTestRunProfile(s) {
						const l = this.c.get(s.controllerId);
						l && this.h.addProfile(l.instance, s);
					}
					$updateTestRunConfig(s, l, y) {
						this.h.updateProfile(s, l, y);
					}
					$removeTestProfile(s, l) {
						this.h.removeProfile(s, l);
					}
					$addTestsToRun(s, l, y) {
						this.m(l, ($) =>
							$.addTestChainToRun(
								s,
								y.map((v) => g.ITestItem.deserialize(this.f, v)),
							),
						);
					}
					$appendCoverage(s, l, y) {
						this.m(s, ($) => {
							const v = $.tasks.find((I) => I.id === l);
							if (!v) return;
							const S = g.IFileCoverage.deserialize(this.f, y);
							(0, w.transaction)((I) => {
								let T = v.coverage.read(void 0);
								T
									? T.append(S, I)
									: ((T = new r.$E4($, l, this.f, {
											getCoverageDetails: (P, k, L) =>
												this.a
													.$getCoverageDetails(P, k, L)
													.then((D) => D.map(g.CoverageDetails.deserialize)),
										})),
										T.append(S, I),
										v.coverage.set(T, I));
							});
						});
					}
					$startedExtensionTestRun(s) {
						this.j.createLiveResult(s);
					}
					$startedTestRunTask(s, l) {
						this.m(s, (y) => y.addTask(l));
					}
					$finishedTestRunTask(s, l) {
						this.m(s, (y) => y.markTaskComplete(l));
					}
					$finishedExtensionTestRun(s) {
						this.m(s, (l) => l.markComplete());
					}
					$updateTestStateInRun(s, l, y, $, v) {
						this.m(s, (S) => S.updateState(y, l, $, v));
					}
					$appendOutputToRun(s, l, y, $, v) {
						const S = $ && {
							uri: C.URI.revive($.uri),
							range: d.$iL.lift($.range),
						};
						this.m(s, (I) => I.appendOutput(y, l, S, v));
					}
					$appendTestMessagesInRun(s, l, y, $) {
						const v = this.j.getResult(s);
						if (v && v instanceof h.$O4)
							for (const S of $)
								v.appendMessage(y, l, g.ITestMessage.deserialize(this.f, S));
					}
					$registerTestController(s, l, y) {
						const $ = new i.$Zc(),
							v = (0, w.observableValue)(`${s}.label`, l),
							S = (0, w.observableValue)(`${s}.cap`, y),
							I = {
								id: s,
								label: v,
								capabilities: S,
								syncTests: () => this.a.$syncTests(),
								refreshTests: (T) => this.a.$refreshTests(s, T),
								configureRunProfile: (T) => this.a.$configureRunProfile(s, T),
								runTests: (T, P) => this.a.$runControllerTests(T, P),
								startContinuousRun: (T, P) => this.a.$startContinuousRun(T, P),
								expandTest: (T, P) =>
									this.a.$expandTest(T, isFinite(P) ? P : -1),
								getRelatedCode: (T, P) =>
									this.a
										.$getCodeRelatedToTest(T, P)
										.then((k) =>
											k.map((L) => ({
												uri: C.URI.revive(L.uri),
												range: d.$iL.lift(L.range),
											})),
										),
							};
						$.add((0, i.$Yc)(() => this.h.removeProfile(s))),
							$.add(this.g.registerTestController(s, I)),
							this.c.set(s, {
								instance: I,
								label: v,
								capabilities: S,
								disposable: $,
							});
					}
					$updateController(s, l) {
						const y = this.c.get(s);
						y &&
							(0, w.transaction)(($) => {
								l.label !== void 0 && y.label.set(l.label, $),
									l.capabilities !== void 0 &&
										y.capabilities.set(l.capabilities, $);
							});
					}
					$unregisterTestController(s) {
						this.c.get(s)?.disposable.dispose(), this.c.delete(s);
					}
					$subscribeToDiffs() {
						this.a.$acceptDiff(
							this.g.collection.getReviverDiff().map(g.TestsDiffOp.serialize),
						),
							(this.b.value = this.g.onDidProcessDiff(
								this.a.$acceptDiff,
								this.a,
							));
					}
					$unsubscribeFromDiffs() {
						this.b.clear();
					}
					$publishDiff(s, l) {
						this.g.publishDiff(
							s,
							l.map((y) => g.TestsDiffOp.deserialize(this.f, y)),
						);
					}
					async $runTests(s, l) {
						return (await this.g.runResolvedTests(s, l)).id;
					}
					async $getCoverageDetails(s, l, y, $) {
						return (
							(await this.j
								.getResult(s)
								?.tasks[l]?.coverage.get()
								?.getUri(C.URI.from(y))
								?.details($)) || []
						);
					}
					dispose() {
						super.dispose();
						for (const s of this.c.values()) s.disposable.dispose();
						this.c.clear();
					}
					m(s, l) {
						const y = this.j.getResult(s);
						return y && y instanceof h.$O4 ? l(y) : void 0;
					}
				};
				(e.$Mqc = f),
					(e.$Mqc = f =
						Ne(
							[
								(0, p.$tmc)(o.$lbb.MainThreadTesting),
								j(1, m.$Vl),
								j(2, n.$sqc),
								j(3, a.$Bqc),
								j(4, c.$Kqc),
							],
							f,
						));
			},
		),
		