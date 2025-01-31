import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/map.js';
import '../../../../../platform/storage/common/storage.js';
import '../../../../../base/common/uri.js';
import '../../common/notebookService.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../base/common/marshallingIds.js';
import '../../../../../base/common/network.js';
import '../../../../../base/browser/dom.js';
define(
			de[3119],
			he([1, 0, 6, 3, 59, 21, 9, 161, 11, 8, 221, 23, 7]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*map*/,
 E /*storage*/,
 C /*uri*/,
 d /*notebookService*/,
 m /*actions*/,
 r /*contextkey*/,
 u /*marshallingIds*/,
 a /*network*/,
 h /*dom*/) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rFc = void 0);
				class n {
					static {
						this.c = 0;
					}
					constructor(b) {
						(this.notebookPriorities = new w.$Gc()),
							(this.kernel = b),
							(this.score = -1),
							(this.time = n.c++);
					}
				}
				class g {
					static str(b) {
						return `${b.notebookType}/${b.uri.toString()}`;
					}
					static obj(b) {
						const s = b.indexOf("/");
						return {
							notebookType: b.substring(0, s),
							uri: C.URI.parse(b.substring(s + 1)),
						};
					}
				}
				class p extends i.$1c {
					constructor(b, s, l) {
						super(),
							(this.action = b),
							(this.model = s),
							(this.isPrimary = l),
							(this.c = this.D(new t.$re())),
							(this.onDidChangeState = this.c.event);
					}
					async runAction() {
						if (this.execution) return this.execution;
						(this.execution = this.f()),
							this.c.fire(),
							await this.execution,
							(this.execution = void 0),
							this.c.fire();
					}
					async f() {
						try {
							await this.action.run({
								uri: this.model.uri,
								$mid: u.MarshalledId.NotebookActionContext,
							});
						} catch (b) {
							console.warn(`Kernel source command failed: ${b}`);
						}
					}
				}
				let o = class extends i.$1c {
					static {
						c = this;
					}
					static {
						this.z = "notebook.controller2NotebookBindings";
					}
					constructor(b, s, l, y) {
						super(),
							(this.C = b),
							(this.F = s),
							(this.G = l),
							(this.H = y),
							(this.c = new Map()),
							(this.f = new w.$Jc(1e3, 0.7)),
							(this.g = this.D(new t.$re())),
							(this.h = this.D(new t.$re())),
							(this.j = this.D(new t.$re())),
							(this.m = this.D(new t.$re())),
							(this.n = this.D(new t.$re())),
							(this.q = this.D(new t.$re())),
							(this.r = new Map()),
							(this.t = new Map()),
							(this.u = new Map()),
							(this.w = this.D(new t.$re())),
							(this.y = new Map()),
							(this.onDidChangeSelectedNotebooks = this.g.event),
							(this.onDidAddKernel = this.h.event),
							(this.onDidRemoveKernel = this.j.event),
							(this.onDidChangeNotebookAffinity = this.m.event),
							(this.onDidChangeSourceActions = this.n.event),
							(this.onDidChangeKernelDetectionTasks = this.w.event),
							(this.onDidNotebookVariablesUpdate = this.q.event),
							this.D(b.onDidAddNotebookDocument(this.M, this)),
							this.D(
								b.onWillRemoveNotebookDocument(($) => {
									const v = g.str($);
									this.f.get(v) &&
										$.uri.scheme === a.Schemas.untitled &&
										this.selectKernelForNotebook(void 0, $),
										this.t.get(v)?.dispose(),
										this.t.delete(v);
								}),
							);
						try {
							const $ = JSON.parse(
								this.F.get(c.z, E.StorageScope.WORKSPACE, "[]"),
							);
							this.f.fromJSON($);
						} catch {}
					}
					dispose() {
						this.c.clear(),
							this.r.forEach((b) => {
								b.menu.dispose(), b.actions.forEach((s) => s[1].dispose());
							}),
							this.t.forEach((b) => {
								b.dispose();
							}),
							this.t.clear(),
							super.dispose();
					}
					J() {
						this.I?.dispose(),
							(this.I = (0, h.$egb)(
								(0, h.$Ogb)(),
								() => {
									this.F.store(
										c.z,
										JSON.stringify(this.f),
										E.StorageScope.WORKSPACE,
										E.StorageTarget.MACHINE,
									);
								},
								100,
							));
					}
					static L(b, s) {
						return b.viewType === "*"
							? 5
							: b.viewType === s.notebookType
								? 10
								: 0;
					}
					M(b, s) {
						const l = this.f.get(g.str(b));
						if (!l) return;
						const y = this.c.get(l);
						!y ||
							!c.L(y.kernel, b) ||
							((!s || y.kernel === s) &&
								this.g.fire({
									notebook: b.uri,
									oldKernel: void 0,
									newKernel: y.kernel.id,
								}));
					}
					notifyVariablesChange(b) {
						this.q.fire(b);
					}
					registerKernel(b) {
						if (this.c.has(b.id))
							throw new Error(
								`NOTEBOOK CONTROLLER with id '${b.id}' already exists`,
							);
						this.c.set(b.id, new n(b)), this.h.fire(b);
						for (const s of this.C.getNotebookTextModels()) this.M(s, b);
						return (0, i.$Yc)(() => {
							this.c.delete(b.id) && this.j.fire(b);
							for (const [s, l] of Array.from(this.f))
								l === b.id &&
									this.g.fire({
										notebook: g.obj(s).uri,
										oldKernel: b.id,
										newKernel: void 0,
									});
						});
					}
					getMatchingKernel(b) {
						const s = [];
						for (const I of this.c.values()) {
							const T = c.L(I.kernel, b);
							T &&
								s.push({
									score: T,
									kernel: I.kernel,
									instanceAffinity: I.notebookPriorities.get(b.uri) ?? 1,
								});
						}
						s.sort(
							(I, T) =>
								T.instanceAffinity - I.instanceAffinity ||
								I.score - T.score ||
								I.kernel.label.localeCompare(T.kernel.label),
						);
						const l = s.map((I) => I.kernel),
							y = this.f.get(g.str(b)),
							$ = y ? this.c.get(y)?.kernel : void 0,
							v = s.filter((I) => I.instanceAffinity > 1).map((I) => I.kernel),
							S = s.filter((I) => I.instanceAffinity < 0).map((I) => I.kernel);
						return { all: l, selected: $, suggestions: v, hidden: S };
					}
					getSelectedOrSuggestedKernel(b) {
						const s = this.getMatchingKernel(b);
						if (s.selected) return s.selected;
						const l = s.all.filter(
							(y) => this.c.get(y.id)?.notebookPriorities.get(b.uri) === 2,
						);
						return l.length === 1
							? l[0]
							: s.all.length === 1
								? s.all[0]
								: void 0;
					}
					selectKernelForNotebook(b, s) {
						const l = g.str(s),
							y = this.f.get(l);
						y !== b?.id &&
							(b ? this.f.set(l, b.id) : this.f.delete(l),
							this.g.fire({ notebook: s.uri, oldKernel: y, newKernel: b?.id }),
							this.J());
					}
					preselectKernelForNotebook(b, s) {
						const l = g.str(s);
						this.f.get(l) !== b?.id && (this.f.set(l, b.id), this.J());
					}
					updateKernelNotebookAffinity(b, s, l) {
						const y = this.c.get(b.id);
						if (!y) throw new Error(`UNKNOWN kernel '${b.id}'`);
						l === void 0
							? y.notebookPriorities.delete(s)
							: y.notebookPriorities.set(s, l),
							this.m.fire();
					}
					getRunningSourceActions(b) {
						const s = g.str(b),
							l = this.r.get(s);
						return l
							? l.actions.filter((y) => y[0].execution).map((y) => y[0])
							: [];
					}
					getSourceActions(b, s) {
						s = s ?? this.H;
						const l = g.str(b),
							y = this.r.get(l);
						if (y) return y.actions.map((I) => I[0]);
						const $ = this.D(this.G.createMenu(m.$XX.NotebookKernelSource, s)),
							v = { menu: $, actions: [] },
							S = (I, T) => {
								const P = I.getActions({ shouldForwardArgs: !0 }),
									k = [];
								P.forEach((L) => {
									const D = /^primary/.test(L[0]);
									L[1].forEach((M) => {
										const N = new p(M, T, D),
											A = N.onDidChangeState(() => {
												this.n.fire({
													notebook: T.uri,
													viewType: T.notebookType,
												});
											});
										k.push([N, A]);
									});
								}),
									(v.actions = k),
									this.r.set(l, v),
									this.n.fire({ notebook: T.uri, viewType: T.notebookType });
							};
						return (
							this.t.get(l)?.dispose(),
							this.t.set(
								l,
								$.onDidChange(() => {
									S($, b);
								}),
							),
							S($, b),
							v.actions.map((I) => I[0])
						);
					}
					registerNotebookKernelDetectionTask(b) {
						const s = b.notebookType,
							l = this.u.get(s) ?? [];
						return (
							l.push(b),
							this.u.set(s, l),
							this.w.fire(s),
							(0, i.$Yc)(() => {
								const y = this.u.get(s) ?? [],
									$ = y.indexOf(b);
								$ >= 0 && (y.splice($, 1), this.u.set(s, y), this.w.fire(s));
							})
						);
					}
					getKernelDetectionTasks(b) {
						return this.u.get(b.notebookType) ?? [];
					}
					registerKernelSourceActionProvider(b, s) {
						const l = this.y.get(b) ?? [];
						l.push(s), this.y.set(b, l), this.n.fire({ viewType: b });
						const y = s.onDidChangeSourceActions?.(() => {
							this.n.fire({ viewType: b });
						});
						return (0, i.$Yc)(() => {
							const $ = this.y.get(b) ?? [],
								v = $.indexOf(s);
							v >= 0 && ($.splice(v, 1), this.y.set(b, $)), y?.dispose();
						});
					}
					getKernelSourceActions2(b) {
						const s = b.notebookType,
							y = (this.y.get(s) ?? []).map(($) =>
								$.provideKernelSourceActions(),
							);
						return Promise.all(y).then(($) =>
							$.reduce((v, S) => v.concat(S), []),
						);
					}
				};
				(e.$rFc = o),
					(e.$rFc =
						o =
						c =
							Ne([j(0, d.$MIb), j(1, E.$lq), j(2, m.$YX), j(3, r.$6j)], o));
			},
		)
