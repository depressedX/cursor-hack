import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/sash/sash.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/theme/common/colorRegistry.js';
import './chat.js';
import './chatWidget.js';
import '../common/chatAgents.js';
import '../common/chatService.js';
import '../../../services/views/common/viewsService.js';
define(
			de[4066],
			he([
				1, 0, 7, 277, 15, 33, 6, 3, 11, 8, 5, 128, 180, 63, 51, 208, 481, 153,
				218, 89,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*sash*/,
 w /*async*/,
 E /*cancellation*/,
 C /*event*/,
 d /*lifecycle*/,
 m /*actions*/,
 r /*contextkey*/,
 u /*instantiation*/,
 a /*serviceCollection*/,
 h /*layoutService*/,
 c /*quickInput*/,
 n /*colorRegistry*/,
 g /*chat*/,
 p /*chatWidget*/,
 o /*chatAgents*/,
 f /*chatService*/,
 b /*viewsService*/) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PIc = void 0),
					(t = mt(t));
				let l = class extends d.$1c {
					constructor(v, S, I) {
						super(),
							(this.g = v),
							(this.h = S),
							(this.j = I),
							(this.a = this.D(new C.$re())),
							(this.onDidClose = this.a.event);
					}
					get enabled() {
						return !!this.h.isEnabled(o.ChatAgentLocation.Panel);
					}
					get focused() {
						const v = this.b?.widget;
						return v ? t.$Lgb(v) : !1;
					}
					toggle(v) {
						if (this.focused && !v?.query) this.close();
						else if ((this.open(v), v?.isPartialQuery)) {
							const S = this.B.add(
								C.Event.once(this.onDidClose)(() => {
									this.c?.clearValue(), this.B.delete(S);
								}),
							);
						}
					}
					open(v) {
						if (this.b) {
							if (this.c && v?.query) {
								this.c.focus(),
									this.c.setValue(v.query, v.selection),
									v.isPartialQuery || this.c.acceptInput();
								return;
							}
							return this.focus();
						}
						const S = new d.$Zc();
						(this.b = this.g.createQuickWidget()),
							(this.b.contextKey = "chatInputVisible"),
							(this.b.ignoreFocusOut = !0),
							S.add(this.b),
							(this.f ??= t.$(".interactive-session")),
							(this.b.widget = this.f),
							this.b.show(),
							this.c
								? this.c.show()
								: ((this.c = this.j.createInstance(y)), this.c.render(this.f)),
							S.add(
								this.b.onDidHide(() => {
									S.dispose(), this.c.hide(), (this.b = void 0), this.a.fire();
								}),
							),
							this.c.focus(),
							v?.query &&
								(this.c.setValue(v.query, v.selection),
								v.isPartialQuery || this.c.acceptInput());
					}
					focus() {
						this.c?.focus();
					}
					close() {
						this.b?.dispose(), (this.b = void 0);
					}
					async openInChatView() {
						await this.c?.openChatView(), this.close();
					}
				};
				(e.$PIc = l),
					(e.$PIc = l = Ne([j(0, c.$DJ), j(1, f.$J2), j(2, u.$Li)], l));
				let y = class extends d.$1c {
					static {
						s = this;
					}
					static {
						this.DEFAULT_MIN_HEIGHT = 200;
					}
					static {
						this.a = 100;
					}
					constructor(v, S, I, T, P) {
						super(),
							(this.m = v),
							(this.n = S),
							(this.q = I),
							(this.r = T),
							(this.s = P),
							(this.h = this.D(new d.$2c())),
							(this.j = !1);
					}
					clear() {
						this.f?.dispose(),
							(this.f = void 0),
							this.w(),
							this.b.inputEditor.setValue("");
					}
					focus(v) {
						if (this.b) {
							this.b.focusInput();
							const S = this.b.inputEditor.getValue();
							S &&
								this.b.inputEditor.setSelection(
									v ?? {
										startLineNumber: 1,
										startColumn: 1,
										endLineNumber: 1,
										endColumn: S.length + 1,
									},
								);
						}
					}
					hide() {
						this.b.setVisible(!1),
							(this.h.value = (0, w.$Oh)(() => {
								this.h.clear();
							}, 30 * 1e3));
					}
					show() {
						this.b.setVisible(!0),
							this.j &&
								((this.j = !1),
								this.b.updateDynamicChatTreeItemLayout(2, this.t)),
							this.h.value || this.b.layoutDynamicChatTreeItemMode();
					}
					render(v) {
						if (this.b) throw new Error("Cannot render quick chat twice");
						const S = this.D(
							this.m.createChild(
								new a.$Ki([r.$6j, this.D(this.n.createScoped(v))]),
							),
						);
						(this.b = this.D(
							S.createInstance(
								p.$XYb,
								o.ChatAgentLocation.Panel,
								{ isQuickChat: !0 },
								{
									renderInputOnTop: !0,
									renderStyle: "compact",
									menus: { inputSideToolbar: m.$XX.ChatInputSide },
								},
								{
									listForeground: n.$gT,
									listBackground: n.$fT,
									inputEditorBackground: n.$TR,
									resultEditorBackground: n.$8P,
								},
							),
						)),
							this.b.render(v),
							this.b.setVisible(!0),
							this.b.setDynamicChatTreeItemLayout(2, this.t),
							this.w(),
							(this.c = this.D(
								new i.Sash(
									v,
									{ getHorizontalSashTop: () => v.offsetHeight },
									{ orientation: i.Orientation.HORIZONTAL },
								),
							)),
							this.u(v);
					}
					get t() {
						return this.r.mainContainerDimension.height - s.a;
					}
					u(v) {
						this.D(
							this.r.onDidLayoutMainContainer(() => {
								this.b.visible
									? this.b.updateDynamicChatTreeItemLayout(2, this.t)
									: (this.j = !0);
							}),
						),
							this.D(
								this.b.inputEditor.onDidChangeModelContent((I) => {
									this.g = this.b.inputEditor.getValue();
								}),
							),
							this.D(this.b.onDidClear(() => this.clear())),
							this.D(this.b.onDidChangeHeight((I) => this.c.layout()));
						const S = v.offsetWidth;
						this.D(
							this.c.onDidStart(() => {
								this.b.isDynamicChatTreeItemLayoutEnabled = !1;
							}),
						),
							this.D(
								this.c.onDidChange((I) => {
									I.currentY < s.DEFAULT_MIN_HEIGHT ||
										I.currentY > this.t ||
										(this.b.layout(I.currentY, S), this.c.layout());
								}),
							),
							this.D(
								this.c.onDidReset(() => {
									(this.b.isDynamicChatTreeItemLayoutEnabled = !0),
										this.b.layoutDynamicChatTreeItemMode();
								}),
							);
					}
					async acceptInput() {
						return this.b.acceptInput();
					}
					async openChatView() {
						const v = await (0, g.$HYb)(this.s);
						if (!v?.viewModel || !this.f) return;
						for (const I of this.f.getRequests())
							if (I.response?.response.value || I.response?.result) {
								const T = [];
								for (const P of I.response.response.value)
									if (P.kind === "textEditGroup")
										for (const k of P.edits)
											T.push({ kind: "textEdit", edits: k, uri: P.uri });
									else T.push(P);
								this.q.addCompleteRequest(
									v.viewModel.sessionId,
									I.message,
									I.variableData,
									I.attempt,
									{
										message: T,
										result: I.response.result,
										followups: I.response.followups,
									},
								);
							} else I.message;
						const S = this.b.inputEditor.getValue();
						S && v.inputEditor.setValue(S), v.focusInput();
					}
					setValue(v, S) {
						this.b.inputEditor.setValue(v), this.focus(S);
					}
					clearValue() {
						this.b.inputEditor.setValue("");
					}
					w() {
						if (
							((this.f ??= this.q.startSession(
								o.ChatAgentLocation.Panel,
								E.CancellationToken.None,
							)),
							!this.f)
						)
							throw new Error("Could not start chat session");
						this.b.setModel(this.f, { inputValue: this.g });
					}
				};
				y = s = Ne(
					[j(0, u.$Li), j(1, r.$6j), j(2, f.$J2), j(3, h.$jEb), j(4, b.$HMb)],
					y,
				);
			},
		)
