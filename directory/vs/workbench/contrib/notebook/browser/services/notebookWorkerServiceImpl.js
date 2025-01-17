import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/browser/defaultWorkerFactory.js';
import '../../common/notebookCommon.js';
import '../../common/notebookService.js';
define(de[3473], he([1, 0, 3, 540, 70, 161]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$nFc = void 0);
			let C = class extends t.$1c {
				constructor(a) {
					super(), (this.a = this.D(new d(a)));
				}
				canComputeDiff(a, h) {
					throw new Error("Method not implemented.");
				}
				computeDiff(a, h) {
					return this.a.withWorker().then((c) => c.computeDiff(a, h));
				}
				canPromptRecommendation(a) {
					return this.a.withWorker().then((h) => h.canPromptRecommendation(a));
				}
			};
			(e.$nFc = C), (e.$nFc = C = Ne([j(0, E.$MIb)], C));
			class d extends t.$1c {
				constructor(a) {
					super(), (this.b = a), (this.a = null);
				}
				withWorker() {
					return this.a || (this.a = new r(this.b)), Promise.resolve(this.a);
				}
			}
			class m extends t.$1c {
				constructor(a, h) {
					super(),
						(this.c = a),
						(this.f = h),
						(this.a = Object.create(null)),
						(this.b = Object.create(null));
				}
				ensureSyncedResources(a) {
					for (const h of a) {
						const c = h.toString();
						this.a[c] || this.g(h),
							this.a[c] && (this.b[c] = new Date().getTime());
					}
				}
				g(a) {
					const h = this.f
						.listNotebookDocuments()
						.find((p) => p.uri.toString() === a.toString());
					if (!h) return;
					const c = a.toString();
					this.c.$acceptNewModel(h.uri.toString(), {
						cells: h.cells.map((p) => ({
							handle: p.handle,
							uri: p.uri,
							source: p.getValue(),
							eol: p.textBuffer.getEOL(),
							language: p.language,
							mime: p.mime,
							cellKind: p.cellKind,
							outputs: p.outputs.map((o) => ({
								outputId: o.outputId,
								outputs: o.outputs,
							})),
							metadata: p.metadata,
							internalMetadata: p.internalMetadata,
						})),
						metadata: h.metadata,
					});
					const n = new t.$Zc(),
						g = (p) => ({
							handle: p.handle,
							uri: p.uri,
							source: p.textBuffer.getLinesContent(),
							eol: p.textBuffer.getEOL(),
							language: p.language,
							cellKind: p.cellKind,
							outputs: p.outputs.map((o) => ({
								outputId: o.outputId,
								outputs: o.outputs,
							})),
							metadata: p.metadata,
							internalMetadata: p.internalMetadata,
						});
					n.add(
						h.onDidChangeContent((p) => {
							const o = p.rawEvents.map((f) =>
								f.kind === w.NotebookCellsChangeType.ModelChange ||
								f.kind === w.NotebookCellsChangeType.Initialize
									? {
											kind: f.kind,
											versionId: p.versionId,
											changes: f.changes.map((s) => [
												s[0],
												s[1],
												s[2].map((l) => g(l)),
											]),
										}
									: f.kind === w.NotebookCellsChangeType.Move
										? {
												kind: f.kind,
												index: f.index,
												length: f.length,
												newIdx: f.newIdx,
												versionId: p.versionId,
												cells: f.cells.map((s) => g(s)),
											}
										: f,
							);
							this.c.$acceptModelChanged(c.toString(), {
								rawEvents: o,
								versionId: p.versionId,
							});
						}),
					),
						n.add(
							h.onWillDispose(() => {
								this.h(c);
							}),
						),
						n.add(
							(0, t.$Yc)(() => {
								this.c.$acceptRemovedModel(c);
							}),
						),
						(this.a[c] = n);
				}
				h(a) {
					const h = this.a[a];
					delete this.a[a], delete this.b[a], (0, t.$Vc)(h);
				}
			}
			class r extends t.$1c {
				constructor(a) {
					super(), (this.c = a), (this.a = null), (this.b = null);
				}
				computeDiff(a, h) {
					return this.g([a, h]).$computeDiff(a.toString(), h.toString());
				}
				canPromptRecommendation(a) {
					return this.g([a]).$canPromptRecommendation(a.toString());
				}
				f(a) {
					return this.b || (this.b = this.D(new m(a, this.c))), this.b;
				}
				g(a) {
					const h = this.h().proxy;
					return this.f(h).ensureSyncedResources(a), h;
				}
				h() {
					if (!this.a)
						try {
							this.a = this.D(
								(0, i.$ijb)(
									"vs/workbench/contrib/notebook/common/services/notebookSimpleWorker",
									"NotebookEditorWorker",
								),
							);
						} catch (a) {
							throw a;
						}
					return this.a;
				}
			}
		}),
		