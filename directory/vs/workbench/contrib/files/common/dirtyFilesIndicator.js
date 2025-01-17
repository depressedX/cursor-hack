import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import './files.js';
import '../../../../base/common/lifecycle.js';
import '../../../services/activity/common/activity.js';
import '../../../services/workingCopy/common/workingCopyService.js';
import '../../../services/workingCopy/common/workingCopy.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
define(
			de[3866],
			he([1, 0, 4, 220, 3, 260, 227, 334, 170]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Mc = void 0),
					(t = mt(t));
				let r = class extends w.$1c {
					static {
						this.ID = "workbench.contrib.dirtyFilesIndicator";
					}
					constructor(a, h, c) {
						super(),
							(this.c = a),
							(this.f = h),
							(this.g = c),
							(this.a = this.D(new w.$2c())),
							(this.b = 0),
							this.m(),
							this.h();
					}
					h() {
						this.D(this.f.onDidChangeDirty((a) => this.j(a)));
					}
					j(a) {
						const h = a.isDirty();
						(h &&
							!(a.capabilities & d.WorkingCopyCapabilities.Untitled) &&
							this.g.hasShortAutoSaveDelay(a.resource)) ||
							((h || this.b > 0) && this.m());
					}
					m() {
						const a = (this.b = this.f.dirtyCount);
						a > 0
							? (this.a.value = this.c.showViewContainerActivity(i.$vUb, {
									badge: new E.$8qc(a, (h) =>
										h === 1
											? t.localize(7019, null)
											: t.localize(7020, null, a),
									),
								}))
							: this.a.clear();
					}
				};
				(e.$6Mc = r),
					(e.$6Mc = r = Ne([j(0, E.$7qc), j(1, C.$gY), j(2, m.$_Y)], r));
			},
		),
		