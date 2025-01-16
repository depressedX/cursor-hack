define(de[3740], he([1, 0, 112, 3, 87, 713]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$6Qc = void 0);
			let C = class {
				constructor(m, r, u) {
					this.a = [];
					const a = () => {
						m.state === t.State.Stopped && !r.hasFocus
							? u.updateProperties({ prefix: "\u{1F534}" })
							: u.updateProperties({ prefix: "" });
					};
					this.a.push(m.onDidChangeState(a)),
						this.a.push(r.onDidChangeFocus(a));
				}
				dispose() {
					(0, i.$Vc)(this.a);
				}
			};
			(e.$6Qc = C),
				(e.$6Qc = C = Ne([j(0, t.$75), j(1, w.$asb), j(2, E.$Wqc)], C));
		}),
		define(
			de[3741],
			he([
				1, 0, 4, 19, 3, 6, 258, 260, 8, 166, 18, 10, 44, 68, 103, 713, 66, 614,
				77, 326, 457,
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
					(e.$KPc = e.$JPc = void 0);
				const l = {
					ActiveRepositoryName: new m.$5j("scmActiveRepositoryName", ""),
					ActiveRepositoryBranchName: new m.$5j(
						"scmActiveRepositoryBranchName",
						"",
					),
				};
				let y = class extends w.$1c {
					constructor(S, I, T, P, k, L, D, M) {
						super(),
							(this.s = S),
							(this.t = I),
							(this.u = T),
							(this.w = P),
							(this.y = k),
							(this.z = L),
							(this.C = D),
							(this.F = M),
							(this.a = (0, b.$Mwb)("scm.countBadge", "all", this.t)),
							(this.b = (0, f.observableFromEvent)(
								this,
								E.Event.any(
									this.y.onDidAddRepository,
									this.y.onDidRemoveRepository,
								),
								() => this.y.repositories,
							)),
							(this.c = (0, s.$zd)(
								{ owner: this, equalsFn: () => !1 },
								this.z.onDidFocusRepository,
								() => this.z.focusedRepository,
							)),
							(this.f = (0, s.$zd)(
								{ owner: this, equalsFn: () => !1 },
								this.w.onDidActiveEditorChange,
								() => this.w.activeEditor,
							)),
							(this.g = (0, s.$Jd)(this, (N, A) => {
								const R = h.$A1.getOriginalUri(this.f.read(N));
								if (!R) return A;
								const O = this.y.getRepository(R);
								return O ? Object.create(O) : A;
							})),
							(this.h = (0, s.$Od)(this, [this.g, this.c])),
							(this.j = (0, f.derived)(this, (N) => {
								switch (this.a.read(N)) {
									case "all": {
										const A = this.b.read(N);
										return [
											...n.Iterable.map(A, (R) => ({
												provider: R.provider,
												resourceCount: this.G(R),
											})),
										];
									}
									case "focused": {
										const A = this.h.read(N);
										return A
											? [{ provider: A.provider, resourceCount: this.G(A) }]
											: [];
									}
									case "off":
										return [];
									default:
										throw new Error("Invalid countBadge setting");
								}
							})),
							(this.m = (0, f.derived)(this, (N) => {
								let A = 0;
								for (const R of this.j.read(N)) {
									const O = R.provider.count?.read(N),
										B = R.resourceCount.read(N);
									A = A + (O ?? B);
								}
								return A;
							})),
							(this.n = l.ActiveRepositoryName.bindTo(this.u)),
							(this.q = l.ActiveRepositoryBranchName.bindTo(this.u)),
							this.F.registerVariables([
								{
									name: "activeRepositoryName",
									contextKey: l.ActiveRepositoryName.key,
								},
								{
									name: "activeRepositoryBranchName",
									contextKey: l.ActiveRepositoryBranchName.key,
								},
							]),
							this.D(
								(0, f.autorunWithStore)((N, A) => {
									this.H(this.m.read(N), A);
								}),
							),
							this.D(
								(0, f.autorunWithStore)((N, A) => {
									const R = this.h.read(N),
										O = R?.provider.statusBarCommands.read(N);
									this.I(R, O ?? [], A);
								}),
							),
							this.D(
								(0, f.autorun)((N) => {
									const A = this.h.read(N),
										O = A?.provider.historyProvider
											.read(N)
											?.currentHistoryItemGroupName.read(N);
									this.J(A?.provider.name, O);
								}),
							);
					}
					G(S) {
						return (0, f.observableFromEvent)(
							this,
							S.provider.onDidChangeResources,
							() => (0, o.$IPc)(S.provider),
						);
					}
					H(S, I) {
						if (S === 0) return;
						const T = new d.$8qc(S, (P) => (0, t.localize)(8963, null, P));
						I.add(this.s.showViewActivity(C.$_6, { badge: T }));
					}
					I(S, I, T) {
						if (!S) return;
						const P = S.provider.rootUri
							? `${(0, i.$kh)(S.provider.rootUri)} (${S.provider.label})`
							: S.provider.label;
						for (let k = 0; k < I.length; k++) {
							const L = I[k],
								D = `${P}${L.tooltip ? ` - ${L.tooltip}` : ""}`;
							let M = L.arguments?.[0];
							M && typeof M == "string"
								? ((M = M.substring(0, M.lastIndexOf("/")).replace(
										/^git\./,
										"",
									)),
									M.length > 1 && (M = M[0].toLocaleUpperCase() + M.slice(1)))
								: (M = "");
							const N = {
								name: (0, t.localize)(8964, null) + (M ? ` ${M}` : ""),
								text: L.title,
								ariaLabel: D,
								tooltip: D,
								command: L.id ? L : void 0,
							};
							T.add(
								k === 0
									? this.C.addEntry(
											N,
											`status.scm.${k}`,
											r.StatusbarAlignment.LEFT,
											1e4,
										)
									: this.C.addEntry(
											N,
											`status.scm.${k}`,
											r.StatusbarAlignment.LEFT,
											{
												id: `status.scm.${k - 1}`,
												alignment: r.StatusbarAlignment.RIGHT,
												compact: !0,
											},
										),
							);
						}
					}
					J(S, I) {
						this.n.set(S ?? ""), this.q.set(I ?? "");
					}
				};
				(e.$JPc = y),
					(e.$JPc = y =
						Ne(
							[
								j(0, d.$7qc),
								j(1, a.$gj),
								j(2, m.$6j),
								j(3, u.$IY),
								j(4, C.$c7),
								j(5, C.$d7),
								j(6, r.$d6b),
								j(7, g.$Wqc),
							],
							y,
						));
				let $ = class extends w.$1c {
					constructor(S, I, T) {
						super(),
							(this.c = I),
							(this.f = T),
							(this.a = (0, f.observableFromEvent)(
								this,
								E.Event.any(
									this.c.onDidAddRepository,
									this.c.onDidRemoveRepository,
								),
								() => this.c.repositories,
							)),
							(this.b = new E.$re());
						const P = new m.$5j(
								"scmActiveResourceHasChanges",
								!1,
								(0, t.localize)(8965, null),
							),
							k = new m.$5j(
								"scmActiveResourceRepository",
								void 0,
								(0, t.localize)(8966, null),
							);
						this.B.add(
							(0, f.autorunWithStore)((M, N) => {
								for (const A of this.a.read(M))
									N.add(
										E.Event.runAndSubscribe(
											A.provider.onDidChangeResources,
											() => {
												this.b.fire();
											},
										),
									);
							}),
						);
						const L = {
								contextKey: P,
								getGroupContextKeyValue: (M) => this.g(M.activeEditor),
								onDidChange: this.b.event,
							},
							D = {
								contextKey: k,
								getGroupContextKeyValue: (M) => this.h(M.activeEditor),
								onDidChange: this.b.event,
							};
						this.B.add(S.registerContextKeyProvider(L)),
							this.B.add(S.registerContextKeyProvider(D));
					}
					g(S) {
						const I = h.$A1.getOriginalUri(S);
						if (!I) return !1;
						const T = this.c.getRepository(I);
						for (const P of T?.provider.groups ?? [])
							if (
								P.resources.some((k) => this.f.extUri.isEqual(I, k.sourceUri))
							)
								return !0;
						return !1;
					}
					h(S) {
						const I = h.$A1.getOriginalUri(S);
						return I ? this.c.getRepository(I)?.id : void 0;
					}
					dispose() {
						this.b.dispose(), super.dispose();
					}
				};
				(e.$KPc = $),
					(e.$KPc = $ = Ne([j(0, p.$EY), j(1, C.$c7), j(2, c.$Vl)], $));
			},
		),
		define(
			de[3742],
			he([1, 0, 6, 3, 23, 171, 74, 763, 753, 10, 22, 20, 5, 35]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NAc = void 0);
				const n = ["typescript"];
				e.$NAc = (0, h.$Mi)("treeSitterTokenizationFeature");
				let g = class extends i.$1c {
					constructor(f, b, s) {
						super(),
							(this.b = f),
							(this.c = b),
							(this.f = s),
							(this.a = new i.$0c()),
							this.h(),
							this.D(
								this.b.onDidChangeConfiguration((l) => {
									l.affectsConfiguration(d.$mV) && this.h();
								}),
							);
					}
					g() {
						return this.b.getValue(d.$mV) || [];
					}
					h() {
						const f = this.g();
						for (const b of f)
							if (n.includes(b) && !this.a.has(b)) {
								const s = new C.$kM(() => this.m(b)),
									l = new i.$Zc();
								l.add(s),
									l.add(C.$mM.registerFactory(b, s)),
									this.a.set(b, l),
									C.$mM.getOrCreate(b);
							}
					}
					async j(f) {
						const b = `vs/editor/common/languages/highlights/${f}.scm`;
						return (await this.f.readFile(w.$7g.asFileUri(b))).value.toString();
					}
					async m(f) {
						const b = await this.j(f);
						return this.c.createInstance(p, b, f);
					}
				};
				g = Ne([j(0, r.$gj), j(1, h.$Li), j(2, u.$ll)], g);
				let p = class extends i.$1c {
					constructor(f, b, s, l) {
						super(),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							(this.m = l),
							(this.b = new t.$re()),
							(this.onDidChangeTokens = this.b.event),
							this.D(
								t.Event.runAndSubscribe(this.m.onDidColorThemeChange, () =>
									this.r(),
								),
							);
					}
					n(f) {
						return this.j.getParseResult(f);
					}
					q() {
						if (!this.a) {
							const f = this.j.getOrInitLanguage(this.h);
							if (!f) {
								this.f ||
									(this.f = this.D(
										t.Event.onceIf(
											this.j.onDidAddLanguage,
											(b) => b.id === this.h,
										)((b) => {
											this.a = b.language.query(this.g);
										}),
									));
								return;
							}
							this.a = f.query(this.g);
						}
						return this.a;
					}
					r() {
						this.c = this.m.getColorTheme();
					}
					captureAtPosition(f, b, s) {
						return this.s(f, new m.$xCb(b, b), s);
					}
					s(f, b, s) {
						const l = this.n(s),
							y = this.q();
						return !l?.f || !y
							? []
							: y.captures(l.f.rootNode, {
									startPosition: { row: f - 1, column: b.startColumn - 1 },
									endPosition: { row: f - 1, column: b.endColumnExclusive },
								});
					}
					tokenizeEncoded(f, b) {
						const s = b.getLineMaxColumn(f),
							l = this.s(f, new m.$xCb(1, s), b);
						if (l.length === 0) return;
						let y = new Uint32Array(l.length * 2),
							$ = 0;
						const v = b.getOffsetAt({ lineNumber: f, column: 1 });
						for (let S = 0; S < l.length; S++) {
							const I = l[S],
								T = this.t(I.name),
								P = I.node.endIndex < v + s ? I.node.endIndex : v + s,
								k = I.node.startIndex < v ? v : I.node.startIndex,
								L = P - v;
							let D;
							const M = P - k;
							S > 0 ? (D = y[($ - 1) * 2]) : (D = k - v - 1);
							const N = L - M;
							if (D < N) {
								(y[$ * 2] = N), (y[$ * 2 + 1] = 0), $++;
								const A = new Uint32Array(y.length + 2);
								A.set(y), (y = A);
							}
							(y[$ * 2] = L), (y[$ * 2 + 1] = T), $++;
						}
						if (l[l.length - 1].node.endPosition.column + 1 < s) {
							const S = new Uint32Array(y.length + 2);
							S.set(y), (y = S), (y[$ * 2] = s), (y[$ * 2 + 1] = 0);
						}
						return y;
					}
					t(f) {
						const b = this.c.resolveScopes([[f]]);
						if (!b) return 0;
						let s = 0;
						if (typeof b.italic < "u") {
							const l = b.italic ? E.FontStyle.Italic : 0;
							s |= l | E.MetadataConsts.ITALIC_MASK;
						}
						if (typeof b.bold < "u") {
							const l = b.bold ? E.FontStyle.Bold : 0;
							s |= l | E.MetadataConsts.BOLD_MASK;
						}
						if (typeof b.underline < "u") {
							const l = b.underline ? E.FontStyle.Underline : 0;
							s |= l | E.MetadataConsts.UNDERLINE_MASK;
						}
						if (typeof b.strikethrough < "u") {
							const l = b.strikethrough ? E.FontStyle.Strikethrough : 0;
							s |= l | E.MetadataConsts.STRIKETHROUGH_MASK;
						}
						if (b.foreground) {
							const y =
								this.c.getTokenColorIndex().get(b?.foreground) <<
								E.MetadataConsts.FOREGROUND_OFFSET;
							s |= y;
						}
						return s;
					}
					dispose() {
						super.dispose(), this.a?.delete(), (this.a = void 0);
					}
				};
				(p = Ne([j(2, d.$nV), j(3, c.$iP)], p)),
					(0, a.$lK)(e.$NAc, g, a.InstantiationType.Eager);
			},
		),
		define(
			de[3743],
			he([1, 0, 20, 55, 2797, 763, 3742]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let d = class {
					static {
						this.ID = "workbench.contrib.treeSitterTokenizationInstantiator";
					}
					constructor(r, u) {}
				};
				(d = Ne([j(0, E.$nV), j(1, C.$NAc)], d)),
					(0, t.$lK)(E.$nV, w.$MAc, t.InstantiationType.Eager),
					(0, i.$s6)(d.ID, d, i.WorkbenchPhase.BlockRestore);
			},
		),
		define(
			de[3744],
			he([1, 0, 34, 78, 20, 374, 3, 1637, 52, 211, 5, 151, 12, 10]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ydd = void 0);
				let n = class extends C.$1c {
					constructor(o, f, b, s, l, y, $, v, S) {
						super(),
							(this.a = o),
							(this.b = f),
							(this.tunnelRemoteHost = b),
							(this.tunnelRemotePort = s),
							(this.tunnelLocalPort = l),
							(this.localAddress = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							(this.privacy = E.TunnelPrivacyId.Private),
							(this.protocol = void 0),
							this.h(),
							this.D(this.g.onDidChangeConnectionData(() => this.h()));
					}
					h() {
						this.b.getAddress().then((o) => {
							this.f.setAddress(this.a, o);
						});
					}
					async dispose() {
						this.c(), super.dispose(), await this.f.destroyTunnel(this.a);
					}
				};
				n = Ne([j(7, d.$p9c), j(8, r.$3l)], n);
				let g = class extends E.$nO {
					constructor(o, f, b, s, l, y, $) {
						super(o, $),
							(this.I = f),
							(this.J = b),
							(this.L = s),
							(this.M = y),
							(this.H = new Set()),
							this.D(
								l.onDidShutdown(() => {
									this.H.forEach((v) => {
										this.J.destroyTunnel(v);
									});
								}),
							);
					}
					isPortPrivileged(o) {
						return (0, E.$lO)(o, this.s, h.OS, this.M.os.release);
					}
					F(o, f, b, s, l, y, $, v) {
						const S = this.C(f, b);
						if (S) return ++S.refcount, S.value;
						if ((0, E.$eO)(o)) return this.G(o, f, b, l, y, $, v);
						{
							this.q.trace(
								`ForwardedPorts: (TunnelService) Creating tunnel without provider ${f}:${b} on local port ${l}.`,
							);
							const I = this.O(o, f, b, s, l, y);
							return (
								this.q.trace(
									"ForwardedPorts: (TunnelService) Tunnel created without provider.",
								),
								this.y(f, b, I),
								I
							);
						}
					}
					async O(o, f, b, s, l, y) {
						const { id: $ } = await this.J.createTunnel();
						this.H.add($);
						const v = this.I.remoteAuthority,
							S = await this.J.startTunnel(v, $, f, b, s, l, y);
						return this.L.createInstance(
							n,
							$,
							o,
							f,
							b,
							S.tunnelLocalPort,
							S.localAddress,
							() => {
								this.H.delete($);
							},
						);
					}
					canTunnel(o) {
						return super.canTunnel(o) && !!this.I.remoteAuthority;
					}
				};
				(e.$Ydd = g),
					(e.$Ydd = g =
						Ne(
							[
								j(0, t.$ik),
								j(1, i.$r8),
								j(2, d.$p9c),
								j(3, u.$Li),
								j(4, m.$n6),
								j(5, a.$ucd),
								j(6, c.$gj),
							],
							g,
						)),
					(0, w.$lK)(E.$cO, g, w.InstantiationType.Delayed);
			},
		),
		define(
			de[628],
			he([1, 0, 44, 478, 85, 73, 18, 22, 19, 78, 165, 170, 42, 3, 125, 399]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$T1b = void 0);
				let o = class extends i.$R1b {
					static {
						p = this;
					}
					static {
						this.ID = "workbench.editors.untitledEditorInput";
					}
					get typeId() {
						return p.ID;
					}
					get editorId() {
						return t.$b1.id;
					}
					constructor(b, s, l, y, $, v, S, I, T, P, k) {
						super(b.resource, void 0, y, s, l, $, I, P, k),
							(this.X = b),
							(this.Y = v),
							(this.Z = S),
							(this.$ = T),
							(this.c = void 0),
							(this.U = this.D(new c.$Zc())),
							(this.W = void 0),
							this.ab(b),
							this.D(this.R.untitled.onDidCreate((L) => this.bb(L)));
					}
					ab(b) {
						this.U.clear(),
							this.U.add(b.onDidChangeDirty(() => this.b.fire())),
							this.U.add(b.onDidChangeName(() => this.f.fire())),
							this.U.add(b.onDidRevert(() => this.dispose()));
					}
					bb(b) {
						(0, m.$gh)(b.resource, this.X.resource) &&
							b !== this.X &&
							((this.X = b), this.ab(b));
					}
					getName() {
						return this.X.name;
					}
					getDescription(b = t.Verbosity.MEDIUM) {
						if (!this.X.hasAssociatedFilePath) {
							const s = this.resource.path;
							return s !== this.getName() ? s : void 0;
						}
						return super.getDescription(b);
					}
					getTitle(b) {
						if (!this.X.hasAssociatedFilePath) {
							const s = this.getName(),
								l = this.getDescription();
							return l && l !== s ? `${s} \u2022 ${l}` : s;
						}
						return super.getTitle(b);
					}
					isDirty() {
						return this.X.isDirty();
					}
					getEncoding() {
						return this.X.getEncoding();
					}
					setEncoding(b, s) {
						return this.X.setEncoding(b);
					}
					get hasLanguageSetExplicitly() {
						return this.X.hasLanguageSetExplicitly;
					}
					get hasAssociatedFilePath() {
						return this.X.hasAssociatedFilePath;
					}
					setLanguageId(b, s) {
						this.X.setLanguageId(b, s);
					}
					getLanguageId() {
						return this.X.getLanguageId();
					}
					async resolve() {
						return (
							this.c ||
								(this.c = (async () => {
									this.W = await this.$.createModelReference(this.resource);
								})()),
							await this.c,
							this.isDisposed() && this.cb(),
							this.X
						);
					}
					toUntyped(b) {
						const s = {
							resource: this.X.hasAssociatedFilePath
								? (0, m.$xh)(
										this.X.resource,
										this.Y.remoteAuthority,
										this.Z.defaultUriScheme,
									)
								: this.resource,
							forceUntitled: !0,
							options: { override: this.editorId },
						};
						return (
							typeof b?.preserveViewState == "number" &&
								((s.encoding = this.getEncoding()),
								(s.languageId = this.getLanguageId()),
								(s.contents = this.X.isModified()
									? this.X.textEditorModel?.getValue()
									: void 0),
								(s.options.viewState = (0, t.$h1)(
									this,
									b.preserveViewState,
									this.Q,
								)),
								typeof s.contents == "string" &&
									!this.X.hasAssociatedFilePath &&
									!b.preserveResource &&
									(s.resource = void 0)),
							s
						);
					}
					matches(b) {
						return this === b
							? !0
							: b instanceof p
								? (0, m.$gh)(b.resource, this.resource)
								: (0, t.$n1)(b)
									? super.matches(b)
									: !1;
					}
					dispose() {
						(this.c = void 0), this.cb(), super.dispose();
					}
					cb() {
						(0, c.$Vc)(this.W), (this.W = void 0);
					}
				};
				(e.$T1b = o),
					(e.$T1b =
						o =
						p =
							Ne(
								[
									j(1, w.$kZ),
									j(2, E.$3N),
									j(3, C.$IY),
									j(4, d.$ll),
									j(5, r.$r8),
									j(6, u.$I8),
									j(7, a.$_Y),
									j(8, h.$MO),
									j(9, n.$XO),
									j(10, g.$QIb),
								],
								o,
							));
			},
		),
		define(
			de[1893],
			he([
				1, 0, 6, 3, 23, 47, 17, 122, 200, 67, 42, 8, 5, 34, 32, 44, 153, 218,
				257, 18, 628, 1244, 19, 61, 85,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$W1b = e.$V1b = e.$U1b = void 0);
				class S extends Error {
					static {
						this.code = "InlineChatError";
					}
					constructor(k) {
						super(k), (this.name = S.code);
					}
				}
				e.$U1b = S;
				let I = class {
					constructor(k, L, D, M, N, A, R, O, B, U, z) {
						(this.i = k),
							(this.j = L),
							(this.k = D),
							(this.l = M),
							(this.m = N),
							(this.n = A),
							(this.o = R),
							(this.p = O),
							(this.q = B),
							(this.r = U),
							(this.s = z),
							(this.a = new i.$Zc()),
							(this.b = this.a.add(new t.$re())),
							(this.onWillStartSession = this.b.event),
							(this.c = this.a.add(new t.$re())),
							(this.onDidMoveSession = this.c.event),
							(this.d = this.a.add(new t.$re())),
							(this.onDidEndSession = this.d.event),
							(this.f = this.a.add(new t.$re())),
							(this.onDidStashSession = this.f.event),
							(this.g = new Map()),
							(this.h = new Map());
					}
					dispose() {
						this.a.dispose(),
							this.g.forEach((k) => k.store.dispose()),
							this.g.clear();
					}
					async createSession(k, L, D) {
						const M = this.s.getDefaultAgent(p.ChatAgentLocation.Editor);
						if (!M) {
							this.m.trace("[IE] NO agent found");
							return;
						}
						this.b.fire(k);
						const N = k.getModel(),
							A = k.getSelection(),
							R = new i.$Zc();
						this.m.trace(
							`[IE] creating NEW session for ${k.getId()}, ${M.extensionId}`,
						);
						const O =
							L.session?.chatModel ??
							this.r.startSession(p.ChatAgentLocation.Editor, D);
						if (!O) {
							this.m.trace("[IE] NO chatModel found");
							return;
						}
						R.add(
							(0, i.$Yc)(() => {
								[...this.g.values()].some(
									(K) => K.session !== q && K.session.chatModel === O,
								) || (this.r.clearSession(O.sessionId), O.dispose());
							}),
						);
						const B = R.add(new i.$2c());
						R.add(
							O.onDidChange((G) => {
								if (G.kind !== "addRequest" || !G.request.response) return;
								const { response: K } = G.request;
								q.markModelVersion(G.request),
									(B.value = K.onDidChange(() => {
										if (K.isComplete) {
											B.clear();
											for (const J of K.response.value) {
												if (
													J.kind !== "textEditGroup" ||
													J.uri.scheme !== w.Schemas.untitled ||
													(0, y.$gh)(J.uri, q.textModelN.uri)
												)
													continue;
												const W = this.q.createByFilepathOrFirstLine(
													J.uri,
													void 0,
												);
												this.p.untitled
													.create({
														associatedResource: J.uri,
														languageId: W.languageId,
													})
													.resolve(),
													this.k.createModelReference(J.uri).then((Y) => {
														R.add(Y);
													});
											}
										}
									}));
							}),
						),
							R.add(
								this.s.onDidChangeAgents((G) => {
									G === void 0 &&
										!this.s.getAgent(M.id) &&
										(this.m.trace(
											`[IE] provider GONE for ${k.getId()}, ${M.extensionId}`,
										),
										this.t(q, !0));
								}),
							);
						const U = (0, E.$9g)(),
							z = N.uri;
						R.add(await this.k.createModelReference(N.uri));
						const F = N,
							x = R.add(
								this.j.createModel(
									(0, d.$9X)(N.createSnapshot()),
									{ languageId: N.getLanguageId(), onDidChange: t.Event.None },
									z.with({
										scheme: w.Schemas.vscode,
										authority: "inline-chat",
										path: "",
										query: new URLSearchParams({
											id: U,
											textModel0: "",
										}).toString(),
									}),
									!0,
								),
							);
						z.scheme === w.Schemas.untitled &&
							R.add(
								this.o.onDidCloseEditor(() => {
									this.o.isOpened({
										resource: z,
										typeId: s.$T1b.ID,
										editorId: g.$b1.id,
									}) || this.t(q, !0);
								}),
							);
						let H = L.wholeRange;
						if (
							(H ||
								(H = new C.$iL(
									A.selectionStartLineNumber,
									A.selectionStartColumn,
									A.positionLineNumber,
									A.positionColumn,
								)),
							D.isCancellationRequested)
						) {
							R.dispose();
							return;
						}
						const q = new l.$BLb(
								L.editMode,
								L.headless ?? !1,
								z,
								x,
								F,
								M,
								R.add(new l.$ALb(F, H)),
								R.add(new l.$DLb(this.l, x, F)),
								O,
								L.session?.versionsByRequest,
							),
							V = this.u(k, q.targetUri);
						if (this.g.has(V))
							throw (R.dispose(), new Error(`Session already stored for ${V}`));
						return this.g.set(V, { session: q, editor: k, store: R }), q;
					}
					moveSession(k, L) {
						const D = this.u(L, k.targetUri),
							M = this.g.get(D);
						if (M) {
							if (M.session !== k)
								throw new Error(
									"Cannot move session because the target editor already/still has one",
								);
							return;
						}
						let N = !1;
						for (const [A, R] of this.g)
							if (R.session === k) {
								(N = !0),
									this.g.delete(A),
									this.g.set(D, { ...R, editor: L }),
									this.m.trace(
										`[IE] did MOVE session for ${R.editor.getId()} to NEW EDITOR ${L.getId()}, ${k.agent.extensionId}`,
									),
									this.c.fire({ session: k, editor: L });
								break;
							}
						if (!N)
							throw new Error("Cannot move session because it is not stored");
					}
					releaseSession(k) {
						this.t(k, !1);
					}
					t(k, L) {
						let D;
						for (const A of this.g)
							if (A[1].session === k) {
								D = A;
								break;
							}
						if (!D) return;
						this.i.publicLog2("interactiveEditor/session", k.asTelemetryData());
						const [M, N] = D;
						this.g.delete(M),
							this.m.trace(
								`[IE] did RELEASED session for ${N.editor.getId()}, ${k.agent.extensionId}`,
							),
							this.d.fire({
								editor: N.editor,
								session: k,
								endedByExternalCause: L,
							}),
							N.store.dispose();
					}
					stashSession(k, L, D) {
						const M = this.n.createInstance(l.$CLb, L, k, D);
						return (
							this.f.fire({ editor: L, session: k }),
							this.m.trace(
								`[IE] did STASH session for ${L.getId()}, ${k.agent.extensionId}`,
							),
							M
						);
					}
					getCodeEditor(k) {
						for (const [, L] of this.g) if (L.session === k) return L.editor;
						throw new Error("session not found");
					}
					getSession(k, L) {
						const D = this.u(k, L);
						return this.g.get(D)?.session;
					}
					u(k, L) {
						const D = this.h.get(L.scheme);
						return D
							? D.getComparisonKey(k, L)
							: `${k.getId()}@${L.toString()}`;
					}
					registerSessionKeyComputer(k, L) {
						return this.h.set(k, L), (0, i.$Yc)(() => this.h.delete(k));
					}
				};
				(e.$V1b = I),
					(e.$V1b = I =
						Ne(
							[
								j(0, n.$km),
								j(1, r.$QO),
								j(2, u.$MO),
								j(3, m.$Cxb),
								j(4, c.$ik),
								j(5, h.$Li),
								j(6, b.$IY),
								j(7, v.$kZ),
								j(8, $.$nM),
								j(9, o.$J2),
								j(10, p.$c3),
							],
							I,
						));
				let T = class {
					static {
						this.Id = "inlineChat.enabler";
					}
					constructor(k, L) {
						(this.b = new i.$Zc()),
							(this.a = f.$VKb.bindTo(k)),
							this.b.add(
								L.onDidChangeAgents(() => {
									const D = !!L.getDefaultAgent(p.ChatAgentLocation.Editor);
									this.a.set(D);
								}),
							);
					}
					dispose() {
						this.a.reset(), this.b.dispose();
					}
				};
				(e.$W1b = T), (e.$W1b = T = Ne([j(0, a.$6j), j(1, p.$c3)], T));
			},
		),
		