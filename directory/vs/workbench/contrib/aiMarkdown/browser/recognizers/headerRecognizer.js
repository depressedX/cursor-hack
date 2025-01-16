define(de[2986], he([1, 0, 236]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$W$b = void 0),
				(e.$W$b = {
					elementType: t.MarkdownElementType.HEADER,
					start: (i, w, E) => {
						if (i[i.length - 1].type !== t.MarkdownElementType.SECTION)
							return { state: "failed" };
						const m = (E ? /^\n?#{1,6} / : /^\n#{1,6} /).exec(w);
						if (m)
							return {
								state: "success",
								length: m[0].length,
								elementType: t.MarkdownElementType.HEADER,
								startOrEnd: "start",
							};
						const u = (E ? /^\n?#{0,6}/ : /^\n#{0,6}/).exec(w);
						return u && u[0].length === w.length
							? { state: "possible" }
							: { state: "failed" };
					},
					end: (i, w) =>
						i[i.length - 1].type !== t.MarkdownElementType.HEADER
							? { state: "failed" }
							: /^\n/.exec(w)
								? {
										state: "success",
										length: 0,
										elementType: t.MarkdownElementType.HEADER,
										startOrEnd: "end",
									}
								: { state: "failed" },
					createElement: (i, w, E, C, d) => {
						for (
							;
							i.length > 1 &&
							i[i.length - 1].type !== t.MarkdownElementType.SECTION;
						)
							i.pop();
						const m = t.$50b[Math.min(w.trim().length, 6)](),
							r = { type: t.MarkdownElementType.HEADER, ref: m };
						i[i.length - 1].ref.appendChild(m), i.push(r);
					},
				});
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	