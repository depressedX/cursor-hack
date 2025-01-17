import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../../../editor/browser/services/simpleInlineDiffService.js';
import '../../../../../platform/markers/common/markers.js';
import '../../../../../base/common/arrays.js';
define(
			de[3963],
			he([1, 0, 124, 42, 241, 545, 90, 24]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$D8b = void 0);
				let m = class {
					constructor(u, a, h, c) {
						(this.a = u), (this.b = a), (this.c = h), (this.d = c);
					}
					async call(u, a, h, c) {
						if (!a)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						if (a.relativeWorkspacePath === void 0)
							throw new Error("Need to give the path to know where to edit.");
						const n = await this.a.getMagicURIForText(a.relativeWorkspacePath);
						if (!n)
							throw new Error(
								`Could not find file ${a.relativeWorkspacePath} in the workspace.`,
							);
						let g;
						try {
							const p = a.editId;
							g = await this.b.createModelReference(n);
							const o = new E.$A8b(
									g,
									this.c,
									u.diffs.get(a.relativeWorkspacePath) ?? [],
								),
								f = g.object.textEditorModel.getLineCount();
							let b =
								u.mostRecentEditSnapshot?.editId === p
									? u.mostRecentEditSnapshot.endLineExclusive
									: a.lineNumber || f + 1;
							u.editHistory.includes(p) ||
								(u.editHistory.push(p),
								u.markersBefore.set(p, this.d.read({ resource: n })),
								(u.mostRecentEditSnapshot = {
									path: a.relativeWorkspacePath,
									uri: n,
									editId: p,
									startLine: b,
									endLineExclusive: b,
									deletedLines: [],
								}));
							for (const s of (0, d.$Vb)(a.replaceNumLines))
								u.mostRecentEditSnapshot.deletedLines.push(
									g.object.textEditorModel.getLineContent(b),
								),
									o.deleteLine(b);
							if (
								a.lineNumber === void 0 ||
								a.lineNumber > g.object.textEditorModel.getLineCount()
							) {
								const s = g.object.textEditorModel.getLineLength(f);
								for (const l of a.newLines)
									o.newLine(b - 1), o.editLine(l, b), b++;
								u.mostRecentEditSnapshot.endLineExclusive += a.newLines.length;
							} else
								for (const s of a.newLines)
									o.newLine(b - 1),
										o.editLine(s, b),
										b++,
										u.mostRecentEditSnapshot.endLineExclusive++;
							u.diffs.set(a.relativeWorkspacePath, o.getHandlers());
						} finally {
							g && g.dispose();
						}
					}
					async finish(u, a, h, c) {
						if (!a)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						const n = await this.a.getMagicURIForText(a.relativeWorkspacePath);
						if (!n)
							throw new Error(
								`Could not find file ${a.relativeWorkspacePath} in the workspace.`,
							);
						await new Promise((S) => {
							setTimeout(() => {
								S(void 0);
							}, 800);
						});
						const g = this.d.read({ resource: n }),
							p = u.markersBefore.get(u.editHistory[0]);
						if (p === void 0)
							throw new Error("No markers before were found for this edit");
						const o = g.filter(
							(S) =>
								!p.some(
									(I) =>
										I.message === S.message &&
										I.code === S.code &&
										I.severity === S.severity &&
										I.source === S.source,
								),
						);
						let f;
						f = await this.b.createModelReference(n);
						const b = 10,
							l = f.object.textEditorModel
								.getValue()
								.split(f.object.textEditorModel.getEOL()),
							y = Math.max(0, u.mostRecentEditSnapshot.startLine - b),
							$ = Math.min(
								l.length,
								u.mostRecentEditSnapshot.endLineExclusive + b,
							),
							v = l.slice(y, $);
						return (
							f && f.dispose(),
							new t.$uz({
								feedback: o.map(
									(S) =>
										`${S.message} (lines ${S.startLineNumber}-${S.endLineNumber})` +
										(S.relatedInformation
											? `
` +
												S.relatedInformation
													.map(
														(I) =>
															`${I.message} (lines ${I.startLineNumber}-${I.endLineNumber})`,
													)
													.join(`
`)
											: ""),
								),
								contextStartLineNumber: y + 1,
								contextLines: v,
								file: a.relativeWorkspacePath,
								fileTotalLines: l.length,
							})
						);
					}
				};
				(e.$D8b = m),
					(e.$D8b = m =
						Ne([j(0, w.$q8b), j(1, i.$MO), j(2, E.$z8b), j(3, C.$aM)], m));
			},
		),
		