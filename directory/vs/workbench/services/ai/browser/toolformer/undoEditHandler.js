import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../base/common/map.js';
import '../../../../../editor/browser/services/simpleInlineDiffService.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/markers/common/markers.js';
import '../../../../../platform/undoRedo/common/undoRedo.js';
define(
			de[3231],
			he([1, 0, 124, 59, 545, 42, 90, 155]),
			function (ce /*require*/,
 e /*exports*/,
 t /*tools_pb*/,
 i /*map*/,
 w /*simpleInlineDiffService*/,
 E /*resolverService*/,
 C /*markers*/,
 d /*undoRedo*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R8b = void 0);
				let m = class {
					constructor(u, a, h, c) {
						(this.b = u),
							(this.c = a),
							(this.d = h),
							(this.e = c),
							(this.a = new i.$Jc(10));
					}
					async call(u, a, h, c) {
						const n = u.mostRecentEditSnapshot;
						if (!n) throw new Error("No recent edit found. Cannot undo.");
						let g;
						try {
							g = await this.b.createModelReference(n.uri);
							const p = new w.$A8b(g, this.d, u.diffs.get(n.path) ?? []),
								o = u.markersBefore.get(u.editHistory[0]);
							if (!o)
								throw new Error("No markers found for the edit. Cannot undo.");
							for (let I = n.startLine; I < n.endLineExclusive; I++)
								p.deleteLine(n.startLine);
							for (const I of n.deletedLines)
								p.newLine(n.startLine - 1), p.editLine(I, n.startLine);
							await new Promise((I) => {
								setTimeout(() => {
									I(void 0);
								}, 800);
							});
							const b = this.e
									.read({ resource: n.uri })
									.filter(
										(I) =>
											!o.some(
												(T) =>
													T.message === I.message &&
													T.code === I.code &&
													T.severity === I.severity &&
													T.source === I.source,
											),
									),
								s = 10,
								y = g.object.textEditorModel
									.getValue()
									.split(g.object.textEditorModel.getEOL()),
								$ = Math.max(0, n.startLine - 1 - s),
								v = Math.min(y.length, n.endLineExclusive - 1 + s),
								S = y.slice($, v);
							this.a.set(
								u.toolformerId,
								new t.$hz({
									feedback: b.map(
										(I) =>
											`${I.message} (lines ${I.startLineNumber}-${I.endLineNumber})` +
											(I.relatedInformation
												? `
` +
													I.relatedInformation
														.map(
															(T) =>
																`${T.message} (lines ${T.startLineNumber}-${T.endLineNumber})`,
														)
														.join(`
`)
												: ""),
									),
									relativeWorkspacePath: n.uri.path,
									contextStartLineNumber: $ + 1,
									contextTotalNumLines: S.length,
									contextLines: S,
									fileTotalLines: y.length,
								}),
							);
						} finally {
							g && g.dispose();
						}
					}
					async finish(u, a, h) {
						const c = this.a.get(u.toolformerId);
						if (!c) throw new Error("No undo edit result found.");
						return c;
					}
				};
				(e.$R8b = m),
					(e.$R8b = m =
						Ne([j(0, E.$MO), j(1, d.$GN), j(2, w.$z8b), j(3, C.$aM)], m));
			},
		),
		