import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../markdownData.js';
define(de[2992], he([1, 0, 236]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$P$b = void 0),
				(e.$P$b = {
					elementType: t.MarkdownElementType.CITATION_FOOTNOTE,
					start: (i, w) => {
						if (i[i.length - 1].type !== t.MarkdownElementType.SECTION)
							return { state: "failed" };
						const d = /^\[\^([^\]]*)\]:\s*\[([^\]]*)\]\(([^\)]*)\)\s*/.exec(w);
						return d
							? {
									state: "success",
									length: d[0].length,
									elementType: t.MarkdownElementType.CITATION_FOOTNOTE,
									startOrEnd: "start",
								}
							: /^\[\^[^\]]*\]:/.exec(w)
								? { state: "possible" }
								: { state: "failed" };
					},
					end: (i, w) => ({ state: "failed" }),
					createElement: (i, w, E, C, d, m, r) => {
						const a = /^\[\^([^\]]*)\]:\s*\[([^\]]*)\]\(([^\)]*)\)/.exec(w);
						if (a) {
							const h = a[1],
								c = a[2],
								n = a[3];
							let g = m()[h];
							g || (g = { index: Object.keys(m()).length + 1 }),
								(g.title = c),
								(g.href = n),
								r({ ...m(), [h]: g });
						}
					},
				});
		}),
		