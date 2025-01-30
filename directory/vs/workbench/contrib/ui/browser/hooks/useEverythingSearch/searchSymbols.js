import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/fuzzyScorer.js';
import '../../../../../../platform/quickinput/common/quickInput.js';
import './types.js';
define(de[3201], he([1, 0, 322, 63, 444]), function (ce /*require*/,
 e /*exports*/,
 t /*fuzzyScorer*/,
 i /*quickInput*/,
 w /*types*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Y_b = E);
			async function E(C, d, m) {
				const r = (0, t.$hs)(C);
				return (
					await d.symbolsQuickAccessProvider.getSymbolPicks(
						C,
						{ skipLocal: !1, skipSorting: !1 },
						m.token,
					)
				).map((a) => {
					const h = a.symbol.name,
						c = d.workspaceContextService.asRelativePath(a.symbol.location.uri),
						{
							labelMatch: n,
							descriptionMatch: g,
							score: p,
						} = (0, t.$fs)(
							{ label: h, description: c },
							r,
							!0,
							i.$CJ,
							d.anythingQuickAccessProvider.scorerCache,
						);
					return {
						name: h,
						type: w.EverythingSearchOptionType.Symbol,
						score: p,
						uri: a.symbol.location.uri,
						range: a.symbol.location.range,
						secondaryText: c,
						labelMatches: n,
						descriptionMatches: g,
					};
				});
			}
		}),
		