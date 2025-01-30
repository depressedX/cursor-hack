import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/network.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/log/common/log.js';
import '../../environment/common/environmentService.js';
import './extensionHostKind.js';
import './extensionManifestPropertiesService.js';
import './extensionRunningLocation.js';
define(
			de[2006],
			he([1, 0, 58, 23, 10, 109, 34, 78, 517, 384, 1294]),
			function (ce /*require*/,
 e /*exports*/,
 t /*constants*/,
 i /*network*/,
 w /*configuration*/,
 E /*extensions*/,
 C /*log*/,
 d /*environmentService*/,
 m /*extensionHostKind*/,
 r /*extensionManifestPropertiesService*/,
 u /*extensionRunningLocation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$T4c = void 0),
					(e.$U4c = h),
					(e.$V4c = c);
				let a = class {
					get maxLocalProcessAffinity() {
						return this.b;
					}
					get maxLocalWebWorkerAffinity() {
						return this.c;
					}
					constructor(g, p, o, f, b, s) {
						(this.d = g),
							(this.f = p),
							(this.g = o),
							(this.h = f),
							(this.i = b),
							(this.j = s),
							(this.a = new E.$In()),
							(this.b = 0),
							(this.c = 0);
					}
					set(g, p) {
						this.a.set(g, p);
					}
					readExtensionKinds(g) {
						return g.isUnderDevelopment && this.g.extensionDevelopmentKind
							? this.g.extensionDevelopmentKind
							: this.j.getExtensionKind(g);
					}
					getRunningLocation(g) {
						return this.a.get(g) || null;
					}
					filterByRunningLocation(g, p) {
						return h(g, this.a, (o) => p.equals(o), {
							environmentService: this.g,
						});
					}
					filterByExtensionHostKind(g, p) {
						return h(g, this.a, (o) => o.kind === p, {
							environmentService: this.g,
						});
					}
					filterByExtensionHostManager(g, p) {
						return h(g, this.a, (o) => p.representsRunningLocation(o), {
							environmentService: this.g,
						});
					}
					k(g, p, o) {
						const f = new E.$In();
						for (const S of g) (S.main || S.browser) && f.set(S.identifier, S);
						for (const S of this.d.getAllExtensionDescriptions())
							if (S.main || S.browser) {
								const I = this.a.get(S.identifier);
								I && I.kind === p && f.set(S.identifier, S);
							}
						const b = new E.$In();
						let s = 0;
						for (const [S, I] of f) b.set(I.identifier, ++s);
						const l = (S, I) => {
							for (const [T, P] of b) P === S && b.set(T, I);
						};
						for (const [S, I] of f) {
							if (!I.extensionDependencies) continue;
							const T = b.get(I.identifier);
							for (const P of I.extensionDependencies) {
								const k = b.get(P);
								k && k !== T && l(k, T);
							}
						}
						const y = new Map();
						let $ = 0;
						for (const [S, I] of f) {
							const T = this.a.get(I.identifier);
							if (T) {
								const P = b.get(I.identifier);
								y.set(P, T.affinity), ($ = Math.max($, T.affinity));
							}
						}
						if (!this.g.isExtensionDevelopment) {
							const S =
									this.h.getValue("extensions.experimental.affinity") || {},
								I = Object.keys(S),
								T = new Map();
							for (const P of I) {
								const k = S[P];
								if (typeof k != "number" || k <= 0 || Math.floor(k) !== k) {
									this.i.info(
										`Ignoring configured affinity for '${P}' because the value is not a positive integer.`,
									);
									continue;
								}
								const L = b.get(P);
								if (!L) continue;
								const D = y.get(L);
								if (D) {
									T.set(k, D);
									continue;
								}
								const M = T.get(k);
								if (M) {
									y.set(L, M);
									continue;
								}
								if (!o) {
									this.i.info(
										`Ignoring configured affinity for '${P}' because extension host(s) are already running. Reload window.`,
									);
									continue;
								}
								const N = ++$;
								T.set(k, N), y.set(L, N);
							}
						}
						const v = new E.$In();
						for (const S of g) {
							const I = b.get(S.identifier) || 0,
								T = y.get(I) || 0;
							v.set(S.identifier, T);
						}
						if ($ > 0 && o)
							for (let S = 1; S <= $; S++) {
								const I = [];
								for (const T of g)
									v.get(T.identifier) === S && I.push(T.identifier);
								this.i.info(
									`Placing extension(s) ${I.map((T) => T.value).join(", ")} on a separate extension host.`,
								);
							}
						return { affinities: v, maxAffinity: $ };
					}
					computeRunningLocation(g, p, o) {
						return this.l(this.a, g, p, o).runningLocation;
					}
					l(g, p, o, f) {
						(p = p.filter((P) => !g.has(P.identifier))),
							(o = o.filter((P) => !g.has(P.identifier)));
						const b = (0, m.$e2)(
								p,
								o,
								(P) => this.readExtensionKinds(P),
								(P, k, L, D, M) => this.f.pickExtensionHostKind(P, k, L, D, M),
							),
							s = new E.$In();
						for (const P of p) s.set(P.identifier, P);
						for (const P of o) s.set(P.identifier, P);
						const l = new E.$In(),
							y = [],
							$ = [];
						for (const [P, k] of b) {
							let L = null;
							if (k === m.ExtensionHostKind.LocalProcess) {
								const D = s.get(P);
								D && y.push(D);
							} else if (k === m.ExtensionHostKind.LocalWebWorker) {
								const D = s.get(P);
								D && $.push(D);
							} else k === m.ExtensionHostKind.Remote && (L = new u.$h2());
							l.set(P, L);
						}
						const { affinities: v, maxAffinity: S } = this.k(
							y,
							m.ExtensionHostKind.LocalProcess,
							f,
						);
						for (const P of y) {
							const k = v.get(P.identifier) || 0;
							l.set(P.identifier, new u.$f2(k));
						}
						const { affinities: I, maxAffinity: T } = this.k(
							$,
							m.ExtensionHostKind.LocalWebWorker,
							f,
						);
						for (const P of $) {
							const k = I.get(P.identifier) || 0;
							l.set(P.identifier, new u.$g2(k));
						}
						for (const [P, k] of g) k && l.set(P, k);
						return {
							runningLocation: l,
							maxLocalProcessAffinity: S,
							maxLocalWebWorkerAffinity: T,
						};
					}
					initializeRunningLocation(g, p) {
						const {
							runningLocation: o,
							maxLocalProcessAffinity: f,
							maxLocalWebWorkerAffinity: b,
						} = this.l(this.a, g, p, !0);
						(this.a = o), (this.b = f), (this.c = b);
					}
					deltaExtensions(g, p) {
						const o = new E.$In();
						for (const f of p) {
							const b = f;
							o.set(b, this.a.get(b) || null), this.a.delete(b);
						}
						return this.m(g), o;
					}
					m(g) {
						const p = [],
							o = [];
						for (const s of g) {
							const l = this.readExtensionKinds(s),
								y = s.extensionLocation.scheme === i.Schemas.vscodeRemote,
								$ = this.f.pickExtensionHostKind(
									s.identifier,
									l,
									!y,
									y,
									m.ExtensionRunningPreference.None,
								);
							let v = null;
							$ === m.ExtensionHostKind.LocalProcess
								? p.push(s)
								: $ === m.ExtensionHostKind.LocalWebWorker
									? o.push(s)
									: $ === m.ExtensionHostKind.Remote && (v = new u.$h2()),
								this.a.set(s.identifier, v);
						}
						const { affinities: f } = this.k(
							p,
							m.ExtensionHostKind.LocalProcess,
							!1,
						);
						for (const s of p) {
							const l = f.get(s.identifier) || 0;
							this.a.set(s.identifier, new u.$f2(l));
						}
						const { affinities: b } = this.k(
							o,
							m.ExtensionHostKind.LocalWebWorker,
							!1,
						);
						for (const s of o) {
							const l = b.get(s.identifier) || 0;
							this.a.set(s.identifier, new u.$g2(l));
						}
					}
				};
				(e.$T4c = a),
					(e.$T4c = a =
						Ne([j(2, d.$r8), j(3, w.$gj), j(4, C.$ik), j(5, r.$JSb)], a));
				function h(n, g, p, { environmentService: o }) {
					return n.filter((f) => {
						let b = g.get(f.identifier);
						return !b ||
							(o.shadowWindowForWorkspaceId &&
								!t.$8V.includes(f.identifier._lower))
							? !1
							: b && p(b);
					});
				}
				function c(n, g, p, { environmentService: o }) {
					return n.filter((f) => {
						let b = g.get(f);
						return !b ||
							(o.shadowWindowForWorkspaceId && !t.$8V.includes(f._lower))
							? !1
							: b && p(b);
					});
				}
			},
		),
		