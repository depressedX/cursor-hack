import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/hash.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/services/inlineDiffService.js';
import '../../../../editor/common/core/lineRange.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../aiFeatureStatusService/browser/aiFeatureStatusService.js';
import '../../aichat/browser/chatData.js';
import '../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../services/ai/browser/fastEditService.js';
import '../../../services/ai/browser/rgSearch.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/search/common/search.js';
import '../../../services/shadowWorkspace/common/shadowWorkspaceService.js';
import '../../../../../proto/aiserver/v1/shadow_workspace_pb.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/buffer.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../services/cursorAuth/browser/authenticationService.js';
import '../../../../../proto/aiserver/v1/fastapply_pb.js';
define(
			de[852],
			he([
				1, 0, 33, 136, 3, 59, 19, 9, 47, 383, 196, 74, 42, 204, 31, 20, 5, 90,
				41, 45, 134, 25, 287, 140, 280, 480, 627, 66, 18, 186, 626, 454, 22, 76,
				134, 232, 581,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*cancellation*/,
				i /*hash*/,
				w /*lifecycle*/,
				E /*map*/,
				C /*resources*/,
				d /*uri*/,
				m /*uuid*/,
				r /*inlineDiffService*/,
				u /*lineRange*/,
				a /*languages*/,
				h /*resolverService*/,
				c /*outlineModel*/,
				n /*commands*/,
				g /*extensions*/,
				p /*instantiation*/,
				o /*markers*/,
				f /*opener*/,
				b /*reactiveStorageService*/,
				s /*reactiveStorageTypes*/,
				l /*workspace*/,
				y /*aiFeatureStatusService*/,
				$ /*chatData*/,
				v /*aiEverythingProviderService*/,
				S /*fastEditService*/,
				I /*rgSearch*/,
				T /*editorGroupsService*/,
				P /*editorService*/,
				k /*search*/,
				L /*shadowWorkspaceService*/,
				D /*shadow_workspace_pb*/,
				M /*files*/,
				N /*buffer*/,
				A /*reactiveStorageTypes*/,
				R /*authenticationService*/,
				O /*fastapply_pb*/,
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
		