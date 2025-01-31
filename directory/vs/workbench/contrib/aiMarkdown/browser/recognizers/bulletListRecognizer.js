import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../markdownData.js';
define(de[2983], he([1, 0, 236]), function (ce /*require*/,
 e /*exports*/,
 t /*markdownData*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$00b = void 0),
				(e.$00b = {
					elementType: t.MarkdownElementType.BULLET_LIST,
					start: (i, w, E) => {
						if (i[i.length - 1].type !== t.MarkdownElementType.SECTION)
							return { state: "failed" };
						const m = (E ? /^\n?[\t ]*[-*+] / : /^\n[\t ]*[-*+] /).exec(w);
						if (m)
							return {
								state: "success",
								length: m[0].length,
								elementType: t.MarkdownElementType.BULLET_LIST,
								startOrEnd: "start",
							};
						const u = (E ? /^\n?[\t ]*[-*+]/ : /^\n[\t ]*[-*+]/).exec(w);
						return u && u[0].length === w.length
							? { state: "possible" }
							: { state: "failed" };
					},
					end: (i, w) => {
						let E = i.length - 1;
						for (
							;
							i.at(E)?.type === t.MarkdownElementType.ITALICS_TEXT ||
							i.at(E)?.type === t.MarkdownElementType.BOLD_TEXT;
						)
							E--;
						return i.at(E)?.type !== t.MarkdownElementType.BULLET_LIST
							? { state: "failed" }
							: /^\n/.exec(w)
								? {
										state: "success",
										length: 0,
										elementType: t.MarkdownElementType.BULLET_LIST,
										startOrEnd: "end",
									}
								: { state: "failed" };
					},
					createElement: (i, w, E, C) => {
						const d = document.createElement("li"),
							m = { type: t.MarkdownElementType.BULLET_LIST, ref: d };
						i[i.length - 1].ref.appendChild(d), i.push(m);
						const u = w.search(/[-+*]/),
							a = w.substring(0, u).split(" ").length - 1;
						(d.style.paddingLeft = `${a * t.$60b}px`),
							(d.style.paddingTop = "2px"),
							(d.style.paddingBottom = "2px");
					},
				});
		})
