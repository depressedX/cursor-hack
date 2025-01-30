import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import '../../utils/index.js';
import '../debug-build.js';
import '../helpers.js';
define(
			de[1103],
			he([1, 0, 144, 80, 452, 386]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/,
 w /*debug-build*/,
 E /*helpers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.MAX_PROFILE_DURATION_MS = void 0),
					(e.enrichWithThreadInformation = f),
					(e.createProfilePayload = s),
					(e.isProfiledTransactionEvent = l),
					(e.isAutomatedPageLoadSpan = y),
					(e.convertJSSelfProfileToSampledFormat = $),
					(e.addProfilesToEnvelope = v),
					(e.findProfiledTransactionsFromEnvelope = S),
					(e.applyDebugMetadata = T),
					(e.isValidSampleRate = P),
					(e.startJSSelfProfile = M),
					(e.shouldProfileSpan = N),
					(e.createProfilingEvent = A),
					(e.getActiveProfilesCount = O),
					(e.takeProfileFromGlobalCache = B),
					(e.addProfileToGlobalCache = U);
				const C = 1e6,
					d = String(0),
					m = "main";
				let r = "",
					u = "",
					a = "",
					h = (E.WINDOW.navigator && E.WINDOW.navigator.userAgent) || "",
					c = "";
				const n =
					(E.WINDOW.navigator && E.WINDOW.navigator.language) ||
					(E.WINDOW.navigator &&
						E.WINDOW.navigator.languages &&
						E.WINDOW.navigator.languages[0]) ||
					"";
				function g(z) {
					return (
						typeof z == "object" && z !== null && "getHighEntropyValues" in z
					);
				}
				const p = E.WINDOW.navigator && E.WINDOW.navigator.userAgentData;
				g(p) &&
					p
						.getHighEntropyValues([
							"architecture",
							"model",
							"platform",
							"platformVersion",
							"fullVersionList",
						])
						.then((z) => {
							if (
								((r = z.platform || ""),
								(a = z.architecture || ""),
								(c = z.model || ""),
								(u = z.platformVersion || ""),
								z.fullVersionList && z.fullVersionList.length > 0)
							) {
								const F = z.fullVersionList[z.fullVersionList.length - 1];
								h = `${F.brand} ${F.version}`;
							}
						})
						.catch((z) => {});
				function o(z) {
					return !("thread_metadata" in z);
				}
				function f(z) {
					return o(z) ? $(z) : z;
				}
				function b(z) {
					const F =
						z && z.contexts && z.contexts.trace && z.contexts.trace.trace_id;
					return (
						typeof F == "string" &&
							F.length !== 32 &&
							w.DEBUG_BUILD &&
							i.logger.log(
								`[Profiling] Invalid traceId: ${F} on profiled event`,
							),
						typeof F != "string" ? "" : F
					);
				}
				function s(z, F, x, H) {
					if (H.type !== "transaction")
						throw new TypeError(
							"Profiling events may only be attached to transactions, this should never occur.",
						);
					if (x == null)
						throw new TypeError(
							`Cannot construct profiling event envelope without a valid profile. Got ${x} instead.`,
						);
					const q = b(H),
						V = f(x),
						G =
							F ||
							(typeof H.start_timestamp == "number"
								? H.start_timestamp * 1e3
								: (0, i.timestampInSeconds)() * 1e3),
						K =
							typeof H.timestamp == "number"
								? H.timestamp * 1e3
								: (0, i.timestampInSeconds)() * 1e3;
					return {
						event_id: z,
						timestamp: new Date(G).toISOString(),
						platform: "javascript",
						version: "1",
						release: H.release || "",
						environment: H.environment || t.DEFAULT_ENVIRONMENT,
						runtime: {
							name: "javascript",
							version: E.WINDOW.navigator.userAgent,
						},
						os: { name: r, version: u, build_number: h },
						device: {
							locale: n,
							model: c,
							manufacturer: h,
							architecture: a,
							is_emulator: !1,
						},
						debug_meta: { images: T(x.resources) },
						profile: V,
						transactions: [
							{
								name: H.transaction || "",
								id: H.event_id || (0, i.uuid4)(),
								trace_id: q,
								active_thread_id: d,
								relative_start_ns: "0",
								relative_end_ns: ((K - G) * 1e6).toFixed(0),
							},
						],
					};
				}
				function l(z) {
					return !!(z.sdkProcessingMetadata && z.sdkProcessingMetadata.profile);
				}
				function y(z) {
					return (0, t.spanToJSON)(z).op === "pageload";
				}
				function $(z) {
					let F,
						x = 0;
					const H = {
							samples: [],
							stacks: [],
							frames: [],
							thread_metadata: { [d]: { name: m } },
						},
						q = z.samples[0];
					if (!q) return H;
					const V = q.timestamp,
						G =
							typeof performance.timeOrigin == "number"
								? performance.timeOrigin
								: i.browserPerformanceTimeOrigin || 0,
						K = G - (i.browserPerformanceTimeOrigin || G);
					return (
						z.samples.forEach((J, W) => {
							if (J.stackId === void 0) {
								F === void 0 && ((F = x), (H.stacks[F] = []), x++),
									(H.samples[W] = {
										elapsed_since_start_ns: ((J.timestamp + K - V) * C).toFixed(
											0,
										),
										stack_id: F,
										thread_id: d,
									});
								return;
							}
							let X = z.stacks[J.stackId];
							const Y = [];
							for (; X; ) {
								Y.push(X.frameId);
								const ne = z.frames[X.frameId];
								ne &&
									H.frames[X.frameId] === void 0 &&
									(H.frames[X.frameId] = {
										function: ne.name,
										abs_path:
											typeof ne.resourceId == "number"
												? z.resources[ne.resourceId]
												: void 0,
										lineno: ne.line,
										colno: ne.column,
									}),
									(X = X.parentId === void 0 ? void 0 : z.stacks[X.parentId]);
							}
							const ie = {
								elapsed_since_start_ns: ((J.timestamp + K - V) * C).toFixed(0),
								stack_id: x,
								thread_id: d,
							};
							(H.stacks[x] = Y), (H.samples[W] = ie), x++;
						}),
						H
					);
				}
				function v(z, F) {
					if (!F.length) return z;
					for (const x of F) z[1].push([{ type: "profile" }, x]);
					return z;
				}
				function S(z) {
					const F = [];
					return (
						(0, i.forEachEnvelopeItem)(z, (x, H) => {
							if (H === "transaction")
								for (let q = 1; q < x.length; q++) {
									const V = x[q];
									V &&
										V.contexts &&
										V.contexts.profile &&
										V.contexts.profile.profile_id &&
										F.push(x[q]);
								}
						}),
						F
					);
				}
				const I = new WeakMap();
				function T(z) {
					const F = i.GLOBAL_OBJ._sentryDebugIds;
					if (!F) return [];
					const x = (0, t.getClient)(),
						H = x && x.getOptions(),
						q = H && H.stackParser;
					if (!q) return [];
					let V;
					const G = I.get(q);
					G ? (V = G) : ((V = new Map()), I.set(q, V));
					const K = Object.keys(F).reduce((W, X) => {
							let Y;
							const ie = V.get(X);
							ie ? (Y = ie) : ((Y = q(X)), V.set(X, Y));
							for (let ne = Y.length - 1; ne >= 0; ne--) {
								const ee = Y[ne],
									_ = ee && ee.filename;
								if (ee && _) {
									W[_] = F[X];
									break;
								}
							}
							return W;
						}, {}),
						J = [];
					for (const W of z)
						W &&
							K[W] &&
							J.push({ type: "sourcemap", code_file: W, debug_id: K[W] });
					return J;
				}
				function P(z) {
					return (typeof z != "number" && typeof z != "boolean") ||
						(typeof z == "number" && isNaN(z))
						? (w.DEBUG_BUILD &&
								i.logger.warn(
									`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(z)} of type ${JSON.stringify(typeof z)}.`,
								),
							!1)
						: z === !0 || z === !1
							? !0
							: z < 0 || z > 1
								? (w.DEBUG_BUILD &&
										i.logger.warn(
											`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${z}.`,
										),
									!1)
								: !0;
				}
				function k(z) {
					return z.samples.length < 2
						? (w.DEBUG_BUILD &&
								i.logger.log(
									"[Profiling] Discarding profile because it contains less than 2 samples",
								),
							!1)
						: z.frames.length
							? !0
							: (w.DEBUG_BUILD &&
									i.logger.log(
										"[Profiling] Discarding profile because it contains no frames",
									),
								!1);
				}
				let L = !1;
				e.MAX_PROFILE_DURATION_MS = 3e4;
				function D(z) {
					return typeof z == "function";
				}
				function M() {
					const z = E.WINDOW.Profiler;
					if (!D(z)) {
						w.DEBUG_BUILD &&
							i.logger.log(
								"[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.",
							);
						return;
					}
					const F = 10,
						x = Math.floor(e.MAX_PROFILE_DURATION_MS / F);
					try {
						return new z({ sampleInterval: F, maxBufferSize: x });
					} catch {
						w.DEBUG_BUILD &&
							(i.logger.log(
								"[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header.",
							),
							i.logger.log(
								"[Profiling] Disabling profiling for current user session.",
							)),
							(L = !0);
					}
				}
				function N(z) {
					if (L)
						return (
							w.DEBUG_BUILD &&
								i.logger.log(
									"[Profiling] Profiling has been disabled for the duration of the current user session.",
								),
							!1
						);
					if (!z.isRecording())
						return (
							w.DEBUG_BUILD &&
								i.logger.log(
									"[Profiling] Discarding profile because transaction was not sampled.",
								),
							!1
						);
					const F = (0, t.getClient)(),
						x = F && F.getOptions();
					if (!x)
						return (
							w.DEBUG_BUILD &&
								i.logger.log(
									"[Profiling] Profiling disabled, no options found.",
								),
							!1
						);
					const H = x.profilesSampleRate;
					return P(H)
						? H
							? (H === !0 ? !0 : Math.random() < H)
								? !0
								: (w.DEBUG_BUILD &&
										i.logger.log(
											`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(H)})`,
										),
									!1)
							: (w.DEBUG_BUILD &&
									i.logger.log(
										"[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0",
									),
								!1)
						: (w.DEBUG_BUILD &&
								i.logger.warn(
									"[Profiling] Discarding profile because of invalid sample rate.",
								),
							!1);
				}
				function A(z, F, x, H) {
					return k(x) ? s(z, F, x, H) : null;
				}
				const R = new Map();
				function O() {
					return R.size;
				}
				function B(z) {
					const F = R.get(z);
					return F && R.delete(z), F;
				}
				function U(z, F) {
					if ((R.set(z, F), R.size > 30)) {
						const x = R.keys().next().value;
						R.delete(x);
					}
				}
			},
		),
		