import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/uri.js';
import '../../../common/editor/textResourceEditorInput.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../editor/common/languages/language.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../editor/common/services/model.js';
import '../../../services/timer/browser/timerService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../codeEditor/browser/toggleWordWrap.js';
import '../../../../base/common/amd.js';
import '../../../../platform/product/common/productService.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/label/common/label.js';
import '../../../../base/common/platform.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../terminal/browser/terminal.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/editor/common/customEditorLabelService.js';
define(
			de[1892],
			he([
				1, 0, 4, 9, 478, 42, 52, 61, 5, 67, 520, 53, 3, 65, 1026, 455, 62, 85,
				18, 22, 73, 12, 170, 107, 125, 30, 55, 399,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*uri*/,
				w /*textResourceEditorInput*/,
				E /*resolverService*/,
				C /*lifecycle*/,
				d /*language*/,
				m /*instantiation*/,
				r /*model*/,
				u /*timerService*/,
				a /*extensions*/,
				h /*lifecycle*/,
				c /*codeEditorService*/,
				n /*toggleWordWrap*/,
				g /*amd*/,
				p /*productService*/,
				o /*textfiles*/,
				f /*editorService*/,
				b /*files*/,
				s /*label*/,
				l /*platform*/,
				y /*filesConfigurationService*/,
				$ /*terminal*/,
				v /*textResourceConfiguration*/,
				S /*platform*/,
				I /*contributions*/,
				T /*customEditorLabelService*/,
) {
				"use strict";
				var P, k;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mEc = e.$lEc = void 0);
				let L = class {
					static {
						P = this;
					}
					static get() {
						return (0, I.$t6)(P.ID);
					}
					static {
						this.ID = "workbench.contrib.perfview";
					}
					constructor(R, O) {
						(this.d = R),
							(this.a = i.URI.from({
								scheme: "perf",
								path: "Startup Performance",
							})),
							(this.b = O.registerTextModelContentProvider(
								"perf",
								R.createInstance(M),
							));
					}
					dispose() {
						this.b.dispose();
					}
					getInputUri() {
						return this.a;
					}
					getEditorInput() {
						return this.d.createInstance(D);
					}
				};
				(e.$lEc = L), (e.$lEc = L = P = Ne([j(0, m.$Li), j(1, E.$MO)], L));
				let D = class extends w.$S1b {
					static {
						k = this;
					}
					static {
						this.Id = "PerfviewInput";
					}
					get typeId() {
						return k.Id;
					}
					constructor(R, O, B, U, z, F, x, H) {
						super(
							L.get().getInputUri(),
							(0, t.localize)(8328, null),
							void 0,
							void 0,
							void 0,
							R,
							O,
							B,
							U,
							z,
							F,
							x,
							H,
						);
					}
				};
				(e.$mEc = D),
					(e.$mEc =
						D =
						k =
							Ne(
								[
									j(0, E.$MO),
									j(1, o.$kZ),
									j(2, f.$IY),
									j(3, b.$ll),
									j(4, s.$3N),
									j(5, y.$_Y),
									j(6, v.$XO),
									j(7, T.$QIb),
								],
								D,
							));
				let M = class {
					constructor(R, O, B, U, z, F, x, H) {
						(this.d = R),
							(this.f = O),
							(this.g = B),
							(this.h = U),
							(this.i = z),
							(this.j = F),
							(this.k = x),
							(this.l = H),
							(this.b = []);
					}
					provideTextContent(R) {
						if (!this.a || this.a.isDisposed()) {
							(0, h.$Vc)(this.b);
							const O = this.f.createById("markdown");
							(this.a =
								this.d.getModel(R) || this.d.createModel("Loading...", O, R)),
								this.b.push(
									O.onDidChange((B) => {
										this.a?.setLanguage(B);
									}),
								),
								this.b.push(this.j.onDidChangeExtensionsStatus(this.m, this)),
								(0, n.$G1b)(this.a, { wordWrapOverride: "off" }, this.g);
						}
						return this.m(), Promise.resolve(this.a);
					}
					m() {
						Promise.all([
							this.i.whenReady(),
							this.h.when(C.LifecyclePhase.Eventually),
							this.j.whenInstalledExtensionsRegistered(),
							this.l.whenConnected,
						]).then(() => {
							if (this.a && !this.a.isDisposed()) {
								const R = g.$X.get(),
									O = new N();
								this.n(O),
									O.blank(),
									this.o(O, R),
									O.blank(),
									this.q(O),
									O.blank(),
									this.r(
										"Terminal Stats",
										O,
										this.i
											.getPerformanceMarks()
											.find((B) => B[0] === "renderer")?.[1]
											.filter((B) => B.name.startsWith("code/terminal/")),
									),
									O.blank(),
									this.s(O),
									O.blank(),
									this.t(O),
									g.$V || (O.blank(), this.u(O, R), O.blank(), this.v(O)),
									O.blank(),
									this.w(O),
									this.a.setValue(O.value);
							}
						});
					}
					n(R) {
						const O = this.i.startupMetrics;
						R.heading(2, "System Info"),
							R.li(
								`${this.k.nameShort}: ${this.k.version} (${this.k.commit || "0000000"})`,
							),
							R.li(`OS: ${O.platform}(${O.release})`),
							O.cpus &&
								R.li(
									`CPUs: ${O.cpus.model}(${O.cpus.count} x ${O.cpus.speed})`,
								),
							typeof O.totalmem == "number" &&
								typeof O.freemem == "number" &&
								R.li(
									`Memory(System): ${(O.totalmem / b.$Tl.GB).toFixed(2)} GB(${(O.freemem / b.$Tl.GB).toFixed(2)}GB free)`,
								),
							O.meminfo &&
								R.li(
									`Memory(Process): ${(O.meminfo.workingSetSize / b.$Tl.KB).toFixed(2)} MB working set(${(O.meminfo.privateBytes / b.$Tl.KB).toFixed(2)}MB private, ${(O.meminfo.sharedBytes / b.$Tl.KB).toFixed(2)}MB shared)`,
								),
							R.li(`VM(likelihood): ${O.isVMLikelyhood}%`),
							R.li(`Initial Startup: ${O.initialStartup}`),
							R.li(`Has ${O.windowCount - 1} other windows`),
							R.li(`Screen Reader Active: ${O.hasAccessibilitySupport}`),
							R.li(`Empty Workspace: ${O.emptyWorkbench}`);
					}
					o(R, O) {
						const B = this.i.startupMetrics,
							U = S.$Io.as(I.Extensions.Workbench).timings,
							z = [];
						z.push([
							"start => app.isReady",
							B.timers.ellapsedAppReady,
							"[main]",
							`initial startup: ${B.initialStartup}`,
						]),
							z.push([
								"nls:start => nls:end",
								B.timers.ellapsedNlsGeneration,
								"[main]",
								`initial startup: ${B.initialStartup}`,
							]),
							z.push([
								"import(main.bundle.js)",
								B.timers.ellapsedLoadMainBundle,
								"[main]",
								`initial startup: ${B.initialStartup}`,
							]),
							z.push([
								"start crash reporter",
								B.timers.ellapsedCrashReporter,
								"[main]",
								`initial startup: ${B.initialStartup}`,
							]),
							z.push([
								"serve main IPC handle",
								B.timers.ellapsedMainServer,
								"[main]",
								`initial startup: ${B.initialStartup}`,
							]),
							z.push([
								"create window",
								B.timers.ellapsedWindowCreate,
								"[main]",
								`initial startup: ${B.initialStartup}, ${B.initialStartup ? `state: ${B.timers.ellapsedWindowRestoreState}ms, widget: ${B.timers.ellapsedBrowserWindowCreate}ms, show: ${B.timers.ellapsedWindowMaximize}ms` : ""}`,
							]),
							z.push([
								"app.isReady => window.loadUrl()",
								B.timers.ellapsedWindowLoad,
								"[main]",
								`initial startup: ${B.initialStartup}`,
							]),
							z.push([
								"window.loadUrl() => begin to import(workbench.desktop.main.js)",
								B.timers.ellapsedWindowLoadToRequire,
								"[main->renderer]",
								(0, C.$o6)(B.windowKind),
							]),
							z.push([
								"import(workbench.desktop.main.js)",
								B.timers.ellapsedRequire,
								"[renderer]",
								`cached data: ${B.didUseCachedData ? "YES" : "NO"}${O ? `, node_modules took ${O.nodeRequireTotal}ms` : ""}`,
							]),
							z.push([
								"wait for window config",
								B.timers.ellapsedWaitForWindowConfig,
								"[renderer]",
								void 0,
							]),
							z.push([
								"init storage (global & workspace)",
								B.timers.ellapsedStorageInit,
								"[renderer]",
								void 0,
							]),
							z.push([
								"init workspace service",
								B.timers.ellapsedWorkspaceServiceInit,
								"[renderer]",
								void 0,
							]),
							l.$r &&
								(z.push([
									"init settings and global state from settings sync service",
									B.timers.ellapsedRequiredUserDataInit,
									"[renderer]",
									void 0,
								]),
								z.push([
									"init keybindings, snippets & extensions from settings sync service",
									B.timers.ellapsedOtherUserDataInit,
									"[renderer]",
									void 0,
								])),
							z.push([
								"register extensions & spawn extension host",
								B.timers.ellapsedExtensions,
								"[renderer]",
								void 0,
							]),
							z.push([
								"restore viewlet",
								B.timers.ellapsedViewletRestore,
								"[renderer]",
								B.viewletId,
							]),
							z.push([
								"restore panel",
								B.timers.ellapsedPanelRestore,
								"[renderer]",
								B.panelId,
							]),
							z.push([
								"restore & resolve visible editors",
								B.timers.ellapsedEditorRestore,
								"[renderer]",
								`${B.editorIds.length}: ${B.editorIds.join(", ")}`,
							]),
							z.push([
								"create workbench contributions",
								B.timers.ellapsedWorkbenchContributions,
								"[renderer]",
								`${(U.get(C.LifecyclePhase.Starting)?.length ?? 0) + (U.get(C.LifecyclePhase.Starting)?.length ?? 0)} blocking startup`,
							]),
							z.push([
								"overall workbench load",
								B.timers.ellapsedWorkbench,
								"[renderer]",
								void 0,
							]),
							z.push([
								"workbench ready",
								B.ellapsed,
								"[main->renderer]",
								void 0,
							]),
							z.push([
								"renderer ready",
								B.timers.ellapsedRenderer,
								"[renderer]",
								void 0,
							]),
							z.push([
								"shared process connection ready",
								B.timers.ellapsedSharedProcesConnected,
								"[renderer->sharedprocess]",
								void 0,
							]),
							z.push([
								"extensions registered",
								B.timers.ellapsedExtensionsReady,
								"[renderer]",
								void 0,
							]),
							R.heading(2, "Performance Marks"),
							R.table(["What", "Duration", "Process", "Info"], z);
					}
					q(R) {
						const O = [],
							B = [],
							U = this.j.getExtensionsStatus();
						for (const F in U) {
							const { activationTimes: x } = U[F];
							x &&
								(x.activationReason.startup
									? O.push([
											F,
											x.activationReason.startup,
											x.codeLoadingTime,
											x.activateCallTime,
											x.activateResolvedTime,
											x.activationReason.activationEvent,
											x.activationReason.extensionId.value,
										])
									: B.push([
											F,
											x.activationReason.startup,
											x.codeLoadingTime,
											x.activateCallTime,
											x.activateResolvedTime,
											x.activationReason.activationEvent,
											x.activationReason.extensionId.value,
										]));
						}
						const z = O.concat(B);
						z.length > 0 &&
							(R.heading(2, "Extension Activation Stats"),
							R.table(
								[
									"Extension",
									"Eager",
									"Load Code",
									"Call Activate",
									"Finish Activate",
									"Event",
									"By",
								],
								z,
							));
					}
					r(R, O, B) {
						if (!B) return;
						const U = [];
						let z = -1,
							F = 0;
						for (const { name: x, startTime: H } of B) {
							const q = z !== -1 ? H - z : 0;
							(F += q),
								U.push([x, Math.round(H), Math.round(q), Math.round(F)]),
								(z = H);
						}
						R && O.heading(2, R),
							O.table(["Name", "Timestamp", "Delta", "Total"], U);
					}
					s(R) {
						R.heading(2, "Workbench Contributions Blocking Restore");
						const O = S.$Io.as(I.Extensions.Workbench).timings;
						R.li(
							`Total (LifecyclePhase.Starting): ${O.get(C.LifecyclePhase.Starting)?.length} (${O.get(C.LifecyclePhase.Starting)?.reduce((U, z) => U + z[1], 0)}ms)`,
						),
							R.li(
								`Total (LifecyclePhase.Ready): ${O.get(C.LifecyclePhase.Ready)?.length} (${O.get(C.LifecyclePhase.Ready)?.reduce((U, z) => U + z[1], 0)}ms)`,
							),
							R.blank();
						const B = this.i
							.getPerformanceMarks()
							.find((U) => U[0] === "renderer")?.[1]
							.filter(
								(U) =>
									U.name.startsWith("code/willCreateWorkbenchContribution/1") ||
									U.name.startsWith("code/didCreateWorkbenchContribution/1") ||
									U.name.startsWith("code/willCreateWorkbenchContribution/2") ||
									U.name.startsWith("code/didCreateWorkbenchContribution/2"),
							);
						this.r(void 0, R, B);
					}
					t(R) {
						for (const [O, B] of this.i.getPerformanceMarks()) {
							R.heading(2, `Raw Perf Marks: ${O}`),
								(R.value += "```\n"),
								(R.value += `Name	Timestamp	Delta	Total
`);
							let U = -1,
								z = 0;
							for (const { name: F, startTime: x } of B) {
								const H = U !== -1 ? x - U : 0;
								(z += H),
									(R.value += `${F}	${x}	${H}	${z}
`),
									(U = x);
							}
							R.value += "```\n";
						}
					}
					u(R, O) {
						R.heading(2, "Loader Stats"),
							R.heading(3, "Load AMD-module"),
							R.table(["Module", "Duration"], O.amdLoad),
							R.blank(),
							R.heading(3, "Load commonjs-module"),
							R.table(["Module", "Duration"], O.nodeRequire),
							R.blank(),
							R.heading(3, "Invoke AMD-module factory"),
							R.table(["Module", "Duration"], O.amdInvoke),
							R.blank(),
							R.heading(3, "Invoke commonjs-module"),
							R.table(["Module", "Duration"], O.nodeEval);
					}
					v(R) {
						const O = new Map();
						if (
							(O.set(g.LoaderEventType.CachedDataCreated, []),
							O.set(g.LoaderEventType.CachedDataFound, []),
							O.set(g.LoaderEventType.CachedDataMissed, []),
							O.set(g.LoaderEventType.CachedDataRejected, []),
							!g.$V && typeof ce.getStats == "function")
						)
							for (const U of ce.getStats())
								O.has(U.type) && O.get(U.type).push(U.detail);
						const B = (U) => {
							if (U) {
								U.sort();
								for (const z of U) R.li(`${z}`);
								R.blank();
							}
						};
						R.heading(2, "Node Cached Data Stats"),
							R.blank(),
							R.heading(3, "cached data used"),
							B(O.get(g.LoaderEventType.CachedDataFound)),
							R.heading(3, "cached data missed"),
							B(O.get(g.LoaderEventType.CachedDataMissed)),
							R.heading(3, "cached data rejected"),
							B(O.get(g.LoaderEventType.CachedDataRejected)),
							R.heading(3, "cached data created (lazy, might need refreshes)"),
							B(O.get(g.LoaderEventType.CachedDataCreated));
					}
					w(R) {
						const O = performance
							.getEntriesByType("resource")
							.map((B) => [B.name, B.duration]);
						O.length &&
							(R.heading(2, "Resource Timing Stats"),
							R.table(["Name", "Duration"], O));
					}
				};
				M = Ne(
					[
						j(0, r.$QO),
						j(1, d.$nM),
						j(2, c.$dtb),
						j(3, C.$n6),
						j(4, u.$Xnc),
						j(5, a.$q2),
						j(6, p.$Bk),
						j(7, $.$iIb),
					],
					M,
				);
				class N {
					constructor() {
						this.value = "";
					}
					heading(R, O) {
						return (
							(this.value += `${"#".repeat(R)} ${O}

`),
							this
						);
					}
					blank() {
						return (
							(this.value += `
`),
							this
						);
					}
					li(R) {
						return (
							(this.value += `* ${R}
`),
							this
						);
					}
					table(R, O) {
						this.value += g.$X.toMarkdownTable(R, O);
					}
				}
			},
		),
		