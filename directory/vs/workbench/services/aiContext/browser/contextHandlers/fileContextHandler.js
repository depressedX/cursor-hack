import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/context_pb.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../base/common/event.js';
import '../../../ai/browser/simpleChunkingService.js';
import '../../../../../base/common/result.js';
import '../simpleSerialProcessor.js';
import '../../../../../base/common/resources.js';
define(
			de[3667],
			he([1, 0, 228, 3, 42, 25, 6, 1038, 529, 1012, 19]),
			function (ce /*require*/,
 e /*exports*/,
 t /*context_pb*/,
 i /*lifecycle*/,
 w /*resolverService*/,
 E /*workspace*/,
 C /*event*/,
 d /*simpleChunkingService*/,
 m /*result*/,
 r /*simpleSerialProcessor*/,
 u /*resources*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OZc = void 0);
				let a = class {
					constructor(c, n, g, p) {
						(this.c = c),
							(this.d = n),
							(this.f = g),
							(this.g = p),
							(this.h = new AbortController()),
							(this.k = this.j()),
							(this.l = void 0),
							(this.m = void 0),
							(this.n = new i.$Zc()),
							(this.o = void 0),
							(this.p = void 0),
							(this.s = void 0);
					}
					j() {
						return new r.$Dcc(
							(c) => this.q(c),
							this.h.signal,
							(c, n) =>
								!u.$dh.isEqual(c.uri, n.uri) ||
								c.mode !== n.mode ||
								c.modelVersion !== n.modelVersion,
							(c) => {
								this.c.error({ message: "Error processing file context." });
							},
						);
					}
					async q(c) {
						if (c.aborted) return (0, m.Err)("retryableFailure");
						const n = this.s,
							g = this.o,
							p = this.l?.object.textEditorModel;
						if (n === void 0 || g === void 0 || p === void 0 || p.isDisposed())
							throw new Error(
								"IMPLEMENTATION ERROR: mode or intent is undefined!",
							);
						let o = [];
						switch (this.s) {
							case t.ContextIntent_File_Mode.FULL:
								o = [
									{
										intent: this.o,
										item: {
											case: "fileChunk",
											value: {
												relativeWorkspacePath:
													g.intent.value.relativeWorkspacePath,
												chunkContents: p.getValue(),
												startLineNumber: 1,
											},
										},
									},
								];
								break;
							case t.ContextIntent_File_Mode.CHUNKS: {
								const b = await this.g.getChunks(
									g.intent.value.relativeWorkspacePath,
								);
								if (
									b.length === 0 ||
									b.reduce((s, l) => s + l.contents.length, 0) / b.length > 1e4
								) {
									const s = p.getLineCount(),
										l = 50;
									for (let y = 0; y < s; y += l)
										b.push({
											path: g.intent.value.relativeWorkspacePath,
											fileOutline: "",
											contents: p.getValueInRange({
												startLineNumber: y + 1,
												endLineNumber: Math.min(y + l, s),
												startColumn: 1,
												endColumn: p.getLineMaxColumn(Math.min(y + l, s)),
											}),
										});
								}
								o = b.map((s) => ({
									intent: this.o,
									item: {
										case: "fileChunk",
										value: {
											relativeWorkspacePath:
												g.intent.value.relativeWorkspacePath,
											chunkContents: s.contents,
											startLineNumber: 1,
										},
									},
								}));
								break;
							}
							case t.ContextIntent_File_Mode.OUTLINE: {
								let b = await this.g.getLanguageModelOutline(
									g.intent.value.relativeWorkspacePath,
								);
								b || (b = "<no outline available>"),
									(o = [
										{
											intent: this.o,
											item: {
												case: "outlineChunk",
												value: {
													relativeWorkspacePath:
														g.intent.value.relativeWorkspacePath,
													contents: b,
													fullRange: {
														startLineNumber: 1,
														endLineNumberInclusive: p.getLineCount(),
													},
												},
											},
										},
									]);
								break;
							}
							default:
								throw new Error("IMPLEMENTATION ERROR: Unknown mode!");
						}
						return (await this.c.newItems(o)).ok()
							? (0, m.Ok)("success")
							: (0, m.Err)("retryableFailure");
					}
					setMode() {
						this.o?.intent.value.mode === t.ContextIntent_File_Mode.UNSPECIFIED
							? (this.s =
									(this.l?.object.textEditorModel.getValueLength() ?? 0) > 1e4
										? t.ContextIntent_File_Mode.CHUNKS
										: t.ContextIntent_File_Mode.FULL)
							: (this.s = this.o?.intent.value.mode);
					}
					update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(c, n) {
						(this.o = n),
							(this.p = c),
							this.process({ runEvenIfAlreadyProcessing: !1 });
					}
					async process(c) {
						if (this.h.signal.aborted || this.o === void 0 || this.p === void 0)
							return;
						const n = this.d.resolveRelativePath(
							this.o.intent.value.relativeWorkspacePath,
						);
						if (n !== this.l?.object.textEditorModel.uri) {
							const g = await this.f.createModelReference(n);
							this.l?.dispose(),
								this.m?.dispose(),
								(this.l = g),
								(this.m = C.Event.defer(
									this.l.object.textEditorModel.onDidChangeContent.bind(
										this.l.object.textEditorModel,
									),
									this.n,
								)(() => {
									this.setMode(),
										this.k.process({
											state: {
												uri: n,
												mode: this.s ?? t.ContextIntent_File_Mode.FULL,
												modelVersion:
													this.l?.object.textEditorModel.getVersionId() ?? 0,
											},
											runEvenIfAlreadyProcessing: !1,
										});
								}));
						}
						this.setMode(),
							await this.k.process({
								runEvenIfAlreadyProcessing: c.runEvenIfAlreadyProcessing,
								state: {
									uri: n,
									mode: this.s ?? t.ContextIntent_File_Mode.FULL,
									modelVersion:
										this.l?.object.textEditorModel.getVersionId() ?? 0,
								},
							});
					}
					async blockForFinalInput(c, n) {
						return (
							(this.o = n),
							(this.p = c),
							n.type === t.ContextIntent_Type.AUTOMATIC
								? "fallBackToCachedReranked"
								: (await this.process({ runEvenIfAlreadyProcessing: !0 }),
									"useFreshItemsEvenIfNotRerankedYet")
						);
					}
					freeze() {
						this.h.abort();
					}
					unfreeze() {
						(this.h = new AbortController()), (this.k = this.j());
					}
					dispose() {
						this.h.abort(),
							this.n.dispose(),
							this.m?.dispose(),
							this.l?.dispose();
					}
				};
				(e.$OZc = a),
					(e.$OZc = a = Ne([j(1, E.$Vi), j(2, w.$MO), j(3, d.$L8b)], a));
			},
		),
		