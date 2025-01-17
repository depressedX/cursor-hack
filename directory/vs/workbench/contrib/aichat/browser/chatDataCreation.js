import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/workspace/common/workspace.js';
import './chatData.js';
import '../../../../../external/solid/store.js';
import '../../../../base/common/uuid.js';
import '../../../../base/common/constants.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../services/selectedContext/browser/selectedContextData.js';
import '../../../../platform/reactivestorage/browser/stateMigrations.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../composer/browser/utils.js';
define(
			de[1869],
			he([1, 0, 21, 25, 140, 193, 47, 58, 83, 298, 1626, 205, 246]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qIb = c),
					(e.$rIb = n),
					(e.$sIb = p),
					(e.$tIb = o);
				function c(f) {
					return f.getWorkbenchState() === i.WorkbenchState.EMPTY
						? t.StorageScope.APPLICATION
						: t.StorageScope.WORKSPACE;
				}
				function n(f, b, s) {
					f.remove(s, c(b));
				}
				function g(f) {
					const b = f[0];
					if (!b || b.messageType !== m.PureMessage_MessageType.USER)
						return "New chat";
					const s = b.text ?? "";
					return s
						? s.length > 300
							? s.slice(0, 300) + "..."
							: s
						: "New chat";
				}
				function p(f, b) {
					f.codeInterpreterTabs || (f.codeInterpreterTabs = []),
						f.editorContext || (f.editorContext = b);
					for (let l of f.tabs) {
						if (l.bubbles.length > 0) {
							let y = l.bubbles;
							for (let $ of y)
								if (
									($.type === "user" && !$.selections && ($.selections = []),
									$.type === "user")
								)
									if (
										("delegate" in $ &&
											"initText" in $ &&
											($.richText = $.initText),
										$.messageType ||
											($.messageType = m.PureMessage_MessageType.USER),
										$.image && ($.selectedImages = [$.image]),
										!$.mentions)
									)
										$.mentions = (0, r.$3gc)();
									else
										try {
											if (
												!Object.entries($.mentions).every(([S, I]) =>
													(0, r.$Ygc)(S)
														? typeof I == "object" &&
															Object.values(I).every(
																(T) =>
																	Array.isArray(T) &&
																	T.every(
																		(P) => typeof P == "object" && "uuid" in P,
																	),
															)
														: Array.isArray(I) &&
															I.every(
																(T) => typeof T == "object" && "uuid" in T,
															),
												)
											) {
												const S = (0, r.$3gc)();
												for (const I in $.mentions)
													if ((0, r.$Ygc)(I)) {
														S[I] = {};
														const T = $.mentions[I];
														if (typeof T == "object" && T !== null)
															for (const P in T) {
																const k = T[P];
																Array.isArray(k) &&
																	(S[I] || (S[I] = {}),
																	(S[I][P] = k
																		.filter((L) => typeof L == "string")
																		.map((L) => ({ uuid: L }))));
															}
													} else {
														const T = $.mentions[I];
														Array.isArray(T) &&
															(S[I] = T.filter((P) => typeof P == "string").map(
																(P) => ({ uuid: P }),
															));
													}
												$.mentions = S;
											}
										} catch (v) {
											console.error("[aichat] Error migrating mentions", v),
												($.mentions = (0, r.$3gc)());
										}
								else
									$.type === "ai" &&
										("rawText" in $ &&
											$.rawText &&
											!("text" in $) &&
											($.text = $.rawText),
										$.messageType ||
											($.messageType = m.PureMessage_MessageType.ASSISTANT),
										(!("codeBlocks" in $) || !$.codeBlocks) &&
											($.codeBlocks = []));
						}
						l.tabId
							? l.tabState || (l.tabState = w.TabState.chat)
							: (l.tabId = (0, C.$9g)()),
							(l.editingBubbleId = void 0),
							(l.selectedBubbleId = void 0),
							!l.lastFocusedBubbleId &&
								l.bubbles.length > 0 &&
								(l.lastFocusedBubbleId = l.bubbles[l.bubbles.length - 1].id);
					}
					for (let l of f.codeInterpreterTabs)
						if (l.bubbles.length > 0) {
							let y = l.bubbles;
							for (let $ of y)
								$.serverMessages === void 0 && ($.serverMessages = []);
						}
					f.pinnedContexts ||
						(f.pinnedContexts = { fileSelections: [], codeSelections: [] });
					const s = [
						"tabs",
						u.SpecialCase.array,
						"bubbles",
						u.SpecialCase.array,
						"selections",
					];
					return (
						(0, u.$Xzb)({
							origObject: f,
							pathToKey: s,
							keyToRemove: u.SpecialCase.array,
							cutoffSize: 5e5,
						}),
						f
					);
				}
				function o(f, b, s, l, y, $) {
					const v = f.get(y, c(l));
					let S;
					if (v)
						try {
							(S = JSON.parse(v)), S && (S = p(S, $));
						} catch (A) {
							console.error("Error parsing chat data", A), (S = void 0);
						}
					const [I, T] = (0, E.createStore)({
							tabs: [],
							codeInterpreterTabs: [],
							selectedTabId: "",
							displayTabs: !1,
							editorContext: $,
							debugPromptVisible: !1,
							pinnedContexts: { fileSelections: [], codeSelections: [] },
							inputBoxDelegate: new a.$Zzb(),
							inputBoxDelegateMap: {},
						}),
						P = s?.getValue(d.$nW) ?? !1;
					if (S) {
						!S.selectedTabId &&
							S.tabs.length > 0 &&
							(S.selectedTabId = S.tabs[0].tabId);
						const A = S.tabs.find((O) => O.tabId === S.selectedTabId),
							R = A?.lastFocusedBubbleId || A?.bubbles[A.bubbles.length - 1].id;
						T(S),
							T(
								"tabs",
								(O) => O.tabId === S.selectedTabId,
								"bubbles",
								(O) => O.id === R,
								"useWeb",
								P,
							);
					} else {
						const A = (0, C.$9g)(),
							R =
								b.applicationUserPersistentStorage.isDebuggerMode === !0 &&
								b.applicationUserPersistentStorage,
							O = (0, h.createUserBubble)();
						T("tabs", [
							{
								tabId: A,
								tabState: w.TabState.chat,
								chatTitle: void 0,
								bubbles: [O],
								longContextModeEnabled:
									b.applicationUserPersistentStorage.isLongContextMode === !0,
								debuggerData: R ? {} : void 0,
								selectedBubbleId: void 0,
								editingBubbleId: void 0,
								lastFocusedBubbleId: O.id,
							},
						]),
							T("selectedTabId", A);
					}
					const k = (A) => {
							let R =
								I.selectedTabId ||
								I.tabs[0].tabId ||
								I.codeInterpreterTabs[0].tabId;
							const O =
								I.tabs.find((B) => B.tabId === R) ??
								I.codeInterpreterTabs.find((B) => B.tabId === R) ??
								I.tabs[0] ??
								I.codeInterpreterTabs[0];
							A && L(R);
						},
						L = (A) => {
							let R = !0;
							const O =
								I.tabs.find((B) => B.tabId === A) ??
								I.codeInterpreterTabs.find((B) => B.tabId === A) ??
								I.tabs[0];
							for (const B of O.bubbles)
								B.messageType === m.PureMessage_MessageType.USER &&
									B.text !== "" &&
									(R = !1);
							if (!R && !O.chatTitle) {
								const B = g(O.bubbles);
								T(
									O.tabState === w.TabState.chat
										? "tabs"
										: "codeInterpreterTabs",
									(U, z) => U.tabId === A,
									"chatTitle",
									B,
								);
							}
						},
						D = () => {
							T("tabs", (A) =>
								[...A].sort((O, B) =>
									O.lastSendTime && B.lastSendTime
										? B.lastSendTime - O.lastSendTime
										: O.lastSendTime
											? -1
											: B.lastSendTime
												? 1
												: 0,
								),
							);
						},
						M =
							b.applicationUserPersistentStorage.isDebuggerMode === !0 &&
							b.applicationUserPersistentStorage,
						N = () => {
							const A = (0, C.$9g)(),
								R = (0, h.createUserBubble)();
							return (
								T("tabs", [
									{
										tabId: A,
										tabState: w.TabState.chat,
										chatTitle: void 0,
										bubbles: [R],
										longContextModeEnabled:
											b.applicationUserPersistentStorage.isLongContextMode ===
											!0,
										debuggerData: M ? {} : void 0,
										selectedBubbleId: void 0,
										editingBubbleId: void 0,
										lastFocusedBubbleId: R.id,
									},
								]),
								T("selectedTabId", A),
								I.tabs[0]
							);
						};
					return D(), [I, T, k, D, N];
				}
			},
		),
		