import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../controlCommon/browser/solid.js';
import './components/AiChat.js';
import './chatData.js';
define(
			de[4406],
			he([1, 0, 2, 36, 4405, 140]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*AiChat*/,
 E /*chatData*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$jcc = C);
				function C(d, m, r, u, a, h) {
					return (0, i.$ndc)(
						() =>
							(0, t.createComponent)(E.$ygc.Provider, {
								value: r,
								get children() {
									return (0, t.createComponent)(w.$icc, {
										persistSelectedChat: u,
										hideChatHistory: a,
										showChatHistory: h,
									});
								},
							}),
						d,
						m,
					);
				}
			},
		),
		