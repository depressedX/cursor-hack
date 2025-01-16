define(de[3314], he([1, 0, 3313, 20, 807]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, i.$lK)(w.$ceb, t.$JVc, i.InstantiationType.Delayed);
		}),
		define(
			de[3315],
			he([
				1, 0, 6, 3, 189, 7, 24, 4, 10, 41, 1761, 32, 33, 53, 184, 1659, 1653,
				73, 23, 998, 1206, 291, 14, 26, 31,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uWc = void 0),
					(e.$vWc = P),
					(E = mt(E));
				var S;
				(function (N) {
					N.QuickFix = "quick-fix";
				})(S || (S = {}));
				const I = [
					S.QuickFix,
					u.DecorationSelector.Codicon,
					u.DecorationSelector.CommandDecoration,
					u.DecorationSelector.XtermDecoration,
				];
				let T = class extends i.$1c {
					constructor(A, R, O, B, U, z, F, x, H, q, V) {
						super(),
							(this.r = A),
							(this.s = R),
							(this.t = O),
							(this.u = B),
							(this.w = U),
							(this.z = z),
							(this.C = F),
							(this.F = x),
							(this.G = H),
							(this.H = q),
							(this.I = V),
							(this.a = new t.$re()),
							(this.onDidRequestRerunCommand = this.a.event),
							(this.g = new Map()),
							(this.q = new Set()),
							this.s.get(w.TerminalCapability.CommandDetection)
								? this.J()
								: this.D(
										this.s.onDidAddCapabilityType((K) => {
											K === w.TerminalCapability.CommandDetection && this.J();
										}),
									),
							this.D(
								this.t.onDidRegisterProvider((K) =>
									this.registerCommandFinishedListener(k(K)),
								),
							),
							this.t.extensionQuickFixes.then((K) => {
								for (const J of K) this.registerCommandSelector(J);
							}),
							this.D(
								this.t.onDidRegisterCommandSelector((K) =>
									this.registerCommandSelector(K),
								),
							),
							this.D(this.t.onDidUnregisterProvider((K) => this.g.delete(K)));
					}
					activate(A) {
						this.b = A;
					}
					showMenu() {
						if (!this.m) return;
						const A = this.m.quickFixes.map(
								(B) => new L(B, B.type, B.source, B.label, B.kind),
							),
							R = {
								allActions: A,
								hasAutoFix: !1,
								hasAIFix: !1,
								allAIFixes: !1,
								validActions: A,
								dispose: () => {},
							},
							O = {
								onSelect: async (B) => {
									B.action?.run(), this.H.hide(), this.M(B.action.id, !0);
								},
								onHide: () => {
									this.b?.focus();
								},
							};
						this.H.show(
							"quickFixWidget",
							!1,
							D(R.validActions, !0),
							O,
							this.m.anchor,
							this.m.parentElement,
						);
					}
					registerCommandSelector(A) {
						if (this.q.has(A.id)) return;
						const R = A.commandLineMatcher.toString(),
							O = this.g.get(R) || [];
						O.push({
							id: A.id,
							type: "unresolved",
							commandLineMatcher: A.commandLineMatcher,
							outputMatcher: A.outputMatcher,
							commandExitResult: A.commandExitResult,
							kind: A.kind,
						}),
							this.q.add(A.id),
							this.g.set(R, O);
					}
					registerCommandFinishedListener(A) {
						const R = A.commandLineMatcher.toString();
						let O = this.g.get(R) || [];
						(O = O.filter((B) => B.id !== A.id)), O.push(A), this.g.set(R, O);
					}
					J() {
						const A = this.b,
							R = this.s.get(w.TerminalCapability.CommandDetection);
						!A ||
							!R ||
							this.D(R.onCommandFinished(async (O) => await this.L(O, this.r)));
					}
					async L(A, R) {
						const O = this.b;
						if (!O || A.wasReplayed) return;
						A.command !== "" && this.n && this.M(this.n, !1);
						const B = async (z, F) => {
								if (F === void 0) return;
								const x = z.id;
								return (
									await this.G.activateByEvent(
										`onTerminalQuickFixRequest:${x}`,
									),
									this.t.providers
										.get(x)
										?.provideTerminalQuickFixes(
											A,
											F,
											{
												type: "resolved",
												commandLineMatcher: z.commandLineMatcher,
												outputMatcher: z.outputMatcher,
												commandExitResult: z.commandExitResult,
												kind: z.kind,
												id: z.id,
											},
											new h.$Ce().token,
										)
								);
							},
							U = await P(R, O, A, this.g, this.u, this.C, this.I, this.a, B);
						U && ((this.h = U), (this.n = this.h[0].id), this.N());
					}
					M(A, R) {
						this.F?.publicLog2("terminal/quick-fix", {
							quickFixId: A,
							ranQuickFix: R,
						}),
							this.j?.dispose(),
							(this.j = void 0),
							(this.h = void 0),
							(this.n = void 0);
					}
					N() {
						if (!this.b || !this.h) return;
						const A = this.b.registerMarker();
						if (!A) return;
						const R = this.b.registerDecoration({ marker: A, layer: "top" });
						if (!R) return;
						this.j = R;
						const O = this.h;
						if (!O) {
							R.dispose();
							return;
						}
						R?.onRender((B) => {
							const U = B.getBoundingClientRect(),
								z = { x: U.x, y: U.y, width: U.width, height: U.height };
							if (B.classList.contains(S.QuickFix)) {
								this.m && (this.m.anchor = z);
								return;
							}
							B.classList.add(...I);
							const F = O.every((H) => H.kind === "explain");
							F && B.classList.add("explainOnly"),
								B.classList.add(
									...$.ThemeIcon.asClassNameArray(
										F ? y.$ak.sparkle : y.$ak.lightBulb,
									),
								),
								(0, u.$9Hb)(this.w, B),
								this.z.playSignal(n.$Twb.terminalQuickFix);
							const x = B.closest(".xterm").parentElement;
							x &&
								((this.m = { quickFixes: O, anchor: z, parentElement: x }),
								this.D(E.$0fb(B, E.$$gb.CLICK, () => this.showMenu())));
						}),
							R.onDispose(() => (this.m = void 0)),
							(this.h = void 0);
					}
				};
				(e.$uWc = T),
					(e.$uWc = T =
						Ne(
							[
								j(2, b.$Eoc),
								j(3, v.$ek),
								j(4, m.$gj),
								j(5, n.$Owb),
								j(6, r.$7rb),
								j(7, a.$km),
								j(8, c.$q2),
								j(9, g.$xBb),
								j(10, o.$3N),
							],
							T,
						));
				async function P(N, A, R, O, B, U, z, F, x) {
					const H = new Set(),
						q = new Set(),
						V = [],
						G = R.command;
					for (const K of O.values())
						for (const J of K) {
							if (
								(J.commandExitResult === "success" && R.exitCode !== 0) ||
								(J.commandExitResult === "error" && R.exitCode === 0)
							)
								continue;
							let W;
							if (J.type === "resolved")
								W = await J.getQuickFixes(
									R,
									(0, p.$NHb)(A.buffer.active, R, A.cols, J.outputMatcher),
									J,
									new h.$Ce().token,
								);
							else if (J.type === "unresolved") {
								if (!x) throw new Error("No resolved fix provider");
								W = await x(
									J,
									J.outputMatcher
										? (0, p.$NHb)(A.buffer.active, R, A.cols, J.outputMatcher)
										: void 0,
								);
							} else if (J.type === "internal") {
								const X = G.match(J.commandLineMatcher);
								if (!X) continue;
								const Y = J.outputMatcher;
								let ie;
								if ((Y && (ie = R.getOutputMatch(Y)), !ie)) continue;
								const ne = {
									commandLineMatch: X,
									outputMatch: ie,
									commandLine: R.command,
								};
								W = J.getQuickFixes(ne);
							}
							if (W)
								for (const X of (0, C.$6b)(W)) {
									let Y;
									if ("type" in X) {
										switch (X.type) {
											case b.TerminalQuickFixType.TerminalCommand: {
												const ie = X;
												if (H.has(ie.terminalCommand)) continue;
												H.add(ie.terminalCommand);
												const ne = (0, d.localize)(
													10555,
													null,
													ie.terminalCommand,
												);
												Y = {
													type: b.TerminalQuickFixType.TerminalCommand,
													kind: J.kind,
													class: void 0,
													source: X.source,
													id: X.id,
													label: ne,
													enabled: !0,
													run: () => {
														F?.fire({
															command: ie.terminalCommand,
															shouldExecute: ie.shouldExecute ?? !0,
														});
													},
													tooltip: ne,
													command: ie.terminalCommand,
													shouldExecute: ie.shouldExecute,
												};
												break;
											}
											case b.TerminalQuickFixType.Opener: {
												const ie = X;
												if (!ie.uri) return;
												if (q.has(ie.uri.toString())) continue;
												q.add(ie.uri.toString());
												const ee =
														ie.uri.scheme === f.Schemas.http ||
														ie.uri.scheme === f.Schemas.https
															? encodeURI(ie.uri.toString(!0))
															: z.getUriLabel(ie.uri),
													_ = (0, d.localize)(10556, null, ee);
												Y = {
													source: X.source,
													id: X.id,
													label: _,
													type: b.TerminalQuickFixType.Opener,
													kind: J.kind,
													class: void 0,
													enabled: !0,
													run: () => U.open(ie.uri),
													tooltip: _,
													uri: ie.uri,
												};
												break;
											}
											case b.TerminalQuickFixType.Port: {
												const ie = X;
												Y = {
													source: "builtin",
													type: ie.type,
													kind: J.kind,
													id: ie.id,
													label: ie.label,
													class: ie.class,
													enabled: ie.enabled,
													run: () => {
														ie.run();
													},
													tooltip: ie.tooltip,
												};
												break;
											}
											case b.TerminalQuickFixType.VscodeCommand: {
												const ie = X;
												Y = {
													source: X.source,
													type: ie.type,
													kind: J.kind,
													id: ie.id,
													label: ie.title,
													class: void 0,
													enabled: !0,
													run: () => B.executeCommand(ie.id),
													tooltip: ie.title,
												};
												break;
											}
										}
										Y && V.push(Y);
									}
								}
						}
					return V.length > 0 ? V : void 0;
				}
				function k(N) {
					return {
						id: N.selector.id,
						type: "resolved",
						commandLineMatcher: N.selector.commandLineMatcher,
						outputMatcher: N.selector.outputMatcher,
						commandExitResult: N.selector.commandExitResult,
						kind: N.selector.kind,
						getQuickFixes: N.provider.provideTerminalQuickFixes,
					};
				}
				class L {
					constructor(A, R, O, B, U = "fix") {
						(this.action = A),
							(this.type = R),
							(this.source = O),
							(this.title = B),
							(this.kind = U),
							(this.disabled = !1);
					}
				}
				function D(N, A) {
					const R = [];
					R.push({
						kind: s.ActionListItemKind.Header,
						group: {
							kind: l.$GAb.QuickFix,
							title: (0, d.localize)(10557, null),
						},
					});
					for (const O of A ? N : N.filter((B) => !!B.action))
						!O.disabled &&
							O.action &&
							R.push({
								kind: s.ActionListItemKind.Action,
								item: O,
								group: {
									kind: l.$GAb.QuickFix,
									icon: M(O),
									title: O.action.label,
								},
								disabled: !1,
								label: O.title,
							});
					return R;
				}
				function M(N) {
					if (N.kind === "explain") return y.$ak.sparkle;
					switch (N.type) {
						case b.TerminalQuickFixType.Opener:
							if ("uri" in N.action && N.action.uri)
								return N.action.uri.scheme === f.Schemas.http ||
									N.action.uri.scheme === f.Schemas.https
									? y.$ak.linkExternal
									: y.$ak.goToFile;
						case b.TerminalQuickFixType.TerminalCommand:
							return y.$ak.run;
						case b.TerminalQuickFixType.Port:
							return y.$ak.debugDisconnect;
						case b.TerminalQuickFixType.VscodeCommand:
							return y.$ak.lightbulb;
					}
				}
			},
		),
		define(
			de[3316],
			he([1, 0, 4, 3, 8, 1786, 30, 60, 53]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$BYc = void 0),
					(t = mt(t));
				const r = C.$Io.as(d.Extensions.ViewsRegistry);
				class u extends i.$1c {
					constructor(c) {
						super(),
							(this.a = new Map()),
							c.setHandler((n, { added: g, removed: p }) => {
								for (const f of p)
									for (const b of f.value) this.a.get(b)?.dispose();
								const o = new Map();
								for (const f of g)
									for (const b of f.value) {
										const { group: s, order: l } = a(b, f),
											y = w.$Kj.deserialize(b.enablement),
											$ = E.$zYc[b.view] ?? b.view;
										let v = o.get($);
										v || ((v = new Map()), o.set($, v)),
											v.set(b, {
												content: b.contents,
												when: w.$Kj.deserialize(b.when),
												precondition: y,
												group: s,
												order: l,
											});
									}
								for (const [f, b] of o) {
									const s = r.registerViewWelcomeContent2(f, b);
									for (const [l, y] of s) this.a.set(l, y);
								}
							});
					}
				}
				e.$BYc = u;
				function a(h, c) {
					let n, g;
					if (h.group) {
						if (!(0, m.$t2)(c.description, "contribViewsWelcome"))
							return (
								c.collector.warn(
									t.localize(11648, null, c.description.identifier.value),
								),
								{ group: n, order: g }
							);
						const p = h.group.lastIndexOf("@");
						p > 0
							? ((n = h.group.substr(0, p)),
								(g = Number(h.group.substr(p + 1)) || void 0))
							: (n = h.group);
					}
					return { group: n, order: g };
				}
			},
		),
		define(
			de[1811],
			he([
				1, 0, 203, 159, 195, 37, 9, 3, 217, 32, 1277, 41, 125, 206, 5, 39, 4,
				21, 8, 10, 28, 31, 38, 35, 592, 12, 82, 40, 7, 66, 53, 3216, 2533,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
			) {
				"use strict";
				var D;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rYc = e.$qYc = void 0),
					(E = mt(E)),
					(e.$qYc = new f.$5j("interactivePlaygroundFocus", !1));
				const M = (0, p.localize)(11662, null),
					N = "walkThroughEditorViewState";
				let A = class extends m.$JEb {
					static {
						D = this;
					}
					static {
						this.ID = "workbench.editor.walkThroughPart";
					}
					constructor(O, B, U, z, F, x, H, q, V, G, K, J, W) {
						super(D.ID, O, B, U, q),
							(this.s = F),
							(this.u = x),
							(this.$ = H),
							(this.cb = V),
							(this.db = G),
							(this.eb = K),
							(this.fb = J),
							(this.a = new d.$Zc()),
							(this.b = []),
							(this.g = e.$qYc.bindTo(this.cb)),
							(this.r = this.ab(W, z, N));
					}
					Y(O) {
						(this.c = document.createElement("div")),
							this.c.classList.add("welcomePageFocusElement"),
							(this.c.tabIndex = 0),
							(this.c.style.outlineStyle = "none"),
							(this.f = new t.$8hb(this.c, {
								horizontal: w.ScrollbarVisibility.Auto,
								vertical: w.ScrollbarVisibility.Auto,
							})),
							this.a.add(this.f),
							O.appendChild(this.f.getDomNode()),
							this.lb(),
							this.mb(),
							this.a.add(this.f.onScroll((B) => this.hb()));
					}
					hb() {
						const O = this.f.getScrollDimensions(),
							B = this.f.getScrollPosition(),
							U = O.scrollHeight;
						if (U && this.input instanceof u.$oYc) {
							const z = B.scrollTop,
								F = O.height;
							this.input.relativeScrollPosition(z / U, (z + F) / U);
						}
					}
					ib(O) {
						O.preventDefault(), O.stopPropagation();
						const B = this.f.getScrollPosition();
						this.f.setScrollPosition({
							scrollTop: B.scrollTop - O.translationY,
						});
					}
					jb(O, B, U, z) {
						return (
							O.addEventListener(B, U, z),
							(0, d.$Yc)(() => {
								O.removeEventListener(B, U, z);
							})
						);
					}
					lb() {
						this.a.add(
							this.jb(this.c, "mousedown", (O) => {
								this.focus();
							}),
						),
							this.a.add(
								this.jb(this.c, "focus", (O) => {
									this.g.set(!0);
								}),
							),
							this.a.add(
								this.jb(this.c, "blur", (O) => {
									this.g.reset();
								}),
							),
							this.a.add(
								this.jb(this.c, "focusin", (O) => {
									if (
										(0, P.$Ygb)(O.target) &&
										O.target.classList.contains("zone-widget-container")
									) {
										const B = this.f.getScrollPosition();
										(this.c.scrollTop = B.scrollTop),
											(this.c.scrollLeft = B.scrollLeft);
									}
									(0, P.$Ygb)(O.target) && (this.j = O.target);
								}),
							);
					}
					mb() {
						this.c.addEventListener("click", (O) => {
							for (let B = O.target; B; B = B.parentNode)
								if ((0, P.$Zgb)(B) && B.href) {
									const U =
										B.ownerDocument.getElementsByTagName("base")[0] ||
										this.window.location;
									if (U && B.href.indexOf(U.href) >= 0 && B.hash) {
										const z = this.c.querySelector(B.hash),
											F = this.c.firstElementChild;
										if (z && F) {
											const x = z.getBoundingClientRect().top - 20,
												H = F.getBoundingClientRect().top;
											this.f.setScrollPosition({ scrollTop: x - H });
										}
									} else this.nb(C.URI.parse(B.href));
									O.preventDefault();
									break;
								} else if ((0, P.$4gb)(B)) {
									const U = B.getAttribute("data-href");
									U && this.nb(C.URI.parse(U));
									break;
								} else if (B === O.currentTarget) break;
						});
					}
					nb(O) {
						if (
							O.scheme === "command" &&
							O.path === "git.clone" &&
							!l.$fk.getCommand("git.clone")
						) {
							this.eb.info((0, p.localize)(11663, null));
							return;
						}
						this.u.open(this.ob(O), { allowCommands: !0 });
					}
					ob(O) {
						if (O.scheme !== "command" || !(this.input instanceof u.$oYc))
							return O;
						const B = O.query ? JSON.parse(O.query) : {};
						return (
							(B.from = this.input.getTelemetryFrom()),
							O.with({ query: JSON.stringify(B) })
						);
					}
					layout(O) {
						(this.m = O),
							(0, P.size)(this.c, O.width, O.height),
							this.pb(),
							this.b.forEach((U) => {
								U instanceof c.$rwb && U.layout();
							});
						const B = this.input instanceof u.$oYc && this.input;
						B && B.layout && B.layout(O), this.f.scanDomNode();
					}
					pb() {
						const O = this.c.firstElementChild;
						this.m &&
							O &&
							O.classList.toggle("max-height-685px", this.m.height <= 685);
					}
					focus() {
						super.focus();
						let O = this.c.ownerDocument.activeElement;
						for (; O && O !== this.c; ) O = O.parentElement;
						O || (this.j || this.c).focus(), this.g.set(!0);
					}
					arrowUp() {
						const O = this.f.getScrollPosition();
						this.f.setScrollPosition({ scrollTop: O.scrollTop - this.qb() });
					}
					arrowDown() {
						const O = this.f.getScrollPosition();
						this.f.setScrollPosition({ scrollTop: O.scrollTop + this.qb() });
					}
					qb() {
						let O = this.db.getValue("editor.fontSize");
						return (typeof O != "number" || O < 1) && (O = 12), 3 * O;
					}
					pageUp() {
						const O = this.f.getScrollDimensions(),
							B = this.f.getScrollPosition();
						this.f.setScrollPosition({ scrollTop: B.scrollTop - O.height });
					}
					pageDown() {
						const O = this.f.getScrollDimensions(),
							B = this.f.getScrollPosition();
						this.f.setScrollPosition({ scrollTop: B.scrollTop + O.height });
					}
					setInput(O, B, U, z) {
						const F = new d.$Zc();
						return (
							this.b.push(F),
							(this.c.innerText = ""),
							super
								.setInput(O, B, U, z)
								.then(
									async () => (
										O.resource.path.endsWith(".md") &&
											(await this.fb.whenInstalledExtensionsRegistered()),
										O.resolve()
									),
								)
								.then((x) => {
									if (z.isCancellationRequested) return;
									const H = x.main;
									if (!O.resource.path.endsWith(".md")) {
										(0, P.$Dhb)(this.c, H),
											this.pb(),
											this.tb(),
											this.b.push(
												this.$.onDidUpdateKeybindings(() => this.tb()),
											),
											O.onReady?.(this.c.firstElementChild, F),
											this.f.scanDomNode(),
											this.wb(O),
											this.hb();
										return;
									}
									const q = document.createElement("div");
									q.classList.add("walkThroughContent");
									const V = this.sb(H);
									(0, P.$Dhb)(q, V),
										this.c.appendChild(q),
										x.snippets.forEach((G, K) => {
											const J = G.textEditorModel;
											if (!J) return;
											const W = `snippet-${J.uri.fragment}`,
												X = q.querySelector(`#${W.replace(/[\\.]/g, "\\$&")}`),
												Y = this.rb(J.getLanguageId()),
												ie = {
													target:
														this.input instanceof u.$oYc
															? this.input.getTelemetryFrom()
															: void 0,
													snippet: K,
												},
												ne = this.s.createInstance(c.$rwb, X, Y, {
													telemetryData: ie,
												});
											ne.setModel(J), this.b.push(ne);
											const ee = (_) => {
												const te = ne.getOption(y.EditorOption.lineHeight),
													Q = `${Math.max(J.getLineCount() + 1, 4) * te}px`;
												X.style.height !== Q &&
													((X.style.height = Q),
													ne.layout(),
													_ || this.f.scanDomNode());
											};
											ee(!0),
												this.b.push(ne.onDidChangeModelContent(() => ee(!1))),
												this.b.push(
													ne.onDidChangeCursorPosition((_) => {
														const te = this.c.firstElementChild;
														if (te) {
															const Q = X.getBoundingClientRect().top,
																Z = te.getBoundingClientRect().top,
																se = ne.getOption(y.EditorOption.lineHeight),
																re = Q + (_.position.lineNumber - 1) * se - Z,
																le = re + se,
																oe = this.f.getScrollDimensions(),
																pe = this.f.getScrollPosition().scrollTop,
																$e = oe.height;
															pe > re
																? this.f.setScrollPosition({ scrollTop: re })
																: pe < le - $e &&
																	this.f.setScrollPosition({
																		scrollTop: le - $e,
																	});
														}
													}),
												),
												this.b.push(
													this.db.onDidChangeConfiguration((_) => {
														_.affectsConfiguration("editor") &&
															G.textEditorModel &&
															ne.updateOptions(
																this.rb(G.textEditorModel.getLanguageId()),
															);
													}),
												);
										}),
										this.pb(),
										this.ub(),
										this.b.push(
											this.db.onDidChangeConfiguration((G) => {
												G.affectsConfiguration("editor.multiCursorModifier") &&
													this.ub();
											}),
										),
										O.onReady?.(q, F),
										this.f.scanDomNode(),
										this.wb(O),
										this.hb(),
										this.b.push(i.$Qhb.addTarget(q)),
										this.b.push(
											(0, P.$0fb)(q, i.EventType.Change, (G) => this.ib(G)),
										);
								})
						);
					}
					rb(O) {
						const B = (0, I.$vo)(
							this.db.getValue("editor", { overrideIdentifier: O }),
						);
						return {
							...((0, s.$ng)(B) ? B : Object.create(null)),
							scrollBeyondLastLine: !1,
							scrollbar: {
								verticalScrollbarSize: 14,
								horizontal: "auto",
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								alwaysConsumeMouseWheel: !1,
							},
							overviewRulerLanes: 3,
							fixedOverflowWidgets: !1,
							lineNumbersMinChars: 1,
							minimap: { enabled: !1 },
						};
					}
					sb(O) {
						return O.replace(/kb\(([a-z.\d\-]+)\)/gi, (B, U) => {
							const z = this.$.lookupKeybinding(U),
								F = z ? z.getLabel() || "" : M;
							return `<span class="shortcut">${E.$nf(F)}</span>`;
						});
					}
					tb() {
						const O = this.c.querySelectorAll(".shortcut[data-command]");
						Array.prototype.forEach.call(O, (U) => {
							const z = U.getAttribute("data-command"),
								F = z && this.$.lookupKeybinding(z),
								x = F ? F.getLabel() || "" : M;
							for (; U.firstChild; ) U.firstChild.remove();
							U.appendChild(document.createTextNode(x));
						});
						const B = this.c.querySelectorAll(".if_shortcut[data-command]");
						Array.prototype.forEach.call(B, (U) => {
							const z = U.getAttribute("data-command"),
								F = z && this.$.lookupKeybinding(z);
							U.style.display = F ? "" : "none";
						});
					}
					ub() {
						const O = v.$2ob.modifierLabels[S.OS],
							B = this.db.getValue("editor.multiCursorModifier"),
							U =
								O[
									B === "ctrlCmd"
										? S.OS === S.OperatingSystem.Macintosh
											? "metaKey"
											: "ctrlKey"
										: "altKey"
								],
							z = this.c.querySelectorAll(".multi-cursor-modifier");
						Array.prototype.forEach.call(z, (F) => {
							for (; F.firstChild; ) F.firstChild.remove();
							F.appendChild(document.createTextNode(U));
						});
					}
					vb(O) {
						const B = this.f.getScrollPosition();
						this.r.saveEditorState(this.group, O, {
							viewState: { scrollTop: B.scrollTop, scrollLeft: B.scrollLeft },
						});
					}
					wb(O) {
						const B = this.r.loadEditorState(this.group, O);
						B && this.f.setScrollPosition(B.viewState);
					}
					clearInput() {
						this.input instanceof u.$oYc && this.vb(this.input),
							(this.b = (0, d.$Vc)(this.b)),
							super.clearInput();
					}
					I() {
						this.input instanceof u.$oYc && this.vb(this.input), super.I();
					}
					dispose() {
						this.g.reset(),
							(this.b = (0, d.$Vc)(this.b)),
							this.a.dispose(),
							super.dispose();
					}
				};
				(e.$rYc = A),
					(e.$rYc =
						A =
						D =
							Ne(
								[
									j(1, r.$km),
									j(2, $.$iP),
									j(3, h.$XO),
									j(4, n.$Li),
									j(5, a.$7rb),
									j(6, g.$uZ),
									j(7, o.$lq),
									j(8, f.$6j),
									j(9, b.$gj),
									j(10, T.$4N),
									j(11, L.$q2),
									j(12, k.$EY),
								],
								A,
							));
			},
		),
		define(
			de[3317],
			he([1, 0, 18, 1811, 43, 71, 8, 27]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vYc = e.$uYc = e.$tYc = e.$sYc = void 0),
					(e.$sYc = {
						id: "workbench.action.interactivePlayground.arrowUp",
						weight: w.KeybindingWeight.WorkbenchContrib,
						when: C.$Kj.and(
							i.$qYc,
							E.EditorContextKeys.editorTextFocus.toNegated(),
						),
						primary: d.KeyCode.UpArrow,
						handler: (m) => {
							const u = m.get(t.$IY).activeEditorPane;
							u instanceof i.$rYc && u.arrowUp();
						},
					}),
					(e.$tYc = {
						id: "workbench.action.interactivePlayground.arrowDown",
						weight: w.KeybindingWeight.WorkbenchContrib,
						when: C.$Kj.and(
							i.$qYc,
							E.EditorContextKeys.editorTextFocus.toNegated(),
						),
						primary: d.KeyCode.DownArrow,
						handler: (m) => {
							const u = m.get(t.$IY).activeEditorPane;
							u instanceof i.$rYc && u.arrowDown();
						},
					}),
					(e.$uYc = {
						id: "workbench.action.interactivePlayground.pageUp",
						weight: w.KeybindingWeight.WorkbenchContrib,
						when: C.$Kj.and(
							i.$qYc,
							E.EditorContextKeys.editorTextFocus.toNegated(),
						),
						primary: d.KeyCode.PageUp,
						handler: (m) => {
							const u = m.get(t.$IY).activeEditorPane;
							u instanceof i.$rYc && u.pageUp();
						},
					}),
					(e.$vYc = {
						id: "workbench.action.interactivePlayground.pageDown",
						weight: w.KeybindingWeight.WorkbenchContrib,
						when: C.$Kj.and(
							i.$qYc,
							E.EditorContextKeys.editorTextFocus.toNegated(),
						),
						primary: d.KeyCode.PageDown,
						handler: (m) => {
							const u = m.get(t.$IY).activeEditorPane;
							u instanceof i.$rYc && u.pageDown();
						},
					});
			},
		),
		define(
			de[830],
			he([1, 0, 6, 3, 37, 28, 11, 20, 4, 621, 357, 286, 53]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hsb = void 0),
					(e.$fsb = c),
					(e.$gsb = n);
				function c(p) {
					return `onAuthenticationRequest:${p}`;
				}
				async function n(p, o) {
					const f = await p.get(`${o.urlProtocol}.loginAccount`);
					if (f)
						try {
							const b = JSON.parse(f);
							if (
								b &&
								(0, E.$lg)(b.id) &&
								(0, E.$lg)(b.accessToken) &&
								(0, E.$lg)(b.providerId)
							)
								return b;
						} catch (b) {
							console.error(`Failed parsing current auth session value: ${b}`);
						}
				}
				let g = class extends i.$1c {
					constructor(o, f, b) {
						super(),
							(this.j = o),
							(this.m = b),
							(this.a = this.D(new t.$re())),
							(this.onDidRegisterAuthenticationProvider = this.a.event),
							(this.b = this.D(new t.$re())),
							(this.onDidUnregisterAuthenticationProvider = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onDidChangeSessions = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onDidChangeDeclaredProviders = this.f.event),
							(this.g = new Map()),
							(this.h = this.D(new i.$0c())),
							(this.n = []),
							this.D(
								f.onDidChangeExtensionSessionAccess((s) => {
									this.c.fire({
										providerId: s.providerId,
										label: s.accountName,
										event: { added: [], changed: [], removed: [] },
									});
								}),
							),
							this.q();
					}
					get declaredProviders() {
						return this.n;
					}
					q() {
						if (this.m.options?.authenticationProviders?.length)
							for (const o of this.m.options.authenticationProviders)
								this.registerAuthenticationProvider(o.id, o);
					}
					registerDeclaredAuthenticationProvider(o) {
						if ((0, w.$jf)(o.id)) throw new Error((0, m.localize)(12100, null));
						if ((0, w.$jf)(o.label))
							throw new Error((0, m.localize)(12101, null));
						if (this.declaredProviders.some((f) => f.id === o.id))
							throw new Error((0, m.localize)(12102, null, o.id));
						this.n.push(o), this.f.fire();
					}
					unregisterDeclaredAuthenticationProvider(o) {
						const f = this.declaredProviders.findIndex((b) => b.id === o);
						f > -1 && this.declaredProviders.splice(f, 1), this.f.fire();
					}
					isAuthenticationProviderRegistered(o) {
						return this.g.has(o);
					}
					registerAuthenticationProvider(o, f) {
						this.g.set(o, f);
						const b = new i.$Zc();
						b.add(
							f.onDidChangeSessions((s) =>
								this.c.fire({ providerId: o, label: f.label, event: s }),
							),
						),
							(0, i.$Uc)(f) && b.add(f),
							this.h.set(o, b),
							this.a.fire({ id: o, label: f.label });
					}
					unregisterAuthenticationProvider(o) {
						const f = this.g.get(o);
						f && (this.g.delete(o), this.b.fire({ id: o, label: f.label })),
							this.h.deleteAndDispose(o);
					}
					getProviderIds() {
						const o = [];
						return (
							this.g.forEach((f) => {
								o.push(f.id);
							}),
							o
						);
					}
					getProvider(o) {
						if (this.g.has(o)) return this.g.get(o);
						throw new Error(
							`No authentication provider '${o}' is currently registered.`,
						);
					}
					async getAccounts(o) {
						const f = await this.getSessions(o),
							b = new Array(),
							s = new Set();
						for (const l of f)
							s.has(l.account.label) ||
								(s.add(l.account.label), b.push(l.account));
						return b;
					}
					async getSessions(o, f, b, s = !1) {
						const l = this.g.get(o) || (await this.r(o, s));
						if (l) return await l.getSessions(f, { account: b });
						throw new Error(
							`No authentication provider '${o}' is currently registered.`,
						);
					}
					async createSession(o, f, b) {
						const s =
							this.g.get(o) || (await this.r(o, !!b?.activateImmediate));
						if (s) return await s.createSession(f, { account: b?.account });
						throw new Error(
							`No authentication provider '${o}' is currently registered.`,
						);
					}
					async removeSession(o, f) {
						const b = this.g.get(o);
						if (b) return b.removeSession(f);
						throw new Error(
							`No authentication provider '${o}' is currently registered.`,
						);
					}
					async r(o, f) {
						await this.j.activateByEvent(
							c(o),
							f ? h.ActivationKind.Immediate : h.ActivationKind.Normal,
						);
						let b = this.g.get(o);
						if (b) return b;
						const s = new i.$Zc(),
							l = new Promise(($, v) => {
								s.add(
									t.Event.once(this.onDidRegisterAuthenticationProvider)(
										(S) => {
											if (S.id === o)
												if (((b = this.g.get(o)), b)) $(b);
												else
													throw new Error(
														`No authentication provider '${o}' is currently registered.`,
													);
										},
									),
								);
							}),
							y = new Promise(($, v) => {
								const S = setTimeout(() => {
									v(
										"Timed out waiting for authentication provider to register",
									);
								}, 5e3);
								s.add((0, i.$Yc)(() => clearTimeout(S)));
							});
						return Promise.race([l, y]).finally(() => s.dispose());
					}
				};
				(e.$hsb = g),
					(e.$hsb = g = Ne([j(0, h.$q2), j(1, r.$dsb), j(2, a.$5rb)], g)),
					(0, d.$lK)(u.$$7, g, d.InstantiationType.Delayed),
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: "authentication.command.anysphere.signOut",
									title: {
										value: "Sign Out of GitHub",
										original: "Sign Out of GitHub",
									},
									f1: !0,
								});
							}
							run(o, ...f) {
								this.runAsync(o, ...f);
							}
							async runAsync(o, ...f) {
								const b = o.get(u.$$7),
									l = b.getProviderIds().map(async ($) => {
										try {
											const v = await b.getSessions($),
												S = {};
											return (
												v.forEach((I) => {
													S[I.account.label]
														? S[I.account.label].push(I)
														: (S[I.account.label] = [I]);
												}),
												{ providerId: $, sessions: S }
											);
										} catch {
											return { providerId: $ };
										}
									}),
									y = await Promise.all(l);
								for (const $ of y)
									if ($.sessions) {
										for (const v of Object.keys($.sessions))
											if ($.providerId === "github")
												for (const S of $.sessions[v])
													b.removeSession($.providerId, S.id);
									}
							}
						},
					);
			},
		),
		define(
			de[3318],
			he([
				1, 0, 3, 4, 11, 8, 113, 22, 62, 63, 21, 150, 357, 53, 685, 57, 47, 830,
				12, 965, 6, 29, 783,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
			) {
				"use strict";
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$P1c = void 0);
				let v = class extends t.$1c {
					static {
						$ = this;
					}
					static {
						this.h = "editSessionAccountPreference";
					}
					get isSignedIn() {
						return this.X !== void 0;
					}
					get onDidSignIn() {
						return this.q.event;
					}
					get onDidSignOut() {
						return this.r.event;
					}
					get lastWrittenResources() {
						return this.s;
					}
					get lastReadResources() {
						return this.t;
					}
					constructor(I, T, P, k, L, D, M, N, A, R, O) {
						super(),
							(this.u = I),
							(this.w = T),
							(this.y = P),
							(this.z = k),
							(this.C = L),
							(this.F = D),
							(this.G = M),
							(this.H = N),
							(this.I = A),
							(this.J = R),
							(this.L = O),
							(this.SIZE_LIMIT = Math.floor(1024 * 1024 * 1.9)),
							(this.c = this.H["editSessions.store"]),
							(this.j = !1),
							(this.q = new s.$re()),
							(this.r = new s.$re()),
							(this.s = new Map()),
							(this.t = new Map()),
							this.D(this.z.onDidChangeSessions((B) => this.ab(B.event))),
							this.D(
								this.w.onDidChangeValue(
									u.StorageScope.APPLICATION,
									$.h,
									this.D(new t.$Zc()),
								)(() => this.Z()),
							),
							this.bb(),
							this.cb(),
							(this.n = n.$D1c.bindTo(this.I)),
							this.n.set(this.X !== void 0);
					}
					async write(I, T) {
						if ((await this.initialize("write", !1), !this.j))
							throw new Error("Please sign in to store your edit session.");
						typeof T != "string" &&
							T.machine === void 0 &&
							(T.machine = await this.O()),
							(T = typeof T == "string" ? T : JSON.stringify(T));
						const P = await this.storeClient.writeResource(
							I,
							T,
							null,
							void 0,
							(0, a.$XRb)((0, p.$9g)()),
						);
						return this.s.set(I, { ref: P, content: T }), P;
					}
					async read(I, T) {
						if ((await this.initialize("read", !1), !this.j))
							throw new Error(
								"Please sign in to apply your latest edit session.",
							);
						let P;
						const k = (0, a.$XRb)((0, p.$9g)());
						try {
							if (T !== void 0)
								P = await this.storeClient?.resolveResourceContent(
									I,
									T,
									void 0,
									k,
								);
							else {
								const L = await this.storeClient?.readResource(
									I,
									null,
									void 0,
									k,
								);
								(P = L?.content), (T = L?.ref);
							}
						} catch (L) {
							this.G.error(L);
						}
						if (P != null && T !== void 0)
							return (
								this.t.set(I, { ref: T, content: P }), { ref: T, content: P }
							);
					}
					async delete(I, T) {
						if ((await this.initialize("write", !1), !this.j))
							throw new Error(`Unable to delete edit session with ref ${T}.`);
						try {
							await this.storeClient?.deleteResource(I, T);
						} catch (P) {
							this.G.error(P);
						}
					}
					async list(I) {
						if ((await this.initialize("read", !1), !this.j))
							throw new Error("Unable to list edit sessions.");
						try {
							return this.storeClient?.getAllResourceRefs(I) ?? [];
						} catch (T) {
							this.G.error(T);
						}
						return [];
					}
					async initialize(I, T = !1) {
						return this.j
							? !0
							: ((this.j = await this.M(I, T)),
								this.n.set(this.j),
								this.j && this.q.fire(),
								this.j);
					}
					async M(I, T) {
						if (
							(await this.C.whenInstalledExtensionsRegistered(), !this.c?.url)
						)
							throw new Error(
								"Unable to initialize sessions sync as session sync preference is not configured in product.json.",
							);
						if (this.storeClient === void 0) return !1;
						if (
							(this.D(
								this.storeClient.onTokenFailed(() => {
									this.G.info(
										"Clearing edit sessions authentication preference because of successive token failures.",
									),
										this.$();
								}),
							),
							this.f === void 0 &&
								(this.f = new b.$HRb(
									this.F,
									this.u,
									this.w,
									this.storeClient,
									this.G,
									this.H,
								)),
							this.g !== void 0)
						)
							return !0;
						const P = await this.P(I, T);
						return (
							P !== void 0 &&
								((this.g = P),
								this.storeClient.setAuthToken(P.token, P.providerId)),
							P !== void 0
						);
					}
					async getMachineById(I) {
						if ((await this.initialize("read", !1), !this.N)) {
							const T = await this.f.getMachines();
							this.N = T.reduce((P, k) => P.set(k.id, k.name), new Map());
						}
						return this.N.get(I);
					}
					async O() {
						const I = await this.f
							.getMachines()
							.then((T) => T.find((P) => P.isCurrent)?.id);
						return I === void 0
							? (await this.f.addCurrentMachine(),
								await this.f
									.getMachines()
									.then((T) => T.find((P) => P.isCurrent).id))
							: I;
					}
					async P(I, T) {
						if (this.X) {
							this.G.info(
								`Searching for existing authentication session with ID ${this.X}`,
							);
							const k = await this.Y();
							if (k)
								return (
									this.G.info(
										`Found existing authentication session with ID ${k.session.id}`,
									),
									{
										sessionId: k.session.id,
										token: k.session.idToken ?? k.session.accessToken,
										providerId: k.session.providerId,
									}
								);
							this.r.fire();
						}
						if (this.Q()) {
							this.G.info("Reusing user data sync enablement");
							const k = await (0, o.$gsb)(this.L, this.H);
							if (k !== void 0)
								return (
									this.G.info(
										`Using current authentication session with ID ${k.id}`,
									),
									(this.X = k.id),
									{
										sessionId: k.id,
										token: k.accessToken,
										providerId: k.providerId,
									}
								);
						}
						if (T) return;
						const P = await this.R(I);
						if (P !== void 0)
							return (
								(this.X = P.id),
								{
									sessionId: P.id,
									token: P.idToken ?? P.accessToken,
									providerId: P.providerId,
								}
							);
					}
					Q() {
						return (
							f.$r &&
							this.w.isNew(u.StorageScope.APPLICATION) &&
							this.w.isNew(u.StorageScope.WORKSPACE)
						);
					}
					async R(I) {
						const T = new t.$Zc(),
							P = T.add(this.y.createQuickPick({ useSeparators: !0 }));
						return (
							(P.ok = !1),
							(P.placeholder =
								I === "read"
									? (0, i.localize)(5967, null)
									: (0, i.localize)(5968, null)),
							(P.ignoreFocusOut = !0),
							(P.items = await this.S()),
							new Promise((k, L) => {
								T.add(
									P.onDidHide((D) => {
										L(new l.$9()), T.dispose();
									}),
								),
									T.add(
										P.onDidAccept(async (D) => {
											const M = P.selectedItems[0],
												N =
													"provider" in M
														? {
																...(await this.z.createSession(
																	M.provider.id,
																	M.provider.scopes,
																)),
																providerId: M.provider.id,
															}
														: "session" in M
															? M.session
															: void 0;
											k(N), P.hide();
										}),
									),
									P.show();
							})
						);
					}
					async S() {
						const I = [];
						I.push({ type: "separator", label: (0, i.localize)(5969, null) });
						const T = await this.U();
						I.push(...T),
							I.push({ type: "separator", label: (0, i.localize)(5970, null) });
						for (const P of await this.W())
							if (
								!T.some((L) => L.session.providerId === P.id) ||
								this.z.getProvider(P.id).supportsMultipleAccounts
							) {
								const L = this.z.getProvider(P.id).label;
								I.push({ label: (0, i.localize)(5971, null, L), provider: P });
							}
						return I;
					}
					async U() {
						const I = await this.W(),
							T = new Map();
						let P;
						for (const k of I) {
							const L = await this.z.getSessions(k.id, k.scopes);
							for (const D of L) {
								const M = {
									label: D.account.label,
									description: this.z.getProvider(k.id).label,
									session: { ...D, providerId: k.id },
								};
								T.set(M.session.account.id, M), this.X === D.id && (P = M);
							}
						}
						return (
							P !== void 0 && T.set(P.session.account.id, P),
							[...T.values()].sort((k, L) => k.label.localeCompare(L.label))
						);
					}
					async W() {
						if (!this.c)
							throw new Error(
								"Unable to get configured authentication providers as session sync preference is not configured in product.json.",
							);
						const I = this.c.authenticationProviders,
							T = Object.keys(I).reduce(
								(k, L) => (k.push({ id: L, scopes: I[L].scopes }), k),
								[],
							),
							P = this.z.declaredProviders;
						return T.filter(({ id: k }) => P.some((L) => L.id === k));
					}
					get X() {
						return this.w.get($.h, u.StorageScope.APPLICATION);
					}
					set X(I) {
						this.G.trace(
							`Saving authentication session preference for ID ${I}.`,
						),
							I === void 0
								? this.w.remove($.h, u.StorageScope.APPLICATION)
								: this.w.store(
										$.h,
										I,
										u.StorageScope.APPLICATION,
										u.StorageTarget.MACHINE,
									);
					}
					async Y() {
						return (await this.U()).find((T) => T.session.id === this.X);
					}
					async Z() {
						const I = this.X,
							T = this.g?.sessionId;
						T !== I &&
							(this.G.trace(
								`Resetting authentication state because authentication session ID preference changed from ${T} to ${I}.`,
							),
							(this.g = void 0),
							(this.j = !1));
					}
					$() {
						(this.g = void 0), (this.j = !1), (this.X = void 0), this.n.set(!1);
					}
					ab(I) {
						this.g?.sessionId &&
							I.removed?.find((T) => T.id === this.g?.sessionId) &&
							this.$();
					}
					bb() {
						const I = this,
							T = "workbench.editSessions.actions.signIn",
							P = E.$Kj.and(E.$Kj.equals(n.$E1c, !1), E.$Kj.equals(n.$C1c, !1));
						this.D(
							(0, w.$4X)(
								class extends w.$3X {
									constructor() {
										super({
											id: T,
											title: (0, i.localize)(5972, null),
											category: n.$y1c,
											precondition: P,
											menu: [
												{ id: w.$XX.CommandPalette },
												{
													id: w.$XX.AccountsContext,
													group: "2_editSessions",
													when: P,
												},
											],
										});
									}
									async run() {
										return await I.initialize("write", !1);
									}
								},
							),
						),
							this.D(
								w.$ZX.appendMenuItem(w.$XX.AccountsContext, {
									group: "2_editSessions",
									command: { id: T, title: (0, i.localize)(5973, null) },
									when: E.$Kj.and(
										E.$Kj.equals(n.$E1c, !0),
										E.$Kj.equals(n.$C1c, !1),
									),
								}),
							);
					}
					cb() {
						const I = this;
						this.D(
							(0, w.$4X)(
								class extends w.$3X {
									constructor() {
										super({
											id: "workbench.editSessions.actions.resetAuth",
											title: (0, i.localize)(5974, null),
											category: n.$y1c,
											precondition: E.$Kj.equals(n.$C1c, !0),
											menu: [
												{ id: w.$XX.CommandPalette },
												{
													id: w.$XX.AccountsContext,
													group: "2_editSessions",
													when: E.$Kj.equals(n.$C1c, !0),
												},
											],
										});
									}
									async run() {
										const P = await I.J.confirm({
											message: (0, i.localize)(5975, null),
											checkbox: { label: (0, i.localize)(5976, null) },
										});
										P.confirmed &&
											(P.checkboxChecked &&
												I.storeClient?.deleteResource("editSessions", null),
											I.$());
									}
								},
							),
						);
					}
				};
				(e.$P1c = v),
					(e.$P1c =
						v =
						$ =
							Ne(
								[
									j(0, d.$ll),
									j(1, u.$lq),
									j(2, r.$DJ),
									j(3, h.$$7),
									j(4, c.$q2),
									j(5, C.$Ti),
									j(6, n.$A1c),
									j(7, m.$Bk),
									j(8, E.$6j),
									j(9, g.$GO),
									j(10, y.$Yrb),
								],
								v,
							));
			},
		),
		define(
			de[3319],
			he([1, 0, 5, 31, 53, 6, 3, 34, 20, 15]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Svc = void 0);
				let u = class extends C.$1c {
					constructor(h, c, n) {
						super(),
							(this.g = h),
							(this.h = c),
							(this.j = n),
							(this.a = !1),
							(this.c = this.D(new E.$re())),
							(this.onWillExecuteCommand = this.c.event),
							(this.f = new E.$re()),
							(this.onDidExecuteCommand = this.f.event),
							this.h
								.whenInstalledExtensionsRegistered()
								.then((g) => (this.a = g)),
							(this.b = null);
					}
					m() {
						return (
							this.b ||
								(this.b = Promise.race([
									this.h.activateByEvent("*"),
									(0, r.$Nh)(3e4),
								])),
							this.b
						);
					}
					async executeCommand(h, ...c) {
						this.j.trace("CommandService#executeCommand", h);
						const n = `onCommand:${h}`;
						return i.$fk.getCommand(h)
							? this.h.activationEventIsDone(n)
								? this.n(h, c)
								: this.a
									? (await this.h.activateByEvent(n), this.n(h, c))
									: (this.h.activateByEvent(n), this.n(h, c))
							: (await Promise.all([
									this.h.activateByEvent(n),
									Promise.race([
										this.m(),
										E.Event.toPromise(
											E.Event.filter(
												i.$fk.onDidRegisterCommand,
												(p) => p === h,
											),
										),
									]),
								]),
								this.n(h, c));
					}
					n(h, c) {
						const n = i.$fk.getCommand(h);
						if (!n)
							return Promise.reject(new Error(`command '${h}' not found`));
						try {
							this.c.fire({ commandId: h, args: c });
							const g = this.g.invokeFunction(n.handler, ...c);
							return this.f.fire({ commandId: h, args: c }), Promise.resolve(g);
						} catch (g) {
							return Promise.reject(g);
						}
					}
				};
				(e.$Svc = u),
					(e.$Svc = u = Ne([j(0, t.$Li), j(1, w.$q2), j(2, d.$ik)], u)),
					(0, m.$lK)(i.$ek, u, m.InstantiationType.Delayed);
			},
		),
		define(
			de[3320],
			he([1, 0, 6, 109, 3, 244, 20, 21, 30, 28, 57, 4, 53, 24, 82]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const g = "extension.features.state";
				let p = class extends w.$1c {
					constructor(f, b, s) {
						super(),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeEnablement = this.a.event),
							(this.b = this.D(new t.$re())),
							(this.onDidChangeAccessData = this.b.event),
							(this.f = new Map()),
							(this.c = m.$Io.as(E.Extensions.ExtensionFeaturesRegistry)),
							(this.f = this.r()),
							this.D(
								f.onDidChangeValue(
									d.StorageScope.PROFILE,
									g,
									this.B,
								)((l) => this.q(l)),
							);
					}
					isEnabled(f, b) {
						const s = this.c.getExtensionFeature(b);
						if (!s) return !1;
						const l = this.m(f, b)?.disabled;
						if ((0, r.$rg)(l)) return !l;
						const y = s.access.extensionsList?.[f.value];
						return (0, r.$rg)(y) ? y : !s.access.requireUserConsent;
					}
					setEnablement(f, b, s) {
						if (!this.c.getExtensionFeature(b))
							throw new Error(`No feature with id '${b}'`);
						const y = this.n(f, b);
						y.disabled !== !s &&
							((y.disabled = !s),
							this.a.fire({ extension: f, featureId: b, enabled: s }),
							this.s());
					}
					getEnablementData(f) {
						const b = [];
						if (this.c.getExtensionFeature(f))
							for (const [l, y] of this.f) {
								const $ = y.get(f);
								$?.disabled !== void 0 &&
									b.push({ extension: new i.$Gn(l), enabled: !$.disabled });
							}
						return b;
					}
					async getAccess(f, b, s) {
						const l = this.c.getExtensionFeature(b);
						if (!l) return !1;
						const y = this.n(f, b);
						if (y.disabled) return !1;
						if (y.disabled === void 0) {
							let $ = !0;
							if (l.access.requireUserConsent) {
								const v = this.j.extensions.find((I) =>
									i.$Gn.equals(I.identifier, f),
								);
								$ = (
									await this.h.confirm({
										title: (0, a.localize)(12285, null, l.label),
										message: (0, a.localize)(
											12286,
											null,
											v?.displayName ?? f.value,
											l.label,
										),
										detail: s ?? l.description,
										custom: !0,
										primaryButton: (0, a.localize)(12287, null),
										cancelButton: (0, a.localize)(12288, null),
									})
								).confirmed;
							}
							if ((this.setEnablement(f, b, $), !$)) return !1;
						}
						return (
							(y.accessData.current = {
								count: y.accessData.current?.count
									? y.accessData.current?.count + 1
									: 1,
								lastAccessed: Date.now(),
								status: y.accessData.current?.status,
							}),
							(y.accessData.totalCount = y.accessData.totalCount + 1),
							this.s(),
							this.b.fire({
								extension: f,
								featureId: b,
								accessData: y.accessData,
							}),
							!0
						);
					}
					getAccessData(f, b) {
						if (this.c.getExtensionFeature(b)) return this.m(f, b)?.accessData;
					}
					setStatus(f, b, s) {
						if (!this.c.getExtensionFeature(b))
							throw new Error(`No feature with id '${b}'`);
						const y = this.n(f, b);
						(y.accessData.current = {
							count: y.accessData.current?.count ?? 0,
							lastAccessed: y.accessData.current?.lastAccessed ?? 0,
							status: s,
						}),
							this.b.fire({
								extension: f,
								featureId: b,
								accessData: this.getAccessData(f, b),
							});
					}
					m(f, b) {
						return this.f.get(f.value)?.get(b);
					}
					n(f, b) {
						let s = this.f.get(f.value);
						s || ((s = new Map()), this.f.set(f.value, s));
						let l = s.get(b);
						return (
							l || ((l = { accessData: { totalCount: 0 } }), s.set(b, l)), l
						);
					}
					q(f) {
						if (f.external) {
							const b = this.f;
							this.f = this.r();
							for (const s of (0, c.$Qb)([...b.keys(), ...this.f.keys()])) {
								const l = new i.$Gn(s),
									y = b.get(s),
									$ = this.f.get(s);
								for (const v of (0, c.$Qb)([
									...(y?.keys() ?? []),
									...($?.keys() ?? []),
								])) {
									const S = this.isEnabled(l, v),
										I = !y?.get(v)?.disabled;
									S !== I &&
										this.a.fire({ extension: l, featureId: v, enabled: S });
									const T = this.getAccessData(l, v),
										P = y?.get(v)?.accessData;
									(0, n.$zo)(T, P) ||
										this.b.fire({
											extension: l,
											featureId: v,
											accessData: T ?? { totalCount: 0 },
										});
								}
							}
						}
					}
					r() {
						let f = {};
						const b = this.g.get(g, d.StorageScope.PROFILE, "{}");
						try {
							f = JSON.parse(b);
						} catch {}
						const s = new Map();
						for (const l in f) {
							const y = new Map(),
								$ = f[l];
							for (const v in $) {
								const S = $[v];
								y.set(v, {
									disabled: S.disabled,
									accessData: { totalCount: S.accessCount },
								});
							}
							s.set(l, y);
						}
						return s;
					}
					s() {
						const f = {};
						this.f.forEach((b, s) => {
							const l = {};
							b.forEach((y, $) => {
								l[$] = {
									disabled: y.disabled,
									accessCount: y.accessData.totalCount,
								};
							}),
								(f[s] = l);
						}),
							this.g.store(
								g,
								JSON.stringify(f),
								d.StorageScope.PROFILE,
								d.StorageTarget.USER,
							);
					}
				};
				(p = Ne([j(0, d.$lq), j(1, u.$GO), j(2, h.$q2)], p)),
					(0, C.$lK)(E.$$Sb, p, C.InstantiationType.Delayed);
			},
		),
		define(
			de[3321],
			he([
				1, 0, 7, 1126, 75, 455, 15, 76, 29, 6, 3, 23, 12, 19, 9, 47, 4, 73, 180,
				34, 62, 21, 32, 269, 129, 25, 286, 1021, 53,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$E4c = void 0),
					(t = mt(t)),
					(h = mt(h));
				let k = class extends u.$1c {
					constructor(D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(),
							(this.runningLocation = D),
							(this.startup = M),
							(this.h = N),
							(this.j = A),
							(this.m = R),
							(this.n = O),
							(this.q = B),
							(this.r = U),
							(this.s = z),
							(this.t = F),
							(this.u = x),
							(this.w = H),
							(this.y = q),
							(this.pid = null),
							(this.remoteAuthority = null),
							(this.extensions = null),
							(this.a = this.D(new r.$re())),
							(this.onExit = this.a.event),
							(this.b = !1),
							(this.c = null),
							(this.f = null),
							(this.g = (0, c.$nh)(this.s.extHostLogsPath, "webWorker"));
					}
					async z() {
						const D = new URLSearchParams();
						this.s.debugExtensionHost &&
							this.s.debugRenderer &&
							D.set("debugged", "1"),
							a.COI.addSearchParam(D, !0, !0);
						const M = `?${D.toString()}`,
							N = `vs/workbench/services/extensions/worker/webWorkerExtensionHostIframe.${E.$V ? "esm." : ""}html`;
						if (h.$r) {
							const R = this.u.webEndpointUrlTemplate,
								O = this.u.commit,
								B = this.u.quality;
							if (R && O && B) {
								const U = "webWorkerExtensionHostIframeStableOriginUUID";
								let z = this.y.get(U, l.StorageScope.WORKSPACE);
								typeof z > "u" &&
									((z = (0, g.$9g)()),
									this.y.store(
										U,
										z,
										l.StorageScope.WORKSPACE,
										l.StorageTarget.MACHINE,
									));
								const F = await (0, i.$1fb)(w.$Bfb.origin, z),
									x = R.replace("{{uuid}}", `v--${F}`)
										.replace("{{commit}}", O)
										.replace("{{quality}}", B),
									H = new URL(`${x}/out/${N}${M}`);
								return (
									H.searchParams.set("parentOrigin", w.$Bfb.origin),
									H.searchParams.set("salt", z),
									H.toString()
								);
							}
							console.warn(
								"The web worker extension host is started in a same-origin iframe!",
							);
						}
						return `${a.$7g.asBrowserUri(N).toString(!0)}${M}`;
					}
					async start() {
						return (
							this.c || ((this.c = this.C()), this.c.then((D) => (this.f = D))),
							this.c
						);
					}
					async C() {
						const D = await this.z(),
							M = this.D(new r.$re()),
							N = document.createElement("iframe");
						N.setAttribute("class", "web-worker-ext-host-iframe"),
							N.setAttribute("sandbox", "allow-scripts allow-same-origin"),
							N.setAttribute(
								"allow",
								"usb; serial; hid; cross-origin-isolated;",
							),
							N.setAttribute("aria-hidden", "true"),
							(N.style.display = "none");
						const A = (0, g.$9g)();
						N.setAttribute("src", `${D}&vscodeWebWorkerExtHostId=${A}`);
						const R = new C.$Lh();
						let O,
							B = null,
							U = !1,
							z = null;
						const F = (V, G) => {
								(B = G),
									(U = !0),
									(0, m.$4)(B),
									clearTimeout(z),
									this.a.fire([
										T.ExtensionHostExitCode.UnexpectedError,
										B.message,
									]),
									R.open();
							},
							x = (V) => {
								(O = V), clearTimeout(z), R.open();
							};
						if (
							((z = setTimeout(() => {
								console.warn(
									"The Web Worker Extension Host did not start in 60s, that might be a problem.",
								);
							}, 6e4)),
							this.D(
								t.$0fb(w.$Bfb, "message", (V) => {
									if (
										V.source !== N.contentWindow ||
										V.data.vscodeWebWorkerExtHostId !== A
									)
										return;
									if (V.data.error) {
										const { name: K, message: J, stack: W } = V.data.error,
											X = new Error();
										return (
											(X.message = J),
											(X.name = K),
											(X.stack = W),
											F(T.ExtensionHostExitCode.UnexpectedError, X)
										);
									}
									if (V.data.type === "vscode.bootstrap.nls") {
										const K = "vs/base/worker/workerMain.js",
											J = E.$V ? void 0 : ce.toUrl(K).slice(0, -K.length);
										N.contentWindow.postMessage(
											{
												type: V.data.type,
												data: {
													baseUrl: J,
													workerUrl: E.$V
														? a.$7g
																.asBrowserUri(
																	"vs/workbench/api/worker/extensionHostWorker.esm.js",
																)
																.toString(!0)
														: ce.toUrl(K),
													fileRoot: globalThis._VSCODE_FILE_ROOT,
													nls: {
														messages: (0, p.getNLSMessages)(),
														language: (0, p.getNLSLanguage)(),
													},
												},
											},
											"*",
										);
										return;
									}
									const { data: G } = V.data;
									if (R.isOpen() || !(G instanceof MessagePort)) {
										console.warn("UNEXPECTED message", V);
										const K = new Error("UNEXPECTED message");
										return F(T.ExtensionHostExitCode.UnexpectedError, K);
									}
									x(G);
								}),
							),
							this.w.mainContainer.appendChild(N),
							this.D((0, u.$Yc)(() => N.remove())),
							await R.wait(),
							U)
						)
							throw B;
						const H = this.s.options?.messagePorts ?? new Map();
						N.contentWindow.postMessage({ type: "vscode.init", data: H }, "*", [
							...H.values(),
						]),
							(O.onmessage = (V) => {
								const { data: G } = V;
								if (!(G instanceof ArrayBuffer)) {
									console.warn("UNKNOWN data received", G),
										this.a.fire([77, "UNKNOWN data received"]);
									return;
								}
								M.fire(d.$Te.wrap(new Uint8Array(G, 0, G.byteLength)));
							});
						const q = {
							onMessage: M.event,
							send: (V) => {
								const G = V.buffer.buffer.slice(
									V.buffer.byteOffset,
									V.buffer.byteOffset + V.buffer.byteLength,
								);
								O.postMessage(G, [G]);
							},
						};
						return this.F(q);
					}
					async F(D) {
						if (
							(await r.Event.toPromise(
								r.Event.filter(D.onMessage, (M) =>
									(0, T.$Rn)(M, T.MessageType.Ready),
								),
							),
							this.b ||
								(D.send(d.$Te.fromString(JSON.stringify(await this.G()))),
								this.b) ||
								(await r.Event.toPromise(
									r.Event.filter(D.onMessage, (M) =>
										(0, T.$Rn)(M, T.MessageType.Initialized),
									),
								),
								this.b))
						)
							throw (0, m.$0)();
						return D;
					}
					dispose() {
						this.b ||
							((this.b = !0),
							this.f?.send((0, T.$Qn)(T.MessageType.Terminate)),
							super.dispose());
					}
					getInspectPort() {}
					enableInspectPort() {
						return Promise.resolve(!1);
					}
					async G() {
						const D = await this.h.getInitData();
						this.extensions = D.extensions;
						const M = this.m.getWorkspace(),
							N = this.u.extensionsGallery?.nlsBaseUrl;
						let A;
						return (
							N &&
								this.u.commit &&
								!h.Language.isDefaultVariant() &&
								(A = n.URI.joinPath(
									n.URI.parse(N),
									this.u.commit,
									this.u.version,
									h.Language.value(),
								)),
							{
								commit: this.u.commit,
								version: this.u.version,
								vscodeVersion: this.u.vscodeVersion,
								rendererPerformanceTimeOrigin: performance.timeOrigin,
								quality: this.u.quality,
								parentPid: 0,
								environment: {
									isExtensionDevelopmentDebug: this.s.debugRenderer,
									appName: this.u.nameLong,
									appHost:
										this.u.embedderIdentifier ?? (h.$r ? "web" : "desktop"),
									appUriScheme: this.u.urlProtocol,
									appLanguage: h.$z,
									extensionTelemetryLogResource: this.s.extHostTelemetryLogFile,
									isExtensionTelemetryLoggingOnly: (0, $.$Yp)(this.u, this.s),
									extensionDevelopmentLocationURI:
										this.s.extensionDevelopmentLocationURI,
									extensionTestsLocationURI: this.s.extensionTestsLocationURI,
									globalStorageHome: this.t.defaultProfile.globalStorageHome,
									workspaceStorageHome: this.s.workspaceStorageHome,
									extensionLogLevel: this.s.extensionLogLevel,
								},
								workspace:
									this.m.getWorkbenchState() === S.WorkbenchState.EMPTY
										? void 0
										: {
												configuration: M.configuration || void 0,
												id: M.id,
												name: this.n.getWorkspaceLabel(M),
												transient: M.transient,
											},
								consoleForward: {
									includeStack: !1,
									logNative: this.s.debugRenderer,
								},
								extensions: this.extensions.toSnapshot(),
								nlsBaseUrl: A,
								telemetryInfo: {
									sessionId: this.j.sessionId,
									machineId: this.j.machineId,
									macMachineId: this.j.macMachineId,
									sqmId: this.j.sqmId,
									devDeviceId: this.j.devDeviceId,
									firstSessionDate: this.j.firstSessionDate,
									msftInternal: this.j.msftInternal,
								},
								logLevel: this.q.getLevel(),
								loggers: [...this.r.getRegisteredLoggers()],
								logsLocation: this.g,
								autoStart:
									this.startup === P.ExtensionHostStartup.EagerAutoStart,
								remote: {
									authority: this.s.remoteAuthority,
									connectionData: null,
									isRemote: !1,
								},
								uiKind: h.$r ? T.UIKind.Web : T.UIKind.Desktop,
							}
						);
					}
				};
				(e.$E4c = k),
					(e.$E4c = k =
						Ne(
							[
								j(3, y.$km),
								j(4, S.$Vi),
								j(5, o.$3N),
								j(6, b.$ik),
								j(7, b.$jk),
								j(8, I.$5rb),
								j(9, v.$Xl),
								j(10, s.$Bk),
								j(11, f.$jEb),
								j(12, l.$lq),
							],
							k,
						));
			},
		),
		define(
			de[3322],
			he([1, 0, 24, 4, 3, 109, 1179, 102, 34, 62, 30, 78, 244, 94]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$W4c = void 0);
				let n = class {
					constructor(o, f, b) {
						if (
							((this.e = o),
							(this.f = f),
							(this.c = new Set(
								(f.extensionEnabledProposedApi ?? []).map((s) =>
									E.$Gn.toKey(s),
								),
							)),
							(this.b =
								!f.isBuilt ||
								(f.isExtensionDevelopment && b.quality !== "stable") ||
								(this.c.size === 0 &&
									Array.isArray(f.extensionEnabledProposedApi))),
							(this.d = new Map()),
							b.extensionEnabledApiProposals)
						)
							for (const [s, l] of Object.entries(
								b.extensionEnabledApiProposals,
							)) {
								const y = E.$Gn.toKey(s),
									$ = l.filter((v) =>
										C.allApiProposals[v]
											? !0
											: (o.warn(
													`Via 'product.json#extensionEnabledApiProposals' extension '${y}' wants API proposal '${v}' but that proposal DOES NOT EXIST. Likely, the proposal has been finalized (check 'vscode.d.ts') or was abandoned.`,
												),
												!1),
									);
								this.d.set(y, $);
							}
					}
					updateEnabledApiProposals(o) {
						for (const f of o) this.g(f);
					}
					g(o) {
						const f = E.$Gn.toKey(o.identifier);
						if (
							((0, t.$Pb)(o.enabledApiProposals) &&
								(o.enabledApiProposals = o.enabledApiProposals.filter((b) => {
									const s = !!C.allApiProposals[b];
									return (
										s ||
											this.e.error(
												`Extension '${f}' wants API proposal '${b}' but that proposal DOES NOT EXIST. Likely, the proposal has been finalized (check 'vscode.d.ts') or was abandoned.`,
											),
										s
									);
								})),
							this.d.has(f))
						) {
							const b = this.d.get(f),
								s = new Set(b),
								l = new Set(o.enabledApiProposals),
								y = new Set([...l].filter(($) => !s.has($)));
							y.size > 0 &&
								(this.e.error(`Extension '${f}' appears in product.json but enables LESS API proposals than the extension wants.
package.json (LOSES): ${[...l].join(", ")}
product.json (WINS): ${[...s].join(", ")}`),
								this.f.isExtensionDevelopment &&
									(this.e.error(
										`Proceeding with EXTRA proposals (${[...y].join(", ")}) because extension is in development mode. Still, this EXTENSION WILL BE BROKEN unless product.json is updated.`,
									),
									b.push(...y))),
								(o.enabledApiProposals = b);
							return;
						}
						this.b ||
							this.c.has(f) ||
							(!o.isBuiltin &&
								(0, t.$Pb)(o.enabledApiProposals) &&
								(this.e.error(
									`Extension '${o.identifier.value} CANNOT USE these API proposals '${o.enabledApiProposals?.join(", ") || "*"}'. You MUST start in extension development mode or use the --enable-proposed-api command line flag`,
								),
								(o.enabledApiProposals = [])));
					}
				};
				(e.$W4c = n),
					(e.$W4c = n = Ne([j(0, m.$ik), j(1, a.$r8), j(2, r.$Bk)], n));
				class g extends w.$1c {
					constructor() {
						super(...arguments), (this.type = "markdown");
					}
					shouldRender(o) {
						return (
							!!o.originalEnabledApiProposals?.length ||
							!!o.enabledApiProposals?.length
						);
					}
					render(o) {
						const f =
								o.originalEnabledApiProposals ?? o.enabledApiProposals ?? [],
							b = new c.$cl();
						if (f.length)
							for (const s of f)
								b.appendMarkdown(`- \`${s}\`
`);
						return { data: b, dispose: () => {} };
					}
				}
				u.$Io
					.as(h.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "enabledApiProposals",
						label: (0, i.localize)(12350, null),
						access: { canToggle: !1 },
						renderer: new d.$Ji(g),
					});
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[175],
		he([1, 0, 4, 29, 111, 119, 250, 30, 109, 62, 1200, 1179]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$n2 = e.$m2 = e.$l2 = e.$k2 = e.$j2 = e.$i2 = void 0),
				(t = mt(t)),
				(w = xi(w));
			const h = d.$Io.as(C.$Jo.JSONContribution);
			class c {
				constructor(l, y, $) {
					(this.a = l), (this.b = y), (this.c = $);
				}
				d(l, y) {
					this.a({
						type: l,
						message: y,
						extensionId: this.b.identifier,
						extensionPointId: this.c,
					});
				}
				error(l) {
					this.d(w.default.Error, l);
				}
				warn(l) {
					this.d(w.default.Warning, l);
				}
				info(l) {
					this.d(w.default.Info, l);
				}
			}
			e.$i2 = c;
			class n {
				static a(l) {
					const y = new m.$Hn();
					for (let $ = 0, v = l.length; $ < v; $++)
						y.add(l[$].description.identifier);
					return y;
				}
				static compute(l, y) {
					if (!l || !l.length) return new n(y, []);
					if (!y || !y.length) return new n([], l);
					const $ = this.a(l),
						v = this.a(y),
						S = y.filter((T) => !$.has(T.description.identifier)),
						I = l.filter((T) => !v.has(T.description.identifier));
					return new n(S, I);
				}
				constructor(l, y) {
					(this.added = l), (this.removed = y);
				}
			}
			e.$j2 = n;
			class g {
				constructor(l, y) {
					(this.name = l),
						(this.defaultExtensionKind = y),
						(this.a = null),
						(this.b = null),
						(this.c = null);
				}
				setHandler(l) {
					if (this.a !== null) throw new Error("Handler already set!");
					return (
						(this.a = l),
						this.d(),
						{
							dispose: () => {
								this.a = null;
							},
						}
					);
				}
				acceptUsers(l) {
					(this.c = n.compute(this.b, l)), (this.b = l), this.d();
				}
				d() {
					if (!(this.a === null || this.b === null || this.c === null))
						try {
							this.a(this.b, this.c);
						} catch (l) {
							(0, i.$4)(l);
						}
				}
			}
			e.$k2 = g;
			const p = {
					type: "string",
					enum: ["ui", "workspace"],
					enumDescriptions: [t.localize(12351, null), t.localize(12352, null)],
				},
				o = "vscode://schemas/vscode-extensions";
			e.$l2 = {
				properties: {
					engines: {
						type: "object",
						description: t.localize(12353, null),
						properties: {
							vscode: {
								type: "string",
								description: t.localize(12354, null),
								default: "^1.22.0",
							},
						},
					},
					publisher: { description: t.localize(12355, null), type: "string" },
					displayName: { description: t.localize(12356, null), type: "string" },
					categories: {
						description: t.localize(12357, null),
						type: "array",
						uniqueItems: !0,
						items: {
							oneOf: [
								{ type: "string", enum: m.$Fn },
								{
									type: "string",
									const: "Languages",
									deprecationMessage: t.localize(12358, null),
								},
							],
						},
					},
					galleryBanner: {
						type: "object",
						description: t.localize(12359, null),
						properties: {
							color: { description: t.localize(12360, null), type: "string" },
							theme: {
								description: t.localize(12361, null),
								type: "string",
								enum: ["dark", "light"],
							},
						},
					},
					contributes: {
						description: t.localize(12362, null),
						type: "object",
						properties: {},
						default: {},
					},
					preview: { type: "boolean", description: t.localize(12363, null) },
					enableProposedApi: {
						type: "boolean",
						deprecationMessage: t.localize(12364, null),
					},
					enabledApiProposals: {
						markdownDescription: t.localize(12365, null),
						type: "array",
						uniqueItems: !0,
						items: {
							type: "string",
							enum: Object.keys(a.allApiProposals).map((s) => s),
							markdownEnumDescriptions: Object.values(a.allApiProposals).map(
								(s) => s.proposal,
							),
						},
					},
					api: {
						markdownDescription: t.localize(12366, null),
						type: "string",
						enum: ["none"],
						enumDescriptions: [t.localize(12367, null)],
					},
					activationEvents: {
						description: t.localize(12368, null),
						type: "array",
						items: {
							type: "string",
							defaultSnippets: [
								{
									label: "onWebviewPanel",
									description: t.localize(12369, null),
									body: "onWebviewPanel:viewType",
								},
								{
									label: "onLanguage",
									description: t.localize(12370, null),
									body: "onLanguage:${1:languageId}",
								},
								{
									label: "onCommand",
									description: t.localize(12371, null),
									body: "onCommand:${2:commandId}",
								},
								{
									label: "onDebug",
									description: t.localize(12372, null),
									body: "onDebug",
								},
								{
									label: "onDebugInitialConfigurations",
									description: t.localize(12373, null),
									body: "onDebugInitialConfigurations",
								},
								{
									label: "onDebugDynamicConfigurations",
									description: t.localize(12374, null),
									body: "onDebugDynamicConfigurations",
								},
								{
									label: "onDebugResolve",
									description: t.localize(12375, null),
									body: "onDebugResolve:${6:type}",
								},
								{
									label: "onDebugAdapterProtocolTracker",
									description: t.localize(12376, null),
									body: "onDebugAdapterProtocolTracker:${6:type}",
								},
								{
									label: "workspaceContains",
									description: t.localize(12377, null),
									body: "workspaceContains:${4:filePattern}",
								},
								{
									label: "onStartupFinished",
									description: t.localize(12378, null),
									body: "onStartupFinished",
								},
								{
									label: "onTaskType",
									description: t.localize(12379, null),
									body: "onTaskType:${1:taskType}",
								},
								{
									label: "onFileSystem",
									description: t.localize(12380, null),
									body: "onFileSystem:${1:scheme}",
								},
								{
									label: "onEditSession",
									description: t.localize(12381, null),
									body: "onEditSession:${1:scheme}",
								},
								{
									label: "onSearch",
									description: t.localize(12382, null),
									body: "onSearch:${7:scheme}",
								},
								{
									label: "onView",
									body: "onView:${5:viewId}",
									description: t.localize(12383, null),
								},
								{
									label: "onUri",
									body: "onUri",
									description: t.localize(12384, null),
								},
								{
									label: "onOpenExternalUri",
									body: "onOpenExternalUri",
									description: t.localize(12385, null),
								},
								{
									label: "onCustomEditor",
									body: "onCustomEditor:${9:viewType}",
									description: t.localize(12386, null),
								},
								{
									label: "onNotebook",
									body: "onNotebook:${1:type}",
									description: t.localize(12387, null),
								},
								{
									label: "onAuthenticationRequest",
									body: "onAuthenticationRequest:${11:authenticationProviderId}",
									description: t.localize(12388, null),
								},
								{
									label: "onRenderer",
									description: t.localize(12389, null),
									body: "onRenderer:${11:rendererId}",
								},
								{
									label: "onTerminalProfile",
									body: "onTerminalProfile:${1:terminalId}",
									description: t.localize(12390, null),
								},
								{
									label: "onTerminalQuickFixRequest",
									body: "onTerminalQuickFixRequest:${1:quickFixId}",
									description: t.localize(12391, null),
								},
								{
									label: "onWalkthrough",
									body: "onWalkthrough:${1:walkthroughID}",
									description: t.localize(12392, null),
								},
								{
									label: "onIssueReporterOpened",
									body: "onIssueReporterOpened",
									description: t.localize(12393, null),
								},
								{
									label: "onChatParticipant",
									body: "onChatParticipant:${1:participantId}",
									description: t.localize(12394, null),
								},
								{
									label: "onLanguageModelTool",
									body: "onLanguageModelTool:${1:toolId}",
									description: t.localize(12395, null),
								},
								{ label: "*", description: t.localize(12396, null), body: "*" },
							],
						},
					},
					badges: {
						type: "array",
						description: t.localize(12397, null),
						items: {
							type: "object",
							required: ["url", "href", "description"],
							properties: {
								url: { type: "string", description: t.localize(12398, null) },
								href: { type: "string", description: t.localize(12399, null) },
								description: {
									type: "string",
									description: t.localize(12400, null),
								},
							},
						},
					},
					markdown: {
						type: "string",
						description: t.localize(12401, null),
						enum: ["github", "standard"],
						default: "github",
					},
					qna: {
						default: "marketplace",
						description: t.localize(12402, null),
						anyOf: [
							{ type: ["string", "boolean"], enum: ["marketplace", !1] },
							{ type: "string" },
						],
					},
					extensionDependencies: {
						description: t.localize(12403, null),
						type: "array",
						uniqueItems: !0,
						items: { type: "string", pattern: E.$rp },
					},
					extensionPack: {
						description: t.localize(12404, null),
						type: "array",
						uniqueItems: !0,
						items: { type: "string", pattern: E.$rp },
					},
					extensionKind: {
						description: t.localize(12405, null),
						type: "array",
						items: p,
						default: ["workspace"],
						defaultSnippets: [
							{ body: ["ui"], description: t.localize(12406, null) },
							{ body: ["workspace"], description: t.localize(12407, null) },
							{
								body: ["ui", "workspace"],
								description: t.localize(12408, null),
							},
							{
								body: ["workspace", "ui"],
								description: t.localize(12409, null),
							},
							{ body: [], description: t.localize(12410, null) },
						],
					},
					capabilities: {
						description: t.localize(12411, null),
						type: "object",
						properties: {
							virtualWorkspaces: {
								description: t.localize(12412, null),
								type: ["boolean", "object"],
								defaultSnippets: [
									{
										label: "limited",
										body: { supported: "${1:limited}", description: "${2}" },
									},
									{
										label: "false",
										body: { supported: !1, description: "${2}" },
									},
								],
								default: (!0).valueOf,
								properties: {
									supported: {
										markdownDescription: t.localize(12413, null),
										type: ["string", "boolean"],
										enum: ["limited", !0, !1],
										enumDescriptions: [
											t.localize(12414, null),
											t.localize(12415, null),
											t.localize(12416, null),
										],
									},
									description: {
										type: "string",
										markdownDescription: t.localize(12417, null),
									},
								},
							},
							untrustedWorkspaces: {
								description: t.localize(12418, null),
								type: "object",
								required: ["supported"],
								defaultSnippets: [
									{ body: { supported: "${1:limited}", description: "${2}" } },
								],
								properties: {
									supported: {
										markdownDescription: t.localize(12419, null),
										type: ["string", "boolean"],
										enum: ["limited", !0, !1],
										enumDescriptions: [
											t.localize(12420, null),
											t.localize(12421, null),
											t.localize(12422, null),
										],
									},
									restrictedConfigurations: {
										description: t.localize(12423, null),
										type: "array",
										items: { type: "string" },
									},
									description: {
										type: "string",
										markdownDescription: t.localize(12424, null),
									},
								},
							},
						},
					},
					sponsor: {
						description: t.localize(12425, null),
						type: "object",
						defaultSnippets: [{ body: { url: "${1:https:}" } }],
						properties: {
							url: { description: t.localize(12426, null), type: "string" },
						},
					},
					scripts: {
						type: "object",
						properties: {
							"vscode:prepublish": {
								description: t.localize(12427, null),
								type: "string",
							},
							"vscode:uninstall": {
								description: t.localize(12428, null),
								type: "string",
							},
						},
					},
					icon: { type: "string", description: t.localize(12429, null) },
					l10n: { type: "string", description: t.localize(12430, null) },
					pricing: {
						type: "string",
						markdownDescription: t.localize(12431, null),
						enum: ["Free", "Trial"],
						default: "Free",
					},
				},
			};
			class f {
				constructor() {
					this.a = new Map();
				}
				registerExtensionPoint(l) {
					if (this.a.has(l.extensionPoint))
						throw new Error("Duplicate extension point: " + l.extensionPoint);
					const y = new g(l.extensionPoint, l.defaultExtensionKind);
					return (
						this.a.set(l.extensionPoint, y),
						l.activationEventsGenerator &&
							u.$a2.register(l.extensionPoint, l.activationEventsGenerator),
						(e.$l2.properties.contributes.properties[l.extensionPoint] =
							l.jsonSchema),
						h.registerSchema(o, e.$l2),
						y
					);
				}
				getExtensionPoints() {
					return Array.from(this.a.values());
				}
			}
			e.$m2 = f;
			const b = { ExtensionsRegistry: "ExtensionsRegistry" };
			d.$Io.add(b.ExtensionsRegistry, new f()),
				(e.$n2 = d.$Io.as(b.ExtensionsRegistry)),
				h.registerSchema(o, e.$l2),
				h.registerSchema(r.$Ck, {
					properties: {
						extensionEnabledApiProposals: {
							description: t.localize(12432, null),
							type: "object",
							properties: {},
							additionalProperties: {
								anyOf: [
									{
										type: "array",
										uniqueItems: !0,
										items: {
											type: "string",
											enum: Object.keys(a.allApiProposals),
											markdownEnumDescriptions: Object.values(
												a.allApiProposals,
											).map((s) => s.proposal),
										},
									},
								],
							},
						},
					},
				});
		},
	),
		define(
			de[3323],
			he([1, 0, 4, 82, 30, 175, 81, 250, 261, 28, 109, 244, 3, 102, 94]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					(i = mt(i));
				const g = w.$Io.as(d.$Jo.JSONContribution),
					p = w.$Io.as(C.$No.Configuration),
					o = {
						type: "object",
						defaultSnippets: [{ body: { title: "", properties: {} } }],
						properties: {
							title: { description: t.localize(2660, null), type: "string" },
							order: { description: t.localize(2661, null), type: "integer" },
							properties: {
								description: t.localize(2662, null),
								type: "object",
								propertyNames: {
									pattern: "\\S+",
									patternErrorMessage: t.localize(2663, null),
								},
								additionalProperties: {
									anyOf: [
										{
											title: t.localize(2664, null),
											$ref: "http://json-schema.org/draft-07/schema#",
										},
										{
											type: "object",
											properties: {
												scope: {
													type: "string",
													enum: [
														"application",
														"machine",
														"window",
														"resource",
														"language-overridable",
														"machine-overridable",
													],
													default: "window",
													enumDescriptions: [
														t.localize(2665, null),
														t.localize(2666, null),
														t.localize(2667, null),
														t.localize(2668, null),
														t.localize(2669, null),
														t.localize(2670, null),
													],
													markdownDescription: t.localize(2671, null),
												},
												enumDescriptions: {
													type: "array",
													items: { type: "string" },
													description: t.localize(2672, null),
												},
												markdownEnumDescriptions: {
													type: "array",
													items: { type: "string" },
													description: t.localize(2673, null),
												},
												enumItemLabels: {
													type: "array",
													items: { type: "string" },
													markdownDescription: t.localize(2674, null, "`enum`"),
												},
												markdownDescription: {
													type: "string",
													description: t.localize(2675, null),
												},
												deprecationMessage: {
													type: "string",
													description: t.localize(2676, null),
												},
												markdownDeprecationMessage: {
													type: "string",
													description: t.localize(2677, null),
												},
												editPresentation: {
													type: "string",
													enum: ["singlelineText", "multilineText"],
													enumDescriptions: [
														t.localize(2678, null),
														t.localize(2679, null),
													],
													default: "singlelineText",
													description: t.localize(2680, null),
												},
												order: {
													type: "integer",
													description: t.localize(2681, null),
												},
												ignoreSync: {
													type: "boolean",
													description: t.localize(2682, null),
												},
											},
										},
									],
								},
							},
						},
					};
				let f;
				const b = E.$n2.registerExtensionPoint({
					extensionPoint: "configurationDefaults",
					jsonSchema: { $ref: C.$Vo },
				});
				b.setHandler(($, { added: v, removed: S }) => {
					f && p.deltaConfiguration(f);
					const I = (f = {});
					if (
						(queueMicrotask(() => {
							f === I && (p.deltaConfiguration(f), (f = void 0));
						}),
						S.length)
					) {
						const T = S.map((P) => ({
							overrides: i.$vo(P.value),
							source: {
								id: P.description.identifier.value,
								displayName: P.description.displayName,
							},
						}));
						f.removedDefaults = T;
					}
					if (v.length) {
						const T = p.getConfigurationProperties(),
							P = [
								C.ConfigurationScope.MACHINE_OVERRIDABLE,
								C.ConfigurationScope.WINDOW,
								C.ConfigurationScope.RESOURCE,
								C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
							],
							k = v.map((L) => {
								const D = i.$vo(L.value);
								for (const M of Object.keys(D)) {
									const N = T[M];
									if (N?.disallowConfigurationDefault) {
										L.collector.warn(t.localize(2683, null, M)), delete D[M];
										continue;
									}
									if (!C.$Xo.test(M) && N?.scope && !P.includes(N.scope)) {
										L.collector.warn(t.localize(2684, null, M)), delete D[M];
										continue;
									}
								}
								return {
									overrides: D,
									source: {
										id: L.description.identifier.value,
										displayName: L.description.displayName,
									},
								};
							});
						f.addedDefaults = k;
					}
				});
				const s = E.$n2.registerExtensionPoint({
						extensionPoint: "configuration",
						deps: [b],
						jsonSchema: {
							description: t.localize(2685, null),
							oneOf: [o, { type: "array", items: o }],
						},
					}),
					l = new u.$In();
				s.setHandler(($, { added: v, removed: S }) => {
					if (((f ??= {}), S.length)) {
						const k = [];
						for (const L of S)
							k.push(...(l.get(L.description.identifier) || [])),
								l.delete(L.description.identifier);
						f.removedConfigurations = k;
					}
					const I = new Set();
					function T(k, L) {
						const D = i.$vo(k);
						return (
							D.title &&
								typeof D.title != "string" &&
								L.collector.error(t.localize(2686, null)),
							P(D, L),
							(D.id = k.id || L.description.identifier.value),
							(D.extensionInfo = {
								id: L.description.identifier.value,
								displayName: L.description.displayName,
							}),
							(D.restrictedProperties =
								L.description.capabilities?.untrustedWorkspaces?.supported ===
								"limited"
									? L.description.capabilities?.untrustedWorkspaces
											.restrictedConfigurations
									: void 0),
							(D.title =
								D.title ||
								L.description.displayName ||
								L.description.identifier.value),
							D
						);
					}
					function P(k, L) {
						const D = k.properties;
						if (D) {
							typeof D != "object" &&
								(L.collector.error(t.localize(2687, null)),
								(k.properties = {}));
							for (const N in D) {
								const A = D[N],
									R = (0, C.$2o)(N, A);
								if (R) {
									delete D[N], L.collector.warn(R);
									continue;
								}
								if (I.has(N)) {
									delete D[N], L.collector.warn(t.localize(2688, null, N));
									continue;
								}
								if (!(0, r.$ng)(A)) {
									delete D[N], L.collector.error(t.localize(2689, null, N));
									continue;
								}
								I.add(N),
									(A.scope = A.scope
										? (0, C.$5o)(A.scope.toString())
										: C.ConfigurationScope.WINDOW);
							}
						}
						const M = k.allOf;
						if (M) {
							L.collector.error(t.localize(2690, null));
							for (const N of M) P(N, L);
						}
					}
					if (v.length) {
						const k = [];
						for (const L of v) {
							const D = [],
								M = L.value;
							Array.isArray(M)
								? M.forEach((N) => D.push(T(N, L)))
								: D.push(T(M, L)),
								l.set(L.description.identifier, D),
								k.push(...D);
						}
						f.addedConfigurations = k;
					}
					p.deltaConfiguration(f), (f = void 0);
				}),
					g.registerSchema("vscode://schemas/workspaceConfig", {
						allowComments: !0,
						allowTrailingCommas: !0,
						default: { folders: [{ path: "" }], settings: {} },
						required: ["folders"],
						properties: {
							folders: {
								minItems: 0,
								uniqueItems: !0,
								description: t.localize(2691, null),
								items: {
									type: "object",
									defaultSnippets: [{ body: { path: "$1" } }],
									oneOf: [
										{
											properties: {
												path: {
													type: "string",
													description: t.localize(2692, null),
												},
												name: {
													type: "string",
													description: t.localize(2693, null),
												},
											},
											required: ["path"],
										},
										{
											properties: {
												uri: {
													type: "string",
													description: t.localize(2694, null),
												},
												name: {
													type: "string",
													description: t.localize(2695, null),
												},
											},
											required: ["uri"],
										},
									],
								},
							},
							settings: {
								type: "object",
								default: {},
								description: t.localize(2696, null),
								$ref: m.$CZ,
							},
							launch: {
								type: "object",
								default: { configurations: [], compounds: [] },
								description: t.localize(2697, null),
								$ref: m.$EZ,
							},
							tasks: {
								type: "object",
								default: { version: "2.0.0", tasks: [] },
								description: t.localize(2698, null),
								$ref: m.$FZ,
							},
							extensions: {
								type: "object",
								default: {},
								description: t.localize(2699, null),
								$ref: "vscode://schemas/extensions",
							},
							remoteAuthority: {
								type: "string",
								doNotSuggest: !0,
								description: t.localize(2700, null),
							},
							transient: {
								type: "boolean",
								doNotSuggest: !0,
								description: t.localize(2701, null),
							},
						},
						errorMessage: t.localize(2702, null),
					});
				class y extends h.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(v) {
						return !!v.contributes?.configuration;
					}
					render(v) {
						const S = v.contributes?.configuration
								? Array.isArray(v.contributes.configuration)
									? v.contributes.configuration
									: [v.contributes.configuration]
								: [],
							I = (0, C.$4o)(S),
							T = I ? Object.keys(I) : [],
							P = [
								t.localize(2703, null),
								t.localize(2704, null),
								t.localize(2705, null),
							],
							k = T.sort((L, D) => L.localeCompare(D)).map((L) => [
								new n.$cl().appendMarkdown(`\`${L}\``),
								I[L].markdownDescription
									? new n.$cl(I[L].markdownDescription, !1)
									: (I[L].description ?? ""),
								new n.$cl().appendCodeblock(
									"json",
									JSON.stringify(
										(0, r.$sg)(I[L].default)
											? (0, C.$1o)(I[L].type)
											: I[L].default,
										null,
										2,
									),
								),
							]);
						return { data: { headers: P, rows: k }, dispose: () => {} };
					}
				}
				w.$Io
					.as(a.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "configuration",
						label: t.localize(2706, null),
						access: { canToggle: !1 },
						renderer: new c.$Ji(y),
					});
			},
		),
		define(
			de[3324],
			he([1, 0, 4, 175, 19, 28, 3, 244, 30, 102, 94]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hmc = void 0),
					(t = mt(t)),
					(w = mt(w));
				const a = i.$n2.registerExtensionPoint({
					extensionPoint: "jsonValidation",
					defaultExtensionKind: ["workspace", "web"],
					jsonSchema: {
						description: t.localize(2726, null),
						type: "array",
						defaultSnippets: [
							{ body: [{ fileMatch: "${1:file.json}", url: "${2:url}" }] },
						],
						items: {
							type: "object",
							defaultSnippets: [
								{ body: { fileMatch: "${1:file.json}", url: "${2:url}" } },
							],
							properties: {
								fileMatch: {
									type: ["string", "array"],
									description: t.localize(2727, null),
									items: { type: ["string"] },
								},
								url: { description: t.localize(2728, null), type: "string" },
							},
						},
					},
				});
				class h {
					constructor() {
						a.setHandler((g) => {
							for (const p of g) {
								const o = p.value,
									f = p.collector,
									b = p.description.extensionLocation;
								if (!o || !Array.isArray(o)) {
									f.error(t.localize(2729, null));
									return;
								}
								o.forEach((s) => {
									if (
										!(0, E.$lg)(s.fileMatch) &&
										!(Array.isArray(s.fileMatch) && s.fileMatch.every(E.$lg))
									) {
										f.error(t.localize(2730, null));
										return;
									}
									const l = s.url;
									if (!(0, E.$lg)(l)) {
										f.error(t.localize(2731, null));
										return;
									}
									if (l.startsWith("./"))
										try {
											const y = w.$nh(b, l);
											w.$hh(y, b) ||
												f.warn(
													t.localize(2732, null, a.name, y.toString(), b.path),
												);
										} catch (y) {
											f.error(t.localize(2733, null, y.message));
										}
									else if (!/^[^:/?#]+:\/\//.test(l)) {
										f.error(t.localize(2734, null));
										return;
									}
								});
							}
						});
					}
				}
				e.$hmc = h;
				class c extends C.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(g) {
						return !!g.contributes?.jsonValidation;
					}
					render(g) {
						const p = g.contributes?.jsonValidation || [];
						if (!p.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const o = [t.localize(2735, null), t.localize(2736, null)],
							f = p.map((b) => [
								new u.$cl().appendMarkdown(
									`\`${Array.isArray(b.fileMatch) ? b.fileMatch.join(", ") : b.fileMatch}\``,
								),
								b.url,
							]);
						return { data: { headers: o, rows: f }, dispose: () => {} };
					}
				}
				m.$Io
					.as(d.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "jsonValidation",
						label: t.localize(2737, null),
						access: { canToggle: !1 },
						renderer: new r.$Ji(c),
					});
			},
		),
		define(
			de[1023],
			he([1, 0, 6, 103, 3, 37, 4, 109, 5, 34, 53, 175]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$C2 = e.$B2 = e.$A2 = e.ChatMessageRole = void 0);
				var h;
				(function (g) {
					(g[(g.System = 0)] = "System"),
						(g[(g.User = 1)] = "User"),
						(g[(g.Assistant = 2)] = "Assistant");
				})(h || (e.ChatMessageRole = h = {})),
					(e.$A2 = (0, m.$Mi)("ILanguageModelsService"));
				const c = {
					type: "object",
					properties: {
						vendor: {
							type: "string",
							description: (0, C.localize)(4766, null),
						},
					},
				};
				e.$B2 = a.$n2.registerExtensionPoint({
					extensionPoint: "languageModels",
					jsonSchema: {
						description: (0, C.localize)(4767, null),
						oneOf: [c, { type: "array", items: c }],
					},
					activationEventsGenerator: (g, p) => {
						for (const o of g) p.push(`onLanguageModelChat:${o.vendor}`);
					},
				});
				let n = class {
					constructor(p, o) {
						(this.e = p),
							(this.f = o),
							(this.a = new w.$Zc()),
							(this.b = new Map()),
							(this.c = new Set()),
							(this.d = this.a.add(new t.$re())),
							(this.onDidChangeLanguageModels = this.d.event),
							this.a.add(
								e.$B2.setHandler((f) => {
									this.c.clear();
									for (const s of f) {
										if (!(0, u.$t2)(s.description, "chatProvider")) {
											s.collector.error((0, C.localize)(4768, null));
											continue;
										}
										for (const l of i.Iterable.wrap(s.value)) {
											if (this.c.has(l.vendor)) {
												s.collector.error(
													(0, C.localize)(4769, null, l.vendor),
												);
												continue;
											}
											if ((0, E.$jf)(l.vendor)) {
												s.collector.error((0, C.localize)(4770, null));
												continue;
											}
											if (l.vendor.trim() !== l.vendor) {
												s.collector.error((0, C.localize)(4771, null));
												continue;
											}
											this.c.add(l.vendor);
										}
									}
									const b = [];
									for (const [s, l] of this.b)
										this.c.has(l.metadata.vendor) ||
											(this.b.delete(s), b.push(s));
									b.length > 0 && this.d.fire({ removed: b });
								}),
							);
					}
					dispose() {
						this.a.dispose(), this.b.clear();
					}
					getLanguageModelIds() {
						return Array.from(this.b.keys());
					}
					lookupLanguageModel(p) {
						return this.b.get(p)?.metadata;
					}
					async selectLanguageModels(p) {
						if (p.vendor)
							await this.e.activateByEvent(`onLanguageModelChat:${p.vendor}}`);
						else {
							const f = Array.from(this.c).map((b) =>
								this.e.activateByEvent(`onLanguageModelChat:${b}`),
							);
							await Promise.all(f);
						}
						const o = [];
						for (const [f, b] of this.b)
							(p.vendor === void 0 || b.metadata.vendor === p.vendor) &&
								(p.family === void 0 || b.metadata.family === p.family) &&
								(p.version === void 0 || b.metadata.version === p.version) &&
								(p.identifier === void 0 || b.metadata.id === p.identifier) &&
								(!b.metadata.targetExtensions ||
									b.metadata.targetExtensions.some((s) =>
										d.$Gn.equals(s, p.extension),
									)) &&
								o.push(f);
						return this.f.trace("[LM] selected language models", p, o), o;
					}
					registerLanguageModelChat(p, o) {
						if (
							(this.f.trace(
								"[LM] registering language model chat",
								p,
								o.metadata,
							),
							!this.c.has(o.metadata.vendor))
						)
							throw new Error(
								`Chat response provider uses UNKNOWN vendor ${o.metadata.vendor}.`,
							);
						if (this.b.has(p))
							throw new Error(
								`Chat response provider with identifier ${p} is already registered.`,
							);
						return (
							this.b.set(p, o),
							this.d.fire({ added: [{ identifier: p, metadata: o.metadata }] }),
							(0, w.$Yc)(() => {
								this.b.delete(p) &&
									(this.d.fire({ removed: [p] }),
									this.f.trace(
										"[LM] UNregistered language model chat",
										p,
										o.metadata,
									));
							})
						);
					}
					async sendChatRequest(p, o, f, b, s) {
						const l = this.b.get(p);
						if (!l)
							throw new Error(
								`Chat response provider with identifier ${p} is not registered.`,
							);
						return l.sendChatRequest(f, o, b, s);
					}
					computeTokenLength(p, o, f) {
						const b = this.b.get(p);
						if (!b)
							throw new Error(
								`Chat response provider with identifier ${p} is not registered.`,
							);
						return b.provideTokenCount(o, f);
					}
				};
				(e.$C2 = n), (e.$C2 = n = Ne([j(0, u.$q2), j(1, r.$ik)], n));
			},
		),
		define(
			de[3325],
			he([1, 0, 3, 19, 26, 4, 8, 34, 569, 175]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YIc = void 0),
					(r = mt(r));
				const u = r.$n2.registerExtensionPoint({
					extensionPoint: "languageModelTools",
					activationEventsGenerator: (c, n) => {
						for (const g of c) n.push(`onLanguageModelTool:${g.id}`);
					},
					jsonSchema: {
						description: (0, E.localize)(4774, null),
						type: "array",
						items: {
							additionalProperties: !1,
							type: "object",
							defaultSnippets: [{ body: { name: "", description: "" } }],
							required: ["id", "modelDescription"],
							properties: {
								id: {
									description: (0, E.localize)(4775, null),
									type: "string",
									pattern: "^[\\w-]+$",
								},
								name: {
									description: (0, E.localize)(
										4776,
										null,
										"`canBeInvokedManually`",
									),
									type: "string",
									pattern: "^[\\w-]+$",
								},
								displayName: {
									description: (0, E.localize)(4777, null),
									type: "string",
								},
								userDescription: {
									description: (0, E.localize)(4778, null),
									type: "string",
								},
								modelDescription: {
									description: (0, E.localize)(4779, null),
									type: "string",
								},
								parametersSchema: {
									description: (0, E.localize)(4780, null),
									type: "object",
									$ref: "http://json-schema.org/draft-07/schema#",
								},
								canBeInvokedManually: {
									description: (0, E.localize)(4781, null),
									type: "boolean",
								},
								icon: {
									description: (0, E.localize)(4782, null),
									anyOf: [
										{ type: "string" },
										{
											type: "object",
											properties: {
												light: {
													description: (0, E.localize)(4783, null),
													type: "string",
												},
												dark: {
													description: (0, E.localize)(4784, null),
													type: "string",
												},
											},
										},
									],
								},
								when: {
									markdownDescription: (0, E.localize)(4785, null),
									type: "string",
								},
							},
						},
					},
				});
				function a(c, n) {
					return `${c.value}/${n}`;
				}
				let h = class {
					static {
						this.ID = "workbench.contrib.toolsExtensionPointHandler";
					}
					constructor(n, g) {
						(this.a = new t.$0c()),
							u.setHandler((p, o) => {
								for (const f of o.added)
									for (const b of f.value) {
										if (!b.id || !b.modelDescription) {
											g.error(
												`Extension '${f.description.identifier.value}' CANNOT register tool without name and modelDescription: ${JSON.stringify(b)}`,
											);
											continue;
										}
										if (!b.id.match(/^[\w-]+$/)) {
											g.error(
												`Extension '${f.description.identifier.value}' CANNOT register tool with invalid id: ${b.id}. The id must match /^[\\w-]+$/.`,
											);
											continue;
										}
										if (b.canBeInvokedManually && !b.name) {
											g.error(
												`Extension '${f.description.identifier.value}' CANNOT register tool with 'canBeInvokedManually' set without a name: ${JSON.stringify(b)}`,
											);
											continue;
										}
										const s = b.icon;
										let l;
										typeof s == "string"
											? (l = w.ThemeIcon.fromString(s) ?? {
													dark: (0, i.$nh)(f.description.extensionLocation, s),
													light: (0, i.$nh)(f.description.extensionLocation, s),
												})
											: s &&
												(l = {
													dark: (0, i.$nh)(
														f.description.extensionLocation,
														s.dark,
													),
													light: (0, i.$nh)(
														f.description.extensionLocation,
														s.light,
													),
												});
										const y = {
												...b,
												icon: l,
												when: b.when ? C.$Kj.deserialize(b.when) : void 0,
											},
											$ = n.registerToolData(y);
										this.a.set(a(f.description.identifier, b.id), $);
									}
								for (const f of o.removed)
									for (const b of f.value)
										this.a.deleteAndDispose(a(f.description.identifier, b.id));
							});
					}
				};
				(e.$YIc = h), (e.$YIc = h = Ne([j(0, m.$E2), j(1, d.$ik)], h));
			},
		),
		define(
			de[1812],
			he([1, 0, 175, 4, 261, 1795, 3, 244, 102, 30]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SQc = e.$RQc = e.$QQc = e.$PQc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(e.$PQc = t.$n2.registerExtensionPoint({
						extensionPoint: "debuggers",
						defaultExtensionKind: ["workspace"],
						jsonSchema: {
							description: i.localize(5857, null),
							type: "array",
							defaultSnippets: [{ body: [{ type: "" }] }],
							items: {
								additionalProperties: !1,
								type: "object",
								defaultSnippets: [
									{ body: { type: "", program: "", runtime: "" } },
								],
								properties: {
									type: { description: i.localize(5858, null), type: "string" },
									label: {
										description: i.localize(5859, null),
										type: "string",
									},
									program: {
										description: i.localize(5860, null),
										type: "string",
									},
									args: { description: i.localize(5861, null), type: "array" },
									runtime: {
										description: i.localize(5862, null),
										type: "string",
									},
									runtimeArgs: {
										description: i.localize(5863, null),
										type: "array",
									},
									variables: {
										description: i.localize(5864, null),
										type: "object",
									},
									initialConfigurations: {
										description: i.localize(5865, null),
										type: ["array", "string"],
									},
									languages: {
										description: i.localize(5866, null),
										type: "array",
									},
									configurationSnippets: {
										description: i.localize(5867, null),
										type: "array",
									},
									configurationAttributes: {
										description: i.localize(5868, null),
										type: "object",
									},
									when: {
										description: i.localize(5869, null),
										type: "string",
										default: "",
									},
									hiddenWhen: {
										description: i.localize(5870, null),
										type: "string",
										default: "",
									},
									deprecated: {
										description: i.localize(5871, null),
										type: "string",
										default: "",
									},
									windows: {
										description: i.localize(5872, null),
										type: "object",
										properties: {
											runtime: {
												description: i.localize(5873, null),
												type: "string",
											},
										},
									},
									osx: {
										description: i.localize(5874, null),
										type: "object",
										properties: {
											runtime: {
												description: i.localize(5875, null),
												type: "string",
											},
										},
									},
									linux: {
										description: i.localize(5876, null),
										type: "object",
										properties: {
											runtime: {
												description: i.localize(5877, null),
												type: "string",
											},
										},
									},
									strings: {
										description: i.localize(5878, null),
										type: "object",
										properties: {
											unverifiedBreakpoints: {
												description: i.localize(5879, null),
												type: "string",
											},
										},
									},
								},
							},
						},
					})),
					(e.$QQc = t.$n2.registerExtensionPoint({
						extensionPoint: "breakpoints",
						jsonSchema: {
							description: i.localize(5880, null),
							type: "array",
							defaultSnippets: [{ body: [{ language: "" }] }],
							items: {
								type: "object",
								additionalProperties: !1,
								defaultSnippets: [{ body: { language: "" } }],
								properties: {
									language: {
										description: i.localize(5881, null),
										type: "string",
									},
									when: {
										description: i.localize(5882, null),
										type: "string",
										default: "",
									},
								},
							},
						},
					})),
					(e.$RQc = {
						type: "object",
						description: i.localize(5883, null),
						properties: {
							hidden: {
								type: "boolean",
								default: !1,
								description: i.localize(5884, null),
							},
							group: {
								type: "string",
								default: "",
								description: i.localize(5885, null),
							},
							order: {
								type: "number",
								default: 1,
								description: i.localize(5886, null),
							},
						},
						default: { hidden: !1, group: "", order: 1 },
					});
				const u = { name: "Compound", configurations: [] };
				e.$SQc = {
					id: w.$EZ,
					type: "object",
					title: i.localize(5887, null),
					allowTrailingCommas: !0,
					allowComments: !0,
					required: [],
					default: { version: "0.2.0", configurations: [], compounds: [] },
					properties: {
						version: {
							type: "string",
							description: i.localize(5888, null),
							default: "0.2.0",
						},
						configurations: {
							type: "array",
							description: i.localize(5889, null),
							items: { defaultSnippets: [], type: "object", oneOf: [] },
						},
						compounds: {
							type: "array",
							description: i.localize(5890, null),
							items: {
								type: "object",
								required: ["name", "configurations"],
								properties: {
									name: { type: "string", description: i.localize(5891, null) },
									presentation: e.$RQc,
									configurations: {
										type: "array",
										default: [],
										items: {
											oneOf: [
												{ enum: [], description: i.localize(5892, null) },
												{
													type: "object",
													required: ["name"],
													properties: {
														name: {
															enum: [],
															description: i.localize(5893, null),
														},
														folder: {
															enum: [],
															description: i.localize(5894, null),
														},
													},
												},
											],
										},
										description: i.localize(5895, null),
									},
									stopAll: {
										type: "boolean",
										default: !1,
										description: i.localize(5896, null),
									},
									preLaunchTask: {
										type: "string",
										default: "",
										description: i.localize(5897, null),
									},
								},
								default: u,
							},
							default: [u],
						},
						inputs: E.$OQc.definitions.inputs,
					},
				};
				class a extends C.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(c) {
						return !!c.contributes?.debuggers;
					}
					render(c) {
						const n = c.contributes?.debuggers || [];
						if (!n.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const g = [i.localize(5898, null), i.localize(5899, null)],
							p = n.map((o) => [o.label ?? "", o.type]);
						return { data: { headers: g, rows: p }, dispose: () => {} };
					}
				}
				r.$Io
					.as(d.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "debuggers",
						label: i.localize(5900, null),
						access: { canToggle: !1 },
						renderer: new m.$Ji(a),
					});
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[570],
		he([
			1, 0, 4, 82, 37, 229, 54, 28, 47, 12, 111, 9, 1500, 24, 23, 90, 175, 6,
			22,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$03 =
					e.$93 =
					e.$83 =
					e.Schemas =
					e.$73 =
					e.$63 =
					e.Config =
					e.ApplyToKind =
					e.ProblemLocationKind =
					e.FileLocationKind =
						void 0),
				(e.$33 = y),
				(e.$43 = $),
				(e.$53 = S),
				(i = mt(i)),
				(w = mt(w)),
				(E = mt(E)),
				(d = mt(d)),
				(m = mt(m)),
				(r = mt(r)),
				(u = xi(u));
			var b;
			(function (z) {
				(z[(z.Default = 0)] = "Default"),
					(z[(z.Relative = 1)] = "Relative"),
					(z[(z.Absolute = 2)] = "Absolute"),
					(z[(z.AutoDetect = 3)] = "AutoDetect"),
					(z[(z.Search = 4)] = "Search");
			})(b || (e.FileLocationKind = b = {})),
				(function (z) {
					function F(x) {
						return (
							(x = x.toLowerCase()),
							x === "absolute"
								? z.Absolute
								: x === "relative"
									? z.Relative
									: x === "autodetect"
										? z.AutoDetect
										: x === "search"
											? z.Search
											: void 0
						);
					}
					z.fromString = F;
				})(b || (e.FileLocationKind = b = {}));
			var s;
			(function (z) {
				(z[(z.File = 0)] = "File"), (z[(z.Location = 1)] = "Location");
			})(s || (e.ProblemLocationKind = s = {})),
				(function (z) {
					function F(x) {
						return (
							(x = x.toLowerCase()),
							x === "file" ? z.File : x === "location" ? z.Location : void 0
						);
					}
					z.fromString = F;
				})(s || (e.ProblemLocationKind = s = {}));
			var l;
			(function (z) {
				(z[(z.allDocuments = 0)] = "allDocuments"),
					(z[(z.openDocuments = 1)] = "openDocuments"),
					(z[(z.closedDocuments = 2)] = "closedDocuments");
			})(l || (e.ApplyToKind = l = {})),
				(function (z) {
					function F(x) {
						return (
							(x = x.toLowerCase()),
							x === "alldocuments"
								? z.allDocuments
								: x === "opendocuments"
									? z.openDocuments
									: x === "closeddocuments"
										? z.closedDocuments
										: void 0
						);
					}
					z.fromString = F;
				})(l || (e.ApplyToKind = l = {}));
			function y(z) {
				return !!(z && d.$lg(z.name));
			}
			async function $(z, F, x) {
				const H = F.fileLocation;
				let q;
				if (H === b.Absolute) q = z;
				else if (H === b.Relative && F.filePrefix && d.$lg(F.filePrefix))
					q = (0, C.$oc)(F.filePrefix, z);
				else if (H === b.AutoDetect) {
					const V = i.$vo(F);
					if (((V.fileLocation = b.Relative), x)) {
						const G = await $(z, V);
						let K;
						try {
							K = await x.stat(G);
						} catch {}
						if (K) return G;
					}
					return (V.fileLocation = b.Absolute), $(z, V);
				} else if (H === b.Search && x) {
					const V = x.getProvider(n.Schemas.file);
					if ((V && (q = (await v(z, V, F.filePrefix))?.path), !q)) {
						const G = i.$vo(F);
						return (G.fileLocation = b.Absolute), $(z, G);
					}
				}
				if (q === void 0)
					throw new Error(
						"FileLocationKind is not actionable. Does the matcher have a filePrefix? This should never happen.",
					);
				return (
					(q = (0, C.$mc)(q)),
					(q = q.replace(/\\/g, "/")),
					q[0] !== "/" && (q = "/" + q),
					F.uriProvider !== void 0 ? F.uriProvider(q) : a.URI.file(q)
				);
			}
			async function v(z, F, x) {
				const H = new Set(
					(0, c.$6b)(x.exclude || []).map((V) => a.URI.file(V).path),
				);
				async function q(V) {
					if (H.has(V.path)) return;
					const G = await F.readdir(V),
						K = [];
					for (const [J, W] of G) {
						if (W === f.FileType.Directory) {
							K.push(a.URI.joinPath(V, J));
							continue;
						}
						if (W === f.FileType.File) {
							const X = a.URI.joinPath(V, J);
							if (X.path.endsWith(z)) return X;
						}
					}
					for (const J of K) {
						const W = await q(J);
						if (W) return W;
					}
				}
				for (const V of (0, c.$6b)(x.include || [])) {
					const G = await q(a.URI.file(V));
					if (G) return G;
				}
			}
			function S(z, F) {
				const x = z.pattern;
				return Array.isArray(x) ? new k(z, F) : new P(z, F);
			}
			const I =
				r.OS === r.OperatingSystem.Windows
					? `\r
`
					: `
`;
			class T {
				constructor(F, x) {
					(this.a = F), (this.b = x);
				}
				handle(F, x = 0) {
					return { match: null, continue: !1 };
				}
				next(F) {
					return null;
				}
				c(F, x, H) {
					return F
						? (this.e(F, "file", x, H, !0),
							this.d(F, "message", x, H, !0),
							this.e(F, "code", x, H, !0),
							this.e(F, "severity", x, H, !0),
							this.e(F, "location", x, H, !0),
							this.e(F, "line", x, H),
							this.e(F, "character", x, H),
							this.e(F, "endLine", x, H),
							this.e(F, "endCharacter", x, H),
							!0)
						: !1;
				}
				d(F, x, H, q, V = !1) {
					const G = H[x];
					if (d.$sg(F[x])) this.e(F, x, H, q, V);
					else if (!d.$sg(G) && G < q.length) {
						let K = q[G];
						V && (K = w.$sf(K)), (F[x] += I + K);
					}
				}
				e(F, x, H, q, V = !1) {
					const G = H[x];
					if (d.$sg(F[x]) && !d.$sg(G) && G < q.length) {
						let K = q[G];
						K !== void 0 && (V && (K = w.$sf(K)), (F[x] = K));
					}
				}
				f(F) {
					try {
						const x = this.h(F);
						if (F.file && x && F.message) {
							const H = {
								severity: this.l(F),
								startLineNumber: x.startLineNumber,
								startColumn: x.startCharacter,
								endLineNumber: x.endLineNumber,
								endColumn: x.endCharacter,
								message: F.message,
							};
							return (
								F.code !== void 0 && (H.code = F.code),
								this.a.source !== void 0 && (H.source = this.a.source),
								{ description: this.a, resource: this.g(F.file), marker: H }
							);
						}
					} catch {
						console.error(
							`Failed to convert problem data into match: ${JSON.stringify(F)}`,
						);
					}
				}
				g(F) {
					return $(F, this.a, this.b);
				}
				h(F) {
					if (F.kind === s.File) return this.k(0, 0, 0, 0);
					if (F.location) return this.j(F.location);
					if (!F.line) return null;
					const x = parseInt(F.line),
						H = F.character ? parseInt(F.character) : void 0,
						q = F.endLine ? parseInt(F.endLine) : void 0,
						V = F.endCharacter ? parseInt(F.endCharacter) : void 0;
					return this.k(x, H, q, V);
				}
				j(F) {
					if (!F || !F.match(/(\d+|\d+,\d+|\d+,\d+,\d+,\d+)/)) return null;
					const x = F.split(","),
						H = parseInt(x[0]),
						q = x.length > 1 ? parseInt(x[1]) : void 0;
					return x.length > 3
						? this.k(H, q, parseInt(x[2]), parseInt(x[3]))
						: this.k(H, q, void 0, void 0);
				}
				k(F, x, H, q) {
					return x !== void 0 && q !== void 0
						? {
								startLineNumber: F,
								startCharacter: x,
								endLineNumber: H || F,
								endCharacter: q,
							}
						: x !== void 0
							? {
									startLineNumber: F,
									startCharacter: x,
									endLineNumber: F,
									endCharacter: x,
								}
							: {
									startLineNumber: F,
									startCharacter: 1,
									endLineNumber: F,
									endCharacter: 2 ** 31 - 1,
								};
				}
				l(F) {
					let x = null;
					if (F.severity) {
						const H = F.severity;
						H &&
							((x = u.default.fromValue(H)),
							x === u.default.Ignore &&
								(H === "E"
									? (x = u.default.Error)
									: H === "W"
										? (x = u.default.Warning)
										: (H === "I" || w.$Mf(H, "hint") || w.$Mf(H, "note")) &&
											(x = u.default.Info)));
					}
					return (
						(x === null || x === u.default.Ignore) &&
							(x = this.a.severity || u.default.Error),
						g.MarkerSeverity.fromSeverity(x)
					);
				}
			}
			class P extends T {
				constructor(F, x) {
					super(F, x), (this.m = F.pattern);
				}
				get matchLength() {
					return 1;
				}
				handle(F, x = 0) {
					E.ok(F.length - x === 1);
					const H = Object.create(null);
					this.m.kind !== void 0 && (H.kind = this.m.kind);
					const q = this.m.regexp.exec(F[x]);
					if (q) {
						this.c(H, this.m, q);
						const V = this.f(H);
						if (V) return { match: V, continue: !1 };
					}
					return { match: null, continue: !1 };
				}
				next(F) {
					return null;
				}
			}
			class k extends T {
				constructor(F, x) {
					super(F, x), (this.m = F.pattern);
				}
				get matchLength() {
					return this.m.length;
				}
				handle(F, x = 0) {
					E.ok(F.length - x === this.m.length), (this.n = Object.create(null));
					let H = this.n;
					H.kind = this.m[0].kind;
					for (let G = 0; G < this.m.length; G++) {
						const K = this.m[G],
							J = K.regexp.exec(F[G + x]);
						if (J)
							K.loop && G === this.m.length - 1 && (H = i.$vo(H)),
								this.c(H, K, J);
						else return { match: null, continue: !1 };
					}
					const q = !!this.m[this.m.length - 1].loop;
					q || (this.n = void 0);
					const V = H ? this.f(H) : null;
					return { match: V || null, continue: q };
				}
				next(F) {
					const x = this.m[this.m.length - 1];
					E.ok(x.loop === !0 && this.n !== null);
					const H = x.regexp.exec(F);
					if (!H) return (this.n = void 0), null;
					const q = i.$vo(this.n);
					let V;
					return this.c(q, x, H) && (V = this.f(q)), V || null;
				}
			}
			var L;
			(function (z) {
				let F;
				(function (J) {
					function W(X) {
						const Y = X;
						return Y && d.$lg(Y.regexp);
					}
					J.is = W;
				})((F = z.CheckedProblemPattern || (z.CheckedProblemPattern = {})));
				let x;
				(function (J) {
					function W(X) {
						const Y = X;
						return Y && d.$lg(Y.name);
					}
					J.is = W;
				})((x = z.NamedProblemPattern || (z.NamedProblemPattern = {})));
				let H;
				(function (J) {
					function W(X) {
						const Y = X;
						return Y && x.is(Y) && d.$lg(Y.regexp);
					}
					J.is = W;
				})(
					(H =
						z.NamedCheckedProblemPattern ||
						(z.NamedCheckedProblemPattern = {})),
				);
				let q;
				(function (J) {
					function W(X) {
						return X && Array.isArray(X);
					}
					J.is = W;
				})((q = z.MultiLineProblemPattern || (z.MultiLineProblemPattern = {})));
				let V;
				(function (J) {
					function W(X) {
						if (!q.is(X)) return !1;
						for (const Y of X) if (!z.CheckedProblemPattern.is(Y)) return !1;
						return !0;
					}
					J.is = W;
				})(
					(V =
						z.MultiLineCheckedProblemPattern ||
						(z.MultiLineCheckedProblemPattern = {})),
				);
				let G;
				(function (J) {
					function W(X) {
						const Y = X;
						return (
							Y &&
							d.$lg(Y.name) &&
							Array.isArray(Y.patterns) &&
							V.is(Y.patterns)
						);
					}
					J.is = W;
				})(
					(G =
						z.NamedMultiLineCheckedProblemPattern ||
						(z.NamedMultiLineCheckedProblemPattern = {})),
				);
				function K(J) {
					return d.$lg(J.name);
				}
				z.isNamedProblemMatcher = K;
			})(L || (e.Config = L = {}));
			class D extends h.$23 {
				constructor(F) {
					super(F);
				}
				parse(F) {
					if (L.NamedMultiLineCheckedProblemPattern.is(F)) return this.c(F);
					if (L.MultiLineCheckedProblemPattern.is(F)) return this.d(F);
					if (L.NamedCheckedProblemPattern.is(F)) {
						const x = this.b(F);
						return (x.name = F.name), x;
					} else
						return L.CheckedProblemPattern.is(F)
							? this.b(F)
							: (this.error((0, t.localize)(9856, null)), null);
				}
				b(F) {
					const x = this.e(F, !0);
					return x === void 0
						? null
						: (x.kind === void 0 && (x.kind = s.Location),
							this.f([x]) ? x : null);
				}
				c(F) {
					const x = this.d(F.patterns);
					return x
						? { name: F.name, label: F.label ? F.label : F.name, patterns: x }
						: null;
				}
				d(F) {
					const x = [];
					for (let H = 0; H < F.length; H++) {
						const q = this.e(F[H], !1);
						if (q === void 0) return null;
						H < F.length - 1 &&
							!d.$sg(q.loop) &&
							q.loop &&
							((q.loop = !1), this.error((0, t.localize)(9857, null))),
							x.push(q);
					}
					return (
						x[0].kind === void 0 && (x[0].kind = s.Location),
						this.f(x) ? x : null
					);
				}
				e(F, x) {
					const H = this.g(F.regexp);
					if (H === void 0) return;
					let q = { regexp: H };
					F.kind && (q.kind = s.fromString(F.kind));
					function V(G, K, J, W) {
						const X = K[W];
						typeof X == "number" && (G[J] = X);
					}
					if (
						(V(q, F, "file", "file"),
						V(q, F, "location", "location"),
						V(q, F, "line", "line"),
						V(q, F, "character", "column"),
						V(q, F, "endLine", "endLine"),
						V(q, F, "endCharacter", "endColumn"),
						V(q, F, "severity", "severity"),
						V(q, F, "code", "code"),
						V(q, F, "message", "message"),
						(F.loop === !0 || F.loop === !1) && (q.loop = F.loop),
						x)
					)
						if (q.location || q.kind === s.File) {
							const G = { file: 1, message: 0 };
							q = i.$yo(q, G, !1);
						} else {
							const G = { file: 1, line: 2, character: 3, message: 0 };
							q = i.$yo(q, G, !1);
						}
					return q;
				}
				f(F) {
					let x = !1,
						H = !1,
						q = !1,
						V = !1;
					const G = F[0].kind === void 0 ? s.Location : F[0].kind;
					return (
						F.forEach((K, J) => {
							J !== 0 && K.kind && this.error((0, t.localize)(9858, null)),
								(x = x || !d.$sg(K.file)),
								(H = H || !d.$sg(K.message)),
								(q = q || !d.$sg(K.location)),
								(V = V || !d.$sg(K.line));
						}),
						x && H
							? G === s.Location && !(q || V)
								? (this.error((0, t.localize)(9860, null)), !1)
								: !0
							: (this.error((0, t.localize)(9859, null)), !1)
					);
				}
				g(F) {
					let x;
					try {
						x = new RegExp(F);
					} catch {
						this.error((0, t.localize)(9861, null, F));
					}
					return x;
				}
			}
			e.$63 = D;
			class M {
				constructor(F, x = new h.$13()) {
					(this.a = F), (this.b = x);
				}
				info(F) {
					(this.b.state = h.ValidationState.Info), this.a.info(F);
				}
				warn(F) {
					(this.b.state = h.ValidationState.Warning), this.a.warn(F);
				}
				error(F) {
					(this.b.state = h.ValidationState.Error), this.a.error(F);
				}
				fatal(F) {
					(this.b.state = h.ValidationState.Fatal), this.a.error(F);
				}
				get status() {
					return this.b;
				}
			}
			e.$73 = M;
			var N;
			(function (z) {
				(z.ProblemPattern = {
					default: {
						regexp: "^([^\\\\s].*)\\\\((\\\\d+,\\\\d+)\\\\):\\\\s*(.*)$",
						file: 1,
						location: 2,
						message: 3,
					},
					type: "object",
					additionalProperties: !1,
					properties: {
						regexp: {
							type: "string",
							description: (0, t.localize)(9862, null),
						},
						kind: { type: "string", description: (0, t.localize)(9863, null) },
						file: { type: "integer", description: (0, t.localize)(9864, null) },
						location: {
							type: "integer",
							description: (0, t.localize)(9865, null),
						},
						line: { type: "integer", description: (0, t.localize)(9866, null) },
						column: {
							type: "integer",
							description: (0, t.localize)(9867, null),
						},
						endLine: {
							type: "integer",
							description: (0, t.localize)(9868, null),
						},
						endColumn: {
							type: "integer",
							description: (0, t.localize)(9869, null),
						},
						severity: {
							type: "integer",
							description: (0, t.localize)(9870, null),
						},
						code: { type: "integer", description: (0, t.localize)(9871, null) },
						message: {
							type: "integer",
							description: (0, t.localize)(9872, null),
						},
						loop: { type: "boolean", description: (0, t.localize)(9873, null) },
					},
				}),
					(z.NamedProblemPattern = i.$vo(z.ProblemPattern)),
					(z.NamedProblemPattern.properties =
						i.$vo(z.NamedProblemPattern.properties) || {}),
					(z.NamedProblemPattern.properties.name = {
						type: "string",
						description: (0, t.localize)(9874, null),
					}),
					(z.MultiLineProblemPattern = {
						type: "array",
						items: z.ProblemPattern,
					}),
					(z.NamedMultiLineProblemPattern = {
						type: "object",
						additionalProperties: !1,
						properties: {
							name: {
								type: "string",
								description: (0, t.localize)(9875, null),
							},
							patterns: {
								type: "array",
								description: (0, t.localize)(9876, null),
								items: z.ProblemPattern,
							},
						},
					}),
					(z.WatchingPattern = {
						type: "object",
						additionalProperties: !1,
						properties: {
							regexp: {
								type: "string",
								description: (0, t.localize)(9877, null),
							},
							file: {
								type: "integer",
								description: (0, t.localize)(9878, null),
							},
						},
					}),
					(z.PatternType = {
						anyOf: [
							{ type: "string", description: (0, t.localize)(9879, null) },
							z.ProblemPattern,
							z.MultiLineProblemPattern,
						],
						description: (0, t.localize)(9880, null),
					}),
					(z.ProblemMatcher = {
						type: "object",
						additionalProperties: !1,
						properties: {
							base: {
								type: "string",
								description: (0, t.localize)(9881, null),
							},
							owner: {
								type: "string",
								description: (0, t.localize)(9882, null),
							},
							source: {
								type: "string",
								description: (0, t.localize)(9883, null),
							},
							severity: {
								type: "string",
								enum: ["error", "warning", "info"],
								description: (0, t.localize)(9884, null),
							},
							applyTo: {
								type: "string",
								enum: ["allDocuments", "openDocuments", "closedDocuments"],
								description: (0, t.localize)(9885, null),
							},
							pattern: z.PatternType,
							fileLocation: {
								oneOf: [
									{
										type: "string",
										enum: ["absolute", "relative", "autoDetect", "search"],
									},
									{
										type: "array",
										prefixItems: [
											{
												type: "string",
												enum: ["absolute", "relative", "autoDetect", "search"],
											},
										],
										minItems: 1,
										maxItems: 1,
										additionalItems: !1,
									},
									{
										type: "array",
										prefixItems: [
											{ type: "string", enum: ["relative", "autoDetect"] },
											{ type: "string" },
										],
										minItems: 2,
										maxItems: 2,
										additionalItems: !1,
										examples: [
											["relative", "${workspaceFolder}"],
											["autoDetect", "${workspaceFolder}"],
										],
									},
									{
										type: "array",
										prefixItems: [
											{ type: "string", enum: ["search"] },
											{
												type: "object",
												properties: {
													include: {
														oneOf: [
															{ type: "string" },
															{ type: "array", items: { type: "string" } },
														],
													},
													exclude: {
														oneOf: [
															{ type: "string" },
															{ type: "array", items: { type: "string" } },
														],
													},
												},
												required: ["include"],
											},
										],
										minItems: 2,
										maxItems: 2,
										additionalItems: !1,
										examples: [
											["search", { include: ["${workspaceFolder}"] }],
											[
												"search",
												{ include: ["${workspaceFolder}"], exclude: [] },
											],
										],
									},
								],
								description: (0, t.localize)(9886, null),
							},
							background: {
								type: "object",
								additionalProperties: !1,
								description: (0, t.localize)(9887, null),
								properties: {
									activeOnStart: {
										type: "boolean",
										description: (0, t.localize)(9888, null),
									},
									beginsPattern: {
										oneOf: [{ type: "string" }, z.WatchingPattern],
										description: (0, t.localize)(9889, null),
									},
									endsPattern: {
										oneOf: [{ type: "string" }, z.WatchingPattern],
										description: (0, t.localize)(9890, null),
									},
								},
							},
							watching: {
								type: "object",
								additionalProperties: !1,
								deprecationMessage: (0, t.localize)(9891, null),
								description: (0, t.localize)(9892, null),
								properties: {
									activeOnStart: {
										type: "boolean",
										description: (0, t.localize)(9893, null),
									},
									beginsPattern: {
										oneOf: [{ type: "string" }, z.WatchingPattern],
										description: (0, t.localize)(9894, null),
									},
									endsPattern: {
										oneOf: [{ type: "string" }, z.WatchingPattern],
										description: (0, t.localize)(9895, null),
									},
								},
							},
						},
					}),
					(z.LegacyProblemMatcher = i.$vo(z.ProblemMatcher)),
					(z.LegacyProblemMatcher.properties =
						i.$vo(z.LegacyProblemMatcher.properties) || {}),
					(z.LegacyProblemMatcher.properties.watchedTaskBeginsRegExp = {
						type: "string",
						deprecationMessage: (0, t.localize)(9896, null),
						description: (0, t.localize)(9897, null),
					}),
					(z.LegacyProblemMatcher.properties.watchedTaskEndsRegExp = {
						type: "string",
						deprecationMessage: (0, t.localize)(9898, null),
						description: (0, t.localize)(9899, null),
					}),
					(z.NamedProblemMatcher = i.$vo(z.ProblemMatcher)),
					(z.NamedProblemMatcher.properties =
						i.$vo(z.NamedProblemMatcher.properties) || {}),
					(z.NamedProblemMatcher.properties.name = {
						type: "string",
						description: (0, t.localize)(9900, null),
					}),
					(z.NamedProblemMatcher.properties.label = {
						type: "string",
						description: (0, t.localize)(9901, null),
					});
			})(N || (e.Schemas = N = {}));
			const A = p.$n2.registerExtensionPoint({
				extensionPoint: "problemPatterns",
				jsonSchema: {
					description: (0, t.localize)(9902, null),
					type: "array",
					items: {
						anyOf: [N.NamedProblemPattern, N.NamedMultiLineProblemPattern],
					},
				},
			});
			class R {
				constructor() {
					(this.a = Object.create(null)),
						this.c(),
						(this.b = new Promise((F, x) => {
							A.setHandler((H, q) => {
								try {
									q.removed.forEach((V) => {
										const G = V.value;
										for (const K of G) this.a[K.name] && delete this.a[K.name];
									}),
										q.added.forEach((V) => {
											const G = V.value,
												K = new D(new M(V.collector));
											for (const J of G) {
												if (L.NamedMultiLineCheckedProblemPattern.is(J)) {
													const W = K.parse(J);
													K.problemReporter.status.state <
													h.ValidationState.Error
														? this.add(W.name, W.patterns)
														: (V.collector.error((0, t.localize)(9903, null)),
															V.collector.error(JSON.stringify(J, void 0, 4)));
												} else if (L.NamedProblemPattern.is(J)) {
													const W = K.parse(J);
													K.problemReporter.status.state <
													h.ValidationState.Error
														? this.add(J.name, W)
														: (V.collector.error((0, t.localize)(9904, null)),
															V.collector.error(JSON.stringify(J, void 0, 4)));
												}
												K.reset();
											}
										});
								} catch {}
								F(void 0);
							});
						}));
				}
				onReady() {
					return this.b;
				}
				add(F, x) {
					this.a[F] = x;
				}
				get(F) {
					return this.a[F];
				}
				c() {
					this.add("msCompile", {
						regexp:
							/^(?:\s*\d+>)?(\S.*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\)\s*:\s+((?:fatal +)?error|warning|info)\s+(\w+\d+)\s*:\s*(.*)$/,
						kind: s.Location,
						file: 1,
						location: 2,
						severity: 3,
						code: 4,
						message: 5,
					}),
						this.add("gulp-tsc", {
							regexp:
								/^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(\d+)\s+(.*)$/,
							kind: s.Location,
							file: 1,
							location: 2,
							code: 3,
							message: 4,
						}),
						this.add("cpp", {
							regexp:
								/^(\S.*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(C\d+)\s*:\s*(.*)$/,
							kind: s.Location,
							file: 1,
							location: 2,
							severity: 3,
							code: 4,
							message: 5,
						}),
						this.add("csc", {
							regexp:
								/^(\S.*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(CS\d+)\s*:\s*(.*)$/,
							kind: s.Location,
							file: 1,
							location: 2,
							severity: 3,
							code: 4,
							message: 5,
						}),
						this.add("vb", {
							regexp:
								/^(\S.*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(BC\d+)\s*:\s*(.*)$/,
							kind: s.Location,
							file: 1,
							location: 2,
							severity: 3,
							code: 4,
							message: 5,
						}),
						this.add("lessCompile", {
							regexp: /^\s*(.*) in file (.*) line no. (\d+)$/,
							kind: s.Location,
							message: 1,
							file: 2,
							line: 3,
						}),
						this.add("jshint", {
							regexp:
								/^(.*):\s+line\s+(\d+),\s+col\s+(\d+),\s(.+?)(?:\s+\((\w)(\d+)\))?$/,
							kind: s.Location,
							file: 1,
							line: 2,
							character: 3,
							message: 4,
							severity: 5,
							code: 6,
						}),
						this.add("jshint-stylish", [
							{ regexp: /^(.+)$/, kind: s.Location, file: 1 },
							{
								regexp:
									/^\s+line\s+(\d+)\s+col\s+(\d+)\s+(.+?)(?:\s+\((\w)(\d+)\))?$/,
								line: 1,
								character: 2,
								message: 3,
								severity: 4,
								code: 5,
								loop: !0,
							},
						]),
						this.add("eslint-compact", {
							regexp:
								/^(.+):\sline\s(\d+),\scol\s(\d+),\s(Error|Warning|Info)\s-\s(.+)\s\((.+)\)$/,
							file: 1,
							kind: s.Location,
							line: 2,
							character: 3,
							severity: 4,
							message: 5,
							code: 6,
						}),
						this.add("eslint-stylish", [
							{
								regexp: /^((?:[a-zA-Z]:)*[./\\]+.*?)$/,
								kind: s.Location,
								file: 1,
							},
							{
								regexp:
									/^\s+(\d+):(\d+)\s+(error|warning|info)\s+(.+?)(?:\s\s+(.*))?$/,
								line: 1,
								character: 2,
								severity: 3,
								message: 4,
								code: 5,
								loop: !0,
							},
						]),
						this.add("go", {
							regexp: /^([^:]*: )?((.:)?[^:]*):(\d+)(:(\d+))?: (.*)$/,
							kind: s.Location,
							file: 2,
							line: 4,
							character: 6,
							message: 7,
						});
				}
			}
			e.$83 = new R();
			class O extends h.$23 {
				constructor(F) {
					super(F);
				}
				parse(F) {
					const x = this.c(F);
					if (this.b(F, x)) return this.e(F, x), x;
				}
				b(F, x) {
					return x
						? x.pattern
							? x.owner
								? d.$sg(x.fileLocation)
									? (this.error(
											(0, t.localize)(9908, null, JSON.stringify(F, null, 4)),
										),
										!1)
									: !0
								: (this.error(
										(0, t.localize)(9907, null, JSON.stringify(F, null, 4)),
									),
									!1)
							: (this.error(
									(0, t.localize)(9906, null, JSON.stringify(F, null, 4)),
								),
								!1)
						: (this.error(
								(0, t.localize)(9905, null, JSON.stringify(F, null, 4)),
							),
							!1);
				}
				c(F) {
					let x = null;
					const H = d.$lg(F.owner) ? F.owner : m.$9g(),
						q = d.$lg(F.source) ? F.source : void 0;
					let V = d.$lg(F.applyTo) ? l.fromString(F.applyTo) : l.allDocuments;
					V || (V = l.allDocuments);
					let G, K, J;
					if (d.$sg(F.fileLocation))
						(G = b.Relative), (K = "${workspaceFolder}");
					else if (d.$lg(F.fileLocation))
						(J = b.fromString(F.fileLocation)),
							J &&
								((G = J),
								J === b.Relative || J === b.AutoDetect
									? (K = "${workspaceFolder}")
									: J === b.Search &&
										(K = { include: ["${workspaceFolder}"] }));
					else if (d.$mg(F.fileLocation)) {
						const Y = F.fileLocation;
						Y.length > 0 &&
							((J = b.fromString(Y[0])),
							Y.length === 1 && J === b.Absolute
								? (G = J)
								: Y.length === 2 &&
									(J === b.Relative || J === b.AutoDetect) &&
									Y[1] &&
									((G = J), (K = Y[1])));
					} else
						Array.isArray(F.fileLocation) &&
							b.fromString(F.fileLocation[0]) === b.Search &&
							((G = b.Search),
							(K = F.fileLocation[1] ?? { include: ["${workspaceFolder}"] }));
					const W = F.pattern ? this.d(F.pattern) : void 0;
					let X = F.severity ? u.default.fromValue(F.severity) : void 0;
					if (
						(X === u.default.Ignore &&
							(this.info((0, t.localize)(9909, null, F.severity)),
							(X = u.default.Error)),
						d.$lg(F.base))
					) {
						const Y = F.base;
						if (Y.length > 1 && Y[0] === "$") {
							const ie = e.$03.get(Y.substring(1));
							ie &&
								((x = i.$vo(ie)),
								F.owner !== void 0 && H !== void 0 && (x.owner = H),
								F.source !== void 0 && q !== void 0 && (x.source = q),
								F.fileLocation !== void 0 &&
									G !== void 0 &&
									((x.fileLocation = G), (x.filePrefix = K)),
								F.pattern !== void 0 &&
									W !== void 0 &&
									W !== null &&
									(x.pattern = W),
								F.severity !== void 0 && X !== void 0 && (x.severity = X),
								F.applyTo !== void 0 && V !== void 0 && (x.applyTo = V));
						}
					} else
						G &&
							W &&
							((x = { owner: H, applyTo: V, fileLocation: G, pattern: W }),
							q && (x.source = q),
							K && (x.filePrefix = K),
							X && (x.severity = X));
					return (
						L.isNamedProblemMatcher(F) &&
							((x.name = F.name),
							(x.label = d.$lg(F.label) ? F.label : F.name)),
						x
					);
				}
				d(F) {
					if (d.$lg(F)) {
						const x = F;
						if (x.length > 1 && x[0] === "$") {
							const H = e.$83.get(x.substring(1));
							return H || this.error((0, t.localize)(9910, null, x)), H;
						} else
							x.length === 0
								? this.error((0, t.localize)(9911, null))
								: this.error((0, t.localize)(9912, null, x));
					} else if (F) {
						const x = new D(this.problemReporter);
						return Array.isArray(F), x.parse(F);
					}
					return null;
				}
				e(F, x) {
					const H = this.g(F.watchedTaskBeginsRegExp),
						q = this.g(F.watchedTaskEndsRegExp);
					if (H && q) {
						x.watching = {
							activeOnStart: !1,
							beginsPattern: { regexp: H },
							endsPattern: { regexp: q },
						};
						return;
					}
					const V = F.background || F.watching;
					if (d.$ug(V)) return;
					const G = this.f(V.beginsPattern),
						K = this.f(V.endsPattern);
					if (G && K) {
						x.watching = {
							activeOnStart: d.$rg(V.activeOnStart) ? V.activeOnStart : !1,
							beginsPattern: G,
							endsPattern: K,
						};
						return;
					}
					(G || K) && this.error((0, t.localize)(9913, null));
				}
				f(F) {
					if (d.$ug(F)) return null;
					let x, H;
					return (
						d.$lg(F)
							? (x = this.g(F))
							: ((x = this.g(F.regexp)), d.$pg(F.file) && (H = F.file)),
						x ? (H ? { regexp: x, file: H } : { regexp: x, file: 1 }) : null
					);
				}
				g(F) {
					let x = null;
					if (!F) return x;
					try {
						x = new RegExp(F);
					} catch {
						this.error((0, t.localize)(9914, null, F));
					}
					return x;
				}
			}
			e.$93 = O;
			const B = p.$n2.registerExtensionPoint({
				extensionPoint: "problemMatchers",
				deps: [A],
				jsonSchema: {
					description: (0, t.localize)(9915, null),
					type: "array",
					items: N.NamedProblemMatcher,
				},
			});
			class U {
				constructor() {
					(this.c = new o.$re()),
						(this.onMatcherChanged = this.c.event),
						(this.a = Object.create(null)),
						this.d(),
						(this.b = new Promise((F, x) => {
							B.setHandler((H, q) => {
								try {
									q.removed.forEach((G) => {
										const K = G.value;
										for (const J of K) this.a[J.name] && delete this.a[J.name];
									}),
										q.added.forEach((G) => {
											const K = G.value,
												J = new O(new M(G.collector));
											for (const W of K) {
												const X = J.parse(W);
												X && y(X) && this.add(X);
											}
										}),
										(q.removed.length > 0 || q.added.length > 0) &&
											this.c.fire();
								} catch {}
								const V = this.get("tsc-watch");
								V && (V.tscWatch = !0), F(void 0);
							});
						}));
				}
				onReady() {
					return e.$83.onReady(), this.b;
				}
				add(F) {
					this.a[F.name] = F;
				}
				get(F) {
					return this.a[F];
				}
				keys() {
					return Object.keys(this.a);
				}
				d() {
					this.add({
						name: "msCompile",
						label: (0, t.localize)(9916, null),
						owner: "msCompile",
						source: "cpp",
						applyTo: l.allDocuments,
						fileLocation: b.Absolute,
						pattern: e.$83.get("msCompile"),
					}),
						this.add({
							name: "lessCompile",
							label: (0, t.localize)(9917, null),
							deprecated: !0,
							owner: "lessCompile",
							source: "less",
							applyTo: l.allDocuments,
							fileLocation: b.Absolute,
							pattern: e.$83.get("lessCompile"),
							severity: u.default.Error,
						}),
						this.add({
							name: "gulp-tsc",
							label: (0, t.localize)(9918, null),
							owner: "typescript",
							source: "ts",
							applyTo: l.closedDocuments,
							fileLocation: b.Relative,
							filePrefix: "${workspaceFolder}",
							pattern: e.$83.get("gulp-tsc"),
						}),
						this.add({
							name: "jshint",
							label: (0, t.localize)(9919, null),
							owner: "jshint",
							source: "jshint",
							applyTo: l.allDocuments,
							fileLocation: b.Absolute,
							pattern: e.$83.get("jshint"),
						}),
						this.add({
							name: "jshint-stylish",
							label: (0, t.localize)(9920, null),
							owner: "jshint",
							source: "jshint",
							applyTo: l.allDocuments,
							fileLocation: b.Absolute,
							pattern: e.$83.get("jshint-stylish"),
						}),
						this.add({
							name: "eslint-compact",
							label: (0, t.localize)(9921, null),
							owner: "eslint",
							source: "eslint",
							applyTo: l.allDocuments,
							fileLocation: b.Absolute,
							filePrefix: "${workspaceFolder}",
							pattern: e.$83.get("eslint-compact"),
						}),
						this.add({
							name: "eslint-stylish",
							label: (0, t.localize)(9922, null),
							owner: "eslint",
							source: "eslint",
							applyTo: l.allDocuments,
							fileLocation: b.Absolute,
							pattern: e.$83.get("eslint-stylish"),
						}),
						this.add({
							name: "go",
							label: (0, t.localize)(9923, null),
							owner: "go",
							source: "go",
							applyTo: l.allDocuments,
							fileLocation: b.Relative,
							filePrefix: "${workspaceFolder}",
							pattern: e.$83.get("go"),
						});
				}
			}
			e.$03 = new U();
		},
	),
		