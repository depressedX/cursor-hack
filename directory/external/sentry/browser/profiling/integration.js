import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import '../../utils/index.js';
import '../debug-build.js';
import './startProfileForSpan.js';
import './utils.js';
import './utils.js';
define(
			de[2139],
			he([1, 0, 144, 80, 452, 2138, 1103, 1103]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/,
 w /*debug-build*/,
 E /*startProfileForSpan*/,
 C /*utils*/,
 d /*utils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.browserProfilingIntegration = void 0);
				const m = "BrowserProfiling",
					r = () => ({
						name: m,
						setup(u) {
							const a = (0, t.getActiveSpan)(),
								h = a && (0, t.getRootSpan)(a);
							h &&
								(0, C.isAutomatedPageLoadSpan)(h) &&
								(0, C.shouldProfileSpan)(h) &&
								(0, E.startProfileForSpan)(h),
								u.on("spanStart", (c) => {
									c === (0, t.getRootSpan)(c) &&
										(0, C.shouldProfileSpan)(c) &&
										(0, E.startProfileForSpan)(c);
								}),
								u.on("beforeEnvelope", (c) => {
									if (!(0, d.getActiveProfilesCount)()) return;
									const n = (0, d.findProfiledTransactionsFromEnvelope)(c);
									if (!n.length) return;
									const g = [];
									for (const p of n) {
										const o = p && p.contexts,
											f = o && o.profile && o.profile.profile_id,
											b = o && o.profile && o.profile.start_timestamp;
										if (typeof f != "string") {
											w.DEBUG_BUILD &&
												i.logger.log(
													"[Profiling] cannot find profile for a span without a profile context",
												);
											continue;
										}
										if (!f) {
											w.DEBUG_BUILD &&
												i.logger.log(
													"[Profiling] cannot find profile for a span without a profile context",
												);
											continue;
										}
										o && o.profile && delete o.profile;
										const s = (0, d.takeProfileFromGlobalCache)(f);
										if (!s) {
											w.DEBUG_BUILD &&
												i.logger.log(
													`[Profiling] Could not retrieve profile for span: ${f}`,
												);
											continue;
										}
										const l = (0, d.createProfilingEvent)(f, b, s, p);
										l && g.push(l);
									}
									(0, d.addProfilesToEnvelope)(c, g);
								});
						},
					});
				e.browserProfilingIntegration = (0, t.defineIntegration)(r);
			},
		)
