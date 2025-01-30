import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/fuzzyScorer.js';
import '../../../../../../platform/quickinput/common/quickInput.js';
import './types.js';
define(de[3199], he([1, 0, 322, 63, 444]), function (ce /*require*/,
 e /*exports*/,
 t /*fuzzyScorer*/,
 i /*quickInput*/,
 w /*types*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$X_b = E);
			async function E(C, d) {
				const m = (0, t.$hs)(C);
				return Object.values(d.notepadDataService.notepadsData.notepads)
					.map((u) => {
						const {
							labelMatch: a,
							descriptionMatch: h,
							score: c,
						} = (0, t.$fs)(
							{ label: u.name, description: "" },
							m,
							!0,
							i.$CJ,
							d.anythingQuickAccessProvider.scorerCache,
						);
						return {
							name: u.name,
							type: w.EverythingSearchOptionType.Notepad,
							score: c === 0 ? -1 : c,
							secondaryText: void 0,
							labelMatches: a,
							descriptionMatches: h,
							notepadId: u.id,
						};
					})
					.filter((u) => u.labelMatches?.length || !C)
					.sort((u, a) => a.score - u.score);
			}
		}),
		