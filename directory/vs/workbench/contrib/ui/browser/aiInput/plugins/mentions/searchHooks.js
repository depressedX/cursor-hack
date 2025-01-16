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
		