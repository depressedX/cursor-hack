define(
		de[1955],
		he([
			1, 0, 464, 3, 141, 7, 12, 4, 157, 314, 73, 404, 35, 26, 123, 6, 5, 495,
			10, 150, 466, 51, 72, 94, 9, 53, 154, 111, 97, 267, 41, 29, 182, 114, 27,
			32, 106, 782, 95, 25, 2438,
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
				(e.$WSc =
					e.$VSc =
					e.$USc =
					e.$TSc =
					e.$SSc =
					e.$RSc =
					e.$QSc =
					e.$PSc =
					e.$OSc =
					e.$NSc =
					e.$MSc =
					e.$LSc =
					e.$KSc =
					e.$JSc =
					e.$ISc =
					e.$HSc =
					e.$GSc =
					e.$ESc =
						void 0),
				(e.$FSc = H),
				(t = mt(t)),
				(C = mt(C)),
				(T = xi(T));
			class x extends i.$1c {
				constructor() {
					super(...arguments), (this.b = null);
				}
				get extension() {
					return this.b;
				}
				set extension(se) {
					(this.b = se), this.update();
				}
				update() {
					this.render();
				}
			}
			e.$ESc = x;
			function H(Z, se) {
				const re = new i.$Zc();
				return (
					re.add((0, E.$0fb)(Z, E.$$gb.CLICK, (0, E.$ohb)(se))),
					re.add(
						(0, E.$0fb)(Z, E.$$gb.KEY_UP, (le) => {
							const oe = new N.$7fb(le);
							(oe.equals(A.KeyCode.Space) || oe.equals(A.KeyCode.Enter)) &&
								(le.preventDefault(), le.stopPropagation(), se());
						}),
					),
					re
				);
			}
			class q extends x {
				constructor(se, re) {
					super(),
						(this.a = se),
						(this.c = re),
						se.classList.add("extension-install-count"),
						this.render();
				}
				render() {
					if (
						((this.a.innerText = ""),
						!this.extension ||
							(this.c && this.extension.state !== w.ExtensionState.Uninstalled))
					)
						return;
					const se = q.getInstallLabel(this.extension, this.c);
					if (!se) return;
					(0, E.$fhb)(
						this.a,
						(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$lSb)),
					);
					const re = (0, E.$fhb)(this.a, (0, E.$)("span.count"));
					re.textContent = se;
				}
				static getInstallLabel(se, re) {
					const le = se.installCount;
					if (le === void 0) return;
					let oe;
					return (
						re
							? le > 1e6
								? (oe = `${Math.floor(le / 1e5) / 10}M`)
								: le > 1e3
									? (oe = `${Math.floor(le / 1e3)}K`)
									: (oe = String(le))
							: (oe = le.toLocaleString(C.$z)),
						oe
					);
				}
			}
			e.$GSc = q;
			let V = class extends x {
				constructor(se, re, le) {
					super(),
						(this.c = se),
						(this.f = re),
						se.classList.add("extension-ratings"),
						this.f && se.classList.add("small"),
						(this.a = this.D(
							le.setupManagedHover((0, U.$cib)("mouse"), se, ""),
						)),
						this.render();
				}
				render() {
					if (
						((this.c.innerText = ""),
						!this.extension ||
							(this.f &&
								this.extension.state !== w.ExtensionState.Uninstalled) ||
							this.extension.rating === void 0 ||
							(this.f && !this.extension.ratingCount))
					)
						return;
					const se = Math.round(this.extension.rating * 2) / 2;
					if ((this.a.update((0, d.localize)(6502, null, se)), this.f)) {
						(0, E.$fhb)(
							this.c,
							(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$qSb)),
						);
						const re = (0, E.$fhb)(this.c, (0, E.$)("span.count"));
						re.textContent = String(se);
					} else {
						for (let re = 1; re <= 5; re++)
							se >= re
								? (0, E.$fhb)(
										this.c,
										(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$qSb)),
									)
								: se >= re - 0.5
									? (0, E.$fhb)(
											this.c,
											(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$rSb)),
										)
									: (0, E.$fhb)(
											this.c,
											(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$sSb)),
										);
						if (this.extension.ratingCount) {
							const re = (0, E.$fhb)(
								this.c,
								(0, E.$)("span", void 0, ` (${this.extension.ratingCount})`),
							);
							re.style.paddingLeft = "1px";
						}
					}
				}
			};
			(e.$HSc = V), (e.$HSc = V = Ne([j(2, y.$Uyb)], V));
			let G = class extends x {
				constructor(se, re, le, oe) {
					super(),
						(this.f = se),
						(this.g = re),
						(this.h = oe),
						(this.a = this.D(new i.$Zc())),
						(this.c = this.D(
							le.setupManagedHover((0, U.$cib)("mouse"), se, ""),
						)),
						this.render();
				}
				render() {
					if (
						((0, E.$hhb)(this.f),
						this.a.clear(),
						!this.extension?.publisherDomain?.verified ||
							this.extension.resourceExtension ||
							this.extension.local?.source === "resource")
					)
						return;
					const se = v.URI.parse(this.extension.publisherDomain.link),
						re = (0, E.$fhb)(
							this.f,
							(0, E.$)("span.extension-verified-publisher.clickable"),
						);
					(0, E.$fhb)(re, (0, M.$Tib)(s.$nSb)),
						this.g ||
							((re.tabIndex = 0),
							this.c.update(
								`Verified Domain: ${this.extension.publisherDomain.link}`,
							),
							re.setAttribute("role", "link"),
							(0, E.$fhb)(
								re,
								(0, E.$)(
									"span.extension-verified-publisher-domain",
									void 0,
									se.authority.startsWith("www.")
										? se.authority.substring(4)
										: se.authority,
								),
							),
							this.a.add(H(re, () => this.h.open(se))));
				}
			};
			(e.$ISc = G), (e.$ISc = G = Ne([j(2, y.$Uyb), j(3, L.$7rb)], G));
			let K = class extends x {
				constructor(se, re, le, oe) {
					super(),
						(this.c = se),
						(this.f = re),
						(this.g = le),
						(this.h = oe),
						(this.a = this.D(new i.$Zc())),
						this.render();
				}
				render() {
					if (
						((0, E.$hhb)(this.c),
						this.a.clear(),
						!this.extension?.publisherSponsorLink)
					)
						return;
					const se = (0, E.$fhb)(
						this.c,
						(0, E.$)("span.sponsor.clickable", { tabIndex: 0 }),
					);
					this.a.add(
						this.f.setupManagedHover(
							(0, U.$cib)("mouse"),
							se,
							this.extension?.publisherSponsorLink.toString() ?? "",
						),
					),
						se.setAttribute("role", "link");
					const re = (0, M.$Tib)(s.$pSb),
						le = (0, E.$)("span", void 0, (0, d.localize)(6503, null));
					(0, E.$fhb)(se, re, le),
						this.a.add(
							H(se, () => {
								this.h.publicLog2("extensionsAction.sponsorExtension", {
									extensionId: this.extension.identifier.id,
								}),
									this.g.open(this.extension.publisherSponsorLink);
							}),
						);
				}
			};
			(e.$JSc = K),
				(e.$JSc = K = Ne([j(1, y.$Uyb), j(2, L.$7rb), j(3, R.$km)], K));
			let J = class extends x {
				constructor(se, re) {
					super(),
						(this.f = se),
						(this.g = re),
						(this.c = this.D(new i.$Zc())),
						this.render(),
						this.D((0, i.$Yc)(() => this.h())),
						this.D(this.g.onDidChangeRecommendations(() => this.render()));
				}
				h() {
					this.a?.remove(), (this.a = void 0), this.c.clear();
				}
				render() {
					if (
						(this.h(),
						!this.extension ||
							this.extension.state === w.ExtensionState.Installed ||
							this.extension.deprecationInfo ||
							(0, B.$Oq)(this.extension))
					)
						return;
					if (
						this.g.getAllRecommendationsWithReason()[
							this.extension.identifier.id.toLowerCase()
						]
					) {
						this.a = (0, E.$fhb)(this.f, (0, E.$)("div.extension-bookmark"));
						const re = (0, E.$fhb)(this.a, (0, E.$)(".recommendation"));
						(0, E.$fhb)(
							re,
							(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$mSb)),
						);
					}
				}
			};
			(e.$KSc = J), (e.$KSc = J = Ne([j(1, r.$9Qb)], J));
			class W extends x {
				constructor(se) {
					super(),
						(this.f = se),
						(this.c = this.D(new i.$Zc())),
						this.render(),
						this.D((0, i.$Yc)(() => this.g()));
				}
				g() {
					this.a?.remove(), (this.a = void 0), this.c.clear();
				}
				render() {
					if (
						(this.g(),
						this.extension?.state === w.ExtensionState.Installed
							? this.extension.preRelease
							: this.extension?.hasPreReleaseVersion)
					) {
						this.a = (0, E.$fhb)(this.f, (0, E.$)("div.extension-bookmark"));
						const se = (0, E.$fhb)(this.a, (0, E.$)(".pre-release"));
						(0, E.$fhb)(
							se,
							(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$oSb)),
						);
					}
				}
			}
			e.$LSc = W;
			let X = class extends x {
				constructor(se, re, le, oe) {
					super(),
						(this.f = re),
						(this.g = le),
						(this.h = oe),
						(this.a = this.D(new i.$2c())),
						(this.c = (0, E.$fhb)(
							se,
							(0, E.$)(".extension-remote-badge-container"),
						)),
						this.render(),
						this.D((0, i.$Yc)(() => this.j()));
				}
				j() {
					this.a.value?.element.remove(), this.a.clear();
				}
				render() {
					this.j(),
						!(
							!this.extension ||
							!this.extension.local ||
							!this.extension.server ||
							!(
								this.g.localExtensionManagementServer &&
								this.g.remoteExtensionManagementServer
							) ||
							this.extension.server !== this.g.remoteExtensionManagementServer
						) &&
							((this.a.value = this.h.createInstance(Y, this.f)),
							(0, E.$fhb)(this.c, this.a.value.element));
				}
			};
			(e.$MSc = X), (e.$MSc = X = Ne([j(2, m.$EQb), j(3, p.$Li)], X));
			let Y = class extends i.$1c {
				constructor(se, re, le, oe, ae) {
					super(),
						(this.a = se),
						(this.b = le),
						(this.c = oe),
						(this.f = ae),
						(this.element = (0, E.$)(
							"div.extension-badge.extension-remote-badge",
						)),
						(this.elementHover = this.D(
							re.setupManagedHover((0, U.$cib)("mouse"), this.element, ""),
						)),
						this.g();
				}
				g() {
					(0, E.$fhb)(
						this.element,
						(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$kSb)),
					);
					const se = () => {
						if (!this.element) return;
						const re = this.c.getColorTheme().getColor(n.$uGb),
							le = this.c.getColorTheme().getColor(n.$vGb);
						(this.element.style.backgroundColor = re ? re.toString() : ""),
							(this.element.style.color = le ? le.toString() : "");
					};
					if (
						(se(), this.D(this.c.onDidColorThemeChange(() => se())), this.a)
					) {
						const re = () => {
							this.element &&
								this.f.remoteExtensionManagementServer &&
								this.elementHover.update(
									(0, d.localize)(
										6504,
										null,
										this.f.remoteExtensionManagementServer.label,
									),
								);
						};
						this.D(this.b.onDidChangeFormatters(() => re())), re();
					}
				}
			};
			Y = Ne([j(1, y.$Uyb), j(2, u.$3N), j(3, h.$iP), j(4, m.$EQb)], Y);
			class ie extends x {
				constructor(se) {
					super(),
						(this.c = se),
						this.render(),
						this.D((0, i.$Yc)(() => this.f()));
				}
				f() {
					this.a?.remove();
				}
				render() {
					if (
						(this.f(),
						!this.extension ||
							!this.extension.categories?.some(
								(re) => re.toLowerCase() === "extension packs",
							) ||
							!this.extension.extensionPack.length)
					)
						return;
					(this.a = (0, E.$fhb)(
						this.c,
						(0, E.$)(".extension-badge.extension-pack-badge"),
					)),
						new o.$Hob(this.a, {}, O.$zyb).setCount(
							this.extension.extensionPack.length,
						);
				}
			}
			e.$NSc = ie;
			let ne = class extends x {
				constructor(se, re, le, oe, ae) {
					super(),
						(this.c = se),
						(this.f = re),
						(this.g = le),
						(this.h = oe),
						(this.j = ae),
						(this.a = this.D(new i.$Zc())),
						this.D(
							g.Event.filter(this.f.onDidChangeConfiguration, (pe) =>
								pe.affectsConfiguration("settingsSync.ignoredExtensions"),
							)(() => this.render()),
						),
						this.D(ae.onDidChangeEnablement(() => this.update())),
						this.render();
				}
				render() {
					if (
						(this.a.clear(),
						(this.c.innerText = ""),
						this.extension &&
							this.extension.state === w.ExtensionState.Installed &&
							this.j.isEnabled() &&
							this.g.isExtensionIgnoredToSync(this.extension))
					) {
						const se = (0, E.$fhb)(
							this.c,
							(0, E.$)(
								"span.extension-sync-ignored" +
									c.ThemeIcon.asCSSSelector(s.$jSb),
							),
						);
						this.a.add(
							this.h.setupManagedHover(
								(0, U.$cib)("mouse"),
								se,
								(0, d.localize)(6505, null),
							),
						),
							se.classList.add(...c.ThemeIcon.asClassNameArray(s.$jSb));
					}
				}
			};
			(e.$OSc = ne),
				(e.$OSc = ne =
					Ne([j(1, f.$gj), j(2, w.$MQb), j(3, y.$Uyb), j(4, b.$4Rb)], ne));
			let ee = class extends x {
				constructor(se, re, le, oe) {
					super(),
						(this.a = se),
						(this.c = re),
						(this.f = oe),
						this.D(
							le.onDidChangeExtensionsStatus((ae) => {
								this.extension &&
									ae.some((pe) =>
										(0, I.$7p)({ id: pe.value }, this.extension.identifier),
									) &&
									this.update();
							}),
						);
				}
				render() {
					if (((this.a.innerText = ""), !this.extension)) return;
					const se = this.f.getExtensionStatus(this.extension);
					if (!se || !se.activationTimes) return;
					const re =
						se.activationTimes.codeLoadingTime +
						se.activationTimes.activateCallTime;
					if (this.c) {
						(0, E.$fhb)(
							this.a,
							(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$xSb)),
						);
						const le = (0, E.$fhb)(this.a, (0, E.$)("span.activationTime"));
						le.textContent = `${re}ms`;
					} else {
						const le = (0, E.$fhb)(this.a, (0, E.$)("span.activationTime"));
						le.textContent = `${(0, d.localize)(6506, null)}${se.activationTimes.activationReason.startup ? ` (${(0, d.localize)(6507, null)})` : ""} : ${re}ms`;
					}
				}
			};
			(e.$PSc = ee), (e.$PSc = ee = Ne([j(2, S.$q2), j(3, w.$MQb)], ee));
			let _ = (F = class extends x {
				constructor(se, re, le, oe, ae, pe, $e, ye) {
					super(),
						(this.c = se),
						(this.f = re),
						(this.g = le),
						(this.h = oe),
						(this.j = ae),
						(this.m = pe),
						(this.n = $e),
						(this.q = ye),
						(this.a = this.D(new i.$2c()));
				}
				render() {
					(this.a.value = void 0),
						this.extension &&
							(this.a.value = this.h.setupManagedHover(
								{
									delay: this.j.getValue("workbench.hover.delay"),
									showHover: (se, re) =>
										this.h.showHover(
											{
												...se,
												additionalClasses: ["extension-hover"],
												position: {
													hoverPosition: this.c.position(),
													forcePosition: !0,
												},
												persistence: { hideOnKeyDown: !0 },
											},
											re,
										),
									placement: "element",
								},
								this.c.target,
								{
									markdown: () => Promise.resolve(this.r()),
									markdownNotSupportedFallback: void 0,
								},
								{ appearance: { showHoverHint: !0 } },
							));
				}
				r() {
					if (!this.extension) return;
					const se = new $.$cl("", { isTrusted: !0, supportThemeIcons: !0 });
					if (
						(se.appendMarkdown(`**${this.extension.displayName}**`),
						t.valid(this.extension.version) &&
							se.appendMarkdown(
								`&nbsp;<span style="background-color:#8080802B;">**&nbsp;_v${this.extension.version}${this.extension.isPreReleaseVersion ? " (pre-release)" : ""}_**&nbsp;</span>`,
							),
						se.appendText(`
`),
						this.extension.state === w.ExtensionState.Installed)
					) {
						let ye = !1;
						const ue = q.getInstallLabel(this.extension, !0);
						if (
							(ue &&
								(ye && se.appendText("  |  "),
								se.appendMarkdown(`$(${s.$lSb.id}) ${ue}`),
								(ye = !0)),
							this.extension.rating)
						) {
							ye && se.appendText("  |  ");
							const fe = Math.round(this.extension.rating * 2) / 2;
							se.appendMarkdown(
								`$(${s.$qSb.id}) [${fe}](${this.extension.url}&ssr=false#review-details)`,
							),
								(ye = !0);
						}
						this.extension.publisherSponsorLink &&
							(ye && se.appendText("  |  "),
							se.appendMarkdown(
								`$(${s.$pSb.id}) [${(0, d.localize)(6508, null)}](${this.extension.publisherSponsorLink})`,
							),
							(ye = !0)),
							ye &&
								se.appendText(`
`);
					}
					const re =
						this.extension.resourceExtension?.location ??
						(this.extension.local?.source === "resource"
							? this.extension.local?.location
							: void 0);
					if (
						(re &&
							(this.extension.isWorkspaceScoped && this.q.isInsideWorkspace(re)
								? se.appendMarkdown((0, d.localize)(6509, null))
								: se.appendMarkdown((0, d.localize)(6510, null)),
							se.appendText(`
`)),
						this.extension.description &&
							(se.appendMarkdown(`${this.extension.description}`),
							se.appendText(`
`)),
						this.extension.publisherDomain?.verified)
					) {
						const ye = this.n.getColorTheme().getColor(e.$USc),
							ue = (0, d.localize)(
								6511,
								null,
								`[${v.URI.parse(this.extension.publisherDomain.link).authority}](${this.extension.publisherDomain.link})`,
							);
						se.appendMarkdown(
							`<span style="color:${ye ? P.$UL.Format.CSS.formatHex(ye) : "#ffffff"};">$(${s.$nSb.id})</span>&nbsp;${ue}`,
						),
							se.appendText(`
`);
					}
					this.extension.outdated &&
						(se.appendMarkdown((0, d.localize)(6512, null)),
						se.appendMarkdown(
							`&nbsp;<span style="background-color:#8080802B;">**&nbsp;_v${this.extension.latestVersion}_**&nbsp;</span>`,
						),
						se.appendText(`
`));
					const le = F.getPreReleaseMessage(this.extension),
						oe = this.g.getExtensionStatus(this.extension),
						ae = this.f.status,
						pe = this.extension.runtimeState,
						$e = this.s(this.extension);
					if (oe || ae.length || pe || $e || le) {
						if (
							(se.appendMarkdown("---"),
							se.appendText(`
`),
							oe)
						) {
							if (oe.activationTimes) {
								const ye =
									oe.activationTimes.codeLoadingTime +
									oe.activationTimes.activateCallTime;
								se.appendMarkdown(
									`${(0, d.localize)(6513, null)}${oe.activationTimes.activationReason.startup ? ` (${(0, d.localize)(6514, null)})` : ""}: \`${ye}ms\``,
								),
									se.appendText(`
`);
							}
							if (oe.runtimeErrors.length || oe.messages.length) {
								const ye =
										oe.runtimeErrors.length ||
										oe.messages.some((ve) => ve.type === T.default.Error),
									ue = oe.messages.some((ve) => ve.type === T.default.Warning),
									fe = oe.runtimeErrors.length
										? `[${oe.runtimeErrors.length === 1 ? ((0, d.localize))(6515, null) : ((0, d.localize))(6516, null, oe.runtimeErrors.length)}](${v.URI.parse(`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.identifier.id, w.ExtensionEditorTab.Features]))}`)})`
										: void 0,
									me = oe.messages.length
										? `[${oe.messages.length === 1 ? ((0, d.localize))(6517, null) : ((0, d.localize))(6518, null, oe.messages.length)}](${v.URI.parse(`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.identifier.id, w.ExtensionEditorTab.Features]))}`)})`
										: void 0;
								se.appendMarkdown(
									`$(${ye ? s.$tSb.id : ue ? s.$uSb.id : s.$vSb.id}) This extension has reported `,
								),
									fe && me
										? se.appendMarkdown(`${fe} and ${me}`)
										: se.appendMarkdown(`${fe || me}`),
									se.appendText(`
`);
							}
						}
						for (const ye of ae)
							ye.icon && se.appendMarkdown(`$(${ye.icon.id})&nbsp;`),
								se.appendMarkdown(ye.message.value),
								this.extension.enablementState ===
									m.EnablementState.DisabledByExtensionDependency &&
									this.extension.local &&
									se.appendMarkdown(
										`&nbsp;[${(0, d.localize)(6519, null)}](${v.URI.parse(`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.identifier.id, w.ExtensionEditorTab.Dependencies]))}`)})`,
									),
								se.appendText(`
`);
						if (
							(pe &&
								(se.appendMarkdown(`$(${s.$vSb.id})&nbsp;`),
								se.appendMarkdown(`${pe.reason}`),
								se.appendText(`
`)),
							le)
						) {
							const ye = this.n.getColorTheme().getColor(e.$VSc);
							se.appendMarkdown(
								`<span style="color:${ye ? P.$UL.Format.CSS.formatHex(ye) : "#ffffff"};">$(${s.$oSb.id})</span>&nbsp;${le}`,
							),
								se.appendText(`
`);
						}
						$e &&
							(se.appendMarkdown($e),
							se.appendText(`
`));
					}
					return se;
				}
				s(se) {
					if (
						se.state === w.ExtensionState.Installed ||
						se.deprecationInfo ||
						(0, B.$Oq)(se)
					)
						return;
					const re =
						this.m.getAllRecommendationsWithReason()[
							se.identifier.id.toLowerCase()
						];
					if (!re?.reasonText) return;
					const le = this.n.getColorTheme().getColor(a.$1Tb);
					return `<span style="color:${le ? P.$UL.Format.CSS.formatHex(le) : "#ffffff"};">$(${s.$sSb.id})</span>&nbsp;${re.reasonText}`;
				}
				static getPreReleaseMessage(se) {
					if (
						!se.hasPreReleaseVersion ||
						se.isBuiltin ||
						se.isPreReleaseVersion ||
						se.preRelease
					)
						return;
					const re = `[${(0, d.localize)(6520, null)}](${v.URI.parse(`command:workbench.extensions.action.showPreReleaseVersion?${encodeURIComponent(JSON.stringify([se.identifier.id]))}`)})`;
					return (0, d.localize)(6521, null, re);
				}
			});
			(e.$QSc = _),
				(e.$QSc =
					_ =
					F =
						Ne(
							[
								j(2, w.$MQb),
								j(3, y.$Uyb),
								j(4, f.$gj),
								j(5, r.$9Qb),
								j(6, h.$iP),
								j(7, z.$Vi),
							],
							_,
						));
			let te = class extends x {
				constructor(se, re, le) {
					super(),
						(this.f = se),
						(this.g = re),
						(this.h = le),
						(this.a = this.D(new i.$2c())),
						(this.c = this.D(new g.$re())),
						(this.onDidRender = this.c.event),
						this.render(),
						this.D(re.onDidChangeStatus(() => this.render()));
				}
				render() {
					(0, E.$hhb)(this.f), (this.a.value = void 0);
					const se = new i.$Zc();
					this.a.value = se;
					const re = this.g.status;
					if (re.length) {
						const le = new $.$cl("", { isTrusted: !0, supportThemeIcons: !0 });
						for (let ae = 0; ae < re.length; ae++) {
							const pe = re[ae];
							pe.icon && le.appendMarkdown(`$(${pe.icon.id})&nbsp;`),
								le.appendMarkdown(pe.message.value),
								ae < re.length - 1 &&
									le.appendText(`
`);
						}
						const oe = se.add(
							(0, k.$Uib)(le, {
								actionHandler: {
									callback: (ae) => {
										this.h.open(ae, { allowCommands: !0 }).catch(D.$4);
									},
									disposables: se,
								},
							}),
						);
						(0, E.$fhb)(this.f, oe.element);
					}
					this.c.fire();
				}
			};
			(e.$RSc = te), (e.$RSc = te = Ne([j(2, L.$7rb)], te));
			let Q = class extends x {
				constructor(se, re, le) {
					super(),
						(this.c = se),
						(this.f = re),
						(this.g = le),
						(this.a = this.D(new g.$re())),
						(this.onDidRender = this.a.event),
						this.render(),
						this.D(this.f.onDidChangeRecommendations(() => this.render()));
				}
				render() {
					(0, E.$hhb)(this.c);
					const se = this.h();
					se &&
						(se.icon &&
							(0, E.$fhb)(
								this.c,
								(0, E.$)(`div${c.ThemeIcon.asCSSSelector(se.icon)}`),
							),
						(0, E.$fhb)(
							this.c,
							(0, E.$)("div.recommendation-text", void 0, se.message),
						)),
						this.a.fire();
				}
				h() {
					if (
						!this.extension ||
						this.extension.deprecationInfo ||
						(0, B.$Oq)(this.extension) ||
						this.extension.state === w.ExtensionState.Installed
					)
						return;
					const se = this.f.getAllRecommendationsWithReason();
					if (se[this.extension.identifier.id.toLowerCase()]) {
						const re =
							se[this.extension.identifier.id.toLowerCase()].reasonText;
						if (re) return { icon: s.$sSb, message: re };
					} else if (
						this.g.globalIgnoredRecommendations.indexOf(
							this.extension.identifier.id.toLowerCase(),
						) !== -1
					)
						return { icon: void 0, message: (0, d.localize)(6522, null) };
				}
			};
			(e.$SSc = Q),
				(e.$SSc = Q = Ne([j(1, r.$9Qb), j(2, r.$0Qb)], Q)),
				(e.$TSc = (0, l.$wP)(
					"extensionIcon.starForeground",
					{
						light: "#DF6100",
						dark: "#FF8E00",
						hcDark: "#FF8E00",
						hcLight: l.$RP,
					},
					(0, d.localize)(6523, null),
					!0,
				)),
				(e.$USc = (0, l.$wP)(
					"extensionIcon.verifiedForeground",
					l.$RP,
					(0, d.localize)(6524, null),
					!0,
				)),
				(e.$VSc = (0, l.$wP)(
					"extensionIcon.preReleaseForeground",
					{
						dark: "#1d9271",
						light: "#1d9271",
						hcDark: "#1d9271",
						hcLight: l.$RP,
					},
					(0, d.localize)(6525, null),
					!0,
				)),
				(e.$WSc = (0, l.$wP)(
					"extensionIcon.sponsorForeground",
					{
						light: "#B51E78",
						dark: "#D758B3",
						hcDark: null,
						hcLight: "#B51E78",
					},
					(0, d.localize)(6526, null),
					!0,
				)),
				(0, h.$oP)((Z, se) => {
					const re = Z.getColor(e.$TSc);
					re &&
						(se.addRule(
							`.extension-ratings .codicon-extensions-star-full, .extension-ratings .codicon-extensions-star-half { color: ${re}; }`,
						),
						se.addRule(
							`.monaco-hover.extension-hover .markdown-hover .hover-contents ${c.ThemeIcon.asCSSSelector(s.$qSb)} { color: ${re}; }`,
						));
					const le = Z.getColor(e.$USc);
					le &&
						se.addRule(
							`${c.ThemeIcon.asCSSSelector(s.$nSb)} { color: ${le}; }`,
						),
						se.addRule(
							`.monaco-hover.extension-hover .markdown-hover .hover-contents ${c.ThemeIcon.asCSSSelector(s.$pSb)} { color: var(--vscode-extensionIcon-sponsorForeground); }`,
						),
						se.addRule(
							`.extension-editor > .header > .details > .subtitle .sponsor ${c.ThemeIcon.asCSSSelector(s.$pSb)} { color: var(--vscode-extensionIcon-sponsorForeground); }`,
						);
				});
		},
	),
		