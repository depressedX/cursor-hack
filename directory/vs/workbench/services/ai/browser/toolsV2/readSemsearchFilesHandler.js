import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../repositoryService.js';
import './readFileHelper.js';
import './toolsV2HandlerRegistryService.js';
define(
			de[3644],
			he([1, 0, 124, 22, 134, 25, 226, 1284, 398]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yyc = void 0);
				let r = class extends m.$Xyc {
					constructor(a, h, c) {
						super(), (this.a = a), (this.b = h), (this.c = c);
					}
					async call(a, h, c) {
						if ((console.log("params at the top", a), !a))
							throw new Error(
								"No read files parameters provided. Need to give at least the path.",
							);
						if (!a)
							throw new Error(
								"No parameters provided for ReadSemsearchFilesHandler.",
							);
						const n = await this.a.getNewRepoInfo();
						if (n === void 0) throw new Error("No repository info found");
						const g = { ...n, id: w.LocalRepoId.id },
							p = await this.a.getFinalCodeResults(g, a.codeResults, {
								excludeCursorIgnored: !0,
							}),
							{ files: o, missingFiles: f } = await (0, d.$ehc)(
								p,
								this.c,
								this.b,
							);
						return new t.$vy({ codeResults: p, allFiles: o, missingFiles: f });
					}
				};
				(e.$Yyc = r),
					(e.$Yyc = r = Ne([j(0, C.$J6b), j(1, i.$ll), j(2, E.$Vi)], r));
			},
		),
		