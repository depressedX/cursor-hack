import '../../../../../require.js';
import '../../../../../exports.js';
import '../common/debug.js';
import '../../../../base/common/lifecycle.js';
import '../../../services/host/browser/host.js';
import '../../../services/title/browser/titleService.js';
define(de[3740], he([1, 0, 112, 3, 87, 713]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$6Qc = void 0);
			let C = class {
				constructor(m, r, u) {
					this.a = [];
					const a = () => {
						m.state === t.State.Stopped && !r.hasFocus
							? u.updateProperties({ prefix: "\u{1F534}" })
							: u.updateProperties({ prefix: "" });
					};
					this.a.push(m.onDidChangeState(a)),
						this.a.push(r.onDidChangeFocus(a));
				}
				dispose() {
					(0, i.$Vc)(this.a);
				}
			};
			(e.$6Qc = C),
				(e.$6Qc = C = Ne([j(0, t.$75), j(1, w.$asb), j(2, E.$Wqc)], C));
		}),
		