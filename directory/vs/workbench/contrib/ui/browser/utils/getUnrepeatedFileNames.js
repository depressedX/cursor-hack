define(de[1273], he([1, 0, 54]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$j$b = i);
			function i(C, d, m = {}) {
				const { renderFolder: r = (c) => c } = m,
					u = C.map((c) => d(c).fsPath),
					a = new Map(),
					h = m.rootFolder ? (0, t.$mc)(m.rootFolder.trim()) : void 0;
				return (
					u.forEach((c) => {
						const n = (0, t.$mc)(c),
							g = (0, t.$sc)(n);
						a.has(g) || a.set(g, []), a.get(g).push(n);
					}),
					u.map((c) => {
						const n = (0, t.$sc)(c),
							g = a.get(n);
						if (g.length === 1) return { fileName: n };
						if (new Set(g).size === 1) return { fileName: n };
						let p;
						if (h) {
							const o = g.map((s) => (0, t.$qc)(h, s)),
								f = w(o),
								b = (0, t.$qc)(f, (0, t.$qc)(h, (0, t.$rc)(c)));
							p = b ? r(b) : void 0;
						} else {
							const o = w(g),
								f = (0, t.$qc)(o, (0, t.$rc)(c));
							p = f ? r(f) : void 0;
						}
						return { fileName: n, folderPath: p || void 0 };
					})
				);
			}
			function w(C) {
				if (C.length === 0) return "";
				if (C.length === 1) return (0, t.$rc)(C[0]);
				let d = C[0].split(t.sep);
				for (let m = 1; m < C.length; m++) {
					const r = C[m].split(t.sep);
					let u = 0;
					for (; u < d.length && u < r.length && d[u] === r[u]; ) u++;
					d = d.slice(0, u);
				}
				return d.join(t.sep);
			}
			function E(C, d) {
				const m = (0, t.$qc)(C, d);
				return m !== "" && !m.startsWith("..") && !m.startsWith(t.sep);
			}
		}),
		define(
			de[312],
			he([
				1, 0, 46, 65, 8, 5, 31, 394, 375, 35, 40, 91, 152, 69, 308, 609, 206,
				956,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$X0b = e.$W0b = e.$V0b = void 0),
					(e.$V0b = new w.$5j("commentEditorFocused", !1)),
					(e.$W0b = 10);
				let f = class extends p.$rwb {
					constructor(s, l, y, $, v, S, I, T, P, k, L, D, M) {
						const N = {
							isSimpleWidget: y.overwriteIsSimpleWidget ?? !0,
							isChatCodeblock: !0,
							isHallucinatedFunctionPreviewBox:
								y.isHallucinatedFunctionPreviewBox,
							cursorCodeBlockType: y.isHallucinatedFunctionPreviewBox
								? "hallucinatedFunctionPreviewBox"
								: "chatCodeblock",
							contributions:
								t.EditorExtensionsRegistry.getSomeEditorContributions([
									d.$_Xb.ID,
									m.$2Mb.ID,
									g.$zAb.ID,
									...(y.enableSemanticSyntaxHighlighting ? [o.$iPb.ID] : []),
									...(y.customContributions ?? []),
								]),
						};
						super(s, l, N, $, v, S, I, T, P, k, L, D, M);
					}
					$() {
						return t.EditorExtensionsRegistry.getEditorActions();
					}
					static getEditorOptions(s) {
						return {
							readOnly: !0,
							wordWrap: "off",
							wordWrapOverride1: "off",
							wordWrapOverride2: "off",
							glyphMargin: !1,
							lineDecorationsWidth: 0,
							lineNumbersMinChars: 0,
							lineNumbers: "off",
							folding: !1,
							fontFamily: s.getValue("editor.fontFamily"),
							fontLigatures: s.getValue("editor.fontLigatures"),
							fontSize: s.getValue("editor.fontSize"),
							lineHeight: s.getValue("editor.lineHeight"),
							scrollbar: {
								vertical: "hidden",
								horizontal: "auto",
								verticalScrollbarSize: 0,
								handleMouseWheel: !0,
								alwaysConsumeMouseWheel: !1,
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								horizontalScrollbarSize: e.$W0b,
							},
							scrollBeyondLastLine: !1,
							renderLineHighlight: "none",
							renderWhitespace: "none",
							minimap: { enabled: !1 },
							quickSuggestions: !1,
							automaticLayout: !1,
							automaticLayoutIgnoreHeight: !0,
							guides: { indentation: !1 },
						};
					}
				};
				(e.$X0b = f),
					(e.$X0b = f =
						Ne(
							[
								j(3, E.$Li),
								j(4, i.$dtb),
								j(5, C.$ek),
								j(6, w.$6j),
								j(7, r.$iP),
								j(8, u.$4N),
								j(9, a.$XK),
								j(10, h.$aN),
								j(11, c.$k3),
								j(12, n.$5X),
							],
							f,
						));
			},
		),
		