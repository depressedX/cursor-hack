define(
			de[4408],
			he([
				1, 0, 14, 12, 11, 31, 8, 418, 140, 100, 4407, 58, 1307, 4, 337, 679, 9,
				480, 118, 47, 308, 581,
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
				if ((Object.defineProperty(e, "__esModule", { value: !0 }), i.$n)) {
					class M extends w.$3X {
						constructor() {
							super({
								id: "aichat.settingsIcon",
								title: "Settings",
								f1: !1,
								icon: t.$ak.settingsGear,
								menu: { id: w.$XX.ViewTitle, group: "navigation" },
							});
						}
						run(A, ...R) {
							A.get(E.$ek).executeCommand(a.$QV);
						}
					}
					(0, w.$4X)(M);
				}
				class y extends w.$3X {
					constructor() {
						super({
							id: a.$nX,
							title: {
								value: "Add Everything About Symbol to New Chat",
								original: "Add Everything About Symbol to New Chat",
							},
							f1: !1,
						});
					}
					async run(N, A, ...R) {
						const O = N.get(d.$qgc),
							B = N.get(n.$kgc),
							U = A?.symbolContext?.definitions,
							z = A?.symbolContext?.implementations;
						await O.show();
						const F = B.chatData.selectedTabId ?? B.chatData.tabs[0].tabId,
							x = B.chatData.tabs
								.find((V) => V.tabId === F)
								?.bubbles.at(-1)?.id,
							H = [];
						for (const V of U ?? []) {
							if (V.uriComponents === void 0 || V.symbol?.range === void 0)
								continue;
							const G = {
								selectionStartLineNumber: V.symbol?.range.startLineNumber,
								selectionStartColumn: V.symbol?.range.startColumn,
								positionLineNumber: V.symbol?.range.endLineNumber,
								positionColumn: V.symbol?.range.endColumn,
							};
							H.push({
								uri: p.URI.from(V.uriComponents),
								range: G,
								text: V.textInSymbolRange,
							});
						}
						for (const V of z ?? []) {
							if (V.uriComponents === void 0 || V.symbol?.range === void 0)
								continue;
							const G = {
								selectionStartLineNumber: V.symbol?.range.startLineNumber,
								selectionStartColumn: V.symbol?.range.startColumn,
								positionLineNumber: V.symbol?.range.endLineNumber,
								positionColumn: V.symbol?.range.endColumn,
							};
							H.push({
								uri: p.URI.from(V.uriComponents),
								range: G,
								text: V.textInSymbolRange,
							});
						}
						const q = A?.gitCommits?.map((V) => ({
							message: V.message,
							sha: V.sha,
							uuid: (0, b.$9g)(),
						}));
						B.setChatData(
							"tabs",
							(V, G) => V.tabId === F,
							"bubbles",
							(V, G) => V.id === x && V.type === "user",
							"selections",
							(V) => (V == null ? H : [...V, ...H]),
						),
							B.setChatData(
								"tabs",
								(V, G) => V.tabId === F,
								"bubbles",
								(V, G) => V.id === x && V.type === "user",
								"selectedCommits",
								(V) => (V == null ? q : [...V, ...q]),
							),
							await O.focus();
					}
				}
				(0, w.$4X)(y);
				class $ extends w.$3X {
					constructor() {
						super({
							id: a.$eX,
							title: { value: g.$L0b, original: g.$L0b },
							f1: !0,
						});
					}
					async run(N, ...A) {
						const R = N.get(d.$qgc);
						N.get(s.$5X).registerEvent("chat.open.normal"),
							await R.show(),
							R.focus({ inChatDontFocusBubble: !0 });
					}
				}
				(0, w.$4X)($);
				class v extends w.$3X {
					constructor() {
						super({ id: a.$iX, title: { value: "", original: "" }, f1: !1 });
					}
					async run(N, A, R, O, ...B) {
						N.get(n.$kgc).setChatData(
							"tabs",
							(z, F) => z.tabId === A,
							"bubbles",
							(z, F) => z.id === R && z.type === "user",
							"codebaseResults",
							O.filter((z) => z !== void 0 && z.contents.length < 2e4) ?? [],
						);
					}
				}
				(0, w.$4X)(v);
				class S extends w.$3X {
					constructor() {
						super({
							id: a.$jX,
							title: {
								value: "Add Files to Chat",
								original: "Add Files to Chat",
							},
							f1: !1,
						});
					}
					async run(N, A, ...R) {
						const O = N.get(n.$kgc),
							B = N.get(d.$qgc);
						if ((await B.show(), A instanceof p.URI)) {
							const U = O.chatData.selectedTabId ?? O.chatData.tabs[0].tabId,
								z = O.chatData.tabs
									.find((F) => F.tabId === U)
									?.bubbles.at(-1)?.id;
							O.setChatData(
								"tabs",
								(F, x) => F.tabId === U,
								"bubbles",
								(F, x) => F.id === z && F.type === "user",
								"fileSelections",
								(F) =>
									F == null
										? [{ uri: A }]
										: F.find((H) => H.uri.toString() === A.toString())
											? F
											: [...F, { uri: A }],
							),
								B.focus();
						}
					}
				}
				(0, w.$4X)(S);
				class I extends w.$3X {
					constructor() {
						super({
							id: a.$kX,
							title: {
								value: "Add Files to New Chat",
								original: "Add Files to Chat",
							},
							f1: !1,
						});
					}
					async run(N, A, ...R) {
						const O = N.get(E.$ek);
						A instanceof p.URI &&
							(O.executeCommand(a.$dX), O.executeCommand(a.$jX, A));
					}
				}
				(0, w.$4X)(I);
				class T extends w.$3X {
					constructor() {
						super({ id: a.$zV, title: { value: "", original: "" }, f1: !1 });
					}
					run(N, A) {
						const R = A.bubbleID,
							O = A.tabID,
							B = A.chatType;
						if (R === void 0 || O === void 0 || B === void 0)
							throw new Error("Missing arguments");
						const U = { ...A, chatType: B, bubbleID: R, tabID: O };
						N.get(d.$qgc).submitUnifiedChat(U);
					}
				}
				(0, w.$4X)(T);
				class P extends w.$3X {
					constructor() {
						super({
							id: m.$Hgc,
							title: {
								value: "Apply Slash Edit",
								original: "Apply Slash Edit",
							},
							f1: !1,
						});
					}
					async run(N, A, R, O, ...B) {
						console.log("SlashEditButtonAction", A, R, O);
						const U = N.get(n.$kgc),
							z = N.get(f.$Nfc),
							F = N.get(d.$qgc),
							x = N.get(o.$$9b),
							H =
								O?.tabId ??
								(U.chatData.selectedTabId || U.chatData.tabs[0].tabId),
							q = U.chatData.tabs.find((J) => J.tabId === H),
							V =
								O?.bubbleId ??
								q?.bubbles
									.slice()
									.reverse()
									.find((J) => J.type === m.BubbleType.AI_CHAT)?.id;
						if (V === void 0 || q?.tabId === void 0) return;
						const G = await F.makeChatRequestParams({
							bubbleID: V,
							chatType: "edit",
							tabID: q.tabId,
							enforceUpUntil: !0,
						});
						if (G?.conversationHistory === void 0) return;
						O?.generationUUID && (G.generationUUID = O.generationUUID);
						const K = z.getModelDetails({ specificModelField: "regular-chat" });
						(K.modelName = "gpt-3.5-turbo"),
							await x.performChatEdit({
								...G,
								source: O?.isBackgroundApply
									? l.FastApplySource.CACHED_APPLY
									: l.FastApplySource.CLICKED_APPLY,
								generationMetadata: {
									...G.generationMetadata,
									isBackground: O?.isBackgroundApply === !0,
								},
								options: {
									...G.options,
									overrideCurrentFileURI: A,
									overrideLineRange: R,
									failSilently: O?.isBackgroundApply === !0,
									overrideModelDetails: O?.use35 ? K : void 0,
									rejectChangesInURI: O?.rejectChangesInURI,
								},
								clickedCodeBlockContents: O?.clickedCodeBlockContents,
								specificInstructions: O?.specificInstructions,
								inlineDiffServiceLookalike: O?.inlineDiffServiceLookalike,
								isBackgroundApply: O?.isBackgroundApply,
								onStreamerCreated: O?.onStreamerCreated,
								existingStreamer: O?.existingStreamer,
								isReapply: O?.isReapply,
							});
					}
				}
				class k extends w.$3X {
					constructor() {
						super({
							id: m.$Igc,
							title: { value: "Warm Fast Apply", original: "Warm Fast Apply" },
							f1: !1,
						});
					}
					async run(N, A, R, ...O) {
						const B = N.get(n.$kgc),
							U = N.get(d.$qgc),
							z = N.get(o.$$9b),
							F =
								R?.tabId ??
								(B.chatData.selectedTabId || B.chatData.tabs[0].tabId),
							x = B.chatData.tabs.find((V) => V.tabId === F),
							H =
								R?.bubbleId ??
								x?.bubbles
									.slice()
									.reverse()
									.find((V) => V.type === m.BubbleType.AI_CHAT)?.id;
						if (H === void 0 || x?.tabId === void 0) return;
						const q = await U.makeChatRequestParams({
							bubbleID: H,
							chatType: "edit",
							tabID: x.tabId,
							enforceUpUntil: !0,
						});
						q?.conversationHistory !== void 0 &&
							(R?.generationUUID && (q.generationUUID = R.generationUUID),
							await z.warmFastApply({
								uri: A,
								conversationHistory: q.conversationHistory,
								generationUUID: R?.generationUUID ?? (0, b.$9g)(),
								source: l.FastApplySource.CACHED_APPLY,
							}));
					}
				}
				class L extends w.$3X {
					constructor() {
						super({
							id: a.$$W,
							title: {
								value: "Start Indexing Listener",
								original: "Start Indexing Listener",
							},
						});
					}
					run(N, A, ...R) {
						N.get(d.$qgc)?.startIndexingListener(A);
					}
				}
				(0, w.$4X)(L), (0, w.$4X)(P), (0, w.$4X)(k);
				class D extends w.$3X {
					constructor() {
						super({
							id: "aichat.fixspecificerrormessage",
							title: {
								value: "Investigate Error",
								original: "Investigate Error",
							},
							f1: !1,
						});
					}
					async run(N, A) {
						const R = N.get(d.$qgc);
						await R.show(),
							await R.focus(),
							(0, u.$ncc)(A) && R?.tryInsertErrorIntoChat(A);
					}
				}
				(0, w.$4X)(D),
					w.$ZX.appendMenuItems([
						{
							id: w.$XX.LayoutControlMenu,
							item: {
								group: "0_workbench_toggles",
								command: {
									id: h.$O5b.ID,
									title: (0, c.localize)(4428, null),
									icon: t.$ak.layoutSidebarLeftOff,
									toggled: { condition: r.$sQb, icon: t.$ak.layoutSidebarLeft },
								},
								when: C.$Kj.and(
									C.$Kj.or(
										C.$Kj.equals(
											"config.workbench.layoutControl.type",
											"toggles",
										),
										C.$Kj.equals("config.workbench.layoutControl.type", "both"),
									),
									C.$Kj.equals("config.workbench.sideBar.location", "right"),
								),
								order: 0,
							},
						},
						{
							id: w.$XX.LayoutControlMenu,
							item: {
								group: "0_workbench_toggles",
								command: {
									id: h.$O5b.ID,
									title: (0, c.localize)(4429, null),
									icon: t.$ak.layoutSidebarRightOff,
									toggled: {
										condition: r.$sQb,
										icon: t.$ak.layoutSidebarRight,
									},
								},
								when: C.$Kj.and(
									C.$Kj.or(
										C.$Kj.equals(
											"config.workbench.layoutControl.type",
											"toggles",
										),
										C.$Kj.equals("config.workbench.layoutControl.type", "both"),
									),
									C.$Kj.equals("config.workbench.sideBar.location", "left"),
								),
								order: 2,
							},
						},
					]);
			},
		),
		