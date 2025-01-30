import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
define(de[1438], he([1, 0, 80]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getMetadataForUrl = C),
				(e.addMetadataToStackFrames = d),
				(e.stripMetadataFromStackFrames = m);
			const i = new Map(),
				w = new Set();
			function E(r) {
				if (t.GLOBAL_OBJ._sentryModuleMetadata)
					for (const u of Object.keys(t.GLOBAL_OBJ._sentryModuleMetadata)) {
						const a = t.GLOBAL_OBJ._sentryModuleMetadata[u];
						if (w.has(u)) continue;
						w.add(u);
						const h = r(u);
						for (const c of h.reverse())
							if (c.filename) {
								i.set(c.filename, a);
								break;
							}
					}
			}
			function C(r, u) {
				return E(r), i.get(u);
			}
			function d(r, u) {
				try {
					u.exception.values.forEach((a) => {
						if (a.stacktrace)
							for (const h of a.stacktrace.frames || []) {
								if (!h.filename || h.module_metadata) continue;
								const c = C(r, h.filename);
								c && (h.module_metadata = c);
							}
					});
				} catch {}
			}
			function m(r) {
				try {
					r.exception.values.forEach((u) => {
						if (u.stacktrace)
							for (const a of u.stacktrace.frames || [])
								delete a.module_metadata;
					});
				} catch {}
			}
		}),
		