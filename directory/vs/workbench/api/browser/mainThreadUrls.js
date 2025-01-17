import '../../../../require.js';
import '../../../../exports.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../platform/url/common/url.js';
import '../../services/extensions/browser/extensionUrlHandler.js';
import '../../../platform/extensions/common/extensions.js';
define(
			de[3452],
			he([1, 0, 88, 101, 465, 1835, 109]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Moc = void 0);
				class d {
					constructor(u, a, h, c) {
						(this.a = u),
							(this.b = a),
							(this.extensionId = h),
							(this.extensionDisplayName = c);
					}
					handleURL(u, a) {
						return C.$Gn.equals(this.extensionId, u.authority)
							? Promise.resolve(this.a.$handleExternalUri(this.b, u)).then(
									() => !0,
								)
							: Promise.resolve(!1);
					}
				}
				let m = class {
					constructor(u, a, h) {
						(this.c = a),
							(this.d = h),
							(this.b = new Map()),
							(this.a = u.getProxy(t.$mbb.ExtHostUrls));
					}
					$registerUriHandler(u, a, h) {
						const c = new d(this.a, u, a, h),
							n = this.c.registerHandler(c);
						return (
							this.b.set(u, { extensionId: a, disposable: n }),
							this.d.registerExtensionHandler(a, c),
							Promise.resolve(void 0)
						);
					}
					$unregisterUriHandler(u) {
						const a = this.b.get(u);
						if (!a) return Promise.resolve(void 0);
						const { extensionId: h, disposable: c } = a;
						return (
							this.d.unregisterExtensionHandler(h),
							this.b.delete(u),
							c.dispose(),
							Promise.resolve(void 0)
						);
					}
					async $createAppUri(u) {
						return this.c.create(u);
					}
					dispose() {
						this.b.forEach(({ disposable: u }) => u.dispose()), this.b.clear();
					}
				};
				(e.$Moc = m),
					(e.$Moc = m =
						Ne(
							[(0, i.$tmc)(t.$lbb.MainThreadUrls), j(1, w.$2rb), j(2, E.$Loc)],
							m,
						));
			},
		),
		