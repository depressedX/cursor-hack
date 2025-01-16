define(de[270], he([1, 0, 13]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$K0b = i);
			function i(w, E, C) {
				const [d, m] = (0, t.createSignal)(C);
				return (
					(0, t.createEffect)(() => {
						const u = E.getValue(w);
						m(u);
						const a = E.onDidChangeConfiguration((h) => {
							if (h.affectsConfiguration(w)) {
								const c = E.getValue(w);
								m(c);
							}
						});
						(0, t.onCleanup)(() => {
							a.dispose();
						});
					}),
					[
						d,
						(u) => {
							E.updateValue(w, u);
						},
					]
				);
			}
		}),
		define(
			de[2956],
			he([1, 0, 2, 2, 2, 13, 58, 534, 212, 270, 906]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$udc = h);
				const u = (0, t.template)(
						'<div><div><button class="hoverButton partialHoverButton"><span><span></span></span></button><button class="hoverButton partialHoverButton"><span><span>',
					),
					a = !0;
				function h(c, n, g, p) {
					return n.reactiveStorageRoot.render(() => {
						const [o, f] = (0, E.createSignal)(!1),
							[b, s] = (0, E.createSignal)(!1),
							l = "var(--vscode-editor-background)",
							[y] = (0, r.$K0b)(C.$sW, p, !1),
							$ = () => {
								const I = g.getColorTheme().type,
									T =
										I === m.ColorScheme.HIGH_CONTRAST_DARK ||
										I === m.ColorScheme.HIGH_CONTRAST_LIGHT,
									P =
										I === m.ColorScheme.DARK ||
										I === m.ColorScheme.HIGH_CONTRAST_DARK;
								f(T), s(P);
							};
						$();
						const v = g.onDidColorThemeChange((I) => {
							$();
						});
						(0, E.onCleanup)(() => {
							v.dispose();
						});
						const S = (0, E.createMemo)(() => !n.isEditorNarrow());
						return (() => {
							const I = u(),
								T = I.firstChild,
								P = T.firstChild,
								k = P.firstChild,
								L = k.firstChild,
								D = P.nextSibling,
								M = D.firstChild,
								N = M.firstChild;
							return (
								I.style.setProperty("width", "100%"),
								T.style.setProperty("float", "right"),
								T.style.setProperty("display", "flex"),
								T.style.setProperty("flex-direction", "row"),
								T.style.setProperty("border-bottom-left-radius", "4px"),
								T.style.setProperty("border-bottom-right-radius", "4px"),
								T.style.setProperty("overflow", "hidden"),
								T.style.setProperty("opacity", "1"),
								T.style.setProperty("z-index", "1"),
								T.style.setProperty("margin-right", "18px"),
								T.style.setProperty(
									"background",
									"var(--vscode-editor-background)",
								),
								P.addEventListener("click", (A) => {
									n.analyticsService.trackEvent("composer.accept_diff", {
										source: "editor",
									}),
										n.commandService.executeCommand(d.$$7b, n),
										A.stopPropagation();
								}),
								P.style.setProperty("border", "none"),
								P.style.setProperty("cursor", "pointer"),
								P.style.setProperty("align-items", "center"),
								k.style.setProperty("display", "flex"),
								k.style.setProperty("align-items", "center"),
								k.style.setProperty("font-size", "10px"),
								k.style.setProperty("gap", "4px"),
								(0, w.insert)(k, () => (S() ? "Accept" : ""), L),
								(0, w.insert)(
									L,
									() =>
										n.keybindingService?.lookupKeybinding(d.$$7b)?.getLabel() ??
										"",
								),
								D.addEventListener("click", (A) => {
									n.analyticsService.trackEvent("composer.reject_diff", {
										source: "editor",
									}),
										n.commandService.executeCommand(d.$b8b, n),
										A.stopPropagation();
								}),
								D.style.setProperty("border", "none"),
								D.style.setProperty("cursor", "pointer"),
								D.style.setProperty("align-items", "center"),
								M.style.setProperty("display", "flex"),
								M.style.setProperty("align-items", "center"),
								M.style.setProperty("gap", "4px"),
								M.style.setProperty("font-size", "10px"),
								(0, w.insert)(M, () => (S() ? "Reject" : ""), N),
								(0, w.insert)(
									N,
									() =>
										n.keybindingService?.lookupKeybinding(d.$b8b)?.getLabel() ??
										"",
								),
								(0, i.effect)(
									(A) => {
										const R = n.isHidden ? "hidden" : "visible",
											O = y()
												? "var(--vscode-charts-green)"
												: "rgba(0.0,255,0.0,0.3)",
											B = y() ? l : "rgba(255,255,255,0.8)",
											U = y() ? (o() && b() ? "1.0" : "0.8") : "1.0",
											z = !y() || S() ? "1.0" : "0.6",
											F = y()
												? "var(--vscode-charts-red)"
												: "rgba(255,0,0,0.4)",
											x = y() ? l : "rgba(255,255,255,0.8)",
											H = y() ? (o() && b() ? "1.0" : "0.8") : "1.0",
											q = !y() || S() ? "1.0" : "0.6";
										return (
											R !== A._v$ &&
												((A._v$ = R) != null
													? I.style.setProperty("visibility", R)
													: I.style.removeProperty("visibility")),
											O !== A._v$2 &&
												((A._v$2 = O) != null
													? P.style.setProperty("background-color", O)
													: P.style.removeProperty("background-color")),
											B !== A._v$3 &&
												((A._v$3 = B) != null
													? P.style.setProperty("color", B)
													: P.style.removeProperty("color")),
											U !== A._v$4 &&
												((A._v$4 = U) != null
													? P.style.setProperty("opacity", U)
													: P.style.removeProperty("opacity")),
											z !== A._v$5 &&
												((A._v$5 = z) != null
													? L.style.setProperty("opacity", z)
													: L.style.removeProperty("opacity")),
											F !== A._v$6 &&
												((A._v$6 = F) != null
													? D.style.setProperty("background-color", F)
													: D.style.removeProperty("background-color")),
											x !== A._v$7 &&
												((A._v$7 = x) != null
													? D.style.setProperty("color", x)
													: D.style.removeProperty("color")),
											H !== A._v$8 &&
												((A._v$8 = H) != null
													? D.style.setProperty("opacity", H)
													: D.style.removeProperty("opacity")),
											q !== A._v$9 &&
												((A._v$9 = q) != null
													? N.style.setProperty("opacity", q)
													: N.style.removeProperty("opacity")),
											A
										);
									},
									{
										_v$: void 0,
										_v$2: void 0,
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
										_v$6: void 0,
										_v$7: void 0,
										_v$8: void 0,
										_v$9: void 0,
									},
								),
								I
							);
						})();
					}, c);
				}
			},
		),
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
		