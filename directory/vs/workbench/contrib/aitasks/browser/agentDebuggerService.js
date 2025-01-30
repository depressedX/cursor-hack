import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../common/editor.js';
import '../../../services/views/common/viewsService.js';
import './aitasks.js';
import '../../files/browser/fileConstants.js';
import '../../terminal/browser/terminal.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/magicLink/browser/magicLinkService.js';
import '../../../services/ai/browser/aiService.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/aiTasks/browser/aiTaskServiceInterface.js';
define(
			de[1929],
			he([
				1, 0, 148, 76, 3, 9, 31, 22, 20, 5, 45, 44, 89, 3002, 554, 107, 66, 18,
				241, 118, 56, 25, 516,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*aiserver_pb*/,
				i /*buffer*/,
				w /*lifecycle*/,
				E /*uri*/,
				C /*commands*/,
				d /*files*/,
				m /*extensions*/,
				r /*instantiation*/,
				u /*reactiveStorageService*/,
				a /*editor*/,
				h /*viewsService*/,
				c /*aitasks*/,
				n /*fileConstants*/,
				g /*terminal*/,
				p /*editorGroupsService*/,
				o /*editorService*/,
				f /*magicLinkService*/,
				b /*aiService*/,
				s /*editorBrowser*/,
				l /*workspace*/,
				y /*aiTaskServiceInterface*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c9b = e.$b9b = void 0),
					(e.$b9b = (0, r.$Mi)("agentDebuggerService"));
				let $ = class extends w.$1c {
					constructor(S, I, T, P, k, L, D, M, N, A, R, O) {
						super(),
							(this.f = S),
							(this.g = I),
							(this.h = T),
							(this.j = P),
							(this.m = k),
							(this.n = L),
							(this.q = D),
							(this.r = M),
							(this.s = N),
							(this.t = A),
							(this.u = R),
							(this.w = O),
							(this.y = void 0),
							(this.c = (B, U) => {
								this.recordTask(B, U);
							}),
							this.f.registerAgentDebuggerRecorder(this.c);
					}
					dispose() {
						this.f.unregisterAgentDebuggerRecorder(this.c), super.dispose();
					}
					async recordTask(S, I) {
						if (!!1) return;
						if (
							this.g.applicationUserPersistentStorage.agentDebuggerState
								.isRecordingTasks === !1
						) {
							console.log(
								"AgentDebuggerService: Not recording tasks because it is disabled in the reactive storage service.",
							);
							return;
						}
						console.log("AgentDebuggerService: Recording task: " + S.taskId);
						const P = await this.h.createTerminal({
								config: {
									isFeatureTerminal: !0,
									isTransient: !0,
									hideFromUser: !0,
								},
							}),
							k = await this.executeAndGetFirstLine(
								P,
								"echo $EVERYSPHERE_ROOT",
							);
						if (k.length < 10) throw new Error("EVERYSPHERE_ROOT is not set");
						await this.m.executeCommand(n.$cVb);
						const M = this.n
								.getGroups(p.GroupsOrder.GRID_APPEARANCE)
								.map((R) => R.activeEditor)
								.map((R) => (R ? a.$A1.getOriginalUri(R) : null))
								.filter((R) => R != null),
							N = {
								instruction: I.toJson(),
								openFiles: M.map((R) => this.w.asRelativePath(R)),
								timeId: new Date().toISOString().replace(/[:.]/g, "-"),
								unixTimestampInMs: Date.now().toString(),
							},
							A = `${k}/eval/eval-agent/recordedTasks/dumps/${N.timeId}/taskInfo.json`;
						await this.q.writeFile(
							E.URI.file(A),
							i.$Te.fromString(JSON.stringify(N, null, 4)),
						),
							P.sendText(`${k}/scripts/record-task.sh ${N.timeId}`, !0);
					}
					async executeAndGetFirstLine(S, I) {
						return new Promise((T, P) => {
							let k = [],
								L = {
									current: setTimeout(() => {
										P("Timeout");
									}, 1e3),
								};
							const D = S.onLineData((N) => {
								clearTimeout(L.current),
									k.push(N),
									(L.current = setTimeout(() => {
										T(N), D.dispose(), M.dispose();
									}, 1e3));
							});
							S.sendText(I, !0);
							const M = S.onExit((N) => {
								D.dispose(),
									N === void 0
										? P(new Error("Could not execute command"))
										: T(
												k.join(`
`),
											),
									M.dispose();
							});
						});
					}
					async getRecordedTaskInfos(S) {
						if (S?.useCached && this.y) return this.y;
						if (!!1) return [];
						const T = await this.h.createTerminal({
								config: {
									isFeatureTerminal: !0,
									isTransient: !0,
									hideFromUser: !0,
								},
							}),
							P = await this.executeAndGetFirstLine(
								T,
								"echo $EVERYSPHERE_ROOT",
							);
						if (P.length < 10) throw new Error("EVERYSPHERE_ROOT is not set");
						const k = `${P}/eval/eval-agent/recordedTasks`,
							L = await this.q.resolve(E.URI.file(k));
						if (!L.children) return [];
						const D = L.children.filter((B) => B.name !== "dumps"),
							M = await Promise.all(
								D.map(async (B) => {
									const U = `${k}/${B.name}/taskInfo.json`,
										z = await this.q.resolve(E.URI.file(U)),
										F = await this.q.readFile(z.resource),
										x = JSON.parse(F.value.toString());
									return (x.id = B.name), (x.favorite = !0), x;
								}),
							),
							N = `${k}/dumps`,
							A = await this.q.resolve(E.URI.file(N));
						if (!A.children) return M;
						const R = A.children,
							O = await Promise.all(
								R.map(async (B) => {
									const U = `${N}/${B.name}/taskInfo.json`,
										z = await this.q.resolve(E.URI.file(U)),
										F = await this.q.readFile(z.resource),
										x = JSON.parse(F.value.toString());
									return (x.id = B.name), (x.favorite = !1), x;
								}),
							);
						return (
							O.sort(
								(B, U) =>
									parseInt(U.unixTimestampInMs) - parseInt(B.unixTimestampInMs),
							),
							(this.y = M.concat(O)),
							this.y
						);
					}
					async checkoutRecordedTask(S) {
						if (!!1) return;
						const T = await this.h.createTerminal({
								config: {
									isFeatureTerminal: !0,
									isTransient: !0,
									hideFromUser: !0,
								},
							}),
							[P, k] = (
								await this.executeAndGetFirstLine(
									T,
									'echo "$EVERYSPHERE_ROOT;$EVERYSPHERE_CLONE_ROOT"',
								)
							)
								.split(";")
								.map((F) => F.trim())
								.slice(0, 2);
						if (P.length < 10) throw new Error("EVERYSPHERE_ROOT is not set");
						if (k.length < 10)
							throw new Error("EVERYSPHERE_CLONE_ROOT is not set");
						if ((await T.getCwd()) !== k) {
							await this.m.executeCommand(
								"vscode.openFolder",
								E.URI.file(k),
								!0,
							);
							return;
						}
						await this.m.executeCommand(n.$cVb);
						const D = this.n.getGroups(p.GroupsOrder.GRID_APPEARANCE);
						D.forEach((F) => {
							F.closeAllEditors();
						});
						const M = S.openFiles
								.map((F, x) => this.n.addGroup(D[0], p.GroupDirection.RIGHT))
								.reverse(),
							N = t.$eI.fromJson(S.instruction),
							A = N.currentFile?.relativeWorkspacePath,
							R = S.openFiles;
						let O = -1;
						const B = R.map(async (F, x) => {
							const H = await this.t.getMagicURIForText(F),
								q = await this.r.openEditor({ resource: H }, M[x].id);
							return F === A && (O = x), q;
						});
						T.sendText(`${P}/scripts/checkout-task.sh ${S.id}`, !0);
						const U = await Promise.all(B);
						if (O !== -1) {
							const F = N.currentFile?.selection;
							if (F && F.endPosition && F.startPosition) {
								const H = U[O]?.getControl();
								H &&
									(0, s.$0sb)(H) &&
									(H.setSelection({
										startLineNumber: F.startPosition.line,
										startColumn: F.startPosition.column,
										endLineNumber: F.endPosition.line,
										endColumn: F.endPosition.column,
									}),
									this.n.activateGroup(M[O].id));
							}
						}
						this.m.executeCommand("aitasks.focus").then(() => {}),
							this.s
								.getViewWithId(c.IAitasksPaneConstants.VIEW_ID)
								?.newTaskWithInstruction(N, { autostart: !0 });
					}
				};
				(e.$c9b = $),
					(e.$c9b = $ =
						Ne(
							[
								j(0, y.$a9b),
								j(1, u.$0zb),
								j(2, g.$iIb),
								j(3, g.$lIb),
								j(4, C.$ek),
								j(5, p.$EY),
								j(6, d.$ll),
								j(7, o.$IY),
								j(8, h.$HMb),
								j(9, f.$q8b),
								j(10, b.$Nfc),
								j(11, l.$Vi),
							],
							$,
						)),
					(0, m.$lK)(e.$b9b, $, m.InstantiationType.Delayed);
			},
		),
		