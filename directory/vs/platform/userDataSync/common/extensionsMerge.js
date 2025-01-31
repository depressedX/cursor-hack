import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/objects.js';
import '../../../base/common/semver/semver.js';
import '../../../base/common/types.js';
define(de[2884], he([1, 0, 82, 464, 28]), function (ce /*require*/,
 e /*exports*/,
 t /*objects*/,
 i /*semver*/,
 w /*types*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$U3c = E),
				(i = mt(i));
			function E(c, n, g, p, o, f) {
				const b = [],
					s = [],
					l = [];
				if (!n) {
					const B = c.filter(({ identifier: U }) =>
						o.every((z) => z.toLowerCase() !== U.id.toLowerCase()),
					);
					return {
						local: { added: b, removed: s, updated: l },
						remote:
							B.length > 0
								? { added: B, updated: [], removed: [], all: B }
								: null,
					};
				}
				(c = c.map(a)), (n = n.map(a)), (g = g ? g.map(a) : null);
				const y = new Map(),
					$ = (B) => {
						B.uuid && y.set(B.id.toLowerCase(), B.uuid);
					};
				c.forEach(({ identifier: B }) => $(B)),
					n.forEach(({ identifier: B }) => $(B)),
					g?.forEach(({ identifier: B }) => $(B)),
					p?.forEach(({ identifier: B }) => $(B)),
					f?.forEach((B) => $(B));
				const v = (B) => {
						const U = B.identifier.uuid || y.get(B.identifier.id.toLowerCase());
						return U ? `uuid:${U}` : `id:${B.identifier.id.toLowerCase()}`;
					},
					S = (B, U) => (B.set(v(U), U), B),
					I = c.reduce(S, new Map()),
					T = n.reduce(S, new Map()),
					P = n.reduce((B, U) => S(B, (0, t.$vo)(U)), new Map()),
					k = g ? g.reduce(S, new Map()) : null,
					L = p.reduce(S, new Map()),
					D = o.reduce((B, U) => {
						const z = y.get(U.toLowerCase());
						return B.add(z ? `uuid:${z}` : `id:${U.toLowerCase()}`);
					}, new Set()),
					M = f
						? f.reduce(
								(B, { id: U, uuid: z }) => (
									(z = z ?? y.get(U.toLowerCase())),
									B.add(z ? `uuid:${z}` : `id:${U.toLowerCase()}`)
								),
								new Set(),
							)
						: null,
					N = C(I, T, D, !1);
				if (N.added.size > 0 || N.removed.size > 0 || N.updated.size > 0) {
					const B = C(k, I, D, !1),
						U = C(k, T, D, !0),
						z = (F, x, H, q) => {
							let V, G, K;
							return (
								x.installed
									? ((V = q.pinned), (K = q.preRelease), V && (G = q.version))
									: ((V = H.pinned), (K = H.preRelease), V && (G = H.version)),
								V === void 0 && ((V = x.pinned), V && (G = x.version)),
								K === void 0 && (K = x.preRelease),
								{
									...q,
									installed: x.installed || H.installed,
									pinned: V,
									preRelease: K,
									version:
										G ??
										(H.version && (!x.installed || i.gt(H.version, x.version))
											? H.version
											: x.version),
									state: m(x, H, k?.get(F)),
								}
							);
						};
					for (const F of U.removed.values()) {
						const x = I.get(F);
						if (!x) continue;
						const H = (0, w.$wg)(k?.get(F)),
							q = M && !M.has(F) && H.installed;
						x.installed && q ? s.push(x.identifier) : P.set(F, x);
					}
					for (const F of U.added.values()) {
						const x = (0, w.$wg)(T.get(F)),
							H = I.get(F);
						if (H) {
							if (N.updated.has(F)) {
								const q = z(F, H, x, x);
								d(H, x, !1, !1) || l.push(h(q, F)), P.set(F, q);
							}
						} else x.installed && b.push(h(x, F));
					}
					for (const F of U.updated.values()) {
						const x = (0, w.$wg)(T.get(F)),
							H = (0, w.$wg)(k?.get(F)),
							q = I.get(F);
						if (q)
							if (M && !M.has(F) && H.installed && q.installed && !x.installed)
								s.push(q.identifier);
							else {
								const G = z(F, q, x, x);
								l.push(h(G, F)), P.set(F, G);
							}
						else x.installed && b.push(h(x, F));
					}
					for (const F of B.added.values())
						U.added.has(F) || P.set(F, (0, w.$wg)(I.get(F)));
					for (const F of B.updated.values()) {
						if (U.removed.has(F) || U.updated.has(F)) continue;
						const x = (0, w.$wg)(I.get(F)),
							H = (0, w.$wg)(T.get(F));
						P.set(F, z(F, x, H, x));
					}
					for (const F of B.removed.values())
						U.updated.has(F) ||
							U.removed.has(F) ||
							L.has(F) ||
							((0, w.$wg)(T.get(F)).installed &&
								M &&
								(M.has(F) || !(0, w.$wg)(k?.get(F)).installed || P.delete(F)));
				}
				const A = [],
					R = C(T, P, new Set(), !0),
					O = R.added.size > 0 || R.updated.size > 0 || R.removed.size > 0;
				return (
					O && P.forEach((B, U) => A.push(h(B, U))),
					{
						local: { added: b, removed: s, updated: l },
						remote: O
							? {
									added: [...R.added].map((B) => P.get(B)),
									updated: [...R.updated].map((B) => P.get(B)),
									removed: [...R.removed].map((B) => T.get(B)),
									all: A,
								}
							: null,
					}
				);
			}
			function C(c, n, g, p) {
				const o = c ? [...c.keys()].filter((y) => !g.has(y)) : [],
					f = [...n.keys()].filter((y) => !g.has(y)),
					b = f
						.filter((y) => !o.includes(y))
						.reduce((y, $) => (y.add($), y), new Set()),
					s = o
						.filter((y) => !f.includes(y))
						.reduce((y, $) => (y.add($), y), new Set()),
					l = new Set();
				for (const y of o) {
					if (s.has(y)) continue;
					const $ = c.get(y),
						v = n.get(y);
					(!v || !d($, v, p, !0)) && l.add(y);
				}
				return { added: b, removed: s, updated: l };
			}
			function d(c, n, g, p) {
				return !(
					c.disabled !== n.disabled ||
					!!c.isApplicationScoped != !!n.isApplicationScoped ||
					(p && c.installed !== n.installed) ||
					(c.installed &&
						n.installed &&
						(c.preRelease !== n.preRelease ||
							c.pinned !== n.pinned ||
							(n.pinned && c.version !== n.version))) ||
					!u(c.state, n.state) ||
					(g && c.version !== n.version)
				);
			}
			function m(c, n, g) {
				const p = c.state,
					o = n.state,
					f = g?.state;
				if (!n.version || (p && i.gt(c.version, n.version))) return p;
				if ((o && i.gt(n.version, c.version)) || !p) return o;
				if (!o) return p;
				const b = (0, t.$vo)(p),
					s = f
						? r(f, o)
						: {
								added: Object.keys(o).reduce(
									(y, $) => (y.add($), y),
									new Set(),
								),
								removed: new Set(),
								updated: new Set(),
							},
					l = f
						? r(f, p)
						: {
								added: Object.keys(p).reduce(
									(y, $) => (y.add($), y),
									new Set(),
								),
								removed: new Set(),
								updated: new Set(),
							};
				for (const y of [...s.added.values(), ...s.updated.values()])
					b[y] = o[y];
				for (const y of s.removed.values()) l.updated.has(y) || delete b[y];
				return b;
			}
			function r(c, n) {
				const g = Object.keys(c),
					p = Object.keys(n),
					o = p
						.filter((s) => !g.includes(s))
						.reduce((s, l) => (s.add(l), s), new Set()),
					f = g
						.filter((s) => !p.includes(s))
						.reduce((s, l) => (s.add(l), s), new Set()),
					b = new Set();
				for (const s of g) {
					if (f.has(s)) continue;
					const l = c[s],
						y = n[s];
					(0, t.$zo)(l, y) || b.add(s);
				}
				return { added: o, removed: f, updated: b };
			}
			function u(c = {}, n = {}) {
				const { added: g, removed: p, updated: o } = r(c, n);
				return g.size === 0 && p.size === 0 && o.size === 0;
			}
			function a(c) {
				return { ...c, disabled: !!c.disabled, installed: !!c.installed };
			}
			function h(c, n) {
				const g = {
					...c,
					identifier: {
						id: c.identifier.id,
						uuid: n.startsWith("uuid:") ? n.substring(5) : void 0,
					},
					preRelease: !!c.preRelease,
					pinned: !!c.pinned,
				};
				return (
					c.disabled || delete g.disabled,
					c.installed || delete g.installed,
					c.state || delete g.state,
					c.isApplicationScoped || delete g.isApplicationScoped,
					g
				);
			}
		})
