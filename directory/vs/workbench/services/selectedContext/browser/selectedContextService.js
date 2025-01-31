import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import './selectedContextData.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../../../editor/browser/services/genericUndoRedoElement.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../contrib/aichat/browser/codeSelections.js';
import '../../../../editor/common/services/resolverService.js';
import '../../ai/common/dataScrubbingService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/uri.js';
import '../../workspaces/browser/sourceFilesService.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/types.js';
import '../../ai/browser/gitContextService.js';
import '../../../contrib/terminal/browser/terminal.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../utils/browser/generateImageProtos.js';
import '../../../contrib/notepad/browser/notepad.js';
import '../../utils/common/ignore.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../ai/browser/aiFileInfoService.js';
import '../../search/common/search.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../ai/browser/repositoryService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../search/common/queryBuilder.js';
define(
		de[3920],
		he([
			1, 0, 3, 298, 155, 606, 126, 354, 42, 356, 25, 9, 632, 22, 28, 359, 107,
			83, 1045, 467, 1325, 90, 148, 837, 186, 45, 226, 5, 361,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*lifecycle*/,
			i /*selectedContextData*/,
			w /*undoRedo*/,
			E /*genericUndoRedoElement*/,
			C /*chat_pb*/,
			d /*codeSelections*/,
			m /*resolverService*/,
			r /*dataScrubbingService*/,
			u /*workspace*/,
			a /*uri*/,
			h /*sourceFilesService*/,
			c /*files*/,
			n /*types*/,
			g /*gitContextService*/,
			p /*terminal*/,
			o /*utils_pb*/,
			f /*generateImageProtos*/,
			b /*notepad*/,
			s /*ignore*/,
			l /*markers*/,
			y /*aiserver_pb*/,
			$ /*aiFileInfoService*/,
			v /*search*/,
			S /*reactiveStorageService*/,
			I /*repositoryService*/,
			T /*instantiation*/,
			P /*queryBuilder*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$P9b = void 0),
				(s = xi(s));
			let k = class extends t.$1c {
				constructor(D, M, N, A, R, O, B, U, z, F, x, H, q, V) {
					super(),
						(this.j = D),
						(this.q = M),
						(this.r = N),
						(this.t = A),
						(this.u = R),
						(this.w = O),
						(this.y = B),
						(this.z = U),
						(this.C = z),
						(this.F = F),
						(this.G = x),
						(this.H = H),
						(this.I = q),
						(this.J = V),
						(this.a = new Set([
							"package-lock.json",
							"yarn.lock",
							"pnpm-lock.yaml",
							".git",
							"node_modules",
							"__pycache__",
						])),
						(this.b = {}),
						(this.f = []),
						(this.g = !1),
						(this.h = this.J.createInstance(P.$M8)),
						this.S(),
						this.I.setIsUriCursorIgnored(this.shouldIgnoreUri.bind(this));
				}
				getMentions(D, M, N) {
					if ((0, i.$Ygc)(M)) {
						const A = (0, i.$Zgc)(M, N);
						return (D.mentions[M]?.[A] || []).map((R) => R.uuid);
					} else return (D.mentions[M] || []).map((A) => A.uuid);
				}
				async getImagesFromImageSelection({
					setContext: D,
					getContext: M,
					disableImageRemoval: N,
				}) {
					const A = M().selectedImages ?? [];
					return (
						await Promise.all(
							A.map(async (O) => {
								const B = () => {
									if (N) return;
									const U = M().selectedImages ?? [];
									this.removeContext({
										contextType: "selectedImages",
										setContext: D,
										getContext: M,
										index: U.findIndex((z) =>
											(0, i.$1gc)("selectedImages", z, O),
										),
									});
								};
								return this.resizeImage(O, B, 2048);
							}),
						)
					).filter(n.$tg);
				}
				async getNotepadsContext(D) {
					try {
						const M = D.notepads?.map((A) => A.notepadId) ?? [];
						return (
							await Promise.all(
								M.map(async (A) => {
									const R = this.z.getNotepadData(A);
									if (!R) return null;
									const O = (0, i.$2gc)();
									for (const q of Object.keys(R.context))
										(0, i.$Ygc)(q)
											? (O[q] = this.L(R.context[q], D[q], q))
											: D[q] === void 0 && (O[q] = R.context[q]);
									const [B, U, z, F] = await Promise.all([
											this.getCodeChunks(O),
											this.getCommitDetailsFromPartialCommits(
												O.selectedCommits ?? [],
											),
											this.getPullRequestDetailsFromPartialPullRequests(
												O.selectedPullRequests ?? [],
											),
											this.getDiffDetailsFromGitDiff({
												gitDiff: O.gitDiff,
												gitDiffFromBranchToMain: O.gitDiffFromBranchToMain,
											}),
										]),
										H = (O.folderSelections ?? []).map((q) => q.relativePath);
									return {
										name: R.name,
										text: R.text,
										attachedCodeChunks: B,
										attachedFolders: H,
										commits: U,
										pullRequests: z,
										gitDiffs: F,
										images: [],
									};
								}),
							)
						).filter((A) => (0, n.$tg)(A));
					} catch (M) {
						return console.error("Error in getNotepadsContext:", M), [];
					}
				}
				L(D, M, N) {
					return M ? D.filter((A) => !M.some((R) => (0, i.$1gc)(N, A, R))) : D;
				}
				async resizeImage(D, M, N = 2048) {
					return (0, f.$F7b)(D, M, this.u, N);
				}
				async getCodeChunksFromTerminalSelections(D) {
					try {
						return (
							await Promise.all(
								D.map(async (N) => {
									const A = await (0, d.$7fc)(this.y, a.URI.from(N.uri));
									if (A !== void 0)
										return await this.getCodeChunksFromCodeSelection(A);
								}),
							)
						).filter((N) => N !== void 0);
					} catch (M) {
						return console.error(M), [];
					}
				}
				async getDiffDetailsFromGitDiff({
					gitDiff: D,
					gitDiffFromBranchToMain: M,
					baseRef: N,
					unifiedContextLines: A,
					ref: R,
				}) {
					try {
						let O = [];
						return (
							D &&
								O.push(
									this.w.getGitDiff().then((B) => {
										if (B !== void 0)
											return new o.$Cs({
												diffs: B.map((U) => this.fileDiffToProtoDiff(U)),
												diffType: o.GitDiff_DiffType.DIFF_TO_HEAD,
											});
									}),
								),
							M &&
								O.push(
									this.w
										.getBranchDiff({
											baseRef: N,
											unifiedContextLines: A,
											ref: R,
										})
										.then((B) => {
											if (B !== void 0)
												return new o.$Cs({
													diffs: B.map((U) => this.fileDiffToProtoDiff(U)),
													diffType: o.GitDiff_DiffType.DIFF_FROM_BRANCH_TO_MAIN,
												});
										}),
								),
							await Promise.all(O).then((B) => B.filter((U) => U !== void 0))
						);
					} catch (O) {
						return console.error("Error in getDiffDetailsFromGitDiff:", O), [];
					}
				}
				async getCurrentBranch() {
					return await this.w.getCurrentBranch();
				}
				async getDefaultBranch() {
					return await this.w.getDefaultBranch();
				}
				async getGitUser() {
					return await this.w.getGitUser();
				}
				async getLastCommit() {
					const D = await this.w.getLastCommits(1);
					return D.length > 0 ? D[0] : void 0;
				}
				async getPullRequestDetailsFromPartialPullRequests(D) {
					try {
						return (
							await Promise.all(D.map(async (N) => this.w.getFullPr(N.number)))
						)
							.filter((N) => N !== void 0)
							.map(
								(N) =>
									new C.$_A({
										title: N.title,
										body: N.body,
										diff:
											N?.diff?.map((A) => this.fileDiffToProtoDiff(A)) ?? [],
									}),
							);
					} catch (M) {
						return (
							console.error(
								"Error in getPullRequestDetailsFromPartialPullRequests:",
								M,
							),
							[]
						);
					}
				}
				async getCommitDetailsFromPartialCommits(D) {
					try {
						return (
							await Promise.all(D.map(async (A) => this.w.getFullCommit(A.sha)))
						)
							.filter((A) => A !== void 0)
							.map(
								(A) =>
									new C.$$A({
										sha: A.sha,
										message: A.message,
										description: A.description,
										diff: A.diff.map((R) => this.fileDiffToProtoDiff(R)),
									}),
							);
					} catch (M) {
						return (
							console.error("Error in getCommitDetailsFromPartialCommits:", M),
							[]
						);
					}
				}
				fileDiffToProtoDiff(D) {
					return new o.$Ds({
						from: D.from,
						to: D.to,
						chunks: D.chunks.map(
							(M) =>
								new o.$Es({
									content: M.content,
									lines: M.changes.map((N) => N.content),
									oldStart: M.oldStart,
									oldLines: M.oldLines,
									newStart: M.newStart,
									newLines: M.newLines,
								}),
						),
					});
				}
				async getCodeChunks(D, M) {
					const N = D.fileSelections,
						A = D.selections,
						R = D.folderSelections ?? [],
						O = D.terminalFiles ?? [],
						B = D.terminalSelections ?? [];
					return (
						await Promise.all([
							(
								await Promise.all(
									A.map((F) => this.getCodeChunksFromCodeSelection(F)),
								)
							).filter(n.$tg),
							this.getCodeChunksFromFileSelections(N, { ...M, context: D }),
							...(R ?? []).map((F) => this.getCodeChunksFromFolder(F, M)),
							(
								await Promise.all(
									B.map((F) => this.getCodeChunksFromCodeSelection(F)),
								)
							).filter(n.$tg),
							this.getCodeChunksFromTerminalSelections(O),
						])
					)
						.flat()
						.filter(n.$tg);
				}
				async getCodeChunksFromFileSelections(D, M) {
					try {
						return (
							await Promise.allSettled(
								D.map(async (A) => {
									const R = a.URI.revive(A.uri),
										O = M?.worktreePath
											? this.getWorktreeUri(R, M.worktreePath)
											: R,
										B = await (0, d.$2fc)(this.q, this.r, { ...A, uri: O });
									if (B === void 0) return;
									const z =
										(M?.context
											? this.getMentions(M.context, "fileSelections", A)
											: []
										).length > 0
											? C.ConversationMessage_CodeChunk_Intent.MENTIONED_FILE
											: C.ConversationMessage_CodeChunk_Intent.COMPOSER_FILE;
									return await this.getCodeChunksFromCodeSelection(
										{ ...B, uri: A.uri },
										{ intent: z },
									);
								}),
							)
						)
							.filter((A) => A.status === "fulfilled")
							.map((A) => A.value)
							.filter(n.$tg);
					} catch (N) {
						return console.error(N), [];
					}
				}
				getWorktreeUri(D, M) {
					return a.URI.joinPath(a.URI.file(M), this.t.asRelativePath(D));
				}
				async getCodeChunksFromCodeSelection(D, M) {
					if (
						(await new Promise((N) =>
							this.addOnCursorIgnoreLoadedCallback(() => N(void 0)),
						),
						!this.shouldIgnoreUri(D.uri))
					)
						try {
							const N = D?.rawText?.split(`
`) ?? [""];
							if (N.length === 0) return;
							const A = Math.min(
									D.range.positionLineNumber,
									D.range.selectionStartLineNumber,
								),
								R = this.t.asRelativePath(a.URI.revive(D.uri));
							return new C.$TA({
								relativeWorkspacePath: R,
								startLineNumber: A,
								lines: N,
								summarizationStrategy:
									{
										none: C.ConversationMessage_CodeChunk_SummarizationStrategy
											.NONE_UNSPECIFIED,
										embeddings:
											C.ConversationMessage_CodeChunk_SummarizationStrategy
												.EMBEDDED,
										summarized:
											C.ConversationMessage_CodeChunk_SummarizationStrategy
												.SUMMARIZED,
									}[D.summarizationStrategy ?? "none"] ??
									C.ConversationMessage_CodeChunk_SummarizationStrategy
										.NONE_UNSPECIFIED,
								intent:
									M?.intent ??
									C.ConversationMessage_CodeChunk_Intent.CODE_SELECTION,
							});
						} catch (N) {
							console.error(N);
							return;
						}
				}
				async getCodeChunksFromFolder(D, M) {
					const { relativePath: N } = D,
						A = this.t.resolveRelativePath((0, h.$K9b)(N)),
						R = M?.worktreePath
							? a.URI.joinPath(a.URI.file(M.worktreePath), N)
							: A,
						O = this.M(R),
						B = this.t.getWorkspaceFolder(A)?.uri,
						U = B === void 0 ? [] : await this.M(B),
						z = (0, s.default)()
							.add(await O)
							.add(await U),
						F = 4e5,
						x = [];
					return (
						await this.N(R, z, x, F), this.getCodeChunksFromFileSelections(x, M)
					);
				}
				async M(D) {
					const M = a.URI.joinPath(D, ".gitignore");
					try {
						return (await this.u.readFile(M)).value
							.toString()
							.split(`
`)
							.filter((A) => A.trim() !== "" && !A.startsWith("#"));
					} catch {
						return [];
					}
				}
				async N(D, M, N, A) {
					const O = await this.u.resolve(D, { resolveMetadata: !0 });
					let B = 0;
					if (O.isDirectory && O.children)
						for (const U of O.children) {
							const z = a.URI.joinPath(D, U.name),
								F = this.t.asRelativePath(z);
							if (!(M.ignores(F) || this.a.has(U.name))) {
								if (U.isDirectory) {
									const x = await this.M(z);
									M.add(x), (B += await this.N(z, M, N, A - B));
								} else if (await this.O(F)) {
									const x = U.size ?? 0;
									if (B + x > A || N.length >= 25) return B;
									N.push({ uri: z }), (B += x);
								}
								if (B >= A || N.length >= 25) return B;
							}
						}
					return B;
				}
				async O(D) {
					const M = this.t.resolveRelativePath(D),
						N = await this.u.resolve(M, { resolveMetadata: !0 });
					return !N.isDirectory && !N.isSymbolicLink;
				}
				addContext(D) {
					const {
						contextType: M,
						value: N,
						setContext: A,
						mention: R,
						undoRedoUri: O,
						getContext: B,
					} = D;
					if (M === "fileSelections") {
						const U = N;
						if (this.shouldIgnoreUri(U.uri)) return;
					}
					(0, i.$Ygc)(M)
						? this.P({
								...D,
								value: { ...N, addedWithoutMention: R === void 0 },
							})
						: (A(M, N),
							R &&
								A("mentions", M, (U) => [
									...(U?.filter((z) => z.uuid !== R.uuid) || []),
									R,
								])),
						O &&
							this.j.pushElement(
								new E.$x7b(
									"Add Context",
									"add-context",
									O,
									() => {
										const { undoRedoUri: U, ...z } = D,
											F = B();
										let x;
										(0, i.$Ygc)(M) &&
											((x = F[M].findIndex((H) => (0, i.$1gc)(M, H, N))),
											(x = x === -1 ? void 0 : x)),
											this.removeContext({ ...z, index: x });
									},
									() => {
										const { undoRedoUri: U, ...z } = D;
										this.addContext({ ...z });
									},
								),
							);
				}
				P(D) {
					const { contextType: M, value: N, setContext: A, mention: R } = D;
					if (
						(A(M, (O) => {
							const B = O || [];
							return B.some((F) => (0, i.$1gc)(M, F, N)) ? O : [...B, N];
						}),
						R)
					) {
						const O = (0, i.$Zgc)(M, N);
						A("mentions", M, O, (B) => [
							...(B?.filter((U) => U.uuid !== R.uuid) || []),
							R,
						]);
					}
				}
				removeContext(D) {
					const {
							contextType: M,
							setContext: N,
							index: A,
							undoRedoUri: R,
							getContext: O,
						} = D,
						B = O();
					let U, z;
					return (
						(0, i.$Ygc)(M)
							? ((z = B[M]?.[A]), (U = this.Q(D)))
							: ((z = B[M]),
								(U = B.mentions[M] || []),
								N(M, void 0),
								N("mentions", M, [])),
						R &&
							this.j.pushElement(
								new E.$x7b(
									"Remove Context",
									"remove-context",
									R,
									() => {
										const { undoRedoUri: F, ...x } = D;
										this.addContext({ ...x, value: z });
									},
									() => {
										const { undoRedoUri: F, ...x } = D,
											H = O();
										let q;
										(0, i.$Ygc)(M) &&
											((q = H[M].findIndex((V) => (0, i.$1gc)(M, V, z))),
											(q = q === -1 ? void 0 : q)),
											this.removeContext({ ...x, index: q });
									},
								),
							),
						U
					);
				}
				Q(D) {
					const { contextType: M, index: N, setContext: A, getContext: R } = D;
					let O = [];
					return (
						A(M, (B) => {
							if (!B) return B;
							if (N === void 0) {
								const F = B.slice(0, -1),
									x = B[B.length - 1];
								return (O = this.R({ ...D, item: x })), F;
							}
							const U = B.filter((F, x) => x !== N),
								z = B[N];
							return (O = this.R({ ...D, item: z })), U;
						}),
						O
					);
				}
				R(D) {
					const { contextType: M, item: N, setContext: A } = D,
						R = (0, i.$Zgc)(M, N);
					let O = [];
					return (
						A("mentions", M, R, (B) => (B === void 0 ? B : ((O = B), []))), O
					);
				}
				removeMention(D) {
					const { setContext: M, uuid: N, getContext: A } = D,
						R = A();
					let O, B, U;
					for (const [z, F] of Object.entries(R.mentions))
						if ((0, i.$Ygc)(z)) {
							for (const [x, H] of Object.entries(F))
								if (H.findIndex((V) => V.uuid === N) !== -1) {
									const V = R[z],
										G = V.findIndex((J) => (0, i.$Zgc)(z, J) === x),
										K = V[G];
									H.length === 1 &&
									(!("addedWithoutMention" in K) || !K.addedWithoutMention)
										? ((O = z), (B = G), (U = K))
										: M("mentions", z, x, (J) =>
												J?.filter((W) => W.uuid !== N),
											);
									break;
								}
						} else if (F.findIndex((H) => H.uuid === N) !== -1) {
							F.length === 1
								? ((O = z), (U = R[z]))
								: M("mentions", z, (H) => H?.filter((q) => q.uuid !== N));
							break;
						}
					O &&
						this.removeContext({
							contextType: O,
							setContext: M,
							index: B,
							getContext: A,
						});
				}
				removeAllListContext(D) {
					const {
							contextType: M,
							setContext: N,
							getContext: A,
							undoRedoUri: R,
						} = D,
						O = A();
					if (!(0, i.$Ygc)(M))
						throw new Error(`${M} is not a list context type`);
					const B = O[M] || [],
						U = O.mentions[M] || {},
						z = Object.values(U).flat();
					return (
						N(M, []),
						N("mentions", M, {}),
						R &&
							this.j.pushElement(
								new E.$x7b(
									"Remove All List Context",
									"remove-all-list-context",
									R,
									() => {
										N(M, B), N("mentions", M, U);
									},
									() => {
										N(M, []), N("mentions", M, {});
									},
								),
							),
						z
					);
				}
				async getLinterErrorsForFiles(D) {
					const M = [];
					for (const N of D) {
						const R = this.C.read({ resource: N })
							.filter((O) => O.severity === l.MarkerSeverity.Error)
							.map(
								(O) =>
									new y.$yF({
										message: O.message,
										source: O.source,
										range: new o.$Ns({
											startPosition: {
												line: O.startLineNumber,
												column: O.startColumn,
											},
											endPosition: {
												line: O.endLineNumber,
												column: O.endColumn,
											},
										}),
										relativeWorkspacePath: this.t.asRelativePath(N),
									}),
							);
						if (R.length > 0) {
							const O = new o.$4s({
								relativeWorkspacePath: this.t.asRelativePath(N),
								errors: R,
								fileContents: (
									await this.F.getCurrentFileInfo(N, {
										actuallyReadFromOverrideURI: !0,
									})
								)?.contents,
							});
							M.push(O);
						}
					}
					return M;
				}
				addOnCursorIgnoreLoadedCallback(D) {
					this.g ? D() : this.f.push(D);
				}
				async S() {
					(this.g = !0), this.f.forEach((D) => D()), (this.f = []);
				}
				shouldIgnoreUri(D) {
					return !1;
				}
				U(D, M) {
					const N = D.toString();
					return N.startsWith(M) ? N.slice(M.length) : N;
				}
				isCursorIgnoreLoaded() {
					return this.g;
				}
				async filterCursorIgnoredFiles(D, M) {
					return (
						await new Promise((N) =>
							this.addOnCursorIgnoreLoadedCallback(() => N(void 0)),
						),
						D.filter((N) => !this.shouldIgnoreUri(M(N)))
					);
				}
				isCodeChunkEqualToSelection(D, M) {
					if (
						D.intent !== C.ConversationMessage_CodeChunk_Intent.CODE_SELECTION
					)
						return !1;
					const N = a.URI.revive(M.uri),
						A = this.t.asRelativePath(N);
					if (D.relativeWorkspacePath !== A) return !1;
					const R = D.startLineNumber,
						O = Math.min(
							M.range.positionLineNumber,
							M.range.selectionStartLineNumber,
						);
					if (R !== O) return !1;
					const B = D.lines.length,
						U =
							Math.abs(
								M.range.positionLineNumber - M.range.selectionStartLineNumber,
							) + 1;
					return B === U;
				}
			};
			(e.$P9b = k),
				(e.$P9b = k =
					Ne(
						[
							j(0, w.$GN),
							j(1, m.$MO),
							j(2, r.$zIb),
							j(3, u.$Vi),
							j(4, c.$ll),
							j(5, g.$$Db),
							j(6, p.$iIb),
							j(7, b.$y9b),
							j(8, l.$aM),
							j(9, $.$N9b),
							j(10, v.$p7),
							j(11, S.$0zb),
							j(12, I.$J6b),
							j(13, T.$Li),
						],
						k,
					));
		},
	)
