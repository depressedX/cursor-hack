import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/strings.js';
import '../../../common/commands/shiftCommand.js';
import '../../../common/core/editOperation.js';
import '../../../common/core/indentation.js';
import '../../../common/core/selection.js';
import '../../../common/encodedTokenAttributes.js';
import '../../../common/languages/supports/indentationLineProcessor.js';
define(
			de[2776],
			he([1, 0, 37, 771, 188, 1146, 104, 171, 1151]),
			function (ce /*require*/,
 e /*exports*/,
 t /*strings*/,
 i /*shiftCommand*/,
 w /*editOperation*/,
 E /*indentation*/,
 C /*selection*/,
 d /*encodedTokenAttributes*/,
 m /*indentationLineProcessor*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zic = r),
					(t = mt(t));
				function r(a, h, c, n) {
					if (a.getLineCount() === 1 && a.getLineMaxColumn(1) === 1) return [];
					const g = h.getLanguageConfiguration(
						a.getLanguageId(),
					).indentRulesSupport;
					if (!g) return [];
					const p = new m.$Ntb(a, g, h);
					for (n = Math.min(n, a.getLineCount()); c <= n && p.shouldIgnore(c); )
						c++;
					if (c > n - 1) return [];
					const { tabSize: o, indentSize: f, insertSpaces: b } = a.getOptions(),
						s = (I, T) => (
							(T = T || 1), i.$Rtb.shiftIndent(I, I.length + T, o, f, b)
						),
						l = (I, T) => (
							(T = T || 1), i.$Rtb.unshiftIndent(I, I.length + T, o, f, b)
						),
						y = [],
						$ = a.getLineContent(c);
					let v = t.$Cf($),
						S = v;
					p.shouldIncrease(c)
						? ((S = s(S)), (v = s(v)))
						: p.shouldIndentNextLine(c) && (S = s(S)),
						c++;
					for (let I = c; I <= n; I++) {
						if (u(a, I)) continue;
						const T = a.getLineContent(I),
							P = t.$Cf(T),
							k = S;
						p.shouldDecrease(I, k) && ((S = l(S)), (v = l(v))),
							P !== S &&
								y.push(
									w.$jL.replaceMove(
										new C.$kL(I, 1, I, P.length + 1),
										(0, E.$ZO)(S, f, b),
									),
								),
							!p.shouldIgnore(I) &&
								(p.shouldIncrease(I, k)
									? ((v = s(v)), (S = v))
									: p.shouldIndentNextLine(I, k)
										? (S = s(S))
										: (S = v));
					}
					return y;
				}
				function u(a, h) {
					return a.tokenization.isCheapToTokenize(h)
						? a.tokenization.getLineTokens(h).getStandardTokenType(0) ===
								d.StandardTokenType.String
						: !1;
				}
			},
		)
