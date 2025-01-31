import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../markdownData.js';
define(de[2978], he([1, 0, 2, 236]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*markdownData*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$U$b = void 0);
			const w = (0, t.template)(
				'<span class="markdown-ai-tool-raw ai-tool-raw-output-show-debug-only">',
			);
			e.$U$b = {
				elementType: i.MarkdownElementType.AI_TOOL_RAW,
				start: (E, C) => {
					const d = E[E.length - 1];
					if (
						d.type === i.MarkdownElementType.AI_TOOL_RAW ||
						d.type === i.MarkdownElementType.BLOCK_CODE ||
						d.type === i.MarkdownElementType.BLOCK_LATEX ||
						d.type === i.MarkdownElementType.BASH_RESPONSE
					)
						return { state: "failed" };
					const r = /^⛢RawAction☤/.exec(C);
					return r
						? {
								state: "success",
								length: r[0].length,
								elementType: i.MarkdownElementType.AI_TOOL_RAW,
								startOrEnd: "start",
							}
						: "\u26E2RawAction\u2624".startsWith(C)
							? { state: "possible" }
							: { state: "failed" };
				},
				end: (E, C) => {
					if (E[E.length - 1].type === i.MarkdownElementType.BLOCK_CODE)
						return { state: "failed" };
					let m = !0;
					for (const a of E)
						a.type === i.MarkdownElementType.AI_TOOL_RAW && (m = !1);
					if (m) return { state: "failed" };
					const u = /^⛢\/RawAction☤/.exec(C);
					return u
						? {
								state: "success",
								length: u[0].length,
								elementType: i.MarkdownElementType.AI_TOOL_RAW,
								startOrEnd: "end",
							}
						: "\u26E2/RawAction\u2624".startsWith(C)
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
							return h.style.setProperty("opacity", "0.5"), h;
						})(),
						u = { type: i.MarkdownElementType.AI_TOOL_RAW, ref: r };
					E[E.length - 1].ref.appendChild(r), E.push(u);
				},
			};
		})
