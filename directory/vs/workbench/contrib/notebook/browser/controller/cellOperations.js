import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../editor/browser/services/bulkEditService.js';
import '../../../../../editor/common/core/position.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/common/model.js';
import '../../../../../editor/common/languages/modesRegistry.js';
import '../../../bulkEdit/browser/bulkCellEdits.js';
import '../notebookBrowser.js';
import '../../common/model/notebookCellTextModel.js';
import '../../common/notebookCommon.js';
import '../../common/notebookRange.js';
import '../../../../../nls.js';
define(
			de[624],
			he([1, 0, 199, 48, 17, 64, 172, 572, 108, 1029, 70, 442, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*bulkEditService*/,
 i /*position*/,
 w /*range*/,
 E /*model*/,
 C /*modesRegistry*/,
 d /*bulkCellEdits*/,
 m /*notebookBrowser*/,
 r /*notebookCellTextModel*/,
 u /*notebookCommon*/,
 a /*notebookRange*/,
 h /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$E5b = c),
					(e.$F5b = n),
					(e.$G5b = g),
					(e.$H5b = p),
					(e.$I5b = o),
					(e.$J5b = f),
					(e.$K5b = b),
					(e.$L5b = y),
					(e.$M5b = $),
					(e.$N5b = v);
				async function c(S, I, T, P) {
					const { notebookEditor: k } = I;
					if (k.hasModel() && !k.isReadOnly) {
						if (I.ui && I.cell) {
							const { cell: L } = I;
							if (L.cellKind === S) return;
							const D = L.getText(),
								M = k.getCellIndex(L);
							T === void 0 &&
								(T = (k.activeKernel?.supportedLanguages ?? [])[0] ?? C.$0M),
								k.textModel.applyEdits(
									[
										{
											editType: u.CellEditType.Replace,
											index: M,
											count: 1,
											cells: [
												{
													cellKind: S,
													source: D,
													language: T,
													mime: P ?? L.mime,
													outputs: L.model.outputs,
													metadata: L.metadata,
												},
											],
										},
									],
									!0,
									{
										kind: u.SelectionStateType.Index,
										focus: k.getFocus(),
										selections: k.getSelections(),
									},
									() => ({
										kind: u.SelectionStateType.Index,
										focus: k.getFocus(),
										selections: k.getSelections(),
									}),
									void 0,
									!0,
								);
							const N = k.cellAt(M);
							await k.focusNotebookCell(
								N,
								L.getEditState() === m.CellEditState.Editing
									? "editor"
									: "container",
							);
						} else if (I.selectedCells) {
							const L = I.selectedCells,
								D = [];
							L.forEach((M) => {
								if (M.cellKind === S) return;
								const N = M.getText(),
									A = k.getCellIndex(M);
								T === void 0 &&
									(T = (k.activeKernel?.supportedLanguages ?? [])[0] ?? C.$0M),
									D.push({
										editType: u.CellEditType.Replace,
										index: A,
										count: 1,
										cells: [
											{
												cellKind: S,
												source: N,
												language: T,
												mime: P ?? M.mime,
												outputs: M.model.outputs,
												metadata: M.metadata,
											},
										],
									});
							}),
								k.textModel.applyEdits(
									D,
									!0,
									{
										kind: u.SelectionStateType.Index,
										focus: k.getFocus(),
										selections: k.getSelections(),
									},
									() => ({
										kind: u.SelectionStateType.Index,
										focus: k.getFocus(),
										selections: k.getSelections(),
									}),
									void 0,
									!0,
								);
						}
					}
				}
				function n(S, I) {
					const T = S.textModel,
						P = S.getSelections(),
						k = S.getCellIndex(I),
						L = P.find((M) => M.start <= k && k < M.end),
						D = !S.isReadOnly || T.viewType === "interactive";
					if (L) {
						const M = P.reverse().map((A) => ({
								editType: u.CellEditType.Replace,
								index: A.start,
								count: A.end - A.start,
								cells: [],
							})),
							N = L.end >= S.getLength() ? void 0 : S.cellAt(L.end);
						T.applyEdits(
							M,
							!0,
							{
								kind: u.SelectionStateType.Index,
								focus: S.getFocus(),
								selections: S.getSelections(),
							},
							() => {
								if (N) {
									const A = T.cells.findIndex((R) => R.handle === N.handle);
									return {
										kind: u.SelectionStateType.Index,
										focus: { start: A, end: A + 1 },
										selections: [{ start: A, end: A + 1 }],
									};
								} else if (T.length) {
									const A = T.length - 1;
									return {
										kind: u.SelectionStateType.Index,
										focus: { start: A, end: A + 1 },
										selections: [{ start: A, end: A + 1 }],
									};
								} else
									return {
										kind: u.SelectionStateType.Index,
										focus: { start: 0, end: 0 },
										selections: [{ start: 0, end: 0 }],
									};
							},
							void 0,
							D,
						);
					} else {
						const M = S.getFocus(),
							N = [
								{
									editType: u.CellEditType.Replace,
									index: k,
									count: 1,
									cells: [],
								},
							],
							A = [];
						for (let R = 0; R < P.length; R++) {
							const O = P[R];
							O.end <= k
								? A.push(O)
								: O.start > k
									? A.push({ start: O.start - 1, end: O.end - 1 })
									: A.push({ start: k, end: k + 1 });
						}
						if (S.cellAt(M.start) === I) {
							const R =
								M.end === T.length ? { start: M.start - 1, end: M.end - 1 } : M;
							T.applyEdits(
								N,
								!0,
								{
									kind: u.SelectionStateType.Index,
									focus: S.getFocus(),
									selections: S.getSelections(),
								},
								() => ({
									kind: u.SelectionStateType.Index,
									focus: R,
									selections: A,
								}),
								void 0,
								D,
							);
						} else {
							const R =
								M.start > k ? { start: M.start - 1, end: M.end - 1 } : M;
							T.applyEdits(
								N,
								!0,
								{
									kind: u.SelectionStateType.Index,
									focus: S.getFocus(),
									selections: S.getSelections(),
								},
								() => ({
									kind: u.SelectionStateType.Index,
									focus: R,
									selections: A,
								}),
								void 0,
								D,
							);
						}
					}
				}
				async function g(S, I) {
					if (!S.notebookEditor.hasModel()) return;
					const T = S.notebookEditor,
						P = T.textModel;
					if (T.isReadOnly) return;
					let k;
					if (S.cell) {
						const L = T.getCellIndex(S.cell);
						k = { start: L, end: L + 1 };
					} else {
						const L = T.getSelections();
						k = (0, m.$fJb)(T, L)[0];
					}
					if (!(!k || k.start === k.end))
						if (I === "up") {
							if (k.start === 0) return;
							const L = k.start - 1,
								D = { start: k.start - 1, end: k.end - 1 },
								M = S.notebookEditor.getFocus(),
								N = (0, a.$m6)(k, M)
									? { start: M.start - 1, end: M.end - 1 }
									: { start: k.start - 1, end: k.start };
							P.applyEdits(
								[
									{
										editType: u.CellEditType.Move,
										index: L,
										length: 1,
										newIdx: k.end - 1,
									},
								],
								!0,
								{
									kind: u.SelectionStateType.Index,
									focus: T.getFocus(),
									selections: T.getSelections(),
								},
								() => ({
									kind: u.SelectionStateType.Index,
									focus: N,
									selections: [D],
								}),
								void 0,
								!0,
							);
							const A = T.getSelections()[0] ?? T.getFocus();
							T.revealCellRangeInView(A);
						} else {
							if (k.end >= P.length) return;
							const L = k.end,
								D = { start: k.start + 1, end: k.end + 1 },
								M = T.getFocus(),
								N = (0, a.$m6)(k, M)
									? { start: M.start + 1, end: M.end + 1 }
									: { start: k.start + 1, end: k.start + 2 };
							P.applyEdits(
								[
									{
										editType: u.CellEditType.Move,
										index: L,
										length: 1,
										newIdx: k.start,
									},
								],
								!0,
								{
									kind: u.SelectionStateType.Index,
									focus: T.getFocus(),
									selections: T.getSelections(),
								},
								() => ({
									kind: u.SelectionStateType.Index,
									focus: N,
									selections: [D],
								}),
								void 0,
								!0,
							);
							const A = T.getSelections()[0] ?? T.getFocus();
							T.revealCellRangeInView(A);
						}
				}
				async function p(S, I) {
					const T = S.notebookEditor;
					if (!T.hasModel()) return;
					const P = T.textModel;
					if (T.isReadOnly) return;
					let k;
					if (S.ui) {
						const L = S.cell,
							D = T.getCellIndex(L);
						k = { start: D, end: D + 1 };
					} else {
						const L = T.getSelections();
						k = (0, m.$fJb)(T, L)[0];
					}
					if (!(!k || k.start === k.end))
						if (I === "up") {
							const L = T.getFocus(),
								D = T.getSelections();
							P.applyEdits(
								[
									{
										editType: u.CellEditType.Replace,
										index: k.end,
										count: 0,
										cells: (0, a.$j6)([k]).map((M) =>
											(0, r.$05)(T.cellAt(M).model),
										),
									},
								],
								!0,
								{ kind: u.SelectionStateType.Index, focus: L, selections: D },
								() => ({
									kind: u.SelectionStateType.Index,
									focus: L,
									selections: D,
								}),
								void 0,
								!0,
							);
						} else {
							const L = T.getFocus(),
								D = T.getSelections(),
								N = (0, a.$j6)([k]).map((B) =>
									(0, r.$05)(T.cellAt(B).model),
								).length,
								A = S.ui ? L : { start: L.start + N, end: L.end + N },
								R = S.ui ? D : [{ start: k.start + N, end: k.end + N }];
							P.applyEdits(
								[
									{
										editType: u.CellEditType.Replace,
										index: k.end,
										count: 0,
										cells: (0, a.$j6)([k]).map((B) =>
											(0, r.$05)(T.cellAt(B).model),
										),
									},
								],
								!0,
								{ kind: u.SelectionStateType.Index, focus: L, selections: D },
								() => ({
									kind: u.SelectionStateType.Index,
									focus: A,
									selections: R,
								}),
								void 0,
								!0,
							);
							const O = T.getSelections()[0] ?? T.getFocus();
							T.revealCellRangeInView(O);
						}
				}
				async function o(S, I, T) {
					const P = T.notebookEditor;
					if (P.isReadOnly) return;
					const k = [],
						L = [];
					for (const O of P.getSelections()) L.push(...P.getCellsInRange(O));
					if (L.length <= 1) return;
					const D = L[0].cellKind;
					if (!L.every((O) => O.cellKind === D)) {
						const O = (0, h.localize)(7826, null);
						return I.warn(O);
					}
					const N = L[0],
						A = L.map((O) => O.getText()).join(N.textBuffer.getEOL()),
						R = P.getSelections()[0];
					k.push(
						new d.$hJb(P.textModel.uri, {
							editType: u.CellEditType.Replace,
							index: R.start,
							count: R.end - R.start,
							cells: [
								{
									cellKind: N.cellKind,
									source: A,
									language: N.language,
									mime: N.mime,
									outputs: N.model.outputs,
									metadata: N.metadata,
								},
							],
						}),
					);
					for (const O of P.getSelections().slice(1))
						k.push(
							new d.$hJb(P.textModel.uri, {
								editType: u.CellEditType.Replace,
								index: O.start,
								count: O.end - O.start,
								cells: [],
							}),
						);
					k.length &&
						(await S.apply(k, { quotableLabel: (0, h.localize)(7827, null) }));
				}
				async function f(S, I, T, P) {
					if (S.isReadOnly) return null;
					const k = S.textModel,
						L = S.getCellsInRange(I);
					if (
						!L.length ||
						(I.start === 0 && T === "above") ||
						(I.end === k.length && T === "below")
					)
						return null;
					for (let D = 0; D < L.length; D++) {
						const M = L[D];
						if (P && M.cellKind !== P) return null;
					}
					if (T === "above") {
						const D = S.cellAt(I.start - 1);
						if (P && D.cellKind !== P) return null;
						const M = L.map(
								(R) => (R.textBuffer.getEOL() ?? "") + R.getText(),
							).join(""),
							N = D.textBuffer.getLineCount(),
							A = D.textBuffer.getLineLength(N);
						return {
							edits: [
								new t.$tzb(D.uri, {
									range: new w.$iL(N, A + 1, N, A + 1),
									text: M,
								}),
								new d.$hJb(k.uri, {
									editType: u.CellEditType.Replace,
									index: I.start,
									count: I.end - I.start,
									cells: [],
								}),
							],
							cell: D,
							endFocus: { start: I.start - 1, end: I.start },
							endSelections: [{ start: I.start - 1, end: I.start }],
						};
					} else {
						const D = S.cellAt(I.end);
						if (P && D.cellKind !== P) return null;
						const M = L[0],
							A = [...L.slice(1), D]
								.map((B) => (B.textBuffer.getEOL() ?? "") + B.getText())
								.join(""),
							R = M.textBuffer.getLineCount(),
							O = M.textBuffer.getLineLength(R);
						return {
							edits: [
								new t.$tzb(M.uri, {
									range: new w.$iL(R, O + 1, R, O + 1),
									text: A,
								}),
								new d.$hJb(k.uri, {
									editType: u.CellEditType.Replace,
									index: I.start + 1,
									count: I.end - I.start,
									cells: [],
								}),
							],
							cell: M,
							endFocus: { start: I.start, end: I.start + 1 },
							endSelections: [{ start: I.start, end: I.start + 1 }],
						};
					}
				}
				async function b(S, I, T) {
					const P = I.notebookEditor,
						k = P.textModel,
						L = P.getViewModel();
					let D = null;
					if (I.ui) {
						const M = I.cell.focusMode,
							N = P.getCellIndex(I.cell);
						if (((D = await f(P, { start: N, end: N + 1 }, T)), !D)) return;
						await S.apply(D?.edits, { quotableLabel: "Join Notebook Cells" }),
							L.updateSelectionsState({
								kind: u.SelectionStateType.Index,
								focus: D.endFocus,
								selections: D.endSelections,
							}),
							D.cell.updateEditState(
								m.CellEditState.Editing,
								"joinCellsWithSurrounds",
							),
							P.revealCellRangeInView(P.getFocus()),
							M === m.CellFocusMode.Editor &&
								(D.cell.focusMode = m.CellFocusMode.Editor);
					} else {
						const M = P.getSelections();
						if (!M.length) return;
						const N = P.getFocus(),
							A = P.cellAt(N.start)?.focusMode,
							R = [];
						let O = null;
						const B = [];
						for (let z = M.length - 1; z >= 0; z--) {
							const F = M[z],
								x = (0, a.$m6)(F, N);
							if (
								(F.end >= k.length && T === "below") ||
								(F.start === 0 && T === "above")
							) {
								x && (O = P.cellAt(N.start)), B.push(...P.getCellsInRange(F));
								continue;
							}
							const H = await f(P, F, T);
							if (!H) return;
							R.push(...H.edits), B.push(H.cell), x && (O = H.cell);
						}
						if (!R.length || !O || !B.length) return;
						await S.apply(R, { quotableLabel: "Join Notebook Cells" }),
							B.forEach((z) => {
								z.updateEditState(
									m.CellEditState.Editing,
									"joinCellsWithSurrounds",
								);
							}),
							L.updateSelectionsState({
								kind: u.SelectionStateType.Handle,
								primary: O.handle,
								selections: B.map((z) => z.handle),
							}),
							P.revealCellRangeInView(P.getFocus());
						const U = P.cellAt(P.getFocus().start);
						A === m.CellFocusMode.Editor &&
							U &&
							(U.focusMode = m.CellFocusMode.Editor);
					}
				}
				function s(S, I) {
					const T = [],
						P = I.getLineCount(),
						k = (M) => I.getLineLength(M);
					S = S.sort((M, N) => {
						const A = M.lineNumber - N.lineNumber,
							R = M.column - N.column;
						return A !== 0 ? A : R;
					});
					for (let M of S)
						k(M.lineNumber) + 1 === M.column &&
							M.column !== 1 &&
							M.lineNumber < P &&
							(M = new i.$hL(M.lineNumber + 1, 1)),
							l(T, M);
					if (T.length === 0) return null;
					const L = new i.$hL(1, 1),
						D = new i.$hL(P, k(P) + 1);
					return [L, ...T, D];
				}
				function l(S, I) {
					const T = S.length > 0 ? S[S.length - 1] : void 0;
					(!T || T.lineNumber !== I.lineNumber || T.column !== I.column) &&
						S.push(I);
				}
				function y(S, I) {
					const T = s(I, S.textBuffer);
					if (!T) return null;
					const P = [];
					for (let k = 1; k < T.length; k++) {
						const L = T[k - 1],
							D = T[k];
						P.push(
							S.textBuffer.getValueInRange(
								new w.$iL(L.lineNumber, L.column, D.lineNumber, D.column),
								E.EndOfLinePreference.TextDefined,
							),
						);
					}
					return P;
				}
				function $(S, I, T, P, k = "above", L = "", D = !1) {
					const M = I.getViewModel(),
						N = I.activeKernel;
					if (M.options.isReadOnly) return null;
					const A = I.cellAt(T),
						R = D ? M.getNextVisibleCellIndex(T) : T + 1;
					let O;
					if (P === u.CellKind.Code) {
						const U = N?.supportedLanguages ?? S.getRegisteredLanguageIds(),
							z = U[0] || C.$0M;
						if (A?.cellKind === u.CellKind.Code) O = A.language;
						else if (A?.cellKind === u.CellKind.Markup) {
							const F = M.nearestCodeCellIndex(T);
							F > -1 ? (O = M.cellAt(F).language) : (O = z);
						} else
							A === void 0 && k === "above"
								? (O =
										M.viewCells.find((F) => F.cellKind === u.CellKind.Code)
											?.language || z)
								: (O = z);
						U.includes(O) || (O = z);
					} else O = "markdown";
					return v(
						M,
						A ? (k === "above" ? T : R) : T,
						L,
						O,
						P,
						void 0,
						[],
						!0,
						!0,
					);
				}
				function v(S, I, T, P, k, L, D, M, N) {
					const A = {
						kind: u.SelectionStateType.Index,
						focus: { start: I, end: I + 1 },
						selections: [{ start: I, end: I + 1 }],
					};
					return (
						S.notebookDocument.applyEdits(
							[
								{
									editType: u.CellEditType.Replace,
									index: I,
									count: 0,
									cells: [
										{
											cellKind: k,
											language: P,
											mime: void 0,
											outputs: D,
											metadata: L,
											source: T,
										},
									],
								},
							],
							M,
							{
								kind: u.SelectionStateType.Index,
								focus: S.getFocus(),
								selections: S.getSelections(),
							},
							() => A,
							void 0,
							N && !S.options.isReadOnly,
						),
						S.cellAt(I)
					);
				}
			},
		)
