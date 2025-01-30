import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/numbers.js';
import '../../../../platform/configuration/common/configuration.js';
import './accessibilityConfiguration.js';
define(
			de[3545],
			he([1, 0, 7, 6, 3, 201, 10, 130]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*numbers*/,
 C /*configuration*/,
 d /*accessibilityConfiguration*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$A2c = void 0);
				let m = class extends w.$1c {
					constructor(h) {
						super(),
							(this.b = void 0),
							this.D((0, w.$Yc)(() => this.f())),
							this.D(
								i.Event.runAndSubscribe(h.onDidChangeConfiguration, (c) => {
									if (
										c &&
										!c.affectsConfiguration(
											d.AccessibilityWorkbenchSettingId.DimUnfocusedEnabled,
										) &&
										!c.affectsConfiguration(
											d.AccessibilityWorkbenchSettingId.DimUnfocusedOpacity,
										)
									)
										return;
									let n = "";
									if (
										r(
											h.getValue(
												d.AccessibilityWorkbenchSettingId.DimUnfocusedEnabled,
											),
											!1,
										)
									) {
										const p = (0, E.$Zm)(
											u(
												h.getValue(
													d.AccessibilityWorkbenchSettingId.DimUnfocusedOpacity,
												),
												d.ViewDimUnfocusedOpacityProperties.Default,
											),
											d.ViewDimUnfocusedOpacityProperties.Minimum,
											d.ViewDimUnfocusedOpacityProperties.Maximum,
										);
										if (p !== 1) {
											const o = new Set(),
												f = `filter: opacity(${p});`;
											o.add(
												`.monaco-workbench .pane-body.integrated-terminal:not(:focus-within) .tabs-container { ${f} }`,
											),
												o.add(
													`.monaco-workbench .pane-body.integrated-terminal .terminal-wrapper:not(:focus-within) { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .monaco-editor { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .breadcrumbs-below-tabs { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .terminal-wrapper { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .settings-editor { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .keybindings-editor { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .monaco-editor-pane-placeholder { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .gettingStartedContainer { ${f} }`,
												),
												(n = [...o].join(`
`));
										}
									}
									n.length === 0 ? this.f() : (this.c().textContent = n);
								}),
							);
					}
					c() {
						return (
							this.a ||
								((this.b = new w.$Zc()),
								(this.a = (0, t.$Rgb)(void 0, void 0, this.b)),
								(this.a.className = "accessibilityUnfocusedViewOpacity")),
							this.a
						);
					}
					f() {
						this.b?.dispose(), (this.b = void 0), (this.a = void 0);
					}
				};
				(e.$A2c = m), (e.$A2c = m = Ne([j(0, C.$gj)], m));
				function r(a, h) {
					return typeof a == "boolean" ? a : h;
				}
				function u(a, h) {
					return typeof a == "number" ? a : h;
				}
			},
		),
		