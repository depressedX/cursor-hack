import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/touch.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../common/config/editorOptions.js';
import '../../cHintLine/browser/hintLineWidget.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../workbench/services/aiCmdK/browser/cmdKActions.js';
import '../../../../base/common/platform.js';
import '../../../../css!vs/editor/contrib/cHover/browser/hoverWidget.js';
define(
			de[866],
			he([1, 0, 7, 159, 58, 6, 3, 56, 38, 499, 4, 31, 39, 45, 4369, 12, 2288]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*touch*/,
 w /*constants*/,
 E /*event*/,
 C /*lifecycle*/,
 d /*editorBrowser*/,
 m /*editorOptions*/,
 r /*hintLineWidget*/,
 u /*nls*/,
 a /*commands*/,
 h /*keybinding*/,
 c /*reactiveStorageService*/,
 n /*cmdKActions*/,
 g /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pbc = e.$mbc = void 0),
					(e.$nbc = o),
					(e.$obc = f),
					(t = mt(t)),
					(u = mt(u)),
					(e.$mbc = "aichat.insertselectionintochat");
				var p;
				(function (s) {
					let l;
					(function ($) {
						($[($.Hidden = 0)] = "Hidden"), ($[($.Showing = 1)] = "Showing");
					})((l = s.Type || (s.Type = {}))),
						(s.Hidden = { type: l.Hidden });
					class y {
						constructor(v, S) {
							(this.editorPosition = v),
								(this.widgetPosition = S),
								(this.type = l.Showing);
						}
					}
					s.Showing = y;
				})(p || (p = {}));
				function o(s) {
					const l = f(s) - 80;
					let $ = s.getOption(m.EditorOption.fontInfo).spaceWidth;
					return Math.floor(l / $);
				}
				function f(s) {
					let l = s.getLayoutInfo(),
						y = l.width - 50,
						$ = l.decorationsWidth + l.verticalScrollbarWidth;
					return y - $;
				}
				let b = class extends C.$1c {
					constructor(l, y, $, v) {
						super(),
							(this.u = l),
							(this.w = y),
							(this.z = v),
							(this.n = this.D(new E.$re())),
							(this.onClick = this.n.event),
							(this.q = p.Hidden),
							(this.isWordWrap = !1),
							(this.a = t.$("div.cursorHoverWidget")),
							(this.h = t.$fhb(this.a, t.$("div.cursorCppHint"))),
							(this.h.style.display = "none"),
							g.$x === g.Platform.Windows
								? (this.h.textContent = "Hold alt for suggestion")
								: (this.h.textContent = "Hold option \u2325 for suggestion"),
							(this.j = t.$fhb(this.a, t.$("div.cursorCppHint"))),
							(this.j.style.display = "none"),
							(this.j.textContent = "Key up to revert, \u21B5 to accept"),
							(this.m = t.$fhb(this.a, t.$("div.buttonContainer"))),
							(this.c = this._createButton(this.m, w.$dX, "Chat")),
							(this.f = this._createButton(this.m, e.$mbc, "Add to Chat")),
							(this.g = this._createButton(
								this.m,
								r.$t7b,
								"Add to Edit",
								this.w.lookupKeybindings(r.$t7b).at(-1),
							)),
							(this.b = this._createButton(this.m, r.$t7b, "Edit")),
							this.D(
								y.onDidUpdateKeybindings(() => {
									this.setText(this.c, w.$dX, "Chat"),
										this.setText(this.f, e.$mbc, "Add to Chat"),
										this.setText(
											this.g,
											r.$t7b,
											"Add to Edit",
											this.w.lookupKeybindings(r.$t7b).at(-1),
										),
										this.setText(this.b, r.$t7b, "Edit");
								}),
							),
							this.D(i.$Qhb.ignoreTarget(this.a)),
							this.u.addContentWidget(this),
							(this.t = this.D(this.z.createScoped(this))),
							this.t.onChangeEffect({
								deps: [
									() => this.z.nonPersistentStorage.shouldShowInsertChatWidget,
									() => this.z.nonPersistentStorage.promptBars,
								],
								onChange: () => {
									this._update();
								},
								runNowToo: !0,
							}),
							this.t.onChangeEffect({
								deps: [
									() => this.z.nonPersistentStorage.cppState,
									() => this.z.nonPersistentStorage.cppState?.suggestion,
								],
								onChange: () => {
									this.update();
								},
								runNowToo: !0,
							}),
							this.t.onChangeEffect({
								deps: [
									() =>
										this.z.applicationUserPersistentStorage.composerState
											.isComposerEnabled2,
								],
								onChange: () => {
									this._update();
								},
								runNowToo: !0,
							}),
							this.D(
								this.u.onDidChangeModelContent((S) => {
									const I = this.u.getModel();
									(this.C.type !== p.Type.Showing ||
										!I ||
										this.C.editorPosition.lineNumber >= I.getLineCount()) &&
										this.hide();
								}),
							),
							this.D(
								t.$_fb(this.b, (S) => {
									this.C.type === p.Type.Showing &&
										(S.stopPropagation(),
										$.executeCommand(r.$t7b).then(() => {}));
								}),
							),
							this.D(
								t.$_fb(this.c, (S) => {
									this.C.type === p.Type.Showing &&
										(S.stopPropagation(), $.executeCommand(w.$dX, "editor"));
								}),
							),
							this.D(
								t.$_fb(this.f, (S) => {
									this.C.type === p.Type.Showing &&
										(S.stopPropagation(), $.executeCommand(e.$mbc, "editor"));
								}),
							),
							this.D(
								t.$_fb(this.g, (S) => {
									if (
										this.C.type === p.Type.Showing &&
										(S.stopPropagation(),
										v.nonPersistentStorage.promptBars.length > 0)
									) {
										const I = this.z.nonPersistentStorage.promptBars.at(-1);
										I &&
											$.executeCommand(n.$Gec, I.id).then(() => {
												setTimeout(() => {
													$.executeCommand(w.$hW, I.id).then(() => {});
												}, 100);
											});
									}
								}),
							),
							this.D(
								t.$0fb(this.a, "mouseenter", (S) => {
									(S.buttons & 1) === 1 && this.hide();
								}),
							),
							this.D(this.u.onDidBlurEditorText(() => this.hide()));
					}
					_createButton(l, y, $, v) {
						const S = t.$fhb(l, t.$("button.hoverButton")),
							I = t.$fhb(S, t.$("span"));
						I.textContent = $;
						const T = t.$fhb(S, t.$("span.commandHelpText"));
						v = v ?? this.w.lookupKeybinding(y);
						const P = v?.getLabel() || "";
						return (T.textContent = P), S;
					}
					setText(l, y, $, v) {
						const S = l.querySelector("span");
						S && (S.textContent = $);
						const I = l.querySelector("span.commandHelpText");
						v = v ?? this.w.lookupKeybinding(y);
						const T = v?.getLabel() || "";
						I && (I.textContent = T);
					}
					_update() {
						this.z.nonPersistentStorage.shouldShowInsertChatWidget
							? (this.f.classList.remove("cursorHiddenButton"),
								this.c.classList.add("cursorHiddenButton"))
							: (this.f.classList.add("cursorHiddenButton"),
								this.c.classList.remove("cursorHiddenButton")),
							this.z.nonPersistentStorage.promptBars.length === 0
								? (this.g.classList.add("cursorHiddenButton"),
									this.b.classList.remove("cursorHiddenButton"))
								: (this.g.classList.remove("cursorHiddenButton"),
									this.b.classList.add("cursorHiddenButton"));
					}
					dispose() {
						super.dispose(), this.u.removeContentWidget(this);
					}
					getId() {
						return "HoverWidget";
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return this.q.type === p.Type.Showing
							? this.q.widgetPosition
							: null;
					}
					updateShowingElements() {
						const l = this.u.getModel();
						if (!l) return;
						const y = this.z.nonPersistentStorage.cppState?.suggestion;
						y === void 0 || y?.uri.toString() !== l.uri.toString()
							? ((this.h.style.display = "none"),
								(this.m.style.display = "flex"),
								(this.j.style.display = "none"))
							: y.suggestionIsCurrentlyHidden
								? ((this.h.style.display = "none"),
									(this.m.style.display = "none"),
									(this.j.style.display = "none"))
								: ((this.j.style.display = "none"),
									(this.m.style.display = "none"),
									(this.h.style.display = "none"));
					}
					update() {
						const l = this.u.getOptions(),
							y = this.u.getModel();
						if (!y) return this.hide();
						let $ = Number.MAX_VALUE;
						const v = this.u.getSelection();
						if (
							(v === null || v.isEmpty()) &&
							this.z.nonPersistentStorage.cppState?.suggestion?.uri.toString() !==
								y.uri.toString()
						)
							return this.hide();
						if (!this.u.hasTextFocus() && !this.u.hasWidgetFocus())
							return this.hide();
						this.updateShowingElements();
						const S = this.u.getPosition();
						if (!S) return this.hide();
						const { lineNumber: I } = y.validatePosition(S),
							T = v === null ? I : v.endLineNumber;
						let P = Math.max(
								1,
								Math.min(
									y.getLineCount(),
									S.lineNumber < 4 ? T + 3 : S.lineNumber - 2,
								),
							),
							k = S.column;
						const L = 25,
							D =
								v === null
									? S.lineNumber - 1
									: Math.max(
											S.lineNumber - 2,
											Math.floor(v.endLineNumber + v.startLineNumber) / 2 - 1,
										),
							M = this.isWordWrap ? 3 : 2,
							N = Math.max(1, S.lineNumber - M),
							A = Math.min(y.getLineCount() - 1, S.lineNumber + M);
						let R = d.ContentWidgetPositionPreference.ABOVE;
						const O = o(this.u) - 10,
							B = (U, z, F, x) => {
								if (F !== U || y.getLineLength(Math.max(1, F)) >= O) return;
								const H = Math.abs(z - 5) + Math.abs(U - D) * L;
								H < $ && (($ = H), (P = F), (k = z), (R = x));
							};
						for (let U = N; U <= A; U++) {
							let z = 0,
								F = 0;
							for (let x = U - 2; x <= U; x++) {
								const H = y.getLineLength(Math.max(1, x));
								H > z && ((z = H), (F = x));
							}
							B(U, z, F, d.ContentWidgetPositionPreference.ABOVE),
								(z = 0),
								(F = 0);
							for (let x = U; x <= U + 2; x++) {
								const H = y.getLineLength(Math.min(y.getLineCount(), x));
								H > z && ((z = H), (F = x));
							}
							B(U, z, F, d.ContentWidgetPositionPreference.BELOW),
								(z = 0),
								(F = 0);
							for (let x = U - 1; x <= U + 1; x++) {
								const H = y.getLineLength(
									Math.max(1, Math.min(y.getLineCount(), x)),
								);
								H > z && ((z = H), (F = x));
							}
							B(U, z, F, d.ContentWidgetPositionPreference.EXACT);
						}
						(this.C = new p.Showing(S, {
							position: { lineNumber: P, column: k + 2 },
							preference: [R],
						})),
							this.u.layoutContentWidget(this);
					}
					hide() {
						this.C !== p.Hidden &&
							((this.C = p.Hidden), this.u.layoutContentWidget(this));
					}
					get C() {
						return this.q;
					}
					set C(l) {
						(this.q = l), this.F();
					}
					F() {
						if (this.C.type === p.Type.Showing && this.r) {
							this.G = u.localize(877, null, this.r);
							return;
						}
						this.s
							? (this.G = u.localize(878, null, this.s))
							: (this.G = u.localize(879, null));
					}
					set G(l) {
						this.a.title = l;
					}
				};
				(e.$pbc = b),
					(e.$pbc = b = Ne([j(1, h.$uZ), j(2, a.$ek), j(3, c.$0zb)], b));
			},
		),
		