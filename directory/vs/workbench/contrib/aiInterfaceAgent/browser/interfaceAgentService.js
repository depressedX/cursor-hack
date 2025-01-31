import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/lifecycle.js';
import '../../../services/ai/browser/aiService.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/editor/common/editorService.js';
import '../../../common/editor.js';
import '../../../../base/common/buffer.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../base/common/resources.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../../proto/aiserver/v1/interface_agent_pb.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../base/common/map.js';
import '../../../services/ai/common/simpleTestService.js';
import '../../../../base/common/constants.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../services/preferences/common/preferences.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../editor/common/languages.js';
import '../../../../base/common/cancellation.js';
import '../../../services/aiTasks/browser/aiTaskServiceInterface.js';
import '../../../services/ai/browser/utils.js';
define(
			de[3941],
			he([
				1, 0, 5, 3, 118, 22, 9, 20, 47, 32, 25, 18, 44, 76, 56, 19, 42, 1476,
				45, 148, 59, 697, 58, 10, 131, 85, 204, 74, 33, 516, 191,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*instantiation*/,
				i /*lifecycle*/,
				w /*aiService*/,
				E /*files*/,
				C /*uri*/,
				d /*extensions*/,
				m /*uuid*/,
				r /*telemetry*/,
				u /*workspace*/,
				a /*editorService*/,
				h /*editor*/,
				c /*buffer*/,
				n /*editorBrowser*/,
				g /*resources*/,
				p /*resolverService*/,
				o /*interface_agent_pb*/,
				f /*reactiveStorageService*/,
				b /*aiserver_pb*/,
				s /*map*/,
				l /*simpleTestService*/,
				y /*constants*/,
				$ /*configuration*/,
				v /*preferences*/,
				S /*textfiles*/,
				I /*outlineModel*/,
				T /*languages*/,
				P /*cancellation*/,
				k /*aiTaskServiceInterface*/,
				L /*utils*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$39b = e.$29b = void 0),
					(e.$29b = (0, t.$Mi)("interfaceAgentService"));
				let D = class extends i.$1c {
					constructor(N, A, R, O, B, U, z, F, x, H, q, V, G) {
						super(),
							(this.b = N),
							(this.c = A),
							(this.f = R),
							(this.g = O),
							(this.h = B),
							(this.j = U),
							(this.m = z),
							(this.n = F),
							(this.q = x),
							(this.r = H),
							(this.s = q),
							(this.u = V),
							(this.w = G),
							(this.C = new s.$Jc(100)),
							(this.a = this.D(this.g.createScoped(this))),
							this.a.onChangeEffect({
								onChange: () => {
									this.g.nonPersistentStorage.aiInterfaceState.activeAgents
										.filter(
											(W) =>
												!this.g.workspaceUserPersistentStorage.tasksData.activeServerTaskUuids.includes(
													W.taskUuid,
												),
										)
										.forEach((W) => {
											this.onPauseTask(W.taskUuid);
										});
								},
								deps: [
									() =>
										this.g.workspaceUserPersistentStorage.tasksData
											.activeServerTaskUuids,
								],
								runNowToo: !1,
							});
					}
					configureTestRunner(N) {
						this.q.insertDummyTestConfig(N),
							this.s.openWorkspaceSettings({
								jsonEditor: !0,
								revealSetting: { key: "testRunner.config" },
							});
					}
					testUriFromInterfaceUri(N) {
						const A = N.path.replace(/\.ts$/, ".test.ts");
						return N.with({ path: A });
					}
					async implementationUriFromInterfaceUri(N) {
						const A = N.path.replace(/\.ts$/, ".impl.ts"),
							R = N.with({ path: A });
						if (await this.c.exists(R)) return R;
					}
					async getInterfaceAgentClientState(N) {
						const A = this.testUriFromInterfaceUri(N),
							R = (await this.c.exists(A)) ? A : void 0,
							O = await this.implementationUriFromInterfaceUri(N),
							B = this.j.asRelativePath(N),
							U = R ? this.j.asRelativePath(R) : void 0,
							z = O ? this.j.asRelativePath(O) : void 0;
						let F = [],
							x = [],
							H = [],
							q,
							V,
							G;
						try {
							(q = await this.n.createModelReference(N)),
								(F = q.object.textEditorModel
									.getValue()
									.split(q.object.textEditorModel.getEOL())),
								R &&
									((G = await this.n.createModelReference(R)),
									(H = G.object.textEditorModel
										.getValue()
										.split(G.object.textEditorModel.getEOL()))),
								O &&
									((V = await this.n.createModelReference(O)),
									(x = V.object.textEditorModel
										.getValue()
										.split(V.object.textEditorModel.getEOL())));
						} finally {
							q?.dispose(), V?.dispose(), G?.dispose();
						}
						const K = this.q.getTestConfig(N);
						if (!K) throw new Error("no test config found for interface");
						return {
							interfaceRelativeWorkspacePath: B,
							interfaceLines: F,
							testRelativeWorkspacePath: U,
							testLines: H,
							implementationRelativeWorkspacePath: z,
							implementationLines: x,
							language: K.language,
							testingFramework: K.testingFramework,
						};
					}
					async getInterfaceSymbol(N) {
						const A = new P.$Ce(),
							R = setTimeout(() => {
								A.cancel();
							}, 5e3),
							O = await this.n.createModelReference(N),
							U = (
								await this.w.getOrCreate(O.object.textEditorModel, A.token)
							).getTopLevelSymbols();
						if ((clearTimeout(R), U.length === 0)) return;
						const z = U.find((F) => F.kind === T.SymbolKind.Interface);
						if (z) return z;
					}
					async startInterfaceAgent(N) {
						if (!this.q.hasTestConfig(N)) {
							this.configureTestRunner(N);
							return;
						}
						if (
							this.g.nonPersistentStorage.aiInterfaceState.activeAgents.some(
								(O) => g.$dh.isEqual(O.interfaceUri, N),
							)
						)
							return;
						const A = this.testUriFromInterfaceUri(N);
						if (!(await this.c.exists(A))) {
							const O = await this.getInterfaceSymbol(N);
							if (!O) {
								console.error("no interface symbol found for uri", N);
								return;
							}
							const B = this.q.getTestBoilerplate(A, O.name, N);
							if (!B) {
								console.error("no test boilerplate found for uri", N);
								return;
							}
							await this.u.write(A, B);
						}
						console.log("STARTING THE INTERFACE AGENT", N);
						const R = (0, m.$9g)();
						try {
							const O = this.b.getModelDetails();
							this.f.publicLogCapture("submitted.startInterfaceAgent");
							const [B, U] = this.b.registerNewGeneration({
									metadata: void 0,
									generationUUID: R,
								}),
								z = await this.getInterfaceAgentClientState(N),
								F = new b.$oI({
									modelDetails: O,
									debuggingOnlyLiveMode:
										this.g.applicationUserPersistentStorage.agentDebuggerState
											.priomptLiveMode,
									interfaceAgentClientState: z,
								}),
								H = await (await this.b.aiClient()).interfaceAgentInit(F, {
									signal: U.signal,
									headers: (0, L.$m6b)(R),
								});
							console.log(
								"got response from interface agent init",
								H,
								H.taskUuid,
							),
								this.C.set(H.taskUuid, new i.$Zc()),
								this.g.setNonPersistentStorage(
									"aiInterfaceState",
									"activeAgents",
									(V) => [
										...V,
										{
											interfaceUri: N,
											taskUuid: H.taskUuid,
											status: new o.$BD({}),
										},
									],
								);
							const q = this.h.createTask({
								taskInitResponse: H,
								nonPersistent: !0,
							});
							if (!q.ok()) {
								console.error("error creating task", q.err);
								return;
							}
							this.y(N);
						} catch (O) {
							console.error("interface agent error", O);
						} finally {
							this.g.setNonPersistentStorage("inprogressAIGenerations", (O) =>
								O.filter((B) => B.generationUUID !== R),
							);
						}
					}
					async y(N) {
						const A = await this.streamInterfaceAgentStatus(N);
						if (!A) {
							console.error("no stream found for uri", N);
							return;
						}
						for await (const R of A) {
							const O = R.status;
							if (!O) {
								console.error("no status found for uri", N);
								continue;
							}
							let B = !1;
							if (
								(this.g.setNonPersistentStorage(
									"aiInterfaceState",
									"activeAgents",
									(U) =>
										U.map((z) =>
											g.$dh.isEqual(z.interfaceUri, N)
												? ((B = !0), { ...z, status: O })
												: z,
										),
								),
								!B)
							) {
								console.log("cancelling stream for uri", N);
								return;
							}
						}
					}
					async streamInterfaceAgentStatus(N) {
						const A = this.z(N);
						if (!A) {
							console.error("no task uuid found for uri", N);
							return;
						}
						const R = new b.$qI({ taskUuid: A }),
							O = (0, m.$9g)(),
							B = new AbortController();
						return (
							this.C.has(A) || this.C.set(A, new i.$Zc()),
							this.C.get(A)?.add({ dispose: () => B.abort() }),
							(await this.b.aiClient()).streamInterfaceAgentStatus(R, {
								headers: (0, L.$m6b)(O),
								signal: B.signal,
							})
						);
					}
					async getInterfaceAgentStatus(N) {
						if (!this.q.hasTestConfig(N))
							return new b.$tI({
								status: {
									validateConfiguration: o.InterfaceAgentStatus_Status.FAILURE,
									validateConfigurationMessage: `${y.$MV} Configure the testRunner.config setting in your .vscode/settings.json file.`,
								},
							});
						if (!(await this.getInterfaceSymbol(N)))
							return new b.$tI({
								status: {
									validateConfiguration: o.InterfaceAgentStatus_Status.FAILURE,
									validateConfigurationMessage:
										"No interface symbol found. Please write a valid interface in this file.",
								},
							});
						const R = (0, m.$9g)();
						try {
							const O = await this.getInterfaceAgentClientState(N),
								[B, U] = this.b.registerNewGeneration({
									metadata: void 0,
									generationUUID: R,
								}),
								z = new b.$oI({ interfaceAgentClientState: O }),
								x = (await this.b.aiClient()).taskGetInterfaceAgentStatus(z, {
									signal: U.signal,
									headers: (0, L.$m6b)(R),
								}),
								H = await this.h.handleTaskGet(x, U.signal);
							if (!H.ok())
								throw (
									(console.error("error getting interface agent status", H.err),
									H.err)
								);
							return H.v;
						} catch (O) {
							console.error("interface agent status error", O);
						} finally {
							this.g.setNonPersistentStorage("inprogressAIGenerations", (O) =>
								O.filter((B) => B.generationUUID !== R),
							);
						}
					}
					z(N) {
						const R =
							this.g.nonPersistentStorage.aiInterfaceState.activeAgents.find(
								(O) => g.$dh.isEqual(O.interfaceUri, N),
							);
						if (!R) {
							console.error("no active agent found for uri", N);
							return;
						}
						return R.taskUuid;
					}
					async pauseInterfaceAgent(N) {
						const A = this.z(N);
						if (!A) {
							console.error("no task uuid found for uri", N);
							return;
						}
						await this.h.killTask(A);
					}
					async onPauseTask(N) {
						this.g.setNonPersistentStorage(
							"aiInterfaceState",
							"activeAgents",
							(R) => R.filter((O) => O.taskUuid !== N),
						);
						const A = this.C.get(N);
						A && (A.dispose(), this.C.delete(N));
					}
					async newInterfaceFromName(N) {
						const A = this.m.activeEditorPane;
						let R = h.$A1.getOriginalUri(A?.input),
							O = "	";
						if (R) {
							const H = A?.getControl();
							if ((0, n.$0sb)(H)) {
								const q = H.getModel();
								q &&
									(O = q.getOptions().insertSpaces
										? " ".repeat(q.getOptions().tabSize)
										: "	");
							}
						}
						let B = N.charAt(0).toUpperCase() + N.slice(1);
						try {
							B = (await (await this.b.aiClient()).toCamelCase({ text: N }))
								.text;
						} catch {}
						const z = `${B.charAt(0).toLowerCase() + B.slice(1)}.ai.ts`,
							F = `export interface ${B} {

${O}// TODO: add the methods you want here, and the AI will implement a class with those methods for you

}

export function New${B}(): ${B} {
${O}throw new Error("Unimplemented. The AI will implement this function for you! You're in control of the function signature.")
}`;
						if (!R) {
							if (
								(console.log("no current file uri, using workspace root"),
								this.j.getWorkspace().folders.length === 0)
							) {
								console.error(
									"no workspace root; cannot create new interface from name",
								);
								return;
							}
							R = this.j.getWorkspace().folders[0].uri;
						}
						const x = C.URI.joinPath(
							R.with({ path: R.path.split("/").slice(0, -1).join("/") }),
							z,
						);
						try {
							await this.c.createFile(x, c.$Te.fromString(F));
						} catch (H) {
							console.log("error creating file", H);
						}
						await this.m.openEditor({ resource: x });
					}
				};
				(e.$39b = D),
					(e.$39b = D =
						Ne(
							[
								j(0, w.$Nfc),
								j(1, E.$ll),
								j(2, r.$km),
								j(3, f.$0zb),
								j(4, k.$a9b),
								j(5, u.$Vi),
								j(6, a.$IY),
								j(7, p.$MO),
								j(8, l.$19b),
								j(9, $.$gj),
								j(10, v.$7Z),
								j(11, S.$kZ),
								j(12, I.$9Db),
							],
							D,
						)),
					(0, d.$lK)(e.$29b, D, d.InstantiationType.Delayed);
			},
		)
