import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/buffer.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/map.js';
import '../../../base/common/marshallingIds.js';
import '../../../base/common/strings.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../../platform/files/common/files.js';
import './cache.js';
import './extHost.protocol.js';
import './extHostCommands.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import '../../services/extensions/common/proxyIdentifier.js';
import './extHostNotebookDocument.js';
import './extHostNotebookEditor.js';
import '../../../base/common/objects.js';
import '../../../base/common/network.js';
import '../../services/search/common/search.js';
import '../../contrib/search/common/cellSearchModel.js';
import '../../contrib/search/common/searchNotebookHelpers.js';
import '../../services/editor/common/editorResolverService.js';
define(
			Pe[602],
			Ne([
				1, 0, 10, 22, 4, 3, 33, 55, 15, 19, 2, 32, 186, 6, 44, 17, 11, 74, 574,
				302, 27, 16, 41, 528, 601, 598,
			]),
			function (
				we,
				t,
				e,
				r,
				S,
				N,
				P,
				I,
				l,
				n,
				p,
				y,
				d,
				k,
				g,
				c,
				h,
				$,
				T,
				a,
				u,
				s,
				f,
				o,
				w,
				m,
			) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Hid = void 0),
					(y = tt(y)),
					(c = tt(c)),
					(h = tt(h));
				class E {
					static {
						this.a = 0;
					}
					get activeNotebookEditor() {
						return this.k?.apiEditor;
					}
					get visibleNotebookEditors() {
						return this.l.map((C) => C.apiEditor);
					}
					constructor(C, O, A, J, L, b, F) {
						(this.q = A),
							(this.r = J),
							(this.s = L),
							(this.t = b),
							(this.u = F),
							(this.f = new Map()),
							(this.g = new P.$Gc()),
							(this.h = new Map()),
							(this.j = new S.$re()),
							(this.onDidChangeActiveNotebookEditor = this.j.event),
							(this.l = []),
							(this.m = new S.$re()),
							(this.onDidOpenNotebookDocument = this.m.event),
							(this.n = new S.$re()),
							(this.onDidCloseNotebookDocument = this.n.event),
							(this.o = new S.$re()),
							(this.onDidChangeVisibleNotebookEditors = this.o.event),
							(this.p = new d.$7gd("NotebookCellStatusBarCache")),
							(this.x = 0),
							(this.y = new Map()),
							(this.b = C.getProxy(k.$lbb.MainThreadNotebook)),
							(this.c = C.getProxy(k.$lbb.MainThreadNotebookDocuments)),
							(this.d = C.getProxy(k.$lbb.MainThreadNotebookEditors)),
							(this.i = O.converter),
							O.registerArgumentProcessor({
								processArgument: (D) => {
									if (
										D &&
										D.$mid === I.MarshalledId.NotebookCellActionContext
									) {
										const M = D.notebookEditor?.notebookUri,
											z = D.cell.handle,
											H = this.g.get(M)?.getCell(z);
										if (H) return H.apiCell;
									}
									if (D && D.$mid === I.MarshalledId.NotebookActionContext) {
										const M = D.uri,
											z = this.g.get(M);
										if (z) return z.apiNotebook;
									}
									return D;
								},
							}),
							E.C(O);
					}
					getEditorById(C) {
						const O = this.h.get(C);
						if (!O)
							throw new Error(
								`unknown text editor: ${C}. known editors: ${[...this.h.keys()]} `,
							);
						return O;
					}
					getIdByEditor(C) {
						for (const [O, A] of this.h) if (A.apiEditor === C) return O;
					}
					get notebookDocuments() {
						return [...this.g.values()];
					}
					getNotebookDocument(C, O) {
						const A = this.g.get(C);
						if (!A && !O) throw new Error(`NO notebook document for '${C}'`);
						return A;
					}
					static w(C, O) {
						if (!O) return;
						const A = O.filenamePattern
							.map((J) => c.NotebookExclusiveDocumentPattern.from(J))
							.filter((J) => J !== void 0);
						if (O.filenamePattern && !A) {
							console.warn(
								`Notebook content provider view options file name pattern is invalid ${O.filenamePattern}`,
							);
							return;
						}
						return {
							extension: C.identifier,
							providerDisplayName: C.displayName || C.name,
							displayName: O.displayName,
							filenamePattern: A,
							priority: O.exclusive
								? m.RegisteredEditorPriority.exclusive
								: void 0,
						};
					}
					registerNotebookCellStatusBarItemProvider(C, O, A) {
						const J = E.a++,
							L =
								typeof A.onDidChangeCellStatusBarItems == "function"
									? E.a++
									: void 0;
						this.f.set(J, A),
							this.b.$registerNotebookCellStatusBarItemProvider(J, L, O);
						let b;
						return (
							L !== void 0 &&
								(b = A.onDidChangeCellStatusBarItems((F) =>
									this.b.$emitCellStatusBarEvent(L),
								)),
							new h.$nbb(() => {
								this.f.delete(J),
									this.b.$unregisterNotebookCellStatusBarItemProvider(J, L),
									b?.dispose();
							})
						);
					}
					async createNotebookDocument(C) {
						const O = await this.c.$tryCreateNotebook({
							viewType: C.viewType,
							content: C.content && c.NotebookData.from(C.content),
						});
						return p.URI.revive(O);
					}
					async openNotebookDocument(C) {
						const O = this.g.get(C);
						if (O) return O.apiNotebook;
						const A = await this.c.$tryOpenNotebook(C),
							J = this.g.get(p.URI.revive(A));
						return (0, n.$wg)(J?.apiNotebook);
					}
					async showNotebookDocument(C, O) {
						let A;
						typeof O == "object"
							? (A = {
									position: c.ViewColumn.from(O.viewColumn),
									preserveFocus: O.preserveFocus,
									selections:
										O.selections && O.selections.map(c.NotebookRange.from),
									pinned: typeof O.preview == "boolean" ? !O.preview : void 0,
									label: O?.label,
								})
							: (A = { preserveFocus: !1, pinned: !0 });
						const J = O?.asRepl ? "repl" : C.notebookType,
							L = await this.d.$tryShowNotebookDocument(C.uri, J, A),
							b = L && this.h.get(L)?.apiEditor;
						if (b) return b;
						throw L
							? new Error(
									`Could NOT open editor for "${C.uri.toString()}" because another editor opened in the meantime.`,
								)
							: new Error(`Could NOT open editor for "${C.uri.toString()}".`);
					}
					async $provideNotebookCellStatusBarItems(C, O, A, J) {
						const L = this.f.get(C),
							b = p.URI.revive(O),
							F = this.g.get(b);
						if (!F || !L) return;
						const D = F.getCellFromIndex(A);
						if (!D) return;
						const M = await L.provideCellStatusBarItems(D.apiCell, J);
						if (!M) return;
						const z = new N.$Zc(),
							Q = this.p.add([z]),
							B = (Array.isArray(M) ? M : [M]).map((U) =>
								c.NotebookStatusBarItem.from(U, this.i, z),
							);
						return { cacheId: Q, items: B };
					}
					$releaseNotebookCellStatusBarItems(C) {
						this.p.delete(C);
					}
					registerNotebookSerializer(C, O, A, J, L) {
						if ((0, l.$jf)(O))
							throw new Error("viewType cannot be empty or just whitespace");
						const b = this.x++;
						return (
							this.y.set(b, { viewType: O, serializer: A, options: J }),
							this.b.$registerNotebookSerializer(
								b,
								{ id: C.identifier, location: C.extensionLocation },
								O,
								c.NotebookDocumentContentOptions.from(J),
								E.w(C, L),
							),
							(0, N.$Yc)(() => {
								this.b.$unregisterNotebookSerializer(b);
							})
						);
					}
					async $dataToNotebook(C, O, A) {
						const J = this.y.get(C);
						if (!J) throw new Error("NO serializer found");
						const L = await J.serializer.deserializeNotebook(O.buffer, A);
						return new $.$uO(c.NotebookData.from(L));
					}
					async $notebookToData(C, O, A) {
						const J = this.y.get(C);
						if (!J) throw new Error("NO serializer found");
						const L = await J.serializer.serializeNotebook(
							c.NotebookData.to(O.value),
							A,
						);
						return r.$Te.wrap(L);
					}
					async $saveNotebook(C, O, A, J, L) {
						const b = p.URI.revive(O),
							F = this.y.get(C);
						if (
							(this.D(`enter saveNotebook(versionId: ${A}, ${b.toString()})`),
							!F)
						)
							throw new Error("NO serializer found");
						const D = this.g.get(b);
						if (!D) throw new Error("Document NOT found");
						if (D.versionId !== A) throw new Error("Document version mismatch");
						if (!this.s.value.isWritableFileSystem(b.scheme))
							throw new y.$Gl(
								(0, e.localize)(2716, null, this.A(b)),
								y.FileOperationResult.FILE_PERMISSION_DENIED,
							);
						const M = {
							metadata: (0, u.$Do)(
								D.apiNotebook.metadata,
								(U) => !(F.options?.transientDocumentMetadata ?? {})[U],
							),
							cells: [],
						};
						for (const U of D.apiNotebook.getCells()) {
							const Z = new h.$Scb(
								U.kind,
								U.document.getText(),
								U.document.languageId,
								U.mime,
								F.options?.transientOutputs ? [] : [...U.outputs],
								U.metadata,
								U.executionSummary,
							);
							(Z.metadata = (0, u.$Do)(
								U.metadata,
								(W) => !(F.options?.transientCellMetadata ?? {})[W],
							)),
								M.cells.push(Z);
						}
						if ((await this.z(b, J), L.isCancellationRequested))
							throw new Error("canceled");
						const z = await F.serializer.serializeNotebook(M, L);
						if (L.isCancellationRequested) throw new Error("canceled");
						this.D(`serialized versionId: ${A} ${b.toString()}`),
							await this.s.value.writeFile(b, z),
							this.D(`Finished write versionId: ${A} ${b.toString()}`);
						const Q = this.s.getFileSystemProviderExtUri(b.scheme),
							H = await this.s.value.stat(b),
							B = {
								name: Q.basename(b),
								isFile: (H.type & y.FileType.File) !== 0,
								isDirectory: (H.type & y.FileType.Directory) !== 0,
								isSymbolicLink: (H.type & y.FileType.SymbolicLink) !== 0,
								mtime: H.mtime,
								ctime: H.ctime,
								size: H.size,
								readonly:
									!!((H.permissions ?? 0) & y.FilePermission.Readonly) ||
									!this.s.value.isWritableFileSystem(b.scheme),
								locked: !!((H.permissions ?? 0) & y.FilePermission.Locked),
								etag: y.$Rl({ mtime: H.mtime, size: H.size }),
								children: void 0,
							};
						return (
							this.D(`exit saveNotebook(versionId: ${A}, ${b.toString()})`), B
						);
					}
					async $searchInNotebooks(C, O, A, J, L) {
						const b = this.y.get(C)?.serializer;
						if (!b) return { limitHit: !1, results: [] };
						const F = new P.$Hc();
						await (async (H, B, U) => {
							await Promise.all(
								H.map(
									async (Z) =>
										await Promise.all(
											Z.filenamePatterns.map((W) => {
												const G = {
													_reason: U._reason,
													folderQueries: U.folderQueries,
													includePattern: U.includePattern,
													excludePattern: U.excludePattern,
													maxResults: U.maxResults,
													type: f.QueryType.File,
													filePattern: W,
												};
												return this.t
													.doInternalFileSearchWithCustomCallback(
														G,
														B,
														(fe) => {
															fe.forEach((ae) => {
																F.has(ae) ||
																	J.some((he) =>
																		Z.isFromSettings && !he.isFromSettings
																			? !1
																			: he.filenamePatterns.some((_) =>
																					(0, m.$H6)(_, ae),
																				),
																	) ||
																	F.add(ae);
															});
														},
													)
													.catch((fe) => {
														if (fe.code === "ENOENT")
															return (
																console.warn(
																	"Could not find notebook search results, ignoring notebook results.",
																),
																{ limitHit: !1, messages: [] }
															);
														throw fe;
													});
											}),
										),
								),
							);
						})(A, L, O);
						const M = new P.$Gc();
						let z = !1;
						const Q = Array.from(F).map(async (H) => {
							const B = [];
							try {
								if (L.isCancellationRequested) return;
								if (
									O.maxResults &&
									[...M.values()].reduce(
										(G, fe) => G + fe.cellResults.length,
										0,
									) > O.maxResults
								) {
									z = !0;
									return;
								}
								const U = [],
									Z = this.g.get(H);
								if (Z)
									Z.apiNotebook
										.getCells()
										.forEach((fe) =>
											U.push({
												input: fe.document.getText(),
												outputs: fe.outputs.flatMap((ae) =>
													ae.items.map((Se) => Se.data.toString()),
												),
											}),
										);
								else {
									const G = await this.s.value.readFile(H),
										fe = r.$Te.fromString(G.toString()),
										ae = await b.deserializeNotebook(fe.buffer, L);
									if (L.isCancellationRequested) return;
									c.NotebookData.from(ae).cells.forEach((he) =>
										U.push({
											input: he.source,
											outputs: he.outputs.flatMap((_) =>
												_.items.map((oe) => oe.valueBytes.toString()),
											),
										}),
									);
								}
								if (L.isCancellationRequested) return;
								U.forEach((G, fe) => {
									const ae = O.contentPattern.pattern,
										Se = new o.$ENc(G.input, void 0, G.outputs),
										he = Se.findInInputs(ae),
										_ = Se.findInOutputs(ae),
										oe = _.flatMap((ke) =>
											(0, w.$U7)(ke.matches, ke.textBuffer),
										).map((ke, ge) => ((ke.webviewIndex = ge), ke));
									if (he.length > 0 || _.length > 0) {
										const ke = {
											index: fe,
											contentResults: (0, w.$U7)(he, Se.inputTextBuffer),
											webviewResults: oe,
										};
										B.push(ke);
									}
								});
								const W = { resource: H, cellResults: B };
								M.set(H, W);
								return;
							} catch {
								return;
							}
						});
						return (
							await Promise.all(Q), { limitHit: z, results: [...M.values()] }
						);
					}
					async z(C, O) {
						const A = await this.s.value.stat(C);
						if (
							typeof O?.mtime == "number" &&
							typeof O.etag == "string" &&
							O.etag !== y.$Ql &&
							typeof A.mtime == "number" &&
							typeof A.size == "number" &&
							O.mtime < A.mtime &&
							O.etag !== y.$Rl({ mtime: O.mtime, size: A.size })
						)
							throw new y.$Gl(
								(0, e.localize)(2717, null),
								y.FileOperationResult.FILE_MODIFIED_SINCE,
								O,
							);
					}
					A(C) {
						return C.scheme === s.Schemas.file ? C.fsPath : C.toString();
					}
					B(C, O, A) {
						if (this.h.has(O))
							throw new Error(`editor with id ALREADY EXSIST: ${O}`);
						const J = new a.$tid(
							O,
							this.d,
							C,
							A.visibleRanges.map(c.NotebookRange.to),
							A.selections.map(c.NotebookRange.to),
							typeof A.viewColumn == "number"
								? c.ViewColumn.to(A.viewColumn)
								: void 0,
						);
						this.h.set(O, J);
					}
					$acceptDocumentAndEditorsDelta(C) {
						if (C.value.removedDocuments)
							for (const A of C.value.removedDocuments) {
								const J = p.URI.revive(A),
									L = this.g.get(J);
								L &&
									(L.dispose(),
									this.g.delete(J),
									this.q.$acceptDocumentsAndEditorsDelta({
										removedDocuments: L.apiNotebook
											.getCells()
											.map((b) => b.document.uri),
									}),
									this.n.fire(L.apiNotebook));
								for (const b of this.h.values())
									b.notebookData.uri.toString() === J.toString() &&
										this.h.delete(b.id);
							}
						if (C.value.addedDocuments) {
							const A = [];
							for (const J of C.value.addedDocuments) {
								const L = p.URI.revive(J.uri);
								if (this.g.has(L))
									throw new Error(`adding EXISTING notebook ${L} `);
								const b = new T.$sid(this.c, this.q, this.r, L, J);
								A.push(...J.cells.map((F) => T.$rid.asModelAddData(F))),
									this.g.get(L)?.dispose(),
									this.g.set(L, b),
									this.q.$acceptDocumentsAndEditorsDelta({ addedDocuments: A }),
									this.m.fire(b.apiNotebook);
							}
						}
						if (C.value.addedEditors)
							for (const A of C.value.addedEditors) {
								if (this.h.has(A.id)) return;
								const J = p.URI.revive(A.documentUri),
									L = this.g.get(J);
								L && this.B(L, A.id, A);
							}
						const O = [];
						if (C.value.removedEditors)
							for (const A of C.value.removedEditors) {
								const J = this.h.get(A);
								J &&
									(this.h.delete(A),
									this.k?.id === J.id && (this.k = void 0),
									O.push(J));
							}
						if (C.value.visibleEditors) {
							this.l = C.value.visibleEditors
								.map((J) => this.h.get(J))
								.filter((J) => !!J);
							const A = new Set();
							this.l.forEach((J) => A.add(J.id));
							for (const J of this.h.values()) {
								const L = A.has(J.id);
								J._acceptVisibility(L);
							}
							(this.l = [...this.h.values()]
								.map((J) => J)
								.filter((J) => J.visible)),
								this.o.fire(this.visibleNotebookEditors);
						}
						C.value.newActiveEditor === null
							? (this.k = void 0)
							: C.value.newActiveEditor &&
								(this.h.get(C.value.newActiveEditor) ||
									console.error(
										`FAILED to find active notebook editor ${C.value.newActiveEditor}`,
									),
								(this.k = this.h.get(C.value.newActiveEditor))),
							C.value.newActiveEditor !== void 0 &&
								this.j.fire(this.k?.apiEditor);
					}
					static C(C) {
						const O = g.$0db.String.with("notebookType", "A notebook type"),
							A = new g.$_db(
								"vscode.executeDataToNotebook",
								"_executeDataToNotebook",
								"Invoke notebook serializer",
								[
									O,
									new g.$0db(
										"data",
										"Bytes to convert to data",
										(L) => L instanceof Uint8Array,
										(L) => r.$Te.wrap(L),
									),
								],
								new g.$$db("Notebook Data", (L) => c.NotebookData.to(L.value)),
							),
							J = new g.$_db(
								"vscode.executeNotebookToData",
								"_executeNotebookToData",
								"Invoke notebook serializer",
								[
									O,
									new g.$0db(
										"NotebookData",
										"Notebook data to convert to bytes",
										(L) => !0,
										(L) => new $.$uO(c.NotebookData.from(L)),
									),
								],
								new g.$$db("Bytes", (L) => L.buffer),
							);
						C.registerApiCommand(A), C.registerApiCommand(J);
					}
					D(C) {
						this.u.trace(`[Extension Host Notebook] ${C}`);
					}
				}
				t.$Hid = E;
			},
		),
		