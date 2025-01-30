import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../markdownData.js';
import '../../../controlCommon/browser/solid.js';
define(de[4128], he([1, 0, 2, 236, 36]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*markdownData*/,
 w /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$X$b = void 0);
			const E = (0, t.template)('<div class="markdown-component">');
			e.$X$b = {
				elementType: i.MarkdownElementType.COMPONENT,
				start: (C, d, m, r) => {
					if (C[C.length - 1].type !== i.MarkdownElementType.SECTION)
						return { state: "failed" };
					const a = r.markdownProps.components?.map((f) => f.regex);
					if (a === void 0 || a.length === 0) return { state: "failed" };
					const c = /^\[\[\[([a-zA-Z0-9_]+)\]\]\]/.exec(d);
					if (c)
						return a.some((f) => f.test(c[1]))
							? {
									state: "success",
									length: c[0].length,
									elementType: i.MarkdownElementType.COMPONENT,
									startOrEnd: "start",
								}
							: { state: "failed" };
					const g = /^\[{1,3}/.exec(d);
					if (g && g[0].length === d.length) return { state: "possible" };
					const o = /^\[\[\[([a-zA-Z0-9_]+)\]{0,3}/.exec(d);
					return o && o[0].length === d.length
						? { state: "possible" }
						: { state: "failed" };
				},
				end: (C, d) =>
					C[C.length - 1].type === i.MarkdownElementType.COMPONENT
						? {
								state: "success",
								length: 0,
								elementType: i.MarkdownElementType.COMPONENT,
								startOrEnd: "end",
							}
						: { state: "failed" },
				createElement: (C, d, m, r, u) => {
					const a = d.slice(3, -3);
					if (u.components === void 0) return;
					const h = u.components.map((b) => b.regex);
					if (h === void 0 || h.length === 0) return;
					const c = h.findIndex((b) => b.test(a));
					if (c === -1) return;
					const n = u.components[c],
						g = (() => {
							const b = E();
							return b.style.setProperty("width", "100%"), b;
						})(),
						p = (0, w.$ndc)(() => n.render(a), g, r.instantiationService);
					m.push(p);
					const o = { type: i.MarkdownElementType.COMPONENT, ref: g };
					C[C.length - 1].ref.appendChild(g), C.push(o);
				},
			};
		}),
		