import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lazy.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../chat/browser/chat.js';
import '../../../chat/common/chatService.js';
import '../../../terminal/browser/terminal.js';
import './terminalChatWidget.js';
import '../../../../../base/common/htmlContent.js';
import './terminalChat.js';
import '../../../../services/views/common/viewsService.js';
import '../../../../../platform/storage/common/storage.js';
import '../../../../../base/common/types.js';
import '../../../../../base/common/async.js';
import '../../../chat/common/chatAgents.js';
define(
			de[867],
			he([
				1, 0, 33, 6, 149, 3, 8, 5, 208, 218, 107, 4377, 94, 692, 89, 21, 28, 15,
				153,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*event*/,
 w /*lazy*/,
 E /*lifecycle*/,
 C /*contextkey*/,
 d /*instantiation*/,
 m /*chat*/,
 r /*chatService*/,
 u /*terminal*/,
 a /*terminalChatWidget*/,
 h /*htmlContent*/,
 c /*terminalChat*/,
 n /*viewsService*/,
 g /*storage*/,
 p /*types*/,
 o /*async*/,
 f /*chatAgents*/) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Vc = void 0);
				var s;
				(function (y) {
					(y[(y.NONE = 0)] = "NONE"),
						(y[(y.ACCEPT_SESSION = 1)] = "ACCEPT_SESSION"),
						(y[(y.CANCEL_SESSION = 2)] = "CANCEL_SESSION"),
						(y[(y.PAUSE_SESSION = 4)] = "PAUSE_SESSION"),
						(y[(y.CANCEL_REQUEST = 8)] = "CANCEL_REQUEST"),
						(y[(y.CANCEL_INPUT = 16)] = "CANCEL_INPUT"),
						(y[(y.ACCEPT_INPUT = 32)] = "ACCEPT_INPUT"),
						(y[(y.RERUN_INPUT = 64)] = "RERUN_INPUT");
				})(s || (s = {}));
				let l = class extends E.$1c {
					static {
						b = this;
					}
					static {
						this.ID = "terminal.chat";
					}
					static get($) {
						return $.getContribution(b.ID);
					}
					static {
						this.a = "terminal-inline-chat-history";
					}
					static {
						this.b = [];
					}
					get chatWidget() {
						return this.c?.value;
					}
					get lastResponseContent() {
						return this.n;
					}
					get onDidHide() {
						return this.chatWidget?.onDidHide ?? i.Event.None;
					}
					get scopedContextKeyService() {
						return (
							this.c?.value.inlineChatWidget.scopedContextKeyService ?? this.I
						);
					}
					constructor($, v, S, I, T, P, k, L, D, M) {
						super(),
							(this.F = $),
							(this.G = I),
							(this.H = T),
							(this.I = P),
							(this.J = k),
							(this.L = L),
							(this.M = D),
							(this.N = M),
							(this.j = this.B.add(new i.$re())),
							(this.onDidAcceptInput = i.Event.filter(
								this.j.event,
								(N) => N === s.ACCEPT_INPUT,
								this.B,
							)),
							(this.q = "terminal"),
							(this.s = this.D(new E.$2c())),
							(this.u = -1),
							(this.w = ""),
							(this.P = void 0),
							(this.f = c.TerminalChatContextKeys.requestActive.bindTo(this.I)),
							(this.g =
								c.TerminalChatContextKeys.responseContainsCodeBlock.bindTo(
									this.I,
								)),
							(this.h =
								c.TerminalChatContextKeys.responseContainsMultipleCodeBlocks.bindTo(
									this.I,
								)),
							this.D(
								this.L.registerProvider(
									{
										getCodeBlockContext: (N) => {
											if (!(!N || !this.c?.hasValue || !this.hasFocus()))
												return {
													element: N,
													code: N.getValue(),
													codeBlockIndex: 0,
													languageId: N.getModel().getLanguageId(),
												};
										},
									},
									"terminal",
								),
							),
							(b.b = JSON.parse(this.N.get(b.a, g.StorageScope.PROFILE, "[]"))),
							(this.y = (N) => {
								const A = b.b.indexOf(N);
								A >= 0 && b.b.splice(A, 1),
									b.b.unshift(N),
									(this.u = -1),
									(this.w = ""),
									this.N.store(
										b.a,
										JSON.stringify(b.b),
										g.StorageScope.PROFILE,
										g.StorageTarget.USER,
									);
							});
					}
					xtermReady($) {
						this.c = new w.$Y(() => {
							const v = this.D(
								this.H.createInstance(a.$3Vc, this.F.domElement, this.F, $),
							);
							if (
								(this.D(
									v.focusTracker.onDidFocus(() => {
										(b.activeChatWidget = this),
											(0, u.$nIb)(this.F) || this.G.setActiveInstance(this.F);
									}),
								),
								this.D(
									v.focusTracker.onDidBlur(() => {
										(b.activeChatWidget = void 0),
											this.F.resetScrollbarVisibility();
									}),
								),
								!this.F.domElement)
							)
								throw new Error(
									"FindWidget expected terminal DOM to be initialized",
								);
							return v;
						});
					}
					async O() {
						(this.t = (0, o.$zh)(async ($) => {
							if (
								!this.s.value &&
								((this.s.value = this.J.startSession(
									f.ChatAgentLocation.Terminal,
									$,
								)),
								!this.s.value)
							)
								throw new Error("Failed to start chat session");
						})),
							this.D((0, E.$Yc)(() => this.t?.cancel()));
					}
					Q() {
						const $ = this.c?.value.inlineChatWidget;
						$ && ($.placeholder = this.R());
					}
					R() {
						return this.P ?? "";
					}
					setPlaceholder($) {
						(this.P = $), this.Q();
					}
					resetPlaceholder() {
						(this.P = void 0), this.Q();
					}
					clear() {
						this.cancel(),
							this.s.clear(),
							this.g.reset(),
							this.f.reset(),
							this.c?.value.hide(),
							this.c?.value.setValue(void 0);
					}
					async acceptInput() {
						(0, p.$vg)(this.c),
							this.s.value || (await this.reveal()),
							(0, p.$vg)(this.s.value);
						const $ = this.c.value.inlineChatWidget.value;
						if (!$) return;
						const v = this.s.value;
						this.c.value.inlineChatWidget.setChatModel(v),
							this.y($),
							this.C?.cancel(),
							(this.C = new t.$Ce());
						const S = new E.$Zc();
						this.f.set(!0);
						let I = "";
						const T =
							await this.c.value.inlineChatWidget.chatWidget.acceptInput($);
						this.z = T?.requestId;
						const P = new o.$0h();
						try {
							return (
								this.f.set(!0),
								T &&
									S.add(
										T.onDidChange(async () => {
											if (((I += T.response.value), T.isCanceled)) {
												this.f.set(!1), P.complete(void 0);
												return;
											}
											if (T.isComplete) {
												this.f.set(!1), this.f.set(!1);
												const k = I.includes("```");
												this.c.value.inlineChatWidget.updateChatMessage(
													{ message: new h.$cl(I), requestId: T.requestId },
													!1,
													k,
												);
												const L =
														await this.chatWidget?.inlineChatWidget.getCodeBlockInfo(
															0,
														),
													D =
														await this.chatWidget?.inlineChatWidget.getCodeBlockInfo(
															1,
														);
												this.g.set(!!L),
													this.h.set(!!D),
													this.c?.value.inlineChatWidget.updateToolbar(!0),
													P.complete(T);
											}
										}),
									),
								await P.p,
								T
							);
						} catch {
							return;
						} finally {
							S.dispose();
						}
					}
					updateInput($, v = !0) {
						const S = this.c?.value.inlineChatWidget;
						S && ((S.value = $), v && S.selectAll());
					}
					getInput() {
						return this.c?.value.input() ?? "";
					}
					focus() {
						this.c?.value.focus();
					}
					hasFocus() {
						return this.c?.rawValue?.hasFocus() ?? !1;
					}
					populateHistory($) {
						if (!this.c?.value) return;
						const v = b.b.length;
						if (v === 0) return;
						this.u === -1 && (this.w = this.c.value.inlineChatWidget.value);
						const S = this.u + ($ ? 1 : -1);
						if (S >= v) return;
						let I;
						S < 0
							? ((I = this.w), (this.u = -1))
							: ((I = b.b[S]), (this.u = S)),
							(this.c.value.inlineChatWidget.value = I),
							this.c.value.inlineChatWidget.selectAll();
					}
					cancel() {
						this.t?.cancel(),
							(this.t = void 0),
							this.C?.cancel(),
							this.f.set(!1);
						const $ = this.c?.value.inlineChatWidget.getChatModel();
						$?.sessionId && this.J.cancelCurrentRequestForSession($?.sessionId);
					}
					async acceptCommand($) {
						const v =
							await this.chatWidget?.inlineChatWidget.getCodeBlockInfo(0);
						v && this.c?.value.acceptCommand(v.textEditorModel.getValue(), $);
					}
					async reveal() {
						await this.O(), this.c?.value.reveal(), this.c?.value.focus();
					}
					async viewInChat() {
						const $ = await (0, m.$HYb)(this.M),
							v = this.chatWidget?.inlineChatWidget.chatWidget.viewModel?.model
								.getRequests()
								.find((I) => I.id === this.z);
						if (!$ || !v?.response) return;
						const S = [];
						for (const I of v.response.response.value)
							if (I.kind === "textEditGroup")
								for (const T of I.edits)
									S.push({ kind: "textEdit", edits: T, uri: I.uri });
							else S.push(I);
						this.J.addCompleteRequest(
							$.viewModel.sessionId,
							`@${this.q} ${v.message.text}`,
							v.variableData,
							v.attempt,
							{
								message: S,
								result: v.response.result,
								followups: v.response.followups,
							},
						),
							$.focusLastMessage(),
							this.c?.rawValue?.hide();
					}
				};
				(e.$4Vc = l),
					(e.$4Vc =
						l =
						b =
							Ne(
								[
									j(3, u.$iIb),
									j(4, d.$Li),
									j(5, C.$6j),
									j(6, r.$J2),
									j(7, m.$KYb),
									j(8, n.$HMb),
									j(9, g.$lq),
								],
								l,
							));
			},
		)
