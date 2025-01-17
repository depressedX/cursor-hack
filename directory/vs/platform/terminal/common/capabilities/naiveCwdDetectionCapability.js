import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import './capabilities.js';
define(de[2824], he([1, 0, 6, 189]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$bIb = void 0);
			class w {
				constructor(C) {
					(this.a = C),
						(this.type = i.TerminalCapability.NaiveCwdDetection),
						(this.b = ""),
						(this.c = new t.$re()),
						(this.onDidChangeCwd = this.c.event);
				}
				async getCwd() {
					if (!this.a) return Promise.resolve("");
					const C = await this.a.getCwd();
					return C !== this.b && this.c.fire(C), (this.b = C), this.b;
				}
			}
			e.$bIb = w;
		}),
		