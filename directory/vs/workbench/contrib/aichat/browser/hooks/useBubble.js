import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../chatData.js';
define(de[1712], he([1, 0, 13, 140]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*chatData*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$abc = void 0);
			const w = (E, C) => {
				const d = (0, i.$zgc)();
				return (0, t.createMemo)(() =>
					d.chatData.tabs
						.find((m) => m.tabId === E())
						?.bubbles.find((m) => m.id === C()),
				);
			};
			e.$abc = w;
		})
