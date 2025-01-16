define(de[197], he([1, 0, 76, 9, 221]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$hi = E),
				(e.$ii = C),
				(e.$ji = m);
			function E(r) {
				return JSON.stringify(r, d);
			}
			function C(r) {
				let u = JSON.parse(r);
				return (u = m(u)), u;
			}
			function d(r, u) {
				return u instanceof RegExp
					? { $mid: w.MarshalledId.Regexp, source: u.source, flags: u.flags }
					: u;
			}
			function m(r, u = 0) {
				if (!r || u > 200) return r;
				if (typeof r == "object") {
					switch (r.$mid) {
						case w.MarshalledId.Uri:
							return i.URI.revive(r);
						case w.MarshalledId.Regexp:
							return new RegExp(r.source, r.flags);
						case w.MarshalledId.Date:
							return new Date(r.source);
					}
					if (r instanceof t.$Te || r instanceof Uint8Array) return r;
					if (Array.isArray(r))
						for (let a = 0; a < r.length; ++a) r[a] = m(r[a], u + 1);
					else
						for (const a in r)
							Object.hasOwnProperty.call(r, a) && (r[a] = m(r[a], u + 1));
				}
				return r;
			}
		}),
		define(
			de[23],
			he([1, 0, 29, 12, 37, 9, 54]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.COI =
						e.$7g =
						e.$6g =
						e.$5g =
						e.$4g =
						e.$3g =
						e.$2g =
						e.$Zg =
						e.$Yg =
						e.$Xg =
						e.Schemas =
							void 0),
					(e.$Vg = m),
					(e.$Wg = r),
					(e.$1g = a),
					(t = mt(t)),
					(i = mt(i)),
					(C = mt(C));
				var d;
				(function (n) {
					(n.inMemory = "inmemory"),
						(n.vscode = "vscode"),
						(n.internal = "private"),
						(n.walkThrough = "walkThrough"),
						(n.walkThroughSnippet = "walkThroughSnippet"),
						(n.http = "http"),
						(n.https = "https"),
						(n.file = "file"),
						(n.mailto = "mailto"),
						(n.untitled = "untitled"),
						(n.data = "data"),
						(n.command = "command"),
						(n.vscodeRemote = "vscode-remote"),
						(n.vscodeRemoteResource = "vscode-remote-resource"),
						(n.vscodeManagedRemoteResource = "vscode-managed-remote-resource"),
						(n.vscodeUserData = "vscode-userdata"),
						(n.vscodeCustomEditor = "vscode-custom-editor"),
						(n.vscodeNotebook = "vscode-notebook"),
						(n.vscodeNotebookCell = "vscode-notebook-cell"),
						(n.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata"),
						(n.vscodeNotebookCellMetadataDiff =
							"vscode-notebook-cell-metadata-diff"),
						(n.vscodeNotebookCellOutput = "vscode-notebook-cell-output"),
						(n.vscodeNotebookCellOutputDiff =
							"vscode-notebook-cell-output-diff"),
						(n.vscodeNotebookMetadata = "vscode-notebook-metadata"),
						(n.vscodeInteractiveInput = "vscode-interactive-input"),
						(n.vscodeSettings = "vscode-settings"),
						(n.vscodeWorkspaceTrust = "vscode-workspace-trust"),
						(n.vscodeTerminal = "vscode-terminal"),
						(n.vscodeChatCodeBlock = "vscode-chat-code-block"),
						(n.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block"),
						(n.vscodeChatSesssion = "vscode-chat-editor"),
						(n.webviewPanel = "webview-panel"),
						(n.vscodeWebview = "vscode-webview"),
						(n.extension = "extension"),
						(n.aiChat = "cursor.aichat"),
						(n.notepad = "cursor.notepad"),
						(n.composer = "cursor.composer"),
						(n.aiSettings = "cursor.aisettings"),
						(n.tinderDiffEditor = "cursor.tinderdiffeditor"),
						(n.aiReader = "cursor.aireader"),
						(n.vscodeFileResource = "vscode-file"),
						(n.tmp = "tmp"),
						(n.vsls = "vsls"),
						(n.vscodeSourceControl = "vscode-scm"),
						(n.commentsInput = "comment"),
						(n.codeSetting = "code-setting"),
						(n.cursorDev = "cursor-dev"),
						(n.outputChannel = "output"),
						(n.bugbot = "cursor.bugbot");
				})(d || (e.Schemas = d = {}));
				function m(n, g) {
					return E.URI.isUri(n)
						? (0, w.$Mf)(n.scheme, g)
						: (0, w.$Nf)(n, g + ":");
				}
				function r(n, ...g) {
					return g.some((p) => m(n, p));
				}
				(e.$Xg = "vscode-tkn"), (e.$Yg = "tkn");
				class u {
					constructor() {
						(this.a = Object.create(null)),
							(this.b = Object.create(null)),
							(this.c = Object.create(null)),
							(this.d = "http"),
							(this.e = null),
							(this.f = "/");
					}
					setPreferredWebSchema(g) {
						this.d = g;
					}
					setDelegate(g) {
						this.e = g;
					}
					setServerRootPath(g, p) {
						this.f = a(g, p);
					}
					getServerRootPath() {
						return this.f;
					}
					get g() {
						return C.$lc.join(this.f, d.vscodeRemoteResource);
					}
					set(g, p, o) {
						(this.a[g] = p), (this.b[g] = o);
					}
					setConnectionToken(g, p) {
						this.c[g] = p;
					}
					getPreferredWebSchema() {
						return this.d;
					}
					rewrite(g) {
						if (this.e)
							try {
								return this.e(g);
							} catch (l) {
								return t.$4(l), g;
							}
						const p = g.authority;
						let o = this.a[p];
						o &&
							o.indexOf(":") !== -1 &&
							o.indexOf("[") === -1 &&
							(o = `[${o}]`);
						const f = this.b[p],
							b = this.c[p];
						let s = `path=${encodeURIComponent(g.path)}`;
						return (
							typeof b == "string" &&
								(s += `&${e.$Yg}=${encodeURIComponent(b)}`),
							E.URI.from({
								scheme: i.$r ? this.d : d.vscodeRemoteResource,
								authority: `${o}:${f}`,
								path: this.g,
								query: s,
							})
						);
					}
				}
				e.$Zg = new u();
				function a(n, g) {
					return C.$lc.join(
						g ?? "/",
						`${n.quality ?? "oss"}-${n.commit ?? "dev"}`,
					);
				}
				(e.$2g = "vs/../../extensions"),
					(e.$3g = "vs/../../node_modules"),
					(e.$4g = "vs/../../node_modules.asar"),
					(e.$5g = "vs/../../node_modules.asar.unpacked"),
					(e.$6g = "vscode-app");
				class h {
					static {
						this.a = e.$6g;
					}
					asBrowserUri(g) {
						const p = this.b(g, ce);
						return this.uriToBrowserUri(p);
					}
					uriToBrowserUri(g) {
						return g.scheme === d.vscodeRemote
							? e.$Zg.rewrite(g)
							: g.scheme === d.file &&
									(i.$p || i.$t === `${d.vscodeFileResource}://${h.a}`)
								? g.with({
										scheme: d.vscodeFileResource,
										authority: g.authority || h.a,
										query: null,
										fragment: null,
									})
								: g;
					}
					asFileUri(g) {
						const p = this.b(g, ce);
						return this.uriToFileUri(p);
					}
					uriToFileUri(g) {
						return g.scheme === d.vscodeFileResource
							? g.with({
									scheme: d.file,
									authority: g.authority !== h.a ? g.authority : null,
									query: null,
									fragment: null,
								})
							: g;
					}
					b(g, p) {
						if (E.URI.isUri(g)) return g;
						if (globalThis._VSCODE_FILE_ROOT) {
							const o = globalThis._VSCODE_FILE_ROOT;
							if (/^\w[\w\d+.-]*:\/\//.test(o))
								return E.URI.joinPath(E.URI.parse(o, !0), g);
							const f = C.$oc(o, g);
							return E.URI.file(f);
						}
						return E.URI.parse(p.toUrl(g));
					}
				}
				e.$7g = new h();
				var c;
				(function (n) {
					const g = new Map([
						["1", { "Cross-Origin-Opener-Policy": "same-origin" }],
						["2", { "Cross-Origin-Embedder-Policy": "require-corp" }],
						[
							"3",
							{
								"Cross-Origin-Opener-Policy": "same-origin",
								"Cross-Origin-Embedder-Policy": "require-corp",
							},
						],
					]);
					n.CoopAndCoep = Object.freeze(g.get("3"));
					const p = "vscode-coi";
					function o(b) {
						let s;
						typeof b == "string"
							? (s = new URL(b).searchParams)
							: b instanceof URL
								? (s = b.searchParams)
								: E.URI.isUri(b) && (s = new URL(b.toString(!0)).searchParams);
						const l = s?.get(p);
						if (l) return g.get(l);
					}
					n.getHeadersFromQuery = o;
					function f(b, s, l) {
						if (!globalThis.crossOriginIsolated) return;
						const y = s && l ? "3" : l ? "2" : "1";
						b instanceof URLSearchParams ? b.set(p, y) : (b[p] = y);
					}
					n.addSearchParam = f;
				})(c || (e.COI = c = {}));
			},
		),
		define(
			de[536],
			he([1, 0, 455, 23, 12, 28, 9]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tq = u),
					(e.$Uq = a),
					(w = mt(w));
				class d {
					constructor(c, n, g) {
						(this.id = c), (this.dependencies = n), (this.callback = g);
					}
				}
				class m {
					static {
						this.INSTANCE = new m();
					}
					constructor() {
						(this.a =
							typeof self == "object" &&
							self.constructor &&
							self.constructor.name === "DedicatedWorkerGlobalScope"),
							(this.b = typeof document == "object"),
							(this.c = []),
							(this.d = !1);
					}
					g() {
						this.d ||
							((this.d = !0),
							(globalThis.define = (c, n, g) => {
								typeof c != "string" && ((g = n), (n = c), (c = null)),
									(typeof n != "object" || !Array.isArray(n)) &&
										((g = n), (n = null)),
									this.c.push(new d(c, n, g));
							}),
							(globalThis.define.amd = !0),
							this.b
								? (this.f =
										globalThis._VSCODE_WEB_PACKAGE_TTP ??
										window.trustedTypes?.createPolicy("amdLoader", {
											createScriptURL(c) {
												if (
													c.startsWith(window.location.origin) ||
													c.startsWith(
														`${i.Schemas.vscodeFileResource}://${i.$6g}`,
													)
												)
													return c;
												throw new Error(
													`[trusted_script_src] Invalid script url: ${c}`,
												);
											},
										}))
								: this.a &&
									(this.f =
										globalThis._VSCODE_WEB_PACKAGE_TTP ??
										globalThis.trustedTypes?.createPolicy("amdLoader", {
											createScriptURL(c) {
												return c;
											},
										})));
					}
					async load(c) {
						this.g();
						const n = await (this.a
							? this.i(c)
							: this.b
								? this.h(c)
								: this.j(c));
						if (!n) {
							console.warn(`Did not receive a define call from script ${c}`);
							return;
						}
						const g = {},
							p = [],
							o = [];
						if (Array.isArray(n.dependencies))
							for (const f of n.dependencies)
								f === "exports" ? p.push(g) : o.push(f);
						if (o.length > 0)
							throw new Error(
								`Cannot resolve dependencies for script ${c}. The dependencies are: ${o.join(", ")}`,
							);
						return typeof n.callback == "function"
							? (n.callback(...p) ?? g)
							: n.callback;
					}
					h(c) {
						return new Promise((n, g) => {
							const p = document.createElement("script");
							p.setAttribute("async", "async"),
								p.setAttribute("type", "text/javascript");
							const o = () => {
									p.removeEventListener("load", f),
										p.removeEventListener("error", b);
								},
								f = (s) => {
									o(), n(this.c.pop());
								},
								b = (s) => {
									o(), g(s);
								};
							p.addEventListener("load", f),
								p.addEventListener("error", b),
								this.f && (c = this.f.createScriptURL(c)),
								p.setAttribute("src", c),
								window.document.getElementsByTagName("head")[0].appendChild(p);
						});
					}
					async i(c) {
						return (
							this.f && (c = this.f.createScriptURL(c)),
							t.$V
								? await new Promise((n, g) => {
										ce([c], n, g);
									}).then(mt)
								: importScripts(c),
							this.c.pop()
						);
					}
					async j(c) {
						try {
							const n = globalThis._VSCODE_NODE_MODULES.fs,
								g = globalThis._VSCODE_NODE_MODULES.vm,
								p = globalThis._VSCODE_NODE_MODULES.module,
								o = C.URI.parse(c).fsPath,
								f = n.readFileSync(o).toString(),
								b = p.wrap(f.replace(/^#!.*/, ""));
							return new g.Script(b).runInThisContext().apply(), this.c.pop();
						} catch (n) {
							throw n;
						}
					}
				}
				const r = new Map();
				async function u(h, c, n) {
					if (t.$V) {
						n === void 0 &&
							(n = !!(
								globalThis._VSCODE_PRODUCT_JSON ??
								globalThis.vscode?.context?.configuration()?.product
							)?.commit);
						const g = c ? `${h}/${c}` : h;
						if (r.has(g)) return r.get(g);
						let p;
						if (/^\w[\w\d+.-]*:\/\//.test(g)) p = g;
						else {
							const s = `${t.$W && n && !w.$r ? i.$4g : i.$3g}/${g}`;
							p = i.$7g.asBrowserUri(s).toString(!0);
						}
						const o = m.INSTANCE.load(p);
						return r.set(g, o), o;
					} else
						return await new Promise((g, p) => {
							ce([h], g, p);
						}).then(mt);
				}
				function a(h, c) {
					(0, E.$vg)(t.$V);
					const g = !!(
							globalThis._VSCODE_PRODUCT_JSON ??
							globalThis.vscode?.context?.configuration()?.product
						)?.commit,
						p = t.$W && g && !w.$r,
						o = `${h}/${c}`,
						b = `${p ? i.$4g : i.$3g}/${o}`;
					return i.$7g.asBrowserUri(b).toString(!0);
				}
			},
		),
		define(
			de[19],
			he([1, 0, 120, 249, 23, 54, 12, 37, 9]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.DataUri =
						e.$vh =
						e.$uh =
						e.$th =
						e.$sh =
						e.$rh =
						e.$qh =
						e.$ph =
						e.$oh =
						e.$nh =
						e.$mh =
						e.$lh =
						e.$kh =
						e.$jh =
						e.$ih =
						e.$hh =
						e.$gh =
						e.$fh =
						e.$eh =
						e.$dh =
						e.$ch =
							void 0),
					(e.$bh = r),
					(e.$wh = a),
					(e.$xh = c),
					(i = mt(i)),
					(E = mt(E));
				function r(n) {
					return (0, m.$Cc)(n, !0);
				}
				class u {
					constructor(g) {
						this.a = g;
					}
					compare(g, p, o = !1) {
						return g === p
							? 0
							: (0, d.$Ff)(
									this.getComparisonKey(g, o),
									this.getComparisonKey(p, o),
								);
					}
					isEqual(g, p, o = !1) {
						return g === p
							? !0
							: !g || !p
								? !1
								: this.getComparisonKey(g, o) === this.getComparisonKey(p, o);
					}
					getComparisonKey(g, p = !1) {
						return g
							.with({
								path: this.a(g) ? g.path.toLowerCase() : void 0,
								fragment: p ? null : void 0,
							})
							.toString();
					}
					ignorePathCasing(g) {
						return this.a(g);
					}
					isEqualOrParent(g, p, o = !1) {
						if (g.scheme === p.scheme) {
							if (g.scheme === w.Schemas.file)
								return (
									i.$Lg(r(g), r(p), this.a(g)) &&
									g.query === p.query &&
									(o || g.fragment === p.fragment)
								);
							if ((0, e.$sh)(g.authority, p.authority))
								return (
									i.$Lg(g.path, p.path, this.a(g), "/") &&
									g.query === p.query &&
									(o || g.fragment === p.fragment)
								);
						}
						return !1;
					}
					joinPath(g, ...p) {
						return m.URI.joinPath(g, ...p);
					}
					basenameOrAuthority(g) {
						return (0, e.$kh)(g) || g.authority;
					}
					basename(g) {
						return E.$lc.basename(g.path);
					}
					extname(g) {
						return E.$lc.extname(g.path);
					}
					dirname(g) {
						if (g.path.length === 0) return g;
						let p;
						return (
							g.scheme === w.Schemas.file
								? (p = m.URI.file(E.$rc(r(g))).path)
								: ((p = E.$lc.dirname(g.path)),
									g.authority &&
										p.length &&
										p.charCodeAt(0) !== t.CharCode.Slash &&
										(console.error(
											`dirname("${g.toString})) resulted in a relative path`,
										),
										(p = "/"))),
							g.with({ path: p })
						);
					}
					normalizePath(g) {
						if (!g.path.length) return g;
						let p;
						return (
							g.scheme === w.Schemas.file
								? (p = m.URI.file(E.$mc(r(g))).path)
								: (p = E.$lc.normalize(g.path)),
							g.with({ path: p })
						);
					}
					relativePath(g, p) {
						if (g.scheme !== p.scheme || !(0, e.$sh)(g.authority, p.authority))
							return;
						if (g.scheme === w.Schemas.file) {
							const b = E.$qc(r(g), r(p));
							return C.$l ? i.$Fg(b) : b;
						}
						let o = g.path || "/";
						const f = p.path || "/";
						if (this.a(g)) {
							let b = 0;
							for (
								const s = Math.min(o.length, f.length);
								b < s &&
								!(
									o.charCodeAt(b) !== f.charCodeAt(b) &&
									o.charAt(b).toLowerCase() !== f.charAt(b).toLowerCase()
								);
								b++
							);
							o = f.substr(0, b) + o.substr(b);
						}
						return E.$lc.relative(o, f);
					}
					resolvePath(g, p) {
						if (g.scheme === w.Schemas.file) {
							const o = m.URI.file(E.$pc(r(g), p));
							return g.with({ authority: o.authority, path: o.path });
						}
						return (p = i.$Gg(p)), g.with({ path: E.$lc.resolve(g.path, p) });
					}
					isAbsolutePath(g) {
						return !!g.path && g.path[0] === "/";
					}
					isEqualAuthority(g, p) {
						return (
							g === p || (g !== void 0 && p !== void 0 && (0, d.$Mf)(g, p))
						);
					}
					hasTrailingPathSeparator(g, p = E.sep) {
						if (g.scheme === w.Schemas.file) {
							const o = r(g);
							return o.length > i.$Hg(o).length && o[o.length - 1] === p;
						} else {
							const o = g.path;
							return (
								o.length > 1 &&
								o.charCodeAt(o.length - 1) === t.CharCode.Slash &&
								!/^[a-zA-Z]:(\/$|\\$)/.test(g.fsPath)
							);
						}
					}
					removeTrailingPathSeparator(g, p = E.sep) {
						return (0, e.$th)(g, p)
							? g.with({ path: g.path.substr(0, g.path.length - 1) })
							: g;
					}
					addTrailingPathSeparator(g, p = E.sep) {
						let o = !1;
						if (g.scheme === w.Schemas.file) {
							const f = r(g);
							o =
								f !== void 0 &&
								f.length === i.$Hg(f).length &&
								f[f.length - 1] === p;
						} else {
							p = "/";
							const f = g.path;
							o =
								f.length === 1 &&
								f.charCodeAt(f.length - 1) === t.CharCode.Slash;
						}
						return !o && !(0, e.$th)(g, p) ? g.with({ path: g.path + "/" }) : g;
					}
				}
				(e.$ch = u),
					(e.$dh = new u(() => !1)),
					(e.$eh = new u((n) => (n.scheme === w.Schemas.file ? !C.$n : !0))),
					(e.$fh = new u((n) => !0)),
					(e.$gh = e.$dh.isEqual.bind(e.$dh)),
					(e.$hh = e.$dh.isEqualOrParent.bind(e.$dh)),
					(e.$ih = e.$dh.getComparisonKey.bind(e.$dh)),
					(e.$jh = e.$dh.basenameOrAuthority.bind(e.$dh)),
					(e.$kh = e.$dh.basename.bind(e.$dh)),
					(e.$lh = e.$dh.extname.bind(e.$dh)),
					(e.$mh = e.$dh.dirname.bind(e.$dh)),
					(e.$nh = e.$dh.joinPath.bind(e.$dh)),
					(e.$oh = e.$dh.normalizePath.bind(e.$dh)),
					(e.$ph = e.$dh.relativePath.bind(e.$dh)),
					(e.$qh = e.$dh.resolvePath.bind(e.$dh)),
					(e.$rh = e.$dh.isAbsolutePath.bind(e.$dh)),
					(e.$sh = e.$dh.isEqualAuthority.bind(e.$dh)),
					(e.$th = e.$dh.hasTrailingPathSeparator.bind(e.$dh)),
					(e.$uh = e.$dh.removeTrailingPathSeparator.bind(e.$dh)),
					(e.$vh = e.$dh.addTrailingPathSeparator.bind(e.$dh));
				function a(n, g) {
					const p = [];
					for (let o = 0; o < n.length; o++) {
						const f = g(n[o]);
						n.some((b, s) => (s === o ? !1 : (0, e.$hh)(f, g(b)))) ||
							p.push(n[o]);
					}
					return p;
				}
				var h;
				(function (n) {
					(n.META_DATA_LABEL = "label"),
						(n.META_DATA_DESCRIPTION = "description"),
						(n.META_DATA_SIZE = "size"),
						(n.META_DATA_MIME = "mime");
					function g(p) {
						const o = new Map();
						p.path
							.substring(p.path.indexOf(";") + 1, p.path.lastIndexOf(";"))
							.split(";")
							.forEach((s) => {
								const [l, y] = s.split(":");
								l && y && o.set(l, y);
							});
						const b = p.path.substring(0, p.path.indexOf(";"));
						return b && o.set(n.META_DATA_MIME, b), o;
					}
					n.parseMetaData = g;
				})(h || (e.DataUri = h = {}));
				function c(n, g, p) {
					if (g) {
						let o = n.path;
						return (
							o && o[0] !== E.$lc.sep && (o = E.$lc.sep + o),
							n.with({ scheme: p, authority: g, path: o })
						);
					}
					return n.with({ scheme: p });
				}
			},
		),
		define(
			de[15],
			he([1, 0, 33, 29, 6, 3, 19, 12, 649, 149]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$di =
						e.$bi =
						e.$ai =
						e.$_h =
						e.$$h =
						e.Promises =
						e.$0h =
						e.$9h =
						e.$8h =
						e.$6h =
						e.$5h =
						e.$4h =
						e.$3h =
						e.$2h =
						e.$1h =
						e.$Zh =
						e.$Yh =
						e.$Xh =
						e.$Wh =
						e.$Vh =
						e.$Uh =
						e.$Th =
						e.$Sh =
						e.$Mh =
						e.$Lh =
						e.$Kh =
						e.$Jh =
						e.$Ih =
						e.$Hh =
						e.$Gh =
							void 0),
					(e.$yh = u),
					(e.$zh = a),
					(e.$Ah = h),
					(e.$Bh = c),
					(e.$Ch = n),
					(e.$Dh = g),
					(e.$Eh = p),
					(e.$Fh = o),
					(e.$Nh = T),
					(e.$Oh = P),
					(e.$Ph = k),
					(e.$Qh = L),
					(e.$Rh = D),
					(e.$7h = V),
					(e.$ci = te);
				function u(Z) {
					return !!Z && typeof Z.then == "function";
				}
				function a(Z) {
					const se = new t.$Ce(),
						re = Z(se.token),
						le = new Promise((oe, ae) => {
							const pe = se.token.onCancellationRequested(() => {
								pe.dispose(), ae(new i.$9());
							});
							Promise.resolve(re).then(
								($e) => {
									pe.dispose(), se.dispose(), oe($e);
								},
								($e) => {
									pe.dispose(), se.dispose(), ae($e);
								},
							);
						});
					return new (class {
						cancel() {
							se.cancel(), se.dispose();
						}
						then(oe, ae) {
							return le.then(oe, ae);
						}
						catch(oe) {
							return this.then(void 0, oe);
						}
						finally(oe) {
							return le.finally(oe);
						}
					})();
				}
				function h(Z, se, re) {
					return new Promise((le, oe) => {
						const ae = se.onCancellationRequested(() => {
							ae.dispose(), le(re);
						});
						Z.then(le, oe).finally(() => ae.dispose());
					});
				}
				function c(Z, se) {
					return new Promise((re, le) => {
						const oe = se.onCancellationRequested(() => {
							oe.dispose(), le(new i.$9());
						});
						Z.then(re, le).finally(() => oe.dispose());
					});
				}
				async function n(Z) {
					let se = -1;
					const re = Z.map((le, oe) => le.then((ae) => ((se = oe), ae)));
					try {
						return await Promise.race(re);
					} finally {
						Z.forEach((le, oe) => {
							oe !== se && le.cancel();
						});
					}
				}
				function g(Z, se, re) {
					let le;
					const oe = setTimeout(() => {
						le?.(void 0), re?.();
					}, se);
					return Promise.race([
						Z.finally(() => clearTimeout(oe)),
						new Promise((ae) => (le = ae)),
					]);
				}
				function p(Z) {
					return new Promise((se, re) => {
						const le = Z();
						u(le) ? le.then(se, re) : se(le);
					});
				}
				function o() {
					let Z, se;
					return {
						promise: new Promise((le, oe) => {
							(Z = le), (se = oe);
						}),
						resolve: Z,
						reject: se,
					};
				}
				class f {
					constructor() {
						(this.f = !1), (this.a = null), (this.b = null), (this.d = null);
					}
					queue(se) {
						if (this.f)
							return Promise.reject(new Error("Throttler is disposed"));
						if (this.a) {
							if (((this.d = se), !this.b)) {
								const re = () => {
									if (((this.b = null), this.f)) return;
									const le = this.queue(this.d);
									return (this.d = null), le;
								};
								this.b = new Promise((le) => {
									this.a.then(re, re).then(le);
								});
							}
							return new Promise((re, le) => {
								this.b.then(re, le);
							});
						}
						return (
							(this.a = se()),
							new Promise((re, le) => {
								this.a.then(
									(oe) => {
										(this.a = null), re(oe);
									},
									(oe) => {
										(this.a = null), le(oe);
									},
								);
							})
						);
					}
					dispose() {
						this.f = !0;
					}
				}
				e.$Gh = f;
				class b {
					constructor() {
						this.a = Promise.resolve(null);
					}
					queue(se) {
						return (this.a = this.a.then(
							() => se(),
							() => se(),
						));
					}
				}
				e.$Hh = b;
				class s {
					constructor() {
						this.a = new Map();
					}
					queue(se, re) {
						const oe = (this.a.get(se) ?? Promise.resolve())
							.catch(() => {})
							.then(re)
							.finally(() => {
								this.a.get(se) === oe && this.a.delete(se);
							});
						return this.a.set(se, oe), oe;
					}
				}
				e.$Ih = s;
				const l = (Z, se) => {
						let re = !0;
						const le = setTimeout(() => {
							(re = !1), se();
						}, Z);
						return {
							isTriggered: () => re,
							dispose: () => {
								clearTimeout(le), (re = !1);
							},
						};
					},
					y = (Z) => {
						let se = !0;
						return (
							queueMicrotask(() => {
								se && ((se = !1), Z());
							}),
							{
								isTriggered: () => se,
								dispose: () => {
									se = !1;
								},
							}
						);
					};
				class $ {
					constructor(se) {
						(this.defaultDelay = se),
							(this.a = null),
							(this.b = null),
							(this.d = null),
							(this.f = null),
							(this.g = null);
					}
					trigger(se, re = this.defaultDelay) {
						(this.g = se),
							this.h(),
							this.b ||
								(this.b = new Promise((oe, ae) => {
									(this.d = oe), (this.f = ae);
								}).then(() => {
									if (((this.b = null), (this.d = null), this.g)) {
										const oe = this.g;
										return (this.g = null), oe();
									}
								}));
						const le = () => {
							(this.a = null), this.d?.(null);
						};
						return (this.a = re === m.$me ? y(le) : l(re, le)), this.b;
					}
					isTriggered() {
						return !!this.a?.isTriggered();
					}
					cancel() {
						this.h(), this.b && (this.f?.(new i.$9()), (this.b = null));
					}
					h() {
						this.a?.dispose(), (this.a = null);
					}
					dispose() {
						this.cancel();
					}
				}
				e.$Jh = $;
				class v {
					constructor(se) {
						(this.a = new $(se)), (this.b = new f());
					}
					trigger(se, re) {
						return this.a.trigger(() => this.b.queue(se), re);
					}
					isTriggered() {
						return this.a.isTriggered();
					}
					cancel() {
						this.a.cancel();
					}
					dispose() {
						this.a.dispose(), this.b.dispose();
					}
				}
				e.$Kh = v;
				class S {
					constructor() {
						(this.a = !1),
							(this.b = new Promise((se, re) => {
								this.d = se;
							}));
					}
					isOpen() {
						return this.a;
					}
					open() {
						(this.a = !0), this.d(!0);
					}
					wait() {
						return this.b;
					}
				}
				e.$Lh = S;
				class I extends S {
					constructor(se) {
						super(), (this.f = setTimeout(() => this.open(), se));
					}
					open() {
						clearTimeout(this.f), super.open();
					}
				}
				e.$Mh = I;
				function T(Z, se) {
					return se
						? new Promise((re, le) => {
								const oe = setTimeout(() => {
										ae.dispose(), re();
									}, Z),
									ae = se.onCancellationRequested(() => {
										clearTimeout(oe), ae.dispose(), le(new i.$9());
									});
							})
						: a((re) => T(Z, re));
				}
				function P(Z, se = 0, re) {
					const le = setTimeout(() => {
							Z(), re && oe.dispose();
						}, se),
						oe = (0, E.$Yc)(() => {
							clearTimeout(le), re?.deleteAndLeak(oe);
						});
					return re?.add(oe), oe;
				}
				function k(Z) {
					const se = [];
					let re = 0;
					const le = Z.length;
					function oe() {
						return re < le ? Z[re++]() : null;
					}
					function ae(pe) {
						pe != null && se.push(pe);
						const $e = oe();
						return $e ? $e.then(ae) : Promise.resolve(se);
					}
					return Promise.resolve(null).then(ae);
				}
				function L(Z, se = (le) => !!le, re = null) {
					let le = 0;
					const oe = Z.length,
						ae = () => {
							if (le >= oe) return Promise.resolve(re);
							const pe = Z[le++];
							return Promise.resolve(pe()).then((ye) =>
								se(ye) ? Promise.resolve(ye) : ae(),
							);
						};
					return ae();
				}
				function D(Z, se = (le) => !!le, re = null) {
					if (Z.length === 0) return Promise.resolve(re);
					let le = Z.length;
					const oe = () => {
						le = -1;
						for (const ae of Z) ae.cancel?.();
					};
					return new Promise((ae, pe) => {
						for (const $e of Z)
							$e.then((ye) => {
								--le >= 0 && se(ye) ? (oe(), ae(ye)) : le === 0 && ae(re);
							}).catch((ye) => {
								--le >= 0 && (oe(), pe(ye));
							});
					});
				}
				class M {
					constructor(se) {
						(this.a = 0),
							(this.b = !1),
							(this.f = se),
							(this.g = []),
							(this.d = 0),
							(this.h = new w.$re());
					}
					whenIdle() {
						return this.size > 0
							? w.Event.toPromise(this.onDrained)
							: Promise.resolve();
					}
					get onDrained() {
						return this.h.event;
					}
					get size() {
						return this.a;
					}
					queue(se) {
						if (this.b) throw new Error("Object has been disposed");
						return (
							this.a++,
							new Promise((re, le) => {
								this.g.push({ factory: se, c: re, e: le }), this.j();
							})
						);
					}
					j() {
						for (; this.g.length && this.d < this.f; ) {
							const se = this.g.shift();
							this.d++;
							const re = se.factory();
							re.then(se.c, se.e),
								re.then(
									() => this.k(),
									() => this.k(),
								);
						}
					}
					k() {
						this.b ||
							(this.d--,
							--this.a === 0 && this.h.fire(),
							this.g.length > 0 && this.j());
					}
					clear() {
						if (this.b) throw new Error("Object has been disposed");
						(this.g.length = 0), (this.a = this.d);
					}
					dispose() {
						(this.b = !0), (this.g.length = 0), (this.a = 0), this.h.dispose();
					}
				}
				e.$Sh = M;
				class N extends M {
					constructor() {
						super(1);
					}
				}
				e.$Th = N;
				class A {
					constructor() {
						(this.a = new G()), (this.b = 0);
					}
					queue(se) {
						return this.a.isRunning()
							? this.a.queue(() => this.a.run(this.b++, se()))
							: this.a.run(this.b++, se());
					}
				}
				e.$Uh = A;
				class R {
					constructor() {
						(this.a = new Map()),
							(this.b = new Set()),
							(this.d = void 0),
							(this.f = 0);
					}
					async whenDrained() {
						if (this.g()) return;
						const se = new W();
						return this.b.add(se), se.p;
					}
					g() {
						for (const [, se] of this.a) if (se.size > 0) return !1;
						return !0;
					}
					queueSize(se, re = C.$dh) {
						const le = re.getComparisonKey(se);
						return this.a.get(le)?.size ?? 0;
					}
					queueFor(se, re, le = C.$dh) {
						const oe = le.getComparisonKey(se);
						let ae = this.a.get(oe);
						if (!ae) {
							ae = new N();
							const pe = this.f++,
								$e = w.Event.once(ae.onDrained)(() => {
									ae?.dispose(),
										this.a.delete(oe),
										this.h(),
										this.d?.deleteAndDispose(pe),
										this.d?.size === 0 && (this.d.dispose(), (this.d = void 0));
								});
							this.d || (this.d = new E.$0c()),
								this.d.set(pe, $e),
								this.a.set(oe, ae);
						}
						return ae.queue(re);
					}
					h() {
						this.g() && this.j();
					}
					j() {
						for (const se of this.b) se.complete();
						this.b.clear();
					}
					dispose() {
						for (const [, se] of this.a) se.dispose();
						this.a.clear(), this.j(), this.d?.dispose();
					}
				}
				e.$Vh = R;
				class O {
					constructor(se, re) {
						(this.b = !1),
							(this.a = -1),
							typeof se == "function" &&
								typeof re == "number" &&
								this.setIfNotSet(se, re);
					}
					dispose() {
						this.cancel(), (this.b = !0);
					}
					cancel() {
						this.a !== -1 && (clearTimeout(this.a), (this.a = -1));
					}
					cancelAndSet(se, re) {
						if (this.b)
							throw new i.$gb(
								"Calling 'cancelAndSet' on a disposed TimeoutTimer",
							);
						this.cancel(),
							(this.a = setTimeout(() => {
								(this.a = -1), se();
							}, re));
					}
					setIfNotSet(se, re) {
						if (this.b)
							throw new i.$gb(
								"Calling 'setIfNotSet' on a disposed TimeoutTimer",
							);
						this.a === -1 &&
							(this.a = setTimeout(() => {
								(this.a = -1), se();
							}, re));
					}
				}
				e.$Wh = O;
				class B {
					constructor() {
						(this.d = void 0), (this.f = !1);
					}
					cancel() {
						this.d?.dispose(), (this.d = void 0);
					}
					cancelAndSet(se, re, le = globalThis) {
						if (this.f)
							throw new i.$gb(
								"Calling 'cancelAndSet' on a disposed IntervalTimer",
							);
						this.cancel();
						const oe = le.setInterval(() => {
							se();
						}, re);
						this.d = (0, E.$Yc)(() => {
							le.clearInterval(oe), (this.d = void 0);
						});
					}
					dispose() {
						this.cancel(), (this.f = !0);
					}
				}
				e.$Xh = B;
				class U {
					constructor(se, re) {
						(this.b = -1),
							(this.a = se),
							(this.d = re),
							(this.f = this.g.bind(this));
					}
					dispose() {
						this.cancel(), (this.a = null);
					}
					cancel() {
						this.isScheduled() && (clearTimeout(this.b), (this.b = -1));
					}
					schedule(se = this.d) {
						this.cancel(), (this.b = setTimeout(this.f, se));
					}
					get delay() {
						return this.d;
					}
					set delay(se) {
						this.d = se;
					}
					isScheduled() {
						return this.b !== -1;
					}
					flush() {
						this.isScheduled() && (this.cancel(), this.h());
					}
					g() {
						(this.b = -1), this.a && this.h();
					}
					h() {
						this.a?.();
					}
				}
				e.$Yh = U;
				class z {
					constructor(se, re) {
						re % 1e3 !== 0 &&
							console.warn(
								`ProcessTimeRunOnceScheduler resolution is 1s, ${re}ms is not a multiple of 1000ms.`,
							),
							(this.a = se),
							(this.b = re),
							(this.d = 0),
							(this.f = -1),
							(this.g = this.h.bind(this));
					}
					dispose() {
						this.cancel(), (this.a = null);
					}
					cancel() {
						this.isScheduled() && (clearInterval(this.f), (this.f = -1));
					}
					schedule(se = this.b) {
						se % 1e3 !== 0 &&
							console.warn(
								`ProcessTimeRunOnceScheduler resolution is 1s, ${se}ms is not a multiple of 1000ms.`,
							),
							this.cancel(),
							(this.d = Math.ceil(se / 1e3)),
							(this.f = setInterval(this.g, 1e3));
					}
					isScheduled() {
						return this.f !== -1;
					}
					h() {
						this.d--,
							!(this.d > 0) &&
								(clearInterval(this.f), (this.f = -1), this.a?.());
					}
				}
				e.$Zh = z;
				class F extends U {
					constructor(se, re) {
						super(se, re), (this.j = []);
					}
					work(se) {
						this.j.push(se), this.isScheduled() || this.schedule();
					}
					h() {
						const se = this.j;
						(this.j = []), this.a?.(se);
					}
					dispose() {
						(this.j = []), super.dispose();
					}
				}
				e.$1h = F;
				class x extends E.$1c {
					constructor(se, re) {
						super(),
							(this.g = se),
							(this.h = re),
							(this.a = []),
							(this.b = this.D(new E.$2c())),
							(this.f = !1);
					}
					get pending() {
						return this.a.length;
					}
					work(se) {
						if (this.f) return !1;
						if (typeof this.g.maxBufferedWork == "number") {
							if (this.b.value) {
								if (this.pending + se.length > this.g.maxBufferedWork)
									return !1;
							} else if (
								this.pending + se.length - this.g.maxWorkChunkSize >
								this.g.maxBufferedWork
							)
								return !1;
						}
						for (const re of se) this.a.push(re);
						return this.b.value || this.j(), !0;
					}
					j() {
						this.h(this.a.splice(0, this.g.maxWorkChunkSize)),
							this.a.length > 0 &&
								((this.b.value = new U(() => {
									this.b.clear(), this.j();
								}, this.g.throttleDelay)),
								this.b.value.schedule());
					}
					dispose() {
						super.dispose(), (this.f = !0);
					}
				}
				(e.$2h = x),
					(function () {
						typeof globalThis.requestIdleCallback != "function" ||
						typeof globalThis.cancelIdleCallback != "function"
							? (e.$4h = (Z, se) => {
									(0, d.$E)(() => {
										if (re) return;
										const le = Date.now() + 15;
										se(
											Object.freeze({
												didTimeout: !0,
												timeRemaining() {
													return Math.max(0, le - Date.now());
												},
											}),
										);
									});
									let re = !1;
									return {
										dispose() {
											re || (re = !0);
										},
									};
								})
							: (e.$4h = (Z, se, re) => {
									const le = Z.requestIdleCallback(
										se,
										typeof re == "number" ? { timeout: re } : void 0,
									);
									let oe = !1;
									return {
										dispose() {
											oe || ((oe = !0), Z.cancelIdleCallback(le));
										},
									};
								}),
							(e.$3h = (Z) => (0, e.$4h)(globalThis, Z));
					})();
				class H {
					constructor(se, re) {
						(this.g = !1),
							(this.d = () => {
								try {
									this.j = re();
								} catch (le) {
									this.l = le;
								} finally {
									this.g = !0;
								}
							}),
							(this.f = (0, e.$4h)(se, () => this.d()));
					}
					dispose() {
						this.f.dispose();
					}
					get value() {
						if ((this.g || (this.f.dispose(), this.d()), this.l)) throw this.l;
						return this.j;
					}
					get isInitialized() {
						return this.g;
					}
				}
				e.$5h = H;
				class q extends H {
					constructor(se) {
						super(globalThis, se);
					}
				}
				e.$6h = q;
				async function V(Z, se, re) {
					let le;
					for (let oe = 0; oe < re; oe++)
						try {
							return await Z();
						} catch (ae) {
							(le = ae), await T(se);
						}
					throw le;
				}
				class G {
					isRunning(se) {
						return typeof se == "number" ? this.a?.taskId === se : !!this.a;
					}
					get running() {
						return this.a?.promise;
					}
					cancelRunning() {
						this.a?.cancel();
					}
					run(se, re, le) {
						return (
							(this.a = { taskId: se, cancel: () => le?.(), promise: re }),
							re.then(
								() => this.d(se),
								() => this.d(se),
							),
							re
						);
					}
					d(se) {
						this.a && se === this.a.taskId && ((this.a = void 0), this.f());
					}
					f() {
						if (this.b) {
							const se = this.b;
							(this.b = void 0),
								se.run().then(se.promiseResolve, se.promiseReject);
						}
					}
					queue(se) {
						if (this.b) this.b.run = se;
						else {
							const { promise: re, resolve: le, reject: oe } = o();
							this.b = {
								run: se,
								promise: re,
								promiseResolve: le,
								promiseReject: oe,
							};
						}
						return this.b.promise;
					}
					hasQueued() {
						return !!this.b;
					}
					async join() {
						return this.b?.promise ?? this.a?.promise;
					}
				}
				e.$8h = G;
				class K {
					constructor(se, re = () => Date.now()) {
						(this.d = se), (this.f = re), (this.a = 0), (this.b = 0);
					}
					increment() {
						const se = this.f();
						return (
							se - this.a > this.d && ((this.a = se), (this.b = 0)),
							this.b++,
							this.b
						);
					}
				}
				e.$9h = K;
				var J;
				(function (Z) {
					(Z[(Z.Resolved = 0)] = "Resolved"),
						(Z[(Z.Rejected = 1)] = "Rejected");
				})(J || (J = {}));
				class W {
					get isRejected() {
						return this.d?.outcome === J.Rejected;
					}
					get isResolved() {
						return this.d?.outcome === J.Resolved;
					}
					get isSettled() {
						return !!this.d;
					}
					get value() {
						return this.d?.outcome === J.Resolved ? this.d?.value : void 0;
					}
					constructor() {
						this.p = new Promise((se, re) => {
							(this.a = se), (this.b = re);
						});
					}
					complete(se) {
						return new Promise((re) => {
							this.a(se), (this.d = { outcome: J.Resolved, value: se }), re();
						});
					}
					error(se) {
						return new Promise((re) => {
							this.b(se), (this.d = { outcome: J.Rejected, value: se }), re();
						});
					}
					cancel() {
						return this.error(new i.$9());
					}
				}
				e.$0h = W;
				var X;
				(function (Z) {
					async function se(le) {
						let oe;
						const ae = await Promise.all(
							le.map((pe) =>
								pe.then(
									($e) => $e,
									($e) => {
										oe || (oe = $e);
									},
								),
							),
						);
						if (typeof oe < "u") throw oe;
						return ae;
					}
					Z.settled = se;
					function re(le) {
						return new Promise(async (oe, ae) => {
							try {
								await le(oe, ae);
							} catch (pe) {
								ae(pe);
							}
						});
					}
					Z.withAsyncBody = re;
				})(X || (e.Promises = X = {}));
				class Y {
					get value() {
						return this.a;
					}
					get error() {
						return this.b;
					}
					get isResolved() {
						return this.d;
					}
					constructor(se) {
						(this.a = void 0),
							(this.b = void 0),
							(this.d = !1),
							(this.promise = se.then(
								(re) => ((this.a = re), (this.d = !0), re),
								(re) => {
									throw ((this.b = re), (this.d = !0), re);
								},
							));
					}
					requireValue() {
						if (!this.d) throw new i.$gb("Promise is not resolved yet");
						if (this.b) throw this.b;
						return this.a;
					}
				}
				e.$$h = Y;
				class ie {
					constructor(se) {
						(this.b = se), (this.a = new r.$Y(() => new Y(this.b())));
					}
					requireValue() {
						return this.a.value.requireValue();
					}
					getPromise() {
						return this.a.value.promise;
					}
					get currentValue() {
						return this.a.rawValue?.value;
					}
				}
				e.$_h = ie;
				var ne;
				(function (Z) {
					(Z[(Z.Initial = 0)] = "Initial"),
						(Z[(Z.DoneOK = 1)] = "DoneOK"),
						(Z[(Z.DoneError = 2)] = "DoneError");
				})(ne || (ne = {}));
				class ee {
					static fromArray(se) {
						return new ee((re) => {
							re.emitMany(se);
						});
					}
					static fromPromise(se) {
						return new ee(async (re) => {
							re.emitMany(await se);
						});
					}
					static fromPromises(se) {
						return new ee(async (re) => {
							await Promise.all(se.map(async (le) => re.emitOne(await le)));
						});
					}
					static merge(se) {
						return new ee(async (re) => {
							await Promise.all(
								se.map(async (le) => {
									for await (const oe of le) re.emitOne(oe);
								}),
							);
						});
					}
					static {
						this.EMPTY = ee.fromArray([]);
					}
					constructor(se, re) {
						(this.a = ne.Initial),
							(this.b = []),
							(this.d = null),
							(this.f = re),
							(this.g = new w.$re()),
							queueMicrotask(async () => {
								const le = {
									emitOne: (oe) => this.h(oe),
									emitMany: (oe) => this.j(oe),
									reject: (oe) => this.l(oe),
								};
								try {
									await Promise.resolve(se(le)), this.k();
								} catch (oe) {
									this.l(oe);
								} finally {
									(le.emitOne = void 0),
										(le.emitMany = void 0),
										(le.reject = void 0);
								}
							});
					}
					[Symbol.asyncIterator]() {
						let se = 0;
						return {
							next: async () => {
								do {
									if (this.a === ne.DoneError) throw this.d;
									if (se < this.b.length)
										return { done: !1, value: this.b[se++] };
									if (this.a === ne.DoneOK) return { done: !0, value: void 0 };
									await w.Event.toPromise(this.g.event);
								} while (!0);
							},
							return: async () => (this.f?.(), { done: !0, value: void 0 }),
						};
					}
					static map(se, re) {
						return new ee(async (le) => {
							for await (const oe of se) le.emitOne(re(oe));
						});
					}
					map(se) {
						return ee.map(this, se);
					}
					static filter(se, re) {
						return new ee(async (le) => {
							for await (const oe of se) re(oe) && le.emitOne(oe);
						});
					}
					filter(se) {
						return ee.filter(this, se);
					}
					static coalesce(se) {
						return ee.filter(se, (re) => !!re);
					}
					coalesce() {
						return ee.coalesce(this);
					}
					static async toPromise(se) {
						const re = [];
						for await (const le of se) re.push(le);
						return re;
					}
					toPromise() {
						return ee.toPromise(this);
					}
					h(se) {
						this.a === ne.Initial && (this.b.push(se), this.g.fire());
					}
					j(se) {
						this.a === ne.Initial &&
							((this.b = this.b.concat(se)), this.g.fire());
					}
					k() {
						this.a === ne.Initial && ((this.a = ne.DoneOK), this.g.fire());
					}
					l(se) {
						this.a === ne.Initial &&
							((this.a = ne.DoneError), (this.d = se), this.g.fire());
					}
				}
				e.$ai = ee;
				class _ extends ee {
					constructor(se, re) {
						super(re), (this.m = se);
					}
					cancel() {
						this.m.cancel();
					}
				}
				e.$bi = _;
				function te(Z) {
					const se = new t.$Ce(),
						re = Z(se.token);
					return new _(se, async (le) => {
						const oe = se.token.onCancellationRequested(() => {
							oe.dispose(), se.dispose(), le.reject(new i.$9());
						});
						try {
							for await (const ae of re) {
								if (se.token.isCancellationRequested) return;
								le.emitOne(ae);
							}
							oe.dispose(), se.dispose();
						} catch (ae) {
							oe.dispose(), se.dispose(), le.reject(ae);
						}
					});
				}
				class Q {
					constructor(se) {
						(this.a = new W()),
							(this.b = new ee((oe) => {
								if (re) {
									oe.reject(re);
									return;
								}
								return (
									le && oe.emitMany(le),
									(this.d = (ae) => oe.reject(ae)),
									(this.f = (ae) => oe.emitOne(ae)),
									this.a.p
								);
							}, se));
						let re, le;
						(this.f = (oe) => {
							le || (le = []), le.push(oe);
						}),
							(this.d = (oe) => {
								re || (re = oe);
							});
					}
					get asyncIterable() {
						return this.b;
					}
					resolve() {
						this.a.complete();
					}
					reject(se) {
						this.d(se), this.a.complete();
					}
					emitOne(se) {
						this.f(se);
					}
				}
				e.$di = Q;
			},
		),
		define(
			de[7],
			he([
				1, 0, 139, 459, 114, 168, 15, 29, 6, 920, 27, 3, 23, 12, 9, 136, 75,
				201,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mhb =
						e.$Hhb =
						e.$Fhb =
						e.$Chb =
						e.DetectedFullscreenMode =
						e.Namespace =
						e.$ahb =
						e.$$gb =
						e.$Tgb =
						e.$pgb =
						e.$jgb =
						e.$hgb =
						e.$ggb =
						e.$fgb =
						e.$agb =
						e.$_fb =
						e.$$fb =
						e.onDidUnregisterWindow =
						e.onWillUnregisterWindow =
						e.onDidRegisterWindow =
						e.hasWindow =
						e.getWindowById =
						e.getWindowId =
						e.getWindowsCount =
						e.getWindows =
						e.getDocument =
						e.getWindow =
						e.registerWindow =
							void 0),
					(e.$9fb = b),
					(e.$0fb = l),
					(e.$bgb = T),
					(e.$cgb = P),
					(e.$dgb = k),
					(e.$egb = L),
					(e.$igb = M),
					(e.$kgb = R),
					(e.$lgb = O),
					(e.$mgb = F),
					(e.$ngb = x),
					(e.$ogb = H),
					(e.$qgb = G),
					(e.size = K),
					(e.$sgb = J),
					(e.$tgb = W),
					(e.$ugb = X),
					(e.$vgb = Y),
					(e.$wgb = ie),
					(e.$xgb = ne),
					(e.$ygb = ee),
					(e.$zgb = _),
					(e.$Agb = Q),
					(e.$Bgb = Z),
					(e.$Cgb = re),
					(e.$Dgb = oe),
					(e.$Egb = ae),
					(e.$Fgb = pe),
					(e.$Ggb = $e),
					(e.$Hgb = ye),
					(e.$Igb = ue),
					(e.$Jgb = fe),
					(e.$Kgb = me),
					(e.$Lgb = ve),
					(e.$Mgb = ge),
					(e.$Ngb = be),
					(e.$Ogb = Ce),
					(e.$Pgb = Fe),
					(e.$Qgb = Oe),
					(e.$Rgb = He),
					(e.$Sgb = Ke),
					(e.$Ugb = Te),
					(e.$Vgb = Ee),
					(e.$Wgb = Ue),
					(e.$Xgb = qe),
					(e.$Ygb = Me),
					(e.$Zgb = De),
					(e.$1gb = Re),
					(e.$2gb = je),
					(e.$3gb = Ve),
					(e.$4gb = Ze),
					(e.$5gb = et),
					(e.$6gb = rt),
					(e.$7gb = ft),
					(e.$8gb = bt),
					(e.$9gb = nt),
					(e.$0gb = lt),
					(e.$_gb = ct),
					(e.$bhb = gt),
					(e.$chb = ht),
					(e.$dhb = Nt),
					(e.$ehb = jt),
					(e.$fhb = ti),
					(e.$ghb = kt),
					(e.$hhb = hi),
					(e.$ = ze),
					(e.join = Xe),
					(e.$khb = It),
					(e.show = Lt),
					(e.hide = xt),
					(e.$nhb = Bt),
					(e.$ohb = Gt),
					(e.$phb = Mt),
					(e.$qhb = Ut),
					(e.$rhb = ei),
					(e.$shb = Dt),
					(e.$thb = Jt),
					(e.$uhb = si),
					(e.$vhb = Zt),
					(e.$whb = ci),
					(e.$xhb = ri),
					(e.$yhb = $i),
					(e.$zhb = Wt),
					(e.$Ahb = at),
					(e.$Bhb = pi),
					(e.$Dhb = Ui),
					(e.$Ehb = Gi),
					(e.$Ghb = Oi),
					(e.h = li),
					(e.$Jhb = Vi),
					(e.$Khb = _t),
					(e.$Lhb = Ft),
					(t = mt(t)),
					(m = mt(m)),
					(r = mt(r)),
					(c = mt(c)),
					(f = (function () {
						const $t = new Map();
						(0, p.$Cfb)(p.$Bfb, 1);
						const ut = { window: p.$Bfb, disposables: new a.$Zc() };
						$t.set(p.$Bfb.vscodeWindowId, ut);
						const Et = new m.$re(),
							Tt = new m.$re(),
							qt = new m.$re();
						function At(Yt, ni) {
							return (
								(typeof Yt == "number" ? $t.get(Yt) : void 0) ??
								(ni ? ut : void 0)
							);
						}
						return {
							onDidRegisterWindow: Et.event,
							onWillUnregisterWindow: qt.event,
							onDidUnregisterWindow: Tt.event,
							registerWindow(Yt) {
								if ($t.has(Yt.vscodeWindowId)) return a.$1c.None;
								const ni = new a.$Zc(),
									bi = { window: Yt, disposables: ni.add(new a.$Zc()) };
								return (
									$t.set(Yt.vscodeWindowId, bi),
									ni.add(
										(0, a.$Yc)(() => {
											$t.delete(Yt.vscodeWindowId), Tt.fire(Yt);
										}),
									),
									ni.add(
										l(Yt, e.$$gb.BEFORE_UNLOAD, () => {
											qt.fire(Yt);
										}),
									),
									Et.fire(bi),
									ni
								);
							},
							getWindows() {
								return $t.values();
							},
							getWindowsCount() {
								return $t.size;
							},
							getWindowId(Yt) {
								return Yt.vscodeWindowId;
							},
							hasWindow(Yt) {
								return $t.has(Yt);
							},
							getWindowById: At,
							getWindow(Yt) {
								const ni = Yt;
								if (ni?.ownerDocument?.defaultView)
									return ni.ownerDocument.defaultView.window;
								const bi = Yt;
								return bi?.view ? bi.view.window : p.$Bfb;
							},
							getDocument(Yt) {
								const ni = Yt;
								return (0, e.getWindow)(ni).document;
							},
						};
					})()),
					(e.registerWindow = f.registerWindow),
					(e.getWindow = f.getWindow),
					(e.getDocument = f.getDocument),
					(e.getWindows = f.getWindows),
					(e.getWindowsCount = f.getWindowsCount),
					(e.getWindowId = f.getWindowId),
					(e.getWindowById = f.getWindowById),
					(e.hasWindow = f.hasWindow),
					(e.onDidRegisterWindow = f.onDidRegisterWindow),
					(e.onWillUnregisterWindow = f.onWillUnregisterWindow),
					(e.onDidUnregisterWindow = f.onDidUnregisterWindow);
				function b($t) {
					for (; $t.firstChild; ) $t.firstChild.remove();
				}
				class s {
					constructor(ut, Et, Tt, qt) {
						(this.f = ut),
							(this.g = Et),
							(this.d = Tt),
							(this.j = qt || !1),
							this.f.addEventListener(this.g, this.d, this.j);
					}
					dispose() {
						this.d &&
							(this.f.removeEventListener(this.g, this.d, this.j),
							(this.f = null),
							(this.d = null));
					}
				}
				function l($t, ut, Et, Tt) {
					return new s($t, ut, Et, Tt);
				}
				function y($t, ut) {
					return function (Et) {
						return ut(new E.$2fb($t, Et));
					};
				}
				function $($t) {
					return function (ut) {
						return $t(new w.$7fb(ut));
					};
				}
				const v = function (ut, Et, Tt, qt) {
					let At = Tt;
					return (
						Et === "click" || Et === "mousedown" || Et === "contextmenu"
							? (At = y((0, e.getWindow)(ut), Tt))
							: (Et === "keydown" || Et === "keypress" || Et === "keyup") &&
								(At = $(Tt)),
						l(ut, Et, At, qt)
					);
				};
				e.$$fb = v;
				const S = function (ut, Et, Tt) {
					const qt = y((0, e.getWindow)(ut), Et);
					return T(ut, qt, Tt);
				};
				e.$_fb = S;
				const I = function (ut, Et, Tt) {
					const qt = y((0, e.getWindow)(ut), Et);
					return k(ut, qt, Tt);
				};
				e.$agb = I;
				function T($t, ut, Et) {
					return l(
						$t,
						c.$u && i.$Yfb.pointerEvents
							? e.$$gb.POINTER_DOWN
							: e.$$gb.MOUSE_DOWN,
						ut,
						Et,
					);
				}
				function P($t, ut, Et) {
					return l(
						$t,
						c.$u && i.$Yfb.pointerEvents
							? e.$$gb.POINTER_MOVE
							: e.$$gb.MOUSE_MOVE,
						ut,
						Et,
					);
				}
				function k($t, ut, Et) {
					return l(
						$t,
						c.$u && i.$Yfb.pointerEvents ? e.$$gb.POINTER_UP : e.$$gb.MOUSE_UP,
						ut,
						Et,
					);
				}
				function L($t, ut, Et) {
					return (0, C.$4h)($t, ut, Et);
				}
				class D extends C.$5h {
					constructor(ut, Et) {
						super(ut, Et);
					}
				}
				e.$fgb = D;
				function M($t, ut, Et, Tt) {
					let qt = 0;
					const At = $t.setInterval(() => {
							qt++,
								((typeof Tt == "number" && qt >= Tt) || ut() === !0) &&
									Yt.dispose();
						}, Et),
						Yt = (0, a.$Yc)(() => {
							$t.clearInterval(At);
						});
					return Yt;
				}
				class N extends C.$Xh {
					constructor(ut) {
						super(), (this.g = ut && (0, e.getWindow)(ut));
					}
					cancelAndSet(ut, Et, Tt) {
						return super.cancelAndSet(ut, Et, Tt ?? this.g);
					}
				}
				e.$jgb = N;
				class A {
					constructor(ut, Et = 0) {
						(this.d = ut), (this.priority = Et), (this.f = !1);
					}
					dispose() {
						this.f = !0;
					}
					execute() {
						if (!this.f)
							try {
								this.d();
							} catch (ut) {
								(0, d.$4)(ut);
							}
					}
					static sort(ut, Et) {
						return Et.priority - ut.priority;
					}
				}
				(function () {
					const $t = new Map(),
						ut = new Map(),
						Et = new Map(),
						Tt = new Map(),
						qt = (At) => {
							Et.set(At, !1);
							const Yt = $t.get(At) ?? [];
							for (
								ut.set(At, Yt), $t.set(At, []), Tt.set(At, !0);
								Yt.length > 0;
							)
								Yt.sort(A.sort), Yt.shift().execute();
							Tt.set(At, !1);
						};
					(e.$hgb = (At, Yt, ni = 0) => {
						const bi = (0, e.getWindowId)(At),
							fi = new A(Yt, ni);
						let Ti = $t.get(bi);
						return (
							Ti || ((Ti = []), $t.set(bi, Ti)),
							Ti.push(fi),
							Et.get(bi) ||
								(Et.set(bi, !0), At.requestAnimationFrame(() => qt(bi))),
							fi
						);
					}),
						(e.$ggb = (At, Yt, ni) => {
							const bi = (0, e.getWindowId)(At);
							if (Tt.get(bi)) {
								const fi = new A(Yt, ni);
								let Ti = ut.get(bi);
								return Ti || ((Ti = []), ut.set(bi, Ti)), Ti.push(fi), fi;
							} else return (0, e.$hgb)(At, Yt, ni);
						});
				})();
				function R($t, ut) {
					return (0, e.$hgb)($t, ut, 1e4);
				}
				function O($t, ut) {
					return (0, e.$hgb)($t, ut, -1e4);
				}
				const B = 8,
					U = function ($t, ut) {
						return ut;
					};
				class z extends a.$1c {
					constructor(ut, Et, Tt, qt = U, At = B) {
						super();
						let Yt = null,
							ni = 0;
						const bi = this.D(new C.$Wh()),
							fi = () => {
								(ni = new Date().getTime()), Tt(Yt), (Yt = null);
							};
						this.D(
							l(ut, Et, (Ti) => {
								Yt = qt(Yt, Ti);
								const wt = new Date().getTime() - ni;
								wt >= At ? (bi.cancel(), fi()) : bi.setIfNotSet(fi, At - wt);
							}),
						);
					}
				}
				function F($t, ut, Et, Tt, qt) {
					return new z($t, ut, Et, Tt, qt);
				}
				function x($t) {
					return (0, e.getWindow)($t).getComputedStyle($t, null);
				}
				function H($t, ut) {
					const Et = (0, e.getWindow)($t),
						Tt = Et.document;
					if ($t !== Tt.body) return new V($t.clientWidth, $t.clientHeight);
					if (c.$u && Et?.visualViewport)
						return new V(Et.visualViewport.width, Et.visualViewport.height);
					if (Et?.innerWidth && Et.innerHeight)
						return new V(Et.innerWidth, Et.innerHeight);
					if (Tt.body && Tt.body.clientWidth && Tt.body.clientHeight)
						return new V(Tt.body.clientWidth, Tt.body.clientHeight);
					if (
						Tt.documentElement &&
						Tt.documentElement.clientWidth &&
						Tt.documentElement.clientHeight
					)
						return new V(
							Tt.documentElement.clientWidth,
							Tt.documentElement.clientHeight,
						);
					if (ut) return H(ut);
					throw new Error("Unable to figure out browser width and height");
				}
				class q {
					static d(ut, Et) {
						return parseFloat(Et) || 0;
					}
					static f(ut, Et, Tt) {
						const qt = x(ut),
							At = qt ? qt.getPropertyValue(Et) : "0";
						return q.d(ut, At);
					}
					static getBorderLeftWidth(ut) {
						return q.f(ut, "border-left-width", "borderLeftWidth");
					}
					static getBorderRightWidth(ut) {
						return q.f(ut, "border-right-width", "borderRightWidth");
					}
					static getBorderTopWidth(ut) {
						return q.f(ut, "border-top-width", "borderTopWidth");
					}
					static getBorderBottomWidth(ut) {
						return q.f(ut, "border-bottom-width", "borderBottomWidth");
					}
					static getPaddingLeft(ut) {
						return q.f(ut, "padding-left", "paddingLeft");
					}
					static getPaddingRight(ut) {
						return q.f(ut, "padding-right", "paddingRight");
					}
					static getPaddingTop(ut) {
						return q.f(ut, "padding-top", "paddingTop");
					}
					static getPaddingBottom(ut) {
						return q.f(ut, "padding-bottom", "paddingBottom");
					}
					static getMarginLeft(ut) {
						return q.f(ut, "margin-left", "marginLeft");
					}
					static getMarginTop(ut) {
						return q.f(ut, "margin-top", "marginTop");
					}
					static getMarginRight(ut) {
						return q.f(ut, "margin-right", "marginRight");
					}
					static getMarginBottom(ut) {
						return q.f(ut, "margin-bottom", "marginBottom");
					}
				}
				class V {
					static {
						this.None = new V(0, 0);
					}
					constructor(ut, Et) {
						(this.width = ut), (this.height = Et);
					}
					with(ut = this.width, Et = this.height) {
						return ut !== this.width || Et !== this.height
							? new V(ut, Et)
							: this;
					}
					static is(ut) {
						return (
							typeof ut == "object" &&
							typeof ut.height == "number" &&
							typeof ut.width == "number"
						);
					}
					static lift(ut) {
						return ut instanceof V ? ut : new V(ut.width, ut.height);
					}
					static equals(ut, Et) {
						return ut === Et
							? !0
							: !ut || !Et
								? !1
								: ut.width === Et.width && ut.height === Et.height;
					}
				}
				e.$pgb = V;
				function G($t) {
					let ut = $t.offsetParent,
						Et = $t.offsetTop,
						Tt = $t.offsetLeft;
					for (
						;
						($t = $t.parentNode) !== null &&
						$t !== $t.ownerDocument.body &&
						$t !== $t.ownerDocument.documentElement;
					) {
						Et -= $t.scrollTop;
						const qt = $e($t) ? null : x($t);
						qt &&
							(Tt -= qt.direction !== "rtl" ? $t.scrollLeft : -$t.scrollLeft),
							$t === ut &&
								((Tt += q.getBorderLeftWidth($t)),
								(Et += q.getBorderTopWidth($t)),
								(Et += $t.offsetTop),
								(Tt += $t.offsetLeft),
								(ut = $t.offsetParent));
					}
					return { left: Tt, top: Et };
				}
				function K($t, ut, Et) {
					typeof ut == "number" && ($t.style.width = `${ut}px`),
						typeof Et == "number" && ($t.style.height = `${Et}px`);
				}
				function J($t, ut, Et, Tt, qt, At = "absolute") {
					typeof ut == "number" && ($t.style.top = `${ut}px`),
						typeof Et == "number" && ($t.style.right = `${Et}px`),
						typeof Tt == "number" && ($t.style.bottom = `${Tt}px`),
						typeof qt == "number" && ($t.style.left = `${qt}px`),
						($t.style.position = At);
				}
				function W($t) {
					const ut = $t.getBoundingClientRect(),
						Et = (0, e.getWindow)($t);
					return {
						left: ut.left + Et.scrollX,
						top: ut.top + Et.scrollY,
						width: ut.width,
						height: ut.height,
					};
				}
				function X($t) {
					let ut = $t,
						Et = 1;
					do {
						const Tt = x(ut).zoom;
						Tt != null && Tt !== "1" && (Et *= Tt), (ut = ut.parentElement);
					} while (ut !== null && ut !== ut.ownerDocument.documentElement);
					return Et;
				}
				function Y($t) {
					const ut = q.getMarginLeft($t) + q.getMarginRight($t);
					return $t.offsetWidth + ut;
				}
				function ie($t) {
					const ut = q.getBorderLeftWidth($t) + q.getBorderRightWidth($t),
						Et = q.getPaddingLeft($t) + q.getPaddingRight($t);
					return $t.offsetWidth - ut - Et;
				}
				function ne($t) {
					const ut = q.getMarginLeft($t) + q.getMarginRight($t);
					return $t.scrollWidth + ut;
				}
				function ee($t) {
					const ut = q.getBorderTopWidth($t) + q.getBorderBottomWidth($t),
						Et = q.getPaddingTop($t) + q.getPaddingBottom($t);
					return $t.offsetHeight - ut - Et;
				}
				function _($t) {
					const ut = q.getMarginTop($t) + q.getMarginBottom($t);
					return $t.offsetHeight + ut;
				}
				function te($t, ut) {
					if ($t === null) return 0;
					const Et = G($t),
						Tt = G(ut);
					return Et.left - Tt.left;
				}
				function Q($t, ut) {
					const Et = ut.map((qt) => Math.max(ne(qt), Y(qt)) + te(qt, $t) || 0);
					return Math.max(...Et);
				}
				function Z($t, ut) {
					return !!ut?.contains($t);
				}
				const se = "parentFlowToElementId";
				function re($t, ut) {
					$t.dataset[se] = ut.id;
				}
				function le($t) {
					const ut = $t.dataset[se];
					return typeof ut == "string"
						? $t.ownerDocument.getElementById(ut)
						: null;
				}
				function oe($t, ut) {
					let Et = $t;
					for (; Et; ) {
						if (Et === ut) return !0;
						if (Me(Et)) {
							const Tt = le(Et);
							if (Tt) {
								Et = Tt;
								continue;
							}
						}
						Et = Et.parentNode;
					}
					return !1;
				}
				function ae($t, ut, Et) {
					for (; $t && $t.nodeType === $t.ELEMENT_NODE; ) {
						if ($t.classList.contains(ut)) return $t;
						if (Et) {
							if (typeof Et == "string") {
								if ($t.classList.contains(Et)) return null;
							} else if ($t === Et) return null;
						}
						$t = $t.parentNode;
					}
					return null;
				}
				function pe($t, ut, Et) {
					return !!ae($t, ut, Et);
				}
				function $e($t) {
					return $t && !!$t.host && !!$t.mode;
				}
				function ye($t) {
					return !!ue($t);
				}
				function ue($t) {
					for (; $t.parentNode; ) {
						if ($t === $t.ownerDocument?.body) return null;
						$t = $t.parentNode;
					}
					return $e($t) ? $t : null;
				}
				function fe() {
					let $t = be().activeElement;
					for (; $t?.shadowRoot; ) $t = $t.shadowRoot.activeElement;
					return $t;
				}
				function me($t) {
					return fe() === $t;
				}
				function ve($t) {
					return Z(fe(), $t);
				}
				function ge($t) {
					return $t.ownerDocument === be();
				}
				function be() {
					return (0, e.getWindowsCount)() <= 1
						? p.$Bfb.document
						: (Array.from((0, e.getWindows)())
								.map(({ window: ut }) => ut.document)
								.find((ut) => ut.hasFocus()) ?? p.$Bfb.document);
				}
				function Ce() {
					return be().defaultView?.window ?? p.$Bfb;
				}
				const Le = new Map();
				function Fe($t) {
					return Le.has($t);
				}
				function Oe() {
					return new xe();
				}
				class xe {
					constructor() {
						(this.d = ""), (this.f = void 0);
					}
					setStyle(ut) {
						ut !== this.d &&
							((this.d = ut),
							this.f
								? (this.f.innerText = ut)
								: (this.f = He(
										p.$Bfb.document.head,
										(Et) => (Et.innerText = ut),
									)));
					}
					dispose() {
						this.f && (this.f.remove(), (this.f = void 0));
					}
				}
				function He($t = p.$Bfb.document.head, ut, Et) {
					const Tt = document.createElement("style");
					if (
						((Tt.type = "text/css"),
						(Tt.media = "screen"),
						ut?.(Tt),
						$t.appendChild(Tt),
						Et && Et.add((0, a.$Yc)(() => Tt.remove())),
						$t === p.$Bfb.document.head)
					) {
						const qt = new Set();
						Le.set(Tt, qt);
						for (const { window: At, disposables: Yt } of (0, e.getWindows)()) {
							if (At === p.$Bfb) continue;
							const ni = Yt.add(Je(Tt, qt, At));
							Et?.add(ni);
						}
					}
					return Tt;
				}
				function Ke($t) {
					const ut = new a.$Zc();
					for (const [Et, Tt] of Le) ut.add(Je(Et, Tt, $t));
					return ut;
				}
				function Je($t, ut, Et) {
					const Tt = new a.$Zc(),
						qt = $t.cloneNode(!0);
					Et.document.head.appendChild(qt),
						Tt.add((0, a.$Yc)(() => qt.remove()));
					for (const At of ke($t))
						qt.sheet?.insertRule(At.cssText, qt.sheet?.cssRules.length);
					return (
						Tt.add(
							e.$Tgb.observe($t, Tt, { childList: !0 })(() => {
								qt.textContent = $t.textContent;
							}),
						),
						ut.add(qt),
						Tt.add((0, a.$Yc)(() => ut.delete(qt))),
						Tt
					);
				}
				e.$Tgb = new (class {
					constructor() {
						this.mutationObservers = new Map();
					}
					observe($t, ut, Et) {
						let Tt = this.mutationObservers.get($t);
						Tt || ((Tt = new Map()), this.mutationObservers.set($t, Tt));
						const qt = (0, g.$Aj)(Et);
						let At = Tt.get(qt);
						if (At) At.users += 1;
						else {
							const Yt = new m.$re(),
								ni = new MutationObserver((fi) => Yt.fire(fi));
							ni.observe($t, Et);
							const bi = (At = {
								users: 1,
								observer: ni,
								onDidMutate: Yt.event,
							});
							ut.add(
								(0, a.$Yc)(() => {
									(bi.users -= 1),
										bi.users === 0 &&
											(Yt.dispose(),
											ni.disconnect(),
											Tt?.delete(qt),
											Tt?.size === 0 && this.mutationObservers.delete($t));
								}),
							),
								Tt.set(qt, At);
						}
						return At.onDidMutate;
					}
				})();
				function Te($t = p.$Bfb.document.head) {
					return Ie("meta", $t);
				}
				function Ee($t = p.$Bfb.document.head) {
					return Ie("link", $t);
				}
				function Ie($t, ut = p.$Bfb.document.head) {
					const Et = document.createElement($t);
					return ut.appendChild(Et), Et;
				}
				let Be = null;
				function Se() {
					return Be || (Be = He()), Be;
				}
				function ke($t) {
					return $t?.sheet?.rules
						? $t.sheet.rules
						: $t?.sheet?.cssRules
							? $t.sheet.cssRules
							: [];
				}
				function Ue($t, ut, Et = Se()) {
					if (!(!Et || !ut)) {
						Et.sheet?.insertRule(`${$t} {${ut}}`, 0);
						for (const Tt of Le.get(Et) ?? []) Ue($t, ut, Tt);
					}
				}
				function qe($t, ut = Se()) {
					if (!ut) return;
					const Et = ke(ut),
						Tt = [];
					for (let qt = 0; qt < Et.length; qt++) {
						const At = Et[qt];
						Ae(At) && At.selectorText.indexOf($t) !== -1 && Tt.push(qt);
					}
					for (let qt = Tt.length - 1; qt >= 0; qt--)
						ut.sheet?.deleteRule(Tt[qt]);
					for (const qt of Le.get(ut) ?? []) qe($t, qt);
				}
				function Ae($t) {
					return typeof $t.selectorText == "string";
				}
				function Me($t) {
					return (
						$t instanceof HTMLElement ||
						$t instanceof (0, e.getWindow)($t).HTMLElement
					);
				}
				function De($t) {
					return (
						$t instanceof HTMLAnchorElement ||
						$t instanceof (0, e.getWindow)($t).HTMLAnchorElement
					);
				}
				function Re($t) {
					return (
						$t instanceof HTMLSpanElement ||
						$t instanceof (0, e.getWindow)($t).HTMLSpanElement
					);
				}
				function je($t) {
					return (
						$t instanceof HTMLTextAreaElement ||
						$t instanceof (0, e.getWindow)($t).HTMLTextAreaElement
					);
				}
				function Ve($t) {
					return (
						$t instanceof HTMLInputElement ||
						$t instanceof (0, e.getWindow)($t).HTMLInputElement
					);
				}
				function Ze($t) {
					return (
						$t instanceof HTMLButtonElement ||
						$t instanceof (0, e.getWindow)($t).HTMLButtonElement
					);
				}
				function et($t) {
					return (
						$t instanceof HTMLDivElement ||
						$t instanceof (0, e.getWindow)($t).HTMLDivElement
					);
				}
				function rt($t) {
					return (
						$t instanceof SVGElement ||
						$t instanceof (0, e.getWindow)($t).SVGElement
					);
				}
				function ft($t) {
					return (
						$t instanceof MouseEvent ||
						$t instanceof (0, e.getWindow)($t).MouseEvent
					);
				}
				function bt($t) {
					return (
						$t instanceof KeyboardEvent ||
						$t instanceof (0, e.getWindow)($t).KeyboardEvent
					);
				}
				function nt($t) {
					return (
						$t instanceof PointerEvent ||
						$t instanceof (0, e.getWindow)($t).PointerEvent
					);
				}
				function lt($t) {
					return (
						$t instanceof DragEvent ||
						$t instanceof (0, e.getWindow)($t).DragEvent
					);
				}
				e.$$gb = {
					CLICK: "click",
					AUXCLICK: "auxclick",
					DBLCLICK: "dblclick",
					MOUSE_UP: "mouseup",
					MOUSE_DOWN: "mousedown",
					MOUSE_OVER: "mouseover",
					MOUSE_MOVE: "mousemove",
					MOUSE_OUT: "mouseout",
					MOUSE_ENTER: "mouseenter",
					MOUSE_LEAVE: "mouseleave",
					MOUSE_WHEEL: "wheel",
					POINTER_UP: "pointerup",
					POINTER_DOWN: "pointerdown",
					POINTER_MOVE: "pointermove",
					POINTER_LEAVE: "pointerleave",
					CONTEXT_MENU: "contextmenu",
					WHEEL: "wheel",
					KEY_DOWN: "keydown",
					KEY_PRESS: "keypress",
					KEY_UP: "keyup",
					LOAD: "load",
					BEFORE_UNLOAD: "beforeunload",
					UNLOAD: "unload",
					PAGE_SHOW: "pageshow",
					PAGE_HIDE: "pagehide",
					PASTE: "paste",
					ABORT: "abort",
					ERROR: "error",
					RESIZE: "resize",
					SCROLL: "scroll",
					FULLSCREEN_CHANGE: "fullscreenchange",
					WK_FULLSCREEN_CHANGE: "webkitfullscreenchange",
					SELECT: "select",
					CHANGE: "change",
					SUBMIT: "submit",
					RESET: "reset",
					FOCUS: "focus",
					FOCUS_IN: "focusin",
					FOCUS_OUT: "focusout",
					BLUR: "blur",
					INPUT: "input",
					STORAGE: "storage",
					DRAG_START: "dragstart",
					DRAG: "drag",
					DRAG_ENTER: "dragenter",
					DRAG_LEAVE: "dragleave",
					DRAG_OVER: "dragover",
					DROP: "drop",
					DRAG_END: "dragend",
					ANIMATION_START: t.$Pfb ? "webkitAnimationStart" : "animationstart",
					ANIMATION_END: t.$Pfb ? "webkitAnimationEnd" : "animationend",
					ANIMATION_ITERATION: t.$Pfb
						? "webkitAnimationIteration"
						: "animationiteration",
				};
				function ct($t) {
					const ut = $t;
					return !!(
						ut &&
						typeof ut.preventDefault == "function" &&
						typeof ut.stopPropagation == "function"
					);
				}
				e.$ahb = {
					stop: ($t, ut) => (
						$t.preventDefault(), ut && $t.stopPropagation(), $t
					),
				};
				function gt($t) {
					const ut = [];
					for (let Et = 0; $t && $t.nodeType === $t.ELEMENT_NODE; Et++)
						(ut[Et] = $t.scrollTop), ($t = $t.parentNode);
					return ut;
				}
				function ht($t, ut) {
					for (let Et = 0; $t && $t.nodeType === $t.ELEMENT_NODE; Et++)
						$t.scrollTop !== ut[Et] && ($t.scrollTop = ut[Et]),
							($t = $t.parentNode);
				}
				class Rt extends a.$1c {
					static m(ut) {
						if (Me(ut)) {
							const Et = ue(ut),
								Tt = Et ? Et.activeElement : ut.ownerDocument.activeElement;
							return Z(Tt, ut);
						} else {
							const Et = ut;
							return Z(Et.document.activeElement, Et.document);
						}
					}
					constructor(ut) {
						super(),
							(this.f = this.D(new m.$re())),
							(this.onDidFocus = this.f.event),
							(this.g = this.D(new m.$re())),
							(this.onDidBlur = this.g.event);
						let Et = Rt.m(ut),
							Tt = !1;
						const qt = () => {
								(Tt = !1), Et || ((Et = !0), this.f.fire());
							},
							At = () => {
								Et &&
									((Tt = !0),
									(Me(ut) ? (0, e.getWindow)(ut) : ut).setTimeout(() => {
										Tt && ((Tt = !1), (Et = !1), this.g.fire());
									}, 0));
							};
						(this.j = () => {
							Rt.m(ut) !== Et && (Et ? At() : qt());
						}),
							this.D(l(ut, e.$$gb.FOCUS, qt, !0)),
							this.D(l(ut, e.$$gb.BLUR, At, !0)),
							Me(ut) &&
								(this.D(l(ut, e.$$gb.FOCUS_IN, () => this.j())),
								this.D(l(ut, e.$$gb.FOCUS_OUT, () => this.j())));
					}
					refreshState() {
						this.j();
					}
				}
				function Nt($t) {
					return new Rt($t);
				}
				function jt($t, ut) {
					return $t.after(ut), ut;
				}
				function ti($t, ...ut) {
					if (($t.append(...ut), ut.length === 1 && typeof ut[0] != "string"))
						return ut[0];
				}
				function kt($t, ut) {
					return $t.insertBefore(ut, $t.firstChild), ut;
				}
				function hi($t, ...ut) {
					($t.innerText = ""), ti($t, ...ut);
				}
				const Kt = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;
				var di;
				(function ($t) {
					($t.HTML = "http://www.w3.org/1999/xhtml"),
						($t.SVG = "http://www.w3.org/2000/svg");
				})(di || (e.Namespace = di = {}));
				function Ye($t, ut, Et, ...Tt) {
					const qt = Kt.exec(ut);
					if (!qt) throw new Error("Bad use of emmet");
					const At = qt[1] || "div";
					let Yt;
					return (
						$t !== di.HTML
							? (Yt = document.createElementNS($t, At))
							: (Yt = document.createElement(At)),
						qt[3] && (Yt.id = qt[3]),
						qt[4] && (Yt.className = qt[4].replace(/\./g, " ").trim()),
						Et &&
							Object.entries(Et).forEach(([ni, bi]) => {
								typeof bi > "u" ||
									(/^on\w+$/.test(ni)
										? (Yt[ni] = bi)
										: ni === "selected"
											? bi && Yt.setAttribute(ni, "true")
											: Yt.setAttribute(ni, bi));
							}),
						Yt.append(...Tt),
						Yt
					);
				}
				function ze($t, ut, ...Et) {
					return Ye(di.HTML, $t, ut, ...Et);
				}
				ze.SVG = function ($t, ut, ...Et) {
					return Ye(di.SVG, $t, ut, ...Et);
				};
				function Xe($t, ut) {
					const Et = [];
					return (
						$t.forEach((Tt, qt) => {
							qt > 0 &&
								(ut instanceof Node
									? Et.push(ut.cloneNode())
									: Et.push(document.createTextNode(ut))),
								Et.push(Tt);
						}),
						Et
					);
				}
				function It($t, ...ut) {
					$t ? Lt(...ut) : xt(...ut);
				}
				function Lt(...$t) {
					for (const ut of $t)
						(ut.style.display = ""), ut.removeAttribute("aria-hidden");
				}
				function xt(...$t) {
					for (const ut of $t)
						(ut.style.display = "none"), ut.setAttribute("aria-hidden", "true");
				}
				function Vt($t, ut) {
					for (; $t && $t.nodeType === $t.ELEMENT_NODE; ) {
						if (Me($t) && $t.hasAttribute(ut)) return $t;
						$t = $t.parentNode;
					}
					return null;
				}
				function Bt($t) {
					!$t ||
						!$t.hasAttribute("tabIndex") ||
						($t.ownerDocument.activeElement === $t &&
							Vt($t.parentElement, "tabIndex")?.focus(),
						$t.removeAttribute("tabindex"));
				}
				function Gt($t) {
					return (ut) => {
						ut.preventDefault(), ut.stopPropagation(), $t(ut);
					};
				}
				function Mt($t) {
					return new Promise((ut) => {
						if (
							$t.document.readyState === "complete" ||
							($t.document && $t.document.body !== null)
						)
							ut(void 0);
						else {
							const Tt = () => {
								$t.window.removeEventListener("DOMContentLoaded", Tt, !1), ut();
							};
							$t.window.addEventListener("DOMContentLoaded", Tt, !1);
						}
					});
				}
				function Ut($t, ut) {
					const Et = $t.devicePixelRatio * ut;
					return Math.max(1, Math.floor(Et)) / $t.devicePixelRatio;
				}
				function ei($t) {
					p.$Bfb.open($t, "_blank", "noopener");
				}
				const mi = 780,
					ii = 640;
				function Dt($t) {
					const ut = Math.floor(
							p.$Bfb.screenLeft + p.$Bfb.innerWidth / 2 - mi / 2,
						),
						Et = Math.floor(p.$Bfb.screenTop + p.$Bfb.innerHeight / 2 - ii / 2);
					p.$Bfb.open(
						$t,
						"_blank",
						`width=${mi},height=${ii},top=${Et},left=${ut}`,
					);
				}
				function Jt($t, ut = !0) {
					const Et = p.$Bfb.open();
					return Et
						? (ut && (Et.opener = null), (Et.location.href = $t), !0)
						: !1;
				}
				function si($t, ut) {
					const Et = () => {
						ut(), (Tt = (0, e.$hgb)($t, Et));
					};
					let Tt = (0, e.$hgb)($t, Et);
					return (0, a.$Yc)(() => Tt.dispose());
				}
				h.$Zg.setPreferredWebSchema(
					/^https:/.test(p.$Bfb.location.href) ? "https" : "http",
				);
				function Zt($t) {
					return $t
						? `url('${h.$7g.uriToBrowserUri($t).toString(!0).replace(/'/g, "%27")}')`
						: "url('')";
				}
				function ci($t) {
					return `'${$t.replace(/'/g, "%27")}'`;
				}
				function ri($t, ut) {
					if ($t !== void 0) {
						const Et = $t.match(/^\s*var\((.+)\)$/);
						if (Et) {
							const Tt = Et[1].split(",", 2);
							return (
								Tt.length === 2 && (ut = ri(Tt[1].trim(), ut)),
								`var(${Tt[0]}, ${ut})`
							);
						}
						return $t;
					}
					return ut;
				}
				function $i($t, ut) {
					let Et;
					if (n.URI.isUri($t)) Et = $t.toString(!0);
					else {
						const At = new Blob([$t]);
						(Et = URL.createObjectURL(At)),
							setTimeout(() => URL.revokeObjectURL(Et));
					}
					const Tt = Ce(),
						qt = document.createElement("a");
					Tt.document.body.appendChild(qt),
						(qt.download = ut),
						(qt.href = Et),
						qt.click(),
						setTimeout(() => qt.remove());
				}
				function Wt() {
					return new Promise(($t) => {
						const ut = Ce(),
							Et = document.createElement("input");
						ut.document.body.appendChild(Et),
							(Et.type = "file"),
							(Et.multiple = !0),
							m.Event.once(m.Event.fromDOMEventEmitter(Et, "input"))(() => {
								$t(Et.files ?? void 0);
							}),
							Et.click(),
							setTimeout(() => Et.remove());
					});
				}
				var tt;
				(function ($t) {
					($t[($t.DOCUMENT = 1)] = "DOCUMENT"),
						($t[($t.BROWSER = 2)] = "BROWSER");
				})(tt || (e.DetectedFullscreenMode = tt = {}));
				function at($t) {
					return $t.document.fullscreenElement ||
						$t.document.webkitFullscreenElement ||
						$t.document.webkitIsFullScreen
						? { mode: tt.DOCUMENT, guess: !1 }
						: $t.innerHeight === $t.screen.height
							? { mode: tt.BROWSER, guess: !1 }
							: (c.$m || c.$n) &&
									$t.outerHeight === $t.screen.height &&
									$t.outerWidth === $t.screen.width
								? { mode: tt.BROWSER, guess: !0 }
								: null;
				}
				function pi($t, ut = !1) {
					const Et = document.createElement("a");
					return (
						r.addHook("afterSanitizeAttributes", (Tt) => {
							for (const qt of ["href", "src"])
								if (Tt.hasAttribute(qt)) {
									const At = Tt.getAttribute(qt);
									if (qt === "href" && At.startsWith("#")) continue;
									if (
										((Et.href = At),
										!$t.includes(Et.protocol.replace(/:$/, "")))
									) {
										if (ut && qt === "src" && Et.href.startsWith("data:"))
											continue;
										Tt.removeAttribute(qt);
									}
								}
						}),
						(0, a.$Yc)(() => {
							r.removeHook("afterSanitizeAttributes");
						})
					);
				}
				const Li = [h.Schemas.http, h.Schemas.https, h.Schemas.command];
				e.$Chb = Object.freeze([
					"a",
					"abbr",
					"b",
					"bdo",
					"blockquote",
					"br",
					"caption",
					"cite",
					"code",
					"col",
					"colgroup",
					"dd",
					"del",
					"details",
					"dfn",
					"div",
					"dl",
					"dt",
					"em",
					"figcaption",
					"figure",
					"h1",
					"h2",
					"h3",
					"h4",
					"h5",
					"h6",
					"hr",
					"i",
					"img",
					"input",
					"ins",
					"kbd",
					"label",
					"li",
					"mark",
					"ol",
					"p",
					"pre",
					"q",
					"rp",
					"rt",
					"ruby",
					"samp",
					"small",
					"small",
					"source",
					"span",
					"strike",
					"strong",
					"sub",
					"summary",
					"sup",
					"table",
					"tbody",
					"td",
					"tfoot",
					"th",
					"thead",
					"time",
					"tr",
					"tt",
					"u",
					"ul",
					"var",
					"video",
					"wbr",
				]);
				const Di = Object.freeze({
					ALLOWED_TAGS: [
						"a",
						"button",
						"blockquote",
						"code",
						"div",
						"h1",
						"h2",
						"h3",
						"h4",
						"h5",
						"h6",
						"hr",
						"input",
						"label",
						"li",
						"p",
						"pre",
						"select",
						"small",
						"span",
						"strong",
						"textarea",
						"ul",
						"ol",
					],
					ALLOWED_ATTR: [
						"href",
						"data-href",
						"data-command",
						"target",
						"title",
						"name",
						"src",
						"alt",
						"class",
						"id",
						"role",
						"tabindex",
						"style",
						"data-code",
						"width",
						"height",
						"align",
						"x-dispatch",
						"required",
						"checked",
						"placeholder",
						"type",
						"start",
					],
					RETURN_DOM: !1,
					RETURN_DOM_FRAGMENT: !1,
					RETURN_TRUSTED_TYPE: !0,
				});
				function Ui($t, ut) {
					const Et = pi(Li);
					try {
						const Tt = r.sanitize(ut, Di);
						$t.innerHTML = Tt;
					} finally {
						Et.dispose();
					}
				}
				function Wi($t) {
					const ut = new Uint16Array($t.length);
					for (let qt = 0; qt < ut.length; qt++) ut[qt] = $t.charCodeAt(qt);
					let Et = "";
					const Tt = new Uint8Array(ut.buffer);
					for (let qt = 0; qt < Tt.length; qt++)
						Et += String.fromCharCode(Tt[qt]);
					return Et;
				}
				function Gi($t) {
					return btoa(Wi($t));
				}
				class qi extends m.$re {
					constructor() {
						super(),
							(this.o = new a.$Zc()),
							(this.D = { altKey: !1, shiftKey: !1, ctrlKey: !1, metaKey: !1 }),
							this.o.add(
								m.Event.runAndSubscribe(
									e.onDidRegisterWindow,
									({ window: ut, disposables: Et }) => this.G(ut, Et),
									{ window: p.$Bfb, disposables: this.o },
								),
							);
					}
					G(ut, Et) {
						Et.add(
							l(
								ut,
								"keydown",
								(Tt) => {
									if (Tt.defaultPrevented) return;
									const qt = new w.$7fb(Tt);
									if (!(qt.keyCode === u.KeyCode.Alt && Tt.repeat)) {
										if (Tt.altKey && !this.D.altKey)
											this.D.lastKeyPressed = "alt";
										else if (Tt.ctrlKey && !this.D.ctrlKey)
											this.D.lastKeyPressed = "ctrl";
										else if (Tt.metaKey && !this.D.metaKey)
											this.D.lastKeyPressed = "meta";
										else if (Tt.shiftKey && !this.D.shiftKey)
											this.D.lastKeyPressed = "shift";
										else if (qt.keyCode !== u.KeyCode.Alt)
											this.D.lastKeyPressed = void 0;
										else return;
										(this.D.altKey = Tt.altKey),
											(this.D.ctrlKey = Tt.ctrlKey),
											(this.D.metaKey = Tt.metaKey),
											(this.D.shiftKey = Tt.shiftKey),
											this.D.lastKeyPressed &&
												((this.D.event = Tt), this.fire(this.D));
									}
								},
								!0,
							),
						),
							Et.add(
								l(
									ut,
									"keyup",
									(Tt) => {
										Tt.defaultPrevented ||
											(!Tt.altKey && this.D.altKey
												? (this.D.lastKeyReleased = "alt")
												: !Tt.ctrlKey && this.D.ctrlKey
													? (this.D.lastKeyReleased = "ctrl")
													: !Tt.metaKey && this.D.metaKey
														? (this.D.lastKeyReleased = "meta")
														: !Tt.shiftKey && this.D.shiftKey
															? (this.D.lastKeyReleased = "shift")
															: (this.D.lastKeyReleased = void 0),
											this.D.lastKeyPressed !== this.D.lastKeyReleased &&
												(this.D.lastKeyPressed = void 0),
											(this.D.altKey = Tt.altKey),
											(this.D.ctrlKey = Tt.ctrlKey),
											(this.D.metaKey = Tt.metaKey),
											(this.D.shiftKey = Tt.shiftKey),
											this.D.lastKeyReleased &&
												((this.D.event = Tt), this.fire(this.D)));
									},
									!0,
								),
							),
							Et.add(
								l(
									ut.document.body,
									"mousedown",
									() => {
										this.D.lastKeyPressed = void 0;
									},
									!0,
								),
							),
							Et.add(
								l(
									ut.document.body,
									"mouseup",
									() => {
										this.D.lastKeyPressed = void 0;
									},
									!0,
								),
							),
							Et.add(
								l(
									ut.document.body,
									"mousemove",
									(Tt) => {
										Tt.buttons && (this.D.lastKeyPressed = void 0);
									},
									!0,
								),
							),
							Et.add(
								l(ut, "blur", () => {
									this.resetKeyStatus();
								}),
							);
					}
					get keyStatus() {
						return this.D;
					}
					get isModifierPressed() {
						return (
							this.D.altKey ||
							this.D.ctrlKey ||
							this.D.metaKey ||
							this.D.shiftKey
						);
					}
					resetKeyStatus() {
						this.H(), this.fire(this.D);
					}
					H() {
						this.D = { altKey: !1, shiftKey: !1, ctrlKey: !1, metaKey: !1 };
					}
					static getInstance() {
						return qi.F || (qi.F = new qi()), qi.F;
					}
					dispose() {
						super.dispose(), this.o.dispose();
					}
				}
				e.$Fhb = qi;
				function Oi($t) {
					const ut = document.cookie.match(
						"(^|[^;]+)\\s*" + $t + "\\s*=\\s*([^;]+)",
					);
					return ut ? ut.pop() : void 0;
				}
				class yi extends a.$1c {
					constructor(ut, Et) {
						super(),
							(this.j = ut),
							(this.m = Et),
							(this.f = 0),
							(this.g = 0),
							this.n();
					}
					n() {
						this.m.onDragStart &&
							this.D(
								l(this.j, e.$$gb.DRAG_START, (ut) => {
									this.m.onDragStart?.(ut);
								}),
							),
							this.m.onDrag &&
								this.D(
									l(this.j, e.$$gb.DRAG, (ut) => {
										this.m.onDrag?.(ut);
									}),
								),
							this.D(
								l(this.j, e.$$gb.DRAG_ENTER, (ut) => {
									this.f++, (this.g = ut.timeStamp), this.m.onDragEnter?.(ut);
								}),
							),
							this.D(
								l(this.j, e.$$gb.DRAG_OVER, (ut) => {
									ut.preventDefault(),
										this.m.onDragOver?.(ut, ut.timeStamp - this.g);
								}),
							),
							this.D(
								l(this.j, e.$$gb.DRAG_LEAVE, (ut) => {
									this.f--,
										this.f === 0 && ((this.g = 0), this.m.onDragLeave?.(ut));
								}),
							),
							this.D(
								l(this.j, e.$$gb.DRAG_END, (ut) => {
									(this.f = 0), (this.g = 0), this.m.onDragEnd?.(ut);
								}),
							),
							this.D(
								l(this.j, e.$$gb.DROP, (ut) => {
									(this.f = 0), (this.g = 0), this.m.onDrop?.(ut);
								}),
							);
					}
				}
				e.$Hhb = yi;
				const Ai =
					/(?<tag>[\w\-]+)?(?:#(?<id>[\w\-]+))?(?<class>(?:\.(?:[\w\-]+))*)(?:@(?<name>(?:[\w\_])+))?/;
				function li($t, ...ut) {
					let Et, Tt;
					Array.isArray(ut[0])
						? ((Et = {}), (Tt = ut[0]))
						: ((Et = ut[0] || {}), (Tt = ut[1]));
					const qt = Ai.exec($t);
					if (!qt || !qt.groups) throw new Error("Bad use of h");
					const At = qt.groups.tag || "div",
						Yt = document.createElement(At);
					qt.groups.id && (Yt.id = qt.groups.id);
					const ni = [];
					if (qt.groups.class)
						for (const fi of qt.groups.class.split("."))
							fi !== "" && ni.push(fi);
					if (Et.className !== void 0)
						for (const fi of Et.className.split(".")) fi !== "" && ni.push(fi);
					ni.length > 0 && (Yt.className = ni.join(" "));
					const bi = {};
					if ((qt.groups.name && (bi[qt.groups.name] = Yt), Tt))
						for (const fi of Tt)
							Me(fi)
								? Yt.appendChild(fi)
								: typeof fi == "string"
									? Yt.append(fi)
									: "root" in fi &&
										(Object.assign(bi, fi), Yt.appendChild(fi.root));
					for (const [fi, Ti] of Object.entries(Et))
						if (fi !== "className")
							if (fi === "style")
								for (const [wt, We] of Object.entries(Ti))
									Yt.style.setProperty(
										wi(wt),
										typeof We == "number" ? We + "px" : "" + We,
									);
							else
								fi === "tabIndex"
									? (Yt.tabIndex = Ti)
									: Yt.setAttribute(wi(fi), Ti.toString());
					return (bi.root = Yt), bi;
				}
				function Vi($t, ...ut) {
					let Et, Tt;
					Array.isArray(ut[0])
						? ((Et = {}), (Tt = ut[0]))
						: ((Et = ut[0] || {}), (Tt = ut[1]));
					const qt = Ai.exec($t);
					if (!qt || !qt.groups) throw new Error("Bad use of h");
					const At = qt.groups.tag || "div",
						Yt = document.createElementNS("http://www.w3.org/2000/svg", At);
					qt.groups.id && (Yt.id = qt.groups.id);
					const ni = [];
					if (qt.groups.class)
						for (const fi of qt.groups.class.split("."))
							fi !== "" && ni.push(fi);
					if (Et.className !== void 0)
						for (const fi of Et.className.split(".")) fi !== "" && ni.push(fi);
					ni.length > 0 && (Yt.className = ni.join(" "));
					const bi = {};
					if ((qt.groups.name && (bi[qt.groups.name] = Yt), Tt))
						for (const fi of Tt)
							Me(fi)
								? Yt.appendChild(fi)
								: typeof fi == "string"
									? Yt.append(fi)
									: "root" in fi &&
										(Object.assign(bi, fi), Yt.appendChild(fi.root));
					for (const [fi, Ti] of Object.entries(Et))
						if (fi !== "className")
							if (fi === "style")
								for (const [wt, We] of Object.entries(Ti))
									Yt.style.setProperty(
										wi(wt),
										typeof We == "number" ? We + "px" : "" + We,
									);
							else
								fi === "tabIndex"
									? (Yt.tabIndex = Ti)
									: Yt.setAttribute(wi(fi), Ti.toString());
					return (bi.root = Yt), bi;
				}
				function wi($t) {
					return $t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
				}
				function _t($t, ut, Et) {
					for (const { name: Tt, value: qt } of $t.attributes)
						(!Et || Et.includes(Tt)) && ut.setAttribute(Tt, qt);
				}
				function ai($t, ut, Et) {
					const Tt = $t.getAttribute(Et);
					Tt ? ut.setAttribute(Et, Tt) : ut.removeAttribute(Et);
				}
				function Ft($t, ut, Et) {
					_t($t, ut, Et);
					const Tt = new a.$Zc();
					return (
						Tt.add(
							e.$Tgb.observe($t, Tt, { attributes: !0, attributeFilter: Et })(
								(qt) => {
									for (const At of qt)
										At.type === "attributes" &&
											At.attributeName &&
											ai($t, ut, At.attributeName);
								},
							),
						),
						Tt
					);
				}
				class Xt {
					constructor(ut, Et, Tt) {
						(this.f = ut), (this.g = Et), (this.d = new Int16Array(8));
						const {
								top: qt,
								left: At,
								right: Yt,
								bottom: ni,
							} = Tt.getBoundingClientRect(),
							bi = this.d;
						let fi = 0;
						(bi[fi++] = At),
							(bi[fi++] = qt),
							(bi[fi++] = Yt),
							(bi[fi++] = qt),
							(bi[fi++] = At),
							(bi[fi++] = ni),
							(bi[fi++] = Yt),
							(bi[fi++] = ni);
					}
					contains(ut, Et) {
						const { d: Tt, f: qt, g: At } = this;
						for (let Yt = 0; Yt < 4; Yt++) {
							const ni = 2 * Yt,
								bi = 2 * ((Yt + 1) % 4);
							if (
								(0, o.$5m)(
									ut,
									Et,
									qt,
									At,
									Tt[ni],
									Tt[ni + 1],
									Tt[bi],
									Tt[bi + 1],
								)
							)
								return !0;
						}
						return !1;
					}
				}
				e.$Mhb = Xt;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[158],
		he([1, 0, 1415, 1416, 1417, 7, 75, 12]),
		function (ce, e, t, i, w, E, C, d) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ParagraphNode =
					e.RootNode =
					e.DecoratorNode =
					e.DEPRECATED_GridNode =
					e.DEPRECATED_GridCellNode =
					e.DEPRECATED_GridRowNode =
					e.LineBreakNode =
					e.ElementNode =
					e.TabNode =
					e.TextNode =
					e.TEXT_TYPE_TO_MODE =
					e.TEXT_MODE_TO_TYPE =
					e.ELEMENT_FORMAT_TO_TYPE =
					e.ELEMENT_TYPE_TO_FORMAT =
					e.DETAIL_TYPE_TO_DETAIL =
					e.TEXT_TYPE_TO_FORMAT =
					e.LTR_REGEX =
					e.RTL_REGEX =
					e.COMPOSITION_START_CHAR =
					e.DOUBLE_LINE_BREAK =
					e.COMPOSITION_SUFFIX =
					e.NON_BREAKING_SPACE =
					e.IS_ALIGN_END =
					e.IS_ALIGN_START =
					e.IS_ALIGN_JUSTIFY =
					e.IS_ALIGN_RIGHT =
					e.IS_ALIGN_CENTER =
					e.IS_ALIGN_LEFT =
					e.IS_UNMERGEABLE =
					e.IS_DIRECTIONLESS =
					e.IS_ALL_FORMATTING =
					e.IS_HIGHLIGHT =
					e.IS_SUPERSCRIPT =
					e.IS_SUBSCRIPT =
					e.IS_CODE =
					e.IS_UNDERLINE =
					e.IS_STRIKETHROUGH =
					e.IS_ITALIC =
					e.IS_BOLD =
					e.IS_SEGMENTED =
					e.IS_TOKEN =
					e.IS_NORMAL =
					e.FULL_RECONCILE =
					e.HAS_DIRTY_NODES =
					e.NO_DIRTY_NODES =
					e.DOM_TEXT_TYPE =
					e.DOM_ELEMENT_TYPE =
					e.KEY_MODIFIER_COMMAND =
					e.BLUR_COMMAND =
					e.FOCUS_COMMAND =
					e.CAN_UNDO_COMMAND =
					e.CAN_REDO_COMMAND =
					e.CLEAR_HISTORY_COMMAND =
					e.CLEAR_EDITOR_COMMAND =
					e.CUT_COMMAND =
					e.COPY_COMMAND =
					e.DRAGEND_COMMAND =
					e.DRAGOVER_COMMAND =
					e.DRAGSTART_COMMAND =
					e.FORMAT_ELEMENT_COMMAND =
					e.DROP_COMMAND =
					e.OUTDENT_CONTENT_COMMAND =
					e.INDENT_CONTENT_COMMAND =
					e.INSERT_TAB_COMMAND =
					e.KEY_SHIFT_UP_COMMAND =
					e.KEY_SHIFT_DOWN_COMMAND =
					e.KEY_COMMAND_ESCAPE_COMMAND =
					e.KEY_ALT_5_COMMAND =
					e.KEY_ALT_4_COMMAND =
					e.KEY_ALT_3_COMMAND =
					e.KEY_ALT_2_COMMAND =
					e.KEY_ALT_1_COMMAND =
					e.KEY_COMMAND_UP_COMMAND =
					e.KEY_COMMAND_COMMAND =
					e.KEY_ALT_UP_COMMAND =
					e.KEY_ALT_COMMAND =
					e.KEY_TAB_COMMAND =
					e.KEY_COMMAND_RIGHT_BRACKET_COMMAND =
					e.KEY_COMMAND_LEFT_BRACKET_COMMAND =
					e.KEY_BACKSPACE_DELETE_COMMAND =
					e.KEY_COMMAND_SHIFT_SLASH_COMMAND =
					e.KEY_COMMAND_DOT_COMMAND =
					e.KEY_COMMAND_SLASH_COMMAND =
					e.KEY_COMMAND_V_COMMAND =
					e.KEY_COMMAND_R_COMMAND =
					e.KEY_COMMAND_W_COMMAND =
					e.KEY_COMMAND_G_COMMAND =
					e.KEY_COMMAND_M_COMMAND =
					e.KEY_COMMAND_N_COMMAND =
					e.KEY_COMMAND_SHIFT_Z_COMMAND =
					e.KEY_COMMAND_A_COMMAND =
					e.KEY_COMMAND_B_COMMAND =
					e.KEY_COMMAND_P_COMMAND =
					e.KEY_COMMAND_T_COMMAND =
					e.KEY_COMMAND_Z_COMMAND =
					e.KEY_COMMAND_L_COMMAND =
					e.KEY_COMMAND_I_COMMAND =
					e.KEY_COMMAND_U_COMMAND =
					e.KEY_COMMAND_Y_OR_CNTRL_SHIFT_Y_COMMAND =
					e.KEY_COMMAND_J_COMMAND =
					e.KEY_COMMAND_S_COMMAND =
					e.KEY_COMMAND_SHIFT_S_COMMAND =
					e.KEY_COMMAND_SHIFT_D_COMMAND =
					e.KEY_COMMAND_SHIFT_K_COMMAND =
					e.KEY_COMMAND_0_COMMAND =
					e.KEY_COMMAND_9_COMMAND =
					e.KEY_COMMAND_8_COMMAND =
					e.KEY_COMMAND_7_COMMAND =
					e.KEY_COMMAND_6_COMMAND =
					e.KEY_COMMAND_5_COMMAND =
					e.KEY_COMMAND_4_COMMAND =
					e.KEY_COMMAND_3_COMMAND =
					e.KEY_COMMAND_2_COMMAND =
					e.KEY_COMMAND_1_COMMAND =
					e.KEY_COMMAND_H_COMMAND =
					e.KEY_MAC_CTRL_C_COMMAND =
					e.KEY_COMMAND_E_COMMAND =
					e.KEY_COMMAND_D_COMMAND =
					e.KEY_COMMAND_Y_COMMAND =
					e.KEY_COMMAND_K_COMMAND =
					e.KEY_COMMAND_ABORT_COMMAND =
					e.KEY_COMMAND_ENTER_COMMAND =
					e.KEY_ALT_ARROW_DOWN_COMMAND =
					e.KEY_ALT_ARROW_UP_COMMAND =
					e.KEY_DELETE_COMMAND =
					e.KEY_ESCAPE_COMMAND =
					e.KEY_BACKSPACE_COMMAND =
					e.KEY_SPACE_COMMAND =
					e.KEY_ENTER_COMMAND =
					e.KEY_COMMAND_ARROW_RIGHT_COMMAND =
					e.KEY_COMMAND_ARROW_LEFT_COMMAND =
					e.KEY_COMMAND_ARROW_UP_COMMAND =
					e.KEY_COMMAND_ARROW_DOWN_COMMAND =
					e.KEY_ARROW_DOWN_COMMAND =
					e.KEY_ARROW_UP_COMMAND =
					e.MOVE_TO_START =
					e.KEY_ARROW_LEFT_COMMAND =
					e.MOVE_TO_END =
					e.KEY_ARROW_RIGHT_COMMAND =
					e.KEY_DOWN_COMMAND =
					e.REDO_COMMAND =
					e.UNDO_COMMAND =
					e.FORMAT_TEXT_COMMAND =
					e.DELETE_LINE_COMMAND =
					e.DELETE_WORD_COMMAND =
					e.REMOVE_TEXT_COMMAND =
					e.PASTE_COMMAND =
					e.CONTROLLED_TEXT_INSERTION_COMMAND =
					e.INSERT_PARAGRAPH_COMMAND =
					e.INSERT_LINE_BREAK_COMMAND =
					e.DELETE_CHARACTER_COMMAND =
					e.CLICK_COMMAND =
					e.SELECTION_CHANGE_COMMAND =
					e.scheduleMicroTask =
					e.isArray =
					e.emptyFunction =
					e.RangeSelection =
					e.GridSelection =
					e.NodeSelection =
					e.Point =
					e.LexicalNode =
					e.simulateLexicalKeyPress =
					e.EditorState =
					e.LexicalEditor =
					e.COMMAND_PRIORITY_CRITICAL =
					e.COMMAND_PRIORITY_HIGH =
					e.COMMAND_PRIORITY_NORMAL =
					e.COMMAND_PRIORITY_LOW =
					e.COMMAND_PRIORITY_EDITOR =
						void 0),
				(e.resetEditor = m),
				(e.initializeConversionCache = r),
				(e.createEditor = u),
				(e.editorStateHasDirtySelection = h),
				(e.cloneEditorState = c),
				(e.createEmptyEditorState = n),
				(e.exportNodeToJSON = g),
				(e.$shouldPreventDefaultAndInsertText = L),
				(e.shouldSkipSelectionChange = D),
				(e.onSelectionChange = M),
				(e.onClick = N),
				(e.onPointerDown = A),
				(e.getTargetRange = R),
				(e.$canRemoveText = O),
				(e.isPossiblyAndroidKeyPress = B),
				(e.onBeforeInput = U),
				(e.onInput = z),
				(e.onCompositionStart = F),
				(e.onCompositionEndImpl = x),
				(e.onCompositionEnd = H),
				(e.onKeyUp = q),
				(e.onKeyDown = V),
				(e.getRootElementRemoveHandles = G),
				(e.onDocumentSelectionChange = J),
				(e.stopLexicalPropagation = W),
				(e.hasStoppedLexicalPropagation = X),
				(e.addRootElementEvents = Y),
				(e.removeRootElementEvents = ie),
				(e.cleanActiveNestedEditorsMap = ne),
				(e.markSelectionChangeFromDOMUpdate = ee),
				(e.markCollapsedSelectionFormat = _),
				(e.$garbageCollectDetachedDecorators = te),
				(e.$garbageCollectDetachedDeepChildNodes = Q),
				(e.$garbageCollectDetachedNodes = Z),
				(e.getIsProcesssingMutations = oe),
				(e.updateTimeStamp = ae),
				(e.initTextEntryListener = pe),
				(e.isManagedLineBreak = $e),
				(e.getLastSelection = ye),
				(e.handleTextMutation = ue),
				(e.shouldUpdateTextNodeFromMutation = fe),
				(e.$flushMutations = me),
				(e.flushRootMutations = ve),
				(e.initMutationObserver = ge),
				(e.removeNode = be),
				(e.errorOnTypeKlassMismatch = Le),
				(e.$canSimpleTextNodesBeMerged = Fe),
				(e.$mergeTextNodes = Oe),
				(e.$normalizeTextNode = xe),
				(e.$normalizeSelection = He),
				(e.$normalizePoint = Ke),
				(e.destroyNode = et),
				(e.destroyChildren = rt),
				(e.setTextAlign = ft),
				(e.setElementIndent = nt),
				(e.setElementFormat = lt),
				(e.createNode = ct),
				(e.createChildrenWithDirection = gt),
				(e.createChildren = ht),
				(e.isLastChildLineBreakOrDecorator = Rt),
				(e.reconcileElementTerminatingLineBreak = Nt),
				(e.reconcileBlockDirection = jt),
				(e.reconcileChildrenWithDirection = ti),
				(e.createChildrenArray = kt),
				(e.reconcileChildren = hi),
				(e.reconcileNode = Kt),
				(e.reconcileDecorator = di),
				(e.getFirstChild = Ye),
				(e.getNextSibling = ze),
				(e.reconcileNodeChildren = Xe),
				(e.reconcileRoot = It),
				(e.storeDOMWithKey = Lt),
				(e.getPrevElementByKeyOrThrow = xt),
				(e.$createPoint = Bt),
				(e.selectPointOnNode = Gt),
				(e.$moveSelectionPointToEnd = Mt),
				(e.$transferStartingElementPointToTextPoint = Ut),
				(e.$setPointValues = ei),
				(e.$isRangeSelection = ii),
				(e.DEPRECATED_$isGridSelection = Jt),
				(e.$isNodeSelection = Zt),
				(e.getCharacterOffset = ci),
				(e.getCharacterOffsets = ri),
				(e.$swapPoints = $i),
				(e.moveNativeSelection = Wt),
				(e.$updateCaretSelectionForUnicodeCharacter = tt),
				(e.$removeSegment = at),
				(e.shouldResolveAncestor = pi),
				(e.internalResolveSelectionPoint = Li),
				(e.resolveSelectionPointOnBoundary = Di),
				(e.normalizeSelectionPointsForBoundaries = Ui),
				(e.internalResolveSelectionPoints = Wi),
				(e.$isBlockElementNode = Gi),
				(e.internalMakeRangeSelection = qi),
				(e.$createRangeSelection = Oi),
				(e.$createNodeSelection = yi),
				(e.DEPRECATED_$createGridSelection = Ai),
				(e.internalCreateSelection = li),
				(e.internalCreateRangeSelection = Vi),
				(e.$getSelection = wi),
				(e.$getPreviousSelection = _t),
				(e.$updateElementSelectionOnCreateDeleteNode = ai),
				(e.$updateSelectionResolveTextNodes = Ft),
				(e.applySelectionTransforms = Xt),
				(e.moveSelectionPointToSibling = $t),
				(e.adjustPointOffsetForMergedSibling = ut),
				(e.updateDOMSelection = Et),
				(e.$insertNodes = Tt),
				(e.$getTextContent = qt),
				(e.DEPRECATED_$computeGridMap = At),
				(e.DEPRECATED_$getNodeTriplet = Yt),
				(e.isCurrentlyReadOnlyMode = _e),
				(e.errorOnReadOnly = Si),
				(e.errorOnInfiniteTransforms = gi),
				(e.getActiveEditorState = ki),
				(e.getActiveEditor = Pi),
				(e.internalGetActiveEditor = Hi),
				(e.$applyTransforms = Ji),
				(e.$isNodeValidForTransform = cn),
				(e.$normalizeAllDirtyTextNodes = un),
				(e.$applyAllTransforms = yn),
				(e.$parseSerializedNode = Rn),
				(e.$parseSerializedNodeImpl = _i),
				(e.parseEditorState = Bn),
				(e.readEditorState = Mn),
				(e.handleDEVOnlyPendingUpdateGuarantees = zn),
				(e.commitPendingUpdates = $n),
				(e.triggerTextContentListeners = Ln),
				(e.triggerMutationListeners = wn),
				(e.triggerListeners = Hn),
				(e.triggerCommandListeners = Yn),
				(e.triggerEnqueuedUpdates = Es),
				(e.triggerDeferredUpdateCallbacks = Nn),
				(e.processNestedUpdates = Fn),
				(e.beginUpdate = Gn),
				(e.updateEditor = Dn),
				(e.resetRandomKey = Js),
				(e.generateRandomKey = ts),
				(e.getRegisteredNodeOrThrow = js),
				(e.$isSelectionCapturedInDecorator = os),
				(e.isSelectionCapturedInDecoratorInput = En),
				(e.isSelectionWithinEditor = ns),
				(e.getNearestEditorFromDOMNode = Fi),
				(e.getTextDirection = zi),
				(e.$isTokenOrSegmented = Zi),
				(e.isDOMNodeLexicalTextNode = nn),
				(e.getDOMTextNode = fn),
				(e.toggleTextFormatType = xn),
				(e.$isLeafNode = Sn),
				(e.$setNodeKey = Un),
				(e.internalMarkParentElementsAsDirty = as),
				(e.removeFromParent = Qn),
				(e.internalMarkNodeAsDirty = $s),
				(e.internalMarkSiblingsAsDirty = Us),
				(e.$setCompositionKey = _n),
				(e.$getCompositionKey = sn),
				(e.$getNodeByKey = dn),
				(e.getNodeFromDOMNode = An),
				(e.$getNearestNodeFromDOMNode = vn),
				(e.cloneDecorators = Pn),
				(e.getEditorStateTextContent = es),
				(e.markAllNodesAsDirty = ls),
				(e.$getRoot = Jn),
				(e.internalGetRoot = ss),
				(e.$setSelection = us),
				(e.$flushMutationsUtil = Rs),
				(e.getNodeFromDOM = Ws),
				(e.getTextNodeOffset = br),
				(e.getNodeKeyFromDOM = $r),
				(e.doesContainGrapheme = Xs),
				(e.getEditorsToPropagate = ir),
				(e.createUID = nr),
				(e.getAnchorTextFromDOM = Ys),
				(e.$updateSelectedTextFromDOM = yr),
				(e.$updateTextNodeFromDOMContent = Zs),
				(e.$previousSiblingDoesNotAcceptText = wr),
				(e.$shouldInsertTextAfterOrBeforeTextNode = vr),
				(e.isTab = Cr),
				(e.isBold = sr),
				(e.isItalic = Io),
				(e.isUnderline = Sr),
				(e.isParagraph = Xr),
				(e.isLineBreak = Qs),
				(e.isOpenLineBreak = qs),
				(e.isDeleteWordBackward = xr),
				(e.isDeleteWordForward = Yr),
				(e.isDeleteLineBackward = zr),
				(e.isDeleteLineForward = Er),
				(e.isDeleteBackward = Zr),
				(e.isDeleteForward = uo),
				(e.isUndo = Ir),
				(e.isRedo = jr),
				(e.isCopy = Is),
				(e.isCut = Ur),
				(e.isArrowLeft = rr),
				(e.isArrowRight = Vs),
				(e.isArrowUp = or),
				(e.isArrowDown = Hs),
				(e.isMoveBackward = ar),
				(e.isMoveToStart = Tr),
				(e.isMoveForward = ws),
				(e.isMoveToEnd = Pr),
				(e.isMoveUp = Ci),
				(e.isMoveDown = vs),
				(e.isModifier = Ts),
				(e.isSpace = kr),
				(e.controlOrMeta = ks),
				(e.isReturn = cr),
				(e.isBackspace = ds),
				(e.isEscape = Lr),
				(e.isDelete = is),
				(e.isSelectAll = Wr),
				(e.getCachedClassNameArray = hs),
				(e.setMutatedNode = _s),
				(e.$nodesOfType = Qr),
				(e.resolveElement = Dr),
				(e.$getAdjacentNode = Cs),
				(e.isFirefoxClipboardEvents = lr),
				(e.dispatchCommand = en),
				(e.$textContentRequiresDoubleLinebreakAtEnd = Ks),
				(e.getElementByKeyOrThrow = As),
				(e.getParentElement = Os),
				(e.scrollIntoViewIfNeeded = Mr),
				(e.$hasUpdateTag = St),
				(e.$addUpdateTag = vt),
				(e.$maybeMoveChildrenSelectionToParent = oi),
				(e.$hasAncestor = Ei),
				(e.getDefaultView = tn),
				(e.getWindow = hn),
				(e.$isInlineElementOrDecoratorNode = In),
				(e.$getNearestRootOrShadowRoot = kn),
				(e.$isRootOrShadowRoot = Wn),
				(e.$copyNode = ys),
				(e.$applyNodeReplacement = fs),
				(e.errorOnInsertTextNodeOnRoot = bs),
				(e.$getNodeByKeyOrThrow = Ls),
				(e.createBlockCursorElement = Gs),
				(e.needsBlockCursor = er),
				(e.removeDOMBlockCursorElement = Nr),
				(e.updateDOMBlockCursorElement = Fs),
				(e.getDOMSelection = Ds),
				(e.$splitNode = _r),
				(e.$findMatchingParent = ur),
				(e.$getChildrenRecursively = eo),
				(e.createCommand = an),
				(e.getElementOuterTag = qr),
				(e.getElementInnerTag = Rr),
				(e.setTextThemeClassNames = go),
				(e.diffComposedText = Bs),
				(e.setTextContent = to),
				(e.createTextInnerDOM = io),
				(e.wrapElementWith = Vr),
				(e.convertSpanElement = Po),
				(e.convertBringAttentionToElement = no),
				(e.isNodePre = po),
				(e.findParentPreDOMNode = so),
				(e.convertTextDOMNode = bo),
				(e.findTextInLine = $o),
				(e.convertTextFormatElement = Ps),
				(e.$createTextNode = cs),
				(e.$isTextNode = mn),
				(e.$createTabNode = Ar),
				(e.$isTabNode = wo),
				(e.$isElementNode = ln),
				(e.isPointRemoved = fr),
				(e.convertLineBreakElement = ro),
				(e.$createLineBreakNode = gr),
				(e.$isLineBreakNode = Or),
				(e.DEPRECATED_$isGridRowNode = Fr),
				(e.DEPRECATED_$isGridCellNode = zs),
				(e.DEPRECATED_$isGridNode = Kr),
				(e.$isDecoratorNode = Xn),
				(e.$createRootNode = Ht),
				(e.$isRootNode = it),
				(e.convertParagraphElement = dt),
				(e.$createParagraphNode = yt),
				(e.$isParagraphNode = Ot),
				(w = xi(w)),
				(e.COMMAND_PRIORITY_EDITOR = 0),
				(e.COMMAND_PRIORITY_LOW = 1),
				(e.COMMAND_PRIORITY_NORMAL = 2),
				(e.COMMAND_PRIORITY_HIGH = 3),
				(e.COMMAND_PRIORITY_CRITICAL = 4);
			function m(Qe, Ge, st, pt) {
				const Ct = Qe._keyToDOMMap;
				Ct.clear(),
					(Qe._editorState = n()),
					(Qe._pendingEditorState = pt),
					(Qe._compositionKey = null),
					(Qe._dirtyType = e.NO_DIRTY_NODES),
					Qe._cloneNotNeeded.clear(),
					(Qe._dirtyLeaves = new Set()),
					Qe._dirtyElements.clear(),
					(Qe._normalizedNodes = new Set()),
					(Qe._updateTags = new Set()),
					(Qe._updates = []),
					(Qe._blockCursorElement = null);
				const Pt = Qe._observer;
				Pt !== null && (Pt.disconnect(), (Qe._observer = null)),
					Ge !== null && (Ge.textContent = ""),
					st !== null && ((st.textContent = ""), Ct.set("root", st));
			}
			function r(Qe) {
				const Ge = new Map(),
					st = new Set();
				return (
					Qe.forEach((pt) => {
						const Ct =
							pt.klass.importDOM != null
								? pt.klass.importDOM.bind(pt.klass)
								: null;
						if (Ct == null || st.has(Ct)) return;
						st.add(Ct);
						const Pt = Ct();
						Pt !== null &&
							Object.keys(Pt).forEach((zt) => {
								let Qt = Ge.get(zt);
								Qt === void 0 && ((Qt = []), Ge.set(zt, Qt)), Qt.push(Pt[zt]);
							});
					}),
					Ge
				);
			}
			function u(Qe) {
				const Ge = Qe || {},
					st = Hi(),
					pt = Ge.theme || {},
					Ct = Qe === void 0 ? st : Ge.parentEditor || null,
					Pt = Ge.disableEvents || !1,
					zt = n(),
					Qt = Ge.namespace || (Ct !== null ? Ct._config.namespace : nr()),
					ui = Ge.editorState,
					vi = [Br, dr, xs, hr, ot, ...(Ge.nodes || [])],
					Ii = Ge.onError,
					Mi = Ge.editable !== void 0 ? Ge.editable : !0;
				let Ni;
				if (Qe === void 0 && st !== null) Ni = st._nodes;
				else {
					Ni = new Map();
					for (let Ki = 0; Ki < vi.length; Ki++) {
						let ji = vi[Ki],
							Xi = null,
							on = null;
						if (typeof ji != "function") {
							const bn = ji;
							(ji = bn.replace),
								(Xi = bn.with),
								(on = bn.withKlass ? bn.withKlass : null);
						}
						const Qi = ji.getType(),
							rn = ji.transform(),
							pn = new Set();
						rn !== null && pn.add(rn),
							Ni.set(Qi, {
								klass: ji,
								replace: Xi,
								replaceWithKlass: on,
								transforms: pn,
							});
					}
				}
				const Ri = new a(
					zt,
					Ct,
					Ni,
					{ disableEvents: Pt, namespace: Qt, theme: pt },
					Ii || console.error,
					r(Ni),
					Mi,
				);
				return (
					ui !== void 0 &&
						((Ri._pendingEditorState = ui), (Ri._dirtyType = e.FULL_RECONCILE)),
					Ri
				);
			}
			class a {
				constructor(Ge, st, pt, Ct, Pt, zt, Qt) {
					(this._parentEditor = st),
						(this._rootElement = null),
						(this._editorState = Ge),
						(this._pendingEditorState = null),
						(this._compositionKey = null),
						(this._deferred = []),
						(this._keyToDOMMap = new Map()),
						(this._updates = []),
						(this._updating = !1),
						(this._listeners = {
							decorator: new Set(),
							editable: new Set(),
							mutation: new Map(),
							root: new Set(),
							textcontent: new Set(),
							update: new Set(),
						}),
						(this._commands = new Map()),
						(this._config = Ct),
						(this._nodes = pt),
						(this._decorators = {}),
						(this._pendingDecorators = null),
						(this._dirtyType = e.NO_DIRTY_NODES),
						(this._cloneNotNeeded = new Set()),
						(this._dirtyLeaves = new Set()),
						(this._dirtyElements = new Map()),
						(this._normalizedNodes = new Set()),
						(this._updateTags = new Set()),
						(this._observer = null),
						(this._key = nr()),
						(this._onError = Pt),
						(this._htmlConversions = zt),
						(this._editable = Qt),
						(this._headless = st !== null && st._headless),
						(this._window = null),
						(this._blockCursorElement = null);
				}
				isComposing() {
					return this._compositionKey != null;
				}
				registerUpdateListener(Ge) {
					const st = this._listeners.update;
					return (
						st.add(Ge),
						() => {
							st.delete(Ge);
						}
					);
				}
				registerEditableListener(Ge) {
					const st = this._listeners.editable;
					return (
						st.add(Ge),
						() => {
							st.delete(Ge);
						}
					);
				}
				registerDecoratorListener(Ge) {
					const st = this._listeners.decorator;
					return (
						st.add(Ge),
						() => {
							st.delete(Ge);
						}
					);
				}
				registerTextContentListener(Ge) {
					const st = this._listeners.textcontent;
					return (
						st.add(Ge),
						() => {
							st.delete(Ge);
						}
					);
				}
				registerRootListener(Ge) {
					const st = this._listeners.root;
					return (
						Ge(this._rootElement, null),
						st.add(Ge),
						() => {
							Ge(null, this._rootElement), st.delete(Ge);
						}
					);
				}
				registerCommand(Ge, st, pt) {
					pt === void 0 &&
						(0, w.default)(
							!1,
							'Listener for type "command" requires a "priority".',
						);
					const Ct = this._commands;
					Ct.has(Ge) ||
						Ct.set(Ge, [new Set(), new Set(), new Set(), new Set(), new Set()]);
					const Pt = Ct.get(Ge);
					Pt === void 0 &&
						(0, w.default)(
							!1,
							"registerCommand: Command %s not found in command map",
							String(Ge),
						);
					const zt = Pt[pt];
					return (
						zt.add(st),
						() => {
							zt.delete(st), Pt.every((Qt) => Qt.size === 0) && Ct.delete(Ge);
						}
					);
				}
				registerMutationListener(Ge, st) {
					this._nodes.get(Ge.getType()) === void 0 &&
						(0, w.default)(
							!1,
							"Node %s has not been registered. Ensure node has been passed to createEditor.",
							Ge.name,
						);
					const Ct = this._listeners.mutation;
					return (
						Ct.set(st, Ge),
						() => {
							Ct.delete(st);
						}
					);
				}
				registerNodeTransformToKlass(Ge, st) {
					const pt = Ge.getType(),
						Ct = this._nodes.get(pt);
					return (
						Ct === void 0 &&
							(0, w.default)(
								!1,
								"Node %s has not been registered. Ensure node has been passed to createEditor.",
								Ge.name,
							),
						Ct.transforms.add(st),
						Ct
					);
				}
				registerNodeTransform(Ge, st) {
					const pt = this.registerNodeTransformToKlass(Ge, st),
						Ct = [pt],
						Pt = pt.replaceWithKlass;
					if (Pt != null) {
						const zt = this.registerNodeTransformToKlass(Pt, st);
						Ct.push(zt);
					}
					return (
						ls(this, Ge.getType()),
						() => {
							Ct.forEach((zt) => zt.transforms.delete(st));
						}
					);
				}
				hasNodes(Ge) {
					for (let st = 0; st < Ge.length; st++) {
						const Ct = Ge[st].getType();
						if (!this._nodes.has(Ct)) return !1;
					}
					return !0;
				}
				dispatchCommand(Ge, st) {
					return en(this, Ge, st);
				}
				getDecorators() {
					return this._decorators;
				}
				getRootElement() {
					return this._rootElement;
				}
				getKey() {
					return this._key;
				}
				setRootElement(Ge) {
					const st = this._rootElement;
					if (Ge !== st) {
						const pt = hs(this._config.theme, "root"),
							Ct = this._pendingEditorState || this._editorState;
						if (
							((this._rootElement = Ge),
							m(this, st, Ge, Ct),
							st !== null &&
								(this._config.disableEvents || ie(st),
								pt != null && st.classList.remove(...pt)),
							Ge !== null)
						) {
							const Pt = tn(Ge),
								zt = Ge.style;
							(zt.userSelect = "text"),
								(zt.whiteSpace = "pre-wrap"),
								(zt.wordBreak = "break-word"),
								Ge.setAttribute("data-lexical-editor", "true"),
								(this._window = Pt),
								(this._dirtyType = e.FULL_RECONCILE),
								ge(this),
								this._updateTags.add("history-merge"),
								$n(this),
								this._config.disableEvents || Y(Ge, this),
								pt != null && Ge.classList.add(...pt);
						} else this._window = null;
						Hn("root", this, !1, Ge, st);
					}
				}
				getElementByKey(Ge) {
					return this._keyToDOMMap.get(Ge) || null;
				}
				getEditorState() {
					return this._editorState;
				}
				setEditorState(Ge, st) {
					Ge.isEmpty() &&
						(0, w.default)(
							!1,
							"setEditorState: the editor state is empty. Ensure the editor state's root node never becomes empty.",
						),
						ve(this);
					const pt = this._pendingEditorState,
						Ct = this._updateTags,
						Pt = st !== void 0 ? st.tag : null;
					pt !== null && !pt.isEmpty() && (Pt != null && Ct.add(Pt), $n(this)),
						(this._pendingEditorState = Ge),
						(this._dirtyType = e.FULL_RECONCILE),
						this._dirtyElements.set("root", !1),
						(this._compositionKey = null),
						Pt != null && Ct.add(Pt),
						$n(this);
				}
				parseEditorState(Ge, st) {
					const pt = typeof Ge == "string" ? JSON.parse(Ge) : Ge;
					return Bn(pt, this, st);
				}
				update(Ge, st) {
					Dn(this, Ge, st);
				}
				focus(Ge, st = {}) {
					const pt = this._rootElement;
					pt !== null &&
						(pt.setAttribute("autocapitalize", "off"),
						Dn(
							this,
							() => {
								const Ct = wi(),
									Pt = Jn();
								Ct !== null
									? (Ct.dirty = !0)
									: Pt.getChildrenSize() !== 0 &&
										(st.defaultSelection === "rootStart"
											? Pt.selectStart()
											: Pt.selectEnd());
							},
							{
								onUpdate: () => {
									pt.removeAttribute("autocapitalize"), Ge && Ge();
								},
								tag: "focus",
							},
						),
						this._pendingEditorState === null &&
							pt.removeAttribute("autocapitalize"));
				}
				blur() {
					const Ge = this._rootElement;
					Ge !== null && Ge.blur();
					const st = Ds(this._window);
					st !== null && st.removeAllRanges();
				}
				isEditable() {
					return this._editable;
				}
				setEditable(Ge) {
					this._editable !== Ge &&
						((this._editable = Ge), Hn("editable", this, !0, Ge));
				}
				toJSON() {
					return { editorState: this._editorState.toJSON() };
				}
			}
			e.LexicalEditor = a;
			function h(Qe, Ge) {
				const st = Ge.getEditorState()._selection,
					pt = Qe._selection;
				if (pt !== null) {
					if (pt.dirty || !pt.is(st)) return !0;
				} else if (st !== null) return !0;
				return !1;
			}
			function c(Qe) {
				return new p(new Map(Qe._nodeMap));
			}
			function n() {
				return new p(new Map([["root", Ht()]]));
			}
			function g(Qe) {
				const Ge = Qe.exportJSON(),
					st = Qe.constructor;
				Ge.type !== st.getType() &&
					(0, w.default)(
						!1,
						"LexicalNode: Node %s does not implement .exportJSON().",
						st.name,
					);
				const pt = Ge.children;
				if (ln(Qe)) {
					Array.isArray(pt) ||
						(0, w.default)(
							!1,
							"LexicalNode: Node %s is an element but .exportJSON() does not have a children array.",
							st.name,
						);
					const Ct = Qe.getChildren();
					for (let Pt = 0; Pt < Ct.length; Pt++) {
						const zt = Ct[Pt],
							Qt = g(zt);
						pt.push(Qt);
					}
				}
				return Ge;
			}
			class p {
				constructor(Ge, st) {
					(this._nodeMap = Ge),
						(this._selection = st || null),
						(this._flushSync = !1),
						(this._readOnly = !1);
				}
				isEmpty() {
					return this._nodeMap.size === 1 && this._selection === null;
				}
				read(Ge) {
					return Mn(this, Ge);
				}
				clone(Ge) {
					const st = new p(this._nodeMap, Ge === void 0 ? this._selection : Ge);
					return (st._readOnly = !0), st;
				}
				toJSON() {
					return Mn(this, () => ({ root: g(Jn()) }));
				}
			}
			e.EditorState = p;
			const o = Object.freeze({}),
				f = 30,
				b = [
					["keydown", V],
					["keyup", q],
					["pointerdown", A],
					["compositionstart", F],
					["compositionend", H],
					["input", z],
					["click", N],
					["cut", o],
					["copy", o],
					["dragstart", o],
					["dragover", o],
					["dragend", o],
					["paste", o],
					["focus", o],
					["blur", o],
					["drop", o],
				];
			i.CAN_USE_BEFORE_INPUT && b.push(["beforeinput", (Qe, Ge) => U(Qe, Ge)]);
			let s = 0,
				l = 0,
				y = 0,
				$ = null,
				v = 0,
				S = !1,
				I = !1,
				T = !1,
				P = !1,
				k = [0, "", 0, "root", 0];
			function L(Qe, Ge, st, pt, Ct) {
				const Pt = Qe.anchor,
					zt = Qe.focus,
					Qt = Pt.getNode(),
					ui = Pi(),
					vi = Ds(ui._window),
					Ii = vi !== null ? vi.anchorNode : null,
					Mi = Pt.key,
					Ni = ui.getElementByKey(Mi),
					Ri = st.length;
				return (
					Mi !== zt.key ||
					!mn(Qt) ||
					(((!Ct && (!i.CAN_USE_BEFORE_INPUT || y < pt + 50)) ||
						(Qt.isDirty() && Ri < 2) ||
						Xs(st)) &&
						Pt.offset !== zt.offset &&
						!Qt.isComposing()) ||
					Zi(Qt) ||
					(Qt.isDirty() && Ri > 1) ||
					((Ct || !i.CAN_USE_BEFORE_INPUT) &&
						Ni !== null &&
						!Qt.isComposing() &&
						Ii !== fn(Ni)) ||
					(vi !== null &&
						Ge !== null &&
						(!Ge.collapsed ||
							Ge.startContainer !== vi.anchorNode ||
							Ge.startOffset !== vi.anchorOffset)) ||
					Qt.getFormat() !== Qe.format ||
					Qt.getStyle() !== Qe.style ||
					vr(Qe, Qt)
				);
			}
			function D(Qe, Ge) {
				return (
					Qe !== null &&
					Qe.nodeValue !== null &&
					Qe.nodeType === e.DOM_TEXT_TYPE &&
					Ge !== 0 &&
					Ge !== Qe.nodeValue.length
				);
			}
			function M(Qe, Ge, st) {
				const {
					anchorNode: pt,
					anchorOffset: Ct,
					focusNode: Pt,
					focusOffset: zt,
				} = Qe;
				(S && ((S = !1), D(pt, Ct) && D(Pt, zt))) ||
					Dn(Ge, () => {
						if (!st) {
							us(null);
							return;
						}
						if (!ns(Ge, pt, Pt)) return;
						const Qt = wi();
						if (ii(Qt)) {
							const ui = Qt.anchor,
								vi = ui.getNode();
							if (Qt.isCollapsed()) {
								Qe.type === "Range" &&
									Qe.anchorNode === Qe.focusNode &&
									(Qt.dirty = !0);
								const Ii = hn(Ge).event,
									Mi = Ii ? Ii.timeStamp : performance.now(),
									[Ni, Ri, Ki, ji, Xi] = k;
								Mi < Xi + 200 && ui.offset === Ki && ui.key === ji
									? ((Qt.format = Ni), (Qt.style = Ri))
									: ui.type === "text"
										? ((Qt.format = vi.getFormat()), (Qt.style = vi.getStyle()))
										: ui.type === "element" &&
											((Qt.format = 0), (Qt.style = ""));
							} else {
								let Ii = e.IS_ALL_FORMATTING,
									Mi = !1;
								const Ni = Qt.getNodes(),
									Ri = Ni.length;
								for (let Ki = 0; Ki < Ri; Ki++) {
									const ji = Ni[Ki];
									if (mn(ji) && ((Mi = !0), (Ii &= ji.getFormat()), Ii === 0))
										break;
								}
								Qt.format = Mi ? Ii : 0;
							}
						}
						en(Ge, e.SELECTION_CHANGE_COMMAND, void 0);
					});
			}
			function N(Qe, Ge) {
				Dn(Ge, () => {
					const st = wi(),
						pt = Ds(Ge._window),
						Ct = _t();
					if (pt) {
						if (ii(st)) {
							const Pt = st.anchor,
								zt = Pt.getNode();
							if (
								Pt.type === "element" &&
								Pt.offset === 0 &&
								st.isCollapsed() &&
								!it(zt) &&
								Jn().getChildrenSize() === 1 &&
								zt.getTopLevelElementOrThrow().isEmpty() &&
								Ct !== null &&
								st.is(Ct)
							)
								pt.removeAllRanges(), (st.dirty = !0);
							else if (Qe.detail === 3 && !st.isCollapsed()) {
								const ui = st.focus.getNode();
								zt !== ui &&
									(ln(zt) ? zt.select(0) : zt.getParentOrThrow().select(0));
							}
						} else if (Qe.pointerType === "touch") {
							const Pt = pt.anchorNode;
							if (Pt !== null) {
								const zt = Pt.nodeType;
								if (zt === e.DOM_ELEMENT_TYPE || zt === e.DOM_TEXT_TYPE) {
									const Qt = Vi(Ct, pt, Ge);
									us(Qt);
								}
							}
						}
					}
					en(Ge, e.CLICK_COMMAND, Qe);
				});
			}
			function A(Qe, Ge) {
				const st = Qe.target,
					pt = Qe.pointerType;
				st instanceof Node &&
					pt !== "touch" &&
					Dn(Ge, () => {
						os(st) || (I = !0);
					});
			}
			function R(Qe) {
				if (!Qe.getTargetRanges) return null;
				const Ge = Qe.getTargetRanges();
				return Ge.length === 0 ? null : Ge[0];
			}
			function O(Qe, Ge) {
				return Qe !== Ge || ln(Qe) || ln(Ge) || !Qe.isToken() || !Ge.isToken();
			}
			function B(Qe) {
				return l === 229 && Qe < s + f;
			}
			function U(Qe, Ge) {
				const st = Qe.inputType,
					pt = R(Qe);
				st === "deleteCompositionText" ||
					(i.IS_FIREFOX && lr(Ge)) ||
					(st !== "insertCompositionText" &&
						Dn(Ge, () => {
							const Ct = wi();
							if (st === "deleteContentBackward") {
								if (Ct === null) {
									const Ii = _t();
									if (!ii(Ii)) return;
									us(Ii.clone());
								}
								if (ii(Ct)) {
									if (
										B(Qe.timeStamp) &&
										Ge.isComposing() &&
										Ct.anchor.key === Ct.focus.key
									) {
										if (
											(_n(null),
											(s = 0),
											setTimeout(() => {
												Dn(Ge, () => {
													_n(null);
												});
											}, f),
											ii(Ct))
										) {
											const Ii = Ct.anchor.getNode();
											Ii.markDirty(),
												(Ct.format = Ii.getFormat()),
												(Ct.style = Ii.getStyle());
										}
									} else
										Qe.preventDefault(), en(Ge, e.DELETE_CHARACTER_COMMAND, !0);
									return;
								}
							}
							if (!ii(Ct)) return;
							const Pt = Qe.data;
							$ !== null && yr(!1, Ge, $),
								(!Ct.dirty || $ !== null) &&
									Ct.isCollapsed() &&
									!it(Ct.anchor.getNode()) &&
									pt !== null &&
									Ct.applyDOMRange(pt),
								($ = null);
							const zt = Ct.anchor,
								Qt = Ct.focus,
								ui = zt.getNode(),
								vi = Qt.getNode();
							if (st === "insertText" || st === "insertTranspose") {
								if (
									Pt ===
									`
`
								)
									Qe.preventDefault(), en(Ge, e.INSERT_LINE_BREAK_COMMAND, !1);
								else if (Pt === e.DOUBLE_LINE_BREAK)
									Qe.preventDefault(),
										en(Ge, e.INSERT_PARAGRAPH_COMMAND, void 0);
								else if (Pt == null && Qe.dataTransfer) {
									const Ii = Qe.dataTransfer.getData("text/plain");
									Qe.preventDefault(), Ct.insertRawText(Ii);
								} else
									Pt != null && L(Ct, pt, Pt, Qe.timeStamp, !0)
										? (Qe.preventDefault(),
											en(Ge, e.CONTROLLED_TEXT_INSERTION_COMMAND, Pt))
										: ($ = Pt);
								y = Qe.timeStamp;
								return;
							}
							switch ((Qe.preventDefault(), st)) {
								case "insertFromYank":
								case "insertFromDrop":
								case "insertReplacementText": {
									en(Ge, e.CONTROLLED_TEXT_INSERTION_COMMAND, Qe);
									break;
								}
								case "insertFromComposition": {
									_n(null), en(Ge, e.CONTROLLED_TEXT_INSERTION_COMMAND, Qe);
									break;
								}
								case "insertLineBreak": {
									_n(null), en(Ge, e.INSERT_LINE_BREAK_COMMAND, !1);
									break;
								}
								case "insertParagraph": {
									_n(null),
										T
											? ((T = !1), en(Ge, e.INSERT_LINE_BREAK_COMMAND, !1))
											: en(Ge, e.INSERT_PARAGRAPH_COMMAND, void 0);
									break;
								}
								case "insertFromPaste":
								case "insertFromPasteAsQuotation": {
									en(Ge, e.PASTE_COMMAND, Qe);
									break;
								}
								case "deleteByComposition": {
									O(ui, vi) && en(Ge, e.REMOVE_TEXT_COMMAND, void 0);
									break;
								}
								case "deleteByDrag":
								case "deleteByCut": {
									en(Ge, e.REMOVE_TEXT_COMMAND, void 0);
									break;
								}
								case "deleteContent": {
									en(Ge, e.DELETE_CHARACTER_COMMAND, !1);
									break;
								}
								case "deleteWordBackward": {
									en(Ge, e.DELETE_WORD_COMMAND, !0);
									break;
								}
								case "deleteWordForward": {
									en(Ge, e.DELETE_WORD_COMMAND, !1);
									break;
								}
								case "deleteHardLineBackward":
								case "deleteSoftLineBackward": {
									en(Ge, e.DELETE_LINE_COMMAND, !0);
									break;
								}
								case "deleteContentForward":
								case "deleteHardLineForward":
								case "deleteSoftLineForward": {
									en(Ge, e.DELETE_LINE_COMMAND, !1);
									break;
								}
								case "formatStrikeThrough": {
									en(Ge, e.FORMAT_TEXT_COMMAND, "strikethrough");
									break;
								}
								case "formatBold": {
									en(Ge, e.FORMAT_TEXT_COMMAND, "bold");
									break;
								}
								case "formatItalic": {
									en(Ge, e.FORMAT_TEXT_COMMAND, "italic");
									break;
								}
								case "formatUnderline": {
									en(Ge, e.FORMAT_TEXT_COMMAND, "underline");
									break;
								}
								case "historyUndo": {
									en(Ge, e.UNDO_COMMAND, void 0);
									break;
								}
								case "historyRedo": {
									en(Ge, e.REDO_COMMAND, void 0);
									break;
								}
								default:
							}
						}));
			}
			function z(Qe, Ge) {
				Qe.stopPropagation(),
					Dn(Ge, () => {
						const st = wi(),
							pt = Qe.data,
							Ct = R(Qe);
						if (pt != null && ii(st) && L(st, Ct, pt, Qe.timeStamp, !1)) {
							P && (x(Ge, pt), (P = !1));
							const Pt = st.anchor,
								zt = Pt.getNode(),
								Qt = Ds(Ge._window);
							if (Qt === null) return;
							const ui = Pt.offset;
							(!i.CAN_USE_BEFORE_INPUT ||
								st.isCollapsed() ||
								!mn(zt) ||
								Qt.anchorNode === null ||
								zt.getTextContent().slice(0, ui) +
									pt +
									zt.getTextContent().slice(ui + st.focus.offset) !==
									Ys(Qt.anchorNode)) &&
								en(Ge, e.CONTROLLED_TEXT_INSERTION_COMMAND, pt);
							const vi = pt.length;
							i.IS_FIREFOX &&
								vi > 1 &&
								Qe.inputType === "insertCompositionText" &&
								!Ge.isComposing() &&
								(st.anchor.offset -= vi),
								!i.IS_SAFARI &&
									!i.IS_IOS &&
									!i.IS_APPLE_WEBKIT &&
									Ge.isComposing() &&
									((s = 0), _n(null));
						} else
							yr(!1, Ge, pt !== null ? pt : void 0),
								P && (x(Ge, pt || void 0), (P = !1));
						Rs();
					}),
					($ = null);
			}
			function F(Qe, Ge) {
				Dn(Ge, () => {
					const st = wi();
					if (ii(st) && !Ge.isComposing()) {
						const pt = st.anchor,
							Ct = st.anchor.getNode();
						_n(pt.key),
							(Qe.timeStamp < s + f ||
								pt.type === "element" ||
								!st.isCollapsed() ||
								Ct.getFormat() !== st.format ||
								Ct.getStyle() !== st.style) &&
								en(
									Ge,
									e.CONTROLLED_TEXT_INSERTION_COMMAND,
									e.COMPOSITION_START_CHAR,
								);
					}
				});
			}
			function x(Qe, Ge) {
				const st = Qe._compositionKey;
				if ((_n(null), st !== null && Ge != null)) {
					if (Ge === "") {
						const pt = dn(st),
							Ct = fn(Qe.getElementByKey(st));
						Ct !== null &&
							Ct.nodeValue !== null &&
							mn(pt) &&
							Zs(pt, Ct.nodeValue, null, null, !0);
						return;
					}
					if (
						Ge[Ge.length - 1] ===
						`
`
					) {
						const pt = wi();
						if (ii(pt)) {
							const Ct = pt.focus;
							pt.anchor.set(Ct.key, Ct.offset, Ct.type),
								en(Qe, e.KEY_ENTER_COMMAND, null);
							return;
						}
					}
				}
				yr(!0, Qe, Ge);
			}
			function H(Qe, Ge) {
				i.IS_FIREFOX
					? (P = !0)
					: Dn(Ge, () => {
							x(Ge, Qe.data);
						});
			}
			function q(Qe, Ge) {
				const {
					keyCode: st,
					shiftKey: pt,
					ctrlKey: Ct,
					metaKey: Pt,
					altKey: zt,
				} = Qe;
				st === 18 && !zt
					? (Qe.preventDefault(), en(Ge, e.KEY_ALT_UP_COMMAND, Qe))
					: (d.$m ? st === 91 && !Pt : st === 17 && !Ct)
						? en(Ge, e.KEY_COMMAND_UP_COMMAND, Qe)
						: st === 16 && en(Ge, e.KEY_SHIFT_UP_COMMAND, Qe);
			}
			function V(Qe, Ge) {
				if (
					((Qe.keyCode === 9 && Qe.ctrlKey) ||
					Qe.keyCode === 17 ||
					(Qe.metaKey && Qe.keyCode === 220)
						? console.log("[lexical] Saw whitelisted key, not stopping")
						: Qe.stopPropagation(),
					(s = Qe.timeStamp),
					(l = Qe.keyCode),
					Ge.isComposing())
				)
					return;
				const {
					keyCode: st,
					shiftKey: pt,
					ctrlKey: Ct,
					metaKey: Pt,
					altKey: zt,
				} = Qe;
				if (!en(Ge, e.KEY_DOWN_COMMAND, Qe)) {
					if (st === 13 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_ENTER_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 8 && (Ct || Pt))
						en(Ge, e.KEY_BACKSPACE_DELETE_COMMAND, Qe) && Qe.preventDefault();
					else if (d.$m && st === 67 && Ct)
						en(Ge, e.KEY_MAC_CTRL_C_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 67 && Ct)
						en(Ge, e.KEY_COMMAND_ABORT_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 87 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_W_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 190 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_DOT_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 191 && (Ct || Pt) && !pt)
						en(Ge, e.KEY_COMMAND_SLASH_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 191 && (Ct || Pt) && pt)
						en(Ge, e.KEY_COMMAND_SHIFT_SLASH_COMMAND, Qe) &&
							Qe.preventDefault();
					else if (st === 16)
						en(Ge, e.KEY_SHIFT_DOWN_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 75 && (Ct || Pt) && pt)
						en(Ge, e.KEY_COMMAND_SHIFT_K_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 68 && (Ct || Pt) && pt)
						en(Ge, e.KEY_COMMAND_SHIFT_D_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 83 && (Ct || Pt) && pt)
						en(Ge, e.KEY_COMMAND_SHIFT_S_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 83 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_S_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 75 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_K_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 89 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_Y_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 68 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_D_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 69 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_E_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 72 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_H_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 49 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_1_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 50 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_2_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 51 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_3_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 52 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_4_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 53 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_5_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 54 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_6_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 55 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_7_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 56 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_8_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 57 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_9_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 48 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_0_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 74 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_J_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 76 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_L_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 89 && ((Ct && pt) || Pt))
						en(Ge, e.KEY_COMMAND_Y_OR_CNTRL_SHIFT_Y_COMMAND, Qe) &&
							Qe.preventDefault();
					else if (st === 85 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_U_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 84 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_T_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 80 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_P_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 66 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_B_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 65 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_A_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 73 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_I_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 78 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_N_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 82 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_R_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 77 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_M_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 86 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_V_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 71 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_G_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 219 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_LEFT_BRACKET_COMMAND, Qe) &&
							Qe.preventDefault();
					else if (st === 221 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_RIGHT_BRACKET_COMMAND, Qe) &&
							Qe.preventDefault();
					else if (or(st) && zt) en(Ge, e.KEY_ALT_ARROW_UP_COMMAND, Qe);
					else if (Hs(st) && zt) en(Ge, e.KEY_ALT_ARROW_DOWN_COMMAND, Qe);
					else if (ws(st, Ct, zt, Pt)) en(Ge, e.KEY_ARROW_RIGHT_COMMAND, Qe);
					else if (Pr(st, Ct, pt, zt, Pt)) en(Ge, e.MOVE_TO_END, Qe);
					else if (ar(st, Ct, zt, Pt)) en(Ge, e.KEY_ARROW_LEFT_COMMAND, Qe);
					else if (Tr(st, Ct, pt, zt, Pt)) en(Ge, e.MOVE_TO_START, Qe);
					else if (Ci(st, Ct, Pt)) en(Ge, e.KEY_ARROW_UP_COMMAND, Qe);
					else if (Hs(st) && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_ARROW_DOWN_COMMAND, Qe);
					else if (or(st) && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_ARROW_UP_COMMAND, Qe);
					else if (rr(st) && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_ARROW_LEFT_COMMAND, Qe);
					else if (Vs(st) && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_ARROW_RIGHT_COMMAND, Qe);
					else if (vs(st, Ct, Pt)) en(Ge, e.KEY_ARROW_DOWN_COMMAND, Qe);
					else if (Qs(st, pt)) (T = !0), en(Ge, e.KEY_ENTER_COMMAND, Qe);
					else if (kr(st)) en(Ge, e.KEY_SPACE_COMMAND, Qe);
					else if (qs(st, Ct))
						Qe.preventDefault(),
							(T = !0),
							en(Ge, e.INSERT_LINE_BREAK_COMMAND, !0);
					else if (Xr(st, pt)) (T = !1), en(Ge, e.KEY_ENTER_COMMAND, Qe);
					else if (Zr(st, zt, Pt, Ct))
						ds(st)
							? en(Ge, e.KEY_BACKSPACE_COMMAND, Qe)
							: (Qe.preventDefault(), en(Ge, e.DELETE_CHARACTER_COMMAND, !0));
					else if (Lr(st)) en(Ge, e.KEY_ESCAPE_COMMAND, Qe);
					else if (uo(st, Ct, pt, zt, Pt))
						is(st)
							? en(Ge, e.KEY_DELETE_COMMAND, Qe)
							: (Qe.preventDefault(), en(Ge, e.DELETE_CHARACTER_COMMAND, !1));
					else if (xr(st, zt, Ct))
						Qe.preventDefault(), en(Ge, e.DELETE_WORD_COMMAND, !0);
					else if (Yr(st, zt, Ct))
						Qe.preventDefault(), en(Ge, e.DELETE_WORD_COMMAND, !1);
					else if (zr(st, Pt))
						Qe.preventDefault(), en(Ge, e.DELETE_LINE_COMMAND, !0);
					else if (Er(st, Pt))
						Qe.preventDefault(), en(Ge, e.DELETE_LINE_COMMAND, !1);
					else if (sr(st, zt, Pt, Ct))
						Qe.preventDefault(), en(Ge, e.FORMAT_TEXT_COMMAND, "bold");
					else if (Sr(st, zt, Pt, Ct))
						Qe.preventDefault(), en(Ge, e.FORMAT_TEXT_COMMAND, "underline");
					else if (Io(st, zt, Pt, Ct))
						Qe.preventDefault(), en(Ge, e.FORMAT_TEXT_COMMAND, "italic");
					else if (Cr(st, zt, Ct, Pt)) en(Ge, e.KEY_TAB_COMMAND, Qe);
					else if (Ir(st, pt, Pt, Ct))
						Qe.preventDefault(), en(Ge, e.UNDO_COMMAND, void 0);
					else if (jr(st, pt, Pt, Ct))
						Qe.preventDefault(), en(Ge, e.REDO_COMMAND, void 0);
					else if (st === 49 && zt)
						en(Ge, e.KEY_ALT_1_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 50 && zt)
						en(Ge, e.KEY_ALT_2_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 51 && zt)
						en(Ge, e.KEY_ALT_3_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 52 && zt)
						en(Ge, e.KEY_ALT_4_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 53 && zt)
						en(Ge, e.KEY_ALT_5_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 18 && zt)
						en(Ge, e.KEY_ALT_COMMAND, Qe) && Qe.preventDefault();
					else if (d.$m ? st === 91 && Pt : st === 17 && Ct)
						en(Ge, e.KEY_COMMAND_COMMAND, Qe) && Qe.preventDefault();
					else {
						const Qt = Ge._editorState._selection;
						Zt(Qt) &&
							(Is(st, pt, Pt, Ct)
								? (Qe.preventDefault(), en(Ge, e.COPY_COMMAND, Qe))
								: Ur(st, pt, Pt, Ct)
									? (Qe.preventDefault(), en(Ge, e.CUT_COMMAND, Qe))
									: Wr(st, Pt, Ct) &&
										(Qe.preventDefault(),
										Ge.update(() => {
											const ui = Jn();
											ui.select(0, ui.getChildrenSize());
										})));
					}
					Ts(Ct, pt, zt, Pt) && en(Ge, e.KEY_MODIFIER_COMMAND, Qe);
				}
			}
			e.simulateLexicalKeyPress = V;
			function G(Qe) {
				let Ge = Qe.__lexicalEventHandles;
				return (
					Ge === void 0 && ((Ge = []), (Qe.__lexicalEventHandles = Ge)), Ge
				);
			}
			const K = new Map();
			function J(Qe) {
				const Ge = (0, E.$Ogb)(),
					st = Ds(Ge);
				if (st === null) return;
				const pt = Fi(st.anchorNode);
				if (pt === null) return;
				I &&
					((I = !1),
					Dn(pt, () => {
						const vi = _t(),
							Ii = st.anchorNode;
						if (Ii === null) return;
						const Mi = Ii.nodeType;
						if (Mi !== e.DOM_ELEMENT_TYPE && Mi !== e.DOM_TEXT_TYPE) return;
						const Ni = Vi(vi, st, pt);
						us(Ni);
					}));
				const Ct = ir(pt),
					Pt = Ct[Ct.length - 1],
					zt = Pt._key,
					Qt = K.get(zt),
					ui = Qt || Pt;
				ui !== pt && M(st, ui, !1),
					M(st, pt, !0),
					pt !== Pt ? K.set(zt, pt) : Qt && K.delete(zt);
			}
			function W(Qe) {
				Qe._lexicalHandled = !0;
			}
			function X(Qe) {
				return Qe._lexicalHandled === !0;
			}
			function Y(Qe, Ge) {
				v === 0 && (0, E.$Ngb)().addEventListener("selectionchange", J),
					v++,
					(Qe.__lexicalEditor = Ge);
				const st = G(Qe);
				for (let pt = 0; pt < b.length; pt++) {
					const [Ct, Pt] = b[pt],
						zt =
							typeof Pt == "function"
								? (Qt) => {
										X(Qt) || (W(Qt), Ge.isEditable() && Pt(Qt, Ge));
									}
								: (Qt) => {
										if (!X(Qt) && (W(Qt), Ge.isEditable()))
											switch (Ct) {
												case "cut":
													return en(Ge, e.CUT_COMMAND, Qt);
												case "copy":
													return en(Ge, e.COPY_COMMAND, Qt);
												case "paste":
													return en(Ge, e.PASTE_COMMAND, Qt);
												case "dragstart":
													return en(Ge, e.DRAGSTART_COMMAND, Qt);
												case "dragover":
													return en(Ge, e.DRAGOVER_COMMAND, Qt);
												case "dragend":
													return en(Ge, e.DRAGEND_COMMAND, Qt);
												case "focus":
													return en(Ge, e.FOCUS_COMMAND, Qt);
												case "blur":
													return en(Ge, e.BLUR_COMMAND, Qt);
												case "drop":
													return en(Ge, e.DROP_COMMAND, Qt);
											}
									};
					Qe.addEventListener(Ct, zt),
						st.push(() => {
							Qe.removeEventListener(Ct, zt);
						});
				}
			}
			function ie(Qe) {
				v !== 0 &&
					(v--,
					v === 0 && (0, E.$Ngb)().removeEventListener("selectionchange", J));
				const Ge = Qe.__lexicalEditor;
				Ge != null && (ne(Ge), (Qe.__lexicalEditor = null));
				const st = G(Qe);
				for (let pt = 0; pt < st.length; pt++) st[pt]();
				Qe.__lexicalEventHandles = [];
			}
			function ne(Qe) {
				if (Qe._parentEditor !== null) {
					const Ge = ir(Qe),
						pt = Ge[Ge.length - 1]._key;
					K.get(pt) === Qe && K.delete(pt);
				} else K.delete(Qe._key);
			}
			function ee() {
				S = !0;
			}
			function _(Qe, Ge, st, pt, Ct) {
				k = [Qe, Ge, st, pt, Ct];
			}
			function te(Qe, Ge) {
				const st = Qe._decorators;
				let Ct = Qe._pendingDecorators || st;
				const Pt = Ge._nodeMap;
				let zt;
				for (zt in Ct)
					Pt.has(zt) || (Ct === st && (Ct = Pn(Qe)), delete Ct[zt]);
			}
			function Q(Qe, Ge, st, pt, Ct, Pt) {
				let zt = Qe.getFirstChild();
				for (; zt !== null; ) {
					const Qt = zt.__key;
					zt.__parent === Ge &&
						(ln(zt) && Q(zt, Qt, st, pt, Ct, Pt),
						st.has(Qt) || Pt.delete(Qt),
						Ct.push(Qt)),
						(zt = zt.getNextSibling());
				}
			}
			function Z(Qe, Ge, st, pt) {
				const Ct = Qe._nodeMap,
					Pt = Ge._nodeMap,
					zt = [];
				for (const [Qt] of pt) {
					const ui = Pt.get(Qt);
					ui !== void 0 &&
						(ui.isAttached() ||
							(ln(ui) && Q(ui, Qt, Ct, Pt, zt, pt),
							Ct.has(Qt) || pt.delete(Qt),
							zt.push(Qt)));
				}
				for (const Qt of zt) Pt.delete(Qt);
				for (const Qt of st) {
					const ui = Pt.get(Qt);
					ui !== void 0 &&
						!ui.isAttached() &&
						(Ct.has(Qt) || st.delete(Qt), Pt.delete(Qt));
				}
			}
			const se = 100;
			let re = !1,
				le = 0;
			function oe() {
				return re;
			}
			function ae(Qe) {
				le = Qe.timeStamp;
			}
			function pe(Qe) {
				le === 0 && hn(Qe).addEventListener("textInput", ae, !0);
			}
			function $e(Qe, Ge, st) {
				return (
					Ge.__lexicalLineBreak === Qe ||
					Qe[`__lexicalKey_${st._key}`] !== void 0
				);
			}
			function ye(Qe) {
				return Qe.getEditorState().read(() => {
					const Ge = wi();
					return Ge !== null ? Ge.clone() : null;
				});
			}
			function ue(Qe, Ge, st) {
				const pt = Ds(st._window);
				let Ct = null,
					Pt = null;
				pt !== null &&
					pt.anchorNode === Qe &&
					((Ct = pt.anchorOffset), (Pt = pt.focusOffset));
				const zt = Qe.nodeValue;
				zt !== null && Zs(Ge, zt, Ct, Pt, !1);
			}
			function fe(Qe, Ge, st) {
				if (ii(Qe)) {
					const pt = Qe.anchor.getNode();
					if (pt.is(st) && Qe.format !== pt.getFormat()) return !1;
				}
				return Ge.nodeType === e.DOM_TEXT_TYPE && st.isAttached();
			}
			function me(Qe, Ge, st) {
				re = !0;
				const pt = performance.now() - le > se;
				try {
					Dn(Qe, () => {
						const Ct = wi() || ye(Qe),
							Pt = new Map(),
							zt = Qe.getRootElement(),
							Qt = Qe._editorState,
							ui = Qe._blockCursorElement;
						let vi = !1,
							Ii = "";
						for (let Ni = 0; Ni < Ge.length; Ni++) {
							const Ri = Ge[Ni],
								Ki = Ri.type,
								ji = Ri.target;
							let Xi = vn(ji, Qt);
							if (!((Xi === null && ji !== zt) || Xn(Xi))) {
								if (Ki === "characterData")
									pt && mn(Xi) && fe(Ct, ji, Xi) && ue(ji, Xi, Qe);
								else if (Ki === "childList") {
									vi = !0;
									const on = Ri.addedNodes;
									for (let pn = 0; pn < on.length; pn++) {
										const bn = on[pn],
											gn = An(bn),
											Cn = bn.parentNode;
										if (
											Cn != null &&
											bn !== ui &&
											gn === null &&
											(bn.nodeName !== "BR" || !$e(bn, Cn, Qe))
										) {
											if (i.IS_FIREFOX) {
												const Tn = bn.innerText || bn.nodeValue;
												Tn && (Ii += Tn);
											}
											Cn.removeChild(bn);
										}
									}
									const Qi = Ri.removedNodes,
										rn = Qi.length;
									if (rn > 0) {
										let pn = 0;
										for (let bn = 0; bn < rn; bn++) {
											const gn = Qi[bn];
											((gn.nodeName === "BR" && $e(gn, ji, Qe)) || ui === gn) &&
												(ji.appendChild(gn), pn++);
										}
										rn !== pn && (ji === zt && (Xi = ss(Qt)), Pt.set(ji, Xi));
									}
								}
							}
						}
						if (Pt.size > 0)
							for (const [Ni, Ri] of Pt)
								if (ln(Ri)) {
									const Ki = Ri.getChildrenKeys();
									let ji = Ni.firstChild;
									for (let Xi = 0; Xi < Ki.length; Xi++) {
										const on = Ki[Xi],
											Qi = Qe.getElementByKey(on);
										Qi !== null &&
											(ji == null
												? (Ni.appendChild(Qi), (ji = Qi))
												: ji !== Qi && Ni.replaceChild(Qi, ji),
											(ji = ji.nextSibling));
									}
								} else mn(Ri) && Ri.markDirty();
						const Mi = st.takeRecords();
						if (Mi.length > 0) {
							for (let Ni = 0; Ni < Mi.length; Ni++) {
								const Ri = Mi[Ni],
									Ki = Ri.addedNodes,
									ji = Ri.target;
								for (let Xi = 0; Xi < Ki.length; Xi++) {
									const on = Ki[Xi],
										Qi = on.parentNode;
									Qi != null &&
										on.nodeName === "BR" &&
										!$e(on, ji, Qe) &&
										Qi.removeChild(on);
								}
							}
							st.takeRecords();
						}
						Ct !== null &&
							(vi && ((Ct.dirty = !0), us(Ct)),
							i.IS_FIREFOX && lr(Qe) && Ct.insertRawText(Ii));
					});
				} finally {
					re = !1;
				}
			}
			function ve(Qe) {
				const Ge = Qe._observer;
				if (Ge !== null) {
					const st = Ge.takeRecords();
					me(Qe, st, Ge);
				}
			}
			function ge(Qe) {
				pe(Qe),
					(Qe._observer = new MutationObserver((Ge, st) => {
						me(Qe, Ge, st);
					}));
			}
			function be(Qe, Ge, st) {
				Si();
				const pt = Qe.__key,
					Ct = Qe.getParent();
				if (Ct === null) return;
				const Pt = oi(Qe);
				let zt = !1;
				if (ii(Pt) && Ge) {
					const Qt = Pt.anchor,
						ui = Pt.focus;
					Qt.key === pt &&
						($t(Qt, Qe, Ct, Qe.getPreviousSibling(), Qe.getNextSibling()),
						(zt = !0)),
						ui.key === pt &&
							($t(ui, Qe, Ct, Qe.getPreviousSibling(), Qe.getNextSibling()),
							(zt = !0));
				}
				if (ii(Pt) && Ge && !zt) {
					const Qt = Qe.getIndexWithinParent();
					Qn(Qe), ai(Pt, Ct, Qt, -1);
				} else Qn(Qe);
				!st && !Wn(Ct) && !Ct.canBeEmpty() && Ct.isEmpty() && be(Ct, Ge),
					Ge && it(Ct) && Ct.isEmpty() && Ct.selectEnd();
			}
			class Ce {
				static getType() {
					(0, w.default)(
						!1,
						"LexicalNode: Node %s does not implement .getType().",
						this.name,
					);
				}
				static clone(Ge) {
					(0, w.default)(
						!1,
						"LexicalNode: Node %s does not implement .clone().",
						this.name,
					);
				}
				constructor(Ge) {
					(this.__type = this.constructor.getType()),
						(this.__parent = null),
						(this.__prev = null),
						(this.__next = null),
						Un(this, Ge);
				}
				getType() {
					return this.__type;
				}
				isAttached() {
					let Ge = this.__key;
					for (; Ge !== null; ) {
						if (Ge === "root") return !0;
						const st = dn(Ge);
						if (st === null) break;
						Ge = st.__parent;
					}
					return !1;
				}
				isSelected(Ge) {
					const st = Ge || wi();
					if (st == null) return !1;
					const pt = st.getNodes().some((Ct) => Ct.__key === this.__key);
					return mn(this)
						? pt
						: ii(st) &&
								st.anchor.type === "element" &&
								st.focus.type === "element" &&
								st.anchor.key === st.focus.key &&
								st.anchor.offset === st.focus.offset
							? !1
							: pt;
				}
				getKey() {
					return this.__key;
				}
				getIndexWithinParent() {
					const Ge = this.getParent();
					if (Ge === null) return -1;
					let st = Ge.getFirstChild(),
						pt = 0;
					for (; st !== null; ) {
						if (this.is(st)) return pt;
						pt++, (st = st.getNextSibling());
					}
					return -1;
				}
				getParent() {
					const Ge = this.getLatest().__parent;
					return Ge === null ? null : dn(Ge);
				}
				getParentOrThrow() {
					const Ge = this.getParent();
					return (
						Ge === null &&
							(0, w.default)(
								!1,
								"Expected node %s to have a parent.",
								this.__key,
							),
						Ge
					);
				}
				getTopLevelElement() {
					let Ge = this;
					for (; Ge !== null; ) {
						const st = Ge.getParent();
						if (Wn(st)) return Ge;
						Ge = st;
					}
					return null;
				}
				getTopLevelElementOrThrow() {
					const Ge = this.getTopLevelElement();
					return (
						Ge === null &&
							(0, w.default)(
								!1,
								"Expected node %s to have a top parent element.",
								this.__key,
							),
						Ge
					);
				}
				getParents() {
					const Ge = [];
					let st = this.getParent();
					for (; st !== null; ) Ge.push(st), (st = st.getParent());
					return Ge;
				}
				getParentKeys() {
					const Ge = [];
					let st = this.getParent();
					for (; st !== null; ) Ge.push(st.__key), (st = st.getParent());
					return Ge;
				}
				getPreviousSibling() {
					const st = this.getLatest().__prev;
					return st === null ? null : dn(st);
				}
				getPreviousSiblings() {
					const Ge = [],
						st = this.getParent();
					if (st === null) return Ge;
					let pt = st.getFirstChild();
					for (; pt !== null && !pt.is(this); )
						Ge.push(pt), (pt = pt.getNextSibling());
					return Ge;
				}
				getNextSibling() {
					const st = this.getLatest().__next;
					return st === null ? null : dn(st);
				}
				getNextSiblings() {
					const Ge = [];
					let st = this.getNextSibling();
					for (; st !== null; ) Ge.push(st), (st = st.getNextSibling());
					return Ge;
				}
				getCommonAncestor(Ge) {
					const st = this.getParents(),
						pt = Ge.getParents();
					ln(this) && st.unshift(this), ln(Ge) && pt.unshift(Ge);
					const Ct = st.length,
						Pt = pt.length;
					if (Ct === 0 || Pt === 0 || st[Ct - 1] !== pt[Pt - 1]) return null;
					const zt = new Set(pt);
					for (let Qt = 0; Qt < Ct; Qt++) {
						const ui = st[Qt];
						if (zt.has(ui)) return ui;
					}
					return null;
				}
				is(Ge) {
					return Ge == null ? !1 : this.__key === Ge.__key;
				}
				isBefore(Ge) {
					if (this === Ge) return !1;
					if (Ge.isParentOf(this)) return !0;
					if (this.isParentOf(Ge)) return !1;
					const st = this.getCommonAncestor(Ge);
					let pt = 0,
						Ct = 0,
						Pt = this;
					for (;;) {
						const zt = Pt.getParentOrThrow();
						if (zt === st) {
							pt = Pt.getIndexWithinParent();
							break;
						}
						Pt = zt;
					}
					for (Pt = Ge; ; ) {
						const zt = Pt.getParentOrThrow();
						if (zt === st) {
							Ct = Pt.getIndexWithinParent();
							break;
						}
						Pt = zt;
					}
					return pt < Ct;
				}
				isParentOf(Ge) {
					const st = this.__key;
					if (st === Ge.__key) return !1;
					let pt = Ge;
					for (; pt !== null; ) {
						if (pt.__key === st) return !0;
						pt = pt.getParent();
					}
					return !1;
				}
				getNodesBetween(Ge) {
					const st = this.isBefore(Ge),
						pt = [],
						Ct = new Set();
					let Pt = this;
					for (;;) {
						const zt = Pt.__key;
						if ((Ct.has(zt) || (Ct.add(zt), pt.push(Pt)), Pt === Ge)) break;
						const Qt = ln(Pt)
							? st
								? Pt.getFirstChild()
								: Pt.getLastChild()
							: null;
						if (Qt !== null) {
							Pt = Qt;
							continue;
						}
						const ui = st ? Pt.getNextSibling() : Pt.getPreviousSibling();
						if (ui !== null) {
							Pt = ui;
							continue;
						}
						const vi = Pt.getParentOrThrow();
						if ((Ct.has(vi.__key) || pt.push(vi), vi === Ge)) break;
						let Ii = null,
							Mi = vi;
						do
							Mi === null &&
								(0, w.default)(!1, "getNodesBetween: ancestor is null"),
								(Ii = st ? Mi.getNextSibling() : Mi.getPreviousSibling()),
								(Mi = Mi.getParent()),
								Mi !== null && Ii === null && !Ct.has(Mi.__key) && pt.push(Mi);
						while (Ii === null);
						Pt = Ii;
					}
					return st || pt.reverse(), pt;
				}
				isDirty() {
					const st = Pi()._dirtyLeaves;
					return st !== null && st.has(this.__key);
				}
				getLatest() {
					const Ge = dn(this.__key);
					return (
						Ge === null &&
							(0, w.default)(
								!1,
								"Lexical node does not exist in active editor state. Avoid using the same node references between nested closures from editorState.read/editor.update.",
							),
						Ge
					);
				}
				getWritable() {
					Si();
					const Ge = ki(),
						st = Pi(),
						pt = Ge._nodeMap,
						Ct = this.__key,
						Pt = this.getLatest(),
						zt = Pt.__parent,
						Qt = st._cloneNotNeeded,
						ui = wi();
					if ((ui !== null && (ui._cachedNodes = null), Qt.has(Ct)))
						return $s(Pt), Pt;
					const Ii = Pt.constructor.clone(Pt);
					return (
						(Ii.__parent = zt),
						(Ii.__next = Pt.__next),
						(Ii.__prev = Pt.__prev),
						ln(Pt) && ln(Ii)
							? ((Ii.__first = Pt.__first),
								(Ii.__last = Pt.__last),
								(Ii.__size = Pt.__size),
								(Ii.__indent = Pt.__indent),
								(Ii.__format = Pt.__format),
								(Ii.__dir = Pt.__dir))
							: mn(Pt) &&
								mn(Ii) &&
								((Ii.__format = Pt.__format),
								(Ii.__style = Pt.__style),
								(Ii.__mode = Pt.__mode),
								(Ii.__detail = Pt.__detail)),
						Qt.add(Ct),
						(Ii.__key = Ct),
						$s(Ii),
						pt.set(Ct, Ii),
						Ii
					);
				}
				getTextContent() {
					return "";
				}
				getTextContentSize() {
					return this.getTextContent().length;
				}
				createDOM(Ge, st) {
					(0, w.default)(!1, "createDOM: base method not extended");
				}
				updateDOM(Ge, st, pt) {
					(0, w.default)(!1, "updateDOM: base method not extended");
				}
				exportDOM(Ge) {
					return { element: this.createDOM(Ge._config, Ge) };
				}
				exportJSON() {
					(0, w.default)(!1, "exportJSON: base method not extended");
				}
				static importJSON(Ge) {
					(0, w.default)(
						!1,
						"LexicalNode: Node %s does not implement .importJSON().",
						this.name,
					);
				}
				static transform() {
					return null;
				}
				remove(Ge) {
					be(this, !0, Ge);
				}
				replace(Ge, st) {
					Si();
					let pt = wi();
					pt !== null && (pt = pt.clone()), bs(this, Ge);
					const Ct = this.getLatest(),
						Pt = this.__key,
						zt = Ge.__key,
						Qt = Ge.getWritable(),
						ui = this.getParentOrThrow().getWritable(),
						vi = ui.__size;
					Qn(Qt);
					const Ii = Ct.getPreviousSibling(),
						Mi = Ct.getNextSibling(),
						Ni = Ct.__prev,
						Ri = Ct.__next,
						Ki = Ct.__parent;
					if ((be(Ct, !1, !0), Ii === null)) ui.__first = zt;
					else {
						const ji = Ii.getWritable();
						ji.__next = zt;
					}
					if (((Qt.__prev = Ni), Mi === null)) ui.__last = zt;
					else {
						const ji = Mi.getWritable();
						ji.__prev = zt;
					}
					if (
						((Qt.__next = Ri),
						(Qt.__parent = Ki),
						(ui.__size = vi),
						st &&
							this.getChildren().forEach((ji) => {
								Qt.append(ji);
							}),
						ii(pt))
					) {
						us(pt);
						const ji = pt.anchor,
							Xi = pt.focus;
						ji.key === Pt && Mt(ji, Qt), Xi.key === Pt && Mt(Xi, Qt);
					}
					return sn() === Pt && _n(zt), Qt;
				}
				insertAfter(Ge, st = !0) {
					Si(), bs(this, Ge);
					const pt = this.getWritable(),
						Ct = Ge.getWritable(),
						Pt = Ct.getParent(),
						zt = wi();
					let Qt = !1,
						ui = !1;
					if (Pt !== null) {
						const Ri = Ge.getIndexWithinParent();
						if ((Qn(Ct), ii(zt))) {
							const Ki = Pt.__key,
								ji = zt.anchor,
								Xi = zt.focus;
							(Qt =
								ji.type === "element" && ji.key === Ki && ji.offset === Ri + 1),
								(ui =
									Xi.type === "element" &&
									Xi.key === Ki &&
									Xi.offset === Ri + 1);
						}
					}
					const vi = this.getNextSibling(),
						Ii = this.getParentOrThrow().getWritable(),
						Mi = Ct.__key,
						Ni = pt.__next;
					if (vi === null) Ii.__last = Mi;
					else {
						const Ri = vi.getWritable();
						Ri.__prev = Mi;
					}
					if (
						(Ii.__size++,
						(pt.__next = Mi),
						(Ct.__next = Ni),
						(Ct.__prev = pt.__key),
						(Ct.__parent = pt.__parent),
						st && ii(zt))
					) {
						const Ri = this.getIndexWithinParent();
						ai(zt, Ii, Ri + 1);
						const Ki = Ii.__key;
						Qt && zt.anchor.set(Ki, Ri + 2, "element"),
							ui && zt.focus.set(Ki, Ri + 2, "element");
					}
					return Ge;
				}
				insertBefore(Ge, st = !0) {
					Si(), bs(this, Ge);
					const pt = this.getWritable(),
						Ct = Ge.getWritable(),
						Pt = Ct.__key;
					Qn(Ct);
					const zt = this.getPreviousSibling(),
						Qt = this.getParentOrThrow().getWritable(),
						ui = pt.__prev,
						vi = this.getIndexWithinParent();
					if (zt === null) Qt.__first = Pt;
					else {
						const Mi = zt.getWritable();
						Mi.__next = Pt;
					}
					Qt.__size++,
						(pt.__prev = Pt),
						(Ct.__prev = ui),
						(Ct.__next = pt.__key),
						(Ct.__parent = pt.__parent);
					const Ii = wi();
					if (st && ii(Ii)) {
						const Mi = this.getParentOrThrow();
						ai(Ii, Mi, vi);
					}
					return Ge;
				}
				isParentRequired() {
					return !1;
				}
				createParentElementNode() {
					return yt();
				}
				selectPrevious(Ge, st) {
					Si();
					const pt = this.getPreviousSibling(),
						Ct = this.getParentOrThrow();
					if (pt === null) return Ct.select(0, 0);
					if (ln(pt)) return pt.select();
					if (!mn(pt)) {
						const Pt = pt.getIndexWithinParent() + 1;
						return Ct.select(Pt, Pt);
					}
					return pt.select(Ge, st);
				}
				selectNext(Ge, st) {
					Si();
					const pt = this.getNextSibling(),
						Ct = this.getParentOrThrow();
					if (pt === null) return Ct.select();
					if (ln(pt)) return pt.select(0, 0);
					if (!mn(pt)) {
						const Pt = pt.getIndexWithinParent();
						return Ct.select(Pt, Pt);
					}
					return pt.select(Ge, st);
				}
				markDirty() {
					this.getWritable();
				}
			}
			e.LexicalNode = Ce;
			function Le(Qe, Ge) {
				const st = Pi()._nodes.get(Qe);
				st === void 0 &&
					(0, w.default)(
						!1,
						"Create node: Attempted to create node %s that was not configured to be used on the editor.",
						Ge.name,
					);
				const pt = st.klass;
				pt !== Ge &&
					(0, w.default)(
						!1,
						"Create node: Type %s in node %s does not match registered node %s with the same type",
						Qe,
						Ge.name,
						pt.name,
					);
			}
			function Fe(Qe, Ge) {
				const st = Qe.__mode,
					pt = Qe.__format,
					Ct = Qe.__style,
					Pt = Ge.__mode,
					zt = Ge.__format,
					Qt = Ge.__style;
				return (
					(st === null || st === Pt) &&
					(pt === null || pt === zt) &&
					(Ct === null || Ct === Qt)
				);
			}
			function Oe(Qe, Ge) {
				const st = Qe.mergeWithSibling(Ge),
					pt = Pi()._normalizedNodes;
				return pt.add(Qe.__key), pt.add(Ge.__key), st;
			}
			function xe(Qe) {
				let Ge = Qe;
				if (Ge.__text === "" && Ge.isSimpleText() && !Ge.isUnmergeable()) {
					Ge.remove();
					return;
				}
				let st;
				for (
					;
					(st = Ge.getPreviousSibling()) !== null &&
					mn(st) &&
					st.isSimpleText() &&
					!st.isUnmergeable();
				)
					if (st.__text === "") st.remove();
					else if (Fe(st, Ge)) {
						Ge = Oe(st, Ge);
						break;
					} else break;
				let pt;
				for (
					;
					(pt = Ge.getNextSibling()) !== null &&
					mn(pt) &&
					pt.isSimpleText() &&
					!pt.isUnmergeable();
				)
					if (pt.__text === "") pt.remove();
					else if (Fe(Ge, pt)) {
						Ge = Oe(Ge, pt);
						break;
					} else break;
			}
			function He(Qe) {
				return Ke(Qe.anchor), Ke(Qe.focus), Qe;
			}
			function Ke(Qe) {
				for (; Qe.type === "element"; ) {
					const Ge = Qe.getNode(),
						st = Qe.offset;
					let pt, Ct;
					if (
						(st === Ge.getChildrenSize()
							? ((pt = Ge.getChildAtIndex(st - 1)), (Ct = !0))
							: ((pt = Ge.getChildAtIndex(st)), (Ct = !1)),
						mn(pt))
					) {
						Qe.set(pt.__key, Ct ? pt.getTextContentSize() : 0, "text");
						break;
					} else if (!ln(pt)) break;
					Qe.set(pt.__key, Ct ? pt.getChildrenSize() : 0, "element");
				}
			}
			let Je = "",
				Te = "",
				Ee = "",
				Ie,
				Be,
				Se,
				ke = !1,
				Ue = !1,
				qe,
				Ae = null,
				Me,
				De,
				Re,
				je,
				Ve,
				Ze;
			function et(Qe, Ge) {
				const st = Re.get(Qe);
				if (Ge !== null) {
					const pt = xt(Qe);
					pt.parentNode === Ge && Ge.removeChild(pt);
				}
				if ((je.has(Qe) || Be._keyToDOMMap.delete(Qe), ln(st))) {
					const pt = kt(st, Re);
					rt(pt, 0, pt.length - 1, null);
				}
				st !== void 0 && _s(Ze, Se, qe, st, "destroyed");
			}
			function rt(Qe, Ge, st, pt) {
				let Ct = Ge;
				for (; Ct <= st; ++Ct) {
					const Pt = Qe[Ct];
					Pt !== void 0 && et(Pt, pt);
				}
			}
			function ft(Qe, Ge) {
				Qe.setProperty("text-align", Ge);
			}
			const bt = "40px";
			function nt(Qe, Ge) {
				const st = Ie.theme.indent;
				if (typeof st == "string") {
					const Ct = Qe.classList.contains(st);
					Ge > 0 && !Ct
						? Qe.classList.add(st)
						: Ge < 1 && Ct && Qe.classList.remove(st);
				}
				const pt =
					getComputedStyle(Qe).getPropertyValue(
						"--lexical-indent-base-value",
					) || bt;
				Qe.style.setProperty(
					"padding-inline-start",
					Ge === 0 ? "" : `calc(${Ge} * ${pt})`,
				);
			}
			function lt(Qe, Ge) {
				const st = Qe.style;
				Ge === 0
					? ft(st, "")
					: Ge === e.IS_ALIGN_LEFT
						? ft(st, "left")
						: Ge === e.IS_ALIGN_CENTER
							? ft(st, "center")
							: Ge === e.IS_ALIGN_RIGHT
								? ft(st, "right")
								: Ge === e.IS_ALIGN_JUSTIFY
									? ft(st, "justify")
									: Ge === e.IS_ALIGN_START
										? ft(st, "start")
										: Ge === e.IS_ALIGN_END && ft(st, "end");
			}
			function ct(Qe, Ge, st) {
				const pt = je.get(Qe);
				pt === void 0 &&
					(0, w.default)(!1, "createNode: node does not exist in nodeMap");
				const Ct = pt.createDOM(Ie, Be);
				if (
					(Lt(Qe, Ct, Be),
					mn(pt)
						? Ct.setAttribute("data-lexical-text", "true")
						: Xn(pt) && Ct.setAttribute("data-lexical-decorator", "true"),
					ln(pt))
				) {
					const Pt = pt.__indent,
						zt = pt.__size;
					if ((Pt !== 0 && nt(Ct, Pt), zt !== 0)) {
						const ui = zt - 1,
							vi = kt(pt, je);
						gt(vi, ui, pt, Ct);
					}
					const Qt = pt.__format;
					Qt !== 0 && lt(Ct, Qt),
						pt.isInline() || Nt(null, pt, Ct),
						Ks(pt) &&
							((Je += e.DOUBLE_LINE_BREAK), (Ee += e.DOUBLE_LINE_BREAK));
				} else {
					const Pt = pt.getTextContent();
					if (Xn(pt)) {
						const zt = pt.decorate(Be, Ie);
						zt !== null && di(Qe, zt), (Ct.contentEditable = "false");
					} else mn(pt) && (pt.isDirectionless() || (Te += Pt));
					(Je += Pt), (Ee += Pt);
				}
				if (Ge !== null)
					if (st != null) Ge.insertBefore(Ct, st);
					else {
						const Pt = Ge.__lexicalLineBreak;
						Pt != null ? Ge.insertBefore(Ct, Pt) : Ge.appendChild(Ct);
					}
				return _s(Ze, Se, qe, pt, "created"), Ct;
			}
			function gt(Qe, Ge, st, pt) {
				const Ct = Te;
				(Te = ""), ht(Qe, st, 0, Ge, pt, null), jt(st, pt), (Te = Ct);
			}
			function ht(Qe, Ge, st, pt, Ct, Pt) {
				const zt = Je;
				Je = "";
				let Qt = st;
				for (; Qt <= pt; ++Qt) ct(Qe[Qt], Ct, Pt);
				Ks(Ge) && (Je += e.DOUBLE_LINE_BREAK),
					(Ct.__lexicalTextContent = Je),
					(Je = zt + Je);
			}
			function Rt(Qe, Ge) {
				const st = Ge.get(Qe);
				return Or(st) || (Xn(st) && st.isInline());
			}
			function Nt(Qe, Ge, st) {
				const pt = Qe !== null && (Qe.__size === 0 || Rt(Qe.__last, Re)),
					Ct = Ge.__size === 0 || Rt(Ge.__last, je);
				if (pt) {
					if (!Ct) {
						const Pt = st.__lexicalLineBreak;
						Pt != null && st.removeChild(Pt), (st.__lexicalLineBreak = null);
					}
				} else if (Ct) {
					const Pt = C.$Bfb.document.createElement("br");
					(st.__lexicalLineBreak = Pt), st.appendChild(Pt);
				}
			}
			function jt(Qe, Ge) {
				const st = Ge.__lexicalDirTextContent,
					pt = Ge.__lexicalDir;
				if (st !== Te || pt !== Ae) {
					const Ct = Te === "",
						Pt = Ct ? Ae : zi(Te);
					if (Pt !== pt) {
						const zt = Ge.classList,
							Qt = Ie.theme;
						let ui = pt !== null ? Qt[pt] : void 0,
							vi = Pt !== null ? Qt[Pt] : void 0;
						if (ui !== void 0) {
							if (typeof ui == "string") {
								const Ii = ui.split(" ");
								ui = Qt[pt] = Ii;
							}
							zt.remove(...ui);
						}
						if (Pt === null || (Ct && Pt === "ltr")) Ge.removeAttribute("dir");
						else {
							if (vi !== void 0) {
								if (typeof vi == "string") {
									const Ii = vi.split(" ");
									vi = Qt[Pt] = Ii;
								}
								vi !== void 0 && zt.add(...vi);
							}
							Ge.dir = Pt;
						}
						if (!Ue) {
							const Ii = Qe.getWritable();
							Ii.__dir = Pt;
						}
					}
					(Ae = Pt), (Ge.__lexicalDirTextContent = Te), (Ge.__lexicalDir = Pt);
				}
			}
			function ti(Qe, Ge, st) {
				const pt = Te;
				(Te = ""), hi(Qe, Ge, st), jt(Ge, st), (Te = pt);
			}
			function kt(Qe, Ge) {
				const st = [];
				let pt = Qe.__first;
				for (; pt !== null; ) {
					const Ct = Ge.get(pt);
					Ct === void 0 &&
						(0, w.default)(
							!1,
							"createChildrenArray: node does not exist in nodeMap",
						),
						st.push(pt),
						(pt = Ct.__next);
				}
				return st;
			}
			function hi(Qe, Ge, st) {
				const pt = Je,
					Ct = Qe.__size,
					Pt = Ge.__size;
				if (((Je = ""), Ct === 1 && Pt === 1)) {
					const zt = Qe.__first,
						Qt = Ge.__first;
					if (zt === Qt) Kt(zt, st);
					else {
						const ui = xt(zt),
							vi = ct(Qt, null, null);
						st.replaceChild(vi, ui), et(zt, null);
					}
				} else {
					const zt = kt(Qe, Re),
						Qt = kt(Ge, je);
					if (Ct === 0) Pt !== 0 && ht(Qt, Ge, 0, Pt - 1, st, null);
					else if (Pt === 0) {
						if (Ct !== 0) {
							const vi = st.__lexicalLineBreak == null;
							rt(zt, 0, Ct - 1, vi ? null : st), vi && (st.textContent = "");
						}
					} else Xe(Ge, zt, Qt, Ct, Pt, st);
				}
				Ks(Ge) && (Je += e.DOUBLE_LINE_BREAK),
					(st.__lexicalTextContent = Je),
					(Je = pt + Je);
			}
			function Kt(Qe, Ge) {
				const st = Re.get(Qe);
				let pt = je.get(Qe);
				(st === void 0 || pt === void 0) &&
					(0, w.default)(
						!1,
						"reconcileNode: prevNode or nextNode does not exist in nodeMap",
					);
				const Ct = ke || De.has(Qe) || Me.has(Qe),
					Pt = As(Be, Qe);
				if (st === pt && !Ct) {
					if (ln(st)) {
						const zt = Pt.__lexicalTextContent;
						zt !== void 0 && ((Je += zt), (Ee += zt));
						const Qt = Pt.__lexicalDirTextContent;
						Qt !== void 0 && (Te += Qt);
					} else {
						const zt = st.getTextContent();
						mn(st) && !st.isDirectionless() && (Te += zt),
							(Ee += zt),
							(Je += zt);
					}
					return Pt;
				}
				if (
					(st !== pt && Ct && _s(Ze, Se, qe, pt, "updated"),
					pt.updateDOM(st, Pt, Ie))
				) {
					const zt = ct(Qe, null, null);
					return (
						Ge === null &&
							(0, w.default)(!1, "reconcileNode: parentDOM is null"),
						Ge.replaceChild(zt, Pt),
						et(Qe, null),
						zt
					);
				}
				if (ln(st) && ln(pt)) {
					const zt = pt.__indent;
					zt !== st.__indent && nt(Pt, zt);
					const Qt = pt.__format;
					Qt !== st.__format && lt(Pt, Qt),
						Ct && (ti(st, pt, Pt), !it(pt) && !pt.isInline() && Nt(st, pt, Pt)),
						Ks(pt) &&
							((Je += e.DOUBLE_LINE_BREAK), (Ee += e.DOUBLE_LINE_BREAK));
				} else {
					const zt = pt.getTextContent();
					if (Xn(pt)) {
						const Qt = pt.decorate(Be, Ie);
						Qt !== null && di(Qe, Qt);
					} else mn(pt) && !pt.isDirectionless() && (Te += zt);
					(Je += zt), (Ee += zt);
				}
				return (
					!Ue &&
						it(pt) &&
						pt.__cachedText !== Ee &&
						((pt = pt.getWritable()), (pt.__cachedText = Ee)),
					Pt
				);
			}
			function di(Qe, Ge) {
				let st = Be._pendingDecorators;
				const pt = Be._decorators;
				if (st === null) {
					if (pt[Qe] === Ge) return;
					st = Pn(Be);
				}
				st[Qe] = Ge;
			}
			function Ye(Qe) {
				return Qe.firstChild;
			}
			function ze(Qe) {
				let Ge = Qe.nextSibling;
				return (
					Ge !== null && Ge === Be._blockCursorElement && (Ge = Ge.nextSibling),
					Ge
				);
			}
			function Xe(Qe, Ge, st, pt, Ct, Pt) {
				const zt = pt - 1,
					Qt = Ct - 1;
				let ui,
					vi,
					Ii = Ye(Pt),
					Mi = 0,
					Ni = 0;
				for (; Mi <= zt && Ni <= Qt; ) {
					const ji = Ge[Mi],
						Xi = st[Ni];
					if (ji === Xi) (Ii = ze(Kt(Xi, Pt))), Mi++, Ni++;
					else {
						ui === void 0 && (ui = new Set(Ge)),
							vi === void 0 && (vi = new Set(st));
						const on = vi.has(ji),
							Qi = ui.has(Xi);
						if (!on) (Ii = ze(xt(ji))), et(ji, Pt), Mi++;
						else if (!Qi) ct(Xi, Pt, Ii), Ni++;
						else {
							const rn = As(Be, Xi);
							rn === Ii
								? (Ii = ze(Kt(Xi, Pt)))
								: (Ii != null ? Pt.insertBefore(rn, Ii) : Pt.appendChild(rn),
									Kt(Xi, Pt)),
								Mi++,
								Ni++;
						}
					}
				}
				const Ri = Mi > zt,
					Ki = Ni > Qt;
				if (Ri && !Ki) {
					const ji = st[Qt + 1],
						Xi = ji === void 0 ? null : Be.getElementByKey(ji);
					ht(st, Qe, Ni, Qt, Pt, Xi);
				} else Ki && !Ri && rt(Ge, Mi, zt, Pt);
			}
			function It(Qe, Ge, st, pt, Ct, Pt) {
				(Je = ""),
					(Ee = ""),
					(Te = ""),
					(ke = pt === e.FULL_RECONCILE),
					(Ae = null),
					(Be = st),
					(Ie = st._config),
					(Se = st._nodes),
					(qe = Be._listeners.mutation),
					(Me = Ct),
					(De = Pt),
					(Re = Qe._nodeMap),
					(je = Ge._nodeMap),
					(Ue = Ge._readOnly),
					(Ve = new Map(st._keyToDOMMap));
				const zt = new Map();
				return (
					(Ze = zt),
					Kt("root", null),
					(Be = void 0),
					(Se = void 0),
					(Me = void 0),
					(De = void 0),
					(Re = void 0),
					(je = void 0),
					(Ie = void 0),
					(Ve = void 0),
					(Ze = void 0),
					zt
				);
			}
			function Lt(Qe, Ge, st) {
				const pt = st._keyToDOMMap;
				(Ge["__lexicalKey_" + st._key] = Qe), pt.set(Qe, Ge);
			}
			function xt(Qe) {
				const Ge = Ve.get(Qe);
				return (
					Ge === void 0 &&
						(0, w.default)(
							!1,
							"Reconciliation: could not find DOM element for node key %s",
							Qe,
						),
					Ge
				);
			}
			class Vt {
				constructor(Ge, st, pt) {
					(this._selection = null),
						(this.key = Ge),
						(this.offset = st),
						(this.type = pt);
				}
				is(Ge) {
					return (
						this.key === Ge.key &&
						this.offset === Ge.offset &&
						this.type === Ge.type
					);
				}
				isBefore(Ge) {
					let st = this.getNode(),
						pt = Ge.getNode();
					const Ct = this.offset,
						Pt = Ge.offset;
					if (ln(st)) {
						const zt = st.getDescendantByIndex(Ct);
						st = zt ?? st;
					}
					if (ln(pt)) {
						const zt = pt.getDescendantByIndex(Pt);
						pt = zt ?? pt;
					}
					return st === pt ? Ct < Pt : st.isBefore(pt);
				}
				getNode() {
					const Ge = this.key,
						st = dn(Ge);
					return (
						st === null && (0, w.default)(!1, "Point.getNode: node not found"),
						st
					);
				}
				set(Ge, st, pt) {
					const Ct = this._selection,
						Pt = this.key;
					(this.key = Ge),
						(this.offset = st),
						(this.type = pt),
						_e() ||
							(sn() === Pt && _n(Ge),
							Ct !== null && ((Ct._cachedNodes = null), (Ct.dirty = !0)));
				}
			}
			e.Point = Vt;
			function Bt(Qe, Ge, st) {
				return new Vt(Qe, Ge, st);
			}
			function Gt(Qe, Ge) {
				let st = Ge.__key,
					pt = Qe.offset,
					Ct = "element";
				if (mn(Ge)) {
					Ct = "text";
					const Pt = Ge.getTextContentSize();
					pt > Pt && (pt = Pt);
				} else if (!ln(Ge)) {
					const Pt = Ge.getNextSibling();
					if (mn(Pt)) (st = Pt.__key), (pt = 0), (Ct = "text");
					else {
						const zt = Ge.getParent();
						zt && ((st = zt.__key), (pt = Ge.getIndexWithinParent() + 1));
					}
				}
				Qe.set(st, pt, Ct);
			}
			function Mt(Qe, Ge) {
				if (ln(Ge)) {
					const st = Ge.getLastDescendant();
					ln(st) || mn(st) ? Gt(Qe, st) : Gt(Qe, Ge);
				} else Gt(Qe, Ge);
			}
			function Ut(Qe, Ge, st, pt) {
				const Ct = Qe.getNode(),
					Pt = Ct.getChildAtIndex(Qe.offset),
					zt = cs(),
					Qt = it(Ct) ? yt().append(zt) : zt;
				zt.setFormat(st),
					zt.setStyle(pt),
					Pt === null ? Ct.append(Qt) : Pt.insertBefore(Qt),
					Qe.is(Ge) && Ge.set(zt.__key, 0, "text"),
					Qe.set(zt.__key, 0, "text");
			}
			function ei(Qe, Ge, st, pt) {
				(Qe.key = Ge), (Qe.offset = st), (Qe.type = pt);
			}
			class mi {
				constructor(Ge) {
					(this.dirty = !1), (this._nodes = Ge), (this._cachedNodes = null);
				}
				is(Ge) {
					if (!Zt(Ge)) return !1;
					const st = this._nodes,
						pt = Ge._nodes;
					return (
						st.size === pt.size && Array.from(st).every((Ct) => pt.has(Ct))
					);
				}
				add(Ge) {
					(this.dirty = !0), this._nodes.add(Ge), (this._cachedNodes = null);
				}
				delete(Ge) {
					(this.dirty = !0), this._nodes.delete(Ge), (this._cachedNodes = null);
				}
				clear() {
					(this.dirty = !0), this._nodes.clear(), (this._cachedNodes = null);
				}
				has(Ge) {
					return this._nodes.has(Ge);
				}
				clone() {
					return new mi(new Set(this._nodes));
				}
				getStartEndPoints() {
					return null;
				}
				extract() {
					return this.getNodes();
				}
				insertRawText(Ge) {}
				insertText() {}
				insertNodes(Ge, st) {
					const pt = this.getNodes(),
						Ct = pt.length,
						Pt = pt[Ct - 1];
					let zt;
					if (mn(Pt)) zt = Pt.select();
					else {
						const Qt = Pt.getIndexWithinParent() + 1;
						zt = Pt.getParentOrThrow().select(Qt, Qt);
					}
					zt.insertNodes(Ge, st);
					for (let Qt = 0; Qt < Ct; Qt++) pt[Qt].remove();
					return !0;
				}
				getNodes() {
					const Ge = this._cachedNodes;
					if (Ge !== null) return Ge;
					const st = this._nodes,
						pt = [];
					for (const Ct of st) {
						const Pt = dn(Ct);
						Pt !== null && pt.push(Pt);
					}
					return _e() || (this._cachedNodes = pt), pt;
				}
				getTextContent() {
					const Ge = this.getNodes();
					let st = "";
					for (let pt = 0; pt < Ge.length; pt++) st += Ge[pt].getTextContent();
					return st;
				}
			}
			e.NodeSelection = mi;
			function ii(Qe) {
				return Qe instanceof si;
			}
			class Dt {
				constructor(Ge, st, pt) {
					(this.gridKey = Ge),
						(this.anchor = st),
						(this.focus = pt),
						(this.dirty = !1),
						(this._cachedNodes = null),
						(st._selection = this),
						(pt._selection = this);
				}
				is(Ge) {
					return Jt(Ge)
						? this.gridKey === Ge.gridKey &&
								this.anchor.is(Ge.anchor) &&
								this.focus.is(Ge.focus)
						: !1;
				}
				set(Ge, st, pt) {
					(this.dirty = !0),
						(this.gridKey = Ge),
						(this.anchor.key = st),
						(this.focus.key = pt),
						(this._cachedNodes = null);
				}
				clone() {
					return new Dt(this.gridKey, this.anchor, this.focus);
				}
				getStartEndPoints() {
					return [this.anchor, this.focus];
				}
				isCollapsed() {
					return !1;
				}
				isBackward() {
					return this.focus.isBefore(this.anchor);
				}
				getCharacterOffsets() {
					return ri(this);
				}
				extract() {
					return this.getNodes();
				}
				insertRawText(Ge) {}
				insertText() {}
				insertNodes(Ge, st) {
					const pt = this.focus.getNode();
					return He(pt.select(0, pt.getChildrenSize())).insertNodes(Ge, st);
				}
				getShape() {
					const Ge = dn(this.anchor.key);
					(0, w.default)(Ge !== null, "getNodes: expected to find AnchorNode");
					const st = Ge.getIndexWithinParent(),
						pt = Ge.getParentOrThrow().getIndexWithinParent(),
						Ct = dn(this.focus.key);
					(0, w.default)(Ct !== null, "getNodes: expected to find FocusNode");
					const Pt = Ct.getIndexWithinParent(),
						zt = Ct.getParentOrThrow().getIndexWithinParent(),
						Qt = Math.min(st, Pt),
						ui = Math.max(st, Pt),
						vi = Math.min(pt, zt),
						Ii = Math.max(pt, zt);
					return {
						fromX: Math.min(Qt, ui),
						fromY: Math.min(vi, Ii),
						toX: Math.max(Qt, ui),
						toY: Math.max(vi, Ii),
					};
				}
				getNodes() {
					const Ge = this._cachedNodes;
					if (Ge !== null) return Ge;
					const st = this.anchor.getNode(),
						pt = this.focus.getNode(),
						Ct = ur(st, zs),
						Pt = ur(pt, zs);
					(0, w.default)(
						zs(Ct),
						"Expected GridSelection anchor to be (or a child of) GridCellNode",
					),
						(0, w.default)(
							zs(Pt),
							"Expected GridSelection focus to be (or a child of) GridCellNode",
						);
					const zt = Ct.getParent();
					(0, w.default)(
						Fr(zt),
						"Expected anchorCell to have a parent GridRowNode",
					);
					const Qt = zt.getParent();
					(0, w.default)(
						Kr(Qt),
						"Expected tableNode to have a parent GridNode",
					);
					const [ui, vi, Ii] = At(Qt, Ct, Pt);
					let Mi = Math.min(vi.startColumn, Ii.startColumn),
						Ni = Math.min(vi.startRow, Ii.startRow),
						Ri = Math.max(
							vi.startColumn + vi.cell.__colSpan - 1,
							Ii.startColumn + Ii.cell.__colSpan - 1,
						),
						Ki = Math.max(
							vi.startRow + vi.cell.__rowSpan - 1,
							Ii.startRow + Ii.cell.__rowSpan - 1,
						),
						ji = Mi,
						Xi = Ni,
						on = Mi,
						Qi = Ni;
					function rn(gn) {
						const { cell: Cn, startColumn: Tn, startRow: Vn } = gn;
						(Mi = Math.min(Mi, Tn)),
							(Ni = Math.min(Ni, Vn)),
							(Ri = Math.max(Ri, Tn + Cn.__colSpan - 1)),
							(Ki = Math.max(Ki, Vn + Cn.__rowSpan - 1));
					}
					for (; Mi < ji || Ni < Xi || Ri > on || Ki > Qi; ) {
						if (Mi < ji) {
							const gn = Qi - Xi,
								Cn = ji - 1;
							for (let Tn = 0; Tn <= gn; Tn++) rn(ui[Xi + Tn][Cn]);
							ji = Cn;
						}
						if (Ni < Xi) {
							const gn = on - ji,
								Cn = Xi - 1;
							for (let Tn = 0; Tn <= gn; Tn++) rn(ui[Cn][ji + Tn]);
							Xi = Cn;
						}
						if (Ri > on) {
							const gn = Qi - Xi,
								Cn = on + 1;
							for (let Tn = 0; Tn <= gn; Tn++) rn(ui[Xi + Tn][Cn]);
							on = Cn;
						}
						if (Ki > Qi) {
							const gn = on - ji,
								Cn = Qi + 1;
							for (let Tn = 0; Tn <= gn; Tn++) rn(ui[Cn][ji + Tn]);
							Qi = Cn;
						}
					}
					const pn = [Qt];
					let bn = null;
					for (let gn = Ni; gn <= Ki; gn++)
						for (let Cn = Mi; Cn <= Ri; Cn++) {
							const { cell: Tn } = ui[gn][Cn],
								Vn = Tn.getParent();
							(0, w.default)(
								Fr(Vn),
								"Expected GridCellNode parent to be a GridRowNode",
							),
								Vn !== bn && pn.push(Vn),
								pn.push(Tn, ...eo(Tn)),
								(bn = Vn);
						}
					return _e() || (this._cachedNodes = pn), pn;
				}
				getTextContent() {
					const Ge = this.getNodes();
					let st = "";
					for (let pt = 0; pt < Ge.length; pt++) st += Ge[pt].getTextContent();
					return st;
				}
			}
			e.GridSelection = Dt;
			function Jt(Qe) {
				return Qe instanceof Dt;
			}
			class si {
				constructor(Ge, st, pt, Ct) {
					(this.anchor = Ge),
						(this.focus = st),
						(this.dirty = !1),
						(this.format = pt),
						(this.style = Ct),
						(this._cachedNodes = null),
						(Ge._selection = this),
						(st._selection = this);
				}
				is(Ge) {
					return ii(Ge)
						? this.anchor.is(Ge.anchor) &&
								this.focus.is(Ge.focus) &&
								this.format === Ge.format &&
								this.style === Ge.style
						: !1;
				}
				isBackward() {
					return this.focus.isBefore(this.anchor);
				}
				isCollapsed() {
					return this.anchor.is(this.focus);
				}
				getStartEndPoints() {
					return [this.anchor, this.focus];
				}
				getNodes() {
					const Ge = this._cachedNodes;
					if (Ge !== null) return Ge;
					const st = this.anchor,
						pt = this.focus,
						Ct = st.isBefore(pt),
						Pt = Ct ? st : pt,
						zt = Ct ? pt : st;
					let Qt = Pt.getNode(),
						ui = zt.getNode();
					const vi = Pt.offset,
						Ii = zt.offset;
					if (ln(Qt)) {
						const Ni = Qt.getDescendantByIndex(vi);
						Qt = Ni ?? Qt;
					}
					if (ln(ui)) {
						let Ni = ui.getDescendantByIndex(Ii);
						Ni !== null &&
							Ni !== Qt &&
							ui.getChildAtIndex(Ii) === Ni &&
							(Ni = Ni.getPreviousSibling()),
							(ui = Ni ?? ui);
					}
					let Mi;
					return (
						Qt.is(ui)
							? ln(Qt) && Qt.getChildrenSize() > 0
								? (Mi = [])
								: (Mi = [Qt])
							: (Mi = Qt.getNodesBetween(ui)),
						_e() || (this._cachedNodes = Mi),
						Mi
					);
				}
				setTextNodeRange(Ge, st, pt, Ct) {
					ei(this.anchor, Ge.__key, st, "text"),
						ei(this.focus, pt.__key, Ct, "text"),
						(this._cachedNodes = null),
						(this.dirty = !0);
				}
				getTextContent() {
					const Ge = this.getNodes();
					if (Ge.length === 0) return "";
					const st = Ge[0],
						pt = Ge[Ge.length - 1],
						Ct = this.anchor,
						Pt = this.focus,
						zt = Ct.isBefore(Pt),
						[Qt, ui] = ri(this);
					let vi = "",
						Ii = !0;
					for (let Mi = 0; Mi < Ge.length; Mi++) {
						const Ni = Ge[Mi];
						if (ln(Ni) && !Ni.isInline())
							Ii ||
								(vi += `
`),
								Ni.isEmpty() ? (Ii = !1) : (Ii = !0);
						else if (((Ii = !1), mn(Ni))) {
							let Ri = Ni.getTextContent();
							Ni === st
								? Ni === pt
									? (Ct.type !== "element" ||
											Pt.type !== "element" ||
											Pt.offset === Ct.offset) &&
										(Ri = Qt < ui ? Ri.slice(Qt, ui) : Ri.slice(ui, Qt))
									: (Ri = zt ? Ri.slice(Qt) : Ri.slice(ui))
								: Ni === pt && (Ri = zt ? Ri.slice(0, ui) : Ri.slice(0, Qt)),
								(vi += Ri);
						} else
							(Xn(Ni) || Or(Ni)) &&
								(Ni !== pt || !this.isCollapsed()) &&
								(vi += Ni.getTextContent());
					}
					return vi;
				}
				applyDOMRange(Ge) {
					const st = Pi(),
						Ct = st.getEditorState()._selection,
						Pt = Wi(
							Ge.startContainer,
							Ge.startOffset,
							Ge.endContainer,
							Ge.endOffset,
							st,
							Ct,
						);
					if (Pt === null) return;
					const [zt, Qt] = Pt;
					ei(this.anchor, zt.key, zt.offset, zt.type),
						ei(this.focus, Qt.key, Qt.offset, Qt.type),
						(this._cachedNodes = null);
				}
				clone() {
					const Ge = this.anchor,
						st = this.focus;
					return new si(
						Bt(Ge.key, Ge.offset, Ge.type),
						Bt(st.key, st.offset, st.type),
						this.format,
						this.style,
					);
				}
				toggleFormat(Ge) {
					(this.format = xn(this.format, Ge, null)), (this.dirty = !0);
				}
				setStyle(Ge) {
					(this.style = Ge), (this.dirty = !0);
				}
				hasFormat(Ge) {
					const st = e.TEXT_TYPE_TO_FORMAT[Ge];
					return (this.format & st) !== 0;
				}
				insertRawText(Ge) {
					const st = Ge.split(/(\r?\n|\t)/),
						pt = [],
						Ct = st.length;
					for (let Pt = 0; Pt < Ct; Pt++) {
						const zt = st[Pt];
						zt ===
							`
` ||
						zt ===
							`\r
`
							? pt.push(gr())
							: zt === "	"
								? pt.push(Ar())
								: pt.push(cs(zt));
					}
					this.insertNodes(pt);
				}
				insertText(Ge) {
					const st = this.anchor,
						pt = this.focus,
						Ct = this.isCollapsed() || st.isBefore(pt),
						Pt = this.format,
						zt = this.style;
					Ct && st.type === "element"
						? Ut(st, pt, Pt, zt)
						: !Ct && pt.type === "element" && Ut(pt, st, Pt, zt);
					const Qt = this.getNodes(),
						ui = Qt.length,
						vi = Ct ? st : pt,
						Ii = Ct ? pt : st,
						Mi = vi.offset,
						Ni = Ii.offset;
					let Ri = Qt[0];
					mn(Ri) ||
						(0, w.default)(!1, "insertText: first node is not a text node");
					const ji = Ri.getTextContent().length,
						Xi = Ri.getParentOrThrow(),
						on = ui - 1;
					let Qi = Qt[on];
					if (
						this.isCollapsed() &&
						Mi === ji &&
						(Ri.isSegmented() ||
							Ri.isToken() ||
							!Ri.canInsertTextAfter() ||
							(!Xi.canInsertTextAfter() && Ri.getNextSibling() === null))
					) {
						let rn = Ri.getNextSibling();
						if (
							((!mn(rn) || !rn.canInsertTextBefore() || Zi(rn)) &&
								((rn = cs()),
								rn.setFormat(Pt),
								Xi.canInsertTextAfter()
									? Ri.insertAfter(rn)
									: Xi.insertAfter(rn)),
							rn.select(0, 0),
							(Ri = rn),
							Ge !== "")
						) {
							this.insertText(Ge);
							return;
						}
					} else if (
						this.isCollapsed() &&
						Mi === 0 &&
						(Ri.isSegmented() ||
							Ri.isToken() ||
							!Ri.canInsertTextBefore() ||
							(!Xi.canInsertTextBefore() && Ri.getPreviousSibling() === null))
					) {
						let rn = Ri.getPreviousSibling();
						if (
							((!mn(rn) || Zi(rn)) &&
								((rn = cs()),
								rn.setFormat(Pt),
								Xi.canInsertTextBefore()
									? Ri.insertBefore(rn)
									: Xi.insertBefore(rn)),
							rn.select(),
							(Ri = rn),
							Ge !== "")
						) {
							this.insertText(Ge);
							return;
						}
					} else if (Ri.isSegmented() && Mi !== ji) {
						const rn = cs(Ri.getTextContent());
						rn.setFormat(Pt), Ri.replace(rn), (Ri = rn);
					} else if (!this.isCollapsed() && Ge !== "") {
						const rn = Qi.getParent();
						if (
							!Xi.canInsertTextBefore() ||
							!Xi.canInsertTextAfter() ||
							(ln(rn) &&
								(!rn.canInsertTextBefore() || !rn.canInsertTextAfter()))
						) {
							this.insertText(""),
								Ui(this.anchor, this.focus, null),
								this.insertText(Ge);
							return;
						}
					}
					if (ui === 1) {
						if (Ri.isToken()) {
							const gn = cs(Ge);
							gn.select(), Ri.replace(gn);
							return;
						}
						const rn = Ri.getFormat(),
							pn = Ri.getStyle();
						if (Mi === Ni && (rn !== Pt || pn !== zt))
							if (Ri.getTextContent() === "") Ri.setFormat(Pt), Ri.setStyle(zt);
							else {
								const gn = cs(Ge);
								if ((gn.setFormat(Pt), gn.setStyle(zt), gn.select(), Mi === 0))
									Ri.insertBefore(gn, !1);
								else {
									const [Cn] = Ri.splitText(Mi);
									Cn.insertAfter(gn, !1);
								}
								gn.isComposing() &&
									this.anchor.type === "text" &&
									(this.anchor.offset -= Ge.length);
								return;
							}
						const bn = Ni - Mi;
						(Ri = Ri.spliceText(Mi, bn, Ge, !0)),
							Ri.getTextContent() === ""
								? Ri.remove()
								: this.anchor.type === "text" &&
									(Ri.isComposing()
										? (this.anchor.offset -= Ge.length)
										: ((this.format = rn), (this.style = pn)));
					} else {
						const rn = new Set([...Ri.getParentKeys(), ...Qi.getParentKeys()]),
							pn = ln(Ri) ? Ri : Ri.getParentOrThrow();
						let bn = ln(Qi) ? Qi : Qi.getParentOrThrow(),
							gn = Qi;
						if (!pn.is(bn) && bn.isInline())
							do (gn = bn), (bn = bn.getParentOrThrow());
							while (bn.isInline());
						if (
							(Ii.type === "text" &&
								(Ni !== 0 || Qi.getTextContent() === "")) ||
							(Ii.type === "element" && Qi.getIndexWithinParent() < Ni)
						)
							if (mn(Qi) && !Qi.isToken() && Ni !== Qi.getTextContentSize()) {
								if (Qi.isSegmented()) {
									const On = cs(Qi.getTextContent());
									Qi.replace(On), (Qi = On);
								}
								(Qi = Qi.spliceText(0, Ni, "")), rn.add(Qi.__key);
							} else {
								const On = Qi.getParentOrThrow();
								!On.canBeEmpty() && On.getChildrenSize() === 1
									? On.remove()
									: Qi.remove();
							}
						else rn.add(Qi.__key);
						const Cn = bn.getChildren(),
							Tn = new Set(Qt),
							Vn = pn.is(bn),
							Zn = pn.isInline() && Ri.getNextSibling() === null ? pn : Ri;
						for (let On = Cn.length - 1; On >= 0; On--) {
							const Kn = Cn[On];
							if (Kn.is(Ri) || (ln(Kn) && Kn.isParentOf(Ri))) break;
							Kn.isAttached() &&
								(!Tn.has(Kn) || Kn.is(gn)
									? Vn || Zn.insertAfter(Kn, !1)
									: Kn.remove());
						}
						if (!Vn) {
							let On = bn,
								Kn = null;
							for (; On !== null; ) {
								const Ss = On.getChildren(),
									gs = Ss.length;
								(gs === 0 || Ss[gs - 1].is(Kn)) &&
									(rn.delete(On.__key), (Kn = On)),
									(On = On.getParent());
							}
						}
						if (!Ri.isToken())
							(Ri = Ri.spliceText(Mi, ji - Mi, Ge, !0)),
								Ri.getTextContent() === ""
									? Ri.remove()
									: Ri.isComposing() &&
										this.anchor.type === "text" &&
										(this.anchor.offset -= Ge.length);
						else if (Mi === ji) Ri.select();
						else {
							const On = cs(Ge);
							On.select(), Ri.replace(On);
						}
						for (let On = 1; On < ui; On++) {
							const Kn = Qt[On],
								Ss = Kn.__key;
							rn.has(Ss) || Kn.remove();
						}
					}
				}
				removeText() {
					this.insertText("");
				}
				formatText(Ge) {
					if (this.isCollapsed()) {
						this.toggleFormat(Ge), _n(null);
						return;
					}
					const st = this.getNodes(),
						pt = [];
					for (const Qi of st) mn(Qi) && pt.push(Qi);
					const Ct = pt.length;
					if (Ct === 0) {
						this.toggleFormat(Ge), _n(null);
						return;
					}
					const Pt = this.anchor,
						zt = this.focus,
						Qt = this.isBackward(),
						ui = Qt ? zt : Pt,
						vi = Qt ? Pt : zt;
					let Ii = 0,
						Mi = pt[0],
						Ni = ui.type === "element" ? 0 : ui.offset;
					if (
						(ui.type === "text" &&
							Ni === Mi.getTextContentSize() &&
							((Ii = 1), (Mi = pt[1]), (Ni = 0)),
						Mi == null)
					)
						return;
					const Ri = Mi.getFormatFlags(Ge, null),
						Ki = Ct - 1;
					let ji = pt[Ki];
					const Xi = vi.type === "text" ? vi.offset : ji.getTextContentSize();
					if (Mi.is(ji)) {
						if (Ni === Xi) return;
						if (Ni === 0 && Xi === Mi.getTextContentSize()) Mi.setFormat(Ri);
						else {
							const Qi = Mi.splitText(Ni, Xi),
								rn = Ni === 0 ? Qi[0] : Qi[1];
							rn.setFormat(Ri),
								ui.type === "text" && ui.set(rn.__key, 0, "text"),
								vi.type === "text" && vi.set(rn.__key, Xi - Ni, "text");
						}
						this.format = Ri;
						return;
					}
					Ni !== 0 && (([, Mi] = Mi.splitText(Ni)), (Ni = 0)), Mi.setFormat(Ri);
					const on = ji.getFormatFlags(Ge, Ri);
					Xi > 0 &&
						(Xi !== ji.getTextContentSize() && ([ji] = ji.splitText(Xi)),
						ji.setFormat(on));
					for (let Qi = Ii + 1; Qi < Ki; Qi++) {
						const rn = pt[Qi];
						if (!rn.isToken()) {
							const pn = rn.getFormatFlags(Ge, on);
							rn.setFormat(pn);
						}
					}
					ui.type === "text" && ui.set(Mi.__key, Ni, "text"),
						vi.type === "text" && vi.set(ji.__key, Xi, "text"),
						(this.format = Ri | on);
				}
				insertNodes(Ge, st) {
					if (!this.isCollapsed()) {
						const Ki = this.isBackward() ? this.anchor : this.focus,
							ji = Ki.getNode().getNextSibling(),
							Xi = ji ? ji.getKey() : null,
							on = Ki.getNode().getPreviousSibling(),
							Qi = on ? on.getKey() : null;
						if (
							(this.removeText(),
							this.isCollapsed() && this.focus.type === "element")
						) {
							let rn;
							this.focus.key === Xi && this.focus.offset === 0
								? ((rn = cs()), this.focus.getNode().insertBefore(rn))
								: this.focus.key === Qi &&
									this.focus.offset ===
										this.focus.getNode().getChildrenSize() &&
									((rn = cs()), this.focus.getNode().insertAfter(rn)),
								rn &&
									(this.focus.set(rn.__key, 0, "text"),
									this.anchor.set(rn.__key, 0, "text"));
						}
					}
					const pt = this.anchor,
						Ct = pt.offset,
						Pt = pt.getNode();
					let zt = Pt;
					if (pt.type === "element") {
						const Ki = pt.getNode(),
							ji = Ki.getChildAtIndex(Ct - 1);
						ji === null ? (zt = Ki) : (zt = ji);
					}
					const Qt = [],
						ui = Pt.getNextSiblings(),
						vi = Wn(Pt) ? null : Pt.getTopLevelElementOrThrow();
					if (mn(Pt)) {
						const ji = Pt.getTextContent().length;
						if (Ct === 0 && ji !== 0) {
							const Xi = Pt.getPreviousSibling();
							Xi !== null ? (zt = Xi) : (zt = Pt.getParentOrThrow()),
								Qt.push(Pt);
						} else if (Ct === ji) zt = Pt;
						else {
							if (Pt.isToken()) return !1;
							{
								let Xi;
								([zt, Xi] = Pt.splitText(Ct)), Qt.push(Xi);
							}
						}
					}
					const Ii = zt;
					Qt.push(...ui);
					const Mi = Ge[0];
					let Ni = !1,
						Ri = null;
					for (let Ki = 0; Ki < Ge.length; Ki++) {
						const ji = Ge[Ki];
						if (!Wn(zt) && !Xn(zt) && ln(ji) && !ji.isInline()) {
							if (ji.is(Mi)) {
								if (ln(zt) && zt.isEmpty() && zt.canReplaceWith(ji)) {
									zt.replace(ji), (zt = ji), (Ni = !0);
									continue;
								}
								const Xi = ji.getFirstDescendant();
								if (Sn(Xi)) {
									let on = Xi.getParentOrThrow();
									for (; on.isInline(); ) on = on.getParentOrThrow();
									const Qi = on.getChildren(),
										rn = Qi.length;
									if (ln(zt)) {
										let pn = zt.getFirstChild();
										for (let bn = 0; bn < rn; bn++) {
											const gn = Qi[bn];
											pn === null ? zt.append(gn) : pn.insertAfter(gn),
												(pn = gn);
										}
									} else {
										for (let pn = rn - 1; pn >= 0; pn--) zt.insertAfter(Qi[pn]);
										zt = zt.getParentOrThrow();
									}
									if (((Ri = Qi[rn - 1]), on.remove(), (Ni = !0), on.is(ji)))
										continue;
								}
							}
							mn(zt) &&
								(vi === null &&
									(0, w.default)(
										!1,
										"insertNode: topLevelElement is root node",
									),
								(zt = vi));
						} else
							Ni &&
								!ln(ji) &&
								!Xn(ji) &&
								Wn(zt.getParent()) &&
								(0, w.default)(
									!1,
									"insertNodes: cannot insert a non-element into a root node",
								);
						if (((Ni = !1), ln(zt) && !zt.isInline()))
							if (((Ri = ji), Xn(ji) && !ji.isInline()))
								zt = zt.insertAfter(ji, !1);
							else if (ln(ji)) {
								if (!ji.canBeEmpty() && ji.isEmpty()) continue;
								if (it(zt)) {
									const Xi = zt.getChildAtIndex(Ct);
									Xi !== null ? Xi.insertBefore(ji) : zt.append(ji), (zt = ji);
								} else
									ji.isInline()
										? (zt.append(ji), (zt = ji))
										: (zt = zt.insertAfter(ji, !1));
							} else {
								const Xi = zt.getFirstChild();
								Xi !== null ? Xi.insertBefore(ji) : zt.append(ji), (zt = ji);
							}
						else if (
							!ln(ji) ||
							(ln(ji) && ji.isInline()) ||
							(Xn(zt) && !zt.isInline())
						)
							if (
								((Ri = ji),
								ii(this) && Xn(ji) && (ln(zt) || mn(zt)) && !ji.isInline())
							) {
								let Xi, on;
								if (mn(zt)) {
									Xi = zt.getParentOrThrow();
									const [rn] = zt.splitText(Ct);
									on = rn.getIndexWithinParent() + 1;
								} else (Xi = zt), (on = Ct);
								const [, Qi] = _r(Xi, on);
								zt = Qi.insertBefore(ji);
							} else zt = zt.insertAfter(ji, !1);
						else {
							const Xi = zt.getParentOrThrow();
							Or(zt) && zt.remove(), (zt = Xi), Ki--;
							continue;
						}
					}
					if (st)
						if (mn(Ii)) Ii.select();
						else {
							const Ki = zt.getPreviousSibling();
							if (mn(Ki)) Ki.select();
							else {
								const ji = zt.getIndexWithinParent();
								zt.getParentOrThrow().select(ji, ji);
							}
						}
					if (ln(zt)) {
						const Ki = mn(Ri)
							? Ri
							: ln(Ri) && Ri.isInline()
								? Ri.getLastDescendant()
								: zt.getLastDescendant();
						if (
							(st ||
								(Ki === null
									? zt.select()
									: mn(Ki)
										? Ki.getTextContent() === ""
											? Ki.selectPrevious()
											: Ki.select()
										: Ki.selectNext()),
							Qt.length !== 0)
						) {
							const ji = zt;
							for (let Xi = Qt.length - 1; Xi >= 0; Xi--) {
								const on = Qt[Xi],
									Qi = on.getParentOrThrow();
								if (
									ln(zt) &&
									!Gi(on) &&
									!(Xn(on) && (!on.isInline() || on.isIsolated()))
								)
									ji === zt ? zt.append(on) : zt.insertBefore(on), (zt = on);
								else if (!ln(zt) && !Gi(on)) zt.insertBefore(on), (zt = on);
								else if (ln(on) && !on.canInsertAfter(zt)) {
									const rn = Qi.constructor.clone(Qi);
									ln(rn) ||
										(0, w.default)(
											!1,
											"insertNodes: cloned parent clone is not an element",
										),
										rn.append(on),
										zt.insertAfter(rn);
								} else zt.insertAfter(on);
								Qi.isEmpty() && !Qi.canBeEmpty() && Qi.remove();
							}
						}
					} else if (!st)
						if (mn(zt)) zt.select();
						else {
							const Ki = zt.getParentOrThrow(),
								ji = zt.getIndexWithinParent() + 1;
							Ki.select(ji, ji);
						}
					return !0;
				}
				insertParagraph() {
					this.isCollapsed() || this.removeText();
					const Ge = this.anchor,
						st = Ge.offset;
					let pt,
						Ct = [],
						Pt = [];
					if (Ge.type === "text") {
						const ui = Ge.getNode();
						(Ct = ui.getNextSiblings().reverse()), (pt = ui.getParentOrThrow());
						const vi = pt.isInline(),
							Ii = vi ? pt.getTextContentSize() : ui.getTextContentSize();
						if (st === 0) Ct.push(ui);
						else if (
							(vi && (Pt = pt.getNextSiblings()),
							st !== Ii && (!vi || st !== ui.getTextContentSize()))
						) {
							const [, Mi] = ui.splitText(st);
							Ct.push(Mi);
						}
					} else {
						if (((pt = Ge.getNode()), Wn(pt))) {
							const ui = yt(),
								vi = pt.getChildAtIndex(st);
							ui.select(),
								vi !== null ? vi.insertBefore(ui, !1) : pt.append(ui);
							return;
						}
						Ct = pt.getChildren().slice(st).reverse();
					}
					const zt = Ct.length;
					if (st === 0 && zt > 0 && pt.isInline()) {
						const ui = pt.getParentOrThrow(),
							vi = ui.insertNewAfter(this, !1);
						if (ln(vi)) {
							const Ii = ui.getChildren();
							for (let Mi = 0; Mi < Ii.length; Mi++) vi.append(Ii[Mi]);
						}
						return;
					}
					const Qt = pt.insertNewAfter(this, !1);
					if (Qt === null) this.insertLineBreak();
					else if (ln(Qt)) {
						const ui = pt.getFirstChild();
						if (
							st === 0 &&
							(pt.is(Ge.getNode()) || (ui && ui.is(Ge.getNode()))) &&
							zt > 0
						) {
							pt.insertBefore(Qt);
							return;
						}
						let Ii = null;
						const Mi = Pt.length,
							Ni = Qt.getParentOrThrow();
						if (Mi > 0)
							for (let Ri = 0; Ri < Mi; Ri++) {
								const Ki = Pt[Ri];
								Ni.append(Ki);
							}
						if (zt !== 0)
							for (let Ri = 0; Ri < zt; Ri++) {
								const Ki = Ct[Ri];
								Ii === null ? Qt.append(Ki) : Ii.insertBefore(Ki), (Ii = Ki);
							}
						!Qt.canBeEmpty() && Qt.getChildrenSize() === 0
							? (Qt.selectPrevious(), Qt.remove())
							: Qt.selectStart();
					}
				}
				insertLineBreak(Ge) {
					const st = gr(),
						pt = this.anchor;
					if (pt.type === "element") {
						const Ct = pt.getNode();
						it(Ct) && this.insertParagraph();
					}
					Ge
						? this.insertNodes([st], !0)
						: this.insertNodes([st]) && st.selectNext(0, 0);
				}
				getCharacterOffsets() {
					return ri(this);
				}
				extract() {
					const Ge = this.getNodes(),
						st = Ge.length,
						pt = st - 1,
						Ct = this.anchor,
						Pt = this.focus;
					let zt = Ge[0],
						Qt = Ge[pt];
					const [ui, vi] = ri(this);
					if (st === 0) return [];
					if (st === 1) {
						if (mn(zt) && !this.isCollapsed()) {
							const Mi = ui > vi ? vi : ui,
								Ni = ui > vi ? ui : vi,
								Ri = zt.splitText(Mi, Ni),
								Ki = Mi === 0 ? Ri[0] : Ri[1];
							return Ki != null ? [Ki] : [];
						}
						return [zt];
					}
					const Ii = Ct.isBefore(Pt);
					if (mn(zt)) {
						const Mi = Ii ? ui : vi;
						Mi === zt.getTextContentSize()
							? Ge.shift()
							: Mi !== 0 && (([, zt] = zt.splitText(Mi)), (Ge[0] = zt));
					}
					if (mn(Qt)) {
						const Ni = Qt.getTextContent().length,
							Ri = Ii ? vi : ui;
						Ri === 0
							? Ge.pop()
							: Ri !== Ni && (([Qt] = Qt.splitText(Ri)), (Ge[pt] = Qt));
					}
					return Ge;
				}
				modify(Ge, st, pt) {
					const Ct = this.focus,
						Pt = this.anchor,
						zt = Ge === "move",
						Qt = Cs(Ct, st);
					if (Xn(Qt) && !Qt.isIsolated()) {
						if (zt && Qt.isKeyboardSelectable()) {
							const Ri = yi();
							Ri.add(Qt.__key), us(Ri);
							return;
						}
						const Ni = st ? Qt.getPreviousSibling() : Qt.getNextSibling();
						if (mn(Ni)) {
							const Ri = Ni.__key,
								Ki = st ? Ni.getTextContent().length : 0;
							Ct.set(Ri, Ki, "text"), zt && Pt.set(Ri, Ki, "text");
							return;
						} else {
							const Ri = Qt.getParentOrThrow();
							let Ki, ji;
							ln(Ni)
								? ((ji = Ni.__key), (Ki = st ? Ni.getChildrenSize() : 0))
								: ((Ki = Qt.getIndexWithinParent()),
									(ji = Ri.__key),
									st || Ki++),
								Ct.set(ji, Ki, "element"),
								zt && Pt.set(ji, Ki, "element");
							return;
						}
					}
					const ui = Pi(),
						vi = Ds(ui._window);
					if (!vi) return;
					const Ii = ui._blockCursorElement,
						Mi = ui._rootElement;
					if (
						(Mi !== null &&
							Ii !== null &&
							ln(Qt) &&
							!Qt.isInline() &&
							!Qt.canBeEmpty() &&
							Nr(Ii, ui, Mi),
						Wt(vi, Ge, st ? "backward" : "forward", pt),
						vi.rangeCount > 0)
					) {
						const Ni = vi.getRangeAt(0),
							Ri = this.anchor.getNode(),
							Ki = it(Ri) ? Ri : kn(Ri);
						if ((this.applyDOMRange(Ni), (this.dirty = !0), !zt)) {
							const ji = this.getNodes(),
								Xi = [];
							let on = !1;
							for (let Qi = 0; Qi < ji.length; Qi++) {
								const rn = ji[Qi];
								Ei(rn, Ki) ? Xi.push(rn) : (on = !0);
							}
							if (on && Xi.length > 0)
								if (st) {
									const Qi = Xi[0];
									ln(Qi)
										? Qi.selectStart()
										: Qi.getParentOrThrow().selectStart();
								} else {
									const Qi = Xi[Xi.length - 1];
									ln(Qi) ? Qi.selectEnd() : Qi.getParentOrThrow().selectEnd();
								}
							(vi.anchorNode !== Ni.startContainer ||
								vi.anchorOffset !== Ni.startOffset) &&
								$i(this);
						}
					}
				}
				deleteCharacter(Ge) {
					const st = this.isCollapsed();
					if (this.isCollapsed()) {
						const pt = this.anchor,
							Ct = this.focus;
						let Pt = pt.getNode();
						if (
							!Ge &&
							((pt.type === "element" &&
								ln(Pt) &&
								pt.offset === Pt.getChildrenSize()) ||
								(pt.type === "text" && pt.offset === Pt.getTextContentSize()))
						) {
							const Qt = Pt.getParent(),
								ui =
									Pt.getNextSibling() ||
									(Qt === null ? null : Qt.getNextSibling());
							if (ln(ui) && ui.isShadowRoot()) return;
						}
						const zt = Cs(Ct, Ge);
						if (Xn(zt) && !zt.isIsolated()) {
							if (
								zt.isKeyboardSelectable() &&
								ln(Pt) &&
								Pt.getChildrenSize() === 0
							) {
								Pt.remove();
								const Qt = yi();
								Qt.add(zt.__key), us(Qt);
							} else
								zt.remove(),
									Pi().dispatchCommand(e.SELECTION_CHANGE_COMMAND, void 0);
							return;
						} else if (!Ge && ln(zt) && ln(Pt) && Pt.isEmpty()) {
							Pt.remove(), zt.selectStart();
							return;
						}
						if ((this.modify("extend", Ge, "character"), this.isCollapsed())) {
							if (
								Ge &&
								pt.offset === 0 &&
								(pt.type === "element"
									? pt.getNode()
									: pt.getNode().getParentOrThrow()
								).collapseAtStart(this)
							)
								return;
						} else {
							const Qt = Ct.type === "text" ? Ct.getNode() : null;
							if (
								((Pt = pt.type === "text" ? pt.getNode() : null),
								Qt !== null && Qt.isSegmented())
							) {
								const ui = Ct.offset,
									vi = Qt.getTextContentSize();
								if (Qt.is(Pt) || (Ge && ui !== vi) || (!Ge && ui !== 0)) {
									at(Qt, Ge, ui);
									return;
								}
							} else if (Pt !== null && Pt.isSegmented()) {
								const ui = pt.offset,
									vi = Pt.getTextContentSize();
								if (Pt.is(Qt) || (Ge && ui !== 0) || (!Ge && ui !== vi)) {
									at(Pt, Ge, ui);
									return;
								}
							}
							tt(this, Ge);
						}
					}
					if (
						(this.removeText(),
						Ge &&
							!st &&
							this.isCollapsed() &&
							this.anchor.type === "element" &&
							this.anchor.offset === 0)
					) {
						const pt = this.anchor.getNode();
						pt.isEmpty() &&
							it(pt.getParent()) &&
							pt.getIndexWithinParent() === 0 &&
							pt.collapseAtStart(this);
					}
				}
				deleteLine(Ge) {
					this.isCollapsed() &&
						(this.anchor.type === "text" &&
							this.modify("extend", Ge, "lineboundary"),
						(Ge ? this.focus : this.anchor).offset === 0 &&
							this.modify("extend", Ge, "character")),
						this.removeText();
				}
				deleteWord(Ge) {
					this.isCollapsed() && this.modify("extend", Ge, "word"),
						this.removeText();
				}
			}
			e.RangeSelection = si;
			function Zt(Qe) {
				return Qe instanceof mi;
			}
			function ci(Qe) {
				const Ge = Qe.offset;
				if (Qe.type === "text") return Ge;
				const st = Qe.getNode();
				return Ge === st.getChildrenSize() ? st.getTextContent().length : 0;
			}
			function ri(Qe) {
				const Ge = Qe.anchor,
					st = Qe.focus;
				return Ge.type === "element" &&
					st.type === "element" &&
					Ge.key === st.key &&
					Ge.offset === st.offset
					? [0, 0]
					: [ci(Ge), ci(st)];
			}
			function $i(Qe) {
				const Ge = Qe.focus,
					st = Qe.anchor,
					pt = st.key,
					Ct = st.offset,
					Pt = st.type;
				ei(st, Ge.key, Ge.offset, Ge.type),
					ei(Ge, pt, Ct, Pt),
					(Qe._cachedNodes = null);
			}
			function Wt(Qe, Ge, st, pt) {
				Qe.modify(Ge, st, pt);
			}
			function tt(Qe, Ge) {
				const st = Qe.anchor,
					pt = Qe.focus,
					Ct = st.getNode(),
					Pt = pt.getNode();
				if (Ct === Pt && st.type === "text" && pt.type === "text") {
					const zt = st.offset,
						Qt = pt.offset,
						ui = zt < Qt,
						vi = ui ? zt : Qt,
						Ii = ui ? Qt : zt,
						Mi = Ii - 1;
					if (vi !== Mi) {
						const Ni = Ct.getTextContent().slice(vi, Ii);
						Xs(Ni) || (Ge ? (pt.offset = Mi) : (st.offset = Mi));
					}
				}
			}
			function at(Qe, Ge, st) {
				const pt = Qe,
					Pt = pt.getTextContent().split(/(?=\s)/g),
					zt = Pt.length;
				let Qt = 0,
					ui = 0;
				for (let Ii = 0; Ii < zt; Ii++) {
					const Mi = Pt[Ii],
						Ni = Ii === zt - 1;
					if (
						((ui = Qt), (Qt += Mi.length), (Ge && Qt === st) || Qt > st || Ni)
					) {
						Pt.splice(Ii, 1), Ni && (ui = void 0);
						break;
					}
				}
				const vi = Pt.join("").trim();
				vi === "" ? pt.remove() : (pt.setTextContent(vi), pt.select(ui, ui));
			}
			function pi(Qe, Ge, st) {
				const pt = Qe.getParent();
				return (
					st === null || pt === null || !pt.canBeEmpty() || pt !== st.getNode()
				);
			}
			function Li(Qe, Ge, st, pt) {
				let Ct = Ge,
					Pt;
				if (Qe.nodeType === e.DOM_ELEMENT_TYPE) {
					let zt = !1;
					const Qt = Qe.childNodes,
						ui = Qt.length;
					Ct === ui && ((zt = !0), (Ct = ui - 1));
					let vi = Qt[Ct],
						Ii = !1;
					if (
						(vi === pt._blockCursorElement
							? ((vi = Qt[Ct + 1]), (Ii = !0))
							: pt._blockCursorElement !== null && Ct--,
						(Pt = Ws(vi)),
						mn(Pt))
					)
						Ct = br(Pt, zt);
					else {
						let Mi = Ws(Qe);
						if (Mi === null) return null;
						if (ln(Mi)) {
							let Ni = Mi.getChildAtIndex(Ct);
							if (ln(Ni) && pi(Ni, Ct, st)) {
								const Ri = zt
									? Ni.getLastDescendant()
									: Ni.getFirstDescendant();
								Ri === null
									? ((Mi = Ni), (Ct = 0))
									: ((Ni = Ri), (Mi = ln(Ni) ? Ni : Ni.getParentOrThrow()));
							}
							mn(Ni)
								? ((Pt = Ni), (Mi = null), (Ct = br(Ni, zt)))
								: Ni !== Mi && zt && !Ii && Ct++;
						} else {
							const Ni = Mi.getIndexWithinParent();
							Ge === 0 && Xn(Mi) && Ws(Qe) === Mi ? (Ct = Ni) : (Ct = Ni + 1),
								(Mi = Mi.getParentOrThrow());
						}
						if (ln(Mi)) return Bt(Mi.__key, Ct, "element");
					}
				} else Pt = Ws(Qe);
				return mn(Pt) ? Bt(Pt.__key, Ct, "text") : null;
			}
			function Di(Qe, Ge, st) {
				const pt = Qe.offset,
					Ct = Qe.getNode();
				if (pt === 0) {
					const Pt = Ct.getPreviousSibling(),
						zt = Ct.getParent();
					if (!Ge)
						ln(Pt) && !st && Pt.isInline()
							? ((Qe.key = Pt.__key),
								(Qe.offset = Pt.getChildrenSize()),
								(Qe.type = "element"))
							: mn(Pt) &&
								((Qe.key = Pt.__key), (Qe.offset = Pt.getTextContent().length));
					else if ((st || !Ge) && Pt === null && ln(zt) && zt.isInline()) {
						const Qt = zt.getPreviousSibling();
						mn(Qt) &&
							((Qe.key = Qt.__key), (Qe.offset = Qt.getTextContent().length));
					}
				} else if (pt === Ct.getTextContent().length) {
					const Pt = Ct.getNextSibling(),
						zt = Ct.getParent();
					if (Ge && ln(Pt) && Pt.isInline())
						(Qe.key = Pt.__key), (Qe.offset = 0), (Qe.type = "element");
					else if (
						(st || Ge) &&
						Pt === null &&
						ln(zt) &&
						zt.isInline() &&
						!zt.canInsertTextAfter()
					) {
						const Qt = zt.getNextSibling();
						mn(Qt) && ((Qe.key = Qt.__key), (Qe.offset = 0));
					}
				}
			}
			function Ui(Qe, Ge, st) {
				if (Qe.type === "text" && Ge.type === "text") {
					const pt = Qe.isBefore(Ge),
						Ct = Qe.is(Ge);
					Di(Qe, pt, Ct),
						Di(Ge, !pt, Ct),
						Ct &&
							((Ge.key = Qe.key), (Ge.offset = Qe.offset), (Ge.type = Qe.type));
					const Pt = Pi();
					if (Pt.isComposing() && Pt._compositionKey !== Qe.key && ii(st)) {
						const zt = st.anchor,
							Qt = st.focus;
						ei(Qe, zt.key, zt.offset, zt.type),
							ei(Ge, Qt.key, Qt.offset, Qt.type);
					}
				}
			}
			function Wi(Qe, Ge, st, pt, Ct, Pt) {
				if (Qe === null || st === null || !ns(Ct, Qe, st)) return null;
				const zt = Li(Qe, Ge, ii(Pt) ? Pt.anchor : null, Ct);
				if (zt === null) return null;
				const Qt = Li(st, pt, ii(Pt) ? Pt.focus : null, Ct);
				if (Qt === null) return null;
				if (zt.type === "element" && Qt.type === "element") {
					const ui = Ws(Qe),
						vi = Ws(st);
					if (Xn(ui) && Xn(vi)) return null;
				}
				return Ui(zt, Qt, Pt), [zt, Qt];
			}
			function Gi(Qe) {
				return ln(Qe) && !Qe.isInline();
			}
			function qi(Qe, Ge, st, pt, Ct, Pt) {
				const zt = ki(),
					Qt = new si(Bt(Qe, Ge, Ct), Bt(st, pt, Pt), 0, "");
				return (Qt.dirty = !0), (zt._selection = Qt), Qt;
			}
			function Oi() {
				const Qe = Bt("root", 0, "element"),
					Ge = Bt("root", 0, "element");
				return new si(Qe, Ge, 0, "");
			}
			function yi() {
				return new mi(new Set());
			}
			function Ai() {
				const Qe = Bt("root", 0, "element"),
					Ge = Bt("root", 0, "element");
				return new Dt("root", Qe, Ge);
			}
			function li(Qe) {
				const st = Qe.getEditorState()._selection,
					pt = Ds(Qe._window);
				return Zt(st) || Jt(st) ? st.clone() : Vi(st, pt, Qe);
			}
			function Vi(Qe, Ge, st) {
				const pt = st._window;
				if (pt === null) return null;
				const Ct = pt.event,
					Pt = Ct ? Ct.type : void 0,
					zt = Pt === "selectionchange",
					Qt =
						!oe() &&
						(zt ||
							Pt === "beforeinput" ||
							Pt === "compositionstart" ||
							Pt === "compositionend" ||
							(Pt === "click" && Ct && Ct.detail === 3) ||
							Pt === "drop" ||
							Pt === void 0);
				let ui, vi, Ii, Mi;
				if (!ii(Qe) || Qt) {
					if (Ge === null) return null;
					if (
						((ui = Ge.anchorNode),
						(vi = Ge.focusNode),
						(Ii = Ge.anchorOffset),
						(Mi = Ge.focusOffset),
						zt && ii(Qe) && !ns(st, ui, vi))
					)
						return Qe.clone();
				} else return Qe.clone();
				const Ni = Wi(ui, Ii, vi, Mi, st, Qe);
				if (Ni === null) return null;
				const [Ri, Ki] = Ni;
				return new si(Ri, Ki, ii(Qe) ? Qe.format : 0, ii(Qe) ? Qe.style : "");
			}
			function wi() {
				return ki()._selection;
			}
			function _t() {
				return Pi()._editorState._selection;
			}
			function ai(Qe, Ge, st, pt = 1) {
				const Ct = Qe.anchor,
					Pt = Qe.focus,
					zt = Ct.getNode(),
					Qt = Pt.getNode();
				if (!Ge.is(zt) && !Ge.is(Qt)) return;
				const ui = Ge.__key;
				if (Qe.isCollapsed()) {
					const vi = Ct.offset;
					if ((st <= vi && pt > 0) || (st < vi && pt < 0)) {
						const Ii = Math.max(0, vi + pt);
						Ct.set(ui, Ii, "element"), Pt.set(ui, Ii, "element"), Ft(Qe);
					}
				} else {
					const vi = Qe.isBackward(),
						Ii = vi ? Pt : Ct,
						Mi = Ii.getNode(),
						Ni = vi ? Ct : Pt,
						Ri = Ni.getNode();
					if (Ge.is(Mi)) {
						const Ki = Ii.offset;
						((st <= Ki && pt > 0) || (st < Ki && pt < 0)) &&
							Ii.set(ui, Math.max(0, Ki + pt), "element");
					}
					if (Ge.is(Ri)) {
						const Ki = Ni.offset;
						((st <= Ki && pt > 0) || (st < Ki && pt < 0)) &&
							Ni.set(ui, Math.max(0, Ki + pt), "element");
					}
				}
				Ft(Qe);
			}
			function Ft(Qe) {
				const Ge = Qe.anchor,
					st = Ge.offset,
					pt = Qe.focus,
					Ct = pt.offset,
					Pt = Ge.getNode(),
					zt = pt.getNode();
				if (Qe.isCollapsed()) {
					if (!ln(Pt)) return;
					const Qt = Pt.getChildrenSize(),
						ui = st >= Qt,
						vi = ui ? Pt.getChildAtIndex(Qt - 1) : Pt.getChildAtIndex(st);
					if (mn(vi)) {
						let Ii = 0;
						ui && (Ii = vi.getTextContentSize()),
							Ge.set(vi.__key, Ii, "text"),
							pt.set(vi.__key, Ii, "text");
					}
					return;
				}
				if (ln(Pt)) {
					const Qt = Pt.getChildrenSize(),
						ui = st >= Qt,
						vi = ui ? Pt.getChildAtIndex(Qt - 1) : Pt.getChildAtIndex(st);
					if (mn(vi)) {
						let Ii = 0;
						ui && (Ii = vi.getTextContentSize()), Ge.set(vi.__key, Ii, "text");
					}
				}
				if (ln(zt)) {
					const Qt = zt.getChildrenSize(),
						ui = Ct >= Qt,
						vi = ui ? zt.getChildAtIndex(Qt - 1) : zt.getChildAtIndex(Ct);
					if (mn(vi)) {
						let Ii = 0;
						ui && (Ii = vi.getTextContentSize()), pt.set(vi.__key, Ii, "text");
					}
				}
			}
			function Xt(Qe, Ge) {
				const pt = Ge.getEditorState()._selection,
					Ct = Qe._selection;
				if (ii(Ct)) {
					const Pt = Ct.anchor,
						zt = Ct.focus;
					let Qt;
					if (
						(Pt.type === "text" &&
							((Qt = Pt.getNode()), Qt.selectionTransform(pt, Ct)),
						zt.type === "text")
					) {
						const ui = zt.getNode();
						Qt !== ui && ui.selectionTransform(pt, Ct);
					}
				}
			}
			function $t(Qe, Ge, st, pt, Ct) {
				let Pt = null,
					zt = 0,
					Qt = null;
				pt !== null
					? ((Pt = pt.__key),
						mn(pt)
							? ((zt = pt.getTextContentSize()), (Qt = "text"))
							: ln(pt) && ((zt = pt.getChildrenSize()), (Qt = "element")))
					: Ct !== null &&
						((Pt = Ct.__key),
						mn(Ct) ? (Qt = "text") : ln(Ct) && (Qt = "element")),
					Pt !== null && Qt !== null
						? Qe.set(Pt, zt, Qt)
						: ((zt = Ge.getIndexWithinParent()),
							zt === -1 && (zt = st.getChildrenSize()),
							Qe.set(st.__key, zt, "element"));
			}
			function ut(Qe, Ge, st, pt, Ct) {
				Qe.type === "text"
					? ((Qe.key = st), Ge || (Qe.offset += Ct))
					: Qe.offset > pt.getIndexWithinParent() && (Qe.offset -= 1);
			}
			function Et(Qe, Ge, st, pt, Ct, Pt, zt) {
				const Qt = pt.anchorNode,
					ui = pt.focusNode,
					vi = pt.anchorOffset,
					Ii = pt.focusOffset,
					Mi = document.activeElement;
				if ((Ct.has("collaboration") && Mi !== Pt) || (Mi !== null && En(Mi)))
					return;
				if (!ii(Ge)) {
					Qe !== null && ns(st, Qt, ui) && pt.removeAllRanges();
					return;
				}
				const Ni = Ge.anchor,
					Ri = Ge.focus,
					Ki = Ni.key,
					ji = Ri.key,
					Xi = As(st, Ki),
					on = As(st, ji),
					Qi = Ni.offset,
					rn = Ri.offset,
					pn = Ge.format,
					bn = Ge.style,
					gn = Ge.isCollapsed();
				let Cn = Xi,
					Tn = on,
					Vn = !1;
				if (Ni.type === "text") {
					Cn = fn(Xi);
					const Zn = Ni.getNode();
					Vn = Zn.getFormat() !== pn || Zn.getStyle() !== bn;
				} else ii(Qe) && Qe.anchor.type === "text" && (Vn = !0);
				if (
					(Ri.type === "text" && (Tn = fn(on)),
					!(Cn === null || Tn === null) &&
						(gn &&
							(Qe === null ||
								Vn ||
								(ii(Qe) && (Qe.format !== pn || Qe.style !== bn))) &&
							_(pn, bn, Qi, Ki, performance.now()),
						!(
							vi === Qi &&
							Ii === rn &&
							Qt === Cn &&
							ui === Tn &&
							!(pt.type === "Range" && gn) &&
							((Mi === null || !Pt.contains(Mi)) &&
								Pt.focus({ preventScroll: !0 }),
							Ni.type !== "element")
						)))
				) {
					try {
						pt.setBaseAndExtent(Cn, Qi, Tn, rn);
					} catch {}
					if (
						!Ct.has("skip-scroll-into-view") &&
						Ge.isCollapsed() &&
						Pt !== null &&
						Pt === document.activeElement
					) {
						const Zn =
							Ge instanceof si && Ge.anchor.type === "element"
								? Cn.childNodes[Qi] || null
								: pt.rangeCount > 0
									? pt.getRangeAt(0)
									: null;
						if (Zn !== null) {
							let On;
							if (Zn instanceof Text) {
								const Kn = document.createRange();
								Kn.selectNode(Zn), (On = Kn.getBoundingClientRect());
							} else On = Zn.getBoundingClientRect();
							Mr(st, On, Pt);
						}
					}
					ee();
				}
			}
			function Tt(Qe, Ge) {
				let st = wi();
				return st === null && (st = Jn().selectEnd()), st.insertNodes(Qe, Ge);
			}
			function qt() {
				const Qe = wi();
				return Qe === null ? "" : Qe.getTextContent();
			}
			function At(Qe, Ge, st) {
				const pt = [];
				let Ct = null,
					Pt = null;
				function zt(vi, Ii, Mi) {
					const Ni = { cell: Mi, startColumn: Ii, startRow: vi },
						Ri = Mi.__rowSpan,
						Ki = Mi.__colSpan;
					for (let ji = 0; ji < Ri; ji++) {
						pt[vi + ji] === void 0 && (pt[vi + ji] = []);
						for (let Xi = 0; Xi < Ki; Xi++) pt[vi + ji][Ii + Xi] = Ni;
					}
					Ge.is(Mi) && (Ct = Ni), st.is(Mi) && (Pt = Ni);
				}
				function Qt(vi, Ii) {
					return pt[vi] === void 0 || pt[vi][Ii] === void 0;
				}
				const ui = Qe.getChildren();
				for (let vi = 0; vi < ui.length; vi++) {
					const Ii = ui[vi];
					(0, w.default)(
						Fr(Ii),
						"Expected GridNode children to be GridRowNode",
					);
					const Mi = Ii.getChildren();
					let Ni = 0;
					for (const Ri of Mi) {
						for (
							(0, w.default)(
								zs(Ri),
								"Expected GridRowNode children to be GridCellNode",
							);
							!Qt(vi, Ni);
						)
							Ni++;
						zt(vi, Ni, Ri), (Ni += Ri.__colSpan);
					}
				}
				return (
					(0, w.default)(Ct !== null, "Anchor not found in Grid"),
					(0, w.default)(Pt !== null, "Focus not found in Grid"),
					[pt, Ct, Pt]
				);
			}
			function Yt(Qe) {
				let Ge;
				if (Qe instanceof vo) Ge = Qe;
				else if (Qe instanceof Ce) {
					const Ct = ur(Qe, zs);
					(0, w.default)(zs(Ct), "Expected to find a parent GridCellNode"),
						(Ge = Ct);
				} else {
					const Ct = ur(Qe.getNode(), zs);
					(0, w.default)(zs(Ct), "Expected to find a parent GridCellNode"),
						(Ge = Ct);
				}
				const st = Ge.getParent();
				(0, w.default)(
					Fr(st),
					"Expected GridCellNode to have a parent GridRowNode",
				);
				const pt = st.getParent();
				return (
					(0, w.default)(
						Kr(pt),
						"Expected GridRowNode to have a parent GridNode",
					),
					[Ge, st, pt]
				);
			}
			let ni = null,
				bi = null,
				fi = !1,
				Ti = !1,
				wt = 0;
			const We = { characterData: !0, childList: !0, subtree: !0 };
			function _e() {
				return fi || (ni !== null && ni._readOnly);
			}
			function Si() {
				fi && (0, w.default)(!1, "Cannot use method in read-only mode.");
			}
			function gi() {
				wt > 99 &&
					(0, w.default)(
						!1,
						"One or more transforms are endlessly triggering additional transforms. May have encountered infinite recursion caused by transforms that have their preconditions too lose and/or conflict with each other.",
					);
			}
			function ki() {
				return (
					ni === null &&
						(0, w.default)(
							!1,
							"Unable to find an active editor state. State helpers or node methods can only be used synchronously during the callback of editor.update() or editorState.read().",
						),
					ni
				);
			}
			function Pi() {
				return (
					bi === null &&
						(0, w.default)(
							!1,
							"Unable to find an active editor. This method can only be used synchronously during the callback of editor.update().",
						),
					bi
				);
			}
			function Hi() {
				return bi;
			}
			function Ji(Qe, Ge, st) {
				const pt = Ge.__type,
					Ct = js(Qe, pt);
				let Pt = st.get(pt);
				Pt === void 0 && ((Pt = Array.from(Ct.transforms)), st.set(pt, Pt));
				const zt = Pt.length;
				for (let Qt = 0; Qt < zt && (Pt[Qt](Ge), !!Ge.isAttached()); Qt++);
			}
			function cn(Qe, Ge) {
				return Qe !== void 0 && Qe.__key !== Ge && Qe.isAttached();
			}
			function un(Qe, Ge) {
				const st = Ge._dirtyLeaves,
					pt = Qe._nodeMap;
				for (const Ct of st) {
					const Pt = pt.get(Ct);
					mn(Pt) &&
						Pt.isAttached() &&
						Pt.isSimpleText() &&
						!Pt.isUnmergeable() &&
						xe(Pt);
				}
			}
			function yn(Qe, Ge) {
				const st = Ge._dirtyLeaves,
					pt = Ge._dirtyElements,
					Ct = Qe._nodeMap,
					Pt = sn(),
					zt = new Map();
				let Qt = st,
					ui = Qt.size,
					vi = pt,
					Ii = vi.size;
				for (; ui > 0 || Ii > 0; ) {
					if (ui > 0) {
						Ge._dirtyLeaves = new Set();
						for (const Mi of Qt) {
							const Ni = Ct.get(Mi);
							mn(Ni) &&
								Ni.isAttached() &&
								Ni.isSimpleText() &&
								!Ni.isUnmergeable() &&
								xe(Ni),
								Ni !== void 0 && cn(Ni, Pt) && Ji(Ge, Ni, zt),
								st.add(Mi);
						}
						if (((Qt = Ge._dirtyLeaves), (ui = Qt.size), ui > 0)) {
							wt++;
							continue;
						}
					}
					(Ge._dirtyLeaves = new Set()), (Ge._dirtyElements = new Map());
					for (const Mi of vi) {
						const Ni = Mi[0],
							Ri = Mi[1];
						if (Ni !== "root" && !Ri) continue;
						const Ki = Ct.get(Ni);
						Ki !== void 0 && cn(Ki, Pt) && Ji(Ge, Ki, zt), pt.set(Ni, Ri);
					}
					(Qt = Ge._dirtyLeaves),
						(ui = Qt.size),
						(vi = Ge._dirtyElements),
						(Ii = vi.size),
						wt++;
				}
				(Ge._dirtyLeaves = st), (Ge._dirtyElements = pt);
			}
			function Rn(Qe) {
				return _i(Qe, Pi()._nodes);
			}
			function _i(Qe, Ge) {
				const st = Qe.type,
					pt = Ge.get(st);
				pt === void 0 &&
					(0, w.default)(!1, 'parseEditorState: type "%s" + not found', st);
				const Ct = pt.klass;
				Qe.type !== Ct.getType() &&
					(0, w.default)(
						!1,
						"LexicalNode: Node %s does not implement .importJSON().",
						Ct.name,
					);
				const Pt = Ct.importJSON(Qe),
					zt = Qe.children;
				if (ln(Pt) && Array.isArray(zt))
					for (let Qt = 0; Qt < zt.length; Qt++) {
						const ui = zt[Qt],
							vi = _i(ui, Ge);
						Pt.append(vi);
					}
				return Pt;
			}
			function Bn(Qe, Ge, st) {
				const pt = n(),
					Ct = ni,
					Pt = fi,
					zt = bi,
					Qt = Ge._dirtyElements,
					ui = Ge._dirtyLeaves,
					vi = Ge._cloneNotNeeded,
					Ii = Ge._dirtyType;
				(Ge._dirtyElements = new Map()),
					(Ge._dirtyLeaves = new Set()),
					(Ge._cloneNotNeeded = new Set()),
					(Ge._dirtyType = 0),
					(ni = pt),
					(fi = !1),
					(bi = Ge);
				try {
					const Mi = Ge._nodes,
						Ni = Qe.root;
					_i(Ni, Mi), st && st(), (pt._readOnly = !0);
				} catch (Mi) {
					Mi instanceof Error && Ge._onError(Mi);
				} finally {
					(Ge._dirtyElements = Qt),
						(Ge._dirtyLeaves = ui),
						(Ge._cloneNotNeeded = vi),
						(Ge._dirtyType = Ii),
						(ni = Ct),
						(fi = Pt),
						(bi = zt);
				}
				return pt;
			}
			function Mn(Qe, Ge) {
				const st = ni,
					pt = fi,
					Ct = bi;
				(ni = Qe), (fi = !0), (bi = null);
				try {
					return Ge();
				} finally {
					(ni = st), (fi = pt), (bi = Ct);
				}
			}
			function zn(Qe) {
				const Ge = Qe._nodeMap;
				(Ge.set = () => {
					throw new Error("Cannot call set() on a frozen Lexical node map");
				}),
					(Ge.clear = () => {
						throw new Error("Cannot call clear() on a frozen Lexical node map");
					}),
					(Ge.delete = () => {
						throw new Error(
							"Cannot call delete() on a frozen Lexical node map",
						);
					});
			}
			function $n(Qe) {
				const Ge = Qe._pendingEditorState,
					st = Qe._rootElement,
					pt = Qe._headless || st === null;
				if (Ge === null) return;
				const Ct = Qe._editorState,
					Pt = Ct._selection,
					zt = Ge._selection,
					Qt = Qe._dirtyType !== e.NO_DIRTY_NODES,
					ui = ni,
					vi = fi,
					Ii = bi,
					Mi = Qe._updating,
					Ni = Qe._observer;
				let Ri = null;
				if (
					((Qe._pendingEditorState = null),
					(Qe._editorState = Ge),
					!pt && Qt && Ni !== null)
				) {
					(bi = Qe), (ni = Ge), (fi = !1), (Qe._updating = !0);
					try {
						const gn = Qe._dirtyType,
							Cn = Qe._dirtyElements,
							Tn = Qe._dirtyLeaves;
						Ni.disconnect(), (Ri = It(Ct, Ge, Qe, gn, Cn, Tn));
					} catch (gn) {
						if ((gn instanceof Error && Qe._onError(gn), !Ti))
							m(Qe, null, st, Ge),
								ge(Qe),
								(Qe._dirtyType = e.FULL_RECONCILE),
								(Ti = !0),
								$n(Qe),
								(Ti = !1);
						else throw gn;
						return;
					} finally {
						Ni.observe(st, We),
							(Qe._updating = Mi),
							(ni = ui),
							(fi = vi),
							(bi = Ii);
					}
				}
				Ge._readOnly || (Ge._readOnly = !0);
				const Ki = Qe._dirtyLeaves,
					ji = Qe._dirtyElements,
					Xi = Qe._normalizedNodes,
					on = Qe._updateTags,
					Qi = Qe._deferred,
					rn = Ge._nodeMap.size;
				Qt &&
					((Qe._dirtyType = e.NO_DIRTY_NODES),
					Qe._cloneNotNeeded.clear(),
					(Qe._dirtyLeaves = new Set()),
					(Qe._dirtyElements = new Map()),
					(Qe._normalizedNodes = new Set()),
					(Qe._updateTags = new Set())),
					te(Qe, Ge);
				const pn = pt ? null : Ds(Qe._window);
				if (Qe._editable && pn !== null && (Qt || zt === null || zt.dirty)) {
					(bi = Qe), (ni = Ge);
					try {
						if (
							(Ni !== null && Ni.disconnect(), Qt || zt === null || zt.dirty)
						) {
							const gn = Qe._blockCursorElement;
							gn !== null && Nr(gn, Qe, st), Et(Pt, zt, Qe, pn, on, st, rn);
						}
						Fs(Qe, st, zt), Ni !== null && Ni.observe(st, We);
					} finally {
						(bi = Ii), (ni = ui);
					}
				}
				Ri !== null && wn(Qe, Ct, Ge, Ri, on, Ki),
					!ii(zt) &&
						zt !== null &&
						(Pt === null || !Pt.is(zt)) &&
						Qe.dispatchCommand(e.SELECTION_CHANGE_COMMAND, void 0);
				const bn = Qe._pendingDecorators;
				bn !== null &&
					((Qe._decorators = bn),
					(Qe._pendingDecorators = null),
					Hn("decorator", Qe, !0, bn)),
					Ln(Qe, Ct, Ge),
					Hn("update", Qe, !0, {
						dirtyElements: ji,
						dirtyLeaves: Ki,
						editorState: Ge,
						normalizedNodes: Xi,
						prevEditorState: Ct,
						tags: on,
					}),
					Nn(Qe, Qi),
					Es(Qe);
			}
			function Ln(Qe, Ge, st) {
				const pt = es(Ge),
					Ct = es(st);
				pt !== Ct && Hn("textcontent", Qe, !0, Ct);
			}
			function wn(Qe, Ge, st, pt, Ct, Pt) {
				const zt = Array.from(Qe._listeners.mutation),
					Qt = zt.length;
				for (let ui = 0; ui < Qt; ui++) {
					const [vi, Ii] = zt[ui],
						Mi = pt.get(Ii);
					Mi !== void 0 && vi(Mi, { dirtyLeaves: Pt, updateTags: Ct });
				}
			}
			function Hn(Qe, Ge, st, ...pt) {
				const Ct = Ge._updating;
				Ge._updating = st;
				try {
					const Pt = Array.from(Ge._listeners[Qe]);
					for (let zt = 0; zt < Pt.length; zt++) Pt[zt].apply(null, pt);
				} finally {
					Ge._updating = Ct;
				}
			}
			function Yn(Qe, Ge, st) {
				if (Qe._updating === !1 || bi !== Qe) {
					let Ct = !1;
					return (
						Qe.update(() => {
							Ct = Yn(Qe, Ge, st);
						}),
						Ct
					);
				}
				const pt = ir(Qe);
				for (let Ct = 4; Ct >= 0; Ct--)
					for (let Pt = 0; Pt < pt.length; Pt++) {
						const ui = pt[Pt]._commands.get(Ge);
						if (ui !== void 0) {
							const vi = ui[Ct];
							if (vi !== void 0) {
								const Ii = Array.from(vi),
									Mi = Ii.length;
								for (let Ni = 0; Ni < Mi; Ni++)
									if (Ii[Ni](st, Qe) === !0) return !0;
							}
						}
					}
				return !1;
			}
			function Es(Qe) {
				const Ge = Qe._updates;
				if (Ge.length !== 0) {
					const st = Ge.shift();
					if (st) {
						const [pt, Ct] = st;
						Gn(Qe, pt, Ct);
					}
				}
			}
			function Nn(Qe, Ge) {
				if (((Qe._deferred = []), Ge.length !== 0)) {
					const st = Qe._updating;
					Qe._updating = !0;
					try {
						for (let pt = 0; pt < Ge.length; pt++) Ge[pt]();
					} finally {
						Qe._updating = st;
					}
				}
			}
			function Fn(Qe, Ge) {
				const st = Qe._updates;
				let pt = Ge || !1;
				for (; st.length !== 0; ) {
					const Ct = st.shift();
					if (Ct) {
						const [Pt, zt] = Ct;
						let Qt, ui;
						zt !== void 0 &&
							((Qt = zt.onUpdate),
							(ui = zt.tag),
							zt.skipTransforms && (pt = !0),
							Qt && Qe._deferred.push(Qt),
							ui && Qe._updateTags.add(ui)),
							Pt();
					}
				}
				return pt;
			}
			function Gn(Qe, Ge, st) {
				const pt = Qe._updateTags;
				let Ct,
					Pt,
					zt = !1,
					Qt = !1;
				st !== void 0 &&
					((Ct = st.onUpdate),
					(Pt = st.tag),
					Pt != null && pt.add(Pt),
					(zt = st.skipTransforms || !1),
					(Qt = st.discrete || !1)),
					Ct && Qe._deferred.push(Ct);
				const ui = Qe._editorState;
				let vi = Qe._pendingEditorState,
					Ii = !1;
				(vi === null || vi._readOnly) &&
					((vi = Qe._pendingEditorState = c(vi || ui)), (Ii = !0)),
					(vi._flushSync = Qt);
				const Mi = ni,
					Ni = fi,
					Ri = bi,
					Ki = Qe._updating;
				(ni = vi), (fi = !1), (Qe._updating = !0), (bi = Qe);
				try {
					Ii &&
						(Qe._headless
							? ui._selection != null && (vi._selection = ui._selection.clone())
							: (vi._selection = li(Qe)));
					const Xi = Qe._compositionKey;
					Ge(),
						(zt = Fn(Qe, zt)),
						Xt(vi, Qe),
						Qe._dirtyType !== e.NO_DIRTY_NODES &&
							(zt ? un(vi, Qe) : yn(vi, Qe),
							Fn(Qe),
							Z(ui, vi, Qe._dirtyLeaves, Qe._dirtyElements));
					const on = Qe._compositionKey;
					Xi !== on && (vi._flushSync = !0);
					const Qi = vi._selection;
					if (ii(Qi)) {
						const rn = vi._nodeMap,
							pn = Qi.anchor.key,
							bn = Qi.focus.key;
						(rn.get(pn) === void 0 || rn.get(bn) === void 0) &&
							(0, w.default)(
								!1,
								"updateEditor: selection has been lost because the previously selected nodes have been removed and selection wasn't moved to another node. Ensure selection changes after removing/replacing a selected node.",
							);
					} else Zt(Qi) && Qi._nodes.size === 0 && (vi._selection = null);
				} catch (Xi) {
					Xi instanceof Error && Qe._onError(Xi),
						(Qe._pendingEditorState = ui),
						(Qe._dirtyType = e.FULL_RECONCILE),
						Qe._cloneNotNeeded.clear(),
						(Qe._dirtyLeaves = new Set()),
						Qe._dirtyElements.clear(),
						$n(Qe);
					return;
				} finally {
					(ni = Mi), (fi = Ni), (bi = Ri), (Qe._updating = Ki), (wt = 0);
				}
				Qe._dirtyType !== e.NO_DIRTY_NODES || h(vi, Qe)
					? vi._flushSync
						? ((vi._flushSync = !1), $n(Qe))
						: Ii &&
							(0, e.scheduleMicroTask)(() => {
								$n(Qe);
							})
					: ((vi._flushSync = !1),
						Ii &&
							(pt.clear(),
							(Qe._deferred = []),
							(Qe._pendingEditorState = null)));
			}
			function Dn(Qe, Ge, st) {
				Qe._updating ? Qe._updates.push([Ge, st]) : Gn(Qe, Ge, st);
			}
			const jn = () => {};
			e.emptyFunction = jn;
			let rs = 1;
			function Js() {
				rs = 1;
			}
			function ts() {
				return "" + rs++;
			}
			function js(Qe, Ge) {
				const st = Qe._nodes.get(Ge);
				return (
					st === void 0 &&
						(0, w.default)(!1, "registeredNode: Type %s not found", Ge),
					st
				);
			}
			(e.isArray = Array.isArray),
				(e.scheduleMicroTask =
					typeof queueMicrotask == "function"
						? queueMicrotask
						: (Qe) => {
								Promise.resolve().then(Qe);
							});
			function os(Qe) {
				return Xn(vn(Qe));
			}
			function En(Qe) {
				const Ge = document.activeElement;
				if (Ge === null) return !1;
				const st = Ge.nodeName;
				return (
					Xn(vn(Qe)) &&
					(st === "INPUT" ||
						st === "TEXTAREA" ||
						(Ge.contentEditable === "true" && Ge.__lexicalEditor == null))
				);
			}
			function ns(Qe, Ge, st) {
				const pt = Qe.getRootElement();
				try {
					return (
						pt !== null &&
						pt.contains(Ge) &&
						pt.contains(st) &&
						Ge !== null &&
						!En(Ge) &&
						Fi(Ge) === Qe
					);
				} catch {
					return !1;
				}
			}
			function Fi(Qe) {
				let Ge = Qe;
				for (; Ge != null; ) {
					const st = Ge.__lexicalEditor;
					if (st != null) return st;
					Ge = Os(Ge);
				}
				return null;
			}
			function zi(Qe) {
				return e.RTL_REGEX.test(Qe)
					? "rtl"
					: e.LTR_REGEX.test(Qe)
						? "ltr"
						: null;
			}
			function Zi(Qe) {
				return Qe.isToken() || Qe.isSegmented();
			}
			function nn(Qe) {
				return Qe.nodeType === e.DOM_TEXT_TYPE;
			}
			function fn(Qe) {
				let Ge = Qe;
				for (; Ge != null; ) {
					if (nn(Ge)) return Ge;
					Ge = Ge.firstChild;
				}
				return null;
			}
			function xn(Qe, Ge, st) {
				const pt = e.TEXT_TYPE_TO_FORMAT[Ge];
				return Qe & pt && (st === null || !(st & pt))
					? Qe ^ pt
					: st === null || st & pt
						? Qe | pt
						: Qe;
			}
			function Sn(Qe) {
				return mn(Qe) || Or(Qe) || Xn(Qe);
			}
			function Un(Qe, Ge) {
				if (Ge != null) {
					Qe.__key = Ge;
					return;
				}
				Si(), gi();
				const st = Pi(),
					pt = ki(),
					Ct = ts();
				pt._nodeMap.set(Ct, Qe),
					ln(Qe) ? st._dirtyElements.set(Ct, !0) : st._dirtyLeaves.add(Ct),
					st._cloneNotNeeded.add(Ct),
					(st._dirtyType = e.HAS_DIRTY_NODES),
					(Qe.__key = Ct);
			}
			function as(Qe, Ge, st) {
				let pt = Qe;
				for (; pt !== null; ) {
					if (st.has(pt)) return;
					const Ct = Ge.get(pt);
					if (Ct === void 0) break;
					st.set(pt, !1), (pt = Ct.__parent);
				}
			}
			function Qn(Qe) {
				const Ge = Qe.getParent();
				if (Ge !== null) {
					const st = Qe.getWritable(),
						pt = Ge.getWritable(),
						Ct = Qe.getPreviousSibling(),
						Pt = Qe.getNextSibling();
					if (Ct === null)
						if (Pt !== null) {
							const zt = Pt.getWritable();
							(pt.__first = Pt.__key), (zt.__prev = null);
						} else pt.__first = null;
					else {
						const zt = Ct.getWritable();
						if (Pt !== null) {
							const Qt = Pt.getWritable();
							(Qt.__prev = zt.__key), (zt.__next = Qt.__key);
						} else zt.__next = null;
						st.__prev = null;
					}
					if (Pt === null)
						if (Ct !== null) {
							const zt = Ct.getWritable();
							(pt.__last = Ct.__key), (zt.__next = null);
						} else pt.__last = null;
					else {
						const zt = Pt.getWritable();
						if (Ct !== null) {
							const Qt = Ct.getWritable();
							(Qt.__next = zt.__key), (zt.__prev = Qt.__key);
						} else zt.__prev = null;
						st.__next = null;
					}
					pt.__size--, (st.__parent = null);
				}
			}
			function $s(Qe) {
				gi();
				const Ge = Qe.getLatest(),
					st = Ge.__parent,
					pt = ki(),
					Ct = Pi(),
					Pt = pt._nodeMap,
					zt = Ct._dirtyElements;
				st !== null && as(st, Pt, zt);
				const Qt = Ge.__key;
				(Ct._dirtyType = e.HAS_DIRTY_NODES),
					ln(Qe) ? zt.set(Qt, !0) : Ct._dirtyLeaves.add(Qt);
			}
			function Us(Qe) {
				const Ge = Qe.getPreviousSibling(),
					st = Qe.getNextSibling();
				Ge !== null && $s(Ge), st !== null && $s(st);
			}
			function _n(Qe) {
				Si();
				const Ge = Pi(),
					st = Ge._compositionKey;
				if (Qe !== st) {
					if (((Ge._compositionKey = Qe), st !== null)) {
						const pt = dn(st);
						pt !== null && pt.getWritable();
					}
					if (Qe !== null) {
						const pt = dn(Qe);
						pt !== null && pt.getWritable();
					}
				}
			}
			function sn() {
				return _e() ? null : Pi()._compositionKey;
			}
			function dn(Qe, Ge) {
				const pt = (Ge || ki())._nodeMap.get(Qe);
				return pt === void 0 ? null : pt;
			}
			function An(Qe, Ge) {
				const st = Pi(),
					pt = Qe[`__lexicalKey_${st._key}`];
				return pt !== void 0 ? dn(pt, Ge) : null;
			}
			function vn(Qe, Ge) {
				let st = Qe;
				for (; st != null; ) {
					const pt = An(st, Ge);
					if (pt !== null) return pt;
					st = Os(st);
				}
				return null;
			}
			function Pn(Qe) {
				const Ge = Qe._decorators,
					st = Object.assign({}, Ge);
				return (Qe._pendingDecorators = st), st;
			}
			function es(Qe) {
				return Qe.read(() => Jn().getTextContent());
			}
			function ls(Qe, Ge) {
				Dn(
					Qe,
					() => {
						const st = ki();
						if (st.isEmpty()) return;
						if (Ge === "root") {
							Jn().markDirty();
							return;
						}
						const pt = st._nodeMap;
						for (const [, Ct] of pt) Ct.markDirty();
					},
					Qe._pendingEditorState === null ? { tag: "history-merge" } : void 0,
				);
			}
			function Jn() {
				return ss(ki());
			}
			function ss(Qe) {
				return Qe._nodeMap.get("root");
			}
			function us(Qe) {
				Si();
				const Ge = ki();
				Qe !== null && ((Qe.dirty = !0), (Qe._cachedNodes = null)),
					(Ge._selection = Qe);
			}
			function Rs() {
				Si();
				const Qe = Pi();
				ve(Qe);
			}
			function Ws(Qe) {
				const Ge = Pi(),
					st = $r(Qe, Ge);
				if (st === null) {
					const pt = Ge.getRootElement();
					return Qe === pt ? dn("root") : null;
				}
				return dn(st);
			}
			function br(Qe, Ge) {
				return Ge ? Qe.getTextContentSize() : 0;
			}
			function $r(Qe, Ge) {
				let st = Qe;
				for (; st != null; ) {
					const pt = st[`__lexicalKey_${Ge._key}`];
					if (pt !== void 0) return pt;
					st = Os(st);
				}
				return null;
			}
			function Xs(Qe) {
				return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(Qe);
			}
			function ir(Qe) {
				const Ge = [];
				let st = Qe;
				for (; st !== null; ) Ge.push(st), (st = st._parentEditor);
				return Ge;
			}
			function nr() {
				return Math.random()
					.toString(36)
					.replace(/[^a-z]+/g, "")
					.substr(0, 5);
			}
			function Ys(Qe) {
				return Qe.nodeType === e.DOM_TEXT_TYPE ? Qe.nodeValue : null;
			}
			function yr(Qe, Ge, st) {
				const pt = Ds(Ge._window);
				if (pt === null) return;
				const Ct = pt.anchorNode;
				let { anchorOffset: Pt, focusOffset: zt } = pt;
				if (Ct !== null) {
					let Qt = Ys(Ct);
					const ui = vn(Ct);
					if (Qt !== null && mn(ui)) {
						if (Qt === e.COMPOSITION_SUFFIX && st) {
							const vi = st.length;
							(Qt = st), (Pt = vi), (zt = vi);
						}
						Qt !== null && Zs(ui, Qt, Pt, zt, Qe);
					}
				}
			}
			function Zs(Qe, Ge, st, pt, Ct) {
				let Pt = Qe;
				if (Pt.isAttached() && (Ct || !Pt.isDirty())) {
					const zt = Pt.isComposing();
					let Qt = Ge;
					(zt || Ct) &&
						Ge[Ge.length - 1] === e.COMPOSITION_SUFFIX &&
						(Qt = Ge.slice(0, -1));
					const ui = Pt.getTextContent();
					if (Ct || Qt !== ui) {
						if (Qt === "") {
							if ((_n(null), !i.IS_SAFARI && !i.IS_IOS && !i.IS_APPLE_WEBKIT)) {
								const ji = Pi();
								setTimeout(() => {
									ji.update(() => {
										Pt.isAttached() && Pt.remove();
									});
								}, 20);
							} else Pt.remove();
							return;
						}
						const vi = Pt.getParent(),
							Ii = _t(),
							Mi = Pt.getTextContentSize(),
							Ni = sn(),
							Ri = Pt.getKey();
						if (
							Pt.isToken() ||
							(Ni !== null && Ri === Ni && !zt) ||
							(ii(Ii) &&
								((vi !== null &&
									!vi.canInsertTextBefore() &&
									Ii.anchor.offset === 0) ||
									(Ii.anchor.key === Qe.__key &&
										Ii.anchor.offset === 0 &&
										!Pt.canInsertTextBefore()) ||
									(Ii.focus.key === Qe.__key &&
										Ii.focus.offset === Mi &&
										!Pt.canInsertTextAfter())))
						) {
							Pt.markDirty();
							return;
						}
						const Ki = wi();
						if (!ii(Ki) || st === null || pt === null) {
							Pt.setTextContent(Qt);
							return;
						}
						if ((Ki.setTextNodeRange(Pt, st, Pt, pt), Pt.isSegmented())) {
							const ji = Pt.getTextContent(),
								Xi = cs(ji);
							Pt.replace(Xi), (Pt = Xi);
						}
						Pt.setTextContent(Qt);
					}
				}
			}
			function wr(Qe) {
				const Ge = Qe.getPreviousSibling();
				return (
					(mn(Ge) || (ln(Ge) && Ge.isInline())) && !Ge.canInsertTextAfter()
				);
			}
			function vr(Qe, Ge) {
				if (Ge.isSegmented()) return !0;
				if (!Qe.isCollapsed()) return !1;
				const st = Qe.anchor.offset,
					pt = Ge.getParentOrThrow(),
					Ct = Ge.isToken();
				return st === 0
					? !Ge.canInsertTextBefore() ||
							!pt.canInsertTextBefore() ||
							Ct ||
							wr(Ge)
					: st === Ge.getTextContentSize()
						? !Ge.canInsertTextAfter() || !pt.canInsertTextAfter() || Ct
						: !1;
			}
			function Cr(Qe, Ge, st, pt) {
				return Qe === 9 && !Ge && !st && !pt;
			}
			function sr(Qe, Ge, st, pt) {
				return Qe === 66 && !Ge && ks(st, pt);
			}
			function Io(Qe, Ge, st, pt) {
				return Qe === 73 && !Ge && ks(st, pt);
			}
			function Sr(Qe, Ge, st, pt) {
				return Qe === 85 && !Ge && ks(st, pt);
			}
			function Xr(Qe, Ge) {
				return cr(Qe) && !Ge;
			}
			function Qs(Qe, Ge) {
				return cr(Qe) && Ge;
			}
			function qs(Qe, Ge) {
				return i.IS_APPLE && Ge && Qe === 79;
			}
			function xr(Qe, Ge, st) {
				return ds(Qe) && (i.IS_APPLE ? Ge : st);
			}
			function Yr(Qe, Ge, st) {
				return is(Qe) && (i.IS_APPLE ? Ge : st);
			}
			function zr(Qe, Ge) {
				return i.IS_APPLE && Ge && ds(Qe);
			}
			function Er(Qe, Ge) {
				return i.IS_APPLE && Ge && is(Qe);
			}
			function Zr(Qe, Ge, st, pt) {
				return i.IS_APPLE
					? Ge || st
						? !1
						: ds(Qe) || (Qe === 72 && pt)
					: pt || Ge || st
						? !1
						: ds(Qe);
			}
			function uo(Qe, Ge, st, pt, Ct) {
				return i.IS_APPLE
					? st || pt || Ct
						? !1
						: is(Qe) || (Qe === 68 && Ge)
					: Ge || pt || Ct
						? !1
						: is(Qe);
			}
			function Ir(Qe, Ge, st, pt) {
				return Qe === 90 && !Ge && ks(st, pt);
			}
			function jr(Qe, Ge, st, pt) {
				return i.IS_APPLE
					? Qe === 90 && st && Ge
					: (Qe === 89 && pt) || (Qe === 90 && pt && Ge);
			}
			function Is(Qe, Ge, st, pt) {
				return Ge ? !1 : Qe === 67 ? (i.IS_APPLE ? st : pt) : !1;
			}
			function Ur(Qe, Ge, st, pt) {
				return Ge ? !1 : Qe === 88 ? (i.IS_APPLE ? st : pt) : !1;
			}
			function rr(Qe) {
				return Qe === 37;
			}
			function Vs(Qe) {
				return Qe === 39;
			}
			function or(Qe) {
				return Qe === 38;
			}
			function Hs(Qe) {
				return Qe === 40;
			}
			function ar(Qe, Ge, st, pt) {
				return rr(Qe) && !Ge && !pt && !st;
			}
			function Tr(Qe, Ge, st, pt, Ct) {
				return rr(Qe) && !pt && !st && (Ge || Ct);
			}
			function ws(Qe, Ge, st, pt) {
				return Vs(Qe) && !Ge && !pt && !st;
			}
			function Pr(Qe, Ge, st, pt, Ct) {
				return Vs(Qe) && !pt && !st && (Ge || Ct);
			}
			function Ci(Qe, Ge, st) {
				return or(Qe) && !Ge && !st;
			}
			function vs(Qe, Ge, st) {
				return Hs(Qe) && !Ge && !st;
			}
			function Ts(Qe, Ge, st, pt) {
				return Qe || Ge || st || pt;
			}
			function kr(Qe) {
				return Qe === 32;
			}
			function ks(Qe, Ge) {
				return i.IS_APPLE ? Qe : Ge;
			}
			function cr(Qe) {
				return Qe === 13;
			}
			function ds(Qe) {
				return Qe === 8;
			}
			function Lr(Qe) {
				return Qe === 27;
			}
			function is(Qe) {
				return Qe === 46;
			}
			function Wr(Qe, Ge, st) {
				return Qe === 65 && ks(Ge, st);
			}
			function hs(Qe, Ge) {
				const st = Qe[Ge];
				if (typeof st == "string") {
					const pt = st.split(" ");
					return (Qe[Ge] = pt), pt;
				}
				return st;
			}
			function _s(Qe, Ge, st, pt, Ct) {
				if (st.size === 0) return;
				const Pt = pt.__type,
					zt = pt.__key,
					Qt = Ge.get(Pt);
				Qt === void 0 &&
					(0, w.default)(!1, "Type %s not in registeredNodes", Pt);
				const ui = Qt.klass;
				let vi = Qe.get(ui);
				vi === void 0 && ((vi = new Map()), Qe.set(ui, vi));
				const Ii = vi.get(zt),
					Mi = Ii === "destroyed" && Ct === "created";
				(Ii === void 0 || Mi) && vi.set(zt, Mi ? "updated" : Ct);
			}
			function Qr(Qe) {
				const Ge = ki(),
					st = Ge._readOnly,
					pt = Qe.getType(),
					Ct = Ge._nodeMap,
					Pt = [];
				for (const [, zt] of Ct)
					zt instanceof Qe &&
						zt.__type === pt &&
						(st || zt.isAttached()) &&
						Pt.push(zt);
				return Pt;
			}
			function Dr(Qe, Ge, st) {
				const pt = Qe.getParent();
				let Ct = st,
					Pt = Qe;
				return (
					pt !== null &&
						(Ge && st === 0
							? ((Ct = Pt.getIndexWithinParent()), (Pt = pt))
							: !Ge &&
								st === Pt.getChildrenSize() &&
								((Ct = Pt.getIndexWithinParent() + 1), (Pt = pt))),
					Pt.getChildAtIndex(Ge ? Ct - 1 : Ct)
				);
			}
			function Cs(Qe, Ge) {
				const st = Qe.offset;
				if (Qe.type === "element") {
					const pt = Qe.getNode();
					return Dr(pt, Ge, st);
				} else {
					const pt = Qe.getNode();
					if ((Ge && st === 0) || (!Ge && st === pt.getTextContentSize())) {
						const Ct = Ge ? pt.getPreviousSibling() : pt.getNextSibling();
						return Ct === null
							? Dr(
									pt.getParentOrThrow(),
									Ge,
									pt.getIndexWithinParent() + (Ge ? 0 : 1),
								)
							: Ct;
					}
				}
				return null;
			}
			function lr(Qe) {
				const Ge = hn(Qe).event,
					st = Ge && Ge.inputType;
				return st === "insertFromPaste" || st === "insertFromPasteAsQuotation";
			}
			function en(Qe, Ge, st) {
				return Yn(Qe, Ge, st);
			}
			function Ks(Qe) {
				return !it(Qe) && !Qe.isLastChild() && !Qe.isInline();
			}
			function As(Qe, Ge) {
				const st = Qe._keyToDOMMap.get(Ge);
				return (
					st === void 0 &&
						(0, w.default)(
							!1,
							"Reconciliation: could not find DOM element for node key %s",
							Ge,
						),
					st
				);
			}
			function Os(Qe) {
				const Ge = Qe.assignedSlot || Qe.parentElement;
				return Ge !== null && Ge.nodeType === 11 ? Ge.host : Ge;
			}
			function Mr(Qe, Ge, st) {
				const pt = (0, E.$Ngb)(),
					Ct = pt.defaultView;
				if (Ct === null) return;
				let { top: Pt, bottom: zt } = Ge,
					Qt = 0,
					ui = 0,
					vi = st;
				for (; vi !== null; ) {
					const Ii = vi === pt.body;
					if (Ii) (Qt = 0), (ui = hn(Qe).innerHeight);
					else {
						const Ni = vi.getBoundingClientRect();
						(Qt = Ni.top), (ui = Ni.bottom);
					}
					let Mi = 0;
					if (
						(Pt < Qt ? (Mi = -(Qt - Pt)) : zt > ui && (Mi = zt - ui), Mi !== 0)
					)
						if (Ii) Ct.scrollBy(0, Mi);
						else {
							const Ni = vi.scrollTop;
							vi.scrollTop += Mi;
							const Ri = vi.scrollTop - Ni;
							(Pt -= Ri), (zt -= Ri);
						}
					if (Ii) break;
					vi = Os(vi);
				}
			}
			function St(Qe) {
				return Pi()._updateTags.has(Qe);
			}
			function vt(Qe) {
				Si(), Pi()._updateTags.add(Qe);
			}
			function oi(Qe, Ge = 0) {
				Ge !== 0 && (0, w.default)(!1, "TODO");
				const st = wi();
				if (!ii(st) || !ln(Qe)) return st;
				const { anchor: pt, focus: Ct } = st,
					Pt = pt.getNode(),
					zt = Ct.getNode();
				return (
					Ei(Pt, Qe) && pt.set(Qe.__key, 0, "element"),
					Ei(zt, Qe) && Ct.set(Qe.__key, 0, "element"),
					st
				);
			}
			function Ei(Qe, Ge) {
				let st = Qe.getParent();
				for (; st !== null; ) {
					if (st.is(Ge)) return !0;
					st = st.getParent();
				}
				return !1;
			}
			function tn(Qe) {
				const Ge = (0, E.$Ngb)();
				return (Ge && Ge.defaultView) || null;
			}
			function hn(Qe) {
				const Ge = Qe._window;
				return Ge === null && (0, w.default)(!1, "window object not found"), Ge;
			}
			function In(Qe) {
				return (ln(Qe) && Qe.isInline()) || (Xn(Qe) && Qe.isInline());
			}
			function kn(Qe) {
				let Ge = Qe.getParentOrThrow();
				for (; Ge !== null; ) {
					if (Wn(Ge)) return Ge;
					Ge = Ge.getParentOrThrow();
				}
				return Ge;
			}
			function Wn(Qe) {
				return it(Qe) || (ln(Qe) && Qe.isShadowRoot());
			}
			function ys(Qe) {
				const Ge = Qe.constructor.clone(Qe);
				return Un(Ge, null), Ge;
			}
			function fs(Qe) {
				const Ge = Pi(),
					st = Qe.constructor.getType(),
					pt = Ge._nodes.get(st);
				pt === void 0 &&
					(0, w.default)(
						!1,
						'$initializeNode failed. Ensure node has been registered to the editor. You can do this by passing the node class via the "nodes" array in the editor config.',
					);
				const Ct = pt.replace;
				if (Ct !== null) {
					const Pt = Ct(Qe);
					return (
						Pt instanceof Qe.constructor ||
							(0, w.default)(
								!1,
								"$initializeNode failed. Ensure replacement node is a subclass of the original node.",
							),
						Pt
					);
				}
				return Qe;
			}
			function bs(Qe, Ge) {
				const st = Qe.getParent();
				it(st) &&
					!ln(Ge) &&
					!Xn(Ge) &&
					(0, w.default)(
						!1,
						"Only element or decorator nodes can be inserted in to the root node",
					);
			}
			function Ls(Qe) {
				const Ge = dn(Qe);
				return (
					Ge === null &&
						(0, w.default)(
							!1,
							"Expected node with key %s to exist but it's not in the nodeMap.",
							Qe,
						),
					Ge
				);
			}
			function Gs(Qe) {
				const Ge = Qe.theme,
					st = C.$Bfb.document.createElement("div");
				(st.contentEditable = "false"),
					st.setAttribute("data-lexical-cursor", "true");
				let pt = Ge.blockCursor;
				if (pt !== void 0) {
					if (typeof pt == "string") {
						const Ct = pt.split(" ");
						pt = Ge.blockCursor = Ct;
					}
					pt !== void 0 && st.classList.add(...pt);
				}
				return st;
			}
			function er(Qe) {
				return (Xn(Qe) || (ln(Qe) && !Qe.canBeEmpty())) && !Qe.isInline();
			}
			function Nr(Qe, Ge, st) {
				st.style.removeProperty("caret-color"), (Ge._blockCursorElement = null);
				const pt = Qe.parentElement;
				pt !== null && pt.removeChild(Qe);
			}
			function Fs(Qe, Ge, st) {
				let pt = Qe._blockCursorElement;
				if (
					ii(st) &&
					st.isCollapsed() &&
					st.anchor.type === "element" &&
					Ge.contains(document.activeElement)
				) {
					const Ct = st.anchor,
						Pt = Ct.getNode(),
						zt = Ct.offset,
						Qt = Pt.getChildrenSize();
					let ui = !1,
						vi = null;
					if (zt === Qt) {
						const Ii = Pt.getChildAtIndex(zt - 1);
						er(Ii) && (ui = !0);
					} else {
						const Ii = Pt.getChildAtIndex(zt);
						if (er(Ii)) {
							const Mi = Ii.getPreviousSibling();
							(Mi === null || er(Mi)) &&
								((ui = !0), (vi = Qe.getElementByKey(Ii.__key)));
						}
					}
					if (ui) {
						const Ii = Qe.getElementByKey(Pt.__key);
						pt === null && (Qe._blockCursorElement = pt = Gs(Qe._config)),
							(Ge.style.caretColor = "transparent"),
							vi === null ? Ii.appendChild(pt) : Ii.insertBefore(pt, vi);
						return;
					}
				}
				pt !== null && Nr(pt, Qe, Ge);
			}
			function Ds(Qe) {
				return t.CAN_USE_DOM ? (Qe || window).getSelection() : null;
			}
			function _r(Qe, Ge) {
				let st = Qe.getChildAtIndex(Ge);
				st == null && (st = Qe),
					(0, w.default)(!Wn(Qe), "Can not call $splitNode() on root element");
				const pt = (zt) => {
						const Qt = zt.getParentOrThrow(),
							ui = Wn(Qt),
							vi = zt === st && !ui ? zt : ys(zt);
						if (ui) return zt.insertAfter(vi), [zt, vi, vi];
						{
							const [Ii, Mi, Ni] = pt(Qt),
								Ri = zt.getNextSiblings();
							return Ni.append(vi, ...Ri), [Ii, Mi, vi];
						}
					},
					[Ct, Pt] = pt(st);
				return [Ct, Pt];
			}
			function ur(Qe, Ge) {
				let st = Qe;
				for (; st !== Jn() && st != null; ) {
					if (Ge(st)) return st;
					st = st.getParent();
				}
				return null;
			}
			function eo(Qe) {
				const Ge = [],
					st = [Qe];
				for (; st.length > 0; ) {
					const pt = st.pop();
					(0, w.default)(pt !== void 0, "Stack.length > 0; can't be undefined"),
						ln(pt) && st.unshift(...pt.getChildren()),
						pt !== Qe && Ge.push(pt);
				}
				return Ge;
			}
			function an(Qe) {
				return {};
			}
			(e.SELECTION_CHANGE_COMMAND = an("SELECTION_CHANGE_COMMAND")),
				(e.CLICK_COMMAND = an("CLICK_COMMAND")),
				(e.DELETE_CHARACTER_COMMAND = an("DELETE_CHARACTER_COMMAND")),
				(e.INSERT_LINE_BREAK_COMMAND = an("INSERT_LINE_BREAK_COMMAND")),
				(e.INSERT_PARAGRAPH_COMMAND = an("INSERT_PARAGRAPH_COMMAND")),
				(e.CONTROLLED_TEXT_INSERTION_COMMAND = an(
					"CONTROLLED_TEXT_INSERTION_COMMAND",
				)),
				(e.PASTE_COMMAND = an("PASTE_COMMAND")),
				(e.REMOVE_TEXT_COMMAND = an("REMOVE_TEXT_COMMAND")),
				(e.DELETE_WORD_COMMAND = an("DELETE_WORD_COMMAND")),
				(e.DELETE_LINE_COMMAND = an("DELETE_LINE_COMMAND")),
				(e.FORMAT_TEXT_COMMAND = an("FORMAT_TEXT_COMMAND")),
				(e.UNDO_COMMAND = an("UNDO_COMMAND")),
				(e.REDO_COMMAND = an("REDO_COMMAND")),
				(e.KEY_DOWN_COMMAND = an("KEYDOWN_COMMAND")),
				(e.KEY_ARROW_RIGHT_COMMAND = an("KEY_ARROW_RIGHT_COMMAND")),
				(e.MOVE_TO_END = an("MOVE_TO_END")),
				(e.KEY_ARROW_LEFT_COMMAND = an("KEY_ARROW_LEFT_COMMAND")),
				(e.MOVE_TO_START = an("MOVE_TO_START")),
				(e.KEY_ARROW_UP_COMMAND = an("KEY_ARROW_UP_COMMAND")),
				(e.KEY_ARROW_DOWN_COMMAND = an("KEY_ARROW_DOWN_COMMAND")),
				(e.KEY_COMMAND_ARROW_DOWN_COMMAND = an(
					"KEY_COMMAND_ARROW_DOWN_COMMAND",
				)),
				(e.KEY_COMMAND_ARROW_UP_COMMAND = an("KEY_COMMAND_ARROW_UP_COMMAND")),
				(e.KEY_COMMAND_ARROW_LEFT_COMMAND = an(
					"KEY_COMMAND_ARROW_LEFT_COMMAND",
				)),
				(e.KEY_COMMAND_ARROW_RIGHT_COMMAND = an(
					"KEY_COMMAND_ARROW_RIGHT_COMMAND",
				)),
				(e.KEY_ENTER_COMMAND = an("KEY_ENTER_COMMAND")),
				(e.KEY_SPACE_COMMAND = an("KEY_SPACE_COMMAND")),
				(e.KEY_BACKSPACE_COMMAND = an("KEY_BACKSPACE_COMMAND")),
				(e.KEY_ESCAPE_COMMAND = an("KEY_ESCAPE_COMMAND")),
				(e.KEY_DELETE_COMMAND = an("KEY_DELETE_COMMAND")),
				(e.KEY_ALT_ARROW_UP_COMMAND = an("KEY_ALT_ARROW_UP_COMMAND")),
				(e.KEY_ALT_ARROW_DOWN_COMMAND = an("KEY_ALT_ARROW_DOWN_COMMAND")),
				(e.KEY_COMMAND_ENTER_COMMAND = an("KEY_COMMAND_ENTER_COMMAND")),
				(e.KEY_COMMAND_ABORT_COMMAND = an("KEY_COMMAND_ABORT_COMMAND")),
				(e.KEY_COMMAND_K_COMMAND = an("KEY_COMMAND_K_COMMAND")),
				(e.KEY_COMMAND_Y_COMMAND = an("KEY_COMMAND_Y_COMMAND")),
				(e.KEY_COMMAND_D_COMMAND = an("KEY_COMMAND_D_COMMAND")),
				(e.KEY_COMMAND_E_COMMAND = an("KEY_COMMAND_E_COMMAND")),
				(e.KEY_MAC_CTRL_C_COMMAND = an("KEY_COMMAND_C_COMMAND")),
				(e.KEY_COMMAND_H_COMMAND = an("KEY_COMMAND_H_COMMAND")),
				(e.KEY_COMMAND_1_COMMAND = an("KEY_COMMAND_1_COMMAND")),
				(e.KEY_COMMAND_2_COMMAND = an("KEY_COMMAND_2_COMMAND")),
				(e.KEY_COMMAND_3_COMMAND = an("KEY_COMMAND_3_COMMAND")),
				(e.KEY_COMMAND_4_COMMAND = an("KEY_COMMAND_4_COMMAND")),
				(e.KEY_COMMAND_5_COMMAND = an("KEY_COMMAND_5_COMMAND")),
				(e.KEY_COMMAND_6_COMMAND = an("KEY_COMMAND_6_COMMAND")),
				(e.KEY_COMMAND_7_COMMAND = an("KEY_COMMAND_7_COMMAND")),
				(e.KEY_COMMAND_8_COMMAND = an("KEY_COMMAND_8_COMMAND")),
				(e.KEY_COMMAND_9_COMMAND = an("KEY_COMMAND_9_COMMAND")),
				(e.KEY_COMMAND_0_COMMAND = an("KEY_COMMAND_0_COMMAND")),
				(e.KEY_COMMAND_SHIFT_K_COMMAND = an("KEY_COMMAND_SHIFT_K_COMMAND")),
				(e.KEY_COMMAND_SHIFT_D_COMMAND = an("KEY_COMMAND_SHIFT_D_COMMAND")),
				(e.KEY_COMMAND_SHIFT_S_COMMAND = an("KEY_COMMAND_SHIFT_S_COMMAND")),
				(e.KEY_COMMAND_S_COMMAND = an("KEY_COMMAND_S_COMMAND")),
				(e.KEY_COMMAND_J_COMMAND = an("KEY_COMMAND_J_COMMAND")),
				(e.KEY_COMMAND_Y_OR_CNTRL_SHIFT_Y_COMMAND = an(
					"KEY_COMMAND_Y_COMMAND",
				)),
				(e.KEY_COMMAND_U_COMMAND = an("KEY_COMMAND_U_COMMAND")),
				(e.KEY_COMMAND_I_COMMAND = an("KEY_COMMAND_I_COMMAND")),
				(e.KEY_COMMAND_L_COMMAND = an("KEY_COMMAND_L_COMMAND")),
				(e.KEY_COMMAND_Z_COMMAND = an("KEY_COMMAND_Z_COMMAND")),
				(e.KEY_COMMAND_T_COMMAND = an("KEY_COMMAND_T_COMMAND")),
				(e.KEY_COMMAND_P_COMMAND = an("KEY_COMMAND_P_COMMAND")),
				(e.KEY_COMMAND_B_COMMAND = an("KEY_COMMAND_B_COMMAND")),
				(e.KEY_COMMAND_A_COMMAND = an("KEY_COMMAND_A_COMMAND")),
				(e.KEY_COMMAND_SHIFT_Z_COMMAND = an("KEY_COMMAND_SHIFT_Z_COMMAND")),
				(e.KEY_COMMAND_N_COMMAND = an("KEY_COMMAND_N_COMMAND")),
				(e.KEY_COMMAND_M_COMMAND = an("KEY_COMMAND_M_COMMAND")),
				(e.KEY_COMMAND_G_COMMAND = an("KEY_COMMAND_G_COMMAND")),
				(e.KEY_COMMAND_W_COMMAND = an("KEY_COMMAND_W_COMMAND")),
				(e.KEY_COMMAND_R_COMMAND = an("KEY_COMMAND_R_COMMAND")),
				(e.KEY_COMMAND_V_COMMAND = an("KEY_COMMAND_V_COMMAND")),
				(e.KEY_COMMAND_SLASH_COMMAND = an("KEY_COMMAND_SLASH_COMMAND")),
				(e.KEY_COMMAND_DOT_COMMAND = an("KEY_COMMAND_DOT_COMMAND")),
				(e.KEY_COMMAND_SHIFT_SLASH_COMMAND = an(
					"KEY_COMMAND_SHIFT_SLASH_COMMAND",
				)),
				(e.KEY_BACKSPACE_DELETE_COMMAND = an("KEY_BACKSPACE_DELETE_COMMAND")),
				(e.KEY_COMMAND_LEFT_BRACKET_COMMAND = an(
					"KEY_COMMAND_LEFT_BRACKET_COMMAND",
				)),
				(e.KEY_COMMAND_RIGHT_BRACKET_COMMAND = an(
					"KEY_COMMAND_RIGHT_BRACKET_COMMAND",
				)),
				(e.KEY_TAB_COMMAND = an("KEY_TAB_COMMAND")),
				(e.KEY_ALT_COMMAND = an("KEY_ALT_COMMAND")),
				(e.KEY_ALT_UP_COMMAND = an("KEY_ALT_UP_COMMAND")),
				(e.KEY_COMMAND_COMMAND = an("KEY_COMMAND_COMMAND")),
				(e.KEY_COMMAND_UP_COMMAND = an("KEY_COMMAND_UP_COMMAND")),
				(e.KEY_ALT_1_COMMAND = an("KEY_ALT_1_COMMAND")),
				(e.KEY_ALT_2_COMMAND = an("KEY_ALT_2_COMMAND")),
				(e.KEY_ALT_3_COMMAND = an("KEY_ALT_3_COMMAND")),
				(e.KEY_ALT_4_COMMAND = an("KEY_ALT_4_COMMAND")),
				(e.KEY_ALT_5_COMMAND = an("KEY_ALT_5_COMMAND")),
				(e.KEY_COMMAND_ESCAPE_COMMAND = an("KEY_COMMAND_ESCAPE_COMMAND")),
				(e.KEY_SHIFT_DOWN_COMMAND = an("KEY_SHIFT_DOWN_COMMAND")),
				(e.KEY_SHIFT_UP_COMMAND = an("KEY_SHIFT_UP_COMMAND")),
				(e.INSERT_TAB_COMMAND = an("INSERT_TAB_COMMAND")),
				(e.INDENT_CONTENT_COMMAND = an("INDENT_CONTENT_COMMAND")),
				(e.OUTDENT_CONTENT_COMMAND = an("OUTDENT_CONTENT_COMMAND")),
				(e.DROP_COMMAND = an("DROP_COMMAND")),
				(e.FORMAT_ELEMENT_COMMAND = an("FORMAT_ELEMENT_COMMAND")),
				(e.DRAGSTART_COMMAND = an("DRAGSTART_COMMAND")),
				(e.DRAGOVER_COMMAND = an("DRAGOVER_COMMAND")),
				(e.DRAGEND_COMMAND = an("DRAGEND_COMMAND")),
				(e.COPY_COMMAND = an("COPY_COMMAND")),
				(e.CUT_COMMAND = an("CUT_COMMAND")),
				(e.CLEAR_EDITOR_COMMAND = an("CLEAR_EDITOR_COMMAND")),
				(e.CLEAR_HISTORY_COMMAND = an("CLEAR_HISTORY_COMMAND")),
				(e.CAN_REDO_COMMAND = an("CAN_REDO_COMMAND")),
				(e.CAN_UNDO_COMMAND = an("CAN_UNDO_COMMAND")),
				(e.FOCUS_COMMAND = an("FOCUS_COMMAND")),
				(e.BLUR_COMMAND = an("BLUR_COMMAND")),
				(e.KEY_MODIFIER_COMMAND = an("KEY_MODIFIER_COMMAND")),
				(e.DOM_ELEMENT_TYPE = 1),
				(e.DOM_TEXT_TYPE = 3),
				(e.NO_DIRTY_NODES = 0),
				(e.HAS_DIRTY_NODES = 1),
				(e.FULL_RECONCILE = 2),
				(e.IS_NORMAL = 0),
				(e.IS_TOKEN = 1),
				(e.IS_SEGMENTED = 2),
				(e.IS_BOLD = 1),
				(e.IS_ITALIC = 2),
				(e.IS_STRIKETHROUGH = 4),
				(e.IS_UNDERLINE = 8),
				(e.IS_CODE = 16),
				(e.IS_SUBSCRIPT = 32),
				(e.IS_SUPERSCRIPT = 64),
				(e.IS_HIGHLIGHT = 128),
				(e.IS_ALL_FORMATTING =
					e.IS_BOLD |
					e.IS_ITALIC |
					e.IS_STRIKETHROUGH |
					e.IS_UNDERLINE |
					e.IS_CODE |
					e.IS_SUBSCRIPT |
					e.IS_SUPERSCRIPT |
					e.IS_HIGHLIGHT),
				(e.IS_DIRECTIONLESS = 1),
				(e.IS_UNMERGEABLE = 2),
				(e.IS_ALIGN_LEFT = 1),
				(e.IS_ALIGN_CENTER = 2),
				(e.IS_ALIGN_RIGHT = 3),
				(e.IS_ALIGN_JUSTIFY = 4),
				(e.IS_ALIGN_START = 5),
				(e.IS_ALIGN_END = 6),
				(e.NON_BREAKING_SPACE = "\xA0");
			const ho = "\u200B";
			(e.COMPOSITION_SUFFIX =
				i.IS_SAFARI || i.IS_IOS || i.IS_APPLE_WEBKIT
					? e.NON_BREAKING_SPACE
					: ho),
				(e.DOUBLE_LINE_BREAK = `

`),
				(e.COMPOSITION_START_CHAR = i.IS_FIREFOX
					? e.NON_BREAKING_SPACE
					: e.COMPOSITION_SUFFIX);
			const fo = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC",
				To =
					"A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
			(e.RTL_REGEX = new RegExp("^[^" + To + "]*[" + fo + "]")),
				(e.LTR_REGEX = new RegExp("^[^" + fo + "]*[" + To + "]")),
				(e.TEXT_TYPE_TO_FORMAT = {
					bold: e.IS_BOLD,
					code: e.IS_CODE,
					highlight: e.IS_HIGHLIGHT,
					italic: e.IS_ITALIC,
					strikethrough: e.IS_STRIKETHROUGH,
					subscript: e.IS_SUBSCRIPT,
					superscript: e.IS_SUPERSCRIPT,
					underline: e.IS_UNDERLINE,
				}),
				(e.DETAIL_TYPE_TO_DETAIL = {
					directionless: e.IS_DIRECTIONLESS,
					unmergeable: e.IS_UNMERGEABLE,
				}),
				(e.ELEMENT_TYPE_TO_FORMAT = {
					center: e.IS_ALIGN_CENTER,
					end: e.IS_ALIGN_END,
					justify: e.IS_ALIGN_JUSTIFY,
					left: e.IS_ALIGN_LEFT,
					right: e.IS_ALIGN_RIGHT,
					start: e.IS_ALIGN_START,
				}),
				(e.ELEMENT_FORMAT_TO_TYPE = {
					[e.IS_ALIGN_CENTER]: "center",
					[e.IS_ALIGN_END]: "end",
					[e.IS_ALIGN_JUSTIFY]: "justify",
					[e.IS_ALIGN_LEFT]: "left",
					[e.IS_ALIGN_RIGHT]: "right",
					[e.IS_ALIGN_START]: "start",
				}),
				(e.TEXT_MODE_TO_TYPE = {
					normal: e.IS_NORMAL,
					segmented: e.IS_SEGMENTED,
					token: e.IS_TOKEN,
				}),
				(e.TEXT_TYPE_TO_MODE = {
					[e.IS_NORMAL]: "normal",
					[e.IS_SEGMENTED]: "segmented",
					[e.IS_TOKEN]: "token",
				});
			function qr(Qe, Ge) {
				return Ge & e.IS_CODE
					? "code"
					: Ge & e.IS_HIGHLIGHT
						? "mark"
						: Ge & e.IS_SUBSCRIPT
							? "sub"
							: Ge & e.IS_SUPERSCRIPT
								? "sup"
								: null;
			}
			function Rr(Qe, Ge) {
				return Ge & e.IS_BOLD ? "strong" : Ge & e.IS_ITALIC ? "em" : "span";
			}
			function go(Qe, Ge, st, pt, Ct) {
				const Pt = pt.classList;
				let zt = hs(Ct, "base");
				zt !== void 0 && Pt.add(...zt), (zt = hs(Ct, "underlineStrikethrough"));
				let Qt = !1;
				const ui = Ge & e.IS_UNDERLINE && Ge & e.IS_STRIKETHROUGH,
					vi = st & e.IS_UNDERLINE && st & e.IS_STRIKETHROUGH;
				zt !== void 0 &&
					(vi ? ((Qt = !0), ui || Pt.add(...zt)) : ui && Pt.remove(...zt));
				for (const Ii in e.TEXT_TYPE_TO_FORMAT) {
					const Mi = Ii,
						Ni = e.TEXT_TYPE_TO_FORMAT[Mi];
					if (((zt = hs(Ct, Ii)), zt !== void 0))
						if (st & Ni) {
							if (Qt && (Ii === "underline" || Ii === "strikethrough")) {
								Ge & Ni && Pt.remove(...zt);
								continue;
							}
							(!(Ge & Ni) ||
								(ui && Ii === "underline") ||
								Ii === "strikethrough") &&
								Pt.add(...zt);
						} else Ge & Ni && Pt.remove(...zt);
				}
			}
			function Bs(Qe, Ge) {
				const st = Qe.length,
					pt = Ge.length;
				let Ct = 0,
					Pt = 0;
				for (; Ct < st && Ct < pt && Qe[Ct] === Ge[Ct]; ) Ct++;
				for (
					;
					Pt + Ct < st && Pt + Ct < pt && Qe[st - Pt - 1] === Ge[pt - Pt - 1];
				)
					Pt++;
				return [Ct, st - Ct - Pt, Ge.slice(Ct, pt - Pt)];
			}
			function to(Qe, Ge, st) {
				const pt = Ge.firstChild,
					Ct = st.isComposing(),
					Pt = Ct ? e.COMPOSITION_SUFFIX : "",
					zt = Qe + Pt;
				if (pt == null) Ge.textContent = zt;
				else {
					const Qt = pt.nodeValue;
					if (Qt !== zt)
						if (Ct || i.IS_FIREFOX) {
							const [ui, vi, Ii] = Bs(Qt, zt);
							vi !== 0 && pt.deleteData(ui, vi), pt.insertData(ui, Ii);
						} else pt.nodeValue = zt;
				}
			}
			function io(Qe, Ge, st, pt, Ct, Pt) {
				to(Ct, Qe, Ge);
				const Qt = Pt.theme.text;
				Qt !== void 0 && go(st, 0, pt, Qe, Qt);
			}
			function Vr(Qe, Ge) {
				const st = C.$Bfb.document.createElement(Ge);
				return st.appendChild(Qe), st;
			}
			class dr extends Ce {
				static getType() {
					return "text";
				}
				static clone(Ge) {
					return new dr(Ge.__text, Ge.__key);
				}
				constructor(Ge, st) {
					super(st),
						(this.__text = Ge),
						(this.__format = 0),
						(this.__style = ""),
						(this.__mode = 0),
						(this.__detail = 0);
				}
				getFormat() {
					return this.getLatest().__format;
				}
				getDetail() {
					return this.getLatest().__detail;
				}
				getMode() {
					const Ge = this.getLatest();
					return e.TEXT_TYPE_TO_MODE[Ge.__mode];
				}
				getStyle() {
					return this.getLatest().__style;
				}
				isToken() {
					return this.getLatest().__mode === e.IS_TOKEN;
				}
				isComposing() {
					return this.__key === sn();
				}
				isSegmented() {
					return this.getLatest().__mode === e.IS_SEGMENTED;
				}
				isDirectionless() {
					return (this.getLatest().__detail & e.IS_DIRECTIONLESS) !== 0;
				}
				isUnmergeable() {
					return (this.getLatest().__detail & e.IS_UNMERGEABLE) !== 0;
				}
				hasFormat(Ge) {
					const st = e.TEXT_TYPE_TO_FORMAT[Ge];
					return (this.getFormat() & st) !== 0;
				}
				isSimpleText() {
					return this.__type === "text" && this.__mode === 0;
				}
				getTextContent() {
					return this.getLatest().__text;
				}
				getFormatFlags(Ge, st) {
					const Ct = this.getLatest().__format;
					return xn(Ct, Ge, st);
				}
				createDOM(Ge) {
					const st = this.__format,
						pt = qr(this, st),
						Ct = Rr(this, st),
						Pt = pt === null ? Ct : pt,
						zt = C.$Bfb.document.createElement(Pt);
					let Qt = zt;
					pt !== null &&
						((Qt = C.$Bfb.document.createElement(Ct)), zt.appendChild(Qt));
					const ui = this.__text;
					io(Qt, this, Ct, st, ui, Ge);
					const vi = this.__style;
					return vi !== "" && (zt.style.cssText = vi), zt;
				}
				updateDOM(Ge, st, pt) {
					const Ct = this.__text,
						Pt = Ge.__format,
						zt = this.__format,
						Qt = qr(this, Pt),
						ui = qr(this, zt),
						vi = Rr(this, Pt),
						Ii = Rr(this, zt);
					if ((Qt === null ? vi : Qt) !== (ui === null ? Ii : ui)) return !0;
					if (Qt === ui && vi !== Ii) {
						const Qi = st.firstChild;
						Qi == null &&
							(0, w.default)(
								!1,
								"updateDOM: prevInnerDOM is null or undefined",
							);
						const rn = C.$Bfb.document.createElement(Ii);
						return io(rn, this, Ii, zt, Ct, pt), st.replaceChild(rn, Qi), !1;
					}
					let Ri = st;
					ui !== null &&
						Qt !== null &&
						((Ri = st.firstChild),
						Ri == null &&
							(0, w.default)(!1, "updateDOM: innerDOM is null or undefined")),
						to(Ct, Ri, this);
					const ji = pt.theme.text;
					ji !== void 0 && Pt !== zt && go(Ii, Pt, zt, Ri, ji);
					const Xi = Ge.__style,
						on = this.__style;
					return Xi !== on && (st.style.cssText = on), !1;
				}
				static importDOM() {
					return {
						"#text": () => ({ conversion: bo, priority: 0 }),
						b: () => ({ conversion: no, priority: 0 }),
						code: () => ({ conversion: Ps, priority: 0 }),
						em: () => ({ conversion: Ps, priority: 0 }),
						i: () => ({ conversion: Ps, priority: 0 }),
						s: () => ({ conversion: Ps, priority: 0 }),
						span: () => ({ conversion: Po, priority: 0 }),
						strong: () => ({ conversion: Ps, priority: 0 }),
						sub: () => ({ conversion: Ps, priority: 0 }),
						sup: () => ({ conversion: Ps, priority: 0 }),
						u: () => ({ conversion: Ps, priority: 0 }),
					};
				}
				static importJSON(Ge) {
					const st = cs(Ge.text);
					return (
						st.setFormat(Ge.format),
						st.setDetail(Ge.detail),
						st.setMode(Ge.mode),
						st.setStyle(Ge.style),
						st
					);
				}
				exportDOM(Ge) {
					let { element: st } = super.exportDOM(Ge);
					return (
						st !== null &&
							(this.hasFormat("bold") && (st = Vr(st, "b")),
							this.hasFormat("italic") && (st = Vr(st, "i")),
							this.hasFormat("strikethrough") && (st = Vr(st, "s")),
							this.hasFormat("underline") && (st = Vr(st, "u"))),
						{ element: st }
					);
				}
				exportJSON() {
					return {
						detail: this.getDetail(),
						format: this.getFormat(),
						mode: this.getMode(),
						style: this.getStyle(),
						text: this.getTextContent(),
						type: "text",
						version: 1,
					};
				}
				selectionTransform(Ge, st) {}
				setFormat(Ge) {
					const st = this.getWritable();
					return (
						(st.__format =
							typeof Ge == "string" ? e.TEXT_TYPE_TO_FORMAT[Ge] : Ge),
						st
					);
				}
				setDetail(Ge) {
					const st = this.getWritable();
					return (
						(st.__detail =
							typeof Ge == "string" ? e.DETAIL_TYPE_TO_DETAIL[Ge] : Ge),
						st
					);
				}
				setStyle(Ge) {
					const st = this.getWritable();
					return (st.__style = Ge), st;
				}
				toggleFormat(Ge) {
					const st = e.TEXT_TYPE_TO_FORMAT[Ge];
					return this.setFormat(this.getFormat() ^ st);
				}
				toggleDirectionless() {
					const Ge = this.getWritable();
					return (Ge.__detail ^= e.IS_DIRECTIONLESS), Ge;
				}
				toggleUnmergeable() {
					const Ge = this.getWritable();
					return (Ge.__detail ^= e.IS_UNMERGEABLE), Ge;
				}
				setMode(Ge) {
					const st = e.TEXT_MODE_TO_TYPE[Ge];
					if (this.__mode === st) return this;
					const pt = this.getWritable();
					return (pt.__mode = st), pt;
				}
				setTextContent(Ge) {
					if (this.__text === Ge) return this;
					const st = this.getWritable();
					return (st.__text = Ge), st;
				}
				select(Ge, st) {
					Si();
					let pt = Ge,
						Ct = st;
					const Pt = wi(),
						zt = this.getTextContent(),
						Qt = this.__key;
					if (typeof zt == "string") {
						const ui = zt.length;
						pt === void 0 && (pt = ui), Ct === void 0 && (Ct = ui);
					} else (pt = 0), (Ct = 0);
					if (ii(Pt)) {
						const ui = sn();
						(ui === Pt.anchor.key || ui === Pt.focus.key) && _n(Qt),
							Pt.setTextNodeRange(this, pt, this, Ct);
					} else return qi(Qt, pt, Qt, Ct, "text", "text");
					return Pt;
				}
				spliceText(Ge, st, pt, Ct) {
					const Pt = this.getWritable(),
						zt = Pt.__text,
						Qt = pt.length;
					let ui = Ge;
					ui < 0 && ((ui = Qt + ui), ui < 0 && (ui = 0));
					const vi = wi();
					if (Ct && ii(vi)) {
						const Mi = Ge + Qt;
						vi.setTextNodeRange(Pt, Mi, Pt, Mi);
					}
					const Ii = zt.slice(0, ui) + pt + zt.slice(ui + st);
					return (Pt.__text = Ii), Pt;
				}
				canInsertTextBefore() {
					return !0;
				}
				canInsertTextAfter() {
					return !0;
				}
				splitText(...Ge) {
					Si();
					const st = this.getLatest(),
						pt = st.getTextContent(),
						Ct = st.__key,
						Pt = sn(),
						zt = new Set(Ge),
						Qt = [],
						ui = pt.length;
					let vi = "";
					for (let Cn = 0; Cn < ui; Cn++)
						vi !== "" && zt.has(Cn) && (Qt.push(vi), (vi = "")), (vi += pt[Cn]);
					vi !== "" && Qt.push(vi);
					const Ii = Qt.length;
					if (Ii === 0) return [];
					if (Qt[0] === pt) return [st];
					const Mi = Qt[0],
						Ni = st.getParentOrThrow();
					let Ri;
					const Ki = st.getFormat(),
						ji = st.getStyle(),
						Xi = st.__detail;
					let on = !1;
					st.isSegmented()
						? ((Ri = cs(Mi)),
							(Ri.__format = Ki),
							(Ri.__style = ji),
							(Ri.__detail = Xi),
							(on = !0))
						: ((Ri = st.getWritable()), (Ri.__text = Mi));
					const Qi = wi(),
						rn = [Ri];
					let pn = Mi.length;
					for (let Cn = 1; Cn < Ii; Cn++) {
						const Tn = Qt[Cn],
							Vn = Tn.length,
							Zn = cs(Tn).getWritable();
						(Zn.__format = Ki), (Zn.__style = ji), (Zn.__detail = Xi);
						const On = Zn.__key,
							Kn = pn + Vn;
						if (ii(Qi)) {
							const Ss = Qi.anchor,
								gs = Qi.focus;
							Ss.key === Ct &&
								Ss.type === "text" &&
								Ss.offset > pn &&
								Ss.offset <= Kn &&
								((Ss.key = On), (Ss.offset -= pn), (Qi.dirty = !0)),
								gs.key === Ct &&
									gs.type === "text" &&
									gs.offset > pn &&
									gs.offset <= Kn &&
									((gs.key = On), (gs.offset -= pn), (Qi.dirty = !0));
						}
						Pt === Ct && _n(On), (pn = Kn), rn.push(Zn);
					}
					Us(this);
					const bn = Ni.getWritable(),
						gn = this.getIndexWithinParent();
					return (
						on ? (bn.splice(gn, 0, rn), this.remove()) : bn.splice(gn, 1, rn),
						ii(Qi) && ai(Qi, Ni, gn, Ii - 1),
						rn
					);
				}
				mergeWithSibling(Ge) {
					const st = Ge === this.getPreviousSibling();
					!st &&
						Ge !== this.getNextSibling() &&
						(0, w.default)(
							!1,
							"mergeWithSibling: sibling must be a previous or next sibling",
						);
					const pt = this.__key,
						Ct = Ge.__key,
						Pt = this.__text,
						zt = Pt.length;
					sn() === Ct && _n(pt);
					const ui = wi();
					if (ii(ui)) {
						const Ni = ui.anchor,
							Ri = ui.focus;
						Ni !== null &&
							Ni.key === Ct &&
							(ut(Ni, st, pt, Ge, zt), (ui.dirty = !0)),
							Ri !== null &&
								Ri.key === Ct &&
								(ut(Ri, st, pt, Ge, zt), (ui.dirty = !0));
					}
					const vi = Ge.__text,
						Ii = st ? vi + Pt : Pt + vi;
					this.setTextContent(Ii);
					const Mi = this.getWritable();
					return Ge.remove(), Mi;
				}
				isTextEntity() {
					return !1;
				}
			}
			e.TextNode = dr;
			function Po(Qe) {
				const Ge = Qe,
					st = Ge.style.fontWeight === "700",
					pt = Ge.style.textDecoration === "line-through",
					Ct = Ge.style.fontStyle === "italic",
					Pt = Ge.style.textDecoration === "underline",
					zt = Ge.style.verticalAlign;
				return {
					forChild: (Qt) => (
						mn(Qt) &&
							(st && Qt.toggleFormat("bold"),
							pt && Qt.toggleFormat("strikethrough"),
							Ct && Qt.toggleFormat("italic"),
							Pt && Qt.toggleFormat("underline"),
							zt === "sub" && Qt.toggleFormat("subscript"),
							zt === "super" && Qt.toggleFormat("superscript")),
						Qt
					),
					node: null,
				};
			}
			function no(Qe) {
				const st = Qe.style.fontWeight === "normal";
				return {
					forChild: (pt) => (mn(pt) && !st && pt.toggleFormat("bold"), pt),
					node: null,
				};
			}
			const mo = new WeakMap();
			function po(Qe) {
				return (
					Qe.nodeName === "PRE" ||
					(Qe.nodeType === e.DOM_ELEMENT_TYPE &&
						Qe.style.whiteSpace.startsWith("pre"))
				);
			}
			function so(Qe) {
				let Ge,
					st = Qe.parentNode;
				const pt = [Qe];
				for (; st !== null && (Ge = mo.get(st)) === void 0 && !po(st); )
					pt.push(st), (st = st.parentNode);
				const Ct = Ge === void 0 ? st : Ge;
				for (let Pt = 0; Pt < pt.length; Pt++) mo.set(pt[Pt], Ct);
				return Ct;
			}
			function bo(Qe) {
				const Ge = Qe,
					st = Qe.parentElement;
				(0, w.default)(
					st !== null,
					"Expected parentElement of Text not to be null",
				);
				let pt = Ge.textContent || "";
				if (so(Ge) !== null) {
					const Ct = pt.split(/(\r?\n|\t)/),
						Pt = [],
						zt = Ct.length;
					for (let Qt = 0; Qt < zt; Qt++) {
						const ui = Ct[Qt];
						ui ===
							`
` ||
						ui ===
							`\r
`
							? Pt.push(gr())
							: ui === "	"
								? Pt.push(Ar())
								: ui !== "" && Pt.push(cs(ui));
					}
					return { node: Pt };
				}
				if (
					((pt = pt
						.replace(/\r?\n|\t/gm, " ")
						.replace("\r", "")
						.replace(/\s+/g, " ")),
					pt === "")
				)
					return { node: null };
				if (pt[0] === " ") {
					let Ct = Ge,
						Pt = !0;
					for (; Ct !== null && (Ct = $o(Ct, !1)) !== null; ) {
						const zt = Ct.textContent || "";
						if (zt.length > 0) {
							zt.match(/(?:\s|\r?\n|\t)$/) && (pt = pt.slice(1)), (Pt = !1);
							break;
						}
					}
					Pt && (pt = pt.slice(1));
				}
				if (pt[pt.length - 1] === " ") {
					let Ct = Ge,
						Pt = !0;
					for (; Ct !== null && (Ct = $o(Ct, !0)) !== null; )
						if (
							(Ct.textContent || "").replace(/^[\s|\r?\n|\t]+/, "").length > 0
						) {
							Pt = !1;
							break;
						}
					Pt && (pt = pt.slice(0, pt.length - 1));
				}
				return pt === "" ? { node: null } : { node: cs(pt) };
			}
			const ko = new RegExp(
				/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/,
				"i",
			);
			function $o(Qe, Ge) {
				let st = Qe;
				for (;;) {
					let pt;
					for (; (pt = Ge ? st.nextSibling : st.previousSibling) === null; ) {
						const Pt = st.parentElement;
						if (Pt === null) return null;
						st = Pt;
					}
					if (((st = pt), st.nodeType === e.DOM_ELEMENT_TYPE)) {
						const Pt = st.style.display;
						if (
							(Pt === "" && st.nodeName.match(ko) === null) ||
							(Pt !== "" && !Pt.startsWith("inline"))
						)
							return null;
					}
					let Ct = st;
					for (; (Ct = Ge ? st.firstChild : st.lastChild) !== null; ) st = Ct;
					if (st.nodeType === e.DOM_TEXT_TYPE) return st;
					if (st.nodeName === "BR") return null;
				}
			}
			const yo = {
				code: "code",
				em: "italic",
				i: "italic",
				s: "strikethrough",
				strong: "bold",
				sub: "subscript",
				sup: "superscript",
				u: "underline",
			};
			function Ps(Qe) {
				const Ge = yo[Qe.nodeName.toLowerCase()];
				return Ge === void 0
					? { node: null }
					: {
							forChild: (st) => (
								mn(st) && !st.hasFormat(Ge) && st.toggleFormat(Ge), st
							),
							node: null,
						};
			}
			function cs(Qe = "") {
				return fs(new dr(Qe));
			}
			function mn(Qe) {
				return Qe instanceof dr;
			}
			class hr extends dr {
				static getType() {
					return "tab";
				}
				static clone(Ge) {
					const st = new hr(Ge.__key);
					return (
						(st.__text = Ge.__text),
						(st.__format = Ge.__format),
						(st.__style = Ge.__style),
						st
					);
				}
				constructor(Ge) {
					super("	", Ge), (this.__detail = e.IS_UNMERGEABLE);
				}
				static importDOM() {
					return null;
				}
				static importJSON(Ge) {
					const st = Ar();
					return st.setFormat(Ge.format), st.setStyle(Ge.style), st;
				}
				exportJSON() {
					return { ...super.exportJSON(), type: "tab", version: 1 };
				}
				setTextContent(Ge) {
					(0, w.default)(!1, "TabNode does not support setTextContent");
				}
				setDetail(Ge) {
					(0, w.default)(!1, "TabNode does not support setDetail");
				}
				setMode(Ge) {
					(0, w.default)(!1, "TabNode does not support setMode");
				}
				canInsertTextBefore() {
					return !1;
				}
				canInsertTextAfter() {
					return !1;
				}
			}
			e.TabNode = hr;
			function Ar() {
				return fs(new hr());
			}
			function wo(Qe) {
				return Qe instanceof hr;
			}
			class tr extends Ce {
				constructor(Ge) {
					super(Ge),
						(this.__first = null),
						(this.__last = null),
						(this.__size = 0),
						(this.__format = 0),
						(this.__indent = 0),
						(this.__dir = null);
				}
				getFormat() {
					return this.getLatest().__format;
				}
				getFormatType() {
					const Ge = this.getFormat();
					return e.ELEMENT_FORMAT_TO_TYPE[Ge] || "";
				}
				getIndent() {
					return this.getLatest().__indent;
				}
				getChildren() {
					const Ge = [];
					let st = this.getFirstChild();
					for (; st !== null; ) Ge.push(st), (st = st.getNextSibling());
					return Ge;
				}
				getChildrenKeys() {
					const Ge = [];
					let st = this.getFirstChild();
					for (; st !== null; ) Ge.push(st.__key), (st = st.getNextSibling());
					return Ge;
				}
				getChildrenSize() {
					return this.getLatest().__size;
				}
				isEmpty() {
					return this.getChildrenSize() === 0;
				}
				isDirty() {
					const st = Pi()._dirtyElements;
					return st !== null && st.has(this.__key);
				}
				isLastChild() {
					const Ge = this.getLatest(),
						st = this.getParentOrThrow().getLastChild();
					return st !== null && st.is(Ge);
				}
				getAllTextNodes() {
					const Ge = [];
					let st = this.getFirstChild();
					for (; st !== null; ) {
						if ((mn(st) && Ge.push(st), ln(st))) {
							const pt = st.getAllTextNodes();
							Ge.push(...pt);
						}
						st = st.getNextSibling();
					}
					return Ge;
				}
				getFirstDescendant() {
					let Ge = this.getFirstChild();
					for (; Ge !== null; ) {
						if (ln(Ge)) {
							const st = Ge.getFirstChild();
							if (st !== null) {
								Ge = st;
								continue;
							}
						}
						break;
					}
					return Ge;
				}
				getLastDescendant() {
					let Ge = this.getLastChild();
					for (; Ge !== null; ) {
						if (ln(Ge)) {
							const st = Ge.getLastChild();
							if (st !== null) {
								Ge = st;
								continue;
							}
						}
						break;
					}
					return Ge;
				}
				getDescendantByIndex(Ge) {
					const st = this.getChildren(),
						pt = st.length;
					if (Ge >= pt) {
						const Pt = st[pt - 1];
						return (ln(Pt) && Pt.getLastDescendant()) || Pt || null;
					}
					const Ct = st[Ge];
					return (ln(Ct) && Ct.getFirstDescendant()) || Ct || null;
				}
				getFirstChild() {
					const st = this.getLatest().__first;
					return st === null ? null : dn(st);
				}
				getFirstChildOrThrow() {
					const Ge = this.getFirstChild();
					return (
						Ge === null &&
							(0, w.default)(
								!1,
								"Expected node %s to have a first child.",
								this.__key,
							),
						Ge
					);
				}
				getLastChild() {
					const st = this.getLatest().__last;
					return st === null ? null : dn(st);
				}
				getLastChildOrThrow() {
					const Ge = this.getLastChild();
					return (
						Ge === null &&
							(0, w.default)(
								!1,
								"Expected node %s to have a last child.",
								this.__key,
							),
						Ge
					);
				}
				getChildAtIndex(Ge) {
					const st = this.getChildrenSize();
					let pt, Ct;
					if (Ge < st / 2) {
						for (pt = this.getFirstChild(), Ct = 0; pt !== null && Ct <= Ge; ) {
							if (Ct === Ge) return pt;
							(pt = pt.getNextSibling()), Ct++;
						}
						return null;
					}
					for (
						pt = this.getLastChild(), Ct = st - 1;
						pt !== null && Ct >= Ge;
					) {
						if (Ct === Ge) return pt;
						(pt = pt.getPreviousSibling()), Ct--;
					}
					return null;
				}
				getTextContent() {
					let Ge = "";
					const st = this.getChildren(),
						pt = st.length;
					for (let Ct = 0; Ct < pt; Ct++) {
						const Pt = st[Ct];
						(Ge += Pt.getTextContent()),
							ln(Pt) &&
								Ct !== pt - 1 &&
								!Pt.isInline() &&
								(Ge += e.DOUBLE_LINE_BREAK);
					}
					return Ge;
				}
				getTextContentSize() {
					let Ge = 0;
					const st = this.getChildren(),
						pt = st.length;
					for (let Ct = 0; Ct < pt; Ct++) {
						const Pt = st[Ct];
						(Ge += Pt.getTextContentSize()),
							ln(Pt) &&
								Ct !== pt - 1 &&
								!Pt.isInline() &&
								(Ge += e.DOUBLE_LINE_BREAK.length);
					}
					return Ge;
				}
				getDirection() {
					return this.getLatest().__dir;
				}
				hasFormat(Ge) {
					if (Ge !== "") {
						const st = e.ELEMENT_TYPE_TO_FORMAT[Ge];
						return (this.getFormat() & st) !== 0;
					}
					return !1;
				}
				select(Ge, st) {
					Si();
					const pt = wi();
					let Ct = Ge,
						Pt = st;
					const zt = this.getChildrenSize();
					if (!this.canBeEmpty()) {
						if (Ge === 0 && st === 0) {
							const ui = this.getFirstChild();
							if (mn(ui) || ln(ui)) return ui.select(0, 0);
						} else if (
							(Ge === void 0 || Ge === zt) &&
							(st === void 0 || st === zt)
						) {
							const ui = this.getLastChild();
							if (mn(ui) || ln(ui)) return ui.select();
						}
					}
					Ct === void 0 && (Ct = zt), Pt === void 0 && (Pt = zt);
					const Qt = this.__key;
					if (ii(pt))
						pt.anchor.set(Qt, Ct, "element"),
							pt.focus.set(Qt, Pt, "element"),
							(pt.dirty = !0);
					else return qi(Qt, Ct, Qt, Pt, "element", "element");
					return pt;
				}
				selectStart() {
					const Ge = this.getFirstDescendant();
					return ln(Ge) || mn(Ge)
						? Ge.select(0, 0)
						: Ge !== null
							? Ge.selectPrevious()
							: this.select(0, 0);
				}
				selectEnd() {
					const Ge = this.getLastDescendant();
					return ln(Ge) || mn(Ge)
						? Ge.select()
						: Ge !== null
							? Ge.selectNext()
							: this.select();
				}
				clear() {
					const Ge = this.getWritable();
					return this.getChildren().forEach((pt) => pt.remove()), Ge;
				}
				append(...Ge) {
					return this.splice(this.getChildrenSize(), 0, Ge);
				}
				setDirection(Ge) {
					const st = this.getWritable();
					return (st.__dir = Ge), st;
				}
				setFormat(Ge) {
					const st = this.getWritable();
					return (
						(st.__format = Ge !== "" ? e.ELEMENT_TYPE_TO_FORMAT[Ge] : 0), this
					);
				}
				setIndent(Ge) {
					const st = this.getWritable();
					return (st.__indent = Ge), this;
				}
				splice(Ge, st, pt) {
					const Ct = pt.length,
						Pt = this.getChildrenSize(),
						zt = this.getWritable(),
						Qt = zt.__key,
						ui = [],
						vi = [],
						Ii = this.getChildAtIndex(Ge + st);
					let Mi = null,
						Ni = Pt - st + Ct;
					if (Ge !== 0)
						if (Ge === Pt) Mi = this.getLastChild();
						else {
							const Ki = this.getChildAtIndex(Ge);
							Ki !== null && (Mi = Ki.getPreviousSibling());
						}
					if (st > 0) {
						let Ki = Mi === null ? this.getFirstChild() : Mi.getNextSibling();
						for (let ji = 0; ji < st; ji++) {
							Ki === null && (0, w.default)(!1, "splice: sibling not found");
							const Xi = Ki.getNextSibling(),
								on = Ki.__key,
								Qi = Ki.getWritable();
							Qn(Qi), vi.push(on), (Ki = Xi);
						}
					}
					let Ri = Mi;
					for (let Ki = 0; Ki < Ct; Ki++) {
						const ji = pt[Ki];
						Ri !== null && ji.is(Ri) && (Mi = Ri = Ri.getPreviousSibling());
						const Xi = ji.getWritable();
						Xi.__parent === Qt && Ni--, Qn(Xi);
						const on = ji.__key;
						if (Ri === null) (zt.__first = on), (Xi.__prev = null);
						else {
							const Qi = Ri.getWritable();
							(Qi.__next = on), (Xi.__prev = Qi.__key);
						}
						ji.__key === Qt &&
							(0, w.default)(!1, "append: attempting to append self"),
							(Xi.__parent = Qt),
							ui.push(on),
							(Ri = ji);
					}
					if (Ge + st === Pt) {
						if (Ri !== null) {
							const Ki = Ri.getWritable();
							(Ki.__next = null), (zt.__last = Ri.__key);
						}
					} else if (Ii !== null) {
						const Ki = Ii.getWritable();
						if (Ri !== null) {
							const ji = Ri.getWritable();
							(Ki.__prev = Ri.__key), (ji.__next = Ii.__key);
						} else Ki.__prev = null;
					}
					if (((zt.__size = Ni), vi.length)) {
						const Ki = wi();
						if (ii(Ki)) {
							const ji = new Set(vi),
								Xi = new Set(ui),
								{ anchor: on, focus: Qi } = Ki;
							fr(on, ji, Xi) && $t(on, on.getNode(), this, Mi, Ii),
								fr(Qi, ji, Xi) && $t(Qi, Qi.getNode(), this, Mi, Ii),
								Ni === 0 && !this.canBeEmpty() && !Wn(this) && this.remove();
						}
					}
					return zt;
				}
				exportJSON() {
					return {
						children: [],
						direction: this.getDirection(),
						format: this.getFormatType(),
						indent: this.getIndent(),
						type: "element",
						version: 1,
					};
				}
				insertNewAfter(Ge, st) {
					return null;
				}
				canIndent() {
					return !0;
				}
				collapseAtStart(Ge) {
					return !1;
				}
				excludeFromCopy(Ge) {
					return !1;
				}
				canExtractContents() {
					return !0;
				}
				canReplaceWith(Ge) {
					return !0;
				}
				canInsertAfter(Ge) {
					return !0;
				}
				canBeEmpty() {
					return !0;
				}
				canInsertTextBefore() {
					return !0;
				}
				canInsertTextAfter() {
					return !0;
				}
				isInline() {
					return !1;
				}
				isShadowRoot() {
					return !1;
				}
				canMergeWith(Ge) {
					return !1;
				}
				extractWithChild(Ge, st, pt) {
					return !1;
				}
			}
			e.ElementNode = tr;
			function ln(Qe) {
				return Qe instanceof tr;
			}
			function fr(Qe, Ge, st) {
				let pt = Qe.getNode();
				for (; pt; ) {
					const Ct = pt.__key;
					if (Ge.has(Ct) && !st.has(Ct)) return !0;
					pt = pt.getParent();
				}
				return !1;
			}
			class xs extends Ce {
				static getType() {
					return "linebreak";
				}
				static clone(Ge) {
					return new xs(Ge.__key);
				}
				constructor(Ge) {
					super(Ge);
				}
				getTextContent() {
					return `
`;
				}
				createDOM() {
					return C.$Bfb.document.createElement("br");
				}
				updateDOM() {
					return !1;
				}
				static importDOM() {
					return {
						br: (Ge) => {
							const st = Ge.parentElement;
							let pt, Ct;
							return st !== null &&
								((pt = st.firstChild) === Ge ||
									(pt.nextSibling === Ge &&
										pt.nodeType === e.DOM_TEXT_TYPE &&
										(pt.textContent || "").match(/^[\s|\r?\n|\t]+$/) !==
											null)) &&
								((Ct = st.lastChild) === Ge ||
									(Ct.previousSibling === Ge &&
										Ct.nodeType === e.DOM_TEXT_TYPE &&
										(Ct.textContent || "").match(/^[\s|\r?\n|\t]+$/) !== null))
								? null
								: { conversion: ro, priority: 0 };
						},
					};
				}
				static importJSON(Ge) {
					return gr();
				}
				exportJSON() {
					return { type: "linebreak", version: 1 };
				}
			}
			e.LineBreakNode = xs;
			function ro(Qe) {
				return { node: gr() };
			}
			function gr() {
				return fs(new xs());
			}
			function Or(Qe) {
				return Qe instanceof xs;
			}
			class Hr extends tr {}
			e.DEPRECATED_GridRowNode = Hr;
			function Fr(Qe) {
				return Qe instanceof Hr;
			}
			class vo extends tr {
				constructor(Ge, st) {
					super(st), (this.__colSpan = Ge), (this.__rowSpan = 1);
				}
				exportJSON() {
					return {
						...super.exportJSON(),
						colSpan: this.__colSpan,
						rowSpan: this.__rowSpan,
					};
				}
				getColSpan() {
					return this.__colSpan;
				}
				setColSpan(Ge) {
					return (this.getWritable().__colSpan = Ge), this;
				}
				getRowSpan() {
					return this.__rowSpan;
				}
				setRowSpan(Ge) {
					return (this.getWritable().__rowSpan = Ge), this;
				}
			}
			e.DEPRECATED_GridCellNode = vo;
			function zs(Qe) {
				return Qe instanceof vo;
			}
			class Co extends tr {}
			e.DEPRECATED_GridNode = Co;
			function Kr(Qe) {
				return Qe instanceof Co;
			}
			class Lo extends Ce {
				constructor(Ge) {
					super(Ge);
				}
				decorate(Ge, st) {
					(0, w.default)(!1, "decorate: base method not extended");
				}
				isIsolated() {
					return !1;
				}
				isInline() {
					return !0;
				}
				isKeyboardSelectable() {
					return !0;
				}
			}
			e.DecoratorNode = Lo;
			function Xn(Qe) {
				return Qe instanceof Lo;
			}
			class Br extends tr {
				static getType() {
					return "root";
				}
				static clone() {
					return new Br();
				}
				constructor() {
					super("root"), (this.__cachedText = null);
				}
				getTopLevelElementOrThrow() {
					(0, w.default)(
						!1,
						"getTopLevelElementOrThrow: root nodes are not top level elements",
					);
				}
				getTextContent() {
					const Ge = this.__cachedText;
					return (_e() || Pi()._dirtyType === e.NO_DIRTY_NODES) && Ge !== null
						? Ge
						: super.getTextContent();
				}
				remove() {
					(0, w.default)(!1, "remove: cannot be called on root nodes");
				}
				replace(Ge) {
					(0, w.default)(!1, "replace: cannot be called on root nodes");
				}
				insertBefore(Ge) {
					(0, w.default)(!1, "insertBefore: cannot be called on root nodes");
				}
				insertAfter(Ge) {
					(0, w.default)(!1, "insertAfter: cannot be called on root nodes");
				}
				updateDOM(Ge, st) {
					return !1;
				}
				append(...Ge) {
					for (let st = 0; st < Ge.length; st++) {
						const pt = Ge[st];
						!ln(pt) &&
							!Xn(pt) &&
							(0, w.default)(
								!1,
								"rootNode.append: Only element or decorator nodes can be appended to the root node",
							);
					}
					return super.append(...Ge);
				}
				static importJSON(Ge) {
					const st = Jn();
					return (
						st.setFormat(Ge.format),
						st.setIndent(Ge.indent),
						st.setDirection(Ge.direction),
						st
					);
				}
				exportJSON() {
					return {
						children: [],
						direction: this.getDirection(),
						format: this.getFormatType(),
						indent: this.getIndent(),
						type: "root",
						version: 1,
					};
				}
				collapseAtStart() {
					return !0;
				}
			}
			e.RootNode = Br;
			function Ht() {
				return new Br();
			}
			function it(Qe) {
				return Qe instanceof Br;
			}
			class ot extends tr {
				static getType() {
					return "paragraph";
				}
				static clone(Ge) {
					return new ot(Ge.__key);
				}
				createDOM(Ge) {
					const st = C.$Bfb.document.createElement("p"),
						pt = hs(Ge.theme, "paragraph");
					return pt !== void 0 && st.classList.add(...pt), st;
				}
				updateDOM(Ge, st, pt) {
					return !1;
				}
				static importDOM() {
					return { p: (Ge) => ({ conversion: dt, priority: 0 }) };
				}
				exportDOM(Ge) {
					const { element: st } = super.exportDOM(Ge);
					if (
						(st &&
							this.isEmpty() &&
							st.append(C.$Bfb.document.createElement("br")),
						st)
					) {
						const pt = this.getFormatType();
						st.style.textAlign = pt;
						const Ct = this.getDirection();
						Ct && (st.dir = Ct);
						const Pt = this.getIndent();
						Pt > 0 && (st.style.textIndent = `${Pt * 20}px`);
					}
					return { element: st };
				}
				static importJSON(Ge) {
					const st = yt();
					return (
						st.setFormat(Ge.format),
						st.setIndent(Ge.indent),
						st.setDirection(Ge.direction),
						st
					);
				}
				exportJSON() {
					return { ...super.exportJSON(), type: "paragraph", version: 1 };
				}
				insertNewAfter(Ge, st) {
					const pt = yt(),
						Ct = this.getDirection();
					return pt.setDirection(Ct), this.insertAfter(pt, st), pt;
				}
				collapseAtStart() {
					const Ge = this.getChildren();
					if (
						Ge.length === 0 ||
						(mn(Ge[0]) && Ge[0].getTextContent().trim() === "")
					) {
						if (this.getNextSibling() !== null)
							return this.selectNext(), this.remove(), !0;
						if (this.getPreviousSibling() !== null)
							return this.selectPrevious(), this.remove(), !0;
					}
					return !1;
				}
			}
			e.ParagraphNode = ot;
			function dt(Qe) {
				const Ge = yt();
				if (Qe.style) {
					Ge.setFormat(Qe.style.textAlign);
					const st = parseInt(Qe.style.textIndent, 10) / 20;
					st > 0 && Ge.setIndent(st);
				}
				return { node: Ge };
			}
			function yt() {
				return fs(new ot());
			}
			function Ot(Qe) {
				return Qe instanceof ot;
			}
		},
	),
		define(
			de[164],
			he([
				1, 0, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158,
				158, 158, 158,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TextNode =
						e.$isTextNode =
						e.$createTextNode =
						e.TabNode =
						e.$isTabNode =
						e.$createTabNode =
						e.RootNode =
						e.$isRootNode =
						e.ParagraphNode =
						e.$isParagraphNode =
						e.$createParagraphNode =
						e.LineBreakNode =
						e.$isLineBreakNode =
						e.$createLineBreakNode =
						e.DEPRECATED_GridRowNode =
						e.DEPRECATED_$isGridRowNode =
						e.DEPRECATED_GridNode =
						e.DEPRECATED_$isGridNode =
						e.DEPRECATED_GridCellNode =
						e.DEPRECATED_$isGridCellNode =
						e.ElementNode =
						e.$isElementNode =
						e.DecoratorNode =
						e.$isDecoratorNode =
						e.isSelectionWithinEditor =
						e.isSelectionCapturedInDecoratorInput =
						e.getNearestEditorFromDOMNode =
						e.$splitNode =
						e.$setSelection =
						e.$setCompositionKey =
						e.$nodesOfType =
						e.$isRootOrShadowRoot =
						e.$isLeafNode =
						e.$isInlineElementOrDecoratorNode =
						e.$hasUpdateTag =
						e.$hasAncestor =
						e.$getRoot =
						e.$getNodeByKey =
						e.$getNearestRootOrShadowRoot =
						e.$getNearestNodeFromDOMNode =
						e.$getAdjacentNode =
						e.$copyNode =
						e.$applyNodeReplacement =
						e.$addUpdateTag =
						e.$parseSerializedNode =
						e.DEPRECATED_$isGridSelection =
						e.DEPRECATED_$getNodeTriplet =
						e.DEPRECATED_$createGridSelection =
						e.DEPRECATED_$computeGridMap =
						e.$isRangeSelection =
						e.$isNodeSelection =
						e.$isBlockElementNode =
						e.$insertNodes =
						e.$getTextContent =
						e.$getSelection =
						e.$getPreviousSelection =
						e.$createRangeSelection =
						e.$createNodeSelection =
						e.$normalizeSelection__EXPERIMENTAL =
						e.createEditor =
						e.COMMAND_PRIORITY_NORMAL =
						e.COMMAND_PRIORITY_LOW =
						e.COMMAND_PRIORITY_HIGH =
						e.COMMAND_PRIORITY_EDITOR =
						e.COMMAND_PRIORITY_CRITICAL =
						e.UNDO_COMMAND =
						e.SELECTION_CHANGE_COMMAND =
						e.REMOVE_TEXT_COMMAND =
						e.REDO_COMMAND =
						e.PASTE_COMMAND =
						e.OUTDENT_CONTENT_COMMAND =
						e.MOVE_TO_START =
						e.MOVE_TO_END =
						e.KEY_TAB_COMMAND =
						e.KEY_SPACE_COMMAND =
						e.KEY_MODIFIER_COMMAND =
						e.KEY_ESCAPE_COMMAND =
						e.KEY_ENTER_COMMAND =
						e.KEY_DOWN_COMMAND =
						e.KEY_DELETE_COMMAND =
						e.KEY_BACKSPACE_COMMAND =
						e.KEY_ARROW_UP_COMMAND =
						e.KEY_ARROW_RIGHT_COMMAND =
						e.KEY_ARROW_LEFT_COMMAND =
						e.KEY_ARROW_DOWN_COMMAND =
						e.INSERT_TAB_COMMAND =
						e.INSERT_PARAGRAPH_COMMAND =
						e.INSERT_LINE_BREAK_COMMAND =
						e.INDENT_CONTENT_COMMAND =
						e.FORMAT_TEXT_COMMAND =
						e.FORMAT_ELEMENT_COMMAND =
						e.FOCUS_COMMAND =
						e.DROP_COMMAND =
						e.DRAGSTART_COMMAND =
						e.DRAGOVER_COMMAND =
						e.DRAGEND_COMMAND =
						e.DELETE_WORD_COMMAND =
						e.DELETE_LINE_COMMAND =
						e.DELETE_CHARACTER_COMMAND =
						e.CUT_COMMAND =
						e.createCommand =
						e.COPY_COMMAND =
						e.CONTROLLED_TEXT_INSERTION_COMMAND =
						e.CLICK_COMMAND =
						e.CLEAR_HISTORY_COMMAND =
						e.CLEAR_EDITOR_COMMAND =
						e.CAN_UNDO_COMMAND =
						e.CAN_REDO_COMMAND =
						e.BLUR_COMMAND =
							void 0),
					Object.defineProperty(e, "BLUR_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.BLUR_COMMAND;
						},
					}),
					Object.defineProperty(e, "CAN_REDO_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.CAN_REDO_COMMAND;
						},
					}),
					Object.defineProperty(e, "CAN_UNDO_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.CAN_UNDO_COMMAND;
						},
					}),
					Object.defineProperty(e, "CLEAR_EDITOR_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.CLEAR_EDITOR_COMMAND;
						},
					}),
					Object.defineProperty(e, "CLEAR_HISTORY_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.CLEAR_HISTORY_COMMAND;
						},
					}),
					Object.defineProperty(e, "CLICK_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.CLICK_COMMAND;
						},
					}),
					Object.defineProperty(e, "CONTROLLED_TEXT_INSERTION_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.CONTROLLED_TEXT_INSERTION_COMMAND;
						},
					}),
					Object.defineProperty(e, "COPY_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.COPY_COMMAND;
						},
					}),
					Object.defineProperty(e, "createCommand", {
						enumerable: !0,
						get: function () {
							return t.createCommand;
						},
					}),
					Object.defineProperty(e, "CUT_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.CUT_COMMAND;
						},
					}),
					Object.defineProperty(e, "DELETE_CHARACTER_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.DELETE_CHARACTER_COMMAND;
						},
					}),
					Object.defineProperty(e, "DELETE_LINE_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.DELETE_LINE_COMMAND;
						},
					}),
					Object.defineProperty(e, "DELETE_WORD_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.DELETE_WORD_COMMAND;
						},
					}),
					Object.defineProperty(e, "DRAGEND_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.DRAGEND_COMMAND;
						},
					}),
					Object.defineProperty(e, "DRAGOVER_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.DRAGOVER_COMMAND;
						},
					}),
					Object.defineProperty(e, "DRAGSTART_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.DRAGSTART_COMMAND;
						},
					}),
					Object.defineProperty(e, "DROP_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.DROP_COMMAND;
						},
					}),
					Object.defineProperty(e, "FOCUS_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.FOCUS_COMMAND;
						},
					}),
					Object.defineProperty(e, "FORMAT_ELEMENT_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.FORMAT_ELEMENT_COMMAND;
						},
					}),
					Object.defineProperty(e, "FORMAT_TEXT_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.FORMAT_TEXT_COMMAND;
						},
					}),
					Object.defineProperty(e, "INDENT_CONTENT_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.INDENT_CONTENT_COMMAND;
						},
					}),
					Object.defineProperty(e, "INSERT_LINE_BREAK_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.INSERT_LINE_BREAK_COMMAND;
						},
					}),
					Object.defineProperty(e, "INSERT_PARAGRAPH_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.INSERT_PARAGRAPH_COMMAND;
						},
					}),
					Object.defineProperty(e, "INSERT_TAB_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.INSERT_TAB_COMMAND;
						},
					}),
					Object.defineProperty(e, "KEY_ARROW_DOWN_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.KEY_ARROW_DOWN_COMMAND;
						},
					}),
					Object.defineProperty(e, "KEY_ARROW_LEFT_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.KEY_ARROW_LEFT_COMMAND;
						},
					}),
					Object.defineProperty(e, "KEY_ARROW_RIGHT_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.KEY_ARROW_RIGHT_COMMAND;
						},
					}),
					Object.defineProperty(e, "KEY_ARROW_UP_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.KEY_ARROW_UP_COMMAND;
						},
					}),
					Object.defineProperty(e, "KEY_BACKSPACE_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.KEY_BACKSPACE_COMMAND;
						},
					}),
					Object.defineProperty(e, "KEY_DELETE_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.KEY_DELETE_COMMAND;
						},
					}),
					Object.defineProperty(e, "KEY_DOWN_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.KEY_DOWN_COMMAND;
						},
					}),
					Object.defineProperty(e, "KEY_ENTER_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.KEY_ENTER_COMMAND;
						},
					}),
					Object.defineProperty(e, "KEY_ESCAPE_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.KEY_ESCAPE_COMMAND;
						},
					}),
					Object.defineProperty(e, "KEY_MODIFIER_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.KEY_MODIFIER_COMMAND;
						},
					}),
					Object.defineProperty(e, "KEY_SPACE_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.KEY_SPACE_COMMAND;
						},
					}),
					Object.defineProperty(e, "KEY_TAB_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.KEY_TAB_COMMAND;
						},
					}),
					Object.defineProperty(e, "MOVE_TO_END", {
						enumerable: !0,
						get: function () {
							return t.MOVE_TO_END;
						},
					}),
					Object.defineProperty(e, "MOVE_TO_START", {
						enumerable: !0,
						get: function () {
							return t.MOVE_TO_START;
						},
					}),
					Object.defineProperty(e, "OUTDENT_CONTENT_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.OUTDENT_CONTENT_COMMAND;
						},
					}),
					Object.defineProperty(e, "PASTE_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.PASTE_COMMAND;
						},
					}),
					Object.defineProperty(e, "REDO_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.REDO_COMMAND;
						},
					}),
					Object.defineProperty(e, "REMOVE_TEXT_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.REMOVE_TEXT_COMMAND;
						},
					}),
					Object.defineProperty(e, "SELECTION_CHANGE_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.SELECTION_CHANGE_COMMAND;
						},
					}),
					Object.defineProperty(e, "UNDO_COMMAND", {
						enumerable: !0,
						get: function () {
							return t.UNDO_COMMAND;
						},
					}),
					Object.defineProperty(e, "COMMAND_PRIORITY_CRITICAL", {
						enumerable: !0,
						get: function () {
							return i.COMMAND_PRIORITY_CRITICAL;
						},
					}),
					Object.defineProperty(e, "COMMAND_PRIORITY_EDITOR", {
						enumerable: !0,
						get: function () {
							return i.COMMAND_PRIORITY_EDITOR;
						},
					}),
					Object.defineProperty(e, "COMMAND_PRIORITY_HIGH", {
						enumerable: !0,
						get: function () {
							return i.COMMAND_PRIORITY_HIGH;
						},
					}),
					Object.defineProperty(e, "COMMAND_PRIORITY_LOW", {
						enumerable: !0,
						get: function () {
							return i.COMMAND_PRIORITY_LOW;
						},
					}),
					Object.defineProperty(e, "COMMAND_PRIORITY_NORMAL", {
						enumerable: !0,
						get: function () {
							return i.COMMAND_PRIORITY_NORMAL;
						},
					}),
					Object.defineProperty(e, "createEditor", {
						enumerable: !0,
						get: function () {
							return i.createEditor;
						},
					}),
					Object.defineProperty(e, "$normalizeSelection__EXPERIMENTAL", {
						enumerable: !0,
						get: function () {
							return w.$normalizeSelection;
						},
					}),
					Object.defineProperty(e, "$createNodeSelection", {
						enumerable: !0,
						get: function () {
							return E.$createNodeSelection;
						},
					}),
					Object.defineProperty(e, "$createRangeSelection", {
						enumerable: !0,
						get: function () {
							return E.$createRangeSelection;
						},
					}),
					Object.defineProperty(e, "$getPreviousSelection", {
						enumerable: !0,
						get: function () {
							return E.$getPreviousSelection;
						},
					}),
					Object.defineProperty(e, "$getSelection", {
						enumerable: !0,
						get: function () {
							return E.$getSelection;
						},
					}),
					Object.defineProperty(e, "$getTextContent", {
						enumerable: !0,
						get: function () {
							return E.$getTextContent;
						},
					}),
					Object.defineProperty(e, "$insertNodes", {
						enumerable: !0,
						get: function () {
							return E.$insertNodes;
						},
					}),
					Object.defineProperty(e, "$isBlockElementNode", {
						enumerable: !0,
						get: function () {
							return E.$isBlockElementNode;
						},
					}),
					Object.defineProperty(e, "$isNodeSelection", {
						enumerable: !0,
						get: function () {
							return E.$isNodeSelection;
						},
					}),
					Object.defineProperty(e, "$isRangeSelection", {
						enumerable: !0,
						get: function () {
							return E.$isRangeSelection;
						},
					}),
					Object.defineProperty(e, "DEPRECATED_$computeGridMap", {
						enumerable: !0,
						get: function () {
							return E.DEPRECATED_$computeGridMap;
						},
					}),
					Object.defineProperty(e, "DEPRECATED_$createGridSelection", {
						enumerable: !0,
						get: function () {
							return E.DEPRECATED_$createGridSelection;
						},
					}),
					Object.defineProperty(e, "DEPRECATED_$getNodeTriplet", {
						enumerable: !0,
						get: function () {
							return E.DEPRECATED_$getNodeTriplet;
						},
					}),
					Object.defineProperty(e, "DEPRECATED_$isGridSelection", {
						enumerable: !0,
						get: function () {
							return E.DEPRECATED_$isGridSelection;
						},
					}),
					Object.defineProperty(e, "$parseSerializedNode", {
						enumerable: !0,
						get: function () {
							return C.$parseSerializedNode;
						},
					}),
					Object.defineProperty(e, "$addUpdateTag", {
						enumerable: !0,
						get: function () {
							return d.$addUpdateTag;
						},
					}),
					Object.defineProperty(e, "$applyNodeReplacement", {
						enumerable: !0,
						get: function () {
							return d.$applyNodeReplacement;
						},
					}),
					Object.defineProperty(e, "$copyNode", {
						enumerable: !0,
						get: function () {
							return d.$copyNode;
						},
					}),
					Object.defineProperty(e, "$getAdjacentNode", {
						enumerable: !0,
						get: function () {
							return d.$getAdjacentNode;
						},
					}),
					Object.defineProperty(e, "$getNearestNodeFromDOMNode", {
						enumerable: !0,
						get: function () {
							return d.$getNearestNodeFromDOMNode;
						},
					}),
					Object.defineProperty(e, "$getNearestRootOrShadowRoot", {
						enumerable: !0,
						get: function () {
							return d.$getNearestRootOrShadowRoot;
						},
					}),
					Object.defineProperty(e, "$getNodeByKey", {
						enumerable: !0,
						get: function () {
							return d.$getNodeByKey;
						},
					}),
					Object.defineProperty(e, "$getRoot", {
						enumerable: !0,
						get: function () {
							return d.$getRoot;
						},
					}),
					Object.defineProperty(e, "$hasAncestor", {
						enumerable: !0,
						get: function () {
							return d.$hasAncestor;
						},
					}),
					Object.defineProperty(e, "$hasUpdateTag", {
						enumerable: !0,
						get: function () {
							return d.$hasUpdateTag;
						},
					}),
					Object.defineProperty(e, "$isInlineElementOrDecoratorNode", {
						enumerable: !0,
						get: function () {
							return d.$isInlineElementOrDecoratorNode;
						},
					}),
					Object.defineProperty(e, "$isLeafNode", {
						enumerable: !0,
						get: function () {
							return d.$isLeafNode;
						},
					}),
					Object.defineProperty(e, "$isRootOrShadowRoot", {
						enumerable: !0,
						get: function () {
							return d.$isRootOrShadowRoot;
						},
					}),
					Object.defineProperty(e, "$nodesOfType", {
						enumerable: !0,
						get: function () {
							return d.$nodesOfType;
						},
					}),
					Object.defineProperty(e, "$setCompositionKey", {
						enumerable: !0,
						get: function () {
							return d.$setCompositionKey;
						},
					}),
					Object.defineProperty(e, "$setSelection", {
						enumerable: !0,
						get: function () {
							return d.$setSelection;
						},
					}),
					Object.defineProperty(e, "$splitNode", {
						enumerable: !0,
						get: function () {
							return d.$splitNode;
						},
					}),
					Object.defineProperty(e, "getNearestEditorFromDOMNode", {
						enumerable: !0,
						get: function () {
							return d.getNearestEditorFromDOMNode;
						},
					}),
					Object.defineProperty(e, "isSelectionCapturedInDecoratorInput", {
						enumerable: !0,
						get: function () {
							return d.isSelectionCapturedInDecoratorInput;
						},
					}),
					Object.defineProperty(e, "isSelectionWithinEditor", {
						enumerable: !0,
						get: function () {
							return d.isSelectionWithinEditor;
						},
					}),
					Object.defineProperty(e, "$isDecoratorNode", {
						enumerable: !0,
						get: function () {
							return m.$isDecoratorNode;
						},
					}),
					Object.defineProperty(e, "DecoratorNode", {
						enumerable: !0,
						get: function () {
							return m.DecoratorNode;
						},
					}),
					Object.defineProperty(e, "$isElementNode", {
						enumerable: !0,
						get: function () {
							return r.$isElementNode;
						},
					}),
					Object.defineProperty(e, "ElementNode", {
						enumerable: !0,
						get: function () {
							return r.ElementNode;
						},
					}),
					Object.defineProperty(e, "DEPRECATED_$isGridCellNode", {
						enumerable: !0,
						get: function () {
							return u.DEPRECATED_$isGridCellNode;
						},
					}),
					Object.defineProperty(e, "DEPRECATED_GridCellNode", {
						enumerable: !0,
						get: function () {
							return u.DEPRECATED_GridCellNode;
						},
					}),
					Object.defineProperty(e, "DEPRECATED_$isGridNode", {
						enumerable: !0,
						get: function () {
							return a.DEPRECATED_$isGridNode;
						},
					}),
					Object.defineProperty(e, "DEPRECATED_GridNode", {
						enumerable: !0,
						get: function () {
							return a.DEPRECATED_GridNode;
						},
					}),
					Object.defineProperty(e, "DEPRECATED_$isGridRowNode", {
						enumerable: !0,
						get: function () {
							return h.DEPRECATED_$isGridRowNode;
						},
					}),
					Object.defineProperty(e, "DEPRECATED_GridRowNode", {
						enumerable: !0,
						get: function () {
							return h.DEPRECATED_GridRowNode;
						},
					}),
					Object.defineProperty(e, "$createLineBreakNode", {
						enumerable: !0,
						get: function () {
							return c.$createLineBreakNode;
						},
					}),
					Object.defineProperty(e, "$isLineBreakNode", {
						enumerable: !0,
						get: function () {
							return c.$isLineBreakNode;
						},
					}),
					Object.defineProperty(e, "LineBreakNode", {
						enumerable: !0,
						get: function () {
							return c.LineBreakNode;
						},
					}),
					Object.defineProperty(e, "$createParagraphNode", {
						enumerable: !0,
						get: function () {
							return n.$createParagraphNode;
						},
					}),
					Object.defineProperty(e, "$isParagraphNode", {
						enumerable: !0,
						get: function () {
							return n.$isParagraphNode;
						},
					}),
					Object.defineProperty(e, "ParagraphNode", {
						enumerable: !0,
						get: function () {
							return n.ParagraphNode;
						},
					}),
					Object.defineProperty(e, "$isRootNode", {
						enumerable: !0,
						get: function () {
							return g.$isRootNode;
						},
					}),
					Object.defineProperty(e, "RootNode", {
						enumerable: !0,
						get: function () {
							return g.RootNode;
						},
					}),
					Object.defineProperty(e, "$createTabNode", {
						enumerable: !0,
						get: function () {
							return p.$createTabNode;
						},
					}),
					Object.defineProperty(e, "$isTabNode", {
						enumerable: !0,
						get: function () {
							return p.$isTabNode;
						},
					}),
					Object.defineProperty(e, "TabNode", {
						enumerable: !0,
						get: function () {
							return p.TabNode;
						},
					}),
					Object.defineProperty(e, "$createTextNode", {
						enumerable: !0,
						get: function () {
							return o.$createTextNode;
						},
					}),
					Object.defineProperty(e, "$isTextNode", {
						enumerable: !0,
						get: function () {
							return o.$isTextNode;
						},
					}),
					Object.defineProperty(e, "TextNode", {
						enumerable: !0,
						get: function () {
							return o.TextNode;
						},
					});
			},
		),
		