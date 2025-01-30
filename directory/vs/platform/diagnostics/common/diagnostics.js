import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/instantiation.js';
define(de[768], he([1, 0, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$0m = e.$8m = e.ID = void 0),
				(e.$9m = i),
				(e.ID = "diagnosticsService"),
				(e.$8m = (0, t.$Mi)(e.ID));
			function i(E) {
				return !!E.hostName && !!E.errorMessage;
			}
			class w {
				async getPerformanceInfo(C, d) {
					return {};
				}
				async getSystemInfo(C, d) {
					return {
						processArgs: "nullProcessArgs",
						gpuStatus: "nullGpuStatus",
						screenReader: "nullScreenReader",
						remoteData: [],
						os: "nullOs",
						memory: "nullMemory",
						vmHint: "nullVmHint",
					};
				}
				async getDiagnostics(C, d) {
					return "";
				}
				async getWorkspaceFileExtensions(C) {
					return { extensions: [] };
				}
				async reportWorkspaceStats(C) {}
			}
			e.$0m = w;
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	