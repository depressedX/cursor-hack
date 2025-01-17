import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../markdownData.js';
define(de[2989], he([1, 0, 2, 2, 2, 236]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$R$b = void 0);
			const C = (0, t.template)('<span class="markdown-link">');
			e.$R$b = {
				elementType: E.MarkdownElementType.LINK,
				start: (d, m) => {
					if (d.length === 1) return { state: "failed" };
					const r = d[d.length - 1];
					if (
						r.type === E.MarkdownElementType.LINK ||
						r.type === E.MarkdownElementType.CITATION_LINK ||
						r.type === E.MarkdownElementType.INLINE_CODE ||
						r.type === E.MarkdownElementType.BLOCK_CODE ||
						r.type === E.MarkdownElementType.BLOCK_LATEX ||
						r.type === E.MarkdownElementType.AI_TOOL ||
						r.type === E.MarkdownElementType.AI_TOOL_RAW ||
						r.type === E.MarkdownElementType.AI_THOUGHT
					)
						return { state: "failed" };
					const a = /^\[((?:[^\[\]]|\[[^\[\]]*\])*)\]\(/.exec(m);
					if (a)
						return {
							state: "success",
							length: a[0].length - 2,
							elementType: E.MarkdownElementType.LINK,
							startOrEnd: "start",
						};
					const h = (m.match(/\[/g) || []).length,
						c = (m.match(/\]/g) || []).length;
					return m.startsWith("[") && (h > c || (h === c && m.endsWith("]")))
						? { state: "possible" }
						: { state: "failed" };
				},
				end: (d, m) => {
					if (d[d.length - 1].type !== E.MarkdownElementType.LINK)
						return { state: "failed" };
					const u = /^\]\(([^\)]*)\)/.exec(m);
					return u
						? (d[d.length - 1].ref.setAttribute("data-link", u[1]),
							u[1].startsWith("file://") &&
								((d[d.length - 1].ref.style.backgroundColor =
									"var(--vscode-textCodeBlock-background)"),
								(d[d.length - 1].ref.style.padding = "1px 4px"),
								(d[d.length - 1].ref.style.borderRadius = "4px"),
								(d[d.length - 1].ref.style.wordBreak = "break-word")),
							{
								state: "success",
								length: u[0].length,
								elementType: E.MarkdownElementType.LINK,
								startOrEnd: "end",
							})
						: m.startsWith("]")
							? { state: "possible" }
							: { state: "failed" };
				},
				createElement: (d, m, r, u, a) => {
					const h = (p) => {
							const o = p.target.getAttribute("data-link");
							o &&
								(u.openerService.open(o, {
									allowCommands:
										a.allowCommandLinks_POTENTIALLY_UNSAFE_PLEASE_ONLY_USE_FOR_HANDWRITTEN_TRUSTED_MARKDOWN ??
										!1,
								}),
								p.target.textContent?.toLowerCase() === "index now." &&
									(p.target.textContent = "Indexing..."));
						},
						c = (() => {
							const p = C();
							return (
								p.addEventListener("click", h),
								p.style.setProperty("display", "inline"),
								p.style.setProperty(
									"color",
									"var(--vscode-textLink-foreground)",
								),
								p.style.setProperty("cursor", "pointer"),
								(0, i.insert)(
									p,
									(() => {
										const o = (0, w.memo)(() => !!m.startsWith("["));
										return () => (o() ? m.slice(1) : m);
									})(),
								),
								p
							);
						})(),
						n = { type: E.MarkdownElementType.LINK, ref: c };
					d[d.length - 1].ref.appendChild(c), d.push(n);
				},
			};
		}),
		