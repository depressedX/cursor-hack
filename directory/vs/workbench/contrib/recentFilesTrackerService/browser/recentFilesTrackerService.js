import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
define(
			de[560],
			he([1, 0, 65, 3, 5, 20, 25, 45]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mcc = e.$lcc = void 0),
					(e.$lcc = (0, w.$Mi)("recentFilesTrackerService"));
				let m = class extends i.$1c {
					constructor(u, a, h) {
						super(),
							(this.c = u),
							(this.f = a),
							(this.g = h),
							(this.a = new Map()),
							(this.b = new Map());
						for (let c of this.c.listCodeEditors())
							this.registerEditorListenersToEditor(c);
						this.D(
							this.c.onCodeEditorAdd((c) => {
								const n = c.getModel();
								n && this.a.set(n.uri.toString(), { editor: c, model: n });
								const g = this.registerEditorListenersToEditor(c);
								g && this.D(g);
							}),
						),
							this.D(
								this.c.onCodeEditorRemove((c) => {
									const n = c.getModel();
									n && this.a.delete(n.uri.toString());
								}),
							);
					}
					registerEditorListenersToEditor(u) {
						const a = u.getId(),
							h = new i.$Zc();
						return (
							u.onDidChangeModel((c) => {
								const n = c.newModelUrl;
								n && n.scheme === "file" && this.registerFileView(n);
							}),
							h.add(
								u.onDidDispose(() => {
									this.b.get(a)?.forEach((n) => n.dispose()), this.b.delete(a);
									const c = u.getModel();
									c && this.a.delete(c.uri.toString());
								}),
							),
							this.b.set(a, [h]),
							h
						);
					}
					getOpenModels() {
						return Array.from(this.a.values());
					}
					h() {
						console.log(
							"[Context Graph]",
							"printRecentlyViewedFiles",
							this.getRecentlyViewedFiles(),
						);
					}
					getRecentlyViewedFiles(u = 10, a = []) {
						if (u > 100) throw new Error("topK must be less than 100");
						return this.g.nonPersistentStorage.chatState.recentlyViewedFiles
							.filter((h) => !a.includes(h.relativePath))
							.slice(-u)
							.reverse();
					}
					registerFileView(u) {
						const a = this.f.asRelativePath(u);
						if (!a || a === "") return;
						const h = 1;
						this.g.setNonPersistentStorage(
							"chatState",
							"recentlyViewedFiles",
							(c) => (
								c.find((n) => n.relativePath === a) &&
									(c = c.filter((n) => n.relativePath !== a)),
								c.push({ uri: u, relativePath: a, weight: h }),
								(c = c.slice(0, 100)),
								c
							),
						);
					}
				};
				(e.$mcc = m),
					(e.$mcc = m = Ne([j(0, t.$dtb), j(1, C.$Vi), j(2, d.$0zb)], m)),
					(0, E.$lK)(e.$lcc, m, E.InstantiationType.Delayed);
			},
		),
		