import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/solid.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
define(de[2971], he([1, 0, 13, 205]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Rcc = void 0);
			class w {
				constructor(C) {
					(this.contextSessionUuid = C),
						(this.inputBoxDelegate = new i.$Zzb()),
						(this.a = (0, t.createSignal)("")),
						(this.b = (0, t.createSignal)(""));
				}
				getText() {
					return this.a[0]();
				}
				getTextReactive() {
					return this.a[0]();
				}
				setText(C) {
					this.a[1](C);
				}
				getRichText() {
					return this.b[0]();
				}
				getRichTextReactive() {
					return this.b[0]();
				}
				setRichText(C) {
					this.b[1](C);
				}
			}
			e.$Rcc = w;
		}),
		