import '../../../../require.js';
import '../../../../exports.js';
import './extHost.protocol.js';
import '../../../base/common/event.js';
import '../../../platform/instantiation/common/instantiation.js';
define(Pe[193], Ne([1, 0, 6, 4, 5]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$Nhd = t.$Mhd = void 0);
			class N {
				constructor(I, l) {
					(this.c = l),
						(this.b = new r.$re()),
						(this.onDidChangeStorage = this.b.event),
						(this.a = I.getProxy(e.$lbb.MainThreadStorage));
				}
				registerExtensionStorageKeysToSync(I, l) {
					this.a.$registerExtensionStorageKeysToSync(I, l);
				}
				async initializeExtensionStorage(I, l, n) {
					const p = await this.a.$initializeExtensionStorage(I, l);
					let y;
					return p && (y = this.d(I, l, p)), y || n;
				}
				setValue(I, l, n) {
					return this.a.$setValue(I, l, n);
				}
				$acceptValue(I, l, n) {
					const p = this.d(I, l, n);
					p && this.b.fire({ shared: I, key: l, value: p });
				}
				d(I, l, n) {
					try {
						return JSON.parse(n);
					} catch (p) {
						this.c.error(
							`[extHostStorage] unexpected error parsing storage contents (extensionId: ${l}, global: ${I}): ${p}`,
						);
					}
				}
			}
			(t.$Mhd = N), (t.$Nhd = (0, S.$Mi)("IExtHostStorage"));
		}),
		