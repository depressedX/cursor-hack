import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../contrib/search/browser/anythingQuickAccess.js';
import '../../../../contrib/ui/browser/hooks/useEverythingSearch/utils.js';
import '../../../../contrib/ui/browser/hooks/useEverythingSearch/utils.js';
import './toolsV2HandlerRegistryService.js';
import '../../../search/common/search.js';
import '../../../../../base/common/path.js';
import '../../../../contrib/aiFeatureStatusService/browser/aiFeatureStatusService.js';
define(
			de[4361],
			he([1, 0, 124, 33, 3, 22, 5, 25, 721, 819, 819, 398, 186, 54, 287]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9yc = void 0);
				let g = class extends a.$Xyc {
					constructor(f, b, s, l, y) {
						super(),
							(this.b = f),
							(this.c = b),
							(this.d = s),
							(this.e = l),
							(this.f = y),
							(this.a = this.e.createInstance(m.$S9b));
					}
					async call(f, b, s, l) {
						if (!f)
							throw new Error(
								"No fileSearch parameters provided. Need to give a query.",
							);
						const y = "fileSearchToolMaxResults";
						this.f.maybeRefreshConfig(y);
						const $ = this.f.getCachedConfig(y) ?? 10,
							v = new i.$Ce(),
							S = await this.a.doGetPicksPublic(
								f.query,
								{
									enableEditorSymbolSearch: !0,
									excludeNotepads: !0,
									excludeSemanticSearch: !0,
									excludeCursorIgnore: !0,
								},
								new w.$Zc(),
								v.token,
							);
						let I = [];
						if ((0, u.$R_b)(S)) {
							const [P, k] = await Promise.all([
								Promise.resolve(S.picks),
								S.additionalPicks,
							]);
							I = [...p(P), ...p(k)];
						} else if (S instanceof Promise) {
							const P = await S;
							I = p(P);
						} else I = p(S);
						const T = new t.$Xx({
							files: I.slice(0, $).map((P) => ({ uri: P.uri.fsPath })),
							numResults: I.length,
							limitHit: I.length >= $,
						});
						return console.log("[fileSearchHandler] result:", T), T;
					}
				};
				(e.$9yc = g),
					(e.$9yc = g =
						Ne(
							[
								j(0, E.$ll),
								j(1, d.$Vi),
								j(2, h.$p7),
								j(3, C.$Li),
								j(4, n.$H7b),
							],
							g,
						));
				function p(o) {
					return (
						(0, r.$S_b)(o) && (o = o.items),
						o
							.filter((f) => "resource" in f && f.resource !== void 0)
							.map((f) => ({
								uri: f.resource,
								fileName: (0, c.$sc)(f.resource.fsPath),
								isCurrentFile: !1,
								labelMatches: f.highlights?.label || [],
								descriptionMatches: f.highlights?.description || [],
							}))
					);
				}
			},
		),
		