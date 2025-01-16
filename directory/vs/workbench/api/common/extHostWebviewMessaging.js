define(de[3374], he([1, 0, 76, 88]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Jmc = E),
				(e.$Kmc = d),
				(i = mt(i));
			class w {
				constructor() {
					this.buffers = [];
				}
				add(r) {
					let u = this.buffers.indexOf(r);
					return u < 0 && ((u = this.buffers.length), this.buffers.push(r)), u;
				}
			}
			function E(m, r) {
				if (r.serializeBuffersForPostMessage) {
					const u = new w(),
						h = JSON.stringify(m, (n, g) => {
							if (g instanceof ArrayBuffer)
								return {
									$$vscode_array_buffer_reference$$: !0,
									index: u.add(g),
								};
							if (ArrayBuffer.isView(g)) {
								const p = C(g);
								if (p)
									return {
										$$vscode_array_buffer_reference$$: !0,
										index: u.add(g.buffer),
										view: {
											type: p,
											byteLength: g.byteLength,
											byteOffset: g.byteOffset,
										},
									};
							}
							return g;
						}),
						c = u.buffers.map((n) => {
							const g = new Uint8Array(n);
							return t.$Te.wrap(g);
						});
					return { message: h, buffers: c };
				} else return { message: JSON.stringify(m), buffers: [] };
			}
			function C(m) {
				switch (m.constructor.name) {
					case "Int8Array":
						return i.WebviewMessageArrayBufferViewType.Int8Array;
					case "Uint8Array":
						return i.WebviewMessageArrayBufferViewType.Uint8Array;
					case "Uint8ClampedArray":
						return i.WebviewMessageArrayBufferViewType.Uint8ClampedArray;
					case "Int16Array":
						return i.WebviewMessageArrayBufferViewType.Int16Array;
					case "Uint16Array":
						return i.WebviewMessageArrayBufferViewType.Uint16Array;
					case "Int32Array":
						return i.WebviewMessageArrayBufferViewType.Int32Array;
					case "Uint32Array":
						return i.WebviewMessageArrayBufferViewType.Uint32Array;
					case "Float32Array":
						return i.WebviewMessageArrayBufferViewType.Float32Array;
					case "Float64Array":
						return i.WebviewMessageArrayBufferViewType.Float64Array;
					case "BigInt64Array":
						return i.WebviewMessageArrayBufferViewType.BigInt64Array;
					case "BigUint64Array":
						return i.WebviewMessageArrayBufferViewType.BigUint64Array;
				}
			}
			function d(m, r) {
				const u = r.map((c) => {
						const n = new ArrayBuffer(c.byteLength);
						return new Uint8Array(n).set(c.buffer), n;
					}),
					a = r.length
						? (c, n) => {
								if (
									n &&
									typeof n == "object" &&
									n.$$vscode_array_buffer_reference$$
								) {
									const g = n,
										{ index: p } = g,
										o = u[p];
									if (g.view)
										switch (g.view.type) {
											case i.WebviewMessageArrayBufferViewType.Int8Array:
												return new Int8Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Int8Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Uint8Array:
												return new Uint8Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Uint8Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType
												.Uint8ClampedArray:
												return new Uint8ClampedArray(
													o,
													g.view.byteOffset,
													g.view.byteLength /
														Uint8ClampedArray.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Int16Array:
												return new Int16Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Int16Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Uint16Array:
												return new Uint16Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Uint16Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Int32Array:
												return new Int32Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Int32Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Uint32Array:
												return new Uint32Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Uint32Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Float32Array:
												return new Float32Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Float32Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Float64Array:
												return new Float64Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Float64Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.BigInt64Array:
												return new BigInt64Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / BigInt64Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.BigUint64Array:
												return new BigUint64Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / BigUint64Array.BYTES_PER_ELEMENT,
												);
											default:
												throw new Error("Unknown array buffer view type");
										}
									return o;
								}
								return n;
							}
						: void 0;
				return { message: JSON.parse(m, a), arrayBuffers: u };
			}
		}),
		define(
			de[831],
			he([1, 0, 3, 23, 12, 37, 9, 4, 41, 62, 88, 3374, 622]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lmc = void 0),
					(e.$Mmc = g),
					(e.$Nmc = p),
					(u = mt(u));
				let n = class extends t.$1c {
					static {
						c = this;
					}
					static {
						this.a = new Set([
							i.Schemas.http,
							i.Schemas.https,
							i.Schemas.mailto,
							i.Schemas.vscode,
							"vscode-insider",
						]);
					}
					constructor(f, b, s) {
						super(),
							(this.f = b),
							(this.g = s),
							(this.c = new Map()),
							(this.b = f.getProxy(u.$mbb.ExtHostWebviews));
					}
					addWebview(f, b, s) {
						if (this.c.has(f)) throw new Error("Webview already registered");
						this.c.set(f, b), this.h(f, b, s);
					}
					$setHtml(f, b) {
						this.n(f)?.setHtml(b);
					}
					$setOptions(f, b) {
						const s = this.n(f);
						s && (s.contentOptions = p(b));
					}
					async $postMessage(f, b, ...s) {
						const l = this.n(f);
						if (!l) return !1;
						const { message: y, arrayBuffers: $ } = (0, a.$Kmc)(b, s);
						return l.postMessage(y, $);
					}
					h(f, b, s) {
						const l = new t.$Zc();
						l.add(b.onDidClickLink((y) => this.j(f, y))),
							l.add(
								b.onMessage((y) => {
									const $ = (0, a.$Jmc)(y.message, s);
									this.b.$onMessage(f, $.message, new h.$uO($.buffers));
								}),
							),
							l.add(b.onMissingCsp((y) => this.b.$onMissingCsp(f, y.value))),
							l.add(
								b.onDidDispose(() => {
									l.dispose(), this.c.delete(f);
								}),
							);
					}
					j(f, b) {
						const s = this.q(f);
						this.m(s, C.URI.parse(b)) &&
							this.f.open(b, {
								fromUserGesture: !0,
								allowContributedOpeners: !0,
								allowCommands:
									Array.isArray(s.contentOptions.enableCommandUris) ||
									s.contentOptions.enableCommandUris === !0,
								fromWorkspace: !0,
							});
					}
					m(f, b) {
						return c.a.has(b.scheme) ||
							(!w.$r && this.g.urlProtocol === b.scheme)
							? !0
							: b.scheme === i.Schemas.command
								? Array.isArray(f.contentOptions.enableCommandUris)
									? f.contentOptions.enableCommandUris.includes(b.path)
									: f.contentOptions.enableCommandUris === !0
								: !1;
					}
					n(f) {
						return this.c.get(f);
					}
					q(f) {
						const b = this.n(f);
						if (!b) throw new Error(`Unknown webview handle:${f}`);
						return b;
					}
					getWebviewResolvedFailedContent(f) {
						return `<!DOCTYPE html>
		<html>
			<head>
				<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none';">
			</head>
			<body>${(0, d.localize)(2584, null, (0, E.$nf)(f))}</body>
		</html>`;
					}
				};
				(e.$Lmc = n), (e.$Lmc = n = c = Ne([j(1, m.$7rb), j(2, r.$Bk)], n));
				function g(o) {
					return { id: o.id, location: C.URI.revive(o.location) };
				}
				function p(o) {
					return {
						allowScripts: o.enableScripts,
						allowForms: o.enableForms,
						enableCommandUris: o.enableCommandUris,
						localResourceRoots: Array.isArray(o.localResourceRoots)
							? o.localResourceRoots.map((f) => C.URI.revive(f))
							: void 0,
						portMapping: o.portMapping,
					};
				}
			},
		),
		define(
			de[3375],
			he([1, 0, 7, 3, 19, 9, 65, 831, 88, 355, 101]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Omc = void 0);
				class a {
					constructor(n, g, p, o) {
						(this.editor = n),
							(this.line = g),
							(this.height = p),
							(this.webview = o),
							(this.domNode = document.createElement("div")),
							(this.domNode.style.zIndex = "10"),
							(this.afterLineNumber = g),
							(this.afterColumn = 1),
							(this.heightInLines = p),
							n.changeViewZones((f) => (this.a = f.addZone(this))),
							o.mountTo(this.domNode, (0, t.getWindow)(n.getDomNode()));
					}
					dispose() {
						this.editor.changeViewZones((n) => this.a && n.removeZone(this.a));
					}
				}
				let h = class {
					constructor(n, g, p) {
						(this.d = g),
							(this.e = p),
							(this.b = new i.$Zc()),
							(this.c = new Map()),
							(this.a = n.getProxy(m.$mbb.ExtHostEditorInsets));
					}
					dispose() {
						this.b.dispose();
					}
					async $createEditorInset(n, g, p, o, f, b, s, l) {
						let y;
						g = g.substr(0, g.indexOf(","));
						for (const T of this.d.listCodeEditors())
							if (
								T.getId() === g &&
								T.hasModel() &&
								(0, w.$gh)(T.getModel().uri, E.URI.revive(p))
							) {
								y = T;
								break;
							}
						if (!y) {
							setTimeout(() => this.a.$onDidDispose(n));
							return;
						}
						const $ = new i.$Zc(),
							v = this.e.createWebviewElement({
								title: void 0,
								options: { enableFindWidget: !1 },
								contentOptions: (0, d.$Nmc)(b),
								extension: { id: s, location: E.URI.revive(l) },
							}),
							S = new a(y, o, f, v),
							I = () => {
								$.dispose(), this.a.$onDidDispose(n), this.c.delete(n);
							};
						$.add(y.onDidChangeModel(I)),
							$.add(y.onDidDispose(I)),
							$.add(S),
							$.add(v),
							$.add(
								v.onMessage((T) => this.a.$onDidReceiveMessage(n, T.message)),
							),
							this.c.set(n, S);
					}
					$disposeEditorInset(n) {
						const g = this.f(n);
						this.c.delete(n), g.dispose();
					}
					$setHtml(n, g) {
						this.f(n).webview.setHtml(g);
					}
					$setOptions(n, g) {
						const p = this.f(n);
						p.webview.contentOptions = (0, d.$Nmc)(g);
					}
					async $postMessage(n, g) {
						return this.f(n).webview.postMessage(g), !0;
					}
					f(n) {
						const g = this.c.get(n);
						if (!g) throw new Error("Unknown inset");
						return g;
					}
				};
				(e.$Omc = h),
					(e.$Omc = h =
						Ne(
							[
								(0, u.$tmc)(m.$lbb.MainThreadEditorInsets),
								j(1, C.$dtb),
								j(2, r.$3Ib),
							],
							h,
						));
			},
		),
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
		