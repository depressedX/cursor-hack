import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/lifecycle.js';
define(de[3008], he([1, 0, 7, 182, 14, 3]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$QXb = void 0),
				(t = mt(t));
			const C = t.$;
			class d extends E.$1c {
				constructor(r, u, a) {
					super(), (this.domNode = C(".chat-notification-widget"));
					let h, c;
					switch (r) {
						case "warning":
							(h = w.$ak.warning), (c = ".chat-warning-codicon");
							break;
						case "error":
							(h = w.$ak.error), (c = ".chat-error-codicon");
							break;
						case "info":
							(h = w.$ak.info), (c = ".chat-info-codicon");
							break;
					}
					this.domNode.appendChild(C(c, void 0, (0, i.$Tib)(h)));
					const n = a.render(u);
					this.domNode.appendChild(n.element);
				}
				hasSameContent(r) {
					return r.kind === "warning";
				}
			}
			e.$QXb = d;
		}),
		