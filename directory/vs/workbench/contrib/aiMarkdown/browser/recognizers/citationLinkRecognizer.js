import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../markdownData.js';
define(de[2985], he([1, 0, 2, 2, 236]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*markdownData*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Q$b = void 0);
			const E = (0, t.template)('<span class="markdown-citation-link">');
			e.$Q$b = {
				elementType: w.MarkdownElementType.CITATION_LINK,
				start: (C, d) => {
					if (C.length === 1) return { state: "failed" };
					const m = C[C.length - 1];
					if (
						m.type === w.MarkdownElementType.CITATION_LINK ||
						m.type === w.MarkdownElementType.LINK ||
						m.type === w.MarkdownElementType.INLINE_CODE ||
						m.type === w.MarkdownElementType.BLOCK_CODE ||
						m.type === w.MarkdownElementType.BLOCK_LATEX ||
						m.type === w.MarkdownElementType.AI_TOOL ||
						m.type === w.MarkdownElementType.AI_TOOL_RAW ||
						m.type === w.MarkdownElementType.AI_THOUGHT
					)
						return { state: "failed" };
					const u = /^\(\[([^\]]*)\]\(([^\)]*)\)\)/.exec(d);
					if (u)
						return {
							state: "success",
							length: u[0].length,
							elementType: w.MarkdownElementType.CITATION_LINK,
							startOrEnd: "start",
						};
					const h =
						/^(?:\(|$)(?:\[|$)((?:[^\]]|$)*|$)(?:\]|$)(?:\(|$)((?:[^\)]|$)*|$)(?:\)|$)(?:\)|$)/.exec(
							d,
						);
					return h && h[0] ? { state: "possible" } : { state: "failed" };
				},
				end: (C, d) => ({ state: "failed" }),
				createElement: (C, d, m, r, u, a, h) => {
					const n = /^\(\[([^\]]*)\]\(([^\)]*)\)\)/.exec(d),
						g = n[1],
						p = n[2];
					let o = a()[p];
					if (!o) {
						const s = { title: g, href: p, index: Object.keys(a()).length + 1 };
						h({ ...a(), [p]: s }), (o = s);
					}
					const f = (() => {
						const s = E();
						return (
							s.addEventListener("click", () => {
								o.href && r.openerService.open(o.href);
							}),
							s.style.setProperty("display", "inline"),
							s.style.setProperty("cursor", "pointer"),
							s.style.setProperty(
								"background",
								"var(--vscode-input-background)",
							),
							s.style.setProperty("border-radius", "0.4em"),
							s.style.setProperty("padding", "0.2em"),
							s.style.setProperty("margin", "0.1em 0.2em"),
							s.style.setProperty("vertical-align", "text-top"),
							s.style.setProperty("font-size", "0.7rem"),
							s.style.setProperty("color", "var(--vscode-textLink-foreground)"),
							s.style.setProperty(
								"border",
								"1px solid var(--vscode-input-border)",
							),
							(0, i.insert)(s, () => o.index),
							s
						);
					})();
					C[C.length - 1].ref.appendChild(f);
				},
			};
		})
