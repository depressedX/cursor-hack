define(de[3946], he([1, 0, 1930]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			const t = !0;
		}),
		define(
			de[3947],
			he([
				1, 0, 3, 42, 25, 118, 148, 83, 280, 134, 1234, 245, 126, 19, 226, 626,
				454, 901,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$m7b = void 0);
				let f = class extends t.$1c {
					constructor(s, l, y, $, v, S, I) {
						super(),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.n = S),
							(this.q = I);
					}
					async buildRequest(s, l) {
						const y = s.getRangeToGenerate();
						if (y === null) return;
						let $, v;
						const S = await this.f.createModelReference(s.uri);
						try {
							const L = S.object.textEditorModel;
							($ = new d.$Ws({
								relativeWorkspacePath: this.c.asRelativePath(s.uri),
								contents: L.getValue(),
							})),
								(v = {
									startLineNumber: y.startLineNumber,
									startColumn: 1,
									endLineNumberInclusive: y.endLineNumber,
									endColumn: L.getLineMaxColumn(y.endLineNumber),
								});
						} finally {
							S.dispose();
						}
						const I = await this.h.onlyLocalProvider?.runCommand(
								r.EditHistoryActions.CompileGlobalDiffTrajectories,
								{},
							),
							T = await this.getRecentlyViewedFiles(),
							P = this.formatRecentChangesAsDiff(l.recentModelStates);
						return new C.$jE({
							instruction: s.getInstruction(),
							currentFile: $,
							selectionRange: v,
							type:
								l.multipleCompletions === "chat and apply"
									? C.BackgroundCmdKRequest_Type.CHAT_AND_APPLY_UNDERSPECIFIED
									: C.BackgroundCmdKRequest_Type.UNSPECIFIED,
							diffHistory: I,
							recentlyViewedFiles: T,
							recentDiffs: P,
							multipleCompletions:
								l.multipleCompletions === "chat and apply" ||
								l.multipleCompletions === "immediately output",
						});
					}
					formatRecentChangesAsDiff(s) {
						const l = [];
						for (const [y, $] of s.entries()) {
							if (y.trim() === "" || $.length < 2) continue;
							const v = $.sort((k, L) => k.editedAt - L.editedAt),
								S = v[0].content,
								I = v[v.length - 1].content,
								T = (0, o.$gqb)(S, I);
							let P = [];
							T.forEach((k, L) => {
								const D = k.added ? "+" : k.removed ? "-" : " ",
									M = k.value
										.split(`
`)
										.slice(0, -1)
										.map((N) => `${D}${N}`);
								k.added || k.removed
									? P.push(
											M.join(`
`),
										)
									: L === 0
										? P.push(
												M.slice(-3).join(`
`),
											)
										: L === T.length - 1
											? P.push(
													M.slice(0, 3).join(`
`),
												)
											: M.length < 6
												? P.push(
														M.join(`
`),
													)
												: (P.push(
														M.slice(0, 3).join(`
`),
													),
													P.push("..."),
													P.push(
														M.slice(-3).join(`
`),
													));
							}),
								l.push(
									new C.$rE({
										relativeWorkspacePath: y,
										diff: P.join(`
`),
									}),
								);
						}
						return l;
					}
					async getRecentlyViewedFiles() {
						const s = this.j.getRecentLocations(),
							l = new Map();
						for (const [y, $] of s.entries()) {
							const v = this.c.asRelativePath($.uri);
							if (!l.has(v)) {
								const I = await this.f.createModelReference($.uri);
								let T = "";
								try {
									T = I.object.textEditorModel.getValue();
								} finally {
									I.dispose();
								}
								l.set(
									v,
									new C.$pE({
										relativeWorkspacePath: v,
										contents: T,
										visibleRanges: [],
									}),
								);
							}
							let S = l.get(v);
							if (S) {
								const I = new C.$qE({
									startLineNumberInclusive: $.location.startLineNumber,
									endLineNumberExclusive: $.location.endLineNumber + 1,
									globalOrderDescending: y,
								});
								S.visibleRanges.push(I);
							}
						}
						return Array.from(l.values());
					}
					async generate(s, l) {
						const $ = (await this.g.aiClient()).backgroundCmdK(s, {
							signal: l.signal,
						});
						let v = [];
						for await (const I of $) v.push(I.proposedChange);
						let S = v;
						return (
							s.type === C.BackgroundCmdKRequest_Type.LOOP_ON_LINTS &&
								(S = await this.loopOnLints(s, v)),
							S
						);
					}
					async getLints(s, l) {
						const y = s.currentFile?.contents
								.split(`
`)
								.slice(0, (s.selectionRange?.startLineNumber ?? 1) - 1)
								.join(`
`),
							$ = s.currentFile?.contents
								.split(`
`)
								.slice((s.selectionRange?.endLineNumberInclusive ?? 1) - 1)
								.join(`
`),
							v =
								y +
								`
` +
								l +
								`
` +
								$;
						return [
							(
								await (
									await this.q.getClient()
								).getLintsForChange(
									new p.$tx({
										files: [
											{
												relativeWorkspacePath:
													s.currentFile?.relativeWorkspacePath,
												initialContent: s.currentFile?.contents,
												finalContent: v,
											},
										],
									}),
								)
							).lints,
							v,
						];
					}
					async loopOnLints(s, l) {
						const [y, $] = await this.getLints(s, l[0]);
						if (y.length === 0) return l;
						const v = l[0],
							S = new C.$jE({
								instruction: s.instruction,
								currentFile: new d.$Ws({
									relativeWorkspacePath: s.currentFile?.relativeWorkspacePath,
									contents: $,
								}),
								selectionRange: {
									startLineNumber: s.selectionRange?.startLineNumber ?? 1,
									startColumn: 1,
									endLineNumberInclusive:
										(s.selectionRange?.startLineNumber ?? 1) +
										v.split(`
`).length,
									endColumn: 1,
								},
								type: C.BackgroundCmdKRequest_Type.LOOP_ON_LINTS,
								proposedChangeHistory: [{ change: v, linterErrors: y }],
							}),
							T = (await this.g.aiClient()).backgroundCmdK(S);
						let P = [];
						for await (const k of T) P.push(k.proposedChange);
						return P;
					}
					async *generateSingleRequest(s, l) {
						const y = await this.buildRequest(s, l);
						if (y === void 0 || y.currentFile === void 0) return;
						const $ = await this.generate(y, l.abortController);
						for (const v of $) yield v;
					}
					async *generateRequests(s, l) {
						const y = [
								C.BackgroundCmdKRequest_Type.LOOP_ON_LINTS,
								C.BackgroundCmdKRequest_Type.UNSPECIFIED,
								C.BackgroundCmdKRequest_Type.REFLECT,
								C.BackgroundCmdKRequest_Type.CHAT_AND_APPLY_UNDERSPECIFIED,
								C.BackgroundCmdKRequest_Type.CODEBASE_CHUNKS,
								C.BackgroundCmdKRequest_Type.SPEC_AND_APPLY,
							],
							$ = await this.buildRequest(s, l);
						if ($ === void 0 || $.currentFile === void 0) return;
						const v = new Map();
						for (const S of y) {
							let I = new C.$jE({ ...$, type: S });
							if (S === C.BackgroundCmdKRequest_Type.CODEBASE_CHUNKS) {
								const T = I.currentFile?.contents
										.split(`
`)
										.slice(
											(I.selectionRange?.startLineNumber ?? 1) - 1,
											I.selectionRange?.endLineNumberInclusive ?? 1,
										)
										.join(`
`),
									P = await this.getCodebaseChunks(
										I.instruction,
										T,
										I.currentFile?.relativeWorkspacePath ?? "",
									);
								if (P === void 0) continue;
								I.relatedCodeBlocks = P;
							}
							v.set(
								S,
								this.generate(I, l.abortController).then((T) => ({
									type: S,
									results: T,
								})),
							);
						}
						for (; v.size > 0; ) {
							const { type: S, results: I } = await Promise.race(
								Array.from(v.values()),
							);
							if (I !== void 0) for (const T of I) console.log(S, T), yield T;
							v.delete(S);
						}
					}
					async run(s, l) {
						let y;
						l.multipleCompletions === "chat and apply" ||
						l.multipleCompletions === "immediately output"
							? (y = this.generateSingleRequest(s, l))
							: (y = this.generateRequests(s, l));
						const $ = (0, u.$j7b)(y),
							v = new Promise((I) => {
								const T = $();
								(async () => {
									let k = "";
									for await (const L of T)
										if (L) {
											k += L;
											break;
										}
									I(k);
								})();
							});
						async function* S(I) {
							for await (const T of I) T && (yield T);
						}
						return { finalResultPromise: v, alternativesStream: S($()) };
					}
					async getCodebaseChunks(s, l, y) {
						let $ = `${s}

Please make sure to mention any files or code blocks that seem potentially relevant.`;
						if (l !== void 0 && l.trim() !== "") {
							const k = "```\n" + l + "\n```";
							$ = `${s}
Here is the code I'm looking at:
${k}

Please make sure to mention any files or code blocks that seem potentially relevant.`;
						}
						const v = [
								new h.$SA({
									type: h.ConversationMessage_MessageType.HUMAN,
									text: $,
								}),
							]
								.map((k, L) => (k.text !== "" ? k.text : null))
								.filter((k) => k !== null)
								.join(`
`),
							S = { topK: 100, minK: 20, finalK: 200 },
							I = [{ text: v, globsNewLineSeparated: "" }],
							P = (await this.n.searchMultipleQueries(I, S))
								.map((k) => k.codeBlock)
								.filter(
									(k) =>
										k !== void 0 &&
										k.contents.length < 2e4 &&
										!c.$dh.isEqual(
											this.c.resolveRelativePath(k.relativeWorkspacePath),
											this.c.resolveRelativePath(y),
										),
								);
						if (P.length !== 0) return P;
					}
				};
				(e.$m7b = f),
					(e.$m7b = f =
						Ne(
							[
								j(0, w.$Vi),
								j(1, i.$MO),
								j(2, E.$Nfc),
								j(3, m.$3Db),
								j(4, a.$Feb),
								j(5, n.$J6b),
								j(6, g.$k7b),
							],
							f,
						));
			},
		),
		define(
			de[3948],
			he([1, 0, 3, 42, 25, 118, 148, 83, 626, 454, 226, 126, 19, 280, 134, 33]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n7b = void 0);
				let p = class extends t.$1c {
					constructor(f, b, s, l, y, $) {
						super(),
							(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.h = $);
					}
					async generate(f, b) {
						const l = (await this.c.aiClient()).backgroundCmdK(f, {
							signal: b.signal,
						});
						let y = "";
						for await (const v of l) y += v.proposedChange;
						let $ = y;
						return (
							f.type === C.BackgroundCmdKRequest_Type.LOOP_ON_LINTS
								? ($ = await this.loopOnLints(f, y))
								: f.type === C.BackgroundCmdKRequest_Type.ASK_CODEBASE &&
									($ = await this.askCodebase(f, y)),
							$
						);
					}
					async buildRequest(f, b) {
						const s = f.getRangeToGenerate();
						if (s === null) return;
						let l, y;
						const $ = await this.b.createModelReference(f.uri);
						try {
							const I = $.object.textEditorModel;
							(l = new d.$Ws({
								relativeWorkspacePath: this.a.asRelativePath(f.uri),
								contents: I.getValue(),
							})),
								(y = {
									startLineNumber: s.startLineNumber,
									startColumn: 1,
									endLineNumberInclusive: s.endLineNumber,
									endColumn: I.getLineMaxColumn(s.endLineNumber),
								});
						} finally {
							$.dispose();
						}
						const v = await this.h.onlyLocalProvider?.runCommand(
							n.EditHistoryActions.CompileGlobalDiffTrajectories,
							{},
						);
						return new C.$jE({
							instruction: f.getInstruction(),
							currentFile: l,
							selectionRange: y,
							type: b,
							diffHistory: v,
						});
					}
					async getLints(f, b) {
						const s = f.currentFile?.contents
								.split(`
`)
								.slice(0, (f.selectionRange?.startLineNumber ?? 1) - 1)
								.join(`
`),
							l = f.currentFile?.contents
								.split(`
`)
								.slice((f.selectionRange?.endLineNumberInclusive ?? 1) - 1)
								.join(`
`),
							y =
								s +
								`
` +
								b +
								`
` +
								l;
						return [
							(
								await (
									await this.f.getClient()
								).getLintsForChange(
									new r.$tx({
										files: [
											{
												relativeWorkspacePath:
													f.currentFile?.relativeWorkspacePath,
												initialContent: f.currentFile?.contents,
												finalContent: y,
											},
										],
									}),
								)
							).lints,
							y,
						];
					}
					async run(f, b) {
						const s = [
								C.BackgroundCmdKRequest_Type.LOOP_ON_LINTS,
								C.BackgroundCmdKRequest_Type.UNSPECIFIED,
								C.BackgroundCmdKRequest_Type.REFLECT,
								C.BackgroundCmdKRequest_Type.CHAT_AND_APPLY,
								C.BackgroundCmdKRequest_Type.CODEBASE_CHUNKS,
								C.BackgroundCmdKRequest_Type.SPEC_AND_APPLY,
								C.BackgroundCmdKRequest_Type.ASK_CODEBASE,
								C.BackgroundCmdKRequest_Type.USEFUL_TYPES,
							],
							l = await this.buildRequest(f, s[0]);
						if (l === void 0 || l.currentFile === void 0) return;
						const y = [];
						for (const T of s) {
							let P = new C.$jE({ ...l, type: T });
							if (T === C.BackgroundCmdKRequest_Type.CODEBASE_CHUNKS) {
								const k = await this.getCodebaseChunks(
									P.instruction,
									P.currentFile?.relativeWorkspacePath ?? "",
								);
								if (k === void 0) continue;
								P.relatedCodeBlocks = k;
							} else if (T === C.BackgroundCmdKRequest_Type.USEFUL_TYPES) {
								const k = await this.getUsefulTypes(P);
								P = new C.$jE({ ...P, usefulTypes: k });
							}
							y.push(this.generate(P, b.abortController));
						}
						if (b.abortController.signal.aborted) return;
						const $ = (await Promise.all(y)).filter((T) => T !== void 0);
						if (b.abortController.signal.aborted) return;
						const v = await Promise.all(
							$.map(async (T) => {
								const [P, k] = await this.getLints(l, T);
								return new C.$nE({ change: T, linterErrors: P });
							}),
						);
						if (b.abortController.signal.aborted) return;
						const S = new C.$jE({
							...l,
							type: C.BackgroundCmdKRequest_Type.COALESCE_GENERATIONS,
							proposedChangeHistory: v,
						});
						return { finalResultPromise: this.generate(S, b.abortController) };
					}
					async getCodebaseChunks(f, b) {
						const s = [
								new a.$SA({
									type: a.ConversationMessage_MessageType.HUMAN,
									text:
										f +
										`
Please make sure to mention any files or code blocks that seem potentially relevant.`,
								}),
							]
								.map((S, I) => (S.text !== "" ? S.text : null))
								.filter((S) => S !== null)
								.join(`
`),
							l = { topK: 100, minK: 20, finalK: 200 },
							y = [{ text: s, globsNewLineSeparated: "" }],
							v = (await this.g.searchMultipleQueries(y, l))
								.map((S) => S.codeBlock)
								.filter(
									(S) =>
										S !== void 0 &&
										S.contents.length < 2e4 &&
										!h.$dh.isEqual(
											this.a.resolveRelativePath(S.relativeWorkspacePath),
											this.a.resolveRelativePath(b),
										),
								);
						if (v.length !== 0) return v;
					}
					async loopOnLints(f, b) {
						const [s, l] = await this.getLints(f, b);
						if (s.length === 0) return b;
						const y = new C.$jE({
								instruction: f.instruction,
								currentFile: new d.$Ws({
									relativeWorkspacePath: f.currentFile?.relativeWorkspacePath,
									contents: l,
								}),
								selectionRange: {
									startLineNumber: f.selectionRange?.startLineNumber ?? 1,
									startColumn: 1,
									endLineNumberInclusive:
										(f.selectionRange?.startLineNumber ?? 1) +
										b.split(`
`).length,
									endColumn: 1,
								},
								type: C.BackgroundCmdKRequest_Type.LOOP_ON_LINTS,
								proposedChangeHistory: [{ change: b, linterErrors: s }],
							}),
							v = (await this.c.aiClient()).backgroundCmdK(y);
						let S = "";
						for await (const I of v) S += I.proposedChange;
						return S;
					}
					async askCodebase(f, b) {
						const s = b
							.split(`
`)
							.filter((I) => I.trim() !== "");
						let l = new Map();
						for (const I of s) {
							const T = await this.getCodebaseChunks(
								I,
								f.currentFile?.relativeWorkspacePath ?? "",
							);
							if (T !== void 0)
								for (const P of T) {
									const k = `${P.relativeWorkspacePath}:${P.range?.startPosition?.line}`;
									l.has(k) || l.set(k, P);
								}
						}
						if (l.size === 0) return b;
						const y = new C.$jE({ ...f, relatedCodeBlocks: [...l.values()] }),
							v = (await this.c.aiClient()).backgroundCmdK(y);
						let S = "";
						for await (const I of v) S += I.proposedChange;
						return S;
					}
					async getUsefulTypes(f) {
						const b = f.currentFile?.relativeWorkspacePath,
							s = f.selectionRange;
						if (b === void 0 || s === void 0) return [];
						const l = this.a.resolveRelativePath(b),
							y = await this.b.createModelReference(l);
						let $ = [];
						try {
							const v = y.object.textEditorModel,
								S = new g.$Ce();
						} finally {
							y.dispose();
						}
						return $;
					}
				};
				(e.$n7b = p),
					(e.$n7b = p =
						Ne(
							[
								j(0, w.$Vi),
								j(1, i.$MO),
								j(2, E.$Nfc),
								j(3, m.$k7b),
								j(4, u.$J6b),
								j(5, c.$3Db),
							],
							p,
						));
			},
		),
		define(
			de[3949],
			he([1, 0, 148, 83, 3, 42, 25, 1234, 118]),
			function (ce, e, t, i, w, E, C, d, m) {
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
		),
		define(
			de[3950],
			he([1, 0, 3, 42, 25, 118, 148, 83, 280, 134, 1234]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
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
		define(
			de[3951],
			he([1, 0, 167, 262, 395, 351, 209, 1053, 45]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.AutoContext = void 0);
				let r = class extends i.ComposerCapability {
					constructor(a, h, c, n, g) {
						super(a, h),
							(this.composerDataService = c),
							(this.contextBankService = n),
							(this.reactiveStorageService = g),
							(this.priority = 1),
							(this.type =
								t.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT),
							(this.name =
								i.capabilityTypeLabels[
									t.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT
								]),
							(this.schema = E.autoContextSchema);
					}
					shouldRunInPlaceMutateRequestBeforeSubmit(a) {
						return this.shouldDoAutoContext(a);
					}
					silentRunInPlaceMutateRequestBeforeSubmit(a) {
						return !0;
					}
					shouldDoAutoContext(a) {
						return (
							this.reactiveStorageService.applicationUserPersistentStorage
								.composerState.useContextBank === !0
						);
					}
					async runInPlaceMutateRequestBeforeSubmit(a, h) {
						let c;
						try {
							c = await this.contextBankService.getRankedFiles({
								numberOfChunks: 5,
								composerRequest: a,
								useCachedResults: !0,
								composerId: this.composerId,
							});
						} catch (n) {
							console.error("[composer] Error in getRankedFiles", n);
						}
						a.additionalRankedContext = c ?? [];
					}
				};
				(e.AutoContext = r),
					(e.AutoContext = r =
						Ne(
							[
								(0, w.autoCancellableAndStatusUpdater)(),
								j(2, C.IComposerDataService),
								j(3, d.$Wcc),
								j(4, m.$0zb),
							],
							r,
						)),
					(0, i.registerComposerCapability)(
						t.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT,
						r,
					);
			},
		),
		define(
			de[3952],
			he([
				1, 0, 167, 219, 262, 395, 351, 209, 126, 225, 1053, 118, 25, 271, 226,
				246, 9,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ContextPicking = void 0);
				const o = 15,
					f = 100,
					b = 50,
					s = 1e4;
				let l = class extends w.ComposerCapability {
					constructor($, v, S, I, T, P, k, L, D) {
						super($, v),
							(this.composerDataService = S),
							(this.composerService = I),
							(this.contextBankService = T),
							(this.aiService = P),
							(this.workspaceContextService = k),
							(this.selectedContextService = L),
							(this.repositoryService = D),
							(this.priority = 1),
							(this.type =
								t.ComposerCapabilityRequest_ComposerCapabilityType.CONTEXT_PICKING),
							(this.name =
								w.capabilityTypeLabels[
									t.ComposerCapabilityRequest_ComposerCapabilityType.CONTEXT_PICKING
								]),
							(this.schema = C.contextPickingSchema);
					}
					silentOnStartSubmitChat($) {
						return !0;
					}
					async onStartSubmitChatReturnShouldStop($) {
						return !this.composerDataService.getComposerData(this.composerId) ||
							$.contextUsed?.useContextPicking !== !0
							? !1
							: (await this.runContextPicking(
									$.submitChatProps.text,
									$.submitChatProps.extra,
								),
								!0);
					}
					async runContextPicking($, v) {
						$ = $.replaceAll("/Pick Context", "");
						const S = this.composerDataService.getComposerData(this.composerId);
						if (!S) throw new Error("[composer] Composer data not found");
						const I = {
								...(0, r.createDefaultConversationMessage)(),
								richText: v?.richText ?? $,
								text: $,
								type: m.ConversationMessage_MessageType.HUMAN,
								context: { ...S.context, useContextPicking: !0 },
								userResponsesToSuggestedCodeBlocks:
									S.userResponsesToSuggestedCodeBlocks ?? [],
								checkpoint: (0, r.createEmptyCheckpoint)(),
								isCapabilityIteration: v?.isCapabilityIteration,
								attachedCodeChunks:
									await this.selectedContextService.getCodeChunks(S.context, {
										worktreePath: S.backgroundInfo?.worktreePath,
									}),
							},
							T = {
								...(0, r.createDefaultConversationMessage)(),
								type: m.ConversationMessage_MessageType.AI,
								text: "```context_picking\n",
								isCapabilityIteration: v?.isCapabilityIteration,
								capabilityCodeBlocks: [
									{
										type: r.ContextPickingCodeBlockAlias,
										status: "generating",
										codeBlockIdx: 0,
									},
								],
							};
						this.composerDataService.updateComposerDataSetStore(
							this.composerId,
							(N) => N("conversation", [...S.conversation, I, T]),
						);
						const P = new AbortController();
						let k = [];
						try {
							const N = this.repositoryService.parallelSearch($, f, b, {
									fast: !0,
									raceNRequests: 6,
									abortSignal: P.signal,
								}),
								A = setTimeout(() => {
									console.error(
										"[composer] Aborting context picking semantic search",
									),
										P.abort();
								}, s),
								R = await N;
							if ((clearTimeout(A), R.length > 0)) {
								const O = new Set(
									S.context.fileSelections.map((B) =>
										this.workspaceContextService.asRelativePath(
											p.URI.revive(B.uri),
										),
									),
								);
								(k = (0, g.dedupeCodeResults)(R).filter((B) => !O.has(B))),
									console.log("[composer] Semantic search results:", k);
							}
						} catch (N) {
							console.error("[composer] Error during semantic search:", N);
						}
						let L;
						(L = k.slice(0, o)),
							(L = (
								await this.contextBankService.getRankedFiles({
									numberOfChunks: o,
									composerRequest: {
										conversation: S.conversation,
										currentFile: await this.aiService.getCurrentFileInfo(),
									},
									useCachedResults: !1,
									composerId: this.composerId,
								})
							)
								.map((N) => N.context?.relativeWorkspacePath)
								.filter((N) => N !== void 0));
						const M = `potential_files: [${L.join(", ")}]`;
						this.composerDataService.updateComposerCapabilityCodeBlock(
							this.composerId,
							T.bubbleId,
							0,
							{ content: M, status: "completed" },
						),
							await this.processCodeBlock({
								composerId: this.composerId,
								humanBubbleId: I.bubbleId,
								aiBubbleId: T.bubbleId,
								capabilityCodeBlock: {
									type: r.ContextPickingCodeBlockAlias,
									status: "completed",
									codeBlockIdx: 0,
									content: M,
								},
								isCapabilityIteration: v?.isCapabilityIteration,
							}),
							this.composerDataService.updateComposerData(this.composerId, {
								status: "completed",
							}),
							this.composerDataService.addActionButton(
								this.composerId,
								"Continue with context",
								() => (
									this.composerService.submitChatMaybeAbortCurrent(
										this.composerId,
										$,
										{ isCapabilityIteration: !0, richText: v?.richText },
									),
									!0
								),
							);
					}
					shouldProcessCodeBlock($) {
						const v = $.capabilityCodeBlock;
						return !(
							!v ||
							v.type !== r.ContextPickingCodeBlockAlias ||
							!v.content
						);
					}
					async processCodeBlock($) {
						const v = $.capabilityCodeBlock;
						if (!v || v.type !== r.ContextPickingCodeBlockAlias || !v.content)
							throw new Error(
								"[composer] Invalid code block for ContextPicking",
							);
						try {
							const I = v.content.match(/potential_files:\s*\[(.*)\]/);
							if (!I)
								throw new Error(
									"[composer] Invalid context picking content format",
								);
							const T = I[1]
								.split(",")
								.map((P) => P.trim())
								.filter((P) => P.length > 0);
							this.composerDataService.updateComposerCapabilityCodeBlock(
								this.composerId,
								$.aiBubbleId,
								v.codeBlockIdx,
								{ parsedContextPicking: T, status: "completed" },
							);
						} catch (S) {
							throw (
								(console.error(
									"[composer] Error processing context picking code block:",
									S,
								),
								S)
							);
						}
					}
					silentRunInPlaceMutateRequestBeforeSubmit($) {
						return !0;
					}
					async runInPlaceMutateRequestBeforeSubmit($, v) {
						const { composerId: S } = v;
						this.composerDataService.getComposerData(S) &&
							($.conversation = $.conversation?.filter((T, P) => {
								if (T.type === m.ConversationMessage_MessageType.HUMAN)
									return !T.context?.useContextPicking;
								if (T.type === m.ConversationMessage_MessageType.AI && P > 0) {
									const k = $.conversation?.[P - 1];
									if (k && k.type === m.ConversationMessage_MessageType.HUMAN)
										return !k.context?.useContextPicking;
								}
								return !0;
							}));
					}
				};
				(e.ContextPicking = l),
					(e.ContextPicking = l =
						Ne(
							[
								(0, E.autoCancellableAndStatusUpdater)(),
								j(2, d.IComposerDataService),
								j(3, i.IComposerService),
								j(4, u.$Wcc),
								j(5, a.$Nfc),
								j(6, h.$Vi),
								j(7, c.$Q9b),
								j(8, n.$J6b),
							],
							l,
						)),
					(0, w.registerComposerCapability)(
						t.ComposerCapabilityRequest_ComposerCapabilityType.CONTEXT_PICKING,
						l,
					);
			},
		),
		define(
			de[3953],
			he([
				1, 0, 148, 126, 167, 83, 9, 22, 90, 25, 219, 262, 395, 351, 225, 209,
				169, 118, 226, 299, 246, 14, 45, 29,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.validateAgainstSchema = e.parseToolCall = e.ToolCall = void 0);
				let v = class extends a.ComposerCapability {
					constructor(k, L, D, M, N, A, R, O, B, U) {
						super(k, L),
							(this.composerDataService = D),
							(this.composerService = M),
							(this.fileService = N),
							(this.workspaceContextService = A),
							(this.repositoryService = R),
							(this.reactiveStorageService = O),
							(this.markerService = B),
							(this.aiService = U),
							(this.priority = 1),
							(this.type =
								w.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL),
							(this.name =
								a.capabilityTypeLabels[
									w.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL
								]),
							(this.schema = c.toolCallSchema),
							(this.forceIterate = !1),
							(this.mutateRequestCause = null),
							(this.instructionFromAI = null),
							(this.isProcessing = !1),
							(this.processingQueue = []),
							(this.pendingDecisions = new Map()),
							(this.activeToolCalls = new Set()),
							(this.currentParams = null),
							(this.allToolCallsCompletedResolver = null),
							(this.simultaneousSearchPromise = null),
							(this.simultaneousSearchAbortController = null),
							(this.skipMaxIterationsCheck = !1),
							(this.currentIterationSideEffects = []);
					}
					silentOnBeforeSubmitChat(k) {
						return !0;
					}
					async onBeforeSubmitChat(k) {
						if (this.mutateRequestCause === "tool-call") return;
						const L = this.composerDataService.getComposerData(k.composerId);
						if (!L) return;
						const D = L.conversation.find(
							(R) => R.bubbleId === k.humanBubbleId,
						);
						if (!D) return;
						const M = D.text,
							N = new AbortController(),
							A = this.repositoryService.parallelSearch(
								M,
								p.COMPOSER_SIMULTANEOUS_SEMANTIC_SEARCH_TOP_K,
								p.COMPOSER_SIMULTANEOUS_SEMANTIC_SEARCH_FINAL_K,
								{ fast: !0, raceNRequests: 6, abortSignal: N.signal },
							);
						(this.simultaneousSearchPromise = A),
							(this.simultaneousSearchAbortController = N);
					}
					silentRunInPlaceMutateRequestBeforeSubmit(k) {
						return this.mutateRequestCause !== "tool-call";
					}
					async runInPlaceMutateRequestBeforeSubmit(k, L) {
						const { composerId: D } = L,
							M = this.composerDataService.getComposerData(D);
						if (!M) return;
						if (
							this.composerDataService.getComposerBubble(D, L.humanBubbleId)
								?.context?.useDiffReview !== !0
						) {
							await new Promise((O) => setTimeout(O, 1e3));
							const R = await this.getLinterErrorsForComposer(M);
							k.multiFileLinterErrors = R;
						}
						if (
							(this.mutateRequestCause !== "tool-call" &&
								(k.conversation = k.conversation?.filter((R, O) => {
									if (R.type === i.ConversationMessage_MessageType.HUMAN)
										return !R.capabilities?.some((B) => B.type === this.type);
									if (
										R.type === i.ConversationMessage_MessageType.AI &&
										O > 0
									) {
										const B = k.conversation?.[O - 1];
										if (B && B.type === i.ConversationMessage_MessageType.HUMAN)
											return !B.capabilities?.some((U) => U.type === this.type);
									}
									return !0;
								})),
							!this.mutateRequestCause)
						)
							return;
						const N = k.conversation?.[k.conversation.length - 1];
						if (!N || !M || N.type !== i.ConversationMessage_MessageType.HUMAN)
							return;
						const A = this.mutateRequestCause;
						switch (((this.mutateRequestCause = null), A)) {
							case "iterate-instructions": {
								this.composerDataService.updateComposerData(D, {
									conversation: M.conversation.map((R) =>
										R.bubbleId === L.humanBubbleId
											? { ...R, text: this.instructionFromAI ?? R.text }
											: R,
									),
								}),
									(N.text = this.instructionFromAI ?? N.text),
									(this.instructionFromAI = null);
								break;
							}
							case "tool-call": {
								const R = this.convertToolSchemasToProto(n.TOOL_SCHEMAS),
									O = await this.composerDataService.getRelevantFiles(D),
									B = M.context.fileSelections.map((q) => q.uri.toString()),
									U = M.context,
									F = O.filter(
										(q) =>
											!U.fileSelections.find(
												(V) => (0, b.$8gc)(V) === (0, b.$8gc)(q),
											),
									).map((q) =>
										this.workspaceContextService.asRelativePath(
											C.URI.parse((0, b.$8gc)(q)),
											!1,
										),
									);
								let x = [];
								try {
									x = this.simultaneousSearchPromise
										? (0, s.dedupeCodeResults)(
												await this.simultaneousSearchPromise,
											)
										: [];
								} catch (q) {
									console.error("Error during simultaneous search:", q);
								} finally {
									(this.simultaneousSearchPromise = null),
										this.simultaneousSearchAbortController &&
											(this.simultaneousSearchAbortController.abort(),
											(this.simultaneousSearchAbortController = null));
								}
								const H = new w.$1z({
									type: w.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_CALL,
									data: {
										case: "toolCall",
										value: {
											toolSchemas: R,
											customInstructions: this.data.customInstructions,
											relevantFiles: F,
											semanticSearchFiles: x,
											filesInContext: B,
										},
									},
								});
								(N.capabilities = [...(N.capabilities ?? []), H]),
									this.composerDataService.updateComposerBubble(
										D,
										L.humanBubbleId,
										{ capabilities: N.capabilities },
									);
								break;
							}
						}
					}
					convertToolSchemasToProto(k) {
						return Object.entries(k).map(
							([L, D]) =>
								new w.$2z({
									type: parseInt(L, 10),
									name: D.name,
									properties: this.convertPropertiesToProto(
										D.schema.properties,
									),
									required: D.schema.required ?? [],
								}),
						);
					}
					convertPropertiesToProto(k) {
						const L = {};
						for (const [D, M] of Object.entries(k)) L[D] = { type: M.type };
						return L;
					}
					silentOnComposerSettled(k) {
						return !0;
					}
					async onComposerSettledReturnShouldLoop(k) {
						const L = this.composerDataService.getComposerData(k.composerId);
						if (!L) return !1;
						const D = T(L.conversation);
						if (D !== 0 && D % this.data.maxIterations === 0)
							if (this.skipMaxIterationsCheck) this.skipMaxIterationsCheck = !1;
							else
								return (
									this.composerDataService.addActionButton(
										k.composerId,
										"Confirm and continue",
										() => (
											(this.skipMaxIterationsCheck = !0),
											this.composerService.onComposerSettled(k.composerId),
											!0
										),
										{ icon: l.$ak.runAll },
									),
									!1
								);
						if (
							((this.forceIterate = !1),
							(this.mutateRequestCause = "tool-call"),
							(this.currentParams = k),
							await this.composerService.submitChatMaybeAbortCurrent(
								k.composerId,
								"",
								{
									isCapabilityIteration: !0,
									capabilityProcessesToSkip: ["composer-settled"],
									modelOverride: this.data.pickerModel,
								},
							),
							this.composerDataService.getComposerData(k.composerId)?.status ===
								"aborted" || this.isAborted())
						)
							throw new Error("[composer] User aborted tool call chat");
						if (
							(await this.waitForAllToolCallsToComplete(),
							this.composerDataService.setCapabilityStatus(
								k.composerId,
								this.currentParams.aiBubbleId,
								"composer-settled",
								w.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL,
								"completed",
							),
							this.forceIterate)
						) {
							const M = await new Promise((N) => {
								if (
									this.reactiveStorageService.applicationUserPersistentStorage
										.composerState.shouldAutoContinueToolCall
								) {
									N(!0);
									return;
								}
								this.composerDataService.addActionButton(
									k.composerId,
									"Continue iterating",
									() => (N(!0), !0),
									{
										icon: l.$ak.runAll,
										onRemove: () => {
											N(!1);
										},
									},
								),
									this.composerService.onComposerDone(k.composerId, k);
							});
							if (
								(this.composerDataService.clearActionButtons(k.composerId), !M)
							)
								return (
									(this.mutateRequestCause = null), (this.forceIterate = !1), !1
								);
							await Promise.all(
								this.currentIterationSideEffects.map((N) => N()),
							),
								(this.currentIterationSideEffects = []);
						}
						return (
							this.mutateRequestCause === "tool-call" &&
								(this.mutateRequestCause = null),
							this.forceIterate ? ((this.forceIterate = !1), !0) : !1
						);
					}
					waitForAllToolCallsToComplete() {
						return this.activeToolCalls.size === 0
							? Promise.resolve()
							: new Promise((k) => {
									this.allToolCallsCompletedResolver = k;
								});
					}
					checkAndResolveAllToolCallsCompleted() {
						this.activeToolCalls.size === 0 &&
							this.allToolCallsCompletedResolver &&
							(this.allToolCallsCompletedResolver(),
							(this.allToolCallsCompletedResolver = null));
					}
					shouldProcessCodeBlock(k) {
						const L = k.capabilityCodeBlock;
						return !(!L || L.type !== n.ToolCallCodeBlockAlias || !L.content);
					}
					async addSideEffectToCurrentIteration(k) {
						this.currentIterationSideEffects.push(k);
					}
					async runToolCall(k, L) {
						switch (k) {
							case w.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND: {
								const { command: D } = L;
								await new Promise((M) => setTimeout(M, 1e4));
								break;
							}
							case w.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT: {
								const { filePath: D, query: M } = L,
									N = this.workspaceContextService.resolveRelativePath(D);
								if (
									(await new Promise((R) => setTimeout(R, 3e3)),
									!(await this.fileService.exists(N)) &&
										this.currentParams !== null)
								)
									throw new Error(
										`[composer] File from Tool Call does not exist: ${D}`,
									);
								this.addSideEffectToCurrentIteration(async () => {
									this.composerService.addContext({
										composerId: this.composerId,
										contextType: "fileSelections",
										value: { uri: N },
										shouldShowPreview: !1,
									});
								}),
									(this.forceIterate = !0),
									(this.instructionFromAI = M),
									(this.mutateRequestCause = "iterate-instructions");
								break;
							}
							case w.ComposerCapabilityRequest_ToolType
								.REMOVE_FILE_FROM_CONTEXT: {
								const { filePath: D } = L,
									M = this.workspaceContextService.resolveRelativePath(D),
									N = this.composerDataService.getComposerData(this.composerId);
								if (N)
									if (
										N.context.fileSelections.findIndex((R) =>
											(0, C.$Ac)(R.uri, M),
										) !== -1
									)
										this.addSideEffectToCurrentIteration(() => {
											const R = this.composerDataService.getComposerData(
												this.composerId,
											);
											if (R) {
												const O = R.context.fileSelections.findIndex((B) =>
													(0, C.$Ac)(B.uri, M),
												);
												O !== -1 &&
													this.composerService.removeContext({
														composerId: this.composerId,
														contextType: "fileSelections",
														index: O,
													});
											}
										});
									else throw new Error("[composer] File not found in context");
								else throw new Error("[composer] Composer not found");
								this.forceIterate = !0;
								break;
							}
							case w.ComposerCapabilityRequest_ToolType
								.SEMANTIC_SEARCH_CODEBASE: {
								const { query: D } = L,
									M = new AbortController(),
									N = this.repositoryService.parallelSearch(
										D,
										p.COMPOSER_SEMANTIC_SEARCH_TOOL_TOP_K,
										p.COMPOSER_SEMANTIC_SEARCH_TOOL_FINAL_K,
										{ fast: !0, raceNRequests: 6, abortSignal: M.signal },
									),
									A = setTimeout(() => {
										console.error(
											"[composer] Aborting tool call semantic search",
										),
											M.abort();
									}, p.COMPOSER_SEMANTIC_SEARCH_TOOL_TIMEOUT),
									R = await N;
								if ((clearTimeout(A), R.length === 0))
									throw new Error(
										"[composer] No results found from semantic search",
									);
								const B = (0, s.dedupeCodeResults)(R).slice(
									0,
									p.COMPOSER_SEMANTIC_SEARCH_TOOL_ONLY_TAKE_TOP_K,
								);
								this.addSideEffectToCurrentIteration(() => {
									for (const U of B) {
										const z =
											this.workspaceContextService.resolveRelativePath(U);
										this.composerService.addContext({
											composerId: this.composerId,
											contextType: "fileSelections",
											value: { uri: z },
											shouldShowPreview: !1,
										});
									}
								}),
									(this.forceIterate = !0);
								break;
							}
							case w.ComposerCapabilityRequest_ToolType.ITERATE: {
								(this.forceIterate = !0),
									(this.instructionFromAI = L.instructions),
									(this.mutateRequestCause = "iterate-instructions");
								break;
							}
							default:
								throw new Error(`[composer] Unsupported tool call type: ${k}`);
						}
					}
					async processCodeBlock(k) {
						const { capabilityCodeBlock: L, aiBubbleId: D, composerId: M } = k;
						if (!L.content)
							throw new Error("[composer] Code block content is undefined");
						const N = (0, e.parseToolCall)(L.content);
						if (!N) throw new Error("[composer] Failed to parse tool call");
						const A = `${D}:${L.codeBlockIdx}`;
						this.activeToolCalls.add(A),
							this.composerDataService.updateComposerCapabilityCodeBlock(
								M,
								D,
								L.codeBlockIdx,
								{ toolCallType: N.type, parsedToolCall: N },
							);
						let R = null;
						n.ToolCallTypesWithDecision.includes(N.type) &&
							(this.composerDataService.updateComposerCapabilityCodeBlock(
								M,
								D,
								L.codeBlockIdx,
								{ status: "pending_decision", toolCallType: N.type },
							),
							(R = await new Promise((B, U) => {
								const z = `${D}:${L.codeBlockIdx}`;
								this.pendingDecisions.set(z, { resolve: B, reject: U });
							})),
							this.composerDataService.updateComposerCapabilityCodeBlock(
								M,
								D,
								L.codeBlockIdx,
								{ decision: R ? "accepted" : "rejected" },
							));
						const O = async () => {
							try {
								if (R === !1) return;
								await this.runToolCall(N.type, N.params);
							} catch (B) {
								throw (
									(console.error("[composer] Error running tool call:", B), B)
								);
							} finally {
								this.activeToolCalls.delete(A),
									this.checkAndResolveAllToolCallsCompleted();
							}
						};
						if (this.isProcessing)
							await new Promise((B) => {
								this.processingQueue.push(async () => {
									await O(), B();
								});
							});
						else {
							this.isProcessing = !0;
							try {
								await O();
							} finally {
								(this.isProcessing = !1), this.processNextInQueue();
							}
						}
					}
					async processNextInQueue() {
						const k = this.processingQueue.shift();
						if (k) {
							this.isProcessing = !0;
							try {
								await k();
							} finally {
								(this.isProcessing = !1), this.processNextInQueue();
							}
						}
					}
					onAborted(k) {
						if (k instanceof $.$9) {
							(this.forceIterate = !1),
								(this.mutateRequestCause = null),
								(this.instructionFromAI = null);
							for (const L of this.processingQueue) L(!0);
							this.processingQueue = [];
						}
					}
					async acceptToolCall(k, L) {
						const D = `${k}:${L}`,
							M = this.pendingDecisions.get(D);
						if (!M)
							throw new Error(
								"[composer] No pending decision found for this code block",
							);
						const { resolve: N } = M;
						this.pendingDecisions.delete(D), N(!0);
					}
					async rejectToolCall(k, L) {
						const D = `${k}:${L}`,
							M = this.pendingDecisions.get(D);
						if (!M)
							throw new Error(
								"[composer] No pending decision found for this code block",
							);
						const { resolve: N } = M;
						this.pendingDecisions.delete(D), N(!1);
					}
					async getLinterErrorsForComposer(k) {
						const L = new Set([
								...Object.keys(k.codeBlockData ?? {}),
								...k.context.fileSelections.map((N) => N.uri.toString()),
							]),
							D = Array.from(L).map((N) => C.URI.parse(N)),
							M = [];
						for (const N of D) {
							const R = this.markerService
								.read({ resource: N })
								.filter((O) => O.severity === m.MarkerSeverity.Error)
								.map(
									(O) =>
										new t.$yF({
											message: O.message,
											source: O.source,
											range: new E.$Ns({
												startPosition: {
													line: O.startLineNumber,
													column: O.startColumn,
												},
												endPosition: {
													line: O.endLineNumber,
													column: O.endColumn,
												},
											}),
											relativeWorkspacePath:
												this.workspaceContextService.asRelativePath(N),
										}),
								);
							if (R.length > 0) {
								const O = new E.$4s({
									relativeWorkspacePath:
										this.workspaceContextService.asRelativePath(N),
									errors: R,
									fileContents: (
										await this.aiService.getCurrentFileInfo(N, {
											actuallyReadFromOverrideURI: !0,
										})
									)?.contents,
								});
								M.push(O);
							}
						}
						return M;
					}
				};
				(e.ToolCall = v),
					(e.ToolCall = v =
						Ne(
							[
								(0, h.autoCancellableAndStatusUpdater)(),
								j(2, g.IComposerDataService),
								j(3, u.IComposerService),
								j(4, d.$ll),
								j(5, r.$Vi),
								j(6, f.$J6b),
								j(7, y.$0zb),
								j(8, m.$aM),
								j(9, o.$Nfc),
							],
							v,
						)),
					(0, a.registerComposerCapability)(
						w.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL,
						v,
					);
				const S = (P) => {
					try {
						const k = JSON.parse(P);
						if (
							typeof k != "object" ||
							k === null ||
							!(k.type in n.TOOL_SCHEMAS)
						)
							return null;
						const L = n.TOOL_SCHEMAS[k.type]?.schema;
						return !L || !(0, e.validateAgainstSchema)(k.params, L)
							? null
							: { type: k.type, params: k.params };
					} catch {
						return null;
					}
				};
				e.parseToolCall = S;
				const I = (P, k) => {
					if (k.type !== "object" || typeof P != "object" || P === null)
						return !1;
					for (const [L, D] of Object.entries(k.properties))
						if (
							(k.required?.includes(L) && !(L in P)) ||
							(L in P && typeof P[L] !== D.type)
						)
							return !1;
					return !0;
				};
				e.validateAgainstSchema = I;
				function T(P) {
					let k = 0;
					for (let L = P.length - 1; L >= 0; L--) {
						const D = P[L];
						if (D.type === i.ConversationMessage_MessageType.HUMAN) {
							if (
								D.capabilities?.some(
									(M) =>
										M.type ===
										w.ComposerCapabilityRequest_ComposerCapabilityType
											.TOOL_CALL,
								)
							)
								k++;
							else if (!D.isCapabilityIteration) break;
						}
					}
					return k;
				}
			},
		);
	var ms =
			(this && this.__addDisposableResource) ||
			function (ce, e, t) {
				if (e != null) {
					if (typeof e != "object" && typeof e != "function")
						throw new TypeError("Object expected.");
					var i, w;
					if (t) {
						if (!Symbol.asyncDispose)
							throw new TypeError("Symbol.asyncDispose is not defined.");
						i = e[Symbol.asyncDispose];
					}
					if (i === void 0) {
						if (!Symbol.dispose)
							throw new TypeError("Symbol.dispose is not defined.");
						(i = e[Symbol.dispose]), t && (w = i);
					}
					if (typeof i != "function")
						throw new TypeError("Object not disposable.");
					w &&
						(i = function () {
							try {
								w.call(this);
							} catch (E) {
								return Promise.reject(E);
							}
						}),
						ce.stack.push({ value: e, dispose: i, async: t });
				} else t && ce.stack.push({ async: !0 });
				return e;
			},
		ps =
			(this && this.__disposeResources) ||
			(function (ce) {
				return function (e) {
					function t(C) {
						(e.error = e.hasError
							? new ce(C, e.error, "An error was suppressed during disposal.")
							: C),
							(e.hasError = !0);
					}
					var i,
						w = 0;
					function E() {
						for (; (i = e.stack.pop()); )
							try {
								if (!i.async && w === 1)
									return (w = 0), e.stack.push(i), Promise.resolve().then(E);
								if (i.dispose) {
									var C = i.dispose.call(i.value);
									if (i.async)
										return (
											(w |= 2),
											Promise.resolve(C).then(E, function (d) {
												return t(d), E();
											})
										);
								} else w |= 1;
							} catch (d) {
								t(d);
							}
						if (w === 1)
							return e.hasError ? Promise.reject(e.error) : Promise.resolve();
						if (e.hasError) throw e.error;
					}
					return E();
				};
			})(
				typeof SuppressedError == "function"
					? SuppressedError
					: function (ce, e, t) {
							var i = new Error(t);
							return (
								(i.name = "SuppressedError"),
								(i.error = ce),
								(i.suppressed = e),
								i
							);
						},
			);
	define(
		de[426],
		he([
			1, 0, 5, 209, 3, 20, 20, 118, 299, 18, 25, 280, 22, 9, 83, 126, 83, 226,
			715, 126, 225, 271, 200, 530, 1045, 1861, 646, 28, 45, 42, 262, 516, 246,
			245, 23, 167, 124, 124, 287, 216, 246, 6, 741, 59, 196, 342, 1790, 632,
		]),
		function (
			ce,
			e,
			t,
			i,
			w,
			E,
			C,
			d,
			m,
			r,
			u,
			a,
			h,
			c,
			n,
			g,
			p,
			o,
			f,
			b,
			s,
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
			M,
			N,
			A,
			R,
			O,
			B,
			U,
			z,
			F,
			x,
			H,
			q,
			V,
			G,
			K,
			J,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerUtilsService = e.IComposerUtilsService = void 0);
			const W = { shouldGracefullyFallBackOnTimeout: !0 },
				X = 5,
				Y = 2;
			e.IComposerUtilsService = (0, t.$Mi)("composerUtilsService");
			let ie = class extends w.$1c {
				constructor(
					ee,
					_,
					te,
					Q,
					Z,
					se,
					re,
					le,
					oe,
					ae,
					pe,
					$e,
					ye,
					ue,
					fe,
					me,
				) {
					super(),
						(this._composerDataService = ee),
						(this._aiService = _),
						(this._workspaceContextService = te),
						(this._editorService = Q),
						(this._editorWorkerService = Z),
						(this._fileService = se),
						(this._everythingProviderService = re),
						(this._repositoryService = le),
						(this._gitGraphService = oe),
						(this._selectedContextService = ae),
						(this._reactiveStorageService = pe),
						(this._textModelService = $e),
						(this._aiTaskService = ye),
						(this._historyService = ue),
						(this._aiFeatureStatusService = fe),
						(this._instantiationService = me),
						(this._gitIgnoreFile = null),
						(this._composerDiffCache = new q.$Jc(50)),
						(this._composerDiffSemaphore = new H.$Opb(5)),
						(this._onShouldResetCodeBlockCount = this.D(new x.$re())),
						(this.onShouldResetCodeBlockCount =
							this._onShouldResetCodeBlockCount.event),
						this.initializeGitIgnoreFile();
				}
				async getContentsOfFile(ee, _) {
					if (!(await this._fileService.exists(_))) return null;
					try {
						return (
							await this._composerDataService.getMaybeCachedModelReference(
								ee,
								_,
							)
						).object.textEditorModel.getLinesContent();
					} catch (Q) {
						return (
							console.error("[composer] error getting content of file", _, Q),
							null
						);
					}
				}
				getSupportedTools(ee) {
					return [
						B.ClientSideToolV2.READ_FILE_FOR_IMPORTS,
						B.ClientSideToolV2.READ_SEMSEARCH_FILES,
						B.ClientSideToolV2.RIPGREP_SEARCH,
						B.ClientSideToolV2.RUN_TERMINAL_COMMAND,
						B.ClientSideToolV2.READ_FILE,
						B.ClientSideToolV2.LIST_DIR,
						B.ClientSideToolV2.EDIT_FILE,
						B.ClientSideToolV2.FILE_SEARCH,
						B.ClientSideToolV2.SEMANTIC_SEARCH_FULL,
						B.ClientSideToolV2.CREATE_FILE,
						B.ClientSideToolV2.DELETE_FILE,
						B.ClientSideToolV2.REAPPLY,
						B.ClientSideToolV2.GET_RELATED_FILES,
						B.ClientSideToolV2.PARALLEL_APPLY,
					];
				}
				async ensureCapabilitiesAreLoaded(ee) {
					const _ = await this._composerDataService.getComposerHandleById(ee);
					if (_ !== void 0)
						try {
							if (_.data.capabilities.length > 0) return;
							const Q = (0, L.getComposerCapabilities)(
								this._instantiationService,
								this._reactiveStorageService,
								ee,
							);
							if (Q.length === 0)
								throw new Error(
									`[composer] No capabilities found for composer ${ee}`,
								);
							_.setData({ capabilities: Q });
						} finally {
							_.dispose();
						}
				}
				async getShouldChatUseTools() {
					return (
						await this._aiFeatureStatusService
							.maybeRefreshFeatureStatus("chatUsesTools")
							.catch(() => {}),
						!!this._aiFeatureStatusService.getCachedFeatureStatus(
							"chatUsesTools",
						)
					);
				}
				getShouldAutoSaveAgenticEdits() {
					return (
						this._aiFeatureStatusService
							.maybeRefreshFeatureStatus("autoSaveAgenticEdits")
							.catch(() => {}),
						this._reactiveStorageService.applicationUserPersistentStorage
							.composerState.autoSaveAgenticEdits !== null &&
						this._reactiveStorageService.applicationUserPersistentStorage
							.composerState.autoSaveAgenticEdits !== void 0
							? this._reactiveStorageService.applicationUserPersistentStorage
									.composerState.autoSaveAgenticEdits
							: !!this._aiFeatureStatusService.getCachedFeatureStatus(
									"autoSaveAgenticEdits",
								)
					);
				}
				replacedBubbleForParallelApply(ee, _, te) {
					if (ee.additionalData === void 0 || _.codeBlockIdentifier === void 0)
						return te;
					const { codeBlockIdentifierToRawMessage: Q } = ee.additionalData;
					if (Q[_.codeBlockIdentifier] === void 0) return te;
					const Z = Q[_.codeBlockIdentifier];
					return new g.$SA({ ...te, text: Z });
				}
				replacedBubbleForEdit(ee, _, te) {
					if (ee.additionalData === void 0) return te;
					const { instructions: Q, previousBubbleText: Z } = ee.additionalData;
					if (Q === void 0 && Z === void 0) return te;
					let se = "";
					Z !== void 0 &&
						(se += `${Z}

`),
						Q !== void 0 &&
							(se += `${Q}

`);
					let re;
					try {
						re = this._workspaceContextService.asRelativePath(_.uri);
					} catch {
						re = _.uri.fsPath;
					}
					return (
						(se += `\`\`\`${re}
${_.content}
\`\`\``),
						new g.$SA({ ...te, text: se })
					);
				}
				replacedBubbleForFastEdit(ee, _, te) {
					const Q = this._composerDataService.getComposerCapability(
						ee,
						R.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER,
					);
					if (Q === void 0) return _;
					const Z = Q.getBubbleData(_.bubbleId);
					return Z
						? Z.tool === B.ClientSideToolV2.EDIT_FILE
							? this.replacedBubbleForEdit(Z, te, _)
							: Z.tool === B.ClientSideToolV2.PARALLEL_APPLY
								? this.replacedBubbleForParallelApply(Z, te, _)
								: _
						: _;
				}
				async isAgenticComposer(ee) {
					return (
						(await this._composerDataService.getComposerHandleById(ee))?.data
							.isAgentic ?? !1
					);
				}
				processConversationForFastEdit(ee, _, te) {
					const Q = _.findIndex(
							(le) =>
								le.type === g.ConversationMessage_MessageType.AI &&
								le.codeBlocks?.some(
									(oe) =>
										oe.version === te.version && (0, c.$Ac)(oe.uri, te.uri),
								),
						),
						se = _.slice(0, Q + 1).map((le, oe) => {
							if (
								le.type === g.ConversationMessage_MessageType.AI &&
								oe !== Q
							) {
								const ae = le.text.replace(/```[\s\S]*?```/g, "[old_code]");
								return new g.$SA({ ...le, text: ae });
							}
							return new g.$SA(le);
						}),
						re = _.at(Q);
					if (
						re.capabilityType ===
						R.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER
					) {
						const le = this.replacedBubbleForFastEdit(ee, re, te);
						se[se.length - 1] = le;
					}
					return se;
				}
				async populateCodeChunksInConversation(ee, _ = !1) {
					const te = new Map();
					return (
						ee.forEach((Q, Z) => {
							if (
								Q.type !== g.ConversationMessage_MessageType.HUMAN ||
								!Q.context
							)
								return;
							const { fileSelections: se } = Q.context;
							for (const re of se || [])
								try {
									const le = (0, m.$8gc)(re);
									te.set(le, Z);
								} catch (le) {
									console.error(`Error processing file selection: ${le}`);
								}
						}),
						await Promise.all(
							ee.map(async (Q, Z) => {
								if (
									Q.type !== g.ConversationMessage_MessageType.HUMAN ||
									!Q.context
								)
									return Q;
								const { fileSelections: se, selections: re } = Q.context;
								let le = [...(Q.attachedCodeChunks || [])];
								for (const oe of se || [])
									try {
										const ae = (0, m.$8gc)(oe);
										if (
											!le.some(
												(pe) =>
													pe.relativeWorkspacePath ===
														this._workspaceContextService.asRelativePath(
															c.URI.parse(ae),
														) &&
													(pe.intent ===
														g.ConversationMessage_CodeChunk_Intent
															.COMPOSER_FILE ||
														pe.intent ===
															g.ConversationMessage_CodeChunk_Intent
																.MENTIONED_FILE),
											)
										) {
											const pe = te.get(ae) === Z;
											if (_ || pe) {
												const $e = this._selectedContextService.getMentions(
													Q.context,
													"fileSelections",
													oe,
												);
												if (_ && oe.autoContext && $e.length === 0) continue;
												const ye =
													await this._selectedContextService.getCodeChunksFromFileSelections(
														[oe],
														{ context: Q.context },
													);
												le.push(...ye);
											} else {
												const ye =
													this._selectedContextService.getMentions(
														Q.context,
														"fileSelections",
														oe,
													).length > 0
														? g.ConversationMessage_CodeChunk_Intent
																.MENTIONED_FILE
														: g.ConversationMessage_CodeChunk_Intent
																.COMPOSER_FILE;
												le.push(
													new g.$TA({
														relativeWorkspacePath:
															this._workspaceContextService.asRelativePath(
																c.URI.parse(ae),
															),
														startLineNumber: 1,
														lines: [],
														contentsAreMissing: !0,
														summarizationStrategy:
															g
																.ConversationMessage_CodeChunk_SummarizationStrategy
																.NONE_UNSPECIFIED,
														intent: ye,
													}),
												);
											}
										}
									} catch (ae) {
										console.error(`Error processing file selection: ${ae}`);
									}
								for (const oe of re || [])
									try {
										if (
											!le.some((ae) =>
												this._selectedContextService.isCodeChunkEqualToSelection(
													ae,
													oe,
												),
											)
										) {
											const ae =
												await this._selectedContextService.getCodeChunksFromCodeSelection(
													oe,
													{},
												);
											ae && le.push(ae);
										}
									} catch (ae) {
										console.error(`Error processing code selection: ${ae}`);
									}
								return { ...Q, attachedCodeChunks: le };
							}),
						)
					);
				}
				async populateRedDiffsInConversation(ee) {
					try {
						const _ = new Map();
						return (
							ee.forEach((Q, Z) => {
								Q.type === g.ConversationMessage_MessageType.HUMAN &&
									Q.attachedCodeChunks.forEach((se) => {
										const {
												relativeWorkspacePath: re,
												contentsAreMissing: le,
											} = se,
											oe = se.lines.join(`
`);
										!_.has(re) &&
											this.codeChunkHasFullFileIntent(se) &&
											!le &&
											_.set(re, { content: oe, messageIndex: Z });
									});
							}),
							await Promise.all(
								ee.map(async (Q, Z) => {
									const se = Q.diffsForCompressingFiles,
										re = (
											await Promise.allSettled(
												Q.attachedCodeChunks.map(async (le) => {
													if (
														!this.codeChunkHasFullFileIntent(le) ||
														le.contentsAreMissing === !0
													)
														return;
													const oe = le.relativeWorkspacePath,
														ae = _.get(le.relativeWorkspacePath);
													if (ae === void 0 || ae.messageIndex >= Z) return;
													const { content: pe } = ae,
														$e = le.lines.join(`
`),
														ye = se.find(
															(ge) =>
																ge.relativeWorkspacePath ===
																le.relativeWorkspacePath,
														);
													if (ye !== void 0 && Z < ee.length - 1) return ye;
													const ue = await (0, $.$ojb)(pe),
														fe = await (0, $.$ojb)($e),
														me = ee
															.slice(0, Z)
															.flatMap((ge) =>
																ge.diffsForCompressingFiles.filter(
																	(be) =>
																		be.startHash === ue && be.endHash === fe,
																),
															)
															?.at(-1);
													if (me) return me;
													const ve = await this.computeLinesDiffWithSemaphore({
														first: pe,
														second: $e,
														options: {
															ignoreTrimWhitespace: !1,
															computeMoves: !1,
															maxComputationTimeMs: 500,
															...W,
														},
													});
													if (!ve.hitTimeout)
														return {
															relativeWorkspacePath: oe,
															redRanges: ve.changes.map((ge) => ({
																startLine: ge.original.startLineNumber,
																endLineInclusive:
																	ge.original.endLineNumberExclusive - 1,
															})),
															redRangesReversed: ve.changes.map((ge) => ({
																startLine: ge.modified.startLineNumber,
																endLineInclusive:
																	ge.modified.endLineNumberExclusive - 1,
															})),
															startHash: ue,
															endHash: fe,
														};
												}),
											)
										).flatMap((le) =>
											le.status === "fulfilled" && le.value !== void 0
												? [le.value]
												: [],
										);
									return { ...Q, diffsForCompressingFiles: re };
								}),
							)
						);
					} catch {
						return ee;
					}
				}
				async getRecentEdits(ee) {
					try {
						const _ = this._composerDataService.getComposerData(ee);
						if (!_) throw new Error("No composer data found");
						const { conversation: te, codeBlockData: Q } = _,
							Z =
								te.at(-1)?.type === g.ConversationMessage_MessageType.AI
									? te.at(-1)
									: te.at(-2);
						if (Z?.type !== g.ConversationMessage_MessageType.AI) return;
						const re = (Z.codeBlocks ?? [])
								.map((ae) => {
									const pe = Q[ae.uri.toString()].find(
										($e) => $e.version === ae.version,
									);
									if (pe) return pe;
								})
								.filter(T.$tg)
								.sort((ae, pe) => pe.version - ae.version)
								.map((ae) => {
									const pe = this.getCodeBlockOriginalModelLines(
											ee,
											ae.uri,
											ae.version,
										),
										$e = this.getCodeBlockNewModelLines(ee, ae.uri, ae.version);
									return {
										relativeWorkspacePath:
											this._workspaceContextService.asRelativePath(ae.uri),
										contentBefore: pe?.join(`
`),
										contentAfter: $e?.join(`
`),
										generationUuid: ae.latestApplyGenerationUUID,
										version: ae.version,
									};
								}),
							le = [...new Set(re.map((ae) => ae.relativeWorkspacePath))],
							oe = (
								await Promise.all(
									le.map(async (ae) => {
										const pe = await this._aiService.getCurrentFileInfo(
											this._workspaceContextService.resolveRelativePath(ae),
											{ actuallyReadFromOverrideURI: !0 },
										);
										if (pe)
											return {
												relativeWorkspacePath: ae,
												content: pe.contents,
											};
									}),
								)
							).filter(T.$tg);
						return {
							codeBlockInfo: re,
							finalFileValues: oe,
							editsBelongToComposerGenerationUuid: _.latestChatGenerationUUID,
						};
					} catch {
						return;
					}
				}
				async getRecentlyViewedFileInfo(ee) {
					const _ = await ee,
						te = [...this._historyService.getHistory()].flatMap((ye) => {
							const ue = ye.resource;
							if (
								!ue ||
								(!this._fileService.hasProvider(ue) &&
									ue.scheme !== A.Schemas.untitled &&
									ue.scheme !== A.Schemas.vscodeTerminal &&
									ue.scheme !== A.Schemas.aiChat)
							)
								return [];
							const fe = this._workspaceContextService.asRelativePath(ue);
							return fe ? [{ relativeWorkspacePath: fe, uri: ue }] : [];
						}),
						Q = 3,
						Z = 20,
						se = 4e3,
						re = _.filter((ye) => this.codeChunkHasFullFileIntent(ye)).map(
							(ye) => ye.relativeWorkspacePath,
						),
						le = te
							.map(({ relativeWorkspacePath: ye }) => ye)
							.filter((ye) => !re.includes(ye))
							.slice(0, Q),
						ae = (
							await Promise.allSettled(
								te.map(async ({ relativeWorkspacePath: ye, uri: ue }) => {
									if (re.includes(ye))
										return _.filter(
											(ve) =>
												ve.relativeWorkspacePath === ye &&
												this.codeChunkHasFullFileIntent(ve),
										).map(
											(ve) =>
												new g.$TA({
													...ve,
													contentsAreMissing: !0,
													lines: void 0,
												}),
										);
									if (!le.includes(ye))
										return [
											new g.$TA({
												relativeWorkspacePath: ye,
												contentsAreMissing: !0,
											}),
										];
									const me =
										await this._selectedContextService.getCodeChunksFromFileSelections(
											[{ uri: ue }],
										);
									for (const ve of me) ve.lines = ve.lines.slice(0, se);
									return me;
								}),
							)
						)
							.flatMap((ye) => (ye.status === "fulfilled" ? ye.value : []))
							.map(
								(ye) =>
									new g.$TA({
										...ye,
										intent:
											g.ConversationMessage_CodeChunk_Intent
												.RECENTLY_VIEWED_FILE,
									}),
							)
							.slice(0, Z);
					return {
						recentLocationsHistory: this._historyService
							.getRecentLocations(50)
							.flatMap((ye) => {
								const ue = this._workspaceContextService.asRelativePath(ye.uri);
								return te.some((fe) => ue === fe.relativeWorkspacePath)
									? [
											new g.$3A({
												relativeWorkspacePath: ue,
												lineNumber: ye.location.startLineNumber,
											}),
										]
									: [];
							}),
						recentlyViewedFiles: ae,
					};
				}
				async *handleStreamComposer(ee) {
					let _ = !1;
					for await (const te of ee.streamer) {
						const Q = this._composerDataService.getComposerData(ee.composerId);
						if (!Q) continue;
						const Z = Q.conversation[Q.conversation.length - 1],
							se = [...Q.conversation]
								.reverse()
								.find(
									(re) => re.type === g.ConversationMessage_MessageType.HUMAN,
								);
						if (
							("conversationSummary" in te &&
								te.conversationSummary &&
								Z !== void 0 &&
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(re) =>
										re(
											"conversation",
											(le) => le.bubbleId === Z.bubbleId,
											"conversationSummary",
											te.conversationSummary,
										),
								),
							"serverBubbleId" in te &&
								te.serverBubbleId &&
								typeof te.serverBubbleId == "string" &&
								te.serverBubbleId !== "" &&
								Z !== void 0 &&
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(re) =>
										re(
											"conversation",
											(le) => le.bubbleId === Z.bubbleId,
											"serverBubbleId",
											te.serverBubbleId,
										),
								),
							te !== null &&
								typeof te == "object" &&
								"webCitation" in te &&
								te.webCitation !== void 0 &&
								te.webCitation !== null &&
								Z &&
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(re) =>
										re(
											"conversation",
											(le) => le.bubbleId === Z.bubbleId,
											"webCitations",
											te.webCitation?.references ?? [],
										),
								),
							te !== null &&
								typeof te == "object" &&
								"docsReference" in te &&
								te.docsReference !== void 0 &&
								te.docsReference !== null &&
								Z &&
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(re) =>
										re(
											"conversation",
											(le) => le.bubbleId === Z.bubbleId,
											"docsCitations",
											(le) => [...(le ?? []), te.docsReference],
										),
								),
							te !== null &&
								typeof te == "object" &&
								"statusUpdates" in te &&
								te.statusUpdates !== void 0 &&
								te.statusUpdates !== null &&
								Z &&
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(re) =>
										re(
											"conversation",
											(le) => le.bubbleId === Z.bubbleId,
											"statusUpdates",
											te.statusUpdates,
										),
								),
							te !== null &&
								typeof te == "object" &&
								"serviceStatusUpdate" in te &&
								te.serviceStatusUpdate !== void 0 &&
								te.serviceStatusUpdate !== null &&
								Z &&
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(re) =>
										re(
											"conversation",
											(le) => le.bubbleId === Z.bubbleId,
											"serviceStatusUpdate",
											te.serviceStatusUpdate,
										),
								),
							te !== null &&
								typeof te == "object" &&
								"usedCode" in te &&
								te.usedCode !== void 0 &&
								te.usedCode !== null &&
								te.usedCode.codeResults &&
								Z &&
								se)
						) {
							const re = te.usedCode;
							this._composerDataService.updateComposerDataSetStore(
								ee.composerId,
								(le) =>
									le(
										"conversation",
										(oe) => oe.bubbleId === se.bubbleId,
										"codebaseContextChunks",
										re.codeResults.map((oe) => oe.codeBlock).filter(T.$tg),
									),
							),
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(le) =>
										le(
											"conversation",
											(oe) => oe.bubbleId === Z.bubbleId,
											"statusUpdates",
											{ updates: [] },
										),
								);
						}
						if (
							te !== null &&
							typeof te == "object" &&
							"symbolLink" in te &&
							te.symbolLink !== void 0 &&
							te.symbolLink !== null &&
							Z
						) {
							const re = te.symbolLink;
							this._composerDataService.updateComposerDataSetStore(
								ee.composerId,
								(le) =>
									le(
										"conversation",
										(oe) => oe.bubbleId === Z.bubbleId,
										"symbolLinks",
										(oe) => (oe ? [...oe, re] : [re]),
									),
							);
						}
						if (
							te !== null &&
							typeof te == "object" &&
							"fileLink" in te &&
							te.fileLink !== void 0 &&
							te.fileLink !== null &&
							Z
						) {
							const re = te.fileLink;
							this._composerDataService.updateComposerDataSetStore(
								ee.composerId,
								(le) =>
									le(
										"conversation",
										(oe) => oe.bubbleId === Z.bubbleId,
										"fileLinks",
										(oe) => (oe ? [...oe, re] : [re]),
									),
							);
						}
						te !== null &&
							typeof te == "object" &&
							"viewableGitContext" in te &&
							te.viewableGitContext !== void 0 &&
							te.viewableGitContext !== null &&
							Z &&
							this._composerDataService.updateComposerDataSetStore(
								ee.composerId,
								(re) =>
									re(
										"conversation",
										(le) => le.bubbleId === Z.bubbleId,
										"gitContext",
										te.viewableGitContext,
									),
							),
							yield te,
							_ === !1 &&
								(te.text?.length ?? 0) > 0 &&
								((_ = !0),
								console.log(
									`[composer] ttft is ${Date.now() - ee.startTime}ms`,
								));
					}
				}
				intermediateChunkMiddleware(ee, _, te) {
					const Q = () => {
						this._composerDataService.updateComposerDataSetStore(_, (le) =>
							le(
								"conversation",
								(oe) => oe.bubbleId === te,
								"intermediateChunks",
								[],
							),
						);
					};
					Q();
					const Z = (le) => {
						this._composerDataService.updateComposerDataSetStore(_, (oe) =>
							oe(
								"conversation",
								(ae) => ae.bubbleId === te,
								"intermediateSectionType",
								le,
							),
						);
					};
					Z();
					const se = (le, oe) => {
						const ae = this._composerDataService.getComposerBubble(
								_,
								te,
							)?.intermediateSectionType,
							pe =
								oe.chunkType === b.ChunkType.CODEBASE
									? "codebase"
									: oe.chunkType === b.ChunkType.LONG_FILE
										? "long-file"
										: "docs";
						ae !== pe && Q(), Z(pe);
						const $e = this._composerDataService.getComposerBubble(_, te);
						if ($e === void 0) return;
						let ye = $e.intermediateChunks ?? [];
						const ue = (ge, be) =>
							ge.startLine === be.startLine && ge.fileName === be.fileName;
						let fe = ye.findIndex((ge) => ue(ge.chunkIdentity, oe));
						fe === -1 && (fe = ye.length);
						const me = ye.find((ge) => ue(ge.chunkIdentity, oe));
						ye = [...ye.filter((ge) => !ue(ge.chunkIdentity, oe))];
						const ve = {
							chunkIdentity: me?.chunkIdentity ?? oe,
							completeText: (me?.completeText ?? "") + le,
						};
						ye.splice(fe, 0, ve),
							this._composerDataService.updateComposerDataSetStore(_, (ge) =>
								ge(
									"conversation",
									(be) => be.bubbleId === te,
									"intermediateChunks",
									ye,
								),
							);
					};
					return (async function* () {
						for await (const le of ee)
							le !== null &&
								typeof le == "object" &&
								"isBigFile" in le &&
								le.isBigFile &&
								Z("long-file"),
								le !== null &&
									typeof le == "object" &&
									"chunkIdentity" in le &&
									le.chunkIdentity !== void 0 &&
									se(le.intermediateText ?? "", le.chunkIdentity),
								yield le;
					})();
				}
				async getAutoContextFiles(ee) {
					const _ = this._composerDataService.getComposerData(ee);
					if (!_) return [];
					const te = await this._repositoryService
							.parallelSearch(_.text, 30, 10, {
								fast: !0,
								abortSignal: void 0,
								raceNRequests: 6,
							})
							.then((oe) =>
								oe
									.map((ae) =>
										ae.codeBlock
											? {
													uri: this._workspaceContextService.resolveRelativePath(
														ae.codeBlock.relativeWorkspacePath,
													),
													score: ae.score,
												}
											: void 0,
									)
									.filter(
										(ae) => ({ uri: ae?.uri, score: ae?.score }) !== void 0,
									),
							),
						Q = new Set(),
						Z = [];
					for (const oe of te) {
						const ae = (0, m.$8gc)(oe);
						Q.has(ae) || (Q.add(ae), Z.push(oe));
					}
					Z.sort((oe, ae) => ae.score - oe.score);
					const se = [];
					for (const oe of Z) {
						const ae = c.URI.revive(oe.uri);
						se.push({
							relativeWorkspacePath:
								this._workspaceContextService.asRelativePath(ae),
							fileContent: await this.readFileContents(ae),
						});
					}
					const re = await this._aiService.aiClient(),
						{ rankedFiles: le } = await re.autoContext({
							text: _.text,
							candidateFiles: se,
						});
					return le.map((oe) => ({
						uri: this._workspaceContextService.resolveRelativePath(
							oe.relativeWorkspacePath,
						),
						score: oe.rerankingScore,
					}));
				}
				async readFileContents(ee) {
					return (await this._fileService.readFile(ee)).value.toString();
				}
				async populateConversationWithExtraContext(ee, _, te) {
					te = { ...(te ?? {}), disableImageRemoval: !1 };
					const Q = new Map();
					return (
						ee.forEach((Z, se) => {
							if (Z.type !== g.ConversationMessage_MessageType.AI) {
								const re =
									se === ee.length - 1
										? (te?.lastBubbleContext ?? Z.context)
										: Z.context;
								if (re?.notepads)
									for (const le of re.notepads) Q.set(le.notepadId, se);
							}
						}),
						await Promise.all(
							ee.map(async (Z, se) => {
								if (Z.type !== g.ConversationMessage_MessageType.AI) {
									let re = Z.context;
									te.lastBubbleContext &&
										se === ee.length - 1 &&
										(re = te.lastBubbleContext);
									const le = re?.selectedCommits
											? this._selectedContextService.getCommitDetailsFromPartialCommits(
													re.selectedCommits,
												)
											: [],
										oe = re?.selectedPullRequests
											? this._selectedContextService.getPullRequestDetailsFromPartialPullRequests(
													re.selectedPullRequests,
												)
											: [],
										ae =
											re?.gitDiff || re?.gitDiffFromBranchToMain
												? this._selectedContextService.getDiffDetailsFromGitDiff(
														{
															gitDiff: re.gitDiff,
															gitDiffFromBranchToMain:
																re.gitDiffFromBranchToMain,
														},
													)
												: [],
										pe = re?.notepads
											? this._selectedContextService.getNotepadsContext({
													...re,
													notepads: re.notepads.filter(
														(Le) => Q.get(Le.notepadId) === se,
													),
												})
											: [],
										$e = re?.selectedImages
											? Promise.all(
													re.selectedImages.map(async (Le) => {
														try {
															return await (0, v.$F7b)(
																Le,
																() => {
																	if (
																		!te.disableImageRemoval &&
																		te.removeContext
																	) {
																		const xe = this._composerDataService
																			.getComposerData(_)
																			?.context.selectedImages?.findIndex(
																				(He) => He.path === Le.path,
																			);
																		xe !== void 0 &&
																			xe !== -1 &&
																			te.removeContext({
																				composerId: _,
																				contextType: "selectedImages",
																				index: xe,
																			});
																	}
																},
																this._fileService,
															);
														} catch (Fe) {
															console.error(Fe);
															return;
														}
													}),
												)
											: [],
										ye = Promise.all(
											(re?.folderSelections ?? []).map(async (Le) => {
												const Fe =
													this._workspaceContextService.resolveRelativePath(
														(0, J.$K9b)(Le.relativePath),
													);
												if (Fe)
													try {
														return await (0, K.$3cc)(
															Fe,
															this._fileService,
															this._selectedContextService,
														);
													} catch (Oe) {
														console.error(
															`Failed to list directory for ${Le.relativePath}:`,
															Oe,
														);
														return;
													}
											}),
										),
										[ue, fe, me, ve, ge, be] = await Promise.all([
											le,
											oe,
											ae,
											pe,
											$e,
											ye,
										]),
										Ce = ge.filter((Le) => Le !== void 0);
									return {
										...Z,
										commits: ue,
										pullRequests: fe,
										gitDiffs: me,
										notepads: ve,
										images: Ce,
										attachedFoldersListDirResults: be.filter(T.$tg),
									};
								} else {
									const re = (() => {
										if (
											Z.capabilityType ===
											R.ComposerCapabilityRequest_ComposerCapabilityType
												.TOOL_FORMER
										) {
											const le =
												this._composerDataService.getComposerCapability(
													_,
													R.ComposerCapabilityRequest_ComposerCapabilityType
														.TOOL_FORMER,
												);
											if (!le) return;
											const oe = le.getBubbleData(Z.bubbleId);
											if (!oe) return;
											let ae;
											switch (oe.tool) {
												case B.ClientSideToolV2.UNSPECIFIED:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.UNSPECIFIED,
													});
													break;
												case B.ClientSideToolV2.READ_SEMSEARCH_FILES:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.READ_SEMSEARCH_FILES,
														result:
															oe.result !== void 0
																? {
																		case: "readSemsearchFilesResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.READ_FILE_FOR_IMPORTS:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.READ_FILE_FOR_IMPORTS,
														result:
															oe.result !== void 0
																? {
																		case: "readFileForImportsResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.RIPGREP_SEARCH:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.RIPGREP_SEARCH,
														result:
															oe.result !== void 0
																? {
																		case: "ripgrepSearchResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2,
														result:
															oe.result !== void 0
																? {
																		case: "runTerminalCommandV2Result",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.READ_FILE:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.READ_FILE,
														result:
															oe.result !== void 0
																? { case: "readFileResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.LIST_DIR:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.LIST_DIR,
														result:
															oe.result !== void 0
																? { case: "listDirResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.EDIT_FILE:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.EDIT_FILE,
														result:
															oe.result !== void 0
																? { case: "editFileResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.FILE_SEARCH:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.FILE_SEARCH,
														result:
															oe.result !== void 0
																? { case: "fileSearchResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.SEMANTIC_SEARCH_FULL:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.SEMANTIC_SEARCH_FULL,
														result:
															oe.result !== void 0
																? {
																		case: "semanticSearchFullResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.DELETE_FILE:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.DELETE_FILE,
														result:
															oe.result !== void 0
																? { case: "deleteFileResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.CREATE_FILE:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.CREATE_FILE,
														result:
															oe.result !== void 0
																? { case: "createFileResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.REAPPLY:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.REAPPLY,
														result:
															oe.result !== void 0
																? { case: "reapplyResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.PARALLEL_APPLY:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.PARALLEL_APPLY,
														result:
															oe.result !== void 0
																? {
																		case: "parallelApplyResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.GET_RELATED_FILES:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.GET_RELATED_FILES,
														result:
															oe.result !== void 0
																? {
																		case: "getRelatedFilesResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.RUN_TERMINAL_COMMAND:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.RUN_TERMINAL_COMMAND,
														result:
															oe.result !== void 0
																? {
																		case: "runTerminalCommandResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												default: {
													const pe = oe;
													throw new Error(`Tool ${pe} is not supported`);
												}
											}
											return new g.$UA({
												toolCallId: oe.toolCallId,
												toolName: oe.name,
												rawArgs: oe.rawArgs,
												result: ae,
												error: oe.error,
											});
										}
									})();
									return {
										...Z,
										webReferences: Z.webCitations ?? [],
										docsReferences: Z.docsCitations ?? [],
										toolResults: re ? [re] : [],
										suggestedCodeBlocks:
											Z.codeBlocks?.map((le) => ({
												relativeWorkspacePath:
													this._workspaceContextService.asRelativePath(le.uri),
											})) ?? [],
									};
								}
							}),
						)
					);
				}
				addContinuationPromptToConversation(ee, _, te) {
					const Q = _.text.split(`
`),
						Z = Q[Q.length - 1] || "",
						se = Z.trim()
							? `Continue writing exactly where you left off. Do not repeat yourself. Start your response with: ${Z}`
							: "Continue your previous response. Do not repeat yourself.",
						re = [
							...ee,
							{
								...(0, s.createDefaultConversationMessage)(),
								text: `Your response got cut off, because you only have limited response space. ${se}`,
							},
						],
						le = _.text
							.split(`
`)
							.slice(0, -1)
							.join(`
`);
					return (
						this._composerDataService.updateComposerDataSetStore(te, (oe) =>
							oe(
								"conversation",
								(ae) => ae.bubbleId === _.bubbleId,
								"text",
								le,
							),
						),
						(_.text = le),
						re
					);
				}
				getUrisForCheckpoints(ee) {
					const _ = new Set();
					for (const te of Object.keys(ee.codeBlockData)) _.add(te);
					for (const te of ee.conversation)
						if (
							te.capabilityType ===
							R.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER
						) {
							const Q = this._composerDataService
								.getComposerCapability(
									ee.composerId,
									R.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								)
								?.getBubbleData(te.bubbleId);
							if (
								Q?.tool === B.ClientSideToolV2.DELETE_FILE &&
								Q.params?.relativeWorkspacePath
							) {
								const Z = this._workspaceContextService.resolveRelativePath(
									Q.params.relativeWorkspacePath,
								);
								_.add(Z.toString());
							}
						}
					return _;
				}
				async createCurrentCheckpoint(ee, _) {
					const te = this._composerDataService.getComposerData(ee);
					if (!te)
						throw new Error("[composer] No composer found for the given ID");
					if (this._composerDataService.getComposerForceMode(ee) === "chat")
						return;
					const Q = (0, s.createEmptyCheckpoint)(),
						Z = this.getUrisForCheckpoints(te);
					for (const se of Z) {
						const re = c.URI.parse(se);
						if (!(await this._fileService.exists(re))) {
							Q.nonExistentFiles.push({ uri: re });
							continue;
						}
						try {
							const le = this._composerDataService.getInlineDiff(ee, re);
							if (le) {
								if ("newTextLines" in le && "originalTextLines" in le) {
									const oe = le.composerMetadata?.version ?? 0,
										ae = await this.computeLineDiffs(
											ee,
											re,
											le.originalTextLines,
										),
										pe = await this.computeLineDiffs(ee, re, le.newTextLines);
									this._composerDataService.updateComposerCodeBlock(
										ee,
										re,
										oe,
										{ newModelDiffWrtV0: pe, originalModelDiffWrtV0: ae },
									),
										Q.activeInlineDiffs.push({ uri: re, version: oe });
								}
							} else {
								const oe =
										await this._textModelService.createModelReference(re),
									ae = oe.object.textEditorModel,
									pe = await this.computeLineDiffs(
										ee,
										re,
										ae.getLinesContent(),
									);
								Q.files.push({ uri: re, originalModelDiffWrtV0: pe }),
									oe.dispose();
							}
						} catch (le) {
							console.error(
								`[composer] Error saving latest state for file ${se}:`,
								le,
							);
						}
					}
					if (_) {
						const se = _.files.filter(
							(re) =>
								re.isNewlyCreated &&
								!Q.files.find((le) => le.uri.toString() === re.uri.toString()),
						);
						Q.files.push(...se),
							(Q.newlyCreatedFolders = [..._.newlyCreatedFolders]);
					}
					return (
						(Q.inlineDiffNewlyCreatedResources = {
							files: [...te.newlyCreatedFiles],
							folders: [...te.newlyCreatedFolders],
						}),
						Q
					);
				}
				getCodeBlockDataFromBubbleId(ee, _) {
					const te = this._composerDataService.getComposerData(ee);
					if (!te)
						throw new Error("[composer] No composer found for the given ID");
					const Q = te.conversation.findIndex((re) => re.bubbleId === _);
					if (Q === -1)
						throw new Error(
							"[composer] No bubble found with the given bubble ID",
						);
					const Z = {};
					te.conversation.slice(Q).forEach((re) => {
						re.codeBlocks?.forEach((le) => {
							const oe = le.uri.toString();
							(!(oe in Z) || le.version < Z[oe]) && (Z[oe] = le.version);
						});
					});
					const se = { ...te.codeBlockData };
					if (Object.keys(Z).length > 0) {
						for (const [re, le] of Object.entries(Z))
							if (se[re]) {
								const oe = se[re].findIndex((ae) => ae.version === le);
								oe !== -1 && (se[re] = se[re].slice(0, oe)),
									se[re].length === 0 && delete se[re];
							}
					}
					return se;
				}
				removeMessagesAfterBubble(ee, _) {
					const te = this._composerDataService.getComposerData(ee);
					if (!te || _ === void 0) return;
					const Q = te.conversation.findIndex((oe) => oe.bubbleId === _);
					if (Q === -1) return;
					const Z = this.getCodeBlockDataFromBubbleId(ee, _);
					this._composerDataService.updateComposerDataSetStore(ee, (oe) =>
						oe("currentBubbleId", void 0),
					),
						this._composerDataService.updateComposerDataSetStore(ee, (oe) =>
							oe("latestCheckpoint", void 0),
						);
					const se = te.conversation.slice(0, Q);
					this._composerDataService.updateComposerDataSetStore(ee, (oe) =>
						oe("conversation", se),
					);
					const re = Object.keys(te.codeBlockData).filter((oe) => !(oe in Z));
					for (const oe of re)
						this._composerDataService.updateComposerDataSetStore(ee, (ae) =>
							ae("codeBlockData", oe, void 0),
						);
					for (const oe of Object.keys(Z))
						this._composerDataService.updateComposerDataSetStore(ee, (ae) =>
							ae("codeBlockData", oe, Z[oe]),
						);
					const le = [{ type: "extra" }, { type: "composer" }];
					for (const oe of Object.keys(Z))
						le.push({
							type: "code",
							uri: c.URI.parse(oe),
							version: Z[oe][Z[oe].length - 1].version,
						});
					this._composerDataService.updateComposerDataSetStore(ee, (oe) =>
						oe("tabs", le),
					);
				}
				applyDiffToLines(ee, _) {
					const te = [];
					let Q = 0;
					for (let Z = 0; Z < ee.length; Z++) {
						const se = ee[Z];
						if (Q < _.length) {
							const { original: re, modified: le } = _[Q];
							if (
								Z === re.startLineNumber - 1 &&
								(te.push(...le),
								Q++,
								re.endLineNumberExclusive !== re.startLineNumber)
							) {
								Z += re.endLineNumberExclusive - re.startLineNumber - 1;
								continue;
							}
						}
						te.push(se);
					}
					for (; Q < _.length; ) {
						const { original: Z, modified: se } = _[Q];
						te.push(...se), Q++;
					}
					return te;
				}
				async runCapabilitiesForProcess(ee, _, te, Q) {
					const Z = this._composerDataService.getComposerData(ee);
					if (!Z) return _ === "composer-settled" ? !1 : void 0;
					const se = (0, L.getCapabilitiesForProcess)(Z.capabilities, _, te);
					if (_ === "process-stream") {
						let le = te.stream;
						for (const oe of se)
							oe.processStream && (le = await oe.processStream(te));
						return le;
					}
					if (_ === "mutate-request") {
						for (const le of se)
							await le.runInPlaceMutateRequestBeforeSubmit?.(Q?.request, te);
						return;
					}
					if (_ === "start-submit-chat") {
						const le = se
							.filter((oe) => oe.onStartSubmitChatReturnShouldStop)
							.sort((oe, ae) => oe.priority - ae.priority);
						for (const oe of le)
							if (await oe.onStartSubmitChatReturnShouldStop?.(te)) return !0;
					}
					if (_ === "before-submit-chat") {
						const le = se
							.filter((oe) => oe.onBeforeSubmitChat)
							.sort((oe, ae) => oe.priority - ae.priority);
						for (const oe of le)
							if (await oe.onBeforeSubmitChat?.(te)) return !0;
						return !1;
					}
					const re = await Promise.all(
						se.map(async (le) => {
							switch (_) {
								case "process-codeblock":
									await le.processCodeBlock?.(te);
									return;
								case "after-submit-chat":
									await le.onAfterSubmitChat?.(te);
									return;
								case "after-apply":
									await le.onAfterApply?.(te);
									return;
								case "composer-done":
									await le.onComposerDone?.(te);
									return;
								case "composer-settled":
									return (
										(await le.onComposerSettledReturnShouldLoop?.(te)) ?? !1
									);
								default:
									return;
							}
						}),
					);
					if (_ === "composer-settled") return re.some((le) => le === !0);
				}
				async *handleTaskStreamChatContextResponse(ee, _, te, Q) {
					const Z = { stack: [], error: void 0, hasError: !1 };
					try {
						const se = ms(
								Z,
								(0, z.span)(
									"ComposerUtilsService.handleTaskStreamChatContextResponse",
								),
								!1,
							),
							re = this._aiTaskService.handleTaskGetStream(ee, Q);
						for await (const le of re)
							switch (le.response.case) {
								case "output": {
									yield { text: le.response.value.text };
									break;
								}
								case "gatheringStep": {
									this._composerDataService.updateComposerBubble(_, te, {
										steps: [
											...(this._composerDataService.getComposerBubble(_, te)
												?.steps || []),
											{ type: "gathering", data: le.response.value, files: [] },
										],
									});
									break;
								}
								case "rerankingStep": {
									this._composerDataService.updateComposerBubble(_, te, {
										steps: [
											...(this._composerDataService.getComposerBubble(_, te)
												?.steps || []),
											{ type: "reranking", data: le.response.value, files: [] },
										],
									});
									break;
								}
								case "reasoningStep": {
									this._composerDataService.updateComposerBubble(_, te, {
										steps: [
											...(this._composerDataService.getComposerBubble(_, te)
												?.steps || []),
											{
												type: "reasoning",
												data: le.response.value,
												substeps: [],
											},
										],
									});
									break;
								}
								case "reasoningSubstep": {
									this._composerDataService.updateComposerDataSetStore(
										_,
										(oe) =>
											oe(
												"conversation",
												(ae) => ae.bubbleId === te,
												"steps",
												(ae) =>
													ae.type === "reasoning" &&
													ae.data.index === le.response.value.stepIndex,
												"substeps",
												(ae) => [...ae, le.response.value],
											),
									);
									break;
								}
								case "gatheringFile": {
									this._composerDataService.updateComposerDataSetStore(
										_,
										(oe) =>
											oe(
												"conversation",
												(ae) => ae.bubbleId === te,
												"steps",
												(ae) =>
													ae.type === "gathering" &&
													ae.data.index === le.response.value.stepIndex,
												"files",
												(ae) => [...ae, le.response.value],
											),
									);
									break;
								}
								case "rerankingFile": {
									this._composerDataService.updateComposerDataSetStore(
										_,
										(oe) =>
											oe(
												"conversation",
												(ae) => ae.bubbleId === te,
												"steps",
												(ae) =>
													ae.type === "reranking" &&
													ae.data.index === le.response.value.stepIndex,
												"files",
												(ae) => [...ae, le.response.value],
											),
									);
									break;
								}
							}
					} catch (se) {
						(Z.error = se), (Z.hasError = !0);
					} finally {
						ps(Z);
					}
				}
				selectNextComposer() {
					const ee = this._composerDataService.selectedComposerId,
						_ = (0, M.sortComposers)([
							...this._composerDataService.allComposersData.allComposers.filter(
								(Q) =>
									this._composerDataService.getComposerForceMode(Q) !== "chat",
							),
						]),
						te = _.findIndex((Q) => Q.composerId === ee);
					if (te > 0) {
						const Q = _[te - 1].composerId;
						this._composerDataService.setAllComposersData(
							"selectedComposerId",
							Q,
						);
					} else
						this._composerDataService.setAllComposersData(
							"selectedComposerId",
							_[_.length - 1].composerId,
						);
				}
				selectPrevComposer() {
					const ee = this._composerDataService.selectedComposerId,
						_ = (0, M.sortComposers)([
							...this._composerDataService.allComposersData.allComposers.filter(
								(Q) =>
									this._composerDataService.getComposerForceMode(Q) !== "chat",
							),
						]),
						te = _.findIndex((Q) => Q.composerId === ee);
					if (te < _.length - 1) {
						const Q = _[te + 1].composerId;
						this._composerDataService.setAllComposersData(
							"selectedComposerId",
							Q,
						);
					} else
						this._composerDataService.setAllComposersData(
							"selectedComposerId",
							_[0].composerId,
						);
				}
				selectNextComposerChat() {
					const ee = this._composerDataService.selectedChatId,
						_ = (0, M.sortComposers)([
							...this._composerDataService.allComposersData.allComposers.filter(
								(Q) =>
									this._composerDataService.getComposerForceMode(Q) === "chat",
							),
						]),
						te = _.findIndex((Q) => Q.composerId === ee);
					if (te > 0) {
						const Q = _[te - 1].composerId;
						this._composerDataService.setAllComposersData("selectedChatId", Q);
					} else
						this._composerDataService.setAllComposersData(
							"selectedChatId",
							_[_.length - 1].composerId,
						);
				}
				selectPrevComposerChat() {
					const ee = this._composerDataService.selectedChatId,
						_ = (0, M.sortComposers)([
							...this._composerDataService.allComposersData.allComposers.filter(
								(Q) =>
									this._composerDataService.getComposerForceMode(Q) === "chat",
							),
						]),
						te = _.findIndex((Q) => Q.composerId === ee);
					if (te < _.length - 1) {
						const Q = _[te + 1].composerId;
						this._composerDataService.setAllComposersData("selectedChatId", Q);
					} else
						this._composerDataService.setAllComposersData(
							"selectedChatId",
							_[0].composerId,
						);
				}
				async computeDiff(ee, _, te) {
					if (ee === _) return new g.$dB({ chunks: [], hitTimeout: !1 });
					const Q = await this.computeLinesDiffWithSemaphore({
						first: ee,
						second: _,
						options: {
							ignoreTrimWhitespace: !0,
							computeMoves: !1,
							maxComputationTimeMs: 1e3,
						},
					});
					if (Q.hitTimeout) return new g.$dB({ chunks: [], hitTimeout: !0 });
					const re = Q.changes
						.map((le) => {
							const oe = ee
									.split(`
`)
									.slice(
										le.original.startLineNumber - 1,
										le.original.endLineNumberExclusive - 1,
									)
									.map((pe) => "- " + pe),
								ae = _.split(`
`)
									.slice(
										le.modified.startLineNumber - 1,
										le.modified.endLineNumberExclusive - 1,
									)
									.map((pe) => "+ " + pe);
							return new g.$eB({
								diffString: [...oe, ...ae].join(`
`),
								oldStart: le.original.startLineNumber,
								newStart: le.modified.startLineNumber,
								oldLines:
									le.original.endLineNumberExclusive -
									le.original.startLineNumber,
								newLines:
									le.modified.endLineNumberExclusive -
									le.modified.startLineNumber,
								linesAdded:
									le.modified.endLineNumberExclusive -
									le.modified.startLineNumber,
								linesRemoved:
									le.original.endLineNumberExclusive -
									le.original.startLineNumber,
							});
						})
						.reduce((le, oe) => {
							if (le.length === 0) return [oe];
							const ae = le[le.length - 1];
							return (
								this.shouldMergeChunks(ae, oe)
									? (le[le.length - 1] = this.mergeChunks(ae, oe, ee, _))
									: le.push(oe),
								le
							);
						}, [])
						.map((le) => this.growChunk(le, ee, _));
					return new g.$dB({ chunks: re, hitTimeout: !1 });
				}
				computeLinesDiffWithSemaphore({ first: ee, second: _, options: te }) {
					return this._composerDiffSemaphore.withSemaphore(async () => {
						const Q = await (0, $.$ojb)(ee),
							Z = await (0, $.$ojb)(_),
							se = JSON.stringify({ firstSha1: Q, secondSha1: Z }),
							re = this._composerDiffCache.get(se);
						if (re) return re;
						const le = await this._editorWorkerService.computeLinesDiff(
							ee.split(`
`),
							_.split(`
`),
							te,
						);
						return this._composerDiffCache.set(se, le), le;
					});
				}
				shouldMergeChunks(ee, _) {
					return _.newStart - (ee.newStart + ee.newLines) <= X;
				}
				mergeChunks(ee, _, te, Q) {
					const Z = Q.split(`
`)
						.slice(ee.newStart + ee.newLines - 1, _.newStart - 1)
						.map((se) => "  " + se);
					return new g.$eB({
						diffString:
							ee.diffString +
							(Z.length > 0
								? `
` +
									Z.join(`
`) +
									`
`
								: `
`) +
							_.diffString,
						oldStart: ee.oldStart,
						newStart: ee.newStart,
						oldLines: _.oldStart + _.oldLines - ee.oldStart,
						newLines: _.newStart + _.newLines - ee.newStart,
						linesRemoved: ee.linesRemoved + _.linesRemoved,
						linesAdded: ee.linesAdded + _.linesAdded,
					});
				}
				growChunk(ee, _, te) {
					const Q = _.split(`
`),
						Z = te.split(`
`),
						se = Math.max(1, ee.newStart - Y),
						re = Math.min(Z.length + 1, ee.newStart + ee.newLines + Y),
						le = Math.max(1, ee.oldStart - Y),
						oe = Math.min(Q.length + 1, ee.oldStart + ee.oldLines + Y),
						ae = Z.slice(se - 1, ee.newStart - 1).map((ye) => "  " + ye),
						pe = Z.slice(ee.newStart + ee.newLines - 1, re - 1).map(
							(ye) => "  " + ye,
						),
						$e = ee.diffString.split(`
`);
					return new g.$eB({
						diffString: [...ae, ...$e, ...pe].join(`
`),
						oldStart: le,
						newStart: se,
						oldLines: oe - le,
						newLines: re - se,
						linesAdded: ee.linesAdded,
						linesRemoved: ee.linesRemoved,
					});
				}
				codeChunkHasFullFileIntent(ee) {
					return (
						ee.intent !== void 0 &&
						[
							g.ConversationMessage_CodeChunk_Intent.COMPOSER_FILE,
							g.ConversationMessage_CodeChunk_Intent.MENTIONED_FILE,
						].includes(ee.intent)
					);
				}
				async getRootFolderFileTreeWithDistance(ee, _) {
					const te = async (Z, se = 0, re = "", le = !0) => {
							if (se > _) return "";
							const oe = await this._fileService.resolve(Z, {
									resolveMetadata: !0,
								}),
								ae = "/" + this._workspaceContextService.asRelativePath(Z);
							if (
								this._gitIgnoreFile &&
								ae !== "/" &&
								this._gitIgnoreFile.isArbitraryPathIgnored(
									Z.path,
									oe.isDirectory,
								)
							)
								return "";
							let pe =
								re +
								(le ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ") +
								oe.name +
								`
`;
							if (oe.isDirectory && oe.children) {
								const $e = oe.children.sort((ye, ue) =>
									ye.isDirectory === ue.isDirectory
										? ye.name.localeCompare(ue.name)
										: ye.isDirectory
											? -1
											: 1,
								);
								for (let ye = 0; ye < $e.length; ye++) {
									const ue = $e[ye],
										fe = c.URI.joinPath(Z, ue.name),
										me = re + (le ? "    " : "\u2502   "),
										ve = ye === $e.length - 1;
									pe += await te(fe, se + 1, me, ve);
								}
							}
							return pe;
						},
						Q = await te(ee);
					return (
						console.log(
							`[composer] root folder file tree within distance ${_}:`,
							Q,
						),
						Q
					);
				}
				async getFileTreeWithinDistance(ee, _) {
					const te =
							this._workspaceContextService.getWorkspace().folders[0].uri,
						Q = this._workspaceContextService.asRelativePath(ee);
					if (Q === "" || Q.indexOf("/") === -1)
						return this.getRootFolderFileTreeWithDistance(te, _ - 1);
					const Z = (oe) => c.URI.joinPath(oe, ".."),
						se = async (oe, ae, pe, $e = "", ye = !0) => {
							const ue = await this._fileService.resolve(oe, {
									resolveMetadata: !0,
								}),
								fe = "/" + this._workspaceContextService.asRelativePath(oe);
							if (
								this._gitIgnoreFile &&
								fe !== "/" &&
								this._gitIgnoreFile.isArbitraryPathIgnored(
									oe.path,
									ue.isDirectory,
								)
							)
								return "";
							let me =
								$e +
								(ye ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ") +
								ue.name +
								`
`;
							if (pe > 0 && ue.isDirectory && ue.children) {
								const ve = ue.children.sort((ge, be) =>
									ge.isDirectory === be.isDirectory
										? ge.name.localeCompare(be.name)
										: ge.isDirectory
											? -1
											: 1,
								);
								for (let ge = 0; ge < ve.length; ge++) {
									const be = ve[ge],
										Ce = c.URI.joinPath(oe, be.name),
										Le = $e + (ye ? "    " : "\u2502   "),
										Fe = ge === ve.length - 1;
									this.getDistance(Ce, ae) <= _ &&
										(me += await se(Ce, ae, pe - 1, Le, Fe));
								}
							}
							return me;
						};
					let re = ee;
					for (
						let oe = 0;
						oe < _ && !re.toString().startsWith(te.toString());
						oe++
					) {
						const ae = Z(re);
						if (ae.toString() === re.toString()) break;
						re = ae;
					}
					const le = await se(re, ee, _);
					return (
						console.log(
							`[composer] file tree within distance ${_} of ${ee.fsPath}:`,
							le,
						),
						le
					);
				}
				getDistance(ee, _) {
					const te = ee.path.split("/").filter(Boolean),
						Q = _.path.split("/").filter(Boolean);
					let Z = 0;
					for (; Z < te.length && Z < Q.length && te[Z] === Q[Z]; ) Z++;
					return te.length - Z + (Q.length - Z);
				}
				async getGitIgnoreFile(ee) {
					const _ = c.URI.joinPath(ee, ".gitignore");
					try {
						if (!(await this._fileService.exists(_))) return null;
						const Q = await this._fileService.readFile(_);
						return new S.$sXb(Q.value.toString(), ee.path);
					} catch (te) {
						return console.error("Error reading .gitignore file:", te), null;
					}
				}
				async initializeGitIgnoreFile() {
					const ee =
						this._workspaceContextService.getWorkspace().folders[0]?.uri;
					if (ee) {
						const _ = c.URI.joinPath(ee, "node_modules");
						this._gitIgnoreFile = await this.getGitIgnoreFile(ee);
					}
				}
				async getFileDiff(ee, _, te) {
					const se = (
							await new I.$rqb().diffLines(
								_.join(`
`),
								ee.join(`
`),
								!1,
								{ ignoreWhitespace: !0 },
							)
						).flatMap((ye) =>
							ye.value
								.split(`
`)
								.map((ue) => ({
									added: ye.added,
									removed: ye.removed,
									value: ue,
								})),
						),
						re = [],
						le = 3,
						oe = (ye) => ye.trim() === "";
					let ae = null,
						pe = -1;
					for (let ye = 0; ye < se.length; ye++) {
						const ue = se[ye],
							fe = (ue.added || ue.removed) && !oe(ue.value);
						if (fe || (ae && ye - pe <= le)) {
							if (!ae) {
								ae = { lines: [], startLine: Math.max(0, ye - le) };
								for (let me = Math.max(0, ye - le); me < ye; me++)
									ae.lines.push(` ${se[me].value}`);
							}
							fe
								? (ae.lines.push(`${ue.added ? "+" : "-"} ${ue.value}`),
									(pe = ye))
								: ae.lines.push(`  ${ue.value}`);
						} else
							ae &&
								(re.push(
									new n.$Es({
										content: `@@ -${ae.startLine + 1},${ae.lines.length} +${ae.startLine + 1},${ae.lines.length} @@`,
										lines: ae.lines,
									}),
								),
								(ae = null));
					}
					return (
						ae &&
							re.push(
								new n.$Es({
									content: `@@ -${ae.startLine + 1},${ae.lines.length} +${ae.startLine + 1},${ae.lines.length} @@`,
									lines: ae.lines,
								}),
							),
						new p.$Ds({ from: te, to: te, chunks: re })
					);
				}
				shouldShowCancel(ee) {
					const _ = this._composerDataService.getComposerData(ee);
					return _
						? this._composerDataService.getPendingUserDecisionGroup(ee).length >
								0 ||
							_.status === "generating" ||
							this._composerDataService
								.getCodeBlocksOfStatuses(ee, "applying")
								.filter((Z) => !Z.isNotApplied).length > 0
							? !0
							: this._composerDataService.isRunningCapabilities(ee)
						: !1;
				}
				changeCodeBlockUri(ee, _, te, Q) {
					const Z = this._composerDataService.getComposerData(ee);
					if (!Z)
						throw new Error("[composer] No composer found for the given ID");
					const se = _.toString(),
						re = te.toString(),
						le = Z.conversation.findIndex((pe) =>
							pe.codeBlocks?.some(
								($e) => $e.uri.toString() === se && $e.version === Q,
							),
						);
					if (le === -1)
						throw new Error(
							"[composer] No message found containing the specified codeblock",
						);
					const oe = Z.conversation[le].codeBlocks?.findIndex(
						(pe) => pe.uri.toString() === se && pe.version === Q,
					);
					if (oe === void 0 || oe === -1)
						throw new Error("[composer] Codeblock not found in the message");
					const ae = this.determineNewVersion(Z, re, le, oe);
					if (
						(this.updateCodeBlockVersions(ee, _, te, Q, ae, le),
						Z.codeBlockData[se])
					) {
						const pe = Z.codeBlockData[se],
							$e = pe.findIndex((ye) => ye.version === Q);
						if ($e !== -1) {
							const ye = { ...pe[$e], uri: te, version: ae },
								ue = pe.filter((fe, me) => me !== $e);
							ue.length === 0
								? this._composerDataService.updateComposerDataSetStore(
										ee,
										(fe) => fe("codeBlockData", se, void 0),
									)
								: this._composerDataService.updateComposerDataSetStore(
										ee,
										(fe) => fe("codeBlockData", se, ue),
									),
								this._composerDataService.updateComposerDataSetStore(ee, (fe) =>
									fe("codeBlockData", re, (me = []) =>
										[...me, ye].sort((ge, be) => ge.version - be.version),
									),
								);
						}
					}
					this._onShouldResetCodeBlockCount.fire({
						composerId: ee,
						messageIndex: le,
					}),
						Z.conversation.forEach((pe, $e) => {
							if (pe.codeBlocks) {
								const ye = pe.codeBlocks.map((ue) =>
									ue.uri.toString() === se && ue.version === Q
										? { ...ue, uri: te, version: ae }
										: ue,
								);
								if (
									(this._composerDataService.updateComposerDataSetStore(
										ee,
										(ue) => ue("conversation", $e, "codeBlocks", ye),
									),
									$e === le)
								) {
									const ue = this._workspaceContextService.asRelativePath(te),
										fe = (0, F.replaceUriInCodeBlock)(pe.text, oe, ue);
									this._composerDataService.updateComposerDataSetStore(
										ee,
										(me) => me("conversation", $e, "text", fe),
									);
								}
							}
						});
					for (let pe = le + 1; pe < Z.conversation.length; pe++)
						if (
							Z.conversation[pe].type === g.ConversationMessage_MessageType.AI
						) {
							const $e = Z.conversation[pe].text;
							this._composerDataService.updateComposerDataSetStore(ee, (ye) =>
								ye("conversation", pe, "text", $e + " "),
							),
								this._composerDataService.updateComposerDataSetStore(ee, (ye) =>
									ye("conversation", pe, "text", $e),
								);
						}
					return ae;
				}
				determineNewVersion(ee, _, te, Q) {
					const Z = new Set();
					for (let re = 0; re <= te; re++)
						ee.conversation[re].codeBlocks?.forEach((oe, ae) => {
							oe.uri.toString() === _ &&
								(re < te || (re === te && ae < Q)) &&
								Z.add(oe.version);
						});
					let se = 0;
					for (; Z.has(se); ) se++;
					return se;
				}
				updateCodeBlockVersions(ee, _, te, Q, Z, se) {
					const re = this._composerDataService.getComposerData(ee);
					if (!re) return;
					const le = _.toString(),
						oe = te.toString();
					if (re.codeBlockData[le]) {
						const ae = re.codeBlockData[le].map((pe) =>
							pe.version > Q ? { ...pe, version: pe.version - 1 } : pe,
						);
						this._composerDataService.updateComposerDataSetStore(ee, (pe) =>
							pe("codeBlockData", le, ae),
						);
					}
					if (re.codeBlockData[oe]) {
						const ae = re.codeBlockData[oe].map((pe) =>
							pe.version >= Z ? { ...pe, version: pe.version + 1 } : pe,
						);
						this._composerDataService.updateComposerDataSetStore(ee, (pe) =>
							pe(
								"codeBlockData",
								oe,
								ae.sort(($e, ye) => $e.version - ye.version),
							),
						);
					}
					re.conversation.forEach((ae, pe) => {
						if (pe >= se && ae.codeBlocks) {
							const $e = ae.codeBlocks.map((ye) =>
								ye.uri.toString() === le && ye.version > Q
									? { ...ye, version: ye.version - 1 }
									: ye.uri.toString() === oe && ye.version >= Z
										? { ...ye, version: ye.version + 1 }
										: ye,
							);
							this._composerDataService.updateComposerDataSetStore(ee, (ye) =>
								ye("conversation", pe, "codeBlocks", $e),
							);
						}
					});
				}
				getFilesToRevertForCheckpoint(ee, _, te, Q) {
					const Z = this._composerDataService.getComposerData(ee);
					if (!Z)
						throw new Error("[composer] No composer found for the given ID");
					const se = new Set(
							Q.activeInlineDiffs?.map(($e) => $e.uri.toString()) ?? [],
						),
						re = new Set(),
						le = new Map();
					Q.newlyCreatedFolders.forEach(($e) => {
						re.add($e.uri.toString());
					});
					const oe = _ + 1,
						ae = te;
					for (const $e of Z.conversation.slice(oe, ae)) {
						const ye = $e.checkpoint;
						ye &&
							(ye.files.forEach((ue) => {
								const fe = ue.uri.toString();
								!Q.files.some((me) => me.uri.toString() === fe) &&
									!le.has(fe) &&
									!se.has(fe) &&
									le.set(fe, { checkpoint: ye });
							}),
							ye.newlyCreatedFolders.forEach((ue) => {
								re.add(ue.uri.toString());
							}));
					}
					return {
						filesToRevert: new Set([
							...Q.files
								.filter(($e) => !se.has($e.uri.toString()))
								.map(($e) => $e.uri.toString()),
							...le.keys(),
						]),
						intermediateFiles: le,
						foldersToDelete: re,
					};
				}
				async isCheckpointSameAsCurrent(ee, _) {
					const te = this._composerDataService.getComposerData(ee);
					if (!te) return !1;
					let Q,
						Z = new Set(),
						se = new Map(),
						re = new Set();
					if (typeof _ == "string") {
						const oe = te.conversation.findIndex(($e) => $e.bubbleId === _);
						if (oe === -1)
							return (
								console.error(
									"[composer] No message found with the given bubble ID",
								),
								!1
							);
						const ae = te.conversation[oe].checkpoint;
						if (!ae) return !0;
						Q = ae;
						const pe = te.currentBubbleId
							? te.conversation.findIndex(
									($e) => $e.bubbleId === te.currentBubbleId,
								)
							: te.conversation.length - 1;
						({
							filesToRevert: Z,
							intermediateFiles: se,
							foldersToDelete: re,
						} = this.getFilesToRevertForCheckpoint(ee, oe, pe, Q));
					} else {
						Q = _;
						const oe = new Set(
							Q.activeInlineDiffs?.map((ae) => ae.uri.toString()) ?? [],
						);
						Z = new Set(
							Q.files
								.map((ae) => ae.uri.toString())
								.filter((ae) => !oe.has(ae)),
						);
					}
					const le = await this._composerDataService.getCurrentFilesContent(
						Array.from(Z),
					);
					for (const oe of Z) {
						let ae;
						if (Q.files.some(($e) => $e.uri.toString() === oe))
							ae = Q.files.find(($e) => $e.uri.toString() === oe);
						else {
							const $e = se.get(oe);
							$e &&
								(ae = $e.checkpoint.files.find(
									(ye) => ye.uri.toString() === oe,
								));
						}
						const pe = le.get(oe) || [];
						if (ae)
							if (ae.isNewlyCreated) {
								if (await this._fileService.exists(ae.uri)) return !1;
							} else {
								if (!(await this._fileService.exists(ae.uri))) return !1;
								const $e =
									this.getCodeBlockLinesByDiff(
										te.composerId,
										ae.uri,
										ae.originalModelDiffWrtV0 ?? [],
									) ?? [];
								if (!this.areContentsEqual(pe, $e ?? [])) return !1;
							}
						else if (pe.length > 0) return !1;
					}
					if (re.size > 0 || Q.nonExistentFiles.length > 0) return !1;
					for (const oe of Q.activeInlineDiffs ?? []) {
						const { uri: ae, version: pe } = oe,
							$e =
								this._reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
									(ye) => ye.uri.toString() === ae.toString(),
								);
						if (
							!$e ||
							pe !== $e.composerMetadata?.version ||
							te.composerId !== $e.composerMetadata?.composerId
						)
							return !1;
					}
					return !0;
				}
				areContentsEqual(ee, _) {
					if (ee.length !== _.length) return !1;
					for (let te = 0; te < ee.length; te++)
						if (ee[te] !== _[te]) return !1;
					return !0;
				}
				async computeLineDiffs(ee, _, te) {
					const Q = this.getCodeBlockV0ModelLines(ee, _);
					if (!Q) return [];
					const Z = await this._editorWorkerService.computeLinesDiff(Q, te, {
						ignoreTrimWhitespace: !1,
						computeMoves: !1,
						maxComputationTimeMs: 500,
						...W,
					});
					let se = Z.changes;
					return (
						Z.hitTimeout &&
							(se = [
								new G.$CL(
									new V.$rL(1, Q.length + 1),
									new V.$rL(1, te.length + 1),
									void 0,
								),
							]),
						se.map((le) => ({
							original: le.original,
							modified: te.slice(
								le.modified.startLineNumber - 1,
								le.modified.endLineNumberExclusive - 1,
							),
						}))
					);
				}
				createCodeBlockCacheKey(ee, _, te) {
					return `${typeof ee == "string" ? ee : ee.data.composerId}-${_.toString()}-${te}`;
				}
				getCodeBlockLinesByDiff(ee, _, te) {
					if (!this._composerDataService.getComposerData(ee)) return null;
					const Z = this.getCodeBlockV0ModelLines(ee, _);
					return te.length === 0
						? (Z ?? [])
						: this.applyDiffToLines(Z ?? [], te);
				}
				getCodeBlockV0ModelLines(ee, _) {
					const te = this._composerDataService.getComposerData(ee);
					return te
						? te.originalModelLines[_.toString()]
							? te.originalModelLines[_.toString()]
							: (this._composerDataService.getComposerCodeBlock(ee, _, 0)
									?.originalModelLines ?? null)
						: null;
				}
				getCodeBlockOriginalModelLines(ee, _, te, Q) {
					if (!this._composerDataService.getComposerData(ee)) return null;
					const se = this._composerDataService.getComposerCodeBlock(ee, _, te);
					if (!se || !se.originalModelDiffWrtV0) return null;
					if (!Q?.shouldChain && se.isChained) {
						const re = this._composerDataService.getComposerCodeBlock(
							ee,
							_,
							te - 1,
						);
						return !re || !re.newModelDiffWrtV0
							? null
							: this.getCodeBlockLinesByDiff(ee, _, re.newModelDiffWrtV0 ?? []);
					}
					return this.getCodeBlockLinesByDiff(
						ee,
						_,
						se.originalModelDiffWrtV0 ?? [],
					);
				}
				getCodeBlockNewModelLines(ee, _, te) {
					if (!this._composerDataService.getComposerData(ee)) return null;
					const Z = this._composerDataService.getComposerCodeBlock(ee, _, te);
					return !Z || !Z.newModelDiffWrtV0
						? null
						: this.getCodeBlockLinesByDiff(ee, _, Z.newModelDiffWrtV0 ?? []);
				}
				constructDiffResources(ee) {
					const _ = this._composerDataService.getComposerData(ee);
					return _
						? _.tabs
								.filter((Q) => Q.type === "code")
								.filter(
									(Q) =>
										!!this._composerDataService.getInlineDiff(
											_.composerId,
											Q.uri,
										),
								)
								.map((Q) => {
									const Z = this.getCodeBlockOriginalModelLines(
											ee,
											Q.uri,
											Q.version,
										),
										se = this.getCodeBlockNewModelLines(ee, Q.uri, Q.version),
										re =
											Z?.join(`
`) ?? "",
										le =
											se?.join(`
`) ?? "";
									return {
										original: {
											resource: Q.uri.with({ fragment: "original" }),
											contents: re,
										},
										modified: { resource: Q.uri, contents: le },
									};
								})
						: [];
				}
				shouldShowCheckpointInToolFormerMessage(ee, _) {
					switch (_.tool) {
						case B.ClientSideToolV2.EDIT_FILE: {
							if (!_.params?.relativeWorkspacePath) return !1;
							const Q = this._workspaceContextService.resolveRelativePath(
								_.params.relativeWorkspacePath,
							);
							if (!Q) return !1;
							const Z = _.additionalData?.version;
							if (Z === void 0) return !1;
							const se = this._composerDataService.getComposerCodeBlock(
								ee,
								Q,
								Z,
							);
							return se ? !["generating", "aborted"].includes(se.status) : !1;
						}
						case B.ClientSideToolV2.PARALLEL_APPLY:
							return !0;
						case B.ClientSideToolV2.DELETE_FILE:
							return _.userDecision === "accepted";
						default:
							return !1;
					}
				}
			};
			(e.ComposerUtilsService = ie),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.ensureCapabilitiesAreLoaded")],
					ie.prototype,
					"ensureCapabilitiesAreLoaded",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getShouldChatUseTools")],
					ie.prototype,
					"getShouldChatUseTools",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getShouldAutoSaveAgenticEdits")],
					ie.prototype,
					"getShouldAutoSaveAgenticEdits",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.replacedBubbleForFastEdit")],
					ie.prototype,
					"replacedBubbleForFastEdit",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.processConversationForFastEdit")],
					ie.prototype,
					"processConversationForFastEdit",
					null,
				),
				Ne(
					[
						(0, z.$KOb)(
							"ComposerUtilsService.populateCodeChunksInConversation",
						),
					],
					ie.prototype,
					"populateCodeChunksInConversation",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.populateRedDiffsInConversation")],
					ie.prototype,
					"populateRedDiffsInConversation",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getRecentEdits")],
					ie.prototype,
					"getRecentEdits",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getRecentlyViewedFileInfo")],
					ie.prototype,
					"getRecentlyViewedFileInfo",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.handleStreamComposer")],
					ie.prototype,
					"handleStreamComposer",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.intermediateChunkMiddleware")],
					ie.prototype,
					"intermediateChunkMiddleware",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getAutoContextFiles")],
					ie.prototype,
					"getAutoContextFiles",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.readFileContents")],
					ie.prototype,
					"readFileContents",
					null,
				),
				Ne(
					[
						(0, z.$KOb)(
							"ComposerUtilsService.populateConversationWithExtraContext",
						),
					],
					ie.prototype,
					"populateConversationWithExtraContext",
					null,
				),
				Ne(
					[
						(0, z.$KOb)(
							"ComposerUtilsService.addContinuationPromptToConversation",
						),
					],
					ie.prototype,
					"addContinuationPromptToConversation",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getUrisForCheckpoints")],
					ie.prototype,
					"getUrisForCheckpoints",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.createCurrentCheckpoint")],
					ie.prototype,
					"createCurrentCheckpoint",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getCodeBlockDataFromBubbleId")],
					ie.prototype,
					"getCodeBlockDataFromBubbleId",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.removeMessagesAfterBubble")],
					ie.prototype,
					"removeMessagesAfterBubble",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.runCapabilitiesForProcess")],
					ie.prototype,
					"runCapabilitiesForProcess",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.selectNextComposer")],
					ie.prototype,
					"selectNextComposer",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.selectPrevComposer")],
					ie.prototype,
					"selectPrevComposer",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.selectNextComposerChat")],
					ie.prototype,
					"selectNextComposerChat",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.selectPrevComposerChat")],
					ie.prototype,
					"selectPrevComposerChat",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.computeDiff")],
					ie.prototype,
					"computeDiff",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.growChunk")],
					ie.prototype,
					"growChunk",
					null,
				),
				Ne(
					[
						(0, z.$KOb)(
							"ComposerUtilsService.getRootFolderFileTreeWithDistance",
						),
					],
					ie.prototype,
					"getRootFolderFileTreeWithDistance",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getGitIgnoreFile")],
					ie.prototype,
					"getGitIgnoreFile",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.initializeGitIgnoreFile")],
					ie.prototype,
					"initializeGitIgnoreFile",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getFileDiff")],
					ie.prototype,
					"getFileDiff",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.shouldShowCancel")],
					ie.prototype,
					"shouldShowCancel",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.changeCodeBlockUri")],
					ie.prototype,
					"changeCodeBlockUri",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getFilesToRevertForCheckpoint")],
					ie.prototype,
					"getFilesToRevertForCheckpoint",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.isCheckpointSameAsCurrent")],
					ie.prototype,
					"isCheckpointSameAsCurrent",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.areContentsEqual")],
					ie.prototype,
					"areContentsEqual",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.computeLineDiffs")],
					ie.prototype,
					"computeLineDiffs",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getCodeBlockLinesByDiff")],
					ie.prototype,
					"getCodeBlockLinesByDiff",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getCodeBlockV0ModelLines")],
					ie.prototype,
					"getCodeBlockV0ModelLines",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getCodeBlockOriginalModelLines")],
					ie.prototype,
					"getCodeBlockOriginalModelLines",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getCodeBlockNewModelLines")],
					ie.prototype,
					"getCodeBlockNewModelLines",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.constructDiffResources")],
					ie.prototype,
					"constructDiffResources",
					null,
				),
				(e.ComposerUtilsService = ie =
					Ne(
						[
							j(0, i.IComposerDataService),
							j(1, d.$Nfc),
							j(2, u.$Vi),
							j(3, r.$IY),
							j(4, y.$Cxb),
							j(5, h.$ll),
							j(6, a.$3Db),
							j(7, o.$J6b),
							j(8, f.$cEb),
							j(9, l.$Q9b),
							j(10, P.$0zb),
							j(11, k.$MO),
							j(12, D.$a9b),
							j(13, N.$Feb),
							j(14, U.$H7b),
							j(15, t.$Li),
						],
						ie,
					)),
				(0, E.$lK)(e.IComposerUtilsService, ie, C.InstantiationType.Delayed);
		},
	),
		define(
			de[3954],
			he([
				1, 0, 9, 67, 18, 167, 219, 262, 395, 351, 209, 506, 47, 200, 126, 25,
				42, 426,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.DiffHistory = void 0);
				let f = class extends d.ComposerCapability {
					constructor(s, l, y, $, v, S, I, T, P, k, L) {
						super(s, l),
							(this.composerDataService = y),
							(this.composerService = $),
							(this.composerViewService = v),
							(this.modelService = S),
							(this.editorService = I),
							(this.editorWorkerService = T),
							(this.workspaceContextService = P),
							(this.textModelService = k),
							(this.composerUtilsService = L),
							(this.priority = 1),
							(this.type =
								E.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY),
							(this.name =
								d.capabilityTypeLabels[
									E.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY
								]),
							(this.schema = r.diffHistorySchema),
							(this.diffHistories = new Map()),
							this.D(
								$.onDidAiEditFile(({ path: D, version: M }) => {
									this.recordAiEdit(D, M);
								}),
							),
							this.D(
								$.onDidFinishAiEditToolCall(() => {
									const D = Array.from(this.diffHistories.keys());
									this.resetDiffHistories(D);
								}),
							);
					}
					recordAiEdit(s, l) {
						const y = this.composerDataService.getComposerCodeBlock(
							this.composerId,
							s,
							l,
						);
						if (!y || !y.originalModelDiffWrtV0 || !y.newModelDiffWrtV0) return;
						const $ = this.workspaceContextService.asRelativePath(s),
							v =
								this.composerUtilsService.getCodeBlockOriginalModelLines(
									this.composerId,
									s,
									l,
								) ?? [];
						this.diffHistories.has($) ||
							this.diffHistories.set($, {
								originalContent: v.join(`
`),
								events: [],
								relativeWorkspacePath: $,
							});
						const S = this.diffHistories.get($),
							I = S.events[S.events.length - 1],
							P =
								this.composerUtilsService
									.getCodeBlockNewModelLines(this.composerId, s, l)
									?.join(`
`) ?? "";
						if (I?.type === "ai_edit") {
							if (
								I.content ===
								v.join(`
`)
							) {
								I.content = P;
								return;
							}
							S.events.push({
								type: "user_edit",
								content: v.join(`
`),
								timestamp: Date.now() - 1,
							});
						}
						(S.events[S.events.length - 1]?.content ?? S.originalContent) !==
							P &&
							S.events.push({
								type: "ai_edit",
								content: P,
								timestamp: Date.now(),
							});
					}
					async compressHistory(s) {
						const l = [];
						let y = null;
						for (const T of s.events) {
							const k =
								T.type === "ai_edit"
									? n.ComposerFileDiff_Editor.AI
									: n.ComposerFileDiff_Editor.HUMAN;
							!y || y.editor !== k
								? (y && l.push(y),
									(y = {
										startContent: y?.endContent ?? s.originalContent,
										endContent: T.content,
										editor: k,
										events: [T],
									}))
								: (y.events.push(T), (y.endContent = T.content));
						}
						y && l.push(y);
						const $ = l[l.length - 1];
						$ &&
							$.endContent !== s.events[s.events.length - 1].content &&
							l.push({
								startContent: $.endContent,
								endContent: s.events[s.events.length - 1].content,
								editor: n.ComposerFileDiff_Editor.HUMAN,
								events: [
									{
										type: "user_edit",
										content: s.events[s.events.length - 1].content,
										timestamp: Date.now(),
									},
								],
							});
						const S = (
							await Promise.all(
								l.map(async (T, P) => {
									const k = await this.composerUtilsService.computeDiff(
										T.startContent,
										T.endContent,
										s.relativeWorkspacePath,
									);
									return k.chunks.length === 0
										? null
										: new n.$dB({
												chunks: k.chunks,
												editor: T.editor,
												hitTimeout: k.hitTimeout,
											});
								}),
							)
						).filter((T) => T !== null);
						if (S.length === 0) return null;
						const I = void 0;
						return new n.$fB({
							relativeWorkspacePath: s.relativeWorkspacePath,
							diffs: S,
							timestamp: Date.now(),
							uniqueId: (0, h.$9g)(),
							startToEndDiff: I,
						});
					}
					silentOnStartSubmitChat(s) {
						return !1;
					}
					supportsCacheWarming() {
						return !0;
					}
					async onStartSubmitChatReturnShouldStop(s) {
						if (s.submitChatProps.extra?.bubbleId !== void 0) return !1;
						const l = this.composerDataService.getComposerData(this.composerId);
						if (!l || l.currentBubbleId !== void 0) return !1;
						const y = [],
							$ = new Set(),
							v = Array.from(this.diffHistories.entries()),
							S = await Promise.allSettled(
								v.map(async ([T, P]) => {
									const k = [...P.events];
									try {
										const L =
											this.workspaceContextService.resolveRelativePath(T);
										$.add(T);
										let D;
										try {
											const N =
												await this.textModelService.createModelReference(L);
											(D = N.object.textEditorModel.getValue()), N.dispose();
										} catch (N) {
											console.error(
												`[diff-history] Failed to get current content for ${T}:`,
												N,
											);
										}
										if (
											(D !== void 0 &&
												D !== (k[k.length - 1]?.content ?? P.originalContent) &&
												k.push({
													type: "user_edit",
													content: D,
													timestamp: Date.now(),
												}),
											k.length === 0)
										)
											return null;
										const M = await this.compressHistory({ ...P, events: k });
										return M || null;
									} catch (L) {
										return (
											console.error(
												`[diff-history] Error processing history for ${T}:`,
												L,
											),
											null
										);
									}
								}),
							).then((T) =>
								T.map((P) => (P.status === "fulfilled" ? P.value : null)),
							);
						y.push(...S.filter((T) => T !== null));
						const I = {
							files: Array.from($).map((T) => t.URI.parse(T)),
							diffHistories: y,
							uniqueId: (0, h.$9g)(),
						};
						return (
							this.composerService.addContext({
								composerId: this.composerId,
								contextType: "diffHistory",
								value: I,
							}),
							!1
						);
					}
					silentRunInPlaceMutateRequestBeforeSubmit(s) {
						return !0;
					}
					async runInPlaceMutateRequestBeforeSubmit(s, l) {
						if (
							!this.composerDataService.getComposerData(l.composerId) ||
							s.conversation === void 0
						)
							return;
						for (let S = 0; S < s.conversation.length; S++) {
							const I = s.conversation[S];
							I.context?.diffHistory &&
								(s.conversation[S].diffHistories =
									I.context.diffHistory.diffHistories.map((T) =>
										n.$fB.fromJson(JSON.parse(JSON.stringify(T))),
									));
						}
						if (l.isCacheWarming) return;
						const v =
							s.conversation[s.conversation.length - 1]?.attachedCodeChunks;
						await this.resetDiffHistories(
							v?.map((S) => S.relativeWorkspacePath),
						);
					}
					async resetDiffHistories(s) {
						if ((this.diffHistories.clear(), s))
							for (const l of s) {
								const y = this.workspaceContextService.resolveRelativePath(l),
									$ = this.workspaceContextService.asRelativePath(y);
								let v;
								try {
									v = await this.textModelService.createModelReference(y);
									const I = v.object.textEditorModel?.getValue();
									if (I === void 0) continue;
									this.diffHistories.set($, {
										originalContent: I,
										events: [],
										relativeWorkspacePath: $,
									});
								} catch (S) {
									console.error(
										`[diff-history] Error recording original content for ${$}:`,
										S,
									);
								} finally {
									v?.dispose();
								}
							}
					}
				};
				(e.DiffHistory = f),
					(e.DiffHistory = f =
						Ne(
							[
								(0, m.autoCancellableAndStatusUpdater)(),
								j(2, u.IComposerDataService),
								j(3, C.IComposerService),
								j(4, a.IComposerViewsService),
								j(5, i.$QO),
								j(6, w.$IY),
								j(7, c.$Cxb),
								j(8, g.$Vi),
								j(9, p.$MO),
								j(10, o.IComposerUtilsService),
							],
							f,
						)),
					(0, d.registerComposerCapability)(
						E.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY,
						f,
					);
			},
		),
		define(
			de[3955],
			he([
				1, 0, 262, 148, 351, 626, 83, 9, 90, 25, 209, 126, 118, 454, 167, 395,
				426,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.LoopOnLints = void 0);
				let o = class extends t.ComposerCapability {
					constructor(b, s, l, y, $, v, S, I) {
						super(b, s),
							(this.shadowWorkspaceService = l),
							(this.markerService = y),
							(this.workspaceContextService = $),
							(this.composerDataService = v),
							(this.composerUtilsService = S),
							(this.aiService = I),
							(this.type =
								n.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_LINTS),
							(this.name =
								t.capabilityTypeLabels[
									n.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_LINTS
								]),
							(this.priority = 1),
							(this.schema = w.loopOnLintsSchema),
							(this.shouldDisplayStatus = !1);
					}
					shouldRunLoopOnLints(b) {
						const s = this.composerDataService.getComposerData(b);
						return !s?.isAgentic && s?.forceMode !== "chat";
					}
					shouldRunOnBeforeSubmitChat(b) {
						return this.shouldRunLoopOnLints(b.composerId)
							? this.shouldDisplayStatus
							: !1;
					}
					silentOnBeforeSubmitChat() {
						return !this.shouldDisplayStatus;
					}
					async onBeforeSubmitChat(b) {
						this.shouldDisplayStatus = !1;
					}
					silentRunInPlaceMutateRequestBeforeSubmit() {
						return !0;
					}
					shouldRunInPlaceMutateRequestBeforeSubmit(b) {
						return this.shouldRunLoopOnLints(b.composerId);
					}
					async runInPlaceMutateRequestBeforeSubmit(b, s) {
						const { composerId: l } = s,
							y = this.composerDataService.getComposerData(l),
							$ = b.conversation?.[b.conversation.length - 1];
						if (!$ || !y || $.type !== a.ConversationMessage_MessageType.HUMAN)
							return;
						let v = [];
						if (
							(this.data.shadowWorkspace
								? (v =
										await this.getLinterErrorsForComposerUsingShadowWorkspace(
											y,
										))
								: (v = await this.getLinterErrorsForComposer(y)),
							v.length === 0)
						)
							return;
						const S = new n.$1z({
							type: n.ComposerCapabilityRequest_ComposerCapabilityType
								.LOOP_ON_LINTS,
							data: {
								case: "loopOnLints",
								value: {
									linterErrors: v,
									customInstructions: this.data.customInstructions,
								},
							},
						});
						$.capabilities = [...($.capabilities ?? []), S];
					}
					shouldRunOnComposerSettled(b) {
						return this.shouldRunLoopOnLints(b.composerId);
					}
					async onComposerSettledReturnShouldLoop(b) {
						const { composerId: s } = b,
							l = this.composerDataService.getComposerData(s);
						if (!l) return (this.shouldDisplayStatus = !1), !1;
						const y = (0,
							t.countCapabilityIterationsFromLastHumanMessageExcludingCurrent)(
								l.conversation,
							),
							$ = this.data.maxIterations;
						if (y >= $) return (this.shouldDisplayStatus = !1), !1;
						await new Promise((I) => setTimeout(I, 500));
						let v = [];
						this.data.shadowWorkspace
							? (v =
									await this.getLinterErrorsForComposerUsingShadowWorkspace(l))
							: (v = await this.getLinterErrorsForComposer(l));
						const S = v.length > 0;
						return (this.shouldDisplayStatus = S), S;
					}
					async getLinterErrorsForComposerUsingShadowWorkspace(b) {
						try {
							const s = await this.shadowWorkspaceService.getClient(),
								l = Object.values(b.codeBlockData ?? {}).flatMap((S) => {
									if (S.length === 0) return [];
									const I =
											"/" +
											this.workspaceContextService.asRelativePath(S[0]?.uri),
										T = b.composerId,
										P = this.composerUtilsService.getCodeBlockNewModelLines(
											T,
											S[0]?.uri,
											S[0]?.version,
										),
										k =
											this.composerUtilsService.getCodeBlockOriginalModelLines(
												T,
												S[0]?.uri,
												S[0]?.version,
											);
									return {
										relativeWorkspacePath: I,
										initialContent: k?.join(`
`),
										finalContent: P?.join(`
`),
									};
								}),
								y = await s.getLintsForChange(new c.$tx({ files: l })),
								$ = new Map(),
								v = new Map();
							for (const S of l)
								v.set(S.relativeWorkspacePath, S.finalContent ?? "");
							for (const S of y.lints) {
								let I = $.get(S.relativeWorkspacePath);
								I ||
									((I = new C.$4s({
										relativeWorkspacePath: S.relativeWorkspacePath,
										errors: [],
										fileContents: v.get(S.relativeWorkspacePath) ?? "",
									})),
									$.set(S.relativeWorkspacePath, I));
								const T = new C.$3s({
									message: S.message,
									range: new C.$Ns({
										startPosition: {
											line: S.startLineNumberOneIndexed - 1,
											column: S.startColumnOneIndexed - 1,
										},
										endPosition: {
											line: S.endLineNumberInclusiveOneIndexed - 1,
											column: S.endColumnOneIndexed - 1,
										},
									}),
									severity: this.mapSeverity(S.severity),
								});
								I.errors.push(T);
							}
							return Array.from($.values());
						} catch (s) {
							return (
								console.error(
									"[composer] error getting lints for composer using shadow workspace",
									s,
								),
								[]
							);
						}
					}
					mapSeverity(b) {
						switch (b.toLowerCase()) {
							case "error":
								return C.Diagnostic_DiagnosticSeverity.ERROR;
							case "warning":
								return C.Diagnostic_DiagnosticSeverity.WARNING;
							case "information":
								return C.Diagnostic_DiagnosticSeverity.INFORMATION;
							case "hint":
								return C.Diagnostic_DiagnosticSeverity.HINT;
							default:
								return C.Diagnostic_DiagnosticSeverity.UNSPECIFIED;
						}
					}
					async getLinterErrorsForComposer(b) {
						const s = new Set([
								...Object.keys(b.codeBlockData ?? {}),
								...b.context.fileSelections.map(($) => $.uri.toString()),
							]),
							l = Array.from(s).map(($) => d.URI.parse($)),
							y = [];
						for (const $ of l) {
							const S = this.markerService
								.read({ resource: $ })
								.filter((I) => I.severity === m.MarkerSeverity.Error)
								.map(
									(I) =>
										new i.$yF({
											message: I.message,
											source: I.source,
											range: new C.$Ns({
												startPosition: {
													line: I.startLineNumber,
													column: I.startColumn,
												},
												endPosition: {
													line: I.endLineNumber,
													column: I.endColumn,
												},
											}),
											relativeWorkspacePath:
												this.workspaceContextService.asRelativePath($),
										}),
								);
							if (S.length > 0) {
								const I = new C.$4s({
									relativeWorkspacePath:
										this.workspaceContextService.asRelativePath($),
									errors: S,
									fileContents: (
										await this.aiService.getCurrentFileInfo($, {
											actuallyReadFromOverrideURI: !0,
										})
									)?.contents,
								});
								y.push(I);
							}
						}
						return y;
					}
					silentOnComposerSettled(b) {
						return !0;
					}
				};
				(e.LoopOnLints = o),
					(e.LoopOnLints = o =
						Ne(
							[
								(0, g.autoCancellableAndStatusUpdater)(),
								j(2, E.$k7b),
								j(3, m.$aM),
								j(4, r.$Vi),
								j(5, u.IComposerDataService),
								j(6, p.IComposerUtilsService),
								j(7, h.$Nfc),
							],
							o,
						)),
					(0, t.registerComposerCapability)(
						n.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_LINTS,
						o,
					);
			},
		),
		define(
			de[3956],
			he([
				1, 0, 55, 30, 55, 52, 25, 96, 1282, 21, 31, 1716, 18, 22, 32, 151, 40,
				45, 12, 137, 58, 39, 315, 10, 141, 110, 118, 287, 1782, 75, 741, 1897,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$red = e.$qed = void 0);
				let D = class {
					static {
						this.ID = "workbench.contrib.onboarding.onStart.cursor";
					}
					constructor(A) {
						(this.a = A), A.renderPopupBar();
					}
				};
				(e.$qed = D),
					(e.$qed = D = Ne([j(0, m.$HAc)], D)),
					(0, t.$s6)(D.ID, D, t.WorkbenchPhase.BlockRestore);
				let M = class {
					constructor(
						A,
						R,
						O,
						B,
						U,
						z,
						F,
						x,
						H,
						q,
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
					) {
						(this.a = A),
							(this.b = R),
							(this.c = O),
							(this.d = B),
							(this.e = U),
							(this.f = z),
							(this.g = F),
							(this.h = x),
							(this.i = H),
							(this.j = q),
							(this.k = V),
							(this.l = G),
							(this.m = K),
							(this.n = J),
							(this.o = W),
							(this.p = X),
							(this.q = Y),
							(this.r = ie),
							(this.s = ne),
							this.m.refreshAPIKeyModels(),
							this.q.refreshDefaultModels();
						const ee = new L.Lock();
						k.$Bfb.setInterval(() => {
							ee.withSemaphore(() => this.q.refreshDefaultModels());
						}, 5 * 6e4);
						const _ = new L.Lock();
						this.m.onDidChangeUseOpenAIKey((pe) => {
							pe && _.withSemaphore(() => this.m.refreshAPIKeyModels());
						}),
							k.$Bfb.setInterval(() => {
								_.withSemaphore(() => this.m.refreshAPIKeyModels());
							}, 30 * 6e4);
						const te = new L.Lock();
						if (
							(k.$Bfb.setInterval(() => {
								te.withSemaphore(async () => {
									try {
										await this.r.maybeRefreshFeatureStatus(
											"shouldMigrateBackFromClaudeSonnet",
										),
											this.r.getCachedFeatureStatus(
												"shouldMigrateBackFromClaudeSonnet",
											) && this.q.maybeMigrateBackFromClaudeSonnetToGpt4o();
									} catch {}
								});
							}, 60 * 6e4),
							this.k.bindInitialKeys(),
							this.s.onEditorStart(),
							this.r.maybeRefreshFeatureStatus("aiReview").then(() => {
								this.j.setApplicationUserPersistentStorage(
									"removeAIReview",
									!this.r.getCachedFeatureStatus("aiReview"),
								);
							}),
							this.j.applicationUserPersistentStorage.hasSilencedLinter,
							this.j.applicationUserPersistentStorage
								.hasDisabledErrorLensForAiLinter !== !0 &&
								(this.j.setApplicationUserPersistentStorage(
									"hasDisabledErrorLensForAiLinter",
									!0,
								),
								this.o.queryLocal().then((pe) => {
									pe.find(
										(ye) => ye.identifier.id === "usernamehw.errorlens",
									) && this.m.setWatcherEnabled(!1);
								})),
							setTimeout(() => {
								this.a.getWorkbenchState() == C.WorkbenchState.EMPTY &&
									(this.b.setPartHidden(!0, d.Parts.AUXILIARYBAR_PART),
									this.b.setPartHidden(!0, d.Parts.SIDEBAR_PART));
								const pe = this.a.getWorkspace().folders;
								pe.length > 0 &&
									(pe[0].uri.toString() ?? "").includes("cursor-tutor");
							}, 0),
							this.a.getWorkspace().folders.length > 0)
						) {
							const pe = this.a.getWorkspace().folders[0].uri;
							(0, a.$ked)(pe, this.c, "onboarding") &&
								(this.d.executeCommand(s.$PX, 3e4),
								this.d.executeCommand(s.$0W)),
								pe.fsPath.includes("cursor-tutor") ||
									this.g.publicLogCapture("did.newfolder.nontutor");
						}
						let Q = 0;
						this.e.onDidActiveEditorChange(() => {
							const pe = Date.now();
							pe - Q > 12 * 60 * 60 * 1e3 &&
								(this.g.publicLogCapture("did.editor.changed"), (Q = pe));
						});
						const Z = () => {
								this.j.setApplicationUserPersistentStorage("cmdLineHookState", {
									ignored: !0,
								});
							},
							se = this.j.applicationUserPersistentStorage.cmdLineHookState,
							re = se.remindLaterDate
								? new Date(parseInt(se.remindLaterDate))
								: void 0,
							le = re ? Date.now() - re.getTime() > 5 * 24 * 60 * 60 * 1e3 : !0,
							oe = "workbench.action.showCommands",
							ae = this.l.lookupKeybinding(oe)?.getLabel();
						!se.ignored &&
							se.timesShown < 2 &&
							(f.$l || f.$m) &&
							le &&
							setTimeout(() => {
								this.j.setApplicationUserPersistentStorage("cmdLineHookState", {
									timesShown: se.timesShown + 1,
								}),
									this.j.setApplicationUserPersistentStorage(
										"cmdLineHookState",
										"remindLaterDate",
										Date.now().toString(),
									),
									this.i.prompt(
										p.Severity.Info,
										"Want to launch Cursor from the command line? You can add the `code` or `cursor` commands" +
											(ae !== void 0
												? ` now, or later with [${ae}](command:${oe}) and typing 'install code command'.`
												: "."),
										[
											{
												label: "Install 'code'",
												run: () => {
													Z(),
														this.g.publicLogCapture(
															"submitted.notification.code_command",
														),
														this.d.executeCommand(
															"workbench.action.replaceCommandLine",
														);
												},
											},
											{
												label: "Install 'cursor'",
												run: () => {
													Z(),
														this.g.publicLogCapture(
															"submitted.notification.cursor_command",
														),
														this.d.executeCommand(
															"workbench.action.installCommandLine",
														);
												},
											},
											{
												label: "Never show again",
												run: () => {
													this.g.publicLogCapture(
														"submitted.notification.ignore_code_cursor_commands",
													),
														Z();
												},
											},
										],
										{ sticky: !0 },
									);
							}, 3e5);
					}
				};
				(e.$red = M),
					(e.$red = M =
						Ne(
							[
								j(0, C.$Vi),
								j(1, d.$mEb),
								j(2, r.$lq),
								j(3, u.$ek),
								j(4, h.$IY),
								j(5, c.$ll),
								j(6, n.$km),
								j(7, g.$ucd),
								j(8, p.$4N),
								j(9, o.$0zb),
								j(10, b.$mfc),
								j(11, l.$uZ),
								j(12, y.$S6b),
								j(13, $.$gj),
								j(14, v.$MQb),
								j(15, S.$y7c),
								j(16, I.$Nfc),
								j(17, T.$H7b),
								j(18, P.$oed),
							],
							M,
						)),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(M, E.LifecyclePhase.Restored);
			},
		),
		define(
			de[3957],
			he([1, 0, 7, 3, 22, 20, 5, 45, 1652, 25, 1759, 118, 9, 1130]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mVc = e.$lVc = void 0),
					(e.$lVc = (0, C.$Mi)("terminalCppService"));
				const n = [173, 216, 153],
					g = !1,
					p = 50;
				class o {
					constructor(s) {
						(this.c = new Map()), (this.d = s);
					}
					get(s) {
						const l = this.c.get(s);
						if (l && Date.now() - l.timestamp < this.d) return l.data;
						this.c.delete(s);
					}
					set(s, l) {
						this.c.set(s, { timestamp: Date.now(), data: l });
					}
					clearExpired() {
						const s = Date.now();
						for (const [l, y] of this.c.entries())
							s - y.timestamp >= this.d && this.c.delete(l);
					}
				}
				let f = class extends i.$1c {
					constructor(s, l, y, $) {
						super(),
							(this.h = s),
							(this.j = l),
							(this.m = y),
							(this.n = $),
							(this.c = new o(6e4)),
							(this.g = new o(6e4));
					}
					async startTerminalCpp(s) {
						if ((await new Promise((L) => setTimeout(L, 50)), g)) {
							const L = [
									"git status",
									"git add .",
									"git commit -m 'test'",
									"git push",
									"git pull",
									"git checkout -b new-branch",
									"git checkout main",
								],
								D = L[Math.floor(Math.random() * L.length)];
							s.terminalInstance.renderGhostText(
								(0, u.$kVc)(
									D,
									[
										Math.floor(Math.random() * 256),
										Math.floor(Math.random() * 256),
										Math.floor(Math.random() * 256),
									],
									[
										Math.floor(Math.random() * 256),
										Math.floor(Math.random() * 256),
										Math.floor(Math.random() * 256),
									],
								),
							);
							return;
						}
						const { terminalInstance: l, abortController: y } = s;
						if (y.signal.aborted) return;
						const $ = await l.getCwd(),
							v = $ ? h.URI.parse($).toString() : "";
						this.c.clearExpired();
						let S = this.c.get(v);
						!S &&
							$ &&
							((S = await this.m.resolve(h.URI.parse($))), this.c.set(v, S));
						const I = ["package.json", "*.py"],
							T =
								S?.children?.filter((L) =>
									I.some((D) =>
										new RegExp(`^${D.replace(/\*/g, ".*")}$`).test(L.name),
									),
								) ?? [],
							k = (
								await Promise.all(
									T.map(async (L) => {
										const D = L.resource.toString();
										this.g.clearExpired();
										let M = this.g.get(D);
										if (!M)
											try {
												(M = (
													await this.m.readFile(L.resource)
												).value.toString()),
													this.g.set(D, M);
											} catch (N) {
												return (
													console.error(
														`[terminal cpp] Failed to read file: ${D}`,
														N,
													),
													null
												);
											}
										return L.name.endsWith(".py") &&
											M.split(`
`).length >= 500
											? null
											: { resource: L.resource, contents: M };
									}),
								)
							).filter((L) => L !== null);
						try {
							const L = [],
								D = l.xterm?.raw.buffer.normal.length ?? 0;
							for (let Y = 0; Y < D; Y++) {
								if (Y < D - p) {
									L.push("<...>");
									continue;
								}
								const ie = l.xterm?.raw.buffer.normal.getLine(Y);
								ie && L.push(ie.translateToString());
							}
							for (; L.length > 0 && L[L.length - 1].trim() === ""; ) L.pop();
							const M = l.xterm?.raw.buffer.normal.cursorX,
								N =
									(l.xterm?.raw.buffer.normal.cursorY ?? 0) +
									(l.xterm?.raw.buffer.normal.baseY ?? 0),
								A = await l.parseCommand(N + 1);
							if (!(A instanceof m.$SJ)) {
								console.error(
									"[terminal cpp]",
									"received something that is not a partial terminal command",
									A,
								);
								return;
							}
							if (!A.commandStartMarker) {
								console.error(
									"[terminal cpp]",
									"commandDetection.commandStartMarker is undefined",
									A,
								);
								return;
							}
							const R = L?.[N] ?? "",
								B = R.slice(A.commandStartX).slice(
									0,
									M ? M - (A.commandStartX ?? 0) : void 0,
								),
								U = R.slice(M),
								z = R.slice(M),
								F = B.trim();
							if (F.length === 0) {
								console.error("[terminal cpp]", "trimmedCommand is empty");
								return;
							}
							if (U.trim() !== "") {
								console.error(
									"[terminal cpp]",
									"omittedPartialCommand is not empty",
									U,
								);
								return;
							}
							const x = performance.now(),
								H = k
									.map((Y) => ({
										relativeWorkspacePath: this.n.asRelativePath(Y.resource),
										contents: Y.contents,
									}))
									.filter((Y) => !!Y.contents),
								q = F.split(/[\s.]+/),
								V = H.map((Y) => {
									let ie = 0;
									return (
										q.forEach((ne) => {
											Y.contents.includes(ne) && (ie += 1);
										}),
										{ ...Y, score: ie }
									);
								}).sort((Y, ie) => ie.score - Y.score);
							console.log("[terminal cpp]", "relevantFiles", V);
							const K = (await this.h.aiClient()).getTerminalCompletion(
								{
									modelName: "llama-3-8b",
									currentCommand: F,
									commandHistory: L.slice(0, -1),
									commitHistory: [],
									pastResults: [],
									fileDiffHistories: [],
									gitDiff: void 0,
									modelDetails: {},
									userPlatform: (0, t.$Ogb)().navigator.platform.toLowerCase(),
									currentFolder: $,
									currentFolderStructure:
										S?.children?.map((Y) => ({
											name: Y.name,
											isFolder: Y.isDirectory,
										})) ?? [],
									relevantFiles: V.slice(0, 1),
								},
								{ signal: s.abortController.signal },
							);
							if (y.signal.aborted) {
								console.log(
									"[terminal cpp]",
									"aborted before calling the server",
								);
								return;
							}
							const J = await K;
							l.removeGhostText(), l.clearAbortController();
							let { command: W } = J;
							W = W.replace(/^`+|`+$/g, "");
							const X = performance.now();
							if (
								(console.log("[terminal cpp]", "round trip took", X - x + "ms"),
								s.abortController.signal.aborted)
							) {
								console.log("[terminal cpp]", "aborted");
								return;
							}
							if (W.trim() === "") {
								console.log("[terminal cpp]", "command is empty", W);
								return;
							}
							if (W.trim() === B.trim()) {
								console.log(
									"[terminal cpp]",
									"command is the same as partial command",
									W,
									B,
								);
								return;
							}
							if (W.startsWith(B))
								l.renderGhostText((0, u.$kVc)(W.slice(B.length))),
									console.log(
										"[terminal cpp]",
										"command completed",
										JSON.stringify(
											{
												finalText: W,
												lineContent: R,
												partialCommand: B,
												commandAfterCursor: z,
												trimmedCommand: F,
												currentFolder: $,
											},
											null,
											2,
										),
									);
							else {
								const ie = (await (0, c.$pqb)(B, W)).filter(
									(te) => !te.removed,
								);
								let ne = "";
								for (const te of ie)
									ne += (0, u.$kVc)(te.value, te.added ? n : [60, 60, 60]);
								const _ = `  ${`(suggestion: ${ne}${(0, u.$kVc)(")")}`}`;
								l.renderGhostText(_),
									console.log(
										"[terminal cpp]",
										"edit command completed",
										JSON.stringify(
											{
												command: W,
												lineContent: R,
												partialCommand: B,
												commandAfterCursor: z,
												trimmedCommand: F,
												currentFolder: $,
											},
											null,
											2,
										),
									);
							}
							l.setUnderlyingFullSuggestion(W);
						} catch (L) {
							l.removeGhostText(),
								l.clearAbortController(),
								console.error("[terminal cpp]", "error, probably aborted", L);
						}
					}
				};
				(e.$mVc = f),
					(e.$mVc = f =
						Ne([j(0, a.$Nfc), j(1, d.$0zb), j(2, w.$ll), j(3, r.$Vi)], f)),
					(0, E.$lK)(e.$lVc, f, E.InstantiationType.Delayed);
			},
		),
		define(
			de[3958],
			he([1, 0, 3, 110, 107, 145, 617, 189, 20, 47, 25, 118, 15, 59, 124]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pgd = void 0);
				class g {
					constructor(f) {
						(this.d = []), (this.c = f);
					}
					async wait() {
						return this.c > 0
							? (this.c--, Promise.resolve())
							: new Promise((f) => this.d.push(f));
					}
					release() {
						if ((this.c++, this.d.length > 0 && this.c > 0)) {
							this.c--;
							const f = this.d.shift();
							f && f();
						}
					}
				}
				let p = class extends t.$1c {
					constructor(f, b, s, l, y, $, v) {
						super(),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							(this.m = l),
							(this.n = y),
							(this.q = $),
							(this.r = v),
							(this.c = new c.$Jc(20)),
							(this.f = new Map()),
							(this.cachedShellPath = void 0),
							(this.t = new c.$Jc(20));
					}
					dispose() {
						for (const [f, b] of this.c) b.dispose(), this.H(f);
						this.c.clear(), this.f.clear(), super.dispose();
					}
					getTerminalInstance(f) {
						if (!f) return;
						const b = this.c.get(f);
						if (b) return b;
						const s = this.t.get(f);
						if (s) return this.j.instances.find((l) => l.instanceId === s);
					}
					async createTerminal(f) {
						return await this.j.createTerminal({
							config: {
								executable: f,
								args: ["-l"],
								isFeatureTerminal: !0,
								isTransient: !0,
								hideFromUser: !0,
								forceShellIntegration: !0,
							},
						});
					}
					async tryCreateCommandDetectionTerminal(f) {
						const b = await this.createTerminal(f),
							s = await new Promise((l, y) => {
								if (b.capabilities.has(d.TerminalCapability.CommandDetection)) {
									l(!0);
									return;
								}
								let $;
								const v = setTimeout(() => {
									$?.dispose(), l(!1);
								}, 4e3);
								$ = b.capabilities.onDidAddCapability((S) => {
									S.id === d.TerminalCapability.CommandDetection &&
										(clearTimeout(v), $?.dispose(), l(!0));
								});
							});
						return { terminalInstance: b, hasShellIntegration: s };
					}
					async s(f, b) {
						const s = new g(b);
						let l, y;
						const $ = ["bash", "fish", "pwsh", "zsh", "git bash"],
							v = new t.$Zc();
						try {
							const S = await Promise.all(
								f.map(async (I) => {
									await s.wait();
									try {
										const T = await this.tryCreateCommandDetectionTerminal(
											I.path,
										);
										return v.add(T.terminalInstance), { profile: I, result: T };
									} finally {
										s.release();
									}
								}),
							);
							for (const { profile: I, result: T } of S) {
								if (T.hasShellIntegration)
									return (
										v.deleteAndLeak(T.terminalInstance),
										{ shellPath: I.path, terminalInstance: T.terminalInstance }
									);
								$.includes(T.terminalInstance.processName) &&
									!l &&
									(l = {
										shellPath: I.path,
										terminalInstance: T.terminalInstance,
									});
							}
							return l
								? (v.deleteAndLeak(l.terminalInstance),
									{
										shellPath: l.shellPath,
										terminalInstance: l.terminalInstance,
									})
								: { shellPath: void 0, terminalInstance: void 0 };
						} finally {
							v.dispose();
						}
					}
					async determineShellPath() {
						const f = ["bash", "fish", "pwsh", "zsh", "git bash"];
						await this.r.profilesReady;
						const b = this.r.availableProfiles
								.slice()
								.filter((y) => f.includes(y.profileName) || y.isDefault)
								.sort((y, $) =>
									y.isDefault
										? -1
										: $.isDefault
											? 1
											: f.includes(y.profileName)
												? -1
												: f.includes($.profileName)
													? 1
													: y.isAutoDetected
														? $.isAutoDetected
															? 0
															: 1
														: -1,
								),
							s = await this.s(b, 3);
						if (s.shellPath && s.terminalInstance) return s;
						console.error(
							"No shell integration found, falling back to default profile",
						);
						const l = this.r.getDefaultProfile();
						return l
							? {
									shellPath: l.path,
									terminalInstance: await this.createTerminal(l.path),
								}
							: { shellPath: void 0, terminalInstance: void 0 };
					}
					async createDefaultTerminalInstance() {
						let f;
						if (this.cachedShellPath === void 0) {
							const b = this.determineShellPath();
							this.cachedShellPath = b.then((l) => l.shellPath);
							const s = await b.then((l) => l.terminalInstance);
							if (s !== void 0) return s;
						}
						return (f = await this.cachedShellPath), this.createTerminal(f);
					}
					async startSession(f, b) {
						const s = await this.createDefaultTerminalInstance(),
							l = (0, r.$9g)();
						this.c.set(l, s);
						const y = b?.terminalStartupMaxAttempts ?? 10,
							$ = b?.terminalStartupRetryIntervalMs ?? 100;
						await new Promise((v) => setTimeout(v, 100));
						for (let v = 0; v < y; v++) {
							if (!this.w(s, 0)) return { sessionId: l, terminalInstance: s };
							await new Promise((S) => setTimeout(S, $));
						}
						return (
							console.warn("Terminal startup timeout, terminal is  empty"),
							{ sessionId: l, terminalInstance: s }
						);
					}
					leakSession(f) {
						const b = this.c.get(f);
						b && this.t.set(f, b.instanceId), this.c.delete(f);
					}
					leakTerminalInstance(f) {
						for (const [b, s] of this.c)
							if (s === f) {
								this.leakSession(b);
								return;
							}
					}
					endSession(f) {
						const b = this.c.get(f);
						if (!b)
							throw new Error(`Terminal instance for session ${f} not found`);
						b.dispose(), this.c.delete(f), this.H(f);
					}
					async execute(f, b, s) {
						const l = Date.now();
						try {
							const y = this.executeStream(f, b, { ...s });
							let $;
							for await (const I of y) $ = I;
							if (!$) throw new Error("No result from executeStream");
							const v = Date.now() - l;
							return {
								exitCode: this.F(f).exitCode ?? 0,
								duration: v,
								output: $.content,
								isAiEnded: $.isAiEnded,
								endedReason: $.endedReason,
							};
						} catch (y) {
							return (
								console.error("Error in execute:", y),
								{
									exitCode: 1,
									duration: Date.now() - l,
									output: `Error: ${y.message}`,
									isAiEnded: !1,
									endedReason: n.RunTerminalCommandEndedReason.EXECUTION_FAILED,
								}
							);
						}
					}
					getLastLineNumber(f) {
						let b = f.xterm?.getBufferLength() ?? 0,
							s = 0;
						for (
							;
							(f.xterm?.getBufferLines(b, b + 1).at(0)?.length ?? 0) === 0;
						) {
							if ((b--, b <= 0 || s > 50)) return 0;
							s++;
						}
						return b;
					}
					async *executeStream(f, b, s) {
						const l = Date.now(),
							y = this.F(f);
						y.rename(b);
						const $ = y.xterm?.raw.cols ?? 80,
							v = y.capabilities.get(d.TerminalCapability.CommandDetection);
						let S;
						const I = new Promise((A) => {
							v &&
								(S = v.onCommandFinished((R) => {
									let O = R.getOutput();
									if (O !== void 0) {
										const B = O.split(`
`);
										O = "";
										for (const U of B) {
											let z = U;
											for (; z.length > $; )
												(O +=
													z.substring(0, $).trimEnd() +
													`
`),
													(z = z.substring($));
											z.length < $
												? (O +=
														z +
														`
`)
												: z.endsWith("  ")
													? (O +=
															z.trimEnd() +
															`

`)
													: (O +=
															z +
															`
`);
										}
										O.at(-1) ===
											`
` && (O = O.slice(0, -1));
									}
									A({
										type: "terminal",
										output: O,
										exitCode: R.exitCode,
										cmd: R,
									});
								}));
						});
						let T;
						const P = new Promise((A) => {
								const R = () => {
									A("popout");
								};
								s?.stopListenSignal?.addEventListener("abort", R),
									(T = {
										dispose: () => {
											s?.stopListenSignal?.removeEventListener("abort", R);
										},
									});
							}),
							k = new AbortController();
						this.f.set(f, k);
						const L = () => {
							this.H(f), S?.dispose(), T?.dispose();
						};
						s?.signal &&
							s.signal.addEventListener("abort", () => {
								k.abort();
							});
						const D = this.getLastLineNumber(y);
						let M = "",
							N;
						try {
							await y.sendText(b, !0, !0), yield { content: "", isAiEnded: !1 };
							let A = s?.commandRunTimeoutMs ?? 1e3;
							const R = s?.commandChangeCheckIntervalMs ?? 500,
								O = s?.aiFinishCheckMaxAttempts ?? 15,
								B = s?.aiFinishCheckIntervalMs ?? 2e3,
								U = s?.delayerIntervalMs ?? 100;
							v && (A = 1e4);
							let z = Date.now(),
								F = 0,
								x = !1,
								H = !1;
							const q = new h.$Jh(U),
								V = () => {
									q.trigger(() => {
										(z = Date.now()), (F = 0), (H = !1);
									});
								},
								G = y.onData((K) => {
									V();
								});
							try {
								for (; !x; ) {
									if (k.signal.aborted) {
										k.signal.reason !== "Execution cancelled" &&
											(await this.G(y)),
											(x = !0);
										break;
									}
									if (s?.stopListenSignal?.aborted === !0) {
										console.log("[ian] Execution stopped listening"), (x = !0);
										break;
									}
									const K = this.y(y, D);
									K !== M && ((M = K), yield { content: K, isAiEnded: !1 });
									const J = Date.now() - z,
										W = H ? B : R,
										X = async () => {
											if (J > A && F < O) {
												if (!s?.skipAiCheck && !k.signal.aborted) {
													H = !0;
													const ie = await this.u(K);
													if (ie.isFinished)
														return (
															(x = !0),
															await this.G(y),
															{
																type: "ai",
																content: K,
																isAiEnded: !0,
																endedReason: ie.reason,
																exitCode: ie.exitCode,
															}
														);
													F++;
												}
											} else if (F >= O)
												return (
													await new Promise((ie) => setTimeout(ie, 1e4)),
													"timeout"
												);
											return (
												await new Promise((ie) => setTimeout(ie, W)), "timeout"
											);
										},
										Y = await Promise.race([X(), I, P]);
									if (Y === "popout") x = !0;
									else {
										if (Y === "timeout") continue;
										if (Y.type === "terminal") {
											(x = !0), (N = Y.exitCode);
											let ie = this.y(y, D),
												ne = Date.now();
											for (
												;
												!ie.includes(Y.output ?? "") && Date.now() - ne < 1e3;
											)
												await new Promise((ee) => setTimeout(ee, 100)),
													(ie = this.y(y, D));
											ie.includes(Y.output ?? "") ||
												((Y.output ?? "").length > 0 && (ie = Y.output ?? "")),
												ie !== M &&
													((M = ie), yield { content: ie, isAiEnded: !1 });
										} else (x = !0), yield Y;
									}
								}
							} finally {
								G.dispose(), q.dispose();
							}
							return {
								exitCode: N ?? y.exitCode,
								output: M,
								duration: Date.now() - l,
								isAiEnded: !0,
								endedReason: k.signal.aborted
									? n.RunTerminalCommandEndedReason.EXECUTION_ABORTED
									: n.RunTerminalCommandEndedReason.EXECUTION_COMPLETED,
							};
						} catch (A) {
							return (
								console.error("Error in executeStream:", A),
								{
									exitCode: 1,
									output: `Error: ${A.message}`,
									duration: Date.now() - l,
									isAiEnded: !1,
									endedReason: n.RunTerminalCommandEndedReason.EXECUTION_FAILED,
								}
							);
						} finally {
							L();
						}
					}
					async u(f) {
						try {
							const s = await (await this.q.aiClient()).isTerminalFinishedV2({
								terminalContent: f,
							});
							return {
								isFinished: !!s.isFinished,
								reason: s.endedReason,
								exitCode: s.exitCode,
							};
						} catch (b) {
							return (
								console.error("Error in _isTerminalFinished:", b),
								{
									isFinished: !0,
									reason:
										n.RunTerminalCommandEndedReason
											.ERROR_OCCURRED_CHECKING_REASON,
								}
							);
						}
					}
					w(f, b) {
						const s = f.xterm?.raw.buffer.normal;
						if (s === void 0) return !0;
						const l = f.xterm?.raw.buffer.normal.length ?? 0;
						if (!this.z(s, Math.min(l, b), l).every((I) => I.trim() === ""))
							return !1;
						const $ = f.xterm?.raw.buffer.alternate;
						if ($ === void 0) return !0;
						const v = f.xterm?.raw.buffer.alternate.length ?? 0;
						return !!this.z($, Math.min(v, b), v).every((I) => I.trim() === "");
					}
					y(f, b) {
						const s = f.xterm?.getBufferLength() ?? 0;
						return this.C(f, Math.min(s, b), s)
							.join(`
`)
							.trimEnd();
					}
					z(f, b, s) {
						const l = [];
						for (let y = b; y < s; y++) {
							let $ = f.getLine(y);
							if (!$) continue;
							let v = $.translateToString(!0);
							l.push(v);
						}
						return l;
					}
					C(f, b, s) {
						const l = f.xterm?.raw.buffer.active;
						return l ? this.z(l, b, s) : [];
					}
					F(f) {
						const b = this.c.get(f);
						if (!b)
							throw new Error(`Terminal instance for session ${f} not found`);
						return b;
					}
					async G(f) {
						f.interrupt();
					}
					cancelStream(f) {
						const b = this.F(f);
						this.G(b), this.H(f);
					}
					H(f) {
						const b = this.f.get(f);
						b && (b.abort("Execution cancelled"), this.f.delete(f));
					}
				};
				(e.$pgd = p),
					(e.$pgd = p =
						Ne(
							[
								j(0, E.$reb),
								j(1, w.$mIb),
								j(2, w.$iIb),
								j(3, i.$y7c),
								j(4, u.$Vi),
								j(5, a.$Nfc),
								j(6, E.$teb),
							],
							p,
						)),
					(0, m.$lK)(C.$Ycc, p, m.InstantiationType.Eager);
			},
		),
		define(
			de[1931],
			he([
				1, 0, 20, 148, 340, 5, 126, 45, 32, 620, 401, 669, 516, 118, 567, 341,
				191, 315,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$r0b = void 0),
					(e.$r0b = (0, E.$Mi)("advancedContextService"));
				let f = class {
					constructor(s, l, y, $, v, S, I, T) {
						(this.a = s),
							(this.b = l),
							(this.c = y),
							(this.d = $),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.i = T);
					}
					async taskStreamChatContext(s, l, y, $, v) {
						let S;
						for (const [R, O] of [...s.entries()].reverse())
							if (
								O.type === C.ConversationMessage_MessageType.HUMAN &&
								O.text !== ""
							) {
								S = s[R].text;
								break;
							}
						if (S === void 0)
							return (async function* () {
								yield "You don't seem to have provided any request in your last message. Please type something and try again.";
							})();
						const [I, T] = this.b.registerNewGeneration({
							metadata: l,
							generationUUID: y,
						});
						this.c.useCodebaseContext(l.bubbleId, l.tabId),
							this.d.publicLogCapture("Submitted advanced context");
						const P = $?.overrideModelDetails || this.b.getModelDetails(),
							k = this.i.getChatDesiredTokenLimit(),
							L = new i.$OF({
								conversation: s,
								repositories: this.b.repositories.map((R) => R.repoInfo),
								explicitContext: await this.b.getExplicitContext(),
								workspaceRootPath: this.a.getWorkspaceRootPath(),
								modelDetails: P,
								advancedCodebaseContext: v,
								isEval: l.isEval,
								...(await this.b.addAdditionalContext(l)),
								requestId: y,
								desiredTokenLimit: k,
							});
						this.b.addToPromptHistory({
							prompt: S,
							commandType: r.CommandType.CHAT,
						});
						const M = (await this.b.aiClient()).taskStreamChatContext(L, {
								signal: T.signal,
								headers: (0, p.$m6b)(y),
							}),
							N =
								g.$q0.typeName + "/" + g.$q0.methods.taskStreamChatContext.name,
							A = this.f.handleTaskGetStream(M, T.signal);
						return this.wrapper(A, N, y, P, l);
					}
					async *wrapper(s, l, y, $, v) {
						try {
							for await (const S of s)
								switch (S.response.case) {
									case "output": {
										yield S.response.value.text;
										break;
									}
									case "gatheringStep": {
										this.c.addStepToNonPersistentChatMetadata(
											v.bubbleId,
											v.tabId,
											{ type: "gathering", step: S.response.value },
										);
										break;
									}
									case "rerankingStep": {
										this.c.addStepToNonPersistentChatMetadata(
											v.bubbleId,
											v.tabId,
											{ type: "reranking", step: S.response.value },
										);
										break;
									}
									case "reasoningStep": {
										this.c.addStepToNonPersistentChatMetadata(
											v.bubbleId,
											v.tabId,
											{ type: "reasoning", step: S.response.value },
										);
										break;
									}
									case "reasoningSubstep": {
										this.c.addSubstepToStepInNonPersistentChatMetadata(
											v.bubbleId,
											v.tabId,
											{ type: "reasoning", substep: S.response.value },
										);
										break;
									}
									case "gatheringFile": {
										this.c.addFileToStepInNonPersistentChatMetadata(
											v.bubbleId,
											v.tabId,
											{ type: "gathering", file: S.response.value },
										);
										break;
									}
									case "rerankingFile": {
										this.c.addFileToStepInNonPersistentChatMetadata(
											v.bubbleId,
											v.tabId,
											{ type: "reranking", file: S.response.value },
										);
										break;
									}
								}
						} catch (S) {
							if (
								(S.code !== w.Code.Canceled && console.error(S),
								!(S instanceof w.ConnectError) || S.code !== w.Code.Canceled)
							)
								throw S;
						} finally {
							this.g.setNonPersistentStorage("inprogressAIGenerations", (S) =>
								S.filter((I) => I.generationUUID !== y),
							);
						}
					}
				};
				(f = Ne(
					[
						j(0, n.$36b),
						j(1, c.$Nfc),
						j(2, a.$Z6b),
						j(3, m.$km),
						j(4, h.$a9b),
						j(5, d.$0zb),
						j(6, u.$W6b),
						j(7, o.$S6b),
					],
					f,
				)),
					(0, t.$lK)(e.$r0b, f, t.InstantiationType.Delayed);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1347],
		he([
			1, 0, 643, 83, 33, 3, 48, 74, 152, 69, 496, 42, 204, 350, 752, 660, 414,
			31, 10, 22, 20, 5, 25, 118, 3232, 3229, 170, 9, 191, 47,
		]),
		function (
			ce,
			e,
			t,
			i,
			w,
			E,
			C,
			d,
			m,
			r,
			u,
			a,
			h,
			c,
			n,
			g,
			p,
			o,
			f,
			b,
			s,
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Z9b = e.$Y9b = void 0),
				(v = xi(v)),
				(e.$Y9b = (0, l.$Mi)("aiContextService"));
			function L(N, A) {
				const R = N.resource;
				let O;
				for (const B of A)
					(O === void 0 || B.toString().length > O.toString().length) &&
						R.toString().startsWith(B.toString()) &&
						(O = B);
				return O;
			}
			function D(N, A, R) {
				const U = [
						{ kind: d.SymbolKind.Class, minLines: 10 },
						{ kind: d.SymbolKind.Method, minLines: 10 },
						{ kind: d.SymbolKind.Constructor, minLines: 10 },
						{ kind: d.SymbolKind.Interface, minLines: 10 },
						{ kind: d.SymbolKind.Function, minLines: 10 },
					],
					z = new Set(),
					F = [...A];
				for (; F.length > 0; ) {
					const J = F.pop(),
						W = U.find((X) => X.kind === J.kind);
					W !== void 0 &&
						J.range.endLineNumber + 1 - J.range.startLineNumber >= W.minLines &&
						(z.add(J.range.startLineNumber),
						J.children !== void 0 && F.push(...J.children));
				}
				const x = new Map();
				for (let J = 0; J < N.length; J++) {
					const W = N.getParentIndex(J);
					x.has(W) || x.set(W, []), x.get(W)?.push(J);
				}
				const H = R.getLinesContent(),
					q = (J, W) => {
						if (
							J.children.length === 1 &&
							J.region.startLineNumber ===
								J.children[0].region.startLineNumber &&
							J.region.endLineNumber === J.children[0].region.endLineNumber
						)
							return J.children[0];
						const X = {
							isFoldRegion: W,
							foldingRegionIdx: J.foldingRegionIdx,
							uri: R.uri,
							region: J.region,
							children: J.children,
							parent: void 0,
						};
						for (const Y of J.children) Y.parent = X;
						return (
							J.freeLines > 100 &&
								(console.warn("Node has overflowing free lines: "),
								console.warn(R.uri.path),
								console.warn(X)),
							X
						);
					},
					V = (J, W) => {
						const { children: X, region: Y, freeLines: ie } = J,
							ne = [];
						let ee = Y.startLineNumber,
							_ = 0,
							te = 0,
							Q = Y.startLineNumber,
							Z = !1,
							se = 0,
							re = 0,
							le = 0,
							oe = Y.startLineNumber,
							ae = 0;
						const pe = () =>
								ae < W.length && oe === W[ae].region.startLineNumber,
							$e = (ue, fe, me, ve) => {
								(le = ue),
									(Q = fe ?? oe),
									(se = me ?? te),
									(re = ae),
									(Z = ve ?? !1);
							},
							ye = () => {
								ne.push({
									foldingRegionIdx: J.foldingRegionIdx,
									children: X.filter(
										(ue) =>
											ue.region.startLineNumber >= ee &&
											ue.region.endLineNumber < Q,
									),
									region: { startLineNumber: ee, endLineNumber: Q - 1 },
									freeLines: se,
								}),
									(ee = Z ? Q - 1 : Q),
									(_ = re),
									(te = 0),
									(se = 0),
									(Z = !1),
									(le = 0),
									(oe = ee),
									(ae = _);
							};
						for (; oe <= Y.endLineNumber; ) {
							if (!pe()) oe++, te++;
							else {
								const ue = W[ae];
								(oe = ue.region.endLineNumber + 1), (te += ue.freeLines), ae++;
							}
							te <= 100 &&
								(ae === _
									? (le === 0 && $e(0), H[oe - 1] === "" && le <= 1 && $e(1))
									: (ae > re && le <= 2 && $e(2, oe + 1, te + 1, !0),
										le == 2 &&
											oe === W[ae - 1].region.endLineNumber + 2 &&
											$e(3, oe, te, !1),
										H[oe - 1] === "" && le >= 2 && $e(4))),
								te >= 100 && ye();
						}
						return (
							$e(5),
							ye(),
							{
								foldingRegionIdx: J.foldingRegionIdx,
								region: Y,
								freeLines: ne[0].freeLines,
								children: ne[0].children.concat(
									ne.slice(1).map((ue) => q(ue, !1)),
								),
							}
						);
					},
					G = (J) => {
						const W = [],
							X = [],
							Y =
								J !== -1
									? (() => {
											const _ = N.toRegion(J);
											return {
												startLineNumber: _.startLineNumber,
												endLineNumber: _.endLineNumber,
											};
										})()
									: { startLineNumber: 1, endLineNumber: R.getLineCount() };
						let ie = Y.endLineNumber - Y.startLineNumber + 1;
						for (const _ of x.get(J) || []) {
							const te = G(_);
							(ie -= te.region.endLineNumber - te.region.startLineNumber + 1),
								z.has(te.region.startLineNumber)
									? X.push(q(te, !0))
									: (W.push(te), (ie += te.freeLines));
						}
						for (
							W.sort((_, te) => _.freeLines - te.freeLines);
							W.length > 0 && ie > 100 && W[W.length - 1].freeLines >= 30;
						) {
							const _ = W.pop();
							(ie -= Math.max(0, _.freeLines - 1)), X.push(q(_, !0));
						}
						const ne = [
							...W.map((_) => ({ region: _.region, freeLines: _.freeLines })),
							...X.map((_) => ({ region: _.region, freeLines: 1 })),
						];
						return (
							ne.sort(
								(_, te) => _.region.startLineNumber - te.region.startLineNumber,
							),
							X.push(...W.map((_) => _.children).flat()),
							X.sort(
								(_, te) => _.region.startLineNumber - te.region.startLineNumber,
							),
							V(
								{ foldingRegionIdx: J, children: X, region: Y, freeLines: ie },
								ne,
							)
						);
					};
				return q(G(-1), !0);
			}
			let M = class extends E.$1c {
				constructor(A, R, O, B, U, z, F, x, H, q, V) {
					super(),
						(this.f = A),
						(this.h = R),
						(this.j = O),
						(this.m = B),
						(this.n = U),
						(this.q = z),
						(this.r = F),
						(this.s = x),
						(this.u = H),
						(this.w = q),
						(this.y = V),
						(this.MAX_CONCURRENT = 10),
						(this.findDependenciesQueue = []),
						(this.dependencySummaryPromises = new Map()),
						(this.indexReqManagers = new Map()),
						(this.z = new Map()),
						(this.C = new Map()),
						(this.parallel_dedcap_requests = 0);
				}
				async getIndex(A) {
					const R = await this.m.aiClient();
					if (!this.indexReqManagers.has(A)) {
						const O = new v.default(A, R);
						this.indexReqManagers.set(
							A,
							O.listen().then(() => O),
						);
					}
					return await this.indexReqManagers.get(A);
				}
				async getNodeChunks(A) {
					const R = T.URI.file(A),
						O = await this.s.resolve(R, {
							resolveSingleChildDescendants: !0,
							resolveMetadata: !1,
						});
					return await this.q
						.createModelReference(O.resource)
						.then(async (B) => {
							try {
								const U = B.object.textEditorModel,
									z = await this.G(U);
								if (z) {
									const F = await this.y.getOrCreate(
											U,
											w.CancellationToken.None,
										),
										x = F.getAllSymbols(),
										H = F.getTopLevelSymbols(),
										q = D(z, H, U);
									return (0, S.$X9b)(
										q,
										z,
										this.n.asRelativePath(U.uri),
										U.getValue().split(`
`),
									);
								} else return;
							} finally {
								B.dispose();
							}
						});
				}
				async getWorkspaceNodeChunks(A) {
					const R = this.n.getWorkspace().folders,
						O = [];
					for (const U of R) {
						const z = U.uri,
							x = [await this.s.resolve(z)];
						for (; x.length > 0; ) {
							const H = x.shift();
							if (H.isDirectory && H.children) x.push(...H.children);
							else if (
								!H.isDirectory &&
								(A === void 0 || A(H.resource.fsPath))
							) {
								const q = this.n.asRelativePath(H.resource);
								O.push(this.getNodeChunks(q));
							}
						}
					}
					const B = await Promise.all(O);
					return [];
				}
				async _findNonIgnoredFiles(A, R, O) {
					let B = [A];
					const U = L(A, R);
					let z = [];
					for (; B.length > 0; ) {
						const F = [...B];
						B = [];
						let x = [];
						for (const H of F) {
							if (L(H, R) !== U) {
								z.push(...(await this._findNonIgnoredFiles(H, R, O)));
								continue;
							}
							if (H.isDirectory)
								if (H.children) x = x.concat(H.children);
								else {
									const V =
										(
											await this.s.resolve(H.resource, {
												resolveSingleChildDescendants: !0,
												resolveMetadata: !1,
											})
										).children || [];
									x.push(...V);
								}
							else z.push(H);
						}
						if (U !== void 0) {
							const H = await this.j.executeCommand(
									"git.api.checkIgnore",
									U,
									x.map((V) => V.resource.path),
								),
								q = new Set(H);
							B = x.filter((V) => !q.has(V.resource.path));
						} else B = x;
						B = B.filter((H) => {
							let q = this.n.asRelativePath(H.resource);
							return !O.test(q);
						});
					}
					return z;
				}
				async createNewExperimentalIndex(A, R) {
					const O = this.n.getWorkspace().folders[0].toResource(A);
					if (!(await this.s.stat(O)).isDirectory)
						throw new Error("Target directory is not a directory");
					const U = await this.s.resolve(O, {
							resolveSingleChildDescendants: !0,
							resolveMetadata: !1,
						}),
						z = await this.j.executeCommand("git.api.getRepositories"),
						F = R.map(
							(G) =>
								"(^" +
								G.replace(/\./g, "\\.")
									.replace(/\//g, "\\/")
									.replace(/\$/g, "\\$")
									.replace(/\^/g, "\\^")
									.replace(/\?/g, "\\?")
									.replace(/\*/g, "[^\\/]*")
									.replace("[^\\/]*[^\\/]*", ".*") +
								"(\\/.*)?$)",
						);
					let x = await this._findNonIgnoredFiles(
						U,
						z,
						new RegExp(F.join("|")),
					);
					x = x.filter(
						(G) =>
							!G.name.endsWith(".lock") && !G.name.match(/-lock\.(json|yaml)/),
					);
					const H = await this.m.aiClient(),
						q = L(U, z);
					return (
						await H.createExperimentalIndex(
							new t.$qt({
								targetDir: A,
								repo: q?.toString() ?? "",
								files: x.map((G) => this.n.asRelativePath(G.resource)),
							}),
							{ headers: (0, P.$m6b)((0, k.$9g)()) },
						)
					).indexId;
				}
				async reloadIndexFiles(A) {
					return (
						await (
							await this.m.aiClient()
						).listExperimentalIndexFiles(new t.$st({ indexId: A }), {
							headers: (0, P.$m6b)((0, k.$9g)()),
						})
					).files.map((B) => ({
						relativePath: B.workspaceRelativePath,
						stage: B.stage,
						nodes: B.nodes.map((U) => ({
							nodeId: U.nodeId,
							stage: U.stage,
							content: U.content,
							summary: U.summary,
						})),
					}));
				}
				async buildIndexEdges(A, R) {
					const O = [];
					for (const B of A.files)
						B.stage === "unread" &&
							O.push(
								this.buildFileEdges(
									A.experimentalIndexId,
									B.relativePath,
									(U) => R(B.relativePath, U),
								),
							);
					await Promise.all(O);
				}
				async buildFileEdges(A, R, O) {
					const B = this.n.getWorkspace().folders[0].toResource(R),
						U = await this.s.resolve(B, {
							resolveSingleChildDescendants: !0,
							resolveMetadata: !1,
						}),
						z = await this.m.aiClient();
					let F = [];
					const x = async (q) => {
						const V = q.object.textEditorModel,
							G = await this.G(V);
						if (G) {
							const K = (
									await this.y.getOrCreate(V, w.CancellationToken.None)
								).getTopLevelSymbols(),
								J = D(G, K, V),
								W = V.getLinesContent(),
								X = this.n.asRelativePath(U.resource),
								ie = await (await this.getIndex(A)).registerFileToIndex(
									new t.$Bt({
										indexId: A,
										workspaceRelativePath: X,
										rootContextNode: (0, S.$V9b)(J, X, G, W),
										content: W,
									}),
								),
								ne = [],
								ee = ie.dependencyResolutionAttempts;
							(F =
								ie.fileData?.nodes.map((_) => ({
									nodeId: _.nodeId,
									stage: _.stage,
									content: _.content,
									summary: _.summary,
								})) ?? []),
								await new Promise((_) => setTimeout(_, 500));
							for (const _ of ee) {
								const te = [],
									Q = _.symbol;
								if (Q === void 0) continue;
								const Z = Q.lineNumber,
									se = Q.symbolEndColumn - 1,
									re = await (0, p.$POb)(
										this.f.definitionProvider,
										V,
										new C.$hL(Z, se),
										!1,
										w.CancellationToken.None,
									);
								for (const le of re) {
									const oe = le.uri;
									oe.path !== V.uri.path &&
										te.push(await this.n.asRelativePath(oe));
								}
								te.length > 0 &&
									ne.push(new t.$Zt({ request: _, resolvedPaths: te }));
							}
							return (
								await z.setupIndexDependencies(
									new t.$Dt({
										indexId: A,
										fileId: ie.fileId,
										dependencyResolutionResults: ne,
									}),
									{ headers: (0, P.$m6b)((0, k.$9g)()) },
								),
								{ relativePath: R, stage: "read", nodes: F }
							);
						} else
							return (
								console.error(
									"No folding regions found for file " + V.uri.path,
								),
								{ relativePath: R, stage: "unread", nodes: [] }
							);
					};
					await (async () => {
						for (; this.findDependenciesQueue.length >= this.MAX_CONCURRENT; )
							await Promise.race(
								this.findDependenciesQueue.map((V) => V.then((G) => [V, G])),
							).then(([V, G]) => {
								const K = this.findDependenciesQueue.indexOf(V);
								K !== -1 && this.findDependenciesQueue.splice(K, 1);
							});
						const q = this.q.createModelReference(U.resource).then((V) =>
							x(V)
								.catch(
									(G) => (
										console.error("Error finding dependencies for " + U.name),
										console.error(G),
										{ relativePath: R, stage: "unread", nodes: F }
									),
								)
								.then((G) => (V.dispose(), O(G), G)),
						);
						this.findDependenciesQueue.push(q), await q;
					})();
				}
				async computeIndexTopo(A) {
					await (await this.m.aiClient()).computeIndexTopoSort(
						new t.$Ft({ indexId: A }),
						{ headers: (0, P.$m6b)((0, k.$9g)()) },
					);
				}
				async _handleChooseCodeReferencesNodeResponse(A, R) {
					const O = R.actions;
					let B = [],
						U = [];
					if (O.length === 0) B = [];
					else {
						const H = O[0].workspaceRelativePath,
							q = this.n.getWorkspace().folders[0].toResource(H),
							V = await this.q.createModelReference(q);
						try {
							const G = V.object.textEditorModel;
							console.log(`${O.length} actions requested for ${A}`),
								console.log(O),
								await new Promise((K) => setTimeout(K, 500)),
								(U = await Promise.all(
									O.map(async (K) => {
										let J = [];
										switch (K.action) {
											case t.CodeSymbolWithAction_CodeSymbolAction
												.GO_TO_DEFINITION:
												J = await (0, p.$POb)(
													this.f.definitionProvider,
													G,
													new C.$hL(K.lineNumber, K.symbolEndColumn - 1),
													!1,
													w.CancellationToken.None,
												);
												break;
											case t.CodeSymbolWithAction_CodeSymbolAction
												.GO_TO_IMPLEMENTATION:
												J = await (0, p.$ROb)(
													this.f.implementationProvider,
													G,
													new C.$hL(K.lineNumber, K.symbolEndColumn - 1),
													!1,
													w.CancellationToken.None,
												);
												break;
											case t.CodeSymbolWithAction_CodeSymbolAction.REFERENCES:
												J = await (0, p.$TOb)(
													this.f.referenceProvider,
													G,
													new C.$hL(K.lineNumber, K.symbolEndColumn - 1),
													!1,
													!1,
													w.CancellationToken.None,
												);
												break;
											case t.CodeSymbolWithAction_CodeSymbolAction.UNSPECIFIED:
												break;
										}
										return (
											console.log(
												"Got " +
													J.length +
													" links for action " +
													K.action +
													" on " +
													K.symbol +
													" in " +
													K.workspaceRelativePath,
											),
											{ action: K, links: J }
										);
									}),
								));
						} finally {
							V.dispose();
						}
						B = await Promise.all(
							U.map(async ({ action: G, links: K }) => {
								const J = await this.H(K);
								return new t.$3t({ action: G, references: J });
							}),
						);
					}
					const z = await this.m.aiClient();
					let F,
						x = 0;
					for (;;)
						try {
							this.parallel_dedcap_requests++,
								console.log(
									"Sending registerCodeReferences request for node " +
										A +
										" (parallel: " +
										this.parallel_dedcap_requests +
										")",
								),
								(F = await z.registerCodeReferences(
									new t.$Nt({ nodeId: A, references: B }),
									{ headers: (0, P.$m6b)((0, k.$9g)()) },
								)),
								console.log(
									"Got back registerCodeReferences request for node " + A,
								);
							break;
						} catch (H) {
							if (
								(console.error(
									"Error during registerCodeReferences for node " + A,
								),
								x++,
								x < 3)
							)
								console.log("Retrying after " + x + " attempts for node " + A),
									await new Promise((q) => setTimeout(q, 100));
							else throw H;
						} finally {
							this.parallel_dedcap_requests--;
						}
					return F.dependencies;
				}
				async _linkNode(A, R, O) {
					const B = O?.force ?? !1,
						U = A + "-" + R,
						z = Date.now(),
						F = async () => {
							const x = new t.$Ht({
									indexId: A,
									request: { case: "node", value: new t.$Jt({ nodeId: R }) },
									recompute: B,
								}),
								H = await this.getIndex(A);
							let q,
								V = 0;
							for (;;)
								try {
									this.parallel_dedcap_requests++,
										console.log(
											"Sending chooseCodeReferences request for node " +
												R +
												" (parallel: " +
												this.parallel_dedcap_requests +
												")",
										),
										(q = await H.chooseCodeReferences(x)),
										console.log(
											"Got back chooseCodeReferences request for node " + R,
										);
									break;
								} catch (K) {
									if (
										(console.error(
											"Error during chooseCodeReferences for node " + R,
										),
										V++,
										V < 3)
									)
										console.log(
											"Retrying after " + V + " attempts for node " + R,
										),
											await new Promise((J) => setTimeout(J, 100));
									else throw K;
								} finally {
									this.parallel_dedcap_requests--;
								}
							if (q.response.case !== "node")
								throw new Error(
									"Unexpected response type " +
										q.response.case +
										" when linking node",
								);
							const G = q.response.value.skipped;
							if (G && B)
								throw new Error(
									"Unexpected skipped response when linking node with force = true",
								);
							return G
								? q.response.value.dependencies
								: await this._handleChooseCodeReferencesNodeResponse(
										R,
										q.response.value,
									).then(
										(K) => (
											O?.onLink?.(R), this.C.get(U) === z && this.z.delete(U), K
										),
									);
						};
					return B || !this.z.has(U)
						? (this.C.set(U, z), this.z.set(U, F()), await this.z.get(U))
						: (console.log("Duplicate linkNode request for node " + R),
							await this.z.get(U));
				}
				async linkNode(A, R) {
					return await this._linkNode(A, R, { force: !0 });
				}
				_createDependencySummaryRequest(A, R, O) {
					const B = "index:" + A + ":node:" + R;
					if (this.dependencySummaryPromises.has(B))
						return this.dependencySummaryPromises.get(B);
					const U = this._summarizeNode({
						indexId: A,
						nodeId: R,
						force: !1,
						...(O ?? {}),
					})
						.then(async () => {
							await new Promise((z) => setTimeout(z, 1e3)),
								this.dependencySummaryPromises.delete(B);
						})
						.catch((z) => {
							throw (this.dependencySummaryPromises.delete(B), z);
						});
					return this.dependencySummaryPromises.set(B, U), U;
				}
				async _summarizeNode({
					indexId: A,
					nodeId: R,
					force: O,
					onLink: B,
					onSummarize: U,
					cachedSummary: z,
				}) {
					const F = z?.(R);
					if (F !== void 0) return F;
					const x = new t.$Pt({ indexId: A, nodeId: R, recompute: O }),
						H = await this.getIndex(A);
					let q;
					await this._linkNode(A, R, { force: !1, onLink: B });
					let V = 0;
					for (;;)
						try {
							this.parallel_dedcap_requests++,
								console.log(
									"Sending summarizeWithReferences request for node " +
										R +
										" (parallel: " +
										this.parallel_dedcap_requests +
										")",
								),
								(q = await H.summarizeWithReferences(x)),
								console.log(
									"Got back summarizeWithReferences request for node " + R,
								);
							break;
						} catch (K) {
							if (
								(console.error(
									"Error during summarizeWithReferences for node " + R,
								),
								V++,
								V < 3)
							)
								console.log("Retrying after " + V + " attempts for node " + R),
									await new Promise((J) => setTimeout(J, 100));
							else throw K;
						} finally {
							this.parallel_dedcap_requests--;
						}
					const G = async (K) => {
						const J = K.map((W) =>
							this._createDependencySummaryRequest(A, W, {
								onLink: B,
								onSummarize: U,
							}),
						);
						await Promise.all(J);
					};
					switch (q.response.case) {
						case "dependency":
							return (
								console.log(
									"SummarizeWithReferences returned dependency case for node " +
										R,
								),
								console.log(q.response.value.nodes),
								await G(q.response.value.nodes),
								await this._summarizeNode({
									indexId: A,
									nodeId: R,
									force: O,
									onLink: B,
									onSummarize: U,
								})
							);
						case "success":
							return (
								console.log(
									"SummarizeWithReferences returned success case for node",
								),
								U?.(R, q.response.value.summary),
								q.response.value.summary
							);
						default:
							throw new Error(
								"Unexpected response type " +
									q.response.case +
									" when summarizing node",
							);
					}
				}
				async summarizeNode(A, R, O) {
					return await this._summarizeNode({
						indexId: A,
						nodeId: R,
						force: !0,
						...(O ?? {}),
					});
				}
				async summarizeNodes(A, R, O) {
					const U = [];
					for (let z = 0; z < R.length; z++) {
						const F = R[z],
							x = () =>
								this._summarizeNode({
									indexId: A,
									nodeId: F,
									force: !1,
									...(O ?? {}),
								});
						for (
							console.log(
								"Node in queue: " + F + " (queue size: " + U.length + ")",
							);
							U.length >= 50;
						)
							await Promise.race(U.map((H) => H.then((q) => [H, q]))).then(
								([H, q]) => {
									const V = U.indexOf(H);
									V !== -1 && U.splice(V, 1);
								},
							);
						U.push(x());
					}
					await Promise.all(U);
				}
				async getNodeSummary(A, R, O) {
					return await this._summarizeNode({
						indexId: A,
						nodeId: R,
						force: !1,
						...(O ?? {}),
					});
				}
				async contextualizeSymbol(A) {}
				F(A, R, O) {
					if (O.range === void 0) {
						console.error(
							"No target selection range found for ref " +
								JSON.stringify(O, null, 2),
						);
						return;
					}
					const B = this.n.asRelativePath(A.uri),
						U = A.getLinesContent(),
						z = (0, S.$W9b)(O.range.startLineNumber, R, B, U);
					return new t.$4t({
						range: new i.$Fs({
							startLineNumber: O.range.startLineNumber,
							startColumn: O.range.startColumn,
							endLineNumberInclusive: O.range.endLineNumber,
							endColumn: O.range.endColumn,
						}),
						reference: z,
					});
				}
				async G(A) {
					const R = { limit: 5e3, update: () => {} },
						O = new n.$PNb(A, this.r, R);
					let B = O;
					const U = c.$ZNb.getFoldingRangeProviders(this.f, A);
					U.length > 0 && (B.dispose(), (B = new g.$XNb(A, U, () => {}, R, O)));
					const z = await B.compute(w.CancellationToken.None);
					return B.dispose(), z ?? void 0;
				}
				async H(A) {
					const R = new Map();
					for (const B of A) {
						const U = B.uri;
						R.has(U.path) || R.set(U.path, []), R.get(U.path)?.push(B);
					}
					return (
						await Promise.all(
							[...R.entries()].slice(0, 10).map(async ([B, U]) => {
								const z = U[0].uri,
									F = await this.q.createModelReference(z);
								try {
									const x = F.object.textEditorModel;
									if (this.f.foldingRangeProvider.all(x).length == 0) return [];
									const q = await this.G(x);
									return q
										? U.slice(0, 10)
												.map((G) => this.F(x, q, G))
												.filter((G) => G !== void 0)
										: [];
								} finally {
									F.dispose();
								}
							}),
						)
					).flat();
				}
			};
			(e.$Z9b = M),
				(e.$Z9b = M =
					Ne(
						[
							j(0, r.$k3),
							j(1, u.$bub),
							j(2, o.$ek),
							j(3, $.$Nfc),
							j(4, y.$Vi),
							j(5, a.$MO),
							j(6, m.$aN),
							j(7, b.$ll),
							j(8, f.$gj),
							j(9, I.$_Y),
							j(10, h.$9Db),
						],
						M,
					)),
				(0, s.$lK)(e.$Y9b, M, s.InstantiationType.Delayed);
		},
	),
		define(
			de[3959],
			he([1, 0, 46, 71, 11, 8, 43, 4, 1347]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (d = mt(d));
				class r extends t.$ktb {
					runEditorCommand(h, c, ...n) {
						const g = h.get(m.$Y9b);
					}
				}
				class u extends r {
					static {
						this.ID = "editor.action.aiContextualize";
					}
					constructor() {
						super({
							id: u.ID,
							title: {
								value: d.localize(4430, null),
								original: "Go to AI Contextualize",
							},
							precondition: E.$Kj.and(
								i.EditorContextKeys.hasTypeDefinitionProvider,
							),
							keybinding: {
								when: i.EditorContextKeys.editorTextFocus,
								primary: 0,
								weight: C.KeybindingWeight.EditorContrib,
							},
							menu: [
								{ id: w.$XX.EditorContext, group: "navigation", order: 1.5 },
								{
									id: w.$XX.MenubarGoMenu,
									precondition: null,
									group: "4_symbol_nav",
									order: 3.5,
								},
							],
						});
					}
				}
			},
		),
		define(
			de[1932],
			he([
				1, 0, 5, 477, 232, 45, 3, 83, 315, 205, 1111, 47, 20, 124, 516, 140,
				418, 118, 1011, 337, 191, 62, 246,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ucc = e.$tcc = e.$scc = e.$rcc = void 0);
				const $ = "\u26E2Thought\u2624",
					v = "\u26E2/Thought\u2624";
				(e.$rcc = "<MIRRORED_FILE>"),
					(e.$scc = "</MIRRORED_FILE>"),
					(e.$tcc = (0, t.$Mi)("aiProjectService"));
				let S = class extends C.$1c {
					constructor(T, P, k, L, D, M, N, A, R, O) {
						super(),
							(this.b = T),
							(this.c = P),
							(this.f = k),
							(this.g = L),
							(this.h = D),
							(this.j = M),
							(this.m = N),
							(this.n = A),
							(this.q = R),
							(this.r = O);
					}
					createProject(T, P) {
						throw new Error("Method not implemented.");
					}
					s({ currentTabId: T, assistantBubbleId: P }) {
						const k = { type: "codeInterpreter", bubbleId: P, tabId: T },
							[L, D] = this.m.registerNewGeneration({ metadata: k });
						return { generationUUID: L, abortController: D };
					}
					async createAiProjectClient(T) {
						throw new Error(
							"DEPRECATED. DEPRECATED. DEPRECATED. DEPRECATED. DEPRECATED. DEPRECATED. DEPRECATED.",
						);
					}
					getModelDetails() {
						let T = this.g.getModel() ?? void 0,
							P = this.b.getApiKeyForModel(T);
						const k = this.g.getUseApiKeyForModel(T),
							L = this.b.reactivePrivacyMode(),
							D = this.f.applicationUserPersistentStorage.azureState;
						return (
							(!k || !P) && (P = void 0),
							new d.$Zs({
								apiKey: P,
								modelName: T,
								azureState: D,
								openaiApiBaseUrl:
									this.f.applicationUserPersistentStorage.openAIBaseUrl,
							})
						);
					}
					appendToSolidStore(T, P, k) {
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: L }) => L === T,
							"bubbles",
							({ id: L }) => L === P,
							"text",
							(L) => (L ? L + k : k),
						);
					}
					replaceStringSolidStore(T, P, k) {
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: L }) => L === T,
							"bubbles",
							({ id: L }) => L === P,
							"text",
							k,
						);
					}
					replaceServerChat(T, P, k) {
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: L, tabState: D }) => L === T && D === "codeInterpreter",
							"bubbles",
							({ id: L }) => L === P,
							"serverMessages",
							k,
						);
					}
					getHelperMods({
						currentTabId: T,
						userBubbleId: P,
						assistantBubbleId: k,
					}) {
						return {
							appendAssistant: (N) => this.appendToSolidStore(T, k, N),
							replaceUserServer: (...N) => this.replaceServerChat(T, P, N),
							replaceAssistantServer: (...N) => this.replaceServerChat(T, k, N),
						};
					}
					async *streamWithGenerationHandler(T, P) {
						try {
							for await (const k of T) yield k;
						} catch (k) {
							console.error(k);
						} finally {
							this.f.setNonPersistentStorage("inprogressAIGenerations", (k) =>
								k.filter((L) => L.generationUUID !== P),
							),
								this.q.persistSelectedChat(!0);
						}
					}
					async startProject(
						T,
						{ currentTabId: P, userBubbleId: k, assistantBubbleId: L },
					) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						const D = await this.a,
							{ generationUUID: M, abortController: N } = this.s({
								assistantBubbleId: L,
								currentTabId: P,
							}),
							A = this.streamWithGenerationHandler(
								D.aiProjectAgentInit(
									{ prompt: T, modelDetails: this.getModelDetails() },
									{ signal: N.signal, headers: (0, s.$m6b)(M) },
								),
								M,
							),
							{
								appendAssistant: R,
								replaceUserServer: O,
								replaceAssistantServer: B,
							} = this.getHelperMods({
								currentTabId: P,
								userBubbleId: k,
								assistantBubbleId: L,
							});
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: z }) => z === P,
							"additionalData",
							"simpleDescription",
							T,
						);
						let U = !1;
						try {
							for await (const z of A)
								if (z.response.case === "clarification") {
									const F = z.response.value.response;
									F.case === "thought"
										? (U || (R($), (U = !0)), R(F.value))
										: F.case === "output"
											? (U && (R(v), (U = !1)), R(F.value))
											: F.case === "messagePayload" &&
												(O({
													messageType: d.PureMessage_MessageType.USER,
													content: F.value.fullUserMessage,
												}),
												B({
													messageType: d.PureMessage_MessageType.ASSISTANT,
													content: F.value.fullBotMessage,
												}));
								} else if (z.response.case === "repeatClarification")
									return { clarify: z.response.value };
							return { clarify: !1 };
						} finally {
							this.f.setNonPersistentStorage("inprogressAIGenerations", (z) =>
								z.filter((F) => F.generationUUID !== M),
							);
						}
					}
					getPreviousMessages({ currentTabId: T, lastBubbleId: P }, k) {
						const L = this.q.chatData.codeInterpreterTabs.find(
							({ tabId: M }) => M === T,
						)?.bubbles;
						if (L === void 0)
							throw new Error(
								`Could not find bubbles when getting previous project messages! - ${T} - ${P}`,
							);
						const D = [];
						for (const M of L) {
							if (M.id === P) break;
							(k !== void 0 && !k(M)) || D.push(...M.serverMessages);
						}
						return D;
					}
					async clarifyProject(
						T,
						{ currentTabId: P, userBubbleId: k, assistantBubbleId: L },
					) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						const D = this.getPreviousMessages({
								currentTabId: P,
								lastBubbleId: k,
							}),
							M = await this.a,
							{ generationUUID: N, abortController: A } = this.s({
								assistantBubbleId: L,
								currentTabId: P,
							}),
							R = this.streamWithGenerationHandler(
								M.aiProjectClarification(
									{
										modelDetails: this.getModelDetails(),
										previousMessages: D,
										clarificationResponse: T,
									},
									{ signal: A.signal, headers: (0, s.$m6b)(N) },
								),
								N,
							),
							{
								appendAssistant: O,
								replaceUserServer: B,
								replaceAssistantServer: U,
							} = this.getHelperMods({
								currentTabId: P,
								userBubbleId: k,
								assistantBubbleId: L,
							});
						let z = !1;
						for await (const F of R)
							if (F.response.case === "clarification") {
								const x = F.response.value.response;
								x.case === "thought"
									? (z || (O($), (z = !0)), O(x.value))
									: x.case === "output"
										? (z && (O(v), (z = !1)), O(x.value))
										: x.case === "messagePayload" &&
											(B({
												messageType: d.PureMessage_MessageType.USER,
												content: x.value.fullUserMessage,
											}),
											U({
												messageType: d.PureMessage_MessageType.ASSISTANT,
												content: x.value.fullBotMessage,
											}));
							} else if (F.response.case === "repeatClarification")
								return { clarify: F.response.value };
						return { clarify: !1 };
					}
					async getProjectPlan(T, P) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						const k = this.getPreviousMessages({
								currentTabId: T,
								lastBubbleId: P,
							}),
							{ appendAssistant: L, replaceAssistantServer: D } =
								this.getHelperMods({
									currentTabId: T,
									userBubbleId: P,
									assistantBubbleId: P,
								}),
							M = await this.a,
							{ generationUUID: N, abortController: A } = this.s({
								assistantBubbleId: P,
								currentTabId: T,
							}),
							R = this.streamWithGenerationHandler(
								M.aiProjectPlan(
									{ modelDetails: this.getModelDetails(), previousMessages: k },
									{ signal: A.signal, headers: (0, s.$m6b)(N) },
								),
								N,
							);
						let O = "",
							B = !1;
						for await (const U of R) {
							const z = U.response;
							z.case === "thought"
								? (B || (L($), (B = !0)), L(z.value))
								: z.case === "output"
									? (B && (L(v), (B = !1)), L(z.value), (O += z.value))
									: z.case === "messagePayload" &&
										D(
											{
												messageType: d.PureMessage_MessageType.USER,
												content: z.value.fullUserMessage,
											},
											{
												messageType: d.PureMessage_MessageType.ASSISTANT,
												content: z.value.fullBotMessage,
											},
										);
						}
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: U }) => U === T,
							"additionalData",
							"aiProjectPlan",
							O,
						),
							B && L(v),
							L(`

Any feedback/suggestions on the spec?

`);
					}
					async getProjectPlanFeedback(
						T,
						{ currentTabId: P, assistantBubbleId: k, userBubbleId: L },
					) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						const D = this.getPreviousMessages({
								currentTabId: P,
								lastBubbleId: L,
							}),
							M = await this.a,
							{ generationUUID: N, abortController: A } = this.s({
								assistantBubbleId: k,
								currentTabId: P,
							}),
							R = this.streamWithGenerationHandler(
								M.aiProjectPlanFeedback(
									{
										modelDetails: this.getModelDetails(),
										previousMessages: D,
										feedbackOrProgress: T,
									},
									{ signal: A.signal, headers: (0, s.$m6b)(N) },
								),
								N,
							);
						let O = !1;
						const {
							appendAssistant: B,
							replaceUserServer: U,
							replaceAssistantServer: z,
						} = this.getHelperMods({
							currentTabId: P,
							userBubbleId: L,
							assistantBubbleId: k,
						});
						let F = !1,
							x = "";
						for await (const H of R)
							if (H.response.case === "revisedPlan") {
								const q = H.response.value.response;
								q.case === "thought"
									? (F || (B($), (F = !0)), B(q.value))
									: q.case === "output"
										? (F && (B(v), (F = !1)), B(q.value), (x += q.value))
										: q.case === "messagePayload" &&
											(U({
												messageType: d.PureMessage_MessageType.USER,
												content: q.value.fullUserMessage,
											}),
											z({
												messageType: d.PureMessage_MessageType.ASSISTANT,
												content: q.value.fullBotMessage,
											}));
							} else
								H.response.case === "repeatFeedback" && (O = H.response.value);
						return (
							O &&
								(this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: H }) => H === P,
									"additionalData",
									"aiProjectPlan",
									(H) =>
										H
											? H +
												`

_____

After incorporating feedback:

` +
												x
											: x,
								),
								B(`

Any further feedback on the revised plan?

`)),
							console.log(
								"FULL PLAN",
								this.q.chatData.codeInterpreterTabs.find(
									({ tabId: H }) => H === P,
								)?.additionalData.aiProjectPlan,
							),
							{ repeatStep: O }
						);
					}
					async getBreakdown(T, P) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						let k = 0;
						const {
								appendAssistant: L,
								replaceAssistantServer: D,
								replaceUserServer: M,
							} = this.getHelperMods({
								currentTabId: T,
								userBubbleId: P,
								assistantBubbleId: P,
							}),
							N = (H) =>
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: q }) => q === T,
									"additionalData",
									"aiProjectSteps",
									(q) => (
										(k = q.length), [...q, { description: "", stepType: H }]
									),
								),
							A = (H) =>
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: q }) => q === T,
									"additionalData",
									"aiProjectSteps",
									k,
									"description",
									(q) => q + H,
								),
							R = this.q.chatData.codeInterpreterTabs.find(
								({ tabId: H }) => H === T,
							);
						if (R === void 0)
							throw new Error(`No tab details found for tab ${T}`);
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: H }) => H === T,
							"additionalData",
							"aiProjectSteps",
							[],
						);
						const O = await this.a,
							{ generationUUID: B, abortController: U } = this.s({
								assistantBubbleId: P,
								currentTabId: T,
							}),
							z = this.streamWithGenerationHandler(
								O.aiProjectBreakdown(
									{
										modelDetails: this.getModelDetails(),
										description: R.additionalData.simpleDescription,
										spec: R.additionalData.aiProjectPlan,
									},
									{ signal: U.signal, headers: (0, s.$m6b)(B) },
								),
								B,
							);
						let F = !1,
							x = -1;
						for await (const H of z) {
							const q = H.response;
							q.case === "thought"
								? (F || (L($), (F = !0)), L(q.value))
								: q.case === "step"
									? (F && (L(v), (F = !1)),
										q.value.stepNumber !== x &&
											(N(q.value.stepType), (x = q.value.stepNumber)),
										A(q.value.stepDescription),
										L(q.value.stepDescription))
									: q.case === "messagePayload" &&
										(M({
											messageType: d.PureMessage_MessageType.USER,
											content: q.value.fullUserMessage,
										}),
										D({
											messageType: d.PureMessage_MessageType.ASSISTANT,
											content: q.value.fullBotMessage,
										}));
						}
					}
					async getBreakdownFeedback(
						T,
						{ currentTabId: P, assistantBubbleId: k, userBubbleId: L },
					) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						let D = 0;
						const {
								appendAssistant: M,
								replaceAssistantServer: N,
								replaceUserServer: A,
							} = this.getHelperMods({
								currentTabId: P,
								userBubbleId: k,
								assistantBubbleId: k,
							}),
							R = (J) =>
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: W }) => W === P,
									"additionalData",
									"aiProjectSteps",
									(W) => (
										(D = W.length), [...W, { description: "", stepType: J }]
									),
								),
							O = () =>
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: J }) => J === P,
									"additionalData",
									"aiProjectSteps",
									[],
								),
							B = (J) =>
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: W }) => W === P,
									"additionalData",
									"aiProjectSteps",
									D,
									"description",
									(W) => W + J,
								);
						if (
							this.q.chatData.codeInterpreterTabs.find(
								({ tabId: J }) => J === P,
							) === void 0
						)
							throw new Error(`No tab details found for tab ${P}`);
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: J }) => J === P,
							"additionalData",
							"aiProjectSteps",
							[],
						);
						const z = this.getPreviousMessages(
								{ currentTabId: P, lastBubbleId: L },
								(J) =>
									J.bubbleState === r.NewProjectState.breakdown ||
									J.bubbleState === r.NewProjectState.breakdownFeedback,
							),
							F = await this.a,
							{ generationUUID: x, abortController: H } = this.s({
								assistantBubbleId: k,
								currentTabId: P,
							}),
							q = this.streamWithGenerationHandler(
								F.aiProjectBreakdownFeedback(
									{
										modelDetails: this.getModelDetails(),
										previousMessages: z,
										feedbackOrProgress: T,
									},
									{ signal: H.signal, headers: (0, s.$m6b)(x) },
								),
								x,
							);
						let V = !1,
							G = !1,
							K = -1;
						for await (const J of q) {
							const W = J.response;
							if (W.case === "revisedBreakdown") {
								const X = W.value.response;
								X.case === "thought"
									? (G || (M($), (G = !0)), M(X.value))
									: X.case === "step"
										? (G && (M(v), (G = !1)),
											K === -1 && O(),
											X.value.stepNumber !== K &&
												(R(X.value.stepType), (K = X.value.stepNumber)),
											B(X.value.stepDescription),
											M(X.value.stepDescription))
										: X.case === "messagePayload" &&
											(A({
												messageType: d.PureMessage_MessageType.USER,
												content: X.value.fullUserMessage,
											}),
											N({
												messageType: d.PureMessage_MessageType.ASSISTANT,
												content: X.value.fullBotMessage,
											}));
							} else W.case === "repeatFeedback" && (V = W.value);
						}
						return { repeatStep: V };
					}
					async performStep(
						T,
						{ currentTabId: P, userBubbleId: k, assistantBubbleId: L },
					) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						const D = this.q.chatData.codeInterpreterTabs.find(
							({ tabId: V }) => V === P,
						);
						if (D === void 0) throw new Error(`No tab data found for tab ${P}`);
						const { appendAssistant: M, replaceAssistantServer: N } =
							this.getHelperMods({
								currentTabId: P,
								userBubbleId: k,
								assistantBubbleId: L,
							});
						if (
							this.q.chatData.codeInterpreterTabs
								.find(({ tabId: V }) => V === P)
								?.bubbles.find(
									({ id: V, type: G, bubbleState: K }) =>
										V === L &&
										G === g.BubbleType.AI_CODE_INTERPRETER &&
										K === r.NewProjectState.steps,
								) === void 0
						)
							throw new Error(`No bubble found for bubble ${L}`);
						const R = D.additionalData.aiProjectSteps,
							O = await this.a,
							{ generationUUID: B, abortController: U } = this.s({
								assistantBubbleId: L,
								currentTabId: P,
							});
						console.log("RUNNING STEP", R[T].description);
						const z = O.aiProjectStep(
								{
									modelDetails: this.getModelDetails(),
									stepDescription: R[T].description,
									stepType: R[T].stepType,
									shellType: c.ShellType.BASH,
									projectBreakdown: D.additionalData.aiProjectSteps.map(
										(V) => V.description,
									),
									projectPlan: D.additionalData.aiProjectPlan,
								},
								{ signal: U.signal, headers: (0, s.$m6b)(B) },
							),
							{ stream: F, toolformerSessionFuture: x } =
								this.h.handleTaskWithSessionData(z, U.signal);
						x.then((V) => {
							V.onDidTerminalChangeEvent((G) => {
								console.log("HANDLING PAYLOAD", G),
									G.type === f.WriteTerminalState.newTerminal
										? (M(`

### Terminal

`),
											M("```"))
										: G.type === f.WriteTerminalState.writingCommand
											? M(`
$ ${G.value}
`)
											: G.type === f.WriteTerminalState.writingResponse
												? M(G.value)
												: G.type === f.WriteTerminalState.endTerminal &&
													M("\n```\n\n");
							});
						});
						let H = !1,
							q = !0;
						for await (const V of F)
							if (V.response.case === "thought")
								H || (M($), (H = !0)), M(V.response.value);
							else if (V.response.case === "output")
								H && (M(v), (H = !1)), M(V.response.value);
							else if (V.response.case === "messagePayload")
								N(
									new d.$7s({
										messageType: d.PureMessage_MessageType.USER,
										content: V.response.value.fullUserMessage,
									}),
									new d.$7s({
										messageType: d.PureMessage_MessageType.ASSISTANT,
										content: V.response.value.fullBotMessage,
									}),
								);
							else if (V.response.case === "stepPayload") {
								const G = V.response.value;
								if (G.payload.case !== "runTerm") {
									if (G.payload.case === "writeCode")
										this.q.setChatData(
											"codeInterpreterTabs",
											({ tabId: K }) => K === P,
											"additionalData",
											"aiProjectSteps",
											T,
											"stepPayload",
											{
												type: u.AiProjectStepType.READ_WRITE_FILE,
												fileName: G.payload.value.filename,
											},
										),
											M(e.$rcc + G.payload.value.filename + e.$scc);
									else if (G.payload.case === "creatingFiles") {
										const K = G.payload.value.payload;
										this.q.setChatData(
											"codeInterpreterTabs",
											({ tabId: J }) => J === P,
											"additionalData",
											"aiProjectSteps",
											T,
											"stepPayload",
											(J) => {
												let W;
												if (J === void 0 || q)
													console.log("resetting!!"),
														(W = {
															type: u.AiProjectStepType.CREATE_RM_FILES,
															fileNames: [],
															directories: [],
														});
												else if (
													J?.type === u.AiProjectStepType.CREATE_RM_FILES
												)
													W = { ...J };
												else
													throw new Error(
														`Expected creatingFiles, got ${J?.type}`,
													);
												return K.case === "directory"
													? (console.log("ADDING DIRECTORY", K.value),
														{ ...W, directories: [...W.directories, K.value] })
													: K.case === "filename"
														? { ...W, fileNames: [...W.fileNames, K.value] }
														: W;
											},
										);
									}
								}
								q = !1;
							}
						H && M(v),
							M(`

Any feedback/suggestions on this step?

`);
					}
					async currentStepFeedback(
						T,
						P,
						k,
						{ currentTabId: L, userBubbleId: D, assistantBubbleId: M },
					) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						const N = this.q.chatData.codeInterpreterTabs.find(
							({ tabId: J }) => J === L,
						);
						if (N === void 0) throw new Error(`No tab data found for tab ${L}`);
						const {
								appendAssistant: A,
								replaceAssistantServer: R,
								replaceUserServer: O,
							} = this.getHelperMods({
								currentTabId: L,
								userBubbleId: M,
								assistantBubbleId: M,
							}),
							B = await this.a,
							{ generationUUID: U, abortController: z } = this.s({
								assistantBubbleId: M,
								currentTabId: L,
							}),
							F = this.getPreviousMessages(
								{ currentTabId: L, lastBubbleId: D },
								(J) =>
									J.bubbleState === r.NewProjectState.steps ||
									J.bubbleState === r.NewProjectState.stepsFeedback
										? J.stepIndex === P
										: !1,
							);
						console.log("USING CURRENT STEP", P, k);
						let x;
						if (k.stepPayload?.type === u.AiProjectStepType.READ_WRITE_FILE)
							x = k.stepPayload.fileName;
						else
							throw new Error(
								`Expected READ_WRITE_FILE, got ${k.stepPayload?.type}`,
							);
						const H = B.aiProjectStepFeedback(
								{
									modelDetails: this.getModelDetails(),
									stepDescription: k.description,
									stepType: k.stepType,
									shellType: c.ShellType.BASH,
									projectBreakdown: N.additionalData.aiProjectSteps.map(
										(J) => J.description,
									),
									projectPlan: N.additionalData.aiProjectPlan,
									previousFeedbackMessages: F,
									feedbackPayload: {
										case: "modifyCodePayload",
										value: { feedbackText: T, filesToModify: [x] },
									},
								},
								{ signal: z.signal, headers: (0, s.$m6b)(U) },
							),
							{ stream: q, toolformerSessionFuture: V } =
								this.h.handleTaskWithSessionData(H, z.signal);
						V.then((J) => {
							J.onDidTerminalChangeEvent((W) => {
								console.log("HANDLING PAYLOAD", W),
									W.type === f.WriteTerminalState.newTerminal
										? (A(`

### Terminal

`),
											A("```"))
										: W.type === f.WriteTerminalState.writingCommand
											? A(`
$ ${W.value}
`)
											: W.type === f.WriteTerminalState.writingResponse
												? A(W.value)
												: W.type === f.WriteTerminalState.endTerminal &&
													A("\n```\n\n");
							});
						});
						let G = !1,
							K = !0;
						console.log("going to stream now");
						for await (const J of q)
							if (
								(console.log("GOTTT", J),
								J.response.case === "responseFromFeedback")
							) {
								const W = J.response.value;
								if (W.response.case === "thought")
									G || (A($), (G = !0)), A(W.response.value);
								else if (W.response.case === "output")
									G && (A(v), (G = !1)), A(W.response.value);
								else if (W.response.case === "stepPayload") {
									const X = W.response.value;
									if (X.payload.case !== "runTerm") {
										if (X.payload.case === "writeCode")
											A(e.$rcc + X.payload.value.filename + e.$scc);
										else if (X.payload.case === "creatingFiles") {
											const Y = X.payload.value.payload;
											console.log("GOT PAYLOAD", Y),
												this.q.setChatData(
													"codeInterpreterTabs",
													({ tabId: ie }) => ie === L,
													"additionalData",
													"aiProjectSteps",
													P,
													"stepPayload",
													(ie) => {
														let ne;
														if (ie === void 0 || K)
															console.log("resetting!!"),
																(ne = {
																	type: u.AiProjectStepType.CREATE_RM_FILES,
																	fileNames: [],
																	directories: [],
																});
														else if (
															ie?.type === u.AiProjectStepType.CREATE_RM_FILES
														)
															ne = { ...ie };
														else
															throw new Error(
																`Expected creatingFiles, got ${ie?.type}`,
															);
														return Y.case === "directory"
															? (console.log("ADDING DIRECTORY", Y.value),
																{
																	...ne,
																	directories: [...ne.directories, Y.value],
																})
															: Y.case === "filename"
																? {
																		...ne,
																		fileNames: [...ne.fileNames, Y.value],
																	}
																: ne;
													},
												);
										}
									}
									K = !1;
								}
							} else if (J.response.case === "repeatFeedback")
								return (
									J.response.value &&
										A(`

Any additional feedback/suggestions?

`),
									{ repeatStep: J.response.value }
								);
						return { repeatStep: !1 };
					}
					async nextStep(T, P, k) {
						console.log("CALLING NEXT STEP WITH", k);
						const L = this.q.chatData.codeInterpreterTabs.find(
							({ tabId: F }) => F === T,
						);
						if (L === void 0) throw new Error(`No tab data found for tab ${T}`);
						const D = k ?? L.additionalData.stepIndex;
						console.log("RUNNING NEXT STEP");
						let M = 0;
						const N = L.bubbles.find((F, x) =>
							F.id === P ? ((M = x), !0) : !1,
						);
						if (N === void 0)
							throw new Error(
								`No bubble data found for tab ${T} and bubble ${P}`,
							);
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: F }) => F === T,
							"bubbles",
							(F) => F.slice(0, M + 1),
						);
						const A = ({
								type: F,
								state: x = N.nextBubbleState,
								nextBubbleState: H = r.NewProjectState.undecided,
								stepIndex: q = D,
								origUUID: V,
							}) => {
								let G;
								return (
									V === void 0 ? (G = (0, a.$9g)()) : (G = V),
									this.q.setChatData(
										"codeInterpreterTabs",
										({ tabId: K }) => K === T,
										"bubbles",
										(K) => {
											let J;
											if (F === d.PureMessage_MessageType.ASSISTANT) {
												let W = {
													id: G,
													bubbleState: x,
													nextBubbleState: H,
													messageType: F,
													type: g.BubbleType.AI_CODE_INTERPRETER,
													text: "",
													modelType: this.g.getModel(),
													serverMessages: [],
													aiType: "newProject",
												};
												x === r.NewProjectState.breakdown ||
												x === r.NewProjectState.breakdownFeedback
													? (J = { ...W, bubbleState: x, steps: [] })
													: x === r.NewProjectState.plan ||
															x === r.NewProjectState.planFeedback
														? (J = { ...W, bubbleState: x, plan: "" })
														: x === r.NewProjectState.steps ||
																x === r.NewProjectState.stepsFeedback
															? (J = { ...W, bubbleState: x, stepIndex: q })
															: (J = { ...W, bubbleState: x });
											} else if (F === d.PureMessage_MessageType.USER)
												J = (0, y.createCodeInterpreterUserBubble)(
													this.q.setChatData,
													T,
													x,
													H,
													void 0,
													void 0,
													q,
												);
											else return K;
											return [...K, J];
										},
									),
									G
								);
							},
							R = (F) => {
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: x }) => x === T,
									"additionalData",
									"stepIndex",
									F,
								);
							},
							O = (F) => {
								const x = this.q.chatData.codeInterpreterTabs.find(
									({ tabId: q }) => q === T,
								)?.bubbles;
								if (x === void 0 || x.length === 0)
									throw new Error(`No bubbles found for tab ${T}`);
								const H = x[x.length - 1];
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: q }) => q === T,
									"bubbles",
									({ id: q }) => q === H.id,
									"nextBubbleState",
									F,
								);
							},
							B = (0, a.$9g)(),
							U = { currentTabId: T, userBubbleId: P, assistantBubbleId: B };
						console.log("NEXT STEP", N.bubbleState, U);
						const z = N.nextBubbleState;
						if (z === r.NewProjectState.initial) {
							const F = A({
									type: d.PureMessage_MessageType.ASSISTANT,
									state: r.NewProjectState.initial,
									nextBubbleState: r.NewProjectState.clarification,
									origUUID: B,
								}),
								{ clarify: x } = await this.startProject(N.text ?? "", U);
							x
								? A({
										type: d.PureMessage_MessageType.USER,
										state: r.NewProjectState.clarification,
										nextBubbleState: r.NewProjectState.clarification,
									})
								: (O(r.NewProjectState.plan), await this.nextStep(T, F));
						} else if (z === r.NewProjectState.clarification) {
							const F = A({
									type: d.PureMessage_MessageType.ASSISTANT,
									state: r.NewProjectState.clarification,
									nextBubbleState: r.NewProjectState.clarification,
									origUUID: B,
								}),
								{ clarify: x } = await this.clarifyProject(N.text ?? "", U);
							x
								? A({
										type: d.PureMessage_MessageType.USER,
										state: r.NewProjectState.clarification,
										nextBubbleState: r.NewProjectState.clarification,
									})
								: (O(r.NewProjectState.plan), await this.nextStep(T, F));
						} else if (z === r.NewProjectState.plan)
							A({
								type: d.PureMessage_MessageType.ASSISTANT,
								state: r.NewProjectState.plan,
								nextBubbleState: r.NewProjectState.breakdown,
								origUUID: B,
							}),
								await this.getProjectPlan(T, B),
								A({
									type: d.PureMessage_MessageType.USER,
									state: r.NewProjectState.planFeedback,
									nextBubbleState: r.NewProjectState.planFeedback,
								});
						else if (z === r.NewProjectState.planFeedback) {
							console.log("IN PLAN FEEDBACK STEP!!");
							const F = A({
									type: d.PureMessage_MessageType.ASSISTANT,
									state: r.NewProjectState.planFeedback,
									nextBubbleState: r.NewProjectState.planFeedback,
									origUUID: B,
								}),
								{ repeatStep: x } = await this.getProjectPlanFeedback(
									N.text ?? "",
									U,
								);
							x
								? A({
										type: d.PureMessage_MessageType.USER,
										state: r.NewProjectState.planFeedback,
										nextBubbleState: r.NewProjectState.planFeedback,
									})
								: (O(r.NewProjectState.breakdown), await this.nextStep(T, F));
						} else if (z === r.NewProjectState.breakdown)
							A({
								type: d.PureMessage_MessageType.ASSISTANT,
								state: r.NewProjectState.breakdown,
								nextBubbleState: r.NewProjectState.steps,
								origUUID: B,
							}),
								await this.getBreakdown(T, B),
								R(0),
								await this.nextStep(T, B);
						else if (z === r.NewProjectState.steps) {
							const F = D;
							if (F >= L.additionalData.aiProjectSteps.length) return;
							L.additionalData.aiProjectSteps[F].stepType ===
							u.AiProjectStepType.READ_WRITE_FILE
								? (A({
										type: d.PureMessage_MessageType.ASSISTANT,
										state: r.NewProjectState.steps,
										nextBubbleState: r.NewProjectState.stepsFeedback,
										stepIndex: F,
										origUUID: B,
									}),
									await this.performStep(F, U),
									A({
										type: d.PureMessage_MessageType.USER,
										state: r.NewProjectState.stepsFeedback,
										nextBubbleState: r.NewProjectState.stepsFeedback,
										stepIndex: F,
										origUUID: B,
									}),
									console.log("CREATING FEEDBACK STEP", F))
								: (A({
										type: d.PureMessage_MessageType.ASSISTANT,
										state: r.NewProjectState.steps,
										nextBubbleState: r.NewProjectState.steps,
										stepIndex: F,
										origUUID: B,
									}),
									await this.performStep(F, U),
									R(F + 1),
									await this.nextStep(T, B));
						} else if (z === r.NewProjectState.stepsFeedback) {
							const F = D;
							if (
								(console.log("running steps feedback step", F),
								F >= L.additionalData.aiProjectSteps.length)
							)
								return;
							const x = L.additionalData.aiProjectSteps[F];
							console.log("ALL STEPS", L.additionalData.aiProjectSteps),
								console.log("step index", F);
							const H = A({
								type: d.PureMessage_MessageType.ASSISTANT,
								state: r.NewProjectState.stepsFeedback,
								nextBubbleState: r.NewProjectState.stepsFeedback,
								stepIndex: F,
								origUUID: B,
							});
							console.log("Created bubble!");
							const { repeatStep: q } = await this.currentStepFeedback(
								N.text ?? "",
								D,
								x,
								U,
							);
							console.log("FINISHED REPEAT STEP!"),
								console.log("got repeated step!"),
								q
									? A({
											type: d.PureMessage_MessageType.USER,
											state: r.NewProjectState.stepsFeedback,
											nextBubbleState: r.NewProjectState.stepsFeedback,
											stepIndex: F,
										})
									: (R(F + 1),
										O(r.NewProjectState.steps),
										await this.nextStep(T, H));
						}
					}
				};
				(e.$ucc = S),
					(e.$ucc = S =
						Ne(
							[
								j(0, w.$x6b),
								j(1, i.$i6b),
								j(2, E.$0zb),
								j(3, m.$S6b),
								j(4, n.$a9b),
								j(5, p.$qgc),
								j(6, o.$Nfc),
								j(7, m.$S6b),
								j(8, b.$kgc),
								j(9, l.$Bk),
							],
							S,
						)),
					(0, h.$lK)(e.$tcc, S, h.InstantiationType.Delayed);
			},
		),
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
		define(
			de[3961],
			he([1, 0, 124, 42, 22, 25, 241, 85]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$w8b = void 0);
				let m = class {
					constructor(u, a, h, c, n) {
						(this.a = u),
							(this.b = a),
							(this.c = h),
							(this.d = c),
							(this.f = n);
					}
					async call(u, a, h, c) {}
					async finish(u, a, h, c) {
						if (!a)
							throw new Error(
								"No parameters provided for CreateRmFilesHandler.",
							);
						for (const n of a.createdDirectoryPaths) {
							const g = this.b.getWorkspace().folders[0].toResource(n);
							(await this.f.exists(g)) || (await this.f.createFolder(g));
						}
						for (const n of a.createdFilePaths) {
							const g = this.b.getWorkspace().folders[0].toResource(n);
							if (!(await this.f.exists(g)))
								try {
									await this.a.write(g, "");
								} catch (p) {
									throw p;
								}
						}
						for (const n of a.removedFilePaths) {
							const g = this.b.getWorkspace().folders[0].toResource(n);
							if (!(await this.f.exists(g)))
								throw new Error(
									`File ${n} does not exist: cannot remove file.`,
								);
							try {
								await this.f.del(g);
							} catch (p) {
								throw p;
							}
						}
						return new t.$3y({
							createdFilePaths: a.createdFilePaths,
							removedFilePaths: a.removedFilePaths,
						});
					}
				};
				(e.$w8b = m),
					(e.$w8b = m =
						Ne(
							[
								j(0, d.$kZ),
								j(1, E.$Vi),
								j(2, i.$MO),
								j(3, C.$q8b),
								j(4, w.$ll),
							],
							m,
						));
			},
		),
		define(
			de[3962],
			he([1, 0, 85, 25, 42, 241, 22, 124, 17, 90]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$x8b = void 0);
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
						if (c.testName === void 0)
							return await this.e.del(p), new d.$Hz({});
						let o;
						try {
							o = await this.c.createModelReference(p);
							const b = o.object.textEditorModel
								.getValue()
								.split(o.object.textEditorModel.getEOL());
							let s;
							const l = b.findIndex((y) =>
								y.includes(`@cursor-agent:test-begin:${c.testName}`),
							);
							if (l !== -1) {
								const y = b.findIndex(
									($, v) =>
										v > l && $.includes(`@cursor-agent:test-end:${c.testName}`),
								);
								if (y === -1)
									throw new Error(
										`Could not find end of test ${c.testName} in file ${c.relativeWorkspacePath}.`,
									);
								s = new m.$iL(l + 1, 1, y + 2, 1);
							} else
								throw new Error(
									`Could not find test ${c.testName} in file ${c.relativeWorkspacePath}.`,
								);
							return (
								o.object.textEditorModel.pushEditOperations(
									null,
									[{ range: s, text: "" }],
									() => null,
								),
								new d.$Hz({})
							);
						} finally {
							o?.dispose();
						}
					}
				};
				(e.$x8b = u),
					(e.$x8b = u =
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
		define(
			de[3964],
			he([1, 0, 124, 42, 241, 17, 545, 90, 24, 25, 31, 393]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
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
		define(
			de[3965],
			he([1, 0, 124, 42, 241, 545, 90, 5, 3964, 3963]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$E8b = void 0);
				let u = class {
					constructor(h, c, n, g, p) {
						(this.b = h),
							(this.c = c),
							(this.d = n),
							(this.e = g),
							(this.f = p),
							(this.a = {
								simple: this.f.createInstance(m.$C8b),
								inlineDiff: this.f.createInstance(r.$D8b),
							});
					}
					async call(h, c, n, g) {
						if (!c)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						switch (c.frontendEditType) {
							case t.EditParams_FrontendEditType.SIMPLE:
								return this.a.simple.call(h, c, n, g);
							case t.EditParams_FrontendEditType.INLINE_DIFFS:
								return this.a.inlineDiff.call(h, c, n, g);
							default:
								return this.a.inlineDiff.call(h, c, n, g);
						}
					}
					async finish(h, c, n, g) {
						if (!c)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						switch (c.frontendEditType) {
							case t.EditParams_FrontendEditType.SIMPLE:
								return this.a.simple.finish(h, c, n, g);
							case t.EditParams_FrontendEditType.INLINE_DIFFS:
								return this.a.inlineDiff.finish(h, c, n, g);
							default:
								return this.a.inlineDiff.finish(h, c, n, g);
						}
					}
				};
				(e.$E8b = u),
					(e.$E8b = u =
						Ne(
							[
								j(0, w.$q8b),
								j(1, i.$MO),
								j(2, E.$z8b),
								j(3, C.$aM),
								j(4, d.$Li),
							],
							u,
						));
			},
		),
		define(
			de[3966],
			he([1, 0, 85, 25, 42, 241, 22, 124, 17, 90, 204, 33, 74, 83]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$G8b = void 0);
				let n = class {
					constructor(f, b, s, l, y, $, v) {
						(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.d = l),
							(this.e = y),
							(this.f = $),
							(this.g = v);
					}
					async call(f, b, s, l) {}
					async finish(f, b, s, l) {
						if (!b)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						if (b.relativeWorkspacePath === void 0)
							throw new Error("Need to give the path to know where to edit.");
						const y = await this.d.getMagicURIForText(b.relativeWorkspacePath);
						if (!y)
							throw new Error(
								`Could not find file ${b.relativeWorkspacePath} in the workspace.`,
							);
						let $;
						try {
							$ = await this.c.createModelReference(y);
							const v = new a.$Ce();
							s.signal.addEventListener("abort", () => {
								v.cancel();
							});
							const I = (
								await this.g.getOrCreate($.object.textEditorModel, v.token)
							).getTopLevelSymbols();
							let T = p(I, b.includeChildren);
							return (
								b.lineRange &&
									(T = T.filter((P) =>
										P.range
											? b.lineRange
												? !(
														P.range.startLineNumber <
															b.lineRange.startLineNumber ||
														P.range.endLineNumber >
															b.lineRange.endLineNumberInclusive
													)
												: !0
											: !1,
									)),
								new d.$Mz({ symbols: T })
							);
						} finally {
							$?.dispose();
						}
					}
				};
				(e.$G8b = n),
					(e.$G8b = n =
						Ne(
							[
								j(0, t.$kZ),
								j(1, i.$Vi),
								j(2, w.$MO),
								j(3, E.$q8b),
								j(4, C.$ll),
								j(5, r.$aM),
								j(6, u.$9Db),
							],
							n,
						));
				function g(o) {
					switch (o) {
						case h.SymbolKind.File:
							return c.DocumentSymbol_SymbolKind.FILE;
						case h.SymbolKind.Module:
							return c.DocumentSymbol_SymbolKind.MODULE;
						case h.SymbolKind.Namespace:
							return c.DocumentSymbol_SymbolKind.NAMESPACE;
						case h.SymbolKind.Package:
							return c.DocumentSymbol_SymbolKind.PACKAGE;
						case h.SymbolKind.Class:
							return c.DocumentSymbol_SymbolKind.CLASS;
						case h.SymbolKind.Method:
							return c.DocumentSymbol_SymbolKind.METHOD;
						case h.SymbolKind.Property:
							return c.DocumentSymbol_SymbolKind.PROPERTY;
						case h.SymbolKind.Field:
							return c.DocumentSymbol_SymbolKind.FIELD;
						case h.SymbolKind.Constructor:
							return c.DocumentSymbol_SymbolKind.CONSTRUCTOR;
						case h.SymbolKind.Enum:
							return c.DocumentSymbol_SymbolKind.ENUM;
						case h.SymbolKind.Interface:
							return c.DocumentSymbol_SymbolKind.INTERFACE;
						case h.SymbolKind.Function:
							return c.DocumentSymbol_SymbolKind.FUNCTION;
						case h.SymbolKind.Variable:
							return c.DocumentSymbol_SymbolKind.VARIABLE;
						case h.SymbolKind.Constant:
							return c.DocumentSymbol_SymbolKind.CONSTANT;
						case h.SymbolKind.String:
							return c.DocumentSymbol_SymbolKind.STRING;
						case h.SymbolKind.Number:
							return c.DocumentSymbol_SymbolKind.NUMBER;
						case h.SymbolKind.Boolean:
							return c.DocumentSymbol_SymbolKind.BOOLEAN;
						case h.SymbolKind.Array:
							return c.DocumentSymbol_SymbolKind.ARRAY;
						case h.SymbolKind.Object:
							return c.DocumentSymbol_SymbolKind.OBJECT;
						case h.SymbolKind.Key:
							return c.DocumentSymbol_SymbolKind.KEY;
						case h.SymbolKind.Null:
							return c.DocumentSymbol_SymbolKind.NULL;
						case h.SymbolKind.EnumMember:
							return c.DocumentSymbol_SymbolKind.ENUM_MEMBER;
						case h.SymbolKind.Struct:
							return c.DocumentSymbol_SymbolKind.STRUCT;
						case h.SymbolKind.Event:
							return c.DocumentSymbol_SymbolKind.EVENT;
						case h.SymbolKind.Operator:
							return c.DocumentSymbol_SymbolKind.OPERATOR;
						case h.SymbolKind.TypeParameter:
							return c.DocumentSymbol_SymbolKind.TYPE_PARAMETER;
						default:
							return c.DocumentSymbol_SymbolKind.UNSPECIFIED;
					}
				}
				function p(o, f) {
					return o.map(
						(b) =>
							new c.$8s({
								name: b.name,
								kind: g(b.kind),
								range: b.range
									? new m.$iL(
											b.range.startLineNumber,
											b.range.startColumn,
											b.range.endLineNumber,
											b.range.endColumn,
										)
									: void 0,
								selectionRange: b.selectionRange
									? new m.$iL(
											b.selectionRange.startLineNumber,
											b.selectionRange.startColumn,
											b.selectionRange.endLineNumber,
											b.selectionRange.endColumn,
										)
									: void 0,
								children: f && b.children ? p(b.children, f) : void 0,
							}),
					);
				}
			},
		),
		define(
			de[3967],
			he([1, 0, 85, 25, 42, 241, 22, 124, 90]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$H8b = void 0);
				let r = class {
					constructor(a, h, c, n, g, p) {
						(this.a = a),
							(this.b = h),
							(this.c = c),
							(this.d = n),
							(this.e = g),
							(this.f = p);
					}
					async call(a, h, c, n) {}
					async finish(a, h, c, n) {
						if (!h)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						if (h.relativeWorkspacePath === void 0)
							throw new Error("Need to give the path to know where to edit.");
						const g = await this.d.getMagicURIForText(h.relativeWorkspacePath);
						if (!g)
							throw new Error(
								`Could not find file ${h.relativeWorkspacePath} in the workspace.`,
							);
						let p;
						try {
							p = await this.c.createModelReference(g);
							const f = p.object.textEditorModel
									.getValue()
									.split(p.object.textEditorModel.getEOL()),
								b = [];
							let s = null,
								l = null;
							for (const y of f)
								y.includes("@cursor-agent:test-begin")
									? ((s = y.split("@cursor-agent:test-begin:")[1].trim()),
										(l = ""))
									: y.includes("@cursor-agent:test-end")
										? (s &&
												l &&
												b.push({
													name: s,
													lines: l.split(p.object.textEditorModel.getEOL()),
												}),
											(s = null),
											(l = null))
										: s &&
											l !== null &&
											(l += y + p.object.textEditorModel.getEOL());
							return new d.$Ez({ tests: b });
						} finally {
							p?.dispose();
						}
					}
				};
				(e.$H8b = r),
					(e.$H8b = r =
						Ne(
							[
								j(0, t.$kZ),
								j(1, i.$Vi),
								j(2, w.$MO),
								j(3, E.$q8b),
								j(4, C.$ll),
								j(5, m.$aM),
							],
							r,
						));
			},
		),
		define(
			de[3968],
			he([1, 0, 124, 33, 59, 48, 69, 42, 414, 25, 118, 241, 85]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$I8b = void 0);
				let c = class {
					constructor(g, p, o, f, b, s) {
						(this.b = g),
							(this.c = p),
							(this.d = o),
							(this.e = f),
							(this.f = b),
							(this.g = s),
							(this.a = new w.$Jc(10));
					}
					async call(g, p, o, f) {
						if (!p)
							throw new Error(
								"No gotodef parameters provided. Need to give at least the symbol.",
							);
						if (
							p.relativeWorkspacePath === void 0 ||
							p.symbol === void 0 ||
							p.lineNumber === void 0
						)
							throw new Error(
								"For now, gotodef needs to be very precise. Need to give at least the symbol, relative workspace path and line number.",
							);
						const l = await this.b.getMagicURIForText(p.relativeWorkspacePath);
						if (!l)
							throw new Error(
								`Could not find file ${p.relativeWorkspacePath} in the workspace.`,
							);
						let y;
						try {
							y = await this.c.createModelReference(l);
							const v = y.object.textEditorModel
								.getLineContent(p.lineNumber)
								.indexOf(p.symbol);
							if (v === -1)
								throw new Error(
									`Could not find symbol \`${p.symbol}\` in line ${p.lineNumber} of file \`${p.relativeWorkspacePath}\`.`,
								);
							const S = new E.$hL(p.lineNumber, v + 1 + p.symbol.length - 1),
								I = new i.$Ce();
							o.signal.addEventListener("abort", () => {
								I.cancel();
							}),
								setTimeout(() => {
									I.cancel();
								}, 5e3);
							const P = (
									await (0, m.$POb)(
										this.e.definitionProvider,
										y.object.textEditorModel,
										S,
										!1,
										I.token,
									)
								).map(async (L) => {
									const M = (
											await this.f.read(L.uri, { acceptTextOnly: !0 })
										).value.split(`
`),
										N = Math.max(0, L.range.startLineNumber - 1 - 5),
										A = Math.min(M.length, L.range.endLineNumber + 5),
										R = M.slice(N, A);
									return new t.$nz({
										relativeWorkspacePath: this.g.asRelativePath(L.uri),
										potentiallyRelevantLines: R.map(
											(O, B) => new t.$oz({ lineNumber: B + N + 1, text: O }),
										),
									});
								}),
								k = await Promise.all(P);
							this.a.set(g.toolformerId, new t.$pz({ results: k }));
						} finally {
							y?.dispose();
						}
					}
					async finish(g, p, o, f) {
						const b = this.a.get(g.toolformerId);
						if (!b) throw new Error("No gotodef result found.");
						return b;
					}
				};
				(e.$I8b = c),
					(e.$I8b = c =
						Ne(
							[
								j(0, a.$q8b),
								j(1, d.$MO),
								j(2, u.$Nfc),
								j(3, C.$k3),
								j(4, h.$kZ),
								j(5, r.$Vi),
							],
							c,
						));
			},
		),
		define(
			de[3969],
			he([1, 0, 124, 42, 241, 17, 545, 90, 25, 31, 48]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J8b = void 0);
				let a = class {
					constructor(c, n, g, p, o, f) {
						(this.a = c),
							(this.b = n),
							(this.c = g),
							(this.d = p),
							(this.e = o),
							(this.f = f);
					}
					async call(c, n, g, p) {
						const o = await this.a.getMagicURIForText(
							n?.relativeWorkspacePath ?? "",
						);
						if (!o)
							throw new Error(
								"Unable to resolve URI for the given relative workspace path",
							);
						const f = await this.b.createModelReference(o),
							b = f.object.textEditorModel;
						if (n !== void 0) {
							n.firstEdit &&
								(b.pushEditOperations(
									[],
									[{ range: b.getFullModelRange(), text: "" }],
									() => null,
								),
								(c.cursorPos = new u.$hL(1, 1)));
							const s = c.cursorPos,
								l = [
									{
										range: new E.$iL(
											s.lineNumber,
											s.column,
											s.lineNumber,
											s.column,
										),
										text: n.text,
										forceMoveMarkers: !0,
									},
								];
							b.pushEditOperations([], l, () => null),
								(c.cursorPos = b.getFullModelRange().getEndPosition());
						}
						f.dispose();
					}
					async finish(c, n, g, p) {
						return new t.$sz();
					}
				};
				(e.$J8b = a),
					(e.$J8b = a =
						Ne(
							[
								j(0, w.$q8b),
								j(1, i.$MO),
								j(2, C.$z8b),
								j(3, d.$aM),
								j(4, m.$Vi),
								j(5, r.$ek),
							],
							a,
						));
			},
		),
		define(
			de[3970],
			he([1, 0, 124, 85, 25, 42, 241, 22]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$K8b = void 0);
				let m = class {
					constructor(u, a, h, c, n) {
						(this.b = u),
							(this.c = a),
							(this.d = h),
							(this.f = c),
							(this.g = n),
							(this.a = void 0);
					}
					async call(u, a, h, c) {
						const n = this.c
							.getWorkspace()
							.folders[0].toResource(a.relativeWorkspacePath);
						if (await this.g.exists(n))
							throw new Error(
								`File ${a.relativeWorkspacePath} already exists: cannot create new file.`,
							);
						try {
							await this.b.write(n, "");
						} catch (g) {
							throw g;
						}
						this.a = a.relativeWorkspacePath;
					}
					async finish(u, a, h, c) {
						if (!this.a)
							throw new Error("No recent path found. Cannot create new file.");
						const n = await this.f.getMagicURIForText(this.a);
						if (!n)
							throw new Error(
								`Could not find created file ${this.a} in the editor.`,
							);
						const g = await this.d.createModelReference(n),
							p = g.object.textEditorModel.getValue();
						return new t.$gz({
							relativeWorkspacePath: this.a,
							fileTotalLines: p.split(g.object.textEditorModel.getEOL()).length,
						});
					}
				};
				(e.$K8b = m),
					(e.$K8b = m =
						Ne(
							[
								j(0, i.$kZ),
								j(1, w.$Vi),
								j(2, E.$MO),
								j(3, C.$q8b),
								j(4, d.$ll),
							],
							m,
						));
			},
		),
		define(
			de[3971],
			he([1, 0, 124, 59, 69, 42, 118, 241, 85]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$N8b = void 0);
				let r = class {
					constructor(a, h, c, n, g) {
						(this.b = a),
							(this.c = h),
							(this.d = c),
							(this.e = n),
							(this.f = g),
							(this.a = new i.$Jc(10));
					}
					async call(a, h, c, n) {
						if (!h)
							throw new Error(
								"No read chunk parameters provided. Need to give at least the path.",
							);
						const p = await this.b.getMagicURIForText(h.relativeWorkspacePath);
						if (!p)
							throw new Error(
								`Could not find file ${h.relativeWorkspacePath} in the workspace.`,
							);
						let o;
						try {
							o = await this.c.createModelReference(p);
							const f = o.object.textEditorModel.getValue(),
								b = h.numLines ?? 3e3;
							let s = h.startLineNumber ?? 1;
							if (s == 0) throw new Error("Start line number cannot be 0.");
							const l = f.split(o.object.textEditorModel.getEOL());
							s < 0 && (s = l.length + 1 + s);
							const y = Math.max(0, s - 1),
								$ = Math.min(l.length, s - 1 + b),
								v = l.slice(y, $),
								S = new t.$dz({
									relativeWorkspacePath: h.relativeWorkspacePath,
									startLineNumber: y + 1,
									lines: v,
									totalNumLines: l.length,
									cropped: b === 3e3 && l.length > 3e3,
								});
							this.a.set(a.toolformerId, S);
						} finally {
							o?.dispose();
						}
					}
					async finish(a, h, c, n) {
						const g = this.a.get(a.toolformerId);
						if (!g) throw new Error("No read result found.");
						return g;
					}
				};
				(e.$N8b = r),
					(e.$N8b = r =
						Ne(
							[
								j(0, d.$q8b),
								j(1, E.$MO),
								j(2, C.$Nfc),
								j(3, w.$k3),
								j(4, m.$kZ),
							],
							r,
						));
			},
		),
		define(
			de[3972],
			he([1, 0, 124, 59, 69, 42, 770, 90, 118, 241, 85]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$S8b = void 0);
				let a = class {
					constructor(c, n, g, p, o, f) {
						(this.b = c),
							(this.c = n),
							(this.d = g),
							(this.e = p),
							(this.f = o),
							(this.g = f),
							(this.a = new i.$Jc(10));
					}
					async call(c, n, g, p) {
						if (!n)
							throw new Error(
								"No read chunk parameters provided. Need to give at least the path.",
							);
						const f = await this.b.getMagicURIForText(n.relativeWorkspacePath);
						if (!f)
							throw new Error(
								`Could not find file ${n.relativeWorkspacePath} in the workspace.`,
							);
						let b;
						try {
							b = await this.c.createModelReference(f);
							const s = b.object.textEditorModel.getValue(),
								l = this.g.read({
									resource: b.object.textEditorModel.uri,
									severities: d.MarkerSeverity.Error,
								}),
								y = new t.$Yy({ contents: s, diagnostics: l.map(C.$P7b) });
							this.a.set(c.toolformerId, y);
						} finally {
							b?.dispose();
						}
					}
					async finish(c, n, g) {
						const p = this.a.get(c.toolformerId);
						if (!p) throw new Error("No read result found.");
						return p;
					}
				};
				(e.$S8b = a),
					(e.$S8b = a =
						Ne(
							[
								j(0, r.$q8b),
								j(1, E.$MO),
								j(2, m.$Nfc),
								j(3, w.$k3),
								j(4, u.$kZ),
								j(5, d.$aM),
							],
							a,
						));
			},
		),
		define(
			de[3973],
			he([1, 0, 85, 25, 42, 241, 22, 124, 90]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O8b = void 0);
				let r = class {
					constructor(a, h, c, n, g, p) {
						(this.a = a),
							(this.b = h),
							(this.c = c),
							(this.d = n),
							(this.e = g),
							(this.f = p);
					}
					async call(a, h, c, n) {}
					async finish(a, h, c, n) {
						if (!h)
							throw new Error(
								"No save parameters provided. Need to give at least the relative workspace path.",
							);
						if (h.relativeWorkspacePath === void 0)
							throw new Error("Need to give the path of the file to save.");
						const g = await this.d.getMagicURIForText(h.relativeWorkspacePath);
						if (!g)
							throw new Error(
								`Could not find file ${h.relativeWorkspacePath} in the workspace.`,
							);
						return await this.a.save(g), new d.$Jz({});
					}
				};
				(e.$O8b = r),
					(e.$O8b = r =
						Ne(
							[
								j(0, t.$kZ),
								j(1, i.$Vi),
								j(2, w.$MO),
								j(3, E.$q8b),
								j(4, C.$ll),
								j(5, m.$aM),
							],
							r,
						));
			},
		),
		define(
			de[3974],
			he([1, 0, 124, 33, 59, 5, 25, 118, 361, 186]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$P8b = void 0);
				let u = class {
					constructor(h, c, n, g) {
						(this.e = h),
							(this.f = c),
							(this.g = n),
							(this.h = g),
							(this.d = new w.$Jc(10)),
							(this.c = this.h.createInstance(m.$M8));
					}
					async call(h, c, n, g) {
						if (!c || !c.query) throw new Error("Invalid search parameters");
						if (c.filenameSearch) {
							let R = await this.callFilenameSearch(c, n);
							this.d.set(h.toolformerId, R);
							return;
						}
						const y = this.g.getWorkspace().folders.map((R) => R.uri),
							$ = {
								maxResults: 1e3,
								previewOptions: { matchLines: 5, charsPerLine: 1e3 },
								surroundingContext: 5,
								expandPatterns: !0,
								includePattern: c.includePattern,
								excludePattern: [{ pattern: c.excludePattern }],
							},
							v = { pattern: c.query, isRegExp: !!c.regex },
							S = this.c.text(v, y, $),
							I = new i.$Ce();
						n.signal.addEventListener("abort", () => {
							I.cancel();
						}),
							setTimeout(() => {
								I.cancel();
							}, 5e3);
						const T = await this.f.textSearch(S, I.token);
						let P = new Map();
						T.results.slice(0, 1e3).forEach((R) => {
							if (!R.results) return;
							const O = R instanceof r.$t7;
							let B = 0;
							const U = new Map();
							R.results.forEach((H) => {
								let q, V;
								(0, r.$q7)(H)
									? ((B += H.rangeLocations.length),
										(q = H.rangeLocations[0].source.startLineNumber + 1),
										(V = H.previewText.slice(0, 1e3).replace(/\n$/, "")))
									: ((q = H.lineNumber), O && q++, (V = H.text.slice(0, 1e3))),
									U.set(q, new t.$az({ lineNumber: q, text: V }));
							});
							const z = Array.from(U.values()).sort(
									(H, q) => H.lineNumber - q.lineNumber,
								),
								F = this.g.asRelativePath(R.resource),
								x = new t.$_y({
									relativeWorkspacePath: F,
									numMatches: B,
									potentiallyRelevantLines: z,
									cropped: !1,
								});
							P.set(F, x);
						});
						let k = Array.from(P.values());
						const L = k.reduce((R, O) => R + O.numMatches, 0),
							D = k.length;
						let M = 0,
							N = 0;
						for (const R of k) {
							let O = 0;
							for (const B of R.potentiallyRelevantLines)
								if ((M++, O++, M >= 1e3)) break;
							if (
								(M >= 1e3 &&
									((R.potentiallyRelevantLines =
										R.potentiallyRelevantLines.slice(0, O)),
									(R.cropped = !0)),
								N++,
								N >= 1e3)
							)
								break;
						}
						N >= 1e3 && (k = k.slice(0, N));
						let A = new t.$bz({
							fileResults: k,
							numTotalMatches: L,
							numTotalMatchedFiles: D,
							numTotalMayBeIncomplete: T.limitHit ?? !1,
							filesOnly: !1,
						});
						this.d.set(h.toolformerId, A);
					}
					async callFilenameSearch(h, c) {
						const n = this.g.getWorkspace().folders.map((l) => l.uri),
							g = 1e3,
							p = 5e3,
							o = {
								includePattern: h.includePattern,
								excludePattern: [{ pattern: h.excludePattern }],
								filePattern: h.query,
								expandPatterns: !0,
								sortByScore: !0,
								maxResults: g,
							},
							f = this.c.file(n, o),
							b = new i.$Ce();
						c.signal.addEventListener("abort", () => {
							b.cancel();
						}),
							setTimeout(() => {
								b.cancel();
							}, p);
						const s = await this.f.fileSearch(f, b.token);
						return new t.$bz({
							fileResults: s.results.map(
								(l) =>
									new t.$_y({
										relativeWorkspacePath: this.g.asRelativePath(l.resource),
									}),
							),
							numTotalMatches: s.results.length,
							numTotalMatchedFiles: s.results.length,
							numTotalMayBeIncomplete: s.limitHit ?? !1,
							filesOnly: !0,
						});
					}
					async finish(h, c, n) {
						const g = this.d.get(h.toolformerId);
						if (!g) throw new Error("No search result found.");
						return g;
					}
				};
				(e.$P8b = u),
					(e.$P8b = u =
						Ne([j(0, d.$Nfc), j(1, r.$p7), j(2, C.$Vi), j(3, E.$Li)], u));
			},
		),
		define(
			de[1054],
			he([
				1, 0, 340, 148, 6, 124, 3, 59, 20, 5, 40, 45, 32, 118, 3960, 3961, 3962,
				3965, 3230, 3966, 3967, 3968, 3969, 3970, 3665, 3971, 3973, 3974, 3701,
				3231, 1011, 401, 3972, 341, 126, 191, 47,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$V8b = e.$U8b = e.$T8b = void 0),
					(e.$T8b = (0, r.$Mi)("toolformerService"));
				class B extends Error {
					constructor(F) {
						super(F), (this.name = "ImplementationError");
					}
				}
				e.$U8b = B;
				let U = class extends C.$1c {
					constructor(F, x, H, q, V, G) {
						super(),
							(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.j = q),
							(this.m = V),
							(this.n = G),
							(this.taskIdToRemoteTaskId = new d.$Jc(100)),
							(this.sessionData = new d.$Jc(100)),
							(this.a = 0),
							(this.b = this.D(new w.$re())),
							(this.onDidSessionDataChange = this.b.event),
							(this.q = new d.$Jc(1e3)),
							this.n.registerHandler(
								E.BuiltinTool.SEARCH,
								"searchParams",
								"searchResult",
								T.$P8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.READ_CHUNK,
								"readChunkParams",
								"readChunkResult",
								S.$N8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.GOTODEF,
								"gotodefParams",
								"gotodefResult",
								l.$I8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.EDIT,
								"editParams",
								"editResult",
								o.$E8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.UNDO_EDIT,
								"undoEditParams",
								"undoEditResult",
								k.$R8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.NEW_EDIT,
								"newEditParams",
								"newEditResult",
								y.$J8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.GET_PROJECT_STRUCTURE,
								"getProjectStructureParams",
								"getProjectStructureResult",
								v.$M8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.NEW_FILE,
								"newFileParams",
								"newFileResult",
								$.$K8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.CREATE_RM_FILES,
								"createRmFilesParams",
								"createRmFilesResult",
								g.$w8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.END,
								"endParams",
								"endResult",
								f.$F8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.ADD_TEST,
								"addTestParams",
								"addTestResult",
								n.$v8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.DELETE_TEST,
								"deleteTestParams",
								"deleteTestResult",
								p.$x8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.GET_TESTS,
								"getTestsParams",
								"getTestsResult",
								s.$H8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.SAVE_FILE,
								"saveFileParams",
								"saveFileResult",
								I.$O8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.GET_SYMBOLS,
								"getSymbolsParams",
								"getSymbolsResult",
								b.$G8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.SEMANTIC_SEARCH,
								"semanticSearchParams",
								"semanticSearchResult",
								P.$Q8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.READ_WITH_LINTER,
								"readWithLinterParams",
								"readWithLinterResult",
								M.$S8b,
							);
					}
					async *streamChatToolformer(F, x, H) {
						const [q, V] = this.f.registerNewGeneration({ metadata: x }),
							G = await this.f.getCurrentFileInfo(),
							K = F.filter(
								(ie) => ie.type === A.ConversationMessage_MessageType.HUMAN,
							);
						this.h.publicLogCapture("Submitted toolformer");
						const J =
							H?.overrideModelDetails ||
							this.f.getModelDetails({ specificModelField: "regular-chat" });
						this.h.publicLogCapture("submitted.toolformer", {
							model: J.modelName,
						});
						const W = 5 * 60 * 1e3;
						(J.modelName?.includes("cursor-small") ||
							J.modelName?.includes("gpt-3.5")) &&
							(this.a === null || Date.now() - this.a >= W) &&
							(this.m.warn(
								"You are using an AI model which is not optimized for tool usage. Please consider using claude-3.5-sonnet or gpt-4o for a better experience.",
							),
							(this.a = Date.now()));
						const Y = (await this.f.aiClient()).streamChatToolformer(
							{ currentFile: G, conversation: F, modelDetails: J },
							{ signal: V.signal, headers: (0, R.$m6b)((0, O.$9g)()) },
						);
						try {
							let ie;
							for await (const ee of Y) {
								if (ee.toolformerSessionId) {
									ie = ee.toolformerSessionId;
									break;
								}
								console.warn("First message was not the toolformer ID!!!");
							}
							if (!ie) throw new Error("Toolformer ID was not set!");
							let ne = this.sessionData.get(ie);
							ne || ((ne = new L.$t8b(ie)), this.sessionData.set(ie, ne)),
								yield* this.handleStream(ne, Y, V);
						} catch (ie) {
							if (!(ie instanceof t.ConnectError)) throw ie;
							if (ie.code !== t.Code.Canceled) {
								const ne =
									N.$q0.typeName +
									"/" +
									N.$q0.methods.streamChatToolformer.name;
								this.j.handleError(ie, J, q, ne, "chat", H?.rerun);
							}
						} finally {
							this.g.setNonPersistentStorage("inprogressAIGenerations", (ie) =>
								ie.filter((ne) => ne.generationUUID !== q),
							);
						}
					}
					async detachFromTaskExecution({ taskUuid: F }) {
						const x = this.q.get(F);
						x && ((x.isRunning = !1), x.abortController.abort());
					}
					async getSessionData({ taskUuid: F }) {
						const x = this.sessionData.get(F);
						return x !== void 0
							? x
							: await new Promise((H, q) => {
									const V = this.onDidSessionDataChange((G) => {
										if (G === F) {
											const K = this.sessionData.get(F);
											K !== void 0 && (V.dispose(), H(K));
										}
									});
									setTimeout(() => {
										V.dispose(), q();
									}, 5e3);
								});
					}
					async attachToTaskExecution({
						taskUuid: F,
						executedActionCallback: x,
						lastExecutedActionSequenceNumber: H,
					}) {
						if (this.q.has(F) && this.q.get(F).isRunning) {
							console.error("Task is already in progress!", F);
							return;
						}
						const q = new AbortController(),
							V = {
								taskUuid: F,
								abortController: q,
								isRunning: !0,
								lastExecutedActionSequenceNumber: H,
							};
						this.q.set(F, V);
						try {
							let J = this.sessionData.get(F);
							J || ((J = new L.$t8b(F)), this.sessionData.set(F, J)),
								await this.handleTaskStream(
									J,
									q,
									x,
									V.lastExecutedActionSequenceNumber,
								);
						} catch (J) {
							console.error(
								"(ignoring, rechecking state) Error in task stream",
								J,
							);
						}
						if (!V.isRunning) return;
						V.isRunning = !1;
						const G = setTimeout(() => {
								q.abort();
							}, 1e4),
							K = await this.f.aiClient();
						try {
							const J = await K.taskInfo(
								{ taskUuid: F },
								{ signal: q.signal, headers: (0, R.$m6b)((0, O.$9g)()) },
							);
							if (
								(clearTimeout(G),
								J.taskStatus !== i.TaskStatus.DONE &&
									J.taskStatus !== i.TaskStatus.PAUSED)
							) {
								this.attachToTaskExecution({
									taskUuid: F,
									executedActionCallback: x,
									lastExecutedActionSequenceNumber:
										V.lastExecutedActionSequenceNumber,
								});
								return;
							}
						} catch (J) {
							clearTimeout(G),
								console.error(
									"(detaching from task, not retrying) error getting task info: ",
									J,
								);
						}
					}
					async handleTaskStream(F, x, H, q) {
						const G = (await this.f.aiClient()).taskStreamLog(
							{
								taskUuid: F.toolformerId,
								startSequenceNumber: q ? q + 1 : void 0,
							},
							{ signal: x.signal, headers: (0, R.$m6b)((0, O.$9g)()) },
						);
						for await (const K of G)
							switch (K.response.case) {
								case "initialTaskInfo":
								case "infoUpdate": {
									const J = K.response.value;
									if (J.taskStatus === i.TaskStatus.DONE) {
										const W = this.q.get(F.toolformerId);
										W
											? (W.isRunning = !1)
											: console.error(
													"Task was not in progress! We may have reached the boundary of our LRU Cache. just make it bigger!",
													F.toolformerId,
												),
											x.abort();
										return;
									}
									if (J.taskStatus === i.TaskStatus.PAUSED) {
										const W = this.q.get(F.toolformerId);
										W
											? (W.isRunning = !1)
											: console.error(
													"Task was not in progress! We may have reached the boundary of our LRU Cache. just make it bigger!",
													F.toolformerId,
												),
											x.abort();
										return;
									}
									break;
								}
								case "streamedLogItem": {
									const J = K.response.value;
									if (J.logItem.case === "toolAction") {
										const W = J.logItem.value;
										if (W.toolCall) {
											let X;
											try {
												(X = await this.s(F, W.toolCall, x)),
													!X &&
														!J.isNotDone &&
														(X = await this.t(F, W.toolCall, x));
											} catch (Y) {
												X = new E.$Wy({
													toolResult: {
														case: "errorToolResult",
														value: new E.$qz({ errorMessage: Y.message }),
													},
												});
											}
											if (X !== void 0)
												try {
													H(J.sequenceNumber);
													const Y = this.q.get(F.toolformerId);
													Y
														? (Y.lastExecutedActionSequenceNumber =
																J.sequenceNumber)
														: console.error(
																"Task was not in progress! We may have reached the boundary of our LRU Cache. just make it bigger!",
																F.toolformerId,
															),
														(await this.f.aiClient()).taskProvideResult(
															{
																toolResult: X,
																taskUuid: F.toolformerId,
																actionSequenceNumber: J.sequenceNumber,
															},
															{ signal: x.signal },
														);
												} catch (Y) {
													throw (
														(console.error("Error providing result to task", Y),
														Y)
													);
												}
										}
									}
									break;
								}
							}
					}
					async *handleStream(F, x, H) {
						for await (const q of x)
							if ((yield q, q.responseType.case === "toolAction")) {
								const V = q.responseType.value.toolCall;
								if (!V)
									throw new Error(
										"Tool call is empty in toolformer... shouldnt happen!",
									);
								let G = await this.s(F, V, H);
								if (!G && q.responseType.value.moreToCome) continue;
								if (
									(!G &&
										!q.responseType.value.moreToCome &&
										(G = await this.t(F, V, H)),
									G &&
										G.toolResult.case === "builtinToolResult" &&
										G.toolResult.value.tool === E.BuiltinTool.END)
								)
									break;
								const K = (
									await this.f.aiClient()
								).streamChatToolformerContinue(
									{ toolResult: G, toolformerSessionId: F.toolformerId },
									{ signal: H.signal },
								);
								yield* this.handleStream(F, K, H);
								break;
							}
					}
					async s(F, x, H) {
						try {
							await this.callTool(F, x, H);
							return;
						} catch (q) {
							if (q instanceof B) throw q;
							return (
								console.log(q),
								new E.$Wy({
									toolResult: {
										case: "errorToolResult",
										value: new E.$qz({ errorMessage: q.message }),
									},
								})
							);
						}
					}
					async t(F, x, H) {
						try {
							return await this.finishTool(F, x, H);
						} catch (q) {
							if (q instanceof B) throw q;
							return (
								console.log("error in executing agent action"),
								console.log(q),
								new E.$Wy({
									toolResult: {
										case: "errorToolResult",
										value: new E.$qz({ errorMessage: q.message }),
									},
								})
							);
						}
					}
					async callTool(F, x, H) {
						switch (x.toolCall.case) {
							case "builtinToolCall": {
								await this.callBuiltinTool(F, x.toolCall.value, H);
								break;
							}
							case "customToolCall": {
								await this.callCustomTool(F, x.toolCall.value, H);
								break;
							}
							default:
								throw new B("unknown tool called... shouldnt happen!");
						}
					}
					async finishTool(F, x, H) {
						switch (x.toolCall.case) {
							case "builtinToolCall": {
								const q = await this.finishBuiltinTool(F, x.toolCall.value, H);
								return new E.$Wy({
									toolResult: { case: "builtinToolResult", value: q },
								});
							}
							case "customToolCall": {
								const q = await this.finishCustomTool(F, x.toolCall.value, H);
								return new E.$Wy({
									toolResult: { case: "customToolResult", value: q },
								});
							}
							default:
								throw new B("unknown tool called... shouldnt happen!");
						}
					}
					async callBuiltinTool(F, x, H) {
						const q = async (G, K) => {
								if (x.params.case !== G && x.params.case)
									throw new B("wrong params provided... shouldnt happen!");
								await K.call(F, x.params.value, H, x.toolCallId);
							},
							V = this.n.toolHandlers.get(x.tool);
						if (!V)
							throw new B(
								"callBuiltinTool: unknown builtin tool called... shouldnt happen!",
							);
						await q(V.paramName, V.handler);
					}
					async finishBuiltinTool(F, x, H) {
						let q = new E.$Py({ tool: x.tool });
						const V = async (K, J) => {
								if (x.params.case !== K && x.params.case)
									throw new B("wrong params provided... shouldnt happen!");
								return await J.finish(F, x.params.value, H, x.toolCallId);
							},
							G = this.n.toolHandlers.get(x.tool);
						if (!G)
							throw new B(
								"finishBuiltinTool: unknown builtin tool called... shouldnt happen!",
							);
						return (
							(q.result = {
								case: G.returnName,
								value: await V(G.paramName, G.handler),
							}),
							q
						);
					}
					async callCustomTool(F, x, H) {
						throw new B("custom tool calls not implemented yet!");
					}
					async finishCustomTool(F, x, H) {
						throw new B("custom tool calls not implemented yet!");
					}
				};
				(e.$V8b = U),
					(e.$V8b = U =
						Ne(
							[
								j(0, c.$Nfc),
								j(1, a.$0zb),
								j(2, h.$km),
								j(3, D.$W6b),
								j(4, u.$4N),
								j(5, L.$s8b),
							],
							U,
						)),
					(0, m.$lK)(e.$T8b, U, m.InstantiationType.Delayed);
			},
		),
		define(
			de[3975],
			he([1, 0, 124, 22, 25, 398, 241, 287, 76]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$yc = void 0);
				let r = class extends E.$Xyc {
					constructor(a, h, c, n) {
						super(), (this.a = a), (this.b = h), (this.c = c), (this.d = n);
					}
					async call(a, h, c) {
						if (!a)
							throw new Error(
								"No create file parameters provided. Need to give at least the path and content.",
							);
						if (!a.relativeWorkspacePath)
							throw new Error(
								"relativeWorkspacePath is required to create a file.",
							);
						const n = this.c.resolveRelativePath(a.relativeWorkspacePath);
						return (await this.b.exists(n))
							? new t.$Gy({ fileAlreadyExists: !0 })
							: (await this.b.createFile(n, m.$Te.fromString(" "), {
									overwrite: !1,
								}),
								new t.$Gy({ fileCreatedSuccessfully: !0 }));
					}
				};
				(e.$$yc = r),
					(e.$$yc = r =
						Ne([j(0, C.$q8b), j(1, i.$ll), j(2, w.$Vi), j(3, d.$H7b)], r));
			},
		),
		define(
			de[3976],
			he([1, 0, 124, 22, 398, 241, 167, 209, 271, 45, 426, 225, 193, 42, 219]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_yc = void 0);
				let g = class extends w.$Xyc {
					constructor(o, f, b, s, l, y, $, v) {
						super(),
							(this.a = o),
							(this.b = f),
							(this.c = b),
							(this.d = s),
							(this.e = l),
							(this.f = y),
							(this.g = $),
							(this.h = v);
					}
					async setup(o, f, b, s) {
						const l = this.c.getComposerData(s),
							y = l
								? this.c.getComposerCapability(
										s,
										C.ComposerCapabilityRequest_ComposerCapabilityType
											.TOOL_FORMER,
									)
								: void 0;
						if (!y)
							throw new Error("[composer] ToolFormer: capability not found");
						const $ = y.getBubbleIdByToolCallId(b);
						if (!$) throw new Error("[composer] ToolFormer: bubble not found");
						const v = this.c.getLastBubbleWhere(s, (I) => !!I.checkpoint),
							S = v?.checkpoint;
						if (o?.relativeWorkspacePath) {
							const I = await this.a.getMagicURIForText(
								o.relativeWorkspacePath,
							);
							if (
								I &&
								!S?.files.some((P) => P.uri.toString() === I.toString()) &&
								v
							) {
								if (!l?.originalModelLines[I.toString()]) {
									const M = (await this.f.getContentsOfFile(s, I)) ?? [" "];
									this.c.updateComposerDataSetStore(s, (N) =>
										N("originalModelLines", I.toString(), M),
									);
								}
								const k = (
										await this.g.createModelReference(I)
									).object.textEditorModel.getLinesContent(),
									L = await this.f.computeLineDiffs(s, I, k),
									D = [
										"conversation",
										(M) => M.bubbleId === v.bubbleId,
										"checkpoint",
									];
								S === void 0 &&
									this.c.updateComposerDataSetStore(s, (M) =>
										M(...D, (0, a.createEmptyCheckpoint)()),
									),
									this.c.updateComposerDataSetStore(s, (M) =>
										M(
											...D,
											(0, h.produce)((N) => {
												N &&
													N.files.push({
														uri: I,
														originalModelDiffWrtV0: L,
														isNewlyCreated: !1,
													});
											}),
										),
									);
							}
						}
						!y.shouldUseYoloMode() ||
						this.e.applicationUserPersistentStorage.composerState
							.yoloDeleteFileDisabled
							? await new Promise((I, T) => {
									y.addPendingDecision(
										$,
										t.ClientSideToolV2.DELETE_FILE,
										b,
										(P) => {
											P ? I() : T(new w.$Vyc("User rejected the tool call"));
										},
										!0,
									);
								})
							: y.setBubbleData($, { userDecision: "accepted" });
					}
					async call(o, f, b) {
						if (!o)
							throw new Error(
								"No delete file parameters provided. Need to give at least the path.",
							);
						if (!o.relativeWorkspacePath)
							throw new Error(
								"relativeWorkspacePath is required to delete a file.",
							);
						const s = await this.a.getMagicURIForText(o.relativeWorkspacePath),
							l = s ? this.d.shouldIgnoreUri(s) : !1;
						if (!s || l)
							throw new Error(
								`Could not find file ${o.relativeWorkspacePath} in the workspace.`,
							);
						return (await this.b.exists(s))
							? (await this.h.deleteFile(s),
								new t.$Iy({ fileDeletedSuccessfully: !0 }))
							: new t.$Iy({ fileNonExistent: !0 });
					}
				};
				(e.$_yc = g),
					(e.$_yc = g =
						Ne(
							[
								j(0, E.$q8b),
								j(1, i.$ll),
								j(2, d.IComposerDataService),
								j(3, m.$Q9b),
								j(4, r.$0zb),
								j(5, u.IComposerUtilsService),
								j(6, c.$MO),
								j(7, n.IComposerService),
							],
							g,
						));
			},
		),
		define(
			de[3977],
			he([
				1, 0, 167, 124, 59, 25, 219, 209, 426, 61, 45, 3, 821, 90, 1283, 770,
				271, 85, 559, 10, 58, 42,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8yc = void 0);
				let y = class {
					constructor(v, S, I, T, P, k, L, D, M, N, A, R) {
						(this.b = v),
							(this.c = S),
							(this.d = I),
							(this.e = T),
							(this.f = P),
							(this.g = k),
							(this.h = L),
							(this.i = D),
							(this.j = M),
							(this.k = N),
							(this.l = A),
							(this.m = R),
							(this.a = new w.$Jc(100));
					}
					async setup(v, S, I, T) {}
					async firstStreamCall(v, S, I, T) {}
					async streamedCall(v, S, I, T, P) {
						const { capability: k, aiBubbleId: L } = this.n(T, I),
							D = this.o(v),
							M = this.d.resolveRelativePath(D.relativeWorkspacePath);
						if (!M || this.i.shouldIgnoreUri(M))
							throw new Error(
								`Could not find file ${D.relativeWorkspacePath} in the workspace.`,
							);
						const N = k.getBubbleData(L),
							A = await this.p(T, M, D.contents ?? "", D.language, k, L, N),
							R = this.b.getLastAiBubbleWhere(T, (O) => O.text !== "");
						k.setBubbleData(L, {
							additionalData: {
								version: A.version,
								previousBubbleText: R?.text,
							},
						});
					}
					async finishStream(v, S, I, T) {
						const { capability: P, aiBubbleId: k } = this.n(T, I),
							L = this.o(v);
						if (!this.b.getComposerBubble(T, k))
							throw new Error("[composer] ToolFormer: No ai bubble found");
						const M = this.d.resolveRelativePath(L.relativeWorkspacePath),
							N = P.getBubbleData(k),
							A = this.b.getComposerForceMode(T),
							R = await this.p(T, M, L.contents ?? "", L.language, P, k, N),
							O = this.b.getLastAiBubbleWhere(T, (U) => U.text !== "");
						P.setBubbleData(k, {
							additionalData: {
								version: R.version,
								instructions: L.instructions,
								previousBubbleText: O?.text,
							},
						});
						const B = this.h
							.read({ resource: M, severities: c.MarkerSeverity.Error })
							.map(g.$P7b);
						if (
							(P.setBubbleData(k, { additionalData: { startingLints: B } }),
							L.blocking)
						) {
							const U = new a.$Zc();
							try {
								let z;
								const F =
										this.f.guessLanguageIdByFilepathOrFirstLine(R.uri) || "",
									x = (0, n.$7yc)({
										uri: M,
										markerService: this.h,
										workspaceContext: this.d,
										composerId: T,
										bubbleId: k,
										composerDataService: this.b,
										capability: P,
									}),
									H = this.e.getShouldAutoSaveAgenticEdits(),
									V =
										(this.l.getValue(s.$JW) ?? !0)
											? x.shouldProcessDiagnostics(F, H)
											: !1;
								V && ((z = x.startTracking()), U.add(z));
								let G,
									K = "";
								try {
									const ee = await this.m.createModelReference(M);
									U.add(ee),
										(G = ee.object.textEditorModel),
										(K = G.getValue());
								} catch {}
								if (
									(await this.c.runFastApplyOnCodeBlock(
										T,
										{
											uri: R.uri,
											version: R.version,
											content: L.contents ?? "",
											status: "generating",
										},
										{ shouldAutoApply: A !== "chat" },
									),
									(this.e.getShouldAutoSaveAgenticEdits() ||
										P.shouldUseYoloMode()) &&
										!(await this.c.saveFile(R.uri, {
											force: !0,
											waitForEditorToOpen: !0,
										})) &&
										this.k.isDialogOpen() &&
										(await new Promise((_) => {
											const te = this.k.onDidCloseDialog(() => {
												te.dispose(), _(void 0);
											});
										})),
									this.c.shouldShowAcceptRejectAll(T))
								) {
									const ee = P.addPendingDecision(
											k,
											i.ClientSideToolV2.EDIT_FILE,
											I,
											(te) => {
												te
													? this.c.accept(T, R.uri, R.version)
													: this.c.reject(T, R.uri, R.version);
											},
											!1,
										),
										_ = this.g.onChangeEffectManuallyDisposed({
											deps: [() => this.b.getInlineDiff(T, R.uri, R.version)],
											onChange: ({ deps: te }) => {
												te[0] || (ee(), _.dispose());
											},
										});
								}
								let J;
								if (G === void 0) {
									const ee = await this.m.createModelReference(M);
									U.add(ee),
										(G = ee.object.textEditorModel),
										(J = G.getValue());
								} else J = G.getValue();
								let W,
									X = Promise.resolve(!1);
								V && (X = x.waitForLinterSettling().then(() => !0));
								let Y,
									ie = !1;
								const ne = await this.e.computeDiff(
									K,
									J,
									L.relativeWorkspacePath,
								);
								return (
									(Y = i.$Rx.fromJsonString(JSON.stringify(ne))),
									V &&
										P.setBubbleData(k, {
											additionalData: { lintingStatus: "linting" },
										}),
									(await X) &&
										((W = x.getNewLinterErrors()),
										P.setBubbleData(k, {
											additionalData: { lintingStatus: "linted" },
										})),
									this.c.handleAiEditToolCallFinished(),
									new i.$Qx({
										isApplied: !0,
										diff: Y,
										applyFailed: ie,
										linterErrors: W,
									})
								);
							} finally {
								U.dispose();
							}
						} else
							return (
								this.c
									.runFastApplyOnCodeBlock(
										T,
										{
											uri: R.uri,
											version: R.version,
											content: L.contents ?? "",
											status: "generating",
										},
										{ shouldAutoApply: !0 },
									)
									.catch((U) => {
										console.error(
											"[composer] error in non-blocking runFastApplyOnCodeBlock",
											U,
										);
									}),
								new i.$Qx({ isApplied: !1 })
							);
					}
					async call(v, S, I, T) {
						return new i.$Qx({ isApplied: !1 });
					}
					n(v, S) {
						const T = this.b.getComposerData(v)
							? this.b.getComposerCapability(
									v,
									t.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								)
							: void 0;
						if (!T)
							throw new h.$3yc({
								clientVisibleErrorMessage: "Internal Error on Edit Tool",
								modelVisibleErrorMessage: "Internal server error on tool call",
								actualErrorMessage: "Capability not found",
							});
						const P = T.getBubbleIdByToolCallId(S);
						if (!P)
							throw new h.$3yc({
								clientVisibleErrorMessage: "Internal Error on Edit Tool",
								modelVisibleErrorMessage: "Internal server error on tool call",
								actualErrorMessage: `No ai bubble id found for tool call id ${S}`,
							});
						return { capability: T, aiBubbleId: P };
					}
					o(v) {
						if (!v)
							throw new h.$3yc({
								clientVisibleErrorMessage: "Tool args not properly passed in",
								modelVisibleErrorMessage: "Tool args not properly passed in",
								actualErrorMessage: "Tool args are undefined",
							});
						return v;
					}
					async p(v, S, I, T, P, k, L) {
						const D = this.b.getComposerForceMode(v);
						if (L?.additionalData?.version !== void 0) {
							this.b.updateComposerCodeBlock(v, S, L.additionalData.version, {
								content: I,
							});
							const N = this.b.getComposerCodeBlock(
								v,
								S,
								L.additionalData.version,
							);
							if (!N)
								throw new h.$3yc({
									clientVisibleErrorMessage: "Internal Error on Edit Tool",
									modelVisibleErrorMessage:
										"Internal server error on tool call",
									actualErrorMessage: "potential code block not found",
								});
							return N;
						}
						const { languageId: M } =
							this.f.createByLanguageNameOrFilepathOrFirstLine(
								T ?? null,
								S,
								void 0,
							);
						return this.c.registerNewCodeBlock(v, S, I, 0, {
							languageId: M,
							status: "generating",
							isNotApplied: D === "chat",
							bubbleId: k,
						});
					}
				};
				(e.$8yc = y),
					(e.$8yc = y =
						Ne(
							[
								j(0, d.IComposerDataService),
								j(1, C.IComposerService),
								j(2, E.$Vi),
								j(3, m.IComposerUtilsService),
								j(4, r.$nM),
								j(5, u.$0zb),
								j(6, c.$aM),
								j(7, p.$Q9b),
								j(8, o.$kZ),
								j(9, f.$hdc),
								j(10, b.$gj),
								j(11, l.$MO),
							],
							y,
						));
			},
		),
		define(
			de[3978],
			he([
				1, 0, 124, 25, 398, 219, 209, 167, 821, 45, 426, 9, 61, 42, 285, 1112,
				5, 191, 47, 118, 90, 1283, 3, 85, 559,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bzc = void 0);
				let S = class extends w.$Xyc {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U) {
						super(),
							(this.b = T),
							(this.c = P),
							(this.d = k),
							(this.e = L),
							(this.f = D),
							(this.g = M),
							(this.h = N),
							(this.i = A),
							(this.j = R),
							(this.k = O),
							(this.l = B),
							(this.m = U),
							(this.a = this.i.createInstance(n.$q6b, { service: g.$cbb }));
					}
					async call(T, P, k, L) {
						const { capability: D, aiBubbleId: M } = this.p(L, k);
						if (!T) throw new Error("No parallel apply parameters provided.");
						if (!T.fileRegions || T.fileRegions.length === 0)
							throw new Error("No edit files provided for parallel apply.");
						if (T.editPlan.length === 0)
							throw new Error("No edit plan provided for parallel apply.");
						const N = T.editPlan,
							A = new Map(),
							R = [];
						for (const U of T.fileRegions) {
							const z = U.relativeWorkspacePath,
								F = A.get(z) ?? 0;
							A.set(z, F + 1);
							const x = this.n({
								composerId: L,
								fileRegion: U,
								codeBlockIndex: F,
								aiBubbleId: M,
							});
							R.push(x);
						}
						const O = await Promise.all(
								R.map(({ codeBlock: U, fileRegion: z }) =>
									this.o({
										codeBlock: U,
										fileRegion: z,
										composerId: L,
										editPlan: N,
										capability: D,
										aiBubbleId: M,
										toolId: k,
										abortController: P,
									}),
								),
							),
							B = new Map();
						for (const { codeBlock: U } of O) {
							const z = U.uri.toString();
							B.has(z)
								? B.get(z).add(U.version)
								: B.set(z, new Set([U.version]));
						}
						if (
							((D.shouldUseYoloMode() ||
								this.f.getShouldAutoSaveAgenticEdits()) &&
								(await this.c.saveFiles(
									Array.from(B.keys()).map((U) => a.URI.parse(U)),
									{ force: !0, waitForEditorToOpen: !0 },
								)),
							this.c.shouldShowAcceptRejectAll(L))
						) {
							const U = D.addPendingDecision(
									M,
									t.ClientSideToolV2.PARALLEL_APPLY,
									k,
									(F) => {
										const x = Array.from(B.keys()).map((H) => a.URI.parse(H));
										if (F)
											for (const H of x) {
												const q = this.d.getInlineDiff(L, H);
												q?.composerMetadata &&
													B.get(H.toString())?.has(
														q.composerMetadata.version,
													) &&
													this.c.accept(L, H, q.composerMetadata.version);
											}
										else
											for (const H of x) {
												const q = this.d.getInlineDiff(L, H);
												q?.composerMetadata &&
													B.get(H.toString())?.has(
														q.composerMetadata.version,
													) &&
													this.c.reject(L, H, q.composerMetadata.version);
											}
									},
									!1,
								),
								z = this.e.onChangeEffectManuallyDisposed({
									deps: [() => this.d.getAllInlineDiffs(L)],
									onChange: ({ deps: F }) => {
										F[0]
											.filter((H) => B.has(H.uri.toString()))
											.some(
												(H) =>
													H.composerMetadata &&
													B.get(H.uri.toString())?.has(
														H.composerMetadata.version,
													),
											) || (U(), z.dispose());
									},
								});
						}
						return new t.$Pz({
							fileResults: O.map(({ editFileResult: U }) => U),
						});
					}
					n({
						composerId: T,
						fileRegion: P,
						codeBlockIndex: k,
						aiBubbleId: L,
					}) {
						if (!P.range) throw new Error("No range provided for file region.");
						const D = this.b.resolveRelativePath(P.relativeWorkspacePath),
							M = (0, f.$9g)();
						return { codeBlock: this.q(T, D, "", M, k, L), fileRegion: P };
					}
					async o({
						codeBlock: T,
						fileRegion: P,
						composerId: k,
						editPlan: L,
						capability: D,
						aiBubbleId: M,
						toolId: N,
						abortController: A,
					}) {
						if (!P.range) throw new Error("No range provided for file region.");
						const { startLineNumber: R, endLineNumberInclusive: O } = P.range;
						if (!T.codeBlockIdentifier)
							throw new Error("Code block identifier not set.");
						const B = new y.$Zc();
						try {
							let U,
								z = "",
								F = "";
							try {
								const re = await this.h.createModelReference(T.uri);
								B.add(re),
									(U = re.object.textEditorModel),
									(z = U.getValueInRange({
										startLineNumber: R,
										startColumn: 1,
										endLineNumber: O,
										endColumn: 1 / 0,
									})),
									(F = U.getValue());
							} catch {}
							const x = await this.a.get();
							let H = "";
							A.signal.addEventListener("abort", () => {
								G.abort();
							});
							const q = (0, f.$9g)(),
								[V, G] = this.j.registerNewGeneration({
									generationUUID: q,
									metadata: void 0,
								}),
								K = x.streamParallelApply(
									{
										codeBlock: {
											relativeWorkspacePath: P.relativeWorkspacePath,
											range: {
												startPosition: { line: R },
												endPosition: { line: O },
											},
											contents: z,
										},
										file: {
											relativeWorkspacePath: P.relativeWorkspacePath,
											contents: z,
										},
										editPlan: L,
									},
									{ signal: G.signal, headers: (0, o.$m6b)(q) },
								);
							for await (const re of K) H += re.text;
							const J = H.match(/```[^\n]*\n([\s\S]*)\n```/);
							let W = H;
							J && (W = J[1]),
								this.d.updateComposerCodeBlock(k, T.uri, T.version, {
									content: W,
								});
							const X = D.getBubbleData(M);
							D.setBubbleData(M, {
								additionalData: {
									codeBlockIdentifierToRawMessage: {
										...(X?.additionalData?.codeBlockIdentifierToRawMessage ||
											{}),
										[T.codeBlockIdentifier]: H,
									},
								},
							});
							let Y;
							const ie =
									this.g.guessLanguageIdByFilepathOrFirstLine(T.uri) || "",
								ne = (0, l.$7yc)({
									uri: T.uri,
									markerService: this.k,
									workspaceContext: this.b,
									composerId: k,
									bubbleId: M,
									composerDataService: this.d,
									capability: D,
								}),
								ee = ne.shouldProcessDiagnostics(
									ie,
									this.f.getShouldAutoSaveAgenticEdits(),
								);
							ee && ((Y = ne.startTracking()), B.add(Y)),
								await this.c.runFastApplyOnCodeBlock(
									k,
									{ ...T, status: "generating" },
									{ shouldAutoApply: !0, isReapply: !0 },
								);
							let _;
							if (U === void 0) {
								const re = await this.h.createModelReference(T.uri);
								B.add(re), (U = re.object.textEditorModel), (_ = U.getValue());
							} else _ = U.getValue();
							let te;
							ee &&
								(await ne.waitForLinterSettling(),
								(te = ne.getNewLinterErrors()));
							let Q,
								Z = !1;
							const se = await this.f.computeDiff(
								F,
								_,
								P.relativeWorkspacePath,
							);
							return (
								(Q = t.$Rx.fromJsonString(JSON.stringify(se))),
								this.c.handleAiEditToolCallFinished(),
								{
									editFileResult: new t.$Qx({
										isApplied: !0,
										diff: Q,
										applyFailed: Z,
										linterErrors: te,
									}),
									codeBlock: T,
								}
							);
						} finally {
							B.dispose();
						}
					}
					p(T, P) {
						const L = this.d.getComposerData(T)
							? this.d.getComposerCapability(
									T,
									d.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								)
							: void 0;
						if (!L)
							throw new m.$3yc({
								clientVisibleErrorMessage:
									"Internal Error on Parallel Apply Tool",
								modelVisibleErrorMessage: "Internal server error on tool call",
								actualErrorMessage: "Capability not found",
							});
						const D = L.getBubbleIdByToolCallId(P);
						if (!D)
							throw new m.$3yc({
								clientVisibleErrorMessage:
									"Internal Error on Parallel Apply Tool",
								modelVisibleErrorMessage: "Internal server error on tool call",
								actualErrorMessage: `No ai bubble id found for tool call id ${P}`,
							});
						return { capability: L, aiBubbleId: D };
					}
					q(T, P, k, L, D, M) {
						const N = this.d.getComposerForceMode(T),
							{ languageId: A } =
								this.g.createByLanguageNameOrFilepathOrFirstLine(
									null,
									P,
									void 0,
								);
						return this.c.registerNewCodeBlock(T, P, k, D, {
							languageId: A,
							status: "generating",
							isNotApplied: N === "chat",
							codeBlockIdentifier: L,
							bubbleId: M,
						});
					}
				};
				(e.$bzc = S),
					(e.$bzc = S =
						Ne(
							[
								j(0, i.$Vi),
								j(1, E.IComposerService),
								j(2, C.IComposerDataService),
								j(3, r.$0zb),
								j(4, u.IComposerUtilsService),
								j(5, h.$nM),
								j(6, c.$MO),
								j(7, p.$Li),
								j(8, b.$Nfc),
								j(9, s.$aM),
								j(10, $.$kZ),
								j(11, v.$hdc),
							],
							S,
						));
			},
		),
		define(
			de[3979],
			he([
				1, 0, 124, 25, 398, 219, 209, 167, 821, 45, 426, 61, 90, 1283, 3, 271,
				85, 559,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$azc = void 0);
				let f = class extends w.$Xyc {
					constructor(s, l, y, $, v, S, I, T, P, k) {
						super(),
							(this.a = s),
							(this.b = l),
							(this.c = y),
							(this.d = $),
							(this.e = v),
							(this.f = S),
							(this.g = I),
							(this.h = T),
							(this.i = P),
							(this.j = k);
					}
					async call(s, l, y, $) {
						const { capability: v, aiBubbleId: S } = this.k($, y);
						if (!s)
							throw new Error(
								"No reapply parameters provided. Need to give at least the path.",
							);
						if (!s.relativeWorkspacePath)
							throw new Error(
								"relativeWorkspacePath is required to reapply an edit.",
							);
						const I = this.a.resolveRelativePath(s.relativeWorkspacePath);
						if (!I || this.h.shouldIgnoreUri(I))
							throw new Error(
								`Could not find file ${s.relativeWorkspacePath} in the workspace.`,
							);
						const T = this.c.getLatestCodeBlockForUri($, I);
						if (!T)
							throw new Error(`No code block found for uri ${I.toString()}`);
						const P = new n.$Zc();
						try {
							let k;
							const L =
									this.f.guessLanguageIdByFilepathOrFirstLine(T.uri) || "",
								D = (0, c.$7yc)({
									uri: I,
									markerService: this.g,
									workspaceContext: this.a,
									composerId: $,
									bubbleId: S,
									composerDataService: this.c,
									capability: v,
								}),
								M = D.shouldProcessDiagnostics(
									L,
									this.e.getShouldAutoSaveAgenticEdits(),
								);
							if (
								(M && ((k = D.startTracking()), P.add(k)),
								await this.b.reapply($, I),
								(v.shouldUseYoloMode() ||
									this.e.getShouldAutoSaveAgenticEdits()) &&
									!(await this.b.saveFile(T.uri, {
										force: !0,
										waitForEditorToOpen: !0,
									})) &&
									this.j.isDialogOpen() &&
									(await new Promise((z) => {
										const F = this.j.onDidCloseDialog(() => {
											F.dispose(), z(void 0);
										});
									})),
								this.b.shouldShowAcceptRejectAll($))
							) {
								const U = v.addPendingDecision(
										S,
										t.ClientSideToolV2.REAPPLY,
										y,
										(F) => {
											F
												? this.b.accept($, I, T.version)
												: this.b.reject($, I, T.version);
										},
										!1,
									),
									z = this.d.onChangeEffectManuallyDisposed({
										deps: [() => T.status],
										onChange: () => {
											["accepted", "rejected"].includes(T.status) &&
												(U(), z.dispose());
										},
									});
							}
							const N = this.e.getCodeBlockOriginalModelLines(
									$,
									T.uri,
									T.version,
								),
								A = this.e.getCodeBlockNewModelLines($, T.uri, T.version);
							let R;
							M &&
								(await D.waitForLinterSettling(), (R = D.getNewLinterErrors()));
							let O,
								B = !1;
							if (A && N) {
								const U = await this.e.computeDiff(
									N.join(`
`),
									A.join(`
`),
									I.toString(),
								);
								O = t.$Rx.fromJsonString(JSON.stringify(U));
							} else B = !0;
							return new t.$Dx({
								isApplied: !0,
								diff: O,
								applyFailed: B,
								linterErrors: R,
							});
						} finally {
							P.dispose();
						}
					}
					k(s, l) {
						const $ = this.c.getComposerData(s)
							? this.c.getComposerCapability(
									s,
									d.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								)
							: void 0;
						if (!$)
							throw new m.$3yc({
								clientVisibleErrorMessage: "Internal Error on Edit Tool",
								modelVisibleErrorMessage: "Internal server error on tool call",
								actualErrorMessage: "Capability not found",
							});
						const v = $.getBubbleIdByToolCallId(l);
						if (!v)
							throw new m.$3yc({
								clientVisibleErrorMessage: "Internal Error on Edit Tool",
								modelVisibleErrorMessage: "Internal server error on tool call",
								actualErrorMessage: `No ai bubble id found for tool call id ${l}`,
							});
						return { capability: $, aiBubbleId: v };
					}
				};
				(e.$azc = f),
					(e.$azc = f =
						Ne(
							[
								j(0, i.$Vi),
								j(1, E.IComposerService),
								j(2, C.IComposerDataService),
								j(3, r.$0zb),
								j(4, u.IComposerUtilsService),
								j(5, a.$nM),
								j(6, h.$aM),
								j(7, g.$Q9b),
								j(8, p.$kZ),
								j(9, o.$hdc),
							],
							f,
						));
			},
		),
		define(
			de[3980],
			he([1, 0, 241, 124, 1011, 5, 20, 1887]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$dd = e.$0dd = void 0),
					(e.$0dd = (0, E.$Mi)("runTestHandlerService"));
				let m = class {
					constructor(u, a, h) {
						(this.a = u),
							(this.b = a),
							(this.c = h),
							this.b.registerInstantiatedHandler(
								i.BuiltinTool.RUN_TEST,
								"runTestParams",
								"runTestResult",
								this,
							);
					}
					async call(u, a, h, c) {}
					async finish(u, a, h, c) {
						if (!a)
							throw new Error(
								"No test parameters provided. Need to give at least the relative workspace path.",
							);
						if (a.relativeWorkspacePath === void 0)
							throw new Error(
								"Need to provide the relative workspace path to know where to run the test.",
							);
						const n = await this.a.getMagicURIForText(a.relativeWorkspacePath);
						if (!n)
							throw new Error(
								`Could not find file ${a.relativeWorkspacePath} in the workspace.`,
							);
						const g = await this.c.runTest({
							testFileURI: n,
							testName: a.testName,
							abortController: h,
						});
						return new i.$Cz({ result: g });
					}
				};
				(e.$$dd = m),
					(e.$$dd = m = Ne([j(0, t.$q8b), j(1, w.$s8b), j(2, d.$8dd)], m)),
					(0, C.$lK)(e.$0dd, m, C.InstantiationType.Eager);
			},
		),
		define(
			de[479],
			he([
				1, 0, 20, 104, 5, 45, 32, 118, 42, 567, 315, 3, 83, 25, 684, 400, 9, 47,
				65, 90, 620, 10, 471, 644, 341, 191, 232, 22, 1045, 287,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J7b = void 0),
					(e.$K7b = D),
					(e.$L7b = M),
					(e.$M7b = R),
					(e.$N7b = O),
					(e.$J7b = (0, w.$Mi)("cmdKService"));
				let L = class extends a.$1c {
					constructor(U, z, F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
						super(),
							(this.b = U),
							(this.c = z),
							(this.g = F),
							(this.h = x),
							(this.m = H),
							(this.n = q),
							(this.q = V),
							(this.r = G),
							(this.s = K),
							(this.t = J),
							(this.u = W),
							(this.w = X),
							(this.y = Y),
							(this.z = ie),
							(this.C = ne),
							(this.F = ee),
							(this.a = this.D(this.t.createScoped(this))),
							this.a.onChangeEffect({
								deps: [() => this.t.nonPersistentStorage.promptBars],
								onChange: ({ deps: _, prevDeps: te, prevReturnValue: Q }) => {
									const Z = _[0] ? Array.from(_[0].values()).flat() : [],
										se = te && te[0] ? Array.from(te[0].values()).flat() : [];
									se.length > 0 &&
										se
											.filter(
												(le) =>
													!Z.some(
														(oe) =>
															oe.contextSessionUuid === le.contextSessionUuid,
													),
											)
											.forEach((le) =>
												this.w.removeContextSession(le.contextSessionUuid),
											),
										Z.length > 0 &&
											Z.filter(
												(le) =>
													!se.some(
														(oe) =>
															oe.contextSessionUuid === le.contextSessionUuid,
													),
											).forEach((le) => {
												this.w.getReactiveReadonlyContextSession(
													le.contextSessionUuid,
												) === void 0 &&
													this.w.createContextSession({
														...(0, y.$D7b)(),
														explicitUuid: le.contextSessionUuid,
													});
											});
								},
							});
					}
					async rerankTerminalCmdK(U) {
						const z = await this.b.cmdKClient(),
							F = await this.b.getExplicitContext(),
							x = await (async () => new $.$DC({ explicitContext: F }))(),
							H = new $.$pC({
								contextItems: U,
								legacyContext: x,
								cmdKOptions: {
									modelDetails: this.b.getModelDetails({
										specificModelField: "terminal-cmd-k",
									}),
								},
							});
						return z.rerankTerminalCmdKContext(H, {
							headers: (0, S.$m6b)((0, o.$9g)()),
						});
					}
					async rerankCmdKWithCursorSmallCaching(U) {
						if (
							!this.t.applicationUserPersistentStorage.allowMultiCmdKGenerations
						) {
							console.warn(
								"WARN WARN WE TRIED TO CACHE ON RERANK WITHOUT MULTI GEN ENABLED",
							);
							return;
						}
						const z = await this.b.cmdKClient();
						this.F.maybeRefreshFeatureStatus("shouldUseReranking");
						const F = this.F.getCachedFeatureStatus("shouldUseReranking"),
							x = await this.b.getExplicitContext();
						x.context = x.context.trim() === "" ? "" : x.context;
						const H = await (async () => new $.$DC({ explicitContext: x }))(),
							q = this.b.getModelDetails({ specificModelField: "cmd-k" }),
							V = new $.$pC({
								contextItems: U,
								legacyContext: H,
								cmdKOptions: {
									modelDetails: new h.$Zs({ ...q, modelName: "cursor-small" }),
									useReranker: F,
								},
							});
						await void z.rerankCmdKContext(V, {
							headers: (0, S.$m6b)((0, o.$9g)()),
						});
					}
					async rerankCmdK(U) {
						const z = await this.b.cmdKClient();
						this.F.maybeRefreshFeatureStatus("shouldUseReranking");
						const F = this.F.getCachedFeatureStatus("shouldUseReranking"),
							x = await this.b.getExplicitContext();
						x.context = x.context.trim() === "" ? "" : x.context;
						const H = await (async () => new $.$DC({ explicitContext: x }))(),
							q = new $.$pC({
								contextItems: U,
								legacyContext: H,
								cmdKOptions: {
									modelDetails: this.b.getModelDetails({
										specificModelField: "cmd-k",
									}),
									useReranker: F,
								},
							});
						return z.rerankCmdKContext(q, {
							headers: (0, S.$m6b)((0, o.$9g)()),
						});
					}
					async getPreparedImagesData(U, z, F = 512) {
						const x = [];
						for (const H of U) {
							const q = await (0, P.$F7b)(H, () => z(H.uuid), this.C, F);
							x.push(q);
						}
						return x;
					}
					async getPreparedEditRequest({
						query: U,
						fastMode: z,
						lineRange: F,
						codeBlocks: x,
						docs: H,
						spoofedSelection: q,
						spoofedDiagnostics: V,
						spoofedCellId: G,
						originalRequest: K,
						modelUriForEdit: J,
						images: W,
						links: X,
					}) {
						const Y = U,
							ie = this.r.getActiveCodeEditor();
						if (!ie || !ie.hasModel())
							throw new Error("No model found, cannot edit.");
						J || (J = ie.getModel().uri);
						const ne = await this.y.createModelReference(J);
						try {
							const ee = ne.object.textEditorModel,
								_ = Math.min(
									Math.max(F.endLineNumberExclusive - 1, F.startLineNumber),
									ee.getLineCount(),
								),
								te = ee.getLineMaxColumn(_),
								Q = new i.$kL(F.startLineNumber, 1, _, te),
								Z = V ?? M(this.s, J, Q),
								se =
									await this.b.getCurrentFileInfoFromRawWithScrubbingAndNotebookHandling(
										J,
										ee.getValue(),
										Q,
										q,
										G,
									),
								re = new h.$4s({
									relativeWorkspacePath: this.g.asRelativePath(J),
									errors: Z,
									fileContents: se?.contents,
								}),
								[le, oe] = z
									? [[], []]
									: await Promise.all([
											this.m.getEmbeddingsFromCache(Y),
											this.m.getNonEmbeddingChunks(Y),
										]),
								ae =
									x === void 0
										? []
										: x.map((ye) => ({
												relativeWorkspacePath: this.g.asRelativePath(
													p.URI.revive(ye.uri),
												),
												range: {
													startPosition: {
														line: ye.range.selectionStartLineNumber,
														column: ye.range.selectionStartColumn,
													},
													endPosition: {
														line: ye.range.positionLineNumber,
														column: ye.range.positionColumn,
													},
												},
												contents: ye.rawText ?? ye.text,
												signatures: { ranges: [] },
												detailedLines: ye.rawText
													? ye.rawText
															.split(`
`)
															.map((ue, fe) => ({
																text: ue,
																lineNumber:
																	fe + ye.range.selectionStartLineNumber,
																isSignature: !1,
															}))
													: [],
											})),
								pe = await this.b.getExplicitContext();
							return (
								(pe.context = pe.context.trim() === "" ? "" : pe.context),
								{
									conversation: [],
									repositories: [],
									sessionId: "",
									fastMode: z,
									query: Y,
									currentFile: se,
									workspaceRootPath: this.n.getWorkspaceRootPath(),
									explicitContext: pe,
									linterErrors: re,
									promptCodeBlocks: ae,
									codeBlocks: [
										...le.map((ye) => (0, d.$Sfc)(ye)),
										...oe.map((ye) => (0, d.$Sfc)(ye)),
									],
									documentationIdentifiers:
										H === void 0 ? [] : H.map((ye) => ye.docId),
									originalRequest: K,
									images: W
										? await this.getPreparedImagesData(W, (ye) => {})
										: [],
									links: X ?? [],
								}
							);
						} finally {
							ne.dispose();
						}
					}
					async streamPreparedEdit(
						U,
						{ type: z, generationUUID: F, options: x },
					) {
						this.q.publicLogCapture(`Submitted ${z}`),
							this.q.publicLogCapture("Submitted Prompt");
						const H = await this.h.getCmdKDebugInfo(),
							q =
								x?.overrideModelDetails ||
								this.b.getModelDetails({ specificModelField: "cmd-k" });
						this.q.publicLogCapture(`submitted.${z}`, { model: q.modelName });
						const [V, G] = this.b.registerNewGeneration({
							metadata: void 0,
							generationUUID: F,
						});
						this.b.decrementBubbleTimesLeft();
						const K = { ...U, modelDetails: q, cmdKDebugInfo: H };
						this.b.addToPromptHistory({
							prompt: U.query,
							commandType: s.CommandType.EDIT,
						});
						const J = await this.b.aiClient(),
							X = (z === "edit" ? J.streamEdit : J.streamGenerate)(K, {
								signal: G.signal,
								headers: (0, S.$m6b)(F),
							});
						let Y = v.$q0.typeName + "/";
						z === "edit"
							? (Y += v.$q0.methods.streamEdit.name)
							: (Y += v.$q0.methods.streamGenerate.name);
						const ie = this.b.streamResponseText({
							streamer: (0, d.$Mfc)(X),
							streamerURL: Y,
							generationUUID: F,
							modelDetails: q,
							rethrowCancellation: !0,
							source: "cmd-k",
							rerun: x?.rerun,
						});
						return this.b.streamLines(ie);
					}
					getPromptBarCurrentRange(U, z) {
						if (U === void 0) return;
						const F = this.t.nonPersistentStorage.inlineDiffs.find(
							(H) => H.id === U.diffId,
						);
						if (F !== void 0) return F.currentRange;
						const x = z?.getDecorationRange(U.currentRangeDecorationId);
						if (x)
							return {
								startLineNumber: x.startLineNumber,
								endLineNumberExclusive: x.endLineNumber + 1,
							};
					}
				};
				(L = Ne(
					[
						j(0, d.$Nfc),
						j(1, u.$S6b),
						j(2, c.$Vi),
						j(3, n.$06b),
						j(4, g.$26b),
						j(5, r.$36b),
						j(6, C.$km),
						j(7, f.$dtb),
						j(8, b.$aM),
						j(9, E.$0zb),
						j(10, l.$gj),
						j(11, y.$B7b),
						j(12, m.$MO),
						j(13, I.$x6b),
						j(14, T.$ll),
						j(15, k.$H7b),
					],
					L,
				)),
					(0, t.$lK)(e.$J7b, L, t.InstantiationType.Delayed);
				function D(B) {
					const U = B.text,
						z = B.symbols;
					let F = "";
					for (let x of z) {
						const H =
								x.location.uri.path +
								":" +
								x.location.range.startLineNumber +
								":" +
								x.location.range.endLineNumber,
							q = x.location.uri.path.split(".").pop();
						(F +=
							"path: " +
							H +
							`
`),
							(F +=
								"```" +
								q +
								`
`),
							(F +=
								x.code +
								`
`),
							(F += "```\n\n");
					}
					return (F += U), F;
				}
				function M(B, U, z) {
					return B.read({ resource: U })
						.filter(
							(x) =>
								x.severity === b.MarkerSeverity.Error &&
								A(
									x.startLineNumber,
									x.endLineNumber,
									z.startLineNumber,
									z.endLineNumber,
								),
						)
						.map(
							(x) =>
								new h.$3s({
									message: x.message,
									range: new h.$Ns({
										startPosition: {
											line: x.startLineNumber,
											column: x.startColumn,
										},
										endPosition: { line: x.endLineNumber, column: x.endColumn },
									}),
								}),
						);
				}
				function N(B, U, z) {
					return B <= z && z <= U;
				}
				function A(B, U, z, F) {
					return N(B, U, z) || N(B, U, F) || N(z, F, B) || N(z, F, U);
				}
				function R(B) {
					return B.contents
						.replace(/\r$/, "")
						.split(`
`)
						.slice(
							B.selection?.startPosition?.line ?? 0,
							(B.selection?.endPosition?.line ?? 0) + 1,
						);
				}
				function O({
					req: B,
					options: U,
					previousStructuredTextsNewestFirst: z,
				}) {
					if (U?.structured === !0)
						try {
							if (z.length > 0) {
								const F = JSON.parse(z[0]);
								for (let x = 1; x < z.length; x++) {
									const H = JSON.parse(z[x]);
									F.root.children[0].children = [
										...H.root.children[0].children,
										{
											detail: 0,
											format: 0,
											mode: "normal",
											style: "",
											text: ", ",
											type: "text",
											version: 1,
										},
										...F.root.children[0].children,
									];
								}
								return JSON.stringify(F);
							}
						} catch (F) {
							console.warn(
								"Failed to parse structured text; defaulting to non-structured text",
								F,
							);
						}
					if (B.case === "originalRequest") {
						let F = B.req,
							x = F.query;
						for (; F.originalRequest !== void 0; )
							(F = F.originalRequest), (x = F.query + ", " + x);
						return x;
					} else {
						let F = B.queryHistory,
							x = F.query?.query ?? "";
						for (; F.queryHistory !== void 0; )
							(F = F.queryHistory), (x = (F.query?.query ?? "") + ", " + x);
						return x;
					}
				}
			},
		),
		define(
			de[383],
			he([
				1, 0, 9, 6, 5, 17, 3, 196, 20, 42, 47, 45, 587, 64, 779, 155, 48, 8, 71,
				606, 18, 56, 68, 32, 118, 581, 479, 471, 65, 19, 13, 332, 3235, 1190,
				67, 61, 10, 58, 285, 1114, 191, 85,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
			) {
				"use strict";
				var H;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$67b =
						e.$57b =
						e.$47b =
						e.$37b =
						e.$27b =
						e.whereIsTheRangeInRelationToTheCurrentRange =
						e.getDiffState =
						e.createPromptBarData =
						e.RangeWhereIs =
							void 0),
					(e.$77b = Y),
					(e.$87b = ie),
					Object.defineProperty(e, "RangeWhereIs", {
						enumerable: !0,
						get: function () {
							return N.RangeWhereIs;
						},
					}),
					Object.defineProperty(e, "createPromptBarData", {
						enumerable: !0,
						get: function () {
							return N.$W7b;
						},
					}),
					Object.defineProperty(e, "getDiffState", {
						enumerable: !0,
						get: function () {
							return N.$Y7b;
						},
					}),
					Object.defineProperty(
						e,
						"whereIsTheRangeInRelationToTheCurrentRange",
						{
							enumerable: !0,
							get: function () {
								return N.$X7b;
							},
						},
					),
					(e.$27b = (0, w.$Mi)("inlineDiffService"));
				function q() {
					let ne = "abcdefghijklmnopqrstuvwxyz",
						ee = "";
					for (let _ = 0; _ < 10; _++)
						ee += ne.charAt(Math.floor(Math.random() * ne.length));
					return ee;
				}
				let V = class extends C.$1c {
					static {
						H = this;
					}
					get diffInfos() {
						return Array.from(this.c.values()).map((ee) => ({
							uri: ee.inlineDiff.uri,
							diffId: ee.id,
							composerMetadata: ee.composerMetadata,
						}));
					}
					static {
						this.registeredActions = [];
					}
					static registerAction(ee) {
						this.registeredActions.push(ee);
					}
					recordCancelEvent(ee) {
						this.N.recordCmdKEvent(ee.model, {
							requestId: ee.requestId,
							promptBarId: ee.promptBarId,
							eventType: { case: "interruptGeneration", value: {} },
						});
					}
					recordAcceptEvent(ee) {
						this.N.recordCmdKEvent(ee.model, {
							requestId: ee.requestId,
							promptBarId: ee.promptBarId,
							eventType: { case: "acceptAll", value: {} },
						});
					}
					recordRejectEvent(ee) {
						this.N.recordCmdKEvent(ee.model, {
							requestId: ee.requestId,
							promptBarId: ee.promptBarId,
							eventType: { case: "rejectAll", value: {} },
						});
					}
					recordPartialAcceptEvent(ee) {
						this.N.recordCmdKEvent(ee.model, {
							requestId: ee.requestId,
							promptBarId: ee.promptBarId,
							eventType: {
								case: "acceptPartialDiff",
								value: {
									greenRange: ee.greenRange,
									redLines: ee.redLines,
									greenLines: ee.greenLines,
								},
							},
						});
					}
					recordPartialRejectEvent(ee) {
						this.N.recordCmdKEvent(ee.model, {
							promptBarId: ee.promptBarId,
							requestId: ee.requestId,
							eventType: {
								case: "rejectPartialDiff",
								value: {
									greenRange: ee.greenRange,
									redLines: ee.redLines,
									greenLines: ee.greenLines,
								},
							},
						});
					}
					async reportEditFate(
						ee,
						_,
						{
							numPartiallyAccepted: te,
							numPartiallyRejected: Q,
							numUnresolved: Z,
						},
					) {
						let se;
						if (_ === "accept")
							Q > 0
								? (se = {
										requestId: ee,
										fate: S.EditFate.PARTIALLY_ACCEPTED,
										numAcceptedPartialDiffs: te + Z,
										numRejectedPartialDiffs: Q,
									})
								: (se = { requestId: ee, fate: S.EditFate.ACCEPTED });
						else if (_ === "reject")
							te > 0
								? (se = {
										requestId: ee,
										fate: S.EditFate.PARTIALLY_ACCEPTED,
										numAcceptedPartialDiffs: te,
										numRejectedPartialDiffs: Q + Z,
									})
								: (se = { requestId: ee, fate: S.EditFate.REJECTED });
						else if (_ === "partial")
							te === 0
								? (se = { requestId: ee, fate: S.EditFate.REJECTED })
								: Q === 0
									? (se = { requestId: ee, fate: S.EditFate.ACCEPTED })
									: (se = {
											requestId: ee,
											fate: S.EditFate.PARTIALLY_ACCEPTED,
											numAcceptedPartialDiffs: te,
											numRejectedPartialDiffs: Q,
										});
						else throw new Error(`Invalid event type: ${_}`);
						const re = await this.u.get();
						try {
							await re.reportEditFate(se, {
								headers: (0, F.$m6b)((0, u.$9g)()),
							});
						} catch (le) {
							console.warn("Failed to report edit fate to the server", le);
						}
					}
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(),
							(this.w = ee),
							(this.y = _),
							(this.z = te),
							(this.C = Q),
							(this.F = Z),
							(this.G = se),
							(this.H = re),
							(this.I = le),
							(this.J = oe),
							(this.L = ae),
							(this.M = pe),
							(this.N = $e),
							(this.O = ye),
							(this.P = ue),
							(this.c = new Map()),
							(this.h = this.D(new i.$re())),
							(this.onDidChangeDiffInfos = this.h.event),
							(this.j = this.D(new i.$re())),
							(this.onDidAcceptDiff = this.j.event),
							(this.m = this.D(new i.$re())),
							(this.onDidRejectDiff = this.m.event),
							(this.n = this.D(new i.$re())),
							(this.onDidAddDiffFromUndoRedo = this.n.event),
							(this.q = this.D(new i.$re())),
							(this.onDidRemoveDiffFromUndoRedo = this.q.event),
							(this.s = this.D(new i.$re())),
							(this.onDidAcceptPartialDiff = this.s.event),
							(this.t = this.D(new i.$re())),
							(this.onDidRejectPartialDiff = this.t.event),
							(this.f = f.EditorContextKeys.hasActivelyGeneratingDiff.bindTo(
								this.G,
							));
						for (const fe of H.registeredActions) fe(this.z);
						(this.g = this.D(this.z.createScoped(this))),
							this.g.onChangeEffect({
								deps: [
									() => this.z.nonPersistentStorage.promptBars,
									() => this.z.nonPersistentStorage.inprogressAIGenerations,
									() =>
										this.z.nonPersistentStorage.promptBars.map(
											(fe) => fe.diffId,
										),
								],
								onChange: () => {
									let fe = !1;
									for (const me of this.z.nonPersistentStorage.promptBars)
										if (me.diffId !== void 0) {
											const ve = this.c.get(me.diffId);
											if (
												ve?.inlineDiff.generationUUID &&
												this.z.nonPersistentStorage.inprogressAIGenerations.some(
													(ge) =>
														ge.generationUUID === ve?.inlineDiff.generationUUID,
												)
											) {
												fe = !0;
												break;
											}
										}
									this.f.set(fe);
								},
							}),
							(this.u = this.y.createInstance(U.$q6b, { service: z.$9ab }));
					}
					getHandlerByDiffId(ee) {
						return this.c.get(ee);
					}
					revealDiff(ee) {
						const _ = this.c.get(ee);
						if (!_) return;
						const te = this.H.activeEditorPane;
						if (te === void 0) return;
						const Q = te.getControl();
						Q !== void 0 &&
							(0, l.$0sb)(Q) &&
							this.I.extUri.isEqual(Q.getModel()?.uri, _.inlineDiff.uri) &&
							Q.revealRangeInCenter({
								startLineNumber: _.inlineDiff.currentRange.startLineNumber,
								startColumn: 1,
								endLineNumber: _.inlineDiff.currentRange.endLineNumberExclusive,
								endColumn: 1,
							});
					}
					_remove(ee) {
						const _ = this.z.nonPersistentStorage.promptBars.find(
							(te) => te.diffId === ee.id,
						);
						_ &&
							this.z.setNonPersistentStorage(
								"promptBars",
								(te) => te.id === _.id,
								"diffId",
								void 0,
							),
							this.c.delete(ee.id),
							ee.remove(),
							ee.dispose(),
							this.h.fire();
					}
					remove(ee, _, te) {
						const Q = this.c.get(ee);
						if (!Q) return;
						let Z = (0, a.$$zb)(Q.inlineDiff),
							se;
						if (!Q.inlineDiff.isHidden) {
							const re = new n.$y7b(
								"Undo Remove Diff",
								"undo-remove-diff",
								ee,
								Q.inlineDiff.uri,
								async () => {
									const le = await this.w.createModelReference(
										Q.inlineDiff.uri,
									);
									Z.isMultiInlineDiff
										? (se = new M.$17b(
												le,
												this.z,
												this.M,
												this,
												this.F,
												this.C,
												{ ...Z, id: ee },
												Q.promptBarId,
											))
										: (se = this.y.createInstance(
												X,
												le,
												{ ...Z, id: ee },
												Q.promptBarId,
											)),
										this.c.set(ee, se),
										this.h.fire(),
										this.n.fire({
											uri: Q.inlineDiff.uri,
											diffId: ee,
											composerMetadata: Q.composerMetadata,
										});
								},
								() => {
									const le = this.c.get(ee);
									le &&
										((Z = (0, a.$$zb)(le.inlineDiff)),
										this.cancelInUndo(ee),
										this._remove(le),
										this.q.fire({
											diffInfo: {
												uri: le.inlineDiff.uri,
												diffId: ee,
												composerMetadata: le.composerMetadata,
											},
											accepted: te ?? !1,
										}));
								},
							);
							this.pushUndoElement(re, {}),
								(_ ?? !1) &&
									Q.promptBarId &&
									this.Q(Q.promptBarId)?.diffId === ee &&
									this.U(Q.promptBarId);
						}
						this._remove(Q);
					}
					Q(ee) {
						return (0, a.$_zb)(
							this.z.nonPersistentStorage.promptBars.find((_) => _.id === ee),
						);
					}
					R(ee) {
						this.z.setNonPersistentStorage("promptBars", [
							...this.z.nonPersistentStorage.promptBars.filter(
								(_) => _.id !== ee.id,
							),
							ee,
						]);
					}
					S(ee) {
						this.z.setNonPersistentStorage(
							"promptBars",
							this.z.nonPersistentStorage.promptBars.filter((_) => _.id !== ee),
						);
					}
					U(ee) {
						const _ = this.Q(ee);
						if (_?.uri === void 0) return;
						this.S(ee);
						const te = { current: void 0 };
						if (
							(this.w.createModelReference(_.uri).then((Q) => {
								te.current = this.M.getPromptBarCurrentRange(
									_,
									Q.object.textEditorModel,
								);
								const Z = _.currentRangeDecorationId;
								Z && Q.object.textEditorModel.deltaDecorations([Z], []);
							}),
							_?.diffId === void 0)
						)
							this.w.createModelReference(_.uri).then((Q) => {
								if (_.modifyTextModelPrePromptBarBackwardEdit.length > 0) {
									const Z = this.M.getPromptBarCurrentRange(
										_,
										Q.object.textEditorModel,
									);
									_.prePromptBarCursorPosition &&
										Z &&
										Y(
											this.O,
											{
												startLineNumber: Z.startLineNumber,
												endLineNumber: Z.endLineNumberExclusive - 1,
												startColumn: 1,
												endColumn: 1,
											},
											Q.object.textEditorModel.uri,
											_.prePromptBarCursorPosition,
										),
										ie(
											Q.object.textEditorModel,
											_.modifyTextModelPrePromptBarBackwardEdit,
										);
								}
							}),
								this.F.pushElement(
									new b.$x7b(
										"Undo Close Prompt Bar",
										"undo-close-prompt-bar",
										_?.uri,
										async () => {
											const Q = await this.w.createModelReference(_.uri);
											_.modifyTextModelPrePromptBarForwardEdit.length > 0 &&
												ie(
													Q.object.textEditorModel,
													_.modifyTextModelPrePromptBarForwardEdit,
												);
											const Z = Q.object.textEditorModel.deltaDecorations(
												[],
												[
													{
														range: {
															startLineNumber: te.current?.startLineNumber ?? 1,
															endLineNumber:
																(te.current?.endLineNumberExclusive ?? 2) - 1,
															startColumn: 1,
															endColumn:
																Q.object.textEditorModel.getLineMaxColumn(
																	(te.current?.endLineNumberExclusive ?? 2) - 1,
																),
														},
														options: {
															description: "promptBar-tracking-range",
															isWholeLine: !0,
														},
													},
												],
											)[0];
											(0, L.batch)(() => {
												(_.currentRangeDecorationId = Z), this.R(_);
											});
										},
										async () => {
											const Q = await this.w.createModelReference(_.uri);
											te.current = this.M.getPromptBarCurrentRange(
												_,
												Q.object.textEditorModel,
											);
											const Z = _.currentRangeDecorationId;
											if (
												(Z &&
													Q.object.textEditorModel.deltaDecorations([Z], []),
												this.S(_.id),
												_.modifyTextModelPrePromptBarBackwardEdit.length > 0)
											) {
												const se = this.M.getPromptBarCurrentRange(
													_,
													Q.object.textEditorModel,
												);
												_.prePromptBarCursorPosition &&
													se &&
													Y(
														this.O,
														{
															startLineNumber: se.startLineNumber,
															endLineNumber: se.endLineNumberExclusive - 1,
															startColumn: 1,
															endColumn: 1,
														},
														Q.object.textEditorModel.uri,
														_.prePromptBarCursorPosition,
													),
													ie(
														Q.object.textEditorModel,
														_.modifyTextModelPrePromptBarBackwardEdit,
													);
											}
										},
									),
								);
						else {
							const Q = new n.$y7b(
								"Undo Close Prompt Bar",
								"undo-close-prompt-bar",
								_.diffId,
								_.uri,
								async () => {
									const Z = await this.w.createModelReference(_.uri),
										se = Z.object.textEditorModel.deltaDecorations(
											[],
											[
												{
													range: {
														startLineNumber: te.current?.startLineNumber ?? 1,
														endLineNumber:
															(te.current?.endLineNumberExclusive ?? 2) - 1,
														startColumn: 1,
														endColumn:
															Z.object.textEditorModel.getLineMaxColumn(
																(te.current?.endLineNumberExclusive ?? 2) - 1,
															),
													},
													options: {
														description: "promptBar-tracking-range",
														isWholeLine: !0,
													},
												},
											],
										)[0];
									(0, L.batch)(() => {
										(_.currentRangeDecorationId = se), this.R(_);
									});
								},
								async () => {
									const Z = await this.w.createModelReference(_.uri);
									te.current = this.M.getPromptBarCurrentRange(
										_,
										Z.object.textEditorModel,
									);
									const se = _.currentRangeDecorationId;
									se && Z.object.textEditorModel.deltaDecorations([se], []),
										this.S(_.id);
								},
							);
							this.pushUndoElement(Q, {});
						}
					}
					hidePromptBar(ee) {
						this.U(ee);
					}
					async applyEditsNoUpdateDiffs(ee, _) {
						const te = this.z.nonPersistentStorage.inlineDiffs.filter(
								(re) => re.uri.fsPath === ee.fsPath,
							),
							Q = await this.w.createModelReference(ee),
							Z = Q.object.textEditorModel,
							se = new Map();
						te.forEach((re) => {
							const le = this.c.get(re.id);
							!le ||
								(0, e.$47b)(le) ||
								(se.set(re.id, le.active), le.activate());
						}),
							Z.applyEdits(_),
							te.forEach((re) => {
								const le = this.c.get(re.id);
								le && (le.active = se.get(re.id) || !1);
							}),
							Q.dispose();
					}
					async _addDiff(ee, _) {
						const te = await this.w.createModelReference(ee.uri),
							Q = this.y.createInstance(X, te, ee, _);
						this.c.set(Q.id, Q), this.h.fire();
					}
					async addActiveDiff(ee, _) {
						const te = await this.addDiff(ee, _);
						return te.activate(), te;
					}
					async addDiff(ee, _, te, Q) {
						const Z = await this.w.createModelReference(ee.uri),
							se = this.y.createInstance(X, Z, ee, _);
						this.c.set(se.id, se), this.h.fire();
						const re = se.id;
						if (Q && !te) {
							const le = new n.$y7b(
								"Undo Start Diff",
								"undo-start-diff",
								re,
								ee.uri,
								Q.undo,
								Q.redo,
							);
							this.pushUndoElement(le, { breakConsolidation: !0 });
						}
						if (!te) {
							let le = (0, a.$$zb)(se.inlineDiff),
								oe,
								ae = !1,
								pe = _ ? this.Q(_) : void 0;
							const $e = new n.$y7b(
								"Undo Create Diff",
								"undo-create-diff",
								re,
								Z.object.textEditorModel.uri,
								() => {
									const ye = this.c.get(re);
									!ye ||
										(0, e.$47b)(ye) ||
										((le = (0, a.$$zb)(ye.inlineDiff)),
										this.cancelInUndo(re),
										(pe = _ ? this.Q(_) : void 0),
										pe?.diffId === ye.id && (ae = !0),
										this._remove(ye),
										this.q.fire({
											diffInfo: {
												uri: ee.uri,
												diffId: re,
												composerMetadata: ye.composerMetadata,
											},
											accepted: !1,
										}));
								},
								async () => {
									const ye = await this.w.createModelReference(ee.uri);
									(oe = this.y.createInstance(X, ye, { ...le, id: re }, _)),
										this.c.set(re, oe),
										this.h.fire(),
										this.n.fire({
											uri: ee.uri,
											diffId: re,
											composerMetadata: oe.composerMetadata,
										}),
										ae && pe && this.R(pe);
								},
							);
							this.pushUndoElement($e, {});
						}
						return se;
					}
					cancelDiff(ee, _) {
						const te = this.c.get(ee);
						if (!te) {
							this.z.setNonPersistentStorage(
								"inlineDiffs",
								this.z.nonPersistentStorage.inlineDiffs.filter(
									(Q) => Q.id !== ee,
								),
							);
							return;
						}
						te.isMultiple
							? (te.cancel(_), te.finishFailure(_))
							: (te.cancel(), te.finishFailure());
					}
					setDiff(ee, _) {
						const te = this.c.get(ee);
						if (te)
							if ((0, e.$47b)(te))
								if (G(_)) te.setDiff(_);
								else throw new Error("Invalid diff");
							else if (K(_)) te.setDiff(_);
							else throw new Error("Invalid diff");
					}
					cancelInUndo(ee) {
						const _ = this.c.get(ee);
						_ && _.cancelInUndo();
					}
					findClosestChange(ee, _) {
						const te = this.c.get(ee);
						if (te && te instanceof X) return te.findClosestChange(_);
					}
					acceptPartialDiff(ee, _) {
						const te = this.c.get(ee);
						if (!te) return !1;
						te.inlineDiff.isHidden ||
							this.J.publicLogCapture("inlineDiffAcceptPartial", {
								generationUUID: te.inlineDiff.generationUUID,
							}),
							this.pushUndoElement(
								new n.$y7b(
									"Undo Accept Partial Diff",
									"undo-accept-partial-diff",
									ee,
									te.inlineDiff.uri,
									() => {},
									() => {},
								),
								{ breakConsolidation: !0 },
							);
						let Q = [],
							Z = [];
						if (te instanceof X) {
							const re = te.findClosestChange(_);
							(Q = te.inlineDiff.newTextLines.slice(
								re.addedRange.startLineNumber - 1,
								re.addedRange.endLineNumberExclusive - 1,
							)),
								(Z = [...re.removedTextLines]);
						}
						const se = te.acceptPartialDiff(_);
						return (
							se && this.remove(ee, !0, !0),
							this.s.fire({
								diffInfo: {
									diffId: ee,
									uri: te.inlineDiff.uri,
									composerMetadata: te.composerMetadata,
								},
								isDone: se,
								change: { accepted: Q, rejected: Z },
							}),
							se
						);
					}
					rejectPartialDiff(ee, _) {
						const te = this.c.get(ee);
						if (!te) return !1;
						te.inlineDiff.isHidden ||
							this.J.publicLogCapture("inlineDiffRejectPartial", {
								generationUUID: te.inlineDiff.generationUUID,
							}),
							this.pushUndoElement(
								new n.$y7b(
									"Undo Reject Partial Diff",
									"undo-reject-partial-diff",
									ee,
									te.inlineDiff.uri,
									() => {},
									() => {},
								),
								{ breakConsolidation: !0 },
							);
						let Q = [],
							Z = [];
						if (te instanceof X) {
							const re = te.findClosestChange(_);
							(Z = te.inlineDiff.newTextLines.slice(
								re.addedRange.startLineNumber - 1,
								re.addedRange.endLineNumberExclusive - 1,
							)),
								(Q = [...re.removedTextLines]);
						}
						const se = te.rejectPartialDiff(_);
						return (
							se && this.remove(ee, void 0, !1),
							this.t.fire({
								diffInfo: {
									diffId: ee,
									uri: te.inlineDiff.uri,
									composerMetadata: te.composerMetadata,
								},
								isDone: se,
								change: { accepted: Q, rejected: Z },
							}),
							se
						);
					}
					acceptDiff(ee, _) {
						const te = this.c.get(ee);
						te &&
							(te.inlineDiff.isHidden ||
								this.J.publicLogCapture($.$lm, {
									generationUUID: te.inlineDiff.generationUUID,
								}),
							this.pushUndoElement(
								new n.$y7b(
									"Undo Accept Diff",
									"undo-accept-diff",
									ee,
									te.inlineDiff.uri,
									() => {},
									() => {},
								),
								{
									breakConsolidation:
										_?.dontBreakConsolidation !== void 0
											? !_.dontBreakConsolidation
											: !0,
								},
							),
							te.inlineDiff.isHidden ? te.reject() : te.accept(),
							this.remove(ee, !0, !0),
							this.j.fire({
								diffId: ee,
								uri: te.inlineDiff.uri,
								composerMetadata: te.composerMetadata,
							}));
					}
					rejectDiff(ee, _) {
						const te = this.c.get(ee);
						if (!te) {
							this.z.setNonPersistentStorage(
								"inlineDiffs",
								this.z.nonPersistentStorage.inlineDiffs.filter(
									(Q) => Q.id !== ee,
								),
							);
							return;
						}
						te.inlineDiff.isHidden ||
							this.J.publicLogCapture($.$mm, {
								generationUUID: te.inlineDiff.generationUUID,
							}),
							this.pushUndoElement(
								new n.$y7b(
									"Undo Reject Diff",
									"undo-reject-diff",
									ee,
									te.inlineDiff.uri,
									() => {},
									() => {},
								),
								{
									breakConsolidation:
										_?.dontBreakConsolidation !== void 0
											? !_.dontBreakConsolidation
											: !0,
								},
							),
							te.inlineDiff.isHidden ? te.accept() : te.reject(),
							te.callRejectCallback(),
							this.remove(ee, _?.close, !1),
							_?.rejectSilently ||
								this.m.fire({
									diffId: ee,
									uri: te.inlineDiff.uri,
									composerMetadata: te.composerMetadata,
								});
					}
					finishDiffSuccess(ee) {
						const _ = this.c.get(ee);
						_ && _.finishSuccess();
					}
					addLineToDiff(ee, _) {
						this.addLinesToDiff(ee, [_]);
					}
					addLinesToDiff(ee, _) {
						const te = this.c.get(ee);
						te && te.addLinesToDiff(_);
					}
					async streamDiff({
						uri: ee,
						originalLineRange: _,
						hideDeletionViewZones: te,
						generationUUID: Q,
						streamingLines: Z,
						originalTextLines: se,
						originalLineTokens: re,
						extraContextLinesAbove: le,
						extraContextLinesBelow: oe,
						prompt: ae,
						undoRedo: pe,
						isHidden: $e = !1,
						diffIdCallback: ye,
						doneCallback: ue,
						cancelGenerationWithNoChangesCallback: fe,
						rejectCallback: me,
						promptBarId: ve,
						composerId: ge,
					}) {
						const be = {
								uri: ee,
								generationUUID: Q,
								currentRange: _,
								originalTextLines: se,
								originalLineTokens: re,
								prompt: ae,
								isHidden: $e,
								hideDeletionViewZones: te,
								attachedToPromptBar: ye !== void 0,
								extraContextLinesAbove: le,
								extraContextLinesBelow: oe,
								composerId: ge,
							},
							Ce = await this.addDiff(be, ve, $e, pe);
						Ce.activate(ue, fe, me), ye !== void 0 && ye(Ce.id);
						let Le = !1;
						try {
							for await (const Fe of Z) Ce.addLinesToDiff([Fe]);
						} catch {
							Le = !0;
						}
						Le ? Ce.finishFailure() : Ce.finishSuccess();
					}
					async W(ee, _, te, Q) {
						const Z = await this.w.createModelReference(ee.uri);
						if (ee.orderedGenerationUUIDs.length === 0)
							throw new Error(
								"Multi inline diff must have at least one generation UUID",
							);
						if ("generationUUID" in ee)
							throw new Error(
								"Multi inline diff must not have a generation UUID - we will set it automatically from orderedGenerationUUIDs",
							);
						if ("newTextLiness" in ee)
							throw new Error(
								"Multi inline diff must not have newTextLiness - we will set it automatically from orderedGenerationUUIDs",
							);
						const se = {
								...ee,
								newTextLiness: Object.fromEntries(
									ee.orderedGenerationUUIDs.map((oe) => [oe, []]),
								),
								isMultiInlineDiff: !0,
								generationUUID: ee.orderedGenerationUUIDs[0],
							},
							re = new M.$17b(Z, this.z, this.M, this, this.F, this.C, se, _);
						this.c.set(re.id, re), this.h.fire();
						const le = re.id;
						if (Q && !te) {
							const oe = new n.$y7b(
								"Undo Start Diff",
								"undo-start-diff",
								le,
								ee.uri,
								Q.undo,
								Q.redo,
							);
							this.pushUndoElement(oe, { breakConsolidation: !0 });
						}
						if (!te) {
							let oe = (0, a.$$zb)(re.inlineDiff),
								ae,
								pe = !1,
								$e = _ ? this.Q(_) : void 0;
							const ye = new n.$y7b(
								"Undo Create Diff",
								"undo-create-diff",
								le,
								Z.object.textEditorModel.uri,
								() => {
									const ue = this.c.get(le);
									!ue ||
										!(0, e.$47b)(ue) ||
										((oe = (0, a.$$zb)(ue.inlineDiff)),
										this.cancelInUndo(le),
										($e = _ ? this.Q(_) : void 0),
										$e?.diffId === ue.id && (pe = !0),
										this._remove(ue));
								},
								async () => {
									const ue = await this.w.createModelReference(ee.uri);
									(ae = new M.$17b(
										ue,
										this.z,
										this.M,
										this,
										this.F,
										this.C,
										{ ...oe, id: le },
										_,
									)),
										this.c.set(le, ae),
										this.h.fire(),
										pe && $e && this.R($e);
								},
							);
							this.pushUndoElement(ye, {});
						}
						return re;
					}
					async streamMultiDiff({
						uri: ee,
						originalLineRange: _,
						hideDeletionViewZones: te,
						generationUUID: Q,
						orderedGenerationUUIDs: Z,
						streamingLines: se,
						originalTextLines: re,
						originalLineTokens: le,
						extraContextLinesAbove: oe,
						extraContextLinesBelow: ae,
						prompt: pe,
						undoRedo: $e,
						isHidden: ye = !1,
						diffIdCallback: ue,
						doneCallback: fe,
						globalDoneCallback: me,
						cancelGenerationWithNoChangesCallback: ve,
						rejectCallback: ge,
						promptBarId: be,
						abortController: Ce,
					}) {
						if (
							!this.z.applicationUserPersistentStorage.allowMultiCmdKGenerations
						)
							return (
								console.error(
									"Tried to do multiple generations, but they're banned! Falling back to streamDiff",
								),
								this.streamDiff({
									uri: ee,
									originalLineRange: _,
									hideDeletionViewZones: te,
									generationUUID: Q,
									streamingLines: se,
									originalTextLines: re,
									originalLineTokens: le,
									extraContextLinesAbove: oe,
									extraContextLinesBelow: ae,
									prompt: pe,
									undoRedo: $e,
									isHidden: ye,
									diffIdCallback: ue,
									doneCallback: fe,
									cancelGenerationWithNoChangesCallback: ve,
									rejectCallback: ge,
									promptBarId: be,
								})
							);
						let Le;
						if (
							((Le = [...this.c.values()].flatMap((Oe) =>
								(0, e.$47b)(Oe) &&
								Oe.inlineDiff.orderedGenerationUUIDs.includes(Q)
									? [Oe]
									: [],
							)[0]),
							Le)
						)
							console.log("ADDING GENERATION", Q, "TO", Le.id),
								console.log(
									"(the handler already has generationUUID",
									Le.inlineDiff.orderedGenerationUUIDs,
									")",
								);
						else {
							console.error(
								"DIDNT FIND A MULTI INLINE DIFF FOR",
								Q,
								"CREATING NEW MULTI INLINE DIFF",
							);
							const Oe = {
									uri: ee,
									orderedGenerationUUIDs: Z,
									currentRange: _,
									originalTextLines: re,
									originalLineTokens: le,
									prompt: pe,
									isHidden: ye,
									hideDeletionViewZones: te,
									attachedToPromptBar: ue !== void 0,
									extraContextLinesAbove: oe,
									extraContextLinesBelow: ae,
								},
								xe = await this.W(Oe, be, ye, $e);
							if (!(0, e.$47b)(xe))
								throw new Error(
									"streamMultiDiff diff handler is not a multi inline diff handler",
								);
							(Le = xe),
								Le.activateEntireHandler(ve, ge, me),
								console.log(
									"ACTIVATED NEW MULTI INLINE DIFF",
									Le.id,
									"WITH generation UUIDs",
									Le.inlineDiff.orderedGenerationUUIDs,
									"IS IN this.diffHandlers?",
									this.c.has(Le.id),
								);
						}
						Le.addGeneration(Q, Ce, fe), ue !== void 0 && ue(Le.id);
						let Fe = !1;
						try {
							for await (const Oe of se) Le.addLinesToDiff([Oe], void 0, Q);
						} catch {
							Fe = !0;
						}
						Fe ? Le.finishFailure(Q) : Le.finishSuccess(Q);
					}
					toggleSelectedGenerationAndReturnIsActive(ee, _) {
						if (
							!this.z.applicationUserPersistentStorage.allowMultiCmdKGenerations
						) {
							console.error(
								"Tried to toggle multiple generations, but they're banned!",
							);
							return;
						}
						const te = this.c.get(ee);
						if (te && (0, e.$47b)(te))
							return te.toggleSelectedGeneration(_), te.active;
					}
					pushUndoElement(ee, _) {
						if (_.breakConsolidation === !0) {
							this.F.pushElement(ee);
							return;
						}
						const te = this.F.getLastElement(ee.resource);
						te instanceof n.$y7b ? te.push(ee) : this.F.pushElement(ee);
					}
					dispose() {
						super.dispose();
						for (const ee of this.c.values()) ee.dispose();
						this.c.clear(), this.h.fire();
					}
					getGroupedChanges({ diffId: ee, mergeRadius: _ = 15 }) {
						const te = [],
							Q = this.z.nonPersistentStorage.inlineDiffs.find(
								(le) => le.id === ee,
							);
						if (Q === void 0) return te;
						const Z = Q.changes.sort(
							(le, oe) =>
								le.addedRange.startLineNumber - oe.addedRange.startLineNumber,
						);
						let se = [],
							re;
						for (let le = 0; le < Z.length; le++) {
							const oe = Z[le],
								ae = se.at(-1);
							k.$dh.isEqual(re, Q.uri) &&
							ae !== void 0 &&
							ae.addedRange.endLineNumberExclusive + _ >=
								oe.addedRange.startLineNumber
								? se.push(oe)
								: (se.length > 0 && te.push(se), (se = [oe]), (re = Q.uri));
						}
						return re !== void 0 && se.length > 0 && te.push(se), te;
					}
					async applyNewModelLinesToFile(ee) {
						const { uri: _, newModelLines: te } = ee,
							Q = this.z.nonPersistentStorage.inlineDiffs.find(
								(oe) => oe.uri.toString() === _.toString(),
							);
						Q && this.remove(Q.id);
						const Z = await this.w.createModelReference(_),
							se = Z.object.textEditorModel,
							re = se.getLinesContent(),
							le = (0, N.$Y7b)(re, te, !0, !1);
						this.P.write(_, le.newFullRangeTextLines.join(se.getEOL())),
							Z.dispose();
					}
				};
				(e.$37b = V),
					(e.$37b =
						V =
						H =
							Ne(
								[
									j(0, r.$MO),
									j(1, w.$Li),
									j(2, a.$0zb),
									j(3, T.$B7b),
									j(4, g.$GN),
									j(5, o.$6j),
									j(6, s.$IY),
									j(7, y.$Vl),
									j(8, $.$km),
									j(9, v.$Nfc),
									j(10, I.$J7b),
									j(11, D.$V7b),
									j(12, P.$dtb),
									j(13, x.$kZ),
								],
								V,
							)),
					(0, m.$lK)(e.$27b, V, m.InstantiationType.Delayed);
				const G = (ne) => ne.isMultiInlineDiff === !0,
					K = (ne) => !G(ne),
					J = (ne) => ne.isMultiple;
				e.$47b = J;
				const W = (ne) =>
					ne === void 0
						? [""]
						: G(ne)
							? ne.newTextLiness[ne.generationUUID]
							: ne.newTextLines;
				e.$57b = W;
				let X = class extends C.$1c {
					get id() {
						return this.inlineDiff.id;
					}
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe) {
						super(),
							(this.q = Q),
							(this.s = Z),
							(this.t = se),
							(this.u = re),
							(this.w = le),
							(this.y = oe),
							(this.z = ae),
							(this.C = pe),
							(this.f = h.$qxb.getDefault()),
							(this.g = h.$qxb.getLegacy()),
							(this.isMultiple = !1),
							(this.h = []),
							(this.j = !1),
							(this.m = 0),
							(this.n = 0),
							(this.active = !1),
							(this.F = []),
							(this.lastUndoEdits = null),
							(this.c = ee),
							(this.promptBarId = te),
							(this.composerMetadata = _.composerMetadata),
							(this.inlineDiff = {
								id: (0, u.$9g)(),
								changes: [],
								activeLine: void 0,
								pendingRange: {
									startLineNumber: 1,
									endLineNumberExclusive:
										_.currentRange.endLineNumberExclusive -
										_.currentRange.startLineNumber +
										1,
								},
								newTextLines: _.newTextLines ?? [],
								isHidden: !1,
								onAccept: void 0,
								onReject: void 0,
								canUndoUpdates: !0,
								showNativeAcceptReject: !1,
								..._,
							});
						const $e = pe.onDidChangeConfiguration((ye) => {
							ye.affectsConfiguration(B.$sW) && this.G();
						});
						if ((this.D($e), _.attachedToPromptBar)) {
							const ye = _.lastPromptBarCurrentRange ?? {
									startLineNumber: _.currentRange.startLineNumber,
									endLineNumberExclusive: _.currentRange.endLineNumberExclusive,
								},
								ue = this.c.object.textEditorModel.deltaDecorations(
									[],
									[
										{
											range: {
												startLineNumber: ye.startLineNumber,
												endLineNumber: ye.endLineNumberExclusive - 1,
												startColumn: 1,
												endColumn:
													this.c.object.textEditorModel.getLineMaxColumn(
														ye.endLineNumberExclusive - 1,
													),
											},
											options: {
												description: "promptBar-tracking-range",
												isWholeLine: !0,
											},
										},
									],
								)[0];
							if (
								this.q.nonPersistentStorage.promptBars.some(
									(fe) => fe.id === te,
								)
							) {
								const fe = this.q.nonPersistentStorage.promptBars.find(
									(me) => me.id === te,
								);
								fe &&
									this.q.setNonPersistentStorage(
										"promptBars",
										(me) => me.id === te,
										{
											...fe,
											diffId: this.inlineDiff.id,
											currentRangeDecorationId: ue,
										},
									);
							} else {
								const fe = {
									id: (0, u.$9g)(),
									uri: _.uri,
									data: (0, N.$W7b)(_.prompt),
									diffId: _.id,
									height: 0,
									contextSessionUuid: this.w.createContextSession((0, T.$D7b)())
										.uuid,
									queryHistory: void 0,
									chatResponse: void 0,
									currentRangeDecorationId: ue,
									inlineChatHistory: void 0,
									previousStructuredTextsNewestFirst: [],
									modifyTextModelPrePromptBarBackwardEdit: [],
									modifyTextModelPrePromptBarForwardEdit: [],
									generating: !1,
									forceRerenderInputBox: 0,
									prePromptBarCursorPosition: void 0,
									createdAt: Date.now(),
								};
							}
						}
						this.D(
							ee.object.textEditorModel.onDidChangeContent((ye) => {
								for (const ue of ye.changes)
									switch ((0, N.$X7b)(this.inlineDiff.currentRange, ue.range)) {
										case N.RangeWhereIs.After: {
											if (this.inlineDiff.changes.length > 0) {
												const me =
													this.inlineDiff.changes[
														this.inlineDiff.changes.length - 1
													];
												if (
													this.inlineDiff.currentRange.startLineNumber +
														me.addedRange.endLineNumberExclusive -
														1 ===
														ue.range.startLineNumber &&
													(me.removedTextLines.join(ye.eol) === ue.text ||
														me.removedTextLines.join(ye.eol) + ye.eol ===
															ue.text) &&
													ue.range.startColumn === 1 &&
													ue.range.startLineNumber ===
														this.inlineDiff.currentRange.endLineNumberExclusive
												) {
													for (const ve of me.removedTextLines)
														this.inlineDiff.newTextLines.push(ve);
													(this.inlineDiff.currentRange = new d.$rL(
														this.inlineDiff.currentRange.startLineNumber,
														this.inlineDiff.currentRange
															.endLineNumberExclusive +
															me.removedTextLines.length,
													)),
														this.inlineDiff.changes.pop(),
														this.q.setNonPersistentStorage(
															"inlineDiffs",
															(ve) => [
																...ve.filter(
																	(ge) => ge.id !== this.inlineDiff.id,
																),
																(0, a.$$zb)(this.inlineDiff),
															],
														),
														this.G();
													return;
												}
											}
											break;
										}
										case N.RangeWhereIs.Before: {
											const me =
												ue.text.split(`
`).length -
												(ue.range.endLineNumber - ue.range.startLineNumber + 1);
											(this.inlineDiff.currentRange = new d.$rL(
												this.inlineDiff.currentRange.startLineNumber + me,
												this.inlineDiff.currentRange.endLineNumberExclusive +
													me,
											)),
												this.q.setNonPersistentStorage("inlineDiffs", (ve) => [
													...ve.filter((ge) => ge.id !== this.inlineDiff.id),
													(0, a.$$zb)(this.inlineDiff),
												]),
												this.G();
											break;
										}
										case N.RangeWhereIs.Overlap: {
											if (this.active) continue;
											if (this.inlineDiff.isHidden) {
												this.t.rejectDiff(this.inlineDiff.id);
												continue;
											}
											this.processOverlapEdit(ue, ye.eol);
											break;
										}
									}
							}),
						),
							this.q.setNonPersistentStorage("inlineDiffs", (ye) => [
								...ye,
								(0, a.$$zb)(this.inlineDiff),
							]),
							this.G();
					}
					processOverlapEdit(ee, _) {
						const te = this.F.find(
							(me) =>
								me.range.startLineNumber === ee.range.startLineNumber &&
								me.range.startColumn === ee.range.startColumn &&
								me.range.endLineNumber === ee.range.endLineNumber &&
								me.range.endColumn === ee.range.endColumn &&
								(me.text ?? "") === ee.text,
						);
						if (te) {
							this.F = this.F.filter((me) => me !== te);
							return;
						}
						let Q = ee.text,
							Z = ee.range.startColumn,
							se = ee.range.endColumn,
							re = this.inlineDiff.currentRange.startLineNumber,
							le =
								ee.range.startLineNumber -
								this.inlineDiff.currentRange.startLineNumber +
								1;
						le < 1 &&
							((le = 1),
							(Z = 1),
							Q.includes(_)
								? ((Q = Q.split(_).slice(1).join(_)),
									(re = ee.range.startLineNumber + 1))
								: (console.warn(
										"We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now",
									),
									(re = ee.range.startLineNumber)));
						let oe =
								ee.range.endLineNumber -
								this.inlineDiff.currentRange.startLineNumber +
								1,
							ae = !1;
						oe > this.inlineDiff.newTextLines.length &&
							((oe = this.inlineDiff.newTextLines.length),
							(se = this.inlineDiff.newTextLines[oe - 1].length + 1),
							Q.includes(_)
								? (Q = Q.split(_).slice(0, -1).join(_))
								: (console.warn(
										"We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now",
									),
									(ae = !0)));
						const $e = (
								this.inlineDiff.newTextLines[le - 1].slice(0, Z - 1) +
								Q +
								this.inlineDiff.newTextLines[oe - 1].slice(se - 1)
							).split(_),
							ye = [
								...this.inlineDiff.newTextLines.slice(0, le - 1),
								...$e,
								...this.inlineDiff.newTextLines.slice(oe),
							];
						ae && ye.length > 0 && ye[ye.length - 1] === "" && ye.pop();
						const ue = new d.$rL(re, re + ye.length);
						(this.inlineDiff.currentRange = ue),
							(this.inlineDiff.newTextLines = ye);
						const fe = (0, N.$Y7b)(
							this.inlineDiff.originalTextLines,
							this.inlineDiff.newTextLines,
							!0,
							this.inlineDiff.isHidden,
						);
						(this.inlineDiff.changes = fe.changes),
							this.q.setNonPersistentStorage("inlineDiffs", (me) => [
								...me.filter((ve) => ve.id !== this.inlineDiff.id),
								(0, a.$$zb)(this.inlineDiff),
							]),
							this.G();
					}
					finishFailure() {
						if (!this.active) return;
						let ee = !0;
						for (let Q = 0; Q < this.inlineDiff.newTextLines.length; Q++)
							if (
								this.inlineDiff.newTextLines[Q] !==
								this.inlineDiff.originalTextLines[Q]
							) {
								ee = !1;
								break;
							}
						if (ee) {
							this.t.remove(this.inlineDiff.id), this.I();
							return;
						}
						const _ = (0, a.$$zb)(this.inlineDiff),
							te = (0, N.$Y7b)(
								this.inlineDiff.originalTextLines,
								this.inlineDiff.newTextLines,
								!1,
								this.inlineDiff.isHidden,
							);
						(this.inlineDiff.newTextLines = te.newFullRangeTextLines),
							this.handleDiffState(te, _),
							this.G(),
							this.H();
					}
					finishSuccess() {
						if (!this.active) return;
						const ee = (0, a.$$zb)(this.inlineDiff),
							_ = (0, N.$Y7b)(
								this.inlineDiff.originalTextLines,
								this.inlineDiff.newTextLines,
								!0,
								this.inlineDiff.isHidden,
							);
						this.handleDiffState(_, ee), this.G(), this.H();
					}
					reject() {
						const ee = [];
						for (const oe of this.inlineDiff.changes) {
							let ae = oe.removedTextLines.join(
								this.c.object.textEditorModel.getEOL(),
							);
							const pe = this.getGreenRange(oe);
							oe.addedRange.startLineNumber ===
								oe.addedRange.endLineNumberExclusive &&
								(ae += this.c.object.textEditorModel.getEOL());
							const $e = {
								range: pe,
								text: ae,
								forceMoveMarkers: !this.inlineDiff.isHidden,
							};
							ee.push($e);
						}
						this.t.recordRejectEvent({
							model: this.c.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							promptBarId: this.promptBarId,
						}),
							this.t.reportEditFate(this.inlineDiff.generationUUID, "reject", {
								numPartiallyAccepted: this.m,
								numPartiallyRejected: this.n,
								numUnresolved: this.inlineDiff.changes.length,
							});
						const _ = this.inlineDiff.uri,
							te = (0, a.$$zb)(this.inlineDiff),
							Q = this.inlineDiff.id,
							Z = this.t,
							se = [];
						let re;
						try {
							const oe = this.c.object.textEditorModel,
								ae = this.z.createById(oe.getLanguageId());
							(re = this.y.createModel(
								oe.getValue(),
								ae,
								t.URI.parse(`inline-diff-reject-anysphere://${q()}`),
							)),
								se.push(...re.applyEdits(ee, !0));
							for (let pe = ee.length - 1; pe >= 0; pe--)
								this.c.object.textEditorModel.applyEdits([ee[pe]]);
						} catch (oe) {
							console.warn(
								"Weird undo edit bug that I don't like... But if it for the cursor state only then it is probably fine?",
								oe,
							);
						} finally {
							re?.dispose();
						}
						this.removeDecorations(),
							this.q.setNonPersistentStorage("inlineDiffs", (oe) =>
								oe.filter((ae) => ae.id !== this.inlineDiff.id),
							);
						const le = (0, a.$$zb)(this.inlineDiff);
						if (!this.inlineDiff.isHidden) {
							const oe = this.q.nonPersistentStorage.promptBars.find(
								(pe) => pe.diffId === this.inlineDiff.id,
							);
							oe &&
								(le.lastPromptBarCurrentRange = this.s.getPromptBarCurrentRange(
									oe,
									this.c.object.textEditorModel,
								));
							const ae = new n.$y7b(
								"Undo Reject Suggestion",
								"undo-reject-suggestion",
								this.inlineDiff.id,
								this.inlineDiff.uri,
								async () => {
									await Z.applyEditsNoUpdateDiffs(_, se), Z.setDiff(Q, te);
								},
								async () => {
									await Z.applyEditsNoUpdateDiffs(_, ee), Z.setDiff(Q, le);
								},
							);
							this.t.pushUndoElement(ae, {});
						}
					}
					cancel() {
						this.t.recordCancelEvent({
							model: this.c.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							promptBarId: this.promptBarId,
						}),
							this.q.setNonPersistentStorage("inprogressAIGenerations", (ee) =>
								ee.filter(
									(_) => _.generationUUID !== this.inlineDiff.generationUUID,
								),
							);
					}
					remove() {
						this.removeDecorations(),
							this.q.setNonPersistentStorage("inlineDiffs", (ee) =>
								ee.filter((_) => _.id !== this.inlineDiff.id),
							);
					}
					add() {
						this.G(),
							this.q.setNonPersistentStorage("inlineDiffs", (ee) => [
								...ee,
								(0, a.$$zb)(this.inlineDiff),
							]);
					}
					getGreenRange(ee) {
						const _ = this.c.object.textEditorModel,
							te = _.getLineCount();
						if (ee.removedTextLines.length === 0) {
							let Q =
									this.inlineDiff.currentRange.startLineNumber +
									ee.addedRange.startLineNumber -
									1,
								Z =
									this.inlineDiff.currentRange.startLineNumber +
									ee.addedRange.endLineNumberExclusive -
									1;
							if (Z <= te) return new E.$iL(Q, 1, Z, 1);
							{
								Z = te;
								let se = 1;
								return (
									Q > 1 && (Q--, (se = _.getLineMaxColumn(Q))),
									new E.$iL(Q, se, Z, _.getLineMaxColumn(Z))
								);
							}
						} else {
							const Q =
									this.inlineDiff.currentRange.startLineNumber +
									ee.addedRange.endLineNumberExclusive -
									1 -
									1,
								Z = Math.min(Q, te);
							return ee.addedRange.endLineNumberExclusive ===
								ee.addedRange.startLineNumber
								? new E.$iL(
										this.inlineDiff.currentRange.startLineNumber +
											ee.addedRange.startLineNumber -
											1,
										1,
										this.inlineDiff.currentRange.startLineNumber +
											ee.addedRange.startLineNumber -
											1,
										1,
									)
								: new E.$iL(
										this.inlineDiff.currentRange.startLineNumber +
											ee.addedRange.startLineNumber -
											1,
										1,
										Z,
										this.c.object.textEditorModel.getLineMaxColumn(Z),
									);
						}
					}
					rejectPartialDiff(ee) {
						const _ = this.findClosestChange(ee),
							te = this.inlineDiff.changes.length === 1,
							Q = this.getGreenRange(_),
							Z =
								_.addedRange.endLineNumberExclusive ===
								_.addedRange.startLineNumber
									? this.c.object.textEditorModel.getEOL()
									: "",
							se =
								_.removedTextLines.join(
									this.c.object.textEditorModel.getEOL(),
								) + Z,
							re = { range: Q, text: se, forceMoveMarkers: !0 };
						this.t.recordPartialRejectEvent({
							model: this.c.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							redLines: se.split(`
`),
							greenLines: this.c.object.textEditorModel
								.getValueInRange(Q)
								.split(`
`),
							greenRange: Q,
							promptBarId: this.promptBarId,
						});
						const le = this.t,
							oe = this.inlineDiff.id,
							ae = (0, a.$$zb)(this.inlineDiff),
							pe = this.inlineDiff.uri,
							$e = [];
						try {
							$e.push(...this.c.object.textEditorModel.applyEdits([re], !0));
						} catch (ue) {
							console.warn(
								"Weird undo edit bug that I don't like... But if it for the cursor state only then it is probably fine?",
								ue,
							);
						}
						const ye = (0, a.$$zb)(this.inlineDiff);
						if (!this.inlineDiff.isHidden) {
							this.n++;
							const ue = new n.$y7b(
								"Undo Accept Suggestion",
								"undo-accept-suggestion",
								this.inlineDiff.id,
								this.inlineDiff.uri,
								async () => {
									this.n--,
										await le.applyEditsNoUpdateDiffs(pe, $e),
										le.setDiff(oe, ae);
								},
								async () => {
									this.n++,
										await le.applyEditsNoUpdateDiffs(pe, [re]),
										le.setDiff(oe, ye);
								},
							);
							this.t.pushUndoElement(ue, {});
						}
						if (te) {
							if (!this.inlineDiff.isHidden) {
								this.t.reportEditFate(
									this.inlineDiff.generationUUID,
									"partial",
									{
										numPartiallyAccepted: this.m,
										numPartiallyRejected: this.n,
										numUnresolved: 0,
									},
								);
								const ue = this.q.nonPersistentStorage.promptBars.find(
									(fe) => fe.diffId === this.inlineDiff.id,
								);
								ue &&
									(ye.lastPromptBarCurrentRange =
										this.s.getPromptBarCurrentRange(
											ue,
											this.c.object.textEditorModel,
										));
							}
							return this.remove(), !0;
						}
						return !1;
					}
					findClosestChange(ee) {
						const _ =
							ee.lineNumber - this.inlineDiff.currentRange.startLineNumber + 1;
						let te = this.inlineDiff.changes[0];
						for (const Q of this.inlineDiff.changes.slice(1)) {
							const Z = Math.min(
									Math.abs(Q.addedRange.endLineNumberExclusive - 1 - _),
									Math.abs(Q.addedRange.startLineNumber - _),
								),
								se = Math.min(
									Math.abs(te.addedRange.endLineNumberExclusive - 1 - _),
									Math.abs(te.addedRange.startLineNumber - _),
								);
							Z < se && (te = Q);
						}
						return te;
					}
					acceptPartialDiff(ee) {
						const _ = this.findClosestChange(ee),
							te = [
								...this.inlineDiff.originalTextLines.slice(
									0,
									_.removedLinesOriginalRange.startLineNumber - 1,
								),
								...this.inlineDiff.newTextLines.slice(
									_.addedRange.startLineNumber - 1,
									_.addedRange.endLineNumberExclusive - 1,
								),
								...this.inlineDiff.originalTextLines.slice(
									_.removedLinesOriginalRange.endLineNumberExclusive - 1,
								),
							],
							Q = new d.$rL(
								this.inlineDiff.currentRange.startLineNumber,
								this.inlineDiff.currentRange.endLineNumberExclusive +
									(_.removedLinesOriginalRange.endLineNumberExclusive -
										_.removedLinesOriginalRange.startLineNumber -
										(_.addedRange.endLineNumberExclusive -
											_.addedRange.startLineNumber)),
							),
							Z = (0, a.$$zb)(this.inlineDiff),
							se = this.inlineDiff.id,
							re = this.t,
							le = this.getGreenRange(_),
							oe =
								_.addedRange.endLineNumberExclusive ===
								_.addedRange.startLineNumber
									? this.c.object.textEditorModel.getEOL()
									: "",
							ae = (
								_.removedTextLines.join(
									this.c.object.textEditorModel.getEOL(),
								) + oe
							).split(`
`);
						this.t.recordPartialAcceptEvent({
							model: this.c.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							redLines: ae,
							greenLines: this.c.object.textEditorModel
								.getValueInRange(le)
								.split(`
`),
							greenRange: le,
							promptBarId: this.promptBarId,
						}),
							(this.inlineDiff.currentRange = Q),
							(this.inlineDiff.originalTextLines = te);
						const pe = (0, N.$Y7b)(
							this.inlineDiff.originalTextLines,
							this.inlineDiff.newTextLines,
							!0,
							this.inlineDiff.isHidden,
						);
						(this.inlineDiff.changes = pe.changes),
							this.q.setNonPersistentStorage("inlineDiffs", (ye) => [
								...ye.filter((ue) => ue.id !== this.inlineDiff.id),
								(0, a.$$zb)(this.inlineDiff),
							]),
							this.G();
						const $e = (0, a.$$zb)(this.inlineDiff);
						if (!this.inlineDiff.isHidden) {
							this.m++;
							const ye = new n.$y7b(
								"Undo Accept Suggestion",
								"undo-accept-suggestion",
								this.inlineDiff.id,
								this.inlineDiff.uri,
								async () => {
									this.m--, re.setDiff(se, Z);
								},
								() => {
									this.m++, re.setDiff(se, $e);
								},
							);
							this.t.pushUndoElement(ye, {});
						}
						return this.inlineDiff.changes.length === 0
							? (this.t.reportEditFate(
									this.inlineDiff.generationUUID,
									"partial",
									{
										numPartiallyAccepted: this.m,
										numPartiallyRejected: this.n,
										numUnresolved: 0,
									},
								),
								this.remove(),
								!0)
							: !1;
					}
					accept() {
						this.t.recordAcceptEvent({
							model: this.c.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							promptBarId: this.promptBarId,
						}),
							this.t.reportEditFate(this.inlineDiff.generationUUID, "accept", {
								numPartiallyAccepted: this.m,
								numPartiallyRejected: this.n,
								numUnresolved: this.inlineDiff.changes.length,
							}),
							this.remove(),
							this.dispose();
					}
					removeDecorations() {
						const ee = this.c.object.textEditorModel,
							_ = this.h;
						(this.h = []), ee.deltaDecorations(_, []);
					}
					addLinesToDiff(ee, _ = !1) {
						if (!this.active) return;
						const te = [];
						for (const se of ee) {
							(se.includes(`
`) ||
								se.includes("\r")) &&
								console.warn(
									"InlineDiffService#addLine: line contains newline characters, which is not supported",
								);
							let re = se.replace(/\r/g, "");
							(re = re.replace(/\n/g, "")), te.push(re);
						}
						const Q = (0, a.$$zb)(this.inlineDiff);
						this.inlineDiff.newTextLines.push(...te);
						const Z = (0, N.$Y7b)(
							this.inlineDiff.originalTextLines,
							this.inlineDiff.newTextLines,
							!1,
							this.inlineDiff.isHidden,
						);
						this.handleDiffState(Z, Q, _), this.G();
					}
					G() {
						const ee = this.C.getValue(B.$sW),
							_ = [],
							te = this.inlineDiff.isHidden ? "-hidden" : "";
						for (const Z of this.inlineDiff.changes) {
							const se =
								this.inlineDiff.currentRange.startLineNumber +
								Z.addedRange.startLineNumber -
								1;
							if (
								Z.addedRange.startLineNumber ===
								Z.addedRange.endLineNumberExclusive
							)
								continue;
							const re = new E.$iL(
									se,
									0,
									this.inlineDiff.currentRange.startLineNumber +
										Z.addedRange.endLineNumberExclusive -
										1 -
										1,
									0,
								),
								le = {
									range: re,
									options: {
										description:
											"inline-diff-removed" +
											(this.inlineDiff.isHidden ? "-hidden" : ""),
										overviewRuler: {
											position: c.OverviewRulerLane.Center,
											color:
												"var(--vscode-diffEditor-removedLineBackground, hsl(348deg 90% 50% / 25%))",
										},
									},
								};
							_.push(le);
							let oe = !1;
							if (
								Z.relativeInnerChanges &&
								!this.inlineDiff.isHidden &&
								this.C.getValue(B.$tW)
							) {
								const me = {
										className: "inline-diff-inner-change-added",
										description: "inline-diff-inner-change-added",
										shouldFillLineOnLineBreak: !0,
									},
									ve = {
										className:
											"inline-diff-inner-change-added inline-diff-inner-empty",
										description:
											"inline-diff-inner-change-addedinline-diff-inner-empty",
									};
								for (const ge of Z.relativeInnerChanges) {
									oe = !0;
									const be = new E.$iL(
											se + ge.modifiedRange.startLineNumber - 1,
											ge.modifiedRange.startColumn,
											se + ge.modifiedRange.endLineNumber - 1,
											ge.modifiedRange.endColumn,
										),
										Ce = { range: be, options: be.isEmpty() ? ve : me };
									_.push(Ce);
								}
							}
							const ae =
									"inline-diff-added " +
									(ee
										? "inline-diff-added-color"
										: `inline-diff-added-color-unthemed${oe ? "-lower" : ""}`),
								pe = "inline-diff-added-lines" + te,
								$e = Z.indentation
									? this.inlineDiff.currentRange.startLineNumber +
										Z.indentation.range.startLineNumber -
										1
									: se,
								ye = Z.indentation
									? this.inlineDiff.currentRange.startLineNumber +
										Z.indentation.range.endLineNumberExclusive -
										1 -
										1
									: re.endLineNumber,
								ue = new E.$iL(
									$e,
									1,
									ye,
									this.c.object.textEditorModel.getLineMaxColumn(ye),
								),
								fe = Z.indentation
									? this.c.object.textEditorModel.getValueInRange(ue)
									: "";
							if (Z.indentation && fe.trim() !== "") {
								for (let ve = $e; ve <= ye; ve++) {
									const ge = {
										range: new E.$iL(ve, 1, ve, Z.indentation.level + 1),
										options: {
											description: "inline-diff-indent-change",
											className:
												Z.indentation.level > 0
													? "inline-diff-indentation-increased"
													: "inline-diff-indentation-decreased",
										},
									};
									_.push(ge);
								}
								if ($e > se) {
									const ge = {
										range: new E.$iL(se, 0, $e - 1, 0),
										options: {
											description: ae,
											className: ae,
											inlineClassName: pe,
											isWholeLine: !0,
											...(this.inlineDiff.isHidden
												? {}
												: {
														overviewRuler: {
															position: c.OverviewRulerLane.Right,
															color:
																"var(--vscode-diffEditor-insertedLineBackground, hsl(124deg 90% 48% / 20%))",
														},
													}),
										},
									};
									_.push(ge);
								}
								if (ye < re.endLineNumber) {
									const ge = {
										range: new E.$iL(ye + 1, 0, re.endLineNumber, 0),
										options: {
											description: ae,
											className: ae,
											inlineClassName: pe,
											isWholeLine: !0,
											...(this.inlineDiff.isHidden
												? {}
												: {
														overviewRuler: {
															position: c.OverviewRulerLane.Right,
															color:
																"var(--vscode-diffEditor-insertedLineBackground, hsl(124deg 90% 48% / 20%))",
														},
													}),
										},
									};
									_.push(ge);
								}
								const me = {
									range: ue,
									options: {
										description: "inline-diff-indented-subset",
										className: ee
											? "inline-diff-indented-subset"
											: "inline-diff-indented-subset-unthemed",
										isWholeLine: !0,
									},
								};
								_.push(me);
							} else {
								const me = {
									range: re,
									options: {
										description: ae,
										className: ae,
										inlineClassName: pe,
										isWholeLine: !0,
										...(this.inlineDiff.isHidden
											? {}
											: {
													overviewRuler: {
														position: c.OverviewRulerLane.Right,
														color:
															"var(--vscode-diffEditor-insertedLineBackground, hsl(124deg 90% 48% / 20%))",
													},
												}),
									},
								};
								_.push(me);
							}
						}
						if (
							this.q.nonPersistentStorage.inprogressAIGenerations.some(
								(Z) => Z.generationUUID === this.inlineDiff.generationUUID,
							)
						) {
							if (this.inlineDiff.activeLine) {
								const Z = new E.$iL(
									this.inlineDiff.currentRange.startLineNumber +
										this.inlineDiff.activeLine -
										1,
									0,
									this.inlineDiff.currentRange.startLineNumber +
										this.inlineDiff.activeLine -
										1,
									0,
								);
								_.push({
									range: Z,
									options: {
										description: "inline-diff-current",
										className: "inline-diff-current",
										isWholeLine: !0,
									},
								});
							}
							if (
								this.inlineDiff.pendingRange.startLineNumber !==
								this.inlineDiff.pendingRange.endLineNumberExclusive
							) {
								const Z = new E.$iL(
									this.inlineDiff.currentRange.startLineNumber +
										this.inlineDiff.pendingRange.startLineNumber -
										1,
									0,
									this.inlineDiff.currentRange.startLineNumber +
										this.inlineDiff.pendingRange.endLineNumberExclusive -
										1 -
										1,
									0,
								);
								_.push({
									range: Z,
									options: {
										description: "inline-diff-pending",
										className: "inline-diff-pending",
										isWholeLine: !0,
									},
								});
							}
						}
						this.h = this.c.object.textEditorModel.deltaDecorations(this.h, _);
					}
					handleDiffState(ee, _, te = !1, Q = !1) {
						!this.active &&
							!Q &&
							console.error(
								"InlineDiffService#handleDiffState: diff is not active when calling handleDiffState",
							);
						const Z = this.c.object.textEditorModel,
							se = (0, N.$Z7b)(ee, this.inlineDiff, this.c);
						this.F = se;
						let re = [];
						this.inlineDiff.isHidden || (re = Z.applyEdits(se, !0)),
							this.inlineDiff.isHidden ||
								(this.inlineDiff.currentRange = new d.$rL(
									this.inlineDiff.currentRange.startLineNumber,
									this.inlineDiff.currentRange.startLineNumber +
										ee.newFullRangeTextLines.length,
								)),
							(this.inlineDiff.changes = ee.changes),
							(this.inlineDiff.activeLine = ee.activeLine),
							(this.inlineDiff.pendingRange = ee.pendingRange),
							this.q.setNonPersistentStorage("inlineDiffs", ($e) => [
								...$e.filter((ye) => ye.id !== this.inlineDiff.id),
								(0, a.$$zb)(this.inlineDiff),
							]);
						const le = (0, a.$$zb)(this.inlineDiff),
							oe = this.t,
							ae = this.inlineDiff.id,
							pe = this.inlineDiff.uri;
						if (!this.inlineDiff.isHidden && !te) {
							const $e = new n.$y7b(
								"Undo Update Diff",
								"undo-update-diff",
								ae,
								Z.uri,
								async () => {
									oe.cancelInUndo(ae),
										await oe.applyEditsNoUpdateDiffs(pe, re),
										oe.setDiff(ae, _);
								},
								async () => {
									await oe.applyEditsNoUpdateDiffs(pe, se), oe.setDiff(ae, le);
								},
							);
							this.t.pushUndoElement($e, {});
						}
					}
					cancelInUndo() {
						this.q.nonPersistentStorage.inprogressAIGenerations.some(
							(ee) => ee.generationUUID === this.inlineDiff.generationUUID,
						) &&
							this.q.setNonPersistentStorage("inprogressAIGenerations", (ee) =>
								ee.filter(
									(_) => _.generationUUID !== this.inlineDiff.generationUUID,
								),
							),
							(this.active = !1),
							(this.j = !0);
					}
					setDiff(ee) {
						(this.inlineDiff = ee),
							this.q.setNonPersistentStorage("inlineDiffs", (_) => [
								..._.filter((te) => te.id !== this.inlineDiff.id),
								(0, a.$$zb)(this.inlineDiff),
							]),
							this.G();
					}
					activate(ee, _, te) {
						(this.active = !0),
							(this.doneCallback = ee),
							(this.cancelGenerationWithNoChangesCallback = _),
							(this.rejectCallback = te);
					}
					H() {
						(this.active = !1),
							this.doneCallback &&
								this.doneCallback({
									generationUUID: this.inlineDiff.generationUUID,
									diffRange: this.inlineDiff.currentRange,
									model: this.c.object.textEditorModel,
								});
					}
					I() {
						this.cancelGenerationWithNoChangesCallback &&
							this.cancelGenerationWithNoChangesCallback();
					}
					callRejectCallback() {
						this.rejectCallback && this.rejectCallback();
					}
				};
				(e.$67b = X),
					(e.$67b = X =
						Ne(
							[
								j(3, a.$0zb),
								j(4, I.$J7b),
								j(5, e.$27b),
								j(6, g.$GN),
								j(7, T.$B7b),
								j(8, A.$QO),
								j(9, R.$nM),
								j(10, O.$gj),
							],
							X,
						));
				function Y(ne, ee, _, te) {
					const Q = ne.listCodeEditors();
					for (const Z of Q)
						if (Z.hasModel() && k.$dh.isEqual(Z.getModel().uri, _)) {
							const se = Z.getPosition();
							se &&
							se.lineNumber >= ee.startLineNumber &&
							se.lineNumber <= ee.endLineNumber
								? Z.setPosition(te)
								: se &&
									se.lineNumber >
										Z.getModel().getLineCount() -
											(ee.endLineNumber - ee.startLineNumber + 1) &&
									Z.setPosition(
										new p.$hL(
											Z.getModel().getLineCount() -
												(ee.endLineNumber - ee.startLineNumber + 1),
											se.column,
										),
									);
						}
				}
				function ie(ne, ee) {
					try {
						ne.applyEdits(ee);
					} catch (_) {
						console.warn(
							"Expected error. But if this error happens and something looks weird, then we should investigate. It is related to the feature of having the cursor state go back to its original place if you escape out of a cmd-k generate prompt bar.",
							_,
						);
					}
				}
			},
		),
		define(
			de[1348],
			he([1, 0, 46, 3, 8, 5, 38, 149, 499, 1554, 45, 765, 19, 479, 58]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Plc = void 0),
					(e.$Olc = p);
				function p(b) {
					return (
						b.nonPersistentStorage.cppState?.suggestion !== void 0 &&
						b.applicationUserPersistentStorage.cppConfig?.isGhostText === !0
					);
				}
				class o extends t.$itb {
					constructor() {
						super({
							id: n.$JX,
							label: "Update Hint Line",
							alias: "Update Hint Line",
							precondition: void 0,
						});
					}
					run(s, l, y) {
						const $ = f.get(l);
						$ && $.update();
					}
				}
				(0, t.$ntb)(o);
				let f = class extends i.$1c {
					static {
						g = this;
					}
					static {
						this.ID = "editor.contrib.hintLineController";
					}
					static get(s) {
						return s.getContribution(g.ID);
					}
					constructor(s, l, y, $, v) {
						super(),
							(this.f = y),
							(this.g = $),
							(this.h = v),
							(this.a = s),
							(this.c = l),
							setTimeout(() => {
								this.update();
							}, 200),
							this.D(this.a.onDidChangeModel(() => this.update())),
							this.D(this.a.onDidChangeModelContent(() => this.update())),
							this.D(this.a.onDidChangeModelLanguage(() => this.update())),
							this.D(this.a.onDidChangeCursorPosition(() => this.update())),
							this.D(this.a.onDidFocusEditorText(() => this.update())),
							this.D(this.a.onDidBlurEditorText(() => this.update())),
							(this.b = new d.$Y(() =>
								this.D(this.f.createInstance(m.$w7b, this.a)),
							)),
							l.onDidChangeContext((S) => {
								S.affectsSome(new Set([a.$_Cb.inlineSuggestionVisible.key])) &&
									this.update();
							}),
							(this.j = this.D(this.g.createScoped(this))),
							this.j.onChangeEffect({
								deps: [
									() =>
										this.g.applicationUserPersistentStorage.hideChatEditTooltip,
									() => this.g.nonPersistentStorage.cppState?.suggestion,
									() => this.g.nonPersistentStorage.cppState,
									() => this.g.nonPersistentStorage.promptBars,
								],
								onChange: () => {
									this.update();
								},
							});
					}
					m() {
						if (!this.a.hasModel()) return;
						const s = this.a.getModel(),
							l = this.a.getSelection();
						if (l.isEmpty()) {
							const { lineNumber: y, column: $ } = l.getPosition(),
								v = s.getLineContent(y);
							if (v.length === 0) return;
							if ($ === 1) {
								if (/\s/.test(v[0])) return;
							} else if ($ === s.getLineMaxColumn(y)) {
								if (/\s/.test(v[v.length - 1])) return;
							} else if (/\s/.test(v[$ - 2]) && /\s/.test(v[$ - 1])) return;
						}
						return l;
					}
					n() {
						if (!this.a.hasModel()) return !1;
						const s = this.a.getModel(),
							l = this.a.getSelection(),
							y = this.g.nonPersistentStorage.promptBars;
						for (const $ of y) {
							if (!h.$dh.isEqual($.uri, s.uri)) continue;
							const v = this.h.getPromptBarCurrentRange($, s);
							if (
								v !== void 0 &&
								!(
									v.startLineNumber > l.endLineNumber ||
									v.endLineNumberExclusive <= l.startLineNumber
								)
							)
								return !0;
						}
						return !1;
					}
					update() {
						if (
							this.g.applicationUserPersistentStorage.hideChatEditTooltip === !0
						) {
							this.b.value.hide();
							return;
						}
						const s = this.a.getModel();
						if (s && !this.a.getOption(C.EditorOption.readOnly)) {
							const l = this.m(),
								y = l ? l.getStartPosition() : this.a.getPosition(),
								$ = s.getLineFirstNonWhitespaceColumn(y.lineNumber) === 0,
								v = this.c.getContextKeyValue(
									a.$_Cb.inlineSuggestionVisible.key,
								),
								S = p(this.g);
							if (
								$ &&
								!v &&
								(l == null ||
									(l.startLineNumber == l.endLineNumber &&
										l.startColumn == l.endColumn)) &&
								!(0, r.$Nlc)(this.g) &&
								!S
							) {
								this.b.value.update(y);
								const I = this.n();
								this.b.value.updateCmdKShortcut(I);
							} else this.b.value.hide();
						} else this.b.value.hide();
					}
				};
				(e.$Plc = f),
					(e.$Plc =
						f =
						g =
							Ne([j(1, w.$6j), j(2, E.$Li), j(3, u.$0zb), j(4, c.$J7b)], f)),
					(0, t.$qtb)(f.ID, f, t.EditorContributionInstantiation.Eventually);
			},
		),
		define(
			de[3981],
			he([1, 0, 7, 159, 3, 56, 39, 31, 45, 2956, 35, 383, 10, 137, 906]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vdc = void 0),
					(t = mt(t));
				let n = class extends w.$1c {
					constructor(p, o, f, b, s, l, y, $, v, S, I, T) {
						super(),
							(this.id = p),
							(this.diffId = o),
							(this.isHidden = b),
							(this.c = s),
							(this.keybindingService = l),
							(this.commandService = y),
							(this.analyticsService = $),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.m = null),
							(this.q = (k) => {
								const L = k.width < 480;
								this.b(L), this.c.layoutContentWidget(this);
							}),
							(this.id = p),
							(this.reactiveStorageRoot = this.D(this.f.createScoped(this))),
							(this.a = t.$("div.acceptRejectPartialEditWidget")),
							(this.a.style.display = "none"),
							([this.line, this.setLine] =
								this.reactiveStorageRoot.createSignal(f)),
							([this.isEditorNarrow, this.b] =
								this.reactiveStorageRoot.createSignal(!1)),
							this.n(f),
							this.D((0, r.$udc)(this.a, this, this.g, this.j)),
							this.D(i.$Qhb.ignoreTarget(this.a)),
							this.c.addContentWidget(this),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [this.line],
								onChange: ({ deps: k }) => {
									this.n(k[0]), this.c.layoutContentWidget(this);
								},
							});
						const P = (k) => {
							if (!k.position) return;
							const L = this.h.getHandlerByDiffId(this.diffId);
							if (!L || (0, a.$47b)(L)) return;
							const D = L.findClosestChange(k.position);
							if (D) {
								const { addedRange: M } = D;
								this.line() ===
								L.inlineDiff.currentRange.startLineNumber +
									M.startLineNumber -
									1
									? (this.a.style.display = "block")
									: (this.a.style.display = "none");
							}
						};
						P({ position: this.c.getPosition(), source: "cursor" }),
							this.D(
								this.c.onMouseMove((k) => {
									P({ position: k.target.position, source: "mouse" });
								}),
							),
							this.D(
								this.c.onDidChangeCursorPosition((k) =>
									P({ position: k.position, source: "cursor" }),
								),
							),
							this.D(
								this.c.onDidChangeCursorSelection((k) =>
									P({
										position: k.selection.getStartPosition(),
										source: "cursor",
									}),
								),
							),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [
									() => this.f.nonPersistentStorage.inlineDiffs,
									() => this.f.nonPersistentStorage.promptBars,
								],
								onChange: () => {
									P({ position: this.c.getPosition(), source: "cursor" });
								},
							}),
							this.D(this.c.onDidLayoutChange(this.q)),
							this.q(this.c.getLayoutInfo());
					}
					n(p) {
						this.m = {
							position: { lineNumber: p, column: 1 },
							preference: [
								E.ContentWidgetPositionPreference.EXACT,
								E.ContentWidgetPositionPreference.BELOW,
							],
						};
					}
					dispose() {
						super.dispose(), this.c.removeContentWidget(this);
					}
					getId() {
						return this.id;
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return this.m;
					}
				};
				(e.$vdc = n),
					(e.$vdc = n =
						Ne(
							[
								j(5, C.$uZ),
								j(6, d.$ek),
								j(7, c.$ifc),
								j(8, m.$0zb),
								j(9, u.$iP),
								j(10, a.$27b),
								j(11, h.$gj),
							],
							n,
						));
			},
		),
		define(
			de[3982],
			he([1, 0, 65, 118, 30, 55, 52, 110, 17, 315, 383, 42, 137, 3, 20, 901]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ted = e.$sed = void 0);
				async function p(l, y, $) {
					const v = await new Promise((A) => {
							(0, g.$gqb)(l, y, (R, O) => {
								A(O);
							});
						}),
						S = [];
					let I = 0;
					for (const A of v)
						if (A.added)
							S.push({ range: new m.$iL(I, 1, I + A.count, 1) }),
								(I += A.count);
						else if (A.removed) {
							const R = A.value.slice(0, -1);
							S.push({ range: new m.$iL(I, 1, I, 1), removeText: R });
						} else I += A.count;
					const T = S.sort(
							(A, R) => A.range.startLineNumber - R.range.startLineNumber,
						),
						P = y.split(`
`);
					let k = "",
						L = 0,
						D = 0,
						M = 0;
					for (const { range: A, removeText: R } of T) {
						A.startLineNumber > $ && (M = $ + D);
						const O = P.slice(L, A.startLineNumber);
						if (
							(O.length > 0 &&
								(k +=
									O.join(`
`) +
									`
`),
							(L = A.endLineNumber),
							R === void 0)
						) {
							const B = A.startLineNumber,
								U = A.endLineNumber,
								F = P.slice(B, U)
									.map((x) => `+${x}`)
									.join(`
`);
							k +=
								F +
								`
`;
						} else {
							const B = R.split(`
`),
								U = B.map((z) => `-${z}`).join(`
`);
							(k +=
								U +
								`
`),
								(D += B.length);
						}
					}
					const N = P.slice(L);
					return (
						N.length > 0 &&
							(k +=
								N.join(`
`) +
								`
`),
						{ diffString: k, newImportantLine: M }
					);
				}
				const o = 30,
					f = 15;
				let b = class extends c.$1c {
					constructor(y, $, v, S, I, T) {
						super(),
							(this.c = y),
							(this.f = $),
							(this.g = v),
							(this.h = S),
							(this.j = I),
							(this.m = T),
							(this.fileStates = {}),
							(this.changeStates = {}),
							(this.lastFire = 0);
					}
					shouldFire(y, $) {
						if (Date.now() - this.lastFire < 15e3) return !1;
						const v = this.changeStates[y] ?? [];
						for (const k of v)
							Date.now() - k.timestamp > 30 * 1e3 && v.slice(v.indexOf(k), 1);
						let S = 0,
							I = !1;
						for (const k of v)
							I &&
								k.type === "keyboard" &&
								(Math.abs(k.pos.lineNumber - $.lineNumber) < 40 && S++,
								(I = !1)),
								!I && ["mouse", "api"].includes(k.type) && (S++, (I = !0));
						const T = v[v.length - 1],
							P = Date.now() - T.timestamp;
						return S > 3 && P > 500;
					}
					startBackgroundWatch() {}
					backgroundLoop() {}
					computeTargetRange(y, $) {
						let v = y.getLineFirstNonWhitespaceColumn($),
							S = this.computeSpanWithIndentationFrom(y, $, v);
						if (S.endLineNumber - S.startLineNumber > f * 2) {
							const T = y.getLineCount(),
								P = Math.max($ - f, 1),
								k = Math.min($ + f, T);
							return new m.$iL(P, 1, k, y.getLineMaxColumn(k));
						}
						let I = S;
						for (; I.endLineNumber - I.startLineNumber <= f * 2 && v >= 0; )
							v--, (S = I), (I = this.computeSpanWithIndentationFrom(y, $, v));
						return S;
					}
					computeSpanWithIndentationFrom(y, $, v) {
						let S = $,
							I = $;
						for (; S >= 1 || I <= y.getLineCount(); ) {
							let T = !1;
							if (
								(S > 1 &&
									y.getLineFirstNonWhitespaceColumn(S - 1) >= v &&
									((T = !0), S--),
								I < y.getLineCount() &&
									y.getLineLastNonWhitespaceColumn(I + 1) >= v &&
									((T = !0), I++),
								!T)
							)
								break;
						}
						return new m.$iL(S, 1, I, y.getLineMaxColumn(I));
					}
					async run(y) {}
				};
				(e.$sed = b),
					(e.$sed = b =
						Ne(
							[
								j(0, t.$dtb),
								j(1, i.$Nfc),
								j(2, d.$y7c),
								j(3, r.$S6b),
								j(4, u.$27b),
								j(5, a.$MO),
							],
							b,
						)),
					(0, n.$lK)(h.$ffc, b, n.InstantiationType.Delayed);
				let s = class {
					constructor(y, $) {
						(this.c = y), (this.d = $);
					}
				};
				(e.$ted = s),
					(e.$ted = s = Ne([j(0, h.$ffc), j(1, r.$S6b)], s)),
					w.$Io
						.as(E.Extensions.Workbench)
						.registerWorkbenchContribution(s, C.LifecyclePhase.Eventually);
			},
		),
		define(
			de[1933],
			he([
				1, 0, 7, 3, 56, 4, 31, 172, 23, 6, 10, 38, 46, 39, 66, 595, 1289, 32,
				62, 460, 12, 127, 130, 297, 186, 499, 1348, 45, 71, 8, 95, 72, 49, 168,
				2398,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JFc = e.$IFc = void 0),
					(t = mt(t));
				const A = t.$;
				e.$IFc = "workbench.editor.empty.hint";
				let R = class {
					static {
						this.ID = "editor.contrib.emptyTextEditorHint";
					}
					constructor(U, z, F, x, H, q, V, G, K, J, W) {
						(this.c = U),
							(this.f = z),
							(this.g = F),
							(this.h = x),
							(this.i = H),
							(this.j = q),
							(this.k = V),
							(this.l = G),
							(this.m = K),
							(this.n = J),
							(this.o = W),
							(this.a = []),
							this.a.push(this.c.onDidChangeModel(() => this.r())),
							this.a.push(this.c.onDidChangeModelLanguage(() => this.r())),
							this.a.push(this.c.onDidChangeModelContent(() => this.r())),
							this.a.push(this.c.onDidChangeModelDecorations(() => this.r())),
							this.a.push(
								this.c.onDidChangeConfiguration((X) => {
									X.hasChanged(a.EditorOption.readOnly) && this.r();
								}),
							),
							this.a.push(
								this.h.onDidChangeConfiguration((X) => {
									X.affectsConfiguration(e.$IFc) && this.r();
								}),
							);
					}
					p() {
						return { clickable: !0 };
					}
					q() {
						if (
							this.h.getValue(e.$IFc) === "hidden" ||
							this.c.getOption(a.EditorOption.readOnly)
						)
							return !1;
						const z = this.c.getModel(),
							F = z?.getLanguageId();
						return !z ||
							F === $.$e8 ||
							F === $.$g8 ||
							F === v.$m7 ||
							(0, I.$Olc)(this.l) ||
							this.i.getContextKeyValue(
								P.EditorContextKeys.editorHasPromptBar.key,
							) ||
							this.c.getModel()?.getValueLength() ||
							!!this.c
								.getLineDecorations(1)
								?.find(
									(q) =>
										q.options.beforeContentClassName ||
										q.options.afterContentClassName ||
										q.options.before?.content ||
										q.options.after?.content,
								)
							? !1
							: z?.uri.scheme === m.Schemas.untitled && F === d.$0M;
					}
					r() {
						const U = this.q();
						U && !this.b
							? (this.b = new O(
									this.c,
									this.p(),
									this.f,
									this.g,
									this.h,
									this.j,
									this.k,
									this.m,
									this.n,
									this.o,
								))
							: !U && this.b && (this.b.dispose(), (this.b = void 0));
					}
					dispose() {
						(0, i.$Vc)(this.a), this.b?.dispose();
					}
				};
				(e.$JFc = R),
					(e.$JFc = R =
						Ne(
							[
								j(1, n.$EY),
								j(2, C.$ek),
								j(3, u.$gj),
								j(4, k.$6j),
								j(5, D.$Uyb),
								j(6, c.$uZ),
								j(7, T.$0zb),
								j(8, o.$km),
								j(9, f.$Bk),
								j(10, M.$Xxb),
							],
							R,
						));
				class O {
					static {
						this.a = "editor.widget.emptyHint";
					}
					constructor(U, z, F, x, H, q, V, G, K, J) {
						(this.h = U),
							(this.i = z),
							(this.j = F),
							(this.k = x),
							(this.l = H),
							(this.m = q),
							(this.n = V),
							(this.o = G),
							(this.p = K),
							(this.q = J),
							(this.f = !1),
							(this.g = ""),
							(this.c = new i.$Zc()),
							this.c.add(
								this.h.onDidChangeConfiguration((X) => {
									this.b &&
										X.hasChanged(a.EditorOption.fontInfo) &&
										this.h.applyFontInfo(this.b);
								}),
							);
						const W = r.Event.debounce(
							this.h.onDidFocusEditorText,
							() => {},
							500,
						);
						this.c.add(
							W(() => {
								this.h.hasTextFocus() &&
									this.f &&
									this.g &&
									this.l.getValue(
										y.AccessibilityVerbositySettingId.EmptyEditorHint,
									) &&
									(0, l.$pib)(this.g);
							}),
						),
							this.h.addContentWidget(this);
					}
					getId() {
						return O.a;
					}
					r(U) {
						const z = () => {
							this.l.updateValue(e.$IFc, "hidden"),
								this.dispose(),
								this.h.focus();
						};
						if (!U) {
							z();
							return;
						}
						this.q.showContextMenu({
							getAnchor: () => new N.$2fb(t.$Ogb(), U),
							getActions: () => [
								{
									id: "workench.action.disableEmptyEditorHint",
									label: (0, E.localize)(4860, null),
									tooltip: (0, E.localize)(4861, null),
									enabled: !0,
									class: void 0,
									run: () => {
										z();
									},
								},
							],
						});
					}
					s(U) {
						const z =
								(U.length === 1 ? U[0].fullName : void 0) ?? this.p.nameShort,
							F = "inlineChat.start";
						let x = `Ask ${z} something or start typing to dismiss.`;
						const H = () => {
								this.o.publicLog2("workbenchActionExecuted", {
									id: "inlineChat.hintAction",
									from: "hint",
								}),
									this.k.executeCommand(F, { from: "hint" });
							},
							q = {
								disposables: this.c,
								callback: (J, W) => {
									switch (J) {
										case "0":
											H();
											break;
									}
								},
							},
							V = A("empty-hint-text");
						V.style.display = "block";
						const G = this.n.lookupKeybinding(F),
							K = G?.getLabel();
						if (G && K) {
							const J = (0, E.localize)(4862, null, K, z),
								[W, X] = J.split(K).map((ee) => {
									if (this.i.clickable) {
										const _ = A("a", void 0, ee);
										return (
											(_.style.fontStyle = "italic"),
											(_.style.cursor = "pointer"),
											this.c.add(
												t.$0fb(_, t.$$gb.CONTEXT_MENU, (te) => this.r(te)),
											),
											this.c.add(t.$0fb(_, t.$$gb.CLICK, H)),
											_
										);
									} else {
										const _ = A("span", void 0, ee);
										return (_.style.fontStyle = "italic"), _;
									}
								});
							V.appendChild(W);
							const Y = q.disposables.add(new b.$7ob(V, s.OS));
							Y.set(G),
								(Y.element.style.width = "min-content"),
								(Y.element.style.display = "inline"),
								this.i.clickable &&
									((Y.element.style.cursor = "pointer"),
									this.c.add(
										t.$0fb(Y.element, t.$$gb.CONTEXT_MENU, (ee) => this.r(ee)),
									),
									this.c.add(t.$0fb(Y.element, t.$$gb.CLICK, H))),
								V.appendChild(X);
							const ie = (0, E.localize)(4863, null),
								ne = A("span", void 0, ie);
							(ne.style.fontStyle = "italic"),
								V.appendChild(ne),
								(x = J.concat(ie));
						} else {
							const J = (0, E.localize)(4864, null, z),
								W = (0, g.$kib)(J, { actionHandler: q });
							V.appendChild(W);
						}
						return { ariaLabel: x, hintElement: V };
					}
					t() {
						const U = {
								disposables: this.c,
								callback: (X, Y) => {
									switch (X) {
										case "0":
											z(Y.browserEvent);
											break;
										case "3":
											this.r();
											break;
									}
								},
							},
							z = async (X) => {
								X.stopPropagation(),
									this.h.focus(),
									this.o.publicLog2("workbenchActionExecuted", {
										id: S.$t7b,
										from: "hint",
									}),
									await this.k.executeCommand(S.$t7b),
									this.h.focus();
							},
							F = async (X) => {
								X.stopPropagation(),
									this.o.publicLog2("workbenchActionExecuted", {
										id: p.$HFc.Id,
										from: "hint",
									}),
									await this.k.executeCommand(p.$HFc.Id);
							},
							x = async (X) => {
								X.stopPropagation();
								const Y = this.j.activeGroup.activeEditor;
								this.o.publicLog2("workbenchActionExecuted", {
									id: "welcome.showNewFileEntries",
									from: "hint",
								}),
									(await this.k.executeCommand("welcome.showNewFileEntries", {
										from: "hint",
									})) &&
										Y !== null &&
										Y.resource?.scheme === m.Schemas.untitled &&
										this.j.activeGroup.closeEditor(Y, { preserveFocus: !0 });
							},
							q = this.n.lookupKeybinding(S.$t7b)?.getLabel(),
							V = (0, E.localize)(4865, null, q),
							G = (0, g.$kib)(V, { actionHandler: U, renderCodeSegments: !1 });
						G.style.fontStyle = "italic";
						const K = [S.$t7b],
							J = K.map((X) => this.n.lookupKeybinding(X)?.getLabel() ?? X),
							W = (0, E.localize)(4866, null, ...J);
						for (const X of G.querySelectorAll("a")) {
							X.style.cursor = "pointer";
							const Y = K.shift(),
								ie = Y && this.n.lookupKeybinding(Y)?.getLabel();
							U.disposables.add(
								this.m.setupManagedHover((0, L.$cib)("mouse"), X, ie ?? ""),
							);
						}
						return { hintElement: G, ariaLabel: W };
					}
					getDomNode() {
						if (!this.b) {
							(this.b = A(".empty-editor-hint")),
								(this.b.style.width = "max-content"),
								(this.b.style.paddingLeft = "4px");
							const { hintElement: U, ariaLabel: z } = this.t();
							this.b.append(U),
								(this.g = z.concat(
									(0, E.localize)(
										4867,
										null,
										y.AccessibilityVerbositySettingId.EmptyEditorHint,
									),
								)),
								this.c.add(
									t.$0fb(this.b, "click", () => {
										this.h.focus();
									}),
								),
								this.h.applyFontInfo(this.b);
						}
						return this.b;
					}
					getPosition() {
						return {
							position: { lineNumber: 1, column: 1 },
							preference: [w.ContentWidgetPositionPreference.EXACT],
						};
					}
					dispose() {
						this.h.removeContentWidget(this), (0, i.$Vc)(this.c);
					}
				}
				(0, h.$qtb)(R.ID, R, h.EditorContributionInstantiation.Eager);
			},
		),
		define(
			de[3983],
			he([
				1, 0, 394, 3551, 3767, 3415, 3552, 3263, 3019, 3716, 3264, 1313, 3692,
				3021, 3022, 3416, 3023, 3024, 1026, 1933, 3613, 1236, 1259,
			]),
			function (ce, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
			},
		),
		define(
			de[3984],
			he([1, 0, 23, 46, 31, 10, 8, 49, 72, 39, 62, 45, 32, 1933, 108, 66, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KFc = void 0);
				let o = class extends c.$JFc {
					static {
						this.CONTRIB_ID = "notebook.editor.contrib.emptyCellEditorHint";
					}
					constructor(b, s, l, y, $, v, S, I, T, P, k, L) {
						super(b, l, y, $, v, S, I, T, P, k, L), (this.s = s);
						const D = (0, n.$eJb)(this.s.activeEditorPane);
						D && this.a.push(D.onDidChangeActiveCell(() => this.r()));
					}
					p() {
						return { clickable: !1 };
					}
					q() {
						if (!super.q()) return !1;
						const s = this.c.getModel();
						if (!s || !(s?.uri.scheme === t.Schemas.vscodeNotebookCell))
							return !1;
						const y = (0, n.$eJb)(this.s.activeEditorPane);
						return !(!y || y.getActiveCell()?.uri.fragment !== s.uri.fragment);
					}
				};
				(e.$KFc = o),
					(e.$KFc = o =
						Ne(
							[
								j(1, p.$IY),
								j(2, g.$EY),
								j(3, w.$ek),
								j(4, E.$gj),
								j(5, C.$6j),
								j(6, m.$Uyb),
								j(7, r.$uZ),
								j(8, a.$0zb),
								j(9, h.$km),
								j(10, u.$Bk),
								j(11, d.$Xxb),
							],
							o,
						)),
					(0, i.$qtb)(o.CONTRIB_ID, o, i.EditorContributionInstantiation.Eager);
			},
		),
		define(
			de[480],
			he([
				1, 0, 20, 5, 45, 32, 620, 669, 516, 118, 148, 3, 975, 42, 567, 383, 196,
				2698, 18, 350, 56, 659, 31, 47, 59, 337, 587, 83, 19, 342, 126, 191,
				341, 25, 54, 200, 3234, 155, 779, 581, 644, 285, 1114, 137, 209,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$a0b = e.$_9b = e.$$9b = void 0),
					(e.$$9b = (0, i.$Mi)("fastEditService")),
					(e.$_9b = "speculative-multi-file"),
					(e.$a0b = "speculative-full-file");
				let G = class {
					constructor(
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
					) {
						(this.f = J),
							(this.g = W),
							(this.h = X),
							(this.j = Y),
							(this.k = ie),
							(this.l = ne),
							(this.m = ee),
							(this.n = _),
							(this.o = te),
							(this.q = Q),
							(this.t = Z),
							(this.u = se),
							(this.v = re),
							(this.w = le),
							(this.x = ae),
							(this.y = pe),
							(this.z = new v.$Jc(10)),
							(this.c = oe.createInstance(x.$q6b, { service: H.$9ab }));
					}
					async performChatEditFinetunedModel(J) {
						const W = (0, $.$9g)();
						this.l.setNonPersistentStorage(
							"nonPersistentChatMetadata",
							({ bubbleId: oe, tabId: ae }) =>
								oe === J.generationMetadata.bubbleId &&
								ae === J.generationMetadata.tabId,
							"editUuid",
							W,
						);
						const [X, Y] = this.g.registerNewGeneration({
							metadata: { ...J.generationMetadata, type: "apply" },
							generationUUID: J.generationUUID,
						});
						this.h.setIntentDetermined(
							J.generationMetadata.bubbleId,
							J.generationMetadata.tabId,
						);
						const ie = new T.$Zs({ modelName: J.privateFtModel.modelName });
						this.j.publicLogCapture("Submitted /edit");
						const ne = this.g.getLastActiveFileEditor()?.input?.resource;
						if (ne === void 0)
							throw new Error("Failed to get last active file editor");
						const ee = this.l.nonPersistentStorage.inlineDiffs
							.filter((oe) => P.$dh.isEqual(oe.uri, ne))
							.map((oe) => oe.id);
						for (const oe of ee)
							this.o.cancelDiff(oe), this.o.rejectDiff(oe, { close: !0 });
						let _ = `
`;
						try {
							_ = (
								await this.n.createModelReference(ne)
							).object.textEditorModel.getEOL();
						} catch (oe) {
							console.warn("modelReference couldnt be created", oe);
						}
						const te = {
								currentFile: await this.g.getCurrentFileInfo(ne, {
									includeNotebookCells: !0,
								}),
								conversation: J.conversationHistory,
								modelDetails: ie,
								explicitContext: await this.g.getExplicitContext(),
								summary: J.generationMetadata.summaryText,
								summaryUpUntilIndex: J.generationMetadata.summaryUpUntilIndex,
								isCmdI: !1,
								files: [],
								useFastApply: !1,
								fastApplyModelType:
									u.SlashEditRequest_FastApplyModelType.DEFAULT,
							},
							Z = (await this.g.aiClient()).slashEdit(te, {
								signal: Y.signal,
								headers: (0, D.$m6b)(J.generationUUID),
							});
						let se = "";
						for (const [oe, ae] of [
							...J.conversationHistory.entries(),
						].reverse())
							if (
								ae.type === L.ConversationMessage_MessageType.HUMAN &&
								ae.text !== ""
							) {
								se = J.conversationHistory[oe].text;
								break;
							}
						this.g.addToPromptHistory({
							prompt: se,
							commandType: C.CommandType.CHAT,
						});
						const re = this.handleSlashEditResponseSingleDiff({
								streamer: Z,
								eol: _,
								editUuid: W,
								generationMetadata: J.generationMetadata,
								generationUUID: J.generationUUID,
								request: te,
								abortController: Y,
								uri: ne,
							}),
							le = M.$q0.typeName + "/" + M.$q0.methods.slashEdit.name;
						return this.g.streamResponse({
							modelDetails: ie,
							generationUUID: J.generationUUID,
							source: "chat",
							streamer: re,
							streamerURL: le,
							rethrowCancellation: !0,
							rerun: J.options?.rerun,
							failSilently: J.options?.failSilently,
						});
					}
					async warmFastApply(J) {
						const W =
							J.uri ?? this.g.getLastActiveFileEditor()?.input?.resource;
						if (W === void 0)
							throw new Error("Failed to get last active file editor");
						const X = {
							conversation: J.conversationHistory,
							currentFile: await this.g.getCurrentFileInfo(W, {
								actuallyReadFromOverrideURI: !0,
								includeNotebookCells: !0,
							}),
							explicitContext: await this.g.getExplicitContext(),
							source: J.source,
							willingToPayExtraForSpeed: !0,
						};
						await (await this.c.get()).warmApply(X, {
							headers: (0, D.$m6b)(J.generationUUID),
						});
					}
					async performChatEdit(J) {
						const W = await this.performAndYieldChatEdit(J);
						if (W !== void 0) for await (const X of W);
					}
					async performAndYieldChatEdit(J) {
						const W = (0, $.$9g)();
						J.generationMetadata &&
							this.l.setNonPersistentStorage(
								"nonPersistentChatMetadata",
								({ bubbleId: ge, tabId: be }) =>
									ge === J.generationMetadata.bubbleId &&
									be === J.generationMetadata.tabId,
								"editUuid",
								W,
							);
						const X =
								J.options?.overrideCurrentFileURI ??
								this.g.getLastActiveFileEditor()?.input?.resource,
							[Y, ie] = this.g.registerNewGeneration({
								metadata: J.generationMetadata
									? { ...J.generationMetadata, type: "apply" }
									: {
											type: "apply",
											textDescription:
												X && this.v.asRelativePath(X).split("/").pop(),
										},
								generationUUID: J.generationUUID,
							});
						J.generationMetadata &&
							this.h.setIntentDetermined(
								J.generationMetadata.bubbleId,
								J.generationMetadata.tabId,
							);
						const ne =
							J.options?.overrideModelDetails ||
							this.g.getModelDetails({ specificModelField: "regular-chat" });
						if ((this.j.publicLogCapture("Submitted /edit"), X === void 0))
							throw new Error("Failed to get last active file editor");
						const ee = () =>
								this.l.nonPersistentStorage.inlineDiffs
									.filter((ge) => P.$dh.isEqual(ge.uri, X))
									.map((ge) => ge.id),
							_ = (ge) => {
								const be = ee();
								for (const Ce of be)
									this.o.cancelDiff(Ce),
										this.o.rejectDiff(Ce, {
											close: !0,
											rejectSilently: !0,
											dontBreakConsolidation: ge?.dontBreakConsolidation,
										}),
										J.onPreviousDiffReject?.(Ce);
							},
							te = ee().length > 0,
							Q = J.shouldChainPrevious && te && !J.options?.rejectChangesInURI;
						let Z = "";
						if (!Q) {
							J.options?.rejectChangesInURI !== !1 && _();
							const ge = await this.n.createModelReference(X);
							(Z = ge.object.textEditorModel.getValue()), ge.dispose();
						}
						let se = `
`;
						try {
							se = (
								await this.n.createModelReference(X)
							).object.textEditorModel.getEOL();
						} catch (ge) {
							console.warn("modelReference couldnt be created", ge);
						}
						console.log(
							"using fast apply model type",
							this.l.applicationUserPersistentStorage.fastApplyModelType,
						);
						const re = J.isBackgroundApply !== !0,
							le = {
								currentFile: await this.g.getCurrentFileInfo(X, {
									actuallyReadFromOverrideURI: !0,
									includeNotebookCells: !0,
								}),
								conversation: J.conversationHistory,
								modelDetails: ne,
								parentRequestId: J.parentRequestId,
								source: J.source,
								explicitContext: await this.g.getExplicitContext(),
								summary: J.generationMetadata?.summaryText ?? "",
								summaryUpUntilIndex:
									J.generationMetadata?.summaryUpUntilIndex ?? 0,
								isCmdI: !1,
								shouldUseTurboDebugPrompt: !0,
								editSelection: J.options?.overrideLineRange
									? {
											startLineNumber:
												J.options?.overrideLineRange.startLineNumber,
											endLineNumberInclusive:
												J.options?.overrideLineRange.endLineNumberExclusive - 1,
										}
									: void 0,
								files: [],
								clickedCodeBlockContents: J.clickedCodeBlockContents,
								specificInstructions: J.specificInstructions,
								isAnOptimisticRequestForCachingAndLinting:
									J.inlineDiffServiceLookalike !== void 0 ||
									J.source === z.FastApplySource.CACHED_APPLY,
								useFastApply: !1,
								fastApplyModelType:
									u.SlashEditRequest_FastApplyModelType.DEFAULT,
								useChunkSpeculationForLongFiles: re,
								isReapply: J.isReapply,
								willingToPayExtraForSpeed: J.willingToPayExtraForSpeed,
							};
						let oe = "",
							ae = "",
							pe;
						if (Q) {
							(pe = new U.$y7b(
								"Undo Chain Diff",
								"undo-chain-diff",
								void 0,
								X,
								() => {},
								() => {},
							)),
								this.o.pushUndoElement(pe, { breakConsolidation: !0 });
							const ge = await this.n.createModelReference(X),
								be = ge.object.textEditorModel,
								Ce = be.getValue();
							_({ dontBreakConsolidation: !0 }),
								(oe = be.getValue()),
								(ae = Ce);
							const Le = be.getLineCount(),
								Fe = {
									startLineNumber: 1,
									endLineNumber: Le,
									startColumn: 1,
									endColumn: be.getLineMaxColumn(Le),
								},
								Oe = be.applyEdits([{ range: Fe, text: Ce }], !0);
							pe.push(
								new U.$y7b(
									"Undo Chain Diff",
									"undo-chain-diff",
									void 0,
									X,
									() => {
										be.applyEdits(Oe, !1);
									},
									() => {
										be.applyEdits([{ range: Fe, text: Ce }], !1);
									},
								),
							),
								ge.dispose();
						}
						let $e;
						if (J.existingStreamer !== void 0) $e = J.existingStreamer;
						else {
							const be = (await this.g.aiClient()).slashEdit(le, {
								signal: ie.signal,
								headers: (0, D.$m6b)(J.generationUUID),
							});
							if (J.onStreamerCreated) {
								const Ce = (0, O.$09b)(be);
								($e = Ce()), J.onStreamerCreated(Ce());
							} else $e = be;
						}
						let ye = "";
						for (const [ge, be] of [
							...J.conversationHistory.entries(),
						].reverse())
							if (
								be.type === L.ConversationMessage_MessageType.HUMAN &&
								be.text !== ""
							) {
								ye = J.conversationHistory[ge].text;
								break;
							}
						J.skipAddToPromptHistory ||
							this.g.addToPromptHistory({
								prompt: ye,
								commandType: C.CommandType.CHAT,
							});
						let ue;
						if (J.shouldComputeOriginalLineTokens) {
							const ge = await this.n.createModelReference(X),
								be = ge.object.textEditorModel,
								Le = {
									startLineNumber: 1,
									endLineNumberExclusive: be.getLineCount() + 1,
								};
							ue = [];
							for (
								let Fe = Le.startLineNumber;
								Fe < Le.endLineNumberExclusive;
								Fe++
							)
								ue.push(be.tokenization.getLineTokens(Fe).extractObject());
							ge.dispose();
						}
						const fe = {
							streamer: $e,
							eol: se,
							editUuid: W,
							generationMetadata: J.generationMetadata,
							generationUUID: J.generationUUID,
							request: le,
							abortController: ie,
							uri: X,
							lineRange: J.options?.overrideLineRange,
							source: J.options?.overrideSource,
							inlineDiffServiceLookalike: J.inlineDiffServiceLookalike,
							composerMetadata: J.composerMetadata,
							onCreateInlineDiff: Q ? void 0 : J.onCreateInlineDiff,
							linesDiffComputerOptions: J.linesDiffComputerOptions,
							originalLineTokens: ue,
							onFailed: async () => {
								if (Q) {
									const ge = oe,
										be = await this.n.createModelReference(X),
										Ce = be.object.textEditorModel,
										Le = Ce.getValue();
									_({ dontBreakConsolidation: !0 });
									const Fe = Ce.getLineCount(),
										Oe = {
											startLineNumber: 1,
											endLineNumber: Fe,
											startColumn: 1,
											endColumn: Ce.getLineMaxColumn(Fe),
										},
										xe = Ce.applyEdits([{ range: Oe, text: ge }], !0);
									pe.push(
										new U.$y7b(
											"Undo Chain Diff",
											"undo-chain-diff",
											void 0,
											X,
											() => {
												Ce.applyEdits(xe, !1);
											},
											() => {
												Ce.applyEdits([{ range: Oe, text: ge }], !1);
											},
										),
									);
									const Ke = {
											startLineNumber: 1,
											endLineNumberExclusive: Ce.getLineCount() + 1,
										},
										Je = Ce.getLinesContent().slice(
											Ke.startLineNumber - 1,
											Ke.endLineNumberExclusive - 1,
										),
										Te = (0, $.$9g)(),
										Ee = {
											uri: X,
											generationUUID: Te,
											currentRange: Ke,
											originalTextLines: Je,
											prompt: "hi",
											isHidden: !1,
											attachedToPromptBar: !1,
											source: e.$a0b,
											createdAt: Date.now(),
											composerMetadata: J.composerMetadata,
										},
										Ie = (
											await (
												J.inlineDiffServiceLookalikePure ?? this.o
											).addActiveDiff(Ee)
										).id;
									(J.inlineDiffServiceLookalikePure ?? this.o).addLinesToDiff(
										Ie,
										Le.split(se),
									),
										(
											J.inlineDiffServiceLookalikePure ?? this.o
										).finishDiffSuccess(Ie),
										be.dispose(),
										J.onCreateInlineDiff?.(X, Ie);
								}
								J.onApplyFailed?.();
							},
							onFinish: Q
								? async (ge) => {
										const be = this.applyDiffToLines(ae.split(se), ge);
										_({ dontBreakConsolidation: !0 });
										const Ce = await this.n.createModelReference(X),
											Le = Ce.object.textEditorModel,
											Fe = Le.getLineCount(),
											Oe = {
												startLineNumber: 1,
												endLineNumber: Fe,
												startColumn: 1,
												endColumn: Le.getLineMaxColumn(Fe),
											},
											xe = Le.applyEdits([{ range: Oe, text: oe }], !0);
										pe.push(
											new U.$y7b(
												"Undo Chain Diff",
												"undo-chain-diff",
												void 0,
												X,
												() => {
													Le.applyEdits(xe, !1);
												},
												() => {
													Le.applyEdits([{ range: Oe, text: oe }], !1);
												},
											),
										);
										const Ke = {
												startLineNumber: 1,
												endLineNumberExclusive: Le.getLineCount() + 1,
											},
											Je = Le.getLinesContent().slice(
												Ke.startLineNumber - 1,
												Ke.endLineNumberExclusive - 1,
											),
											Te = [];
										for (
											let Be = Ke.startLineNumber;
											Be < Ke.endLineNumberExclusive;
											Be++
										)
											Te.push(
												Le.tokenization.getLineTokens(Be).extractObject(),
											);
										const Ee = {
											uri: X,
											generationUUID: J.generationUUID,
											currentRange: Ke,
											originalTextLines: Je,
											prompt: "hi",
											isHidden: !1,
											attachedToPromptBar: !1,
											source: e.$a0b,
											createdAt: Date.now(),
											composerMetadata: J.composerMetadata,
										};
										Ce.dispose();
										const Ie = (
											await (
												J.inlineDiffServiceLookalikePure ?? this.o
											).addActiveDiff(Ee)
										).id;
										(J.inlineDiffServiceLookalikePure ?? this.o).addLinesToDiff(
											Ie,
											be,
										),
											(
												J.inlineDiffServiceLookalikePure ?? this.o
											).finishDiffSuccess(Ie),
											Ce.dispose(),
											J.onCreateInlineDiff?.(X, Ie),
											J.onApplyDone?.({
												newModelLines: be,
												originalModelLines: Je,
												isChained: !0,
											});
									}
								: async (ge) => {
										const be = this.applyDiffToLines(Z.split(se), ge);
										J.onApplyDone?.({
											newModelLines: be,
											originalModelLines: Z.split(se),
										});
									},
						};
						let me;
						J.inlineDiffServiceLookalikePure === void 0
							? (me = this.handleSlashEditResponseSingleDiff(fe))
							: (me = this.handleSlashEditResponseSingleDiffPure({
									...fe,
									inlineDiffServiceLookalike: J.inlineDiffServiceLookalikePure,
								}));
						const ve = M.$q0.typeName + "/" + M.$q0.methods.slashEdit.name;
						return this.g.streamResponse({
							modelDetails: ne,
							generationUUID: J.generationUUID,
							source: "other",
							streamer: me,
							streamerURL: ve,
							rethrowCancellation: !0,
							rerun: J.options?.rerun,
							failSilently: J.options?.failSilently,
						});
					}
					rejectSlashEdit(J) {
						const W = this.z.get(J);
						W !== void 0 && this.o.rejectDiff(W.diffId);
					}
					getDiffId(J) {
						const W = this.z.get(J);
						if (W !== void 0) return W.diffId;
					}
					acceptSlashEdit(J) {
						const W = this.z.get(J);
						W !== void 0 && this.o.acceptDiff(W.diffId);
					}
					async *handleSlashEditResponseSingleDiffPure({
						eol: J,
						editUuid: W,
						generationMetadata: X,
						composerMetadata: Y,
						streamer: ie,
						request: ne,
						generationUUID: ee,
						abortController: _,
						uri: te,
						lineRange: Q,
						source: Z,
						inlineDiffServiceLookalike: se,
						onCreateInlineDiff: re,
						linesDiffComputerOptions: le,
						onFinish: oe,
						onFailed: ae,
						originalLineTokens: pe,
					}) {
						let $e = !1,
							ye;
						yield "Performing edit...";
						const ue =
								Q ??
								new p.$rL(
									1,
									(ne.currentFile?.contents.split(J).length ?? 1) + 1,
								),
							fe = ne.currentFile?.contents
								.split(J)
								.slice(ue.startLineNumber - 1, ue.endLineNumberExclusive - 1),
							me = [];
						let ve = 1;
						const ge = [];
						let be = Date.now();
						const Ce = () => {
								ye !== void 0 && se.addLinesToDiff(ye, ge),
									(ge.length = 0),
									(be = Date.now());
							},
							Le = () => {
								Date.now() - be < 250 || Ce();
							};
						try {
							if (fe === void 0)
								throw new Error("Failed to get current file info");
							const Fe = {
								uri: te,
								generationUUID: ee,
								currentRange: ue,
								originalTextLines: fe,
								prompt: "hi4",
								isHidden: !1,
								attachedToPromptBar: !1,
								source: Z ?? e.$a0b,
								createdAt: Date.now(),
								composerMetadata: Y,
								originalLineTokens: pe,
							};
							(ye = (await se.addActiveDiff(Fe)).id),
								ye !== void 0 &&
									(this.z.set(W, { diffId: ye }), re && re(te, ye));
							let Oe = "";
							for await (const xe of ie) {
								if (
									this.l.nonPersistentStorage.composerState
										.shouldSimulateApplyHanging
								) {
									await new Promise((Ke) => setTimeout(Ke, 1e5));
									continue;
								}
								if (
									this.l.nonPersistentStorage.composerState
										.shouldSimulateApplyError
								)
									throw (
										(this.l.setNonPersistentStorage(
											"composerState",
											"shouldSimulateApplyError",
											!1,
										),
										new Error("Simulated apply error"))
									);
								yield "";
								const He = xe.cmdKResponse?.response;
								if (
									!(
										He?.case !== "editEnd" &&
										He?.case !== "editStart" &&
										He?.case !== "editStream"
									)
								)
									switch (He.case) {
										case "editStart": {
											for (; ve < He.value.startLineNumber; ve++) {
												const Ke = ve - ue.startLineNumber + 1;
												Ke <= fe.length &&
													(ge.push(fe[Ke - 1]), Le(), me.push(fe[Ke - 1]));
											}
											break;
										}
										case "editStream": {
											for (
												Oe += He.value.text;
												Oe.includes(`
`);
											) {
												const Ke = Oe.slice(
													0,
													Oe.indexOf(`
`),
												);
												ge.push(Ke),
													Le(),
													me.push(Ke),
													(Oe = Oe.slice(
														Oe.indexOf(`
`) + 1,
													));
											}
											break;
										}
										case "editEnd": {
											Oe.length > 0 && (ge.push(Oe), Le(), me.push(Oe)),
												(Oe = ""),
												(ve = He.value.endLineNumberExclusive);
											break;
										}
									}
							}
							for (; ve <= fe.length; ve++)
								ge.push(fe[ve - 1]), Le(), me.push(fe[ve - 1]);
							Ce(), ($e = !0), ye !== void 0 && se.finishDiffSuccess(ye);
						} catch (Fe) {
							console.error(
								"[balta] error in handleSlashEditResponseSingleDiffPure",
								Fe,
							);
						} finally {
							if ($e) {
								if ((yield " done!", fe !== void 0)) {
									const Fe = await this.m.computeLinesDiff(fe, me, {
										ignoreTrimWhitespace: !1,
										computeMoves: !1,
										maxComputationTimeMs: 500,
										...le,
									});
									let Oe = Fe.changes;
									Fe.hitTimeout &&
										(Oe = [new k.$CL(ue, new p.$rL(1, me.length + 1), void 0)]);
									const xe = Oe.map((Ke) => ({
										original: Ke.original,
										modified: me.slice(
											Ke.modified.startLineNumber - 1,
											Ke.modified.endLineNumberExclusive - 1,
										),
									}));
									oe?.(xe),
										X &&
											this.u.setChatData(
												"tabs",
												(Ke, Je) => Ke.tabId === X.tabId,
												"bubbles",
												(Ke) => Ke.id === X.aiBubbleId && Ke.type === "ai",
												"suggestedDiffs",
												[
													new L.$9A({
														relativeWorkspacePath:
															ne.currentFile?.relativeWorkspacePath ?? "",
														chunks: Oe.map((Ke) => {
															let Je = new L.$0A();
															return (
																(Je.oldLines = fe.slice(
																	Ke.original.startLineNumber - 1,
																	Ke.original.endLineNumberExclusive - 1,
																)),
																(Je.newLines = me.slice(
																	Ke.modified.startLineNumber - 1,
																	Ke.modified.endLineNumberExclusive - 1,
																)),
																(Je.oldRange = new T.$Ms({
																	startLineNumber: Ke.original.startLineNumber,
																	endLineNumberInclusive:
																		Ke.original.endLineNumberExclusive - 1,
																})),
																(Je.newRange = new T.$Ms({
																	startLineNumber: Ke.modified.startLineNumber,
																	endLineNumberInclusive:
																		Ke.modified.endLineNumberExclusive - 1,
																})),
																Je
															);
														}),
													}).toJson(),
												],
											);
								}
							} else yield " failed.", ae?.();
							_.abort(),
								$e || (ye !== void 0 && (Ce(), se.cancelDiff(ye))),
								(ye === void 0 ||
									this.l.nonPersistentStorage.inlineDiffs.find(
										(Fe) => Fe.id === ye,
									) === void 0) &&
									X &&
									this.l.setNonPersistentStorage(
										"nonPersistentChatMetadata",
										({ bubbleId: Fe, tabId: Oe }) =>
											Fe === X.bubbleId && Oe === X.tabId,
										"editUuid",
										void 0,
									);
						}
					}
					async *handleSlashEditResponseSingleDiff({
						eol: J,
						editUuid: W,
						generationMetadata: X,
						composerMetadata: Y,
						streamer: ie,
						request: ne,
						generationUUID: ee,
						abortController: _,
						uri: te,
						lineRange: Q,
						source: Z,
						inlineDiffServiceLookalike: se,
						onCreateInlineDiff: re,
						linesDiffComputerOptions: le,
						onFinish: oe,
						onFailed: ae,
					}) {
						let pe = !1,
							$e;
						yield "Performing edit...";
						const ye =
								Q ??
								new p.$rL(
									1,
									(ne.currentFile?.contents.split(J).length ?? 1) + 1,
								),
							ue = ne.currentFile?.contents
								.split(J)
								.slice(ye.startLineNumber - 1, ye.endLineNumberExclusive - 1);
						se && ne.currentFile && se.usedCurrentFileInfo(ne.currentFile);
						const fe = [];
						let me = 1;
						const ve = [];
						let ge = Date.now();
						const be = () => {
								$e !== void 0 && this.o.addLinesToDiff($e, ve),
									(ve.length = 0),
									(ge = Date.now());
							},
							Ce = () => {
								Date.now() - ge < 250 || be();
							};
						try {
							if (ue === void 0)
								throw new Error("Failed to get current file info");
							const Le = {
								uri: te,
								generationUUID: ee,
								currentRange: ye,
								originalTextLines: ue,
								prompt: "hi5",
								isHidden: !1,
								attachedToPromptBar: !1,
								source: Z ?? e.$a0b,
								createdAt: Date.now(),
								composerMetadata: Y,
							};
							($e = se ? void 0 : (await this.o.addActiveDiff(Le)).id),
								$e !== void 0 &&
									(this.z.set(W, { diffId: $e }), re && re(te, $e));
							let Fe = "";
							for await (const Oe of ie) {
								const xe = Oe.cmdKResponse?.response;
								if (
									!(
										xe?.case !== "editEnd" &&
										xe?.case !== "editStart" &&
										xe?.case !== "editStream"
									)
								)
									switch (xe.case) {
										case "editStart": {
											for (; me < xe.value.startLineNumber; me++) {
												const He = me - ye.startLineNumber + 1;
												He <= ue.length &&
													(ve.push(ue[He - 1]), Ce(), fe.push(ue[He - 1]));
											}
											break;
										}
										case "editStream": {
											for (
												Fe += xe.value.text;
												Fe.includes(`
`);
											) {
												const He = Fe.slice(
													0,
													Fe.indexOf(`
`),
												);
												ve.push(He),
													Ce(),
													fe.push(He),
													(Fe = Fe.slice(
														Fe.indexOf(`
`) + 1,
													));
											}
											break;
										}
										case "editEnd": {
											Fe.length > 0 && (ve.push(Fe), Ce(), fe.push(Fe)),
												(Fe = ""),
												(me = xe.value.endLineNumberExclusive);
											break;
										}
									}
							}
							for (; me <= ue.length; me++)
								ve.push(ue[me - 1]), Ce(), fe.push(ue[me - 1]);
							be(), (pe = !0), $e !== void 0 && this.o.finishDiffSuccess($e);
						} finally {
							if (pe) {
								if ((yield " done!", ue !== void 0)) {
									const Le = await this.m.computeLinesDiff(ue, fe, {
										ignoreTrimWhitespace: !1,
										computeMoves: !1,
										maxComputationTimeMs: 500,
										...le,
									});
									let Fe = Le.changes;
									Le.hitTimeout &&
										(Fe = [new k.$CL(ye, new p.$rL(1, fe.length + 1), void 0)]);
									const Oe = Fe.map((He) => ({
										original: He.original,
										modified: fe.slice(
											He.modified.startLineNumber - 1,
											He.modified.endLineNumberExclusive - 1,
										),
									}));
									oe?.(Oe),
										se && se.finish(Oe),
										X &&
											this.u.setChatData(
												"tabs",
												(He, Ke) => He.tabId === X.tabId,
												"bubbles",
												(He) => He.id === X.aiBubbleId && He.type === "ai",
												"suggestedDiffs",
												[
													new L.$9A({
														relativeWorkspacePath:
															ne.currentFile?.relativeWorkspacePath ?? "",
														chunks: Fe.map((He) => {
															let Ke = new L.$0A();
															return (
																(Ke.oldLines = ue.slice(
																	He.original.startLineNumber - 1,
																	He.original.endLineNumberExclusive - 1,
																)),
																(Ke.newLines = fe.slice(
																	He.modified.startLineNumber - 1,
																	He.modified.endLineNumberExclusive - 1,
																)),
																(Ke.oldRange = new T.$Ms({
																	startLineNumber: He.original.startLineNumber,
																	endLineNumberInclusive:
																		He.original.endLineNumberExclusive - 1,
																})),
																(Ke.newRange = new T.$Ms({
																	startLineNumber: He.modified.startLineNumber,
																	endLineNumberInclusive:
																		He.modified.endLineNumberExclusive - 1,
																})),
																Ke
															);
														}),
													}).toJson(),
												],
											);
								}
							} else yield " failed.", ae?.();
							_.abort(),
								pe ||
									($e !== void 0
										? (be(), this.o.cancelDiff($e))
										: se && se.cancel()),
								se === void 0 &&
									($e === void 0 ||
										this.l.nonPersistentStorage.inlineDiffs.find(
											(Le) => Le.id === $e,
										) === void 0) &&
									X &&
									this.l.setNonPersistentStorage(
										"nonPersistentChatMetadata",
										({ bubbleId: Le, tabId: Fe }) =>
											Le === X.bubbleId && Fe === X.tabId,
										"editUuid",
										void 0,
									);
						}
					}
					async A({
						streamer: J,
						request: W,
						generationUUID: X,
						abortController: Y,
						uri: ie,
					}) {
						const ne = new a.$Zc();
						try {
							const ee = await this.n.createModelReference(ie);
							ne.add(ee);
							const _ = new h.$59b(ee, [
								ee.object.textEditorModel.getFullModelRange(),
							]);
							ne.add(_);
							const te = new Map(),
								Q = new Set(),
								Z = W.currentFile?.contents.split(`
`) ?? [""],
								se = Z.length;
							for await (const re of J) {
								const le = re.cmdKResponse?.response;
								if (
									(le?.case !== "editEnd" &&
										le?.case !== "editStart" &&
										le?.case !== "editStream") ||
									Q.has(le.value.editId)
								)
									continue;
								let oe = te.get(le.value.editId),
									ae = oe?.diffId,
									pe = oe?.active;
								switch (le.case) {
									case "editStart": {
										if (ae !== void 0 || pe !== void 0)
											throw new Error("BAD BAD BAD YELL AT ARVID PLS");
										let $e = _.getUpdatedLineNumber(le.value.startLineNumber),
											ye = le.value.maxEndLineNumberExclusive
												? _.getUpdatedLineNumber(
														le.value.maxEndLineNumberExclusive,
													)
												: void 0;
										if (
											(ye === null &&
												le.value.maxEndLineNumberExclusive !== void 0 &&
												((ye = _.getUpdatedLineNumber(se)),
												ye !== null && (ye += 1)),
											$e === null &&
												(($e = _.getUpdatedLineNumber(se)),
												$e !== null && ($e += 1)),
											ye === void 0 &&
												((ye = _.getUpdatedLineNumber(se)),
												ye !== null && (ye += 1)),
											$e === null || ye === null)
										) {
											Q.add(le.value.editId),
												console.error(
													"BAD BAD BAD YELL AT ARVID PLS Failed to update line numbers for edit",
													le.value.editId,
												);
											continue;
										}
										const ue = new p.$rL($e, ye),
											fe = Z.slice(le.value.startLineNumber - 1),
											me = {
												uri: ie,
												generationUUID: X,
												currentRange: ue,
												originalTextLines: fe,
												prompt: "hi6",
												isHidden: !1,
												attachedToPromptBar: !1,
											},
											ve = await this.o.addActiveDiff(me);
										te.set(le.value.editId, {
											diffId: ve.id,
											active: !0,
											lineBuffer: "",
											startLine: le.value.startLineNumber,
										}),
											(ae = ve.id),
											ee.object.textEditorModel.setNonPersistentReactiveStorage(
												"topPromptBarData",
												"diffIds",
												(be) => [...be, ve.id],
											),
											(pe = !0),
											te.size === 1 && this.o.revealDiff(ve.id);
										const ge = Array.from(te.values()).map((be) => be.diffId);
										this.potentiallyFold(ge, ve.id);
										break;
									}
									case "editStream": {
										const $e = te.get(le.value.editId);
										if ($e === void 0)
											throw new Error("BAD BAD BAD YELL AT ARVID PLS");
										for (
											$e.lineBuffer += le.value.text;
											$e.lineBuffer.includes(`
`);
										) {
											const ye = $e.lineBuffer.slice(
												0,
												$e.lineBuffer.indexOf(`
`),
											);
											this.o.addLineToDiff($e.diffId, ye),
												($e.lineBuffer = $e.lineBuffer.slice(
													$e.lineBuffer.indexOf(`
`) + 1,
												));
										}
										break;
									}
									case "editEnd": {
										const $e = te.get(le.value.editId);
										if ($e === void 0)
											throw new Error("BAD BAD BAD YELL AT ARVID PLS");
										$e.lineBuffer.length > 0 &&
											this.o.addLineToDiff($e.diffId, $e.lineBuffer);
										const ye =
											this.l.nonPersistentStorage.inlineDiffs.find(
												(Le) => Le.id === ae,
											)?.currentRange.startLineNumber ?? null;
										if (ye === null)
											throw new Error("BAD BAD BAD YELL AT ARVID PLS");
										const ue = (0, g.$57b)(
												this.l.nonPersistentStorage.inlineDiffs.find(
													(Le) => Le.id === ae,
												),
											),
											fe = le.value.endLineNumberExclusive,
											me = _.getUpdatedLineNumber(fe) ?? Z.length,
											ve = new p.$rL(ye, me),
											ge = Z.slice($e.startLine, fe);
										this.o.rejectDiff($e.diffId),
											ee.object.textEditorModel.setNonPersistentReactiveStorage(
												"topPromptBarData",
												"diffIds",
												(Le) => Le.filter((Fe) => Fe !== $e.diffId),
											);
										const be = {
												uri: ie,
												generationUUID: X,
												currentRange: ve,
												originalTextLines: ge,
												prompt: "hi",
												isHidden: !1,
												attachedToPromptBar: !1,
											},
											Ce = await this.o.addActiveDiff(be);
										(ae = Ce.id),
											ee.object.textEditorModel.setNonPersistentReactiveStorage(
												"topPromptBarData",
												"diffIds",
												(Le) => [...Le, Ce.id],
											);
										for (const Le of ue) this.o.addLineToDiff(Ce.id, Le);
										this.o.finishDiffSuccess(ae);
										break;
									}
								}
							}
						} finally {
							ne.dispose(), Y.abort();
						}
					}
					async cancelEdit(J) {
						const W = await this.n.createModelReference(J);
						try {
							const X =
								W.object.textEditorModel.nonPersistentReactiveStorage
									.topPromptBarData.lastGenerationUUID;
							X !== void 0 &&
								this.l.setNonPersistentStorage("inprogressAIGenerations", (Y) =>
									Y.filter((ie) => ie.generationUUID !== X),
								);
						} finally {
							W.dispose();
						}
						this.t.executeCommand("editor.unfoldAll");
					}
					async acceptEdit(J) {
						this.x.trackEvent("composer.accept_diff", { source: "editor" }),
							await this.cancelEdit(J);
						const W = await this.n.createModelReference(J);
						try {
							const X = (0, o.$89b)(W.object.textEditorModel, this.l);
							for (let Y = 0; Y < X.length; Y++)
								this.o.acceptDiff(X[Y], { dontBreakConsolidation: Y !== 0 });
						} finally {
							W.dispose();
						}
						this.t.executeCommand("editor.unfoldAll");
					}
					async hasRunningOrPendingEdit(J) {
						const W = await this.n.createModelReference(J);
						try {
							return !!(
								(0, o.$89b)(W.object.textEditorModel, this.l).length > 0 ||
								(0, o.$99b)(W.object.textEditorModel, this.l)
							);
						} finally {
							W.dispose();
						}
					}
					async clearAndMoveFocusToEditor(J) {
						const W = await this.n.createModelReference(J);
						try {
							(await this.hasRunningOrPendingEdit(J)) ||
								(W.object.textEditorModel.nonPersistentReactiveStorage.topPromptBarData.userBubbleDelegate.clear(),
								W.object.textEditorModel.setNonPersistentReactiveStorage(
									"topPromptBarData",
									"shown",
									!1,
								),
								W.object.textEditorModel.setNonPersistentReactiveStorage(
									"topPromptBarData",
									"initText",
									"",
								));
						} finally {
							W.dispose();
						}
						await new Promise((X) => setTimeout(X, 10)),
							this.q.activeEditorPane?.focus();
					}
					async maybeCancelAndDefinitelyRejectEdit(J) {
						await this.cancelEdit(J);
						const W = await this.n.createModelReference(J);
						try {
							const X = (0, o.$89b)(W.object.textEditorModel, this.l);
							for (let Y = 0; Y < X.length; Y++)
								this.o.rejectDiff(X[Y], { dontBreakConsolidation: Y !== 0 });
						} finally {
							W.dispose();
						}
						this.t.executeCommand("editor.unfoldAll");
					}
					async performMultiFileFastEdit({
						aiReferencedCodeBlockURIs: J,
						conversationHistory: W,
						generationMetadata: X,
						generationUUID: Y,
						dontAddConversationChunks: ie,
						onCreateInlineDiff: ne,
					}) {
						const [ee, _] = this.g.registerNewGeneration({
								metadata: X ? { ...X, type: "apply" } : { type: "apply" },
								generationUUID: Y,
							}),
							te = J,
							Q = W.filter(
								($e) => $e.type === L.ConversationMessage_MessageType.HUMAN,
							).at(-1);
						Q &&
							!ie &&
							Q.attachedCodeChunks.forEach(($e) => {
								te.push(this.v.resolveRelativePath($e.relativeWorkspacePath));
							}),
							this.j.publicLogCapture("Submitted multi file fast edit");
						const Z = this.g.getModelDetails({
							specificModelField: "regular-chat",
						});
						let se = [];
						if (te.length > 0)
							for (const $e of te) {
								const ye = await this.n.createModelReference($e);
								try {
									se.push({
										currentFileInfo: new T.$Ws({
											contents: ye.object.textEditorModel.getValue(),
											relativeWorkspacePath: this.v.asRelativePath($e),
											contentsStartAtLine: 1,
											dataframes: [],
											diagnostics: [],
											languageId: "",
											totalNumberOfLines:
												ye.object.textEditorModel.getLineCount(),
											cursorPosition: void 0,
											selection: void 0,
										}),
										uri: $e,
									});
								} finally {
									ye.dispose();
								}
							}
						const re = {
							currentFile: void 0,
							conversation: W,
							modelDetails: Z,
							explicitContext: await this.g.getExplicitContext(),
							summary: "",
							summaryUpUntilIndex: 0,
							isCmdI: !1,
							files: se.map(($e) => $e.currentFileInfo),
							useFastApply: !1,
							fastApplyModelType: u.SlashEditRequest_FastApplyModelType.DEFAULT,
						};
						if (re.files.length === 0)
							throw new Error("Failed to find files to edit");
						const oe = (await this.g.aiClient()).slashEdit(re, {
								signal: _.signal,
								headers: (0, D.$m6b)(Y),
							}),
							ae = this.handleMultiFileSlashEditResponse({
								streamer: oe,
								generationUUID: Y,
								abortController: _,
								files: se,
								onCreateInlineDiff: ne,
							}),
							pe = M.$q0.typeName + "/" + M.$q0.methods.slashEdit.name;
						return this.g.streamResponse({
							modelDetails: Z,
							generationUUID: Y,
							source: "chat",
							streamer: ae,
							streamerURL: pe,
							rethrowCancellation: !0,
							rerun: () => {},
						});
					}
					async *handleMultiFileSlashEditResponse({
						streamer: J,
						generationUUID: W,
						abortController: X,
						files: Y,
						onCreateInlineDiff: ie,
					}) {
						try {
							let ne = {};
							const ee = (Q) => {
									Q.diffId !== void 0 &&
										(this.o.addLinesToDiff(Q.diffId, Q.diffLinesBuffer),
										(Q.diffLinesBuffer.length = 0),
										(Q.diffBufferLastFlushedAt = Date.now()));
								},
								_ = () => {
									Object.values(ne).forEach((Q) => {
										Date.now() - Q.diffBufferLastFlushedAt < 250 || ee(Q);
									});
								};
							yield `Performing multi-file edit on ${Y.map((Q) => (0, A.$sc)(Q.currentFileInfo.relativeWorkspacePath)).join(", ")}...`;
							let te;
							try {
								for await (const Q of J) {
									const Z = Q.cmdKResponse?.response;
									if (
										Z?.case !== "editEnd" &&
										Z?.case !== "editStart" &&
										Z?.case !== "editStream"
									)
										continue;
									const se = Z.value.filePath;
									if (se === void 0) continue;
									if (!(se in ne) && Z.case !== "editEnd") {
										const le = Y.find(
											(fe) => fe.currentFileInfo.relativeWorkspacePath === se,
										);
										if (le === void 0) continue;
										let oe = `
`;
										const ae = await this.n.createModelReference(le.uri);
										try {
											oe = ae.object.textEditorModel.getEOL();
										} finally {
											ae.dispose();
										}
										const pe = le.currentFileInfo.contents.split(oe);
										if (pe === void 0)
											throw new Error("Failed to get current file info");
										const $e = new p.$rL(1, pe.length + 1),
											ye = {
												uri: le.uri,
												generationUUID: W,
												currentRange: $e,
												originalTextLines: pe,
												prompt: "hi",
												isHidden: !1,
												attachedToPromptBar: !1,
												source: e.$_9b,
												createdAt: Date.now(),
											},
											ue = await this.o.addActiveDiff(ye);
										ie && ie(le.uri, ue.id),
											(ne[se] = {
												handler: ue,
												diffId: ue.id,
												currentFileLines: pe,
												newFileLines: [],
												nextFileLineNumber: 1,
												lineBuffer: "",
												diffBufferLastFlushedAt: Date.now(),
												diffLinesBuffer: [],
											});
									}
									const re = ne[se];
									if (re !== void 0) {
										if (te !== void 0 && te !== se) {
											const le = ne[te];
											if (le !== void 0) {
												for (
													;
													le.nextFileLineNumber <= le.currentFileLines.length;
													le.nextFileLineNumber++
												)
													le.diffLinesBuffer.push(
														le.currentFileLines[le.nextFileLineNumber - 1],
													),
														le.newFileLines.push(
															le.currentFileLines[le.nextFileLineNumber - 1],
														);
												ee(le);
											}
										}
										switch (((te = se), Z.case)) {
											case "editStart": {
												for (
													;
													re.nextFileLineNumber < Z.value.startLineNumber;
													re.nextFileLineNumber++
												)
													re.newFileLines.push(
														re.currentFileLines[re.nextFileLineNumber - 1],
													),
														re.diffLinesBuffer.push(
															re.currentFileLines[re.nextFileLineNumber - 1],
														);
												ee(re);
												break;
											}
											case "editStream": {
												for (
													re.lineBuffer += Z.value.text;
													re.lineBuffer.includes(`
`);
												) {
													const le = re.lineBuffer.slice(
														0,
														re.lineBuffer.indexOf(`
`),
													);
													re.newFileLines.push(le),
														re.diffLinesBuffer.push(le),
														_(),
														(re.lineBuffer = re.lineBuffer.slice(
															re.lineBuffer.indexOf(`
`) + 1,
														));
												}
												break;
											}
											case "editEnd": {
												re.lineBuffer.length > 0 &&
													(re.newFileLines.push(re.lineBuffer),
													re.diffLinesBuffer.push(re.lineBuffer),
													ee(re),
													(re.lineBuffer = "")),
													re.nextFileLineNumber <
														Z.value.endLineNumberExclusive &&
														(re.nextFileLineNumber =
															Z.value.endLineNumberExclusive);
												break;
											}
										}
									}
								}
								for (const Q of Y) {
									const Z = ne[Q.currentFileInfo.relativeWorkspacePath];
									if (Z !== void 0) {
										for (
											Z.lineBuffer.length > 0 &&
											(Z.diffLinesBuffer.push(Z.lineBuffer),
											Z.newFileLines.push(Z.lineBuffer));
											Z.nextFileLineNumber <= Z.currentFileLines.length;
											Z.nextFileLineNumber++
										)
											Z.diffLinesBuffer.push(
												Z.currentFileLines[Z.nextFileLineNumber - 1],
											),
												Z.newFileLines.push(
													Z.currentFileLines[Z.nextFileLineNumber - 1],
												),
												await new Promise((se) => setTimeout(se, 10));
										ee(Z), this.o.finishDiffSuccess(Z.handler.id);
									}
								}
							} finally {
								for (const Q of Y) {
									const Z = ne[Q.currentFileInfo.relativeWorkspacePath];
									if (Z !== void 0 && Z.currentFileLines !== void 0) {
										const se = I.$qxb
											.getDefault()
											.computeDiff(Z.currentFileLines, Z.newFileLines, {
												ignoreTrimWhitespace: !1,
												computeMoves: !1,
												maxComputationTimeMs: 500,
											});
										let re = se.changes;
										se.hitTimeout &&
											(re = [
												new k.$CL(
													new p.$rL(1, Z.currentFileLines.length + 1),
													new p.$rL(1, Z.newFileLines.length + 1),
													void 0,
												),
											]);
									}
								}
								yield ` done!

(Tip: use /followUp to further modify the changes!)`,
									X.abort();
							}
						} finally {
							this.l.setNonPersistentStorage("inprogressAIGenerations", (ne) =>
								ne.filter((ee) => ee.generationUUID !== W),
							);
						}
					}
					async performFollowUpOnChanges({
						conversationHistory: J,
						generationMetadata: W,
						generationUUID: X,
					}) {
						const [Y, ie] = this.g.registerNewGeneration({
								metadata: W ? { ...W, type: "apply" } : { type: "apply" },
								generationUUID: X,
							}),
							ne = this.l.nonPersistentStorage.inlineDiffs.filter(
								(oe) => oe.source === e.$_9b || oe.source === e.$a0b,
							);
						if (ne.length === 0) return;
						const ee = [];
						for (const oe of ne) {
							const ae = this.o.getGroupedChanges({ diffId: oe.id });
							for (const pe of ae) ee.push({ sortedChanges: pe, uri: oe.uri });
						}
						const _ = [];
						for (const oe of ee) {
							const ae = oe.sortedChanges.at(0),
								pe = oe.sortedChanges.at(-1);
							if (ae === void 0 || pe === void 0) continue;
							const $e = [];
							let ye = [];
							const ue = await this.n.createModelReference(oe.uri);
							try {
								const fe = ue.object.textEditorModel,
									me = Math.max(ae.addedRange.startLineNumber - 5, 1),
									ve = Math.min(
										pe.addedRange.endLineNumberExclusive + 5,
										fe.getLineCount(),
									);
								let ge = me;
								for (const Ce of oe.sortedChanges) {
									if (ge < Ce.addedRange.startLineNumber) {
										const Le = fe
											.getLinesContent()
											.slice(ge, Ce.addedRange.startLineNumber - 1);
										$e.push(...Le);
									}
									$e.push(...Ce.removedTextLines),
										(ge = Ce.addedRange.endLineNumberExclusive - 1);
								}
								const be = fe.getLinesContent().slice(ge, ve);
								$e.push(...be),
									(ye = fe.getLinesContent().slice(me, ve)),
									_.push({
										originalLines: $e,
										newLines: ye,
										range: {
											startLineNumber: me,
											endLineNumberInclusive: ve - 1,
										},
										relativeWorkspacePath: this.v.asRelativePath(oe.uri),
									});
							} finally {
								ue.dispose();
							}
						}
						const te = await this.g.aiClient(),
							Q = this.g.getModelDetails({
								specificModelField: "regular-chat",
							}),
							Z = { conversation: J, modelDetails: Q, previousEdits: _ },
							se = te.slashEditFollowUpWithPreviousEdits(Z, {
								signal: ie.signal,
								headers: (0, D.$m6b)(X),
							}),
							re = this.handleFollowUp({
								streamer: se,
								generationUUID: X,
								abortController: ie,
								conversationHistory: J,
								generationMetadata: W,
							}),
							le = M.$q0.typeName + "/" + M.$q0.methods.slashEdit.name;
						return this.g.streamResponse({
							modelDetails: Q,
							generationUUID: X,
							source: "chat",
							streamer: re,
							streamerURL: le,
							rethrowCancellation: !0,
							rerun: () => {},
						});
					}
					async *handleFollowUp({
						streamer: J,
						generationUUID: W,
						abortController: X,
						conversationHistory: Y,
						generationMetadata: ie,
					}) {
						try {
							let ne = "";
							for await (let ee of J)
								if (ee.response.case === "chat")
									(ne += ee.response.value.text), yield ee.response.value.text;
								else if (ee.response.case === "editsToUpdate") {
									X.abort(),
										Y.push(
											new L.$SA({
												text: ne,
												type: L.ConversationMessage_MessageType.AI,
											}),
										),
										Y.push(
											new L.$SA({
												text: "apply the changes that were just described to the following selection, if relevant",
												type: L.ConversationMessage_MessageType.HUMAN,
											}),
										);
									const _ = Array.from(
										new Set(
											ee.response.value.previousEdits.map((Q) =>
												this.v.resolveRelativePath(Q.relativeWorkspacePath),
											),
										),
									);
									for (const Q of _) {
										const Z = async (pe) => {
												const $e = [];
												let ye = [];
												const ue = pe[0],
													fe = pe[pe.length - 1];
												let me = ue.addedRange.startLineNumber,
													ve = await this.n.createModelReference(Q);
												try {
													const ge = ve.object.textEditorModel;
													for (const be of pe) {
														if (me < be.addedRange.startLineNumber) {
															const Ce = ge
																.getLinesContent()
																.slice(me, be.addedRange.startLineNumber - 1);
															$e.push(...Ce);
														}
														$e.push(...be.removedTextLines),
															(me = be.addedRange.endLineNumberExclusive);
													}
													ye = ge
														.getLinesContent()
														.slice(
															ue.addedRange.startLineNumber,
															fe.addedRange.endLineNumberExclusive,
														);
												} finally {
													ve.dispose();
												}
												return { originalLines: $e, newLines: ye };
											},
											se = this.l.nonPersistentStorage.inlineDiffs.filter(
												(pe) =>
													P.$dh.isEqual(pe.uri, Q) &&
													(pe.source === e.$_9b || pe.source === e.$a0b),
											),
											re = se
												.flatMap((pe) => pe.changes)
												.sort(
													(pe, $e) =>
														pe.addedRange.startLineNumber -
														$e.addedRange.startLineNumber,
												);
										let le = 0;
										const oe = [],
											ae = ee.response.value.previousEdits
												.filter((pe) =>
													P.$dh.isEqual(
														this.v.resolveRelativePath(
															pe.relativeWorkspacePath,
														),
														Q,
													),
												)
												.sort(
													(pe, $e) =>
														pe.range?.startLineNumber ??
														1 - ($e.range?.startLineNumber ?? 1),
												);
										for (const pe of ae) {
											if (!pe.range) continue;
											const $e = [];
											for (; le < re.length; ) {
												const ye = re[le];
												if (
													ye.addedRange.endLineNumberExclusive <=
													pe.range.startLineNumber
												)
													$e.push(ye);
												else if (
													ye.addedRange.startLineNumber >
													pe.range.endLineNumberInclusive
												)
													break;
												le += 1;
											}
											if ($e.length > 0) {
												const ye = $e.sort(
														(ve, ge) =>
															ve.addedRange.startLineNumber -
															ge.addedRange.startLineNumber,
													),
													{ originalLines: ue, newLines: fe } = await Z(ye),
													me = {
														uri: Q,
														generationUUID: W,
														currentRange: new p.$rL(
															ye[0].removedLinesOriginalRange.startLineNumber,
															ye[ye.length - 1].removedLinesOriginalRange
																.endLineNumberExclusive,
														),
														originalTextLines: ue,
														isHidden: !1,
														attachedToPromptBar: !1,
														source: e.$_9b,
														createdAt: Date.now(),
														prompt: "hi",
													};
												oe.push({ diff: me, newLines: fe });
											}
										}
										if (le < re.length) {
											const $e = re
													.slice(le)
													.sort(
														(me, ve) =>
															me.addedRange.startLineNumber -
															ve.addedRange.startLineNumber,
													),
												{ originalLines: ye, newLines: ue } = await Z($e),
												fe = {
													uri: Q,
													generationUUID: W,
													currentRange: new p.$rL(
														$e[0].removedLinesOriginalRange.startLineNumber,
														$e[$e.length - 1].removedLinesOriginalRange
															.endLineNumberExclusive,
													),
													originalTextLines: ye,
													isHidden: !1,
													attachedToPromptBar: !1,
													source: e.$_9b,
													createdAt: Date.now(),
													prompt: "hi",
												};
											oe.push({ diff: fe, newLines: ue });
										}
										se.forEach((pe) => this.o.rejectDiff(pe.id));
										for (const { diff: pe, newLines: $e } of oe) {
											const ye = await this.o.addActiveDiff(pe);
											ye.addLinesToDiff($e), this.o.finishDiffSuccess(ye.id);
										}
									}
									const te = [];
									for (const Q of ee.response.value.previousEdits)
										te.push(
											(async () => {
												if (Q.range !== void 0) {
													const Z = await this.performAndYieldChatEdit({
														conversationHistory: Y,
														generationMetadata: ie,
														generationUUID: W,
														options: {
															overrideCurrentFileURI:
																this.v.resolveRelativePath(
																	Q.relativeWorkspacePath,
																),
															overrideLineRange: new p.$rL(
																Q.range.startLineNumber,
																Q.range.endLineNumberInclusive + 1,
															),
															overrideSource: e.$_9b,
															rejectChangesInURI: !1,
														},
													});
													if (Z) for await (const se of Z);
												}
											})(),
										);
									await Promise.all(te);
								}
						} finally {
							this.l.setNonPersistentStorage("inprogressAIGenerations", (ne) =>
								ne.filter((ee) => ee.generationUUID !== W),
							);
						}
					}
					async performFastEdit({ query: J, uri: W }) {
						const [X, Y] = this.g.registerNewGeneration({ metadata: void 0 }),
							ie = new a.$Zc(),
							ne = await this.n.createModelReference(W);
						ie.add(ne),
							ne.object.textEditorModel.setNonPersistentReactiveStorage(
								"topPromptBarData",
								"lastGenerationUUID",
								X,
							);
						try {
							this.j.publicLogCapture("Submitted fast edit");
							const ee = this.g.getModelDetails({
									specificModelField: "regular-chat",
								}),
								_ = new u.$wG({
									query: J,
									currentFile: await this.g.getCurrentFileInfo(W, {
										includeNotebookCells: !0,
									}),
									repositories: this.g.repositories.map((le) => le.repoInfo),
									explicitContext: await this.g.getExplicitContext(),
									workspaceRootPath: this.f.getWorkspaceRootPath(),
									modelDetails: ee,
								});
							if (_.currentFile === void 0)
								throw new Error("Failed to get current file info");
							const te = new h.$59b(ne, [
								ne.object.textEditorModel.getFullModelRange(),
							]);
							this.g.addToPromptHistory({
								prompt: J,
								commandType: C.CommandType.CHAT,
							});
							const Z = (await this.g.aiClient()).streamFastEdit(_, {
									signal: Y.signal,
									headers: (0, D.$m6b)(X),
								}),
								se = new Map(),
								re = new Set();
							for await (const le of Z) {
								if (re.has(le.editUuid)) continue;
								let oe = se.get(le.editUuid),
									ae = oe?.diffId,
									pe = oe?.active;
								if (ae === void 0 || pe === void 0) {
									let $e = te.getUpdatedLineNumber(le.lineNumber),
										ye = te.getUpdatedLineNumber(
											le.lineNumber + le.replaceNumLines,
										);
									if (
										(ye === null &&
											((ye = te.getUpdatedLineNumber(
												_.currentFile.contents.split(`
`).length,
											)),
											ye !== null && (ye += 1)),
										$e === null &&
											(($e = te.getUpdatedLineNumber(
												_.currentFile.contents.split(`
`).length,
											)),
											$e !== null && ($e += 1)),
										$e === null || ye === null)
									) {
										re.add(le.editUuid),
											console.error(
												"BAD BAD BAD YELL AT ARVID PLS Failed to update line numbers for edit",
												le.editUuid,
											);
										continue;
									}
									const ue = new p.$rL($e, ye),
										fe = _.currentFile.contents
											.split(`
`)
											.slice(
												le.lineNumber - 1,
												le.lineNumber + le.replaceNumLines - 1,
											),
										me = {
											uri: W,
											generationUUID: X,
											currentRange: ue,
											originalTextLines: fe,
											prompt: _.query,
											isHidden: !1,
											attachedToPromptBar: !1,
										},
										ve = await this.o.addActiveDiff(me);
									se.set(le.editUuid, { diffId: ve.id, active: !0 }),
										(ae = ve.id),
										ne.object.textEditorModel.setNonPersistentReactiveStorage(
											"topPromptBarData",
											"diffIds",
											(be) => [...be, ve.id],
										),
										(pe = !0),
										se.size === 1 && this.o.revealDiff(ve.id);
									const ge = Array.from(se.values()).map((be) => be.diffId);
									this.potentiallyFold(ge, ve.id);
								}
								pe
									? (le.newLine !== void 0 &&
											this.o.addLineToDiff(ae, le.newLine),
										le.done === !0 &&
											(this.o.finishDiffSuccess(ae),
											se.set(le.editUuid, { diffId: ae, active: !1 })))
									: console.log("Skipping inactive edit FOR NOW", le.editUuid);
							}
						} finally {
							ie.dispose(),
								this.l.setNonPersistentStorage(
									"inprogressAIGenerations",
									(ee) => ee.filter((_) => _.generationUUID !== X),
								);
						}
					}
					async potentiallyFold(J, W) {
						const X = this.l.nonPersistentStorage.inlineDiffs.find(
							(ye) => ye.id === W,
						);
						if (X === void 0) return;
						const Y = J.filter((ye) => ye !== W);
						if (Y.length === 0) return;
						const ie = Y.map((ye) => {
							const ue = this.l.nonPersistentStorage.inlineDiffs.find(
								(be) => be.id === ye,
							);
							if (ue === void 0) return 1 / 0;
							const fe = ue.currentRange,
								me = X.currentRange,
								ve = Math.abs(fe.endLineNumberExclusive - me.startLineNumber),
								ge = Math.abs(fe.startLineNumber - me.endLineNumberExclusive);
							return Math.min(ve, ge);
						});
						let ne = 0,
							ee = ie[0];
						for (let ye = 1; ye < ie.length; ye++)
							ie[ye] < ee && ((ne = ye), (ee = ie[ye]));
						const _ = Y[ne],
							te = this.l.nonPersistentStorage.inlineDiffs.find(
								(ye) => ye.id === _,
							);
						if (te === void 0 || ee < 10) return;
						const Q = this.q.activeEditorPane;
						if (Q === void 0) return;
						const Z = Q.getControl();
						if (Z === void 0 || !(0, s.$0sb)(Z)) return;
						const se = b.$ZNb.get(Z);
						if (!se) return;
						const re = se.getFoldingModel();
						if (!re) return;
						const le = await re;
						if (!le) return;
						const oe =
								X.currentRange.startLineNumber < te.currentRange.startLineNumber
									? X
									: te,
							ae =
								X.currentRange.startLineNumber < te.currentRange.startLineNumber
									? te
									: X,
							pe = {
								startLineNumber: oe.currentRange.endLineNumberExclusive + 5,
								endLineNumber: ae.currentRange.startLineNumber - 5,
								type: void 0,
								isCollapsed: !0,
								source: l.FoldSource.userDefined,
							},
							$e = l.$ANb.sanitizeAndMerge(
								le.regions,
								[pe],
								Z.getModel()?.getLineCount(),
							);
						le.updatePost(l.$ANb.fromFoldRanges($e));
					}
					applyDiffToLines(J, W) {
						const X = [];
						let Y = 0;
						for (let ie = 0; ie < J.length; ie++) {
							const ne = J[ie];
							if (Y < W.length) {
								const { original: ee, modified: _ } = W[Y];
								if (
									ie === ee.startLineNumber - 1 &&
									(X.push(..._),
									Y++,
									ee.endLineNumberExclusive !== ee.startLineNumber)
								) {
									ie += ee.endLineNumberExclusive - ee.startLineNumber - 1;
									continue;
								}
							}
							X.push(ne);
						}
						for (; Y < W.length; ) {
							const { original: ie, modified: ne } = W[Y];
							X.push(...ne), Y++;
						}
						return X;
					}
					B(J) {
						const W = J.split(`
`),
							X = W.findIndex((ne) => ne.trim() !== ""),
							Y = [...W].reverse().findIndex((ne) => ne.trim() !== ""),
							ie = W.length - 1 - Y;
						return X === -1 || Y === -1
							? ""
							: W.slice(X, ie + 1).join(`
`);
					}
					C(J, W) {
						return {
							[Symbol.asyncIterator]: async function* () {
								yield new u.$qG({
									cmdKResponse: new F.$KC({
										response: {
											case: "editStart",
											value: new F.$LC({ startLineNumber: 1 }),
										},
									}),
								}),
									yield new u.$qG({
										cmdKResponse: new F.$KC({
											response: {
												case: "editStream",
												value: new F.$MC({ text: J, editId: 0 }),
											},
										}),
									}),
									yield new u.$qG({
										cmdKResponse: new F.$KC({
											response: {
												case: "editEnd",
												value: new F.$NC({
													editId: 0,
													endLineNumberExclusive:
														W.split(`
`).length + 2,
												}),
											},
										}),
									});
							},
						};
					}
				};
				(G = Ne(
					[
						j(0, n.$36b),
						j(1, r.$Nfc),
						j(2, d.$Z6b),
						j(3, E.$km),
						j(4, m.$a9b),
						j(5, w.$0zb),
						j(6, R.$Cxb),
						j(7, c.$MO),
						j(8, g.$27b),
						j(9, f.$IY),
						j(10, y.$ek),
						j(11, S.$kgc),
						j(12, N.$Vi),
						j(13, B.$GN),
						j(14, i.$Li),
						j(15, q.$ifc),
						j(16, V.IComposerDataService),
					],
					G,
				)),
					(0, t.$lK)(e.$$9b, G, t.InstantiationType.Delayed);
			},
		),
		define(
			de[851],
			he([
				1, 0, 193, 58, 27, 3, 12, 19, 47, 56, 46, 65, 383, 48, 71, 61, 534,
				3981, 2934, 31, 10, 8, 5, 43, 45, 32, 35, 155, 68, 108, 480, 1051, 18,
				17,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
			) {
				"use strict";
				var A;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ddc = void 0),
					(e.$Cdc = R);
				function R(G, K) {
					const J =
						G.nonPersistentStorage.multiEditState.inprogressEdits.filter(
							(W) => W.generationUUID !== K && W.generationUUID + "-diff" !== K,
						);
					return G.setNonPersistentStorage({
						multiEditState: {
							...G.nonPersistentStorage.multiEditState,
							inprogressEdits: J,
						},
					});
				}
				class O extends u.$itb {
					constructor() {
						super({
							id: p.$07b,
							label: "Accept All Edits",
							alias: "Accept All Edits",
							precondition: l.$Kj.or(
								n.EditorContextKeys.editorHasPromptBar.isEqualTo(!0),
								n.EditorContextKeys.hasDisplayedDiff,
							),
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyCode.Shift | w.KeyCode.Enter,
								weight: $.KeybindingWeight.CursorDefaultPriority,
							},
						});
					}
					run(K, J, W) {
						K.get(S.$km).publicLogCapture("Accepted Diff");
						const X = K.get(v.$0zb);
						K.get(S.$km).publicLogCapture(
							"did.edit.accepted." +
								X.applicationUserPersistentStorage.aiSettings.openAIModel,
						),
							K.get(a.$dtb)
								.listCodeEditors()
								.forEach((ne) => {
									H.get(ne)?.acceptSuggestion(W, "both");
								});
					}
				}
				(0, u.$ntb)(O);
				class B extends u.$itb {
					constructor() {
						super({
							id: p.$f8b,
							label: "View All Changes",
							alias: "View All Changes",
							precondition: l.$Kj.or(
								n.EditorContextKeys.editorHasPromptBar.isEqualTo(!0),
								n.EditorContextKeys.hasDisplayedDiff,
							),
						});
					}
					async run(K, J) {
						const W = K.get(v.$0zb),
							X = K.get(M.$IY),
							Y = W.nonPersistentStorage.inlineDiffs.filter(
								(ne) => ne.source === L.$_9b || ne.source === L.$a0b,
							);
						if (Y.length === 0) return;
						const ie = { resources: Y.map((ne) => ne.uri) };
						await X.openEditor(ie);
					}
				}
				(0, u.$ntb)(B);
				function U(G, K) {
					const J = G.activeEditorPane?.getControl();
					let W;
					const X = (0, k.$eJb)(G.activeEditorPane);
					if (X) {
						const Y = X.getActiveCell()?.textModel;
						if (Y) W = Y;
						else return !1;
					} else if ((0, r.$0sb)(J)) {
						if (!J.hasModel()) return !1;
						W = J.getModel();
					} else return !1;
					return K.nonPersistentStorage.inlineDiffs.some((Y) =>
						d.$dh.isEqual(Y.uri, W.uri),
					);
				}
				D.$Bdc.registerEditorAction(p.$97b, (G, K) => {
					(0, u.$ntb)(
						class extends u.$itb {
							constructor() {
								super({
									id: p.$97b,
									label: "Accept Edits",
									alias: "Accept Edits",
									precondition: l.$Kj.function(() => U(K, G)),
									kbOpts: {
										kbExpr: n.EditorContextKeys.editorTextFocus,
										primary: w.KeyMod.CtrlCmd | w.KeyCode.Enter,
										weight: $.KeybindingWeight.CursorDefaultPriority,
									},
								});
							}
							run(W, X, Y) {
								const ie = W.get(v.$0zb),
									ne = W.get(S.$km);
								ne.publicLogCapture("Accepted Diff"),
									ne.publicLogCapture("did.edit.accepted", {
										model:
											ie.applicationUserPersistentStorage.aiSettings
												.openAIModel,
									}),
									H.get(X)?.acceptSuggestion(Y, "both");
							}
						},
					);
				}),
					D.$Bdc.registerEditorAction(p.$$7b, (G, K) => {
						(0, u.$ntb)(
							class extends u.$itb {
								constructor() {
									super({
										id: p.$$7b,
										label: "Accept Partial Edit",
										alias: "Accept Partial Edit",
										precondition: l.$Kj.function(() => U(K, G)),
										kbOpts: {
											kbExpr: n.EditorContextKeys.editorTextFocus,
											primary: C.$l
												? w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.KeyY
												: w.KeyMod.CtrlCmd | w.KeyCode.KeyY,
											weight: $.KeybindingWeight.CursorDefaultPriority,
										},
									});
								}
								run(W, X, Y) {
									W.get(S.$km).publicLogCapture("Accepted Partial Diff");
									const ie = W.get(S.$km),
										ne = W.get(v.$0zb);
									ie.publicLogCapture("did.edit.acceptedpartial", {
										model:
											ne.applicationUserPersistentStorage.aiSettings
												.openAIModel,
									}),
										H.get(X)?.acceptPartialSuggestion(Y, "both");
								}
							},
						);
					});
				class z extends u.$itb {
					constructor() {
						super({
							id: p.$a8b,
							label: "Reject All Edits",
							alias: "Reject All Edits",
							precondition: l.$Kj.or(
								n.EditorContextKeys.editorHasPromptBar.isEqualTo(!0),
								n.EditorContextKeys.hasDisplayedDiff,
							),
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary:
									w.KeyMod.CtrlCmd | w.KeyCode.Shift | w.KeyCode.Backspace,
								weight: $.KeybindingWeight.CursorDefaultPriority,
							},
						});
					}
					run(K, J, W) {
						K.get(S.$km).publicLogCapture("Rejected Diff");
						const X = K.get(v.$0zb);
						K.get(S.$km).publicLogCapture("did.edit.rejected", {
							model: X.applicationUserPersistentStorage.aiSettings.openAIModel,
						}),
							K.get(a.$dtb)
								.listCodeEditors()
								.forEach((ee) => {
									if (
										(H.get(ee)?.rejectSuggestion(W, "both"),
										X.nonPersistentStorage.promptBars.length === 0)
									)
										return;
									const _ = ee.getSelection();
									let te;
									if (!_)
										te =
											X.nonPersistentStorage.promptBars[
												X.nonPersistentStorage.promptBars.length - 1
											].id;
									else {
										let Q = 1 / 0;
										for (const Z of X.nonPersistentStorage.promptBars) {
											const se = ee
												.getModel()
												?.getDecorationRange(Z.currentRangeDecorationId);
											if (!se) continue;
											if (se.intersectRanges(_)) {
												te = Z.id;
												break;
											}
											const re = Math.min(
												Math.abs(_.startLineNumber - se.startLineNumber),
												Math.abs(_.endLineNumber - se.endLineNumber),
											);
											re < Q && ((Q = re), (te = Z.id));
										}
									}
									K.get(b.$ek).executeCommand(i.$iW, te),
										K.get(b.$ek).executeCommand(i.$hW, te);
								});
					}
				}
				(0, u.$ntb)(z),
					D.$Bdc.registerEditorAction(p.$_7b, (G, K) => {
						(0, u.$ntb)(
							class extends u.$itb {
								constructor() {
									super({
										id: p.$_7b,
										label: "Reject Edits",
										alias: "Reject Edits",
										precondition: l.$Kj.function(() => U(K, G)),
										kbOpts: {
											kbExpr: n.EditorContextKeys.editorTextFocus,
											primary: w.KeyMod.CtrlCmd | w.KeyCode.Backspace,
											weight: $.KeybindingWeight.CursorDefaultPriority,
										},
									});
								}
								run(W, X, Y) {
									const ie = W.get(v.$0zb),
										ne = W.get(S.$km);
									if (
										(ne.publicLogCapture("Rejected Diff"),
										ne.publicLogCapture("did.edit.rejected", {
											model:
												ie.applicationUserPersistentStorage.aiSettings
													.openAIModel,
										}),
										H.get(X)?.rejectSuggestion(Y, "both"),
										ie.nonPersistentStorage.promptBars.length === 0)
									)
										return;
									const ee = X.getSelection();
									let _;
									if (!ee)
										_ =
											ie.nonPersistentStorage.promptBars[
												ie.nonPersistentStorage.promptBars.length - 1
											].id;
									else {
										let te = 1 / 0;
										for (const Q of ie.nonPersistentStorage.promptBars) {
											const Z = X.getModel()?.getDecorationRange(
												Q.currentRangeDecorationId,
											);
											if (!Z) continue;
											if (Z.intersectRanges(ee)) {
												_ = Q.id;
												break;
											}
											const se = Math.min(
												Math.abs(ee.startLineNumber - Z.startLineNumber),
												Math.abs(ee.endLineNumber - Z.endLineNumber),
											);
											se < te && ((te = se), (_ = Q.id));
										}
									}
									W.get(b.$ek).executeCommand(i.$iW, _),
										W.get(b.$ek).executeCommand(i.$hW, _);
								}
							},
						);
					}),
					D.$Bdc.registerEditorAction(p.$b8b, (G, K) => {
						(0, u.$ntb)(
							class extends u.$itb {
								constructor() {
									super({
										id: p.$b8b,
										label: "Reject Partial Edit",
										alias: "Reject Partial Edit",
										precondition: l.$Kj.function(() => U(K, G)),
										kbOpts: {
											kbExpr: n.EditorContextKeys.editorTextFocus,
											primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyN,
											weight: $.KeybindingWeight.CursorDefaultPriority,
										},
									});
								}
								run(W, X, Y) {
									const ie = W.get(S.$km),
										ne = W.get(v.$0zb);
									ie.publicLogCapture("Rejected Partial Diff"),
										ie.publicLogCapture("did.edit.rejectedpartial", {
											model:
												ne.applicationUserPersistentStorage.aiSettings
													.openAIModel,
										}),
										H.get(X)?.rejectPartialSuggestion(Y, "both");
								}
							},
						);
					});
				class F extends u.$itb {
					constructor() {
						super({
							id: p.$c8b,
							label: "Cancel Edits",
							alias: "Cancel Edits",
							precondition: n.EditorContextKeys.hasActivelyGeneratingDiff,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyCode.Backspace,
								weight: $.KeybindingWeight.CursorMaxPriority,
							},
						});
					}
					run(K, J, W) {
						K.get(S.$km).publicLogCapture("Cancelled Diff"),
							H.get(J)?.cancelGeneration(W, "both");
					}
				}
				var x;
				(function (G) {
					(G[(G.AllowAll = 0)] = "AllowAll"),
						(G[(G.AllowOnlyNonGenerating = 1)] = "AllowOnlyNonGenerating"),
						(G[(G.AllowOnlyGenerating = 2)] = "AllowOnlyGenerating");
				})(x || (x = {}));
				let H = class extends E.$1c {
					static {
						A = this;
					}
					static {
						this.ID = "editor.contrib.inlineDiffController";
					}
					static get(K) {
						return K.getContribution(A.ID);
					}
					findClosestDiffToCursorId(K, J = "notPromptBar") {
						const W = this.c.getPosition();
						let X = null,
							Y = 1 / 0;
						const ie = this.t.nonPersistentStorage.inlineDiffs.filter(
							(ne) =>
								this.n.isEqual(ne.uri, this.c.getModel()?.uri) &&
								(J === "both" ||
									(J === "promptBar") ===
										this.t.nonPersistentStorage.promptBars.some(
											(ee) => ee.diffId === ne.id,
										)),
						);
						for (const ne of ie) {
							const ee =
								this.t.nonPersistentStorage.inprogressAIGenerations.some(
									(te) => te.generationUUID === ne.generationUUID,
								);
							if (
								(K === x.AllowOnlyNonGenerating && ee) ||
								(K === x.AllowOnlyGenerating && !ee)
							)
								continue;
							if (!W) {
								X = ne.id;
								break;
							}
							const _ = Math.min(
								Math.abs(W.lineNumber - ne.currentRange.startLineNumber),
								Math.abs(
									W.lineNumber - ne.currentRange.endLineNumberExclusive - 1,
								),
							);
							_ < Y && ((Y = _), (X = ne.id));
						}
						return X || null;
					}
					rejectSuggestion(K, J) {
						if (!this.c.hasModel()) return;
						const W =
							K?.id ??
							this.findClosestDiffToCursorId(x.AllowOnlyNonGenerating, J);
						W && this.y.rejectDiff(W);
					}
					acceptSuggestion(K, J) {
						if (!this.c.hasModel()) return;
						const W =
							K?.id ??
							this.findClosestDiffToCursorId(x.AllowOnlyNonGenerating, J);
						W && this.y.acceptDiff(W);
					}
					acceptPartialSuggestion(K, J) {
						if (!this.c.hasModel()) return;
						const W =
							K?.diffId ??
							this.findClosestDiffToCursorId(x.AllowOnlyNonGenerating, J);
						if (!W) return;
						const X = K?.line ? new c.$hL(K.line(), 1) : this.c.getPosition();
						this.y.acceptPartialDiff(W, X);
					}
					rejectPartialSuggestion(K, J) {
						if (!this.c.hasModel()) return;
						const W =
							K?.diffId ??
							this.findClosestDiffToCursorId(x.AllowOnlyNonGenerating, J);
						if (!W) return;
						const X = K?.line ? new c.$hL(K.line(), 1) : this.c.getPosition(),
							Y = this.t.nonPersistentStorage.promptBars.find(
								(ne) => ne.diffId === W,
							);
						this.y.rejectPartialDiff(W, X) &&
							Y &&
							(this.z.executeCommand(i.$iW, Y.id),
							this.z.executeCommand(i.$hW, Y.id));
					}
					cancelGeneration(K, J) {
						const W =
							K?.id ?? this.findClosestDiffToCursorId(x.AllowOnlyGenerating, J);
						W && this.y.cancelDiff(W);
					}
					constructor(K, J, W, X, Y, ie, ne, ee, _, te, Q, Z) {
						super(),
							(this.r = J),
							(this.s = W),
							(this.t = X),
							(this.u = ie),
							(this.w = ne),
							(this.y = ee),
							(this.z = te),
							(this.C = Q),
							(this.F = Z),
							(this.h = 1),
							(this.m = new Map()),
							(this.c = K),
							(this.j = this.D(this.t.createScoped(this))),
							(this.n = _.extUri),
							(this.f = n.EditorContextKeys.hasDisplayedDiff.bindTo(
								K.contextKeyService,
							)),
							(this.g = n.EditorContextKeys.hasActivelyGeneratingDiff.bindTo(
								K.contextKeyService,
							)),
							(this.q = !0),
							this.D(
								this.c.onDidChangeModel((se) => {
									if (this.c.hasModel()) {
										for (const re of this.m.keys()) this.removeDiff(re);
										this.m.clear(), this.showDiffs();
									}
								}),
							),
							this.j.onChangeEffect({
								deps: [
									() => this.t.nonPersistentStorage.inlineDiffs,
									() => this.t.nonPersistentStorage.inprogressAIGenerations,
								],
								onChange: () => {
									this.showDiffs();
								},
							}),
							this.showDiffs(),
							this.D(this.c.onDidChangeCursorPosition(() => this.G())),
							this.D(this.c.onDidScrollChange(() => this.G()));
					}
					G() {
						if (!this.c.hasModel()) return;
						const K = this.c.getModel(),
							J = this.c.getPosition();
						if (!J) return;
						const W = this.t.nonPersistentStorage.inlineDiffs
							.filter((Y) => this.n.isEqual(Y.uri, K.uri))
							.flatMap((Y) =>
								Y.changes.map((ie) => ({
									startLineNumber:
										Y.currentRange.startLineNumber +
										ie.addedRange.startLineNumber -
										1,
									endLineNumber:
										Y.currentRange.startLineNumber +
										ie.addedRange.endLineNumberExclusive -
										1,
								})),
							)
							.sort((Y, ie) => Y.startLineNumber - ie.startLineNumber);
						let X = W.findIndex(
							(Y) =>
								J.lineNumber >= Y.startLineNumber &&
								J.lineNumber <= Y.endLineNumber,
						);
						X === -1 &&
							((X = W.findIndex((Y) => Y.startLineNumber > J.lineNumber)),
							X === -1 && (X = W.length)),
							(this.h = Math.min(Math.max(1, X + 1), W.length));
					}
					getCurrentVisibleChange() {
						return this.h;
					}
					getTotalChanges() {
						if (!this.c.hasModel()) return 0;
						const K = this.c.getModel();
						return this.t.nonPersistentStorage.inlineDiffs
							.filter((J) => this.n.isEqual(J.uri, K.uri))
							.reduce((J, W) => J + W.changes.length, 0);
					}
					navigateToChange(K, J) {
						if (!this.c.hasModel()) return;
						const W = this.c.getModel(),
							X = this.t.nonPersistentStorage.inlineDiffs
								.filter((ne) => d.$dh.isEqual(ne.uri, W.uri))
								.flatMap((ne) =>
									ne.changes.map((ee) => ({
										startLineNumber:
											ne.currentRange.startLineNumber +
											ee.addedRange.startLineNumber -
											1,
										endLineNumber:
											ne.currentRange.startLineNumber +
											ee.addedRange.endLineNumberExclusive -
											1,
									})),
								)
								.sort((ne, ee) => ne.startLineNumber - ee.startLineNumber);
						if (X.length === 0) return;
						let Y;
						if (J !== void 0) Y = J - 1;
						else {
							const ne = this.c.getPosition();
							if (!ne) return;
							Y = X.findIndex(
								(ee) =>
									ne.lineNumber >= ee.startLineNumber &&
									ne.lineNumber <= ee.endLineNumber,
							);
						}
						K === "next"
							? (Y = (Y + 1) % X.length)
							: (Y = (Y - 1 + X.length) % X.length);
						const ie = X[Y];
						this.c.setPosition({ lineNumber: ie.startLineNumber, column: 1 }),
							this.c.revealLineInCenter(ie.startLineNumber);
					}
					async showDiffs() {
						if (!this.c.hasModel()) return;
						const K = this.c.getModel().uri,
							J = this.t.nonPersistentStorage.inlineDiffs,
							W = this.t.nonPersistentStorage.inprogressAIGenerations,
							X = J.filter((ne) => this.n.isEqual(ne.uri, K));
						let Y = !1;
						for (const ne of X) {
							const _ =
								W.some((te) => te.generationUUID === ne.generationUUID) && !0;
							(Y = Y || _), this.showDiff((0, t.unwrap)(ne), _);
						}
						for (const ne of this.m.keys())
							X.some((ee) => ee.id === ne) || this.removeDiff(ne);
						Y ? this.g.set(!0) : this.g.set(!1),
							X.filter(
								(ne) =>
									!this.t.nonPersistentStorage.promptBars.some(
										(ee) => ee.diffId === ne.id,
									),
							).length > 0
								? this.f.set(!0)
								: this.f.set(!1);
					}
					getZoneWidgets(K, J) {
						if (!this.c.hasModel()) return [];
						if (K.hideDeletionViewZones) return [];
						const W = [],
							X = [];
						try {
							for (const Y of K.changes) {
								if (Y.removedTextLines.length === 0 || Y.indentation) continue;
								const ie =
									K.currentRange.startLineNumber +
									Y.addedRange.startLineNumber -
									1 -
									1;
								let ne;
								ie === 0
									? (ne = 1)
									: (ne = this.c.getModel().getLineMaxColumn(ie));
								const ee = `${Y.removedLinesOriginalRange.startLineNumber}-${Y.removedLinesOriginalRange.endLineNumberExclusive}`,
									_ = { lineNumber: ie, column: ne };
								let te = !1;
								for (const Z of J)
									Z.id === ee &&
										((te = !0),
										Z.updatePosition(_),
										Z.updateInnerChanges(Y.relativeInnerChanges),
										W.push(Z),
										X.push(ee));
								const Q = [];
								if (K.originalLineTokens)
									for (const Z of Y.removedTextLines) {
										const se = K.originalLineTokens.find((re) => re.text === Z);
										Q.push(se);
									}
								if (!te) {
									const Z = new f.$wdc(
										ee,
										this.c,
										Y.removedTextLines,
										Q,
										Y.relativeInnerChanges,
										_,
										K.isHidden,
										this.s,
										this.C,
										this.F,
									);
									Z.showWidget(), W.push(Z);
								}
							}
						} catch (Y) {
							console.error("Error creating removed lines widgets!", Y);
						}
						for (const Y of J) X.includes(Y.id) || Y.dispose();
						return W;
					}
					setShowPartialAcceptRejectWidgets(K) {
						this.q = K;
					}
					getRemovedNumLinesInRange(K, J) {
						let W = 0;
						for (const X of this.m.get(K)?.zoneWidgets ?? []) {
							const Y = X.position?.lineNumber;
							Y !== void 0 &&
								Y >= J.startLineNumber &&
								Y <= J.endLineNumber &&
								(W += X.getHeightInLines());
						}
						return W;
					}
					showDiff(K, J) {
						try {
							const W = this.m.get(K.id);
							let X = [];
							W && (X = W.zoneWidgets);
							const Y = W?.partialWidgets ?? [],
								ie = this.getZoneWidgets(K, X),
								ne = [];
							if (!J) for (const ee of K.changes) ne.push(ee);
							if (Y.length > ne.length) {
								for (let ee = ne.length; ee < Y.length; ee++) Y[ee].dispose();
								Y.splice(ne.length, Y.length - ne.length);
							}
							if (this.q)
								try {
									for (let ee = 0; ee < ne.length; ee++)
										ee < Y.length
											? Y[ee].setLine(
													K.currentRange.startLineNumber +
														ne[ee].addedRange.startLineNumber -
														1,
												)
											: Y.push(
													this.r.createInstance(
														o.$vdc,
														K.id + "-partial" + (0, m.$9g)(),
														K.id,
														K.currentRange.startLineNumber +
															ne[ee].addedRange.startLineNumber -
															1,
														K.isHidden,
														this.c,
													),
												);
								} catch (ee) {
									console.error("Error creating partial widgets!", ee);
								}
							this.m.set(K.id, { zoneWidgets: ie, partialWidgets: Y });
						} catch (W) {
							console.error(W);
						}
					}
					removeDiff(K) {
						const J = this.m.get(K);
						if (J) {
							for (const W of J.partialWidgets) W.dispose();
							for (const W of J.zoneWidgets) W.dispose();
							this.m.delete(K);
						}
					}
					focusOnCurrentChange(K) {
						if (!this.c.hasModel()) return;
						const J = this.c.getModel(),
							W = this.t.nonPersistentStorage.inlineDiffs
								.filter((Y) => this.n.isEqual(Y.uri, J.uri))
								.flatMap((Y) =>
									Y.changes.map((ie) => ({
										startLineNumber:
											Y.currentRange.startLineNumber +
											ie.addedRange.startLineNumber -
											1,
										endLineNumber:
											Y.currentRange.startLineNumber +
											ie.addedRange.endLineNumberExclusive -
											1,
									})),
								)
								.sort((Y, ie) => Y.startLineNumber - ie.startLineNumber);
						if (W.length === 0) return;
						const X = W[K - 1];
						X &&
							(this.c.setPosition({ lineNumber: X.startLineNumber, column: 1 }),
							this.c.revealLineInCenter(X.startLineNumber));
					}
				};
				(e.$Ddc = H),
					(e.$Ddc =
						H =
						A =
							Ne(
								[
									j(1, y.$Li),
									j(2, g.$nM),
									j(3, v.$0zb),
									j(4, l.$6j),
									j(5, T.$GN),
									j(6, a.$dtb),
									j(7, h.$27b),
									j(8, P.$Vl),
									j(9, b.$ek),
									j(10, I.$iP),
									j(11, s.$gj),
								],
								H,
							)),
					(0, u.$qtb)(H.ID, H, u.EditorContributionInstantiation.Eventually),
					(0, u.$ntb)(F),
					D.$Bdc.registerEditorAction(p.$g8b, (G, K) => {
						(0, u.$ntb)(
							class extends u.$itb {
								constructor() {
									super({
										id: p.$g8b,
										label: "Go to Next Change",
										alias: "Go to Next Change",
										precondition: l.$Kj.function(() => U(K, G)),
										kbOpts: {
											kbExpr: n.EditorContextKeys.editorTextFocus,
											primary: w.KeyMod.Alt | w.KeyCode.KeyJ,
											weight: $.KeybindingWeight.EditorContrib,
										},
									});
								}
								run(W, X) {
									H.get(X)?.navigateToChange("next");
								}
							},
						);
					}),
					D.$Bdc.registerEditorAction(p.$h8b, (G, K) => {
						(0, u.$ntb)(
							class extends u.$itb {
								constructor() {
									super({
										id: p.$h8b,
										label: "Go to Previous Change",
										alias: "Go to Previous Change",
										precondition: l.$Kj.function(() => U(K, G)),
										kbOpts: {
											kbExpr: n.EditorContextKeys.editorTextFocus,
											primary: w.KeyMod.Alt | w.KeyCode.KeyK,
											weight: $.KeybindingWeight.EditorContrib,
										},
									});
								}
								run(W, X) {
									H.get(X)?.navigateToChange("previous");
								}
							},
						);
					});
				function q(G, K, J) {
					const W = G.getModel();
					if (!W) return;
					const X = G.getPosition();
					if (!X) return;
					const Y = K.nonPersistentStorage.inlineDiffs.filter((ee) =>
						d.$dh.isEqual(ee.uri, W.uri),
					);
					if (Y.length === 0) return;
					const ie = [];
					for (const ee of Y)
						for (const _ of ee.changes) {
							const te =
									ee.currentRange.startLineNumber +
									_.addedRange.startLineNumber -
									1,
								Q =
									ee.currentRange.startLineNumber +
									_.addedRange.endLineNumberExclusive -
									1;
							ie.push(new N.$iL(te, 1, Q, W.getLineMaxColumn(Q)));
						}
					ie.sort((ee, _) => ee.startLineNumber - _.startLineNumber);
					let ne;
					if (J === "next")
						(ne = ie.find((ee) => ee.startLineNumber > X.lineNumber)),
							!ne && ie.length > 0 && (ne = ie[0]);
					else {
						for (let ee = ie.length - 1; ee >= 0; ee--)
							if (ie[ee].endLineNumber < X.lineNumber) {
								ne = ie[ee];
								break;
							}
						!ne && ie.length > 0 && (ne = ie[ie.length - 1]);
					}
					ne &&
						(G.setPosition({ lineNumber: ne.startLineNumber, column: 1 }),
						G.revealLineInCenter(ne.startLineNumber));
				}
				function V(G) {
					return G.nonPersistentStorage.inlineDiffs.length > 0;
				}
				D.$Bdc.registerEditorAction(p.$i8b, (G, K) => {
					(0, u.$ntb)(
						class extends u.$itb {
							constructor() {
								super({
									id: p.$i8b,
									label: "Go to Previous Diff File",
									alias: "Go to Previous Diff File",
									precondition: l.$Kj.function(() => V(G)),
									kbOpts: {
										kbExpr: n.EditorContextKeys.editorTextFocus,
										primary: w.KeyMod.Alt | w.KeyCode.KeyH,
										weight: $.KeybindingWeight.EditorContrib + 1e3,
									},
								});
							}
							run(W, X) {
								const Y = G.nonPersistentStorage.inlineDiffs,
									ie = X.getModel()?.uri;
								if (ie) {
									const ne = Y.findIndex((ee) => d.$dh.isEqual(ee.uri, ie));
									if (ne > 0) {
										const ee = Y[ne - 1];
										K.openEditor({ resource: ee.uri });
									} else if (Y.length >= 1) {
										const ee = Y[Y.length - 1];
										K.openEditor({ resource: ee.uri });
									}
								}
							}
						},
					);
				}),
					D.$Bdc.registerEditorAction(p.$j8b, (G, K) => {
						(0, u.$ntb)(
							class extends u.$itb {
								constructor() {
									super({
										id: p.$j8b,
										label: "Go to Next Diff File",
										alias: "Go to Next Diff File",
										precondition: l.$Kj.function(() => V(G)),
										kbOpts: {
											kbExpr: n.EditorContextKeys.editorTextFocus,
											primary: w.KeyMod.Alt | w.KeyCode.KeyL,
											weight: $.KeybindingWeight.EditorContrib + 1e3,
										},
									});
								}
								run(W, X) {
									const Y = G.nonPersistentStorage.inlineDiffs,
										ie = X.getModel()?.uri;
									if (ie) {
										const ne = Y.findIndex((ee) => d.$dh.isEqual(ee.uri, ie));
										if (ne < Y.length - 1) {
											const ee = Y[ne + 1];
											K.openEditor({ resource: ee.uri });
										} else if (Y.length >= 1) {
											const ee = Y[0];
											K.openEditor({ resource: ee.uri });
										}
									}
								}
							},
						);
					});
			},
		),
		define(
			de[852],
			he([
				1, 0, 33, 136, 3, 59, 19, 9, 47, 383, 196, 74, 42, 204, 31, 20, 5, 90,
				41, 45, 134, 25, 287, 140, 280, 480, 627, 66, 18, 186, 626, 454, 22, 76,
				134, 232, 581,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$U0b = e.$S0b = e.$R0b = void 0),
					(e.$T0b = z);
				const B = 3e5,
					U = 500;
				(e.$R0b = (0, p.$Mi)("aiApplyToFileActionsService")),
					(e.$S0b = "Apply to entire file");
				async function z(H, q) {
					let V;
					try {
						V = await H.createModelReference(q);
						const G = async () =>
							V.object.textEditorModel?.getLanguageId() ?? "plaintext";
						let K = await G();
						for (let J = 0; J < 5 && K === "plaintext"; J++)
							await new Promise((W) => setTimeout(W, 2e3)), (K = await G());
						return K;
					} catch (G) {
						return (
							console.error(
								`[aiApplyToFileActions] Error getting language id for ${q.toString()}:`,
								G,
							),
							"plaintext"
						);
					} finally {
						V && V.dispose();
					}
				}
				async function F(H, q, V) {
					for (let G = 0; G < q + 1; G++)
						try {
							return await H();
						} catch {
							await new Promise((J) => setTimeout(J, V));
						}
				}
				let x = class extends w.$1c {
					constructor(
						q,
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
					) {
						super(),
							(this.g = q),
							(this.h = V),
							(this.j = G),
							(this.m = K),
							(this.n = J),
							(this.q = W),
							(this.r = X),
							(this.s = Y),
							(this.u = ie),
							(this.w = ne),
							(this.y = ee),
							(this.z = _),
							(this.C = te),
							(this.F = Q),
							(this.G = Z),
							(this.H = se),
							(this.I = re),
							(this.J = le),
							(this.O = new E.$Jc(20)),
							(this.P = new E.$Jc(5)),
							(this.isAlreadyCachingCode = 0),
							(this.U = []),
							(this.W = []),
							(this.X = new Map());
						const oe = (ye) => {
								this.N(ye.uri);
							},
							ae = async (ye) => {
								await this.M(ye.uri);
							},
							pe = (ye, ue) => {
								const { diffInfo: fe, isDone: me } = ye;
								me && (ue === "accepted" ? oe(fe) : ae(fe));
							},
							$e = (ye) => {
								ye.accepted ? oe(ye.diffInfo) : ae(ye.diffInfo);
							};
						this.D(this.y.onDidRejectDiff((ye) => ae(ye))),
							this.D(this.y.onDidRemoveDiffFromUndoRedo((ye) => $e(ye))),
							this.D(this.y.onDidAcceptPartialDiff((ye) => pe(ye, "accepted"))),
							this.D(this.y.onDidRejectPartialDiff((ye) => pe(ye, "rejected")));
					}
					async L(q, V) {
						const G = await this.H.exists(q),
							K = [];
						if (!G) {
							let J = q.fsPath;
							for (; J.length > 0; ) {
								const ie = J.split("/").slice(0, -1).join("/");
								if (await this.H.exists(d.URI.file(ie))) break;
								K.push({ uri: d.URI.file(ie) }), (J = ie);
							}
							await this.H.createFile(q, N.$Te.fromString(" "), {
								overwrite: V,
							});
							const W = 10;
							let X = 0;
							for (; !(await this.H.exists(q)) && X < W; )
								await new Promise((ie) => setTimeout(ie, 500)), X++;
							if (X === W)
								return (
									console.error(
										`[aiApplyToFileActions] Failed to create file ${q.toString()} after ${W} attempts`,
									),
									[]
								);
							this.U.push({ uri: q });
							const Y = new Set(this.W.map((ie) => ie.uri.toString()));
							this.W.push(...K.filter((ie) => !Y.has(ie.uri.toString())));
						}
						return K;
					}
					async M(q) {
						if (!this.U.find((G) => G.uri.toString() === q.toString()))
							return !1;
						try {
							const G = this.z.findEditors(q);
							for (const J of G)
								await this.z.revert(J, { force: !0 }),
									await this.z.closeEditor(J);
							await this.H.del(q, { recursive: !0, useTrash: !0 }),
								(this.U = this.U.filter(
									(J) => J.uri.toString() !== q.toString(),
								));
							const K = this.W.filter((J) =>
								q.toString().startsWith(J.uri.toString()),
							);
							for (const J of K)
								(
									(await this.H.resolve(J.uri, { resolveMetadata: !0 }))
										.children ?? []
								).filter((Y) => !Y.isDirectory).length === 0 &&
									(await this.H.del(J.uri, { recursive: !0, useTrash: !0 }),
									(this.W = this.W.filter(
										(Y) => Y.uri.toString() !== J.uri.toString(),
									)));
							return !0;
						} catch (G) {
							return (
								console.error(
									`[aichat] Error deleting file ${q.toString()}:`,
									G,
								),
								!1
							);
						}
					}
					N(q) {
						(this.U = this.U.filter((V) => V.uri.toString() !== q.toString())),
							(this.W = this.W.filter(
								(V) => !q.toString().startsWith(V.uri.toString()),
							));
					}
					getCacheKey(q, V, G) {
						if (G.getValueLength() > B)
							return (0, i.$Aj)(
								q + "||||||" + V + "||||||" + (0, m.$9g)(),
							).toString();
						const K = G.getValue();
						return (0, i.$Aj)(q + "||||||" + V + "||||||" + K).toString();
					}
					async cacheCodeBlockApplyButton(q, V, G) {
						const K = this.u.nonPersistentStorage.inlineDiffs.filter((W) =>
							C.$dh.isEqual(W.uri, q),
						);
						if (this.isAlreadyCachingCode >= 4 || K.length > 0) return;
						this.isAlreadyCachingCode++;
						const J = new w.$Zc();
						try {
							const W = V.getValue(),
								X = await z(this.h, q);
							if (
								(await this.getApplyToFileMenuItems_MAY_RUN_LONG(q, W, X, G))
									.length === 0
							)
								return;
							const ie = await this.h.createModelReference(q);
							if (
								(J.add(ie),
								ie.object.textEditorModel.getValueLength() > B ||
									ie.object.textEditorModel.getLineCount() > 1e4)
							)
								return;
							const ne = {
									startLine: 1,
									endLineExclusive:
										ie.object.textEditorModel.getLineCount() + 1,
								},
								ee = ie.object.textEditorModel.getAlternativeVersionId(),
								_ = this.getCacheKey(W, e.$S0b, ie.object.textEditorModel),
								te = this.O.get(_);
							if (te !== void 0) {
								te.succeeded &&
									this.R(G) &&
									this.S(q) === void 0 &&
									this.Y({
										uri: q,
										chatCodeblockModel: V,
										tabId: G.tabId,
										bubbleId: G.bubbleId,
										useLintsFromShadowWorkspace: !0,
									});
								return;
							}
							const Q = (0, m.$9g)();
							this.O.set(_, {
								diff: [],
								succeeded: !1,
								originalRange: new u.$rL(ne.startLine, ne.endLineExclusive),
								originalResource: q,
								generationUUID: Q,
							});
							const re = {
								...G,
								generationUUID: Q,
								inlineDiffServiceLookalike: {
									usedCurrentFileInfo: (le) => {
										const oe = this.O.get(_);
										oe !== void 0 &&
											le.alternativeVersionId !== ee &&
											(console.log(
												"Cancelled cache apply because the cache key model version is not the same as the alternative version id.",
											),
											(oe.succeeded = !1),
											this.O.delete(_));
									},
									cancel: () => {
										const le = this.O.get(_);
										le !== void 0 &&
											((le.succeeded = !1), this.O.delete(_), this.P.delete(_));
									},
									finish: async (le) => {
										const oe = this.O.get(_);
										oe !== void 0 &&
											(le.length > 0 &&
												((oe.diff = le),
												(oe.succeeded = !0),
												this.R(G) &&
													this.S(q) === void 0 &&
													(await this.Y({
														uri: q,
														chatCodeblockModel: V,
														tabId: G.tabId,
														bubbleId: G.bubbleId,
														useLintsFromShadowWorkspace: !0,
													}))),
											this.P.delete(_));
									},
								},
								isBackgroundApply: !0,
								onStreamerCreated: (le) => {
									this.P.set(_, {
										streamer: le,
										originalRange: new u.$rL(ne.startLine, ne.endLineExclusive),
										originalResource: q,
									});
								},
								clickedCodeBlockContents: V.getValue(),
								rejectChangesInURI: !1,
							};
							await this.m.executeCommand($.$Hgc, q, void 0, re);
						} finally {
							J.dispose(), this.isAlreadyCachingCode--;
						}
					}
					async cacheCodeBlockApplyComposer(q) {
						const {
								uri: V,
								codeblock: G,
								source: K,
								parentRequestId: J,
								conversationHistory: W,
								onPreviousDiffReject: X,
								onApplyDone: Y,
								onApplyFailed: ie,
							} = q,
							ne = this.u.nonPersistentStorage.inlineDiffs.filter((_) =>
								C.$dh.isEqual(_.uri, V),
							);
						if (this.isAlreadyCachingCode >= 4 || ne.length > 0) return;
						this.isAlreadyCachingCode++;
						const ee = new w.$Zc();
						try {
							const _ = await this.h.createModelReference(V);
							if (
								(ee.add(_),
								_.object.textEditorModel.getValueLength() > B ||
									_.object.textEditorModel.getLineCount() > 1e4)
							)
								return;
							const te = {
									startLine: 1,
									endLineExclusive: _.object.textEditorModel.getLineCount() + 1,
								},
								Q = _.object.textEditorModel.getAlternativeVersionId(),
								Z = this.getCacheKey(G, e.$S0b, _.object.textEditorModel);
							if (this.O.get(Z) !== void 0) return;
							const re = (0, m.$9g)();
							this.O.set(Z, {
								diff: [],
								succeeded: !1,
								originalRange: new u.$rL(te.startLine, te.endLineExclusive),
								originalResource: V,
								generationUUID: re,
							});
							const le = (ae) => {
									this.P.set(Z, {
										streamer: ae,
										originalRange: new u.$rL(te.startLine, te.endLineExclusive),
										originalResource: V,
									});
								},
								oe = {
									usedCurrentFileInfo: (ae) => {
										const pe = this.O.get(Z);
										pe !== void 0 &&
											ae.alternativeVersionId !== Q &&
											(console.log(
												"Cancelled cache apply because the cache key model version is not the same as the alternative version id.",
											),
											(pe.succeeded = !1),
											this.O.delete(Z));
									},
									cancel: () => {
										const ae = this.O.get(Z);
										ae !== void 0 &&
											((ae.succeeded = !1), this.O.delete(Z), this.P.delete(Z));
									},
									finish: async (ae) => {
										const pe = this.O.get(Z);
										pe !== void 0 &&
											(ae.length > 0 && ((pe.diff = ae), (pe.succeeded = !0)),
											this.P.delete(Z));
									},
								};
							await this.J.performChatEdit({
								source: K,
								options: {
									overrideCurrentFileURI: V,
									failSilently: K === O.FastApplySource.CACHED_APPLY,
								},
								generationMetadata: void 0,
								clickedCodeBlockContents: G,
								inlineDiffServiceLookalike: oe,
								isBackgroundApply: K === O.FastApplySource.CACHED_APPLY,
								onStreamerCreated: le,
								existingStreamer: void 0,
								isReapply: !1,
								generationUUID: (0, m.$9g)(),
								parentRequestId: J,
								conversationHistory: W,
								onPreviousDiffReject: X,
								onApplyDone: Y,
								onApplyFailed: ie,
							});
						} finally {
							ee.dispose(), this.isAlreadyCachingCode--;
						}
					}
					async applyComposerMaybeWithExistingStreamer(q) {
						const {
							uri: V,
							codeblock: G,
							source: K,
							parentRequestId: J,
							conversationHistory: W,
							isReapply: X,
							range: Y,
							onPreviousDiffReject: ie,
							onApplyDone: ne,
							onApplyFailed: ee,
							composerMetadata: _,
						} = q;
						let te;
						Y === void 0 &&
							(te = await this.getPendingStreamer(V, G, e.$S0b, "fullfile")),
							await this.J.performChatEdit({
								source: K,
								options: {
									overrideCurrentFileURI: V,
									overrideLineRange: Y,
									failSilently: K === O.FastApplySource.CACHED_APPLY,
								},
								generationMetadata: void 0,
								clickedCodeBlockContents: G,
								isBackgroundApply: K === O.FastApplySource.CACHED_APPLY,
								existingStreamer: te,
								isReapply: X,
								generationUUID: (0, m.$9g)(),
								parentRequestId: J,
								conversationHistory: W,
								onPreviousDiffReject: ie,
								onApplyDone: ne,
								onApplyFailed: ee,
								composerMetadata: _,
							});
					}
					async _getTieredSymbols(q) {
						const V = await this.h.createModelReference(q);
						try {
							const G = await this.g.getOrCreate(
									V.object.textEditorModel,
									t.CancellationToken.None,
								),
								K = G.getAllSymbols(),
								J = G.getTopLevelSymbols();
							return [
								K.filter((Y) => Y.kind === a.SymbolKind.Method),
								J.filter((Y) => Y.kind === a.SymbolKind.Function),
								J.filter((Y) => Y.kind === a.SymbolKind.Constant),
								J.filter((Y) => Y.kind === a.SymbolKind.Variable),
								K.filter(
									(Y) =>
										Y.kind === a.SymbolKind.Function &&
										Y.range.endLineNumber - Y.range.startLineNumber > 3,
								),
								K.filter(
									(Y) =>
										Y.kind === a.SymbolKind.Class &&
										Y.range.endLineNumber - Y.range.startLineNumber > 3,
								),
								K.filter(
									(Y) =>
										Y.kind === a.SymbolKind.Constant &&
										Y.range.endLineNumber - Y.range.startLineNumber > 3,
								),
							].map((Y) =>
								Y.map((ie) => ({
									...ie,
									text: V.object.textEditorModel.getValueInRange(ie.range),
								})),
							);
						} finally {
							V.dispose();
						}
					}
					async getImportantSymbolsDefinedInCodeblockThatExistInURICanThrowIfExtHostIsNotReady(
						q,
						V,
					) {
						if (!(await this.H.exists(q))) return [];
						const G = await z(this.h, q),
							K = [],
							J = await this.j.provider?.runCommand(
								s.TreeSitterActions.GetImportantDefinitionNames,
								{ fileContent: V, languageId: G },
							);
						K.push(...(J?.items?.map((Y) => Y.symbolName) ?? []));
						const W = (await this._getTieredSymbols(q)).flat(),
							X = [];
						for (const Y of W) {
							const ie = K.find((ne) => ne === Y.name);
							ie !== void 0 && (K.splice(K.indexOf(ie), 1), X.push(Y));
						}
						return X;
					}
					async getLineNumberOfTopLevelScope_MAY_RUN_LONG(q, V) {
						if (!(await this.H.exists(q))) return;
						const G = await F(
							() =>
								this.getImportantSymbolsDefinedInCodeblockThatExistInURICanThrowIfExtHostIsNotReady(
									q,
									V,
								),
							1,
							5e3,
						);
						if (G === void 0) return;
						const K = G;
						return K.length === 0
							? void 0
							: K.reduce((W, X) =>
									W.range.endLineNumber > X.range.endLineNumber ? W : X,
								).range.startLineNumber;
					}
					async applyCachedEntry(q, V, G, K) {
						const J = this.O.get(V);
						if (J === void 0) return;
						const W = G,
							X = q
								.getLinesContent()
								.slice(W.startLineNumber - 1, W.endLineNumberExclusive - 1),
							Y = {
								uri: q.uri,
								generationUUID: J.generationUUID,
								currentRange: W,
								originalTextLines: X,
								prompt: "hi",
								isHidden: !1,
								attachedToPromptBar: !1,
								source: S.$a0b,
								createdAt: Date.now(),
								composerMetadata: K,
							},
							ie = this.Q(X, J.diff),
							ne = (await this.y.addActiveDiff(Y)).id;
						this.y.addLinesToDiff(ne, ie), this.y.finishDiffSuccess(ne);
					}
					Q(q, V) {
						const G = [];
						let K = 0;
						for (let J = 0; J < q.length; J++) {
							const W = q[J];
							if (K < V.length) {
								const { original: X, modified: Y } = V[K];
								if (
									J === X.startLineNumber - 1 &&
									(G.push(...Y),
									K++,
									X.endLineNumberExclusive !== X.startLineNumber)
								) {
									J += X.endLineNumberExclusive - X.startLineNumber - 1;
									continue;
								}
							}
							G.push(W);
						}
						for (; K < V.length; ) {
							const { original: J, modified: W } = V[K];
							G.push(...W), K++;
						}
						return G;
					}
					R(q) {
						return (
							(this.u.nonPersistentStorage.nonPersistentChatMetadata.find(
								(V) => V.bubbleId === q.bubbleId && V.tabId === q.tabId,
							)?.lints?.length ?? 0) === 0
						);
					}
					S(q) {
						return this.u.nonPersistentStorage.inlineDiffs.find(
							(V) => C.$dh.isEqual(V.uri, q) && V.source === S.$a0b,
						);
					}
					async getApplyToFileMenuItems_MAY_RUN_LONG(q, V, G, K) {
						const J = this.getApplyToFileMenuItemsAlwaysAvailable(q, K);
						if (!(await this.H.exists(q)))
							return this.getApplyToFileMenuItemsNewFile(J, K);
						try {
							let W = await F(
								() =>
									this.getImportantSymbolsDefinedInCodeblockThatExistInURICanThrowIfExtHostIsNotReady(
										q,
										V,
									),
								1,
								5e3,
							);
							W === void 0 && (W = []);
							for (const X of W) {
								const Y = `Apply to ${X.name}`,
									ie = new u.$rL(
										X.range.startLineNumber,
										X.range.endLineNumber + 1,
									);
								J.push({
									menuString: Y,
									lineLength: X.range.endLineNumber - X.range.startLineNumber,
									selection: {
										startLine: X.range.startLineNumber,
										endLineExclusive: X.range.endLineNumber + 1,
									},
									callback: async (ne, ee) => {
										const _ = (0, f.$8rb)(q, {
											startLineNumber: X.range.startLineNumber || 1,
											startColumn: X.range.startColumn || 1,
											endLineNumber: X.range.startLineNumber || 1,
											endColumn: X.range.startColumn || 1,
										});
										if (
											(this.q.open(_),
											ne !== void 0 &&
												ee !== !0 &&
												(await this.maybeApplyCachedEntry({
													uri: q,
													codeblockContent: ne.getValue(),
													menuString: Y,
													range: ie,
												})) === "didApply")
										)
											return;
										const te = {
											...K,
											isReapply: ee,
											existingStreamer:
												ne === void 0
													? void 0
													: await this.getPendingStreamer(
															q,
															ne.getValue(),
															Y,
															ie,
														),
										};
										await this.m.executeCommand($.$Hgc, q, ie, te),
											ne !== void 0 &&
												this.S(q) !== void 0 &&
												this.R(K) &&
												this.Y({
													uri: q,
													chatCodeblockModel: ne,
													tabId: K.tabId,
													bubbleId: K.bubbleId,
													useLintsFromShadowWorkspace: !1,
												});
									},
									isCached: async (ne) =>
										ne === void 0 ? !1 : this.isEntryCached(q, ne, Y, ie),
									uri: q,
								});
							}
						} catch (W) {
							console.error(W);
						}
						return J;
					}
					async getApplyToFileMenuItemsNewFile(q, V) {
						const G = this.z.activeEditor?.resource;
						if (G === void 0 || q.length === 0) return q;
						const K = "Apply to current file";
						return [
							{
								menuString: K,
								wholeFile: !1,
								callback: async (W, X) => {
									const Y = {
										...V,
										isReapply: X,
										existingStreamer:
											W === void 0
												? void 0
												: await this.getPendingStreamer(
														G,
														W.getValue(),
														K,
														"fullfile",
													),
									};
									await this.m.executeCommand($.$Hgc, G, void 0, Y);
								},
								isCached: async (W) => !1,
								uri: G,
							},
							{ ...q[0], menuString: "Create new file" },
						];
					}
					async getPendingStreamer(q, V, G, K) {
						const J = new w.$Zc();
						try {
							const W = await this.h.createModelReference(q);
							J.add(W);
							const X = this.getCacheKey(V, G, W.object.textEditorModel),
								Y = this.P.get(X)?.streamer;
							return this.P.delete(X), Y;
						} finally {
							J.dispose();
						}
					}
					async isEntryCached(q, V, G, K) {
						if (!(await this.H.exists(q))) return !1;
						const J = new w.$Zc();
						try {
							const W = await this.h.createModelReference(q);
							J.add(W);
							const X = this.getCacheKey(V, G, W.object.textEditorModel),
								Y = this.O.get(X);
							return Y !== void 0 && Y.succeeded;
						} finally {
							J.dispose();
						}
					}
					async maybeApplyCachedEntry(q) {
						const {
								uri: V,
								codeblockContent: G,
								menuString: K,
								range: J,
								composerMetadata: W,
							} = q,
							X = new w.$Zc();
						try {
							const Y = await this.h.createModelReference(V);
							X.add(Y);
							const ie = this.getCacheKey(G, K, Y.object.textEditorModel),
								ne = this.O.get(ie);
							if (ne && ne.succeeded) {
								await this.applyCachedEntry(
									Y.object.textEditorModel,
									ie,
									J === "fullfile"
										? new u.$rL(1, Y.object.textEditorModel.getLineCount() + 1)
										: J,
									W,
								);
								const ee = this.S(V),
									_ = ee?.changes.sort(
										(te, Q) =>
											te.addedRange.startLineNumber -
											Q.addedRange.startLineNumber,
									);
								return (
									ee &&
										_ &&
										_.length > 0 &&
										this.z.activeTextEditorControl?.revealLineInCenter(
											ee.currentRange.startLineNumber +
												_[0].addedRange.startLineNumber,
										),
									"didApply"
								);
							}
							return;
						} finally {
							X.dispose();
						}
					}
					getApplyToFileMenuItemsAlwaysAvailable(q, V) {
						return [
							{
								menuString: e.$S0b,
								wholeFile: !0,
								callback: async (G, K) => {
									await this.L(q);
									const J = this.z.findEditors(q);
									if (J.length > 0) {
										const X = this.C.getGroup(J[0].groupId);
										this.z.openEditor(J[0].editor, X);
									} else await this.q.open(q);
									if (
										G &&
										K !== !0 &&
										(await this.maybeApplyCachedEntry({
											uri: q,
											codeblockContent: G.getValue(),
											menuString: e.$S0b,
											range: "fullfile",
										})) === "didApply"
									)
										return;
									const W = {
										...V,
										isReapply: K,
										existingStreamer:
											G === void 0
												? void 0
												: await this.getPendingStreamer(
														q,
														G.getValue(),
														e.$S0b,
														"fullfile",
													),
									};
									await this.m.executeCommand($.$Hgc, q, void 0, W),
										G !== void 0 &&
											this.S(q) !== void 0 &&
											this.R(V) &&
											this.Y({
												uri: q,
												chatCodeblockModel: G,
												tabId: V.tabId,
												bubbleId: V.bubbleId,
												useLintsFromShadowWorkspace: !1,
											});
								},
								isCached: async (G) =>
									G === void 0
										? !1
										: this.isEntryCached(q, G, e.$S0b, "fullfile"),
								uri: q,
							},
						];
					}
					async isUndefined_COULD_BE_REALLY_SLOW_SPAWNS_EXT_HOST(q, V) {
						if (this.X.has(q) || !V || this.X.size > 1e4)
							return this.X.get(q) ?? !1;
						this.X.set(q, !1);
						const G = { stem: q, originals: [q], prefix: q, count: 1 },
							{ textQuery: K } = this.s.termsToQueries(G),
							J = new t.$Ce(),
							W = new Promise((ne, ee) => {
								const _ = setTimeout(() => {
									J.cancel(), ee(new Error("Operation timed out"));
								}, 5e3);
								J.token.onCancellationRequested(() => {
									clearTimeout(_), ee(new Error("Operation cancelled"));
								});
							}),
							X = this.r.textSearch({ ...K, maxResults: 1 }, J.token),
							Y = await Promise.race([X, W]);
						if (typeof Y != "object") return;
						const ie = Y.results.length === 0;
						return this.X.set(q, ie), ie;
					}
					async computeLintErrorsMayThrow({
						proposedCodeBlock: q,
						languageId: V,
						slow: G,
					}) {
						const K = [],
							J = [];
						K.push(
							...((
								await this.j.provider?.runCommand(
									s.TreeSitterActions.GetReferencedSymbols,
									{ fileContent: q, languageId: V },
								)
							)?.items ?? []),
						),
							J.push(
								...((
									await this.j.provider?.runCommand(
										s.TreeSitterActions.GetDefinedSymbols,
										{ fileContent: q, languageId: V },
									)
								)?.items.map((X) => X.symbolName) ?? []),
							);
						const W = [];
						for (const X of K)
							J.includes(X.symbolName) ||
								((await this.isUndefined_COULD_BE_REALLY_SLOW_SPAWNS_EXT_HOST(
									X.symbolName,
									G,
								)) &&
									W.push(X));
						return W;
					}
					async Y({
						uri: q,
						chatCodeblockModel: V,
						tabId: G,
						bubbleId: K,
						useLintsFromShadowWorkspace: J,
					}) {
						if (
							(await this.w.maybeRefreshFeatureStatus("lintsInChat"),
							!this.w.getCachedFeatureStatus("lintsInChat"))
						)
							return;
						let W;
						try {
							W = await this.h.createModelReference(q);
							let X, Y;
							const ie = W.object.textEditorModel.getOptions().tabSize;
							let ne;
							if (J) {
								const se = this.getCacheKey(
										V.getValue(),
										e.$S0b,
										W.object.textEditorModel,
									),
									re = this.O.get(se);
								if (re === void 0) return;
								const le = W.object.textEditorModel
									.getLinesContent()
									.slice(
										re.originalRange.startLineNumber - 1,
										re.originalRange.endLineNumberExclusive - 1,
									);
								(X = this.Q(le, re.diff).join(`
`)),
									(Y = W.object.textEditorModel.getValue()),
									(ne = await this.Z(q, Y, X));
							} else {
								if (
									((X = W.object.textEditorModel.getValue()),
									this.S(q) === void 0)
								)
									return;
								ne = await this.getLinterErrorsInModifiedRanges(q);
							}
							if (
								ne === void 0 ||
								ne.lints.length === 0 ||
								!this.R({ tabId: G, bubbleId: K })
							)
								return;
							const ee = this.$({
								modifedFileValue: X,
								chatCodeblockModel: V,
								lintsInFile: ne,
								indentSize: ie,
							});
							this.G.remove(V.uri + "-cachedApplyLints", [V.uri]);
							const te = ee.lints
								.filter(
									(se, re, le) =>
										re ===
										le.findIndex(
											(oe) =>
												oe.startLineNumberOneIndexed ===
													se.startLineNumberOneIndexed &&
												oe.startColumnOneIndexed === se.startColumnOneIndexed &&
												oe.endLineNumberInclusiveOneIndexed ===
													se.endLineNumberInclusiveOneIndexed &&
												oe.endColumnOneIndexed === se.endColumnOneIndexed &&
												oe.message === se.message,
										),
								)
								.map((se) => ({
									severity:
										se.severity === "Error"
											? o.MarkerSeverity.Error
											: o.MarkerSeverity.Warning,
									message: se.message,
									startLineNumber: se.startLineNumberOneIndexed,
									startColumn: se.startColumnOneIndexed,
									endLineNumber: se.endLineNumberInclusiveOneIndexed,
									endColumn: se.endColumnOneIndexed,
									resource: V.uri,
								}));
							this.G.changeOne(V.uri + "-cachedApplyLints", V.uri, te);
							const Q = K,
								Z = G;
							this.u.setNonPersistentStorage(
								"nonPersistentChatMetadata",
								(se) => {
									const re = se.find(
										({ bubbleId: le, tabId: oe }) => le === Q && oe === Z,
									);
									return [
										...se.filter(
											({ bubbleId: le, tabId: oe }) => le !== Q || oe !== Z,
										),
										{
											bubbleId: Q,
											tabId: Z,
											intermediateChunks: [],
											intermediateSectionType: void 0,
											steps: [],
											...re,
											lints: [
												...(re?.lints ?? []),
												{ lints: ee, codeBlockUri: V.uri },
											],
										},
									];
								},
							);
						} catch (X) {
							console.warn("Error getting lints for chat", X);
						} finally {
							W?.dispose();
						}
					}
					async Z(q, V, G) {
						try {
							const K = await this.F.getClient(),
								J = new D.$tx({
									files: [
										{
											relativeWorkspacePath: this.n.asRelativePath(q),
											initialContent: V,
											finalContent: G,
										},
									],
								});
							return await K.getLintsForChange(J);
						} catch (K) {
							return (
								console.error("Failed to get lints from shadow workspace:", K),
								new D.$xx({ lints: [] })
							);
						}
					}
					$({
						modifedFileValue: q,
						chatCodeblockModel: V,
						lintsInFile: G,
						indentSize: K,
					}) {
						const J = (ee, _, te) => {
								const Q = ee.match(/^\t*/)?.[0]?.length || 0,
									Z = Math.min(Q, _ - 1);
								return Z * te + Math.max(0, _ - Z);
							},
							W = (ee) => {
								switch (ee.split(".").pop()?.toLowerCase()) {
									case "py":
									case "r":
									case "rb":
										return "#";
									case "js":
									case "ts":
									case "jsx":
									case "tsx":
									case "java":
									case "c":
									case "cpp":
									case "cs":
									case "go":
									case "swift":
									case "kt":
									case "scala":
									case "php":
										return "//";
									default:
										return;
								}
							},
							X = (ee, _) => ee.trim().startsWith(_),
							Y = q.split(`
`),
							ie = V.getValue().split(`
`),
							ne = G.lints
								.map((ee) => {
									const _ = Y[ee.startLineNumberOneIndexed - 1];
									let te = ie.findIndex((Q) => Q === _);
									if (te === -1) {
										te = ie.findIndex((Z) => Z.trim() === _.trim());
										const Q = W(ee.relativeWorkspacePath);
										if (
											(te === -1 &&
												Q !== void 0 &&
												(te = ie.findIndex((Z) => {
													if (X(Z, Q)) return !1;
													const se = Z.indexOf(Q);
													return (
														(se === -1 ? Z : Z.slice(0, se)).trim() === _.trim()
													);
												})),
											te !== -1)
										) {
											const Z = ie[te],
												se = Z.replace(/^(\t+)/, (ye) =>
													" ".repeat(ye.length * K),
												),
												re = _.replace(/^(\t+)/, (ye) =>
													" ".repeat(ye.length * K),
												),
												le = J(_, ee.startColumnOneIndexed, K),
												oe = J(_, ee.endColumnOneIndexed, K),
												ae = re.length - re.trimStart().length;
											let pe = se.length - se.trimStart().length;
											Z.startsWith("	") && (pe = pe / K);
											const $e = pe - ae;
											(ee.startColumnOneIndexed = Math.min(
												Math.max(1, le + $e),
												se.length + 1,
											)),
												(ee.endColumnOneIndexed = Math.min(
													Math.max(1, oe + $e),
													se.length + 1,
												));
										}
									}
									if (te !== -1) {
										const Q = ie[te],
											Z = ee.startColumnOneIndexed - 1,
											se = ee.endColumnOneIndexed - 1,
											re = Q.slice(Z, se);
										return /\s/.test(re)
											? void 0
											: new D.$yx({
													severity: ee.severity,
													relativeWorkspacePath: ee.relativeWorkspacePath,
													message: ee.message,
													startLineNumberOneIndexed: te + 1,
													endLineNumberInclusiveOneIndexed: te + 1,
													startColumnOneIndexed: ee.startColumnOneIndexed,
													endColumnOneIndexed: ee.endColumnOneIndexed,
												});
									}
								})
								.filter((ee) => ee !== void 0);
						return new D.$xx({ lints: ne });
					}
					async getLinterErrorsInModifiedRanges(q) {
						const V = this.S(q);
						if (V === void 0) return;
						const G = this.G.read({ resource: q }),
							K = this.ab(G).map((J) => ({
								message: J.message,
								relatedInformation: J.relatedInformation ?? [],
								source: J.source ?? "",
								severity: this.bb(J.severity),
								range: {
									startPosition: {
										line: J.startLineNumber,
										column: J.startColumn,
									},
									endPosition: { line: J.endLineNumber, column: J.endColumn },
								},
								uri: q.toString(),
							}));
						if (K.length > 0) {
							const J = K.filter((W) =>
								V.changes.some((X) => {
									const Y =
											V.currentRange.startLineNumber +
											X.addedRange.startLineNumber -
											1,
										ie =
											V.currentRange.startLineNumber +
											X.addedRange.endLineNumberExclusive -
											1;
									return (
										Y <= W.range.startPosition.line &&
										ie >= W.range.endPosition.line
									);
								}),
							);
							return new D.$xx({
								lints: J.map(
									(W) =>
										new D.$yx({
											message: W.message,
											severity: W.severity,
											startLineNumberOneIndexed: W.range.startPosition.line,
											startColumnOneIndexed: W.range.startPosition.column,
											endLineNumberInclusiveOneIndexed:
												W.range.endPosition.line,
											endColumnOneIndexed: W.range.endPosition.column,
											relativeWorkspacePath: this.n.asRelativePath(q),
										}),
								),
							});
						}
					}
					ab(q) {
						return q.filter((V) => V.severity === o.MarkerSeverity.Error);
					}
					bb(q) {
						switch (q) {
							case o.MarkerSeverity.Error:
								return "Error";
							case o.MarkerSeverity.Warning:
								return "Warning";
							case o.MarkerSeverity.Info:
								return "Info";
							case o.MarkerSeverity.Hint:
								return "Hint";
							default:
								return "Info";
						}
					}
					async canApplyToFile(q) {
						const V = await this.isFileTooBigToApply(q),
							G = this.isUsingAPIKeyAndNotPro();
						return !(V || G);
					}
					async cb() {
						return (
							await this.w.maybeRefreshConfig("applyButtonLineLimit"),
							this.w.getCachedConfig("applyButtonLineLimit") ?? 1e5
						);
					}
					async db(q) {
						const V = this.n.resolveRelativePath(q);
						if (!(await this.H.exists(V))) return;
						const K = await this.h.createModelReference(V);
						try {
							return K.object.textEditorModel.getLineCount();
						} catch (J) {
							console.error("Error getting line count for file", J);
							return;
						} finally {
							K.dispose();
						}
					}
					async isFileTooBigToApply(q) {
						const V = await this.cb(),
							G = await this.db(q);
						return G !== void 0 && G > V;
					}
					isUsingAPIKeyAndNotPro() {
						return (
							((this.u.applicationUserPersistentStorage.useOpenAIKey ||
								this.u.applicationUserPersistentStorage.useClaudeKey ||
								this.u.applicationUserPersistentStorage.useGoogleKey) ??
								!1) &&
							this.I.membershipType() === A.MembershipType.FREE
						);
					}
				};
				(e.$U0b = x),
					(e.$U0b = x =
						Ne(
							[
								j(0, c.$9Db),
								j(1, h.$MO),
								j(2, v.$3Db),
								j(3, n.$ek),
								j(4, l.$Vi),
								j(5, f.$7rb),
								j(6, k.$p7),
								j(7, I.$O6b),
								j(8, b.$0zb),
								j(9, y.$H7b),
								j(10, r.$27b),
								j(11, P.$IY),
								j(12, T.$EY),
								j(13, L.$k7b),
								j(14, o.$aM),
								j(15, M.$ll),
								j(16, R.$x6b),
								j(17, S.$$9b),
							],
							x,
						)),
					(0, g.$lK)(e.$R0b, x, g.InstantiationType.Delayed);
			},
		),
		define(
			de[3985],
			he([
				1, 0, 148, 126, 187, 3, 19, 9, 47, 383, 587, 42, 22, 5, 110, 41, 45, 25,
				1230, 337, 118, 480, 226, 18, 85,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ndd = e.$mdd = void 0),
					(e.$mdd = (0, c.$Mi)("interpreterActionService"));
				let S = class {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U, z, F) {
						(this.a = T),
							(this.b = P),
							(this.c = k),
							(this.f = L),
							(this.g = D),
							(this.h = M),
							(this.j = N),
							(this.k = A),
							(this.l = R),
							(this.m = O),
							(this.n = B),
							(this.o = U),
							(this.p = z),
							(this.q = F);
					}
					async takeInterpreterAction(T) {
						const P = new E.$Zc();
						try {
							const k = (0, w.$do)(T);
							if (!("accessUuid" in k))
								throw new Error("No access uuid specified");
							if (typeof k.accessUuid != "string")
								throw new Error("Access uuid must be a string");
							if (!this.m.accessUuids.has(k.accessUuid))
								throw new Error(
									"Incorrect access uuid \u2014 if you are trying to control Cursor from a notebook, please make a forum post on https://forum.cursor.com. We would love to support your use case!",
								);
							const L = new AbortController();
							if (
								(P.add(
									this.m.onDidCancel((M) => {
										M === k.args.tabId && L.abort();
									}),
								),
								!("method" in k))
							)
								throw new Error("No method specified");
							if (!k.args) throw new Error("No args provided");
							if (!("tabId" in k.args))
								throw new Error("No tabId specified in args");
							if (typeof k.args.tabId != "string")
								throw new Error("Tab ID must be a string");
							const D = { ...k.args, abortSignal: L.signal };
							switch (k.method) {
								case "open":
									if (!("path" in D))
										throw new Error("No path specified in args");
									if (typeof D.path != "string")
										throw new Error("Path must be a string");
									return await this.v(D);
								case "new":
									if (!("path" in D))
										throw new Error("No path specified in args");
									if (typeof D.path != "string")
										throw new Error("Path must be a string");
									return await this.u(D);
								case "exec":
									if (!("cmd" in D))
										throw new Error("No cmd specified in args");
									if (typeof D.cmd != "string")
										throw new Error("Command must be a string");
									return await this.w(D);
								case "edit":
									if (!("path" in D))
										throw new Error("No path specified in args");
									if (typeof D.path != "string")
										throw new Error("Path must be a string");
									return await this.x(D);
								case "semsearch":
									if (!("query" in D))
										throw new Error("No query specified in args");
									if (typeof D.query != "string")
										throw new Error("Query must be a string");
									if (!("top_k" in D))
										throw new Error("No top_k specified in args");
									if (typeof D.top_k != "number")
										throw new Error("top_k must be a number");
									if (!("include_glob" in D))
										throw new Error("No include_glob specified in args");
									if (typeof D.include_glob != "string")
										throw new Error("include_glob must be a string");
									if (!("exclude_glob" in D))
										throw new Error("No exclude_glob specified in args");
									if (typeof D.exclude_glob != "string")
										throw new Error("exclude_glob must be a string");
									return await this.y(D);
								default:
									throw new Error(`Unknown method: ${k.method}`);
							}
						} catch (k) {
							return `Failed to take action. Error: ${k}`;
						} finally {
							P.dispose();
						}
					}
					async u(T) {
						const { path: P } = T,
							k = this.b.resolveRelativePath(P);
						return (
							await this.a.createFile(k),
							await this.v(T),
							`File created at path: ${P}`
						);
					}
					async v(T) {
						const P = this.b.resolveRelativePath(T.path);
						if (!(await this.a.exists(P)))
							return `Error: File does not exist at path: ${T.path}`;
						let L = "notfound",
							D = "";
						return (
							this.c.setChatData(
								"tabs",
								(M, N) => M.tabId === T.tabId,
								"interpreterData",
								"openFiles",
								(M) => {
									const N = M.filter(
										(A) =>
											A === "current-file" ||
											!C.$dh.isEqual(d.URI.revive(A), P),
									);
									if (N.length !== M.length) return (L = "already"), M;
									{
										L = "yes";
										let A = [];
										for (; N.length >= 2; ) {
											const R = N.shift();
											if (R !== "current-file" && R !== void 0) {
												const O = this.b.asRelativePath(d.URI.revive(R));
												A.push(O);
											}
										}
										return (
											A.length > 0 &&
												(D = ` (and closed files ${A.join(", ")} because at most 2 files can be open at a time)`),
											[...N, P]
										);
									}
								},
							),
							L === "yes"
								? `Opened file at path: ${T.path}${D}`
								: L === "already"
									? `File already open: ${T.path}`
									: "Error finding tab"
						);
					}
					async w(T) {
						return "Exec not supported. Just use ! commands in jupyter instead.";
					}
					async x(T) {
						const P = new AbortController(),
							k = () => {
								P.abort();
							};
						T.abortSignal.addEventListener("abort", k);
						try {
							const L = this.b.resolveRelativePath(T.path),
								D = this.c.chatData.tabs.find((W) => W.tabId === T.tabId);
							if (D === void 0) return `Tab not found: ${T.tabId}`;
							await this.v(T);
							const M = this.o.nonPersistentStorage.inlineDiffs
								.filter((W) => C.$dh.isEqual(W.uri, L))
								.map((W) => W.id);
							for (const W of M)
								this.p.cancelDiff(W), this.p.rejectDiff(W, { close: !0 });
							const N = await this.l.read(L, { limits: { size: 1e6 } }),
								A = await this.c.getConversationHistory({ tab: D });
							T.instruction !== void 0 &&
								T.instruction.trim() !== "" &&
								A.push(
									new i.$SA({
										type: i.ConversationMessage_MessageType.HUMAN,
										text:
											"MOST IMPORTANT INSTRUCTION THAT YOU SHOULD FOLLOW: " +
											T.instruction,
									}),
								);
							const R = this.g.getModelDetails({
									specificModelField: "regular-chat",
								}),
								O = (0, m.$9g)();
							this.m.updateRunningMetadata(T.tabId, { editingFileUri: L });
							let B = `
`;
							try {
								B = (
									await this.q.createModelReference(L)
								).object.textEditorModel.getEOL();
							} catch (W) {
								console.warn("modelReference couldnt be created", W);
							}
							const U = {
									currentFile: await this.g.getCurrentFileInfo(L, {
										actuallyReadFromOverrideURI: !0,
									}),
									conversation: A,
									modelDetails: R,
									explicitContext: await this.g.getExplicitContext(),
									isCmdI: !1,
									files: [],
									useFastApply: !1,
									fastApplyModelType:
										t.SlashEditRequest_FastApplyModelType.DEFAULT,
								},
								F = (await this.g.aiClient()).slashEdit(U, {
									signal: P.signal,
									headers: [["X-Request-ID", O]],
								}),
								x = (0, m.$9g)(),
								H = this.h.handleSlashEditResponseSingleDiff({
									streamer: F,
									generationUUID: O,
									uri: L,
									editUuid: x,
									request: U,
									abortController: P,
									eol: B,
									generationMetadata: {
										tabId: "",
										aiBubbleId: "",
										bubbleId: "",
									},
								});
							for await (const W of H);
							this.h.acceptSlashEdit(x), await this.l.save(L);
							const q = await this.l.read(L),
								V = u.$qxb.getDefault(),
								G = N.value.split(`
`),
								K = q.value.split(`
`);
							return `Successful edit. The diff is: 
${V.computeDiff(G, K, {
	ignoreTrimWhitespace: !0,
	maxComputationTimeMs: 1e3,
	computeMoves: !1,
})
	.changes.map(
		(W) => `diff a/original b/modified
index ${W.original.startLineNumber}..${W.original.endLineNumberExclusive} ${W.modified.startLineNumber}..${W.modified.endLineNumberExclusive}
--- a/original
+++ b/modified
${N.value
	.split(`
`)
	.slice(W.original.startLineNumber - 1, W.original.endLineNumberExclusive)
	.map((X, Y) => `- ${Y + W.original.startLineNumber} ${X}`)
	.join(`
`)}
${q.value
	.split(`
`)
	.slice(W.modified.startLineNumber - 1, W.modified.endLineNumberExclusive)
	.map((X, Y) => `+ ${Y + W.modified.startLineNumber} ${X}`)
	.join(`
`)}`,
	)
	.join(`
`)}`;
						} finally {
							T.abortSignal.removeEventListener("abort", k);
						}
					}
					async y(T) {
						const k = (
							await this.n.parallelSearch(T.query, T.top_k, T.top_k, {
								includePattern: T.include_glob,
								excludePattern: T.exclude_glob,
								abortSignal: T.abortSignal,
							})
						).map((L) => ({
							path: L.codeBlock?.relativeWorkspacePath,
							content: L.codeBlock?.contents,
							range: {
								start_line: L.codeBlock?.range?.startPosition?.line,
								end_line: L.codeBlock?.range?.endPosition?.line,
							},
						}));
						return JSON.stringify(k);
					}
				};
				(e.$ndd = S),
					(e.$ndd = S =
						Ne(
							[
								j(0, h.$ll),
								j(1, o.$Vi),
								j(2, b.$kgc),
								j(3, n.$y7c),
								j(4, s.$Nfc),
								j(5, l.$$9b),
								j(6, $.$IY),
								j(7, g.$7rb),
								j(8, v.$kZ),
								j(9, f.$vcc),
								j(10, y.$J6b),
								j(11, p.$0zb),
								j(12, r.$27b),
								j(13, a.$MO),
							],
							S,
						));
			},
		),
		define(
			de[3986],
			he([1, 0, 20, 3942, 11, 58, 3985, 1230, 337, 27, 43, 8, 418]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class c extends w.$3X {
					constructor() {
						super({ id: E.$sX, title: { value: "", original: "" }, f1: !1 });
					}
					async run(g, p, ...o) {
						return g.get(C.$mdd).takeInterpreterAction(p);
					}
				}
				(0, w.$4X)(c),
					m.$lgc.registerAction((n, g) => {
						class p extends w.$3X {
							constructor() {
								super({
									id: E.$tX,
									title: {
										value: "Retry Last Interpreter Step",
										original: "Retry Last Interpreter Step",
									},
									f1: !1,
									keybinding: {
										primary: r.KeyMod.CtrlCmd | r.KeyCode.KeyU,
										weight: u.KeybindingWeight.ExternalExtension + 10,
										when: a.$Kj.and(
											a.$Kj.or(
												a.$Kj.equals("view", h.AIChatConstants.CHAT_VIEW_ID),
												h.$tgc.isEqualTo(!0),
												a.$Kj.function(() => {
													const f = g.getReactiveCurrentChat();
													return (
														f?.interpreterData !== void 0 &&
														f?.bubbles.at(-1)?.type === "ai"
													);
												}),
											),
											a.$Kj.function(() => {
												const f = g.getReactiveCurrentChat();
												return (
													f?.interpreterData !== void 0 && f?.bubbles.length > 1
												);
											}),
										),
									},
								});
							}
							async run(f, b, s, l, ...y) {
								f.get(d.$vcc).openRetry(b, s, l);
							}
						}
						(0, w.$4X)(p);
					}),
					m.$lgc.registerAction((n, g) => {
						class p extends w.$3X {
							constructor() {
								super({
									id: E.$uX,
									title: {
										value: "Execute Interpreter",
										original: "Execute Interpreter",
									},
									f1: !1,
									keybinding: {
										primary: r.KeyMod.CtrlCmd | r.KeyCode.Enter,
										weight: u.KeybindingWeight.ExternalExtension + 10,
										when: a.$Kj.and(
											a.$Kj.true(),
											a.$Kj.function(() => {
												const f = g.getReactiveCurrentChat(),
													b = f?.bubbles[f.bubbles.length - 1];
												return (
													b?.type === "ai" &&
													b.interpreterModeCells !== void 0 &&
													b.interpreterModeCells[
														b.interpreterModeCells.length - 1
													].status === "pending"
												);
											}),
										),
									},
								});
							}
							async run(f, b, ...s) {
								f.get(d.$vcc).executeAndContinue(b);
							}
						}
						(0, w.$4X)(p);
					}),
					(0, t.$lK)(d.$vcc, i.$ldd, t.InstantiationType.Delayed),
					(0, t.$lK)(C.$mdd, C.$ndd, t.InstantiationType.Delayed),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: E.$wX,
									title: {
										value: "Interpreter Mode: Change Kernel",
										original: "Interpreter Mode: Change Kernel",
									},
									f1: !0,
								});
							}
							async run(n, ...g) {
								await n.get(d.$vcc).changeKernel();
							}
						},
					);
			},
		),
		define(
			de[3987],
			he([1, 0, 7, 6, 3, 56, 31, 39, 45, 5, 38, 61, 67, 852, 54, 25, 2525]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J$b = void 0),
					(t = mt(t));
				var p;
				(function (s) {
					let l;
					(function ($) {
						($[($.Hidden = 0)] = "Hidden"), ($[($.Showing = 1)] = "Showing");
					})((l = s.Type || (s.Type = {}))),
						(s.Hidden = { type: l.Hidden });
					class y {
						constructor(v, S) {
							(this.editorPosition = v),
								(this.widgetPosition = S),
								(this.type = l.Showing);
						}
					}
					s.Showing = y;
				})(p || (p = {}));
				let o = class extends w.$1c {
					static {
						this.a = [E.ContentWidgetPositionPreference.ABOVE];
					}
					constructor(l, y, $, v, S, I, T, P, k) {
						super(),
							(this.r = l),
							(this.s = y),
							(this.t = $),
							(this.u = v),
							(this.w = S),
							(this.z = I),
							(this.C = T),
							(this.F = P),
							(this.G = k),
							(this.allowEditorOverflow = !0),
							(this.g = this.D(new i.$re())),
							(this.onClick = this.g.event),
							(this.h = p.Hidden),
							(this.isWordWrap = !1),
							(this.q = !1),
							(this.b = t.$("div.partialApplyHoverWidget")),
							(this.f = t.$fhb(this.b, t.$("div.partialApplyButtonContainer"))),
							(this.c = this.H(
								this.f,
								"placeholder.action.id",
								"Placeholder Button",
							)),
							this.D(
								t.$_fb(this.c, async (L) => {
									if ((L.stopPropagation(), !this.m || !this.n)) return;
									const D = this.r.getModel();
									if (!D) return;
									const M = this.r.getSelection();
									if (!M || M.isEmpty()) return;
									const N = {
											startLineNumber: M.startLineNumber,
											endLineNumber: M.endLineNumber,
											startColumn: 1,
											endColumn: D.getLineMaxColumn(M.endLineNumber),
										},
										A = D.getValueInRange(N),
										O = (
											await this.F.getApplyToFileMenuItems_MAY_RUN_LONG(
												this.m,
												A,
												"",
												{ ...this.n, clickedCodeBlockContents: A },
											)
										).find((B) => B.wholeFile);
									if (O) {
										const B = this.z.createById(D.getLanguageId()),
											U = this.C.createModel(A, B);
										O.callback(U), this.D(U);
										return;
									}
								}),
							),
							this.r.addContentWidget(this),
							(this.j = this.D(this.u.createScoped(this))),
							this.D(
								this.u.onChangeEffectManuallyDisposed({
									deps: [() => this.u.nonPersistentStorage.inlineDiffs],
									onChange: () => {
										const L = this.m;
										if (!L) {
											this.q = !1;
											return;
										}
										const D = this.u.nonPersistentStorage.inlineDiffs.some(
											(M) => M.uri.toString() === L.toString(),
										);
										this.q !== D &&
											((this.q = D), D ? this.hide() : this.update());
									},
								}),
							);
					}
					H(l, y, $) {
						const v = t.$fhb(l, t.$("button.partialApplyHoverButton")),
							S = t.$fhb(v, t.$("span"));
						S.textContent = $;
						const I = t.$fhb(v, t.$("span.partialApplyCommandHelpText")),
							P = this.s.lookupKeybinding(y)?.getLabel() || "";
						return (I.textContent = P), v;
					}
					dispose() {
						super.dispose(), this.r.removeContentWidget(this);
					}
					getId() {
						return "PartialApplyHoverWidget";
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return this.h.type === p.Type.Showing
							? this.h.widgetPosition
							: null;
					}
					update() {
						if (this.q) return this.hide();
						const l = this.r.getModel(),
							y = this.r.getSelection();
						if (
							!l ||
							!y ||
							y.isEmpty() ||
							(!this.r.hasTextFocus() && !this.r.hasWidgetFocus())
						)
							return this.hide();
						if (
							!(
								y.startLineNumber !== y.endLineNumber ||
								(y.startColumn <=
									l.getLineFirstNonWhitespaceColumn(y.startLineNumber) &&
									y.endColumn >=
										l.getLineLastNonWhitespaceColumn(y.endLineNumber))
							)
						)
							return this.hide();
						const v = y.endLineNumber,
							S = v + 1,
							I = l.getLineLength(v) === 0;
						(this.h = new p.Showing(
							{ lineNumber: v, column: 1 },
							{
								position: { lineNumber: I ? v : S, column: 1 },
								preference: [E.ContentWidgetPositionPreference.EXACT],
							},
						)),
							this.r.layoutContentWidget(this);
					}
					hide() {
						this.h !== p.Hidden &&
							((this.h = p.Hidden), this.r.layoutContentWidget(this));
					}
					updateSlashEditOptions(l) {
						(this.n = l), this.I();
					}
					updateUri(l) {
						(this.m = l), this.I();
					}
					I() {
						if (!this.m) {
							this.c.style.display = "none";
							return;
						}
						this.c.style.display = "block";
						const l = this.c.querySelector("span");
						if (l) {
							for (; l.firstChild; ) l.removeChild(l.firstChild);
							l.appendChild(
								document.createTextNode(
									`Apply to ${(0, n.$sc)(this.G.asRelativePath(this.m))}`,
								),
							);
						}
					}
				};
				(e.$J$b = o),
					(e.$J$b = o =
						Ne(
							[
								j(1, d.$uZ),
								j(2, C.$ek),
								j(3, m.$0zb),
								j(4, r.$Li),
								j(5, a.$nM),
								j(6, h.$QO),
								j(7, c.$R0b),
								j(8, g.$Vi),
							],
							o,
						));
				function f(s) {
					const l = b(s) - 80;
					let $ = s.getOption(u.EditorOption.fontInfo).spaceWidth;
					return Math.floor(l / $);
				}
				function b(s) {
					let l = s.getLayoutInfo(),
						y = l.width - 50,
						$ = l.decorationsWidth + l.verticalScrollbarWidth;
					return y - $;
				}
			},
		),
		define(
			de[1934],
			he([1, 0, 46, 149, 3, 69, 8, 5, 90, 45, 10, 3987, 23]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$K$b = void 0);
				let n = class extends w.$1c {
					static {
						c = this;
					}
					static {
						this.ID = "editor.contrib.partialApplyHoverController";
					}
					static get(p) {
						return p.getContribution(c.ID);
					}
					constructor(p, o, f, b, s, l, y) {
						super(),
							(this.j = b),
							(this.m = l),
							(this.n = y),
							(this.f = !1),
							(this.a = p),
							(this.b = new i.$Y(() =>
								this.D(b.createInstance(a.$J$b, this.a)),
							)),
							this.D(this.a.onDidChangeModel(() => this.r())),
							this.D(this.a.onDidChangeModelLanguage(() => this.r())),
							this.D(this.a.onDidBlurEditorText(() => this.r())),
							this.D(this.a.onDidChangeCursorPosition(() => this.r())),
							this.D(
								this.a.onMouseDown(() => {
									(this.f = !0), this.r();
								}),
							),
							this.D(
								this.a.onMouseUp(() => {
									(this.f = !1), this.r();
								}),
							),
							(this.c = this.D(this.m.createScoped(this))),
							this.r();
					}
					q() {
						return this.a.hasModel() ? this.a.getSelection() : void 0;
					}
					updateUri(p) {
						(this.g = p), this.b.hasValue && this.b.value.updateUri(p);
					}
					updateSlashEditOptions(p) {
						(this.h = p),
							this.b.hasValue && this.b.value.updateSlashEditOptions(p);
					}
					r() {
						const p = this.a.getModel();
						if (!(!p || !p.uri || !this.g)) {
							if (!(0, h.$Vg)(p.uri, "aichat-code-block-anysphere")) {
								this.b.value.hide();
								return;
							}
							if (p) {
								const o = this.q();
								!this.f && o
									? (this.b.value.updateUri(this.g),
										this.h && this.b.value.updateSlashEditOptions(this.h),
										this.b.value.update())
									: this.b.value.hide();
							}
						}
					}
				};
				(e.$K$b = n),
					(e.$K$b =
						n =
						c =
							Ne(
								[
									j(1, m.$aM),
									j(2, C.$6j),
									j(3, d.$Li),
									j(4, E.$k3),
									j(5, r.$0zb),
									j(6, u.$gj),
								],
								n,
							)),
					(0, t.$qtb)(n.ID, n, t.EditorContributionInstantiation.Eventually);
			},
		),
		define(
			de[720],
			he([
				1, 0, 20, 196, 17, 104, 5, 32, 118, 42, 567, 383, 31, 315, 3, 25, 670,
				400, 9, 47, 65, 90, 479, 205, 45, 779, 684, 471, 644, 228, 620, 191,
				1113, 226, 245, 58, 414, 69, 1281, 48, 33, 75, 204, 332, 401, 280,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$d0b = void 0),
					(e.$d0b = (0, C.$Mi)("cmdKService2"));
				function K(W) {
					const X = [];
					let Y = !0;
					return (
						(async () => {
							for await (const ne of W) {
								const ee = { value: ne, done: !1 };
								X.forEach((_) => _(ee));
							}
							const ie = { value: void 0, done: !0 };
							X.forEach((ne) => ne(ie)), (Y = !1);
						})(),
						function () {
							let ne = [],
								ee = null;
							const _ = (Q) => {
								ee ? (ee(Q), (ee = null)) : ne.push(Q);
							};
							X.push(_);
							async function* te() {
								try {
									for (; Y || ne.length; )
										ne.length
											? yield ne.shift().value
											: await new Promise((Q) => {
													ee = (Z) => {
														Q(), Z.done || ne.push(Z);
													};
												});
								} finally {
									const Q = X.indexOf(_);
									Q !== -1 && X.splice(Q, 1);
								}
							}
							return {
								[Symbol.asyncIterator]() {
									return te();
								},
							};
						}
					);
				}
				let J = class extends n.$1c {
					constructor(
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
					) {
						super(),
							(this.c = X),
							(this.f = Y),
							(this.g = ie),
							(this.h = ne),
							(this.j = ee),
							(this.m = _),
							(this.n = te),
							(this.q = Q),
							(this.t = Z),
							(this.u = se),
							(this.w = re),
							(this.z = le),
							(this.C = oe),
							(this.F = ae),
							(this.G = pe),
							(this.H = $e),
							(this.I = ye),
							(this.J = ue),
							(this.L = fe),
							(this.M = me),
							(this.N = ve),
							(this.O = ge),
							(this.P = be);
					}
					async preloadEditWithSelection(X, Y, ie, ne) {
						const ee = await this.w.getPreparedEditRequest({
							query: "",
							fastMode: !0,
							lineRange: Y,
							codeBlocks: [],
							docs: [],
							spoofedCellId: ne,
							modelUriForEdit: ie,
						});
						X(ee);
						const _ = await this.c.aiClient();
						try {
							const te = this.c.getModelDetails({
								specificModelField: "cmd-k",
							});
							await _.preloadEdit(
								{ req: { ...ee, modelDetails: te } },
								{ headers: (0, D.$m6b)((0, b.$9g)()) },
							);
						} catch (te) {
							console.error(te);
							return;
						}
					}
					Q(X, Y) {
						return (
							X.positionColumn === Y.positionColumn &&
							X.positionLineNumber === Y.positionLineNumber &&
							X.selectionStartColumn === Y.selectionStartColumn &&
							X.selectionStartLineNumber === Y.selectionStartLineNumber
						);
					}
					R(X, Y) {
						return X.text === Y.text && this.Q(X.range, Y.range);
					}
					addContextToBackground(X) {
						this.z.nonPersistentStorage.cmdkBackgroundContextSelections.find(
							(ne) => ne.uri.toString() === X.uri.toString(),
						)
							? this.z.setNonPersistentStorage(
									"cmdkBackgroundContextSelections",
									(ne) => ne.uri.toString() === X.uri.toString(),
									"selections",
									(ne) =>
										ne.find((_) => this.R(_, X.selection))
											? ne
											: [...ne, X.selection],
								)
							: this.z.setNonPersistentStorage(
									"cmdkBackgroundContextSelections",
									(ne) => [...ne, { uri: X.uri, selections: [X.selection] }],
								),
							x.$Bfb.setTimeout(
								() => {
									this.z.setNonPersistentStorage(
										"cmdkBackgroundContextSelections",
										(ne) => ne.uri.toString() === X.uri.toString(),
										"selections",
										[],
									);
								},
								10 * 60 * 1e3,
							);
					}
					removeTerminalFollowup({ data: X, setData: Y }) {
						Y("chatResponse", void 0);
						const ie = X.queryHistory;
						if (ie === void 0) return;
						const ne = {
								case: "terminalCmdKQueryHistory",
								queryHistory: ie.current,
							},
							_ = [...X.previousStructuredTextsNewestFirst],
							te = (0, y.$N7b)({
								req: ne,
								previousStructuredTextsNewestFirst: _,
								options: { structured: !0 },
							});
						Y("plainText", te),
							Y("richText", te),
							Y("delegate", new p.$KN()),
							Y("inputBoxDelegate", new $.$Zzb()),
							Y("queryHistory", void 0),
							Y("previousStructuredTextsNewestFirst", []),
							Y("forceRerenderInputBox", (Q) => Q + 1),
							setTimeout(() => {
								X.inputBoxDelegate.focus();
							}, 10);
					}
					addTerminalFollowup({
						req: X,
						structuredQuery: Y,
						data: ie,
						setData: ne,
					}) {
						if (
							this.z.nonPersistentStorage.promptBars.find(
								(_) => _.id === ie.uuid,
							)?.preventFollowupFromBeingAdded === !0
						)
							return;
						X.case === "chatHistory"
							? ne("chatHistory", new v.$wAb(X.chatHistory))
							: ne("queryHistory", new v.$wAb(X.queryHistory)),
							X.case !== "chatHistory" &&
								ne("previousStructuredTextsNewestFirst", (_) =>
									typeof Y == "string" ? [Y, ..._] : [...Y, ..._],
								);
						const ee = ie.inputBoxDelegate.isFocused();
						ne("plainText", ""),
							ne("richText", ""),
							ne("delegate", new p.$KN()),
							ne("inputBoxDelegate", new $.$Zzb()),
							ne("forceRerenderInputBox", (_) => _ + 1),
							setTimeout(() => {
								ee && ie.inputBoxDelegate.focus();
							}, 10);
					}
					addFollowup({
						promptBarId: X,
						req: Y,
						options: ie,
						structuredQuery: ne,
					}) {
						const ee = this.z.nonPersistentStorage.promptBars.find(
							(le) => le.id === X,
						);
						if (ee?.preventFollowupFromBeingAdded === !0) return;
						const _ = ee?.originalRequest,
							te = ee?.queryHistory;
						Y.case === "originalRequest"
							? this.z.setNonPersistentStorage(
									"promptBars",
									(le) => le.id === X,
									"originalRequest",
									new v.$wAb(Y.req),
								)
							: Y.case === "chatHistory"
								? this.z.setNonPersistentStorage(
										"promptBars",
										(le) => le.id === X,
										"inlineChatHistory",
										new v.$wAb(Y.chatHistory),
									)
								: this.z.setNonPersistentStorage(
										"promptBars",
										(le) => le.id === X,
										"queryHistory",
										new v.$wAb(Y.queryHistory),
									),
							Y.case !== "chatHistory" &&
								this.z.setNonPersistentStorage(
									"promptBars",
									(le) => le.id === X,
									"previousStructuredTextsNewestFirst",
									(le) =>
										typeof ne == "string" ? [ne, ...le] : [...ne, ...le],
								);
						const Q = ee?.data.inputBoxDelegate.isFocused(),
							Z = ee?.data.delegate.getRichText() ?? "";
						this.z.setNonPersistentStorage(
							"promptBars",
							(le) => le.id === X,
							"data",
							"initText",
							"",
						),
							this.z.setNonPersistentStorage(
								"promptBars",
								(le) => le.id === X,
								"data",
								"delegate",
								new p.$KN(),
							),
							this.z.setNonPersistentStorage(
								"promptBars",
								(le) => le.id === X,
								"data",
								"inputBoxDelegate",
								new $.$Zzb(),
							);
						const se = this.z.nonPersistentStorage.promptBars.find(
							(le) => le.id === X,
						);
						if (
							(this.z.setNonPersistentStorage(
								"promptBars",
								(le) => le.id === X,
								"forceRerenderInputBox",
								(le) => le + 1,
							),
							setTimeout(() => {
								if (Q) {
									const le = this.z.nonPersistentStorage.promptBars.find(
										(oe) => oe.id === X,
									);
									if (!le) return;
									le.data.inputBoxDelegate.focus();
								}
							}, 10),
							Y.case === "chatHistory")
						)
							return;
						const re = ee?.uri;
						re &&
							ie?.pushUndoRedo !== !1 &&
							this.u.pushUndoElement(
								new S.$y7b(
									"Undo Add Followup",
									"undo-add-followup",
									ee.diffId,
									re,
									() => {
										this.z.setNonPersistentStorage(
											"promptBars",
											(le) => le.id === X,
											"originalRequest",
											_,
										),
											this.z.setNonPersistentStorage(
												"promptBars",
												(le) => le.id === X,
												"queryHistory",
												te,
											),
											this.z.setNonPersistentStorage(
												"promptBars",
												(le) => le.id === X,
												"data",
												"initText",
												Z,
											),
											this.z.setNonPersistentStorage(
												"promptBars",
												(le) => le.id === X,
												"data",
												"delegate",
												new p.$KN(),
											),
											this.z.setNonPersistentStorage(
												"promptBars",
												(le) => le.id === X,
												"data",
												"inputBoxDelegate",
												new $.$Zzb(),
											),
											this.z.setNonPersistentStorage(
												"promptBars",
												(le) => le.id === X,
												"forceRerenderInputBox",
												(le) => le + 1,
											),
											setTimeout(() => {
												const le = this.z.nonPersistentStorage.promptBars.find(
													(oe) => oe.id === X,
												);
												le && le.data.inputBoxDelegate.focus();
											}, 10);
									},
									() => {
										this.addFollowup({
											promptBarId: X,
											req: Y,
											structuredQuery: ne,
											options: { pushUndoRedo: !1 },
										});
									},
								),
								{ breakConsolidation: !1 },
							);
					}
					removeFollowup(X, Y) {
						this.z.setNonPersistentStorage(
							"promptBars",
							(re) => re.id === X,
							"chatResponse",
							void 0,
						),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"errorDetails",
								void 0,
							);
						const ie = this.z.nonPersistentStorage.promptBars.find(
								(re) => re.id === X,
							),
							ne = ie?.originalRequest,
							ee = ie?.queryHistory;
						if (ne === void 0 && ee === void 0) return;
						const _ = ne
								? { case: "originalRequest", req: ne.current }
								: { case: "cmdKQueryHistory", queryHistory: ee.current },
							te = ie?.previousStructuredTextsNewestFirst;
						if (te === void 0) return;
						const Q = [...te],
							Z = (0, y.$N7b)({
								req: _,
								previousStructuredTextsNewestFirst: Q,
								options: { structured: !0 },
							});
						this.z.setNonPersistentStorage(
							"promptBars",
							(re) => re.id === X,
							"data",
							"initText",
							Z,
						),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"data",
								"delegate",
								new p.$KN(),
							),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"data",
								"inputBoxDelegate",
								new $.$Zzb(),
							),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"originalRequest",
								void 0,
							),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"queryHistory",
								void 0,
							),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"previousStructuredTextsNewestFirst",
								[],
							),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"forceRerenderInputBox",
								(re) => re + 1,
							),
							setTimeout(() => {
								const re = this.z.nonPersistentStorage.promptBars.find(
									(le) => le.id === X,
								);
								re && re.data.inputBoxDelegate.focus();
							}, 10);
						const se = ie?.uri;
						se &&
							Y?.pushUndoRedo !== !1 &&
							this.u.pushUndoElement(
								new S.$y7b(
									"Undo Remove Followup",
									"undo-remove-followup",
									ie?.diffId,
									se,
									() => {
										this.addFollowup({
											promptBarId: X,
											req: _,
											structuredQuery: Q,
											options: { pushUndoRedo: !1 },
										});
									},
									() => {
										this.removeFollowup(X, { pushUndoRedo: !1 });
									},
								),
								{ breakConsolidation: !1 },
							);
					}
					async getPromptBarCurrentRange(X) {
						const Y = await this.J.createModelReference(X.uri);
						try {
							return Y === void 0
								? void 0
								: this.w.getPromptBarCurrentRange(X, Y.object.textEditorModel);
						} finally {
							Y.dispose();
						}
					}
					submitContextSessionEditWithMultipleGenerations(
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
					) {
						const ve = X.contextSessionUuid,
							ge =
								this.z.applicationUserPersistentStorage.cmdKGenerationConfigs;
						let be = this.z.nonPersistentStorage.promptBars.find(
							(He) => He.id === Y,
						);
						be?.multiGenerationConfigs ||
							(this.z.setNonPersistentStorage(
								"promptBars",
								(He) => He.id === Y,
								"multiGenerationConfigs",
								ge,
							),
							(be = this.z.nonPersistentStorage.promptBars.find(
								(He) => He.id === Y,
							))),
							be?.multiGenerationConfigs ||
								console.error("promptBar missing multiGenerationConfigs", Y);
						const Ce = be?.multiGenerationConfigs ?? ge;
						if (!Ce)
							throw new Error("promptBar missing multiGenerationConfigs");
						const Le = Ce[0].generationUUID,
							Fe = Ce.length > 1 ? Ce[1].generationUUID : Le;
						let Oe = new AbortController();
						return {
							abortController: Oe,
							generationUUID: Fe,
							promise: (async () => {
								this.m.publicLogCapture("Submitted cmd-k"),
									this.m.publicLogCapture("Submitted Prompt"),
									this.z.setNonPersistentStorage(
										"promptBars",
										(qe) => qe.id === Y,
										"chatResponse",
										void 0,
									),
									this.z.setNonPersistentStorage(
										"promptBars",
										(qe) => qe.id === Y,
										"errorDetails",
										void 0,
									);
								const He = this.q.getActiveCodeEditor();
								if (!He) return;
								if (!He.hasModel()) {
									console.error("No model found, cannot edit.");
									return;
								}
								const Ke = He.getModel(),
									Je = new i.$rL(
										ee.startLineNumber,
										ee.endLineNumberExclusive,
									).toExclusiveRange();
								for (let qe of Ce.map((Ae) => Ae.generationUUID))
									this.n.recordCmdKEvent(Ke, {
										requestId: qe,
										promptBarId: Y,
										eventType: {
											case: "submitPrompt",
											value: {
												prompt: ie,
												originalRange: Je,
												originalText: Ke.getValueInRange(Je),
											},
										},
									});
								He.setPosition({ lineNumber: ee.startLineNumber, column: 1 });
								const Te = await this.C.getCmdKDebugInfo(),
									Ee = Ce.map(({ generationUUID: qe }) => qe);
								console.log("GENERATION CONFIGS", Ce);
								let Ie = !1,
									Be = !1;
								const Se = (qe) => {
									Be || ((Be = !0), re?.(qe));
								};
								let ke = !0;
								const Ue = await Promise.all(
									Ce.map(
										async ({ modelDetails: qe, generationUUID: Ae }, Me) => {
											let De = new AbortController();
											this.m.publicLogCapture("submitted.cmd-k", {
												model: qe.modelName,
											});
											const [Re, je] = this.c.registerNewGeneration({
												metadata: { type: "cmdk" },
												generationUUID: Ae,
											});
											Oe.signal.addEventListener("abort", () => {
												De.abort();
											}),
												De.signal.addEventListener("abort", () => {
													je.abort();
												});
											let Ve = [];
											je.signal.addEventListener("abort", () => {
												Ve.at(-1)?.response?.case !== "editEnd" &&
													(console.log("inner abort", Ae, Ve),
													console.error(
														"aborting cmd-k generation even though it's not finished. you should def tell andrew abt this, this is a spooky abortcontroller bug",
														Ae,
													));
											}),
												this.c.decrementBubbleTimesLeft(),
												this.c.addToPromptHistory({
													prompt: ie,
													commandType: L.CommandType.EDIT,
												});
											const Ze = await this.J.createModelReference(X.fileUri);
											try {
												const et = Ze.object.textEditorModel,
													rt = await this.c.cmdKClient(),
													ft = await this.w.getPreparedEditRequest({
														query: ie,
														fastMode: !1,
														lineRange: ee,
														codeBlocks: _,
														docs: te,
														spoofedSelection: pe,
														spoofedDiagnostics: $e,
														spoofedCellId: ye,
														images: Q,
														links: Z,
														originalRequest: X.originalRequest,
														modelUriForEdit: X.fileUri,
													}),
													bt = await (async () =>
														new P.$DC({
															explicitContext: ft.explicitContext,
															promptCodeBlocks: ft.promptCodeBlocks,
															documentationIdentifiers:
																ft.documentationIdentifiers,
														}))();
												let nt = this.z.nonPersistentStorage.promptBars.find(
													(ri) => ri.id === Y,
												);
												if (nt === void 0) return;
												let lt = [];
												await Promise.all(
													this.z.nonPersistentStorage.promptBars
														.filter((ri) => ri.id !== Y)
														.map(async (ri) => {
															if (ri.dependencyPromptBarIds.includes(nt.id)) {
																const $i =
																	this.z.nonPersistentStorage.inlineDiffs.find(
																		(Wt) => Wt.id === ri.diffId,
																	);
																if ($i !== void 0)
																	lt.push(
																		new P.$vC({
																			relativePath: this.g.asRelativePath(
																				ri.uri,
																				!1,
																			),
																			originalLines: $i.originalTextLines,
																			extraContextAbove:
																				$i.extraContextLinesAbove,
																			extraContextBelow:
																				$i.extraContextLinesBelow,
																		}),
																	);
																else {
																	const Wt =
																		await this.getPromptBarCurrentRange(ri);
																	if (Wt) {
																		const at = (
																				await this.J.createModelReference(
																					ri.uri,
																				)
																			).object.textEditorModel,
																			pi = Math.min(
																				Math.max(
																					Wt.endLineNumberExclusive - 1,
																					Wt.startLineNumber,
																				),
																				et.getLineCount(),
																			),
																			Li = et.getLineMaxColumn(pi),
																			Di = new E.$kL(
																				Wt.startLineNumber,
																				1,
																				pi,
																				Li,
																			),
																			Ui = at.getLineMaxColumn(
																				Di.endLineNumber,
																			),
																			Wi = new w.$iL(
																				Di.startLineNumber,
																				1,
																				Di.endLineNumber,
																				Ui,
																			),
																			Gi = at.getValueInRange(Wi),
																			qi = at.getValueInRange(
																				w.$iL.getRangeAbove(new w.$iL(Wi), 5),
																			),
																			Oi = at.getValueInRange(
																				w.$iL.getRangeOnBelow(
																					new w.$iL(Wi),
																					5,
																					at.getLineCount(),
																				),
																			),
																			yi =
																				Gi.trim() === ""
																					? []
																					: Gi.split(at.getEOL()),
																			Ai =
																				qi.trim() === ""
																					? []
																					: qi.split(at.getEOL()),
																			li =
																				Oi.trim() === ""
																					? []
																					: Oi.split(at.getEOL());
																		lt.push(
																			new P.$vC({
																				relativePath: this.g.asRelativePath(
																					ri.uri,
																					!1,
																				),
																				originalLines: yi,
																				extraContextAbove: Ai,
																				extraContextBelow: li,
																			}),
																		);
																	}
																}
															}
														}),
												);
												let ct = [];
												nt.dependencyPromptBarIds.length > 0 &&
													nt.dependencyPromptBarIds
														.map((Wt) =>
															this.z.nonPersistentStorage.promptBars.find(
																(tt) => tt.id === Wt,
															),
														)
														.map((Wt) =>
															this.z.nonPersistentStorage.inlineDiffs.find(
																(tt) => tt.id === Wt?.diffId,
															),
														)
														.forEach((Wt) => {
															Wt !== void 0 &&
																ct.push(
																	new P.$wC({
																		relativePath: this.g.asRelativePath(Wt.uri),
																		originalLines: Wt.originalTextLines,
																		newLines: (0, a.$57b)(Wt),
																		extraContextAbove:
																			Wt.extraContextLinesAbove,
																		extraContextBelow:
																			Wt.extraContextLinesBelow,
																	}),
																);
														});
												let gt = [];
												const ht = X.isHyperMode ?? !1;
												if (
													this.z.applicationUserPersistentStorage.checklistState
														?.doneCommandK !== !0
												) {
													const ri =
														this.z.applicationUserPersistentStorage
															.checklistState;
													this.z.setApplicationUserPersistentStorage(
														"checklistState",
														($i) => ({ ...($i ?? {}), doneCommandK: !0 }),
													);
												}
												const Rt = await this.F.streamRequestWithContextWrapped(
													ve,
													{
														request: {
															cmdKOptions: {
																modelDetails: qe,
																chatMode: X.chatMode,
																adaCmdKContext: !1,
																useReranker: X.useReranker,
																useWeb: X.useWeb,
															},
															cmdKDebugInfo: Te,
															legacyContext: bt,
															sessionId: Y,
															previousEdits: ct ?? [],
															upcomingEdits: lt ?? [],
															images: ft.images,
															links: ft.links,
															hyperModel: ht ? X.hyperModel : void 0,
															diffHistory: gt,
															diffToBaseBranch: void 0,
														},
														finalInput: {
															case: "cmd-k",
															fileUri: X.fileUri,
															query: ie,
															replaceRange: X.diffRange ?? ee,
															queryHistory: X.queryHistory,
															chatHistory: nt?.inlineChatHistory?.current,
														},
														endpoint: async (ri, $i) =>
															ht
																? rt.streamHypermode(new P.$xC(ri), $i)
																: rt.streamCmdK(new P.$yC(ri), $i),
														generationUUID: Ae,
														abortSignal: je.signal,
														frozenDesire: "unfreezeOnStreamCompletion",
													},
												);
												if (!Rt.ok()) return;
												const Nt =
														M.$J0.typeName +
														"/" +
														M.$J0.methods.streamCmdK.name,
													jt = this.c.streamResponse({
														modelDetails: qe,
														streamer: Rt.v,
														generationUUID: Ae,
														streamerURL: Nt,
														rethrowCancellation: !0,
														rerun: ue,
														source: ht ? "other" : "cmd-k",
													}),
													ti = this.O,
													kt = this.z,
													hi = (async function* () {
														try {
															let ri = 0;
															for await (const $i of jt)
																yield $i, Ve.push($i), ri++;
														} catch (ri) {
															if (ti.shouldShowImmediateErrorMessage(ri)) {
																const $i = (0, V.$X6b)(ri);
																kt.setNonPersistentStorage(
																	"promptBars",
																	(Wt, tt) => Wt.id === Y,
																	"errorDetails",
																	{
																		generationUUID: Ae,
																		error: $i,
																		message: ri?.rawMessage,
																		rerun: void 0,
																	},
																);
															}
															throw ri;
														}
													})(),
													Kt = this.F.getReactiveReadonlyContextSession(ve);
												if (!Kt)
													throw new Error(
														"BIG ARVID BUG: context session is undefined",
													);
												const di = Kt.intents
													.find(
														(ri) => ri.intent.intent.case === "cmdKCurrentFile",
													)
													?.items.find(
														(ri) => ri.item.item.case === "cmdKSelection",
													)?.item.item.value;
												if (!di)
													throw new Error(
														"BIG ARVID BUG: cmdKSelectionItem is undefined",
													);
												let Ye = di.lines;
												const ze = Kt.intents
													.find(
														(ri) => ri.intent.intent.case === "cmdKQueryEtc",
													)
													?.items.find(
														(ri) => ri.item.item.case === "cmdKQuery",
													)?.item.item.value;
												if (!ze)
													throw new Error(
														"BIG ARVID BUG: cmdKQuery is undefined",
													);
												const Xe = Kt.intents
													.find(
														(ri) => ri.intent.intent.case === "cmdKCurrentFile",
													)
													?.items.find(
														(ri) =>
															ri.item.item.case === "cmdKImmediateContext",
													)?.item.item.value;
												if (!Xe)
													throw new Error(
														"BIG ARVID BUG: cmdKImmediateContext is undefined",
													);
												const It = Kt.intents
														.find(
															(ri) => ri.intent.intent.case === "cmdKQueryEtc",
														)
														?.items.find(
															(ri) => ri.item.item.case === "chatHistory",
														)?.item.item.value,
													Lt = Kt.intents
														.find(
															(ri) => ri.intent.intent.case === "cmdKQueryEtc",
														)
														?.items.find(
															(ri) => ri.item.item.case === "cmdKQueryHistory",
														)?.item.item.value;
												let xt = Lt;
												for (; xt !== void 0; )
													(Ye = xt.selection?.lines ?? []),
														(xt = xt.queryHistory);
												const Vt = {
														query: ze,
														immediateContext: Xe,
														selection: di,
														queryHistory: Lt,
														contextItemHashes: Kt.intents.flatMap((ri) =>
															ri.items.map(($i) => $i.itemHash),
														),
													},
													Bt = () => {
														console.log(
															"real done callback being called. you should only ever see this message once",
														),
															console.log("adding followup..."),
															Ie ||
																((Ie = !0),
																this.addFollowup({
																	promptBarId: Y,
																	req: {
																		case: "cmdKQueryHistory",
																		queryHistory: Vt,
																	},
																	structuredQuery: ne,
																})),
															console.log("calling the done callback arg"),
															le?.();
													};
												if (X.chatMode === !0) {
													await this.handleChatResponse({
														promptBarId: Y,
														stream: hi,
														generationUUID: Ae,
														doneCallback: () => {
															Bt();
														},
													});
													return;
												}
												ke && (X.rejectCurrentDiff(), (ke = !1));
												const Gt = et.getEOL(),
													Mt = (ri) => {
														this.z.setNonPersistentStorage(
															"promptBars",
															($i) => $i.id === Y,
															"statusUpdate",
															ri,
														);
													},
													Ut = this.c.streamLines(
														(async function* () {
															for await (const ri of hi)
																ri.response.case === "editStream"
																	? yield ri.response.value.text.replace(
																			`
`,
																			Gt,
																		)
																	: ri.response.case === "statusUpdate" &&
																		Mt(ri.response.value.messages);
														})(),
													);
												let ei = Ut;
												if (fe) {
													const ri = K(Ut);
													(ei = ri()), fe(ri());
												}
												if (De.signal.aborted) return;
												const mi = Ye.every((ri) => ri.trim() === "");
												nt = this.z.nonPersistentStorage.promptBars.find(
													(ri) => ri.id === Y,
												);
												const ii =
														this.w.getPromptBarCurrentRange(nt, et) ?? ee,
													Dt = et.getValueInRange(
														w.$iL.getRangeAbove(new w.$iL(ii), 5),
													),
													Jt = et.getValueInRange(
														w.$iL.getRangeOnBelow(
															new w.$iL(ii),
															5,
															et.getLineCount(),
														),
													),
													si = Dt.split(et.getEOL()),
													Zt = Jt.split(et.getEOL()),
													ci = [];
												for (
													let ri = ii.startLineNumber;
													ri < ii.endLineNumberExclusive;
													ri++
												)
													et.tokenization.forceTokenization(ri),
														ci.push(
															et.tokenization.getLineTokens(ri).extractObject(),
														);
												if (
													X.isHeadless_onlyAvailableWithUseContextSession === !0
												) {
													let ri = [];
													for await (const $i of ei) ri.push($i);
													return ri.join(Gt);
												}
												return (
													console.log(
														`calling streammultidiff for generation ${Ae}. is main generation? ${Le === Ae}`,
													),
													await this.u.streamMultiDiff({
														abortController: De,
														uri: X.fileUri,
														originalLineRange: new i.$rL(
															ii.startLineNumber,
															ii.endLineNumberExclusive,
														),
														generationUUID: Ae,
														orderedGenerationUUIDs: Ee,
														streamingLines: ei,
														prompt: ie,
														originalTextLines: et
															.getValueInRange({
																startLineNumber: ii.startLineNumber,
																startColumn: 1,
																endLineNumber: ii.endLineNumberExclusive - 1,
																endColumn: et.getLineMaxColumn(
																	ii.endLineNumberExclusive - 1,
																),
															})
															.split(Gt),
														originalLineTokens: ci,
														extraContextLinesAbove: si,
														extraContextLinesBelow: Zt,
														hideDeletionViewZones: mi,
														isHidden: !1,
														undoRedo: {
															undo: () => {
																se();
															},
															redo: () => {},
														},
														diffIdCallback: (ri) => {
															if (De.signal.aborted) {
																this.u.cancelDiff(ri, Ae);
																return;
															} else
																De.signal.addEventListener("abort", () => {
																	this.u.cancelDiff(ri, Ae);
																});
															Se?.(ri);
														},
														doneCallback: (ri) => {
															console.log("calling done callback");
														},
														globalDoneCallback: Bt,
														cancelGenerationWithNoChangesCallback: oe,
														rejectCallback: ae,
														promptBarId: Y,
													})
												);
											} catch (et) {
												console.error(et),
													this.z.setNonPersistentStorage(
														"inprogressAIGenerations",
														(rt) => rt.filter((ft) => ft.generationUUID !== Ae),
													);
											} finally {
												Ze.dispose();
											}
										},
									),
								);
							})(),
						};
					}
					submitContextSessionEdit(
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
					) {
						if (ve) {
							if (
								X.chatMode !== !0 &&
								this.z.applicationUserPersistentStorage
									.allowMultiCmdKGenerations
							)
								return this.submitContextSessionEditWithMultipleGenerations(
									X,
									Y,
									ie,
									ne,
									ee,
									_,
									te,
									Q,
									Z,
									se,
									re,
									le,
									oe,
									ae,
									pe,
									$e,
									ye,
									ue,
									fe,
									me,
								);
							console.error(
								"Tried to do multiple generations, but they're banned!",
							);
						}
						const ge = X.contextSessionUuid,
							be = (0, b.$9g)();
						let Ce = new AbortController();
						return {
							abortController: Ce,
							generationUUID: be,
							promise: (async () => {
								this.m.publicLogCapture("Submitted cmd-k"),
									this.m.publicLogCapture("Submitted Prompt"),
									this.z.setNonPersistentStorage(
										"promptBars",
										(Ie) => Ie.id === Y,
										"chatResponse",
										void 0,
									),
									this.z.setNonPersistentStorage(
										"promptBars",
										(Ie) => Ie.id === Y,
										"errorDetails",
										void 0,
									);
								const Fe = this.q.getActiveCodeEditor();
								if (!Fe) return;
								if (!Fe.hasModel()) {
									console.error("No model found, cannot edit.");
									return;
								}
								const Oe = Fe.getModel(),
									xe = new i.$rL(
										ee.startLineNumber,
										ee.endLineNumberExclusive,
									).toExclusiveRange();
								this.n.recordCmdKEvent(Oe, {
									requestId: be,
									promptBarId: Y,
									eventType: {
										case: "submitPrompt",
										value: {
											prompt: ie,
											originalRange: xe,
											originalText: Oe.getValueInRange(xe),
										},
									},
								}),
									Fe.setPosition({ lineNumber: ee.startLineNumber, column: 1 });
								const He = await this.C.getCmdKDebugInfo(),
									Ke = this.c.getModelDetails({ specificModelField: "cmd-k" });
								this.m.publicLogCapture("submitted.cmd-k", {
									model: Ke.modelName,
								});
								const [Je, Te] = this.c.registerNewGeneration({
									metadata: { type: "cmdk" },
									generationUUID: be,
								});
								Ce.signal.addEventListener("abort", () => {
									Te.abort();
								}),
									this.c.decrementBubbleTimesLeft(),
									this.c.addToPromptHistory({
										prompt: ie,
										commandType: L.CommandType.EDIT,
									});
								const Ee = await this.J.createModelReference(X.fileUri);
								try {
									const Ie = Ee.object.textEditorModel,
										Be = await this.c.cmdKClient(),
										Se = await this.w.getPreparedEditRequest({
											query: ie,
											fastMode: !1,
											lineRange: ee,
											codeBlocks: _,
											docs: te,
											spoofedSelection: pe,
											spoofedDiagnostics: $e,
											spoofedCellId: ye,
											images: Q,
											links: Z,
											originalRequest: X.originalRequest,
											modelUriForEdit: X.fileUri,
										}),
										ke = await (async () =>
											new P.$DC({
												explicitContext: Se.explicitContext,
												promptCodeBlocks: Se.promptCodeBlocks,
												documentationIdentifiers: Se.documentationIdentifiers,
											}))();
									let Ue = this.z.nonPersistentStorage.promptBars.find(
										(Bt) => Bt.id === Y,
									);
									if (Ue === void 0) return;
									let qe = [];
									await Promise.all(
										this.z.nonPersistentStorage.promptBars
											.filter((Bt) => Bt.id !== Y)
											.map(async (Bt) => {
												if (Bt.dependencyPromptBarIds.includes(Ue.id)) {
													const Gt =
														this.z.nonPersistentStorage.inlineDiffs.find(
															(Mt) => Mt.id === Bt.diffId,
														);
													if (Gt !== void 0)
														qe.push(
															new P.$vC({
																relativePath: this.g.asRelativePath(Bt.uri, !1),
																originalLines: Gt.originalTextLines,
																extraContextAbove: Gt.extraContextLinesAbove,
																extraContextBelow: Gt.extraContextLinesBelow,
															}),
														);
													else {
														const Mt = await this.getPromptBarCurrentRange(Bt);
														if (Mt) {
															const ei = (
																	await this.J.createModelReference(Bt.uri)
																).object.textEditorModel,
																mi = Math.min(
																	Math.max(
																		Mt.endLineNumberExclusive - 1,
																		Mt.startLineNumber,
																	),
																	Ie.getLineCount(),
																),
																ii = Ie.getLineMaxColumn(mi),
																Dt = new E.$kL(Mt.startLineNumber, 1, mi, ii),
																Jt = ei.getLineMaxColumn(Dt.endLineNumber),
																si = new w.$iL(
																	Dt.startLineNumber,
																	1,
																	Dt.endLineNumber,
																	Jt,
																),
																Zt = ei.getValueInRange(si),
																ci = ei.getValueInRange(
																	w.$iL.getRangeAbove(new w.$iL(si), 5),
																),
																ri = ei.getValueInRange(
																	w.$iL.getRangeOnBelow(
																		new w.$iL(si),
																		5,
																		ei.getLineCount(),
																	),
																),
																$i =
																	Zt.trim() === "" ? [] : Zt.split(ei.getEOL()),
																Wt =
																	ci.trim() === "" ? [] : ci.split(ei.getEOL()),
																tt =
																	ri.trim() === "" ? [] : ri.split(ei.getEOL());
															qe.push(
																new P.$vC({
																	relativePath: this.g.asRelativePath(
																		Bt.uri,
																		!1,
																	),
																	originalLines: $i,
																	extraContextAbove: Wt,
																	extraContextBelow: tt,
																}),
															);
														}
													}
												}
											}),
									);
									let Ae = [];
									Ue.dependencyPromptBarIds.length > 0 &&
										Ue.dependencyPromptBarIds
											.map((Mt) =>
												this.z.nonPersistentStorage.promptBars.find(
													(Ut) => Ut.id === Mt,
												),
											)
											.map((Mt) =>
												this.z.nonPersistentStorage.inlineDiffs.find(
													(Ut) => Ut.id === Mt?.diffId,
												),
											)
											.forEach((Mt) => {
												Mt !== void 0 &&
													Ae.push(
														new P.$wC({
															relativePath: this.g.asRelativePath(Mt.uri),
															originalLines: Mt.originalTextLines,
															newLines: (0, a.$57b)(Mt),
															extraContextAbove: Mt.extraContextLinesAbove,
															extraContextBelow: Mt.extraContextLinesBelow,
														}),
													);
											});
									let Me = [],
										De;
									const Re = X.isHyperMode ?? !1;
									if (
										this.z.applicationUserPersistentStorage.checklistState
											?.doneCommandK !== !0
									) {
										const Bt =
											this.z.applicationUserPersistentStorage.checklistState;
										this.z.setApplicationUserPersistentStorage(
											"checklistState",
											(Gt) => ({ ...(Gt ?? {}), doneCommandK: !0 }),
										);
									}
									const je = await this.F.streamRequestWithContextWrapped(ge, {
										request: {
											cmdKOptions: {
												modelDetails: Ke,
												chatMode: X.chatMode,
												adaCmdKContext: !1,
												useReranker: X.useReranker,
												useWeb: X.useWeb,
											},
											cmdKDebugInfo: He,
											legacyContext: ke,
											sessionId: Y,
											previousEdits: Ae ?? [],
											upcomingEdits: qe ?? [],
											images: Se.images,
											links: Se.links,
											hyperModel: Re ? X.hyperModel : void 0,
											diffHistory: Me,
											diffToBaseBranch: De,
											timingInfo:
												me === void 0
													? void 0
													: { userInputTime: me, streamCmdkTime: Date.now() },
										},
										finalInput: {
											case: "cmd-k",
											fileUri: X.fileUri,
											query: ie,
											replaceRange: X.diffRange ?? ee,
											queryHistory: X.queryHistory,
											chatHistory: Ue?.inlineChatHistory?.current,
										},
										endpoint: async (Bt, Gt) =>
											Re
												? Be.streamHypermode(new P.$xC(Bt), Gt)
												: Be.streamCmdK(new P.$yC(Bt), Gt),
										generationUUID: be,
										abortSignal: Te.signal,
										frozenDesire: "unfreezeOnStreamCompletion",
									});
									if (!je.ok()) return;
									const Ve =
											M.$J0.typeName + "/" + M.$J0.methods.streamCmdK.name,
										Ze = this.c.streamResponse({
											modelDetails: Ke,
											streamer: je.v,
											generationUUID: be,
											streamerURL: Ve,
											rethrowCancellation: !0,
											rerun: ue,
											source: Re ? "other" : "cmd-k",
										}),
										et = this.O,
										rt = this.z,
										ft = (async function* () {
											try {
												let Bt = 0;
												for await (const Gt of Ze) yield Gt, Bt++;
											} catch (Bt) {
												if (et.shouldShowImmediateErrorMessage(Bt)) {
													const Gt = (0, V.$X6b)(Bt);
													rt.setNonPersistentStorage(
														"promptBars",
														(Mt, Ut) => Mt.id === Y,
														"errorDetails",
														{
															generationUUID: be,
															error: Gt,
															message: Bt?.rawMessage,
															rerun: void 0,
														},
													);
												}
												throw Bt;
											}
										})(),
										bt = this.F.getReactiveReadonlyContextSession(ge);
									if (!bt)
										throw new Error(
											"BIG ARVID BUG: context session is undefined",
										);
									const nt = bt.intents
										.find((Bt) => Bt.intent.intent.case === "cmdKCurrentFile")
										?.items.find((Bt) => Bt.item.item.case === "cmdKSelection")
										?.item.item.value;
									if (!nt)
										throw new Error(
											"BIG ARVID BUG: cmdKSelectionItem is undefined",
										);
									let lt = nt.lines;
									const ct = bt.intents
										.find((Bt) => Bt.intent.intent.case === "cmdKQueryEtc")
										?.items.find((Bt) => Bt.item.item.case === "cmdKQuery")
										?.item.item.value;
									if (!ct)
										throw new Error("BIG ARVID BUG: cmdKQuery is undefined");
									const gt = bt.intents
										.find((Bt) => Bt.intent.intent.case === "cmdKCurrentFile")
										?.items.find(
											(Bt) => Bt.item.item.case === "cmdKImmediateContext",
										)?.item.item.value;
									if (!gt)
										throw new Error(
											"BIG ARVID BUG: cmdKImmediateContext is undefined",
										);
									const ht = bt.intents
											.find((Bt) => Bt.intent.intent.case === "cmdKQueryEtc")
											?.items.find((Bt) => Bt.item.item.case === "chatHistory")
											?.item.item.value,
										Rt = bt.intents
											.find((Bt) => Bt.intent.intent.case === "cmdKQueryEtc")
											?.items.find(
												(Bt) => Bt.item.item.case === "cmdKQueryHistory",
											)?.item.item.value;
									let Nt = Rt;
									for (; Nt !== void 0; )
										(lt = Nt.selection?.lines ?? []), (Nt = Nt.queryHistory);
									const jt = {
											query: ct,
											immediateContext: gt,
											selection: nt,
											queryHistory: Rt,
											contextItemHashes: bt.intents.flatMap((Bt) =>
												Bt.items.map((Gt) => Gt.itemHash),
											),
										},
										ti = () => {
											Ce.abort();
											const Bt =
													X.chatMode === !0
														? (() => {
																const ei =
																	this.z.nonPersistentStorage.promptBars.find(
																		(ii) => ii.id === Y,
																	)?.chatResponse;
																return {
																	case: "chatHistory",
																	chatHistory: {
																		userMessage: ie,
																		assistantResponse: ei ?? "",
																		chatHistory: ht,
																		activeForCmdK: !1,
																	},
																};
															})()
														: { case: "cmdKQueryHistory", queryHistory: jt },
												Gt = this.z.nonPersistentStorage.promptBars.find(
													(Ut) => Ut.id === Y,
												),
												Mt = this.z.nonPersistentStorage.inlineDiffs.find(
													(Ut) => Ut.id === Gt?.diffId,
												);
											this.addFollowup({
												promptBarId: Y,
												req: Bt,
												structuredQuery: ne,
											}),
												le?.();
										};
									if (X.chatMode === !0) {
										await this.handleChatResponse({
											promptBarId: Y,
											stream: ft,
											generationUUID: be,
											doneCallback: () => {
												ti();
											},
										});
										return;
									}
									X.rejectCurrentDiff();
									const kt = Ie.getEOL(),
										hi = (Bt) => {
											this.z.setNonPersistentStorage(
												"promptBars",
												(Gt) => Gt.id === Y,
												"statusUpdate",
												Bt,
											);
										},
										Kt = this.c.streamLines(
											(async function* () {
												for await (const Bt of ft)
													Bt.response.case === "editStream"
														? yield Bt.response.value.text.replace(
																`
`,
																kt,
															)
														: Bt.response.case === "statusUpdate" &&
															hi(Bt.response.value.messages);
											})(),
										);
									let di = Kt;
									if (fe) {
										const Bt = K(Kt);
										(di = Bt()), fe(Bt());
									}
									if (Ce.signal.aborted) return;
									const Ye = lt.every((Bt) => Bt.trim() === "");
									Ue = this.z.nonPersistentStorage.promptBars.find(
										(Bt) => Bt.id === Y,
									);
									const ze = this.w.getPromptBarCurrentRange(Ue, Ie) ?? ee,
										Xe = Ie.getValueInRange(
											w.$iL.getRangeAbove(new w.$iL(ze), 5),
										),
										It = Ie.getValueInRange(
											w.$iL.getRangeOnBelow(
												new w.$iL(ze),
												5,
												Ie.getLineCount(),
											),
										),
										Lt = Xe.split(Ie.getEOL()),
										xt = It.split(Ie.getEOL()),
										Vt = [];
									for (
										let Bt = ze.startLineNumber;
										Bt < ze.endLineNumberExclusive;
										Bt++
									)
										Ie.tokenization.forceTokenization(Bt),
											Vt.push(
												Ie.tokenization.getLineTokens(Bt).extractObject(),
											);
									if (X.isHeadless_onlyAvailableWithUseContextSession === !0) {
										let Bt = [];
										for await (const Gt of di) Bt.push(Gt);
										return Bt.join(kt);
									}
									return await this.u.streamDiff({
										uri: X.fileUri,
										originalLineRange: new i.$rL(
											ze.startLineNumber,
											ze.endLineNumberExclusive,
										),
										generationUUID: be,
										streamingLines: di,
										prompt: ie,
										originalTextLines: Ie.getValueInRange({
											startLineNumber: ze.startLineNumber,
											startColumn: 1,
											endLineNumber: ze.endLineNumberExclusive - 1,
											endColumn: Ie.getLineMaxColumn(
												ze.endLineNumberExclusive - 1,
											),
										}).split(kt),
										originalLineTokens: Vt,
										extraContextLinesAbove: Lt,
										extraContextLinesBelow: xt,
										hideDeletionViewZones: Ye,
										isHidden: !1,
										undoRedo: {
											undo: () => {
												se();
											},
											redo: () => {},
										},
										diffIdCallback: (Bt) => {
											if (Ce.signal.aborted) {
												this.u.cancelDiff(Bt);
												return;
											} else
												Ce.signal.addEventListener("abort", () => {
													this.u.cancelDiff(Bt);
												});
											re?.(Bt);
										},
										doneCallback: (Bt) => {
											ti();
										},
										cancelGenerationWithNoChangesCallback: oe,
										rejectCallback: ae,
										promptBarId: Y,
									});
								} catch (Ie) {
									console.error(Ie),
										this.z.setNonPersistentStorage(
											"inprogressAIGenerations",
											(Be) => Be.filter((Se) => Se.generationUUID !== be),
										);
								} finally {
									Ee.dispose();
								}
							})(),
						};
					}
					async submitTerminalCmdK(X, Y, ie, ne) {
						this.m.publicLogCapture("Submitted cmd-k in terminal"),
							this.m.publicLogCapture("Submitted Prompt"),
							Y("chatResponse", void 0);
						const ee = this.c.getModelDetails({
							specificModelField: "terminal-cmd-k",
						});
						this.m.publicLogCapture("submitted.cmd-k-terminal", {
							model: ee.modelName,
						});
						const [_, te] = this.c.registerNewGeneration({
							metadata: { type: "cmdk" },
							generationUUID: ie,
						});
						this.c.addToPromptHistory({
							prompt: X.plainText,
							commandType: L.CommandType.EDIT,
						});
						try {
							Y("abortController", te);
							const Q = await this.c.cmdKClient(),
								Z = X.richText,
								se = X.plainText,
								re = await (async () =>
									new P.$DC({
										explicitContext: await this.c.getExplicitContext(),
									}))(),
								le = await this.F.streamRequestWithContextWrapped(
									X.contextSessionUuid,
									{
										request: {
											cmdKOptions: {
												modelDetails: ee,
												chatMode: ne.chatMode,
												adaCmdKContext: !1,
												useWeb: !!X.useWeb,
											},
											legacyContext: re,
											sessionId: X.uuid,
										},
										finalInput: {
											case: "terminal-cmd-k",
											query: se,
											instanceId: X.instanceId,
											queryHistory: X.queryHistory?.current,
											chatHistory: X.chatHistory?.current,
										},
										endpoint: async (me, ve) =>
											Q.streamTerminalCmdK(new P.$CC(me), ve),
										generationUUID: ie,
										abortSignal: te.signal,
										frozenDesire: "unfreezeOnStreamCompletion",
									},
								);
							if (!le.ok()) return ie;
							const oe =
									M.$J0.typeName + "/" + M.$J0.methods.streamTerminalCmdK.name,
								ae = this.c.streamResponse({
									modelDetails: ee,
									streamer: le.v,
									generationUUID: ie,
									rethrowCancellation: !0,
									streamerURL: oe,
									rerun: () => {},
									source: "other",
								}),
								pe = this.F.getReactiveReadonlyContextSession(
									X.contextSessionUuid,
								);
							if (!pe)
								throw new Error("BIG ARVID BUG: context session is undefined");
							const $e = pe.intents
								.find((me) => me.intent.intent.case === "terminalCmdKDefaults")
								?.items.find((me) => me.item.item.case === "terminalCmdKQuery")
								?.item.item.value;
							if (!$e) throw new Error("BIG ARVID BUG: cmdKQuery is undefined");
							const ye = pe.intents
									.find(
										(me) => me.intent.intent.case === "terminalCmdKDefaults",
									)
									?.items.find((me) => me.item.item.case === "chatHistory")
									?.item.item.value,
								ue = pe.intents
									.find(
										(me) => me.intent.intent.case === "terminalCmdKDefaults",
									)
									?.items.find(
										(me) => me.item.item.case === "terminalCmdKQueryHistory",
									)?.item.item.value,
								fe = () => {
									te.abort();
									const me =
										ne.chatMode === !0
											? (() => {
													const ve = X.chatResponse;
													return {
														case: "chatHistory",
														chatHistory: {
															userMessage: se,
															assistantResponse: ve ?? "",
															chatHistory: ye,
															activeForCmdK: !1,
														},
													};
												})()
											: (() => {
													const ve = X.suggestedCommand;
													return {
														case: "terminalCmdKQueryHistory",
														queryHistory: {
															query: $e,
															queryHistory: ue,
															contextItemHashes: pe.intents.flatMap((be) =>
																be.items.map((Ce) => Ce.itemHash),
															),
															suggestedCommand: ve,
														},
													};
												})();
									this.addTerminalFollowup({
										req: me,
										structuredQuery: Z,
										setData: Y,
										data: X,
									});
								};
							if (
								(ne.chatMode !== !0 && Y("suggestedCommand", ""),
								te.signal.aborted)
							)
								return ie;
							try {
								for await (const me of ae)
									if (me.response.case === "chat") {
										const ve = me.response.value.text;
										Y("chatResponse", (ge) => (ge === void 0 ? ve : ge + ve));
									} else if (me.response.case === "terminalCommand") {
										const ve = me.response.value.partialCommand;
										Y("suggestedCommand", (ge) => ge + ve);
									} else if (me.response.case === "statusUpdate") {
										const ve =
											me.response.value.messages.length > 0
												? me.response.value.messages[0]
												: void 0;
										Y("statusUpdate", ve);
									}
							} finally {
								fe(),
									this.z.setNonPersistentStorage(
										"inprogressAIGenerations",
										(me) => me.filter((ve) => ve.generationUUID !== ie),
									);
							}
						} catch (Q) {
							Y("abortController", void 0),
								console.error(Q),
								this.z.setNonPersistentStorage("inprogressAIGenerations", (Z) =>
									Z.filter((se) => se.generationUUID !== ie),
								);
						}
						return ie;
					}
					submitEditWithSelection(X) {
						try {
							if (X.options.useContextSession === !0)
								return this.submitContextSessionEdit(
									X.options,
									X.promptBarId,
									X.query,
									X.structuredQuery,
									X.lineRange,
									X.codeBlocks,
									X.docs,
									X.images ?? [],
									X.selectedLinks ?? [],
									X.focusEditor,
									X.diffIdCallback,
									X.doneCallback,
									X.cancelGenerationWithNoChangesCallback,
									X.rejectCallback,
									X.spoofedSelection,
									X.spoofedDiagnostics,
									X.spoofedCellId,
									X.rerun,
									X.inspectLineStream,
									X.startTime,
									this.z.applicationUserPersistentStorage
										.allowMultiCmdKGenerations,
								);
							X.options.rejectCurrentDiff();
							const Y = (0, b.$9g)();
							let ie = new AbortController();
							return {
								abortController: ie,
								generationUUID: Y,
								promise: (async () => {
									const ee = this.q.getActiveCodeEditor();
									if (!ee) return;
									if (!ee.hasModel()) {
										console.error("No model found, cannot edit.");
										return;
									}
									const _ = ee.getModel(),
										te = Math.min(
											Math.max(
												X.lineRange.endLineNumberExclusive - 1,
												X.lineRange.startLineNumber,
											),
											_.getLineCount(),
										),
										Q = _.getLineMaxColumn(te),
										Z = new E.$kL(X.lineRange.startLineNumber, 1, te, Q),
										se = ee.getModel().uri,
										re = ee.getModel(),
										le = re.getLineMaxColumn(Z.endLineNumber),
										oe = new w.$iL(Z.startLineNumber, 1, Z.endLineNumber, le),
										ae = re.getValueInRange(oe),
										pe = re.getValueInRange(
											w.$iL.getRangeAbove(new w.$iL(oe), 5),
										),
										$e = re.getValueInRange(
											w.$iL.getRangeOnBelow(new w.$iL(oe), 5, _.getLineCount()),
										),
										ye = ae.trim() === "",
										ue = ae.trim() === "" ? [] : ae.split(re.getEOL()),
										fe = pe.trim() === "" ? [] : pe.split(re.getEOL()),
										me = $e.trim() === "" ? [] : $e.split(re.getEOL());
									let ve,
										ge = await (async () =>
											X.options.fastMode && X.options.preloadedRequest
												? {
														...X.options.preloadedRequest,
														query: X.query,
														fastMode: !0,
													}
												: await this.w.getPreparedEditRequest({
														query: X.query,
														fastMode: !1,
														lineRange: X.lineRange,
														codeBlocks: X.codeBlocks,
														docs: X.docs,
														spoofedSelection: X.spoofedSelection,
														spoofedDiagnostics: X.spoofedDiagnostics,
														spoofedCellId: X.spoofedCellId,
														originalRequest: X.options.originalRequest,
														modelUriForEdit: X.options.fileUri,
														images: X.images,
														links: X.selectedLinks,
													}))();
									const Ce = await this.w.streamPreparedEdit(ge, {
										type: ye ? "generate" : "edit",
										generationUUID: Y,
										options: { rerun: X.rerun },
									});
									if (X.inspectLineStream) {
										const Fe = K(Ce);
										(ve = Fe()), X.inspectLineStream?.(Fe());
									} else ve = Ce;
									ee.setPosition({ lineNumber: oe.startLineNumber, column: 1 });
									const Le = [];
									for (
										let Fe = Z.startLineNumber;
										Fe <= Z.endLineNumber;
										Fe++
									) {
										_.tokenization.forceTokenization(Fe);
										const Oe = _.tokenization.getLineTokens(Fe);
										Le.push(Oe.extractObject());
									}
									if (!ie.signal.aborted)
										return await this.u.streamDiff({
											uri: se,
											originalLineRange: new i.$rL(
												Z.startLineNumber,
												ye ? Z.endLineNumber : Z.endLineNumber + 1,
											),
											generationUUID: Y,
											streamingLines: ve,
											extraContextLinesAbove: fe,
											extraContextLinesBelow: me,
											prompt: X.query,
											originalTextLines: ue,
											originalLineTokens: Le,
											isHidden: !1,
											hideDeletionViewZones: !1,
											undoRedo: {
												undo: () => {
													X.focusEditor();
												},
												redo: () => {},
											},
											diffIdCallback: (Fe) => {
												if (ie.signal.aborted) {
													this.u.cancelDiff(Fe);
													return;
												} else
													ie.signal.addEventListener("abort", () => {
														this.u.cancelDiff(Fe);
													});
												X.diffIdCallback?.(Fe);
											},
											doneCallback: (Fe) => {
												ie.abort(),
													this.addFollowup({
														promptBarId: X.promptBarId,
														req: {
															case: "originalRequest",
															req: {
																...ge,
																originalRequest: X.options.originalRequest,
															},
														},
														structuredQuery: X.structuredQuery,
													}),
													X.doneCallback?.();
											},
											promptBarId: X.promptBarId,
										});
								})(),
							};
						} catch (Y) {
							throw (console.error("[Submitting]", "[Error]", Y), Y);
						}
					}
					async handleChatResponse({
						promptBarId: X,
						stream: Y,
						doneCallback: ie,
						generationUUID: ne,
					}) {
						try {
							for await (const ee of Y)
								if (ee.response.case === "chat") {
									const _ = ee.response.value.text;
									this.z.setNonPersistentStorage(
										"promptBars",
										(te) => te.id === X,
										"chatResponse",
										(te) => (te === void 0 ? _ : te + _),
									);
								} else
									ee.response.case === "statusUpdate"
										? this.z.setNonPersistentStorage(
												"promptBars",
												(_) => _.id === X,
												"statusUpdate",
												ee.response.value.messages,
											)
										: console.warn(
												"Not supported yet; mixing modes in stream; got in chat response: ",
												ee.response.case,
											);
						} finally {
							ie?.(),
								this.z.setNonPersistentStorage(
									"inprogressAIGenerations",
									(ee) => ee.filter((_) => _.generationUUID !== ne),
								);
						}
					}
					async getFilesForMultiFileEdit({
						promptBarId: X,
						topK: Y,
						query: ie,
					}) {
						const ne = this.z.nonPersistentStorage.promptBars.find(
							(Fe) => Fe.id === X,
						);
						if (!ne) return [];
						const ee = [],
							_ = this.F.getReactiveReadonlyContextSession(
								ne.contextSessionUuid,
							);
						if (_ !== void 0)
							for (const Fe of _.intents)
								(Fe.intent.intent.case === "file" ||
									Fe.intent.intent.case === "codeSelection") &&
									Fe.intent.type === k.ContextIntent_Type.USER_ADDED &&
									ee.push(Fe.intent.intent.value.relativeWorkspacePath);
						for (const Fe of ne.data.selections) {
							const Oe = f.URI.revive(Fe.uri);
							ee.push(this.g.asRelativePath(Oe));
						}
						let te = "";
						const Q = [],
							Z = await this.J.createModelReference(ne.uri);
						try {
							const Fe = Z.object.textEditorModel,
								Oe = this.w.getPromptBarCurrentRange(ne, Fe);
							if (Oe) {
								te = Fe.getValueInRange({
									startLineNumber: Oe.startLineNumber,
									startColumn: 1,
									endLineNumber: Oe.endLineNumberExclusive,
									endColumn: 1,
								});
								const He = (
										await this.N.getOrCreate(
											Z.object.textEditorModel,
											F.CancellationToken.None,
										)
									).getAllSymbols(),
									Ke = [];
								for (const Te of He)
									if (
										Oe.startLineNumber <= Te.range.endLineNumber &&
										Oe.endLineNumberExclusive > Te.range.startLineNumber
									) {
										const Ee = new z.$hL(
											Te.range.startLineNumber,
											Te.range.startColumn,
										);
										Ke.push(
											(0, O.$TOb)(
												this.L.referenceProvider,
												Fe,
												Ee,
												!0,
												!1,
												F.CancellationToken.None,
											),
										),
											Ke.push(
												(0, O.$POb)(
													this.L.definitionProvider,
													Fe,
													Ee,
													!1,
													F.CancellationToken.None,
												),
											);
									}
								(await Promise.all(Ke)).forEach((Te) => {
									Te.forEach((Ee) => {
										Q.push(this.g.asRelativePath(Ee.uri));
									});
								});
							}
						} finally {
							Z.dispose();
						}
						const se = `Query: ${ie}

Selected Code:
${te}`,
							re = this.H.getRecentLocations(500),
							oe =
								"{" +
								[...new Set(re.map((Fe) => this.g.asRelativePath(Fe.uri)))]
									.map((Fe) => (Fe ? "*" + Fe : void 0))
									.join(",") +
								"}",
							ae = this.G.parallelSearch(se, Y, Y, { globFilter: oe }),
							$e =
								"{" +
								[...new Set(Q)]
									.map((Fe) => (Fe ? "*" + Fe : void 0))
									.join(",") +
								"}",
							ye = this.G.parallelSearch(se, Y, Y, { globFilter: $e }),
							ue = this.G.parallelSearch(se, Y, Y),
							[fe, me, ve] = await Promise.all([ae, ue, ye]);
						let ge = new Map();
						[...me, ...fe, ...ve].forEach((Fe) => {
							let Oe = `${Fe.codeBlock?.relativeWorkspacePath}-${Fe.codeBlock?.range?.startPosition?.line}`;
							ge.has(Oe) || ge.set(Oe, Fe);
						});
						let Ce = Array.from(ge.values())
							.sort((Fe, Oe) => Oe.score - Fe.score)
							.map((Fe) => Fe.codeBlock)
							.filter((Fe) => Fe !== void 0 && Fe.contents.length < 2e4);
						return (
							console.info(
								`found ${Ce.length} code blocks from the embedding search`,
							),
							[
								...new Set([
									...ee,
									...Ce.map((Fe) => Fe.relativeWorkspacePath),
								]),
							].map((Fe) => ({
								relativeWorkspacePath: Fe,
								userAdded: !!ee.includes(Fe),
							}))
						);
					}
					async *getRelevantChunksForMultiFileEdit({
						promptBarId: X,
						query: Y,
						codeBlocks: ie,
						lineRange: ne,
						docs: ee,
						contextSessionUuid: _,
						uri: te,
						selectedFiles: Q,
						spoofedSelection: Z,
						spoofedDiagnostics: se,
						spoofedCellId: re,
					}) {
						const oe = this.z.nonPersistentStorage.promptBars.find(
							(Te) => Te.id === X,
						);
						if (!oe)
							return new P.$SC({
								response: { case: "codeBlocks", value: { codeBlocks: [] } },
							});
						let ae = "";
						const pe = await this.J.createModelReference(oe.uri);
						try {
							const Te = pe.object.textEditorModel,
								Ee = this.w.getPromptBarCurrentRange(oe, Te);
							Ee &&
								(ae = Te.getValueInRange({
									startLineNumber: Ee.startLineNumber,
									startColumn: 1,
									endLineNumber: Ee.endLineNumberExclusive,
									endColumn: 1,
								}));
						} finally {
							pe.dispose();
						}
						const $e = `Query: ${Y}

Selected Code:
${ae}`,
							ue =
								"{" +
								[...new Set(Q)]
									.map((Te) => (Te ? "*" + Te : void 0))
									.join(",") +
								"}",
							me = (await this.G.parallelSearch($e, 32, 32, { globFilter: ue }))
								.sort((Te, Ee) => Ee.score - Te.score)
								.map((Te) => Te.codeBlock)
								.filter((Te) => Te !== void 0 && Te.contents.length < 2e4),
							ve = (0, b.$9g)(),
							[ge, be] = this.c.registerNewGeneration({
								metadata: void 0,
								generationUUID: ve,
							});
						new AbortController().signal.addEventListener("abort", () => {
							be.abort();
						});
						const Le = await (async () => {
								const Te = await this.w.getPreparedEditRequest({
									query: Y,
									fastMode: !1,
									lineRange: ne,
									codeBlocks: ie,
									docs: ee,
									spoofedSelection: Z,
									spoofedDiagnostics: se,
									spoofedCellId: re,
									originalRequest: void 0,
									modelUriForEdit: te,
								});
								return new P.$DC({
									explicitContext: Te.explicitContext,
									promptCodeBlocks: Te.promptCodeBlocks,
									documentationIdentifiers: Te.documentationIdentifiers,
								});
							})(),
							Fe = this.c.getModelDetails({ specificModelField: "cmd-k" }),
							Oe = await this.c.cmdKClient(),
							xe = await this.F.streamRequestWithContextWrapped(_, {
								request: {
									cmdKOptions: {
										modelDetails: Fe,
										chatMode: !1,
										adaCmdKContext: !1,
									},
									legacyContext: Le,
									sessionId: X,
									codeBlocks: me,
								},
								finalInput: {
									case: "cmd-k",
									fileUri: te,
									query: Y,
									replaceRange: ne,
									queryHistory: void 0,
									chatHistory: void 0,
								},
								endpoint: async (Te, Ee) => Oe.getRelevantChunks(Te, Ee),
								generationUUID: ve,
								abortSignal: be.signal,
								frozenDesire: "unfreezeOnStreamCompletion",
							});
						if (!xe.ok())
							return new P.$SC({
								response: { case: "codeBlocks", value: { codeBlocks: [] } },
							});
						const He = M.$J0.typeName + "/" + M.$J0.methods.streamCmdK.name,
							Ke = this.c.streamResponse({
								modelDetails: Fe,
								streamer: xe.v,
								generationUUID: ve,
								streamerURL: He,
								rethrowCancellation: !0,
								rerun: () => {},
								source: "cmd-k",
							});
						let Je = [];
						for await (let Te of Ke)
							if ((Je.push(Te), Te.response.case === "chainOfThoughtStream"))
								yield Te.response.value.text;
							else if (Te.response.case === "codeBlocks") {
								yield Te.response.value.codeBlocks;
								return;
							}
					}
					async submitMultiFileEditsFromScratch({
						query: X,
						editGroups: Y,
						generationUUID: ie,
					}) {
						let ne = [];
						const ee = [];
						for (const _ of Y) {
							let te = [];
							for (const Q of _) {
								const Z = Q.codeBlock;
								if (!Z.range?.startPosition || !Z.range?.endPosition) continue;
								const se = Q.promptBarId ?? (0, b.$9g)();
								te.push(se);
								const re = {
									id: se,
									initText: X,
									filePath: Z.relativeWorkspacePath,
									selection: {
										selectionStartLineNumber: Z.range?.startPosition?.line,
										selectionStartColumn: Z.range?.startPosition?.column,
										positionLineNumber: Z.range?.endPosition?.line,
										positionColumn: Z.range?.endPosition?.column,
									},
									dependencyPromptBarIds: [...ne],
									waitForDependencies: !0,
									visible: !1,
								};
								if (Q.promptBarId && Z.range && Q.previousDiff) {
									const le = this.g.resolveRelativePath(
											Z.relativeWorkspacePath,
										),
										oe = await this.J.createModelReference(le),
										ae = oe.object.textEditorModel;
									try {
										const pe = {
												startLineNumber: Z.range.startPosition.line,
												endLineNumber: Z.range.endPosition.line,
												endColumn: Z.range.endPosition.column,
												startColumn: Z.range.startPosition.column,
											},
											$e = {
												currentRange: {
													startLineNumber: Z.range.startPosition.line,
													endLineNumberExclusive: Z.range.endPosition.line + 1,
												},
												originalTextLines: Q.previousDiff.originalTextLines,
												newTextLines: ae.getValueInRange(pe).split(ae.getEOL()),
												prompt: Q.previousDiff.prompt ?? "",
												generationUUID: (0, b.$9g)(),
												attachedToPromptBar: !0,
												isHidden: !1,
												uri: le,
												hideDeletionViewZones: !1,
												changes: [],
											};
										if (
											(($e.changes = (0, a.getDiffState)(
												Q.previousDiff.originalTextLines,
												$e.newTextLines,
												!0,
												!1,
											).changes),
											await this.u.addDiff($e, se),
											Q.previousDiff.prompt)
										) {
											const ye = {
												query: { query: Q.previousDiff.prompt },
												immediateContext: void 0,
												selection: void 0,
												queryHistory: void 0,
												contextItemHashes: [],
											};
											this.addFollowup({
												promptBarId: se,
												req: { case: "cmdKQueryHistory", queryHistory: ye },
												structuredQuery: X,
											});
										}
									} finally {
										oe.dispose();
									}
								} else ee.push(re);
							}
							ne.push(...te);
						}
						await this.I.executeCommand(R.$fW, ee);
					}
					async submitMultiFileEdits({
						parentPromptBarId: X,
						query: Y,
						editLocations: ie,
					}) {
						const ne = [];
						if (
							this.z.nonPersistentStorage.promptBars.find((_) => _.id === X)
						) {
							for (const _ of ie)
								!_.range?.startPosition ||
									!_.range?.endPosition ||
									ne.push({
										dependencyPromptBarIds: [X],
										initText: Y,
										filePath: _.relativeWorkspacePath,
										selection: {
											selectionStartLineNumber: _.range?.startPosition?.line,
											selectionStartColumn: _.range?.startPosition?.column,
											positionLineNumber: _.range?.endPosition?.line,
											positionColumn: _.range?.endPosition?.column,
										},
										waitForDependencies: !1,
									});
							await this.I.executeCommand(R.$fW, ne);
						}
					}
				};
				(J = Ne(
					[
						j(0, m.$Nfc),
						j(1, c.$S6b),
						j(2, g.$Vi),
						j(3, o.$26b),
						j(4, u.$36b),
						j(5, d.$km),
						j(6, q.$V7b),
						j(7, s.$dtb),
						j(8, l.$aM),
						j(9, a.$27b),
						j(10, y.$J7b),
						j(11, v.$0zb),
						j(12, I.$06b),
						j(13, T.$B7b),
						j(14, N.$J6b),
						j(15, A.$Feb),
						j(16, h.$ek),
						j(17, r.$MO),
						j(18, B.$k3),
						j(19, U.$b0b),
						j(20, H.$9Db),
						j(21, V.$W6b),
						j(22, G.$3Db),
					],
					J,
				)),
					(0, t.$lK)(e.$d0b, J, t.InstantiationType.Delayed);
			},
		),
		define(
			de[3988],
			he([1, 0, 228, 3, 47, 65, 31, 25, 499, 17, 45, 471, 479, 720, 58, 193]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0ec = void 0);
				let p = class extends i.$1c {
					constructor(f, b, s, l, y, $, v) {
						super(),
							(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v);
					}
					async run(f, b) {
						const { uri: s } = f,
							l = f.getRangeToGenerate(),
							y = this.b.getActiveCodeEditor(),
							$ = y?.getModel()?.uri,
							v = y?.saveViewState();
						let S;
						const I = new Promise((k) => {
								S = k;
							}),
							T = new Promise((k, L) => {
								const D = this.c.asRelativePath(s),
									M = new t.$6B({
										type: t.ContextIntent_Type.UNSPECIFIED,
										uuid: (0, w.$9g)(),
										intent: {
											case: "file",
											value: {
												mode: t.ContextIntent_File_Mode.CHUNKS,
												relativeWorkspacePath: D,
											},
										},
									}),
									N = {
										startLineNumber: l.startLineNumber,
										endLineNumberExclusive: l.endLineNumber + 1,
									};
								this.a
									.executeCommand(m.$t7b, {
										visible: !1,
										isHeadless: !0,
										invocationType: "new",
										dependencyPromptBarIds: [],
										overrideRange: new r.$iL(
											l.startLineNumber,
											0,
											l.endLineNumber,
											0,
										),
										overrideUri: s,
										insertNewLine: !1,
									})
									.then(async (A) => {
										b.setPromptBarId?.(A);
										const R = this.m(A);
										if (R === void 0) {
											L("Prompt Bar Not Found");
											return;
										}
										this.g.updateContextSession(R.contextSessionUuid, {
											removedIntentUuids: [],
											upsertedIntents: [M],
											rerankEndpoint: (z) => this.h.rerankCmdK(z),
										});
										const O = () => {
											this.a.executeCommand(n.$6W, R.id),
												b.onAbort(),
												L("Aborted");
										};
										b.abortController.signal.addEventListener("abort", O);
										const B =
												this.f.applicationUserPersistentStorage
													.aiHyperModeModel,
											{ promise: U } = this.j.submitEditWithSelection({
												options: {
													fastMode: !1,
													chatMode: !1,
													useContextSession: !0,
													preloadedRequest: (0, g.unwrap)(R.preloadedRequest),
													originalRequest: R.originalRequest?.current,
													contextSessionUuid: R.contextSessionUuid,
													queryHistory: R.queryHistory?.current,
													fileUri: R.uri,
													diffRange: void 0,
													rejectCurrentDiff: () => {},
													isMultiFileEdit: !0,
													isHyperMode: !0,
													useReranker: !1,
													isHeadless_onlyAvailableWithUseContextSession: !0,
													forceUseDiffHistory: !0,
													hyperModel: B,
												},
												promptBarId: R.id,
												query: f.options.instruction ?? "",
												images: R.data.images,
												selectedLinks: R.data.selectedLinks,
												structuredQuery:
													R.data.initText ?? f.options.instruction,
												lineRange: N,
												codeBlocks: R.data.selections,
												docs: R.data.selectedDocs ?? [],
												focusEditor: () => {},
												diffIdCallback: (z) => {
													this.f.setNonPersistentStorage(
														"promptBars",
														(F) => F.id === R.id,
														"diffId",
														z,
													);
												},
												doneCallback: () => {
													this.f.setNonPersistentStorage(
														"promptBars",
														(z) => z.id === R.id,
														"generating",
														!1,
													);
												},
												cancelGenerationWithNoChangesCallback: () => {},
												rejectCallback: () => {
													b.abortController.signal.removeEventListener(
														"abort",
														O,
													),
														L("Aborted");
												},
												spoofedSelection: void 0,
												spoofedDiagnostics: void 0,
												spoofedCellId: R?.cellId,
												rerun: () => {},
												inspectLineStream: async (z) => {
													S(z);
												},
											});
										$ &&
											this.b.openCodeEditor(
												{ resource: $ },
												this.b.getActiveCodeEditor(),
											),
											v && y?.restoreViewState(v),
											U.then(async (z) => {
												if (
													(b.abortController.signal.removeEventListener(
														"abort",
														O,
													),
													z === void 0)
												) {
													L("Final content is undefined");
													return;
												}
												R.id &&
													this.a.executeCommand("cmdK.clearPromptBar", R.id),
													this.a
														.executeCommand(n.$5W, R.id, {
															removeFollowupToo: !0,
														})
														.then(() => {
															this.a
																.executeCommand(n.$RW, R.id, !0)
																.then(() => {
																	k(z.replace(/\n$/, ""));
																});
														});
											});
									});
							}),
							P = await I;
						return { finalResultPromise: T, lineStream: P };
					}
					m(f) {
						return this.f.nonPersistentStorage.promptBars.find(
							(b) => b.id === f,
						);
					}
				};
				(e.$0ec = p),
					(e.$0ec = p =
						Ne(
							[
								j(0, C.$ek),
								j(1, E.$dtb),
								j(2, d.$Vi),
								j(3, u.$0zb),
								j(4, a.$B7b),
								j(5, h.$J7b),
								j(6, c.$d0b),
							],
							p,
						));
			},
		),
		define(
			de[3989],
			he([1, 0, 228, 3, 47, 65, 31, 25, 499, 17, 45, 471, 479, 720, 58, 193]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$ec = void 0);
				let p = class extends i.$1c {
					constructor(f, b, s, l, y, $, v) {
						super(),
							(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v);
					}
					async run(f, b) {
						const { uri: s } = f,
							l = f.getRangeToGenerate(),
							y = this.b.getActiveCodeEditor(),
							$ = y?.getModel()?.uri,
							v = y?.saveViewState();
						let S;
						const I = new Promise((k) => {
								S = k;
							}),
							T = new Promise((k, L) => {
								const D = this.c.asRelativePath(s),
									M = new t.$6B({
										type: t.ContextIntent_Type.UNSPECIFIED,
										uuid: (0, w.$9g)(),
										intent: {
											case: "file",
											value: {
												mode: t.ContextIntent_File_Mode.CHUNKS,
												relativeWorkspacePath: D,
											},
										},
									}),
									N = {
										startLineNumber: l.startLineNumber,
										endLineNumberExclusive: l.endLineNumber + 1,
									};
								this.a
									.executeCommand(m.$t7b, {
										visible: !1,
										isHeadless: !0,
										invocationType: "new",
										dependencyPromptBarIds: [],
										overrideRange: new r.$iL(
											l.startLineNumber,
											0,
											l.endLineNumber,
											0,
										),
										insertNewLine: !1,
									})
									.then(async (A) => {
										const R = this.m(A);
										if (R === void 0) {
											L("Prompt Bar Not Found");
											return;
										}
										this.g.updateContextSession(R.contextSessionUuid, {
											removedIntentUuids: [],
											upsertedIntents: [M],
											rerankEndpoint: (U) => this.h.rerankCmdK(U),
										});
										const O = () => {
											this.a.executeCommand(n.$6W, R.id),
												this.a.executeCommand("cmdK.clearPromptBar", R.id),
												b.onAbort(),
												L("Aborted");
										};
										b.abortController.signal.addEventListener("abort", O);
										const { promise: B } = this.j.submitEditWithSelection({
											options: {
												fastMode: !1,
												chatMode: !1,
												useContextSession: !0,
												preloadedRequest: (0, g.unwrap)(R.preloadedRequest),
												originalRequest: R.originalRequest?.current,
												contextSessionUuid: R.contextSessionUuid,
												queryHistory: R.queryHistory?.current,
												fileUri: R.uri,
												diffRange: void 0,
												rejectCurrentDiff: () => {},
												isMultiFileEdit: !0,
												useReranker: !1,
												isHeadless_onlyAvailableWithUseContextSession: !0,
												forceUseDiffHistory: !0,
											},
											promptBarId: R.id,
											query: f.options.instruction ?? "",
											images: R.data.images,
											selectedLinks: R.data.selectedLinks,
											structuredQuery: R.data.initText ?? f.options.instruction,
											lineRange: N,
											codeBlocks: R.data.selections,
											docs: R.data.selectedDocs ?? [],
											focusEditor: () => {},
											diffIdCallback: (U) => {
												this.f.setNonPersistentStorage(
													"promptBars",
													(z) => z.id === R.id,
													"diffId",
													U,
												);
											},
											doneCallback: () => {
												this.f.setNonPersistentStorage(
													"promptBars",
													(U) => U.id === R.id,
													"generating",
													!1,
												);
											},
											cancelGenerationWithNoChangesCallback: () => {
												b.abortController.signal.removeEventListener(
													"abort",
													O,
												),
													L("Aborted");
											},
											rejectCallback: () => {
												b.abortController.signal.removeEventListener(
													"abort",
													O,
												),
													L("Aborted");
											},
											spoofedSelection: void 0,
											spoofedDiagnostics: void 0,
											spoofedCellId: R?.cellId,
											rerun: () => {},
											inspectLineStream: async (U) => {
												S(U);
											},
										});
										$ &&
											this.b.openCodeEditor(
												{ resource: $ },
												this.b.getActiveCodeEditor(),
											),
											v && y?.restoreViewState(v),
											B.then(async (U) => {
												if (
													(b.abortController.signal.removeEventListener(
														"abort",
														O,
													),
													U === void 0)
												) {
													L("Final content is undefined");
													return;
												}
												R.id &&
													this.a.executeCommand("cmdK.clearPromptBar", R.id),
													this.a
														.executeCommand(n.$5W, R.id, {
															removeFollowupToo: !0,
														})
														.then(() => {
															this.a
																.executeCommand(n.$RW, R.id, !0)
																.then(() => {
																	k(U.replace(/\n$/, ""));
																});
														});
											}).catch((U) => {
												L(U);
											});
									});
							}),
							P = await I;
						return { finalResultPromise: T, lineStream: P };
					}
					m(f) {
						return this.f.nonPersistentStorage.promptBars.find(
							(b) => b.id === f,
						);
					}
				};
				(e.$$ec = p),
					(e.$$ec = p =
						Ne(
							[
								j(0, C.$ek),
								j(1, E.$dtb),
								j(2, d.$Vi),
								j(3, u.$0zb),
								j(4, a.$B7b),
								j(5, h.$J7b),
								j(6, c.$d0b),
							],
							p,
						));
			},
		),
		define(
			de[3990],
			he([
				1, 0, 5, 3, 3222, 20, 1717, 6, 3988, 137, 3948, 3989, 3950, 3949, 3947,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Bed = void 0);
				let g = class extends i.$1c {
					constructor(o) {
						super(),
							(this.h = o),
							(this.a = this.D(new d.$re())),
							(this.onSequenceAdd = this.a.event),
							(this.b = this.D(new d.$re())),
							(this.onSequenceStatusChange = this.b.event),
							(this.c = this.D(new d.$re())),
							(this.onGenerationStatusChange = this.c.event),
							(this.g = {}),
							(this.f = {
								"hyper-mode": this.h.createInstance(m.$0ec),
								"coalesce-chain": this.h.createInstance(u.$n7b),
								"finetuned-instructions": this.h.createInstance(h.$p7b),
								"chat-and-apply": this.h.createInstance(n.$m7b),
								"regular-cmdk": this.h.createInstance(a.$$ec),
								"cursor-motion": this.h.createInstance(c.$o7b),
							});
					}
					removeSequence(o) {
						const f = this.g[o];
						f && (f.dispose(), delete this.g[o]);
					}
					dispose() {
						super.dispose();
						for (const o of Object.values(this.g)) o.dispose();
						for (const o of Object.values(this.f)) o?.dispose();
					}
					getSequenceById(o) {
						return this.g[o];
					}
					getGenerationById(o) {
						for (const f of Object.values(this.g)) {
							const b = f.findGenerationById(o);
							if (b) return b;
						}
					}
					createSequence(o, f, b, s = {}) {
						const l = this.h.createInstance(w.$afc, o, f, b, s);
						return (
							(this.g[l.id] = l),
							this.D(
								l.onStatusChange((y) => {
									this.b.fire({
										oldStatus: y.oldStatus,
										newStatus: y.newStatus,
										sequence: l,
									});
								}),
							),
							this.D(
								l.onGenerationStatusChange((y) => {
									this.c.fire({
										generation: y.generation,
										newStatus: y.newStatus,
										oldStatus: y.oldStatus,
									});
								}),
							),
							this.a.fire(l),
							l
						);
					}
					async runStandaloneGeneration(o, f, b, s, l) {
						const y = this.h.createInstance(C.$_ec, o, f, b, l, s),
							$ = await this.runGeneration(y);
						return y.dispose(), $;
					}
					async runGeneration(o) {
						const f = this.f[o.backendIdentifier];
						if (!f)
							return (
								console.error("Backend not found", o.backendIdentifier),
								Promise.resolve(void 0)
							);
						const b = this.getSequenceById(o.sequenceId ?? ""),
							s = () => {
								o.status = "aborted";
							};
						o.payload.abortController.signal.addEventListener("abort", s),
							(o.status = "generating");
						const l = await f.run(o, o.payload, b);
						return (
							l?.finalResultPromise
								.then(() => {
									o.status = "completed";
								})
								.catch(() => {
									o.status = "aborted";
								}),
							o.payload.abortController.signal.removeEventListener("abort", s),
							l
						);
					}
				};
				(e.$Bed = g),
					(e.$Bed = g = Ne([j(0, t.$Li)], g)),
					(0, E.$lK)(r.$qfc, g, E.InstantiationType.Delayed);
			},
		),
		