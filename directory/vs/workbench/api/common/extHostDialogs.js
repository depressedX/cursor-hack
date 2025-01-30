import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import './extHost.protocol.js';
import '../../services/extensions/common/extensions.js';
define(Pe[544], Ne([1, 0, 2, 6, 29]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$kid = void 0);
			class N {
				constructor(I) {
					this.a = I.getProxy(r.$lbb.MainThreadDialogs);
				}
				showOpenDialog(I, l) {
					return (
						l?.allowUIResources && (0, S.$u2)(I, "showLocal"),
						this.a
							.$showOpenDialog(l)
							.then((n) => (n ? n.map((p) => e.URI.revive(p)) : void 0))
					);
				}
				showSaveDialog(I) {
					return this.a
						.$showSaveDialog(I)
						.then((l) => (l ? e.URI.revive(l) : void 0));
				}
			}
			t.$kid = N;
		}),
		