import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/constants.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../base/common/constants.js';
define(
			de[2957],
			he([1, 0, 58, 81, 134, 30, 58]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const d = E.$Io.as(i.$No.Configuration);
				d.registerConfiguration({
					id: "cpp",
					title: "Cursor Tab",
					properties: {
						[w.$tJ]: {
							type: "array",
							items: { type: "string" },
							default: [],
							description: "Disable Cursor Tab for these languages",
						},
						[t.$zW]: {
							type: "boolean",
							default: !1,
							description:
								"Enable partial accepts for Cursor Tab, using the editor.action.inlineSuggest.acceptNextWord keybinding",
						},
					},
				}),
					d.registerConfiguration({
						id: "terminal",
						title: "Terminal",
						properties: {
							[t.$wW]: {
								type: "boolean",
								default: !0,
								description: "Show hover hint in the terminal",
							},
							[t.$xW]: {
								type: "boolean",
								default: t.$yW,
								description:
									"Use preview box for terminal cmd-k. If turned off, responses are streamed directly into the shell.",
							},
						},
					}),
					d.registerConfiguration({
						id: "editor",
						title: "Editor",
						properties: {
							[t.$rW]: {
								type: "boolean",
								default: !0,
								description:
									"Automatically select regions for inline code editing (Ctrl/\u2318 + K)",
							},
							[t.$sW]: {
								type: "boolean",
								default: !1,
								description: "Use themed background colors for inline diffs",
							},
							[t.$tW]: {
								type: "boolean",
								default: !1,
								description: "Use character level diffs for inline diffs",
							},
						},
					}),
					d.registerConfiguration({
						id: "ai-preview",
						title: "AI Notes",
						properties: {
							[t.$AW]: {
								type: "boolean",
								default: !1,
								description:
									"Enable AI Notes. Hold Shift on any symbol to trigger",
							},
						},
					}),
					d.registerConfiguration({
						id: "general",
						title: "General",
						properties: {
							[t.$KW]: {
								type: "boolean",
								default: !1,
								description:
									"Warning: this will increase the memory usage of Cursor. Some AI features use the shadow workspace to refine code in the background before presenting it to you. The shadow workspace is a hidden window running on your local machine in a copy of your current workspace.",
							},
							[w.$xJ]: {
								type: "boolean",
								default: !1,
								description:
									"Disable HTTP/2 for all requests, and use HTTP/1.1 instead. This increases resource utilization and latency, but is useful if you're behind a corporate proxy that blocks HTTP/2.",
							},
							[w.$yJ]: {
								type: "string",
								enum: ["enabled", "disabled", "default"],
								default: "default",
								description:
									"Index your git history to help Cursor understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and encrypted file names) are stored on the server.",
							},
							[C.$XV]: {
								type: "boolean",
								default: !1,
								description:
									"Show notification toasts in the same location as the chat",
							},
							[t.$IW]: {
								type: "boolean",
								default: !1,
								description: "Show markdown hover participant actions",
							},
						},
					}),
					d.registerConfiguration({
						id: "composer",
						title: "Composer",
						properties: {
							[t.$BW]: {
								type: "boolean",
								default: !1,
								description:
									"Enable Cmd+P / Ctrl+P shortcut for file picker in Composer",
							},
							[t.$HW]: {
								type: "boolean",
								default: !1,
								description:
									"Collapse composer code blocks into pills instead of rendering as code blocks",
							},
							[t.$DW]: {
								type: "boolean",
								default: !0,
								description: "Show suggested files in the composer",
							},
							[t.$FW]: {
								type: "boolean",
								default: !1,
								description: "Collapse input box pills in the composer pane",
							},
							[t.$GW]: {
								type: "boolean",
								default: !0,
								description:
									"Automatically scroll to the bottom of the composer pane when a new message is generated",
							},
							[t.$JW]: {
								type: "boolean",
								default: !0,
								description: "Enable agent loop on lints in the composer",
							},
						},
					});
			},
		),
		