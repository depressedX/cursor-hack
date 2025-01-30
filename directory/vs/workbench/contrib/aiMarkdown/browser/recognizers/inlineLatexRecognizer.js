import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/katex/katex.js';
import '../markdownData.js';
define(de[2987], he([1, 0, 2, 2981, 236]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*katex*/,
 w /*markdownData*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$2$b = void 0),
			(i = xi(i));
		const E = (0, t.template)('<span class="markdown-inline-latex">');
		e.$2$b = {
			elementType: w.MarkdownElementType.INLINE_LATEX,
			start: (C, d) => {
				if (C.length === 1) return { state: "failed" };
				const m = C[C.length - 1];
				if (
					m.type === w.MarkdownElementType.BOLD_TEXT ||
					m.type === w.MarkdownElementType.BLOCK_CODE ||
					m.type === w.MarkdownElementType.BLOCK_LATEX ||
					m.type === w.MarkdownElementType.LINK ||
					m.type === w.MarkdownElementType.BASH_RESPONSE ||
					m.type === w.MarkdownElementType.INLINE_CODE ||
					m.type === w.MarkdownElementType.INLINE_LATEX
				)
					return { state: "failed" };
				const u = /^\\\(/.exec(d);
				if (u)
					return {
						state: "success",
						length: u[0].length,
						elementType: w.MarkdownElementType.INLINE_LATEX,
						startOrEnd: "start",
					};
				const h = /^\\/u.exec(d);
				return h && h[0].length === d.length
					? { state: "possible" }
					: { state: "failed" };
			},
			end: (C, d) => {
				if (C[C.length - 1].type !== w.MarkdownElementType.INLINE_LATEX)
					return { state: "failed" };
				const u = /^\\\)/.exec(d);
				if (u)
					return {
						state: "success",
						length: u[0].length,
						elementType: w.MarkdownElementType.INLINE_LATEX,
						startOrEnd: "end",
					};
				const h = /^\\/u.exec(d);
				return h && h[0].length === d.length
					? { state: "possible" }
					: { state: "failed" };
			},
			createElement: (C, d, m, r) => {
				const u = E();
				let a = "",
					h = "";
				const c = {
					type: w.MarkdownElementType.INLINE_LATEX,
					ref: u,
					disallowAnyRecognitionInside: !0,
					appendText: (g) => {
						a += g;
						try {
							for (; u.firstChild; ) u.removeChild(u.firstChild);
							i.default.render(a, u, { maxSize: 100, maxExpand: 100 }), (h = a);
						} catch {
							try {
								i.default.render(h, u, { maxSize: 100, maxExpand: 100 });
							} catch (o) {
								console.error(o);
							}
						}
					},
					endElementHook: () => {
						if (h !== a)
							try {
								i.default.render(a, u, {
									maxSize: 100,
									maxExpand: 100,
									throwOnError: !1,
								});
							} catch (g) {
								console.error(g), (u.innerText = a);
							}
						return "";
					},
				};
				C[C.length - 1].ref.appendChild(u), C.push(c);
			},
		};
	}),
		