define(
			de[236],
			he([1, 0, 2, 920, 432, 14, 79, 1519, 1520]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$80b =
						e.$60b =
						e.$50b =
						e.MarkdownElementType =
						e.$40b =
						e.$30b =
						e.$20b =
						e.$10b =
						e.$Z0b =
						e.$Y0b =
							void 0),
					(e.$70b = g),
					(e.$90b = p),
					(i = mt(i));
				const d = (0, t.template)("<h1>"),
					m = (0, t.template)("<h2>"),
					r = (0, t.template)("<h3>"),
					u = (0, t.template)("<h4>"),
					a = (0, t.template)("<h5>"),
					h = (0, t.template)("<h6>");
				(e.$Y0b = (0, C.$$O)(
					"copy-aibubble-code",
					E.$ak.copy,
					"Icon for a copying code from the chat.",
				)),
					(e.$Z0b = (0, C.$$O)(
						"run-aibubble-code",
						E.$ak.play,
						"Icon for running code in the terminal.",
					)),
					(e.$10b = "\u26E2Thought\u2624"),
					(e.$20b = "\u26E2/Thought\u2624");
				const c = (o) => `markdown-code-block-editor-${o}`;
				(e.$30b = c),
					(e.$40b = (0, w.$bjb)("streamingMarkdownPolicy", {
						createHTML: (o) => {
							const b = o
								.replace(/</g, "&lt;")
								.replace(/>/g, "&gt;")
								.replace(/&lt;br \/&gt;/g, "<br />");
							return i.sanitize(b);
						},
					}));
				var n;
				(function (o) {
					(o[(o.ROOT = 0)] = "ROOT"),
						(o[(o.SECTION = 1)] = "SECTION"),
						(o[(o.INLINE_CODE = 2)] = "INLINE_CODE"),
						(o[(o.BLOCK_CODE = 3)] = "BLOCK_CODE"),
						(o[(o.BASH_RESPONSE = 4)] = "BASH_RESPONSE"),
						(o[(o.BOLD_TEXT = 5)] = "BOLD_TEXT"),
						(o[(o.ITALICS_TEXT = 6)] = "ITALICS_TEXT"),
						(o[(o.AI_THOUGHT = 7)] = "AI_THOUGHT"),
						(o[(o.AI_TOOL = 8)] = "AI_TOOL"),
						(o[(o.AI_TOOL_RAW = 9)] = "AI_TOOL_RAW"),
						(o[(o.BLOCK_CODE_LINE_NUMBER = 10)] = "BLOCK_CODE_LINE_NUMBER"),
						(o[(o.HEADER = 11)] = "HEADER"),
						(o[(o.LINK = 12)] = "LINK"),
						(o[(o.CITATION_LINK = 13)] = "CITATION_LINK"),
						(o[(o.CITATION_FOOTNOTE = 14)] = "CITATION_FOOTNOTE"),
						(o[(o.COMPONENT = 15)] = "COMPONENT"),
						(o[(o.BULLET_LIST = 16)] = "BULLET_LIST"),
						(o[(o.ORDERED_LIST = 17)] = "ORDERED_LIST"),
						(o[(o.INLINE_LATEX = 18)] = "INLINE_LATEX"),
						(o[(o.BLOCK_LATEX = 19)] = "BLOCK_LATEX"),
						(o[(o.DELETE_FILE = 20)] = "DELETE_FILE"),
						(o[(o.ADD_FILE = 21)] = "ADD_FILE");
				})(n || (e.MarkdownElementType = n = {})),
					(e.$50b = {
						1: () =>
							(() => {
								const o = d();
								return (
									o.style.setProperty("line-height", "1em"),
									o.style.setProperty("margin-bottom", "0px"),
									o
								);
							})(),
						2: () =>
							(() => {
								const o = m();
								return o.style.setProperty("margin-bottom", "0px"), o;
							})(),
						3: () =>
							(() => {
								const o = r();
								return o.style.setProperty("margin-bottom", "0px"), o;
							})(),
						4: () =>
							(() => {
								const o = u();
								return o.style.setProperty("margin-bottom", "0px"), o;
							})(),
						5: () =>
							(() => {
								const o = a();
								return o.style.setProperty("margin-bottom", "0px"), o;
							})(),
						6: () =>
							(() => {
								const o = h();
								return o.style.setProperty("margin-bottom", "0px"), o;
							})(),
					}),
					(e.$60b = 8);
				function g(o, f) {
					return `markdown-section-${f}-${o}`;
				}
				e.$80b = {
					H1: { top: "16px", bottom: "0px" },
					H2: { top: "16px", bottom: "0px" },
					H3: { top: "15px", bottom: "0px" },
					H4: { top: "17px", bottom: "0px" },
					H5: { top: "18px", bottom: "0px" },
					H6: { top: "20px", bottom: "0px" },
				};
				function p(o, f) {
					if (o.appendText !== void 0) o.appendText(f);
					else if (o.type === n.BLOCK_CODE) {
						const b = o.codeTextModel;
						b.applyEdits([
							{
								range: {
									startLineNumber: b.getLineCount(),
									startColumn: b.getLineMaxColumn(b.getLineCount()),
									endLineNumber: b.getLineCount(),
									endColumn: b.getLineMaxColumn(b.getLineCount()),
								},
								text: f,
								forceMoveMarkers: !0,
							},
						]);
					} else {
						const b = f.split(`
`),
							s = document.createDocumentFragment();
						b.forEach((l, y) => {
							const $ = document.createElement("span");
							($.textContent = l),
								s.appendChild($),
								y < b.length - 1 && s.appendChild(document.createElement("br"));
						}),
							o.ref.appendChild(s);
					}
				}
			},
		),
		