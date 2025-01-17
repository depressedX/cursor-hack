import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/telemetry/common/telemetry.js';
define(de[3077], he([1, 0, 32]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$NZb = void 0);
			let i = class {
				constructor(E) {
					this.a = E;
				}
				reportMergeEditorOpened(E) {
					this.a.publicLog2("mergeEditor.opened", {
						conflictCount: E.conflictCount,
						combinableConflictCount: E.combinableConflictCount,
						baseVisible: E.baseVisible,
						isColumnView: E.isColumnView,
						baseTop: E.baseTop,
					});
				}
				reportLayoutChange(E) {
					this.a.publicLog2("mergeEditor.layoutChanged", {
						baseVisible: E.baseVisible,
						isColumnView: E.isColumnView,
						baseTop: E.baseTop,
					});
				}
				reportMergeEditorClosed(E) {
					this.a.publicLog2("mergeEditor.closed", {
						conflictCount: E.conflictCount,
						combinableConflictCount: E.combinableConflictCount,
						durationOpenedSecs: E.durationOpenedSecs,
						remainingConflictCount: E.remainingConflictCount,
						accepted: E.accepted,
						conflictsResolvedWithBase: E.conflictsResolvedWithBase,
						conflictsResolvedWithInput1: E.conflictsResolvedWithInput1,
						conflictsResolvedWithInput2: E.conflictsResolvedWithInput2,
						conflictsResolvedWithSmartCombination:
							E.conflictsResolvedWithSmartCombination,
						manuallySolvedConflictCountThatEqualNone:
							E.manuallySolvedConflictCountThatEqualNone,
						manuallySolvedConflictCountThatEqualSmartCombine:
							E.manuallySolvedConflictCountThatEqualSmartCombine,
						manuallySolvedConflictCountThatEqualInput1:
							E.manuallySolvedConflictCountThatEqualInput1,
						manuallySolvedConflictCountThatEqualInput2:
							E.manuallySolvedConflictCountThatEqualInput2,
						manuallySolvedConflictCountThatEqualNoneAndStartedWithBase:
							E.manuallySolvedConflictCountThatEqualNoneAndStartedWithBase,
						manuallySolvedConflictCountThatEqualNoneAndStartedWithInput1:
							E.manuallySolvedConflictCountThatEqualNoneAndStartedWithInput1,
						manuallySolvedConflictCountThatEqualNoneAndStartedWithInput2:
							E.manuallySolvedConflictCountThatEqualNoneAndStartedWithInput2,
						manuallySolvedConflictCountThatEqualNoneAndStartedWithBothNonSmart:
							E.manuallySolvedConflictCountThatEqualNoneAndStartedWithBothNonSmart,
						manuallySolvedConflictCountThatEqualNoneAndStartedWithBothSmart:
							E.manuallySolvedConflictCountThatEqualNoneAndStartedWithBothSmart,
					});
				}
				reportAcceptInvoked(E, C) {
					this.a.publicLog2("mergeEditor.action.accept", {
						otherAccepted: C,
						isInput1: E === 1,
					});
				}
				reportSmartCombinationInvoked(E) {
					this.a.publicLog2("mergeEditor.action.smartCombination", {
						otherAccepted: E,
					});
				}
				reportRemoveInvoked(E, C) {
					this.a.publicLog2("mergeEditor.action.remove", {
						otherAccepted: C,
						isInput1: E === 1,
					});
				}
				reportResetToBaseInvoked() {
					this.a.publicLog2("mergeEditor.action.resetToBase", {});
				}
				reportNavigationToNextConflict() {
					this.a.publicLog2("mergeEditor.action.goToNextConflict", {});
				}
				reportNavigationToPreviousConflict() {
					this.a.publicLog2("mergeEditor.action.goToPreviousConflict", {});
				}
				reportConflictCounterClicked() {
					this.a.publicLog2("mergeEditor.action.conflictCounterClicked", {});
				}
			};
			(e.$NZb = i), (e.$NZb = i = Ne([j(0, t.$km)], i));
		}),
		