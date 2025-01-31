import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/files/common/files.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../common/extHost.protocol.js';
import '../../../nls.js';
import '../../services/workingCopy/common/workingCopyFileService.js';
import '../../../editor/browser/services/bulkEditService.js';
import '../../../platform/progress/common/progress.js';
import '../../../base/common/async.js';
import '../../../base/common/cancellation.js';
import '../../../platform/dialogs/common/dialogs.js';
import '../../../base/common/severity.js';
import '../../../platform/storage/common/storage.js';
import '../../../platform/actions/common/actions.js';
import '../../../platform/log/common/log.js';
import '../../../platform/environment/common/environment.js';
import '../../../platform/uriIdentity/common/uriIdentity.js';
import './mainThreadBulkEdits.js';
import '../../../base/common/glob.js';
import '../../../base/common/strings.js';
import '../../../base/common/uri.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../platform/files/common/watcher.js';
import '../../../platform/workspace/common/workspace.js';
define(
		de[3899],
		he([
			1, 0, 3, 22, 101, 88, 4, 336, 199, 84, 15, 33, 57, 111, 21, 11, 34, 113,
			68, 1303, 215, 37, 9, 10, 938, 25,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*lifecycle*/,
			i /*files*/,
			w /*extHostCustomers*/,
			E /*extHost.protocol*/,
			C /*nls*/,
			d /*workingCopyFileService*/,
			m /*bulkEditService*/,
			r /*progress*/,
			u /*async*/,
			a /*cancellation*/,
			h /*dialogs*/,
			c /*severity*/,
			n /*storage*/,
			g /*actions*/,
			p /*log*/,
			o /*environment*/,
			f /*uriIdentity*/,
			b /*mainThreadBulkEdits*/,
			s /*glob*/,
			l /*strings*/,
			y /*uri*/,
			$ /*configuration*/,
			v /*watcher*/,
			S /*workspace*/,
) {
			"use strict";
			var I;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$3nc = void 0),
				(c = xi(c));
			let T = class {
				static {
					I = this;
				}
				static {
					this.MementoKeyAdditionalEdits = "file.particpants.additionalEdits";
				}
				constructor(k, L, D, M, N, A, R, O, B, U, z, F, x) {
					(this.d = L),
						(this.f = z),
						(this.g = F),
						(this.h = x),
						(this.b = new t.$Zc()),
						(this.c = new t.$0c()),
						(this.a = k.getProxy(E.$mbb.ExtHostFileSystemEventService)),
						this.b.add(
							L.onDidFilesChange((V) => {
								this.a.$onFileEvent({
									created: V.rawAdded,
									changed: V.rawUpdated,
									deleted: V.rawDeleted,
								});
							}),
						);
					const H = this,
						q = new (class {
							async participate(V, G, K, J, W) {
								if (K?.isUndoing) return;
								const X = new a.$Ce(W),
									Y = setTimeout(() => X.cancel(), J),
									ie = await N.withProgress(
										{
											location: r.ProgressLocation.Notification,
											title: this.a(G),
											cancellable: !0,
											delay: Math.min(J / 2, 3e3),
										},
										() => {
											const _ = H.a.$onWillRunFileOperation(G, V, J, X.token);
											return (0, u.$Ah)(_, X.token);
										},
										() => {
											X.cancel();
										},
									).finally(() => {
										X.dispose(), clearTimeout(Y);
									});
								if (!ie || ie.edit.edits.length === 0) return;
								const ne = ie.edit.edits.some(
									(_) => _.metadata?.needsConfirmation,
								);
								let ee = R.getBoolean(
									I.MementoKeyAdditionalEdits,
									n.StorageScope.PROFILE,
								);
								if ((B.extensionTestsLocationURI && (ee = !1), ee === void 0)) {
									let _;
									if (
										(ie.extensionNames.length === 1
											? G === i.FileOperation.CREATE
												? (_ = (0, C.localize)(
														2551,
														null,
														ie.extensionNames[0],
													))
												: G === i.FileOperation.COPY
													? (_ = (0, C.localize)(
															2552,
															null,
															ie.extensionNames[0],
														))
													: G === i.FileOperation.MOVE
														? (_ = (0, C.localize)(
																2553,
																null,
																ie.extensionNames[0],
															))
														: (_ = (0, C.localize)(
																2554,
																null,
																ie.extensionNames[0],
															))
											: G === i.FileOperation.CREATE
												? (_ = (0, C.localize)(
														2555,
														null,
														ie.extensionNames.length,
													))
												: G === i.FileOperation.COPY
													? (_ = (0, C.localize)(
															2556,
															null,
															ie.extensionNames.length,
														))
													: G === i.FileOperation.MOVE
														? (_ = (0, C.localize)(
																2557,
																null,
																ie.extensionNames.length,
															))
														: (_ = (0, C.localize)(
																2558,
																null,
																ie.extensionNames.length,
															)),
										ne)
									) {
										const { confirmed: te } = await A.confirm({
											type: c.default.Info,
											message: _,
											primaryButton: (0, C.localize)(2559, null),
											cancelButton: (0, C.localize)(2560, null),
										});
										if (((ee = !0), !te)) return;
									} else {
										let te;
										(function (se) {
											(se[(se.OK = 0)] = "OK"),
												(se[(se.Preview = 1)] = "Preview"),
												(se[(se.Cancel = 2)] = "Cancel");
										})(te || (te = {}));
										const { result: Q, checkboxChecked: Z } = await A.prompt({
											type: c.default.Info,
											message: _,
											buttons: [
												{
													label: (0, C.localize)(2561, null),
													run: () => te.OK,
												},
												{
													label: (0, C.localize)(2562, null),
													run: () => te.Preview,
												},
											],
											cancelButton: {
												label: (0, C.localize)(2563, null),
												run: () => te.Cancel,
											},
											checkbox: { label: (0, C.localize)(2564, null) },
										});
										if (Q === te.Cancel) return;
										(ee = Q === te.Preview),
											Z &&
												R.store(
													I.MementoKeyAdditionalEdits,
													ee,
													n.StorageScope.PROFILE,
													n.StorageTarget.USER,
												);
									}
								}
								O.info(
									"[onWill-handler] applying additional workspace edit from extensions",
									ie.extensionNames,
								),
									await M.apply((0, b.$xmc)(ie.edit, U), {
										undoRedoGroupId: K?.undoRedoGroupId,
										showPreview: ee,
									});
							}
							a(V) {
								switch (V) {
									case i.FileOperation.CREATE:
										return (0, C.localize)(2565, null);
									case i.FileOperation.MOVE:
										return (0, C.localize)(2566, null);
									case i.FileOperation.COPY:
										return (0, C.localize)(2567, null);
									case i.FileOperation.DELETE:
										return (0, C.localize)(2568, null);
									case i.FileOperation.WRITE:
										return (0, C.localize)(2569, null);
								}
							}
						})();
					this.b.add(D.addFileOperationParticipant(q)),
						this.b.add(
							D.onDidRunWorkingCopyFileOperation((V) =>
								this.a.$onDidRunFileOperation(V.operation, V.files),
							),
						);
				}
				async $watch(k, L, D, M, N) {
					const A = y.URI.revive(D),
						R = { ...M };
					if (R.recursive)
						try {
							(await this.d.stat(A)).isDirectory || (R.recursive = !1);
						} catch {}
					if (N) {
						this.g.trace(
							`MainThreadFileSystemEventService#$watch(): request to start watching correlated (extension: ${k}, path: ${A.toString(!0)}, recursive: ${R.recursive}, session: ${L})`,
						);
						const O = new t.$Zc(),
							B = O.add(this.d.createWatcher(A, R));
						O.add(
							B.onDidChange((U) => {
								this.a.$onFileEvent({
									session: L,
									created: U.rawAdded,
									changed: U.rawUpdated,
									deleted: U.rawDeleted,
								});
							}),
						),
							this.c.set(L, O);
					} else {
						this.g.trace(
							`MainThreadFileSystemEventService#$watch(): request to start watching uncorrelated (extension: ${k}, path: ${A.toString(!0)}, recursive: ${R.recursive}, session: ${L})`,
						);
						const O = this.f.getWorkspaceFolder(A);
						if (R.recursive && R.excludes.length === 0) {
							const U = this.h.getValue();
							if (U.files?.watcherExclude)
								for (const z in U.files.watcherExclude)
									z && U.files.watcherExclude[z] === !0 && R.excludes.push(z);
						} else if (!R.recursive && O) {
							const U = this.h.getValue();
							if (U.files?.watcherExclude) {
								for (const z in U.files.watcherExclude)
									if (z && U.files.watcherExclude[z] === !0) {
										R.includes || (R.includes = []);
										const F = `${(0, l.$uf)(z, "/")}/${s.$Fk}`;
										R.includes.push((0, v.$Ar)(O.uri.fsPath, F));
									}
							}
							if (!R.includes || R.includes.length === 0) {
								this.g.trace(
									`MainThreadFileSystemEventService#$watch(): ignoring request to start watching because path is inside workspace and no excludes are configured (extension: ${k}, path: ${A.toString(!0)}, recursive: ${R.recursive}, session: ${L})`,
								);
								return;
							}
						}
						const B = this.d.watch(A, R);
						this.c.set(L, B);
					}
				}
				$unwatch(k) {
					this.c.has(k) &&
						(this.g.trace(
							`MainThreadFileSystemEventService#$unwatch(): request to stop watching (session: ${k})`,
						),
						this.c.deleteAndDispose(k));
				}
				dispose() {
					this.b.dispose(), this.c.dispose();
				}
			};
			(e.$3nc = T),
				(e.$3nc =
					T =
					I =
						Ne(
							[
								(0, w.$tmc)(E.$lbb.MainThreadFileSystemEventService),
								j(1, i.$ll),
								j(2, d.$iZ),
								j(3, m.$rzb),
								j(4, r.$8N),
								j(5, h.$GO),
								j(6, n.$lq),
								j(7, p.$ik),
								j(8, o.$Ti),
								j(9, f.$Vl),
								j(10, S.$Vi),
								j(11, p.$ik),
								j(12, $.$gj),
							],
							T,
						)),
				(0, g.$4X)(
					class extends g.$3X {
						constructor() {
							super({
								id: "files.participants.resetChoice",
								title: {
									value: (0, C.localize)(2570, null),
									original: "Reset choice for 'File operation needs preview'",
								},
								f1: !0,
							});
						}
						run(k) {
							k.get(n.$lq).remove(
								T.MementoKeyAdditionalEdits,
								n.StorageScope.PROFILE,
							);
						}
					},
				);
		},
	)
