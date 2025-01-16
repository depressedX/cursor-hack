define(
			de[4125],
			he([1, 0, 3, 8, 3, 20, 445, 180, 5, 45, 4124, 118, 735, 7, 7, 551, 340]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Yc = void 0),
					(n = mt(n));
				let o = class extends w.$1c {
					constructor(b, s, l, y, $) {
						super(),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.j = $),
							(this.a = new t.$Zc()),
							(this.c = new Map()),
							(this.rescrapeDocs = async (v, S) => {
								const I =
									this.h.applicationUserPersistentStorage.personalDocs.find(
										(L) => L.identifier === v,
									);
								if (!I) {
									console.log("No doc found in rescrapeDocs", v);
									return;
								}
								this.setDocsData(v, {
									indexingStatus: "indexing",
									indexingPageName: "started",
								});
								let T = v;
								const P = await this.j.uploadClient();
								let k;
								if (
									I.docUrlRoot &&
									I.docUrlPrefix &&
									I.publishToTeam !== void 0
								) {
									const L = new h.$1_({
										docIdentifier: v,
										metadata: {
											prefixUrl: I.docUrlRoot,
											truePrefixUrl: I.docUrlPrefix,
											docName: I.name,
											isDifferentPrefixOrigin: I.docUrlPrefix !== I.docUrlRoot,
										},
										publishToTeam: I.publishToTeam,
										clientHandlesUuid: !0,
									});
									k = await P.rescrapeDocsV2({
										newDocReq: L,
										forceReupload: S,
									});
									const D = k.newDocIdentifier;
									D !== void 0 &&
										D !== v &&
										((T = D),
										this.h.setApplicationUserPersistentStorage(
											"personalDocs",
											(M) =>
												M.map((N) =>
													N.identifier === v ? { ...N, identifier: D } : N,
												),
										));
								} else
									k = await P.rescrapeDocs({
										docIdentifier: v,
										forceReupload: S,
									});
								return this.startDocsPullingListener(T), k;
							}),
							(this.setupDocsData = async () => {
								const v = this.h.applicationUserPersistentStorage.personalDocs;
								if (v.length !== 0) {
									for (const S of v) {
										const I = await this.getDocWithNotFoundHandling(
											S.identifier,
										);
										I &&
											(this.setDocsData(S.identifier, {
												indexingStatus: I.uploadStatus
													? I.uploadStatus.status ===
														h.UploadedStatus_Status.SUCCEEDED
														? "success"
														: I.uploadStatus.status ===
																h.UploadedStatus_Status.IN_PROGRESS
															? "indexing"
															: "failure"
													: void 0,
												pages: I.pages ?? [],
												createdAt: I.createdAt,
												lastUploadedAt: I.lastUploadedAt,
											}),
											I.uploadStatus?.status ===
												h.UploadedStatus_Status.IN_PROGRESS &&
												this.startDocsPullingListener(S.identifier, I));
									}
									this.D(
										this.h.onChangeEffectManuallyDisposed({
											deps: [
												() =>
													this.h.applicationUserPersistentStorage.personalDocs,
											],
											onChange: ({ prevDeps: S, deps: I }) => {
												const [T] = S || [],
													[P] = I || [],
													k = P.filter(
														(L) =>
															!T?.find((D) => D.identifier === L.identifier),
													);
												for (const L of k)
													(!L.indexingStatus ||
														L.indexingStatus === "indexing") &&
														this.startDocsPullingListener(L.identifier);
											},
										}),
									);
								}
							}),
							(this.constructPagesArray = (v) => {
								const S = [];
								for (const I of v.pageUrls || []) S.push({ url: I, title: I });
								return S;
							}),
							this.setupDocsData();
					}
					async getDocWithNotFoundHandling(b) {
						const s = await this.j.uploadClient();
						try {
							return await s.getDoc({ docIdentifier: b });
						} catch (l) {
							if (l instanceof p.ConnectError && l.code === p.Code.NotFound) {
								const y =
									this.h.applicationUserPersistentStorage.personalDocs.find(
										($) => $.identifier === b,
									);
								y &&
								y.docUrlRoot &&
								y.docUrlPrefix &&
								y.publishToTeam !== void 0
									? this.setDocsData(b, { indexingStatus: "failure" })
									: this.h.setApplicationUserPersistentStorage(
											"personalDocs",
											($) => $.filter((v) => v.identifier !== b),
										);
								return;
							}
							throw l;
						}
					}
					async startDocsPullingListener(b, s, l = 500, y = 1e3 * 60 * 10) {
						const $ = await this.j.uploadClient();
						if ((s || (s = await this.getDocWithNotFoundHandling(b)), !s))
							return () => {};
						if (
							(this.c.has(b) && (this.c.get(b)?.dispose(), this.c.delete(b)),
							s.uploadStatus?.status === h.UploadedStatus_Status.FAILED)
						)
							return (
								this.setDocsData(b, {
									indexingStatus: "failure",
									docUrlRoot: s.docUrlRoot,
									docUrlPrefix: s.docUrlPrefix,
									isDifferentPrefixOrigin: s.isDifferentPrefix,
									publishToTeam: s.publishToTeam,
								}),
								() => {}
							);
						if (s.uploadStatus?.status === h.UploadedStatus_Status.SUCCEEDED)
							return (
								this.setDocsData(b, {
									indexingStatus: "success",
									pages: s.pages,
									createdAt: s.createdAt,
									lastUploadedAt: s.lastUploadedAt,
									indexingPageName: "",
									docUrlRoot: s.docUrlRoot,
									docUrlPrefix: s.docUrlPrefix,
									isDifferentPrefixOrigin: s.isDifferentPrefix,
									publishToTeam: s.publishToTeam,
								}),
								() => {}
							);
						this.setDocsData(b, {
							indexingStatus: "indexing",
							docUrlRoot: s.docUrlRoot,
							docUrlPrefix: s.docUrlPrefix,
							isDifferentPrefixOrigin: s.isDifferentPrefix,
							publishToTeam: s.publishToTeam,
						});
						const v = new Set();
						for (const k of s.pages || []) v.add(k.url);
						const S = (0, g.$s6b)(async (k) => {
								this.setDocsData(b, { indexingPageName: k });
							}, 50),
							I = (k) => {
								this.c.delete(b), k.dispose();
							},
							T = (0, c.$Ogb)(),
							P = n.$igb(
								T,
								async () => {
									if (
										!this.h.applicationUserPersistentStorage.personalDocs.find(
											(L) => L.identifier === b,
										)
									) {
										console.log(
											"No existing doc found in docs listener, this is bad:",
											b,
										),
											I(P);
										return;
									}
									try {
										const L = await $.getDoc({ docIdentifier: b });
										if (
											!L ||
											!L.uploadStatus ||
											L.uploadStatus.status === h.UploadedStatus_Status.FAILED
										) {
											L ||
												console.log(
													"No full doc found in docs listener, this is bad:",
													b,
												),
												this.setDocsData(b, {
													indexingStatus: "failure",
													docUrlRoot: L.docUrlRoot,
													docUrlPrefix: L.docUrlPrefix,
													isDifferentPrefixOrigin: L.isDifferentPrefix,
													publishToTeam: L.publishToTeam,
												}),
												I(P);
											return;
										}
										const { pages: D } = L,
											M = D[D.length - 1];
										M && S(M.title);
										for (const N of D || []) v.add(N.url);
										this.setDocsData(b, { pages: D }),
											L.uploadStatus.status ===
												h.UploadedStatus_Status.SUCCEEDED &&
												(this.setDocsData(b, {
													indexingStatus: "success",
													indexingPageName: "",
													createdAt: L.createdAt,
													lastUploadedAt: L.lastUploadedAt,
													docUrlRoot: L.docUrlRoot,
													docUrlPrefix: L.docUrlPrefix,
													isDifferentPrefixOrigin: L.isDifferentPrefix,
													publishToTeam: L.publishToTeam,
												}),
												I(P));
									} catch (L) {
										console.error("Error fetching document:", L),
											this.setDocsData(b, { indexingStatus: "failure" }),
											I(P);
									}
								},
								l,
							);
						return (
							this.c.set(b, P),
							setTimeout(() => {
								I(P);
							}, y),
							() => I(P)
						);
					}
					setDocsData(b, s) {
						const l = this.h.applicationUserPersistentStorage.personalDocs.find(
							(y) => y.identifier === b,
						);
						if (!l) {
							console.log("No existing doc found", b);
							return;
						}
						this.h.setApplicationUserPersistentStorage(
							"personalDocs",
							(y) => y.identifier === b,
							{ ...l, ...s },
						);
					}
					renderModal() {
						let b = this.f.activeContainer;
						b &&
							(this.b = (0, u.$6Yc)({
								container: b,
								instantiationService: this.g,
								onClose: () => {
									this.close();
								},
							}));
					}
					dispose() {
						super.dispose(),
							this.a.dispose(),
							this.b?.dispose(),
							this.c.forEach((b) => b.dispose()),
							this.c.clear();
					}
					close() {
						this.b?.dispose();
					}
				};
				(e.$7Yc = o),
					(e.$7Yc = o =
						Ne(
							[
								j(0, i.$6j),
								j(1, d.$jEb),
								j(2, m.$Li),
								j(3, r.$0zb),
								j(4, a.$Nfc),
							],
							o,
						)),
					(0, E.$lK)(C.$48b, o, E.InstantiationType.Delayed);
			},
		),
		