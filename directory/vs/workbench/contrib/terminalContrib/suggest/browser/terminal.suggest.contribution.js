import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/platform.js';
import '../../../../../nls.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../platform/storage/common/storage.js';
import '../../../../../platform/terminal/common/terminal.js';
import '../../../../../platform/terminal/common/xterm/shellIntegrationAddon.js';
import '../../../terminal/browser/terminalActions.js';
import '../../../terminal/browser/terminalExtensions.js';
import '../../../terminal/common/terminal.js';
import '../../../terminal/common/terminalContextKey.js';
import './terminalSuggestAddon.js';
import '../common/terminal.suggest.js';
import '../common/terminalSuggestConfiguration.js';
define(
			de[4045],
			he([
				1, 0, 7, 15, 6, 27, 3, 12, 4, 10, 8, 5, 43, 21, 117, 1202, 363, 378,
				145, 237, 3655, 1768, 809,
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
			) {
				"use strict";
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				var v;
				(function (I) {
					I.CachedPwshCommandsStorageKey = "terminal.suggest.pwshCommands";
				})(v || (v = {}));
				let S = class extends C.$Zc {
					static {
						$ = this;
					}
					static {
						this.ID = "terminal.suggest";
					}
					static get(T) {
						return T.getContribution($.ID);
					}
					get addon() {
						return this.b.value;
					}
					static {
						this.m = new Set();
					}
					constructor(T, P, k, L, D, M, N) {
						if (
							(super(),
							(this.n = T),
							(this.q = L),
							(this.r = D),
							(this.s = M),
							(this.t = N),
							(this.b = new C.$2c()),
							(this.h = new Set(
								b.TerminalContextKeys.suggestWidgetVisible.key,
							)),
							this.add((0, C.$Yc)(() => this.b?.dispose())),
							(this.j = b.TerminalContextKeys.suggestWidgetVisible.bindTo(
								this.q,
							)),
							$.m.size === 0)
						) {
							const A = this.t.get(
								v.CachedPwshCommandsStorageKey,
								c.StorageScope.APPLICATION,
								void 0,
							);
							if (A !== void 0) {
								const R = JSON.parse(A);
								for (const O of R) $.m.add(O);
							}
						}
						this.add(
							this.r.onDidChangeConfiguration((A) => {
								A.affectsConfiguration(y.TerminalSuggestSettingId.Enabled) &&
									this.clearSuggestCache();
							}),
						);
					}
					xtermReady(T) {
						(this.a = T.raw),
							this.r.getValue(y.$fIb).enabled &&
								this.add(
									T.raw.parser.registerOscHandler(
										g.ShellIntegrationOscPs.VSCode,
										(L) => this.u(L),
									),
								);
					}
					u(T) {
						if (!this.a) return !1;
						const [P, ...k] = T.split(";");
						switch (P) {
							case s.VSCodeSuggestOscPt.CompletionsPwshCommands:
								return this.w(this.a, T, P, k);
						}
						return !1;
					}
					async w(T, P, k, L) {
						const D = L[0],
							M = JSON.parse(P.slice(k.length + D.length + 2)),
							N = (0, s.$TWc)(M),
							A = $.m;
						A.clear();
						for (const R of N) A.add(R);
						return (
							this.t.store(
								v.CachedPwshCommandsStorageKey,
								JSON.stringify(Array.from(A.values())),
								c.StorageScope.APPLICATION,
								c.StorageTarget.MACHINE,
							),
							!0
						);
					}
					clearSuggestCache() {
						$.m.clear(),
							this.t.remove(
								v.CachedPwshCommandsStorageKey,
								c.StorageScope.APPLICATION,
							);
					}
					xtermOpen(T) {
						this.r.getValue(y.$fIb).enabled &&
							(this.add(
								w.Event.runAndSubscribe(
									this.n.onDidChangeShellType,
									async () => {
										this.y(T.raw);
									},
								),
							),
							this.add(
								this.q.onDidChangeContext((L) => {
									L.affectsSome(this.h) && this.y(T.raw);
								}),
							),
							this.add(
								this.r.onDidChangeConfiguration((L) => {
									L.affectsConfiguration(
										n.TerminalSettingId.SendKeybindingsToShell,
									) && this.y(T.raw);
								}),
							));
					}
					y(T) {
						if (
							this.r.getValue(f.$ieb).sendKeybindingsToShell ||
							this.n.shellType !== "pwsh"
						) {
							this.b.clear();
							return;
						}
						if (this.j) {
							const k = (this.b.value = this.s.createInstance(
								s.$SWc,
								$.m,
								this.n.capabilities,
								this.j,
							));
							if (
								(T.loadAddon(k),
								k.setPanel(t.$Egb(T.element, "panel")),
								k.setScreen(T.element.querySelector(".xterm-screen")),
								this.add(this.n.onDidBlur(() => k.hideSuggestWidget())),
								this.add(
									k.onAcceptedCompletion(async (L) => {
										this.n.focus(), this.n.sendText(L, !1);
									}),
								),
								!d.$l)
							) {
								let L;
								this.add(
									k.onDidRequestCompletions(() => {
										(L = new i.$Mh(2e3)), this.n.pauseInputEvents(L);
									}),
								),
									this.add(
										k.onDidReceiveCompletions(() => {
											L?.open(), (L = void 0);
										}),
									);
							}
						}
					}
				};
				(S = $ = Ne([j(3, u.$6j), j(4, r.$gj), j(5, a.$Li), j(6, c.$lq)], S)),
					(0, o.$qLc)(S.ID, S),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.SelectPrevSuggestion,
						title: (0, m.localize2)(10578, "Select the Previous Suggestion"),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.UpArrow,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
						},
						run: (I) => S.get(I)?.addon?.selectPreviousSuggestion(),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.SelectPrevPageSuggestion,
						title: (0, m.localize2)(
							10579,
							"Select the Previous Page Suggestion",
						),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.PageUp,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
						},
						run: (I) => S.get(I)?.addon?.selectPreviousPageSuggestion(),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.SelectNextSuggestion,
						title: (0, m.localize2)(10580, "Select the Next Suggestion"),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.DownArrow,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
						},
						run: (I) => S.get(I)?.addon?.selectNextSuggestion(),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.SelectNextPageSuggestion,
						title: (0, m.localize2)(10581, "Select the Next Page Suggestion"),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.PageDown,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
						},
						run: (I) => S.get(I)?.addon?.selectNextPageSuggestion(),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.AcceptSelectedSuggestion,
						title: (0, m.localize2)(10582, "Accept Selected Suggestion"),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.Tab,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
						},
						run: (I) => S.get(I)?.addon?.acceptSelectedSuggestion(),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.AcceptSelectedSuggestionEnter,
						title: (0, m.localize2)(
							10583,
							"Accept Selected Suggestion (Enter)",
						),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.Enter,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
							when: u.$Kj.notEquals(
								`config.${y.TerminalSuggestSettingId.RunOnEnter}`,
								"ignore",
							),
						},
						run: (I) => S.get(I)?.addon?.acceptSelectedSuggestion(void 0, !0),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.HideSuggestWidget,
						title: (0, m.localize2)(10584, "Hide Suggest Widget"),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.Escape,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
						},
						run: (I) => S.get(I)?.addon?.hideSuggestWidget(),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.ClearSuggestCache,
						title: (0, m.localize2)(10585, "Clear Suggest Cache"),
						f1: !0,
						run: (I) => S.get(I)?.clearSuggestCache(),
					});
			},
		),
		