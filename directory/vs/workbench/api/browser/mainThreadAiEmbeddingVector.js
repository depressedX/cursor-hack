import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../common/extHost.protocol.js';
import '../../services/aiEmbeddingVector/common/aiEmbeddingVectorService.js';
import '../../services/extensions/common/extHostCustomers.js';
define(
			de[3336],
			he([1, 0, 3, 88, 1793, 101]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Uqc = void 0);
				let C = class extends t.$1c {
					constructor(m, r) {
						super(),
							(this.c = r),
							(this.b = this.D(new t.$0c())),
							(this.a = m.getProxy(i.$mbb.ExtHostAiEmbeddingVector));
					}
					$registerAiEmbeddingVectorProvider(m, r) {
						const u = {
							provideAiEmbeddingVector: (a, h) =>
								this.a.$provideAiEmbeddingVector(r, a, h),
						};
						this.b.set(r, this.c.registerAiEmbeddingVectorProvider(m, u));
					}
					$unregisterAiEmbeddingVectorProvider(m) {
						this.b.deleteAndDispose(m);
					}
				};
				(e.$Uqc = C),
					(e.$Uqc = C =
						Ne(
							[(0, E.$tmc)(i.$lbb.MainThreadAiEmbeddingVector), j(1, w.$Sqc)],
							C,
						));
			},
		),
		