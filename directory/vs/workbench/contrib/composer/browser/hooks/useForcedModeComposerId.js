import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../composerData.js';
import '../../../controlCommon/browser/solid.js';
define(de[4154], he([1, 0, 225, 36]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useForcedModeComposerId = w);
			function w() {
				const E = (0, i.$odc)();
				return (0, t.useComposerContext)()?.forcedMode === "chat"
					? E.composerDataService.selectedChatId
					: E.composerDataService.selectedComposerId;
			}
		}),
		