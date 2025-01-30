import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../textfile/common/textfiles.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../platform/markers/common/markers.js';
define(
			de[3973],
			he([1, 0, 85, 25, 42, 241, 22, 124, 90]),
			function (ce /*require*/,
 e /*exports*/,
 t /*textfiles*/,
 i /*workspace*/,
 w /*resolverService*/,
 E /*magicLinkService*/,
 C /*files*/,
 d /*tools_pb*/,
 m /*markers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O8b = void 0);
				let r = class {
					constructor(a, h, c, n, g, p) {
						(this.a = a),
							(this.b = h),
							(this.c = c),
							(this.d = n),
							(this.e = g),
							(this.f = p);
					}
					async call(a, h, c, n) {}
					async finish(a, h, c, n) {
						if (!h)
							throw new Error(
								"No save parameters provided. Need to give at least the relative workspace path.",
							);
						if (h.relativeWorkspacePath === void 0)
							throw new Error("Need to give the path of the file to save.");
						const g = await this.d.getMagicURIForText(h.relativeWorkspacePath);
						if (!g)
							throw new Error(
								`Could not find file ${h.relativeWorkspacePath} in the workspace.`,
							);
						return await this.a.save(g), new d.$Jz({});
					}
				};
				(e.$O8b = r),
					(e.$O8b = r =
						Ne(
							[
								j(0, t.$kZ),
								j(1, i.$Vi),
								j(2, w.$MO),
								j(3, E.$q8b),
								j(4, C.$ll),
								j(5, m.$aM),
							],
							r,
						));
			},
		),
		