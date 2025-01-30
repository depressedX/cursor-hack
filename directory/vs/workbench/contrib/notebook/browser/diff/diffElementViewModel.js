import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/hash.js';
import '../../../../../base/common/jsonFormatter.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/browser/widget/diffEditor/diffEditorWidget.js';
import './diffCellEditorOptions.js';
import './diffNestedCellViewModel.js';
import './eventDispatcher.js';
import './notebookDiffEditorBrowser.js';
import '../notebookBrowser.js';
define(
			de[706],
			he([1, 0, 6, 136, 585, 3, 309, 1253, 3478, 1254, 556, 108]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*hash*/,
 w /*jsonFormatter*/,
 E /*lifecycle*/,
 C /*diffEditorWidget*/,
 d /*diffCellEditorOptions*/,
 m /*diffNestedCellViewModel*/,
 r /*eventDispatcher*/,
 u /*notebookDiffEditorBrowser*/,
 a /*notebookBrowser*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.OutputComparison =
						e.$SEc =
						e.$REc =
						e.$QEc =
						e.$PEc =
						e.$OEc =
						e.$NEc =
						e.PropertyFoldingState =
							void 0),
					(e.$TEc = b),
					(e.$UEc = l),
					(e.$VEc = y),
					(e.$WEc = $);
				var h;
				(function (v) {
					(v[(v.Expanded = 0)] = "Expanded"),
						(v[(v.Collapsed = 1)] = "Collapsed");
				})(h || (e.PropertyFoldingState = h = {})),
					(e.$NEc = 1440);
				class c extends E.$1c {
					constructor(S, I, T) {
						super(),
							(this.mainDocumentTextModel = S),
							(this.editorEventDispatcher = I),
							(this.initData = T),
							(this.c = this.D(new t.$re())),
							(this.onDidLayoutChange = this.c.event),
							this.D(
								this.editorEventDispatcher.onDidChangeLayout((P) =>
									this.c.fire({ outerWidth: !0 }),
								),
							);
					}
				}
				e.$OEc = c;
				class n extends c {
					constructor(S, I, T) {
						super(S, I, T),
							(this.type = "placeholder"),
							(this.hiddenCells = []),
							(this.f = this.D(new t.$re())),
							(this.onUnfoldHiddenCells = this.f.event);
					}
					get totalHeight() {
						return 24 + 2 * u.$yEc;
					}
					getHeight(S) {
						return this.totalHeight;
					}
					layoutChange() {}
					showHiddenCells() {
						this.f.fire();
					}
				}
				e.$PEc = n;
				class g extends c {
					hideUnchangedCells() {
						this.h.fire();
					}
					set rawOutputHeight(S) {
						this.t({ rawOutputHeight: Math.min(e.$NEc, S) });
					}
					get rawOutputHeight() {
						throw new Error("Use Cell.layoutInfo.rawOutputHeight");
					}
					set outputStatusHeight(S) {
						this.t({ outputStatusHeight: S });
					}
					get outputStatusHeight() {
						throw new Error("Use Cell.layoutInfo.outputStatusHeight");
					}
					set outputMetadataHeight(S) {
						this.t({ outputMetadataHeight: S });
					}
					get outputMetadataHeight() {
						throw new Error("Use Cell.layoutInfo.outputStatusHeight");
					}
					set editorHeight(S) {
						this.t({ editorHeight: S });
					}
					get editorHeight() {
						throw new Error("Use Cell.layoutInfo.editorHeight");
					}
					set editorMargin(S) {
						this.t({ editorMargin: S });
					}
					get editorMargin() {
						throw new Error("Use Cell.layoutInfo.editorMargin");
					}
					set metadataStatusHeight(S) {
						this.t({ metadataStatusHeight: S });
					}
					get metadataStatusHeight() {
						throw new Error("Use Cell.layoutInfo.outputStatusHeight");
					}
					set metadataHeight(S) {
						this.t({ metadataHeight: S });
					}
					get metadataHeight() {
						throw new Error("Use Cell.layoutInfo.metadataHeight");
					}
					set renderOutput(S) {
						(this.m = S),
							this.t({ recomputeOutput: !0 }),
							this.f.fire({ renderOutput: this.m });
					}
					get renderOutput() {
						return this.m;
					}
					get layoutInfo() {
						return this.g;
					}
					get totalHeight() {
						return this.layoutInfo.totalHeight;
					}
					constructor(S, I, T, P, k, L, D) {
						super(S, k, L),
							(this.type = P),
							(this.f = this.D(new t.$re())),
							(this.onDidStateChange = this.f.event),
							(this.h = this.D(new t.$re())),
							(this.onHideUnchangedCells = this.h.event),
							(this.m = !0),
							(this.n = null),
							(this.q = null),
							(this.r = null),
							(this.original = I ? this.D(new m.$JEc(I, D)) : void 0),
							(this.modified = T ? this.D(new m.$JEc(T, D)) : void 0);
						const M = this.s(L.fontInfo),
							N = 25;
						(this.g = {
							width: 0,
							editorHeight: M,
							editorMargin: 0,
							metadataHeight: 0,
							cellStatusHeight: N,
							metadataStatusHeight: 25,
							rawOutputHeight: 0,
							outputTotalHeight: 0,
							outputStatusHeight: 25,
							outputMetadataHeight: 0,
							bodyMargin: 32,
							totalHeight: 82 + N + M,
							layoutState: a.CellLayoutState.Uninitialized,
						}),
							(this.cellFoldingState =
								T?.getTextBufferHash() !== I?.getTextBufferHash()
									? h.Expanded
									: h.Collapsed),
							(this.metadataFoldingState = h.Collapsed),
							(this.outputFoldingState = h.Collapsed),
							this.D(
								this.editorEventDispatcher.onDidChangeLayout((A) =>
									this.c.fire({ outerWidth: !0 }),
								),
							);
					}
					layoutChange() {
						this.t({ recomputeOutput: !0 });
					}
					s(S) {
						const I = S?.lineHeight ?? 17;
						switch (this.type) {
							case "unchanged":
							case "insert":
								return (
									this.modified.textModel.textBuffer.getLineCount() * I +
									d.$vEc.top +
									d.$vEc.bottom
								);
							case "delete":
							case "modified":
								return (
									this.original.textModel.textBuffer.getLineCount() * I +
									d.$vEc.top +
									d.$vEc.bottom
								);
						}
					}
					t(S) {
						const I = S.width !== void 0 ? S.width : this.g.width,
							T =
								S.editorHeight !== void 0
									? S.editorHeight
									: this.g.editorHeight,
							P =
								S.editorMargin !== void 0
									? S.editorMargin
									: this.g.editorMargin,
							k =
								S.metadataHeight !== void 0
									? S.metadataHeight
									: this.g.metadataHeight,
							L =
								S.cellStatusHeight !== void 0
									? S.cellStatusHeight
									: this.g.cellStatusHeight,
							D =
								S.metadataStatusHeight !== void 0
									? S.metadataStatusHeight
									: this.g.metadataStatusHeight,
							M =
								S.rawOutputHeight !== void 0
									? S.rawOutputHeight
									: this.g.rawOutputHeight,
							N =
								S.outputStatusHeight !== void 0
									? S.outputStatusHeight
									: this.g.outputStatusHeight,
							A = S.bodyMargin !== void 0 ? S.bodyMargin : this.g.bodyMargin,
							R =
								S.outputMetadataHeight !== void 0
									? S.outputMetadataHeight
									: this.g.outputMetadataHeight,
							O =
								S.recomputeOutput ||
								S.rawOutputHeight !== void 0 ||
								S.outputMetadataHeight !== void 0
									? this.y(M, R)
									: this.g.outputTotalHeight,
							B = T + P + L + k + D + O + N + A,
							U = {
								width: I,
								editorHeight: T,
								editorMargin: P,
								metadataHeight: k,
								cellStatusHeight: L,
								metadataStatusHeight: D,
								outputTotalHeight: O,
								outputStatusHeight: N,
								bodyMargin: A,
								rawOutputHeight: M,
								outputMetadataHeight: R,
								totalHeight: B,
								layoutState: a.CellLayoutState.Measured,
							};
						let z = !1;
						const F = {};
						U.width !== this.g.width && ((F.width = !0), (z = !0)),
							U.editorHeight !== this.g.editorHeight &&
								((F.editorHeight = !0), (z = !0)),
							U.editorMargin !== this.g.editorMargin &&
								((F.editorMargin = !0), (z = !0)),
							U.metadataHeight !== this.g.metadataHeight &&
								((F.metadataHeight = !0), (z = !0)),
							U.cellStatusHeight !== this.g.cellStatusHeight &&
								((F.cellStatusHeight = !0), (z = !0)),
							U.metadataStatusHeight !== this.g.metadataStatusHeight &&
								((F.metadataStatusHeight = !0), (z = !0)),
							U.outputTotalHeight !== this.g.outputTotalHeight &&
								((F.outputTotalHeight = !0), (z = !0)),
							U.outputStatusHeight !== this.g.outputStatusHeight &&
								((F.outputStatusHeight = !0), (z = !0)),
							U.bodyMargin !== this.g.bodyMargin &&
								((F.bodyMargin = !0), (z = !0)),
							U.outputMetadataHeight !== this.g.outputMetadataHeight &&
								((F.outputMetadataHeight = !0), (z = !0)),
							U.totalHeight !== this.g.totalHeight &&
								((F.totalHeight = !0), (z = !0)),
							z && ((this.g = U), this.z(F));
					}
					getHeight(S) {
						if (this.g.layoutState === a.CellLayoutState.Uninitialized) {
							const I = this.w(S);
							return this.u(I);
						} else return this.g.totalHeight;
					}
					u(S) {
						return (
							S +
							this.g.editorMargin +
							this.g.metadataHeight +
							this.g.cellStatusHeight +
							this.g.metadataStatusHeight +
							this.g.outputTotalHeight +
							this.g.outputStatusHeight +
							this.g.outputMetadataHeight +
							this.g.bodyMargin
						);
					}
					w(S = 20) {
						return (
							Math.max(
								this.original?.textModel.textBuffer.getLineCount() ?? 1,
								this.modified?.textModel.textBuffer.getLineCount() ?? 1,
							) *
								S +
							24 +
							12 +
							0
						);
					}
					y(S, I) {
						return this.outputFoldingState === h.Collapsed
							? 0
							: this.renderOutput
								? this.isOutputEmpty()
									? 24
									: this.getRichOutputTotalHeight() + I
								: S;
					}
					z(S) {
						this.c.fire(S),
							this.editorEventDispatcher.emit([
								{
									type: r.NotebookDiffViewEventType.CellLayoutChanged,
									source: this.g,
								},
							]);
					}
					getComputedCellContainerWidth(S, I, T) {
						return T
							? S.width -
									2 * u.$yEc +
									(I ? C.$3yb.ENTIRE_DIFF_OVERVIEW_WIDTH : 0) -
									2
							: (S.width -
									2 * u.$yEc +
									(I ? C.$3yb.ENTIRE_DIFF_OVERVIEW_WIDTH : 0)) /
									2 -
									18 -
									2;
					}
					getOutputEditorViewState() {
						return this.q;
					}
					saveOutputEditorViewState(S) {
						this.q = S;
					}
					getMetadataEditorViewState() {
						return this.r;
					}
					saveMetadataEditorViewState(S) {
						this.r = S;
					}
					getSourceEditorViewState() {
						return this.n;
					}
					saveSpirceEditorViewState(S) {
						this.n = S;
					}
				}
				e.$QEc = g;
				class p extends g {
					get originalDocument() {
						return this.otherDocumentTextModel;
					}
					get modifiedDocument() {
						return this.mainDocumentTextModel;
					}
					constructor(S, I, T, P, k, L, D, M) {
						super(S, T, P, k, L, D, M),
							(this.otherDocumentTextModel = I),
							(this.type = k),
							(this.cellFoldingState =
								this.modified.textModel.getValue() !==
								this.original.textModel.getValue()
									? h.Expanded
									: h.Collapsed),
							(this.metadataFoldingState = h.Collapsed),
							(this.outputFoldingState = h.Collapsed),
							this.checkMetadataIfModified() &&
								(this.metadataFoldingState = h.Expanded),
							this.checkIfOutputsModified() &&
								(this.outputFoldingState = h.Expanded),
							this.D(
								this.original.onDidChangeOutputLayout(() => {
									this.t({ recomputeOutput: !0 });
								}),
							),
							this.D(
								this.modified.onDidChangeOutputLayout(() => {
									this.t({ recomputeOutput: !0 });
								}),
							),
							this.D(
								this.modified.textModel.onDidChangeContent(() => {
									if (S.transientOptions.cellContentMetadata) {
										const N = [
												...Object.keys(S.transientOptions.cellContentMetadata),
											],
											A = Object.assign({}, this.modified.metadata),
											R = this.original.metadata;
										for (const O of N) O in R && (A[O] = R[O]);
										this.modified.textModel.metadata = A;
									}
								}),
							);
					}
					checkIfInputModified() {
						return this.original.textModel.getTextBufferHash() ===
							this.modified.textModel.getTextBufferHash()
							? !1
							: { reason: "Cell content has changed" };
					}
					checkIfOutputsModified() {
						if (this.mainDocumentTextModel.transientOptions.transientOutputs)
							return !1;
						const S = s(
							this.original?.outputs ?? [],
							this.modified?.outputs ?? [],
						);
						return S === f.Unchanged
							? !1
							: {
									reason:
										S === f.Metadata ? "Output metadata is changed" : void 0,
									kind: S,
								};
					}
					checkMetadataIfModified() {
						return (0, i.$Aj)(
							l(
								this.mainDocumentTextModel,
								this.original?.metadata || {},
								this.original?.language,
							),
						) !==
							(0, i.$Aj)(
								l(
									this.mainDocumentTextModel,
									this.modified?.metadata ?? {},
									this.modified?.language,
								),
							)
							? { reason: void 0 }
							: !1;
					}
					updateOutputHeight(S, I, T) {
						S === u.DiffSide.Original
							? this.original.updateOutputHeight(I, T)
							: this.modified.updateOutputHeight(I, T);
					}
					getOutputOffsetInContainer(S, I) {
						return S === u.DiffSide.Original
							? this.original.getOutputOffset(I)
							: this.modified.getOutputOffset(I);
					}
					getOutputOffsetInCell(S, I) {
						const T = this.getOutputOffsetInContainer(S, I);
						return (
							this.g.editorHeight +
							this.g.editorMargin +
							this.g.metadataHeight +
							this.g.cellStatusHeight +
							this.g.metadataStatusHeight +
							this.g.outputStatusHeight +
							this.g.bodyMargin / 2 +
							T
						);
					}
					isOutputEmpty() {
						return this.mainDocumentTextModel.transientOptions.transientOutputs
							? !0
							: this.checkIfOutputsModified()
								? !1
								: (this.original?.outputs || []).length === 0;
					}
					getRichOutputTotalHeight() {
						return Math.max(
							this.original.getOutputTotalHeight(),
							this.modified.getOutputTotalHeight(),
						);
					}
					getNestedCellViewModel(S) {
						return S === u.DiffSide.Original ? this.original : this.modified;
					}
					getCellByUri(S) {
						return S.toString() === this.original.uri.toString()
							? this.original
							: this.modified;
					}
				}
				e.$REc = p;
				class o extends g {
					get cellViewModel() {
						return this.type === "insert" ? this.modified : this.original;
					}
					get originalDocument() {
						return this.type === "insert"
							? this.otherDocumentTextModel
							: this.mainDocumentTextModel;
					}
					get modifiedDocument() {
						return this.type === "insert"
							? this.mainDocumentTextModel
							: this.otherDocumentTextModel;
					}
					constructor(S, I, T, P, k, L, D, M) {
						super(S, T, P, k, L, D, M),
							(this.otherDocumentTextModel = I),
							(this.type = k),
							this.D(
								this.cellViewModel.onDidChangeOutputLayout(() => {
									this.t({ recomputeOutput: !0 });
								}),
							);
					}
					checkIfInputModified() {
						return { reason: "Cell content has changed" };
					}
					getNestedCellViewModel(S) {
						return this.type === "insert" ? this.modified : this.original;
					}
					checkIfOutputsModified() {
						return !1;
					}
					checkMetadataIfModified() {
						return !1;
					}
					updateOutputHeight(S, I, T) {
						this.cellViewModel?.updateOutputHeight(I, T);
					}
					getOutputOffsetInContainer(S, I) {
						return this.cellViewModel.getOutputOffset(I);
					}
					getOutputOffsetInCell(S, I) {
						const T = this.cellViewModel.getOutputOffset(I);
						return (
							this.g.editorHeight +
							this.g.editorMargin +
							this.g.metadataHeight +
							this.g.cellStatusHeight +
							this.g.metadataStatusHeight +
							this.g.outputStatusHeight +
							this.g.bodyMargin / 2 +
							T
						);
					}
					isOutputEmpty() {
						return this.mainDocumentTextModel.transientOptions.transientOutputs
							? !0
							: (this.original?.outputs || this.modified?.outputs || [])
									.length === 0;
					}
					getRichOutputTotalHeight() {
						return this.cellViewModel?.getOutputTotalHeight() ?? 0;
					}
					getCellByUri(S) {
						return this.cellViewModel;
					}
				}
				e.$SEc = o;
				var f;
				(function (v) {
					(v[(v.Unchanged = 0)] = "Unchanged"),
						(v[(v.Metadata = 1)] = "Metadata"),
						(v[(v.Other = 2)] = "Other");
				})(f || (e.OutputComparison = f = {}));
				function b(v, S) {
					if ((0, i.$Aj)(v.metadata) === (0, i.$Aj)(S.metadata)) return f.Other;
					for (let I = 0; I < v.outputs.length; I++) {
						const T = v.outputs[I],
							P = S.outputs[I];
						if (
							T.mime !== P.mime ||
							T.data.buffer.length !== P.data.buffer.length
						)
							return f.Other;
						for (let k = 0; k < T.data.buffer.length; k++)
							if (T.data.buffer[k] !== P.data.buffer[k]) return f.Other;
					}
					return f.Metadata;
				}
				function s(v, S) {
					if (v.length !== S.length) return f.Other;
					const I = v.length;
					for (let T = 0; T < I; T++) {
						const P = v[T],
							k = S[T];
						if ((0, i.$Aj)(P.metadata) !== (0, i.$Aj)(k.metadata))
							return f.Metadata;
						if (P.outputs.length !== k.outputs.length) return f.Other;
						for (let L = 0; L < P.outputs.length; L++) {
							const D = P.outputs[L],
								M = k.outputs[L];
							if (
								D.mime !== M.mime ||
								D.data.buffer.length !== M.data.buffer.length
							)
								return f.Other;
							for (let N = 0; N < D.data.buffer.length; N++)
								if (D.data.buffer[N] !== M.data.buffer[N]) return f.Other;
						}
					}
					return f.Unchanged;
				}
				function l(v, S, I) {
					let T = {};
					if (v) {
						const L = v.transientOptions.transientCellMetadata,
							D = new Set([...Object.keys(S)]);
						for (const M of D) L[M] || (T[M] = S[M]);
					} else T = S;
					const P = { language: I, ...T };
					return I && (P.language = I), (0, w.$no)(P, {});
				}
				function y(v) {
					if (!v.length) return null;
					const I = v[0].mime;
					return v.find((P) => P.mime !== I)
						? null
						: v.map((P) => P.data.toString()).join("");
				}
				function $(v) {
					if (v.length === 1) {
						const S = y(v[0].outputs);
						if (S) return S;
					}
					return JSON.stringify(
						v.map((S) => ({
							metadata: S.metadata,
							outputItems: S.outputs.map((I) => ({
								mimeType: I.mime,
								data: I.data.toString(),
							})),
						})),
						void 0,
						"	",
					);
				}
			},
		),
		