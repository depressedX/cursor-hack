import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../chat/common/chatAgents.js';
import '../../../terminal/browser/terminalContribExports.js';
define(de[4384], he([1, 0, 3, 8, 153, 1384]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$8Vc = void 0);
			let C = class {
				static {
					this.Id = "terminalChat.enabler";
				}
				constructor(m, r) {
					(this.b = new t.$Zc()),
						(this.a = E.TerminalChatContextKeys.hasChatAgent.bindTo(m)),
						this.b.add(
							r.onDidChangeAgents(() => {
								const u = !!r.getDefaultAgent(w.ChatAgentLocation.Terminal);
								this.a.set(u);
							}),
						);
				}
				dispose() {
					this.a.reset(), this.b.dispose();
				}
			};
			(e.$8Vc = C), (e.$8Vc = C = Ne([j(0, i.$6j), j(1, w.$c3)], C));
		}),
		