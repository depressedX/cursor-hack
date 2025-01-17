import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/buffer.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/parts/ipc/common/ipc.net.js';
define(de[2784], he([1, 0, 76, 6, 3, 760]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$coc = e.$aoc = e.$_nc = void 0),
				(e.$boc = d);
			const C = (r, u, a) => {
				const h = new Uint8Array(16);
				for (let g = 0; g < 16; g++) h[g] = Math.round(Math.random() * 256);
				const c = (0, t.$cf)(t.$Te.wrap(h));
				return (
					[
						`GET ws://localhost${r}?${u}&skipWebSocketFrames=true HTTP/1.1`,
						"Connection: Upgrade",
						"Upgrade: websocket",
						`Sec-WebSocket-Key: ${c}`,
					].join(`\r
`) +
					`\r
\r
`
				);
			};
			(e.$_nc = C),
				(e.$aoc = t.$Te.fromString(`\r
\r
`));
			async function d(r, u, a, h, c) {
				r.write(t.$Te.fromString((0, e.$_nc)(u, a, h)));
				const n = new w.$Zc();
				try {
					return await new Promise((g, p) => {
						let o;
						n.add(
							r.onData((f) => {
								o
									? (o = t.$Te.concat([o, f], o.byteLength + f.byteLength))
									: (o = f);
								const b = o.indexOf(e.$aoc);
								if (b === -1) return;
								g(r), r.pauseData();
								const s = o.slice(b + e.$aoc.byteLength);
								s.byteLength && c.onData.fire(s);
							}),
						),
							n.add(r.onClose((f) => p(f ?? new Error("socket closed")))),
							n.add(r.onEnd(() => p(new Error("socket ended"))));
					});
				} catch (g) {
					throw (r.dispose(), g);
				} finally {
					n.dispose();
				}
			}
			class m extends w.$1c {
				constructor(u, a) {
					super(),
						(this.g = u),
						(this.a = this.D(new i.$ue())),
						(this.onData = (...h) => (
							this.a.isPaused && queueMicrotask(() => this.a.resume()),
							this.a.event(...h)
						)),
						(this.b = this.D(new i.$re())),
						(this.onDidDispose = this.b.event),
						(this.f = !1),
						this.D(a.onData),
						this.D(a.onData.event((h) => this.a.fire(h))),
						(this.onClose = this.D(a.onClose).event),
						(this.onEnd = this.D(a.onEnd).event);
				}
				pauseData() {
					this.a.pause();
				}
				drain() {
					return Promise.resolve();
				}
				end() {
					(this.f = !0), this.h();
				}
				traceSocketEvent(u, a) {
					E.SocketDiagnostics.traceSocketEvent(this, this.g, u, a);
				}
				dispose() {
					this.f || this.h(), this.b.fire(), super.dispose();
				}
			}
			e.$coc = m;
		}),
		