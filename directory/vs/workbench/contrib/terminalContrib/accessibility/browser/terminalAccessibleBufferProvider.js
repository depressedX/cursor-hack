define(
			de[3570],
			he([1, 0, 6, 3, 67, 178, 10, 8, 189, 130, 107, 996]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NVc = void 0);
				let h = class extends i.$1c {
					constructor(n, g, p, o, f, b, s) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.id = E.AccessibleViewProviderId.Terminal),
							(this.options = {
								type: E.AccessibleViewType.View,
								language: "terminal",
								id: E.AccessibleViewProviderId.Terminal,
							}),
							(this.verbositySettingKey =
								r.AccessibilityVerbositySettingId.Terminal),
							(this.a = new t.$re()),
							(this.onDidRequestClearLastProvider = this.a.event),
							(this.options.customHelp = p),
							(this.options.position = f.getValue(
								a.TerminalAccessibilitySettingId
									.AccessibleViewPreserveCursorPosition,
							)
								? "initial-bottom"
								: "bottom"),
							this.D(
								this.c.onDisposed(() =>
									this.a.fire(E.AccessibleViewProviderId.Terminal),
								),
							),
							this.D(
								f.onDidChangeConfiguration((l) => {
									l.affectsConfiguration(
										a.TerminalAccessibilitySettingId
											.AccessibleViewPreserveCursorPosition,
									) &&
										(this.options.position = f.getValue(
											a.TerminalAccessibilitySettingId
												.AccessibleViewPreserveCursorPosition,
										)
											? "initial-bottom"
											: "bottom");
								}),
							),
							(this.b = s.activeInstance),
							this.D(
								s.onDidChangeActiveInstance(() => {
									s.activeInstance &&
										this.b?.instanceId !== s.activeInstance?.instanceId &&
										(this.a.fire(E.AccessibleViewProviderId.Terminal),
										(this.b = s.activeInstance));
								}),
							);
					}
					onClose() {
						this.c.focus();
					}
					provideContent() {
						return (
							this.f.update(),
							this.f.lines.join(`
`)
						);
					}
					getSymbols() {
						const n = this.g() ?? [],
							g = [];
						for (const p of n) {
							const o = p.command.command;
							o && g.push({ label: o, lineNumber: p.lineNumber });
						}
						return g;
					}
					g() {
						const n = this.c.capabilities.get(
								m.TerminalCapability.CommandDetection,
							),
							g = n?.commands,
							p = n?.currentCommand;
						if (!g?.length) return;
						const o = [];
						for (const f of g) {
							const b = this.h(f);
							b !== void 0 &&
								o.push({ command: f, lineNumber: b, exitCode: f.exitCode });
						}
						if (p) {
							const f = this.h(p);
							f !== void 0 && o.push({ command: p, lineNumber: f });
						}
						return o;
					}
					h(n) {
						let g;
						if (
							("marker" in n
								? (g = n.marker?.line)
								: "commandStartMarker" in n && (g = n.commandStartMarker?.line),
							!(g === void 0 || g < 0) &&
								((g = this.f.bufferToEditorLineMapping.get(g)), g !== void 0))
						)
							return g + 1;
					}
				};
				(e.$NVc = h),
					(e.$NVc = h =
						Ne([j(3, w.$QO), j(4, C.$gj), j(5, d.$6j), j(6, u.$iIb)], h));
			},
		),
		