import '../../../../require.js';
import '../../../../exports.js';
import '../equals.js';
import './base.js';
import './debugName.js';
import './lazyObservableValue.js';
define(
			de[2221],
			he([1, 0, 433, 407, 648, 2220]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ke = C);
				function C(d, m) {
					return d.lazy
						? new E.$je(
								new w.$gd(d.owner, d.debugName, void 0),
								m,
								d.equalsFn ?? t.$_c,
							)
						: new i.$ae(
								new w.$gd(d.owner, d.debugName, void 0),
								m,
								d.equalsFn ?? t.$_c,
							);
				}
			},
		),
		