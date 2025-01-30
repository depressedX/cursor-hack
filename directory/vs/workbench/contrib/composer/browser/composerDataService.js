import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/path.js';
import '../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/workspace/common/workspace.js';
import './composerCapabilities.js';
import './composerData.js';
import '../../contextGraph/browser/gitGraphService.js';
import '../../../services/selectedContext/browser/utils.js';
import '../../../../../proto/aiserver/v1/composer_pb.js';
import './composerDataCreation.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../base/common/constants.js';
import '../../recentFilesTrackerService/browser/recentFilesTrackerService.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/files/common/files.js';
import './utils.js';
import '../../../../base/common/platform.js';
import '../../../../editor/common/services/resolverService.js';
import './composerDataHandle.js';
import '../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../platform/tracing/common/tracing.js';
import '../../../services/selectedContext/browser/selectedContext.js';
define(
			de[209],
			he([
				1, 0, 3, 19, 9, 54, 280, 20, 5, 45, 21, 25, 262, 225, 715, 299, 167,
				1318, 126, 58, 560, 47, 22, 246, 12, 42, 3617, 124, 216, 271,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*lifecycle*/,
				i /*resources*/,
				w /*uri*/,
				E /*path*/,
				C /*aiEverythingProviderService*/,
				d /*extensions*/,
				m /*instantiation*/,
				r /*reactiveStorageService*/,
				u /*storage*/,
				a /*workspace*/,
				h /*composerCapabilities*/,
				c /*composerData*/,
				n /*gitGraphService*/,
				g /*utils*/,
				p /*composer_pb*/,
				o /*composerDataCreation*/,
				f /*chat_pb*/,
				b /*constants*/,
				s /*recentFilesTrackerService*/,
				l /*uuid*/,
				y /*files*/,
				$ /*utils*/,
				v /*platform*/,
				S /*resolverService*/,
				I /*composerDataHandle*/,
				T /*tools_pb*/,
				P /*tracing*/,
				k /*selectedContext*/,
) {
				"use strict";
				var L;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerDataService = e.IComposerDataService = void 0);
				const D = 15,
					M = 10;
				e.IComposerDataService = (0, m.$Mi)("composerDataService");
				let N = class extends t.$1c {
					static {
						L = this;
					}
					get composerDataStorageID() {
						return b.$DX;
					}
					pushKeepAliveHandle(R) {
						for (
							this.keepAliveHandles.push(R);
							this.keepAliveHandles.length > 3;
						)
							this.keepAliveHandles.shift()?.dispose();
						for (let O = 0; O < this.keepAliveHandles.length - 1; O++) {
							const B = this.keepAliveHandles[O];
							B.data.conversation.length > 100 &&
								(B.dispose(), this.keepAliveHandles.splice(O, 1), O--);
						}
					}
					constructor(R, O, B, U, z, F, x, H, q, V) {
						super(),
							(this._storageService = R),
							(this._workspaceContextService = O),
							(this._reactiveStorageService = B),
							(this._instantiationService = U),
							(this._everythingProviderService = z),
							(this._gitGraphService = F),
							(this._recentFilesTrackerService = x),
							(this._fileService = H),
							(this._textModelService = q),
							(this._selectedContextService = V),
							(this.modelReferenceCache = new Map()),
							(this.keepAliveHandles = []),
							(this.onInlineDiffsLoadedHookReady = new Promise((G) => {
								this.onInlineDiffsLoadedHookReadyResolver = G;
							})),
							(this.onInlineDiffsLoadedHook = (G) => Promise.resolve()),
							(this.composerDataHandleManager = (0,
							I.createComposerDataHandleManager)(
								this._instantiationService,
								this.composerWasLoadedHook.bind(this),
								async (G) => (
									await this.onInlineDiffsLoadedHookReady,
									await this.onInlineDiffsLoadedHook(G)
								),
							)),
							([
								this.allComposersData,
								this.setAllComposersData,
								this.resetComposers,
								this.getHandleOptions,
							] = (0, o.createComposerData)(
								this._storageService,
								this._reactiveStorageService,
								this._workspaceContextService,
								this.composerDataHandleManager,
								this.composerDataStorageID,
							)),
							(this.reactiveStorageRoot = this.D(
								this._reactiveStorageService.createScoped(this),
							)),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [() => this.allComposersData.selectedComposerId],
								onChange: ({ deps: G, prevDeps: K, prevReturnValue: J }) => {
									const W = G[0];
									if (
										!this.applicationComposerSettings.unification &&
										this.allComposersData.allComposers.find(
											(Y) => Y.composerId === W,
										)?.forceMode === "chat"
									) {
										const Y = this.allComposersData.allComposers.filter(
											(ie) => ie.forceMode !== "chat",
										)?.[0]?.composerId;
										Y && this.setAllComposersData("selectedComposerId", Y);
										return;
									}
									if (
										this.allComposersData.selectedComposerHandle?.data
											.composerId !== W
									) {
										const X =
											this.allComposersData.selectedComposerHandlePromise;
										let Y = 1e3;
										this.getHandleOptions
											.shouldWaitFor10SecondsWhileReadingFromDiskAtStartup &&
											Date.now() - this.getHandleOptions.fromDate <= 60 * 1e3 &&
											(Y = 1e4);
										const ie = this.composerDataHandleManager.getHandle(W, Y);
										this.setAllComposersData(
											"selectedComposerHandlePromise",
											ie,
										),
											ie.then((ne) => {
												if (ne === void 0) {
													this.deleteComposer(W, {
														forceMode: "edit",
														isCurrentlySelected: !0,
													});
													return;
												}
												ie ===
													this.allComposersData.selectedComposerHandlePromise &&
													(this.allComposersData.selectedComposerHandle?.dispose(),
													this.setAllComposersData(
														"selectedComposerHandle",
														ne,
													),
													X?.then((_) => {
														_?.dispose();
													}));
											});
									}
								},
								runNowToo: !0,
							}),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [() => this.allComposersData.selectedChatId],
								onChange: ({ deps: G, prevDeps: K, prevReturnValue: J }) => {
									const W = G[0];
									if (
										this.allComposersData.selectedChatHandle?.data
											.composerId !== W
									) {
										const X = this.allComposersData.selectedChatHandlePromise;
										let Y = 1e3;
										this.getHandleOptions
											.shouldWaitFor10SecondsWhileReadingFromDiskAtStartup &&
											Date.now() - this.getHandleOptions.fromDate <= 60 * 1e3 &&
											(Y = 1e4);
										const ie = this.composerDataHandleManager.getHandle(W, Y);
										this.setAllComposersData("selectedChatHandlePromise", ie),
											ie.then((ne) => {
												if (ne === void 0) {
													this.deleteComposer(W, {
														forceMode: "chat",
														isCurrentlySelected: !0,
													});
													return;
												}
												ne.setData("forceMode", "chat"),
													ie ===
														this.allComposersData.selectedChatHandlePromise &&
														(this.allComposersData.selectedChatHandle?.dispose(),
														this.setAllComposersData("selectedChatHandle", ne),
														X?.then((_) => {
															_?.dispose();
														}));
											});
									}
								},
								runNowToo: !0,
							});
						for (const G of L.registeredActions)
							G(this._reactiveStorageService, this);
						this.D(
							this._storageService.onWillSaveState(() => {
								this.saveComposers();
							}),
						),
							this.D(
								this._reactiveStorageService.onChangeEffectManuallyDisposed({
									deps: [
										() =>
											this._reactiveStorageService
												.applicationUserPersistentStorage.composerState
												.unification,
									],
									onChange: ({ deps: G }) => {
										const K = G[0],
											J = this.allComposersData.allComposers.find(
												(W) => W.composerId === this.selectedComposerId,
											)?.forceMode;
										if (!K && J === "chat") {
											const W = this.allComposersData.allComposers.filter(
												(X) => X.forceMode !== "chat",
											)?.[0]?.composerId;
											W && this.setAllComposersData("selectedComposerId", W);
										}
									},
								}),
							);
					}
					getHasAgenticBeforeBubble(R, O) {
						const B = this.getComposerData(R);
						if (!B) return !1;
						if (!O) return B.conversation.some((z) => z.isAgentic);
						const U = B.conversation.findIndex((z) => z.bubbleId === O);
						for (let z = 0; z < U; z++)
							if (B.conversation[z].isAgentic) return !0;
						return !1;
					}
					async updateComposerDataAsync(R, O) {
						const B = await this.composerDataHandleManager.getHandle(R);
						if (B)
							try {
								O(B.setData);
							} finally {
								B.dispose();
							}
					}
					dispose() {
						super.dispose();
						for (const R of this.modelReferenceCache.values())
							for (const O of Object.values(R)) O.dispose();
						this.modelReferenceCache.clear();
					}
					async getMaybeCachedModelReference(R, O) {
						let B = this.modelReferenceCache.get(R);
						B || ((B = {}), this.modelReferenceCache.set(R, B));
						let U = B[O.toString()];
						return (
							U ||
								((U = await this._textModelService.createModelReference(O)),
								(B[O.toString()] = U)),
							U
						);
					}
					getWeakHandleOptimistic(R) {
						return this.composerDataHandleManager.getWeakHandleOptimistic(R);
					}
					getComposerForceMode(R) {
						return this.applicationComposerSettings.unification
							? "edit"
							: typeof R == "string"
								? (this.allComposersData.allComposers.find(
										(B) => B.composerId === R,
									)?.forceMode ?? "edit")
								: "forceMode" in R
									? R.forceMode
									: (R.data?.forceMode ?? "edit");
					}
					getSelectedIdByForceMode(R) {
						return this.applicationComposerSettings.unification
							? this.selectedComposerId
							: R === "chat"
								? this.selectedChatId
								: this.selectedComposerId;
					}
					async composerWasLoadedHook(R) {
						try {
							try {
								const O = R.data;
								try {
									R.setData(
										"capabilities",
										(0, h.getComposerCapabilities)(
											this._instantiationService,
											this._reactiveStorageService,
											O.composerId,
											O.capabilities,
										),
									);
								} catch (B) {
									console.error(
										"[composer] Error instantiating capabilities:",
										B,
									);
								}
							} finally {
								R.setData("hasLoaded", !0);
							}
						} catch (O) {
							console.error("[composer] Error loading composer data:", O);
						}
						this.reactiveStorageRoot.onChangeEffect({
							deps: [
								() => R.data.composerId,
								() => R.data.name,
								() => R.data.lastUpdatedAt,
								() => R.data.createdAt,
							],
							onChange: ({ deps: O }) => {
								const B = O[0],
									U = O[1],
									z = O[2],
									F = O[3];
								this.setAllComposersData(
									"allComposers",
									(x) => x.composerId === B,
									{ name: U, lastUpdatedAt: z, createdAt: F },
								);
							},
						});
					}
					async setOnInlineDiffsLoadedHook(R) {
						(this.onInlineDiffsLoadedHook = R),
							this.onInlineDiffsLoadedHookReadyResolver?.();
					}
					get applicationComposerSettings() {
						return this._reactiveStorageService.applicationUserPersistentStorage
							.composerState;
					}
					static {
						this.registeredActions = [];
					}
					static registerAction(R) {
						this.registeredActions.push(R);
					}
					get selectedComposer() {
						const R = this.allComposersData.selectedComposerHandle;
						if (R) return R.data;
					}
					async getSelectedComposerHandle() {
						return await this.composerDataHandleManager.getHandle(
							this.selectedComposerId,
						);
					}
					async getComposerHandleById(R) {
						return await this.composerDataHandleManager.getHandle(R);
					}
					get selectedComposerId() {
						if (this.allComposersData.selectedComposerId)
							return this.allComposersData.selectedComposerId;
						if (this.allComposersData.allComposers.length > 0) {
							console.log(
								"[composer] no selected composer found, selecting first one",
							);
							const R = this.allComposersData.allComposers.filter(
								(O) => this.getComposerForceMode(O) !== "chat",
							)[0];
							if (R)
								return (
									this.setAllComposersData("selectedComposerId", R.composerId),
									R.composerId
								);
						}
						return (
							console.log("[composer] no composers found, resetting"),
							this.resetComposers().composerId
						);
					}
					get selectedChatId() {
						if (this.allComposersData.selectedChatId)
							return this.allComposersData.selectedChatId;
						if (this.allComposersData.allComposers.length > 0) {
							console.log(
								"[composer] no selected composer found, selecting first one",
							);
							const R = this.allComposersData.allComposers.filter(
								(O) => this.getComposerForceMode(O) === "chat",
							)[0];
							if (R)
								return (
									this.setAllComposersData("selectedChatId", R.composerId),
									R.composerId
								);
						}
						return (
							console.log("[composer] no composers found, resetting"),
							this.resetComposers().composerId
						);
					}
					updateSelectedComposer(R) {
						const O = this.allComposersData.selectedComposerHandle;
						O && O.setData(R);
					}
					updateComposerDataSetStore(R, O) {
						if (typeof R == "string") {
							const B =
								this.composerDataHandleManager.getWeakHandleOptimistic(R);
							if (!B)
								throw new Error("[composer] No composer data handle found");
							O(B.setData), B.dispose();
						} else O(R.setData);
					}
					updateComposerData(R, O) {
						if (typeof R == "string") {
							const B =
								this.composerDataHandleManager.getWeakHandleOptimistic(R);
							if (!B)
								throw new Error("[composer] No composer data handle found");
							B.setData((U) => ({ ...U, ...O })), B.dispose();
						} else R.setData(O);
					}
					HACKY_PLEASE_DO_NOT_USE_getComposerHandleById_ONLY_IF_LOADED(R) {
						return this.composerDataHandleManager.getWeakHandleOptimistic(R);
					}
					saveComposers() {
						const R = {
								allComposers: this.allComposersData.allComposers,
								selectedComposerId: this.allComposersData.selectedComposerId,
								selectedChatId: this.allComposersData.selectedChatId,
								hasMigratedChatData: this.allComposersData.hasMigratedChatData,
								hasMigratedUseAutoContext:
									this.allComposersData.hasMigratedUseAutoContext,
								hasMigratedComposerData:
									this.allComposersData.hasMigratedComposerData,
							},
							O = JSON.stringify(R);
						this._storageService.store(
							this.composerDataStorageID,
							O,
							u.StorageScope.WORKSPACE,
							u.StorageTarget.MACHINE,
						);
					}
					getComposerFromIdOrHandle(R) {
						return typeof R == "string" ? this.getComposerData(R) : R.data;
					}
					getComposerCodeBlock(R, O, B) {
						const U = this.getComposerFromIdOrHandle(R);
						if (U) return U.codeBlockData?.[O.toString()]?.[B];
					}
					appendComposer(R) {
						const O = (0, c.getComposerHeaderData)(R);
						this.setAllComposersData("allComposers", (U) => [O, ...U]);
						const B = this.composerDataHandleManager.pushComposer(R);
						this.pushKeepAliveHandle(B);
					}
					deleteComposer(R, O) {
						if (
							(this.setAllComposersData("allComposers", (U) =>
								U.filter((z) => z.composerId !== R),
							),
							this.composerDataHandleManager.deleteComposer(R),
							O?.isCurrentlySelected)
						) {
							const U = this.allComposersData.allComposers.filter(
								(z) => this.getComposerForceMode(z) === O.forceMode,
							);
							U.length > 0
								? this.setAllComposersData(
										O.forceMode === "chat"
											? "selectedChatId"
											: "selectedComposerId",
										U[0].composerId,
									)
								: this.resetComposers();
						}
						const B = this.modelReferenceCache.get(R);
						if (B) for (const U of Object.values(B)) U.dispose();
						this.modelReferenceCache.delete(R);
					}
					updateComposerCodeBlock(R, O, B, U) {
						const z = this.getComposerFromIdOrHandle(R);
						if (!z) return;
						if (!z.codeBlockData[O.toString()][B]) {
							console.trace(
								"[composer] updateReactiveCodeBlock called for uri that does not exist",
								O,
							);
							return;
						}
						try {
							this.updateComposerDataSetStore(R, (x) =>
								x(
									"codeBlockData",
									O.toString(),
									(H) => H.version === B,
									(H) => ({ ...H, ...U }),
								),
							);
						} catch {}
					}
					getCodeBlockStatus(R, O, B) {
						const U = this.getComposerFromIdOrHandle(R);
						if (!U) return "none";
						const z = U?.codeBlockData[O.toString()];
						return z
							? (z.find((F) => F.version === B)?.status ?? "none")
							: "none";
					}
					setCodeBlockStatus(R, O, B, U) {
						!this.getComposerFromIdOrHandle(R) ||
							!R ||
							this.updateComposerCodeBlock(R, O, B, { status: U });
					}
					getCodeBlocksOfStatuses(R, O) {
						const B = this.getComposerFromIdOrHandle(R);
						if (!B) return [];
						const U = B.codeBlockData,
							z = Array.isArray(O) ? O : [O],
							F = [];
						for (const x of Object.keys(U)) {
							const H = U[x];
							for (const q of H) z.includes(q.status) && F.push(q);
						}
						return F;
					}
					setGeneratingCodeBlocksToAborted(R) {
						const O = this.getCodeBlocksOfStatuses(R, "generating");
						for (const B of O)
							this.setCodeBlockStatus(R, B.uri, B.version, "aborted");
					}
					getLatestCodeBlock(R) {
						const O = this.getComposerFromIdOrHandle(R);
						if (O)
							for (let B = O.conversation.length - 1; B >= 0; B--) {
								const U = O.conversation[B];
								if (U.codeBlocks && U.codeBlocks.length > 0) {
									const { uri: z, version: F } =
										U.codeBlocks[U.codeBlocks.length - 1];
									return this.getComposerCodeBlock(R, z, F);
								}
							}
					}
					getLatestCodeBlocks(R) {
						const O = this.getComposerFromIdOrHandle(R);
						if (!O) return [];
						const B = [];
						return (
							Object.values(O.codeBlockData ?? {}).forEach((U) => {
								U.length > 0 && B.push(U[U.length - 1]);
							}),
							B
						);
					}
					getLatestCodeBlockForUri(R, O) {
						const B = this.getLatestCodeBlocks(R);
						if (!(!B || B.length === 0))
							return B.find((U) => U.uri.toString() === O.toString());
					}
					getLatestCodeBlocksOfStatuses(R, O) {
						if (!this.getComposerFromIdOrHandle(R)) return [];
						const U = Array.isArray(O) ? O : [O];
						return this.getLatestCodeBlocks(R).filter((z) => {
							const F = z.status;
							return U.includes(F);
						});
					}
					getLatestCodeBlockVersion(R, O, B) {
						const U = this.getComposerFromIdOrHandle(R);
						if (!U) return -1;
						const z = U.codeBlockData[O.toString()];
						if (!z || z.length === 0) return -1;
						const F = z[z.length - 1]?.version;
						return B?.excludeNonAppliedCodeBlocks
							? z.filter((x) => x.isNotApplied !== !0).length - 1
							: F;
					}
					getVersionExcludingNonAppliedCodeBlocks(R, O, B) {
						const U = this.getComposerFromIdOrHandle(R);
						if (!U) return -1;
						const z = U.codeBlockData[O.toString()];
						return !z || z.length === 0 || z[B].isNotApplied === !0
							? -1
							: z
									.filter((F) => F.isNotApplied !== !0)
									.findIndex((F) => F.version === B);
					}
					getLatestCodeBlockVersionForMessage(R, O, B, U) {
						const z = this.getComposerData(R);
						if (!z) return -1;
						const F = O.toString();
						let x = -1;
						for (let H = 0; H <= B; H++) {
							const q = z.conversation[H];
							if (q.type === f.ConversationMessage_MessageType.AI) {
								const V =
									q.codeBlocks?.filter((G) => G.uri.toString() === F) ?? [];
								for (const G of V) {
									if (H === B && G.codeBlockIdx > U) break;
									G.version > x && (x = G.version);
								}
							}
						}
						return x;
					}
					getInlineDiff(R, O, B) {
						return this._reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
							(U) =>
								U.uri.toString() === O.toString() &&
								U.composerMetadata?.composerId === R &&
								(B ? U.composerMetadata?.version === B : !0),
						);
					}
					getAllInlineDiffs(R) {
						return this._reactiveStorageService.nonPersistentStorage.inlineDiffs.filter(
							(O) => O.composerMetadata?.composerId === R,
						);
					}
					doesFileHaveInlineDiff(R, O) {
						return !!this.getInlineDiff(R, O);
					}
					getComposerData(R) {
						if (typeof R == "string") {
							const O =
								this.composerDataHandleManager.getWeakHandleOptimistic(R);
							if (!O) return;
							try {
								return O.data;
							} finally {
								O.dispose();
							}
						} else return R.data;
					}
					getAllCachedCodeBlocks(R) {
						const O = this.getComposerData(R);
						if (!O) throw Error("[composer] composer doesn't exist");
						const { codeBlockData: B } = O;
						return Object.values(B)
							.flat()
							.filter(({ isCached: z }) => z === !0);
					}
					addTypesToCapabilityStatuses(R, O, B, U) {
						this.updateComposerDataSetStore(R, (z) =>
							z(
								"conversation",
								(F) => F.bubbleId === O,
								"capabilityStatuses",
								B,
								(F) => [...F, ...U.map((x) => ({ type: x, status: "none" }))],
							),
						);
					}
					removeTypesFromCapabilityStatuses(R, O, B, U) {
						this.updateComposerDataSetStore(R, (z) =>
							z(
								"conversation",
								(F) => F.bubbleId === O,
								"capabilityStatuses",
								B,
								(F) => [...F.filter((x) => !U.includes(x.type))],
							),
						);
					}
					setCapabilityStatus(R, O, B, U, z) {
						const F = this.getComposerBubble(R, O);
						!F ||
							!F.capabilityStatuses ||
							(F.capabilityStatuses[B] &&
								!F.capabilityStatuses[B].map((H) => H.type).includes(U)) ||
							this.updateComposerDataSetStore(R, (x) =>
								x(
									"conversation",
									(H) => H.bubbleId === O,
									"capabilityStatuses",
									B,
									(H) => H.type === U,
									{ type: U, status: z },
								),
							);
					}
					setGeneratingCapabilitiesToAborted(R) {
						const O = this.getComposerData(R);
						if (O) {
							for (const B of O.conversation)
								if (B.capabilityStatuses)
									for (const U of Object.keys(B.capabilityStatuses))
										for (const z of B.capabilityStatuses[U])
											z.status === "generating" &&
												this.setCapabilityStatus(
													R,
													B.bubbleId,
													U,
													z.type,
													"aborted",
												);
						}
					}
					setGeneratingCapabilityCodeBlocksToAborted(R) {
						const O = this.getComposerData(R);
						if (O) {
							for (const B of O.conversation)
								if (B.capabilityCodeBlocks)
									for (const U of B.capabilityCodeBlocks)
										U.status === "generating" &&
											this.updateComposerCapabilityCodeBlock(
												R,
												B.bubbleId,
												U.codeBlockIdx,
												{ status: "aborted" },
											);
						}
					}
					isRunningCapabilities(R) {
						const O = this.getComposerData(R);
						if (!O) return !1;
						for (let B = O.conversation.length - 1; B >= 0; B--) {
							const U = O.conversation[B];
							if (U.capabilityStatuses) {
								for (const z of Object.keys(U.capabilityStatuses))
									for (const F of U.capabilityStatuses[z])
										if (F.status === "generating") return !0;
							}
							if (U.capabilityCodeBlocks) {
								for (const z of U.capabilityCodeBlocks)
									if (z.status === "generating" || z.status === "loading")
										return !0;
							}
						}
						return !1;
					}
					getToolFormer(R) {
						const O = this.getComposerCapability(
							R,
							p.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER,
						);
						if (O) return O;
					}
					getPendingUserDecisionGroup(R) {
						const O = this.getToolFormer(R);
						return O ? O.getPendingUserDecisionGroup()() : [];
					}
					getIsBlockingUserDecision(R) {
						const O = this.getToolFormer(R);
						return O ? O.getIsBlockingUserDecision()() : !1;
					}
					setLoadingToolFormerToolsToCancelled(R) {
						const O = this.getToolFormer(R);
						O && O.setLoadingToolsToCancelled();
					}
					addCapabilityRan(R, O, B, U) {
						this.updateComposerDataSetStore(R, (z) =>
							z(
								"conversation",
								(F) => F.bubbleId === O,
								"capabilitiesRan",
								B,
								(F) => [...F, U],
							),
						);
					}
					getComposerCapabilityCodeBlock(R, O, B) {
						const U = this.getComposerBubble(R, O);
						if (U)
							return U.capabilityCodeBlocks?.find((z) => z.codeBlockIdx === B);
					}
					updateComposerCapabilityCodeBlock(R, O, B, U) {
						this.updateComposerDataSetStore(R, (z) =>
							z(
								"conversation",
								(F) => F.bubbleId === O,
								"capabilityCodeBlocks",
								(F) => F.codeBlockIdx === B,
								(F) => ({ ...F, ...U }),
							),
						);
					}
					getComposerCapability(R, O) {
						const B = this.getComposerData(R);
						if (B) return B.capabilities.find((U) => U.type === O);
					}
					getComposerBubble(R, O) {
						const B = this.getComposerFromIdOrHandle(R);
						if (B) return B.conversation.find((U) => U.bubbleId === O);
					}
					updateComposerBubble(R, O, B) {
						this.updateComposerDataSetStore(R, (U) =>
							U(
								"conversation",
								(z) => z.bubbleId === O,
								(z) => ({ ...z, ...B }),
							),
						);
					}
					getLastHumanBubbleId(R) {
						const O = this.getComposerData(R);
						if (O)
							for (let B = O.conversation.length - 1; B >= 0; B--) {
								const U = O.conversation[B];
								if (U.type === f.ConversationMessage_MessageType.HUMAN)
									return U.bubbleId;
							}
					}
					getLastAiBubbleId(R) {
						const O = this.getComposerData(R);
						if (O)
							for (let B = O.conversation.length - 1; B >= 0; B--) {
								const U = O.conversation[B];
								if (U.type === f.ConversationMessage_MessageType.AI)
									return U.bubbleId;
							}
					}
					getLastBubbleId(R) {
						return this.getLastBubble(R)?.bubbleId;
					}
					getLastBubble(R) {
						const O = this.getComposerData(R);
						if (O) return O.conversation[O.conversation.length - 1];
					}
					getLastHumanBubble(R) {
						const O = this.getComposerData(R);
						if (O) {
							for (let B = O.conversation.length - 1; B >= 0; B--)
								if (
									O.conversation[B].type ===
									f.ConversationMessage_MessageType.HUMAN
								)
									return O.conversation[B];
						}
					}
					getLastAiBubble(R) {
						const O = this.getComposerData(R);
						if (O) {
							for (let B = O.conversation.length - 1; B >= 0; B--)
								if (
									O.conversation[B].type ===
									f.ConversationMessage_MessageType.AI
								)
									return O.conversation[B];
						}
					}
					getLastAiBubbleWhere(R, O) {
						const B = this.getComposerData(R);
						return B
							? [...B.conversation]
									.reverse()
									.find(
										(z) =>
											z.type === f.ConversationMessage_MessageType.AI && O(z),
									)
							: void 0;
					}
					getLastBubbleWhere(R, O) {
						const B = this.getComposerData(R);
						return B ? [...B.conversation].reverse().find((z) => O(z)) : void 0;
					}
					getLastAiBubbles(R) {
						const O = this.getComposerData(R);
						if (!O) return [];
						const B = this.getLastHumanBubbleId(R),
							U = O.conversation.findIndex((z) => z.bubbleId === B);
						return U === -1 ? [] : O.conversation.slice(U + 1);
					}
					getComposerId(R) {
						return typeof R == "string" ? R : R.data.composerId;
					}
					getActionButtons(R) {
						const O = this.getComposerId(R);
						return (
							this._reactiveStorageService.nonPersistentStorage.composerState
								.actionButtons?.[O] ?? []
						);
					}
					addActionButton(R, O, B, U) {
						const z = this.getComposerId(R);
						if (
							!this._reactiveStorageService.nonPersistentStorage.composerState
								.actionButtons
						)
							this._reactiveStorageService.setNonPersistentStorage(
								"composerState",
								"actionButtons",
								{},
							);
						else if (
							this._reactiveStorageService.nonPersistentStorage.composerState.actionButtons?.[
								z
							]?.find((V) => V.id === U?.id)
						) {
							console.error(
								"[composer] trying to add an action button that already exists, skipping",
							);
							return;
						}
						const F =
								this._reactiveStorageService.nonPersistentStorage.composerState
									.actionButtons?.[z] ?? [],
							x = F.length === 0,
							H = F.length === 1,
							q = U?.id ?? (0, l.$9g)();
						this._reactiveStorageService.setNonPersistentStorage(
							"composerState",
							"actionButtons",
							z,
							[
								...(this._reactiveStorageService.nonPersistentStorage
									.composerState.actionButtons?.[z] ?? []),
								{
									id: q,
									label: O,
									onClick: (V) => {
										const G = B(V);
										return this.removeActionButton(z, q), G;
									},
									onRemove: U?.onRemove,
									buttonType: x ? "primary" : "secondary",
									keybindingLabel: x
										? "\u23CE"
										: H
											? v.$m
												? " \u2325\u23CE"
												: " alt+\u23CE"
											: void 0,
									icon: U?.icon,
									hintText: U?.hintText,
								},
							],
						);
					}
					removeActionButton(R, O) {
						this._reactiveStorageService.nonPersistentStorage.composerState
							.actionButtons?.[R] &&
							this._reactiveStorageService.setNonPersistentStorage(
								"composerState",
								"actionButtons",
								R,
								(
									this._reactiveStorageService.nonPersistentStorage
										.composerState.actionButtons?.[R] ?? []
								).filter((B) => (B.id === O ? (B.onRemove?.(), !1) : !0)),
							);
					}
					clearActionButtons(R) {
						if (
							!this._reactiveStorageService.nonPersistentStorage.composerState
								.actionButtons?.[R]
						)
							return;
						(
							this._reactiveStorageService.nonPersistentStorage.composerState
								.actionButtons?.[R] ?? []
						).forEach((B) => {
							B.onRemove?.();
						}),
							this._reactiveStorageService.setNonPersistentStorage(
								"composerState",
								"actionButtons",
								R,
								[],
							);
					}
					async getCurrentFilesContent(R) {
						const O = new Map();
						for (const B of R) {
							if (!(await this._fileService.exists(w.URI.parse(B)))) continue;
							const U = w.URI.parse(B),
								z = await this._textModelService.createModelReference(U),
								x = z.object.textEditorModel.getLinesContent();
							z.dispose(), O.set(B, x);
						}
						return O;
					}
					selectLastHumanBubbleAboveInput(R) {
						const O = this.getComposerData(R);
						if (!O) return !1;
						for (let B = O.conversation.length - 1; B >= 0; B--) {
							const U = O.conversation[B];
							if (U.type === f.ConversationMessage_MessageType.HUMAN)
								return (
									this.updateComposerData(R, { selectedBubbleId: U.bubbleId }),
									(0, $.focusBubble)(U.bubbleId),
									!0
								);
						}
						return !1;
					}
					getNonTabFilesInContext(R) {
						const O = this.getComposerData(R);
						if (!O) return [];
						const B = new Set(
								O.tabs
									.filter((F) => F.type === "code")
									.map((F) => F.uri.toString()),
							),
							U = new Set(),
							z = new Set();
						for (const F of O.context.fileSelections) {
							const x = w.URI.revive(F.uri);
							B.has(x.toString()) || U.add(x.toString());
						}
						for (const F of O.context.selections) {
							const x = w.URI.revive(F.uri);
							!B.has(x.toString()) &&
								!U.has(x.toString()) &&
								z.add(x.toString());
						}
						return [
							...Array.from(U).map((F) => ({
								uri: w.URI.parse(F),
								type: "file",
							})),
							...Array.from(z).map((F) => ({
								uri: w.URI.parse(F),
								type: "selection",
							})),
						];
					}
					async getRelevantFiles(R) {
						const O = this.getComposerData(R);
						if (!O) return [];
						const B =
								O.gitGraphFileSuggestions ??
								(await this.getContextGraphFilesFromFileSelections(R)),
							U = this.getRecentlyViewedFiles(),
							z = new Set(),
							F = [];
						for (const x of [...B, ...U]) {
							const H = (0, g.$8gc)(x);
							(await this._fileService.exists(w.URI.parse(H))) &&
								(z.has(H) || (z.add(H), F.push(x)));
						}
						return (
							await new Promise((x) =>
								this._selectedContextService.addOnCursorIgnoreLoadedCallback(
									() => x(void 0),
								),
							),
							await this._selectedContextService.filterCursorIgnoredFiles(
								F,
								(x) => w.URI.revive(x.uri),
							)
						);
					}
					async getContextGraphFiles(R) {
						let O = 0;
						for (; !this._everythingProviderService.provider && O < 20; )
							await new Promise((q) => setTimeout(q, 1e3)), O++;
						if (!R.length) return [];
						const B = R.map(async (q) =>
								(
									await this._gitGraphService.getRelatedFiles({
										uri: w.URI.revive(q.uri),
										maxNumFiles: D,
									})
								).map((G) => ({ ...G })),
							),
							U = (await Promise.all(B)).flat(),
							z = new Set(R.map((q) => (0, g.$8gc)(q)));
						return U.reduce((q, V) => {
							const G = V.uri;
							if (z.has(G.toString())) return q;
							const K = q.find((J) => i.$dh.isEqual(J.uri, V.uri));
							return (
								(!K || V.weight > K.weight) &&
									(K && (q = q.filter((J) => !i.$dh.isEqual(J.uri, V.uri))),
									q.push(V)),
								q
							);
						}, [])
							.sort((q, V) => V.weight - q.weight)
							.slice(0, D)
							.map((q) => ({ uri: q.uri, fileName: (0, E.$sc)(q.uri.fsPath) }));
					}
					getRecentlyViewedFiles() {
						return this._recentFilesTrackerService
							.getRecentlyViewedFiles(M)
							.map((O) => ({
								uri: this._workspaceContextService.resolveRelativePath(
									O.relativePath,
								),
							}));
					}
					async getContextGraphFilesFromFileSelections(R) {
						let O = 0;
						for (; !this._everythingProviderService.provider && O < 20; )
							await new Promise((z) => setTimeout(z, 1e3)), O++;
						const B = this.getComposerData(R);
						if (!B) return [];
						if (!B.context.fileSelections.length)
							return (
								this.updateComposerData(R, { gitGraphFileSuggestions: [] }), []
							);
						const U = await this.getContextGraphFiles(B.context.fileSelections);
						return (
							this.updateComposerData(R, { gitGraphFileSuggestions: U }), U
						);
					}
					getAssociatedFileUris(R) {
						const O = this.getComposerData(R);
						if (!O) return [];
						const B = new Set(),
							U = (x) => B.add(x.toString()),
							z = (x) => {
								x?.forEach((H) => {
									H.to &&
										U(this._workspaceContextService.resolveRelativePath(H.to));
								});
							},
							F = this.getToolFormer(R);
						return (
							O.conversation.forEach((x) => {
								if (x.type === f.ConversationMessage_MessageType.HUMAN) {
									x.attachedCodeChunks.forEach((q) => {
										U(
											this._workspaceContextService.resolveRelativePath(
												q.relativeWorkspacePath,
											),
										);
									}),
										x.codebaseContextChunks.forEach((q) => {
											U(
												this._workspaceContextService.resolveRelativePath(
													q.relativeWorkspacePath,
												),
											);
										}),
										x.commits?.forEach((q) => z(q.diff)),
										x.pullRequests?.forEach((q) => z(q.diff)),
										x.gitDiffs?.forEach((q) => z(q.diffs)),
										x.notepads?.forEach((q) => {
											q.attachedCodeChunks?.forEach((V) => {
												U(
													this._workspaceContextService.resolveRelativePath(
														V.relativeWorkspacePath,
													),
												);
											}),
												q.commits?.forEach((V) => z(V.diff)),
												q.pullRequests?.forEach((V) => z(V.diff)),
												q.gitDiffs?.forEach((V) => z(V.diffs));
										});
									const H = F?.getBubbleData(x.bubbleId);
									if (H)
										switch (H.tool) {
											case T.ClientSideToolV2.READ_SEMSEARCH_FILES:
												H.result?.codeResults.forEach((q) => {
													q.codeBlock &&
														q.codeBlock.relativeWorkspacePath &&
														U(
															this._workspaceContextService.resolveRelativePath(
																q.codeBlock.relativeWorkspacePath,
															),
														);
												});
												break;
											case T.ClientSideToolV2.READ_FILE:
												H.result?.relativeWorkspacePath &&
													U(
														this._workspaceContextService.resolveRelativePath(
															H.result.relativeWorkspacePath,
														),
													);
												break;
											case T.ClientSideToolV2.RIPGREP_SEARCH:
												H.result?.internal?.results.forEach((q) => {
													q.resource && U(w.URI.parse(q.resource));
												});
												break;
											case T.ClientSideToolV2.LIST_DIR: {
												const q =
													this._workspaceContextService.resolveRelativePath(
														H.params?.directoryPath ?? "",
													);
												H.result?.files.forEach((V) => {
													V.isDirectory ||
														U(
															this._workspaceContextService.resolveRelativePath(
																w.URI.joinPath(q, V.name).toString(),
															),
														);
												});
												break;
											}
											case T.ClientSideToolV2.EDIT_FILE:
												H.params?.relativeWorkspacePath &&
													U(
														this._workspaceContextService.resolveRelativePath(
															H.params.relativeWorkspacePath,
														),
													);
												break;
											case T.ClientSideToolV2.SEMANTIC_SEARCH_FULL:
												H.result?.codeResults.forEach((q) => {
													q.codeBlock &&
														q.codeBlock.relativeWorkspacePath &&
														U(
															this._workspaceContextService.resolveRelativePath(
																q.codeBlock.relativeWorkspacePath,
															),
														);
												});
												break;
										}
								}
							}),
							O.context.fileSelections.forEach((x) => U(w.URI.revive(x.uri))),
							Object.keys(O.codeBlockData).forEach((x) => U(w.URI.parse(x))),
							Array.from(B).map((x) => w.URI.parse(x))
						);
					}
					toggleMainComposerMode() {
						const R =
							this._reactiveStorageService.applicationUserPersistentStorage
								.composerState.mainComposerMode;
						this._reactiveStorageService.setApplicationUserPersistentStorage(
							"composerState",
							"mainComposerMode",
							R === "chat" ? "edit" : "chat",
						);
					}
					setMainComposerMode(R) {
						this._reactiveStorageService.setApplicationUserPersistentStorage(
							"composerState",
							"mainComposerMode",
							R,
						);
					}
					getMainComposerMode() {
						return (
							this._reactiveStorageService.applicationUserPersistentStorage
								.composerState.mainComposerMode ?? "edit"
						);
					}
					getDebugInfo() {
						return {
							allComposersData: this.allComposersData,
							selectedComposerId: this.selectedComposerId,
							selectedChatId: this.selectedChatId,
						};
					}
					getLoadedComposers() {
						return this.composerDataHandleManager.getLoadedComposers();
					}
				};
				(e.ComposerDataService = N),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getHasAgenticBeforeBubble")],
						N.prototype,
						"getHasAgenticBeforeBubble",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.updateComposerDataAsync")],
						N.prototype,
						"updateComposerDataAsync",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getMaybeCachedModelReference")],
						N.prototype,
						"getMaybeCachedModelReference",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getWeakHandleOptimistic")],
						N.prototype,
						"getWeakHandleOptimistic",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getSelectedIdByForceMode")],
						N.prototype,
						"getSelectedIdByForceMode",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.composerWasLoadedHook")],
						N.prototype,
						"composerWasLoadedHook",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.onInlineDiffsLoadedHook")],
						N.prototype,
						"setOnInlineDiffsLoadedHook",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getSelectedComposerHandle")],
						N.prototype,
						"getSelectedComposerHandle",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getComposerHandleById")],
						N.prototype,
						"getComposerHandleById",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.updateSelectedComposer")],
						N.prototype,
						"updateSelectedComposer",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.updateComposerDataSetStore")],
						N.prototype,
						"updateComposerDataSetStore",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.updateComposerData")],
						N.prototype,
						"updateComposerData",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.HACKY_PLEASE_DO_NOT_USE_getComposerHandleById_ONLY_IF_LOADED",
							),
						],
						N.prototype,
						"HACKY_PLEASE_DO_NOT_USE_getComposerHandleById_ONLY_IF_LOADED",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.saveComposers")],
						N.prototype,
						"saveComposers",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getComposerFromIdOrHandle")],
						N.prototype,
						"getComposerFromIdOrHandle",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getComposerCodeBlock")],
						N.prototype,
						"getComposerCodeBlock",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.appendComposer")],
						N.prototype,
						"appendComposer",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.deleteComposer")],
						N.prototype,
						"deleteComposer",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.updateComposerCodeBlock")],
						N.prototype,
						"updateComposerCodeBlock",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getCodeBlockStatus")],
						N.prototype,
						"getCodeBlockStatus",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.setCodeBlockStatus")],
						N.prototype,
						"setCodeBlockStatus",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getCodeBlocksOfStatuses")],
						N.prototype,
						"getCodeBlocksOfStatuses",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.setGeneratingCodeBlocksToAborted",
							),
						],
						N.prototype,
						"setGeneratingCodeBlocksToAborted",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLatestCodeBlock")],
						N.prototype,
						"getLatestCodeBlock",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLatestCodeBlocks")],
						N.prototype,
						"getLatestCodeBlocks",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLatestCodeBlockForUri")],
						N.prototype,
						"getLatestCodeBlockForUri",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLatestCodeBlocksOfStatuses")],
						N.prototype,
						"getLatestCodeBlocksOfStatuses",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLatestCodeBlockVersion")],
						N.prototype,
						"getLatestCodeBlockVersion",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.getVersionExcludingNonAppliedCodeBlocks",
							),
						],
						N.prototype,
						"getVersionExcludingNonAppliedCodeBlocks",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.getLatestCodeBlockVersionForMessage",
							),
						],
						N.prototype,
						"getLatestCodeBlockVersionForMessage",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getInlineDiff")],
						N.prototype,
						"getInlineDiff",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getAllInlineDiffs")],
						N.prototype,
						"getAllInlineDiffs",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.doesFileHaveInlineDiff")],
						N.prototype,
						"doesFileHaveInlineDiff",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getAllCachedCodeBlocks")],
						N.prototype,
						"getAllCachedCodeBlocks",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.addTypesToCapabilityStatuses")],
						N.prototype,
						"addTypesToCapabilityStatuses",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.removeTypesFromCapabilityStatuses",
							),
						],
						N.prototype,
						"removeTypesFromCapabilityStatuses",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.setCapabilityStatus")],
						N.prototype,
						"setCapabilityStatus",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.setGeneratingCapabilitiesToAborted",
							),
						],
						N.prototype,
						"setGeneratingCapabilitiesToAborted",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.setGeneratingCapabilityCodeBlocksToAborted",
							),
						],
						N.prototype,
						"setGeneratingCapabilityCodeBlocksToAborted",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.isRunningCapabilities")],
						N.prototype,
						"isRunningCapabilities",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getToolFormer")],
						N.prototype,
						"getToolFormer",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getPendingUserDecisionGroup")],
						N.prototype,
						"getPendingUserDecisionGroup",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getIsBlockingUserDecision")],
						N.prototype,
						"getIsBlockingUserDecision",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.setGeneratingToolFormerToolsToAborted",
							),
						],
						N.prototype,
						"setLoadingToolFormerToolsToCancelled",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.addCapabilityRan")],
						N.prototype,
						"addCapabilityRan",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getComposerCapabilityCodeBlock")],
						N.prototype,
						"getComposerCapabilityCodeBlock",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.updateComposerCapabilityCodeBlock",
							),
						],
						N.prototype,
						"updateComposerCapabilityCodeBlock",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getComposerCapability")],
						N.prototype,
						"getComposerCapability",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getComposerBubble")],
						N.prototype,
						"getComposerBubble",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.updateComposerBubble")],
						N.prototype,
						"updateComposerBubble",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastHumanBubbleId")],
						N.prototype,
						"getLastHumanBubbleId",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastAiBubbleId")],
						N.prototype,
						"getLastAiBubbleId",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastBubbleId")],
						N.prototype,
						"getLastBubbleId",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastBubble")],
						N.prototype,
						"getLastBubble",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastHumanBubble")],
						N.prototype,
						"getLastHumanBubble",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastAiBubble")],
						N.prototype,
						"getLastAiBubble",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastAiBubbleWhere")],
						N.prototype,
						"getLastAiBubbleWhere",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastBubbleWhere")],
						N.prototype,
						"getLastBubbleWhere",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getActionButtons")],
						N.prototype,
						"getActionButtons",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.addActionButton")],
						N.prototype,
						"addActionButton",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.removeActionButton")],
						N.prototype,
						"removeActionButton",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.clearActionButtons")],
						N.prototype,
						"clearActionButtons",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getCurrentFilesContent")],
						N.prototype,
						"getCurrentFilesContent",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.selectLastHumanBubbleAboveInput",
							),
						],
						N.prototype,
						"selectLastHumanBubbleAboveInput",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getNonTabFilesInContext")],
						N.prototype,
						"getNonTabFilesInContext",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getRelevantFiles")],
						N.prototype,
						"getRelevantFiles",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getContextGraphFiles")],
						N.prototype,
						"getContextGraphFiles",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getRecentlyViewedFiles")],
						N.prototype,
						"getRecentlyViewedFiles",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.getContextGraphFilesFromFileSelections",
							),
						],
						N.prototype,
						"getContextGraphFilesFromFileSelections",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getAssociatedFileUris")],
						N.prototype,
						"getAssociatedFileUris",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.toggleMainComposerMode")],
						N.prototype,
						"toggleMainComposerMode",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.setMainComposerMode")],
						N.prototype,
						"setMainComposerMode",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getMainComposerMode")],
						N.prototype,
						"getMainComposerMode",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLoadedComposers")],
						N.prototype,
						"getLoadedComposers",
						null,
					),
					(e.ComposerDataService =
						N =
						L =
							Ne(
								[
									j(0, u.$lq),
									j(1, a.$Vi),
									j(2, r.$0zb),
									j(3, m.$Li),
									j(4, C.$3Db),
									j(5, n.$cEb),
									j(6, s.$lcc),
									j(7, y.$ll),
									j(8, S.$MO),
									j(9, k.$Q9b),
								],
								N,
							)),
					(0, d.$lK)(e.IComposerDataService, N, d.InstantiationType.Eager);
			},
		),
		