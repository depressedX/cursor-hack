define(de[3053], he([1, 0, 32]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1Qc = void 0);
			let i = class {
				constructor(E, C) {
					(this.a = E), (this.b = C);
				}
				logDebugSessionStart(E, C) {
					const d = E.getMainExtensionDescriptor();
					this.b.publicLog("debugSessionStart", {
						type: E.type,
						breakpointCount: this.a.getBreakpoints().length,
						exceptionBreakpoints: this.a.getExceptionBreakpoints(),
						watchExpressionsCount: this.a.getWatchExpressions().length,
						extensionName: d.identifier.value,
						isBuiltin: d.isBuiltin,
						launchJsonExists: C,
					});
				}
				logDebugSessionStop(E, C) {
					const d = this.a.getBreakpoints();
					this.b.publicLog("debugSessionStop", {
						type: E && E.configuration.type,
						success: C.emittedStopped || d.length === 0,
						sessionLengthInSeconds: C.sessionLengthInSeconds,
						breakpointCount: d.length,
						watchExpressionsCount: this.a.getWatchExpressions().length,
					});
				}
			};
			(e.$1Qc = i), (e.$1Qc = i = Ne([j(1, t.$km)], i));
		}),
		