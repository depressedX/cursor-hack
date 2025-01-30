import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/instantiation/common/instantiation.js';
import './mainThreadCustomEditors.js';
import './mainThreadWebviewPanels.js';
import './mainThreadWebviews.js';
import './mainThreadWebviewViews.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
define(
			de[3902],
			he([1, 0, 3, 5, 3897, 3442, 831, 3376, 88, 101]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*instantiation*/,
 w /*mainThreadCustomEditors*/,
 E /*mainThreadWebviewPanels*/,
 C /*mainThreadWebviews*/,
 d /*mainThreadWebviewViews*/,
 m /*extHost.protocol*/,
 r /*extHostCustomers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5oc = void 0),
					(m = mt(m));
				let u = class extends t.$1c {
					constructor(h, c) {
						super();
						const n = this.D(c.createInstance(C.$Lmc, h));
						h.set(m.$lbb.MainThreadWebviews, n);
						const g = this.D(c.createInstance(E.$Soc, h, n));
						h.set(m.$lbb.MainThreadWebviewPanels, g);
						const p = this.D(c.createInstance(w.$1oc, h, n, g));
						h.set(m.$lbb.MainThreadCustomEditors, p);
						const o = this.D(c.createInstance(d.$4oc, h, n));
						h.set(m.$lbb.MainThreadWebviewViews, o);
					}
				};
				(e.$5oc = u), (e.$5oc = u = Ne([r.$umc, j(1, i.$Li)], u));
			},
		),
		