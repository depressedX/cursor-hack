import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/themables.js';
import './extHost.protocol.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import '../../services/extensions/common/extensions.js';
define(
			Pe[563],
			Ne([1, 0, 12, 3, 72, 6, 17, 11, 29]),
			function (we, t, e, r, S, N, P, I, l) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$ihd = void 0),
					(P = tt(P)),
					(I = tt(I));
				class n {
					static {
						this.a = 0;
					}
					constructor(d) {
						(this.b = new Map()),
							(this.c = d.getProxy(N.$lbb.MainThreadChatVariables));
					}
					async $resolveVariable(d, k, g, c) {
						const h = this.b.get(d);
						if (h)
							try {
								if (h.resolver.resolve2) {
									(0, l.$u2)(h.extension, "chatParticipantAdditions");
									const $ = new p(k, this.c),
										T = await h.resolver.resolve2(
											h.data.name,
											{ prompt: g },
											$.apiObject,
											c,
										);
									if (T && T[0]) return T[0].value;
								} else {
									const $ = await h.resolver.resolve(
										h.data.name,
										{ prompt: g },
										c,
									);
									if ($ && $[0]) return $[0].value;
								}
							} catch ($) {
								(0, e.$5)($);
							}
					}
					registerVariableResolver(d, k, g, c, h, $, T, a, u) {
						const s = n.a++,
							f = u ? S.ThemeIcon.fromId(u) : void 0;
						return (
							this.b.set(s, {
								extension: d,
								data: {
									id: k,
									name: g,
									description: c,
									modelDescription: h,
									icon: f,
								},
								resolver: T,
							}),
							this.c.$registerVariable(s, {
								id: k,
								name: g,
								description: c,
								modelDescription: h,
								isSlow: $,
								fullName: a,
								icon: f,
							}),
							(0, r.$Yc)(() => {
								this.b.delete(s), this.c.$unregisterVariable(s);
							})
						);
					}
				}
				t.$ihd = n;
				class p {
					constructor(d, k) {
						(this.c = d), (this.d = k), (this.a = !1);
					}
					close() {
						this.a = !0;
					}
					get apiObject() {
						if (!this.b) {
							let k = function (c) {
								if (d.a) {
									const h = new Error("Response stream has been closed");
									throw (Error.captureStackTrace(h, c), h);
								}
							};
							const d = this,
								g = (c) => {
									this.d.$handleProgressChunk(this.c, c);
								};
							this.b = {
								progress(c) {
									k(this.progress);
									const h = new I.$tdb(c),
										$ = P.ChatResponseProgressPart.from(h);
									return g($), this;
								},
								reference(c) {
									k(this.reference);
									const h = new I.$xdb(c),
										$ = P.ChatResponseReferencePart.from(h);
									return g($), this;
								},
								push(c) {
									return (
										k(this.push),
										c instanceof I.$xdb
											? g(P.ChatResponseReferencePart.from(c))
											: c instanceof I.$tdb &&
												g(P.ChatResponseProgressPart.from(c)),
										this
									);
								},
							};
						}
						return this.b;
					}
				}
			},
		),
		