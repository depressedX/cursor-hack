define(
			de[2728],
			he([1, 0, 6, 103, 3, 221, 82, 387, 9, 4, 31, 10, 8]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Etc = e.$Dtc = e.$Ctc = void 0),
					(e.$Ftc = P);
				const c = "data-keybinding-context";
				class n {
					constructor(D, M) {
						(this.f = D),
							(this.c = M),
							(this.d = Object.create(null)),
							(this.d._contextId = D);
					}
					get value() {
						return { ...this.d };
					}
					setValue(D, M) {
						return this.d[D] !== M ? ((this.d[D] = M), !0) : !1;
					}
					removeValue(D) {
						return D in this.d ? (delete this.d[D], !0) : !1;
					}
					getValue(D) {
						const M = this.d[D];
						return typeof M > "u" && this.c ? this.c.getValue(D) : M;
					}
					updateParent(D) {
						this.c = D;
					}
					collectAllValues() {
						let D = this.c ? this.c.collectAllValues() : Object.create(null);
						return (D = { ...D, ...this.d }), delete D._contextId, D;
					}
				}
				e.$Ctc = n;
				class g extends n {
					static {
						this.INSTANCE = new g();
					}
					constructor() {
						super(-1, null);
					}
					setValue(D, M) {
						return !1;
					}
					removeValue(D) {
						return !1;
					}
					getValue(D) {}
					collectAllValues() {
						return Object.create(null);
					}
				}
				class p extends n {
					static {
						this.g = "config.";
					}
					constructor(D, M, N) {
						super(D, null),
							(this.j = M),
							(this.h = d.$Si.forConfigKeys()),
							(this.i = this.j.onDidChangeConfiguration((A) => {
								if (A.source === a.ConfigurationTarget.DEFAULT) {
									const R = Array.from(this.h, ([O]) => O);
									this.h.clear(), N.fire(new b(R));
								} else {
									const R = [];
									for (const O of A.affectedKeys) {
										const B = `config.${O}`,
											U = this.h.findSuperstr(B);
										U !== void 0 &&
											(R.push(...i.Iterable.map(U, ([z]) => z)),
											this.h.deleteSuperstr(B)),
											this.h.has(B) && (R.push(B), this.h.delete(B));
									}
									N.fire(new b(R));
								}
							}));
					}
					dispose() {
						this.i.dispose();
					}
					getValue(D) {
						if (D.indexOf(p.g) !== 0) return super.getValue(D);
						if (this.h.has(D)) return this.h.get(D);
						const M = D.substr(p.g.length),
							N = this.j.getValue(M);
						let A;
						switch (typeof N) {
							case "number":
							case "boolean":
							case "string":
								A = N;
								break;
							default:
								Array.isArray(N) ? (A = JSON.stringify(N)) : (A = N);
						}
						return this.h.set(D, A), A;
					}
					setValue(D, M) {
						return super.setValue(D, M);
					}
					removeValue(D) {
						return super.removeValue(D);
					}
					collectAllValues() {
						const D = Object.create(null);
						return (
							this.h.forEach((M, N) => (D[N] = M)),
							{ ...D, ...super.collectAllValues() }
						);
					}
				}
				class o {
					constructor(D, M, N) {
						(this.c = D), (this.d = M), (this.f = N), this.reset();
					}
					set(D) {
						this.c.setContext(this.d, D);
					}
					reset() {
						typeof this.f > "u"
							? this.c.removeContext(this.d)
							: this.c.setContext(this.d, this.f);
					}
					get() {
						return this.c.getContextKeyValue(this.d);
					}
				}
				class f {
					constructor(D) {
						this.key = D;
					}
					affectsSome(D) {
						return D.has(this.key);
					}
					allKeysContainedIn(D) {
						return this.affectsSome(D);
					}
				}
				class b {
					constructor(D) {
						this.keys = D;
					}
					affectsSome(D) {
						for (const M of this.keys) if (D.has(M)) return !0;
						return !1;
					}
					allKeysContainedIn(D) {
						return this.keys.every((M) => D.has(M));
					}
				}
				class s {
					constructor(D) {
						this.events = D;
					}
					affectsSome(D) {
						for (const M of this.events) if (M.affectsSome(D)) return !0;
						return !1;
					}
					allKeysContainedIn(D) {
						return this.events.every((M) => M.allKeysContainedIn(D));
					}
				}
				function l(L, D) {
					return L.allKeysContainedIn(new Set(Object.keys(D)));
				}
				class y extends w.$1c {
					constructor(D) {
						super(),
							(this.g = this.D(new t.$ue({ merge: (M) => new s(M) }))),
							(this.onDidChangeContext = this.g.event),
							(this.c = !1),
							(this.f = D);
					}
					get contextId() {
						return this.f;
					}
					createKey(D, M) {
						if (this.c)
							throw new Error("AbstractContextKeyService has been disposed");
						return new o(this, D, M);
					}
					bufferChangeEvents(D) {
						this.g.pause();
						try {
							D();
						} finally {
							this.g.resume();
						}
					}
					createScoped(D) {
						if (this.c)
							throw new Error("AbstractContextKeyService has been disposed");
						return new v(this, D);
					}
					createOverlay(D = i.Iterable.empty()) {
						if (this.c)
							throw new Error("AbstractContextKeyService has been disposed");
						return new I(this, D);
					}
					contextMatchesRules(D) {
						if (this.c)
							throw new Error("AbstractContextKeyService has been disposed");
						const M = this.getContextValuesContainer(this.f);
						return D ? D.evaluate(M) : !0;
					}
					getContextKeyValue(D) {
						if (!this.c)
							return this.getContextValuesContainer(this.f).getValue(D);
					}
					setContext(D, M) {
						if (this.c) return;
						const N = this.getContextValuesContainer(this.f);
						N && N.setValue(D, M) && this.g.fire(new f(D));
					}
					removeContext(D) {
						this.c ||
							(this.getContextValuesContainer(this.f).removeValue(D) &&
								this.g.fire(new f(D)));
					}
					getContext(D) {
						return this.c ? g.INSTANCE : this.getContextValuesContainer(T(D));
					}
					dispose() {
						super.dispose(), (this.c = !0);
					}
				}
				e.$Dtc = y;
				let $ = class extends y {
					constructor(D) {
						super(0), (this.j = new Map()), (this.h = 0);
						const M = this.D(new p(this.f, D, this.g));
						this.j.set(this.f, M);
					}
					getContextValuesContainer(D) {
						return this.c ? g.INSTANCE : this.j.get(D) || g.INSTANCE;
					}
					createChildContext(D = this.f) {
						if (this.c) throw new Error("ContextKeyService has been disposed");
						const M = ++this.h;
						return (
							this.j.set(M, new n(M, this.getContextValuesContainer(D))), M
						);
					}
					disposeContext(D) {
						this.c || this.j.delete(D);
					}
					updateParent(D) {
						throw new Error("Cannot update parent of root ContextKeyService");
					}
				};
				(e.$Etc = $), (e.$Etc = $ = Ne([j(0, a.$gj)], $));
				class v extends y {
					constructor(D, M) {
						if (
							(super(D.createChildContext()),
							(this.m = this.D(new w.$2c())),
							(this.h = D),
							this.n(),
							(this.j = M),
							this.j.hasAttribute(c))
						) {
							let N = "";
							this.j.classList &&
								(N = Array.from(this.j.classList.values()).join(", ")),
								console.error(
									`Element already has context attribute${N ? ": " + N : ""}`,
								);
						}
						this.j.setAttribute(c, String(this.f));
					}
					n() {
						this.m.value = this.h.onDidChangeContext((D) => {
							const N = this.h.getContextValuesContainer(this.f).value;
							l(D, N) || this.g.fire(D);
						});
					}
					dispose() {
						this.c ||
							(this.h.disposeContext(this.f),
							this.j.removeAttribute(c),
							super.dispose());
					}
					getContextValuesContainer(D) {
						return this.c ? g.INSTANCE : this.h.getContextValuesContainer(D);
					}
					createChildContext(D = this.f) {
						if (this.c)
							throw new Error("ScopedContextKeyService has been disposed");
						return this.h.createChildContext(D);
					}
					disposeContext(D) {
						this.c || this.h.disposeContext(D);
					}
					updateParent(D) {
						if (this.h === D) return;
						const M = this.h.getContextValuesContainer(this.f),
							N = M.collectAllValues();
						(this.h = D), this.n();
						const A = this.h.getContextValuesContainer(this.h.contextId);
						M.updateParent(A);
						const R = M.collectAllValues(),
							O = { ...(0, C.$Bo)(N, R), ...(0, C.$Bo)(R, N) },
							B = Object.keys(O);
						this.g.fire(new b(B));
					}
				}
				class S {
					constructor(D, M) {
						(this.c = D), (this.d = M);
					}
					getValue(D) {
						return this.d.has(D) ? this.d.get(D) : this.c.getValue(D);
					}
				}
				class I {
					get contextId() {
						return this.d.contextId;
					}
					get onDidChangeContext() {
						return this.d.onDidChangeContext;
					}
					constructor(D, M) {
						(this.d = D), (this.c = new Map(M));
					}
					bufferChangeEvents(D) {
						this.d.bufferChangeEvents(D);
					}
					createKey() {
						throw new Error("Not supported.");
					}
					getContext(D) {
						return new S(this.d.getContext(D), this.c);
					}
					getContextValuesContainer(D) {
						const M = this.d.getContextValuesContainer(D);
						return new S(M, this.c);
					}
					contextMatchesRules(D) {
						const M = this.getContextValuesContainer(this.contextId);
						return D ? D.evaluate(M) : !0;
					}
					getContextKeyValue(D) {
						return this.c.has(D) ? this.c.get(D) : this.d.getContextKeyValue(D);
					}
					createScoped() {
						throw new Error("Not supported.");
					}
					createOverlay(D = i.Iterable.empty()) {
						return new I(this, D);
					}
					updateParent() {
						throw new Error("Not supported.");
					}
				}
				function T(L) {
					for (; L; ) {
						if (L.hasAttribute(c)) {
							const D = L.getAttribute(c);
							return D ? parseInt(D, 10) : NaN;
						}
						L = L.parentElement;
					}
					return 0;
				}
				function P(L, D, M) {
					L.get(h.$6j).createKey(String(D), k(M));
				}
				function k(L) {
					return (0, C.$xo)(L, (D) => {
						if (typeof D == "object" && D.$mid === E.MarshalledId.Uri)
							return m.URI.revive(D).toString();
						if (D instanceof m.URI) return D.toString();
					});
				}
				u.$fk.registerCommand("_setContext", P),
					u.$fk.registerCommand({
						id: "getContextKeyInfo",
						handler() {
							return [...h.$5j.all()].sort((L, D) =>
								L.key.localeCompare(D.key),
							);
						},
						metadata: { description: (0, r.localize)(1684, null), args: [] },
					}),
					u.$fk.registerCommand("_generateContextKeyInfo", function () {
						const L = [],
							D = new Set();
						for (const M of h.$5j.all())
							D.has(M.key) || (D.add(M.key), L.push(M));
						L.sort((M, N) => M.key.localeCompare(N.key)),
							console.log(JSON.stringify(L, void 0, 2));
					});
			},
		),
		