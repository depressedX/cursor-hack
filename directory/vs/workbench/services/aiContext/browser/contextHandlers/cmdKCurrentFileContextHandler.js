import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../base/common/event.js';
import '../../../ai/browser/simpleChunkingService.js';
import '../../../../../base/common/result.js';
import '../simpleSerialProcessor.js';
import '../../../../../base/common/resources.js';
import '../../../../contrib/notebook/common/notebookCommon.js';
import '../../../../contrib/notebook/common/notebookEditorModelResolverService.js';
define(
			de[3666],
			he([1, 0, 3, 42, 25, 6, 1038, 529, 1012, 19, 70, 509]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HZc = void 0);
				let h = class {
					constructor(n, g, p, o, f) {
						(this.a = n),
							(this.b = g),
							(this.c = p),
							(this.d = o),
							(this.f = f),
							(this.g = new AbortController()),
							(this.j = this.h()),
							(this.k = void 0),
							(this.m = void 0),
							(this.n = void 0),
							(this.o = void 0),
							(this.p = new t.$Zc()),
							(this.q = void 0),
							(this.s = void 0);
					}
					h() {
						return new m.$Dcc(
							(n) => this.t(n),
							this.g.signal,
							(n, g) =>
								!r.$dh.isEqual(n.notebookUri, g.notebookUri) ||
								!r.$dh.isEqual(n.uri, g.uri) ||
								n.replaceRange.endLineNumberExclusive !==
									g.replaceRange.endLineNumberExclusive ||
								n.replaceRange.startLineNumber !==
									g.replaceRange.startLineNumber ||
								n.modelVersion !== g.modelVersion,
							(n) => {
								this.a.error({
									message: "Error processing current file context.",
								});
							},
						);
					}
					async t(n) {
						if (n.aborted) return (0, d.Err)("retryableFailure");
						let g = [];
						const p = this.q,
							o = this.s,
							f = this.k?.object.textEditorModel,
							b = this.n?.object.notebook;
						if (
							p === void 0 ||
							o === void 0 ||
							((f === void 0 || f.isDisposed()) && b === void 0)
						)
							throw new Error(
								"IMPLEMENTATION ERROR: mode or intent is undefined!",
							);
						if (b !== void 0 && f !== void 0)
							this.buildImmediateContextAndSelectionNotebook(
								b,
								f,
								o.replaceRange,
								g,
								p,
							);
						else if (f !== void 0) {
							const l = this.buildImmediateContextTextFile(f, o.replaceRange);
							g.push({
								intent: p,
								item: { case: "cmdKImmediateContext", value: l },
							});
							const y = {
								intent: p,
								item: {
									case: "cmdKSelection",
									value: {
										lines: f
											.getValueInRange({
												startLineNumber: o.replaceRange.startLineNumber,
												startColumn: 1,
												endLineNumber:
													o.replaceRange.endLineNumberExclusive - 1,
												endColumn: f.getLineMaxColumn(
													o.replaceRange.endLineNumberExclusive - 1,
												),
											})
											.split(f.getEOL()),
										startLineNumber: o.replaceRange.startLineNumber,
									},
								},
							};
							g.push(y);
						} else
							throw new Error(
								"IMPLEMENTATION ERROR: mode or intent is undefined!",
							);
						return (await this.a.newItems(g)).ok()
							? (0, d.Ok)("success")
							: (0, d.Err)("retryableFailure");
					}
					buildImmediateContextAndSelectionNotebook(n, g, p, o, f) {
						const b = [];
						let s,
							l = 0,
							y = 0;
						const $ = [];
						for (const k of n.cells) {
							(y += 1),
								b.push(
									"",
									"",
									`# %% cell ${y} ${k.cellKind === u.CellKind.Code ? "code" : "markdown"}`,
									"",
								),
								r.$dh.isEqual(k.uri, g.uri) &&
									((l = y),
									(s = {
										startLineNumber: b.length + p.startLineNumber,
										endLineNumberExclusive: b.length + p.endLineNumberExclusive,
									})),
								k.cellKind === u.CellKind.Markup
									? b.push(
											...k.textBuffer.getLinesContent().map((D) => "# " + D),
										)
									: k.cellKind === u.CellKind.Code &&
										b.push(...k.textBuffer.getLinesContent());
							let L = k.outputs
								.map((D) =>
									D.outputs
										.map((N) => {
											if (N.mime === "text/plain") return N.data.toString();
											if (N.mime === "application/vnd.code.notebook.error") {
												const A = N.data.toString();
												let R = JSON.parse(A);
												const O = R.stack
													.replace(
														/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g,
														"",
													)
													.replace(/\u001b\[0/g, "");
												return (
													(R = { ...R, stack: O }), JSON.stringify(R, null, 2)
												);
											} else if (
												N.mime === "application/vnd.code.notebook.stderr"
											)
												return N.data.toString();
											return "";
										})
										.join(`

`),
								)
								.join(`

`);
							L.length > 1500 &&
								(L =
									L.slice(0, 500) +
									`
...output cropped...
` +
									L.slice(-1e3)),
								L.length > 0 &&
									$.push({
										relativeWorkspacePath: this.b.asRelativePath(n.uri),
										cellNumber: y,
										cellOutput: L,
									});
						}
						if (s === void 0)
							throw new Error("IMPLEMENTATION ERROR: newRange is undefined!");
						const v = Math.max(1, s.startLineNumber - 50),
							S = [];
						for (let k = v; k < s.startLineNumber; k++)
							S.push({ line: b[k - 1], lineNumber: k });
						const I = Math.min(b.length + 1, s.endLineNumberExclusive + 50);
						for (let k = s.endLineNumberExclusive; k < I; k++)
							S.push({ line: b[k - 1], lineNumber: k });
						const T = {
								lines: S,
								relativeWorkspacePath: this.b.asRelativePath(n.uri),
								totalNumberOfLinesInFile: b.length,
								cellNumber: l,
							},
							P = {
								lines: b.slice(
									s.startLineNumber - 1,
									s.endLineNumberExclusive - 1,
								),
								startLineNumber: s.startLineNumber,
							};
						o.push({
							intent: f,
							item: { case: "cmdKImmediateContext", value: T },
						}),
							o.push({ intent: f, item: { case: "cmdKSelection", value: P } }),
							o.push(
								...$.map((k) => ({
									intent: f,
									item: { case: "notebookCellOutput", value: k },
								})),
							);
					}
					buildImmediateContextTextFile(n, g) {
						const p = Math.max(1, g.startLineNumber - 50),
							o = [];
						for (let b = p; b < g.startLineNumber; b++)
							o.push({ line: n.getLineContent(b), lineNumber: b });
						const f = Math.min(
							n.getLineCount() + 1,
							g.endLineNumberExclusive + 50,
						);
						for (let b = g.endLineNumberExclusive; b < f; b++)
							o.push({ line: n.getLineContent(b), lineNumber: b });
						return {
							lines: o,
							relativeWorkspacePath: this.b.asRelativePath(n.uri),
							totalNumberOfLinesInFile: n.getLineCount(),
							cellNumber: void 0,
						};
					}
					update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(n, g) {
						(this.q = g),
							(this.s = n),
							this.process({ runEvenIfAlreadyProcessing: !1 });
					}
					async process(n) {
						if (this.g.signal.aborted || this.q === void 0 || this.s === void 0)
							return;
						const g = this.s.fileUri,
							p = u.CellUri.parse(g)?.notebook;
						if (p !== void 0) {
							const o = await this.c.createModelReference(g);
							this.k?.dispose(), this.m?.dispose(), (this.k = o);
							const f = await this.f.resolve(p);
							this.o?.dispose(),
								this.n?.dispose(),
								(this.n = f),
								(this.o = E.Event.defer(
									this.n.object.notebook.onDidChangeContent.bind(
										this.n.object.notebook,
									),
									this.p,
								)(() => {
									const b = this.s?.replaceRange;
									b !== void 0 &&
										this.j.process({
											state: {
												uri: g,
												notebookUri: p,
												modelVersion: this.n?.object.notebook.versionId ?? 0,
												replaceRange: { ...b },
											},
											runEvenIfAlreadyProcessing: !1,
										});
								}));
						} else if (g !== this.k?.object.textEditorModel.uri) {
							this.n?.dispose(), this.o?.dispose();
							const o = await this.c.createModelReference(g);
							this.m?.dispose(),
								this.k?.dispose(),
								(this.k = o),
								(this.m = E.Event.defer(
									this.k.object.textEditorModel.onDidChangeContent.bind(
										this.k.object.textEditorModel,
									),
									this.p,
								)(() => {
									const f = this.s?.replaceRange;
									f !== void 0 &&
										this.j.process({
											state: {
												uri: g,
												notebookUri: void 0,
												modelVersion:
													this.k?.object.textEditorModel.getVersionId() ?? 0,
												replaceRange: { ...f },
											},
											runEvenIfAlreadyProcessing: !1,
										});
								}));
						}
						await this.j.process({
							runEvenIfAlreadyProcessing: n.runEvenIfAlreadyProcessing,
							state: {
								uri: g,
								notebookUri: p,
								modelVersion:
									this.k?.object.textEditorModel.getVersionId() ??
									this.n?.object.notebook.versionId ??
									0,
								replaceRange: { ...this.s.replaceRange },
							},
						});
					}
					async blockForFinalInput(n, g) {
						return (
							(this.q = g),
							(this.s = n),
							await this.process({ runEvenIfAlreadyProcessing: !0 }),
							"useFreshItemsEvenIfNotRerankedYet"
						);
					}
					freeze() {
						this.g.abort();
					}
					unfreeze() {
						(this.g = new AbortController()), (this.j = this.h());
					}
					dispose() {
						this.g.abort(),
							this.p.dispose(),
							this.m?.dispose(),
							this.k?.dispose(),
							this.o?.dispose(),
							this.n?.dispose();
					}
				};
				(e.$HZc = h),
					(e.$HZc = h =
						Ne([j(1, w.$Vi), j(2, i.$MO), j(3, C.$L8b), j(4, a.$OIb)], h));
			},
		),
		