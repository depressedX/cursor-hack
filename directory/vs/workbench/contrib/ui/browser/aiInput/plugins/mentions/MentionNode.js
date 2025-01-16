define(de[816], he([1, 0, 164, 228, 310]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$2_b = void 0),
				(e.$createMentionNode = u),
				(e.$isMentionNode = a);
			function E(h) {
				const c = h.textContent;
				return c !== null ? { node: u(c, void 0) } : null;
			}
			function C(h) {
				if (h === w.TypeaheadOptionType.link) return { cursor: "pointer" };
			}
			const d = "background-color: rgba(24, 119, 232, 0.2)",
				m = "background-color: rgba(255, 223, 0, 0.2)";
			class r extends t.TextNode {
				static getType() {
					return "mention";
				}
				static clone(c) {
					return new r(
						c.__mention,
						c.__contextIntent,
						c.__text,
						c.__key,
						c.typeaheadType,
						c.metadata,
					);
				}
				static importJSON(c) {
					const n = u(
						c.mentionName,
						c.contextIntent ? i.$6B.fromJsonString(c.contextIntent) : void 0,
						void 0,
						void 0,
						void 0,
						c.storedKey,
					);
					return (
						n.setTextContent(c.text),
						n.setFormat(c.format),
						n.setDetail(c.detail),
						n.setMode(c.mode),
						n.setStyle(c.style),
						(n.metadata = c.metadata),
						c.typeaheadType && (n.typeaheadType = c.typeaheadType),
						n
					);
				}
				constructor(c, n, g, p, o, f, b) {
					const s = o && w.$t_b.includes(o);
					super(g ?? (s ? "/" : "@") + c, p),
						(this.storedKey = b ?? this.__key),
						(this.__mention = c),
						(this.__contextIntent = n),
						(this.metadata = f),
						(this.typeaheadType = o);
				}
				exportJSON() {
					return {
						...super.exportJSON(),
						mentionName: this.__mention,
						contextIntent: this.__contextIntent?.toJsonString(),
						type: "mention",
						typeaheadType: this.typeaheadType,
						storedKey: this.storedKey,
						version: 1,
						metadata: this.metadata,
					};
				}
				setContextIntent(c) {
					const n = this.getWritable();
					n.__contextIntent = c;
				}
				getContextIntent() {
					return this.getLatest().__contextIntent;
				}
				createDOM(c) {
					const n = this.typeaheadType && w.$t_b.includes(this.typeaheadType),
						g = super.createDOM(c);
					if (
						((g.style.cssText = n ? m : d),
						(g.className = "mention"),
						g.setAttribute("contenteditable", "false"),
						this.typeaheadType)
					) {
						const p = C(this.typeaheadType);
						if (p) for (const [o, f] of Object.entries(p)) g.style[o] = f;
						g.setAttribute("data-mention-name", this.__mention),
							g.setAttribute("data-mention-key", this.__key),
							g.setAttribute("data-typeahead-type", this.typeaheadType);
					}
					return g;
				}
				exportDOM() {
					const c = document.createElement("span");
					return (
						c.setAttribute("data-lexical-mention", "true"),
						(c.textContent = this.__text),
						{ element: c }
					);
				}
				isSegmented() {
					return !1;
				}
				static importDOM() {
					return {
						span: (c) =>
							c.hasAttribute("data-lexical-mention")
								? { conversion: E, priority: 1 }
								: null,
					};
				}
				isTextEntity() {
					return !0;
				}
				isToken() {
					return !0;
				}
			}
			e.$2_b = r;
			function u(h, c, n, g, p, o, f) {
				const b = new r(
					h,
					c,
					void 0,
					n,
					g,
					{ selection: p || void 0, selectedOption: f || void 0 },
					o,
				);
				return b.setMode("segmented").toggleDirectionless(), b;
			}
			function a(h) {
				return h instanceof r;
			}
		}),
		define(
			de[3191],
			he([1, 0, 2, 2, 2, 228, 14, 26, 47, 310]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$C_b = void 0);
				const u = (0, t.template)("<i>");
				e.$C_b = new r.$u_b(
					"Chat",
					(() => {
						const a = u();
						return (
							(0, w.effect)(() =>
								(0, i.className)(
									a,
									d.ThemeIcon.asClassName(C.$ak.commentDiscussion),
								),
							),
							a
						);
					})(),
					{
						case: "simple_mentions_handler",
						contextIntent: () => ({
							uuid: (0, m.$9g)(),
							type: E.ContextIntent_Type.USER_ADDED,
							intent: { case: "chatHistory", value: {} },
						}),
					},
					9.7,
				);
			},
		),
		define(
			de[3192],
			he([1, 0, 2, 2, 2, 228, 14, 26, 47, 310]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$B_b = void 0);
				const u = (0, t.template)("<i>");
				e.$B_b = new r.$u_b(
					"Definitions",
					(() => {
						const a = u();
						return (
							(0, w.effect)(() =>
								(0, i.className)(
									a,
									d.ThemeIcon.asClassName(C.$ak.symbolTypeParameter),
								),
							),
							a
						);
					})(),
					{
						case: "simple_mentions_handler",
						contextIntent: () => ({
							uuid: (0, m.$9g)(),
							type: E.ContextIntent_Type.USER_ADDED,
							intent: { case: "cmdKDefinitions", value: {} },
						}),
					},
					9.7,
				);
			},
		),
		define(
			de[3193],
			he([1, 0, 2, 2, 2, 228, 14, 26, 47, 310]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$D_b = void 0);
				const u = (0, t.template)("<i>");
				e.$D_b = new r.$u_b(
					"Definitions",
					(() => {
						const a = u();
						return (
							(0, w.effect)(() =>
								(0, i.className)(a, d.ThemeIcon.asClassName(C.$ak.repo)),
							),
							a
						);
					})(),
					{
						case: "simple_mentions_handler",
						contextIntent: () => ({
							uuid: (0, m.$9g)(),
							type: E.ContextIntent_Type.USER_ADDED,
							intent: { case: "commitNotes", value: {} },
						}),
					},
					9.7,
				);
			},
		),
		