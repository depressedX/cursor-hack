import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../base/common/json.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/services/inlineDiffService.js';
import '../../../../editor/common/diff/linesDiffComputers.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../browser/interpreterService.js';
import '../../aichat/browser/chatDataService.js';
import '../../../services/ai/browser/aiService.js';
import '../../../services/ai/browser/fastEditService.js';
import '../../../services/ai/browser/repositoryService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/textfile/common/textfiles.js';
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
		