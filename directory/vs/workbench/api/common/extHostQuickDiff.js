import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import './extHost.protocol.js';
import '../../../base/common/async.js';
import './extHostTypeConverters.js';
define(Pe[579], Ne([1, 0, 2, 6, 9, 17]), function (we, t, e, r, S, N) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Xid = void 0);
			class P {
				static {
					this.a = 0;
				}
				constructor(l, n) {
					(this.d = n),
						(this.c = new Map()),
						(this.b = l.getProxy(r.$lbb.MainThreadQuickDiff));
				}
				$provideOriginalResource(l, n, p) {
					const y = e.URI.revive(n),
						d = this.c.get(l);
					return d
						? (0, S.$Eh)(() => d.provideOriginalResource(y, p)).then(
								(k) => k || null,
							)
						: Promise.resolve(null);
				}
				registerQuickDiffProvider(l, n, p, y) {
					const d = P.a++;
					return (
						this.c.set(d, n),
						this.b.$registerQuickDiffProvider(
							d,
							N.DocumentSelector.from(l, this.d),
							p,
							y,
						),
						{
							dispose: () => {
								this.b.$unregisterQuickDiffProvider(d), this.c.delete(d);
							},
						}
					);
				}
			}
			t.$Xid = P;
		});
	var On =
		(this && this.__importDefault) ||
		function (we) {
			return we && we.__esModule ? we : { default: we };
		};
	