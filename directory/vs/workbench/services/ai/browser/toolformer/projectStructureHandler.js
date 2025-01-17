import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../simpleChunkingService.js';
define(de[3665], he([1, 0, 124, 25, 1038]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$M8b = void 0);
			let E = class {
				constructor(d, m) {
					(this.a = d), (this.b = m);
				}
				async call(d, m, r, u) {}
				async finish(d, m, r, u) {
					const a = [];
					for await (const h of this.a.getWorkspaceOutline())
						a.push(
							new t.$6y({
								relativeWorkspacePath: h.relativeWorkspacePath,
								outline: h.outline,
							}),
						);
					return new t.$5y({
						rootWorkspacePath: this.b.getWorkspace().folders[0].uri.path,
						files: a,
					});
				}
			};
			(e.$M8b = E), (e.$M8b = E = Ne([j(0, w.$L8b), j(1, i.$Vi)], E));
		}),
		