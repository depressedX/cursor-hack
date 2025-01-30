import '../../../require.js';
import '../../../exports.js';
import '../core/index.js';
import '../core/index.js';
import '../utils/index.js';
import './debug-build.js';
import './eventbuilder.js';
import './helpers.js';
import './userfeedback.js';
define(
			de[1453],
			he([1, 0, 144, 144, 80, 452, 889, 386, 1435]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/,
 w /*index*/,
 E /*debug-build*/,
 C /*eventbuilder*/,
 d /*helpers*/,
 m /*userfeedback*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.BrowserClient = void 0);
				class r extends i.BaseClient {
					constructor(a) {
						const h = { parentSpanIsAlwaysRootSpan: !0, ...a },
							c = d.WINDOW.SENTRY_SDK_SOURCE || (0, w.getSDKSource)();
						(0, t.applySdkMetadata)(h, "browser", ["browser"], c),
							super(h),
							h.sendClientReports &&
								d.WINDOW.document &&
								d.WINDOW.document.addEventListener("visibilitychange", () => {
									d.WINDOW.document.visibilityState === "hidden" &&
										this._flushOutcomes();
								});
					}
					eventFromException(a, h) {
						return (0, C.eventFromException)(
							this._options.stackParser,
							a,
							h,
							this._options.attachStacktrace,
						);
					}
					eventFromMessage(a, h = "info", c) {
						return (0, C.eventFromMessage)(
							this._options.stackParser,
							a,
							h,
							c,
							this._options.attachStacktrace,
						);
					}
					captureUserFeedback(a) {
						if (!this._isEnabled()) {
							E.DEBUG_BUILD &&
								w.logger.warn(
									"SDK not enabled, will not capture user feedback.",
								);
							return;
						}
						const h = (0, m.createUserFeedbackEnvelope)(a, {
							metadata: this.getSdkMetadata(),
							dsn: this.getDsn(),
							tunnel: this.getOptions().tunnel,
						});
						this.sendEnvelope(h);
					}
					_prepareEvent(a, h, c) {
						return (
							(a.platform = a.platform || "javascript"),
							super._prepareEvent(a, h, c)
						);
					}
				}
				e.BrowserClient = r;
			},
		),
		