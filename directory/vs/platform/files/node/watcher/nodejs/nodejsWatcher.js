import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/glob.js';
import '../baseWatcher.js';
import '../../../../../base/common/platform.js';
import './nodejsWatcherLib.js';
import '../../../../../base/common/extpath.js';
define(
			Pe[483],
			Ne([1, 0, 4, 51, 481, 13, 482, 42]),
			function (we, t, e, r, S, N, P, I) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Tr = void 0);
				class l extends S.$Mr {
					constructor(p) {
						super(),
							(this.O = p),
							(this.onDidError = e.Event.None),
							(this.watchers = new Set());
					}
					async N(p) {
						p = this.Z(p);
						const y = [],
							d = new Set(Array.from(this.watchers));
						for (const k of p) {
							const g = this.W(k);
							g &&
							(0, r.$Nk)(g.request.excludes, k.excludes) &&
							(0, r.$Nk)(g.request.includes, k.includes)
								? d.delete(g)
								: y.push(k);
						}
						y.length &&
							this.P(
								`Request to start watching: ${y.map((k) => this.M(k)).join(",")}`,
							),
							d.size &&
								this.P(
									`Request to stop watching: ${Array.from(d)
										.map((k) => this.M(k.request))
										.join(",")}`,
								);
						for (const k of d) this.Y(k);
						for (const k of y) this.X(k);
					}
					W(p) {
						for (const y of this.watchers)
							if (
								typeof p.correlationId == "number" ||
								typeof y.request.correlationId == "number"
							) {
								if (y.request.correlationId === p.correlationId) return y;
							} else if ((0, I.$Kg)(y.request.path, p.path, !N.$n)) return y;
					}
					X(p) {
						const y = new P.$Rr(
								p,
								this.O,
								(k) => this.a.fire(k),
								() => this.c.fire(p),
								(k) => this.b.fire(k),
								this.R,
							),
							d = { request: p, instance: y };
						this.watchers.add(d);
					}
					async stop() {
						await super.stop();
						for (const p of this.watchers) this.Y(p);
					}
					Y(p) {
						this.P("stopping file watcher", p),
							this.watchers.delete(p),
							p.instance.dispose();
					}
					Z(p) {
						const y = new Map();
						for (const d of p) {
							const k = N.$n ? d.path : d.path.toLowerCase();
							let g = y.get(d.correlationId);
							g || ((g = new Map()), y.set(d.correlationId, g)),
								g.has(k) &&
									this.P(
										`ignoring a request for watching who's path is already watched: ${this.M(d)}`,
									),
								g.set(k, d);
						}
						return Array.from(y.values())
							.map((d) => Array.from(d.values()))
							.flat();
					}
					async setVerboseLogging(p) {
						super.setVerboseLogging(p);
						for (const y of this.watchers) y.instance.setVerboseLogging(p);
					}
					P(p, y) {
						this.R && this.b.fire({ type: "trace", message: this.bb(p, y) });
					}
					Q(p) {
						this.b.fire({ type: "warn", message: this.bb(p) });
					}
					bb(p, y) {
						return y
							? `[File Watcher (node.js)] ${p} (${this.M(y.request)})`
							: `[File Watcher (node.js)] ${p}`;
					}
				}
				t.$Tr = l;
			},
		),
		