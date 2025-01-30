import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/resources.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../common/configuration.js';
import '../../../common/editor/sideBySideEditorInput.js';
import '../../../services/editor/common/editorResolverService.js';
import '../../../services/textfile/common/textEditorService.js';
import '../../../services/preferences/common/preferences.js';
import '../../../services/userDataProfile/common/userDataProfile.js';
import '../../../../platform/files/common/files.js';
import './settingsFilesystemProvider.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(
			de[3886],
			he([
				1, 0, 3, 19, 4, 10, 81, 30, 25, 224, 313, 231, 719, 131, 133, 22, 3536,
				5,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*resources*/,
 w /*nls*/,
 E /*configuration*/,
 C /*configurationRegistry*/,
 d /*platform*/,
 m /*workspace*/,
 r /*configuration*/,
 u /*sideBySideEditorInput*/,
 a /*editorResolverService*/,
 h /*textEditorService*/,
 c /*preferences*/,
 n /*userDataProfile*/,
 g /*files*/,
 p /*settingsFilesystemProvider*/,
 o /*instantiation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cEc = void 0),
					(w = mt(w));
				let f = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.preferences";
					}
					constructor(l, y, $, v, S, I, T, P) {
						super(),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.m = P),
							this.D(
								this.h.onDidChangeConfiguration((L) => {
									(L.affectsConfiguration(c.$$Z) ||
										L.affectsConfiguration(c.$0Z)) &&
										this.n();
								}),
							),
							this.n();
						const k = this.D(this.b.createInstance(p.$bEc));
						this.D(l.registerProvider(p.$bEc.SCHEMA, k));
					}
					n() {
						(0, t.$Vc)(this.a),
							(this.h.getValue(c.$$Z) || this.h.getValue(c.$0Z)) &&
								(this.a = this.j.registerEditor(
									"**/settings.json",
									{
										id: u.$iY.ID,
										label: w.localize(8660, null),
										priority: a.RegisteredEditorPriority.builtin,
									},
									{},
									{
										createEditorInput: ({ resource: l, options: y }) => {
											if ((0, i.$gh)(l, this.f.currentProfile.settingsResource))
												return {
													editor: this.c.createSplitJsonEditorInput(
														E.ConfigurationTarget.USER_LOCAL,
														l,
													),
													options: y,
												};
											const $ = this.g.getWorkbenchState();
											if ($ === m.WorkbenchState.FOLDER) {
												const v = this.g.getWorkspace().folders;
												if ((0, i.$gh)(l, v[0].toResource(c.$9Z)))
													return {
														editor: this.c.createSplitJsonEditorInput(
															E.ConfigurationTarget.WORKSPACE,
															l,
														),
														options: y,
													};
											} else if ($ === m.WorkbenchState.WORKSPACE) {
												const v = this.g.getWorkspace().folders;
												for (const S of v)
													if ((0, i.$gh)(l, S.toResource(c.$9Z)))
														return {
															editor: this.c.createSplitJsonEditorInput(
																E.ConfigurationTarget.WORKSPACE_FOLDER,
																l,
															),
															options: y,
														};
											}
											return {
												editor: this.m.createTextEditor({ resource: l }),
												options: y,
											};
										},
									},
								));
					}
					dispose() {
						(0, t.$Vc)(this.a), super.dispose();
					}
				};
				(e.$cEc = f),
					(e.$cEc = f =
						Ne(
							[
								j(0, g.$ll),
								j(1, o.$Li),
								j(2, c.$7Z),
								j(3, n.$P8),
								j(4, m.$Vi),
								j(5, E.$gj),
								j(6, a.$E6),
								j(7, h.$zdc),
							],
							f,
						)),
					d.$Io
						.as(C.$No.Configuration)
						.registerConfiguration({
							...r.$v6,
							properties: {
								"workbench.settings.enableNaturalLanguageSearch": {
									type: "boolean",
									description: w.localize(8661, null),
									default: !0,
									scope: C.ConfigurationScope.WINDOW,
									tags: ["usesOnlineServices"],
								},
								"workbench.settings.settingsSearchTocBehavior": {
									type: "string",
									enum: ["hide", "filter"],
									enumDescriptions: [
										w.localize(8662, null),
										w.localize(8663, null),
									],
									description: w.localize(8664, null),
									default: "filter",
									scope: C.ConfigurationScope.WINDOW,
								},
							},
						});
			},
		),
		