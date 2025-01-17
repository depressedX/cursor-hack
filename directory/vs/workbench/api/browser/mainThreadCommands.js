import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/marshalling.js';
import '../../../platform/commands/common/commands.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../services/extensions/common/extensions.js';
import '../../services/extensions/common/proxyIdentifier.js';
import '../common/extHost.protocol.js';
import '../../../base/common/types.js';
define(
			de[3341],
			he([1, 0, 3, 197, 31, 101, 53, 622, 88, 28]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qmc = void 0);
				let u = class {
					constructor(c, n, g) {
						(this.d = n),
							(this.e = g),
							(this.a = new t.$0c()),
							(this.c = c.getProxy(m.$mbb.ExtHostCommands)),
							(this.b = w.$fk.registerCommand(
								"_generateCommandsDocumentation",
								() => this.f(),
							));
					}
					dispose() {
						this.a.dispose(), this.b.dispose();
					}
					async f() {
						const c = await this.c.$getContributedCommandMetadata(),
							n = w.$fk.getCommands();
						for (const [p, o] of n) o.metadata && (c[p] = o.metadata);
						const g = [];
						for (const p in c) g.push("`" + p + "` - " + a(c[p]));
						console.log(
							g.join(`
`),
						);
					}
					$registerCommand(c) {
						this.a.set(
							c,
							w.$fk.registerCommand(c, (n, ...g) =>
								this.c
									.$executeContributedCommand(c, ...g)
									.then((p) => (0, i.$ji)(p)),
							),
						);
					}
					$unregisterCommand(c) {
						this.a.deleteAndDispose(c);
					}
					$fireCommandActivationEvent(c) {
						const n = `onCommand:${c}`;
						this.e.activationEventIsDone(n) || this.e.activateByEvent(n);
					}
					async $executeCommand(c, n, g) {
						n instanceof d.$uO && (n = n.value);
						for (let p = 0; p < n.length; p++) n[p] = (0, i.$ji)(n[p]);
						if (g && n.length > 0 && !w.$fk.getCommand(c))
							throw (
								(await this.e.activateByEvent(`onCommand:${c}`),
								new Error("$executeCommand:retry"))
							);
						return this.d.executeCommand(c, ...n);
					}
					$getCommands() {
						return Promise.resolve([...w.$fk.getCommands().keys()]);
					}
				};
				(e.$Qmc = u),
					(e.$Qmc = u =
						Ne(
							[
								(0, E.$tmc)(m.$lbb.MainThreadCommands),
								j(1, w.$ek),
								j(2, C.$q2),
							],
							u,
						));
				function a(h) {
					if (typeof h == "string") return h;
					{
						const n = [
							(0, r.$lg)(h.description)
								? h.description
								: h.description.original,
						];
						if (
							(n.push(`

`),
							h.args)
						)
							for (const g of h.args)
								n.push(`* _${g.name}_ - ${g.description || ""}
`);
						return (
							h.returns && n.push(`* _(returns)_ - ${h.returns}`),
							n.push(`

`),
							n.join("")
						);
					}
				}
			},
		),
		