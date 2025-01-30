import '../../../../require.js';
import '../../../../exports.js';
import '../../../../external/sentry/electron/renderer/index.js';
import '../../../base/parts/sandbox/electron-sandbox/globals.js';
import '../common/global.js';
import '../common/tracing.js';
define(
			de[2872],
			he([1, 0, 2151, 320, 1210, 216]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*globals*/,
 w /*global*/,
 E /*tracing*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				function C() {
					try {
						t.init({
							...(0, w.makeSharedSentryClientOptions)(),
							integrations: [
								t.inboundFiltersIntegration(),
								t.functionToStringIntegration(),
								t.linkedErrorsIntegration(),
								t.dedupeIntegration(),
							],
						}),
							(0, E.$OOb)(i.$S.env.CURSOR_TRACE_ID);
					} catch (d) {
						console.error(
							"Failed to initialize tracing in renderer process",
							d,
						);
					}
				}
				C();
			},
		),
		