import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/extensions/common/extensions.js';
define(de[829], he([1, 0, 6, 3, 5, 53]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$M2 = e.$L2 = void 0),
				(e.$L2 = (0, w.$Mi)("chatSlashCommandService"));
			let C = class extends i.$1c {
				constructor(m) {
					super(),
						(this.f = m),
						(this.a = new Map()),
						(this.b = this.D(new t.$re())),
						(this.onDidChangeCommands = this.b.event);
				}
				dispose() {
					super.dispose(), this.a.clear();
				}
				registerSlashCommand(m, r) {
					if (this.a.has(m.command))
						throw new Error(
							`Already registered a command with id ${m.command}}`,
						);
					return (
						this.a.set(m.command, { data: m, command: r }),
						this.b.fire(),
						(0, i.$Yc)(() => {
							this.a.delete(m.command) && this.b.fire();
						})
					);
				}
				getCommands(m) {
					return Array.from(this.a.values(), (r) => r.data).filter((r) =>
						r.locations.includes(m),
					);
				}
				hasCommand(m) {
					return this.a.has(m);
				}
				async executeCommand(m, r, u, a, h, c) {
					const n = this.a.get(m);
					if (!n) throw new Error("No command with id ${id} NOT registered");
					if (
						(n.command || (await this.f.activateByEvent(`onSlash:${m}`)),
						!n.command)
					)
						throw new Error(`No command with id ${m} NOT resolved`);
					return await n.command(r, u, a, h, c);
				}
			};
			(e.$M2 = C), (e.$M2 = C = Ne([j(0, E.$q2)], C));
		}),
		