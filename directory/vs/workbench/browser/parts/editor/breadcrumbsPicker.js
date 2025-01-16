define(
			de[3678],
			he([
				1, 0, 535, 29, 6, 132, 215, 3, 54, 19, 9, 10, 22, 5, 93, 51, 25, 233,
				1223, 35, 4, 18, 125, 1514,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wrc = e.$vrc = e.$urc = e.$trc = void 0),
					(C = mt(C));
				let $ = class {
					constructor(O, B, U, z, F) {
						(this.m = B),
							(this.n = U),
							(this.o = z),
							(this.p = F),
							(this.c = new d.$Zc()),
							(this.i = new UIEvent("fakeEvent")),
							(this.k = new w.$re()),
							(this.onWillPickElement = this.k.event),
							(this.l = new d.$2c()),
							(this.d = document.createElement("div")),
							(this.d.className = "monaco-breadcrumbs-picker show-file-icons"),
							O.appendChild(this.d);
					}
					dispose() {
						this.c.dispose(),
							this.l.dispose(),
							this.k.dispose(),
							this.d.remove(),
							setTimeout(() => this.h.dispose(), 0);
					}
					async show(O, B, U, z, F) {
						const H = this.o.getColorTheme().getColor(g.$kR);
						(this.f = document.createElement("div")),
							(this.f.className = "arrow"),
							(this.f.style.borderColor = `transparent transparent ${H ? H.toString() : ""}`),
							this.d.appendChild(this.f),
							(this.g = document.createElement("div")),
							(this.g.style.background = H ? H.toString() : ""),
							(this.g.style.paddingTop = "2px"),
							(this.g.style.borderRadius = "3px"),
							(this.g.style.boxShadow = `0 0 8px 2px ${this.o.getColorTheme().getColor(g.$bR)}`),
							(this.g.style.border = `1px solid ${this.o.getColorTheme().getColor(g.$cR)}`),
							this.d.appendChild(this.g),
							(this.j = {
								maxHeight: B,
								width: U,
								arrowSize: z,
								arrowOffset: F,
								inputHeight: 0,
							}),
							(this.h = this.s(this.g, O)),
							this.c.add(
								this.h.onDidOpen(async (q) => {
									const { element: V, editorOptions: G, sideBySide: K } = q;
									await this.u(V, { ...G, preserveFocus: !1 }, K);
								}),
							),
							this.c.add(
								this.h.onDidChangeFocus((q) => {
									this.l.value = this.t(q.elements[0]);
								}),
							),
							this.c.add(
								this.h.onDidChangeContentHeight(() => {
									this.q();
								}),
							),
							this.d.focus();
						try {
							await this.r(O), this.q();
						} catch (q) {
							(0, i.$4)(q);
						}
					}
					q() {
						const O = 2 * this.j.arrowSize,
							B = Math.min(this.j.maxHeight - O, this.h.contentHeight),
							U = B + O;
						(this.d.style.height = `${U}px`),
							(this.d.style.width = `${this.j.width}px`),
							(this.f.style.top = `-${2 * this.j.arrowSize}px`),
							(this.f.style.borderWidth = `${this.j.arrowSize}px`),
							(this.f.style.marginLeft = `${this.j.arrowOffset}px`),
							(this.g.style.height = `${B}px`),
							(this.g.style.width = `${this.j.width}px`),
							this.h.layout(B, this.j.width);
					}
					restoreViewState() {}
				};
				(e.$trc = $),
					(e.$trc = $ = Ne([j(2, c.$Li), j(3, b.$iP), j(4, a.$gj)], $));
				class v {
					getHeight(O) {
						return 22;
					}
					getTemplateId(O) {
						return "FileStat";
					}
				}
				class S {
					getId(O) {
						return u.URI.isUri(O)
							? O.toString()
							: (0, p.$4i)(O)
								? O.id
								: (0, p.$5i)(O)
									? O.uri.toString()
									: O.resource.toString();
					}
				}
				let I = class {
					constructor(O) {
						this.c = O;
					}
					hasChildren(O) {
						return (
							u.URI.isUri(O) || (0, p.$4i)(O) || (0, p.$5i)(O) || O.isDirectory
						);
					}
					async getChildren(O) {
						if ((0, p.$4i)(O)) return O.folders;
						let B;
						return (
							(0, p.$5i)(O)
								? (B = O.uri)
								: u.URI.isUri(O)
									? (B = O)
									: (B = O.resource),
							(await this.c.resolve(B)).children ?? []
						);
					}
				};
				I = Ne([j(0, h.$ll)], I);
				let T = class {
					constructor(O, B) {
						(this.c = O), (this.d = B), (this.templateId = "FileStat");
					}
					renderTemplate(O) {
						return this.c.create(O, { supportHighlights: !0 });
					}
					renderElement(O, B, U) {
						const z = this.d.getValue("explorer.decorations"),
							{ element: F } = O;
						let x, H;
						(0, p.$5i)(F)
							? ((x = F.uri), (H = h.FileKind.ROOT_FOLDER))
							: ((x = F.resource),
								(H = F.isDirectory ? h.FileKind.FOLDER : h.FileKind.FILE)),
							U.setFile(x, {
								fileKind: H,
								hidePath: !0,
								fileDecorations: z,
								matches: (0, E.$3k)(O.filterData),
								extraClasses: ["picker-item"],
							});
					}
					disposeTemplate(O) {
						O.dispose();
					}
				};
				T = Ne([j(1, a.$gj)], T);
				class P {
					getKeyboardNavigationLabel(O) {
						return O.name;
					}
				}
				class k {
					getWidgetAriaLabel() {
						return (0, s.localize)(3119, null);
					}
					getAriaLabel(O) {
						return O.name;
					}
				}
				let L = class {
					constructor(O, B) {
						(this.f = O), (this.c = new Map()), (this.d = new d.$Zc());
						const U = f.$prc.FileExcludes.bindTo(B),
							z = () => {
								O.getWorkspace().folders.forEach((F) => {
									const x = U.getValue({ resource: F.uri });
									if (!x) return;
									const H = {};
									for (const q in x) {
										if (typeof x[q] != "boolean") continue;
										const V =
											q.indexOf("**/") !== 0 ? m.$lc.join(F.uri.path, q) : q;
										H[V] = x[q];
									}
									this.c.set(F.uri.toString(), C.$Jk(H));
								});
							};
						z(),
							this.d.add(U),
							this.d.add(U.onDidChange(z)),
							this.d.add(O.onDidChangeWorkspaceFolders(z));
					}
					dispose() {
						this.d.dispose();
					}
					filter(O, B) {
						if ((0, p.$5i)(O)) return !0;
						const U = this.f.getWorkspaceFolder(O.resource);
						return !U || !this.c.has(U.uri.toString())
							? !0
							: !this.c.get(U.uri.toString())(
									(0, m.$qc)(U.uri.path, O.resource.path),
									(0, r.$kh)(O.resource),
								);
					}
				};
				L = Ne([j(0, p.$Vi), j(1, a.$gj)], L);
				class D {
					compare(O, B) {
						return (0, p.$5i)(O) && (0, p.$5i)(B)
							? O.index - B.index
							: O.isDirectory === B.isDirectory
								? (0, t.$3r)(O.name, B.name)
								: O.isDirectory
									? -1
									: 1;
					}
				}
				e.$urc = D;
				let M = class extends $ {
					constructor(O, B, U, z, F, x, H) {
						super(O, B, U, z, F), (this.v = x), (this.w = H);
					}
					s(O) {
						this.g.classList.add("file-icon-themable-tree"),
							this.g.classList.add("show-file-icons");
						const B = (z) => {
							this.g.classList.toggle(
								"align-icons-and-twisties",
								z.hasFileIcons && !z.hasFolderIcons,
							),
								this.g.classList.toggle(
									"hide-arrows",
									z.hidesExplorerArrows === !0,
								);
						};
						this.c.add(this.o.onDidFileIconThemeChange(B)),
							B(this.o.getFileIconTheme());
						const U = this.n.createInstance(o.$uPb, o.$tPb);
						return (
							this.c.add(U),
							this.n.createInstance(
								n.$FMb,
								"BreadcrumbsFilePicker",
								O,
								new v(),
								[this.n.createInstance(T, U)],
								this.n.createInstance(I),
								{
									multipleSelectionSupport: !1,
									sorter: new D(),
									filter: this.n.createInstance(L),
									identityProvider: new S(),
									keyboardNavigationLabelProvider: new P(),
									accessibilityProvider: this.n.createInstance(k),
									showNotFoundMessage: !1,
									overrideStyles: { listBackground: g.$kR },
								},
							)
						);
					}
					async r(O) {
						const { uri: B, kind: U } = O;
						let z;
						U === h.FileKind.ROOT_FOLDER
							? (z = this.v.getWorkspace())
							: (z = (0, r.$mh)(B));
						const F = this.h;
						await F.setInput(z);
						let x;
						for (const { element: H } of F.getNode().children)
							if ((0, p.$5i)(H) && (0, r.$gh)(H.uri, B)) {
								x = H;
								break;
							} else if ((0, r.$gh)(H.resource, B)) {
								x = H;
								break;
							}
						x && (F.reveal(x, 0.5), F.setFocus([x], this.i)), F.domFocus();
					}
					t(O) {
						return d.$1c.None;
					}
					async u(O, B, U) {
						return !(0, p.$5i)(O) && O.isFile
							? (this.k.fire(),
								await this.w.openEditor(
									{ resource: O.resource, options: B },
									U ? l.$KY : void 0,
								),
								!0)
							: !1;
					}
				};
				(e.$vrc = M),
					(e.$vrc = M =
						Ne(
							[j(2, c.$Li), j(3, b.$iP), j(4, a.$gj), j(5, p.$Vi), j(6, l.$IY)],
							M,
						));
				let N = class {
					constructor(O, B, U) {
						(this.d = O),
							(this.c = U.getValue(B, "breadcrumbs.symbolSortOrder"));
					}
					compare(O, B) {
						return this.c === "name"
							? this.d.compareByName(O, B)
							: this.c === "type"
								? this.d.compareByType(O, B)
								: this.d.compareByPosition(O, B);
					}
				};
				N = Ne([j(2, y.$XO)], N);
				class A extends $ {
					s(O, B) {
						const { config: U } = B.outline;
						return this.n.createInstance(
							n.$EMb,
							"BreadcrumbsOutlinePicker",
							O,
							U.delegate,
							U.renderers,
							U.treeDataSource,
							{
								...U.options,
								sorter: this.n.createInstance(N, U.comparator, void 0),
								collapseByDefault: !0,
								expandOnlyOnTwistieClick: !0,
								multipleSelectionSupport: !1,
								showNotFoundMessage: !1,
							},
						);
					}
					r(O) {
						const B = O.outline.captureViewState();
						this.restoreViewState = () => {
							B.dispose();
						};
						const U = this.h;
						return (
							U.setInput(O.outline),
							O.element !== O.outline &&
								(U.reveal(O.element, 0.5), U.setFocus([O.element], this.i)),
							U.domFocus(),
							Promise.resolve()
						);
					}
					t(O) {
						return this.h.getInput().preview(O);
					}
					async u(O, B, U) {
						return (
							this.k.fire(), await this.h.getInput().reveal(O, B, U, !1), !0
						);
					}
				}
				e.$wrc = A;
			},
		),
		