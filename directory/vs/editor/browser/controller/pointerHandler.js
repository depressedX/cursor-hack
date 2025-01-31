import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/canIUse.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/touch.js';
import '../../../base/browser/window.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/platform.js';
import './mouseHandler.js';
import './textAreaInput.js';
import '../coreCommands.js';
import '../editorBrowser.js';
import '../editorDom.js';
define(
			de[2840],
			he([1, 0, 459, 7, 159, 75, 3, 12, 2839, 942, 498, 56, 777]),
			function (ce /*require*/,
 e /*exports*/,
 t /*canIUse*/,
 i /*dom*/,
 w /*touch*/,
 E /*window*/,
 C /*lifecycle*/,
 d /*platform*/,
 m /*mouseHandler*/,
 r /*textAreaInput*/,
 u /*coreCommands*/,
 a /*editorBrowser*/,
 h /*editorDom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$ub = e.$0ub = void 0),
					(i = mt(i)),
					(d = mt(d));
				class c extends m.$1ub {
					constructor(o, f, b) {
						super(o, f, b),
							this.D(w.$Qhb.addTarget(this.c.linesContentDomNode)),
							this.D(
								i.$0fb(this.c.linesContentDomNode, w.EventType.Tap, (l) =>
									this.J(l),
								),
							),
							this.D(
								i.$0fb(this.c.linesContentDomNode, w.EventType.Change, (l) =>
									this.L(l),
								),
							),
							this.D(
								i.$0fb(
									this.c.linesContentDomNode,
									w.EventType.Contextmenu,
									(l) => this.w(new h.$kub(l, !1, this.c.viewDomNode), !1),
								),
							),
							(this.I = "mouse"),
							this.D(
								i.$0fb(this.c.linesContentDomNode, "pointerdown", (l) => {
									const y = l.pointerType;
									if (y === "mouse") {
										this.I = "mouse";
										return;
									} else y === "touch" ? (this.I = "touch") : (this.I = "pen");
								}),
							);
						const s = new h.$mub(this.c.viewDomNode);
						this.D(s.onPointerMove(this.c.viewDomNode, (l) => this.z(l))),
							this.D(s.onPointerUp(this.c.viewDomNode, (l) => this.F(l))),
							this.D(s.onPointerLeave(this.c.viewDomNode, (l) => this.C(l))),
							this.D(
								s.onPointerDown(this.c.viewDomNode, (l, y) => this.G(l, y)),
							);
					}
					J(o) {
						!o.initialTarget ||
							!this.c.linesContentDomNode.contains(o.initialTarget) ||
							(o.preventDefault(), this.c.focusTextArea(), this.M(o, !1));
					}
					L(o) {
						this.I === "touch" &&
							this.a.viewModel.viewLayout.deltaScrollNow(
								-o.translationX,
								-o.translationY,
							),
							this.I === "pen" && this.M(o, !0);
					}
					M(o, f) {
						const b = this.s(new h.$kub(o, !1, this.c.viewDomNode), !1);
						b.position &&
							this.b.dispatchMouse({
								position: b.position,
								mouseColumn: b.position.column,
								startedOnLineNumbers: !1,
								revealType: u.NavigationCommandRevealType.Minimal,
								mouseDownCount: o.tapCount,
								inSelectionMode: f,
								altKey: !1,
								ctrlKey: !1,
								metaKey: !1,
								shiftKey: !1,
								leftButton: !1,
								middleButton: !1,
								onInjectedText:
									b.type === a.MouseTargetType.CONTENT_TEXT &&
									b.detail.injectedText !== null,
							});
					}
					G(o, f) {
						o.browserEvent.pointerType !== "touch" && super.G(o, f);
					}
				}
				e.$0ub = c;
				class n extends m.$1ub {
					constructor(o, f, b) {
						super(o, f, b),
							this.D(w.$Qhb.addTarget(this.c.linesContentDomNode)),
							this.D(
								i.$0fb(this.c.linesContentDomNode, w.EventType.Tap, (s) =>
									this.I(s),
								),
							),
							this.D(
								i.$0fb(this.c.linesContentDomNode, w.EventType.Change, (s) =>
									this.J(s),
								),
							),
							this.D(
								i.$0fb(
									this.c.linesContentDomNode,
									w.EventType.Contextmenu,
									(s) => this.w(new h.$kub(s, !1, this.c.viewDomNode), !1),
								),
							);
					}
					I(o) {
						o.preventDefault(), this.c.focusTextArea();
						const f = this.s(new h.$kub(o, !1, this.c.viewDomNode), !1);
						if (f.position) {
							const b = document.createEvent("CustomEvent");
							b.initEvent(r.TextAreaSyntethicEvents.Tap, !1, !0),
								this.c.dispatchTextAreaEvent(b),
								this.b.moveTo(
									f.position,
									u.NavigationCommandRevealType.Minimal,
								);
						}
					}
					J(o) {
						this.a.viewModel.viewLayout.deltaScrollNow(
							-o.translationX,
							-o.translationY,
						);
					}
				}
				class g extends C.$1c {
					constructor(o, f, b) {
						super(),
							(d.$u || (d.$L && d.$v)) && t.$Yfb.pointerEvents
								? (this.a = this.D(new c(o, f, b)))
								: E.$Bfb.TouchEvent
									? (this.a = this.D(new n(o, f, b)))
									: (this.a = this.D(new m.$1ub(o, f, b)));
					}
					getTargetAtClientPoint(o, f) {
						return this.a.getTargetAtClientPoint(o, f);
					}
				}
				e.$$ub = g;
			},
		)
