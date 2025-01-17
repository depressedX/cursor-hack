import '../../../../../require.js';
import '../../../../../exports.js';
import './terminal.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './terminalInstance.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/event.js';
import '../common/terminalContextKey.js';
import '../../../../platform/registry/common/platform.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../base/common/async.js';
define(
			de[4373],
			he([1, 0, 107, 20, 3, 117, 5, 1074, 8, 6, 237, 30, 78, 15]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sVc = void 0);
				let n = class extends w.$1c {
					get onDidCreateInstance() {
						return this.f.event;
					}
					constructor(p, o, f) {
						super(),
							(this.g = p),
							(this.h = o),
							(this.c = new Map()),
							(this.f = this.D(new r.$re())),
							(this.a = u.TerminalContextKeys.shellType.bindTo(this.h)),
							(this.b = u.TerminalContextKeys.inTerminalRunCommandPicker.bindTo(
								this.h,
							));
						for (const b of [void 0, f.remoteAuthority]) {
							const { promise: s, resolve: l } = (0, c.$Fh)();
							this.c.set(b, { promise: s, resolve: l });
						}
					}
					createInstance(p, o) {
						const f = this.convertProfileToShellLaunchConfig(p),
							b = this.g.createInstance(d.$oVc, this.a, this.b, f);
						return (b.target = o), this.f.fire(b), b;
					}
					convertProfileToShellLaunchConfig(p, o) {
						if (p && "profileName" in p) {
							const f = p;
							return f.path
								? {
										executable: f.path,
										args: f.args,
										env: f.env,
										icon: f.icon,
										color: f.color,
										name: f.overrideName ? f.profileName : void 0,
										cwd: o,
									}
								: p;
						}
						return p ? (o && (p.cwd = o), p) : {};
					}
					async getBackend(p) {
						let o = a.$Io.as(E.$WJ.Backend).getTerminalBackend(p);
						return (
							o ||
								(await this.c.get(p)?.promise,
								(o = a.$Io.as(E.$WJ.Backend).getTerminalBackend(p))),
							o
						);
					}
					getRegisteredBackends() {
						return a.$Io.as(E.$WJ.Backend).backends.values();
					}
					didRegisterBackend(p) {
						this.c.get(p)?.resolve();
					}
				};
				(e.$sVc = n),
					(e.$sVc = n = Ne([j(0, C.$Li), j(1, m.$6j), j(2, h.$r8)], n)),
					(0, i.$lK)(t.$mIb, n, i.InstantiationType.Delayed);
			},
		),
		