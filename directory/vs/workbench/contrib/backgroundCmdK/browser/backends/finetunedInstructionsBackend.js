import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../services/ai/browser/aiService.js';
import '../../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../utils/duplicateAsyncIterable.js';
define(
			de[3950],
			he([1, 0, 3, 42, 25, 118, 148, 83, 280, 134, 1234]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*resolverService*/,
 w /*workspace*/,
 E /*aiService*/,
 C /*aiserver_pb*/,
 d /*utils_pb*/,
 m /*aiEverythingProviderService*/,
 r /*reactiveStorageTypes*/,
 u /*duplicateAsyncIterable*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$p7b = void 0);
				let a = class extends t.$1c {
					constructor(c, n, g, p) {
						super(), (this.a = c), (this.b = n), (this.c = g), (this.f = p);
					}
					async buildRequest(c, n) {
						const g = c.getRangeToGenerate();
						if (g === null) return;
						let p, o;
						const f = await this.b.createModelReference(c.uri);
						try {
							const l = f.object.textEditorModel;
							(p = new d.$Ws({
								relativeWorkspacePath: this.a.asRelativePath(c.uri),
								contents: l.getValue(),
							})),
								(o = {
									startLineNumber: g.startLineNumber,
									startColumn: 1,
									endLineNumberInclusive: g.endLineNumber,
									endColumn: l.getLineMaxColumn(g.endLineNumber),
								});
						} finally {
							f.dispose();
						}
						const b = await this.f.onlyLocalProvider?.runCommand(
							r.EditHistoryActions.CompileGlobalDiffTrajectories,
							{},
						);
						return new C.$jE({
							instruction: c.getInstruction(),
							currentFile: p,
							selectionRange: o,
							type: n,
							diffHistory: b,
						});
					}
					async run(c, n) {
						const g = await this.buildRequest(
							c,
							C.BackgroundCmdKRequest_Type.FINETUNED_INSTRUCTIONS,
						);
						if (g === void 0 || g.currentFile === void 0) return;
						const p = n.abortController,
							f = (await this.c.aiClient()).backgroundCmdK(g, {
								signal: p.signal,
							}),
							b = (0, u.$j7b)(f),
							s = new Promise((y) => {
								const $ = b();
								(async () => {
									let S = "";
									for await (const I of $) I && (S += I.proposedChange);
									y(S);
								})();
							});
						async function* l(y) {
							for await (const $ of y) $ && (yield $.proposedChange);
						}
						return { stream: l(b()), finalResultPromise: s };
					}
				};
				(e.$p7b = a),
					(e.$p7b = a =
						Ne([j(0, w.$Vi), j(1, i.$MO), j(2, E.$Nfc), j(3, m.$3Db)], a));
			},
		),
		