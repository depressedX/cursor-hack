import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/buffer.js';
import '../../../../../base/common/resources.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/dialogs/common/dialogs.js';
import '../../../../../platform/files/common/files.js';
import './chatActions.js';
import '../chat.js';
import '../chatEditorInput.js';
import '../../common/chatContextKeys.js';
import '../../common/chatModel.js';
import '../../common/chatService.js';
import '../../../../services/editor/common/editorService.js';
define(
			de[3809],
			he([1, 0, 76, 19, 4, 11, 57, 22, 402, 208, 552, 207, 441, 218, 18]),
			function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*resources*/,
 w /*nls*/,
 E /*actions*/,
 C /*dialogs*/,
 d /*files*/,
 m /*chatActions*/,
 r /*chat*/,
 u /*chatEditorInput*/,
 a /*chatContextKeys*/,
 h /*chatModel*/,
 c /*chatService*/,
 n /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$JIc = o);
				const g = "chat.json",
					p = [{ name: (0, w.localize)(4600, null), extensions: ["json"] }];
				function o() {
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.export",
									category: m.$3Yb,
									title: (0, w.localize2)(4601, "Export Chat..."),
									precondition: a.$51,
									f1: !0,
								});
							}
							async run(b, ...s) {
								const l = b.get(r.$GYb),
									y = b.get(C.$IO),
									$ = b.get(d.$ll),
									v = b.get(c.$J2),
									S = l.lastFocusedWidget;
								if (!S || !S.viewModel) return;
								const I = (0, i.$nh)(await y.defaultFilePath(), g),
									T = await y.showSaveDialog({ defaultUri: I, filters: p });
								if (!T) return;
								const P = v.getSession(S.viewModel.sessionId);
								if (!P) return;
								const k = t.$Te.fromString(
									JSON.stringify(P.toExport(), void 0, 2),
								);
								await $.writeFile(T, k);
							}
						},
					),
						(0, E.$4X)(
							class extends E.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.import",
										title: (0, w.localize2)(4602, "Import Chat..."),
										category: m.$3Yb,
										precondition: a.$51,
										f1: !0,
									});
								}
								async run(b, ...s) {
									const l = b.get(C.$IO),
										y = b.get(d.$ll),
										$ = b.get(n.$IY),
										v = (0, i.$nh)(await l.defaultFilePath(), g),
										S = await l.showOpenDialog({
											defaultUri: v,
											canSelectFiles: !0,
											filters: p,
										});
									if (!S) return;
									const I = await y.readFile(S[0]);
									try {
										const T = JSON.parse(I.value.toString());
										if (!(0, h.$62)(T))
											throw new Error("Invalid chat session data");
										const P = { target: { data: T }, pinned: !0 };
										await $.openEditor({
											resource: u.$cMb.getNewEditorUri(),
											options: P,
										});
									} catch (T) {
										throw T;
									}
								}
							},
						);
				}
			},
		),
		