import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/progress/common/progress.js';
import './files.js';
import '../common/files.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/async.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/resources.js';
import '../../../../editor/browser/services/bulkEditService.js';
import '../common/explorerModel.js';
import '../../../../base/common/uri.js';
import '../../../services/host/browser/host.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/dnd/browser/dnd.js';
import '../../../services/workspaces/common/workspaceEditing.js';
import '../../../../base/common/platform.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/network.js';
import '../../../../base/common/labels.js';
import '../../../../base/common/stream.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/functional.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/errors.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/files/browser/webFileSystemAccess.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
define(
			de[1944],
			he([
				1, 0, 4, 33, 57, 22, 40, 84, 382, 220, 18, 15, 76, 19, 199, 710, 9, 87,
				25, 347, 449, 12, 7, 34, 23, 222, 408, 3, 288, 24, 29, 10, 762, 5, 21,
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
			) {
				"use strict";
				var R, O;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RWb = e.$QWb = e.$PWb = void 0),
					(e.$SWb = F),
					(e.$TWb = x);
				let B = class {
					static {
						R = this;
					}
					static {
						this.a = 20;
					}
					constructor(q, V, G, K, J) {
						(this.b = q),
							(this.c = V),
							(this.d = G),
							(this.e = K),
							(this.f = J);
					}
					upload(q, V) {
						const G = new i.$Ce(),
							K = this.b.withProgress(
								{
									location: d.ProgressLocation.Window,
									delay: 800,
									cancellable: !0,
									title: (0, t.localize)(6840, null),
								},
								async (J) => this.h(q, this.g(V), J, G.token),
								() => G.dispose(!0),
							);
						return (
							this.b.withProgress({ location: r.$wUb, delay: 500 }, () => K), K
						);
					}
					g(q) {
						if ((0, y.$0gb)(q)) return q.dataTransfer;
						const V = { items: [] };
						for (const G of q)
							V.items.push({
								webkitGetAsEntry: () => ({
									name: G.name,
									isDirectory: !1,
									isFile: !0,
									createReader: () => {
										throw new Error("Unsupported for files");
									},
									file: (K) => K(G),
								}),
							});
						return V;
					}
					async h(q, V, G, K) {
						const J = V.items,
							W = [];
						for (const ee of J) W.push(ee.webkitGetAsEntry());
						const X = [],
							Y = {
								startTime: Date.now(),
								progressScheduler: new a.$1h((ee) => {
									G.report(ee[ee.length - 1]);
								}, 1e3),
								filesTotal: W.length,
								filesUploaded: 0,
								totalBytesUploaded: 0,
							},
							ie = new a.$Sh(R.a);
						await a.Promises.settled(
							W.map((ee) =>
								ie.queue(async () => {
									if (K.isCancellationRequested) return;
									if (q && ee.name && q.getChild(ee.name)) {
										const { confirmed: te } = await this.c.confirm(F(ee.name));
										if (
											!te ||
											(await this.d.applyBulkEdit(
												[
													new n.$uzb((0, c.$nh)(q.resource, ee.name), void 0, {
														recursive: !0,
														folder: q.getChild(ee.name)?.isDirectory,
													}),
												],
												{
													undoLabel: (0, t.localize)(6841, null, ee.name),
													progressLabel: (0, t.localize)(6842, null, ee.name),
												},
											),
											K.isCancellationRequested)
										)
											return;
									}
									const _ = await this.i(ee, q.resource, q, G, Y, K);
									_ && X.push(_);
								}),
							),
						),
							Y.progressScheduler.dispose();
						const ne = X[0];
						!K.isCancellationRequested &&
							ne?.isFile &&
							(await this.e.openEditor({
								resource: ne.resource,
								options: { pinned: !0 },
							}));
					}
					async i(q, V, G, K, J, W) {
						if (
							W.isCancellationRequested ||
							!q.name ||
							(!q.isFile && !q.isDirectory)
						)
							return;
						let X = 0;
						const Y = (ne, ee) => {
							(X += ee), (J.totalBytesUploaded += ee);
							const _ =
								J.totalBytesUploaded / ((Date.now() - J.startTime) / 1e3);
							let te;
							ne < E.$Tl.MB
								? J.filesTotal === 1
									? (te = `${q.name}`)
									: (te = (0, t.localize)(
											6843,
											null,
											J.filesUploaded,
											J.filesTotal,
											E.$Tl.formatSize(_),
										))
								: (te = (0, t.localize)(
										6844,
										null,
										q.name,
										E.$Tl.formatSize(X),
										E.$Tl.formatSize(ne),
										E.$Tl.formatSize(_),
									)),
								J.progressScheduler.work({ message: te });
						};
						J.filesUploaded++, Y(0, 0);
						const ie = (0, c.$nh)(V, q.name);
						if (q.isFile) {
							const ne = await new Promise((ee, _) => q.file(ee, _));
							return W.isCancellationRequested
								? void 0
								: (typeof ne.stream == "function" && ne.size > E.$Tl.MB
										? await this.j(ie, ne, Y, W)
										: await this.k(ie, ne, Y),
									{ isFile: !0, resource: ie });
						} else {
							if ((await this.f.createFolder(ie), W.isCancellationRequested))
								return;
							const ne = q.createReader(),
								ee = [];
							let _ = !1;
							do {
								const re = await new Promise((le, oe) =>
									ne.readEntries(le, oe),
								);
								re.length > 0 ? ee.push(...re) : (_ = !0);
							} while (!_ && !W.isCancellationRequested);
							J.filesTotal += ee.length;
							const te = (G && G.getChild(q.name)) || void 0,
								Q = [],
								Z = [];
							for (const re of ee)
								re.isFile ? Q.push(re) : re.isDirectory && Z.push(re);
							const se = new a.$Sh(R.a);
							await a.Promises.settled(
								Q.map((re) => se.queue(() => this.i(re, ie, te, K, J, W))),
							);
							for (const re of Z) await this.i(re, ie, te, K, J, W);
							return { isFile: !1, resource: ie };
						}
					}
					async j(q, V, G, K) {
						const J = (0, h.$0e)({ highWaterMark: 10 }),
							W = this.f.writeFile(q, J);
						try {
							const X = V.stream().getReader();
							let Y = await X.read();
							for (; !Y.done && !K.isCancellationRequested; ) {
								const ie = h.$Te.wrap(Y.value);
								if ((await J.write(ie), K.isCancellationRequested)) break;
								G(V.size, ie.byteLength), (Y = await X.read());
							}
							J.end(void 0);
						} catch (X) {
							J.error(X), J.end();
						}
						K.isCancellationRequested || (await W);
					}
					k(q, V, G) {
						return new Promise((K, J) => {
							const W = new FileReader();
							(W.onload = async (X) => {
								try {
									if (X.target?.result instanceof ArrayBuffer) {
										const Y = h.$Te.wrap(new Uint8Array(X.target.result));
										await this.f.writeFile(q, Y), G(V.size, Y.byteLength);
									} else throw new Error("Could not read from dropped file.");
									K();
								} catch (Y) {
									J(Y);
								}
							}),
								W.readAsArrayBuffer(V);
						});
					}
				};
				(e.$PWb = B),
					(e.$PWb =
						B =
						R =
							Ne(
								[
									j(0, d.$8N),
									j(1, w.$GO),
									j(2, m.$LWb),
									j(3, u.$IY),
									j(4, E.$ll),
								],
								B,
							));
				let U = class {
					constructor(q, V, G, K, J, W, X, Y, ie, ne, ee) {
						(this.a = q),
							(this.b = V),
							(this.c = G),
							(this.d = K),
							(this.e = J),
							(this.f = W),
							(this.g = X),
							(this.h = Y),
							(this.i = ie),
							(this.j = ne),
							(this.k = ee);
					}
					async import(q, V, G) {
						const K = new i.$Ce(),
							J = this.i.withProgress(
								{
									location: d.ProgressLocation.Window,
									delay: 800,
									cancellable: !0,
									title: (0, t.localize)(6845, null),
								},
								async () => await this.l(q, V, G, K.token),
								() => K.dispose(!0),
							);
						return (
							this.i.withProgress({ location: r.$wUb, delay: 500 }, () => J), J
						);
					}
					async l(q, V, G, K) {
						const J = (0, k.$Lb)(
							(await this.k.invokeFunction((ie) => (0, b.$jzb)(ie, V))).map(
								(ie) => ie.resource,
							),
						);
						await Promise.all(
							J.map((ie) => this.a.activateProvider(ie.scheme)),
						);
						const W = (0, k.$Lb)(J.filter((ie) => this.a.hasProvider(ie))),
							X = await this.a.resolveAll(W.map((ie) => ({ resource: ie })));
						if (K.isCancellationRequested) return;
						this.b.focus(G);
						const Y = X.filter((ie) => ie.success && ie.stat?.isDirectory).map(
							(ie) => ({ uri: ie.stat.resource }),
						);
						if (Y.length > 0 && q.isRoot) {
							let ie;
							(function (Q) {
								(Q[(Q.Copy = 1)] = "Copy"), (Q[(Q.Add = 2)] = "Add");
							})(ie || (ie = {}));
							const ne = [
								{
									label:
										Y.length > 1
											? (0, t.localize)(6846, null)
											: (0, t.localize)(6847, null),
									run: () => ie.Copy,
								},
							];
							let ee;
							const _ = this.c.getWorkspace().folders.map((Q) => Q.uri.scheme);
							Y.some((Q) => _.indexOf(Q.uri.scheme) >= 0)
								? (ne.unshift({
										label:
											Y.length > 1
												? (0, t.localize)(6848, null)
												: (0, t.localize)(6849, null),
										run: () => ie.Add,
									}),
									(ee =
										Y.length > 1
											? (0, t.localize)(6850, null)
											: (0, t.localize)(6851, null, (0, c.$kh)(Y[0].uri))))
								: (ee =
										Y.length > 1
											? (0, t.localize)(6852, null)
											: (0, t.localize)(6853, null, (0, c.$kh)(Y[0].uri)));
							const { result: te } = await this.e.prompt({
								type: C.Severity.Info,
								message: ee,
								buttons: ne,
								cancelButton: !0,
							});
							if (te === ie.Add) return this.f.addFolders(Y);
							if (te === ie.Copy) return this.m(q, W, K);
						} else if (q instanceof g.$JWb) return this.m(q, W, K);
					}
					async m(q, V, G) {
						if (V && V.length > 0) {
							const K = await this.a.resolve(q.resource);
							if (G.isCancellationRequested) return;
							const J = new Set(),
								W = this.a.hasCapability(
									q.resource,
									E.FileSystemProviderCapabilities.PathCaseSensitive,
								);
							K.children &&
								K.children.forEach((_) => {
									J.add(W ? _.name : _.name.toLowerCase());
								});
							let X = 0;
							const Y = (0, k.$Lb)(
								await a.Promises.settled(
									V.map(async (_) => {
										if (!(await this.a.exists(_))) {
											X++;
											return;
										}
										if (
											!(
												J.has(
													W ? (0, c.$kh)(_) : (0, c.$kh)(_).toLowerCase(),
												) && !(await this.e.confirm(F((0, c.$kh)(_)))).confirmed
											)
										)
											return _;
									}),
								),
							);
							X > 0 &&
								this.j.error(
									X > 1
										? (0, t.localize)(6854, null)
										: (0, t.localize)(6855, null),
								);
							const ie = Y.map((_) => {
									const te = (0, c.$kh)(_),
										Q = (0, c.$nh)(q.resource, te);
									return new n.$uzb(_, Q, { overwrite: !0, copy: !0 });
								}),
								ne = this.d.getValue().explorer.confirmUndo;
							if (
								(await this.g.applyBulkEdit(ie, {
									undoLabel:
										Y.length === 1
											? (0, t.localize)(6856, null, (0, c.$kh)(Y[0]))
											: (0, t.localize)(6857, null, Y.length),
									progressLabel:
										Y.length === 1
											? (0, t.localize)(6858, null, (0, c.$kh)(Y[0]))
											: (0, t.localize)(6859, null, Y.length),
									progressLocation: d.ProgressLocation.Window,
									confirmBeforeUndo:
										ne === r.UndoConfirmLevel.Verbose ||
										ne === r.UndoConfirmLevel.Default,
								}),
								this.d.getValue().explorer.autoOpenDroppedFile &&
									ie.length === 1)
							) {
								const _ = this.g.findClosest(ie[0].newResource);
								_ &&
									!_.isDirectory &&
									this.h.openEditor({
										resource: _.resource,
										options: { pinned: !0 },
									});
							}
						}
					}
				};
				(e.$QWb = U),
					(e.$QWb = U =
						Ne(
							[
								j(0, E.$ll),
								j(1, o.$asb),
								j(2, f.$Vi),
								j(3, D.$gj),
								j(4, w.$GO),
								j(5, s.$mRb),
								j(6, m.$LWb),
								j(7, u.$IY),
								j(8, d.$8N),
								j(9, C.$4N),
								j(10, N.$Li),
							],
							U,
						));
				let z = class {
					static {
						O = this;
					}
					static {
						this.a = "workbench.explorer.downloadPath";
					}
					constructor(q, V, G, K, J, W) {
						(this.b = q),
							(this.c = V),
							(this.d = G),
							(this.e = K),
							(this.f = J),
							(this.g = W);
					}
					download(q) {
						const V = new i.$Ce(),
							G = this.d.withProgress(
								{
									location: d.ProgressLocation.Window,
									delay: 800,
									cancellable: l.$r,
									title: (0, t.localize)(6860, null),
								},
								async (K) => this.h(q, K, V),
								() => V.dispose(!0),
							);
						return (
							this.d.withProgress({ location: r.$wUb, delay: 500 }, () => G), G
						);
					}
					async h(q, V, G) {
						for (const K of q) {
							if (G.token.isCancellationRequested) return;
							l.$r ? await this.i(K.resource, V, G) : await this.o(K, V, G);
						}
					}
					async i(q, V, G) {
						const K = await this.b.resolve(q, { resolveMetadata: !0 });
						if (G.token.isCancellationRequested) return;
						const J = 32 * E.$Tl.MB,
							W = K.isDirectory || K.size > J,
							X = (0, y.$Ogb)();
						if (W && M.WebFileSystemAccess.supported(X))
							try {
								const Y = await X.showDirectoryPicker(),
									ie = {
										startTime: Date.now(),
										progressScheduler: new a.$1h((ne) => {
											V.report(ne[ne.length - 1]);
										}, 1e3),
										filesTotal: K.isDirectory ? 0 : 1,
										filesDownloaded: 0,
										totalBytesDownloaded: 0,
										fileBytesDownloaded: 0,
									};
								if (K.isDirectory) {
									const ne = await Y.getDirectoryHandle(K.name, { create: !0 });
									await this.m(K, ne, ie, G.token);
								} else await this.l(Y, K, ie, G.token);
								ie.progressScheduler.dispose();
							} catch (Y) {
								this.e.warn(Y), G.cancel();
							}
						else if (K.isFile) {
							let Y;
							try {
								Y = (
									await this.b.readFile(
										K.resource,
										{ limits: { size: J } },
										G.token,
									)
								).value.buffer;
							} catch {
								Y = v.$7g.uriToBrowserUri(K.resource);
							}
							G.token.isCancellationRequested || (0, y.$yhb)(Y, K.name);
						}
					}
					async j(q, V, G, K) {
						const J = await this.b.readFileStream(q, void 0, K);
						if (K.isCancellationRequested) {
							V.close();
							return;
						}
						return new Promise((W, X) => {
							const Y = J.value,
								ie = new T.$Zc();
							ie.add((0, T.$Yc)(() => V.close())),
								ie.add(
									(0, P.$hb)(K.onCancellationRequested)(() => {
										ie.dispose(), X((0, L.$0)());
									}),
								),
								(0, I.$Le)(
									Y,
									{
										onData: (ne) => {
											V.write(ne.buffer),
												this.n(J.name, J.size, ne.byteLength, G);
										},
										onError: (ne) => {
											ie.dispose(), X(ne);
										},
										onEnd: () => {
											ie.dispose(), W();
										},
									},
									K,
								);
						});
					}
					async k(q, V, G, K) {
						const J = await this.b.readFile(q, void 0, K);
						K.isCancellationRequested ||
							(V.write(J.value.buffer),
							this.n(J.name, J.size, J.value.byteLength, G)),
							V.close();
					}
					async l(q, V, G, K) {
						G.filesDownloaded++,
							(G.fileBytesDownloaded = 0),
							this.n(V.name, 0, 0, G);
						const W = await (
							await q.getFileHandle(V.name, { create: !0 })
						).createWritable();
						return V.size > E.$Tl.MB
							? this.j(V.resource, W, G, K)
							: this.k(V.resource, W, G, K);
					}
					async m(q, V, G, K) {
						if (q.children) {
							G.filesTotal += q.children.map((J) => J.isFile).length;
							for (const J of q.children) {
								if (K.isCancellationRequested) return;
								if (J.isFile) await this.l(V, J, G, K);
								else {
									const W = await V.getDirectoryHandle(J.name, { create: !0 }),
										X = await this.b.resolve(J.resource, {
											resolveMetadata: !0,
										});
									await this.m(X, W, G, K);
								}
							}
						}
					}
					n(q, V, G, K) {
						(K.fileBytesDownloaded += G), (K.totalBytesDownloaded += G);
						const J =
							K.totalBytesDownloaded / ((Date.now() - K.startTime) / 1e3);
						let W;
						V < E.$Tl.MB
							? K.filesTotal === 1
								? (W = q)
								: (W = (0, t.localize)(
										6861,
										null,
										K.filesDownloaded,
										K.filesTotal,
										E.$Tl.formatSize(J),
									))
							: (W = (0, t.localize)(
									6862,
									null,
									q,
									E.$Tl.formatSize(K.fileBytesDownloaded),
									E.$Tl.formatSize(V),
									E.$Tl.formatSize(J),
								)),
							K.progressScheduler.work({ message: W });
					}
					async o(q, V, G) {
						V.report({ message: q.name });
						let K;
						const J = this.g.get(O.a, A.StorageScope.APPLICATION);
						J
							? (K = (0, c.$nh)(p.URI.file(J), q.name))
							: (K = (0, c.$nh)(
									q.isDirectory
										? await this.f.defaultFolderPath(v.Schemas.file)
										: await this.f.defaultFilePath(v.Schemas.file),
									q.name,
								));
						const W = await this.f.showSaveDialog({
							availableFileSystems: [v.Schemas.file],
							saveLabel: (0, S.$DO)((0, t.localize)(6863, null)),
							title: (0, t.localize)(6864, null),
							defaultUri: K,
						});
						W
							? (this.g.store(
									O.a,
									(0, c.$mh)(W).fsPath,
									A.StorageScope.APPLICATION,
									A.StorageTarget.MACHINE,
								),
								await this.c.applyBulkEdit(
									[new n.$uzb(q.resource, W, { overwrite: !0, copy: !0 })],
									{
										undoLabel: (0, t.localize)(6865, null, q.name),
										progressLabel: (0, t.localize)(6866, null, q.name),
										progressLocation: d.ProgressLocation.Window,
									},
								))
							: G.cancel();
					}
				};
				(e.$RWb = z),
					(e.$RWb =
						z =
						O =
							Ne(
								[
									j(0, E.$ll),
									j(1, m.$LWb),
									j(2, d.$8N),
									j(3, $.$ik),
									j(4, w.$IO),
									j(5, A.$lq),
								],
								z,
							));
				function F(H) {
					return {
						message: (0, t.localize)(6867, null, H),
						detail: (0, t.localize)(6868, null),
						primaryButton: (0, t.localize)(6869, null),
						type: "warning",
					};
				}
				function x(H) {
					return H.length > 1
						? {
								message: (0, t.localize)(6870, null, H.length),
								detail:
									(0, w.$JO)(H) +
									`
` +
									(0, t.localize)(6871, null),
								primaryButton: (0, t.localize)(6872, null),
								type: "warning",
							}
						: F((0, c.$kh)(H[0]));
				}
			},
		),
		