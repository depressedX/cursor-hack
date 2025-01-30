import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/languages.js';
import '../../smartSelect/browser/bracketSelections.js';
define(
			de[1609],
			he([1, 0, 24, 38, 17, 74, 1556]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*editorOptions*/,
 w /*range*/,
 E /*languages*/,
 C /*bracketSelections*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SCb = void 0);
				class d {
					static {
						this.None = new (class extends d {
							distance() {
								return 0;
							}
						})();
					}
					static async create(r, u) {
						if (
							!u.getOption(i.EditorOption.suggest).localityBonus ||
							!u.hasModel()
						)
							return d.None;
						const a = u.getModel(),
							h = u.getPosition();
						if (!r.canComputeWordRanges(a.uri)) return d.None;
						const [c] = await new C.$RCb().provideSelectionRanges(a, [h]);
						if (c.length === 0) return d.None;
						const n = await r.computeWordRanges(a.uri, c[0].range);
						if (!n) return d.None;
						const g = a.getWordUntilPosition(h);
						return (
							delete n[g.word],
							new (class extends d {
								distance(p, o) {
									if (!h.equals(u.getPosition())) return 0;
									if (o.kind === E.CompletionItemKind.Keyword) return 2 << 20;
									const f =
											typeof o.label == "string" ? o.label : o.label.label,
										b = n[f];
									if ((0, t.$Ob)(b)) return 2 << 20;
									const s = (0, t.$Ab)(
											b,
											w.$iL.fromPositions(p),
											w.$iL.compareRangesUsingStarts,
										),
										l = s >= 0 ? b[s] : b[Math.max(0, ~s - 1)];
									let y = c.length;
									for (const $ of c) {
										if (!w.$iL.containsRange($.range, l)) break;
										y -= 1;
									}
									return y;
								}
							})()
						);
					}
				}
				e.$SCb = d;
			},
		),
		