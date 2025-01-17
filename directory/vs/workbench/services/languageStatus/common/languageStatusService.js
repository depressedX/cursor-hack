import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/strings.js';
import '../../../../editor/common/languageFeatureRegistry.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[1024], he([1, 0, 37, 945, 20, 5]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$c8 = void 0),
				(e.$c8 = (0, E.$Mi)("ILanguageStatusService"));
			class C {
				constructor() {
					(this.c = new i.$N1()), (this.onDidChange = this.c.onDidChange);
				}
				addStatus(m) {
					return this.c.register(m.selector, m);
				}
				getLanguageStatus(m) {
					return this.c.ordered(m).sort((r, u) => {
						let a = u.severity - r.severity;
						return (
							a === 0 && (a = (0, t.$Ff)(r.source, u.source)),
							a === 0 && (a = (0, t.$Ff)(r.id, u.id)),
							a
						);
					});
				}
			}
			(0, w.$lK)(e.$c8, C, w.InstantiationType.Delayed);
		}),
		