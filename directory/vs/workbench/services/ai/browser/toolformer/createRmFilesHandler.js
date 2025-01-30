import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../textfile/common/textfiles.js';
define(
			de[3961],
			he([1, 0, 124, 42, 22, 25, 241, 85]),
			function (ce /*require*/,
 e /*exports*/,
 t /*tools_pb*/,
 i /*resolverService*/,
 w /*files*/,
 E /*workspace*/,
 C /*magicLinkService*/,
 d /*textfiles*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$w8b = void 0);
				let m = class {
					constructor(u, a, h, c, n) {
						(this.a = u),
							(this.b = a),
							(this.c = h),
							(this.d = c),
							(this.f = n);
					}
					async call(u, a, h, c) {}
					async finish(u, a, h, c) {
						if (!a)
							throw new Error(
								"No parameters provided for CreateRmFilesHandler.",
							);
						for (const n of a.createdDirectoryPaths) {
							const g = this.b.getWorkspace().folders[0].toResource(n);
							(await this.f.exists(g)) || (await this.f.createFolder(g));
						}
						for (const n of a.createdFilePaths) {
							const g = this.b.getWorkspace().folders[0].toResource(n);
							if (!(await this.f.exists(g)))
								try {
									await this.a.write(g, "");
								} catch (p) {
									throw p;
								}
						}
						for (const n of a.removedFilePaths) {
							const g = this.b.getWorkspace().folders[0].toResource(n);
							if (!(await this.f.exists(g)))
								throw new Error(
									`File ${n} does not exist: cannot remove file.`,
								);
							try {
								await this.f.del(g);
							} catch (p) {
								throw p;
							}
						}
						return new t.$3y({
							createdFilePaths: a.createdFilePaths,
							removedFilePaths: a.removedFilePaths,
						});
					}
				};
				(e.$w8b = m),
					(e.$w8b = m =
						Ne(
							[
								j(0, d.$kZ),
								j(1, E.$Vi),
								j(2, i.$MO),
								j(3, C.$q8b),
								j(4, w.$ll),
							],
							m,
						));
			},
		),
		