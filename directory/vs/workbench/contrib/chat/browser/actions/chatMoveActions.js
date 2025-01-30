import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../common/contextkeys.js';
import './chatActions.js';
import '../chat.js';
import '../chatEditorInput.js';
import '../../common/chatContextKeys.js';
import '../../../../services/editor/common/editorGroupsService.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../services/views/common/viewsService.js';
define(
			de[3810],
			he([1, 0, 4, 11, 8, 100, 402, 208, 552, 207, 66, 18, 89]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*contextkey*/,
 E /*contextkeys*/,
 C /*chatActions*/,
 d /*chat*/,
 m /*chatEditorInput*/,
 r /*chatContextKeys*/,
 u /*editorGroupsService*/,
 a /*editorService*/,
 h /*viewsService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$KIc = n);
				var c;
				(function (o) {
					(o.Editor = "Editor"), (o.Window = "Window");
				})(c || (c = {}));
				function n() {
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.openInEditor",
									title: (0, t.localize2)(4603, "Open Chat in Editor"),
									category: C.$3Yb,
									precondition: r.$51,
									f1: !0,
									menu: {
										id: i.$XX.ViewTitle,
										when: w.$Kj.equals("view", d.$MYb),
										order: 0,
									},
								});
							}
							async run(f, ...b) {
								const s = b[0];
								g(f, c.Editor, (0, C.$2Yb)(s) ? s.chatView : void 0);
							}
						},
					),
						(0, i.$4X)(
							class extends i.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.openInNewWindow",
										title: (0, t.localize2)(4604, "Open Chat in New Window"),
										category: C.$3Yb,
										precondition: r.$51,
										f1: !0,
										menu: {
											id: i.$XX.ViewTitle,
											when: w.$Kj.equals("view", d.$MYb),
											order: 0,
										},
									});
								}
								async run(f, ...b) {
									const s = b[0];
									g(f, c.Window, (0, C.$2Yb)(s) ? s.chatView : void 0);
								}
							},
						),
						(0, i.$4X)(
							class extends i.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.openInSidebar",
										title: (0, t.localize2)(4605, "Open Chat in Side Bar"),
										category: C.$3Yb,
										precondition: r.$51,
										f1: !0,
										menu: [
											{
												id: i.$XX.EditorTitle,
												order: 0,
												when: E.$TPb.isEqualTo(m.$cMb.EditorID),
											},
										],
									});
								}
								async run(f, ...b) {
									return p(f);
								}
							},
						);
				}
				async function g(o, f, b) {
					const s = o.get(d.$GYb),
						l = o.get(a.$IY),
						y = b?.widget ?? s.lastFocusedWidget;
					if (!y || !("viewId" in y.viewContext)) {
						await l.openEditor(
							{ resource: m.$cMb.getNewEditorUri(), options: { pinned: !0 } },
							f === c.Window ? a.$LY : a.$JY,
						);
						return;
					}
					const $ = y.viewModel;
					if (!$) return;
					const v = $.sessionId,
						S = y.getViewState();
					y.clear();
					const I = { target: { sessionId: v }, pinned: !0, viewState: S };
					await l.openEditor(
						{ resource: m.$cMb.getNewEditorUri(), options: I },
						f === c.Window ? a.$LY : a.$JY,
					);
				}
				async function p(o) {
					const f = o.get(h.$HMb),
						b = o.get(a.$IY),
						s = o.get(u.$EY),
						l = b.activeEditor;
					let y;
					l instanceof m.$cMb && l.sessionId
						? (await b.closeEditor({ editor: l, groupId: s.activeGroup.id }),
							(y = await f.openView(d.$MYb)),
							y.loadSession(l.sessionId))
						: (y = await f.openView(d.$MYb)),
						y.focus();
				}
			},
		),
		