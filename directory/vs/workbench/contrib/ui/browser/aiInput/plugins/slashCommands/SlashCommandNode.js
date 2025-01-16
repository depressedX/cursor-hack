define(de[1270], he([1, 0, 164, 1005]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$uac = void 0),
				(e.$createSlashCommandNode = d),
				(e.$isSlashCommandNode = m);
			function w(r) {
				const u = r.textContent;
				return u !== null ? { node: d(u, void 0) } : null;
			}
			const E = "background-color: rgba(24, 119, 232, 0.2)";
			class C extends t.TextNode {
				static getType() {
					return "slashCommand";
				}
				static clone(u) {
					return new C(u.__command, u.__text, u.__key);
				}
				static importJSON(u) {
					const a = d(u.commandName);
					return (
						a.setTextContent(u.text),
						a.setFormat(u.format),
						a.setDetail(u.detail),
						a.setMode(u.mode),
						a.setStyle(u.style),
						u.storedKey !== void 0 && (a.storedKey = u.storedKey),
						a
					);
				}
				constructor(u, a, h) {
					super(a ?? "/" + u, h),
						(this.__command = u),
						(this.storedKey = this.__key);
				}
				exportJSON() {
					return {
						...super.exportJSON(),
						commandName: this.__command,
						type: "slashCommand",
						storedKey: this.storedKey,
						version: 1,
					};
				}
				setContextIntent(u) {
					const a = this.getWritable();
					a.__contextIntent = u;
				}
				getContextIntent() {
					return this.getLatest().__contextIntent;
				}
				createDOM(u) {
					const a = super.createDOM(u);
					return (
						(a.style.cssText = E),
						(a.className = "slashCommand"),
						a.setAttribute("contenteditable", "false"),
						a
					);
				}
				exportDOM() {
					const u = document.createElement("span");
					return (
						u.setAttribute("data-lexical-slashCommand", "true"),
						(u.textContent = this.__text),
						{ element: u }
					);
				}
				isSegmented() {
					return !1;
				}
				static importDOM() {
					return {
						span: (u) =>
							u.hasAttribute("data-lexical-slashCommand")
								? { conversion: w, priority: 1 }
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
			e.$uac = C;
			function d(r, u) {
				const a = i.$n_b.includes(r) ? r : "unknown",
					h = new C(a, void 0, u);
				return h.setMode("segmented").toggleDirectionless(), h;
			}
			function m(r) {
				return r instanceof C;
			}
		}),
		define(
			de[3195],
			he([1, 0, 2, 2, 2, 1005, 26, 14]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yac = e.$xac = void 0);
				const m = (0, t.template)("<i>");
				(e.$xac = new E.$o_b(
					"Edit",
					(() => {
						const r = m();
						return (
							(0, w.effect)(() =>
								(0, i.className)(r, C.ThemeIcon.asClassName(d.$ak.flame)),
							),
							r
						);
					})(),
					{ case: "base_command", command: "edit" },
					9.7,
				)),
					(e.$yac = { edit: { typeaheadOption: e.$xac } });
			},
		),
		