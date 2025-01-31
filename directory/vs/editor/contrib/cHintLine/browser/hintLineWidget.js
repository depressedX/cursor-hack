import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/touch.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../common/editorContextKeys.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../css!vs/editor/contrib/cHintLine/browser/hintLineWidget.js';
define(
			de[499],
			he([1, 0, 7, 159, 58, 6, 3, 56, 71, 8, 39, 30, 51, 35, 10, 2287]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*touch*/,
 w /*constants*/,
 E /*event*/,
 C /*lifecycle*/,
 d /*editorBrowser*/,
 m /*editorContextKeys*/,
 r /*contextkey*/,
 u /*keybinding*/,
 a /*platform*/,
 h /*colorRegistry*/,
 c /*themeService*/,
 n /*configuration*/) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$w7b = e.$v7b = e.$u7b = e.$t7b = void 0),
					(t = mt(t)),
					(e.$t7b = "aipopup.action.modal.generate"),
					(e.$u7b = "aipopup.action.submit.modal.edit"),
					(e.$v7b = "aipopup.action.modal.gpt4edit");
				let p = a.$Io.as(h.$uP.ColorContribution),
					o = a.$Io.as(c.$nP.ThemingContribution);
				const f = "editor.lineHighlightBackground",
					b = "editor.lineHighlightBorder";
				var s;
				(function (y) {
					let $;
					(function (S) {
						(S[(S.Hidden = 0)] = "Hidden"), (S[(S.Showing = 1)] = "Showing");
					})(($ = y.Type || (y.Type = {}))),
						(y.Hidden = { type: $.Hidden });
					class v {
						constructor(I, T) {
							(this.editorPosition = I),
								(this.widgetPosition = T),
								(this.type = $.Showing);
						}
					}
					y.Showing = v;
				})(s || (s = {}));
				let l = class extends C.$1c {
					static {
						g = this;
					}
					static {
						this.a = [d.ContentWidgetPositionPreference.EXACT];
					}
					constructor($, v, S, I, T) {
						super(),
							(this.g = $),
							(this.h = v),
							(this.j = I),
							(this.m = T),
							(this.c = this.D(new E.$re())),
							(this.onClick = this.c.event),
							(this.f = s.Hidden);
						const P = S.getColorTheme().getColor(f),
							k = S.getColorTheme().getColor(h.$8P);
						this.b = t.$("div.cursorHintLineWidgetBackground");
						const L = t.$("div.cursorHintLineWidget"),
							D = (N) => {
								N &&
									((this.b.style.backgroundColor = N.toString()),
									(this.b.style.zIndex = "4"),
									(this.b.style.width = "5000px"),
									(this.b.style.marginLeft = "2px"),
									(this.b.style.whiteSpace = "nowrap"));
							};
						this.D(
							S.onDidColorThemeChange((N) => {
								const A = this.b.children;
								if (A.length > 0) {
									const O = A[0],
										B = N.getColor(f);
									B
										? (O.style.backgroundColor = B.toString())
										: (O.style.backgroundColor = "");
								}
								const R = N.getColor(h.$8P);
								D(R);
							}),
						),
							D(k),
							(L.style.paddingLeft = "12px"),
							P && (L.style.backgroundColor = P.toString());
						const M = t.$("div.cursorHintLineWidgetText");
						this.n(M),
							t.$fhb(L, M),
							t.$fhb(this.b, L),
							this.D(
								I.onDidChangeContext((N) => {
									if (
										N.affectsSome(
											new Set([m.EditorContextKeys.hasDisplayedDiff.key]),
										)
									) {
										const A = I.getContextKeyValue(
												m.EditorContextKeys.hasDisplayedDiff.key,
											),
											R = I.getContextKeyValue(
												m.EditorContextKeys.editorHasPromptBar.key,
											);
										A || R
											? ((this.b.style.display = "none"),
												(this.b.style.opacity = "0"))
											: ((this.b.style.display = "block"),
												(this.b.style.opacity = "1"));
									}
								}),
							),
							this.D(
								v.onDidUpdateKeybindings(() => {
									this.n(M);
								}),
							),
							this.D(i.$Qhb.ignoreTarget(this.b)),
							this.g.addContentWidget(this),
							this.D(
								this.g.onDidChangeModelContent((N) => {
									const A = this.g.getModel();
									(this.q.type !== s.Type.Showing ||
										!A ||
										this.q.editorPosition.lineNumber >= A.getLineCount()) &&
										this.hide();
								}),
							),
							this.s(),
							this.D(
								this.m.onDidChangeConfiguration((N) => {
									N.affectsConfiguration("editor.fontSize") &&
										setTimeout(() => {
											this.s();
										}, 0);
								}),
							);
					}
					n($, v = !0) {
						const S = this.h.lookupKeybinding(w.$dX),
							I = S ? S.getLabel() + " to chat" : "No shortcut for chat";
						let T;
						if (v) {
							const P = this.h.lookupKeybindings(e.$t7b).at(-1);
							T = P ? P.getLabel() + " to toggle" : "No shortcut for toggle";
						} else {
							const P = this.h.lookupKeybinding(e.$t7b);
							T = P
								? P.getLabel() + " to generate"
								: "No shortcut for generate";
						}
						$.textContent = I + ", " + T;
					}
					updateCmdKShortcut($) {
						const v = this.b.querySelector("div.cursorHintLineWidgetText");
						v && this.n(v, $);
					}
					dispose() {
						super.dispose(), this.g.removeContentWidget(this);
					}
					getId() {
						return "HintLineWidget";
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return this.q === s.Hidden
							? null
							: this.f.type === s.Type.Showing
								? this.f.widgetPosition
								: null;
					}
					update($) {
						if (!this.g.hasTextFocus()) return this.hide();
						const v = this.g.getModel();
						if (!v) return this.hide();
						if (v.getLineCount() === 1 && v.getValue() === "")
							return this.hide();
						(this.q = new s.Showing($, {
							position: { lineNumber: $.lineNumber, column: $.column },
							preference: g.a,
						})),
							this.g.layoutContentWidget(this);
					}
					hide() {
						this.q !== s.Hidden &&
							((this.q = s.Hidden), this.g.layoutContentWidget(this));
					}
					get q() {
						return this.f;
					}
					set q($) {
						this.f = $;
					}
					set r($) {
						this.b.title = $;
					}
					s() {
						const $ = this.m.getValue("editor.fontSize"),
							v = $ * 1.5;
						(this.b.style.fontSize = `${$}px`),
							(this.b.style.lineHeight = `${v}px`);
						const S = this.b.querySelector(".cursorHintLineWidget");
						S &&
							((S.style.fontSize = `${$}px`), (S.style.lineHeight = `${v}px`));
						const I = this.b.querySelector(".cursorHintLineWidgetText");
						I &&
							((I.style.fontSize = `${$}px`), (I.style.lineHeight = `${v}px`));
					}
				};
				(e.$w7b = l),
					(e.$w7b =
						l =
						g =
							Ne([j(1, u.$uZ), j(2, c.$iP), j(3, r.$6j), j(4, n.$gj)], l));
			},
		)
