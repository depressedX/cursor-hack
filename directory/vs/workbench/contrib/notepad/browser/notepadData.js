import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/store.js';
import '../../../../base/common/uuid.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../services/selectedContext/browser/selectedContextData.js';
import '../../aichat/browser/chatData.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../../services/selectedContext/browser/utils.js';
import '../../composer/browser/composerData.js';
import '../../composer/browser/constants.js';
define(
			de[1870],
			he([1, 0, 193, 47, 83, 298, 140, 21, 25, 205, 299, 225, 169]),
			function (ce /*require*/,
 e /*exports*/,
 t /*store*/,
 i /*uuid*/,
 w /*utils_pb*/,
 E /*selectedContextData*/,
 C /*chatData*/,
 d /*storage*/,
 m /*workspace*/,
 r /*reactiveStorageTypes*/,
 u /*utils*/,
 a /*composerData*/,
 h /*constants*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$q9b = void 0),
					(e.$r9b = c),
					(e.$s9b = n),
					(e.$t9b = g),
					(e.$u9b = p),
					(e.$v9b = o),
					(e.$w9b = f),
					(e.$x9b = b),
					(e.$q9b = 0);
				function c(s) {
					const l = g();
					return {
						tabId: s ?? (0, i.$9g)(),
						bubbles: [l],
						chatTitle: "New Notepad Chat",
						lastSendTime: void 0,
						tabState: C.TabState.chat,
						lastFocusedBubbleId: l.id,
					};
				}
				function n() {
					return {
						id: (0, i.$9g)(),
						type: C.BubbleType.AI_CHAT,
						messageType: w.PureMessage_MessageType.ASSISTANT,
						text: "",
					};
				}
				function g(s, l) {
					return {
						id: (0, i.$9g)(),
						type: C.BubbleType.USER_CHAT,
						messageType: w.PureMessage_MessageType.USER,
						text: s,
						richText: l,
						context: (0, E.$2gc)(),
					};
				}
				function p(s, l) {
					const y = c();
					return {
						id: s ?? (0, i.$9g)(),
						name: l ?? "New Notepad",
						text: "",
						context: (0, E.$2gc)(),
						tabs: [y],
						selectedTabId: y.tabId,
						createdAt: Date.now(),
						verticalTopPanePercentage: 75,
						bottomRightPanePercentage: 25,
						shouldShowBottomPane: !1,
						inputBoxDelegate: new r.$Zzb(),
						inputBoxDelegateMap: {},
					};
				}
				function o(s, l, y) {
					const $ =
							l.getWorkbenchState() === m.WorkbenchState.EMPTY
								? d.StorageScope.APPLICATION
								: d.StorageScope.WORKSPACE,
						v = s.get(y, $);
					let S = { notepads: {} };
					if (v)
						try {
							(S = JSON.parse(v)), S.notepads || (S.notepads = {});
							for (const P in S.notepads) {
								const k = S.notepads[P];
								if (
									((k.inputBoxDelegate = new r.$Zzb()),
									(k.inputBoxDelegateMap = {}),
									(k.context = (0, u.$ahc)(k.context)),
									k.tabs.length === 0)
								) {
									const L = c();
									k.tabs.push(L), (k.selectedTabId = L.tabId);
								} else k.selectedTabId || (k.selectedTabId = k.tabs[0].tabId);
								k.tabs.find((L) => L.tabId === k.selectedTabId) ||
									(k.selectedTabId = k.tabs[0].tabId);
								for (const L of k.tabs) {
									L.bubbles.length === 0 && L.bubbles.push(g());
									for (const D of L.bubbles)
										k.inputBoxDelegateMap[D.id] ||
											(k.inputBoxDelegateMap[D.id] = new r.$Zzb()),
											D.type === C.BubbleType.USER_CHAT &&
												(D.context
													? (D.context = (0, u.$ahc)(D.context))
													: (D.context = (0, E.$2gc)()));
									L.bubbles[L.bubbles.length - 1].type ===
										C.BubbleType.AI_CHAT && L.bubbles.push(g());
								}
								(k.verticalTopPanePercentage =
									k.verticalTopPanePercentage ?? 75),
									(k.bottomRightPanePercentage =
										k.bottomRightPanePercentage ?? 25),
									(k.shouldShowBottomPane = k.shouldShowBottomPane ?? !0);
							}
						} catch (P) {
							console.error(
								"[notepad] Failed to parse stored notepad data:",
								P,
							);
						}
					const [I, T] = (0, t.createStore)(S);
					return [I, T];
				}
				function f(s, l, y, $) {
					if (s.hasMigratedComposerProjects) return;
					let v = y.get(
						h.COMPOSER_PROJECTS_REACTIVE_STORAGE_ID,
						(0, a.getComposerDataStorageScope)($),
					);
					if (!v) return;
					let S;
					try {
						const I = JSON.parse(v);
						if (!Array.isArray(I))
							throw new Error("Parsed composer projects data is not an array");
						S = I.map((T) => {
							const P = p(void 0, T.name);
							if (
								((P.text = T.text ?? ""),
								(P.createdAt = T.createdAt ?? Date.now()),
								(P.lastUpdatedAt = T.lastUpdatedAt),
								T.focusedFiles)
							) {
								P.context.fileSelections = T.focusedFiles.map((L) => ({
									uri: L.uri,
								}));
								const k = {};
								T.focusedFiles.forEach((L) => {
									if (L.decorations) {
										const D = (0, E.$Zgc)("fileSelections", { uri: L.uri });
										k[D] = L.decorations.map((M) => ({
											uuid: M.decorationId,
											defaultRange: M.defaultRange
												? {
														startLineNumber: M.defaultRange.startLineNumber,
														startColumn: M.defaultRange.startColumn,
														endLineNumber: M.defaultRange.endLineNumber,
														endColumn: M.defaultRange.endColumn,
													}
												: void 0,
										}));
									}
								}),
									(P.context.mentions.fileSelections = k);
							}
							return (
								T.codeSelections && (P.context.selections = T.codeSelections), P
							);
						});
					} catch (I) {
						console.error(
							"[notepad] Failed to parse stored composer projects:",
							I,
						),
							(S = void 0);
					}
					console.log("[notepad] newNotepads", S),
						S &&
							S.forEach((I) => {
								l("notepads", I.id, I);
							}),
						l("hasMigratedComposerProjects", !0);
				}
				function b(s, l, y) {
					s.remove(y, (0, a.getComposerDataStorageScope)(l));
				}
			},
		)
