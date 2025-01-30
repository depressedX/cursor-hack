import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../browser/services/bulkEditService.js';
import '../../snippet/browser/snippetParser.js';
define(de[1181], he([1, 0, 199, 389]), function (ce /*require*/,
 e /*exports*/,
 t /*bulkEditService*/,
 i /*snippetParser*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Jzb = w),
				(e.$Kzb = E);
			function w(C, d, m) {
				return (
					typeof m.insertText == "string"
						? m.insertText === ""
						: m.insertText.snippet === ""
				)
					? { edits: m.additionalEdit?.edits ?? [] }
					: {
							edits: [
								...d.map(
									(r) =>
										new t.$tzb(C, {
											range: r,
											text:
												typeof m.insertText == "string"
													? i.$Izb.escape(m.insertText) + "$0"
													: m.insertText.snippet,
											insertAsSnippet: !0,
										}),
								),
								...(m.additionalEdit?.edits ?? []),
							],
						};
			}
			function E(C) {
				function d(h, c) {
					return "mimeType" in h
						? h.mimeType === c.handledMimeType
						: !!c.kind && h.kind.contains(c.kind);
				}
				const m = new Map();
				for (const h of C)
					for (const c of h.yieldTo ?? [])
						for (const n of C)
							if (n !== h && d(c, n)) {
								let g = m.get(h);
								g || ((g = []), m.set(h, g)), g.push(n);
							}
				if (!m.size) return Array.from(C);
				const r = new Set(),
					u = [];
				function a(h) {
					if (!h.length) return [];
					const c = h[0];
					if (u.includes(c))
						return console.warn("Yield to cycle detected", c), h;
					if (r.has(c)) return a(h.slice(1));
					let n = [];
					const g = m.get(c);
					return (
						g && (u.push(c), (n = a(g)), u.pop()),
						r.add(c),
						[...n, c, ...a(h.slice(1))]
					);
				}
				return a(Array.from(C));
			}
		}),
		