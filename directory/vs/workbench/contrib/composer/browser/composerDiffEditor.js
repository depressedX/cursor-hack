import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/types.js';
import '../../../browser/parts/editor/textEditor.js';
import '../../../common/editor.js';
import '../../../common/editor/editorOptions.js';
import '../../../common/editor/diffEditorInput.js';
import '../../../common/editor/textDiffEditorModel.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../base/common/uri.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/resources.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/files/common/files.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../base/common/stopwatch.js';
import '../../../../editor/browser/widget/diffEditor/diffEditorWidget.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/contrib/aiFullFilePromptBar/browser/aiFullFilePromptBarContribution.js';
import '../../../../editor/contrib/cHintLine/browser/hintLineContributions.js';
import '../../../../editor/contrib/inlineDiffs/browser/controllers/inlineDiffController.js';
import '../../../../editor/contrib/cHover/browser/hoverContributions.js';
import '../../../../platform/tracing/common/tracing.js';
define(
			de[4371],
			he([
				1, 0, 4, 82, 28, 718, 44, 549, 296, 1226, 32, 21, 125, 5, 35, 85, 98,
				30, 9, 66, 18, 116, 8, 19, 7, 22, 131, 162, 309, 46, 1983, 1348, 851,
				2003, 216,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*objects*/,
				w /*types*/,
				E /*textEditor*/,
				C /*editor*/,
				d /*editorOptions*/,
				m /*diffEditorInput*/,
				r /*textDiffEditorModel*/,
				u /*telemetry*/,
				a /*storage*/,
				h /*textResourceConfiguration*/,
				c /*instantiation*/,
				n /*themeService*/,
				g /*textfiles*/,
				p /*editorCommon*/,
				o /*platform*/,
				f /*uri*/,
				b /*editorGroupsService*/,
				s /*editorService*/,
				l /*editor*/,
				y /*contextkey*/,
				$ /*resources*/,
				v /*dom*/,
				S /*files*/,
				I /*preferences*/,
				T /*stopwatch*/,
				P /*diffEditorWidget*/,
				k /*editorExtensions*/,
				L /*aiFullFilePromptBarContribution*/,
				D /*hintLineContributions*/,
				M /*inlineDiffController*/,
				N /*hoverContributions*/,
				A /*tracing*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerDiffEditor = e.COMPOSER_DIFF_EDITOR_ID = void 0),
					(e.COMPOSER_DIFF_EDITOR_ID = "workbench.editors.composerDiffEditor");
				let R = class extends E.$BVb {
					static {
						this.ID = e.COMPOSER_DIFF_EDITOR_ID;
					}
					get scopedContextKeyService() {
						if (!this.diffEditorControl) return;
						const B = this.diffEditorControl.getOriginalEditor(),
							U = this.diffEditorControl.getModifiedEditor();
						return (B.hasTextFocus() ? B : U).invokeWithinContext((z) =>
							z.get(y.$6j),
						);
					}
					constructor(B, U, z, F, x, H, q, V, G, K) {
						super(e.COMPOSER_DIFF_EDITOR_ID, B, U, z, F, x, q, H, V, G),
							(this.preferencesService = K),
							(this.diffEditorControl = void 0),
							(this.inputLifecycleStopWatch = void 0),
							(this._previousViewModel = null);
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(5119, null);
					}
					Lb(B, U) {
						const z =
							k.EditorExtensionsRegistry.getEditorContributions().filter(
								(F) =>
									F.id !== L.$qlc.ID &&
									F.id !== D.$Plc.ID &&
									F.id !== M.$Ddc.ID &&
									F.id !== N.$slc.ID,
							);
						this.diffEditorControl = this.D(
							this.m.createInstance(P.$3yb, B, U, {
								originalEditor: { isSimpleWidget: !0, contributions: [] },
								modifiedEditor: { contributions: z },
							}),
						);
					}
					Mb(B) {
						this.diffEditorControl?.updateOptions(B);
					}
					Nb() {
						return this.diffEditorControl?.getModifiedEditor();
					}
					async setInput(B, U, z, F) {
						this._previousViewModel &&
							(this._previousViewModel.dispose(),
							(this._previousViewModel = null)),
							(this.inputLifecycleStopWatch = void 0),
							await super.setInput(B, U, z, F);
						try {
							const x = await B.resolve();
							if (F.isCancellationRequested) return;
							if (!(x instanceof r.$FVb)) {
								this.openAsBinary(B, U);
								return;
							}
							const H = (0, w.$wg)(this.diffEditorControl),
								q = x,
								V = q.textDiffEditorModel
									? H.createViewModel(q.textDiffEditorModel)
									: null;
							(this._previousViewModel = V),
								await V?.waitForDiff(),
								H.setModel(V);
							let G = !1;
							(0, C.$C1)(U?.viewState) ||
								(G = this.restoreTextDiffEditorViewState(B, U, z, H));
							let K = !1;
							U &&
								(K = (0, d.applyTextEditorOptions)(
									U,
									H,
									p.ScrollType.Immediate,
								)),
								!K && !G && H.revealFirstDiff(),
								H.updateOptions({
									...this.Gb(q.modifiedModel?.isReadonly()),
									originalEditable: !q.originalModel?.isReadonly(),
								}),
								H.handleInitialized(),
								(this.inputLifecycleStopWatch = new T.$le(!1));
						} catch (x) {
							await this.handleSetInputError(x, B, U);
						}
					}
					async handleSetInputError(B, U, z) {
						if (this.isFileBinaryError(B)) return this.openAsBinary(U, z);
						if (
							B.fileOperationResult === S.FileOperationResult.FILE_TOO_LARGE
						) {
							let F;
							throw (
								(B instanceof S.$Hl
									? (F = (0, t.localize)(5120, null, S.$Tl.formatSize(B.size)))
									: (F = (0, t.localize)(5121, null)),
								(0, C.$u1)(this.group, U, z, F, this.preferencesService))
							);
						}
						throw B;
					}
					restoreTextDiffEditorViewState(B, U, z, F) {
						const x = this.jb(B, z);
						return x
							? (U?.selection && x.modified && (x.modified.cursorState = []),
								F.restoreViewState(x),
								U?.revealIfVisible && F.revealFirstDiff(),
								!0)
							: !1;
					}
					openAsBinary(B, U) {
						const z = B.original,
							F = B.modified,
							x = this.m.createInstance(
								m.$GVb,
								B.getName(),
								B.getDescription(),
								z,
								F,
								!0,
							),
							H = o.$Io.as(C.$a1.EditorFactory).getFileEditorFactory();
						H.isFileEditor(z) && z.setForceOpenAsBinary(),
							H.isFileEditor(F) && F.setForceOpenAsBinary(),
							this.group.replaceEditors([
								{
									editor: B,
									replacement: x,
									options: {
										...U,
										activation: l.EditorActivation.PRESERVE,
										pinned: this.group.isPinned(B),
										sticky: this.group.isSticky(B),
									},
								},
							]);
					}
					setOptions(B) {
						super.setOptions(B),
							B &&
								(0, d.applyTextEditorOptions)(
									B,
									(0, w.$wg)(this.diffEditorControl),
									p.ScrollType.Smooth,
								);
					}
					zb(B, U) {
						return super.zb(B, U)
							? !0
							: B.affectsConfiguration(U, "diffEditor") ||
									B.affectsConfiguration(
										U,
										"accessibility.verbosity.diffEditor",
									);
					}
					Bb(B) {
						const U = super.Bb(B);
						if ((0, w.$ng)(B.diffEditor)) {
							const F = (0, i.$vo)(B.diffEditor);
							(F.diffCodeLens = F.codeLens),
								delete F.codeLens,
								(F.diffWordWrap = F.wordWrap),
								delete F.wordWrap,
								Object.assign(U, F);
						}
						U.hideUnchangedRegions = {
							enabled: !0,
							revealLineCount: 10,
							minimumLineCount: 10,
							contextLineCount: 10,
						};
						const z = B.accessibility?.verbosity?.diffEditor ?? !1;
						return (U.accessibilityVerbose = z), U;
					}
					Hb(B) {
						return {
							...super.Hb(B),
							...this.Gb(this.input?.isReadonly()),
							originalEditable:
								this.input instanceof m.$GVb &&
								!this.input.original.isReadonly(),
							lineDecorationsWidth: "2ch",
						};
					}
					Fb(B) {
						B instanceof m.$GVb
							? this.diffEditorControl?.updateOptions({
									...this.Gb(B.isReadonly()),
									originalEditable: !B.original.isReadonly(),
								})
							: super.Fb(B);
					}
					isFileBinaryError(B) {
						return Array.isArray(B)
							? B.some((z) => this.isFileBinaryError(z))
							: B.textFileOperationResult ===
									g.TextFileOperationResult.FILE_IS_BINARY;
					}
					clearInput() {
						this._previousViewModel &&
							(this._previousViewModel.dispose(),
							(this._previousViewModel = null)),
							super.clearInput();
						const B = this.inputLifecycleStopWatch?.elapsed();
						(this.inputLifecycleStopWatch = void 0),
							typeof B == "number" &&
								this.logInputLifecycleTelemetry(
									B,
									this.getControl()?.getModel()?.modified?.getLanguageId(),
								),
							this.diffEditorControl?.setModel(null),
							this.input?.dispose();
					}
					logInputLifecycleTelemetry(B, U) {
						let z = !1;
						this.diffEditorControl instanceof P.$3yb &&
							(z = this.diffEditorControl.collapseUnchangedRegions),
							this.Q.publicLog2("diffEditor.editorVisibleTime", {
								editorVisibleTimeMs: B,
								languageId: U ?? "",
								collapseUnchangedRegions: z,
							});
					}
					getControl() {
						return this.diffEditorControl;
					}
					focus() {
						super.focus(), this.diffEditorControl?.focus();
					}
					hasFocus() {
						return this.diffEditorControl?.hasTextFocus() || super.hasFocus();
					}
					Z(B) {
						super.Z(B),
							B
								? this.diffEditorControl?.onVisible()
								: this.diffEditorControl?.onHide();
					}
					layout(B) {
						this.diffEditorControl?.layout(B);
					}
					setBoundarySashes(B) {
						this.diffEditorControl?.setBoundarySashes(B);
					}
					nb(B) {
						return B instanceof m.$GVb;
					}
					mb(B) {
						if (!this.diffEditorControl) return;
						const U = this.diffEditorControl.getModel();
						if (!U || !U.modified || !U.original) return;
						const z = this.pb(U);
						if (z && (0, $.$gh)(z, B))
							return this.diffEditorControl.saveViewState() ?? void 0;
					}
					pb(B) {
						let U, z;
						if (
							(B instanceof m.$GVb
								? ((U = B.original.resource), (z = B.modified.resource))
								: (0, C.$r1)(B) || ((U = B.original.uri), (z = B.modified.uri)),
							!(!U || !z))
						)
							return f.URI.from({
								scheme: "diff",
								path: `${(0, v.$Ehb)(U.toString())}${(0, v.$Ehb)(z.toString())}`,
							});
					}
				};
				(e.ComposerDiffEditor = R),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.createEditorControl")],
						R.prototype,
						"Lb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.updateEditorControlOptions")],
						R.prototype,
						"Mb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.getMainControl")],
						R.prototype,
						"Nb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.setInput")],
						R.prototype,
						"setInput",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.handleSetInputError")],
						R.prototype,
						"handleSetInputError",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.restoreTextDiffEditorViewState")],
						R.prototype,
						"restoreTextDiffEditorViewState",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.openAsBinary")],
						R.prototype,
						"openAsBinary",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.setOptions")],
						R.prototype,
						"setOptions",
						null,
					),
					Ne(
						[
							(0, A.$KOb)(
								"ComposerDiffEditor.shouldHandleConfigurationChangeEvent",
							),
						],
						R.prototype,
						"zb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.computeConfiguration")],
						R.prototype,
						"Bb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.getConfigurationOverrides")],
						R.prototype,
						"Hb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.updateReadonly")],
						R.prototype,
						"Fb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.clearInput")],
						R.prototype,
						"clearInput",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.logInputLifecycleTelemetry")],
						R.prototype,
						"logInputLifecycleTelemetry",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.getControl")],
						R.prototype,
						"getControl",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.focus")],
						R.prototype,
						"focus",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.hasFocus")],
						R.prototype,
						"hasFocus",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.setEditorVisible")],
						R.prototype,
						"Z",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.layout")],
						R.prototype,
						"layout",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.setBoundarySashes")],
						R.prototype,
						"setBoundarySashes",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.tracksEditorViewState")],
						R.prototype,
						"nb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.computeEditorViewState")],
						R.prototype,
						"mb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.toEditorViewStateResource")],
						R.prototype,
						"pb",
						null,
					),
					(e.ComposerDiffEditor = R =
						Ne(
							[
								j(1, u.$km),
								j(2, c.$Li),
								j(3, a.$lq),
								j(4, h.$XO),
								j(5, s.$IY),
								j(6, n.$iP),
								j(7, b.$EY),
								j(8, S.$ll),
								j(9, I.$7Z),
							],
							R,
						));
			},
		),
		