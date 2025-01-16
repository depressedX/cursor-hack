define(
			de[1752],
			he([1, 0, 94, 37, 48, 17, 74, 61, 389, 4, 510, 805, 132, 162, 152, 31]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tYb = e.$sYb = void 0);
				const p = "_snippet.markAsUsed";
				g.$fk.registerCommand(p, (b, ...s) => {
					const l = b.get(u.$gYb),
						[y] = s;
					y instanceof a.$eYb && l.updateUsageTimestamp(y);
				});
				class o {
					constructor(s, l) {
						(this.snippet = s),
							(this.label = { label: s.prefix, description: s.name }),
							(this.detail = (0, r.localize)(
								9456,
								null,
								s.description || s.name,
								s.source,
							)),
							(this.insertText = s.codeSnippet),
							(this.extensionId = s.extensionId),
							(this.range = l),
							(this.sortText = `${s.snippetSource === a.SnippetSource.Extension ? "z" : "a"}-${s.prefix}`),
							(this.kind = C.CompletionItemKind.Snippet),
							(this.insertTextRules =
								C.CompletionItemInsertTextRule.InsertAsSnippet),
							(this.command = { id: p, title: "", arguments: [s] });
					}
					resolve() {
						return (
							(this.documentation = new t.$cl().appendCodeblock(
								"",
								m.$Izb.asInsertText(this.snippet.codeSnippet),
							)),
							this
						);
					}
					static compareByLabel(s, l) {
						return (0, i.$Ff)(s.label.label, l.label.label);
					}
				}
				e.$sYb = o;
				let f = class {
					constructor(s, l, y) {
						(this.c = s),
							(this.d = l),
							(this.e = y),
							(this._debugDisplayName = "snippetCompletions");
					}
					async provideCompletionItems(s, l, y) {
						const $ = new c.$le(),
							v = l.lineNumber,
							S = s.getWordAtPosition(l) ?? {
								startColumn: l.column,
								endColumn: l.column,
								word: "",
							},
							I = s.getLineContent(l.lineNumber).toLowerCase(),
							T = I.substring(0, S.startColumn + S.word.length - 1),
							P = this.g(s, v, S, T),
							k = l.column - 1,
							L = y.triggerCharacter?.toLowerCase() ?? "",
							D = this.h(s, l),
							M = this.e.getLanguageConfiguration(D),
							N = new Set(await this.d.getSnippets(D)),
							A = [];
						for (const R of N) {
							if (
								y.triggerKind === C.CompletionTriggerKind.TriggerCharacter &&
								!R.prefixLow.startsWith(L)
							)
								continue;
							let O;
							for (const V of P)
								if (
									!(V.prefixLow.match(/^\s/) && !R.prefixLow.match(/^\s/)) &&
									(0, h.$4k)(
										V.prefixLow,
										0,
										V.prefixLow.length,
										R.prefixLow,
										0,
										R.prefixLow.length,
									)
								) {
									O = V;
									break;
								}
							if (!O) continue;
							const B = O.startColumn - 1,
								U = R.prefixLow.length - (k - B),
								z = (0, i.$Gf)(I, R.prefixLow, k, k + U, k - B),
								F = l.with(void 0, B + 1);
							let x = z === 0 ? l.column + U : l.column;
							k < I.length &&
								M.getAutoClosingPairs()
									.autoClosingPairsCloseSingleChar.get(I[k])
									?.some(
										(K) =>
											K.open === I[F.column - 1] &&
											R.prefix.startsWith(K.open) &&
											R.prefix[R.prefix.length - 1] === K.close,
									) &&
								x++;
							const H = E.$iL.fromPositions(
									{ lineNumber: v, column: O.startColumn },
									{ lineNumber: v, column: x },
								),
								q = H.setEndPosition(v, l.column);
							A.push(new o(R, { replace: H, insert: q })), N.delete(R);
						}
						if (!L && (/\s/.test(I[l.column - 2]) || !I))
							for (const R of N) {
								const O = E.$iL.fromPositions(l),
									B =
										I.indexOf(R.prefixLow, k) === k
											? O.setEndPosition(
													l.lineNumber,
													l.column + R.prefixLow.length,
												)
											: O;
								A.push(new o(R, { replace: B, insert: O }));
							}
						return this.f(A), { suggestions: A, duration: $.elapsed() };
					}
					f(s) {
						s.sort(o.compareByLabel);
						for (let l = 0; l < s.length; l++) {
							const y = s[l];
							let $ = l + 1;
							for (; $ < s.length && y.label === s[$].label; $++)
								s[$].label.label = (0, r.localize)(
									9457,
									null,
									s[$].label.label,
									s[$].snippet.name,
								);
							$ > l + 1 &&
								((s[l].label.label = (0, r.localize)(
									9458,
									null,
									s[l].label.label,
									s[l].snippet.name,
								)),
								(l = $));
						}
					}
					resolveCompletionItem(s) {
						return s instanceof o ? s.resolve() : s;
					}
					g(s, l, y, $) {
						const v = [];
						for (let S = 1; S < y.startColumn; S++) {
							const I = s.getWordAtPosition(new w.$hL(l, S));
							v.push({
								startColumn: S,
								prefixLow: $.substring(S - 1),
								isWord: !!I,
							}),
								I &&
									((S = I.endColumn),
									v.push({
										startColumn: I.endColumn,
										prefixLow: $.substring(I.endColumn - 1),
										isWord: !1,
									}));
						}
						return (
							(y.word.length > 0 || v.length === 0) &&
								v.push({
									startColumn: y.startColumn,
									prefixLow: $.substring(y.startColumn - 1),
									isWord: !0,
								}),
							v
						);
					}
					h(s, l) {
						s.tokenization.tokenizeIfCheap(l.lineNumber);
						let y = s.getLanguageIdAtPosition(l.lineNumber, l.column);
						return this.c.getLanguageName(y) || (y = s.getLanguageId()), y;
					}
				};
				(e.$tYb = f),
					(e.$tYb = f = Ne([j(0, d.$nM), j(1, u.$gYb), j(2, n.$aN)], f));
			},
		),
		