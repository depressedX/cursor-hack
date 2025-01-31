import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/terminal/common/capabilities/commandDetection/terminalCommand.js';
import '../../../../platform/workspace/common/workspace.js';
import './utils.js';
import '../../../services/ai/browser/aiService.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/cppUtils/diff/word.js';
define(
			de[3957],
			he([1, 0, 7, 3, 22, 20, 5, 45, 1652, 25, 1759, 118, 9, 1130]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*files*/,
 E /*extensions*/,
 C /*instantiation*/,
 d /*reactiveStorageService*/,
 m /*terminalCommand*/,
 r /*workspace*/,
 u /*utils*/,
 a /*aiService*/,
 h /*uri*/,
 c /*word*/) {
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
		)
