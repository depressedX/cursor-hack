import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/parts/ipc/electron-sandbox/ipc.electron.js';
import '../../../base/parts/sandbox/electron-sandbox/globals.js';
define(de[2732], he([1, 0, 3, 2688, 320]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$X8c = void 0);
			class E extends t.$1c {
				constructor(d) {
					super(), (this.a = this.D(new i.$krb(`window:${d}`)));
				}
				getChannel(d) {
					return this.a.getChannel(d);
				}
				registerChannel(d, m) {
					this.a.registerChannel(d, m);
				}
				sendRawMessage(d, m) {
					w.$P.invoke(d);
				}
			}
			e.$X8c = E;
		}),
		