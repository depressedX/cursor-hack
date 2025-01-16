define(de[1777], he([1, 0, 2, 2, 2, 13]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$dbc = e.$cbc = void 0);
			const C = (0, t.template)("<span><span>"),
				d = (0, t.template)("<span> "),
				m = (0, t.template)("<span>");
			e.$cbc = 30;
			const r = (a) => {
				const h = ["file", "code"],
					c = (0, E.createMemo)(() => a.filter((o) => h.includes(o.type))),
					n = (0, E.createMemo)(() => c().map((o) => o.extraString || "")),
					g = (0, E.createMemo)(() => {
						if (!n().length) return "";
						let o = n()[0];
						for (let f = 1; f < n().length; f++)
							for (; !n()[f].startsWith(o); )
								if (((o = o.slice(0, -1)), !o)) return "";
						return o.endsWith("/") ? o : "";
					}),
					p = (0, E.createMemo)(() => {
						const o = new Map();
						return (
							n().forEach((f) => {
								(f.match(/\/[^\/]+\.[^\/]+$|\.[^\/]+$/g) || []).forEach((s) => {
									o.set(s, (o.get(s) || 0) + 1);
								});
							}),
							new Set(
								Array.from(o)
									.filter(([f, b]) => b > 1)
									.map(([f]) => f)
									.sort((f, b) => b.length - f.length),
							)
						);
					});
				return (0, E.createMemo)(() =>
					a.map((o) => {
						if (!h.includes(o.type) || !o.extraString) return o;
						const f = o.extraStringCutoff ?? e.$cbc;
						let b = o.extraString,
							s;
						if (o.type === "code") {
							const [T, P] = b.split(/(\([^)]+\))/).filter(Boolean);
							(b = T.trim()), (s = P?.trim());
						}
						if (b.startsWith(g())) {
							const T = b.slice(g().length),
								P = Array.from(p()).find((A) => T.endsWith(A)),
								k = P ? T.slice(0, -P.length) : T,
								D = g().length + k.length + (P?.length ?? 0) - f;
							let M = g(),
								N = P;
							return {
								...o,
								extraString: (() => {
									const A = C(),
										R = A.firstChild;
									return (
										(0, i.insert)(
											A,
											(0, w.createComponent)(u, { children: M }),
											R,
										),
										(0, i.insert)(R, k),
										(0, i.insert)(
											A,
											N && (0, w.createComponent)(u, { children: N }),
											null,
										),
										(0, i.insert)(
											A,
											s &&
												(() => {
													const O = d(),
														B = O.firstChild;
													return (0, i.insert)(O, s, null), O;
												})(),
											null,
										),
										A
									);
								})(),
							};
						}
						const l = Array.from(p()).find((T) => b.endsWith(T)),
							y = l ? b.slice(0, -l.length) : b,
							v = y.length + (l?.length ?? 0) - f,
							S = y,
							I = l;
						return {
							...o,
							extraString: (() => {
								const T = C(),
									P = T.firstChild;
								return (
									(0, i.insert)(P, S),
									(0, i.insert)(
										T,
										I && (0, w.createComponent)(u, { children: I }),
										null,
									),
									(0, i.insert)(
										T,
										s &&
											(() => {
												const k = d(),
													L = k.firstChild;
												return (0, i.insert)(k, s, null), k;
											})(),
										null,
									),
									T
								);
							})(),
						};
					}),
				)();
			};
			e.$dbc = r;
			const u = (a) =>
				(() => {
					const h = m();
					return (
						h.style.setProperty("color", "var(--vscode-descriptionForeground)"),
						(0, i.insert)(h, () => a.children),
						h
					);
				})();
		}),
		define(
			de[564],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 2510]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nac = void 0);
				const r = (0, t.template)("<span>"),
					u = (a) => {
						const h = (0, m.mergeProps)({ type: "default", size: "medium" }, a),
							{ type: c, size: n, text: g, style: p, class: o, ...f } = h;
						return (() => {
							const b = r();
							return (
								(0, C.spread)(
									b,
									(0, d.mergeProps)(
										{
											get class() {
												return [
													"cursor-badge",
													`cursor-badge-${c}`,
													`cursor-badge-${n}`,
													o,
												]
													.filter(Boolean)
													.join(" ");
											},
										},
										f,
									),
									!1,
									!0,
								),
								(0, E.insert)(b, g),
								(0, w.effect)((s) => (0, i.style)(b, p, s)),
								b
							);
						})();
					};
				e.$nac = u;
			},
		),
		define(
			de[1006],
			he([1, 0, 2, 2, 2, 13, 2512]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XCc = void 0);
				const C = (0, t.template)("<div>"),
					d = (m) => {
						const r = (0, E.createMemo)(() => m.size || "medium");
						return (() => {
							const u = C();
							return (
								u.addEventListener("click", () => m.onChange(!m.value)),
								(0, w.effect)(() =>
									(0, i.className)(
										u,
										`cursor-setting-value-checkbox codicon codicon-check${m.value ? " checked" : ""} ${r}`,
									),
								),
								u
							);
						})();
					};
				e.$XCc = d;
			},
		),
		define(
			de[3196],
			he([1, 0, 2, 2, 2, 2, 13, 2517]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wfd = void 0);
				const d = (0, t.template)('<textarea name="text" id="text">'),
					m = (r) => {
						const [u, a] = (0, C.createSignal)(r.defaultValue ?? ""),
							[h, c] = (0, C.createSignal)(null),
							n = () => {
								const g = h();
								if (!g) return;
								g.style.height = "auto";
								const p = g.scrollHeight,
									f = (g.offsetHeight - g.clientHeight) / 2;
								(g.style.height = `${p + f}px`),
									(g.style.paddingTop = `${f}px`),
									(g.style.paddingBottom = `${f}px`),
									(g.style.boxSizing = "border-box");
							};
						return (
							(0, C.createEffect)(() => {
								(0, C.onMount)(() => {
									n();
								});
							}),
							(0, C.createEffect)(() => {
								if (h()) {
									const g = new ResizeObserver(() => {
										n();
									});
									return (
										g.observe(h()),
										() => {
											g.disconnect();
										}
									);
								}
							}),
							(() => {
								const g = d();
								return (
									(0, i.use)((p) => {
										r.setRef != null && r.setRef(p), c(p);
									}, g),
									g.addEventListener("keydown", (p) => {
										r.onKeyDown && r.onKeyDown(p);
									}),
									g.addEventListener("input", (p) => {
										n(), a(p.currentTarget.value), r.onInput && r.onInput(p);
									}),
									(0, w.spread)(
										g,
										(0, E.mergeProps)(
											{
												get class() {
													return (
														"cursor-expanding-text-area" +
														(r.class ? ` ${r.class}` : "")
													);
												},
												get value() {
													return u();
												},
												get rows() {
													return r.defaultRows ?? 1;
												},
												get placeholder() {
													return r.placeholder;
												},
												get style() {
													return { ...r.style };
												},
												get disabled() {
													return r.disabled;
												},
											},
											() => r.extras ?? [],
										),
										!1,
										!1,
									),
									g
								);
							})()
						);
					};
				e.$wfd = m;
			},
		),
		define(
			de[818],
			he([1, 0, 2, 2, 2, 2, 13, 7, 182, 317, 95]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tbc = h),
					(d = mt(d));
				const a = (0, t.template)('<span class="monaco-highlighted-label">');
				function h(c) {
					let n, g;
					const p = (f, b = []) => {
							let s = 0,
								l = 0;
							return f.replace(/\r\n|\r|\n/g, (y, $) => {
								(l =
									y ===
									`\r
`
										? -1
										: 0),
									($ += s);
								for (const v of b)
									v.end <= $ ||
										(v.start >= $ && (v.start += l),
										v.end >= $ && (v.end += l));
								return (s += l), "\u23CE";
							});
						},
						o = () => {
							if (!n) return;
							const f = c.escapeNewLines ? p(c.text, c.highlights) : c.text,
								b = c.highlights || [],
								s = [];
							let l = 0;
							for (const y of b) {
								if (y.end === y.start) continue;
								if (l < y.start) {
									const S = f.substring(l, y.start);
									c.supportIcons ? s.push(...(0, m.$Sib)(S)) : s.push(S),
										(l = y.start);
								}
								const $ = f.substring(l, y.end),
									v = d.$(
										"span.highlight",
										void 0,
										...(c.supportIcons ? (0, m.$Sib)($) : [$]),
									);
								s.push(v), (l = y.end);
							}
							if (l < f.length) {
								const y = f.substring(l);
								c.supportIcons ? s.push(...(0, m.$Sib)(y)) : s.push(y);
							}
							d.$hhb(n, ...s);
						};
					return (
						(0, C.createEffect)(() => {
							if ((o(), c.hoverDelegate?.showNativeHover))
								n && (n.title = c.title || "");
							else if (c.title) {
								const f = c.hoverDelegate || (0, u.$cib)("mouse");
								g?.dispose(),
									(g = (0, r.$1ib)().setupManagedHover(f, n, c.title));
							}
						}),
						(0, C.onCleanup)(() => {
							g?.dispose();
						}),
						(() => {
							const f = a(),
								b = n;
							return (
								typeof b == "function" ? (0, E.use)(b, f) : (n = f),
								(0, w.effect)((s) => (0, i.style)(f, { ...c.style }, s)),
								f
							);
						})()
					);
				}
			},
		),
		