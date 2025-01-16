define(de[1968], he([1, 0, 13, 36]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useCachedChatUsesTools = w);
			function w() {
				const E = (0, i.$odc)(),
					[C, d] = (0, t.createSignal)(!1);
				return (
					(0, t.onMount)(() => {
						(async () => {
							d(await E.composerUtilsService.getShouldChatUseTools());
						})();
					}),
					C
				);
			}
		}),
		