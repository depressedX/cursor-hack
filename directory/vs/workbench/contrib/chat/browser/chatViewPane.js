import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/memento.js';
import '../../../common/theme.js';
import '../../../common/views.js';
import './chatWidget.js';
import '../common/chatAgents.js';
import '../common/chatParticipantContribTypes.js';
import '../common/chatModel.js';
import '../common/chatService.js';
define(
			de[4067],
			he([
				1, 0, 33, 3, 10, 8, 49, 72, 5, 128, 39, 34, 41, 21, 32, 51, 35, 146,
				282, 123, 60, 481, 153, 981, 441, 218,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*cancellation*/,
				i /*lifecycle*/,
				w /*configuration*/,
				E /*contextkey*/,
				C /*contextView*/,
				d /*hover*/,
				m /*instantiation*/,
				r /*serviceCollection*/,
				u /*keybinding*/,
				a /*log*/,
				h /*opener*/,
				c /*storage*/,
				n /*telemetry*/,
				g /*colorRegistry*/,
				p /*themeService*/,
				o /*viewPane*/,
				f /*memento*/,
				b /*theme*/,
				s /*views*/,
				l /*chatWidget*/,
				y /*chatAgents*/,
				$ /*chatParticipantContribTypes*/,
				v /*chatModel*/,
				S /*chatService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YMb = e.$XMb = void 0),
					(e.$XMb = "workbench.panel.chatSidebar");
				let I = class extends o.$TMb {
					get widget() {
						return this.a;
					}
					constructor(P, k, L, D, M, N, A, R, O, B, U, z, F, x, H) {
						super(P, k, L, D, M, N, A, R, O, B, U),
							(this.j = z),
							(this.m = F),
							(this.n = x),
							(this.r = H),
							(this.b = this.D(new i.$Zc())),
							(this.g = !1),
							(this.h = !1),
							(this.c = new f.$eEb(
								"interactive-session-view-" + $.$b3,
								this.j,
							)),
							(this.f = this.c.getMemento(
								c.StorageScope.WORKSPACE,
								c.StorageTarget.MACHINE,
							)),
							this.D(
								this.n.onDidChangeAgents(() => {
									if (this.n.getDefaultAgent(y.ChatAgentLocation.Panel)) {
										if (!this.a?.viewModel) {
											const q = this.t(),
												V = q ? this.m.getOrRestoreSession(q) : void 0;
											try {
												this.a.setVisible(!1),
													this.s(V),
													(this.g = !1),
													(this.h = !1),
													this.eb.fire();
											} finally {
												this.widget.setVisible(!0);
											}
										}
									} else
										this.a?.viewModel?.initState ===
											v.ChatModelInitState.Initialized && (this.h = !0);
									this.eb.fire();
								}),
							);
					}
					getActionsContext() {
						return { chatView: this };
					}
					s(P) {
						if (
							(this.b.clear(),
							(P =
								P ??
								(this.m.transferredSessionData?.sessionId
									? this.m.getOrRestoreSession(
											this.m.transferredSessionData.sessionId,
										)
									: this.m.startSession(
											y.ChatAgentLocation.Panel,
											t.CancellationToken.None,
										))),
							!P)
						)
							throw new Error("Could not start chat session");
						this.a.setModel(P, { ...this.f }), (this.f.sessionId = P.sessionId);
					}
					shouldShowWelcome() {
						if (!this.n.getContributedDefaultAgent(y.ChatAgentLocation.Panel))
							return !0;
						const P = !this.m.hasSessions();
						return this.h || (!this.a?.viewModel && (P || this.g));
					}
					t() {
						let P;
						return (
							this.m.transferredSessionData
								? ((P = this.m.transferredSessionData.sessionId),
									(this.f.inputValue =
										this.m.transferredSessionData.inputValue))
								: (P = this.f.sessionId),
							P
						);
					}
					W(P) {
						try {
							super.W(P);
							const k = this.D(
									this.Db.createChild(new r.$Ki([E.$6j, this.xb])),
								),
								L = this.Zb();
							(this.a = this.D(
								k.createInstance(
									l.$XYb,
									y.ChatAgentLocation.Panel,
									{ viewId: this.id },
									{ supportsFileReferences: !0 },
									{
										listForeground: b.$xGb,
										listBackground: L.background,
										inputEditorBackground: L.background,
										resultEditorBackground: g.$8P,
									},
								),
							)),
								this.D(
									this.onDidChangeBodyVisibility((A) => {
										this.a.setVisible(A);
									}),
								),
								this.D(this.a.onDidClear(() => this.ab())),
								this.a.render(P);
							const D = this.t(),
								M = D
									? this.D(
											this.m.onDidDisposeSession((A) => {
												A.reason === "initializationFailed" &&
													((this.g = !0), M?.dispose(), this.eb.fire());
											}),
										)
									: void 0,
								N = D ? this.m.getOrRestoreSession(D) : void 0;
							this.s(N);
						} catch (k) {
							throw (this.r.error(k), k);
						}
					}
					acceptInput(P) {
						this.a.acceptInput(P);
					}
					ab() {
						this.widget.viewModel &&
							this.m.clearSession(this.widget.viewModel.sessionId),
							this.cc(),
							this.s(void 0);
					}
					loadSession(P) {
						this.widget.viewModel &&
							this.m.clearSession(this.widget.viewModel.sessionId);
						const k = this.m.getOrRestoreSession(P);
						this.s(k);
					}
					focusInput() {
						this.a.focusInput();
					}
					focus() {
						super.focus(), this.a.focusInput();
					}
					X(P, k) {
						super.X(P, k), this.a.layout(P, k);
					}
					saveState() {
						this.a && (this.a.saveState(), this.cc(), this.c.saveMemento()),
							super.saveState();
					}
					cc() {
						const P = this.a.getViewState();
						(this.f.inputValue = P.inputValue),
							(this.f.inputState = P.inputState);
					}
				};
				(e.$YMb = I),
					(e.$YMb = I =
						Ne(
							[
								j(1, u.$uZ),
								j(2, C.$Xxb),
								j(3, w.$gj),
								j(4, E.$6j),
								j(5, s.$K1),
								j(6, m.$Li),
								j(7, h.$7rb),
								j(8, p.$iP),
								j(9, n.$km),
								j(10, d.$Uyb),
								j(11, c.$lq),
								j(12, S.$J2),
								j(13, y.$c3),
								j(14, a.$ik),
							],
							I,
						));
			},
		)
