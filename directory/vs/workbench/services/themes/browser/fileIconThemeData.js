define(
			de[1889],
			he([1, 0, 4, 54, 19, 187, 333, 754, 7, 21, 75]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fwc = e.$ewc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w)),
					(E = mt(E));
				class a {
					static {
						this.STORAGE_KEY = "iconThemeData";
					}
					constructor(p, o, f) {
						(this.id = p),
							(this.label = o),
							(this.settingsId = f),
							(this.isLoaded = !1),
							(this.hasFileIcons = !1),
							(this.hasFolderIcons = !1),
							(this.hidesExplorerArrows = !1);
					}
					ensureLoaded(p) {
						return this.isLoaded
							? Promise.resolve(this.styleSheetContent)
							: this.a(p);
					}
					reload(p) {
						return this.a(p);
					}
					a(p) {
						return p.load(this);
					}
					static fromExtensionTheme(p, o, f) {
						const b = f.extensionId + "-" + p.id,
							s = p.label || i.$sc(p.path),
							l = p.id,
							y = new a(b, s, l);
						return (
							(y.description = p.description),
							(y.location = o),
							(y.extensionData = f),
							(y.watch = p._watch),
							(y.isLoaded = !1),
							y
						);
					}
					static {
						this.b = null;
					}
					static get noIconTheme() {
						let p = a.b;
						return (
							p ||
								((p = a.b = new a("", "", null)),
								(p.hasFileIcons = !1),
								(p.hasFolderIcons = !1),
								(p.hidesExplorerArrows = !1),
								(p.isLoaded = !0),
								(p.extensionData = void 0),
								(p.watch = !1)),
							p
						);
					}
					static createUnloadedTheme(p) {
						const o = new a(p, "", "__" + p);
						return (
							(o.isLoaded = !1),
							(o.hasFileIcons = !1),
							(o.hasFolderIcons = !1),
							(o.hidesExplorerArrows = !1),
							(o.extensionData = void 0),
							(o.watch = !1),
							o
						);
					}
					static fromStorageData(p) {
						const o = p.get(a.STORAGE_KEY, r.StorageScope.PROFILE);
						if (o)
							try {
								const f = JSON.parse(o),
									b = new a("", "", null);
								for (const s in f)
									switch (s) {
										case "id":
										case "label":
										case "description":
										case "settingsId":
										case "styleSheetContent":
										case "hasFileIcons":
										case "hidesExplorerArrows":
										case "hasFolderIcons":
										case "watch":
											b[s] = f[s];
											break;
										case "location":
											break;
										case "extensionData":
											b.extensionData = C.ExtensionData.fromJSONObject(
												f.extensionData,
											);
											break;
									}
								return b;
							} catch {
								return;
							}
					}
					toStorage(p) {
						const o = JSON.stringify({
							id: this.id,
							label: this.label,
							description: this.description,
							settingsId: this.settingsId,
							styleSheetContent: this.styleSheetContent,
							hasFileIcons: this.hasFileIcons,
							hasFolderIcons: this.hasFolderIcons,
							hidesExplorerArrows: this.hidesExplorerArrows,
							extensionData: C.ExtensionData.toJSONObject(this.extensionData),
							watch: this.watch,
						});
						p.store(
							a.STORAGE_KEY,
							o,
							r.StorageScope.PROFILE,
							r.StorageTarget.MACHINE,
						);
					}
				}
				e.$ewc = a;
				class h {
					constructor(p, o) {
						(this.a = p), (this.b = o);
					}
					load(p) {
						return p.location
							? this.c(p.location).then((o) => {
									const f = this.d(p.id, p.location, o);
									return (
										(p.styleSheetContent = f.content),
										(p.hasFileIcons = f.hasFileIcons),
										(p.hasFolderIcons = f.hasFolderIcons),
										(p.hidesExplorerArrows = f.hidesExplorerArrows),
										(p.isLoaded = !0),
										p.styleSheetContent
									);
								})
							: Promise.resolve(p.styleSheetContent);
					}
					c(p) {
						return this.a.readExtensionResource(p).then((o) => {
							const f = [],
								b = E.$do(o, f);
							return f.length > 0
								? Promise.reject(
										new Error(
											t.localize(
												12698,
												null,
												f.map((s) => (0, d.$br)(s.error)).join(", "),
											),
										),
									)
								: E.$lo(b) !== "object"
									? Promise.reject(new Error(t.localize(12699, null)))
									: Promise.resolve(b);
						});
					}
					d(p, o, f) {
						const b = {
							content: "",
							hasFileIcons: !1,
							hasFolderIcons: !1,
							hidesExplorerArrows: !!f.hidesExplorerArrows,
						};
						let s = !1;
						if (!f.iconDefinitions) return b;
						const l = {},
							y = {},
							$ = w.$mh(o);
						function v(L) {
							return w.$nh($, L);
						}
						function S(L, D) {
							function M(N, A) {
								if (A) {
									let R = l[A];
									R || (R = l[A] = []), R.push(N);
								}
							}
							if (L) {
								let N = ".show-file-icons";
								D && (N = D + " " + N);
								const A =
									".monaco-tl-twistie.collapsible:not(.collapsed) + .monaco-tl-contents";
								L.folder &&
									(M(`${N} .folder-icon::before`, L.folder),
									(b.hasFolderIcons = !0)),
									L.folderExpanded &&
										(M(`${N} ${A} .folder-icon::before`, L.folderExpanded),
										(b.hasFolderIcons = !0));
								const R = L.rootFolder || L.folder,
									O = L.rootFolderExpanded || L.folderExpanded;
								R &&
									(M(`${N} .rootfolder-icon::before`, R),
									(b.hasFolderIcons = !0)),
									O &&
										(M(`${N} ${A} .rootfolder-icon::before`, O),
										(b.hasFolderIcons = !0)),
									L.file &&
										(M(`${N} .file-icon::before`, L.file),
										(b.hasFileIcons = !0));
								const B = L.folderNames;
								if (B)
									for (const V in B) {
										const G = [],
											K = c(V.toLowerCase(), G);
										G.push(`.${n(K)}-name-folder-icon`),
											M(`${N} ${G.join("")}.folder-icon::before`, B[V]),
											(b.hasFolderIcons = !0);
									}
								const U = L.folderNamesExpanded;
								if (U)
									for (const V in U) {
										const G = [],
											K = c(V.toLowerCase(), G);
										G.push(`.${n(K)}-name-folder-icon`),
											M(`${N} ${A} ${G.join("")}.folder-icon::before`, U[V]),
											(b.hasFolderIcons = !0);
									}
								const z = L.rootFolderNames;
								if (z)
									for (const V in z) {
										const G = V.toLowerCase();
										M(
											`${N} .${n(G)}-root-name-folder-icon.rootfolder-icon::before`,
											z[V],
										),
											(b.hasFolderIcons = !0);
									}
								const F = L.rootFolderNamesExpanded;
								if (F)
									for (const V in F) {
										const G = V.toLowerCase();
										M(
											`${N} ${A} .${n(G)}-root-name-folder-icon.rootfolder-icon::before`,
											F[V],
										),
											(b.hasFolderIcons = !0);
									}
								const x = L.languageIds;
								if (x) {
									!x.jsonc && x.json && (x.jsonc = x.json);
									for (const V in x)
										M(`${N} .${n(V)}-lang-file-icon.file-icon::before`, x[V]),
											(b.hasFileIcons = !0),
											(s = !0),
											(y[V] = !0);
								}
								const H = L.fileExtensions;
								if (H)
									for (const V in H) {
										const G = [],
											J = c(V.toLowerCase(), G).split(".");
										if (J.length) {
											for (let W = 0; W < J.length; W++)
												G.push(`.${n(J.slice(W).join("."))}-ext-file-icon`);
											G.push(".ext-file-icon");
										}
										M(`${N} ${G.join("")}.file-icon::before`, H[V]),
											(b.hasFileIcons = !0),
											(s = !0);
									}
								const q = L.fileNames;
								if (q)
									for (const V in q) {
										const G = [],
											K = c(V.toLowerCase(), G);
										G.push(`.${n(K)}-name-file-icon`),
											G.push(".name-file-icon");
										const J = K.split(".");
										if (J.length) {
											for (let W = 1; W < J.length; W++)
												G.push(`.${n(J.slice(W).join("."))}-ext-file-icon`);
											G.push(".ext-file-icon");
										}
										M(`${N} ${G.join("")}.file-icon::before`, q[V]),
											(b.hasFileIcons = !0),
											(s = !0);
									}
							}
						}
						if (
							(S(f),
							S(f.light, ".vs"),
							S(f.highContrast, ".hc-black"),
							S(f.highContrast, ".hc-light"),
							!b.hasFileIcons && !b.hasFolderIcons)
						)
							return b;
						const I =
								f.showLanguageModeIcons === !0 ||
								(s && f.showLanguageModeIcons !== !1),
							T = [],
							P = f.fonts,
							k = new Map();
						if (Array.isArray(P)) {
							const L = P[0].size || "150%";
							P.forEach((D) => {
								const M = D.src
									.map((N) => `${(0, m.$vhb)(v(N.path))} format('${N.format}')`)
									.join(", ");
								T.push(
									`@font-face { src: ${M}; font-family: '${D.id}'; font-weight: ${D.weight}; font-style: ${D.style}; font-display: block; }`,
								),
									D.size !== void 0 && D.size !== L && k.set(D.id, D.size);
							}),
								T.push(
									`.show-file-icons .file-icon::before, .show-file-icons .folder-icon::before, .show-file-icons .rootfolder-icon::before { font-family: '${P[0].id}'; font-size: ${L}; }`,
								);
						}
						for (const L in l) {
							const D = l[L],
								M = f.iconDefinitions[L];
							if (M) {
								if (M.iconPath)
									T.push(
										`${D.join(", ")} { content: ' '; background-image: ${(0, m.$vhb)(v(M.iconPath))}; }`,
									);
								else if (M.fontCharacter || M.fontColor) {
									const N = [];
									M.fontColor && N.push(`color: ${M.fontColor};`),
										M.fontCharacter && N.push(`content: '${M.fontCharacter}';`);
									const A = M.fontSize ?? (M.fontId ? k.get(M.fontId) : void 0);
									A && N.push(`font-size: ${A};`),
										M.fontId && N.push(`font-family: ${M.fontId};`),
										I && N.push("background-image: unset;"),
										T.push(`${D.join(", ")} { ${N.join(" ")} }`);
								}
							}
						}
						if (I) {
							for (const L of this.b.getRegisteredLanguageIds())
								if (!y[L]) {
									const D = this.b.getIcon(L);
									if (D) {
										const M = `.show-file-icons .${n(L)}-lang-file-icon.file-icon::before`;
										T.push(
											`${M} { content: ' '; background-image: ${(0, m.$vhb)(D.dark)}; }`,
										),
											T.push(
												`.vs ${M} { content: ' '; background-image: ${(0, m.$vhb)(D.light)}; }`,
											);
									}
								}
						}
						return (
							(b.content = T.join(`
`)),
							b
						);
					}
				}
				e.$fwc = h;
				function c(g, p) {
					const o = g.lastIndexOf("/");
					if (o >= 0) {
						const f = g.substring(0, o);
						return p.push(`.${n(f)}-name-dir-icon`), g.substring(o + 1);
					}
					return g;
				}
				function n(g) {
					return (g = g.replace(/[\s]/g, "/")), u.$Bfb.CSS.escape(g);
				}
			},
		),
		