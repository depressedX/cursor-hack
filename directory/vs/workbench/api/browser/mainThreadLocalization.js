import '../../../../require.js';
import '../../../../exports.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../base/common/uri.js';
import '../../../platform/files/common/files.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/languagePacks/common/languagePacks.js';
define(
			de[3356],
			he([1, 0, 88, 101, 9, 22, 3, 672]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vmc = void 0);
				let m = class extends C.$1c {
					constructor(u, a, h) {
						super(), (this.a = a), (this.b = h);
					}
					async $fetchBuiltInBundleUri(u, a) {
						try {
							return await this.b.getBuiltInExtensionTranslationsUri(u, a);
						} catch {
							return;
						}
					}
					async $fetchBundleContents(u) {
						return (await this.a.readFile(w.URI.revive(u))).value.toString();
					}
				};
				(e.$vmc = m),
					(e.$vmc = m =
						Ne(
							[
								(0, i.$tmc)(t.$lbb.MainThreadLocalization),
								j(1, E.$ll),
								j(2, d.$FJ),
							],
							m,
						));
			},
		),
		