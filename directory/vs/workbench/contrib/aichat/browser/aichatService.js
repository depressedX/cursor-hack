import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/solid.js';
import '../../../../../proto/aiserver/v1/uploadserver_pb.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/services/markerDecorations.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../../../platform/reactivestorage/browser/reducerService.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/tooltipService/common/tooltipService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../aiCpp/browser/cppEventLogger.js';
import './aichat.js';
import './aichatEditor.js';
import './chatDataService.js';
import './codeSelections.js';
import '../../debug/common/debug.js';
import '../../notebook/browser/notebookBrowser.js';
import '../../terminal/browser/terminal.js';
import '../../../services/ai/browser/advancedContextService.js';
import '../../../services/ai/browser/aiService.js';
import '../../../services/ai/browser/cursorProMarketingService.js';
import '../../../services/ai/browser/fastEditService.js';
import '../../../services/ai/browser/gitContextService.js';
import '../../../services/ai/browser/repositoryService.js';
import '../../../services/ai/browser/toolformerService.js';
import '../../../services/ai/browser/utils.js';
import '../../../services/ai/common/dataScrubbingService.js';
import '../../../services/aiErrors/browser/aiErrorService.js';
import '../../../services/aiSettings/browser/aiSettingsService.js';
import '../../../services/aiTasks/browser/aiTaskServiceInterface.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/js/browser/jsService.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../services/views/common/viewsService.js';
import './aichatSolidEntrypoint.js';
import './chatData.js';
import '../../../services/ai/browser/fastContextService.js';
import '../../../services/magicLink/browser/magicLinkService.js';
import './utils.js';
import '../../../../base/common/path.js';
import '../../../services/ai/browser/aiFileInfoService.js';
import '../../../../base/common/constants.js';
import '../../contextGraph/browser/gitGraphService.js';
import '../../../../base/common/resources.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../aiFeatureStatusService/browser/aiFeatureStatusService.js';
import '../../../services/selectedContext/browser/selectedContext.js';
import '../../../services/selectedContext/browser/selectedContextData.js';
import '../../../../platform/aiAssert/browser/aiAssertService.js';
import '../../../../base/common/network.js';
import '../../notepad/browser/notepad.js';
import '../../../../base/common/types.js';
import '../../ui/browser/utils.js';
import '../../composer/browser/utils.js';
import './chatDataCreation.js';
import '../../../../platform/files/common/files.js';
import '../../recentFilesTrackerService/browser/recentFilesTrackerService.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../utils/browser/chatAndComposerSuggestedFileReranking.js';
define(
			de[4407],
			he([
				1, 0, 13, 735, 83, 7, 6, 3, 59, 9, 47, 65, 17, 496, 42, 204, 31, 10, 8,
				280, 20, 5, 180, 90, 45, 205, 669, 134, 21, 32, 308, 25, 332, 418, 1927,
				337, 354, 112, 108, 107, 1931, 118, 1874, 480, 359, 226, 1054, 191, 356,
				401, 315, 516, 66, 18, 832, 96, 89, 4406, 140, 400, 241, 397, 54, 837,
				58, 715, 19, 155, 287, 271, 298, 668, 23, 467, 28, 476, 246, 1869, 22,
				560, 27, 43, 1007,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*solid*/,
				i /*uploadserver_pb*/,
				w /*utils_pb*/,
				E /*dom*/,
				C /*event*/,
				d /*lifecycle*/,
				m /*map*/,
				r /*uri*/,
				u /*uuid*/,
				a /*codeEditorService*/,
				h /*range*/,
				c /*markerDecorations*/,
				n /*resolverService*/,
				g /*outlineModel*/,
				p /*commands*/,
				o /*configuration*/,
				f /*contextkey*/,
				b /*aiEverythingProviderService*/,
				s /*extensions*/,
				l /*instantiation*/,
				y /*layoutService*/,
				$ /*markers*/,
				v /*reactiveStorageService*/,
				S /*reactiveStorageTypes*/,
				I /*reducerService*/,
				T /*reactiveStorageTypes*/,
				P /*storage*/,
				k /*telemetry*/,
				L /*tooltipService*/,
				D /*workspace*/,
				M /*cppEventLogger*/,
				N /*aichat*/,
				A /*aichatEditor*/,
				R /*chatDataService*/,
				O /*codeSelections*/,
				B /*debug*/,
				U /*notebookBrowser*/,
				z /*terminal*/,
				F /*advancedContextService*/,
				x /*aiService*/,
				H /*cursorProMarketingService*/,
				q /*fastEditService*/,
				V /*gitContextService*/,
				G /*repositoryService*/,
				K /*toolformerService*/,
				J /*utils*/,
				W /*dataScrubbingService*/,
				X /*aiErrorService*/,
				Y /*aiSettingsService*/,
				ie /*aiTaskServiceInterface*/,
				ne /*editorGroupsService*/,
				ee /*editorService*/,
				_ /*jsService*/,
				te /*layoutService*/,
				Q /*viewsService*/,
				Z /*aichatSolidEntrypoint*/,
				se /*chatData*/,
				re /*fastContextService*/,
				le /*magicLinkService*/,
				oe /*utils*/,
				ae /*path*/,
				pe /*aiFileInfoService*/,
				$e /*constants*/,
				ye /*gitGraphService*/,
				ue /*resources*/,
				fe /*undoRedo*/,
				me /*aiFeatureStatusService*/,
				ve /*selectedContext*/,
				ge /*selectedContextData*/,
				be /*aiAssertService*/,
				Ce /*network*/,
				Le /*notepad*/,
				Fe /*types*/,
				Oe /*utils*/,
				xe /*utils*/,
				He /*chatDataCreation*/,
				Ke /*files*/,
				Je /*recentFilesTrackerService*/,
				Te /*keyCodes*/,
				Ee /*keybindingsRegistry*/,
				Ie /*chatAndComposerSuggestedFileReranking*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qcc = e.$pcc = void 0),
					(e.$ncc = ke),
					(e.$occ = Ue),
					(E = mt(E));
				const Be = 15;
				function Se() {
					const Me = E.$Ngb();
					return (
						!!Me.activeElement &&
						(Me.activeElement.tagName === "INPUT" ||
							Me.activeElement.tagName === "TEXTAREA")
					);
				}
				function ke(Me) {
					return Me && typeof Me.marker == "object";
				}
				async function* Ue(Me) {
					let De = "default",
						Re = 0,
						je = "",
						Ve = "";
					for await (const Ze of Me)
						for (const et of Ze)
							yield { type: "normal", value: et },
								De === "default"
									? et === "`" && ((De = "awaitingstartingbacktick"), (Re = 1))
									: De === "awaitingstartingbacktick"
										? et === "`"
											? (Re++,
												Re === 3 && ((De = "awaitingnewline"), (je = "")))
											: (De = "default")
										: De === "awaitingnewline"
											? et ===
												`
`
												? je.trim() === "bash"
													? ((De = "awaitingendingbackticks"), (Re = 0))
													: (De = "default")
												: (je += et)
											: De === "awaitingendingbackticks" &&
												(et === "`"
													? (Re++, Re === 3 && (De = "found"))
													: ((Re = 0), (Ve += et))),
								De === "found" && (yield { type: "bash", value: Ve });
				}
				let qe = class extends d.$1c {
					static {
						this.Id = N.AIChatConstants.CHAT_VIEW_ID;
					}
					constructor(
						De,
						Re,
						je,
						Ve,
						Ze,
						et,
						rt,
						ft,
						bt,
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
						Kt,
						di,
						Ye,
						ze,
						Xe,
						It,
						Lt,
						xt,
						Vt,
						Bt,
						Gt,
						Mt,
						Ut,
						ei,
						mi,
						ii,
						Dt,
						Jt,
						si,
						Zt,
						ci,
						ri,
						$i,
						Wt,
						tt,
						at,
						pi,
						Li,
						Di,
					) {
						super(),
							(this.y = De),
							(this.z = Re),
							(this.C = je),
							(this.F = Ve),
							(this.G = Ze),
							(this.H = et),
							(this.I = rt),
							(this.J = ft),
							(this.L = bt),
							(this.M = nt),
							(this.N = lt),
							(this.O = ct),
							(this.P = gt),
							(this.Q = ht),
							(this.R = Rt),
							(this.S = Nt),
							(this.U = jt),
							(this.W = ti),
							(this.X = kt),
							(this.Y = hi),
							(this.Z = Kt),
							(this.$ = di),
							(this.ab = Ye),
							(this.bb = ze),
							(this.cb = Xe),
							(this.db = It),
							(this.eb = Lt),
							(this.fb = xt),
							(this.gb = Vt),
							(this.hb = Bt),
							(this.ib = Gt),
							(this.jb = Mt),
							(this.kb = Ut),
							(this.lb = ei),
							(this.mb = mi),
							(this.nb = ii),
							(this.ob = Dt),
							(this.pb = Jt),
							(this.qb = si),
							(this.rb = Zt),
							(this.sb = ci),
							(this.tb = ri),
							(this.ub = $i),
							(this.vb = Wt),
							(this.wb = tt),
							(this.xb = at),
							(this.yb = pi),
							(this.zb = Li),
							(this.Ab = Di),
							(this.h = new d.$Zc()),
							(this.j = new d.$Zc()),
							(this.n = new d.$2c()),
							(this.s = this.D(new C.$re())),
							(this.onContextRemoved = this.s.event),
							(this.u = this.D(new C.$re())),
							(this.onContextAdded = this.u.event),
							(this.w = this.D(new C.$re())),
							(this.onShouldShowPreview = this.w.event),
							(this.Wb = []),
							(this.Xb = 60 * 1e3),
							(this.Yb = 10),
							(this.tabIDToQueuedFollowupID = new m.$Jc(1e3)),
							(this.generationIDsWithNoFollowup = new m.$Jc(100)),
							this.P.activate(),
							(this.q = this.D(this.Q.createScoped(this))),
							this.D(
								rt.onDidChangeContext((Gi) => {
									Gi.affectsSome(new Set([N.$sgc.key])) &&
										this.Y.setChatData("displayTabs", this.gb.historyVisible());
								}),
							),
							this.Y.setChatData("displayTabs", this.gb.historyVisible()),
							this.D(
								Re.onDidActiveEditorChange(() => {
									this.Y.setChatData(
										"editorContext",
										this.getChatEditorContext(),
									);
								}),
							),
							this.D(
								lt.addInsertErrorIntoChatCallback((Gi) => {
									(async () => {
										await this.show(),
											await this.focus(),
											this.insertErrorIntoChat(Gi);
									})().catch((qi) => console.error(qi));
								}),
							),
							this.D(
								lt.addInsertExplainSymbolIntoChatCallback((Gi) =>
									this.insertExplainSymbolIntoChat(Gi),
								),
							),
							this.D(
								lt.addInsertIntoChatCallback((Gi) => this.insertIntoChat(Gi)),
							),
							this.Sb();
						const Ui = "workbench.sideBar.location",
							Wi = this.pb.getValue(Ui);
						this.Q.setNonPersistentStorage(
							"reactivePrimaryBarLocation",
							Wi === "left" ? "left" : "right",
						),
							this.D(
								this.pb.onDidChangeConfiguration((Gi) => {
									if (Gi.affectsConfiguration(Ui)) {
										const qi = this.pb.getValue(Ui);
										this.Q.setNonPersistentStorage(
											"reactivePrimaryBarLocation",
											qi === "left" ? "left" : "right",
										);
									}
									if (Gi.affectsConfiguration($e.$nW)) {
										const qi = this.pb.getValue($e.$nW);
										this.Jb({ useWeb: qi });
									}
								}),
							),
							this.D(
								this.db.onDidActiveEditorChange((Gi) => {
									const qi = this.Bb,
										Oi = qi.lastFocusedBubbleId
											? this.Gb(qi.tabId, qi.lastFocusedBubbleId)
											: qi.bubbles[qi.bubbles.length - 1];
									Oi.type === "user" &&
										this.refreshReactiveContextItem(qi.tabId, Oi.id);
								}),
							),
							this.D(
								this.u.event((Gi) => {
									this.handleUserDidChangeContext(Gi.tabId, Gi.bubbleId);
								}),
							),
							this.D(
								this.s.event((Gi) => {
									this.handleUserDidChangeContext(Gi.tabId, Gi.bubbleId);
								}),
							),
							this.removeNonExistentNotepads(this.Bb.tabId, this.Ib.id),
							this.D(
								Ee.$TX.registerKeybindingRule({
									id: "aichat.newChat",
									primary: Te.KeyMod.CtrlCmd | Te.KeyCode.KeyN,
									when: f.$Kj.equals(
										"focusedView",
										N.AIChatConstants.CHAT_VIEW_ID,
									),
									weight: Ee.KeybindingWeight.CursorMaxPriority,
								}),
							),
							this.D(
								p.$fk.registerCommand("aichat.newChat", () => {
									this.newChat({ autofocus: !0 });
								}),
							);
					}
					get Bb() {
						if (!this.Y.selectedTab)
							throw new Error("[aichat] No current tab available");
						return this.Y.selectedTab;
					}
					async getSortedCandidateFilesForBubble(De, Re) {
						const je = this.ub.getRecentlyViewedFiles(Ie.$h0b),
							Ve = await this.getGitGraphFileSuggestionsForBubble(
								De,
								Re,
								Ie.$j0b,
							),
							Ze = await this.ob.onlyLocalProvider?.runCommand(
								T.EditHistoryActions.CompileGlobalDiffTrajectories,
								{},
							);
						if (!Ve)
							return je.map((lt) => ({ uri: r.URI.revive(lt.uri), score: 1 }));
						let et = await this.makeChatRequestParams({
							tabID: De,
							bubbleID: Re,
							chatType: "chat",
						});
						const rt = et?.generationMetadata?.currentFile,
							ft = et?.conversationHistory,
							bt = this.Gb(De, Re),
							nt =
								(bt.text === void 0 || bt.text.trim().length === 0) &&
								this.Bb.bubbles.length === 1;
						return await (0, Ie.$l0b)(
							Ze,
							Ve,
							je,
							[],
							nt,
							rt,
							ft,
							await this.G.aiClient(),
							this.$,
							this.Ab,
						);
					}
					Cb(De, Re) {
						return (this.Gb(De, Re).text?.trim() ?? "").length === 0;
					}
					Db(De) {
						this.Y.updateSelectedTab(De);
					}
					Eb(De, Re) {
						this.Y.updateTabData(De, Re);
					}
					Fb(De) {
						const Re = this.Y.getTabData(De);
						if (!Re) {
							console.error("[aichat] getTab called for non-existent tab", De);
							return;
						}
						return Re;
					}
					Gb(De, Re) {
						const je = this.Y.getBubbleData(De, Re);
						if (!je)
							throw new Error(
								"[aichat] getBubble called for non-existent bubble",
							);
						return je;
					}
					Hb(De, Re, je) {
						this.Y.updateBubbleData(De, Re, je);
					}
					get Ib() {
						if (!this.Y.lastFocusedBubble)
							throw new Error("[aichat] No last focused bubble available");
						return this.Y.lastFocusedBubble;
					}
					Jb(De) {
						this.Y.updateLastFocusedBubble(De);
					}
					get Kb() {
						if (!this.Y.selectedBubble)
							throw new Error("[aichat] No current bubble available");
						return this.Y.selectedBubble;
					}
					Lb(De) {
						this.Y.updateSelectedBubble(De);
					}
					get Mb() {
						if (!this.Y.editingBubble)
							throw new Error("[aichat] No editing bubble available");
						return this.Y.editingBubble;
					}
					Nb(De) {
						this.Y.updateEditingBubble(De);
					}
					createUserBubble({
						tabId: De,
						text: Re,
						followup: je,
						richText: Ve,
					}) {
						const Ze = (0, xe.createUserBubble)({
							text: Re,
							followup: je,
							richText: Ve,
							configurationService: this.pb,
						});
						return (
							setTimeout(() => {
								this.refreshReactiveContextItem(De, Ze.id);
							}),
							Ze
						);
					}
					get Ob() {
						return this.pb.getValue($e.$oW);
					}
					resetCurrentTab() {
						this.cancelGeneration({ tabID: this.Bb.tabId });
						const De = this.Bb.tabId || (0, u.$9g)(),
							Re = this.createUserBubble({ tabId: De }),
							je = {
								tabId: De,
								chatTitle: "",
								bubbles: [Re],
								lastSendTime: Date.now(),
								tabState: se.TabState.chat,
								longContextModeEnabled:
									this.Q.applicationUserPersistentStorage.isLongContextMode ===
										!0 &&
									this.Q.applicationUserPersistentStorage
										.longContextFlagEnabled2 === !0,
								interpreterData: void 0,
								lastFocusedBubbleId: Re.id,
								noReactiveContext: !1,
							};
						console.log("[aichat] new state", je), this.Db(je);
					}
					async Pb(De, Re, je) {
						const Ve = je.filter(
								(rt) =>
									rt.scheme !== Ce.Schemas.notepad &&
									rt.scheme !== Ce.Schemas.vscodeTerminal,
							),
							Ze = je.filter((rt) => rt.scheme === Ce.Schemas.vscodeTerminal),
							et = je.filter((rt) => rt.scheme === Ce.Schemas.notepad);
						for (const rt of Ve)
							this.addContext({
								tabId: De,
								bubbleId: Re,
								contextType: "fileSelections",
								value: { uri: rt },
							});
						for (const rt of Ze)
							this.addContext({
								tabId: De,
								bubbleId: Re,
								contextType: "terminalFiles",
								value: { uri: rt },
							});
						for (const rt of et)
							this.addContext({
								tabId: De,
								bubbleId: Re,
								contextType: "notepads",
								value: { notepadId: rt.path },
							});
					}
					async referenceOpenEditors(De, Re) {
						if (this.Gb(De, Re).type !== "user") return;
						const Ze = this.cb
							.getGroups(ne.GroupsOrder.MOST_RECENTLY_ACTIVE)
							.map((et) =>
								et.editors
									.filter(
										(rt) =>
											rt.resource &&
											this.Y.isCompatibleScheme(rt.resource.scheme),
									)
									.map((rt) => rt.resource),
							)
							.flat();
						await this.Pb(De, Re, Ze);
					}
					async referenceActiveEditors(De, Re) {
						if (this.Gb(De, Re).type !== "user") return;
						const Ze = this.cb
							.getGroups(ne.GroupsOrder.MOST_RECENTLY_ACTIVE)
							.map((et) => {
								const rt = et.activeEditor?.resource;
								if (rt && this.Y.isCompatibleScheme(rt.scheme)) return rt;
							})
							.filter(Fe.$tg);
						await this.Pb(De, Re, Ze);
					}
					checkIfContextIsPinned(De) {
						const Re = De.type === "file" ? "fileSelections" : "codeSelections";
						return (
							this.Y.chatData.pinnedContexts[Re].findIndex((Ze) =>
								(0, ge.$1gc)(
									Re === "codeSelections" ? "selections" : Re,
									Ze,
									De.data,
								),
							) !== -1
						);
					}
					addPinnedContext(De) {
						const Re = De.type === "file" ? "fileSelections" : "codeSelections";
						this.Y.chatData.pinnedContexts[Re].findIndex((Ze) =>
							(0, ge.$1gc)(
								Re === "codeSelections" ? "selections" : Re,
								Ze,
								De.data,
							),
						) === -1 &&
							this.Y.setChatData("pinnedContexts", (Ze) => ({
								...Ze,
								[Re]: [...Ze[Re], De.data],
							}));
					}
					removePinnedContext(De) {
						const Re = De.type === "file" ? "fileSelections" : "codeSelections",
							Ve = this.Y.chatData.pinnedContexts[Re].findIndex((Ze) =>
								(0, ge.$1gc)(
									Re === "codeSelections" ? "selections" : Re,
									Ze,
									De.data,
								),
							);
						this.Y.setChatData("pinnedContexts", (Ze) => ({
							...Ze,
							[Re]: [...Ze[Re].slice(0, Ve), ...Ze[Re].slice(Ve + 1)],
						}));
					}
					selectLastBubbleAboveInput() {
						const De = this.selectedTab(),
							Re = De.bubbles[De.bubbles.length - 1 - 1];
						return Re
							? (this.Y.setChatData(
									"tabs",
									(je, Ve) => je.tabId === je.tabId,
									"selectedBubbleId",
									Re.id,
								),
								(0, oe.$egc)(Re.id),
								!0)
							: !1;
					}
					async maybeCacheContext() {
						const De = this.selectedTab(),
							Re = De.lastFocusedBubbleId;
						if (Re === void 0) return;
						const je = this.selectedTab().bubbles.find((Ze) => Ze.id === Re),
							Ve = Date.now();
						je === void 0 ||
							je.type !== "user" ||
							((je.contextCacheTimestamp === void 0 ||
								(Ve - je.contextCacheTimestamp > 200 &&
									(je.waitingForContext !== !0 ||
										Ve - je.contextCacheTimestamp > 12e4))) &&
								(await this.Qb(De.tabId, Re)));
					}
					async Qb(De, Re) {
						const je = this.selectedTab().bubbles.find((Ve) => Ve.id === Re);
						if (je?.type === "user") {
							this.Y.setChatData(
								"tabs",
								(Ve, Ze) => Ve.tabId === De,
								"bubbles",
								(Ve, Ze) => Ve.id === Re && Ve.type === "user",
								(Ve) => ({
									...Ve,
									contextCacheTimestamp: Date.now(),
									waitingForContext: !0,
								}),
							);
							try {
								const Ve = je.text ?? "",
									Ze = this.R.parallelSearch(Ve, 32, void 0, {
										contextCacheRequest: !0,
									}),
									[et] = await Promise.all([Ze]),
									rt = et.filter(
										(ft) =>
											ft.codeBlock !== void 0 &&
											ft.codeBlock.contents.length < 2e4,
									);
								this.Y.setChatData(
									"tabs",
									(ft, bt) => ft.tabId === De,
									"bubbles",
									(ft, bt) => ft.id === Re && ft.type === "user",
									(ft) => ({
										...ft,
										cachedResults: rt.map((bt) => bt.codeBlock),
										contextCacheTimestamp: Date.now(),
									}),
								);
							} catch (Ve) {
								console.log("error searching", Ve);
							}
							this.Y.setChatData(
								"tabs",
								(Ve, Ze) => Ve.tabId === De,
								"bubbles",
								(Ve, Ze) => Ve.id === Re && Ve.type === "user",
								(Ve) => ({ ...Ve, waitingForContext: !1 }),
							);
						}
					}
					async maybeCheckLongFilesFit(De) {
						const Re = this.selectedTab(),
							je = Re.lastFocusedBubbleId;
						if (je === void 0) return;
						const Ve = this.selectedTab().bubbles.find((et) => et.id === je),
							Ze = Date.now();
						Ve === void 0 ||
							Ve.type !== "user" ||
							((De ||
								Ve.longFilesFitTimestamp === void 0 ||
								(Ze - Ve.longFilesFitTimestamp > 2e3 &&
									(Ve.waitingForLongFilesFit !== !0 ||
										Ze - Ve.longFilesFitTimestamp > 12e4))) &&
								(await this.Rb(Re.tabId, je)));
					}
					async Rb(De, Re) {
						if (
							this.selectedTab().bubbles.find((Ve) => Ve.id === Re)?.type ===
							"user"
						) {
							this.Y.setChatData(
								"tabs",
								(Ve, Ze) => Ve.tabId === De,
								"bubbles",
								(Ve, Ze) => Ve.id === Re && Ve.type === "user",
								(Ve) => ({
									...Ve,
									longFilesFitTimestamp: Date.now(),
									waitingForLongFilesFit: !0,
								}),
							);
							try {
								const Ve = await this.makeChatRequestParams({
									bubbleID: Re,
									tabID: De,
									chatType: "chat",
								});
								if (Ve !== null) {
									const Ze = await this.G.aiClient(),
										et = await this.G.makeStreamChatRequest(Ve, {
											isForActualRequestSoCanBeSlow: !1,
										}),
										rt =
											et === "wouldBeTooSlow"
												? { didFit: !0 }
												: await Ze.checkLongFilesFit(et, {
														headers: (0, J.$m6b)((0, u.$9g)()),
													});
									this.Y.setChatData(
										"tabs",
										(ft, bt) => ft.tabId === De,
										"bubbles",
										(ft, bt) => ft.id === Re && ft.type === "user",
										(ft) => ({ ...ft, doesNotFit: !rt.didFit }),
									);
								}
							} catch (Ve) {
								console.log("error searching", Ve);
							}
							this.Y.setChatData(
								"tabs",
								(Ve, Ze) => Ve.tabId === De,
								"bubbles",
								(Ve, Ze) => Ve.id === Re && Ve.type === "user",
								(Ve) => ({
									...Ve,
									waitingForLongFilesFit: !1,
									longFilesFitTimestamp: Date.now(),
								}),
							);
						}
					}
					Sb() {
						this.q.onChangeEffect({
							deps: [
								() =>
									this.Q.applicationUserPersistentStorage.aiSettings
										.regularChatModel,
							],
							onChange: ({ deps: De, prevDeps: Re }) => {
								const je =
										this.Y.chatData.selectedTabId ||
										this.Y.chatData.tabs[0].tabId,
									Ve = this.Q.nonPersistentStorage.inprogressAIGenerations.find(
										(Ze) =>
											Ze.metadata !== void 0 &&
											Ze.metadata.type === "chat" &&
											Ze.metadata.tabId === je,
									);
								Ve &&
									Ve.metadata?.type === "chat" &&
									(this.cancelGeneration({ tabID: je }),
									this.submitUnifiedChat({
										bubbleID: Ve.metadata.bubbleId,
										tabID: Ve.metadata.tabId,
										chatType: Ve.metadata.chatType,
									}));
							},
						});
					}
					pauseGeneration() {
						this.L.publicLog2("ai/chat/pause"),
							this.cancelGeneration({
								tabID:
									this.Y.chatData.selectedTabId ||
									this.Y.chatData.tabs[0].tabId,
							});
					}
					async getEditorCode(De, Re) {
						return await (0, O.$Yfc)(this.G, this.X, De, Re);
					}
					async getTerminalText(De) {
						return await (0, O.$Zfc)(this.C, this.X, !1, De);
					}
					submitChat(De) {
						if (
							this.Q.applicationUserPersistentStorage.checklistState
								?.doneCommandL !== !0
						) {
							const Re = this.Q.applicationUserPersistentStorage.checklistState;
							this.Q.setApplicationUserPersistentStorage(
								"checklistState",
								(je) => ({ ...(je ?? {}), doneCommandL: !0 }),
							);
						}
						return this.submitUnifiedChat({ ...De, chatType: "chat" });
					}
					async submitContextChat(De) {
						if (
							this.Q.applicationUserPersistentStorage.checklistState
								?.doneCommandEnter !== !0
						) {
							const Re = this.Q.applicationUserPersistentStorage.checklistState;
							this.Q.setApplicationUserPersistentStorage(
								"checklistState",
								(je) => ({ ...(je ?? {}), doneCommandEnter: !0 }),
							);
						}
						return await this.submitUnifiedChat({ ...De, chatType: "context" });
					}
					getAiBubbleFromUserBubble({ tabId: De, bubbleId: Re }) {
						const je = this.Y.chatData.tabs.find((et) => et.tabId === De);
						if (je === void 0) return;
						const Ve = je.bubbles.findIndex((et) => et.id === Re);
						if (Ve === -1) return;
						const Ze = je.bubbles[Ve + 1];
						if (Ze !== void 0 && Ze.type === "ai") return Ze;
					}
					async makeChatRequestParams({
						bubbleID: De,
						tabID: Re,
						aiBubbleID: je,
						overrideModelDetails: Ve,
						chatType: Ze,
						removeAllContext: et,
						shouldIncludeCurrentFile: rt,
						useAdvancedContext: ft,
						useDeepContext: bt,
						enforceUpUntil: nt,
						useWeb: lt,
						isEval: ct,
						shouldCache: gt,
					}) {
						const ht = this.Y.chatData.tabs
							.find((Mt) => Mt.tabId === Re)
							?.bubbles.find((Mt) => Mt.id === De && Mt.type === "user");
						ht?.usesCodebase === !0 &&
							((Ze = "context"),
							ht?.advancedCodebaseContextOptions !== void 0 && (ft = !0));
						const Rt = (0, u.$9g)(),
							Nt = this.Y.chatData.tabs.find((Mt) => Mt.tabId === Re);
						if (Nt === void 0)
							return console.error(`Tab ${Re} does not exist`), null;
						const jt =
								Ve ||
								this.G.getModelDetails({
									longContextModeEnabled: Nt.longContextModeEnabled,
									specificModelField: "regular-chat",
								}),
							ti = await this.Y.getConversationHistory({
								tab: Nt,
								...(nt === !0 ? { upUntil: De } : {}),
							}),
							kt =
								Nt.summary !== void 0 &&
								Nt.bubbles.length + 1 >= Nt.summary.bubblesWhenSubmitted,
							hi = !0,
							Kt = [],
							di = hi && lt ? "full_search" : void 0,
							Ye = Nt.longContextModeEnabled
								? await this.G.getEffectiveTokenLimit(jt)
								: void 0;
						let ze,
							It = this.Y.chatData.pinnedContexts?.fileSelections ?? [];
						const xt = [...(ht?.fileSelections ?? []), ...It]?.find(
								(Mt) => Mt.isCurrentFile === !0,
							),
							Vt = await this.G.getCurrentFileInfo();
						xt &&
							Vt &&
							this.$.asRelativePath(r.URI.revive(xt.uri)) ===
								Vt.relativeWorkspacePath &&
							(ze = await this.G.getCurrentFileInfo());
						const Bt = {
							codeBlocks: ht?.cachedResults ?? [],
							quotes: ht?.quotes ?? [],
							commitNotes: Kt,
							externalLinks: ht?.externalLinks ?? [],
							currentFile: ze,
						};
						return {
							conversationHistory: ti,
							generationMetadata: {
								type: "chat",
								tabId: Re,
								bubbleId: De,
								aiBubbleId: je,
								chatType: Ze,
								summaryText: kt ? Nt.summary?.text : void 0,
								summaryUpUntilIndex: kt ? Nt.summary?.upUntilIndex : void 0,
								isBash: !1,
								longContextModeEnabled: Nt.longContextModeEnabled,
								tokenLimit: Ye,
								isEval: ct,
								...(et === !0 ? {} : Bt),
								shouldCache: gt,
							},
							generationUUID: Rt,
							options: {
								overrideModelDetails: jt,
								removeAllContext: et,
								rerun: () => {
									this.submitUnifiedChat({
										bubbleID: De,
										tabID: Re,
										overrideModelDetails: Ve,
										chatType: Ze,
										removeAllContext: et,
										shouldIncludeCurrentFile: rt,
									});
								},
								useHyde: !0,
								shouldIncludeCurrentFile: rt ?? !1,
								allowLongFileScan: ht?.allowLongFileScan ?? !1,
								useWeb: di,
							},
						};
					}
					Tb(De, Re) {
						this.Y.setChatData(
							"tabs",
							(je, Ve) => je.tabId === De,
							"bubbles",
							(je, Ve) => je.id === Re && je.type === "user",
							"fileSelections",
							(je) => je.filter((Ve) => !Ve.isCurrentFile),
						);
					}
					async handleUserDidType(De, Re) {
						if (!this.Q.applicationUserPersistentStorage.cacheChatPrompts)
							return;
						(async () => {
							try {
								await Promise.resolve(),
									await this.wb.maybeRefreshFeatureStatus("cacheChatPrompts");
								const nt = this.wb.getCachedFeatureStatus("cacheChatPrompts");
								nt !==
									this.Q.applicationUserPersistentStorage.cacheChatPrompts &&
									this.Q.setApplicationUserPersistentStorage(
										"cacheChatPrompts",
										nt,
									);
							} catch {}
						})(),
							this.Ub(De, Re);
						const je = this.Fb(De);
						if (!je) return;
						const Ve = this.Gb(De, Re);
						if (!Ve || Ve.type !== "user") return;
						let Ze = Ve.cachingStatus ?? {
							promptIsCached: !1,
							numCharsTypedSincePromptChanged: 0,
						};
						const et = je.bubbles.findIndex((nt) => nt.id === Re) > 0;
						(async () => {
							await this.wb.maybeRefreshConfig("chatKeystrokesBeforeCaching"),
								await this.wb.maybeRefreshConfig(
									"chatKeystrokesBeforeCachingFollowups",
								);
						})().catch(() => {});
						const rt =
								this.wb.getCachedConfig("chatKeystrokesBeforeCaching") ?? 25,
							ft =
								this.wb.getCachedConfig(
									"chatKeystrokesBeforeCachingFollowups",
								) ?? 25,
							bt = et ? ft : rt;
						Ze.promptIsCached ||
							(Ze.numCharsTypedSincePromptChanged > bt
								? (this.Zb(De, Re, Ve.text ?? "", { richText: Ve.richText }),
									this.Y.setChatData(
										"tabs",
										(nt) => nt.tabId === De,
										"bubbles",
										(nt, lt) => nt.id === Re && nt.type === "user",
										"cachingStatus",
										{
											promptIsCached: !0,
											promptLastCachedAt: Date.now(),
											contextStringWhenCached: this.Vb(De, Re),
										},
									))
								: this.Y.setChatData(
										"tabs",
										(nt) => nt.tabId === De,
										"bubbles",
										(nt, lt) => nt.id === Re && nt.type === "user",
										"cachingStatus",
										{
											...Ze,
											numCharsTypedSincePromptChanged:
												Ze.numCharsTypedSincePromptChanged + 1,
										},
									));
					}
					handleUserDidChangeContext(De, Re) {
						this.Q.applicationUserPersistentStorage.cacheChatPrompts &&
							this.Ub(De, Re);
					}
					Ub(De, Re) {
						try {
							if (!this.Fb(De)) return;
							const Ve = this.Gb(De, Re);
							if (!Ve || Ve.type !== "user") return;
							const Ze = 5 * 60 * 1e3,
								{ cachingStatus: et } = Ve;
							et?.promptIsCached === !0 &&
								(Date.now() - et.promptLastCachedAt > Ze ||
									et.contextStringWhenCached !== this.Vb(De, Re)) &&
								this.Y.setChatData(
									"tabs",
									(rt) => rt.tabId === De,
									"bubbles",
									(rt, ft) => rt.id === Re && rt.type === "user",
									"cachingStatus",
									{ promptIsCached: !1, numCharsTypedSincePromptChanged: 0 },
								);
						} catch {}
					}
					Vb(De, Re) {
						try {
							const je = this.Gb(De, Re);
							if (!je || je.type !== "user") return "";
							const Ve = {};
							for (const Ze of ge.$Wgc)
								if ((0, ge.$Ygc)(Ze)) {
									const et = je[Ze];
									et && et.length > 0 && (Ve[Ze] = et.length);
								} else je[Ze] !== void 0 && (Ve[Ze] = !0);
							return (
								(Ve.files = je.fileSelections?.map((Ze) => ({
									uri: Ze.uri.toString(),
									isCurrentFile: Ze.isCurrentFile,
								}))),
								(Ve.folders = je.folderSelections?.map((Ze) => ({
									uri: Ze.relativePath,
								}))),
								JSON.stringify(Ve)
							);
						} catch {
							return "(error)";
						}
					}
					async Zb(De, Re, je, Ve) {
						this.Q.applicationUserPersistentStorage.cacheChatPrompts &&
							(this.Wb.push(Date.now()),
							(this.Wb = this.Wb.filter((Ze) => Date.now() - Ze < this.Xb)),
							this.yb.assert(
								this.Wb.length <= this.Yb,
								"Too many recent warm cache requests! Please post in #bug-reports!",
							),
							!(this.Wb.length > this.Yb) &&
								(await this.$b({
									bubbleID: Re,
									tabID: De,
									chatType: "chat",
									removeAllContext: !1,
									shouldIncludeCurrentFile: !0,
									useAdvancedContext: !1,
									useDeepContext: !1,
									overrideUseWeb: !1,
								})));
					}
					async $b(De) {
						if (De.overrideUseWeb ? De.overrideUseWeb : !1) return;
						const je = this.Fb(De.tabID);
						if (!je) return;
						this.Z.addPersistentChatMetadataIfNotExists(De.bubbleID, De.tabID);
						let Ve = [];
						for (const rt of je.bubbles)
							if (rt.type === se.BubbleType.USER_CHAT) {
								const ft = rt.selectedDocs;
								ft !== void 0 && Ve.push(...ft);
							}
						Ve = Ve.filter(
							(rt, ft, bt) =>
								rt.docId !== void 0 &&
								ft === bt.findIndex((nt) => nt.docId === rt.docId),
						);
						const Ze = this.getFoldersInBubblesUpTo(De.tabID, De.bubbleID);
						this.Q.setWorkspaceUserPersistentStorage(
							"persistentChatMetadata",
							(rt) => rt.bubbleId === De.bubbleID && rt.tabId === De.tabID,
							(rt) => {
								const ft = rt.injectedContext ?? {},
									bt = rt.predictedContext ?? {};
								return {
									...rt,
									injectedContext: { ...ft, usedDocs: Ve, usedFolders: Ze },
									predictedContext: { ...bt, usedDocs: Ve, usedFolders: Ze },
								};
							},
						),
							this.Q.setWorkspaceUserPersistentStorage(
								"persistentChatMetadata",
								(rt) => rt.bubbleId === De.bubbleID && rt.tabId === De.tabID,
								(rt) => {
									const ft = rt.injectedContext ?? {};
									return { ...rt, webCitations: [] };
								},
							);
						const et = await this.makeChatRequestParams({
							...De,
							aiBubbleID: void 0,
							useWeb: !1,
							isEval: !1,
							shouldCache: !0,
							enforceUpUntil: !0,
						});
						et !== null &&
							(await this.G.warmChatCache(
								et.conversationHistory,
								et.generationMetadata,
								et.generationUUID,
								et.options,
							));
					}
					async submitUnifiedChat(De) {
						let {
							bubbleID: Re,
							tabID: je,
							overrideModelDetails: Ve,
							chatType: Ze,
							removeAllContext: et,
							shouldIncludeCurrentFile: rt,
							useAdvancedContext: ft,
							dontPassContextToFollowUp: bt,
						} = De;
						et === !0 && this.Tb(je, Re);
						const nt = this.Fb(je),
							lt = nt?.bubbles.findIndex(
								(ii) => ii.id === Re && ii.type === "user",
							),
							ct = lt !== -1 && lt !== void 0 ? nt?.bubbles[lt] : void 0;
						if (nt === void 0 || ct === void 0 || lt === void 0) {
							console.error(`Tab ${je} or user bubble ${Re} does not exist`);
							return;
						}
						let gt = nt.bubbles[lt - 1],
							ht = nt.bubbles[lt - 2];
						if (
							(gt?.type === "ai" &&
								gt.text === "" &&
								ht?.type === "user" &&
								this.Y.setChatData(
									"tabs",
									(ii, Dt) => ii.tabId === je,
									"bubbles",
									(ii) => ii.filter((Dt, Jt) => Jt !== lt - 1 && Jt !== lt - 2),
								),
							De.chatType === "intentChat")
						)
							return (
								console.warn("Intent chat is deprecated. Use 'chat' instead"),
								this.submitUnifiedChat({ ...De, chatType: "chat" })
							);
						if (
							this.getFoldersInBubblesUpTo(je, Re).length > 0 &&
							Ze === "chat"
						)
							return this.submitUnifiedChat({ ...De, chatType: "context" });
						if (ct.usesCodebase && Ze === "chat")
							return this.submitUnifiedChat({ ...De, chatType: "context" });
						if (nt.debuggerData !== void 0 && Ze !== "debugger")
							return this.submitUnifiedChat({ ...De, chatType: "debugger" });
						this.cancelGeneration({ tabID: je });
						const Nt = !!nt.evalInfo;
						this.Y.setChatData(
							"tabs",
							(ii, Dt) => ii.tabId === je,
							"bubbles",
							(ii, Dt) => ii.id === Re && ii.type === "user",
							(ii) => ({
								...ii,
								indexingStatus: void 0,
								errorDetails: void 0,
								codebaseResults: [],
							}),
						);
						const jt = this.Q.applicationUserPersistentStorage.docsNudge;
						this.Q.setApplicationUserPersistentStorage("docsNudge", {
							upUntilCounter: (jt?.upUntilCounter ?? 0) + 1,
							shownNudges: jt?.shownNudges ?? 0,
						}),
							this.qb?.markNowAsLastChatMessage();
						const ti = null;
						this.Z.addChatMetadata(Re, je);
						const kt = ct.useWeb ?? !1;
						let hi = !1;
						typeof ct.usesCodebase == "object" && ((ft = !0), (hi = !0)),
							!ct.fileSelections?.some((ii) => ii.isCurrentFile) &&
								!ct.terminalFiles?.some((ii) => ii.isCurrentFile) &&
								!ct.notepads?.some((ii) => ii.isCurrentNotepad) &&
								this.Eb(je, { noReactiveContext: !0 });
						const Kt = this.D(new C.$re()),
							di = Kt.event(() => {
								const ii = this.Y.chatData.tabs.find((Dt) => Dt.tabId === je);
								ii &&
									ii.bubbles.length > 2 &&
									(!ii?.hasNamedTab || lt === 0) &&
									(async () => {
										try {
											const Jt = await this.makeChatRequestParams({
													bubbleID: Re,
													tabID: je,
													chatType: "chat",
												}),
												Zt = await (await this.G.aiClient()).nameTab({
													messages: Jt?.conversationHistory ?? [],
												});
											if (Zt.name)
												this.Y.setChatData(
													"tabs",
													(ci, ri) => ci.tabId === je,
													"chatTitle",
													Zt.name,
												);
											else {
												const ci = ii.bubbles[0];
												ci &&
													ci.type === "user" &&
													this.Y.setChatData(
														"tabs",
														(ri, $i) => ri.tabId === je,
														"chatTitle",
														(ci.richText ?? ci.text)
															?.trim()
															.split(`
`)[0]
															.split(" ")
															.slice(0, 10)
															.join(" ") ?? "",
													);
											}
											this.Y.setChatData(
												"tabs",
												(ci, ri) => ci.tabId === je,
												"hasNamedTab",
												!0,
											);
										} catch (Jt) {
											console.error("Error renaming tab", Jt);
										}
									})(),
									di.dispose();
							});
						let Ye = (...ii) => this.G.streamChat(ii[0], ii[1], ii[2], ii[3]);
						if (Ze === "chat")
							this.Q.setApplicationUserPersistentStorage(
								"newUserData",
								"toolUsageCount",
								"plainChat",
								(ii) => (ii === "legacy" ? "legacy" : ii + 1),
							);
						else if (Ze === "edit" && ti !== null)
							Ye = (...ii) =>
								this.fb.performChatEditFinetunedModel({
									privateFtModel: ti,
									conversationHistory: ii[0],
									generationMetadata: ii[1],
									generationUUID: ii[2],
									options: ii[3],
								});
						else if (Ze === "edit" && ti === null)
							Ye = (...ii) =>
								this.fb.performAndYieldChatEdit({
									conversationHistory: ii[0],
									generationMetadata: ii[1],
									generationUUID: ii[2],
									options: ii[3],
								});
						else if (Ze === "multiFileEdit" && ti === null) {
							let ii = [];
							for (let si = nt.bubbles.length - 1; si >= 0; si--)
								if (nt.bubbles[si].type === se.BubbleType.AI_CHAT) {
									ii = nt.bubbles[si].referencedCodeBlockURIs || [];
									break;
								}
							let Dt = [];
							for (
								let si = nt.bubbles.length - 1;
								si >= 0 &&
								!(
									nt.bubbles[si].type === se.BubbleType.USER_CHAT &&
									((Dt =
										nt.bubbles[si].fileSelections?.map((Zt) =>
											r.URI.from(Zt.uri),
										) || []),
									Dt.length > 0)
								);
								si--
							);
							let Jt = [];
							ii.length > 0 ? (Jt = ii) : (Jt = Dt),
								(Ye = (...si) =>
									this.fb.performMultiFileFastEdit({
										aiReferencedCodeBlockURIs: Jt,
										conversationHistory: si[0],
										generationUUID: si[2],
									}));
						} else if (Ze === "followUp" && ti === null)
							Ye = (...ii) =>
								this.fb.performFollowUpOnChanges({
									conversationHistory: ii[0],
									generationMetadata: ii[1],
									generationUUID: ii[2],
								});
						else {
							let ii = !1;
							try {
								ii = this.R.isIndexedMainLocalRepository();
							} catch {
								console.log("No repos found");
							}
							if (Ze === "context") {
								this.Q.setApplicationUserPersistentStorage(
									"newUserData",
									"toolUsageCount",
									"contextChat",
									(si) => (si === "legacy" ? "legacy" : si + 1),
								);
								const Dt = this.Y.chatData.tabs
										.find((si) => si.tabId === je)
										?.bubbles.find((si) => si.id === Re && si.type === "user"),
									Jt =
										Dt?.dropdownAdvancedCodebaseSearchBehavior === "embeddings";
								if (ft)
									Ye = (...si) =>
										this.eb.taskStreamChatContext(
											...si,
											Dt?.advancedCodebaseContextOptions ?? ge.$Ugc,
										);
								else if (!ii || Jt) {
									const si = ii ? T.SearchType.vector : T.SearchType.keyword;
									Ye = (...Zt) => this.G.streamChatContext(...Zt, si);
								} else {
									const si =
										Dt?.advancedCodebaseContextOptions ??
										Dt?.dropdownAdvancedCodebaseContextOptions;
									Ye = (...Zt) => this.eb.taskStreamChatContext(...Zt, si);
								}
							} else throw new Error("Invalid chat type");
						}
						const ze = nt.bubbles.findIndex((ii) => ii.id === Re);
						if (ze === -1) {
							console.error(`Bubble ${Re} does not exist`);
							return;
						}
						const Xe = (0, u.$9g)();
						this.tabIDToQueuedFollowupID.set(je, Xe);
						let It = "",
							Lt = {
								type: se.BubbleType.AI_CHAT,
								messageType: w.PureMessage_MessageType.ASSISTANT,
								id: (0, u.$9g)(),
								text: "",
								aiType: "chat",
								modelType: this.W.getRegularChatModel(),
								doThisForMeRequest: void 0,
								suggestedDiffs: [],
								codeBlocks: [],
							},
							xt = Re;
						nt.bubbles[ze].type === "ai"
							? (this.Y.setChatData(
									"tabs",
									(ii, Dt) => ii.tabId === je,
									"bubbles",
									(ii) => nt.bubbles.slice(0, ze + 1),
								),
								(Lt = nt.bubbles[ze]),
								(It = Lt.text),
								(xt = nt.bubbles[ze - 1].id))
							: (this.Y.setChatData(
									"tabs",
									(ii, Dt) => ii.tabId === je,
									"bubbles",
									(ii) => nt.bubbles.slice(0, ze + 1).concat(Lt),
								),
								(It = nt.bubbles[ze].text ?? ""));
						const Vt =
							Ve ||
							this.G.getModelDetails({
								longContextModeEnabled: nt.longContextModeEnabled,
								specificModelField: "regular-chat",
							});
						this.O.preStreamChatCheck(
							Vt,
							(ii) => {
								this.cancelGeneration({ tabID: je }),
									this.submitUnifiedChat({
										bubbleID: Re,
										tabID: je,
										overrideModelDetails: ii,
										chatType: Ze,
										removeAllContext: et,
										shouldIncludeCurrentFile: rt,
									});
							},
							Kt,
						);
						let Bt = [];
						for (const ii of nt.bubbles)
							if (ii.type === se.BubbleType.USER_CHAT) {
								const Dt = ii.selectedDocs;
								Dt !== void 0 && Bt.push(...Dt);
							}
						Bt = Bt.filter(
							(ii, Dt, Jt) =>
								ii.docId !== void 0 &&
								Dt === Jt.findIndex((si) => si.docId === ii.docId),
						);
						const Gt = this.getFoldersInBubblesUpTo(je, xt);
						this.Q.setWorkspaceUserPersistentStorage(
							"persistentChatMetadata",
							(ii) => ii.bubbleId === Re && ii.tabId === je,
							(ii) => {
								const Dt = ii.injectedContext ?? {},
									Jt = ii.predictedContext ?? {};
								return {
									...ii,
									injectedContext: { ...Dt, usedDocs: Bt, usedFolders: Gt },
									predictedContext: { ...Jt, usedDocs: Bt, usedFolders: Gt },
								};
							},
						),
							this.Q.setWorkspaceUserPersistentStorage(
								"persistentChatMetadata",
								(ii) => ii.bubbleId === Re && ii.tabId === je,
								(ii) => {
									const Dt = ii.injectedContext ?? {};
									return { ...ii, webCitations: [] };
								},
							);
						let Mt = !1,
							Ut = !1,
							ei = await this.makeChatRequestParams({
								...De,
								aiBubbleID: Lt.id,
								useWeb: De.overrideUseWeb ? De.overrideUseWeb : kt,
								isEval: Nt,
							});
						if (ei === null) return;
						const mi = ei.generationUUID;
						this.Q.setNonPersistentStorage("inprogressAIGenerations", (ii) => [
							...ii,
							{
								generationUUID: mi,
								metadata: ei?.generationMetadata ?? { type: void 0 },
								queuePositionResponse: void 0,
								aiBubbleId: Lt.id,
								bubbleId: Re,
							},
						]),
							this.rb.linkGenerationToTab(mi, je),
							await this.bc({
								followupID: Xe,
								tabID: je,
								aiBubbleId: Lt.id,
								generationUUID: mi,
								originatingBubbleId: Re,
								textOfOriginatingBubble: It,
								cancelled: Ut,
								dontPassContext: bt,
							});
						try {
							let ii = !0;
							for (; ii === !0; ) {
								if (((ii = !1), ei === null)) return;
								const Dt = await Ye(
									ei.conversationHistory,
									ei.generationMetadata,
									ei.generationUUID,
									ei.options,
								);
								if (
									!this.Q.nonPersistentStorage.inprogressAIGenerations.some(
										(si) => si.generationUUID === mi,
									)
								)
									throw new Error("[aichat] generation cancelled");
								if (Dt === void 0) {
									this.ac(mi);
									return;
								}
								for await (const si of Dt)
									this.cc({ bubbleID: Lt.id, tabID: je, text: si });
							}
						} catch (ii) {
							Ut = !0;
							const Dt = this.Y.chatData.tabs.find((Jt) => Jt.tabId === je);
							if (Dt !== void 0) {
								const Jt = this.M.shouldShowImmediateErrorMessage(ii);
								if (Jt) {
									const Zt = (0, X.$X6b)(ii);
									this.Y.setChatData(
										"tabs",
										(ci, ri) => ci.tabId === je,
										"bubbles",
										(ci) => ci.id === xt && ci.type === "user",
										"errorDetails",
										{
											generationUUID: mi,
											error: Zt,
											message: ii?.rawMessage,
											rerun: ei?.options?.rerun,
										},
									);
								}
								const si = Dt.bubbles.findIndex((Zt) => Zt.id === Lt.id);
								if (si !== -1) {
									const Zt = Dt.bubbles[si],
										ri = Dt.bubbles[si + 1]?.id,
										$i = this.Cb(je, ri);
									let Wt = !1;
									Zt.text.length === 0 &&
										(Jt
											? this.Y.setChatData(
													"tabs",
													(at, pi) => at.tabId === je,
													"bubbles",
													(at) => at.filter((pi) => pi.id !== Zt.id),
												)
											: $i
												? (this.Y.setChatData(
														"tabs",
														(at, pi) => at.tabId === je,
														"bubbles",
														(at) => at.slice(0, si),
													),
													this.Y.setChatData(
														"tabs",
														(at, pi) => at.tabId === je,
														{ lastFocusedBubbleId: xt },
													))
												: (this.Y.setChatData(
														"tabs",
														(at, pi) => at.tabId === je,
														"bubbles",
														(at) =>
															at.filter(
																(pi) => pi.id !== Zt.id && pi.id !== Re,
															),
													),
													(Wt = !0)),
										(Mt = !0));
									const tt = Wt ? void 0 : this.Gb(je, Re);
									Jt || Zt.text.length !== 0
										? (Jt || $i) && tt !== void 0
											? tt.id === Dt.editingBubbleId
												? this.Y.chatData.inputBoxDelegateMap[tt.id]?.focus()
												: this.Y.setChatData(
														"tabs",
														(at) => at.tabId === je,
														"editingBubbleId",
														tt.id,
													)
											: this.Y.chatData.inputBoxDelegate.focus()
										: this.Y.chatData.inputBoxDelegate.focus();
								}
							}
						} finally {
							this.Q.setNonPersistentStorage("inprogressAIGenerations", (Dt) =>
								Dt.filter((Jt) => Jt.generationUUID !== mi),
							),
								this.lb.recordChatEvent({
									requestId: mi,
									eventType: {
										case: "endOfUninterruptedGeneration",
										value: {},
									},
								});
							try {
								Kt.fire();
							} finally {
								Kt.dispose();
							}
							Mt ||
								(Nt &&
									(this.Y.setChatData(
										"tabs",
										(Dt, Jt) => Dt.tabId === je && "evalInfo" in Dt,
										"bubbles",
										(Dt) =>
											Dt.map((Jt) =>
												Jt.id === Lt.id ? { ...Jt, requestId: mi } : Jt,
											),
									),
									this.Y.setChatData(
										"tabs",
										(Dt, Jt) =>
											Dt.tabId === je &&
											"evalInfo" in Dt &&
											Dt.evalInfo !== void 0,
										"evalInfo",
										(Dt) => Dt && { ...Dt, requestId: mi },
									))),
								this.Y.persistSelectedChat(!0);
							const ii = this.Y.chatData.tabs.find((Dt) => Dt.tabId === je);
							ii !== void 0 &&
								ii.bubbles.length > 3 &&
								(ii.summary === void 0 ||
									ii.summary.bubblesWhenSubmitted !== ii.bubbles.length) &&
								ei !== null &&
								this.G.getChatSummary({ ...ei, generationUUID: (0, u.$9g)() })
									.then((Dt) => {
										Dt.didSummarize &&
											this.Y.setChatData(
												"tabs",
												(Jt, si) => Jt.tabId === je,
												"summary",
												{
													text: Dt.summary,
													upUntilIndex: Dt.upUntilIndex,
													bubblesWhenSubmitted: ii.bubbles.length,
												},
											);
									})
									.catch((Dt) => {
										console.error(Dt);
									});
						}
					}
					async submitTutor({
						bubbleID: De,
						tabID: Re,
						overrideModelDetails: je,
					}) {
						const Ve = this.Y.chatData.tabs.find((Rt) => Rt.tabId === Re);
						if (
							(this.Y.setChatData(
								"tabs",
								(Rt, Nt) => Rt.tabId === Re,
								"isAlwaysTutor",
								!0,
							),
							Ve === void 0)
						) {
							console.error(`Tab ${Re} does not exist`);
							return;
						}
						const Ze = Ve.bubbles.findIndex((Rt) => Rt.id === De);
						if (Ze === -1) {
							console.error(`Bubble ${De} does not exist`);
							return;
						}
						const et = (0, u.$9g)();
						this.tabIDToQueuedFollowupID.set(Re, et),
							this.cancelGeneration({ tabID: Re });
						let rt = "",
							ft = {
								type: se.BubbleType.AI_CHAT,
								messageType: w.PureMessage_MessageType.ASSISTANT,
								modelType: this.W.getRegularChatModel(),
								id: (0, u.$9g)(),
								text: "",
								aiType: "chat",
								suggestedDiffs: [],
								doThisForMeRequest: void 0,
								codeBlocks: [],
							};
						Ve.bubbles[Ze].type === "ai"
							? (this.Y.setChatData(
									"tabs",
									(Rt, Nt) => Rt.tabId === Re,
									"bubbles",
									(Rt) => Ve.bubbles.slice(0, Ze + 1),
								),
								(ft = Ve.bubbles[Ze]),
								(rt = ft.text))
							: (this.Y.setChatData(
									"tabs",
									(Rt, Nt) => Rt.tabId === Re,
									"bubbles",
									(Rt) => Ve.bubbles.slice(0, Ze + 1).concat(ft),
								),
								(rt = Ve.bubbles[Ze].text ?? ""));
						const bt = this.D(new C.$re()),
							nt =
								je ||
								this.G.getModelDetails({ specificModelField: "regular-chat" });
						this.O.preStreamChatCheck(
							nt,
							(Rt) => {
								this.cancelGeneration({ tabID: Re }),
									this.submitTutor({
										bubbleID: De,
										tabID: Re,
										overrideModelDetails: Rt,
									});
							},
							bt,
						);
						const lt = await this.Y.getConversationHistory({ tab: Ve }),
							ct = await this.G.streamCursorTutor(
								lt,
								{
									type: "chat",
									tabId: Re,
									bubbleId: De,
									aiBubbleId: ft.id,
									chatType: "chat",
									longContextModeEnabled: !1,
								},
								{
									overrideModelDetails: nt,
									rerun: () => {
										this.submitTutor({
											bubbleID: De,
											tabID: Re,
											overrideModelDetails: nt,
										});
									},
								},
							);
						this.Q.setApplicationUserPersistentStorage(
							"newUserData",
							"toolUsageCount",
							"plainChat",
							(Rt) => (Rt === "legacy" ? "legacy" : Rt + 1),
						);
						let gt = !1,
							ht = !1;
						try {
							for await (const Rt of ct)
								this.cc({ bubbleID: ft.id, tabID: Re, text: Rt });
						} catch {
							ht = !0;
							const Nt = this.Y.chatData.tabs.find((jt) => jt.tabId === Re);
							if (Nt !== void 0) {
								const jt = Nt.bubbles.findIndex((ti) => ti.id === ft.id);
								jt !== -1 &&
									Nt.bubbles[jt].text.length === 0 &&
									(this.Y.setChatData(
										"tabs",
										(kt, hi) => kt.tabId === Re,
										"bubbles",
										(kt) => kt.slice(0, jt),
									),
									(gt = !0));
							}
						} finally {
							bt.fire(),
								bt.dispose(),
								gt ||
									(await this.bc({
										followupID: et,
										tabID: Re,
										aiBubbleId: ft.id,
										originatingBubbleId: De,
										textOfOriginatingBubble: rt,
										cancelled: ht,
									})),
								this.Y.persistSelectedChat(!0);
						}
					}
					ac(De) {
						const Re = this.G.streamingAbortControllers.get(De);
						Re && (Re.abort(), this.G.streamingAbortControllers.delete(De));
					}
					cancelGeneration({ tabID: De }) {
						const Re = this.Q.nonPersistentStorage.inprogressAIGenerations.find(
							(je) => je.metadata.type === "chat" && je.metadata.tabId === De,
						)?.generationUUID;
						Re &&
							(this.ac(Re),
							this.Q.setNonPersistentStorage("inprogressAIGenerations", (je) =>
								je.filter(
									(Ve) =>
										!(
											Ve.metadata !== void 0 &&
											(Ve.metadata.type === "chat" ||
												Ve.metadata.type === "codeInterpreter" ||
												Ve.metadata.type === "interpreterExecution") &&
											Ve.metadata.tabId === De
										),
								),
							));
					}
					isTabGenerating(De) {
						return !this.tabIDToQueuedFollowupID.has(De) ||
							this.Y.chatData.tabs.find((je) => je.tabId === De) === void 0
							? !1
							: !!this.Q.nonPersistentStorage.inprogressAIGenerations.find(
									(je) =>
										je.metadata !== void 0 &&
										je.metadata.type === "chat" &&
										je.metadata.tabId === De,
								);
					}
					getChatEditorContext() {
						return {
							isNotebook: !!(0, U.$eJb)(this.z.activeEditorPane),
							hasNonemptySelection: !1,
						};
					}
					dispose() {
						this.j.dispose(),
							this.h.dispose(),
							this.n.dispose(),
							super.dispose();
					}
					render(De, Re, je) {
						return (0, Z.$jcc)(
							De,
							this.ab,
							{
								paneDelegate: Re,
								chatData: this.Y.chatData,
								chatService: this,
								chatDataService: this.Y,
								setChatData: this.Y.setChatData,
								isEditorWindow: je,
							},
							this.Y.persistSelectedChat,
							() => this.gb.hideChatHistory(),
							() => this.gb.showChatHistory(),
						);
					}
					async newChat(De) {
						this.Y.persistSelectedChat(!0);
						const Re = this.Bb;
						if (!Re) throw new Error("[aichat] No tab found");
						const je = Re.bubbles[0];
						if (!je) throw new Error("[aichat] No bubble found");
						const Ve = De?.onlyCheckText ?? !0,
							Ze =
								(0, xe.doesTabHaveExactlyOneUserBubbleWithNoText)(Re) &&
								!De?.forceNewChat,
							et = (0, oe.$$fc)(je);
						if ((Ve && Ze) || (!Ve && Ze && !et)) {
							this.Y.setChatData(
								"selectedTabId",
								this.Y.chatData.tabs[0].tabId,
							),
								De?.resetCurrentTabIfEmpty && (await this.resetCurrentTab()),
								De?.autofocus && (await this.focus());
							return;
						}
						const { tabId: rt } = this.forceNewChat();
						this.Y.setChatData("selectedTabId", rt),
							De?.autofocus && (await this.focus());
					}
					forceNewChat() {
						const De = (0, u.$9g)(),
							Re = this.createUserBubble({ tabId: De });
						return (
							this.Y.setChatData("tabs", (je) => [
								{
									tabId: De,
									chatTitle: "",
									bubbles: [Re],
									lastSendTime: Date.now(),
									tabState: se.TabState.chat,
									additionalData: void 0,
									longContextModeEnabled:
										this.Q.applicationUserPersistentStorage
											.isLongContextMode === !0 &&
										this.Q.applicationUserPersistentStorage
											.longContextFlagEnabled2 === !0,
									interpreterData: void 0,
									lastFocusedBubbleId: Re.id,
								},
								...je,
							]),
							{ tabId: De, bubbleId: Re.id }
						);
					}
					async toggleChatMode(De) {
						(0, t.batch)(() => {
							const Re = this.Y.getReactiveCurrentChat();
							if (Re === void 0 || Re?.bubbles.length > 1) return;
							const je =
									!Re.longContextModeEnabled && Re.debuggerData === void 0,
								Ve = Re.longContextModeEnabled && Re.debuggerData === void 0,
								Ze = !Re.longContextModeEnabled && Re.debuggerData !== void 0,
								et = je
									? "Normal Chat"
									: Ve
										? "Long Context Chat"
										: Ze
											? "Debugger Mode"
											: "Normal Chat",
								rt =
									this.Q.applicationUserPersistentStorage
										.longContextFlagEnabled2 === !0,
								ft =
									this.Q.applicationUserPersistentStorage
										.debuggerFlagEnabled === !0,
								bt = {
									"Normal Chat": !0,
									"Long Context Chat": rt || Re.longContextModeEnabled,
									"Debugger Mode": ft || Re.debuggerData !== void 0,
								},
								nt = [
									"Normal Chat",
									"Long Context Chat",
									"Debugger Mode",
								].filter((gt) => bt[gt]),
								lt = nt.indexOf(et),
								ct = De ?? nt[(lt + 1) % nt.length];
							ct !== et &&
								(ct === "Long Context Chat"
									? (0, t.batch)(() => {
											this.Y.setChatData(
												"tabs",
												(gt, ht) => gt.tabId === Re?.tabId,
												"interpreterData",
												void 0,
											),
												this.Y.setChatData(
													"tabs",
													(gt, ht) => gt.tabId === Re?.tabId,
													"longContextModeEnabled",
													!0,
												),
												this.Y.setChatData(
													"tabs",
													(gt, ht) => gt.tabId === Re?.tabId,
													"debuggerData",
													void 0,
												);
										})
									: ct === "Debugger Mode"
										? (0, t.batch)(() => {
												this.Y.setChatData(
													"tabs",
													(gt, ht) => gt.tabId === Re?.tabId,
													"interpreterData",
													void 0,
												),
													this.Y.setChatData(
														"tabs",
														(gt, ht) => gt.tabId === Re?.tabId,
														"longContextModeEnabled",
														!1,
													),
													this.Y.setChatData(
														"tabs",
														(gt, ht) => gt.tabId === Re?.tabId,
														"debuggerData",
														{},
													);
											})
										: ct === "Normal Chat" &&
											(0, t.batch)(() => {
												this.Y.setChatData(
													"tabs",
													(gt, ht) => gt.tabId === Re?.tabId,
													"interpreterData",
													void 0,
												),
													this.Y.setChatData(
														"tabs",
														(gt, ht) => gt.tabId === Re?.tabId,
														"longContextModeEnabled",
														!1,
													),
													this.Y.setChatData(
														"tabs",
														(gt, ht) => gt.tabId === Re?.tabId,
														"debuggerData",
														void 0,
													);
											}));
						});
					}
					async newFollowup(De = !0) {
						this.Y.persistSelectedChat(!0);
						const Re =
								this.Y.chatData.selectedTabId ?? this.Y.chatData.tabs[0].tabId,
							je = this.Y.chatData.tabs.find((Ve) => Ve.tabId === Re);
						je.bubbles[je.bubbles.length - 1].type !== "user" &&
							this.Y.setChatData(
								"tabs",
								(Ve, Ze) => Ve.tabId === Re,
								"bubbles",
								(Ve) => [...Ve, this.createUserBubble({ tabId: Re })],
							),
							De &&
								(je.bubbles.length > 1
									? await this.focusFollowup()
									: await this.focus());
					}
					async newChatWithSelection(De, Re) {
						this.Q.setApplicationUserPersistentStorage("docState", {
							usableDocs: [],
						}),
							await this.newChat(Re),
							await this.insertSelectionIntoChat(De, {
								doNotInsertIfDuplicate: Re?.doNotInsertIfDuplicate,
							});
					}
					async tryInsertErrorIntoChat(De) {
						let Re = De?.marker;
						if (!Re) {
							const je = this.F.getActiveCodeEditor();
							if (!je) return !1;
							const Ve = je.getModel(),
								Ze = je.getPosition();
							if (!Ze || !Ve) return !1;
							const et = Ze?.lineNumber;
							if (!et) return !1;
							const rt = je.getLineDecorations(et);
							if (!rt) return !1;
							const ft = rt
								.map((bt) => {
									const nt = this.N.getMarker(Ve.uri, bt);
									return !nt ||
										(nt.severity != $.MarkerSeverity.Error &&
											nt.severity != $.MarkerSeverity.AI &&
											nt.severity != $.MarkerSeverity.Warning) ||
										!bt.range.containsPosition(Ze)
										? !1
										: nt;
								})
								.filter((bt) => !!bt);
							if (
								(ft.sort((bt, nt) =>
									bt.severity === nt.severity
										? 0
										: bt.severity === $.MarkerSeverity.Error
											? -1
											: nt.severity === $.MarkerSeverity.Error
												? 1
												: bt.severity === $.MarkerSeverity.Warning
													? -1
													: nt.severity === $.MarkerSeverity.Warning
														? 1
														: bt.severity === $.MarkerSeverity.AI
															? -1
															: nt.severity === $.MarkerSeverity.AI
																? 1
																: 0,
								),
								ft.length === 0)
							)
								return !1;
							Re = ft[0];
						}
						return await this.insertMarkerIntoChat(Re), !0;
					}
					async insertExplainSymbolIntoChat({ editorUri: De, symbolName: Re }) {
						this.Y.persistSelectedChat(!0);
						const Ve = this.F.listCodeEditors().find(
								(gt) => gt.hasModel() && gt.getModel()?.uri.toString() === De,
							),
							Ze = Ve?.getModel();
						if (!Ze || !Ve) return;
						const et = Ve.getPosition();
						if (!et) return;
						const rt = new h.$iL(
								et.lineNumber,
								1,
								et.lineNumber,
								Ze.getLineMaxColumn(et.lineNumber),
							),
							ft = `What does \`${Re}\` do?`;
						(!this.Y.chatData.tabs[0].tabId ||
							(0, xe.doesTabHaveExactlyOneUserBubbleWithNoText)(
								this.Y.chatData.tabs[0],
							)) &&
							(this.Y.setChatData(
								"selectedTabId",
								this.Y.chatData.tabs[0].tabId,
							),
							await this.focus());
						const bt = (0, u.$9g)(),
							nt = this.createUserBubble({ tabId: bt, text: ft }),
							lt = {
								tabId: bt,
								chatTitle: "",
								bubbles: [nt],
								lastSendTime: Date.now(),
								tabState: se.TabState.chat,
								longContextModeEnabled:
									this.Q.applicationUserPersistentStorage.isLongContextMode ===
										!0 &&
									this.Q.applicationUserPersistentStorage
										.longContextFlagEnabled2 === !0,
								lastFocusedBubbleId: nt.id,
							};
						this.Y.setChatData("tabs", (gt) => [lt, ...gt]);
						const ct = await this.getEditorCode(rt);
						this.Y.setChatData(
							"tabs",
							(gt, ht) => gt.tabId === lt.tabId,
							"bubbles",
							(gt, ht) => ht === 0 && gt.type === "user",
							"selections",
							(gt) => [...gt, ct],
						),
							this.Y.setChatData("selectedTabId", lt.tabId),
							await this.focus(),
							this.submitChat({ bubbleID: nt.id, tabID: lt.tabId });
					}
					async insertIntoChat(De) {
						this.Y.persistSelectedChat(!0);
						const Re = this.F.listCodeEditors();
						let je = Re.find(
							(bt) =>
								bt.hasModel() && bt.getModel()?.uri.toString() === De.editorUri,
						);
						if (
							De.editorUri !== "" &&
							(!je || !je?.hasModel()) &&
							(await this.z.openEditor({
								resource: r.URI.parse(De.editorUri),
								options: { preserveFocus: !0, pinned: !0 },
							}),
							(je = Re.find(
								(bt) =>
									bt.hasModel() &&
									bt.getModel()?.uri.toString() === De.editorUri,
							)),
							!je || !je?.hasModel())
						)
							return;
						const Ve =
								this.Y.chatData.selectedTabId ?? this.Y.chatData.tabs[0].tabId,
							Ze = this.Y.chatData.tabs.find((bt) => bt.tabId === Ve),
							et = Ze.bubbles[Ze.bubbles.length - 1];
						(!this.Y.chatData.tabs[0].tabId ||
							(0, xe.doesTabHaveExactlyOneUserBubbleWithNoText)(
								this.Y.chatData.tabs[0],
							)) &&
							(this.Y.setChatData(
								"selectedTabId",
								this.Y.chatData.tabs[0].tabId,
							),
							await this.focus()),
							De.isCodebaseContext &&
								(De.message = `{"root":{"children":[{"children":[{"detail":1,"format":0,"mode":"segmented","style":"","text":"@Codebase","type":"mention","version":1,"mentionName":"Codebase","storedKey":"4"},{"detail":0,"format":0,"mode":"normal","style":"","text":"${De.message}","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`);
						let rt = Ve,
							ft;
						if (De.lastBubble) {
							const bt = Ze.bubbles[Ze.bubbles.length - 1].type === "user";
							(ft = this.createUserBubble({ tabId: rt, text: De.message })),
								this.Y.setChatData(
									"tabs",
									(nt, lt) => nt.tabId === rt,
									"bubbles",
									(nt) => (bt && nt.pop(), [...nt, ft]),
								);
						} else {
							const bt = (0, u.$9g)();
							ft = this.createUserBubble({ tabId: bt, text: De.message });
							const nt = {
								tabId: bt,
								chatTitle: "",
								bubbles: [ft],
								lastSendTime: Date.now(),
								tabState: se.TabState.chat,
								longContextModeEnabled:
									this.Q.applicationUserPersistentStorage.isLongContextMode ===
										!0 &&
									this.Q.applicationUserPersistentStorage
										.longContextFlagEnabled2 === !0,
								lastFocusedBubbleId: ft.id,
							};
							this.Y.setChatData("tabs", (lt) => [nt, ...lt]), (rt = nt.tabId);
						}
						if (De.preserveSelection)
							et.type === "user" &&
								this.Y.setChatData(
									"tabs",
									(bt, nt) => bt.tabId === rt,
									"bubbles",
									(bt, nt) => nt === 0 && bt.type === "user",
									"selections",
									(bt) => [...bt, ...et.selections],
								);
						else {
							const bt = [];
							De.range !== void 0 &&
								je !== void 0 &&
								bt.push(await this.getEditorCode(De.range, je)),
								this.Y.setChatData(
									"tabs",
									(nt, lt) => nt.tabId === rt,
									"bubbles",
									(nt, lt) => lt === 0 && nt.type === "user",
									"selections",
									(nt) => [...nt, ...bt],
								);
						}
						De.isCodebaseContext &&
							this.Y.setChatData(
								"tabs",
								(nt, lt) => nt.tabId === rt,
								"bubbles",
								(nt, lt) => nt.id === ft.id && nt.type === "user",
								"usesCodebase",
								!0,
							),
							this.Y.setChatData("selectedTabId", rt),
							await this.focus(),
							De.doNotSubmit !== !0 &&
								(this.refreshReactiveContextItem(rt, ft.id),
								De.isTutor === !0
									? this.submitTutor({ bubbleID: ft.id, tabID: rt })
									: De.includeCurrentFile
										? this.submitChat({
												bubbleID: ft.id,
												tabID: rt,
												shouldIncludeCurrentFile: De.includeCurrentFile,
											})
										: this.submitChat({ bubbleID: ft.id, tabID: rt }));
					}
					async insertMarkerIntoChat(De) {
						De.aiLintBugData === void 0
							? await this.insertErrorIntoChat({
									errorMessage: De.message,
									editorUri: De.resource.toString(),
									range: new h.$iL(
										De.startLineNumber,
										De.startColumn,
										De.endLineNumber,
										De.endColumn,
									),
								})
							: await this.insertIntoChat({
									message: `A linter gave this error message to me:

"${De.message}"

It also suggested I replace

\`\`\`
${De.aiLintBugData.originalText}
\`\`\`

with

\`\`\`${De.aiLintBugData.replaceText}
\`\`\`

Is this correct? Why?`,
									editorUri: De.resource.toString(),
									includeCurrentFile: !0,
								});
					}
					async insertErrorIntoChat({
						errorMessage: De,
						editorUri: Re,
						range: je,
						addToFollowUp: Ve = !1,
					}) {
						this.Y.persistSelectedChat(!0);
						const et = this.F.listCodeEditors().find(
								(ht) => ht.hasModel() && ht.getModel()?.uri.toString() === Re,
							),
							rt = et?.getModel();
						if (!rt || !et) return;
						const ft = et.getPosition();
						(!ft || !je.containsPosition(ft)) &&
							et.setPosition(je.getStartPosition());
						const bt = rt.getValueInRange(je),
							nt = Math.max(1, je.startLineNumber - 1),
							lt = Math.min(rt.getLineCount(), je.endLineNumber + 2),
							ct = new h.$iL(nt, 1, lt, rt.getLineMaxColumn(lt)),
							gt = `For the code present, we get this error:
\`\`\`
${De}
\`\`\`
How can I resolve this? If you propose a fix, please make it concise.`;
						await this.insertIntoChat({
							message: gt,
							editorUri: Re,
							range: ct,
							includeCurrentFile: !0,
							lastBubble: Ve === !0,
						});
					}
					async insertTerminalSelectionIntoChat(De) {
						const Re = this.C.activeInstance;
						let je;
						Re !== void 0 && (je = await this.getTerminalText(De)),
							je &&
								this.Y.setChatData(
									"tabs",
									(Ve, Ze) =>
										Ve.tabId === this.Y.chatData.selectedTabId ||
										(this.Y.chatData.selectedTabId === void 0 && Ze === 0),
									"bubbles",
									(Ve, Ze) => Ze === 0 && Ve.type === "user",
									"terminalSelections",
									(Ve) => [...Ve, je],
								);
					}
					selectPreviousTab() {
						const De = this.Bb;
						let je =
							this.Y.chatData.tabs.findIndex((Ve) => Ve.tabId === De.tabId) + 1;
						je === this.Y.chatData.tabs.length && (je = 0),
							this.Y.setChatData(
								"selectedTabId",
								this.Y.chatData.tabs[je].tabId,
							),
							this.focus();
					}
					selectNextTab() {
						const De = this.Bb;
						let je =
							this.Y.chatData.tabs.findIndex((Ve) => Ve.tabId === De.tabId) - 1;
						je === -1 && (je = this.Y.chatData.tabs.length - 1),
							this.Y.setChatData(
								"selectedTabId",
								this.Y.chatData.tabs[je].tabId,
							),
							this.focus();
					}
					async startIndexingListener(De) {
						await this.focus();
						const Re = this.selectedTab().lastFocusedBubbleId,
							je = this.selectedTab().bubbles.find((et) => et.id === Re);
						if (!je || je.type !== "user") return;
						const Ve = new Set();
						this.Y.setChatData(
							"tabs",
							(et, rt) =>
								et.tabId === this.Y.chatData.selectedTabId ||
								(this.Y.chatData.selectedTabId === void 0 && rt === 0),
							"bubbles",
							(et, rt) => et.id === Re && et.type === "user",
							{
								indexingDocId: De,
								indexingStatus: "running",
								indexingPageName: void 0,
							},
						);
						let Ze = [];
						try {
							for (let et = 0; et < 10; et++) {
								if (
									(
										await this.G.uploadDocumentationStatus({
											docIdentifier: De,
										})
									).status === i.UploadedStatus_Status.FAILED
								) {
									this.Y.setChatData(
										"tabs",
										(bt, nt) =>
											bt.tabId === this.Y.chatData.selectedTabId ||
											(this.Y.chatData.selectedTabId === void 0 && nt === 0),
										"bubbles",
										(bt, nt) => bt.id === Re && bt.type === "user",
										{ indexingStatus: "failure" },
									);
									return;
								}
								Ze = (await this.G.getPages({ docIdentifier: De })).pages;
								const ft = Ze.filter((bt) => !Ve.has(bt));
								for (const bt of ft) {
									if (Ve.has(bt)) continue;
									Ve.add(bt);
									const nt = this.selectedTab().bubbles.find(
										(lt) => lt.id === Re,
									);
									if (
										nt === void 0 ||
										nt.type !== "user" ||
										nt.indexingDocId !== De
									)
										return;
									this.Y.setChatData(
										"tabs",
										(lt, ct) =>
											lt.tabId === this.Y.chatData.selectedTabId ||
											(this.Y.chatData.selectedTabId === void 0 && ct === 0),
										"bubbles",
										(lt, ct) => lt.id === Re && lt.type === "user",
										"indexingPageName",
										bt,
									),
										await new Promise((lt) => setTimeout(lt, 200));
								}
								Ze.length === 0
									? await new Promise((bt) => setTimeout(bt, 2e3))
									: ft.length === 0 &&
										(await new Promise((bt) => setTimeout(bt, 500)));
							}
						} catch (et) {
							console.error(et),
								console.log("^ caught error while showing indexing ui"),
								this.Y.setChatData(
									"tabs",
									(rt, ft) =>
										rt.tabId === this.Y.chatData.selectedTabId ||
										(this.Y.chatData.selectedTabId === void 0 && ft === 0),
									"bubbles",
									(rt, ft) => rt.id === Re && rt.type === "user",
									{ indexingStatus: "failure" },
								);
							return;
						}
						this.Y.setChatData(
							"tabs",
							(et, rt) =>
								et.tabId === this.Y.chatData.selectedTabId ||
								(this.Y.chatData.selectedTabId === void 0 && rt === 0),
							"bubbles",
							(et, rt) => et.id === Re && et.type === "user",
							{
								indexingStatus: void 0,
								indexingPageName: void 0,
								indexingDocId: void 0,
							},
						);
					}
					async getSelectionToInsert(De) {
						switch (De) {
							case "editor":
								return await this.getEditorCode();
							case "terminal":
								return await this.getTerminalText();
						}
					}
					async insertSelectionIntoChat(De, Re) {
						this.L.publicLogCapture("Inserted Selection Into Chat");
						let je;
						if (
							this.Q.applicationUserPersistentStorage.checklistState
								?.doneAddingCodeSelection !== !0
						) {
							const Ve = this.Q.applicationUserPersistentStorage.checklistState;
							this.Q.setApplicationUserPersistentStorage(
								"checklistState",
								(Ze) => ({ ...(Ze ?? {}), doneAddingCodeSelection: !0 }),
							);
						}
						switch (De) {
							case "editor":
								(je = await this.getEditorCode()),
									je &&
										this.L.publicLogCapture(
											"Inserted Code Selection Into Chat",
										);
								break;
							case "terminal":
								(je = await this.getTerminalText()),
									je &&
										this.L.publicLogCapture(
											"Inserted Shell Selection Into Chat",
										);
								break;
						}
						if (je) {
							De === "terminal"
								? this.mb.registerEvent(
										"chat.insert_selection.terminal.non_empty",
									)
								: De === "editor" &&
									this.mb.registerEvent(
										"chat.insert_selection.editor.non_empty",
									);
							const Ve = this.Ib;
							this.addContext({
								tabId: this.Bb.tabId,
								bubbleId: Ve.id,
								contextType:
									De === "terminal" ? "terminalSelections" : "selections",
								value: je,
							}),
								await this.focus();
						} else {
							De === "terminal"
								? this.mb.registerEvent("chat.insert_selection.terminal.empty")
								: De === "editor" &&
									this.mb.registerEvent("chat.insert_selection.editor.empty");
							return;
						}
					}
					async insertFileSelectionIntoChat(De, Re, je) {
						Re = Re ?? this.Y.chatData.selectedTabId;
						const Ve = this.Fb(Re);
						Ve &&
							((je = je ?? Ve.lastFocusedBubbleId),
							this.addContext({
								tabId: Re,
								bubbleId: je,
								contextType: "selections",
								value: De,
								uuid: De.uuid,
							}));
					}
					async insertSelectionIntoFollowup(De) {
						let Re;
						switch (De) {
							case "editor":
								Re = await this.getEditorCode();
								break;
							case "terminal":
								Re = await this.getTerminalText();
								break;
						}
						if (!Re) return;
						const je =
								this.Y.chatData.selectedTabId ?? this.Y.chatData.tabs[0].tabId,
							Ve = this.Y.chatData.tabs.find((et) => et.tabId === je),
							Ze = Ve.bubbles[Ve.bubbles.length - 1].id;
						this.addContext({
							tabId: je,
							bubbleId: Ze,
							contextType: "selections",
							value: Re,
							uuid: Re.uuid,
						}),
							Ve.bubbles.length > 1
								? await this.focusFollowup()
								: await this.focus();
					}
					selectedTab() {
						return this.Bb;
					}
					getFoldersInBubblesUpTo(De, Re) {
						const je = this.Y.chatData.tabs.find((Ze) => Ze.tabId === De);
						if (!je) return [];
						const Ve = je.bubbles.findIndex((Ze) => Ze.id === Re);
						return Ve === -1
							? []
							: je.bubbles
									.slice(0, Ve + 1)
									.map((Ze) =>
										Ze.type === se.BubbleType.USER_CHAT
											? (Ze.folderSelections ?? [])
											: [],
									)
									.flat();
					}
					async bc({
						aiBubbleId: De,
						originatingBubbleId: Re,
						textOfOriginatingBubble: je,
						tabID: Ve,
						followupID: Ze,
						cancelled: et,
						generationUUID: rt,
						dontPassContext: ft,
					}) {
						if (rt && this.generationIDsWithNoFollowup.has(rt)) return;
						const bt = this.Y.chatData.tabs.find((Rt) => Rt.tabId === Ve);
						if (bt === void 0) {
							console.error(`Tab ${Ve} does not exist`);
							return;
						}
						if (this.tabIDToQueuedFollowupID.get(Ve) !== Ze) {
							console.log(
								`Followup ID ${Ze} is not the same as the queued followup ID ${this.tabIDToQueuedFollowupID.get(Ve)} (NOT A BUG)`,
							);
							return;
						}
						const nt = bt.bubbles.findIndex((Rt) => Rt.id === De);
						if (nt === -1 || nt !== bt.bubbles.length - 1) return;
						const lt = this.createUserBubble({
							tabId: Ve,
							text: "",
							followup: !0,
						});
						this.Y.setChatData(
							"tabs",
							(Rt, Nt) => Rt.tabId === Ve,
							"bubbles",
							(Rt) => [...Rt, lt],
						),
							this.Y.setChatData("tabs", (Rt, Nt) => Rt.tabId === Ve, {
								lastSendTime: Date.now(),
								lastFocusedBubbleId: lt.id,
							}),
							this.Y.sortTabs();
						let ct = !1,
							gt = bt.bubbles.findIndex((Rt) => Rt.id === Re),
							ht = !1;
						if (gt !== -1) {
							const Rt = bt.bubbles[gt];
							Rt.type === "ai"
								? (ct = Rt.text === je)
								: Rt.type === "user" &&
									((ct = Rt.text === je), (ht = this.isFocused(Rt.id)));
						}
						this.Y.chatData.inputBoxDelegate.focus();
					}
					cc({ bubbleID: De, text: Re, tabID: je }) {
						const Ve = this.Y.chatData.tabs.find((et) => et.tabId === je);
						if (Ve === void 0) {
							console.error(`Tab ${je} does not exist`);
							return;
						}
						const Ze = Ve.bubbles.find((et) => et.id === De);
						if (Ze === void 0) {
							console.error(`Bubble ${De} does not exist`);
							return;
						}
						if (Ze.type !== "ai") {
							console.error(`Bubble ${De} is not an ai bubble`);
							return;
						}
						this.Y.setChatData(
							"tabs",
							(et, rt) => et.tabId === je,
							"bubbles",
							(et) => et.id === De,
							"text",
							(et) => (et ?? "") + Re,
						);
					}
					serializedState() {
						const De = {
							...this.Y.chatData,
							pinnedContexts: {
								fileSelections: this.Y.chatData.pinnedContexts.fileSelections,
								codeSelections: this.Y.chatData.pinnedContexts.codeSelections,
							},
							tabs: this.Y.chatData.tabs.map((Re) => ({
								...Re,
								bubbles: Re.bubbles.map((je) => {
									if (je.type === se.BubbleType.USER_CHAT) {
										const Ve = je,
											{
												errorDetails: Ze,
												codebaseResults: et,
												cachedResults: rt,
												...ft
											} = Ve;
										return (ft.initText = ft.richText), delete ft.delegate, ft;
									} else if (je.type === se.BubbleType.AI_CHAT) {
										const Ve = je,
											{ contextData: Ze, codeBlocks: et, ...rt } = Ve;
										return (rt.rawText = rt.text), { ...rt, codeBlocks: [] };
									} else return je;
								}),
							})),
							chatDataVersion: se.$vgc,
						};
						return JSON.stringify(De);
					}
					saveState() {
						this.Y.persistSelectedChat(!1),
							this.y.store(
								this.Y.chatDataStorageID,
								this.serializedState(),
								(0, He.$qIb)(this.$),
								P.StorageTarget.MACHINE,
							);
					}
					registerAuxiliaryPaneView(De) {
						this.gb.registerAuxiliaryPaneView(De);
					}
					registerTasksPaneView(De) {
						this.gb.registerTasksPaneView(De);
					}
					registerEditor(De) {
						this.gb.registerEditor(De);
					}
					updateHoverWidget() {
						this.gb.updateHoverWidget();
					}
					async openAsSidebarView() {
						return (
							(0, Oe.$Kac)() &&
								(this.gb.hide(),
								await new Promise((De) => setTimeout(De, 100))),
							this.gb.openAsSidebarView().then(() => {
								this.Y.chatData.inputBoxDelegate.focus();
							})
						);
					}
					async openAsEditorView() {
						await this.gb.openAsEditorView(),
							this.Y.chatData.inputBoxDelegate.focus();
					}
					async focus() {
						if (this.Bb.lastFocusedBubbleId) {
							const De =
								this.Y.chatData.inputBoxDelegateMap[
									this.Bb.lastFocusedBubbleId ?? ""
								];
							De ? De.focus() : this.focusInput();
						} else this.focusInput();
					}
					async focusFollowup() {
						this.Y.chatData.inputBoxDelegate?.focus?.();
					}
					async focusBubble(De) {
						await this.gb.focusBubble(De);
					}
					focusInput() {
						this.Y.chatData.inputBoxDelegate?.focus?.();
					}
					isFocused(De) {
						return this.gb.isFocused(De);
					}
					async show() {
						await this.gb.show();
					}
					historyVisible() {
						return this.gb.historyVisible();
					}
					showChatHistory() {
						this.gb.showChatHistory();
					}
					hideChatHistory() {
						this.gb.hideChatHistory();
					}
					chatVisible() {
						return this.gb.chatVisible();
					}
					showTasksPane() {
						this.gb.showTasksPane();
					}
					hide() {
						this.gb.hide();
					}
					deleteTab(De) {
						this.Y.persistSelectedChat(!0),
							this.Y.selectedTabId === De
								? this.Y.chatData.tabs.length === 1
									? this.resetCurrentTab()
									: (this.Y.chatData.tabs[0].tabId === De
											? this.Y.setChatData(
													"selectedTabId",
													this.Y.chatData.tabs[1].tabId,
												)
											: this.Y.setChatData(
													"selectedTabId",
													this.Y.chatData.tabs[0].tabId,
												),
										this.Y.setChatData(
											"tabs",
											this.Y.chatData.tabs.filter((Re) => Re.tabId !== De),
										))
								: this.Y.setChatData(
										"tabs",
										this.Y.chatData.tabs.filter((Re) => Re.tabId !== De),
									);
					}
					clearBubbleContext(De, Re) {
						const je = {},
							Ve = this.Gb(De, Re);
						for (const Ze of ge.$Wgc)
							Array.isArray(Ve[Ze]) ? (je[Ze] = []) : (je[Ze] = void 0);
						this.Hb(De, Re, je);
					}
					getUndoRedoUri(De, Re) {
						return r.URI.from({ scheme: "aichat", path: `${De}-${Re}` });
					}
					addContext(De) {
						const {
							tabId: Re,
							bubbleId: je,
							contextType: Ve,
							value: Ze,
							uuid: et,
							shouldShowPreview: rt = !0,
							addToUndoRedo: ft = !0,
						} = De;
						this.xb.addContext({
							contextType: Ve,
							value: Ze,
							setContext: (...bt) => {
								this.Y.setChatData(
									"tabs",
									(nt) => nt.tabId === Re,
									"bubbles",
									(nt) => nt.id === je && nt.type === "user",
									...bt,
								);
							},
							getContext: () => {
								const bt = this.Gb(Re, je);
								if (!bt || bt.type !== "user")
									throw new Error("[aichat] Bubble not found");
								return bt;
							},
							undoRedoUri: ft ? this.getUndoRedoUri(Re, je) : void 0,
							mention: et ? { uuid: et } : void 0,
						}),
							rt &&
								setTimeout(() => {
									let bt;
									const nt = this.Gb(Re, je);
									(0, ge.$Ygc)(Ve) &&
										(bt = nt[Ve].findIndex((lt) => (0, ge.$1gc)(Ve, lt, Ze))),
										this.w.fire({
											tabId: Re,
											bubbleId: je,
											contextType: Ve,
											index: bt,
										});
								}),
							this.u.fire({ tabId: Re, bubbleId: je, contextType: Ve });
					}
					removeContext(De) {
						const {
								tabId: Re,
								bubbleId: je,
								contextType: Ve,
								index: Ze,
								addToUndoRedo: et = !0,
							} = De,
							rt = this.xb.removeContext({
								contextType: Ve,
								setContext: (...ft) => {
									this.Y.setChatData(
										"tabs",
										(bt) => bt.tabId === Re,
										"bubbles",
										(bt) => bt.id === je && bt.type === "user",
										...ft,
									);
								},
								getContext: () => {
									const ft = this.Gb(Re, je);
									if (!ft || ft.type !== "user")
										throw new Error("[aichat] Bubble not found");
									return ft;
								},
								index: Ze,
								undoRedoUri: et ? this.getUndoRedoUri(Re, je) : void 0,
							});
						return (
							this.s.fire({
								tabId: Re,
								bubbleId: je,
								contextType: Ve,
								removedMentionIds: rt.map((ft) => ft.uuid),
							}),
							rt
						);
					}
					removeMention(De, Re, je) {
						const Ve = this.Fb(De);
						this.xb.removeMention({
							uuid: je,
							setContext: (...Ze) => {
								this.Y.setChatData(
									"tabs",
									(et) => et.tabId === De,
									"bubbles",
									(et) => et.id === Re && et.type === "user",
									...Ze,
								);
							},
							getContext: () => {
								const Ze = this.Gb(De, Re);
								if (!Ze || Ze.type !== "user")
									throw new Error("[aichat] Bubble not found");
								return Ze;
							},
							undoRedoUri: this.getUndoRedoUri(De, Re),
						});
					}
					async getGitGraphFileSuggestionsForBubble(De, Re, je = Be) {
						let Ve = 0;
						for (; !this.ob.provider && Ve < 20; )
							await new Promise((ht) => setTimeout(ht, 1e3)), Ve++;
						const Ze = this.Gb(De, Re);
						if (!Ze || Ze.type !== "user") return [];
						let et = Ze.fileSelections;
						if (
							(this.Ob && (et = et.filter((ht) => ht.isCurrentFile !== !0)),
							!et)
						)
							return [];
						const rt = et.map(async (ht) =>
								(
									await this.tb.getRelatedFiles({
										uri: r.URI.from(ht.uri),
										maxNumFiles: je,
									})
								).map((Nt) => ({ ...Nt })),
							),
							bt = (await Promise.all(rt)).flat(),
							nt = new Set(et.map((ht) => ht.uri.toString()));
						return bt
							.reduce((ht, Rt) => {
								const Nt = Rt.uri;
								if (nt.has(Nt.toString())) return ht;
								const jt = ht.find((ti) =>
									ue.$dh.isEqual(r.URI.from(ti.uri), Rt.uri),
								);
								if (!jt || Rt.weight > jt.weight) {
									if (jt) return ht;
									ht.push(Rt);
								}
								return ht;
							}, [])
							.sort((ht, Rt) => Rt.weight - ht.weight)
							.slice(0, je)
							.map((ht) => ({
								uri: ht.uri,
								fileName: (0, ae.$sc)(ht.uri.fsPath),
								weight: ht.weight,
							}));
					}
					refreshReactiveContextItem(De, Re) {
						if (this.Fb(De)?.noReactiveContext) return;
						const Ve = this.Gb(De, Re);
						if (Ve.type !== "user") return;
						let Ze = this.Y.getCurrentFile();
						const et = Ze && Ze.uri.scheme === Ce.Schemas.notepad,
							rt = Ze && Ze.uri.scheme === Ce.Schemas.vscodeTerminal;
						et && Ze && (Ze = { notepadId: Ze.uri.path, isCurrentNotepad: !0 });
						const ft = (nt, lt) => {
							let ct = [...nt];
							const gt = ct.findIndex(
									(kt) =>
										("isCurrentFile" in kt && kt.isCurrentFile === !0) ||
										("isCurrentNotepad" in kt && kt.isCurrentNotepad === !0),
								),
								ht = Ze ? (0, ge.$Zgc)(lt, Ze) : void 0,
								Rt = ht
									? ct.findIndex((kt) => (0, ge.$Zgc)(lt, kt) === ht)
									: -1,
								Nt =
									Rt !== -1 &&
									"addedWithoutMention" in ct[Rt] &&
									ct[Rt].addedWithoutMention;
							if (gt !== -1) {
								const kt = ct[gt],
									hi = this.xb.getMentions(Ve, lt, kt).length > 0,
									Kt =
										"addedWithoutMention" in kt &&
										kt.addedWithoutMention === !0;
								if (Ze)
									if (
										("uri" in kt && !(0, r.$Ac)(Ze.uri, kt.uri)) ||
										("notepadId" in kt && kt.notepadId !== Ze.notepadId)
									)
										hi || Kt
											? ((ct[gt] = {
													...kt,
													...(lt !== "notepads"
														? { isCurrentFile: !1 }
														: { isCurrentNotepad: !1 }),
												}),
												ct.unshift({ ...Ze, addedWithoutMention: Nt }))
											: (ct[gt] = { ...Ze, addedWithoutMention: Nt });
									else return;
								else
									hi || Kt
										? (ct[gt] = {
												...kt,
												...(lt !== "notepads"
													? { isCurrentFile: !1 }
													: { isCurrentNotepad: !1 }),
											})
										: ct.splice(gt, 1);
							} else Ze && ct.unshift({ ...Ze, addedWithoutMention: Nt });
							const jt = new Set();
							return ct.filter((kt, hi) => {
								const Kt = (0, ge.$Zgc)(lt, kt);
								return jt.has(Kt) ? !1 : (jt.add(Kt), !0);
							});
						};
						let bt = {};
						if (rt) {
							const nt = ft(Ve.terminalFiles || [], "terminalFiles");
							if (nt === void 0) return;
							(bt.terminalFiles = nt),
								(bt.notepads = (Ve.notepads || []).filter(
									(lt) => lt.isCurrentNotepad !== !0,
								));
						} else if (et) {
							const nt = ft(Ve.notepads || [], "notepads");
							if (nt === void 0) return;
							(bt.notepads = nt),
								(bt.fileSelections = (Ve.fileSelections || []).filter(
									(lt) => lt.isCurrentFile !== !0,
								)),
								(bt.terminalFiles = (Ve.terminalFiles || []).filter(
									(lt) => lt.isCurrentFile !== !0,
								));
						} else {
							const nt = ft(Ve.fileSelections || [], "fileSelections");
							if (nt === void 0) return;
							(bt.fileSelections = nt),
								(bt.terminalFiles = (Ve.terminalFiles || []).filter(
									(lt) => lt.isCurrentFile !== !0,
								)),
								(bt.notepads = (Ve.notepads || []).filter(
									(lt) => lt.isCurrentNotepad !== !0,
								));
						}
						this.Hb(De, Re, bt);
					}
					removeNonExistentNotepads(De, Re) {
						if (!this.Fb(De)) {
							console.error(`Tab ${De} does not exist`);
							return;
						}
						const Ve = this.Gb(De, Re);
						if (!Ve || Ve.type !== "user") {
							console.error(
								`Bubble ${Re} does not exist or is not a user bubble`,
							);
							return;
						}
						const Ze = (Ve.notepads || []).filter(
							(et) => !!this.zb.notepadsData.notepads[et.notepadId],
						);
						Ze.length !== Ve.notepads?.length &&
							(this.Hb(De, Re, { notepads: Ze }),
							console.log(
								`Removed non-existent notepads from bubble ${Re} in tab ${De}`,
							));
					}
				};
				(e.$pcc = qe),
					(e.$pcc = qe =
						Ne(
							[
								j(0, P.$lq),
								j(1, ee.$IY),
								j(2, z.$iIb),
								j(3, a.$dtb),
								j(4, x.$Nfc),
								j(5, ie.$a9b),
								j(6, f.$6j),
								j(7, Q.$HMb),
								j(8, k.$km),
								j(9, X.$W6b),
								j(10, c.$bub),
								j(11, H.$s0b),
								j(12, _.$u0b),
								j(13, v.$0zb),
								j(14, G.$J6b),
								j(15, K.$T8b),
								j(16, p.$ek),
								j(17, Y.$S6b),
								j(18, W.$zIb),
								j(19, R.$kgc),
								j(20, I.$Z6b),
								j(21, D.$Vi),
								j(22, l.$Li),
								j(23, te.$mEb),
								j(24, ne.$EY),
								j(25, ee.$IY),
								j(26, F.$r0b),
								j(27, q.$$9b),
								j(28, N.$rgc),
								j(29, n.$MO),
								j(30, V.$$Db),
								j(31, B.$75),
								j(32, g.$9Db),
								j(33, M.$V7b),
								j(34, L.$5X),
								j(35, y.$jEb),
								j(36, b.$3Db),
								j(37, o.$gj),
								j(38, re.$26b),
								j(39, le.$q8b),
								j(40, pe.$N9b),
								j(41, ye.$cEb),
								j(42, Je.$lcc),
								j(43, fe.$GN),
								j(44, me.$H7b),
								j(45, ve.$Q9b),
								j(46, be.$kcc),
								j(47, Le.$y9b),
								j(48, Ke.$ll),
							],
							qe,
						)),
					(0, s.$lK)(N.$qgc, qe, s.InstantiationType.Delayed);
				let Ae = class extends d.$1c {
					constructor(De, Re, je, Ve, Ze, et, rt, ft) {
						super(),
							(this.z = De),
							(this.C = Re),
							(this.F = je),
							(this.G = Ve),
							(this.H = Ze),
							(this.I = et),
							(this.J = rt),
							(this.L = ft),
							(this.j = []),
							(this.w = new Set()),
							(this.y = this.D(this.F.createScoped(this))),
							this.G.bufferChangeEvents(() => {
								(this.n = N.$sgc.bindTo(Ve)),
									(this.q = N.$tgc.bindTo(Ve)),
									(this.s = N.$ugc.bindTo(Ve)),
									this.s.set(
										this.F.workspaceUserPersistentStorage.aiPanePosition,
									),
									this._updateHistoryVisibility(),
									this._updateActiveEditor();
							}),
							this.updateHoverWidget();
						for (const bt of this.C.getGroups(ne.GroupsOrder.CREATION_TIME))
							this._registerGroupListeners(bt);
						this.D(
							this.C.mainPart.onDidLayout(() => {
								for (const bt of this.C.getGroups(ne.GroupsOrder.CREATION_TIME))
									this._registerGroupListeners(bt);
							}),
						),
							this.D(
								this.C.onDidAddGroup((bt) => {
									this._registerGroupListeners(bt);
								}),
							),
							this.D(
								this.C.onDidActivateGroup((bt) => {
									this._registerGroupListeners(bt);
								}),
							),
							this._updateActiveEditor(),
							this.D(
								this.z.onDidActiveEditorChange(() => {
									this._updateActiveEditor();
								}),
							),
							this._updateHistoryVisibility(),
							this.y.onChangeEffect({
								deps: [
									() => this.F.workspaceUserPersistentStorage.aiPanePosition,
								],
								onChange: () => {
									this.s.set(
										this.F.workspaceUserPersistentStorage.aiPanePosition,
									),
										this._updateHistoryVisibility();
								},
							}),
							this.D(
								this.H.onDidChangePartVisibility(() => {
									this._updateMode();
								}),
							),
							this.L.onDidChangeFocusedView((bt) => {
								const nt = this.L.getFocusedViewName();
								nt === N.AIChatConstants.CHAT_VIEW_ID ||
								nt.toLowerCase() === "chat" ||
								nt.toLowerCase() === "aichat"
									? this.F.setNonPersistentStorage("chatState", "isFocused", !0)
									: this.F.setNonPersistentStorage(
											"chatState",
											"isFocused",
											!1,
										);
							}),
							this.D(
								this.L.onDidChangeViewVisibility((bt) => {
									bt.id === N.AIChatConstants.CHAT_VIEW_ID &&
										this._updateMode();
								}),
							);
					}
					_updateActiveEditor() {
						this.z.activeEditorPane?.input?.typeId === A.$ngc.ID
							? this.q.set(!0)
							: this.q.set(!1);
					}
					_registerGroupListeners(De) {
						if (this.w.has(De.id)) return;
						this.w.add(De.id),
							De.editors.some((Ze) => Ze.typeId === A.$ngc.ID) &&
								this.registerEditor(De.id);
						const Re = De.onDidCloseEditor((Ze) => {
								Ze.editor.typeId === A.$ngc.ID &&
									(this.unregisterEditor(De.id), this._updateMode());
							}),
							je = De.onWillOpenEditor((Ze) => {
								Ze.editor?.typeId === A.$ngc.ID && this.registerEditor(De.id);
							});
						this.D(Re), this.D(je);
						const Ve = De.onWillDispose(() => {
							Re.dispose(), je.dispose();
						});
						this.D(Ve);
					}
					registerAuxiliaryPaneView(De) {
						(this.h = De), this.updateHoverWidget();
					}
					registerTasksPaneView(De) {
						(this.tasksPane = De), this.updateHoverWidget();
					}
					registerEditor(De) {
						this.w.has(De) || this._registerGroupListeners(this.C.getGroup(De)),
							this.j.includes(De) || this.j.push(De),
							this._closeEditorViews(this.j.filter((Re) => Re !== De)),
							this.updateHoverWidget();
					}
					unregisterEditor(De) {
						(this.j = this.j.filter((Re) => Re !== De)),
							this.updateHoverWidget();
					}
					updateHoverWidget() {
						let De =
							this.h?.isVisible() ||
							this.j.some((Re) =>
								this.C.getGroup(Re)?.isActive(new A.$ngc()),
							) ||
							!1;
						this.F.setNonPersistentStorage({ shouldShowInsertChatWidget: De });
					}
					_closeEditorViews(De) {
						const Re = De ?? [...this.j];
						return (
							(this.j = this.j.filter((je) => !Re.includes(je))),
							Promise.all(
								Re.map((je) => this.C.getGroup(je)?.closeEditor(new A.$ngc())),
							)
						);
					}
					async openAsSidebarView() {}
					async openAsEditorView() {
						if (
							(this.F.workspaceUserPersistentStorage.aiPanePosition !==
								S.AIPanePosition.EDITOR &&
								(this.hideChatHistory(),
								this.H.setPartHidden(!0, te.Parts.AUXILIARYBAR_PART)),
							this.F.setWorkspaceUserPersistentStorage({
								aiPanePosition: S.AIPanePosition.EDITOR,
							}),
							this.j.length > 0)
						) {
							const je = this.j[0],
								Ve = this.C.getGroup(je);
							if (
								Ve &&
								(this.C.activeGroup.id !== Ve.id || Ve.isActive(new A.$ngc()))
							) {
								await this.C.getGroup(je)?.openEditor(new A.$ngc(), {
									pinned: !0,
								});
								return;
							}
						}
						await this._closeEditorViews();
						let De;
						if (
							this.C.groups.length >= 1 &&
							this.C.groups[0].editors.length > 0
						) {
							const je = this.C.findGroup({ location: ne.GroupLocation.LAST });
							je &&
								je.id == this.C.activeGroup.id &&
								(De = this.C.addGroup(je, ne.GroupDirection.RIGHT));
						}
						const Re = await this.z?.openEditor(
							this.I?.createInstance(A.$ngc),
							De,
						);
						this.updateHoverWidget();
					}
					_getCurrentPane() {
						if (
							this.F.workspaceUserPersistentStorage.aiPanePosition ===
							S.AIPanePosition.SIDEBAR
						)
							return this.h;
						{
							const De = this.j[0];
							if (De === void 0) return;
							const je = this.C.getGroup(De)?.activeEditorPane;
							return je instanceof A.$ogc ? je : void 0;
						}
					}
					async focus(De) {
						await this.show(),
							this.J.publicLog2("ai/chat/focus"),
							this._getCurrentPane()?.focus(De);
					}
					async focusFollowup() {
						await this.show(),
							this.J.publicLog2("ai/chat/focusFollowup"),
							this._getCurrentPane()?.focusFollowup();
					}
					async focusBubble(De) {
						await this.show(), this._getCurrentPane()?.focusBubble(De);
					}
					isFocused(De) {
						return this._getCurrentPane()?.isFocused(De) ?? !1;
					}
					async show() {
						this.F.workspaceUserPersistentStorage.aiPanePosition ===
						S.AIPanePosition.SIDEBAR
							? await this.openAsSidebarView()
							: await this.openAsEditorView();
					}
					historyVisible() {
						return this.n.get() ?? !1;
					}
					_updateHistoryVisibility() {
						this.F.workspaceUserPersistentStorage.aiPanePosition ===
							S.AIPanePosition.EDITOR &&
							this.n.set(
								this.L.isViewVisible(N.AIChatConstants.CHAT_VIEW_ID) ?? !1,
							);
					}
					_updateMode() {
						const De = this.F.workspaceUserPersistentStorage.aiPanePosition,
							Re = this.C.groups;
						De === S.AIPanePosition.EDITOR &&
							Re.every((je) => je.activeEditor?.typeId !== A.$ngc.ID) &&
							this.H.isVisible(te.Parts.AUXILIARYBAR_PART) &&
							this.openAsSidebarView();
					}
					showChatHistory() {
						this.F.workspaceUserPersistentStorage.aiPanePosition ===
							S.AIPanePosition.EDITOR &&
							this.H.setPartHidden(!1, te.Parts.AUXILIARYBAR_PART),
							this.n.set(!0);
					}
					hideChatHistory() {
						this.F.workspaceUserPersistentStorage.aiPanePosition ===
							S.AIPanePosition.EDITOR &&
							this.H.setPartHidden(!0, te.Parts.AUXILIARYBAR_PART),
							this.n.set(!1);
					}
					chatVisible() {
						return this.F.workspaceUserPersistentStorage.aiPanePosition ===
							S.AIPanePosition.SIDEBAR
							? (this.h?.isVisible() ?? !1)
							: this.j.some((De) =>
									this.C.getGroup(De)?.isActive(new A.$ngc()),
								) || !1;
					}
					showTasksPane() {}
					hide() {
						this.F.workspaceUserPersistentStorage.aiPanePosition ===
						S.AIPanePosition.SIDEBAR
							? this.H.setPartHidden(!0, te.Parts.AUXILIARYBAR_PART)
							: this.j.forEach((De) =>
									this.C.getGroup(De)?.closeEditor(new A.$ngc()),
								);
					}
				};
				(e.$qcc = Ae),
					(e.$qcc = Ae =
						Ne(
							[
								j(0, ee.$IY),
								j(1, ne.$EY),
								j(2, v.$0zb),
								j(3, f.$6j),
								j(4, te.$mEb),
								j(5, l.$Li),
								j(6, k.$km),
								j(7, Q.$HMb),
							],
							Ae,
						)),
					(0, s.$lK)(N.$rgc, Ae, s.InstantiationType.Eager);
			},
		)
