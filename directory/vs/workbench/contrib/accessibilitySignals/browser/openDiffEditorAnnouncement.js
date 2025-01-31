import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/event.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
define(
			de[3546],
			he([1, 0, 3, 56, 4, 91, 10, 18, 6, 130]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*editorBrowser*/,
 w /*nls*/,
 E /*accessibility*/,
 C /*configuration*/,
 d /*editorService*/,
 m /*event*/,
 r /*accessibilityConfiguration*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$D2c = void 0);
				let u = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.diffEditorActiveAnnouncement";
					}
					constructor(h, c, n) {
						super(),
							(this.b = h),
							(this.c = c),
							(this.f = n),
							this.D(
								m.Event.runAndSubscribe(
									c.onDidChangeScreenReaderOptimized,
									() => this.g(),
								),
							),
							this.D(
								n.onDidChangeConfiguration((g) => {
									g.affectsConfiguration(
										r.AccessibilityVerbositySettingId.DiffEditorActive,
									) && this.g();
								}),
							);
					}
					g() {
						const h = this.f.getValue(
								r.AccessibilityVerbositySettingId.DiffEditorActive,
							),
							c = this.c.isScreenReaderOptimized();
						if (!h || !c) {
							this.a?.dispose(), (this.a = void 0);
							return;
						}
						this.a ||
							(this.a = this.D(
								this.b.onDidActiveEditorChange(() => {
									(0, i.$$sb)(this.b.activeTextEditorControl) &&
										this.c.alert((0, w.localize)(4426, null));
								}),
							));
					}
				};
				(e.$D2c = u),
					(e.$D2c = u = Ne([j(0, d.$IY), j(1, E.$XK), j(2, C.$gj)], u));
			},
		)
