import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
define(de[3159], he([1, 0, 6]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$rWc = void 0);
			class i {
				constructor() {
					(this.a = new Set()), (this.b = new t.$re()), (this.c = new t.$re());
				}
				get linkProviders() {
					return this.a;
				}
				get onDidAddLinkProvider() {
					return this.b.event;
				}
				get onDidRemoveLinkProvider() {
					return this.c.event;
				}
				registerLinkProvider(E) {
					const C = [];
					return (
						this.a.add(E),
						this.b.fire(E),
						{
							dispose: () => {
								for (const d of C) d.dispose();
								this.a.delete(E), this.c.fire(E);
							},
						}
					);
				}
			}
			e.$rWc = i;
		}),
		