import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/map.js';
import '../../../base/common/uri.js';
import './mainThreadDocuments.js';
import '../../contrib/notebook/common/notebookCommon.js';
import '../../contrib/notebook/common/notebookEditorModelResolverService.js';
import '../../../platform/uriIdentity/common/uriIdentity.js';
import '../common/extHost.protocol.js';
import './mainThreadNotebookDto.js';
import '../../services/extensions/common/proxyIdentifier.js';
define(
			de[3900],
			he([1, 0, 3, 59, 9, 1342, 70, 509, 68, 88, 1027, 622]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*map*/,
 w /*uri*/,
 E /*mainThreadDocuments*/,
 C /*notebookCommon*/,
 d /*notebookEditorModelResolverService*/,
 m /*uriIdentity*/,
 r /*extHost.protocol*/,
 u /*mainThreadNotebookDto*/,
 a /*proxyIdentifier*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Epc = void 0);
				let h = class {
					constructor(n, g, p) {
						(this.f = g),
							(this.g = p),
							(this.a = new t.$Zc()),
							(this.c = new i.$Gc()),
							(this.b = n.getProxy(r.$mbb.ExtHostNotebookDocuments)),
							(this.d = new E.$3mc(this.g.extUri)),
							this.a.add(
								this.f.onDidChangeDirty((o) =>
									this.b.$acceptDirtyStateChanged(o.resource, o.isDirty()),
								),
							),
							this.a.add(
								this.f.onDidSaveNotebook((o) => this.b.$acceptModelSaved(o)),
							),
							this.a.add(
								g.onWillFailWithConflict((o) => {
									this.d.remove(o.resource);
								}),
							);
					}
					dispose() {
						this.a.dispose(), this.d.dispose(), (0, t.$Vc)(this.c.values());
					}
					handleNotebooksAdded(n) {
						for (const g of n) {
							const p = new t.$Zc();
							p.add(
								g.onDidChangeContent((o) => {
									const f = { versionId: o.versionId, rawEvents: [] };
									for (const s of o.rawEvents)
										switch (s.kind) {
											case C.NotebookCellsChangeType.ModelChange:
												f.rawEvents.push({
													kind: s.kind,
													changes: s.changes.map((l) => [
														l[0],
														l[1],
														l[2].map((y) => u.NotebookDto.toNotebookCellDto(y)),
													]),
												});
												break;
											case C.NotebookCellsChangeType.Move:
												f.rawEvents.push({
													kind: s.kind,
													index: s.index,
													length: s.length,
													newIdx: s.newIdx,
												});
												break;
											case C.NotebookCellsChangeType.Output:
												f.rawEvents.push({
													kind: s.kind,
													index: s.index,
													outputs: s.outputs.map(
														u.NotebookDto.toNotebookOutputDto,
													),
												});
												break;
											case C.NotebookCellsChangeType.OutputItem:
												f.rawEvents.push({
													kind: s.kind,
													index: s.index,
													outputId: s.outputId,
													outputItems: s.outputItems.map(
														u.NotebookDto.toNotebookOutputItemDto,
													),
													append: s.append,
												});
												break;
											case C.NotebookCellsChangeType.ChangeCellLanguage:
											case C.NotebookCellsChangeType.ChangeCellContent:
											case C.NotebookCellsChangeType.ChangeCellMetadata:
											case C.NotebookCellsChangeType.ChangeCellInternalMetadata:
												f.rawEvents.push(s);
												break;
										}
									const b = o.rawEvents.find(
										(s) =>
											s.kind ===
											C.NotebookCellsChangeType.ChangeDocumentMetadata,
									);
									this.b.$acceptModelChanged(
										g.uri,
										new a.$uO(f),
										this.f.isDirty(g.uri),
										b ? g.metadata : void 0,
									);
								}),
							),
								this.c.set(g.uri, p);
						}
					}
					handleNotebooksRemoved(n) {
						for (const g of n) this.c.get(g)?.dispose(), this.c.delete(g);
					}
					async $tryCreateNotebook(n) {
						if (n.content) {
							const g = await this.f.resolve(
								{ untitledResource: void 0 },
								n.viewType,
							);
							if (
								(g.object.notebook.onWillDispose(() => {
									g.dispose();
								}),
								this.b.$acceptDirtyStateChanged(g.object.resource, !0),
								n.content)
							) {
								const p = u.NotebookDto.fromNotebookDataDto(n.content);
								g.object.notebook.reset(
									p.cells,
									p.metadata,
									g.object.notebook.transientOptions,
								);
							}
							return g.object.notebook.uri;
						} else
							return (await this.f.createUntitledNotebookTextModel(n.viewType))
								.uri;
					}
					async $tryOpenNotebook(n) {
						const g = w.URI.revive(n),
							p = await this.f.resolve(g, void 0);
						return (
							n.scheme === "untitled" &&
								p.object.notebook.onWillDispose(() => {
									p.dispose();
								}),
							this.d.add(g, p),
							g
						);
					}
					async $trySaveNotebook(n) {
						const g = w.URI.revive(n),
							p = await this.f.resolve(g),
							o = await p.object.save();
						return p.dispose(), o;
					}
				};
				(e.$Epc = h), (e.$Epc = h = Ne([j(1, d.$OIb), j(2, m.$Vl)], h));
			},
		),
		