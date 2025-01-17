import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
define(de[939], he([1, 0, 120]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$qZ = void 0),
				(e.$rZ = w);
			class i {
				constructor(C, d, m, r, u, a, h) {
					(this._resolvedKeybindingItemBrand = void 0),
						(this.resolvedKeybinding = C),
						(this.chords = C ? w(C.getDispatchChords()) : []),
						C &&
							this.chords.length === 0 &&
							(this.chords = w(C.getSingleModifierDispatchChords())),
						(this.bubble = d ? d.charCodeAt(0) === t.CharCode.Caret : !1),
						(this.command = this.bubble ? d.substr(1) : d),
						(this.commandArgs = m),
						(this.when = r),
						(this.isDefault = u),
						(this.extensionId = a),
						(this.isBuiltinExtension = h);
				}
			}
			e.$qZ = i;
			function w(E) {
				const C = [];
				for (let d = 0, m = E.length; d < m; d++) {
					const r = E[d];
					if (!r) return [];
					C.push(r);
				}
				return C;
			}
		}),
		