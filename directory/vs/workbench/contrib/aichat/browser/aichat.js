import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/constants.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
define(de[418], he([1, 0, 58, 8, 5, 205]), function (ce /*require*/,
 e /*exports*/,
 t /*constants*/,
 i /*contextkey*/,
 w /*instantiation*/,
 E /*reactiveStorageTypes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ugc =
					e.$tgc =
					e.$sgc =
					e.$rgc =
					e.$qgc =
					e.AIChatConstants =
						void 0);
			var C;
			(function (d) {
				(d.CHAT_CONTAINER_ID = "workbench.panel.aichat"),
					(d.CHAT_VIEW_ID = t.$BX),
					(d.CHAT_REACTIVE_STORAGE_ID = t.$CX),
					(d.CHAT_STORAGE_ID = "workbench.panel.aichat"),
					(d.Id = "aichat");
			})(C || (e.AIChatConstants = C = {})),
				(e.$qgc = (0, w.$Mi)("aiChatService")),
				(e.$rgc = (0, w.$Mi)("aiChatPaneController")),
				(e.$sgc = new i.$5j("aichatDisplayHistory", !1)),
				(e.$tgc = new i.$5j("activeAIChatEditor", !1)),
				(e.$ugc = new i.$5j("aichatPosition", E.AIPanePosition.SIDEBAR));
		}),
		