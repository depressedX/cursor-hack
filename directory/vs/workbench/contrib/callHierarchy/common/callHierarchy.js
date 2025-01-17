import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../editor/common/languageFeatureRegistry.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/core/position.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/types.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/resolverService.js';
define(
			de[978],
			he([1, 0, 33, 945, 9, 48, 24, 29, 3, 31, 28, 67, 42]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$P1 = e.$O1 = e.CallHierarchyDirection = void 0);
				var c;
				(function (o) {
					(o.CallsTo = "incomingCalls"), (o.CallsFrom = "outgoingCalls");
				})(c || (e.CallHierarchyDirection = c = {})),
					(e.$O1 = new i.$N1());
				class n {
					static async create(f, b, s) {
						const [l] = e.$O1.ordered(f);
						if (!l) return;
						const y = await l.prepareCallHierarchy(f, b, s);
						if (y)
							return new n(
								y.roots.reduce(($, v) => $ + v._sessionId, ""),
								l,
								y.roots,
								new m.$4c(y),
							);
					}
					constructor(f, b, s, l) {
						(this.id = f),
							(this.provider = b),
							(this.roots = s),
							(this.ref = l),
							(this.root = s[0]);
					}
					dispose() {
						this.ref.release();
					}
					fork(f) {
						const b = this;
						return new (class extends n {
							constructor() {
								super(b.id, b.provider, [f], b.ref.acquire());
							}
						})();
					}
					async resolveIncomingCalls(f, b) {
						try {
							const s = await this.provider.provideIncomingCalls(f, b);
							if ((0, C.$Pb)(s)) return s;
						} catch (s) {
							(0, d.$5)(s);
						}
						return [];
					}
					async resolveOutgoingCalls(f, b) {
						try {
							const s = await this.provider.provideOutgoingCalls(f, b);
							if ((0, C.$Pb)(s)) return s;
						} catch (s) {
							(0, d.$5)(s);
						}
						return [];
					}
				}
				e.$P1 = n;
				const g = new Map();
				r.$fk.registerCommand(
					"_executePrepareCallHierarchy",
					async (o, ...f) => {
						const [b, s] = f;
						(0, u.$vg)(w.URI.isUri(b)), (0, u.$vg)(E.$hL.isIPosition(s));
						let y = o.get(a.$QO).getModel(b),
							$;
						if (!y) {
							const S = await o.get(h.$MO).createModelReference(b);
							(y = S.object.textEditorModel), ($ = S);
						}
						try {
							const v = await n.create(y, s, t.CancellationToken.None);
							return v
								? (g.set(v.id, v),
									g.forEach((S, I, T) => {
										T.size > 10 && (S.dispose(), g.delete(I));
									}),
									[v.root])
								: [];
						} finally {
							$?.dispose();
						}
					},
				);
				function p(o) {
					return !0;
				}
				r.$fk.registerCommand(
					"_executeProvideIncomingCalls",
					async (o, ...f) => {
						const [b] = f;
						(0, u.$vg)(p(b));
						const s = g.get(b._sessionId);
						if (s) return s.resolveIncomingCalls(b, t.CancellationToken.None);
					},
				),
					r.$fk.registerCommand(
						"_executeProvideOutgoingCalls",
						async (o, ...f) => {
							const [b] = f;
							(0, u.$vg)(p(b));
							const s = g.get(b._sessionId);
							if (s) return s.resolveOutgoingCalls(b, t.CancellationToken.None);
						},
					);
			},
		),
		