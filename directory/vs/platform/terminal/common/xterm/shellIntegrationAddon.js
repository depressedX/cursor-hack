import '../../../../../require.js';
import '../../../../../exports.js';
import '../terminal.js';
import '../../../../base/common/lifecycle.js';
import '../capabilities/terminalCapabilityStore.js';
import '../capabilities/commandDetectionCapability.js';
import '../capabilities/cwdDetectionCapability.js';
import '../capabilities/capabilities.js';
import '../capabilities/partialCommandDetectionCapability.js';
import '../../../../base/common/event.js';
import '../capabilities/bufferMarkCapability.js';
import '../../../../base/common/uri.js';
import '../terminalEnvironment.js';
import '../../../../base/common/strings.js';
define(
			de[1202],
			he([1, 0, 117, 3, 675, 1653, 2823, 189, 2825, 6, 2821, 9, 775, 37]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RHb = e.ShellIntegrationOscPs = void 0),
					(e.$SHb = b),
					(e.$THb = s),
					(e.$UHb = l);
				var n;
				(function (y) {
					(y[(y.FinalTerm = 133)] = "FinalTerm"),
						(y[(y.VSCode = 633)] = "VSCode"),
						(y[(y.ITerm = 1337)] = "ITerm"),
						(y[(y.SetCwd = 7)] = "SetCwd"),
						(y[(y.SetWindowsFriendlyCwd = 9)] = "SetWindowsFriendlyCwd");
				})(n || (e.ShellIntegrationOscPs = n = {}));
				var g;
				(function (y) {
					(y.PromptStart = "A"),
						(y.CommandStart = "B"),
						(y.CommandExecuted = "C"),
						(y.CommandFinished = "D");
				})(g || (g = {}));
				var p;
				(function (y) {
					(y.PromptStart = "A"),
						(y.CommandStart = "B"),
						(y.CommandExecuted = "C"),
						(y.CommandFinished = "D"),
						(y.CommandLine = "E"),
						(y.ContinuationStart = "F"),
						(y.ContinuationEnd = "G"),
						(y.RightPromptStart = "H"),
						(y.RightPromptEnd = "I"),
						(y.Property = "P"),
						(y.SetMark = "SetMark");
				})(p || (p = {}));
				var o;
				(function (y) {
					(y.SetMark = "SetMark"), (y.CurrentDir = "CurrentDir");
				})(o || (o = {}));
				class f extends i.$1c {
					get status() {
						return this.g;
					}
					constructor($, v, S, I) {
						super(),
							(this.j = $),
							(this.m = v),
							(this.n = S),
							(this.q = I),
							(this.capabilities = this.D(new w.$KHb())),
							(this.b = !1),
							(this.f = []),
							(this.g = t.ShellIntegrationStatus.Off),
							(this.h = new r.$re()),
							(this.onDidChangeStatus = this.h.event),
							this.D(
								(0, i.$Yc)(() => {
									this.y(), this.r();
								}),
							);
					}
					r() {
						(0, i.$Vc)(this.f), (this.f.length = 0);
					}
					activate($) {
						(this.a = $),
							this.capabilities.add(
								d.TerminalCapability.PartialCommandDetection,
								this.D(new m.$PHb(this.a)),
							),
							this.D($.parser.registerOscHandler(n.VSCode, (v) => this.u(v))),
							this.D($.parser.registerOscHandler(n.ITerm, (v) => this.H(v))),
							this.f.push(
								$.parser.registerOscHandler(n.FinalTerm, (v) => this.s(v)),
							),
							this.D($.parser.registerOscHandler(n.SetCwd, (v) => this.J(v))),
							this.D(
								$.parser.registerOscHandler(n.SetWindowsFriendlyCwd, (v) =>
									this.I(v),
								),
							),
							this.w();
					}
					getMarkerId($, v) {
						this.N($).getMark(v);
					}
					s($) {
						const v = this.t($);
						return (
							this.g === t.ShellIntegrationStatus.Off &&
								((this.g = t.ShellIntegrationStatus.FinalTerm),
								this.h.fire(this.g)),
							v
						);
					}
					t($) {
						if (!this.a) return !1;
						const [v, ...S] = $.split(";");
						switch (v) {
							case g.PromptStart:
								return this.M(this.a).handlePromptStart(), !0;
							case g.CommandStart:
								return (
									this.M(this.a).handleCommandStart({ ignoreCommandLine: !0 }),
									!0
								);
							case g.CommandExecuted:
								return this.M(this.a).handleCommandExecuted(), !0;
							case g.CommandFinished: {
								const I = S.length === 1 ? parseInt(S[0]) : void 0;
								return this.M(this.a).handleCommandFinished(I), !0;
							}
						}
						return !1;
					}
					u($) {
						const v = this.z($);
						return (
							!this.b &&
								v &&
								(this.n?.publicLog2(
									"terminal/shellIntegrationActivationSucceeded",
								),
								(this.b = !0),
								this.y()),
							this.g !== t.ShellIntegrationStatus.VSCode &&
								((this.g = t.ShellIntegrationStatus.VSCode),
								this.h.fire(this.g)),
							v
						);
					}
					async w() {
						!this.n ||
							this.m ||
							(this.c = setTimeout(() => {
								!this.capabilities.get(d.TerminalCapability.CommandDetection) &&
									!this.capabilities.get(d.TerminalCapability.CwdDetection) &&
									(this.n?.publicLog2(
										"terminal/shellIntegrationActivationTimeout",
									),
									this.q.warn(
										"Shell integration failed to add capabilities within 10 seconds",
									)),
									(this.b = !0);
							}, 1e4));
					}
					y() {
						this.c !== void 0 && (clearTimeout(this.c), (this.c = void 0));
					}
					z($) {
						if (!this.a) return !1;
						const v = $.indexOf(";"),
							S = v === -1 ? $ : $.substring(0, v),
							I = v === -1 ? [] : $.substring(v + 1).split(";");
						switch (S) {
							case p.PromptStart:
								return this.M(this.a).handlePromptStart(), !0;
							case p.CommandStart:
								return this.M(this.a).handleCommandStart(), !0;
							case p.CommandExecuted:
								return this.M(this.a).handleCommandExecuted(), !0;
							case p.CommandFinished: {
								const T = I[0],
									P = T !== void 0 ? parseInt(T) : void 0;
								return this.M(this.a).handleCommandFinished(P), !0;
							}
							case p.CommandLine: {
								const T = I[0],
									P = I[1];
								let k;
								return (
									T !== void 0 ? (k = b(T)) : (k = ""),
									this.M(this.a).setCommandLine(k, P === this.j),
									!0
								);
							}
							case p.ContinuationStart:
								return this.M(this.a).handleContinuationStart(), !0;
							case p.ContinuationEnd:
								return this.M(this.a).handleContinuationEnd(), !0;
							case p.RightPromptStart:
								return this.M(this.a).handleRightPromptStart(), !0;
							case p.RightPromptEnd:
								return this.M(this.a).handleRightPromptEnd(), !0;
							case p.Property: {
								const T = I[0],
									P = T !== void 0 ? b(T) : "",
									{ key: k, value: L } = s(P);
								if (L === void 0) return !0;
								switch (k) {
									case "ContinuationPrompt":
										return this.C((0, c.$0f)(L)), !0;
									case "Cwd":
										return this.G(L), !0;
									case "IsWindows":
										return this.M(this.a).setIsWindowsPty(L === "True"), !0;
									case "Prompt": {
										const D = L.replace(/\x1b\[[0-9;]*m/g, "");
										return this.F(D), !0;
									}
									case "Task":
										return (
											this.N(this.a),
											this.capabilities
												.get(d.TerminalCapability.CommandDetection)
												?.setIsCommandStorageDisabled(),
											!0
										);
								}
							}
							case p.SetMark:
								return this.N(this.a).addMark(l(I)), !0;
						}
						return !1;
					}
					C($) {
						this.a && this.M(this.a).setContinuationPrompt($);
					}
					F($) {
						if (!this.a) return;
						const v = $.substring(
								$.lastIndexOf(`
`) + 1,
							),
							S = v.substring(v.lastIndexOf(" "));
						S && this.M(this.a).setPromptTerminator(S, v);
					}
					G($) {
						($ = (0, h.$Deb)($)),
							this.L().updateCwd($),
							this.capabilities
								.get(d.TerminalCapability.CommandDetection)
								?.setCwd($);
					}
					H($) {
						if (!this.a) return !1;
						const [v] = $.split(";");
						switch (v) {
							case o.SetMark:
								this.N(this.a).addMark();
							default: {
								const { key: S, value: I } = s(v);
								if (I === void 0) return !0;
								switch (S) {
									case o.CurrentDir:
										return this.G(I), !0;
								}
							}
						}
						return !1;
					}
					I($) {
						if (!this.a) return !1;
						const [v, ...S] = $.split(";");
						switch (v) {
							case "9":
								return S.length && this.G(S[0]), !0;
						}
						return !1;
					}
					J($) {
						if (!this.a) return !1;
						const [v] = $.split(";");
						if (v.match(/^file:\/\/.*\//)) {
							const S = a.URI.parse(v);
							if (S.path && S.path.length > 0) return this.G(S.path), !0;
						}
						return !1;
					}
					serialize() {
						return !this.a ||
							!this.capabilities.has(d.TerminalCapability.CommandDetection)
							? { isWindowsPty: !1, commands: [], promptInputModel: void 0 }
							: this.M(this.a).serialize();
					}
					deserialize($) {
						if (!this.a)
							throw new Error(
								"Cannot restore commands before addon is activated",
							);
						this.M(this.a).deserialize($);
					}
					L() {
						let $ = this.capabilities.get(d.TerminalCapability.CwdDetection);
						return (
							$ ||
								(($ = this.D(new C.$OHb())),
								this.capabilities.add(d.TerminalCapability.CwdDetection, $)),
							$
						);
					}
					M($) {
						let v = this.capabilities.get(
							d.TerminalCapability.CommandDetection,
						);
						return (
							v ||
								((v = this.D(new E.$MHb($, this.q))),
								this.capabilities.add(
									d.TerminalCapability.CommandDetection,
									v,
								)),
							v
						);
					}
					N($) {
						let v = this.capabilities.get(
							d.TerminalCapability.BufferMarkDetection,
						);
						return (
							v ||
								((v = this.D(new u.$QHb($))),
								this.capabilities.add(
									d.TerminalCapability.BufferMarkDetection,
									v,
								)),
							v
						);
					}
				}
				e.$RHb = f;
				function b(y) {
					return y.replaceAll(/\\(\\|x([0-9a-f]{2}))/gi, ($, v, S) =>
						S ? String.fromCharCode(parseInt(S, 16)) : v,
					);
				}
				function s(y) {
					const $ = y.indexOf("=");
					return $ === -1
						? { key: y, value: void 0 }
						: { key: y.substring(0, $), value: y.substring(1 + $) };
				}
				function l(y) {
					let $,
						v = !1;
					for (const S of y)
						S !== void 0 &&
							(S === "Hidden" && (v = !0),
							S.startsWith("Id=") && ($ = S.substring(3)));
					return { id: $, hidden: v };
				}
			},
		),
		