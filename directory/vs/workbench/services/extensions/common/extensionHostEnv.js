import '../../../../../require.js';
import '../../../../../exports.js';
define(de[3303], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$tn = e.$sn = e.$rn = e.ExtHostConnectionType = void 0),
				(e.$un = d),
				(e.$vn = m);
			var t;
			(function (u) {
				(u[(u.IPC = 1)] = "IPC"),
					(u[(u.Socket = 2)] = "Socket"),
					(u[(u.MessagePort = 3)] = "MessagePort");
			})(t || (e.ExtHostConnectionType = t = {}));
			class i {
				static {
					this.ENV_KEY = "VSCODE_EXTHOST_IPC_HOOK";
				}
				constructor(a) {
					(this.pipeName = a), (this.type = t.IPC);
				}
				serialize(a) {
					a[i.ENV_KEY] = this.pipeName;
				}
			}
			e.$rn = i;
			class w {
				constructor() {
					this.type = t.Socket;
				}
				static {
					this.ENV_KEY = "VSCODE_EXTHOST_WILL_SEND_SOCKET";
				}
				serialize(a) {
					a[w.ENV_KEY] = "1";
				}
			}
			e.$sn = w;
			class E {
				constructor() {
					this.type = t.MessagePort;
				}
				static {
					this.ENV_KEY = "VSCODE_WILL_SEND_MESSAGE_PORT";
				}
				serialize(a) {
					a[E.ENV_KEY] = "1";
				}
			}
			e.$tn = E;
			function C(u) {
				delete u[i.ENV_KEY], delete u[w.ENV_KEY], delete u[E.ENV_KEY];
			}
			function d(u, a) {
				C(a), u.serialize(a);
			}
			function m(u) {
				if (u[i.ENV_KEY]) return r(u, new i(u[i.ENV_KEY]));
				if (u[w.ENV_KEY]) return r(u, new w());
				if (u[E.ENV_KEY]) return r(u, new E());
				throw new Error("No connection information defined in environment!");
			}
			function r(u, a) {
				return C(u), a;
			}
		}),
		