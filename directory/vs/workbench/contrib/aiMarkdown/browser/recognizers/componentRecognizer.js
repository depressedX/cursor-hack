define(de[4128], he([1, 0, 2, 236, 36]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$X$b = void 0);
			const E = (0, t.template)('<div class="markdown-component">');
			e.$X$b = {
				elementType: i.MarkdownElementType.COMPONENT,
				start: (C, d, m, r) => {
					if (C[C.length - 1].type !== i.MarkdownElementType.SECTION)
						return { state: "failed" };
					const a = r.markdownProps.components?.map((f) => f.regex);
					if (a === void 0 || a.length === 0) return { state: "failed" };
					const c = /^\[\[\[([a-zA-Z0-9_]+)\]\]\]/.exec(d);
					if (c)
						return a.some((f) => f.test(c[1]))
							? {
									state: "success",
									length: c[0].length,
									elementType: i.MarkdownElementType.COMPONENT,
									startOrEnd: "start",
								}
							: { state: "failed" };
					const g = /^\[{1,3}/.exec(d);
					if (g && g[0].length === d.length) return { state: "possible" };
					const o = /^\[\[\[([a-zA-Z0-9_]+)\]{0,3}/.exec(d);
					return o && o[0].length === d.length
						? { state: "possible" }
						: { state: "failed" };
				},
				end: (C, d) =>
					C[C.length - 1].type === i.MarkdownElementType.COMPONENT
						? {
								state: "success",
								length: 0,
								elementType: i.MarkdownElementType.COMPONENT,
								startOrEnd: "end",
							}
						: { state: "failed" },
				createElement: (C, d, m, r, u) => {
					const a = d.slice(3, -3);
					if (u.components === void 0) return;
					const h = u.components.map((b) => b.regex);
					if (h === void 0 || h.length === 0) return;
					const c = h.findIndex((b) => b.test(a));
					if (c === -1) return;
					const n = u.components[c],
						g = (() => {
							const b = E();
							return b.style.setProperty("width", "100%"), b;
						})(),
						p = (0, w.$ndc)(() => n.render(a), g, r.instantiationService);
					m.push(p);
					const o = { type: i.MarkdownElementType.COMPONENT, ref: g };
					C[C.length - 1].ref.appendChild(g), C.push(o);
				},
			};
		}),
		define(
			de[4129],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 7, 236, 4127, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1$b = void 0);
				const c = (0, t.template)("<section>"),
					n = (0, t.template)('<div class="markdown-section-toolbar">');
				e.$1$b = {
					elementType: u.MarkdownElementType.SECTION,
					start: (g, p) =>
						g.length === 1 && g[0].type === u.MarkdownElementType.ROOT
							? {
									state: "success",
									length: 0,
									elementType: u.MarkdownElementType.SECTION,
									startOrEnd: "start",
								}
							: { state: "failed" },
					end: (
						g,
						p,
						{ markdownProps: o, usedLength: f, sectionStarters: b },
					) => {
						let s = g.length - 1;
						for (
							;
							g.at(s)?.type === u.MarkdownElementType.ITALICS_TEXT ||
							g.at(s)?.type === u.MarkdownElementType.BOLD_TEXT;
						)
							s--;
						const l = g.at(s);
						if (l?.type !== u.MarkdownElementType.SECTION)
							return { state: "failed" };
						if (/^\n/.exec(p))
							return {
								state: "success",
								length: 1,
								elementType: u.MarkdownElementType.SECTION,
								startOrEnd: "end",
							};
						if (
							Array.from(l?.ref.childNodes ?? []).filter(
								(P) =>
									!(
										(0, r.$Ygb)(P) &&
										P.classList.contains("markdown-section-toolbar")
									),
							).length === 0
						)
							return { state: "failed" };
						const I = /^\n\n/.exec(p),
							T = b.find((P) => {
								const k = P.start(g, p, !1, {
									markdownProps: o,
									usedLength: f,
								});
								return k.state === "success" || k.state === "possible";
							});
						return I || T
							? {
									state: "success",
									length: 0,
									elementType: u.MarkdownElementType.SECTION,
									startOrEnd: "end",
								}
							: { state: "failed" };
					},
					createElement: (g, p, o, f, b) => {
						const s = g[0].ref.children.length,
							l = (() => {
								const v = c();
								return (
									(0, d.effect)(
										(S) => {
											const I = (0, u.$70b)(s, b.chatExtras?.bubbleId ?? ""),
												T = `markdown-section ${b.shouldFade ? "chat-fade-in" : ""}`,
												P = b.showSectionToolbar
													? {}
													: { background: "transparent", padding: 0 };
											return (
												I !== S._v$ &&
													(0, C.setAttribute)(v, "id", (S._v$ = I)),
												T !== S._v$2 && (0, E.className)(v, (S._v$2 = T)),
												(S._v$3 = (0, w.style)(v, P, S._v$3)),
												S
											);
										},
										{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
									),
									v
								);
							})(),
							y = {
								type: u.MarkdownElementType.SECTION,
								rawText: "",
								ref: l,
								endElementHook: () => {
									if (
										(l.setAttribute("data-markdown-raw", y.rawText),
										l.setAttribute("data-section-index", s.toString()),
										!b.showSectionToolbar || !b.canQuoteMessages)
									)
										return "";
									let v = null,
										S = null,
										I = 0,
										T = 0;
									const P = [],
										k = (0, r.$Ogb)();
									for (let M = 1; M < l.childNodes.length; M++) {
										const N = l.childNodes[M];
										if (N.nodeName !== "BR") {
											if (
												N.nodeName !== "#text" &&
												!N.classList.contains("markdown-block-code") &&
												!N.classList.contains(
													"markdown-code-outer-container",
												) &&
												!N.classList.contains("markdown-block-code-slash-edit")
											) {
												const R =
													k.getComputedStyle(N).marginTop ||
													u.$80b[N.nodeName]?.top;
												R && (T += parseInt(R)), (N.style.marginTop = "0px");
											} else if (N.nodeValue?.replace(/\s/g, "") === "")
												continue;
											v = N;
											break;
										}
									}
									for (let M = l.childNodes.length - 1; M >= 1; M--) {
										const N = l.childNodes[M];
										if (N.nodeName !== "BR") {
											if (
												N.nodeName !== "#text" &&
												!N.classList.contains("markdown-block-code") &&
												!N.classList.contains(
													"markdown-code-outer-container",
												) &&
												!N.classList.contains("markdown-block-code-slash-edit")
											) {
												const R =
													k.getComputedStyle(N).marginBottom ||
													u.$80b[N.nodeName]?.bottom;
												R && (I += parseInt(R)), (N.style.marginBottom = "0px");
											} else if (N.nodeValue?.replace(/\s/g, "") === "")
												continue;
											S = N;
											break;
										}
									}
									let L = !1;
									if (v || S) {
										for (const M of P) M.style.display = "none";
										if (
											(T > 0 && (l.style.marginTop = T + 6 + "px"),
											I > 0 && (l.style.marginBottom = I + 6 + "px"),
											v)
										) {
											const M = l.querySelector(
												".markdown-section-toolbar-internal",
											);
											v.classList?.contains("markdown-block-code") ||
											v.classList?.contains(
												"composer-markdown-codeblock-header",
											) ||
											v.classList?.contains("markdown-code-outer-container")
												? ((L = !0),
													S !== v && (v.style.marginBottom = "0.8rem"))
												: v.classList?.contains(
														"markdown-block-code-slash-edit",
													) && ((L = !0), (l.style.paddingTop = "0px"));
										}
									} else
										l.childNodes.length === 2
											? ((l.style.marginTop = 0.24 + "em"),
												(l.style.marginBottom = 0.24 + "em"),
												(l.style.height = "0px"))
											: l.childNodes.length === 1 && (l.style.display = "none"),
											(l.style.pointerEvents = "none"),
											(l.style.opacity = "0");
									const D = l.querySelector(
										".markdown-section-toolbar-internal",
									);
									return (
										D &&
											(L ? (D.style.display = "none") : (D.style.display = "")),
										""
									);
								},
							};
						if (b.showSectionToolbar) {
							let S = function () {
								return (0, i.createComponent)(a.$Z$b, {
									markdownProps: b,
									rawText: () => y.rawText,
									sectionIndex: s,
								});
							};
							const v = n();
							l.appendChild(v),
								o.push((0, h.$ndc)(S, v, f.instantiationService)),
								(0, m.createRoot)((I) => {
									o.push({ dispose: () => I() });
								});
						}
						l.classList.add("markdown-section"),
							g[g.length - 1].ref.appendChild(l),
							g.push(y);
					},
				};
			},
		),
		