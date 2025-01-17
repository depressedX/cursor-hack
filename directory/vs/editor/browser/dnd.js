import '../../../require.js';
import '../../../exports.js';
import '../../base/browser/dnd.js';
import '../../base/common/dataTransfer.js';
import '../../base/common/mime.js';
import '../../base/common/uri.js';
import '../../platform/dnd/browser/dnd.js';
define(
			de[1197],
			he([1, 0, 323, 489, 266, 9, 347]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pzb = d),
					(e.$qzb = u);
				function d(a) {
					const h = new i.$XL();
					for (const c of a.items) {
						const n = c.type;
						if (c.kind === "string") {
							const g = new Promise((p) => c.getAsString(p));
							h.append(n, (0, i.$VL)(g));
						} else if (c.kind === "file") {
							const g = c.getAsFile();
							g && h.append(n, m(g));
						}
					}
					return h;
				}
				function m(a) {
					const h = a.path ? E.URI.parse(a.path) : void 0;
					return (0, i.$WL)(
						a.name,
						h,
						async () => new Uint8Array(await a.arrayBuffer()),
					);
				}
				const r = Object.freeze([
					C.$hzb.EDITORS,
					C.$hzb.FILES,
					t.$Ohb.RESOURCES,
					t.$Ohb.INTERNAL_URI_LIST,
				]);
				function u(a, h = !1) {
					const c = d(a),
						n = c.get(t.$Ohb.INTERNAL_URI_LIST);
					if (n) c.replace(w.$EK.uriList, n);
					else if (h || !c.has(w.$EK.uriList)) {
						const g = [];
						for (const p of a.items) {
							const o = p.getAsFile();
							if (o) {
								const f = o.path;
								try {
									f
										? g.push(E.URI.file(f).toString())
										: g.push(E.URI.parse(o.name, !0).toString());
								} catch {}
							}
						}
						g.length && c.replace(w.$EK.uriList, (0, i.$VL)(i.$ZL.create(g)));
					}
					for (const g of r) c.delete(g);
					return c;
				}
			},
		),
		