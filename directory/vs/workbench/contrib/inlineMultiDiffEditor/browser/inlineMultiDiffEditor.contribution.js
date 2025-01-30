import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/editor.js';
import '../../../common/editor.js';
import '../../../../platform/instantiation/common/descriptors.js';
import './inlineMultiDiffEditor.js';
import '../../../services/editor/common/editorResolverService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
define(
			de[4213],
			he([1, 0, 30, 192, 44, 102, 4212, 231, 5, 3, 55, 52]),
			function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*editor*/,
 w /*editor*/,
 E /*descriptors*/,
 C /*inlineMultiDiffEditor*/,
 d /*editorResolverService*/,
 m /*instantiation*/,
 r /*lifecycle*/,
 u /*contributions*/,
 a /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					t.$Io
						.as(w.$a1.EditorPane)
						.registerEditorPane(
							i.$vVb.create(C.$0Zc, C.$0Zc.ID, "Multi File Edits"),
							[new E.$Ji(C.$$Zc)],
						);
				let h = class extends r.$1c {
					constructor(g, p) {
						super(),
							this.D(
								g.registerEditor(
									"*",
									{
										id: w.$b1.id,
										label: w.$b1.displayName,
										detail: w.$b1.providerDisplayName,
										priority: d.RegisteredEditorPriority.builtin,
									},
									{},
									{
										createInlineMultiDiffEditorInput: (o) => ({
											editor: p.createInstance(
												C.$$Zc,
												o.label,
												o.resources,
												void 0,
											),
										}),
									},
								),
							);
					}
				};
				h = Ne([j(0, d.$E6), j(1, m.$Li)], h);
				class c {
					canSerialize(g) {
						return !1;
					}
					serialize(g) {}
					deserialize(g, p) {}
				}
				t.$Io
					.as(u.Extensions.Workbench)
					.registerWorkbenchContribution(h, a.LifecyclePhase.Restored),
					t.$Io.as(w.$a1.EditorFactory).registerEditorSerializer(C.$$Zc.ID, c);
			},
		),
		