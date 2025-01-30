import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/network.js';
import '../../../base/common/resources.js';
import '../../../platform/files/common/files.js';
import '../../../platform/instantiation/common/instantiation.js';
define(Pe[92], Ne([1, 0, 16, 24, 32, 5]), function (we, t, e, r, S, N) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$88 = t.$78 = void 0);
			class P {
				constructor() {
					(this.a = new Set(Object.keys(e.Schemas))),
						(this.b = new Map()),
						(this.extUri = new r.$ch((l) => {
							const n = this.b.get(l.scheme);
							return !(
								n === void 0 ||
								n & S.FileSystemProviderCapabilities.PathCaseSensitive
							);
						}));
				}
				$acceptProviderInfos(l, n) {
					n === null ? this.b.delete(l.scheme) : this.b.set(l.scheme, n);
				}
				isFreeScheme(l) {
					return !this.b.has(l) && !this.a.has(l);
				}
				getCapabilities(l) {
					return this.b.get(l);
				}
			}
			(t.$78 = P), (t.$88 = (0, N.$Mi)("IExtHostFileSystemInfo"));
		}),
		