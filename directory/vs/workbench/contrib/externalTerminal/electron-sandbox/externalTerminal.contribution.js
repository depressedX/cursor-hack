import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/path.js';
import '../../../../platform/externalTerminal/common/externalTerminal.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/keyCodes.js';
import '../../../services/history/common/history.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/network.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../../platform/externalTerminal/electron-sandbox/externalTerminalService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../terminal/common/terminalContextKey.js';
import '../../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../services/lifecycle/common/lifecycle.js';
define(
			de[3427],
			he([
				1, 0, 4, 54, 1612, 11, 27, 245, 43, 23, 81, 30, 55, 2734, 10, 237, 211,
				52,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*path*/,
 w /*externalTerminal*/,
 E /*actions*/,
 C /*keyCodes*/,
 d /*history*/,
 m /*keybindingsRegistry*/,
 r /*network*/,
 u /*configurationRegistry*/,
 a /*platform*/,
 h /*contributions*/,
 c /*externalTerminalService*/,
 n /*configuration*/,
 g /*terminalContextKey*/,
 p /*remoteAuthorityResolver*/,
 o /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ExternalTerminalContribution = void 0),
					(t = mt(t)),
					(i = mt(i));
				const f = "workbench.action.terminal.openNativeConsole";
				m.$TX.registerCommandAndKeybindingRule({
					id: f,
					primary: C.KeyMod.CtrlCmd | C.KeyMod.Shift | C.KeyCode.KeyC,
					when: g.TerminalContextKeys.notFocus,
					weight: m.KeybindingWeight.WorkbenchContrib,
					handler: async (l) => {
						const y = l.get(d.$Feb),
							$ = l.get(c.IExternalTerminalService),
							v = l.get(n.$gj),
							S = l.get(p.$3l),
							I = y.getLastActiveWorkspaceRoot(),
							T = v.getValue("terminal.external");
						if (I?.scheme === r.Schemas.file) {
							$.openTerminal(T, I.fsPath);
							return;
						}
						try {
							if (I?.scheme === r.Schemas.vscodeRemote) {
								const k = await S.getCanonicalURI(I);
								if (k.scheme === r.Schemas.file) {
									$.openTerminal(T, k.fsPath);
									return;
								}
							}
						} catch {}
						const P = y.getLastActiveFile(r.Schemas.file);
						if (P?.scheme === r.Schemas.file) {
							$.openTerminal(T, i.$rc(P.fsPath));
							return;
						}
						try {
							if (P?.scheme === r.Schemas.vscodeRemote) {
								const k = await S.getCanonicalURI(P);
								if (k.scheme === r.Schemas.file) {
									$.openTerminal(T, k.fsPath);
									return;
								}
							}
						} catch {}
						$.openTerminal(T, void 0);
					},
				}),
					E.$ZX.appendMenuItem(E.$XX.CommandPalette, {
						command: {
							id: f,
							title: t.localize2(6645, "Open New External Terminal"),
						},
					});
				let b = class {
					constructor(y) {
						(this._externalTerminalService = y), this._updateConfiguration();
					}
					async _updateConfiguration() {
						const y =
							await this._externalTerminalService.getDefaultTerminalForPlatforms();
						a.$Io
							.as(u.$No.Configuration)
							.registerConfiguration({
								id: "externalTerminal",
								order: 100,
								title: t.localize(6633, null),
								type: "object",
								properties: {
									"terminal.explorerKind": {
										type: "string",
										enum: ["integrated", "external", "both"],
										enumDescriptions: [
											t.localize(6634, null),
											t.localize(6635, null),
											t.localize(6636, null),
										],
										description: t.localize(6637, null),
										default: "integrated",
									},
									"terminal.sourceControlRepositoriesKind": {
										type: "string",
										enum: ["integrated", "external", "both"],
										enumDescriptions: [
											t.localize(6638, null),
											t.localize(6639, null),
											t.localize(6640, null),
										],
										description: t.localize(6641, null),
										default: "integrated",
									},
									"terminal.external.windowsExec": {
										type: "string",
										description: t.localize(6642, null),
										default: y.windows,
										scope: u.ConfigurationScope.APPLICATION,
									},
									"terminal.external.osxExec": {
										type: "string",
										description: t.localize(6643, null),
										default: w.DEFAULT_TERMINAL_OSX,
										scope: u.ConfigurationScope.APPLICATION,
									},
									"terminal.external.linuxExec": {
										type: "string",
										description: t.localize(6644, null),
										default: y.linux,
										scope: u.ConfigurationScope.APPLICATION,
									},
								},
							});
					}
				};
				(e.ExternalTerminalContribution = b),
					(e.ExternalTerminalContribution = b =
						Ne([j(0, c.IExternalTerminalService)], b)),
					a.$Io
						.as(h.Extensions.Workbench)
						.registerWorkbenchContribution(b, o.LifecyclePhase.Restored);
			},
		),
		