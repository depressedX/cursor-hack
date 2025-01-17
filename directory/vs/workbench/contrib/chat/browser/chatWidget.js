import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/types.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/theme/common/themeService.js';
import './chat.js';
import './chatAccessibilityProvider.js';
import './chatInputPart.js';
import './chatListRenderer.js';
import './chatOptions.js';
import '../common/chatAgents.js';
import '../common/chatContextKeys.js';
import '../common/chatModel.js';
import '../common/chatParserTypes.js';
import '../common/chatRequestParser.js';
import '../common/chatService.js';
import '../common/chatSlashCommands.js';
import '../common/chatViewModel.js';
import '../common/codeBlockModelCollection.js';
import '../../../../css!vs/workbench/contrib/chat/browser/media/chat.js';
import '../../../../css!vs/workbench/contrib/chat/browser/media/chatAgentHover.js';
define(
			de[481],
			he([
				1, 0, 7, 15, 163, 6, 3, 23, 19, 28, 65, 11, 8, 49, 5, 128, 93, 34, 35,
				208, 3548, 1329, 1954, 3009, 153, 207, 441, 329, 1022, 218, 829, 283,
				3016, 2393, 2394,
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
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
			) {
				"use strict";
				var N;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YYb = e.$XYb = void 0),
					(e.$WYb = O),
					(t = mt(t));
				const A = t.$;
				function R(z) {
					z.scrollTop = z.scrollHeight - z.renderHeight;
				}
				function O(z) {
					return (
						"viewContext" in z &&
						"isQuickChat" in z.viewContext &&
						!!z.viewContext.isQuickChat
					);
				}
				let B = class extends C.$1c {
					static {
						N = this;
					}
					static {
						this.CONTRIBS = [];
					}
					get visible() {
						return this.R;
					}
					set viewModel(F) {
						this.W !== F &&
							(this.U.clear(), (this.W = F), F && this.U.add(F), this.g.fire());
					}
					get viewModel() {
						return this.W;
					}
					get parsedInput() {
						return (
							this.X === void 0 &&
								((this.X = this.cb
									.createInstance(P.$G2)
									.parseChatRequest(
										this.viewModel.sessionId,
										this.getInput(),
										this.location,
										{ selectedAgent: this.kb },
									)),
								this.Q.set(!!this.X.parts.find((F) => F instanceof T.$U2))),
							this.X
						);
					}
					get scopedContextKeyService() {
						return this.bb;
					}
					get location() {
						return this.Y.location;
					}
					constructor(F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee, _) {
						super(),
							(this.Z = H),
							(this.ab = q),
							(this.bb = G),
							(this.cb = K),
							(this.db = J),
							(this.eb = W),
							(this.fb = Y),
							(this.gb = ie),
							(this.hb = ne),
							(this.ib = ee),
							(this.jb = _),
							(this.a = this.D(new E.$re())),
							(this.onDidSubmitAgent = this.a.event),
							(this.b = this.D(new E.$re())),
							(this.onDidChangeAgent = this.b.event),
							(this.f = this.D(new E.$re())),
							(this.onDidFocus = this.f.event),
							(this.g = this.D(new E.$re())),
							(this.onDidChangeViewModel = this.g.event),
							(this.h = this.D(new E.$re())),
							(this.onDidScroll = this.h.event),
							(this.j = this.D(new E.$re())),
							(this.onDidClear = this.j.event),
							(this.n = this.D(new E.$re())),
							(this.onDidAcceptInput = this.n.event),
							(this.q = this.D(new E.$re())),
							(this.onDidChangeContext = this.q.event),
							(this.r = this.D(new E.$re())),
							(this.onDidHide = this.r.event),
							(this.t = this.D(new E.$re())),
							(this.onDidChangeParsedInput = this.t.event),
							(this.u = new E.$re()),
							(this.onWillMaybeChangeHeight = this.u.event),
							(this.y = this.D(new E.$re())),
							(this.onDidChangeHeight = this.y.event),
							(this.z = new E.$re()),
							(this.onDidChangeContentHeight = this.z.event),
							(this.C = []),
							(this.O = 0),
							(this.R = !1),
							(this.S = 0),
							(this.U = this.D(new C.$Zc())),
							(this.viewContext = x ?? {}),
							typeof F == "object" ? (this.Y = F) : (this.Y = { location: F }),
							S.$41.bindTo(G).set(!0),
							S.$01.bindTo(G).set(this.Y.location),
							S.$$1.bindTo(G).set(O(this)),
							(this.Q = S.$91.bindTo(G)),
							(this.P = S.$W1.bindTo(G)),
							this.D(X.register(this)),
							(this.H = this.D(K.createInstance(M.$9Tb))),
							this.D(
								V.registerCodeEditorOpenHandler(async (te, Q, Z) => {
									const se = te.resource;
									if (se.scheme !== d.Schemas.vscodeChatCodeBlock) return null;
									const re = se.path.split("/").at(1);
									if (!re) return null;
									const le = this.viewModel
										?.getItems()
										.find((oe) => oe.id === re);
									if (!le) return null;
									this.reveal(le), await (0, i.$Nh)(0);
									for (const oe of this.G.editorsInUse())
										if (m.$dh.isEqual(oe.uri, se, !0)) {
											const ae = oe.editor;
											let pe = 0;
											const $e = ae.getDomNode();
											if ($e) {
												const ye = t.$Egb($e, "monaco-list-row");
												ye && (pe = t.$qgb($e).top - t.$qgb(ye).top);
											}
											if (te.options?.selection) {
												const ye = ae.getTopForPosition(
													te.options.selection.startLineNumber,
													te.options.selection.startColumn,
												);
												(pe += ye),
													ae.focus(),
													ae.setSelection({
														startLineNumber:
															te.options.selection.startLineNumber,
														startColumn: te.options.selection.startColumn,
														endLineNumber:
															te.options.selection.endLineNumber ??
															te.options.selection.startLineNumber,
														endColumn:
															te.options.selection.endColumn ??
															te.options.selection.startColumn,
													});
											}
											return this.reveal(le, pe), ae;
										}
									return null;
								}),
							);
					}
					set lastSelectedAgent(F) {
						(this.X = void 0), (this.kb = F), this.t.fire();
					}
					get lastSelectedAgent() {
						return this.kb;
					}
					get supportsFileReferences() {
						return !!this.Z.supportsFileReferences;
					}
					get input() {
						return this.I;
					}
					get inputEditor() {
						return this.I.inputEditor;
					}
					get inputUri() {
						return this.I.inputUri;
					}
					get contentHeight() {
						return this.I.contentHeight + this.F.contentHeight;
					}
					render(F) {
						const x =
							"viewId" in this.viewContext ? this.viewContext.viewId : void 0;
						this.J = this.D(
							this.cb.createInstance(
								$.$rUb,
								x,
								this.ab.listForeground,
								this.ab.inputEditorBackground,
								this.ab.resultEditorBackground,
							),
						);
						const H = this.Z.renderInputOnTop ?? !1,
							q = this.Z.renderFollowups ?? !H,
							V = this.Z.renderStyle;
						(this.M = t.$fhb(F, A(".interactive-session"))),
							H
								? (this.qb(this.M, { renderFollowups: q, renderStyle: V }),
									(this.L = t.$fhb(this.M, A(".interactive-list"))))
								: ((this.L = t.$fhb(this.M, A(".interactive-list"))),
									this.qb(this.M, { renderFollowups: q, renderStyle: V })),
							this.nb(this.L, { ...this.Z.rendererOptions, renderStyle: V }),
							this.D(this.J.onDidChange(() => this.rb())),
							this.rb(),
							this.viewModel && (this.lb(), R(this.F)),
							(this.C = N.CONTRIBS.map((G) => {
								try {
									return this.D(this.cb.createInstance(G, this));
								} catch (K) {
									this.hb.error(
										"Failed to instantiate chat widget contrib",
										(0, w.$xj)(K),
									);
									return;
								}
							}).filter(r.$tg));
					}
					getContrib(F) {
						return this.C.find((x) => x.id === F);
					}
					focusInput() {
						this.I.focus();
					}
					hasInputFocus() {
						return this.I.hasFocus();
					}
					getSibling(F, x) {
						if (!(0, D.$$Tb)(F)) return;
						const H = this.viewModel?.getItems();
						if (!H) return;
						const q = H.filter((K) => (0, D.$$Tb)(K)),
							V = q.indexOf(F);
						if (V === void 0) return;
						const G = x === "next" ? V + 1 : V - 1;
						if (!(G < 0 || G > q.length - 1)) return q[G];
					}
					clear() {
						this.ub && (this.ub.enabled = !0), this.j.fire();
					}
					lb(F) {
						if (this.F && this.R) {
							const x = (this.viewModel?.getItems() ?? []).map((q) => ({
								element: q,
								collapsed: !1,
								collapsible: !1,
							}));
							this.u.fire(),
								this.F.setChildren(null, x, {
									diffIdentityProvider: {
										getId: (q) =>
											((0, D.$$Tb)(q) || (0, D.$0Tb)(q) ? q.dataId : q.id) +
											((0, D.$_Tb)(q) && this.viewModel
												? `_${I.ChatModelInitState[this.viewModel.initState]}`
												: "") +
											`${((0, D.$0Tb))(q) || ((0, D.$_Tb))(q)}${(0, D.$$Tb)(q) && q.renderData ? `_${this.O}` : ""}` +
											((0, D.$$Tb)(q) ? `_${q.contentReferences.length}` : "") +
											((0, D.$0Tb)(q) && q.contentReferences
												? `_${q.contentReferences?.length}`
												: ""),
									},
								}),
								!F && this.ub && this.layoutDynamicChatTreeItemMode();
							const H = x[x.length - 1]?.element;
							H && (0, D.$$Tb)(H) && H.isComplete
								? this.mb(H.replyFollowups, H)
								: H && (0, D.$_Tb)(H)
									? this.mb(H.sampleQuestions)
									: this.mb(void 0);
						}
					}
					async mb(F, x) {
						this.I.renderFollowups(F, x),
							this.N && this.layout(this.N.height, this.N.width);
					}
					setVisible(F) {
						const x = this.R;
						(this.R = F),
							this.O++,
							this.G.setVisible(F),
							this.input.setVisible(F),
							F
								? this.D(
										(0, i.$Oh)(() => {
											this.R && this.lb(!0);
										}, 0),
									)
								: x && this.r.fire();
					}
					nb(F, x) {
						const H = this.D(
								this.D(this.cb.createChild(new g.$Ki([h.$6j, this.bb]))),
							),
							q = H.createInstance(y.$0Xb, this.Z.defaultElementHeight ?? 200),
							V = {
								getListLength: () => this.F.getNode(null).visibleChildrenCount,
								onDidScroll: this.onDidScroll,
							},
							G = document.createElement("div");
						G.classList.add("chat-overflow-widget-container", "monaco-editor"),
							F.append(G),
							(this.G = this.D(
								H.createInstance(
									y.$9Xb,
									this.J,
									this.location,
									x,
									V,
									this.H,
									G,
								),
							)),
							this.D(
								this.G.onDidClickFollowup((K) => {
									this.acceptInput(K.message);
								}),
							),
							this.D(
								this.G.onDidClickRerunWithAgentOrCommandDetection((K) => {
									const J = this.db
										.getSession(K.sessionId)
										?.getRequests()
										.find((W) => W.id === K.requestId);
									J &&
										this.db
											.resendRequest(J, {
												noCommandDetection: !0,
												attempt: J.attempt + 1,
												location: this.location,
											})
											.catch((W) =>
												this.hb.error("FAILED to rerun request", W),
											);
								}),
							),
							(this.F = H.createInstance(p.$CMb, "Chat", F, q, [this.G], {
								identityProvider: { getId: (K) => K.id },
								horizontalScrolling: !1,
								alwaysConsumeMouseWheel: !1,
								supportDynamicHeights: !0,
								hideTwistiesOfChildlessElements: !0,
								accessibilityProvider: this.cb.createInstance(s.$NYb),
								keyboardNavigationLabelProvider: {
									getKeyboardNavigationLabel: (K) =>
										(0, D.$0Tb)(K)
											? K.message
											: (0, D.$$Tb)(K)
												? K.response.value
												: "",
								},
								setRowLineHeight: !1,
								filter: this.Z.filter
									? { filter: this.Z.filter.bind(this.Z) }
									: void 0,
								overrideStyles: {
									listFocusBackground: this.ab.listBackground,
									listInactiveFocusBackground: this.ab.listBackground,
									listActiveSelectionBackground: this.ab.listBackground,
									listFocusAndSelectionBackground: this.ab.listBackground,
									listInactiveSelectionBackground: this.ab.listBackground,
									listHoverBackground: this.ab.listBackground,
									listBackground: this.ab.listBackground,
									listFocusForeground: this.ab.listForeground,
									listHoverForeground: this.ab.listForeground,
									listInactiveFocusForeground: this.ab.listForeground,
									listInactiveSelectionForeground: this.ab.listForeground,
									listActiveSelectionForeground: this.ab.listForeground,
									listFocusAndSelectionForeground: this.ab.listForeground,
								},
							})),
							this.D(this.F.onContextMenu((K) => this.ob(K))),
							this.D(
								this.F.onDidChangeContentHeight(() => {
									this.pb();
								}),
							),
							this.D(
								this.G.onDidChangeItemHeight((K) => {
									this.F.updateElementHeight(K.element, K.height);
								}),
							),
							this.D(
								this.F.onDidFocus(() => {
									this.f.fire();
								}),
							),
							this.D(
								this.F.onDidScroll(() => {
									this.h.fire();
								}),
							);
					}
					ob(F) {
						F.browserEvent.preventDefault(), F.browserEvent.stopPropagation();
						const x = F.element,
							H = this.bb.createOverlay([
								[
									S.$U1.key,
									(0, D.$$Tb)(x) && !!x.errorDetails?.responseIsFiltered,
								],
							]);
						this.fb.showContextMenu({
							menuId: a.$XX.ChatContext,
							menuActionOptions: { shouldForwardArgs: !0 },
							contextKeyService: H,
							getAnchor: () => F.anchor,
							getActionsContext: () => x,
						});
					}
					pb() {
						this.F.scrollHeight !== this.S &&
							this.F.scrollTop + this.F.renderHeight >= this.S - 2 &&
							t.$hgb(
								t.getWindow(this.L),
								() => {
									R(this.F);
								},
								0,
							),
							(this.S = this.F.scrollHeight),
							this.z.fire();
					}
					qb(F, x) {
						(this.I = this.D(
							this.cb.createInstance(
								l.$VYb,
								this.location,
								{
									renderFollowups: x?.renderFollowups ?? !0,
									renderStyle:
										x?.renderStyle === "minimal" ? "compact" : x?.renderStyle,
									menus: { executeToolbar: a.$XX.ChatExecute, ...this.Z.menus },
									editorOverflowWidgetsDomNode:
										this.Z.editorOverflowWidgetsDomNode,
								},
								() => this.sb(),
							),
						)),
							this.I.render(F, "", this),
							this.D(
								this.I.onDidLoadInputState((H) => {
									this.C.forEach((q) => {
										if (q.setInputState) {
											const V = (typeof H == "object" && H?.[q.id]) ?? {};
											q.setInputState(V);
										}
									});
								}),
							),
							this.D(this.I.onDidFocus(() => this.f.fire())),
							this.D(this.I.onDidChangeContext((H) => this.q.fire(H))),
							this.D(
								this.I.onDidAcceptFollowup((H) => {
									if (!this.viewModel) return;
									let q = "";
									if (
										H.followup.agentId &&
										H.followup.agentId !==
											this.eb.getDefaultAgent(this.location)?.id
									) {
										const V = this.eb.getAgent(H.followup.agentId);
										if (!V) return;
										(this.lastSelectedAgent = V),
											(q = `${T.$Q2}${V.name} `),
											H.followup.subCommand &&
												(q += `${T.$R2}${H.followup.subCommand} `);
									} else
										!H.followup.agentId &&
											H.followup.subCommand &&
											this.jb.hasCommand(H.followup.subCommand) &&
											(q = `${T.$R2}${H.followup.subCommand} `);
									(q += H.followup.message),
										this.acceptInput(q),
										H.response &&
											this.db.notifyUserAction({
												sessionId: this.viewModel.sessionId,
												requestId: H.response.requestId,
												agentId: H.response.agent?.id,
												command: H.response.slashCommand?.name,
												result: H.response.result,
												action: { kind: "followUp", followup: H.followup },
											});
								}),
							),
							this.D(
								this.I.onDidChangeHeight(() => {
									this.N && this.layout(this.N.height, this.N.width),
										this.z.fire();
								}),
							),
							this.D(
								this.inputEditor.onDidChangeModelContent(
									() => (this.X = void 0),
								),
							),
							this.D(this.eb.onDidChangeAgents(() => (this.X = void 0)));
					}
					rb() {
						this.M.style.setProperty(
							"--vscode-interactive-result-editor-background-color",
							this.J.configuration.resultEditor.backgroundColor?.toString() ??
								"",
						),
							this.M.style.setProperty(
								"--vscode-interactive-session-foreground",
								this.J.configuration.foreground?.toString() ?? "",
							),
							this.M.style.setProperty(
								"--vscode-chat-list-background",
								this.ib
									.getColorTheme()
									.getColor(this.ab.listBackground)
									?.toString() ?? "",
							);
					}
					setModel(F, x) {
						if (!this.M) throw new Error("Call render() before setModel()");
						this.H.clear(),
							this.M.setAttribute("data-session-id", F.sessionId),
							(this.viewModel = this.cb.createInstance(D.$aUb, F, this.H)),
							this.U.add(
								E.Event.accumulate(
									this.viewModel.onDidChange,
									0,
								)((H) => {
									this.viewModel &&
										(this.P.set(this.viewModel.requestInProgress),
										this.lb(),
										H.some((q) => q?.kind === "addRequest") &&
											this.visible &&
											(R(this.F), this.focusInput()));
								}),
							),
							this.U.add(
								this.viewModel.onDidDisposeModel(() => {
									this.I.saveState(), (this.viewModel = void 0), this.lb();
								}),
							),
							this.I.initForNewChatModel(
								x.inputValue,
								x.inputState ?? this.sb(),
							),
							this.C.forEach((H) => {
								H.setInputState &&
									x.inputState?.[H.id] &&
									H.setInputState(x.inputState?.[H.id]);
							}),
							this.U.add(
								F.onDidChange((H) => {
									H.kind === "setAgent" &&
										this.b.fire({ agent: H.agent, slashCommand: H.command });
								}),
							),
							this.F && (this.lb(), R(this.F));
					}
					getFocus() {
						return this.F.getFocus()[0] ?? void 0;
					}
					reveal(F, x) {
						this.F.reveal(F, x);
					}
					focus(F) {
						const H = this.F.getNode(null).children.find(
							(q) => q.element?.id === F.id,
						);
						H && (this.F.setFocus([H.element]), this.F.domFocus());
					}
					refilter() {
						this.F.refilter();
					}
					setInputPlaceholder(F) {
						this.viewModel?.setInputPlaceholder(F);
					}
					resetInputPlaceholder() {
						this.viewModel?.resetInputPlaceholder();
					}
					setInput(F = "") {
						this.I.setValue(F, !1);
					}
					getInput() {
						return this.I.inputEditor.getValue();
					}
					logInputHistory() {
						this.I.logInputHistory();
					}
					async acceptInput(F) {
						return this.tb(F ? { query: F } : void 0);
					}
					async acceptInputWithPrefix(F) {
						this.tb({ prefix: F });
					}
					sb() {
						const F = {};
						return (
							this.C.forEach((x) => {
								x.getInputState && (F[x.id] = x.getInputState());
							}),
							F
						);
					}
					async tb(F) {
						if (this.viewModel) {
							this.n.fire();
							const x = this.getInput(),
								H = this.gb.acceptRequest(),
								q = F ? ("query" in F ? F.query : `${F.prefix} ${x}`) : x,
								V = !F || "prefix" in F,
								G = await this.db.sendRequest(this.viewModel.sessionId, q, {
									location: this.location,
									locationData: this.Y.resolveData?.(),
									parserContext: { selectedAgent: this.kb },
									attachedContext: [...this.I.attachedContext.values()],
								});
							if (G)
								return (
									this.I.acceptInput(V),
									this.a.fire({ agent: G.agent, slashCommand: G.slashCommand }),
									G.responseCompletePromise.then(() => {
										const K = this.viewModel?.getItems().filter(D.$$Tb),
											J = K?.[K.length - 1];
										if (
											(this.gb.acceptResponse(J, H), J?.result?.nextQuestion)
										) {
											const {
													prompt: W,
													participant: X,
													command: Y,
												} = J.result.nextQuestion,
												ie = (0, T.$12)(this.eb, this.location, W, X, Y);
											ie && this.input.setValue(ie, !1);
										}
									}),
									G.responseCreatedPromise
								);
						}
					}
					setContext(F, ...x) {
						this.I.attachContext(F, ...x);
					}
					getCodeBlockInfosForResponse(F) {
						return this.G.getCodeBlockInfosForResponse(F);
					}
					getCodeBlockInfoForEditor(F) {
						return this.G.getCodeBlockInfoForEditor(F);
					}
					getFileTreeInfosForResponse(F) {
						return this.G.getFileTreeInfosForResponse(F);
					}
					getLastFocusedFileTreeForResponse(F) {
						return this.G.getLastFocusedFileTreeForResponse(F);
					}
					focusLastMessage() {
						if (!this.viewModel) return;
						const F = this.F.getNode(null).children,
							x = F[F.length - 1];
						x && (this.F.setFocus([x.element]), this.F.domFocus());
					}
					layout(F, x) {
						(x = Math.min(x, 850)),
							(this.N = new t.$pgb(x, F)),
							this.I.layout(F, x);
						const H = this.I.inputPartHeight,
							q = this.F.scrollTop + this.F.renderHeight >= this.F.scrollHeight,
							V = F - H;
						this.F.layout(V, x),
							(this.F.getHTMLElement().style.height = `${V}px`),
							this.G.layout(x),
							q && R(this.F),
							(this.L.style.height = `${F - H}px`),
							this.y.fire(F);
					}
					setDynamicChatTreeItemLayout(F, x) {
						(this.ub = { numOfMessages: F, maxHeight: x, enabled: !0 }),
							this.D(
								this.G.onDidChangeItemHeight(() =>
									this.layoutDynamicChatTreeItemMode(),
								),
							);
						const H = this.D(new C.$2c());
						this.D(
							this.F.onDidScroll((q) => {
								this.ub?.enabled &&
									(H.value = t.$hgb(t.getWindow(this.L), () => {
										if (
											!q.scrollTopChanged ||
											q.heightChanged ||
											q.scrollHeightChanged
										)
											return;
										const V = q.height,
											G = q.scrollHeight - V - q.scrollTop;
										if (G === 0) return;
										const K = this.ub?.maxHeight ?? x,
											J = this.N?.width ?? this.M.offsetWidth;
										this.I.layout(K, J);
										const W = this.I.inputPartHeight,
											X = Math.min(V + G, K - W);
										this.layout(X + W, J);
									}));
							}),
						);
					}
					updateDynamicChatTreeItemLayout(F, x) {
						this.ub = { numOfMessages: F, maxHeight: x, enabled: !0 };
						let H = !1,
							q = this.N.height,
							V = this.N.width;
						x < this.N.height && ((q = x), (H = !0));
						const G = this.M.offsetWidth;
						this.N?.width !== G && ((V = G), (H = !0)), H && this.layout(q, V);
					}
					get isDynamicChatTreeItemLayoutEnabled() {
						return this.ub?.enabled ?? !1;
					}
					set isDynamicChatTreeItemLayoutEnabled(F) {
						this.ub && (this.ub.enabled = F);
					}
					layoutDynamicChatTreeItemMode() {
						if (!this.viewModel || !this.ub?.enabled) return;
						const F = this.N?.width ?? this.M.offsetWidth;
						this.I.layout(this.ub.maxHeight, F);
						const x = this.I.inputPartHeight,
							H = this.viewModel.getItems(),
							q = H.slice(-this.ub.numOfMessages),
							V = q.some((K) => K.currentRenderedHeight === void 0),
							G = V
								? this.ub.maxHeight
								: q.reduce((K, J) => K + J.currentRenderedHeight, 0);
						this.layout(
							Math.min(x + G + (H.length > 2 ? 18 : 0), this.ub.maxHeight),
							F,
						),
							(V || !G) && R(this.F);
					}
					saveState() {
						this.I.saveState();
					}
					getViewState() {
						return { inputValue: this.getInput(), inputState: this.sb() };
					}
				};
				(e.$XYb = B),
					(e.$XYb =
						B =
						N =
							Ne(
								[
									j(4, u.$dtb),
									j(5, h.$6j),
									j(6, n.$Li),
									j(7, k.$J2),
									j(8, v.$c3),
									j(9, b.$GYb),
									j(10, c.$Xxb),
									j(11, b.$JYb),
									j(12, o.$ik),
									j(13, f.$iP),
									j(14, L.$L2),
								],
								B,
							));
				class U {
					get lastFocusedWidget() {
						return this.b;
					}
					constructor() {
						(this.a = []), (this.b = void 0);
					}
					getWidgetByInputUri(F) {
						return this.a.find((x) => (0, m.$gh)(x.inputUri, F));
					}
					getWidgetBySessionId(F) {
						return this.a.find((x) => x.viewModel?.sessionId === F);
					}
					d(F) {
						F !== this.b && (this.b = F);
					}
					register(F) {
						if (this.a.some((x) => x === F))
							throw new Error("Cannot register the same widget multiple times");
						return (
							this.a.push(F),
							(0, C.$Xc)(
								F.onDidFocus(() => this.d(F)),
								(0, C.$Yc)(() => this.a.splice(this.a.indexOf(F), 1)),
							)
						);
					}
				}
				e.$YYb = U;
			},
		),
		