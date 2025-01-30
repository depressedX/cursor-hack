import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import './ipc.js';
define(de[1462], he([1, 0, 144, 890]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*ipc*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.makeRendererTransport = w);
			function w(E) {
				const C = (0, i.getIPC)();
				return (0, t.createTransport)(
					E,
					async (d) => (C.sendEnvelope(d.body), { statusCode: 200 }),
				);
			}
		}),
		