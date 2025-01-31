import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import '../../utils/index.js';
import '../debug-build.js';
import '../helpers.js';
import './utils.js';
define(
			de[2138],
			he([1, 0, 144, 80, 452, 386, 1103]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/,
 w /*debug-build*/,
 E /*helpers*/,
 C /*utils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.startProfileForSpan = d);
				function d(m) {
					let r;
					(0, C.isAutomatedPageLoadSpan)(m) &&
						(r = (0, i.timestampInSeconds)() * 1e3);
					const u = (0, C.startJSSelfProfile)();
					if (!u) return;
					w.DEBUG_BUILD &&
						i.logger.log(
							`[Profiling] started profiling span: ${((0, t.spanToJSON))(m).description}`,
						);
					const a = (0, i.uuid4)(),
						h = null;
					(0, t.getCurrentScope)().setContext("profile", {
						profile_id: a,
						start_timestamp: r,
					});
					async function c() {
						if (m && u) {
							if (h) {
								w.DEBUG_BUILD &&
									i.logger.log(
										"[Profiling] profile for:",
										(0, t.spanToJSON)(m).description,
										"already exists, returning early",
									);
								return;
							}
							return u
								.stop()
								.then((o) => {
									if (
										(n && (E.WINDOW.clearTimeout(n), (n = void 0)),
										w.DEBUG_BUILD &&
											i.logger.log(
												`[Profiling] stopped profiling of span: ${((0, t.spanToJSON))(m).description}`,
											),
										!o)
									) {
										w.DEBUG_BUILD &&
											i.logger.log(
												`[Profiling] profiler returned null profile for: ${((0, t.spanToJSON))(m).description}`,
												"this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started",
											);
										return;
									}
									(0, C.addProfileToGlobalCache)(a, o);
								})
								.catch((o) => {
									w.DEBUG_BUILD &&
										i.logger.log(
											"[Profiling] error while stopping profiler:",
											o,
										);
								});
						}
					}
					let n = E.WINDOW.setTimeout(() => {
						w.DEBUG_BUILD &&
							i.logger.log(
								"[Profiling] max profile duration elapsed, stopping profiling for:",
								(0, t.spanToJSON)(m).description,
							),
							c();
					}, C.MAX_PROFILE_DURATION_MS);
					const g = m.end.bind(m);
					function p() {
						return m
							? (c().then(
									() => {
										g();
									},
									() => {
										g();
									},
								),
								m)
							: g();
					}
					m.end = p;
				}
			},
		)
