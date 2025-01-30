import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
define(de[3126], he([1, 0, 6, 3, 37]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*strings*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$duc = void 0);
			class E extends i.$1c {
				static {
					this.a =
						/\b\w{0,20}(?::\/\/)?(?:localhost|127\.0\.0\.1|0\.0\.0\.0|:\d{2,5})[\w\-\.\~:\/\?\#[\]\@!\$&\(\)\*\+\,\;\=]*/gim;
				}
				static {
					this.b = /(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d{1,5})/;
				}
				static {
					this.c = /HTTP\son\s(127\.0\.0\.1|0\.0\.0\.0)\sport\s(\d+)/;
				}
				static {
					this.f = ["Dev Containers"];
				}
				constructor(d, m) {
					super(),
						(this.g = new t.$re()),
						(this.onDidMatchLocalUrl = this.g.event),
						(this.h = new Map()),
						(this.m = new Map()),
						d.instances.forEach((r) => {
							this.j(r);
						}),
						this.D(
							d.onDidCreateInstance((r) => {
								this.j(r);
							}),
						),
						this.D(
							d.onDidDisposeInstance((r) => {
								this.h.get(r)?.dispose(), this.h.delete(r);
							}),
						),
						this.D(
							m.onDidNewSession((r) => {
								(!r.parentSession ||
									(r.parentSession && r.hasSeparateRepl())) &&
									this.h.set(
										r.getId(),
										r.onDidChangeReplElements(() => {
											this.n(r);
										}),
									);
							}),
						),
						this.D(
							m.onDidEndSession(({ session: r }) => {
								this.h.has(r.getId()) &&
									(this.h.get(r.getId())?.dispose(), this.h.delete(r.getId()));
							}),
						);
				}
				j(d) {
					E.f.includes(d.title) ||
						this.h.set(
							d,
							d.onData((m) => {
								this.q(m);
							}),
						);
				}
				n(d) {
					const m = this.m.get(d.getId()),
						r = d.getReplElements();
					if (
						(this.m.set(d.getId(), {
							position: r.length - 1,
							tail: r[r.length - 1],
						}),
						!m && r.length > 0)
					)
						r.forEach((u) => this.q(u.toString()));
					else if (m && r.length - 1 !== m.position)
						for (let u = r.length - 1; u >= 0; u--) {
							const a = r[u];
							if (a === m.tail) break;
							this.q(a.toString());
						}
				}
				dispose() {
					super.dispose();
					const d = this.h.values();
					for (const m of d) m.dispose();
				}
				q(d) {
					d = (0, w.$9f)(d);
					const m = d.match(E.a) || [];
					if (m && m.length > 0)
						m.forEach((r) => {
							let u;
							try {
								u = new URL(r);
							} catch {}
							if (u) {
								const a = r.match(E.b),
									h = parseFloat(u.port ? u.port : a ? a[2] : "NaN");
								if (!isNaN(h) && Number.isInteger(h) && h > 0 && h <= 65535) {
									let c = u.hostname;
									if (
										(c !== "0.0.0.0" && c !== "127.0.0.1" && (c = "localhost"),
										h !== 9229 && d.startsWith("Debugger listening on"))
									)
										return;
									this.g.fire({ port: h, host: c });
								}
							}
						});
					else {
						const r = d.match(E.c);
						r &&
							r.length === 3 &&
							this.g.fire({ host: r[1], port: Number(r[2]) });
					}
				}
			}
			e.$duc = E;
		}),
		