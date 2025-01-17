import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/buffer.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/uri.js';
import '../../../../../nls.js';
import '../../../../../platform/action/common/actionCommonCategories.js';
import '../../../../../platform/clipboard/common/clipboardService.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import '../../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../../../platform/terminal/common/terminal.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../terminal/browser/terminalActions.js';
import '../../../terminal/browser/terminalExtensions.js';
import '../../../terminal/common/terminalContextKey.js';
import '../common/terminal.developer.js';
import '../../../../services/statusbar/browser/statusbar.js';
import '../../../../../css!vs/workbench/contrib/terminalContrib/developer/browser/media/developer.js';
define(
			de[4041],
			he([
				1, 0, 15, 76, 6, 3, 9, 4, 99, 121, 31, 10, 8, 22, 41, 63, 189, 117, 25,
				363, 378, 237, 1765, 166, 2497,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
			) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, b.$EUc)({
						id: y.TerminalDeveloperCommandId.ShowTextureAtlas,
						title: (0, d.localize2)(10506, "Show Terminal Texture Atlas"),
						category: m.$ck.Developer,
						precondition: h.$Kj.or(l.TerminalContextKeys.isOpen),
						run: async (I, T) => {
							const P = T.get(c.$ll),
								k = T.get(n.$7rb),
								L = T.get(f.$Vi),
								D = await I.service.activeInstance?.xterm?.textureAtlas;
							if (!D) return;
							const M = L.getWorkspace().folders[0].uri,
								N = C.URI.joinPath(M, "textureAtlas.png"),
								A = document.createElement("canvas");
							(A.width = D.width), (A.height = D.height);
							const R = A.getContext("bitmaprenderer");
							if (!R) return;
							R.transferFromImageBitmap(D);
							const O = await new Promise((B) => A.toBlob(B));
							O &&
								(await P.writeFile(
									N,
									i.$Te.wrap(new Uint8Array(await O.arrayBuffer())),
								),
								k.open(N));
						},
					}),
					(0, b.$EUc)({
						id: y.TerminalDeveloperCommandId.WriteDataToTerminal,
						title: (0, d.localize2)(10507, "Write Data to Terminal"),
						category: m.$ck.Developer,
						run: async (I, T) => {
							const P = T.get(g.$DJ),
								k = await I.service.getActiveOrCreateInstance();
							if (
								(await I.service.revealActiveTerminal(),
								await k.processReady,
								!k.xterm)
							)
								throw new Error(
									"Cannot write data to terminal if xterm isn't initialized",
								);
							const L = await P.input({
								value: "",
								placeHolder: "Enter data, use \\x to escape",
								prompt: (0, d.localize)(10503, null),
							});
							if (!L) return;
							let D = L.replace(
								/\\n/g,
								`
`,
							).replace(/\\r/g, "\r");
							for (;;) {
								const N = D.match(/\\x([0-9a-fA-F]{2})/);
								if (N === null || N.index === void 0 || N.length < 2) break;
								D =
									D.slice(0, N.index) +
									String.fromCharCode(parseInt(N[1], 16)) +
									D.slice(N.index + 4);
							}
							k.xterm._writeText(D);
						},
					}),
					(0, b.$EUc)({
						id: y.TerminalDeveloperCommandId.RecordSession,
						title: (0, d.localize2)(10508, "Record Terminal Session"),
						category: m.$ck.Developer,
						run: async (I, T) => {
							const P = T.get(r.$Vxb),
								k = T.get(u.$ek),
								L = T.get($.$d6b),
								D = new E.$Zc(),
								M = (0, d.localize)(10504, null),
								N = { text: M, name: M, ariaLabel: M, showProgress: !0 },
								A = L.addEntry(N, "recordSession", $.StatusbarAlignment.LEFT);
							D.add(A);
							const R = await I.service.createTerminal();
							return (
								I.service.setActiveInstance(R),
								await I.service.revealActiveTerminal(),
								await Promise.all([R.processReady, R.focusWhenReady(!0)]),
								new Promise((O) => {
									const B = [],
										U = () => {
											const x = JSON.stringify(B, null, 2);
											P.writeText(x), D.dispose(), O();
										},
										z = D.add(new t.$Jh(5e3));
									D.add(
										w.Event.runAndSubscribe(R.onDimensionsChanged, () => {
											B.push({ type: "resize", cols: R.cols, rows: R.rows }),
												z.trigger(U);
										}),
									),
										D.add(
											k.onWillExecuteCommand((x) => {
												B.push({ type: "command", id: x.commandId }),
													z.trigger(U);
											}),
										),
										D.add(
											R.onWillData((x) => {
												B.push({ type: "output", data: x }), z.trigger(U);
											}),
										),
										D.add(
											R.onDidSendText((x) => {
												B.push({ type: "sendText", data: x }), z.trigger(U);
											}),
										),
										D.add(
											R.xterm.raw.onData((x) => {
												B.push({ type: "input", data: x }), z.trigger(U);
											}),
										);
									let F = !1;
									D.add(
										w.Event.runAndSubscribe(
											R.capabilities.onDidAddCapability,
											(x) => {
												if (F) return;
												const H = R.capabilities.get(
													p.TerminalCapability.CommandDetection,
												);
												H &&
													(D.add(
														H.promptInputModel.onDidChangeInput((q) => {
															B.push({
																type: "promptInputChange",
																data: H.promptInputModel.getCombinedString(),
															}),
																z.trigger(U);
														}),
													),
													(F = !0));
											},
										),
									);
								})
							);
						},
					}),
					(0, b.$EUc)({
						id: y.TerminalDeveloperCommandId.RestartPtyHost,
						title: (0, d.localize2)(10509, "Restart Pty Host"),
						category: m.$ck.Developer,
						run: async (I, T) => {
							const P = T.get(o.$YJ),
								k = Array.from(I.instanceService.getRegisteredBackends()),
								L = k.filter((M) => !M.isResponsive),
								D = L.length > 0 ? L : k;
							for (const M of D)
								P.warn(
									`Restarting pty host for authority "${M.remoteAuthority}"`,
								),
									M.restartPtyHost();
						},
					});
				let S = class extends E.$1c {
					static {
						v = this;
					}
					static {
						this.ID = "terminal.devMode";
					}
					static get(T) {
						return T.getContribution(v.ID);
					}
					constructor(T, P, k, L, D) {
						super(),
							(this.j = T),
							(this.m = L),
							(this.n = D),
							(this.b = new E.$2c()),
							(this.f = 0),
							(this.h = this.D(new E.$2c())),
							this.D(
								this.m.onDidChangeConfiguration((M) => {
									M.affectsConfiguration(o.TerminalSettingId.DevMode) &&
										this.q();
								}),
							);
					}
					xtermReady(T) {
						(this.a = T), this.q();
					}
					q() {
						const T = this.r();
						this.a?.raw.element?.classList.toggle("dev-mode", T);
						const P = this.j.capabilities.get(
							p.TerminalCapability.CommandDetection,
						);
						if (T)
							if (P) {
								const k = new Map();
								(this.b.value = (0, E.$Xc)(
									this.j.onDidBlur(() => this.q()),
									this.j.onDidFocus(() => this.q()),
									P.promptInputModel.onDidChangeInput(() => this.q()),
									P.onCommandFinished((L) => {
										const D = `color-${this.f}`,
											M = [];
										if ((k.set(L, M), L.promptStartMarker)) {
											const N = this.j.xterm.raw?.registerDecoration({
												marker: L.promptStartMarker,
											});
											N &&
												(M.push(N),
												N.onRender((A) => {
													(A.textContent = "A"),
														A.classList.add(
															"xterm-sequence-decoration",
															"top",
															"left",
															D,
														);
												}));
										}
										if (L.marker) {
											const N = this.j.xterm.raw?.registerDecoration({
												marker: L.marker,
												x: L.startX,
											});
											N &&
												(M.push(N),
												N.onRender((A) => {
													(A.textContent = "B"),
														A.classList.add(
															"xterm-sequence-decoration",
															"top",
															"right",
															D,
														);
												}));
										}
										if (L.executedMarker) {
											const N = this.j.xterm.raw?.registerDecoration({
												marker: L.executedMarker,
												x: L.executedX,
											});
											N &&
												(M.push(N),
												N.onRender((A) => {
													(A.textContent = "C"),
														A.classList.add(
															"xterm-sequence-decoration",
															"bottom",
															"left",
															D,
														);
												}));
										}
										if (L.endMarker) {
											const N = this.j.xterm.raw?.registerDecoration({
												marker: L.endMarker,
											});
											N &&
												(M.push(N),
												N.onRender((A) => {
													(A.textContent = "D"),
														A.classList.add(
															"xterm-sequence-decoration",
															"bottom",
															"right",
															D,
														);
												}));
										}
										this.f = (this.f + 1) % 2;
									}),
									P.onCommandInvalidated((L) => {
										for (const D of L) {
											const M = k.get(D);
											M && (0, E.$Vc)(M), k.delete(D);
										}
									}),
								)),
									this.s(P);
							} else
								this.b.value = this.j.capabilities.onDidAddCapabilityType(
									(k) => {
										k === p.TerminalCapability.CommandDetection && this.q();
									},
								);
						else this.b.clear();
					}
					r() {
						return this.m.getValue(o.TerminalSettingId.DevMode) || !1;
					}
					s(T) {
						const P = T.promptInputModel;
						if (P) {
							const k = (0, d.localize)(10505, null),
								L = P.cursorIndex === -1;
							(this.g = {
								name: k,
								text: `$(${L ? "loading~spin" : "terminal"}) ${P.getCombinedString()}`,
								ariaLabel: k,
								tooltip: "The detected terminal prompt input",
								kind: "prominent",
							}),
								this.h.value
									? this.h.value.update(this.g)
									: (this.h.value = this.n.addEntry(
											this.g,
											`terminal.promptInput.${this.j.instanceId}`,
											$.StatusbarAlignment.LEFT,
										)),
								this.n.updateEntryVisibility(
									`terminal.promptInput.${this.j.instanceId}`,
									this.j.hasFocus,
								);
						}
					}
				};
				(S = v = Ne([j(3, a.$gj), j(4, $.$d6b)], S)), (0, s.$qLc)(S.ID, S);
			},
		),
		