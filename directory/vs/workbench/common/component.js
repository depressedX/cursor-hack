import '../../../require.js';
import '../../../exports.js';
import './memento.js';
import '../../platform/theme/common/themeService.js';
define(de[969], he([1, 0, 282, 35]), function (ce /*require*/,
 e /*exports*/,
 t /*memento*/,
 i /*themeService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$fEb = void 0);
			class w extends i.$pP {
				constructor(C, d, m) {
					super(d),
						(this.C = C),
						(this.z = new t.$eEb(this.C, m)),
						this.D(
							m.onWillSaveState(() => {
								this.I(), this.z.saveMemento();
							}),
						);
				}
				getId() {
					return this.C;
				}
				F(C, d) {
					return this.z.getMemento(C, d);
				}
				G(C) {
					return this.z.reloadMemento(C);
				}
				H(C, d) {
					return this.z.onDidChangeValue(C, d);
				}
				I() {}
			}
			e.$fEb = w;
		}),
		