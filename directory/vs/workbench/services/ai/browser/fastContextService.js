import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/lifecycle.js';
import '../../history/common/history.js';
import '../../../../platform/workspaces/common/workspaces.js';
import '../../editor/common/editorService.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../base/common/cancellation.js';
import './repositoryService.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../editor/browser/editorBrowser.js';
define(
			de[400],
			he([1, 0, 5, 20, 3, 245, 256, 18, 17, 204, 33, 226, 67, 42, 25, 56]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$26b = void 0),
					(e.$26b = (0, t.$Mi)("fastContextService"));
				const p = 1e4;
				let o = class extends w.$1c {
					constructor(b, s, l, y, $, v, S, I) {
						super(),
							(this.c = b),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.j = $),
							(this.m = v),
							(this.q = S),
							(this.r = I),
							(this.embeddingsCache = {}),
							(this.embeddingsTimer = {}),
							(this.lastLookedUpEmbeddings = []),
							(this.lastSeenCmdKQueryHistoryInAllContextSessions = []),
							(this.timeOfLastTerminalCommand = 0),
							(this.timeOfLastUserChatMessage = 0);
					}
					async computeEmbeddingsChunks(b, s, l) {}
					clearEmbeddingsCache() {
						this.lastLookedUpEmbeddings =
							this.lastLookedUpEmbeddings.slice(-20);
						const b = new Set(this.lastLookedUpEmbeddings);
						for (const s in this.embeddingsCache)
							b.has(s) || delete this.embeddingsCache[s];
					}
					async getEmbeddingsFromCache(b) {
						return [];
					}
					async getEmbeddingChunks(b, s, l) {
						return (
							await this.m.parallelSearch(b, 5, void 0, { globFilter: l })
						).map(($) => ({
							relativeWorkspacePath: $.codeBlock?.relativeWorkspacePath ?? "",
							contents: $.codeBlock?.contents ?? "",
						}));
					}
					s() {
						const b = this.h.activeEditorPane?.getControl();
						if (!(0, g.$0sb)(b)) return;
						const s = b.getModel();
						if (s === null) return;
						const l = b.getPosition(),
							y = b.getSelection();
						return { model: s, position: l, selection: y };
					}
					async getAllOpenTabs({ fileSizeLimit: b }) {
						const s = [];
						for (const l of this.h.editors)
							try {
								const y = l.resource;
								if (y) {
									const $ = await this.q.createModelReference(y),
										v = $.object.textEditorModel.getValue();
									v.length <= b && s.push({ uri: y, contents: v }), $.dispose();
								}
							} catch (y) {
								console.error(y);
							}
						return s;
					}
					async getVisibleTabs() {
						const b = [];
						for (const s of this.h.visibleEditorPanes) {
							const $ = s
									.getControl()
									.getVisibleRanges()
									.map((L) => ({
										startLineNumber: L.startLineNumber,
										endLineNumber: L.endLineNumber,
									})),
								S = s.input.resource,
								I = await this.q.createModelReference(S),
								T = I.object.textEditorModel.getValue();
							let P = [],
								k = 1;
							for (const { startLineNumber: L, endLineNumber: D } of $) {
								k < L && (k = L);
								const M = T.split(`
`).slice(L - 1, D);
								P = P.concat(M.map((N) => ({ line: N, lineNumber: k++ })));
							}
							P.join(`
`).trim().length > 0 &&
								b.push({
									relativeWorkspacePath: this.g.asRelativePath(S),
									totalNumberOfLinesInFile: T.split(`
`).length,
									lines: P,
								}),
								I.dispose();
						}
						return b;
					}
					async getRecentChunks(b = 50) {
						const s = this.c.getRecentLocations(b),
							l = this.t(s, 50),
							y = this.g.getWorkspace();
						let $;
						y.folders.length > 0 && ($ = y.folders[0].uri);
						const v = this.u(l),
							S = await this.w(v, $);
						return (
							S.sort((I, T) => T.score - I.score),
							S.map(({ score: I, ...T }) => T)
						);
					}
					t(b, s = 7) {
						return b.map((l) =>
							l.location.startLineNumber === l.location.endLineNumber
								? {
										...l,
										location: new m.$iL(
											Math.max(l.location.startLineNumber - s, 1),
											1,
											l.location.endLineNumber + s,
											1,
										),
									}
								: l,
						);
					}
					u(b) {
						const s = new Map();
						for (const [l, y] of b.entries()) {
							const $ = y.uri;
							s.has($) || s.set($, []),
								s.get($)?.push({ ...y, score: b.length - l, numMerges: 1 });
						}
						return s;
					}
					async w(b, s) {
						const l = [];
						for (const [y, $] of b.entries()) {
							const v = this.y($),
								S = await this.q.createModelReference(y);
							try {
								await Promise.race([
									S.object.resolve(),
									new Promise((I) => setTimeout(I, 3e3)),
								]);
								for (const I of v) {
									if (
										S.object.textEditorModel.getValueLengthInRange(I.location) >
										p
									)
										continue;
									const P = S.object.textEditorModel.getValueInRange(
										I.location,
									);
									let k = y.fsPath;
									s && (k = this.g.asRelativePath(y)),
										l.push({
											relativeWorkspacePath: k,
											contents: P,
											score: I.score,
											range: I.location,
										});
								}
							} finally {
								S.dispose();
							}
						}
						return l;
					}
					y(b) {
						const s = [];
						let [l, ...y] = b;
						for (const $ of y)
							m.$iL.areIntersecting(l.location, $.location)
								? ((l.location = m.$iL.plusRange(l.location, $.location)),
									(l.score =
										(l.score * l.numMerges + $.score) / (l.numMerges + 1)),
									(l.numMerges += 1))
								: (s.push(l), (l = $));
						return s.push(l), s;
					}
					async getImports() {
						const b = this.s();
						if (b === void 0) return [];
						const { model: s } = b,
							l = new u.$Ce(),
							v = (await this.j.getOrCreate(s, l.token)).getTopLevelSymbols();
						return [];
					}
					async getApproximateRangeOfImports(b, s) {
						const y = (await this.q.createModelReference(b)).object
								.textEditorModel,
							S = (await this.j.getOrCreate(y, s))
								.getTopLevelSymbols()
								.reduce(
									(I, T) => Math.min(I, T.range.startLineNumber),
									Number.MAX_VALUE,
								);
						return new m.$iL(1, 1, S, 1e3);
					}
					async getTypes() {
						return [];
					}
					async getNonEmbeddingChunks(b, s) {
						try {
							const l = await this.getRecentChunks();
							return s !== void 0 ? l.slice(0, s) : l.slice(0, 5);
						} catch (l) {
							return console.error(l), [];
						}
					}
					async getFilteredRecentChunks(b) {
						const s = this.c.getRecentLocations(50),
							l = this.t(s),
							y = this.z(),
							$ = l.filter((L) => L.uri.toString() !== y?.toString()),
							v = this.g.getWorkspace();
						let S;
						v.folders.length > 0 && (S = v.folders[0].uri);
						const I = this.u($),
							T = await this.w(I, S);
						return (
							T.sort((L, D) => D.score - L.score),
							T.map(({ score: L, ...D }) => D).slice(0, b)
						);
					}
					z() {
						return this.h.activeEditor?.resource;
					}
					addCmdKToQueryHistory(b, s) {
						this.lastSeenCmdKQueryHistoryInAllContextSessions.push({
							query: { query: b },
							relativeWorkspacePath: s,
							timestampDouble: Date.now(),
							cmdkWasAccepted: void 0,
						});
					}
					getCmdKQueryHistoryInAllContextSessions() {
						return this.lastSeenCmdKQueryHistoryInAllContextSessions;
					}
					markNowAsLastChatMessage() {
						this.timeOfLastUserChatMessage = Date.now();
					}
					markNowAsLastTerminalCommand() {
						this.timeOfLastTerminalCommand = Date.now();
					}
					getTimeOfLastChatMessage() {
						return this.timeOfLastUserChatMessage;
					}
					getTimeOfLastTerminalCommand() {
						return this.timeOfLastTerminalCommand;
					}
				};
				(o = Ne(
					[
						j(0, E.$Feb),
						j(1, C.$cRb),
						j(2, n.$Vi),
						j(3, d.$IY),
						j(4, r.$9Db),
						j(5, a.$J6b),
						j(6, c.$MO),
						j(7, h.$QO),
					],
					o,
				)),
					(0, i.$lK)(e.$26b, o, i.InstantiationType.Delayed);
			},
		),
		