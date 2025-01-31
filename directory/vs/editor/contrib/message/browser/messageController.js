import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/markdownRenderer.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/event.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../browser/editorExtensions.js';
import '../../../common/core/range.js';
import '../../../common/editorCommon.js';
import '../../../common/model.js';
import '../../../browser/widget/markdownRenderer/browser/markdownRenderer.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/browser/dom.js';
import '../../../../css!vs/editor/contrib/message/browser/messageController.js';
define(
			de[440],
			he([
				1, 0, 267, 127, 6, 94, 27, 3, 56, 46, 17, 98, 64, 251, 4, 8, 43, 41, 7,
				2314,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*markdownRenderer*/,
 i /*aria*/,
 w /*event*/,
 E /*htmlContent*/,
 C /*keyCodes*/,
 d /*lifecycle*/,
 m /*editorBrowser*/,
 r /*editorExtensions*/,
 u /*range*/,
 a /*editorCommon*/,
 h /*model*/,
 c /*markdownRenderer*/,
 n /*nls*/,
 g /*contextkey*/,
 p /*keybindingsRegistry*/,
 o /*opener*/,
 f /*dom*/) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Szb = void 0),
					(n = mt(n)),
					(f = mt(f));
				let s = class {
					static {
						b = this;
					}
					static {
						this.ID = "editor.contrib.messageController";
					}
					static {
						this.MESSAGE_VISIBLE = new g.$5j(
							"messageVisible",
							!1,
							n.localize(1314, null),
						);
					}
					static get(v) {
						return v.getContribution(b.ID);
					}
					constructor(v, S, I) {
						(this.i = I),
							(this.d = new d.$2c()),
							(this.f = new d.$Zc()),
							(this.h = !1),
							(this.a = v),
							(this.b = b.MESSAGE_VISIBLE.bindTo(S));
					}
					dispose() {
						this.g?.dispose(),
							this.f.dispose(),
							this.d.dispose(),
							this.b.reset();
					}
					isVisible() {
						return this.b.get();
					}
					showMessage(v, S) {
						(0, i.$oib)((0, E.$el)(v) ? v.value : v),
							this.b.set(!0),
							this.d.clear(),
							this.f.clear(),
							(this.g = (0, E.$el)(v)
								? (0, t.$Uib)(v, {
										actionHandler: {
											callback: (T) => {
												this.closeMessage(),
													(0, c.$Rzb)(
														this.i,
														T,
														(0, E.$el)(v) ? v.isTrusted : void 0,
													);
											},
											disposables: this.f,
										},
									})
								: void 0),
							(this.d.value = new y(
								this.a,
								S,
								typeof v == "string" ? v : this.g.element,
							)),
							this.f.add(
								w.Event.debounce(
									this.a.onDidBlurEditorText,
									(T, P) => P,
									0,
								)(() => {
									this.h ||
										(this.d.value &&
											f.$Bgb(f.$Jgb(), this.d.value.getDomNode())) ||
										this.closeMessage();
								}),
							),
							this.f.add(
								this.a.onDidChangeCursorPosition(() => this.closeMessage()),
							),
							this.f.add(this.a.onDidDispose(() => this.closeMessage())),
							this.f.add(this.a.onDidChangeModel(() => this.closeMessage())),
							this.f.add(
								f.$0fb(
									this.d.value.getDomNode(),
									f.$$gb.MOUSE_ENTER,
									() => (this.h = !0),
									!0,
								),
							),
							this.f.add(
								f.$0fb(
									this.d.value.getDomNode(),
									f.$$gb.MOUSE_LEAVE,
									() => (this.h = !1),
									!0,
								),
							);
						let I;
						this.f.add(
							this.a.onMouseMove((T) => {
								T.target.position &&
									(I
										? I.containsPosition(T.target.position) ||
											this.closeMessage()
										: (I = new u.$iL(
												S.lineNumber - 3,
												1,
												T.target.position.lineNumber + 3,
												1,
											)));
							}),
						);
					}
					closeMessage() {
						this.b.reset(),
							this.f.clear(),
							this.d.value && this.f.add(y.fadeOut(this.d.value));
					}
				};
				(e.$Szb = s), (e.$Szb = s = b = Ne([j(1, g.$6j), j(2, o.$7rb)], s));
				const l = r.$htb.bindToContribution(s.get);
				(0, r.$mtb)(
					new l({
						id: "leaveEditorMessage",
						precondition: s.MESSAGE_VISIBLE,
						handler: ($) => $.closeMessage(),
						kbOpts: {
							weight: p.KeybindingWeight.EditorContrib + 30,
							primary: C.KeyCode.Escape,
						},
					}),
				);
				class y {
					static fadeOut(v) {
						const S = () => {
								v.dispose(),
									clearTimeout(I),
									v.getDomNode().removeEventListener("animationend", S);
							},
							I = setTimeout(S, 110);
						return (
							v.getDomNode().addEventListener("animationend", S),
							v.getDomNode().classList.add("fadeOut"),
							{ dispose: S }
						);
					}
					constructor(v, { lineNumber: S, column: I }, T) {
						(this.allowEditorOverflow = !0),
							(this.suppressMouseDown = !1),
							(this.a = v),
							this.a.revealLinesInCenterIfOutsideViewport(
								S,
								S,
								a.ScrollType.Smooth,
							),
							(this.b = { lineNumber: S, column: I }),
							(this.d = document.createElement("div")),
							this.d.classList.add("monaco-editor-overlaymessage"),
							(this.d.style.marginLeft = "-6px");
						const P = document.createElement("div");
						P.classList.add("anchor", "top"), this.d.appendChild(P);
						const k = document.createElement("div");
						typeof T == "string"
							? (k.classList.add("message"), (k.textContent = T))
							: (T.classList.add("message"), k.appendChild(T)),
							this.d.appendChild(k);
						const L = document.createElement("div");
						L.classList.add("anchor", "below"),
							this.d.appendChild(L),
							this.a.addContentWidget(this),
							this.d.classList.add("fadeIn");
					}
					dispose() {
						this.a.removeContentWidget(this);
					}
					getId() {
						return "messageoverlay";
					}
					getDomNode() {
						return this.d;
					}
					getPosition() {
						return {
							position: this.b,
							preference: [
								m.ContentWidgetPositionPreference.ABOVE,
								m.ContentWidgetPositionPreference.BELOW,
							],
							positionAffinity: h.PositionAffinity.Right,
						};
					}
					afterRender(v) {
						this.d.classList.toggle(
							"below",
							v === m.ContentWidgetPositionPreference.BELOW,
						);
					}
				}
				(0, r.$qtb)(s.ID, s, r.EditorContributionInstantiation.Lazy);
			},
		)
