import '../../../../../require.js';
import '../../../../../exports.js';
import '../../aichat/browser/codeSelections.js';
import '../../../../base/common/uri.js';
define(de[1269], he([1, 0, 354, 9]), function (ce /*require*/,
 e /*exports*/,
 t /*codeSelections*/,
 i /*uri*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Pyc = w),
				(e.$Qyc = E),
				(e.$Ryc = C),
				(e.$Syc = d);
			function w(m) {
				if (!m) return;
				if (Array.isArray(m)) return m;
				const r = m.lines.sort((h, c) => h.number - c.number);
				if (r.length === 0) return [];
				const u = r[r.length - 1].number,
					a = new Array(u);
				for (let h = 0; h < u; h++) a[h] = "";
				for (const h of r) a[h.number - 1] = h.content;
				return a;
			}
			async function E({
				report: m,
				fileSnapshots: r,
				fileSnapshotsPreDiff: u,
				workspaceContextService: a,
				modelService: h,
				editorWorkerService: c,
				options: n,
			}) {
				const g = [],
					p = new Set();
				for (const s of m.locations) {
					const l = s.file;
					if (p.has(l)) continue;
					p.add(l);
					const y = u[l],
						$ = r[l];
					if (!y || !$) continue;
					const v = w(y),
						S = w($);
					if (!v || !S) continue;
					const I = h.createModel(
							v.join(`
`),
							null,
							i.URI.parse("old-" + l),
						),
						T = h.createModel(
							S.join(`
`),
							null,
							i.URI.parse("new-" + l),
						);
					try {
						const P = await c.computeDiff(
							I.uri,
							T.uri,
							{
								ignoreTrimWhitespace: !0,
								computeMoves: !1,
								maxComputationTimeMs: 5e3,
							},
							"advanced",
						);
						g.push(`diff --git a/${l} b/${l}`),
							g.push(`--- a/${l}`),
							g.push(`+++ b/${l}`);
						const k = P?.changes ?? [],
							L = new Set();
						for (const O of k) {
							for (
								let B = O.original.startLineNumber - 3;
								B < O.original.startLineNumber;
								B++
							)
								B >= 1 && B <= I.getLineCount() && L.add(B);
							for (
								let B = O.original.endLineNumberExclusive;
								B < O.original.endLineNumberExclusive + 3;
								B++
							)
								B >= 1 && B <= I.getLineCount() && L.add(B);
						}
						const D = [
								...k.map((O) => ({
									anchor: O.original.startLineNumber,
									event: { case: "change", c: O },
								})),
								...Array.from(L).map((O) => ({
									anchor: O,
									event: { case: "context", l: O },
								})),
							].sort((O, B) => O.anchor - B.anchor),
							M = new Set(),
							N = [];
						let A = 0,
							R = "";
						for (const O of D)
							if (O.event.case === "context") {
								if (M.has(O.event.l)) continue;
								if (A !== O.event.l - 1) {
									for (let U = A + 1; U < O.event.l; U++) {
										const z = I.getLineContent(U);
										z.trim() !== "" &&
											I.getLineFirstNonWhitespaceColumn(U) === 1 &&
											(R = z);
									}
									N.push({
										lines: [],
										startLine: R,
										ogLine: void 0,
										newLine: void 0,
									});
								}
								(A = O.event.l), M.add(O.event.l);
								const B = I.getLineContent(O.event.l);
								N.at(-1)?.lines.push(` ${B}`),
									B.trim() !== "" &&
										I.getLineFirstNonWhitespaceColumn(O.event.l) === 1 &&
										(R = B);
							} else {
								N.length === 0 &&
									N.push({
										lines: [],
										startLine: "",
										ogLine: void 0,
										newLine: void 0,
									});
								const B = N.at(-1);
								B.ogLine === void 0 &&
									((B.ogLine =
										O.event.c.original.startLineNumber - B.lines.length),
									(B.newLine =
										O.event.c.modified.startLineNumber - B.lines.length));
								for (
									let U = O.event.c.original.startLineNumber;
									U < O.event.c.original.endLineNumberExclusive;
									U++
								) {
									if (M.has(U)) throw new Error("Duplicate change line");
									M.add(U), B.lines.push(`-${I.getLineContent(U)}`), (A = U);
								}
								for (
									let U = O.event.c.modified.startLineNumber;
									U < O.event.c.modified.endLineNumberExclusive;
									U++
								)
									B.lines.push(`+${T.getLineContent(U)}`);
							}
						for (const O of N) {
							const B = O.lines.filter((F) => F.startsWith("+")),
								U = O.lines.filter((F) => F.startsWith("-")),
								z = O.lines.filter((F) => F.startsWith(" ")).length;
							g.push(
								`@@ -${O.ogLine},${z + U.length} +${O.newLine},${z + B.length} @@ ${O.startLine.slice(0, 80)}`,
							),
								g.push(...O.lines);
						}
					} finally {
						I.dispose(), T.dispose();
					}
				}
				if (g.length === 0) return;
				const o = a.resolveRelativePath("reviewed.diff");
				if (!o) return;
				const f = g.join(`
`),
					b = `\`\`\`diff
${f}
\`\`\``;
				return {
					uri: o,
					uuid: n?.uuid,
					summarizationStrategy: n?.summarizationStrategy,
					text: b,
					rawText: f,
					addedWithoutMention: n?.addedWithoutMention,
					range: {
						selectionStartLineNumber: 1,
						selectionStartColumn: 1,
						positionLineNumber: g.length,
						positionColumn: g[g.length - 1]?.length ?? 1,
					},
				};
			}
			function C(m, r, u, a, h) {
				const c = r.slice(m.startLine - 1, m.endLine),
					n = u.resolveRelativePath(m.file);
				if (!n) return;
				const g = c.join(`
`),
					p = (0, t.$Tfc)(g),
					o = r[0] || "",
					b = `\`\`\`${a.guessLanguageIdByFilepathOrFirstLine(n, o) || "plaintext"}
${p ?? ""}
\`\`\``;
				return {
					uri: n,
					uuid: h?.uuid,
					summarizationStrategy: h?.summarizationStrategy,
					text: b,
					rawText: g,
					addedWithoutMention: h?.addedWithoutMention,
					range: {
						selectionStartLineNumber: m.startLine,
						selectionStartColumn: 1,
						positionLineNumber: m.endLine,
						positionColumn: c[c.length - 1]?.length ?? 1,
					},
				};
			}
			function d({ report: m, workspaceContextService: r, fileLocations: u }) {
				const a = r.resolveRelativePath("bugreport.txt");
				if (!a) return;
				const n =
						`An automatic bug finder, which is powered by AI and sometimes incorrect, reported the following bug in ${u.map((p) => `\`${p}\``).join(", ")}:

${m.description}`
							.split(" ")
							.reduce(
								(p, o) => {
									const f = p[p.length - 1];
									return (
										f.length + o.length + 1 <= 50
											? (p[p.length - 1] = f + (f ? " " : "") + o)
											: p.push(o),
										p
									);
								},
								[""],
							)
							.join(`
`),
					g = `\`\`\`
${n}
\`\`\``;
				return {
					uri: a,
					text: g,
					rawText: n,
					range: {
						selectionStartLineNumber: 1,
						selectionStartColumn: 1,
						positionLineNumber: n.split(`
`).length,
						positionColumn:
							n
								.split(`
`)
								.slice(-1)[0]?.length ?? 1,
					},
				};
			}
		}),
		