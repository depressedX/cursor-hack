define(de[1792], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$I6b = i);
			function t(w) {
				if ("codeBlock" in w) {
					const E = w.codeBlock;
					if (E === void 0) throw new Error("Code block is undefined");
					return `${E.relativeWorkspacePath}:${E.range?.startPosition?.line}:${E.range?.startPosition?.column}:${E.range?.endPosition?.line}:${E.range?.endPosition?.column}`;
				} else if ("file" in w) {
					const E = w.file;
					if (E === void 0) throw new Error("Code block is undefined");
					return E.relativeWorkspacePath;
				} else throw new Error("Unknown retrieval result type");
			}
			async function i(w, { minK: E, finalK: C }) {
				const d = await Promise.allSettled(w),
					m = [];
				for (const c of d)
					if (c.status === "fulfilled") {
						const n = c.value;
						n.sort((g, p) => p.score - g.score), m.push(n);
					}
				const r = [],
					u = [];
				for (const c of m) {
					const n = c.slice(0, E);
					r.push(...n), u.push(...c.slice(E));
				}
				u.sort((c, n) => n.score - c.score),
					r.push(...u.slice(0, Math.max(C - r.length, 0)));
				const a = {};
				for (const [c, n] of r.entries()) {
					let g;
					try {
						g = t(n);
					} catch {
						continue;
					}
					(a[g] === void 0 || n.score > a[g].score) &&
						(a[g] = { score: n.score, index: c });
				}
				const h = [];
				for (const [c, n] of Object.entries(a)) {
					const { index: g } = n;
					h.push(r[g]);
				}
				return h.sort((c, n) => n.score - c.score), h;
			}
		}),
		