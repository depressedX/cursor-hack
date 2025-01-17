import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../textfile/common/textfiles.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../repositoryService.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../platform/files/common/files.js';
define(
			de[3701],
			he([1, 0, 85, 25, 42, 124, 226, 83, 22]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Q8b = void 0);
				const r = !1;
				let u = class {
					constructor(h, c, n, g, p) {
						(this.a = h),
							(this.b = c),
							(this.c = n),
							(this.d = g),
							(this.e = p);
					}
					async call(h, c, n, g) {}
					async finish(h, c, n, g) {
						if (!c)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						const o = (
								await this.d.parallelSearch(c.query, c.topK, c.topK, {
									includePattern: c.includePattern,
									excludePattern: c.excludePattern,
								})
							).filter((b) => b.codeBlock),
							f = o.map(
								(b) =>
									new E.$0y({
										relativeWorkspacePath: b.codeBlock.relativeWorkspacePath,
										score: b.score,
										content: b.codeBlock.contents,
										originalContent: b.codeBlock.originalContents,
										detailedLines: b.codeBlock.detailedLines,
										range: new d.$Fs({
											startLineNumber: b.codeBlock.range?.startPosition?.line,
											startColumn: b.codeBlock.range?.startPosition?.column,
											endLineNumberInclusive:
												b.codeBlock.range?.endPosition?.line,
											endColumn: b.codeBlock.range?.endPosition?.column,
										}),
									}),
							);
						if (c.grabWholeFile) {
							const b = new Map();
							o.forEach((l) => {
								const { relativeWorkspacePath: y } = l?.codeBlock ?? {};
								if (!y) return;
								const $ = b.get(y) ?? [];
								$.push(l), b.set(y, $);
							});
							const s = Object.fromEntries(
								await Promise.all(
									[...b.entries()].map(async ([l, y]) => {
										const v = (
											await this.e.readFile(this.b.resolveRelativePath(l))
										).value.toString();
										return [l, v];
									}),
								),
							);
							return new E.$9y({ results: f, files: s });
						} else return new E.$9y({ results: f });
					}
				};
				(e.$Q8b = u),
					(e.$Q8b = u =
						Ne(
							[
								j(0, t.$kZ),
								j(1, i.$Vi),
								j(2, w.$MO),
								j(3, C.$J6b),
								j(4, m.$ll),
							],
							u,
						));
			},
		),
		