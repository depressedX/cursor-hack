import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
define(de[1264], he([1, 0, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$FVc = e.TerminalTypeAheadSettingId = e.$EVc = void 0),
				(e.$EVc = ["vim", "vi", "nano", "tmux"]);
			var i;
			(function (w) {
				(w.LocalEchoLatencyThreshold =
					"terminal.integrated.localEchoLatencyThreshold"),
					(w.LocalEchoEnabled = "terminal.integrated.localEchoEnabled"),
					(w.LocalEchoExcludePrograms =
						"terminal.integrated.localEchoExcludePrograms"),
					(w.LocalEchoStyle = "terminal.integrated.localEchoStyle");
			})(i || (e.TerminalTypeAheadSettingId = i = {})),
				(e.$FVc = {
					[i.LocalEchoLatencyThreshold]: {
						description: (0, t.localize)(10598, null),
						type: "integer",
						minimum: -1,
						default: 30,
					},
					[i.LocalEchoEnabled]: {
						markdownDescription: (0, t.localize)(
							10599,
							null,
							"`#terminal.integrated.localEchoLatencyThreshold#`",
						),
						type: "string",
						enum: ["on", "off", "auto"],
						enumDescriptions: [
							(0, t.localize)(10600, null),
							(0, t.localize)(10601, null),
							(0, t.localize)(10602, null),
						],
						default: "auto",
					},
					[i.LocalEchoExcludePrograms]: {
						description: (0, t.localize)(10603, null),
						type: "array",
						items: { type: "string", uniqueItems: !0 },
						default: e.$EVc,
					},
					[i.LocalEchoStyle]: {
						description: (0, t.localize)(10604, null),
						default: "dim",
						anyOf: [
							{
								enum: [
									"bold",
									"dim",
									"italic",
									"underlined",
									"inverted",
									"#ff0000",
								],
							},
							{ type: "string", format: "color-hex" },
						],
					},
				});
		})
