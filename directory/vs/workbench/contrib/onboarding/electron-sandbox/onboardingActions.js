define(
			de[1897],
			he([
				1, 0, 9, 11, 22, 19, 151, 76, 58, 21, 119, 45, 782, 187, 62, 33, 772,
				137, 681, 133, 256, 256, 34, 47,
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
					(e.$fed = e.$eed = void 0),
					(e.$bed = S),
					(e.$ced = I),
					(e.$ded = P);
				const v = [
					{ id: "github.copilot", name: "GH Copilot" },
					{ id: "TabNine.tabnine-vscode", name: "TabNine" },
					{ id: "sourcegraph.cody-ai", name: "Cody" },
					{ id: "Blackboxapp.blackbox", name: "Blackbox" },
					{ id: "Continue.continue", name: "Continue" },
					{ id: "Codeium.codeium", name: "Codeium" },
					{ id: "supermaven.supermaven", name: "Supermaven" },
				];
				(0, i.$4X)(
					class extends i.$3X {
						constructor() {
							super({
								id: m.$NX,
								title: {
									value: "Disable Autocompletes",
									original: "Disable Autocompletes",
								},
								f1: !1,
							});
						}
						async run(N) {
							const A = N.get(u.$Hp),
								R = N.get(u.$Kp),
								O = N.get(y.$ik);
							for (const B of v)
								try {
									const { id: U } = B,
										z = await A.getInstalled().then((F) =>
											F.find((x) => x.identifier.id === U),
										);
									z &&
										(await R.disableExtension(z.identifier),
										O.info(`Disabled extension: ${U}`));
								} catch (U) {
									O.error(`Failed to disable extension: ${B.id}`, U);
								}
						}
					},
				);
				async function S(M, N) {
					const A = t.URI.joinPath(N.userHome, ".vscode");
					try {
						if ((await M?.resolve(A)).children?.length) return !0;
					} catch {}
					return !1;
				}
				async function I(M, N, A) {
					const R = t.URI.joinPath(A.userHome, N.dataFolderName, "extensions");
					try {
						const O = await M?.resolve(R);
						if (O.children)
							return (
								console.log("length of children", O.children.length),
								O.children.length
							);
					} catch {}
					return 0;
				}
				function T(M) {
					const N = M.get(`vscode/${u.$Ip}`, r.StorageScope.APPLICATION);
					if (!N) return [];
					try {
						const A = JSON.parse(N);
						if (!Array.isArray(A)) return [];
						const R = [];
						for (const O of A)
							"id" in O && typeof O.id == "string" && R.push(O.id);
						return R;
					} catch (A) {
						return console.error(A), [];
					}
				}
				async function P(M, N, A) {
					const R = t.URI.joinPath(N.userHome, ".vscode", "extensions"),
						O = T(A);
					let B = [];
					try {
						const z = (await M.resolve(R)).children
							?.map((F) => {
								const x = F.name.toLowerCase(),
									H = v.find((q) => x.includes(q.id.toLowerCase()));
								return H && !O.includes(x) ? H.name : null;
							})
							.filter((F) => F !== null);
						z && (B = v.filter((F) => z.includes(F.name)).map((F) => F.name));
					} catch (U) {
						return (
							console.error(
								"Error checking for VSCode and Copilot extensions:",
								U,
							),
							[]
						);
					}
					return B;
				}
				async function k(M, N, A, R, O, B, U, z) {
					try {
						N.setNonPersistentStorage(
							"shouldBlockNewPanelsFromPoppingUpIfTimeIsLessThan",
							Date.now() + 10 * 60 * 1e3,
						);
						try {
							const Y = T(R);
							let ie = [];
							try {
								ie = (0, c.$do)(R.get(u.$Ip, r.StorageScope.APPLICATION, "[]"));
							} catch (_) {
								console.error(_);
							}
							const ne = new Set();
							Y.forEach((_) => ne.add(_)),
								ie.forEach((_) => "id" in _ && ne.add(_.id));
							const ee = Array.from(ne).map((_) => ({ id: _ }));
							R.store(
								u.$Ip,
								JSON.stringify(ee),
								r.StorageScope.APPLICATION,
								r.StorageTarget.USER,
							);
						} catch (Y) {
							console.error(Y);
						}
						const F = t.URI.joinPath(A.userHome, ".vscode", "extensions"),
							x = t.URI.file(A.extensionsPath);
						let H = [];
						try {
							const Y = await M.readFile(t.URI.joinPath(F, "extensions.json"));
							Y && (H = (0, c.$do)(Y.value.toString()));
						} catch (Y) {
							console.log(Y);
						}
						let q = [];
						try {
							const Y = await M?.readFile(t.URI.joinPath(x, "extensions.json"));
							Y && (q = (0, c.$do)(Y.value.toString()));
						} catch (Y) {
							console.log(Y);
						}
						const V = new Set();
						for (const Y of q) {
							const ie = Y.identifier.id;
							V.add(ie);
						}
						const G = (Y, ie) => {
								try {
									return (0, E.$nh)(ie ?? F, Y.relativeLocation);
								} catch (ne) {
									console.log(ne);
								}
								try {
									return t.URI.revive(Y.location);
								} catch (ne) {
									console.log(ne);
								}
							},
							K = async (Y) => {
								if (!Y) return !1;
								const ie = G(Y, x);
								try {
									if (ie && (await M.exists(ie))) return !0;
								} catch (ne) {
									console.log(ne);
								}
								return !1;
							},
							J = await H.reduce(
								async (Y, ie) =>
									!V.has(ie.identifier.id) ||
									!(await K(
										q.filter((ee) => ee.identifier.id === ie.identifier.id)[0],
									))
										? (await Y).concat(ie)
										: Y,
								Promise.resolve([]),
							),
							W = [],
							X = [];
						try {
							for (const Y of J)
								try {
									const ie = G(Y);
									if (ie === void 0) {
										console.log(
											"skipping extension because cannot find it on disk: ",
											Y.identifier.id,
										);
										continue;
									}
									const ne = async () => {
										const ee = Y.identifier.id;
										if (h.$Mq.some((te) => te === ee)) return;
										let _ = !1;
										if (h.$Iq.some((te) => ee === te))
											try {
												const te = await B.getExtensions(
													[{ id: ee }],
													g.CancellationToken.None,
												);
												if (te && te.length > 0) {
													const Q = te[0];
													await O.installFromGallery(Q), (_ = !0);
												}
											} catch (te) {
												console.log(te);
											}
										try {
											const te = (0, E.$nh)(ie, "package.json"),
												Q = await M.readFile(te);
											if (Q) {
												const se = (0, c.$do)(Q.value.toString()).engines
													?.vscode;
												if (se && !(0, p.$yq)(se, U.vscodeVersion, U.date)) {
													const re = await B.getExtensions(
														[{ id: ee }],
														g.CancellationToken.None,
													);
													if (re && re.length > 0) {
														const le = re[0];
														await O.installFromGallery(le), (_ = !0);
													}
												}
											}
										} catch (te) {
											console.log(te);
										}
										if (
											!h.$Nq.some((te) => te === ee) &&
											!(
												z !== !0 &&
												v.some((te) =>
													ee.toLowerCase().includes(te.id.toLowerCase()),
												)
											) &&
											!_
										) {
											const te = (0, E.$nh)(x, Y.relativeLocation);
											await M.copy(ie, te, !0), (Y.location = te), X.push(Y);
										}
									};
									W.push(ne());
								} catch (ie) {
									console.error(ie);
								}
							await Promise.all(W);
						} catch (Y) {
							console.error(Y);
						}
						try {
							const Y = await M?.readFile(t.URI.joinPath(x, "extensions.json"));
							Y && (q = (0, c.$do)(Y.value.toString()));
						} catch (Y) {
							console.log(Y);
						}
						await M.writeFile(
							t.URI.joinPath(x, "extensions.json"),
							d.$Te.wrap(
								new TextEncoder().encode(JSON.stringify([...q, ...X])),
							),
						);
					} catch (F) {
						console.error(F);
					} finally {
						N.setNonPersistentStorage(
							"shouldBlockNewPanelsFromPoppingUpIfTimeIsLessThan",
							Date.now() + 20 * 1e3,
						);
					}
				}
				class L extends i.$3X {
					static {
						this.LABEL = "Import VS Code Extensions and Settings";
					}
					constructor() {
						super({
							id: m.$9W,
							title: { value: L.LABEL, original: L.LABEL },
							f1: !0,
						});
					}
					async run(N, A, R, ...O) {
						const B = N.get(w.$ll),
							U = N.get(C.$ucd),
							z = N.get(a.$0zb),
							F = N.get(r.$lq),
							x = N.get(u.$Hp),
							H = N.get(u.$Ep),
							q = N.get(n.$Bk),
							V = N.get(y.$ik),
							G = N.get(f.$0wc),
							K = N.get(b.$P8),
							J = N.get(s.$cRb),
							W = N.get(o.$jfc);
						z.setApplicationUserPersistentStorage("haveNotImportedFromVSC", !1),
							z.setApplicationUserPersistentStorage(
								"cppHasLoadedConfigFromCopilot",
								!1,
							);
						async function X(ie, ne) {
							const ee = ie.appSettingsHome,
								_ = (0, E.$nh)(
									(0, E.$nh)((0, E.$mh)((0, E.$mh)(ee)), "Code"),
									"User",
								),
								te = (0, E.$nh)(_, "workspaceStorage"),
								Q = (0, E.$nh)(ee, "workspaceStorage");
							try {
								const re = await ne.resolve(te, { resolveMetadata: !0 });
								if (re.children)
									for (const le of re.children) {
										const oe = (0, E.$nh)(Q, (0, E.$kh)(le.resource));
										le.isDirectory && (await ne.copy(le.resource, oe, !1));
									}
							} catch (re) {
								console.error(re);
							}
							try {
								const re = (0, E.$nh)(_, "globalStorage"),
									oe = (
										await G.readStorageData({
											...K.currentProfile,
											id: (0, $.$9g)(),
											isDefault: !1,
											settingsResource: (0, E.$nh)(_, "settings.json"),
											keybindingsResource: (0, E.$nh)(_, "keybindings.json"),
											globalStorageHome: re,
											extensionsResource: t.URI.joinPath(
												ie.userHome,
												".vscode",
												"extensions",
											),
											location: _,
										})
									).get("history.recentlyOpenedPathsList");
								if (oe && oe.value) {
									const ae = JSON.parse(oe.value),
										pe = await (0, l.$kRb)(ae, V);
									J.addRecentlyOpened(pe.workspaces);
								}
							} catch (re) {
								console.error(re);
							}
							const Z = (0, E.$nh)(_, "settings.json"),
								se = (0, E.$nh)(_, "keybindings.json");
							if (await ne?.exists(Z)) {
								const re = await ne?.readFile(Z);
								let le = re.value.toString();
								try {
									const ae = (0, c.$do)(re.value.toString()),
										pe = Object.keys(ae).reduce(($e, ye) => {
											if (
												(ye !== "workbench.colorTheme" ||
													(typeof ae[ye] == "string" &&
														ae[ye].trim() !== "Default Dark+" &&
														ae[ye].trim() !== "Visual Studio Dark")) &&
												ye !== "workbench.layoutControl.enabled"
											) {
												if (
													ye === "workbench.activityBar.location" &&
													ae[ye] === "top"
												)
													return $e;
												$e[ye] = ae[ye];
											}
											return $e;
										}, {});
									le = JSON.stringify(pe, null, 4);
								} catch (ae) {
									console.error(ae),
										console.log("^ Could not parse settings json");
								}
								const oe = (0, E.$nh)(ee, "settings.json");
								await ne?.writeFile(
									oe,
									d.$Te.wrap(new TextEncoder().encode(le)),
								);
							}
							if (await ne?.exists(se)) {
								const re = (0, E.$nh)(ee, "keybindings.json");
								await ne?.copy(se, re, !0);
							}
							return !0;
						}
						const Y = [
							X(U, B).catch((ie) => {
								console.error(ie, "Failed to import settings");
							}),
						];
						R !== !0 &&
							Y.push(
								k(B, z, U, F, x, H, q, A).catch((ie) => {
									console.error(ie, "Failed to import extensions");
								}),
							),
							await Promise.all(Y);
						try {
							W.loadCopilotPlusPlusConfigFromGithubCopilot();
						} catch {}
					}
				}
				(e.$eed = L), (0, i.$4X)(L);
				class D extends i.$3X {
					static {
						this.LABEL = "Cpp After Onboarding";
					}
					constructor() {
						super({
							id: m.$0W,
							title: { value: D.LABEL, original: D.LABEL },
							f1: !1,
						});
					}
					async run(N, ...A) {
						N.get(o.$jfc).forceApplyCppConfig();
					}
				}
				(e.$fed = D), (0, i.$4X)(D);
			},
		),
		