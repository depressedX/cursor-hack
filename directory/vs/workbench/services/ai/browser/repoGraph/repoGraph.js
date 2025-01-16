define(de[3229], he([1, 0, 643]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$V9b = i),
				(e.$W9b = a),
				(e.$X9b = h);
			function i(c, n, g, p) {
				return new t.$Xt({
					workspaceRelativePath: n,
					startLineNumber: c.region.startLineNumber,
					endLineNumber: c.region.endLineNumber,
					children: c.children.map((o) => i(o, n, g, p)),
					nodeSnippets: h(c, g, n, p),
				});
			}
			function w(c, n) {
				const g = [];
				if (n) {
					let p = n.findRange(c),
						o = 1;
					for (; p >= 0; ) {
						const f = n.toRegion(p);
						g.push(f), o++, (p = f.parentIndex);
					}
				}
				return g;
			}
			function E(c, n, g) {
				const p = n.length,
					o = p.toString().length;
				let f = `File: ${c}
Total lines: ${p}
\`\`\`
`,
					b = 1,
					s = "";
				const l = ($) => {
						if (f.endsWith("|")) {
							const v = $.match(/^\s*/)?.[0] || "",
								S = v.length > s.length ? v : s;
							(f +=
								S +
								`...
`),
								(s = "");
						}
						(f += (b++).toString().padStart(o, " ")),
							(f += "|"),
							(f +=
								$ +
								`
`),
							(s = $.match(/^\s*/)?.[0] || "");
					},
					y = ($) => {
						$ > b && ((f += " ".repeat(o) + "|"), (b = $));
					};
				for (const $ of g || []) {
					y($.lines[0]);
					for (const v of $.content) l(v);
				}
				return y(p), (f += "```\n"), f;
			}
			function C(c, n, g) {
				return new t.$5t({
					relativeWorkspacePath: n,
					totalLines: g.length,
					snippets: c.map(
						(p) =>
							new t.$6t({
								startLineNumber: p.lines[0],
								endLineNumber: p.lines[1],
								lines: p.content,
							}),
					),
				});
			}
			function d(c) {
				const n = [];
				let g = null;
				c = c.sort((p, o) => p[0] - o[0]);
				for (const p of c)
					g
						? g[1] + 1 >= p[0]
							? (g[1] = Math.max(g[1], p[1]))
							: (n.push(g), (g = p))
						: (g = p);
				return g && n.push(g), n;
			}
			function m(...c) {
				return d(c.flat());
			}
			function r(c, n) {
				const g = d(c),
					p = d(n),
					o = [];
				for (const y of g) o.push([y[0], 1]), o.push([y[1] + 1, -1]);
				for (const y of p) o.push([y[0], -1]), o.push([y[1] + 1, 1]);
				o.sort((y, $) => y[0] - $[0]);
				const f = [];
				let b = [-1, -1];
				const s = (y, $) => {
					$ === 1
						? b[0] === -1 && (b[0] = y)
						: (b[0] !== -1 && ((b[1] = y - 1), f.push(b)), (b = [-1, -1]));
				};
				let l = 0;
				for (let y = 0; y < o.length; ) {
					const [$, v] = o[y];
					for (; y < o.length && o[y][0] === $; y++) l += o[y][1];
					s($, l);
				}
				return f;
			}
			function u(c, n, g) {
				const p = c.map(([o, f]) => ({
					lines: [o, f],
					content: g?.slice(o - 1, f) || [],
				}));
				return C(p, n, g);
			}
			function a(c, n, g, p) {
				const o = w(c, n);
				if (o.length == 0) return C([], g, p);
				const f = o[0],
					b = [[f.startLineNumber, f.endLineNumber + 1]],
					s = o.slice(1).map(($) => [$.startLineNumber, $.startLineNumber]),
					l = o.slice(1).map(($) => [$.endLineNumber + 1, $.endLineNumber + 1]),
					y = m(b, s, l);
				return u(y, g, p);
			}
			function h(c, n, g, p) {
				const o = [],
					f = [],
					b = [[c.region.startLineNumber, c.region.endLineNumber]];
				let s = c.foldingRegionIdx;
				for (; s !== -1; ) {
					const $ = n.toRegion(s);
					o.push([$.startLineNumber, $.startLineNumber]),
						f.push([$.endLineNumber + 1, $.endLineNumber + 1]),
						(s = $.parentIndex);
				}
				let l = m(o, f, b);
				const y = c.children.map(($) => [
					$.region.startLineNumber + ($.isFoldRegion ? 1 : 0),
					$.region.endLineNumber,
				]);
				return (l = r(l, y)), u(l, g, p);
			}
		}),
		