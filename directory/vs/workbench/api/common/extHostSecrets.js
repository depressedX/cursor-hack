import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/extensions/common/extensions.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
define(Pe[516], Ne([1, 0, 25, 4, 3]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Yhd = void 0);
			class N {
				#e;
				constructor(I, l) {
					(this.disposables = new S.$Zc()),
						(this.a = e.$Gn.toKey(I.identifier)),
						(this.#e = l),
						(this.onDidChange = r.Event.map(
							r.Event.filter(
								this.#e.onDidChangePassword,
								(n) => n.extensionId === this.a,
							),
							(n) => ({ key: n.key }),
							this.disposables,
						));
				}
				dispose() {
					this.disposables.dispose();
				}
				get(I) {
					return this.#e.get(this.a, I);
				}
				store(I, l) {
					return this.#e.store(this.a, I, l);
				}
				delete(I) {
					return this.#e.delete(this.a, I);
				}
			}
			t.$Yhd = N;
		}),
		