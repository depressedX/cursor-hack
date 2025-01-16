define(de[3276], he([1, 0, 3, 41, 286]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ExternalUriResolverContribution = void 0);
			let E = class extends t.$1c {
				static {
					this.ID = "workbench.contrib.externalUriResolver";
				}
				constructor(d, m) {
					super(),
						m.options?.resolveExternalUri &&
							this.D(
								d.registerExternalUriResolver({
									resolveExternalUri: async (r) => ({
										resolved: await m.options.resolveExternalUri(r),
										dispose: () => {},
									}),
								}),
							);
				}
			};
			(e.ExternalUriResolverContribution = E),
				(e.ExternalUriResolverContribution = E =
					Ne([j(0, i.$7rb), j(1, w.$5rb)], E));
		}),
		define(
			de[1018],
			he([1, 0, 9, 4, 62, 21, 18, 286]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UXb = e.$TXb = e.$SXb = void 0),
					(e.$VXb = r),
					(e.$WXb = u),
					(e.$XXb = a);
				const m = t.URI.parse("trustedDomains:/Trusted Domains");
				(e.$SXb = "http.linkProtectionTrustedDomains"),
					(e.$TXb = "http.linkProtectionTrustedDomainsContent"),
					(e.$UXb = {
						id: "workbench.action.manageTrustedDomain",
						description: {
							description: (0, i.localize2)(11119, "Manage Trusted Domains"),
							args: [],
						},
						handler: async (h) => {
							h.get(C.$IY).openEditor({
								resource: m,
								languageId: "jsonc",
								options: { pinned: !0 },
							});
						},
					});
				async function r(h, c, n, g, p, o, f) {
					const b = t.URI.parse(c),
						s = b.authority.split("."),
						l = s.slice(s.length - 2).join("."),
						y = "*." + l,
						$ = [];
					if (
						($.push({
							type: "item",
							label: (0, i.localize)(11114, null, c),
							id: "trust",
							toTrust: c,
							picked: !0,
						}),
						s.length === 4 &&
							s.every(
								(I) =>
									Number.isInteger(+I) || Number.isInteger(+I.split(":")[0]),
							))
					) {
						if (b.authority.includes(":")) {
							const I = b.authority.split(":")[0];
							$.push({
								type: "item",
								label: (0, i.localize)(11115, null, I),
								toTrust: I + ":*",
								id: "trust",
							});
						}
					} else
						$.push({
							type: "item",
							label: (0, i.localize)(11116, null, l),
							toTrust: y,
							id: "trust",
						});
					$.push({
						type: "item",
						label: (0, i.localize)(11117, null),
						toTrust: "*",
						id: "trust",
					}),
						$.push({
							type: "item",
							label: (0, i.localize)(11118, null),
							id: "manage",
						});
					const S = await g.pick($, { activeItem: $[0] });
					if (S && S.id)
						switch (S.id) {
							case "manage":
								return (
									await o.openEditor({
										resource: m.with({ fragment: n.toString() }),
										languageId: "jsonc",
										options: { pinned: !0 },
									}),
									h
								);
							case "trust": {
								const I = S.toTrust;
								if (h.indexOf(I) === -1)
									return (
										p.remove(e.$TXb, E.StorageScope.APPLICATION),
										p.store(
											e.$SXb,
											JSON.stringify([...h, I]),
											E.StorageScope.APPLICATION,
											E.StorageTarget.USER,
										),
										[...h, I]
									);
							}
						}
					return [];
				}
				async function u(h) {
					const { defaultTrustedDomains: c, trustedDomains: n } = a(h);
					return { defaultTrustedDomains: c, trustedDomains: n };
				}
				function a(h) {
					const c = h.get(E.$lq),
						n = h.get(w.$Bk),
						g = h.get(d.$5rb),
						p = [
							...(n.linkProtectionTrustedDomains ?? []),
							...(g.options?.additionalTrustedDomains ?? []),
						];
					let o = [];
					try {
						const f = c.get(e.$SXb, E.StorageScope.APPLICATION);
						f && (o = JSON.parse(f));
					} catch {}
					return { defaultTrustedDomains: p, trustedDomains: o };
				}
			},
		),
		define(
			de[1292],
			he([1, 0, 7, 75, 3, 9, 5, 21, 1018, 1783]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Xb = e.$ZXb = void 0),
					(e.$2Xb = g),
					(e.$ZXb = (0, C.$Mi)("ITrustedDomainService"));
				let u = class extends w.$1c {
					constructor(o, f) {
						super(), (this.b = o), (this.c = f);
						const b = () =>
							new t.$fgb(i.$Bfb, () => {
								const { defaultTrustedDomains: s, trustedDomains: l } =
									this.b.invokeFunction(m.$XXb);
								return [...s, ...l];
							});
						(this.a = b()),
							this.D(
								this.c.onDidChangeValue(
									d.StorageScope.APPLICATION,
									m.$SXb,
									this.D(new w.$Zc()),
								)(() => {
									this.a?.dispose(), (this.a = b());
								}),
							);
					}
					isValid(o) {
						const { defaultTrustedDomains: f, trustedDomains: b } =
								this.b.invokeFunction(m.$XXb),
							s = [...f, ...b];
						return g(o, s);
					}
				};
				(e.$1Xb = u), (e.$1Xb = u = Ne([j(0, C.$Li), j(1, d.$lq)], u));
				const a = /^localhost(:\d+)?$/i,
					h = /^127.0.0.1(:\d+)?$/;
				function c(p) {
					return a.test(p) || h.test(p);
				}
				function n(p) {
					const o = ["github.com"];
					try {
						const f = typeof p == "string" ? E.URI.parse(p, !0) : p;
						return o.includes(f.authority)
							? f.with({ path: f.path.toLowerCase() }).toString(!0)
							: f.toString(!0);
					} catch {
						return p.toString();
					}
				}
				function g(p, o) {
					if (((p = E.URI.parse(n(p))), (o = o.map(n)), c(p.authority)))
						return !0;
					for (let f = 0; f < o.length; f++)
						if (o[f] === "*" || (0, r.$YXb)(p, o[f])) return !0;
					return !1;
				}
			},
		),
		define(
			de[3277],
			he([1, 0, 95, 3, 251, 61, 72, 41, 1292]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3Xb = void 0);
				const r = [
					"b",
					"blockquote",
					"br",
					"code",
					"em",
					"h1",
					"h2",
					"h3",
					"h4",
					"h5",
					"h6",
					"hr",
					"i",
					"li",
					"ol",
					"p",
					"pre",
					"strong",
					"sub",
					"sup",
					"table",
					"tbody",
					"td",
					"th",
					"thead",
					"tr",
					"ul",
					"a",
					"img",
					"span",
					"div",
				];
				let u = class extends w.$Qzb {
					constructor(h, c, n, g, p) {
						super(h ?? {}, c, n), (this.g = g), (this.h = p);
					}
					render(h, c, n) {
						c = {
							...c,
							remoteImageIsAllowed: (o) => this.g.isValid(o),
							sanitizerOptions: { replaceWithPlaintext: !0, allowedTags: r },
						};
						const g =
								h && h.supportHtml
									? {
											...h,
											value: `<body>

${h.value}</body>`,
										}
									: h,
							p = super.render(g, c, n);
						return this.i(p);
					}
					i(h) {
						const c = new i.$Zc();
						return (
							h.element.querySelectorAll("a").forEach((n) => {
								if (n.title) {
									const g = n.title;
									(n.title = ""),
										c.add(
											this.h.setupManagedHover((0, t.$cib)("element"), n, g),
										);
								}
							}),
							{
								element: h.element,
								dispose: () => {
									h.dispose(), c.dispose();
								},
							}
						);
					}
				};
				(e.$3Xb = u),
					(e.$3Xb = u =
						Ne([j(1, E.$nM), j(2, d.$7rb), j(3, m.$ZXb), j(4, C.$Uyb)], u));
			},
		),
		define(
			de[3278],
			he([1, 0, 6, 187, 22, 21, 76, 1018, 28, 5]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sSc = void 0);
				const u = "trustedDomains",
					a = {
						type: w.FileType.File,
						ctime: Date.now(),
						mtime: Date.now(),
						size: 0,
					},
					h = `// Links matching one or more entries in the list below can be opened without link protection.
// The following examples show what entries can look like:
// - "https://microsoft.com": Matches this specific domain using https
// - "https://microsoft.com:8080": Matches this specific domain on this port using https
// - "https://microsoft.com:*": Matches this specific domain on any port using https
// - "https://microsoft.com/foo": Matches https://microsoft.com/foo and https://microsoft.com/foo/bar,
//   but not https://microsoft.com/foobar or https://microsoft.com/bar
// - "https://*.microsoft.com": Match all domains ending in "microsoft.com" using https
// - "microsoft.com": Match this specific domain using either http or https
// - "*.microsoft.com": Match all domains ending in "microsoft.com" using either http or https
// - "http://192.168.0.1: Matches this specific IP using http
// - "http://192.168.0.*: Matches all IP's with this prefix using http
// - "*": Match all domains using either http or https
//
`,
					c = `//
// You can use the "Manage Trusted Domains" command to open this file.
// Save this file to apply the trusted domains rules.
`,
					n = `[
	// "https://microsoft.com"
]`;
				function g(o, f, b) {
					let s = h;
					return (
						o.length > 0
							? ((s += `// By default, VS Code trusts "localhost" as well as the following domains:
`),
								o.forEach((l) => {
									s += `// - "${l}"
`;
								}))
							: (s += `// By default, VS Code trusts "localhost".
`),
						(s += c),
						(s += b
							? `
// Currently configuring trust for ${b}
`
							: ""),
						f.length === 0 ? (s += n) : (s += JSON.stringify(f, null, 2)),
						s
					);
				}
				let p = class {
					static {
						this.ID = "workbench.contrib.trustedDomainsFileSystemProvider";
					}
					constructor(f, b, s) {
						(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.capabilities =
								w.FileSystemProviderCapabilities.FileReadWrite),
							(this.onDidChangeCapabilities = t.Event.None),
							(this.onDidChangeFile = t.Event.None),
							this.a.registerProvider(u, this);
					}
					stat(f) {
						return Promise.resolve(a);
					}
					async readFile(f) {
						let b = this.b.get(d.$TXb, E.StorageScope.APPLICATION);
						const s = f.fragment,
							{ defaultTrustedDomains: l, trustedDomains: y } =
								await this.c.invokeFunction(d.$WXb);
						return (
							(!b ||
								b.indexOf(h) === -1 ||
								b.indexOf(c) === -1 ||
								b.indexOf(s ?? "") === -1 ||
								[...l, ...y].some((v) => !(0, m.$wg)(b).includes(v))) &&
								(b = g(l, y, s)),
							C.$Te.fromString(b).buffer
						);
					}
					writeFile(f, b, s) {
						try {
							const l = C.$Te.wrap(b).toString(),
								y = (0, i.$do)(l);
							this.b.store(
								d.$TXb,
								l,
								E.StorageScope.APPLICATION,
								E.StorageTarget.USER,
							),
								this.b.store(
									d.$SXb,
									JSON.stringify(y) || "",
									E.StorageScope.APPLICATION,
									E.StorageTarget.USER,
								);
						} catch {}
						return Promise.resolve();
					}
					watch(f, b) {
						return { dispose() {} };
					}
					mkdir(f) {
						return Promise.resolve(void 0);
					}
					readdir(f) {
						return Promise.resolve(void 0);
					}
					delete(f, b) {
						return Promise.resolve(void 0);
					}
					rename(f, b, s) {
						return Promise.resolve(void 0);
					}
				};
				(e.$sSc = p),
					(e.$sSc = p = Ne([j(0, w.$ll), j(1, E.$lq), j(2, r.$Li)], p));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3279],
		he([
			1, 0, 23, 111, 9, 4, 121, 10, 57, 5, 41, 62, 63, 21, 32, 174, 1292, 1018,
			18,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$tSc = void 0),
				(i = xi(i));
			let b = class {
				constructor(l, y, $, v, S, I, T, P, k, L, D, M) {
					(this.a = l),
						(this.b = y),
						(this.c = $),
						(this.d = v),
						(this.e = S),
						(this.f = I),
						(this.g = T),
						(this.h = P),
						(this.i = k),
						(this.j = L),
						(this.k = D),
						(this.l = M),
						this.a.registerValidator({
							shouldOpen: (N, A) => this.validateLink(N, A),
						});
				}
				async validateLink(l, y) {
					if (
						(!(0, t.$Vg)(l, t.Schemas.http) &&
							!(0, t.$Vg)(l, t.Schemas.https)) ||
						(y?.fromWorkspace &&
							this.k.isWorkspaceTrusted() &&
							!this.j.getValue(
								"workbench.trustedDomains.promptInTrustedWorkspace",
							))
					)
						return !0;
					const $ = l;
					let v;
					if (
						(typeof l == "string" ? (v = w.URI.parse(l)) : (v = l),
						await this.l.isValid(v))
					)
						return !0;
					{
						const {
							scheme: S,
							authority: I,
							path: T,
							query: P,
							fragment: k,
						} = v;
						let L = `${S}://${I}${T}`;
						const D = `${P ? "?" + P : ""}${k ? "#" + k : ""}`,
							M = Math.max(0, 60 - L.length),
							N = Math.min(Math.max(5, M), D.length);
						N === D.length
							? (L += D)
							: (L += D.charAt(0) + "..." + D.substring(D.length - N + 1));
						const { result: A } = await this.c.prompt({
							type: i.default.Info,
							message: (0, E.localize)(11120, null, this.d.nameShort),
							detail: typeof $ == "string" ? $ : L,
							buttons: [
								{ label: (0, E.localize)(11121, null), run: () => !0 },
								{
									label: (0, E.localize)(11122, null),
									run: () => (
										this.g.writeText(typeof $ == "string" ? $ : v.toString(!0)),
										!1
									),
								},
								{
									label: (0, E.localize)(11123, null),
									run: async () => {
										const { trustedDomains: R } = this.i.invokeFunction(o.$XXb),
											O = `${S}://${I}`,
											B = await (0, o.$VXb)(
												R,
												O,
												v,
												this.e,
												this.b,
												this.f,
												this.h,
											);
										return !!(B.indexOf("*") !== -1 || (0, p.$2Xb)(v, B));
									},
								},
							],
							cancelButton: { run: () => !1 },
						});
						return A;
					}
				}
			};
			(e.$tSc = b),
				(e.$tSc = b =
					Ne(
						[
							j(0, u.$7rb),
							j(1, c.$lq),
							j(2, m.$GO),
							j(3, a.$Bk),
							j(4, h.$DJ),
							j(5, f.$IY),
							j(6, C.$Vxb),
							j(7, n.$km),
							j(8, r.$Li),
							j(9, d.$gj),
							j(10, g.$pO),
							j(11, p.$ZXb),
						],
						b,
					));
		},
	),
		