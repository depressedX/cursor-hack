import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[1010], he([1, 0, 3, 20, 5]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$zcc = e.$ycc = void 0),
				(e.$ycc = (0, w.$Mi)("diffingService"));
			class E extends t.$1c {
				constructor() {
					super(), (this.a = void 0);
				}
				async wordDiffForPartialCode(d, m) {
					return this.a
						? this.a.wordDiffForPartialCode(d, m)
						: {
								finalText: m,
								changes: [
									{ value: m, added: !0 },
									{ value: d, removed: !0 },
								],
								fullLineChanges: [
									{ value: d, removed: !0 },
									{ value: m, added: !0 },
								],
							};
				}
				async wordDiff(d, m) {
					return this.a
						? this.a.wordDiff(d, m)
						: (console.error("No diffing provider registered"),
							{
								changes: [
									{ value: m, added: !0 },
									{ value: d, removed: !0 },
								],
							});
				}
				registerDiffingProvider(d) {
					this.a = d;
				}
				unregisterDiffingProvider() {
					this.a = void 0;
				}
			}
			(e.$zcc = E), (0, i.$lK)(e.$ycc, E, i.InstantiationType.Delayed);
		}),
		