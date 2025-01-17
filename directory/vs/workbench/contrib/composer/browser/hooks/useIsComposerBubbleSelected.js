import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
define(de[4155], he([1, 0, 13, 36]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useIsComposerBubbleSelected = w);
			function w(E, C) {
				const d = (0, i.$odc)(),
					{ composerDataService: m } = d;
				return (0, t.createMemo)(
					() => m.getComposerData(E())?.selectedBubbleId === C(),
				);
			}
		}),
		