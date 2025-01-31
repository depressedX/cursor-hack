import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/contrib/aiActions/browser/aiActions.contribution.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/ai/browser/aiService.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/editor.js';
import './aiReaderEditor.js';
import '../../../common/editor.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../aichat/browser/aichatEditor.js';
import './aiReader.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import './aiReaderService.js';
define(
			de[4202],
			he([
				1, 0, 9, 46, 71, 69, 1241, 11, 25, 118, 30, 192, 1710, 44, 4, 102, 1927,
				788, 45, 4201,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*editorExtensions*/,
 w /*editorContextKeys*/,
 E /*languageFeatures*/,
 C /*aiActions.contribution*/,
 d /*actions*/,
 m /*workspace*/,
 r /*aiService*/,
 u /*platform*/,
 a /*editor*/,
 h /*aiReaderEditor*/,
 c /*editor*/,
 n /*nls*/,
 g /*descriptors*/,
 p /*aichatEditor*/,
 o /*aiReader*/,
 f /*reactiveStorageService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$BZc = e.$AZc = void 0),
					(e.$AZc = "editor.action.enterReaderModeFromSymbol");
				class b extends i.$ktb {
					static {
						this.id = e.$AZc;
					}
					static {
						this.LABEL = "Enter Reader Mode From Symbol";
					}
					constructor() {
						super({
							id: e.$AZc,
							precondition: w.EditorContextKeys.hasCodeActionsProvider,
							title: b.LABEL,
							menu: [
								{ id: d.$XX.EditorContext, group: "navigation", order: 1.6 },
							],
							metadata: { description: "Enter reader mode from symbol" },
						});
					}
					async runEditorCommand(l, y) {
						const $ = l.get(o.$Jcc),
							v = l.get(f.$0zb),
							S = l.get(E.$k3),
							I = l.get(m.$Vi),
							T = l.get(r.$Nfc);
						$.sendAiReaderMessage({
							type: "set-context",
							value: {
								mode: "pseudocode",
								relativeWorkspacePath: I.asRelativePath(
									y.getModel()?.uri ?? t.URI.file(""),
								),
							},
						});
						const P = await (0, C.$$lc)(y, 1, S);
						if (!P || !P.length) {
							console.error("No definitions found in the active editor.");
							return;
						}
						const k = P[0].range,
							L = y.getModel()?.getValueInRange(k);
						if (!L || !k) {
							console.error(
								"Failed to retrieve selected text from the active editor.",
							);
							return;
						}
						const D = I.asRelativePath(y.getModel()?.uri ?? t.URI.file("")),
							M = await T.getCurrentFileInfo(y.getModel()?.uri);
						v.setNonPersistentStorage("aiReaderState", {
							currentFileInfo: M,
							relativeWorkspacePath: D,
							target: { range: k, content: L },
						}),
							await $.openAsEditor();
					}
				}
				(e.$BZc = b),
					(0, d.$4X)(b),
					u.$Io
						.as(c.$a1.EditorPane)
						.registerEditorPane(
							a.$vVb.create(h.$rZc, h.$rZc.ID, (0, n.localize)(4431, null)),
							[new g.$Ji(h.$qZc)],
						),
					u.$Io
						.as(c.$a1.EditorFactory)
						.registerEditorSerializer(h.$qZc.ID, h.$pZc),
					(0, i.$qtb)(
						h.$sZc.ID,
						p.$pgc,
						i.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		)
