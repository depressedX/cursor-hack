import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/types.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../common/editor/editorModel.js';
import './notebookCommon.js';
import './notebookLoggingService.js';
import './notebookService.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../services/workingCopy/common/fileWorkingCopy.js';
import '../../../services/workingCopy/common/storedFileWorkingCopy.js';
import '../../../services/workingCopy/common/workingCopy.js';
define(
			de[1343],
			he([
				1, 0, 76, 29, 6, 3, 23, 82, 28, 10, 32, 416, 70, 557, 161, 170, 848,
				1052, 334,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*errors*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*network*/,
 d /*objects*/,
 m /*types*/,
 r /*configuration*/,
 u /*telemetry*/,
 a /*editorModel*/,
 h /*notebookCommon*/,
 c /*notebookLoggingService*/,
 n /*notebookService*/,
 g /*filesConfigurationService*/,
 p /*fileWorkingCopy*/,
 o /*storedFileWorkingCopy*/,
 f /*workingCopy*/) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ppc = e.$Opc = e.$Npc = void 0);
				let s = (b = class extends a.$PO {
					constructor(v, S, I, T, P, k) {
						super(),
							(this.resource = v),
							(this.r = S),
							(this.viewType = I),
							(this.s = T),
							(this.t = k),
							(this.a = this.D(new w.$re())),
							(this.b = this.D(new w.$re())),
							(this.c = this.D(new w.$re())),
							(this.g = this.D(new w.$re())),
							(this.j = this.D(new w.$re())),
							(this.onDidChangeDirty = this.a.event),
							(this.onDidSave = this.b.event),
							(this.onDidChangeOrphaned = this.c.event),
							(this.onDidChangeReadonly = this.g.event),
							(this.onDidRevertUntitled = this.j.event),
							(this.n = this.D(new E.$Zc())),
							(this.q = P);
					}
					dispose() {
						this.m?.dispose(), super.dispose();
					}
					get notebook() {
						return this.m?.model?.notebookModel;
					}
					isResolved() {
						return !!this.m?.model?.notebookModel;
					}
					async canDispose() {
						return this.m && b.u(this.m)
							? this.s.stored.canDispose(this.m)
							: !0;
					}
					isDirty() {
						return this.m?.isDirty() ?? !1;
					}
					isModified() {
						return this.m?.isModified() ?? !1;
					}
					isOrphaned() {
						return (
							b.u(this.m) &&
							this.m.hasState(o.StoredFileWorkingCopyState.ORPHAN)
						);
					}
					hasAssociatedFilePath() {
						return !b.u(this.m) && !!this.m?.hasAssociatedFilePath;
					}
					isReadonly() {
						return b.u(this.m)
							? this.m?.isReadonly()
							: this.t.isReadonly(this.resource);
					}
					get hasErrorState() {
						return this.m && "hasState" in this.m
							? this.m.hasState(o.StoredFileWorkingCopyState.ERROR)
							: !1;
					}
					revert(v) {
						return (0, m.$vg)(this.isResolved()), this.m.revert(v);
					}
					save(v) {
						return (0, m.$vg)(this.isResolved()), this.m.save(v);
					}
					async load(v) {
						return (
							!this.m || !this.m.model
								? (this.resource.scheme === C.Schemas.untitled
										? (this.r
												? (this.m = await this.s.resolve({
														associatedResource: this.resource,
													}))
												: (this.m = await this.s.resolve({
														untitledResource: this.resource,
														isScratchpad: this.q,
													})),
											this.m.onDidRevert(() => this.j.fire()))
										: ((this.m = await this.s.resolve(this.resource, {
												limits: v?.limits,
												reload: v?.forceReadFromFile
													? { async: !1, force: !0 }
													: void 0,
											})),
											this.n.add(this.m.onDidSave((S) => this.b.fire(S))),
											this.n.add(
												this.m.onDidChangeOrphaned(() => this.c.fire()),
											),
											this.n.add(
												this.m.onDidChangeReadonly(() => this.g.fire()),
											)),
									this.n.add(
										this.m.onDidChangeDirty(() => this.a.fire(), void 0),
									),
									this.n.add(
										this.m.onWillDispose(() => {
											this.n.clear(), this.m?.model?.dispose();
										}),
									))
								: await this.s.resolve(this.resource, {
										reload: {
											async: !v?.forceReadFromFile,
											force: v?.forceReadFromFile,
										},
										limits: v?.limits,
									}),
							(0, m.$vg)(this.isResolved()),
							this
						);
					}
					async saveAs(v) {
						const S = await this.s.saveAs(this.resource, v);
						if (S) return { resource: S.resource };
					}
					static u(v) {
						return !(v && v.capabilities & f.WorkingCopyCapabilities.Untitled);
					}
				});
				(e.$Npc = s), (e.$Npc = s = b = Ne([j(5, g.$_Y)], s));
				class l extends E.$1c {
					constructor(v, S, I, T, P) {
						super(),
							(this.b = v),
							(this.c = S),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.a = this.D(new w.$re())),
							(this.onDidChangeContent = this.a.event),
							(this.configuration = void 0),
							(this.onWillDispose = v.onWillDispose.bind(v)),
							this.D(
								v.onDidChangeContent((L) => {
									for (const D of L.rawEvents)
										if (
											D.kind !== h.NotebookCellsChangeType.Initialize &&
											!D.transient
										) {
											this.a.fire({
												isRedoing: !1,
												isUndoing: !1,
												isInitial: !1,
											});
											break;
										}
								}),
							);
						const k = this.f.getValue(h.$56.remoteSaving);
						(k || v.uri.scheme === C.Schemas.vscodeRemote) &&
							(this.configuration = { backupDelay: 1e4 }),
							k && this.j().catch(console.error);
					}
					async j() {
						await this.getNotebookSerializer(),
							(this.save = async (v, S) => {
								try {
									let I = this.c.tryGetDataProviderSync(
										this.notebookModel.viewType,
									)?.serializer;
									if (
										(I ||
											(this.h.info(
												"WorkingCopyModel",
												"No serializer found for notebook model, checking if provider still needs to be resolved",
											),
											(I = await this.getNotebookSerializer())),
										S.isCancellationRequested)
									)
										throw new i.$9();
									return await I.save(this.b.uri, this.b.versionId, v, S);
								} catch (I) {
									throw (
										(S.isCancellationRequested ||
											this.g.publicLogError2("notebook/SaveError", {
												isRemote: this.b.uri.scheme === C.Schemas.vscodeRemote,
												error: I,
											}),
										I)
									);
								}
							});
					}
					dispose() {
						this.b.dispose(), super.dispose();
					}
					get notebookModel() {
						return this.b;
					}
					async snapshot(v, S) {
						const I = await this.getNotebookSerializer(),
							T = {
								metadata: (0, d.$Do)(
									this.b.metadata,
									(L) => !I.options.transientDocumentMetadata[L],
								),
								cells: [],
							};
						let P = 0;
						for (const L of this.b.cells) {
							const D = {
									cellKind: L.cellKind,
									language: L.language,
									mime: L.mime,
									source: L.getValue(),
									outputs: [],
									internalMetadata: L.internalMetadata,
								},
								M = this.f.getValue(h.$56.outputBackupSizeLimit) * 1024;
							if (
								v === p.SnapshotContext.Backup &&
								M > 0 &&
								(L.outputs.forEach((N) => {
									N.outputs.forEach((A) => {
										P += A.data.byteLength;
									});
								}),
								P > M)
							)
								throw new Error("Notebook too large to backup");
							(D.outputs = I.options.transientOutputs ? [] : L.outputs),
								(D.metadata = (0, d.$Do)(
									L.metadata,
									(N) => !I.options.transientCellMetadata[N],
								)),
								T.cells.push(D);
						}
						const k = await I.notebookToData(T);
						if (S.isCancellationRequested) throw new i.$9();
						return (0, t.$8e)(k);
					}
					async update(v, S) {
						const I = await this.getNotebookSerializer(),
							T = await (0, t.$6e)(v),
							P = await I.dataToNotebook(T);
						if (S.isCancellationRequested) throw new i.$9();
						this.h.info(
							"WorkingCopyModel",
							"Notebook content updated from file system - " +
								this.b.uri.toString(),
						),
							this.b.reset(P.cells, P.metadata, I.options);
					}
					async getNotebookSerializer() {
						const v = await this.c.withNotebookDataProvider(
							this.notebookModel.viewType,
						);
						if (!(v instanceof n.$NIb))
							throw new Error("CANNOT open file notebook with this provider");
						return v.serializer;
					}
					get versionId() {
						return this.b.alternativeVersionId;
					}
					pushStackElement() {
						this.b.pushStackElement();
					}
				}
				e.$Opc = l;
				let y = class {
					constructor(v, S, I, T, P) {
						(this.a = v),
							(this.b = S),
							(this.c = I),
							(this.d = T),
							(this.f = P);
					}
					async createModel(v, S, I) {
						const T =
							this.b.getNotebookTextModel(v) ??
							(await this.b.createNotebookTextModel(this.a, v, S));
						return new l(T, this.b, this.c, this.d, this.f);
					}
				};
				(e.$Ppc = y),
					(e.$Ppc = y =
						Ne([j(1, n.$MIb), j(2, r.$gj), j(3, u.$km), j(4, c.$P2b)], y));
			},
		)
