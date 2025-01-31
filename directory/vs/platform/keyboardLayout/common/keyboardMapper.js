import '../../../../require.js';
import '../../../../exports.js';
define(de[2737], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Gvc = void 0);
			class t {
				constructor(w) {
					(this.a = w), (this.b = new Map());
				}
				dumpDebugInfo() {
					return this.a.dumpDebugInfo();
				}
				resolveKeyboardEvent(w) {
					return this.a.resolveKeyboardEvent(w);
				}
				resolveKeybinding(w) {
					const E = w.getHashCode(),
						C = this.b.get(E);
					if (!C) {
						const d = this.a.resolveKeybinding(w);
						return this.b.set(E, d), d;
					}
					return C;
				}
			}
			e.$Gvc = t;
		})
