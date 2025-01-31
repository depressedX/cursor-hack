import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/theme/common/themeService.js';
import './baseIssueReporterService.js';
import '../common/issue.js';
define(
			de[3069],
			he([1, 0, 4, 35, 1735, 376]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*themeService*/,
 w /*baseIssueReporterService*/,
 E /*issue*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$t6c = void 0);
				let C = class extends w.$q6c {
					constructor(m, r, u, a, h, c, n) {
						super(m, r, u, a, h, !0, c, n);
						const g = this.window.document.querySelector(
								".block-system .block-info",
							),
							p = this.window.navigator.userAgent;
						p &&
							(g?.appendChild(this.window.document.createTextNode(p)),
							(this.receivedSystemInfo = !0),
							this.issueReporterModel.update({ systemInfoWeb: p })),
							this.setEventHandlers();
					}
					setEventHandlers() {
						super.setEventHandlers(),
							this.addEventListener("issue-type", "change", (m) => {
								const r = parseInt(m.target.value);
								this.issueReporterModel.update({ issueType: r });
								const u = this.getElementById("issue-title");
								u && (u.placeholder = (0, t.localize)(7248, null)),
									this.updatePreviewButtonState(),
									this.setSourceOptions(),
									this.render();
							});
					}
				};
				(e.$t6c = C), (e.$t6c = C = Ne([j(5, E.$6Xb), j(6, i.$iP)], C));
			},
		)
