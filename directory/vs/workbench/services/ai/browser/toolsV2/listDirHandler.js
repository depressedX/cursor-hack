import '../../../../../../require.js';
import '../../../../../../exports.js';
import './listDirHelper.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../platform/workspace/common/workspace.js';
import './toolsV2HandlerRegistryService.js';
import '../../../selectedContext/browser/selectedContext.js';
define(
			de[3929],
			he([1, 0, 1790, 22, 25, 398, 271]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5yc = void 0);
				let d = class extends E.$Xyc {
					constructor(r, u, a) {
						super(), (this.a = r), (this.b = u), (this.c = a);
					}
					async call(r, u, a, h) {
						if (!r)
							throw new Error(
								"No list dir parameters provided. Need to give at least the path.",
							);
						const c = this.b.resolveRelativePath(r.directoryPath);
						if (!c)
							throw new Error(
								`Could not find file ${r.directoryPath} in the workspace.`,
							);
						return (0, t.$3cc)(c, this.a, this.c);
					}
				};
				(e.$5yc = d),
					(e.$5yc = d = Ne([j(0, i.$ll), j(1, w.$Vi), j(2, C.$Q9b)], d));
			},
		),
		