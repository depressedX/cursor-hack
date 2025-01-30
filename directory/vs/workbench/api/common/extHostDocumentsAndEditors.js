import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/assert.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uri.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHost.protocol.js';
import './extHostDocumentData.js';
import './extHostRpcService.js';
import './extHostTextEditor.js';
import './extHostTypeConverters.js';
import '../../../platform/log/common/log.js';
import '../../../base/common/map.js';
import '../../../base/common/network.js';
import '../../../base/common/iterator.js';
import '../../../base/common/lazy.js';
define(
			Pe[93],
			Ne([1, 0, 104, 4, 3, 2, 5, 6, 301, 21, 305, 17, 14, 33, 16, 54, 71]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c, h) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Xdb = t.$Wdb = void 0),
					(e = tt(e)),
					(y = tt(y));
				class $ {
					constructor(u) {
						(this.value = u), (this.a = 0);
					}
					ref() {
						this.a++;
					}
					unref() {
						return --this.a === 0;
					}
				}
				let T = class {
					constructor(u, s) {
						(this.h = u),
							(this.i = s),
							(this.a = null),
							(this.b = new Map()),
							(this.c = new k.$Gc()),
							(this.d = new r.$re()),
							(this.e = new r.$re()),
							(this.f = new r.$re()),
							(this.g = new r.$re()),
							(this.onDidAddDocuments = this.d.event),
							(this.onDidRemoveDocuments = this.e.event),
							(this.onDidChangeVisibleTextEditors = this.f.event),
							(this.onDidChangeActiveTextEditor = this.g.event);
					}
					$acceptDocumentsAndEditorsDelta(u) {
						this.acceptDocumentsAndEditorsDelta(u);
					}
					acceptDocumentsAndEditorsDelta(u) {
						const s = [],
							f = [],
							o = [];
						if (u.removedDocuments)
							for (const w of u.removedDocuments) {
								const m = N.URI.revive(w),
									E = this.c.get(m);
								E?.unref() && (this.c.delete(m), s.push(E.value));
							}
						if (u.addedDocuments)
							for (const w of u.addedDocuments) {
								const m = N.URI.revive(w.uri);
								let E = this.c.get(m);
								if (
									E &&
									m.scheme !== g.Schemas.vscodeNotebookCell &&
									m.scheme !== g.Schemas.vscodeInteractiveInput
								)
									throw new Error(`document '${m} already exists!'`);
								E ||
									((E = new $(
										new l.$Pdb(
											this.h.getProxy(I.$lbb.MainThreadDocuments),
											m,
											w.lines,
											w.EOL,
											w.versionId,
											w.languageId,
											w.isDirty,
										),
									)),
									this.c.set(m, E),
									f.push(E.value)),
									E.ref();
							}
						if (u.removedEditors)
							for (const w of u.removedEditors) {
								const m = this.b.get(w);
								this.b.delete(w), m && o.push(m);
							}
						if (u.addedEditors)
							for (const w of u.addedEditors) {
								const m = N.URI.revive(w.documentUri);
								e.ok(this.c.has(m), `document '${m}' does not exist`),
									e.ok(!this.b.has(w.id), `editor '${w.id}' already exists!`);
								const E = this.c.get(m).value,
									R = new p.$Vdb(
										w.id,
										this.h.getProxy(I.$lbb.MainThreadTextEditors),
										this.i,
										new h.$Y(() => E.document),
										w.selections.map(y.Selection.to),
										w.options,
										w.visibleRanges.map((C) => y.Range.to(C)),
										typeof w.editorPosition == "number"
											? y.ViewColumn.to(w.editorPosition)
											: void 0,
									);
								this.b.set(w.id, R);
							}
						u.newActiveEditor !== void 0 &&
							(e.ok(
								u.newActiveEditor === null || this.b.has(u.newActiveEditor),
								`active editor '${u.newActiveEditor}' does not exist`,
							),
							(this.a = u.newActiveEditor)),
							(0, S.$Vc)(s),
							(0, S.$Vc)(o),
							u.removedDocuments && this.e.fire(s),
							u.addedDocuments && this.d.fire(f),
							(u.removedEditors || u.addedEditors) &&
								this.f.fire(this.allEditors().map((w) => w.value)),
							u.newActiveEditor !== void 0 && this.g.fire(this.activeEditor());
					}
					getDocument(u) {
						return this.c.get(u)?.value;
					}
					allDocuments() {
						return c.Iterable.map(this.c.values(), (u) => u.value);
					}
					getEditor(u) {
						return this.b.get(u);
					}
					activeEditor(u) {
						if (!this.a) return;
						const s = this.b.get(this.a);
						return u ? s : s?.value;
					}
					allEditors() {
						return [...this.b.values()];
					}
				};
				(t.$Wdb = T),
					(t.$Wdb = T = wt([rt(0, n.$08), rt(1, d.$ik)], T)),
					(t.$Xdb = (0, P.$Mi)("IExtHostDocumentsAndEditors"));
			},
		),
		