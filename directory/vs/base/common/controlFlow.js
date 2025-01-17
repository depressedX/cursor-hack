import '../../../require.js';
import '../../../exports.js';
import './errors.js';
define(de[1132], he([1, 0, 29]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Lpb = void 0);
			class i {
				constructor() {
					this.a = !1;
				}
				runExclusivelyOrSkip(E) {
					if (!this.a) {
						this.a = !0;
						try {
							E();
						} finally {
							this.a = !1;
						}
					}
				}
				runExclusivelyOrThrow(E) {
					if (this.a)
						throw new t.$gb("ReentrancyBarrier: reentrant call detected!");
					this.a = !0;
					try {
						E();
					} finally {
						this.a = !1;
					}
				}
				get isOccupied() {
					return this.a;
				}
				makeExclusiveOrSkip(E) {
					return (...C) => {
						if (!this.a) {
							this.a = !0;
							try {
								return E(...C);
							} finally {
								this.a = !1;
							}
						}
					};
				}
			}
			e.$Lpb = i;
		}),
		