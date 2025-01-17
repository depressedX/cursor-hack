import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../textfile/common/textfiles.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../platform/markers/common/markers.js';
define(
			de[3960],
			he([1, 0, 85, 25, 42, 241, 22, 124, 17, 90]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$v8b = void 0);
				let u = class {
					constructor(h, c, n, g, p, o) {
						(this.a = h),
							(this.b = c),
							(this.c = n),
							(this.d = g),
							(this.e = p),
							(this.f = o);
					}
					async call(h, c, n, g) {}
					async finish(h, c, n, g) {
						if (!c)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						if (c.relativeWorkspacePath === void 0)
							throw new Error("Need to give the path to know where to edit.");
						const p = await this.d.getMagicURIForText(c.relativeWorkspacePath);
						if (!p)
							throw new Error(
								`Could not find file ${c.relativeWorkspacePath} in the workspace.`,
							);
						let o;
						try {
							o = await this.c.createModelReference(p);
							const b = o.object.textEditorModel
								.getValue()
								.split(o.object.textEditorModel.getEOL());
							let s;
							const l = b.findIndex((k) =>
								k.includes(`@cursor-agent:test-begin:${c.testName}`),
							);
							if (l !== -1) {
								const k = b.findIndex(
									(L, D) =>
										D > l && L.includes(`@cursor-agent:test-end:${c.testName}`),
								);
								if (k === -1)
									throw new Error(
										`Could not find end of test ${c.testName} in file ${c.relativeWorkspacePath}.`,
									);
								s = new m.$iL(l + 1, 1, k + 2, 1);
							} else {
								const k = b.findIndex((L) =>
									L.includes("@cursor-agent:add-tests-here"),
								);
								if (k === -1)
									throw new Error(
										`Could not find @cursor-agent:add-tests-here marker in file ${c.relativeWorkspacePath}.`,
									);
								s = new m.$iL(k + 1 + 1, 1, k + 1 + 1, 1);
							}
							const y = c.testCode.split(`
`);
							for (; y[0].trim() === ""; ) y.shift();
							for (; y[y.length - 1].trim() === ""; ) y.pop();
							const $ = y.join(`
`),
								v = `

// @cursor-agent:test-begin:${c.testName}
${$}
// @cursor-agent:test-end:${c.testName}

`,
								S = 3;
							o.object.textEditorModel.pushEditOperations(
								null,
								[{ range: s, text: v }],
								() => null,
							);
							const I = new m.$iL(
								s.startLineNumber,
								s.startColumn,
								s.startLineNumber +
									v.split(`
`).length -
									1,
								v.split(`
`).length === 1
									? s.startColumn + v.length
									: v.split(`
`)[
											v.split(`
`).length - 1
										].length + 1,
							);
							await new Promise((k) => {
								setTimeout(() => {
									k(void 0);
								}, 800);
							});
							const P = this.f
								.read({ resource: p })
								.filter(
									(k) =>
										I.containsPosition({
											lineNumber: k.startLineNumber,
											column: k.startColumn,
										}) &&
										I.containsPosition({
											lineNumber: k.endLineNumber,
											column: k.endColumn,
										}),
								);
							return new d.$yz({
								feedback: P.map(
									(k) =>
										new d.$Az({
											message: k.message,
											severity: r.MarkerSeverity.toString(k.severity),
											startLineNumber:
												k.startLineNumber - s.startLineNumber + 1 - S,
											endLineNumber:
												k.endLineNumber - s.startLineNumber + 1 - S,
											relatedInformation:
												k.relatedInformation?.map(
													(L) =>
														new d.$zz({
															message: L.message,
															startLineNumber:
																L.startLineNumber - s.startLineNumber + 1 - S,
															endLineNumber:
																L.endLineNumber - s.startLineNumber + 1 - S,
															relativeWorkspacePath: this.b.asRelativePath(
																L.resource,
															),
														}),
												) ?? [],
										}),
								),
							});
						} finally {
							o?.dispose();
						}
					}
				};
				(e.$v8b = u),
					(e.$v8b = u =
						Ne(
							[
								j(0, t.$kZ),
								j(1, i.$Vi),
								j(2, w.$MO),
								j(3, E.$q8b),
								j(4, C.$ll),
								j(5, r.$aM),
							],
							u,
						));
			},
		),
		