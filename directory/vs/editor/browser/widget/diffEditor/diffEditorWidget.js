import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/arraysFind.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/observableInternal/derived.js';
import '../../editorExtensions.js';
import '../../services/codeEditorService.js';
import '../../stableEditorScroll.js';
import '../codeEditor/codeEditorWidget.js';
import './components/accessibleDiffViewer.js';
import './components/diffEditorDecorations.js';
import './components/diffEditorSash.js';
import './components/diffEditorViewZones/diffEditorViewZones.js';
import './features/gutterFeature.js';
import './features/hideUnchangedRegionsFeature.js';
import './features/movedBlocksLinesFeature.js';
import './features/overviewRulerFeature.js';
import './features/revertButtonsFeature.js';
import './utils.js';
import '../../../../base/common/hotReloadHelpers.js';
import '../../../../platform/observable/common/platformObservableUtils.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/cursorEvents.js';
import '../../../common/editorCommon.js';
import '../../../common/editorContextKeys.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/progress/common/progress.js';
import './components/diffEditorEditors.js';
import './delegatingEditorImpl.js';
import './diffEditorOptions.js';
import './diffEditorViewModel.js';
import '../../../../css!vs/editor/browser/widget/diffEditor/style.js';
define(
			de[309],
			he([
				1, 0, 7, 214, 29, 6, 3, 77, 319, 46, 65, 491, 206, 1660, 2902, 1586,
				1216, 2893, 1641, 1587, 1663, 2759, 370, 755, 326, 48, 17, 248, 98, 71,
				184, 8, 5, 128, 84, 2846, 2557, 1680, 954, 2281,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3yb = void 0);
				let z = class extends O.$2yb {
					static {
						this.ENTIRE_DIFF_OVERVIEW_WIDTH = s.$$xb.ENTIRE_DIFF_OVERVIEW_WIDTH;
					}
					get onDidContentSizeChange() {
						return this.L.onDidContentSizeChange;
					}
					get collapseUnchangedRegions() {
						return this.J.hideUnchangedRegions.get();
					}
					constructor(H, q, V, G, K, J, W, X) {
						super(),
							(this.P = H),
							(this.Q = G),
							(this.R = K),
							(this.S = W),
							(this.U = X),
							(this.j = (0, t.h)(
								"div.monaco-diff-editor.side-by-side",
								{ style: { position: "relative", height: "100%" } },
								[
									(0, t.h)("div.editor.original@original", {
										style: { position: "absolute", height: "100%" },
									}),
									(0, t.h)("div.editor.modified@modified", {
										style: { position: "absolute", height: "100%" },
									}),
									(0, t.h)("div.accessibleDiffViewer@accessibleDiffViewer", {
										style: { position: "absolute", height: "100%" },
									}),
								],
							)),
							(this.n = this.D((0, d.disposableObservableValue)(this, void 0))),
							(this.q = (0, d.derived)(this, (oe) => this.n.read(oe)?.object)),
							(this.onDidChangeModel = E.Event.fromObservableLight(this.q)),
							(this.t = this.D(this.Q.createScoped(this.P))),
							(this.u = this.D(this.R.createChild(new N.$Ki([D.$6j, this.t])))),
							(this.F = (0, d.observableValue)(this, void 0)),
							(this.custom = !1),
							(this.G = (0, d.observableValue)(this, !1)),
							(this.H = (0, d.derived)(this, (oe) =>
								this.J.onlyShowAccessibleDiffViewer.read(oe)
									? !0
									: this.G.read(oe),
							)),
							(this.N = (0, d.observableValue)(this, void 0)),
							(this.Y = (0, d.derived)(this, (oe) => {
								const ae = this.y.width.read(oe),
									pe = this.y.height.read(oe);
								this.y.automaticLayout
									? (this.j.root.style.height = "100%")
									: (this.j.root.style.height = pe + "px");
								const $e = this.C.read(oe),
									ye = this.O.read(oe),
									ue = ye?.width.read(oe) ?? 0,
									fe = this.M.read(oe)?.width ?? 0;
								let me, ve, ge, be, Ce;
								if (!!$e) {
									const Fe = $e.sashLeft.read(oe),
										Oe = this.N.read(oe)?.width.read(oe) ?? 0;
									(me = 0),
										(ve = Fe - ue - Oe),
										(Ce = Fe - ue),
										(ge = Fe),
										(be = ae - ge - fe);
								} else {
									Ce = 0;
									const Fe = this.J.inlineViewHideOriginalLineNumbers.read(oe);
									(me = ue),
										Fe
											? (ve = 0)
											: (ve = Math.max(
													5,
													this.L.originalObs.layoutInfoDecorationsLeft.read(oe),
												)),
										(ge = ue + ve),
										(be = ae - ge - fe);
								}
								return (
									(this.j.original.style.left = me + "px"),
									(this.j.original.style.width = ve + "px"),
									this.L.original.layout({ width: ve, height: pe }, !0),
									ye?.layout(Ce),
									(this.j.modified.style.left = ge + "px"),
									(this.j.modified.style.width = be + "px"),
									this.X(),
									this.L.modified.layout({ width: be, height: pe }, !0),
									{
										modifiedEditor: this.L.modified.getLayoutInfo(),
										originalEditor: this.L.original.getLayoutInfo(),
									}
								);
							})),
							(this.ab = this.q.map((oe, ae) => oe?.diff.read(ae))),
							(this.onDidUpdateDiff = E.Event.fromObservableLight(this.ab)),
							J.willCreateDiffEditor(),
							this.t.createKey("isInDiffEditor", !0),
							this.P.appendChild(this.j.root),
							this.D((0, C.$Yc)(() => this.j.root.remove())),
							(this.y = this.D(new y.$Awb(this.j.root, q.dimension))),
							this.y.setAutomaticLayout(q.automaticLayout ?? !1),
							(this.J = this.u.createInstance(B.$6xb, q)),
							this.D(
								(0, d.autorun)((oe) => {
									this.J.setWidth(this.y.width.read(oe));
								}),
							),
							this.t.createKey(
								k.EditorContextKeys.isEmbeddedDiffEditor.key,
								!1,
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.isEmbeddedDiffEditor,
									this.t,
									(oe) => this.J.isInEmbeddedEditor.read(oe),
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.comparingMovedCode,
									this.t,
									(oe) => !!this.q.read(oe)?.movedTextToCompare.read(oe),
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys
										.diffEditorRenderSideBySideInlineBreakpointReached,
									this.t,
									(oe) => this.J.couldShowInlineViewBecauseOfSize.read(oe),
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.diffEditorInlineMode,
									this.t,
									(oe) => !this.J.renderSideBySide.read(oe),
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.hasChanges,
									this.t,
									(oe) =>
										(this.q.read(oe)?.diff.read(oe)?.mappings.length ?? 0) > 0,
								),
							),
							(this.L = this.D(
								this.u.createInstance(
									R.$_xb,
									this.j.original,
									this.j.modified,
									this.J,
									V,
									(oe, ae, pe, $e) => this.W(oe, ae, pe, $e),
								),
							)),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.diffEditorOriginalWritable,
									this.t,
									(oe) => this.J.originalEditable.read(oe),
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.diffEditorModifiedWritable,
									this.t,
									(oe) => !this.J.readOnly.read(oe),
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.diffEditorOriginalUri,
									this.t,
									(oe) => this.q.read(oe)?.model.original.uri.toString() ?? "",
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.diffEditorModifiedUri,
									this.t,
									(oe) => this.q.read(oe)?.model.modified.uri.toString() ?? "",
								),
							),
							(this.M = (0, m.$Yd)(this, (oe) =>
								this.J.renderOverviewRuler.read(oe)
									? this.u.createInstance(
											(0, $.$Tpb)(s.$$xb, oe),
											this.L,
											this.j.root,
											this.q,
											this.y.width,
											this.y.height,
											this.Y.map((ae) => ae.modifiedEditor),
										)
									: void 0,
							).recomputeInitiallyAndOnChange(this.B));
						const Y = {
							height: this.y.height,
							width: this.y.width.map(
								(oe, ae) => oe - (this.M.read(ae)?.width ?? 0),
							),
						};
						(this.z = new g.$eyb(this.J, Y)),
							(this.C = (0, m.$Yd)(this, (oe) => {
								const ae = this.J.renderSideBySide.read(oe);
								return (
									this.j.root.classList.toggle("side-by-side", ae),
									ae
										? new g.$fyb(
												this.j.root,
												Y,
												this.J.enableSplitViewResizing,
												this.F,
												this.z.sashLeft,
												() => this.z.resetSash(),
											)
										: void 0
								);
							}).recomputeInitiallyAndOnChange(this.B));
						const ie = (0, m.$Yd)(this, (oe) =>
							this.u.createInstance(
								(0, $.$Tpb)(f.$Yyb, oe),
								this.L,
								this.q,
								this.J,
							),
						).recomputeInitiallyAndOnChange(this.B);
						(0, m.$Yd)(this, (oe) =>
							this.u.createInstance(
								(0, $.$Tpb)(n.$dyb, oe),
								this.L,
								this.q,
								this.J,
								this,
							),
						).recomputeInitiallyAndOnChange(this.B);
						const ne = new Set(),
							ee = new Set();
						let _ = !1;
						const te = (0, m.$Yd)(this, (oe) =>
								this.u.createInstance(
									(0, $.$Tpb)(p.$3xb, oe),
									(0, t.getWindow)(this.P),
									this.L,
									this.q,
									this.J,
									this,
									() => _ || ie.get().isUpdatingHiddenAreas,
									ne,
									ee,
								),
							).recomputeInitiallyAndOnChange(this.B),
							Q = (0, d.derived)(this, (oe) => {
								const ae = te.read(oe).viewZones.read(oe).orig,
									pe = ie.read(oe).viewZones.read(oe).origViewZones;
								return ae.concat(pe);
							}),
							Z = (0, d.derived)(this, (oe) => {
								const ae = te.read(oe).viewZones.read(oe).mod,
									pe = ie.read(oe).viewZones.read(oe).modViewZones;
								return ae.concat(pe);
							});
						this.D(
							(0, y.$Hwb)(
								this.L.original,
								Q,
								(oe) => {
									_ = oe;
								},
								ne,
							),
						);
						let se;
						this.D(
							(0, y.$Hwb)(
								this.L.modified,
								Z,
								(oe) => {
									(_ = oe),
										_
											? (se = a.$uwb.capture(this.L.modified))
											: (se?.restore(this.L.modified), (se = void 0));
								},
								ee,
							),
						),
							(this.I = (0, m.$Yd)(this, (oe) =>
								this.u.createInstance(
									(0, $.$Tpb)(c.$ayb, oe),
									this.j.accessibleDiffViewer,
									this.H,
									(ae, pe) => this.G.set(ae, pe),
									this.J.onlyShowAccessibleDiffViewer.map((ae) => !ae),
									this.y.width,
									this.y.height,
									this.q.map((ae, pe) =>
										ae?.diff
											.read(pe)
											?.mappings.map(($e) => $e.lineRangeMapping),
									),
									new c.$byb(this.L),
								),
							).recomputeInitiallyAndOnChange(this.B));
						const re = this.H.map((oe) => (oe ? "hidden" : "visible"));
						this.D((0, y.$Gwb)(this.j.modified, { visibility: re })),
							this.D((0, y.$Gwb)(this.j.original, { visibility: re })),
							this.Z(),
							J.addDiffEditor(this),
							(this.O = (0, m.$Yd)(this, (oe) =>
								this.J.shouldRenderGutterMenu.read(oe)
									? this.u.createInstance(
											(0, $.$Tpb)(o.$Xyb, oe),
											this.j.root,
											this.q,
											this.L,
											this.J,
											this.z,
											this.F,
										)
									: void 0,
							)),
							this.D((0, d.recomputeInitiallyAndOnChange)(this.Y)),
							(0, m.$Yd)(
								this,
								(oe) =>
									new ((0, $.$Tpb)(b.$cyb, oe))(
										this.j.root,
										this.q,
										this.Y.map((ae) => ae.originalEditor),
										this.Y.map((ae) => ae.modifiedEditor),
										this.L,
									),
							).recomputeInitiallyAndOnChange(this.B, (oe) => {
								this.N.set(oe, void 0);
							}),
							this.D(
								E.Event.runAndSubscribe(
									this.L.modified.onDidChangeCursorPosition,
									(oe) => this.cb(oe, !0),
								),
							),
							this.D(
								E.Event.runAndSubscribe(
									this.L.original.onDidChangeCursorPosition,
									(oe) => this.cb(oe, !1),
								),
							);
						const le = this.q.map(this, (oe, ae) => {
							if (oe)
								return (
									oe.diff.read(ae) === void 0 && !oe.isDiffUpToDate.read(ae)
								);
						});
						this.D(
							(0, d.autorunWithStore)((oe, ae) => {
								if (le.read(oe) === !0) {
									const pe = this.U.show(!0, 1e3);
									ae.add((0, C.$Yc)(() => pe.done()));
								}
							}),
						),
							this.X(),
							this.D(
								(0, d.autorunWithStore)((oe, ae) => {
									ae.add(
										new ((0, $.$Tpb)(l.$Zyb, oe))(this.L, this.q, this.J, this),
									);
								}),
							),
							this.D(
								(0, d.autorunWithStore)((oe, ae) => {
									const pe = this.q.read(oe);
									if (pe)
										for (const $e of [pe.model.original, pe.model.modified])
											ae.add(
												$e.onWillDispose((ye) => {
													(0, w.$4)(
														new w.$gb(
															"TextModel got disposed before DiffEditorWidget model got reset",
														),
													),
														this.setModel(null);
												}),
											);
								}),
							),
							this.D(
								(0, d.autorun)((oe) => {
									this.J.setModel(this.q.read(oe));
								}),
							);
					}
					getViewWidth() {
						return this.y.width.get();
					}
					getContentHeight() {
						return this.L.modified.getContentHeight();
					}
					W(H, q, V, G) {
						return H.createInstance(h.$rwb, q, V, G);
					}
					X() {
						if (this.custom) {
							this.j.modified.style.left = "0px";
							const H = this.P.querySelectorAll(".line-delete");
							for (const q of H) {
								const V = q;
								(V.style.left = "-2.5px"), (V.style.lineHeight = "16px");
							}
							this.getOriginalEditor().updateOptions({
								scrollbar: {
									vertical: "hidden",
									verticalScrollbarSize: 0,
									horizontal: "hidden",
									handleMouseWheel: !1,
									alwaysConsumeMouseWheel: !1,
									horizontalScrollbarSize: 0,
								},
							});
						}
					}
					Z() {
						const H = r.EditorExtensionsRegistry.getDiffEditorContributions();
						for (const q of H)
							try {
								this.D(this.u.createInstance(q.ctor, this));
							} catch (V) {
								(0, w.$4)(V);
							}
					}
					get g() {
						return this.L.modified;
					}
					getEditorType() {
						return P.EditorType.IDiffEditor;
					}
					onVisible() {
						this.L.original.onVisible(), this.L.modified.onVisible();
					}
					onHide() {
						this.L.original.onHide(), this.L.modified.onHide();
					}
					layout(H) {
						this.X(), this.y.observe(H);
					}
					hasTextFocus() {
						return (
							this.L.original.hasTextFocus() || this.L.modified.hasTextFocus()
						);
					}
					saveViewState() {
						const H = this.L.original.saveViewState(),
							q = this.L.modified.saveViewState();
						return {
							original: H,
							modified: q,
							modelState: this.q.get()?.serializeState(),
						};
					}
					restoreViewState(H) {
						if (H && H.original && H.modified) {
							const q = H;
							this.L.original.restoreViewState(q.original),
								this.L.modified.restoreViewState(q.modified),
								q.modelState &&
									this.q.get()?.restoreSerializedState(q.modelState);
						}
					}
					handleInitialized() {
						this.L.original.handleInitialized(),
							this.L.modified.handleInitialized();
					}
					createViewModel(H) {
						return this.u.createInstance(U.$7xb, H, this.J);
					}
					getModel() {
						return this.q.get()?.model ?? null;
					}
					setModel(H) {
						const q = H
							? "model" in H
								? y.$Lwb.create(H).createNewRef(this)
								: y.$Lwb.create(this.createViewModel(H), this)
							: null;
						this.setDiffModel(q);
					}
					setDiffModel(H, q) {
						const V = this.q.get();
						!H && V && this.I.get().close(),
							this.q.get() !== H?.object &&
								(0, d.subtransaction)(q, (G) => {
									const K = H?.object;
									d.observableFromEvent.batchEventsGlobally(G, () => {
										this.L.original.setModel(K ? K.model.original : null),
											this.L.modified.setModel(K ? K.model.modified : null);
									});
									const J = this.n.get()?.createNewRef(this);
									this.n.set(H?.createNewRef(this), G),
										setTimeout(() => {
											J?.dispose();
										}, 0);
								});
					}
					updateOptions(H) {
						this.J.updateOptions(H);
					}
					getContainerDomNode() {
						return this.P;
					}
					getOriginalEditor() {
						return this.L.original;
					}
					getModifiedEditor() {
						return this.L.modified;
					}
					setBoundarySashes(H) {
						this.F.set(H, void 0);
					}
					get ignoreTrimWhitespace() {
						return this.J.ignoreTrimWhitespace.get();
					}
					get maxComputationTime() {
						return this.J.maxComputationTimeMs.get();
					}
					get renderSideBySide() {
						return this.J.renderSideBySide.get();
					}
					getLineChanges() {
						const H = this.q.get()?.diff.get();
						return H ? F(H) : null;
					}
					getDiffComputationResult() {
						const H = this.q.get()?.diff.get();
						return H
							? {
									changes: this.getLineChanges(),
									changes2: H.mappings.map((q) => q.lineRangeMapping),
									identical: H.identical,
									quitEarly: H.quitEarly,
								}
							: null;
					}
					revert(H) {
						const q = this.q.get();
						!q ||
							!q.isDiffUpToDate.get() ||
							this.L.modified.executeEdits("diffEditor", [
								{
									range: H.modified.toExclusiveRange(),
									text: q.model.original.getValueInRange(
										H.original.toExclusiveRange(),
									),
								},
							]);
					}
					revertRangeMappings(H) {
						const q = this.q.get();
						if (!q || !q.isDiffUpToDate.get()) return;
						const V = H.map((G) => ({
							range: G.modifiedRange,
							text: q.model.original.getValueInRange(G.originalRange),
						}));
						this.L.modified.executeEdits("diffEditor", V);
					}
					bb(H) {
						this.L.modified.setPosition(
							new S.$hL(H.lineRangeMapping.modified.startLineNumber, 1),
						),
							this.L.modified.revealRangeInCenter(
								H.lineRangeMapping.modified.toExclusiveRange(),
							);
					}
					goToDiff(H) {
						const q = this.q.get()?.diff.get()?.mappings;
						if (!q || q.length === 0) return;
						const V = this.L.modified.getPosition().lineNumber;
						let G;
						H === "next"
							? (G =
									q.find(
										(K) => K.lineRangeMapping.modified.startLineNumber > V,
									) ?? q[0])
							: (G =
									(0, i.$jb)(
										q,
										(K) => K.lineRangeMapping.modified.startLineNumber < V,
									) ?? q[q.length - 1]),
							this.bb(G),
							G.lineRangeMapping.modified.isEmpty
								? this.S.playSignal(L.$Twb.diffLineDeleted, {
										source: "diffEditor.goToDiff",
									})
								: G.lineRangeMapping.original.isEmpty
									? this.S.playSignal(L.$Twb.diffLineInserted, {
											source: "diffEditor.goToDiff",
										})
									: G &&
										this.S.playSignal(L.$Twb.diffLineModified, {
											source: "diffEditor.goToDiff",
										});
					}
					revealFirstDiff() {
						const H = this.q.get();
						H &&
							this.waitForDiff().then(() => {
								const q = H.diff.get()?.mappings;
								!q || q.length === 0 || this.bb(q[0]);
							});
					}
					accessibleDiffViewerNext() {
						this.I.get().next();
					}
					accessibleDiffViewerPrev() {
						this.I.get().prev();
					}
					async waitForDiff() {
						const H = this.q.get();
						H && (await H.waitForDiff());
					}
					mapToOtherSide() {
						const H = this.L.modified.hasWidgetFocus(),
							q = H ? this.L.modified : this.L.original,
							V = H ? this.L.original : this.L.modified;
						let G;
						const K = q.getSelection();
						if (K) {
							const J = this.q
								.get()
								?.diff.get()
								?.mappings.map((W) =>
									H ? W.lineRangeMapping.flip() : W.lineRangeMapping,
								);
							if (J) {
								const W = (0, y.$Jwb)(K.getStartPosition(), J),
									X = (0, y.$Jwb)(K.getEndPosition(), J);
								G = I.$iL.plusRange(W, X);
							}
						}
						return { destination: V, destinationSelection: G };
					}
					switchSide() {
						const { destination: H, destinationSelection: q } =
							this.mapToOtherSide();
						H.focus(), q && H.setSelection(q);
					}
					exitCompareMove() {
						const H = this.q.get();
						H && H.movedTextToCompare.set(void 0, void 0);
					}
					collapseAllUnchangedRegions() {
						const H = this.q.get()?.unchangedRegions.get();
						H &&
							(0, d.transaction)((q) => {
								for (const V of H) V.collapseAll(q);
							});
					}
					showAllUnchangedRegions() {
						const H = this.q.get()?.unchangedRegions.get();
						H &&
							(0, d.transaction)((q) => {
								for (const V of H) V.showAll(q);
							});
					}
					cb(H, q) {
						if (H?.reason === T.CursorChangeReason.Explicit) {
							const V = this.q
								.get()
								?.diff.get()
								?.mappings.find((G) =>
									q
										? G.lineRangeMapping.modified.contains(
												H.position.lineNumber,
											)
										: G.lineRangeMapping.original.contains(
												H.position.lineNumber,
											),
								);
							V?.lineRangeMapping.modified.isEmpty
								? this.S.playSignal(L.$Twb.diffLineDeleted, {
										source: "diffEditor.cursorPositionChanged",
									})
								: V?.lineRangeMapping.original.isEmpty
									? this.S.playSignal(L.$Twb.diffLineInserted, {
											source: "diffEditor.cursorPositionChanged",
										})
									: V &&
										this.S.playSignal(L.$Twb.diffLineModified, {
											source: "diffEditor.cursorPositionChanged",
										});
						}
					}
				};
				(e.$3yb = z),
					(e.$3yb = z =
						Ne(
							[
								j(3, D.$6j),
								j(4, M.$Li),
								j(5, u.$dtb),
								j(6, L.$Owb),
								j(7, A.$bO),
							],
							z,
						));
				function F(x) {
					return x.mappings.map((H) => {
						const q = H.lineRangeMapping;
						let V,
							G,
							K,
							J,
							W = q.innerChanges;
						return (
							q.original.isEmpty
								? ((V = q.original.startLineNumber - 1), (G = 0), (W = void 0))
								: ((V = q.original.startLineNumber),
									(G = q.original.endLineNumberExclusive - 1)),
							q.modified.isEmpty
								? ((K = q.modified.startLineNumber - 1), (J = 0), (W = void 0))
								: ((K = q.modified.startLineNumber),
									(J = q.modified.endLineNumberExclusive - 1)),
							{
								originalStartLineNumber: V,
								originalEndLineNumber: G,
								modifiedStartLineNumber: K,
								modifiedEndLineNumber: J,
								charChanges: W?.map((X) => ({
									originalStartLineNumber: X.originalRange.startLineNumber,
									originalStartColumn: X.originalRange.startColumn,
									originalEndLineNumber: X.originalRange.endLineNumber,
									originalEndColumn: X.originalRange.endColumn,
									modifiedStartLineNumber: X.modifiedRange.startLineNumber,
									modifiedStartColumn: X.modifiedRange.startColumn,
									modifiedEndLineNumber: X.modifiedRange.endLineNumber,
									modifiedEndColumn: X.modifiedRange.endColumn,
								})),
							}
						);
					});
				}
			},
		),
		