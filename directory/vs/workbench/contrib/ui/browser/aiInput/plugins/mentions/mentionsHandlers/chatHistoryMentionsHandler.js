import '../../../../../../../../../require.js';
import '../../../../../../../../../exports.js';
import '../../../../../../../../../external/solid/web.js';
import '../../../../../../../../../external/solid/web.js';
import '../../../../../../../../../external/solid/web.js';
import '../../../../../../../../../proto/aiserver/v1/context_pb.js';
import '../../../../../../../../base/common/codicons.js';
import '../../../../../../../../base/common/themables.js';
import '../../../../../../../../base/common/uuid.js';
import '../types.js';
define(
			de[3191],
			he([1, 0, 2, 2, 2, 228, 14, 26, 47, 310]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*context_pb*/,
 C /*codicons*/,
 d /*themables*/,
 m /*uuid*/,
 r /*types*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$C_b = void 0);
				const u = (0, t.template)("<i>");
				e.$C_b = new r.$u_b(
					"Chat",
					(() => {
						const a = u();
						return (
							(0, w.effect)(() =>
								(0, i.className)(
									a,
									d.ThemeIcon.asClassName(C.$ak.commentDiscussion),
								),
							),
							a
						);
					})(),
					{
						case: "simple_mentions_handler",
						contextIntent: () => ({
							uuid: (0, m.$9g)(),
							type: E.ContextIntent_Type.USER_ADDED,
							intent: { case: "chatHistory", value: {} },
						}),
					},
					9.7,
				);
			},
		)
