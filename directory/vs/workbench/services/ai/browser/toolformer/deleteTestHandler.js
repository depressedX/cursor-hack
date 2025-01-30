import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../textfile/common/textfiles.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../platform/markers/common/markers.js';
define(
			de[3962],
			he([1, 0, 85, 25, 42, 241, 22, 124, 17, 90]),
			function (ce /*require*/,
 e /*exports*/,
 t /*textfiles*/,
 i /*workspace*/,
 w /*resolverService*/,
 E /*magicLinkService*/,
 C /*files*/,
 d /*tools_pb*/,
 m /*range*/,
 r /*markers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$x8b = void 0);
				let u = class {
					constructor(h, c, n, g, p, o) {
						(this.a = h),
							(this.b = c),
							(this.c = n),
							(this.d = g),
							(this.e = p),
							(this.f = o);
					}
					async call(h, c, n, g) {}
					async finish(h, c, n, g) {
						if (!c)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						if (c.relativeWorkspacePath === void 0)
							throw new Error("Need to give the path to know where to edit.");
						const p = await this.d.getMagicURIForText(c.relativeWorkspacePath);
						if (!p)
							throw new Error(
								`Could not find file ${c.relativeWorkspacePath} in the workspace.`,
							);
						if (c.testName === void 0)
							return await this.e.del(p), new d.$Hz({});
						let o;
						try {
							o = await this.c.createModelReference(p);
							const b = o.object.textEditorModel
								.getValue()
								.split(o.object.textEditorModel.getEOL());
							let s;
							const l = b.findIndex((y) =>
								y.includes(`@cursor-agent:test-begin:${c.testName}`),
							);
							if (l !== -1) {
								const y = b.findIndex(
									($, v) =>
										v > l && $.includes(`@cursor-agent:test-end:${c.testName}`),
								);
								if (y === -1)
									throw new Error(
										`Could not find end of test ${c.testName} in file ${c.relativeWorkspacePath}.`,
									);
								s = new m.$iL(l + 1, 1, y + 2, 1);
							} else
								throw new Error(
									`Could not find test ${c.testName} in file ${c.relativeWorkspacePath}.`,
								);
							return (
								o.object.textEditorModel.pushEditOperations(
									null,
									[{ range: s, text: "" }],
									() => null,
								),
								new d.$Hz({})
							);
						} finally {
							o?.dispose();
						}
					}
				};
				(e.$x8b = u),
					(e.$x8b = u =
						Ne(
							[
								j(0, t.$kZ),
								j(1, i.$Vi),
								j(2, w.$MO),
								j(3, E.$q8b),
								j(4, C.$ll),
								j(5, r.$aM),
							],
							u,
						));
			},
		),
		