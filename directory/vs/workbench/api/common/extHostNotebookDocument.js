import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/network.js';
import '../../../base/common/uri.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import '../../contrib/notebook/common/notebookCommon.js';
define(
			Pe[574],
			Ne([1, 0, 16, 2, 17, 11, 194]),
			function (we, t, e, r, S, N, P) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$sid = t.$rid = void 0),
					(S = tt(S)),
					(P = tt(P));
				class I {
					constructor(y, d, k, g) {
						(this.start = y),
							(this.deletedCount = d),
							(this.deletedItems = k),
							(this.items = g);
					}
					asApiEvent() {
						return {
							range: new N.$Rcb(this.start, this.start + this.deletedCount),
							addedCells: this.items.map((y) => y.apiCell),
							removedCells: this.deletedItems,
						};
					}
				}
				class l {
					static asModelAddData(y) {
						return {
							EOL: y.eol,
							lines: y.source,
							languageId: y.language,
							uri: y.uri,
							isDirty: !1,
							versionId: 1,
						};
					}
					constructor(y, d, k) {
						(this.notebook = y),
							(this.h = d),
							(this.j = k),
							(this.handle = k.handle),
							(this.uri = r.URI.revive(k.uri)),
							(this.cellKind = k.cellKind),
							(this.a = k.outputs.map(S.NotebookCellOutput.to)),
							(this.e = k.internalMetadata ?? {}),
							(this.b = Object.freeze(k.metadata ?? {})),
							(this.d = Object.freeze(
								S.NotebookCellExecutionSummary.to(k.internalMetadata ?? {}),
							));
					}
					get internalMetadata() {
						return this.e;
					}
					get apiCell() {
						if (!this.f) {
							const y = this,
								d = this.h.getDocument(this.uri);
							if (!d)
								throw new Error(
									`MISSING extHostDocument for notebook cell: ${this.uri}`,
								);
							const k = {
								get index() {
									return y.notebook.getCellIndex(y);
								},
								notebook: y.notebook.apiNotebook,
								kind: S.NotebookCellKind.to(this.j.cellKind),
								document: d.document,
								get mime() {
									return y.g;
								},
								set mime(g) {
									y.g = g;
								},
								get outputs() {
									return y.a.slice(0);
								},
								get metadata() {
									return y.b;
								},
								get executionSummary() {
									return y.d;
								},
							};
							this.f = Object.freeze(k);
						}
						return this.f;
					}
					setOutputs(y) {
						this.a = y.map(S.NotebookCellOutput.to);
					}
					setOutputItems(y, d, k) {
						const g = k.map(S.NotebookCellOutputItem.to),
							c = this.a.find((h) => h.id === y);
						if (
							c &&
							(d || (c.items.length = 0),
							c.items.push(...g),
							c.items.length > 1 && c.items.every((h) => P.$76(h.mime)))
						) {
							const h = new Map(),
								$ = [];
							c.items.forEach((T) => {
								let a;
								h.has(T.mime)
									? (a = h.get(T.mime))
									: ((a = []), h.set(T.mime, a), $.push(T.mime)),
									a.push(T.data);
							}),
								(c.items.length = 0),
								$.forEach((T) => {
									const a = P.$86(h.get(T));
									c.items.push({ mime: T, data: a.data.buffer });
								});
						}
					}
					setMetadata(y) {
						this.b = Object.freeze(y);
					}
					setInternalMetadata(y) {
						(this.e = y),
							(this.d = Object.freeze(S.NotebookCellExecutionSummary.to(y)));
					}
					setMime(y) {}
				}
				t.$rid = l;
				class n {
					static {
						this.a = 0;
					}
					constructor(y, d, k, g, c) {
						(this.k = y),
							(this.l = d),
							(this.m = k),
							(this.uri = g),
							(this.handle = n.a++),
							(this.b = []),
							(this.g = 0),
							(this.h = !1),
							(this.j = !1),
							(this.d = c.viewType),
							(this.f = Object.freeze(c.metadata ?? Object.create(null))),
							this.r([[0, 0, c.cells]], !0, void 0),
							(this.g = c.versionId);
					}
					dispose() {
						this.j = !0;
					}
					get versionId() {
						return this.g;
					}
					get apiNotebook() {
						if (!this.e) {
							const y = this,
								d = {
									get uri() {
										return y.uri;
									},
									get version() {
										return y.g;
									},
									get notebookType() {
										return y.d;
									},
									get isDirty() {
										return y.h;
									},
									get isUntitled() {
										return y.uri.scheme === e.Schemas.untitled;
									},
									get isClosed() {
										return y.j;
									},
									get metadata() {
										return y.f;
									},
									get cellCount() {
										return y.b.length;
									},
									cellAt(k) {
										return (k = y.n(k)), y.b[k].apiCell;
									},
									getCells(k) {
										return (k ? y.p(k) : y.b).map((c) => c.apiCell);
									},
									save() {
										return y.q();
									},
									[Symbol.for("debug.description")]() {
										return `NotebookDocument(${this.uri.toString()})`;
									},
								};
							this.e = Object.freeze(d);
						}
						return this.e;
					}
					acceptDocumentPropertiesChanged(y) {
						y.metadata &&
							(this.f = Object.freeze({ ...this.f, ...y.metadata }));
					}
					acceptDirty(y) {
						this.h = y;
					}
					acceptModelChanged(y, d, k) {
						(this.g = y.versionId),
							(this.h = d),
							this.acceptDocumentPropertiesChanged({ metadata: k });
						const g = {
								notebook: this.apiNotebook,
								metadata: k,
								cellChanges: [],
								contentChanges: [],
							},
							c = [];
						for (const $ of y.rawEvents)
							$.kind === P.NotebookCellsChangeType.ModelChange
								? this.r($.changes, !1, g.contentChanges)
								: $.kind === P.NotebookCellsChangeType.Move
									? this.s($.index, $.length, $.newIdx, g.contentChanges)
									: $.kind === P.NotebookCellsChangeType.Output
										? (this.t($.index, $.outputs),
											c.push({
												cell: this.b[$.index].apiCell,
												outputs: this.b[$.index].apiCell.outputs,
											}))
										: $.kind === P.NotebookCellsChangeType.OutputItem
											? (this.u($.index, $.outputId, $.append, $.outputItems),
												c.push({
													cell: this.b[$.index].apiCell,
													outputs: this.b[$.index].apiCell.outputs,
												}))
											: $.kind === P.NotebookCellsChangeType.ChangeCellLanguage
												? (this.v($.index, $.language),
													c.push({
														cell: this.b[$.index].apiCell,
														document: this.b[$.index].apiCell.document,
													}))
												: $.kind === P.NotebookCellsChangeType.ChangeCellContent
													? c.push({
															cell: this.b[$.index].apiCell,
															document: this.b[$.index].apiCell.document,
														})
													: $.kind === P.NotebookCellsChangeType.ChangeCellMime
														? this.w($.index, $.mime)
														: $.kind ===
																P.NotebookCellsChangeType.ChangeCellMetadata
															? (this.x($.index, $.metadata),
																c.push({
																	cell: this.b[$.index].apiCell,
																	metadata: this.b[$.index].apiCell.metadata,
																}))
															: $.kind ===
																	P.NotebookCellsChangeType
																		.ChangeCellInternalMetadata &&
																(this.y($.index, $.internalMetadata),
																c.push({
																	cell: this.b[$.index].apiCell,
																	executionSummary:
																		this.b[$.index].apiCell.executionSummary,
																}));
						const h = new Map();
						for (let $ = 0; $ < c.length; $++) {
							const T = c[$],
								a = h.get(T.cell);
							if (a === void 0) {
								const u = g.cellChanges.push({
									document: void 0,
									executionSummary: void 0,
									metadata: void 0,
									outputs: void 0,
									...T,
								});
								h.set(T.cell, u - 1);
							} else g.cellChanges[a] = { ...g.cellChanges[a], ...T };
						}
						return (
							Object.freeze(g),
							Object.freeze(g.cellChanges),
							Object.freeze(g.contentChanges),
							g
						);
					}
					n(y) {
						return (
							(y = y | 0),
							y < 0 ? 0 : y >= this.b.length ? this.b.length - 1 : y
						);
					}
					o(y) {
						let d = y.start | 0,
							k = y.end | 0;
						return (
							d < 0 && (d = 0),
							k > this.b.length && (k = this.b.length),
							y.with({ start: d, end: k })
						);
					}
					p(y) {
						y = this.o(y);
						const d = [];
						for (let k = y.start; k < y.end; k++) d.push(this.b[k]);
						return d;
					}
					async q() {
						return this.j
							? Promise.reject(new Error("Notebook has been closed"))
							: this.k.$trySaveNotebook(this.uri);
					}
					r(y, d, k) {
						if (this.j) return;
						const g = [],
							c = [],
							h = [];
						if (
							(y.reverse().forEach(($) => {
								const a = $[2].map((f) => {
										const o = new l(this, this.l, f);
										return d || c.push(l.asModelAddData(f)), o;
									}),
									u = new I($[0], $[1], [], a),
									s = this.b.splice($[0], $[1], ...a);
								for (const f of s)
									h.push(f.uri), u.deletedItems.push(f.apiCell);
								g.push(u);
							}),
							this.l.acceptDocumentsAndEditorsDelta({
								addedDocuments: c,
								removedDocuments: h,
							}),
							k)
						)
							for (const $ of g) k.push($.asApiEvent());
					}
					s(y, d, k, g) {
						const c = this.b.splice(y, d);
						this.b.splice(k, 0, ...c);
						const h = [
							new I(
								y,
								d,
								c.map(($) => $.apiCell),
								[],
							),
							new I(k, 0, [], c),
						];
						for (const $ of h) g.push($.asApiEvent());
					}
					t(y, d) {
						this.b[y].setOutputs(d);
					}
					u(y, d, k, g) {
						this.b[y].setOutputItems(d, k, g);
					}
					v(y, d) {
						const k = this.b[y];
						k.apiCell.document.languageId !== d &&
							this.m.$acceptModelLanguageChanged(k.uri, d);
					}
					w(y, d) {
						const k = this.b[y];
						k.apiCell.mime = d;
					}
					x(y, d) {
						this.b[y].setMetadata(d);
					}
					y(y, d) {
						this.b[y].setInternalMetadata(d);
					}
					getCellFromApiCell(y) {
						return this.b.find((d) => d.apiCell === y);
					}
					getCellFromIndex(y) {
						return this.b[y];
					}
					getCell(y) {
						return this.b.find((d) => d.handle === y);
					}
					getCellIndex(y) {
						return this.b.indexOf(y);
					}
				}
				t.$sid = n;
			},
		),
		