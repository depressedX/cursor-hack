import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/workspace/common/canonicalUri.js';
define(de[4004], he([1, 0, 20, 1671]), function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*canonicalUri*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$dvc = void 0);
			class w {
				constructor() {
					this.a = new Map();
				}
				registerCanonicalUriProvider(C) {
					return (
						this.a.set(C.scheme, C), { dispose: () => this.a.delete(C.scheme) }
					);
				}
				async provideCanonicalUri(C, d, m) {
					const r = this.a.get(C.scheme);
					if (r) return r.provideCanonicalUri(C, d, m);
				}
			}
			(e.$dvc = w), (0, t.$lK)(i.$8oc, w, t.InstantiationType.Delayed);
		})
