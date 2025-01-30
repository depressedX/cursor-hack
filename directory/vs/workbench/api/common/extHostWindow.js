import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/network.js';
import '../../../base/common/strings.js';
import '../../../base/common/uri.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHostRpcService.js';
import './extHost.protocol.js';
define(
			Pe[299],
			Ne([1, 0, 4, 16, 15, 2, 5, 21, 6]),
			function (we, t, e, r, S, N, P, I, l) {
				"use strict";
				var n;
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$gjd = t.$fjd = void 0);
				let p = class {
					static {
						n = this;
					}
					static {
						this.a = { focused: !0, active: !0 };
					}
					getState() {
						const d = this.d;
						return {
							get focused() {
								return d.focused;
							},
							get active() {
								return d.active;
							},
						};
					}
					constructor(d) {
						(this.c = new e.$re()),
							(this.onDidChangeWindowState = this.c.event),
							(this.d = n.a),
							(this.b = d.getProxy(l.$lbb.MainThreadWindow)),
							this.b
								.$getInitialState()
								.then(({ isFocused: k, isActive: g }) => {
									this.onDidChangeWindowProperty("focused", k),
										this.onDidChangeWindowProperty("active", g);
								});
					}
					$onDidChangeWindowFocus(d) {
						this.onDidChangeWindowProperty("focused", d);
					}
					$onDidChangeWindowActive(d) {
						this.onDidChangeWindowProperty("active", d);
					}
					onDidChangeWindowProperty(d, k) {
						k !== this.d[d] &&
							((this.d = { ...this.d, [d]: k }), this.c.fire(this.d));
					}
					openUri(d, k) {
						let g;
						if (typeof d == "string") {
							g = d;
							try {
								d = N.URI.parse(d);
							} catch {
								return Promise.reject(`Invalid uri - '${d}'`);
							}
						}
						return (0, S.$jf)(d.scheme)
							? Promise.reject("Invalid scheme - cannot be empty")
							: d.scheme === r.Schemas.command
								? Promise.reject(`Invalid scheme '${d.scheme}'`)
								: this.b.$openUri(d, g, k);
					}
					async asExternalUri(d, k) {
						if ((0, S.$jf)(d.scheme))
							return Promise.reject("Invalid scheme - cannot be empty");
						const g = await this.b.$asExternalUri(d, k);
						return N.URI.from(g);
					}
				};
				(t.$fjd = p),
					(t.$fjd = p = n = wt([rt(0, I.$08)], p)),
					(t.$gjd = (0, P.$Mi)("IExtHostWindow"));
			},
		),
		