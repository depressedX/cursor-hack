import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../platform/terminal/common/terminal.js';
import '../common/basePty.js';
import '../../../services/remote/common/remoteAgentService.js';
define(
			de[3565],
			he([1, 0, 15, 117, 1762, 143]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*terminal*/,
 w /*basePty*/,
 E /*remoteAgentService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fUc = void 0);
				let C = class extends w.$eUc {
					constructor(m, r, u, a, h) {
						super(m, r),
							(this.r = u),
							(this.s = a),
							(this.t = h),
							(this.q = new t.$Lh());
					}
					async start() {
						if (!(await this.s.getEnvironment()))
							throw new Error("Could not fetch remote environment");
						this.t.trace("Spawning remote agent process", {
							terminalId: this.id,
						});
						const r = await this.r.start(this.id);
						return (r && "message" in r) || this.q.open(), r;
					}
					async detach(m) {
						return await this.q.wait(), this.r.detachFromProcess(this.id, m);
					}
					shutdown(m) {
						this.q.wait().then((r) => {
							this.r.shutdown(this.id, m);
						});
					}
					input(m) {
						this.c ||
							this.q.wait().then((r) => {
								this.r.input(this.id, m);
							});
					}
					processBinary(m) {
						return this.r.processBinary(this.id, m);
					}
					resize(m, r) {
						this.c ||
							(this.b.cols === m && this.b.rows === r) ||
							this.q.wait().then((u) => {
								(this.b.cols = m),
									(this.b.rows = r),
									this.r.resize(this.id, m, r);
							});
					}
					async clearBuffer() {
						await this.r.clearBuffer(this.id);
					}
					freePortKillProcess(m) {
						if (!this.r.freePortKillProcess)
							throw new Error(
								"freePortKillProcess does not exist on the local pty service",
							);
						return this.r.freePortKillProcess(m);
					}
					acknowledgeDataEvent(m) {
						this.c ||
							this.q.wait().then((r) => {
								this.r.acknowledgeDataEvent(this.id, m);
							});
					}
					async setUnicodeVersion(m) {
						return this.r.setUnicodeVersion(this.id, m);
					}
					async refreshProperty(m) {
						return this.r.refreshProperty(this.id, m);
					}
					async updateProperty(m, r) {
						return this.r.updateProperty(this.id, m, r);
					}
					handleOrphanQuestion() {
						this.r.orphanQuestionReply(this.id);
					}
				};
				(e.$fUc = C), (e.$fUc = C = Ne([j(3, E.$$m), j(4, i.$YJ)], C));
			},
		),
		