import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/map.js';
import '../../../../../nls.js';
import '../../../../../platform/action/common/actionCommonCategories.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/storage/common/storage.js';
import '../../common/notebookKernelService.js';
import '../../common/notebookLoggingService.js';
define(
			de[3115],
			he([1, 0, 3, 59, 4, 99, 11, 21, 243, 557]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RGc = void 0);
				const a = 5;
				let h = class extends t.$1c {
					static {
						u = this;
					}
					static {
						this.a = "notebook.kernelHistory";
					}
					constructor(n, g, p) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.b = {}),
							this.j(),
							this.D(this.c.onWillSaveState(() => this.h())),
							this.D(
								this.c.onDidChangeValue(
									d.StorageScope.WORKSPACE,
									u.a,
									this.D(new t.$Zc()),
								)(() => {
									this.j();
								}),
							);
					}
					getKernels(n) {
						const g = this.f.getMatchingKernel(n),
							p = g.all,
							o = g.selected,
							f = g.all.length === 1 ? g.all[0] : void 0;
						this.g.debug(
							"History",
							`getMatchingKernels: ${g.all.length} kernels available for ${n.uri.path}. Selected: ${g.selected?.label}. Suggested: ${f?.label}`,
						);
						const b = this.b[n.notebookType]
								? [...this.b[n.notebookType].values()]
								: [],
							s = b.map((l) => p.find((y) => y.id === l)).filter((l) => !!l);
						return (
							this.g.debug(
								"History",
								`mru: ${b.length} kernels in history, ${s.length} registered already.`,
							),
							{ selected: o ?? f, all: s }
						);
					}
					addMostRecentKernel(n) {
						const g = n.id,
							p = n.viewType,
							o = this.b[p] ?? new i.$Ic();
						if ((o.set(g, g, i.Touch.AsOld), o.size > a)) {
							const f = [...o.entries()].slice(0, a);
							o.fromJSON(f);
						}
						this.b[p] = o;
					}
					h() {
						let n = !1;
						for (const [g, p] of Object.entries(this.b)) n = n || p.size > 0;
						if (n) {
							const g = this.m();
							this.c.store(
								u.a,
								JSON.stringify(g),
								d.StorageScope.WORKSPACE,
								d.StorageTarget.USER,
							);
						} else this.c.remove(u.a, d.StorageScope.WORKSPACE);
					}
					j() {
						const n = this.c.get(u.a, d.StorageScope.WORKSPACE);
						if (n)
							try {
								this.n(JSON.parse(n));
							} catch {
								this.b = {};
							}
						else this.b = {};
					}
					m() {
						const n = Object.create(null);
						for (const [g, p] of Object.entries(this.b))
							n[g] = { entries: [...p.values()] };
						return n;
					}
					n(n) {
						this.b = {};
						for (const [g, p] of Object.entries(n)) {
							const o = new i.$Ic(),
								f = [];
							for (const b of p.entries) f.push([b, b]);
							o.fromJSON(f), (this.b[g] = o);
						}
					}
					_clear() {
						(this.b = {}), this.h();
					}
				};
				(e.$RGc = h),
					(e.$RGc = h = u = Ne([j(0, d.$lq), j(1, m.$f6), j(2, r.$P2b)], h)),
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: "notebook.clearNotebookKernelsMRUCache",
									title: (0, w.localize2)(
										8178,
										"Clear Notebook Kernels MRU Cache",
									),
									category: E.$ck.Developer,
									f1: !0,
								});
							}
							async run(c) {
								c.get(m.$g6)._clear();
							}
						},
					);
			},
		),
		