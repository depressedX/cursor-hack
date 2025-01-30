import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import '../../utils/index.js';
import './fetch.js';
define(de[2143], he([1, 0, 144, 80, 1104]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/,
 w /*fetch*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createStore = C),
				(e.push = m),
				(e.unshift = r),
				(e.shift = u),
				(e.makeBrowserOfflineTransport = c);
			function E(n) {
				return new Promise((g, p) => {
					(n.oncomplete = n.onsuccess = () => g(n.result)),
						(n.onabort = n.onerror = () => p(n.error));
				});
			}
			function C(n, g) {
				const p = indexedDB.open(n);
				p.onupgradeneeded = () => p.result.createObjectStore(g);
				const o = E(p);
				return (f) =>
					o.then((b) => f(b.transaction(g, "readwrite").objectStore(g)));
			}
			function d(n) {
				return E(n.getAllKeys());
			}
			function m(n, g, p) {
				return n((o) =>
					d(o).then((f) => {
						if (!(f.length >= p))
							return o.put(g, Math.max(...f, 0) + 1), E(o.transaction);
					}),
				);
			}
			function r(n, g, p) {
				return n((o) =>
					d(o).then((f) => {
						if (!(f.length >= p))
							return o.put(g, Math.min(...f, 0) - 1), E(o.transaction);
					}),
				);
			}
			function u(n) {
				return n((g) =>
					d(g).then((p) => {
						const o = p[0];
						if (o != null)
							return E(g.get(o)).then(
								(f) => (g.delete(o), E(g.transaction).then(() => f)),
							);
					}),
				);
			}
			function a(n) {
				let g;
				function p() {
					return (
						g == null &&
							(g = C(n.dbName || "sentry-offline", n.storeName || "queue")),
						g
					);
				}
				return {
					push: async (o) => {
						try {
							const f = await (0, i.serializeEnvelope)(o);
							await m(p(), f, n.maxQueueSize || 30);
						} catch {}
					},
					unshift: async (o) => {
						try {
							const f = await (0, i.serializeEnvelope)(o);
							await r(p(), f, n.maxQueueSize || 30);
						} catch {}
					},
					shift: async () => {
						try {
							const o = await u(p());
							if (o) return (0, i.parseEnvelope)(o);
						} catch {}
					},
				};
			}
			function h(n) {
				return (g) => n({ ...g, createStore: a });
			}
			function c(n = w.makeFetchTransport) {
				return h((0, t.makeOfflineTransport)(n));
			}
		}),
		