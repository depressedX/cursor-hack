define(de[1181], he([1, 0, 199, 389]), function (ce, e, t, i) {
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
		define(
			de[2709],
			he([1, 0, 409, 69, 74, 3, 59]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oPb = void 0);
				class d {
					constructor() {
						this.selector = { language: "*" };
					}
					provideDocumentHighlights(u, a, h) {
						const c = [],
							n = u.getWordAtPosition({
								lineNumber: a.lineNumber,
								column: a.column,
							});
						return n
							? u.isDisposed()
								? void 0
								: u
										.findMatches(n.word, !0, !1, !0, t.$SK, !1)
										.map((p) => ({
											range: p.range,
											kind: w.DocumentHighlightKind.Text,
										}))
							: Promise.resolve(c);
					}
					provideMultiDocumentHighlights(u, a, h, c) {
						const n = new C.$Gc(),
							g = u.getWordAtPosition({
								lineNumber: a.lineNumber,
								column: a.column,
							});
						if (!g) return Promise.resolve(n);
						for (const p of [u, ...h]) {
							if (p.isDisposed()) continue;
							const f = p
								.findMatches(g.word, !0, !1, !0, t.$SK, !1)
								.map((b) => ({
									range: b.range,
									kind: w.DocumentHighlightKind.Text,
								}));
							f && n.set(p.uri, f);
						}
						return n;
					}
				}
				let m = class extends E.$1c {
					constructor(u) {
						super(),
							this.D(u.documentHighlightProvider.register("*", new d())),
							this.D(u.multiDocumentHighlightProvider.register("*", new d()));
					}
				};
				(e.$oPb = m), (e.$oPb = m = Ne([j(0, i.$k3)], m));
			},
		),
		