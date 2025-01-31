import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../base/common/event.js';
import '../../../../base/common/path.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/product/common/product.js';
import '../../../../base/common/async.js';
define(
		de[3302],
		he([1, 0, 109, 6, 54, 3, 372, 15]),
		function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*event*/,
 w /*path*/,
 E /*lifecycle*/,
 C /*product*/,
 d /*async*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$L4c = e.$K4c = e.$J4c = e.$I4c = e.$H4c = void 0),
				(w = mt(w)),
				(C = xi(C));
			class m {
				constructor(s, l) {
					(this.versionId = s), (this.removedDueToLooping = l);
				}
			}
			e.$H4c = m;
			class r {
				static isHostExtension(s, l, y) {
					if (l.getExtensionDescription(s)) return !1;
					const $ = y.getExtensionDescription(s);
					return $ ? !!(($.main || $.browser) && $.api === "none") : !1;
				}
				constructor(s, l) {
					(this.j = s),
						(this.c = new i.$re()),
						(this.onDidChange = this.c.event),
						(this.d = 0),
						(this.e = l.map(f)),
						this.k();
				}
				k() {
					this.e.sort(p),
						(this.f = new t.$In()),
						(this.g = []),
						(this.h = new Map());
					for (const s of this.e) {
						if (this.f.has(s.identifier)) {
							console.error(
								"Extension `" + s.identifier.value + "` is already registered",
							);
							continue;
						}
						this.f.set(s.identifier, s), this.g.push(s);
						const l = this.j.readActivationEvents(s);
						for (const y of l)
							this.h.has(y) || this.h.set(y, []), this.h.get(y).push(s);
					}
				}
				set(s) {
					return (
						(this.e = s.map(f)),
						this.k(),
						this.d++,
						this.c.fire(void 0),
						{ versionId: this.d }
					);
				}
				deltaExtensions(s, l) {
					(s = s.map(f)), (this.e = o(this.e, l)), (this.e = this.e.concat(s));
					const y = r.l(this.e);
					return (
						(this.e = o(
							this.e,
							y.map(($) => $.identifier),
						)),
						this.k(),
						this.d++,
						this.c.fire(void 0),
						new m(this.d, y)
					);
				}
				static l(s) {
					const l = new (class {
							constructor() {
								(this.c = new Map()), (this.d = new Set()), (this.e = []);
							}
							addNode(I) {
								this.d.has(I) || (this.d.add(I), this.e.push(I));
							}
							addArc(I, T) {
								this.addNode(I),
									this.addNode(T),
									this.c.has(I) ? this.c.get(I).push(T) : this.c.set(I, [T]);
							}
							getArcs(I) {
								return this.c.has(I) ? this.c.get(I) : [];
							}
							hasOnlyGoodArcs(I, T) {
								const P = l.getArcs(I);
								for (let k = 0; k < P.length; k++) if (!T.has(P[k])) return !1;
								return !0;
							}
							getNodes() {
								return this.e;
							}
						})(),
						y = new t.$In();
					for (const I of s)
						if ((y.set(I.identifier, I), I.extensionDependencies))
							for (const T of I.extensionDependencies)
								l.addArc(t.$Gn.toKey(I.identifier), t.$Gn.toKey(T));
					const $ = new Set();
					l.getNodes()
						.filter((I) => l.getArcs(I).length === 0)
						.forEach((I) => $.add(I));
					const v = l.getNodes().filter((I) => !$.has(I));
					let S;
					do {
						S = !1;
						for (let I = 0; I < v.length; I++) {
							const T = v[I];
							l.hasOnlyGoodArcs(T, $) &&
								(v.splice(I, 1), I--, $.add(T), (S = !0));
						}
					} while (S);
					return v.map((I) => y.get(I));
				}
				containsActivationEvent(s) {
					return this.h.has(s);
				}
				containsExtension(s) {
					return this.f.has(s);
				}
				getExtensionDescriptionsForActivationEvent(s) {
					const l = this.h.get(s);
					return l ? l.slice(0) : [];
				}
				getAllExtensionDescriptions() {
					return this.g.slice(0);
				}
				getSnapshot() {
					return new u(this.d, this.getAllExtensionDescriptions());
				}
				getExtensionDescription(s) {
					const l = this.f.get(s);
					return l || void 0;
				}
				getExtensionDescriptionByUUID(s) {
					for (const l of this.g) if (l.uuid === s) return l;
				}
				getExtensionDescriptionByIdOrUUID(s, l) {
					return (
						this.getExtensionDescription(s) ??
						(l ? this.getExtensionDescriptionByUUID(l) : void 0)
					);
				}
			}
			e.$I4c = r;
			class u {
				constructor(s, l) {
					(this.versionId = s), (this.extensions = l);
				}
			}
			e.$J4c = u;
			class a {
				constructor(s) {
					(this.d = new n()), (this.c = new r(s, []));
				}
				async acquireLock(s) {
					const l = await this.d.acquire(s);
					return new h(this, l);
				}
				deltaExtensions(s, l, y) {
					if (!s.isAcquiredFor(this)) throw new Error("Lock is not held");
					return this.c.deltaExtensions(l, y);
				}
				containsActivationEvent(s) {
					return this.c.containsActivationEvent(s);
				}
				containsExtension(s) {
					return this.c.containsExtension(s);
				}
				getExtensionDescriptionsForActivationEvent(s) {
					return this.c.getExtensionDescriptionsForActivationEvent(s);
				}
				getAllExtensionDescriptions() {
					return this.c.getAllExtensionDescriptions();
				}
				getSnapshot() {
					return this.c.getSnapshot();
				}
				getExtensionDescription(s) {
					return this.c.getExtensionDescription(s);
				}
				getExtensionDescriptionByUUID(s) {
					return this.c.getExtensionDescriptionByUUID(s);
				}
				getExtensionDescriptionByIdOrUUID(s, l) {
					return this.c.getExtensionDescriptionByIdOrUUID(s, l);
				}
			}
			e.$K4c = a;
			class h extends E.$1c {
				constructor(s, l) {
					super(), (this.f = s), (this.c = !1), this.D(l);
				}
				isAcquiredFor(s) {
					return !this.c && this.f === s;
				}
			}
			e.$L4c = h;
			class c {
				constructor(s) {
					this.name = s;
					const l = (0, d.$Fh)();
					(this.promise = l.promise), (this.c = l.resolve);
				}
				resolve(s) {
					this.c(s);
				}
			}
			class n {
				constructor() {
					(this.c = []), (this.d = !1);
				}
				async acquire(s) {
					const l = new c(s);
					return this.c.push(l), this.e(), l.promise;
				}
				e() {
					if (this.d || this.c.length === 0) return;
					const s = this.c.shift();
					this.d = !0;
					let l = !0;
					const y = setTimeout(() => {
							l &&
								console.warn(
									`The customer named ${s.name} has been holding on to the lock for 30s. This might be a problem.`,
								);
						}, 30 * 1e3),
						$ = () => {
							l && (clearTimeout(y), (l = !1), (this.d = !1), this.e());
						};
					s.resolve((0, E.$Yc)($));
				}
			}
			var g;
			(function (b) {
				(b[(b.Builtin = 0)] = "Builtin"),
					(b[(b.User = 1)] = "User"),
					(b[(b.Dev = 2)] = "Dev");
			})(g || (g = {}));
			function p(b, s) {
				const l = b.isBuiltin
						? g.Builtin
						: b.isUnderDevelopment
							? g.Dev
							: g.User,
					y = s.isBuiltin ? g.Builtin : s.isUnderDevelopment ? g.Dev : g.User;
				if (l !== y) return l - y;
				const $ = w.$lc.basename(b.extensionLocation.path),
					v = w.$lc.basename(s.extensionLocation.path);
				return $ < v ? -1 : $ > v ? 1 : 0;
			}
			function o(b, s) {
				const l = new t.$Hn(s);
				return b.filter((y) => !l.has(y.identifier));
			}
			function f(b) {
				return {
					...b,
					extensionDependencies: b.extensionDependencies?.map(
						(s) => C.default.modifiedExtensionDependencies?.[s] ?? s,
					),
				};
			}
		},
	)
