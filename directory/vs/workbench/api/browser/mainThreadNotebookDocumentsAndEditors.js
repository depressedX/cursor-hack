import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/collections.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/log/common/log.js';
import './mainThreadNotebookDocuments.js';
import './mainThreadNotebookDto.js';
import './mainThreadNotebookEditors.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../services/editor/common/editorGroupColumn.js';
import '../../contrib/notebook/browser/notebookBrowser.js';
import '../../contrib/notebook/browser/services/notebookEditorService.js';
import '../../contrib/notebook/common/notebookService.js';
import '../../services/editor/common/editorGroupsService.js';
import '../../services/editor/common/editorService.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/proxyIdentifier.js';
define(
			de[3901],
			he([
				1, 0, 456, 3, 5, 34, 3900, 1027, 3483, 101, 446, 108, 293, 161, 66, 18,
				88, 622,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gpc = void 0);
				class b {
					static delta(y, $) {
						if (!y)
							return {
								addedDocuments: [...$.documents],
								removedDocuments: [],
								addedEditors: [...$.textEditors.values()],
								removedEditors: [],
								visibleEditors: [...$.visibleEditors].map((P) => P[0]),
							};
						const v = (0, t.$f)(y.documents, $.documents),
							S = (0, t.$g)(y.textEditors, $.textEditors),
							I = y.activeEditor !== $.activeEditor ? $.activeEditor : void 0,
							T = (0, t.$g)(y.visibleEditors, $.visibleEditors);
						return {
							addedDocuments: v.added,
							removedDocuments: v.removed.map((P) => P.uri),
							addedEditors: S.added,
							removedEditors: S.removed.map((P) => P.getId()),
							newActiveEditor: I,
							visibleEditors:
								T.added.length === 0 && T.removed.length === 0
									? void 0
									: [...$.visibleEditors].map((P) => P[0]),
						};
					}
					constructor(y, $, v, S) {
						(this.documents = y),
							(this.textEditors = $),
							(this.activeEditor = v),
							(this.visibleEditors = S);
					}
				}
				let s = (f = class {
					constructor(y, $, v, S, I, T, P) {
						(this.h = v),
							(this.i = S),
							(this.j = I),
							(this.k = T),
							(this.l = P),
							(this.b = new i.$Zc()),
							(this.c = new i.$0c()),
							(this.a = y.getProxy(p.$mbb.ExtHostNotebook)),
							(this.f = $.createInstance(C.$Epc, y)),
							(this.g = $.createInstance(m.$Fpc, y)),
							y.set(p.$lbb.MainThreadNotebookDocuments, this.f),
							y.set(p.$lbb.MainThreadNotebookEditors, this.g),
							this.h.onWillAddNotebookDocument(() => this.o(), this, this.b),
							this.h.onDidRemoveNotebookDocument(() => this.o(), this, this.b),
							this.j.onDidActiveEditorChange(() => this.o(), this, this.b),
							this.j.onDidVisibleEditorsChange(() => this.o(), this, this.b),
							this.i.onDidAddNotebookEditor(this.m, this, this.b),
							this.i.onDidRemoveNotebookEditor(this.n, this, this.b),
							this.o();
					}
					dispose() {
						this.f.dispose(),
							this.g.dispose(),
							this.b.dispose(),
							this.c.dispose();
					}
					m(y) {
						this.c.set(
							y.getId(),
							(0, i.$Xc)(
								y.onDidChangeModel(() => this.o()),
								y.onDidFocusWidget(() => this.o(y)),
							),
						),
							this.o();
					}
					n(y) {
						this.c.deleteAndDispose(y.getId()), this.o();
					}
					o(y) {
						const $ = new Map(),
							v = new Map();
						for (const P of this.i.listNotebookEditors())
							P.hasModel() && $.set(P.getId(), P);
						const S = (0, a.$eJb)(this.j.activeEditorPane);
						let I = null;
						S ? (I = S.getId()) : y?.textModel && (I = y.getId()),
							I &&
								!$.has(I) &&
								(this.l.trace(
									"MainThreadNotebooksAndEditors#_updateState: active editor is not in editors list",
									I,
									$.keys(),
								),
								(I = null));
						for (const P of this.j.visibleEditorPanes) {
							const k = (0, a.$eJb)(P);
							k?.hasModel() && $.has(k.getId()) && v.set(k.getId(), k);
						}
						const T = new b(new Set(this.h.listNotebookDocuments()), $, I, v);
						this.p(b.delta(this.d, T)), (this.d = T);
					}
					p(y) {
						if (f.q(y)) return;
						const $ = {
							removedDocuments: y.removedDocuments,
							removedEditors: y.removedEditors,
							newActiveEditor: y.newActiveEditor,
							visibleEditors: y.visibleEditors,
							addedDocuments: y.addedDocuments.map(f.r),
							addedEditors: y.addedEditors.map(this.s, this),
						};
						this.a.$acceptDocumentAndEditorsDelta(new o.$uO($)),
							this.g.handleEditorsRemoved(y.removedEditors),
							this.f.handleNotebooksRemoved(y.removedDocuments),
							this.f.handleNotebooksAdded(y.addedDocuments),
							this.g.handleEditorsAdded(y.addedEditors);
					}
					static q(y) {
						return !(
							(y.addedDocuments !== void 0 && y.addedDocuments.length > 0) ||
							(y.removedDocuments !== void 0 &&
								y.removedDocuments.length > 0) ||
							(y.addedEditors !== void 0 && y.addedEditors.length > 0) ||
							(y.removedEditors !== void 0 && y.removedEditors.length > 0) ||
							(y.visibleEditors !== void 0 && y.visibleEditors.length > 0) ||
							y.newActiveEditor !== void 0
						);
					}
					static r(y) {
						return {
							viewType: y.viewType,
							uri: y.uri,
							metadata: y.metadata,
							versionId: y.versionId,
							cells: y.cells.map(d.NotebookDto.toNotebookCellDto),
						};
					}
					s(y) {
						const $ = this.j.visibleEditorPanes.find(
							(v) => (0, a.$eJb)(v) === y,
						);
						return {
							id: y.getId(),
							documentUri: y.textModel.uri,
							selections: y.getSelections(),
							visibleRanges: y.visibleRanges,
							viewColumn: $ && (0, u.$b8)(this.k, $.group),
						};
					}
				});
				(e.$Gpc = s),
					(e.$Gpc =
						s =
						f =
							Ne(
								[
									r.$umc,
									j(1, w.$Li),
									j(2, c.$MIb),
									j(3, h.$n5b),
									j(4, g.$IY),
									j(5, n.$EY),
									j(6, E.$ik),
								],
								s,
							));
			},
		),
		