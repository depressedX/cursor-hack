import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/network.js';
import '../../../multiDiffEditor/browser/multiDiffSourceResolverService.js';
import './diffElementViewModel.js';
import './notebookDiffEditorBrowser.js';
import '../../common/notebookCommon.js';
define(
			de[1847],
			he([1, 0, 6, 3, 23, 800, 706, 556, 70]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*network*/,
 E /*multiDiffSourceResolverService*/,
 C /*diffElementViewModel*/,
 d /*notebookDiffEditorBrowser*/,
 m /*notebookCommon*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZEc = e.$XEc = void 0),
					(e.$YEc = u);
				class r extends i.$1c {
					get items() {
						return this.f;
					}
					get value() {
						return this.n
							.filter((s) => s.type !== "placeholder")
							.filter((s) =>
								this.r
									? !0
									: s instanceof p || s instanceof o || s instanceof f
										? !(
												s.type === "unchanged" &&
												s.containerType === "unchanged"
											)
										: !0,
							)
							.filter((s) => (s instanceof f ? !this.s : !0))
							.filter((s) => (s instanceof o ? !this.t : !0));
					}
					get hasUnchangedCells() {
						return this.q === !0;
					}
					get includeUnchanged() {
						return this.r === !0;
					}
					set includeUnchanged(s) {
						(this.r = s), this.m.fire();
					}
					constructor(s, l, y, $, v, S, I, T) {
						super(),
							(this.w = s),
							(this.z = l),
							(this.C = y),
							(this.F = $),
							(this.G = v),
							(this.H = S),
							(this.I = I),
							(this.J = T),
							(this.c = new Map()),
							(this.f = []),
							(this.g = this.D(new t.$re())),
							(this.onDidChangeItems = this.g.event),
							(this.h = this.D(new i.$Zc())),
							(this.m = this.D(new t.$re())),
							(this.n = []),
							(this.onDidChange = this.m.event),
							(this.u = []),
							(this.s =
								this.w.modified.notebook.transientOptions.transientOutputs ||
								this.F.getValue("notebook.diff.ignoreOutputs")),
							(this.t = this.F.getValue("notebook.diff.ignoreMetadata")),
							this.D(
								this.F.onDidChangeConfiguration((P) => {
									let k = !1;
									if (P.affectsConfiguration("notebook.diff.ignoreMetadata")) {
										const L = this.F.getValue("notebook.diff.ignoreMetadata");
										L !== void 0 && this.t !== L && ((this.t = L), (k = !0));
									}
									if (P.affectsConfiguration("notebook.diff.ignoreOutputs")) {
										const L = this.F.getValue("notebook.diff.ignoreOutputs");
										L !== void 0 &&
											this.s !==
												(L ||
													this.w.modified.notebook.transientOptions
														.transientOutputs) &&
											((this.s =
												L ||
												!!this.w.modified.notebook.transientOptions
													.transientOutputs),
											(k = !0));
									}
									k && this.m.fire();
								}),
							);
					}
					dispose() {
						this.L(), super.dispose();
					}
					L() {
						this.h.clear(),
							(0, i.$Vc)(Array.from(this.c.keys())),
							this.c.clear(),
							(0, i.$Vc)(this.u),
							(this.u = []),
							(0, i.$Vc)(this.f),
							this.f.splice(0, this.f.length);
					}
					async computeDiff(s) {
						const l = await this.z.computeDiff(
							this.w.original.resource,
							this.w.modified.resource,
						);
						if (s.isCancellationRequested) return;
						u(this.w, l.cellsDiff);
						const { cellDiffInfo: y, firstChangeIndex: $ } = a(this.w, l);
						if (!h(y, this.u, this.w))
							return this.N(y), this.M(), { firstChangeIndex: $ };
					}
					M() {
						this.n = [];
						const s = this.w.original.resource,
							l = this.w.modified.resource;
						(this.q = !1),
							this.items.forEach((y) => {
								switch (y.type) {
									case "delete": {
										this.n.push(new p(y.original.uri, void 0, y.type, y.type));
										const $ = m.CellUri.generateCellPropertyUri(
											s,
											y.original.handle,
											w.Schemas.vscodeNotebookCellMetadata,
										);
										this.n.push(new o($, void 0, y.type, y.type));
										const v = m.CellUri.generateCellPropertyUri(
											s,
											y.original.handle,
											w.Schemas.vscodeNotebookCellOutput,
										);
										this.n.push(new f(v, void 0, y.type, y.type));
										break;
									}
									case "insert": {
										this.n.push(new p(void 0, y.modified.uri, y.type, y.type));
										const $ = m.CellUri.generateCellPropertyUri(
											l,
											y.modified.handle,
											w.Schemas.vscodeNotebookCellMetadata,
										);
										this.n.push(new o(void 0, $, y.type, y.type));
										const v = m.CellUri.generateCellPropertyUri(
											l,
											y.modified.handle,
											w.Schemas.vscodeNotebookCellOutput,
										);
										this.n.push(new f(void 0, v, y.type, y.type));
										break;
									}
									case "modified": {
										const $ = y.checkIfInputModified() ? y.type : "unchanged",
											v =
												y.checkIfInputModified() ||
												y.checkMetadataIfModified() ||
												y.checkIfOutputsModified()
													? y.type
													: "unchanged";
										this.n.push(new p(y.original.uri, y.modified.uri, $, v));
										const S = m.CellUri.generateCellPropertyUri(
												s,
												y.original.handle,
												w.Schemas.vscodeNotebookCellMetadata,
											),
											I = m.CellUri.generateCellPropertyUri(
												l,
												y.modified.handle,
												w.Schemas.vscodeNotebookCellMetadata,
											);
										this.n.push(
											new o(
												S,
												I,
												y.checkMetadataIfModified() ? y.type : "unchanged",
												v,
											),
										);
										const T = m.CellUri.generateCellPropertyUri(
												s,
												y.original.handle,
												w.Schemas.vscodeNotebookCellOutput,
											),
											P = m.CellUri.generateCellPropertyUri(
												l,
												y.modified.handle,
												w.Schemas.vscodeNotebookCellOutput,
											);
										this.n.push(
											new f(
												T,
												P,
												y.checkIfOutputsModified() ? y.type : "unchanged",
												v,
											),
										);
										break;
									}
									case "unchanged": {
										(this.q = !0),
											this.n.push(
												new p(y.original.uri, y.modified.uri, y.type, y.type),
											);
										const $ = m.CellUri.generateCellPropertyUri(
												s,
												y.original.handle,
												w.Schemas.vscodeNotebookCellMetadata,
											),
											v = m.CellUri.generateCellPropertyUri(
												l,
												y.modified.handle,
												w.Schemas.vscodeNotebookCellMetadata,
											);
										this.n.push(new o($, v, y.type, y.type));
										const S = m.CellUri.generateCellPropertyUri(
												s,
												y.original.handle,
												w.Schemas.vscodeNotebookCellOutput,
											),
											I = m.CellUri.generateCellPropertyUri(
												l,
												y.modified.handle,
												w.Schemas.vscodeNotebookCellOutput,
											);
										this.n.push(new f(S, I, y.type, y.type));
										break;
									}
								}
							}),
							this.m.fire();
					}
					N(s) {
						const l = c(this.C, this.F, this.w, this.G, s, this.I, this.H),
							y = this.f.length;
						this.L(), this.f.splice(0, y);
						let $;
						(this.u = l),
							l.forEach((v, S) => {
								if (v.type === "unchanged" && !this.J) {
									if (!$) {
										(v.displayIconToHideUnmodifiedCells = !0),
											($ = new C.$PEc(
												v.mainDocumentTextModel,
												v.editorEventDispatcher,
												v.initData,
											)),
											this.f.push($);
										const T = $;
										this.h.add(
											T.onUnfoldHiddenCells(() => {
												const P = this.c.get(T);
												if (!Array.isArray(P)) return;
												const k = this.f.indexOf(T);
												this.f.splice(k, 1, ...P),
													this.g.fire({
														start: k,
														deleteCount: 1,
														elements: P,
													});
											}),
										),
											this.h.add(
												v.onHideUnchangedCells(() => {
													const P = this.c.get(T);
													if (!Array.isArray(P)) return;
													const k = this.f.indexOf(v);
													this.f.splice(k, P.length, T),
														this.g.fire({
															start: k,
															deleteCount: P.length,
															elements: [T],
														});
												}),
											);
									}
									const I = this.c.get($) || [];
									I.push(v), this.c.set($, I), $.hiddenCells.push(v);
								} else ($ = void 0), this.f.push(v);
							}),
							this.g.fire({ start: 0, deleteCount: y, elements: this.f });
					}
				}
				e.$XEc = r;
				function u(b, s) {
					const l = s.changes;
					for (let y = 0; y < s.changes.length - 1; y++) {
						const $ = l[y],
							v = l[y + 1],
							S = $.originalStart,
							I = $.modifiedStart;
						$.originalLength === 1 &&
							$.modifiedLength === 0 &&
							v.originalStart === S + 2 &&
							v.originalLength === 0 &&
							v.modifiedStart === I + 1 &&
							v.modifiedLength === 1 &&
							b.original.notebook.cells[S].getHashValue() ===
								b.modified.notebook.cells[I + 1].getHashValue() &&
							b.original.notebook.cells[S + 1].getHashValue() ===
								b.modified.notebook.cells[I].getHashValue() &&
							(($.originalStart = S),
							($.originalLength = 0),
							($.modifiedStart = I),
							($.modifiedLength = 1),
							(v.originalStart = S + 1),
							(v.originalLength = 1),
							(v.modifiedStart = I + 2),
							(v.modifiedLength = 0),
							y++);
					}
				}
				function a(b, s) {
					const l = s.cellsDiff.changes,
						y = [],
						$ = b.original.notebook,
						v = b.modified.notebook;
					let S = 0,
						I = 0,
						T = -1;
					for (let P = 0; P < l.length; P++) {
						const k = l[P];
						for (let D = 0; D < k.originalStart - S; D++) {
							const M = $.cells[S + D],
								N = v.cells[I + D];
							M.getHashValue() === N.getHashValue()
								? y.push({
										originalCellIndex: S + D,
										modifiedCellIndex: I + D,
										type: "unchanged",
									})
								: (T === -1 && (T = y.length),
									y.push({
										originalCellIndex: S + D,
										modifiedCellIndex: I + D,
										type: "modified",
									}));
						}
						const L = n(k, $, v);
						L.length && T === -1 && (T = y.length),
							y.push(...L),
							(S = k.originalStart + k.originalLength),
							(I = k.modifiedStart + k.modifiedLength);
					}
					for (let P = S; P < $.cells.length; P++)
						y.push({
							originalCellIndex: P,
							modifiedCellIndex: P - S + I,
							type: "unchanged",
						});
					return { cellDiffInfo: y, firstChangeIndex: T };
				}
				function h(b, s, l) {
					if (b.length !== s.length) return !1;
					const y = l.original.notebook,
						$ = l.modified.notebook;
					for (let v = 0; v < s.length; v++) {
						const S = b[v],
							I = s[v];
						if (S.type !== I.type) return !1;
						switch (S.type) {
							case "delete": {
								if (y.cells[S.originalCellIndex].handle !== I.original?.handle)
									return !1;
								continue;
							}
							case "insert": {
								if ($.cells[S.modifiedCellIndex].handle !== I.modified?.handle)
									return !1;
								continue;
							}
							default: {
								if (
									y.cells[S.originalCellIndex].handle !== I.original?.handle ||
									$.cells[S.modifiedCellIndex].handle !== I.modified?.handle
								)
									return !1;
								continue;
							}
						}
					}
					return !0;
				}
				function c(b, s, l, y, $, v, S) {
					const I = l.original.notebook,
						T = l.modified.notebook,
						P = {
							metadataStatusHeight: s.getValue("notebook.diff.ignoreMetadata")
								? 0
								: 25,
							outputStatusHeight:
								s.getValue("notebook.diff.ignoreOutputs") ||
								T.transientOptions.transientOutputs
									? 0
									: 25,
							fontInfo: v,
						};
					return $.map((k) => {
						switch (k.type) {
							case "delete":
								return new C.$SEc(
									I,
									T,
									I.cells[k.originalCellIndex],
									void 0,
									"delete",
									y,
									P,
									S,
								);
							case "insert":
								return new C.$SEc(
									T,
									I,
									void 0,
									T.cells[k.modifiedCellIndex],
									"insert",
									y,
									P,
									S,
								);
							case "modified":
								return new C.$REc(
									l.modified.notebook,
									l.original.notebook,
									I.cells[k.originalCellIndex],
									T.cells[k.modifiedCellIndex],
									"modified",
									y,
									P,
									S,
								);
							case "unchanged":
								return new C.$REc(
									l.modified.notebook,
									l.original.notebook,
									I.cells[k.originalCellIndex],
									T.cells[k.modifiedCellIndex],
									"unchanged",
									y,
									P,
									S,
								);
						}
					});
				}
				function n(b, s, l) {
					const y = [],
						$ = Math.min(b.originalLength, b.modifiedLength);
					for (let v = 0; v < $; v++) {
						const S = s.cells[b.originalStart + v].equal(
							l.cells[b.modifiedStart + v],
						);
						y.push({
							originalCellIndex: b.originalStart + v,
							modifiedCellIndex: b.modifiedStart + v,
							type: S ? "unchanged" : "modified",
						});
					}
					for (let v = $; v < b.originalLength; v++)
						y.push({ originalCellIndex: b.originalStart + v, type: "delete" });
					for (let v = $; v < b.modifiedLength; v++)
						y.push({ modifiedCellIndex: b.modifiedStart + v, type: "insert" });
					return y;
				}
				class g extends E.$Jnc {
					constructor(s, l, y, $, v, S, I) {
						super(s, l, y, I),
							(this.type = $),
							(this.containerType = v),
							(this.kind = S);
					}
				}
				e.$ZEc = g;
				class p extends g {
					constructor(s, l, y, $) {
						super(s, l, l || s, y, $, "Cell", {
							[d.$HEc.key]: "Cell",
							[d.$IEc.key]: y,
						});
					}
				}
				class o extends g {
					constructor(s, l, y, $) {
						super(s, l, l || s, y, $, "Metadata", {
							[d.$HEc.key]: "Metadata",
							[d.$IEc.key]: y,
						});
					}
				}
				class f extends g {
					constructor(s, l, y, $) {
						super(s, l, l || s, y, $, "Output", {
							[d.$HEc.key]: "Output",
							[d.$IEc.key]: y,
						});
					}
				}
			},
		)
