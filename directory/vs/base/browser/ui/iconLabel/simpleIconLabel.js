import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../hover/hoverDelegate2.js';
import '../hover/hoverDelegateFactory.js';
import './iconLabels.js';
define(de[758], he([1, 0, 7, 317, 95, 182]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Yob = void 0);
			class C {
				constructor(m) {
					this.b = m;
				}
				set text(m) {
					(0, t.$hhb)(this.b, ...(0, E.$Sib)(m ?? ""));
				}
				set title(m) {
					!this.a && m
						? (this.a = (0, i.$1ib)().setupManagedHover(
								(0, w.$cib)("mouse"),
								this.b,
								m,
							))
						: this.a && this.a.update(m);
				}
				dispose() {
					this.a?.dispose();
				}
			}
			e.$Yob = C;
		}),
		