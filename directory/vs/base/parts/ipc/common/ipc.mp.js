import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/buffer.js';
import '../../../common/event.js';
import './ipc.js';
define(de[1173], he([1, 0, 76, 6, 305]), function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*event*/,
 w /*ipc*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$erb = e.$drb = void 0);
			class E {
				constructor(m) {
					(this.a = m),
						(this.onMessage = i.Event.fromDOMEventEmitter(
							this.a,
							"message",
							(r) => (r.data ? t.$Te.wrap(r.data) : t.$Te.alloc(0)),
						)),
						m.start();
				}
				send(m) {
					this.a.postMessage(m.buffer);
				}
				disconnect() {
					this.a.close();
				}
			}
			e.$drb = E;
			class C extends w.$ri {
				constructor(m, r) {
					const u = new E(m);
					super(u, r), (this.b = u);
				}
				dispose() {
					this.b.disconnect(), super.dispose();
				}
			}
			e.$erb = C;
		})
