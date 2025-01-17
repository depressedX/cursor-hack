import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../browser/editorBrowser.js';
import '../../../common/config/editorOptions.js';
import './hoverOperation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import './resizableContentWidget.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../common/editorContextKeys.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../common/model.js';
import '../../../../base/common/event.js';
define(
			de[2768],
			he([1, 0, 7, 56, 38, 601, 39, 2726, 8, 10, 91, 71, 160, 64, 6]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uhc = void 0),
					(t = mt(t));
				const p = 30,
					o = 6;
				let f = class extends d.$UDb {
					static {
						g = this;
					}
					static {
						this.ID = "editor.contrib.resizableContentHoverWidget";
					}
					static {
						this.n = new t.$pgb(0, 0);
					}
					get isVisibleFromKeyboard() {
						return this.q?.source === E.HoverStartSource.Keyboard;
					}
					get isVisible() {
						return this.w.get() ?? !1;
					}
					get isFocused() {
						return this.z.get() ?? !1;
					}
					constructor(l, y, $, v, S) {
						const I = l.getOption(w.EditorOption.lineHeight) + 8,
							T = 150,
							P = new t.$pgb(T, I);
						super(l, P),
							(this.F = $),
							(this.G = v),
							(this.H = S),
							(this.u = this.D(new h.$9hb())),
							(this.C = this.D(new n.$re())),
							(this.onDidResize = this.C.event),
							(this.s = P),
							(this.w = a.EditorContextKeys.hoverVisible.bindTo(y)),
							(this.z = a.EditorContextKeys.hoverFocused.bindTo(y)),
							t.$fhb(this.a.domNode, this.u.containerDomNode),
							(this.a.domNode.style.zIndex = "50"),
							this.D(
								this.f.onDidLayoutChange(() => {
									this.isVisible && this.bb();
								}),
							),
							this.D(
								this.f.onDidChangeConfiguration((L) => {
									L.hasChanged(w.EditorOption.fontInfo) && this.Z();
								}),
							);
						const k = this.D(t.$dhb(this.a.domNode));
						this.D(
							k.onDidFocus(() => {
								this.z.set(!0);
							}),
						),
							this.D(
								k.onDidBlur(() => {
									this.z.set(!1);
								}),
							),
							this.Y(void 0),
							this.f.addContentWidget(this);
					}
					dispose() {
						super.dispose(),
							this.q?.dispose(),
							this.f.removeContentWidget(this);
					}
					getId() {
						return g.ID;
					}
					static I(l, y, $) {
						const v = typeof y == "number" ? `${y}px` : y,
							S = typeof $ == "number" ? `${$}px` : $;
						(l.style.width = v), (l.style.height = S);
					}
					J(l, y) {
						const $ = this.u.contentsDomNode;
						return g.I($, l, y);
					}
					L(l, y) {
						const $ = this.u.containerDomNode;
						return g.I($, l, y);
					}
					M(l, y) {
						this.J(l, y), this.L(l, y), this.ab();
					}
					static N(l, y, $) {
						const v = typeof y == "number" ? `${y}px` : y,
							S = typeof $ == "number" ? `${$}px` : $;
						(l.style.maxWidth = v), (l.style.maxHeight = S);
					}
					O(l, y) {
						g.N(this.u.contentsDomNode, l, y),
							g.N(this.u.containerDomNode, l, y),
							this.u.containerDomNode.style.setProperty(
								"--vscode-hover-maxWidth",
								typeof l == "number" ? `${l}px` : l,
							),
							this.ab();
					}
					P(l) {
						this.O("none", "none");
						const y = l.width,
							$ = l.height;
						this.M(y, $);
					}
					Q() {
						const l = this.X() ?? 1 / 0,
							y = this.U() ?? 1 / 0;
						(this.a.maxSize = new t.$pgb(l, y)), this.O(l, y);
					}
					m(l) {
						(g.n = new t.$pgb(l.width, l.height)),
							this.P(l),
							this.a.layout(l.height, l.width),
							this.Q(),
							this.u.scrollbar.scanDomNode(),
							this.f.layoutContentWidget(this),
							this.C.fire();
					}
					S() {
						const l = this.q?.showAtPosition;
						if (l)
							return this.r === i.ContentWidgetPositionPreference.ABOVE
								? this.g(l)
								: this.h(l);
					}
					U() {
						const l = this.S();
						if (!l) return;
						let y = o;
						return (
							Array.from(this.u.contentsDomNode.children).forEach(($) => {
								y += $.clientHeight;
							}),
							Math.min(l, y)
						);
					}
					W() {
						this.u.containerDomNode.style.setProperty(
							"--vscode-hover-whiteSpace",
							"nowrap",
						),
							this.u.containerDomNode.style.setProperty(
								"--vscode-hover-sourceWhiteSpace",
								"nowrap",
							);
						const l = Array.from(this.u.contentsDomNode.children).some(
							(y) => y.scrollWidth > y.clientWidth,
						);
						return (
							this.u.containerDomNode.style.removeProperty(
								"--vscode-hover-whiteSpace",
							),
							this.u.containerDomNode.style.removeProperty(
								"--vscode-hover-sourceWhiteSpace",
							),
							l
						);
					}
					X() {
						if (!this.f || !this.f.hasModel()) return;
						const l = this.W(),
							y = typeof this.t > "u" ? 0 : this.t - 2;
						return l || this.u.containerDomNode.clientWidth < y
							? t.$ogb(this.u.containerDomNode.ownerDocument.body).width - 14
							: this.u.containerDomNode.clientWidth + 2;
					}
					isMouseGettingCloser(l, y) {
						if (!this.q) return !1;
						if (
							this.q.initialMousePosX === void 0 ||
							this.q.initialMousePosY === void 0
						)
							return (
								(this.q.initialMousePosX = l), (this.q.initialMousePosY = y), !1
							);
						const $ = t.$tgb(this.getDomNode());
						this.q.closestMouseDistance === void 0 &&
							(this.q.closestMouseDistance = b(
								this.q.initialMousePosX,
								this.q.initialMousePosY,
								$.left,
								$.top,
								$.width,
								$.height,
							));
						const v = b(l, y, $.left, $.top, $.width, $.height);
						return v > this.q.closestMouseDistance + 4
							? !1
							: ((this.q.closestMouseDistance = Math.min(
									this.q.closestMouseDistance,
									v,
								)),
								!0);
					}
					Y(l) {
						this.q?.dispose(),
							(this.q = l),
							this.w.set(!!l),
							this.u.containerDomNode.classList.toggle("hidden", !l);
					}
					Z() {
						const { fontSize: l, lineHeight: y } = this.f.getOption(
								w.EditorOption.fontInfo,
							),
							$ = this.u.contentsDomNode;
						($.style.fontSize = `${l}px`),
							($.style.lineHeight = `${y / l}`),
							Array.prototype.slice
								.call(this.u.contentsDomNode.getElementsByClassName("code"))
								.forEach((S) => this.f.applyFontInfo(S));
					}
					$(l) {
						const y = this.u.contentsDomNode;
						(y.style.paddingBottom = ""),
							(y.textContent = ""),
							y.appendChild(l);
					}
					ab() {
						this.f.layoutContentWidget(this), this.u.onContentsChanged();
					}
					bb() {
						const l = Math.max(
								this.f.getLayoutInfo().height / 4,
								250,
								g.n.height,
							),
							y = Math.max(this.f.getLayoutInfo().width * 0.66, 500, g.n.width);
						this.O(y, l);
					}
					cb(l) {
						this.Y(l),
							this.Z(),
							this.$(l.domNode),
							this.bb(),
							this.onContentsChanged(),
							this.f.render();
					}
					getPosition() {
						return this.q
							? {
									position: this.q.showAtPosition,
									secondaryPosition: this.q.showAtSecondaryPosition,
									positionAffinity: this.q.shouldAppearBeforeContent
										? c.PositionAffinity.LeftOfInjectedText
										: void 0,
									preference: [
										this.r ?? i.ContentWidgetPositionPreference.ABOVE,
									],
								}
							: null;
					}
					show(l) {
						if (!this.f || !this.f.hasModel()) return;
						this.cb(l);
						const y = t.$zgb(this.u.containerDomNode),
							$ = l.showAtPosition;
						(this.r = this.j(y, $) ?? i.ContentWidgetPositionPreference.ABOVE),
							this.onContentsChanged(),
							l.shouldFocus && this.u.containerDomNode.focus(),
							this.C.fire();
						const S =
							this.u.containerDomNode.ownerDocument.activeElement ===
								this.u.containerDomNode &&
							(0, h.$$hb)(
								this.F.getValue("accessibility.verbosity.hover") === !0 &&
									this.G.isScreenReaderOptimized(),
								this.H.lookupKeybinding(
									"editor.action.accessibleView",
								)?.getAriaLabel() ?? "",
							);
						S &&
							(this.u.contentsDomNode.ariaLabel =
								this.u.contentsDomNode.textContent + ", " + S);
					}
					hide() {
						if (!this.q) return;
						const l = this.q.shouldFocus || this.z.get();
						this.Y(void 0),
							(this.a.maxSize = new t.$pgb(1 / 0, 1 / 0)),
							this.a.clearSashHoverState(),
							this.z.set(!1),
							this.f.layoutContentWidget(this),
							l && this.f.focus();
					}
					db() {
						const l = this.f.getLayoutInfo();
						this.a.layout(l.height, l.width), this.M("auto", "auto");
					}
					setMinimumDimensions(l) {
						(this.s = new t.$pgb(
							Math.max(this.s.width, l.width),
							Math.max(this.s.height, l.height),
						)),
							this.eb();
					}
					eb() {
						const l =
							typeof this.t > "u"
								? this.s.width
								: Math.min(this.t, this.s.width);
						this.a.minSize = new t.$pgb(l, this.s.height);
					}
					onContentsChanged() {
						this.db();
						const l = this.u.containerDomNode;
						let y = t.$zgb(l),
							$ = t.$vgb(l);
						if (
							(this.a.layout(y, $),
							this.M($, y),
							(y = t.$zgb(l)),
							($ = t.$vgb(l)),
							(this.t = $),
							this.eb(),
							this.a.layout(y, $),
							this.q?.showAtPosition)
						) {
							const v = t.$zgb(this.u.containerDomNode);
							this.r = this.j(v, this.q.showAtPosition);
						}
						this.ab();
					}
					focus() {
						this.u.containerDomNode.focus();
					}
					scrollUp() {
						const l = this.u.scrollbar.getScrollPosition().scrollTop,
							y = this.f.getOption(w.EditorOption.fontInfo);
						this.u.scrollbar.setScrollPosition({ scrollTop: l - y.lineHeight });
					}
					scrollDown() {
						const l = this.u.scrollbar.getScrollPosition().scrollTop,
							y = this.f.getOption(w.EditorOption.fontInfo);
						this.u.scrollbar.setScrollPosition({ scrollTop: l + y.lineHeight });
					}
					scrollLeft() {
						const l = this.u.scrollbar.getScrollPosition().scrollLeft;
						this.u.scrollbar.setScrollPosition({ scrollLeft: l - p });
					}
					scrollRight() {
						const l = this.u.scrollbar.getScrollPosition().scrollLeft;
						this.u.scrollbar.setScrollPosition({ scrollLeft: l + p });
					}
					pageUp() {
						const l = this.u.scrollbar.getScrollPosition().scrollTop,
							y = this.u.scrollbar.getScrollDimensions().height;
						this.u.scrollbar.setScrollPosition({ scrollTop: l - y });
					}
					pageDown() {
						const l = this.u.scrollbar.getScrollPosition().scrollTop,
							y = this.u.scrollbar.getScrollDimensions().height;
						this.u.scrollbar.setScrollPosition({ scrollTop: l + y });
					}
					goToTop() {
						this.u.scrollbar.setScrollPosition({ scrollTop: 0 });
					}
					goToBottom() {
						this.u.scrollbar.setScrollPosition({
							scrollTop: this.u.scrollbar.getScrollDimensions().scrollHeight,
						});
					}
				};
				(e.$uhc = f),
					(e.$uhc =
						f =
						g =
							Ne([j(1, m.$6j), j(2, r.$gj), j(3, u.$XK), j(4, C.$uZ)], f));
				function b(s, l, y, $, v, S) {
					const I = y + v / 2,
						T = $ + S / 2,
						P = Math.max(Math.abs(s - I) - v / 2, 0),
						k = Math.max(Math.abs(l - T) - S / 2, 0);
					return Math.sqrt(P * P + k * k);
				}
			},
		),
		