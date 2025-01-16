define(de[3921], he([1, 0, 2, 337, 236]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$_0b = void 0);
			const E = (0, t.template)(
					'<div class="markdown-bash-response"><div>See output',
				),
				C = (0, t.template)('<div class="markdown-bash-response-output"> ');
			e.$_0b = {
				elementType: w.MarkdownElementType.BASH_RESPONSE,
				start: (d, m, r) => {
					const u = d[d.length - 1];
					if (
						u.type === w.MarkdownElementType.BASH_RESPONSE ||
						u.type === w.MarkdownElementType.BLOCK_CODE ||
						u.type === w.MarkdownElementType.BLOCK_LATEX ||
						u.type === w.MarkdownElementType.INLINE_CODE
					)
						return { state: "failed" };
					const h = new RegExp(`^\\s*${i.$igc}`).exec(m);
					if (h)
						return {
							state: "success",
							length: h[0].length,
							elementType: w.MarkdownElementType.BASH_RESPONSE,
							startOrEnd: "start",
						};
					for (let c = 1; c <= i.$igc.length; c++) {
						const g = new RegExp(`^\\s*${i.$igc.substring(0, c)}`).exec(m);
						if (g && g[0].length === m.length) return { state: "possible" };
					}
					return { state: "failed" };
				},
				end: (d, m) => {
					const u = new RegExp(`^\\s*${i.$jgc}`).exec(m);
					if (u)
						return {
							state: "success",
							length: u[0].length,
							elementType: w.MarkdownElementType.BASH_RESPONSE,
							startOrEnd: "end",
						};
					for (let a = 1; a <= i.$jgc.length; a++) {
						const c = new RegExp(`^\\s*${i.$jgc.substring(0, a)}`).exec(m);
						if (c && c[0].length === m.length) return { state: "possible" };
					}
					return { state: "failed" };
				},
				createElement: (d, m, r, u, a) => {
					const h = (() => {
							const p = E(),
								o = p.firstChild;
							return (
								p.style.setProperty("margin-top", "12px"),
								o.addEventListener("click", () => {
									const f = h.children,
										b = f[f.length - 1];
									b &&
										(b.style.display =
											b.style.display === "none" ? "block" : "none");
								}),
								o.style.setProperty(
									"color",
									"var(--vscode-textLink-foreground)",
								),
								o.style.setProperty("cursor", "pointer"),
								o.style.setProperty("user-select", "none"),
								p
							);
						})(),
						c = (() => {
							const p = C();
							return (
								p.style.setProperty("display", "none"),
								p.style.setProperty("padding", "12px"),
								p.style.setProperty(
									"background-color",
									"var(--vscode-editor-background)",
								),
								p.style.setProperty(
									"border",
									"1px solid var(--vscode-editorWidget-border)",
								),
								p
							);
						})();
					h.appendChild(c);
					const n = { type: w.MarkdownElementType.BASH_RESPONSE, ref: c };
					d[d.length - 1].ref.appendChild(h), d.push(n);
				},
			};
		}),
		