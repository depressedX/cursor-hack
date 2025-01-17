import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
import '../../../../base/browser/ui/widget.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/browser/fastDomNode.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../editor/common/editorCommon.js';
import './preferencesWidgets.js';
import '../../../../base/common/async.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../css!vs/workbench/contrib/preferences/browser/media/keybindings.js';
define(
			de[1804],
			he([
				1, 0, 4, 12, 3, 6, 460, 235, 27, 7, 127, 114, 194, 39, 49, 5, 51, 98,
				1293, 15, 8, 106, 2475,
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
			) {
				"use strict";
				var y, $;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gBc = e.$fBc = e.$eBc = void 0),
					(t = mt(t)),
					(r = mt(r)),
					(u = mt(u));
				let v = class extends f.$cBc {
					constructor(P, k, L, D, M, N) {
						super(P, k, L, D, M, N),
							(this.R = this.D(new w.$Zc())),
							(this.S = this.D(new E.$re())),
							(this.onKeybinding = this.S.event),
							(this.U = this.D(new E.$re())),
							(this.onEnter = this.U.event),
							(this.W = this.D(new E.$re())),
							(this.onEscape = this.W.event),
							(this.X = this.D(new E.$re())),
							(this.onBlur = this.X.event),
							this.D((0, w.$Yc)(() => this.stopRecordingKeys())),
							(this.P = null),
							(this.Q = "");
					}
					clear() {
						(this.P = null), super.clear();
					}
					startRecordingKeys() {
						this.R.add(
							r.$0fb(this.inputBox.inputElement, r.$$gb.KEY_DOWN, (P) =>
								this.Y(new a.$7fb(P)),
							),
						),
							this.R.add(
								r.$0fb(this.inputBox.inputElement, r.$$gb.BLUR, () =>
									this.X.fire(),
								),
							),
							this.R.add(
								r.$0fb(this.inputBox.inputElement, r.$$gb.INPUT, () => {
									this.setInputValue(this.Q);
								}),
							);
					}
					stopRecordingKeys() {
						(this.P = null), this.R.clear();
					}
					setInputValue(P) {
						(this.Q = P), (this.inputBox.value = this.Q);
					}
					Y(P) {
						if (
							(P.preventDefault(),
							P.stopPropagation(),
							!this.s.recordEnter && P.equals(m.KeyCode.Enter))
						) {
							this.U.fire();
							return;
						}
						if (P.equals(m.KeyCode.Escape)) {
							this.W.fire();
							return;
						}
						this.Z(P);
					}
					Z(P) {
						const k = this.J.resolveKeyboardEvent(P),
							L = `code: ${P.browserEvent.code}, keyCode: ${P.browserEvent.keyCode}, key: ${P.browserEvent.key} => UI: ${k.getAriaLabel()}, user settings: ${k.getUserSettingsLabel()}, dispatch: ${k.getDispatchChords()[0]}`,
							D = this.s;
						this.P || (this.P = []),
							this.P.length > 0 &&
							this.P[this.P.length - 1].getDispatchChords()[0] === null
								? (this.P[this.P.length - 1] = k)
								: (this.P.length === 2 && (this.P = []), this.P.push(k));
						const N = this.P.map((A) => A.getUserSettingsLabel() || "").join(
							" ",
						);
						this.setInputValue(D.quoteRecordedKeys ? `"${N}"` : N),
							(this.inputBox.inputElement.title = L),
							this.S.fire(this.P);
					}
				};
				(e.$eBc = v),
					(e.$eBc = v =
						Ne([j(2, n.$Wxb), j(3, g.$Li), j(4, s.$6j), j(5, c.$uZ)], v));
				let S = class extends d.$Uhb {
					static {
						y = this;
					}
					static {
						this.a = 400;
					}
					static {
						this.b = 110;
					}
					constructor(P, k) {
						super(),
							(this.M = k),
							(this.s = this.D(new w.$Zc())),
							(this.t = null),
							(this.w = !1),
							(this.y = this.D(new E.$re())),
							(this.J = this.D(new E.$re())),
							(this.onDidChange = this.J.event),
							(this.L = this.D(new E.$re())),
							(this.onShowExistingKeybidings = this.L.event),
							(this.g = (0, h.$Shb)(document.createElement("div"))),
							this.g.setDisplay("none"),
							this.g.setClassName("defineKeybindingWidget"),
							this.g.setWidth(y.a),
							this.g.setHeight(y.b);
						const L = t.localize(8374, null);
						r.$fhb(this.g.domNode, r.$(".message", void 0, L)),
							(this.g.domNode.style.backgroundColor = (0, p.$rP)(p.$bQ)),
							(this.g.domNode.style.color = (0, p.$rP)(p.$cQ)),
							(this.g.domNode.style.boxShadow = `0 2px 8px ${(0, p.$rP)(p.$bR)}`),
							(this.h = this.D(
								this.M.createInstance(v, this.g.domNode, {
									ariaLabel: L,
									history: [],
									inputBoxStyles: l.$wyb,
								}),
							)),
							this.h.startRecordingKeys(),
							this.D(this.h.onKeybinding((D) => this.N(D))),
							this.D(this.h.onEnter(() => this.R())),
							this.D(this.h.onEscape(() => this.Q())),
							this.D(this.h.onBlur(() => this.P())),
							(this.n = r.$fhb(this.g.domNode, r.$(".output"))),
							(this.r = r.$fhb(this.g.domNode, r.$(".existing"))),
							P && r.$fhb(P, this.g.domNode);
					}
					get domNode() {
						return this.g.domNode;
					}
					define() {
						return (
							this.h.clear(),
							b.Promises.withAsyncBody(async (P) => {
								this.w ||
									((this.w = !0),
									this.g.setDisplay("block"),
									(this.t = null),
									this.h.setInputValue(""),
									r.$9fb(this.n),
									r.$9fb(this.r),
									await (0, b.$Nh)(0),
									this.h.focus());
								const k = this.y.event(() => {
									P(this.O()), k.dispose();
								});
							})
						);
					}
					layout(P) {
						const k = Math.round((P.height - y.b) / 2);
						this.g.setTop(k);
						const L = Math.round((P.width - y.a) / 2);
						this.g.setLeft(L);
					}
					printExisting(P) {
						if (P > 0) {
							const k = r.$("span.existingText"),
								L =
									P === 1
										? t.localize(8375, null, P)
										: t.localize(8376, null, P);
							r.$fhb(k, document.createTextNode(L)),
								u.$oib(L),
								this.r.appendChild(k),
								(k.onmousedown = (D) => {
									D.preventDefault();
								}),
								(k.onmouseup = (D) => {
									D.preventDefault();
								}),
								(k.onclick = () => {
									this.L.fire(this.O());
								});
						}
					}
					N(P) {
						if (
							(this.s.clear(),
							(this.t = P),
							r.$9fb(this.n),
							r.$9fb(this.r),
							this.s
								.add(new C.$7ob(this.n, i.OS, l.$jyb))
								.set(this.t?.[0] ?? void 0),
							this.t)
						)
							for (let D = 1; D < this.t.length; D++)
								this.n.appendChild(
									document.createTextNode(t.localize(8377, null)),
								),
									this.s.add(new C.$7ob(this.n, i.OS, l.$jyb)).set(this.t[D]);
						const L = this.O();
						L && this.J.fire(L);
					}
					O() {
						let P = null;
						return (
							this.t &&
								(P = this.t.map((k) => k.getUserSettingsLabel()).join(" ")),
							P
						);
					}
					P() {
						(this.t = null), this.R();
					}
					Q() {
						this.t === null
							? this.R()
							: ((this.t = null),
								this.h.clear(),
								r.$9fb(this.n),
								r.$9fb(this.r));
					}
					R() {
						this.g.setDisplay("none"), (this.w = !1), this.y.fire();
					}
				};
				(e.$fBc = S), (e.$fBc = S = y = Ne([j(1, g.$Li)], S));
				let I = class extends w.$1c {
					static {
						$ = this;
					}
					static {
						this.a = "editor.contrib.defineKeybindingWidget";
					}
					constructor(P, k) {
						super(),
							(this.f = P),
							(this.b = this.D(k.createInstance(S, null))),
							this.f.addOverlayWidget(this);
					}
					getId() {
						return $.a;
					}
					getDomNode() {
						return this.b.domNode;
					}
					getPosition() {
						return { preference: null };
					}
					dispose() {
						this.f.removeOverlayWidget(this), super.dispose();
					}
					start() {
						this.f.hasModel() &&
							this.f.revealPositionInCenterIfOutsideViewport(
								this.f.getPosition(),
								o.ScrollType.Smooth,
							);
						const P = this.f.getLayoutInfo();
						return (
							this.b.layout(new r.$pgb(P.width, P.height)), this.b.define()
						);
					}
				};
				(e.$gBc = I), (e.$gBc = I = $ = Ne([j(1, g.$Li)], I));
			},
		),
		