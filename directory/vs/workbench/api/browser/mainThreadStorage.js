import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/storage/common/storage.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/platform.js';
import '../../../platform/extensionManagement/common/extensionStorage.js';
import '../../services/extensions/common/extensionStorageMigration.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/log/common/log.js';
define(
			de[3368],
			he([1, 0, 21, 88, 101, 3, 12, 677, 3304, 5, 34]),
			function (ce /*require*/,
 e /*exports*/,
 t /*storage*/,
 i /*extHost.protocol*/,
 w /*extHostCustomers*/,
 E /*lifecycle*/,
 C /*platform*/,
 d /*extensionStorage*/,
 m /*extensionStorageMigration*/,
 r /*instantiation*/,
 u /*log*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$soc = void 0);
				let a = class {
					constructor(c, n, g, p, o) {
						(this.d = n),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.b = new E.$Zc()),
							(this.c = new Map()),
							(this.a = c.getProxy(i.$mbb.ExtHostStorage)),
							this.b.add(
								this.f.onDidChangeValue(
									t.StorageScope.PROFILE,
									void 0,
									this.b,
								)((f) => {
									if (this.c.has(f.key)) {
										const b = this.d.getExtensionStateRaw(f.key, !0);
										typeof b == "string" && this.a.$acceptValue(!0, f.key, b);
									}
								}),
							);
					}
					dispose() {
						this.b.dispose();
					}
					async $initializeExtensionStorage(c, n) {
						return (
							await this.i(n, c),
							c && this.c.set(n, !0),
							this.d.getExtensionStateRaw(n, c)
						);
					}
					async $setValue(c, n, g) {
						this.d.setExtensionState(n, g, c);
					}
					$registerExtensionStorageKeysToSync(c, n) {
						this.d.setKeysForSync(c, n);
					}
					async i(c, n) {
						try {
							let g = this.d.getSourceExtensionToMigrate(c);
							!g && C.$r && c !== c.toLowerCase() && (g = c.toLowerCase()),
								g &&
									(C.$r &&
										g !== g.toLowerCase() &&
										this.d.getExtensionState(g.toLowerCase(), n) &&
										!this.d.getExtensionState(g, n) &&
										(g = g.toLowerCase()),
									await (0, m.$roc)(g, c, n, this.g));
						} catch (g) {
							this.h.error(g);
						}
					}
				};
				(e.$soc = a),
					(e.$soc = a =
						Ne(
							[
								(0, w.$tmc)(i.$lbb.MainThreadStorage),
								j(1, d.$1N),
								j(2, t.$lq),
								j(3, r.$Li),
								j(4, u.$ik),
							],
							a,
						));
			},
		),
		