import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/observable.js';
import '../../../../../base/common/strings.js';
import '../../../../common/core/cursorColumns.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../nls.js';
define(
			de[765],
			he([1, 0, 77, 37, 435, 8, 3, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*observable*/,
 i /*strings*/,
 w /*cursorColumns*/,
 E /*contextkey*/,
 C /*lifecycle*/,
 d /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Cb = void 0);
				class m extends C.$1c {
					static {
						this.inlineSuggestionVisible = new E.$5j(
							"inlineSuggestionVisible",
							!1,
							(0, d.localize)(1248, null),
						);
					}
					static {
						this.inlineSuggestionHasIndentation = new E.$5j(
							"inlineSuggestionHasIndentation",
							!1,
							(0, d.localize)(1249, null),
						);
					}
					static {
						this.inlineSuggestionHasIndentationLessThanTabSize = new E.$5j(
							"inlineSuggestionHasIndentationLessThanTabSize",
							!0,
							(0, d.localize)(1250, null),
						);
					}
					static {
						this.suppressSuggestions = new E.$5j(
							"inlineSuggestionSuppressSuggestions",
							void 0,
							(0, d.localize)(1251, null),
						);
					}
					constructor(u, a) {
						super(),
							(this.a = u),
							(this.b = a),
							(this.inlineCompletionVisible = m.inlineSuggestionVisible.bindTo(
								this.a,
							)),
							(this.inlineCompletionSuggestsIndentation =
								m.inlineSuggestionHasIndentation.bindTo(this.a)),
							(this.inlineCompletionSuggestsIndentationLessThanTabSize =
								m.inlineSuggestionHasIndentationLessThanTabSize.bindTo(this.a)),
							(this.suppressSuggestions = m.suppressSuggestions.bindTo(this.a)),
							this.D(
								(0, t.autorun)((h) => {
									const n = this.b.read(h)?.state.read(h),
										g =
											!!n?.inlineCompletion &&
											n?.primaryGhostText !== void 0 &&
											!n?.primaryGhostText.isEmpty();
									this.inlineCompletionVisible.set(g),
										n?.primaryGhostText &&
											n?.inlineCompletion &&
											this.suppressSuggestions.set(
												n.inlineCompletion.inlineCompletion.source
													.inlineCompletions.suppressSuggestions,
											);
								}),
							),
							this.D(
								(0, t.autorun)((h) => {
									const c = this.b.read(h);
									let n = !1,
										g = !0;
									const p = c?.primaryGhostText.read(h);
									if (c?.selectedSuggestItem && p && p.parts.length > 0) {
										const { column: o, lines: f } = p.parts[0],
											b = f[0],
											s = c.textModel.getLineIndentColumn(p.lineNumber);
										if (o <= s) {
											let y = (0, i.$Bf)(b);
											y === -1 && (y = b.length - 1), (n = y > 0);
											const $ = c.textModel.getOptions().tabSize;
											g = w.$BM.visibleColumnFromColumn(b, y + 1, $) < $;
										}
									}
									this.inlineCompletionSuggestsIndentation.set(n),
										this.inlineCompletionSuggestsIndentationLessThanTabSize.set(
											g,
										);
								}),
							);
					}
				}
				e.$_Cb = m;
			},
		)
