define(
			de[2927],
			he([
				1, 0, 33, 132, 103, 3, 65, 38, 17, 588, 74, 69, 1596, 373, 1673, 1221,
				1609, 121,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wkc = void 0);
				class f {
					constructor(y, $, v, S, I, T) {
						(this.range = y),
							(this.insertText = $),
							(this.filterText = v),
							(this.additionalTextEdits = S),
							(this.command = I),
							(this.completion = T);
					}
				}
				let b = class extends E.$4c {
					constructor(y, $, v, S, I, T) {
						super(I.disposable),
							(this.model = y),
							(this.line = $),
							(this.word = v),
							(this.completionModel = S),
							(this.c = T);
					}
					canBeReused(y, $, v) {
						return (
							this.model === y &&
							this.line === $ &&
							this.word.word.length > 0 &&
							this.word.startColumn === v.startColumn &&
							this.word.endColumn < v.endColumn &&
							this.completionModel.getIncompleteProvider().size === 0
						);
					}
					get items() {
						const y = [],
							{ items: $ } = this.completionModel,
							v = this.c.select(
								this.model,
								{
									lineNumber: this.line,
									column:
										this.word.endColumn +
										this.completionModel.lineContext.characterCountDelta,
								},
								$,
							),
							S = w.Iterable.slice($, v),
							I = w.Iterable.slice($, 0, v);
						let T = 5;
						for (const P of w.Iterable.concat(S, I)) {
							if (P.score === i.FuzzyScore.Default) continue;
							const k = new m.$iL(
									P.editStart.lineNumber,
									P.editStart.column,
									P.editInsertEnd.lineNumber,
									P.editInsertEnd.column +
										this.completionModel.lineContext.characterCountDelta,
								),
								L =
									P.completion.insertTextRules &&
									P.completion.insertTextRules &
										u.CompletionItemInsertTextRule.InsertAsSnippet
										? { snippet: P.completion.insertText }
										: P.completion.insertText;
							y.push(
								new f(
									k,
									L,
									P.filterTextLow ?? P.labelLow,
									P.completion.additionalTextEdits,
									P.completion.command,
									P,
								),
							),
								T-- >= 0 && P.resolve(t.CancellationToken.None);
						}
						return y;
					}
				};
				b = Ne([j(5, n.$uDb)], b);
				let s = class extends E.$1c {
					constructor(y, $, v, S) {
						super(),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							this.B.add(y.inlineCompletionsProvider.register("*", this));
					}
					async provideInlineCompletions(y, $, v, S) {
						if (v.selectedSuggestionInfo) return;
						let I;
						for (const A of this.g.listCodeEditors())
							if (A.getModel() === y) {
								I = A;
								break;
							}
						if (!I) return;
						const T = I.getOption(d.EditorOption.quickSuggestions);
						if (c.$9Cb.isAllOff(T)) return;
						y.tokenization.tokenizeIfCheap($.lineNumber);
						const P = y.tokenization.getLineTokens($.lineNumber),
							k = P.getStandardTokenType(
								P.findTokenIndexAtOffset(Math.max($.column - 1 - 1, 0)),
							);
						if (c.$9Cb.valueFor(T, k) !== "inline") return;
						let L = y.getWordAtPosition($),
							D;
						if (
							(L?.word || (D = this.h(y, $)),
							(!L?.word && !D) ||
								(L || (L = y.getWordUntilPosition($)),
								L.endColumn !== $.column))
						)
							return;
						let M;
						const N = y.getValueInRange(
							new m.$iL($.lineNumber, 1, $.lineNumber, $.column),
						);
						if (!D && this.a?.canBeReused(y, $.lineNumber, L)) {
							const A = new h.$0Cb(N, $.column - this.a.word.endColumn);
							(this.a.completionModel.lineContext = A),
								this.a.acquire(),
								(M = this.a);
						} else {
							const A = await (0, c.$6Cb)(
								this.b.completionProvider,
								y,
								$,
								new c.$2Cb(
									void 0,
									g.$cDb.createSuggestFilter(I).itemKind,
									D?.providers,
								),
								D && {
									triggerKind: u.CompletionTriggerKind.TriggerCharacter,
									triggerCharacter: D.ch,
								},
								S,
							);
							let R;
							A.needsClipboard && (R = await this.c.readText());
							const O = new h.$$Cb(
								A.items,
								$.column,
								new h.$0Cb(N, 0),
								p.$SCb.None,
								I.getOption(d.EditorOption.suggest),
								I.getOption(d.EditorOption.snippetSuggestions),
								{ boostFullMatch: !1, firstMatchCanBeWeak: !1 },
								R,
							);
							M = new b(y, $.lineNumber, L, O, A, this.f);
						}
						return (this.a = M), M;
					}
					handleItemDidShow(y, $) {
						$.completion.resolve(t.CancellationToken.None);
					}
					freeInlineCompletions(y) {
						y.release();
					}
					h(y, $) {
						const v = y.getValueInRange(
								m.$iL.fromPositions(
									{ lineNumber: $.lineNumber, column: $.column - 1 },
									$,
								),
							),
							S = new Set();
						for (const I of this.b.completionProvider.all(y))
							I.triggerCharacters?.includes(v) && S.add(I);
						if (S.size !== 0) return { providers: S, ch: v };
					}
				};
				(e.$wkc = s),
					(e.$wkc = s =
						Ne([j(0, a.$k3), j(1, o.$Vxb), j(2, n.$uDb), j(3, C.$dtb)], s)),
					(0, r.$SBb)(s);
			},
		),
		