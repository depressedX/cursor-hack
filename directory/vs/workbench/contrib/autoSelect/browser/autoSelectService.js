define(
			de[1930],
			he([1, 0, 5, 350, 20, 118, 3, 83, 42, 25, 148]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sec = e.$rec = void 0),
					(e.$rec = (0, t.$Mi)("autoSelectService"));
				const a = ["line", "group", "folding"];
				let h = class extends C.$1c {
					constructor(n, g, p) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.m = (o) => {
								const f = new Set();
								return o.filter((s) => {
									if (!s) return !1;
									const l = `${s.range.startLineNumber},${s.range.startColumn},${s.range.endLineNumber},${s.range.endColumn}`;
									return f.has(l) ? !1 : (f.add(l), !0);
								});
							});
					}
					async smartSelect(n, g, p) {
						console.log("[auto select] smart select");
						const o = n.getModel(),
							f = o?.uri;
						if (!o || !f)
							return console.warn("[auto select] no model or uri found"), [];
						const b = await this.c.aiClient(),
							s = await this.heuristicSelect(n, g, p);
						let l, y;
						const $ = await this.f.createModelReference(f);
						try {
							const k = $.object.textEditorModel;
							l = new d.$Ws({
								relativeWorkspacePath: this.g.asRelativePath(f),
								contents: k.getValue(),
								cursorPosition: { line: g.lineNumber, column: g.column },
							});
							const L = n.getSelection();
							L &&
								!L.isEmpty() &&
								(y = {
									startLineNumber: L.startLineNumber,
									startColumn: L.startColumn,
									endLineNumberInclusive: L.endLineNumber,
									endColumn: L.endColumn,
								});
						} finally {
							$.dispose();
						}
						const v = new d.$Zs({ modelName: "gpt-4" }),
							S = new u.$dE({
								currentFileInfo: l,
								modelDetails: v,
								selectionRange: y,
								heuristicsSelections: s.map(
									(k) =>
										new u.$cE({
											type:
												k.type === "group"
													? u.HeuristicsSelection_HeuristicsSelectionType.GROUP
													: k.type === "folding"
														? u.HeuristicsSelection_HeuristicsSelectionType
																.FOLDING
														: u.HeuristicsSelection_HeuristicsSelectionType
																.LINE,
											startLine: k.initialSelectionRange.startLineNumber,
											endLine: k.initialSelectionRange.endLineNumber,
										}),
								),
							}),
							I = Date.now(),
							T = await b.calculateAutoSelection(S),
							P = Date.now();
						return (
							console.log("[auto select] response", T),
							console.log(`[auto select] calculation took ${P - I} ms`),
							T.results
								? T.results.map((k) => ({
										initialSelectionRange: {
											startLineNumber: k.startLine,
											startColumn: 1,
											endLineNumber: k.endLine,
											endColumn: o.getLineMaxColumn(k.endLine),
										},
										rangeDecorationId: "",
										type: "ai",
									}))
								: []
						);
					}
					async heuristicSelect(n, g, p) {
						const o = p?.shouldDedupe ?? !0,
							f = p?.skipSuggestionTypes ?? [],
							b = a.filter((S) => !f.includes(S)),
							s = await Promise.all(
								b.map(async (S) => ({
									type: S,
									range: await this.h(n, g, S),
									base: g,
								})),
							),
							y = (
								await Promise.all(
									s.map(async (S) => {
										const I = await this.j(n, S);
										return { ...S, score: I };
									}),
								)
							).sort((S, I) => I.score - S.score);
						return (o ? this.m(y) : y).map((S) => ({
							score: S.score,
							type: S.type,
							initialSelectionRange: S.range,
							rangeDecorationId: "",
						}));
					}
					async h(n, g, p) {
						const o = g.lineNumber,
							f = n.getModel();
						if (f) {
							switch (p) {
								case "line":
									return this.n(f, {
										startLineNumber: o,
										startColumn: 1,
										endLineNumber: o,
										endColumn: f.getLineLength(o),
									});
								case "group": {
									let b = o,
										s = o;
									const l = this.getLineIndentAt(n, o);
									for (
										let y = o - 1;
										y > 0 &&
										!(
											this.getLineIndentAt(n, y) < l ||
											f.getLineContent(y).trim() === ""
										);
										y--
									)
										b = y;
									for (
										let y = o + 1;
										y <= f.getLineCount() &&
										!(
											this.getLineIndentAt(n, y) < l ||
											f.getLineContent(y).trim() === ""
										);
										y++
									)
										s = y;
									return this.n(f, {
										startLineNumber: b,
										startColumn: 1,
										endLineNumber: s,
										endColumn: f.getLineMaxColumn(s),
									});
								}
								case "folding": {
									let b = o,
										s = o;
									const l = i.$ZNb.get(n);
									if (!l) break;
									const y = l.getFoldingModel();
									if (!y) break;
									const $ = await y;
									if (!$) break;
									const v = $.getRegionAtLine(o);
									if (v) {
										b = Math.max(1, v.startLineNumber);
										const S = this.getLineIndentAt(n, b),
											I = this.getLineIndentAt(
												n,
												Math.min(f.getLineCount(), v.endLineNumber),
											);
										s = Math.min(
											f.getLineCount(),
											S >= I ? v.endLineNumber : v.endLineNumber + 1,
										);
									}
									return {
										startLineNumber: b,
										startColumn: 1,
										endLineNumber: s,
										endColumn: f.getLineMaxColumn(s),
									};
								}
							}
							return this.n(f, {
								startLineNumber: o,
								startColumn: 1,
								endLineNumber: o,
								endColumn: f.getLineMaxColumn(o),
							});
						}
					}
					async j(n, g) {
						let p = 0;
						const o = n.getModel();
						if (!o) return 0;
						const f = g.base.lineNumber,
							b = o.getLineContent(f),
							s = f > 1 && o.getLineContent(f - 1).trim() === "",
							l = f < o.getLineCount() && o.getLineContent(f + 1).trim() === "",
							y = this.getLineIndentAt(n, f),
							$ = this.getLineIndentAt(n, g.range.endLineNumber),
							v = this.getLineIndentAt(n, g.range.startLineNumber),
							S = f > 1 ? this.getLineIndentAt(n, f - 1) : 0,
							I = f < o.getLineCount() ? this.getLineIndentAt(n, f + 1) : 0;
						switch (g.type) {
							case "group":
								s && (p += 10),
									$ === v ? (p += 10) : (p -= 15),
									!s && S !== y && (p += 5),
									!s && !l && (p += 3),
									l && !s && S === y && (p += 10),
									(v !== y || $ !== y) && (p -= 15),
									y === v && f !== g.range.startLineNumber && (p -= 10),
									$ < v && (p -= 10);
								break;
							case "line":
								s && l && (p += 18),
									o.uri.fsPath.endsWith(".rs") &&
										b.trim().startsWith("#") &&
										(p += 15);
								break;
							case "folding":
								(p += 10),
									s && (p += 10),
									$ === v && (p += 10),
									!s && !l && (p += 5),
									v !== y && (p -= 10),
									$ !== y && (p -= 5),
									f > g.range.startLineNumber && (p -= 10);
								break;
							default:
								return Promise.resolve(0);
						}
						return p;
					}
					getLineIndentAt(n, g) {
						const p = n.getModel();
						return p ? p.getLineFirstNonWhitespaceColumn(g) : 0;
					}
					n(n, g) {
						const p = Math.max(1, g.startLineNumber),
							o = Math.min(n.getLineCount(), g.endLineNumber);
						return {
							startLineNumber: p,
							startColumn: Math.max(1, g.startColumn),
							endLineNumber: o,
							endColumn: Math.min(n.getLineMaxColumn(o), g.endColumn),
						};
					}
				};
				(e.$sec = h),
					(e.$sec = h = Ne([j(0, E.$Nfc), j(1, m.$MO), j(2, r.$Vi)], h)),
					(0, w.$lK)(e.$rec, h, w.InstantiationType.Delayed);
			},
		),
		