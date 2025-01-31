import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/constants.js';
import '../../../browser/parts/panel/panelActions.js';
import '../../terminal/common/terminal.js';
define(de[3804], he([1, 0, 58, 1326, 145]), function (ce /*require*/,
 e /*exports*/,
 t /*constants*/,
 i /*panelActions*/,
 w /*terminal*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$JDc = e.$IDc = void 0),
				(e.$IDc = {
					"open-terminal-cmdk": {
						name: "Open Terminal AI",
						action: (E) => (
							E.commandService.executeCommand(i.$P5b.ID),
							E.commandService.executeCommand(w.TerminalCommandId.Toggle),
							E.commandService.executeCommand(t.$_V),
							!0
						),
					},
					"open-forums": {
						name: "Visit Forums",
						action: (E) => (
							E.openerService.open("https://forum.cursor.com/"), !1
						),
					},
					"email-cursor": {
						name: "Email Us",
						action: (E) => (E.openerService.open("mailto:hi@cursor.sh"), !1),
					},
					"open-chat": {
						name: "Open Chat",
						action: (E) => (E.commandService.executeCommand(t.$dX), !0),
					},
					"cursor-settings-general": {
						name: "Cursor Settings > General",
						action: (E) => (
							E.commandService.executeCommand(t.$QV, "general"), !0
						),
					},
					"cursor-settings-model": {
						name: "Cursor Settings > Model",
						action: (E) => (
							E.commandService.executeCommand(t.$QV, "models"), !0
						),
					},
					"cursor-settings-features": {
						name: "Cursor Settings > Features",
						action: (E) => (
							E.commandService.executeCommand(t.$QV, "features"), !0
						),
					},
					"cursor-settings-beta": {
						name: "Cursor Settings > Beta",
						action: (E) => (E.commandService.executeCommand(t.$QV, "beta"), !0),
					},
					"open-cursor-website": {
						name: "Visit Cursor Website",
						action: (E) => (E.openerService.open("https://cursor.com"), !1),
					},
					"open-anysphere-website": {
						name: "Visit Anysphere Website",
						action: (E) => (E.openerService.open("https://anysphere.co"), !1),
					},
					"open-changelog": {
						name: "View Changelog",
						action: (E) => (
							E.openerService.open("https://changelog.cursor.com"), !1
						),
					},
					"open-twitter": {
						name: "Open Twitter",
						action: (E) => (
							E.openerService.open("https://twitter.com/cursor_ai"), !1
						),
					},
				}),
				(e.$JDc = [
					{ question: "Introduce me to a random feature!", priority: 100 },
					{ question: "What's the best way to use Cursor?", priority: 100 },
					{ question: "How do I use terminal AI?", priority: 100 },
					{ question: "How to upgrade to Pro?", priority: 100 },
					{ question: "Where's my data stored?", priority: 100 },
					{ question: "How do I talk to my codebase?", priority: 100 },
					{ question: "What is codebase indexing for?", priority: 100 },
					{ question: "What is Cursor Tab?", priority: 100 },
					{ question: "Is Cursor hiring?", priority: 100 },
					{ question: "How do I try out Beta features?", priority: 100 },
					{ question: "Can Cursor help me refactor my code?", priority: 100 },
					{ question: "How can I customize my Cursor editor?", priority: 100 },
					{
						question: "What are the keyboard shortcuts for Cursor?",
						priority: 100,
					},
					{
						question: "How does Cursor integrate with version control systems?",
						priority: 100,
					},
					{ question: "How do I report a bug in Cursor?", priority: 100 },
					{ question: "Where's the Cursor Forum?", priority: 100 },
					{ question: "How do I use Cursor with my codebase?", priority: 100 },
					{ question: "How do I learn new skills with Cursor?", priority: 100 },
				].sort((E, C) => E.priority - C.priority));
		})
