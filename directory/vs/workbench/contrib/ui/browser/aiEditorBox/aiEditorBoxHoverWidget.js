import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/touch.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/browser/editorBrowser.js';
import '../../../../../editor/common/config/editorOptions.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../composer/browser/constants.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../nls.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/aiEditorBox/aiEditorBoxHoverWidget.js';
define(
			de[3188],
			he([1, 0, 7, 159, 6, 3, 56, 38, 31, 39, 45, 169, 5, 4, 2506]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*touch*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*editorBrowser*/,
 d /*editorOptions*/,
 m /*commands*/,
 r /*keybinding*/,
 u /*reactiveStorageService*/,
 a /*constants*/,
 h /*instantiation*/,
 c /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dAc = e.$aAc = void 0),
					(e.$bAc = g),
					(e.$cAc = p),
					(t = mt(t)),
					(e.$aAc = "aichat.insertselectionintochat");
				var n;
				(function (f) {
					let b;
					(function (l) {
						(l[(l.Hidden = 0)] = "Hidden"), (l[(l.Showing = 1)] = "Showing");
					})((b = f.Type || (f.Type = {}))),
						(f.Hidden = { type: b.Hidden });
					class s {
						constructor(y, $) {
							(this.editorPosition = y),
								(this.widgetPosition = $),
								(this.type = b.Showing);
						}
					}
					f.Showing = s;
				})(n || (n = {}));
				function g(f) {
					const b = p(f) - 80;
					let l = f.getOption(d.EditorOption.fontInfo).spaceWidth;
					return Math.floor(b / l);
				}
				function p(f) {
					let b = f.getLayoutInfo(),
						s = b.width - 50,
						l = b.decorationsWidth + b.verticalScrollbarWidth;
					return s - l;
				}
				let o = class extends E.$1c {
					static {
						this.a = [C.ContentWidgetPositionPreference.ABOVE];
					}
					constructor(b, s, l, y, $) {
						super(),
							(this.q = b),
							(this.r = s),
							(this.s = l),
							(this.t = y),
							(this.u = $),
							(this.g = this.D(new w.$re())),
							(this.onClick = this.g.event),
							(this.h = n.Hidden),
							(this.isWordWrap = !1),
							(this.b = t.$("div.aiEditorBoxCursorHoverWidget")),
							(this.f = t.$fhb(this.b, t.$("div.aiEditorBoxButtonContainer"))),
							(this.c = this.z(
								this.f,
								a.COMPOSER_EDIT_ACTION_ID,
								"Create composer",
							)),
							this.D(
								s.onDidUpdateKeybindings(() => {
									this.w();
								}),
							),
							this.D(i.$Qhb.ignoreTarget(this.b)),
							this.q.addContentWidget(this),
							(this.n = this.D(this.t.createScoped(this))),
							this.n.onChangeEffect({
								deps: [() => this.t.nonPersistentStorage.multiEditState],
								onChange: () => {
									this.hideButtons();
								},
								runNowToo: !0,
							}),
							this.n.onChangeEffect({
								deps: [
									() => this.t.nonPersistentStorage.shouldShowInsertChatWidget,
									() => this.t.nonPersistentStorage.promptBars,
								],
								onChange: () => {
									this._update();
								},
								runNowToo: !0,
							}),
							this.n.onChangeEffect({
								deps: [
									() => this.t.nonPersistentStorage.cppState,
									() => this.t.nonPersistentStorage.cppState?.suggestion,
								],
								onChange: () => {
									this.update();
								},
								runNowToo: !0,
							}),
							this.n.onChangeEffect({
								deps: [
									() =>
										this.t.applicationUserPersistentStorage.composerState
											.isComposerEnabled2,
								],
								onChange: () => {
									this._update();
								},
								runNowToo: !0,
							}),
							this.D(
								this.q.onDidChangeModelContent((v) => {
									const S = this.q.getModel();
									(this.C.type !== n.Type.Showing ||
										!S ||
										this.C.editorPosition.lineNumber >= S.getLineCount()) &&
										this.hide();
								}),
							),
							this.D(
								t.$_fb(this.c, (v) => {
									if (this.C.type !== n.Type.Showing) return;
									v.stopPropagation();
									const S = this.q.getModel();
									if (!S) return;
									const I = this.q.getSelection();
									!I ||
										I.isEmpty() ||
										l.executeCommand(
											a.COMPOSER_EDIT_FROM_SELECTION_ACTION_ID,
											S,
											I,
										);
								}),
							),
							this.D(
								t.$0fb(this.b, "mouseenter", (v) => {
									(v.buttons & 1) === 1 && this.hide();
								}),
							),
							this.D(this.q.onDidBlurEditorText(() => this.hide()));
					}
					w() {
						for (; this.f.firstChild; ) this.f.removeChild(this.f.firstChild);
						(this.c = this.z(
							this.f,
							a.COMPOSER_EDIT_ACTION_ID,
							"Create composer",
						)),
							this._update();
					}
					z(b, s, l) {
						const y = t.$fhb(b, t.$("button.aiEditorBoxHoverButton")),
							$ = t.$fhb(y, t.$("span"));
						$.textContent = l;
						const v = t.$fhb(y, t.$("span.aiEditorBoxCommandHelpText")),
							I = this.r.lookupKeybinding(s)?.getLabel() || "";
						return (v.textContent = I), y;
					}
					_update() {}
					hideButtons() {}
					dispose() {
						super.dispose(), this.q.removeContentWidget(this);
					}
					getId() {
						return "AIEditorBoxHoverWidget";
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return this.h.type === n.Type.Showing
							? this.h.widgetPosition
							: null;
					}
					updateShowingElements() {
						const b = this.q.getModel();
						if (!b) return;
						const s = this.t.nonPersistentStorage.cppState?.suggestion;
						s === void 0 || s?.uri.toString() !== b.uri.toString()
							? (this.f.style.display = "flex")
							: s.suggestionIsCurrentlyHidden
								? (this.f.style.display = "none")
								: (this.f.style.display = "none");
					}
					update() {
						const b = this.q.getOptions(),
							s = this.q.getModel();
						if (!s) return this.hide();
						let l = Number.MAX_VALUE;
						const y = this.q.getSelection();
						if (
							(y === null || y.isEmpty()) &&
							this.t.nonPersistentStorage.cppState?.suggestion?.uri.toString() !==
								s.uri.toString()
						)
							return this.hide();
						if (!this.q.hasTextFocus() && !this.q.hasWidgetFocus())
							return this.hide();
						this.updateShowingElements();
						const $ = this.q.getPosition();
						if (!$) return this.hide();
						const { lineNumber: v } = s.validatePosition($),
							S = y === null ? v : y.endLineNumber;
						let I = Math.max(
								1,
								Math.min(
									s.getLineCount(),
									$.lineNumber < 4 ? S + 3 : $.lineNumber - 2,
								),
							),
							T = $.column;
						const P = 25,
							k =
								y === null
									? $.lineNumber - 1
									: Math.max(
											$.lineNumber - 2,
											Math.floor(y.endLineNumber + y.startLineNumber) / 2 - 1,
										),
							L = this.isWordWrap ? 3 : 2,
							D = Math.max(1, $.lineNumber - L),
							M = Math.min(s.getLineCount() - 1, $.lineNumber + L);
						let N = C.ContentWidgetPositionPreference.BELOW;
						const A = g(this.q) - 10,
							R = (O, B, U, z) => {
								if (U !== O || s.getLineLength(Math.max(1, U)) >= A) return;
								const F = Math.abs(B - 5) + Math.abs(O - k) * P;
								F < l && ((l = F), (I = U), (T = B), (N = z));
							};
						for (let O = D; O <= M; O++) {
							let B = 0,
								U = 0;
							for (let z = O - 2; z <= O; z++) {
								const F = s.getLineLength(Math.max(1, z));
								F > B && ((B = F), (U = z));
							}
							R(O, B, U, C.ContentWidgetPositionPreference.ABOVE),
								(B = 0),
								(U = 0);
							for (let z = O; z <= O + 2; z++) {
								const F = s.getLineLength(Math.min(s.getLineCount(), z));
								F > B && ((B = F), (U = z));
							}
							R(O, B, U, C.ContentWidgetPositionPreference.BELOW),
								(B = 0),
								(U = 0);
							for (let z = O - 1; z <= O + 1; z++) {
								const F = s.getLineLength(
									Math.max(1, Math.min(s.getLineCount(), z)),
								);
								F > B && ((B = F), (U = z));
							}
							R(O, B, U, C.ContentWidgetPositionPreference.EXACT);
						}
						(this.C = new n.Showing($, {
							position: { lineNumber: I, column: T + 2 },
							preference: [N],
						})),
							this.q.layoutContentWidget(this);
					}
					hide() {
						this.C !== n.Hidden &&
							((this.C = n.Hidden), this.q.layoutContentWidget(this));
					}
					get C() {
						return this.h;
					}
					set C(b) {
						(this.h = b), this.F();
					}
					F() {
						if (this.C.type === n.Type.Showing && this.j) {
							this.G = (0, c.localize)(11048, null, this.j);
							return;
						}
						this.m
							? (this.G = (0, c.localize)(11049, null, this.m))
							: (this.G = (0, c.localize)(11050, null));
					}
					set G(b) {
						this.b.title = b;
					}
				};
				(e.$dAc = o),
					(e.$dAc = o =
						Ne([j(1, r.$uZ), j(2, m.$ek), j(3, u.$0zb), j(4, h.$Li)], o));
			},
		)
