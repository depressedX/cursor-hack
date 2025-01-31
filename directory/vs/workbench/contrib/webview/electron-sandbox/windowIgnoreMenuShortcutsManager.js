import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/platform.js';
import '../../../../base/parts/ipc/common/ipc.js';
import '../../../../platform/window/common/window.js';
define(de[1785], he([1, 0, 12, 305, 253]), function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*ipc*/,
 w /*window*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Fgd = void 0);
			class E {
				constructor(d, m, r) {
					(this.c = r),
						(this.a = (0, w.$yY)(d)),
						(this.b = i.ProxyChannel.toService(m.getChannel("webview")));
				}
				didFocus() {
					this.setIgnoreMenuShortcuts(!0);
				}
				didBlur() {
					this.setIgnoreMenuShortcuts(!1);
				}
				get d() {
					return t.$m || this.a;
				}
				setIgnoreMenuShortcuts(d) {
					this.d &&
						this.b.setIgnoreMenuShortcuts({ windowId: this.c.windowId }, d);
				}
			}
			e.$Fgd = E;
		})
