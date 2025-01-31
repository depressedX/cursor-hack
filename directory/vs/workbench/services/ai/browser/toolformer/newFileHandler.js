import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../textfile/common/textfiles.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../../../platform/files/common/files.js';
define(
			de[3970],
			he([1, 0, 124, 85, 25, 42, 241, 22]),
			function (ce /*require*/,
 e /*exports*/,
 t /*tools_pb*/,
 i /*textfiles*/,
 w /*workspace*/,
 E /*resolverService*/,
 C /*magicLinkService*/,
 d /*files*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$K8b = void 0);
				let m = class {
					constructor(u, a, h, c, n) {
						(this.b = u),
							(this.c = a),
							(this.d = h),
							(this.f = c),
							(this.g = n),
							(this.a = void 0);
					}
					async call(u, a, h, c) {
						const n = this.c
							.getWorkspace()
							.folders[0].toResource(a.relativeWorkspacePath);
						if (await this.g.exists(n))
							throw new Error(
								`File ${a.relativeWorkspacePath} already exists: cannot create new file.`,
							);
						try {
							await this.b.write(n, "");
						} catch (g) {
							throw g;
						}
						this.a = a.relativeWorkspacePath;
					}
					async finish(u, a, h, c) {
						if (!this.a)
							throw new Error("No recent path found. Cannot create new file.");
						const n = await this.f.getMagicURIForText(this.a);
						if (!n)
							throw new Error(
								`Could not find created file ${this.a} in the editor.`,
							);
						const g = await this.d.createModelReference(n),
							p = g.object.textEditorModel.getValue();
						return new t.$gz({
							relativeWorkspacePath: this.a,
							fileTotalLines: p.split(g.object.textEditorModel.getEOL()).length,
						});
					}
				};
				(e.$K8b = m),
					(e.$K8b = m =
						Ne(
							[
								j(0, i.$kZ),
								j(1, w.$Vi),
								j(2, E.$MO),
								j(3, C.$q8b),
								j(4, d.$ll),
							],
							m,
						));
			},
		)
