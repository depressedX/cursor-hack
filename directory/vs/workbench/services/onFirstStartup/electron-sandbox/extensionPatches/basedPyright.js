import '../../../../../../require.js';
import '../../../../../../exports.js';
define(de[3509], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Hcd = void 0);
			function t(i) {
				return i.replace(
					`"basedpyright.analysis.typeCheckingMode": {
					"type": "string",
					"default": "all",`,
					`"basedpyright.analysis.typeCheckingMode": {
					"type": "string",
					"default": "off",`,
				);
			}
			e.$Hcd = {
				extensionId: "detachhead.basedpyright",
				fixes: [{ relativeFilePath: "package.json", replaceFn: t }],
			};
		}),
		