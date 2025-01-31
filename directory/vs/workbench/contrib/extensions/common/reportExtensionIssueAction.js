import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/actions.js';
import '../../issue/common/issue.js';
define(de[3065], he([1, 0, 4, 50, 376]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*issue*/) {
			"use strict";
			var E;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$i6c = void 0),
				(t = mt(t));
			let C = class extends i.$rj {
				static {
					E = this;
				}
				static {
					this.m = "workbench.extensions.action.reportExtensionIssue";
				}
				static {
					this.n = t.localize(6595, null);
				}
				constructor(m, r) {
					super(E.m, E.n, "extension-action report-issue"),
						(this.c = m),
						(this.f = r),
						(this.enabled =
							m.isBuiltin || (!!m.repository && !!m.repository.url));
				}
				async run() {
					await this.f.openReporter({ extensionId: this.c.identifier.value });
				}
			};
			(e.$i6c = C), (e.$i6c = C = E = Ne([j(1, w.$7Xb)], C));
		})
