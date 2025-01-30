import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/types.js';
import '../../../browser/editorExtensions.js';
import '../../../common/core/position.js';
import '../../../common/editorContextKeys.js';
import '../../../common/languages.js';
import '../../../common/languages/languageConfigurationRegistry.js';
import '../../../common/services/languageFeatures.js';
import '../../suggest/browser/suggest.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/log/common/log.js';
import './snippetSession.js';
define(
			de[254],
			he([1, 0, 27, 3, 28, 46, 48, 71, 74, 152, 69, 373, 4, 8, 43, 34, 1691]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*lifecycle*/,
 w /*types*/,
 E /*editorExtensions*/,
 C /*position*/,
 d /*editorContextKeys*/,
 m /*languages*/,
 r /*languageConfigurationRegistry*/,
 u /*languageFeatures*/,
 a /*suggest*/,
 h /*nls*/,
 c /*contextkey*/,
 n /*keybindingsRegistry*/,
 g /*log*/,
 p /*snippetSession*/) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aDb = void 0);
				const f = {
					overwriteBefore: 0,
					overwriteAfter: 0,
					undoStopBefore: !0,
					undoStopAfter: !0,
					adjustWhitespace: !0,
					clipboardText: void 0,
					overtypingCapturer: void 0,
				};
				let b = class {
					static {
						o = this;
					}
					static {
						this.ID = "snippetController2";
					}
					static get(y) {
						return y.getContribution(o.ID);
					}
					static {
						this.InSnippetMode = new c.$5j(
							"inSnippetMode",
							!1,
							(0, h.localize)(1424, null),
						);
					}
					static {
						this.HasNextTabstop = new c.$5j(
							"hasNextTabstop",
							!1,
							(0, h.localize)(1425, null),
						);
					}
					static {
						this.HasPrevTabstop = new c.$5j(
							"hasPrevTabstop",
							!1,
							(0, h.localize)(1426, null),
						);
					}
					constructor(y, $, v, S, I) {
						(this.k = y),
							(this.l = $),
							(this.m = v),
							(this.n = I),
							(this.f = new i.$Zc()),
							(this.g = -1),
							(this.a = o.InSnippetMode.bindTo(S)),
							(this.b = o.HasNextTabstop.bindTo(S)),
							(this.c = o.HasPrevTabstop.bindTo(S));
					}
					dispose() {
						this.a.reset(),
							this.c.reset(),
							this.b.reset(),
							this.d?.dispose(),
							this.f.dispose();
					}
					apply(y, $) {
						try {
							this.p(y, typeof $ > "u" ? f : { ...f, ...$ });
						} catch (v) {
							this.cancel(),
								this.l.error(v),
								this.l.error("snippet_error"),
								this.l.error("insert_edits=", y),
								this.l.error(
									"existing_template=",
									this.d ? this.d._logInfo() : "<no_session>",
								);
						}
					}
					insert(y, $) {
						try {
							this.p(y, typeof $ > "u" ? f : { ...f, ...$ });
						} catch (v) {
							this.cancel(),
								this.l.error(v),
								this.l.error("snippet_error"),
								this.l.error("insert_template=", y),
								this.l.error(
									"existing_template=",
									this.d ? this.d._logInfo() : "<no_session>",
								);
						}
					}
					p(y, $) {
						if (this.k.hasModel()) {
							if (
								(this.f.clear(),
								$.undoStopBefore && this.k.getModel().pushStackElement(),
								this.d && typeof y != "string" && this.cancel(),
								this.d
									? ((0, w.$vg)(typeof y == "string"), this.d.merge(y, $))
									: ((this.g = this.k.getModel().getAlternativeVersionId()),
										(this.d = new p.$oDb(this.k, y, $, this.n)),
										this.d.insert()),
								$.undoStopAfter && this.k.getModel().pushStackElement(),
								this.d?.hasChoice)
							) {
								const v = {
										_debugDisplayName: "snippetChoiceCompletions",
										provideCompletionItems: (L, D) => {
											if (
												!this.d ||
												L !== this.k.getModel() ||
												!C.$hL.equals(this.k.getPosition(), D)
											)
												return;
											const { activeChoice: M } = this.d;
											if (!M || M.choice.options.length === 0) return;
											const N = L.getValueInRange(M.range),
												A = !!M.choice.options.find((O) => O.value === N),
												R = [];
											for (let O = 0; O < M.choice.options.length; O++) {
												const B = M.choice.options[O];
												R.push({
													kind: m.CompletionItemKind.Value,
													label: B.value,
													insertText: B.value,
													sortText: "a".repeat(O + 1),
													range: M.range,
													filterText: A ? `${N}_${B.value}` : void 0,
													command: {
														id: "jumpToNextSnippetPlaceholder",
														title: (0, h.localize)(1427, null),
													},
												});
											}
											return { suggestions: R };
										},
									},
									S = this.k.getModel();
								let I,
									T = !1;
								const P = () => {
										I?.dispose(), (T = !1);
									},
									k = () => {
										T ||
											((I = this.m.completionProvider.register(
												{
													language: S.getLanguageId(),
													pattern: S.uri.fsPath,
													scheme: S.uri.scheme,
													exclusive: !0,
												},
												v,
											)),
											this.f.add(I),
											(T = !0));
									};
								this.j = { provider: v, enable: k, disable: P };
							}
							this.q(),
								this.f.add(
									this.k.onDidChangeModelContent(
										(v) => v.isFlush && this.cancel(),
									),
								),
								this.f.add(this.k.onDidChangeModel(() => this.cancel())),
								this.f.add(this.k.onDidChangeCursorSelection(() => this.q()));
						}
					}
					q() {
						if (!(!this.d || !this.k.hasModel())) {
							if (this.g === this.k.getModel().getAlternativeVersionId())
								return this.cancel();
							if (!this.d.hasPlaceholder) return this.cancel();
							if (
								this.d.isAtLastPlaceholder ||
								!this.d.isSelectionWithinPlaceholders()
							)
								return this.k.getModel().pushStackElement(), this.cancel();
							this.a.set(!0),
								this.c.set(!this.d.isAtFirstPlaceholder),
								this.b.set(!this.d.isAtLastPlaceholder),
								this.r();
						}
					}
					r() {
						if (!this.d || !this.k.hasModel()) {
							this.h = void 0;
							return;
						}
						const { activeChoice: y } = this.d;
						if (!y || !this.j) {
							this.j?.disable(), (this.h = void 0);
							return;
						}
						this.h !== y.choice &&
							((this.h = y.choice),
							this.j.enable(),
							queueMicrotask(() => {
								(0, a.$8Cb)(this.k, this.j.provider);
							}));
					}
					finish() {
						for (; this.a.get(); ) this.next();
					}
					cancel(y = !1) {
						this.a.reset(),
							this.c.reset(),
							this.b.reset(),
							this.f.clear(),
							(this.h = void 0),
							this.d?.dispose(),
							(this.d = void 0),
							(this.g = -1),
							y && this.k.setSelections([this.k.getSelection()]);
					}
					prev() {
						this.d?.prev(), this.q();
					}
					next() {
						this.d?.next(), this.q();
					}
					isInSnippet() {
						return !!this.a.get();
					}
					getSessionEnclosingRange() {
						if (this.d) return this.d.getEnclosingRange();
					}
				};
				(e.$aDb = b),
					(e.$aDb =
						b =
						o =
							Ne([j(1, g.$ik), j(2, u.$k3), j(3, c.$6j), j(4, r.$aN)], b)),
					(0, E.$qtb)(b.ID, b, E.EditorContributionInstantiation.Lazy);
				const s = E.$htb.bindToContribution(b.get);
				(0, E.$mtb)(
					new s({
						id: "jumpToNextSnippetPlaceholder",
						precondition: c.$Kj.and(b.InSnippetMode, b.HasNextTabstop),
						handler: (l) => l.next(),
						kbOpts: {
							weight: n.KeybindingWeight.EditorContrib + 30,
							kbExpr: d.EditorContextKeys.textInputFocus,
							primary: t.KeyCode.Tab,
						},
					}),
				),
					(0, E.$mtb)(
						new s({
							id: "jumpToPrevSnippetPlaceholder",
							precondition: c.$Kj.and(b.InSnippetMode, b.HasPrevTabstop),
							handler: (l) => l.prev(),
							kbOpts: {
								weight: n.KeybindingWeight.EditorContrib + 30,
								kbExpr: d.EditorContextKeys.textInputFocus,
								primary: t.KeyMod.Shift | t.KeyCode.Tab,
							},
						}),
					),
					(0, E.$mtb)(
						new s({
							id: "leaveSnippet",
							precondition: b.InSnippetMode,
							handler: (l) => l.cancel(!0),
							kbOpts: {
								weight: n.KeybindingWeight.EditorContrib + 30,
								kbExpr: d.EditorContextKeys.textInputFocus,
								primary: t.KeyCode.Escape,
								secondary: [t.KeyMod.Shift | t.KeyCode.Escape],
							},
						}),
					),
					(0, E.$mtb)(
						new s({
							id: "acceptSnippet",
							precondition: b.InSnippetMode,
							handler: (l) => l.finish(),
						}),
					);
			},
		),
		