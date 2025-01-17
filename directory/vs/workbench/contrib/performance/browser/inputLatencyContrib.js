import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/performance.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../services/editor/common/editorService.js';
define(
			de[3267],
			he([1, 0, 1127, 15, 6, 3, 32, 18]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nEc = void 0);
				let m = class extends E.$1c {
					constructor(u, a) {
						super(),
							(this.c = u),
							(this.f = a),
							(this.a = this.D(new E.$2c())),
							(this.b = this.D(
								new i.$Yh(() => {
									this.h(), this.g();
								}, 6e4),
							)),
							Math.random() <= 0.01 && this.g();
					}
					g() {
						this.a.value = w.Event.once(this.c.onDidActiveEditorChange)(() =>
							this.b.schedule(),
						);
					}
					h() {
						const u = t.inputLatency.getAndClearMeasurements();
						u &&
							this.f.publicLog2("performance.inputLatency", {
								keydown: u.keydown,
								input: u.input,
								render: u.render,
								total: u.total,
								sampleCount: u.sampleCount,
							});
					}
				};
				(e.$nEc = m), (e.$nEc = m = Ne([j(0, d.$IY), j(1, C.$km)], m));
			},
		),
		