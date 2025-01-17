import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import './useComposerDataHandle.js';
import '../../../controlCommon/browser/solid.js';
define(de[1066], he([1, 0, 13, 177, 36]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useShouldShowApplyLastMessage = E);
			function E(C) {
				const d = (0, w.$odc)(),
					{ composerDataService: m } = d,
					{ currentComposer: r } = (0, i.useComposerDataHandle)(C),
					u = (0, t.createMemo)(() => m.getComposerForceMode(C()));
				return (0, t.createMemo)(() => {
					const a = r();
					if (
						!a ||
						a.text !== "" ||
						(u() === "edit" &&
							!d.reactiveStorageService.applicationUserPersistentStorage
								.composerState.unification)
					)
						return !1;
					const h = m.getLastAiBubble(a.composerId);
					return h?.codeBlocks
						? h.codeBlocks.some((c) => {
								const n = m.getComposerCodeBlock(C(), c.uri, c.version);
								return n?.isNotApplied && n?.status !== "generating";
							})
						: !1;
				});
			}
		}),
		