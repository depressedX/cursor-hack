import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/cursor_prediction_pb.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
define(de[2966], he([1, 0, 1473, 20, 5, 45]), function (ce /*require*/,
 e /*exports*/,
 t /*cursor_prediction_pb*/,
 i /*extensions*/,
 w /*instantiation*/,
 E /*reactiveStorageService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$efd = e.$dfd = void 0),
				(e.$dfd = (0, w.$Mi)("cursorPredictionBadHeuristics"));
			let C = class {
				constructor(m) {
					this.a = m;
				}
				isValidCursorPredictionCase(m) {
					return this.a.applicationUserPersistentStorage.cursorPredictionState?.heuristics?.includes(
						t.CursorPredictionConfigResponse_Heuristic
							.DISABLE_IN_LAST_CPP_SUGGESTION,
					) === !0 &&
						m.cppSuggestionRange !== void 0 &&
						m.predictedLineNumber >= m.cppSuggestionRange.startLineNumber &&
						m.predictedLineNumber <= m.cppSuggestionRange.endLineNumberInclusive
						? (console.log(
								"[Cursor Prediction] Bad Case 1: Do not show prediction if it's in the accepted cpp suggestion range",
							),
							{ valid: !1 })
						: { valid: !0 };
				}
			};
			(e.$efd = C),
				(e.$efd = C = Ne([j(0, E.$0zb)], C)),
				(0, i.$lK)(e.$dfd, C, i.InstantiationType.Delayed);
		})
