define(de[2990], he([1, 0, 236]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$$0b = void 0),
				(e.$$0b = {
					elementType: t.MarkdownElementType.ORDERED_LIST,
					start: (i, w, E) => {
						if (i[i.length - 1].type !== t.MarkdownElementType.SECTION)
							return { state: "failed" };
						const m = (E ? /^\n?[\t ]*\d+\. / : /^\n[\t ]*\d+\. /).exec(w);
						if (m)
							return {
								state: "success",
								length: m[0].length,
								elementType: t.MarkdownElementType.ORDERED_LIST,
								startOrEnd: "start",
							};
						const u = (E ? /^\n?[\t ]*\d+\./ : /^\n[\t ]*\d+\./).exec(w);
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
						return i.at(E)?.type !== t.MarkdownElementType.ORDERED_LIST
							? { state: "failed" }
							: /^\n/.exec(w)
								? {
										state: "success",
										length: 0,
										elementType: t.MarkdownElementType.ORDERED_LIST,
										startOrEnd: "end",
									}
								: { state: "failed" };
					},
					createElement: (i, w, E, C) => {
						const d = document.createElement("li");
						d.style.listStyleType = "decimal";
						const m = { type: t.MarkdownElementType.ORDERED_LIST, ref: d };
						i[i.length - 1].ref.appendChild(d), i.push(m);
						const u = w.match(/\d+\.\s*/),
							a = u ? parseInt(u[0]) : 1;
						d.setAttribute("value", a.toString());
						const h = w.search(/\d+\.\s*/),
							c = w.substring(0, h).split(" ").length - 1;
						(d.style.paddingLeft = `${c * t.$60b}px`),
							(d.style.paddingTop = "2px"),
							(d.style.paddingBottom = "2px");
					},
				});
		}),
		