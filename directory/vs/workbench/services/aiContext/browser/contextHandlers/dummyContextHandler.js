import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/context_pb.js';
define(de[3241], he([1, 0, 228]), function (ce /*require*/,
 e /*exports*/,
 t /*context_pb*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$GZc = void 0);
			class i {
				constructor(E) {
					(this.a = E), (this.b = new AbortController());
				}
				update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(E, C) {
					this.b.signal.aborted;
				}
				async blockForFinalInput(E, C) {
					return C.type === t.ContextIntent_Type.AUTOMATIC
						? "fallBackToCachedReranked"
						: "useFreshItemsEvenIfNotRerankedYet";
				}
				freeze() {
					this.b.abort();
				}
				unfreeze() {
					this.b = new AbortController();
				}
				dispose() {
					this.b.abort();
				}
			}
			e.$GZc = i;
		}),
		