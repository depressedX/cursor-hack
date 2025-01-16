define(
			de[818],
			he([1, 0, 2, 2, 2, 2, 13, 7, 182, 317, 95]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tbc = h),
					(d = mt(d));
				const a = (0, t.template)('<span class="monaco-highlighted-label">');
				function h(c) {
					let n, g;
					const p = (f, b = []) => {
							let s = 0,
								l = 0;
							return f.replace(/\r\n|\r|\n/g, (y, $) => {
								(l =
									y ===
									`\r
`
										? -1
										: 0),
									($ += s);
								for (const v of b)
									v.end <= $ ||
										(v.start >= $ && (v.start += l),
										v.end >= $ && (v.end += l));
								return (s += l), "\u23CE";
							});
						},
						o = () => {
							if (!n) return;
							const f = c.escapeNewLines ? p(c.text, c.highlights) : c.text,
								b = c.highlights || [],
								s = [];
							let l = 0;
							for (const y of b) {
								if (y.end === y.start) continue;
								if (l < y.start) {
									const S = f.substring(l, y.start);
									c.supportIcons ? s.push(...(0, m.$Sib)(S)) : s.push(S),
										(l = y.start);
								}
								const $ = f.substring(l, y.end),
									v = d.$(
										"span.highlight",
										void 0,
										...(c.supportIcons ? (0, m.$Sib)($) : [$]),
									);
								s.push(v), (l = y.end);
							}
							if (l < f.length) {
								const y = f.substring(l);
								c.supportIcons ? s.push(...(0, m.$Sib)(y)) : s.push(y);
							}
							d.$hhb(n, ...s);
						};
					return (
						(0, C.createEffect)(() => {
							if ((o(), c.hoverDelegate?.showNativeHover))
								n && (n.title = c.title || "");
							else if (c.title) {
								const f = c.hoverDelegate || (0, u.$cib)("mouse");
								g?.dispose(),
									(g = (0, r.$1ib)().setupManagedHover(f, n, c.title));
							}
						}),
						(0, C.onCleanup)(() => {
							g?.dispose();
						}),
						(() => {
							const f = a(),
								b = n;
							return (
								typeof b == "function" ? (0, E.use)(b, f) : (n = f),
								(0, w.effect)((s) => (0, i.style)(f, { ...c.style }, s)),
								f
							);
						})()
					);
				}
			},
		),
		