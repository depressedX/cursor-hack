import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/commands/common/commands.js';
import '../../extensions/common/extensions.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/async.js';
define(
			de[3319],
			he([1, 0, 5, 31, 53, 6, 3, 34, 20, 15]),
			function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*commands*/,
 w /*extensions*/,
 E /*event*/,
 C /*lifecycle*/,
 d /*log*/,
 m /*extensions*/,
 r /*async*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Svc = void 0);
				let u = class extends C.$1c {
					constructor(h, c, n) {
						super(),
							(this.g = h),
							(this.h = c),
							(this.j = n),
							(this.a = !1),
							(this.c = this.D(new E.$re())),
							(this.onWillExecuteCommand = this.c.event),
							(this.f = new E.$re()),
							(this.onDidExecuteCommand = this.f.event),
							this.h
								.whenInstalledExtensionsRegistered()
								.then((g) => (this.a = g)),
							(this.b = null);
					}
					m() {
						return (
							this.b ||
								(this.b = Promise.race([
									this.h.activateByEvent("*"),
									(0, r.$Nh)(3e4),
								])),
							this.b
						);
					}
					async executeCommand(h, ...c) {
						this.j.trace("CommandService#executeCommand", h);
						const n = `onCommand:${h}`;
						return i.$fk.getCommand(h)
							? this.h.activationEventIsDone(n)
								? this.n(h, c)
								: this.a
									? (await this.h.activateByEvent(n), this.n(h, c))
									: (this.h.activateByEvent(n), this.n(h, c))
							: (await Promise.all([
									this.h.activateByEvent(n),
									Promise.race([
										this.m(),
										E.Event.toPromise(
											E.Event.filter(
												i.$fk.onDidRegisterCommand,
												(p) => p === h,
											),
										),
									]),
								]),
								this.n(h, c));
					}
					n(h, c) {
						const n = i.$fk.getCommand(h);
						if (!n)
							return Promise.reject(new Error(`command '${h}' not found`));
						try {
							this.c.fire({ commandId: h, args: c });
							const g = this.g.invokeFunction(n.handler, ...c);
							return this.f.fire({ commandId: h, args: c }), Promise.resolve(g);
						} catch (g) {
							return Promise.reject(g);
						}
					}
				};
				(e.$Svc = u),
					(e.$Svc = u = Ne([j(0, t.$Li), j(1, w.$q2), j(2, d.$ik)], u)),
					(0, m.$lK)(i.$ek, u, m.InstantiationType.Delayed);
			},
		),
		