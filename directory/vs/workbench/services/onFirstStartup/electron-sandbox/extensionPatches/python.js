import '../../../../../../require.js';
import '../../../../../../exports.js';
define(de[3513], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ecd = void 0);
			function t(i) {
				return i.replace(
					"if(i&&i.client&&i.client.isEnabled())return this.pylanceApi=i,void await i.client.start();",
					"",
				);
			}
			e.$Ecd = {
				extensionId: "ms-python.python",
				extensionMaxVersionToFixInclusive: "2023.22.1",
				fixes: [{ relativeFilePath: "out/client/extension.js", replaceFn: t }],
			};
		}),
		