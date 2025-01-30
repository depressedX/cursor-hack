import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/extpath.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/languages/language.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../browser/view/mergeEditor.js';
import '../../../services/editor/common/editorService.js';
define(
			de[3870],
			he([1, 0, 76, 14, 249, 9, 61, 4, 11, 121, 113, 22, 63, 1050, 18]),
			function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*codicons*/,
 w /*extpath*/,
 E /*uri*/,
 C /*language*/,
 d /*nls*/,
 m /*actions*/,
 r /*clipboardService*/,
 u /*environment*/,
 a /*files*/,
 h /*quickInput*/,
 c /*mergeEditor*/,
 n /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lgd = e.$Kgd = void 0);
				const g = (0, d.localize2)(7690, "Merge Editor (Dev)");
				class p extends m.$3X {
					constructor() {
						super({
							id: "merge.dev.openContentsJson",
							category: g,
							title: (0, d.localize2)(
								7691,
								"Open Merge Editor State from JSON",
							),
							icon: i.$ak.layoutCentered,
							f1: !0,
						});
					}
					async run(l, y) {
						const $ = l.get(h.$DJ),
							v = l.get(r.$Vxb),
							S = l.get(n.$IY),
							I = l.get(C.$nM),
							T = l.get(u.$Ui),
							P = l.get(a.$ll);
						y || (y = {});
						let k;
						if (y.data) k = y.data;
						else {
							const F = await $.input({
								prompt: (0, d.localize)(7689, null),
								value: await v.readText(),
							});
							if (F === void 0) return;
							k =
								F !== ""
									? JSON.parse(F)
									: {
											base: "",
											input1: "",
											input2: "",
											result: "",
											languageId: "plaintext",
										};
						}
						const L = E.URI.joinPath(T.tmpDir, (0, w.$Ug)()),
							D = I.getExtensions(k.languageId)[0] || "",
							M = E.URI.joinPath(L, `/base${D}`),
							N = E.URI.joinPath(L, `/input1${D}`),
							A = E.URI.joinPath(L, `/input2${D}`),
							R = E.URI.joinPath(L, `/result${D}`),
							O = E.URI.joinPath(L, `/initialResult${D}`);
						async function B(F, x) {
							await P.writeFile(F, t.$Te.fromString(x));
						}
						const U = await o($, y.resultState);
						await Promise.all([
							B(M, k.base),
							B(N, k.input1),
							B(A, k.input2),
							B(R, U ? k.initialResult || "" : k.result),
							B(O, k.initialResult || ""),
						]);
						const z = {
							base: { resource: M },
							input1: {
								resource: N,
								label: "Input 1",
								description: "Input 1",
								detail: "(from JSON)",
							},
							input2: {
								resource: A,
								label: "Input 2",
								description: "Input 2",
								detail: "(from JSON)",
							},
							result: { resource: R },
						};
						S.openEditor(z);
					}
				}
				e.$Kgd = p;
				async function o(s, l) {
					return l
						? l === "initial"
						: (
								await s.pick(
									[
										{ label: "result", result: !1 },
										{ label: "initial result", result: !0 },
									],
									{ canPickMany: !1 },
								)
							)?.result;
				}
				class f extends m.$3X {
					constructor(l) {
						super(l);
					}
					run(l) {
						const { activeEditorPane: y } = l.get(n.$IY);
						if (y instanceof c.$TRc) {
							const $ = y.viewModel.get();
							if (!$) return;
							this.runWithViewModel($, l);
						}
					}
				}
				class b extends f {
					constructor() {
						super({
							id: "merge.dev.openSelectionInTemporaryMergeEditor",
							category: g,
							title: (0, d.localize2)(
								7692,
								"Open Selection In Temporary Merge Editor",
							),
							icon: i.$ak.layoutCentered,
							f1: !0,
						});
					}
					async runWithViewModel(l, y) {
						const $ = l.selectionInBase.get()?.rangesInBase;
						if (!$ || $.length === 0) return;
						const v = $.map((P) => l.model.base.getValueInRange(P)).join(`
`),
							S = $.map((P) =>
								l.inputCodeEditorView1.editor
									.getModel()
									.getValueInRange(l.model.translateBaseRangeToInput(1, P)),
							).join(`
`),
							I = $.map((P) =>
								l.inputCodeEditorView2.editor
									.getModel()
									.getValueInRange(l.model.translateBaseRangeToInput(2, P)),
							).join(`
`),
							T = $.map((P) =>
								l.resultCodeEditorView.editor
									.getModel()
									.getValueInRange(l.model.translateBaseRangeToResult(P)),
							).join(`
`);
						new p().run(y, {
							data: {
								base: v,
								input1: S,
								input2: I,
								result: T,
								languageId: l.resultCodeEditorView.editor
									.getModel()
									.getLanguageId(),
							},
						});
					}
				}
				e.$Lgd = b;
			},
		),
		