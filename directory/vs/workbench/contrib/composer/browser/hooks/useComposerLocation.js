define(de[1969], he([1, 0, 13, 36]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useComposerLocation = w);
			function w(E) {
				const C = (0, i.$odc)();
				return (0, t.createMemo)(() =>
					C.composerViewsService.getComposerLocation(E().data.composerId),
				);
			}
		}),
		