import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uuid.js';
import './problemMatcher.js';
import './tasks.js';
import './taskDefinitionRegistry.js';
import './taskService.js';
define(
			de[1816],
			he([1, 0, 4, 82, 12, 28, 47, 570, 424, 699, 419]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TaskConfigSource =
						e.$4Wc =
						e.JsonSchemaVersion =
						e.ExecutionEngine =
						e.TaskParser =
						e.GroupKind =
						e.ProblemMatcherConverter =
						e.RunOptions =
						e.RunOnOptions =
						e.CommandString =
						e.ITaskIdentifier =
						e.ShellQuoting =
							void 0),
					(e.$5Wc = G),
					(e.$6Wc = K),
					(t = mt(t)),
					(i = mt(i)),
					(E = mt(E)),
					(C = mt(C)),
					(m = mt(m));
				var a;
				(function (J) {
					(J[(J.escape = 1)] = "escape"),
						(J[(J.strong = 2)] = "strong"),
						(J[(J.weak = 3)] = "weak");
				})(a || (e.ShellQuoting = a = {}));
				var h;
				(function (J) {
					function W(X) {
						return X !== void 0 && E.$lg(X.type);
					}
					J.is = W;
				})(h || (e.ITaskIdentifier = h = {}));
				var c;
				(function (J) {
					function W(X) {
						return E.$lg(X)
							? X
							: E.$mg(X)
								? X.join(" ")
								: E.$lg(X.value)
									? X.value
									: X.value.join(" ");
					}
					J.value = W;
				})(c || (e.CommandString = c = {}));
				var n;
				(function (J) {
					(J[(J.Unknown = 0)] = "Unknown"),
						(J[(J.String = 1)] = "String"),
						(J[(J.ProblemMatcher = 2)] = "ProblemMatcher"),
						(J[(J.Array = 3)] = "Array");
				})(n || (n = {}));
				const g = [];
				Object.freeze(g);
				function p(J, W, X) {
					const Y = W[X];
					Y !== void 0 && (J[X] = Y);
				}
				function o(J, W, X) {
					const Y = W[X];
					J[X] === void 0 && Y !== void 0 && (J[X] = Y);
				}
				function f(J, W, X = !1) {
					if (J == null || W === void 0) return !0;
					for (const Y of W) {
						const ie = J[Y.property];
						if (ie != null) {
							if (Y.type !== void 0 && !Y.type.isEmpty(ie)) return !1;
							if (!Array.isArray(ie) || ie.length > 0 || X) return !1;
						}
					}
					return !0;
				}
				function b(J, W, X) {
					if (!W || f(W, X)) return J;
					if (!J || f(J, X)) return W;
					for (const Y of X) {
						const ie = Y.property;
						let ne;
						Y.type !== void 0
							? (ne = Y.type.assignProperties(J[ie], W[ie]))
							: (ne = W[ie]),
							ne != null && (J[ie] = ne);
					}
					return J;
				}
				function s(J, W, X, Y = !1) {
					if (!W || f(W, X)) return J;
					if (!J || f(J, X, Y)) return W;
					for (const ie of X) {
						const ne = ie.property;
						let ee;
						ie.type
							? (ee = ie.type.fillProperties(J[ne], W[ne]))
							: J[ne] === void 0 && (ee = W[ne]),
							ee != null && (J[ne] = ee);
					}
					return J;
				}
				function l(J, W, X, Y) {
					if (J && Object.isFrozen(J)) return J;
					if (J == null || W === void 0 || W === null)
						return W != null ? i.$vo(W) : void 0;
					for (const ie of X) {
						const ne = ie.property;
						if (J[ne] !== void 0) continue;
						let ee;
						ie.type ? (ee = ie.type.fillDefaults(J[ne], Y)) : (ee = W[ne]),
							ee != null && (J[ne] = ee);
					}
					return J;
				}
				function y(J, W) {
					if (J != null) {
						if (Object.isFrozen(J)) return J;
						for (const X of W)
							if (X.type) {
								const Y = J[X.property];
								Y && X.type.freeze(Y);
							}
						return Object.freeze(J), J;
					}
				}
				var $;
				(function (J) {
					function W(X) {
						if (!X) return m.RunOnOptions.default;
						switch (X.toLowerCase()) {
							case "folderopen":
								return m.RunOnOptions.folderOpen;
							case "default":
							default:
								return m.RunOnOptions.default;
						}
					}
					J.fromString = W;
				})($ || (e.RunOnOptions = $ = {}));
				var v;
				(function (J) {
					const W = [
						{ property: "reevaluateOnRerun" },
						{ property: "runOn" },
						{ property: "instanceLimit" },
					];
					function X(ne) {
						return {
							reevaluateOnRerun: ne ? ne.reevaluateOnRerun : !0,
							runOn: ne ? $.fromString(ne.runOn) : m.RunOnOptions.default,
							instanceLimit: ne ? ne.instanceLimit : 1,
						};
					}
					J.fromConfiguration = X;
					function Y(ne, ee) {
						return b(ne, ee, W);
					}
					J.assignProperties = Y;
					function ie(ne, ee) {
						return s(ne, ee, W);
					}
					J.fillProperties = ie;
				})(v || (e.RunOptions = v = {}));
				var S;
				(function (J) {
					const W = [
						{ property: "executable" },
						{ property: "args" },
						{ property: "quoting" },
					];
					function X(Q) {
						const Z = Q;
						return Z && (E.$lg(Z.executable) || E.$mg(Z.args));
					}
					J.is = X;
					function Y(Q, Z) {
						if (!X(Q)) return;
						const se = {};
						return (
							Q.executable !== void 0 && (se.executable = Q.executable),
							Q.args !== void 0 && (se.args = Q.args.slice()),
							Q.quoting !== void 0 && (se.quoting = i.$vo(Q.quoting)),
							se
						);
					}
					J.from = Y;
					function ie(Q) {
						return f(Q, W, !0);
					}
					J.isEmpty = ie;
					function ne(Q, Z) {
						return b(Q, Z, W);
					}
					J.assignProperties = ne;
					function ee(Q, Z) {
						return s(Q, Z, W, !0);
					}
					J.fillProperties = ee;
					function _(Q, Z) {
						return Q;
					}
					J.fillDefaults = _;
					function te(Q) {
						if (Q) return Object.freeze(Q);
					}
					J.freeze = te;
				})(S || (S = {}));
				var I;
				(function (J) {
					const W = [
							{ property: "cwd" },
							{ property: "env" },
							{ property: "shell", type: S },
						],
						X = { cwd: "${workspaceFolder}" };
					function Y(Q, Z) {
						const se = {};
						return (
							Q.cwd !== void 0 &&
								(E.$lg(Q.cwd)
									? (se.cwd = Q.cwd)
									: Z.taskLoadIssues.push(t.localize(9924, null, Q.cwd))),
							Q.env !== void 0 && (se.env = i.$vo(Q.env)),
							(se.shell = S.from(Q.shell, Z)),
							ie(se) ? void 0 : se
						);
					}
					J.from = Y;
					function ie(Q) {
						return f(Q, W);
					}
					J.isEmpty = ie;
					function ne(Q, Z) {
						if (Z === void 0 || ie(Z)) return Q;
						if (Q === void 0 || ie(Q)) return Z;
						if ((p(Q, Z, "cwd"), Q.env === void 0)) Q.env = Z.env;
						else if (Z.env !== void 0) {
							const se = Object.create(null);
							Q.env !== void 0 &&
								Object.keys(Q.env).forEach((re) => (se[re] = Q.env[re])),
								Z.env !== void 0 &&
									Object.keys(Z.env).forEach((re) => (se[re] = Z.env[re])),
								(Q.env = se);
						}
						return (Q.shell = S.assignProperties(Q.shell, Z.shell)), Q;
					}
					J.assignProperties = ne;
					function ee(Q, Z) {
						return s(Q, Z, W);
					}
					J.fillProperties = ee;
					function _(Q, Z) {
						return l(Q, X, W, Z);
					}
					J.fillDefaults = _;
					function te(Q) {
						return y(Q, W);
					}
					J.freeze = te;
				})(I || (I = {}));
				var T;
				(function (J) {
					let W;
					(function (le) {
						const oe = [
							{ property: "echo" },
							{ property: "reveal" },
							{ property: "revealProblems" },
							{ property: "focus" },
							{ property: "panel" },
							{ property: "showReuseMessage" },
							{ property: "clear" },
							{ property: "group" },
							{ property: "close" },
						];
						function ae(me, ve) {
							let ge,
								be,
								Ce,
								Le,
								Fe,
								Oe,
								xe,
								He,
								Ke,
								Je = !1;
							E.$rg(me.echoCommand) && ((ge = me.echoCommand), (Je = !0)),
								E.$lg(me.showOutput) &&
									((be = m.RevealKind.fromString(me.showOutput)), (Je = !0));
							const Te = me.presentation || me.terminal;
							if (
								(Te &&
									(E.$rg(Te.echo) && (ge = Te.echo),
									E.$lg(Te.reveal) && (be = m.RevealKind.fromString(Te.reveal)),
									E.$lg(Te.revealProblems) &&
										(Ce = m.RevealProblemKind.fromString(Te.revealProblems)),
									E.$rg(Te.focus) && (Le = Te.focus),
									E.$lg(Te.panel) && (Fe = m.PanelKind.fromString(Te.panel)),
									E.$rg(Te.showReuseMessage) && (Oe = Te.showReuseMessage),
									E.$rg(Te.clear) && (xe = Te.clear),
									E.$lg(Te.group) && (He = Te.group),
									E.$rg(Te.close) && (Ke = Te.close),
									(Je = !0)),
								!!Je)
							)
								return {
									echo: ge,
									reveal: be,
									revealProblems: Ce,
									focus: Le,
									panel: Fe,
									showReuseMessage: Oe,
									clear: xe,
									group: He,
									close: Ke,
								};
						}
						le.from = ae;
						function pe(me, ve) {
							return b(me, ve, oe);
						}
						le.assignProperties = pe;
						function $e(me, ve) {
							return s(me, ve, oe);
						}
						le.fillProperties = $e;
						function ye(me, ve) {
							const ge = ve.engine === m.ExecutionEngine.Terminal;
							return l(
								me,
								{
									echo: ge,
									reveal: m.RevealKind.Always,
									revealProblems: m.RevealProblemKind.Never,
									focus: !1,
									panel: m.PanelKind.Shared,
									showReuseMessage: !0,
									clear: !1,
								},
								oe,
								ve,
							);
						}
						le.fillDefaults = ye;
						function ue(me) {
							return y(me, oe);
						}
						le.freeze = ue;
						function fe(me) {
							return f(me, oe);
						}
						le.isEmpty = fe;
					})((W = J.PresentationOptions || (J.PresentationOptions = {})));
					let X;
					(function (le) {
						function oe(ae) {
							if (ae != null) {
								if (E.$lg(ae)) return ae;
								if (E.$mg(ae)) return ae.join(" ");
								{
									const pe = m.ShellQuoting.from(ae.quoting),
										$e = E.$lg(ae.value)
											? ae.value
											: E.$mg(ae.value)
												? ae.value.join(" ")
												: void 0;
									return $e ? { value: $e, quoting: pe } : void 0;
								}
							}
						}
						le.from = oe;
					})(X || (X = {}));
					const Y = [
						{ property: "runtime" },
						{ property: "name" },
						{ property: "options", type: I },
						{ property: "args" },
						{ property: "taskSelector" },
						{ property: "suppressTaskName" },
						{ property: "presentation", type: W },
					];
					function ie(le, oe) {
						let ae = ne(le, oe),
							pe;
						return (
							le.windows && oe.platform === w.Platform.Windows
								? (pe = ne(le.windows, oe))
								: le.osx && oe.platform === w.Platform.Mac
									? (pe = ne(le.osx, oe))
									: le.linux &&
										oe.platform === w.Platform.Linux &&
										(pe = ne(le.linux, oe)),
							pe &&
								(ae = te(
									ae,
									pe,
									oe.schemaVersion === m.JsonSchemaVersion.V2_0_0,
								)),
							_(ae) ? void 0 : ae
						);
					}
					J.from = ie;
					function ne(le, oe) {
						const ae = X.from(le.command);
						let pe;
						E.$lg(le.type) &&
							(le.type === "shell" || le.type === "process") &&
							(pe = m.RuntimeType.fromString(le.type)),
							E.$rg(le.isShellCommand) || S.is(le.isShellCommand)
								? (pe = m.RuntimeType.Shell)
								: le.isShellCommand !== void 0 &&
									(pe = le.isShellCommand
										? m.RuntimeType.Shell
										: m.RuntimeType.Process);
						const $e = { name: ae, runtime: pe, presentation: W.from(le, oe) };
						if (le.args !== void 0) {
							$e.args = [];
							for (const ye of le.args) {
								const ue = X.from(ye);
								ue !== void 0
									? $e.args.push(ue)
									: oe.taskLoadIssues.push(
											t.localize(
												9925,
												null,
												ye ? JSON.stringify(ye, void 0, 4) : "undefined",
											),
										);
							}
						}
						return (
							le.options !== void 0 &&
								(($e.options = I.from(le.options, oe)),
								$e.options &&
									$e.options.shell === void 0 &&
									S.is(le.isShellCommand) &&
									(($e.options.shell = S.from(le.isShellCommand, oe)),
									oe.engine !== m.ExecutionEngine.Terminal &&
										oe.taskLoadIssues.push(t.localize(9926, null)))),
							E.$lg(le.taskSelector) && ($e.taskSelector = le.taskSelector),
							E.$rg(le.suppressTaskName) &&
								($e.suppressTaskName = le.suppressTaskName),
							_($e) ? void 0 : $e
						);
					}
					function ee(le) {
						return le && !!le.name;
					}
					J.hasCommand = ee;
					function _(le) {
						return f(le, Y);
					}
					J.isEmpty = _;
					function te(le, oe, ae) {
						return _(oe)
							? le
							: _(le)
								? oe
								: (p(le, oe, "name"),
									p(le, oe, "runtime"),
									p(le, oe, "taskSelector"),
									p(le, oe, "suppressTaskName"),
									oe.args !== void 0 &&
										(le.args === void 0 || ae
											? (le.args = oe.args)
											: (le.args = le.args.concat(oe.args))),
									(le.presentation = W.assignProperties(
										le.presentation,
										oe.presentation,
									)),
									(le.options = I.assignProperties(le.options, oe.options)),
									le);
					}
					J.assignProperties = te;
					function Q(le, oe) {
						return s(le, oe, Y);
					}
					J.fillProperties = Q;
					function Z(le, oe, ae) {
						if (oe === void 0 || _(oe)) return le;
						if (
							((le = le || {
								name: void 0,
								runtime: void 0,
								presentation: void 0,
							}),
							le.name === void 0)
						) {
							o(le, oe, "name"),
								o(le, oe, "taskSelector"),
								o(le, oe, "suppressTaskName");
							let pe = oe.args ? oe.args.slice() : [];
							!le.suppressTaskName &&
								ae &&
								(le.taskSelector !== void 0
									? pe.push(le.taskSelector + ae)
									: pe.push(ae)),
								le.args && (pe = pe.concat(le.args)),
								(le.args = pe);
						}
						return (
							o(le, oe, "runtime"),
							(le.presentation = W.fillProperties(
								le.presentation,
								oe.presentation,
							)),
							(le.options = I.fillProperties(le.options, oe.options)),
							le
						);
					}
					J.fillGlobals = Z;
					function se(le, oe) {
						!le ||
							Object.isFrozen(le) ||
							(le.name !== void 0 &&
								le.runtime === void 0 &&
								(le.runtime = m.RuntimeType.Process),
							(le.presentation = W.fillDefaults(le.presentation, oe)),
							_(le) || (le.options = I.fillDefaults(le.options, oe)),
							le.args === void 0 && (le.args = g),
							le.suppressTaskName === void 0 &&
								(le.suppressTaskName =
									oe.schemaVersion === m.JsonSchemaVersion.V2_0_0));
					}
					J.fillDefaults = se;
					function re(le) {
						return y(le, Y);
					}
					J.freeze = re;
				})(T || (T = {}));
				var P;
				(function (J) {
					function W(ee, _) {
						const te = Object.create(null);
						return (
							Array.isArray(ee) &&
								ee.forEach((Q) => {
									const Z = new d.$93(_.problemReporter).parse(Q);
									(0, d.$33)(Z)
										? (te[Z.name] = Z)
										: _.problemReporter.error(
												t.localize(9927, null, JSON.stringify(Q, void 0, 4)),
											);
								}),
							te
						);
					}
					J.namedFrom = W;
					function X(ee, _) {
						let te = {};
						return (
							ee.windows &&
							ee.windows.problemMatcher &&
							_.platform === w.Platform.Windows
								? (te = Y(ee.windows.problemMatcher, _))
								: ee.osx &&
										ee.osx.problemMatcher &&
										_.platform === w.Platform.Mac
									? (te = Y(ee.osx.problemMatcher, _))
									: ee.linux &&
											ee.linux.problemMatcher &&
											_.platform === w.Platform.Linux
										? (te = Y(ee.linux.problemMatcher, _))
										: ee.problemMatcher && (te = Y(ee.problemMatcher, _)),
							te
						);
					}
					J.fromWithOsConfig = X;
					function Y(ee, _) {
						const te = [];
						if (ee === void 0) return { value: te };
						const Q = [];
						function Z(re) {
							re.value && te.push(re.value), re.errors && Q.push(...re.errors);
						}
						const se = ie(ee);
						if (se === n.Unknown) {
							const re = t.localize(9928, null, JSON.stringify(ee, null, 4));
							_.problemReporter.warn(re);
						} else
							se === n.String || se === n.ProblemMatcher
								? Z(ne(ee, _))
								: se === n.Array &&
									ee.forEach((le) => {
										Z(ne(le, _));
									});
						return { value: te, errors: Q };
					}
					J.from = Y;
					function ie(ee) {
						return E.$lg(ee)
							? n.String
							: Array.isArray(ee)
								? n.Array
								: E.$sg(ee)
									? n.Unknown
									: n.ProblemMatcher;
					}
					function ne(ee, _) {
						if (E.$lg(ee)) {
							let te = ee;
							if (te.length > 1 && te[0] === "$") {
								te = te.substring(1);
								const Q = d.$03.get(te);
								if (Q) return { value: i.$vo(Q) };
								let Z = _.namedProblemMatchers[te];
								if (Z) return (Z = i.$vo(Z)), delete Z.name, { value: Z };
							}
							return { errors: [t.localize(9929, null, ee)] };
						} else {
							const te = ee;
							return { value: new d.$93(_.problemReporter).parse(te) };
						}
					}
				})(P || (e.ProblemMatcherConverter = P = {}));
				var k;
				(function (J) {
					function W(Y) {
						if (Y !== void 0) {
							if (E.$lg(Y) && m.TaskGroup.is(Y))
								return { _id: Y, isDefault: !1 };
							if (E.$lg(Y.kind) && m.TaskGroup.is(Y.kind)) {
								const ie = Y.kind,
									ne = E.$sg(Y.isDefault) ? !1 : Y.isDefault;
								return { _id: ie, isDefault: ne };
							}
						}
					}
					J.from = W;
					function X(Y) {
						return E.$lg(Y)
							? Y
							: Y.isDefault
								? { kind: Y._id, isDefault: Y.isDefault }
								: Y._id;
					}
					J.to = X;
				})(k || (e.GroupKind = k = {}));
				var L;
				(function (J) {
					function W(Y, ie) {
						switch (ie) {
							case x.User:
								return m.$_3;
							case x.TasksJson:
								return Y.workspaceFolder.uri;
							default:
								return Y.workspace && Y.workspace.configuration
									? Y.workspace.configuration
									: Y.workspaceFolder.uri;
						}
					}
					function X(Y, ie, ne) {
						return E.$lg(Y)
							? { uri: W(ie, ne), task: Y }
							: h.is(Y)
								? {
										uri: W(ie, ne),
										task: m.TaskDefinition.createTaskIdentifier(
											Y,
											ie.problemReporter,
										),
									}
								: void 0;
					}
					J.from = X;
				})(L || (L = {}));
				var D;
				(function (J) {
					function W(X) {
						switch (X) {
							case m.DependsOrder.sequence:
								return m.DependsOrder.sequence;
							case m.DependsOrder.parallel:
							default:
								return m.DependsOrder.parallel;
						}
					}
					J.from = W;
				})(D || (D = {}));
				var M;
				(function (J) {
					const W = [
						{ property: "name" },
						{ property: "identifier" },
						{ property: "group" },
						{ property: "isBackground" },
						{ property: "promptOnClose" },
						{ property: "dependsOn" },
						{ property: "presentation", type: T.PresentationOptions },
						{ property: "problemMatchers" },
						{ property: "options" },
						{ property: "icon" },
						{ property: "hide" },
					];
					function X(ie, ne, ee, _, te) {
						if (!ie) return {};
						const Q = {};
						if (te)
							for (const se of Object.keys(te))
								ie[se] !== void 0 && (Q[se] = i.$vo(ie[se]));
						if (
							(E.$lg(ie.taskName) && (Q.name = ie.taskName),
							E.$lg(ie.label) &&
								ne.schemaVersion === m.JsonSchemaVersion.V2_0_0 &&
								(Q.name = ie.label),
							E.$lg(ie.identifier) && (Q.identifier = ie.identifier),
							(Q.icon = ie.icon),
							(Q.hide = ie.hide),
							ie.isBackground !== void 0 &&
								(Q.isBackground = !!ie.isBackground),
							ie.promptOnClose !== void 0 &&
								(Q.promptOnClose = !!ie.promptOnClose),
							(Q.group = k.from(ie.group)),
							ie.dependsOn !== void 0)
						)
							if (Array.isArray(ie.dependsOn))
								Q.dependsOn = ie.dependsOn.reduce((se, re) => {
									const le = L.from(re, ne, _);
									return le && se.push(le), se;
								}, []);
							else {
								const se = L.from(ie.dependsOn, ne, _);
								Q.dependsOn = se ? [se] : void 0;
							}
						(Q.dependsOrder = D.from(ie.dependsOrder)),
							ee &&
								(ie.presentation !== void 0 || ie.terminal !== void 0) &&
								(Q.presentation = T.PresentationOptions.from(ie, ne)),
							ee &&
								ie.options !== void 0 &&
								(Q.options = I.from(ie.options, ne));
						const Z = P.fromWithOsConfig(ie, ne);
						return (
							Z.value !== void 0 && (Q.problemMatchers = Z.value),
							ie.detail && (Q.detail = ie.detail),
							Y(Q) ? {} : { value: Q, errors: Z.errors }
						);
					}
					J.from = X;
					function Y(ie) {
						return f(ie, W);
					}
					J.isEmpty = Y;
				})(M || (M = {}));
				const N = "Workspace";
				var A;
				(function (J) {
					const W = "grunt.",
						X = "jake.",
						Y = "gulp.",
						ie = "vscode.npm.",
						ne = "vscode.typescript.";
					function ee(_, te, Q, Z, se) {
						if (!_) return;
						const re = _.type,
							le = _.customize;
						if (!re && !le) {
							te.problemReporter.error(
								t.localize(9930, null, JSON.stringify(_, null, 4)),
							);
							return;
						}
						const oe = re ? se?.get?.(re) || r.$$3.get(re) : void 0;
						if (!oe) {
							const me = t.localize(9931, null, re);
							te.problemReporter.error(me);
							return;
						}
						let ae;
						if (
							(E.$lg(le)
								? le.indexOf(W) === 0
									? (ae = { type: "grunt", task: le.substring(W.length) })
									: le.indexOf(X) === 0
										? (ae = { type: "jake", task: le.substring(X.length) })
										: le.indexOf(Y) === 0
											? (ae = { type: "gulp", task: le.substring(Y.length) })
											: le.indexOf(ie) === 0
												? (ae = {
														type: "npm",
														script: le.substring(ie.length + 4),
													})
												: le.indexOf(ne) === 0 &&
													(ae = {
														type: "typescript",
														tsconfig: le.substring(ne.length + 6),
													})
								: E.$lg(_.type) && (ae = _),
							ae === void 0)
						) {
							te.problemReporter.error(
								t.localize(9932, null, JSON.stringify(_, void 0, 0)),
							);
							return;
						}
						const pe = m.TaskDefinition.createTaskIdentifier(
							ae,
							te.problemReporter,
						);
						if (pe === void 0) {
							te.problemReporter.error(
								t.localize(9933, null, JSON.stringify(_, void 0, 0)),
							);
							return;
						}
						const $e = {
							workspaceFolder: te.workspaceFolder,
							file: ".vscode/tasks.json",
							index: Q,
							element: _,
						};
						let ye;
						switch (Z) {
							case x.User: {
								ye = { kind: m.TaskSourceKind.User, config: $e, label: N };
								break;
							}
							case x.WorkspaceFile: {
								ye = {
									kind: m.TaskSourceKind.WorkspaceFile,
									config: $e,
									label: N,
								};
								break;
							}
							default: {
								ye = { kind: m.TaskSourceKind.Workspace, config: $e, label: N };
								break;
							}
						}
						const ue = new m.$f4(
								`${oe.extensionId}.${pe._key}`,
								ye,
								void 0,
								re,
								pe,
								v.fromConfiguration(_.runOptions),
								{ hide: _.hide },
							),
							fe = M.from(_, te, !0, Z, oe.properties);
						if ((ue.addTaskLoadMessages(fe.errors), fe.value)) {
							if (
								((ue.configurationProperties = Object.assign(
									ue.configurationProperties,
									fe.value,
								)),
								ue.configurationProperties.name)
							)
								ue._label = ue.configurationProperties.name;
							else {
								let me = ue.configures.type;
								if (oe.required && oe.required.length > 0)
									for (const ve of oe.required) {
										const ge = ue.configures[ve];
										if (ge) {
											me = me + ": " + ge;
											break;
										}
									}
								ue._label = me;
							}
							ue.configurationProperties.identifier ||
								(ue.configurationProperties.identifier = pe._key);
						}
						return ue;
					}
					J.from = ee;
				})(A || (A = {}));
				var R;
				(function (J) {
					function W(ne, ee, _, te) {
						if (!ne) return;
						let Q = ne.type;
						if (
							(Q == null && (Q = m.$c4),
							Q !== m.$c4 && Q !== "shell" && Q !== "process")
						) {
							ee.problemReporter.error(
								t.localize(9934, null, JSON.stringify(ne, null, 4)),
							);
							return;
						}
						let Z = ne.taskName;
						if (
							(E.$lg(ne.label) &&
								ee.schemaVersion === m.JsonSchemaVersion.V2_0_0 &&
								(Z = ne.label),
							!Z)
						) {
							ee.problemReporter.error(
								t.localize(9935, null, JSON.stringify(ne, null, 4)),
							);
							return;
						}
						let se;
						switch (te) {
							case x.User: {
								se = {
									kind: m.TaskSourceKind.User,
									config: {
										index: _,
										element: ne,
										file: ".vscode/tasks.json",
										workspaceFolder: ee.workspaceFolder,
									},
									label: N,
								};
								break;
							}
							case x.WorkspaceFile: {
								se = {
									kind: m.TaskSourceKind.WorkspaceFile,
									config: {
										index: _,
										element: ne,
										file: ".vscode/tasks.json",
										workspaceFolder: ee.workspaceFolder,
										workspace: ee.workspace,
									},
									label: N,
								};
								break;
							}
							default: {
								se = {
									kind: m.TaskSourceKind.Workspace,
									config: {
										index: _,
										element: ne,
										file: ".vscode/tasks.json",
										workspaceFolder: ee.workspaceFolder,
									},
									label: N,
								};
								break;
							}
						}
						const re = new m.$e4(
								ee.uuidMap.getUUID(Z),
								se,
								Z,
								m.$c4,
								void 0,
								!1,
								v.fromConfiguration(ne.runOptions),
								{ name: Z, identifier: Z },
							),
							le = M.from(ne, ee, !1, te);
						if (
							(re.addTaskLoadMessages(le.errors),
							le.value &&
								(re.configurationProperties = Object.assign(
									re.configurationProperties,
									le.value,
								)),
							!0)
						) {
							const pe = ne;
							re.configurationProperties.isBackground === void 0 &&
								pe.isWatching !== void 0 &&
								(re.configurationProperties.isBackground = !!pe.isWatching),
								re.configurationProperties.group === void 0 &&
									(pe.isBuildCommand === !0
										? (re.configurationProperties.group = m.TaskGroup.Build)
										: pe.isTestCommand === !0 &&
											(re.configurationProperties.group = m.TaskGroup.Test));
						}
						const ae = T.from(ne, ee);
						return (
							ae && (re.command = ae),
							ne.command !== void 0 && (ae.suppressTaskName = !0),
							re
						);
					}
					J.from = W;
					function X(ne, ee) {
						(T.hasCommand(ne.command) ||
							ne.configurationProperties.dependsOn === void 0) &&
							(ne.command = T.fillGlobals(
								ne.command,
								ee.command,
								ne.configurationProperties.name,
							)),
							ne.configurationProperties.problemMatchers === void 0 &&
								ee.problemMatcher !== void 0 &&
								((ne.configurationProperties.problemMatchers = i.$vo(
									ee.problemMatcher,
								)),
								(ne.hasDefinedMatchers = !0)),
							ne.configurationProperties.promptOnClose === void 0 &&
								ne.configurationProperties.isBackground === void 0 &&
								ee.promptOnClose !== void 0 &&
								(ne.configurationProperties.promptOnClose = ee.promptOnClose);
					}
					J.fillGlobals = X;
					function Y(ne, ee) {
						T.fillDefaults(ne.command, ee),
							ne.configurationProperties.promptOnClose === void 0 &&
								(ne.configurationProperties.promptOnClose =
									ne.configurationProperties.isBackground !== void 0
										? !ne.configurationProperties.isBackground
										: !0),
							ne.configurationProperties.isBackground === void 0 &&
								(ne.configurationProperties.isBackground = !1),
							ne.configurationProperties.problemMatchers === void 0 &&
								(ne.configurationProperties.problemMatchers = g);
					}
					J.fillDefaults = Y;
					function ie(ne, ee) {
						const _ = new m.$e4(
							ee._id,
							Object.assign({}, ee._source, { customizes: ne.defines }),
							ee.configurationProperties.name || ne._label,
							m.$c4,
							ne.command,
							!1,
							ne.runOptions,
							{
								name:
									ee.configurationProperties.name ||
									ne.configurationProperties.name,
								identifier:
									ee.configurationProperties.identifier ||
									ne.configurationProperties.identifier,
								icon: ee.configurationProperties.icon,
								hide: ee.configurationProperties.hide,
							},
						);
						_.addTaskLoadMessages(ee.taskLoadMessages);
						const te = _.configurationProperties;
						p(te, ee.configurationProperties, "group"),
							p(te, ee.configurationProperties, "isBackground"),
							p(te, ee.configurationProperties, "dependsOn"),
							p(te, ee.configurationProperties, "problemMatchers"),
							p(te, ee.configurationProperties, "promptOnClose"),
							p(te, ee.configurationProperties, "detail"),
							(_.command.presentation = T.PresentationOptions.assignProperties(
								_.command.presentation,
								ee.configurationProperties.presentation,
							)),
							(_.command.options = I.assignProperties(
								_.command.options,
								ee.configurationProperties.options,
							)),
							(_.runOptions = v.assignProperties(_.runOptions, ee.runOptions));
						const Q = ne.configurationProperties;
						return (
							o(te, Q, "group"),
							o(te, Q, "isBackground"),
							o(te, Q, "dependsOn"),
							o(te, Q, "problemMatchers"),
							o(te, Q, "promptOnClose"),
							o(te, Q, "detail"),
							(_.command.presentation = T.PresentationOptions.fillProperties(
								_.command.presentation,
								Q.presentation,
							)),
							(_.command.options = I.fillProperties(
								_.command.options,
								Q.options,
							)),
							(_.runOptions = v.fillProperties(_.runOptions, ne.runOptions)),
							ne.hasDefinedMatchers === !0 && (_.hasDefinedMatchers = !0),
							_
						);
					}
					J.createCustomTask = ie;
				})(R || (R = {}));
				var O;
				(function (J) {
					function W(ne) {
						const ee = ne.type;
						return (
							ne.customize === void 0 &&
							(ee == null || ee === m.$c4 || ee === "shell" || ee === "process")
						);
					}
					const X = { shell: u.$Upc, process: u.$Wpc };
					function Y(ne, ee, _, te, Q) {
						const Z = { custom: [], configured: [] };
						if (!ne) return Z;
						const se = { task: void 0, rank: -1 },
							re = { task: void 0, rank: -1 },
							le = _.schemaVersion === m.JsonSchemaVersion.V2_0_0,
							oe = i.$vo(_.taskLoadIssues);
						for (let $e = 0; $e < ne.length; $e++) {
							const ye = ne[$e],
								ue = ye.type ? Q?.get?.(ye.type) || r.$$3.get(ye.type) : void 0;
							let fe = !1;
							if (
								ue &&
								ue.when &&
								!_.contextKeyService.contextMatchesRules(ue.when)
							)
								fe = !0;
							else if (!ue && ye.type) {
								for (const me of Object.keys(X))
									if (ye.type === me) {
										fe = !u.$Upc.evaluate(_.contextKeyService.getContext(null));
										break;
									}
							}
							if (fe) {
								_.problemReporter.info(t.localize(9936, null, ye.type));
								continue;
							}
							if (W(ye)) {
								const me = R.from(ye, _, $e, te);
								if (me) {
									if ((R.fillGlobals(me, ee), R.fillDefaults(me, _), le)) {
										if (
											(me.command === void 0 || me.command.name === void 0) &&
											(me.configurationProperties.dependsOn === void 0 ||
												me.configurationProperties.dependsOn.length === 0)
										) {
											_.problemReporter.error(
												t.localize(
													9937,
													null,
													me.configurationProperties.name,
													JSON.stringify(ye, void 0, 4),
												),
											);
											continue;
										}
									} else if (
										me.command === void 0 ||
										me.command.name === void 0
									) {
										_.problemReporter.warn(
											t.localize(
												9938,
												null,
												me.configurationProperties.name,
												JSON.stringify(ye, void 0, 4),
											),
										);
										continue;
									}
									me.configurationProperties.group === m.TaskGroup.Build &&
									se.rank < 2
										? ((se.task = me), (se.rank = 2))
										: me.configurationProperties.group === m.TaskGroup.Test &&
												re.rank < 2
											? ((re.task = me), (re.rank = 2))
											: me.configurationProperties.name === "build" &&
													se.rank < 1
												? ((se.task = me), (se.rank = 1))
												: me.configurationProperties.name === "test" &&
													re.rank < 1 &&
													((re.task = me), (re.rank = 1)),
										me.addTaskLoadMessages(_.taskLoadIssues),
										Z.custom.push(me);
								}
							} else {
								const me = A.from(ye, _, $e, te, Q);
								me &&
									(me.addTaskLoadMessages(_.taskLoadIssues),
									Z.configured.push(me));
							}
							_.taskLoadIssues = i.$vo(oe);
						}
						const ae = E.$lg(se.task?.configurationProperties.group)
								? se.task?.configurationProperties.group
								: se.task?.configurationProperties.group?._id,
							pe = E.$lg(re.task?.configurationProperties.group)
								? re.task?.configurationProperties.group
								: re.task?.configurationProperties.group?._id;
						return (
							ae !== m.TaskGroup.Build._id &&
							se.rank > -1 &&
							se.rank < 2 &&
							se.task
								? (se.task.configurationProperties.group = m.TaskGroup.Build)
								: pe !== m.TaskGroup.Test._id &&
									re.rank > -1 &&
									re.rank < 2 &&
									re.task &&
									(re.task.configurationProperties.group = m.TaskGroup.Test),
							Z
						);
					}
					J.from = Y;
					function ie(ne, ee) {
						if (ee === void 0 || ee.length === 0) return ne;
						if (ne === void 0 || ne.length === 0) return ee;
						if (ee) {
							const _ = Object.create(null);
							ne.forEach((Q) => {
								_[Q.configurationProperties.name] = Q;
							}),
								ee.forEach((Q) => {
									_[Q.configurationProperties.name] = Q;
								});
							const te = [];
							ne.forEach((Q) => {
								te.push(_[Q.configurationProperties.name]),
									delete _[Q.configurationProperties.name];
							}),
								Object.keys(_).forEach((Q) => te.push(_[Q])),
								(ne = te);
						}
						return ne;
					}
					J.assignTasks = ie;
				})(O || (e.TaskParser = O = {}));
				var B;
				(function (J) {
					function W(_, te) {
						let Q = X(_, te),
							Z;
						_.windows && te.platform === w.Platform.Windows
							? (Z = X(_.windows, te))
							: _.osx && te.platform === w.Platform.Mac
								? (Z = X(_.osx, te))
								: _.linux &&
									te.platform === w.Platform.Linux &&
									(Z = X(_.linux, te)),
							Z && (Q = J.assignProperties(Q, Z));
						const se = T.from(_, te);
						return (
							se && (Q.command = se), J.fillDefaults(Q, te), J.freeze(Q), Q
						);
					}
					J.from = W;
					function X(_, te) {
						const Q = {};
						return (
							_.suppressTaskName !== void 0 &&
								(Q.suppressTaskName = !!_.suppressTaskName),
							_.promptOnClose !== void 0 &&
								(Q.promptOnClose = !!_.promptOnClose),
							_.problemMatcher &&
								(Q.problemMatcher = P.from(_.problemMatcher, te).value),
							Q
						);
					}
					J.fromBase = X;
					function Y(_) {
						return (
							!_ ||
							(_.command === void 0 &&
								_.promptOnClose === void 0 &&
								_.suppressTaskName === void 0)
						);
					}
					J.isEmpty = Y;
					function ie(_, te) {
						return Y(te)
							? _
							: Y(_)
								? te
								: (p(_, te, "promptOnClose"), p(_, te, "suppressTaskName"), _);
					}
					J.assignProperties = ie;
					function ne(_, te) {
						_ &&
							(T.fillDefaults(_.command, te),
							_.suppressTaskName === void 0 &&
								(_.suppressTaskName =
									te.schemaVersion === m.JsonSchemaVersion.V2_0_0),
							_.promptOnClose === void 0 && (_.promptOnClose = !0));
					}
					J.fillDefaults = ne;
					function ee(_) {
						Object.freeze(_), _.command && T.freeze(_.command);
					}
					J.freeze = ee;
				})(B || (B = {}));
				var U;
				(function (J) {
					function W(X) {
						const Y = X.runner || X._runner;
						let ie;
						if (Y)
							switch (Y) {
								case "terminal":
									ie = m.ExecutionEngine.Terminal;
									break;
								case "process":
									ie = m.ExecutionEngine.Process;
									break;
							}
						const ne = z.from(X);
						if (ne === m.JsonSchemaVersion.V0_1_0)
							return ie || m.ExecutionEngine.Process;
						if (ne === m.JsonSchemaVersion.V2_0_0)
							return m.ExecutionEngine.Terminal;
						throw new Error("Shouldn't happen.");
					}
					J.from = W;
				})(U || (e.ExecutionEngine = U = {}));
				var z;
				(function (J) {
					const W = m.JsonSchemaVersion.V2_0_0;
					function X(Y) {
						const ie = Y.version;
						if (!ie) return W;
						switch (ie) {
							case "0.1.0":
								return m.JsonSchemaVersion.V0_1_0;
							case "2.0.0":
								return m.JsonSchemaVersion.V2_0_0;
							default:
								return W;
						}
					}
					J.from = X;
				})(z || (e.JsonSchemaVersion = z = {}));
				class F {
					constructor(W) {
						if (((this.b = Object.create(null)), W))
							for (const X of Object.keys(W.b)) {
								const Y = W.b[X];
								Array.isArray(Y) ? (this.b[X] = Y.slice()) : (this.b[X] = Y);
							}
					}
					start() {
						(this.a = this.b), (this.b = Object.create(null));
					}
					getUUID(W) {
						const X = this.a ? this.a[W] : void 0;
						let Y;
						X !== void 0 &&
							(Array.isArray(X)
								? ((Y = X.shift()), X.length === 0 && delete this.a[W])
								: ((Y = X), delete this.a[W])),
							Y === void 0 && (Y = C.$9g());
						const ie = this.b[W];
						if (ie === void 0) this.b[W] = Y;
						else if (Array.isArray(ie)) ie.push(Y);
						else {
							const ne = [ie];
							ne.push(Y), (this.b[W] = ne);
						}
						return Y;
					}
					finish() {
						this.a = void 0;
					}
				}
				e.$4Wc = F;
				var x;
				(function (J) {
					(J[(J.TasksJson = 0)] = "TasksJson"),
						(J[(J.WorkspaceFile = 1)] = "WorkspaceFile"),
						(J[(J.User = 2)] = "User");
				})(x || (e.TaskConfigSource = x = {}));
				class H {
					constructor(W, X, Y, ie, ne) {
						(this.a = W),
							(this.b = X),
							(this.e = Y),
							(this.c = ie),
							(this.d = ne);
					}
					run(W, X, Y) {
						const ie = U.from(W),
							ne = z.from(W),
							ee = {
								workspaceFolder: this.a,
								workspace: this.b,
								problemReporter: this.c,
								uuidMap: this.d,
								namedProblemMatchers: {},
								engine: ie,
								schemaVersion: ne,
								platform: this.e,
								taskLoadIssues: [],
								contextKeyService: Y,
							},
							_ = this.f(W, ee, X);
						return {
							validationStatus: this.c.status,
							custom: _.custom,
							configured: _.configured,
							engine: ie,
						};
					}
					f(W, X, Y) {
						const ie = B.from(W, X);
						if (this.c.status.isFatal()) return { custom: [], configured: [] };
						X.namedProblemMatchers = P.namedFrom(W.declares, X);
						let ne, ee;
						if (
							(W.windows && X.platform === w.Platform.Windows
								? ((ne = O.from(W.windows.tasks, ie, X, Y).custom),
									(ee = W.windows.tasks))
								: W.osx && X.platform === w.Platform.Mac
									? ((ne = O.from(W.osx.tasks, ie, X, Y).custom),
										(ee = W.osx.tasks))
									: W.linux &&
										X.platform === w.Platform.Linux &&
										((ne = O.from(W.linux.tasks, ie, X, Y).custom),
										(ee = W.linux.tasks)),
							X.schemaVersion === m.JsonSchemaVersion.V2_0_0 &&
								ne &&
								ne.length > 0 &&
								ee &&
								ee.length > 0)
						) {
							const te = [];
							for (const Q of ee) te.push(JSON.stringify(Q, null, 4));
							X.problemReporter.error(
								t.localize(
									9939,
									null,
									te.join(`
`),
								),
							);
						}
						let _ = { custom: [], configured: [] };
						if (
							(W.tasks && (_ = O.from(W.tasks, ie, X, Y)),
							ne && (_.custom = O.assignTasks(_.custom, ne)),
							(!_.custom || _.custom.length === 0) &&
								ie.command &&
								ie.command.name)
						) {
							const te = P.from(W.problemMatcher, X).value ?? [],
								Q = W.isBackground
									? !!W.isBackground
									: W.isWatching
										? !!W.isWatching
										: void 0,
								Z = m.CommandString.value(ie.command.name),
								se = new m.$e4(
									X.uuidMap.getUUID(Z),
									Object.assign({}, Y, "workspace", {
										config: {
											index: -1,
											element: W,
											workspaceFolder: X.workspaceFolder,
										},
									}),
									Z,
									m.$c4,
									{
										name: void 0,
										runtime: void 0,
										presentation: void 0,
										suppressTaskName: !0,
									},
									!1,
									{ reevaluateOnRerun: !0 },
									{
										name: Z,
										identifier: Z,
										group: m.TaskGroup.Build,
										isBackground: Q,
										problemMatchers: te,
									},
								),
								re = k.from(W.group);
							re !== void 0
								? (se.configurationProperties.group = re)
								: W.group === "none" &&
									(se.configurationProperties.group = void 0),
								R.fillGlobals(se, ie),
								R.fillDefaults(se, X),
								(_.custom = [se]);
						}
						return (
							(_.custom = _.custom || []),
							(_.configured = _.configured || []),
							_
						);
					}
				}
				const q = new Map(),
					V = new Map();
				function G(J, W, X, Y, ie, ne, ee, _ = !1) {
					const te = _ ? V : q;
					let Q = te.get(ne);
					Q || (te.set(ne, new Map()), (Q = te.get(ne)));
					let Z = Q.get(J.uri.toString());
					Z || ((Z = new F()), Q.set(J.uri.toString(), Z));
					try {
						return Z.start(), new H(J, W, X, ie, Z).run(Y, ne, ee);
					} finally {
						Z.finish();
					}
				}
				function K(J, W) {
					return R.createCustomTask(J, W);
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	