import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/katex/katex.js';
import '../markdownData.js';
define(de[2980], he([1, 0, 2, 2981, 236]), function (ce, e, t, i, w) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$3$b = void 0),
			(i = xi(i));
		const E = (0, t.template)('<div class="markdown-block-latex">');
		e.$3$b = {
			elementType: w.MarkdownElementType.BLOCK_LATEX,
			start: (C, d, m) => {
				const r = C[C.length - 1];
				if (
					r.type === w.MarkdownElementType.INLINE_CODE ||
					r.type === w.MarkdownElementType.BLOCK_CODE ||
					r.type === w.MarkdownElementType.BLOCK_LATEX ||
					r.type === w.MarkdownElementType.INLINE_LATEX ||
					r.type === w.MarkdownElementType.BASH_RESPONSE ||
					r.type === w.MarkdownElementType.ROOT
				)
					return { state: "failed" };
				const a = (m ? /^(\n|\n\n)?[\t ]*\\\[/ : /^(\n|\n\n)[\t ]*\\\[/).exec(
					d,
				);
				if (a)
					return {
						state: "success",
						length: a[0].length,
						elementType: w.MarkdownElementType.BLOCK_LATEX,
						startOrEnd: "start",
					};
				const c = (
					m
						? /^((?:\n|$)|(?:\n|$)(?:\n|$)|$)?(?:[\t ]|$)*(?:\\|$)(?:\[|$)/
						: /^((?:\n|$)|(?:\n|$)(?:\n|$)|$)(?:[\t ]|$)*(?:\\|$)(?:\[|$)/
				).exec(d);
				return c && c[0] && c[0].length === d.length
					? { state: "possible" }
					: { state: "failed" };
			},
			end: (C, d) => {
				if (C[C.length - 1].type !== w.MarkdownElementType.BLOCK_LATEX)
					return { state: "failed" };
				const u = /^\\\]/.exec(d);
				if (u)
					return {
						state: "success",
						length: u[0].length,
						elementType: w.MarkdownElementType.BLOCK_LATEX,
						startOrEnd: "end",
					};
				const h = /^\\/.exec(d);
				return h && h[0] && h[0].length === d.length
					? { state: "possible" }
					: { state: "failed" };
			},
			createElement: (C, d, m, r, u) => {
				const a = E();
				let h = "",
					c = "";
				const n = {
					type: w.MarkdownElementType.BLOCK_LATEX,
					ref: a,
					disallowAnyRecognitionInside: !0,
					appendText: (p) => {
						h += p;
						try {
							for (; a.firstChild; ) a.removeChild(a.firstChild);
							i.default.render(h, a, {
								maxSize: 100,
								maxExpand: 100,
								displayMode: !0,
							}),
								(c = h);
						} catch {
							try {
								i.default.render(c, a, {
									maxSize: 100,
									maxExpand: 100,
									displayMode: !0,
								});
							} catch (f) {
								console.error(f);
							}
						}
					},
					endElementHook: () => {
						if (c !== h)
							try {
								i.default.render(h, a, {
									maxSize: 100,
									maxExpand: 100,
									throwOnError: !1,
									displayMode: !0,
								});
							} catch (p) {
								console.error(p), (a.innerText = h);
							}
						return "";
					},
				};
				C[C.length - 1].ref.appendChild(a), C.push(n);
			},
		};
	}),
		