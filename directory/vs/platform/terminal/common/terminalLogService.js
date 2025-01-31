import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/event.js';
import '../../../nls.js';
import '../../log/common/log.js';
import '../../workspace/common/workspace.js';
import '../../environment/common/environment.js';
import '../../../base/common/resources.js';
define(
			de[2890],
			he([1, 0, 3, 6, 4, 34, 25, 113, 19]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*event*/,
 w /*nls*/,
 E /*log*/,
 C /*workspace*/,
 d /*environment*/,
 m /*resources*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cUc = void 0);
				let r = class extends t.$1c {
					get onDidChangeLogLevel() {
						return this.a.onDidChangeLogLevel;
					}
					constructor(a, h, c) {
						super(),
							(this.c = a),
							(this.a = this.c.createLogger(
								(0, m.$nh)(c.logsHome, "terminal.log"),
								{ id: "terminal", name: (0, w.localize)(2090, null) },
							)),
							this.D(
								i.Event.runAndSubscribe(h.onDidChangeWorkspaceFolders, () => {
									this.b = h.getWorkspace().id.substring(0, 7);
								}),
							);
					}
					getLevel() {
						return this.a.getLevel();
					}
					setLevel(a) {
						this.a.setLevel(a);
					}
					flush() {
						this.a.flush();
					}
					trace(a, ...h) {
						this.a.trace(this.f(a), h);
					}
					debug(a, ...h) {
						this.a.debug(this.f(a), h);
					}
					info(a, ...h) {
						this.a.info(this.f(a), h);
					}
					warn(a, ...h) {
						this.a.warn(this.f(a), h);
					}
					error(a, ...h) {
						if (a instanceof Error) {
							this.a.error(this.f(""), a, h);
							return;
						}
						this.a.error(this.f(a), h);
					}
					f(a) {
						return this.a.getLevel() === E.LogLevel.Trace
							? `[${this.b}] ${a}`
							: a;
					}
				};
				(e.$cUc = r),
					(e.$cUc = r = Ne([j(0, E.$jk), j(1, C.$Vi), j(2, d.$Ti)], r));
			},
		)
