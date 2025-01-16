define(de[2988], he([1, 0, 2, 236]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$N$b = void 0);
			const w = (0, t.template)('<span class="markdown-italics-text">');
			e.$N$b = {
				elementType: i.MarkdownElementType.ITALICS_TEXT,
				start: (E, C, d, m) => {
					if (E.length === 1) return { state: "failed" };
					const r = E[E.length - 1];
					if (
						r.type === i.MarkdownElementType.ITALICS_TEXT ||
						r.type === i.MarkdownElementType.BLOCK_CODE ||
						r.type === i.MarkdownElementType.BLOCK_LATEX ||
						r.type === i.MarkdownElementType.BASH_RESPONSE ||
						r.type === i.MarkdownElementType.INLINE_LATEX ||
						r.type === i.MarkdownElementType.LINK ||
						r.type === i.MarkdownElementType.INLINE_CODE
					)
						return { state: "failed" };
					const a = /^(\*|([^\p{L}\d`]_))/u.exec(C),
						h = m.markdownProps.rawText.at(m.usedLength - 1),
						c = m.markdownProps.rawText.at(m.usedLength - 2);
					if (a && !(h === "\\" && c !== "\\"))
						return {
							state: "success",
							length: a[0].length,
							elementType: i.MarkdownElementType.ITALICS_TEXT,
							startOrEnd: "start",
						};
					const g = /^[^\p{L}\d`]/u.exec(C);
					return g && g[0].length === C.length
						? { state: "possible" }
						: { state: "failed" };
				},
				end: (E, C, d) => {
					if (E[E.length - 1].type !== i.MarkdownElementType.ITALICS_TEXT)
						return { state: "failed" };
					const u = /^(\*|(_[^\p{L}\d`]))/u.exec(C),
						a = d.markdownProps.rawText.at(d.usedLength - 1),
						h = d.markdownProps.rawText.at(d.usedLength - 2);
					if (u && !(a === "\\" && h !== "\\"))
						return {
							state: "success",
							length: 1,
							elementType: i.MarkdownElementType.ITALICS_TEXT,
							startOrEnd: "end",
						};
					const n = /^_/u.exec(C);
					return n && n[0].length === C.length
						? { state: "possible" }
						: { state: "failed" };
				},
				createElement: (E, C, d, m) => {
					for (const h of C) {
						if (h === "_" || h === "*") break;
						(0, i.$90b)(E[E.length - 1], h);
					}
					const r = (() => {
							const h = w();
							return h.style.setProperty("font-style", "italic"), h;
						})(),
						u = { type: i.MarkdownElementType.ITALICS_TEXT, ref: r };
					E[E.length - 1].ref.appendChild(r), E.push(u);
				},
			};
		}),
		