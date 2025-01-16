define(de[1785], he([1, 0, 12, 305, 253]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Fgd = void 0);
			class E {
				constructor(d, m, r) {
					(this.c = r),
						(this.a = (0, w.$yY)(d)),
						(this.b = i.ProxyChannel.toService(m.getChannel("webview")));
				}
				didFocus() {
					this.setIgnoreMenuShortcuts(!0);
				}
				didBlur() {
					this.setIgnoreMenuShortcuts(!1);
				}
				get d() {
					return t.$m || this.a;
				}
				setIgnoreMenuShortcuts(d) {
					this.d &&
						this.b.setIgnoreMenuShortcuts({ windowId: this.c.windowId }, d);
				}
			}
			e.$Fgd = E;
		}),
		define(
			de[3213],
			he([1, 0, 4, 7, 99, 11, 110, 10, 371, 1785, 58]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hgd = e.$Ggd = void 0),
					(t = mt(t));
				class a extends E.$3X {
					constructor() {
						super({
							id: "workbench.action.webview.openDeveloperTools",
							title: t.localize2(11372, "Open Webview Developer Tools"),
							category: w.$ck.Developer,
							metadata: { description: t.localize(11369, null) },
							f1: !0,
						});
					}
					async run(n) {
						const g = n.get(C.$y7c);
						(0, i.$Ogb)().document.querySelectorAll("iframe.webview.ready")
							.length &&
							(console.info(t.localize(11370, null)), g.openDevTools());
					}
				}
				e.$Ggd = a;
				class h extends E.$3X {
					constructor() {
						super({
							id: u.$SX,
							title: t.localize(11371, null),
							category: w.$ck.Developer,
						});
					}
					async run(n) {
						const g = n.get(d.$gj),
							p = n.get(m.$V8c),
							o = n.get(C.$y7c);
						await Promise.resolve(),
							new r.$Fgd(g, p, o).setIgnoreMenuShortcuts(!1);
					}
				}
				e.$Hgd = h;
			},
		),
		define(
			de[566],
			he([1, 0, 23, 9, 47, 44, 223]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$W4b = void 0);
				class d extends C.$LO {
					static {
						this.typeId = "workbench.editors.webviewInput";
					}
					get typeId() {
						return d.typeId;
					}
					get editorId() {
						return this.viewType;
					}
					get capabilities() {
						return (
							E.EditorInputCapabilities.Readonly |
							E.EditorInputCapabilities.Singleton |
							E.EditorInputCapabilities.CanDropIntoEditor
						);
					}
					get resource() {
						return i.URI.from({
							scheme: t.Schemas.webviewPanel,
							path: `webview-panel/webview-${this.a}`,
						});
					}
					constructor(r, u, a) {
						super(),
							(this.r = a),
							(this.a = (0, w.$9g)()),
							(this.q = !1),
							(this.viewType = r.viewType),
							(this.providedId = r.providedId),
							(this.c = r.name),
							(this.n = u);
					}
					dispose() {
						this.isDisposed() || this.q || this.n?.dispose(), super.dispose();
					}
					getName() {
						return this.c;
					}
					getTitle(r) {
						return this.getName();
					}
					getDescription() {}
					setName(r) {
						(this.c = r), this.webview.setTitle(r), this.f.fire();
					}
					get webview() {
						return this.n;
					}
					get extension() {
						return this.webview.extension;
					}
					get iconPath() {
						return this.h;
					}
					set iconPath(r) {
						(this.h = r), this.r.setIcons(this.a, r);
					}
					matches(r) {
						return super.matches(r) || r === this;
					}
					get group() {
						return this.m;
					}
					updateGroup(r) {
						this.m = r;
					}
					s(r) {
						if (!this.q) return (this.q = !0), (r.n = this.n), r;
					}
					claim(r, u, a) {
						return this.n.claim(r, u, a);
					}
				}
				e.$W4b = d;
			},
		),
		define(
			de[1275],
			he([1, 0, 15, 33, 6, 3, 5]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3oc = e.$2oc = void 0),
					(e.$2oc = (0, C.$Mi)("webviewViewService"));
				class d extends E.$1c {
					constructor() {
						super(...arguments),
							(this.a = new Map()),
							(this.b = new Map()),
							(this.c = this.D(new w.$re())),
							(this.onNewResolverRegistered = this.c.event);
					}
					register(r, u) {
						if (this.a.has(r))
							throw new Error(`View resolver already registered for ${r}`);
						this.a.set(r, u), this.c.fire({ viewType: r });
						const a = this.b.get(r);
						return (
							a &&
								u.resolve(a.webview, i.CancellationToken.None).then(() => {
									this.b.delete(r), a.resolve();
								}),
							(0, E.$Yc)(() => {
								this.a.delete(r);
							})
						);
					}
					resolve(r, u, a) {
						const h = this.a.get(r);
						if (!h) {
							if (this.b.has(r))
								throw new Error("View already awaiting revival");
							const { promise: c, resolve: n } = (0, t.$Fh)();
							return this.b.set(r, { webview: u, resolve: n }), c;
						}
						return h.resolve(u, a);
					}
				}
				e.$3oc = d;
			},
		),
		