import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/path.js';
import '../../../base/common/uri.js';
import '../../../base/node/processes.js';
import '../common/extHostWorkspace.js';
import '../common/extHostDocumentsAndEditors.js';
import '../common/extHostConfiguration.js';
import '../../../platform/workspace/common/workspace.js';
import '../common/extHostTerminalService.js';
import '../common/extHostRpcService.js';
import '../common/extHostInitDataService.js';
import '../common/extHostTask.js';
import '../../../base/common/network.js';
import '../../../platform/log/common/log.js';
import '../common/extHostApiDeprecationService.js';
import '../../../base/common/resources.js';
import '../../../../os.js';
import '../common/extHostVariableResolverService.js';
define(
			Pe[608],
			Ne([
				1, 0, 18, 2, 177, 63, 93, 56, 61, 62, 21, 34, 148, 16, 14, 144, 24, 106,
				94,
			]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c, h, $, T) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$pjd = void 0),
					(e = tt(e)),
					(h = tt(h));
				let a = class extends d.$6id {
					constructor(s, f, o, w, m, E, R, C, O) {
						super(s, f, o, w, m, E, R, C),
							(this.C = o),
							(this.D = O),
							f.remote.isRemote && f.remote.authority
								? this.registerTaskSystem(k.Schemas.vscodeRemote, {
										scheme: k.Schemas.vscodeRemote,
										authority: f.remote.authority,
										platform: process.platform,
									})
								: this.registerTaskSystem(k.Schemas.file, {
										scheme: k.Schemas.file,
										authority: "",
										platform: process.platform,
									}),
							this.a.$registerSupportedExecutions(!0, !0, !0);
					}
					async executeTask(s, f) {
						const o = f;
						if (!f.execution && o._id === void 0)
							throw new Error("Tasks to execute must include an execution");
						if (o._id !== void 0) {
							const w = d.TaskHandleDTO.from(o, this.C),
								m = await this.a.$getTaskExecution(w);
							if (m.task === void 0)
								throw new Error("Task from execution DTO is undefined");
							const E = await this.z(m, f);
							return this.a.$executeTask(w).catch(() => {}), E;
						} else {
							const w = d.TaskDTO.from(f, s);
							if (w === void 0)
								return Promise.reject(new Error("Task is not valid"));
							d.CustomExecutionDTO.is(w.execution) && (await this.y(w, f, !1));
							const m = await this.z(await this.a.$getTaskExecution(w), f);
							return this.a.$executeTask(w).catch(() => {}), m;
						}
					}
					v(s, f, o, w) {
						const m = [];
						if (w)
							for (const E of w) {
								this.A(E, o),
									(!E.definition || !s[E.definition.type]) &&
										this.f.warn(
											`The task [${E.source}, ${E.name}] uses an undefined task type. The task will be ignored in the future.`,
										);
								const R = d.TaskDTO.from(E, o.extension);
								R &&
									(m.push(R),
									d.CustomExecutionDTO.is(R.execution) &&
										f.push(this.y(R, E, !0)));
							}
						return { tasks: m, extension: o.extension };
					}
					async w(s) {
						return s;
					}
					async G(s) {
						let f = s && s.length > 0 ? s[0] : void 0;
						if (!f) {
							const o = r.URI.file((0, $.homedir)());
							f = new l.$7i({ uri: o, name: h.$kh(o), index: 0 });
						}
						return {
							uri: f.uri,
							name: f.name,
							index: f.index,
							toResource: () => {
								throw new Error("Not implemented");
							},
						};
					}
					async $resolveVariables(s, f) {
						const o = r.URI.revive(s),
							w = { process: void 0, variables: Object.create(null) },
							m = await this.b.resolveWorkspaceFolder(o),
							E = (await this.b.getWorkspaceFolders2()) ?? [],
							R = await this.D.getResolver(),
							C = m
								? {
										uri: m.uri,
										name: m.name,
										index: m.index,
										toResource: () => {
											throw new Error("Not implemented");
										},
									}
								: await this.G(E);
						for (const O of f.variables)
							w.variables[O] = await R.resolveAsync(C, O);
						if (f.process !== void 0) {
							let O;
							if (f.process.path !== void 0) {
								O = f.process.path.split(e.$yc);
								for (let A = 0; A < O.length; A++)
									O[A] = await R.resolveAsync(C, O[A]);
							}
							w.process = await S.win32.findExecutable(
								await R.resolveAsync(C, f.process.name),
								f.process.cwd !== void 0
									? await R.resolveAsync(C, f.process.cwd)
									: void 0,
								O,
							);
						}
						return w;
					}
					async $jsonTasksSupported() {
						return !0;
					}
					async $findExecutable(s, f, o) {
						return S.win32.findExecutable(s, f, o);
					}
				};
				(t.$pjd = a),
					(t.$pjd = a =
						wt(
							[
								rt(0, p.$08),
								rt(1, y.$98),
								rt(2, N.$m9),
								rt(3, P.$Xdb),
								rt(4, I.$phd),
								rt(5, n.$Qhd),
								rt(6, g.$ik),
								rt(7, c.$9gd),
								rt(8, T.$9hd),
							],
							a,
						));
			},
		),
		