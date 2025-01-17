import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/fastsearch_pb.js';
import '../../../../../proto/aiserver/v1/fastsearch_pb.js';
import '../../../../../proto/aiserver/v1/fastsearch_connectweb.js';
import '../../../../base/common/lifecycle.js';
import '../../cursorAuth/browser/authenticationService.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import './cursorCredsService.js';
import '../../../../platform/product/common/productService.js';
import '../../editor/common/editorGroupsService.js';
import '../../../../base/common/uri.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../editor/common/editorService.js';
import '../../../../base/common/network.js';
import '../../../../editor/common/core/position.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/cancellation.js';
import './fastContextService.js';
import '../../../../editor/common/core/range.js';
import './backendClient.js';
define(
			de[3643],
			he([
				1, 0, 1109, 1109, 1482, 3, 232, 45, 477, 62, 66, 9, 25, 18, 23, 48, 20,
				5, 33, 400, 17, 285,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lcc = e.$Kcc = void 0),
					(e.$Kcc = (0, o.$Mi)("IFastSemSearchService"));
				let y = class extends E.$1c {
					constructor(v, S, I, T, P, k, L, D, M) {
						super(),
							(this.b = v),
							(this.c = S),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.j = k),
							(this.m = L),
							(this.n = D),
							(this.q = M),
							(this.a = this.q.createInstance(l.$q6b, { service: w.$b_ }));
					}
					async startFastSearch(v) {
						const S = await this.g
								.getGroups(u.GroupsOrder.MOST_RECENTLY_ACTIVE)
								.map((L) => L.editors.map((D) => D.resource))
								.flat()
								.filter((L) => L !== void 0)
								.map((L) => this.h.asRelativePath(L))
								.map((L) => new t.$6$({ relativeWorkspacePath: L })),
							P =
								(this.getLastActiveFileEditor()?.getControl()).getPosition() ??
								new g.$hL(1, 1);
						let k;
						try {
							k = await (await this.a.get()).startFastSearch({
								uuid: v,
								cursorPosition: P,
								openTabs: S,
							});
						} catch {
							k = new i.$8$({
								response: { case: "ready", value: new t.$9$({ ready: !0 }) },
							});
						}
						return k;
					}
					getLastActiveFileEditor() {
						let v = this.j.activeEditorPane;
						return v?.input?.resource?.scheme !== n.Schemas.aiChat, v;
					}
					r(v) {
						const S = new AbortController();
						return (
							v.onCancellationRequested(() => {
								S.abort();
							}),
							S
						);
					}
					async fastSearch(v, S, I) {
						return await this.internalPureFastSearch(v, S, I);
					}
					async postProcessSearchResults(v) {
						const S = v.fileChunks
								.map((k) => k.chunk?.relativeWorkspacePath)
								.filter((k) => k !== void 0),
							I = new f.$Ce();
						let T = new Map();
						await Promise.allSettled(
							S.map(async (k) => {
								const L = await this.n.getApproximateRangeOfImports(
									a.URI.file(k),
									I.token,
								);
								L && T.set(k, L);
							}),
						);
						const P = this.s(v, T);
						return v;
					}
					s(v, S) {
						const I = v.fileChunks,
							T = (L) => {
								const D = S.get(L.chunk?.relativeWorkspacePath ?? "");
								if (D) {
									const M = new s.$iL(
										L.chunk?.range?.startLine ?? 1,
										1,
										(L.chunk?.range?.endLineInclusive ?? 2) - 1,
										1,
									);
									return s.$iL.containsRange(D, M);
								}
								return !0;
							},
							P = I.filter((L) => !T(L));
						let k = v;
						return (k.fileChunks = P), k;
					}
					async internalPureFastSearch(v, S, I) {
						const T = await this.a.get(),
							P = this.r(I);
						try {
							return await T.fastSearch(
								{ uuid: v, query: S },
								{ signal: P.signal },
							);
						} catch {
							return new i.$_$({ fileChunks: [] });
						}
					}
				};
				(e.$Lcc = y),
					(e.$Lcc = y =
						Ne(
							[
								j(0, C.$x6b),
								j(1, d.$0zb),
								j(2, r.$Bk),
								j(3, u.$EY),
								j(4, h.$Vi),
								j(5, c.$IY),
								j(6, m.$i6b),
								j(7, b.$26b),
								j(8, o.$Li),
							],
							y,
						)),
					(0, p.$lK)(e.$Kcc, y, p.InstantiationType.Delayed);
			},
		),
		