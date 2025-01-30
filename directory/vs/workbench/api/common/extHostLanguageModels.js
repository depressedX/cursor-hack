import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/errorMessage.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/iterator.js';
import '../../../base/common/lifecycle.js';
import '../../../nls.js';
import '../../../platform/extensions/common/extensions.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/log/common/log.js';
import '../../../platform/progress/common/progress.js';
import './extHost.protocol.js';
import './extHostAuthentication.js';
import './extHostRpcService.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import '../../services/authentication/common/authentication.js';
import '../../services/extensions/common/extensions.js';
define(
			Pe[196],
			Ne([
				1, 0, 9, 23, 73, 12, 4, 54, 3, 10, 25, 5, 14, 138, 6, 195, 21, 17, 11,
				292, 29,
			]),
			function (
				we,
				t,
				e,
				r,
				S,
				N,
				P,
				I,
				l,
				n,
				p,
				y,
				d,
				k,
				g,
				c,
				h,
				$,
				T,
				a,
				u,
			) {
				"use strict";
				var s;
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Vhd = t.$Uhd = void 0),
					($ = tt($)),
					(T = tt(T)),
					(t.$Uhd = (0, y.$Mi)("IExtHostLanguageModels"));
				class f {
					constructor(E, R) {
						(this.option = E),
							(this.stream = new e.$di()),
							(this.stream = R ?? new e.$di());
					}
				}
				class o {
					constructor() {
						(this.a = new Map()), (this.b = new e.$di()), (this.c = !1);
						const E = this;
						this.apiObject = {
							get stream() {
								return E.b.asyncIterable;
							},
							get text() {
								return e.$ai
									.map(E.b.asyncIterable, (R) => {
										if (R instanceof T.$Idb) return R.value;
									})
									.coalesce();
							},
						};
					}
					*d() {
						if (this.a.size > 0) for (const [, E] of this.a) yield E.stream;
						else yield this.b;
					}
					handleFragment(E) {
						if (this.c) return;
						let R = this.a.get(E.index);
						R ||
							(this.a.size === 0
								? (R = new f(E.index, this.b))
								: (R = new f(E.index)),
							this.a.set(E.index, R));
						let C;
						E.part.type === "text"
							? (C = new T.$Idb(E.part.value))
							: (C = new T.$Hdb(
									E.part.name,
									E.part.toolCallId,
									E.part.parameters,
								)),
							R.stream.emitOne(C);
					}
					reject(E) {
						this.c = !0;
						for (const R of this.d()) R.reject(E);
					}
					resolve() {
						this.c = !0;
						for (const E of this.d()) E.resolve();
					}
				}
				let w = class {
					static {
						s = this;
					}
					static {
						this.a = 1;
					}
					constructor(E, R, C) {
						(this.j = R),
							(this.k = C),
							(this.c = new P.$re()),
							(this.d = new P.$re()),
							(this.onDidChangeProviders = this.d.event),
							(this.f = new Map()),
							(this.g = new Map()),
							(this.h = new p.$In()),
							(this.i = new Map()),
							(this.s = new Set()),
							(this.b = E.getProxy(g.$lbb.MainThreadLanguageModels));
					}
					dispose() {
						this.c.dispose(), this.d.dispose();
					}
					registerLanguageModel(E, R, C, O) {
						const A = s.a++;
						this.f.set(A, {
							extension: E.identifier,
							provider: C,
							languageModelId: R,
						});
						let J;
						O.auth &&
							(J = {
								providerLabel: E.displayName || E.name,
								accountLabel: typeof O.auth == "object" ? O.auth.label : void 0,
							}),
							this.b.$registerLanguageModelProvider(
								A,
								`${p.$Gn.toKey(E.identifier)}/${A}/${R}`,
								{
									extension: E.identifier,
									id: R,
									vendor: O.vendor ?? p.$Gn.toKey(E.identifier),
									name: O.name ?? "",
									family: O.family ?? "",
									version: O.version,
									maxInputTokens: O.maxInputTokens,
									maxOutputTokens: O.maxOutputTokens,
									auth: J,
									targetExtensions: O.extensions,
								},
							);
						const L = C.onDidReceiveLanguageModelResponse2?.(
							({ extensionId: b, participant: F, tokenCount: D }) => {
								this.b.$whenLanguageModelChatRequestMade(R, new p.$Gn(b), F, D);
							},
						);
						return (0, l.$Yc)(() => {
							this.f.delete(A), this.b.$unregisterProvider(A), L?.dispose();
						});
					}
					async $startChatRequest(E, R, C, O, A, J) {
						const L = this.f.get(E);
						if (!L) throw new Error("Provider not found");
						const b = new k.$0N(async (D) => {
							if (J.isCancellationRequested) {
								this.j.warn(
									`[CHAT](${L.extension.value}) CANNOT send progress because the REQUEST IS CANCELLED`,
								);
								return;
							}
							let M;
							if (
								(D.part instanceof T.$Hdb
									? (M = {
											type: "tool_use",
											name: D.part.name,
											parameters: D.part.parameters,
											toolCallId: D.part.toolCallId,
										})
									: D.part instanceof T.$Idb &&
										(M = { type: "text", value: D.part.value }),
								!M)
							) {
								this.j.warn(
									`[CHAT](${L.extension.value}) UNKNOWN part ${JSON.stringify(D)}`,
								);
								return;
							}
							this.b.$reportResponsePart(R, { index: D.index, part: M });
						});
						let F;
						if (L.provider.provideLanguageModelResponse2)
							F = Promise.resolve(
								L.provider.provideLanguageModelResponse2(
									O.map($.LanguageModelChatMessage.to),
									A,
									p.$Gn.toKey(C),
									b,
									J,
								),
							);
						else {
							const D = new k.$0N(async (M) => {
								b.report({ index: M.index, part: new T.$Idb(M.part) });
							});
							F = Promise.resolve(
								L.provider.provideLanguageModelResponse(
									O.map($.LanguageModelChatMessage.to),
									A?.modelOptions ?? {},
									p.$Gn.toKey(C),
									D,
									J,
								),
							);
						}
						F.then(
							() => {
								this.b.$reportResponseDone(R, void 0);
							},
							(D) => {
								this.b.$reportResponseDone(R, (0, N.$6)(D));
							},
						);
					}
					$provideTokenLength(E, R, C) {
						const O = this.f.get(E);
						return O
							? Promise.resolve(O.provider.provideTokenCount(R, C))
							: Promise.resolve(0);
					}
					$acceptChatModelMetadata(E) {
						if (E.added)
							for (const { identifier: R, metadata: C } of E.added)
								this.g.set(R, { metadata: C, apiObjects: new p.$In() });
						if (E.removed)
							for (const R of E.removed) {
								this.g.delete(R);
								for (const [C, O] of this.i)
									O.languageModelId === R &&
										(O.res.reject(new N.$9()), this.i.delete(C));
							}
						E.added?.forEach((R) => this.q(R.metadata)), this.d.fire(void 0);
					}
					async selectLanguageModels(E, R) {
						const C = await this.b.$selectChatModels({
								...R,
								extension: E.identifier,
							}),
							O = [],
							A = this;
						for (const J of C) {
							const L = this.g.get(J);
							if (!L) continue;
							this.o(E.identifier, L.metadata) && (await this.q(L.metadata));
							let b = L.apiObjects.get(E.identifier);
							b ||
								((b = {
									id: J,
									vendor: L.metadata.vendor,
									family: L.metadata.family,
									version: L.metadata.version,
									name: L.metadata.name,
									maxInputTokens: L.metadata.maxInputTokens,
									countTokens(F, D) {
										if (!A.g.has(J)) throw T.$Mdb.NotFound(J);
										return A.r(J, F, D ?? r.CancellationToken.None);
									},
									sendRequest(F, D, M) {
										if (!A.g.has(J)) throw T.$Mdb.NotFound(J);
										return A.l(E, J, F, D ?? {}, M ?? r.CancellationToken.None);
									},
								}),
								Object.freeze(b),
								L.apiObjects.set(E.identifier, b)),
								O.push(b);
						}
						return O;
					}
					async l(E, R, C, O, A) {
						const J = this.m(E, C),
							L = E.identifier,
							b = this.g.get(R)?.metadata;
						if (!b || !this.g.has(R))
							throw T.$Mdb.NotFound(`Language model '${R}' is unknown.`);
						if (
							this.o(L, b) &&
							(!(await this.n(
								E,
								{ identifier: b.extension, displayName: b.auth.providerLabel },
								O.justification,
								!1,
							)) ||
								!this.h.get(L)?.has(b.extension))
						)
							throw T.$Mdb.NoPermissions(
								`Language model '${R}' cannot be used by '${L.value}'.`,
							);
						try {
							const F = (Math.random() * 1e6) | 0,
								D = new o();
							this.i.set(F, { languageModelId: R, res: D });
							try {
								await this.b.$tryStartChatRequest(L, R, F, J, O, A);
							} catch (M) {
								throw (this.i.delete(F), M);
							}
							return D.apiObject;
						} catch (F) {
							throw F.name === T.$Mdb.name
								? F
								: new T.$Mdb(
										`Language model '${R}' errored: ${(0, S.$xj)(F)}`,
										"Unknown",
										F,
									);
						}
					}
					m(E, R) {
						const C = [];
						for (const O of R)
							O.role === T.LanguageModelChatMessageRole.System &&
								(0, u.$u2)(E, "languageModelSystem"),
								O.content2.some((A) => A instanceof T.$Fdb) &&
									(0, u.$u2)(E, "lmTools"),
								C.push($.LanguageModelChatMessage.from(O));
						return C;
					}
					async $acceptResponsePart(E, R) {
						const C = this.i.get(E);
						C && C.res.handleFragment(R);
					}
					async $acceptResponseDone(E, R) {
						const C = this.i.get(E);
						C &&
							(this.i.delete(E),
							R ? C.res.reject((0, N.$7)(R)) : C.res.resolve());
					}
					async n(E, R, C, O) {
						const A = a.$07 + R.identifier.value;
						if (await this.k.getSession(E, A, [], { silent: !0 }))
							return (
								this.$updateModelAccesslist([
									{ from: E.identifier, to: R.identifier, enabled: !0 },
								]),
								!0
							);
						if (O) return !1;
						try {
							const L = C
								? (0, n.localize)(2712, null, R.displayName, C)
								: void 0;
							return (
								await this.k.getSession(E, A, [], {
									forceNewSession: { detail: L },
								}),
								this.$updateModelAccesslist([
									{ from: E.identifier, to: R.identifier, enabled: !0 },
								]),
								!0
							);
						} catch {
							return !1;
						}
					}
					o(E, R) {
						return !!R.auth && !p.$Gn.equals(R.extension, E);
					}
					async q(E) {
						if (E.auth)
							for (const R of this.s)
								try {
									await this.n(
										R,
										{ identifier: E.extension, displayName: "" },
										void 0,
										!0,
									);
								} catch (C) {
									this.j.error("Fake Auth request failed"), this.j.error(C);
								}
					}
					async r(E, R, C) {
						if (!this.g.get(E))
							throw T.$Mdb.NotFound(`Language model '${E}' is unknown.`);
						const A = I.Iterable.find(
							this.f.values(),
							(J) => J.languageModelId === E,
						);
						return A
							? A.provider.provideTokenCount(R, C)
							: this.b.$countTokens(
									E,
									typeof R == "string" ? R : $.LanguageModelChatMessage.from(R),
									C,
								);
					}
					$updateModelAccesslist(E) {
						const R = new Array();
						for (const { from: C, to: O, enabled: A } of E) {
							const J = this.h.get(C) ?? new p.$Hn();
							if (J.has(O) !== A) {
								A ? J.add(O) : J.delete(O), this.h.set(C, J);
								const b = { from: C, to: O };
								R.push(b), this.c.fire(b);
							}
						}
					}
					createLanguageModelAccessInformation(E) {
						this.s.add(E);
						const R = this,
							C = P.Event.signal(
								P.Event.filter(this.c.event, (A) =>
									p.$Gn.equals(A.from, E.identifier),
								),
							),
							O = P.Event.signal(this.d.event);
						return {
							get onDidChange() {
								return P.Event.any(C, O);
							},
							canSendRequest(A) {
								let J;
								e: for (const [b, F] of R.g)
									for (const D of F.apiObjects.values())
										if (D === A) {
											J = F.metadata;
											break e;
										}
								if (!J) return;
								if (!R.o(E.identifier, J)) return !0;
								const L = R.h.get(E.identifier);
								if (L) return L.has(J.extension);
							},
						};
					}
				};
				(t.$Vhd = w),
					(t.$Vhd = w = s = wt([rt(0, h.$08), rt(1, d.$ik), rt(2, c.$ehd)], w));
			},
		);
	var On =
		(this && this.__importDefault) ||
		function (we) {
			return we && we.__esModule ? we : { default: we };
		};
	