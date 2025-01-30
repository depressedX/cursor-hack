import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/common/actions.js';
import './logsActions.js';
import '../../../common/contributions.js';
import '../../../../platform/files/common/files.js';
import '../../../services/output/common/output.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/log/common/log.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/event.js';
import '../../../services/log/common/logConstants.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import './defaultLogLevels.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/map.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../base/common/network.js';
define(
			de[3523],
			he([
				1, 0, 4, 30, 99, 11, 1852, 55, 22, 297, 3, 34, 52, 5, 6, 705, 15, 29,
				1019, 8, 59, 68, 23,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*platform*/,
				w /*actionCommonCategories*/,
				E /*actions*/,
				C /*logsActions*/,
				d /*contributions*/,
				m /*files*/,
				r /*output*/,
				u /*lifecycle*/,
				a /*log*/,
				h /*lifecycle*/,
				c /*instantiation*/,
				n /*event*/,
				g /*logConstants*/,
				p /*async*/,
				o /*errors*/,
				f /*defaultLogLevels*/,
				b /*contextkey*/,
				s /*map*/,
				l /*uriIdentity*/,
				y /*network*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: C.$HMc.ID,
									title: C.$HMc.TITLE,
									category: w.$ck.Developer,
									f1: !0,
								});
							}
							run(S) {
								return S.get(c.$Li)
									.createInstance(C.$HMc, C.$HMc.ID, C.$HMc.TITLE.value)
									.run();
							}
						},
					),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "workbench.action.setDefaultLogLevel",
									title: t.localize2(7422, "Set Default Log Level"),
									category: w.$ck.Developer,
								});
							}
							run(S, I, T) {
								return S.get(f.$GMc).setDefaultLogLevel(I, T);
							}
						},
					);
				let $ = class extends u.$1c {
					constructor(I, T, P, k, L) {
						super(),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.j = k),
							(this.m = L),
							(this.a = new s.$Lc()),
							(this.b = i.$Io.as(r.$p8.OutputChannels)),
							(this.c = this.D(new u.$0c()));
						const D = a.$Ak.bindTo(P);
						D.set((0, a.$xk)(T.getLogLevel())),
							this.D(
								T.onDidChangeLogLevel((M) => {
									(0, a.$kk)(M) && D.set((0, a.$xk)(T.getLogLevel()));
								}),
							),
							this.n(T.getRegisteredLoggers()),
							this.D(
								T.onDidChangeLoggers(({ added: M, removed: N }) => {
									this.n(M), this.r(N);
								}),
							),
							this.D(
								T.onDidChangeVisibility(([M, N]) => {
									const A = T.getRegisteredLogger(M);
									A && (N ? this.s(A) : this.t(A));
								}),
							),
							this.w(),
							this.D(
								n.Event.filter(P.onDidChangeContext, (M) =>
									M.affectsSome(this.a),
								)(() => this.q()),
							);
					}
					n(I) {
						for (const T of I) {
							if (T.when) {
								const P = b.$Kj.deserialize(T.when);
								if (P) {
									for (const k of P.keys()) this.a.add(k);
									if (!this.h.contextMatchesRules(P)) continue;
								}
							}
							T.hidden || this.s(T);
						}
					}
					q() {
						for (const I of this.g.getRegisteredLoggers())
							I.when &&
								(this.h.contextMatchesRules(b.$Kj.deserialize(I.when))
									? this.s(I)
									: this.t(I));
					}
					r(I) {
						for (const T of I) {
							if (T.when) {
								const P = b.$Kj.deserialize(T.when);
								if (P) for (const k of P.keys()) this.a.delete(k);
							}
							this.t(T);
						}
					}
					s(I) {
						const T = this.b.getChannel(I.id);
						if (T && this.m.extUri.isEqual(T.file, I.resource)) return;
						const P = new u.$Zc(),
							k = (0, p.$zh)(async (L) => {
								await (0, m.$Sl)(I.resource, this.j);
								try {
									await this.u(I.resource, 1, L);
									const D = this.b.getChannel(I.id),
										M =
											D?.file?.scheme === y.Schemas.vscodeRemote
												? this.g.getRegisteredLogger(D.file)
												: void 0;
									M && this.t(M);
									const N = D && I.resource.scheme === y.Schemas.vscodeRemote,
										A = N ? `${I.id}.remote` : I.id,
										R = N
											? t.localize(7421, null, I.name ?? I.id)
											: (I.name ?? I.id);
									this.b.registerChannel({
										id: A,
										label: R,
										file: I.resource,
										log: !0,
										extensionId: I.extensionId,
									}),
										P.add((0, u.$Yc)(() => this.b.removeChannel(A))),
										M && this.s(M);
								} catch (D) {
									(0, o.$8)(D) ||
										this.f.error(
											"Error while registering log channel",
											I.resource.toString(),
											(0, o.$bb)(D),
										);
								}
							});
						P.add((0, u.$Yc)(() => k.cancel())),
							this.c.set(I.resource.toString(), P);
					}
					t(I) {
						this.c.deleteAndDispose(I.resource.toString());
					}
					async u(I, T, P) {
						if (!(await this.j.exists(I))) {
							if (P.isCancellationRequested) throw new o.$9();
							if (T > 10)
								throw new Error(
									"Timed out while waiting for file to be created",
								);
							this.f.debug(
								"[Registering Log Channel] File does not exist. Waiting for 1s to retry.",
								I.toString(),
							),
								await (0, p.$Nh)(1e3, P),
								await this.u(I, T + 1, P);
						}
					}
					w() {
						this.D(
							(0, E.$4X)(
								class extends E.$3X {
									constructor() {
										super({
											id: g.$0Sb,
											title: t.localize2(7423, "Show Window Log"),
											category: w.$ck.Developer,
											f1: !0,
										});
									}
									async run(T) {
										T.get(r.$o8).showChannel(g.$9Sb);
									}
								},
							),
						);
					}
				};
				$ = Ne(
					[j(0, a.$ik), j(1, a.$jk), j(2, b.$6j), j(3, m.$ll), j(4, l.$Vl)],
					$,
				);
				let v = class {
					constructor(I) {
						I.migrateLogLevels();
					}
				};
				(v = Ne([j(0, f.$GMc)], v)),
					i.$Io
						.as(d.Extensions.Workbench)
						.registerWorkbenchContribution($, h.LifecyclePhase.Restored),
					i.$Io
						.as(d.Extensions.Workbench)
						.registerWorkbenchContribution(v, h.LifecyclePhase.Eventually);
			},
		),
		