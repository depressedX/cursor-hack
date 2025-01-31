import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import './update.js';
define(de[2878], he([1, 0, 6, 415]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*update*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$37c = e.$27c = void 0);
			class w {
				constructor(d) {
					this.a = d;
				}
				listen(d, m) {
					switch (m) {
						case "onStateChange":
							return this.a.onStateChange;
					}
					throw new Error(`Event not found: ${m}`);
				}
				call(d, m, r) {
					switch (m) {
						case "checkForUpdates":
							return this.a.checkForUpdates(r);
						case "downloadUpdate":
							return this.a.downloadUpdate();
						case "applyUpdate":
							return this.a.applyUpdate();
						case "quitAndInstall":
							return this.a.quitAndInstall();
						case "_getInitialState":
							return Promise.resolve(this.a.state);
						case "isLatestVersion":
							return this.a.isLatestVersion();
						case "_applySpecificUpdate":
							return this.a._applySpecificUpdate(r);
					}
					throw new Error(`Call not found: ${m}`);
				}
			}
			e.$27c = w;
			class E {
				get state() {
					return this.b;
				}
				set state(d) {
					(this.b = d), this.a.fire(d);
				}
				constructor(d) {
					(this.c = d),
						(this.a = new t.$re()),
						(this.onStateChange = this.a.event),
						(this.b = i.$$rb.Uninitialized),
						this.c.listen("onStateChange")((m) => (this.state = m)),
						this.c.call("_getInitialState").then((m) => (this.state = m));
				}
				checkForUpdates(d) {
					return this.c.call("checkForUpdates", d);
				}
				downloadUpdate() {
					return this.c.call("downloadUpdate");
				}
				applyUpdate() {
					return this.c.call("applyUpdate");
				}
				quitAndInstall() {
					return this.c.call("quitAndInstall");
				}
				isLatestVersion() {
					return this.c.call("isLatestVersion");
				}
				_applySpecificUpdate(d) {
					return this.c.call("_applySpecificUpdate", d);
				}
			}
			e.$37c = E;
		})
