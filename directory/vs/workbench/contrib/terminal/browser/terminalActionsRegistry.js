import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../browser/actions/workspaceCommands.js';
import '../../../../nls.js';
define(de[1948], he([1, 0, 633, 4]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$vUc = void 0),
				(e.$wUc = E);
			class w {
				static {
					this.hasRegisteredActions = !1;
				}
				static {
					this.registeredActions = [];
				}
				static registerTerminalAction(d, m) {
					if (this.registeredActions.find(([r, u]) => r === d)) {
						console.error(`Editor action with id ${d} already registered`);
						return;
					}
					this.registeredActions.push([d, m]);
				}
			}
			e.$vUc = w;
			async function E(C, d, m, r) {
				switch (r.config.splitCwd) {
					case "workspaceRoot":
						if (d !== void 0 && m !== void 0) {
							if (d.length === 1) return d[0].uri;
							if (d.length > 1) {
								const u = { placeHolder: (0, i.localize)(10051, null) },
									a = await m.executeCommand(t.$qRb, [u]);
								return a ? Promise.resolve(a.uri) : void 0;
							}
						}
						return "";
					case "initial":
						return C.getInitialCwd();
					case "inherited":
						return C.getCwd();
				}
			}
		}),
		