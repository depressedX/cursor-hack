import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/performance.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../extensions/common/extensions.js';
import '../../../../platform/update/common/update.js';
import '../../lifecycle/common/lifecycle.js';
import '../../editor/common/editorService.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/common/async.js';
import '../../layout/browser/layoutService.js';
import '../../panecomposite/browser/panecomposite.js';
import '../../../common/views.js';
import '../../../../platform/telemetry/common/telemetryUtils.js';
import '../../../../base/common/platform.js';
import '../../../../base/browser/defaultWorkerFactory.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/terminal/common/terminal.js';
define(
			de[520],
			he([
				1, 0, 240, 5, 25, 53, 415, 52, 18, 91, 32, 15, 96, 142, 60, 269, 12,
				540, 30, 117,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*performance*/,
 i /*instantiation*/,
 w /*workspace*/,
 E /*extensions*/,
 C /*update*/,
 d /*lifecycle*/,
 m /*editorService*/,
 r /*accessibility*/,
 u /*telemetry*/,
 a /*async*/,
 h /*layoutService*/,
 c /*panecomposite*/,
 n /*views*/,
 g /*telemetryUtils*/,
 p /*platform*/,
 o /*defaultWorkerFactory*/,
 f /*platform*/,
 b /*terminal*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Znc = e.$Ync = e.$Xnc = void 0),
					(t = mt(t)),
					(e.$Xnc = (0, i.$Mi)("timerService"));
				class s {
					constructor() {
						this.a = [];
					}
					setMarks(v, S) {
						this.a.push([v, S]);
					}
					getDuration(v, S) {
						const I = this.b(v);
						if (!I) return 0;
						const T = this.b(S);
						return T ? T.startTime - I.startTime : 0;
					}
					getStartTime(v) {
						const S = this.b(v);
						return S ? S.startTime : -1;
					}
					b(v) {
						for (const [, S] of this.a)
							for (let I = S.length - 1; I >= 0; I--)
								if (S[I].name === v) return S[I];
					}
					getEntries() {
						return this.a.slice(0);
					}
				}
				let l = class {
					constructor(v, S, I, T, P, k, L, D, M) {
						(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.k = P),
							(this.l = k),
							(this.m = L),
							(this.o = D),
							(this.a = new a.$Lh()),
							(this.b = new s()),
							(this.c = Math.random() < 0.05),
							Promise.all([
								this.h.whenInstalledExtensionsRegistered(),
								v.when(d.LifecyclePhase.Restored),
								M.whenRestored,
								Promise.all(
									Array.from(f.$Io.as(b.$WJ.Backend).backends.values()).map(
										(N) => N.whenReady,
									),
								),
							])
								.then(
									() => (
										this.setPerformanceMarks("renderer", t.getMarks()), this.s()
									),
								)
								.then((N) => {
									(this.d = N), this.p(N), this.a.open();
								}),
							(this.perfBaseline = this.a
								.wait()
								.then(() => this.f.when(d.LifecyclePhase.Eventually))
								.then(() => (0, a.$Nh)(this.d.timers.ellapsedRequire))
								.then(() => {
									const N = function () {
											let B = !1;
											function U(x) {
												return B
													? 0
													: (performance.now() - z >= 1e3 && (B = !0),
														x <= 2 ? x : U(x - 1) + U(x - 2));
											}
											const z = performance.now();
											U(24);
											const F = Math.round(performance.now() - z);
											self.postMessage({ value: B ? -1 : F });
										}.toString(),
										A = new Blob([`(${N})();`], {
											type: "application/javascript",
										}),
										R = URL.createObjectURL(A),
										O = (0, o.$gjb)(R, { name: "perfBaseline" });
									return new Promise((B) => {
										O.onmessage = (U) => B(U.data.value);
									}).finally(() => {
										O.terminate(), URL.revokeObjectURL(R);
									});
								}));
					}
					whenReady() {
						return this.a.wait();
					}
					get startupMetrics() {
						if (!this.d)
							throw new Error(
								"illegal state, MUST NOT access startupMetrics before whenReady has resolved",
							);
						return this.d;
					}
					setPerformanceMarks(v, S) {
						const I = S.filter((T) => T.name.startsWith("code/"));
						this.b.setMarks(v, I), this.r(v, I);
					}
					getPerformanceMarks() {
						return this.b.getEntries();
					}
					getDuration(v, S) {
						return this.b.getDuration(v, S);
					}
					getStartTime(v) {
						return this.b.getStartTime(v);
					}
					p(v) {
						this.o.publicLog("startupTimeVaried", v);
					}
					q() {
						return this.c;
					}
					r(v, S) {
						if (this.q())
							for (const I of S)
								this.o.publicLog2("startup.timer.mark", {
									source: v,
									name: new g.$Qp(I.name),
									startTime: I.startTime,
								});
					}
					async s() {
						const v = this.t();
						let S;
						p.$r
							? (S = "code/timeOrigin")
							: (S = v ? "code/didStartMain" : "code/willOpenNewWindow");
						const I = this.k.getActivePaneComposite(
								n.ViewContainerLocation.Sidebar,
							),
							T = this.k.getActivePaneComposite(n.ViewContainerLocation.Panel),
							P = {
								version: 2,
								ellapsed: this.b.getDuration(S, "code/didStartWorkbench"),
								isLatestVersion: !!(await this.j.isLatestVersion()),
								didUseCachedData: this.u(),
								windowKind: this.f.startupKind,
								windowCount: await this.v(),
								viewletId: I?.getId(),
								editorIds: this.l.visibleEditors.map((k) => k.typeId),
								panelId: T ? T.getId() : void 0,
								timers: {
									ellapsedAppReady: v
										? this.b.getDuration(
												"code/didStartMain",
												"code/mainAppReady",
											)
										: void 0,
									ellapsedNlsGeneration: v
										? this.b.getDuration(
												"code/willGenerateNls",
												"code/didGenerateNls",
											)
										: void 0,
									ellapsedLoadMainBundle: v
										? this.b.getDuration(
												"code/willLoadMainBundle",
												"code/didLoadMainBundle",
											)
										: void 0,
									ellapsedCrashReporter: v
										? this.b.getDuration(
												"code/willStartCrashReporter",
												"code/didStartCrashReporter",
											)
										: void 0,
									ellapsedMainServer: v
										? this.b.getDuration(
												"code/willStartMainServer",
												"code/didStartMainServer",
											)
										: void 0,
									ellapsedWindowCreate: v
										? this.b.getDuration(
												"code/willCreateCodeWindow",
												"code/didCreateCodeWindow",
											)
										: void 0,
									ellapsedWindowRestoreState: v
										? this.b.getDuration(
												"code/willRestoreCodeWindowState",
												"code/didRestoreCodeWindowState",
											)
										: void 0,
									ellapsedBrowserWindowCreate: v
										? this.b.getDuration(
												"code/willCreateCodeBrowserWindow",
												"code/didCreateCodeBrowserWindow",
											)
										: void 0,
									ellapsedWindowMaximize: v
										? this.b.getDuration(
												"code/willMaximizeCodeWindow",
												"code/didMaximizeCodeWindow",
											)
										: void 0,
									ellapsedWindowLoad: v
										? this.b.getDuration(
												"code/mainAppReady",
												"code/willOpenNewWindow",
											)
										: void 0,
									ellapsedWindowLoadToRequire: this.b.getDuration(
										"code/willOpenNewWindow",
										"code/willLoadWorkbenchMain",
									),
									ellapsedRequire: this.b.getDuration(
										"code/willLoadWorkbenchMain",
										"code/didLoadWorkbenchMain",
									),
									ellapsedWaitForWindowConfig: this.b.getDuration(
										"code/willWaitForWindowConfig",
										"code/didWaitForWindowConfig",
									),
									ellapsedStorageInit: this.b.getDuration(
										"code/willInitStorage",
										"code/didInitStorage",
									),
									ellapsedSharedProcesConnected: this.b.getDuration(
										"code/willConnectSharedProcess",
										"code/didConnectSharedProcess",
									),
									ellapsedWorkspaceServiceInit: this.b.getDuration(
										"code/willInitWorkspaceService",
										"code/didInitWorkspaceService",
									),
									ellapsedRequiredUserDataInit: this.b.getDuration(
										"code/willInitRequiredUserData",
										"code/didInitRequiredUserData",
									),
									ellapsedOtherUserDataInit: this.b.getDuration(
										"code/willInitOtherUserData",
										"code/didInitOtherUserData",
									),
									ellapsedExtensions: this.b.getDuration(
										"code/willLoadExtensions",
										"code/didLoadExtensions",
									),
									ellapsedEditorRestore: this.b.getDuration(
										"code/willRestoreEditors",
										"code/didRestoreEditors",
									),
									ellapsedViewletRestore: this.b.getDuration(
										"code/willRestoreViewlet",
										"code/didRestoreViewlet",
									),
									ellapsedPanelRestore: this.b.getDuration(
										"code/willRestorePanel",
										"code/didRestorePanel",
									),
									ellapsedWorkbenchContributions: this.b.getDuration(
										"code/willCreateWorkbenchContributions/1",
										"code/didCreateWorkbenchContributions/2",
									),
									ellapsedWorkbench: this.b.getDuration(
										"code/willStartWorkbench",
										"code/didStartWorkbench",
									),
									ellapsedExtensionsReady: this.b.getDuration(
										S,
										"code/didLoadExtensions",
									),
									ellapsedRenderer: this.b.getDuration(
										"code/didStartRenderer",
										"code/didStartWorkbench",
									),
								},
								platform: void 0,
								release: void 0,
								arch: void 0,
								totalmem: void 0,
								freemem: void 0,
								meminfo: void 0,
								cpus: void 0,
								loadavg: void 0,
								isVMLikelyhood: void 0,
								initialStartup: v,
								hasAccessibilitySupport: this.m.isScreenReaderOptimized(),
								emptyWorkbench:
									this.g.getWorkbenchState() === w.WorkbenchState.EMPTY,
							};
						return await this.w(P), P;
					}
				};
				(e.$Ync = l),
					(e.$Ync = l =
						Ne(
							[
								j(0, d.$n6),
								j(1, w.$Vi),
								j(2, E.$q2),
								j(3, C.$_rb),
								j(4, c.$6Sb),
								j(5, m.$IY),
								j(6, r.$XK),
								j(7, u.$km),
								j(8, h.$mEb),
							],
							l,
						));
				class y extends l {
					t() {
						return !1;
					}
					u() {
						return !1;
					}
					async v() {
						return 1;
					}
					async w(v) {
						(v.isVMLikelyhood = 0),
							(v.isARM64Emulated = !1),
							(v.platform = navigator.userAgent),
							(v.release = navigator.appVersion);
					}
				}
				e.$Znc = y;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	