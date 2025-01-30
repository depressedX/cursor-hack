import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/lifecycle/common/lifecycle.js';
import '../common/lifecycle.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/parts/sandbox/electron-sandbox/globals.js';
import '../../../../platform/log/common/log.js';
import '../common/lifecycleService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/native/common/native.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/cancellation.js';
define(
			de[3456],
			he([1, 0, 1619, 52, 21, 320, 34, 3455, 20, 110, 15, 163, 33]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*lifecycle*/,
 w /*storage*/,
 E /*globals*/,
 C /*log*/,
 d /*lifecycleService*/,
 m /*extensions*/,
 r /*native*/,
 u /*async*/,
 a /*errorMessage*/,
 h /*cancellation*/) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sdd = void 0);
				let n = class extends d.$sEb {
					static {
						c = this;
					}
					static {
						this.w = 5e3;
					}
					static {
						this.y = 800;
					}
					constructor(p, o, f) {
						super(f, o), (this.z = p), this.C();
					}
					C() {
						const p = this.z.windowId;
						E.$P.on("vscode:onBeforeUnload", async (o, f) => {
							this.r.trace(`[lifecycle] onBeforeUnload (reason: ${f.reason})`),
								(await this.F(f.reason))
									? (this.r.trace(
											"[lifecycle] onBeforeUnload prevented via veto",
										),
										this.h.fire(),
										E.$P.send(f.cancelChannel, p))
									: (this.r.trace(
											"[lifecycle] onBeforeUnload continues without veto",
										),
										(this.q = f.reason),
										E.$P.send(f.okChannel, p));
						}),
							E.$P.on("vscode:onWillUnload", async (o, f) => {
								this.r.trace(`[lifecycle] onWillUnload (reason: ${f.reason})`),
									await this.H(f.reason),
									this.f.fire(),
									E.$P.send(f.replyChannel, p);
							});
					}
					async F(p) {
						const o = this.r,
							f = [],
							b = new Set();
						let s, l;
						this.b.fire({
							reason: p,
							veto($, v) {
								f.push($),
									$ === !0
										? o.info(`[lifecycle]: Shutdown was prevented (id: ${v})`)
										: $ instanceof Promise &&
											(b.add(v),
											$.then((S) => {
												S === !0 &&
													o.info(
														`[lifecycle]: Shutdown was prevented (id: ${v})`,
													);
											}).finally(() => b.delete(v)));
							},
							finalVeto($, v) {
								if (!s) (s = $), (l = v);
								else
									throw new Error(
										`[lifecycle]: Final veto is already defined (id: ${v})`,
									);
							},
						});
						const y = (0, u.$Oh)(() => {
							o.warn(
								`[lifecycle] onBeforeShutdown is taking a long time, pending operations: ${Array.from(b).join(", ")}`,
							);
						}, c.w);
						try {
							let $ = await (0, t.$G4c)(f, (v) => this.G(v, p));
							if ($) return $;
							if (s)
								try {
									b.add(l),
										($ = await s()),
										$ &&
											o.info(
												`[lifecycle]: Shutdown was prevented by final veto (id: ${l})`,
											);
								} catch (v) {
									($ = !0), this.G(v, p);
								}
							return $;
						} finally {
							y.dispose();
						}
					}
					G(p, o) {
						this.r.error(
							`[lifecycle]: Error during before-shutdown phase (error: ${(0, a.$xj)(p)})`,
						),
							this.g.fire({ reason: o, error: p });
					}
					async H(p) {
						const o = [],
							f = [],
							b = new Set(),
							s = new h.$Ce();
						this.c.fire({
							reason: p,
							token: s.token,
							joiners: () => Array.from(b.values()),
							join(y, $) {
								if ((b.add($), $.order === i.WillShutdownJoinerOrder.Last)) {
									const v = typeof y == "function" ? y : () => y;
									f.push(() => v().finally(() => b.delete($)));
								} else {
									const v = typeof y == "function" ? y() : y;
									v.finally(() => b.delete($)), o.push(v);
								}
							},
							force: () => {
								s.dispose(!0);
							},
						});
						const l = (0, u.$Oh)(() => {
							this.r.warn(
								`[lifecycle] onWillShutdown is taking a long time, pending operations: ${Array.from(
									b,
								)
									.map((y) => y.id)
									.join(", ")}`,
							);
						}, c.y);
						try {
							await (0, u.$Ah)(u.Promises.settled(o), s.token);
						} catch (y) {
							this.r.error(
								`[lifecycle]: Error during will-shutdown phase in default joiners (error: ${(0, a.$xj)(y)})`,
							);
						}
						try {
							await (0, u.$Ah)(u.Promises.settled(f.map((y) => y())), s.token);
						} catch (y) {
							this.r.error(
								`[lifecycle]: Error during will-shutdown phase in last joiners (error: ${(0, a.$xj)(y)})`,
							);
						}
						l.dispose();
					}
					shutdown() {
						return this.z.closeWindow();
					}
				};
				(e.$sdd = n),
					(e.$sdd = n = c = Ne([j(0, r.$y7c), j(1, w.$lq), j(2, C.$ik)], n)),
					(0, m.$lK)(i.$n6, n, m.InstantiationType.Eager);
			},
		),
		