define(
			de[1583],
			he([
				1, 0, 7, 114, 105, 183, 268, 292, 50, 14, 26, 27, 222, 3, 12, 4, 2238,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Oob = void 0),
					(g = mt(g));
				class p extends c.$1c {
					constructor(f, b, s, l) {
						super(),
							(this.w = f),
							(this.y = b),
							(this.z = l),
							(this.c = this.w.appendChild(
								(0, t.$)(".monaco-dialog-modal-block.dimmed"),
							)),
							(this.b = this.c.appendChild((0, t.$)(".dialog-shadow"))),
							(this.a = this.b.appendChild((0, t.$)(".monaco-dialog-box"))),
							this.a.setAttribute("role", "dialog"),
							(this.a.tabIndex = -1),
							(0, t.hide)(this.a),
							(this.u = l.buttonStyles),
							Array.isArray(s) && s.length > 0
								? (this.t = s)
								: this.z.disableDefaultAction
									? (this.t = [])
									: (this.t = [g.localize(2, null)]);
						const y = this.a.appendChild((0, t.$)(".dialog-buttons-row"));
						this.f = y.appendChild((0, t.$)(".dialog-buttons"));
						const $ = this.a.appendChild((0, t.$)(".dialog-message-row"));
						if (
							((this.j = $.appendChild(
								(0, t.$)("#monaco-dialog-icon.dialog-icon"),
							)),
							this.j.setAttribute("aria-label", this.C()),
							(this.h = $.appendChild((0, t.$)(".dialog-message-container"))),
							this.z.detail || this.z.renderBody)
						) {
							const I = this.h
								.appendChild((0, t.$)(".dialog-message"))
								.appendChild(
									(0, t.$)("#monaco-dialog-message-text.dialog-message-text"),
								);
							I.innerText = this.y;
						}
						if (
							((this.g = this.h.appendChild(
								(0, t.$)("#monaco-dialog-message-detail.dialog-message-detail"),
							)),
							this.z.detail || !this.z.renderBody
								? (this.g.innerText = this.z.detail ? this.z.detail : b)
								: (this.g.style.display = "none"),
							this.z.renderBody)
						) {
							const S = this.h.appendChild(
								(0, t.$)("#monaco-dialog-message-body.dialog-message-body"),
							);
							this.z.renderBody(S);
							for (const I of this.h.querySelectorAll("a")) I.tabIndex = 0;
						}
						if (
							(this.z.inputs
								? (this.s = this.z.inputs.map((S) => {
										const I = this.h.appendChild(
												(0, t.$)(".dialog-message-input"),
											),
											T = this.D(
												new d.$Mob(I, void 0, {
													placeholder: S.placeholder,
													type: S.type ?? "text",
													inputBoxStyles: l.inputBoxStyles,
												}),
											);
										return S.value && (T.value = S.value), T;
									}))
								: (this.s = []),
							this.z.checkboxLabel)
						) {
							const S = this.h.appendChild((0, t.$)(".dialog-checkbox-row")),
								I = (this.m = this.D(
									new C.$9ib(
										this.z.checkboxLabel,
										!!this.z.checkboxChecked,
										l.checkboxStyles,
									),
								));
							S.appendChild(I.domNode);
							const T = S.appendChild((0, t.$)(".dialog-checkbox-message"));
							(T.innerText = this.z.checkboxLabel),
								this.D(
									(0, t.$0fb)(T, t.$$gb.CLICK, () => (I.checked = !I.checked)),
								);
						}
						const v = this.a.appendChild((0, t.$)(".dialog-toolbar-row"));
						(this.n = v.appendChild((0, t.$)(".dialog-toolbar"))), this.F();
					}
					C() {
						let f = g.localize(3, null);
						switch (this.z.type) {
							case "error":
								f = g.localize(4, null);
								break;
							case "warning":
								f = g.localize(5, null);
								break;
							case "pending":
								f = g.localize(6, null);
								break;
							case "none":
							case "info":
							case "question":
							default:
								break;
						}
						return f;
					}
					updateMessage(f) {
						this.g.innerText = f;
					}
					async show() {
						return (
							(this.r = this.w.ownerDocument.activeElement),
							new Promise((f) => {
								(0, t.$9fb)(this.f);
								const b = (this.q = this.D(new E.$rob(this.f))),
									s = this.G(this.t, this.z.cancelId);
								s.forEach(($, v) => {
									const S = s[v].index === 0,
										I = this.z.buttonDetails
											? this.D(
													b.addButtonWithDescription({
														secondary: !S,
														...this.u,
													}),
												)
											: this.D(b.addButton({ secondary: !S, ...this.u }));
									(I.label = (0, h.$DO)(s[v].label, !0)),
										I instanceof E.$qob &&
											(I.description = this.z.buttonDetails[s[v].index]),
										this.D(
											I.onDidClick((T) => {
												T && t.$ahb.stop(T),
													f({
														button: s[v].index,
														checkboxChecked: this.m ? this.m.checked : void 0,
														values:
															this.s.length > 0
																? this.s.map((P) => P.value)
																: void 0,
													});
											}),
										);
								});
								const l = (0, t.getWindow)(this.w);
								this.D(
									(0, t.$0fb)(
										l,
										"keydown",
										($) => {
											const v = new i.$7fb($);
											if (
												(v.equals(a.KeyMod.Alt) && v.preventDefault(),
												v.equals(a.KeyCode.Enter))
											) {
												this.s.some((I) => I.hasFocus()) &&
													(t.$ahb.stop($),
													f({
														button:
															s.find((I) => I.index !== this.z.cancelId)
																?.index ?? 0,
														checkboxChecked: this.m ? this.m.checked : void 0,
														values:
															this.s.length > 0
																? this.s.map((I) => I.value)
																: void 0,
													}));
												return;
											}
											if (v.equals(a.KeyCode.Space)) return;
											let S = !1;
											if (
												v.equals(a.KeyCode.Tab) ||
												v.equals(a.KeyCode.RightArrow) ||
												v.equals(a.KeyMod.Shift | a.KeyCode.Tab) ||
												v.equals(a.KeyCode.LeftArrow)
											) {
												const I = [];
												let T = -1;
												if (this.h) {
													const P = this.h.querySelectorAll("a");
													for (const k of P)
														I.push(k), (0, t.$Kgb)(k) && (T = I.length - 1);
												}
												for (const P of this.s)
													I.push(P), P.hasFocus() && (T = I.length - 1);
												if (
													(this.m &&
														(I.push(this.m),
														this.m.hasFocus() && (T = I.length - 1)),
													this.q)
												)
													for (const P of this.q.buttons)
														I.push(P), P.hasFocus() && (T = I.length - 1);
												if (
													v.equals(a.KeyCode.Tab) ||
													v.equals(a.KeyCode.RightArrow)
												) {
													T === -1 && (T = 0);
													const P = (T + 1) % I.length;
													I[P].focus();
												} else {
													T === -1 && (T = I.length);
													let P = T - 1;
													P === -1 && (P = I.length - 1), I[P].focus();
												}
												S = !0;
											}
											S
												? t.$ahb.stop($, !0)
												: this.z.keyEventProcessor &&
													this.z.keyEventProcessor(v);
										},
										!0,
									),
								),
									this.D(
										(0, t.$0fb)(
											l,
											"keyup",
											($) => {
												t.$ahb.stop($, !0);
												const v = new i.$7fb($);
												!this.z.disableCloseAction &&
													v.equals(a.KeyCode.Escape) &&
													f({
														button: this.z.cancelId || 0,
														checkboxChecked: this.m ? this.m.checked : void 0,
													});
											},
											!0,
										),
									),
									this.D(
										(0, t.$0fb)(
											this.a,
											"focusout",
											($) => {
												$.relatedTarget &&
													this.a &&
													((0, t.$Bgb)($.relatedTarget, this.a) ||
														((this.r = $.relatedTarget),
														$.target &&
															($.target.focus(), t.$ahb.stop($, !0))));
											},
											!1,
										),
									);
								const y = "codicon-modifier-spin";
								if (
									(this.j.classList.remove(
										...u.ThemeIcon.asClassNameArray(r.$ak.dialogError),
										...u.ThemeIcon.asClassNameArray(r.$ak.dialogWarning),
										...u.ThemeIcon.asClassNameArray(r.$ak.dialogInfo),
										...u.ThemeIcon.asClassNameArray(r.$ak.loading),
										y,
									),
									this.z.icon)
								)
									this.j.classList.add(
										...u.ThemeIcon.asClassNameArray(this.z.icon),
									);
								else
									switch (this.z.type) {
										case "error":
											this.j.classList.add(
												...u.ThemeIcon.asClassNameArray(r.$ak.dialogError),
											);
											break;
										case "warning":
											this.j.classList.add(
												...u.ThemeIcon.asClassNameArray(r.$ak.dialogWarning),
											);
											break;
										case "pending":
											this.j.classList.add(
												...u.ThemeIcon.asClassNameArray(r.$ak.loading),
												y,
											);
											break;
										case "none":
											this.j.classList.add("no-codicon");
											break;
										case "info":
										case "question":
										default:
											this.j.classList.add(
												...u.ThemeIcon.asClassNameArray(r.$ak.dialogInfo),
											);
											break;
									}
								if (!this.z.disableCloseAction) {
									const $ = this.D(new w.$eib(this.n, {})),
										v = this.D(
											new m.$rj(
												"dialog.close",
												g.localize(7, null),
												u.ThemeIcon.asClassName(r.$ak.dialogClose),
												!0,
												async () => {
													f({
														button: this.z.cancelId || 0,
														checkboxChecked: this.m ? this.m.checked : void 0,
													});
												},
											),
										);
									$.push(v, { icon: !0, label: !1 });
								}
								this.F(),
									this.a.setAttribute("aria-modal", "true"),
									this.a.setAttribute(
										"aria-labelledby",
										"monaco-dialog-icon monaco-dialog-message-text",
									),
									this.a.setAttribute(
										"aria-describedby",
										"monaco-dialog-icon monaco-dialog-message-text monaco-dialog-message-detail monaco-dialog-message-body",
									),
									(0, t.show)(this.a),
									this.s.length > 0
										? (this.s[0].focus(), this.s[0].select())
										: s.forEach(($, v) => {
												$.index === 0 && b.buttons[v].focus();
											});
							})
						);
					}
					F() {
						const f = this.z.dialogStyles,
							b = f.dialogForeground,
							s = f.dialogBackground,
							l = f.dialogShadow ? `0 0px 8px ${f.dialogShadow}` : "",
							y = f.dialogBorder ? `1px solid ${f.dialogBorder}` : "",
							$ = f.textLinkForeground;
						if (
							((this.b.style.boxShadow = l),
							(this.a.style.color = b ?? ""),
							(this.a.style.backgroundColor = s ?? ""),
							(this.a.style.border = y),
							$)
						)
							for (const S of this.h.getElementsByTagName("a"))
								S.style.color = $;
						let v;
						switch (this.z.type) {
							case "error":
								v = f.errorIconForeground;
								break;
							case "warning":
								v = f.warningIconForeground;
								break;
							default:
								v = f.infoIconForeground;
								break;
						}
						v && (this.j.style.color = v);
					}
					dispose() {
						super.dispose(),
							this.c && (this.c.remove(), (this.c = void 0)),
							this.r &&
								(0, t.$Bgb)(this.r, this.w.ownerDocument.body) &&
								(this.r.focus(), (this.r = void 0));
					}
					G(f, b) {
						const s = f.map((l, y) => ({ label: l, index: y }));
						if (f.length < 2) return s;
						if (n.$m || n.$n) {
							if (typeof b == "number" && s[b]) {
								const l = s.splice(b, 1)[0];
								s.splice(1, 0, l);
							}
							s.reverse();
						} else if (n.$l && typeof b == "number" && s[b]) {
							const l = s.splice(b, 1)[0];
							s.push(l);
						}
						return s;
					}
				}
				e.$Oob = p;
			},
		),
		