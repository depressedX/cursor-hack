import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import './snippets.js';
import './snippetsService.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/contrib/snippet/browser/snippetController2.js';
import '../../../../editor/contrib/suggest/browser/suggest.js';
import '../../../../editor/common/editorContextKeys.js';
import './snippetCompletionProvider.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../editor/contrib/editorState/browser/editorState.js';
import '../../../../editor/common/services/languageFeatures.js';
define(
			de[714],
			he([
				1, 0, 27, 8, 43, 510, 1898, 17, 46, 254, 373, 71, 1752, 38, 121, 439,
				69,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*contextkey*/,
 w /*keybindingsRegistry*/,
 E /*snippets*/,
 C /*snippetsService*/,
 d /*range*/,
 m /*editorExtensions*/,
 r /*snippetController2*/,
 u /*suggest*/,
 a /*editorContextKeys*/,
 h /*snippetCompletionProvider*/,
 c /*editorOptions*/,
 n /*clipboardService*/,
 g /*editorState*/,
 p /*languageFeatures*/) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wYb = void 0);
				let f = class {
					static {
						o = this;
					}
					static {
						this.ID = "editor.tabCompletionController";
					}
					static {
						this.ContextKey = new i.$5j("hasSnippetCompletions", void 0);
					}
					static get(l) {
						return l.getContribution(o.ID);
					}
					constructor(l, y, $, v, S) {
						(this.h = l),
							(this.i = y),
							(this.j = $),
							(this.k = v),
							(this.f = []),
							(this.a = o.ContextKey.bindTo(S)),
							(this.b = this.h.onDidChangeConfiguration((I) => {
								I.hasChanged(c.EditorOption.tabCompletion) && this.l();
							})),
							this.l();
					}
					dispose() {
						this.b.dispose(), this.d?.dispose();
					}
					l() {
						const l =
							this.h.getOption(c.EditorOption.tabCompletion) === "onlySnippets";
						this.c !== l &&
							((this.c = l),
							this.c
								? ((this.d = this.h.onDidChangeCursorSelection((y) =>
										this.m(),
									)),
									this.h.getModel() && this.m())
								: this.d?.dispose());
					}
					m() {
						if (((this.f = []), this.g?.dispose(), !this.h.hasModel())) return;
						const l = this.h.getSelection(),
							y = this.h.getModel();
						y.tokenization.tokenizeIfCheap(l.positionLineNumber);
						const $ = y.getLanguageIdAtPosition(
								l.positionLineNumber,
								l.positionColumn,
							),
							v = this.i.getSnippetsSync($);
						if (!v) {
							this.a.set(!1);
							return;
						}
						if (d.$iL.isEmpty(l)) {
							const I = (0, C.$vYb)(y, l.getPosition());
							if (I) for (const T of v) I.endsWith(T.prefix) && this.f.push(T);
						} else if (
							!d.$iL.spansMultipleLines(l) &&
							y.getValueLengthInRange(l) <= 100
						) {
							const I = y.getValueInRange(l);
							if (I) for (const T of v) I === T.prefix && this.f.push(T);
						}
						const S = this.f.length;
						if (S === 0) this.a.set(!1);
						else if (S === 1) this.a.set(!0);
						else {
							this.a.set(!0),
								(this.g = {
									_debugDisplayName: "tabCompletion",
									dispose: () => {
										I.dispose();
									},
									provideCompletionItems: (T, P) =>
										T !== y || !l.containsPosition(P)
											? void 0
											: {
													suggestions: this.f.map((L) => {
														const D = d.$iL.fromPositions(
															P.delta(0, -L.prefix.length),
															P,
														);
														return new h.$sYb(L, D);
													}),
												},
								});
							const I = this.k.completionProvider.register(
								{
									language: y.getLanguageId(),
									pattern: y.uri.fsPath,
									scheme: y.uri.scheme,
								},
								this.g,
							);
						}
					}
					async performSnippetCompletions() {
						if (this.h.hasModel())
							if (this.f.length === 1) {
								const [l] = this.f;
								let y;
								if (l.needsClipboard) {
									const $ = new g.$Mzb(
										this.h,
										g.CodeEditorStateFlag.Value |
											g.CodeEditorStateFlag.Position,
									);
									if (((y = await this.j.readText()), !$.validate(this.h)))
										return;
								}
								r.$aDb
									.get(this.h)
									?.insert(l.codeSnippet, {
										overwriteBefore: l.prefix.length,
										overwriteAfter: 0,
										clipboardText: y,
									});
							} else this.f.length > 1 && this.g && (0, u.$8Cb)(this.h, this.g);
					}
				};
				(e.$wYb = f),
					(e.$wYb =
						f =
						o =
							Ne([j(1, E.$gYb), j(2, n.$Vxb), j(3, p.$k3), j(4, i.$6j)], f)),
					(0, m.$qtb)(f.ID, f, m.EditorContributionInstantiation.Eager);
				const b = m.$htb.bindToContribution(f.get);
				(0, m.$mtb)(
					new b({
						id: "insertSnippet",
						precondition: f.ContextKey,
						handler: (s) => s.performSnippetCompletions(),
						kbOpts: {
							weight: w.KeybindingWeight.EditorContrib,
							kbExpr: i.$Kj.and(
								a.EditorContextKeys.editorTextFocus,
								a.EditorContextKeys.tabDoesNotMoveFocus,
								r.$aDb.InSnippetMode.toNegated(),
							),
							primary: t.KeyCode.Tab,
						},
					}),
				);
			},
		)
