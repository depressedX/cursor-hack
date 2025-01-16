define(de[2979], he([1, 0, 2, 236]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$T$b = void 0);
			const w = (0, t.template)('<div class="markdown-ai-tool">');
			e.$T$b = {
				elementType: i.MarkdownElementType.AI_TOOL,
				start: (E, C) => {
					const d = E[E.length - 1];
					if (
						d.type === i.MarkdownElementType.AI_TOOL ||
						d.type === i.MarkdownElementType.BLOCK_CODE ||
						d.type === i.MarkdownElementType.BLOCK_LATEX ||
						d.type === i.MarkdownElementType.BASH_RESPONSE
					)
						return { state: "failed" };
					const r = /^⛢Action☤/.exec(C);
					return r
						? {
								state: "success",
								length: r[0].length,
								elementType: i.MarkdownElementType.AI_TOOL,
								startOrEnd: "start",
							}
						: "\u26E2Action\u2624".startsWith(C)
							? { state: "possible" }
							: { state: "failed" };
				},
				end: (E, C) => {
					if (E[E.length - 1].type === i.MarkdownElementType.BLOCK_CODE)
						return { state: "failed" };
					let m = !0;
					for (const a of E)
						a.type === i.MarkdownElementType.AI_TOOL && (m = !1);
					if (m) return { state: "failed" };
					const u = /^⛢\/Action☤/.exec(C);
					return u
						? {
								state: "success",
								length: u[0].length,
								elementType: i.MarkdownElementType.AI_TOOL,
								startOrEnd: "end",
							}
						: "\u26E2/Action\u2624".startsWith(C)
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
								h.style.setProperty("margin-bottom", "1em"),
								h.style.setProperty("display", "inline-block"),
								h.style.setProperty("opacity", "0.5"),
								h.style.setProperty("font-style", "italic"),
								h
							);
						})(),
						u = { type: i.MarkdownElementType.AI_TOOL, ref: r };
					E[E.length - 1].ref.appendChild(r),
						E[E.length - 1].ref.insertAdjacentHTML(
							"beforeend",
							i.$40b ? i.$40b.createHTML("<br />") : "<br />",
						),
						E.push(u);
				},
			};
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	