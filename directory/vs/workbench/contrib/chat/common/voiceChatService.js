import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './chatAgents.js';
import './chatParserTypes.js';
import '../../speech/common/speechService.js';
define(
			de[1755],
			he([1, 0, 4, 6, 3, 37, 8, 5, 153, 329, 511]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Ic = e.$1Ic = e.$ZIc = void 0),
					(e.$ZIc = (0, d.$Mi)("voiceChatService"));
				var h;
				(function (n) {
					(n[(n.AGENT = 1)] = "AGENT"),
						(n[(n.COMMAND = 2)] = "COMMAND"),
						(n[(n.AGENT_AND_COMMAND = 3)] = "AGENT_AND_COMMAND");
				})(h || (h = {})),
					(e.$1Ic = new C.$5j("voiceChatInProgress", !1, {
						type: "boolean",
						description: (0, t.localize)(4786, null),
					}));
				let c = class extends w.$1c {
					static {
						a = this;
					}
					static {
						this.a = r.$Q2;
					}
					static {
						this.b = r.$R2;
					}
					static {
						this.c = { [this.a]: "at", [this.b]: "slash" };
					}
					static {
						this.f = { [this.a]: "At", [this.b]: "Slash" };
					}
					static {
						this.g = new Map([["vscode", "code"]]);
					}
					constructor(g, p, o) {
						super(),
							(this.m = g),
							(this.n = p),
							(this.q = o),
							(this.h = e.$1Ic.bindTo(this.q)),
							(this.j = 0);
					}
					r(g) {
						const p = new Map();
						for (const o of this.n.getActivatedAgents()) {
							const f =
								`${a.c[a.a]} ${a.g.get(o.name) ?? o.name}`.toLowerCase();
							p.set(f, { agent: o.name });
							for (const b of o.slashCommands) {
								const s = `${a.c[a.b]} ${b.name}`.toLowerCase();
								p.set(s, { agent: o.name, command: b.name });
								const l = `${f} ${s}`.toLowerCase();
								p.set(l, { agent: o.name, command: b.name });
							}
						}
						return p;
					}
					s(g, p) {
						switch (p) {
							case h.AGENT:
								return `${a.a}${g.agent}`;
							case h.COMMAND:
								return `${a.b}${g.command}`;
							case h.AGENT_AND_COMMAND:
								return `${a.a}${g.agent} ${a.b}${g.command}`;
						}
					}
					async createVoiceChatSession(g, p) {
						const o = new w.$Zc(),
							f = (v) => {
								(this.j = Math.max(0, this.j - 1)),
									this.j === 0 && this.h.reset(),
									v && o.dispose();
							};
						o.add(g.onCancellationRequested(() => f(!0)));
						let b = !1,
							s = !1;
						const l = o.add(new i.$re()),
							y = await this.m.createSpeechToTextSession(g, "chat");
						g.isCancellationRequested && f(!0);
						const $ = this.r(p.model);
						return (
							o.add(
								y.onDidChange((v) => {
									switch (v.status) {
										case u.SpeechToTextStatus.Recognizing:
										case u.SpeechToTextStatus.Recognized: {
											let S = v;
											if (v.text) {
												const I =
														v.text.startsWith(a.f[a.a]) ||
														v.text.startsWith(a.c[a.a]),
													T =
														v.text.startsWith(a.f[a.b]) ||
														v.text.startsWith(a.c[a.b]);
												if (I || T) {
													const P = v.text.split(" ");
													let k,
														L = !1;
													if (p.usesAgents && I && !b && !s && P.length >= 4) {
														const D = $.get(
															P.slice(0, 4)
																.map((M) => this.t(M))
																.join(" "),
														);
														D &&
															((k = [
																this.s(D, h.AGENT_AND_COMMAND),
																...P.slice(4),
															]),
															(L = P.length === 4),
															v.status === u.SpeechToTextStatus.Recognized &&
																((b = !0), (s = !0)));
													}
													if (p.usesAgents && I && !b && !k && P.length >= 2) {
														const D = $.get(
															P.slice(0, 2)
																.map((M) => this.t(M))
																.join(" "),
														);
														D &&
															((k = [this.s(D, h.AGENT), ...P.slice(2)]),
															(L = P.length === 2),
															v.status === u.SpeechToTextStatus.Recognized &&
																(b = !0));
													}
													if (T && !s && !k && P.length >= 2) {
														const D = $.get(
															P.slice(0, 2)
																.map((M) => this.t(M))
																.join(" "),
														);
														D &&
															((k = [
																this.s(
																	D,
																	p.usesAgents && !b
																		? h.AGENT_AND_COMMAND
																		: h.COMMAND,
																),
																...P.slice(2),
															]),
															(L = P.length === 2),
															v.status === u.SpeechToTextStatus.Recognized &&
																(s = !0));
													}
													S = {
														status: v.status,
														text: (k ?? P).join(" "),
														waitingForInput: L,
													};
												}
											}
											l.fire(S);
											break;
										}
										case u.SpeechToTextStatus.Started:
											this.j++, this.h.set(!0), l.fire(v);
											break;
										case u.SpeechToTextStatus.Stopped:
											f(!1), l.fire(v);
											break;
										case u.SpeechToTextStatus.Error:
											l.fire(v);
											break;
									}
								}),
							),
							{ onDidChange: l.event }
						);
					}
					t(g) {
						return (
							(g = (0, E.$uf)(g, ".")),
							(g = (0, E.$uf)(g, ",")),
							(g = (0, E.$uf)(g, "?")),
							g.toLowerCase()
						);
					}
				};
				(e.$2Ic = c),
					(e.$2Ic = c = a = Ne([j(0, u.$V7), j(1, m.$c3), j(2, C.$6j)], c));
			},
		),
		