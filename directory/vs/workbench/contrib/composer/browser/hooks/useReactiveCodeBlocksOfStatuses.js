import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import './useComposerDataHandle.js';
import '../../../controlCommon/browser/solid.js';
define(de[4156], he([1, 0, 13, 177, 36]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*useComposerDataHandle*/,
 w /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useReactiveCodeBlocksOfStatuses = void 0);
			const E = (C, d) => {
				const { currentComposer: m } = (0, i.useComposerDataHandle)(C),
					r = (0, w.$odc)(),
					{ composerDataService: u } = r,
					a = (0, t.createMemo)(() => u.selectedComposerId ?? "");
				return (0, t.createMemo)(() => {
					const c = m()?.codeBlockData;
					return u.getLatestCodeBlocksOfStatuses(a(), d);
				});
			};
			e.useReactiveCodeBlocksOfStatuses = E;
		})
