import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/buffer.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/stopwatch.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../../platform/commands/common/commands.js';
import '../../../platform/log/common/log.js';
import './mainThreadNotebookDto.js';
import '../../contrib/notebook/common/notebookCellStatusBarService.js';
import '../../contrib/notebook/common/notebookService.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../services/extensions/common/proxyIdentifier.js';
import '../common/extHost.protocol.js';
import '../../../base/common/marshalling.js';
import '../../../base/common/arrays.js';
define(
			de[3463],
			he([
				1, 0, 76, 33, 6, 3, 162, 28, 9, 31, 34, 1027, 991, 161, 101, 622, 88,
				197, 24,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Cpc = void 0);
				let b = class {
					constructor(l, y, $, v) {
						(this.f = y),
							(this.g = $),
							(this.h = v),
							(this.a = new E.$Zc()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.b = l.getProxy(p.$mbb.ExtHostNotebook));
					}
					dispose() {
						this.a.dispose(), (0, E.$Vc)(this.c.values());
					}
					$registerNotebookSerializer(l, y, $, v, S) {
						const I = new E.$Zc();
						I.add(
							this.f.registerNotebookSerializer($, y, {
								options: v,
								dataToNotebook: async (T) => {
									const P = new C.$le();
									let k;
									if (T.byteLength === 0 && $ === "interactive")
										k = a.NotebookDto.fromNotebookDataDto({
											cells: [],
											metadata: {},
										});
									else {
										const L = await this.b.$dataToNotebook(
											l,
											T,
											i.CancellationToken.None,
										);
										k = a.NotebookDto.fromNotebookDataDto(L.value);
									}
									return (
										this.h.trace(
											`[NotebookSerializer] dataToNotebook DONE after ${P.elapsed()}ms`,
											{ viewType: $, extensionId: y.id.value },
										),
										k
									);
								},
								notebookToData: (T) => {
									const P = new C.$le(),
										k = this.b.$notebookToData(
											l,
											new g.$uO(a.NotebookDto.toNotebookDataDto(T)),
											i.CancellationToken.None,
										);
									return (
										this.h.trace(
											`[NotebookSerializer] notebookToData DONE after ${P.elapsed()}`,
											{ viewType: $, extensionId: y.id.value },
										),
										k
									);
								},
								save: async (T, P, k, L) => ({
									...(await this.b.$saveNotebook(l, T, P, k, L)),
									children: void 0,
									resource: T,
								}),
								searchInNotebooks: async (T, P, k) => {
									const L = this.f.getContributedNotebookType($);
									if (!L) return { results: [], limitHit: !1 };
									const M = L.selectors.map((B) => (B.include || B).toString());
									if (!M.length) return { results: [], limitHit: !1 };
									const N = (0, f.$Lb)([
											{ isFromSettings: !1, filenamePatterns: M },
											...(k.get($) ?? []),
										]),
										A = Array.from(k.keys()).flatMap((B) =>
											B !== $ ? (k.get(B) ?? []) : [],
										),
										R = await this.b.$searchInNotebooks(l, T, N, A, P);
									return {
										results: R.results.map((B) => ({
											resource: m.URI.revive(B.resource),
											cellResults: B.cellResults.map((z) => (0, o.$ji)(z)),
										})),
										limitHit: R.limitHit,
									};
								},
							}),
						),
							S && I.add(this.f.registerContributedNotebookType($, S)),
							this.c.set(l, I),
							this.h.trace(
								"[NotebookSerializer] registered notebook serializer",
								{ viewType: $, extensionId: y.id.value },
							);
					}
					$unregisterNotebookSerializer(l) {
						this.c.get(l)?.dispose(), this.c.delete(l);
					}
					$emitCellStatusBarEvent(l) {
						const y = this.d.get(l);
						y instanceof w.$re && y.fire(void 0);
					}
					async $registerNotebookCellStatusBarItemProvider(l, y, $) {
						const v = this,
							S = {
								async provideCellStatusBarItems(T, P, k) {
									const L = await v.b.$provideNotebookCellStatusBarItems(
										l,
										T,
										P,
										k,
									);
									return {
										items: L?.items ?? [],
										dispose() {
											L && v.b.$releaseNotebookCellStatusBarItems(L.cacheId);
										},
									};
								},
								viewType: $,
							};
						if (typeof y == "number") {
							const T = new w.$re();
							this.d.set(y, T), (S.onDidChangeStatusBarItems = T.event);
						}
						const I = this.g.registerCellStatusBarItemProvider(S);
						this.d.set(l, I);
					}
					async $unregisterNotebookCellStatusBarItemProvider(l, y) {
						const $ = (v) => {
							this.d.get(v) && (this.d.get(v)?.dispose(), this.d.delete(v));
						};
						$(l), typeof y == "number" && $(y);
					}
				};
				(e.$Cpc = b),
					(e.$Cpc = b =
						Ne(
							[
								(0, n.$tmc)(p.$lbb.MainThreadNotebook),
								j(1, c.$MIb),
								j(2, h.$Bpc),
								j(3, u.$ik),
							],
							b,
						)),
					r.$fk.registerCommand("_executeDataToNotebook", async (s, ...l) => {
						const [y, $] = l;
						(0, d.$vg)(typeof y == "string", "string"),
							(0, d.$vg)($ instanceof t.$Te, "VSBuffer");
						const S = await s.get(c.$MIb).withNotebookDataProvider(y);
						if (!(S instanceof c.$NIb)) return;
						const I = await S.serializer.dataToNotebook($);
						return new g.$uO(a.NotebookDto.toNotebookDataDto(I));
					}),
					r.$fk.registerCommand("_executeNotebookToData", async (s, ...l) => {
						const [y, $] = l;
						(0, d.$vg)(typeof y == "string", "string"),
							(0, d.$vg)(typeof $ == "object");
						const S = await s.get(c.$MIb).withNotebookDataProvider(y);
						if (!(S instanceof c.$NIb)) return;
						const I = a.NotebookDto.fromNotebookDataDto($.value);
						return await S.serializer.notebookToData(I);
					});
			},
		),
		