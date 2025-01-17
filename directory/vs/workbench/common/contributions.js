import '../../../require.js';
import '../../../exports.js';
import '../../platform/instantiation/common/instantiation.js';
import '../services/lifecycle/common/lifecycle.js';
import '../../platform/registry/common/platform.js';
import '../../base/common/async.js';
import '../../base/common/performance.js';
import '../../platform/log/common/log.js';
import '../../platform/environment/common/environment.js';
import '../../base/common/map.js';
import '../../base/common/lifecycle.js';
import '../services/editor/common/editorPaneService.js';
define(
			de[55],
			he([1, 0, 5, 52, 30, 15, 240, 34, 113, 59, 3, 1798]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$t6 = e.$s6 = e.$r6 = e.WorkbenchPhase = e.Extensions = void 0);
				var h;
				(function (f) {
					f.Workbench = "workbench.contributions.kind";
				})(h || (e.Extensions = h = {}));
				var c;
				(function (f) {
					(f[(f.BlockStartup = 1)] = "BlockStartup"),
						(f[(f.BlockRestore = 2)] = "BlockRestore"),
						(f[(f.AfterRestored = 3)] = "AfterRestored"),
						(f[(f.Eventually = 4)] = "Eventually");
				})(c || (e.WorkbenchPhase = c = {}));
				function n(f) {
					const b = f;
					return !!b && typeof b.editorTypeId == "string";
				}
				function g(f) {
					switch (f) {
						case i.LifecyclePhase.Restored:
							return c.AfterRestored;
						case i.LifecyclePhase.Eventually:
							return c.Eventually;
					}
				}
				function p(f) {
					switch (f) {
						case c.BlockStartup:
							return i.LifecyclePhase.Starting;
						case c.BlockRestore:
							return i.LifecyclePhase.Ready;
						case c.AfterRestored:
							return i.LifecyclePhase.Restored;
						case c.Eventually:
							return i.LifecyclePhase.Eventually;
					}
				}
				class o extends u.$1c {
					constructor() {
						super(...arguments),
							(this.m = new Map()),
							(this.n = new Map()),
							(this.q = new Map()),
							(this.r = new Map()),
							(this.s = this.D(new u.$Zc())),
							(this.t = new Map()),
							(this.u = new E.$0h()),
							(this.whenRestored = this.u.p);
					}
					static {
						this.INSTANCE = new o();
					}
					static {
						this.a = 20;
					}
					static {
						this.b = 100;
					}
					get timings() {
						return this.t;
					}
					registerWorkbenchContribution2(b, s, l) {
						const y = { id: b, ctor: s };
						this.c &&
						this.f &&
						this.g &&
						this.h &&
						this.j &&
						((typeof l == "number" && this.f.phase >= l) ||
							(typeof b == "string" &&
								n(l) &&
								this.j.didInstantiateEditorPane(l.editorTypeId)))
							? this.F(
									this.c,
									this.g,
									this.h,
									y,
									typeof l == "number" ? p(l) : this.f.phase,
								)
							: (typeof l == "number" && (0, r.$Dc)(this.m, p(l), []).push(y),
								typeof b == "string" &&
									(this.q.has(b)
										? console.error(
												`IWorkbenchContributionsRegistry#registerWorkbenchContribution(): Can't register multiple contributions with same id '${b}'`,
											)
										: this.q.set(b, y),
									n(l) && (0, r.$Dc)(this.n, l.editorTypeId, []).push(y)));
					}
					registerWorkbenchContribution(b, s) {
						this.registerWorkbenchContribution2(void 0, b, g(s));
					}
					getWorkbenchContribution(b) {
						if (this.r.has(b)) return this.r.get(b);
						const s = this.c,
							l = this.f,
							y = this.g,
							$ = this.h;
						if (!s || !l || !y || !$)
							throw new Error(
								`IWorkbenchContributionsRegistry#getContribution('${b}'): cannot be called before registry started`,
							);
						const v = this.q.get(b);
						if (!v)
							throw new Error(
								`IWorkbenchContributionsRegistry#getContribution('${b}'): contribution with that identifier is unknown.`,
							);
						l.phase < i.LifecyclePhase.Restored &&
							y.warn(
								`IWorkbenchContributionsRegistry#getContribution('${b}'): contribution instantiated before LifecyclePhase.Restored!`,
							),
							this.F(s, y, $, v, l.phase);
						const S = this.r.get(b);
						if (!S)
							throw new Error(
								`IWorkbenchContributionsRegistry#getContribution('${b}'): failed to create contribution.`,
							);
						return S;
					}
					start(b) {
						const s = (this.c = b.get(t.$Li)),
							l = (this.f = b.get(i.$n6)),
							y = (this.g = b.get(d.$ik)),
							$ = (this.h = b.get(m.$Ti)),
							v = (this.j = b.get(a.$q6));
						this.D(
							l.onDidShutdown(() => {
								this.s.clear();
							}),
						);
						for (const S of [
							i.LifecyclePhase.Starting,
							i.LifecyclePhase.Ready,
							i.LifecyclePhase.Restored,
							i.LifecyclePhase.Eventually,
						])
							this.y(s, l, y, $, S);
						for (const S of this.n.keys())
							v.didInstantiateEditorPane(S) && this.w(S, s, l, y, $);
						this.D(
							v.onWillInstantiateEditorPane((S) =>
								this.w(S.typeId, s, l, y, $),
							),
						);
					}
					w(b, s, l, y, $) {
						const v = this.n.get(b);
						if (v) {
							this.n.delete(b);
							for (const S of v) this.F(s, y, $, S, l.phase);
						}
					}
					y(b, s, l, y, $) {
						s.phase >= $
							? this.z(b, l, y, $)
							: s.when($).then(() => this.z(b, l, y, $));
					}
					async z(b, s, l, y) {
						const $ = this.m.get(y);
						if ($)
							switch ((this.m.delete(y), y)) {
								case i.LifecyclePhase.Starting:
								case i.LifecyclePhase.Ready: {
									(0, C.mark)(`code/willCreateWorkbenchContributions/${y}`);
									for (const v of $) this.F(b, s, l, v, y);
									(0, C.mark)(`code/didCreateWorkbenchContributions/${y}`);
									break;
								}
								case i.LifecyclePhase.Restored:
								case i.LifecyclePhase.Eventually: {
									y === i.LifecyclePhase.Eventually && (await this.u.p),
										this.C($, b, s, l, y);
									break;
								}
							}
					}
					C(b, s, l, y, $) {
						(0, C.mark)(`code/willCreateWorkbenchContributions/${$}`);
						let v = 0;
						const S = $ === i.LifecyclePhase.Eventually ? 3e3 : 500,
							I = (T) => {
								for (; v < b.length; ) {
									const P = b[v++];
									if ((this.F(s, l, y, P, $), T.timeRemaining() < 1)) {
										(0, E.$3h)(I, S);
										break;
									}
								}
								v === b.length &&
									((0, C.mark)(`code/didCreateWorkbenchContributions/${$}`),
									$ === i.LifecyclePhase.Restored && this.u.complete());
							};
						(0, E.$3h)(I, S);
					}
					F(b, s, l, y, $) {
						if (typeof y.id == "string" && this.r.has(y.id)) return;
						const v = Date.now();
						try {
							typeof y.id == "string" &&
								(0, C.mark)(
									`code/willCreateWorkbenchContribution/${$}/${y.id}`,
								);
							const S = b.createInstance(y.ctor);
							typeof y.id == "string" &&
								(this.r.set(y.id, S), this.q.delete(y.id)),
								(0, u.$Uc)(S) && this.s.add(S);
						} catch (S) {
							s.error(
								`Unable to create workbench contribution '${y.id ?? y.ctor.name}'.`,
								S,
							);
						} finally {
							typeof y.id == "string" &&
								(0, C.mark)(`code/didCreateWorkbenchContribution/${$}/${y.id}`);
						}
						if (typeof y.id == "string" || !l.isBuilt) {
							const S = Date.now() - v;
							if (
								(S > ($ < i.LifecyclePhase.Restored ? o.a : o.b) &&
									s.warn(
										`Creation of workbench contribution '${y.id ?? y.ctor.name}' took ${S}ms.`,
									),
								typeof y.id == "string")
							) {
								let I = this.t.get($);
								I || ((I = []), this.t.set($, I)), I.push([y.id, S]);
							}
						}
					}
				}
				(e.$r6 = o),
					(e.$s6 = o.INSTANCE.registerWorkbenchContribution2.bind(o.INSTANCE)),
					(e.$t6 = o.INSTANCE.getWorkbenchContribution.bind(o.INSTANCE)),
					w.$Io.add(h.Workbench, o.INSTANCE);
			},
		),
		