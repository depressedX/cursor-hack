define(
			de[4177],
			he([
				1, 0, 9, 6, 21, 20, 3, 467, 1870, 271, 205, 18, 1744, 47, 118, 45, 126,
				140, 191, 148, 341, 28, 23, 1369, 8,
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
					(e.$AAc = void 0);
				let S = class extends C.$1c {
					constructor(T, P, k, L, D, M, N) {
						super(),
							(this.j = T),
							(this.m = P),
							(this.n = k),
							(this.q = L),
							(this.r = D),
							(this.u = M),
							(this.w = N),
							(this.a = new u.$Zzb()),
							(this.c = this.D(new i.$re())),
							(this.onDidReset = this.c.event),
							(this.f = this.D(new i.$re())),
							(this.onDidOpenNotepad = this.f.event),
							(this.g = this.D(new i.$re())),
							(this.onContextRemoved = this.g.event),
							(this.h = this.D(new i.$re())),
							(this.onDidDeleteNotepad = this.h.event),
							(this.Q = !0),
							(this.R = 0),
							(this.S = 0);
						const A = this.w.createKey("notepadIsEnabled", !1);
						this.D(
							this.u.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.u.applicationUserPersistentStorage.notepadState
											.isNotepadEnabled,
								],
								onChange: ({ deps: R }) => {
									const O = R[0];
									if ((O !== void 0 && A.set(O), !O))
										for (const B of Object.keys(this.m.notepadsData.notepads)) {
											const U = this.q.findEditors(
												t.URI.from({ scheme: y.Schemas.notepad, path: B }),
											);
											for (const z of U) this.q.closeEditor(z);
										}
								},
							}),
						),
							this.D(
								this.j.onWillSaveState(() => {
									this.z();
								}),
							),
							A.set(
								this.u.applicationUserPersistentStorage.notepadState
									.isNotepadEnabled ?? !1,
							);
					}
					get selectedNotepad() {
						return this.m.selectedNotepad;
					}
					get selectedNotepadId() {
						return this.m.selectedNotepadId;
					}
					updateSelectedNotepad(T) {
						this.m.updateSelectedNotepad(T);
					}
					get selectedTab() {
						return this.m.selectedTab;
					}
					get selectedTabId() {
						return this.m.selectedTabId;
					}
					updateSelectedTab(T) {
						this.m.updateSelectedTab(T);
					}
					y(T) {
						const P = this.m.notepadsData.notepads[T];
						if (!P) throw new Error("[notepad] Notepad not found");
						return P;
					}
					z() {
						const T = JSON.stringify(this.m.notepadsData);
						this.j.store(
							"notepadData",
							T,
							w.StorageScope.WORKSPACE,
							w.StorageTarget.MACHINE,
						);
					}
					C(T, P) {
						this.m.setNotepadsData("notepads", T, (k) => ({ ...k, ...P }));
					}
					F(T, P) {
						const k = this.m.getTabData(T, P);
						if (!k) throw new Error("[notepad] Tab not found");
						return k;
					}
					G(T, P, k) {
						const L = this.m.getBubbleData(T, P, k);
						if (!L) throw new Error("[notepad] Bubble not found");
						return L;
					}
					H(T, P, k) {
						this.m.updateTabData(T, P, k);
					}
					I(T, P, k, L) {
						this.m.updateBubbleData(T, P, k, L);
					}
					J(T) {
						const P = this.y(T);
						return (
							P.text.trim() === "" && P.tabs.every((k) => this.L(T, k.tabId))
						);
					}
					L(T, P) {
						const k = this.F(T, P);
						if (k.bubbles.length !== 1) return !1;
						const L = k.bubbles[0];
						return (
							L.type === o.BubbleType.USER_CHAT &&
							(L.text === void 0 || L.text.trim() === "")
						);
					}
					addContext(T, P, k, L, D) {
						this.n.addContext({
							contextType: P,
							value: k,
							setContext: (...M) => {
								this.m.setNotepadsData("notepads", T, "context", ...M);
							},
							getContext: () => {
								const M = this.y(T);
								if (!M) throw new Error("[notepad] Notepad not found");
								return M.context;
							},
							undoRedoUri: D ? this.getUndoRedoUri(T) : void 0,
							mention: L,
						});
					}
					removeContext(T, P, k, L) {
						const D = this.n.removeContext({
							contextType: P,
							setContext: (...M) => {
								this.m.setNotepadsData("notepads", T, "context", ...M);
							},
							getContext: () => {
								const M = this.y(T);
								if (!M) throw new Error("[notepad] Notepad not found");
								return M.context;
							},
							index: k,
							undoRedoUri: L ? this.getUndoRedoUri(T) : void 0,
						});
						this.g.fire({
							notepadId: T,
							contextType: P,
							removedMentionIds: D.map((M) => M.uuid),
						});
					}
					removeMention(T, P) {
						this.n.removeMention({
							uuid: P,
							setContext: (...k) => {
								this.m.setNotepadsData("notepads", T, "context", ...k);
							},
							getContext: () => {
								const k = this.y(T);
								if (!k) throw new Error("[notepad] Notepad not found");
								return k.context;
							},
							undoRedoUri: this.getUndoRedoUri(T),
						});
					}
					addBubbleContext(T, P, k, L, D, M, N) {
						this.n.addContext({
							contextType: L,
							value: D,
							setContext: (...A) => {
								this.m.setNotepadsData(
									"notepads",
									T,
									"tabs",
									(R) => R.tabId === P,
									"bubbles",
									(R) => R.id === k && R.type === "user",
									"context",
									...A,
								);
							},
							getContext: () => {
								const A = this.m.getBubbleData(T, P, k);
								if (!A || A.type !== "user")
									throw new Error("[notepad] Bubble not found");
								return A.context;
							},
							undoRedoUri: N ? this.getUndoRedoUri(T) : void 0,
							mention: M ? { uuid: M } : void 0,
						});
					}
					removeBubbleContext(T, P, k, L, D, M) {
						const N = this.n.removeContext({
							contextType: L,
							setContext: (...A) => {
								this.m.setNotepadsData(
									"notepads",
									T,
									"tabs",
									(R) => R.tabId === P,
									"bubbles",
									(R) => R.id === k && R.type === "user",
									"context",
									...A,
								);
							},
							getContext: () => {
								const A = this.m.getBubbleData(T, P, k);
								if (!A || A.type !== "user")
									throw new Error("[notepad] Bubble not found");
								return A.context;
							},
							index: D,
							undoRedoUri: M ? this.getUndoRedoUri(T) : void 0,
						});
						this.g.fire({
							notepadId: T,
							contextType: L,
							removedMentionIds: N.map((A) => A.uuid),
						});
					}
					removeBubbleMention(T, P, k, L) {
						this.n.removeMention({
							uuid: L,
							setContext: (...D) => {
								this.m.setNotepadsData(
									"notepads",
									T,
									"tabs",
									(M) => M.tabId === P,
									"bubbles",
									(M) => M.id === k && M.type === "user",
									"context",
									...D,
								);
							},
							getContext: () => {
								const D = this.m.getBubbleData(T, P, k);
								if (!D || D.type !== "user")
									throw new Error("[notepad] Bubble not found");
								return D.context;
							},
							undoRedoUri: this.getUndoRedoUri(T),
						});
					}
					getUndoRedoUri(T) {
						return t.URI.from({ scheme: "notepad", path: `${T}` });
					}
					async submitChat(T) {
						const { notepadId: P, tabId: k, bubbleId: L, extra: D } = T,
							N = this.F(P, k)?.bubbles.findIndex(
								(V) => V.id === L && V.type === "user",
							);
						if (this.G(P, k, L).type !== o.BubbleType.USER_CHAT)
							throw new Error("[notepad] User bubble not found");
						const R = await this.r.aiClient();
						this.N({ notepadId: P, tabId: k });
						const O = this.D(new i.$re());
						let B = (0, c.$9g)(),
							[U, z] = this.r.registerNewGeneration({
								generationUUID: B,
								metadata: void 0,
							});
						this.H(P, k, { chatGenerationUUID: B, lastUpdatedAt: Date.now() });
						const F = await this.O({ notepadId: P, tabId: k, bubbleId: L });
						if (F === null) return;
						const x = O.event(() => {
								const V = this.F(P, k);
								V &&
									V.bubbles.length > 2 &&
									(!V?.hasNamedTab || N === 0) &&
									(async () => {
										const K = await R.nameTab({
											messages: F.conversation ?? [],
										});
										if (K.name)
											this.m.setNotepadsData(
												"notepads",
												P,
												"tabs",
												(J, W) => J.tabId === k,
												"chatTitle",
												K.name,
											);
										else {
											const J = V.bubbles[0];
											J &&
												J.type === "user" &&
												this.m.setNotepadsData(
													"notepads",
													P,
													"tabs",
													(W, X) => W.tabId === k,
													"chatTitle",
													(J.richText ?? J.text)
														?.trim()
														.split(`
`)[0]
														.split(" ")
														.slice(0, 10)
														.join(" ") ?? "",
												);
										}
										this.m.setNotepadsData(
											"notepads",
											P,
											"tabs",
											(J, W) => J.tabId === k,
											"hasNamedTab",
											!0,
										);
									})(),
									x.dispose();
							}),
							H = (0, m.$s9b)(),
							q = (0, m.$t9b)();
						this.m.setNotepadsData(
							"notepads",
							P,
							"tabs",
							(V) => V.tabId === k,
							"bubbles",
							(V) => [...V, H, q],
						);
						try {
							const V = R.streamNotepadChat(F, {
									signal: z.signal,
									headers: (0, f.$m6b)(B),
								}),
								G = this.M({
									notepadId: P,
									tabId: k,
									bubbleId: H.id,
									internalStreamer: V,
									generationUUID: B,
								}),
								K = this.r.streamResponse({
									modelDetails: F.modelDetails,
									generationUUID: B,
									streamer: G,
									streamerURL:
										s.$q0.typeName + "/" + s.$q0.methods.streamNotepadChat.name,
									source: "other",
									failSilently: !0,
									rethrowCancellation: !0,
								});
							let J = H.text;
							for await (const W of K) {
								const { text: X } = W;
								if (!X) {
									W.isBigFile && this.H(P, k, { isReadingLongFile: !0 });
									continue;
								}
								this.F(P, k)?.isReadingLongFile &&
									this.H(P, k, { isReadingLongFile: !1 }),
									(J += X),
									this.m.setNotepadsData(
										"notepads",
										P,
										"tabs",
										(ie) => ie.tabId === k,
										"bubbles",
										(ie) => ie.id === H.id,
										"text",
										J,
									),
									(H.text = J);
							}
						} catch (V) {
							console.error("Error in chat submission:", V),
								this.m.setNotepadsData(
									"notepads",
									P,
									"tabs",
									(G) => G.tabId === k,
									"bubbles",
									(G) => G.filter((K) => K.id !== H.id),
								);
						} finally {
							try {
								O.fire();
							} finally {
								O.dispose();
							}
							D?.onFinish && D.onFinish(),
								this.H(P, k, { chatGenerationUUID: void 0 });
						}
					}
					async *M({
						notepadId: T,
						tabId: P,
						bubbleId: k,
						internalStreamer: L,
						generationUUID: D,
					}) {
						for await (const M of L) yield M;
					}
					N({ notepadId: T, tabId: P }) {
						const k = this.F(T, P);
						if (k?.chatGenerationUUID) {
							const L = k.chatGenerationUUID;
							this.H(T, P, { chatGenerationUUID: void 0 }), this.U(L);
						}
					}
					async O({ notepadId: T, tabId: P, bubbleId: k }) {
						const L = this.y(T),
							D = L?.tabs.find((z) => z.tabId === P),
							M = D?.bubbles.find((z) => z.id === k);
						if (!L || !D || !M || M.type !== o.BubbleType.USER_CHAT)
							return (
								console.error(
									`Notepad ${T}, tab ${P}, or user bubble ${k} does not exist`,
								),
								null
							);
						const N = await this.P(T, D),
							A = this.r.getModelDetails({
								specificModelField: "regular-chat",
							}),
							R = D.bubbles
								.filter((z) => z.type === o.BubbleType.USER_CHAT)
								.map((z) => z.context?.notepads?.map((F) => F.notepadId))
								.filter(l.$tg)
								.flat();
						new Set(R).add(T);
						const B = M.context;
						return new b.$bH({
							conversation: N,
							allowLongFileScan: !1,
							explicitContext: await this.r.getExplicitContext(),
							canHandleFilenamesAfterLanguageIds: !0,
							modelDetails: A,
							documentationIdentifiers:
								M.context.selectedDocs?.map((z) => z.docId) ?? [],
							useWeb: M.context.useWeb ? "full_search" : void 0,
							externalLinks: M.context.externalLinks ?? [],
						});
					}
					async P(T, P) {
						const k = [],
							L = P.bubbles[P.bubbles.length - 1].id;
						for (const D of P.bubbles) {
							const M = D.id;
							if (D.type === o.BubbleType.USER_CHAT) {
								const N = await this.n.getCodeChunks(D.context),
									A = await this.n.getCommitDetailsFromPartialCommits(
										D.context.selectedCommits ?? [],
									),
									R = await this.n.getPullRequestDetailsFromPartialPullRequests(
										D.context.selectedPullRequests ?? [],
									),
									O = await this.n.getDiffDetailsFromGitDiff({
										gitDiff: D.context.gitDiff,
										gitDiffFromBranchToMain: D.context.gitDiffFromBranchToMain,
									}),
									B = D.context.selectedImages
										? await this.n.getImagesFromImageSelection({
												setContext: (...H) => {
													this.m.setNotepadsData(
														"notepads",
														T,
														"tabs",
														(q) => q.tabId === P.tabId,
														"bubbles",
														(q) =>
															q.id === M && q.type === o.BubbleType.USER_CHAT,
														...H,
													);
												},
												getContext: () => this.G(T, P.tabId, M).context,
											})
										: [],
									z = (D.context.folderSelections ?? []).map(
										(H) => H.relativePath,
									),
									F = { ...D.context };
								if (M === L) {
									const H = [...(F.notepads ?? []), { notepadId: T }];
									F.notepads = H;
								}
								const x = await this.n.getNotepadsContext(F);
								k.push(
									new p.$SA({
										text: D.text ?? "",
										bubbleId: D.id,
										type: p.ConversationMessage_MessageType.HUMAN,
										attachedCodeChunks: N,
										attachedFolders: z,
										commits: A,
										pullRequests: R,
										gitDiffs: O,
										images: B,
										notepads: x,
									}),
								);
							} else
								D.type === o.BubbleType.AI_CHAT &&
									k.push(
										new p.$SA({
											text: D.text,
											bubbleId: D.id,
											type: p.ConversationMessage_MessageType.AI,
										}),
									);
						}
						return k;
					}
					async deleteNotepad(T) {
						this.m.setNotepadsData("notepads", T, void 0);
						const P = this.q.findEditors(
							t.URI.from({ scheme: y.Schemas.notepad, path: T }),
						);
						for (const k of P) this.q.closeEditor(k);
						$.$gAc.disposeModel(T), this.h.fire(T);
					}
					async openNotepad(T, P) {
						this.openNotepadAsEditor(T), this.f.fire();
					}
					createNotepad(T, P) {
						const k = (0, m.$u9b)(void 0, T);
						return (
							this.m.setNotepadsData("notepads", k.id, k),
							this.openNotepadAsEditor(k.id),
							k.id
						);
					}
					async openNotepadAsEditor(T) {
						const P = this.y(T);
						if (!P) throw new Error(`Notepad with id ${T} not found`);
						const k = h.$6zc.create(P);
						await this.q.openEditor(k, { pinned: !0 });
					}
					getInputDelegate() {
						return this.a;
					}
					isNotepadEnabled() {
						return this.Q;
					}
					setIsNotepadEnabled(T) {
						this.Q = T;
					}
					setHorizontalLinePosition(T) {
						this.R = T;
					}
					getHorizontalLinePosition() {
						return this.R;
					}
					setVerticalLinePosition(T) {
						this.S = T;
					}
					getVerticalLinePosition() {
						return this.S;
					}
					U(T) {
						this.r.streamingAbortControllers.get(T)?.abort(),
							this.r.streamingAbortControllers.delete(T);
					}
					resetTab(T, P) {
						this.N({ notepadId: T, tabId: P });
						const k = (0, m.$r9b)(P);
						this.H(T, P, k);
					}
					createTab(T) {
						const k = this.y(T).selectedTabId,
							L = this.F(T, k);
						if (this.L(T, k)) {
							this.resetTab(T, k);
							return;
						}
						const D = (0, m.$r9b)();
						this.m.setNotepadsData("notepads", T, "tabs", (M) => [D, ...M]),
							this.m.setNotepadsData("notepads", T, "selectedTabId", D.tabId);
					}
					deleteTab(T, P) {
						const k = this.y(T);
						if (!k) {
							console.error(`Notepad with id ${T} not found`);
							return;
						}
						if ((this.N({ notepadId: T, tabId: P }), k.tabs.length === 1)) {
							this.resetTab(T, P);
							return;
						}
						if (k.selectedTabId === P) {
							const L = k.tabs.filter((D) => D.tabId !== P);
							L.length > 0 &&
								this.m.setNotepadsData(
									"notepads",
									T,
									"selectedTabId",
									L[0].tabId,
								);
						}
						this.m.setNotepadsData("notepads", T, "tabs", (L) =>
							L.filter((D) => D.tabId !== P),
						);
					}
					selectPreviousTab(T) {
						const P = this.y(T),
							k = P.selectedTabId;
						let D = P.tabs.findIndex((M) => M.tabId === k) + 1;
						D === P.tabs.length && (D = 0),
							this.m.setNotepadsData(
								"notepads",
								T,
								"selectedTabId",
								P.tabs[D].tabId,
							);
					}
					selectNextTab(T) {
						const P = this.y(T),
							k = P.selectedTabId;
						let D = P.tabs.findIndex((M) => M.tabId === k) - 1;
						D === -1 && (D = P.tabs.length - 1),
							this.m.setNotepadsData(
								"notepads",
								T,
								"selectedTabId",
								P.tabs[D].tabId,
							);
					}
				};
				(e.$AAc = S),
					(e.$AAc = S =
						Ne(
							[
								j(0, w.$lq),
								j(1, d.$y9b),
								j(2, r.$Q9b),
								j(3, a.$IY),
								j(4, n.$Nfc),
								j(5, g.$0zb),
								j(6, v.$6j),
							],
							S,
						)),
					(0, E.$lK)(d.$z9b, S, E.InstantiationType.Delayed);
			},
		),
		