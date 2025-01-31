import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/keyCodes.js';
import '../../../../../../base/common/network.js';
import '../../../../../../base/common/resources.js';
import '../../../../../../editor/browser/services/codeEditorService.js';
import '../../../../../../editor/common/config/editorOptions.js';
import '../../../../../../editor/common/editorContextKeys.js';
import '../../../../../../editor/contrib/find/browser/findController.js';
import '../../../../../../nls.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/keybinding/common/keybindingsRegistry.js';
import './notebookFindWidget.js';
import '../../controller/coreActions.js';
import '../../notebookBrowser.js';
import '../../notebookEditorExtensions.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookContextKeys.js';
import '../../../../../services/editor/common/editorService.js';
import '../../../../../../css!vs/workbench/contrib/notebook/browser/contrib/find/media/notebookFind.js';
define(
			de[3494],
			he([
				1, 0, 27, 23, 19, 65, 38, 71, 618, 4, 11, 8, 43, 1304, 238, 108, 330,
				70, 176, 18, 2452,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*network*/,
 w /*resources*/,
 E /*codeEditorService*/,
 C /*editorOptions*/,
 d /*editorContextKeys*/,
 m /*findController*/,
 r /*nls*/,
 u /*actions*/,
 a /*contextkey*/,
 h /*keybindingsRegistry*/,
 c /*notebookFindWidget*/,
 n /*coreActions*/,
 g /*notebookBrowser*/,
 p /*notebookEditorExtensions*/,
 o /*notebookCommon*/,
 f /*notebookContextKeys*/,
 b /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, p.$PKb)(c.$TFc.id, c.$TFc),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "notebook.hideFind",
									title: (0, r.localize2)(7750, "Hide Find in Notebook"),
									keybinding: {
										when: a.$Kj.and(f.$pJb, f.$kJb),
										primary: t.KeyCode.Escape,
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async run(y) {
								const $ = y.get(b.$IY),
									v = (0, g.$eJb)($.activeEditorPane);
								if (!v) return;
								v.getContribution(c.$TFc.id).hide(), v.focus();
							}
						},
					),
					(0, u.$4X)(
						class extends n.$y5b {
							constructor() {
								super({
									id: "notebook.find",
									title: (0, r.localize2)(7751, "Find in Notebook"),
									keybinding: {
										when: a.$Kj.and(
											f.$pJb,
											a.$Kj.or(f.$mJb, f.$nJb),
											d.EditorContextKeys.focus.toNegated(),
										),
										primary: t.KeyCode.KeyF | t.KeyMod.CtrlCmd,
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(y, $) {
								const v = y.get(b.$IY),
									S = (0, g.$eJb)(v.activeEditorPane);
								if (!S) return;
								S.getContribution(c.$TFc.id).show(void 0, {
									findScope: { findScopeType: o.NotebookFindScopeType.None },
								});
							}
						},
					);
				function s(y, $) {
					if ($.uri.scheme === i.Schemas.vscodeNotebookCell) {
						const v = o.CellUri.parse($.uri);
						if (v && (0, w.$gh)(v.notebook, y)) return !0;
					}
					return !1;
				}
				function l(y, $) {
					if ($.seedSearchStringFromSelection === "single") {
						const v = (0, m.$tfc)(
							y,
							$.seedSearchStringFromSelection,
							$.seedSearchStringFromNonEmptySelection,
						);
						if (v) return { searchString: v, selection: y.getSelection() };
					} else if (
						$.seedSearchStringFromSelection === "multiple" &&
						!$.updateSearchScope
					) {
						const v = (0, m.$tfc)(y, $.seedSearchStringFromSelection);
						if (v) return { searchString: v, selection: y.getSelection() };
					}
				}
				m.$wfc.addImplementation(100, (y, $, v) => {
					const S = y.get(b.$IY),
						I = (0, g.$eJb)(S.activeEditorPane);
					if (!I || !$.hasModel()) return !1;
					if (!I.hasEditorFocus() && !I.hasWebviewFocus()) {
						const M = y.get(E.$dtb),
							N = M.getFocusedCodeEditor() || M.getActiveCodeEditor();
						if (
							!(
								I.hasModel() &&
								N &&
								N.hasModel() &&
								s(I.textModel.uri, N.getModel())
							)
						)
							return !1;
					}
					const T = I.getContribution(c.$TFc.id),
						P = l($, {
							forceRevealReplace: !1,
							seedSearchStringFromSelection:
								$.getOption(C.EditorOption.find)
									.seedSearchStringFromSelection !== "never"
									? "single"
									: "none",
							seedSearchStringFromNonEmptySelection:
								$.getOption(C.EditorOption.find)
									.seedSearchStringFromSelection === "selection",
							seedSearchStringFromGlobalClipboard: $.getOption(
								C.EditorOption.find,
							).globalFindClipboard,
							shouldFocus: m.FindStartFocusAction.FocusFindInput,
							shouldAnimate: !0,
							updateSearchScope: !1,
							loop: $.getOption(C.EditorOption.find).loop,
						});
					let k;
					const L = $.getModel().uri,
						D = o.CellUri.parse(L);
					if (P?.selection && D) {
						const M = I.getCellByHandle(D.handle);
						M &&
							(k = { searchStringSeededFrom: { cell: M, range: P.selection } });
					}
					return T.show(P?.searchString, k), !0;
				}),
					m.$Hfc.addImplementation(100, (y, $, v) => {
						const S = y.get(b.$IY),
							I = (0, g.$eJb)(S.activeEditorPane);
						if (!I || !$.hasModel()) return !1;
						const T = I.getContribution(c.$TFc.id),
							P = l($, {
								forceRevealReplace: !1,
								seedSearchStringFromSelection:
									$.getOption(C.EditorOption.find)
										.seedSearchStringFromSelection !== "never"
										? "single"
										: "none",
								seedSearchStringFromNonEmptySelection:
									$.getOption(C.EditorOption.find)
										.seedSearchStringFromSelection === "selection",
								seedSearchStringFromGlobalClipboard: $.getOption(
									C.EditorOption.find,
								).globalFindClipboard,
								shouldFocus: m.FindStartFocusAction.FocusFindInput,
								shouldAnimate: !0,
								updateSearchScope: !1,
								loop: $.getOption(C.EditorOption.find).loop,
							});
						return T ? (T.replace(P?.searchString), !0) : !1;
					});
			},
		)
