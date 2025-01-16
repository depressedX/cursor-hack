define(de[143], he([1, 0, 5, 15]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$_m = e.$$m = void 0),
				(e.$$m = (0, t.$Mi)("remoteAgentService")),
				(e.$_m = new (class {
					constructor() {
						(this.maxSampleCount = 5),
							(this.sampleDelay = 2e3),
							(this.initial = []),
							(this.maxInitialCount = 3),
							(this.average = []),
							(this.maxAverageCount = 100),
							(this.highLatencyMultiple = 2),
							(this.highLatencyMinThreshold = 500),
							(this.highLatencyMaxThreshold = 1500),
							(this.lastMeasurement = void 0);
					}
					get latency() {
						return this.lastMeasurement;
					}
					async measure(w) {
						let E = 1 / 0;
						for (let d = 0; d < this.maxSampleCount; d++) {
							const m = await w.getRoundTripTime();
							if (m === void 0) return;
							(E = Math.min(E, m / 2)), await (0, i.$Nh)(this.sampleDelay);
						}
						this.average.push(E),
							this.average.length > this.maxAverageCount &&
								this.average.shift();
						let C;
						return (
							this.initial.length < this.maxInitialCount
								? this.initial.push(E)
								: (C =
										this.initial.reduce((d, m) => d + m, 0) /
										this.initial.length),
							(this.lastMeasurement = {
								initial: C,
								current: E,
								average:
									this.average.reduce((d, m) => d + m, 0) / this.average.length,
								high:
									typeof C > "u"
										? !1
										: E > this.highLatencyMaxThreshold ||
											(E > this.highLatencyMinThreshold &&
												E > C * this.highLatencyMultiple),
							}),
							this.lastMeasurement
						);
					}
				})());
		}),
		