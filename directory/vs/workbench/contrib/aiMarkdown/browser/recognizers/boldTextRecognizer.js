import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../markdownData.js';
define(de[2982], he([1, 0, 2, 236]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*markdownData*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$M$b = void 0);
			const w = (0, t.template)('<span class="markdown-bold-text">');
			e.$M$b = {
				elementType: i.MarkdownElementType.BOLD_TEXT,
				start: (E, C) => {
					if (E.length === 1) return { state: "failed" };
					const d = E[E.length - 1];
					if (
						d.type === i.MarkdownElementType.BOLD_TEXT ||
						d.type === i.MarkdownElementType.BLOCK_CODE ||
						d.type === i.MarkdownElementType.BLOCK_LATEX ||
						d.type === i.MarkdownElementType.LINK ||
						d.type === i.MarkdownElementType.BASH_RESPONSE ||
						d.type === i.MarkdownElementType.INLINE_LATEX ||
						d.type === i.MarkdownElementType.INLINE_CODE
					)
						return { state: "failed" };
					const r = /^((\*\*)|([^\p{L}`]__))/u.exec(C);
					if (r)
						return {
							state: "success",
							length: r[0].length,
							elementType: i.MarkdownElementType.BOLD_TEXT,
							startOrEnd: "start",
						};
					const a = /^[^\p{L}`](_?)/u.exec(C);
					return a && a[0].length === C.length
						? { state: "possible" }
						: { state: "failed" };
				},
				end: (E, C) => {
					if (E[E.length - 1].type !== i.MarkdownElementType.BOLD_TEXT)
						return { state: "failed" };
					if (/^((\*\*)|(__[^\p{L}`]))/u.exec(C))
						return {
							state: "success",
							length: 2,
							elementType: i.MarkdownElementType.BOLD_TEXT,
							startOrEnd: "end",
						};
					const a = /^(__?)|(\*)/u.exec(C);
					return a && a[0].length === C.length
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
							return h.style.setProperty("font-weight", "600"), h;
						})(),
						u = { type: i.MarkdownElementType.BOLD_TEXT, ref: r };
					E[E.length - 1].ref.appendChild(r), E.push(u);
				},
			};
		}),
		