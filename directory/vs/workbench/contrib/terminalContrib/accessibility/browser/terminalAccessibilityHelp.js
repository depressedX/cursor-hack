import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../nls.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/terminal/common/terminal.js';
import '../../../accessibility/common/accessibilityCommands.js';
import '../../../terminal/common/terminal.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../common/terminalAccessibilityConfiguration.js';
import '../common/terminal.accessibility.js';
import '../../links/common/terminal.links.js';
import '../../../../../platform/accessibility/browser/accessibleView.js';
import '../../../accessibility/browser/accessibilityConfiguration.js';
define(
			de[3569],
			he([1, 0, 3, 4, 31, 8, 5, 117, 417, 145, 10, 996, 995, 1766, 178, 130]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*nls*/,
 w /*commands*/,
 E /*contextkey*/,
 C /*instantiation*/,
 d /*terminal*/,
 m /*accessibilityCommands*/,
 r /*terminal*/,
 u /*configuration*/,
 a /*terminalAccessibilityConfiguration*/,
 h /*terminal.accessibility*/,
 c /*terminal.links*/,
 n /*accessibleView*/,
 g /*accessibilityConfiguration*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LVc = e.ClassName = void 0);
				var p;
				(function (f) {
					(f.Active = "active"), (f.EditorTextArea = "textarea");
				})(p || (e.ClassName = p = {}));
				let o = class extends t.$1c {
					onClose() {
						E.$Kj
							.and(
								g.$NLb,
								E.$Kj.equals(
									g.$SLb.key,
									n.AccessibleViewProviderId.TerminalHelp,
								),
							)
							?.evaluate(this.c.getContext(null))
							? this.f.executeCommand(
									h.TerminalAccessibilityCommandId.FocusAccessibleBuffer,
								)
							: this.b.focus(),
							this.dispose();
					}
					constructor(b, s, l, y, $, v) {
						super(),
							(this.b = b),
							(this.c = y),
							(this.f = $),
							(this.g = v),
							(this.id = n.AccessibleViewProviderId.TerminalHelp),
							(this.a = !1),
							(this.options = {
								type: n.AccessibleViewType.Help,
								readMoreUrl:
									"https://code.visualstudio.com/docs/editor/accessibility#_terminal-accessibility",
							}),
							(this.verbositySettingKey =
								g.AccessibilityVerbositySettingId.Terminal),
							(this.a =
								s.shellIntegration.status === d.ShellIntegrationStatus.VSCode);
					}
					provideContent() {
						const b = [
							(0, i.localize)(
								10434,
								null,
								h.TerminalAccessibilityCommandId.FocusAccessibleBuffer,
							),
							(0, i.localize)(10435, null),
							(0, i.localize)(
								10436,
								null,
								c.TerminalLinksCommandId.OpenDetectedLink,
							),
							(0, i.localize)(10437, null, r.TerminalCommandId.NewWithProfile),
							(0, i.localize)(10438, null, d.TerminalSettingId.FocusAfterRun),
						];
						return (
							this.g.getValue(
								a.TerminalAccessibilitySettingId
									.AccessibleViewFocusOnCommandExecution,
							) || b.push((0, i.localize)(10439, null)),
							this.b.shellType === d.WindowsShellType.CommandPrompt &&
								b.push((0, i.localize)(10440, null)),
							this.a
								? (b.push((0, i.localize)(10441, null)),
									b.push(
										"- " +
											(0, i.localize)(
												10442,
												null,
												h.TerminalAccessibilityCommandId
													.AccessibleBufferGoToNextCommand,
											),
									),
									b.push(
										"- " +
											(0, i.localize)(
												10443,
												null,
												h.TerminalAccessibilityCommandId
													.AccessibleBufferGoToPreviousCommand,
											),
									),
									b.push(
										"- " +
											(0, i.localize)(
												10444,
												null,
												m.AccessibilityCommandId.GoToSymbol,
											),
									),
									b.push(
										"- " +
											(0, i.localize)(
												10445,
												null,
												r.TerminalCommandId.RunRecentCommand,
											),
									),
									b.push(
										"- " +
											(0, i.localize)(
												10446,
												null,
												r.TerminalCommandId.GoToRecentDirectory,
											),
									))
								: b.push((0, i.localize)(10447, null)),
							b.join(`
`)
						);
					}
				};
				(e.$LVc = o),
					(e.$LVc = o =
						Ne([j(2, C.$Li), j(3, E.$6j), j(4, w.$ek), j(5, u.$gj)], o));
			},
		)
