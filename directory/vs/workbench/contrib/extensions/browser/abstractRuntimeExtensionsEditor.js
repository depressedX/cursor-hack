define(
			de[1809],
			he([
				1, 0, 7, 105, 95, 182, 50, 24, 15, 275, 138, 3, 23, 4, 99, 11, 121, 8,
				49, 109, 72, 5, 73, 93, 40, 30, 21, 32, 51, 35, 217, 466, 141, 985, 18,
				78, 244, 157, 1294, 53, 2439,
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
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
			) {
				"use strict";
				var F;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WTc = e.$VTc = void 0),
					(c = mt(c));
				let x = class extends L.$JEb {
					static {
						F = this;
					}
					static {
						this.ID = "workbench.editor.runtimeExtensions";
					}
					constructor(V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q, Z, se) {
						super(F.ID, V, G, K, ee),
							(this.m = W),
							(this.r = X),
							(this.s = Y),
							(this.u = ie),
							(this.cb = ne),
							(this.db = _),
							(this.eb = te),
							(this.fb = Q),
							(this.gb = Z),
							(this.hb = se),
							(this.c = null),
							(this.f = null),
							(this.g = this.D(new m.$Yh(() => this.ib(), 200))),
							this.D(
								this.r.onDidChangeExtensionsStatus(() => this.g.schedule()),
							),
							this.D(this.gb.onDidChangeAccessData(() => this.g.schedule())),
							this.ib();
					}
					async ib() {
						(this.f = await this.jb()),
							this.c?.splice(0, this.c.length, this.f);
					}
					async jb() {
						await this.r.whenInstalledExtensionsRegistered();
						const V = this.r.extensions.filter((_) => !!_.main || !!_.browser),
							G = new b.$In(),
							K = await this.m.queryLocal();
						for (const _ of K) G.set(_.identifier.id, _);
						const J = this.r.getExtensionsStatus(),
							W = new b.$In(),
							X = this.mb();
						if (X) {
							let _ = X.startTime;
							for (let te = 0, Q = X.deltas.length; te < Q; te++) {
								const Z = X.ids[te],
									se = X.deltas[te];
								let re = W.get(Z);
								re || ((re = []), W.set(Z, re)),
									re.push(_),
									(_ = _ + se),
									re.push(_);
							}
						}
						let Y = [];
						for (let _ = 0, te = V.length; _ < te; _++) {
							const Q = V[_];
							let Z = null;
							if (X) {
								const se = W.get(Q.identifier) || [];
								let re = 0;
								for (let le = 0, oe = se.length / 2; le < oe; le++) {
									const ae = se[2 * le],
										pe = se[2 * le + 1];
									re += pe - ae;
								}
								Z = { segments: se, totalTime: re };
							}
							Y[_] = {
								originalIndex: _,
								description: Q,
								marketplaceInfo: G.get(Q.identifier),
								status: J[Q.identifier.value],
								profileInfo: Z || void 0,
								unresponsiveProfile: this.nb(Q.identifier),
							};
						}
						Y = Y.filter((_) => _.status.activationStarted);
						const ie = (_) => _.unresponsiveProfile === X,
							ne = (_) => _.profileInfo?.totalTime ?? 0,
							ee = (_) =>
								(_.status.activationTimes?.codeLoadingTime ?? 0) +
								(_.status.activationTimes?.activateCallTime ?? 0);
						return (
							(Y = Y.sort((_, te) =>
								ie(_) || ie(te)
									? +ie(te) - +ie(_)
									: ne(_) || ne(te)
										? ne(te) - ne(_)
										: ee(_) || ee(te)
											? ee(te) - ee(_)
											: _.originalIndex - te.originalIndex,
							)),
							Y
						);
					}
					Y(V) {
						V.classList.add("runtime-extensions-editor");
						const G = "runtimeExtensionElementTemplate",
							K = new (class {
								getHeight(W) {
									return 70;
								}
								getTemplateId(W) {
									return G;
								}
							})(),
							J = {
								templateId: G,
								renderTemplate: (W) => {
									const X = (0, t.$fhb)(W, (0, t.$)(".extension")),
										Y = (0, t.$fhb)(X, (0, t.$)(".icon-container")),
										ie = (0, t.$fhb)(Y, (0, t.$)("img.icon")),
										ne = (0, t.$fhb)(X, (0, t.$)("div.desc")),
										ee = (0, t.$fhb)(ne, (0, t.$)(".header-container")),
										_ = (0, t.$fhb)(ee, (0, t.$)(".header")),
										te = (0, t.$fhb)(_, (0, t.$)("div.name")),
										Q = (0, t.$fhb)(_, (0, t.$)("span.version")),
										Z = (0, t.$fhb)(ne, (0, t.$)("div.msg")),
										se = new i.$eib(ne);
									se.onDidRun(({ error: pe }) => pe && this.s.error(pe));
									const re = (0, t.$fhb)(X, (0, t.$)(".time")),
										le = (0, t.$fhb)(re, (0, t.$)("div.activation-time")),
										oe = (0, t.$fhb)(re, (0, t.$)("div.profile-time"));
									return {
										root: W,
										element: X,
										icon: ie,
										name: te,
										version: Q,
										actionbar: se,
										activationTime: le,
										profileTime: oe,
										msgContainer: Z,
										disposables: [se],
										elementDisposables: [],
									};
								},
								renderElement: (W, X, Y) => {
									(Y.elementDisposables = (0, a.$Vc)(Y.elementDisposables)),
										Y.root.classList.toggle("odd", X % 2 === 1),
										Y.elementDisposables.push(
											(0, t.$0fb)(
												Y.icon,
												"error",
												() =>
													(Y.icon.src =
														W.marketplaceInfo?.iconUrlFallback || B.$FQb),
												{ once: !0 },
											),
										),
										(Y.icon.src = W.marketplaceInfo?.iconUrl || B.$FQb),
										Y.icon.complete
											? (Y.icon.style.visibility = "inherit")
											: ((Y.icon.style.visibility = "hidden"),
												(Y.icon.onload = () =>
													(Y.icon.style.visibility = "inherit"))),
										(Y.name.textContent = (
											W.marketplaceInfo?.displayName ||
											W.description.identifier.value
										).substr(0, 50)),
										(Y.version.textContent = W.description.version);
									const ie = W.status.activationTimes;
									if (ie) {
										const Q = ie.codeLoadingTime + ie.activateCallTime;
										Y.activationTime.textContent = ie.activationReason.startup
											? `Startup Activation: ${Q}ms`
											: `Activation: ${Q}ms`;
									} else Y.activationTime.textContent = "Activating...";
									Y.actionbar.clear();
									const ne = this.ob(W);
									if (
										(ne && Y.actionbar.push(ne, { icon: !1, label: !0 }),
										(0, d.$Pb)(W.status.runtimeErrors))
									) {
										const Q = this.pb(W);
										Q && Y.actionbar.push(Q, { icon: !1, label: !0 });
									}
									let ee;
									if (ie) {
										const Q = ie.activationReason.extensionId.value,
											Z = ie.activationReason.activationEvent;
										if (Z === "*") ee = c.localize(5997, null, Q);
										else if (/^workspaceContains:/.test(Z)) {
											const se = Z.substr(18);
											se.indexOf("*") >= 0 || se.indexOf("?") >= 0
												? (ee = c.localize(5998, null, se, Q))
												: (ee = c.localize(5999, null, se, Q));
										} else if (/^workspaceContainsTimeout:/.test(Z)) {
											const se = Z.substr(25);
											ee = c.localize(6e3, null, se, Q);
										} else if (Z === "onStartupFinished")
											ee = c.localize(6001, null, Q);
										else if (/^onLanguage:/.test(Z)) {
											const se = Z.substr(11);
											ee = c.localize(6002, null, se, Q);
										} else ee = c.localize(6003, null, Z, Q);
									} else ee = c.localize(6004, null);
									if (
										(Y.elementDisposables.push(
											this.hb.setupManagedHover(
												(0, w.$cib)("mouse"),
												Y.activationTime,
												ee,
											),
										),
										(0, t.$9fb)(Y.msgContainer),
										this.nb(W.description.identifier))
									) {
										const Q = (0, t.$)(
												"span",
												void 0,
												...(0, E.$Sib)(" $(alert) Unresponsive"),
											),
											Z = c.localize(6005, null);
										Y.elementDisposables.push(
											this.hb.setupManagedHover((0, w.$cib)("mouse"), Q, Z),
										),
											Y.msgContainer.appendChild(Q);
									}
									if ((0, d.$Pb)(W.status.runtimeErrors)) {
										const Q = (0, t.$)(
											"span",
											void 0,
											...(0, E.$Sib)(
												`$(bug) ${c.localize(6006, null, W.status.runtimeErrors.length)}`,
											),
										);
										Y.msgContainer.appendChild(Q);
									}
									if (W.status.messages && W.status.messages.length > 0) {
										const Q = (0, t.$)(
											"span",
											void 0,
											...(0, E.$Sib)(
												`$(alert) ${W.status.messages[0].message}`,
											),
										);
										Y.msgContainer.appendChild(Q);
									}
									let _ = null;
									if (
										W.status.runningLocation &&
										W.status.runningLocation.equals(new U.$g2(0))
									)
										_ = "$(globe) web worker";
									else if (
										W.description.extensionLocation.scheme ===
										h.Schemas.vscodeRemote
									) {
										const Q = this.db.getHostLabel(
											h.Schemas.vscodeRemote,
											this.eb.remoteAuthority,
										);
										Q
											? (_ = `$(remote) ${Q}`)
											: (_ = `$(remote) ${W.description.extensionLocation.authority}`);
									} else
										W.status.runningLocation &&
											W.status.runningLocation.affinity > 0 &&
											(_ =
												W.status.runningLocation instanceof U.$g2
													? `$(globe) web worker ${W.status.runningLocation.affinity + 1}`
													: `$(server-process) local process ${W.status.runningLocation.affinity + 1}`);
									if (_) {
										const Q = (0, t.$)("span", void 0, ...(0, E.$Sib)(_));
										Y.msgContainer.appendChild(Q);
									}
									const te = S.$Io
										.as(O.Extensions.ExtensionFeaturesRegistry)
										.getExtensionFeatures();
									for (const Q of te) {
										const Z = this.gb.getAccessData(
											W.description.identifier,
											Q.id,
										);
										if (Z) {
											const se = Z?.current?.status;
											if (
												(se &&
													(Y.msgContainer.appendChild(
														(0, t.$)("span", void 0, `${Q.label}: `),
													),
													Y.msgContainer.appendChild(
														(0, t.$)(
															"span",
															void 0,
															...(0, E.$Sib)(
																`$(${se.severity === v.Severity.Error ? D.$tSb.id : D.$uSb.id}) ${se.message}`,
															),
														),
													)),
												Z?.totalCount > 0)
											) {
												const re = (0, t.$)(
													"span",
													void 0,
													`${c.localize(6007, null, Q.label, Z.totalCount)}${Z.current ? c.localize(6008, null, Z.current.count) : ""}`,
												);
												if (Z.current) {
													const le = c.localize(
														6009,
														null,
														(0, r.$dn)(Z.current.lastAccessed, !0, !0),
													);
													Y.elementDisposables.push(
														this.hb.setupManagedHover(
															(0, w.$cib)("mouse"),
															re,
															le,
														),
													);
												}
												Y.msgContainer.appendChild(re);
											}
										}
									}
									W.profileInfo
										? (Y.profileTime.textContent = `Profile: ${(W.profileInfo.totalTime / 1e3).toFixed(2)}ms`)
										: (Y.profileTime.textContent = "");
								},
								disposeTemplate: (W) => {
									W.disposables = (0, a.$Vc)(W.disposables);
								},
							};
						(this.c = this.cb.createInstance(
							$.$yMb,
							"RuntimeExtensions",
							V,
							K,
							[J],
							{
								multipleSelectionSupport: !1,
								setRowLineHeight: !1,
								horizontalScrolling: !1,
								overrideStyles: { listBackground: P.$8P },
								accessibilityProvider: new (class {
									getWidgetAriaLabel() {
										return c.localize(6010, null);
									}
									getAriaLabel(W) {
										return W.description.name;
									}
								})(),
							},
						)),
							this.c.splice(0, this.c.length, this.f || void 0),
							this.c.onContextMenu((W) => {
								if (!W.element) return;
								const X = [];
								X.push(
									new C.$rj(
										"runtimeExtensionsEditor.action.copyId",
										c.localize(
											6011,
											null,
											W.element.description.identifier.value,
										),
										void 0,
										!0,
										() => {
											this.fb.writeText(W.element.description.identifier.value);
										},
									),
								);
								const Y = this.pb(W.element);
								Y && X.push(Y),
									X.push(new C.$tj()),
									W.element.marketplaceInfo &&
										(X.push(
											new C.$rj(
												"runtimeExtensionsEditor.action.disableWorkspace",
												c.localize(6012, null),
												void 0,
												!0,
												() =>
													this.m.setEnablement(
														W.element.marketplaceInfo,
														B.EnablementState.DisabledWorkspace,
													),
											),
										),
										X.push(
											new C.$rj(
												"runtimeExtensionsEditor.action.disable",
												c.localize(6013, null),
												void 0,
												!0,
												() =>
													this.m.setEnablement(
														W.element.marketplaceInfo,
														B.EnablementState.DisabledGlobally,
													),
											),
										)),
									X.push(new C.$tj());
								const ie = this.rb();
								ie && X.push(ie);
								const ne = this.lb;
								ne && X.push(ne),
									this.u.showContextMenu({
										getAnchor: () => W.anchor,
										getActions: () => X,
									});
							});
					}
					get lb() {
						return this.qb();
					}
					layout(V) {
						this.c?.layout(V.height);
					}
				};
				(e.$VTc = x),
					Ne([u.$ei], x.prototype, "lb", null),
					(e.$VTc =
						x =
						F =
							Ne(
								[
									j(1, T.$km),
									j(2, k.$iP),
									j(3, o.$6j),
									j(4, M.$MQb),
									j(5, z.$q2),
									j(6, v.$4N),
									j(7, f.$Xxb),
									j(8, l.$Li),
									j(9, I.$lq),
									j(10, y.$3N),
									j(11, R.$r8),
									j(12, p.$Vxb),
									j(13, O.$$Sb),
									j(14, s.$Uyb),
								],
								x,
							));
				class H extends g.$3X {
					constructor() {
						super({
							id: "workbench.action.showRuntimeExtensions",
							title: c.localize2(6014, "Show Running Extensions"),
							category: n.$ck.Developer,
							f1: !0,
							menu: {
								id: g.$XX.ViewContainerTitle,
								when: o.$Kj.equals(
									"viewContainer",
									"workbench.view.extensions",
								),
								group: "2_enablement",
								order: 3,
							},
						});
					}
					async run(V) {
						await V.get(A.$IY).openEditor(N.$UTc.instance, { pinned: !0 });
					}
				}
				e.$WTc = H;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	