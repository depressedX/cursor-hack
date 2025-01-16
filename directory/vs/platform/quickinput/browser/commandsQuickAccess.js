define(
			de[679],
			he([
				1, 0, 163, 29, 132, 288, 3, 59, 1505, 4, 31, 10, 57, 5, 39, 34, 392, 21,
				32,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b, s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Q0b = e.$P0b = e.$O0b = e.$N0b = e.$M0b = e.$L0b = void 0);
				const l = ["Chat:", "Ask Github Copilot"];
				(e.$L0b = "Cursor: Open Chat"),
					(e.$M0b = "Cursor: Open Edit (Command K)"),
					(e.$N0b = "Cursor Settings"),
					(e.$O0b = "Open VS Code Settings");
				const y = [];
				let $ = class extends p.$GLb {
					static {
						b = this;
					}
					static {
						this.PREFIX = ">";
					}
					static {
						this.h = 0.5;
					}
					static {
						this.j = 5;
					}
					static {
						this.m = (0, w.or)(w.$Tk, w.$Yk, w.$Uk);
					}
					constructor(I, T, P, k, L, D) {
						super(b.PREFIX, I),
							(this.s = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.y = D),
							(this.n = this.D(this.s.createInstance(v))),
							(this.f = I);
					}
					async g(I, T, P, k) {
						const L = (await this.G(P)).filter(
							(U) => !l.some((z) => (U.commandAlias ?? "").startsWith(z)),
						);
						if (P.isCancellationRequested) return [];
						const D = (0, E.$hb)(() => {
								const U = new m.$8pb();
								U.updateDocuments(
									L.map((F) => ({ key: F.commandId, textChunks: [this.F(F)] })),
								);
								const z = U.calculateScores(I, P);
								return (0, m.$9pb)(z)
									.filter((F) => F.score > b.h)
									.slice(0, b.j);
							}),
							M = [];
						for (const U of L) {
							const z = b.m(I, U.label) ?? void 0,
								F = U.commandAlias
									? (b.m(I, U.commandAlias) ?? void 0)
									: void 0;
							if (z || F)
								(U.highlights = {
									label: z,
									detail: this.f.showAlias ? F : void 0,
								}),
									M.push(U);
							else if (I === U.commandId) M.push(U);
							else if (I.length >= 3) {
								const x = D();
								if (P.isCancellationRequested) return [];
								const H = x.find((q) => q.key === U.commandId);
								H && ((U.tfIdfScore = H.score), M.push(U));
							}
						}
						const N = new Map();
						for (const U of M) {
							const z = N.get(U.label);
							z
								? ((U.description = U.commandId), (z.description = z.commandId))
								: N.set(U.label, U);
						}
						M.sort((U, z) => {
							const F = y.includes(U.label),
								x = y.includes(z.label);
							if (F && x) return y.indexOf(U.label) - y.indexOf(z.label);
							if (F) return -1;
							if (x) return 1;
							if (U.tfIdfScore && z.tfIdfScore)
								return U.tfIdfScore === z.tfIdfScore
									? U.label.localeCompare(z.label)
									: z.tfIdfScore - U.tfIdfScore;
							if (U.tfIdfScore) return 1;
							if (z.tfIdfScore) return -1;
							const H = this.n.peek(U.commandId),
								q = this.n.peek(z.commandId);
							if (H && q) return H > q ? -1 : 1;
							if (H) return -1;
							if (q) return 1;
							if (this.f.suggestedCommandIds) {
								const V = this.f.suggestedCommandIds.has(U.commandId),
									G = this.f.suggestedCommandIds.has(z.commandId);
								if (V && G) return 0;
								if (V) return -1;
								if (G) return 1;
							}
							return U.label.localeCompare(z.label);
						});
						const A = [];
						let R = !1,
							O = !0,
							B = !!this.f.suggestedCommandIds;
						for (let U = 0; U < M.length; U++) {
							const z = M[U];
							U === 0 &&
								this.n.peek(z.commandId) &&
								(A.push({
									type: "separator",
									label: (0, r.localize)(2032, null),
								}),
								(R = !0)),
								O &&
									z.tfIdfScore !== void 0 &&
									(A.push({
										type: "separator",
										label: (0, r.localize)(2033, null),
									}),
									(O = !1)),
								B &&
									z.tfIdfScore === void 0 &&
									!this.n.peek(z.commandId) &&
									this.f.suggestedCommandIds?.has(z.commandId) &&
									(A.push({
										type: "separator",
										label: (0, r.localize)(2034, null),
									}),
									(R = !0),
									(B = !1)),
								R &&
									z.tfIdfScore === void 0 &&
									!this.n.peek(z.commandId) &&
									!this.f.suggestedCommandIds?.has(z.commandId) &&
									(A.push({
										type: "separator",
										label: (0, r.localize)(2035, null),
									}),
									(R = !1)),
								A.push(this.C(z, k));
						}
						return this.H(I, P)
							? {
									picks: A,
									additionalPicks: (async () => {
										const U = await this.I(L, M, I, P);
										if (P.isCancellationRequested) return [];
										const z = U.map((F) => this.C(F, k));
										return (
											O &&
												z[0]?.type !== "separator" &&
												z.unshift({
													type: "separator",
													label: (0, r.localize)(2036, null),
												}),
											z
										);
									})(),
								}
							: A;
					}
					C(I, T) {
						if (I.type === "separator") return I;
						const P = this.t.lookupKeybinding(I.commandId),
							k = P
								? (0, r.localize)(2037, null, I.label, P.getAriaLabel())
								: I.label;
						return {
							...I,
							ariaLabel: k,
							detail:
								this.f.showAlias && I.commandAlias !== I.label
									? I.commandAlias
									: void 0,
							keybinding: P,
							accept: async () => {
								this.n.push(I.commandId),
									this.w.publicLog2("workbenchActionExecuted", {
										id: I.commandId,
										from: T?.from ?? "quick open",
									});
								try {
									I.args?.length
										? await this.u.executeCommand(I.commandId, ...I.args)
										: await this.u.executeCommand(I.commandId);
								} catch (L) {
									(0, i.$8)(L) ||
										this.y.error(
											(0, r.localize)(2038, null, I.label),
											(0, t.$xj)(L),
										);
								}
							},
						};
					}
					F({ label: I, commandAlias: T, commandDescription: P }) {
						let k = I;
						return (
							T && T !== I && (k += ` - ${T}`),
							P &&
								P.value !== I &&
								(k += ` - ${P.value === P.original ? P.value : `${P.value} (${P.original})`}`),
							k
						);
					}
				};
				(e.$P0b = $),
					(e.$P0b =
						$ =
						b =
							Ne(
								[
									j(1, c.$Li),
									j(2, n.$uZ),
									j(3, u.$ek),
									j(4, f.$km),
									j(5, h.$GO),
								],
								$,
							));
				let v = class extends C.$1c {
					static {
						s = this;
					}
					static {
						this.DEFAULT_COMMANDS_HISTORY_LENGTH = 50;
					}
					static {
						this.c = "commandPalette.mru.cache";
					}
					static {
						this.f = "commandPalette.mru.counter";
					}
					static {
						this.h = 1;
					}
					static {
						this.j = !1;
					}
					constructor(I, T, P) {
						super(),
							(this.n = I),
							(this.q = T),
							(this.r = P),
							(this.m = 0),
							this.t(),
							this.u(),
							this.s();
					}
					s() {
						this.D(this.q.onDidChangeConfiguration((I) => this.t(I))),
							this.D(
								this.n.onWillSaveState((I) => {
									I.reason === o.WillSaveStateReason.SHUTDOWN && this.w();
								}),
							);
					}
					t(I) {
						(I &&
							!I.affectsConfiguration("workbench.commandPalette.history")) ||
							((this.m = s.getConfiguredCommandHistoryLength(this.q)),
							s.g &&
								s.g.limit !== this.m &&
								((s.g.limit = this.m), (s.j = !0)));
					}
					u() {
						const I = this.n.get(s.c, o.StorageScope.PROFILE);
						let T;
						if (I)
							try {
								T = JSON.parse(I);
							} catch (k) {
								this.r.error(`[CommandsHistory] invalid data: ${k}`);
							}
						const P = (s.g = new d.$Jc(this.m, 1));
						if (T) {
							let k;
							T.usesLRU
								? (k = T.entries)
								: (k = T.entries.sort((L, D) => L.value - D.value)),
								k.forEach((L) => P.set(L.key, L.value));
						}
						s.h = this.n.getNumber(s.f, o.StorageScope.PROFILE, s.h);
					}
					push(I) {
						s.g && (s.g.set(I, s.h++), (s.j = !0));
					}
					peek(I) {
						return s.g?.peek(I);
					}
					w() {
						if (!s.g || !s.j) return;
						const I = { usesLRU: !0, entries: [] };
						s.g.forEach((T, P) => I.entries.push({ key: P, value: T })),
							this.n.store(
								s.c,
								JSON.stringify(I),
								o.StorageScope.PROFILE,
								o.StorageTarget.USER,
							),
							this.n.store(
								s.f,
								s.h,
								o.StorageScope.PROFILE,
								o.StorageTarget.USER,
							),
							(s.j = !1);
					}
					static getConfiguredCommandHistoryLength(I) {
						const P = I.getValue().workbench?.commandPalette?.history;
						return typeof P == "number" ? P : s.DEFAULT_COMMANDS_HISTORY_LENGTH;
					}
					static clearHistory(I, T) {
						const P = s.getConfiguredCommandHistoryLength(I);
						(s.g = new d.$Jc(P)), (s.h = 1), (s.j = !0);
					}
				};
				(e.$Q0b = v),
					(e.$Q0b = v = s = Ne([j(0, o.$lq), j(1, a.$gj), j(2, g.$ik)], v));
			},
		),
		