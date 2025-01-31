import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/symbols.js';
import '../../../../../nls.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../chat/common/chatAgents.js';
import '../../../inlineChat/browser/inlineChatWidget.js';
import './terminalChat.js';
import '../../stickyScroll/browser/terminalStickyScrollContribution.js';
import '../../../../../css!vs/workbench/contrib/terminalContrib/chat/browser/media/terminalChatWidget.js';
define(
			de[4377],
			he([1, 0, 7, 6, 3, 649, 4, 8, 5, 153, 1357, 692, 2004, 2495]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*symbols*/,
 C /*nls*/,
 d /*contextkey*/,
 m /*instantiation*/,
 r /*chatAgents*/,
 u /*inlineChatWidget*/,
 a /*terminalChat*/,
 h /*terminalStickyScrollContribution*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3Vc = void 0);
				var c;
				(function (g) {
					(g[(g.HorizontalMargin = 10)] = "HorizontalMargin"),
						(g[(g.VerticalMargin = 30)] = "VerticalMargin");
				})(c || (c = {}));
				let n = class extends w.$1c {
					get inlineChatWidget() {
						return this.c;
					}
					constructor(p, o, f, b, s) {
						super(),
							(this.j = p),
							(this.m = o),
							(this.n = f),
							(this.q = b),
							(this.r = s),
							(this.b = this.D(new i.$re())),
							(this.onDidHide = this.b.event),
							(this.g = a.TerminalChatContextKeys.focused.bindTo(this.r)),
							(this.h = a.TerminalChatContextKeys.visible.bindTo(this.r)),
							(this.a = document.createElement("div")),
							this.a.classList.add("terminal-inline-chat"),
							p.appendChild(this.a),
							(this.c = this.q.createInstance(
								u.$9Yb,
								{
									location: r.ChatAgentLocation.Terminal,
									resolveData: () => {},
								},
								{
									statusMenuId: {
										menu: a.$WVc,
										options: {
											buttonConfigProvider: (y) =>
												y.id === a.TerminalChatCommandId.ViewInChat ||
												y.id === a.TerminalChatCommandId.RunCommand ||
												y.id === a.TerminalChatCommandId.RunFirstCommand
													? { isSecondary: !1 }
													: { isSecondary: !0 },
										},
									},
									chatWidgetViewOptions: {
										rendererOptions: { editableCodeBlock: !0 },
										menus: {
											telemetrySource: "terminal-inline-chat",
											executeToolbar: a.$UVc,
											inputSideToolbar: a.$VVc,
										},
									},
								},
							)),
							this.D(
								i.Event.any(
									this.c.onDidChangeHeight,
									this.m.onDimensionsChanged,
									this.c.chatWidget.onDidChangeContentHeight,
									i.Event.debounce(this.n.raw.onCursorMove, () => {}, E.$me),
								)(() => this.t()),
							);
						const l = new ResizeObserver(() => this.t());
						l.observe(this.j),
							this.D((0, w.$Yc)(() => l.disconnect())),
							this.w(),
							this.a.appendChild(this.c.domNode),
							(this.f = this.D((0, t.$dhb)(this.a))),
							this.D(this.f.onDidFocus(() => this.g.set(!0))),
							this.D(
								this.f.onDidBlur(() => {
									this.g.set(!1),
										this.inlineChatWidget.responseContent || this.hide();
								}),
							),
							this.hide();
					}
					t() {
						this.s && this.u(this.c.contentHeight);
					}
					u(p) {
						const o = this.n.raw.element;
						if (!o) return;
						const f = (0, t.$Ogb)().getComputedStyle(o),
							b = parseInt(f.paddingLeft) + parseInt(f.paddingRight),
							s = Math.min(
								640,
								o.clientWidth - 12 - 2 - c.HorizontalMargin - b,
							),
							l = this.C() ?? Number.MAX_SAFE_INTEGER;
						let y = Math.min(480, p, l);
						const $ = this.y() ?? 0;
						if (s === 0 || y === 0) return;
						let v;
						y < this.c.contentHeight &&
							(y - $ > 0
								? (y = y - $ - c.VerticalMargin)
								: ((y = y - c.VerticalMargin), (v = y))),
							(this.a.style.paddingLeft = f.paddingLeft),
							(this.s = new t.$pgb(s, y)),
							this.c.layout(this.s),
							this.z(v);
					}
					w() {
						(this.c.placeholder = (0, C.localize)(10498, null)),
							this.c.updateInfo((0, C.localize)(10499, null));
					}
					reveal() {
						this.u(this.c.contentHeight),
							this.a.classList.remove("hide"),
							this.h.set(!0),
							this.c.focus(),
							this.m.scrollToBottom();
					}
					y() {
						const p = this.m.xterm?.getFont();
						if (!p?.charHeight) return;
						const o = this.C() ?? 0,
							f = p.charHeight * p.lineHeight,
							b = o - this.m.rows * f,
							s = (this.m.xterm?.raw.buffer.active.cursorY ?? 0) + 1;
						return b + s * f;
					}
					z(p) {
						const o = this.y();
						if (!o) return;
						this.a.style.top = `${o}px`;
						const f = this.c.contentHeight,
							b = this.C();
						b &&
							(o > b - f && b - f > 0
								? this.F(o - (b - f))
								: p
									? this.F(p)
									: this.F(void 0));
					}
					C() {
						return this.j.clientHeight;
					}
					hide() {
						this.a.classList.add("hide"),
							this.c.reset(),
							this.w(),
							this.c.updateToolbar(!1),
							this.h.set(!1),
							(this.c.value = ""),
							this.m.focus(),
							this.F(void 0),
							this.b.fire();
					}
					F(p) {
						p === void 0 || this.a.classList.contains("hide")
							? ((this.j.style.position = ""),
								(this.j.style.bottom = ""),
								h.$2Vc.get(this.m)?.hideUnlock())
							: ((this.j.style.position = "relative"),
								(this.j.style.bottom = `${p}px`),
								h.$2Vc.get(this.m)?.hideLock());
					}
					focus() {
						this.c.focus();
					}
					hasFocus() {
						return this.c.hasFocus();
					}
					input() {
						return this.c.value;
					}
					setValue(p) {
						this.c.value = p ?? "";
					}
					acceptCommand(p, o) {
						this.m.runCommand(p, o), this.hide();
					}
					get focusTracker() {
						return this.f;
					}
				};
				(e.$3Vc = n), (e.$3Vc = n = Ne([j(3, m.$Li), j(4, d.$6j)], n));
			},
		)
