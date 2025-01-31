import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/uri.js';
import './notebookCommon.js';
import './notebookEditorModel.js';
import '../../../../base/common/lifecycle.js';
import './notebookService.js';
import '../../../../base/common/event.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../base/common/map.js';
import '../../../services/workingCopy/common/fileWorkingCopyManager.js';
import '../../../../base/common/network.js';
import './notebookProvider.js';
import '../../../../base/common/types.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/telemetry/common/telemetry.js';
import './notebookLoggingService.js';
define(
			de[3912],
			he([
				1, 0, 5, 9, 70, 1343, 3, 161, 6, 53, 68, 59, 3911, 23, 1849, 28, 33, 10,
				32, 557,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*uri*/,
 w /*notebookCommon*/,
 E /*notebookEditorModel*/,
 C /*lifecycle*/,
 d /*notebookService*/,
 m /*event*/,
 r /*extensions*/,
 u /*uriIdentity*/,
 a /*map*/,
 h /*fileWorkingCopyManager*/,
 c /*network*/,
 n /*notebookProvider*/,
 g /*types*/,
 p /*cancellation*/,
 o /*configuration*/,
 f /*telemetry*/,
 b /*notebookLoggingService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qFc = void 0);
				let s = class extends C.$6c {
					constructor($, v, S, I, T) {
						super(),
							(this.r = $),
							(this.s = v),
							(this.t = S),
							(this.u = I),
							(this.w = T),
							(this.f = new C.$Zc()),
							(this.g = new Map()),
							(this.h = new Map()),
							(this.j = new m.$re()),
							(this.onDidSaveNotebook = this.j.event),
							(this.m = new m.$re()),
							(this.onDidChangeDirty = this.m.event),
							(this.n = new a.$Gc()),
							(this.q = new Set());
					}
					dispose() {
						this.f.dispose(),
							this.j.dispose(),
							this.m.dispose(),
							(0, C.$Vc)(this.h.values()),
							(0, C.$Vc)(this.g.values());
					}
					isDirty($) {
						return this.n.get($) ?? !1;
					}
					async b($, v, S, I, T) {
						this.q.delete($);
						const P = i.URI.parse($),
							k = w.$66.create(v);
						let L = this.g.get(k);
						if (!L) {
							const R = new E.$Ppc(v, this.s, this.t, this.u, this.w);
							(L = this.r.createInstance(h.$Mpc, k, R, R)), this.g.set(k, L);
						}
						const D =
								T ||
								(v === "interactive" &&
									this.t.getValue(w.$56.InteractiveWindowPromptToSave) !== !0),
							N = await this.r
								.createInstance(E.$Npc, P, S, v, L, D)
								.load({ limits: I });
						let A;
						return (
							this.h.set(
								N,
								(0, C.$Xc)(
									N.onDidSave(() => this.j.fire(N.resource)),
									N.onDidChangeDirty(() => {
										const R = N.isDirty();
										this.n.set(N.resource, R),
											R && !A
												? (A = this.acquire($, v))
												: A && (A.dispose(), (A = void 0)),
											this.m.fire(N);
									}),
									(0, C.$Yc)(() => A?.dispose()),
								),
							),
							N
						);
					}
					c($, v) {
						this.q.add($),
							(async () => {
								try {
									const S = await v;
									if (
										!this.q.has($) ||
										(S instanceof E.$Npc && (await S.canDispose()),
										!this.q.has($))
									)
										return;
									this.h.get(S)?.dispose(), this.h.delete(S), S.dispose();
								} catch (S) {
									this.w.error(
										"NotebookModelCollection",
										"FAILED to destory notebook - " + S,
									);
								} finally {
									this.q.delete($);
								}
							})();
					}
				};
				s = Ne(
					[j(0, t.$Li), j(1, d.$MIb), j(2, o.$gj), j(3, f.$km), j(4, b.$P2b)],
					s,
				);
				let l = class {
					constructor($, v, S, I) {
						(this.c = v),
							(this.d = S),
							(this.e = I),
							(this.b = new m.$te()),
							(this.onWillFailWithConflict = this.b.event),
							(this.a = $.createInstance(s)),
							(this.onDidSaveNotebook = this.a.onDidSaveNotebook),
							(this.onDidChangeDirty = this.a.onDidChangeDirty);
					}
					dispose() {
						this.a.dispose();
					}
					isDirty($) {
						return this.a.isDirty($);
					}
					f($) {
						const v = this.c.getContributedNotebookType((0, g.$wg)($));
						if (!v) throw new Error("UNKNOWN notebook type: " + $);
						const S = n.$LIb.possibleFileEnding(v.selectors) ?? "";
						for (let I = 1; ; I++) {
							const T = i.URI.from({
								scheme: c.Schemas.untitled,
								path: `Untitled-${I}${S}`,
								query: $,
							});
							if (!this.c.getNotebookTextModel(T)) return T;
						}
					}
					async g($, v) {
						if (!$ && !v)
							throw new Error(
								"Must provide at least one of resource or viewType",
							);
						if ($?.scheme === w.CellUri.scheme)
							throw new Error(
								`CANNOT open a cell-uri as notebook. Tried with ${$.toString()}`,
							);
						const S = this.e.asCanonicalUri($ ?? this.f(v)),
							I = this.c.getNotebookTextModel(S);
						if (!v)
							if (I) v = I.viewType;
							else {
								await this.d.whenInstalledExtensionsRegistered();
								const T = this.c.getContributedNotebookTypes(S);
								v =
									T.find((P) => P.priority === "exclusive")?.id ??
									T.find((P) => P.priority === "default")?.id ??
									T[0]?.id;
							}
						if (!v) throw new Error(`Missing viewType for '${S}'`);
						if (I && I.viewType !== v) {
							await this.b.fireAsync(
								{ resource: S, viewType: v },
								p.CancellationToken.None,
							);
							const T = this.c.getNotebookTextModel(S)?.viewType;
							if (T && T !== v)
								throw new Error(
									`A notebook with view type '${T}' already exists for '${S}', CANNOT create another notebook with view type ${v}`,
								);
						}
						return { resource: S, viewType: v };
					}
					async createUntitledNotebookTextModel($) {
						const v = this.e.asCanonicalUri(this.f($));
						return await this.c.createNotebookTextModel($, v);
					}
					async resolve($, v, S) {
						let I, T;
						i.URI.isUri($)
							? (I = $)
							: $.untitledResource &&
								($.untitledResource.scheme === c.Schemas.untitled
									? (I = $.untitledResource)
									: ((I = $.untitledResource.with({
											scheme: c.Schemas.untitled,
										})),
										(T = !0)));
						const P = await this.g(I, v),
							k = this.a.acquire(
								P.resource.toString(),
								P.viewType,
								T,
								S?.limits,
								S?.scratchpad,
							);
						try {
							return {
								object: await k.object,
								dispose() {
									k.dispose();
								},
							};
						} catch (L) {
							throw (k.dispose(), L);
						}
					}
				};
				(e.$qFc = l),
					(e.$qFc = l =
						Ne([j(0, t.$Li), j(1, d.$MIb), j(2, r.$q2), j(3, u.$Vl)], l));
			},
		)
