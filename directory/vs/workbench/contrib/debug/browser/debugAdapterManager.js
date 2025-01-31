import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/severity.js';
import '../../../../base/common/strings.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/common/languages/language.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/jsonschemas/common/jsonContributionRegistry.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/registry/common/platform.js';
import '../common/breakpoints.js';
import '../common/debug.js';
import '../common/debugger.js';
import '../common/debugSchemas.js';
import '../../tasks/common/taskDefinitionRegistry.js';
import '../../tasks/common/taskService.js';
import '../../../services/configuration/common/configuration.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/lifecycle/common/lifecycle.js';
define(
		de[3422],
		he([
			1, 0, 15, 6, 3, 111, 37, 56, 61, 4, 11, 31, 10, 8, 57, 5, 250, 63, 30,
			3049, 112, 3280, 1812, 699, 419, 261, 18, 53, 52,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*async*/,
			i /*event*/,
			w /*lifecycle*/,
			E /*severity*/,
			C /*strings*/,
			d /*editorBrowser*/,
			m /*language*/,
			r /*nls*/,
			u /*actions*/,
			a /*commands*/,
			h /*configuration*/,
			c /*contextkey*/,
			n /*dialogs*/,
			g /*instantiation*/,
			p /*jsonContributionRegistry*/,
			o /*quickInput*/,
			f /*platform*/,
			b /*breakpoints*/,
			s /*debug*/,
			l /*debugger*/,
			y /*debugSchemas*/,
			$ /*taskDefinitionRegistry*/,
			v /*taskService*/,
			S /*configuration*/,
			I /*editorService*/,
			T /*extensions*/,
			P /*lifecycle*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$TQc = void 0),
				(E = xi(E)),
				(C = mt(C)),
				(r = mt(r));
			const k = f.$Io.as(p.$Jo.JSONContribution);
			let L = class extends w.$1c {
				constructor(M, N, A, R, O, B, U, z, F, x, H, q, V) {
					super(),
						(this.y = N),
						(this.z = A),
						(this.C = R),
						(this.F = O),
						(this.G = B),
						(this.H = U),
						(this.I = z),
						(this.J = F),
						(this.L = x),
						(this.M = H),
						(this.N = q),
						(this.O = V),
						(this.g = new Map()),
						(this.m = new i.$re()),
						(this.n = new i.$re()),
						(this.q = []),
						(this.r = new Set()),
						(this.t = []),
						(this.w = new Set()),
						(this.f = []),
						(this.b = []),
						this.P(),
						this.I.bufferChangeEvents(() => {
							(this.h = s.$y5.bindTo(z)), (this.j = s.$z5.bindTo(z));
						}),
						this.D(
							this.I.onDidChangeContext((K) => {
								K.affectsSome(this.r) &&
									(this.h.set(this.hasEnabledDebuggers()), this.R());
							}),
						),
						this.D(
							this.onDidDebuggersExtPointRead(() => {
								this.j.set(this.b.length > 0);
							}),
						);
					const G = this.D(new t.$Yh(() => this.Q(), 5e3));
					this.D(
						i.Event.any(
							q.onDidChangeTaskConfig,
							q.onDidChangeTaskProviders,
						)(() => {
							G.cancel(), G.schedule();
						}),
					),
						this.M.when(P.LifecyclePhase.Eventually).then(() =>
							this.j.set(this.b.length > 0),
						),
						this.D(
							M.onDidNewSession((K) => {
								this.w.add(K.configuration.type);
							}),
						),
						G.schedule();
				}
				P() {
					y.$PQc.setHandler((M, N) => {
						N.added.forEach((A) => {
							A.value.forEach((R) => {
								if (
									((!R.type || typeof R.type != "string") &&
										A.collector.error(r.localize(5405, null)),
									R.type !== "*")
								) {
									const O = this.getDebugger(R.type);
									if (O) O.merge(R, A.description);
									else {
										const B = this.F.createInstance(
											l.$NQc,
											this,
											R,
											A.description,
										);
										B.when?.keys().forEach((U) => this.r.add(U)),
											this.b.push(B);
									}
								}
							});
						}),
							M.forEach((A) => {
								A.value.forEach((R) => {
									R.type === "*" &&
										this.b.forEach((O) => O.merge(R, A.description));
								});
							}),
							N.removed.forEach((A) => {
								const R = A.value.map((O) => O.type);
								this.b = this.b.filter((O) => R.indexOf(O.type) === -1);
							}),
							this.R(),
							this.n.fire();
					}),
						y.$QQc.setHandler((M) => {
							this.q = M.flatMap((N) =>
								N.value.map((A) => this.F.createInstance(b.$LQc, A)),
							);
						});
				}
				Q() {
					this.N.getKnownTasks().then((M) => {
						(this.t = M.map((N) => N._label)), this.R();
					});
				}
				R() {
					const M = y.$SQc.properties.configurations.items,
						N = $.$$3.getJsonSchema(),
						A = {
							common: {
								properties: {
									name: {
										type: "string",
										description: r.localize(5406, null),
										default: "Launch",
									},
									debugServer: {
										type: "number",
										description: r.localize(5407, null),
										default: 4711,
									},
									preLaunchTask: {
										anyOf: [N, { type: ["string"] }],
										default: "",
										defaultSnippets: [{ body: { task: "", type: "" } }],
										description: r.localize(5408, null),
										examples: this.t,
									},
									postDebugTask: {
										anyOf: [N, { type: ["string"] }],
										default: "",
										defaultSnippets: [{ body: { task: "", type: "" } }],
										description: r.localize(5409, null),
										examples: this.t,
									},
									presentation: y.$RQc,
									internalConsoleOptions: s.$35,
									suppressMultipleSessionWarning: {
										type: "boolean",
										description: r.localize(5410, null),
										default: !0,
									},
								},
							},
						};
					(y.$SQc.definitions = A),
						(M.oneOf = []),
						(M.defaultSnippets = []),
						this.b.forEach((R) => {
							const O = R.getSchemaAttributes(A);
							O && M.oneOf && M.oneOf.push(...O);
							const B = R.configurationSnippets;
							B && M.defaultSnippets && M.defaultSnippets.push(...B);
						}),
						k.registerSchema(S.$EZ, y.$SQc);
				}
				registerDebugAdapterFactory(M, N) {
					return (
						M.forEach((A) => this.g.set(A, N)),
						this.h.set(this.hasEnabledDebuggers()),
						this.m.fire(),
						{
							dispose: () => {
								M.forEach((A) => this.g.delete(A));
							},
						}
					);
				}
				hasEnabledDebuggers() {
					for (const [M] of this.g) {
						const N = this.getDebugger(M);
						if (N && N.enabled) return !0;
					}
					return !1;
				}
				createDebugAdapter(M) {
					const N = this.g.get(M.configuration.type);
					if (N) return N.createDebugAdapter(M);
				}
				substituteVariables(M, N, A) {
					const R = this.g.get(M);
					return R ? R.substituteVariables(N, A) : Promise.resolve(A);
				}
				runInTerminal(M, N, A) {
					const R = this.g.get(M);
					return R ? R.runInTerminal(N, A) : Promise.resolve(void 0);
				}
				registerDebugAdapterDescriptorFactory(M) {
					return (
						this.f.push(M),
						{
							dispose: () => {
								this.unregisterDebugAdapterDescriptorFactory(M);
							},
						}
					);
				}
				unregisterDebugAdapterDescriptorFactory(M) {
					const N = this.f.indexOf(M);
					N >= 0 && this.f.splice(N, 1);
				}
				getDebugAdapterDescriptor(M) {
					const N = M.configuration,
						A = this.f.filter(
							(R) => R.type === N.type && R.createDebugAdapterDescriptor,
						);
					return A.length === 1
						? A[0].createDebugAdapterDescriptor(M)
						: Promise.resolve(void 0);
				}
				getDebuggerLabel(M) {
					const N = this.getDebugger(M);
					if (N) return N.label;
				}
				get onDidRegisterDebugger() {
					return this.m.event;
				}
				get onDidDebuggersExtPointRead() {
					return this.n.event;
				}
				canSetBreakpointsIn(M) {
					const N = M.getLanguageId();
					return !N || N === "jsonc" || N === "log"
						? !1
						: this.z.getValue("debug").allowBreakpointsEverywhere
							? !0
							: this.q.some((A) => A.language === N && A.enabled);
				}
				getDebugger(M) {
					return this.b.find((N) => C.$Mf(N.type, M));
				}
				getEnabledDebugger(M) {
					const N = this.getDebugger(M);
					return N && N.enabled ? N : void 0;
				}
				someDebuggerInterestedInLanguage(M) {
					return !!this.b
						.filter((N) => N.enabled)
						.find((N) => N.interestedInLanguage(M));
				}
				async guessDebugger(M) {
					const N = this.y.activeTextEditorControl;
					let A = [],
						R = null,
						O = null;
					if ((0, d.$0sb)(N)) {
						O = N.getModel();
						const H = O ? O.getLanguageId() : void 0;
						H && (R = this.J.getLanguageName(H));
						const q = this.b
							.filter((V) => V.enabled)
							.filter((V) => H && V.interestedInLanguage(H));
						if (q.length === 1) return q[0];
						q.length > 1 && (A = q);
					}
					if (
						((!R || M || (O && this.canSetBreakpointsIn(O))) &&
							A.length === 0 &&
							(await this.activateDebuggers("onDebugInitialConfigurations"),
							(A = this.b
								.filter((H) => H.enabled)
								.filter(
									(H) =>
										H.hasInitialConfiguration() ||
										H.hasDynamicConfigurationProviders() ||
										H.hasConfigurationProvider(),
								))),
						A.length === 0 && R)
					) {
						R.indexOf(" ") >= 0 && (R = `'${R}'`);
						const { confirmed: H } = await this.L.confirm({
							type: E.default.Warning,
							message: r.localize(5411, null, R),
							primaryButton: r.localize(5412, null, R),
						});
						H &&
							(await this.G.executeCommand(
								"debug.installAdditionalDebuggers",
								R,
							));
						return;
					}
					this.S(),
						A.sort((H, q) => H.label.localeCompare(q.label)),
						(A = A.filter((H) => !H.isHiddenFromDropdown));
					const B = [],
						U = [];
					A.forEach((H) => {
						const q = H.getMainExtensionDescriptor();
						(q.id && this.u?.has(q.id)) || this.w.has(H.type)
							? B.push(H)
							: U.push(H);
					});
					const z = [];
					B.length > 0 &&
						z.push(
							{ type: "separator", label: r.localize(5413, null) },
							...B.map((H) => ({ label: H.label, debugger: H })),
						),
						U.length > 0 &&
							(z.length > 0 && z.push({ type: "separator", label: "" }),
							z.push(...U.map((H) => ({ label: H.label, debugger: H })))),
						z.push(
							{ type: "separator", label: "" },
							{ label: R ? r.localize(5414, null, R) : r.localize(5415, null) },
						);
					const F = this.O.getMenuActions(
						u.$XX.DebugCreateConfiguration,
						this.I,
					);
					for (const [, H] of F) for (const q of H) z.push(q);
					const x = r.localize(5416, null);
					return this.C.pick(z, { activeItem: z[0], placeHolder: x }).then(
						async (H) => {
							if (H && "debugger" in H && H.debugger) return H.debugger;
							if (H instanceof u.$2X) {
								H.run();
								return;
							}
							H && this.G.executeCommand("debug.installAdditionalDebuggers", R);
						},
					);
				}
				S() {
					if (!this.u) {
						this.u = new Set();
						const M = this.H.getExtensionsStatus();
						for (const N in M) M[N].activationTimes && this.u.add(N);
					}
				}
				async activateDebuggers(M, N) {
					this.S();
					const A = [
						this.H.activateByEvent(M),
						this.H.activateByEvent("onDebug"),
					];
					N && A.push(this.H.activateByEvent(`${M}:${N}`)),
						await Promise.all(A);
				}
			};
			(e.$TQc = L),
				(e.$TQc = L =
					Ne(
						[
							j(1, I.$IY),
							j(2, h.$gj),
							j(3, o.$DJ),
							j(4, g.$Li),
							j(5, a.$ek),
							j(6, T.$q2),
							j(7, c.$6j),
							j(8, m.$nM),
							j(9, n.$GO),
							j(10, P.$n6),
							j(11, v.$Zpc),
							j(12, u.$YX),
						],
						L,
					));
		},
	)
