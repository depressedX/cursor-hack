import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../nls.js';
import '../../../../../platform/accessibility/common/accessibility.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../accessibility/browser/accessibleViewActions.js';
import '../../../terminal/browser/terminal.js';
import '../../../terminal/browser/terminalActions.js';
import '../../../terminal/browser/terminalExtensions.js';
import '../../../terminal/common/terminalContextKey.js';
import './bufferContentTracker.js';
import './terminalAccessibilityHelp.js';
import './textAreaSyncAddon.js';
import '../../../../../editor/common/core/position.js';
import './terminalAccessibleBufferProvider.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/terminal/common/terminal.js';
import '../../../../../base/common/event.js';
import '../../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../common/terminalAccessibilityConfiguration.js';
import '../common/terminal.accessibility.js';
import '../../../../../platform/accessibility/browser/accessibleView.js';
import '../../../accessibility/browser/accessibilityConfiguration.js';
import '../../../../../base/common/platform.js';
define(
			de[4040],
			he([
				1, 0, 27, 3, 4, 91, 11, 8, 5, 43, 189, 1032, 107, 363, 378, 237, 3152,
				3569, 3153, 48, 3570, 10, 117, 6, 184, 996, 995, 178, 130, 12,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*keyCodes*/,
				i /*lifecycle*/,
				w /*nls*/,
				E /*accessibility*/,
				C /*actions*/,
				d /*contextkey*/,
				m /*instantiation*/,
				r /*keybindingsRegistry*/,
				u /*capabilities*/,
				a /*accessibleViewActions*/,
				h /*terminal*/,
				c /*terminalActions*/,
				n /*terminalExtensions*/,
				g /*terminalContextKey*/,
				p /*bufferContentTracker*/,
				o /*terminalAccessibilityHelp*/,
				f /*textAreaSyncAddon*/,
				b /*position*/,
				s /*terminalAccessibleBufferProvider*/,
				l /*configuration*/,
				y /*terminal*/,
				$ /*event*/,
				v /*accessibilitySignalService*/,
				S /*terminalAccessibilityConfiguration*/,
				I /*terminal.accessibility*/,
				T /*accessibleView*/,
				P /*accessibilityConfiguration*/,
				k /*platform*/,
) {
				"use strict";
				var L, D;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PVc = e.$OVc = void 0);
				let M = class extends i.$Zc {
					static {
						L = this;
					}
					static {
						this.ID = "terminal.textAreaSync";
					}
					static get(B) {
						return B.getContribution(L.ID);
					}
					constructor(B, U, z, F) {
						super(), (this.j = B), (this.m = F);
					}
					layout(B) {
						this.h ||
							((this.h = this.add(
								this.m.createInstance(f.$MVc, this.j.capabilities),
							)),
							B.raw.loadAddon(this.h),
							this.h.activate(B.raw));
					}
				};
				(M = L = Ne([j(3, m.$Li)], M)), (0, n.$qLc)(M.ID, M);
				let N = class extends i.$1c {
					static {
						D = this;
					}
					static {
						this.ID = "terminal.accessibleBufferProvider";
					}
					static get(B) {
						return B.getContribution(D.ID);
					}
					constructor(B, U, z, F, x, H, q, V, G) {
						super(),
							(this.m = B),
							(this.n = F),
							(this.q = x),
							(this.r = H),
							(this.s = q),
							(this.t = V),
							(this.u = G),
							(this.j = new i.$2c()),
							this.D(
								a.$tpc.addImplementation(
									90,
									"terminal",
									() =>
										this.r.activeInstance !== this.m ? !1 : (this.show(), !0),
									g.TerminalContextKeys.focus,
								),
							),
							this.D(
								B.onDidExecuteText(() => {
									const K = q.getValue(y.TerminalSettingId.FocusAfterRun);
									K === "terminal"
										? B.focus(!0)
										: K === "accessible-buffer" && this.show();
								}),
							),
							this.D(
								this.s.onDidChangeConfiguration((K) => {
									K.affectsConfiguration(
										S.TerminalAccessibilitySettingId
											.AccessibleViewFocusOnCommandExecution,
									) && this.w();
								}),
							),
							this.D(
								this.m.capabilities.onDidAddCapability((K) => {
									K.capability.type === u.TerminalCapability.CommandDetection &&
										this.w();
								}),
							);
					}
					xtermReady(B) {
						const U = this.q.createInstance(f.$MVc, this.m.capabilities);
						B.raw.loadAddon(U),
							U.activate(B.raw),
							(this.h = B),
							this.D(
								this.h.raw.onWriteParsed(async () => {
									this.r.activeInstance === this.m &&
										this.y() &&
										this.h.raw.buffer.active.baseY === 0 &&
										this.show();
								}),
							);
						const z = $.Event.latch(this.h.raw.onScroll);
						this.D(
							z(() => {
								this.r.activeInstance === this.m && this.y() && this.show();
							}),
						);
					}
					w() {
						if (!this.m.capabilities.has(u.TerminalCapability.CommandDetection))
							return;
						if (
							this.s.getValue(
								S.TerminalAccessibilitySettingId
									.AccessibleViewFocusOnCommandExecution,
							)
						) {
							if (this.j.value) return;
						} else {
							this.j.clear();
							return;
						}
						const B = this.m.capabilities.get(
							u.TerminalCapability.CommandDetection,
						);
						this.j.value = this.D(
							B.onCommandExecuted(() => {
								this.m.hasFocus && this.show();
							}),
						);
					}
					y() {
						return (
							P.$SLb.getValue(this.t) === T.AccessibleViewProviderId.Terminal
						);
					}
					show() {
						if (!this.h) return;
						this.f || (this.f = this.D(this.q.createInstance(p.$KVc, this.h))),
							this.g ||
								(this.g = this.D(
									this.q.createInstance(s.$NVc, this.m, this.f, () =>
										this.D(
											this.q.createInstance(o.$LVc, this.m, this.h),
										).provideContent(),
									),
								));
						const B = this.s.getValue(
							S.TerminalAccessibilitySettingId
								.AccessibleViewPreserveCursorPosition,
						)
							? this.n.getPosition(T.AccessibleViewProviderId.Terminal)
							: void 0;
						this.n.show(this.g, B);
					}
					navigateToCommand(B) {
						const U = this.n.getPosition(
								T.AccessibleViewProviderId.Terminal,
							)?.lineNumber,
							z = this.z();
						if (!z?.length || !U) return;
						const F =
							B === T.NavigationType.Previous
								? z
										.filter((q) => q.lineNumber < U)
										.sort((q, V) => V.lineNumber - q.lineNumber)
								: z
										.filter((q) => q.lineNumber > U)
										.sort((q, V) => q.lineNumber - V.lineNumber);
						if (!F.length) return;
						const x = F[0],
							H = x.command.command;
						!k.$l && H
							? (this.n.setPosition(new b.$hL(x.lineNumber, 1), !0), alert(H))
							: this.n.setPosition(new b.$hL(x.lineNumber, 1), !0, !0),
							x.exitCode
								? this.u.playSignal(v.$Twb.terminalCommandFailed)
								: this.u.playSignal(v.$Twb.terminalCommandSucceeded);
					}
					z() {
						const B = this.m.capabilities.get(
								u.TerminalCapability.CommandDetection,
							),
							U = B?.commands,
							z = B?.currentCommand;
						if (!U?.length) return;
						const F = [];
						for (const x of U) {
							const H = this.C(x);
							H && F.push({ command: x, lineNumber: H, exitCode: x.exitCode });
						}
						if (z) {
							const x = this.C(z);
							x && F.push({ command: z, lineNumber: x });
						}
						return F;
					}
					C(B) {
						if (!this.f) return;
						let U;
						if (
							("marker" in B
								? (U = B.marker?.line)
								: "commandStartMarker" in B && (U = B.commandStartMarker?.line),
							!(U === void 0 || U < 0) &&
								((U = this.f.bufferToEditorLineMapping.get(U)), U !== void 0))
						)
							return U + 1;
					}
				};
				(e.$OVc = N),
					(e.$OVc =
						N =
						D =
							Ne(
								[
									j(3, T.$HLb),
									j(4, m.$Li),
									j(5, h.$iIb),
									j(6, l.$gj),
									j(7, d.$6j),
									j(8, v.$Owb),
								],
								N,
							)),
					(0, n.$qLc)(N.ID, N);
				class A extends i.$1c {
					constructor() {
						super(),
							this.D(
								a.$spc.addImplementation(
									105,
									"terminal",
									async (B) => {
										const U = B.get(m.$Li),
											z = B.get(h.$iIb),
											F = B.get(T.$HLb),
											x = await z.getActiveOrCreateInstance();
										await z.revealActiveTerminal();
										const H = x?.xterm;
										H && F.show(U.createInstance(o.$LVc, x, H));
									},
									d.$Kj.or(
										g.TerminalContextKeys.focus,
										d.$Kj.and(
											P.$NLb,
											d.$Kj.equals(
												P.$SLb.key,
												T.AccessibleViewProviderId.Terminal,
											),
										),
									),
								),
							);
					}
				}
				(e.$PVc = A), (0, n.$qLc)(A.ID, A);
				class R extends C.$3X {
					constructor() {
						super({
							id: I.TerminalAccessibilityCommandId.FocusAccessibleBuffer,
							title: (0, w.localize2)(10429, "Focus Accessible Terminal View"),
							precondition: d.$Kj.or(
								g.TerminalContextKeys.processSupported,
								g.TerminalContextKeys.terminalHasBeenCreated,
							),
							keybinding: [
								{
									primary: t.KeyMod.Alt | t.KeyCode.F2,
									secondary: [t.KeyMod.CtrlCmd | t.KeyCode.UpArrow],
									linux: {
										primary: t.KeyMod.Alt | t.KeyCode.F2 | t.KeyMod.Shift,
										secondary: [t.KeyMod.CtrlCmd | t.KeyCode.UpArrow],
									},
									weight: r.KeybindingWeight.WorkbenchContrib,
									when: d.$Kj.and(E.$YK, g.TerminalContextKeys.focus),
								},
							],
						});
					}
					async run(B, ...U) {
						const F = await B.get(h.$iIb).getActiveOrCreateInstance();
						F?.xterm && N.get(F)?.show();
					}
				}
				(0, C.$4X)(R),
					(0, c.$EUc)({
						id: I.TerminalAccessibilityCommandId
							.AccessibleBufferGoToNextCommand,
						title: (0, w.localize2)(
							10430,
							"Accessible Buffer Go to Next Command",
						),
						precondition: d.$Kj.or(
							g.TerminalContextKeys.processSupported,
							g.TerminalContextKeys.terminalHasBeenCreated,
							d.$Kj.and(
								P.$NLb,
								d.$Kj.equals(P.$SLb.key, T.AccessibleViewProviderId.Terminal),
							),
						),
						keybinding: [
							{
								primary: t.KeyMod.Alt | t.KeyCode.DownArrow,
								when: d.$Kj.and(
									d.$Kj.and(
										P.$NLb,
										d.$Kj.equals(
											P.$SLb.key,
											T.AccessibleViewProviderId.Terminal,
										),
									),
								),
								weight: r.KeybindingWeight.WorkbenchContrib + 2,
							},
						],
						run: async (O) => {
							const B = await O.service.activeInstance;
							B && (await N.get(B)?.navigateToCommand(T.NavigationType.Next));
						},
					}),
					(0, c.$EUc)({
						id: I.TerminalAccessibilityCommandId
							.AccessibleBufferGoToPreviousCommand,
						title: (0, w.localize2)(
							10431,
							"Accessible Buffer Go to Previous Command",
						),
						precondition: d.$Kj.and(
							d.$Kj.or(
								g.TerminalContextKeys.processSupported,
								g.TerminalContextKeys.terminalHasBeenCreated,
							),
							d.$Kj.and(
								P.$NLb,
								d.$Kj.equals(P.$SLb.key, T.AccessibleViewProviderId.Terminal),
							),
						),
						keybinding: [
							{
								primary: t.KeyMod.Alt | t.KeyCode.UpArrow,
								when: d.$Kj.and(
									d.$Kj.and(
										P.$NLb,
										d.$Kj.equals(
											P.$SLb.key,
											T.AccessibleViewProviderId.Terminal,
										),
									),
								),
								weight: r.KeybindingWeight.WorkbenchContrib + 2,
							},
						],
						run: async (O) => {
							const B = await O.service.activeInstance;
							B &&
								(await N.get(B)?.navigateToCommand(T.NavigationType.Previous));
						},
					}),
					(0, c.$EUc)({
						id: I.TerminalAccessibilityCommandId.ScrollToBottomAccessibleView,
						title: (0, w.localize2)(10432, "Scroll to Accessible View Bottom"),
						precondition: d.$Kj.and(
							d.$Kj.or(
								g.TerminalContextKeys.processSupported,
								g.TerminalContextKeys.terminalHasBeenCreated,
							),
							d.$Kj.and(
								P.$NLb,
								d.$Kj.equals(P.$SLb.key, T.AccessibleViewProviderId.Terminal),
							),
						),
						keybinding: {
							primary: t.KeyMod.CtrlCmd | t.KeyCode.End,
							linux: { primary: t.KeyMod.Shift | t.KeyCode.End },
							when: P.$SLb.isEqualTo(T.AccessibleViewProviderId.Terminal),
							weight: r.KeybindingWeight.WorkbenchContrib,
						},
						run: (O, B) => {
							const U = B.get(T.$HLb),
								z = U.getLastPosition();
							z && U.setPosition(z, !0);
						},
					}),
					(0, c.$EUc)({
						id: I.TerminalAccessibilityCommandId.ScrollToTopAccessibleView,
						title: (0, w.localize2)(10433, "Scroll to Accessible View Top"),
						precondition: d.$Kj.and(
							d.$Kj.or(
								g.TerminalContextKeys.processSupported,
								g.TerminalContextKeys.terminalHasBeenCreated,
							),
							d.$Kj.and(
								P.$NLb,
								d.$Kj.equals(P.$SLb.key, T.AccessibleViewProviderId.Terminal),
							),
						),
						keybinding: {
							primary: t.KeyMod.CtrlCmd | t.KeyCode.Home,
							linux: { primary: t.KeyMod.Shift | t.KeyCode.Home },
							when: P.$SLb.isEqualTo(T.AccessibleViewProviderId.Terminal),
							weight: r.KeybindingWeight.WorkbenchContrib,
						},
						run: (O, B) => {
							B.get(T.$HLb).setPosition(new b.$hL(1, 1), !0);
						},
					});
			},
		)
