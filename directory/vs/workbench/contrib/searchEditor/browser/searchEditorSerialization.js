define(
			de[1067],
			he([1, 0, 24, 17, 4, 405, 85, 908]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NOc =
						e.$MOc =
						e.$LOc =
						e.$KOc =
						e.$JOc =
						e.$IOc =
						e.$HOc =
							void 0);
				const d = `
`,
					m = (y) => ($) =>
						new i.$iL(
							$.startLineNumber + y,
							$.startColumn,
							$.endLineNumber + y,
							$.endColumn,
						),
					r = (y, $) => {
						const v = (T) => `${y.range().startLineNumber + T}`,
							S = y.fullPreviewLines(),
							I = [];
						return (
							S.forEach((T, P) => {
								const k = v(P),
									D = `  ${" ".repeat($ - k.length)}${k}: `,
									M = D.length,
									N = D + (T.split(/\r?\n?$/, 1)[0] || ""),
									A = ({ start: U, end: z }) =>
										new i.$iL(1, (U ?? 1) + M, 1, (z ?? T.length + 1) + M),
									R = y.rangeInPreview(),
									O = R.startLineNumber === R.endLineNumber;
								let B;
								O
									? (B = A({ start: R.startColumn, end: R.endColumn }))
									: P === 0
										? (B = A({ start: R.startColumn }))
										: P === S.length - 1
											? (B = A({ end: R.endColumn }))
											: (B = A({})),
									I.push({ lineNumber: k, line: N, ranges: [B] });
							}),
							I
						);
					};
				function u(y, $) {
					const v =
							y.textMatches().length > 0
								? a(y.resource, y.textMatches().sort(E.$NNc), y.context, $)
								: void 0,
						S = y
							.cellMatches()
							.sort((I, T) => I.cellIndex - T.cellIndex)
							.sort()
							.filter((I) => I.contentMatches.length > 0)
							.map((I, T) => h(I, $, T === 0));
					return [v, ...S].filter((I) => !!I);
				}
				function a(y, $, v, S, I = !0) {
					const T = $[$.length - 1].range().endLineNumber.toString().length,
						P = I ? [`${S(y)}:`] : [],
						k = [],
						L = {},
						D = [];
					v.forEach((A, R) => D.push({ line: A, lineNumber: R })),
						D.sort((A, R) => A.lineNumber - R.lineNumber);
					let M;
					const N = new Set();
					for (
						$.forEach((A) => {
							r(A, T).forEach((R) => {
								if (!N.has(R.lineNumber)) {
									for (; D.length && D[0].lineNumber < +R.lineNumber; ) {
										const { line: O, lineNumber: B } = D.shift();
										M !== void 0 && B !== M + 1 && P.push(""),
											P.push(`  ${" ".repeat(T - `${B}`.length)}${B}  ${O}`),
											(M = B);
									}
									(L[R.lineNumber] = P.length),
										N.add(R.lineNumber),
										P.push(R.line),
										(M = +R.lineNumber);
								}
								k.push(...R.ranges.map(m(L[R.lineNumber])));
							});
						});
						D.length;
					) {
						const { line: A, lineNumber: R } = D.shift();
						P.push(`  ${R}  ${A}`);
					}
					return { text: P, matchRanges: k };
				}
				function h(y, $, v) {
					return a(
						y.cell?.uri ?? y.parent.resource,
						y.contentMatches.sort(E.$NNc),
						y.context,
						$,
						v,
					);
				}
				const c = (y, $, v, S) => ({
						query: y.contentPattern.pattern,
						isRegexp: !!y.contentPattern.isRegExp,
						isCaseSensitive: !!y.contentPattern.isCaseSensitive,
						matchWholeWord: !!y.contentPattern.isWordMatch,
						filesToExclude: v,
						filesToInclude: $,
						showIncludesExcludes: !!(
							$ ||
							v ||
							y?.userDisabledExcludesAndIgnoreFiles
						),
						useExcludeSettingsAndIgnoreFiles:
							y?.userDisabledExcludesAndIgnoreFiles === void 0
								? !0
								: !y.userDisabledExcludesAndIgnoreFiles,
						contextLines: S,
						onlyOpenEditors: !!y.onlyOpenEditors,
						notebookSearchConfig: {
							includeMarkupInput:
								!!y.contentPattern.notebookInfo?.isInNotebookMarkdownInput,
							includeMarkupPreview:
								!!y.contentPattern.notebookInfo?.isInNotebookMarkdownPreview,
							includeCodeInput:
								!!y.contentPattern.notebookInfo?.isInNotebookCellInput,
							includeOutput:
								!!y.contentPattern.notebookInfo?.isInNotebookCellOutput,
						},
					}),
					n = (y) =>
						((S) => S.filter((I) => I !== !1 && I !== null && I !== void 0))([
							`# Query: ${((S) => S.replace(/\\/g, "\\\\").replace(/\n/g, "\\n"))(y.query ?? "")}`,
							(y.isCaseSensitive ||
								y.matchWholeWord ||
								y.isRegexp ||
								y.useExcludeSettingsAndIgnoreFiles === !1) &&
								`# Flags: ${(0, t.$Lb)([y.isCaseSensitive && "CaseSensitive", y.matchWholeWord && "WordMatch", y.isRegexp && "RegExp", y.onlyOpenEditors && "OpenEditors", y.useExcludeSettingsAndIgnoreFiles === !1 && "IgnoreExcludeSettings"]).join(" ")}`,
							y.filesToInclude ? `# Including: ${y.filesToInclude}` : void 0,
							y.filesToExclude ? `# Excluding: ${y.filesToExclude}` : void 0,
							y.contextLines ? `# ContextLines: ${y.contextLines}` : void 0,
							"",
						]).join(d);
				e.$HOc = n;
				const g = (y) =>
					(0, e.$KOc)(y.getValueInRange(new i.$iL(1, 1, 6, 1)).split(d));
				e.$IOc = g;
				const p = () => ({
					query: "",
					filesToInclude: "",
					filesToExclude: "",
					isRegexp: !1,
					isCaseSensitive: !1,
					useExcludeSettingsAndIgnoreFiles: !0,
					matchWholeWord: !1,
					contextLines: 0,
					showIncludesExcludes: !1,
					onlyOpenEditors: !1,
					notebookSearchConfig: {
						includeMarkupInput: !0,
						includeMarkupPreview: !1,
						includeCodeInput: !0,
						includeOutput: !0,
					},
				});
				e.$JOc = p;
				const o = (y) => {
					const $ = (0, e.$JOc)(),
						v = (I) => {
							let T = "";
							for (let P = 0; P < I.length; P++)
								if (I[P] === "\\") {
									P++;
									const k = I[P];
									if (k === "n")
										T += `
`;
									else if (k === "\\") T += "\\";
									else throw Error((0, w.localize)(9411, null));
								} else T += I[P];
							return T;
						},
						S = /^# ([^:]*): (.*)$/;
					for (const I of y) {
						const T = S.exec(I);
						if (!T) continue;
						const [, P, k] = T;
						switch (P) {
							case "Query":
								$.query = v(k);
								break;
							case "Including":
								$.filesToInclude = k;
								break;
							case "Excluding":
								$.filesToExclude = k;
								break;
							case "ContextLines":
								$.contextLines = +k;
								break;
							case "Flags":
								($.isRegexp = k.indexOf("RegExp") !== -1),
									($.isCaseSensitive = k.indexOf("CaseSensitive") !== -1),
									($.useExcludeSettingsAndIgnoreFiles =
										k.indexOf("IgnoreExcludeSettings") === -1),
									($.matchWholeWord = k.indexOf("WordMatch") !== -1),
									($.onlyOpenEditors = k.indexOf("OpenEditors") !== -1);
						}
					}
					return (
						($.showIncludesExcludes = !!(
							$.filesToInclude ||
							$.filesToExclude ||
							!$.useExcludeSettingsAndIgnoreFiles
						)),
						$
					);
				};
				e.$KOc = o;
				const f = (y, $, v, S, I, T, P) => {
					if (!y.query) throw Error("Internal Error: Expected query, got null");
					const k = c(y.query, $, v, S),
						L =
							y.fileCount() > 1
								? (0, w.localize)(9412, null, y.fileCount())
								: (0, w.localize)(9413, null),
						D =
							y.count() > 1
								? (0, w.localize)(9414, null, y.count())
								: (0, w.localize)(9415, null),
						M = [y.count() ? `${D} - ${L}` : (0, w.localize)(9416, null)];
					P && M.push((0, w.localize)(9417, null)), M.push("");
					const N = (R, O) => (0, E.$NNc)(R, O, T),
						A = b(
							y
								.folderMatches()
								.sort(N)
								.map((R) =>
									R.allDownstreamFileMatches()
										.sort(N)
										.flatMap((O) => u(O, I)),
								)
								.flat(),
						);
					return {
						matchRanges: A.matchRanges.map(m(M.length)),
						text: M.concat(A.text).join(d),
						config: k,
					};
				};
				e.$LOc = f;
				const b = (y) => {
						const $ = [],
							v = [];
						return (
							y.forEach((S) => {
								S.matchRanges.map(m($.length)).forEach((I) => v.push(I)),
									S.text.forEach((I) => $.push(I)),
									$.push("");
							}),
							{ text: $, matchRanges: v }
						);
					},
					s = async (y, $) => {
						const S = (await y.get(C.$kZ).read($)).value;
						return (0, e.$NOc)(S);
					};
				e.$MOc = s;
				const l = (y) => {
					const $ = [],
						v = [];
					let S = !0;
					for (const I of y.split(/\r?\n/g))
						S ? ($.push(I), I === "" && (S = !1)) : v.push(I);
					return {
						config: (0, e.$KOc)($),
						text: v.join(`
`),
					};
				};
				e.$NOc = l;
			},
		),
		