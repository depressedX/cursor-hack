import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../browser/cursorEvalService.js';
define(de[3046], he([1, 0, 3, 20, 684]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*extensions*/,
 w /*cursorEvalService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Qfd = void 0);
			class E extends t.$1c {
				constructor() {
					super();
				}
				async getCmdKDebugInfo(d) {}
				async createFromConfig(d) {}
				async getNewResultsFromContextChatConfig(d, m) {
					return {
						type: "context-chat",
						config: { type: "standalone", testCases: [], configs: [] },
						results: [],
					};
				}
				async openCmdKDebugInfo(d) {}
				async checkoutCmdKDebugInfo(d, m) {}
			}
			(e.$Qfd = E), (0, i.$lK)(w.$06b, E, i.InstantiationType.Delayed);
		})
