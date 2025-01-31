import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/event.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/files/common/files.js';
import '../../../common/editor.js';
import './workingCopyService.js';
import './workingCopy.js';
import '../../../../base/common/async.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/types.js';
import './workingCopyFileService.js';
import '../../filesConfiguration/common/filesConfigurationService.js';
import './workingCopyBackup.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/common/hash.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/platform.js';
import './workingCopyEditorService.js';
import '../../editor/common/editorService.js';
import '../../files/common/elevatedFileService.js';
import './resourceWorkingCopy.js';
import './fileWorkingCopy.js';
import '../../../../platform/progress/common/progress.js';
define(
			de[1052],
			he([
				1, 0, 4, 6, 33, 22, 44, 227, 334, 15, 34, 28, 336, 170, 335, 40, 136,
				163, 50, 12, 403, 18, 700, 1910, 848, 84,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*event*/,
				w /*cancellation*/,
				E /*files*/,
				C /*editor*/,
				d /*workingCopyService*/,
				m /*workingCopy*/,
				r /*async*/,
				u /*log*/,
				a /*types*/,
				h /*workingCopyFileService*/,
				c /*filesConfigurationService*/,
				n /*workingCopyBackup*/,
				g /*notification*/,
				p /*hash*/,
				o /*errorMessage*/,
				f /*actions*/,
				b /*platform*/,
				s /*workingCopyEditorService*/,
				l /*editorService*/,
				y /*elevatedFileService*/,
				$ /*resourceWorkingCopy*/,
				v /*fileWorkingCopy*/,
				S /*progress*/,
) {
				"use strict";
				var I;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gZ = e.StoredFileWorkingCopyState = void 0),
					(e.$fZ = P);
				var T;
				(function (L) {
					(L[(L.SAVED = 0)] = "SAVED"),
						(L[(L.DIRTY = 1)] = "DIRTY"),
						(L[(L.PENDING_SAVE = 2)] = "PENDING_SAVE"),
						(L[(L.CONFLICT = 3)] = "CONFLICT"),
						(L[(L.ORPHAN = 4)] = "ORPHAN"),
						(L[(L.ERROR = 5)] = "ERROR");
				})(T || (e.StoredFileWorkingCopyState = T = {}));
				function P(L) {
					return !!L.stat;
				}
				let k = class extends $.$eZ {
					static {
						I = this;
					}
					get model() {
						return this.j;
					}
					constructor(D, M, N, A, R, O, B, U, z, F, x, H, q, V, G, K) {
						super(M, O),
							(this.typeId = D),
							(this.name = N),
							(this.w = A),
							(this.y = R),
							(this.z = B),
							(this.C = U),
							(this.F = z),
							(this.G = F),
							(this.H = H),
							(this.I = q),
							(this.J = V),
							(this.L = G),
							(this.N = K),
							(this.capabilities = m.WorkingCopyCapabilities.None),
							(this.j = void 0),
							(this.m = this.D(new i.$re())),
							(this.onDidChangeContent = this.m.event),
							(this.n = this.D(new i.$re())),
							(this.onDidResolve = this.n.event),
							(this.q = this.D(new i.$re())),
							(this.onDidChangeDirty = this.q.event),
							(this.r = this.D(new i.$re())),
							(this.onDidSaveError = this.r.event),
							(this.s = this.D(new i.$re())),
							(this.onDidSave = this.s.event),
							(this.t = this.D(new i.$re())),
							(this.onDidRevert = this.t.event),
							(this.u = this.D(new i.$re())),
							(this.onDidChangeReadonly = this.u.event),
							(this.P = !1),
							(this.bb = !1),
							(this.gb = 0),
							(this.ib = void 0),
							(this.jb = new r.$8h()),
							(this.kb = !1),
							(this.rb = !1),
							(this.sb = !1),
							this.D(x.registerWorkingCopy(this)),
							this.O();
					}
					O() {
						this.D(this.F.onDidChangeReadonly(() => this.u.fire()));
					}
					isDirty() {
						return this.P;
					}
					markModified() {
						this.R(!0);
					}
					R(D) {
						if (!this.isResolved()) return;
						const M = this.P;
						this.S(D), D !== M && this.q.fire();
					}
					S(D) {
						const M = this.P,
							N = this.rb,
							A = this.sb,
							R = this.Q;
						return (
							D
								? (this.P = !0)
								: ((this.P = !1),
									(this.rb = !1),
									(this.sb = !1),
									this.isResolved() && (this.Q = this.model.versionId)),
							() => {
								(this.P = M), (this.rb = N), (this.sb = A), (this.Q = R);
							}
						);
					}
					isResolved() {
						return !!this.model;
					}
					async resolve(D) {
						if ((this.tb("resolve() - enter"), this.isDisposed())) {
							this.tb(
								"resolve() - exit - without resolving because file working copy is disposed",
							);
							return;
						}
						if (!D?.contents && (this.P || this.jb.isRunning())) {
							this.tb(
								"resolve() - exit - without resolving because file working copy is dirty or being saved",
							);
							return;
						}
						return this.U(D);
					}
					async U(D) {
						if (D?.contents) return this.W(D.contents);
						if (!(!this.isResolved() && (await this.X()))) return this.Z(D);
					}
					async W(D) {
						this.tb("resolveFromBuffer()");
						let M, N, A, R;
						try {
							const O = await this.a.stat(this.resource);
							(M = O.mtime),
								(N = O.ctime),
								(A = O.size),
								(R = O.etag),
								this.g(!1);
						} catch (O) {
							(M = Date.now()),
								(N = Date.now()),
								(A = 0),
								(R = E.$Ql),
								this.g(
									O.fileOperationResult ===
										E.FileOperationResult.FILE_NOT_FOUND,
								);
						}
						return this.$(
							{
								resource: this.resource,
								name: this.name,
								mtime: M,
								ctime: N,
								size: A,
								etag: R,
								value: D,
								readonly: !1,
								locked: !1,
							},
							!0,
						);
					}
					async X() {
						const D = await this.G.resolve(this);
						return this.isResolved()
							? (this.tb(
									"resolveFromBackup() - exit - withoutresolving because previously new file working copy got created meanwhile",
								),
								!0)
							: D
								? (await this.Y(D), !0)
								: !1;
					}
					async Y(D) {
						this.tb("doResolveFromBackup()"),
							await this.$(
								{
									resource: this.resource,
									name: this.name,
									mtime: D.meta ? D.meta.mtime : Date.now(),
									ctime: D.meta ? D.meta.ctime : Date.now(),
									size: D.meta ? D.meta.size : 0,
									etag: D.meta ? D.meta.etag : E.$Ql,
									value: D.value,
									readonly: !1,
									locked: !1,
								},
								!0,
							),
							D.meta && D.meta.orphaned && this.g(!0);
					}
					async Z(D) {
						this.tb("resolveFromFile()");
						const M = D?.forceReadFromFile;
						let N;
						M
							? (N = E.$Ql)
							: this.lastResolvedFileStat &&
								(N = this.lastResolvedFileStat.etag);
						const A = this.gb;
						try {
							const R = await this.a.readFileStream(this.resource, {
								etag: N,
								limits: D?.limits,
							});
							if ((this.g(!1), A !== this.gb)) {
								this.tb(
									"resolveFromFile() - exit - without resolving because file working copy content changed",
								);
								return;
							}
							await this.$(R, !1);
						} catch (R) {
							const O = R.fileOperationResult;
							if (
								(this.g(O === E.FileOperationResult.FILE_NOT_FOUND),
								this.isResolved() &&
									O === E.FileOperationResult.FILE_NOT_MODIFIED_SINCE)
							) {
								R instanceof E.$Il && this.qb(R.stat);
								return;
							}
							if (
								this.isResolved() &&
								O === E.FileOperationResult.FILE_NOT_FOUND &&
								!M
							)
								return;
							throw R;
						}
					}
					async $(D, M) {
						if ((this.tb("resolveFromContent() - enter"), this.isDisposed())) {
							this.tb(
								"resolveFromContent() - exit - because working copy is disposed",
							);
							return;
						}
						this.qb({
							resource: this.resource,
							name: D.name,
							mtime: D.mtime,
							ctime: D.ctime,
							size: D.size,
							etag: D.etag,
							readonly: D.readonly,
							locked: D.locked,
							isFile: !0,
							isDirectory: !1,
							isSymbolicLink: !1,
							children: void 0,
						}),
							this.isResolved()
								? await this.cb(D.value)
								: await this.ab(D.value),
							this.R(!!M),
							this.n.fire();
					}
					async ab(D) {
						this.tb("doCreateModel()"),
							(this.j = this.D(
								await this.w.createModel(
									this.resource,
									D,
									w.CancellationToken.None,
								),
							)),
							this.db(this.j);
					}
					async cb(D) {
						this.tb("doUpdateModel()"), (this.bb = !0);
						try {
							await this.model?.update(D, w.CancellationToken.None);
						} finally {
							this.bb = !1;
						}
					}
					db(D) {
						this.D(
							D.onDidChangeContent((M) =>
								this.eb(D, M.isUndoing || M.isRedoing),
							),
						),
							this.D(D.onWillDispose(() => this.dispose()));
					}
					eb(D, M) {
						if (
							(this.tb("onModelContentChanged() - enter"),
							this.gb++,
							this.tb(`onModelContentChanged() - new versionId ${this.gb}`),
							M && (this.ib = Date.now()),
							!this.bb && !this.isReadonly())
						)
							if (D.versionId === this.Q) {
								this.tb(
									"onModelContentChanged() - model content changed back to last saved version",
								);
								const N = this.P;
								this.R(!1), N && this.t.fire();
							} else
								this.tb(
									"onModelContentChanged() - model content changed and marked as dirty",
								),
									this.R(!0);
						this.m.fire();
					}
					async fb() {
						this.isDisposed() || (await this.y({ forceReadFromFile: !0 }));
					}
					get backupDelay() {
						return this.model?.configuration?.backupDelay;
					}
					async backup(D) {
						let M;
						this.lastResolvedFileStat &&
							(M = {
								mtime: this.lastResolvedFileStat.mtime,
								ctime: this.lastResolvedFileStat.ctime,
								size: this.lastResolvedFileStat.size,
								etag: this.lastResolvedFileStat.etag,
								orphaned: this.isOrphaned(),
							});
						let N;
						return (
							this.isResolved() &&
								(N = await (0, r.$Ah)(
									this.model.snapshot(v.SnapshotContext.Backup, D),
									D,
								)),
							{ meta: M, content: N }
						);
					}
					static {
						this.hb = 500;
					}
					async save(D = Object.create(null)) {
						return this.isResolved()
							? this.isReadonly()
								? (this.tb("save() - ignoring request for readonly resource"),
									!1)
								: (this.hasState(T.CONFLICT) || this.hasState(T.ERROR)) &&
										(D.reason === C.SaveReason.AUTO ||
											D.reason === C.SaveReason.FOCUS_CHANGE ||
											D.reason === C.SaveReason.WINDOW_CHANGE)
									? (this.tb(
											"save() - ignoring auto save request for file working copy that is in conflict or error",
										),
										!1)
									: (this.tb("save() - enter"),
										await this.lb(D),
										this.tb("save() - exit"),
										this.hasState(T.SAVED))
							: !1;
					}
					async lb(D) {
						typeof D.reason != "number" && (D.reason = C.SaveReason.EXPLICIT);
						const M = this.gb;
						if (
							(this.tb(`doSave(${M}) - enter with versionId ${M}`), this.kb)
						) {
							this.tb(
								`doSave(${M}) - exit - refusing to save() recursively from save participant`,
							);
							return;
						}
						if (this.jb.isRunning(M))
							return (
								this.tb(
									`doSave(${M}) - exit - found a running save for versionId ${M}`,
								),
								this.jb.running
							);
						if (!D.force && !this.P) {
							this.tb(
								`doSave(${M}) - exit - because not dirty and/or versionId is different (this.isDirty: ${this.P}, this.versionId: ${this.gb})`,
							);
							return;
						}
						if (this.jb.isRunning())
							return (
								this.tb(`doSave(${M}) - exit - because busy saving`),
								this.jb.cancelRunning(),
								this.jb.queue(() => this.lb(D))
							);
						this.isResolved() && this.model.pushStackElement();
						const N = new w.$Ce();
						return this.N.withProgress(
							{
								title: (0, t.localize)(13129, null, this.name),
								location: S.ProgressLocation.Window,
								cancellable: !0,
								delay: this.isDirty() ? 3e3 : 5e3,
							},
							(A) => this.mb(M, D, A, N),
							() => {
								N.cancel();
							},
						).finally(() => {
							N.dispose();
						});
					}
					mb(D, M, N, A) {
						return this.jb.run(
							D,
							(async () => {
								if (
									this.isResolved() &&
									!M.skipSaveParticipants &&
									this.C.hasSaveParticipants
								)
									try {
										if (
											M.reason === C.SaveReason.AUTO &&
											typeof this.ib == "number"
										) {
											const B = Date.now() - this.ib;
											B < I.hb && (await (0, r.$Nh)(I.hb - B));
										}
										if (!A.token.isCancellationRequested) {
											this.kb = !0;
											try {
												await this.C.runSaveParticipants(
													this,
													{
														reason: M.reason ?? C.SaveReason.EXPLICIT,
														savedFrom: M.from,
													},
													N,
													A.token,
												);
											} finally {
												this.kb = !1;
											}
										}
									} catch (B) {
										this.z.error(
											`[stored file working copy] runSaveParticipants(${D}) - resulted in an error: ${B.toString()}`,
											this.resource.toString(),
											this.typeId,
										);
									}
								if (
									A.token.isCancellationRequested ||
									this.isDisposed() ||
									!this.isResolved()
								)
									return;
								(D = this.gb),
									(this.sb = !1),
									N.report({ message: (0, t.localize)(13130, null) }),
									this.tb(`doSave(${D}) - before write()`);
								const R = (0, a.$wg)(this.lastResolvedFileStat),
									O = this;
								return this.jb.run(
									D,
									(async () => {
										try {
											const B = {
												mtime: R.mtime,
												etag:
													M.ignoreModifiedSince ||
													!this.F.preventSaveConflicts(R.resource)
														? E.$Ql
														: R.etag,
												unlock: M.writeUnlock,
											};
											let U;
											if (typeof O.model.save == "function")
												try {
													U = await O.model.save(B, A.token);
												} catch (z) {
													if (A.token.isCancellationRequested) return;
													throw z;
												}
											else {
												const z = await (0, r.$Ah)(
													O.model.snapshot(v.SnapshotContext.Save, A.token),
													A.token,
												);
												if (A.token.isCancellationRequested) return;
												A.dispose(),
													M?.writeElevated && this.L.isSupported(R.resource)
														? (U = await this.L.writeFileElevated(
																R.resource,
																(0, a.$wg)(z),
																B,
															))
														: (U = await this.a.writeFile(
																R.resource,
																(0, a.$wg)(z),
																B,
															));
											}
											this.nb(U, D, M);
										} catch (B) {
											this.ob(B, D, M);
										}
									})(),
									() => A.cancel(),
								);
							})(),
							() => A.cancel(),
						);
					}
					nb(D, M, N) {
						this.qb(D),
							M === this.gb
								? (this.tb(
										`handleSaveSuccess(${M}) - setting dirty to false because versionId did not change`,
									),
									this.R(!1))
								: this.tb(
										`handleSaveSuccess(${M}) - not setting dirty to false because versionId did change meanwhile`,
									),
							this.g(!1),
							this.s.fire({ reason: N.reason, stat: D, source: N.source });
					}
					ob(D, M, N) {
						if (
							((N.ignoreErrorHandler ? this.z.trace : this.z.error).apply(
								this.z,
								[
									`[stored file working copy] handleSaveError(${M}) - exit - resulted in a save error: ${D.toString()}`,
									this.resource.toString(),
									this.typeId,
								],
							),
							N.ignoreErrorHandler)
						)
							throw D;
						this.R(!0),
							(this.sb = !0),
							D.fileOperationResult ===
								E.FileOperationResult.FILE_MODIFIED_SINCE && (this.rb = !0),
							this.pb(D, N),
							this.r.fire();
					}
					pb(D, M) {
						const N = D,
							A = [];
						let R;
						if (
							N.fileOperationResult ===
							E.FileOperationResult.FILE_MODIFIED_SINCE
						)
							(R = (0, t.localize)(13131, null, this.name)),
								A.push(
									(0, f.$wj)({
										id: "fileWorkingCopy.overwrite",
										label: (0, t.localize)(13132, null),
										run: () =>
											this.save({
												...M,
												ignoreModifiedSince: !0,
												reason: C.SaveReason.EXPLICIT,
											}),
									}),
								),
								A.push(
									(0, f.$wj)({
										id: "fileWorkingCopy.revert",
										label: (0, t.localize)(13133, null),
										run: () => this.revert(),
									}),
								);
						else {
							const U =
									N.fileOperationResult ===
									E.FileOperationResult.FILE_WRITE_LOCKED,
								z = U && N.options?.unlock,
								F =
									N.fileOperationResult ===
									E.FileOperationResult.FILE_PERMISSION_DENIED,
								x = this.L.isSupported(this.resource);
							(0, o.$yj)(D) && A.push(...D.actions),
								x && (F || z)
									? A.push(
											(0, f.$wj)({
												id: "fileWorkingCopy.saveElevated",
												label: z
													? b.$l
														? (0, t.localize)(13134, null)
														: (0, t.localize)(13135, null)
													: b.$l
														? (0, t.localize)(13136, null)
														: (0, t.localize)(13137, null),
												run: () => {
													this.save({
														...M,
														writeElevated: !0,
														writeUnlock: z,
														reason: C.SaveReason.EXPLICIT,
													});
												},
											}),
										)
									: U
										? A.push(
												(0, f.$wj)({
													id: "fileWorkingCopy.unlock",
													label: (0, t.localize)(13138, null),
													run: () =>
														this.save({
															...M,
															writeUnlock: !0,
															reason: C.SaveReason.EXPLICIT,
														}),
												}),
											)
										: A.push(
												(0, f.$wj)({
													id: "fileWorkingCopy.retry",
													label: (0, t.localize)(13139, null),
													run: () =>
														this.save({ ...M, reason: C.SaveReason.EXPLICIT }),
												}),
											),
								A.push(
									(0, f.$wj)({
										id: "fileWorkingCopy.saveAs",
										label: (0, t.localize)(13140, null),
										run: async () => {
											const H = this.I.findEditor(this);
											H &&
												((
													await this.J.save(H, {
														saveAs: !0,
														reason: C.SaveReason.EXPLICIT,
													})
												).success ||
													this.pb(D, M));
										},
									}),
								),
								A.push(
									(0, f.$wj)({
										id: "fileWorkingCopy.revert",
										label: (0, t.localize)(13141, null),
										run: () => this.revert(),
									}),
								),
								U
									? z && x
										? (R = b.$l
												? (0, t.localize)(13142, null, this.name)
												: (0, t.localize)(13143, null, this.name))
										: (R = (0, t.localize)(13144, null, this.name))
									: x && F
										? (R = b.$l
												? (0, t.localize)(13145, null, this.name)
												: (0, t.localize)(13146, null, this.name))
										: (R = (0, t.localize)(
												13147,
												null,
												this.name,
												(0, o.$xj)(D, !1),
											));
						}
						const O = this.H.notify({
								id: `${(0, p.$Aj)(this.resource.toString())}`,
								severity: g.Severity.Error,
								message: R,
								actions: { primary: A },
							}),
							B = this.D(
								i.Event.once(i.Event.any(this.onDidSave, this.onDidRevert))(
									() => O.close(),
								),
							);
						this.D(i.Event.once(O.onDidClose)(() => B.dispose()));
					}
					qb(D) {
						const M = this.isReadonly();
						this.lastResolvedFileStat
							? this.lastResolvedFileStat.mtime <= D.mtime
								? (this.lastResolvedFileStat = D)
								: (this.lastResolvedFileStat = {
										...this.lastResolvedFileStat,
										readonly: D.readonly,
										locked: D.locked,
									})
							: (this.lastResolvedFileStat = D),
							this.isReadonly() !== M && this.u.fire();
					}
					async revert(D) {
						if (!this.isResolved() || (!this.P && !D?.force)) return;
						this.tb("revert()");
						const M = this.P,
							N = this.S(!1);
						if (!D?.soft)
							try {
								await this.fb();
							} catch (R) {
								if (
									R.fileOperationResult !== E.FileOperationResult.FILE_NOT_FOUND
								)
									throw (N(), R);
							}
						this.t.fire(), M && this.q.fire();
					}
					hasState(D) {
						switch (D) {
							case T.CONFLICT:
								return this.rb;
							case T.DIRTY:
								return this.P;
							case T.ERROR:
								return this.sb;
							case T.ORPHAN:
								return this.isOrphaned();
							case T.PENDING_SAVE:
								return this.jb.isRunning();
							case T.SAVED:
								return !this.P;
						}
					}
					async joinState(D) {
						return this.jb.running;
					}
					isReadonly() {
						return this.F.isReadonly(this.resource, this.lastResolvedFileStat);
					}
					tb(D) {
						this.z.trace(
							`[stored file working copy] ${D}`,
							this.resource.toString(),
							this.typeId,
						);
					}
					dispose() {
						this.tb("dispose()"),
							(this.rb = !1),
							(this.sb = !1),
							(this.j = void 0),
							super.dispose();
					}
				};
				(e.$gZ = k),
					(e.$gZ =
						k =
						I =
							Ne(
								[
									j(5, E.$ll),
									j(6, u.$ik),
									j(7, h.$iZ),
									j(8, c.$_Y),
									j(9, n.$WO),
									j(10, d.$gY),
									j(11, g.$4N),
									j(12, s.$bZ),
									j(13, l.$IY),
									j(14, y.$dZ),
									j(15, S.$8N),
								],
								k,
							));
			},
		)
