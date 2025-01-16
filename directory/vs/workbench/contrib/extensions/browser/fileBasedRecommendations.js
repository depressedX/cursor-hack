define(
			de[3467],
			he([
				1, 0, 553, 157, 314, 141, 4, 21, 62, 23, 19, 215, 67, 61, 666, 24, 3,
				70, 15, 25, 154, 28, 172, 45,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ITc = void 0);
				const v = "fileBasedRecommendations/promptedRecommendations",
					S = "extensionsAssistant/recommendations",
					I = 1e3 * 60 * 60 * 24;
				let T = class extends t.$DTc {
					get recommendations() {
						const k = [];
						return (
							[...this.j.keys()]
								.sort((L, D) => {
									if (
										this.j.get(L).recommendedTime ===
										this.j.get(D).recommendedTime
									) {
										if (this.m.has(L)) return -1;
										if (this.m.has(D)) return 1;
									}
									return this.j.get(L).recommendedTime >
										this.j.get(D).recommendedTime
										? -1
										: 1;
								})
								.forEach((L) => {
									k.push({
										extension: L,
										reason: {
											reasonId: w.ExtensionRecommendationReason.File,
											reasonText: (0, C.localize)(6580, null),
										},
									});
								}),
							k
						);
					}
					get importantRecommendations() {
						return this.recommendations.filter((k) => this.m.has(k.extension));
					}
					get otherRecommendations() {
						return this.recommendations.filter((k) => !this.m.has(k.extension));
					}
					constructor(k, L, D, M, N, A, R, O, B) {
						if (
							(super(),
							(this.n = k),
							(this.q = L),
							(this.r = D),
							(this.s = N),
							(this.t = A),
							(this.u = R),
							(this.w = O),
							(this.y = B),
							(this.h = new Map()),
							(this.j = new Map()),
							(this.m = new Set()),
							(this.g = {}),
							M.extensionRecommendations)
						)
							for (const [U, z] of Object.entries(M.extensionRecommendations))
								z.onFileOpen && (this.g[U.toLowerCase()] = z.onFileOpen);
					}
					async c() {
						if ((0, l.$yg)(this.g)) return;
						await this.n.whenInitialized;
						const k = this.O(),
							L = Date.now();
						Object.entries(k).forEach(([D, M]) => {
							(L - M) / I <= 7 &&
								this.g[D] &&
								this.j.set(D.toLowerCase(), { recommendedTime: M });
						}),
							this.D(this.q.onModelAdded((D) => this.C(D))),
							this.q.getModels().forEach((D) => this.C(D));
					}
					C(k) {
						const L =
							k.uri.scheme === r.Schemas.vscodeNotebookCell
								? o.CellUri.parse(k.uri)?.notebook
								: k.uri;
						if (!L) return;
						const D = (0, g.$Qb)([
							r.Schemas.untitled,
							r.Schemas.file,
							r.Schemas.vscodeRemote,
							...this.w.getWorkspace().folders.map((M) => M.uri.scheme),
						]);
						!L ||
							!D.includes(L.scheme) ||
							(Date.now() -
								(this.y.nonPersistentStorage
									.suppressFileExtensionRecommendationsStart ?? 0) >
								2e3 &&
								(0, f.$Oh)(() => this.F(L, k), 0, this.B));
					}
					F(k, L, D) {
						if (L.isDisposed()) return;
						const M = (0, u.$lh)(k).toLowerCase();
						D = D ?? this.h.get(M) ?? this.g;
						const N = Object.entries(D);
						if (N.length === 0) return;
						const A = new Map(),
							R = this.n.local,
							O = {},
							B = {},
							U = {};
						let z = !1;
						const F = L.getLanguageId();
						for (const [x, H] of N) {
							const q = [],
								V = [],
								G = [];
							for (const K of H) {
								let J = !1,
									W = !1;
								const X = !!K.languages,
									Y = !!K.contentPattern;
								if (
									((X || Y) && q.push(K),
									X && K.languages.includes(F) && (J = !0),
									K.pathGlob)
								) {
									const ne = K.pathGlob;
									(A.get(ne) ??
										(0, a.$Ik)(
											K.pathGlob,
											k.with({ fragment: "" }).toString(),
										)) &&
										(W = !0),
										A.set(ne, W);
								}
								let ie = J || W;
								(M && !ie) ||
									(ie &&
										K.whenInstalled &&
										(K.whenInstalled.every((ne) =>
											R.some((ee) => (0, s.$7p)({ id: ne }, ee.identifier)),
										) ||
											(ie = !1)),
									ie &&
										K.whenNotInstalled &&
										R.some((ne) =>
											K.whenNotInstalled?.some((ee) =>
												(0, s.$7p)({ id: ee }, ne.identifier),
											),
										) &&
										(ie = !1),
									ie &&
										Y &&
										(L.findMatches(K.contentPattern, !1, !0, !1, null, !1)
											.length ||
											(ie = !1)),
									ie
										? (V.push(K), q.pop())
										: (X || Y) && (G.push(K), X && (z = !0)));
							}
							V.length && (B[x] = V),
								G.length && (U[x] = G),
								q.length && (O[x] = q);
						}
						if ((M && this.h.set(M, O), Object.keys(U).length && z)) {
							const x = new p.$Zc();
							x.add(
								L.onDidChangeLanguage(() => {
									(0, f.$Oh)(
										() => {
											x.isDisposed || (this.F(k, L, U), x.dispose());
										},
										0,
										x,
									);
								}),
							),
								x.add(L.onWillDispose(() => x.dispose()));
						}
						Object.keys(B).length && this.G(k, L, B);
					}
					G(k, L, D) {
						let M = !1;
						const N = new Set(),
							A = new Set();
						for (const [B, U] of Object.entries(D))
							for (const z of U)
								A.add(B),
									z.important && (N.add(B), this.m.add(B)),
									z.languages && (M = !0);
						for (const B of A) {
							const U = this.j.get(B) || {
								recommendedTime: Date.now(),
								sources: [],
							};
							(U.recommendedTime = Date.now()), this.j.set(B, U);
						}
						if ((this.P(), this.t.hasToIgnoreRecommendationNotifications()))
							return;
						const R = L.getLanguageId(),
							O = this.r.getLanguageName(R);
						N.size &&
							this.H(
								O && M && R !== y.$0M
									? (0, C.localize)(6581, null, O)
									: (0, u.$kh)(k),
								R,
								[...N],
							);
					}
					H(k, L, D) {
						if (((D = this.M(D)), D.length === 0)) return !1;
						D = this.N(D, this.n.local).filter((N) => this.m.has(N));
						const M = L !== y.$0M ? this.J()[L] : void 0;
						return (
							M && (D = D.filter((N) => M.includes(N))),
							D.length === 0 ? !1 : (this.I(D, k, L), !0)
						);
					}
					async I(k, L, D) {
						try {
							(await this.t.promptImportantExtensionsInstallNotification({
								extensions: k,
								name: L,
								source: n.RecommendationSource.FILE,
							})) === n.RecommendationsNotificationResult.Accepted &&
								this.L(D, k);
						} catch {}
					}
					J() {
						return JSON.parse(this.s.get(v, d.StorageScope.PROFILE, "{}"));
					}
					L(k, L) {
						const D = this.J();
						(D[k] = (0, g.$Qb)([...(D[k] ?? []), ...L])),
							this.s.store(
								v,
								JSON.stringify(D),
								d.StorageScope.PROFILE,
								d.StorageTarget.USER,
							);
					}
					M(k) {
						const L = [
							...this.u.ignoredRecommendations,
							...this.t.ignoredRecommendations,
						];
						return k.filter((D) => !L.includes(D));
					}
					N(k, L) {
						const D = L.reduce(
							(M, N) => (
								N.enablementState !==
									i.EnablementState.DisabledByExtensionKind &&
									M.add(N.identifier.id.toLowerCase()),
								M
							),
							new Set(),
						);
						return k.filter((M) => !D.has(M.toLowerCase()));
					}
					O() {
						let k = JSON.parse(this.s.get(S, d.StorageScope.PROFILE, "[]"));
						Array.isArray(k) &&
							(k = k.reduce((D, M) => ((D[M] = Date.now()), D), {}));
						const L = {};
						return (
							Object.entries(k).forEach(([D, M]) => {
								typeof M == "number" && (L[D.toLowerCase()] = M);
							}),
							L
						);
					}
					P() {
						const k = {};
						this.j.forEach((L, D) => (k[D] = L.recommendedTime)),
							this.s.store(
								S,
								JSON.stringify(k),
								d.StorageScope.PROFILE,
								d.StorageTarget.MACHINE,
							);
					}
				};
				(e.$ITc = T),
					(e.$ITc = T =
						Ne(
							[
								j(0, E.$MQb),
								j(1, h.$QO),
								j(2, c.$nM),
								j(3, m.$Bk),
								j(4, d.$lq),
								j(5, n.$HTc),
								j(6, w.$0Qb),
								j(7, b.$Vi),
								j(8, $.$0zb),
							],
							T,
						));
			},
		),
		