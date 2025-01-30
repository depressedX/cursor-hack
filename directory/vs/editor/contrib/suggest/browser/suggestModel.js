import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../common/config/editorOptions.js';
import '../../../common/cursorEvents.js';
import '../../../common/core/selection.js';
import '../../../common/languages.js';
import '../../../common/services/editorWorker.js';
import './wordDistance.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/telemetry/common/telemetry.js';
import './completionModel.js';
import './suggest.js';
import '../../../common/services/languageFeatures.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/types.js';
import '../../inlineCompletions/browser/controller/inlineCompletionContextKeys.js';
import '../../snippet/browser/snippetController2.js';
import '../../../../platform/environment/common/environment.js';
define(
			de[1221],
			he([
				1, 0, 15, 33, 29, 6, 3, 37, 38, 248, 104, 74, 200, 1609, 121, 10, 8, 34,
				32, 1596, 373, 69, 132, 28, 765, 254, 113,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*async*/,
				i /*cancellation*/,
				w /*errors*/,
				E /*event*/,
				C /*lifecycle*/,
				d /*strings*/,
				m /*editorOptions*/,
				r /*cursorEvents*/,
				u /*selection*/,
				a /*languages*/,
				h /*editorWorker*/,
				c /*wordDistance*/,
				n /*clipboardService*/,
				g /*configuration*/,
				p /*contextkey*/,
				o /*log*/,
				f /*telemetry*/,
				b /*completionModel*/,
				s /*suggest*/,
				l /*languageFeatures*/,
				y /*filters*/,
				$ /*types*/,
				v /*inlineCompletionContextKeys*/,
				S /*snippetController2*/,
				I /*environment*/,
) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cDb = e.State = e.$bDb = void 0);
				class P {
					static shouldAutoTrigger(A) {
						if (!A.hasModel()) return !1;
						const R = A.getModel(),
							O = A.getPosition();
						R.tokenization.tokenizeIfCheap(O.lineNumber);
						const B = R.getWordAtPosition(O);
						return !(
							!B ||
							(B.endColumn !== O.column && B.startColumn + 1 !== O.column) ||
							!isNaN(Number(B.word))
						);
					}
					constructor(A, R, O) {
						(this.leadingLineContent = A.getLineContent(R.lineNumber).substr(
							0,
							R.column - 1,
						)),
							(this.leadingWord = A.getWordUntilPosition(R)),
							(this.lineNumber = R.lineNumber),
							(this.column = R.column),
							(this.triggerOptions = O);
					}
				}
				e.$bDb = P;
				var k;
				(function (N) {
					(N[(N.Idle = 0)] = "Idle"),
						(N[(N.Manual = 1)] = "Manual"),
						(N[(N.Auto = 2)] = "Auto");
				})(k || (e.State = k = {}));
				function L(N, A, R) {
					if (!A.getContextKeyValue(v.$_Cb.inlineSuggestionVisible.key))
						return !0;
					const O = A.getContextKeyValue(v.$_Cb.suppressSuggestions.key);
					return O !== void 0
						? !O
						: !N.getOption(m.EditorOption.inlineSuggest).suppressSuggestions;
				}
				function D(N, A, R) {
					if (!A.getContextKeyValue("inlineSuggestionVisible")) return !0;
					const O = A.getContextKeyValue(v.$_Cb.suppressSuggestions.key);
					return O !== void 0
						? !O
						: !N.getOption(m.EditorOption.inlineSuggest).suppressSuggestions;
				}
				let M = (T = class {
					constructor(A, R, O, B, U, z, F, x, H) {
						(this.n = A),
							(this.o = R),
							(this.p = O),
							(this.q = B),
							(this.r = U),
							(this.s = z),
							(this.t = F),
							(this.u = x),
							(this.v = H),
							(this.a = new C.$Zc()),
							(this.b = new C.$Zc()),
							(this.c = new t.$Wh()),
							(this.d = void 0),
							(this.j = new C.$Zc()),
							(this.k = new E.$re()),
							(this.l = new E.$re()),
							(this.m = new E.$re()),
							(this.onDidCancel = this.k.event),
							(this.onDidTrigger = this.l.event),
							(this.onDidSuggest = this.m.event),
							(this.C = 0),
							(this.h = this.n.getSelection() || new u.$kL(1, 1, 1, 1)),
							this.a.add(
								this.n.onDidChangeModel(() => {
									this.w(), this.cancel();
								}),
							),
							this.a.add(
								this.n.onDidChangeModelLanguage(() => {
									this.w(), this.cancel();
								}),
							),
							this.a.add(
								this.n.onDidChangeConfiguration(() => {
									this.w();
								}),
							),
							this.a.add(
								this.u.completionProvider.onDidChange(() => {
									this.w(), this.x();
								}),
							);
						let q = !1;
						this.a.add(
							this.n.onDidCompositionStart(() => {
								q = !0;
							}),
						),
							this.a.add(
								this.n.onDidCompositionEnd(() => {
									(q = !1), this.z();
								}),
							),
							this.a.add(
								this.n.onDidChangeCursorSelection((V) => {
									q || this.y(V);
								}),
							),
							this.a.add(
								this.n.onDidChangeModelContent(() => {
									!q && this.d !== void 0 && this.B();
								}),
							),
							this.w();
					}
					dispose() {
						(0, C.$Vc)(this.b),
							(0, C.$Vc)([this.k, this.m, this.l, this.c]),
							this.a.dispose(),
							this.j.dispose(),
							this.cancel();
					}
					w() {
						if (
							(this.b.clear(),
							this.n.getOption(m.EditorOption.readOnly) ||
								!this.n.hasModel() ||
								!this.n.getOption(m.EditorOption.suggestOnTriggerCharacters))
						)
							return;
						const A = new Map();
						for (const O of this.u.completionProvider.all(this.n.getModel()))
							for (const B of O.triggerCharacters || []) {
								let U = A.get(B);
								if (!U) {
									U = new Set();
									const z = (0, s.$3Cb)();
									z && U.add(z), A.set(B, U);
								}
								U.add(O);
							}
						const R = (O) => {
							if (!D(this.n, this.s, this.t) || P.shouldAutoTrigger(this.n))
								return;
							if (!O) {
								const z = this.n.getPosition();
								O = this.n
									.getModel()
									.getLineContent(z.lineNumber)
									.substr(0, z.column - 1);
							}
							let B = "";
							(0, d.$Rf)(O.charCodeAt(O.length - 1))
								? (0, d.$Qf)(O.charCodeAt(O.length - 2)) &&
									(B = O.substr(O.length - 2))
								: (B = O.charAt(O.length - 1));
							const U = A.get(B);
							if (U) {
								const z = new Map();
								if (this.i)
									for (const [F, x] of this.i.getItemsByProvider())
										U.has(F) || z.set(F, x);
								this.trigger({
									auto: !0,
									triggerKind: a.CompletionTriggerKind.TriggerCharacter,
									triggerCharacter: B,
									retrigger: !!this.i,
									clipboardText: this.i?.clipboardText,
									completionOptions: {
										providerFilter: U,
										providerItemsToReuse: z,
									},
								});
							}
						};
						this.b.add(this.n.onDidType(R)),
							this.b.add(this.n.onDidCompositionEnd(() => R()));
					}
					get state() {
						return this.d ? (this.d.auto ? k.Auto : k.Manual) : k.Idle;
					}
					cancel(A = !1) {
						this.d !== void 0 &&
							(this.c.cancel(),
							this.f?.cancel(),
							(this.f = void 0),
							(this.d = void 0),
							(this.i = void 0),
							(this.g = void 0),
							this.k.fire({ retrigger: A }));
					}
					clear() {
						this.j.clear();
					}
					x() {
						this.d !== void 0 &&
							(!this.n.hasModel() ||
							!this.u.completionProvider.has(this.n.getModel())
								? this.cancel()
								: this.trigger({ auto: this.d.auto, retrigger: !0 }));
					}
					y(A) {
						if (!this.n.hasModel()) return;
						const R = this.h;
						if (
							((this.h = this.n.getSelection()),
							!A.selection.isEmpty() ||
								(A.reason !== r.CursorChangeReason.NotSet &&
									A.reason !== r.CursorChangeReason.Explicit) ||
								(A.source !== "keyboard" && A.source !== "deleteLeft"))
						) {
							this.cancel();
							return;
						}
						this.d === void 0 && A.reason === r.CursorChangeReason.NotSet
							? (R.containsRange(this.h) ||
									R.getEndPosition().isBeforeOrEqual(this.h.getPosition())) &&
								this.A()
							: this.d !== void 0 &&
								A.reason === r.CursorChangeReason.Explicit &&
								this.B();
					}
					z() {
						this.d === void 0 ? this.A() : this.B();
					}
					A() {
						s.$9Cb.isAllOff(
							this.n.getOption(m.EditorOption.quickSuggestions),
						) ||
							(this.n.getOption(m.EditorOption.suggest)
								.snippetsPreventQuickSuggestions &&
								S.$aDb.get(this.n)?.isInSnippet()) ||
							(this.cancel(),
							this.c.cancelAndSet(() => {
								if (
									this.d !== void 0 ||
									!P.shouldAutoTrigger(this.n) ||
									!this.n.hasModel() ||
									!this.n.hasWidgetFocus()
								)
									return;
								const A = this.n.getModel(),
									R = this.n.getPosition(),
									O = this.n.getOption(m.EditorOption.quickSuggestions);
								if (!s.$9Cb.isAllOff(O)) {
									if (!s.$9Cb.isAllOn(O)) {
										A.tokenization.tokenizeIfCheap(R.lineNumber);
										const B = A.tokenization.getLineTokens(R.lineNumber),
											U = B.getStandardTokenType(
												B.findTokenIndexAtOffset(Math.max(R.column - 1 - 1, 0)),
											);
										if (s.$9Cb.valueFor(O, U) !== "on") return;
									}
									L(this.n, this.s, this.t) &&
										this.u.completionProvider.has(A) &&
										this.trigger({ auto: !0 });
								}
							}, this.n.getOption(m.EditorOption.quickSuggestionsDelay)));
					}
					B() {
						(0, $.$vg)(this.n.hasModel()), (0, $.$vg)(this.d !== void 0);
						const A = this.n.getModel(),
							R = this.n.getPosition(),
							O = new P(A, R, { ...this.d, refilter: !0 });
						this.E(O);
					}
					trigger(A) {
						if (!this.n.hasModel()) return;
						const R = this.n.getModel(),
							O = new P(R, this.n.getPosition(), A);
						this.cancel(A.retrigger),
							(this.d = A),
							this.l.fire({
								auto: A.auto,
								shy: A.shy ?? !1,
								position: this.n.getPosition(),
							}),
							(this.g = O);
						let B = {
							triggerKind: A.triggerKind ?? a.CompletionTriggerKind.Invoke,
						};
						A.triggerCharacter &&
							(B = {
								triggerKind: a.CompletionTriggerKind.TriggerCharacter,
								triggerCharacter: A.triggerCharacter,
							}),
							(this.f = new i.$Ce());
						const U = this.n.getOption(m.EditorOption.snippetSuggestions);
						let z = s.SnippetSortOrder.Inline;
						switch (U) {
							case "top":
								z = s.SnippetSortOrder.Top;
								break;
							case "bottom":
								z = s.SnippetSortOrder.Bottom;
								break;
						}
						const { itemKind: F, showDeprecated: x } = T.createSuggestFilter(
								this.n,
							),
							H = new s.$2Cb(
								z,
								A.completionOptions?.kindFilter ?? F,
								A.completionOptions?.providerFilter,
								A.completionOptions?.providerItemsToReuse,
								x,
							),
							q = c.$SCb.create(this.o, this.n),
							V = (0, s.$6Cb)(
								this.u.completionProvider,
								R,
								this.n.getPosition(),
								H,
								B,
								this.f.token,
							);
						Promise.all([V, q])
							.then(async ([G, K]) => {
								if ((this.f?.dispose(), !this.n.hasModel())) return;
								let J = A?.clipboardText;
								if (
									(!J && G.needsClipboard && (J = await this.p.readText()),
									this.d === void 0)
								)
									return;
								const W = this.n.getModel(),
									X = new P(W, this.n.getPosition(), A),
									Y = {
										...y.$5k.default,
										firstMatchCanBeWeak: !this.n.getOption(
											m.EditorOption.suggest,
										).matchOnWordStartOnly,
									};
								if (
									((this.i = new b.$$Cb(
										G.items,
										this.g.column,
										{
											leadingLineContent: X.leadingLineContent,
											characterCountDelta: X.column - this.g.column,
										},
										K,
										this.n.getOption(m.EditorOption.suggest),
										this.n.getOption(m.EditorOption.snippetSuggestions),
										Y,
										J,
									)),
									this.j.add(G.disposable),
									this.E(X),
									this.D(G.durations),
									!this.v.isBuilt || this.v.isExtensionDevelopment)
								)
									for (const ie of G.items)
										ie.isInvalid &&
											this.r.warn(
												`[suggest] did IGNORE invalid completion item from ${ie.provider._debugDisplayName}`,
												ie.completion,
											);
							})
							.catch(w.$4);
					}
					D(A) {
						this.C++ % 230 === 0 &&
							setTimeout(() => {
								this.q.publicLog2("suggest.durations.json", {
									data: JSON.stringify(A),
								}),
									this.r.debug("suggest.durations.json", A);
							});
					}
					static createSuggestFilter(A) {
						const R = new Set();
						A.getOption(m.EditorOption.snippetSuggestions) === "none" &&
							R.add(a.CompletionItemKind.Snippet);
						const B = A.getOption(m.EditorOption.suggest);
						return (
							B.showMethods || R.add(a.CompletionItemKind.Method),
							B.showFunctions || R.add(a.CompletionItemKind.Function),
							B.showConstructors || R.add(a.CompletionItemKind.Constructor),
							B.showFields || R.add(a.CompletionItemKind.Field),
							B.showVariables || R.add(a.CompletionItemKind.Variable),
							B.showClasses || R.add(a.CompletionItemKind.Class),
							B.showStructs || R.add(a.CompletionItemKind.Struct),
							B.showInterfaces || R.add(a.CompletionItemKind.Interface),
							B.showModules || R.add(a.CompletionItemKind.Module),
							B.showProperties || R.add(a.CompletionItemKind.Property),
							B.showEvents || R.add(a.CompletionItemKind.Event),
							B.showOperators || R.add(a.CompletionItemKind.Operator),
							B.showUnits || R.add(a.CompletionItemKind.Unit),
							B.showValues || R.add(a.CompletionItemKind.Value),
							B.showConstants || R.add(a.CompletionItemKind.Constant),
							B.showEnums || R.add(a.CompletionItemKind.Enum),
							B.showEnumMembers || R.add(a.CompletionItemKind.EnumMember),
							B.showKeywords || R.add(a.CompletionItemKind.Keyword),
							B.showWords || R.add(a.CompletionItemKind.Text),
							B.showColors || R.add(a.CompletionItemKind.Color),
							B.showFiles || R.add(a.CompletionItemKind.File),
							B.showReferences || R.add(a.CompletionItemKind.Reference),
							B.showColors || R.add(a.CompletionItemKind.Customcolor),
							B.showFolders || R.add(a.CompletionItemKind.Folder),
							B.showTypeParameters || R.add(a.CompletionItemKind.TypeParameter),
							B.showSnippets || R.add(a.CompletionItemKind.Snippet),
							B.showUsers || R.add(a.CompletionItemKind.User),
							B.showIssues || R.add(a.CompletionItemKind.Issue),
							{ itemKind: R, showDeprecated: B.showDeprecated }
						);
					}
					E(A) {
						if (this.g) {
							if (A.lineNumber !== this.g.lineNumber) {
								this.cancel();
								return;
							}
							if (
								(0, d.$Cf)(A.leadingLineContent) !==
								(0, d.$Cf)(this.g.leadingLineContent)
							) {
								this.cancel();
								return;
							}
							if (A.column < this.g.column) {
								A.leadingWord.word
									? this.trigger({
											auto: this.g.triggerOptions.auto,
											retrigger: !0,
										})
									: this.cancel();
								return;
							}
							if (this.i) {
								if (
									A.leadingWord.word.length !== 0 &&
									A.leadingWord.startColumn > this.g.leadingWord.startColumn
								) {
									if (P.shouldAutoTrigger(this.n) && this.g) {
										const O = this.i.getItemsByProvider();
										this.trigger({
											auto: this.g.triggerOptions.auto,
											retrigger: !0,
											clipboardText: this.i.clipboardText,
											completionOptions: { providerItemsToReuse: O },
										});
									}
									return;
								}
								if (
									A.column > this.g.column &&
									this.i.getIncompleteProvider().size > 0 &&
									A.leadingWord.word.length !== 0
								) {
									const R = new Map(),
										O = new Set();
									for (const [B, U] of this.i.getItemsByProvider())
										U.length > 0 && U[0].container.incomplete
											? O.add(B)
											: R.set(B, U);
									this.trigger({
										auto: this.g.triggerOptions.auto,
										triggerKind:
											a.CompletionTriggerKind.TriggerForIncompleteCompletions,
										retrigger: !0,
										clipboardText: this.i.clipboardText,
										completionOptions: {
											providerFilter: O,
											providerItemsToReuse: R,
										},
									});
								} else {
									const R = this.i.lineContext;
									let O = !1;
									if (
										((this.i.lineContext = {
											leadingLineContent: A.leadingLineContent,
											characterCountDelta: A.column - this.g.column,
										}),
										this.i.items.length === 0)
									) {
										const B = P.shouldAutoTrigger(this.n);
										if (!this.g) {
											this.cancel();
											return;
										}
										if (
											B &&
											this.g.leadingWord.endColumn < A.leadingWord.startColumn
										) {
											this.trigger({
												auto: this.g.triggerOptions.auto,
												retrigger: !0,
											});
											return;
										}
										if (this.g.triggerOptions.auto) {
											this.cancel();
											return;
										} else if (
											((this.i.lineContext = R),
											(O = this.i.items.length > 0),
											O && A.leadingWord.word.length === 0)
										) {
											this.cancel();
											return;
										}
									}
									this.m.fire({
										completionModel: this.i,
										triggerOptions: A.triggerOptions,
										isFrozen: O,
									});
								}
							}
						}
					}
				});
				(e.$cDb = M),
					(e.$cDb =
						M =
						T =
							Ne(
								[
									j(1, h.$Cxb),
									j(2, n.$Vxb),
									j(3, f.$km),
									j(4, o.$ik),
									j(5, p.$6j),
									j(6, g.$gj),
									j(7, l.$k3),
									j(8, I.$Ti),
								],
								M,
							));
			},
		),
		