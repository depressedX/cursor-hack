import '../../../../require.js';
import '../../../../exports.js';
import '../../../editor/common/core/range.js';
import './extHostTestingPrivateApi.js';
import '../../contrib/testing/common/testId.js';
import '../../contrib/testing/common/testItemCollection.js';
import '../../contrib/testing/common/testTypes.js';
import './extHostTypeConverters.js';
import '../../../base/common/uri.js';
define(
			Pe[303],
			Ne([1, 0, 39, 291, 113, 188, 114, 17, 2]),
			function (we, t, e, r, S, N, P, I, l) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$2db = t.$1db = t.$Zdb = t.$Ydb = void 0),
					(e = tt(e)),
					(I = tt(I));
				const n = (a, u, s, f) => {
						let o = u;
						return {
							enumerable: !0,
							configurable: !1,
							get() {
								return o;
							},
							set(w) {
								if (!s(o, w)) {
									const m = o;
									(o = w), a.listener?.(f(w, m));
								}
							},
						};
					},
					p = (a, u) => a === u,
					y = {
						range: (a, u) => (a === u ? !0 : !a || !u ? !1 : a.isEqual(u)),
						label: p,
						description: p,
						sortText: p,
						busy: p,
						error: p,
						canResolveChildren: p,
						tags: (a, u) =>
							!(
								a.length !== u.length ||
								a.some((s) => !u.find((f) => s.id === f.id))
							),
					},
					d = (a) => (u) => ({ op: N.TestItemEventOp.SetProp, update: a(u) }),
					k = (a, u) => ({
						range: (() => {
							let s;
							const f = d((o) => ({ range: e.$iL.lift(I.Range.from(o)) }));
							return {
								enumerable: !0,
								configurable: !1,
								get() {
									return s;
								},
								set(o) {
									a.listener?.({ op: N.TestItemEventOp.DocumentSynced }),
										y.range(s, o) || ((s = o), a.listener?.(f(o)));
								},
							};
						})(),
						label: n(
							a,
							u,
							y.label,
							d((s) => ({ label: s })),
						),
						description: n(
							a,
							void 0,
							y.description,
							d((s) => ({ description: s })),
						),
						sortText: n(
							a,
							void 0,
							y.sortText,
							d((s) => ({ sortText: s })),
						),
						canResolveChildren: n(a, !1, y.canResolveChildren, (s) => ({
							op: N.TestItemEventOp.UpdateCanResolveChildren,
							state: s,
						})),
						busy: n(
							a,
							!1,
							y.busy,
							d((s) => ({ busy: s })),
						),
						error: n(
							a,
							void 0,
							y.error,
							d((s) => ({ error: I.MarkdownString.fromStrict(s) || null })),
						),
						tags: n(a, [], y.tags, (s, f) => ({
							op: N.TestItemEventOp.SetTags,
							new: s.map(I.TestTag.from),
							old: f.map(I.TestTag.from),
						})),
					}),
					g = (a) => {
						const u = S.$k4.fromString(a.extId),
							s = new h(
								u.controllerId,
								u.localId,
								a.label,
								l.URI.revive(a.uri) || void 0,
							);
						return (
							(s.range = I.Range.to(a.range || void 0)),
							(s.description = a.description || void 0),
							(s.sortText = a.sortText || void 0),
							(s.tags = a.tags.map((f) =>
								I.TestTag.to({ id: (0, P.$q4)(f).tagId }),
							)),
							s
						);
					},
					c = (a) => {
						let u;
						for (const s of a.tests) {
							const f = g(s.item);
							((0, r.$f9)(f).parent = u), (u = f);
						}
						return u;
					};
				t.$Ydb = c;
				class h {
					constructor(u, s, f, o) {
						if (s.includes(S.TestIdPathParts.Delimiter))
							throw new Error(
								`Test IDs may not include the ${JSON.stringify(s)} symbol`,
							);
						const w = (0, r.$e9)(this, u);
						Object.defineProperties(this, {
							id: { value: s, enumerable: !0, writable: !1 },
							uri: { value: o, enumerable: !0, writable: !1 },
							parent: {
								enumerable: !1,
								get() {
									return w.parent instanceof $ ? void 0 : w.parent;
								},
							},
							children: {
								value: (0, N.$d9)(w, r.$f9, h),
								enumerable: !0,
								writable: !1,
							},
							...k(w, f),
						});
					}
				}
				t.$Zdb = h;
				class $ extends h {
					constructor(u, s) {
						super(u, u, s, void 0), (this._isRoot = !0);
					}
				}
				t.$1db = $;
				class T extends N.$_8 {
					constructor(u, s, f) {
						super({
							controllerId: u,
							getDocumentVersion: (o) => o && f.getDocument(o)?.version,
							getApiFor: r.$f9,
							getChildren: (o) => o.children,
							root: new $(u, s),
							toITestItem: I.TestItem.from,
						});
					}
				}
				t.$2db = T;
			},
		),
		