import '../../../../require.js';
import '../../../../exports.js';
import '../../browser/index.js';
import '../../utils/index.js';
import './anr.js';
import './integrations/scope-to-main.js';
import './stack-parse.js';
import './transport.js';
define(
			de[2150],
			he([1, 0, 1105, 80, 2148, 1460, 1461, 1462]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.getDefaultIntegrations = m),
					(e.init = r);
				function m(u) {
					return [
						...(0, t.getDefaultIntegrations)(u),
						(0, E.scopeToMainIntegration)(),
					];
				}
				function r(u = {}, a = t.init) {
					if (window?.__SENTRY__RENDERER_INIT__) {
						i.logger.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);
						return;
					}
					(window.__SENTRY__RENDERER_INIT__ = !0),
						u.autoSessionTracking === void 0 && (u.autoSessionTracking = !1),
						(u.sendClientReports = !1),
						u.defaultIntegrations === void 0 && (u.defaultIntegrations = m(u)),
						u.stackParser === void 0 &&
							(u.stackParser = C.electronRendererStackParser),
						u.dsn === void 0 && (u.dsn = "https://12345@dummy.dsn/12345"),
						u.transport === void 0 && (u.transport = d.makeRendererTransport),
						u.anrDetection &&
							(0, w.enableAnrRendererMessages)(
								u.anrDetection === !0 ? {} : u.anrDetection,
							),
						delete u.initialScope,
						a(u);
				}
			},
		);
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	