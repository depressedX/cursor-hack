import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/types.js';
import './textEditor.js';
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
define(
			de[1338],
			he([
				1, 0, 4, 82, 28, 718, 44, 549, 296, 1226, 32, 21, 125, 5, 35, 85, 98,
				30, 9, 66, 18, 116, 8, 19, 7, 22, 131, 162, 309,
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
) {
				"use strict";
				var k;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$IVb = void 0);
				let L = class extends E.$BVb {
					static {
						k = this;
					}
					static {
						this.ID = C.$d1;
					}
					get scopedContextKeyService() {
						if (!this.a) return;
						const M = this.a.getOriginalEditor(),
							N = this.a.getModifiedEditor();
						return (M.hasTextFocus() ? M : N).invokeWithinContext((A) =>
							A.get(y.$6j),
						);
					}
					constructor(M, N, A, R, O, B, U, z, F, x) {
						super(k.ID, M, N, A, R, O, U, B, z, F),
							(this.f = x),
							(this.a = void 0),
							(this.c = void 0),
							(this.Tb = null);
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(3550, null);
					}
					Lb(M, N) {
						this.a = this.D(this.m.createInstance(P.$3yb, M, N, {}));
					}
					Mb(M) {
						this.a?.updateOptions(M);
					}
					Nb() {
						return this.a?.getModifiedEditor();
					}
					async setInput(M, N, A, R) {
						this.Tb && (this.Tb.dispose(), (this.Tb = null)),
							(this.c = void 0),
							await super.setInput(M, N, A, R);
						try {
							const O = await M.resolve();
							if (R.isCancellationRequested) return;
							if (!(O instanceof r.$FVb)) {
								this.Wb(M, N);
								return;
							}
							const B = (0, w.$wg)(this.a),
								U = O,
								z = U.textDiffEditorModel
									? B.createViewModel(U.textDiffEditorModel)
									: null;
							(this.Tb = z), await z?.waitForDiff(), B.setModel(z);
							let F = !1;
							(0, C.$C1)(N?.viewState) || (F = this.Vb(M, N, A, B));
							let x = !1;
							N &&
								(x = (0, d.applyTextEditorOptions)(
									N,
									B,
									p.ScrollType.Immediate,
								)),
								!x && !F && B.revealFirstDiff(),
								B.updateOptions({
									...this.Gb(U.modifiedModel?.isReadonly()),
									originalEditable: !U.originalModel?.isReadonly(),
								}),
								B.handleInitialized(),
								(this.c = new T.$le(!1));
						} catch (O) {
							await this.Ub(O, M, N);
						}
					}
					async Ub(M, N, A) {
						if (this.ac(M)) return this.Wb(N, A);
						if (
							M.fileOperationResult === S.FileOperationResult.FILE_TOO_LARGE
						) {
							let R;
							throw (
								(M instanceof S.$Hl
									? (R = (0, t.localize)(3551, null, S.$Tl.formatSize(M.size)))
									: (R = (0, t.localize)(3552, null)),
								(0, C.$u1)(this.group, N, A, R, this.f))
							);
						}
						throw M;
					}
					Vb(M, N, A, R) {
						const O = this.jb(M, A);
						return O
							? (N?.selection && O.modified && (O.modified.cursorState = []),
								R.restoreViewState(O),
								N?.revealIfVisible && R.revealFirstDiff(),
								!0)
							: !1;
					}
					Wb(M, N) {
						const A = M.original,
							R = M.modified,
							O = this.m.createInstance(
								m.$GVb,
								M.getName(),
								M.getDescription(),
								A,
								R,
								!0,
							),
							B = o.$Io.as(C.$a1.EditorFactory).getFileEditorFactory();
						B.isFileEditor(A) && A.setForceOpenAsBinary(),
							B.isFileEditor(R) && R.setForceOpenAsBinary(),
							this.group.replaceEditors([
								{
									editor: M,
									replacement: O,
									options: {
										...N,
										activation: l.EditorActivation.PRESERVE,
										pinned: this.group.isPinned(M),
										sticky: this.group.isSticky(M),
									},
								},
							]);
					}
					setOptions(M) {
						super.setOptions(M),
							M &&
								(0, d.applyTextEditorOptions)(
									M,
									(0, w.$wg)(this.a),
									p.ScrollType.Smooth,
								);
					}
					zb(M, N) {
						return super.zb(M, N)
							? !0
							: M.affectsConfiguration(N, "diffEditor") ||
									M.affectsConfiguration(
										N,
										"accessibility.verbosity.diffEditor",
									);
					}
					Bb(M) {
						const N = super.Bb(M);
						if ((0, w.$ng)(M.diffEditor)) {
							const R = (0, i.$vo)(M.diffEditor);
							(R.diffCodeLens = R.codeLens),
								delete R.codeLens,
								(R.diffWordWrap = R.wordWrap),
								delete R.wordWrap,
								Object.assign(N, R);
						}
						const A = M.accessibility?.verbosity?.diffEditor ?? !1;
						return (N.accessibilityVerbose = A), N;
					}
					Hb(M) {
						return {
							...super.Hb(M),
							...this.Gb(this.input?.isReadonly()),
							originalEditable:
								this.input instanceof m.$GVb &&
								!this.input.original.isReadonly(),
							lineDecorationsWidth: "2ch",
						};
					}
					Fb(M) {
						M instanceof m.$GVb
							? this.a?.updateOptions({
									...this.Gb(M.isReadonly()),
									originalEditable: !M.original.isReadonly(),
								})
							: super.Fb(M);
					}
					ac(M) {
						return Array.isArray(M)
							? M.some((A) => this.ac(A))
							: M.textFileOperationResult ===
									g.TextFileOperationResult.FILE_IS_BINARY;
					}
					clearInput() {
						this.Tb && (this.Tb.dispose(), (this.Tb = null)),
							super.clearInput();
						const M = this.c?.elapsed();
						(this.c = void 0),
							typeof M == "number" &&
								this.bc(
									M,
									this.getControl()?.getModel()?.modified?.getLanguageId(),
								),
							this.a?.setModel(null);
					}
					bc(M, N) {
						let A = !1;
						this.a instanceof P.$3yb && (A = this.a.collapseUnchangedRegions),
							this.Q.publicLog2("diffEditor.editorVisibleTime", {
								editorVisibleTimeMs: M,
								languageId: N ?? "",
								collapseUnchangedRegions: A,
							});
					}
					getControl() {
						return this.a;
					}
					focus() {
						super.focus(), this.a?.focus();
					}
					hasFocus() {
						return this.a?.hasTextFocus() || super.hasFocus();
					}
					Z(M) {
						super.Z(M), M ? this.a?.onVisible() : this.a?.onHide();
					}
					layout(M) {
						this.a?.layout(M);
					}
					setBoundarySashes(M) {
						this.a?.setBoundarySashes(M);
					}
					nb(M) {
						return M instanceof m.$GVb;
					}
					mb(M) {
						if (!this.a) return;
						const N = this.a.getModel();
						if (!N || !N.modified || !N.original) return;
						const A = this.pb(N);
						if (A && (0, $.$gh)(A, M)) return this.a.saveViewState() ?? void 0;
					}
					pb(M) {
						let N, A;
						if (
							(M instanceof m.$GVb
								? ((N = M.original.resource), (A = M.modified.resource))
								: (0, C.$r1)(M) || ((N = M.original.uri), (A = M.modified.uri)),
							!(!N || !A))
						)
							return f.URI.from({
								scheme: "diff",
								path: `${(0, v.$Ehb)(N.toString())}${(0, v.$Ehb)(A.toString())}`,
							});
					}
				};
				(e.$IVb = L),
					(e.$IVb =
						L =
						k =
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
								L,
							));
			},
		)
