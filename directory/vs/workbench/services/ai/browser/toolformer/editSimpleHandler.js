import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/browser/services/simpleInlineDiffService.js';
import '../../../../../platform/markers/common/markers.js';
import '../../../../../base/common/arrays.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../editor/contrib/codeAction/browser/codeAction.js';
define(
			de[3964],
			he([1, 0, 124, 42, 241, 17, 545, 90, 24, 25, 31, 393]),
			function (ce /*require*/,
 e /*exports*/,
 t /*tools_pb*/,
 i /*resolverService*/,
 w /*magicLinkService*/,
 E /*range*/,
 C /*simpleInlineDiffService*/,
 d /*markers*/,
 m /*arrays*/,
 r /*workspace*/,
 u /*commands*/,
 a /*codeAction*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$C8b = void 0);
				let h = class {
					constructor(n, g, p, o, f, b) {
						(this.a = n),
							(this.b = g),
							(this.c = p),
							(this.d = o),
							(this.e = f),
							(this.f = b);
					}
					async call(n, g, p, o) {}
					async finish(n, g, p, o) {
						if (!g)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						const f = await this.a.getMagicURIForText(g.relativeWorkspacePath);
						if (!f)
							throw new Error(
								`Could not find file ${g.relativeWorkspacePath} in the workspace.`,
							);
						const b = this.d.read({ resource: f });
						let s;
						try {
							s = await this.b.createModelReference(f);
							const y = s.object.textEditorModel
									.getValue()
									.split(s.object.textEditorModel.getEOL()),
								$ = g.lineNumber ?? 1,
								v = Math.max(0, $ - y.length),
								S = (0, m.$Vb)(v)
									.map(
										() => `
`,
									)
									.join("");
							let I = new E.$iL($ ?? 1, 1, ($ ?? 1) + g.replaceNumLines, 1);
							g.replaceWholeFile === !0 &&
								(I = s.object.textEditorModel.getFullModelRange());
							const T = s.object.textEditorModel.getEOL();
							s.object.textEditorModel.pushEditOperations(
								null,
								[{ range: I, text: S + g.newLines.map((A) => A + T).join("") }],
								() => null,
							),
								await new Promise((A) => {
									setTimeout(() => {
										A(void 0);
									}, 800);
								}),
								g.autoFixAllLinterErrorsInFile === !0 &&
									(this.f.executeCommand(a.$SAb, f),
									await new Promise((A) => {
										setTimeout(() => {
											A(void 0);
										}, 800);
									}));
							const k = this.d.read({ resource: f }),
								L = 10,
								D = Math.max(0, (g.lineNumber ?? 1) - L),
								M = Math.min(
									y.length,
									(g.lineNumber ?? 1) + g.newLines.length + L,
								),
								N = y.slice(D, M);
							return (
								s && s.dispose(),
								new t.$uz({
									feedback: k.map(
										(A) =>
											`${A.message} (lines ${A.startLineNumber}-${A.endLineNumber})` +
											(A.relatedInformation
												? `
` +
													A.relatedInformation
														.map(
															(R) =>
																`${R.message} (lines ${R.startLineNumber}-${R.endLineNumber})`,
														)
														.join(`
`)
												: ""),
									),
									contextStartLineNumber: D + 1,
									contextLines: N,
									file: g.relativeWorkspacePath,
									fileTotalLines: y.length,
									structuredFeedback: k.map(
										(A) =>
											new t.$wz({
												message: A.message,
												severity: d.MarkerSeverity.toString(A.severity),
												startLineNumber: A.startLineNumber,
												endLineNumber: A.endLineNumber,
												relatedInformation:
													A.relatedInformation?.map(
														(R) =>
															new t.$vz({
																message: R.message,
																startLineNumber: R.startLineNumber,
																endLineNumber: R.endLineNumber,
																relativeWorkspacePath: this.e.asRelativePath(
																	R.resource,
																),
															}),
													) ?? [],
											}),
									),
								})
							);
						} finally {
							s?.dispose();
						}
					}
				};
				(e.$C8b = h),
					(e.$C8b = h =
						Ne(
							[
								j(0, w.$q8b),
								j(1, i.$MO),
								j(2, C.$z8b),
								j(3, d.$aM),
								j(4, r.$Vi),
								j(5, u.$ek),
							],
							h,
						));
			},
		),
		