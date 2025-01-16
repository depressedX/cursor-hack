define(de[4306], he([1, 0, 559, 4305]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		define(
			de[4307],
			he([
				1, 0, 4, 102, 20, 30, 60, 864, 814, 3847, 3884, 81, 8, 11, 31, 220, 100,
				14, 79,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_1c = void 0);
				const b = (0, f.$$O)(
						"timeline-view-icon",
						o.$ak.history,
						(0, t.localize)(11e3, null),
					),
					s = (0, f.$$O)(
						"timeline-open",
						o.$ak.history,
						(0, t.localize)(11001, null),
					);
				class l {
					constructor() {
						(this.id = m.$47),
							(this.name = u.$81c.TITLE),
							(this.containerIcon = b),
							(this.ctorDescriptor = new i.$Ji(u.$81c)),
							(this.order = 2),
							(this.weight = 30),
							(this.collapsed = !0),
							(this.canToggleVisibility = !0),
							(this.hideByDefault = !1),
							(this.canMoveView = !0),
							(this.when = r.$41c),
							(this.focusCommand = { id: "timeline.focus" });
					}
				}
				(e.$_1c = l),
					E.$Io
						.as(a.$No.Configuration)
						.registerConfiguration({
							id: "timeline",
							order: 1001,
							title: (0, t.localize)(11002, null),
							type: "object",
							properties: {
								"timeline.pageSize": {
									type: ["number", "null"],
									default: null,
									markdownDescription: (0, t.localize)(11003, null),
								},
								"timeline.pageOnScroll": {
									type: "boolean",
									default: !1,
									description: (0, t.localize)(11004, null),
								},
							},
						}),
					E.$Io.as(C.Extensions.ViewsRegistry).registerViews([new l()], d.$sAc);
				var $;
				(function (S) {
					(S.ID = "files.openTimeline"),
						(S.LABEL = (0, t.localize)(11005, null));
					function I() {
						return (T, P) => T.get(m.$57).setUri(P);
					}
					S.handler = I;
				})($ || ($ = {})),
					n.$fk.registerCommand($.ID, $.handler()),
					c.$ZX.appendMenuItem(c.$XX.ExplorerContext, {
						group: "4_timeline",
						order: 1,
						command: { id: $.ID, title: $.LABEL, icon: s },
						when: h.$Kj.and(g.$zUb.toNegated(), p.$BQb.HasResource, r.$41c),
					});
				const v = (0, f.$$O)(
					"timeline-filter",
					o.$ak.filter,
					(0, t.localize)(11006, null),
				);
				c.$ZX.appendMenuItem(c.$XX.TimelineTitle, {
					submenu: c.$XX.TimelineFilterSubMenu,
					title: (0, t.localize)(11007, null),
					group: "navigation",
					order: 100,
					icon: v,
				}),
					(0, w.$lK)(m.$57, r.$51c, w.InstantiationType.Delayed);
			},
		),
		define(
			de[1381],
			he([
				1, 0, 2, 2, 2, 2, 2, 9, 13, 310, 36, 134, 33, 584, 19, 26, 14, 156,
				3194, 322, 59, 12, 632, 19, 44, 17, 3, 15, 1376, 58, 23, 1973, 295,
				4154,
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
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6_b = void 0),
					(e.$7_b = q),
					(e.$8_b = V),
					(e.$9_b = G),
					(e.$0_b = J),
					(e.$$_b = W),
					(e.$__b = X),
					(e.$aac = Y),
					(e.$bac = ie),
					(e.$cac = ne),
					(e.$dac = ee),
					(e.$eac = _),
					(e.$fac = te),
					(e.$gac = Q);
				const A = (0, t.template)("<i>"),
					R = (0, t.template)("<span>Indexed "),
					O = (0, t.template)("<span>"),
					B = [
						"node_modules",
						"__tests__",
						".git",
						"dist",
						"out",
						"bin",
						"site-packages",
						"__pycache__",
					],
					U = new RegExp("(^|\\/)" + B.join("|") + "(\\/|$)");
				e.$6_b = /\.(png|jpg|jpeg|gif|tiff)$/i;
				var z;
				(function (se) {
					(se[(se.None = 0)] = "None"),
						(se[(se.NoncontiguousSubstring = 1)] = "NoncontiguousSubstring"),
						(se[(se.Substring = 2)] = "Substring"),
						(se[(se.StartsWith = 3)] = "StartsWith"),
						(se[(se.Exact = 4)] = "Exact");
				})(z || (z = {}));
				function F(se, re) {
					const le = re.toLowerCase(),
						oe = se.toLowerCase();
					let ae = 0;
					for (let pe = 0; pe < oe.length; pe++)
						if ((oe[pe] === le[ae] && ae++, ae === le.length)) return !0;
					return !1;
				}
				function x(se, re, le = !0) {
					re = re.toLowerCase();
					const ae = se
						.toLowerCase()
						.split(" ")
						.map((pe) =>
							pe === re
								? z.Exact
								: re.startsWith(pe)
									? z.StartsWith
									: re.includes(pe)
										? z.Substring
										: F(re, pe)
											? z.NoncontiguousSubstring
											: z.None,
						);
					return le
						? ae.some((pe) => pe === z.None)
							? z.None
							: Math.max(...ae)
						: ae.reduce((pe, $e) => pe + $e, 0) / ae.length;
				}
				function H(se, re, le) {
					const oe = [re, ...le].map((ae) => x(se, ae, !1));
					return Math.max(...oe);
				}
				function q(se) {
					const re = se;
					return !!re.picks && re.additionalPicks instanceof Promise;
				}
				function V(se) {
					const re = se;
					return Array.isArray(re.items);
				}
				function G({
					queryString: se,
					justClickedIntoMenu: re,
					mode: le,
					props: oe,
					vsContext: ae,
				}) {
					const [pe, $e] = (0, m.createSignal)(c.$Sdb.nextId()),
						[ye, ue] = (0, m.createSignal)([]),
						[fe, me] = (0, m.createSignal)(null);
					return (
						(0, m.onMount)(() => {
							ae.anythingQuickAccessProvider.initializeCaches();
						}),
						(0, m.createEffect)(
							(0, m.on)([re, se], async () => {
								const ve = le();
								if (
									ve !== r.TypeaheadOptionType.none &&
									ve !== r.TypeaheadOptionType.file
								)
									return;
								const ge = se(),
									be = re();
								if (ge === null && !be) {
									ue([]);
									return;
								}
								const Ce = new h.$Ce();
								fe() && (fe()?.cancel(), fe()?.dispose()), me(Ce);
								let Le = [];
								const Fe = ae.anythingQuickAccessProvider.doGetPicksPublic(
									ge ?? "",
									{
										enableEditorSymbolSearch: !1,
										excludeNotepads: !0,
										excludeSemanticSearch: !0,
										excludeCursorIgnore: !0,
									},
									new I.$Zc(),
									Ce.token,
								);
								if (q(Fe)) {
									let xe = !1,
										He = !1;
									await Promise.all([
										(async () => {
											if (
												!(
													typeof Fe.mergeDelay == "number" &&
													(await (0, T.$Nh)(Fe.mergeDelay),
													Ce.token.isCancellationRequested)
												) &&
												!He
											) {
												let Ke;
												V(Fe.picks) ? (Ke = Fe.picks.items) : (Ke = Fe.picks),
													(Le = Ke.map((Je) => {
														if (Je.type !== "separator") return Je.resource;
													}).filter((Je) => Je !== void 0)),
													(xe = !0);
											}
										})(),
										(async () => {
											try {
												const Ke = await Fe.additionalPicks;
												if (Ce.token.isCancellationRequested) return;
												let Je;
												V(Fe.picks) ? (Je = Fe.picks.items) : (Je = Fe.picks);
												let Te;
												V(Ke) ? (Te = Ke.items) : (Te = Ke),
													(Te.length > 0 || !xe) &&
														(Le = [...Je, ...Te]
															.map((Ee) => {
																if (Ee.type !== "separator") return Ee.resource;
															})
															.filter((Ee) => Ee !== void 0));
											} finally {
												He = !0;
											}
										})(),
									]);
								} else if (Fe instanceof Promise) {
									const xe = await Fe;
									if (fe()?.token.isCancellationRequested === !0) return;
									let He;
									V(xe) ? (He = xe.items) : (He = xe),
										(Le = He.map((Ke) => {
											if (Ke.type !== "separator") return Ke.resource;
										}).filter((Ke) => Ke !== void 0));
								} else {
									let xe;
									V(Fe) ? (xe = Fe.items) : (xe = Fe),
										(Le = xe
											.map((He) => {
												if (He.type !== "separator") return He.resource;
											})
											.filter((He) => He !== void 0));
								}
								Le = Le.filter(
									(xe) =>
										xe.scheme === L.Schemas.file ||
										xe.scheme === L.Schemas.vscodeRemote,
								);
								const Oe = Le.map((xe, He) => {
									const Ke = oe.isLongContextMode
										? new Promise((Ee, Ie) => {
												ae.fileService.stat(xe).then((Be) => {
													Ee(Be.size);
												});
											})
										: void 0;
									let Je = 9 + (Le.length - He) / Le.length;
									const Te = se();
									if (Te) {
										const Ee = (0, n.$kh)(xe).toLowerCase(),
											Ie = oe.recentFiles.has(xe.fsPath);
										(Ee.startsWith(Te) || `/${Ee}`.startsWith(Te)) && Ie
											? (Je += 3)
											: Ee.includes(Te) && Ie
												? (Je += 2)
												: (Ee.startsWith(Te) || `/${Ee}`.startsWith(Te)) &&
													(Je += 1);
									}
									return new r.$u_b(
										(0, n.$kh)(xe),
										(0, C.createComponent)(o.$k$b, {
											height: 14,
											get fileName() {
												return xe.fsPath;
											},
											get workspaceContextService() {
												return ae.workspaceContextService;
											},
											get modelService() {
												return ae.modelService;
											},
											get languageService() {
												return ae.languageService;
											},
										}),
										r.TypeaheadOptionType.file,
										Je,
										{ uri: xe },
										void 0,
										ae.workspaceContextService.asRelativePath(xe),
										void 0,
										void 0,
										Ke,
									);
								});
								ue(Oe.slice(0, r.$z_b));
							}),
						),
						{ fileOptions: ye, setFileOptions: ue }
					);
				}
				function K(se, re) {
					let le = [];
					for (let oe of re) {
						const ae = se.workspaceContextService.asRelativePath(oe);
						if (!ae) continue;
						let pe = ae.split("/");
						for (let $e = 1; $e < pe.length; $e++) {
							const ye = pe.slice(0, $e).join("/");
							ye !== "/" && ye !== "" && le.push(d.URI.parse(ye));
						}
					}
					return (
						(le = [...new Set(le.map((oe) => oe.toString()))].map((oe) =>
							d.URI.parse(oe),
						)),
						le
					);
				}
				function J({
					queryString: se,
					justClickedIntoMenu: re,
					mode: le,
					props: oe,
					vsContext: ae,
				}) {
					const [pe, $e] = (0, m.createSignal)([]),
						[ye, ue] = (0, m.createSignal)(null);
					return (
						(0, m.createEffect)(
							(0, m.on)([re, se], async () => {
								const fe = le();
								if (
									fe !== r.TypeaheadOptionType.none &&
									fe !== r.TypeaheadOptionType.folder
								)
									return;
								const me = se(),
									ve = re();
								if (me === null && !ve) {
									$e([]);
									return;
								}
								const ge = new h.$Ce();
								ye() && (ye()?.cancel(), ye()?.dispose()), ue(ge);
								const be = me ?? "";
								let Ce = (0, y.$K9b)(be),
									Le = (0, y.$L9b)(Ce);
								l.$l && (Le = Le.replaceAll("/", "\\"));
								let Fe = [];
								if (
									((Fe = (
										await ae.anythingQuickAccessProvider.getFilePicks(
											(0, b.$hs)(Le),
											new s.$Gc(),
											ge.token,
										)
									).map((Ue) => Ue.resource ?? d.URI.parse(""))),
									ge.token.isCancellationRequested)
								)
									return;
								const Ke = ae.editorService.editors
									.map((Ue) => Ue.resource)
									.filter((Ue) => Ue !== void 0);
								Fe = Fe.concat(Ke);
								const Je = new Map(Fe.map((Ue) => [Ue.toString(), Ue.path]));
								let Te = [];
								try {
									const Ue = await ae.commandService.executeCommand(
											"git.api.getRepositories",
										),
										qe = Fe.map((Ae) => Ae.toString());
									Te = (
										await Promise.all(
											Ue.map(async (Ae) => {
												const Me = qe
													.filter((De) => De.startsWith(Ae))
													.map((De) => Je.get(De) ?? De);
												return Ae && Me.length > 0
													? await ae.commandService.executeCommand(
															"git.api.checkIgnore",
															Ae,
															Me,
														)
													: [];
											}),
										)
									).flat();
								} catch (Ue) {
									console.error("ERROR during git call to ignored files"),
										console.error(Ue);
								}
								let Ee = K(ae, Fe);
								Ee = Ee.filter((Ue) => {
									let qe = ae.workspaceContextService
											.asRelativePath(Ue)
											.toLowerCase(),
										Ae = [[0], [0]];
									for (let Me = 0; Me < qe.length; Me++)
										Ae[0].push(Ae[0][Me]),
											Ae[1].push(
												Math.max(Ae[1][Me], Math.min(Le.length, Ae[0][Me] + 1)),
											),
											Ae[0][Me] < Le.length &&
												qe[Me] === Le[Ae[0][Me]] &&
												(Ae[0][Me + 1] = Ae[0][Me] + 1),
											Ae[1][Me] < Le.length &&
												qe[Me] === Le[Ae[1][Me]] &&
												(Ae[1][Me + 1] = Ae[1][Me] + 1);
									return Ae[1][qe.length] >= Le.length;
								});
								const Ie = Ee.map((Ue) => {
									{
										let qe = Le.toLowerCase(),
											Ae = 9;
										const Me = ae.workspaceContextService
												.asRelativePath(Ue)
												.toLowerCase(),
											De = (0, n.$kh)(Ue).toLowerCase().replaceAll("\\", "/"),
											Re = oe.recentFiles.has(Ue.fsPath);
										if (Ue)
											if (oe.isLongContextMode) {
												if (Me.endsWith(qe) || (Me + "/").endsWith(qe)) Ae = 16;
												else if (De.startsWith(qe)) Ae = 15;
												else if (De.includes(qe) && Re) Ae = 14;
												else if (De.includes(qe)) Ae = 13;
												else {
													const je = x(qe, De);
													if (je > 0 && Re) Ae = 12 + je / 4;
													else if (je > 0) Ae = 11 + je / 4;
													else {
														const Ve = x(qe, Me);
														Ve > 0 && Re
															? (Ae = 10 + Ve / 4)
															: Ve > 0
																? (Ae = 9 + Ve / 4)
																: (Ae = 8);
													}
												}
												U.test(Ue.path) && (Ae = 7),
													e.$6_b.test(Ue.path) && (Ae = 6),
													Te.includes(Ue.path) && (Ae = 5);
											} else {
												const je = Ue.path.replaceAll("\\", "/"),
													Ve = (0, n.$kh)(Ue)
														.toLowerCase()
														.replaceAll("\\", "/"),
													Ze = oe.recentFiles.has(Ue.fsPath);
												if (Ue) {
													if (Ve.startsWith(qe) && Ze) Ae = 12;
													else if (Ve.includes(qe) && Ze) Ae = 11;
													else if (Ve.startsWith(qe)) Ae = 10;
													else if (Ve.includes(qe)) Ae = 9;
													else {
														const et = x(qe, Ve);
														if (et > 0 && Ze) Ae = 8 + et / 4;
														else if (et > 0) Ae = 7 + et / 4;
														else {
															const rt = x(qe, Me);
															rt > 0 && Ze
																? (Ae = 6 + rt / 4)
																: rt > 0
																	? (Ae = 5 + rt / 4)
																	: (Ae = 4);
														}
													}
													U.test(je) && (Ae = 3),
														e.$6_b.test(je) && (Ae = 1),
														Te.includes(je) && (Ae = 1);
												}
											}
										return { folder: Ue, score: Ae };
									}
								});
								Ie.sort((Ue, qe) => qe.score - Ue.score);
								const Be = Ie.map(async (Ue) => {
										const { folder: qe, score: Ae } = Ue;
										let Me = ae.workspaceContextService
											.asRelativePath(qe)
											.replaceAll("\\", "/");
										const De = oe.isLongContextMode
												? ae.sourceFilesService
														.getFolderSize(qe.path)
														.catch(() => {})
												: void 0,
											Re = (0, n.$kh)(qe).replaceAll("\\", "/");
										return new r.$u_b(
											Re,
											(() => {
												const je = A();
												return (
													(0, E.effect)(() =>
														(0, w.className)(
															je,
															g.ThemeIcon.asClassName(p.$ak.folder),
														),
													),
													je
												);
											})(),
											r.TypeaheadOptionType.folder,
											Ae,
											{ uri: qe },
											void 0,
											Me,
											void 0,
											void 0,
											De,
										);
									}),
									Se = await Promise.all(Be),
									ke = [];
								for (const Ue of Se) Ue != null && ke.push(Ue);
								$e(ke.slice(0, r.$z_b));
							}),
						),
						{ folderOptions: pe, setFolderOptions: $e }
					);
				}
				function W({
					queryString: se,
					justClickedIntoMenu: re,
					mode: le,
					vsContext: oe,
				}) {
					const [ae, pe] = (0, m.createSignal)([]),
						[$e, ye] = (0, m.createSignal)(null);
					return (
						(0, m.createEffect)(
							(0, m.on)([se, re], async () => {
								const ue = se();
								pe(
									ue
										? [
												new r.$u_b(
													ue,
													(() => {
														const fe = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	fe,
																	g.ThemeIcon.asClassName(p.$ak.search),
																),
															),
															fe
														);
													})(),
													r.TypeaheadOptionType.text_search,
													5,
												),
											]
										: [],
								);
							}),
						),
						{ textSearchOptions: ae, setTextSearchOptions: pe }
					);
				}
				function X({ queryString: se, mode: re, vsContext: le, props: oe }) {
					const [ae, pe] = (0, m.createSignal)([]),
						[$e, ye] = (0, m.createSignal)([]),
						[ue, fe] = (0, m.createSignal)([]),
						[me, ve] = (0, m.createSignal)(null);
					return (
						(0, m.createEffect)(
							(0, m.on)([se, ue], () => {
								const ge = re();
								if (
									ge !== r.TypeaheadOptionType.none &&
									ge !== r.TypeaheadOptionType.doc
								)
									return;
								const be = se(),
									Ce = be === null || be.trim() === "" ? "" : be,
									Le = new h.$Ce();
								me() && (me()?.cancel(), me()?.dispose()), ve(Le);
								const Fe = (0, m.createMemo)(() =>
										ue()
											.filter((He) =>
												He.name.toLowerCase().includes(Ce.toLowerCase()),
											)
											.filter(
												(He) =>
													!oe.selectedDocs.some(
														(Ke) => Ke.docId === He.identifier,
													),
											)
											.map((He) => {
												let Ke = 10;
												const Je = He.lastUploadedAt ?? He.createdAt;
												return new r.$u_b(
													He.name,
													(() => {
														const Te = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Te,
																	g.ThemeIcon.asClassName(p.$ak.book),
																),
															),
															Te
														);
													})(),
													r.TypeaheadOptionType.doc,
													Ke,
													void 0,
													{ docId: He.identifier, name: He.name, url: He.url },
													Je
														? (() => {
																const Te = R(),
																	Ee = Te.firstChild;
																return (
																	Te.style.setProperty("direction", "ltr"),
																	Te.style.setProperty(
																		"display",
																		"inline-flex",
																	),
																	(0, i.insert)(
																		Te,
																		() => (0, P.$F_b)(Je),
																		null,
																	),
																	Te
																);
															})()
														: void 0,
													() => {
														le.commandService.executeCommand(
															k.$QV,
															"features",
															"cursor-settings-docs",
														);
													},
												);
											}),
									),
									Oe = (0, m.createMemo)(() => {
										const He = $e().filter(
												(Te) =>
													Te.metadata?.docName !== void 0 &&
													Te.metadata?.docName
														.toLowerCase()
														.includes(Ce.toLowerCase()),
											),
											Ke = [],
											Je = new Set();
										for (const Te of ue()) Je.add(Te.identifier);
										for (const Te of He)
											!Je.has(Te.docIdentifier ?? "") &&
												!oe.selectedDocs.some(
													(Ee) => Ee.docId === Te.docIdentifier,
												) &&
												(Ke.push(Te), Je.add(Te.docIdentifier ?? ""));
										return Ke.map((Te) => {
											let Ee = 10;
											return new r.$u_b(
												Te.metadata?.docName ?? "",
												(() => {
													const Ie = A();
													return (
														(0, E.effect)(() =>
															(0, w.className)(
																Ie,
																g.ThemeIcon.asClassName(p.$ak.book),
															),
														),
														Ie
													);
												})(),
												r.TypeaheadOptionType.doc,
												Ee,
												void 0,
												{
													docId: Te.docIdentifier,
													name: Te.metadata?.docName ?? "Not Found",
													url: Te.metadata?.prefixUrl,
												},
												Te.metadata?.public ? "Official" : "",
											);
										});
									}),
									xe = (0, m.createMemo)(() =>
										[...Fe(), ...Oe()].slice(0, r.$z_b),
									);
								pe([
									...xe(),
									new r.$u_b(
										"Add new doc",
										(() => {
											const He = A();
											return (
												(0, E.effect)(() =>
													(0, w.className)(
														He,
														g.ThemeIcon.asClassName(p.$ak.add),
													),
												),
												He
											);
										})(),
										r.TypeaheadOptionType.doc,
										-1,
										void 0,
										{ docId: "new", name: "Add new doc" },
									),
								]);
							}),
						),
						(0, m.createEffect)(async () => {
							const ge = await le.aiService.availableDocs({
									additionalDocIdentifiers:
										le.reactiveStorageService.applicationUserPersistentStorage.personalDocs.map(
											(Ce) => Ce.identifier,
										),
								}),
								be = new Set();
							fe(
								le.reactiveStorageService.applicationUserPersistentStorage.personalDocs.filter(
									(Ce) =>
										be.has(Ce.name)
											? !1
											: (be.add(Ce.name),
												ge.some((Le) => Le.docIdentifier === Ce.identifier)),
								),
							),
								ye(ge);
						}),
						{ setDocsOptions: pe, docsOptions: ae }
					);
				}
				function Y({
					queryString: se,
					justClickedIntoMenu: re,
					mode: le,
					vsContext: oe,
				}) {
					const [ae, pe] = (0, m.createSignal)([]),
						[$e, ye] = (0, m.createSignal)(null);
					return (
						(0, m.createEffect)(
							(0, m.on)([se, re], async () => {
								const ue = le();
								if (
									ue !== r.TypeaheadOptionType.none &&
									ue !== r.TypeaheadOptionType.code
								)
									return;
								const fe = se(),
									me = re();
								if (fe === null && !me) {
									pe([]);
									return;
								}
								if (
									(me ||
										(await new Promise((Te) => {
											setTimeout(() => {
												Te(null);
											}, 200);
										})),
									se() !== fe)
								)
									return;
								const ge = new h.$Ce();
								$e() !== null && ($e()?.cancel(), $e()?.dispose()), ye(ge);
								let be = [];
								if (me) {
									const Te = oe.editorService.getEditors(
										v.EditorsOrder.MOST_RECENTLY_ACTIVE,
									);
									if (Te.length > 0)
										for (const Ee of Te) {
											const Ie = Ee.editor.resource;
											if (Ie === void 0) continue;
											const Be = oe.modelService.getModel(Ie);
											if (Be === null) continue;
											const Se = (
												await oe.outlineService.getOrCreate(
													Be,
													h.CancellationToken.None,
												)
											).getTopLevelSymbols();
											be.push(
												...Se.map((ke) => ({
													name: ke.name,
													uri: Ie,
													range: ke.range,
												})),
											);
										}
								}
								const Ce = await oe.symbolsQuickAccessProvider.getSymbolPicks(
										fe === null || fe.trim() === "" ? "a" : fe,
										{ skipLocal: !1, skipSorting: !1, delay: 0 },
										ge.token,
									),
									Le = [];
								for (const Te of Ce)
									Te.symbol !== void 0 &&
										Le.push({
											name: Te.symbol.name,
											uri: Te.symbol.location.uri,
											range: Te.symbol.location.range,
										});
								const Fe = new Map(
									Le.map((Te) => [Te.uri.toString(), Te.uri.path]),
								);
								let Oe = [];
								try {
									const Te = await oe.commandService.executeCommand(
										"git.api.getRepositories",
									);
									for (let Ie = 0; Ie < Le.length; Ie++) {
										const Be = Le[Ie],
											Se = Be.uri,
											ke = Be.range,
											Ue = oe.workspaceContextService.asRelativePath(Se);
										if (Ue.endsWith(".py") || Ue.endsWith(".ipynb")) {
											const qe = oe.modelService.getModel(Se);
											if (qe === null) continue;
											if (ke.startLineNumber === ke.endLineNumber) {
												const Ae = qe.getLineFirstNonWhitespaceColumn(
													ke.startLineNumber,
												);
												let Me = ke.startLineNumber + 1;
												for (
													;
													Me <= qe.getLineCount() &&
													Me < ke.startLineNumber + 1e3 &&
													!(
														qe.getLineContent(Me).trim().length > 0 &&
														qe.getLineFirstNonWhitespaceColumn(Me) <= Ae
													);
												)
													Me++;
												be.push({
													...Be,
													range: new S.$iL(
														Be.range.startLineNumber,
														Be.range.startColumn,
														Me - 1,
														qe.getLineLastNonWhitespaceColumn(Me - 1),
													),
												});
												continue;
											}
										}
										be.push(Be);
									}
									const Ee = be.map((Ie) => Ie.uri.toString());
									Oe = (
										await Promise.all(
											Te.map(async (Ie) => {
												const Be = Ee.filter((Se) => Se.startsWith(Ie)).map(
													(Se) => Fe.get(Se) ?? Se,
												);
												return Ie && Be.length > 0
													? await oe.commandService.executeCommand(
															"git.api.checkIgnore",
															Ie,
															Be,
														)
													: [];
											}),
										)
									).flat();
								} catch (Te) {
									console.error("ERROR during git call to ignored files"),
										console.error(Te);
								}
								const xe = be.map((Te) => {
									{
										let Ee = 9;
										const Ie = Te.uri.path;
										return (
											U.test(Te.uri.path) && (Ee = 1),
											Oe.includes(Ie) && (Ee = 1),
											{ symbol: Te, score: Ee }
										);
									}
								});
								xe.sort((Te, Ee) => Ee.score - Te.score);
								const He = xe.slice(0, r.$z_b * 2).map(async (Te) => {
										const { symbol: Ee, score: Ie } = Te;
										return new r.$u_b(
											Ee.name,
											(() => {
												const Be = A();
												return (
													(0, E.effect)(() =>
														(0, w.className)(
															Be,
															g.ThemeIcon.asClassName(p.$ak.code),
														),
													),
													Be
												);
											})(),
											r.TypeaheadOptionType.code,
											Ie,
											{
												uri: Ee.uri,
												initialRange: new S.$iL(
													Ee.range.startLineNumber,
													1,
													Ee.range.endLineNumber + 1,
													1,
												),
											},
											void 0,
											oe.workspaceContextService.asRelativePath(
												(0, $.$mh)(Ee.uri),
											) +
												":" +
												Ee.range.startLineNumber,
										);
									}),
									Ke = await Promise.all(He),
									Je = [];
								for (const Te of Ke) Te != null && Je.push(Te);
								pe(Je.filter((Te) => Te !== null).slice(0, r.$z_b));
							}),
						),
						{ symbolOptions: ae, setSymbolOptions: pe }
					);
				}
				function ie({
					queryString: se,
					justClickedIntoMenu: re,
					mode: le,
					vsContext: oe,
					props: ae,
				}) {
					const [pe, $e] = (0, m.createSignal)([]);
					return (
						(0, m.createEffect)(() => {
							const ye = le(),
								ue = ae.commits;
							if (
								!(
									ye !== r.TypeaheadOptionType.none &&
									ye !== r.TypeaheadOptionType.git
								)
							) {
								if (
									!ae.supportsGit ||
									Z(
										ae.diffToMainUuid,
										ae.gitDiffUuid,
										ae.pullRequests.length,
										ue.length,
									) >= r.$A_b
								) {
									$e([]);
									return;
								}
								(async () => {
									const fe = se(),
										me = re();
									if (fe === null && !me) {
										$e([]);
										return;
									}
									if (
										(me ||
											(await new Promise((Ce) => {
												setTimeout(() => {
													Ce(null);
												}, 200);
											})),
										se() !== fe ||
											!oe.gitContextService.hasGitContextProvider())
									)
										return;
									const be = (
										await oe.gitContextService.searchAllCommits(fe ?? "")
									)?.filter(
										(Ce) => !ae.commits?.some((Le) => Le.sha === Ce.sha),
									);
									$e(
										(be ?? []).slice(0, r.$z_b).map(
											(Ce) =>
												new r.$u_b(
													Ce.message,
													(() => {
														const Le = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Le,
																	g.ThemeIcon.asClassName(p.$ak.gitCommit),
																),
															),
															Le
														);
													})(),
													r.TypeaheadOptionType.git_commit,
													10,
													void 0,
													void 0,
													Ce.sha,
												),
										),
									);
								})();
							}
						}),
						{ commitOptions: pe }
					);
				}
				function ne(se) {
					const [re, le] = (0, m.createSignal)([]);
					return (
						(0, m.createEffect)(() => {
							const { queryString: oe, vsContext: ae } = se,
								pe = oe()?.toLowerCase() ?? "",
								ye = Object.values(ae.notepadDataService.notepadsData.notepads)
									.filter((ue) => ue.name.toLowerCase().includes(pe))
									.map(
										(ue) =>
											new r.$u_b(
												ue.name,
												(() => {
													const fe = O();
													return (
														(0, E.effect)(() =>
															(0, w.className)(
																fe,
																g.ThemeIcon.asClassName(p.$ak.book),
															),
														),
														fe
													);
												})(),
												r.TypeaheadOptionType.notepad,
												10,
												void 0,
												void 0,
												void 0,
												void 0,
												{ notepadId: ue.id },
											),
									);
							le(ye);
						}),
						{ notepadOptions: re }
					);
				}
				function ee(se) {
					const { options: re, isLoading: le } = (0, D.$5_b)(se.queryString, {
						excludeFiles: () =>
							se.props.fileSelections.map((oe) => d.URI.revive(oe.uri)),
						disabled: () => se.mode() !== r.TypeaheadOptionType.auto_context,
					});
					return { autoContextOptions: re, autoContextLoading: le };
				}
				function _({
					mode: se,
					queryString: re,
					fileOptions: le,
					folderOptions: oe,
					symbolOptions: ae,
					docsOptions: pe,
					textSearchOptions: $e,
					commitOptions: ye,
					contextSession: ue,
					prOptions: fe,
					diffOptions: me,
					showCommitOptions: ve,
					notepadOptions: ge,
					autoContextOptions: be,
					autoContextLoading: Ce,
					props: Le,
				}) {
					const Fe = (0, u.$odc)(),
						[Oe, xe] = (0, m.createSignal)([]),
						He = (0, m.createMemo)(() => Le.supportsGit),
						Ke = (0, m.createMemo)(() => Le.supportsGit),
						Je = (0, m.createMemo)(() => Le.supportsGit),
						Te = (0, m.createMemo)(() => Le.supportsNotepads),
						Ee = (0, N.useForcedModeComposerId)(),
						Ie = (0, m.createMemo)(() => {
							const Se = Fe.composerService.shouldShowAcceptRejectAll(Ee);
							return Le.supportsDiffReview && Se;
						}),
						Be = (0, m.createMemo)(() => {
							const Se = [
									new r.$u_b(
										r.$s_b[r.TypeaheadOptionType.file],
										(() => {
											const Ue = A();
											return (
												(0, E.effect)(() =>
													(0, w.className)(
														Ue,
														g.ThemeIcon.asClassName(p.$ak.file),
													),
												),
												Ue
											);
										})(),
										r.TypeaheadOptionType.heading,
										10,
									),
									...(Le.supportsSymbols === void 0 || Le.supportsSymbols
										? [
												new r.$u_b(
													r.$s_b[r.TypeaheadOptionType.code],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.code),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.heading,
													9.9,
												),
											]
										: []),
									...(Le.addRepoMap !== void 0
										? [
												new r.$u_b(
													r.$s_b[r.TypeaheadOptionType.repo_map],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.map),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.repo_map,
													9.8,
												),
											]
										: []),
									...(Le.supportsDocs === void 0 || Le.supportsDocs
										? [
												new r.$u_b(
													r.$s_b[r.TypeaheadOptionType.doc],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.book),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.heading,
													9.8,
												),
											]
										: []),
									...(Le.supportsFolderSelections
										? [
												new r.$u_b(
													r.$s_b[r.TypeaheadOptionType.folder],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.folder),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.heading,
													9.95,
												),
											]
										: []),
									...(Le.supportsGit
										? [
												new r.$u_b(
													r.$s_b[r.TypeaheadOptionType.git],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.gitMerge),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.heading,
													9.5,
												),
											]
										: []),
									...(Le.supportsNotepads
										? [
												new r.$u_b(
													r.$s_b[r.TypeaheadOptionType.notepad],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.book),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.heading,
													9.2,
												),
											]
										: []),
									...(Le.supportsAutoContext
										? [
												new r.$u_b(
													r.$s_b[r.TypeaheadOptionType.auto_context],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.lightbulb),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.heading,
													9.16,
												),
											]
										: []),
									...(Le.supportsCodebase
										? [
												new r.$u_b(
													r.$s_b[r.TypeaheadOptionType.codebase],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.repo),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.codebase,
													9.15,
												),
											]
										: []),
									...(Le.supportsLint
										? [
												new r.$u_b(
													r.$s_b[r.TypeaheadOptionType.lint],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.error),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.lint,
													9.1,
												),
											]
										: []),
									...(Le.supportsWeb
										? [
												new r.$u_b(
													r.$s_b[r.TypeaheadOptionType.web],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.globe),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.web,
													9.05,
												),
											]
										: []),
									...(Ie()
										? [
												new r.$u_b(
													r.$s_b[r.TypeaheadOptionType.diff_review],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.openPreview),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.diff_review,
													9.1,
												),
											]
										: []),
									...(Le.onResetContext !== void 0
										? [
												new r.$u_b(
													r.$s_b[r.TypeaheadOptionType.reset_context],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.refresh),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.reset_context,
													8.8,
												),
											]
										: []),
									...(Le.onReferenceOpenEditors !== void 0
										? [
												new r.$u_b(
													r.$s_b[r.TypeaheadOptionType.reference_open_editors],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.files),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.reference_open_editors,
													8.7,
												),
											]
										: []),
									...(Le.onReferenceActiveEditors !== void 0
										? [
												new r.$u_b(
													r.$s_b[
														r.TypeaheadOptionType.reference_active_editors
													],
													(() => {
														const Ue = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ue,
																	g.ThemeIcon.asClassName(p.$ak.fileCode),
																),
															),
															Ue
														);
													})(),
													r.TypeaheadOptionType.reference_active_editors,
													8.6,
												),
											]
										: []),
								],
								ke = ue();
							if (ke !== void 0)
								for (const Ue of r.$v_b[ke.case])
									Se.push(f.$E_b[Ue].typeaheadOption);
							return Se;
						});
					return (
						(0, m.createEffect)(() => {
							const Se = re(),
								ke = se(),
								Ue = le(),
								qe = oe(),
								Ae = ae(),
								Me = pe(),
								De = be(),
								Re = He() ? ye() : [],
								je = Ke() ? fe() : [],
								Ve = Je() ? me() : [],
								Ze = Te() ? ge() : [],
								et = Ce();
							let rt = Be();
							const ft =
								Z(
									Le.diffToMainUuid,
									Le.gitDiffUuid,
									Le.pullRequests.length,
									Le.commits.length,
								) < r.$A_b && Le.supportsGit;
							if (
								((rt = rt.filter((bt) => bt.name !== "Git" || ft)),
								(Se === null || Se === "") && ke === r.TypeaheadOptionType.none)
							)
								xe(rt);
							else if (
								(Se?.startsWith("/") || Se?.startsWith("\\")) &&
								Le.supportsFolderSelections
							)
								xe(qe);
							else if (ke === r.TypeaheadOptionType.none) {
								const bt = rt.filter(
									(nt) =>
										(nt.name !== "Git" || ft) &&
										nt.name.toLowerCase().startsWith((Se ?? "").toLowerCase()),
								);
								if (bt.length > 0) xe(bt);
								else {
									const nt = (ht) => {
											try {
												return new URL(ht).hostname.includes(".");
											} catch {
												return !1;
											}
										},
										lt = [
											...(Le.supportsFolderSelections ? qe.slice(0, 5) : []),
											...Ue,
											...Ae,
											...Me,
											...Ve,
											...(ve() ? [...Re, ...je] : []),
											...(Le.supportsLink && Se && nt(Se)
												? [
														new r.$u_b(
															"Add link",
															(() => {
																const ht = A();
																return (
																	(0, E.effect)(() =>
																		(0, w.className)(
																			ht,
																			g.ThemeIcon.asClassName(p.$ak.link),
																		),
																	),
																	ht
																);
															})(),
															r.TypeaheadOptionType.link,
															-0.8,
														),
													]
												: []),
											...(Le.supportsAutoContext
												? De.map((ht) => (ht.overrideScore(ht.score), ht))
												: []),
											...(Z(
												Le.diffToMainUuid,
												Le.gitDiffUuid,
												Le.pullRequests.length,
												Le.commits.length,
											) >= r.$A_b
												? []
												: [
														new r.$u_b(
															ve()
																? "Hide Commits & PRs"
																: "Show Commits & PRs",
															(() => {
																const ht = A();
																return (
																	(0, E.effect)(() =>
																		(0, w.className)(
																			ht,
																			ve()
																				? g.ThemeIcon.asClassName(
																						p.$ak.eyeClosed,
																					)
																				: g.ThemeIcon.asClassName(p.$ak.eye),
																		),
																	),
																	ht
																);
															})(),
															r.TypeaheadOptionType.toggle_commit_options,
															-0.9,
														),
													]),
											...(Te() ? [...Ze] : []),
										].sort((ht, Rt) => {
											const Nt = ht.name
													.toLowerCase()
													.includes((Se ?? "").toLowerCase()),
												jt = Rt.name
													.toLowerCase()
													.includes((Se ?? "").toLowerCase());
											return Nt && jt
												? ht.name.localeCompare(Rt.name)
												: Nt
													? -1
													: jt
														? 1
														: ht.name.localeCompare(Rt.name);
										}),
										ct = lt.filter((ht) => ht.score >= 0),
										gt = lt.filter((ht) => ht.score < 0);
									xe([...ct.slice(0, 20), ...gt]);
								}
							} else
								ke === r.TypeaheadOptionType.auto_context
									? xe([
											new r.$u_b(
												r.$s_b[ke],
												A(),
												r.TypeaheadOptionType.staticheading,
												10,
												void 0,
												void 0,
												[
													"semantically related files",
													(0, C.createComponent)(m.Show, {
														when: et,
														get children() {
															return (0, C.createComponent)(M.$Z8b, {
																small: !0,
															});
														},
													}),
												],
											),
											...(Ce() ? [] : De.length > 0 ? De : Ue),
										])
									: ke === r.TypeaheadOptionType.file
										? xe([
												new r.$u_b(
													r.$s_b[ke],
													A(),
													r.TypeaheadOptionType.staticheading,
													10,
												),
												...Ue,
											])
										: ke === r.TypeaheadOptionType.folder
											? xe([
													new r.$u_b(
														r.$s_b[ke],
														A(),
														r.TypeaheadOptionType.staticheading,
														10,
													),
													...qe,
												])
											: ke === r.TypeaheadOptionType.code
												? xe([
														new r.$u_b(
															r.$s_b[ke],
															A(),
															r.TypeaheadOptionType.staticheading,
															10,
														),
														...Ae,
													])
												: ke === r.TypeaheadOptionType.text_search
													? xe([
															new r.$u_b(
																r.$s_b[ke],
																A(),
																r.TypeaheadOptionType.staticheading,
																10,
															),
														])
													: ke === r.TypeaheadOptionType.doc
														? xe([
																new r.$u_b(
																	r.$s_b[ke],
																	A(),
																	r.TypeaheadOptionType.staticheading,
																	10,
																),
																...Me,
															])
														: ke === r.TypeaheadOptionType.git
															? xe([
																	new r.$u_b(
																		r.$s_b[ke],
																		A(),
																		r.TypeaheadOptionType.staticheading,
																		10,
																	),
																	...Ve,
																	...Re,
																	...je,
																])
															: ke === r.TypeaheadOptionType.notepad &&
																xe([
																	new r.$u_b(
																		r.$s_b[ke],
																		A(),
																		r.TypeaheadOptionType.staticheading,
																		10,
																	),
																	...Ze,
																]);
						}),
						{ options: Oe, setOptions: xe }
					);
				}
				function te({
					mode: se,
					queryString: re,
					justClickedIntoMenu: le,
					vsContext: oe,
					props: ae,
				}) {
					const [pe, $e] = (0, m.createSignal)([]);
					return (
						(0, m.createEffect)(() => {
							if (se() === r.TypeaheadOptionType.git) {
								if (
									!ae.supportsGit ||
									Z(
										ae.diffToMainUuid,
										ae.gitDiffUuid,
										ae.pullRequests.length,
										ae.commits.length,
									) >= r.$A_b
								) {
									$e([]);
									return;
								}
								(async () => {
									const ue = re(),
										fe = le();
									if (ue === null && !fe) {
										$e([]);
										return;
									}
									if (
										(fe ||
											(await new Promise((be) => {
												setTimeout(() => {
													be(null);
												}, 200);
											})),
										re() !== ue)
									)
										return;
									const ge = (
										await oe.gitContextService.searchAllPrs(ue ?? "")
									)?.filter(
										(be) => !ae.pullRequests.some((Ce) => be.id == Ce.id),
									);
									$e(
										(ge ?? []).slice(0, r.$z_b).map(
											(be) =>
												new r.$u_b(
													be.title,
													(() => {
														const Ce = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Ce,
																	g.ThemeIcon.asClassName(p.$ak.gitMerge),
																),
															),
															Ce
														);
													})(),
													r.TypeaheadOptionType.git_pr,
													10,
													void 0,
													void 0,
													void 0,
													void 0,
													{ pr: be },
												),
										),
									);
								})();
							}
						}),
						{ prOptions: pe }
					);
				}
				function Q({
					mode: se,
					queryString: re,
					justClickedIntoMenu: le,
					props: oe,
				}) {
					const [ae, pe] = (0, m.createSignal)([]);
					return (
						(0, m.createEffect)(() => {
							const $e = se();
							if (
								!(
									$e !== r.TypeaheadOptionType.none &&
									$e !== r.TypeaheadOptionType.git
								)
							) {
								if (
									!oe.supportsGit ||
									Z(
										oe.diffToMainUuid,
										oe.gitDiffUuid,
										oe.pullRequests.length,
										oe.commits.length,
									) >= r.$A_b
								) {
									pe([]);
									return;
								}
								(async () => {
									const ye = re(),
										ue = le();
									if (ye === null && !ue) {
										pe([]);
										return;
									}
									if (
										(ue ||
											(await new Promise((Le) => {
												setTimeout(() => {
													Le(null);
												}, 200);
											})),
										re() !== ye)
									)
										return;
									const me = ["pr", "pull request", "branch"],
										ve = H(ye ?? "", r.$y_b, me),
										ge = ["commit", "diff"],
										be = H(ye ?? "", r.$x_b, ge);
									let Ce = [];
									ve !== z.None &&
										!oe.diffToMainUuid &&
										Ce.push(
											new r.$u_b(
												r.$y_b,
												(() => {
													const Le = A();
													return (
														(0, E.effect)(() =>
															(0, w.className)(
																Le,
																g.ThemeIcon.asClassName(p.$ak.diffModified),
															),
														),
														Le
													);
												})(),
												r.TypeaheadOptionType.git_diff,
												9 + ve,
												void 0,
												void 0,
												void 0,
												void 0,
												{ diff: a.DiffType.TO_MAIN_FROM_BRANCH },
											),
										),
										be !== z.None &&
											!oe.gitDiffUuid &&
											Ce.push(
												new r.$u_b(
													r.$x_b,
													(() => {
														const Le = A();
														return (
															(0, E.effect)(() =>
																(0, w.className)(
																	Le,
																	g.ThemeIcon.asClassName(p.$ak.diffModified),
																),
															),
															Le
														);
													})(),
													r.TypeaheadOptionType.git_diff,
													9 + be,
													void 0,
													void 0,
													void 0,
													void 0,
													{ diff: a.DiffType.TO_HEAD },
												),
											),
										pe(Ce);
								})();
							}
						}),
						{ diffOptions: ae }
					);
				}
				function Z(se, re, le, oe) {
					let ae = 0;
					return se && ae++, re && ae++, le + oe + ae;
				}
			},
		),
		define(
			de[1382],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 181, 756, 925, 304, 164, 158, 13, 228,
				7, 14, 3, 54, 26, 9, 47, 17, 347, 205, 134, 79, 354, 1069, 156, 1381,
				310, 817, 312, 36, 816, 1561, 564, 12, 2508,
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
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qac = e.$pac = e.$oac = void 0),
					(e.$rac = be),
					(e.$sac = Ce),
					(e.default = Le);
				const q = (0, t.template)("<span><span>"),
					V = (0, t.template)('<span class="sizePreview"> '),
					G = (0, t.template)("<i>"),
					K = (0, t.template)("<span>"),
					J = (0, t.template)(
						'<li tabindex="-1" role="option"><span></span><span>',
					),
					W = (0, t.template)("<div>"),
					X = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle">',
					),
					Y = (0, t.template)('<div class="input-box-code-selection"><div>'),
					ie = (0, t.template)("<span>No code to show"),
					ne = (0, t.template)("<span> to add<span></span> to multi-add"),
					ee = (0, t.template)(
						'<div id="mention-selection-preview"><div><div><div><div></div><span>',
					),
					_ = (0, t.template)("<div><span><span>"),
					te = (0, t.template)('<div id="mention-selection-preview">'),
					Q = (0, t.template)(
						'<li class="item"><span class="text">No available options',
					),
					Z = (0, t.template)("<ul>");
				(e.$oac = (0, L.$$O)(
					"chatinputbox-expand-selection",
					s.$ak.chevronDown,
					"Icon for removing a selection in the input box in AI chat.",
				)),
					(e.$pac = (0, L.$$O)(
						"chatinputbox-collapse-selection",
						s.$ak.chevronUp,
						"Icon for collapsing a selection in the input box in AI chat.",
					));
				async function se(Oe, xe) {
					try {
						return (await xe.resolve(Oe)).isDirectory;
					} catch (He) {
						return (
							console.error(`Failed to resolve the URI: ${Oe.toString()}`, He),
							!1
						);
					}
				}
				const re = [
						"node_modules",
						"__tests__",
						".git",
						"dist",
						"out",
						"bin",
						"site-packages",
						"__pycache__",
					],
					le = new RegExp("(^|\\/)" + re.join("|") + "(\\/|$)"),
					oe = new RegExp("(^|[^#])((?:" + O.$hac.NAME + "{1,})$)");
				function ae(Oe, xe) {
					const He = oe.exec(Oe);
					if (He !== null) {
						const Ke = He[1],
							Je = He[2];
						if (Je != null && Je.length >= xe)
							return {
								leadOffset: He.index + Ke.length,
								matchingString: Je,
								replaceableString: Je,
							};
					}
					return null;
				}
				const pe = (Oe) => {
					const xe = (0, o.createMemo)(() =>
							Oe.isSelected ? "item selected" : "item",
						),
						Ke = (0, U.$odc)().themeService.getColorTheme(),
						Je = Ke.getColor("menu.selectionBackground"),
						Te = Ke.getColor("menu.selectionForeground"),
						Ee = Ke.getColor("menu.inactiveSelectionForeground"),
						Ie = Ke.getColor("editorOverviewRuler.bracketMatchForeground"),
						Be = (qe) => {
							if (typeof qe == "string") return qe;
							const Ae = qe / 4,
								Me = [
									[1e6, "M toks"],
									[1e3, "K toks"],
									[1, " toks"],
								],
								[De, Re] = Me.find((Ze) => Ze[0] < Ae) ?? Me[Me.length - 1];
							return `${(Math.round(Ae / De) + "").match(/.{1,3}/g)?.join(",") ?? "<fmt err>"}${Re}`;
						},
						[Se, { refetch: ke }] = (0, o.createResource)(
							() => Oe.option.sizeBytes,
						),
						Ue = (0, o.createMemo)(() =>
							Se.loading || Se.error || Se() === void 0
								? ""
								: "(" + Be(Se() ?? 0) + ")",
						);
					return (() => {
						const qe = J(),
							Ae = qe.firstChild,
							Me = Ae.nextSibling;
						qe.addEventListener("click", () => {
							Oe.onClick();
						}),
							qe.addEventListener("mousemove", (Re) => {
								Oe.onMouseEnterOrMove(Re);
							}),
							qe.addEventListener("mouseenter", (Re) => {
								Oe.onMouseEnterOrMove(Re);
							});
						const De = Oe.option.setRefElement;
						return (
							typeof De == "function"
								? (0, u.use)(De, qe)
								: (Oe.option.setRefElement = qe),
							Ae.style.setProperty("display", "flex"),
							(0, r.insert)(Ae, () => Oe.option.picture),
							(0, r.insert)(Me, () => Oe.option.name),
							(0, r.insert)(
								qe,
								(0, C.createComponent)(o.Show, {
									get when() {
										return Oe.option.secondaryText;
									},
									get children() {
										return [
											(() => {
												const Re = q(),
													je = Re.firstChild;
												return (
													je.style.setProperty("direction", "ltr"),
													je.style.setProperty("unicode-bidi", "embed"),
													(0, r.insert)(je, () => Oe.option.secondaryText),
													(0, m.effect)(
														(Ve) => {
															const Ze =
																	"secondary-text" +
																	(Oe.option.type === "staticheading"
																		? " heading"
																		: ""),
																et = Oe.isSelected
																	? (Ee?.toString() ?? "")
																	: (Ie?.toString() ?? "");
															return (
																Ze !== Ve._v$ &&
																	(0, d.className)(Re, (Ve._v$ = Ze)),
																et !== Ve._v$2 &&
																	((Ve._v$2 = et) != null
																		? Re.style.setProperty("color", et)
																		: Re.style.removeProperty("color")),
																Ve
															);
														},
														{ _v$: void 0, _v$2: void 0 },
													),
													Re
												);
											})(),
											(0, C.createComponent)(o.Show, {
												get when() {
													return Oe.option.sizeBytes !== void 0;
												},
												get children() {
													const Re = V(),
														je = Re.firstChild;
													return (0, r.insert)(Re, Ue, null), Re;
												},
											}),
										];
									},
								}),
								null,
							),
							(0, r.insert)(
								qe,
								(0, C.createComponent)(o.Show, {
									get when() {
										return Oe.option.type === "heading";
									},
									get children() {
										const Re = G();
										return (
											Re.style.setProperty("margin-left", "auto"),
											(0, m.effect)(() =>
												(0, d.className)(
													Re,
													$.ThemeIcon.asClassName(s.$ak.arrowRight),
												),
											),
											Re
										);
									},
								}),
								null,
							),
							(0, r.insert)(
								qe,
								(0, C.createComponent)(o.Show, {
									get when() {
										return Oe.option.onSettingClick !== void 0;
									},
									get children() {
										const Re = K();
										return (
											Re.addEventListener("click", (je) => {
												je.stopPropagation(),
													Oe.option.onSettingClick &&
														Oe.option?.onSettingClick();
											}),
											(0, m.effect)(
												(je) => {
													const Ve = $.ThemeIcon.asClassName(
															s.$ak.settingsGear,
														),
														Ze = Oe.option.secondaryText ? "4px" : "auto";
													return (
														Ve !== je._v$3 &&
															(0, d.className)(Re, (je._v$3 = Ve)),
														Ze !== je._v$4 &&
															((je._v$4 = Ze) != null
																? Re.style.setProperty("margin-left", Ze)
																: Re.style.removeProperty("margin-left")),
														je
													);
												},
												{ _v$3: void 0, _v$4: void 0 },
											),
											Re
										);
									},
								}),
								null,
							),
							(0, r.insert)(
								qe,
								(0, C.createComponent)(o.Show, {
									get when() {
										return Oe.isSelected && Oe.option.type === "auto_context";
									},
									get children() {
										return (0, C.createComponent)(x.$nac, {
											size: "small",
											get text() {
												return (0, E.memo)(() => Oe.option.score !== void 0)()
													? `semantic (${Oe.option.score.toFixed(2)})`
													: "semantic";
											},
											style: { "margin-left": "6px" },
										});
									},
								}),
								null,
							),
							(0, m.effect)(
								(Re) => {
									const je = xe(),
										Ve = Oe.isSelected,
										Ze = "typeahead-item-" + Oe.index,
										et = {
											...(Oe.isSelected
												? {
														"background-color": Je?.toString() ?? "",
														color: Te?.toString() ?? "",
													}
												: {}),
											cursor:
												Oe.option.type === "staticheading"
													? "default"
													: "pointer",
										},
										rt = Oe.isSelected
											? (Ee?.toString() ?? "")
											: (Ie?.toString() ?? ""),
										ft =
											(Oe.option.type === "heading" ||
												Oe.option.type === "staticheading",
											"0px"),
										bt =
											"text" +
											(Oe.option.type === "staticheading" ? " heading" : "");
									return (
										je !== Re._v$5 && (0, d.className)(qe, (Re._v$5 = je)),
										Ve !== Re._v$6 &&
											(0, w.setAttribute)(qe, "aria-selected", (Re._v$6 = Ve)),
										Ze !== Re._v$7 &&
											(0, w.setAttribute)(qe, "id", (Re._v$7 = Ze)),
										(Re._v$8 = (0, i.style)(qe, et, Re._v$8)),
										rt !== Re._v$9 &&
											((Re._v$9 = rt) != null
												? Ae.style.setProperty("color", rt)
												: Ae.style.removeProperty("color")),
										ft !== Re._v$10 &&
											((Re._v$10 = ft) != null
												? Ae.style.setProperty("margin-left", ft)
												: Ae.style.removeProperty("margin-left")),
										bt !== Re._v$11 && (0, d.className)(Me, (Re._v$11 = bt)),
										Re
									);
								},
								{
									_v$5: void 0,
									_v$6: void 0,
									_v$7: void 0,
									_v$8: void 0,
									_v$9: void 0,
									_v$10: void 0,
									_v$11: void 0,
								},
							),
							qe
						);
					})();
				};
				function $e() {
					let Oe = "abcdefghijklmnopqrstuvwxyz",
						xe = "";
					for (let He = 0; He < 10; He++)
						xe += Oe.charAt(Math.floor(Math.random() * Oe.length));
					return v.URI.parse(`aichat-code-block-anysphere://${xe}`);
				}
				const ye = (Oe, xe, He) => {
					const Ke = He ?? 12,
						Je = 18,
						[Te, Ee] = (0, o.createSignal)(!1),
						Ie = Oe.text,
						Be = (() => {
							const je = W();
							return (
								je.style.setProperty("width", "100%"),
								je.style.setProperty("height", "100%"),
								je.style.setProperty("box-sizing", "border-box"),
								je
							);
						})(),
						Se = xe.instantiationService.createInstance(
							B.$X0b,
							Be,
							{
								...B.$X0b.getEditorOptions(xe.configurationService),
								fontSize: 10,
								lineHeight: 1.5,
							},
							{},
						),
						ke = new RegExp(/```[\w\s]*\nundefined\n```/),
						Ue = Ie.match(/```(\w*)/)?.[1] || "",
						qe = xe.languageService.createByLanguageNameOrFilepathOrFirstLine(
							Ue,
							null,
							void 0,
						),
						Ae = $e(),
						Me = Ie.split(`
`).slice(1, -1),
						De = Me.length > Je,
						Re = xe.modelService.createModel(
							Me.join(`
`),
							qe,
							Ae,
							!1,
						);
					return (
						Se.setModel(Re),
						(0, o.createEffect)(() => {
							Te()
								? Se.updateOptions({
										scrollbar: {
											vertical: "auto",
											verticalScrollbarSize: 10,
											horizontal: "auto",
											handleMouseWheel: !0,
											alwaysConsumeMouseWheel: !0,
											horizontalScrollbarSize: 10,
											ignoreHorizontalScrollbarInContentHeight: !0,
										},
									})
								: (Se.updateOptions({
										scrollbar: {
											vertical: "hidden",
											verticalScrollbarSize: 0,
											horizontal: "hidden",
											handleMouseWheel: !1,
											alwaysConsumeMouseWheel: !1,
											horizontalScrollbarSize: 0,
											ignoreHorizontalScrollbarInContentHeight: !0,
										},
									}),
									Se.setScrollTop(0),
									Se.setScrollLeft(0));
						}),
						(0, o.onCleanup)(() => {
							Se.dispose(), Re.dispose(), Be.remove();
						}),
						(() => {
							const je = Y(),
								Ve = je.firstChild;
							return (
								je.style.setProperty(
									"background-color",
									"var(--vscode-editor-background)",
								),
								je.style.setProperty(
									"border",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								je.style.setProperty("border-radius", "2px"),
								je.style.setProperty("position", "relative"),
								je.style.setProperty("overflow", "hidden"),
								Ve.style.setProperty("white-space", "pre"),
								Ve.style.setProperty("padding", "0.25rem 0.4rem"),
								(0, r.insert)(
									Ve,
									(() => {
										const Ze = (0, E.memo)(() => !!ke.test(Ie));
										return () =>
											Ze()
												? (() => {
														const et = ie();
														return (
															et.style.setProperty(
																"color",
																"var(--vscode-input-placeholderForeground)",
															),
															et
														);
													})()
												: Be;
									})(),
									null,
								),
								(0, r.insert)(
									Ve,
									(0, C.createComponent)(o.Show, {
										when: De,
										get children() {
											const Ze = X();
											return (
												Ze.addEventListener("click", () => {
													Ee(!Te());
												}),
												(0, r.insert)(
													Ze,
													(0, C.createComponent)(o.Switch, {
														get children() {
															return [
																(0, C.createComponent)(o.Match, {
																	get when() {
																		return !Te();
																	},
																	get children() {
																		const et = K();
																		return (
																			(0, m.effect)(() =>
																				(0, d.className)(
																					et,
																					$.ThemeIcon.asClassName(e.$oac),
																				),
																			),
																			et
																		);
																	},
																}),
																(0, C.createComponent)(o.Match, {
																	get when() {
																		return Te();
																	},
																	get children() {
																		const et = K();
																		return (
																			(0, m.effect)(() =>
																				(0, d.className)(
																					et,
																					$.ThemeIcon.asClassName(e.$pac),
																				),
																			),
																			et
																		);
																	},
																}),
															];
														},
													}),
												),
												(0, m.effect)((et) =>
													(0, i.style)(
														Ze,
														{
															right: Te() ? "10px" : 0,
															bottom: Te() ? "10px" : 0,
															...(Te()
																? { "background-color": "transparent" }
																: {}),
														},
														et,
													),
												),
												Ze
											);
										},
									}),
									null,
								),
								(0, m.effect)(() =>
									(De
										? Te()
											? `${15 * Je}px`
											: `${15 * Ke}px`
										: `${15 * Me.length}px`) != null
										? Ve.style.setProperty(
												"height",
												De
													? Te()
														? `${15 * Je}px`
														: `${15 * Ke}px`
													: `${15 * Me.length}px`,
											)
										: Ve.style.removeProperty("height"),
								),
								je
							);
						})()
					);
				};
				e.$qac = ye;
				const ue = (Oe) => {
					const [Je, Te] = (0, o.createSignal)(),
						[Ee, Ie] = (0, o.createSignal)(),
						Be = (0, U.$odc)();
					(0, o.createEffect)(async () => {
						if (
							Oe.selectedOption.type === "file" ||
							Oe.selectedOption.type === "auto_context"
						) {
							Te(void 0);
							const Me = Oe.selectedOption.selectionPrecursor?.uri.fsPath;
							if (!Me) return;
							const De =
								await Be.everythingProviderService.provider?.runCommand(
									k.FileRetrievalActions.GetDirectory,
									{ fsPath: Me },
								);
							if (!De) {
								Ie(void 0);
								return;
							}
							const Re = Be.workspaceContextService.asRelativePath(
									v.URI.file(Me),
								),
								je = (0, y.$sc)(Re),
								Ve = Re.replace(je, "");
							Ie({
								basePath: Ve,
								relativeWorkspacePath: Re,
								neighboringFiles: De,
							});
							return;
						}
						Ie(void 0);
						const Ae = await be(Oe.selectedOption, Be);
						if (
							Ae.type === P.SelectionType.Failure ||
							Ae.type === P.SelectionType.None ||
							Ae.type === P.SelectionType.Image ||
							Ae.type === P.SelectionType.Folder ||
							Ae.type === P.SelectionType.Docs ||
							Oe.selectedOption.type !== R.TypeaheadOptionType.code
						) {
							Te(void 0);
							return;
						}
						if (Ae.type === P.SelectionType.File) {
							const Me = await (0, D.$2fc)(
								Be.textModelService,
								Be.dataScrubbingService,
								Ae.selectionWithoutUuid,
							);
							Te(Me);
							return;
						}
						Te(Ae.selectionWithoutUuid);
					});
					const [Se, ke] = (0, o.createSignal)({
						top: Oe.selectedIndex * 24,
						right: -364,
					});
					(0, o.createEffect)(() => {
						const Ae = Ee() ? 300 : 360;
						let Me = Oe.selectedIndex * 20,
							De = -(Ae + 4);
						const Re = Oe.optionsListRef,
							je = Oe.selectedIndex,
							Ve = Re?.getBoundingClientRect();
						if (!Ve) return;
						Ve.right - De > Be.window.document.body.clientWidth &&
							(De = Ve.width + 4);
						const et = Be.window.document.getElementById(
							`typeahead-item-${Oe.selectedIndex}`,
						);
						if (et) {
							const rt = et.getBoundingClientRect(),
								ft = Oe.optionsListRef?.getBoundingClientRect();
							ft && (Me = rt.top - ft.top);
						}
						ke({ top: Me, right: De }),
							Be.window.requestIdleCallback(() => {
								const ft = Be.window.document
									.getElementById("mention-selection-preview")
									?.getBoundingClientRect();
								if (!ft) return;
								const bt = Be.window.document.getElementById(
									`typeahead-item-${je}`,
								);
								if (bt && Re) {
									const nt = bt.getBoundingClientRect(),
										lt = Re.getBoundingClientRect();
									(Me = nt.top - lt.top),
										nt.top + ft.height > Be.window.document.body.clientHeight &&
											(Me = nt.top - lt.top - ft.height + nt.height),
										ke({ top: Me, right: De });
								}
							});
					}, [Oe.selectedIndex]);
					const Ue = (0, o.createMemo)(
							() =>
								Ee()
									?.basePath.split("/")
									.filter((Ae) => !!Ae.trim()) ?? [],
						),
						qe = 12;
					return [
						(0, C.createComponent)(o.Show, {
							get when() {
								return Ee();
							},
							children: (Ae) =>
								(() => {
									const Me = ee(),
										De = Me.firstChild,
										Re = De.firstChild,
										je = Re.firstChild,
										Ve = je.firstChild,
										Ze = Ve.nextSibling;
									return (
										Me.style.setProperty("width", "300px"),
										Me.style.setProperty("border-radius", "2px"),
										Me.style.setProperty("position", "absolute"),
										Me.style.setProperty("overflow", "hidden"),
										Me.style.setProperty("font-size", "11px"),
										De.style.setProperty(
											"background-color",
											"var(--vscode-editor-background)",
										),
										De.style.setProperty(
											"border",
											"1px solid var(--vscode-commandCenter-inactiveBorder)",
										),
										De.style.setProperty("border-radius", "3px"),
										De.style.setProperty("display", "flex"),
										De.style.setProperty("flex-direction", "column"),
										De.style.setProperty("gap", "2px"),
										De.style.setProperty("position", "relative"),
										De.style.setProperty("overflow", "hidden"),
										Re.style.setProperty("display", "flex"),
										Re.style.setProperty("flex-direction", "column"),
										Re.style.setProperty("gap", "4px"),
										Re.style.setProperty("padding", "0.25rem 0.4rem"),
										(0, r.insert)(
											Re,
											(0, C.createComponent)(o.For, {
												get each() {
													return Ue();
												},
												children: (et, rt) =>
													(() => {
														const ft = _(),
															bt = ft.firstChild,
															nt = bt.firstChild;
														return (
															ft.style.setProperty("display", "flex"),
															ft.style.setProperty("align-items", "center"),
															ft.style.setProperty("overflow", "hidden"),
															ft.style.setProperty("text-overflow", "ellipsis"),
															ft.style.setProperty("white-space", "nowrap"),
															(0, r.insert)(
																ft,
																(0, C.createComponent)(o.For, {
																	get each() {
																		return Array(rt());
																	},
																	children: (lt) =>
																		(() => {
																			const ct = W();
																			return (
																				ct.style.setProperty(
																					"margin-left",
																					"12px",
																				),
																				ct.style.setProperty(
																					"border-left",
																					"1px solid var(--vscode-commandCenter-inactiveBorder)",
																				),
																				ct.style.setProperty(
																					"display",
																					"inline-block",
																				),
																				ct
																			);
																		})(),
																}),
																bt,
															),
															bt.style.setProperty("display", "flex"),
															bt.style.setProperty("align-items", "center"),
															bt.style.setProperty("gap", "4px"),
															bt.style.setProperty("overflow", "hidden"),
															bt.style.setProperty("text-overflow", "ellipsis"),
															bt.style.setProperty("white-space", "nowrap"),
															(0, r.insert)(bt, et, null),
															(0, m.effect)(
																(lt) => {
																	const ct = rt() === Ue().length - 1 ? 1 : 0.5,
																		gt = "calc(100% - " + qe * rt() + "px)",
																		ht = $.ThemeIcon.asClassName(s.$ak.folder);
																	return (
																		ct !== lt._v$15 &&
																			((lt._v$15 = ct) != null
																				? bt.style.setProperty("opacity", ct)
																				: bt.style.removeProperty("opacity")),
																		gt !== lt._v$16 &&
																			((lt._v$16 = gt) != null
																				? bt.style.setProperty("max-width", gt)
																				: bt.style.removeProperty("max-width")),
																		ht !== lt._v$17 &&
																			(0, d.className)(nt, (lt._v$17 = ht)),
																		lt
																	);
																},
																{ _v$15: void 0, _v$16: void 0, _v$17: void 0 },
															),
															ft
														);
													})(),
											}),
											je,
										),
										je.style.setProperty("display", "flex"),
										je.style.setProperty("align-items", "center"),
										je.style.setProperty("overflow", "hidden"),
										je.style.setProperty("text-overflow", "ellipsis"),
										je.style.setProperty("white-space", "nowrap"),
										Ve.style.setProperty(
											"border-left",
											"1px solid var(--vscode-commandCenter-inactiveBorder)",
										),
										Ve.style.setProperty("display", "inline-block"),
										Ze.style.setProperty("display", "flex"),
										Ze.style.setProperty("align-items", "center"),
										Ze.style.setProperty("gap", "4px"),
										Ze.style.setProperty("overflow", "hidden"),
										Ze.style.setProperty("text-overflow", "ellipsis"),
										Ze.style.setProperty("white-space", "nowrap"),
										(0, r.insert)(
											Ze,
											(0, C.createComponent)(N.$k$b, {
												get fileName() {
													return (0, y.$sc)(Ae().relativeWorkspacePath);
												},
												get workspaceContextService() {
													return Be.workspaceContextService;
												},
												get modelService() {
													return Be.modelService;
												},
												get languageService() {
													return Be.languageService;
												},
											}),
											null,
										),
										(0, r.insert)(
											Ze,
											() => (0, y.$sc)(Ae().relativeWorkspacePath),
											null,
										),
										(0, r.insert)(
											De,
											(0, C.createComponent)(o.Show, {
												get when() {
													return (
														Oe.selectedOption.type !== "staticheading" &&
														Oe.selectedOption.type !== "heading" &&
														!Oe.selectedOption.isSlash
													);
												},
												get children() {
													const et = ne(),
														rt = et.firstChild,
														ft = rt.nextSibling,
														bt = ft.nextSibling;
													return (
														et.style.setProperty("line-height", "14px"),
														et.style.setProperty("justify-self", "flex-end"),
														et.style.setProperty("width", "100%"),
														et.style.setProperty("opacity", "0.7"),
														et.style.setProperty("box-sizing", "border-box"),
														et.style.setProperty("font-size", "0.9em"),
														et.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														et.style.setProperty("flex-shrink", "0"),
														et.style.setProperty("display", "flex"),
														et.style.setProperty("align-items", "center"),
														et.style.setProperty("gap", "4px"),
														et.style.setProperty(
															"background-color",
															"var(--vscode-dropdown-background)",
														),
														et.style.setProperty("padding", "0.15rem 0.4rem"),
														et.style.setProperty("justify-content", "flex-end"),
														(0, r.insert)(et, (H.$m, "\u23CE"), rt),
														ft.style.setProperty("width", "2px"),
														ft.style.setProperty("height", "2px"),
														ft.style.setProperty(
															"background-color",
															"var(--vscode-input-placeholderForeground)",
														),
														ft.style.setProperty("border-radius", "50%"),
														ft.style.setProperty("display", "inline-block"),
														(0, r.insert)(
															et,
															H.$m ? "\u21E7\u23CE" : "Shift+\u23CE",
															bt,
														),
														et
													);
												},
											}),
											null,
										),
										(0, m.effect)(
											(et) => {
												const rt = Se().top + "px",
													ft = Se().right + "px",
													bt = qe * Ue().length + "px";
												return (
													rt !== et._v$12 &&
														((et._v$12 = rt) != null
															? Me.style.setProperty("top", rt)
															: Me.style.removeProperty("top")),
													ft !== et._v$13 &&
														((et._v$13 = ft) != null
															? Me.style.setProperty("right", ft)
															: Me.style.removeProperty("right")),
													bt !== et._v$14 &&
														((et._v$14 = bt) != null
															? Ve.style.setProperty("margin-left", bt)
															: Ve.style.removeProperty("margin-left")),
													et
												);
											},
											{ _v$12: void 0, _v$13: void 0, _v$14: void 0 },
										),
										Me
									);
								})(),
						}),
						(0, C.createComponent)(o.Show, {
							get when() {
								return Je();
							},
							children: (Ae) =>
								(() => {
									const Me = te();
									return (
										Me.style.setProperty("width", "360px"),
										Me.style.setProperty("border-radius", "2px"),
										Me.style.setProperty("position", "absolute"),
										(0, r.insert)(Me, () => (0, e.$qac)(Ae(), Be)),
										(0, m.effect)(
											(De) => {
												const Re = Se().top + "px",
													je = Se().right + "px";
												return (
													Re !== De._v$18 &&
														((De._v$18 = Re) != null
															? Me.style.setProperty("top", Re)
															: Me.style.removeProperty("top")),
													je !== De._v$19 &&
														((De._v$19 = je) != null
															? Me.style.setProperty("right", je)
															: Me.style.removeProperty("right")),
													De
												);
											},
											{ _v$18: void 0, _v$19: void 0 },
										),
										Me
									);
								})(),
						}),
					];
				};
				async function fe(Oe, xe) {
					if (Oe.selectionPrecursor === void 0)
						return {
							type: P.SelectionType.Failure,
							message: "No selection precursor",
						};
					if (A.$6_b.test(Oe.selectionPrecursor.uri.fsPath))
						return {
							type: P.SelectionType.Image,
							imageUri: Oe.selectionPrecursor.uri,
						};
					const He = xe.modelService.getModel(Oe.selectionPrecursor.uri);
					if (He !== null) {
						if (He.getValueLength() > 1e6)
							return {
								type: P.SelectionType.Failure,
								message: "File too large - over 1M chars",
							};
					} else {
						const { size: Je } = await xe.fileService.stat(
							Oe.selectionPrecursor.uri,
						);
						if (Je > 2e6)
							return {
								type: P.SelectionType.Failure,
								message: "File too large",
							};
					}
					const Ke = Oe.selectionPrecursor.uri;
					return {
						type: P.SelectionType.File,
						selectionWithoutUuid: { uri: Ke },
					};
				}
				async function me(Oe, xe) {
					return Oe.docSelection
						? {
								type: P.SelectionType.Docs,
								selectionWithoutUuid: Oe.docSelection,
							}
						: { type: P.SelectionType.None };
				}
				async function ve(Oe, xe) {
					return Oe.secondaryText
						? {
								type: P.SelectionType.Folder,
								selectionWithoutUuid: {
									relativePath:
										typeof Oe.secondaryText == "string" ? Oe.secondaryText : "",
								},
							}
						: { type: P.SelectionType.Failure, message: "No secondary text" };
				}
				async function ge(Oe, xe) {
					if (Oe.selectionPrecursor === void 0)
						return {
							type: P.SelectionType.Failure,
							message: "No selection precursor",
						};
					let He;
					Oe.selectionPrecursor.initialRange !== void 0 &&
						(He = new I.$iL(
							Oe.selectionPrecursor.initialRange.startLineNumber - 0,
							1,
							Oe.selectionPrecursor.initialRange.endLineNumber + 0,
							1,
						));
					const Ke = await (0, D.$Vfc)(
						xe.textModelService,
						xe.dataScrubbingService,
						Oe.selectionPrecursor.uri,
						He,
					);
					return Ke === void 0
						? {
								type: P.SelectionType.Failure,
								message: "Unable to get code selection",
							}
						: { type: P.SelectionType.Code, selectionWithoutUuid: Ke };
				}
				async function be(Oe, xe) {
					return Oe.type === "file" || Oe.type === "auto_context"
						? await fe(Oe, xe)
						: Oe.type === "code"
							? await ge(Oe, xe)
							: Oe.type === "folder"
								? await ve(Oe, xe)
								: Oe.type === "doc"
									? await me(Oe, xe)
									: { type: P.SelectionType.None };
				}
				function Ce(Oe, xe, He, Ke) {
					if (xe.removeMention && xe.removeMention(Ke)) return;
					const Je = Oe.selections.findIndex((Ue) => Ue.uuid === Ke),
						Te = Oe.fileSelections.findIndex((Ue) => Ue.uuid === Ke),
						Ee = Oe.commits.findIndex((Ue) => Ue.uuid === Ke),
						Ie = Oe.pullRequests.findIndex((Ue) => Ue.uuid === Ke),
						Be = Oe.folderSelections.findIndex((Ue) => Ue.uuid === Ke),
						Se = Oe.imageUuids.findIndex((Ue) => Ue === Ke),
						ke = Oe.links.findIndex((Ue) => Ue.uuid === Ke);
					Ke === Oe.gitDiffUuid
						? xe.removeGitDiff()
						: Ke === Oe.diffToMainUuid
							? xe.removeDiffToMain()
							: Je !== -1
								? xe.removeSelection(Je)
								: Te !== -1
									? xe.removeFileSelection(Te)
									: Ee !== -1
										? xe.removeCommit(Ee)
										: Ie !== -1
											? xe.removePullRequest(Ie)
											: He in Oe.lintKeys
												? xe.removeLinterErrors()
												: He in Oe.webKeys
													? xe.removeWeb()
													: He in Oe.repoMapKeys
														? xe.removeRepoMap?.()
														: He in Oe.currentFileKeys
															? xe.removeCurrentFile()
															: He in Oe.codebaseKeys
																? xe.removeCodebase()
																: Be !== -1
																	? xe.removeFolderSelection(Be)
																	: Se !== -1
																		? xe.removeImage(Ke)
																		: ke !== -1
																			? xe.removeLink(Ke)
																			: xe.removeDocs(Ke);
				}
				function Le(Oe) {
					const xe = (0, U.$odc)(),
						[He] = (0, a.useLexicalComposerContext)(),
						[Ke, Je] = (0, o.createSignal)(R.TypeaheadOptionType.none),
						[Te, Ee] = (0, o.createSignal)(!1),
						[Ie, Be] = (0, o.createSignal)(null),
						[Se, ke] = (0, o.createSignal)(""),
						Ue = new l.$Zc();
					(0, o.onCleanup)(() => {
						Ue.dispose();
					});
					const qe = (0, o.createMemo)(() =>
							Oe.contextSessionUuid
								? xe.aiContextSessionService.getReactiveReadonlyContextSession(
										Oe.contextSessionUuid,
									)
								: void 0,
						),
						[Ae, Me] = (0, o.createSignal)(!1);
					function De(Wt) {
						let tt = gt.get(Wt);
						return (
							tt ||
								gt.forEach((at) => {
									at.storedKey === Wt && (tt = at);
								}),
							tt
						);
					}
					(0, o.createEffect)(() => {
						const Wt = qe();
						if (Wt === void 0) return;
						const tt = Wt.intents.map((at) => at.intent.uuid);
						gt.forEach((at, pi) => {
							const Li = at.__contextIntent?.uuid;
							Li &&
								!tt.includes(Li) &&
								He.update(() => {
									const Di = De(pi);
									Di && (Di.remove(), gt.delete(Di.__key));
								});
						});
					}),
						(0, o.createEffect)(() => {
							const Wt = Oe.mentionToAdd,
								tt = Oe.setMentionToAdd;
							Wt &&
								Wt.type === "file" &&
								He.update(() => {
									const at =
											Wt.relativePath.split("/").pop() ?? Wt.relativePath,
										pi = [],
										Li = new R.$u_b(
											at,
											pi,
											R.TypeaheadOptionType.file,
											0,
											{ uri: Wt.uri },
											void 0,
											Wt.relativePath,
										);
									jt(Li, void 0, Wt.defaultCollapsed), tt?.(null);
								});
						}),
						(0, o.createEffect)(() => {
							const Wt = Oe.mentionIdToDelete,
								tt = Oe.setMentionIdToDelete;
							Wt !== null &&
								He.update(() => {
									const at = De(Wt);
									at && (at.remove(), gt.delete(at.__key)), tt(null);
								});
						}),
						(0, o.createEffect)(() => {
							const Wt = He.getRootElement();
							if (!Wt) return;
							const tt = xe.fileService,
								at = new b.$Hhb(Wt, {
									onDrop: async (pi) => {
										const Li = pi.dataTransfer?.files[0]?.type;
										if (Li !== void 0 && Li !== "text/plain" && Li !== "")
											return;
										const Di = [];
										(
											await xe.instantiationService.invokeFunction((Wi) =>
												(0, T.$jzb)(Wi, pi),
											)
										).forEach((Wi) => {
											const Gi = Wi.resource;
											if (!Gi) return;
											const qi = xe.workspaceContextService.asRelativePath(Gi),
												Oi =
													qi
														.split("/")
														.filter((yi) => yi !== "")
														.pop() ?? qi;
											Gi.scheme === "file" &&
												se(Gi, tt).then((yi) => {
													if (yi) {
														const Ai = new R.$u_b(
															Oi,
															Di,
															R.TypeaheadOptionType.folder,
															0,
															{ uri: Gi },
															void 0,
															qi,
														);
														jt(Ai);
													} else {
														const Ai = qi.split("/").pop() ?? qi,
															li = new R.$u_b(
																Ai,
																Di,
																R.TypeaheadOptionType.file,
																0,
																{ uri: Gi },
																void 0,
																qi,
															);
														jt(li);
													}
												});
										});
									},
									onDragEnter: async (pi) => {},
									onDragLeave: (pi) => {},
									onDragEnd: (pi) => {},
								});
							Ue.add(at);
						}),
						(0, o.createEffect)(() => {
							const Wt = He.getRootElement();
							if (!Wt) return;
							const tt = (at) => {
								const pi = at.target;
								if (!(0, b.$Ygb)(pi)) return;
								const Li = pi.getAttribute("data-typeahead-type");
								if (Li && Li === R.TypeaheadOptionType.link) {
									const Di = pi.getAttribute("data-mention-key"),
										Ui = pi.getAttribute("data-mention-name");
									if (!Di || !Ui) return;
									at.stopPropagation(), at.preventDefault();
									const Wi = pi.getBoundingClientRect();
									xe.commandService.executeCommand(
										"cursor.mentionLinkToolbar",
										{
											x: Wi.left,
											y: Wi.bottom + 2,
											link: Ui,
											onRemove: () => {
												He.update(() => {
													const Gi = (0, g.$getSelection)();
													Gi &&
														(Gi.insertText(Ui),
														gt.get(Di)?.remove(),
														Oe.removeLink(Di),
														He.focus());
												});
											},
										},
									);
								}
							};
							Wt.addEventListener("click", tt),
								(0, o.onCleanup)(() => {
									Wt.removeEventListener("click", tt);
								});
						});
					const Re = He.registerCommand(
						g.KEY_ESCAPE_COMMAND,
						(Wt) =>
							Te() && Jt().length > 0
								? (Ee(!1), si([]), Oe.onMentionsMenuClose?.(), !0)
								: !1,
						g.COMMAND_PRIORITY_CRITICAL,
					);
					(0, o.onCleanup)(() => {
						Re();
					});
					const [je, Ve] = (0, o.createSignal)([]),
						[Ze, et] = (0, o.createSignal)([]),
						[rt, ft] = (0, o.createSignal)([]),
						[bt, nt] = (0, o.createSignal)([]),
						[lt, ct] = (0, o.createSignal)([]),
						gt = new Map(),
						ht = He.registerMutationListener(z.$2_b, (Wt) => {
							for (let [tt, at] of Wt)
								if (at === "created")
									He.update(() => {
										const pi = (0, g.$getNodeByKey)(tt);
										pi &&
											(gt.set(tt, pi),
											pi.metadata?.selectedOption &&
												jt(pi.metadata.selectedOption, pi));
									});
								else if (at === "destroyed") {
									Kt(!1), Je(R.TypeaheadOptionType.none);
									const pi = De(tt);
									if (pi) {
										const Li = pi.__contextIntent;
										if (Li) {
											const Di = qe();
											Di !== void 0 &&
												xe.aiContextSessionService.updateContextSession(
													Di.uuid,
													{
														removedIntentUuids: [Li.uuid],
														upsertedIntents: [],
														rerankEndpoint: void 0,
													},
												);
										}
									}
									gt.delete(tt),
										Nt.delete(tt),
										pi &&
											Ce(
												{
													fileSelections: Oe.fileSelections,
													selections: Oe.selections,
													folderSelections: Oe.folderSelections,
													commits: Oe.commits,
													pullRequests: Oe.pullRequests,
													diffToMainUuid: Oe.diffToMainUuid,
													gitDiffUuid: Oe.gitDiffUuid,
													imageUuids: Oe.imageUuids,
													links: Oe.linksSelections,
													lintKeys: je(),
													currentFileKeys: Ze(),
													codebaseKeys: rt(),
													webKeys: bt(),
													repoMapKeys: lt(),
													notepadIds: Oe.notepadIds,
												},
												Oe,
												tt,
												pi.storedKey,
											);
								}
						});
					(0, o.onCleanup)(() => {
						ht();
					});
					const Rt = (Wt, tt, at, pi, Li) => {
							const Di = (0, g.$createTextNode)(""),
								Ui =
									Li?.shiftKey &&
									Wt.type !== R.TypeaheadOptionType.staticheading &&
									Wt.type !== R.TypeaheadOptionType.heading;
							if (
								(tt &&
									!Ui &&
									(tt.select(),
									Wt.type === "heading"
										? (Wt.name === R.$s_b[R.TypeaheadOptionType.folder]
												? tt.setTextContent("@/")
												: tt.setTextContent("@"),
											tt.select())
										: Wt.type === R.TypeaheadOptionType.toggle_commit_options ||
											tt.replace(Di)),
								Ui)
							) {
								jt(Wt, void 0, void 0, !0, !0);
								return;
							}
							at(), jt(Wt);
						},
						Nt = new Set(),
						jt = async (Wt, tt, at, pi = !1, Li = !1) => {
							if (tt && Nt.has(tt.__key)) return;
							if (
								(tt ||
									(Wt.type !== R.TypeaheadOptionType.heading &&
										xe.telemetryService.publicLogCapture(
											`mention_node.created.${Wt.type}`,
											{ type: Wt.type },
										)),
								Wt.type === R.TypeaheadOptionType.toggle_commit_options)
							) {
								Me(!Ae());
								return;
							}
							Kt(!1), Li || Je(R.TypeaheadOptionType.none);
							let Di = Wt.name;
							if (Wt.type === R.TypeaheadOptionType.folder) {
								const yi =
									typeof Wt.secondaryText == "string" ? Wt.secondaryText : Di;
								Di.length >= yi.length && (Di = yi);
							}
							Wt.type === R.TypeaheadOptionType.link && (Di = ti() ?? "");
							let Ui = Wt.docSelection,
								Wi = !0;
							if (Wt.name === "Add new doc") {
								if (
									(tt === void 0 &&
										(xe.reactiveStorageService.setNonPersistentStorage(
											"newDoc",
											void 0,
										),
										await xe.commandService.executeCommand("cursor.newdocs")),
									(Wi =
										xe.reactiveStorageService.nonPersistentStorage.newDoc !==
										void 0),
									(Di =
										xe.reactiveStorageService.nonPersistentStorage.newDoc
											?.name ?? ""),
									!Di)
								) {
									He.focus(), console.error("no name for doc, skipping");
									return;
								}
								xe.reactiveStorageService.nonPersistentStorage.newDoc &&
									(Ui = {
										docId:
											xe.reactiveStorageService.nonPersistentStorage.newDoc
												.identifier,
										name: Di,
									}),
									He.focus(),
									await new Promise((yi) => {
										setTimeout(() => {
											yi(null);
										}, 100);
									});
							}
							const Gi = (0, o.createMemo)(() => Oe.showErrorMessage),
								qi = await be(Wt, xe);
							let Oi;
							Wt.selectionPrecursor &&
								qi.type !== P.SelectionType.Image &&
								Wt.type !== R.TypeaheadOptionType.folder &&
								(Oi = await xe.textModelService.createModelReference(
									Wt.selectionPrecursor.uri,
								)),
								He.update(() => {
									if (Wt.type === "heading") {
										for (const wi of R.$r_b)
											if (Wt.name === R.$s_b[wi]) {
												Je(wi);
												break;
											}
										Kt(!0), Ye(Date.now());
										return;
									}
									let yi;
									const Ai = qe();
									if (
										(typeof Wt.type == "object" &&
											"case" in Wt.type &&
											Wt.type.case === "simple_mentions_handler" &&
											((yi = new f.$6B(Wt.type.contextIntent())),
											Ai !== void 0 &&
												xe.aiContextSessionService.updateContextSession(
													Ai.uuid,
													{
														removedIntentUuids: [],
														upsertedIntents: [yi],
														rerankEndpoint: void 0,
													},
												)),
										Wt.type === "file" &&
											Ai !== void 0 &&
											Wt.selectionPrecursor !== void 0)
									)
										(yi = new f.$6B({
											type: f.ContextIntent_Type.USER_ADDED,
											uuid: (0, S.$9g)(),
											intent: {
												case: "file",
												value: {
													relativeWorkspacePath:
														xe.workspaceContextService.asRelativePath(
															Wt.selectionPrecursor.uri,
														),
													mode: f.ContextIntent_File_Mode.UNSPECIFIED,
												},
											},
										})),
											xe.aiContextSessionService.updateContextSession(Ai.uuid, {
												removedIntentUuids: [],
												upsertedIntents: [yi],
												rerankEndpoint: void 0,
											});
									else if (
										Wt.type === R.TypeaheadOptionType.code &&
										Ai !== void 0 &&
										Oi !== void 0 &&
										Wt.selectionPrecursor !== void 0 &&
										Wt.selectionPrecursor.initialRange !== void 0
									) {
										if (!Wt.selectionPrecursor?.initialRange)
											throw new Error("No selection precursor initial range");
										const wi = Oi.object.textEditorModel.getValueInRange(
												Wt.selectionPrecursor.initialRange,
											),
											_t = Oi.object.getLanguageId();
										(yi = new f.$6B({
											type: f.ContextIntent_Type.USER_ADDED,
											uuid: (0, S.$9g)(),
											intent: {
												case: "codeSelection",
												value: {
													relativeWorkspacePath:
														xe.workspaceContextService.asRelativePath(
															Wt.selectionPrecursor.uri,
														),
													text: `\`\`\`${_t}
${wi}\`\`\``,
													potentiallyOutOfDateRange:
														Wt.selectionPrecursor.initialRange,
												},
											},
										})),
											xe.aiContextSessionService.updateContextSession(Ai.uuid, {
												removedIntentUuids: [],
												upsertedIntents: [yi],
												rerankEndpoint: void 0,
											});
									}
									if (Wt.type === R.TypeaheadOptionType.reset) {
										Oe.onReset?.();
										return;
									} else if (
										Wt.type === R.TypeaheadOptionType.reference_open_editors
									) {
										Oe.onReferenceOpenEditors?.();
										return;
									} else if (
										Wt.type === R.TypeaheadOptionType.reference_active_editors
									) {
										Oe.onReferenceActiveEditors?.();
										return;
									} else if (Wt.type === R.TypeaheadOptionType.reset_context) {
										Oe.onResetContext?.();
										return;
									}
									He.focus();
									const li =
										tt ??
										(0, z.$createMentionNode)(
											Di,
											yi,
											void 0,
											Wt.type === R.TypeaheadOptionType.link ||
												R.$t_b.includes(Wt.type)
												? Wt.type
												: void 0,
											qi,
											void 0,
											Wt,
										);
									if ((Nt.add(li.__key), !tt)) {
										const wi = (0, g.$createTextNode)(" "),
											_t = (0, g.$createTextNode)("");
										if (
											(_t.setMode("segmented").toggleDirectionless(),
											qi.type === P.SelectionType.Failure && yi === void 0)
										) {
											Gi()(qi.message);
											return;
										}
										if (pi) {
											const ai = (0, g.$getSelection)();
											if ((0, p.$isRangeSelection)(ai)) {
												const Ft = ai.anchor,
													Xt = Ft.getNode();
												if ((0, p.$isTextNode)(Xt)) {
													const $t = Xt.getTextContent(),
														ut = Ft.offset,
														Et = $t.lastIndexOf("@", ut);
													if (Et !== -1) {
														const Tt = $t.slice(0, Et),
															qt = $t.slice(Et);
														Xt.setTextContent(Tt);
														const At = (0, g.$createTextNode)(qt);
														Xt.insertAfter(At),
															Xt.insertAfter(li),
															qt.startsWith(" ") ||
																li.insertAfter((0, g.$createTextNode)(" ")),
															At.select();
													}
												}
											}
										} else (0, p.$insertNodes)([li, _t, wi]);
									}
									const Vi = ti();
									if (qi.type === P.SelectionType.File && !yi) {
										const wi = {
											...qi.selectionWithoutUuid,
											uuid: li.storedKey,
											collapseByDefault: at ?? !1,
										};
										Oe.insertFileSelection(wi);
									} else if (qi.type === P.SelectionType.Image && !yi)
										Oe.insertImage({ uri: qi.imageUri, uuid: li.storedKey });
									else if (qi.type === P.SelectionType.Code && !yi) {
										const wi = {
											...qi.selectionWithoutUuid,
											uuid: li.storedKey,
										};
										Oe.insertSelection(wi);
									} else if (Ui !== void 0 && Wi)
										Oe.insertDocs({ ...Ui, uuid: li.storedKey });
									else if (Wt.type === R.TypeaheadOptionType.text_search)
										Oe.insertTextSearch({
											query: Wt.name,
											uuid: li.storedKey,
											files: xe.sourceFilesService.getFilesOfSearch(Wt.name),
										});
									else if (Wt.type === R.TypeaheadOptionType.git_commit)
										Oe.insertCommit({
											sha:
												typeof Wt.secondaryText == "string"
													? Wt.secondaryText
													: "",
											message: Wt.name,
											uuid: li.storedKey,
										});
									else if (Wt.type === R.TypeaheadOptionType.git_pr)
										Oe.insertPullRequest({ ...Wt.pr, uuid: li.storedKey });
									else if (Wt.type === R.TypeaheadOptionType.git_diff) {
										const wi = Wt.diff;
										wi === k.DiffType.TO_HEAD
											? Oe.insertGitDiff(li.storedKey)
											: wi === k.DiffType.TO_MAIN_FROM_BRANCH &&
												Oe.insertDiffToMain(li.storedKey);
									} else if (Wt.type === R.TypeaheadOptionType.lint)
										Oe.addLinterErrors(li.storedKey),
											Ve((wi) => ({ ...wi, [li.storedKey]: !0 }));
									else if (Wt.type === R.TypeaheadOptionType.current_file)
										Oe.addCurrentFile(),
											et((wi) => ({ ...wi, [li.storedKey]: !0 }));
									else if (Wt.type === R.TypeaheadOptionType.web)
										Oe.addWeb(li.storedKey),
											nt((wi) => ({ ...wi, [li.storedKey]: !0 }));
									else if (Wt.type === R.TypeaheadOptionType.repo_map)
										Oe.addRepoMap?.(li.storedKey),
											ct((wi) => ({ ...wi, [li.storedKey]: !0 }));
									else if (Wt.type === R.TypeaheadOptionType.codebase)
										Oe.addCodebase(li.storedKey),
											ft((wi) => ({ ...wi, [li.storedKey]: !0 }));
									else if (Wt.type === R.TypeaheadOptionType.folder)
										Oe.insertFolderSelection({
											relativePath:
												typeof Wt.secondaryText == "string"
													? Wt.secondaryText
													: "not_defined_should_not_happen",
											uuid: li.storedKey,
										});
									else if (Wt.type === R.TypeaheadOptionType.link && Vi)
										Oe.insertLink({ url: Vi, uuid: li.storedKey });
									else if (Wt.type === R.TypeaheadOptionType.commit_notes)
										Oe.addCommitNotes();
									else if (Wt.type === R.TypeaheadOptionType.notepad)
										Oe.insertNotepad({
											notepadId: Wt.notepadId,
											uuid: li.storedKey,
										});
									else if (Wt.type === R.TypeaheadOptionType.diff_review) {
										Oe.addDiffReview(li.storedKey);
										return;
									} else if (
										Wt.type === R.TypeaheadOptionType.context_picking
									) {
										Oe.addContextPicking?.(li.storedKey);
										return;
									} else if (Wt.type === R.TypeaheadOptionType.remember_this) {
										Oe.addRememberThis(li.storedKey);
										return;
									}
								});
						},
						[ti, kt] = (0, o.createSignal)(null),
						[hi, Kt] = (0, o.createSignal)(!1),
						[di, Ye] = (0, o.createSignal)(0);
					(0, o.createEffect)(() => {
						const Wt = ti();
						Date.now() - di() > 100 && Kt(!1),
							(Wt === null || Wt === "") &&
								Date.now() - di() > 100 &&
								Je(R.TypeaheadOptionType.none);
					});
					const ze = (0, o.createMemo)(() => (Te() ? ti() : Se()) ?? ""),
						Xe = {
							queryString: ze,
							justClickedIntoMenu: hi,
							mode: Ke,
							props: Oe,
							vsContext: xe,
						},
						{ symbolOptions: It } = (0, A.$aac)(Xe),
						{ fileOptions: Lt } = (0, A.$9_b)(Xe),
						{ docsOptions: xt } = (0, A.$__b)(Xe),
						{ textSearchOptions: Vt } = (0, A.$$_b)(Xe),
						{ commitOptions: Bt } = (0, A.$bac)(Xe),
						{ prOptions: Gt } = (0, A.$fac)(Xe),
						{ diffOptions: Mt } = (0, A.$gac)(Xe),
						{ folderOptions: Ut } = (0, A.$0_b)(Xe),
						{ notepadOptions: ei } = (0, A.$cac)(Xe),
						{ autoContextOptions: mi, autoContextLoading: ii } = (0, A.$dac)(
							Xe,
						),
						Dt = (Wt) => (Te() ? Wt : []),
						{ options: Jt, setOptions: si } = (0, A.$eac)({
							mode: Ke,
							queryString: ze,
							fileOptions: Lt,
							symbolOptions: It,
							folderOptions: () => Dt(Ut()),
							docsOptions: () => Dt(xt()),
							textSearchOptions: () => Dt(Vt()),
							commitOptions: () => Dt(Bt()),
							prOptions: () => Dt(Gt()),
							diffOptions: () => Dt(Mt()),
							notepadOptions: () => Dt(ei()),
							contextSession: qe,
							autoContextOptions: () => Dt(mi()),
							showCommitOptions: () => (Te() ? Ae() : !1),
							autoContextLoading: ii,
							props: Oe,
						});
					(0, o.createEffect)(() => {
						if (Te()) {
							Be(null), Oe.setGhostText("");
							return;
						}
						const Wt = Se();
						if (Wt.length <= 2) {
							Be(null), Oe.setGhostText("");
							return;
						}
						const tt = Jt()
								.sort((pi, Li) => Li.score - pi.score)
								.filter(
									(pi) =>
										pi.name.startsWith(Wt) &&
										pi.name.length > Wt.length &&
										pi.type !== R.TypeaheadOptionType.staticheading &&
										pi.type !== R.TypeaheadOptionType.toggle_commit_options &&
										pi.type !== R.TypeaheadOptionType.heading &&
										pi.type !== R.TypeaheadOptionType.none &&
										pi.type !== R.TypeaheadOptionType.repo_map &&
										pi.type !== R.TypeaheadOptionType.doc &&
										pi.type !== R.TypeaheadOptionType.web &&
										pi.type !== R.TypeaheadOptionType.codebase,
								),
							at = tt.length > 0 ? tt[0] : null;
						if (tt.length === 0 || !at || at.name.length === Wt.length) {
							Oe.setGhostText(""), Be(null);
							return;
						}
						Be(at), Oe.setGhostText(at.name.substring(Se().length));
					});
					const Zt = (Wt) => {
						const tt = (0, O.$iac)(Wt),
							at = (0, O.$jac)(Wt),
							pi = (0, O.$mac)(Wt, He),
							Li = (0, O.$kac)(Wt);
						return !pi && !at && !Li && tt ? tt : null;
					};
					function ci(Wt) {
						if (!(0, p.$isRangeSelection)(Wt) || !Wt.isCollapsed())
							return [!1, ""];
						const tt = Wt.getNodes()[0],
							at = Wt.anchor;
						if (
							!(0, p.$isTextNode)(tt) ||
							!tt.isSimpleText() ||
							!(0, F.$isAtNodeEnd)(at)
						)
							return [!1, ""];
						const pi = [],
							Li = tt.getTextContent();
						let Di = tt.getTextContentSize(),
							Ui;
						for (; Di-- && Di >= 0 && (Ui = Li[Di]) !== " "; ) pi.push(Ui);
						return pi.length === 0 ? [!1, ""] : [!0, pi.reverse().join("")];
					}
					let ri = null;
					(0, o.createEffect)(() => {
						if (Te() || !Oe.allowGhostTextAtSymbols) {
							Oe.setGhostText("");
							return;
						}
						const Wt = Oe.setGhostText,
							tt = He.registerUpdateListener(() => {
								He.update(() => {
									const Li = (0, g.$getSelection)(),
										[Di] = ci(Li);
									if (!Di) {
										Wt("");
										return;
									}
									const Ui = (0, h.getQueryTextForSearch)(He);
									if (!Ui) return;
									const Wi = Zt(Ui);
									Wi && (ke(Wi.matchingString), (ri = Wi));
								});
							});
						function at() {
							const Li = Ie();
							if (Li === null) return !1;
							const Di = ri ? (0, c.$splitNodeContainingQuery)(ri) : null;
							return Oe.setGhostText(""), Rt(Li, Di, () => {}), !0;
						}
						function pi(Li) {
							return at() ? (Li.preventDefault(), !0) : !1;
						}
						return (
							(0, o.onCleanup)(
								(0, n.mergeRegister)(
									He.registerCommand(
										p.KEY_TAB_COMMAND,
										pi,
										p.COMMAND_PRIORITY_LOW,
									),
									He.registerCommand(
										p.KEY_ARROW_RIGHT_COMMAND,
										pi,
										p.COMMAND_PRIORITY_LOW,
									),
								),
							),
							tt
						);
					});
					const $i = (Wt) => {
						const tt = (0, O.$jac)(Wt),
							at = (0, O.$mac)(Wt, He);
						return !at && tt ? tt : at;
					};
					return (
						(0, o.createEffect)(() => {
							const Wt = He.registerUpdateListener(
								({
									editorState: tt,
									dirtyElements: at,
									prevEditorState: pi,
								}) => {
									at.size !== 0 &&
										tt.read(() => {
											const Li = (0, g.$getSelection)();
											if (!(0, p.$isRangeSelection)(Li) || !Li.isCollapsed())
												return;
											const Di = Li.anchor.getNode();
											if (!(0, p.$isTextNode)(Di)) return;
											const Ui = Di.getTextContent(),
												Wi = Ui[Li.anchor.offset - 1],
												Gi = Ui.slice(-2),
												qi = Ui.split(" "),
												Oi = qi[qi.length - 1] ?? "";
											Wi === "@" || (Wi === "/" && Oi.startsWith("@"))
												? Ee("@")
												: Wi === "/" && Gi !== "@/"
													? Ee("/")
													: ((Wi === " " &&
															Ke() !== R.TypeaheadOptionType.auto_context &&
															Ke() !== R.TypeaheadOptionType.none) ||
															Wi === void 0) &&
														Ee(!1);
										});
								},
							);
							(0, o.onCleanup)(() => {
								Wt();
							});
						}),
						(0, o.createEffect)(() => {
							!Oe.ghostText() && Ie() && Be(null);
						}),
						(0, C.createComponent)(h.LexicalTypeaheadMenuPlugin, {
							onQueryChange: kt,
							onSelectOption: Rt,
							triggerFn: $i,
							get options() {
								return (0, E.memo)(() => Te() === !1)()
									? []
									: [...Jt()]
											.sort((Wt, tt) => tt.score - Wt.score)
											.filter((Wt) => {
												const tt = Te() === "/";
												return (!tt && !Wt.isSlash) || (tt && Wt.isSlash);
											});
							},
							anchorClassName: "lookahead-anchor-element",
							menuRenderFn: Fe,
							get attachToElement() {
								return xe.portalElement;
							},
							get onOpen() {
								return Oe.onMentionsMenuOpen;
							},
							get onClose() {
								return Oe.onMentionsMenuClose;
							},
						})
					);
				}
				const Fe = (Oe) => {
					let xe;
					const Ke = (0, U.$odc)().themeService.getColorTheme(),
						Je = Ke.getColor("editor.foreground"),
						Te = Ke.getColor("editor.background"),
						Ee = Ke.getColor("commandCenter.inactiveBorder"),
						[Ie, Be] = (0, o.createSignal)([]),
						[Se, ke] = (0, o.createSignal)([]),
						[Ue, qe] = (0, o.createSignal)([]);
					(0, o.createEffect)(() => {
						const je = Oe.options;
						Be(
							je.filter(
								(Ve) =>
									Ve.type === R.TypeaheadOptionType.file ||
									Ve.type === R.TypeaheadOptionType.doc ||
									Ve.type === R.TypeaheadOptionType.code ||
									Ve.type === R.TypeaheadOptionType.git_commit ||
									Ve.type === R.TypeaheadOptionType.git_pr ||
									Ve.type === R.TypeaheadOptionType.folder ||
									Ve.type === R.TypeaheadOptionType.git_diff ||
									Ve.type === R.TypeaheadOptionType.toggle_commit_options ||
									Ve.type === R.TypeaheadOptionType.link ||
									Ve.type === R.TypeaheadOptionType.text_search ||
									Ve.type === R.TypeaheadOptionType.notepad ||
									Ve.type === R.TypeaheadOptionType.auto_context,
							),
						),
							ke(
								je.filter(
									(Ve) =>
										Ve.type === R.TypeaheadOptionType.heading ||
										Ve.type === R.TypeaheadOptionType.lint ||
										Ve.type === R.TypeaheadOptionType.current_file ||
										(typeof Ve.type == "object" &&
											"case" in Ve.type &&
											Ve.type.case === "simple_mentions_handler") ||
										Ve.type === R.TypeaheadOptionType.web ||
										Ve.type === R.TypeaheadOptionType.repo_map ||
										Ve.type === R.TypeaheadOptionType.codebase ||
										Ve.type === R.TypeaheadOptionType.commit_notes ||
										Ve.type === R.TypeaheadOptionType.diff_review ||
										Ve.type === R.TypeaheadOptionType.context_picking ||
										Ve.type === R.TypeaheadOptionType.remember_this ||
										Ve.isSlash,
								),
							),
							qe(
								Ie().length === 0
									? []
									: je.filter((Ve) => Ve.type === "staticheading"),
							);
					});
					const Ae = (0, o.createMemo)(() =>
						Oe.selectedIndex === null ? null : Ie().at(Oe.selectedIndex),
					);
					let Me;
					const De = (je) => {
							const Ve = { x: je.clientX, y: je.clientY },
								Ze = Me === void 0 || Ve.x !== Me.x || Ve.y !== Me.y;
							return (Me = Ve), Ze;
						},
						Re = (je, Ve) =>
							(0, C.createComponent)(pe, {
								get index() {
									return Ve();
								},
								get isSelected() {
									return Oe.selectedIndex === Ve();
								},
								onClick: () => {
									je.type !== "staticheading" &&
										(Oe.setHighlightedIndex(Ve()),
										Oe.selectOptionAndCleanUp(je));
								},
								onMouseEnterOrMove: (Ze) => {
									je.type !== "staticheading" &&
										De(Ze) &&
										Oe.setHighlightedIndex(Ve());
								},
								option: je,
							});
					return (0, C.createComponent)(M.$q_b, {
						get show() {
							return Oe.options.length > 0;
						},
						get anchorElementRef() {
							return Oe.anchorElementRef;
						},
						get children() {
							return [
								(0, C.createComponent)(o.Show, {
									get when() {
										return Ae();
									},
									children: (je) =>
										(0, C.createComponent)(ue, {
											get selectedOption() {
												return je();
											},
											get selectedIndex() {
												return Oe.selectedIndex ?? 0;
											},
											optionsListRef: xe,
										}),
								}),
								(0, C.createComponent)(o.Show, {
									get when() {
										return (
											(0, E.memo)(
												() => Se().length === 0 && Ue().length === 0,
											)() && Ie().length === 0
										);
									},
									get children() {
										const je = Q();
										return je.style.setProperty("opacity", "0.3"), je;
									},
								}),
								(() => {
									const je = Z(),
										Ve = xe;
									return (
										typeof Ve == "function" ? (0, u.use)(Ve, je) : (xe = je),
										(0, r.insert)(
											je,
											(0, C.createComponent)(o.For, {
												get each() {
													return Se();
												},
												children: (Ze, et) => Re(Ze, et),
											}),
											null,
										),
										(0, r.insert)(
											je,
											(0, C.createComponent)(o.For, {
												get each() {
													return Ue();
												},
												children: (Ze, et) => Re(Ze, () => -1),
											}),
											null,
										),
										(0, r.insert)(
											je,
											(0, C.createComponent)(o.For, {
												get each() {
													return Ie();
												},
												children: (Ze, et) =>
													(0, C.createComponent)(pe, {
														get index() {
															return et();
														},
														get isSelected() {
															return Oe.selectedIndex === et();
														},
														onClick: () => {
															Ze.type !== "staticheading" &&
																(Oe.setHighlightedIndex(et()),
																Oe.selectOptionAndCleanUp(Ze));
														},
														onMouseEnterOrMove: (rt) => {
															Ze.type !== "staticheading" &&
																De(rt) &&
																Oe.setHighlightedIndex(et());
														},
														option: Ze,
													}),
											}),
											null,
										),
										je
									);
								})(),
							];
						},
					});
				};
			},
		),
		define(
			de[4308],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 181, 756, 164, 13, 14, 54, 26, 9, 205,
				134, 354, 36, 1069, 1382, 156, 1381, 310, 817,
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
				v,
				S,
				I,
				T,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = U);
				const P = (0, t.template)("<span><span>"),
					k = (0, t.template)('<span class="sizePreview"> '),
					L = (0, t.template)(
						'<li tabindex="-1" role="option"><span></span><span>',
					),
					D = (0, t.template)(
						'<div id="mention-selection-preview"><div><div><div class="file-preview-container"><div></div><span>',
					),
					M = (0, t.template)("<div><span><span>"),
					N = (0, t.template)("<div>"),
					A = (0, t.template)('<div id="mention-selection-preview">'),
					R = (0, t.template)("<ul>"),
					O = (F) => {
						const x = (0, c.createMemo)(() =>
								F.isSelected ? "item selected" : "item",
							),
							q = (0, l.$odc)().themeService.getColorTheme(),
							V = q.getColor("menu.selectionBackground"),
							G = q.getColor("menu.selectionForeground"),
							K = q.getColor("menu.inactiveSelectionForeground"),
							J = q.getColor("editorOverviewRuler.bracketMatchForeground"),
							W = (ne) => {
								if (typeof ne == "string") return ne;
								const ee = ne / 4,
									_ = [
										[1e6, "M toks"],
										[1e3, "K toks"],
										[1, " toks"],
									],
									[te, Q] = _.find((re) => re[0] < ee) ?? _[_.length - 1];
								return `${(Math.round(ee / te) + "").match(/.{1,3}/g)?.join(",") ?? "<fmt err>"}${Q}`;
							},
							[X, { refetch: Y }] = (0, c.createResource)(
								() => F.option.sizeBytes,
							),
							ie = (0, c.createMemo)(() =>
								X.loading || X.error || X() === void 0
									? ""
									: "(" + W(X() ?? 0) + ")",
							);
						return (() => {
							const ne = L(),
								ee = ne.firstChild,
								_ = ee.nextSibling;
							ne.addEventListener("click", () => {
								F.onClick();
							}),
								ne.addEventListener("mouseenter", () => {
									F.onMouseEnter();
								});
							const te = F.option.setRefElement;
							return (
								typeof te == "function"
									? (0, r.use)(te, ne)
									: (F.option.setRefElement = ne),
								ee.style.setProperty("display", "flex"),
								(0, m.insert)(ee, () => F.option.picture),
								(0, m.insert)(_, () => F.option.name),
								(0, m.insert)(
									ne,
									(0, E.createComponent)(c.Show, {
										get when() {
											return F.option.secondaryText;
										},
										get children() {
											return [
												(() => {
													const Q = P(),
														Z = Q.firstChild;
													return (
														Z.style.setProperty("direction", "ltr"),
														Z.style.setProperty("unicode-bidi", "embed"),
														(0, m.insert)(Z, () => F.option.secondaryText),
														(0, d.effect)(
															(se) => {
																const re =
																		"secondary-text" +
																		(F.option.type === "staticheading"
																			? " heading"
																			: ""),
																	le = F.isSelected
																		? (K?.toString() ?? "")
																		: (J?.toString() ?? "");
																return (
																	re !== se._v$ &&
																		(0, C.className)(Q, (se._v$ = re)),
																	le !== se._v$2 &&
																		((se._v$2 = le) != null
																			? Q.style.setProperty("color", le)
																			: Q.style.removeProperty("color")),
																	se
																);
															},
															{ _v$: void 0, _v$2: void 0 },
														),
														Q
													);
												})(),
												(0, E.createComponent)(c.Show, {
													get when() {
														return F.option.sizeBytes !== void 0;
													},
													get children() {
														const Q = k(),
															Z = Q.firstChild;
														return (0, m.insert)(Q, ie, null), Q;
													},
												}),
											];
										},
									}),
									null,
								),
								(0, d.effect)(
									(Q) => {
										const Z = x(),
											se = F.isSelected,
											re = "typeahead-item-" + F.index,
											le = {
												...(F.isSelected
													? {
															"background-color": V?.toString() ?? "",
															color: G?.toString() ?? "",
														}
													: {}),
												cursor:
													F.option.type === "staticheading"
														? "default"
														: "pointer",
											},
											oe = F.isSelected
												? (K?.toString() ?? "")
												: (J?.toString() ?? ""),
											ae =
												(F.option.type === "heading" ||
													F.option.type === "staticheading",
												"0px"),
											pe =
												"text" +
												(F.option.type === "staticheading" ? " heading" : "");
										return (
											Z !== Q._v$3 && (0, C.className)(ne, (Q._v$3 = Z)),
											se !== Q._v$4 &&
												(0, w.setAttribute)(ne, "aria-selected", (Q._v$4 = se)),
											re !== Q._v$5 &&
												(0, w.setAttribute)(ne, "id", (Q._v$5 = re)),
											(Q._v$6 = (0, i.style)(ne, le, Q._v$6)),
											oe !== Q._v$7 &&
												((Q._v$7 = oe) != null
													? ee.style.setProperty("color", oe)
													: ee.style.removeProperty("color")),
											ae !== Q._v$8 &&
												((Q._v$8 = ae) != null
													? ee.style.setProperty("margin-left", ae)
													: ee.style.removeProperty("margin-left")),
											pe !== Q._v$9 && (0, C.className)(_, (Q._v$9 = pe)),
											Q
										);
									},
									{
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
										_v$6: void 0,
										_v$7: void 0,
										_v$8: void 0,
										_v$9: void 0,
									},
								),
								ne
							);
						})();
					},
					B = (F) => {
						const [V, G] = (0, c.createSignal)(),
							[K, J] = (0, c.createSignal)(),
							W = (0, l.$odc)();
						(0, c.createEffect)(async () => {
							if (F.selectedOption.type === "file") {
								G(void 0);
								const _ = F.selectedOption.selectionPrecursor?.uri.fsPath;
								if (!_) return;
								const te =
									await W.everythingProviderService.provider?.runCommand(
										b.FileRetrievalActions.GetDirectory,
										{ fsPath: _ },
									);
								if (!te) {
									J(void 0);
									return;
								}
								const Q = W.workspaceContextService.asRelativePath(
										o.URI.file(_),
									),
									Z = (0, g.$sc)(Q),
									se = Q.replace(Z, "");
								J({
									basePath: se,
									relativeWorkspacePath: Q,
									neighboringFiles: te,
								});
								return;
							}
							J(void 0);
							const ee = await (0, $.$rac)(F.selectedOption, W);
							if (
								ee.type === f.SelectionType.Failure ||
								ee.type === f.SelectionType.None ||
								ee.type === f.SelectionType.Image ||
								ee.type === f.SelectionType.Folder ||
								ee.type === f.SelectionType.Docs ||
								F.selectedOption.type !== I.TypeaheadOptionType.code
							) {
								G(void 0);
								return;
							}
							if (ee.type === f.SelectionType.File) {
								const _ = await (0, s.$2fc)(
									W.textModelService,
									W.dataScrubbingService,
									ee.selectionWithoutUuid,
								);
								G(_);
								return;
							}
							G(ee.selectionWithoutUuid);
						});
						const [X, Y] = (0, c.createSignal)({
							top: F.selectedIndex * 24,
							right: -454,
						});
						(0, c.createEffect)(() => {
							const ee = K() ? 300 : 450;
							let _ = F.selectedIndex * 24,
								te = -(ee + 4);
							const Q = F.optionsListRef?.getBoundingClientRect();
							if (!Q) return;
							Q.right - te > W.window.document.body.clientWidth &&
								(te = Q.width + 4),
								Y({ top: _, right: te }),
								W.window.requestIdleCallback(() => {
									const re = W.window.document
										.getElementById("mention-selection-preview")
										?.getBoundingClientRect();
									if (!re) return;
									const oe =
										Q.top + _ + re.height - W.window.document.body.clientHeight;
									oe > 0 && (_ -= oe + 4), Y({ top: _, right: te });
								});
						}, [F.selectedIndex]);
						const ie = (0, c.createMemo)(
								() =>
									K()
										?.basePath.split("/")
										.filter((ee) => !!ee.trim()) ?? [],
							),
							ne = 14;
						return [
							(0, E.createComponent)(c.Show, {
								get when() {
									return K();
								},
								children: (ee) =>
									(() => {
										const _ = D(),
											te = _.firstChild,
											Q = te.firstChild,
											Z = Q.firstChild,
											se = Z.firstChild,
											re = se.nextSibling;
										return (
											_.style.setProperty("width", "300px"),
											_.style.setProperty("border-radius", "2px"),
											_.style.setProperty("position", "absolute"),
											_.style.setProperty("overflow", "hidden"),
											_.style.setProperty("font-size", "11px"),
											te.style.setProperty(
												"background-color",
												"var(--vscode-editor-background)",
											),
											te.style.setProperty(
												"border",
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											),
											te.style.setProperty("border-radius", "3px"),
											te.style.setProperty("display", "flex"),
											te.style.setProperty("flex-direction", "column"),
											te.style.setProperty("gap", "2px"),
											te.style.setProperty("position", "relative"),
											te.style.setProperty("overflow", "hidden"),
											Q.style.setProperty("display", "flex"),
											Q.style.setProperty("flex-direction", "column"),
											Q.style.setProperty("gap", "4px"),
											Q.style.setProperty("padding", "0.25rem 0.4rem"),
											(0, m.insert)(
												Q,
												(0, E.createComponent)(c.For, {
													get each() {
														return ie();
													},
													children: (le, oe) =>
														(() => {
															const ae = M(),
																pe = ae.firstChild,
																$e = pe.firstChild;
															return (
																ae.style.setProperty("display", "flex"),
																ae.style.setProperty("align-items", "center"),
																ae.style.setProperty("overflow", "hidden"),
																ae.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																ae.style.setProperty("white-space", "nowrap"),
																(0, m.insert)(
																	ae,
																	(0, E.createComponent)(c.For, {
																		get each() {
																			return Array(oe());
																		},
																		children: (ye) =>
																			(() => {
																				const ue = N();
																				return (
																					ue.style.setProperty(
																						"margin-left",
																						"14px",
																					),
																					ue.style.setProperty(
																						"border-left",
																						"1px solid var(--vscode-commandCenter-inactiveBorder)",
																					),
																					ue.style.setProperty(
																						"display",
																						"inline-block",
																					),
																					ue
																				);
																			})(),
																	}),
																	pe,
																),
																pe.style.setProperty("display", "flex"),
																pe.style.setProperty("align-items", "center"),
																pe.style.setProperty("gap", "4px"),
																pe.style.setProperty("overflow", "hidden"),
																pe.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																pe.style.setProperty("white-space", "nowrap"),
																(0, m.insert)(pe, le, null),
																(0, d.effect)(
																	(ye) => {
																		const ue =
																				oe() === ie().length - 1 ? 1 : 0.5,
																			fe = "calc(100% - " + ne * oe() + "px)",
																			me = p.ThemeIcon.asClassName(
																				n.$ak.folder,
																			);
																		return (
																			ue !== ye._v$13 &&
																				((ye._v$13 = ue) != null
																					? pe.style.setProperty("opacity", ue)
																					: pe.style.removeProperty("opacity")),
																			fe !== ye._v$14 &&
																				((ye._v$14 = fe) != null
																					? pe.style.setProperty(
																							"max-width",
																							fe,
																						)
																					: pe.style.removeProperty(
																							"max-width",
																						)),
																			me !== ye._v$15 &&
																				(0, C.className)($e, (ye._v$15 = me)),
																			ye
																		);
																	},
																	{
																		_v$13: void 0,
																		_v$14: void 0,
																		_v$15: void 0,
																	},
																),
																ae
															);
														})(),
												}),
												Z,
											),
											Z.style.setProperty("display", "flex"),
											Z.style.setProperty("align-items", "center"),
											Z.style.setProperty("overflow", "hidden"),
											Z.style.setProperty("text-overflow", "ellipsis"),
											Z.style.setProperty("white-space", "nowrap"),
											se.style.setProperty(
												"border-left",
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											),
											se.style.setProperty("display", "inline-block"),
											re.style.setProperty("display", "flex"),
											re.style.setProperty("align-items", "center"),
											re.style.setProperty("gap", "4px"),
											re.style.setProperty("overflow", "hidden"),
											re.style.setProperty("text-overflow", "ellipsis"),
											re.style.setProperty("white-space", "nowrap"),
											(0, m.insert)(
												re,
												(0, E.createComponent)(v.$k$b, {
													get fileName() {
														return (0, g.$sc)(ee().relativeWorkspacePath);
													},
													get workspaceContextService() {
														return W.workspaceContextService;
													},
													get modelService() {
														return W.modelService;
													},
													get languageService() {
														return W.languageService;
													},
												}),
												null,
											),
											(0, m.insert)(
												re,
												() => (0, g.$sc)(ee().relativeWorkspacePath),
												null,
											),
											(0, d.effect)(
												(le) => {
													const oe = X().top + "px",
														ae = X().right + "px",
														pe = ne * ie().length + "px";
													return (
														oe !== le._v$10 &&
															((le._v$10 = oe) != null
																? _.style.setProperty("top", oe)
																: _.style.removeProperty("top")),
														ae !== le._v$11 &&
															((le._v$11 = ae) != null
																? _.style.setProperty("right", ae)
																: _.style.removeProperty("right")),
														pe !== le._v$12 &&
															((le._v$12 = pe) != null
																? se.style.setProperty("margin-left", pe)
																: se.style.removeProperty("margin-left")),
														le
													);
												},
												{ _v$10: void 0, _v$11: void 0, _v$12: void 0 },
											),
											_
										);
									})(),
							}),
							(0, E.createComponent)(c.Show, {
								get when() {
									return V();
								},
								children: (ee) =>
									(() => {
										const _ = A();
										return (
											_.style.setProperty("width", "450px"),
											_.style.setProperty("border-radius", "2px"),
											_.style.setProperty("position", "absolute"),
											(0, m.insert)(_, () => (0, $.$qac)(ee(), W)),
											(0, d.effect)(
												(te) => {
													const Q = X().top + "px",
														Z = X().right + "px";
													return (
														Q !== te._v$16 &&
															((te._v$16 = Q) != null
																? _.style.setProperty("top", Q)
																: _.style.removeProperty("top")),
														Z !== te._v$17 &&
															((te._v$17 = Z) != null
																? _.style.setProperty("right", Z)
																: _.style.removeProperty("right")),
														te
													);
												},
												{ _v$16: void 0, _v$17: void 0 },
											),
											_
										);
									})(),
							}),
						];
					};
				function U(F) {
					const x = (0, l.$odc)(),
						[H] = (0, u.useLexicalComposerContext)(),
						[q, V] = (0, c.createSignal)(null),
						G = {
							...I.$w_b,
							ghostText: () => "",
							isLongContextMode: !1,
							insertTextSearch: () => {},
							selectedTextSearches: [],
							supportsGit: !1,
							supportsCommitNotes: !1,
							supportsWeb: !1,
							supportsFolderSelections: !1,
							supportsLint: !1,
							supportsCodebase: !1,
							supportsLink: !1,
							recentFiles: new Set(),
							setGhostText: () => {},
							showErrorMessage: () => {},
						},
						K = {
							queryString: q,
							justClickedIntoMenu: () => !1,
							mode: () => I.TypeaheadOptionType.file,
							props: G,
							vsContext: x,
						},
						{ fileOptions: J } = (0, S.$9_b)(K),
						[W, X] = (0, c.createSignal)(!1),
						Y = (0, c.createMemo)(() =>
							W() ? [...J()].sort((te, Q) => Q.score - te.score) : [],
						),
						ie = (te) => {
							const Q = (0, T.$jac)(te),
								Z = (0, T.$mac)(te, H),
								se = (0, T.$kac)(te),
								re = se && !Z && !Q ? se : null;
							return X(re !== null), re;
						},
						ne = H.registerCommand(
							h.KEY_ESCAPE_COMMAND,
							(te) => (W() && Y().length > 0 ? (X(!1), !0) : !1),
							h.COMMAND_PRIORITY_CRITICAL,
						);
					(0, c.onCleanup)(() => {
						ne();
					});
					const ee = (te, Q, Z) => {
							Q && (Q.select(), Q.remove()), Z(), _(te);
						},
						_ = async (te) => {
							const Q = await (0, $.$rac)(te, x);
							if (Q.type === f.SelectionType.File) {
								const Z = { ...Q.selectionWithoutUuid, collapseByDefault: !1 };
								F.addFile && F.addFile(o.URI.revive(Z.uri));
							}
						};
					return (0, E.createComponent)(a.LexicalTypeaheadMenuPlugin, {
						onQueryChange: V,
						onSelectOption: ee,
						triggerFn: ie,
						get options() {
							return Y();
						},
						anchorClassName: "lookahead-anchor-element",
						menuRenderFn: z,
						get attachToElement() {
							return x.portalElement;
						},
					});
				}
				const z = (F) => {
					let x;
					const [H, q] = (0, c.createSignal)(null);
					return (
						(0, c.createEffect)(() => {
							q(F.selectedIndex === null ? null : F.options[F.selectedIndex]);
						}),
						(0, E.createComponent)(y.$q_b, {
							get show() {
								return F.options.length > 0;
							},
							get anchorElementRef() {
								return F.anchorElementRef;
							},
							get children() {
								return [
									(0, E.createComponent)(c.Show, {
										get when() {
											return H();
										},
										children: (V) =>
											(0, E.createComponent)(B, {
												get selectedOption() {
													return V();
												},
												get selectedIndex() {
													return F.selectedIndex ?? 0;
												},
												optionsListRef: x,
											}),
									}),
									(() => {
										const V = R(),
											G = x;
										return (
											typeof G == "function" ? (0, r.use)(G, V) : (x = V),
											(0, m.insert)(
												V,
												(0, E.createComponent)(c.For, {
													get each() {
														return F.options;
													},
													children: (K, J) =>
														(0, E.createComponent)(O, {
															get index() {
																return J();
															},
															get isSelected() {
																return F.selectedIndex === J();
															},
															onClick: () => {
																F.setHighlightedIndex(J()),
																	F.selectOptionAndCleanUp(K);
															},
															onMouseEnter: () => {
																F.setHighlightedIndex(J());
															},
															option: K,
														}),
												}),
											),
											V
										);
									})(),
								];
							},
						})
					);
				};
			},
		),
		define(
			de[4309],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 181, 756, 164, 13, 14, 26, 9, 36, 1069,
				310, 817, 156, 54, 134, 205, 354, 1382, 12, 299, 1973,
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
				v,
				S,
				I,
				T,
				P,
				k,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = K);
				const L = (0, t.template)('<span class="secondary-text">'),
					D = (0, t.template)("<span>View "),
					M = (0, t.template)("<i>"),
					N = (0, t.template)("<span>"),
					A = (0, t.template)(
						'<li tabindex="-1" role="option"><span></span><span class="text">',
					),
					R = (0, t.template)(
						'<div id="mention-selection-preview"><div><div><div></div><span>',
					),
					O = (0, t.template)("<div><span><span>"),
					B = (0, t.template)("<div>"),
					U = (0, t.template)('<div id="mention-selection-preview">'),
					z = (0, t.template)("<ul>"),
					F = 10,
					x = 10;
				function H(J, W) {
					return new b.$u_b(
						J.name,
						(0, r.createComponent)(l.$k$b, {
							get fileName() {
								return J.name;
							},
							get workspaceContextService() {
								return W.workspaceContextService;
							},
							get modelService() {
								return W.modelService;
							},
							get languageService() {
								return W.languageService;
							},
						}),
						b.TypeaheadOptionType.file,
						J.score,
						{ uri: J.uri },
						void 0,
						J.secondaryText,
					);
				}
				const q = (J) => {
						const W = (0, c.createMemo)(() =>
								J.isSelected ? "item selected" : "item",
							),
							Y = (0, o.$odc)().themeService.getColorTheme(),
							ie = Y.getColor("menu.selectionBackground"),
							ne = Y.getColor("menu.selectionForeground"),
							ee = Y.getColor("menu.inactiveSelectionForeground"),
							_ = Y.getColor("editorOverviewRuler.bracketMatchForeground");
						return (() => {
							const te = A(),
								Q = te.firstChild,
								Z = Q.nextSibling;
							te.addEventListener("click", () => {
								J.onClick();
							}),
								te.addEventListener("mouseenter", () => {
									J.onMouseEnter();
								});
							const se = J.option.setRefElement;
							return (
								typeof se == "function"
									? (0, m.use)(se, te)
									: (J.option.setRefElement = te),
								Q.style.setProperty("display", "flex"),
								(0, d.insert)(Q, () => J.option.picture),
								(0, d.insert)(Z, () => J.option.name),
								(0, d.insert)(
									te,
									(0, r.createComponent)(c.Show, {
										get when() {
											return J.option.secondaryText;
										},
										get children() {
											const re = L();
											return (
												(0, d.insert)(re, () => J.option.secondaryText),
												(0, C.effect)(() =>
													(J.isSelected
														? (ee?.toString() ?? "")
														: (_?.toString() ?? "")) != null
														? re.style.setProperty(
																"color",
																J.isSelected
																	? (ee?.toString() ?? "")
																	: (_?.toString() ?? ""),
															)
														: re.style.removeProperty("color"),
												),
												re
											);
										},
									}),
									null,
								),
								(0, d.insert)(
									te,
									(0, r.createComponent)(c.Show, {
										get when() {
											return (
												J.option.type === b.TypeaheadOptionType.file &&
												J.isSelected
											);
										},
										get children() {
											const re = D(),
												le = re.firstChild;
											return (
												re.style.setProperty("margin-left", "auto"),
												re.style.setProperty("padding-left", "6px"),
												re.style.setProperty("justify-self", "flex-end"),
												re.style.setProperty("opacity", "0.7"),
												re.style.setProperty("font-size", "90%"),
												re.style.setProperty("flex-shrink", "0"),
												(0, d.insert)(
													re,
													T.$m ? "\u2325\u21B5" : "Alt+\u21B5",
													null,
												),
												(0, C.effect)(() =>
													(J.isSelected
														? (ee?.toString() ?? "")
														: (_?.toString() ?? "")) != null
														? re.style.setProperty(
																"color",
																J.isSelected
																	? (ee?.toString() ?? "")
																	: (_?.toString() ?? ""),
															)
														: re.style.removeProperty("color"),
												),
												re
											);
										},
									}),
									null,
								),
								(0, d.insert)(
									te,
									(0, r.createComponent)(c.Show, {
										get when() {
											return J.option.type === "heading";
										},
										get children() {
											const re = M();
											return (
												(0, C.effect)(() =>
													(0, E.className)(
														re,
														g.ThemeIcon.asClassName(n.$ak.arrowRight),
													),
												),
												re
											);
										},
									}),
									null,
								),
								(0, d.insert)(
									te,
									(0, r.createComponent)(c.Show, {
										get when() {
											return J.option.onSettingClick !== void 0;
										},
										get children() {
											const re = N();
											return (
												re.addEventListener("click", (le) => {
													le.stopPropagation(),
														J.option.onSettingClick &&
															J.option?.onSettingClick();
												}),
												re.style.setProperty("margin-left", "auto"),
												(0, C.effect)(() =>
													(0, E.className)(
														re,
														g.ThemeIcon.asClassName(n.$ak.settingsGear),
													),
												),
												re
											);
										},
									}),
									null,
								),
								(0, C.effect)(
									(re) => {
										const le = W(),
											oe = J.isSelected,
											ae = "typeahead-item-" + J.index,
											pe = {
												...(J.isSelected
													? {
															"background-color": ie?.toString() ?? "",
															color: ne?.toString() ?? "",
														}
													: {}),
												cursor:
													J.option.type === "staticheading"
														? "default"
														: "pointer",
											},
											$e = J.isSelected
												? (ee?.toString() ?? "")
												: (_?.toString() ?? ""),
											ye =
												(J.option.type === "heading" ||
													J.option.type === "staticheading",
												"0px");
										return (
											le !== re._v$ && (0, E.className)(te, (re._v$ = le)),
											oe !== re._v$2 &&
												(0, w.setAttribute)(
													te,
													"aria-selected",
													(re._v$2 = oe),
												),
											ae !== re._v$3 &&
												(0, w.setAttribute)(te, "id", (re._v$3 = ae)),
											(re._v$4 = (0, i.style)(te, pe, re._v$4)),
											$e !== re._v$5 &&
												((re._v$5 = $e) != null
													? Q.style.setProperty("color", $e)
													: Q.style.removeProperty("color")),
											ye !== re._v$6 &&
												((re._v$6 = ye) != null
													? Q.style.setProperty("margin-left", ye)
													: Q.style.removeProperty("margin-left")),
											re
										);
									},
									{
										_v$: void 0,
										_v$2: void 0,
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
										_v$6: void 0,
									},
								),
								te
							);
						})();
					},
					V = (J) => {
						const [ie, ne] = (0, c.createSignal)(),
							[ee, _] = (0, c.createSignal)(),
							te = (0, o.$odc)();
						(0, c.createEffect)(async () => {
							if (J.selectedOption.type === "file") {
								ne(void 0);
								const oe = J.selectedOption.selectionPrecursor?.uri.fsPath;
								if (!oe) return;
								const ae =
									await te.everythingProviderService.provider?.runCommand(
										$.FileRetrievalActions.GetDirectory,
										{ fsPath: oe },
									);
								if (!ae) {
									_(void 0);
									return;
								}
								const pe = te.workspaceContextService.asRelativePath(
										p.URI.file(oe),
									),
									$e = (0, y.$sc)(pe),
									ye = pe.replace($e, "");
								_({
									basePath: ye,
									relativeWorkspacePath: pe,
									neighboringFiles: ae,
								});
								return;
							}
							_(void 0);
							const le = await (0, I.$rac)(J.selectedOption, te);
							if (
								le.type === v.SelectionType.Failure ||
								le.type === v.SelectionType.None ||
								le.type === v.SelectionType.Image ||
								le.type === v.SelectionType.Folder ||
								le.type === v.SelectionType.Docs ||
								J.selectedOption.type !== b.TypeaheadOptionType.code
							) {
								ne(void 0);
								return;
							}
							if (le.type === v.SelectionType.File) {
								const oe = await (0, S.$2fc)(
									te.textModelService,
									te.dataScrubbingService,
									le.selectionWithoutUuid,
								);
								ne(oe);
								return;
							}
							ne(le.selectionWithoutUuid);
						});
						const [Q, Z] = (0, c.createSignal)({
							top: J.selectedIndex * 24,
							right: -454,
						});
						(0, c.createEffect)(() => {
							const le = ee() ? 300 : 450;
							let oe = J.selectedIndex * 24,
								ae = -(le + 4);
							const pe = J.optionsListRef?.getBoundingClientRect();
							if (!pe) return;
							pe.right - ae > te.window.document.body.clientWidth &&
								(ae = pe.width + 4),
								Z({ top: oe, right: ae }),
								te.window.requestIdleCallback(() => {
									const ue = te.window.document
										.getElementById("mention-selection-preview")
										?.getBoundingClientRect();
									if (!ue) return;
									const me =
										pe.top +
										oe +
										ue.height -
										te.window.document.body.clientHeight;
									me > 0 && (oe -= me + 4), Z({ top: oe, right: ae });
								});
						}, [J.selectedIndex]);
						const se = (0, c.createMemo)(
								() =>
									ee()
										?.basePath.split("/")
										.filter((le) => !!le.trim()) ?? [],
							),
							re = 14;
						return [
							(0, r.createComponent)(c.Show, {
								get when() {
									return ee();
								},
								children: (le) =>
									(() => {
										const oe = R(),
											ae = oe.firstChild,
											pe = ae.firstChild,
											$e = pe.firstChild,
											ye = $e.nextSibling;
										return (
											oe.style.setProperty("width", "300px"),
											oe.style.setProperty("border-radius", "2px"),
											oe.style.setProperty("position", "absolute"),
											oe.style.setProperty("overflow", "hidden"),
											ae.style.setProperty(
												"background-color",
												"var(--vscode-editor-background)",
											),
											ae.style.setProperty(
												"border",
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											),
											ae.style.setProperty("border-radius", "2px"),
											ae.style.setProperty("display", "flex"),
											ae.style.setProperty("flex-direction", "column"),
											ae.style.setProperty("gap", "4px"),
											ae.style.setProperty("position", "relative"),
											ae.style.setProperty("overflow", "hidden"),
											ae.style.setProperty("padding", "0.5rem"),
											(0, d.insert)(
												ae,
												(0, r.createComponent)(c.For, {
													get each() {
														return se();
													},
													children: (ue, fe) =>
														(() => {
															const me = O(),
																ve = me.firstChild,
																ge = ve.firstChild;
															return (
																me.style.setProperty("display", "flex"),
																me.style.setProperty("align-items", "center"),
																me.style.setProperty("overflow", "hidden"),
																me.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																me.style.setProperty("white-space", "nowrap"),
																(0, d.insert)(
																	me,
																	(0, r.createComponent)(c.For, {
																		get each() {
																			return Array(fe());
																		},
																		children: (be) =>
																			(() => {
																				const Ce = B();
																				return (
																					Ce.style.setProperty(
																						"margin-left",
																						"14px",
																					),
																					Ce.style.setProperty(
																						"border-left",
																						"1px solid var(--vscode-commandCenter-inactiveBorder)",
																					),
																					Ce.style.setProperty(
																						"display",
																						"inline-block",
																					),
																					Ce
																				);
																			})(),
																	}),
																	ve,
																),
																ve.style.setProperty("display", "flex"),
																ve.style.setProperty("align-items", "center"),
																ve.style.setProperty("gap", "4px"),
																ve.style.setProperty("overflow", "hidden"),
																ve.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																ve.style.setProperty("white-space", "nowrap"),
																(0, d.insert)(ve, ue, null),
																(0, C.effect)(
																	(be) => {
																		const Ce =
																				fe() === se().length - 1 ? 1 : 0.5,
																			Le = "calc(100% - " + re * fe() + "px)",
																			Fe = g.ThemeIcon.asClassName(
																				n.$ak.folder,
																			);
																		return (
																			Ce !== be._v$10 &&
																				((be._v$10 = Ce) != null
																					? ve.style.setProperty("opacity", Ce)
																					: ve.style.removeProperty("opacity")),
																			Le !== be._v$11 &&
																				((be._v$11 = Le) != null
																					? ve.style.setProperty(
																							"max-width",
																							Le,
																						)
																					: ve.style.removeProperty(
																							"max-width",
																						)),
																			Fe !== be._v$12 &&
																				(0, E.className)(ge, (be._v$12 = Fe)),
																			be
																		);
																	},
																	{
																		_v$10: void 0,
																		_v$11: void 0,
																		_v$12: void 0,
																	},
																),
																me
															);
														})(),
												}),
												pe,
											),
											pe.style.setProperty("display", "flex"),
											pe.style.setProperty("align-items", "center"),
											pe.style.setProperty("overflow", "hidden"),
											pe.style.setProperty("text-overflow", "ellipsis"),
											pe.style.setProperty("white-space", "nowrap"),
											$e.style.setProperty(
												"border-left",
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											),
											$e.style.setProperty("display", "inline-block"),
											ye.style.setProperty("display", "flex"),
											ye.style.setProperty("align-items", "center"),
											ye.style.setProperty("gap", "4px"),
											ye.style.setProperty("overflow", "hidden"),
											ye.style.setProperty("text-overflow", "ellipsis"),
											ye.style.setProperty("white-space", "nowrap"),
											(0, d.insert)(
												ye,
												(0, r.createComponent)(l.$k$b, {
													get fileName() {
														return (0, y.$sc)(le().relativeWorkspacePath);
													},
													get workspaceContextService() {
														return te.workspaceContextService;
													},
													get modelService() {
														return te.modelService;
													},
													get languageService() {
														return te.languageService;
													},
												}),
												null,
											),
											(0, d.insert)(
												ye,
												() => (0, y.$sc)(le().relativeWorkspacePath),
												null,
											),
											(0, C.effect)(
												(ue) => {
													const fe = Q().top + "px",
														me = Q().right + "px",
														ve = re * se().length + "px";
													return (
														fe !== ue._v$7 &&
															((ue._v$7 = fe) != null
																? oe.style.setProperty("top", fe)
																: oe.style.removeProperty("top")),
														me !== ue._v$8 &&
															((ue._v$8 = me) != null
																? oe.style.setProperty("right", me)
																: oe.style.removeProperty("right")),
														ve !== ue._v$9 &&
															((ue._v$9 = ve) != null
																? $e.style.setProperty("margin-left", ve)
																: $e.style.removeProperty("margin-left")),
														ue
													);
												},
												{ _v$7: void 0, _v$8: void 0, _v$9: void 0 },
											),
											oe
										);
									})(),
							}),
							(0, r.createComponent)(c.Show, {
								get when() {
									return ie();
								},
								children: (le) =>
									(() => {
										const oe = U();
										return (
											oe.style.setProperty("width", "450px"),
											oe.style.setProperty("border-radius", "2px"),
											oe.style.setProperty("position", "absolute"),
											(0, d.insert)(oe, () => (0, I.$qac)(le(), te)),
											(0, C.effect)(
												(ae) => {
													const pe = Q().top + "px",
														$e = Q().right + "px";
													return (
														pe !== ae._v$13 &&
															((ae._v$13 = pe) != null
																? oe.style.setProperty("top", pe)
																: oe.style.removeProperty("top")),
														$e !== ae._v$14 &&
															((ae._v$14 = $e) != null
																? oe.style.setProperty("right", $e)
																: oe.style.removeProperty("right")),
														ae
													);
												},
												{ _v$13: void 0, _v$14: void 0 },
											),
											oe
										);
									})(),
							}),
						];
					},
					G = (J) => {
						let W;
						const [X, Y] = (0, c.createSignal)(null);
						return (
							(0, c.createEffect)(() => {
								Y(J.selectedIndex === null ? null : J.options[J.selectedIndex]);
							}),
							(0, r.createComponent)(f.$q_b, {
								get show() {
									return J.options.length > 0;
								},
								get anchorElementRef() {
									return J.anchorElementRef;
								},
								get children() {
									return [
										(0, r.createComponent)(c.Show, {
											get when() {
												return X();
											},
											children: (ie) =>
												(0, r.createComponent)(V, {
													get selectedOption() {
														return ie();
													},
													get selectedIndex() {
														return J.selectedIndex ?? 0;
													},
													optionsListRef: W,
												}),
										}),
										(() => {
											const ie = z(),
												ne = W;
											return (
												typeof ne == "function" ? (0, m.use)(ne, ie) : (W = ie),
												ie.style.setProperty("list-style", "none"),
												ie.style.setProperty("margin", "0"),
												ie.style.setProperty("padding", "0"),
												(0, d.insert)(
													ie,
													(0, r.createComponent)(c.For, {
														get each() {
															return J.options;
														},
														children: (ee, _) =>
															(0, r.createComponent)(q, {
																get index() {
																	return _();
																},
																option: ee,
																get isSelected() {
																	return J.selectedIndex === _();
																},
																onClick: () => {
																	J.setHighlightedIndex(_()),
																		J.selectOptionAndCleanUp(ee);
																},
																onMouseEnter: () => J.setHighlightedIndex(_()),
															}),
													}),
												),
												ie
											);
										})(),
									];
								},
							})
						);
					};
				function K(J) {
					const W = (0, o.$odc)(),
						[X] = (0, u.useLexicalComposerContext)(),
						[Y, ie] = (0, c.createSignal)(null),
						[ne, ee] = (0, c.createSignal)(!1),
						[_, te] = (0, c.createSignal)(F),
						Q = (0, c.createMemo)(() => J.excludeFiles ?? []),
						{ options: Z, isLoading: se } = (0, k.$5_b)(Y, {
							resultsLimit: _,
							excludeFiles: Q,
							showLoadMore: !0,
							showLoading: !0,
							disabled: () => !ne(),
						});
					(0, c.createEffect)(() => {
						ne() || te(F);
					});
					const re = (oe, ae, pe, $e, ye) => {
							if (ye?.altKey && oe.selectionPrecursor?.uri) {
								const ue = oe.selectionPrecursor.uri,
									fe = W.workspaceContextService.resolveRelativePath(ue.path);
								(0, P.$0gc)({
									uri: fe,
									fileService: W.fileService,
									editorService: W.editorService,
									editorGroupsService: W.editorGroupService,
								});
								return;
							}
							if (oe.type === b.TypeaheadOptionType.heading && oe.isLoadMore) {
								te((ue) => ue + x);
								return;
							}
							ae && (ae.select(), ae.remove()),
								J.addFile &&
									oe.selectionPrecursor?.uri &&
									J.addFile(oe.selectionPrecursor.uri),
								pe();
						},
						le = X.registerCommand(
							h.KEY_ESCAPE_COMMAND,
							(oe) => (ne() && Z().length > 0 ? (ee(!1), !0) : !1),
							h.COMMAND_PRIORITY_CRITICAL,
						);
					return (
						(0, c.onCleanup)(() => {
							le();
						}),
						(0, r.createComponent)(a.LexicalTypeaheadMenuPlugin, {
							onQueryChange: ie,
							onSelectOption: re,
							triggerFn: (oe) => {
								const ae = (0, s.$jac)(oe),
									pe = (0, s.$mac)(oe, X),
									$e = (0, s.$lac)(oe),
									ye = $e && !pe && !ae ? $e : null;
								return ye ? (ee(!0), ye) : (ee(!1), null);
							},
							get options() {
								return Z();
							},
							anchorClassName: "lookahead-anchor-element",
							menuRenderFn: G,
							get attachToElement() {
								return W.portalElement;
							},
						})
					);
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[450],
		he([
			1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 7, 1063, 4112, 164, 13, 1382, 36, 816,
			1565, 158, 205, 140, 354, 310, 4179, 1270, 4178, 9, 23, 1775, 3190, 4308,
			476, 1562, 4309, 2507,
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
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
			M,
			N,
			A,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Uac = e.$Sac = e.$Rac = void 0),
				(e.$Tac = F),
				(e.$Vac = H),
				(e.$Wac = q),
				(u = mt(u)),
				(g = xi(g)),
				(v = xi(v)),
				(D = xi(D)),
				(A = xi(A));
			const R = (0, t.template)("<div>"),
				O = (0, t.template)('<div><div class="aislash-editor-placeholder">'),
				B = (0, t.template)("<div><div>"),
				U = () => ({
					onError(te) {
						throw te;
					},
					nodes: [o.$2_b, S.$uac, k.$Dac],
				});
			e.$Rac = U;
			const z = (_) =>
				(0, d.createComponent)(r.Show, {
					get when() {
						return _.show;
					},
					get children() {
						const te = R();
						return (
							te.style.setProperty("position", "absolute"),
							te.style.setProperty("top", "0.5rem"),
							te.style.setProperty("left", "0.5rem"),
							te.style.setProperty(
								"background-color",
								"var(--vscode-input-background)",
							),
							te.style.setProperty(
								"border-color",
								"var(--vscode-inputValidation-errorBorder)",
							),
							te.style.setProperty("border-width", "1px"),
							te.style.setProperty(
								"border-radius",
								"var(--vscode-input-border-radius)",
							),
							(0, m.insert)(te, () => _.message),
							te
						);
					},
				});
			e.$Sac = z;
			function F(_) {
				const [te, Q] = (0, r.splitProps)(_, ["onSubmit"]);
				return (0, d.createComponent)(
					e.$Uac,
					(0, C.mergeProps)(
						$.$w_b,
						{
							readonly: !1,
							useArrowsForHistory: !1,
							supportsGit: !1,
							supportsCommitNotes: !1,
							supportsLint: !1,
							supportsCodebase: !1,
							supportsLink: !1,
							supportsFolderSelections: !1,
							supportsWeb: !1,
							showDocs: !1,
							atMentionsDisabled: !0,
							isLongContextMode: !1,
							source: "simple_input_box",
							editorConfig: () => ({
								...(0, e.$Rac)(),
								namespace: "simple-input-box",
								onError: (Z) => {
									console.error(Z);
								},
							}),
							get onSubmit() {
								return te.onSubmit;
							},
						},
						Q,
					),
				);
			}
			const x = (_) => {
				const te = "0 0.5rem 0 0.5rem";
				function Q() {
					return (() => {
						const fe = O(),
							me = fe.firstChild;
						return (
							fe.style.setProperty("grid-area", "1 / 2 / 1 / 2"),
							(0, m.insert)(me, () => _.placeholder),
							(0, E.effect)((ve) =>
								(0, w.style)(
									me,
									{
										position: "relative",
										top: 0,
										left: "-100%",
										padding: te,
										"pointer-events": "none",
										"user-select": "none",
										color: "var(--vscode-input-placeholderForeground)",
										..._.placeholderStyle,
									},
									ve,
								),
							),
							fe
						);
					})();
				}
				const Z = (0, p.$odc)();
				function se(fe) {}
				const re = (0, r.createMemo)(() => {
						const me = Z.editorService.editors
							.map((ve) => ve.resource)
							.map((ve) => ve?.fsPath ?? "");
						return new Set(me);
					}),
					[le, oe] = (0, r.createSignal)(!1),
					ae = () =>
						(0, d.createComponent)(h.ContentEditable, {
							class: "aislash-editor-input",
							get style() {
								return {
									resize: "none",
									"grid-area": "1 / 1 / 1 / 1",
									overflow: "hidden",
									"line-height": "inherit",
									"font-family": "inherit",
									"font-size": "inherit",
									color: "var(--vscode-input-foreground)",
									"background-color": "transparent",
									display: "block",
									outline: "none",
									"scrollbar-width": "none",
									"box-sizing": "border-box",
									border: "none",
									"word-wrap": "break-word",
									"word-break": "break-word",
									padding: te,
									..._.style,
								};
							},
							get turnOffCmdZ() {
								return _.externalHistoryBundle !== void 0;
							},
							spellCheck: !1,
							autoCapitalize: "off",
						}),
					[pe, $e] = (0, r.createSignal)(!1),
					[ye, ue] = (0, r.createSignal)("");
				return (() => {
					const fe = B(),
						me = fe.firstChild;
					return (
						fe.addEventListener("click", (ve) => {
							_.inputBoxDelegate &&
								ve.target === ve.currentTarget &&
								_.inputBoxDelegate.focus();
						}),
						me.style.setProperty("display", "grid"),
						me.style.setProperty("position", "relative"),
						me.style.setProperty("grid-template-rows", "1"),
						me.style.setProperty("grid-template-columns", "1fr 1fr"),
						me.style.setProperty("width", "200%"),
						(0, m.insert)(
							me,
							(0, d.createComponent)(a.LexicalComposer, {
								get initialConfig() {
									return _.editorConfig();
								},
								get children() {
									return [
										(0, d.createComponent)(r.Show, {
											get when() {
												return _.enableAutoContextPlugin;
											},
											get children() {
												return (0, d.createComponent)(A.default, {
													get addFile() {
														return _.onAddFile;
													},
													get excludeFiles() {
														return _.fileSelections.map((ve) =>
															T.URI.from(ve.uri),
														);
													},
												});
											},
										}),
										(0, d.createComponent)(r.Show, {
											get when() {
												return _.enableAddFilePlugin;
											},
											get children() {
												return (0, d.createComponent)(D.default, {
													get addFile() {
														return _.onAddFile;
													},
												});
											},
										}),
										(0, i.memo)(() => _.extraPlugins),
										(0, d.createComponent)(h.PlainTextPlugin, {
											get contentEditable() {
												return ae();
											},
											get placeholder() {
												return (0, d.createComponent)(Q, {});
											},
											errorBoundary: h.LexicalErrorBoundary,
										}),
										(0, d.createComponent)(r.Show, {
											get when() {
												return _.allowGhostTextAtSymbols;
											},
											get children() {
												return (0, d.createComponent)(L.$Fac, {
													ghostText: ye,
													onAccept: () => {},
												});
											},
										}),
										(0, d.createComponent)(r.Show, {
											get when() {
												return _.externalHistoryBundle !== void 0;
											},
											get fallback() {
												return (0, d.createComponent)(h.HistoryPlugin, {});
											},
											get children() {
												return (0, d.createComponent)(
													G,
													(0, C.mergeProps)(() => _.externalHistoryBundle),
												);
											},
										}),
										(0, d.createComponent)(r.Show, {
											get when() {
												return _.atMentionsDisabled !== !0;
											},
											get children() {
												return (0, d.createComponent)(
													g.default,
													(0, C.mergeProps)(_, {
														ghostText: ye,
														setGhostText: ue,
														get mentionIdToDelete() {
															return _.mentionIdToDelete;
														},
														get setMentionIdToDelete() {
															return _.setMentionIdToDelete;
														},
														get mentionToAdd() {
															return _.mentionToAdd;
														},
														get setMentionToAdd() {
															return _.setMentionToAdd;
														},
														get insertSelection() {
															return _.insertSelection;
														},
														get selections() {
															return _.selections;
														},
														get removeSelection() {
															return _.removeSelection;
														},
														insertImage: (ve) => {
															if (_.insertImage !== void 0)
																return _.insertImage(ve);
															if (_.addImage === void 0) return;
															const ge = new Image();
															(ge.src = P.$7g
																.uriToBrowserUri(T.URI.from(ve.uri))
																.toString()),
																_.addImage(ve.uuid, {
																	path: T.URI.from(ve.uri).fsPath,
																	dimension: {
																		width: ge.naturalWidth,
																		height: ge.naturalHeight,
																	},
																	loadedAt: Date.now(),
																});
														},
														get removeImage() {
															return _.removeImage;
														},
														get imageUuids() {
															return _.imageUuids;
														},
														get insertLink() {
															return _.insertLink;
														},
														get removeLink() {
															return _.removeLink;
														},
														get insertFileSelection() {
															return _.insertFileSelection;
														},
														get fileSelections() {
															return _.fileSelections;
														},
														get removeFileSelection() {
															return _.removeFileSelection;
														},
														get insertCommit() {
															return _.insertCommit;
														},
														get commits() {
															return _.commits;
														},
														get removeCommit() {
															return _.removeCommit;
														},
														get insertDocs() {
															return _.insertDocs;
														},
														get removeDocs() {
															return _.removeDocs;
														},
														get removeCurrentFile() {
															return _.removeCurrentFile ?? (() => {});
														},
														get addCurrentFile() {
															return _.addCurrentFile ?? (() => {});
														},
														get removeLinterErrors() {
															return _.removeLinterErrors ?? (() => {});
														},
														get addLinterErrors() {
															return _.addLinterErrors ?? (() => {});
														},
														get addCodebase() {
															return _.addCodebase ?? (() => {});
														},
														get removeCodebase() {
															return _.removeCodebase ?? (() => {});
														},
														get recentFiles() {
															return re();
														},
														get contextSessionUuid() {
															return _.contextSessionUuid;
														},
														showErrorMessage: se,
														onMentionsMenuOpen: () => {
															_.onMentionsMenuOpen?.(), $e(!0);
														},
														onMentionsMenuClose: () => {
															_.onMentionsMenuClose?.(), $e(!1);
														},
														get addCommitNotes() {
															return _.addCommitNotes;
														},
														get removeCommitNotes() {
															return _.removeCommitNotes;
														},
													}),
												);
											},
										}),
										(0, d.createComponent)(r.Show, {
											get when() {
												return (
													(_.slashCommandProps?.supportedCommands.length ?? 0) >
														0 && _.slashCommandProps
												);
											},
											children: (ve) =>
												(0, d.createComponent)(v.default, {
													get delegate() {
														return _.delegate;
													},
													get setCommand() {
														return ve().setCommand;
													},
													get removeCommand() {
														return ve().removeCommand;
													},
													get commands() {
														return ve().supportedCommands;
													},
												}),
										}),
										(0, d.createComponent)(X, {
											setIsFocused: (ve) => {
												ve ? _.onFocus?.() : (ue(""), _.onBlur?.()),
													oe(ve),
													_.setIsFocused?.(ve);
											},
											get delegate() {
												return _.delegate;
											},
										}),
										(0, d.createComponent)(I.$Aac, {
											get addImage() {
												return _.addImage;
											},
										}),
										(0, d.createComponent)(I.$Bac, {
											get addImage() {
												return _.addImage;
											},
										}),
										(0, d.createComponent)(Y, {
											handleSubmit: (ve) => (ue(""), _.onSubmit(ve)),
										}),
										(0, d.createComponent)(ie, {
											get supportsLink() {
												return (
													(_.shouldAutoParseLink === void 0
														? !0
														: _.shouldAutoParseLink) && _.supportsLink
												);
											},
											get supportsCommitNotes() {
												return _.supportsCommitNotes;
											},
											get supportsCodebase() {
												return _.supportsCodebase;
											},
											get supportsWeb() {
												return _.supportsWeb;
											},
											get supportsDocs() {
												return _.showDocs ?? !1;
											},
											get supportsFolder() {
												return _.supportsFolderSelections;
											},
											get addCodebase() {
												return _.addCodebase;
											},
											get addFile() {
												return _.insertFileSelection;
											},
											get addFolder() {
												return _.insertFolderSelection;
											},
											get addDoc() {
												return _.insertDocs;
											},
											get addCode() {
												return _.insertSelection;
											},
											get addWeb() {
												return _.addWeb;
											},
											get addLinterErrors() {
												return _.addLinterErrors;
											},
											get insertSelection() {
												return _.insertSelection;
											},
											get insertDocs() {
												return _.insertDocs;
											},
											get insertLink() {
												return _.insertLink;
											},
											get removeLink() {
												return _.removeLink;
											},
											get insertTerminalSelection() {
												return _.insertTerminalSelection;
											},
											isMentionsMenuOpen: pe,
											get source() {
												return _.source;
											},
											get disableSelectionCopyPaste() {
												return _.disableSelectionCopyPaste;
											},
										}),
										(0, d.createComponent)(ne, {
											setIsTyping: () => _.setIsTyping,
											get setText() {
												return _.setText;
											},
											get setRichText() {
												return _.setRichText;
											},
											get initText() {
												return _.initText;
											},
											onEscape: (ve) => {
												_.allowGhostTextAtSymbols && ye()
													? ue("")
													: _.onEscape?.(ve);
											},
											get setContentHeight() {
												return _.setContentHeight;
											},
										}),
										(0, d.createComponent)(ee, {
											get delegate() {
												return _.delegate;
											},
											get onSubmit() {
												return _.onSubmit;
											},
											get initText() {
												return _.initText;
											},
											get inputBoxDelegate() {
												return _.inputBoxDelegate;
											},
										}),
										(0, d.createComponent)(W, {
											removeSelection: () => _.removeSelection,
											get selections() {
												return _.selections;
											},
											onTryDeleteContext: () => _.onTryDeleteContext,
											get ignoreTextForLastSelectionRemoval() {
												return _.ignoreTextForLastSelectionRemoval;
											},
											get text() {
												return _.text;
											},
										}),
										(0, d.createComponent)(J, {
											get commandListeners() {
												return [
													...(_.extraCommandListeners ?? []),
													...((0, M.$Kac)()
														? [
																{
																	command: b.KEY_COMMAND_A_COMMAND,
																	callback: (ve) => {
																		const ge = (0, b.$getSelection)();
																		return (0, b.$isRangeSelection)(ge)
																			? ((0, N.$selectAll)(ge), !0)
																			: !1;
																	},
																},
															]
														: []),
												];
											},
										}),
										(0, i.memo)(
											() =>
												(0, i.memo)(() => !!_.useArrowsForHistory)() &&
												(0, d.createComponent)(K, {
													get setText() {
														return _.setText;
													},
												}),
										),
										(0, d.createComponent)(V, {
											get setEditor() {
												return _.setEditor;
											},
											get readonly() {
												return _.readonly ?? !1;
											},
										}),
									];
								},
							}),
						),
						(0, E.effect)((ve) =>
							(0, w.style)(
								fe,
								{ width: "100%", overflow: "hidden", ..._.containerStyle },
								ve,
							),
						),
						fe
					);
				})();
			};
			e.$Uac = x;
			function H(_) {
				const te = u.getWindow(_),
					Q = te.getSelection();
				if (!Q) return !1;
				const Z = Q.getRangeAt(0),
					se = Z.cloneRange();
				se.selectNodeContents(_), se.setEnd(Z.endContainer, Z.endOffset);
				const re = se.getBoundingClientRect().height,
					le = parseInt(te.getComputedStyle(_).lineHeight);
				let oe = 0;
				if (Q && Q.rangeCount > 0) {
					const ye = Q.getRangeAt(0),
						ue = ye.cloneRange();
					ue.selectNodeContents(_),
						ue.setEnd(ye.startContainer, ye.startOffset),
						(oe = ue.toString().length);
				}
				const pe = _.innerText.substring(0, oe + 1).includes(`
`),
					$e = _.innerText.trim() === "";
				return re <= le && (!pe || $e);
			}
			function q(_) {
				const te = u.getWindow(_),
					Q = te.getSelection();
				if (!Q) return !1;
				const Z = Q.getRangeAt(0),
					se = Z.cloneRange();
				se.selectNodeContents(_), se.setStart(Z.startContainer, Z.startOffset);
				const re = se.getBoundingClientRect().height,
					le = parseInt(te.getComputedStyle(_).lineHeight);
				let oe = 0;
				if (Q && Q.rangeCount > 0) {
					const ye = Q.getRangeAt(0),
						ue = ye.cloneRange();
					ue.selectNodeContents(_),
						ue.setStart(ye.endContainer, ye.endOffset),
						(oe = ue.toString().length);
				}
				const pe = _.innerText.substring(oe).includes(`
`),
					$e = _.innerText.trim() === "";
				return re <= le && (!pe || $e);
			}
			const V = (_) => {
					const [te] = (0, h.useLexicalComposerContext)();
					return (
						(0, r.createEffect)(() => {
							_.setEditor &&
								(_.setEditor(te), te.setEditable(!(_.readonly ?? !1)));
						}),
						(0, r.createEffect)(() => {
							_.readonly && te.setEditable(!1);
						}, [_.readonly]),
						null
					);
				},
				G = (_) => {
					const [te] = (0, h.useLexicalComposerContext)();
					return (
						(0, f.useExternalHistory)(
							te,
							() => _.externalHistoryState,
							100,
							_.runExternalUndo,
							_.runExternalRedo,
							_.addToExternalUndoStack,
						),
						null
					);
				},
				K = (_) => {
					const [te] = (0, h.useLexicalComposerContext)(),
						Q = (0, p.$odc)(),
						[Z, se] = (0, r.createSignal)(-1),
						[re, le] = (0, r.createSignal)([]),
						[oe, ae] = (0, r.createSignal)("");
					(0, r.createEffect)(() => {
						oe().trim() === ""
							? le([oe(), ...Q.aiService.getPreviousPrompts()])
							: le(Q.aiService.getPreviousPrompts());
					});
					const pe = te.registerCommand(
							b.KEY_ARROW_UP_COMMAND,
							(ye) => {
								const ue = te.getRootElement();
								return (
									ue !== null &&
										H(ue) &&
										(Z() === re().length - 1 ||
											(Z() === -1 && ae(ue.innerText), se((fe) => fe + 1))),
									!1
								);
							},
							b.COMMAND_PRIORITY_LOW,
						),
						$e = te.registerCommand(
							b.KEY_ARROW_DOWN_COMMAND,
							(ye) => {
								const ue = te.getRootElement();
								return ue !== null && q(ue) && Z() !== -1 && se(Z() - 1), !1;
							},
							b.COMMAND_PRIORITY_LOW,
						);
					return (
						(0, r.createEffect)(() => {
							const ye = re().length - 1 - Z();
							re().length > 0 && ye >= 0 && ye < re().length
								? (_.setText && _.setText(re()[ye]),
									te.update(() => {
										const ue = (0, b.$getRoot)(),
											fe = (0, b.$createParagraphNode)(),
											me = (0, b.$createTextNode)(re()[ye]);
										fe.append(me);
										for (const ve of ue.getChildren()) ve.remove();
										ue.append(fe), ue.selectEnd();
									}))
								: Z();
						}),
						(0, r.onCleanup)(() => {
							pe(), $e();
						}),
						null
					);
				};
			function J(_) {
				const [te] = (0, h.useLexicalComposerContext)(),
					Q = [];
				for (const {
					command: Z,
					callback: se,
					priority: re,
				} of _.commandListeners ?? [])
					Q.push(te.registerCommand(Z, se, re ?? c.COMMAND_PRIORITY_CRITICAL));
				return (
					(0, r.onCleanup)(() => {
						for (const Z of Q) Z();
					}),
					null
				);
			}
			function W(_) {
				const [te] = (0, h.useLexicalComposerContext)(),
					[Q, Z] = (0, r.createSignal)("");
				(0, r.createEffect)(() => {
					_.text !== void 0 && Z(_.text);
				});
				let se = !1;
				const re = te.registerTextContentListener((pe) => {
						(0, r.createEffect)(() => {
							Z(pe);
						});
					}),
					le = te.registerCommand(
						c.KEY_BACKSPACE_COMMAND,
						(pe) => {
							const $e = (0, r.untrack)(() => _.selections),
								ye = te.getRootElement(),
								ue = (0, M.$Iac)(te);
							return pe.repeat
								? ((se = !0), !1)
								: (!pe.repeat && se && (se = !1),
									!_.onTryDeleteContext &&
									$e.length > 0 &&
									((_.ignoreTextForLastSelectionRemoval && ue) || Q() === "")
										? (_.removeSelection()($e.length - 1), !0)
										: (Q() === "" ||
													(_.ignoreTextForLastSelectionRemoval && ue)) &&
												_.onTryDeleteContext
											? _.onTryDeleteContext()?.()
											: !1);
						},
						c.COMMAND_PRIORITY_HIGH,
					),
					oe = te.registerCommand(
						b.KEY_BACKSPACE_DELETE_COMMAND,
						(pe) =>
							ae.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.some(
								(ye) =>
									ye.metadata !== void 0 &&
									((ye.metadata.type === "chat" &&
										ye.metadata.chatType !== "edit") ||
										ye.metadata.type === "codeInterpreter" ||
										ye.metadata.type === "interpreterExecution"),
							)
								? (pe.preventDefault(),
									pe.stopPropagation(),
									ae.commandService.executeCommand(l.$Pgc),
									!0)
								: !1,
						c.COMMAND_PRIORITY_HIGH,
					),
					ae = (0, p.$odc)();
				return (
					(0, r.onCleanup)(() => {
						le(), re(), oe();
					}),
					null
				);
			}
			function X(_) {
				const [te] = (0, h.useLexicalComposerContext)(),
					Q = (0, p.$pdc)(),
					Z = te.registerCommand(
						c.FOCUS_COMMAND,
						(pe) => (_.setIsFocused && _.setIsFocused(!0), !1),
						c.COMMAND_PRIORITY_CRITICAL,
					),
					se = te.registerCommand(
						c.BLUR_COMMAND,
						(pe) => (_.setIsFocused && _.setIsFocused(!1), !1),
						c.COMMAND_PRIORITY_CRITICAL,
					);
				let re = 0;
				const le = 100,
					oe = (pe) => {
						pe.keyCode === 9 && (re = pe.timeStamp);
					};
				(0, r.createEffect)(() => {
					Q.window.addEventListener("keydown", oe, !0);
				});
				const ae = te.registerCommand(
					c.FOCUS_COMMAND,
					(pe) => {
						const $e = (0, b.$getSelection)();
						return (
							(0, b.$isRangeSelection)($e) &&
								re + le > pe.timeStamp &&
								(0, b.$setSelection)($e.clone()),
							!1
						);
					},
					b.COMMAND_PRIORITY_LOW,
				);
				return (
					(0, r.createEffect)(() => {
						_.delegate !== void 0 &&
							_.delegate.setForceFocusNoScroll(() => {
								te.getRootElement().focus({ preventScroll: !0 });
							});
					}),
					(0, r.onCleanup)(() => {
						Z(), se(), ae(), Q.window.removeEventListener("keydown", oe, !0);
					}),
					null
				);
			}
			const Y = (_) => {
					const [te] = (0, h.useLexicalComposerContext)(),
						Q = te.registerCommand(
							c.KEY_ENTER_COMMAND,
							(Z) =>
								Z.repeat
									? !0
									: Z.shiftKey ||
											_.handleSubmit(Z) === "do-not-stop-propagation"
										? !1
										: (Z.preventDefault(), !0),
							c.COMMAND_PRIORITY_HIGH,
						);
					return (
						(0, r.onCleanup)(() => {
							Q();
						}),
						null
					);
				},
				ie = (_) => {
					const [te] = (0, h.useLexicalComposerContext)(),
						Q = (0, p.$odc)();
					let Z = !1;
					const se = (pe) => {
							_.source === "chat" &&
								Q.tooltipService.registerEvent("chat.paste");
							let $e = pe.clipboardData?.getData("Text");
							if (
								!Z &&
								Q.reactiveStorageService.nonPersistentStorage.lastCopy &&
								Q.reactiveStorageService.nonPersistentStorage.lastCopy.text ===
									$e &&
								$e !== void 0 &&
								$e.includes(`
`) &&
								!_.disableSelectionCopyPaste
							) {
								pe.preventDefault();
								const fe = _.insertTerminalSelection,
									me = _.insertSelection;
								return (
									(0, y.$1fc)(
										Q.reactiveStorageService.nonPersistentStorage.lastCopy,
										Q.dataScrubbingService,
									).then((ve) => {
										ve &&
											(ve.text.trim().startsWith("```bash") && fe !== void 0
												? fe(ve)
												: me(ve));
									}),
									!0
								);
							}
							if (Z && $e)
								return (
									pe.preventDefault(),
									te.update(() => {
										const fe = (0, b.$getSelection)();
										(0, b.$isRangeSelection)(fe) && fe.insertText($e);
									}),
									!0
								);
							if ($e !== void 0 && $e.includes("@")) {
								for (let fe = 0; fe < $e.length; fe++) {
									const me = $e.charAt(fe);
									if (me === "@") {
										const ve = "@" + $.$s_b[$.TypeaheadOptionType.codebase],
											ge = "@" + $.$s_b[$.TypeaheadOptionType.lint],
											be = "@" + $.$s_b[$.TypeaheadOptionType.web],
											Ce = $e.slice(fe),
											Le = (0, b.$getSelection)();
										if (Le === null) return !1;
										if (Ce.startsWith(ve))
											if (_.supportsCodebase) {
												const Fe = (0, o.$createMentionNode)(
													$.$s_b[$.TypeaheadOptionType.codebase],
													void 0,
													void 0,
													$.TypeaheadOptionType.codebase,
												);
												Le.insertNodes([Fe]),
													Fe.select(),
													_.addCodebase(Fe.storedKey),
													(fe += ve.length - 1);
											} else fe += ve.length;
										else if (Ce.startsWith(ge)) {
											const Fe = (0, o.$createMentionNode)(
												$.$s_b[$.TypeaheadOptionType.lint],
												void 0,
												void 0,
												$.TypeaheadOptionType.lint,
											);
											Le.insertNodes([Fe]),
												Fe.select(),
												_.addLinterErrors(Fe.storedKey),
												(fe += ge.length - 1);
										} else if (Ce.startsWith(be))
											if (_.supportsWeb) {
												const Fe = (0, o.$createMentionNode)(
													$.$s_b[$.TypeaheadOptionType.web],
													void 0,
													void 0,
													$.TypeaheadOptionType.web,
												);
												Le.insertNodes([Fe]),
													Fe.select(),
													_.addWeb(Fe.storedKey),
													(fe += be.length - 1);
											} else fe += be.length;
										else {
											const Oe =
												Q.reactiveStorageService.applicationUserPersistentStorage.aiFeaturesCopyPasteState.mentions
													.slice()
													.reverse()
													.find((xe) => Ce.startsWith(xe.displayName));
											if (Oe) {
												const xe = Oe.displayName.replace(/^@/, "");
												if (Oe.selection.type === s.SelectionType.Code) {
													const He = (0, o.$createMentionNode)(
														xe,
														void 0,
														void 0,
														$.TypeaheadOptionType.code,
														Oe.selection,
													);
													Le.insertNodes([He]),
														_.addCode({
															...Oe.selection.selectionWithoutUuid,
															uuid: He.storedKey,
														}),
														(fe += Oe.displayName.length - 1);
												} else if (Oe.selection.type === s.SelectionType.File) {
													const He = (0, o.$createMentionNode)(
														xe,
														void 0,
														void 0,
														$.TypeaheadOptionType.file,
														Oe.selection,
													);
													Le.insertNodes([He]),
														_.addFile({
															...Oe.selection.selectionWithoutUuid,
															uuid: He.storedKey,
														}),
														(fe += Oe.displayName.length - 1);
												} else if (Oe.selection.type === s.SelectionType.Folder)
													if (_.supportsFolder) {
														const He = (0, o.$createMentionNode)(
															xe,
															void 0,
															void 0,
															$.TypeaheadOptionType.folder,
															Oe.selection,
														);
														Le.insertNodes([He]),
															_.addFolder({
																...Oe.selection.selectionWithoutUuid,
																uuid: He.storedKey,
															}),
															(fe += Oe.displayName.length - 1);
													} else fe += Oe.displayName.length;
												else if (Oe.selection.type === s.SelectionType.Docs)
													if (_.supportsDocs) {
														const He = (0, o.$createMentionNode)(
															xe,
															void 0,
															void 0,
															$.TypeaheadOptionType.doc,
															Oe.selection,
														);
														Le.insertNodes([He]),
															_.addDoc({
																...Oe.selection.selectionWithoutUuid,
																uuid: He.storedKey,
															}),
															(fe += Oe.displayName.length - 1);
													} else fe += Oe.displayName.length;
											} else Le.insertText("@");
										}
									} else {
										const ve = (0, b.$getSelection)();
										if (ve === null) return !1;
										ve.insertText(me);
									}
								}
								return pe.preventDefault(), pe.stopPropagation(), !0;
							}
							const ye = Array.from(pe.clipboardData?.items || []).find(
									(fe) => fe.kind === "file",
								),
								ue = (fe) => {
									try {
										return new URL(fe).hostname.includes(".");
									} catch {
										return !1;
									}
								};
							if (ye) {
								pe.preventDefault();
								const fe = ye.getAsFile();
								if (fe) {
									const me = fe.name;
									return (
										te.update(() => {
											const ve = (0, b.$getSelection)();
											ve !== null && ve.insertText(me);
										}),
										!0
									);
								}
							} else if (
								_.supportsLink &&
								!_.isMentionsMenuOpen() &&
								$e !== void 0 &&
								$e.length < 2e3 &&
								ue($e)
							)
								return (
									pe.preventDefault(),
									te._rootElement?.blur(),
									te.update(() => {
										if (!$e) return;
										const fe = (0, o.$createMentionNode)(
												$e,
												void 0,
												void 0,
												$.TypeaheadOptionType.link,
											),
											me = (0, b.$createTextNode)(" "),
											ve = (0, b.$getSelection)();
										ve !== null &&
											(ve.insertNodes([fe, me]),
											me.select(),
											_.insertLink({ url: $e, uuid: fe.storedKey }));
									}),
									!0
								);
							return !1;
						},
						re = te.registerCommand(
							b.PASTE_COMMAND,
							(pe) => se(pe),
							c.COMMAND_PRIORITY_HIGH,
						),
						le = te.registerCommand(
							b.KEY_COMMAND_V_COMMAND,
							(pe) =>
								(pe.metaKey || pe.ctrlKey) && pe.shiftKey
									? (pe.preventDefault(),
										te.getRootElement() &&
											((Z = !0),
											Q.window.document.execCommand("paste"),
											setTimeout(() => {
												Z = !1;
											}, 100)),
										!0)
									: !1,
							c.COMMAND_PRIORITY_HIGH,
						),
						oe = te.registerCommand(
							b.COPY_COMMAND,
							(pe) => {
								const $e = (ue) => {
										if (ue.getType() === "mention") {
											const ve =
												"@" +
												(ue.__text.startsWith("@")
													? ue.__text.replace(/^@/, "")
													: ue.__text);
											ue.metadata &&
												Q.reactiveStorageService.setApplicationUserPersistentStorage(
													"aiFeaturesCopyPasteState",
													"mentions",
													(ge) => [
														...ge.filter(
															(be) =>
																be.displayName !== ve &&
																be.lastUsedAtUnixMs > Date.now() - 6048e5,
														),
														{
															displayName: ve,
															selection: ue.metadata.selection,
															lastUsedAtUnixMs: Date.now(),
														},
													],
												);
										} else ue.getChildren && ue.getChildren().forEach($e);
									},
									ye = (0, b.$getSelection)();
								return ye
									? (ye.getNodes().forEach((ue) => {
											$e(ue);
										}),
										!0)
									: !1;
							},
							b.COMMAND_PRIORITY_LOW,
						),
						ae = te.registerCommand(
							b.CUT_COMMAND,
							(pe) => {
								const $e = (ue) => {
										if (ue.getType() === "mention") {
											const ve =
												"@" +
												(ue.__text.startsWith("@")
													? ue.__text.replace(/^@/, "")
													: ue.__text);
											ue.metadata &&
												Q.reactiveStorageService.setApplicationUserPersistentStorage(
													"aiFeaturesCopyPasteState",
													"mentions",
													(ge) => [
														...ge.filter(
															(be) =>
																be.displayName !== ve &&
																be.lastUsedAtUnixMs > Date.now() - 6048e5,
														),
														{
															displayName: ve,
															selection: ue.metadata.selection,
															lastUsedAtUnixMs: Date.now(),
														},
													],
												);
										} else ue.getChildren && ue.getChildren().forEach($e);
									},
									ye = (0, b.$getSelection)();
								return ye
									? (ye.getNodes().forEach((ue) => {
											$e(ue);
										}),
										!0)
									: !1;
							},
							b.COMMAND_PRIORITY_LOW,
						);
					return (
						(0, r.onCleanup)(() => {
							re(), le(), oe(), ae();
						}),
						null
					);
				},
				ne = (_) => {
					const [te] = (0, h.useLexicalComposerContext)(),
						[Q, Z] = (0, r.createSignal)(!1),
						se = te.registerTextContentListener((le) => {
							const oe = (0, r.untrack)(() => _.setIsTyping());
							oe && oe(le !== ""),
								_.setText !== void 0 && (_.setText?.(le), Q() || Z(!0)),
								_.setRichText !== void 0 &&
									_.setRichText?.(JSON.stringify(te.getEditorState()));
							const ae = te.getRootElement();
							_.setContentHeight &&
								ae &&
								_.setContentHeight(ae.getBoundingClientRect().height);
						});
					(0, r.createEffect)(() => {
						const le = _.setContentHeight;
						Q() &&
							setTimeout(() => {
								const oe = te.getRootElement();
								le && oe && le(oe.getBoundingClientRect().height);
							});
					}),
						(0, r.onCleanup)(() => {
							se();
						});
					const re = (0, p.$odc)();
					return (
						(0, r.createEffect)(() => {
							const le = te.registerCommand(
								b.KEY_ESCAPE_COMMAND,
								(oe) => (_.onEscape ? (_.onEscape(oe), !0) : !1),
								c.COMMAND_PRIORITY_CRITICAL,
							);
							(0, r.onCleanup)(() => {
								le();
							});
						}),
						null
					);
				},
				ee = (_) => {
					const [te] = (0, h.useLexicalComposerContext)(),
						Q = _.delegate?.getRichText() || _.initText || "",
						[Z, se] = (0, r.createSignal)(Q),
						re = te.registerTextContentListener((pe) => {
							const $e = te.getEditorState(),
								ye = JSON.stringify($e);
							se(ye), _.delegate?.setText(pe, ye);
						}),
						le = (pe) => {
							if (pe !== "") {
								if (pe.startsWith("{"))
									try {
										te.setEditorState(te.parseEditorState(pe));
										return;
									} catch ($e) {
										console.error($e);
									}
								oe(pe);
							}
						},
						oe = (pe) => {
							te.update(() => {
								const $e = (0, b.$getRoot)();
								if (
									!$e
										.getChildren()
										.every((ve) =>
											ve instanceof b.ParagraphNode
												? ve.getTextContent() === ""
												: !1,
										)
								)
									return;
								if (pe.startsWith("{"))
									try {
										te.setEditorState(te.parseEditorState(pe));
										return;
									} catch (ve) {
										console.error(ve);
									}
								const fe = (0, b.$createParagraphNode)(),
									me = (0, b.$createTextNode)(pe);
								fe.append(me);
								for (const ve of $e.getChildren()) ve.remove();
								$e.append(fe), $e.selectEnd();
							});
						};
					Q.trim() !== "" && le(Q);
					let ae;
					if (
						((0, r.createEffect)(() => {
							ae?.(),
								_.delegate &&
									((ae = _.delegate.onSubmit(() => {
										const pe = new KeyboardEvent("submit");
										_.onSubmit(pe);
									})),
									(0, r.onCleanup)(ae));
						}, [_.delegate, _.onSubmit]),
						_.delegate)
					) {
						const pe = _.delegate.onTextChange((ye, ue) => {
							(ue ?? ye) !== Z() && oe(ue ?? ye);
						});
						(0, r.onCleanup)(pe);
						const $e = _.delegate.onClear((ye) => {
							if (ye?.dontStealFocus === !0) {
								const ue = te.parseEditorState(
									'{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',
								);
								te.setEditorState(ue);
								return;
							}
							te.update(() => {
								const ue = (0, b.$getRoot)(),
									fe = (0, b.$createParagraphNode)();
								for (const me of ue.getChildren()) me.remove();
								ue.append(fe), ue.selectEnd();
							});
						});
						(0, r.onCleanup)($e);
					}
					return (
						(0, n.onMount)(() => {
							const pe = te.getRootElement();
							pe.addEventListener("focusin", () => {
								_.delegate?.notifyFocus();
							}),
								_.inputBoxDelegate?.registerTextAreaElement(pe, te);
						}),
						(0, r.onCleanup)(() => {
							re();
						}),
						null
					);
				};
		},
	),
		define(
			de[4310],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 36, 14, 79, 26, 450, 205, 148, 158,
				12, 2362,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$XZc = k);
				const l = (0, t.template)("<div>Oh! Your issue is empty. :("),
					y = (0, t.template)("<div>Oh! Your email seems invalid. :("),
					$ = (0, t.template)(
						`<div class="feedback-container-backing"><div class="feedback-container"><div class="feedback"><div class="feedback__header"><div class="feedback__title">Cursor Feedback</div><div><i class="fas fa-times"></i></div></div><div><div class="feedback__subtitle">Help us improve the Cursor experience by providing feedback.</div><div><div><div><span class="feedback__button_title">Idea</span><div></div><span></span></div><div class="feedback__button_subtitle">I think this'd be cool!</div></div><div><div><span class="feedback__button_title">Small Bug</span><div></div><span></span></div><div class="feedback__button_subtitle">This is off...</div></div><div><div><span class="feedback__button_title">Urgent Bug</span><div></div><span></span></div><div class="feedback__button_subtitle">I can't use Cursor!</div></div></div><div></div><div><input type="checkbox" id="consoleLogs" name="consoleLogs"><label for="consoleLogs"><span>Include console logs</span></label></div></div><div><div class="feedback__button feedback__button--submit"><div></div><div class="feedback__button--submit-title">Submit</div><div class="feedback__button--submit-subtitle"></div></div></div></div><div>`,
					),
					v = (0, t.template)(
						'<div class="screenshot-drop-zone">Drop your screenshot here',
					),
					S = (0, t.template)('<input type="file" accept="image/*">'),
					I = (0, t.template)('<div class="screenshot-feedback-container">'),
					T = (0, t.template)(
						'<div class="screenshot-dropped-zone"><div><i class="fas fa-times"></i></div><img>',
					),
					P = (0, n.$$O)(
						"tabbar-remove-chat",
						c.$ak.x,
						"Icon for removing a tab in the tab list for chats.",
					);
				function k(D) {
					const M = (0, h.$odc)();
					let N;
					const [A, R] = (0, a.createSignal)(""),
						O = (0, a.createMemo)(
							() =>
								M.reactiveStorageService.nonPersistentStorage.feedbackState
									.type ?? f.ReportBugRequest_BugType.LOW,
						),
						B = (0, a.createMemo)(
							() =>
								M.reactiveStorageService.nonPersistentStorage.feedbackState
									.description ?? "",
						),
						U = (0, a.createMemo)(
							() =>
								M.reactiveStorageService.nonPersistentStorage.feedbackState
									.screenshots,
						),
						[z, F] = (0, a.createSignal)(
							M.cursorAuthenticationService.reactivePrivacyMode() !== !0,
						),
						[x, H] = (0, a.createSignal)(!1),
						[q, V] = (0, a.createSignal)(!1),
						G = (Y) => {
							M.reactiveStorageService.setNonPersistentStorage(
								"feedbackState",
								"screenshots",
								(ie) => [...ie, Y],
							);
						},
						K = async () => {
							if (B() === "") {
								H(!0);
								return;
							}
							function Y(te) {
								return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(te);
							}
							const ie = [],
								ne = [];
							for (const te of U()) {
								const Q = new FileReader();
								Q.readAsDataURL(te);
								const Z = new Promise((se, re) => {
									Q.onloadend = () => {
										ie.push(Q.result), se();
									};
								});
								ne.push(Z);
							}
							await Promise.all(ne);
							const _ = O();
							D.onSubmit(_, B(), A(), z(), ie),
								M.reactiveStorageService.setNonPersistentStorage(
									"feedbackState",
									"description",
									void 0,
								),
								M.reactiveStorageService.setNonPersistentStorage(
									"feedbackState",
									"type",
									void 0,
								),
								M.reactiveStorageService.setNonPersistentStorage(
									"feedbackState",
									"screenshots",
									[],
								);
						},
						[J, W] = (0, a.createSignal)(!1),
						X = new o.$Zzb();
					return (
						(0, a.createEffect)(() => {
							const Y = X;
							setTimeout(() => {
								Y && Y.focus();
							}, 20);
						}),
						(() => {
							const Y = $(),
								ie = Y.firstChild,
								ne = ie.firstChild,
								ee = ne.firstChild,
								_ = ee.firstChild,
								te = _.nextSibling,
								Q = ee.nextSibling,
								Z = Q.firstChild,
								se = Z.nextSibling,
								re = se.firstChild,
								le = re.firstChild,
								oe = le.firstChild,
								ae = oe.nextSibling,
								pe = ae.nextSibling,
								$e = re.nextSibling,
								ye = $e.firstChild,
								ue = ye.firstChild,
								fe = ue.nextSibling,
								me = fe.nextSibling,
								ve = $e.nextSibling,
								ge = ve.firstChild,
								be = ge.firstChild,
								Ce = be.nextSibling,
								Le = Ce.nextSibling,
								Fe = se.nextSibling,
								Oe = Fe.nextSibling,
								xe = Oe.firstChild,
								He = xe.nextSibling,
								Ke = He.firstChild,
								Je = Q.nextSibling,
								Te = Je.firstChild,
								Ee = Te.firstChild,
								Ie = Ee.nextSibling,
								Be = Ie.nextSibling,
								Se = ne.nextSibling;
							return (
								Y.addEventListener("click", (ke) => {
									D.closePane(), ke.stopPropagation();
								}),
								ie.addEventListener("click", (ke) => {
									ke.stopPropagation();
								}),
								ee.style.setProperty("display", "flex"),
								ee.style.setProperty("justify-content", "space-between"),
								ee.style.setProperty("align-items", "center"),
								te.addEventListener("click", () => {
									D.closePane();
								}),
								Q.style.setProperty("display", "flex"),
								Q.style.setProperty("flex-direction", "column"),
								Q.style.setProperty("gap", "10px"),
								se.style.setProperty("display", "grid"),
								se.style.setProperty("justify-content", "space-between"),
								se.style.setProperty("align-items", "center"),
								se.style.setProperty("width", "100%"),
								se.style.setProperty("gap", "8px"),
								se.style.setProperty("grid", "auto-flow / 1fr 1fr 1fr"),
								re.addEventListener("click", () => {
									M.reactiveStorageService.setNonPersistentStorage(
										"feedbackState",
										"type",
										f.ReportBugRequest_BugType.IDEA,
									);
								}),
								re.style.setProperty("flex-direction", "column"),
								re.style.setProperty("align-items", "flex-start"),
								le.style.setProperty("display", "flex"),
								le.style.setProperty("justify-content", "space-between"),
								le.style.setProperty("width", "100%"),
								ae.style.setProperty("flex-grow", "1"),
								pe.style.setProperty("font-size", "12px"),
								(0, u.insert)(pe, `${s.$m ? "\u2318" : "ctrl+"}1`),
								$e.addEventListener("click", () => {
									M.reactiveStorageService.setNonPersistentStorage(
										"feedbackState",
										"type",
										f.ReportBugRequest_BugType.LOW,
									);
								}),
								$e.style.setProperty("flex-direction", "column"),
								$e.style.setProperty("align-items", "flex-start"),
								ye.style.setProperty("display", "flex"),
								ye.style.setProperty("justify-content", "space-between"),
								ye.style.setProperty("width", "100%"),
								fe.style.setProperty("flex-grow", "1"),
								me.style.setProperty("font-size", "12px"),
								(0, u.insert)(me, `${s.$m ? "\u2318" : "ctrl+"}2`),
								ve.addEventListener("click", () => {
									M.reactiveStorageService.setNonPersistentStorage(
										"feedbackState",
										"type",
										f.ReportBugRequest_BugType.URGENT,
									);
								}),
								ve.style.setProperty("flex-direction", "column"),
								ve.style.setProperty("align-items", "flex-start"),
								ge.style.setProperty("display", "flex"),
								ge.style.setProperty("justify-content", "space-between"),
								ge.style.setProperty("width", "100%"),
								Ce.style.setProperty("flex-grow", "1"),
								Le.style.setProperty("font-size", "12px"),
								Le.style.setProperty("text-align", "right"),
								(0, u.insert)(Le, `${s.$m ? "\u2318" : "ctrl+"}3`),
								Fe.addEventListener("click", () => {
									X.focus();
								}),
								Fe.style.setProperty("min-height", "200px"),
								Fe.style.setProperty("font-size", "13px"),
								Fe.style.setProperty(
									"background-color",
									"var(--vscode-input-background)",
								),
								Fe.style.setProperty("color", "var(--vscode-input-foreground)"),
								Fe.style.setProperty(
									"border",
									"solid 1px var(--vscode-input-border,transparent)",
								),
								Fe.style.setProperty("border-radius", "0.25rem"),
								Fe.style.setProperty("padding", "0.5rem"),
								(0, u.insert)(
									Fe,
									(0, m.createComponent)(p.$Tac, {
										inputBoxDelegate: X,
										get initText() {
											return B();
										},
										get placeholder() {
											return O() === f.ReportBugRequest_BugType.IDEA
												? "Describe your idea..."
												: "Describe the issue...";
										},
										setText: (ke) => {
											M.reactiveStorageService.setNonPersistentStorage(
												"feedbackState",
												"description",
												ke,
											);
										},
										onEscape: () => {
											D.closePane();
										},
										onSubmit: (ke) => "do-not-stop-propagation",
										setIsFocused: (ke) => {
											W(ke);
										},
										extraCommandListeners: [
											{
												command: b.KEY_COMMAND_2_COMMAND,
												callback: (ke) => (
													M.reactiveStorageService.setNonPersistentStorage(
														"feedbackState",
														"type",
														f.ReportBugRequest_BugType.LOW,
													),
													ke.stopImmediatePropagation(),
													!0
												),
											},
											{
												command: b.KEY_COMMAND_3_COMMAND,
												callback: (ke) => (
													M.reactiveStorageService.setNonPersistentStorage(
														"feedbackState",
														"type",
														f.ReportBugRequest_BugType.URGENT,
													),
													ke.stopImmediatePropagation(),
													!0
												),
											},
											{
												command: b.KEY_COMMAND_1_COMMAND,
												callback: (ke) => (
													M.reactiveStorageService.setNonPersistentStorage(
														"feedbackState",
														"type",
														f.ReportBugRequest_BugType.IDEA,
													),
													ke.stopImmediatePropagation(),
													!0
												),
											},
											{
												command: b.KEY_COMMAND_ENTER_COMMAND,
												callback: (ke) => (
													K().catch((Ue) => {
														console.error(Ue);
													}),
													ke.stopImmediatePropagation(),
													!0
												),
											},
										],
									}),
								),
								Oe.style.setProperty("font-size", "12px"),
								Oe.style.setProperty("display", "flex"),
								Oe.style.setProperty("align-items", "center"),
								Oe.style.setProperty("opacity", "0.5"),
								xe.addEventListener("change", (ke) => {
									M.cursorAuthenticationService.reactivePrivacyMode() ||
										F(ke.target.checked);
								}),
								xe.style.setProperty("width", "12px"),
								(0, u.insert)(
									He,
									(0, m.createComponent)(a.Show, {
										get when() {
											return M.cursorAuthenticationService.reactivePrivacyMode();
										},
										children: " (logs are never included when on privacy mode)",
									}),
									null,
								),
								Je.style.setProperty("display", "flex"),
								Je.style.setProperty("flex-direction", "row"),
								Je.style.setProperty("justify-content", "flex-end"),
								Je.style.setProperty("align-items", "center"),
								(0, u.insert)(
									Je,
									(0, m.createComponent)(a.Show, {
										get when() {
											return x();
										},
										get children() {
											const ke = l();
											return (
												ke.style.setProperty(
													"color",
													"var(--vscode-inputValidation-warningBorder)",
												),
												ke.style.setProperty("font-size", "12px"),
												ke.style.setProperty("font-weight", "bold"),
												ke.style.setProperty("font-family", "monospace"),
												ke.style.setProperty("flex-grow", "1"),
												ke.style.setProperty("padding-left", "12px"),
												ke.style.setProperty("width", "220px"),
												ke
											);
										},
									}),
									Te,
								),
								(0, u.insert)(
									Je,
									(0, m.createComponent)(a.Show, {
										get when() {
											return q();
										},
										get children() {
											const ke = y();
											return (
												ke.style.setProperty(
													"color",
													"var(--vscode-inputValidation-warningBorder)",
												),
												ke.style.setProperty("font-size", "12px"),
												ke.style.setProperty("font-weight", "bold"),
												ke.style.setProperty("font-family", "monospace"),
												ke.style.setProperty("flex-grow", "1"),
												ke.style.setProperty("padding-left", "12px"),
												ke.style.setProperty("width", "220px"),
												ke
											);
										},
									}),
									Te,
								),
								Te.addEventListener("click", K),
								Ee.style.setProperty("font-size", "12px"),
								Ee.style.setProperty("color", "hsl(209, 90%, 100%)"),
								(0, u.insert)(Ee, `${s.$m ? "\u2318" : "ctrl+"}\u23CE`),
								(0, u.insert)(
									Be,
									(() => {
										const ke = (0, r.memo)(
											() => O() === f.ReportBugRequest_BugType.LOW,
										);
										return () =>
											ke()
												? "Thanks for the feedback!"
												: (() => {
														const Ue = (0, r.memo)(
															() => O() === f.ReportBugRequest_BugType.URGENT,
														);
														return () =>
															Ue()
																? "Oh no... We will fix this ASAP!"
																: O() === f.ReportBugRequest_BugType.IDEA
																	? "Thanks for the idea!"
																	: "";
													})();
									})(),
								),
								Se.style.setProperty("display", "flex"),
								Se.style.setProperty("flex-direction", "row"),
								Se.style.setProperty("flex-wrap", "wrap"),
								Se.style.setProperty("width", "100%"),
								Se.style.setProperty("gap", "10px"),
								(0, u.insert)(
									Se,
									(0, m.createComponent)(a.For, {
										get each() {
											return [...U(), void 0];
										},
										children: (ke, Ue) =>
											(0, m.createComponent)(L, {
												onImageDrop: G,
												image: ke,
												removeImage: () => {
													M.reactiveStorageService.setNonPersistentStorage(
														"feedbackState",
														"screenshots",
														U().filter((qe, Ae) => Ae !== Ue()),
													);
												},
											}),
									}),
								),
								(0, d.effect)(
									(ke) => {
										const Ue = [
												"feedback__dismiss",
												g.ThemeIcon.asClassName(P),
											].join(" "),
											qe = `feedback__button feedback__button--low ${O() === f.ReportBugRequest_BugType.IDEA ? "selected" : ""}`,
											Ae = `feedback__button feedback__button--medium ${O() === f.ReportBugRequest_BugType.LOW ? "selected" : ""}`,
											Me = `feedback__button feedback__button--high ${O() === f.ReportBugRequest_BugType.URGENT ? "selected" : ""}`,
											De = M.cursorAuthenticationService.reactivePrivacyMode(),
											Re = M.cursorAuthenticationService.reactivePrivacyMode()
												? "line-through"
												: "none",
											je = O() === f.ReportBugRequest_BugType.LOW,
											Ve = O() === f.ReportBugRequest_BugType.URGENT,
											Ze = O() === f.ReportBugRequest_BugType.IDEA;
										return (
											Ue !== ke._v$ && (0, C.className)(te, (ke._v$ = Ue)),
											qe !== ke._v$2 && (0, C.className)(re, (ke._v$2 = qe)),
											Ae !== ke._v$3 && (0, C.className)($e, (ke._v$3 = Ae)),
											Me !== ke._v$4 && (0, C.className)(ve, (ke._v$4 = Me)),
											De !== ke._v$5 && (xe.disabled = ke._v$5 = De),
											Re !== ke._v$6 &&
												((ke._v$6 = Re) != null
													? Ke.style.setProperty("text-decoration", Re)
													: Ke.style.removeProperty("text-decoration")),
											je !== ke._v$7 &&
												Te.classList.toggle(
													"feedback__button--submit-medium",
													(ke._v$7 = je),
												),
											Ve !== ke._v$8 &&
												Te.classList.toggle(
													"feedback__button--submit-high",
													(ke._v$8 = Ve),
												),
											Ze !== ke._v$9 &&
												Te.classList.toggle(
													"feedback__button--submit-low",
													(ke._v$9 = Ze),
												),
											ke
										);
									},
									{
										_v$: void 0,
										_v$2: void 0,
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
										_v$6: void 0,
										_v$7: void 0,
										_v$8: void 0,
										_v$9: void 0,
									},
								),
								(0, d.effect)(() => (xe.checked = z())),
								Y
							);
						})()
					);
				}
				const L = (D) => {
					let M, N;
					const A = (F) => {
							F.preventDefault(), F.stopPropagation();
						},
						R = (F) => {
							F.preventDefault(),
								F.stopPropagation(),
								M.classList.add("drag-over");
						},
						O = (F) => {
							F.preventDefault(),
								F.stopPropagation(),
								M.classList.remove("drag-over");
						},
						B = (F) => {
							F.preventDefault(),
								F.stopPropagation(),
								M.classList.remove("drag-over");
							const x = F.dataTransfer.files;
							if (x.length > 0) {
								const H = x[0];
								H.type.startsWith("image/") && D.onImageDrop(H);
							}
						},
						U = (F) => {
							F.stopPropagation(), N.click();
						},
						z = (F) => {
							const x = F.target.files;
							if (x && x.length > 0) {
								const H = x[0];
								H.type.startsWith("image/") && D.onImageDrop(H);
							}
						};
					return (() => {
						const F = I();
						return (
							F.addEventListener("click", (x) => {
								x.stopPropagation();
							}),
							(0, E.use)((x) => {
								M = x;
							}, F),
							F.style.setProperty("width", "100%"),
							F.style.setProperty("height", "100%"),
							(0, u.insert)(
								F,
								(0, m.createComponent)(a.Switch, {
									get children() {
										return [
											(0, m.createComponent)(a.Match, {
												get when() {
													return !D.image;
												},
												get children() {
													return [
														(() => {
															const x = v();
															return (
																x.addEventListener("click", U),
																x.addEventListener("drop", B),
																x.addEventListener("dragleave", O),
																x.addEventListener("dragenter", R),
																x.addEventListener("dragover", A),
																x
															);
														})(),
														(() => {
															const x = S();
															return (
																x.addEventListener("change", z),
																(0, E.use)((H) => {
																	N = H;
																}, x),
																x.style.setProperty("display", "none"),
																x
															);
														})(),
													];
												},
											}),
											(0, m.createComponent)(a.Match, {
												get when() {
													return D.image;
												},
												children: (x) =>
													(() => {
														const H = T(),
															q = H.firstChild,
															V = q.nextSibling;
														return (
															H.style.setProperty("position", "relative"),
															(0, w.addEventListener)(
																q,
																"click",
																D.removeImage,
															),
															q.style.setProperty("cursor", "pointer"),
															q.style.setProperty("position", "absolute"),
															q.style.setProperty("top", "0"),
															q.style.setProperty("right", "0"),
															V.style.setProperty("object-fit", "cover"),
															V.style.setProperty("width", "100%"),
															V.style.setProperty("height", "100px"),
															(0, d.effect)(
																(G) => {
																	const K = [g.ThemeIcon.asClassName(P)].join(
																			" ",
																		),
																		J = URL.createObjectURL(x());
																	return (
																		K !== G._v$10 &&
																			(0, C.className)(q, (G._v$10 = K)),
																		J !== G._v$11 &&
																			(0, i.setAttribute)(
																				V,
																				"src",
																				(G._v$11 = J),
																			),
																		G
																	);
																},
																{ _v$10: void 0, _v$11: void 0 },
															),
															H
														);
													})(),
											}),
										];
									},
								}),
							),
							F
						);
					})();
				};
			},
		),
		define(
			de[4311],
			he([1, 0, 2, 36, 4310, 58, 47]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$YZc = d);
				function d(m, r, u, a, h) {
					const c = (0, C.$9g)(),
						n = (g, p, o, f, b) => {
							const s = {
								bugId: c,
								bug: p,
								priority: g,
								protoURL: "",
								contactEmail: o,
								includeConsoleLogs: f,
								screenshots: b,
							};
							u.executeCommand(
								"cursor.publicLogCapture",
								"submitted.feedbackpane",
							),
								u
									.executeCommand(E.$qX, s)
									.then(() => {
										h?.();
									})
									.catch((l) => {
										console.error(l);
									});
						};
					return (0, i.$ndc)(
						() =>
							(0, t.createComponent)(w.$XZc, {
								closePane: () => {
									a.activeEditorPane?.focus(), h?.();
								},
								onSubmit: (...g) => {
									a.activeEditorPane?.focus(), n(...g);
								},
							}),
						m,
						r,
					);
				}
			},
		),
		define(
			de[4312],
			he([1, 0, 5, 180, 3, 30, 4311, 55, 52, 31, 1705, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let h = class extends w.$1c {
					constructor(n, g, p, o, f) {
						super(),
							(this.a = n),
							(this.b = g),
							(this.c = p),
							(this.f = o),
							(this.g = f),
							this.f.addPopupListener(this.renderPopup.bind(this)),
							this.f.addClosePopupListener(this.dispose.bind(this));
					}
					renderPopup(n, g, p) {
						console.log("renderPopup running in AI feedback popup handler");
						const o = (0, C.$YZc)(n.activeContainer, g, p, this.g, () =>
							o.dispose(),
						);
					}
				};
				(h = Ne(
					[j(0, i.$jEb), j(1, t.$Li), j(2, r.$ek), j(3, u.$ZZc), j(4, a.$IY)],
					h,
				)),
					E.$Io
						.as(d.Extensions.Workbench)
						.registerWorkbenchContribution(h, m.LifecyclePhase.Restored);
			},
		),
		