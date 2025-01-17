import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/workspace/common/workspace.js';
import '../browser/terminal.js';
import '../browser/terminalProfileResolverService.js';
import '../common/terminal.js';
import '../../../services/configurationResolver/common/configurationResolver.js';
import '../../../services/history/common/history.js';
import '../../../services/remote/common/remoteAgentService.js';
define(
			de[3568],
			he([1, 0, 29, 10, 117, 25, 107, 3566, 145, 358, 245, 143]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mgd = void 0);
				let h = class extends d.$k6c {
					constructor(n, g, p, o, f, b, s, l) {
						super(
							{
								getDefaultSystemShell: async (y, $) => {
									const v = await l.getBackend(y);
									if (!v)
										throw new t.$fb(
											`Cannot get default system shell when there is no backend for remote authority '${y}'`,
										);
									return v.getDefaultSystemShell($);
								},
								getEnvironment: async (y) => {
									const $ = await l.getBackend(y);
									if (!$)
										throw new t.$fb(
											`Cannot get environment when there is no backend for remote authority '${y}'`,
										);
									return $.getEnvironment();
								},
							},
							g,
							n,
							p,
							o,
							b,
							f,
							s,
						);
					}
				};
				(e.$mgd = h),
					(e.$mgd = h =
						Ne(
							[
								j(0, r.$zeb),
								j(1, i.$gj),
								j(2, u.$Feb),
								j(3, w.$YJ),
								j(4, E.$Vi),
								j(5, m.$teb),
								j(6, a.$$m),
								j(7, C.$mIb),
							],
							h,
						));
			},
		),
		