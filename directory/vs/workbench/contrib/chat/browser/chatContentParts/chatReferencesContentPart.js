define(
			de[1946],
			he([
				1, 0, 7, 183, 14, 6, 3, 23, 54, 19, 26, 9, 4, 22, 5, 93, 41, 62, 35,
				233, 2947, 979, 218, 503, 1351, 131,
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
			) {
				"use strict";
				var I;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KXb = e.$JXb = void 0),
					(t = mt(t));
				const T = t.$;
				let P = class extends C.$1c {
					constructor(N, A, R, O, B) {
						super(),
							(this.b = N),
							(this.a = this.D(new E.$re())),
							(this.onDidChangeHeight = this.a.event);
						const U =
								A ??
								(N.length > 1
									? (0, h.localize)(4658, null, N.length)
									: (0, h.localize)(4659, null, 1)),
							z = T(".chat-used-context-icon"),
							F = (W) =>
								W.usedReferencesExpanded
									? w.$ak.chevronDown
									: w.$ak.chevronRight;
						z.classList.add(...u.ThemeIcon.asClassNameArray(F(R)));
						const x = T(".chat-used-context-label", void 0),
							H = this.D(
								new i.$oob(x, {
									buttonBackground: void 0,
									buttonBorder: void 0,
									buttonForeground: void 0,
									buttonHoverBackground: void 0,
									buttonSecondaryBackground: void 0,
									buttonSecondaryForeground: void 0,
									buttonSecondaryHoverBackground: void 0,
									buttonSeparator: void 0,
								}),
							);
						(this.domNode = T(".chat-used-context", void 0, x)),
							(H.label = U),
							H.element.prepend(z),
							this.c(H.element, U, R.usedReferencesExpanded),
							this.domNode.classList.toggle(
								"chat-used-context-collapsed",
								!R.usedReferencesExpanded,
							),
							this.D(
								H.onDidClick(() => {
									z.classList.remove(...u.ThemeIcon.asClassNameArray(F(R))),
										(R.usedReferencesExpanded = !R.usedReferencesExpanded),
										z.classList.add(...u.ThemeIcon.asClassNameArray(F(R))),
										this.domNode.classList.toggle(
											"chat-used-context-collapsed",
											!R.usedReferencesExpanded,
										),
										this.a.fire(),
										this.c(H.element, U, R.usedReferencesExpanded);
								}),
							);
						const V = this.D(O.get()).object;
						this.domNode.appendChild(V.getHTMLElement().parentElement),
							this.D(
								V.onDidOpen((W) => {
									if (
										W.element &&
										"reference" in W.element &&
										typeof W.element.reference == "object"
									) {
										const X =
												"variableName" in W.element.reference
													? W.element.reference.value
													: W.element.reference,
											Y = a.URI.isUri(X) ? X : X?.uri;
										Y &&
											B.open(Y, {
												fromUserGesture: !0,
												editorOptions: {
													...W.editorOptions,
													selection: X && "range" in X ? X.range : void 0,
												},
											});
									}
								}),
							),
							this.D(
								V.onContextMenu((W) => {
									W.browserEvent.preventDefault(),
										W.browserEvent.stopPropagation();
								}),
							);
						const J = Math.min(N.length, 6) * 22;
						V.layout(J),
							(V.getHTMLElement().style.height = `${J}px`),
							V.splice(0, V.length, N);
					}
					hasSameContent(N, A, R) {
						return (
							(N.kind === "references" &&
								N.references.length === this.b.length) ||
							(N.kind === "codeCitations" &&
								N.citations.length === this.b.length)
						);
					}
					c(N, A, R) {
						N.ariaLabel = R
							? (0, h.localize)(4660, null, A)
							: (0, h.localize)(4661, null, A);
					}
					addDisposable(N) {
						this.D(N);
					}
				};
				(e.$JXb = P), (e.$JXb = P = Ne([j(4, p.$7rb)], P));
				let k = class extends C.$1c {
					get inUse() {
						return this.a.inUse;
					}
					constructor(N, A, R) {
						super(),
							(this.b = N),
							(this.c = A),
							(this.f = R),
							(this.a = this.D(new l.$hUb(() => this.g())));
					}
					g() {
						const N = this.D(
								this.c.createInstance(b.$uPb, {
									onDidChangeVisibility: this.b,
								}),
							),
							A = T(".chat-used-context-list");
						return (
							this.D((0, v.$IXb)(A, this.f)),
							this.c.createInstance(
								g.$yMb,
								"ChatListRenderer",
								A,
								new L(),
								[this.c.createInstance(D, N)],
								{
									alwaysConsumeMouseWheel: !1,
									accessibilityProvider: {
										getAriaLabel: (O) => {
											if (O.kind === "warning") return O.content.value;
											const B = O.reference;
											return typeof B == "string"
												? B
												: "variableName" in B
													? B.variableName
													: a.URI.isUri(B)
														? (0, m.$sc)(B.path)
														: (0, m.$sc)(B.uri.path);
										},
										getWidgetAriaLabel: () => (0, h.localize)(4662, null),
									},
									dnd: {
										getDragURI: (O) => {
											if (O.kind === "warning") return null;
											const { reference: B } = O;
											return typeof B == "string" || "variableName" in B
												? null
												: a.URI.isUri(B)
													? B.toString()
													: B.uri.toString();
										},
										dispose: () => {},
										onDragOver: () => !1,
										drop: () => {},
									},
								},
							)
						);
					}
					get() {
						const N = this.a.get();
						let A = !1;
						return {
							object: N,
							isStale: () => A,
							dispose: () => {
								(A = !0), this.a.release(N);
							},
						};
					}
				};
				(e.$KXb = k), (e.$KXb = k = Ne([j(1, n.$Li), j(2, f.$iP)], k));
				class L {
					getHeight(N) {
						return 22;
					}
					getTemplateId(N) {
						return D.TEMPLATE_ID;
					}
				}
				let D = class {
					static {
						I = this;
					}
					static {
						this.TEMPLATE_ID = "chatCollapsibleListRenderer";
					}
					constructor(N, A, R, O) {
						(this.a = N),
							(this.b = A),
							(this.c = R),
							(this.d = O),
							(this.templateId = I.TEMPLATE_ID);
					}
					renderTemplate(N) {
						const A = new C.$Zc(),
							R = A.add(
								this.a.create(N, { supportHighlights: !0, supportIcons: !0 }),
							);
						return { templateDisposables: A, label: R };
					}
					f(N) {
						return u.ThemeIcon.isThemeIcon(N.iconPath)
							? N.iconPath
							: this.b.getColorTheme().type === s.ColorScheme.DARK &&
									N.iconPath?.dark
								? N.iconPath?.dark
								: N.iconPath?.light;
					}
					renderElement(N, A, R, O) {
						if (N.kind === "warning") {
							R.label.setResource(
								{ name: N.content.value },
								{ icon: w.$ak.warning },
							);
							return;
						}
						const B = N.reference,
							U = this.f(N);
						if (
							((R.label.element.style.display = "flex"),
							typeof B == "object" && "variableName" in B)
						)
							if (B.value) {
								const z = a.URI.isUri(B.value) ? B.value : B.value.uri;
								R.label.setResource(
									{
										resource: z,
										name: (0, r.$jh)(z),
										description: `#${B.variableName}`,
										range: "range" in B.value ? B.value.range : void 0,
									},
									{ icon: U, title: N.options?.status?.description ?? N.title },
								);
							} else {
								const z = this.c.getVariable(B.variableName),
									F = z?.icon ? `$(${z.icon.id}) ` : "",
									x = `#${B.variableName}`,
									H = `${F}${z?.fullName ?? x}`;
								R.label.setLabel(H, x, {
									title: N.options?.status?.description ?? z?.description,
								});
							}
						else if (typeof B == "string")
							R.label.setLabel(B, void 0, {
								iconPath: a.URI.isUri(U) ? U : void 0,
								title: N.options?.status?.description ?? N.title,
							});
						else {
							const z = "uri" in B ? B.uri : B;
							if (
								z.scheme === "https" &&
								(0, r.$sh)(z.authority, "github.com") &&
								z.path.includes("/tree/")
							) {
								const F = z.path.split("/").slice(1, 3).join("/"),
									x = z.path.split("/").slice(5).join("/");
								R.label.setResource(
									{ resource: z, name: F, description: x },
									{ icon: w.$ak.github, title: N.title },
								);
							} else if (
								z.scheme === this.d.urlProtocol &&
								(0, r.$sh)(z.authority, S.$_Z)
							) {
								const F = z.path.substring(1);
								R.label.setResource(
									{ resource: z, name: F },
									{
										icon: w.$ak.settingsGear,
										title: (0, h.localize)(4663, null, F),
									},
								);
							} else
								(0, d.$Wg)(z, d.Schemas.mailto, d.Schemas.http, d.Schemas.https)
									? R.label.setResource(
											{ resource: z, name: z.toString() },
											{
												icon: U ?? w.$ak.globe,
												title:
													N.options?.status?.description ??
													N.title ??
													z.toString(),
											},
										)
									: R.label.setFile(z, {
											fileKind: c.FileKind.FILE,
											fileDecorations: { badges: !1, colors: !1 },
											range: "range" in B ? B.range : void 0,
											title: N.options?.status?.description ?? N.title,
										});
						}
						for (const z of [
							".monaco-icon-suffix-container",
							".monaco-icon-name-container",
						]) {
							const F = R.label.element.querySelector(z);
							F &&
								(N.options?.status?.kind ===
									y.ChatResponseReferencePartStatusKind.Omitted ||
								N.options?.status?.kind ===
									y.ChatResponseReferencePartStatusKind.Partial
									? F.classList.add("warning")
									: F.classList.remove("warning"));
						}
					}
					disposeTemplate(N) {
						N.templateDisposables.dispose();
					}
				};
				D = I = Ne([j(1, f.$iP), j(2, $.$D2), j(3, o.$Bk)], D);
			},
		),
		