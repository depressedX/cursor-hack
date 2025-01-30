import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/extensions.js';
import '../../instantiation/common/instantiation.js';
import './reactiveStorageService.js';
define(de[669], he([1, 0, 20, 5, 45]), function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*instantiation*/,
 w /*reactiveStorageService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$16b = e.$Z6b = void 0),
				(e.$Z6b = (0, i.$Mi)("reducerService"));
			let E = class {
				constructor(d) {
					this.c = d;
					const m = d.createScoped(this);
				}
				dontShowIndexHint() {
					this.c.setWorkspaceUserPersistentStorage(
						"onboardingMetadata",
						"shouldAskToIndex",
						!1,
					);
				}
				addPersistentChatMetadataIfNotExists(d, m) {
					this.c.workspaceUserPersistentStorage.persistentChatMetadata.find(
						(u) => u.bubbleId === d && u.tabId === m,
					) === void 0 &&
						this.c.setWorkspaceUserPersistentStorage(
							"persistentChatMetadata",
							(u) => [
								...u,
								{ bubbleId: d, tabId: m, metadataCreationTime: Date.now() },
							],
						);
				}
				pruneOldFieldsFromChatMetadata() {
					this.c.setWorkspaceUserPersistentStorage(
						"persistentChatMetadata",
						(d) => {
							const m = d.sort((u, a) => {
									const h = u.metadataCreationTime || 0,
										c = a.metadataCreationTime || 0;
									return h - c;
								}),
								r = Math.max(m.length - 50, 0);
							return m.map((u, a) =>
								a > r
									? u
									: {
											...u,
											intermediateChunks: [],
											intermediateSectionType: void 0,
										},
							);
						},
					);
				}
				addChatMetadata(d, m) {
					const r =
						this.c.workspaceUserPersistentStorage.persistentChatMetadata.find(
							(a) => a.bubbleId === d && a.tabId === m,
						) ?? {};
					this.c.setWorkspaceUserPersistentStorage(
						"persistentChatMetadata",
						(a) => a.filter((h) => h.bubbleId !== d || h.tabId !== m),
					),
						this.c.setWorkspaceUserPersistentStorage(
							"persistentChatMetadata",
							(a) => [
								...a,
								{
									bubbleId: d,
									tabId: m,
									...r,
									intermediateChunks: [],
									intermediateSectionType: void 0,
									docsCitations: [],
									predictedContext: void 0,
								},
							],
						);
					const u = this.c.nonPersistentStorage.nonPersistentChatMetadata.find(
						(a) => a.bubbleId === d && a.tabId === m,
					);
					this.c.setNonPersistentStorage("nonPersistentChatMetadata", (a) =>
						a.filter((h) => h.bubbleId !== d || h.tabId !== m),
					),
						this.c.setNonPersistentStorage("nonPersistentChatMetadata", (a) => [
							...a,
							{
								bubbleId: d,
								tabId: m,
								...u,
								intermediateChunks: [],
								intermediateSectionType: void 0,
								steps: [],
							},
						]),
						this.pruneOldFieldsFromChatMetadata();
				}
				addStepToNonPersistentChatMetadata(d, m, r) {
					console.log("new step!", r),
						this.c.setNonPersistentStorage(
							"nonPersistentChatMetadata",
							(u) => u.bubbleId === d && u.tabId === m,
							"steps",
							(u) => [
								...u,
								(() => {
									switch (r.type) {
										case "gathering":
											return { type: r.type, data: r.step, files: [] };
										case "reranking":
											return { type: r.type, data: r.step, files: [] };
										case "reasoning":
											return { type: r.type, data: r.step, substeps: [] };
									}
								})(),
							],
						);
				}
				addFileToStepInNonPersistentChatMetadata(d, m, r) {
					this.c.setNonPersistentStorage(
						"nonPersistentChatMetadata",
						(u) => u.bubbleId === d && u.tabId === m,
						"steps",
						(u) => u.type === r.type && u.data.index === r.file.stepIndex,
						"files",
						(u) => [...u, r.file],
					);
				}
				addSubstepToStepInNonPersistentChatMetadata(d, m, r) {
					this.c.setNonPersistentStorage(
						"nonPersistentChatMetadata",
						(u) => u.bubbleId === d && u.tabId === m,
						"steps",
						(u) => u.type === r.type && u.data.index === r.substep.stepIndex,
						"substeps",
						(u) => [...u, r.substep],
					);
				}
				updateGlobalContext(d, m) {
					this.addPersistentChatMetadataIfNotExists(d.bubbleId, d.tabId),
						this.c.setWorkspaceUserPersistentStorage(
							"persistentChatMetadata",
							({ bubbleId: r, tabId: u }) => r === d.bubbleId && u === d.tabId,
							(r) => {
								const u = r.predictedContext ?? { usedDocs: [] };
								return {
									...r,
									predictedContext: {
										...u,
										usedCodebase: {
											...u.usedCodebase,
											fileResults: m?.map((a) =>
												a.file !== void 0
													? {
															file: {
																relativeWorkspacePath:
																	a.file?.relativeWorkspacePath,
															},
															score: a.score,
														}
													: { score: a.score },
											),
										},
									},
								};
							},
						);
				}
				useCodebaseContext(d, m) {
					this.addPersistentChatMetadataIfNotExists(d, m),
						this.updateGlobalContext({ bubbleId: d, tabId: m }),
						this.setIntentDetermined(d, m);
				}
				setIntentDetermined(d, m) {
					this.c.setNonPersistentStorage(
						"inprogressAIGenerations",
						(r) =>
							r.metadata?.type === "chat" &&
							r.metadata.bubbleId === d &&
							r.metadata.tabId === m,
						"metadata",
						(r) => (r?.type !== "chat" ? r : { ...r, intentDetermined: !0 }),
					);
				}
			};
			(e.$16b = E),
				(e.$16b = E = Ne([j(0, w.$0zb)], E)),
				(0, t.$lK)(e.$Z6b, E, t.InstantiationType.Delayed);
		}),
		