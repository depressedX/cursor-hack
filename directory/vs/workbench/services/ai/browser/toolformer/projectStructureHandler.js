define(de[3665], he([1, 0, 124, 25, 1038]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$M8b = void 0);
			let E = class {
				constructor(d, m) {
					(this.a = d), (this.b = m);
				}
				async call(d, m, r, u) {}
				async finish(d, m, r, u) {
					const a = [];
					for await (const h of this.a.getWorkspaceOutline())
						a.push(
							new t.$6y({
								relativeWorkspacePath: h.relativeWorkspacePath,
								outline: h.outline,
							}),
						);
					return new t.$5y({
						rootWorkspacePath: this.b.getWorkspace().folders[0].uri.path,
						files: a,
					});
				}
			};
			(e.$M8b = E), (e.$M8b = E = Ne([j(0, w.$L8b), j(1, i.$Vi)], E));
		}),
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
		define(
			de[3667],
			he([1, 0, 228, 3, 42, 25, 6, 1038, 529, 1012, 19]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
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
		define(
			de[1876],
			he([1, 0, 228, 3, 42, 25, 1038, 529, 1012, 9, 107, 400]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PZc = void 0);
				let h = class {
					constructor(n, g, p, o, f, b) {
						(this.a = n),
							(this.b = g),
							(this.c = p),
							(this.d = o),
							(this.f = f),
							(this.g = b),
							(this.h = new AbortController()),
							(this.j = this.i()),
							(this.k = void 0),
							(this.l = new i.$Zc()),
							(this.m = void 0),
							(this.n = void 0),
							(this.p = 0);
					}
					i() {
						return new m.$Dcc(
							(n) => this.o(n),
							this.h.signal,
							(n, g) =>
								n.instanceId !== g.instanceId ||
								n.updateCounter !== g.updateCounter,
							(n) => {
								this.a.error({ message: "Error processing terminal context." });
							},
						);
					}
					async o(n) {
						if (n.aborted) return (0, d.Err)("retryableFailure");
						const g = this.m,
							p = this.k;
						if (g === void 0 || p === void 0 || p.isDisposed)
							throw new Error(
								"Bad (but not totally unexpected until we have a nonhacky version in place here): instance seems to be disposed!",
							);
						let o = [],
							f = "";
						const b = p.xterm;
						if (b) {
							const $ = g.intent.value.activeForCmdK
								? b.getBufferReverseIteratorFromCursor()
								: b.getBufferReverseIterator();
							for (const v of $)
								if (
									((f =
										v +
										`
` +
										f),
									f.length > 1e4)
								)
									break;
						}
						const s = await p.getCwd(),
							l = r.URI.file(s);
						return (
							(o = [
								{
									intent: this.m,
									item: {
										case: "terminalHistory",
										value: {
											history: f,
											cwdFull: s,
											cwdRelativeWorkspacePath: this.b.asRelativePath(l),
											activeForCmdK: g.intent.value.activeForCmdK ?? !1,
											timestampDouble: this.g.getTimeOfLastTerminalCommand(),
										},
									},
								},
							]),
							(await this.a.newItems(o)).ok()
								? (0, d.Ok)("success")
								: (0, d.Err)("retryableFailure")
						);
					}
					update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(n, g) {
						(this.m = g),
							(this.n = n),
							this.process({ runEvenIfAlreadyProcessing: !1 });
					}
					async process(n) {
						this.h.signal.aborted ||
							this.m === void 0 ||
							this.n === void 0 ||
							((this.m.intent.value.instanceId !== this.k?.instanceId ||
								(this.k === void 0 &&
									this.m.intent.value.useActiveInstanceAsFallback)) &&
								(this.m.intent.value.instanceId === void 0 &&
								this.m.intent.value.useActiveInstanceAsFallback
									? (this.k = this.f.getActiveInstance())
									: (this.k = this.f.getInstanceFromId(
											this.m.intent.value.instanceId,
										))),
							n.runEvenIfAlreadyProcessing && this.p++,
							await this.j.process({
								runEvenIfAlreadyProcessing: n.runEvenIfAlreadyProcessing,
								state: {
									instanceId: this.m.intent.value.instanceId,
									updateCounter: this.p,
								},
							}));
					}
					async blockForFinalInput(n, g) {
						return (
							(this.m = g),
							(this.n = n),
							g.type === t.ContextIntent_Type.AUTOMATIC &&
							g.intent.value.activeForCmdK !== !0
								? "fallBackToCachedReranked"
								: (await this.process({ runEvenIfAlreadyProcessing: !0 }),
									"useFreshItemsEvenIfNotRerankedYet")
						);
					}
					freeze() {
						this.h.abort();
					}
					unfreeze() {
						(this.h = new AbortController()), (this.j = this.i());
					}
					dispose() {
						this.h.abort(), this.l.dispose();
					}
				};
				(e.$PZc = h),
					(e.$PZc = h =
						Ne(
							[
								j(1, E.$Vi),
								j(2, w.$MO),
								j(3, C.$L8b),
								j(4, u.$iIb),
								j(5, a.$26b),
							],
							h,
						));
			},
		),
		define(
			de[3668],
			he([1, 0, 42, 25, 1876, 5, 47]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QZc = void 0);
				let d = class {
					constructor(r, u, a, h) {
						(this.a = r),
							(this.b = u),
							(this.c = a),
							(this.d = h),
							(this.e = new AbortController()),
							(this.f = void 0),
							(this.g = void 0),
							(this.h = []),
							(this.i = []);
					}
					async processItems() {
						return await this.a.newItems([...this.h, ...this.i]);
					}
					async process(r, u) {
						if (this.e.signal.aborted) return;
						const a = [
							{
								intent: u,
								item: { case: "terminalCmdKQuery", value: { query: r.query } },
							},
						];
						r.queryHistory &&
							a.push({
								intent: u,
								item: {
									case: "terminalCmdKQueryHistory",
									value: r.queryHistory,
								},
							}),
							r.chatHistory &&
								a.push({
									intent: u,
									item: {
										case: "chatHistory",
										value: { ...r.chatHistory, activeForCmdK: !0 },
									},
								}),
							(this.h = a),
							await this.processItems();
					}
					update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(r, u) {
						this.process(r, u),
							this.f === void 0 &&
								((this.f = this.d.createInstance(w.$PZc, {
									...this.a,
									newItems: (a) => ((this.i = a), this.processItems()),
								})),
								(this.g = (0, C.$9g)())),
							this.f.update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(r, {
								type: u.type,
								uuid: this.g,
								intent: {
									case: "terminalHistory",
									value: { instanceId: r.instanceId, activeForCmdK: !0 },
								},
							});
					}
					async blockForFinalInput(r, u) {
						return (
							this.f === void 0 &&
								((this.f = this.d.createInstance(w.$PZc, {
									...this.a,
									newItems: (a) => ((this.i = a), this.processItems()),
								})),
								(this.g = (0, C.$9g)())),
							await Promise.all([
								this.process(r, u),
								this.f.blockForFinalInput(r, {
									type: u.type,
									uuid: this.g,
									intent: {
										case: "terminalHistory",
										value: { instanceId: r.instanceId, activeForCmdK: !0 },
									},
								}),
							]),
							"useFreshItemsEvenIfNotRerankedYet"
						);
					}
					freeze() {
						this.e.abort(), this.f?.freeze();
					}
					unfreeze() {
						(this.e = new AbortController()), this.f?.unfreeze();
					}
					dispose() {
						this.e.abort(), this.f?.dispose();
					}
				};
				(e.$QZc = d),
					(e.$QZc = d = Ne([j(1, i.$Vi), j(2, t.$MO), j(3, E.$Li)], d));
			},
		),
		define(
			de[3669],
			he([1, 0, 6, 3, 162, 171, 74]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uyc = void 0);
				class d extends i.$1c {
					constructor(r, u, a, h, c, n, g) {
						super(),
							(this.c = r),
							(this.f = u),
							(this.g = a),
							(this.h = h),
							(this.j = c),
							(this.m = n),
							(this.n = g),
							(this.a = []),
							(this.b = this.D(new t.$re())),
							(this.onDidEncounterLanguage = this.b.event);
					}
					get backgroundTokenizerShouldOnlyVerifyTokens() {
						return this.j();
					}
					getInitialState() {
						return this.f;
					}
					tokenize(r, u, a) {
						throw new Error("Not supported!");
					}
					createBackgroundTokenizer(r, u) {
						if (this.h) return this.h(r, u);
					}
					tokenizeEncoded(r, u, a) {
						const h = Math.random() * 1e4 < 1,
							c = this.n || h,
							n = c ? new w.$le(!0) : void 0,
							g = this.c.tokenizeLine2(r, a, 500);
						if (c) {
							const o = n.elapsed();
							(h || o > 32) && this.m(o, r.length, h);
						}
						if (g.stoppedEarly)
							return (
								console.warn(
									`Time limit reached when tokenizing line: ${r.substring(0, 100)}`,
								),
								new C.$dM(g.tokens, a)
							);
						if (this.g) {
							const o = this.a,
								f = g.tokens;
							for (let b = 0, s = f.length >>> 1; b < s; b++) {
								const l = f[(b << 1) + 1],
									y = E.$2L.getLanguageId(l);
								o[y] || ((o[y] = !0), this.b.fire(y));
							}
						}
						let p;
						return (
							a.equals(g.ruleStack) ? (p = a) : (p = g.ruleStack),
							new C.$dM(g.tokens, p)
						);
					}
				}
				e.$uyc = d;
			},
		),
		