import '../../../../../require.js';
import '../../../../../exports.js';
import './hoverActionIds.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/config/editorOptions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../inlineCompletions/browser/hintsWidget/inlineCompletionsHintsWidget.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/keybinding/common/keybindingResolver.js';
import '../../../../base/common/async.js';
import './hoverUtils.js';
import './contentHoverWidgetWrapper.js';
import '../../../../base/common/event.js';
import '../../../../css!vs/editor/contrib/hover/browser/hover.js';
define(
			de[448],
			he([1, 0, 936, 27, 3, 38, 5, 1215, 39, 390, 15, 937, 3606, 6, 905]),
			function (ce /*require*/,
 e /*exports*/,
 t /*hoverActionIds*/,
 i /*keyCodes*/,
 w /*lifecycle*/,
 E /*editorOptions*/,
 C /*instantiation*/,
 d /*inlineCompletionsHintsWidget*/,
 m /*keybinding*/,
 r /*keybindingResolver*/,
 u /*async*/,
 a /*hoverUtils*/,
 h /*contentHoverWidgetWrapper*/,
 c /*event*/) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$whc = void 0);
				const g = !1;
				let p = class extends w.$1c {
					static {
						n = this;
					}
					static {
						this.ID = "editor.contrib.contentHover";
					}
					constructor(f, b, s) {
						super(),
							(this.m = f),
							(this.n = b),
							(this.q = s),
							(this.a = this.D(new c.$re())),
							(this.onHoverContentsChanged = this.a.event),
							(this.shouldKeepOpenOnEditorMouseMoveOrLeave = !1),
							(this.b = new w.$Zc()),
							(this.j = { mouseDown: !1, activatedByDecoratorClick: !1 }),
							(this.g = this.D(new u.$Yh(() => this.I(this.f), 0))),
							this.r(),
							this.D(
								this.m.onDidChangeConfiguration((l) => {
									l.hasChanged(E.EditorOption.hover) && (this.s(), this.r());
								}),
							);
					}
					static get(f) {
						return f.getContribution(n.ID);
					}
					r() {
						const f = this.m.getOption(E.EditorOption.hover);
						(this.h = {
							enabled: f.enabled,
							sticky: f.sticky,
							hidingDelay: f.hidingDelay,
						}),
							f.enabled
								? (this.b.add(this.m.onMouseDown((b) => this.w(b))),
									this.b.add(this.m.onMouseUp(() => this.C())),
									this.b.add(this.m.onMouseMove((b) => this.H(b))),
									this.b.add(this.m.onKeyDown((b) => this.L(b))))
								: (this.b.add(this.m.onMouseMove((b) => this.H(b))),
									this.b.add(this.m.onKeyDown((b) => this.L(b)))),
							this.b.add(this.m.onMouseLeave((b) => this.F(b))),
							this.b.add(
								this.m.onDidChangeModel(() => {
									this.t(), this.M();
								}),
							),
							this.b.add(this.m.onDidChangeModelContent(() => this.t())),
							this.b.add(this.m.onDidScrollChange((b) => this.u(b)));
					}
					s() {
						this.b.clear();
					}
					t() {
						(this.f = void 0), this.g.cancel();
					}
					u(f) {
						(f.scrollTopChanged || f.scrollLeftChanged) && this.M();
					}
					w(f) {
						(this.j.mouseDown = !0), !this.y(f) && this.M();
					}
					y(f) {
						return this.z(f) || this.O();
					}
					z(f) {
						const b = this.c?.getDomNode();
						return b ? (0, a.$TDb)(b, f.event.posx, f.event.posy) : !1;
					}
					C() {
						this.j.mouseDown = !1;
					}
					F(f) {
						this.shouldKeepOpenOnEditorMouseMoveOrLeave ||
							(this.t(), this.y(f)) ||
							g ||
							this.M();
					}
					G(f) {
						const b = this.h.sticky,
							s = ($, v) => {
								const S = this.z($);
								return v && S;
							},
							l = ($) => {
								const v = this.z($),
									S = this.c?.isColorPickerVisible ?? !1;
								return v && S;
							},
							y = ($, v) =>
								(v &&
									this.c?.containsNode(
										$.event.browserEvent.view?.document.activeElement,
									) &&
									!$.event.browserEvent.view?.getSelection()?.isCollapsed) ??
								!1;
						return s(f, b) || l(f) || y(f, b);
					}
					H(f) {
						if (
							this.shouldKeepOpenOnEditorMouseMoveOrLeave ||
							((this.f = f), this.c?.isFocused || this.c?.isResizing)
						)
							return;
						const b = this.h.sticky;
						if (b && this.c?.isVisibleFromKeyboard) return;
						if (this.G(f)) {
							this.g.cancel();
							return;
						}
						const l = this.h.hidingDelay;
						if (this.c?.isVisible && b && l > 0) {
							this.g.isScheduled() || this.g.schedule(l);
							return;
						}
						this.I(f);
					}
					I(f) {
						if (!f) return;
						const s = f.target.element?.classList.contains(
								"colorpicker-color-decoration",
							),
							l = this.m.getOption(E.EditorOption.colorDecoratorsActivatedOn),
							y = this.h.enabled,
							$ = this.j.activatedByDecoratorClick;
						if (
							(s &&
								((l === "click" && !$) ||
									(l === "hover" && !y && !g) ||
									(l === "clickAndHover" && !y && !$))) ||
							(!s && !y && !$)
						) {
							this.M();
							return;
						}
						this.J(f) || g || this.M();
					}
					J(f) {
						return this.N().showsOrWillShow(f);
					}
					L(f) {
						if (!this.m.hasModel()) return;
						const b = this.q.softDispatch(f, this.m.getDomNode()),
							s =
								b.kind === r.ResultKind.MoreChordsNeeded ||
								(b.kind === r.ResultKind.KbFound &&
									(b.commandId === t.$bCb ||
										b.commandId === t.$lCb ||
										b.commandId === t.$oCb) &&
									this.c?.isVisible);
						f.keyCode === i.KeyCode.Ctrl ||
							f.keyCode === i.KeyCode.Alt ||
							f.keyCode === i.KeyCode.Meta ||
							f.keyCode === i.KeyCode.Shift ||
							s ||
							this.M();
					}
					M() {
						g ||
							(this.j.mouseDown && this.c?.isColorPickerVisible) ||
							d.$RDb.dropDownVisible ||
							((this.j.activatedByDecoratorClick = !1), this.c?.hide());
					}
					N() {
						return (
							this.c ||
								((this.c = this.n.createInstance(h.$vhc, this.m)),
								this.b.add(this.c.onContentsChanged(() => this.a.fire()))),
							this.c
						);
					}
					hideContentHover() {
						this.M();
					}
					showContentHover(f, b, s, l, y = !1) {
						(this.j.activatedByDecoratorClick = y),
							this.N().startShowingAtRange(f, b, s, l);
					}
					O() {
						return this.c?.widget.isResizing || !1;
					}
					focusedHoverPartIndex() {
						return this.N().focusedHoverPartIndex();
					}
					doesHoverAtIndexSupportVerbosityAction(f, b) {
						return this.N().doesHoverAtIndexSupportVerbosityAction(f, b);
					}
					updateHoverVerbosityLevel(f, b, s) {
						this.N().updateHoverVerbosityLevel(f, b, s);
					}
					focus() {
						this.c?.focus();
					}
					focusHoverPartWithIndex(f) {
						this.c?.focusHoverPartWithIndex(f);
					}
					scrollUp() {
						this.c?.scrollUp();
					}
					scrollDown() {
						this.c?.scrollDown();
					}
					scrollLeft() {
						this.c?.scrollLeft();
					}
					scrollRight() {
						this.c?.scrollRight();
					}
					pageUp() {
						this.c?.pageUp();
					}
					pageDown() {
						this.c?.pageDown();
					}
					goToTop() {
						this.c?.goToTop();
					}
					goToBottom() {
						this.c?.goToBottom();
					}
					getWidgetContent() {
						return this.c?.getWidgetContent();
					}
					getAccessibleWidgetContent() {
						return this.c?.getAccessibleWidgetContent();
					}
					getAccessibleWidgetContentAtIndex(f) {
						return this.c?.getAccessibleWidgetContentAtIndex(f);
					}
					get isColorPickerVisible() {
						return this.c?.isColorPickerVisible;
					}
					get isHoverVisible() {
						return this.c?.isVisible;
					}
					dispose() {
						super.dispose(), this.s(), this.b.dispose(), this.c?.dispose();
					}
				};
				(e.$whc = p), (e.$whc = p = n = Ne([j(1, C.$Li), j(2, m.$uZ)], p));
			},
		)
