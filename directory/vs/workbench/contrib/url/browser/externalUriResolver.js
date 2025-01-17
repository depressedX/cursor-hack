import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/opener/common/opener.js';
import '../../../services/environment/browser/environmentService.js';
define(de[3276], he([1, 0, 3, 41, 286]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ExternalUriResolverContribution = void 0);
			let E = class extends t.$1c {
				static {
					this.ID = "workbench.contrib.externalUriResolver";
				}
				constructor(d, m) {
					super(),
						m.options?.resolveExternalUri &&
							this.D(
								d.registerExternalUriResolver({
									resolveExternalUri: async (r) => ({
										resolved: await m.options.resolveExternalUri(r),
										dispose: () => {},
									}),
								}),
							);
				}
			};
			(e.ExternalUriResolverContribution = E),
				(e.ExternalUriResolverContribution = E =
					Ne([j(0, i.$7rb), j(1, w.$5rb)], E));
		}),
		