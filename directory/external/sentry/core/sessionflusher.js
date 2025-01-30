import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
import './currentScopes.js';
define(de[1443], he([1, 0, 80, 234]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*currentScopes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.SessionFlusher = void 0);
			class w {
				constructor(C, d) {
					(this._client = C),
						(this.flushTimeout = 60),
						(this._pendingAggregates = new Map()),
						(this._isEnabled = !0),
						(this._intervalId = setInterval(
							() => this.flush(),
							this.flushTimeout * 1e3,
						)),
						this._intervalId.unref && this._intervalId.unref(),
						(this._sessionAttrs = d);
				}
				flush() {
					const C = this.getSessionAggregates();
					C.aggregates.length !== 0 &&
						((this._pendingAggregates = new Map()),
						this._client.sendSession(C));
				}
				getSessionAggregates() {
					const C = Array.from(this._pendingAggregates.values()),
						d = { attrs: this._sessionAttrs, aggregates: C };
					return (0, t.dropUndefinedKeys)(d);
				}
				close() {
					clearInterval(this._intervalId), (this._isEnabled = !1), this.flush();
				}
				incrementSessionStatusCount() {
					if (!this._isEnabled) return;
					const C = (0, i.getIsolationScope)(),
						d = C.getRequestSession();
					d &&
						d.status &&
						(this._incrementSessionStatusCount(d.status, new Date()),
						C.setRequestSession(void 0));
				}
				_incrementSessionStatusCount(C, d) {
					const m = new Date(d).setSeconds(0, 0);
					let r = this._pendingAggregates.get(m);
					switch (
						(r ||
							((r = { started: new Date(m).toISOString() }),
							this._pendingAggregates.set(m, r)),
						C)
					) {
						case "errored":
							return (r.errored = (r.errored || 0) + 1), r.errored;
						case "ok":
							return (r.exited = (r.exited || 0) + 1), r.exited;
						default:
							return (r.crashed = (r.crashed || 0) + 1), r.crashed;
					}
				}
			}
			e.SessionFlusher = w;
		}),
		