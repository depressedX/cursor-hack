import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keybindingParser.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(de[3393], he([1, 0, 918, 8]), function (ce /*require*/,
 e /*exports*/,
 t /*keybindingParser*/,
 i /*contextkey*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ovc = e.$Nvc = void 0);
			class w {
				static writeKeybindingItem(m, r) {
					if (!r.resolvedKeybinding) return;
					const u = JSON.stringify(r.resolvedKeybinding.getUserSettingsLabel());
					m.write(`{ "key": ${E(u + ",", 25)} "command": `);
					const a = r.when ? JSON.stringify(r.when.serialize()) : "",
						h = JSON.stringify(r.command);
					a.length > 0
						? (m.write(`${h},`),
							m.writeLine(),
							m.write(`                                     "when": ${a}`))
						: m.write(`${h}`),
						r.commandArgs &&
							(m.write(","),
							m.writeLine(),
							m.write(
								`                                     "args": ${JSON.stringify(r.commandArgs)}`,
							)),
						m.write(" }");
				}
				static readUserKeybindingItem(m) {
					const r =
							"key" in m && typeof m.key == "string"
								? t.$Xpb.parseKeybinding(m.key)
								: null,
						u =
							"when" in m && typeof m.when == "string"
								? i.$Kj.deserialize(m.when)
								: void 0,
						a =
							"command" in m && typeof m.command == "string" ? m.command : null,
						h = "args" in m && typeof m.args < "u" ? m.args : void 0;
					return {
						keybinding: r,
						command: a,
						commandArgs: h,
						when: u,
						_sourceKey: "key" in m && typeof m.key == "string" ? m.key : void 0,
					};
				}
			}
			e.$Nvc = w;
			function E(d, m) {
				return d.length < m ? d + new Array(m - d.length).join(" ") : d;
			}
			class C {
				constructor() {
					(this.a = []), (this.b = "");
				}
				write(m) {
					this.b += m;
				}
				writeLine(m = "") {
					this.a.push(this.b + m), (this.b = "");
				}
				toString() {
					return (
						this.writeLine(),
						this.a.join(`
`)
					);
				}
			}
			e.$Ovc = C;
		}),
		