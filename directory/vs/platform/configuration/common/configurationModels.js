define(
			de[950],
			he([1, 0, 24, 6, 187, 3, 59, 82, 28, 9, 10, 81, 22, 30]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$o = e.$9o = e.$8o = e.$7o = e.$6o = void 0),
					(e.$0o = s),
					(t = mt(t)),
					(w = mt(w)),
					(d = mt(d)),
					(m = mt(m));
				function n(v) {
					return Object.isFrozen(v) ? v : d.$wo(v);
				}
				class g {
					static createEmptyModel(S) {
						return new g({}, [], [], void 0, S);
					}
					constructor(S, I, T, P, k) {
						(this.b = S),
							(this.c = I),
							(this.d = T),
							(this.raw = P),
							(this.f = k),
							(this.a = new Map());
					}
					get rawConfiguration() {
						if (!this.g)
							if (this.raw?.length) {
								const S = this.raw.map((I) => {
									if (I instanceof g) return I;
									const T = new p("", this.f);
									return T.parseRaw(I), T.configurationModel;
								});
								this.g = S.reduce((I, T) => (T === I ? T : I.merge(T)), S[0]);
							} else this.g = this;
						return this.g;
					}
					get contents() {
						return this.b;
					}
					get overrides() {
						return this.d;
					}
					get keys() {
						return this.c;
					}
					isEmpty() {
						return (
							this.c.length === 0 &&
							Object.keys(this.b).length === 0 &&
							this.d.length === 0
						);
					}
					getValue(S) {
						return S ? (0, u.$oj)(this.contents, S) : this.contents;
					}
					inspect(S, I) {
						const T = this;
						return {
							get value() {
								return n(T.rawConfiguration.getValue(S));
							},
							get override() {
								return I
									? n(T.rawConfiguration.getOverrideValue(S, I))
									: void 0;
							},
							get merged() {
								return n(
									I
										? T.rawConfiguration.override(I).getValue(S)
										: T.rawConfiguration.getValue(S),
								);
							},
							get overrides() {
								const P = [];
								for (const { contents: k, identifiers: L, keys: D } of T
									.rawConfiguration.overrides) {
									const M = new g(k, D, [], void 0, T.f).getValue(S);
									M !== void 0 && P.push({ identifiers: L, value: M });
								}
								return P.length ? n(P) : void 0;
							},
						};
					}
					getOverrideValue(S, I) {
						const T = this.j(I);
						return T ? (S ? (0, u.$oj)(T, S) : T) : void 0;
					}
					getKeysForOverrideIdentifier(S) {
						const I = [];
						for (const T of this.overrides)
							T.identifiers.includes(S) && I.push(...T.keys);
						return t.$Qb(I);
					}
					getAllOverrideIdentifiers() {
						const S = [];
						for (const I of this.overrides) S.push(...I.identifiers);
						return t.$Qb(S);
					}
					override(S) {
						let I = this.a.get(S);
						return I || ((I = this.h(S)), this.a.set(S, I)), I;
					}
					merge(...S) {
						const I = d.$vo(this.contents),
							T = d.$vo(this.overrides),
							P = [...this.keys],
							k = this.raw?.length ? [...this.raw] : [this];
						for (const L of S)
							if ((k.push(...(L.raw?.length ? L.raw : [L])), !L.isEmpty())) {
								this.i(I, L.contents);
								for (const D of L.overrides) {
									const [M] = T.filter((N) =>
										t.$yb(N.identifiers, D.identifiers),
									);
									M
										? (this.i(M.contents, D.contents),
											M.keys.push(...D.keys),
											(M.keys = t.$Qb(M.keys)))
										: T.push(d.$vo(D));
								}
								for (const D of L.keys) P.indexOf(D) === -1 && P.push(D);
							}
						return new g(
							I,
							P,
							T,
							k.every((L) => L instanceof g) ? void 0 : k,
							this.f,
						);
					}
					h(S) {
						const I = this.j(S);
						if (!I || typeof I != "object" || !Object.keys(I).length)
							return this;
						const T = {};
						for (const P of t.$Qb([
							...Object.keys(this.contents),
							...Object.keys(I),
						])) {
							let k = this.contents[P];
							const L = I[P];
							L &&
								(typeof k == "object" && typeof L == "object"
									? ((k = d.$vo(k)), this.i(k, L))
									: (k = L)),
								(T[P] = k);
						}
						return new g(T, this.keys, this.overrides, void 0, this.f);
					}
					i(S, I) {
						for (const T of Object.keys(I)) {
							if (T in S && m.$ng(S[T]) && m.$ng(I[T])) {
								this.i(S[T], I[T]);
								continue;
							}
							S[T] = d.$vo(I[T]);
						}
					}
					j(S) {
						let I = null,
							T = null;
						const P = (k) => {
							k && (T ? this.i(T, k) : (T = d.$vo(k)));
						};
						for (const k of this.overrides)
							k.identifiers.length === 1 && k.identifiers[0] === S
								? (I = k.contents)
								: k.identifiers.includes(S) && P(k.contents);
						return P(I), T;
					}
					toJSON() {
						return {
							contents: this.contents,
							overrides: this.overrides,
							keys: this.keys,
						};
					}
					addValue(S, I) {
						this.k(S, I, !0);
					}
					setValue(S, I) {
						this.k(S, I, !1);
					}
					removeValue(S) {
						const I = this.keys.indexOf(S);
						I !== -1 &&
							(this.keys.splice(I, 1),
							(0, u.$nj)(this.contents, S),
							a.$Xo.test(S) &&
								this.overrides.splice(
									this.overrides.findIndex((T) =>
										t.$yb(T.identifiers, (0, a.$Yo)(S)),
									),
									1,
								));
					}
					k(S, I, T) {
						if (
							((0, u.$mj)(this.contents, S, I, (P) => this.f.error(P)),
							(T = T || this.keys.indexOf(S) === -1),
							T && this.keys.push(S),
							a.$Xo.test(S))
						) {
							const P = (0, a.$Yo)(S),
								k = {
									identifiers: P,
									keys: Object.keys(this.contents[S]),
									contents: (0, u.$lj)(this.contents[S], (D) =>
										this.f.error(D),
									),
								},
								L = this.overrides.findIndex((D) => t.$yb(D.identifiers, P));
							L !== -1 ? (this.overrides[L] = k) : this.overrides.push(k);
						}
					}
				}
				e.$6o = g;
				class p {
					constructor(S, I) {
						(this.f = S),
							(this.g = I),
							(this.a = null),
							(this.b = null),
							(this.c = []),
							(this.d = []);
					}
					get configurationModel() {
						return this.b || g.createEmptyModel(this.g);
					}
					get restrictedConfigurations() {
						return this.c;
					}
					get errors() {
						return this.d;
					}
					parse(S, I) {
						if (!m.$ug(S)) {
							const T = this.h(S);
							this.parseRaw(T, I);
						}
					}
					reparse(S) {
						this.a && this.parseRaw(this.a, S);
					}
					parseRaw(S, I) {
						this.a = S;
						const {
							contents: T,
							keys: P,
							overrides: k,
							restricted: L,
							hasExcludedProperties: D,
						} = this.i(S, I);
						(this.b = new g(T, P, k, D ? [S] : void 0, this.g)),
							(this.c = L || []);
					}
					h(S) {
						let I = {},
							T = null,
							P = [];
						const k = [],
							L = [];
						function D(N) {
							Array.isArray(P) ? P.push(N) : T !== null && (P[T] = N);
						}
						const M = {
							onObjectBegin: () => {
								const N = {};
								D(N), k.push(P), (P = N), (T = null);
							},
							onObjectProperty: (N) => {
								T = N;
							},
							onObjectEnd: () => {
								P = k.pop();
							},
							onArrayBegin: () => {
								const N = [];
								D(N), k.push(P), (P = N), (T = null);
							},
							onArrayEnd: () => {
								P = k.pop();
							},
							onLiteralValue: D,
							onError: (N, A, R) => {
								L.push({ error: N, offset: A, length: R });
							},
						};
						if (S)
							try {
								w.$ko(S, M), (I = P[0] || {});
							} catch (N) {
								this.g.error(
									`Error while parsing settings file ${this.f}: ${N}`,
								),
									(this.d = [N]);
							}
						return I;
					}
					i(S, I) {
						const T = c.$Io
								.as(a.$No.Configuration)
								.getConfigurationProperties(),
							P = this.j(S, T, !0, I);
						S = P.raw;
						const k = (0, u.$lj)(S, (M) =>
								this.g.error(`Conflict in settings file ${this.f}: ${M}`),
							),
							L = Object.keys(S),
							D = this.l(S, (M) =>
								this.g.error(`Conflict in settings file ${this.f}: ${M}`),
							);
						return {
							contents: k,
							keys: L,
							overrides: D,
							restricted: P.restricted,
							hasExcludedProperties: P.hasExcludedProperties,
						};
					}
					j(S, I, T, P) {
						let k = !1;
						if (!P?.scopes && !P?.skipRestricted && !P?.exclude?.length)
							return { raw: S, restricted: [], hasExcludedProperties: k };
						const L = {},
							D = [];
						for (const M in S)
							if (a.$Xo.test(M) && T) {
								const N = this.j(S[M], I, !1, P);
								(L[M] = N.raw),
									(k = k || N.hasExcludedProperties),
									D.push(...N.restricted);
							} else {
								const N = I[M],
									A = N
										? typeof N.scope < "u"
											? N.scope
											: a.ConfigurationScope.WINDOW
										: void 0;
								N?.restricted && D.push(M),
									!P.exclude?.includes(M) &&
									(P.include?.includes(M) ||
										((A === void 0 ||
											P.scopes === void 0 ||
											P.scopes.includes(A)) &&
											!(P.skipRestricted && N?.restricted)))
										? (L[M] = S[M])
										: (k = !0);
							}
						return { raw: L, restricted: D, hasExcludedProperties: k };
					}
					l(S, I) {
						const T = [];
						for (const P of Object.keys(S))
							if (a.$Xo.test(P)) {
								const k = {};
								for (const L in S[P]) k[L] = S[P][L];
								T.push({
									identifiers: (0, a.$Yo)(P),
									keys: Object.keys(k),
									contents: (0, u.$lj)(k, I),
								});
							}
						return T;
					}
				}
				e.$7o = p;
				class o extends E.$1c {
					constructor(S, I, T, P, k) {
						super(),
							(this.c = S),
							(this.f = I),
							(this.g = P),
							(this.h = k),
							(this.b = this.D(new i.$re())),
							(this.onDidChange = this.b.event),
							(this.a = new p(this.c.toString(), k)),
							this.D(this.g.watch(T.dirname(this.c))),
							this.D(this.g.watch(this.c)),
							this.D(
								i.Event.any(
									i.Event.filter(this.g.onDidFilesChange, (L) =>
										L.contains(this.c),
									),
									i.Event.filter(
										this.g.onDidRunOperation,
										(L) =>
											(L.isOperation(h.FileOperation.CREATE) ||
												L.isOperation(h.FileOperation.COPY) ||
												L.isOperation(h.FileOperation.DELETE) ||
												L.isOperation(h.FileOperation.WRITE)) &&
											T.isEqual(L.resource, S),
									),
								)(() => this.b.fire()),
							);
					}
					async loadConfiguration() {
						try {
							const S = await this.g.readFile(this.c);
							return (
								this.a.parse(S.value.toString() || "{}", this.f),
								this.a.configurationModel
							);
						} catch {
							return g.createEmptyModel(this.h);
						}
					}
					reparse(S) {
						return (
							S && (this.f = S),
							this.a.reparse(this.f),
							this.a.configurationModel
						);
					}
					getRestrictedSettings() {
						return this.a.restrictedConfigurations;
					}
				}
				e.$8o = o;
				class f {
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.overrideIdentifiers = P),
							(this.d = k),
							(this.f = L),
							(this.g = D),
							(this.h = M),
							(this.i = N),
							(this.j = A),
							(this.k = R),
							(this.l = O),
							(this.m = B);
					}
					get value() {
						return n(this.c);
					}
					n(S) {
						return S?.value !== void 0 ||
							S?.override !== void 0 ||
							S?.overrides !== void 0
							? S
							: void 0;
					}
					get q() {
						return (
							this.p ||
								(this.p = this.d.inspect(this.a, this.b.overrideIdentifier)),
							this.p
						);
					}
					get defaultValue() {
						return this.q.merged;
					}
					get default() {
						return this.n(this.q);
					}
					get s() {
						return (
							this.r === void 0 &&
								(this.r = this.f ? this.f.inspect(this.a) : null),
							this.r
						);
					}
					get policyValue() {
						return this.s?.merged;
					}
					get policy() {
						return this.s?.value !== void 0 ? { value: this.s.value } : void 0;
					}
					get u() {
						return (
							this.t === void 0 &&
								(this.t = this.g ? this.g.inspect(this.a) : null),
							this.t
						);
					}
					get applicationValue() {
						return this.u?.merged;
					}
					get application() {
						return this.n(this.u);
					}
					get w() {
						return (
							this.v ||
								(this.v = this.h.inspect(this.a, this.b.overrideIdentifier)),
							this.v
						);
					}
					get userValue() {
						return this.w.merged;
					}
					get user() {
						return this.n(this.w);
					}
					get y() {
						return (
							this.x ||
								(this.x = this.i.inspect(this.a, this.b.overrideIdentifier)),
							this.x
						);
					}
					get userLocalValue() {
						return this.y.merged;
					}
					get userLocal() {
						return this.n(this.y);
					}
					get A() {
						return (
							this.z ||
								(this.z = this.j.inspect(this.a, this.b.overrideIdentifier)),
							this.z
						);
					}
					get userRemoteValue() {
						return this.A.merged;
					}
					get userRemote() {
						return this.n(this.A);
					}
					get D() {
						return (
							this.B === void 0 &&
								(this.B = this.k
									? this.k.inspect(this.a, this.b.overrideIdentifier)
									: null),
							this.B
						);
					}
					get workspaceValue() {
						return this.D?.merged;
					}
					get workspace() {
						return this.n(this.D);
					}
					get F() {
						return (
							this.E === void 0 &&
								(this.E = this.l
									? this.l.inspect(this.a, this.b.overrideIdentifier)
									: null),
							this.E
						);
					}
					get workspaceFolderValue() {
						return this.F?.merged;
					}
					get workspaceFolder() {
						return this.n(this.F);
					}
					get H() {
						return (
							this.G === void 0 &&
								(this.G = this.m.inspect(this.a, this.b.overrideIdentifier)),
							this.G
						);
					}
					get memoryValue() {
						return this.H.merged;
					}
					get memory() {
						return this.n(this.H);
					}
				}
				class b {
					constructor(S, I, T, P, k, L, D, M, N, A) {
						(this.j = S),
							(this.l = I),
							(this.m = T),
							(this.n = P),
							(this.p = k),
							(this.q = L),
							(this.r = D),
							(this.s = M),
							(this.t = N),
							(this.u = A),
							(this.h = null),
							(this.i = new C.$Gc()),
							(this.v = null);
					}
					getValue(S, I, T) {
						return this.w(S, I, T).getValue(S);
					}
					updateValue(S, I, T = {}) {
						let P;
						T.resource
							? ((P = this.t.get(T.resource)),
								P ||
									((P = g.createEmptyModel(this.u)), this.t.set(T.resource, P)))
							: (P = this.s),
							I === void 0 ? P.removeValue(S) : P.setValue(S, I),
							T.resource || (this.h = null);
					}
					inspect(S, I, T) {
						const P = this.w(S, I, T),
							k = this.A(I.resource, T),
							L = I.resource ? this.t.get(I.resource) || this.s : this.s,
							D = new Set();
						for (const M of P.overrides)
							for (const N of M.identifiers)
								P.getOverrideValue(S, N) !== void 0 && D.add(N);
						return new f(
							S,
							I,
							P.getValue(S),
							D.size ? [...D] : void 0,
							this.j,
							this.l.isEmpty() ? void 0 : this.l,
							this.applicationConfiguration.isEmpty()
								? void 0
								: this.applicationConfiguration,
							this.userConfiguration,
							this.localUserConfiguration,
							this.remoteUserConfiguration,
							T ? this.q : void 0,
							k || void 0,
							L,
						);
					}
					keys(S) {
						const I = this.A(void 0, S);
						return {
							default: this.j.keys.slice(0),
							user: this.userConfiguration.keys.slice(0),
							workspace: this.q.keys.slice(0),
							workspaceFolder: I ? I.keys.slice(0) : [],
						};
					}
					updateDefaultConfiguration(S) {
						(this.j = S), (this.h = null), this.i.clear();
					}
					updatePolicyConfiguration(S) {
						this.l = S;
					}
					updateApplicationConfiguration(S) {
						(this.m = S), (this.h = null), this.i.clear();
					}
					updateLocalUserConfiguration(S) {
						(this.n = S), (this.v = null), (this.h = null), this.i.clear();
					}
					updateRemoteUserConfiguration(S) {
						(this.p = S), (this.v = null), (this.h = null), this.i.clear();
					}
					updateWorkspaceConfiguration(S) {
						(this.q = S), (this.h = null), this.i.clear();
					}
					updateFolderConfiguration(S, I) {
						this.r.set(S, I), this.i.delete(S);
					}
					deleteFolderConfiguration(S) {
						this.folderConfigurations.delete(S), this.i.delete(S);
					}
					compareAndUpdateDefaultConfiguration(S, I) {
						const T = [];
						if (!I) {
							const { added: P, updated: k, removed: L } = y(this.j, S);
							I = [...P, ...k, ...L];
						}
						for (const P of I)
							for (const k of (0, a.$Yo)(P)) {
								const L = this.j.getKeysForOverrideIdentifier(k),
									D = S.getKeysForOverrideIdentifier(k),
									M = [
										...D.filter((N) => L.indexOf(N) === -1),
										...L.filter((N) => D.indexOf(N) === -1),
										...L.filter(
											(N) =>
												!d.$zo(
													this.j.override(k).getValue(N),
													S.override(k).getValue(N),
												),
										),
									];
								T.push([k, M]);
							}
						return (
							this.updateDefaultConfiguration(S), { keys: I, overrides: T }
						);
					}
					compareAndUpdatePolicyConfiguration(S) {
						const { added: I, updated: T, removed: P } = y(this.l, S),
							k = [...I, ...T, ...P];
						return (
							k.length && this.updatePolicyConfiguration(S),
							{ keys: k, overrides: [] }
						);
					}
					compareAndUpdateApplicationConfiguration(S) {
						const {
								added: I,
								updated: T,
								removed: P,
								overrides: k,
							} = y(this.applicationConfiguration, S),
							L = [...I, ...T, ...P];
						return (
							L.length && this.updateApplicationConfiguration(S),
							{ keys: L, overrides: k }
						);
					}
					compareAndUpdateLocalUserConfiguration(S) {
						const {
								added: I,
								updated: T,
								removed: P,
								overrides: k,
							} = y(this.localUserConfiguration, S),
							L = [...I, ...T, ...P];
						return (
							L.length && this.updateLocalUserConfiguration(S),
							{ keys: L, overrides: k }
						);
					}
					compareAndUpdateRemoteUserConfiguration(S) {
						const {
								added: I,
								updated: T,
								removed: P,
								overrides: k,
							} = y(this.remoteUserConfiguration, S),
							L = [...I, ...T, ...P];
						return (
							L.length && this.updateRemoteUserConfiguration(S),
							{ keys: L, overrides: k }
						);
					}
					compareAndUpdateWorkspaceConfiguration(S) {
						const {
								added: I,
								updated: T,
								removed: P,
								overrides: k,
							} = y(this.workspaceConfiguration, S),
							L = [...I, ...T, ...P];
						return (
							L.length && this.updateWorkspaceConfiguration(S),
							{ keys: L, overrides: k }
						);
					}
					compareAndUpdateFolderConfiguration(S, I) {
						const T = this.folderConfigurations.get(S),
							{ added: P, updated: k, removed: L, overrides: D } = y(T, I),
							M = [...P, ...k, ...L];
						return (
							(M.length || !T) && this.updateFolderConfiguration(S, I),
							{ keys: M, overrides: D }
						);
					}
					compareAndDeleteFolderConfiguration(S) {
						const I = this.folderConfigurations.get(S);
						if (!I) throw new Error("Unknown folder");
						this.deleteFolderConfiguration(S);
						const {
							added: T,
							updated: P,
							removed: k,
							overrides: L,
						} = y(I, void 0);
						return { keys: [...T, ...P, ...k], overrides: L };
					}
					get defaults() {
						return this.j;
					}
					get applicationConfiguration() {
						return this.m;
					}
					get userConfiguration() {
						return (
							this.v ||
								(this.v = this.p.isEmpty() ? this.n : this.n.merge(this.p)),
							this.v
						);
					}
					get localUserConfiguration() {
						return this.n;
					}
					get remoteUserConfiguration() {
						return this.p;
					}
					get workspaceConfiguration() {
						return this.q;
					}
					get folderConfigurations() {
						return this.r;
					}
					w(S, I, T) {
						let P = this.x(I, T);
						return (
							I.overrideIdentifier && (P = P.override(I.overrideIdentifier)),
							!this.l.isEmpty() &&
								this.l.getValue(S) !== void 0 &&
								(P = P.merge(this.l)),
							P
						);
					}
					x({ resource: S }, I) {
						let T = this.y();
						if (I && S) {
							const P = I.getFolder(S);
							P && (T = this.z(P.uri) || T);
							const k = this.t.get(S);
							k && (T = T.merge(k));
						}
						return T;
					}
					y() {
						return (
							this.h ||
								(this.h = this.j.merge(
									this.applicationConfiguration,
									this.userConfiguration,
									this.q,
									this.s,
								)),
							this.h
						);
					}
					z(S) {
						let I = this.i.get(S);
						if (!I) {
							const T = this.y(),
								P = this.r.get(S);
							P ? ((I = T.merge(P)), this.i.set(S, I)) : (I = T);
						}
						return I;
					}
					A(S, I) {
						if (I && S) {
							const T = I.getFolder(S);
							if (T) return this.r.get(T.uri);
						}
					}
					toData() {
						return {
							defaults: {
								contents: this.j.contents,
								overrides: this.j.overrides,
								keys: this.j.keys,
							},
							policy: {
								contents: this.l.contents,
								overrides: this.l.overrides,
								keys: this.l.keys,
							},
							application: {
								contents: this.applicationConfiguration.contents,
								overrides: this.applicationConfiguration.overrides,
								keys: this.applicationConfiguration.keys,
							},
							user: {
								contents: this.userConfiguration.contents,
								overrides: this.userConfiguration.overrides,
								keys: this.userConfiguration.keys,
							},
							workspace: {
								contents: this.q.contents,
								overrides: this.q.overrides,
								keys: this.q.keys,
							},
							folders: [...this.r.keys()].reduce((S, I) => {
								const { contents: T, overrides: P, keys: k } = this.r.get(I);
								return S.push([I, { contents: T, overrides: P, keys: k }]), S;
							}, []),
						};
					}
					allKeys() {
						const S = new Set();
						return (
							this.j.keys.forEach((I) => S.add(I)),
							this.userConfiguration.keys.forEach((I) => S.add(I)),
							this.q.keys.forEach((I) => S.add(I)),
							this.r.forEach((I) => I.keys.forEach((T) => S.add(T))),
							[...S.values()]
						);
					}
					B() {
						const S = new Set();
						return (
							this.j.getAllOverrideIdentifiers().forEach((I) => S.add(I)),
							this.userConfiguration
								.getAllOverrideIdentifiers()
								.forEach((I) => S.add(I)),
							this.q.getAllOverrideIdentifiers().forEach((I) => S.add(I)),
							this.r.forEach((I) =>
								I.getAllOverrideIdentifiers().forEach((T) => S.add(T)),
							),
							[...S.values()]
						);
					}
					D(S) {
						const I = new Set();
						return (
							this.j.getKeysForOverrideIdentifier(S).forEach((T) => I.add(T)),
							this.userConfiguration
								.getKeysForOverrideIdentifier(S)
								.forEach((T) => I.add(T)),
							this.q.getKeysForOverrideIdentifier(S).forEach((T) => I.add(T)),
							this.r.forEach((T) =>
								T.getKeysForOverrideIdentifier(S).forEach((P) => I.add(P)),
							),
							[...I.values()]
						);
					}
					static parse(S, I) {
						const T = this.E(S.defaults, I),
							P = this.E(S.policy, I),
							k = this.E(S.application, I),
							L = this.E(S.user, I),
							D = this.E(S.workspace, I),
							M = S.folders.reduce(
								(N, A) => (N.set(r.URI.revive(A[0]), this.E(A[1], I)), N),
								new C.$Gc(),
							);
						return new b(
							T,
							P,
							k,
							L,
							g.createEmptyModel(I),
							D,
							M,
							g.createEmptyModel(I),
							new C.$Gc(),
							I,
						);
					}
					static E(S, I) {
						return new g(S.contents, S.keys, S.overrides, void 0, I);
					}
				}
				e.$9o = b;
				function s(...v) {
					if (v.length === 0) return { keys: [], overrides: [] };
					if (v.length === 1) return v[0];
					const S = new Set(),
						I = new Map();
					for (const P of v)
						P.keys.forEach((k) => S.add(k)),
							P.overrides.forEach(([k, L]) => {
								const D = (0, C.$Dc)(I, k, new Set());
								L.forEach((M) => D.add(M));
							});
					const T = [];
					return (
						I.forEach((P, k) => T.push([k, [...P.values()]])),
						{ keys: [...S.values()], overrides: T }
					);
				}
				class l {
					constructor(S, I, T, P, k) {
						(this.change = S),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.i = k),
							(this.a = `
`),
							(this.b = this.a.charCodeAt(0)),
							(this.c = 46),
							(this.affectedKeys = new Set()),
							(this.j = void 0);
						for (const L of S.keys) this.affectedKeys.add(L);
						for (const [, L] of S.overrides)
							for (const D of L) this.affectedKeys.add(D);
						this.d = this.a;
						for (const L of this.affectedKeys) this.d += L + this.a;
					}
					get previousConfiguration() {
						return (
							!this.j && this.f && (this.j = b.parse(this.f.data, this.i)),
							this.j
						);
					}
					affectsConfiguration(S, I) {
						const T = this.a + S,
							P = this.d.indexOf(T);
						if (P < 0) return !1;
						const k = P + T.length;
						if (k >= this.d.length) return !1;
						const L = this.d.charCodeAt(k);
						if (L !== this.b && L !== this.c) return !1;
						if (I) {
							const D = this.previousConfiguration
									? this.previousConfiguration.getValue(S, I, this.f?.workspace)
									: void 0,
								M = this.g.getValue(S, I, this.h);
							return !d.$zo(D, M);
						}
						return !0;
					}
				}
				e.$$o = l;
				function y(v, S) {
					const {
							added: I,
							removed: T,
							updated: P,
						} = $(S?.rawConfiguration, v?.rawConfiguration),
						k = [],
						L = v?.getAllOverrideIdentifiers() || [],
						D = S?.getAllOverrideIdentifiers() || [];
					if (S) {
						const M = D.filter((N) => !L.includes(N));
						for (const N of M) k.push([N, S.getKeysForOverrideIdentifier(N)]);
					}
					if (v) {
						const M = L.filter((N) => !D.includes(N));
						for (const N of M) k.push([N, v.getKeysForOverrideIdentifier(N)]);
					}
					if (S && v) {
						for (const M of L)
							if (D.includes(M)) {
								const N = $(
									{
										contents: v.getOverrideValue(void 0, M) || {},
										keys: v.getKeysForOverrideIdentifier(M),
									},
									{
										contents: S.getOverrideValue(void 0, M) || {},
										keys: S.getKeysForOverrideIdentifier(M),
									},
								);
								k.push([M, [...N.added, ...N.removed, ...N.updated]]);
							}
					}
					return { added: I, removed: T, updated: P, overrides: k };
				}
				function $(v, S) {
					const I = v
							? S
								? v.keys.filter((k) => S.keys.indexOf(k) === -1)
								: [...v.keys]
							: [],
						T = S
							? v
								? S.keys.filter((k) => v.keys.indexOf(k) === -1)
								: [...S.keys]
							: [],
						P = [];
					if (v && S) {
						for (const k of S.keys)
							if (v.keys.indexOf(k) !== -1) {
								const L = (0, u.$oj)(S.contents, k),
									D = (0, u.$oj)(v.contents, k);
								d.$zo(L, D) || P.push(k);
							}
					}
					return { added: I, removed: T, updated: P };
				}
			},
		),
		