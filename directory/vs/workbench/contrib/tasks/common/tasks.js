import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/types.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/objects.js';
import '../../../../platform/contextkey/common/contextkey.js';
import './taskDefinitionRegistry.js';
import '../../../../platform/configuration/common/configuration.js';
define(
			de[424],
			he([1, 0, 4, 28, 19, 82, 8, 699, 10]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TaskDefinition =
						e.TasksSchemaProperties =
						e.TaskSettingId =
						e.KeyedTaskIdentifier =
						e.TaskEvent =
						e.TaskRunSource =
						e.TaskRunType =
						e.TaskEventKind =
						e.$i4 =
						e.JsonSchemaVersion =
						e.ExecutionEngine =
						e.$h4 =
						e.$g4 =
						e.$f4 =
						e.$e4 =
						e.$d4 =
						e.RunOptions =
						e.RunOnOptions =
						e.DependsOrder =
						e.TaskSourceKind =
						e.TaskScope =
						e.TaskGroup =
						e.CommandString =
						e.RuntimeType =
						e.PresentationOptions =
						e.PanelKind =
						e.RevealProblemKind =
						e.RevealKind =
						e.CommandOptions =
						e.$c4 =
						e.ShellQuoting =
						e.$b4 =
						e.$a4 =
						e.$_3 =
							void 0),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w)),
					(E = mt(E)),
					(e.$_3 = "settings"),
					(e.$a4 = new C.$5j("taskRunning", !1, t.localize(9945, null))),
					(e.$b4 = t.localize2(9947, "Tasks"));
				var r;
				(function (z) {
					(z[(z.Escape = 1)] = "Escape"),
						(z[(z.Strong = 2)] = "Strong"),
						(z[(z.Weak = 3)] = "Weak");
				})(r || (e.ShellQuoting = r = {})),
					(e.$c4 = "$customized"),
					(function (z) {
						function F(x) {
							if (!x) return z.Strong;
							switch (x.toLowerCase()) {
								case "escape":
									return z.Escape;
								case "strong":
									return z.Strong;
								case "weak":
									return z.Weak;
								default:
									return z.Strong;
							}
						}
						z.from = F;
					})(r || (e.ShellQuoting = r = {}));
				var u;
				(function (z) {
					z.defaults = { cwd: "${workspaceFolder}" };
				})(u || (e.CommandOptions = u = {}));
				var a;
				(function (z) {
					(z[(z.Always = 1)] = "Always"),
						(z[(z.Silent = 2)] = "Silent"),
						(z[(z.Never = 3)] = "Never");
				})(a || (e.RevealKind = a = {})),
					(function (z) {
						function F(x) {
							switch (x.toLowerCase()) {
								case "always":
									return z.Always;
								case "silent":
									return z.Silent;
								case "never":
									return z.Never;
								default:
									return z.Always;
							}
						}
						z.fromString = F;
					})(a || (e.RevealKind = a = {}));
				var h;
				(function (z) {
					(z[(z.Never = 1)] = "Never"),
						(z[(z.OnProblem = 2)] = "OnProblem"),
						(z[(z.Always = 3)] = "Always");
				})(h || (e.RevealProblemKind = h = {})),
					(function (z) {
						function F(x) {
							switch (x.toLowerCase()) {
								case "always":
									return z.Always;
								case "never":
									return z.Never;
								case "onproblem":
									return z.OnProblem;
								default:
									return z.OnProblem;
							}
						}
						z.fromString = F;
					})(h || (e.RevealProblemKind = h = {}));
				var c;
				(function (z) {
					(z[(z.Shared = 1)] = "Shared"),
						(z[(z.Dedicated = 2)] = "Dedicated"),
						(z[(z.New = 3)] = "New");
				})(c || (e.PanelKind = c = {})),
					(function (z) {
						function F(x) {
							switch (x.toLowerCase()) {
								case "shared":
									return z.Shared;
								case "dedicated":
									return z.Dedicated;
								case "new":
									return z.New;
								default:
									return z.Shared;
							}
						}
						z.fromString = F;
					})(c || (e.PanelKind = c = {}));
				var n;
				(function (z) {
					z.defaults = {
						echo: !0,
						reveal: a.Always,
						revealProblems: h.Never,
						focus: !1,
						panel: c.Shared,
						showReuseMessage: !0,
						clear: !1,
					};
				})(n || (e.PresentationOptions = n = {}));
				var g;
				(function (z) {
					(z[(z.Shell = 1)] = "Shell"),
						(z[(z.Process = 2)] = "Process"),
						(z[(z.CustomExecution = 3)] = "CustomExecution");
				})(g || (e.RuntimeType = g = {})),
					(function (z) {
						function F(H) {
							switch (H.toLowerCase()) {
								case "shell":
									return z.Shell;
								case "process":
									return z.Process;
								case "customExecution":
									return z.CustomExecution;
								default:
									return z.Process;
							}
						}
						z.fromString = F;
						function x(H) {
							switch (H) {
								case z.Shell:
									return "shell";
								case z.Process:
									return "process";
								case z.CustomExecution:
									return "customExecution";
								default:
									return "process";
							}
						}
						z.toString = x;
					})(g || (e.RuntimeType = g = {}));
				var p;
				(function (z) {
					function F(x) {
						return i.$lg(x) ? x : x.value;
					}
					z.value = F;
				})(p || (e.CommandString = p = {}));
				var o;
				(function (z) {
					(z.Clean = { _id: "clean", isDefault: !1 }),
						(z.Build = { _id: "build", isDefault: !1 }),
						(z.Rebuild = { _id: "rebuild", isDefault: !1 }),
						(z.Test = { _id: "test", isDefault: !1 });
					function F(H) {
						return (
							H === z.Clean._id ||
							H === z.Build._id ||
							H === z.Rebuild._id ||
							H === z.Test._id
						);
					}
					z.is = F;
					function x(H) {
						if (H !== void 0)
							return i.$lg(H) ? (F(H) ? { _id: H, isDefault: !1 } : void 0) : H;
					}
					z.from = x;
				})(o || (e.TaskGroup = o = {}));
				var f;
				(function (z) {
					(z[(z.Global = 1)] = "Global"),
						(z[(z.Workspace = 2)] = "Workspace"),
						(z[(z.Folder = 3)] = "Folder");
				})(f || (e.TaskScope = f = {}));
				var b;
				(function (z) {
					(z.Workspace = "workspace"),
						(z.Extension = "extension"),
						(z.InMemory = "inMemory"),
						(z.WorkspaceFile = "workspaceFile"),
						(z.User = "user");
					function F(x) {
						switch (x) {
							case z.User:
								return m.ConfigurationTarget.USER;
							case z.WorkspaceFile:
								return m.ConfigurationTarget.WORKSPACE;
							default:
								return m.ConfigurationTarget.WORKSPACE_FOLDER;
						}
					}
					z.toConfigurationTarget = F;
				})(b || (e.TaskSourceKind = b = {}));
				var s;
				(function (z) {
					(z.parallel = "parallel"), (z.sequence = "sequence");
				})(s || (e.DependsOrder = s = {}));
				var l;
				(function (z) {
					(z[(z.default = 1)] = "default"),
						(z[(z.folderOpen = 2)] = "folderOpen");
				})(l || (e.RunOnOptions = l = {}));
				var y;
				(function (z) {
					z.defaults = {
						reevaluateOnRerun: !0,
						runOn: l.default,
						instanceLimit: 1,
					};
				})(y || (e.RunOptions = y = {}));
				class $ {
					constructor(F, x, H, q, V, G) {
						(this._label = ""),
							(this._id = F),
							x && (this._label = x),
							H && (this.type = H),
							(this.runOptions = q),
							(this.configurationProperties = V),
							(this._source = G);
					}
					getDefinition(F) {}
					getMapKey() {
						return this._id;
					}
					getKey() {}
					getCommonTaskId() {
						const F = { folder: this.d(), id: this._id };
						return JSON.stringify(F);
					}
					clone() {
						return this.f(Object.assign({}, this));
					}
					getWorkspaceFolder() {}
					getWorkspaceFileName() {}
					getTelemetryKind() {
						return "unknown";
					}
					matches(F, x = !1) {
						if (F === void 0) return !1;
						if (i.$lg(F))
							return (
								F === this._label ||
								F === this.configurationProperties.identifier ||
								(x && F === this._id)
							);
						const H = this.getDefinition(!0);
						return H !== void 0 && H._key === F._key;
					}
					getQualifiedLabel() {
						const F = this.getWorkspaceFolder();
						return F ? `${this._label} (${F.name})` : this._label;
					}
					getTaskExecution() {
						return { id: this._id, task: this };
					}
					addTaskLoadMessages(F) {
						this.c === void 0 && (this.c = []),
							F && (this.c = this.c.concat(F));
					}
					get taskLoadMessages() {
						return this.c;
					}
				}
				e.$d4 = $;
				class v extends $ {
					constructor(F, x, H, q, V, G, K, J) {
						super(F, H, void 0, K, J, x),
							(this.command = {}),
							(this._source = x),
							(this.hasDefinedMatchers = G),
							V && (this.command = V);
					}
					clone() {
						return new v(
							this._id,
							this._source,
							this._label,
							this.type,
							this.command,
							this.hasDefinedMatchers,
							this.runOptions,
							this.configurationProperties,
						);
					}
					customizes() {
						if (this._source && this._source.customizes)
							return this._source.customizes;
					}
					getDefinition(F = !1) {
						if (F && this._source.customizes !== void 0)
							return this._source.customizes;
						{
							let x;
							switch (this.command ? this.command.runtime : void 0) {
								case g.Shell:
									x = "shell";
									break;
								case g.Process:
									x = "process";
									break;
								case g.CustomExecution:
									x = "customExecution";
									break;
								case void 0:
									x = "$composite";
									break;
								default:
									throw new Error("Unexpected task runtime");
							}
							return { type: x, _key: this._id, id: this._id };
						}
					}
					static is(F) {
						return F instanceof v;
					}
					getMapKey() {
						const F = this._source.config.workspaceFolder;
						return F
							? `${F.uri.toString()}|${this._id}|${this.instance}`
							: `${this._id}|${this.instance}`;
					}
					d() {
						return this._source.kind === b.User
							? e.$_3
							: this._source.config.workspaceFolder?.uri.toString();
					}
					getCommonTaskId() {
						return this._source.customizes
							? super.getCommonTaskId()
							: (this.getKey() ?? super.getCommonTaskId());
					}
					getKey() {
						const F = this.d();
						if (!F) return;
						let x = this.configurationProperties.identifier;
						this._source.kind !== b.Workspace && (x += this._source.kind);
						const H = { type: e.$c4, folder: F, id: x };
						return JSON.stringify(H);
					}
					getWorkspaceFolder() {
						return this._source.config.workspaceFolder;
					}
					getWorkspaceFileName() {
						return this._source.config.workspace &&
							this._source.config.workspace.configuration
							? w.$kh(this._source.config.workspace.configuration)
							: void 0;
					}
					getTelemetryKind() {
						return this._source.customizes
							? "workspace>extension"
							: "workspace";
					}
					f(F) {
						return new v(
							F._id,
							F._source,
							F._label,
							F.type,
							F.command,
							F.hasDefinedMatchers,
							F.runOptions,
							F.configurationProperties,
						);
					}
				}
				e.$e4 = v;
				class S extends $ {
					constructor(F, x, H, q, V, G, K) {
						super(F, H, q, G, K, x), (this._source = x), (this.configures = V);
					}
					static is(F) {
						return F instanceof S;
					}
					f(F) {
						return F;
					}
					getDefinition() {
						return this.configures;
					}
					getWorkspaceFileName() {
						return this._source.config.workspace &&
							this._source.config.workspace.configuration
							? w.$kh(this._source.config.workspace.configuration)
							: void 0;
					}
					getWorkspaceFolder() {
						return this._source.config.workspaceFolder;
					}
					d() {
						return this._source.kind === b.User
							? e.$_3
							: this._source.config.workspaceFolder?.uri.toString();
					}
					getKey() {
						const F = this.d();
						if (!F) return;
						let x = this.configurationProperties.identifier;
						this._source.kind !== b.Workspace && (x += this._source.kind);
						const H = { type: e.$c4, folder: F, id: x };
						return JSON.stringify(H);
					}
				}
				e.$f4 = S;
				class I extends $ {
					constructor(F, x, H, q, V, G, K, J, W) {
						super(F, H, q, J, W, x),
							(this.defines = V),
							(this.hasDefinedMatchers = K),
							(this.command = G),
							(this.icon = W.icon),
							(this.hide = W.hide);
					}
					clone() {
						return new I(
							this._id,
							this._source,
							this._label,
							this.type,
							this.defines,
							this.command,
							this.hasDefinedMatchers,
							this.runOptions,
							this.configurationProperties,
						);
					}
					getDefinition() {
						return this.defines;
					}
					static is(F) {
						return F instanceof I;
					}
					getMapKey() {
						const F = this._source.workspaceFolder;
						return F
							? `${this._source.scope.toString()}|${F.uri.toString()}|${this._id}|${this.instance}`
							: `${this._source.scope.toString()}|${this._id}|${this.instance}`;
					}
					d() {
						if (this._source.scope === f.Folder && this._source.workspaceFolder)
							return this._source.workspaceFolder.uri.toString();
					}
					getKey() {
						const F = {
							type: "contributed",
							scope: this._source.scope,
							id: this._id,
						};
						return (F.folder = this.d()), JSON.stringify(F);
					}
					getWorkspaceFolder() {
						return this._source.workspaceFolder;
					}
					getTelemetryKind() {
						return "extension";
					}
					f(F) {
						return new I(
							F._id,
							F._source,
							F._label,
							F.type,
							F.defines,
							F.command,
							F.hasDefinedMatchers,
							F.runOptions,
							F.configurationProperties,
						);
					}
				}
				e.$g4 = I;
				class T extends $ {
					constructor(F, x, H, q, V, G) {
						super(F, H, q, V, G, x), (this._source = x);
					}
					clone() {
						return new T(
							this._id,
							this._source,
							this._label,
							this.type,
							this.runOptions,
							this.configurationProperties,
						);
					}
					static is(F) {
						return F instanceof T;
					}
					getTelemetryKind() {
						return "composite";
					}
					getMapKey() {
						return `${this._id}|${this.instance}`;
					}
					d() {}
					f(F) {
						return new T(
							F._id,
							F._source,
							F._label,
							F.type,
							F.runOptions,
							F.configurationProperties,
						);
					}
				}
				e.$h4 = T;
				var P;
				(function (z) {
					(z[(z.Process = 1)] = "Process"), (z[(z.Terminal = 2)] = "Terminal");
				})(P || (e.ExecutionEngine = P = {})),
					(function (z) {
						z._default = z.Terminal;
					})(P || (e.ExecutionEngine = P = {}));
				var k;
				(function (z) {
					(z[(z.V0_1_0 = 1)] = "V0_1_0"), (z[(z.V2_0_0 = 2)] = "V2_0_0");
				})(k || (e.JsonSchemaVersion = k = {}));
				class L {
					constructor(F) {
						this.c = new Map();
						for (let x = 0; x < F.length; x++)
							this.c.set(F[x].uri.toString(), x);
					}
					compare(F, x) {
						const H = F.getWorkspaceFolder(),
							q = x.getWorkspaceFolder();
						if (H && q) {
							let V = this.c.get(H.uri.toString());
							V = V === void 0 ? 0 : V + 1;
							let G = this.c.get(q.uri.toString());
							return (
								(G = G === void 0 ? 0 : G + 1),
								V === G ? F._label.localeCompare(x._label) : V - G
							);
						} else return !H && q ? -1 : H && !q ? 1 : 0;
					}
				}
				e.$i4 = L;
				var D;
				(function (z) {
					(z.DependsOnStarted = "dependsOnStarted"),
						(z.AcquiredInput = "acquiredInput"),
						(z.Start = "start"),
						(z.ProcessStarted = "processStarted"),
						(z.Active = "active"),
						(z.Inactive = "inactive"),
						(z.Changed = "changed"),
						(z.Terminated = "terminated"),
						(z.ProcessEnded = "processEnded"),
						(z.End = "end");
				})(D || (e.TaskEventKind = D = {}));
				var M;
				(function (z) {
					(z.SingleRun = "singleRun"), (z.Background = "background");
				})(M || (e.TaskRunType = M = {}));
				var N;
				(function (z) {
					(z[(z.System = 0)] = "System"),
						(z[(z.User = 1)] = "User"),
						(z[(z.FolderOpen = 2)] = "FolderOpen"),
						(z[(z.ConfigurationChange = 3)] = "ConfigurationChange"),
						(z[(z.Reconnect = 4)] = "Reconnect");
				})(N || (e.TaskRunSource = N = {}));
				var A;
				(function (z) {
					function F(J) {
						return {
							taskId: J._id,
							taskName: J.configurationProperties.name,
							runType: J.configurationProperties.isBackground
								? M.Background
								: M.SingleRun,
							group: J.configurationProperties.group,
							__task: J,
						};
					}
					function x(J, W, X) {
						return {
							...F(J),
							kind: D.Start,
							terminalId: W,
							resolvedVariables: X,
						};
					}
					z.start = x;
					function H(J, W, X) {
						return {
							...F(J),
							kind: D.ProcessStarted,
							terminalId: W,
							processId: X,
						};
					}
					z.processStarted = H;
					function q(J, W, X) {
						return {
							...F(J),
							kind: D.ProcessEnded,
							terminalId: W,
							exitCode: X,
						};
					}
					z.processEnded = q;
					function V(J, W, X) {
						return {
							...F(J),
							kind: D.Terminated,
							exitReason: X,
							terminalId: W,
						};
					}
					z.terminated = V;
					function G(J, W, X) {
						return { ...F(W), kind: J, terminalId: X };
					}
					z.general = G;
					function K() {
						return { kind: D.Changed };
					}
					z.changed = K;
				})(A || (e.TaskEvent = A = {}));
				var R;
				(function (z) {
					function F(H) {
						const q = Object.keys(H).sort();
						let V = "";
						for (const G of q) {
							let K = H[G];
							K instanceof Object
								? (K = F(K))
								: typeof K == "string" && (K = K.replace(/,/g, ",,")),
								(V += G + "," + K + ",");
						}
						return V;
					}
					function x(H) {
						const V = { _key: F(H), type: H.taskType };
						return Object.assign(V, H), V;
					}
					z.create = x;
				})(R || (e.KeyedTaskIdentifier = R = {}));
				var O;
				(function (z) {
					(z.AutoDetect = "task.autoDetect"),
						(z.SaveBeforeRun = "task.saveBeforeRun"),
						(z.ShowDecorations = "task.showDecorations"),
						(z.ProblemMatchersNeverPrompt = "task.problemMatchers.neverPrompt"),
						(z.SlowProviderWarning = "task.slowProviderWarning"),
						(z.QuickOpenHistory = "task.quickOpen.history"),
						(z.QuickOpenDetail = "task.quickOpen.detail"),
						(z.QuickOpenSkip = "task.quickOpen.skip"),
						(z.QuickOpenShowAll = "task.quickOpen.showAll"),
						(z.AllowAutomaticTasks = "task.allowAutomaticTasks"),
						(z.Reconnection = "task.reconnection"),
						(z.VerboseLogging = "task.verboseLogging");
				})(O || (e.TaskSettingId = O = {}));
				var B;
				(function (z) {
					(z.Tasks = "tasks"),
						(z.SuppressTaskName = "tasks.suppressTaskName"),
						(z.Windows = "tasks.windows"),
						(z.Osx = "tasks.osx"),
						(z.Linux = "tasks.linux"),
						(z.ShowOutput = "tasks.showOutput"),
						(z.IsShellCommand = "tasks.isShellCommand"),
						(z.ServiceTestSetting = "tasks.service.testSetting");
				})(B || (e.TasksSchemaProperties = B = {}));
				var U;
				(function (z) {
					function F(x, H) {
						const q = d.$$3.get(x.type);
						if (q === void 0) {
							const J = E.$vo(x);
							return delete J._key, R.create(J);
						}
						const V = Object.create(null);
						V.type = q.taskType;
						const G = new Set();
						q.required.forEach((J) => G.add(J));
						const K = q.properties;
						for (const J of Object.keys(K)) {
							const W = x[J];
							if (W != null) V[J] = W;
							else if (G.has(J)) {
								const X = K[J];
								if (X.default !== void 0) V[J] = E.$vo(X.default);
								else
									switch (X.type) {
										case "boolean":
											V[J] = !1;
											break;
										case "number":
										case "integer":
											V[J] = 0;
											break;
										case "string":
											V[J] = "";
											break;
										default:
											H.error(
												t.localize(9946, null, JSON.stringify(x, void 0, 0), J),
											);
											return;
									}
							}
						}
						return R.create(V);
					}
					z.createTaskIdentifier = F;
				})(U || (e.TaskDefinition = U = {}));
			},
		),
		