import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[1245], he([1, 0, 6, 3, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$vnc = e.$unc = void 0),
				(e.$unc = (0, w.$Mi)("IInteractiveDocumentService"));
			class E extends i.$1c {
				constructor() {
					super(),
						(this.a = this.D(new t.$re())),
						(this.onWillAddInteractiveDocument = this.a.event),
						(this.b = this.D(new t.$re())),
						(this.onWillRemoveInteractiveDocument = this.b.event);
				}
				willCreateInteractiveDocument(d, m, r) {
					this.a.fire({ notebookUri: d, inputUri: m, languageId: r });
				}
				willRemoveInteractiveDocument(d, m) {
					this.b.fire({ notebookUri: d, inputUri: m });
				}
			}
			e.$vnc = E;
		}),
		