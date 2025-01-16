define(de[2747], he([1, 0, 29]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$_bd = i);
			function i(E, C, d, m) {
				const { sample: r, perfBaseline: u, source: a } = E;
				C.publicLog2("unresponsive.sample", {
					perfBaseline: u,
					selfTime: r.selfTime,
					totalTime: r.totalTime,
					percentage: r.percentage,
					functionName: r.location,
					callers: r.caller.map((c) => c.location).join("<"),
					callersAnnotated: r.caller
						.map((c) => `${c.percentage}|${c.location}`)
						.join("<"),
					source: a,
				});
				const h = new w(E);
				m ? t.$1.onUnexpectedError(h) : d.error(h);
			}
			class w extends Error {
				constructor(C) {
					super(`PerfSampleError: by ${C.source} in ${C.sample.location}`),
						(this.name = "PerfSampleError"),
						(this.selfTime = C.sample.selfTime);
					const d = [
						C.sample.absLocation,
						...C.sample.caller.map((m) => m.absLocation),
					];
					this.stack = `
	 at ${d.join(`
	 at `)}`;
				}
			}
		}),
		