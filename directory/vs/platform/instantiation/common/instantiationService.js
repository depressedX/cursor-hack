import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/errors.js';
import '../../../base/common/lifecycle.js';
import './descriptors.js';
import './graph.js';
import './instantiation.js';
import './serviceCollection.js';
import '../../../base/common/linkedList.js';
define(
			de[1615],
			he([1, 0, 15, 29, 3, 102, 2708, 5, 128, 273]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*errors*/,
 w /*lifecycle*/,
 E /*descriptors*/,
 C /*graph*/,
 d /*instantiation*/,
 m /*serviceCollection*/,
 r /*linkedList*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zr = e.$Yr = void 0);
				const u = !1;
				class a extends Error {
					constructor(p, o) {
						super("cyclic dependency between services"),
							(this.message =
								`REASON: ${o}
` +
								(p.findCycleSlow() ??
									`UNABLE to detect cycle, dumping graph: 
${p.toString()}`));
					}
				}
				class h {
					constructor(p = new m.$Ki(), o = !1, f, b = u) {
						(this.i = p),
							(this.j = o),
							(this.k = f),
							(this.l = b),
							(this.f = !1),
							(this.g = new Set()),
							(this.h = new Set()),
							(this.t = new Set()),
							this.i.set(d.$Li, this),
							(this._globalGraph = b
								? (f?._globalGraph ?? new C.$Xr((s) => s))
								: void 0);
					}
					dispose() {
						if (!this.f) {
							(this.f = !0), (0, w.$Vc)(this.h), this.h.clear();
							for (const p of this.g) (0, w.$Uc)(p) && p.dispose();
							this.g.clear();
						}
					}
					m() {
						if (this.f)
							throw new Error("InstantiationService has been disposed");
					}
					createChild(p, o) {
						this.m();
						const f = this,
							b = new (class extends h {
								dispose() {
									f.h.delete(b), super.dispose();
								}
							})(p, this.j, this, this.l);
						return this.h.add(b), o?.add(b), b;
					}
					invokeFunction(p, ...o) {
						this.m();
						const f = n.traceInvocation(this.l, p);
						let b = !1;
						try {
							return p(
								{
									get: (l) => {
										if (b)
											throw (0, i.$_)(
												"service accessor is only valid during the invocation of its target method",
											);
										const y = this.s(l, f);
										if (!y)
											throw new Error(
												`[invokeFunction] unknown service '${l}'`,
											);
										return y;
									},
								},
								...o,
							);
						} finally {
							(b = !0), f.stop();
						}
					}
					createInstance(p, ...o) {
						this.m();
						let f, b;
						return (
							p instanceof E.$Ji
								? ((f = n.traceCreation(this.l, p.ctor)),
									(b = this.o(p.ctor, p.staticArguments.concat(o), f)))
								: ((f = n.traceCreation(this.l, p)), (b = this.o(p, o, f))),
							f.stop(),
							b
						);
					}
					o(p, o = [], f) {
						const b = d._util
								.getServiceDependencies(p)
								.sort((y, $) => y.index - $.index),
							s = [];
						for (const y of b) {
							const $ = this.s(y.id, f);
							$ ||
								this.y(
									`[createInstance] ${p.name} depends on UNKNOWN service ${y.id}.`,
									!1,
								),
								s.push($);
						}
						const l = b.length > 0 ? b[0].index : o.length;
						if (o.length !== l) {
							console.trace(
								`[createInstance] First service dependency of ${p.name} at position ${l + 1} conflicts with ${o.length} static arguments`,
							);
							const y = l - o.length;
							y > 0 ? (o = o.concat(new Array(y))) : (o = o.slice(0, l));
						}
						return Reflect.construct(p, o.concat(s));
					}
					q(p, o) {
						if (this.i.get(p) instanceof E.$Ji) this.i.set(p, o);
						else if (this.k) this.k.q(p, o);
						else
							throw new Error(
								"illegalState - setting UNKNOWN service instance",
							);
					}
					r(p) {
						const o = this.i.get(p);
						return !o && this.k ? this.k.r(p) : o;
					}
					s(p, o) {
						this._globalGraph &&
							this.c &&
							this._globalGraph.insertEdge(this.c, String(p));
						const f = this.r(p);
						return f instanceof E.$Ji
							? this.u(p, f, o.branch(p, !0))
							: (o.branch(p, !1), f);
					}
					u(p, o, f) {
						if (this.t.has(p))
							throw new Error(
								`illegal state - RECURSIVELY instantiating service '${p}'`,
							);
						this.t.add(p);
						try {
							return this.v(p, o, f);
						} finally {
							this.t.delete(p);
						}
					}
					v(p, o, f) {
						const b = new C.$Xr(($) => $.id.toString());
						let s = 0;
						const l = [{ id: p, desc: o, _trace: f }],
							y = new Set();
						for (; l.length; ) {
							const $ = l.pop();
							if (!y.has(String($.id))) {
								if ((y.add(String($.id)), b.lookupOrInsertNode($), s++ > 1e4))
									throw new a(b, "cycle count more than 1000");
								for (const v of d._util.getServiceDependencies($.desc.ctor)) {
									const S = this.r(v.id);
									if (
										(S ||
											this.y(
												`[createInstance] ${p} depends on ${v.id} which is NOT registered.`,
												!0,
											),
										this._globalGraph?.insertEdge(String($.id), String(v.id)),
										S instanceof E.$Ji)
									) {
										const I = {
											id: v.id,
											desc: S,
											_trace: $._trace.branch(v.id, !0),
										};
										b.insertEdge($, I), l.push(I);
									}
								}
							}
						}
						for (;;) {
							const $ = b.roots();
							if ($.length === 0) {
								if (!b.isEmpty())
									throw new a(b, "no more roots but still nodes in the graph");
								break;
							}
							for (const { data: v } of $) {
								if (this.r(v.id) instanceof E.$Ji) {
									const I = this.w(
										v.id,
										v.desc.ctor,
										v.desc.staticArguments,
										v.desc.supportsDelayedInstantiation,
										v._trace,
									);
									this.q(v.id, I);
								}
								b.removeNode(v);
							}
						}
						return this.r(p);
					}
					w(p, o, f = [], b, s) {
						if (this.i.get(p) instanceof E.$Ji)
							return this.x(p, o, f, b, s, this.g);
						if (this.k) return this.k.w(p, o, f, b, s);
						throw new Error(
							`illegalState - creating UNKNOWN service instance ${o.name}`,
						);
					}
					x(p, o, f = [], b, s, l) {
						if (b) {
							const y = new h(void 0, this.j, this, this.l);
							y.c = String(p);
							const $ = new Map(),
								v = new t.$6h(() => {
									const S = y.o(o, f, s);
									for (const [I, T] of $) {
										const P = S[I];
										if (typeof P == "function")
											for (const k of T) k.disposable = P.apply(S, k.listener);
									}
									return $.clear(), l.add(S), S;
								});
							return new Proxy(Object.create(null), {
								get(S, I) {
									if (
										!v.isInitialized &&
										typeof I == "string" &&
										(I.startsWith("onDid") || I.startsWith("onWill"))
									) {
										let k = $.get(I);
										return (
											k || ((k = new r.$$c()), $.set(I, k)),
											(D, M, N) => {
												if (v.isInitialized) return v.value[I](D, M, N);
												{
													const A = { listener: [D, M, N], disposable: void 0 },
														R = k.push(A);
													return (0, w.$Yc)(() => {
														R(), A.disposable?.dispose();
													});
												}
											}
										);
									}
									if (I in S) return S[I];
									const T = v.value;
									let P = T[I];
									return (
										typeof P != "function" || ((P = P.bind(T)), (S[I] = P)), P
									);
								},
								set(S, I, T) {
									return (v.value[I] = T), !0;
								},
								getPrototypeOf(S) {
									return o.prototype;
								},
							});
						} else {
							const y = this.o(o, f, s);
							return l.add(y), y;
						}
					}
					y(p, o) {
						if ((o && console.warn(p), this.j)) throw new Error(p);
					}
				}
				e.$Yr = h;
				var c;
				(function (g) {
					(g[(g.None = 0)] = "None"),
						(g[(g.Creation = 1)] = "Creation"),
						(g[(g.Invocation = 2)] = "Invocation"),
						(g[(g.Branch = 3)] = "Branch");
				})(c || (c = {}));
				class n {
					static {
						this.all = new Set();
					}
					static {
						this.c = new (class extends n {
							constructor() {
								super(c.None, null);
							}
							stop() {}
							branch() {
								return this;
							}
						})();
					}
					static traceInvocation(p, o) {
						return p
							? new n(
									c.Invocation,
									o.name ||
										new Error().stack
											.split(`
`)
											.slice(3, 4)
											.join(`
`),
								)
							: n.c;
					}
					static traceCreation(p, o) {
						return p ? new n(c.Creation, o.name) : n.c;
					}
					static {
						this.f = 0;
					}
					constructor(p, o) {
						(this.type = p),
							(this.name = o),
							(this.g = Date.now()),
							(this.h = []);
					}
					branch(p, o) {
						const f = new n(c.Branch, p.toString());
						return this.h.push([p, o, f]), f;
					}
					stop() {
						const p = Date.now() - this.g;
						n.f += p;
						let o = !1;
						function f(s, l) {
							const y = [],
								$ = new Array(s + 1).join("	");
							for (const [v, S, I] of l.h)
								if (S && I) {
									(o = !0), y.push(`${$}CREATES -> ${v}`);
									const T = f(s + 1, I);
									T && y.push(T);
								} else y.push(`${$}uses -> ${v}`);
							return y.join(`
`);
						}
						const b = [
							`${this.type === c.Creation ? "CREATE" : "CALL"} ${this.name}`,
							`${f(1, this)}`,
							`DONE, took ${p.toFixed(2)}ms (grand total ${n.f.toFixed(2)}ms)`,
						];
						(p > 2 || o) &&
							n.all.add(
								b.join(`
`),
							);
					}
				}
				e.$Zr = n;
			},
		)
