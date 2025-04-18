import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import './bugbotDataService.js';
import './bugbot.js';
import './bugbotData.js';
import '../../../../base/common/event.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/uuid.js';
import '../../../services/ai/browser/aiService.js';
import '../../../services/selectedContext/browser/selectedContext.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../services/editor/common/editorService.js';
import './bugbotEditorInput.js';
import './constants.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../common/editor.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/files/common/files.js';
import './renderBugbotAlways.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../bugbotLinter/browser/bugBotLinterService.js';
import '../../aiPanes/browser/aiPanes.contribution.js';
import '../../aiCpp/browser/cppEventLogger.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../services/ai/browser/utils.js';
import '../../../services/aiErrors/browser/aiErrorService.js';
import '../../../../../proto/aiserver/v1/aiserver_connectweb.js';
import '../../../../../proto/aiserver/v1/cpp_pb.js';
import '../../../../../external/bufbuild/connect.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../base/browser/window.js';
import '../../../services/ai/browser/gitContextService.js';
import '../../../services/activity/common/activity.js';
import '../../../../base/browser/hash.js';
define(
			de[4265],
			he([
				1, 0, 3, 20, 977, 976, 1718, 6, 96, 7, 47, 118, 271, 148, 18, 1719, 789,
				66, 44, 25, 22, 4260, 5, 45, 850, 1988, 332, 137, 191, 401, 341, 367,
				340, 83, 75, 359, 260, 530,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*lifecycle*/,
				i /*extensions*/,
				w /*bugbotDataService*/,
				E /*bugbot*/,
				C /*bugbotData*/,
				d /*event*/,
				m /*layoutService*/,
				r /*dom*/,
				u /*uuid*/,
				a /*aiService*/,
				h /*selectedContext*/,
				c /*aiserver_pb*/,
				n /*editorService*/,
				g /*bugbotEditorInput*/,
				p /*constants*/,
				o /*editorGroupsService*/,
				f /*editor*/,
				b /*workspace*/,
				s /*files*/,
				l /*renderBugbotAlways*/,
				y /*instantiation*/,
				$ /*reactiveStorageService*/,
				v /*bugBotLinterService*/,
				S /*aiPanes.contribution*/,
				I /*cppEventLogger*/,
				T /*aiMiscServices*/,
				P /*utils*/,
				k /*aiErrorService*/,
				L /*aiserver_connectweb*/,
				D /*cpp_pb*/,
				M /*connect*/,
				N /*utils_pb*/,
				A /*window*/,
				R /*gitContextService*/,
				O /*activity*/,
				B /*hash*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yzc = void 0),
					(e.$Zzc = x),
					(r = mt(r));
				let U = class extends t.$1c {
					constructor(
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
					) {
						super(),
							(this.t = G),
							(this.u = K),
							(this.w = J),
							(this.y = W),
							(this.z = X),
							(this.C = Y),
							(this.F = ie),
							(this.G = ne),
							(this.H = ee),
							(this.I = _),
							(this.J = te),
							(this.L = Q),
							(this.M = Z),
							(this.N = se),
							(this.O = re),
							(this.P = le),
							(this.Q = oe),
							(this.a = this.D(new d.$re())),
							(this.onDidReset = this.a.event),
							(this.b = this.D(new d.$re())),
							(this.onDidOpenBugBot = this.b.event),
							(this.c = this.D(new d.$re())),
							(this.onDidEnableDisableBugBot = this.c.event),
							(this.n = !1),
							(this.r = this.D(new t.$2c())),
							(this.j = this.D(this.L.createScoped(this))),
							(this.g = r.$(".bugbot-container")),
							r.$fhb(this.u.mainContainer, this.g),
							(this.h = (0, l.$rzc)(this.g, this.J)),
							this.j.onChangeEffect({
								deps: [
									() =>
										this.L.applicationUserPersistentStorage.bugbotState
											.explicitEnableOrDisable,
								],
								onChange: ({ deps: ae }) => {
									const pe = ae[0];
									pe !== void 0 &&
										this.L.setApplicationUserPersistentStorage(
											"bugbotState",
											"isEnabled",
											pe,
										);
								},
							}),
							this.j.onChangeEffect({
								deps: [
									() =>
										this.L.applicationUserPersistentStorage.bugbotState
											.isEnabled,
								],
								onChange: ({ deps: ae }) => {
									ae[0]
										? this.N.registerTab(S.$Tzc)
										: this.N.deregisterTab(S.$Tzc);
								},
							}),
							this.D(
								this.M.onDidChangeBugConfig(async () => {
									this.handleNewBugConfig();
								}),
							),
							this.S(),
							this.U(),
							this.j.onChangeEffect({
								deps: [
									() => {
										const ae = this.t.allBugBotsData.allBugBots;
										let pe = 0;
										for (let $e = 0; $e < 10 && $e < ae.length; $e++) {
											const ye = ae[$e];
											ye.status.type === "completed" && ye.isUnread && pe++;
										}
										return pe;
									},
								],
								onChange: ({ deps: ae }) => {
									this.Y(ae[0]);
								},
							});
					}
					get bugConfig() {
						return this.M.bugConfig.bugBotV1;
					}
					handleNewBugConfig() {
						(this.bugConfig?.enabled === !0 ||
							this.bugConfig?.enabled === !1) &&
							this.L.applicationUserPersistentStorage.bugbotState
								.explicitEnableOrDisable === void 0 &&
							this.L.setApplicationUserPersistentStorage(
								"bugbotState",
								"isEnabled",
								this.bugConfig.enabled,
							),
							this.bugConfig?.killSwitch === !0 &&
								this.L.setApplicationUserPersistentStorage(
									"bugbotState",
									"isEnabled",
									!1,
								);
					}
					dispose() {
						this.s?.abort(),
							(this.s = void 0),
							this.m && A.$Bfb.clearInterval(this.m),
							this.h?.dispose(),
							super.dispose();
					}
					async getGitDiff(G) {
						await this.C.waitForGitContextProvider();
						const K =
								G?.includeUncommitted === void 0 ||
								G?.includeUncommitted === !0,
							J = await this.z.getDiffDetailsFromGitDiff({
								gitDiff: !1,
								gitDiffFromBranchToMain: !0,
								baseRef:
									G?.baseBranch === void 0 || G?.baseBranch === ""
										? void 0
										: G.baseBranch,
								unifiedContextLines:
									G?.diffContextLines ??
									this.bugConfig?.defaultDiffContextLines ??
									p.$7cc.defaultDiffContextLines,
								ref: K ? void 0 : "HEAD",
							});
						if (J.length !== 1) throw new Error("Expected exactly one diff");
						const W = J[0];
						return q(W), this.computeSizedGitDiff(W);
					}
					computeSizedGitDiff(G) {
						const K = F(G);
						return { diff: G, charLength: K };
					}
					async flushTelemetry() {
						this.P.canWeTrackTelem() &&
							(await this.P.flushAll(),
							await this.O.forceFlushExtHostEventLogger());
					}
					async runBugBot(G) {
						const K = (0, u.$9g)();
						if (this.bugConfig?.killSwitch === !0)
							return { success: !1, bugbotId: K };
						const J = this.P.getCurrentSessionId();
						this.t.setAllBugBotsData("allBugBots", (X) => [
							{
								...(0, C.$_cc)(K),
								isUnread: !0,
								isBackground: G.type.type === "isBackground",
								generationInfo: {
									modelNameUsed: G.modelName,
									iterations: G.iterations,
									customInstructions: G.customInstructions,
								},
							},
							...X,
						]);
						const W = this.t.getBugBotData(K);
						if (W) {
							const X = g.$jzc.create(W);
							G.type.type === "onDemand" &&
								(await this.F.openEditor(X, { pinned: !0 }));
						}
						this.t.updateBugBotData(K, {
							status: { type: "generating", message: "Starting analysis..." },
							lastUpdatedAt: Date.now(),
						});
						try {
							const X = await this.y.aiClient(),
								Y = await this.z.getCurrentBranch();
							if (Y === void 0)
								throw new Error(
									"No current branch found. Please ensure you are in a git repository and try again.",
								);
							if (
								G.customInstructions.length >
								(this.bugConfig?.customInstructionsMaxCharLength ??
									p.$7cc.customInstructionsMaxCharLength)
							)
								throw new Error(
									"Your custom instructions are too long. We recommend keeping them short.",
								);
							const ie = G.sizedGitDiff.charLength / 4;
							if (
								ie >
								(this.bugConfig?.diffAbsoluteMaxTokens ??
									p.$7cc.diffAbsoluteMaxTokens)
							)
								throw new Error(
									"The number of changes is too large to analyze. Please reduce the scope of changes and try again.",
								);
							if (ie < p.$6cc)
								throw new Error(
									"The number of changes is too small to analyze. Please make more changes and try again.",
								);
							const ne = await this.z.getLastCommit(),
								ee = {},
								_ = {};
							for (const se of G.sizedGitDiff.diff.diffs) {
								const re = se.to;
								if (!re.endsWith("/"))
									try {
										const le = this.H.resolveRelativePath(re),
											oe = await this.I.stat(le);
										if (oe.isDirectory) continue;
										if (oe.size > 2 * 1024 * 1024) {
											console.warn(
												`Skipping file ${re} - too large (${oe.size} bytes)`,
											);
											continue;
										}
										let ae;
										if (G.includeUncommitted)
											ae = (await this.I.readFile(le)).value.toString();
										else {
											const pe =
												this.H.getWorkspace().folders.at(0)?.uri.fsPath ?? "";
											let $e = await this.C.getFileContentAtRef(pe, re, "HEAD");
											if ($e === void 0)
												throw new Error(`Failed to get file content for ${re}`);
											ae = $e;
										}
										ee[re] = ae.split(`
`);
										try {
											_[re] = x(ee[re], se);
										} catch (pe) {
											console.warn(`Failed to reverse diff file ${re}:`, pe);
										}
									} catch (le) {
										console.warn(`Failed to read file ${re}:`, le);
										continue;
									}
							}
							const te = new AbortController();
							this.t.updateBugBotData(K, {
								abortController: te,
								branch: Y,
								baseBranch: G.baseBranch ?? (await this.z.getDefaultBranch()),
								commit: ne,
								includeUncommitted: G.includeUncommitted,
							});
							const Q = X.streamBugBot(
								{
									gitDiff: G.sizedGitDiff.diff,
									modelDetails: {
										modelName: G.modelName ? await z(G.modelName) : void 0,
									},
									iterations: G.iterations,
									userInstructions: G.customInstructions,
									unifiedContextLines: G.unifiedContextLines,
									sessionId: J,
									inBackgroundSubsidized: G.type.type === "isBackground",
									priceId: G.type.type === "onDemand" ? G.type.priceId : void 0,
									hasTelemetry: this.P.canWeTrackTelem(),
								},
								{ signal: te.signal, headers: (0, P.$m6b)(K) },
							);
							this.O.recordBugBotEvent({
								requestId: K,
								eventType: { case: "started", value: {} },
							});
							let Z;
							for await (const se of Q) {
								const re = new Set();
								se.bugReports !== void 0 &&
									(se.bugReports.bugReports?.forEach((ae) => {
										ae.locations?.forEach((pe) => {
											re.add(pe.file);
										});
									}),
									(Z = se.bugReports));
								const le = {},
									oe = {};
								for (const ae of re)
									ee[ae] && (le[ae] = ee[ae]), _[ae] && (oe[ae] = _[ae]);
								if (
									(this.t.updateBugBotData(K, {
										bugReports: se.bugReports,
										fileSnapshots: le,
										fileSnapshotsPreDiff: oe,
										customInstructions: G.customInstructions,
										status: {
											type:
												se.status?.status === c.BugBotStatus_Status.DONE
													? "completed"
													: "generating",
											message: se.status?.message,
											iterationsCompleted: se.status?.iterationsCompleted,
											totalIterations: se.status?.totalIterations,
										},
										lastUpdatedAt: Date.now(),
									}),
									this.t.setAllBugBotsData(
										"allBugBots",
										(ae) => ae.bugbotId === K,
										"resolvedBugs",
										Object.fromEntries(
											se.bugReports?.bugReports?.map((ae) => [ae.id, !0]) ?? [],
										),
									),
									se.status?.processedTokens &&
										se.status?.thinkingTokens &&
										se.status?.processedCost &&
										se.status?.thinkingCost)
								) {
									const ae = {
										processedTokens: se.status.processedTokens,
										thinkingTokens: se.status.thinkingTokens,
										processedCost: se.status.processedCost,
										thinkingCost: se.status.thinkingCost,
									};
									this.t.updateBugBotData(K, { usage: ae });
								}
							}
							if (Z?.bugReports?.length && G.type.type === "isBackground") {
								const se = Z.bugReports.length;
								this.showBugBotNotification(
									`We ran Bug Finder on your recent changes and found ${se} potential issue${se === 1 ? "" : "s"}. This is on us!`,
									"View Results",
									() => {
										this.openBugBotReport(K);
									},
								);
							}
							return (
								Z !== void 0 &&
									this.O.recordBugBotEvent({
										requestId: K,
										eventType: {
											case: "reportsGenerated",
											value: { bugReports: Z },
										},
									}),
								this.W(),
								{ success: !0, bugbotId: K }
							);
						} catch (X) {
							X instanceof M.ConnectError ||
								(X = new M.ConnectError(
									"Failed to run bug finder",
									M.Code.Aborted,
									void 0,
									[
										new N.$at({
											isExpected: !1,
											error: N.ErrorDetails_Error.CUSTOM_MESSAGE,
											details: {
												title: "Failed to run bug finder",
												detail: X.message,
												showRequestId: !1,
												isRetryable: !1,
											},
										}),
									],
								));
							const Y = L.$q0.typeName + "/" + L.$q0.methods.streamBugBot.name;
							(G.type.type === "isBackground" && G.type.isBackground) ||
								this.w.handleError(X, void 0, K, Y, "bugbot", void 0);
							const ie = (0, k.$X6b)(X);
							this.t.updateBugBotData(K, {
								status: { type: "errored", errorDetails: ie },
								lastUpdatedAt: Date.now(),
							});
						}
						return { success: !1, bugbotId: K };
					}
					showBugBotNotification(G, K, J) {
						if (
							this.bugConfig
								?.showIntrusiveNotificationOnlyIfLastTimeWasMoreThanMsAgo
						) {
							const W =
								this.L.applicationUserPersistentStorage.bugbotState
									.lastBugBotNotificationShownTime;
							if (
								W &&
								Date.now() - W <
									this.bugConfig
										.showIntrusiveNotificationOnlyIfLastTimeWasMoreThanMsAgo
							)
								return;
						}
						this.L.setApplicationUserPersistentStorage(
							"bugbotState",
							"lastBugBotNotificationShownTime",
							Date.now(),
						),
							this.L.setNonPersistentStorage("bugBotNotificationState", {
								message: G,
								clickMessage: K,
								onClick: J,
								isOpen: !0,
							});
					}
					closeBugBotNotification() {
						this.L.nonPersistentStorage.bugBotNotificationState?.isOpen &&
							this.L.setNonPersistentStorage("bugBotNotificationState", {
								...this.L.nonPersistentStorage.bugBotNotificationState,
								isOpen: !1,
							});
					}
					async openBugBotReport(G) {
						const K = this.t.getBugBotData(G);
						if (!K) throw new Error(`Bug bot with id ${G} not found`);
						const J = g.$jzc.create(K);
						await this.F.openEditor(J);
					}
					R() {
						const G = this.F.getEditors(f.EditorsOrder.SEQUENTIAL);
						for (const { editor: K, groupId: J } of G)
							if (K instanceof g.$jzc) {
								const W = K.bugbot.bugbotId;
								this.t.getBugBotData(W) || this.G.getGroup(J)?.closeEditor(K);
							}
					}
					S() {
						this.q =
							Math.floor(
								Math.random() *
									((this.bugConfig?.backgroundDiffMinMaxTokenThreshold ??
										p.$7cc.backgroundDiffMinMaxTokenThreshold) -
										(this.bugConfig?.backgroundDiffMinMinTokenThreshold ??
											p.$7cc.backgroundDiffMinMinTokenThreshold) +
										1),
							) +
							(this.bugConfig?.backgroundDiffMinMinTokenThreshold ??
								p.$7cc.backgroundDiffMinMinTokenThreshold);
					}
					U() {
						this.m && A.$Bfb.clearInterval(this.m),
							(this.m = A.$Bfb.setInterval(async () => {
								await this.handleBackgroundBugBotInterval();
							}, 60 * 1e3)),
							this.D({
								dispose: () => {
									this.m && A.$Bfb.clearInterval(this.m);
								},
							});
					}
					async handleBackgroundBugBotInterval() {
						if (this.n) return;
						let G;
						try {
							(this.n = !0),
								this.q === void 0 && this.S(),
								this.O.recordBugBotEvent({
									requestId: "",
									eventType: { case: "backgroundIntervalStarted", value: {} },
								}),
								(G = await this.X()),
								G.interruptedReason === void 0
									? this.O.recordBugBotEvent({
											requestId: G.bugbotId ?? "",
											eventType: {
												case: "backgroundIntervalEnded",
												value: { success: G.success },
											},
										})
									: this.O.recordBugBotEvent({
											requestId: "",
											eventType: {
												case: "backgroundIntervalInterrupted",
												value: { reason: G.interruptedReason },
											},
										});
						} catch (K) {
							console.warn(
								"Error in background bugbot interval, waiting 15 minutes before trying again",
								K,
							);
							const J = K instanceof Error ? K.message : "unknown error";
							this.O.recordBugBotEvent({
								requestId: "",
								eventType: {
									case: "backgroundIntervalErrored",
									value: { errorMessage: J },
								},
							}),
								await new Promise((W) => setTimeout(W, 15 * 60 * 1e3));
						} finally {
							this.n = !1;
						}
						return G;
					}
					W() {
						if (!this.P.canWeTrackTelem()) return;
						this.s && (this.s.abort(), (this.s = void 0)),
							(this.s = new AbortController()),
							(async (K) => {
								try {
									for (let J = 0; J < 5; J++) {
										if (K.signal.aborted) return;
										await this.flushTelemetry(),
											J < 4 &&
												(await new Promise((W) =>
													setTimeout(W, 15 * 60 * 1e3),
												));
									}
								} catch {}
							})(this.s);
					}
					async X() {
						const G = this.L.applicationUserPersistentStorage.bugbotState,
							K = this.bugConfig;
						if (
							G.isEnabled === !1 ||
							K?.isSubsidized !== !0 ||
							K?.backgroundCallFrequencyMs === void 0 ||
							G.backgroundBugFindingEnabled === !1
						)
							return (
								console.log("BackgroundBugBotInterval disabled"),
								{
									success: !1,
									interruptedReason:
										D.BugBotEvent_BackgroundIntervalInterruptedReason.DISABLED,
								}
							);
						const J =
								this.L.applicationUserPersistentStorage.bugbotState
									.lastBackgroundBugbotAt,
							W = J ? Date.now() - J : void 0;
						if (
							W &&
							W <
								(K?.backgroundCallFrequencyMs ??
									p.$7cc.backgroundCallFrequencyMs)
						)
							return (
								console.log("BackgroundBugBotInterval too recent"),
								{
									success: !1,
									interruptedReason:
										D.BugBotEvent_BackgroundIntervalInterruptedReason
											.TOO_RECENT,
								}
							);
						const X = this.t.allBugBotsData.allBugBots;
						let Y = 0;
						for (let $e = 0; $e < 10 && $e < X.length; $e++) {
							const ye = X[$e];
							ye.status.type === "completed" && ye.isUnread && Y++;
						}
						if (Y > 0)
							return (
								console.log(
									`Already have ${Y} unviewed bug reports, skipping background bugbot`,
								),
								{
									success: !1,
									interruptedReason:
										D.BugBotEvent_BackgroundIntervalInterruptedReason
											.UNVIEWED_BUG_REPORTS,
								}
							);
						const ie = await this.z.getCurrentBranch();
						if (ie === void 0)
							return (
								console.log("Not in a git repo, skipping background bugbot"),
								{
									success: !1,
									interruptedReason:
										D.BugBotEvent_BackgroundIntervalInterruptedReason
											.NOT_IN_GIT_REPO,
								}
							);
						const ne = await this.z.getDefaultBranch();
						if (
							ne === void 0 ||
							ne === ie ||
							ne.replace("origin/", "") === ie ||
							ne.startsWith("refs/")
						)
							return (
								console.log(
									"Default branch is not valid, skipping background bugbot",
								),
								{
									success: !1,
									interruptedReason:
										D.BugBotEvent_BackgroundIntervalInterruptedReason
											.DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH,
								}
							);
						const ee = await this.z.getGitUser();
						if (ee === void 0)
							return (
								console.log("No git user found, skipping background bugbot"),
								{
									success: !1,
									interruptedReason:
										D.BugBotEvent_BackgroundIntervalInterruptedReason
											.NO_GIT_USER,
								}
							);
						const _ = await this.z.getLastCommit();
						if (_ === void 0)
							return (
								console.log("No last commit found, skipping background bugbot"),
								{
									success: !1,
									interruptedReason:
										D.BugBotEvent_BackgroundIntervalInterruptedReason
											.NO_LAST_COMMIT,
								}
							);
						const { author: te } = _;
						if (te.trim() !== ee.trim())
							return (
								console.log(
									"Last commit was not made by the user, skipping background bugbot",
								),
								{
									success: !1,
									interruptedReason:
										D.BugBotEvent_BackgroundIntervalInterruptedReason
											.LAST_COMMIT_NOT_MADE_BY_USER,
								}
							);
						try {
							const $e = new Date(_.date);
							if (
								Date.now() - $e.getTime() >
								(K?.backgroundDiffLastCommitLessThanThisManyMsAgo ??
									p.$7cc.backgroundDiffLastCommitLessThanThisManyMsAgo)
							)
								return (
									console.log(
										"Last commit was too old, skipping background bugbot",
									),
									{
										success: !1,
										interruptedReason:
											D.BugBotEvent_BackgroundIntervalInterruptedReason
												.LAST_COMMIT_TOO_OLD,
									}
								);
						} catch ($e) {
							console.warn("Error parsing last commit date", $e);
						}
						const Q = await this.getGitDiff({
								baseBranch: ne,
								includeUncommitted:
									K?.backgroundDiffIncludeUncommitted ??
									p.$7cc.backgroundDiffIncludeUncommitted,
								diffContextLines:
									K?.backgroundUnifiedContextLines ??
									p.$7cc.backgroundUnifiedContextLines,
							}),
							Z = Q.charLength / 4,
							se = this.q === void 0 || Z < this.q,
							re =
								Z >
								(this.bugConfig?.backgroundDiffAbsoluteMaxTokens ??
									p.$7cc.backgroundDiffAbsoluteMaxTokens);
						if (se || re)
							return (
								console.log(
									`Diff token count is not within thresholds, skipping background bugbot. Token count: ${Z}, selected min: ${this.q}, absolute max: ${this.bugConfig?.backgroundDiffAbsoluteMaxTokens ?? p.$7cc.backgroundDiffAbsoluteMaxTokens}`,
								),
								this.L.setApplicationUserPersistentStorage(
									"bugbotState",
									"lastBackgroundBugbotAt",
									Date.now() -
										(K?.backgroundCallFrequencyMs ??
											p.$7cc.backgroundCallFrequencyMs) +
										5 * 60 * 1e3,
								),
								{
									success: !1,
									interruptedReason: se
										? D.BugBotEvent_BackgroundIntervalInterruptedReason
												.DIFF_TOO_SHORT
										: D.BugBotEvent_BackgroundIntervalInterruptedReason
												.DIFF_TOO_LONG,
								}
							);
						if (
							!(
								await (
									await this.y.aiClient()
								).checkBugBotTelemetryHealthy({
									sessionId: this.P.getCurrentSessionId(),
								})
							).isHealthy
						)
							return (
								console.log(
									"Telemetry is not healthy, skipping background bugbot",
								),
								this.L.setApplicationUserPersistentStorage(
									"bugbotState",
									"lastBackgroundBugbotAt",
									Date.now() -
										(K?.backgroundCallFrequencyMs ??
											p.$7cc.backgroundCallFrequencyMs) +
										5 * 60 * 1e3,
								),
								await this.flushTelemetry(),
								{
									success: !1,
									interruptedReason:
										D.BugBotEvent_BackgroundIntervalInterruptedReason
											.TELEMETRY_UNHEALTHY,
								}
							);
						const ae = new Promise(($e) => {
							let ye = !1;
							this.showBugBotNotification(
								`We found some changes between this branch and ${ne} that we can analyze for potential issues. Would you like us to run Bug Finder on them?`,
								"Run Now (Free)",
								async () => {
									try {
										ye = !0;
										const ue = await this.runBugBot({
											sizedGitDiff: Q,
											modelName: void 0,
											iterations: void 0,
											unifiedContextLines: void 0,
											includeUncommitted: !1,
											customInstructions: "",
											baseBranch: ne,
											type: { type: "isBackground", isBackground: !0 },
										});
										$e(ue);
									} catch {
										$e({ success: !1, bugbotId: void 0 });
									}
								},
							),
								setTimeout(
									() => {
										ye ||
											(this.closeBugBotNotification(),
											$e({ success: !1, bugbotId: void 0 }));
									},
									5 * 60 * 1e3,
								);
						});
						console.log("[federico] waiting for notification to be handled");
						const pe = await ae;
						return (
							console.log("[federico] notification handled"),
							!pe.success && pe.bugbotId && this.t.deleteBugBot(pe.bugbotId),
							this.L.setApplicationUserPersistentStorage(
								"bugbotState",
								"lastBackgroundBugbotAt",
								Date.now(),
							),
							this.S(),
							{ success: pe.success, bugbotId: pe.bugbotId }
						);
					}
					async computePriceForRun(G, K, J, W) {
						try {
							return await (await this.y.aiClient()).checkBugBotPrice({
								modelDetails: { modelName: await z(G) },
								diffCharLen: K.charLength,
								iterations: J,
								sessionId: this.P.getCurrentSessionId(),
							});
						} catch (X) {
							if (W?.doNotRetry) throw X;
							return this.computePriceForRun(G, K, J, { ...W, doNotRetry: !0 });
						}
					}
					async computeSuggestedBugBotIterations(G, K) {
						try {
							return (
								await (
									await this.y.aiClient()
								).getSuggestedBugBotIterations({
									modelDetails: { modelName: await z(G) },
									diffCharLen: K.charLength,
								})
							).iterations;
						} catch (J) {
							return (
								console.error("Error computing suggested bugbot iterations", J),
								p.$7cc.defaultFallbackIterations
							);
						}
					}
					async fixInComposerSideEffects(G, K) {
						this.O.recordBugBotEvent({
							requestId: G,
							eventType: {
								case: "pressedFixInComposer",
								value: { bugReportId: K },
							},
						});
					}
					async addToChatSideEffects(G, K) {
						this.O.recordBugBotEvent({
							requestId: G,
							eventType: {
								case: "pressedAddToChat",
								value: { bugReportId: K },
							},
						});
					}
					async openInEditorSideEffects(G, K, J) {
						this.O.recordBugBotEvent({
							requestId: G,
							eventType: {
								case: "pressedOpenInEditor",
								value: { bugReportId: K, bugLocation: J },
							},
						});
					}
					async userFeedbackSideEffects(G, K, J) {
						this.O.recordBugBotEvent({
							requestId: G,
							eventType: {
								case: "userFeedback",
								value: { bugReportId: K, feedback: J === void 0 ? "none" : J },
							},
						});
					}
					async reportViewSideEffects(G, K, J) {
						const W = J.map(
							([X, { fullPercentage: Y, textPercentage: ie }]) =>
								new D.$Kw({
									bugReportId: X,
									viewPercentage: Y,
									textPercentage: ie,
								}),
						);
						this.O.recordBugBotEvent({
							requestId: G,
							eventType: {
								case: "viewedReport",
								value: { secondsViewed: K, reportViews: W },
							},
						});
					}
					Y(G) {
						if (G > 0) {
							const K = G === 1 ? "1 new bug report" : `${G} new bug reports`;
							this.r.value = this.Q.showViewActivity(
								(0, S.$Vzc)(S.$Tzc).VIEW_ID,
								{ badge: new O.$8qc(G, () => K) },
							);
						} else this.r.value = void 0;
					}
				};
				(e.$Yzc = U),
					(e.$Yzc = U =
						Ne(
							[
								j(0, w.$ddc),
								j(1, m.$mEb),
								j(2, k.$W6b),
								j(3, a.$Nfc),
								j(4, h.$Q9b),
								j(5, R.$$Db),
								j(6, n.$IY),
								j(7, o.$EY),
								j(8, b.$Vi),
								j(9, s.$ll),
								j(10, y.$Li),
								j(11, $.$0zb),
								j(12, v.$idc),
								j(13, S.$Wzc),
								j(14, I.$V7b),
								j(15, T.$hfc),
								j(16, O.$7qc),
							],
							U,
						));
				async function z(V) {
					return await (0, B.$pjb)(V + "BugBot");
				}
				function F(V) {
					let G = 0;
					for (const K of V.diffs)
						for (const J of K.chunks) {
							G += J.content.length;
							for (const W of J.lines) G += W.length;
						}
					return G;
				}
				function x(V, G) {
					const K = G.chunks?.slice() ?? [];
					K.reverse();
					let J = V.length,
						W = [];
					for (const X of K) {
						const Y = X.lines ?? [],
							ie = X.newStart - 1 + X.newLines - 1;
						for (let ne = J - 1; ne > ie; ne--) W.push(V[ne]), J--;
						for (let ne = Y.length - 1; ne >= 0; ne--) {
							const ee = Y[ne];
							ee.startsWith("+") ||
								((ee.startsWith("-") || ee.startsWith(" ")) &&
									W.push(ee.slice(1)));
						}
						J = X.newStart - 1;
					}
					for (let X = J - 1; X >= 0; X--) W.push(V[X]);
					return W.reverse(), W;
				}
				const H = new Set([
					"json",
					"jsonl",
					"csv",
					"tsv",
					"log",
					"xml",
					"ipynb",
					"yml",
					"yaml",
					"lock",
					"pdf",
					"doc",
					"docx",
					"xls",
					"xlsx",
					"ppt",
					"pptx",
					"png",
					"jpg",
					"jpeg",
					"gif",
					"svg",
					"ico",
					"mp3",
					"wav",
					"ogg",
					"mp4",
					"avi",
					"mov",
					"webm",
					"ttf",
					"otf",
					"woff",
					"woff2",
					"eot",
					"zip",
					"tar",
					"gz",
					"7z",
					"rar",
					"exe",
					"dll",
					"so",
					"dylib",
					"bin",
					"dat",
					"db",
					"sqlite",
				]);
				function q(V) {
					function G(K) {
						return !(
							K.to === "/dev/null" ||
							K.to.endsWith("/") ||
							H.has(K.to.split(".").pop() ?? "") ||
							K.chunks.length === 0 ||
							K.chunks[0].lines.length === 0 ||
							K.chunks[0].lines[0].includes("Subproject commit")
						);
					}
					V.diffs = V.diffs.filter(G);
				}
				(0, i.$lK)(E.$adc, U, i.InstantiationType.Delayed);
			},
		)
