import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../services/ai/browser/modalService.js';
define(de[3227], he([1, 0, 11, 32, 445]), function (ce /*require*/,
 e /*exports*/,
 t /*actions*/,
 i /*telemetry*/,
 w /*modalService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Gfd = e.$Ffd = void 0);
			class E extends t.$3X {
				static {
					this.LABEL = "Show Project Modal";
				}
				constructor() {
					super({
						id: "aiproject.action.showModal",
						title: { value: "Show Modal", original: "Show Modal" },
						f1: !0,
					});
				}
				run(m, ...r) {
					const u = m.get(w.$38b);
					m.get(i.$km).publicLogCapture("Opened new ai project"),
						u.renderModal();
				}
			}
			e.$Ffd = E;
			class C extends t.$3X {
				static {
					this.ID = "aiproject.action.hideModal";
				}
				static {
					this.LABEL = "Hide Project Modal";
				}
				constructor() {
					super({
						id: "aiproject.action.hideModal",
						title: { value: "Close Modal", original: "Close Modal" },
						f1: !0,
					});
				}
				run(m, ...r) {
					m.get(w.$38b).close();
				}
			}
			(e.$Gfd = C), (0, t.$4X)(E), (0, t.$4X)(C);
		}),
		