define(de[3937], he([1, 0, 46, 1345]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, t.$qtb)(
					i.$Jlc.ID,
					i.$Jlc,
					t.EditorContributionInstantiation.Eventually,
				);
		}),
		define(
			de[1053],
			he([
				1, 0, 148, 126, 126, 3, 42, 20, 5, 25, 715, 560, 118, 19, 136, 226, 59,
				271, 287,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xcc = e.$Wcc = void 0);
				const b = 2,
					s = 1e5,
					l = 2e3,
					y = 2,
					$ = 20,
					v = 30,
					S = 150,
					I = 2500;
				e.$Wcc = (0, m.$Mi)("contextBankService");
				let T = class extends E.$1c {
					constructor(k, L, D, M, N, A, R, O) {
						super(),
							(this.h = k),
							(this.j = L),
							(this.m = D),
							(this.n = M),
							(this.q = N),
							(this.s = A),
							(this.t = R),
							(this.u = O),
							(this.c = new p.$Jc(b)),
							(this.g = []);
					}
					w(k, L) {
						return `${(0, n.$Aj)(`${k}_${L}`)}`;
					}
					y(k) {
						const L = this.c.peek(k);
						if (L && performance.now() - L.timestamp <= s)
							return this.c.get(k), L.results;
					}
					z(k, L) {
						this.c.set(k, { results: L, timestamp: performance.now() });
					}
					C() {
						return (
							this.u.maybeRefreshFeatureStatus("contextBank"),
							this.u.getCachedFeatureStatus("contextBank") ?? !0
						);
					}
					async getRankedFiles(k) {
						if (!this.C()) return [];
						const L = new t.$iH({ ...k.composerRequest });
						if (L.conversation.length === 0) return [];
						const D = this.w(k.composerId, L.conversation.length);
						if (k.useCachedResults) {
							const N = this.y(D);
							return N
								? await this.filterCursorIgnoredFiles(
										N.slice(0, k.numberOfChunks),
									)
								: [];
						}
						const M = await this.getRankedFilesInternal({ ...k, cacheKey: D });
						return this.z(D, M), await this.filterCursorIgnoredFiles(M);
					}
					async filterCursorIgnoredFiles(k) {
						return (
							await new Promise((L) =>
								this.t.addOnCursorIgnoreLoadedCallback(() => L(void 0)),
							),
							k.filter(
								(L) =>
									!L.context ||
									!this.t.shouldIgnoreUri(
										this.j.resolveRelativePath(L.context.relativeWorkspacePath),
									),
							)
						);
					}
					getTrimmedConversation(k, L) {
						const D = L
							? k.slice(0, k.findIndex((M) => M.bubbleId === L) + 1)
							: k;
						return D.at(-1)?.type !== w.ConversationMessage_MessageType.HUMAN ||
							D.at(-1)?.text.length === 0
							? []
							: D;
					}
					async cacheRankedFiles(k) {
						if (!this.C()) return;
						const L = new t.$iH({
							...k.composerRequest,
							conversation: this.getTrimmedConversation(
								k.composerRequest.conversation ?? [],
								k.bubbleId,
							),
						});
						if (L.conversation.length === 0) return;
						const D = this.w(k.composerId, L.conversation.length),
							M = performance.now();
						if (!this.g.find((A) => A.cacheKey === D && M - A.timestamp < l))
							try {
								const A = await this.getRankedFilesInternal({
									...k,
									composerRequest: L,
									cacheKey: D,
								});
								this.z(D, A);
							} catch (A) {
								console.warn("Failed to cache ranked files:", A);
							}
					}
					async getRankedFilesInternal(k) {
						const L = new t.$iH(k.composerRequest),
							D = new AbortController(),
							M = {
								abortController: D,
								timestamp: performance.now(),
								cacheKey: k.cacheKey,
							};
						this.g.push(M),
							this.g.length > y &&
								(this.g.sort((A, R) => R.timestamp - A.timestamp),
								this.g.slice(y).forEach((A) => {
									A.abortController.abort();
								}),
								(this.g = this.g.slice(0, y)));
						try {
							const N = await this.getAllFiles({ request: L });
							if (N === void 0) return [];
							const R = (
									await this.q.aiClient()
								).getRankedContextFromContextBank(
									new t.$5D({ composerRequest: L, contextToRank: N }),
									{ signal: D.signal },
								),
								O = [];
							for await (const U of R) O.push(...U.rankedContext);
							return D.signal.aborted ? [] : O.slice(0, k.numberOfChunks);
						} finally {
							const N = this.g.findIndex((A) => A === M);
							N !== -1 && this.g.splice(N, 1);
						}
					}
					async getAllFiles({ request: k }) {
						const L = [
								this.getContextFromFiles(k),
								this.getContextFromSemanticSearch(k),
							],
							[D, M] = await Promise.all(L),
							N = M.filter(
								(A) =>
									!D.some(
										(R) => R.relativeWorkspacePath === A.relativeWorkspacePath,
									),
							).slice(0, $);
						return [...D, ...N];
					}
					async getContextFromFiles(k) {
						const D = k.conversation
							.map((F) =>
								F.attachedCodeChunks.map((x) => x.relativeWorkspacePath),
							)
							.flat()
							.filter(
								(F, x, H) => H.findIndex((q) => q === F) === x && F !== void 0,
							)
							.map((F) => {
								let x = Promise.resolve([]);
								return (
									(x = this.h.getRelatedFiles({
										uri: this.j.resolveRelativePath(F),
										maxNumFiles: 5,
									})),
									x
								);
							});
						let M = [];
						try {
							const F = new Promise((x, H) => {
								setTimeout(() => H(new Error("Context graph timeout")), 1e3);
							});
							M = await Promise.race([Promise.all(D), F]);
						} catch (F) {
							console.warn("Failed to get context graph files:", F), (M = []);
						}
						const N = M.flat()
							.reduce((F, { uri: x, weight: H }) => {
								const q = F.findIndex((V) => c.$dh.isEqual(V.uri, x));
								return (
									q >= 0 ? (F[q].weight += H) : F.push({ uri: x, weight: H }), F
								);
							}, [])
							.sort((F, x) => x.weight - F.weight)
							.slice(0, 7);
						let A = [];
						try {
							A = this.m.getRecentlyViewedFiles(7);
						} catch (F) {
							console.warn("Failed to get recently viewed files:", F), (A = []);
						}
						const O = [
								...N.map((F) => this.j.asRelativePath(F.uri)),
								...A.map((F) => F.relativePath),
							]
								.filter((F, x, H) => H.findIndex((q) => q === F) === x)
								.filter((F) => F !== void 0)
								.filter(
									(F) =>
										!k.conversation.some((x) =>
											x.attachedCodeChunks
												.map((H) => H.relativeWorkspacePath)
												.includes(F),
										),
								),
							B = (
								await Promise.all(
									O.map(async (F) => {
										let x;
										try {
											x = await this.n.createModelReference(
												this.j.resolveRelativePath(F),
											);
											const q = x.object.textEditorModel.getValue();
											return q.split(`
`).length > I
												? void 0
												: new i.$mA({ relativeWorkspacePath: F, contents: q });
										} catch (H) {
											console.warn(`Unable to read file '${F}':`, H);
											return;
										} finally {
											x?.dispose();
										}
									}),
								)
							).filter((F) => F !== void 0);
						let U = 0;
						const z = [];
						for (const F of B)
							if (
								(z.push(F),
								(U +=
									F.contents.split(`
`).length / S),
								U > v)
							)
								break;
						return z;
					}
					async getContextFromSemanticSearch(k) {
						const L = k.conversation.at(-1)?.text ?? "";
						let D = [];
						if (L !== "") {
							const N = new AbortController();
							try {
								const A = new Promise((R, O) => {
									setTimeout(
										() => O(new Error("Semantic search timeout")),
										1e3,
									);
								});
								D = await Promise.race([
									this.s.parallelSearch(L, 30, 30, {
										fast: !0,
										raceNRequests: 6,
										abortSignal: N.signal,
									}),
									A,
								]);
							} catch (A) {
								console.warn("Failed to perform semantic search:", A),
									N.abort();
							}
						}
						const M = [];
						for (const N of D) {
							const A = N.codeBlock;
							A !== void 0 &&
								M.push(
									new i.$mA({
										relativeWorkspacePath: A.relativeWorkspacePath,
										contents: A.contents,
										codeBlock: A,
									}),
								);
						}
						return M;
					}
					async F(k) {
						const L = new Set(k.map((M) => M.context.relativeWorkspacePath)),
							D = [];
						for (const M of L) {
							let N;
							try {
								N = await this.n.createModelReference(
									this.j.resolveRelativePath(M),
								);
								const R = N.object.textEditorModel.getValue(),
									O = k.filter((B) => B.context.relativeWorkspacePath === M);
								for (const B of O) {
									const U = B.detailedLines
										.filter((z) => !z.isSignature)
										.sort((z, F) => z.lineNumber - F.lineNumber)
										.map((z) => z.text)
										.join(`
`);
									R.includes(U) && D.push(B.context);
								}
							} catch (A) {
								console.warn(`Unable to read file '${M}':`, A);
							} finally {
								N?.dispose();
							}
						}
						return D;
					}
				};
				(e.$Xcc = T),
					(e.$Xcc = T =
						Ne(
							[
								j(0, u.$cEb),
								j(1, r.$Vi),
								j(2, a.$lcc),
								j(3, C.$MO),
								j(4, h.$Nfc),
								j(5, g.$J6b),
								j(6, o.$Q9b),
								j(7, f.$H7b),
							],
							T,
						)),
					(0, d.$lK)(e.$Wcc, T, d.InstantiationType.Eager);
			},
		),
		define(
			de[3938],
			he([
				1, 0, 11, 18, 9, 137, 67, 61, 58, 1799, 79, 14, 45, 193, 971, 65, 1345,
				41,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nfd = e.$mfd = e.$lfd = e.$kfd = e.$jfd = void 0);
				class f extends t.$3X {
					static {
						this.ID = "editor.action.showDiffHistory";
					}
					static {
						this.LABEL = "Show Diff History";
					}
					constructor() {
						super({
							id: f.ID,
							title: { value: f.LABEL, original: "Show Diff History" },
							f1: !0,
						});
					}
					async run(k) {
						const L = k.get(E.$jfc),
							D = k.get(i.$IY),
							M = k.get(d.$nM),
							N = k.get(C.$QO),
							R = (await L.getGlobalDiffTrajectories())
								.map(
									(z) => `File: ${z.fileName}

${z.diffHistory.join(`
------------------
`)}
		`,
								)
								.join(`

---------------------------------------------------------

`),
							O = M.createById("plaintext"),
							U = {
								resource: N.createModel(R, O).uri,
								options: { preserveFocus: !1, pinned: !0, revealIfVisible: !0 },
							};
						D.openEditor(U);
					}
				}
				(e.$jfd = f), (0, t.$4X)(f);
				class b extends t.$3X {
					static {
						this.ID = m.$YV;
					}
					static {
						this.LABEL = "Get Diff History";
					}
					constructor() {
						super({
							id: b.ID,
							title: { value: b.LABEL, original: "Get Diff History" },
							f1: !1,
						});
					}
					async run(k) {
						return await k.get(E.$jfc).getGlobalDiffTrajectories();
					}
				}
				(e.$kfd = b), (0, t.$4X)(b);
				class s extends t.$3X {
					static {
						this.ID = "editor.action.acceptCppSuggestion";
					}
					static {
						this.LABEL = "Accept Cursor Tab Suggestion";
					}
					constructor() {
						super({
							id: s.ID,
							title: {
								value: s.LABEL,
								original: "Accept Cursor Tab Suggestion",
							},
							icon: (0, u.$$O)(
								"accept-cpp-suggestion",
								a.$ak.check,
								"Accept Cursor Tab Suggestion",
							),
							menu: { id: r.$zlc.TitleMenu, order: 1 },
						});
					}
					async run(k) {
						const L = k.get(E.$jfc),
							D = k.get(h.$0zb),
							M = D.nonPersistentStorage.cppState?.peekViewSuggestion;
						(
							await L.acceptFullSuggestion(
								void 0,
								M ? (0, c.unwrap)(M) : void 0,
							)
						).type,
							n.AcceptResult.NotAccepted,
							D.setNonPersistentStorage(
								"cppState",
								"peekViewSuggestion",
								void 0,
							);
					}
				}
				(e.$lfd = s), (0, t.$4X)(s);
				function l(P) {
					const k = P.get(g.$dtb),
						L = k.getActiveCodeEditor() || k.getFocusedCodeEditor();
					return (L && p.$Jlc.get(L)) || void 0;
				}
				function y(P) {
					return l(P)?.cppPeekView;
				}
				class $ extends t.$3X {
					static {
						this.ID = "editor.action.configureCppDiffPeekView";
					}
					static {
						this.LABEL = "Configure Cursor Tab Diff Peek View";
					}
					constructor() {
						super({
							id: $.ID,
							title: {
								value: $.LABEL,
								original: "Configure Cursor Tab Diff Peek View",
							},
						});
					}
					async run(k, L) {
						const D = y(k);
						D && D.diffEditor?.updateOptions(L);
					}
				}
				(e.$mfd = $), (0, t.$4X)($);
				class v extends t.$3X {
					static {
						this.ID = "editor.action.setCppDiffPeekView";
					}
					static {
						this.LABEL = "Set Cursor Tab Diff Peek View";
					}
					constructor() {
						super({
							id: v.ID,
							title: {
								value: v.LABEL,
								original: "Set Cursor Tab Diff Peek View",
							},
						});
					}
					async run(k, L) {
						const D = l(k);
						D && (D.cppPeekView = L);
					}
				}
				(e.$nfd = v), (0, t.$4X)(v);
				class S extends t.$3X {
					static {
						this.LABEL = "Enable Cursor Tab";
					}
					constructor() {
						super({
							id: m.$MX,
							title: { value: S.LABEL, original: S.LABEL },
							f1: !0,
						});
					}
					async run(k, ...L) {
						k.get(h.$0zb).setApplicationUserPersistentStorage("cppEnabled", !0);
					}
				}
				(0, t.$4X)(S);
				class I extends t.$3X {
					static {
						this.LABEL = "Disable Cursor Tab";
					}
					constructor() {
						super({
							id: "editor.cpp.disableenabled",
							title: { value: I.LABEL, original: I.LABEL },
							f1: !0,
						});
					}
					async run(k, ...L) {
						k.get(h.$0zb).setApplicationUserPersistentStorage("cppEnabled", !1);
					}
				}
				(0, t.$4X)(I);
				class T extends t.$3X {
					static {
						this.ID = "editor.cpp.openPro";
					}
					static {
						this.LABEL = "Open Cursor Tab Pro Pricing";
					}
					constructor() {
						super({
							id: T.ID,
							title: { value: T.LABEL, original: T.LABEL },
							f1: !1,
						});
					}
					async run(k) {
						k.get(o.$7rb).open(w.URI.parse("https://cursor.com/pricing"));
					}
				}
				(0, t.$4X)(T);
			},
		),
		define(
			de[3939],
			he([
				1, 0, 24, 19, 20, 5, 11, 25, 83, 148, 83, 18, 44, 48, 17, 54, 232, 32,
				356, 1905, 110, 12, 62, 58, 684, 118,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ofd = void 0),
					(e.$Ofd = (0, E.$Mi)("FeedbackService"));
				let I = class {
					constructor(L, D, M, N, A, R, O, B, U) {
						(this.a = L),
							(this.b = D),
							(this.c = M),
							(this.d = N),
							(this.f = A),
							(this.g = R),
							(this.h = O),
							(this.j = B),
							(this.k = U);
					}
					reportFeedback(L) {
						return Promise.resolve();
					}
					async reportBug(L) {
						const D = (O) => {
							switch (O) {
								case "low":
									return r.ReportBugRequest_BugType.LOW;
								case "medium":
									return r.ReportBugRequest_BugType.MEDIUM;
								case "urgent":
									return r.ReportBugRequest_BugType.URGENT;
								case "crash":
									return r.ReportBugRequest_BugType.CRASH;
								default:
									return r.ReportBugRequest_BugType.LOW;
							}
						};
						let M = "";
						if (
							L.includeConsoleLogs === !0 ||
							(L.includeConsoleLogs === void 0 &&
								this.c.reactivePrivacyMode() !== !0)
						) {
							const O = `----------log divider------
`;
							try {
								M = b.$Atc.join(O);
							} catch {
								console.log("^ could not compile logs"),
									(M = "could not compile logs");
							}
							const B = 5e4;
							if (M.length > B) {
								const U =
									"Truncated console logs to last " + B + " characters:" + O;
								M = U + M.slice(-(B - U.length));
							}
						} else
							M = `(omitted because the user requested so. privacy mode: ${this.c.reactivePrivacyMode()})`;
						const N = await this.g.getOSProperties(),
							A = await this.j.getCmdKDebugInfo();
						this.d.publicLogCapture("submitted.feedback");
						const R = await this.k.aiClient();
						for (let O = 0; O < 3; O++) {
							try {
								await R.reportBug({
									bug: L.bug ?? "nothing",
									bugType: L.priority,
									contactEmail: L.contactEmail ?? "",
									context: {
										screenshots: L.screenshots ?? [],
										currentFile: this.c.reactivePrivacyMode()
											? void 0
											: await this.getCurrentFileInfoSyncWithoutNotebooks(),
										conversation: [],
										logs: [],
										debugInfo: A,
										cursorVersion: this.h.version,
										os: `${N.type} ${N.arch} ${N.release}${l.$o ? " snap" : ""}`,
										connectionErrorRaw: L.connectionErrorRaw ?? "",
										failingRequstId: L.failingRequestID ?? "",
										protoUrl: L.protoURL ?? "",
										connectErrorCode: L.connectErrorCode,
										errorDetailCode: L.errorDetailCode,
										errorDetailTitle: L.errorDetailTitle,
										errorDetailDetail: L.errorDetailDetail,
									},
								});
								break;
							} catch (B) {
								console.error("error reporting bug", B);
							}
							await new Promise((B) => setTimeout(B, 2e3));
						}
					}
					getWorkspaceRootPath() {
						const L = this.a.getWorkspace().folders;
						return L.length > 0 ? L[0].uri.path : "";
					}
					asRelativePath(L, D) {
						let M = this.a.getWorkspaceFolder(L);
						if (!M) {
							const A = this.a.getWorkspace(),
								R = (0, t.$Sb)(A.folders);
							R &&
								L.scheme !== R.uri.scheme &&
								L.path.startsWith(g.$lc.sep) &&
								(M = this.a.getWorkspaceFolder(R.uri.with({ path: L.path })));
						}
						if (!M) return L.fsPath;
						typeof D > "u" && (D = this.a.getWorkspace().folders.length > 1);
						let N = (0, i.$ph)(M.uri, L);
						return D && M.name && (N = `${M.name}/${N}`), N ?? L.fsPath;
					}
					async getCurrentFileInfoSyncWithoutNotebooks() {
						const L = this.b.activeEditorPane;
						let D = h.$A1.getOriginalUri(L?.input),
							M = "",
							N,
							A;
						const R = L?.getControl();
						(N = R?.getPosition() ?? new c.$hL(1, 1)),
							(A =
								R?.getSelection() ??
								new n.$iL(N.lineNumber, N.column, N.lineNumber, N.column));
						const O = R?.getModel();
						M = await this.f.cleanText(O?.getValue() ?? "", D?.path);
						let B = O?.getLanguageIdAtPosition(N.lineNumber, N.column) ?? "";
						return new u.$Ws({
							relativeWorkspacePath: D ? this.asRelativePath(D) : "",
							contents: M,
							cursorPosition: new m.$ys({
								line: N.lineNumber - 1,
								column: N.column - 1,
							}),
							selection: new m.$Ns({
								startPosition: new m.$ys({
									line: A.startLineNumber - 1,
									column: A.startColumn - 1,
								}),
								endPosition: new m.$ys({
									line: A.endLineNumber - 1,
									column: A.endColumn - 1,
								}),
							}),
							languageId: B,
						});
					}
				};
				(I = Ne(
					[
						j(0, d.$Vi),
						j(1, a.$IY),
						j(2, p.$x6b),
						j(3, o.$km),
						j(4, f.$zIb),
						j(5, s.$y7c),
						j(6, y.$Bk),
						j(7, v.$06b),
						j(8, S.$Nfc),
					],
					I,
				)),
					(0, w.$lK)(e.$Ofd, I, w.InstantiationType.Delayed);
				class T extends C.$3X {
					static {
						this.ID = "aiFeedback.action.reportFeedback";
					}
					static {
						this.LABEL = "Give use feedback, and report issues";
					}
					constructor() {
						super({
							id: T.ID,
							title: { value: "Share Feedback", original: "Share Feedback" },
							f1: !1,
						});
					}
					run(L, D, ...M) {
						L.get(e.$Ofd).reportFeedback(D);
					}
				}
				(0, C.$4X)(T);
				class P extends C.$3X {
					static {
						this.LABEL = "Report Bug";
					}
					constructor() {
						super({
							id: $.$qX,
							title: { value: P.LABEL, original: P.LABEL },
							f1: !1,
						});
					}
					run(L, D, ...M) {
						const N = L.get(e.$Ofd);
						(D.consoleLogs = void 0), N.reportBug(D);
					}
				}
				(0, C.$4X)(P);
			},
		),
		define(
			de[3940],
			he([
				1, 0, 893, 83, 75, 58, 9, 47, 65, 499, 11, 31, 119, 22, 371, 110, 62,
				45, 134, 32, 280, 118, 191, 401, 151, 148, 418, 140, 57, 258, 14, 232,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.doupdate",
									title: {
										value: "Cursor: Attempt Update",
										original: "Cursor: Attempt Update",
									},
									f1: !0,
								});
							}
							run(A, R, ...O) {
								A.get(n.$V8c).sendRawMessage("vscode:do-update", "");
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.checkonupdate",
									title: {
										value: "Cursor: Check for Update",
										original: "Cursor: Check for Update",
									},
									f1: !1,
								});
							}
							async run(A, R, ...O) {
								const B = A.get(c.$ll),
									U = A.get(v.$ucd),
									z = A.get(o.$0zb);
								if (z.nonPersistentStorage.showingUpdate) return;
								const F = C.URI.joinPath(
									U.userHome,
									A.get(p.$Bk).dataFolderName,
									"shouldUpdate",
								);
								if (!(await B.exists(F))) return;
								(await B.readFile(F)).value.toString().trim() === "1" &&
									z.setNonPersistentStorage("showingUpdate", !0);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.publicLogCapture",
									title: { value: "Send Event", original: "Send Event" },
									f1: !1,
								});
							}
							async run(A, R) {
								A.get(b.$km).publicLogCapture(R);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.newdocs",
									title: {
										value: "Add New Custom Docs",
										original: "Add New Custom Docs",
									},
									f1: !0,
								});
							}
							async run(A, R, ...O) {
								const B = A.get(o.$0zb);
								B.setNonPersistentStorage("showingDocsModal", !0),
									await new Promise((U) => {
										const z = w.$Bfb.setInterval(() => {
											B.nonPersistentStorage.showingDocsModal ||
												(w.$Bfb.clearInterval(z), U());
										}, 100);
									});
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.checkOkToIndexLink",
									title: {
										value: "Check OK to Index Link",
										original: "Check OK to Index Link",
									},
									f1: !1,
								});
							}
							async run(A, R, ...O) {
								const B = A.get(o.$0zb);
								return (
									B.setNonPersistentStorage("potentialIndexLink", R),
									B.setNonPersistentStorage("showDocsLinkConfirmation", !0),
									await new Promise((U) => {
										const z = w.$Bfb.setInterval(() => {
											B.nonPersistentStorage.showDocsLinkConfirmation ||
												(w.$Bfb.clearInterval(z), U());
										}, 100);
									}),
									B.nonPersistentStorage.okToIndexDocsLink
								);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.mentionLinkToolbar",
									title: {
										value: "Mention Link Toolbar",
										original: "Mention Link Toolbar",
									},
									f1: !1,
								});
							}
							async run(A, R, ...O) {
								const B = A.get(o.$0zb);
								B.setNonPersistentStorage("mentionLinkToolbarInfo", R),
									await new Promise((U) => {
										const z = w.$Bfb.setInterval(() => {
											B.nonPersistentStorage.mentionLinkToolbarInfo ||
												(w.$Bfb.clearInterval(z), U());
										}, 100);
									});
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.submitdocs",
									title: {
										value: "Submit New Docs",
										original: "Submit New Docs",
									},
									f1: !1,
								});
							}
							async run(A, R, ...O) {
								const B = A.get(o.$0zb),
									U = A.get(l.$Nfc),
									z = A.get(a.$ek),
									F = A.get($.$W6b),
									x = await U.uploadClient(),
									H =
										t.$6_.typeName +
										"/" +
										t.$6_.methods.uploadDocumentation.name;
								try {
									const V = (
										await x.uploadDocumentation(R, {
											headers: (0, y.$m6b)((0, d.$9g)()),
										})
									).docUuid;
									return z.executeCommand(E.$$W, V), V;
								} catch (q) {
									F.handleError(q, new i.$Zs(), (0, d.$9g)(), H, "other");
								}
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: E.$YW,
									title: {
										value: "Show Usage Pricing Modal",
										original: "Show Usage Pricing Modal",
									},
									f1: !1,
								});
							}
							async run(A, ...R) {
								A.get(o.$0zb).setNonPersistentStorage(
									"showUsageBasedPricingModal",
									"justshow",
								);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: E.$ZW,
									title: {
										value: "Show Turbo Mode Modal",
										original: "Show Turbo Mode Modal",
									},
									f1: !1,
								});
							}
							async run(A, ...R) {
								A.get(o.$0zb).setNonPersistentStorage("showTurboModeModal", !0);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: E.$1W,
									title: {
										value: "Show Add Fast Requests Modal",
										original: "Show Add Fast Requests Modal",
									},
									f1: !1,
								});
							}
							async run(A, ...R) {
								A.get(o.$0zb).setNonPersistentStorage(
									"showAddFastRequestsModal",
									!0,
								);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: E.$2W,
									title: {
										value: "Open Account Settings",
										original: "Open Account Settings",
									},
									f1: !1,
								});
							}
							async run(A, ...R) {
								A.get(D.$x6b).settings();
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.removevim",
									title: {
										value: "Cursor Vim: Remove Vim Mode",
										original: "Cursor Vim: Remove Vim Mode",
									},
									f1: !0,
								});
							}
							async run(A, R, ...O) {
								const B = A.get(h.$Hp),
									U = A.get(g.$y7c),
									z = await B.getInstalled();
								for (const F of z)
									F.identifier.id === "vscodevim.vim" && B.uninstall(F);
								U.reload(void 0);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: E.$EV,
									title: { value: "Exec command", original: "Exec command" },
									f1: !0,
								});
							}
							async run(A, ...R) {
								return await A.get(g.$y7c).exec4(...R);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: E.$SW,
									title: { value: "Submit Fix", original: "Submit Fix" },
									f1: !1,
								});
							}
							async run(A, ...R) {
								const O = A.get(a.$ek),
									B = A.get(o.$0zb),
									U = A.get(m.$dtb),
									[z, F] = R,
									x = U.getActiveCodeEditor(),
									H = x?.getModel();
								if (x === null || H?.uri.toString() !== z.toString() || !H)
									return;
								const q = Math.max(1, F.startLineNumber - 2),
									V = Math.min(H.getLineCount(), F.endLineNumber + 4);
								await x.setSelection({
									startLineNumber: q,
									startColumn: F.startColumn,
									endLineNumber: V,
									endColumn: F.endColumn,
								}),
									await O.executeCommand(r.$t7b);
								const G = B.nonPersistentStorage.promptBars.at(-1),
									K = "Please fix";
								G?.data.delegate.setText(K, K);
								let J = 0;
								do await new Promise((W) => setTimeout(W, 150)), J++;
								while (
									(G?.data.delegate.numSubmitListeners() === 0 ||
										G?.data.delegate.getText()?.trim() !== K) &&
									J < 3
								);
								G?.data.delegate.submit();
							}
						},
					);
				const M = "cursor.ai.reportBadChat";
				(0, u.$4X)(
					class extends u.$3X {
						constructor() {
							super({
								id: M,
								title: {
									value: "Report Latest Chat as Bad",
									original: "Report Latest Chat as Bad",
								},
								f1: !0,
							});
						}
						async run(A, ...R) {
							const O = A.get(l.$Nfc),
								B = A.get(P.$GO),
								z = A.get(I.$qgc)
									.selectedTab()
									.bubbles.filter(
										(F) =>
											F.messageType === i.PureMessage_MessageType.ASSISTANT &&
											F.type === T.BubbleType.AI_CHAT,
									)
									.at(-1);
							z && z.requestId
								? (O.reportGenerationFeedback(
										z.requestId,
										S.ReportGenerationFeedbackRequest_FeedbackType.THUMBS_DOWN,
									),
									B.info("Done!"))
								: B.error("No AI response found in the current chat");
						}
					},
				),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.generateGitCommitMessage",
									title: {
										value: "Generate Commit Message",
										original: "Generate Commit Message",
									},
									f1: !0,
									icon: L.$ak.sparkle,
								});
							}
							async run(A, R, O, B) {
								const U = A.get(l.$Nfc),
									z = A.get(k.$c7),
									F = R
										? Array.from(z.repositories).find(
												(J) => J.provider.rootUri?.toString() === R?.toString(),
											)
										: Array.from(z.repositories)[0];
								if (!F) throw new Error("No repository found");
								if (R === void 0 && ((R = F.provider.rootUri), !R))
									throw new Error("No rootUri found");
								if (O === void 0) {
									O = [];
									for (const J of F.provider.groups)
										O.push({
											resourceGroupId: J.id,
											resources: [...J.resources.map((W) => W.sourceUri)],
										});
								}
								let x = O.filter((J) => J.resourceGroupId === "index").flatMap(
									(J) => J.resources,
								);
								x.length === 0 &&
									(x = O.filter(
										(J) => J.resourceGroupId === "workingTree",
									).flatMap((J) => J.resources));
								const q = await A.get(s.$3Db).provider?.runCommand(
									f.GitActions.GetCurrentIndexAndRecentCommits,
									{ rawUris: x.map((J) => J.toString()), rootPath: R.path },
								);
								if (!q) throw new Error("No contents found");
								const { diffs: V, previousCommitMessages: G } = q;
								if (V.length === 0) throw new Error("No diffs found");
								const K = await U.generateCommitMessage({
									diffs: V,
									previousCommitMessages: G,
								});
								F.input.setValue(K, !1);
							}
						},
					);
			},
		),
		define(
			de[3941],
			he([
				1, 0, 5, 3, 118, 22, 9, 20, 47, 32, 25, 18, 44, 76, 56, 19, 42, 1476,
				45, 148, 59, 697, 58, 10, 131, 85, 204, 74, 33, 516, 191,
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
					(e.$39b = e.$29b = void 0),
					(e.$29b = (0, t.$Mi)("interfaceAgentService"));
				let D = class extends i.$1c {
					constructor(N, A, R, O, B, U, z, F, x, H, q, V, G) {
						super(),
							(this.b = N),
							(this.c = A),
							(this.f = R),
							(this.g = O),
							(this.h = B),
							(this.j = U),
							(this.m = z),
							(this.n = F),
							(this.q = x),
							(this.r = H),
							(this.s = q),
							(this.u = V),
							(this.w = G),
							(this.C = new s.$Jc(100)),
							(this.a = this.D(this.g.createScoped(this))),
							this.a.onChangeEffect({
								onChange: () => {
									this.g.nonPersistentStorage.aiInterfaceState.activeAgents
										.filter(
											(W) =>
												!this.g.workspaceUserPersistentStorage.tasksData.activeServerTaskUuids.includes(
													W.taskUuid,
												),
										)
										.forEach((W) => {
											this.onPauseTask(W.taskUuid);
										});
								},
								deps: [
									() =>
										this.g.workspaceUserPersistentStorage.tasksData
											.activeServerTaskUuids,
								],
								runNowToo: !1,
							});
					}
					configureTestRunner(N) {
						this.q.insertDummyTestConfig(N),
							this.s.openWorkspaceSettings({
								jsonEditor: !0,
								revealSetting: { key: "testRunner.config" },
							});
					}
					testUriFromInterfaceUri(N) {
						const A = N.path.replace(/\.ts$/, ".test.ts");
						return N.with({ path: A });
					}
					async implementationUriFromInterfaceUri(N) {
						const A = N.path.replace(/\.ts$/, ".impl.ts"),
							R = N.with({ path: A });
						if (await this.c.exists(R)) return R;
					}
					async getInterfaceAgentClientState(N) {
						const A = this.testUriFromInterfaceUri(N),
							R = (await this.c.exists(A)) ? A : void 0,
							O = await this.implementationUriFromInterfaceUri(N),
							B = this.j.asRelativePath(N),
							U = R ? this.j.asRelativePath(R) : void 0,
							z = O ? this.j.asRelativePath(O) : void 0;
						let F = [],
							x = [],
							H = [],
							q,
							V,
							G;
						try {
							(q = await this.n.createModelReference(N)),
								(F = q.object.textEditorModel
									.getValue()
									.split(q.object.textEditorModel.getEOL())),
								R &&
									((G = await this.n.createModelReference(R)),
									(H = G.object.textEditorModel
										.getValue()
										.split(G.object.textEditorModel.getEOL()))),
								O &&
									((V = await this.n.createModelReference(O)),
									(x = V.object.textEditorModel
										.getValue()
										.split(V.object.textEditorModel.getEOL())));
						} finally {
							q?.dispose(), V?.dispose(), G?.dispose();
						}
						const K = this.q.getTestConfig(N);
						if (!K) throw new Error("no test config found for interface");
						return {
							interfaceRelativeWorkspacePath: B,
							interfaceLines: F,
							testRelativeWorkspacePath: U,
							testLines: H,
							implementationRelativeWorkspacePath: z,
							implementationLines: x,
							language: K.language,
							testingFramework: K.testingFramework,
						};
					}
					async getInterfaceSymbol(N) {
						const A = new P.$Ce(),
							R = setTimeout(() => {
								A.cancel();
							}, 5e3),
							O = await this.n.createModelReference(N),
							U = (
								await this.w.getOrCreate(O.object.textEditorModel, A.token)
							).getTopLevelSymbols();
						if ((clearTimeout(R), U.length === 0)) return;
						const z = U.find((F) => F.kind === T.SymbolKind.Interface);
						if (z) return z;
					}
					async startInterfaceAgent(N) {
						if (!this.q.hasTestConfig(N)) {
							this.configureTestRunner(N);
							return;
						}
						if (
							this.g.nonPersistentStorage.aiInterfaceState.activeAgents.some(
								(O) => g.$dh.isEqual(O.interfaceUri, N),
							)
						)
							return;
						const A = this.testUriFromInterfaceUri(N);
						if (!(await this.c.exists(A))) {
							const O = await this.getInterfaceSymbol(N);
							if (!O) {
								console.error("no interface symbol found for uri", N);
								return;
							}
							const B = this.q.getTestBoilerplate(A, O.name, N);
							if (!B) {
								console.error("no test boilerplate found for uri", N);
								return;
							}
							await this.u.write(A, B);
						}
						console.log("STARTING THE INTERFACE AGENT", N);
						const R = (0, m.$9g)();
						try {
							const O = this.b.getModelDetails();
							this.f.publicLogCapture("submitted.startInterfaceAgent");
							const [B, U] = this.b.registerNewGeneration({
									metadata: void 0,
									generationUUID: R,
								}),
								z = await this.getInterfaceAgentClientState(N),
								F = new b.$oI({
									modelDetails: O,
									debuggingOnlyLiveMode:
										this.g.applicationUserPersistentStorage.agentDebuggerState
											.priomptLiveMode,
									interfaceAgentClientState: z,
								}),
								H = await (await this.b.aiClient()).interfaceAgentInit(F, {
									signal: U.signal,
									headers: (0, L.$m6b)(R),
								});
							console.log(
								"got response from interface agent init",
								H,
								H.taskUuid,
							),
								this.C.set(H.taskUuid, new i.$Zc()),
								this.g.setNonPersistentStorage(
									"aiInterfaceState",
									"activeAgents",
									(V) => [
										...V,
										{
											interfaceUri: N,
											taskUuid: H.taskUuid,
											status: new o.$BD({}),
										},
									],
								);
							const q = this.h.createTask({
								taskInitResponse: H,
								nonPersistent: !0,
							});
							if (!q.ok()) {
								console.error("error creating task", q.err);
								return;
							}
							this.y(N);
						} catch (O) {
							console.error("interface agent error", O);
						} finally {
							this.g.setNonPersistentStorage("inprogressAIGenerations", (O) =>
								O.filter((B) => B.generationUUID !== R),
							);
						}
					}
					async y(N) {
						const A = await this.streamInterfaceAgentStatus(N);
						if (!A) {
							console.error("no stream found for uri", N);
							return;
						}
						for await (const R of A) {
							const O = R.status;
							if (!O) {
								console.error("no status found for uri", N);
								continue;
							}
							let B = !1;
							if (
								(this.g.setNonPersistentStorage(
									"aiInterfaceState",
									"activeAgents",
									(U) =>
										U.map((z) =>
											g.$dh.isEqual(z.interfaceUri, N)
												? ((B = !0), { ...z, status: O })
												: z,
										),
								),
								!B)
							) {
								console.log("cancelling stream for uri", N);
								return;
							}
						}
					}
					async streamInterfaceAgentStatus(N) {
						const A = this.z(N);
						if (!A) {
							console.error("no task uuid found for uri", N);
							return;
						}
						const R = new b.$qI({ taskUuid: A }),
							O = (0, m.$9g)(),
							B = new AbortController();
						return (
							this.C.has(A) || this.C.set(A, new i.$Zc()),
							this.C.get(A)?.add({ dispose: () => B.abort() }),
							(await this.b.aiClient()).streamInterfaceAgentStatus(R, {
								headers: (0, L.$m6b)(O),
								signal: B.signal,
							})
						);
					}
					async getInterfaceAgentStatus(N) {
						if (!this.q.hasTestConfig(N))
							return new b.$tI({
								status: {
									validateConfiguration: o.InterfaceAgentStatus_Status.FAILURE,
									validateConfigurationMessage: `${y.$MV} Configure the testRunner.config setting in your .vscode/settings.json file.`,
								},
							});
						if (!(await this.getInterfaceSymbol(N)))
							return new b.$tI({
								status: {
									validateConfiguration: o.InterfaceAgentStatus_Status.FAILURE,
									validateConfigurationMessage:
										"No interface symbol found. Please write a valid interface in this file.",
								},
							});
						const R = (0, m.$9g)();
						try {
							const O = await this.getInterfaceAgentClientState(N),
								[B, U] = this.b.registerNewGeneration({
									metadata: void 0,
									generationUUID: R,
								}),
								z = new b.$oI({ interfaceAgentClientState: O }),
								x = (await this.b.aiClient()).taskGetInterfaceAgentStatus(z, {
									signal: U.signal,
									headers: (0, L.$m6b)(R),
								}),
								H = await this.h.handleTaskGet(x, U.signal);
							if (!H.ok())
								throw (
									(console.error("error getting interface agent status", H.err),
									H.err)
								);
							return H.v;
						} catch (O) {
							console.error("interface agent status error", O);
						} finally {
							this.g.setNonPersistentStorage("inprogressAIGenerations", (O) =>
								O.filter((B) => B.generationUUID !== R),
							);
						}
					}
					z(N) {
						const R =
							this.g.nonPersistentStorage.aiInterfaceState.activeAgents.find(
								(O) => g.$dh.isEqual(O.interfaceUri, N),
							);
						if (!R) {
							console.error("no active agent found for uri", N);
							return;
						}
						return R.taskUuid;
					}
					async pauseInterfaceAgent(N) {
						const A = this.z(N);
						if (!A) {
							console.error("no task uuid found for uri", N);
							return;
						}
						await this.h.killTask(A);
					}
					async onPauseTask(N) {
						this.g.setNonPersistentStorage(
							"aiInterfaceState",
							"activeAgents",
							(R) => R.filter((O) => O.taskUuid !== N),
						);
						const A = this.C.get(N);
						A && (A.dispose(), this.C.delete(N));
					}
					async newInterfaceFromName(N) {
						const A = this.m.activeEditorPane;
						let R = h.$A1.getOriginalUri(A?.input),
							O = "	";
						if (R) {
							const H = A?.getControl();
							if ((0, n.$0sb)(H)) {
								const q = H.getModel();
								q &&
									(O = q.getOptions().insertSpaces
										? " ".repeat(q.getOptions().tabSize)
										: "	");
							}
						}
						let B = N.charAt(0).toUpperCase() + N.slice(1);
						try {
							B = (await (await this.b.aiClient()).toCamelCase({ text: N }))
								.text;
						} catch {}
						const z = `${B.charAt(0).toLowerCase() + B.slice(1)}.ai.ts`,
							F = `export interface ${B} {

${O}// TODO: add the methods you want here, and the AI will implement a class with those methods for you

}

export function New${B}(): ${B} {
${O}throw new Error("Unimplemented. The AI will implement this function for you! You're in control of the function signature.")
}`;
						if (!R) {
							if (
								(console.log("no current file uri, using workspace root"),
								this.j.getWorkspace().folders.length === 0)
							) {
								console.error(
									"no workspace root; cannot create new interface from name",
								);
								return;
							}
							R = this.j.getWorkspace().folders[0].uri;
						}
						const x = C.URI.joinPath(
							R.with({ path: R.path.split("/").slice(0, -1).join("/") }),
							z,
						);
						try {
							await this.c.createFile(x, c.$Te.fromString(F));
						} catch (H) {
							console.log("error creating file", H);
						}
						await this.m.openEditor({ resource: x });
					}
				};
				(e.$39b = D),
					(e.$39b = D =
						Ne(
							[
								j(0, w.$Nfc),
								j(1, E.$ll),
								j(2, r.$km),
								j(3, f.$0zb),
								j(4, k.$a9b),
								j(5, u.$Vi),
								j(6, a.$IY),
								j(7, p.$MO),
								j(8, l.$19b),
								j(9, $.$gj),
								j(10, v.$7Z),
								j(11, S.$kZ),
								j(12, I.$9Db),
							],
							D,
						)),
					(0, d.$lK)(e.$29b, D, d.InstantiationType.Delayed);
			},
		),
		define(
			de[3942],
			he([
				1, 0, 5, 45, 669, 32, 337, 118, 1115, 620, 126, 140, 31, 58, 9, 62, 151,
				47, 22, 3, 70, 19, 2976, 611, 8, 243, 1707, 6, 25, 83, 67, 191, 13,
				1116, 226, 684, 161, 53, 107, 189, 1308, 90, 18, 668,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ldd = void 0);
				let V = class extends b.$1c {
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
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
					) {
						super(),
							(this.n = J),
							(this.q = W),
							(this.r = X),
							(this.t = Y),
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
							(this.L = oe),
							(this.M = ae),
							(this.N = pe),
							(this.O = $e),
							(this.P = ye),
							(this.Q = ue),
							(this.R = fe),
							(this.S = me),
							(this.U = ve),
							(this.f = this.D(new T.$re())),
							(this.onDidCancel = this.f.event),
							(this.h = this.D(new T.$re())),
							(this.onShouldFocusRetryBox = this.h.event),
							(this.accessUuids = new Set()),
							(this.W = new Set()),
							(this.X = new Set()),
							(this.Y = new Set()),
							(this.$ = new Set()),
							(this.bb = []),
							(this.db = new Map()),
							this.D(
								this.n.onChangeEffectManuallyDisposed({
									deps: [
										() => this.n.nonPersistentStorage.inprogressAIGenerations,
									],
									onChange: ({ deps: ge, prevDeps: be }) => {
										if (be === void 0) return;
										this.U.assert(
											ge[0].length <= 30,
											"The size of inprogress generations is too big! this is BAD BAD BAD. there is probably a bug?",
											{ showOnlyOnce: !0 },
										);
										const Ce = new Set(ge[0].map((Fe) => Fe.generationUUID)),
											Le = be[0].filter((Fe) => !Ce.has(Fe.generationUUID));
										for (const Fe of Le)
											Fe.metadata?.type === "interpreterExecution" &&
												this.cancel(Fe.metadata.tabId);
									},
									runNowToo: !0,
								}),
							),
							this.D(
								this.n.onChangeEffectManuallyDisposed({
									deps: [() => this.q.getReactiveCurrentChat()?.tabId],
									onChange: ({ deps: ge, prevDeps: be }) => {
										const Ce = this.q.getReactiveCurrentChat();
										if (Ce !== void 0) {
											for (const Le of Ce.bubbles)
												if (Le.type === "ai") {
													if (Le.interpreterModeCells === void 0) return;
													for (
														let Fe = 0;
														Fe < Le.interpreterModeCells.length;
														Fe++
													)
														Le.interpreterModeCells[Fe].status === "running" &&
															this.n.nonPersistentStorage.inprogressAIGenerations.filter(
																(Ke) =>
																	Ke.metadata.type === "interpreterExecution" &&
																	Ke.metadata.tabId === Ce.tabId,
															).length === 0 &&
															this.q.setChatData(
																"tabs",
																(Ee, Ie) => Ee.tabId === Ce.tabId,
																"bubbles",
																(Ee, Ie) => Ee.id === Le.id && Ee.type === "ai",
																"interpreterModeCells",
																(Ee, Ie) => Ie === Fe,
																"status",
																"canceled",
															);
												}
										}
									},
									runNowToo: !0,
								}),
							);
					}
					autoExecuteNext(J) {
						this.W.add(J);
					}
					dispose() {
						this.cb(0), super.dispose();
					}
					closeRetry(J) {
						if (J === void 0) {
							const X = this.q.getReactiveCurrentChat();
							if (X === void 0) return;
							J = X.tabId;
						}
						this.q.setChatData(
							"tabs",
							(X, Y) => X.tabId === J,
							"bubbles",
							(X, Y) =>
								X.type === "ai" && X.interpreterModeRetryIndex !== void 0,
							"interpreterModeRetryIndex",
							void 0,
						);
					}
					openRetry(J, W, X, Y) {
						if (J === void 0) {
							const ee = this.q.getReactiveCurrentChat();
							if (ee === void 0) return;
							J = ee.tabId;
						}
						if (Y?.noNeedToCancel !== !0) {
							const ee = this.q.isTabGenerating(J, { includeExecuting: !0 });
							if (ee.isGenerating)
								if (ee.generation.metadata?.type === "interpreterExecution") {
									this.X.add(J), ee.cancel();
									return;
								} else {
									ee.cancel();
									return;
								}
						}
						let ie;
						if (W === void 0) {
							const ee = this.q.chatData.tabs.find((Q) => Q.tabId === J);
							if (ee === void 0) return;
							const _ = ee.bubbles.filter((Q) => Q.type === "ai");
							if (_.length === 0) return;
							const te = _.find((Q) => Q.interpreterModeRetryIndex !== void 0);
							if (te !== void 0)
								if (((W = te.id), te.interpreterModeRetryIndex === 0)) {
									const Q = ee.bubbles.findIndex((Z) => Z.id === W);
									if (Q === -1) return;
									if (Q === 0) W = void 0;
									else {
										const Z = ee.bubbles.at(Q - 2);
										Z?.type !== "ai" ? (W = void 0) : (W = Z.id);
									}
								} else X = (te.interpreterModeRetryIndex ?? 1) - 1;
							W === void 0 && (W = _[_.length - 1].id),
								te !== void 0 && te.id !== W && (ie = te.id);
						}
						if (X === void 0) {
							const ee = this.q.chatData.tabs.find((Q) => Q.tabId === J);
							if (ee === void 0) return;
							const _ = ee.bubbles.find((Q) => Q.id === W);
							if (_ === void 0 || _.type !== "ai") return;
							const te = _.interpreterModeCells;
							if (te === void 0) X = 0;
							else {
								const Q = te[te.length - 1].status;
								Q === "pending" || Q === "running"
									? (X = te.length - 1)
									: (X = te.length);
							}
						}
						const ne = "interpreterModeRetryIndex";
						(0, M.batch)(() => {
							this.q.setChatData(
								"tabs",
								(ee, _) => ee.tabId === J,
								"bubbles",
								(ee, _) => ee.id === W && ee.type === "ai",
								ne,
								X,
							),
								ie !== void 0 &&
									this.q.setChatData(
										"tabs",
										(ee, _) => ee.tabId === J,
										"bubbles",
										(ee, _) => ee.id === ie && ee.type === "ai",
										ne,
										void 0,
									);
						}),
							setTimeout(() => {
								this.h.fire();
							}, 10);
					}
					async Z(J, W) {
						if (this.db.has(J)) await this.db.get(J);
						else {
							if (W === !0) return;
							const ne = this.q.chatData.tabs.find((ee) => ee.tabId === J);
							return ne === void 0 ||
								ne.interpreterData?.cursorNotebookUri === void 0
								? void 0
								: (await this.eb(
										n.URI.revive(ne.interpreterData.cursorNotebookUri),
										J,
									),
									this.Z(J, !0));
						}
						const X = this.q.chatData.tabs.find((ne) => ne.tabId === J);
						if (X === void 0) return;
						const Y = X?.interpreterData?.cursorNotebookUri;
						if (Y === void 0) return;
						const ie = this.bb.find((ne) =>
							l.$dh.isEqual(ne.notebookModelReference.uri, n.URI.revive(Y)),
						);
						if (ie !== void 0) return ie;
					}
					async executeAndContinue(J, W) {
						if (J === void 0) {
							const ne = this.q.getReactiveCurrentChat();
							if (ne === void 0) return;
							J = ne.tabId;
						}
						const X = J;
						if (
							this.q.isTabGenerating(J, { includeExecuting: !0 }).isGenerating
						)
							return;
						if (
							W !== void 0 &&
							this.ab(J, W.aiBubbleId, W.cellIndex + 1) === void 0
						) {
							console.warn("Failed to trim chat, not executing.");
							return;
						}
						this.Y.add(J);
						const ie = (0, o.$9g)();
						this.n.setNonPersistentStorage("inprogressAIGenerations", (ne) => {
							const ee = [...ne];
							return (
								ee.push({
									generationUUID: ie,
									metadata: { type: "interpreterExecution", tabId: X },
									queuePositionResponse: void 0,
								}),
								ee
							);
						});
						try {
							const ne = this.q.chatData.tabs.find((pe) => pe.tabId === J);
							if (ne === void 0) return;
							const ee = await this.Z(J);
							if (ee === void 0) return;
							let _ = ne.bubbles.at(-1);
							if (
								((_ === void 0 || _.type !== "ai") &&
									(this.q.setChatData(
										"tabs",
										(pe, $e) => pe.tabId === J,
										"bubbles",
										(pe) => pe.slice(0, -1),
									),
									(_ = ne.bubbles.at(-1))),
								_ === void 0 || _.type !== "ai")
							)
								return;
							const te = _,
								Q = te.interpreterModeCells,
								Z = Q?.at(-1);
							if (Z === void 0 || Q === void 0) return;
							const se = "interpreterModeCells",
								re = "status";
							this.q.setChatData(
								"tabs",
								(pe, $e) => pe.tabId === J,
								"bubbles",
								(pe, $e) => pe.id === te.id && pe.type === "ai",
								se,
								(pe, $e) => $e === Q.length - 1,
								re,
								"running",
							);
							let oe;
							const ae = {
								interpreterModeCell: Z,
								activeNotebook: ee,
								tabId: J,
								reportFailure: (pe) => {
									const $e = "output";
									this.q.setChatData(
										"tabs",
										(fe, me) => fe.tabId === J,
										"bubbles",
										(fe, me) => fe.id === te.id && fe.type === "ai",
										se,
										(fe, me) => me === Q.length - 1,
										"status",
										"failure",
									),
										this.q.setChatData(
											"tabs",
											(fe, me) => fe.tabId === J,
											"bubbles",
											(fe, me) => fe.id === te.id && fe.type === "ai",
											se,
											(fe, me) => me === Q.length - 1,
											$e,
											pe,
										);
								},
							};
							try {
								switch (Z.tool) {
									case m.InterpreterTool.PYTHON:
										oe = await this.executeNotebook(ae);
										break;
									case m.InterpreterTool.SHELL:
										oe = await this.executeShell(ae);
										break;
									default: {
										const ye = Z.tool;
										oe = await this.executeNotebook(ae);
									}
								}
								if (oe === !1) return;
								if (this.X.has(J)) {
									this.X.delete(J),
										this.q.setChatData(
											"tabs",
											(ue, fe) => ue.tabId === J,
											"bubbles",
											(ue, fe) => ue.id === te.id && ue.type === "ai",
											se,
											(ue, fe) => fe === Q.length - 1,
											re,
											"canceled",
										),
										this.openRetry(J);
									return;
								}
								const pe = "output";
								this.q.setChatData(
									"tabs",
									(ye, ue) => ye.tabId === J,
									"bubbles",
									(ye, ue) => ye.id === te.id && ye.type === "ai",
									se,
									(ye, ue) => ue === Q.length - 1,
									re,
									"success",
								),
									this.q.setChatData(
										"tabs",
										(ye, ue) => ye.tabId === J,
										"bubbles",
										(ye, ue) => ye.id === te.id && ye.type === "ai",
										se,
										(ye, ue) => ue === Q.length - 1,
										pe,
										oe.slice(0, 1e5),
									),
									this.w.executeCommand(c.$zV, {
										bubbleID: te.id,
										tabID: J,
										chatType: "interpreter",
									});
							} catch (pe) {
								console.error(pe), ae.reportFailure("Unknown error.");
							}
						} finally {
							this.Y.delete(J),
								this.n.setNonPersistentStorage(
									"inprogressAIGenerations",
									(ne) => ne.filter((ee) => ee.generationUUID !== ie),
								);
						}
					}
					async executeShell({
						interpreterModeCell: J,
						activeNotebook: W,
						tabId: X,
						reportFailure: Y,
					}) {
						const ie = W.terminalInstance.capabilities.get(
							z.TerminalCapability.CommandDetection,
						);
						if (ie === void 0)
							return (
								Y(
									"Shell not supported. Command detection must be available, for now.",
								),
								!1
							);
						let ne;
						const ee = new Promise((_) => {
							ne = ie.onCommandFinished((te) => {
								const Q = te.getOutput();
								_(Q);
							});
						});
						try {
							await W.terminalInstance.sendText(J.code, !0, !0);
							const _ = await Promise.race([
								ee,
								new Promise((te) => setTimeout(te, 6e4)),
							]);
							return _ === void 0
								? "Shell command timed out after 60 seconds."
								: _;
						} finally {
							ne?.dispose();
						}
					}
					async executeNotebook({
						interpreterModeCell: J,
						activeNotebook: W,
						tabId: X,
						reportFailure: Y,
					}) {
						const ie = W.notebookModelReference,
							ne = {
								source: J.code,
								language: "python",
								cellKind: s.CellKind.Code,
								outputs: [],
								metadata: {},
								mime: "",
							},
							ee = {
								editType: s.CellEditType.Replace,
								index: ie.cells.length,
								count: 0,
								cells: [ne],
							};
						ie.applyEdits([ee], !0, void 0, () => {}, void 0, !0);
						const _ = this.I.getMatchingKernel(ie);
						if (!_.selected)
							if (_.suggestions.length > 0) {
								const se = _.suggestions[0];
								this.I.selectKernelForNotebook(se, ie);
							} else if (_.all.length > 0) {
								const se = _.all[0];
								this.I.selectKernelForNotebook(se, ie);
							} else
								return (
									Y(
										"Failed to find a kernel to run the code. Please install the Jupyter extension.",
									),
									!1
								);
						const te = ie.cells[ie.cells.length - 1],
							Q = [te];
						return (
							this.$.has(X) && (this.$.delete(X), Q.unshift(ie.cells[0])),
							await this.G.executeNotebookCells(ie, Q, this.H),
							G(te.outputs)
						);
					}
					async submitUserFeedback(J, W) {
						try {
							(
								await this.r.interpreterClient()
							).logInterpreterExplicitUserFeedback({
								conversationUuid: J,
								userFeedback: W,
								userFeedbackDetails: "",
							});
						} catch (X) {
							console.warn(
								X,
								"Failed to submit interpreter user feedback. IGNORING.",
							);
						}
					}
					ab(J, W, X) {
						const Y = this.q.chatData.tabs.find((te) => te.tabId === J);
						if (Y === void 0) return;
						const ie = Y.bubbles.find((te) => te.id === W);
						if (ie === void 0 || ie.type !== "ai") return;
						const ne = (0, I.$eHb)(ie.text, X),
							ee = (0, I.$cHb)(
								(0, I.$eHb)(ie.text, X + 1).slice(ne.length),
								ie.interpreterModeCells,
							);
						let _ = ie.id;
						if (
							(this.q.setChatData(
								"tabs",
								(te, Q) => te.tabId === J,
								"bubbles",
								(te) => {
									const Q = te.findIndex((Z) => Z.id === W);
									return Q === -1 ? te : te.slice(0, Q + 1);
								},
							),
							ne.trim() === "")
						) {
							const te = Y.bubbles.findIndex((Z) => Z.id === _);
							if (te === -1 || te === 0) return;
							_ = Y.bubbles[te - 1].id;
						} else
							(0, M.batch)(() => {
								this.q.setChatData(
									"tabs",
									(Q, Z) => Q.tabId === J,
									"bubbles",
									(Q, Z) => Q.id === ie.id && Q.type === "ai",
									"text",
									ne,
								),
									this.q.setChatData(
										"tabs",
										(Q, Z) => Q.tabId === J,
										"bubbles",
										(Q, Z) => Q.id === ie.id && Q.type === "ai",
										"interpreterModeCells",
										(Q) => [...(Q ?? []).slice(0, X)],
									);
							});
						return { bubbleId: _, retryPreviousAttempt: ee };
					}
					retryWithFeedback(J, W, X, Y) {
						try {
							const ie = this.ab(J, X, Y);
							if (ie === void 0) return;
							const { bubbleId: ne, retryPreviousAttempt: ee } = ie;
							this.w.executeCommand(c.$zV, {
								bubbleID: ne,
								tabID: J,
								chatType: {
									case: "interpreter",
									retryInstructions: W,
									retryPreviousAttempt: ee,
								},
							});
						} finally {
							this.closeRetry(J), this.w.executeCommand(c.$eX);
						}
					}
					async cancel(J) {
						try {
							const W = await this.Z(J);
							W &&
								(this.G.cancelNotebookCells(
									W.notebookModelReference,
									W.notebookModelReference.cells,
								),
								W.terminalInstance.interrupt());
						} finally {
							this.f.fire(J);
						}
					}
					createNotebook() {
						return this.createNotebookAsync()[0];
					}
					createNotebookAsync() {
						const J = n.URI.joinPath(
								this.F.userHome,
								this.y.dataFolderName,
								"interpreter-notebooks",
							),
							X =
								`${new Date().toISOString()}-${(0, o.$9g)()}.ipynb`.replaceAll(
									":",
									"_",
								),
							Y = n.URI.joinPath(J, X),
							ie = this.C.createFile(Y);
						return (
							this.C.resolve(J)
								.then((ne) => {
									ne.children &&
										(ne.children.sort((ee, _) =>
											_.resource.fsPath.localeCompare(ee.resource.fsPath),
										),
										ne.children.length > 10 &&
											ne.children.slice(10).forEach((ee) => {
												this.C.del(ee.resource);
											}));
								})
								.catch((ne) => {
									console.error(ne);
								}),
							[Y, ie]
						);
					}
					async changeKernel() {
						const J = this.bb.at(0);
						if (J === void 0) {
							console.warn("No active notebook found");
							return;
						}
						await this.Q.createInstance(F.$b4b).showQuickPick({
							textModel: J.notebookModelReference,
							scopedContextKeyService: this.H,
						});
						const X = this.I.getMatchingKernel(J.notebookModelReference);
						X.selected &&
							this.n.setApplicationUserPersistentStorage(
								"interpreterModeSettings",
								"defaultKernelId",
								X.selected.id,
							);
					}
					async cb(J) {
						for (; this.bb.length > J; ) {
							const W = this.bb[0];
							W.notebookModelReference.dispose(),
								this.accessUuids.delete(W.accessUuid),
								(this.bb = this.bb.slice(1)),
								this.db.delete(W.tabId);
						}
					}
					updateRunningMetadata(J, W) {
						const X = this.q.chatData.tabs.find((ee) => ee.tabId === J);
						if (X === void 0) return;
						const Y = X.bubbles.at(-1);
						if (Y === void 0 || Y.type !== "ai") return;
						this.q.setChatData(
							"tabs",
							(ee, _) => ee.tabId === J,
							"bubbles",
							(ee, _) => ee.type === "ai" && _ === X.bubbles.length - 1,
							"interpreterModeCells",
							(ee, _) => _ === (Y.interpreterModeCells?.length ?? 0) - 1,
							"runningMetadata",
							(ee) => ({ ...ee, ...W }),
						);
					}
					async eb(J, W) {
						let X = () => {},
							Y = () => {},
							ie = !1;
						try {
							if (
								this.bb.find(($e) =>
									l.$dh.isEqual($e.notebookModelReference.uri, J),
								) ||
								this.db.has(W)
							)
								return;
							if (
								(this.db.set(
									W,
									new Promise(($e, ye) => {
										(X = $e),
											(Y = (ue) => {
												ye(ue);
											});
									}),
								),
								!(await this.C.exists(J)))
							) {
								const [$e, ye] = this.createNotebookAsync();
								await ye,
									(J = $e),
									this.q.setChatData(
										"tabs",
										(ue, fe) => ue.tabId === W,
										"interpreterData",
										"cursorNotebookUri",
										J.toJSON(),
									);
							}
							const ee = await this.P.createTerminal({
								config: {
									isFeatureTerminal: !0,
									isTransient: !0,
									hideFromUser: !0,
								},
							});
							await this.cb(2),
								await this.N.whenInstalledExtensionsRegistered();
							const _ = this.M.getContributedNotebookTypes(J),
								Q = _.at(0)?.id || _.at(0)?.id;
							if (Q === void 0) throw new Error("No view type found");
							const Z = await this.M.createNotebookTextModel(Q, J),
								se = Z,
								re = (0, y.$kdd)(
									se.cells
										.at(0)
										?.textBuffer.getLinesContent()
										.join(`
`),
								),
								le = re !== void 0 && re.length > 10 ? re : (0, o.$9g)();
							this.bb.push({
								notebookModelReference: Z,
								accessUuid: le,
								tabId: W,
								terminalInstance: ee,
							}),
								this.accessUuids.add(le);
							const oe = this.L.getWorkspace().folders.at(0),
								ae = (0, y.$jdd)(W, oe?.uri.fsPath, le);
							if (
								se.cells.length === 0 ||
								se.cells[0].textBuffer.getLinesContent().join(`
`) !== ae
							) {
								const $e = {
										source: ae,
										language: "python",
										cellKind: s.CellKind.Code,
										outputs: [],
										metadata: {},
										mime: "",
									},
									ye = {
										editType: s.CellEditType.Replace,
										index: 0,
										count: 0,
										cells: [$e],
									};
								se.applyEdits([ye], !0, void 0, () => {}, void 0, !0);
							}
							const pe = this.I.getMatchingKernel(se);
							if (!pe.selected) {
								const $e = pe.all.find(
									(ye) =>
										ye.id ===
											this.n.applicationUserPersistentStorage
												.interpreterModeSettings.defaultKernelId &&
										this.n.applicationUserPersistentStorage
											.interpreterModeSettings.defaultKernelId !== void 0,
								);
								if ($e) this.I.selectKernelForNotebook($e, se);
								else if (pe.suggestions.length > 0) {
									const ye = pe.suggestions[0];
									this.I.selectKernelForNotebook(ye, se);
								} else if (pe.all.length > 0) {
									const ye = pe.all[0];
									this.I.selectKernelForNotebook(ye, se);
								} else {
									const ye = new Promise((ve) => {
										setTimeout(() => {
											ve("timeout");
										}, 5e3);
									});
									let ue = { c: void 0 };
									const fe = new Promise((ve) => {
											ue.c = this.I.onDidAddKernel(() => {
												ve(void 0);
											});
										}),
										me = await Promise.race([ye, fe]);
									if ((ue.c?.dispose(), me === "timeout")) {
										this.$.add(W),
											console.error(
												"No kernels available for notebook. Maybe install Jupyter or install Python?",
											);
										return;
									}
								}
							}
							await this.G.executeNotebookCells(se, [se.cells[0]], this.H);
						} catch (ne) {
							console.error(ne), Y(ne), (ie = !0);
						} finally {
							ie || X();
						}
					}
					async readFileContents(J) {
						try {
							return (await this.C.readFile(J)).value.toString();
						} catch (W) {
							return console.error("Watcher: error reading file -- ", W), "";
						}
					}
					async readFile(J) {
						const W = this.O.getModel(J);
						if (W)
							return new k.$Ws({
								contents: W.getValue(),
								relativeWorkspacePath: this.L.asRelativePath(J),
							});
						{
							const X = await this.C.readFile(J);
							return new k.$Ws({
								relativeWorkspacePath: this.L.asRelativePath(J),
								contents: X.value.toString(),
							});
						}
					}
					async streamInterpreter(J) {
						await this.r.setChatInjectedContext(
							J.generationMetadata,
							J.options,
						);
						const W = this.W.has(J.generationMetadata.tabId);
						W && this.W.delete(J.generationMetadata.tabId);
						const [X, Y] = this.r.registerNewGeneration({
								metadata: J.generationMetadata,
								generationUUID: J.generationUUID,
							}),
							ne =
								this.n.workspaceUserPersistentStorage.persistentChatMetadata.find(
									(Ce) =>
										Ce.bubbleId === J.generationMetadata.bubbleId &&
										Ce.tabId === J.generationMetadata.tabId,
								)?.injectedContext,
							ee =
								J.options?.overrideModelDetails ||
								this.r.getModelDetails({ specificModelField: "regular-chat" });
						this.u.publicLogCapture("Submitted interpreter chat");
						const _ = [];
						let te,
							Q = [];
						for (const Ce of J.interpreterData.openFiles)
							try {
								const Le =
										Ce === "current-file"
											? await this.r.getCurrentFileInfo()
											: await this.readFile(n.URI.revive(Ce)),
									Fe = {
										file: Le,
										scrollTopLineNumber: Math.max(
											(Le?.cursorPosition?.line ?? 1) - 30,
											1,
										),
									};
								_.push(Fe),
									Ce === "current-file" &&
										Le !== void 0 &&
										(te = this.L.resolveRelativePath(Le.relativeWorkspacePath));
							} catch {
								Ce !== "current-file" && Q.push(Ce);
							}
						this.q.setChatData(
							"tabs",
							(Ce, Le) => Ce.tabId === J.generationMetadata.tabId,
							"interpreterData",
							"openFiles",
							(Ce) => {
								const Le = Ce.filter(
									(Fe) =>
										Fe !== "current-file" &&
										!Q.some((Oe) =>
											l.$dh.isEqual(n.URI.revive(Oe), n.URI.revive(Fe)),
										),
								);
								return te !== void 0 && Le.push(te.toJSON()), Le;
							},
						);
						const Z = J.conversationHistory
								.map((Ce, Le) =>
									Ce.text !== ""
										? (Le === J.conversationHistory.length - 1 ||
												Le === J.conversationHistory.length - 2) &&
											Ce.type === u.ConversationMessage_MessageType.HUMAN
											? `Most important and relevant query: ${Ce.text}`
											: Ce.text
										: null,
								)
								.filter((Ce) => Ce !== null)
								.join(`

`),
							se = new AbortController();
						Y.signal.addEventListener("abort", () => {
							se.abort();
						});
						const re = await Promise.race([
								this.z.parallelSearch(Z, 20, 20, { abortSignal: se.signal }),
								new Promise((Ce) =>
									setTimeout(() => {
										se.abort(), Ce([]);
									}, 2e3),
								),
							]),
							le = await this.J.getCmdKDebugInfo(),
							oe = this.L.getWorkspace().folders.at(0)?.uri;
						let ae = oe
							? await this.readFileContents(
									n.URI.joinPath(oe, ".cursor", "interpreter.md"),
								)
							: "";
						ae.trim() !== "" &&
							(ae += `
`);
						const pe = await this.Z(J.generationMetadata.tabId);
						let $e = "";
						pe !== void 0 && ($e = await pe.terminalInstance.getCwd());
						const ye = {
								openFiles: _,
								conversation: J.conversationHistory,
								explicitContext: await this.r.getExplicitContext(),
								highLevelFolderDescription:
									await this.r.getHighLevelFolderDescription(),
								modelDetails: ee,
								cmdKDebugInfo: le,
								retryInstructions: J.retryInstructions,
								conversationUuid: J.generationMetadata.tabId,
								retryPreviousAttempt: J.retryPreviousAttempt,
								documentationIdentifiers: ne?.usedDocs
									? [...ne.usedDocs.map((Ce) => Ce.docId)]
									: [],
								summary: J.generationMetadata.summaryText,
								summaryUpUntilIndex: J.generationMetadata.summaryUpUntilIndex,
								scoredCodebaseContext: re,
								quotes: J.generationMetadata.quotes ?? [],
								supportsShellTool: !0,
								globalDescription: ae,
								terminalCwd: $e,
							},
							fe = (await this.r.interpreterClient()).streamInterpreter(
								new m.$K_({ ...ye }),
								{ signal: Y.signal, headers: (0, D.$m6b)(J.generationUUID) },
							);
						let me = "";
						for (const [Ce, Le] of [
							...J.conversationHistory.entries(),
						].reverse())
							if (
								Le.type === u.ConversationMessage_MessageType.HUMAN &&
								Le.text !== ""
							) {
								me = J.conversationHistory[Ce].text;
								break;
							}
						let ve = 0;
						J.conversationHistory.length === 0 ||
						J.conversationHistory[J.conversationHistory.length - 1].type ===
							u.ConversationMessage_MessageType.HUMAN
							? this.r.addToPromptHistory({
									prompt: me,
									commandType: r.CommandType.CHAT,
								})
							: (ve =
									J.conversationHistory[J.conversationHistory.length - 1]
										.interpreterResults?.length ?? 0);
						const ge = this.fb({
								streamer: fe,
								generationMetadata: J.generationMetadata,
								generationUUID: J.generationUUID,
								request: ye,
								abortController: Y,
								preventFollowup: J.preventFollowup,
								interpreterBlockIndex: ve,
								interpreterData: J.interpreterData,
								shouldAutoExecute: W,
							}),
							be = N.$N_.typeName + "/" + N.$N_.methods.streamInterpreter.name;
						return this.r.streamResponse({
							modelDetails: ee,
							generationUUID: J.generationUUID,
							source: "chat",
							streamer: ge,
							streamerURL: be,
							rethrowCancellation: !0,
							rerun: J.options?.rerun,
							failSilently: J.options?.failSilently,
						});
					}
					async *fb({
						interpreterBlockIndex: J,
						generationMetadata: W,
						streamer: X,
						request: Y,
						generationUUID: ie,
						interpreterData: ne,
						abortController: ee,
						preventFollowup: _,
						shouldAutoExecute: te,
					}) {
						let Q = !1,
							Z = "",
							se = !1,
							re = "",
							le = m.InterpreterTool.UNSPECIFIED,
							oe = !1,
							ae = !1;
						try {
							const pe = this.q,
								$e = async function* () {
									(Q = !1),
										(se = !0),
										yield "\n```",
										(Z = Z.slice(4)),
										re[0] ===
											`
` && (re = re.slice(1)),
										pe.setChatData(
											"tabs",
											(ue, fe) => ue.tabId === W.tabId,
											"bubbles",
											(ue, fe) => ue.id === W.aiBubbleId && ue.type === "ai",
											"interpreterModeCells",
											(ue) => [
												...(ue ?? []),
												{
													status: "pending",
													output: void 0,
													code: re,
													tool: le,
												},
											],
										),
										(oe = !0),
										yield `
[[[interpreter_result_` +
											J +
											`]]]
`,
										(Z = "");
								};
							for await (const ye of X)
								if (ye.text.length !== 0)
									if (((Z += ye.text), Q))
										if (Z.startsWith("\n```")) {
											yield* $e();
											break;
										} else
											for (; !"\n```".startsWith(Z) && Z.length > 0; )
												(se = !0), yield Z[0], (re += Z[0]), (Z = Z.slice(1));
									else
										for (; Z.length > 0; ) {
											let ue = !1;
											for (const fe of Object.values(m.InterpreterTool)) {
												if (typeof fe == "string") continue;
												const me = (0, I.$aHb)(fe),
													ve = se
														? `
\`\`\`${me}`
														: `\`\`\`${me}`;
												if (Z.startsWith(ve)) {
													(Q = !0),
														ne.cursorNotebookUri &&
															this.eb(
																n.URI.revive(ne.cursorNotebookUri),
																W.tabId,
															),
														(se = !0),
														yield ve.replace(
															`\`\`\`${me}`,
															`\`\`\`${(0, I.$bHb)(fe)}`,
														),
														(Z = Z.slice(ve.length)),
														(ue = !0),
														(le = fe);
													break;
												}
											}
											if (ue) break;
											(se = !0), yield Z[0], (Z = Z.slice(1));
										}
							Q && (yield* $e()), Z.length > 0 && (yield Z);
						} catch (pe) {
							throw ((ae = !0), pe);
						} finally {
							oe || ae
								? (_(),
									ae &&
										this.openRetry(W.tabId, W.aiBubbleId, J, {
											noNeedToCancel: !0,
										}),
									oe &&
										te &&
										(this.autoExecuteNext(W.tabId),
										setTimeout(() => {
											this.executeAndContinue(W.tabId);
										}, 10)))
								: this.w.executeCommand(a.$Cgc);
						}
					}
				};
				(e.$ldd = V),
					(e.$ldd = V =
						Ne(
							[
								j(0, i.$0zb),
								j(1, C.$kgc),
								j(2, d.$Nfc),
								j(3, w.$Z6b),
								j(4, E.$km),
								j(5, h.$ek),
								j(6, g.$Bk),
								j(7, A.$J6b),
								j(8, f.$ll),
								j(9, p.$ucd),
								j(10, $.$c6),
								j(11, v.$6j),
								j(12, S.$f6),
								j(13, R.$06b),
								j(14, P.$Vi),
								j(15, O.$MIb),
								j(16, B.$q2),
								j(17, L.$QO),
								j(18, U.$iIb),
								j(19, t.$Li),
								j(20, x.$aM),
								j(21, H.$IY),
								j(22, q.$kcc),
							],
							V,
						));
				function G(K) {
					return K.map((W) =>
						W.outputs
							.map((Y) => {
								if (Y.mime === "text/plain") return Y.data.toString();
								if (Y.mime === "application/vnd.code.notebook.error") {
									const ie = Y.data.toString();
									let ne = JSON.parse(ie);
									const ee = ne.stack
										.replace(/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g, "")
										.replace(/\u001b\[0/g, "");
									return (
										(ne = { ...ne, stack: ee }), JSON.stringify(ne, null, 2)
									);
								} else {
									if (Y.mime === "application/vnd.code.notebook.stdout")
										return Y.data.toString();
									if (Y.mime === "application/vnd.code.notebook.stderr")
										return Y.data.toString();
								}
								return "";
							})
							.join(`

`),
					).join(`

`);
				}
			},
		),
		define(
			de[3943],
			he([
				1, 0, 47, 65, 17, 7, 118, 3, 9, 42, 20, 90, 45, 134, 137, 315, 22, 25,
				226, 110, 19, 18, 1110, 975, 32, 148, 83, 66, 2999, 69, 31, 155, 204,
				567, 10, 62, 191, 85,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Eed = void 0),
					(E = mt(E));
				let U = class extends d.$1c {
					constructor(
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
					) {
						super(),
							(this.c = x),
							(this.f = H),
							(this.g = q),
							(this.h = V),
							(this.j = G),
							(this.m = K),
							(this.n = J),
							(this.q = W),
							(this.r = X),
							(this.s = Y),
							(this.t = ie),
							(this.u = ne),
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
							(this.fileStates = {}),
							(this.notificationHandlers = {}),
							(this.lastOpenedFiles = []),
							(this.M = new Map()),
							(this.handleKeyDown = (pe) => {
								pe.key === "Escape" && this.Q();
							}),
							(this.U = {});
					}
					getMarker(x) {
						return this.notificationHandlers[x]?.getMarker();
					}
					async getGitDiffChangedRanges() {
						if (this.r.getWorkspace().folders.length === 0)
							return console.error("Watcher: not in a folder; giving up"), [];
						this.r.getWorkspace().folders.length > 1 &&
							console.warn(
								"Watcher: in a multi-root workspace; just doing it for the first folder",
							);
						const x = this.r.getWorkspace().folders[0].uri,
							H = await this.t.exec2("git diff", {
								cwd: x.fsPath,
								maxBuffer: 1024 * 1024,
							}),
							q = H.stdout ?? H.stderr;
						if (H.error)
							return (
								console.error("Watcher: error getting git diff", H.error), []
							);
						const V =
								/diff --git a\/(.*) b\/\1\nindex [\da-f]+\.\.[\da-f]+ \d+\n--- a\/\1\n\+\+\+ b\/\1\n@@ -\d+,\d+ \+(\d+),(\d+) @@.*\n(?:\s*.*\n)*/g,
							G = [];
						let K;
						for (; (K = V.exec(q)) !== null; ) {
							const J = parseInt(K[2], 10),
								W = parseInt(K[3], 10),
								X = J + W - 1,
								Y = K[1],
								ie = (0, s.$nh)(x, Y);
							G.push({ range: new w.$iL(J, 1, X, 1), uri: ie }),
								(V.lastIndex = K.index + 1);
						}
						return G;
					}
					async diffScan() {
						throw new Error("deprecated");
					}
					async scanDisplayedFiles() {
						throw new Error("deprecated");
					}
					N() {
						this.M.forEach((x) => x.forEach((H) => H.dispose())),
							this.M.clear();
					}
					async startBackgroundWatch() {
						this.j.applicationUserPersistentStorage.watcherEnabled === !0 &&
							(this.N(), this.O());
					}
					O() {
						for (const H of this.f.listCodeEditors()) this.R(H);
						this.M.set("global", [
							this.D(
								this.f.onCodeEditorAdd((H) => {
									this.R(H);
								}),
							),
						]),
							this.D(
								this.L.files.onDidSave((H) => {
									const q = this.f.getActiveCodeEditor();
									if (q === null) return;
									const V = q.getModel();
									V !== null &&
										H.model.resource.toString() === V.uri.toString() &&
										this.j.applicationUserPersistentStorage.lintSettings
											.runOnSaveInstead &&
										this.W(q, V, V.getEOL());
								}),
							);
						const x = E.getWindows();
						this.M.set("window", [
							this.D({
								dispose: () => {
									for (const H of x)
										H.window.document.removeEventListener(
											"keydown",
											this.handleKeyDown,
										);
								},
							}),
						]);
						for (const H of x)
							H.window.document.addEventListener("keydown", this.handleKeyDown);
					}
					P(x, H) {
						return !(
							x.endLineNumber < H.lineNumber ||
							x.startLineNumber > H.lineNumber ||
							(x.endLineNumber === x.startLineNumber &&
								x.endColumn < H.column) ||
							(x.startLineNumber === x.endLineNumber &&
								x.startColumn > H.column)
						);
					}
					Q() {
						const x = this.f.getActiveCodeEditor();
						if (x === null) return;
						const H = x.getModel();
						if (H === null) return;
						const q = x.getPosition();
						if (q)
							for (const [V, G] of Object.entries(this.notificationHandlers)) {
								const K = G.getMarker();
								K !== void 0 &&
									K.resource.toString() === H.uri.toString() &&
									this.P(
										new w.$iL(
											K.startLineNumber,
											K.startColumn,
											K.endLineNumber,
											K.endColumn,
										),
										q,
									) &&
									(G.dispose(), delete this.notificationHandlers[V]);
							}
					}
					run() {
						throw new Error("deprecated");
					}
					R(x) {
						const H = x.getId();
						this.M.set(H, [
							x.onDidDispose(() => {
								this.M.get(H)?.forEach((V) => V.dispose()), this.M.delete(H);
							}),
						]);
						const q = x.getModel();
						q !== null && this.S(x, q),
							this.M.get(H).push(
								this.D(
									x.onDidChangeModel(() => {
										const V = x.getModel();
										V !== null && this.S(x, V);
									}),
								),
							);
					}
					S(x, H) {
						this.D(
							H.onDidChangeContent(async (q) => {
								this.Q(),
									this.j.applicationUserPersistentStorage.lintSettings
										.runOnSaveInstead || this.W(x, H, H.getEOL());
							}),
						);
					}
					W(x, H, q) {
						clearTimeout(this.U[H.uri.toString()]);
						const V = x.getPosition(),
							G = this.j.applicationUserPersistentStorage.lintSettings
								.runOnSaveInstead
								? 0
								: this.j.applicationUserPersistentStorage.lintSettings
										.watcherDebounceTimeSeconds * 1e3;
						this.U[H.uri.toString()] = setTimeout(() => {
							this.computeBugsForFileAroundLocation(x, H, q, V);
						}, G);
					}
					async computeBugsForFileAroundLocation(x, H, q, V) {
						const G = new d.$Zc(),
							K = (0, t.$9g)();
						try {
							this.j.setNonPersistentStorage(
								"lintState",
								"lastLintGenerationUuid",
								K,
							),
								this.j.setNonPersistentStorage(
									"lintState",
									"lastLintResult",
									c.LintResult.NONE,
								);
							const J = this.g.getModelDetails(),
								[W, X] = this.g.registerNewGeneration({
									metadata: void 0,
									generationUUID: K,
								}),
								Y = await this.J.getPartialCppRequest({
									editor: x,
									uri: H.uri,
									modelValue: H.getValue(),
									modelVersion: H.getVersionId(),
									position: V,
									source: c.CppSource.Unknown,
									shouldRelyOnFileSyncForFile: !1,
								}),
								ie = Y.currentFile?.contents;
							if (!ie) throw new Error("Contents are undefined");
							const ne = ie.split(q),
								ee = ne.findIndex((le) => le.trim().length > 0),
								_ =
									ne.length -
									ne.reverse().findIndex((le) => le.trim().length > 0) -
									1,
								te = await this.m.createModelReference(H.uri);
							G.add(te);
							const Q = new $.$59b(te, [
								new w.$iL(ee, 1, _, H.getLineMaxColumn(_)),
							]);
							G.add(Q);
							const Z = await this.g.aiClient();
							console.log("[Linter] calling findBugs");
							const se = await Z.findBugs(
									new S.$dJ({
										currentFile: Y.currentFile,
										modelDetails: {
											modelName:
												"accounts/anysphere/models/bugfind-codestral-22b-09-23",
										},
									}),
								),
								{ bug: re } = se;
							if (
								re !== void 0 &&
								re.confidence >=
									this.j.applicationUserPersistentStorage.lintSettings
										.watcherThreshold
							) {
								const le = Q.getUpdatedRange(
									new w.$iL(
										re.lineNumber,
										1,
										re.lineNumber,
										H.getLineMaxColumn(re.lineNumber),
									),
								);
								if (!le) {
									console.error(
										"Watcher: range is outside the original range. This shouldnt happen unless the server is broken",
									);
									return;
								}
								const oe = 3,
									ae = new w.$iL(
										Math.max(1, le.startLineNumber - oe),
										1,
										Math.min(H.getLineCount(), le.endLineNumber + oe),
										H.getLineMaxColumn(
											Math.min(H.getLineCount(), le.endLineNumber + oe),
										),
									);
								if (
									[
										...this.n
											.read({
												resource: H.uri,
												severities:
													a.MarkerSeverity.Error | a.MarkerSeverity.Warning,
												take: 1e3,
											})
											.map(
												(me) =>
													new w.$iL(
														me.startLineNumber,
														me.startColumn,
														me.endLineNumber,
														me.endColumn,
													),
											),
										...Object.values(this.j.nonPersistentStorage.lintState.bugs)
											.map((me) => me.bug.replaceRange)
											.flatMap((me) => me ?? [])
											.map(
												(me) =>
													new w.$iL(
														me.startLineNumber,
														me.startColumn,
														me.endLineNumberInclusive,
														me.endColumn,
													),
											),
									].filter(
										(me) =>
											(me.startLineNumber >= ae.startLineNumber &&
												me.startLineNumber <= ae.endLineNumber) ||
											(me.endLineNumber >= ae.startLineNumber &&
												me.endLineNumber <= ae.endLineNumber),
									).length > 0 &&
									this.j.applicationUserPersistentStorage.lintSettings
										.silenceIfOverlappingWithRegularLinter
								) {
									console.warn(
										"Skipping bug because there is already a marker in the range!!!",
										re,
									);
									return;
								}
								const ue = H.getValueInRange(ae),
									fe = new y.$aD({
										relativeWorkspacePath: this.r.asRelativePath(H.uri),
										uuid: (0, t.$9g)(),
										message: `(confidence: ${Math.floor(re.confidence * 100)}%) ${re.description} (click + ESC to dismiss)`,
										replaceRange: {
											startLineNumber: ae.startLineNumber,
											startColumn: ae.startColumn,
											endLineNumberInclusive: ae.endLineNumber,
											endColumn: ae.endColumn,
										},
										replaceText: ue,
										replaceInitialText: ue,
									});
								this.j.setNonPersistentStorage("lintState", "bugs", (me) => [
									...me.filter((ve) => ve.bug.uuid !== fe.uuid),
									{
										bug: fe,
										uri: this.r
											.getWorkspace()
											.folders[0].toResource(fe.relativeWorkspacePath),
									},
								]),
									(this.notificationHandlers[fe.uuid] = new P.$Ced(
										te,
										{ bug: fe, uri: H.uri },
										this.j,
										this.n,
										this.r,
									));
							}
						} catch {
							this.j.setNonPersistentStorage(
								"lintState",
								"lastLintResult",
								c.LintResult.ERROR,
							);
						} finally {
							G.dispose(),
								this.j.setNonPersistentStorage("inprogressAIGenerations", (W) =>
									W.filter((X) => X.generationUUID !== K),
								);
							const J = Math.floor(Date.now() / 1e3);
							this.j.setNonPersistentStorage(
								"lintState",
								"lastLintTimestamp",
								J,
							);
						}
					}
					async computeBugsForFileRanges(x, H, q) {
						const V = new d.$Zc(),
							G = (0, t.$9g)();
						try {
							this.j.setNonPersistentStorage(
								"lintState",
								"lastLintGenerationUuid",
								G,
							),
								this.j.setNonPersistentStorage(
									"lintState",
									"lastLintResult",
									c.LintResult.NONE,
								);
							const K = this.g.getModelDetails(),
								[J, W] = this.g.registerNewGeneration({
									metadata: void 0,
									generationUUID: G,
								}),
								X = [];
							for (const { uri: Q, ranges: Z, entireFileRange: se } of x)
								try {
									const re = await this.m.createModelReference(Q);
									V.add(re);
									const le =
											Z ??
											(se
												? [re.object.textEditorModel.getFullModelRange()]
												: void 0),
										oe = await this.getRanges(
											re.object.textEditorModel,
											H,
											le,
											q,
										);
									if (oe.length > 0) {
										const ae = new $.$59b(re, oe);
										V.add(ae),
											X.push({
												model: re.object.textEditorModel,
												ranges: oe.map((pe) => {
													const $e = new w.$iL(
															pe.startLineNumber,
															1,
															pe.endLineNumber,
															re.object.textEditorModel.getLineMaxColumn(
																pe.endLineNumber,
															),
														),
														ye = re.object.textEditorModel
															.getValueInRange($e)
															.split(re.object.textEditorModel.getEOL());
													let ue = [];
													if (pe.startLineNumber > 1) {
														const me = new w.$iL(
															Math.max(1, pe.startLineNumber - 10),
															1,
															pe.startLineNumber - 1,
															re.object.textEditorModel.getLineMaxColumn(
																pe.startLineNumber - 1,
															),
														);
														ue = re.object.textEditorModel
															.getValueInRange(me)
															.split(re.object.textEditorModel.getEOL());
													}
													let fe = [];
													if (
														pe.endLineNumber <
														re.object.textEditorModel.getLineCount()
													) {
														const me = new w.$iL(
															pe.endLineNumber + 1,
															1,
															Math.min(
																re.object.textEditorModel.getLineCount(),
																pe.endLineNumber + 10,
															),
															re.object.textEditorModel.getLineMaxColumn(
																Math.min(
																	re.object.textEditorModel.getLineCount(),
																	pe.endLineNumber + 10,
																),
															),
														);
														fe = re.object.textEditorModel
															.getValueInRange(me)
															.split(re.object.textEditorModel.getEOL());
													}
													return {
														range: pe,
														lines: ye,
														contextLinesAfter: fe,
														contextLinesBefore: ue,
													};
												}),
												listener: ae,
												relativeWorkspacePath: this.r.asRelativePath(Q),
											});
									}
								} catch (re) {
									console.warn("Watcher: error getting ranges -- ", re);
									continue;
								}
							if (X.length === 0) {
								this.j.setNonPersistentStorage(
									"lintState",
									"lastLintResult",
									c.LintResult.NO_CHANGES_FOUND,
								);
								return;
							}
							const Y = [];
							if (this.r.getWorkspace().folders.length > 0) {
								const Q = this.r.getWorkspace().folders[0].uri;
								let Z = await this.readFileContents(
									m.URI.joinPath(Q, ".cursor", "lint.txt"),
								);
								Z.trim() !== "" &&
									(Z += `
`);
								const re = (
									Z + this.j.applicationUserPersistentStorage.lintRules
								)
									.split(`
`)
									.filter((le) => le.trim() !== "");
								for (let le = 0; le < re.length; le++)
									Y.push(new y.$eD({ text: re[le].trim() }));
							}
							const ie = X.flatMap((Q) =>
									Q.ranges.map(
										(Z) =>
											new S.$CG({
												relativeWorkspacePath: Q.relativeWorkspacePath,
												startLineNumber: Z.range.startLineNumber,
												lines: Z.lines,
												contextLinesBefore: Z.contextLinesBefore,
												contextLinesAfter: Z.contextLinesAfter,
											}),
									),
								),
								ne = ie.map((Q) => new S.$DG()),
								ee = new S.$BG({
									chunksToAnalyze: ie,
									explicitContext: await this.g.getExplicitContext(),
									workspaceRootPath: this.c.getWorkspaceRootPath(),
									modelDetails: K,
									dismissedBugs:
										this.j.nonPersistentStorage.lintState.dismissedBugs,
									activeBugs: this.j.nonPersistentStorage.lintState.bugs.map(
										(Q) => Q.bug,
									),
									lintRules: Y,
									clients: ne,
									forceEnableDiscriminators:
										this.j.applicationUserPersistentStorage.lintSettings
											.forceEnableDiscriminators,
									forceDisableDiscriminators:
										this.j.applicationUserPersistentStorage.lintSettings
											.forceDisableDiscriminators,
									forceEnableGenerators:
										this.j.applicationUserPersistentStorage.lintSettings
											.forceEnableGenerators,
									forceDisableGenerators:
										this.j.applicationUserPersistentStorage.lintSettings
											.forceDisableGenerators,
									version: 2,
								}),
								te = (await this.g.aiClient()).streamAiLintBug(ee, {
									signal: W.signal,
									headers: (0, O.$m6b)(G),
								});
							for await (const Q of te)
								switch (Q.response.case) {
									case "bug": {
										const Z = Q.response.value;
										if (!Z.replaceRange) continue;
										const se = X.filter(
											($e) =>
												$e.relativeWorkspacePath === Z.relativeWorkspacePath,
										)[0];
										if (!se) {
											console.error(
												"Watcher: could not find listener for bug. This shouldnt happen unless the server is broken",
											);
											continue;
										}
										const re = se.listener.getUpdatedRange(
											new w.$iL(
												Z.replaceRange.startLineNumber,
												Z.replaceRange.startColumn,
												Z.replaceRange.endLineNumberInclusive,
												Z.replaceRange.endColumn,
											),
										);
										if (!re) {
											console.error(
												"Watcher: range is outside the original range. This shouldnt happen unless the server is broken",
											);
											continue;
										}
										const le = Z.reevaluateRange
											? se.listener.getUpdatedRange(
													new w.$iL(
														Z.reevaluateRange.startLineNumber,
														Z.reevaluateRange.startColumn,
														Z.reevaluateRange.endLineNumberInclusive,
														Z.reevaluateRange.endColumn,
													),
												)
											: null;
										if (re.isEmpty()) {
											console.error(
												"Watcher: received bug with empty replace range. This shouldnt happen unless the server is broken",
											);
											continue;
										}
										(Z.replaceRange = new I.$Fs({
											startLineNumber: re.startLineNumber,
											startColumn: re.startColumn,
											endLineNumberInclusive: re.endLineNumber,
											endColumn: re.endColumn,
										})),
											(Z.reevaluateRange = le
												? new I.$Fs({
														startLineNumber: le.startLineNumber,
														startColumn: le.startColumn,
														endLineNumberInclusive: le.endLineNumber,
														endColumn: le.endColumn,
													})
												: void 0);
										const oe = se.model.getValueInRange(re),
											ae = Z.replaceInitialText;
										if (
											this.n
												.read({
													resource: se.model.uri,
													severities:
														a.MarkerSeverity.Error | a.MarkerSeverity.Warning,
													take: 1e3,
												})
												.filter(
													($e) =>
														($e.startLineNumber >= re.startLineNumber &&
															$e.startLineNumber <= re.endLineNumber) ||
														($e.endLineNumber >= re.startLineNumber &&
															$e.endLineNumber <= re.endLineNumber),
												).length > 0
										) {
											console.warn(
												"Skipping bug because there is already a marker in the range!!!",
												Z,
											);
											continue;
										}
										oe === ae
											? this.j.setNonPersistentStorage(
													"lintState",
													"bugs",
													($e) => [
														...$e.filter((ye) => ye.bug.uuid !== Z.uuid),
														{
															bug: Z,
															uri: this.r
																.getWorkspace()
																.folders[0].toResource(Z.relativeWorkspacePath),
														},
													],
												)
											: console.warn(
													"Watcher: text changed while linting was running. This is fine and can happen but shouldnt happen too often",
													Z,
													{ newText: oe, oldVersionOfText: ae },
												);
										break;
									}
									case "backgroundTaskUuid":
										break;
								}
						} catch (K) {
							console.error("Watcher: error running lint -- ", K),
								this.j.setNonPersistentStorage(
									"lintState",
									"lastLintResult",
									c.LintResult.ERROR,
								);
						} finally {
							V.dispose(),
								this.j.setNonPersistentStorage("inprogressAIGenerations", (J) =>
									J.filter((W) => W.generationUUID !== G),
								);
							const K = Math.floor(Date.now() / 1e3);
							this.j.setNonPersistentStorage(
								"lintState",
								"lastLintTimestamp",
								K,
							);
						}
					}
					async getRanges(x, H, q, V) {
						const G = x.uri;
						if (
							((q === void 0 && !this.fileStates[G.toString()]) ||
								x.getValue().split(`
`).length > 1e4 ||
								(this.fileStates[G.toString()] !== void 0 &&
									this.fileStates[G.toString()].split(`
`).length > 1e4)) &&
							((this.fileStates[G.toString()] = x.getValue()), V !== !0)
						)
							return [];
						let K =
							q ??
							(await (0, $.$49b)(this.fileStates[G.toString()], x.getValue()));
						const J = this.f.getFocusedCodeEditor(),
							X =
								J?.getModel()?.uri.toString() === G.toString()
									? J?.getPosition()
									: void 0;
						X != null && H && (K = K.filter((ne) => !ne.containsPosition(X)));
						const Y = K.map((ne) => {
								const ee = Math.max(1, ne.startLineNumber - 15),
									_ = Math.min(x.getLineCount(), ne.endLineNumber + 15);
								return new w.$iL(ee, 1, _, 1);
							}),
							ie = [];
						Y.sort((ne, ee) => ne.startLineNumber - ee.startLineNumber);
						for (const ne of Y)
							if (
								ie.length === 0 ||
								ie[ie.length - 1].endLineNumber < ne.startLineNumber
							)
								ie.push(ne);
							else {
								const ee = ie.pop(),
									_ = new w.$iL(
										ee.startLineNumber,
										1,
										Math.max(ee.endLineNumber, ne.endLineNumber),
										1,
									);
								ie.push(_);
							}
						return (this.fileStates[G.toString()] = x.getValue()), ie;
					}
					async readFileContents(x) {
						try {
							return (await this.q.readFile(x)).value.toString();
						} catch (H) {
							return console.error("Watcher: error reading file -- ", H), "";
						}
					}
					dispose() {
						super.dispose();
						for (const x of Object.values(this.notificationHandlers))
							x.dispose();
					}
					reevaluateBug(x, H) {
						H ||
							this.j.setNonPersistentStorage("lintState", "bugs", (q) =>
								q.filter((V) => V.bug.uuid !== x),
							);
					}
					findClosestBug(x) {
						let H;
						if (x !== void 0)
							H = this.j.nonPersistentStorage.lintState.bugs.filter(
								(q) => q.bug.uuid === x,
							)[0];
						else {
							const q = this.f.getFocusedCodeEditor();
							if (!q || !q.hasModel()) return;
							const V = q?.getPosition();
							for (const G of this.j.nonPersistentStorage.lintState.bugs) {
								if (!G.bug.replaceRange) continue;
								const K =
										V.lineNumber > G.bug.replaceRange.startLineNumber ||
										(V.lineNumber == G.bug.replaceRange.startLineNumber &&
											V.column >= G.bug.replaceRange.startColumn),
									J =
										V.lineNumber < G.bug.replaceRange.endLineNumberInclusive ||
										(V.lineNumber ==
											G.bug.replaceRange.endLineNumberInclusive &&
											V.column <= G.bug.replaceRange.endColumn);
								if (K && J) {
									H = G;
									break;
								}
							}
						}
						return H;
					}
					applyLint(x) {
						const H = this.findClosestBug(x);
						if (!H || !H.bug.replaceRange) return;
						const q = this.notificationHandlers[H.bug.uuid];
						if (!q) return;
						const V = [
								{
									range: new w.$iL(
										H.bug.replaceRange.startLineNumber,
										H.bug.replaceRange.startColumn,
										H.bug.replaceRange.endLineNumberInclusive,
										H.bug.replaceRange.endColumn,
									),
									text: H.bug.replaceText,
								},
							],
							G = q.modelRef.object.textEditorModel.applyEdits(V, !0),
							K = q.modelRef.object.textEditorModel;
						this.j.setNonPersistentStorage("lintState", "bugs", (J) =>
							J.filter((W) => W.bug.uuid !== H.bug.uuid),
						),
							this.F.pushElement({
								type: D.UndoRedoElementType.Resource,
								resource: H.uri,
								label: "Undo apply lint fix",
								code: "aiWatchService.undo.applyLint",
								undo: () => {
									K.applyEdits(G, !1),
										this.j.setNonPersistentStorage("lintState", "bugs", (J) => [
											...J,
											H,
										]);
								},
								redo: () => {
									K.applyEdits(V, !1),
										this.j.setNonPersistentStorage("lintState", "bugs", (J) =>
											J.filter((W) => W.bug.uuid !== H.bug.uuid),
										);
								},
								rebase: () => {},
							});
					}
					clarifyLint(x) {
						const H = this.findClosestBug(x);
						if (!H) return;
						const q = this.n
							.read({ resource: H.uri })
							.filter((V) => V.aiLintBugData?.bugUuid === H.bug.uuid)[0];
						q &&
							this.C.executeCommand("aichat.fixspecificerrormessage", {
								marker: q,
							});
					}
					dismissLint(x, H = !1) {
						const q = this.findClosestBug(x);
						if (!q) return;
						const V = q;
						this.j.setNonPersistentStorage("lintState", "bugs", (K) =>
							K.filter((J) => J.bug.uuid !== V.bug.uuid),
						),
							this.j.setNonPersistentStorage(
								"lintState",
								"dismissedBugs",
								(K) => [...K, V.bug],
							);
						const G = {
							type: D.UndoRedoElementType.Resource,
							resource: V.uri,
							label: "Undo dismiss lint fix",
							code: "aiWatchService.undo.dismissLint",
							undo: () => {
								this.j.setNonPersistentStorage(
									"lintState",
									"dismissedBugs",
									(K) => K.filter((J) => J.uuid !== V.bug.uuid),
								),
									this.j.setNonPersistentStorage("lintState", "bugs", (K) => [
										...K,
										V,
									]);
							},
							redo: () => {
								this.j.setNonPersistentStorage("lintState", "bugs", (K) =>
									K.filter((J) => J.bug.uuid !== V.bug.uuid),
								),
									this.j.setNonPersistentStorage(
										"lintState",
										"dismissedBugs",
										(K) => [...K, V.bug],
									);
							},
							rebase: () => {},
						};
						if (H) return G;
						this.F.pushElement(G);
					}
					async dismissLintAndBanSimilar(x) {
						const H = this.findClosestBug(x);
						if (!H) return;
						const q = this.dismissLint(x, !0),
							V = { hasBeenUndone: !1, undo: () => {} };
						this.F.pushElement({
							type: D.UndoRedoElementType.Resource,
							resource: H.uri,
							label: "Undo ban similar lints",
							code: "aiWatchService.undo.banSimilarLints",
							undo: () => {
								q?.undo(),
									V.hasBeenUndone || (V.undo(), (V.hasBeenUndone = !0));
							},
							redo: () => {
								q?.redo();
							},
							rebase: () => {},
						});
						const G = H.bug.message,
							K = await (0, C.$Pfc)(await this.g.streamNewLintRule(G));
						V.hasBeenUndone ||
							(this.j.setApplicationUserPersistentStorage(
								"lintRules",
								(J) =>
									J +
									`

` +
									K,
							),
							(V.undo = () => {
								this.j.setApplicationUserPersistentStorage("lintRules", (J) =>
									J.replace(
										`

` + K,
										"",
									),
								);
							}));
					}
				};
				(e.$Eed = U),
					(e.$Eed = U =
						Ne(
							[
								j(0, N.$36b),
								j(1, i.$dtb),
								j(2, C.$Nfc),
								j(3, g.$S6b),
								j(4, h.$0zb),
								j(5, r.$MO),
								j(6, a.$aM),
								j(7, p.$ll),
								j(8, o.$Vi),
								j(9, f.$J6b),
								j(10, b.$y7c),
								j(11, l.$IY),
								j(12, v.$km),
								j(13, T.$EY),
								j(14, k.$k3),
								j(15, L.$ek),
								j(16, D.$GN),
								j(17, M.$9Db),
								j(18, A.$gj),
								j(19, R.$Bk),
								j(20, n.$jfc),
								j(21, B.$kZ),
							],
							U,
						));
				function z(F, x, H) {
					return new Promise((q, V) => {
						setTimeout(() => {
							q(F), H.abort();
						}, x);
					});
				}
				(0, u.$lK)(n.$gfc, U, u.InstantiationType.Delayed);
			},
		),
		define(
			de[1346],
			he([
				1, 0, 3, 9, 20, 5, 45, 18, 42, 118, 670, 205, 1285, 65, 85, 191, 341,
				1045, 22,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Icc = e.$Hcc = void 0),
					(e.$Hcc = (0, E.$Mi)("aiWebCmdKService"));
				let b = class extends t.$1c {
					constructor(l, y, $, v, S, I, T, P) {
						super(),
							(this.a = l),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.m = P);
					}
					async submit() {
						const l = this.a.nonPersistentStorage.webCmdKState.promptBar;
						if (l === void 0) {
							console.error("no prompt bar");
							return;
						}
						const y = await this.c.createModelReference(l.sourceURI),
							[$, v] = this.f.registerNewGeneration({ metadata: void 0 });
						this.a.setNonPersistentStorage(
							"webCmdKState",
							"promptBar",
							"lastGenerationUUID",
							$,
						);
						try {
							const S = y.object.textEditorModel;
							let I = l.sourceLineNumber;
							const T = S.getLineIndentColumn(I);
							let P = I + 1;
							for (; P < S.getLineCount(); ) {
								if (S.getLineContent(P).trim() === "") {
									P++;
									continue;
								}
								if (S.getLineIndentColumn(P) <= T) break;
								P++;
							}
							const k = S.getValue(),
								L = this.g.create(
									S,
									this.h.getActiveCodeEditor(),
									{
										startLineNumber: I,
										endLineNumber: P,
										startColumn: 1,
										endColumn: S.getLineMaxColumn(P),
									},
									{},
								),
								D = await this.f.aiClient(),
								M = this.f.getModelDetails(),
								N = D.streamWebCmdKV1(
									{
										modelDetails: M,
										fileContents: k,
										relativeWorkspacePath: l.sourceURI.path,
										selectionRange: {
											startLineNumber: I,
											endLineNumberInclusive: P,
										},
										images:
											l.images && l.images.length > 0
												? [
														await (0, o.$F7b)(
															l.images[0],
															() => {},
															this.m,
															512,
														),
													]
												: [],
										prompt: l.delegate.getText(),
									},
									{ signal: v.signal, headers: (0, g.$m6b)($) },
								),
								A = p.$q0.typeName + "/" + p.$q0.methods.streamWebCmdKV1.name,
								R = this.f.streamResponse({
									modelDetails: M,
									streamer: (0, r.$Mfc)(N),
									generationUUID: $,
									streamerURL: A,
									rethrowCancellation: !0,
									rerun: void 0,
									source: "other",
								});
							L.show();
							for await (const O of R)
								O.cmdKResponse?.response.case === "editStream" &&
									L.append(O.cmdKResponse.response.value.text);
							await L.finish(),
								await L.accept(),
								await this.j.save(l.sourceURI);
						} finally {
							y.dispose(),
								this.a.setNonPersistentStorage("inprogressAIGenerations", (S) =>
									S.filter((I) => I.generationUUID !== $),
								);
						}
					}
					close() {
						this.b.activeEditorPane?.focus(),
							this.a.setNonPersistentStorage(
								"webCmdKState",
								"promptBar",
								void 0,
							);
					}
					async showWebCmdKInputBox(l) {
						const y = {
							sourceLineNumber: l.source.lineNumber,
							sourceURI: i.URI.parse(l.source.fileName),
							delegate: new u.$KN(),
							inputBoxDelegate: new a.$Zzb(),
							initText: "",
							images: [],
							originalPositionX: 0,
							originalPositionY: 0,
						};
						this.a.setNonPersistentStorage("webCmdKState", "promptBar", y);
					}
				};
				(e.$Icc = b),
					(e.$Icc = b =
						Ne(
							[
								j(0, C.$0zb),
								j(1, d.$IY),
								j(2, m.$MO),
								j(3, r.$Nfc),
								j(4, h.$Fcc),
								j(5, c.$dtb),
								j(6, n.$kZ),
								j(7, f.$ll),
							],
							b,
						)),
					(0, w.$lK)(e.$Hcc, b, w.InstantiationType.Delayed);
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
		de[3944],
		he([
			1, 0, 1478, 76, 3, 45, 134, 32, 88, 788, 2995, 1346, 280, 1010, 3226,
			1281, 619, 226, 627, 232, 101, 1871, 626, 34, 1280, 137, 332, 3233, 33,
			47, 1497, 340, 58, 83, 75, 13, 216, 1211,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$mqc = void 0);
			const U = (x) => {
				const H = x.at(0);
				return H && H === H?.toUpperCase() ? H.toLowerCase() + x.slice(1) : x;
			};
			function z(x) {
				const H = new Headers();
				if (x) for (const q of x.headers) H.append(q.key, q.value);
				return H;
			}
			let F = class extends w.$1c {
				constructor(
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
				) {
					super(),
						(this.c = q),
						(this.f = V),
						(this.g = G),
						(this.h = K),
						(this.j = J),
						(this.n = W),
						(this.r = X),
						(this.s = Y),
						(this.t = ie),
						(this.u = ne),
						(this.w = ee),
						(this.y = _),
						(this.z = te),
						(this.C = Q),
						(this.F = Z),
						(this.G = se),
						(this.H = re),
						(this.J = le),
						(this.L = oe),
						(this.M = ae),
						(this.Q = new Map());
					const pe = H.getProxy(m.$mbb.ExtHostCursor);
					this.a = pe;
					const $e = this.D(this.c.createScoped(this));
					$e.createImplicitEffect(() => {
						this.a.$changeCursorCreds(
							this.c.applicationUserPersistentStorage.cursorCreds,
						),
							this.a.$changeShouldIndex(
								this.c.applicationUserPersistentStorage.indexRepository,
							);
					}),
						$e.onChangeEffect({
							deps: [
								() =>
									this.c.workspaceUserPersistentStorage.indexingData
										.preferredEmbeddingModel,
							],
							onChange: ({ deps: [ye] }) => {
								this.a.$changePreferredEmbeddingModel(ye);
							},
						}),
						this.D(
							this.f.onDidPotentiallyChangePrivacyMode((ye) => {
								this.a.$changePrivacyMode(ye);
							}),
						),
						$e.onChangeEffect({
							onChange: () => {
								this.a.$changeFileSyncClientEnabled(
									this.c.applicationUserPersistentStorage
										.isFileSyncClientEnabled,
								),
									this.a.$changeCppEnabled(
										this.c.applicationUserPersistentStorage.cppEnabled,
									),
									this.a.$changeCppConfig(
										this.c.applicationUserPersistentStorage.cppConfig,
									),
									this.a.$changeMembershipType(
										this.c.applicationUserPersistentStorage.membershipType,
									);
							},
							deps: [
								() =>
									this.c.applicationUserPersistentStorage
										.isFileSyncClientEnabled,
								() => this.c.applicationUserPersistentStorage.cppEnabled,
								() => this.c.applicationUserPersistentStorage.cppConfig,
								() => this.c.applicationUserPersistentStorage.membershipType,
							],
						}),
						this.f.refreshMembershipType(),
						(this.authenticationUpdateIntervalId = A.$Bfb.setInterval(
							this.f.refreshMembershipType,
							60 * 1e3,
						)),
						(this.privacyModeForwarderIntervalId = A.$Bfb.setInterval(() => {
							(0, R.untrack)(() => {
								this.a.$changePrivacyMode(this.f.reactivePrivacyMode());
							});
						}, 30 * 1e3)),
						(this.b = async (ye) => {
							this.a.$changeCursorAuthToken(await this.f.getAccessToken());
						}),
						this.f.addLoginChangedListener(this.b),
						this.g.onDidRequestRepoIndex(() => {
							this.a.$triggerCursorIndex();
						}),
						this.g.onDidRequestRepoInterrupt((ye) => {
							this.a.$triggerCursorInterrupt(ye);
						}),
						this.D(
							this.J.onDidChangeCppSessionId((ye) => {
								this.a.$updateCppSessionId(ye);
							}),
						),
						this.a.$updateCppSessionId(this.J.getCurrentSessionId()),
						this.D(
							this.J.onDidChangeCppTelemEnabled((ye) => {
								this.a.$updateCppTelemEnabled(ye);
							}),
						),
						this.a.$updateCppTelemEnabled(this.J.canWeTrackTelem()),
						this.D(this.M.onProcessConfigUpdate(this.a.$processConfigUpdate));
				}
				$processAiReaderMessage(H) {
					return this.C.processAiReaderMessage(H);
				}
				dispose() {
					super.dispose(),
						this.f.removeLoginChangedListener(this.b),
						A.$Bfb.clearInterval(this.authenticationUpdateIntervalId),
						A.$Bfb.clearInterval(this.privacyModeForwarderIntervalId);
				}
				async $onDidChangeIndexingStatus() {
					this.g.fireOnDidChangeIndexingStatus();
				}
				async $unregisterOnDidChangeIndexingStatus() {
					this.g.unregisterOnDidChangeIndexingStatus();
				}
				async $triggerRefreshCursorAuthToken() {
					await this.f.refreshAuthentication();
				}
				async $registerExtHostEventLogger() {
					this.N = this.L.registerExtHostEventLogger({
						recordExtHostEvent: (H) => this.a.$recordExtHostEvent(H),
						forceFlush: () => this.a.$forceFlushExtHostEventLogger(),
					});
				}
				async $unregisterExtHostEventLogger() {
					this.N && (this.N.dispose(), (this.N = void 0));
				}
				async $registerIndexProvider() {
					const H = () => this.a.$getIndexProviderGetStatus(),
						q = () => this.a.$getIndexProviderGetIndexingProgress(),
						V = () => this.a.$getIndexProviderGetCurrentJobs(),
						G = () => this.a.$getIndexProviderGetHighLevelFolderDescription(),
						K = () => this.a.$getIndexProviderGetRepoInfo(),
						J = (X) => this.a.$getIndexProviderDecryptPaths(X),
						W = (X) => this.a.$getIndexProviderCompileGlobFilter(X);
					this.g.registerIndexingProvider({
						getStatus: H,
						getIndexingProgress: q,
						getCurrentJobs: V,
						getHighLevelFolderDescription: G,
						getRepoInfo: K,
						decryptPaths: J,
						compileGlobFilter: W,
					});
				}
				async $unregisterIndexProvider() {
					this.g.unregisterIndexingProvider();
				}
				async $registerIsNewIndexProvider() {
					this.g.registerIsNewIndexProvider(() =>
						this.a.$getIsNewIndexProvider(),
					);
				}
				async $unregisterIsNewIndexProvider() {
					this.g.unregisterIsNewIndexProvider();
				}
				async $registerMetricsProvider() {
					const H = (K) => {
							this.a.$getMetricsProviderIncrement(K);
						},
						q = (K) => {
							this.a.$getMetricsProviderDecrement(K);
						},
						V = (K) => {
							this.a.$getMetricsProviderDistribution(K);
						},
						G = (K) => {
							this.a.$getMetricsProviderGauge(K);
						};
					this.r.registerMetricsProvider({
						increment: H,
						decrement: q,
						distribution: V,
						gauge: G,
					});
				}
				async $callShadowServer(H, q) {
					try {
						const V = this.G.getServer(),
							K = V[H].bind(V),
							W = t.$Bx.methods[H].I.fromBinary(q.buffer),
							X = await K(W);
						return i.$Te.wrap(X.toBinary());
					} catch (V) {
						throw (
							(console.error("Error in $callShadowServer", V, V.stack),
							this.h.error("Error in $callShadowServer", V, V.stack),
							V)
						);
					}
				}
				async $registerShadowServerProvider() {
					const H = this.F.getServerSocketPath();
					H && (await this.a.$getShadowServerProviderStart(H));
				}
				async $unregisterShadowServerProvider() {}
				async $registerShadowClientProvider() {
					this.P = this.F.provideClient(
						async (H) => (
							await this.a.$createShadowClient(H),
							new Proxy(
								{},
								{
									get: (q, V, G) => {
										if (typeof V == "string") {
											const K = t.$Bx.methods[V]?.I;
											if (K === void 0) return;
											const J = t.$Bx.methods[V]?.O;
											if (J === void 0) return;
											const W = V;
											return async (X) => {
												const Y = new K(X),
													ie = await this.a.$callShadowServer(
														W,
														i.$Te.wrap(Y.toBinary()),
													);
												return J.fromBinary(ie.buffer);
											};
										}
									},
								},
							)
						),
					);
				}
				async $unregisterShadowClientProvider() {
					this.P && (this.P.dispose(), (this.P = void 0));
				}
				async $unregisterMetricsProvider() {
					this.r.unregisterMetricsProvider();
				}
				async $registerEditHistoryProvider() {
					const H = (G) => {
							this.a.$getEditHistoryProviderInitModel(G);
						},
						q = (G) =>
							this.a.$getEditHistoryProviderHasProcessedTextModelUptilVersion(
								G,
							),
						V = (G) =>
							this.a.$getEditHistoryProviderCompileGlobalDiffTrajectories(G);
					this.u.registerEditHistoryProvider({
						initModel: H,
						hasProcessedTextModelUptilVersion: q,
						compileGlobalDiffTrajectories: V,
					});
				}
				async $unregisterEditHistoryProvider() {}
				async $registerLspSubgraphProvider() {
					this.y.registerProvider({
						activate: this.a.$callLspSubgraphProviderActivate,
						deactivate: this.a.$callLspSubgraphProviderDeactivate,
						debouncedForceAbort:
							this.a.$callLspSubgraphProviderDebouncedForceAbort,
						retrieve: this.a.$callLspSubgraphProviderRetrieve,
					});
				}
				async $unregisterLspSubgraphProvider() {
					this.y.unregisterProvider();
				}
				async $streamAiConnect(H, q, V, G, K, J, W) {
					const X = { stack: [], error: void 0, hasError: !1 };
					try {
						if (!(H.typeName in T.$ibb))
							throw new Error(
								"Service not recognized in the PROTOBUF_SERVICE_NAME_MAP",
							);
						const Y = ms(X, (0, O.span)(`${H.typeName}.${q.name}`), !1),
							ie = new Headers(K);
						ie.set(O.$HOb, (0, O.$NOb)(Y));
						const ne = (0, k.$9g)(),
							ee = new P.$Ce(),
							_ = () => {
								ee.cancel(), this.a.$cancelAiConnectTransportStreamChunk(ne);
							};
						V?.addEventListener("abort", _);
						const te = G ?? M.$FV,
							Q = new L.$Kpb(te);
						this.Q.set(ne, Q),
							(async () => {
								for await (const pe of J) {
									const $e = new q.I(pe),
										ye = i.$Te.wrap($e.toBinary());
									if (ee.token.isCancellationRequested) {
										console.info(
											"stopped pushing. Cancelled in $streamAiConnect (aiRequestServiceTransport)",
										);
										break;
									}
									this.a
										.$pushAiConnectTransportStreamChunk(ye, ne, G)
										.catch((ue) => {
											console.error(
												"Error in $streamAiConnect (aiRequestServiceTransport)",
												ue,
												ue.stack,
											),
												this.h.error(
													"Error in $streamAiConnect (aiRequestServiceTransport)",
													ue,
													ue.stack,
												);
										});
								}
								this.a.$endAiConnectTransportStreamChunk(ne);
							})();
						const Z = await this.a.$callAiConnectTransportProviderStream(
								ne,
								H.typeName,
								U(q.name),
								G,
								Object.fromEntries(ie),
								W,
								ee.token,
							),
							se = this.Q,
							re = async function* () {
								try {
									for await (const pe of Q) {
										if (ee.token.isCancellationRequested) continue;
										yield q.O.fromBinary(pe.buffer);
									}
								} catch (pe) {
									throw pe;
								} finally {
									se.delete(ne), V?.removeEventListener("abort", _);
								}
							},
							le = N.$ot.fromBinary(Z.buffer);
						if (le.isError) {
							const pe = JSON.parse(le.connectError);
							if (this.R(pe)) {
								const $e = new D.ConnectError(
									pe.rawMessage,
									pe.code,
									pe.metadata,
									pe.details,
									pe.cause,
								);
								throw (this.S($e), $e);
							}
							throw new Error("Error in the connect call." + le.connectError);
						}
						const oe = z(le.header),
							ae = z(le.trailer);
						return {
							stream: !0,
							service: H,
							method: q,
							message: re(),
							header: oe,
							trailer: ae,
						};
					} catch (Y) {
						(X.error = Y), (X.hasError = !0);
					} finally {
						ps(X);
					}
				}
				async $pushAiConnectTransportStreamChunk(H, q) {
					const V = this.Q.get(q);
					return V ? (V.push(H), { success: !0 }) : { success: !1 };
				}
				async $endAiConnectTransportStreamChunk(H) {
					const q = this.Q.get(H);
					q && q.end();
				}
				R(H) {
					return (
						"name" in H &&
						"rawMessage" in H &&
						"code" in H &&
						H.name === "ConnectError"
					);
				}
				S(H) {
					H.details = H.details.map((q) => {
						const V = "value" in q && q.value instanceof Uint8Array;
						if ("value" in q && V === !1) {
							const G = Object.values(q.value);
							q.value = Uint8Array.from(G);
						}
						return q;
					});
				}
				async $endAiConnectTransportReportError(H, q) {
					const V = this.Q.get(H);
					let G;
					this.R(q)
						? ((G = new D.ConnectError(
								q.rawMessage,
								q.code,
								q.metadata,
								q.details,
							)),
							this.S(G))
						: (G = q),
						V && G !== void 0 && V.error(G);
				}
				async $registerAiConnectTransportProvider() {
					const H = this.a,
						q = async (V, G, K, J, W, X) => {
							const Y = { stack: [], error: void 0, hasError: !1 };
							try {
								const ie = new G.I(X),
									ne = i.$Te.wrap(ie.toBinary());
								if (!(V.typeName in T.$ibb))
									throw (
										(console.log(
											"MAJOR ERROR: If you are on dev and your service isnt working. SERVICE DOESNOT EXIST",
											V.typeName,
										),
										new Error(
											"Connect transport provider not initialized. BIG PROBLEM. " +
												V.typeName,
										))
									);
								const ee = ms(Y, (0, O.span)(`${V.typeName}.${G.name}`), !1),
									_ = new Headers(W);
								_.set(O.$HOb, (0, O.$NOb)(ee));
								const te = this.D(new P.$Ce()),
									Q = () => {
										te.cancel();
									};
								K?.addEventListener("abort", Q);
								try {
									const Z = V.typeName,
										se = U(G.name),
										re = await H.$callAiConnectTransportProviderUnary(
											Z,
											se,
											ne,
											J,
											Object.fromEntries(_),
											te.token,
										),
										le = N.$ot.fromBinary(re.buffer);
									if (le.isError) {
										const ye = JSON.parse(le.connectError);
										if (this.R(ye)) {
											const ue = new D.ConnectError(
												ye.rawMessage,
												ye.code,
												ye.metadata,
												ye.details,
												ye.cause,
											);
											throw (this.S(ue), ue);
										}
										throw new Error(
											"Error in the connect call." + le.connectError,
										);
									}
									const oe = le.message,
										ae = le.header,
										pe = le.trailer,
										$e = G.O.fromBinary(oe);
									return {
										service: V,
										method: G,
										message: $e,
										stream: !1,
										header: z(ae),
										trailer: z(pe),
									};
								} finally {
									K?.removeEventListener("abort", Q);
								}
							} catch (ie) {
								(Y.error = ie), (Y.hasError = !0);
							} finally {
								ps(Y);
							}
						};
					this.H.registerConnectTransportProvider({
						unary: q,
						stream: this.$streamAiConnect.bind(this),
					});
				}
				async $registerRequesterProvider() {
					const H = (G, K) => this.a.$request(G, K),
						q = (G) => this.a.$flush(G),
						V = (G) => this.a.$cancel(G);
					this.t.registerRequesterProvider({ request: H, flush: q, cancel: V });
				}
				async $unregisterRequesterProvider() {}
				async $registerDiffingProvider() {
					const H = (V, G) =>
							this.a.$getDiffingProviderWordDiffForPartialCode(V, G),
						q = (V, G) => this.a.$getDiffingProviderWordDiff(V, G);
					this.s.registerDiffingProvider({
						wordDiffForPartialCode: H,
						wordDiff: q,
					});
				}
				async $unregisterDiffingProvider() {
					this.s.unregisterDiffingProvider();
				}
				async $registerEverythingProvider() {
					const H = (q, V) => this.a.$getEverythingProviderRunCommand(q, V);
					this.w.registerEverythingProvider({ runCommand: H });
				}
				async $unregisterEverythingProvider() {
					this.w.unregisterEverythingProvider();
				}
				async $registerEverythingProviderAllLocal() {
					const H = (q, V) =>
						this.a.$getEverythingAllLocalProviderRunCommand(q, V);
					this.w.registerEverythingProviderAllLocal({ runCommand: H });
				}
				async $unregisterEverythingProviderAllLocal() {
					this.w.unregisterEverythingProviderAllLocal();
				}
				async $showWebCmdKInputBox(H) {
					return this.z.showWebCmdKInputBox(H);
				}
				async $updateUploadProgress(H, q, V = !1) {
					V
						? this.c.setNonPersistentStorage("repoProgressBars", (G) =>
								G.filter((K) => K.repoId !== C.LocalRepoId.id),
							)
						: this.c.setNonPersistentStorage("repoProgressBars", (G) =>
								G.find((J) => J.repoId === C.LocalRepoId.id)
									? G.map((J) =>
											J.repoId === C.LocalRepoId.id
												? {
														repoId: C.LocalRepoId.id,
														progress: H,
														uploadType: q,
													}
												: J,
										)
									: [
											...G,
											{ repoId: C.LocalRepoId.id, progress: H, uploadType: q },
										],
							);
				}
				async $getCursorAuthToken() {
					return await this.f.getAccessToken();
				}
				async $getSemanticSearchResultsFromServer(H) {
					return await this.g.parallelSearch(
						H.query,
						H.topK,
						H.finalK,
						H.options,
					);
				}
				async $getCursorCreds() {
					return Promise.resolve(
						this.c.applicationUserPersistentStorage.cursorCreds,
					);
				}
				async $getPrivacyMode() {
					return Promise.resolve(this.f.reactivePrivacyMode());
				}
				async $isFileSyncClientEnabled() {
					return this.c.applicationUserPersistentStorage
						.isFileSyncClientEnabled;
				}
				async $cppEnabled() {
					return this.c.applicationUserPersistentStorage.cppEnabled;
				}
				async $cppConfig() {
					return this.c.applicationUserPersistentStorage.cppConfig;
				}
				async $membershipType() {
					return this.c.applicationUserPersistentStorage.membershipType;
				}
				async $preferredEmbeddingModel() {
					return (
						this.c.workspaceUserPersistentStorage.indexingData
							.preferredEmbeddingModel === N.EmbeddingModel.UNSPECIFIED &&
							this.c.applicationUserPersistentStorage
								.preferredEmbeddingModel !== N.EmbeddingModel.UNSPECIFIED &&
							(this.c.setWorkspaceUserPersistentStorage(
								"indexingData",
								"preferredEmbeddingModel",
								this.c.applicationUserPersistentStorage.preferredEmbeddingModel,
							),
							this.c.setApplicationUserPersistentStorage(
								"preferredEmbeddingModel",
								N.EmbeddingModel.UNSPECIFIED,
							)),
						this.c.workspaceUserPersistentStorage.indexingData
							.preferredEmbeddingModel
					);
				}
				async $getAllFilenames() {
					return (await this.j.getAllFiles()).map((q) => q.absolute.fsPath);
				}
				$publicLogCapture(H) {
					this.n.publicLogCapture(H);
				}
				async $sendEnvelope(H, q) {
					await this.M.sendEnvelope(H, q);
				}
				async $sendScopeUpdate(H, q) {
					await this.M.sendScopeUpdate(H, q);
				}
			};
			(e.$mqc = F),
				(e.$mqc = F =
					Ne(
						[
							(0, s.$tmc)(m.$lbb.MainThreadCursor),
							j(1, E.$0zb),
							j(2, b.$x6b),
							j(3, o.$J6b),
							j(4, $.$ik),
							j(5, f.$O6b),
							j(6, d.$km),
							j(7, p.$wcc),
							j(8, c.$ycc),
							j(9, u.$hqc),
							j(10, n.$jqc),
							j(11, h.$3Db),
							j(12, g.$b0b),
							j(13, a.$Hcc),
							j(14, r.$Jcc),
							j(15, y.$k7b),
							j(16, l.$lqc),
							j(17, v.$o6b),
							j(18, S.$hfc),
							j(19, I.$V7b),
							j(20, B.$jbb),
						],
						F,
					));
		},
	),
		