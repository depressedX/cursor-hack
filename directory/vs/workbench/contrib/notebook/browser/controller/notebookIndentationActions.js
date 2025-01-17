import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/browser/services/bulkEditService.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/log/common/log.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import '../services/notebookEditorService.js';
import '../../common/notebookCommon.js';
import '../../common/notebookEditorInput.js';
import '../../../../services/editor/common/editorService.js';
define(
			de[3482],
			he([1, 0, 4, 3, 199, 17, 42, 11, 10, 34, 63, 293, 70, 360, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$BFc = e.$AFc = e.$zFc = e.$yFc = e.$xFc = void 0),
					(t = mt(t));
				class g extends d.$3X {
					static {
						this.ID = "notebook.action.indentUsingTabs";
					}
					constructor() {
						super({
							id: g.ID,
							title: t.localize(7956, null),
							precondition: void 0,
						});
					}
					run(v, ...S) {
						s(v, !1, !1);
					}
				}
				e.$xFc = g;
				class p extends d.$3X {
					static {
						this.ID = "notebook.action.indentUsingSpaces";
					}
					constructor() {
						super({
							id: p.ID,
							title: t.localize(7957, null),
							precondition: void 0,
						});
					}
					run(v, ...S) {
						s(v, !0, !1);
					}
				}
				e.$yFc = p;
				class o extends d.$3X {
					static {
						this.ID = "notebook.action.changeTabDisplaySize";
					}
					constructor() {
						super({
							id: o.ID,
							title: t.localize(7958, null),
							precondition: void 0,
						});
					}
					run(v, ...S) {
						s(v, !0, !0);
					}
				}
				e.$zFc = o;
				class f extends d.$3X {
					static {
						this.ID = "notebook.action.convertIndentationToSpaces";
					}
					constructor() {
						super({
							id: f.ID,
							title: t.localize(7959, null),
							precondition: void 0,
						});
					}
					run(v, ...S) {
						l(v, !0);
					}
				}
				e.$AFc = f;
				class b extends d.$3X {
					static {
						this.ID = "notebook.action.convertIndentationToTabs";
					}
					constructor() {
						super({
							id: b.ID,
							title: t.localize(7960, null),
							precondition: void 0,
						});
					}
					run(v, ...S) {
						l(v, !1);
					}
				}
				e.$BFc = b;
				function s($, v, S) {
					const I = $.get(n.$IY),
						T = $.get(m.$gj),
						P = $.get(a.$n5b),
						k = $.get(u.$DJ),
						L = I.activeEditorPane?.input;
					if (
						!(0, c.$VIb)(L) ||
						!P.retrieveExistingWidgetFromURI(L.resource)?.value
					)
						return;
					const N = [1, 2, 3, 4, 5, 6, 7, 8].map((O) => ({
							id: O.toString(),
							label: O.toString(),
						})),
						A = T.getValue(h.$56.cellEditorOptionsCustomizations),
						R = A["editor.insertSpaces"];
					delete A["editor.indentSize"],
						delete A["editor.tabSize"],
						delete A["editor.insertSpaces"],
						setTimeout(() => {
							k.pick(N, { placeHolder: t.localize(7961, null) }).then((O) => {
								if (O) {
									const B = parseInt(O.label, 10);
									S
										? T.updateValue(h.$56.cellEditorOptionsCustomizations, {
												...A,
												"editor.tabSize": B,
												"editor.indentSize": B,
												"editor.insertSpaces": R,
											})
										: T.updateValue(h.$56.cellEditorOptionsCustomizations, {
												...A,
												"editor.tabSize": B,
												"editor.indentSize": B,
												"editor.insertSpaces": v,
											});
								}
							});
						}, 50);
				}
				function l($, v) {
					const S = $.get(n.$IY),
						I = $.get(m.$gj),
						T = $.get(r.$ik),
						P = $.get(C.$MO),
						k = $.get(a.$n5b),
						L = $.get(w.$rzb),
						D = S.activeEditorPane?.input;
					if (!(0, c.$VIb)(D)) return;
					const N = k.retrieveExistingWidgetFromURI(D.resource)?.value
						?.textModel;
					if (!N) return;
					const A = new i.$Zc();
					try {
						Promise.all(
							N.cells.map(async (R) => {
								const O = await P.createModelReference(R.uri);
								A.add(O);
								const B = O.object.textEditorModel,
									U = R.textModel?.getOptions();
								if (!U) return;
								const z = y(B, U.tabSize, v);
								L.apply(z, {
									label: t.localize(7962, null),
									code: "undoredo.convertIndentation",
								});
							}),
						).then(() => {
							const R = I.getValue(h.$56.cellEditorOptionsCustomizations),
								O = R["editor.indentSize"],
								B = R["editor.tabSize"];
							delete R["editor.indentSize"],
								delete R["editor.tabSize"],
								delete R["editor.insertSpaces"],
								I.updateValue(h.$56.cellEditorOptionsCustomizations, {
									...R,
									"editor.tabSize": B,
									"editor.indentSize": O,
									"editor.insertSpaces": v,
								}),
								A.dispose();
						});
					} catch {
						T.error(
							"Failed to convert indentation to spaces for notebook cells.",
						);
					}
				}
				function y($, v, S) {
					if ($.getLineCount() === 1 && $.getLineMaxColumn(1) === 1) return [];
					let I = "";
					for (let k = 0; k < v; k++) I += " ";
					const T = new RegExp(I, "gi"),
						P = [];
					for (let k = 1, L = $.getLineCount(); k <= L; k++) {
						let D = $.getLineFirstNonWhitespaceColumn(k);
						if ((D === 0 && (D = $.getLineMaxColumn(k)), D === 1)) continue;
						const M = new E.$iL(k, 1, k, D),
							N = $.getValueInRange(M),
							A = S ? N.replace(/\t/gi, I) : N.replace(T, "	");
						P.push(new w.$tzb($.uri, { range: M, text: A }));
					}
					return P;
				}
				(0, d.$4X)(p),
					(0, d.$4X)(g),
					(0, d.$4X)(o),
					(0, d.$4X)(f),
					(0, d.$4X)(b);
			},
		),
		