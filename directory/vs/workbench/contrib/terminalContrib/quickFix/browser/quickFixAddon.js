import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/arrays.js';
import '../../../../../nls.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../terminal/browser/xterm/decorationStyles.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../base/common/cancellation.js';
import '../../../../services/extensions/common/extensions.js';
import '../../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../../platform/actionWidget/browser/actionWidget.js';
import '../../../../../platform/terminal/common/capabilities/commandDetectionCapability.js';
import '../../../../../platform/label/common/label.js';
import '../../../../../base/common/network.js';
import './quickFix.js';
import '../../../../../platform/actionWidget/browser/actionList.js';
import '../../../../../editor/contrib/codeAction/common/types.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../../../platform/commands/common/commands.js';
define(
			de[3315],
			he([
				1, 0, 6, 3, 189, 7, 24, 4, 10, 41, 1761, 32, 33, 53, 184, 1659, 1653,
				73, 23, 998, 1206, 291, 14, 26, 31,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*event*/,
				i /*lifecycle*/,
				w /*capabilities*/,
				E /*dom*/,
				C /*arrays*/,
				d /*nls*/,
				m /*configuration*/,
				r /*opener*/,
				u /*decorationStyles*/,
				a /*telemetry*/,
				h /*cancellation*/,
				c /*extensions*/,
				n /*accessibilitySignalService*/,
				g /*actionWidget*/,
				p /*commandDetectionCapability*/,
				o /*label*/,
				f /*network*/,
				b /*quickFix*/,
				s /*actionList*/,
				l /*types*/,
				y /*codicons*/,
				$ /*themables*/,
				v /*commands*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uWc = void 0),
					(e.$vWc = P),
					(E = mt(E));
				var S;
				(function (N) {
					N.QuickFix = "quick-fix";
				})(S || (S = {}));
				const I = [
					S.QuickFix,
					u.DecorationSelector.Codicon,
					u.DecorationSelector.CommandDecoration,
					u.DecorationSelector.XtermDecoration,
				];
				let T = class extends i.$1c {
					constructor(A, R, O, B, U, z, F, x, H, q, V) {
						super(),
							(this.r = A),
							(this.s = R),
							(this.t = O),
							(this.u = B),
							(this.w = U),
							(this.z = z),
							(this.C = F),
							(this.F = x),
							(this.G = H),
							(this.H = q),
							(this.I = V),
							(this.a = new t.$re()),
							(this.onDidRequestRerunCommand = this.a.event),
							(this.g = new Map()),
							(this.q = new Set()),
							this.s.get(w.TerminalCapability.CommandDetection)
								? this.J()
								: this.D(
										this.s.onDidAddCapabilityType((K) => {
											K === w.TerminalCapability.CommandDetection && this.J();
										}),
									),
							this.D(
								this.t.onDidRegisterProvider((K) =>
									this.registerCommandFinishedListener(k(K)),
								),
							),
							this.t.extensionQuickFixes.then((K) => {
								for (const J of K) this.registerCommandSelector(J);
							}),
							this.D(
								this.t.onDidRegisterCommandSelector((K) =>
									this.registerCommandSelector(K),
								),
							),
							this.D(this.t.onDidUnregisterProvider((K) => this.g.delete(K)));
					}
					activate(A) {
						this.b = A;
					}
					showMenu() {
						if (!this.m) return;
						const A = this.m.quickFixes.map(
								(B) => new L(B, B.type, B.source, B.label, B.kind),
							),
							R = {
								allActions: A,
								hasAutoFix: !1,
								hasAIFix: !1,
								allAIFixes: !1,
								validActions: A,
								dispose: () => {},
							},
							O = {
								onSelect: async (B) => {
									B.action?.run(), this.H.hide(), this.M(B.action.id, !0);
								},
								onHide: () => {
									this.b?.focus();
								},
							};
						this.H.show(
							"quickFixWidget",
							!1,
							D(R.validActions, !0),
							O,
							this.m.anchor,
							this.m.parentElement,
						);
					}
					registerCommandSelector(A) {
						if (this.q.has(A.id)) return;
						const R = A.commandLineMatcher.toString(),
							O = this.g.get(R) || [];
						O.push({
							id: A.id,
							type: "unresolved",
							commandLineMatcher: A.commandLineMatcher,
							outputMatcher: A.outputMatcher,
							commandExitResult: A.commandExitResult,
							kind: A.kind,
						}),
							this.q.add(A.id),
							this.g.set(R, O);
					}
					registerCommandFinishedListener(A) {
						const R = A.commandLineMatcher.toString();
						let O = this.g.get(R) || [];
						(O = O.filter((B) => B.id !== A.id)), O.push(A), this.g.set(R, O);
					}
					J() {
						const A = this.b,
							R = this.s.get(w.TerminalCapability.CommandDetection);
						!A ||
							!R ||
							this.D(R.onCommandFinished(async (O) => await this.L(O, this.r)));
					}
					async L(A, R) {
						const O = this.b;
						if (!O || A.wasReplayed) return;
						A.command !== "" && this.n && this.M(this.n, !1);
						const B = async (z, F) => {
								if (F === void 0) return;
								const x = z.id;
								return (
									await this.G.activateByEvent(
										`onTerminalQuickFixRequest:${x}`,
									),
									this.t.providers
										.get(x)
										?.provideTerminalQuickFixes(
											A,
											F,
											{
												type: "resolved",
												commandLineMatcher: z.commandLineMatcher,
												outputMatcher: z.outputMatcher,
												commandExitResult: z.commandExitResult,
												kind: z.kind,
												id: z.id,
											},
											new h.$Ce().token,
										)
								);
							},
							U = await P(R, O, A, this.g, this.u, this.C, this.I, this.a, B);
						U && ((this.h = U), (this.n = this.h[0].id), this.N());
					}
					M(A, R) {
						this.F?.publicLog2("terminal/quick-fix", {
							quickFixId: A,
							ranQuickFix: R,
						}),
							this.j?.dispose(),
							(this.j = void 0),
							(this.h = void 0),
							(this.n = void 0);
					}
					N() {
						if (!this.b || !this.h) return;
						const A = this.b.registerMarker();
						if (!A) return;
						const R = this.b.registerDecoration({ marker: A, layer: "top" });
						if (!R) return;
						this.j = R;
						const O = this.h;
						if (!O) {
							R.dispose();
							return;
						}
						R?.onRender((B) => {
							const U = B.getBoundingClientRect(),
								z = { x: U.x, y: U.y, width: U.width, height: U.height };
							if (B.classList.contains(S.QuickFix)) {
								this.m && (this.m.anchor = z);
								return;
							}
							B.classList.add(...I);
							const F = O.every((H) => H.kind === "explain");
							F && B.classList.add("explainOnly"),
								B.classList.add(
									...$.ThemeIcon.asClassNameArray(
										F ? y.$ak.sparkle : y.$ak.lightBulb,
									),
								),
								(0, u.$9Hb)(this.w, B),
								this.z.playSignal(n.$Twb.terminalQuickFix);
							const x = B.closest(".xterm").parentElement;
							x &&
								((this.m = { quickFixes: O, anchor: z, parentElement: x }),
								this.D(E.$0fb(B, E.$$gb.CLICK, () => this.showMenu())));
						}),
							R.onDispose(() => (this.m = void 0)),
							(this.h = void 0);
					}
				};
				(e.$uWc = T),
					(e.$uWc = T =
						Ne(
							[
								j(2, b.$Eoc),
								j(3, v.$ek),
								j(4, m.$gj),
								j(5, n.$Owb),
								j(6, r.$7rb),
								j(7, a.$km),
								j(8, c.$q2),
								j(9, g.$xBb),
								j(10, o.$3N),
							],
							T,
						));
				async function P(N, A, R, O, B, U, z, F, x) {
					const H = new Set(),
						q = new Set(),
						V = [],
						G = R.command;
					for (const K of O.values())
						for (const J of K) {
							if (
								(J.commandExitResult === "success" && R.exitCode !== 0) ||
								(J.commandExitResult === "error" && R.exitCode === 0)
							)
								continue;
							let W;
							if (J.type === "resolved")
								W = await J.getQuickFixes(
									R,
									(0, p.$NHb)(A.buffer.active, R, A.cols, J.outputMatcher),
									J,
									new h.$Ce().token,
								);
							else if (J.type === "unresolved") {
								if (!x) throw new Error("No resolved fix provider");
								W = await x(
									J,
									J.outputMatcher
										? (0, p.$NHb)(A.buffer.active, R, A.cols, J.outputMatcher)
										: void 0,
								);
							} else if (J.type === "internal") {
								const X = G.match(J.commandLineMatcher);
								if (!X) continue;
								const Y = J.outputMatcher;
								let ie;
								if ((Y && (ie = R.getOutputMatch(Y)), !ie)) continue;
								const ne = {
									commandLineMatch: X,
									outputMatch: ie,
									commandLine: R.command,
								};
								W = J.getQuickFixes(ne);
							}
							if (W)
								for (const X of (0, C.$6b)(W)) {
									let Y;
									if ("type" in X) {
										switch (X.type) {
											case b.TerminalQuickFixType.TerminalCommand: {
												const ie = X;
												if (H.has(ie.terminalCommand)) continue;
												H.add(ie.terminalCommand);
												const ne = (0, d.localize)(
													10555,
													null,
													ie.terminalCommand,
												);
												Y = {
													type: b.TerminalQuickFixType.TerminalCommand,
													kind: J.kind,
													class: void 0,
													source: X.source,
													id: X.id,
													label: ne,
													enabled: !0,
													run: () => {
														F?.fire({
															command: ie.terminalCommand,
															shouldExecute: ie.shouldExecute ?? !0,
														});
													},
													tooltip: ne,
													command: ie.terminalCommand,
													shouldExecute: ie.shouldExecute,
												};
												break;
											}
											case b.TerminalQuickFixType.Opener: {
												const ie = X;
												if (!ie.uri) return;
												if (q.has(ie.uri.toString())) continue;
												q.add(ie.uri.toString());
												const ee =
														ie.uri.scheme === f.Schemas.http ||
														ie.uri.scheme === f.Schemas.https
															? encodeURI(ie.uri.toString(!0))
															: z.getUriLabel(ie.uri),
													_ = (0, d.localize)(10556, null, ee);
												Y = {
													source: X.source,
													id: X.id,
													label: _,
													type: b.TerminalQuickFixType.Opener,
													kind: J.kind,
													class: void 0,
													enabled: !0,
													run: () => U.open(ie.uri),
													tooltip: _,
													uri: ie.uri,
												};
												break;
											}
											case b.TerminalQuickFixType.Port: {
												const ie = X;
												Y = {
													source: "builtin",
													type: ie.type,
													kind: J.kind,
													id: ie.id,
													label: ie.label,
													class: ie.class,
													enabled: ie.enabled,
													run: () => {
														ie.run();
													},
													tooltip: ie.tooltip,
												};
												break;
											}
											case b.TerminalQuickFixType.VscodeCommand: {
												const ie = X;
												Y = {
													source: X.source,
													type: ie.type,
													kind: J.kind,
													id: ie.id,
													label: ie.title,
													class: void 0,
													enabled: !0,
													run: () => B.executeCommand(ie.id),
													tooltip: ie.title,
												};
												break;
											}
										}
										Y && V.push(Y);
									}
								}
						}
					return V.length > 0 ? V : void 0;
				}
				function k(N) {
					return {
						id: N.selector.id,
						type: "resolved",
						commandLineMatcher: N.selector.commandLineMatcher,
						outputMatcher: N.selector.outputMatcher,
						commandExitResult: N.selector.commandExitResult,
						kind: N.selector.kind,
						getQuickFixes: N.provider.provideTerminalQuickFixes,
					};
				}
				class L {
					constructor(A, R, O, B, U = "fix") {
						(this.action = A),
							(this.type = R),
							(this.source = O),
							(this.title = B),
							(this.kind = U),
							(this.disabled = !1);
					}
				}
				function D(N, A) {
					const R = [];
					R.push({
						kind: s.ActionListItemKind.Header,
						group: {
							kind: l.$GAb.QuickFix,
							title: (0, d.localize)(10557, null),
						},
					});
					for (const O of A ? N : N.filter((B) => !!B.action))
						!O.disabled &&
							O.action &&
							R.push({
								kind: s.ActionListItemKind.Action,
								item: O,
								group: {
									kind: l.$GAb.QuickFix,
									icon: M(O),
									title: O.action.label,
								},
								disabled: !1,
								label: O.title,
							});
					return R;
				}
				function M(N) {
					if (N.kind === "explain") return y.$ak.sparkle;
					switch (N.type) {
						case b.TerminalQuickFixType.Opener:
							if ("uri" in N.action && N.action.uri)
								return N.action.uri.scheme === f.Schemas.http ||
									N.action.uri.scheme === f.Schemas.https
									? y.$ak.linkExternal
									: y.$ak.goToFile;
						case b.TerminalQuickFixType.TerminalCommand:
							return y.$ak.run;
						case b.TerminalQuickFixType.Port:
							return y.$ak.debugDisconnect;
						case b.TerminalQuickFixType.VscodeCommand:
							return y.$ak.lightbulb;
					}
				}
			},
		),
		