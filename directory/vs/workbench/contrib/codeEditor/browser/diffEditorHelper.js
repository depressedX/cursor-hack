import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/widget/diffEditor/embeddedDiffEditorWidget.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/browser/accessibleViewRegistry.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/codeeditor.js';
import '../../../common/configuration.js';
import './diffEditorAccessibilityHelp.js';
define(
			de[3767],
			he([1, 0, 3, 77, 46, 784, 125, 4, 412, 5, 40, 30, 824, 224, 3766]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*observable*/,
 w /*editorExtensions*/,
 E /*embeddedDiffEditorWidget*/,
 C /*textResourceConfiguration*/,
 d /*nls*/,
 m /*accessibleViewRegistry*/,
 r /*instantiation*/,
 u /*notification*/,
 a /*platform*/,
 h /*codeeditor*/,
 c /*configuration*/,
 n /*diffEditorAccessibilityHelp*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let g = class extends t.$1c {
					static {
						this.ID = "editor.contrib.diffEditorHelper";
					}
					constructor(o, f, b, s) {
						if (
							(super(),
							(this.a = o),
							(this.b = f),
							(this.c = b),
							(this.f = s),
							!(this.a instanceof E.$7mc))
						) {
							const $ = (0, i.observableFromEvent)(
								this,
								(v) => this.a.onDidUpdateDiff(v),
								() => this.a.getDiffComputationResult(),
							).map((v) => v && !v.identical && v.changes2.length === 0);
							this.D(
								(0, i.autorunWithStore)((v, S) => {
									if ($.read(v)) {
										const I = S.add(
											this.b.createInstance(
												h.$v4b,
												this.a.getModifiedEditor(),
												(0, d.localize)(4857, null),
												null,
											),
										);
										S.add(
											I.onClick(() => {
												this.c.updateValue(
													this.a.getModel().modified.uri,
													"diffEditor.ignoreTrimWhitespace",
													!1,
												);
											}),
										),
											I.render();
									}
								}),
							),
								this.D(
									this.a.onDidUpdateDiff(() => {
										const v = this.a.getDiffComputationResult();
										v &&
											v.quitEarly &&
											this.f.prompt(
												u.Severity.Warning,
												(0, d.localize)(4858, null, this.a.maxComputationTime),
												[
													{
														label: (0, d.localize)(4859, null),
														run: () => {
															this.c.updateValue(
																this.a.getModel().modified.uri,
																"diffEditor.maxComputationTime",
																0,
															);
														},
													},
												],
												{},
											);
									}),
								);
						}
					}
				};
				(g = Ne([j(1, r.$Li), j(2, C.$XO), j(3, u.$4N)], g)),
					(0, w.$rtb)(g.ID, g),
					a.$Io
						.as(c.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "diffEditor.experimental.collapseUnchangedRegions",
								migrateFn: (p, o) => [
									["diffEditor.hideUnchangedRegions.enabled", { value: p }],
									[
										"diffEditor.experimental.collapseUnchangedRegions",
										{ value: void 0 },
									],
								],
							},
						]),
					m.$Whc.register(new n.$MXc());
			},
		),
		