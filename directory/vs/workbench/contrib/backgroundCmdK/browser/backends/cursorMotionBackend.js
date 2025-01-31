import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../utils/duplicateAsyncIterable.js';
import '../../../../services/ai/browser/aiService.js';
define(
			de[3949],
			he([1, 0, 148, 83, 3, 42, 25, 1234, 118]),
			function (ce /*require*/,
 e /*exports*/,
 t /*aiserver_pb*/,
 i /*utils_pb*/,
 w /*lifecycle*/,
 E /*resolverService*/,
 C /*workspace*/,
 d /*duplicateAsyncIterable*/,
 m /*aiService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$o7b = void 0);
				let r = class extends w.$1c {
					constructor(a, h, c) {
						super(), (this.a = a), (this.b = h), (this.c = c);
					}
					async run(a, h, c) {
						const n = await this.f(a),
							g = h.abortController;
						if (n === void 0) return;
						const o = (await this.a.aiClient()).streamCursorMotion(n, {
								signal: g.signal,
							}),
							f = (0, d.$j7b)(o),
							b = new Promise((l) => {
								const y = f();
								(async () => {
									let v = "";
									for await (const S of y) S && (v += S.text);
									l(v);
								})();
							});
						async function* s(l) {
							for await (const y of l) y && (yield y.text);
						}
						return { stream: s(f()), finalResultPromise: b };
					}
					async f(a) {
						const h = a.getRangeToGenerate();
						if (h === null) return;
						let c, n;
						const g = await this.b.createModelReference(a.uri);
						try {
							const f = g.object.textEditorModel;
							(c = new i.$Ws({
								relativeWorkspacePath: this.c.asRelativePath(a.uri),
								contents: f.getValue(),
								cursorPosition: { line: h.startLineNumber, column: 1 },
							})),
								(n = {
									startLineNumber: h.startLineNumber,
									startColumn: 1,
									endLineNumberInclusive: h.endLineNumber,
									endColumn: f.getLineMaxColumn(h.endLineNumber),
								});
						} finally {
							g.dispose();
						}
						const p = new i.$Zs({ modelName: "gpt-4" });
						return new t.$hE({
							currentFileInfo: c,
							selectionRange: n,
							modelDetails: p,
							instruction: a.getInstruction(),
						});
					}
				};
				(e.$o7b = r),
					(e.$o7b = r = Ne([j(0, m.$Nfc), j(1, E.$MO), j(2, C.$Vi)], r));
			},
		)
