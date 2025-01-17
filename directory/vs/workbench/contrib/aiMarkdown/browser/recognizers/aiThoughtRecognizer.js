import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../markdownData.js';
define(de[2977], he([1, 0, 2, 236]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$S$b = void 0);
			const w = (0, t.template)(
				'<div class="markdown-ai-thought"><span>Thought: ',
			);
			e.$S$b = {
				elementType: i.MarkdownElementType.AI_THOUGHT,
				start: (E, C) => {
					if (E[E.length - 1].type !== i.MarkdownElementType.SECTION)
						return { state: "failed" };
					const r = /^⛢Thought☤/.exec(C);
					return r
						? {
								state: "success",
								length: r[0].length,
								elementType: i.MarkdownElementType.AI_THOUGHT,
								startOrEnd: "start",
							}
						: "\u26E2Thought\u2624".startsWith(C)
							? { state: "possible" }
							: { state: "failed" };
				},
				end: (E, C) => {
					if (E[E.length - 1].type === i.MarkdownElementType.BLOCK_CODE)
						return { state: "failed" };
					let m = !0;
					for (const a of E)
						a.type === i.MarkdownElementType.AI_THOUGHT && (m = !1);
					if (m) return { state: "failed" };
					const u = /^⛢\/Thought☤/.exec(C);
					return u
						? {
								state: "success",
								length: u[0].length,
								elementType: i.MarkdownElementType.AI_THOUGHT,
								startOrEnd: "end",
							}
						: "\u26E2/Thought\u2624".startsWith(C)
							? { state: "possible" }
							: { state: "failed" };
				},
				createElement: (E, C, d, m) => {
					for (
						;
						E.length > 1 &&
						E[E.length - 1].type !== i.MarkdownElementType.SECTION;
					)
						E.pop();
					const r = (() => {
							const h = w();
							return (
								h.style.setProperty("font-style", "italic"),
								h.style.setProperty("opacity", "0.5"),
								h
							);
						})(),
						u = { type: i.MarkdownElementType.AI_THOUGHT, ref: r };
					E[E.length - 1].ref.appendChild(r), E.push(u);
				},
			};
		}),
		