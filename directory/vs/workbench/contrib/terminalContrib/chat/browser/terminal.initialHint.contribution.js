import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../terminal/browser/terminal.js';
import '../../../terminal/browser/terminalExtensions.js';
import '../../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../nls.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/platform.js';
import '../../../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
import '../../../../../base/browser/formattedTextRenderer.js';
import '../../../accessibility/browser/accessibilityConfiguration.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/product/common/productService.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../base/browser/ui/aria/aria.js';
import '../../../../../base/browser/dom.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './terminalChat.js';
import '../../../terminal/browser/terminalInstance.js';
import '../common/terminalInitialHintConfiguration.js';
import '../../../chat/common/chatAgents.js';
import '../../../../../platform/storage/common/storage.js';
import '../../../../../platform/contextview/browser/contextView.js';
import '../../../../../base/browser/mouseEvent.js';
import '../../../../../css!vs/workbench/contrib/terminalContrib/chat/browser/media/terminalInitialHint.js';
define(
			de[4376],
			he([
				1, 0, 3, 107, 378, 189, 39, 4, 6, 12, 460, 595, 130, 10, 31, 62, 32,
				127, 7, 5, 692, 1074, 1763, 153, 21, 49, 168, 2496,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*lifecycle*/,
				i /*terminal*/,
				w /*terminalExtensions*/,
				E /*capabilities*/,
				C /*keybinding*/,
				d /*nls*/,
				m /*event*/,
				r /*platform*/,
				u /*keybindingLabel*/,
				a /*formattedTextRenderer*/,
				h /*accessibilityConfiguration*/,
				c /*configuration*/,
				n /*commands*/,
				g /*productService*/,
				p /*telemetry*/,
				o /*aria*/,
				f /*dom*/,
				b /*instantiation*/,
				s /*terminalChat*/,
				l /*terminalInstance*/,
				y /*terminalInitialHintConfiguration*/,
				$ /*chatAgents*/,
				v /*storage*/,
				S /*contextView*/,
				I /*mouseEvent*/,
) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VWc = e.$UWc = void 0),
					(f = mt(f));
				const P = f.$;
				var k;
				(function (N) {
					N.InitialHintHideStorageKey = "terminal.initialHint.hide";
				})(k || (k = {}));
				class L extends t.$1c {
					get onDidRequestCreateHint() {
						return this.a.event;
					}
					constructor(A, R) {
						super(),
							(this.c = A),
							(this.f = R),
							(this.a = this.D(new m.$re())),
							(this.b = this.D(new t.$2c()));
					}
					activate(A) {
						const R = this.D(new t.$Zc());
						this.b.value = R;
						const O = this.c.get(E.TerminalCapability.CommandDetection);
						O
							? R.add(
									m.Event.once(O.promptInputModel.onDidStartInput)(() =>
										this.a.fire(),
									),
								)
							: this.D(
									this.c.onDidAddCapability((U) => {
										if (U.id === E.TerminalCapability.CommandDetection) {
											const z = U.capability;
											R.add(
												m.Event.once(z.promptInputModel.onDidStartInput)(() =>
													this.a.fire(),
												),
											),
												z.promptInputModel.value || this.a.fire();
										}
									}),
								);
						const B = this.f((U) => {
							U?.locations.includes($.ChatAgentLocation.Terminal) &&
								(this.a.fire(), B.dispose());
						});
						this.b.value?.add(B);
					}
				}
				e.$UWc = L;
				let D = class extends t.$1c {
					static {
						T = this;
					}
					static {
						this.ID = "terminal.initialHint";
					}
					static get(A) {
						return A.getContribution(T.ID);
					}
					constructor(A, R, O, B, U, z, F, x, H) {
						super(),
							(this.g = A),
							(this.h = B),
							(this.j = U),
							(this.m = z),
							(this.n = F),
							(this.q = x),
							(this.r = H),
							this.D(
								this.j.onDidChangeConfiguration((q) => {
									q.affectsConfiguration(
										y.TerminalInitialHintSettingId.Enabled,
									) &&
										this.r.remove(
											k.InitialHintHideStorageKey,
											v.StorageScope.APPLICATION,
										);
								}),
							);
					}
					xtermOpen(A) {
						this.r.getBoolean(
							k.InitialHintHideStorageKey,
							v.StorageScope.APPLICATION,
							!1,
						) ||
							(this.m.instances.length + this.n.instances.length === 1 &&
								((this.f = A),
								(this.a = this.D(
									this.h.createInstance(
										L,
										this.g.capabilities,
										this.q.onDidChangeAgents,
									),
								)),
								this.f.raw.loadAddon(this.a),
								this.D(this.a.onDidRequestCreateHint(() => this.s()))));
					}
					s() {
						const A = this.g instanceof l.$oVc ? this.g : void 0,
							R = A?.capabilities.get(E.TerminalCapability.CommandDetection);
						if (
							!A ||
							!this.f ||
							this.b ||
							!R ||
							R.promptInputModel.value ||
							A.shellLaunchConfig.attachPersistentProcess ||
							!this.j.getValue(y.TerminalInitialHintSettingId.Enabled)
						)
							return;
						if (!this.c) {
							const B = this.f.raw.registerMarker();
							if (!B || this.f.raw.buffer.active.cursorX === 0) return;
							this.D(B),
								(this.c = this.f.raw.registerDecoration({
									marker: B,
									x: this.f.raw.buffer.active.cursorX + 1,
								})),
								this.c && this.D(this.c);
						}
						this.D(this.f.raw.onKey(() => this.dispose())),
							this.D(
								this.j.onDidChangeConfiguration((B) => {
									B.affectsConfiguration(
										y.TerminalInitialHintSettingId.Enabled,
									) &&
										!this.j.getValue(y.TerminalInitialHintSettingId.Enabled) &&
										this.dispose();
								}),
							);
						const O = R.promptInputModel;
						O &&
							this.D(
								O.onDidChangeInput(() => {
									O.value && this.dispose();
								}),
							),
							this.c &&
								(this.D(this.c),
								this.D(
									this.c.onRender((B) => {
										if (
											!this.b &&
											this.f?.isFocused &&
											this.m.instances.length + this.n.instances.length === 1
										) {
											const U = this.q
												.getActivatedAgents()
												.filter((z) =>
													z.locations.includes($.ChatAgentLocation.Terminal),
												);
											if (U?.length) {
												const z = this.D(this.h.createInstance(M, A));
												if (
													(this.a?.dispose(),
													(this.b = z.getDomNode(U)),
													!this.b)
												)
													return;
												B.appendChild(this.b),
													B.classList.add("terminal-initial-hint");
												const F = this.f.getFont();
												F &&
													((B.style.fontFamily = F.fontFamily),
													(B.style.fontSize = F.fontSize + "px"));
											}
										}
										if (this.b && this.f) {
											const U = this.b.parentElement;
											U &&
												(U.style.width =
													((this.f.raw.cols -
														this.f.raw.buffer.active.cursorX) /
														this.f.raw.cols) *
														100 +
													"%");
										}
									}),
								));
					}
				};
				(e.$VWc = D),
					(e.$VWc =
						D =
						T =
							Ne(
								[
									j(3, b.$Li),
									j(4, c.$gj),
									j(5, i.$lIb),
									j(6, i.$kIb),
									j(7, $.$c3),
									j(8, v.$lq),
								],
								D,
							)),
					(0, w.$qLc)(D.ID, D, !1);
				let M = class extends t.$1c {
					constructor(A, R, O, B, U, z, F, x, H, q) {
						super(),
							(this.g = A),
							(this.h = R),
							(this.j = O),
							(this.m = B),
							(this.n = U),
							(this.q = z),
							(this.r = F),
							(this.s = x),
							(this.t = H),
							(this.u = q),
							(this.b = this.D(new t.$Zc())),
							(this.c = !1),
							(this.f = ""),
							this.b.add(
								A.onDidFocus(() => {
									this.g.hasFocus &&
										this.c &&
										this.f &&
										this.m.getValue(
											h.AccessibilityVerbositySettingId.TerminalChat,
										) &&
										(0, o.$pib)(this.f);
								}),
							),
							this.b.add(
								x.onDidChangeInstances(() => {
									this.s.instances.length !== 1 && this.dispose();
								}),
							),
							this.b.add(
								this.m.onDidChangeConfiguration((V) => {
									V.affectsConfiguration(
										y.TerminalInitialHintSettingId.Enabled,
									) &&
										!this.m.getValue(y.TerminalInitialHintSettingId.Enabled) &&
										this.dispose();
								}),
							);
					}
					w(A) {
						let R =
							(A.length === 1 ? A[0].fullName : void 0) ?? this.r.nameShort;
						const O = this.h.getDefaultAgent($.ChatAgentLocation.Panel);
						O?.extensionId.value === A[0].extensionId.value &&
							(R = O.fullName ?? R);
						let B = `Ask ${R} something or start typing to dismiss.`;
						const U = () => {
							this.t.store(
								k.InitialHintHideStorageKey,
								!0,
								v.StorageScope.APPLICATION,
								v.StorageTarget.USER,
							),
								this.q.publicLog2("workbenchActionExecuted", {
									id: "terminalInlineChat.hintAction",
									from: "hint",
								}),
								this.j.executeCommand(s.TerminalChatCommandId.Start, {
									from: "hint",
								});
						};
						this.b.add(
							this.j.onDidExecuteCommand((q) => {
								q.commandId === s.TerminalChatCommandId.Start &&
									(this.t.store(
										k.InitialHintHideStorageKey,
										!0,
										v.StorageScope.APPLICATION,
										v.StorageTarget.USER,
									),
									this.dispose());
							}),
						);
						const z = {
								disposables: this.b,
								callback: (q, V) => {
									switch (q) {
										case "0":
											U();
											break;
									}
								},
							},
							F = P("div.terminal-initial-hint");
						F.style.display = "block";
						const x = this.n.lookupKeybinding(s.TerminalChatCommandId.Start),
							H = x?.getLabel();
						if (x && H) {
							const q = (0, d.localize)(10450, null, H, R),
								[V, G] = q.split(H).map((X) => {
									const Y = P("a", void 0, X);
									return this.b.add(f.$0fb(Y, f.$$gb.CLICK, U)), Y;
								});
							F.appendChild(V);
							const K = z.disposables.add(new u.$7ob(F, r.OS));
							K.set(x),
								(K.element.style.width = "min-content"),
								(K.element.style.display = "inline"),
								(K.element.style.cursor = "pointer"),
								this.b.add(f.$0fb(K.element, f.$$gb.CLICK, U)),
								F.appendChild(G);
							const J = (0, d.localize)(10451, null),
								W = P("span.detail", void 0, J);
							F.appendChild(W), (B = q.concat(J));
						} else {
							const q = (0, d.localize)(10452, null, R),
								V = (0, a.$kib)(q, { actionHandler: z });
							F.appendChild(V);
						}
						return { ariaLabel: B, hintHandler: z, hintElement: F };
					}
					getDomNode(A) {
						if (!this.a) {
							(this.a = P(".terminal-initial-hint")),
								(this.a.style.paddingLeft = "4px");
							const { hintElement: R, ariaLabel: O } = this.w(A);
							this.a.append(R),
								(this.f = O.concat(
									(0, d.localize)(
										10453,
										null,
										h.AccessibilityVerbositySettingId.TerminalChat,
									),
								)),
								this.b.add(
									f.$0fb(this.a, "click", () => {
										this.a?.remove(), (this.a = void 0);
									}),
								),
								this.b.add(
									f.$0fb(this.a, f.$$gb.CONTEXT_MENU, (B) => {
										this.u.showContextMenu({
											getAnchor: () => new I.$2fb(f.$Ogb(), B),
											getActions: () => [
												{
													id: "workench.action.disableTerminalInitialHint",
													label: (0, d.localize)(10454, null),
													tooltip: (0, d.localize)(10455, null),
													enabled: !0,
													class: void 0,
													run: () =>
														this.m.updateValue(
															y.TerminalInitialHintSettingId.Enabled,
															!1,
														),
												},
											],
										});
									}),
								);
						}
						return this.a;
					}
					dispose() {
						this.a?.remove(), super.dispose();
					}
				};
				M = Ne(
					[
						j(1, $.$c3),
						j(2, n.$ek),
						j(3, c.$gj),
						j(4, C.$uZ),
						j(5, p.$km),
						j(6, g.$Bk),
						j(7, i.$iIb),
						j(8, v.$lq),
						j(9, S.$Xxb),
					],
					M,
				);
			},
		)
