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
		