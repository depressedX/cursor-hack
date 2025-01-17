import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/terminal/common/terminal.js';
import './terminal.js';
define(de[1758], he([1, 0, 6, 3, 117, 107]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$voc = void 0);
			let C = class extends i.$1c {
				get onProcessReady() {
					return this.b.event;
				}
				constructor(m, r, u, a) {
					super(),
						(this.instanceId = m),
						(this.w = r),
						(this.y = u),
						(this.z = a),
						(this.id = 0),
						(this.shouldPersist = !1),
						(this.a = this.D(new t.$re())),
						(this.onProcessData = this.a.event),
						(this.b = this.D(new t.$re())),
						(this.c = this.D(new t.$re())),
						(this.onStart = this.c.event),
						(this.f = this.D(new t.$re())),
						(this.onInput = this.f.event),
						(this.g = this.D(new t.$re())),
						(this.onBinary = this.g.event),
						(this.h = this.D(new t.$re())),
						(this.onResize = this.h.event),
						(this.j = this.D(new t.$re())),
						(this.onAcknowledgeDataEvent = this.j.event),
						(this.m = this.D(new t.$re())),
						(this.onShutdown = this.m.event),
						(this.n = this.D(new t.$re())),
						(this.onRequestInitialCwd = this.n.event),
						(this.q = this.D(new t.$re())),
						(this.onRequestCwd = this.q.event),
						(this.r = this.D(new t.$re())),
						(this.onDidChangeProperty = this.r.event),
						(this.s = this.D(new t.$re())),
						(this.onProcessExit = this.s.event),
						(this.t = []),
						(this.u = []);
				}
				emitData(m) {
					this.a.fire(m);
				}
				emitTitle(m) {
					this.r.fire({ type: w.ProcessPropertyType.Title, value: m });
				}
				emitReady(m, r) {
					this.b.fire({ pid: m, cwd: r, windowsPty: void 0 });
				}
				emitProcessProperty({ type: m, value: r }) {
					switch (m) {
						case w.ProcessPropertyType.Cwd:
							this.emitCwd(r);
							break;
						case w.ProcessPropertyType.InitialCwd:
							this.emitInitialCwd(r);
							break;
						case w.ProcessPropertyType.Title:
							this.emitTitle(r);
							break;
						case w.ProcessPropertyType.OverrideDimensions:
							this.emitOverrideDimensions(r);
							break;
						case w.ProcessPropertyType.ResolvedShellLaunchConfig:
							this.emitResolvedShellLaunchConfig(r);
							break;
					}
				}
				emitExit(m) {
					this.s.fire(m), this.dispose();
				}
				emitOverrideDimensions(m) {
					this.r.fire({
						type: w.ProcessPropertyType.OverrideDimensions,
						value: m,
					});
				}
				emitResolvedShellLaunchConfig(m) {
					this.r.fire({
						type: w.ProcessPropertyType.ResolvedShellLaunchConfig,
						value: m,
					});
				}
				emitInitialCwd(m) {
					for (; this.t.length > 0; ) this.t.pop()(m);
				}
				emitCwd(m) {
					for (; this.u.length > 0; ) this.u.pop()(m);
				}
				async start() {
					return this.z.requestStartExtensionTerminal(this, this.w, this.y);
				}
				shutdown(m) {
					this.m.fire(m);
				}
				input(m) {
					this.f.fire(m);
				}
				resize(m, r) {
					this.h.fire({ cols: m, rows: r });
				}
				clearBuffer() {}
				acknowledgeDataEvent() {}
				async setUnicodeVersion(m) {}
				async processBinary(m) {
					this.g.fire(m);
				}
				getInitialCwd() {
					return new Promise((m) => {
						this.n.fire(), this.t.push(m);
					});
				}
				getCwd() {
					return new Promise((m) => {
						this.q.fire(), this.u.push(m);
					});
				}
				async refreshProperty(m) {}
				async updateProperty(m, r) {}
			};
			(e.$voc = C), (e.$voc = C = Ne([j(3, E.$iIb)], C));
		}),
		