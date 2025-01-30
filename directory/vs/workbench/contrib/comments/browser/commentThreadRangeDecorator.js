import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/common/model/textModel.js';
define(de[3030], he([1, 0, 3, 74, 122]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*languages*/,
 w /*textModel*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$opc = void 0);
			class E {
				get id() {
					return this.a;
				}
				set id(m) {
					this.a = m;
				}
				constructor(m, r) {
					(this.range = m), (this.options = r);
				}
			}
			class C extends t.$1c {
				static {
					this.a = "comment-thread-range-decorator";
				}
				constructor(m) {
					super(), (this.f = []), (this.g = []), (this.j = []);
					const r = {
						description: C.a,
						isWholeLine: !1,
						zIndex: 20,
						className: "comment-thread-range",
						shouldFillLineOnLineBreak: !0,
					};
					this.b = w.$eY.createDynamic(r);
					const u = {
						description: C.a,
						isWholeLine: !1,
						zIndex: 20,
						className: "comment-thread-range-current",
						shouldFillLineOnLineBreak: !0,
					};
					(this.c = w.$eY.createDynamic(u)),
						this.D(
							m.onDidChangeCurrentCommentThread((a) => {
								this.n(a);
							}),
						),
						this.D(
							m.onDidUpdateCommentThreads(() => {
								this.n(void 0);
							}),
						);
				}
				n(m) {
					if (
						!this.h ||
						(m?.resource &&
							m.resource?.toString() !== this.h.getModel()?.uri.toString())
					)
						return;
					this.m?.dispose();
					const r = [];
					if (m) {
						const u = m.range;
						u &&
							!(
								u.startLineNumber === u.endLineNumber &&
								u.startColumn === u.endColumn
							) &&
							m.collapsibleState === i.CommentThreadCollapsibleState.Expanded &&
							((this.m = m.onDidChangeCollapsibleState((a) => {
								a === i.CommentThreadCollapsibleState.Collapsed &&
									this.n(void 0);
							})),
							r.push(new E(u, this.c)));
					}
					this.h.changeDecorations((u) => {
						(this.g = u.deltaDecorations(this.g, r)),
							r.forEach((a, h) => (a.id = this.f[h]));
					});
				}
				update(m, r) {
					const u = m?.getModel();
					if (!m || !u) return;
					(0, t.$Vc)(this.j), (this.h = m);
					const a = [];
					for (const h of r)
						h.threads.forEach((c) => {
							if (c.isDisposed) return;
							const n = c.range;
							!n ||
								(n.startLineNumber === n.endLineNumber &&
									n.startColumn === n.endColumn) ||
								(this.j.push(
									c.onDidChangeCollapsibleState(() => {
										this.update(m, r);
									}),
								),
								c.collapsibleState !==
									i.CommentThreadCollapsibleState.Collapsed &&
									a.push(new E(n, this.b)));
						});
					m.changeDecorations((h) => {
						(this.f = h.deltaDecorations(this.f, a)),
							a.forEach((c, n) => (c.id = this.f[n]));
					});
				}
				dispose() {
					(0, t.$Vc)(this.j), this.m?.dispose(), super.dispose();
				}
			}
			e.$opc = C;
		}),
		