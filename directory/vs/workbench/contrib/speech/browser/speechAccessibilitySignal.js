define(de[3138], he([1, 0, 3, 184, 511]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$E2c = void 0);
			let E = class extends t.$1c {
				static {
					this.ID = "workbench.contrib.speechAccessibilitySignal";
				}
				constructor(d, m) {
					super(),
						(this.a = d),
						(this.b = m),
						this.D(
							this.b.onDidStartSpeechToTextSession(() =>
								this.a.playSignal(i.$Twb.voiceRecordingStarted),
							),
						),
						this.D(
							this.b.onDidEndSpeechToTextSession(() =>
								this.a.playSignal(i.$Twb.voiceRecordingStopped),
							),
						);
				}
			};
			(e.$E2c = E), (e.$E2c = E = Ne([j(0, i.$Owb), j(1, w.$V7)], E));
		}),
		