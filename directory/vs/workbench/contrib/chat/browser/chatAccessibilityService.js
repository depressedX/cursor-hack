import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/accessibilitySignal/browser/progressAccessibilitySignalScheduler.js';
import '../../../../base/browser/markdownRenderer.js';
import '../../../../base/common/htmlContent.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
define(
			de[3549],
			he([1, 0, 127, 3, 184, 5, 1650, 267, 94, 10, 130]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MIc = void 0);
				const a = 4e3;
				let h = class extends i.$1c {
					constructor(n, g, p) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.a = this.D(new i.$0c())),
							(this.b = 0);
					}
					acceptRequest() {
						return (
							this.b++,
							this.c.playSignal(w.$Twb.chatRequestSent, {
								allowManyInParallel: !0,
							}),
							this.a.set(this.b, this.f.createInstance(C.$LIc, a, void 0)),
							this.b
						);
					}
					acceptResponse(n, g) {
						this.a.deleteAndDispose(g);
						const p = typeof n != "string",
							o = typeof n == "string" ? n : n?.response.toString();
						if (
							(this.c.playSignal(w.$Twb.chatResponseReceived, {
								allowManyInParallel: !0,
							}),
							!n || !o)
						)
							return;
						const f = p && n.errorDetails ? ` ${n.errorDetails.message}` : "",
							b = (0, d.$Wib)(new m.$cl(o));
						this.g.getValue(u.AccessibilityVoiceSettingId.AutoSynthesize) !==
							"on" && (0, t.$pib)(b + f);
					}
				};
				(e.$MIc = h),
					(e.$MIc = h = Ne([j(0, w.$Owb), j(1, E.$Li), j(2, r.$gj)], h));
			},
		),
		