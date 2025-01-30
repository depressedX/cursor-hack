import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/core/position.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../common/inlineChat.js';
import '../../chat/browser/chatWidget.js';
import '../../chat/common/chatAgents.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../chat/common/chatModel.js';
import '../../../../editor/common/core/range.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../css!vs/workbench/contrib/inlineChat/browser/media/inlineChatContentWidget.js';
define(
			de[4080],
			he([
				1, 0, 56, 7, 6, 3, 48, 5, 257, 481, 153, 51, 441, 17, 128, 8, 38, 98,
				173, 11, 92, 10, 63, 2443,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*editorBrowser*/,
				i /*dom*/,
				w /*event*/,
				E /*lifecycle*/,
				C /*position*/,
				d /*instantiation*/,
				m /*inlineChat*/,
				r /*chatWidget*/,
				u /*chatAgents*/,
				a /*colorRegistry*/,
				h /*chatModel*/,
				c /*range*/,
				n /*serviceCollection*/,
				g /*contextkey*/,
				p /*editorOptions*/,
				o /*editorCommon*/,
				f /*toolbar*/,
				b /*actions*/,
				s /*menuEntryActionViewItem*/,
				l /*configuration*/,
				y /*quickInput*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$P1b = void 0),
					(i = mt(i));
				let $ = class {
					constructor(S, I, T, P, k, L) {
						(this.k = I),
							(this.suppressMouseDown = !1),
							(this.allowEditorOverflow = !0),
							(this.a = new E.$Zc()),
							(this.b = document.createElement("div")),
							(this.c = document.createElement("div")),
							(this.d = document.createElement("div")),
							(this.f = this.a.add(new w.$re())),
							(this.onDidBlur = this.f.event),
							(this.g = !1),
							(this.h = !1),
							(this.i = this.a.add(
								T.createInstance(h.$82, void 0, u.ChatAgentLocation.Editor),
							));
						const D = T.createChild(
							new n.$Ki([g.$6j, this.a.add(P.createScoped(this.b))]),
							this.a,
						);
						(this.j = D.createInstance(
							r.$XYb,
							S,
							void 0,
							{
								defaultElementHeight: 32,
								editorOverflowWidgetsDomNode: I.getOverflowWidgetsDomNode(),
								renderStyle: "minimal",
								renderInputOnTop: !0,
								renderFollowups: !0,
								supportsFileReferences:
									k.getValue(`chat.experimental.variables.${S.location}`) ===
									!0,
								menus: {
									telemetrySource: "inlineChat-content",
									executeToolbar: b.$XX.ChatExecute,
								},
								filter: (R) => !1,
							},
							{
								listForeground: a.$9P,
								listBackground: m.$nLb,
								inputEditorBackground: a.$TR,
								resultEditorBackground: a.$8P,
							},
						)),
							this.a.add(this.j),
							this.j.render(this.c),
							this.j.setModel(this.i, {}),
							this.a.add(
								this.j.onDidChangeContentHeight(() =>
									I.layoutContentWidget(this),
								),
							),
							(this.b.tabIndex = -1),
							(this.b.className =
								"inline-chat-content-widget interactive-session"),
							this.b.appendChild(this.c),
							this.d.classList.add("toolbar"),
							this.b.appendChild(this.d);
						const M = this.a.add(
							D.createInstance(f.$Tyb, this.d, m.$iLb, {
								actionViewItemProvider: (R) =>
									R instanceof b.$2X
										? T.createInstance(s.$Myb, R, { conversational: !0 })
										: void 0,
								toolbarOptions: { primaryGroup: "0_main" },
								icon: !1,
								label: !0,
							}),
						);
						this.a.add(
							M.onDidChangeMenuItems(() => {
								this.b.classList.toggle("contents", M.getItemsLength() > 1);
							}),
						);
						let N = !1;
						this.a.add(
							this.j.inputEditor.onDidChangeModelContent(() => {
								N ||= this.j.inputEditor.getModel()?.getValueLength() !== 0;
							}),
						),
							this.a.add(
								this.j.onDidChangeContext(() => {
									(N ||= !0), I.layoutContentWidget(this);
								}),
							);
						const A = i.$dhb(this.b);
						this.a.add(
							A.onDidBlur(() => {
								this.g && !N && !L.currentQuickInput && this.f.fire();
							}),
						),
							this.a.add(A);
					}
					dispose() {
						this.a.dispose();
					}
					getId() {
						return "inline-chat-content-widget";
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return this.e ?? null;
					}
					beforeRender() {
						const S =
								this.j.input.inputEditor.getOption(p.EditorOption.lineHeight) *
								5,
							I = this.j.contentHeight,
							T = Math.min(S, I),
							P = 400;
						return this.j.layout(T, P), i.size(this.b, P, null), null;
					}
					afterRender() {
						this.h && ((this.h = !1), this.j.focusInput());
					}
					get chatWidget() {
						return this.j;
					}
					get isVisible() {
						return this.g;
					}
					get value() {
						return this.j.inputEditor.getValue();
					}
					show(S, I) {
						if (!this.g) {
							(this.g = !0),
								(this.h = !0),
								this.k.revealRangeNearTopIfOutsideViewport(
									c.$iL.fromPositions(S),
									o.ScrollType.Immediate,
								);
							const T = this.k.getModel()?.getWordAtPosition(S);
							(this.e = {
								position: T ? new C.$hL(S.lineNumber, T.startColumn) : S,
								preference: [
									I
										? t.ContentWidgetPositionPreference.BELOW
										: t.ContentWidgetPositionPreference.ABOVE,
								],
							}),
								this.k.addContentWidget(this),
								this.j.setContext(!0),
								this.j.setVisible(!0);
						}
					}
					hide() {
						this.g &&
							((this.g = !1),
							this.k.removeContentWidget(this),
							this.j.inputEditor.setValue(""),
							this.j.saveState(),
							this.j.setVisible(!1));
					}
					setSession(S) {
						this.j.setModel(S.chatModel, {}),
							this.j.setInputPlaceholder(S.agent.description ?? "");
					}
				};
				(e.$P1b = $),
					(e.$P1b = $ =
						Ne([j(2, d.$Li), j(3, g.$6j), j(4, l.$gj), j(5, y.$DJ)], $));
			},
		),
		