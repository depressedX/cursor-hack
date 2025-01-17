import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../../../editor/browser/services/simpleInlineDiffService.js';
import '../../../../../platform/markers/common/markers.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './editSimpleHandler.js';
import './editInlineDiffHandler.js';
define(
			de[3965],
			he([1, 0, 124, 42, 241, 545, 90, 5, 3964, 3963]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$E8b = void 0);
				let u = class {
					constructor(h, c, n, g, p) {
						(this.b = h),
							(this.c = c),
							(this.d = n),
							(this.e = g),
							(this.f = p),
							(this.a = {
								simple: this.f.createInstance(m.$C8b),
								inlineDiff: this.f.createInstance(r.$D8b),
							});
					}
					async call(h, c, n, g) {
						if (!c)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						switch (c.frontendEditType) {
							case t.EditParams_FrontendEditType.SIMPLE:
								return this.a.simple.call(h, c, n, g);
							case t.EditParams_FrontendEditType.INLINE_DIFFS:
								return this.a.inlineDiff.call(h, c, n, g);
							default:
								return this.a.inlineDiff.call(h, c, n, g);
						}
					}
					async finish(h, c, n, g) {
						if (!c)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						switch (c.frontendEditType) {
							case t.EditParams_FrontendEditType.SIMPLE:
								return this.a.simple.finish(h, c, n, g);
							case t.EditParams_FrontendEditType.INLINE_DIFFS:
								return this.a.inlineDiff.finish(h, c, n, g);
							default:
								return this.a.inlineDiff.finish(h, c, n, g);
						}
					}
				};
				(e.$E8b = u),
					(e.$E8b = u =
						Ne(
							[
								j(0, w.$q8b),
								j(1, i.$MO),
								j(2, E.$z8b),
								j(3, C.$aM),
								j(4, d.$Li),
							],
							u,
						));
			},
		),
		