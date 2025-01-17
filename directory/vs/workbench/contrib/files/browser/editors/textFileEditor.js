import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../base/common/performance.js';
import '../../../../../base/common/types.js';
import '../../../../services/path/common/pathService.js';
import '../../../../../base/common/actions.js';
import '../../common/files.js';
import '../../../../services/textfile/common/textfiles.js';
import '../../../../browser/parts/editor/textCodeEditor.js';
import '../../../../common/editor.js';
import '../../../../common/editor/editorOptions.js';
import '../../../../common/editor/binaryEditorModel.js';
import './fileEditorInput.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../platform/storage/common/storage.js';
import '../../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../../editor/common/editorCommon.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../services/editor/common/editorGroupsService.js';
import '../../../../../platform/editor/common/editor.js';
import '../../../../../platform/uriIdentity/common/uriIdentity.js';
import '../files.js';
import '../../../../services/panecomposite/browser/panecomposite.js';
import '../../../../common/views.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../services/preferences/common/preferences.js';
import '../../../../services/host/browser/host.js';
import '../../../../services/filesConfiguration/common/filesConfigurationService.js';
define(
			de[3865],
			he([
				1, 0, 4, 240, 28, 165, 50, 220, 85, 1337, 44, 549, 1225, 844, 22, 32,
				25, 21, 125, 5, 35, 98, 18, 66, 116, 68, 382, 142, 60, 10, 131, 87, 170,
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
			) {
				"use strict";
				var N;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oec = void 0);
				let A = class extends r.$lec {
					static {
						N = this;
					}
					static {
						this.ID = d.$PUb;
					}
					constructor(
						O,
						B,
						U,
						z,
						F,
						x,
						H,
						q,
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
					) {
						super(N.ID, O, B, F, H, q, G, V, K, U),
							(this.f = z),
							(this.$ = x),
							(this.Xb = J),
							(this.Yb = W),
							(this.Zb = X),
							(this.$b = Y),
							(this.ac = ie),
							(this.bc = ne),
							(this.cc = ee),
							(this.dc = _),
							this.D(this.xb.onDidFilesChange((te) => this.ec(te))),
							this.D(this.xb.onDidRunOperation((te) => this.fc(te)));
					}
					ec(O) {
						for (const B of O.rawDeleted) this.lb(B);
					}
					fc(O) {
						O.operation === n.FileOperation.MOVE &&
							O.target &&
							this.kb(O.resource, O.target.resource, this.Zb.extUri);
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(6655, null);
					}
					get input() {
						return this.W;
					}
					async setInput(O, B, U, z) {
						(0, i.mark)("code/willSetInputToTextFileEditor"),
							await super.setInput(O, B, U, z);
						try {
							const F = await O.resolve(B);
							if (z.isCancellationRequested) return;
							if (F instanceof h.$mec) return this.hc(O, B);
							const x = F,
								H = (0, w.$wg)(this.a);
							if ((H.setModel(x.textEditorModel), !(0, u.$C1)(B?.viewState))) {
								const q = this.jb(O, U);
								q &&
									(B?.selection && (q.cursorState = []), H.restoreViewState(q));
							}
							B && (0, a.applyTextEditorOptions)(B, H, l.ScrollType.Immediate),
								H.updateOptions(this.Gb(x.isReadonly())),
								H.handleInitialized && H.handleInitialized();
						} catch (F) {
							await this.gc(F, O, B);
						}
						(0, i.mark)("code/didSetInputToTextFileEditor");
					}
					async gc(O, B, U) {
						if (
							O.textFileOperationResult ===
							m.TextFileOperationResult.FILE_IS_BINARY
						)
							return this.hc(B, U);
						if (
							O.fileOperationResult === n.FileOperationResult.FILE_IS_DIRECTORY
						) {
							const z = [];
							throw (
								(z.push(
									(0, C.$wj)({
										id: "workbench.files.action.openFolder",
										label: (0, t.localize)(6656, null),
										run: async () =>
											this.cc.openWindow([{ folderUri: B.resource }], {
												forceNewWindow: !0,
											}),
									}),
								),
								this.$.isInsideWorkspace(B.preferredResource) &&
									z.push(
										(0, C.$wj)({
											id: "workbench.files.action.reveal",
											label: (0, t.localize)(6657, null),
											run: async () => (
												await this.f.openPaneComposite(
													d.$vUb,
													P.ViewContainerLocation.Sidebar,
													!0,
												),
												this.Yb.select(B.preferredResource, !0)
											),
										}),
									),
								(0, u.$E1)((0, t.localize)(6658, null), z, {
									forceMessage: !0,
								}))
							);
						}
						if (
							O.fileOperationResult === n.FileOperationResult.FILE_TOO_LARGE
						) {
							let z;
							throw (
								(O instanceof n.$Hl
									? (z = (0, t.localize)(6659, null, n.$Tl.formatSize(O.size)))
									: (z = (0, t.localize)(6660, null)),
								(0, u.$u1)(this.group, B, U, z, this.bc))
							);
						}
						throw O.fileOperationResult ===
							n.FileOperationResult.FILE_NOT_FOUND &&
							!this.dc.isReadonly(B.preferredResource) &&
							(await this.$b.hasValidBasename(B.preferredResource))
							? (0, u.$E1)(
									new n.$Gl(
										(0, t.localize)(6661, null),
										n.FileOperationResult.FILE_NOT_FOUND,
									),
									[
										(0, C.$wj)({
											id: "workbench.files.action.createMissingFile",
											label: (0, t.localize)(6662, null),
											run: async () => (
												await this.Xb.create([
													{ resource: B.preferredResource },
												]),
												this.u.openEditor({
													resource: B.preferredResource,
													options: { pinned: !0 },
												})
											),
										}),
									],
									{ allowDialog: !0 },
								)
							: O;
					}
					hc(O, B) {
						const U = this.ac.getValue("workbench.editor.defaultBinaryEditor"),
							z = { ...B, activation: v.EditorActivation.PRESERVE };
						U && U !== "" && U !== u.$b1.id
							? this.ic(this.group, U, O, z)
							: this.jc(this.group, U, O, z);
					}
					ic(O, B, U, z) {
						this.u.replaceEditors(
							[
								{
									editor: U,
									replacement: {
										resource: U.resource,
										options: { ...z, override: B },
									},
								},
							],
							O,
						);
					}
					jc(O, B, U, z) {
						B === u.$b1.id
							? (U.setForceOpenAsText(),
								U.setPreferredLanguageId(d.$SUb),
								(z = { ...z, forceReload: !0 }))
							: U.setForceOpenAsBinary(),
							O.openEditor(U, z);
					}
					clearInput() {
						super.clearInput(), this.a?.setModel(null);
					}
					Lb(O, B) {
						(0, i.mark)("code/willCreateTextFileEditorControl"),
							super.Lb(O, B),
							(0, i.mark)("code/didCreateTextFileEditorControl");
					}
					nb(O) {
						return O instanceof c.$nec;
					}
					ob() {
						return !0;
					}
				};
				(e.$oec = A),
					(e.$oec =
						A =
						N =
							Ne(
								[
									j(1, g.$km),
									j(2, n.$ll),
									j(3, T.$6Sb),
									j(4, b.$Li),
									j(5, p.$Vi),
									j(6, o.$lq),
									j(7, f.$XO),
									j(8, y.$IY),
									j(9, s.$iP),
									j(10, $.$EY),
									j(11, m.$kZ),
									j(12, I.$LWb),
									j(13, S.$Vl),
									j(14, E.$I8),
									j(15, k.$gj),
									j(16, L.$7Z),
									j(17, D.$asb),
									j(18, M.$_Y),
								],
								A,
							));
			},
		),
		