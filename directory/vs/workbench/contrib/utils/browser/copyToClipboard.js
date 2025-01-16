define(de[1008], he([1, 0, 7]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Y$b = void 0);
			const i = (w, E) => {
				const C = (0, t.$Ogb)(),
					d = C.document.createElement("textarea");
				(d.value = w), C.document.body.appendChild(d), d.select();
				try {
					C.document.execCommand("copy"), E?.();
				} catch (m) {
					return console.error("Failed to copy text: ", m), !1;
				}
				return C.document.body.removeChild(d), !0;
			};
			e.$Y$b = i;
		}),
		define(
			de[3211],
			he([1, 0, 249, 23, 54, 9, 22, 2888]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.WebviewResourceResponse = void 0),
					(e.$d6c = r);
				var m;
				(function (c) {
					let n;
					(function (o) {
						(o[(o.Success = 0)] = "Success"),
							(o[(o.Failed = 1)] = "Failed"),
							(o[(o.AccessDenied = 2)] = "AccessDenied"),
							(o[(o.NotModified = 3)] = "NotModified");
					})((n = c.Type || (c.Type = {})));
					class g {
						constructor(f, b, s, l) {
							(this.stream = f),
								(this.etag = b),
								(this.mtime = s),
								(this.mimeType = l),
								(this.type = n.Success);
						}
					}
					(c.StreamSuccess = g),
						(c.Failed = { type: n.Failed }),
						(c.AccessDenied = { type: n.AccessDenied });
					class p {
						constructor(f, b) {
							(this.mimeType = f),
								(this.mtime = b),
								(this.type = n.NotModified);
						}
					}
					c.NotModified = p;
				})(m || (e.WebviewResourceResponse = m = {}));
				async function r(c, n, g, p, o) {
					p.debug(`loadLocalResource - begin. requestUri=${c}`);
					const f = u(c, n.roots);
					if (
						(p.debug(
							`loadLocalResource - found resource to load. requestUri=${c}, resourceToLoad=${f}`,
						),
						!f)
					)
						return m.AccessDenied;
					const b = (0, d.$c6c)(c);
					try {
						const s = await g.readFileStream(f, { etag: n.ifNoneMatch }, o);
						return new m.StreamSuccess(s.value, s.etag, s.mtime, b);
					} catch (s) {
						return s instanceof C.$Gl &&
							s.fileOperationResult ===
								C.FileOperationResult.FILE_NOT_MODIFIED_SINCE
							? new m.NotModified(b, s.options?.mtime)
							: (p.debug(
									`loadLocalResource - Error using fileReader. requestUri=${c}`,
								),
								console.log(s),
								m.Failed);
					}
				}
				function u(c, n) {
					for (const g of n) if (a(g, c)) return h(c);
				}
				function a(c, n) {
					if (c.scheme !== n.scheme) return !1;
					let g = (0, w.$mc)(n.fsPath),
						p = (0, w.$mc)(c.fsPath + (c.fsPath.endsWith(w.sep) ? "" : w.sep));
					return (
						(0, t.$Ig)(c.fsPath) &&
							(0, t.$Ig)(n.fsPath) &&
							((p = p.toLowerCase()), (g = g.toLowerCase())),
						g.startsWith(p)
					);
				}
				function h(c) {
					return c.scheme === i.Schemas.vscodeRemote
						? E.URI.from({
								scheme: i.Schemas.vscodeRemote,
								authority: c.authority,
								path: "/vscode-resource",
								query: JSON.stringify({ requestResourcePath: c.path }),
							})
						: c;
				}
			},
		),
		define(
			de[355],
			he([1, 0, 24, 19, 47, 8, 5, 21, 282]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Ib =
						e.$5Ib =
						e.WebviewContentPurpose =
						e.$3Ib =
						e.$2Ib =
						e.$1Ib =
						e.$ZIb =
							void 0),
					(e.$4Ib = u),
					(e.$ZIb = new E.$5j("webviewFindWidgetVisible", !1)),
					(e.$1Ib = new E.$5j("webviewFindWidgetFocused", !1)),
					(e.$2Ib = new E.$5j("webviewFindWidgetEnabled", !1)),
					(e.$3Ib = (0, C.$Mi)("webviewService"));
				var r;
				(function (n) {
					(n.NotebookRenderer = "notebookRenderer"),
						(n.CustomEditor = "customEditor"),
						(n.WebviewView = "webviewView");
				})(r || (e.WebviewContentPurpose = r = {}));
				function u(n, g) {
					return (
						n.allowMultipleAPIAcquire === g.allowMultipleAPIAcquire &&
						n.allowScripts === g.allowScripts &&
						n.allowForms === g.allowForms &&
						(0, t.$yb)(n.localResourceRoots, g.localResourceRoots, i.$gh) &&
						(0, t.$yb)(
							n.portMapping,
							g.portMapping,
							(p, o) =>
								p.extensionHostPort === o.extensionHostPort &&
								p.webviewPort === o.webviewPort,
						) &&
						a(n, g)
					);
				}
				function a(n, g) {
					return n.enableCommandUris === g.enableCommandUris
						? !0
						: Array.isArray(n.enableCommandUris) &&
								Array.isArray(g.enableCommandUris)
							? (0, t.$yb)(n.enableCommandUris, g.enableCommandUris)
							: !1;
				}
				let h = class {
					constructor(g, p) {
						(this.c = new m.$eEb(g, p)),
							(this.d = this.c.getMemento(
								d.StorageScope.APPLICATION,
								d.StorageTarget.MACHINE,
							));
					}
					getOrigin(g, p) {
						const o = this.e(g, p),
							f = this.d[o];
						if (f && typeof f == "string") return f;
						const b = (0, w.$9g)();
						return (this.d[o] = b), this.c.saveMemento(), b;
					}
					e(g, p) {
						return JSON.stringify({ viewType: g, key: p });
					}
				};
				(e.$5Ib = h), (e.$5Ib = h = Ne([j(1, d.$lq)], h));
				let c = class {
					constructor(g, p) {
						this.c = new h(g, p);
					}
					getOrigin(g, p) {
						return this.c.getOrigin(g, p.value);
					}
				};
				(e.$6Ib = c), (e.$6Ib = c = Ne([j(1, d.$lq)], c));
			},
		),
		define(
			de[3212],
			he([1, 0, 8, 49, 72, 39, 1722, 355]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$e6c = void 0);
				let m = class extends C.$QVc {
					async S(u) {}
					constructor(u, a, h, c, n) {
						super(
							{
								showCommonFindToggles: !1,
								checkImeCompletionState: u.checkImeCompletionState,
								enableSash: !0,
							},
							a,
							h,
							c,
							n,
						),
							(this.gb = u),
							(this.fb = d.$1Ib.bindTo(h)),
							this.D(
								u.hasFindResult((g) => {
									this.bb(g), this.cb();
								}),
							),
							this.D(
								u.onDidStopFind(() => {
									this.bb(!1);
								}),
							);
					}
					find(u) {
						const a = this.U;
						a && this.gb.find(a, u);
					}
					hide(u = !0) {
						super.hide(u), this.gb.stopFind(!0), this.gb.focus();
					}
					N() {
						const u = this.U;
						return u ? this.gb.updateFind(u) : this.gb.stopFind(!1), !1;
					}
					O() {
						this.fb.set(!0);
					}
					P() {
						this.fb.reset();
					}
					Q() {}
					R() {}
					findFirst() {}
				};
				(e.$e6c = m),
					(e.$e6c = m =
						Ne([j(1, i.$Wxb), j(2, t.$6j), j(3, w.$Uyb), j(4, E.$uZ)], m));
			},
		),
		