import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../platform/terminal/common/terminal.js';
define(de[809], he([1, 0, 4, 117]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gIb = e.$fIb = e.TerminalSuggestSettingId = void 0);
			var w;
			(function (E) {
				(E.Enabled = "terminal.integrated.suggest.enabled"),
					(E.QuickSuggestions = "terminal.integrated.suggest.quickSuggestions"),
					(E.SuggestOnTriggerCharacters =
						"terminal.integrated.suggest.suggestOnTriggerCharacters"),
					(E.RunOnEnter = "terminal.integrated.suggest.runOnEnter"),
					(E.BuiltinCompletions =
						"terminal.integrated.suggest.builtinCompletions");
			})(w || (e.TerminalSuggestSettingId = w = {})),
				(e.$fIb = "terminal.integrated.suggest"),
				(e.$gIb = {
					[w.Enabled]: {
						restricted: !0,
						markdownDescription: (0, t.localize)(
							10586,
							null,
							"PowerShell v7+",
							`\`#${i.TerminalSettingId.ShellIntegrationEnabled}#\``,
							"`true`",
							"`VSCODE_SUGGEST`",
							"`1`",
						),
						type: "boolean",
						default: !1,
					},
					[w.QuickSuggestions]: {
						restricted: !0,
						markdownDescription: (0, t.localize)(
							10587,
							null,
							`\`#${w.SuggestOnTriggerCharacters}#\``,
						),
						type: "boolean",
						default: !0,
					},
					[w.SuggestOnTriggerCharacters]: {
						restricted: !0,
						markdownDescription: (0, t.localize)(10588, null),
						type: "boolean",
						default: !0,
					},
					[w.RunOnEnter]: {
						restricted: !0,
						markdownDescription: (0, t.localize)(10589, null),
						enum: [
							"ignore",
							"never",
							"exactMatch",
							"exactMatchIgnoreExtension",
							"always",
						],
						markdownEnumDescriptions: [
							(0, t.localize)(10590, null),
							(0, t.localize)(10591, null),
							(0, t.localize)(10592, null),
							(0, t.localize)(10593, null),
							(0, t.localize)(10594, null),
						],
						default: "ignore",
					},
					[w.BuiltinCompletions]: {
						restricted: !0,
						markdownDescription: (0, t.localize)(10595, null),
						type: "object",
						properties: {
							pwshCode: {
								description: (0, t.localize)(10596, null),
								type: "boolean",
							},
							pwshGit: {
								description: (0, t.localize)(10597, null),
								type: "boolean",
							},
						},
						default: { pwshCode: !0, pwshGit: !0 },
					},
				});
		}),
		