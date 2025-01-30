import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/instantiation/common/instantiation.js';
define(Pe[112], Ne([1, 0, 5]), function (we, t, e) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$k9 = t.$j9 = void 0),
				(t.$j9 = (0, e.$Mi)("IURITransformerService"));
			class r {
				constructor(N) {
					N
						? ((this.transformIncoming = N.transformIncoming.bind(N)),
							(this.transformOutgoing = N.transformOutgoing.bind(N)),
							(this.transformOutgoingURI = N.transformOutgoingURI.bind(N)),
							(this.transformOutgoingScheme =
								N.transformOutgoingScheme.bind(N)))
						: ((this.transformIncoming = (P) => P),
							(this.transformOutgoing = (P) => P),
							(this.transformOutgoingURI = (P) => P),
							(this.transformOutgoingScheme = (P) => P));
				}
			}
			t.$k9 = r;
		}),
		