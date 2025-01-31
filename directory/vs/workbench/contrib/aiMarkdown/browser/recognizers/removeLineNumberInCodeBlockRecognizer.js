import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../markdownData.js';
define(de[2991], he([1, 0, 236]), function (ce /*require*/,
 e /*exports*/,
 t /*markdownData*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$V$b = void 0),
				(e.$V$b = {
					elementType: t.MarkdownElementType.BLOCK_CODE_LINE_NUMBER,
					start: (i, w) => {
						const E = i[i.length - 1];
						if (E.type !== t.MarkdownElementType.BLOCK_CODE)
							return { state: "failed" };
						let C = !0;
						E.codeTextModel &&
							E.codeTextModel.getValue().length === 0 &&
							(C = !1);
						const m = (C ? /^\n\d+\|/ : /^\d+\|/).exec(w);
						if (m)
							return {
								state: "success",
								length: m[0].length,
								elementType: t.MarkdownElementType.BLOCK_CODE_LINE_NUMBER,
								startOrEnd: "start",
							};
						const u = (C ? /^\n\d*/ : /^\d*/).exec(w);
						return u && u[0].length === w.length
							? { state: "possible" }
							: { state: "failed" };
					},
					end: (i, w) =>
						i[i.length - 1].type ===
						t.MarkdownElementType.BLOCK_CODE_LINE_NUMBER
							? {
									state: "success",
									length: 0,
									elementType: t.MarkdownElementType.BLOCK_CODE_LINE_NUMBER,
									startOrEnd: "end",
								}
							: { state: "failed" },
					createElement: (i, w, E, C) => {
						const d = i[i.length - 1];
						w[0] ===
							`
` &&
							(0, t.$90b)(
								d,
								`
`,
							);
					},
				});
		})
