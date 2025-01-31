import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../repositoryService.js';
import './readFileHelper.js';
import './toolsV2HandlerRegistryService.js';
define(
			de[3645],
			he([1, 0, 124, 22, 25, 226, 1284, 398]),
			function (ce /*require*/,
 e /*exports*/,
 t /*tools_pb*/,
 i /*files*/,
 w /*workspace*/,
 E /*repositoryService*/,
 C /*readFileHelper*/,
 d /*toolsV2HandlerRegistryService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0yc = void 0);
				let m = class extends d.$Xyc {
					constructor(u, a, h) {
						super(), (this.a = u), (this.b = a), (this.c = h);
					}
					async call(u, a, h) {
						if (!u)
							throw new Error(
								"No read files parameters provided. Need to give at least the path.",
							);
						if (!u)
							throw new Error(
								"No parameters provided for SemanticSearchFullHandler.",
							);
						const c = await this.a.searchNewLocal(u.query, u.topK, {
								includePattern: u.includePattern,
								excludePattern: u.excludePattern,
								excludeCursorIgnored: !0,
								abortSignal: a.signal,
							}),
							{ files: n, missingFiles: g } = await (0, C.$ehc)(
								c,
								this.c,
								this.b,
							);
						return new t.$zy({ codeResults: c, allFiles: n, missingFiles: g });
					}
				};
				(e.$0yc = m),
					(e.$0yc = m = Ne([j(0, E.$J6b), j(1, i.$ll), j(2, w.$Vi)], m));
			},
		)
