import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
define(de[4145], he([1, 0, 13, 36]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$_bc = void 0);
			const w = (E, C = !1) => {
				const d = (0, i.$odc)();
				return (0, t.createMemo)(() =>
					d.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.some(
						(r) =>
							r.metadata !== void 0 &&
							((r.metadata.type === "chat" &&
								(C ? r.metadata.chatType !== "edit" : !0) &&
								r.metadata.isBackground !== !0) ||
								r.metadata.type === "codeInterpreter") &&
							r.metadata.tabId === E(),
					),
				);
			};
			e.$_bc = w;
		}),
		