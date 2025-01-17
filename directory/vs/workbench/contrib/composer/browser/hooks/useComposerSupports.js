import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import './useComposerDataHandle.js';
import '../../../controlCommon/browser/solid.js';
define(de[4152], he([1, 0, 13, 177, 36]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useComposerSupports = void 0);
			const E = ({ composerDataHandle: C, bubbleId: d }) => {
				const m = (0, w.$odc)(),
					{ currentComposer: r, forceMode: u } = (0, i.useComposerDataHandle)(
						C,
					);
				return (0, t.createMemo)(() => ({
					supportsQuotes: !r().isAgentic,
					supportsGit: !0,
					supportsCommitNotes: !1,
					supportsWeb: !0,
					supportsLink: !0,
					supportsDocs: !0,
					supportsFolderSelections: !0,
					supportsLint: u() === "chat",
					supportsCodebase: u() === "chat" || !r().isAgentic,
					supportsNotepads:
						m.reactiveStorageService.applicationUserPersistentStorage
							.notepadState.isNotepadEnabled,
					supportsDiffReview:
						u() !== "chat" &&
						d() === void 0 &&
						m.reactiveStorageService.applicationUserPersistentStorage
							.composerState.shouldReviewChanges !== "disabled",
					supportsContextPicking: !1,
					supportsAutoContext: !0,
					supportsEditTrail: !1,
					supportsRememberThis: !1,
				}));
			};
			e.useComposerSupports = E;
		}),
		