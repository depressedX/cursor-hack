import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
import './currentScopes.js';
import './debug-build.js';
define(de[2118], he([1, 0, 80, 234, 263]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*currentScopes*/,
 w /*debug-build*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.profiler = void 0);
			function E(m) {
				return (
					!!m &&
					typeof m._profiler < "u" &&
					typeof m._profiler.start == "function" &&
					typeof m._profiler.stop == "function"
				);
			}
			function C() {
				const m = (0, i.getClient)();
				if (!m) {
					w.DEBUG_BUILD &&
						t.logger.warn(
							"No Sentry client available, profiling is not started",
						);
					return;
				}
				const r = m.getIntegrationByName("ProfilingIntegration");
				if (!r) {
					w.DEBUG_BUILD &&
						t.logger.warn("ProfilingIntegration is not available");
					return;
				}
				if (!E(r)) {
					w.DEBUG_BUILD &&
						t.logger.warn(
							"Profiler is not available on profiling integration.",
						);
					return;
				}
				r._profiler.start();
			}
			function d() {
				const m = (0, i.getClient)();
				if (!m) {
					w.DEBUG_BUILD &&
						t.logger.warn(
							"No Sentry client available, profiling is not started",
						);
					return;
				}
				const r = m.getIntegrationByName("ProfilingIntegration");
				if (!r) {
					w.DEBUG_BUILD &&
						t.logger.warn("ProfilingIntegration is not available");
					return;
				}
				if (!E(r)) {
					w.DEBUG_BUILD &&
						t.logger.warn(
							"Profiler is not available on profiling integration.",
						);
					return;
				}
				r._profiler.stop();
			}
			e.profiler = { startProfiler: C, stopProfiler: d };
		})
