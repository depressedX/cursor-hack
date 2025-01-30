import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../common/model.js';
import './colorHoverParticipant.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../hover/browser/contentHoverStatusBar.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../base/common/event.js';
import '../../../common/config/editorOptions.js';
import '../../../common/services/languageFeatures.js';
import '../../../browser/editorExtensions.js';
import '../../../common/editorContextKeys.js';
import '../../../../platform/contextkey/common/contextkey.js';
import './defaultDocumentColorProvider.js';
import '../../../../base/browser/dom.js';
import '../../../common/services/editorWorker.js';
import '../../../../css!vs/editor/contrib/colorPicker/browser/colorPicker.js';
define(
			de[2910],
			he([
				1, 0, 3, 56, 64, 1218, 5, 1616, 39, 6, 38, 69, 46, 71, 8, 1599, 7, 200,
				1136,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*editorBrowser*/,
 w /*model*/,
 E /*colorHoverParticipant*/,
 C /*instantiation*/,
 d /*contentHoverStatusBar*/,
 m /*keybinding*/,
 r /*event*/,
 u /*editorOptions*/,
 a /*languageFeatures*/,
 h /*editorExtensions*/,
 c /*editorContextKeys*/,
 n /*contextkey*/,
 g /*defaultDocumentColorProvider*/,
 p /*dom*/,
 o /*editorWorker*/) {
				"use strict";
				var f, b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zhc = e.$yhc = void 0),
					(p = mt(p));
				let s = class extends t.$1c {
					static {
						f = this;
					}
					static {
						this.ID = "editor.contrib.standaloneColorPickerController";
					}
					constructor(I, T, P) {
						super(),
							(this.f = I),
							(this.g = P),
							(this.a = null),
							(this.b =
								c.EditorContextKeys.standaloneColorPickerVisible.bindTo(T)),
							(this.c =
								c.EditorContextKeys.standaloneColorPickerFocused.bindTo(T));
					}
					showOrFocus() {
						this.f.hasModel() &&
							(this.b.get()
								? this.c.get() || this.a?.focus()
								: (this.a = this.g.createInstance($, this.f, this.b, this.c)));
					}
					hide() {
						this.c.set(!1), this.b.set(!1), this.a?.hide(), this.f.focus();
					}
					insertColor() {
						this.a?.updateEditor(), this.hide();
					}
					static get(I) {
						return I.getContribution(f.ID);
					}
				};
				(e.$yhc = s),
					(e.$yhc = s = f = Ne([j(1, n.$6j), j(2, C.$Li)], s)),
					(0, h.$qtb)(
						s.ID,
						s,
						h.EditorContributionInstantiation.AfterFirstRender,
					);
				const l = 8,
					y = 22;
				let $ = class extends t.$1c {
					static {
						b = this;
					}
					static {
						this.ID = "editor.contrib.standaloneColorPickerWidget";
					}
					constructor(I, T, P, k, L, D, M) {
						super(),
							(this.j = I),
							(this.m = T),
							(this.n = P),
							(this.q = L),
							(this.r = D),
							(this.s = M),
							(this.allowEditorOverflow = !0),
							(this.a = void 0),
							(this.c = document.createElement("div")),
							(this.f = null),
							(this.g = !1),
							(this.h = this.D(new r.$re())),
							(this.onResult = this.h.event),
							this.m.set(!0),
							(this.b = k.createInstance(E.$aCb, this.j)),
							(this.a = this.j
								._getViewModel()
								?.getPrimaryCursorState().modelState.position);
						const N = this.j.getSelection(),
							A = N
								? {
										startLineNumber: N.startLineNumber,
										startColumn: N.startColumn,
										endLineNumber: N.endLineNumber,
										endColumn: N.endColumn,
									}
								: {
										startLineNumber: 0,
										endLineNumber: 0,
										endColumn: 0,
										startColumn: 0,
									},
							R = this.D(p.$dhb(this.c));
						this.D(
							R.onDidBlur((O) => {
								this.hide();
							}),
						),
							this.D(
								R.onDidFocus((O) => {
									this.focus();
								}),
							),
							this.D(
								this.j.onDidChangeCursorPosition(() => {
									this.g ? (this.g = !1) : this.hide();
								}),
							),
							this.D(
								this.j.onMouseMove((O) => {
									const B = O.target.element?.classList;
									B &&
										B.contains("colorpicker-color-decoration") &&
										this.hide();
								}),
							),
							this.D(
								this.onResult((O) => {
									this.w(O.value, O.foundInEditor);
								}),
							),
							this.t(A),
							(this.c.style.zIndex = "50"),
							this.j.addContentWidget(this);
					}
					updateEditor() {
						this.f && this.b.updateEditorModel(this.f);
					}
					getId() {
						return b.ID;
					}
					getDomNode() {
						return this.c;
					}
					getPosition() {
						if (!this.a) return null;
						const I = this.j.getOption(u.EditorOption.hover).above;
						return {
							position: this.a,
							secondaryPosition: this.a,
							preference: I
								? [
										i.ContentWidgetPositionPreference.ABOVE,
										i.ContentWidgetPositionPreference.BELOW,
									]
								: [
										i.ContentWidgetPositionPreference.BELOW,
										i.ContentWidgetPositionPreference.ABOVE,
									],
							positionAffinity: w.PositionAffinity.None,
						};
					}
					hide() {
						this.dispose(),
							this.m.set(!1),
							this.n.set(!1),
							this.j.removeContentWidget(this),
							this.j.focus();
					}
					focus() {
						this.n.set(!0), this.c.focus();
					}
					async t(I) {
						const T = await this.u(I);
						T && this.h.fire(new v(T.result, T.foundInEditor));
					}
					async u(I) {
						if (!this.j.hasModel()) return null;
						const T = {
								range: I,
								color: { red: 0, green: 0, blue: 0, alpha: 1 },
							},
							P = await this.b.createColorHover(
								T,
								new g.$UBb(this.s),
								this.r.colorProvider,
							);
						return P
							? { result: P.colorHover, foundInEditor: P.foundInEditor }
							: null;
					}
					w(I, T) {
						const P = document.createDocumentFragment(),
							k = this.D(new d.$WDb(this.q)),
							L = {
								fragment: P,
								statusBar: k,
								onContentsChanged: () => {},
								hide: () => this.hide(),
							};
						this.f = I;
						const D = this.b.renderHoverParts(L, [I]);
						if (!D) return;
						this.D(D.disposables);
						const M = D.colorPicker;
						this.c.classList.add("standalone-colorpicker-body"),
							(this.c.style.maxHeight =
								Math.max(this.j.getLayoutInfo().height / 4, 250) + "px"),
							(this.c.style.maxWidth =
								Math.max(this.j.getLayoutInfo().width * 0.66, 500) + "px"),
							(this.c.tabIndex = 0),
							this.c.appendChild(P),
							M.layout();
						const N = M.body,
							A = N.saturationBox.domNode.clientWidth,
							R = N.domNode.clientWidth - A - y - l,
							O = M.body.enterButton;
						O?.onClicked(() => {
							this.updateEditor(), this.hide();
						});
						const B = M.header,
							U = B.pickedColorNode;
						U.style.width = A + l + "px";
						const z = B.originalColorNode;
						(z.style.width = R + "px"),
							M.header.closeButton?.onClicked(() => {
								this.hide();
							}),
							T &&
								(O && (O.button.textContent = "Replace"),
								(this.g = !0),
								this.j.setSelection(I.range)),
							this.j.layoutContentWidget(this);
					}
				};
				(e.$zhc = $),
					(e.$zhc =
						$ =
						b =
							Ne([j(3, C.$Li), j(4, m.$uZ), j(5, a.$k3), j(6, o.$Cxb)], $));
				class v {
					constructor(I, T) {
						(this.value = I), (this.foundInEditor = T);
					}
				}
			},
		),
		