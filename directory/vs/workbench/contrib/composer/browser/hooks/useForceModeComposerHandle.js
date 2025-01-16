define(de[4153], he([1, 0, 13, 36]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useForceModeComposerHandle = w);
			function w(E) {
				const d = (0, i.$odc)().composerDataService;
				return (0, t.createMemo)(() =>
					E === "chat"
						? d.allComposersData.selectedChatHandle &&
							d.allComposersData.selectedChatHandle.data.hasLoaded &&
							d.allComposersData.selectedChatHandle
						: d.allComposersData.selectedComposerHandle &&
							d.allComposersData.selectedComposerHandle.data.hasLoaded &&
							d.allComposersData.selectedComposerHandle,
				);
			}
		}),
		