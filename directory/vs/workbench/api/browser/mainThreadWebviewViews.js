define(
			de[3376],
			he([1, 0, 29, 3, 47, 831, 88, 1275, 32]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4oc = void 0),
					(C = mt(C));
				let r = class extends i.$1c {
					constructor(a, h, c, n) {
						super(),
							(this.f = h),
							(this.g = c),
							(this.h = n),
							(this.b = this.D(new i.$0c())),
							(this.c = this.D(new i.$0c())),
							(this.a = a.getProxy(C.$mbb.ExtHostWebviewViews));
					}
					$setWebviewViewTitle(a, h) {
						const c = this.j(a);
						c.title = h;
					}
					$setWebviewViewDescription(a, h) {
						const c = this.j(a);
						c.description = h;
					}
					$setWebviewViewBadge(a, h) {
						const c = this.j(a);
						c.badge = h;
					}
					$show(a, h) {
						this.j(a).show(h);
					}
					$registerWebviewViewProvider(a, h, c) {
						if (this.c.has(h))
							throw new Error(`View provider for ${h} already registered`);
						const n = (0, E.$Mmc)(a),
							g = this.h.register(h, {
								resolve: async (p, o) => {
									const f = (0, w.$9g)();
									this.b.set(f, p),
										this.f.addWebview(f, p.webview, {
											serializeBuffersForPostMessage:
												c.serializeBuffersForPostMessage,
										});
									let b;
									if (p.webview.state)
										try {
											b = JSON.parse(p.webview.state);
										} catch (s) {
											console.error(
												"Could not load webview state",
												s,
												p.webview.state,
											);
										}
									(p.webview.extension = n),
										c && (p.webview.options = c),
										p.onDidChangeVisibility((s) => {
											this.a.$onDidChangeWebviewViewVisibility(f, s);
										}),
										p.onDispose(() => {
											this.a.$disposeWebviewView(f), this.b.deleteAndDispose(f);
										}),
										this.g.publicLog2("webviews:createWebviewView", {
											extensionId: n.id.value,
											id: h,
										});
									try {
										await this.a.$resolveWebviewView(f, h, p.title, b, o);
									} catch (s) {
										(0, t.$4)(s),
											p.webview.setHtml(
												this.f.getWebviewResolvedFailedContent(h),
											);
									}
								},
							});
						this.c.set(h, g);
					}
					$unregisterWebviewViewProvider(a) {
						if (!this.c.has(a))
							throw new Error(`No view provider for ${a} registered`);
						this.c.deleteAndDispose(a);
					}
					j(a) {
						const h = this.b.get(a);
						if (!h) throw new Error("unknown webview view");
						return h;
					}
				};
				(e.$4oc = r), (e.$4oc = r = Ne([j(2, m.$km), j(3, d.$2oc)], r));
			},
		),
		