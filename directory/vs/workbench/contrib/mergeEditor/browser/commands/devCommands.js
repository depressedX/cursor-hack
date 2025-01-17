import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/buffer.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/uri.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/clipboard/common/clipboardService.js';
import '../../../../../platform/dialogs/common/dialogs.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../platform/notification/common/notification.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import '../view/mergeEditor.js';
import '../../common/mergeEditor.js';
import '../../../../services/editor/common/editorService.js';
define(
			de[3868],
			he([1, 0, 76, 14, 9, 61, 4, 11, 121, 57, 22, 40, 63, 1050, 687, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gSc = e.$fSc = e.$eSc = void 0);
				const p = (0, C.localize2)(7585, "Merge Editor (Dev)");
				class o extends d.$3X {
					constructor() {
						super({
							id: "merge.dev.copyContentsJson",
							category: p,
							title: (0, C.localize2)(7586, "Copy Merge Editor State as JSON"),
							icon: i.$ak.layoutCentered,
							f1: !0,
							precondition: n.$$Zb,
						});
					}
					run(y) {
						const { activeEditorPane: $ } = y.get(g.$IY),
							v = y.get(m.$Vxb),
							S = y.get(a.$4N);
						if (!($ instanceof c.$TRc)) {
							S.info({
								name: (0, C.localize)(7575, null),
								message: (0, C.localize)(7576, null),
							});
							return;
						}
						const I = $.model;
						if (!I) return;
						const T = {
								languageId: I.resultTextModel.getLanguageId(),
								base: I.base.getValue(),
								input1: I.input1.textModel.getValue(),
								input2: I.input2.textModel.getValue(),
								result: I.resultTextModel.getValue(),
								initialResult: I.getInitialResultValue(),
							},
							P = JSON.stringify(T, void 0, 4);
						v.writeText(P),
							S.info({
								name: (0, C.localize)(7577, null),
								message: (0, C.localize)(7578, null),
							});
					}
				}
				e.$eSc = o;
				class f extends d.$3X {
					constructor() {
						super({
							id: "merge.dev.saveContentsToFolder",
							category: p,
							title: (0, C.localize2)(
								7587,
								"Save Merge Editor State to Folder",
							),
							icon: i.$ak.layoutCentered,
							f1: !0,
							precondition: n.$$Zb,
						});
					}
					async run(y) {
						const { activeEditorPane: $ } = y.get(g.$IY),
							v = y.get(a.$4N),
							S = y.get(r.$IO),
							I = y.get(u.$ll),
							T = y.get(E.$nM);
						if (!($ instanceof c.$TRc)) {
							v.info({
								name: (0, C.localize)(7579, null),
								message: (0, C.localize)(7580, null),
							});
							return;
						}
						const P = $.model;
						if (!P) return;
						const k = await S.showOpenDialog({
							canSelectFiles: !1,
							canSelectFolders: !0,
							canSelectMany: !1,
							title: (0, C.localize)(7581, null),
						});
						if (!k) return;
						const L = k[0],
							D = T.getExtensions(P.resultTextModel.getLanguageId())[0] || "";
						async function M(N, A) {
							await I.writeFile(
								w.URI.joinPath(L, N + D),
								t.$Te.fromString(A),
								{},
							);
						}
						await Promise.all([
							M("base", P.base.getValue()),
							M("input1", P.input1.textModel.getValue()),
							M("input2", P.input2.textModel.getValue()),
							M("result", P.resultTextModel.getValue()),
							M("initialResult", P.getInitialResultValue()),
						]),
							v.info({
								name: (0, C.localize)(7582, null),
								message: (0, C.localize)(7583, null),
							});
					}
				}
				e.$fSc = f;
				class b extends d.$3X {
					constructor() {
						super({
							id: "merge.dev.loadContentsFromFolder",
							category: p,
							title: (0, C.localize2)(
								7588,
								"Load Merge Editor State from Folder",
							),
							icon: i.$ak.layoutCentered,
							f1: !0,
						});
					}
					async run(y, $) {
						const v = y.get(r.$IO),
							S = y.get(g.$IY),
							I = y.get(u.$ll),
							T = y.get(h.$DJ);
						$ || ($ = {});
						let P;
						if ($.folderUri) P = $.folderUri;
						else {
							const B = await v.showOpenDialog({
								canSelectFiles: !1,
								canSelectFolders: !0,
								canSelectMany: !1,
								title: (0, C.localize)(7584, null),
							});
							if (!B) return;
							P = B[0];
						}
						const k = await I.resolve(P);
						function L(B) {
							return k.children.find((U) => U.name.startsWith(B))?.resource;
						}
						const D = await s(T, $.resultState),
							M = L("base"),
							N = L("input1"),
							A = L("input2"),
							R = L(D ? "initialResult" : "result"),
							O = {
								base: { resource: M },
								input1: {
									resource: N,
									label: "Input 1",
									description: "Input 1",
									detail: "(from file)",
								},
								input2: {
									resource: A,
									label: "Input 2",
									description: "Input 2",
									detail: "(from file)",
								},
								result: { resource: R },
							};
						S.openEditor(O);
					}
				}
				e.$gSc = b;
				async function s(l, y) {
					return y
						? y === "initial"
						: (
								await l.pick(
									[
										{ label: "result", result: !1 },
										{ label: "initial result", result: !0 },
									],
									{ canPickMany: !1 },
								)
							)?.result;
				}
			},
		),
		