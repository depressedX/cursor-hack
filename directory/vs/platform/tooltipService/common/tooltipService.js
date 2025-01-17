import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/extensions.js';
import '../../instantiation/common/instantiation.js';
import '../../../base/common/lifecycle.js';
import '../../storage/common/storage.js';
import './tooltipPipelines.js';
import '../../../base/common/hash.js';
import '../../commands/common/commands.js';
import '../../../base/common/constants.js';
import '../../actions/common/actions.js';
define(
			de[308],
			he([1, 0, 20, 5, 3, 21, 2869, 136, 31, 58, 11]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6X = e.$5X = void 0);
				const a = "tooltipServicePipelines",
					h = "lastShownTooltipTime",
					c = 4 * 60 * 60 * 1e3,
					n = 14 * 24 * 60 * 60 * 1e3,
					g = 60 * 60 * 1e3,
					p = !1,
					o = !1,
					f = !1,
					b = !1,
					s = [];
				e.$5X = (0, i.$Mi)("tooltipService");
				let l = class extends w.$1c {
					constructor($, v) {
						super(),
							(this.q = $),
							(this.r = v),
							(this.h = new Map()),
							(this.j = !1),
							(this.n = 0),
							(this.c = C.$sV),
							this.y();
					}
					s() {
						const $ = { state: [] };
						this.c.forEach((v) => {
							$.state.push({
								name: v.name,
								disableStatus: void 0,
								createdAt: Date.now(),
							});
						}),
							(this.f = $),
							this.t();
					}
					t() {
						const $ = { sequences: [] };
						this.c.forEach((v) => {
							v.showOn.sequences.forEach((S) => {
								$.sequences.push({
									activeEventIndices: [],
									sequenceHash: this.z(S),
								});
							}),
								v.disableOn.sequences.forEach((S) => {
									$.sequences.push({
										activeEventIndices: [],
										sequenceHash: this.z(S),
									});
								});
						}),
							(this.g = $);
					}
					u($) {
						if (f) return;
						const v = this.q.get(a, E.StorageScope.APPLICATION);
						if (!v || v === "") {
							o && console.log("[Tooltip][Initializing Empty Pipeline State]"),
								this.s();
							return;
						}
						return JSON.parse(v).state.find((T) => T.name === $);
					}
					w($) {
						if (f) return this.f?.state.find((P) => P.name === $);
						if (this.f === void 0) return;
						const v = this.f.state.findIndex((P) => P.name === $);
						if (v === -1) return;
						const S = this.u($),
							I = S?.disableStatus?.disabledUntil,
							T = this.f.state[v].disableStatus?.disabledUntil;
						return S === void 0 || I === void 0
							? this.f.state[v]
							: T !== void 0 && T >= I
								? this.f.state[v]
								: ((this.f.state[v] = S), S);
					}
					y() {
						try {
							const $ = this.q.get(a, E.StorageScope.APPLICATION);
							if (f || !$ || $ === "") {
								o &&
									console.log("[Tooltip][Initializing Empty Pipeline State]"),
									this.s();
								return;
							}
							o && console.log("[Tooltip][Loading Pipeline State]");
							const v = JSON.parse($);
							o && console.log("[Tooltip][Current Pipelines State]", v);
							const S = { state: [] };
							for (let I of this.c) {
								const T = v.state.find((P) => P.name === I.name);
								T
									? S.state.push(T)
									: S.state.push({
											name: I.name,
											disableStatus: void 0,
											createdAt: Date.now(),
										});
							}
							this.f = S;
						} catch ($) {
							o && console.log("[Tooltip][Error Loading Pipeline State]", $),
								this.s();
						} finally {
							this.t(), (this.j = !0);
						}
					}
					z($) {
						const v = { ...$ };
						return (
							"debug" in v && delete v.debug, (0, d.$Aj)(JSON.stringify(v))
						);
					}
					C($) {
						const v = { ...$ };
						"debug" in v && delete v.debug;
						let S = this.h.get(v);
						return (
							S === void 0 && ((S = this.z($)), this.h.set($, S)),
							this.g.sequences.find((I) => I.sequenceHash === S)
						);
					}
					F($) {
						const v = this.C($);
						v && (v.activeEventIndices = []);
					}
					G() {
						f ||
							(o && console.log("[Tooltip][Saving Pipeline State]", this.f),
							this.q.store(
								a,
								JSON.stringify(this.f),
								E.StorageScope.APPLICATION,
								E.StorageTarget.MACHINE,
							),
							(this.m = Date.now()));
					}
					H() {
						(this.m && Date.now() - this.m < g) || this.G();
					}
					I($) {
						if (this.f === void 0) return;
						$.showOn.sequences.forEach((S) => this.F(S));
						const v = this.f.state.find((S) => S.name === $.name);
						v &&
							((v.disableStatus = {
								disabledUntil: Date.now() + $.showOn.gracePeriod_ms,
							}),
							this.r.executeCommand(r.$NV, {
								location: $.popup.location,
								header: $.popup.header,
								subheader: $.popup.subheader,
								name: $.name,
							}),
							console.log(`[Tooltip][Show Tooltip]
${$.popup.header}
---
${$.popup.subheader}`),
							p ||
								this.q.store(
									h,
									new Date().getTime().toString(),
									E.StorageScope.APPLICATION,
									E.StorageTarget.MACHINE,
								),
							f || this.G());
					}
					J($) {
						if (this.f === void 0) return;
						const v = this.c.find((T) => T.name === $);
						let S = this.f.state.find((T) => T.name === $);
						if (
							!v ||
							!S ||
							(o &&
								console.log(`[Tooltip][Disable Tooltip]
${v.name}`),
							(S = this.w($)),
							!S)
						)
							return;
						const I = Date.now() + v.disableOn.gracePeriod_ms;
						(S?.disableStatus !== void 0 &&
							S.disableStatus.disabledUntil > I) ||
							(v.showOn.sequences.forEach((T) => this.F(T)),
							v.disableOn.sequences.forEach((T) => this.F(T)),
							(S.disableStatus = { disabledUntil: I }),
							this.G());
					}
					L($, v) {
						if (typeof v == "string")
							return {
								isEventAccepted: $.startsWith(v),
								shouldAllowMultipleOfCurrentEvent: !1,
								isSkippingAllowed: !1,
							};
						if (v.length == 2 && v[0] === "*" && v[1] === "*")
							return {
								isEventAccepted: !0,
								shouldAllowMultipleOfCurrentEvent: !0,
								isSkippingAllowed: !1,
							};
						if (
							v.length === 3 &&
							v.filter((k) => k === "*").length === 2 &&
							v.filter((k) => k === "_").length === 1
						)
							return {
								isEventAccepted: !0,
								shouldAllowMultipleOfCurrentEvent: !0,
								isSkippingAllowed: !0,
							};
						if (v.length === 1 && v[0] === "*")
							return {
								isEventAccepted: !0,
								shouldAllowMultipleOfCurrentEvent: !1,
								isSkippingAllowed: !1,
							};
						if (
							v.length == 2 &&
							v.filter((k) => k === "*").length === 1 &&
							v.filter((k) => k === "_").length === 1
						)
							return {
								isEventAccepted: !0,
								shouldAllowMultipleOfCurrentEvent: !1,
								isSkippingAllowed: !0,
							};
						const S = v.includes("!"),
							I = v.includes("*"),
							T = v.includes("_");
						return {
							isEventAccepted: S
								? !v.some((k) => $.startsWith(k))
								: v.some((k) => $.startsWith(k)),
							shouldAllowMultipleOfCurrentEvent: I,
							isSkippingAllowed: T,
						};
					}
					M($, v, S, I, T) {
						const P = this.C(v);
						if (!P) return;
						P.activeEventIndices.length === 0 && P.activeEventIndices.push(0),
							P.startTime &&
								Date.now() - P.startTime > v.timeout_ms &&
								this.F(v);
						const k = P.activeEventIndices;
						let L = !1,
							D = !1,
							M = [],
							N = [];
						for (let A = 0; A < k.length; A++) {
							const R = k[A],
								O = v.events[R],
								{
									shouldAllowMultipleOfCurrentEvent: B,
									isEventAccepted: U,
									isSkippingAllowed: z,
								} = this.L(S, O);
							if (z) {
								if (R + 1 === v.events.length) {
									(D = !0), I();
									break;
								}
								k.includes(R + 1) || k.push(R + 1);
							}
							if (
								U &&
								((L = !0),
								P.startTime === void 0 &&
									((P.activeEventIndices.length === 1 &&
										P.activeEventIndices[0] === 0 &&
										!B) ||
										P.activeEventIndices.some((F) => F > 0)) &&
									(P.startTime = Date.now()),
								P.activeEventIndices.includes(R + 1) ||
									(s.includes($) &&
										v.debug &&
										console.log(
											`[Accepted Event ${S} as Event ${O}. Adding index ${R + 1}]`,
										),
									M.push(R + 1)),
								B || N.push(A),
								R + 1 === v.events.length)
							) {
								(D = !0), I();
								break;
							}
						}
						if (!D) {
							N.sort((A, R) => R - A);
							for (const A of N)
								P.activeEventIndices.splice(A, 1),
									s.includes($) &&
										v.debug &&
										console.log("[Finished Removing]", P.activeEventIndices);
							for (const A of M)
								P.activeEventIndices.includes(A) ||
									P.activeEventIndices.push(A),
									s.includes($) &&
										v.debug &&
										console.log("[Finished Adding]", P.activeEventIndices);
							L ||
								(s.includes($) &&
									v.debug &&
									console.log(`[Failed Sequence], ${JSON.stringify(v)}`),
								T());
						}
					}
					async N($) {
						if (!(!this.j || this.f === void 0)) {
							o && console.log("[Tooltip][Registering event]", $);
							for (const v of this.c) {
								let S = this.f.state.find((P) => P.name === v.name);
								if (S === void 0) continue;
								for (const P of v.disableOn.sequences)
									this.M(
										v.name,
										P,
										$,
										() => {
											this.J(v.name);
										},
										() => {
											this.F(P);
										},
									);
								if (S.disableStatus)
									if (S.disableStatus.disabledUntil < Date.now())
										(S.disableStatus = void 0),
											v.showOn.sequences.forEach((P) => this.F(P));
									else continue;
								const I = S.createdAt ? Date.now() - S.createdAt : 0,
									T = v.initialDisabledPeriod_ms ?? n;
								if (!b && I <= T) {
									o &&
										console.log(
											"[Tooltip][Initial Disable Period]",
											v.name,
											I,
											T,
										);
									continue;
								}
								for (const P of v.showOn.sequences)
									this.M(
										v.name,
										P,
										$,
										() => {
											if (
												((S = this.w(v.name)),
												S?.disableStatus !== void 0 &&
													S.disableStatus.disabledUntil > Date.now())
											)
												return;
											const k = Number(
													this.q.get(h, E.StorageScope.APPLICATION),
												),
												L = Date.now() - k;
											(p || L > c || isNaN(L) || isNaN(k)) && this.I(v);
										},
										() => {
											this.F(P);
										},
									);
							}
							f || this.H();
						}
					}
					async registerEvent($) {
						if (this.n > 1e3) {
							console.error(
								"Too many active promises from tooltipservice. Possible leak",
							);
							return;
						}
						Promise.resolve()
							.then(async () => {
								const v = new Promise((S, I) =>
									setTimeout(() => I(new Error("Timeout")), 1),
								);
								this.n++,
									Promise.race([
										v,
										new Promise((S) => {
											this.N($).then(() => {
												S(!0);
											});
										}),
									])
										.then(() => {
											this.n--;
										})
										.catch((S) => {
											console.error(S), this.n--;
										});
							})
							.catch((v) => {
								console.error("tooltipservice timeout!");
							});
					}
					async registerUserCloseTooltip($) {
						if (this.f === void 0) return;
						const v = this.f.state.find((S) => S.name === $);
						v !== void 0 &&
							((v.disableStatus = {
								disabledUntil: Date.now() + 10 * 365 * 24 * 60 * 60 * 1e3,
							}),
							this.G());
					}
				};
				(e.$6X = l),
					(e.$6X = l = Ne([j(0, E.$lq), j(1, m.$ek)], l)),
					(0, t.$lK)(e.$5X, l, t.InstantiationType.Delayed),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: r.$OV,
									title: "Register Close Tooltip",
									category: "Tooltip",
									f1: !1,
								});
							}
							run(y, $) {
								const { tooltipName: v } = $;
								y.get(e.$5X).registerUserCloseTooltip(v);
							}
						},
					);
			},
		),
		