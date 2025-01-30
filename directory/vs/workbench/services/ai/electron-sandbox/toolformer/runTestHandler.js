import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../common/toolformerHandlerRegistryService.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/instantiation/common/extensions.js';
import '../runTestService.js';
define(
			de[3980],
			he([1, 0, 241, 124, 1011, 5, 20, 1887]),
			function (ce /*require*/,
 e /*exports*/,
 t /*magicLinkService*/,
 i /*tools_pb*/,
 w /*toolformerHandlerRegistryService*/,
 E /*instantiation*/,
 C /*extensions*/,
 d /*runTestService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$dd = e.$0dd = void 0),
					(e.$0dd = (0, E.$Mi)("runTestHandlerService"));
				let m = class {
					constructor(u, a, h) {
						(this.a = u),
							(this.b = a),
							(this.c = h),
							this.b.registerInstantiatedHandler(
								i.BuiltinTool.RUN_TEST,
								"runTestParams",
								"runTestResult",
								this,
							);
					}
					async call(u, a, h, c) {}
					async finish(u, a, h, c) {
						if (!a)
							throw new Error(
								"No test parameters provided. Need to give at least the relative workspace path.",
							);
						if (a.relativeWorkspacePath === void 0)
							throw new Error(
								"Need to provide the relative workspace path to know where to run the test.",
							);
						const n = await this.a.getMagicURIForText(a.relativeWorkspacePath);
						if (!n)
							throw new Error(
								`Could not find file ${a.relativeWorkspacePath} in the workspace.`,
							);
						const g = await this.c.runTest({
							testFileURI: n,
							testName: a.testName,
							abortController: h,
						});
						return new i.$Cz({ result: g });
					}
				};
				(e.$$dd = m),
					(e.$$dd = m = Ne([j(0, t.$q8b), j(1, w.$s8b), j(2, d.$8dd)], m)),
					(0, C.$lK)(e.$0dd, m, C.InstantiationType.Eager);
			},
		),
		