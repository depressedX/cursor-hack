import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../platform/registry/common/platform.js';
define(de[1732], he([1, 0, 6, 30]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$tXb = e.ExplorerExtensions = void 0);
			var w;
			(function (C) {
				C.FileContributionRegistry =
					"workbench.registry.explorer.fileContributions";
			})(w || (e.ExplorerExtensions = w = {}));
			class E {
				constructor() {
					(this.a = new t.$re()),
						(this.onDidRegisterDescriptor = this.a.event),
						(this.b = []);
				}
				register(d) {
					this.b.push(d), this.a.fire(d);
				}
				create(d, m, r) {
					return this.b.map((u) => {
						const a = u.create(d, m);
						return r.add(a), a;
					});
				}
			}
			(e.$tXb = new E()), i.$Io.add(w.FileContributionRegistry, e.$tXb);
		})
