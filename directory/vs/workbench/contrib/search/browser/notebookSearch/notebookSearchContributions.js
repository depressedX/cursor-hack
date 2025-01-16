define(de[3597], he([1, 0, 20, 1749, 3596]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$3Nc = E);
			function E() {
				(0, t.$lK)(i.$ANc, w.$2Nc, t.InstantiationType.Delayed);
			}
		}),
		define(
			de[3598],
			he([
				1, 0, 23, 12, 9, 31, 22, 5, 41, 63, 25, 562, 189, 18, 78, 87, 361, 186,
				10, 997, 117,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kWc = e.$jWc = e.$iWc = e.$hWc = e.$gWc = void 0);
				let l = class {
					constructor(T) {
						this.a = T;
					}
					async open(T) {
						if (!T.uri)
							throw new Error("Tried to open file link without a resolved URI");
						const P = T.parsedLink ? T.parsedLink.suffix : (0, b.$zoc)(T.text);
						let k = T.selection;
						k ||
							(k =
								P?.row === void 0
									? void 0
									: {
											startLineNumber: P.row ?? 1,
											startColumn: P.col ?? 1,
											endLineNumber: P.rowEnd,
											endColumn: P.colEnd,
										}),
							await this.a.openEditor({
								resource: T.uri,
								options: { pinned: !0, selection: k, revealIfOpened: !0 },
							});
					}
				};
				(e.$gWc = l), (e.$gWc = l = Ne([j(0, c.$IY)], l));
				let y = class {
					constructor(T) {
						this.a = T;
					}
					async open(T) {
						if (!T.uri)
							throw new Error(
								"Tried to open folder in workspace link without a resolved URI",
							);
						await this.a.executeCommand("revealInExplorer", T.uri);
					}
				};
				(e.$hWc = y), (e.$hWc = y = Ne([j(0, E.$ek)], y));
				let $ = class {
					constructor(T) {
						this.a = T;
					}
					async open(T) {
						if (!T.uri)
							throw new Error(
								"Tried to open folder in workspace link without a resolved URI",
							);
						this.a.openWindow([{ folderUri: T.uri }], { forceNewWindow: !0 });
					}
				};
				(e.$iWc = $), (e.$iWc = $ = Ne([j(0, g.$asb)], $));
				let v = class {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U) {
						(this.b = T),
							(this.c = P),
							(this.d = k),
							(this.f = L),
							(this.g = D),
							(this.h = M),
							(this.i = N),
							(this.j = A),
							(this.k = R),
							(this.l = O),
							(this.m = B),
							(this.n = U),
							(this.a = this.i.createInstance(p.$M8));
					}
					async open(T) {
						const P = (0, a.$cWc)(this.g()),
							k = P.sep;
						let L = T.text.replace(/^file:\/\/\/?/, "");
						if (
							((L = P.normalize(L).replace(/^(\.+[\\/])+/, "")), T.contextLine)
						) {
							const N = (0, b.$Boc)(T.contextLine, this.g()).find(
								(A) => A.suffix && T.text.startsWith(A.path.text),
							);
							N &&
								N.suffix?.row !== void 0 &&
								((L = N.path.text),
								(L += `:${N.suffix.row}`),
								N.suffix?.col !== void 0 && (L += `:${N.suffix.col}`));
						}
						(L = L.replace(/:[^\\/\d][^\d]*$/, "")),
							(L = L.replace(/\.$/, "")),
							this.m.getWorkspace().folders.forEach((M) => {
								if (L.substring(0, M.name.length + 1) === M.name + k) {
									L = L.substring(M.name.length + 1);
									return;
								}
							});
						let D = L;
						if (
							(this.b.has(h.TerminalCapability.CommandDetection) &&
								(D =
									(0, a.$bWc)(
										this.b,
										T.bufferRange.start.y,
										L,
										P,
										this.j,
									)?.[0] || L),
							!(await this.p(D, T)) && !(L !== D && (await this.p(L, T))))
						)
							return this.k.quickAccess.show(L);
					}
					async o(T) {
						const P = this.g(),
							k = (0, a.$cWc)(P),
							L = k.isAbsolute(T);
						let D = L ? T : void 0;
						!L && this.c.length > 0 && (D = k.join(this.c, T));
						let M;
						if (D) {
							let N = D;
							P === i.OperatingSystem.Windows &&
								((N = D.replace(/\\/g, "/")),
								N.match(/[a-z]:/i) && (N = `/${N}`));
							let A;
							this.n.remoteAuthority
								? (A = w.URI.from({
										scheme: t.Schemas.vscodeRemote,
										authority: this.n.remoteAuthority,
										path: N,
									}))
								: (A = w.URI.file(N));
							try {
								const R = await this.h.stat(A);
								M = { uri: A, isDirectory: R.isDirectory };
							} catch {}
						}
						if (!M) {
							const N = await this.l.fileSearch(
								this.a.file(this.m.getWorkspace().folders, {
									filePattern: T,
									maxResults: 2,
								}),
							);
							if (N.results.length > 0) {
								if (N.results.length === 1) M = { uri: N.results[0].resource };
								else if (!L) {
									const R = (
										await this.l.fileSearch(
											this.a.file(this.m.getWorkspace().folders, {
												filePattern: `**/${T}`,
											}),
										)
									).results.filter((O) => O.resource.toString().endsWith(T));
									R.length === 1 && (M = { uri: R[0].resource });
								}
							}
						}
						return M;
					}
					async p(T, P) {
						const k = T.replace(/:\d+(:\d+)?$/, "");
						try {
							const L = await this.o(k);
							if (L) {
								const { uri: D, isDirectory: M } = L,
									N = {
										text: L.uri.path + (T.match(/:\d+(:\d+)?$/)?.[0] || ""),
										uri: D,
										bufferRange: P.bufferRange,
										type: P.type,
									};
								if (D) return await (M ? this.f.open(N) : this.d.open(N)), !0;
							}
						} catch {
							return !1;
						}
						return !1;
					}
				};
				(e.$jWc = v),
					(e.$jWc = v =
						Ne(
							[
								j(5, C.$ll),
								j(6, d.$Li),
								j(7, s.$YJ),
								j(8, r.$DJ),
								j(9, o.$p7),
								j(10, u.$Vi),
								j(11, n.$r8),
							],
							v,
						));
				let S = class {
					constructor(T, P, k) {
						(this.a = T), (this.b = P), (this.c = k);
					}
					async open(T) {
						if (!T.uri)
							throw new Error("Tried to open a url without a resolved URI");
						this.b.open(T.text, {
							allowTunneling: this.a && this.c.getValue("remote.forwardOnOpen"),
							allowContributedOpeners: !0,
							openExternal: !0,
						});
					}
				};
				(e.$kWc = S), (e.$kWc = S = Ne([j(1, m.$7rb), j(2, f.$gj)], S));
			},
		),
		define(
			de[3599],
			he([
				1, 0, 7, 94, 3, 12, 9, 4, 10, 5, 374, 513, 3156, 3158, 3598, 3161, 3163,
				3171, 107, 3146, 145, 562, 15, 117, 3162, 40,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qWc = void 0),
					(d = mt(d));
				let I = class extends w.$Zc {
					constructor(P, k, L, D, M, N, A, R, O, B) {
						super(),
							(this.m = P),
							(this.n = k),
							(this.q = D),
							(this.s = M),
							(this.t = N),
							(this.u = A),
							(this.w = R),
							(this.z = O),
							(this.B = B),
							(this.b = new Map()),
							(this.c = []),
							(this.h = []),
							(this.j = new Map());
						let U = !0;
						switch (this.s.getValue(s.$ieb).enableFileLinks) {
							case "off":
							case !1:
								U = !1;
								break;
							case "notRemote":
								U = !this.n.remoteAuthority;
								break;
						}
						U &&
							(this.C(
								v.$pWc.id,
								this.u.createInstance(v.$pWc, this.m, this.n, this.q),
							),
							this.C(
								g.$lWc.id,
								this.u.createInstance(g.$lWc, this.m, L, this.n, this.q),
							)),
							this.C(
								p.$mWc.id,
								this.u.createInstance(p.$mWc, this.m, this.n, this.q),
							),
							this.C(
								o.$nWc.id,
								this.add(this.u.createInstance(o.$nWc, this.m)),
							);
						const F = this.u.createInstance(n.$gWc),
							x = this.u.createInstance(n.$hWc);
						this.j.set(a.TerminalBuiltinLinkType.LocalFile, F),
							this.j.set(a.TerminalBuiltinLinkType.LocalFolderInWorkspace, x),
							this.j.set(
								a.TerminalBuiltinLinkType.LocalFolderOutsideWorkspace,
								this.u.createInstance(n.$iWc),
							),
							this.j.set(
								a.TerminalBuiltinLinkType.Search,
								this.u.createInstance(
									n.$jWc,
									L,
									this.n.initialCwd,
									F,
									x,
									() => this.n.os || E.OS,
								),
							),
							this.j.set(
								a.TerminalBuiltinLinkType.Url,
								this.u.createInstance(n.$kWc, !!this.n.remoteAuthority),
							),
							this.L();
						let H, q;
						this.add(
							(0, w.$Yc)(() => {
								this.J(), (0, w.$Vc)(this.h), H?.dispose(), q?.dispose();
							}),
						),
							(this.m.options.linkHandler = {
								allowNonHttpProtocols: !0,
								activate: (V, G) => {
									if (!this.M(V)) return;
									const K = G.indexOf(":");
									if (K === -1)
										throw new Error(`Could not find scheme in link "${G}"`);
									const J = G.substring(0, K);
									this.t.config.allowedLinkSchemes.indexOf(J) === -1 &&
										this.w.prompt(
											S.Severity.Warning,
											d.localize(10537, null, J),
											[
												{
													label: d.localize(10538, null, J),
													run: () => {
														const W = [...this.t.config.allowedLinkSchemes, J];
														this.s.updateValue(
															"terminal.integrated.allowedLinkSchemes",
															W,
														);
													},
												},
											],
										),
										this.j
											.get(a.TerminalBuiltinLinkType.Url)
											?.open({
												type: a.TerminalBuiltinLinkType.Url,
												text: G,
												bufferRange: null,
												uri: C.URI.parse(G),
											});
								},
								hover: (V, G, K) => {
									H?.dispose(),
										(H = void 0),
										q?.dispose(),
										(q = new y.$Yh(() => {
											const J = this.m._core,
												W = {
													width: J._renderService.dimensions.css.cell.width,
													height: J._renderService.dimensions.css.cell.height,
												},
												X = { width: this.m.cols, height: this.m.rows };
											(H = this.I(
												{
													viewportRange: (0, l.$$Vc)(
														K,
														this.m.buffer.active.viewportY,
													),
													cellDimensions: W,
													terminalDimensions: X,
												},
												this.N(G, G),
												void 0,
												(Y) => this.m.options.linkHandler?.activate(V, Y, K),
											)),
												q?.dispose(),
												(q = void 0);
										}, this.s.getValue("workbench.hover.delay"))),
										q.schedule();
								},
							});
					}
					C(P, k, L = !1) {
						const D = this.add(this.u.createInstance(c.$fWc, k));
						return (
							this.add(
								D.onDidActivateLink((M) => {
									M.event?.preventDefault(),
										!(
											M.event &&
											!(M.event instanceof f.$oIb) &&
											!this.M(M.event)
										) &&
											(M.link.activate
												? M.link.activate(M.link.text)
												: this.D(M.link));
								}),
							),
							this.add(
								D.onDidShowHover((M) =>
									this.H(
										M.link,
										M.viewportRange,
										M.modifierDownCallback,
										M.modifierUpCallback,
									),
								),
							),
							L || this.b.set(P, D),
							D
						);
					}
					async D(P) {
						this.z.debug("Opening link", P);
						const k = this.j.get(P.type);
						if (!k)
							throw new Error(`No matching opener for link type "${P.type}"`);
						await k.open(P);
					}
					async openRecentLink(P) {
						let k,
							L = this.m.buffer.active.length;
						for (
							;
							(!k || k.length === 0) && L >= this.m.buffer.active.viewportY;
						)
							(k = await this.G(L, P)), L--;
						if (!k || k.length < 1) return;
						const D = new f.$oIb(t.$$gb.CLICK);
						return k[0].activate(D, k[0].text), k[0];
					}
					async getLinks() {
						const P = [];
						for (
							let A = this.m.buffer.active.viewportY + this.m.rows - 1;
							A >= this.m.buffer.active.viewportY;
							A--
						)
							P.push(this.F(A));
						const k = await Promise.all(P),
							L = {
								wordLinks: [],
								webLinks: [],
								fileLinks: [],
								folderLinks: [],
							};
						for (const A of k)
							if (A) {
								const {
									wordLinks: R,
									webLinks: O,
									fileLinks: B,
									folderLinks: U,
								} = A;
								R?.length && L.wordLinks.push(...R.reverse()),
									O?.length && L.webLinks.push(...O.reverse()),
									B?.length && L.fileLinks.push(...B.reverse()),
									U?.length && L.folderLinks.push(...U.reverse());
							}
						const D = [];
						for (let A = this.m.buffer.active.viewportY - 1; A >= 0; A--)
							D.push(this.F(A));
						const M = [];
						for (
							let A = this.m.buffer.active.length - 1;
							A >= this.m.buffer.active.viewportY + this.m.rows;
							A--
						)
							M.push(this.F(A));
						const N = Promise.all(D).then(async (A) => {
							const R = await Promise.all(M),
								O = {
									wordLinks: [...L.wordLinks],
									webLinks: [...L.webLinks],
									fileLinks: [...L.fileLinks],
									folderLinks: [...L.folderLinks],
								};
							for (const B of [...R, ...A])
								if (B) {
									const {
										wordLinks: U,
										webLinks: z,
										fileLinks: F,
										folderLinks: x,
									} = B;
									U?.length && O.wordLinks.push(...U.reverse()),
										z?.length && O.webLinks.push(...z.reverse()),
										F?.length && O.fileLinks.push(...F.reverse()),
										x?.length && O.folderLinks.push(...x.reverse());
								}
							return O;
						});
						return { viewport: L, all: N };
					}
					async F(P) {
						const k = await this.G(P, "word"),
							L = await this.G(P, "url"),
							D = await this.G(P, "localFile"),
							M = await this.G(P, "localFolder"),
							N = new Set();
						let A;
						if (k) {
							A = [];
							for (const R of k)
								!N.has(R.text) &&
									R.text.length > 1 &&
									(A.push(R), N.add(R.text));
						}
						return { wordLinks: A, webLinks: L, fileLinks: D, folderLinks: M };
					}
					async G(P, k) {
						switch (k) {
							case "word":
								return await new Promise((L) =>
									this.b.get(o.$nWc.id)?.provideLinks(P, L),
								);
							case "url":
								return await new Promise((L) =>
									this.b.get(p.$mWc.id)?.provideLinks(P, L),
								);
							case "localFile":
								return (
									await new Promise((D) =>
										this.b.get(g.$lWc.id)?.provideLinks(P, D),
									)
								)?.filter(
									(D) => D.type === a.TerminalBuiltinLinkType.LocalFile,
								);
							case "localFolder":
								return (
									await new Promise((D) =>
										this.b.get(g.$lWc.id)?.provideLinks(P, D),
									)
								)?.filter(
									(D) =>
										D.type === a.TerminalBuiltinLinkType.LocalFolderInWorkspace,
								);
						}
					}
					H(P, k, L, D) {
						if (!this.a) return;
						const M = this.m._core,
							N = {
								width: M._renderService.dimensions.css.cell.width,
								height: M._renderService.dimensions.css.cell.height,
							},
							A = { width: this.m.cols, height: this.m.rows };
						this.I(
							{
								viewportRange: k,
								cellDimensions: N,
								terminalDimensions: A,
								modifierDownCallback: L,
								modifierUpCallback: D,
							},
							this.N(P.text, P.label),
							P.actions,
							(R) => P.activate(void 0, R),
							P,
						);
					}
					I(P, k, L, D, M) {
						if (this.a) {
							const N = this.u.createInstance(b.$oWc, P, k, L, D),
								A = this.a.attachWidget(N);
							return A && M?.onInvalidated(() => A.dispose()), A;
						}
					}
					setWidgetManager(P) {
						this.a = P;
					}
					J() {
						(0, w.$Vc)(this.c), (this.c.length = 0);
					}
					L() {
						const P = async (D) => this.externalProvideLinksCb?.(D),
							k = `extension-${this.h.length}`,
							L = this.C(k, new h.$dWc(k, this.m, P), !0);
						this.c.push(this.m.registerLinkProvider(L));
						for (const D of this.b.values())
							this.c.push(this.m.registerLinkProvider(D));
					}
					M(P) {
						return this.s.getValue("editor").multiCursorModifier === "ctrlCmd"
							? !!P.altKey
							: E.$m
								? P.metaKey
								: P.ctrlKey;
					}
					N(P, k) {
						const L = this.s.getValue("editor");
						let D = "";
						L.multiCursorModifier === "ctrlCmd"
							? E.$m
								? (D = d.localize(10539, null))
								: (D = d.localize(10540, null))
							: E.$m
								? (D = d.localize(10541, null))
								: (D = d.localize(10542, null));
						let M = d.localize(10543, null);
						try {
							this.B.canTunnel(C.URI.parse(P)) && (M = d.localize(10544, null));
						} catch {}
						const N = new i.$cl("", !0);
						return (
							k && ((k = N.appendText(k).value), (N.value = "")),
							P && ((P = N.appendText(P).value), (N.value = "")),
							(k = k || M),
							(P = P || k),
							/(\s|&nbsp;)/.test(P) && (P = d.localize(10545, null)),
							N.appendLink(P, k).appendMarkdown(` (${D})`)
						);
					}
				};
				(e.$qWc = I),
					(e.$qWc = I =
						Ne(
							[
								j(4, m.$gj),
								j(5, f.$jIb),
								j(6, r.$Li),
								j(7, S.$4N),
								j(8, $.$YJ),
								j(9, u.$cO),
							],
							I,
						));
			},
		),
		define(
			de[1315],
			he([1, 0, 19, 9, 33, 29, 5, 361, 186, 25, 15]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6oc = h),
					(e.$7oc = g),
					(t = mt(t)),
					(E = mt(E));
				const a = 7e3;
				function h(p, o) {
					const f = o.activationEvents;
					if (!f) return Promise.resolve(void 0);
					const b = [],
						s = [];
					for (const I of f)
						if (/^workspaceContains:/.test(I)) {
							const T = I.substr(18);
							T.indexOf("*") >= 0 || T.indexOf("?") >= 0 || p.forceUsingSearch
								? s.push(T)
								: b.push(T);
						}
					if (b.length === 0 && s.length === 0) return Promise.resolve(void 0);
					const { promise: l, resolve: y } = (0, u.$Fh)(),
						$ = (I) => y({ activationEvent: I }),
						v = Promise.all(b.map((I) => c(p, I, $))).then(() => {}),
						S = n(p, o.identifier, s, $);
					return (
						Promise.all([v, S]).then(() => {
							y(void 0);
						}),
						l
					);
				}
				async function c(p, o, f) {
					for (const b of p.folders)
						if (await p.exists(t.$nh(i.URI.revive(b), o))) {
							f(`workspaceContains:${o}`);
							return;
						}
				}
				async function n(p, o, f, b) {
					if (f.length === 0) return Promise.resolve(void 0);
					const s = new w.$Ce(),
						l = p.checkExists(p.folders, f, s.token),
						y = setTimeout(async () => {
							s.cancel(),
								p.logService.info(
									`Not activating extension '${o.value}': Timed out while searching for 'workspaceContains' pattern ${f.join(",")}`,
								);
						}, a);
					let $ = !1;
					try {
						$ = await l;
					} catch (v) {
						E.$8(v) || E.$4(v);
					}
					s.dispose(),
						clearTimeout(y),
						$ && b(`workspaceContains:${f.join(",")}`);
				}
				function g(p, o, f, b) {
					const s = p.get(C.$Li),
						l = p.get(m.$p7),
						$ = s.createInstance(d.$M8).file(
							o.map((v) => (0, r.$8i)(i.URI.revive(v))),
							{ _reason: "checkExists", includePattern: f, exists: !0 },
						);
					return l.fileSearch($, b).then(
						(v) => !!v.limitHit,
						(v) => (E.$8(v) ? !1 : Promise.reject(v)),
					);
				}
			},
		),
		