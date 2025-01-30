import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/instantiation.js';
import '../../../base/common/lifecycle.js';
define(de[178], he([1, 0, 5, 3]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*lifecycle*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$JLb =
					e.$ILb =
					e.NavigationType =
					e.AccessibleViewType =
					e.AccessibleViewProviderId =
					e.$HLb =
						void 0),
				(e.$HLb = (0, t.$Mi)("accessibleViewService"));
			var w;
			(function (r) {
				(r.Terminal = "terminal"),
					(r.TerminalChat = "terminal-chat"),
					(r.TerminalHelp = "terminal-help"),
					(r.DiffEditor = "diffEditor"),
					(r.Chat = "panelChat"),
					(r.InlineChat = "inlineChat"),
					(r.InlineCompletions = "inlineCompletions"),
					(r.KeybindingsEditor = "keybindingsEditor"),
					(r.Notebook = "notebook"),
					(r.Editor = "editor"),
					(r.Hover = "hover"),
					(r.Notification = "notification"),
					(r.EmptyEditorHint = "emptyEditorHint"),
					(r.Comments = "comments"),
					(r.Repl = "repl"),
					(r.ReplHelp = "replHelp"),
					(r.RunAndDebug = "runAndDebug");
			})(w || (e.AccessibleViewProviderId = w = {}));
			var E;
			(function (r) {
				(r.Help = "help"), (r.View = "view");
			})(E || (e.AccessibleViewType = E = {}));
			var C;
			(function (r) {
				(r.Previous = "previous"), (r.Next = "next");
			})(C || (e.NavigationType = C = {}));
			class d extends i.$1c {
				constructor(u, a, h, c, n, g, p, o, f, b, s, l, y) {
					super(),
						(this.id = u),
						(this.options = a),
						(this.provideContent = h),
						(this.onClose = c),
						(this.verbositySettingKey = n),
						(this.onOpen = g),
						(this.actions = p),
						(this.provideNextContent = o),
						(this.providePreviousContent = f),
						(this.onDidChangeContent = b),
						(this.onKeyDown = s),
						(this.getSymbols = l),
						(this.onDidRequestClearLastProvider = y);
				}
			}
			e.$ILb = d;
			class m extends i.$1c {
				constructor(u, a, h, c, n, g, p, o, f) {
					super(),
						(this.id = u),
						(this.options = a),
						(this.provideContent = h),
						(this.onClose = c),
						(this.onOpen = n),
						(this.provideNextContent = g),
						(this.providePreviousContent = p),
						(this.actions = o),
						(this.onDidChangeContent = f);
				}
			}
			e.$JLb = m;
		}),
		