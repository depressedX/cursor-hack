import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/cancellation.js';
import '../../../../../../nls.js';
import '../../../common/notebookKernelService.js';
define(de[3113], he([1, 0, 33, 4, 243]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$UGc = void 0);
			class E {
				constructor(d) {
					(this.b = d), (this.a = new t.$Ce());
				}
				hasChildren(d) {
					return (
						d.kind === "root" ||
						d.hasNamedChildren ||
						d.indexedChildrenCount > 0
					);
				}
				cancel() {
					this.a.cancel(), this.a.dispose(), (this.a = new t.$Ce());
				}
				async getChildren(d) {
					return d.kind === "root" ? this.e(d.notebook) : this.c(d);
				}
				async c(d) {
					const m = this.b.getMatchingKernel(d.notebook).selected;
					if (m && m.hasVariableProvider) {
						let r = [];
						if (d.hasNamedChildren) {
							const a = await m
								.provideVariables(
									d.notebook.uri,
									d.extHostId,
									"named",
									0,
									this.a.token,
								)
								.map((h) => this.f(h, d.notebook))
								.toPromise();
							r = r.concat(a);
						}
						if (d.indexedChildrenCount > 0) {
							const u = await this.d(d, m);
							r = r.concat(u);
						}
						return r;
					}
					return [];
				}
				async d(d, m) {
					const r = [];
					if (d.indexedChildrenCount > w.$e6) {
						const u = Math.floor(Math.max(d.indexedChildrenCount / w.$e6, 100)),
							a = 1e6;
						let h = d.indexStart ?? 0;
						const c = h + Math.min(d.indexedChildrenCount, a);
						for (; h < c; h += u) {
							let n = h + u;
							n > c && (n = c),
								r.push({
									kind: "variable",
									notebook: d.notebook,
									id: d.id + `${h}`,
									extHostId: d.extHostId,
									name: `[${h}..${n - 1}]`,
									value: "",
									indexedChildrenCount: n - h,
									indexStart: h,
									hasNamedChildren: !1,
								});
						}
						d.indexedChildrenCount > a &&
							r.push({
								kind: "variable",
								notebook: d.notebook,
								id: d.id + `${c + 1}`,
								extHostId: d.extHostId,
								name: (0, i.localize)(7797, null),
								value: "",
								indexedChildrenCount: 0,
								hasNamedChildren: !1,
							});
					} else if (d.indexedChildrenCount > 0) {
						const u = m.provideVariables(
							d.notebook.uri,
							d.extHostId,
							"indexed",
							d.indexStart ?? 0,
							this.a.token,
						);
						for await (const a of u)
							if ((r.push(this.f(a, d.notebook)), r.length >= w.$e6)) break;
					}
					return r;
				}
				async e(d) {
					const m = this.b.getMatchingKernel(d).selected;
					return m && m.hasVariableProvider
						? await m
								.provideVariables(d.uri, void 0, "named", 0, this.a.token)
								.map((u) => this.f(u, d))
								.toPromise()
						: [];
				}
				f(d, m) {
					return {
						...d,
						kind: "variable",
						notebook: m,
						extHostId: d.id,
						id: `${d.id}`,
					};
				}
			}
			e.$UGc = E;
		}),
		