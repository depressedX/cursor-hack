import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/platform.js';
import '../../../common/contributions.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/product/common/productService.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/process.js';
define(
			de[3437],
			he([1, 0, 4, 12, 55, 30, 32, 21, 62, 52, 40, 41, 9, 344]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				const n = 0.15,
					g = "nps/sessionCount",
					p = "nps/lastSessionDate",
					o = "nps/skipVersion",
					f = "nps/isCandidate";
				let b = class {
					constructor(l, y, $, v, S) {
						if (!S.npsSurveyUrl || l.get(o, d.StorageScope.APPLICATION, ""))
							return;
						const T = new Date().toDateString(),
							P = l.get(
								p,
								d.StorageScope.APPLICATION,
								new Date(0).toDateString(),
							);
						if (T === P) return;
						const k = (l.getNumber(g, d.StorageScope.APPLICATION, 0) || 0) + 1;
						if (
							(l.store(p, T, d.StorageScope.APPLICATION, d.StorageTarget.USER),
							l.store(g, k, d.StorageScope.APPLICATION, d.StorageTarget.USER),
							k < 9)
						)
							return;
						const L =
							l.getBoolean(f, d.StorageScope.APPLICATION, !1) ||
							Math.random() < n;
						if (
							(l.store(f, L, d.StorageScope.APPLICATION, d.StorageTarget.USER),
							!L)
						) {
							l.store(
								o,
								S.version,
								d.StorageScope.APPLICATION,
								d.StorageTarget.USER,
							);
							return;
						}
						y.prompt(
							u.Severity.Info,
							t.localize(9524, null),
							[
								{
									label: t.localize(9525, null),
									run: () => {
										v.open(
											h.URI.parse(
												`${S.npsSurveyUrl}?o=${encodeURIComponent(c.$ic)}&v=${encodeURIComponent(S.version)}&m=${encodeURIComponent($.machineId)}`,
											),
										),
											l.store(
												f,
												!1,
												d.StorageScope.APPLICATION,
												d.StorageTarget.USER,
											),
											l.store(
												o,
												S.version,
												d.StorageScope.APPLICATION,
												d.StorageTarget.USER,
											);
									},
								},
								{
									label: t.localize(9526, null),
									run: () =>
										l.store(
											g,
											k - 3,
											d.StorageScope.APPLICATION,
											d.StorageTarget.USER,
										),
								},
								{
									label: t.localize(9527, null),
									run: () => {
										l.store(
											f,
											!1,
											d.StorageScope.APPLICATION,
											d.StorageTarget.USER,
										),
											l.store(
												o,
												S.version,
												d.StorageScope.APPLICATION,
												d.StorageTarget.USER,
											);
									},
								},
							],
							{ sticky: !0, priority: u.NotificationPriority.URGENT },
						);
					}
				};
				(b = Ne(
					[j(0, d.$lq), j(1, u.$4N), j(2, C.$km), j(3, a.$7rb), j(4, m.$Bk)],
					b,
				)),
					i.$z === "en" &&
						E.$Io
							.as(w.Extensions.Workbench)
							.registerWorkbenchContribution(b, r.LifecyclePhase.Restored);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	