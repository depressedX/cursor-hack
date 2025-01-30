import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/path.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/services/model.js';
import '../../../../nls.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../common/editor.js';
import '../../../common/memento.js';
import './constants.js';
import './searchEditorModel.js';
import './searchEditorSerialization.js';
import '../../../services/path/common/pathService.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../services/workingCopy/common/workingCopyService.js';
import '../../../services/workingCopy/common/workingCopy.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/buffer.js';
import '../../../common/editor/editorInput.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../css!vs/workbench/contrib/searchEditor/browser/media/searchEditor.js';
define(
			de[1368],
			he([
				1, 0, 6, 54, 19, 9, 64, 67, 4, 57, 5, 21, 32, 44, 282, 615, 4170, 1067,
				165, 85, 227, 334, 10, 76, 223, 14, 79, 908,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*event*/,
				i /*path*/,
				w /*resources*/,
				E /*uri*/,
				C /*model*/,
				d /*model*/,
				m /*nls*/,
				r /*dialogs*/,
				u /*instantiation*/,
				a /*storage*/,
				h /*telemetry*/,
				c /*editor*/,
				n /*memento*/,
				g /*constants*/,
				p /*searchEditorModel*/,
				o /*searchEditorSerialization*/,
				f /*pathService*/,
				b /*textfiles*/,
				s /*workingCopyService*/,
				l /*workingCopy*/,
				y /*configuration*/,
				$ /*buffer*/,
				v /*editorInput*/,
				S /*codicons*/,
				I /*iconRegistry*/,
) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$TOc = e.$SOc = e.$ROc = void 0),
					(e.$ROc = ".code-search");
				const P = (0, I.$$O)(
					"search-editor-label-icon",
					S.$ak.search,
					(0, m.localize)(9407, null),
				);
				let k = class extends v.$LO {
					static {
						T = this;
					}
					static {
						this.ID = g.$DOc;
					}
					get typeId() {
						return T.ID;
					}
					get editorId() {
						return this.typeId;
					}
					getIcon() {
						return P;
					}
					get capabilities() {
						let M = c.EditorInputCapabilities.Singleton;
						return (
							this.backingUri || (M |= c.EditorInputCapabilities.Untitled), M
						);
					}
					get resource() {
						return this.backingUri || this.modelUri;
					}
					constructor(M, N, A, R, O, B, U, z, F, x) {
						if (
							(super(),
							(this.modelUri = M),
							(this.backingUri = N),
							(this.t = A),
							(this.u = R),
							(this.w = O),
							(this.y = B),
							(this.z = U),
							(this.C = z),
							(this.F = F),
							(this.c = !1),
							(this.m = this.D(new t.$re())),
							(this.onDidChangeContent = this.m.event),
							(this.n = this.D(new t.$re())),
							(this.onDidSave = this.n.event),
							(this.q = []),
							(this.model = B.createInstance(p.$POc, M)),
							this.modelUri.scheme !== g.$wOc)
						)
							throw Error(
								"SearchEditorInput must be invoked with a SearchEditorScheme uri",
							);
						(this.a = new n.$eEb(T.ID, x)),
							this.D(x.onWillSaveState(() => this.a.saveMemento()));
						const H = this,
							q = new (class {
								constructor() {
									(this.typeId = g.$xOc),
										(this.resource = H.modelUri),
										(this.capabilities = H.hasCapability(
											c.EditorInputCapabilities.Untitled,
										)
											? l.WorkingCopyCapabilities.Untitled
											: l.WorkingCopyCapabilities.None),
										(this.onDidChangeDirty = H.onDidChangeDirty),
										(this.onDidChangeContent = H.onDidChangeContent),
										(this.onDidSave = H.onDidSave);
								}
								get name() {
									return H.getName();
								}
								isDirty() {
									return H.isDirty();
								}
								isModified() {
									return H.isDirty();
								}
								backup(V) {
									return H.J(V);
								}
								save(V) {
									return H.save(0, V).then((G) => !!G);
								}
								revert(V) {
									return H.revert(0, V);
								}
							})();
						this.D(this.z.registerWorkingCopy(q));
					}
					async save(M, N) {
						if (!(await this.resolveModels()).resultsModel.isDisposed())
							return this.backingUri
								? (await this.u.write(this.backingUri, await this.G(), N),
									this.setDirty(!1),
									this.n.fire({ reason: N?.reason, source: N?.source }),
									this)
								: this.saveAs(M, N);
					}
					tryReadConfigSync() {
						return this.s?.config;
					}
					async G() {
						const { configurationModel: M, resultsModel: N } =
							await this.resolveModels();
						return (
							(0, o.$HOc)(M.config) +
							`
` +
							N.getValue()
						);
					}
					I(M) {
						this.H?.dispose(),
							this.isDisposed() ||
								((this.H = M.onConfigDidUpdate(() => {
									this.h !== this.getName() &&
										(this.f.fire(), (this.h = this.getName())),
										(this.a.getMemento(
											a.StorageScope.WORKSPACE,
											a.StorageTarget.MACHINE,
										).searchConfig = M.config);
								})),
								this.D(this.H));
					}
					async resolveModels() {
						return this.model
							.resolve()
							.then(
								(M) => (
									(this.r = M.resultsModel),
									(this.s = M.configurationModel),
									this.h !== this.getName() &&
										(this.f.fire(), (this.h = this.getName())),
									this.I(M.configurationModel),
									M
								),
							);
					}
					async saveAs(M, N) {
						const A = await this.w.pickFileToSave(
							await this.L(),
							N?.availableFileSystems,
						);
						if (A) {
							this.C.publicLog2("searchEditor/saveSearchResults");
							const R = await this.G();
							if (
								await this.u.create([
									{ resource: A, value: R, options: { overwrite: !0 } },
								])
							) {
								if ((this.setDirty(!1), !(0, w.$gh)(A, this.modelUri))) {
									const O = this.y.invokeFunction(e.$TOc, {
										fileUri: A,
										from: "existingFile",
									});
									return O.setMatchRanges(this.getMatchRanges()), O;
								}
								return this;
							}
						}
					}
					getName(M = 12) {
						const N = (R) => (R.length < M ? R : `${R.slice(0, M - 3)}...`);
						if (this.backingUri) {
							const R = c.$A1.getOriginalUri(this);
							return (0, m.localize)(
								9408,
								null,
								(0, i.$sc)((R ?? this.backingUri).path, e.$ROc),
							);
						}
						const A = this.s?.config?.query?.trim();
						return A
							? (0, m.localize)(9409, null, N(A))
							: (0, m.localize)(9410, null);
					}
					setDirty(M) {
						const N = this.c;
						(this.c = M), N !== M && this.b.fire();
					}
					isDirty() {
						return this.c;
					}
					async rename(M, N) {
						if ((0, w.$lh)(N) === e.$ROc)
							return {
								editor: this.y.invokeFunction(e.$TOc, {
									from: "existingFile",
									fileUri: N,
								}),
							};
					}
					dispose() {
						this.t.destroyModel(this.modelUri), super.dispose();
					}
					matches(M) {
						return super.matches(M)
							? !0
							: M instanceof T
								? !!(
										M.modelUri.fragment &&
										M.modelUri.fragment === this.modelUri.fragment
									) ||
									!!(M.backingUri && (0, w.$gh)(M.backingUri, this.backingUri))
								: !1;
					}
					getMatchRanges() {
						return (this.r?.getAllDecorations() ?? [])
							.filter((M) => M.options.className === g.$yOc)
							.filter(
								({ range: M }) => !(M.startColumn === 1 && M.endColumn === 1),
							)
							.map(({ range: M }) => M);
					}
					async setMatchRanges(M) {
						this.q = (await this.resolveModels()).resultsModel.deltaDecorations(
							this.q,
							M.map((N) => ({
								range: N,
								options: {
									description: "search-editor-find-match",
									className: g.$yOc,
									stickiness:
										C.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								},
							})),
						);
					}
					async revert(M, N) {
						if (N?.soft) {
							this.setDirty(!1);
							return;
						}
						if (this.backingUri) {
							const { config: A, text: R } = await this.y.invokeFunction(
									o.$MOc,
									this.backingUri,
								),
								{ resultsModel: O, configurationModel: B } =
									await this.resolveModels();
							O.setValue(R), B.updateConfig(A);
						} else (await this.resolveModels()).resultsModel.setValue("");
						super.revert(M, N), this.setDirty(!1);
					}
					async J(M) {
						const N = await this.G();
						return M.isCancellationRequested
							? {}
							: { content: (0, $.$5e)($.$Te.fromString(N)) };
					}
					async L() {
						const N =
							((
								await this.resolveModels()
							).configurationModel.config.query.replace(/[^\w \-_]+/g, "_") ||
								"Search") + e.$ROc;
						return (0, w.$nh)(
							await this.w.defaultFilePath(this.F.defaultUriScheme),
							N,
						);
					}
					toUntyped() {
						if (!this.hasCapability(c.EditorInputCapabilities.Untitled))
							return { resource: this.resource, options: { override: T.ID } };
					}
				};
				(e.$SOc = k),
					(e.$SOc =
						k =
						T =
							Ne(
								[
									j(2, d.$QO),
									j(3, b.$kZ),
									j(4, r.$IO),
									j(5, u.$Li),
									j(6, s.$gY),
									j(7, h.$km),
									j(8, f.$I8),
									j(9, a.$lq),
								],
								k,
							));
				const L = (D, M) => {
					const N = D.get(a.$lq),
						A = D.get(y.$gj),
						R = D.get(u.$Li),
						O =
							M.from === "model"
								? M.modelUri
								: E.URI.from({ scheme: g.$wOc, fragment: `${Math.random()}` });
					if (!p.$QOc.models.has(O))
						if (M.from === "existingFile")
							R.invokeFunction((B) =>
								p.$QOc.initializeModelFromExistingFile(B, O, M.fileUri),
							);
						else {
							const B = A.getValue("search").searchEditor,
								U = B.reusePriorSearchConfiguration,
								z = B.defaultNumberOfContextLines,
								F = U
									? new n.$eEb(k.ID, N).getMemento(
											a.StorageScope.WORKSPACE,
											a.StorageTarget.MACHINE,
										).searchConfig
									: {},
								H = { ...(0, o.$JOc)(), ...F, ...M.config };
							z != null && (H.contextLines = M?.config?.contextLines ?? z),
								M.from === "rawData"
									? (M.resultsContents && (H.contextLines = 0),
										R.invokeFunction((q) =>
											p.$QOc.initializeModelFromRawData(
												q,
												O,
												H,
												M.resultsContents,
											),
										))
									: R.invokeFunction((q) =>
											p.$QOc.initializeModelFromExistingModel(q, O, H),
										);
						}
					return R.createInstance(
						k,
						O,
						M.from === "existingFile"
							? M.fileUri
							: M.from === "model"
								? M.backupOf
								: void 0,
					);
				};
				e.$TOc = L;
			},
		),
		