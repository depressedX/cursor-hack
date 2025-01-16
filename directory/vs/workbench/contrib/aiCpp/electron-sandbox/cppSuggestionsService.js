define(
			de[2964],
			he([1, 0, 47, 20, 5, 45, 155, 1229]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ted = e.$Sed = void 0),
					(e.$Sed = (0, w.$Mi)("cppSuggestionService"));
				let m = class {
					constructor(u) {
						(this.b = u), (this.a = 1);
					}
					createUnseenSuggestion(u) {
						const a = (0, t.$9g)(),
							{ isNoOp: h } = (0, d.$Qed)(
								u.model,
								u.startingRange,
								u.diffText,
								u.eol,
							);
						if (h) return;
						const c = u.model.getValueInRange({
							startLineNumber: u.startingRange.startLineNumber,
							startColumn: u.startingRange.startColumn,
							endLineNumber: u.startingRange.endLineNumberInclusive,
							endColumn: u.startingRange.endColumn,
						});
						return {
							uniqueId: a,
							uri: u.model.uri,
							modelVersionWhenInvoked: u.modelVersionWhenInvoked,
							suggestionIsCurrentlyHidden: !0,
							modelVersionWhenCreated: u.model.getVersionId(),
							monotonicallyIncreasingSuggestionId: this.a++,
							range: u.startingRange,
							replaceText: u.diffText,
							originalText: c,
							startingSuggestionRange: u.startingRange,
							diffText: u.diffText,
							fullOriginalText: c,
							suggestionTriggerTime: u.suggestionTriggerTime,
							greens: [],
							source: u.source,
							requestId: u.requestId,
							selection: u.selection,
							fusedCursorPredictionId: u.fusedCursorPredictionId,
							undoRedoGroup: new C.$IN(),
							immediatelySeen: !1,
							hasBeenSeen: !1,
						};
					}
				};
				(e.$Ted = m),
					(e.$Ted = m = Ne([j(0, E.$0zb)], m)),
					(0, i.$lK)(e.$Sed, m, i.InstantiationType.Delayed);
			},
		),
		