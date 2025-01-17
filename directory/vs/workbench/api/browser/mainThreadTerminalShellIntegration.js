import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uri.js';
import '../../../platform/terminal/common/capabilities/capabilities.js';
import '../common/extHost.protocol.js';
import '../../contrib/terminal/browser/terminal.js';
import '../../services/environment/common/environmentService.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../common/extHostTypes.js';
define(
			de[3465],
			he([1, 0, 6, 3, 9, 189, 88, 107, 78, 101, 1028]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hoc = void 0);
				let a = class extends i.$1c {
					constructor(n, g, p) {
						super(),
							(this.b = g),
							(this.a = n.getProxy(C.$mbb.ExtHostTerminalShellIntegration));
						const o = new Map();
						this.D(
							(0, i.$Yc)(() => {
								for (const $ of o.values()) $.dispose();
							}),
						);
						const f = this.B.add(
							this.b.createOnInstanceEvent(($) =>
								t.Event.map(
									t.Event.filter(
										$.capabilities.onDidAddCapabilityType,
										(v) => v === E.TerminalCapability.CommandDetection,
									),
									() => $,
								),
							),
						).event;
						this.B.add(f(($) => this.a.$shellIntegrationChange($.instanceId)));
						const b = this.B.add(
							this.b.createOnInstanceCapabilityEvent(
								E.TerminalCapability.CommandDetection,
								($) => $.onCommandExecuted,
							),
						);
						let s;
						this.B.add(
							b.event(($) => {
								if ($.data === s) return;
								s = $.data;
								const v = $.instance.instanceId;
								this.a.$shellExecutionStart(
									v,
									$.data.command,
									h($.data),
									$.data.isTrusted,
									this.c($.data.cwd),
								),
									o.get(v)?.dispose(),
									o.set(
										v,
										t.Event.accumulate(
											$.instance.onData,
											50,
											this.B,
										)((S) => this.a.$shellExecutionData(v, S.join(""))),
									);
							}),
						);
						const l = this.B.add(
							this.b.createOnInstanceCapabilityEvent(
								E.TerminalCapability.CommandDetection,
								($) => $.onCommandFinished,
							),
						);
						this.B.add(
							l.event(($) => {
								s = void 0;
								const v = $.instance.instanceId;
								o.get(v)?.dispose(),
									setTimeout(() => {
										this.a.$shellExecutionEnd(
											v,
											$.data.command,
											h($.data),
											$.data.isTrusted,
											$.data.exitCode,
										);
									});
							}),
						);
						const y = this.B.add(
							this.b.createOnInstanceCapabilityEvent(
								E.TerminalCapability.CwdDetection,
								($) => $.onDidChangeCwd,
							),
						);
						this.B.add(
							y.event(($) => {
								this.a.$cwdChange($.instance.instanceId, this.c($.data));
							}),
						),
							this.B.add(
								this.b.onDidDisposeInstance(($) =>
									this.a.$closeTerminal($.instanceId),
								),
							);
					}
					$executeCommand(n, g) {
						this.b.getInstanceFromId(n)?.runCommand(g, !0);
					}
					c(n) {
						return n ? w.URI.file(n) : void 0;
					}
				};
				(e.$Hoc = a),
					(e.$Hoc = a =
						Ne(
							[
								(0, r.$tmc)(C.$lbb.MainThreadTerminalShellIntegration),
								j(1, d.$iIb),
								j(2, m.$r8),
							],
							a,
						));
				function h(c) {
					switch (c.commandLineConfidence) {
						case "high":
							return u.TerminalShellExecutionCommandLineConfidence.High;
						case "medium":
							return u.TerminalShellExecutionCommandLineConfidence.Medium;
						case "low":
						default:
							return u.TerminalShellExecutionCommandLineConfidence.Low;
					}
				}
			},
		),
		