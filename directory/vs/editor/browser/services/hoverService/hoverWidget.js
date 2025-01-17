import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../common/config/editorOptions.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../base/browser/ui/widget.js';
import '../../../../base/browser/ui/contextview/contextview.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../widget/markdownRenderer/browser/markdownRenderer.js';
import '../../../../base/common/htmlContent.js';
import '../../../../nls.js';
import '../../../../base/common/platform.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../css!vs/editor/browser/services/hoverService/hover.js';
define(
			de[2770],
			he([
				1, 0, 3, 6, 7, 39, 27, 10, 38, 160, 235, 276, 41, 5, 251, 94, 4, 12, 91,
				127, 2261,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$y$b = void 0),
					(w = mt(w));
				const s = w.$;
				var l;
				(function (S) {
					(S[(S.PointerSize = 3)] = "PointerSize"),
						(S[(S.HoverBorderWidth = 2)] = "HoverBorderWidth"),
						(S[(S.HoverWindowEdgeMargin = 2)] = "HoverWindowEdgeMargin");
				})(l || (l = {}));
				let y = class extends u.$Uhb {
					get Q() {
						return w.getWindow(this.r.targetElements[0]);
					}
					get R() {
						return w.getWindow(this.r.targetElements[0]).document
							.documentElement;
					}
					get isDisposed() {
						return this.t;
					}
					get isMouseIn() {
						return this.b.isMouseIn;
					}
					get domNode() {
						return this.c.containerDomNode;
					}
					get onDispose() {
						return this.S.event;
					}
					get onRequestLayout() {
						return this.U.event;
					}
					get anchor() {
						return this.w === r.HoverPosition.BELOW
							? a.AnchorPosition.BELOW
							: a.AnchorPosition.ABOVE;
					}
					get x() {
						return this.L;
					}
					get y() {
						return this.M;
					}
					get isLocked() {
						return this.N;
					}
					set isLocked(I) {
						this.N !== I &&
							((this.N = I), this.h.classList.toggle("locked", this.N));
					}
					constructor(I, T, P, k, L, D) {
						super(),
							(this.W = T),
							(this.X = P),
							(this.Y = k),
							(this.Z = L),
							(this.ab = D),
							(this.a = new t.$Zc()),
							(this.t = !1),
							(this.J = !1),
							(this.L = 0),
							(this.M = 0),
							(this.N = !1),
							(this.O = !1),
							(this.P = !1),
							(this.S = this.D(new i.$re())),
							(this.U = this.D(new i.$re())),
							(this.s =
								I.linkHandler ||
								((B) =>
									(0, n.$Rzb)(
										this.Y,
										B,
										(0, g.$el)(I.content) ? I.content.isTrusted : void 0,
									))),
							(this.r =
								"targetElements" in I.target ? I.target : new v(I.target)),
							(this.g = I.appearance?.showPointer
								? s("div.workbench-hover-pointer")
								: void 0),
							(this.c = this.D(new r.$9hb())),
							this.c.containerDomNode.classList.add(
								"workbench-hover",
								"fadeIn",
							),
							I.appearance?.compact &&
								this.c.containerDomNode.classList.add(
									"workbench-hover",
									"compact",
								),
							I.appearance?.skipFadeInAnimation &&
								this.c.containerDomNode.classList.add("skip-fade-in"),
							I.additionalClasses &&
								this.c.containerDomNode.classList.add(...I.additionalClasses),
							I.position?.forcePosition && (this.J = !0),
							I.trapFocus && (this.O = !0),
							(this.w = I.position?.hoverPosition ?? r.HoverPosition.ABOVE),
							this.j(this.c.containerDomNode, (B) => B.stopPropagation()),
							this.u(this.c.containerDomNode, (B) => {
								B.equals(C.KeyCode.Escape) && this.dispose();
							}),
							this.D(w.$0fb(this.Q, "blur", () => this.dispose()));
						const M = s("div.hover-row.markdown-hover"),
							N = s("div.hover-contents");
						if (typeof I.content == "string")
							(N.textContent = I.content), (N.style.whiteSpace = "pre-wrap");
						else if (w.$Ygb(I.content))
							N.appendChild(I.content), N.classList.add("html-hover-contents");
						else {
							const B = I.content,
								U = this.Z.createInstance(n.$Qzb, {
									codeBlockFontFamily:
										this.X.getValue("editor").fontFamily ||
										m.EDITOR_FONT_DEFAULTS.fontFamily,
								}),
								{ element: z } = U.render(B, {
									actionHandler: {
										callback: (F) => this.s(F),
										disposables: this.a,
									},
									asyncRenderCallback: () => {
										N.classList.add("code-hover-contents"),
											this.layout(),
											this.U.fire();
									},
								});
							N.appendChild(z);
						}
						if (
							(M.appendChild(N),
							this.c.contentsDomNode.appendChild(M),
							I.actions && I.actions.length > 0)
						) {
							const B = s("div.hover-row.status-bar"),
								U = s("div.actions");
							I.actions.forEach((z) => {
								const F = this.W.lookupKeybinding(z.commandId),
									x = F ? F.getLabel() : null;
								r.$0hb.render(
									U,
									{
										label: z.label,
										commandId: z.commandId,
										run: (H) => {
											z.run(H), this.dispose();
										},
										iconClass: z.iconClass,
									},
									x,
								);
							}),
								B.appendChild(U),
								this.c.containerDomNode.appendChild(B);
						}
						(this.h = s("div.workbench-hover-container")),
							this.g && this.h.appendChild(this.g),
							this.h.appendChild(this.c.containerDomNode);
						let A;
						if (
							(I.actions && I.actions.length > 0
								? (A = !1)
								: I.persistence?.hideOnHover === void 0
									? (A =
											typeof I.content == "string" ||
											((0, g.$el)(I.content) &&
												!I.content.value.includes("](") &&
												!I.content.value.includes("</a>")))
									: (A = I.persistence.hideOnHover),
							I.appearance?.showHoverHint)
						) {
							const B = s("div.hover-row.status-bar"),
								U = s("div.info");
							(U.textContent = (0, p.localize)(
								187,
								null,
								o.$m ? "Option" : "Alt",
							)),
								B.appendChild(U),
								this.c.containerDomNode.appendChild(B);
						}
						const R = [...this.r.targetElements];
						A || R.push(this.h);
						const O = this.D(new $(R));
						if (
							(this.D(
								O.onMouseOut(() => {
									this.N || this.dispose();
								}),
							),
							A)
						) {
							const B = [...this.r.targetElements, this.h];
							(this.b = this.D(new $(B))),
								this.D(
									this.b.onMouseOut(() => {
										this.N || this.dispose();
									}),
								);
						} else this.b = O;
					}
					bb() {
						if (!this.O || this.P) return;
						this.P = !0;
						const I = this.c.containerDomNode,
							T = this.cb(this.c.containerDomNode);
						if (T) {
							const P = w.$ghb(this.h, s("div")),
								k = w.$fhb(this.h, s("div"));
							(P.tabIndex = 0),
								(k.tabIndex = 0),
								this.D(
									w.$0fb(k, "focus", (L) => {
										I.focus(), L.preventDefault();
									}),
								),
								this.D(
									w.$0fb(P, "focus", (L) => {
										T.focus(), L.preventDefault();
									}),
								);
						}
					}
					cb(I) {
						if (I.hasChildNodes())
							for (let T = 0; T < I.childNodes.length; T++) {
								const P = I.childNodes.item(I.childNodes.length - T - 1);
								if (P.nodeType === P.ELEMENT_NODE) {
									const L = P;
									if (typeof L.tabIndex == "number" && L.tabIndex >= 0)
										return L;
								}
								const k = this.cb(P);
								if (k) return k;
							}
					}
					render(I) {
						I.appendChild(this.h);
						const P =
							this.h.contains(this.h.ownerDocument.activeElement) &&
							(0, r.$$hb)(
								this.X.getValue("accessibility.verbosity.hover") === !0 &&
									this.ab.isScreenReaderOptimized(),
								this.W.lookupKeybinding(
									"editor.action.accessibleView",
								)?.getAriaLabel(),
							);
						P && (0, b.$pib)(P), this.layout(), this.bb();
					}
					layout() {
						this.c.containerDomNode.classList.remove("right-aligned"),
							(this.c.contentsDomNode.style.maxHeight = "");
						const I = (R) => {
								const O = w.$ugb(R),
									B = R.getBoundingClientRect();
								return {
									top: B.top * O,
									bottom: B.bottom * O,
									right: B.right * O,
									left: B.left * O,
								};
							},
							T = this.r.targetElements.map((R) => I(R)),
							{ top: P, right: k, bottom: L, left: D } = T[0],
							M = k - D,
							N = L - P,
							A = {
								top: P,
								right: k,
								bottom: L,
								left: D,
								width: M,
								height: N,
								center: { x: D + M / 2, y: P + N / 2 },
							};
						if (
							(this.fb(A),
							this.gb(A),
							this.hb(A),
							(this.h.style.padding = ""),
							(this.h.style.margin = ""),
							this.g)
						) {
							switch (this.w) {
								case r.HoverPosition.RIGHT:
									(A.left += l.PointerSize),
										(A.right += l.PointerSize),
										(this.h.style.paddingLeft = `${l.PointerSize}px`),
										(this.h.style.marginLeft = `${-l.PointerSize}px`);
									break;
								case r.HoverPosition.LEFT:
									(A.left -= l.PointerSize),
										(A.right -= l.PointerSize),
										(this.h.style.paddingRight = `${l.PointerSize}px`),
										(this.h.style.marginRight = `${-l.PointerSize}px`);
									break;
								case r.HoverPosition.BELOW:
									(A.top += l.PointerSize),
										(A.bottom += l.PointerSize),
										(this.h.style.paddingTop = `${l.PointerSize}px`),
										(this.h.style.marginTop = `${-l.PointerSize}px`);
									break;
								case r.HoverPosition.ABOVE:
									(A.top -= l.PointerSize),
										(A.bottom -= l.PointerSize),
										(this.h.style.paddingBottom = `${l.PointerSize}px`),
										(this.h.style.marginBottom = `${-l.PointerSize}px`);
									break;
							}
							(A.center.x = A.left + M / 2), (A.center.y = A.top + N / 2);
						}
						this.db(A),
							this.eb(A),
							this.g &&
								(this.g.classList.remove("top"),
								this.g.classList.remove("left"),
								this.g.classList.remove("right"),
								this.g.classList.remove("bottom"),
								this.ib(A)),
							this.c.onContentsChanged();
					}
					db(I) {
						const T = this.c.containerDomNode.clientWidth + l.HoverBorderWidth;
						this.r.x !== void 0
							? (this.L = this.r.x)
							: this.w === r.HoverPosition.RIGHT
								? (this.L = I.right)
								: this.w === r.HoverPosition.LEFT
									? (this.L = I.left - T)
									: (this.g
											? (this.L =
													I.center.x - this.c.containerDomNode.clientWidth / 2)
											: (this.L = I.left),
										this.L + T >= this.R.clientWidth &&
											(this.c.containerDomNode.classList.add("right-aligned"),
											(this.L = Math.max(
												this.R.clientWidth - T - l.HoverWindowEdgeMargin,
												this.R.clientLeft,
											)))),
							this.L < this.R.clientLeft &&
								(this.L = I.left + l.HoverWindowEdgeMargin);
					}
					eb(I) {
						this.r.y !== void 0
							? (this.M = this.r.y)
							: this.w === r.HoverPosition.ABOVE
								? (this.M = I.top)
								: this.w === r.HoverPosition.BELOW
									? (this.M = I.bottom - 2)
									: this.g
										? (this.M =
												I.center.y + this.c.containerDomNode.clientHeight / 2)
										: (this.M = I.bottom),
							this.M > this.Q.innerHeight && (this.M = I.bottom);
					}
					fb(I) {
						if (this.r.x !== void 0) return;
						const T = this.g ? l.PointerSize : 0;
						if (this.J) {
							const P = T + l.HoverBorderWidth;
							this.w === r.HoverPosition.RIGHT
								? (this.c.containerDomNode.style.maxWidth = `${this.R.clientWidth - I.right - P}px`)
								: this.w === r.HoverPosition.LEFT &&
									(this.c.containerDomNode.style.maxWidth = `${I.left - P}px`);
							return;
						}
						this.w === r.HoverPosition.RIGHT
							? this.R.clientWidth - I.right <
									this.c.containerDomNode.clientWidth + T &&
								(I.left >= this.c.containerDomNode.clientWidth + T
									? (this.w = r.HoverPosition.LEFT)
									: (this.w = r.HoverPosition.BELOW))
							: this.w === r.HoverPosition.LEFT &&
								(I.left < this.c.containerDomNode.clientWidth + T &&
									(this.R.clientWidth - I.right >=
									this.c.containerDomNode.clientWidth + T
										? (this.w = r.HoverPosition.RIGHT)
										: (this.w = r.HoverPosition.BELOW)),
								I.left - this.c.containerDomNode.clientWidth - T <=
									this.R.clientLeft && (this.w = r.HoverPosition.RIGHT));
					}
					gb(I) {
						if (this.r.y !== void 0 || this.J) return;
						const T = this.g ? l.PointerSize : 0;
						this.w === r.HoverPosition.ABOVE
							? I.top - this.c.containerDomNode.clientHeight - T < 0 &&
								(this.w = r.HoverPosition.BELOW)
							: this.w === r.HoverPosition.BELOW &&
								I.bottom + this.c.containerDomNode.clientHeight + T >
									this.Q.innerHeight &&
								(this.w = r.HoverPosition.ABOVE);
					}
					hb(I) {
						let T = this.Q.innerHeight / 2;
						if (this.J) {
							const P = (this.g ? l.PointerSize : 0) + l.HoverBorderWidth;
							this.w === r.HoverPosition.ABOVE
								? (T = Math.min(T, I.top - P))
								: this.w === r.HoverPosition.BELOW &&
									(T = Math.min(T, this.Q.innerHeight - I.bottom - P));
						}
						if (
							((this.c.containerDomNode.style.maxHeight = `${T}px`),
							this.c.contentsDomNode.clientHeight <
								this.c.contentsDomNode.scrollHeight)
						) {
							const P = `${this.c.scrollbar.options.verticalScrollbarSize}px`;
							this.c.contentsDomNode.style.paddingRight !== P &&
								(this.c.contentsDomNode.style.paddingRight = P);
						}
					}
					ib(I) {
						if (this.g)
							switch (this.w) {
								case r.HoverPosition.LEFT:
								case r.HoverPosition.RIGHT: {
									this.g.classList.add(
										this.w === r.HoverPosition.LEFT ? "right" : "left",
									);
									const T = this.c.containerDomNode.clientHeight;
									T > I.height
										? (this.g.style.top = `${I.center.y - (this.M - T) - l.PointerSize}px`)
										: (this.g.style.top = `${Math.round(T / 2) - l.PointerSize}px`);
									break;
								}
								case r.HoverPosition.ABOVE:
								case r.HoverPosition.BELOW: {
									this.g.classList.add(
										this.w === r.HoverPosition.ABOVE ? "bottom" : "top",
									);
									const T = this.c.containerDomNode.clientWidth;
									let P = Math.round(T / 2) - l.PointerSize;
									const k = this.L + P;
									(k < I.left || k > I.right) &&
										(P = I.center.x - this.L - l.PointerSize),
										(this.g.style.left = `${P}px`);
									break;
								}
							}
					}
					focus() {
						this.c.containerDomNode.focus();
					}
					hide() {
						this.dispose();
					}
					dispose() {
						this.t ||
							(this.S.fire(),
							this.h.remove(),
							this.a.dispose(),
							this.r.dispose(),
							super.dispose()),
							(this.t = !0);
					}
				};
				(e.$y$b = y),
					(e.$y$b = y =
						Ne(
							[
								j(1, E.$uZ),
								j(2, d.$gj),
								j(3, h.$7rb),
								j(4, c.$Li),
								j(5, f.$XK),
							],
							y,
						));
				class $ extends u.$Uhb {
					get onMouseOut() {
						return this.c.event;
					}
					get isMouseIn() {
						return this.a;
					}
					constructor(I) {
						super(),
							(this.g = I),
							(this.a = !0),
							(this.c = this.D(new i.$re())),
							this.g.forEach((T) => this.m(T, () => this.h(T))),
							this.g.forEach((T) => this.q(T, () => this.r(T)));
					}
					h(I) {
						(this.a = !0), this.t(I);
					}
					r(I) {
						(this.a = !1), this.s(I);
					}
					s(I) {
						this.t(I), (this.b = w.getWindow(I).setTimeout(() => this.w(), 0));
					}
					t(I) {
						this.b && (w.getWindow(I).clearTimeout(this.b), (this.b = void 0));
					}
					w() {
						this.a || this.c.fire();
					}
				}
				class v {
					constructor(I) {
						(this.a = I), (this.targetElements = [this.a]);
					}
					dispose() {}
				}
			},
		),
		