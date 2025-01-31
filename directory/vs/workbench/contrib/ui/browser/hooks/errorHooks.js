import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../base/common/constants.js';
import '../../../../../base/common/platform.js';
define(de[3197], he([1, 0, 13, 83, 58, 12]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*utils_pb*/,
 w /*constants*/,
 E /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$9ac = C);
			function C(d) {
				const m = (0, t.createMemo)(() => {
						const c = d()?.details?.title;
						return c !== void 0 && c.length > 0 ? c : "Connection failed.";
					}),
					r = (0, t.createMemo)(() => {
						const c = d()?.details?.isRetryable;
						return c !== void 0 ? c : !0;
					}),
					u = (0, t.createMemo)(() => {
						const c = d()?.details?.showRequestId;
						return c !== void 0 ? c : !0;
					}),
					a = (0, t.createMemo)(() => {
						const c =
							d()?.details
								?.allowCommandLinksPotentiallyUnsafePleaseOnlyUseForHandwrittenTrustedMarkdown;
						return c !== void 0 ? c : !1;
					}),
					h = (0, t.createMemo)(() => {
						const c = d()?.details?.detail;
						if (c !== void 0 && c.length > 0) return c;
						switch (d()?.error) {
							case i.ErrorDetails_Error.OUTDATED_CLIENT:
								return `Please upgrade to the latest version of Cursor. Try ${E.$m ? "Cmd" : "Ctrl"} + Shift + P > "Cursor: Attempt Update", or if that doesn't work, download the newest version from the cursor.com website.`;
							default:
								return `If the problem persists, please check your internet connection or VPN, or email us at [${w.$vV}](mailto:${w.$vV}).`;
						}
					});
				return {
					title: m,
					retryable: r,
					showRequestId: u,
					detail: h,
					allowCommandLinksPotentiallyUnsafe: a,
				};
			}
		})
