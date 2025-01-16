define(de[85], he([1, 0, 22, 5, 76, 28]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.EncodingMode =
					e.TextFileResolveReason =
					e.TextFileEditorModelState =
					e.$lZ =
					e.TextFileOperationResult =
					e.$kZ =
						void 0),
				(e.$mZ = a),
				(e.$nZ = h),
				(e.$oZ = c),
				(e.$pZ = n),
				(e.$kZ = (0, i.$Mi)("textFileService"));
			var C;
			(function (g) {
				g[(g.FILE_IS_BINARY = 0)] = "FILE_IS_BINARY";
			})(C || (e.TextFileOperationResult = C = {}));
			class d extends t.$Gl {
				static isTextFileOperationError(p) {
					return p instanceof Error && !(0, E.$ug)(p.textFileOperationResult);
				}
				constructor(p, o, f) {
					super(p, t.FileOperationResult.FILE_OTHER_ERROR),
						(this.textFileOperationResult = o),
						(this.options = f);
				}
			}
			e.$lZ = d;
			var m;
			(function (g) {
				(g[(g.SAVED = 0)] = "SAVED"),
					(g[(g.DIRTY = 1)] = "DIRTY"),
					(g[(g.PENDING_SAVE = 2)] = "PENDING_SAVE"),
					(g[(g.CONFLICT = 3)] = "CONFLICT"),
					(g[(g.ORPHAN = 4)] = "ORPHAN"),
					(g[(g.ERROR = 5)] = "ERROR");
			})(m || (e.TextFileEditorModelState = m = {}));
			var r;
			(function (g) {
				(g[(g.EDITOR = 1)] = "EDITOR"),
					(g[(g.REFERENCE = 2)] = "REFERENCE"),
					(g[(g.OTHER = 3)] = "OTHER");
			})(r || (e.TextFileResolveReason = r = {}));
			var u;
			(function (g) {
				(g[(g.Encode = 0)] = "Encode"), (g[(g.Decode = 1)] = "Decode");
			})(u || (e.EncodingMode = u = {}));
			function a(g) {
				const p = g;
				return (0, E.$Ag)(
					p.setEncoding,
					p.getEncoding,
					p.save,
					p.revert,
					p.isDirty,
					p.getLanguageId,
				);
			}
			function h(g) {
				const p = [];
				let o;
				for (; typeof (o = g.read()) == "string"; ) p.push(o);
				return p.join("");
			}
			function c(g) {
				let p = !1;
				return {
					read() {
						return p ? null : ((p = !0), g);
					},
				};
			}
			function n(g) {
				if (!(typeof g > "u"))
					return typeof g == "string"
						? w.$Te.fromString(g)
						: {
								read: () => {
									const p = g.read();
									return typeof p == "string" ? w.$Te.fromString(p) : null;
								},
							};
			}
		}),
		define(
			de[3677],
			he([1, 0, 64, 4, 5, 101, 85, 88, 15]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$koc = void 0);
				class r {
					constructor(h) {
						this.a = h.getProxy(d.$mbb.ExtHostDocumentSaveParticipant);
					}
					async participate(h, c, n, g) {
						if (!h.textEditorModel || !(0, t.$TN)(h.textEditorModel)) return;
						const p = new Promise((o, f) => {
							setTimeout(() => f(new Error((0, i.localize)(2578, null))), 1750),
								this.a
									.$participateInSave(h.resource, c.reason)
									.then((b) => {
										if (!b.every((s) => s))
											return Promise.reject(new Error("listener failed"));
									})
									.then(o, f);
						});
						return (0, m.$Bh)(p, g);
					}
				}
				let u = class {
					constructor(h, c, n) {
						(this.b = n),
							(this.a = this.b.files.addSaveParticipant(
								c.createInstance(r, h),
							));
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$koc = u), (e.$koc = u = Ne([E.$umc, j(1, w.$Li), j(2, C.$kZ)], u));
			},
		),
		define(
			de[233],
			he([
				1, 0, 4, 9, 19, 325, 61, 25, 10, 67, 85, 472, 23, 22, 35, 6, 73, 252, 3,
				5, 222, 834,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vPb = e.$uPb = e.$tPb = void 0);
				function y(T) {
					if (!(!T || !T.resource))
						return i.URI.isUri(T.resource) ? T.resource : T.resource.primary;
				}
				e.$tPb = { onDidChangeVisibility: g.Event.None };
				let $ = class extends f.$1c {
					constructor(P, k, L, D, M, N, A, R, O, B) {
						super(),
							(this.f = k),
							(this.g = L),
							(this.h = D),
							(this.j = M),
							(this.m = N),
							(this.n = A),
							(this.q = R),
							(this.r = O),
							(this.s = B),
							(this.a = this.D(new g.$re())),
							(this.onDidChangeDecorations = this.a.event),
							(this.b = []),
							(this.c = []),
							this.t(P);
					}
					t(P) {
						this.D(
							P.onDidChangeVisibility((k) => {
								this.b.forEach((L) => L.notifyVisibilityChanged(k));
							}),
						),
							this.D(
								this.m.onDidChange(() =>
									this.b.forEach((k) => k.notifyExtensionsRegistered()),
								),
							),
							this.D(
								this.h.onModelLanguageChanged((k) => {
									k.model.uri &&
										this.b.forEach((L) =>
											L.notifyModelLanguageChanged(k.model),
										);
								}),
							),
							this.D(
								this.h.onModelAdded((k) => {
									k.uri && this.b.forEach((L) => L.notifyModelAdded(k));
								}),
							),
							this.D(
								this.j.onDidChangeWorkspaceFolders(() => {
									this.b.forEach((k) => k.notifyWorkspaceFoldersChange());
								}),
							),
							this.D(
								this.n.onDidChangeDecorations((k) => {
									let L = !1;
									this.b.forEach((D) => {
										D.notifyFileDecorationsChanges(k) && (L = !0);
									}),
										L && this.a.fire();
								}),
							),
							this.D(
								this.q.onDidColorThemeChange(() =>
									this.b.forEach((k) => k.notifyThemeChange()),
								),
							),
							this.D(
								this.g.onDidChangeConfiguration((k) => {
									k.affectsConfiguration(c.$Ll) &&
										this.b.forEach((L) => L.notifyFileAssociationsChange());
								}),
							),
							this.D(
								this.r.onDidChangeFormatters((k) => {
									this.b.forEach((L) => L.notifyFormattersChange(k.scheme));
								}),
							),
							this.D(
								this.s.untitled.onDidChangeLabel((k) => {
									this.b.forEach((L) =>
										L.notifyUntitledLabelChange(k.resource),
									);
								}),
							);
					}
					get(P) {
						return this.c[P];
					}
					create(P, k) {
						const L = this.f.createInstance(I, P, k),
							D = {
								element: L.element,
								onDidRender: L.onDidRender,
								setLabel: (M, N, A) => L.setLabel(M, N, A),
								setResource: (M, N) => L.setResource(M, N),
								setFile: (M, N) => L.setFile(M, N),
								clear: () => L.clear(),
								dispose: () => this.u(L),
							};
						return this.c.push(D), this.b.push(L), D;
					}
					u(P) {
						const k = this.b.indexOf(P);
						k > -1 && (this.b.splice(k, 1), this.c.splice(k, 1)), (0, f.$Vc)(P);
					}
					clear() {
						(this.b = (0, f.$Vc)(this.b)), (this.c = []);
					}
					dispose() {
						super.dispose(), this.clear();
					}
				};
				(e.$uPb = $),
					(e.$uPb = $ =
						Ne(
							[
								j(1, b.$Li),
								j(2, m.$gj),
								j(3, r.$QO),
								j(4, d.$Vi),
								j(5, C.$nM),
								j(6, a.$sPb),
								j(7, n.$iP),
								j(8, p.$3N),
								j(9, u.$kZ),
							],
							$,
						));
				let v = class extends $ {
					get element() {
						return this.w;
					}
					constructor(P, k, L, D, M, N, A, R, O, B, U) {
						super(e.$tPb, L, D, M, N, A, R, O, B, U),
							(this.w = this.D(this.create(P, k)));
					}
				};
				(e.$vPb = v),
					(e.$vPb = v =
						Ne(
							[
								j(2, b.$Li),
								j(3, m.$gj),
								j(4, r.$QO),
								j(5, d.$Vi),
								j(6, C.$nM),
								j(7, a.$sPb),
								j(8, n.$iP),
								j(9, p.$3N),
								j(10, u.$kZ),
							],
							v,
						));
				var S;
				(function (T) {
					(T[(T.Basic = 1)] = "Basic"), (T[(T.Full = 2)] = "Full");
				})(S || (S = {}));
				let I = class extends E.$Xob {
					constructor(P, k, L, D, M, N, A, R, O) {
						super(P, k),
							(this.L = L),
							(this.M = D),
							(this.N = M),
							(this.O = N),
							(this.P = A),
							(this.Q = R),
							(this.R = O),
							(this.u = this.D(new g.$re())),
							(this.onDidRender = this.u.event),
							(this.w = void 0),
							(this.y = this.D(new f.$2c())),
							(this.z = void 0),
							(this.C = void 0),
							(this.F = void 0),
							(this.G = void 0),
							(this.H = void 0),
							(this.I = void 0),
							(this.J = !1);
					}
					notifyVisibilityChanged(P) {
						P === this.J &&
							((this.J = !P),
							P &&
								this.I &&
								(this.Z({
									updateIcon: this.I === S.Full,
									updateDecoration: this.I === S.Full,
								}),
								(this.I = void 0)));
					}
					notifyModelLanguageChanged(P) {
						this.S(P);
					}
					notifyModelAdded(P) {
						this.S(P);
					}
					S(P) {
						const k = y(this.w);
						k &&
							(0, w.$gh)(P.uri, k) &&
							this.F !== P.getLanguageId() &&
							((this.F = P.getLanguageId()),
							this.Z({ updateIcon: !0, updateDecoration: !1 }));
					}
					notifyFileDecorationsChanges(P) {
						if (!this.z) return !1;
						const k = y(this.w);
						return k && this.z.fileDecorations && P.affectsResource(k)
							? this.Z({ updateIcon: !1, updateDecoration: !0 })
							: !1;
					}
					notifyExtensionsRegistered() {
						this.Z({ updateIcon: !0, updateDecoration: !1 });
					}
					notifyThemeChange() {
						this.Z({ updateIcon: !1, updateDecoration: !1 });
					}
					notifyFileAssociationsChange() {
						this.Z({ updateIcon: !0, updateDecoration: !1 });
					}
					notifyFormattersChange(P) {
						y(this.w)?.scheme === P &&
							this.Z({ updateIcon: !1, updateDecoration: !1 });
					}
					notifyUntitledLabelChange(P) {
						(0, w.$gh)(P, y(this.w)) &&
							this.Z({ updateIcon: !1, updateDecoration: !1 });
					}
					notifyWorkspaceFoldersChange() {
						if (typeof this.H == "string") {
							const P = y(this.w);
							i.URI.isUri(P) &&
								this.w?.name === this.H &&
								this.setFile(P, this.z);
						}
					}
					setFile(P, k) {
						const L = k?.hideLabel;
						let D;
						if (!L) {
							if (k?.fileKind === c.FileKind.ROOT_FOLDER) {
								const N = this.Q.getWorkspaceFolder(P);
								N && ((D = N.name), (this.H = D));
							}
							D || (D = (0, s.$xO)((0, w.$jh)(P)));
						}
						let M;
						if (!k?.hidePath) {
							const N = this.O.getUriLabel((0, w.$mh)(P), { relative: !0 });
							N && N !== "." && (M = N);
						}
						this.setResource(
							{ resource: P, name: D, description: M, range: k?.range },
							k,
						);
					}
					setResource(P, k = Object.create(null)) {
						const L = y(P),
							D = P?.resource && !i.URI.isUri(P.resource);
						if (!k.forceLabel && !D && L?.scheme === h.Schemas.untitled) {
							const O = this.P.untitled.get(L);
							if (O && !O.hasAssociatedFilePath) {
								if (
									(typeof P.name == "string" && (P.name = O.name),
									typeof P.description == "string")
								) {
									const U = O.resource.path;
									P.name !== U ? (P.description = U) : (P.description = void 0);
								}
								const B = O.resource.path;
								O.name !== B
									? (k.title = `${O.name} \u2022 ${B}`)
									: (k.title = B);
							}
						}
						if (
							!k.forceLabel &&
							!D &&
							L?.scheme === h.Schemas.vscodeNotebookCell
						) {
							const O = this.R.getNotebook(L),
								B = O?.getCellIndex(L);
							O &&
								B !== void 0 &&
								typeof P.name == "string" &&
								(k.title = (0, t.localize)(3008, null, P.name, `${B + 1}`)),
								typeof P.name == "string" &&
									O &&
									B !== void 0 &&
									typeof P.name == "string" &&
									(P.name = (0, t.localize)(3009, null, P.name, `${B + 1}`));
						}
						const M = this.W(P),
							N = M || this.X(P),
							A = this.U(k),
							R = this.Y(k);
						(this.w = P),
							(this.z = k),
							M && (this.F = void 0),
							N && (this.G = void 0),
							this.Z({ updateIcon: M || A || R, updateDecoration: M || A });
					}
					U(P) {
						const k = P?.fileKind,
							L = this.z?.fileKind;
						return k !== L;
					}
					W(P) {
						const k = y(P),
							L = y(this.w);
						return k && L ? k.toString() !== L.toString() : !(!k && !L);
					}
					X(P) {
						const k = y(P);
						return !!k && this.G !== this.O.getUriLabel(k);
					}
					Y(P) {
						return this.z?.icon !== P?.icon;
					}
					clear() {
						(this.w = void 0),
							(this.z = void 0),
							(this.F = void 0),
							(this.C = void 0),
							(this.G = void 0),
							this.setLabel("");
					}
					Z(P) {
						if (this.J)
							return (
								this.I !== S.Full &&
									(this.I =
										P.updateIcon || P.updateDecoration ? S.Full : S.Basic),
								!1
							);
						if ((P.updateIcon && (this.C = void 0), !this.w)) return !1;
						const k = {
								title: "",
								italic: this.z?.italic,
								strikethrough: this.z?.strikethrough,
								matches: this.z?.matches,
								descriptionMatches: this.z?.descriptionMatches,
								extraClasses: [],
								separator: this.z?.separator,
								domId: this.z?.domId,
								disabledCommand: this.z?.disabledCommand,
								labelEscapeNewLines: this.z?.labelEscapeNewLines,
								descriptionTitle: this.z?.descriptionTitle,
							},
							L = y(this.w);
						if (
							(this.z?.title !== void 0 && (k.title = this.z.title),
							L &&
								L.scheme !== h.Schemas.data &&
								(!this.z?.title ||
									(typeof this.z.title != "string" &&
										!this.z.title.markdownNotSupportedFallback)) &&
								(this.G || (this.G = this.O.getUriLabel(L)),
								!k.title || typeof k.title == "string"
									? (k.title = this.G)
									: k.title.markdownNotSupportedFallback ||
										(k.title.markdownNotSupportedFallback = this.G)),
							this.z &&
								!this.z.hideIcon &&
								(this.C ||
									(this.C = (0, o.$BDb)(
										this.M,
										this.L,
										L,
										this.z.fileKind,
										this.z.icon,
									)),
								i.URI.isUri(this.z.icon) && (k.iconPath = this.z.icon),
								(k.extraClasses = this.C.slice(0))),
							this.z?.extraClasses &&
								k.extraClasses.push(...this.z.extraClasses),
							this.z?.fileDecorations && L)
						) {
							P.updateDecoration &&
								(this.y.value = this.N.getDecoration(
									L,
									this.z.fileKind !== c.FileKind.FILE,
								));
							const D = this.y.value;
							if (D) {
								if (D.tooltip) {
									if (typeof k.title == "string")
										k.title = `${k.title} \u2022 ${D.tooltip}`;
									else if (typeof k.title?.markdown == "string") {
										const M = `${k.title.markdown} \u2022 ${D.tooltip}`;
										k.title = { markdown: M, markdownNotSupportedFallback: M };
									}
								}
								D.strikethrough && (k.strikethrough = !0),
									this.z.fileDecorations.colors &&
										k.extraClasses.push(D.labelClassName),
									this.z.fileDecorations.badges &&
										(k.extraClasses.push(D.badgeClassName),
										k.extraClasses.push(D.iconClassName));
							}
						}
						return (
							this.w.range &&
								(k.suffix =
									this.w.range.startLineNumber !== this.w.range.endLineNumber
										? `:${this.w.range.startLineNumber}-${this.w.range.endLineNumber}`
										: `:${this.w.range.startLineNumber}`),
							this.setLabel(this.w.name ?? "", this.w.description, k),
							this.u.fire(),
							!0
						);
					}
					dispose() {
						super.dispose(),
							(this.w = void 0),
							(this.z = void 0),
							(this.F = void 0),
							(this.C = void 0),
							(this.G = void 0),
							(this.H = void 0);
					}
				};
				I = Ne(
					[
						j(2, C.$nM),
						j(3, r.$QO),
						j(4, a.$sPb),
						j(5, p.$3N),
						j(6, u.$kZ),
						j(7, d.$Vi),
						j(8, l.$I6),
					],
					I,
				);
			},
		),
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
		define(
			de[1879],
			he([
				1, 0, 7, 168, 2681, 24, 15, 27, 3, 19, 9, 4, 11, 10, 8, 49, 22, 5, 43,
				93, 63, 233, 1223, 3517, 3678, 44, 18, 66, 345, 73, 99, 79, 14, 106, 6,
				95, 1514,
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
			) {
				"use strict";
				var O;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yrc = e.$xrc = void 0),
					(t = mt(t));
				class B extends w.$eob {
					constructor(V, G, K) {
						super(),
							(this.model = V),
							(this.element = G),
							(this.options = K),
							(this.c = new m.$Zc());
					}
					dispose() {
						this.c.dispose();
					}
					equals(V) {
						return V instanceof B
							? this.element.element === V.element.element &&
									this.options.showFileIcons === V.options.showFileIcons &&
									this.options.showSymbolIcons === V.options.showSymbolIcons
							: !1;
					}
					render(V) {
						const { element: G, outline: K } = this.element;
						if (G === K) {
							const Y = t.$("span", void 0, "\u2026");
							V.appendChild(Y);
							return;
						}
						const J = K.config.delegate.getTemplateId(G),
							W = K.config.renderers.find((Y) => Y.templateId === J);
						if (!W) {
							V.innerText = "<<NO RENDERER>>";
							return;
						}
						const X = W.renderTemplate(V);
						W.renderElement(
							{
								element: G,
								children: [],
								depth: 0,
								visibleChildrenCount: 0,
								visibleChildIndex: 0,
								collapsible: !1,
								collapsed: !1,
								visible: !0,
								filterData: void 0,
							},
							0,
							X,
							void 0,
						),
							this.c.add(
								(0, m.$Yc)(() => {
									W.disposeTemplate(X);
								}),
							);
					}
				}
				class U extends w.$eob {
					constructor(V, G, K, J, W) {
						super(),
							(this.model = V),
							(this.element = G),
							(this.options = K),
							(this.d = J),
							(this.f = W),
							(this.c = new m.$Zc());
					}
					dispose() {
						this.c.dispose();
					}
					equals(V) {
						return V instanceof U
							? r.$dh.isEqual(this.element.uri, V.element.uri) &&
									this.options.showFileIcons === V.options.showFileIcons &&
									this.options.showSymbolIcons === V.options.showSymbolIcons
							: !1;
					}
					render(V) {
						const G = this.d.create(V, { hoverDelegate: this.f });
						G.setFile(this.element.uri, {
							hidePath: !0,
							hideIcon:
								this.element.kind === p.FileKind.FOLDER ||
								!this.options.showFileIcons,
							fileKind: this.element.kind,
							fileDecorations: {
								colors: this.options.showDecorationColors,
								badges: !1,
							},
						}),
							V.classList.add(p.FileKind[this.element.kind].toLowerCase()),
							this.c.add(G);
					}
				}
				const z = (0, D.$$O)(
					"breadcrumb-separator",
					M.$ak.chevronRight,
					(0, a.localize)(3108, null),
				);
				let F = class {
					static {
						O = this;
					}
					static {
						this.HEIGHT = 22;
					}
					static {
						this.a = { default: 3, large: 8 };
					}
					static {
						this.Payload_Reveal = {};
					}
					static {
						this.Payload_RevealAside = {};
					}
					static {
						this.Payload_Pick = {};
					}
					static {
						this.CK_BreadcrumbsPossible = new n.$5j(
							"breadcrumbsPossible",
							!1,
							(0, a.localize)(3109, null),
						);
					}
					static {
						this.CK_BreadcrumbsVisible = new n.$5j(
							"breadcrumbsVisible",
							!1,
							(0, a.localize)(3110, null),
						);
					}
					static {
						this.CK_BreadcrumbsActive = new n.$5j(
							"breadcrumbsActive",
							!1,
							(0, a.localize)(3111, null),
						);
					}
					get onDidVisibilityChange() {
						return this.q.event;
					}
					constructor(V, G, K, J, W, X, Y, ie, ne, ee, _, te) {
						(this.r = G),
							(this.s = K),
							(this.t = J),
							(this.u = W),
							(this.v = X),
							(this.w = Y),
							(this.z = ie),
							(this.A = ne),
							(this.B = ee),
							(this.j = new m.$Zc()),
							(this.k = new m.$Zc()),
							(this.m = new m.$2c()),
							(this.n = !1),
							(this.q = this.j.add(new A.$re())),
							(this.domNode = document.createElement("div")),
							this.domNode.classList.add("breadcrumbs-control"),
							t.$fhb(V, this.domNode),
							(this.f = y.$prc.UseQuickPick.bindTo(_)),
							(this.g = y.$prc.Icons.bindTo(_)),
							(this.h = y.$prc.TitleScrollbarSizing.bindTo(_)),
							(this.l = this.v.createInstance(l.$uPb, l.$tPb));
						const Q = this.h.getValue() ?? "default",
							Z = G.widgetStyles ?? N.$Byb;
						(this.i = new w.$fob(this.domNode, O.a[Q], z, Z)),
							this.i.onDidSelectItem(this.E, this, this.j),
							this.i.onDidFocusItem(this.D, this, this.j),
							this.i.onDidChangeFocus(this.F, this, this.j),
							(this.b = O.CK_BreadcrumbsPossible.bindTo(this.t)),
							(this.c = O.CK_BreadcrumbsVisible.bindTo(this.t)),
							(this.d = O.CK_BreadcrumbsActive.bindTo(this.t)),
							(this.p = (0, R.$cib)("mouse")),
							this.j.add(te.register(this.s.id, this.i)),
							this.hide();
					}
					dispose() {
						this.j.dispose(),
							this.k.dispose(),
							this.b.reset(),
							this.c.reset(),
							this.d.reset(),
							this.f.dispose(),
							this.g.dispose(),
							this.i.dispose(),
							this.l.dispose(),
							this.domNode.remove();
					}
					get model() {
						return this.m.value;
					}
					layout(V) {
						this.i.layout(V);
					}
					isHidden() {
						return this.domNode.classList.contains("hidden");
					}
					hide() {
						const V = this.isHidden();
						this.k.clear(),
							this.c.set(!1),
							this.domNode.classList.toggle("hidden", !0),
							V || this.q.fire();
					}
					C() {
						const V = this.isHidden();
						this.c.set(!0),
							this.domNode.classList.toggle("hidden", !1),
							V && this.q.fire();
					}
					revealLast() {
						this.i.revealLast();
					}
					update() {
						this.k.clear();
						const V = S.$A1.getCanonicalUri(this.s.activeEditor, {
								supportSideBySide: S.SideBySideEditor.PRIMARY,
							}),
							G = this.isHidden();
						if (!V || !this.z.hasProvider(V))
							return this.b.set(!1), G ? !1 : (this.hide(), !0);
						const K = S.$A1.getOriginalUri(this.s.activeEditor, {
							supportSideBySide: S.SideBySideEditor.PRIMARY,
						});
						this.C(), this.b.set(!0);
						const J = this.v.createInstance(
							$.$src,
							K ?? V,
							this.s.activeEditorPane,
						);
						(this.m.value = J),
							this.domNode.classList.toggle(
								"backslash-path",
								this.B.getSeparator(V.scheme, V.authority) === "\\",
							);
						const W = () => {
								this.domNode.classList.toggle("relative-path", J.isRelative());
								const ee = this.g.getValue(),
									_ = {
										...this.r,
										showFileIcons: this.r.showFileIcons && ee,
										showSymbolIcons: this.r.showSymbolIcons && ee,
									},
									te = J.getElements().map((Q) =>
										Q instanceof $.$qrc
											? new U(J, Q, _, this.l, this.p)
											: new B(J, Q, _),
									);
								te.length === 0
									? (this.i.setEnabled(!1),
										this.i.setItems([
											new (class extends w.$eob {
												render(Q) {
													Q.innerText = (0, a.localize)(3112, null);
												}
												equals(Q) {
													return Q === this;
												}
												dispose() {}
											})(),
										]))
									: (this.i.setEnabled(!0),
										this.i.setItems(te),
										this.i.reveal(te[te.length - 1]));
							},
							X = J.onDidUpdate(W),
							Y = this.g.onDidChange(W);
						W(),
							this.k.clear(),
							this.k.add(X),
							this.k.add((0, m.$Yc)(() => this.m.clear())),
							this.k.add(Y),
							this.k.add((0, m.$Yc)(() => this.i.setItems([])));
						const ie = () => {
							const ee = this.h.getValue() ?? "default";
							this.i.setHorizontalScrollbarSize(O.a[ee]);
						};
						ie();
						const ne = this.h.onDidChange(ie);
						return (
							this.k.add(ne),
							this.k.add({
								dispose: () => {
									this.n && this.u.hideContextView({ source: this });
								},
							}),
							G !== this.isHidden()
						);
					}
					D(V) {
						V.item &&
							this.n &&
							((this.o = void 0), this.i.setSelection(V.item));
					}
					E(V) {
						if (!V.item) return;
						if (V.item === this.o) {
							(this.o = void 0),
								this.i.setFocused(void 0),
								this.i.setSelection(void 0);
							return;
						}
						const { element: G } = V.item;
						this.s.focus();
						const K = this.H(V.payload);
						if (K !== void 0) {
							this.i.setFocused(void 0),
								this.i.setSelection(void 0),
								this.G(V, G, K);
							return;
						}
						if (this.f.getValue()) {
							this.i.setFocused(void 0),
								this.i.setSelection(void 0),
								this.w.quickAccess.show(G instanceof $.$rrc ? "@" : "");
							return;
						}
						let J, W;
						this.u.showContextView({
							render: (X) => {
								V.item instanceof U
									? (J = this.v.createInstance(
											v.$vrc,
											X,
											V.item.model.resource,
										))
									: V.item instanceof B &&
										(J = this.v.createInstance(
											v.$wrc,
											X,
											V.item.model.resource,
										));
								const Y = J.onWillPickElement(() =>
										this.u.hideContextView({ source: this, didPick: !0 }),
									),
									ie = P.$sjb
										.getInstance(t.getWindow(this.domNode))
										.onDidChange(() =>
											this.u.hideContextView({ source: this }),
										),
									ne = t.$dhb(X),
									ee = ne.onDidBlur(() => {
										(this.o = this.i.isDOMFocused() ? V.item : void 0),
											this.u.hideContextView({ source: this });
									});
								return (this.n = !0), this.F(), (0, m.$Xc)(J, Y, ie, ne, ee);
							},
							getAnchor: () => {
								if (!W) {
									const X = t.getWindow(this.domNode),
										Y = X.innerWidth - 8;
									let ie = Math.min(X.innerHeight * 0.7, 300);
									const ne = Math.min(Y, Math.max(240, Y / 4.17)),
										ee = 8;
									let _;
									const te = t.$tgb(V.node.firstChild),
										Q = te.top + te.height + ee;
									Q + ie >= X.innerHeight && (ie = X.innerHeight - Q - 30);
									let Z = te.left;
									if (
										(Z + ne >= Y && (Z = Y - ne), V.payload instanceof i.$2fb)
									) {
										const se = ne - 2 * ee;
										(_ = V.payload.posx - Z),
											_ > se && ((Z = Math.min(Y - ne, Z + _ - se)), (_ = se));
									} else _ = te.left + te.width * 0.3 - Z;
									J.show(G, ie, ne, ee, Math.max(0, _)), (W = { x: Z, y: Q });
								}
								return W;
							},
							onHide: (X) => {
								X?.didPick || J.restoreViewState(),
									(this.n = !1),
									this.F(),
									X?.source === this &&
										(this.i.setFocused(void 0), this.i.setSelection(void 0)),
									J.dispose();
							},
						});
					}
					F() {
						const V = this.i.isDOMFocused() || this.n;
						this.d.set(V);
					}
					async G(V, G, K, J = !1) {
						if (G instanceof $.$qrc)
							if (G.kind === p.FileKind.FILE)
								await this.A.openEditor(
									{ resource: G.uri, options: { pinned: J } },
									K,
								);
							else {
								const W = this.i.getItems(),
									X = W.indexOf(V.item);
								this.i.setFocused(W[X + 1]),
									this.i.setSelection(W[X + 1], O.Payload_Pick);
							}
						else G.outline.reveal(G, { pinned: J }, K === I.$KY, !1);
					}
					H(V) {
						return V === O.Payload_RevealAside
							? I.$KY
							: V === O.Payload_Reveal
								? I.$JY
								: void 0;
					}
				};
				(e.$xrc = F),
					(e.$xrc =
						F =
						O =
							Ne(
								[
									j(3, n.$6j),
									j(4, g.$Wxb),
									j(5, o.$Li),
									j(6, s.$DJ),
									j(7, p.$ll),
									j(8, I.$IY),
									j(9, k.$3N),
									j(10, c.$gj),
									j(11, y.$nrc),
								],
								F,
							));
				let x = class {
					get control() {
						return this.c;
					}
					get onDidEnablementChange() {
						return this.d.event;
					}
					get onDidVisibilityChange() {
						return this.f.event;
					}
					constructor(V, G, K, J, W, X) {
						(this.g = V),
							(this.h = G),
							(this.i = K),
							(this.j = W),
							(this.a = new m.$Zc()),
							(this.b = new m.$Zc()),
							(this.d = this.a.add(new A.$re())),
							(this.f = this.a.add(new A.$re()));
						const Y = this.a.add(y.$prc.IsEnabled.bindTo(J));
						this.a.add(
							Y.onDidChange(() => {
								const ie = Y.getValue();
								!ie && this.c
									? (this.b.clear(), (this.c = void 0), this.d.fire())
									: ie &&
										!this.c &&
										((this.c = this.k()), this.c.update(), this.d.fire());
							}),
						),
							Y.getValue() && (this.c = this.k()),
							this.a.add(
								X.onDidChangeFileSystemProviderRegistrations((ie) => {
									(this.c?.model &&
										this.c.model.resource.scheme !== ie.scheme) ||
										(this.c?.update() && this.d.fire());
								}),
							);
					}
					k() {
						const V = this.b.add(
							this.j.createInstance(F, this.g, this.i, this.h),
						);
						return this.b.add(V.onDidVisibilityChange(() => this.f.fire())), V;
					}
					dispose() {
						this.a.dispose(), this.b.dispose();
					}
				};
				(e.$yrc = x),
					(e.$yrc = x = Ne([j(3, c.$gj), j(4, o.$Li), j(5, p.$ll)], x)),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "breadcrumbs.toggle",
									title: {
										...(0, a.localize2)(3116, "Toggle Breadcrumbs"),
										mnemonicTitle: (0, a.localize)(3113, null),
									},
									category: L.$ck.View,
									toggled: {
										condition: n.$Kj.equals("config.breadcrumbs.enabled", !0),
										title: (0, a.localize)(3114, null),
										mnemonicTitle: (0, a.localize)(3115, null),
									},
									menu: [
										{ id: h.$XX.CommandPalette },
										{
											id: h.$XX.MenubarAppearanceMenu,
											group: "4_editor",
											order: 2,
										},
										{
											id: h.$XX.NotebookToolbar,
											group: "notebookLayout",
											order: 2,
										},
										{ id: h.$XX.StickyScrollContext },
										{
											id: h.$XX.NotebookStickyScrollContext,
											group: "notebookView",
											order: 2,
										},
									],
								});
							}
							run(V) {
								const G = V.get(c.$gj),
									K = y.$prc.IsEnabled.bindTo(G).getValue();
								y.$prc.IsEnabled.bindTo(G).updateValue(!K);
							}
						},
					);
				function H(q, V) {
					const G = q.get(T.$EY),
						J = q.get(y.$nrc).getWidget(G.activeGroup.id);
					if (J) {
						const W = (0, E.$wb)(J.getItems());
						J.setFocused(W), V && J.setSelection(W, F.Payload_Pick);
					}
				}
				(0, h.$4X)(
					class extends h.$3X {
						constructor() {
							super({
								id: "breadcrumbs.focusAndSelect",
								title: (0, a.localize2)(3117, "Focus and Select Breadcrumbs"),
								precondition: F.CK_BreadcrumbsVisible,
								keybinding: {
									weight: f.KeybindingWeight.WorkbenchContrib,
									primary: d.KeyMod.CtrlCmd | d.KeyMod.Shift | d.KeyCode.Period,
									when: F.CK_BreadcrumbsPossible,
								},
								f1: !0,
							});
						}
						run(V, ...G) {
							H(V, !0);
						}
					},
				),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "breadcrumbs.focus",
									title: (0, a.localize2)(3118, "Focus Breadcrumbs"),
									precondition: F.CK_BreadcrumbsVisible,
									keybinding: {
										weight: f.KeybindingWeight.WorkbenchContrib,
										primary:
											d.KeyMod.CtrlCmd | d.KeyMod.Shift | d.KeyCode.Semicolon,
										when: F.CK_BreadcrumbsPossible,
									},
									f1: !0,
								});
							}
							run(V, ...G) {
								H(V, !1);
							}
						},
					),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.toggleToOn",
						weight: f.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyMod.CtrlCmd | d.KeyMod.Shift | d.KeyCode.Period,
						when: n.$Kj.not("config.breadcrumbs.enabled"),
						handler: async (q) => {
							const V = q.get(o.$Li),
								G = q.get(c.$gj),
								K = y.$prc.IsEnabled.bindTo(G);
							return (
								K.getValue() || (await K.updateValue(!0), await (0, C.$Nh)(50)),
								V.invokeFunction(H, !0)
							);
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.focusNext",
						weight: f.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyCode.RightArrow,
						secondary: [d.KeyMod.CtrlCmd | d.KeyCode.RightArrow],
						mac: {
							primary: d.KeyCode.RightArrow,
							secondary: [d.KeyMod.Alt | d.KeyCode.RightArrow],
						},
						when: n.$Kj.and(F.CK_BreadcrumbsVisible, F.CK_BreadcrumbsActive),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K && K.focusNext();
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.focusPrevious",
						weight: f.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyCode.LeftArrow,
						secondary: [d.KeyMod.CtrlCmd | d.KeyCode.LeftArrow],
						mac: {
							primary: d.KeyCode.LeftArrow,
							secondary: [d.KeyMod.Alt | d.KeyCode.LeftArrow],
						},
						when: n.$Kj.and(F.CK_BreadcrumbsVisible, F.CK_BreadcrumbsActive),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K && K.focusPrev();
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.focusNextWithPicker",
						weight: f.KeybindingWeight.WorkbenchContrib + 1,
						primary: d.KeyMod.CtrlCmd | d.KeyCode.RightArrow,
						mac: { primary: d.KeyMod.Alt | d.KeyCode.RightArrow },
						when: n.$Kj.and(
							F.CK_BreadcrumbsVisible,
							F.CK_BreadcrumbsActive,
							b.$nMb,
						),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K && K.focusNext();
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.focusPreviousWithPicker",
						weight: f.KeybindingWeight.WorkbenchContrib + 1,
						primary: d.KeyMod.CtrlCmd | d.KeyCode.LeftArrow,
						mac: { primary: d.KeyMod.Alt | d.KeyCode.LeftArrow },
						when: n.$Kj.and(
							F.CK_BreadcrumbsVisible,
							F.CK_BreadcrumbsActive,
							b.$nMb,
						),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K && K.focusPrev();
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.selectFocused",
						weight: f.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyCode.Enter,
						secondary: [d.KeyCode.DownArrow],
						when: n.$Kj.and(F.CK_BreadcrumbsVisible, F.CK_BreadcrumbsActive),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K && K.setSelection(K.getFocused(), F.Payload_Pick);
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.revealFocused",
						weight: f.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyCode.Space,
						secondary: [d.KeyMod.CtrlCmd | d.KeyCode.Enter],
						when: n.$Kj.and(F.CK_BreadcrumbsVisible, F.CK_BreadcrumbsActive),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K && K.setSelection(K.getFocused(), F.Payload_Reveal);
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.selectEditor",
						weight: f.KeybindingWeight.WorkbenchContrib + 1,
						primary: d.KeyCode.Escape,
						when: n.$Kj.and(F.CK_BreadcrumbsVisible, F.CK_BreadcrumbsActive),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K &&
								(K.setFocused(void 0),
								K.setSelection(void 0),
								V.activeGroup.activeEditorPane?.focus());
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.revealFocusedFromTreeAside",
						weight: f.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyMod.CtrlCmd | d.KeyCode.Enter,
						when: n.$Kj.and(
							F.CK_BreadcrumbsVisible,
							F.CK_BreadcrumbsActive,
							b.$nMb,
						),
						handler(q) {
							const V = q.get(I.$IY),
								K = q.get(b.$fMb).lastFocusedList;
							if (!(K instanceof b.$EMb) && !(K instanceof b.$FMb)) return;
							const J = K.getFocus()[0];
							if (u.URI.isUri(J?.resource))
								return V.openEditor(
									{ resource: J.resource, options: { pinned: !0 } },
									I.$KY,
								);
							const W = K.getInput();
							if (W && typeof W.outlineKind == "string")
								return W.reveal(J, { pinned: !0, preserveFocus: !1 }, !0, !1);
						},
					});
			},
		),
		define(
			de[478],
			he([
				1, 0, 44, 1296, 85, 18, 22, 73, 23, 19, 42, 1827, 122, 170, 125, 399,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$S1b = e.$R1b = void 0);
				let o = class extends i.$RIb {
					constructor(s, l, y, $, v, S, I, T, P) {
						super(s, l, v, S, I, T, P), (this.Q = y), (this.R = $);
					}
					save(s, l) {
						return this.resource.scheme !== m.Schemas.untitled &&
							!this.m.hasProvider(this.resource)
							? this.saveAs(s, l)
							: this.S(l, !1, s);
					}
					saveAs(s, l) {
						return this.S(l, !0, s);
					}
					async S(s, l, y) {
						let $;
						if (
							(l
								? ($ = await this.R.saveAs(this.resource, void 0, {
										...s,
										suggestedTarget: this.preferredResource,
									}))
								: ($ = await this.R.save(this.resource, s)),
							!!$)
						)
							return { resource: $ };
					}
					async revert(s, l) {
						await this.R.revert(this.resource, l);
					}
				};
				(e.$R1b = o),
					(e.$R1b = o =
						Ne(
							[
								j(2, E.$IY),
								j(3, w.$kZ),
								j(4, d.$3N),
								j(5, C.$ll),
								j(6, c.$_Y),
								j(7, n.$XO),
								j(8, g.$QIb),
							],
							o,
						));
				let f = class extends o {
					static {
						p = this;
					}
					static {
						this.ID = "workbench.editors.resourceEditorInput";
					}
					get typeId() {
						return p.ID;
					}
					get editorId() {
						return t.$b1.id;
					}
					constructor(s, l, y, $, v, S, I, T, P, k, L, D, M) {
						super(s, void 0, T, I, k, P, L, D, M),
							(this.X = l),
							(this.Y = y),
							(this.Z = $),
							(this.$ = v),
							(this.ab = S),
							(this.U = void 0),
							(this.W = void 0);
					}
					getName() {
						return this.X || super.getName();
					}
					setName(s) {
						this.X !== s && ((this.X = s), this.f.fire());
					}
					getDescription() {
						return this.Y;
					}
					setDescription(s) {
						this.Y !== s && ((this.Y = s), this.f.fire());
					}
					setLanguageId(s, l) {
						this.setPreferredLanguageId(s), this.U?.setLanguageId(s, l);
					}
					setPreferredLanguageId(s) {
						this.Z = s;
					}
					setPreferredContents(s) {
						this.$ = s;
					}
					async resolve() {
						const s = this.$,
							l = this.Z;
						(this.$ = void 0),
							(this.Z = void 0),
							this.W || (this.W = this.ab.createModelReference(this.resource));
						const y = await this.W,
							$ = y.object;
						if (!($ instanceof a.$Q1b))
							throw (
								(y.dispose(),
								(this.W = void 0),
								new Error(
									`Unexpected model for TextResourceEditorInput: ${this.resource}`,
								))
							);
						return (
							(this.U = $),
							(typeof s == "string" || typeof l == "string") &&
								$.updateTextEditorModel(
									typeof s == "string" ? (0, h.$7X)(s) : void 0,
									l,
								),
							$
						);
					}
					matches(s) {
						return this === s
							? !0
							: s instanceof p
								? (0, r.$gh)(s.resource, this.resource)
								: (0, t.$i1)(s)
									? super.matches(s)
									: !1;
					}
					dispose() {
						this.W && (this.W.then((s) => s.dispose()), (this.W = void 0)),
							(this.U = void 0),
							super.dispose();
					}
				};
				(e.$S1b = f),
					(e.$S1b =
						f =
						p =
							Ne(
								[
									j(5, u.$MO),
									j(6, w.$kZ),
									j(7, E.$IY),
									j(8, C.$ll),
									j(9, d.$3N),
									j(10, c.$_Y),
									j(11, n.$XO),
									j(12, g.$QIb),
								],
								f,
							));
			},
		),
		define(
			de[3679],
			he([1, 0, 7, 3, 6, 5, 233, 9, 22, 17, 54, 4, 218, 41]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Tb = void 0),
					(t = mt(t));
				let n = class extends i.$1c {
					constructor(p, o = [], f = t.$(".chat-attached-context"), b, s) {
						super(),
							(this.f = p),
							(this.g = o),
							(this.domNode = f),
							(this.h = b),
							(this.j = s),
							(this.a = this.D(new i.$Zc())),
							(this.b = this.D(new w.$re())),
							(this.c = this.h.createInstance(C.$uPb, {
								onDidChangeVisibility: this.b.event,
							})),
							this.m(f);
					}
					m(p) {
						t.$9fb(p),
							this.a.clear(),
							t.$khb(!!this.f.length, this.domNode),
							this.f.forEach((o) => {
								const f = t.$fhb(
										p,
										t.$(".chat-attached-context-attachment.show-file-icons"),
									),
									b = this.c.create(f, { supportIcons: !0 }),
									s = d.URI.isUri(o.value)
										? o.value
										: o.value &&
												typeof o.value == "object" &&
												"uri" in o.value &&
												d.URI.isUri(o.value.uri)
											? o.value.uri
											: void 0,
									l =
										o.value &&
										typeof o.value == "object" &&
										"range" in o.value &&
										r.$iL.isIRange(o.value.range)
											? o.value.range
											: void 0,
									y = this.g.find(
										(I) =>
											typeof I.reference == "object" &&
											"variableName" in I.reference &&
											I.reference.variableName === o.name,
									),
									$ =
										y?.options?.status?.kind ===
										h.ChatResponseReferencePartStatusKind.Omitted,
									v =
										$ ||
										y?.options?.status?.kind ===
											h.ChatResponseReferencePartStatusKind.Partial;
								if (s) {
									const I = (0, u.$sc)(s.path),
										T = (0, u.$rc)(s.path),
										P = `${I} ${T}`;
									let k;
									$
										? (k = l
												? (0, a.localize)(
														4647,
														null,
														P,
														l.startLineNumber,
														l.endLineNumber,
													)
												: (0, a.localize)(4648, null, P))
										: v
											? (k = l
													? (0, a.localize)(
															4649,
															null,
															P,
															l.startLineNumber,
															l.endLineNumber,
														)
													: (0, a.localize)(4650, null, P))
											: (k = l
													? (0, a.localize)(
															4651,
															null,
															P,
															l.startLineNumber,
															l.endLineNumber,
														)
													: (0, a.localize)(4652, null, P)),
										b.setFile(s, {
											fileKind: m.FileKind.FILE,
											hidePath: !0,
											range: l,
											title: y?.options?.status?.description,
										}),
										(f.ariaLabel = k),
										(f.tabIndex = 0),
										(f.style.cursor = "pointer"),
										this.a.add(
											t.$0fb(f, t.$$gb.CLICK, async (L) => {
												t.$ahb.stop(L, !0),
													s &&
														this.j.open(s, {
															fromUserGesture: !0,
															editorOptions: { selection: l },
														});
											}),
										);
								} else {
									const I = o.fullName ?? o.name,
										T = o.icon?.id ? `$(${o.icon.id}) ${I}` : I;
									b.setLabel(T, y?.options?.status?.description),
										(f.ariaLabel = (0, a.localize)(4653, null, o.name)),
										(f.tabIndex = 0);
								}
								v && f.classList.add("warning");
								const S = y?.options?.status?.description;
								if (v) {
									f.ariaLabel = `${f.ariaLabel}${S ? ` ${S}` : ""}`;
									for (const I of [
										".monaco-icon-suffix-container",
										".monaco-icon-name-container",
									]) {
										const T = b.element.querySelector(I);
										T && T.classList.add("warning");
									}
								}
							});
					}
				};
				(e.$4Tb = n), (e.$4Tb = n = Ne([j(3, E.$Li), j(4, c.$7rb)], n));
			},
		),
		define(
			de[3680],
			he([1, 0, 6, 3, 19, 42, 85]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zoc = void 0);
				let m = (d = class extends i.$1c {
					static async create(u, a, h) {
						return u.invokeFunction(async (c) => {
							const g = await c.get(E.$MO).createModelReference(h);
							return u.createInstance(d, a, h, g);
						});
					}
					constructor(u, a, h, c) {
						super(),
							(this.viewType = u),
							(this.f = a),
							(this.g = h),
							(this.h = c),
							(this.b = this.D(new t.$re())),
							(this.onDidChangeOrphaned = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onDidChangeReadonly = this.c.event),
							(this.j = this.D(new t.$re())),
							(this.onDidChangeDirty = this.j.event),
							(this.m = this.D(new t.$re())),
							(this.onDidChangeContent = this.m.event),
							this.D(h),
							(this.a = this.h.files.get(a)),
							this.a &&
								(this.D(this.a.onDidChangeOrphaned(() => this.b.fire())),
								this.D(this.a.onDidChangeReadonly(() => this.c.fire()))),
							this.D(
								this.h.files.onDidChangeDirty((n) => {
									(0, w.$gh)(this.resource, n.resource) &&
										(this.j.fire(), this.m.fire());
								}),
							);
					}
					get resource() {
						return this.f;
					}
					isReadonly() {
						return this.g.object.isReadonly();
					}
					get backupId() {}
					get canHotExit() {
						return !0;
					}
					isDirty() {
						return this.h.isDirty(this.resource);
					}
					isOrphaned() {
						return !!this.a?.hasState(C.TextFileEditorModelState.ORPHAN);
					}
					async revert(u) {
						return this.h.revert(this.resource, u);
					}
					saveCustomEditor(u) {
						return this.h.save(this.resource, u);
					}
					async saveCustomEditorAs(u, a, h) {
						return !!(await this.h.saveAs(u, a, h));
					}
				});
				(e.$Zoc = m), (e.$Zoc = m = d = Ne([j(3, C.$kZ)], m));
			},
		),
		define(
			de[1880],
			he([
				1, 0, 7, 183, 229, 33, 14, 6, 3, 77, 210, 47, 46, 206, 281, 48, 17, 42,
				766, 4, 92, 173, 11, 116, 5, 73, 93, 40, 106, 233, 796, 18, 2427,
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
			) {
				"use strict";
				var M, N, A;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nLc = e.$mLc = e.$lLc = e.$kLc = void 0),
					(t = mt(t));
				class R {
					constructor(Q, Z, se = 1, re = 1) {
						(this.name = Q),
							(this.source = Z),
							(this.line = se),
							(this.column = re);
					}
				}
				e.$kLc = R;
				class O {
					constructor(Q, Z) {
						(this.label = Q), (this.load = Z);
					}
				}
				e.$lLc = O;
				class B {
					constructor() {
						this.showHeader = (0, r.observableValue)(
							"CustomStackFrame.showHeader",
							!0,
						);
					}
				}
				e.$mLc = B;
				class U extends R {
					constructor(Q) {
						super(Q.name, Q.source, Q.line, Q.column),
							(this.editorHeight = (0, r.observableValue)(
								"WrappedCallStackFrame.height",
								this.source ? 100 : 0,
							)),
							(this.collapsed = (0, r.observableValue)(
								"WrappedCallStackFrame.collapsed",
								!1,
							)),
							(this.height = (0, r.derived)((Z) =>
								this.collapsed.read(Z) ? J : J + this.editorHeight.read(Z),
							));
					}
				}
				class z {
					constructor(Q) {
						(this.original = Q),
							(this.collapsed = (0, r.observableValue)(
								"WrappedCallStackFrame.collapsed",
								!1,
							)),
							(this.height = (0, r.derived)((Z) => {
								const se = this.original.showHeader.read(Z) ? J : 0;
								return this.collapsed.read(Z)
									? se
									: se + this.original.height.read(Z);
							}));
					}
				}
				const F = (te) => te instanceof U || te instanceof z,
					x = "multiCallStackWidget";
				let H = class extends m.$1c {
					constructor(Q, Z, se) {
						super(),
							(this.b = this.D(new d.$re())),
							(this.c = this.D(new m.$Zc())),
							Q.classList.add(x),
							this.D((0, m.$Yc)(() => Q.classList.remove(x))),
							(this.a = this.D(
								se.createInstance(
									I.$yMb,
									"TestResultStackWidget",
									Q,
									new V(),
									[
										se.createInstance(Y, Z, this.b.event),
										se.createInstance(ie),
										se.createInstance(ne),
										se.createInstance(ee, (re) => this.g(re)),
									],
									{
										multipleSelectionSupport: !1,
										mouseSupport: !1,
										keyboardSupport: !1,
										setRowLineHeight: !1,
										accessibilityProvider: se.createInstance(q),
									},
								),
							));
					}
					setFrames(Q) {
						this.c.clear(),
							(this.f = new E.$Ce()),
							this.D((0, m.$Yc)(() => this.f.dispose(!0))),
							this.a.splice(0, this.a.length, this.j(Q));
					}
					layout(Q, Z) {
						this.a.layout(Q, Z), this.b.fire();
					}
					collapseAll() {
						(0, r.transaction)((Q) => {
							for (let Z = 0; Z < this.a.length; Z++) {
								const se = this.a.element(Z);
								F(se) && se.collapsed.set(!0, Q);
							}
						});
					}
					async g(Q) {
						if (!this.f) return;
						const Z = await Q.load(this.f.token);
						if (this.f.token.isCancellationRequested) return;
						const se = this.a.indexOf(Q);
						this.a.splice(se, 1, this.j(Z));
					}
					j(Q) {
						const Z = [];
						for (const se of Q) {
							if (se instanceof O) {
								Z.push(se);
								continue;
							}
							const re = se instanceof B ? new z(se) : new U(se);
							Z.push(re),
								this.c.add(
									(0, r.autorun)((le) => {
										const oe = re.height.read(le),
											ae = this.a.indexOf(re);
										ae !== -1 && this.a.updateElementHeight(ae, oe);
									}),
								);
						}
						return Z;
					}
				};
				(e.$nLc = H), (e.$nLc = H = Ne([j(2, v.$Li)], H));
				let q = class {
					constructor(Q) {
						this.a = Q;
					}
					getAriaLabel(Q) {
						if (Q instanceof O) return Q.label;
						if (Q instanceof z) return Q.original.label;
						if (Q instanceof R)
							return Q.source && Q.line
								? (0, b.localize)(
										5282,
										null,
										Q.name,
										Q.line,
										this.a.getUriLabel(Q.source, { relative: !0 }),
									)
								: Q.name;
						(0, w.$kd)(Q);
					}
					getWidgetAriaLabel() {
						return (0, b.localize)(5283, null);
					}
				};
				q = Ne([j(0, S.$3N)], q);
				class V {
					getHeight(Q) {
						if (Q instanceof R || Q instanceof z) return Q.height.get();
						if (Q instanceof O) return J;
						(0, w.$kd)(Q);
					}
					getTemplateId(Q) {
						if (Q instanceof R) return Q.source ? Y.templateId : ie.templateId;
						if (Q instanceof O) return ee.templateId;
						if (Q instanceof z) return ne.templateId;
						(0, w.$kd)(Q);
					}
				}
				const G = {
						scrollBeyondLastLine: !1,
						scrollbar: {
							vertical: "hidden",
							horizontal: "hidden",
							handleMouseWheel: !1,
							useShadows: !1,
						},
						overviewRulerLanes: 0,
						fixedOverflowWidgets: !0,
						overviewRulerBorder: !1,
						stickyScroll: { enabled: !1 },
						minimap: { enabled: !1 },
						readOnly: !0,
						automaticLayout: !1,
					},
					K = () =>
						t.h("div.multiCallStackFrame", [
							t.h("div.header@header", [
								t.h("div.collapse-button@collapseButton"),
								t.h("div.title.show-file-icons@title"),
								t.h("div.actions@actions"),
							]),
							t.h("div.editorParent", [t.h("div.editorContainer@editor")]),
						]),
					J = 24;
				let W = class {
					constructor(Q) {
						this.a = Q;
					}
					renderTemplate(Q) {
						const Z = K();
						Q.appendChild(Z.root);
						const se = new m.$Zc();
						Q.classList.add("multiCallStackFrameContainer"),
							se.add(
								(0, m.$Yc)(() => {
									Q.classList.remove("multiCallStackFrameContainer"),
										Z.root.remove();
								}),
							);
						const re = se.add(this.a.createInstance(k.$vPb, Z.title, {})),
							le = se.add(new i.$oob(Z.collapseButton, {})),
							oe = (0, a.$9g)();
						return (
							(Z.editor.id = oe),
							(Z.editor.role = "region"),
							Z.collapseButton.setAttribute("aria-controls", oe),
							this.b({
								container: Q,
								decorations: [],
								elements: Z,
								label: re,
								collapse: le,
								elementStore: se.add(new m.$Zc()),
								templateStore: se,
							})
						);
					}
					renderElement(Q, Z, se, re) {
						const { elementStore: le } = se;
						le.clear();
						const oe = Q;
						this.c(oe, se);
					}
					c(Q, { elementStore: Z, elements: se, collapse: re }) {
						Z.add(
							(0, r.autorun)((oe) => {
								re.element.className = "";
								const ae = Q.collapsed.read(oe);
								(re.icon = ae ? C.$ak.chevronRight : C.$ak.chevronDown),
									(re.element.ariaExpanded = String(!ae)),
									se.root.classList.toggle("collapsed", ae);
							}),
						);
						const le = () => Q.collapsed.set(!Q.collapsed.get(), void 0);
						Z.add(re.onDidClick(le)), Z.add(t.$0fb(se.title, "click", le));
					}
					disposeElement(Q, Z, se, re) {
						se.elementStore.clear();
					}
					disposeTemplate(Q) {
						Q.templateStore.dispose();
					}
				};
				W = Ne([j(0, v.$Li)], W);
				const X = 2;
				let Y = class extends W {
					static {
						M = this;
					}
					static {
						this.templateId = "f";
					}
					constructor(Q, Z, se, re) {
						super(re),
							(this.f = Q),
							(this.g = Z),
							(this.j = se),
							(this.templateId = M.templateId);
					}
					b(Q) {
						const Z = [
								{
									id: _.ID,
									instantiation:
										h.EditorContributionInstantiation.BeforeFirstInteraction,
									ctor: _,
								},
							],
							se = this.f
								? this.a.createInstance(
										n.$wDb,
										Q.elements.editor,
										G,
										{ isSimpleWidget: !0, contributions: Z },
										this.f,
									)
								: this.a.createInstance(c.$rwb, Q.elements.editor, G, {
										isSimpleWidget: !0,
										contributions: Z,
									});
						Q.templateStore.add(se);
						const re = Q.templateStore.add(
							this.a.createInstance(
								l.$Tyb,
								Q.elements.actions,
								y.$XX.DebugCallStackToolbar,
								{
									menuOptions: { shouldForwardArgs: !0 },
									actionViewItemProvider: (le, oe) =>
										(0, s.$Pyb)(this.a, le, oe),
								},
							),
						);
						return { ...Q, editor: se, toolbar: re };
					}
					renderElement(Q, Z, se, re) {
						super.renderElement(Q, Z, se, re);
						const { elementStore: le, editor: oe } = se,
							ae = Q,
							pe = ae.source;
						se.label.element.setFile(pe);
						const $e = new E.$Ce();
						le.add((0, m.$Yc)(() => $e.dispose(!0))),
							this.j.createModelReference(pe).then((ye) => {
								if ($e.token.isCancellationRequested) return ye.dispose();
								le.add(ye),
									oe.setModel(ye.object.textEditorModel),
									this.m(ae, se),
									this.l(ae, se);
							});
					}
					l(Q, { elementStore: Z, container: se, editor: re }) {
						const le = () => {
							const oe = re.getContentHeight();
							re.layout({ width: se.clientWidth, height: oe });
							const ae = re.getContentHeight();
							ae !== oe && re.layout({ width: se.clientWidth, height: ae }),
								Q.editorHeight.set(ae, void 0);
						};
						Z.add(re.onDidChangeModelDecorations(le)),
							Z.add(re.onDidChangeModelContent(le)),
							Z.add(re.onDidChangeModelOptions(le)),
							Z.add(this.g(le)),
							le();
					}
					m(Q, Z) {
						const se = p.$iL.fromPositions({
							column: Q.column ?? 1,
							lineNumber: Q.line ?? 1,
						});
						(Z.toolbar.context = { uri: Q.source, range: se }),
							Z.editor.setHiddenAreas([
								p.$iL.fromPositions(
									{ column: 1, lineNumber: 1 },
									{ column: 1, lineNumber: Math.max(1, Q.line - X - 1) },
								),
								p.$iL.fromPositions(
									{ column: 1, lineNumber: Q.line + X + 1 },
									{ column: 1, lineNumber: u.Constants.MAX_SAFE_SMALL_INTEGER },
								),
							]),
							Z.editor.changeDecorations((re) => {
								for (const pe of Z.decorations) re.removeDecoration(pe);
								Z.decorations.length = 0;
								const le = se.setStartPosition(se.startLineNumber, 1),
									oe = !!Z.editor.getModel()?.getValueInRange(le).trim(),
									ae = se.setEndPosition(
										se.startLineNumber,
										u.Constants.MAX_SAFE_SMALL_INTEGER,
									);
								Z.decorations.push(re.addDecoration(ae, (0, L.$gGc)(!oe))),
									Z.decorations.push(re.addDecoration(ae, L.$eGc));
							}),
							Q.editorHeight.set(Z.editor.getContentHeight(), void 0);
					}
				};
				Y = M = Ne([j(2, o.$MO), j(3, v.$Li)], Y);
				let ie = class {
					static {
						N = this;
					}
					static {
						this.templateId = "m";
					}
					constructor(Q) {
						(this.a = Q), (this.templateId = N.templateId);
					}
					renderTemplate(Q) {
						const Z = K();
						Z.root.classList.add("missing"), Q.appendChild(Z.root);
						const se = this.a.createInstance(k.$vPb, Z.title, {});
						return { elements: Z, label: se };
					}
					renderElement(Q, Z, se) {
						const re = Q;
						se.label.element.setResource(
							{
								name: re.name,
								description: (0, b.localize)(5284, null, re.line, re.column),
								range: {
									startLineNumber: re.line,
									startColumn: re.column,
									endColumn: re.column,
									endLineNumber: re.line,
								},
							},
							{ icon: C.$ak.fileBinary },
						);
					}
					disposeTemplate(Q) {
						Q.label.dispose(), Q.elements.root.remove();
					}
				};
				ie = N = Ne([j(0, v.$Li)], ie);
				class ne extends W {
					constructor() {
						super(...arguments), (this.templateId = ne.templateId);
					}
					static {
						this.templateId = "c";
					}
					b(Q) {
						return Q;
					}
					renderElement(Q, Z, se, re) {
						super.renderElement(Q, Z, se, re);
						const le = Q,
							{ elementStore: oe, container: ae, label: pe } = se;
						pe.element.setResource(
							{ name: le.original.label },
							{ icon: le.original.icon },
						),
							oe.add(
								(0, r.autorun)((ye) => {
									se.elements.header.style.display =
										le.original.showHeader.read(ye) ? "" : "none";
								}),
							),
							oe.add(
								(0, r.autorunWithStore)((ye, ue) => {
									le.collapsed.read(ye) || ue.add(le.original.render(ae));
								}),
							);
						const $e = le.original.renderActions?.(se.elements.actions);
						$e && oe.add($e);
					}
				}
				let ee = class {
					static {
						A = this;
					}
					static {
						this.templateId = "s";
					}
					constructor(Q, Z) {
						(this.a = Q), (this.b = Z), (this.templateId = A.templateId);
					}
					renderTemplate(Q) {
						const Z = new m.$Zc(),
							se = new i.$oob(Q, { title: "", ...P.$lyb }),
							re = { button: se, store: Z };
						return (
							Z.add(se),
							Z.add(
								se.onDidClick(() => {
									!re.current ||
										!se.enabled ||
										((se.enabled = !1),
										this.a(re.current).catch((le) => {
											this.b.error((0, b.localize)(5285, null, le.message));
										}));
								}),
							),
							re
						);
					}
					renderElement(Q, Z, se, re) {
						const le = Q;
						(se.button.enabled = !0),
							(se.button.label = le.label),
							(se.current = le);
					}
					disposeTemplate(Q) {
						Q.store.dispose();
					}
				};
				ee = A = Ne([j(1, T.$4N)], ee);
				let _ = class extends m.$1c {
					static {
						this.ID = "clickToLocation";
					}
					constructor(Q, Z) {
						super(),
							(this.c = Q),
							(this.a = Q.createDecorationsCollection()),
							this.D((0, m.$Yc)(() => this.a.clear()));
						const se = this.D(new f.$6Mb(Q));
						this.D(
							se.onMouseMoveOrRelevantKeyDown(([re, le]) => {
								this.f(re);
							}),
						),
							this.D(
								se.onExecute((re) => {
									const le = this.c.getModel();
									!this.b ||
										!le ||
										Z.openEditor(
											{
												resource: le.uri,
												options: {
													selection: p.$iL.fromPositions(
														new g.$hL(this.b.line, this.b.word.startColumn),
													),
													selectionRevealType:
														$.TextEditorSelectionRevealType
															.CenterIfOutsideViewport,
												},
											},
											re.hasSideBySideModifier ? D.$KY : void 0,
										);
								}),
							);
					}
					f(Q) {
						if (!Q.hasTriggerModifier) return this.g();
						const Z = Q.target.position,
							se = Z && this.c.getModel()?.getWordAtPosition(Z);
						if (!se) return this.g();
						const re = this.b?.word;
						(re &&
							re.startColumn === se.startColumn &&
							re.endColumn === se.endColumn &&
							re.word === se.word) ||
							((this.b = { word: se, line: Z.lineNumber }),
							this.a.set([
								{
									range: new p.$iL(
										Z.lineNumber,
										se.startColumn,
										Z.lineNumber,
										se.endColumn,
									),
									options: {
										description: "call-stack-go-to-file-link",
										inlineClassName: "call-stack-go-to-file-link",
									},
								},
							]));
					}
					g() {
						this.a.clear(), (this.b = void 0);
					}
				};
				(_ = Ne([j(1, D.$IY)], _)),
					(0, y.$4X)(
						class extends y.$3X {
							constructor() {
								super({
									id: "callStackWidget.goToFile",
									title: (0, b.localize2)(5286, "Open File"),
									icon: C.$ak.goToFile,
									menu: {
										id: y.$XX.DebugCallStackToolbar,
										order: 22,
										group: "navigation",
									},
								});
							}
							async run(te, { uri: Q, range: Z }) {
								await te
									.get(D.$IY)
									.openEditor({
										resource: Q,
										options: {
											selection: Z,
											selectionRevealType:
												$.TextEditorSelectionRevealType.CenterIfOutsideViewport,
										},
									});
							}
						},
					);
			},
		),
		define(
			de[3681],
			he([
				1, 0, 24, 15, 33, 6, 187, 3, 82, 19, 26, 9, 4, 10, 8, 22, 5, 250, 34,
				63, 30, 21, 68, 25, 352, 112, 1812, 396, 261, 18, 53, 245, 131, 85,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UQc = void 0),
					(C = mt(C)),
					(m = mt(m)),
					(r = mt(r)),
					(h = mt(h));
				const A = s.$Io.as(o.$Jo.JSONContribution);
				A.registerSchema(P.$EZ, I.$SQc);
				const R = "debug.selectedconfigname",
					O = "debug.selectedroot",
					B = "debug.selectedtype",
					U = "debug.recentdynamicconfigurations";
				let z = class {
					constructor(G, K, J, W, X, Y, ie, ne, ee, _, te) {
						(this.r = G),
							(this.s = K),
							(this.u = J),
							(this.v = W),
							(this.w = X),
							(this.x = Y),
							(this.y = ie),
							(this.z = ne),
							(this.A = ee),
							(this.B = te),
							(this.g = () => Promise.resolve(void 0)),
							(this.j = !1),
							(this.m = new E.$re()),
							(this.q = new E.$re()),
							(this.onDidChangeConfigurationProviders = this.q.event),
							(this.n = []),
							(this.k = [this.q]),
							this.D(),
							this.E(),
							this.C();
						const Q = this.x.get(O, l.StorageScope.WORKSPACE),
							Z = this.x.get(B, l.StorageScope.WORKSPACE),
							se = this.a.find((oe) => oe.uri.toString() === Q),
							re = this.x.get(R, l.StorageScope.WORKSPACE);
						this.o = S.$14.bindTo(_);
						const le = Z ? { type: Z } : void 0;
						se && se.getConfigurationNames().length
							? this.selectConfiguration(se, re, void 0, le)
							: this.a.length > 0 &&
								this.selectConfiguration(void 0, re, void 0, le);
					}
					registerDebugConfigurationProvider(G) {
						return (
							this.n.push(G),
							this.q.fire(),
							{
								dispose: () => {
									this.unregisterDebugConfigurationProvider(G), this.q.fire();
								},
							}
						);
					}
					unregisterDebugConfigurationProvider(G) {
						const K = this.n.indexOf(G);
						K >= 0 && this.n.splice(K, 1);
					}
					hasDebugConfigurationProvider(G, K) {
						return (
							K === void 0 &&
								(K = S.DebugConfigurationProviderTriggerKind.Initial),
							!!this.n.find(
								(W) =>
									W.provideDebugConfigurations &&
									W.type === G &&
									W.triggerKind === K,
							)
						);
					}
					async resolveConfigurationByProviders(G, K, J, W) {
						const X = async (ne, ee) => {
							ne !== "*" &&
								(await this.r.activateDebuggers("onDebugResolve", ne));
							for (const _ of this.n)
								_.type === ne &&
									_.resolveDebugConfiguration &&
									ee &&
									(ee = await _.resolveDebugConfiguration(G, ee, W));
							return ee;
						};
						let Y = J.type ?? K,
							ie = J;
						for (let ne = new Set(); ie && !ne.has(Y); )
							ne.add(Y),
								(ie = await X(Y, ie)),
								(ie = await X("*", ie)),
								(Y = ie?.type ?? K);
						return ie;
					}
					async resolveDebugConfigurationWithSubstitutedVariables(G, K, J, W) {
						const X = this.n
							.filter(
								(ie) =>
									ie.type === K &&
									ie.resolveDebugConfigurationWithSubstitutedVariables,
							)
							.concat(
								this.n.filter(
									(ie) =>
										ie.type === "*" &&
										ie.resolveDebugConfigurationWithSubstitutedVariables,
								),
							);
						let Y = J;
						return (
							await (0, i.$Ph)(
								X.map((ie) => async () => {
									Y &&
										(Y =
											await ie.resolveDebugConfigurationWithSubstitutedVariables(
												G,
												Y,
												W,
											));
								}),
							),
							Y
						);
					}
					async provideDebugConfigurations(G, K, J) {
						return (
							await this.r.activateDebuggers("onDebugInitialConfigurations"),
							(
								await Promise.all(
									this.n
										.filter(
											(X) =>
												X.type === K &&
												X.triggerKind ===
													S.DebugConfigurationProviderTriggerKind.Initial &&
												X.provideDebugConfigurations,
										)
										.map((X) => X.provideDebugConfigurations(G, J)),
								)
							).reduce((X, Y) => X.concat(Y), [])
						);
					}
					async getDynamicProviders() {
						await this.y.whenInstalledExtensionsRegistered();
						const G = "onDebugDynamicConfigurations",
							K = this.y.extensions.reduce((J, W) => {
								if (!W.activationEvents) return J;
								const X = [];
								let Y = !1;
								for (const ie of W.activationEvents)
									ie === G
										? (Y = !0)
										: ie.startsWith(`${G}:`) && X.push(ie.slice(G.length + 1));
								if (X.length) X.forEach((ie) => J.add(ie));
								else if (Y) {
									const ie = W.contributes?.debuggers?.[0].type;
									ie && J.add(ie);
								}
								return J;
							}, new Set());
						for (const J of this.n)
							J.triggerKind ===
								S.DebugConfigurationProviderTriggerKind.Dynamic &&
								K.add(J.type);
						return [...K].map((J) => ({
							label: this.r.getDebuggerLabel(J),
							getProvider: async () => (
								await this.r.activateDebuggers(G, J),
								this.n.find(
									(W) =>
										W.type === J &&
										W.triggerKind ===
											S.DebugConfigurationProviderTriggerKind.Dynamic &&
										W.provideDebugConfigurations,
								)
							),
							type: J,
							pick: async () => {
								await this.r.activateDebuggers(G, J);
								const W = new w.$Ce(),
									X = [],
									Y = this.n.find(
										(Z) =>
											Z.type === J &&
											Z.triggerKind ===
												S.DebugConfigurationProviderTriggerKind.Dynamic &&
											Z.provideDebugConfigurations,
									);
								this.getLaunches().forEach((Z) => {
									Z.workspace &&
										Y &&
										X.push(
											Y.provideDebugConfigurations(
												Z.workspace.uri,
												W.token,
											).then((se) =>
												se.map((re) => ({
													label: re.name,
													description: Z.name,
													config: re,
													buttons: [
														{
															iconClass: u.ThemeIcon.asClassName(v.$vKb),
															tooltip: h.localize(5465, null),
														},
													],
													launch: Z,
												})),
											),
										);
								});
								const ie = new d.$Zc(),
									ne = ie.add(this.v.createQuickPick());
								(ne.busy = !0), (ne.placeholder = h.localize(5466, null));
								const ee = new Promise((Z) => {
									ie.add(ne.onDidAccept(() => Z(ne.activeItems[0]))),
										ie.add(
											ne.onDidTriggerItemButton(async (se) => {
												Z(void 0);
												const { launch: re, config: le } = se.item;
												await re.openConfigFile({
													preserveFocus: !1,
													type: le.type,
													suppressInitialConfigs: !0,
												}),
													await re.writeConfiguration(le),
													await this.selectConfiguration(re, le.name),
													this.removeRecentDynamicConfigurations(
														le.name,
														le.type,
													);
											}),
										),
										ie.add(ne.onDidHide(() => Z(void 0)));
								});
								let _;
								try {
									_ = await Promise.all(X);
								} catch (Z) {
									this.B.error(Z), ie.dispose();
									return;
								}
								const te = _.flat();
								(ne.items = te), (ne.busy = !1), ne.show();
								const Q = await ee;
								if ((ie.dispose(), !Q)) {
									W.cancel();
									return;
								}
								return Q;
							},
						}));
					}
					getAllConfigurations() {
						const G = [];
						for (const K of this.a)
							for (const J of K.getConfigurationNames()) {
								const W = K.getConfiguration(J) || K.getCompound(J);
								W &&
									G.push({ launch: K, name: J, presentation: W.presentation });
							}
						return (0, T.$v3)(G);
					}
					removeRecentDynamicConfigurations(G, K) {
						const J = this.getRecentDynamicConfigurations().filter(
							(W) => W.name !== G || W.type !== K,
						);
						this.x.store(
							U,
							JSON.stringify(J),
							l.StorageScope.WORKSPACE,
							l.StorageTarget.MACHINE,
						),
							this.selectedConfiguration.name === G && this.h === K && this.j
								? this.selectConfiguration(void 0, void 0)
								: this.m.fire();
					}
					getRecentDynamicConfigurations() {
						return JSON.parse(this.x.get(U, l.StorageScope.WORKSPACE, "[]"));
					}
					C() {
						this.k.push(
							E.Event.any(
								this.s.onDidChangeWorkspaceFolders,
								this.s.onDidChangeWorkbenchState,
							)(() => {
								this.D(), this.selectConfiguration(void 0), this.E();
							}),
						),
							this.k.push(
								this.u.onDidChangeConfiguration(async (G) => {
									G.affectsConfiguration("launch") &&
										(await this.selectConfiguration(void 0), this.E());
								}),
							),
							this.k.push(
								this.r.onDidDebuggersExtPointRead(() => {
									this.E();
								}),
							);
					}
					D() {
						(this.a = this.s
							.getWorkspace()
							.folders.map((G) => this.w.createInstance(x, this, this.r, G))),
							this.s.getWorkbenchState() === $.WorkbenchState.WORKSPACE &&
								this.a.push(this.w.createInstance(H, this, this.r)),
							this.a.push(this.w.createInstance(q, this, this.r)),
							this.d &&
								this.a.indexOf(this.d) === -1 &&
								this.selectConfiguration(void 0);
					}
					E() {
						const G =
								I.$SQc.properties.compounds.items.properties.configurations,
							K = this.a
								.map((W) => W.getConfigurationNames(!0))
								.reduce((W, X) => W.concat(X), []);
						(G.items.oneOf[0].enum = K),
							(G.items.oneOf[1].properties.name.enum = K);
						const J = this.s.getWorkspace().folders.map((W) => W.name);
						(G.items.oneOf[1].properties.folder.enum = J),
							A.registerSchema(P.$EZ, I.$SQc);
					}
					getLaunches() {
						return this.a;
					}
					getLaunch(G) {
						if (a.URI.isUri(G))
							return this.a.find(
								(K) => K.workspace && this.A.extUri.isEqual(K.workspace.uri, G),
							);
					}
					get selectedConfiguration() {
						return {
							launch: this.d,
							name: this.b,
							getConfig: this.g,
							type: this.h,
						};
					}
					get onDidSelectConfiguration() {
						return this.m.event;
					}
					getWorkspaceLaunch() {
						if (this.s.getWorkbenchState() === $.WorkbenchState.WORKSPACE)
							return this.a[this.a.length - 1];
					}
					async selectConfiguration(G, K, J, W) {
						if (typeof G > "u") {
							const _ = this.z.getLastActiveWorkspaceRoot();
							(G = this.getLaunch(_)),
								(!G || G.getConfigurationNames().length === 0) &&
									(G =
										this.a.find(
											(te) => !!(te && te.getConfigurationNames().length),
										) ||
										G ||
										this.a[0]);
						}
						const X = this.d,
							Y = this.b,
							ie = this.j;
						(this.d = G),
							this.d
								? this.x.store(
										O,
										this.d.uri.toString(),
										l.StorageScope.WORKSPACE,
										l.StorageTarget.MACHINE,
									)
								: this.x.remove(O, l.StorageScope.WORKSPACE);
						const ne = G ? G.getConfigurationNames() : [];
						this.g = () => {
							const _ = this.b ? G?.getConfiguration(this.b) : void 0;
							return Promise.resolve(_ || J);
						};
						let ee = J?.type;
						if (K && ne.indexOf(K) >= 0) this.F(K);
						else if (W && W.type) {
							if (((ee = W.type), !J)) {
								const te = (await this.getDynamicProviders()).filter(
									(Q) => Q.type === ee,
								);
								this.g = async () => {
									const Q = await Promise.all(te.map((se) => se.getProvider())),
										Z = Q.length > 0 ? Q[0] : void 0;
									if (Z && G && G.workspace) {
										const se = new w.$Ce(),
											le = (
												await Z.provideDebugConfigurations(
													G.workspace.uri,
													se.token,
												)
											).find((oe) => oe.name === K);
										if (le) return le;
									}
								};
							}
							this.F(K);
							let _ = this.getRecentDynamicConfigurations();
							K &&
								W.type &&
								(_.unshift({ name: K, type: W.type }),
								(_ = (0, t.$Qb)(_, (te) => `${te.name} : ${te.type}`)),
								this.x.store(
									U,
									JSON.stringify(_),
									l.StorageScope.WORKSPACE,
									l.StorageTarget.MACHINE,
								));
						} else if (!this.b || ne.indexOf(this.b) === -1) {
							const _ = ne.length ? ne[0] : void 0;
							this.F(_);
						}
						!J &&
							G &&
							this.b &&
							((J = G.getConfiguration(this.b)), (ee = J?.type)),
							(this.h = W?.type || J?.type),
							(this.j = !!W),
							this.x.store(
								B,
								W ? this.h : void 0,
								l.StorageScope.WORKSPACE,
								l.StorageTarget.MACHINE,
							),
							ee ? this.o.set(ee) : this.o.reset(),
							(this.d !== X || this.b !== Y || ie !== this.j) && this.m.fire();
					}
					F(G) {
						(this.b = G),
							this.b
								? this.x.store(
										R,
										this.b,
										l.StorageScope.WORKSPACE,
										l.StorageTarget.MACHINE,
									)
								: this.x.remove(R, l.StorageScope.WORKSPACE);
					}
					dispose() {
						this.k = (0, d.$Vc)(this.k);
					}
				};
				(e.$UQc = z),
					(e.$UQc = z =
						Ne(
							[
								j(1, $.$Vi),
								j(2, c.$gj),
								j(3, b.$DJ),
								j(4, p.$Li),
								j(5, l.$lq),
								j(6, L.$q2),
								j(7, D.$Feb),
								j(8, y.$Vl),
								j(9, n.$6j),
								j(10, f.$ik),
							],
							z,
						));
				class F {
					constructor(G, K) {
						(this.b = G), (this.d = K);
					}
					getCompound(G) {
						const K = this.a();
						if (!(!K || !K.compounds))
							return K.compounds.find((J) => J.name === G);
					}
					getConfigurationNames(G = !1) {
						const K = this.a();
						if (
							!K ||
							(!Array.isArray(K.configurations) && !Array.isArray(K.compounds))
						)
							return [];
						{
							const J = [];
							return (
								K.configurations &&
									J.push(
										...K.configurations.filter(
											(W) => W && typeof W.name == "string",
										),
									),
								G
									? J.map((W) => W.name)
									: (K.compounds &&
											J.push(
												...K.compounds.filter(
													(W) =>
														typeof W.name == "string" &&
														W.configurations &&
														W.configurations.length,
												),
											),
										(0, T.$v3)(J).map((W) => W.name))
							);
						}
					}
					getConfiguration(G) {
						const K = m.$vo(this.a());
						if (!K || !K.configurations) return;
						const J = K.configurations.find((W) => W && W.name === G);
						return (
							J &&
								(this instanceof q
									? (J.__configurationTarget = c.ConfigurationTarget.USER)
									: this instanceof H
										? (J.__configurationTarget =
												c.ConfigurationTarget.WORKSPACE)
										: (J.__configurationTarget =
												c.ConfigurationTarget.WORKSPACE_FOLDER)),
							J
						);
					}
					async getInitialConfigurationContent(G, K, J, W) {
						let X = "";
						const Y = K
							? this.d.getEnabledDebugger(K)
							: await this.d.guessDebugger(!0);
						if (Y) {
							const ie = J
								? await this.b.provideDebugConfigurations(
										G,
										Y.type,
										W || w.CancellationToken.None,
									)
								: [];
							X = await Y.getInitialConfigurationContent(ie);
						}
						return X;
					}
					get hidden() {
						return !1;
					}
				}
				let x = class extends F {
					constructor(G, K, J, W, X, Y, ie) {
						super(G, K),
							(this.workspace = J),
							(this.g = W),
							(this.h = X),
							(this.j = Y),
							(this.k = ie);
					}
					get uri() {
						return r.$nh(this.workspace.uri, "/.vscode/launch.json");
					}
					get name() {
						return this.workspace.name;
					}
					a() {
						return this.k.inspect("launch", { resource: this.workspace.uri })
							.workspaceFolderValue;
					}
					async openConfigFile(
						{ preserveFocus: G, type: K, suppressInitialConfigs: J },
						W,
					) {
						const X = this.uri;
						let Y = !1,
							ie = "";
						try {
							ie = (await this.g.readFile(X)).value.toString();
						} catch {
							if (
								((ie = await this.getInitialConfigurationContent(
									this.workspace.uri,
									K,
									!J,
									W,
								)),
								!ie)
							)
								return { editor: null, created: !1 };
							Y = !0;
							try {
								await this.h.write(X, ie);
							} catch (Q) {
								throw new Error(h.localize(5467, null, Q.message));
							}
						}
						const ne = ie.indexOf(`"${this.b.selectedConfiguration.name}"`);
						let ee = 1;
						for (let Q = 0; Q < ne; Q++)
							ie.charAt(Q) ===
								`
` && ee++;
						const _ = ee > 1 ? { startLineNumber: ee, startColumn: 4 } : void 0;
						return {
							editor:
								(await this.j.openEditor(
									{
										resource: X,
										options: {
											selection: _,
											preserveFocus: G,
											pinned: Y,
											revealIfVisible: !0,
										},
									},
									k.$JY,
								)) ?? null,
							created: Y,
						};
					}
					async writeConfiguration(G) {
						const K = m.$vo(this.a());
						K.configurations || (K.configurations = []),
							K.configurations.push(G),
							await this.k.updateValue(
								"launch",
								K,
								{ resource: this.workspace.uri },
								c.ConfigurationTarget.WORKSPACE_FOLDER,
							);
					}
				};
				x = Ne([j(3, g.$ll), j(4, N.$kZ), j(5, k.$IY), j(6, c.$gj)], x);
				let H = class extends F {
					constructor(G, K, J, W, X) {
						super(G, K), (this.g = J), (this.h = W), (this.j = X);
					}
					get workspace() {}
					get uri() {
						return this.j.getWorkspace().configuration;
					}
					get name() {
						return h.localize(5468, null);
					}
					a() {
						return this.h.inspect("launch").workspaceValue;
					}
					async openConfigFile(
						{ preserveFocus: G, type: K, useInitialConfigs: J },
						W,
					) {
						if (!!!this.a()) {
							const ie = await this.getInitialConfigurationContent(
								void 0,
								K,
								J,
								W,
							);
							if (ie)
								await this.h.updateValue(
									"launch",
									C.$do(ie),
									c.ConfigurationTarget.WORKSPACE,
								);
							else return { editor: null, created: !1 };
						}
						return {
							editor:
								(await this.g.openEditor(
									{
										resource: this.j.getWorkspace().configuration,
										options: { preserveFocus: G },
									},
									k.$JY,
								)) ?? null,
							created: !1,
						};
					}
				};
				H = Ne([j(2, k.$IY), j(3, c.$gj), j(4, $.$Vi)], H);
				let q = class extends F {
					constructor(G, K, J, W) {
						super(G, K), (this.g = J), (this.h = W);
					}
					get workspace() {}
					get uri() {
						return this.h.userSettingsResource;
					}
					get name() {
						return h.localize(5469, null);
					}
					get hidden() {
						return !0;
					}
					a() {
						return this.g.inspect("launch").userValue;
					}
					async openConfigFile({
						preserveFocus: G,
						type: K,
						useInitialContent: J,
					}) {
						return {
							editor:
								(await this.h.openUserSettings({
									jsonEditor: !0,
									preserveFocus: G,
									revealSetting: { key: "launch" },
								})) ?? null,
							created: !1,
						};
					}
				};
				q = Ne([j(2, c.$gj), j(3, M.$7Z)], q);
			},
		),
		define(
			de[300],
			he([
				1, 0, 24, 214, 15, 76, 33, 6, 136, 3, 82, 77, 19, 28, 9, 47, 17, 4, 34,
				68, 112, 826, 797, 85,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Z3 =
						e.$Y3 =
						e.$X3 =
						e.$W3 =
						e.$V3 =
						e.$U3 =
						e.$T3 =
						e.$S3 =
						e.$R3 =
						e.$Q3 =
						e.$P3 =
						e.$O3 =
						e.$N3 =
						e.$M3 =
						e.$L3 =
						e.$K3 =
						e.$J3 =
						e.$I3 =
						e.$H3 =
							void 0),
					(h = mt(h)),
					(o = mt(o));
				const v = !1;
				class S {
					static {
						this.allValues = new Map();
					}
					static {
						this.allValuesWithHistory = new Map();
					}
					static {
						this.watchExpressions = new Map();
					}
					static {
						this.a = 100;
					}
					constructor(
						W,
						X,
						Y,
						ie,
						ne = 0,
						ee = 0,
						_ = void 0,
						te = 0,
						Q = void 0,
						Z = void 0,
						se = void 0,
					) {
						(this.g = W),
							(this.h = X),
							(this.j = Y),
							(this.k = ie),
							(this.namedVariables = ne),
							(this.indexedVariables = ee),
							(this.memoryReference = _),
							(this.l = te),
							(this.presentationHint = Q),
							(this.valueLocationReference = Z),
							(this.m = se),
							(this.valueChanged = !1),
							(this.b = "");
					}
					get reference() {
						return this.j;
					}
					set reference(W) {
						(this.j = W), (this.f = void 0);
					}
					async evaluateLazy() {
						if (typeof this.reference > "u") return;
						const W = await this.g.variables(
							this.reference,
							this.h,
							void 0,
							void 0,
							void 0,
						);
						if (
							!W ||
							!W.body ||
							!W.body.variables ||
							W.body.variables.length !== 1
						)
							return;
						const X = W.body.variables[0];
						(this.reference = X.variablesReference),
							(this.b = X.value),
							(this.namedVariables = X.namedVariables),
							(this.indexedVariables = X.indexedVariables),
							(this.memoryReference = X.memoryReference),
							(this.presentationHint = X.presentationHint),
							(this.valueLocationReference = X.valueLocationReference),
							this.n(X);
					}
					n(W) {}
					getChildren() {
						return this.f || (this.f = this.o()), this.f;
					}
					async o() {
						if (!this.hasChildren) return [];
						if (!this.t) return this.q(void 0, void 0, void 0);
						const W = this.namedVariables
							? await this.q(void 0, void 0, "named")
							: [];
						let X = S.a;
						for (; this.indexedVariables && this.indexedVariables > X * S.a; )
							X *= S.a;
						if (this.indexedVariables && this.indexedVariables > X) {
							const ie = Math.ceil(this.indexedVariables / X);
							for (let ne = 0; ne < ie; ne++) {
								const ee = (this.l || 0) + ne * X,
									_ = Math.min(X, this.indexedVariables - ne * X);
								W.push(
									new k(
										this.g,
										this.h,
										this,
										this.reference,
										`[${ee}..${ee + _ - 1}]`,
										"",
										"",
										void 0,
										_,
										void 0,
										{ kind: "virtual" },
										void 0,
										void 0,
										!0,
										ee,
									),
								);
							}
							return W;
						}
						const Y = await this.q(this.l, this.indexedVariables, "indexed");
						return W.concat(Y);
					}
					getId() {
						return this.k;
					}
					getSession() {
						return this.g;
					}
					get value() {
						return this.b;
					}
					get hasChildren() {
						return (
							!!this.reference &&
							this.reference > 0 &&
							!this.presentationHint?.lazy
						);
					}
					async q(W, X, Y) {
						try {
							const ie = await this.g.variables(
								this.reference || 0,
								this.h,
								Y,
								W,
								X,
							);
							if (!ie || !ie.body || !ie.body.variables) return [];
							const ne = new Map(),
								ee = ie.body.variables
									.filter((_) => !!_)
									.map((_) => {
										if (
											(0, c.$lg)(_.value) &&
											(0, c.$lg)(_.name) &&
											typeof _.variablesReference == "number"
										) {
											const te = ne.get(_.name) || 0,
												Q = te > 0 ? te.toString() : "";
											return (
												ne.set(_.name, te + 1),
												new k(
													this.g,
													this.h,
													this,
													_.variablesReference,
													_.name,
													_.evaluateName,
													_.value,
													_.namedVariables,
													_.indexedVariables,
													_.memoryReference,
													_.presentationHint,
													_.type,
													_.__vscodeVariableMenuContext,
													!0,
													0,
													Q,
													_.declarationLocationReference,
													_.valueLocationReference,
												)
											);
										}
										return new k(
											this.g,
											this.h,
											this,
											0,
											"",
											void 0,
											o.localize(5850, null),
											0,
											0,
											void 0,
											{ kind: "virtual" },
											void 0,
											void 0,
											!1,
										);
									});
							return (
								this.g.autoExpandLazyVariables &&
									(await Promise.all(
										ee.map((_) => _.presentationHint?.lazy && _.evaluateLazy()),
									)),
								ee
							);
						} catch (ie) {
							return [
								new k(
									this.g,
									this.h,
									this,
									0,
									"",
									void 0,
									ie.message,
									0,
									0,
									void 0,
									{ kind: "virtual" },
									void 0,
									void 0,
									!1,
								),
							];
						}
					}
					get t() {
						return !!this.indexedVariables;
					}
					set value(W) {
						if (
							((this.b = W),
							(this.valueChanged =
								!!S.allValues.get(this.getId()) &&
								S.allValues.get(this.getId()) !== P.DEFAULT_VALUE &&
								S.allValues.get(this.getId()) !== W),
							v &&
								(this.valueChanged ||
									!S.allValuesWithHistory.has(this.getId())) &&
								S.watchExpressions.has(this.getId()) &&
								W !== "not available")
						) {
							let X;
							if (
								(this.m !== void 0 &&
									(X = {
										uri: this.m.source.uri,
										line: this.m.range.startLineNumber,
										column: this.m.range.startColumn,
									}),
								S.allValuesWithHistory.has(this.getId()))
							) {
								const Y = S.allValuesWithHistory.get(this.getId());
								Y.push({ value: W, source: X }), Y.length > 200 && Y.shift();
							} else
								S.allValuesWithHistory.set(this.getId(), [
									{ value: W, source: X },
								]);
							for (const [Y, ie] of S.allValuesWithHistory)
								S.watchExpressions.has(Y) || S.allValuesWithHistory.delete(Y);
						}
						S.allValues.set(this.getId(), W);
					}
					toString() {
						return this.value;
					}
					async evaluateExpression(W, X, Y, ie, ne = !1, ee) {
						if (!X || (!Y && ie !== "repl"))
							return (
								(this.value =
									ie === "repl" ? o.localize(5851, null) : P.DEFAULT_VALUE),
								(this.reference = 0),
								!1
							);
						(this.g = X), (this.m = Y);
						try {
							const _ = await X.evaluate(W, Y ? Y.frameId : void 0, ie, ee);
							return _ && _.body
								? ((this.value = _.body.result || ""),
									(this.reference = _.body.variablesReference),
									(this.namedVariables = _.body.namedVariables),
									(this.indexedVariables = _.body.indexedVariables),
									(this.memoryReference = _.body.memoryReference),
									(this.type = _.body.type || this.type),
									(this.presentationHint = _.body.presentationHint),
									(this.valueLocationReference = _.body.valueLocationReference),
									!ne &&
										_.body.presentationHint?.lazy &&
										(await this.evaluateLazy()),
									!0)
								: !1;
						} catch (_) {
							return (this.value = _.message || ""), (this.reference = 0), !1;
						} finally {
							this.m = void 0;
						}
					}
				}
				e.$H3 = S;
				function I(J, W) {
					W &&
						W.body &&
						((J.value = W.body.value || ""),
						(J.type = W.body.type || J.type),
						(J.reference = W.body.variablesReference),
						(J.namedVariables = W.body.namedVariables),
						(J.indexedVariables = W.body.indexedVariables));
				}
				class T {
					evaluateLazy() {
						return Promise.resolve();
					}
					getChildren() {
						return this.b.getVisualizedChildren(this.treeId, this.treeItem.id);
					}
					getId() {
						return this.a;
					}
					get name() {
						return this.treeItem.label;
					}
					get value() {
						return this.treeItem.description || "";
					}
					get hasChildren() {
						return (
							this.treeItem.collapsibleState !==
							s.DebugTreeItemCollapsibleState.None
						);
					}
					constructor(W, X, Y, ie) {
						(this.b = W),
							(this.treeId = X),
							(this.treeItem = Y),
							(this.original = ie),
							(this.a = (0, g.$9g)());
					}
					async edit(W) {
						try {
							return (
								await this.b.editTreeItem(this.treeId, this.treeItem, W), !0
							);
						} catch (X) {
							return (this.errorMessage = X.message), !1;
						}
					}
				}
				e.$I3 = T;
				class P extends S {
					static {
						this.DEFAULT_VALUE = o.localize(5852, null);
					}
					constructor(W, X = (0, g.$9g)()) {
						super(void 0, void 0, 0, X),
							(this.name = W),
							(this.u = new d.$re()),
							(this.onDidChangeValue = this.u.event),
							(this.available = !1),
							W && (this.value = P.DEFAULT_VALUE);
					}
					async evaluate(W, X, Y, ie, ne) {
						const ee = this.value === P.DEFAULT_VALUE;
						(this.available = await this.evaluateExpression(
							this.name,
							W,
							X,
							Y,
							ie,
							ne,
						)),
							(ee || this.valueChanged) && this.u.fire(this);
					}
					toString() {
						return `${this.name}
${this.value}`;
					}
					async setExpression(W, X) {
						if (!this.g) return;
						const Y = await this.g.setExpression(X.frameId, this.name, W);
						I(this, Y);
					}
				}
				e.$J3 = P;
				class k extends S {
					constructor(
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re = void 0,
						le = void 0,
						oe = !0,
						ae = 0,
						pe = "",
						$e = void 0,
						ye = void 0,
					) {
						super(
							W,
							X,
							ie,
							`variable:${Y.getId()}:${ne}:${pe}`,
							te,
							Q,
							Z,
							ae,
							se,
							ye,
						),
							(this.parent = Y),
							(this.name = ne),
							(this.evaluateName = ee),
							(this.variableMenuContext = le),
							(this.available = oe),
							(this.declarationLocationReference = $e),
							(this.value = _ || ""),
							(this.type = re);
					}
					getThreadId() {
						return this.h;
					}
					async setVariable(W, X) {
						if (this.g)
							try {
								if (
									this.g.capabilities.supportsSetExpression &&
									!this.g.capabilities.supportsSetVariable &&
									this.evaluateName
								)
									return this.setExpression(W, X);
								const Y = await this.g.setVariable(
									this.parent.reference,
									this.name,
									W,
								);
								I(this, Y);
							} catch (Y) {
								this.errorMessage = Y.message;
							}
					}
					async setExpression(W, X) {
						if (!this.g || !this.evaluateName) return;
						const Y = await this.g.setExpression(
							X.frameId,
							this.evaluateName,
							W,
						);
						I(this, Y);
					}
					toString() {
						return this.name ? `${this.name}: ${this.value}` : this.value;
					}
					n(W) {
						this.evaluateName = W.evaluateName;
					}
					toDebugProtocolObject() {
						return {
							name: this.name,
							variablesReference: this.reference || 0,
							memoryReference: this.memoryReference,
							value: this.value,
							evaluateName: this.evaluateName,
						};
					}
				}
				e.$K3 = k;
				class L extends S {
					constructor(W, X, Y, ie, ne, ee, _, te) {
						super(
							W.thread.session,
							W.thread.threadId,
							ie,
							`scope:${Y}:${X}`,
							ee,
							_,
						),
							(this.stackFrame = W),
							(this.name = Y),
							(this.expensive = ne),
							(this.range = te);
					}
					toString() {
						return this.name;
					}
					toDebugProtocolObject() {
						return {
							name: this.name,
							variablesReference: this.reference || 0,
							expensive: this.expensive,
						};
					}
				}
				e.$L3 = L;
				class D extends L {
					constructor(W, X, Y) {
						super(W, X, Y, 0, !1);
					}
					toString() {
						return this.name;
					}
				}
				e.$M3 = D;
				class M {
					constructor(W, X, Y, ie, ne, ee, _, te, Q) {
						(this.thread = W),
							(this.frameId = X),
							(this.source = Y),
							(this.name = ie),
							(this.presentationHint = ne),
							(this.range = ee),
							(this.b = _),
							(this.canRestart = te),
							(this.instructionPointerReference = Q);
					}
					getId() {
						return `stackframe:${this.thread.getId()}:${this.b}:${this.source.name}`;
					}
					getScopes() {
						return (
							this.a ||
								(this.a = this.thread.session
									.scopes(this.frameId, this.thread.threadId)
									.then(
										(W) => {
											if (!W || !W.body || !W.body.scopes) return [];
											const X = new Set();
											return W.body.scopes.map((Y) => {
												let ie = 0;
												do
													ie = (0, m.$Dj)(
														`${Y.name}:${Y.line}:${Y.column}`,
														ie,
													);
												while (X.has(ie));
												return (
													X.add(ie),
													new L(
														this,
														ie,
														Y.name,
														Y.variablesReference,
														Y.expensive,
														Y.namedVariables,
														Y.indexedVariables,
														Y.line && Y.column && Y.endLine && Y.endColumn
															? new p.$iL(
																	Y.line,
																	Y.column,
																	Y.endLine,
																	Y.endColumn,
																)
															: void 0,
													)
												);
											});
										},
										(W) => [new D(this, 0, W.message)],
									)),
							this.a
						);
					}
					async getMostSpecificScopes(W) {
						const Y = (await this.getScopes()).filter((ee) => !ee.expensive);
						if (!Y.some((ee) => !!ee.range)) return Y;
						const ne = Y.filter(
							(ee) => ee.range && p.$iL.containsRange(ee.range, W),
						).sort(
							(ee, _) =>
								ee.range.endLineNumber -
								ee.range.startLineNumber -
								(_.range.endLineNumber - _.range.startLineNumber),
						);
						return ne.length ? ne : Y;
					}
					restart() {
						return this.thread.session.restartFrame(
							this.frameId,
							this.thread.threadId,
						);
					}
					forgetScopes() {
						this.a = void 0;
					}
					toString() {
						const W =
								typeof this.range.startLineNumber == "number"
									? `:${this.range.startLineNumber}`
									: "",
							X = `${this.source.inMemory ? this.source.name : this.source.uri.fsPath}${W}`;
						return X === l.$y3 ? this.name : `${this.name} (${X})`;
					}
					async openInEditor(W, X, Y, ie) {
						const ne = this.thread.stoppedDetails?.reason;
						if (
							this.instructionPointerReference &&
							(ne === "instruction breakpoint" ||
								(ne === "step" &&
									this.thread.lastSteppingGranularity === "instruction") ||
								W.activeEditor instanceof y.$G3)
						)
							return W.openEditor(y.$G3.instance, {
								pinned: !0,
								revealIfOpened: !0,
							});
						if (this.source.available)
							return this.source.openInEditor(W, this.range, X, Y, ie);
					}
					equals(W) {
						return (
							this.name === W.name &&
							W.thread === this.thread &&
							this.frameId === W.frameId &&
							W.source === this.source &&
							p.$iL.equalsRange(this.range, W.range)
						);
					}
				}
				e.$N3 = M;
				const N = ["breakpoint", "step", "function breakpoint"];
				class A {
					constructor(W, X, Y) {
						(this.session = W),
							(this.name = X),
							(this.threadId = Y),
							(this.f = []),
							(this.reachedEndOfCallStack = !1),
							(this.lastRecordingCallStackHistory = []),
							(this.a = []),
							(this.b = []),
							(this.stopped = !1);
					}
					getId() {
						return `thread:${this.session.getId()}:${this.threadId}`;
					}
					clearCallStack() {
						this.a.length && (this.b = this.a),
							(this.a = []),
							this.f.forEach((W) => W.dispose(!0)),
							(this.f = []);
					}
					getCallStack() {
						return this.a;
					}
					getStaleCallStack() {
						return this.b;
					}
					getTopStackFrame() {
						const W = this.getCallStack(),
							X = this.stoppedDetails?.reason;
						return W.find(
							(ie) =>
								!!(
									((X === "instruction breakpoint" ||
										(X === "step" &&
											this.lastSteppingGranularity === "instruction")) &&
										ie.instructionPointerReference) ||
									(ie.source &&
										ie.source.available &&
										(N.includes(X) || !(0, s.$65)(ie)))
								),
						);
					}
					get stateLabel() {
						return this.stoppedDetails
							? this.stoppedDetails.description ||
									(this.stoppedDetails.reason
										? o.localize(5853, null, this.stoppedDetails.reason)
										: o.localize(5854, null))
							: o.localize(5855, null);
					}
					async fetchCallStack(W = 20) {
						if (this.stopped) {
							const X = this.a.length,
								Y = await this.g(X, W);
							(this.reachedEndOfCallStack = Y.length < W),
								X < this.a.length && this.a.splice(X, this.a.length - X),
								(this.a = this.a.concat(Y || [])),
								typeof this.stoppedDetails?.totalFrames == "number" &&
									this.stoppedDetails.totalFrames === this.a.length &&
									(this.reachedEndOfCallStack = !0);
						}
					}
					async g(W, X) {
						try {
							const Y = new C.$Ce();
							this.f.push(Y);
							const ie = await this.session.stackTrace(
								this.threadId,
								W,
								X,
								Y.token,
							);
							return !ie || !ie.body || Y.token.isCancellationRequested
								? []
								: (this.stoppedDetails &&
										(this.stoppedDetails.totalFrames = ie.body.totalFrames),
									ie.body.stackFrames.map((ne, ee) => {
										const _ = this.session.getSource(ne.source);
										return new M(
											this,
											ne.id,
											_,
											ne.name,
											ne.presentationHint,
											new p.$iL(
												ne.line,
												ne.column,
												ne.endLine || ne.line,
												ne.endColumn || ne.column,
											),
											W + ee,
											typeof ne.canRestart == "boolean" ? ne.canRestart : !0,
											ne.instructionPointerReference,
										);
									}));
						} catch (Y) {
							return (
								this.stoppedDetails &&
									(this.stoppedDetails.framesErrorMessage = Y.message),
								[]
							);
						}
					}
					get exceptionInfo() {
						return this.stoppedDetails &&
							this.stoppedDetails.reason === "exception"
							? this.session.capabilities.supportsExceptionInfoRequest
								? this.session.exceptionInfo(this.threadId)
								: Promise.resolve({
										description: this.stoppedDetails.text,
										breakMode: null,
									})
							: Promise.resolve(void 0);
					}
					next(W) {
						return this.session.next(this.threadId, W);
					}
					stepIn(W) {
						return this.session.stepIn(this.threadId, void 0, W);
					}
					stepOut(W) {
						return this.session.stepOut(this.threadId, W);
					}
					stepBack(W) {
						return this.session.stepBack(this.threadId, W);
					}
					continue() {
						return this.session.continue(this.threadId);
					}
					pause() {
						return this.session.pause(this.threadId);
					}
					terminate() {
						return this.session.terminateThreads([this.threadId]);
					}
					reverseContinue() {
						return this.session.reverseContinue(this.threadId);
					}
					async recordStepByStep(W, X) {
						this.lastRecordingCallStackHistory = [];
						const Y = new Set();
						let ie = 0;
						for (W.setIsRecording(!0); W.getIsRecording(); ) {
							if (!this.stopped) await this.pause();
							else {
								this.a.length === 0 && (await this.fetchCallStack(1));
								const _ = this.a.at(0);
								if (_ === void 0) continue;
								const te = `${_.source.uri.path}::${_.range.startLineNumber}:${_.range.startColumn}-${_.range.endLineNumber}:${_.range.endColumn}`;
								_.source.uri.path.includes("/node_modules/")
									? await this.session.stepOut(this.threadId, "instruction")
									: await this.session.stepIn(
											this.threadId,
											void 0,
											"instruction",
										),
									Y.add(te);
							}
							let ne = 0;
							for (; !this.stopped && ne < 1e5 && W.getIsRecording(); )
								await new Promise((_) => setTimeout(_, 0)), ne++;
							if (!W.getIsRecording()) break;
							await this.fetchCallStack(1);
							const ee = this.a.at(0);
							if (
								ee !== void 0 &&
								!ee.source.uri.path.includes("/node_modules/")
							) {
								const _ = { ...this.a[0] };
								this.lastRecordingCallStackHistory.push(_);
							}
							ie++;
						}
						return this.session.continue(this.threadId);
					}
				}
				e.$O3 = A;
				const R = (J, W, X, Y = "memory") =>
					n.URI.from({
						scheme: s.$55,
						authority: J,
						path: "/" + encodeURIComponent(W) + `/${encodeURIComponent(Y)}.bin`,
						query: X ? `?range=${X.fromOffset}:${X.toOffset}` : void 0,
					});
				e.$P3 = R;
				class O extends r.$1c {
					constructor(W, X) {
						super(),
							(this.b = W),
							(this.f = X),
							(this.a = this.D(new d.$re())),
							(this.onDidInvalidate = this.a.event),
							(this.writable =
								!!this.f.capabilities.supportsWriteMemoryRequest),
							this.D(
								X.onDidInvalidateMemory((Y) => {
									Y.body.memoryReference === W &&
										this.g(Y.body.offset, Y.body.count - Y.body.offset);
								}),
							);
					}
					async read(W, X) {
						const Y = X - W,
							ie = W,
							ne = await this.f.readMemory(this.b, ie, Y);
						if (ne === void 0 || !ne.body?.data)
							return [
								{ type: s.MemoryRangeType.Unreadable, offset: ie, length: Y },
							];
						let ee;
						try {
							ee = (0, E.$af)(ne.body.data);
						} catch {
							return [
								{
									type: s.MemoryRangeType.Error,
									offset: ie,
									length: Y,
									error: "Invalid base64 data from debug adapter",
								},
							];
						}
						const _ = ne.body.unreadableBytes || 0,
							te = Y - _;
						if (ee.byteLength < te) {
							const Q = E.$Te.alloc(te - ee.byteLength);
							Q.buffer.fill(0), (ee = E.$Te.concat([ee, Q], te));
						} else ee.byteLength > te && (ee = ee.slice(0, te));
						return _
							? [
									{
										type: s.MemoryRangeType.Valid,
										offset: ie,
										length: te,
										data: ee,
									},
									{
										type: s.MemoryRangeType.Unreadable,
										offset: ie + te,
										length: _,
									},
								]
							: [
									{
										type: s.MemoryRangeType.Valid,
										offset: ie,
										length: Y,
										data: ee,
									},
								];
					}
					async write(W, X) {
						const ie =
							(await this.f.writeMemory(this.b, W, (0, E.$cf)(X), !0))?.body
								?.bytesWritten ?? X.byteLength;
						return this.g(W, W + ie), ie;
					}
					dispose() {
						super.dispose();
					}
					g(W, X) {
						this.a.fire({ fromOffset: W, toOffset: X });
					}
				}
				e.$Q3 = O;
				class B {
					constructor(W, X) {
						(this.enabled = W), (this.a = X);
					}
					getId() {
						return this.a;
					}
				}
				e.$R3 = B;
				function U(J, W) {
					return (0, u.$yo)(
						{
							supportsConditionalBreakpoints:
								!!W.supportsConditionalBreakpoints,
							supportsHitConditionalBreakpoints:
								!!W.supportsHitConditionalBreakpoints,
							supportsLogPoints: !!W.supportsLogPoints,
							supportsFunctionBreakpoints: !!W.supportsFunctionBreakpoints,
							supportsDataBreakpoints: !!W.supportsDataBreakpoints,
							supportsInstructionBreakpoints:
								!!W.supportsInstructionBreakpoints,
						},
						J,
					);
				}
				class z extends B {
					constructor(W, X) {
						super(X.enabled ?? !0, W),
							(this.b = new Map()),
							(this.condition = X.condition),
							(this.hitCondition = X.hitCondition),
							(this.logMessage = X.logMessage),
							(this.mode = X.mode),
							(this.modeLabel = X.modeLabel);
					}
					setSessionData(W, X) {
						X ? ((X.sessionId = W), this.b.set(W, X)) : this.b.delete(W);
						const Y = Array.from(this.b.values()),
							ie = (0, t.$Qb)(
								Y.filter((ne) => ne.verified),
								(ne) => `${ne.line}:${ne.column}`,
							);
						ie.length
							? (this.f = ie.length === 1 ? ie[0] : void 0)
							: (this.f = Y.length ? Y[0] : void 0);
					}
					get message() {
						if (this.f) return this.f.message;
					}
					get verified() {
						return this.f ? this.f.verified : !0;
					}
					get sessionsThatVerified() {
						const W = [];
						for (const [X, Y] of this.b) Y.verified && W.push(X);
						return W;
					}
					getIdFromAdapter(W) {
						const X = this.b.get(W);
						return X ? X.id : void 0;
					}
					getDebugProtocolBreakpoint(W) {
						const X = this.b.get(W);
						if (X)
							return {
								id: X.id,
								verified: X.verified,
								message: X.message,
								source: X.source,
								line: X.line,
								column: X.column,
								endLine: X.endLine,
								endColumn: X.endColumn,
								instructionReference: X.instructionReference,
								offset: X.offset,
							};
					}
					toJSON() {
						return {
							id: this.getId(),
							enabled: this.enabled,
							condition: this.condition,
							hitCondition: this.hitCondition,
							logMessage: this.logMessage,
							mode: this.mode,
							modeLabel: this.modeLabel,
						};
					}
				}
				e.$S3 = z;
				class F extends z {
					constructor(W, X, Y, ie, ne = (0, g.$9g)()) {
						super(ne, W),
							(this.m = X),
							(this.n = Y),
							(this.o = ie),
							(this.h = W.uri),
							(this.k = W.lineNumber),
							(this.l = W.column),
							(this.j = W.adapterData),
							(this.triggeredBy = W.triggeredBy);
					}
					toDAP() {
						return {
							line: this.sessionAgnosticData.lineNumber,
							column: this.sessionAgnosticData.column,
							condition: this.condition,
							hitCondition: this.hitCondition,
							logMessage: this.logMessage,
							mode: this.mode,
						};
					}
					get originalUri() {
						return this.h;
					}
					get lineNumber() {
						return this.verified && this.f && typeof this.f.line == "number"
							? this.f.line
							: this.k;
					}
					get verified() {
						return this.f ? this.f.verified && !this.m.isDirty(this.h) : !0;
					}
					get pending() {
						return this.f ? !1 : this.triggeredBy !== void 0;
					}
					get uri() {
						return this.verified && this.f && this.f.source
							? (0, l.$A3)(
									this.f.source,
									this.f.source.path,
									this.f.sessionId,
									this.n,
									this.o,
								)
							: this.h;
					}
					get column() {
						return this.verified && this.f && typeof this.f.column == "number"
							? this.f.column
							: this.l;
					}
					get message() {
						return this.m.isDirty(this.uri)
							? o.localize(5856, null)
							: super.message;
					}
					get adapterData() {
						return this.f && this.f.source && this.f.source.adapterData
							? this.f.source.adapterData
							: this.j;
					}
					get endLineNumber() {
						return this.verified && this.f ? this.f.endLine : void 0;
					}
					get endColumn() {
						return this.verified && this.f ? this.f.endColumn : void 0;
					}
					get sessionAgnosticData() {
						return { lineNumber: this.k, column: this.l };
					}
					get supported() {
						return this.f
							? !(
									(this.logMessage && !this.f.supportsLogPoints) ||
									(this.condition && !this.f.supportsConditionalBreakpoints) ||
									(this.hitCondition &&
										!this.f.supportsHitConditionalBreakpoints)
								)
							: !0;
					}
					setSessionData(W, X) {
						super.setSessionData(W, X), this.j || (this.j = this.adapterData);
					}
					toJSON() {
						return {
							...super.toJSON(),
							uri: this.h,
							lineNumber: this.k,
							column: this.l,
							adapterData: this.adapterData,
							triggeredBy: this.triggeredBy,
						};
					}
					toString() {
						return `${h.$jh(this.uri)} ${this.lineNumber}`;
					}
					setSessionDidTrigger(W) {
						(this.g ??= new Set()), this.g.add(W);
					}
					getSessionDidTrigger(W) {
						return !!this.g?.has(W);
					}
					update(W) {
						W.hasOwnProperty("lineNumber") &&
							!(0, c.$ug)(W.lineNumber) &&
							(this.k = W.lineNumber),
							W.hasOwnProperty("column") && (this.l = W.column),
							W.hasOwnProperty("condition") && (this.condition = W.condition),
							W.hasOwnProperty("hitCondition") &&
								(this.hitCondition = W.hitCondition),
							W.hasOwnProperty("logMessage") &&
								(this.logMessage = W.logMessage),
							W.hasOwnProperty("mode") &&
								((this.mode = W.mode), (this.modeLabel = W.modeLabel)),
							W.hasOwnProperty("triggeredBy") &&
								((this.triggeredBy = W.triggeredBy), (this.g = void 0));
					}
				}
				e.$T3 = F;
				class x extends z {
					constructor(W, X = (0, g.$9g)()) {
						super(X, W), (this.name = W.name);
					}
					toDAP() {
						return {
							name: this.name,
							condition: this.condition,
							hitCondition: this.hitCondition,
						};
					}
					toJSON() {
						return { ...super.toJSON(), name: this.name };
					}
					get supported() {
						return this.f ? this.f.supportsFunctionBreakpoints : !0;
					}
					toString() {
						return this.name;
					}
				}
				e.$U3 = x;
				class H extends z {
					constructor(W, X = (0, g.$9g)()) {
						super(X, W),
							(this.g = new WeakMap()),
							(this.description = W.description),
							"dataId" in W &&
								(W.src = {
									type: s.DataBreakpointSetType.Variable,
									dataId: W.dataId,
								}),
							(this.src = W.src),
							(this.canPersist = W.canPersist),
							(this.accessTypes = W.accessTypes),
							(this.accessType = W.accessType),
							W.initialSessionData &&
								this.g.set(
									W.initialSessionData.session,
									W.initialSessionData.dataId,
								);
					}
					async toDAP(W) {
						let X;
						if (this.src.type === s.DataBreakpointSetType.Variable)
							X = this.src.dataId;
						else {
							let Y = this.g.get(W);
							if (!Y) {
								if (
									((Y = (
										await W.dataBytesBreakpointInfo(
											this.src.address,
											this.src.bytes,
										)
									)?.dataId),
									!Y)
								)
									return;
								this.g.set(W, Y);
							}
							X = Y;
						}
						return {
							dataId: X,
							accessType: this.accessType,
							condition: this.condition,
							hitCondition: this.hitCondition,
						};
					}
					toJSON() {
						return {
							...super.toJSON(),
							description: this.description,
							src: this.src,
							accessTypes: this.accessTypes,
							accessType: this.accessType,
							canPersist: this.canPersist,
						};
					}
					get supported() {
						return this.f ? this.f.supportsDataBreakpoints : !0;
					}
					toString() {
						return this.description;
					}
				}
				e.$V3 = H;
				class q extends z {
					constructor(W, X = (0, g.$9g)()) {
						super(X, W),
							(this.g = new Set()),
							(this.h = !1),
							(this.filter = W.filter),
							(this.label = W.label),
							(this.supportsCondition = W.supportsCondition),
							(this.description = W.description),
							(this.conditionDescription = W.conditionDescription),
							(this.h = W.fallback || !1);
					}
					toJSON() {
						return {
							...super.toJSON(),
							filter: this.filter,
							label: this.label,
							enabled: this.enabled,
							supportsCondition: this.supportsCondition,
							conditionDescription: this.conditionDescription,
							condition: this.condition,
							fallback: this.h,
							description: this.description,
						};
					}
					setSupportedSession(W, X) {
						X ? this.g.add(W) : this.g.delete(W);
					}
					setFallback(W) {
						this.h = W;
					}
					get supported() {
						return !0;
					}
					isSupportedSession(W) {
						return W ? this.g.has(W) : this.h;
					}
					matches(W) {
						return (
							this.filter === W.filter &&
							this.label === W.label &&
							this.supportsCondition === !!W.supportsCondition &&
							this.conditionDescription === W.conditionDescription &&
							this.description === W.description
						);
					}
					toString() {
						return this.label;
					}
				}
				e.$W3 = q;
				class V extends z {
					constructor(W, X = (0, g.$9g)()) {
						super(X, W),
							(this.instructionReference = W.instructionReference),
							(this.offset = W.offset),
							(this.canPersist = W.canPersist),
							(this.address = W.address);
					}
					toDAP() {
						return {
							instructionReference: this.instructionReference,
							condition: this.condition,
							hitCondition: this.hitCondition,
							mode: this.mode,
							offset: this.offset,
						};
					}
					toJSON() {
						return {
							...super.toJSON(),
							instructionReference: this.instructionReference,
							offset: this.offset,
							canPersist: this.canPersist,
							address: this.address,
						};
					}
					get supported() {
						return this.f ? this.f.supportsInstructionBreakpoints : !0;
					}
					toString() {
						return this.instructionReference;
					}
				}
				e.$X3 = V;
				class G {
					constructor(W, X) {
						(this.sessionId = W), (this.threadId = X);
					}
					getId() {
						return `${this.sessionId}:${this.threadId}`;
					}
				}
				e.$Y3 = G;
				let K = class extends r.$1c {
					constructor(W, X, Y, ie) {
						super(),
							(this.F = X),
							(this.G = Y),
							(this.H = ie),
							(this.b = new Map()),
							(this.f = !0),
							(this.g = this.D(new d.$re())),
							(this.h = this.D(new d.$re())),
							(this.j = this.D(new d.$re())),
							(this.m = this.D(new d.$re())),
							(this.n = new Map()),
							(this.z = this.D(new r.$0c())),
							this.D(
								(0, a.autorun)((ne) => {
									(this.q = W.breakpoints.read(ne)),
										(this.t = W.functionBreakpoints.read(ne)),
										(this.u = W.exceptionBreakpoints.read(ne)),
										(this.w = W.dataBreakpoints.read(ne)),
										this.g.fire(void 0);
								}),
							),
							this.D(
								(0, a.autorun)((ne) => {
									(this.y = W.watchExpressions.read(ne)), this.j.fire(void 0);
								}),
							),
							(this.C = []),
							(this.a = []);
						for (const ne of this.y)
							this.z.set(
								ne.getId(),
								ne.onDidChangeValue((ee) => this.m.fire(ee)),
							);
					}
					getId() {
						return "root";
					}
					getSession(W, X = !1) {
						if (W) return this.getSessions(X).find((Y) => Y.getId() === W);
					}
					getSessions(W = !1) {
						return this.a.filter((X) => W || X.state !== s.State.Inactive);
					}
					addSession(W) {
						this.a = this.a.filter(
							(ie) =>
								!(
									ie.getId() === W.getId() ||
									(ie.state === s.State.Inactive &&
										ie.configuration.name === W.configuration.name)
								),
						);
						let X = 1;
						for (; this.a.some((ie) => ie.getLabel() === W.getLabel()); )
							W.setName(`${W.configuration.name} ${++X}`);
						let Y = -1;
						W.parentSession &&
							(Y = (0, i.$kb)(
								this.a,
								(ie) =>
									ie.parentSession === W.parentSession ||
									ie === W.parentSession,
							)),
							Y >= 0 ? this.a.splice(Y + 1, 0, W) : this.a.push(W),
							this.h.fire(void 0);
					}
					get onDidChangeBreakpoints() {
						return this.g.event;
					}
					get onDidChangeCallStack() {
						return this.h.event;
					}
					get onDidChangeWatchExpressions() {
						return this.j.event;
					}
					get onDidChangeWatchExpressionValue() {
						return this.m.event;
					}
					rawUpdate(W) {
						const X = this.a.find((Y) => Y.getId() === W.sessionId);
						X && (X.rawUpdate(W), this.h.fire(void 0));
					}
					clearThreads(W, X, Y = void 0) {
						const ie = this.a.find((ne) => ne.getId() === W);
						this.b.forEach((ne) => {
							ne.scheduler.dispose(), ne.completeDeferred.complete();
						}),
							this.b.clear(),
							ie && (ie.clearThreads(X, Y), this.h.fire(void 0));
					}
					async fetchCallstack(W, X) {
						if (W.reachedEndOfCallStack) return;
						const Y = W.stoppedDetails?.totalFrames,
							ie = typeof Y == "number" ? Y - W.getCallStack().length : void 0;
						(!X || (ie && X > ie)) && (X = ie),
							X && X > 0 && (await W.fetchCallStack(X), this.h.fire());
					}
					refreshTopOfCallstack(W, X = !0) {
						if (W.session.capabilities.supportsDelayedStackTraceLoading) {
							let ie = Promise.resolve();
							const ne = new Promise((ee, _) => {
								ie = W.fetchCallStack(1).then(() => {
									if (!X) {
										ee(), this.h.fire();
										return;
									}
									if (!this.b.has(W.getId())) {
										const Q = new w.$0h();
										this.b.set(W.getId(), {
											completeDeferred: Q,
											scheduler: new w.$Yh(() => {
												W.fetchCallStack(19)
													.then(() => {
														const Z = W.getStaleCallStack(),
															se = W.getCallStack();
														let re = Z.length !== se.length;
														for (let le = 1; le < Z.length && !re; le++)
															re = !Z[le].equals(se[le]);
														re && this.h.fire();
													})
													.finally(() => {
														Q.complete(), this.b.delete(W.getId());
													});
											}, 420),
										});
									}
									const te = this.b.get(W.getId());
									te.scheduler.schedule(),
										te.completeDeferred.p.then(ee, _),
										this.h.fire();
								});
							});
							return { topCallStack: ie, wholeCallStack: ne };
						}
						const Y = W.fetchCallStack();
						return { wholeCallStack: Y, topCallStack: Y };
					}
					getBreakpoints(W) {
						if (W) {
							const X = W.uri?.toString(),
								Y = W.originalUri?.toString();
							return this.q.filter(
								(ie) =>
									!(
										(X && ie.uri.toString() !== X) ||
										(Y && ie.originalUri.toString() !== Y) ||
										(W.lineNumber && ie.lineNumber !== W.lineNumber) ||
										(W.column && ie.column !== W.column) ||
										(W.enabledOnly && (!this.f || !ie.enabled)) ||
										(W.triggeredOnly && ie.triggeredBy === void 0)
									),
							);
						}
						return this.q;
					}
					getFunctionBreakpoints() {
						return this.t;
					}
					getDataBreakpoints() {
						return this.w;
					}
					getExceptionBreakpoints() {
						return this.u;
					}
					getExceptionBreakpointsForSession(W) {
						return this.u.filter((X) => X.isSupportedSession(W));
					}
					getInstructionBreakpoints() {
						return this.C;
					}
					setExceptionBreakpointsForSession(W, X) {
						if (!X) return;
						let Y = !1;
						X.forEach((ie) => {
							let ne = this.u.filter((ee) => ee.matches(ie)).pop();
							ne ||
								((Y = !0),
								(ne = new q({
									filter: ie.filter,
									label: ie.label,
									enabled: !!ie.default,
									supportsCondition: !!ie.supportsCondition,
									description: ie.description,
									conditionDescription: ie.conditionDescription,
								})),
								this.u.push(ne)),
								ne.setSupportedSession(W, !0);
						}),
							Y && this.g.fire(void 0);
					}
					removeExceptionBreakpointsForSession(W) {
						this.u.forEach((X) => X.setSupportedSession(W, !1));
					}
					setExceptionBreakpointFallbackSession(W) {
						this.u.forEach((X) => X.setFallback(X.isSupportedSession(W)));
					}
					setExceptionBreakpointCondition(W, X) {
						(W.condition = X), this.g.fire(void 0);
					}
					areBreakpointsActivated() {
						return this.f;
					}
					setBreakpointsActivated(W) {
						(this.f = W), this.g.fire(void 0);
					}
					addBreakpoints(W, X, Y = !0) {
						const ie = X.map(
							(ne) =>
								new F(
									{
										uri: W,
										lineNumber: ne.lineNumber,
										column: ne.column,
										enabled: ne.enabled ?? !0,
										condition: ne.condition,
										hitCondition: ne.hitCondition,
										logMessage: ne.logMessage,
										triggeredBy: ne.triggeredBy,
										adapterData: void 0,
										mode: ne.mode,
										modeLabel: ne.modeLabel,
									},
									this.F,
									this.G,
									this.H,
									ne.id,
								),
						);
						return (
							(this.q = this.q.concat(ie)),
							(this.f = !0),
							this.I(),
							Y && this.g.fire({ added: ie, sessionOnly: !1 }),
							ie
						);
					}
					removeBreakpoints(W) {
						(this.q = this.q.filter(
							(X) => !W.some((Y) => Y.getId() === X.getId()),
						)),
							this.g.fire({ removed: W, sessionOnly: !1 });
					}
					updateBreakpoints(W) {
						const X = [];
						this.q.forEach((Y) => {
							const ie = W.get(Y.getId());
							ie && (Y.update(ie), X.push(Y));
						}),
							this.I(),
							this.g.fire({ changed: X, sessionOnly: !1 });
					}
					setBreakpointSessionData(W, X, Y) {
						this.q.forEach((ie) => {
							if (!Y) ie.setSessionData(W, void 0);
							else {
								const ne = Y.get(ie.getId());
								ne && ie.setSessionData(W, U(ne, X));
							}
						}),
							this.t.forEach((ie) => {
								if (!Y) ie.setSessionData(W, void 0);
								else {
									const ne = Y.get(ie.getId());
									ne && ie.setSessionData(W, U(ne, X));
								}
							}),
							this.w.forEach((ie) => {
								if (!Y) ie.setSessionData(W, void 0);
								else {
									const ne = Y.get(ie.getId());
									ne && ie.setSessionData(W, U(ne, X));
								}
							}),
							this.u.forEach((ie) => {
								if (!Y) ie.setSessionData(W, void 0);
								else {
									const ne = Y.get(ie.getId());
									ne && ie.setSessionData(W, U(ne, X));
								}
							}),
							this.C.forEach((ie) => {
								if (!Y) ie.setSessionData(W, void 0);
								else {
									const ne = Y.get(ie.getId());
									ne && ie.setSessionData(W, U(ne, X));
								}
							}),
							this.g.fire({ sessionOnly: !0 });
					}
					getDebugProtocolBreakpoint(W, X) {
						const Y = this.q.find((ie) => ie.getId() === W);
						if (Y) return Y.getDebugProtocolBreakpoint(X);
					}
					getBreakpointModes(W) {
						return [...this.n.values()].filter((X) => X.appliesTo.includes(W));
					}
					registerBreakpointModes(W, X) {
						for (const Y of X) {
							const ie = `${Y.mode}/${Y.label}`,
								ne = this.n.get(ie);
							if (ne)
								for (const ee of Y.appliesTo)
									ne.appliesTo.includes(ee) || ne.appliesTo.push(ee);
							else {
								const ee = [...this.n.values()].find(
									(_) => _ !== ne && _.label === Y.label,
								);
								ee && (ee.label = `${ee.label} (${ee.firstFromDebugType})`),
									this.n.set(ie, {
										mode: Y.mode,
										label: ee ? `${Y.label} (${W})` : Y.label,
										firstFromDebugType: W,
										description: Y.description,
										appliesTo: Y.appliesTo.slice(),
									});
							}
						}
					}
					I() {
						(this.q = this.q.sort((W, X) =>
							W.uri.toString() !== X.uri.toString()
								? h.$jh(W.uri).localeCompare(h.$jh(X.uri))
								: W.lineNumber === X.lineNumber
									? W.column && X.column
										? W.column - X.column
										: 1
									: W.lineNumber - X.lineNumber,
						)),
							(this.q = (0, t.$Qb)(
								this.q,
								(W) => `${W.uri.toString()}:${W.lineNumber}:${W.column}`,
							));
					}
					setEnablement(W, X) {
						if (
							W instanceof F ||
							W instanceof x ||
							W instanceof q ||
							W instanceof H ||
							W instanceof V
						) {
							const Y = [];
							W.enabled !== X &&
								(W instanceof F ||
									W instanceof x ||
									W instanceof H ||
									W instanceof V) &&
								Y.push(W),
								(W.enabled = X),
								X && (this.f = !0),
								this.g.fire({ changed: Y, sessionOnly: !1 });
						}
					}
					enableOrDisableAllBreakpoints(W) {
						const X = [];
						this.q.forEach((Y) => {
							Y.enabled !== W && X.push(Y), (Y.enabled = W);
						}),
							this.t.forEach((Y) => {
								Y.enabled !== W && X.push(Y), (Y.enabled = W);
							}),
							this.w.forEach((Y) => {
								Y.enabled !== W && X.push(Y), (Y.enabled = W);
							}),
							this.C.forEach((Y) => {
								Y.enabled !== W && X.push(Y), (Y.enabled = W);
							}),
							W && (this.f = !0),
							this.g.fire({ changed: X, sessionOnly: !1 });
					}
					addFunctionBreakpoint(W, X) {
						const Y = new x(W, X);
						return (
							this.t.push(Y), this.g.fire({ added: [Y], sessionOnly: !1 }), Y
						);
					}
					updateFunctionBreakpoint(W, X) {
						const Y = this.t.find((ie) => ie.getId() === W);
						Y &&
							(typeof X.name == "string" && (Y.name = X.name),
							typeof X.condition == "string" && (Y.condition = X.condition),
							typeof X.hitCondition == "string" &&
								(Y.hitCondition = X.hitCondition),
							this.g.fire({ changed: [Y], sessionOnly: !1 }));
					}
					removeFunctionBreakpoints(W) {
						let X;
						W
							? ((X = this.t.filter((Y) => Y.getId() === W)),
								(this.t = this.t.filter((Y) => Y.getId() !== W)))
							: ((X = this.t), (this.t = [])),
							this.g.fire({ removed: X, sessionOnly: !1 });
					}
					addDataBreakpoint(W, X) {
						const Y = new H(W, X);
						this.w.push(Y), this.g.fire({ added: [Y], sessionOnly: !1 });
					}
					updateDataBreakpoint(W, X) {
						const Y = this.w.find((ie) => ie.getId() === W);
						Y &&
							(typeof X.condition == "string" && (Y.condition = X.condition),
							typeof X.hitCondition == "string" &&
								(Y.hitCondition = X.hitCondition),
							this.g.fire({ changed: [Y], sessionOnly: !1 }));
					}
					removeDataBreakpoints(W) {
						let X;
						W
							? ((X = this.w.filter((Y) => Y.getId() === W)),
								(this.w = this.w.filter((Y) => Y.getId() !== W)))
							: ((X = this.w), (this.w = [])),
							this.g.fire({ removed: X, sessionOnly: !1 });
					}
					addInstructionBreakpoint(W) {
						const X = new V(W);
						this.C.push(X), this.g.fire({ added: [X], sessionOnly: !0 });
					}
					removeInstructionBreakpoints(W, X) {
						let Y = [];
						if (W)
							for (let ie = 0; ie < this.C.length; ie++) {
								const ne = this.C[ie];
								ne.instructionReference === W &&
									(X === void 0 || ne.offset === X) &&
									(Y.push(ne), this.C.splice(ie--, 1));
							}
						else (Y = this.C), (this.C = []);
						this.g.fire({ removed: Y, sessionOnly: !1 });
					}
					getWatchExpressions() {
						return this.y;
					}
					addWatchExpression(W) {
						const X = new P(W || "");
						return (
							this.z.set(
								X.getId(),
								X.onDidChangeValue((Y) => this.m.fire(Y)),
							),
							this.y.push(X),
							this.j.fire(X),
							X
						);
					}
					renameWatchExpression(W, X) {
						const Y = this.y.filter((ie) => ie.getId() === W);
						Y.length === 1 && ((Y[0].name = X), this.j.fire(Y[0]));
					}
					removeWatchExpressions(W = null) {
						if (
							((this.y = W ? this.y.filter((X) => X.getId() !== W) : []),
							this.j.fire(void 0),
							!W)
						) {
							this.z.clearAndDisposeAll();
							return;
						}
						this.z.deleteAndDispose(W);
					}
					moveWatchExpression(W, X) {
						const Y = this.y.find((ie) => ie.getId() === W);
						Y &&
							((this.y = this.y.filter((ie) => ie.getId() !== W)),
							(this.y = this.y.slice(0, X).concat(Y, this.y.slice(X))),
							this.j.fire(void 0));
					}
					sourceIsNotAvailable(W) {
						this.a.forEach((X) => {
							const Y = X.getSourceForUri(W);
							Y && (Y.available = !1);
						}),
							this.h.fire(void 0);
					}
				};
				(e.$Z3 = K),
					(e.$Z3 = K = Ne([j(1, $.$kZ), j(2, b.$Vl), j(3, f.$ik)], K));
			},
		),
		define(
			de[1881],
			he([
				1, 0, 345, 7, 24, 6, 3, 54, 210, 9, 321, 56, 463, 17, 462, 42, 4, 10, 8,
				116, 5, 93, 34, 21, 32, 51, 35, 68, 217, 796, 352, 112, 300, 826, 396,
				18,
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
			) {
				"use strict";
				var O, B, U;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kGc = e.$jGc = void 0),
					(L = mt(L));
				const z = {
					allowBreakpoint: !1,
					isBreakpointSet: !1,
					isBreakpointEnabled: !1,
					instructionReference: "",
					instructionOffset: 0,
					instructionReferenceOffset: 0,
					address: 0n,
					instruction: {
						address: "-1",
						instruction: (0, p.localize)(5663, null),
					},
				};
				let F = class extends P.$JEb {
					static {
						O = this;
					}
					static {
						this.a = 50;
					}
					constructor(K, J, W, X, Y, ie, ne) {
						super(D.$W4, K, J, W, X),
							(this.cb = Y),
							(this.db = ie),
							(this.eb = ne),
							(this.j = []),
							(this.m = !0),
							(this.r = !1),
							(this.u = new Map()),
							(this.c = void 0),
							(this.f = this.D(new E.$re({ leakWarningThreshold: 1e3 }))),
							(this.g = ne.state),
							this.D(
								Y.onDidChangeConfiguration((ee) => {
									if (ee.affectsConfiguration("debug")) {
										const _ =
											this.cb.getValue("debug").disassemblyView.showSourceCode;
										this.m !== _ ? (this.m = _) : this.c?.rerender();
									}
								}),
							);
					}
					get fontInfo() {
						return (
							this.b ||
								((this.b = this.fb()),
								this.D(
									this.cb.onDidChangeConfiguration((K) => {
										K.affectsConfiguration("editor") && (this.b = this.fb());
									}),
								)),
							this.b
						);
					}
					fb() {
						return h.$OK.createFromRawSettings(
							this.cb.getValue("editor"),
							t.$sjb.getInstance(this.window).value,
						);
					}
					get currentInstructionAddresses() {
						return this.eb
							.getModel()
							.getSessions(!1)
							.map((K) => K.getAllThreads())
							.reduce((K, J) => K.concat(J), [])
							.map((K) => K.getTopStackFrame())
							.map((K) => K?.instructionPointerReference)
							.map((K) => (K ? this.getReferenceAddress(K) : void 0));
					}
					get focusedCurrentInstructionReference() {
						return this.eb
							.getViewModel()
							.focusedStackFrame?.thread.getTopStackFrame()
							?.instructionPointerReference;
					}
					get focusedCurrentInstructionAddress() {
						const K = this.focusedCurrentInstructionReference;
						return K ? this.getReferenceAddress(K) : void 0;
					}
					get focusedInstructionReference() {
						return this.eb.getViewModel().focusedStackFrame
							?.instructionPointerReference;
					}
					get focusedInstructionAddress() {
						const K = this.focusedInstructionReference;
						return K ? this.getReferenceAddress(K) : void 0;
					}
					get isSourceCodeRender() {
						return this.m;
					}
					get debugSession() {
						return this.eb.getViewModel().focusedSession;
					}
					get onDidChangeStackFrame() {
						return this.f.event;
					}
					get focusedAddressAndOffset() {
						const K = this.c?.getFocusedElements()[0];
						if (!K) return;
						const J = K.instructionReference,
							W = Number(K.address - this.getReferenceAddress(J));
						return { reference: J, offset: W, address: K.address };
					}
					Y(K) {
						this.m = this.cb.getValue("debug").disassemblyView.showSourceCode;
						const J = this.fontInfo.lineHeight,
							W = this,
							X = new (class {
								constructor() {
									this.headerRowHeight = 0;
								}
								getHeight(ie) {
									return W.isSourceCodeRender &&
										ie.showSourceLocation &&
										ie.instruction.location?.path &&
										ie.instruction.line
										? ie.instruction.endLine
											? J * (ie.instruction.endLine - ie.instruction.line + 2)
											: J * 2
										: J;
								}
							})(),
							Y = this.D(this.db.createInstance(H, this));
						(this.c = this.D(
							this.db.createInstance(
								l.$AMb,
								"DisassemblyView",
								K,
								X,
								[
									{
										label: "",
										tooltip: "",
										weight: 0,
										minimumWidth: this.fontInfo.lineHeight,
										maximumWidth: this.fontInfo.lineHeight,
										templateId: x.TEMPLATE_ID,
										project(ie) {
											return ie;
										},
									},
									{
										label: (0, p.localize)(5664, null),
										tooltip: "",
										weight: 0.3,
										templateId: H.TEMPLATE_ID,
										project(ie) {
											return ie;
										},
									},
								],
								[this.db.createInstance(x, this), Y],
								{
									identityProvider: { getId: (ie) => ie.instruction.address },
									horizontalScrolling: !1,
									overrideStyles: { listBackground: S.$8P },
									multipleSelectionSupport: !1,
									setRowLineHeight: !1,
									openOnSingleClick: !1,
									accessibilityProvider: new q(),
									mouseSupport: !1,
								},
							),
						)),
							this.c.domNode.classList.add("disassembly-view"),
							this.focusedInstructionReference &&
								this.ob(this.focusedInstructionReference, 0),
							this.D(
								this.c.onDidScroll((ie) => {
									if (!this.r)
										if (
											ie.oldScrollTop > ie.scrollTop &&
											ie.scrollTop < ie.height
										) {
											this.r = !0;
											const ne = Math.floor(
												ie.scrollTop / this.fontInfo.lineHeight,
											);
											this.ib(O.a).then((ee) => {
												ee > 0 && this.c.reveal(ne + ee, 0), (this.r = !1);
											});
										} else
											ie.oldScrollTop < ie.scrollTop &&
												ie.scrollTop + ie.height >
													ie.scrollHeight - ie.height &&
												((this.r = !0),
												this.jb(O.a).then(() => {
													this.r = !1;
												}));
								}),
							),
							this.D(
								this.eb
									.getViewModel()
									.onDidFocusStackFrame(({ stackFrame: ie }) => {
										this.c &&
											ie?.instructionPointerReference &&
											this.goToInstructionAndOffset(
												ie.instructionPointerReference,
												0,
											),
											this.f.fire();
									}),
							),
							this.D(
								this.eb.getModel().onDidChangeBreakpoints((ie) => {
									if (ie && this.c) {
										let ne = !1;
										ie.added?.forEach((ee) => {
											if (ee instanceof M.$X3) {
												const _ = this.mb(ee.instructionReference, ee.offset);
												_ >= 0 &&
													((this.c.row(_).isBreakpointSet = !0),
													(this.c.row(_).isBreakpointEnabled = ee.enabled),
													(ne = !0));
											}
										}),
											ie.removed?.forEach((ee) => {
												if (ee instanceof M.$X3) {
													const _ = this.mb(ee.instructionReference, ee.offset);
													_ >= 0 &&
														((this.c.row(_).isBreakpointSet = !1), (ne = !0));
												}
											}),
											ie.changed?.forEach((ee) => {
												if (ee instanceof M.$X3) {
													const _ = this.mb(ee.instructionReference, ee.offset);
													_ >= 0 &&
														this.c.row(_).isBreakpointEnabled !== ee.enabled &&
														((this.c.row(_).isBreakpointEnabled = ee.enabled),
														(ne = !0));
												}
											}),
											(this.j = this.eb.getModel().getInstructionBreakpoints());
										for (const ee of this.j) this.kb(ee.instructionReference);
										ne && this.f.fire();
									}
								}),
							),
							this.D(
								this.eb.onDidChangeState((ie) => {
									(ie === D.State.Running || ie === D.State.Stopped) &&
										this.g !== D.State.Running &&
										this.g !== D.State.Stopped &&
										(this.pb(),
										(this.m =
											this.cb.getValue(
												"debug",
											).disassemblyView.showSourceCode)),
										(this.g = ie),
										this.f.fire();
								}),
							);
					}
					layout(K) {
						this.c?.layout(K.height);
					}
					async goToInstructionAndOffset(K, J, W) {
						let X = this.u.get(K);
						X === void 0 &&
							(await this.lb(K, 0, -O.a, O.a * 2), (X = this.u.get(K))),
							X && this.hb(X + BigInt(J), W);
					}
					getReferenceAddress(K) {
						return this.u.get(K);
					}
					hb(K, J) {
						if (!this.c || !K) return !1;
						const W = this.nb(K);
						return W >= 0
							? (this.c.reveal(W),
								J && (this.c.domFocus(), this.c.setFocus([W])),
								!0)
							: !1;
					}
					async ib(K) {
						const J = this.c?.row(0);
						return J
							? this.lb(
									J.instructionReference,
									J.instructionReferenceOffset,
									J.instructionOffset - K,
									K,
								)
							: 0;
					}
					async jb(K) {
						const J = this.c?.row(this.c?.length - 1);
						return J
							? this.lb(
									J.instructionReference,
									J.instructionReferenceOffset,
									J.instructionOffset + 1,
									K,
								)
							: 0;
					}
					async kb(K) {
						if (this.u.has(K)) return !0;
						const J = await this.debugSession?.disassemble(K, 0, 0, 1);
						if (J && J.length > 0)
							try {
								return this.u.set(K, BigInt(J[0].address)), !0;
							} catch {
								return !1;
							}
						return !1;
					}
					async lb(K, J, W, X) {
						const Y = this.debugSession,
							ie = await Y?.disassemble(K, J, W, X);
						if (
							(!this.u.has(K) && W !== 0 && (await this.lb(K, 0, 0, O.a)),
							Y && ie && this.c)
						) {
							const ne = [];
							let ee, _;
							for (let fe = 0; fe < ie.length; fe++) {
								const me = ie[fe],
									ve = W + fe;
								if (
									(me.location && ((ee = me.location), (_ = void 0)), me.line)
								) {
									const Ce = {
										startLineNumber: me.line,
										startColumn: me.column ?? 0,
										endLineNumber: me.endLine ?? me.line,
										endColumn: me.endColumn ?? 0,
									};
									c.$iL.equalsRange(Ce, _ ?? null) ||
										((_ = Ce), (me.location = ee));
								}
								let ge;
								try {
									ge = BigInt(me.address);
								} catch {
									console.error(
										`Could not parse disassembly address ${me.address} (in ${JSON.stringify(me)})`,
									);
									continue;
								}
								const be = {
									allowBreakpoint: !0,
									isBreakpointSet: !1,
									isBreakpointEnabled: !1,
									instructionReference: K,
									instructionReferenceOffset: J,
									instructionOffset: ve,
									instruction: me,
									address: ge,
								};
								ne.push(be), J === 0 && ve === 0 && this.u.set(K, ge);
							}
							if (ne.length === 0) return 0;
							const te = this.u.get(K),
								Q = this.j.map((fe) => {
									const me = this.u.get(fe.instructionReference);
									if (me)
										return {
											enabled: fe.enabled,
											address: me + BigInt(fe.offset || 0),
										};
								});
							if (te !== void 0)
								for (const fe of ne) {
									const me = Q.find((ve) => ve?.address === fe.address);
									me &&
										((fe.isBreakpointSet = !0),
										(fe.isBreakpointEnabled = me.enabled));
								}
							const Z = this.c;
							Z.length === 1 && this.c.row(0) === z && Z.splice(0, 1);
							const se = ne[0].address,
								re = ne[ne.length - 1].address,
								le = (0, w.$Bb)(Z.length, (fe) =>
									Number(Z.row(fe).address - se),
								),
								oe = le < 0 ? ~le : le,
								ae = (0, w.$Bb)(Z.length, (fe) =>
									Number(Z.row(fe).address - re),
								),
								$e = (ae < 0 ? ~ae : ae + 1) - oe;
							let ye;
							for (let fe = oe - 1; fe >= 0; fe--) {
								const { instruction: me } = Z.row(fe);
								if (me.location && me.line !== void 0) {
									ye = me;
									break;
								}
							}
							const ue = (fe) =>
								fe.line !== void 0 &&
								fe.location !== void 0 &&
								(!ye ||
									!(0, A.$x3)(fe.location, ye.location) ||
									fe.line !== ye.line);
							for (const fe of ne)
								ue(fe.instruction) &&
									((fe.showSourceLocation = !0), (ye = fe.instruction));
							return Z.splice(oe, $e, ne), ne.length - $e;
						}
						return 0;
					}
					mb(K, J) {
						const W = this.u.get(K);
						return W === void 0 ? -1 : this.nb(W + BigInt(J));
					}
					nb(K) {
						const J = this.c;
						return J && J.length > 0
							? (0, w.$Bb)(J.length, (W) => {
									const X = J.row(W);
									return Number(X.address - K);
								})
							: -1;
					}
					ob(K, J) {
						this.c &&
							((this.r = !0),
							this.pb(),
							(this.j = this.eb.getModel().getInstructionBreakpoints()),
							this.lb(K, J, -O.a * 4, O.a * 8).then(() => {
								if (this.c.length > 0) {
									const W = Math.floor(this.c.length / 2);
									this.c.reveal(W, 0.5),
										this.c.domFocus(),
										this.c.setFocus([W]);
								}
								this.r = !1;
							}));
					}
					pb() {
						this.u.clear(), this.c?.splice(0, this.c.length, [z]);
					}
				};
				(e.$jGc = F),
					(e.$jGc =
						F =
						O =
							Ne(
								[
									j(1, v.$km),
									j(2, I.$iP),
									j(3, $.$lq),
									j(4, o.$gj),
									j(5, s.$Li),
									j(6, D.$75),
								],
								F,
							));
				let x = class {
					static {
						B = this;
					}
					static {
						this.TEMPLATE_ID = "breakpoint";
					}
					constructor(K, J) {
						(this.g = K),
							(this.h = J),
							(this.templateId = B.TEMPLATE_ID),
							(this.a = "codicon-" + L.$8Jb.regular.id),
							(this.b = "codicon-" + L.$8Jb.disabled.id),
							(this.c = "codicon-" + L.$aKb.id),
							(this.d = "codicon-" + L.$dKb.id),
							(this.f = "codicon-" + L.$eKb.id);
					}
					renderTemplate(K) {
						K.style.alignSelf = "flex-end";
						const J = (0, i.$fhb)(K, (0, i.$)(".codicon"));
						(J.style.display = "flex"),
							(J.style.alignItems = "center"),
							(J.style.justifyContent = "center"),
							(J.style.height = this.g.fontInfo.lineHeight + "px");
						const W = { element: void 0 },
							X = [
								this.g.onDidChangeStackFrame(() => this.j(J, W.element)),
								(0, i.$$fb)(K, "mouseover", () => {
									W.element?.allowBreakpoint && J.classList.add(this.c);
								}),
								(0, i.$$fb)(K, "mouseout", () => {
									W.element?.allowBreakpoint && J.classList.remove(this.c);
								}),
								(0, i.$$fb)(K, "click", () => {
									if (W.element?.allowBreakpoint) {
										J.classList.add(this.c);
										const Y = W.element.instructionReference,
											ie = Number(
												W.element.address - this.g.getReferenceAddress(Y),
											);
										W.element.isBreakpointSet
											? this.h.removeInstructionBreakpoints(Y, ie)
											: W.element.allowBreakpoint &&
												!W.element.isBreakpointSet &&
												this.h.addInstructionBreakpoint({
													instructionReference: Y,
													offset: ie,
													address: W.element.address,
													canPersist: !1,
												});
									}
								}),
							];
						return { currentElement: W, icon: J, disposables: X };
					}
					renderElement(K, J, W, X) {
						(W.currentElement.element = K), this.j(W.icon, K);
					}
					disposeTemplate(K) {
						(0, C.$Vc)(K.disposables), (K.disposables = []);
					}
					j(K, J) {
						J?.address === this.g.focusedCurrentInstructionAddress
							? K.classList.add(this.d)
							: J?.address === this.g.focusedInstructionAddress
								? K.classList.add(this.f)
								: (K.classList.remove(this.d), K.classList.remove(this.f)),
							K.classList.remove(this.c),
							J?.isBreakpointSet
								? J.isBreakpointEnabled
									? (K.classList.add(this.a), K.classList.remove(this.b))
									: (K.classList.remove(this.a), K.classList.add(this.b))
								: (K.classList.remove(this.a), K.classList.remove(this.b));
					}
				};
				x = B = Ne([j(1, D.$75)], x);
				let H = class extends C.$1c {
					static {
						U = this;
					}
					static {
						this.TEMPLATE_ID = "instruction";
					}
					static {
						this.a = 25;
					}
					static {
						this.b = 30;
					}
					constructor(K, J, W, X, Y, ie) {
						super(),
							(this.g = K),
							(this.h = W),
							(this.j = X),
							(this.m = Y),
							(this.n = ie),
							(this.templateId = U.TEMPLATE_ID),
							(this.c = J.getColorTheme().getColor(k.$cGc)),
							(this.f = J.getColorTheme().getColor(k.$dGc)),
							this.D(
								J.onDidColorThemeChange((ne) => {
									(this.c = ne.getColor(k.$cGc)),
										(this.f = ne.getColor(k.$dGc));
								}),
							);
					}
					renderTemplate(K) {
						const J = (0, i.$fhb)(K, (0, i.$)(".sourcecode")),
							W = (0, i.$fhb)(K, (0, i.$)(".instruction"));
						this.w(J), this.w(W);
						const X = { element: void 0 },
							Y = [],
							ie = [
								this.g.onDidChangeStackFrame(() => this.r(W, J, X.element)),
								(0, i.$$fb)(J, "dblclick", () =>
									this.t(X.element?.instruction),
								),
							];
						return {
							currentElement: X,
							instruction: W,
							sourcecode: J,
							cellDisposable: Y,
							disposables: ie,
						};
					}
					renderElement(K, J, W, X) {
						this.q(K, J, W, X);
					}
					async q(K, J, W, X) {
						W.currentElement.element = K;
						const Y = K.instruction;
						W.sourcecode.innerText = "";
						const ie = new n.$KL(1e3);
						if (
							this.g.isSourceCodeRender &&
							K.showSourceLocation &&
							Y.location?.path &&
							Y.line !== void 0
						) {
							const ee = this.u(Y);
							if (ee) {
								let _;
								const te = new n.$KL(1e4),
									Q = await this.j.createModelReference(ee);
								if (W.currentElement.element !== K) return;
								if (
									((_ = Q.object.textEditorModel),
									W.cellDisposable.push(Q),
									_ && W.currentElement.element === K)
								) {
									let Z = Y.line;
									for (; Z && Z >= 1 && Z <= _.getLineCount(); ) {
										const se = _.getLineContent(Z);
										if (
											(te.appendString(`  ${Z}: `),
											te.appendString(
												se +
													`
`,
											),
											Y.endLine && Z < Y.endLine)
										) {
											Z++;
											continue;
										}
										break;
									}
									W.sourcecode.innerText = te.build();
								}
							}
						}
						let ne = 10;
						if (Y.address !== "-1") {
							ie.appendString(Y.address),
								Y.address.length < U.a && (ne = U.a - Y.address.length);
							for (let ee = 0; ee < ne; ee++) ie.appendString(" ");
						}
						if (Y.instructionBytes) {
							ie.appendString(Y.instructionBytes),
								(ne = 10),
								Y.instructionBytes.length < U.b &&
									(ne = U.b - Y.instructionBytes.length);
							for (let ee = 0; ee < ne; ee++) ie.appendString(" ");
						}
						ie.appendString(Y.instruction),
							(W.instruction.innerText = ie.build()),
							this.r(W.instruction, W.sourcecode, K);
					}
					disposeElement(K, J, W, X) {
						(0, C.$Vc)(W.cellDisposable), (W.cellDisposable = []);
					}
					disposeTemplate(K) {
						(0, C.$Vc)(K.disposables), (K.disposables = []);
					}
					r(K, J, W) {
						W && this.g.currentInstructionAddresses.includes(W.address)
							? (K.style.background = this.c?.toString() || "transparent")
							: W?.address === this.g.focusedInstructionAddress
								? (K.style.background = this.f?.toString() || "transparent")
								: (K.style.background = "transparent");
					}
					t(K) {
						if (K) {
							const J = this.u(K),
								W = K.endLine
									? {
											startLineNumber: K.line,
											endLineNumber: K.endLine,
											startColumn: K.column || 1,
											endColumn:
												K.endColumn || m.Constants.MAX_SAFE_SMALL_INTEGER,
										}
									: {
											startLineNumber: K.line,
											endLineNumber: K.line,
											startColumn: K.column || 1,
											endColumn:
												K.endColumn || m.Constants.MAX_SAFE_SMALL_INTEGER,
										};
							this.h.openEditor({
								resource: J,
								description: (0, p.localize)(5665, null),
								options: {
									preserveFocus: !1,
									selection: W,
									revealIfOpened: !0,
									selectionRevealType:
										b.TextEditorSelectionRevealType.CenterIfOutsideViewport,
									pinned: !1,
								},
							});
						}
					}
					u(K) {
						const J = K.location.path;
						return J && (0, A.$s3)(J)
							? this.m.asCanonicalUri(r.URI.parse(J))
							: J && (0, d.$nc)(J)
								? this.m.asCanonicalUri(r.URI.file(J))
								: (0, N.$A3)(
										K.location,
										K.location.path,
										this.g.debugSession.getId(),
										this.m,
										this.n,
									);
					}
					w(K) {
						(0, u.$jsb)(K, this.g.fontInfo), (K.style.whiteSpace = "pre");
					}
				};
				H = U = Ne(
					[j(1, I.$iP), j(2, R.$IY), j(3, g.$MO), j(4, T.$Vl), j(5, y.$ik)],
					H,
				);
				class q {
					getWidgetAriaLabel() {
						return (0, p.localize)(5666, null);
					}
					getAriaLabel(K) {
						let J = "";
						const W = K.instruction;
						return (
							W.address !== "-1" &&
								(J += `${(0, p.localize)(5667, null)}: ${W.address}`),
							W.instructionBytes &&
								(J += `, ${(0, p.localize)(5668, null)}: ${W.instructionBytes}`),
							(J += `, ${(0, p.localize)(5669, null)}: ${W.instruction}`),
							J
						);
					}
				}
				let V = class {
					constructor(K, J, W) {
						W.bufferChangeEvents(() => {
							this.c = D.$W5.bindTo(W);
						});
						const X = () => {
							this.b && (this.b.dispose(), (this.b = void 0));
							const Y = K.activeTextEditorControl;
							if ((0, a.$0sb)(Y)) {
								const ie = Y.getModel()?.getLanguageId();
								this.c?.set(
									!!ie &&
										J.getAdapterManager().someDebuggerInterestedInLanguage(ie),
								),
									(this.b = Y.onDidChangeModelLanguage((ne) => {
										this.c?.set(
											J.getAdapterManager().someDebuggerInterestedInLanguage(
												ne.newLanguage,
											),
										);
									}));
							} else this.c?.set(!1);
						};
						X(), (this.a = K.onDidActiveEditorChange(X));
					}
					dispose() {
						this.a.dispose(), this.b?.dispose();
					}
				};
				(e.$kGc = V),
					(e.$kGc = V = Ne([j(0, R.$IY), j(1, D.$75), j(2, f.$6j)], V));
			},
		),
		define(
			de[3682],
			he([1, 0, 112, 3, 34, 91, 10, 300]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qRc = void 0);
				let m = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.debugWatchAccessibilityAnnouncer";
					}
					constructor(u, a, h, c) {
						super(),
							(this.b = u),
							(this.c = a),
							(this.f = h),
							(this.g = c),
							(this.a = this.D(new i.$2c())),
							this.h(),
							this.D(
								c.onDidChangeConfiguration((n) => {
									n.affectsConfiguration(
										"accessibility.debugWatchVariableAnnouncements",
									) && this.h();
								}),
							);
					}
					h() {
						this.g.getValue("accessibility.debugWatchVariableAnnouncements") &&
						!this.a.value
							? (this.a.value = this.b
									.getModel()
									.onDidChangeWatchExpressionValue((a) => {
										!a ||
											a.value === d.$J3.DEFAULT_VALUE ||
											(this.f.alert(`${a.name} = ${a.value}`),
											this.c.trace(
												`debugAccessibilityAnnouncerValueChanged ${a.name} ${a.value}`,
											));
									}))
							: this.a.clear();
					}
				};
				(e.$qRc = m),
					(e.$qRc = m =
						Ne([j(0, t.$75), j(1, w.$ik), j(2, E.$XK), j(3, C.$gj)], m));
			},
		),
		define(
			de[3683],
			he([1, 0, 3, 77, 9, 34, 21, 68, 300, 85]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$B3 = void 0);
				const u = "debug.breakpoint",
					a = "debug.functionbreakpoint",
					h = "debug.databreakpoint",
					c = "debug.exceptionbreakpoint",
					n = "debug.watchexpressions",
					g = "debug.chosenenvironment",
					p = "debug.uxstate";
				let o = class extends t.$1c {
					constructor(b, s, l, y) {
						super(),
							(this.a = b),
							(this.b = s),
							(this.c = l),
							(this.f = y),
							(this.breakpoints = (0, i.observableValue)(this, this.g())),
							(this.functionBreakpoints = (0, i.observableValue)(
								this,
								this.h(),
							)),
							(this.exceptionBreakpoints = (0, i.observableValue)(
								this,
								this.j(),
							)),
							(this.dataBreakpoints = (0, i.observableValue)(this, this.m())),
							(this.watchExpressions = (0, i.observableValue)(this, this.n())),
							this.D(
								b.onDidChangeValue(
									C.StorageScope.WORKSPACE,
									void 0,
									this.B,
								)(($) => {
									if ($.external)
										switch ($.key) {
											case u:
												return this.breakpoints.set(this.g(), void 0);
											case a:
												return this.functionBreakpoints.set(this.h(), void 0);
											case c:
												return this.exceptionBreakpoints.set(this.j(), void 0);
											case h:
												return this.dataBreakpoints.set(this.m(), void 0);
											case n:
												return this.watchExpressions.set(this.n(), void 0);
										}
								}),
							);
					}
					loadDebugUxState() {
						return this.a.get(p, C.StorageScope.WORKSPACE, "default");
					}
					storeDebugUxState(b) {
						this.a.store(
							p,
							b,
							C.StorageScope.WORKSPACE,
							C.StorageTarget.MACHINE,
						);
					}
					g() {
						let b;
						try {
							b = JSON.parse(this.a.get(u, C.StorageScope.WORKSPACE, "[]")).map(
								(s) => (
									(s.uri = w.URI.revive(s.uri)),
									new m.$T3(s, this.b, this.c, this.f, s.id)
								),
							);
						} catch {}
						return b || [];
					}
					h() {
						let b;
						try {
							b = JSON.parse(this.a.get(a, C.StorageScope.WORKSPACE, "[]")).map(
								(s) => new m.$U3(s, s.id),
							);
						} catch {}
						return b || [];
					}
					j() {
						let b;
						try {
							b = JSON.parse(this.a.get(c, C.StorageScope.WORKSPACE, "[]")).map(
								(s) => new m.$W3(s, s.id),
							);
						} catch {}
						return b || [];
					}
					m() {
						let b;
						try {
							b = JSON.parse(this.a.get(h, C.StorageScope.WORKSPACE, "[]")).map(
								(s) => new m.$V3(s, s.id),
							);
						} catch {}
						return b || [];
					}
					n() {
						let b;
						try {
							b = JSON.parse(this.a.get(n, C.StorageScope.WORKSPACE, "[]")).map(
								(s) => new m.$J3(s.name, s.id),
							);
						} catch {}
						return b || [];
					}
					loadChosenEnvironments() {
						return JSON.parse(this.a.get(g, C.StorageScope.WORKSPACE, "{}"));
					}
					storeChosenEnvironments(b) {
						this.a.store(
							g,
							JSON.stringify(b),
							C.StorageScope.WORKSPACE,
							C.StorageTarget.MACHINE,
						);
					}
					storeWatchExpressions(b) {
						b.length
							? this.a.store(
									n,
									JSON.stringify(
										b.map((s) => ({ name: s.name, id: s.getId() })),
									),
									C.StorageScope.WORKSPACE,
									C.StorageTarget.MACHINE,
								)
							: this.a.remove(n, C.StorageScope.WORKSPACE);
					}
					storeBreakpoints(b) {
						const s = b.getBreakpoints();
						s.length
							? this.a.store(
									u,
									JSON.stringify(s),
									C.StorageScope.WORKSPACE,
									C.StorageTarget.MACHINE,
								)
							: this.a.remove(u, C.StorageScope.WORKSPACE);
						const l = b.getFunctionBreakpoints();
						l.length
							? this.a.store(
									a,
									JSON.stringify(l),
									C.StorageScope.WORKSPACE,
									C.StorageTarget.MACHINE,
								)
							: this.a.remove(a, C.StorageScope.WORKSPACE);
						const y = b.getDataBreakpoints().filter((v) => v.canPersist);
						y.length
							? this.a.store(
									h,
									JSON.stringify(y),
									C.StorageScope.WORKSPACE,
									C.StorageTarget.MACHINE,
								)
							: this.a.remove(h, C.StorageScope.WORKSPACE);
						const $ = b.getExceptionBreakpoints();
						$.length
							? this.a.store(
									c,
									JSON.stringify($),
									C.StorageScope.WORKSPACE,
									C.StorageTarget.MACHINE,
								)
							: this.a.remove(c, C.StorageScope.WORKSPACE);
					}
				};
				(e.$B3 = o),
					(e.$B3 = o =
						Ne([j(0, C.$lq), j(1, r.$kZ), j(2, d.$Vl), j(3, E.$ik)], o));
			},
		),
		define(
			de[1039],
			he([1, 0, 3, 28, 8, 109, 5, 34, 112, 1730, 300, 53, 175]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$F3 = e.$E3 = e.$D3 = void 0),
					(e.$D3 = (0, C.$Mi)("debugVisualizerService"));
				class c {
					get name() {
						return this.b.name;
					}
					get iconPath() {
						return this.b.iconPath;
					}
					get iconClass() {
						return this.b.iconClass;
					}
					constructor(b, s) {
						(this.a = b), (this.b = s);
					}
					async resolve(b) {
						return (this.b.visualization ??=
							await this.a.resolveDebugVisualizer(this.b, b));
					}
					async execute() {
						await this.a.executeDebugVisualizerCommand(this.b.id);
					}
				}
				e.$E3 = c;
				const n = { object: [], dispose: () => {} };
				let g = class {
					constructor(b, s, l) {
						(this.g = b),
							(this.h = s),
							(this.i = l),
							(this.a = new Map()),
							(this.b = new Map()),
							(this.d = new Map()),
							(this.f = []),
							o.setHandler((y, { added: $, removed: v }) => {
								(this.f = this.f.filter(
									(S) =>
										!v.some((I) =>
											E.$Gn.equals(I.description.identifier, S.extensionId),
										),
								)),
									$.forEach((S) => this.k(S.description));
							});
					}
					async getApplicableFor(b, s) {
						if (!(b instanceof u.$K3)) return n;
						const l = b.getThreadId();
						if (l === void 0) return n;
						const y = this.j(l, b),
							$ = (0, r.$C3)(this.g, b, [
								[m.$O5.key, b.name],
								[m.$L5.key, b.value],
								[m.$M5.key, b.type],
							]),
							v = await Promise.all(
								this.f.map(async (I) => {
									if (!$.contextMatchesRules(I.expr)) return;
									let T = this.d.get(I.id);
									if (
										(T ||
											((T = this.h.activateByEvent(
												`onDebugVisualizer:${I.id}`,
											)),
											this.d.set(I.id, T)),
										await T,
										s.isCancellationRequested)
									)
										return;
									const P = this.a.get(p(I.extensionId, I.id));
									return (
										P && {
											handle: P,
											result: await P.provideDebugVisualizers(y, s),
										}
									);
								}),
							),
							S = {
								object: v
									.filter(i.$tg)
									.flatMap((I) => I.result.map((T) => new c(I.handle, T))),
								dispose: () => {
									for (const I of v)
										I?.handle.disposeDebugVisualizers(
											I.result.map((T) => T.id),
										);
								},
							};
						return s.isCancellationRequested && S.dispose(), S;
					}
					register(b) {
						const s = p(b.extensionId, b.id);
						return this.a.set(s, b), (0, t.$Yc)(() => this.a.delete(s));
					}
					registerTree(b, s) {
						return this.b.set(b, s), (0, t.$Yc)(() => this.b.delete(b));
					}
					async getVisualizedNodeFor(b, s) {
						if (!(s instanceof u.$K3)) return;
						const l = s.getThreadId();
						if (l === void 0) return;
						const y = this.b.get(b);
						if (y)
							try {
								const $ = await y.getTreeItem(this.j(l, s));
								return $ ? new u.$I3(this, b, $, s) : void 0;
							} catch ($) {
								this.i.warn("Failed to get visualized node", $);
								return;
							}
					}
					async getVisualizedChildren(b, s) {
						return ((await this.b.get(b)?.getChildren(s)) || []).map(
							(y) => new u.$I3(this, b, y, void 0),
						);
					}
					async editTreeItem(b, s, l) {
						const y = await this.b.get(b)?.editItem?.(s.id, l);
						y && Object.assign(s, y);
					}
					j(b, s) {
						const l = {
							sessionId: s.getSession()?.getId() || "",
							containerId: s.parent instanceof u.$K3 ? s.reference : void 0,
							threadId: b,
							variable: {
								name: s.name,
								value: s.value,
								type: s.type,
								evaluateName: s.evaluateName,
								variablesReference: s.reference || 0,
								indexedVariables: s.indexedVariables,
								memoryReference: s.memoryReference,
								namedVariables: s.namedVariables,
								presentationHint: s.presentationHint,
							},
						};
						for (let y = s; y instanceof u.$K3; y = y.parent)
							y.parent instanceof u.$L3 &&
								(l.frameId = y.parent.stackFrame.frameId);
						return l;
					}
					k(b) {
						const s = b.contributes?.debugVisualizers;
						if (s instanceof Array)
							for (const { when: l, id: y } of s)
								try {
									const $ = w.$Kj.deserialize(l);
									$ &&
										this.f.push({ expr: $, id: y, extensionId: b.identifier });
								} catch ($) {
									this.i.error(
										`Error processing debug visualizer registration from extension '${b.identifier.value}'`,
										$,
									);
								}
					}
				};
				(e.$F3 = g),
					(e.$F3 = g = Ne([j(0, w.$6j), j(1, a.$q2), j(2, d.$ik)], g));
				const p = (f, b) => `${E.$Gn.toKey(f)}\0${b}`,
					o = h.$n2.registerExtensionPoint({
						extensionPoint: "debugVisualizers",
						jsonSchema: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: {
										type: "string",
										description: "Name of the debug visualizer",
									},
									when: {
										type: "string",
										description:
											"Condition when the debug visualizer is applicable",
									},
								},
								required: ["id", "when"],
							},
						},
						activationEventsGenerator: (f, b) => {
							for (const s of f) s.id && b.push(`onDebugVisualizer:${s.id}`);
						},
					});
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3684],
		he([1, 0, 3, 9, 112, 88, 101, 111, 3048, 396, 29, 1039, 109, 6, 28]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Xmc = void 0),
				(d = xi(d));
			let g = class {
				constructor(f, b, s) {
					(this.k = b),
						(this.m = s),
						(this.b = new t.$Zc()),
						(this.d = 1),
						(this.i = new Map()),
						(this.j = new Map()),
						(this.a = f.getProxy(E.$mbb.ExtHostDebugService));
					const l = new t.$0c();
					this.b.add(l),
						this.b.add(
							b.onDidNewSession(($) => {
								this.a.$acceptDebugSessionStarted(this.getSessionDto($)),
									l.get($).add(
										$.onDidChangeName((S) => {
											this.a.$acceptDebugSessionNameChanged(
												this.getSessionDto($),
												S,
											);
										}),
									);
							}),
						),
						this.b.add(
							b.onWillNewSession(($) => {
								let v = l.get($);
								v || ((v = new t.$Zc()), l.set($, v)),
									v.add(
										$.onDidCustomEvent((S) =>
											this.a.$acceptDebugSessionCustomEvent(
												this.getSessionDto($),
												S,
											),
										),
									);
							}),
						),
						this.b.add(
							b.onDidEndSession(({ session: $, restart: v }) => {
								this.a.$acceptDebugSessionTerminated(this.getSessionDto($)),
									this.h.delete($.getId()),
									v || l.deleteAndDispose($);
								for (const [S, I] of this.c)
									I.session === $ && this.c.delete(S);
							}),
						),
						this.b.add(
							b.getViewModel().onDidFocusSession(($) => {
								this.a.$acceptDebugSessionActiveChanged(this.getSessionDto($));
							}),
						),
						this.b.add(
							(0, t.$Yc)(() => {
								for (const [$, v] of this.c)
									v.fireError($, new Error("Extension host shut down"));
							}),
						),
						(this.c = new Map()),
						(this.f = new Map()),
						(this.g = new Map()),
						(this.h = new Set());
					const y = this.k.getViewModel();
					this.b.add(
						c.Event.any(
							y.onDidFocusStackFrame,
							y.onDidFocusThread,
						)(() => {
							const $ = y.focusedStackFrame,
								v = y.focusedThread;
							$
								? this.a.$acceptStackFrameFocus({
										kind: "stackFrame",
										threadId: $.thread.threadId,
										frameId: $.frameId,
										sessionId: $.thread.session.getId(),
									})
								: v
									? this.a.$acceptStackFrameFocus({
											kind: "thread",
											threadId: v.threadId,
											sessionId: v.session.getId(),
										})
									: this.a.$acceptStackFrameFocus(void 0);
						}),
					),
						this.n();
				}
				$registerDebugVisualizerTree(f, b) {
					this.m.registerTree(f, {
						disposeItem: (s) => this.a.$disposeVisualizedTree(s),
						getChildren: (s) => this.a.$getVisualizerTreeItemChildren(f, s),
						getTreeItem: (s) => this.a.$getVisualizerTreeItem(f, s),
						editItem: b
							? (s, l) => this.a.$editVisualizerTreeItem(s, l)
							: void 0,
					});
				}
				$unregisterDebugVisualizerTree(f) {
					this.j.get(f)?.dispose(), this.j.delete(f);
				}
				$registerDebugVisualizer(f, b) {
					const s = this.m.register({
						extensionId: new h.$Gn(f),
						id: b,
						disposeDebugVisualizers: (l) => this.a.$disposeDebugVisualizers(l),
						executeDebugVisualizerCommand: (l) =>
							this.a.$executeDebugVisualizerCommand(l),
						provideDebugVisualizers: (l, y) =>
							this.a
								.$provideDebugVisualizers(f, b, l, y)
								.then(($) => $.map(w.IDebugVisualization.deserialize)),
						resolveDebugVisualizer: (l, y) =>
							this.a.$resolveDebugVisualizer(l.id, y),
					});
					this.i.set(`${f}/${b}`, s);
				}
				$unregisterDebugVisualizer(f, b) {
					const s = `${f}/${b}`;
					this.i.get(s)?.dispose(), this.i.delete(s);
				}
				n() {
					this.b.add(
						this.k.getModel().onDidChangeBreakpoints((l) => {
							if (l && !l.sessionOnly) {
								const y = {};
								l.added && (y.added = this.q(l.added)),
									l.removed && (y.removed = l.removed.map(($) => $.getId())),
									l.changed && (y.changed = this.q(l.changed)),
									(y.added || y.removed || y.changed) &&
										this.a.$acceptBreakpointsDelta(y);
							}
						}),
					);
					const f = this.k.getModel().getBreakpoints(),
						b = this.k.getModel().getFunctionBreakpoints(),
						s = this.k.getModel().getDataBreakpoints();
					(f.length > 0 || b.length > 0) &&
						this.a.$acceptBreakpointsDelta({
							added: this.q(f).concat(this.q(b)).concat(this.q(s)),
						});
				}
				dispose() {
					this.b.dispose();
				}
				createDebugAdapter(f) {
					const b = this.d++,
						s = new p(this, b, this.a, f);
					return this.c.set(b, s), s;
				}
				substituteVariables(f, b) {
					return Promise.resolve(
						this.a.$substituteVariables(f ? f.uri : void 0, b),
					);
				}
				runInTerminal(f, b) {
					return this.a.$runInTerminal(f, b);
				}
				$registerDebugTypes(f) {
					this.b.add(
						this.k.getAdapterManager().registerDebugAdapterFactory(f, this),
					);
				}
				$registerBreakpoints(f) {
					for (const b of f)
						if (b.type === "sourceMulti") {
							const s = b.lines.map((l) => ({
								id: l.id,
								enabled: l.enabled,
								lineNumber: l.line + 1,
								column: l.character > 0 ? l.character + 1 : void 0,
								condition: l.condition,
								hitCondition: l.hitCondition,
								logMessage: l.logMessage,
								mode: l.mode,
							}));
							this.k.addBreakpoints(i.URI.revive(b.uri), s);
						} else
							b.type === "function"
								? this.k.addFunctionBreakpoint(
										{
											name: b.functionName,
											mode: b.mode,
											condition: b.condition,
											hitCondition: b.hitCondition,
											enabled: b.enabled,
											logMessage: b.logMessage,
										},
										b.id,
									)
								: b.type === "data" &&
									this.k.addDataBreakpoint({
										description: b.label,
										src: {
											type: w.DataBreakpointSetType.Variable,
											dataId: b.dataId,
										},
										canPersist: b.canPersist,
										accessTypes: b.accessTypes,
										accessType: b.accessType,
										mode: b.mode,
									});
					return Promise.resolve();
				}
				$unregisterBreakpoints(f, b, s) {
					return (
						f.forEach((l) => this.k.removeBreakpoints(l)),
						b.forEach((l) => this.k.removeFunctionBreakpoints(l)),
						s.forEach((l) => this.k.removeDataBreakpoints(l)),
						Promise.resolve()
					);
				}
				$registerDebugConfigurationProvider(f, b, s, l, y, $) {
					const v = { type: f, triggerKind: b };
					return (
						s &&
							(v.provideDebugConfigurations = (S, I) =>
								this.a.$provideDebugConfigurations($, S, I)),
						l &&
							(v.resolveDebugConfiguration = (S, I, T) =>
								this.a.$resolveDebugConfiguration($, S, I, T)),
						y &&
							(v.resolveDebugConfigurationWithSubstitutedVariables = (
								S,
								I,
								T,
							) =>
								this.a.$resolveDebugConfigurationWithSubstitutedVariables(
									$,
									S,
									I,
									T,
								)),
						this.f.set($, v),
						this.b.add(
							this.k
								.getConfigurationManager()
								.registerDebugConfigurationProvider(v),
						),
						Promise.resolve(void 0)
					);
				}
				$unregisterDebugConfigurationProvider(f) {
					const b = this.f.get(f);
					b &&
						(this.f.delete(f),
						this.k
							.getConfigurationManager()
							.unregisterDebugConfigurationProvider(b));
				}
				$registerDebugAdapterDescriptorFactory(f, b) {
					const s = {
						type: f,
						createDebugAdapterDescriptor: (l) =>
							Promise.resolve(
								this.a.$provideDebugAdapter(b, this.getSessionDto(l)),
							),
					};
					return (
						this.g.set(b, s),
						this.b.add(
							this.k
								.getAdapterManager()
								.registerDebugAdapterDescriptorFactory(s),
						),
						Promise.resolve(void 0)
					);
				}
				$unregisterDebugAdapterDescriptorFactory(f) {
					const b = this.g.get(f);
					b &&
						(this.g.delete(f),
						this.k
							.getAdapterManager()
							.unregisterDebugAdapterDescriptorFactory(b));
				}
				o(f) {
					if (f) return this.k.getModel().getSession(f, !0);
				}
				async $startDebugging(f, b, s) {
					const l = f ? i.URI.revive(f) : void 0,
						y = this.k.getConfigurationManager().getLaunch(l),
						$ = this.o(s.parentSessionID),
						v =
							typeof s.suppressSaveBeforeStart == "boolean"
								? !s.suppressSaveBeforeStart
								: void 0,
						S = {
							noDebug: s.noDebug,
							parentSession: $,
							lifecycleManagedByParent: s.lifecycleManagedByParent,
							repl: s.repl,
							compact: s.compact,
							compoundRoot: $?.compoundRoot,
							saveBeforeRestart: v,
							testRun: s.testRun,
							suppressDebugStatusbar: s.suppressDebugStatusbar,
							suppressDebugToolbar: s.suppressDebugToolbar,
							suppressDebugView: s.suppressDebugView,
						};
					try {
						return this.k.startDebugging(y, b, S, v);
					} catch (I) {
						throw new u.$fb(
							I && I.message ? I.message : "cannot start debugging",
						);
					}
				}
				$setDebugSessionName(f, b) {
					this.k.getModel().getSession(f)?.setName(b);
				}
				$customDebugAdapterRequest(f, b, s) {
					const l = this.k.getModel().getSession(f, !0);
					return l
						? l
								.customRequest(b, s)
								.then((y) =>
									y && y.success
										? y.body
										: Promise.reject(
												new u.$fb(y ? y.message : "custom request failed"),
											),
								)
						: Promise.reject(new u.$fb("debug session not found"));
				}
				$getDebugProtocolBreakpoint(f, b) {
					const s = this.k.getModel().getSession(f, !0);
					return s
						? Promise.resolve(s.getDebugProtocolBreakpoint(b))
						: Promise.reject(new u.$fb("debug session not found"));
				}
				$stopDebugging(f) {
					if (f) {
						const b = this.k.getModel().getSession(f, !0);
						if (b) return this.k.stopSession(b, (0, r.$n3)(b));
					} else return this.k.stopSession(void 0);
					return Promise.reject(new u.$fb("debug session not found"));
				}
				$appendDebugConsole(f) {
					this.k
						.getViewModel()
						.focusedSession?.appendToRepl({
							output: f,
							sev: d.default.Warning,
						});
				}
				$acceptDAMessage(f, b) {
					this.p(f).acceptMessage((0, r.$u3)(b, !1));
				}
				$acceptDAError(f, b, s, l) {
					this.c.get(f)?.fireError(
						f,
						new Error(`${b}: ${s}
${l}`),
					);
				}
				$acceptDAExit(f, b, s) {
					this.p(f).fireExit(f, b, s);
				}
				p(f) {
					const b = this.c.get(f);
					if (!b) throw new Error("Invalid debug adapter");
					return b;
				}
				$sessionCached(f) {
					this.h.add(f);
				}
				getSessionDto(f) {
					if (f) {
						const b = f.getId();
						return this.h.has(b)
							? b
							: {
									id: b,
									type: f.configuration.type,
									name: f.name,
									folderUri: f.root ? f.root.uri : void 0,
									configuration: f.configuration,
									parent: f.parentSession?.getId(),
								};
					}
				}
				q(f) {
					return f
						.map((b) => {
							if ("name" in b) {
								const s = b;
								return {
									type: "function",
									id: s.getId(),
									enabled: s.enabled,
									condition: s.condition,
									hitCondition: s.hitCondition,
									logMessage: s.logMessage,
									functionName: s.name,
								};
							} else if ("src" in b) {
								const s = b;
								return {
									type: "data",
									id: s.getId(),
									dataId:
										s.src.type === w.DataBreakpointSetType.Variable
											? s.src.dataId
											: s.src.address,
									enabled: s.enabled,
									condition: s.condition,
									hitCondition: s.hitCondition,
									logMessage: s.logMessage,
									accessType: s.accessType,
									label: s.description,
									canPersist: s.canPersist,
								};
							} else if ("uri" in b) {
								const s = b;
								return {
									type: "source",
									id: s.getId(),
									enabled: s.enabled,
									condition: s.condition,
									hitCondition: s.hitCondition,
									logMessage: s.logMessage,
									uri: s.uri,
									line: s.lineNumber > 0 ? s.lineNumber - 1 : 0,
									character:
										typeof s.column == "number" && s.column > 0
											? s.column - 1
											: 0,
								};
							} else return;
						})
						.filter(n.$tg);
				}
			};
			(e.$Xmc = g),
				(e.$Xmc = g =
					Ne(
						[
							(0, C.$tmc)(E.$lbb.MainThreadDebugService),
							j(1, w.$75),
							j(2, a.$D3),
						],
						g,
					));
			class p extends m.$Wmc {
				constructor(f, b, s, l) {
					super(), (this.a = f), (this.b = b), (this.c = s), (this.session = l);
				}
				fireError(f, b) {
					this.n.fire(b);
				}
				fireExit(f, b, s) {
					this.o.fire(b);
				}
				startSession() {
					return Promise.resolve(
						this.c.$startDASession(this.b, this.a.getSessionDto(this.session)),
					);
				}
				sendMessage(f) {
					this.c.$sendDAMessage(this.b, (0, r.$t3)(f, !0));
				}
				async stopSession() {
					return await this.w(), Promise.resolve(this.c.$stopDASession(this.b));
				}
			}
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[843],
		he([1, 0, 6, 111, 28, 47, 4, 300]),
		function (ce, e, t, i, w, E, C, d) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$bIc = e.$aIc = e.$_Hc = e.$$Hc = e.$0Hc = e.$9Hc = e.$8Hc = void 0),
				(i = xi(i)),
				(C = mt(C));
			const m = 1e4;
			let r = 0;
			const u = () => `topReplElement:${r++}`;
			class a {
				constructor(s, l, y, $, v, S) {
					(this.session = s),
						(this.c = l),
						(this.value = y),
						(this.severity = $),
						(this.sourceData = v),
						(this.expression = S),
						(this.a = 1),
						(this.b = new t.$re());
				}
				toString(s = !1) {
					let l = this.value;
					for (let $ = 1; $ < this.count; $++)
						l +=
							(l.endsWith(`
`)
								? ""
								: `
`) + this.value;
					const y =
						this.sourceData && s ? ` ${this.sourceData.source.name}` : "";
					return l + y;
				}
				getId() {
					return this.c;
				}
				getChildren() {
					return this.expression?.getChildren() || Promise.resolve([]);
				}
				set count(s) {
					(this.a = s), this.b.fire();
				}
				get count() {
					return this.a;
				}
				get onDidChangeCount() {
					return this.b.event;
				}
				get hasChildren() {
					return !!this.expression?.hasChildren;
				}
			}
			e.$8Hc = a;
			class h {
				constructor(s, l, y) {
					(this.expression = s),
						(this.severity = l),
						(this.sourceData = y),
						(this.a = (0, E.$9g)()),
						(this.hasChildren = s.hasChildren);
				}
				getChildren() {
					return this.expression.getChildren();
				}
				toString() {
					return this.expression.toString();
				}
				getId() {
					return this.a;
				}
			}
			e.$9Hc = h;
			class c {
				static {
					this.a = 1e3;
				}
				constructor(s, l, y, $, v) {
					(this.b = s),
						(this.name = l),
						(this.valueObj = y),
						(this.sourceData = $),
						(this.annotation = v);
				}
				getId() {
					return this.b;
				}
				get value() {
					return this.valueObj === null
						? "null"
						: Array.isArray(this.valueObj)
							? `Array[${this.valueObj.length}]`
							: (0, w.$ng)(this.valueObj)
								? "Object"
								: (0, w.$lg)(this.valueObj)
									? `"${this.valueObj}"`
									: String(this.valueObj) || "";
				}
				get hasChildren() {
					return (
						(Array.isArray(this.valueObj) && this.valueObj.length > 0) ||
						((0, w.$ng)(this.valueObj) &&
							Object.getOwnPropertyNames(this.valueObj).length > 0)
					);
				}
				evaluateLazy() {
					throw new Error("Method not implemented.");
				}
				getChildren() {
					let s = [];
					return (
						Array.isArray(this.valueObj)
							? (s = this.valueObj
									.slice(0, c.a)
									.map((l, y) => new c(`${this.b}:${y}`, String(y), l)))
							: (0, w.$ng)(this.valueObj) &&
								(s = Object.getOwnPropertyNames(this.valueObj)
									.slice(0, c.a)
									.map((l, y) => new c(`${this.b}:${y}`, l, this.valueObj[l]))),
						Promise.resolve(s)
					);
				}
				toString() {
					return `${this.name}
${this.value}`;
				}
			}
			e.$0Hc = c;
			class n {
				constructor(s) {
					(this.value = s), (this.a = (0, E.$9g)());
				}
				toString() {
					return this.value;
				}
				getId() {
					return this.a;
				}
			}
			e.$$Hc = n;
			class g extends d.$H3 {
				get available() {
					return this.u;
				}
				constructor(s) {
					super(void 0, void 0, 0, (0, E.$9g)()),
						(this.originalExpression = s),
						(this.u = !0);
				}
				async evaluateExpression(s, l, y, $) {
					const v = await super.evaluateExpression(s, l, y, $);
					return (this.u = v), v;
				}
				toString() {
					return `${this.value}`;
				}
			}
			e.$_Hc = g;
			class p {
				static {
					this.COUNTER = 0;
				}
				constructor(s, l, y) {
					(this.name = s),
						(this.autoExpand = l),
						(this.sourceData = y),
						(this.a = []),
						(this.c = !1),
						(this.b = `replGroup:${p.COUNTER++}`);
				}
				get hasChildren() {
					return !0;
				}
				getId() {
					return this.b;
				}
				toString(s = !1) {
					const l =
						s && this.sourceData ? ` ${this.sourceData.source.name}` : "";
					return this.name + l;
				}
				addChild(s) {
					const l = this.a.length ? this.a[this.a.length - 1] : void 0;
					l instanceof p && !l.hasEnded ? l.addChild(s) : this.a.push(s);
				}
				getChildren() {
					return this.a;
				}
				end() {
					const s = this.a.length ? this.a[this.a.length - 1] : void 0;
					s instanceof p && !s.hasEnded ? s.end() : (this.c = !0);
				}
				get hasEnded() {
					return this.c;
				}
			}
			e.$aIc = p;
			function o(b, s) {
				return !b && !s
					? !0
					: b && s
						? b.column === s.column &&
							b.lineNumber === s.lineNumber &&
							b.source.uri.toString() === s.source.uri.toString()
						: !1;
			}
			class f {
				constructor(s) {
					(this.c = s),
						(this.a = []),
						(this.b = new t.$re()),
						(this.onDidChangeElements = this.b.event);
				}
				getReplElements() {
					return this.a;
				}
				async addReplExpression(s, l, y) {
					this.d(new n(y));
					const $ = new g(y);
					await $.evaluateExpression(y, s, l, "repl"), this.d($);
				}
				appendToRepl(s, { output: l, expression: y, sev: $, source: v }) {
					const S = "\x1B[2J",
						I = l.lastIndexOf(S);
					if (
						(I !== -1 &&
							(this.removeReplExpressions(),
							this.appendToRepl(s, {
								output: C.localize(5905, null),
								sev: i.default.Ignore,
							}),
							(l = l.substring(I + S.length))),
						y)
					) {
						this.d(l ? new a(s, u(), l, $, v, y) : new h(y, $, v));
						return;
					}
					const T = this.a.length ? this.a[this.a.length - 1] : void 0;
					if (T instanceof a && T.severity === $) {
						const k = this.c.getValue("debug");
						if (
							T.value === l &&
							o(T.sourceData, v) &&
							k.console.collapseIdenticalLines
						) {
							T.count++;
							return;
						}
						if (
							!T.value.endsWith(`
`) &&
							!T.value.endsWith(`\r
`) &&
							T.count === 1
						) {
							(this.a[this.a.length - 1] = new a(s, u(), T.value + l, $, v)),
								this.b.fire(void 0);
							return;
						}
					}
					const P = new a(s, u(), l, $, v);
					this.d(P);
				}
				startGroup(s, l, y) {
					const $ = new p(s, l, y);
					this.d($);
				}
				endGroup() {
					const s = this.a[this.a.length - 1];
					s instanceof p && s.end();
				}
				d(s) {
					const l = this.a.length ? this.a[this.a.length - 1] : void 0;
					l instanceof p && !l.hasEnded
						? l.addChild(s)
						: (this.a.push(s),
							this.a.length > m && this.a.splice(0, this.a.length - m)),
						this.b.fire(s);
				}
				removeReplExpressions() {
					this.a.length > 0 && ((this.a = []), this.b.fire(void 0));
				}
				clone() {
					const s = new f(this.c);
					return (s.a = this.a.slice()), s;
				}
			}
			e.$bIc = f;
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3685],
		he([
			1, 0, 127, 24, 15, 33, 29, 6, 222, 3, 82, 12, 19, 111, 9, 47, 4, 10, 5,
			34, 40, 62, 32, 68, 25, 60, 3054, 112, 300, 826, 396, 843, 78, 87, 52,
			142, 7, 75, 28, 379, 381, 91,
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
			F,
			x,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$YQc = e.$XQc = void 0),
				(t = mt(t)),
				(a = mt(a)),
				(h = mt(h)),
				(c = xi(c));
			const H = 1500;
			let q = class {
				constructor(
					K,
					J,
					W,
					X,
					Y,
					ie,
					ne,
					ee,
					_,
					te,
					Q,
					Z,
					se,
					re,
					le,
					oe,
					ae,
					pe,
					$e,
					ye,
					ue,
					fe,
				) {
					(this.I = K),
						(this.J = J),
						(this.root = W),
						(this.K = X),
						(this.L = ie),
						(this.M = ne),
						(this.N = ee),
						(this.O = _),
						(this.P = te),
						(this.Q = Q),
						(this.R = Z),
						(this.S = se),
						(this.T = le),
						(this.U = oe),
						(this.V = ae),
						(this.W = pe),
						(this.X = $e),
						(this.Y = ye),
						(this.Z = fe),
						(this.b = !1),
						(this.f = new Map()),
						(this.g = new Map()),
						(this.h = []),
						(this.j = new Map()),
						(this.k = new r.$Zc()),
						(this.l = new r.$Zc()),
						(this.r = []),
						(this.u = this.k.add(new V())),
						(this.w = new d.$re()),
						(this.x = new d.$re()),
						(this.y = new d.$re()),
						(this.z = new d.$re()),
						(this.A = new d.$re()),
						(this.B = new d.$re()),
						(this.C = new d.$re()),
						(this.D = new d.$re()),
						(this.E = new d.$re()),
						(this.G = new d.$re()),
						(this.c = Y || {}),
						(this.parentSession = this.c.parentSession),
						this.hasSeparateRepl()
							? (this.q = new D.$bIc(this.O))
							: (this.q = this.parentSession.q);
					const me = this.l,
						ve = me.add(new r.$2c());
					(ve.value = this.q.onDidChangeElements((Ce) => this.E.fire(Ce))),
						re &&
							me.add(
								re.onWillShutdown(() => {
									this.jb(), (0, r.$Vc)(me);
								}),
							),
						(this.correlatedTestRun = Y?.testRun
							? ue.getResult(Y.testRun.runId)
							: this.parentSession?.correlatedTestRun),
						this.correlatedTestRun &&
							me.add(this.correlatedTestRun.onComplete(() => this.terminate()));
					const ge = this.c.compoundRoot;
					ge && me.add(ge.onDidSessionStop(() => this.terminate())),
						(this.n = new w.$Yh(() => {
							if (
								this.L.getModel()
									.getSessions()
									.some((Ce) => Ce.state === T.State.Stopped) ||
								this.getAllThreads().some((Ce) => Ce.stopped)
							)
								if (typeof this.o == "number") {
									const Ce = this.L.getViewModel().focusedThread;
									if (Ce && Ce.threadId === this.o && !Ce.stopped) {
										const Le = this.getStoppedDetails()?.threadId,
											Fe = typeof Le == "number" ? this.getThread(Le) : void 0;
										this.L.focusStackFrame(void 0, Fe);
									}
								} else {
									const Ce = this.L.getViewModel().focusedSession;
									Ce &&
										Ce.getId() === this.getId() &&
										Ce.state !== T.State.Stopped &&
										this.L.focusStackFrame(void 0);
								}
						}, 800));
					const be = this.c.parentSession;
					be &&
						me.add(
							be.onDidEndAdapter(() => {
								!this.hasSeparateRepl() &&
									this.raw?.isInShutdown === !1 &&
									((this.q = this.q.clone()),
									(ve.value = this.q.onDidChangeElements((Ce) =>
										this.E.fire(Ce),
									)),
									(this.parentSession = void 0));
							}),
						);
				}
				getId() {
					return this.I;
				}
				setSubId(K) {
					this.a = K;
				}
				getMemory(K) {
					return new P.$Q3(K, this);
				}
				get subId() {
					return this.a;
				}
				get configuration() {
					return this.J.resolved;
				}
				get unresolvedConfiguration() {
					return this.J.unresolved;
				}
				get lifecycleManagedByParent() {
					return !!this.c.lifecycleManagedByParent;
				}
				get compact() {
					return !!this.c.compact;
				}
				get saveBeforeRestart() {
					return this.c.saveBeforeRestart ?? !this.c?.parentSession;
				}
				get compoundRoot() {
					return this.c.compoundRoot;
				}
				get suppressDebugStatusbar() {
					return this.c.suppressDebugStatusbar ?? !1;
				}
				get suppressDebugToolbar() {
					return this.c.suppressDebugToolbar ?? !1;
				}
				get suppressDebugView() {
					return this.c.suppressDebugView ?? !1;
				}
				get autoExpandLazyVariables() {
					const K = this.Z.isScreenReaderOptimized(),
						J = this.O.getValue("debug").autoExpandLazyVariables;
					return (J === "auto" && K) || J === "on";
				}
				setConfiguration(K) {
					this.J = K;
				}
				getLabel() {
					return this.Q.getWorkspace().folders.length > 1 && this.root
						? `${this.name} (${h.$jh(this.root.uri)})`
						: this.name;
				}
				setName(K) {
					(this.F = K), this.G.fire(K);
				}
				get name() {
					return this.F || this.configuration.name;
				}
				get state() {
					if (!this.b) return T.State.Initializing;
					if (!this.raw) return T.State.Inactive;
					const K = this.L.getViewModel().focusedThread;
					return K && K.session === this
						? K.stopped
							? T.State.Stopped
							: T.State.Running
						: this.getAllThreads().some((J) => J.stopped)
							? T.State.Stopped
							: T.State.Running;
				}
				get capabilities() {
					return this.raw ? this.raw.capabilities : Object.create(null);
				}
				get onDidChangeState() {
					return this.w.event;
				}
				get onDidEndAdapter() {
					return this.x.event;
				}
				get onDidChangeReplElements() {
					return this.E.event;
				}
				get onDidChangeName() {
					return this.G.event;
				}
				get onDidCustomEvent() {
					return this.z.event;
				}
				get onDidLoadedSource() {
					return this.y.event;
				}
				get onDidProgressStart() {
					return this.A.event;
				}
				get onDidProgressUpdate() {
					return this.B.event;
				}
				get onDidProgressEnd() {
					return this.C.event;
				}
				get onDidInvalidateMemory() {
					return this.D.event;
				}
				async initialize(K) {
					this.raw && (await this.jb());
					try {
						const J = await K.createDebugAdapter(this);
						(this.raw = this.U.createInstance(
							I.$WQc,
							J,
							K,
							this.I,
							this.configuration.name,
						)),
							await this.raw.start(),
							this.db(),
							await this.raw.initialize({
								clientID: "vscode",
								clientName: this.R.nameLong,
								adapterID: this.configuration.type,
								pathFormat: "path",
								linesStartAt1: !0,
								columnsStartAt1: !0,
								supportsVariableType: !0,
								supportsVariablePaging: !0,
								supportsRunInTerminalRequest: !0,
								locale: a.$z,
								supportsProgressReporting: !0,
								supportsInvalidatedEvent: !0,
								supportsMemoryReferences: !0,
								supportsArgsCanBeInterpretedByShell: !0,
								supportsMemoryEvent: !0,
								supportsStartDebuggingRequest: !0,
							}),
							(this.b = !0),
							this.w.fire(),
							this.L.setExceptionBreakpointsForSession(
								this,
								(this.raw &&
									this.raw.capabilities.exceptionBreakpointFilters) ||
									[],
							),
							this.L.getModel().registerBreakpointModes(
								this.configuration.type,
								this.raw.capabilities.breakpointModes || [],
							);
					} catch (J) {
						throw ((this.b = !0), this.w.fire(), await this.jb(), J);
					}
				}
				async launchOrAttach(K) {
					if (!this.raw)
						throw new Error((0, p.localize)(5589, null, "launch or attach"));
					if (
						this.parentSession &&
						this.parentSession.state === T.State.Inactive
					)
						throw (0, C.$0)();
					K.__sessionId = this.getId();
					try {
						await this.raw.launchOrAttach(K);
					} catch (J) {
						throw (this.jb(), J);
					}
				}
				async terminate(K = !1) {
					this.raw || this.hb(),
						this.mb(),
						this.c.lifecycleManagedByParent && this.parentSession
							? await this.parentSession.terminate(K)
							: this.correlatedTestRun &&
									!this.correlatedTestRun.completedAt &&
									!this.v
								? ((this.v = !0),
									this.Y.cancelTestRun(this.correlatedTestRun.id))
								: this.raw &&
									(this.raw.capabilities.supportsTerminateRequest &&
									this.J.resolved.request === "launch"
										? await this.raw.terminate(K)
										: await this.raw.disconnect({
												restart: K,
												terminateDebuggee: !0,
											})),
						K || this.c.compoundRoot?.sessionStopped();
				}
				async disconnect(K = !1, J = !1) {
					this.raw || this.hb(),
						this.mb(),
						this.c.lifecycleManagedByParent && this.parentSession
							? await this.parentSession.disconnect(K, J)
							: this.raw &&
								(await this.raw.disconnect({
									restart: K,
									terminateDebuggee: !1,
									suspendDebuggee: J,
								})),
						K || this.c.compoundRoot?.sessionStopped();
				}
				async restart() {
					if (!this.raw)
						throw new Error((0, p.localize)(5590, null, "restart"));
					this.mb(),
						this.c.lifecycleManagedByParent && this.parentSession
							? await this.parentSession.restart()
							: await this.raw.restart({ arguments: this.configuration });
				}
				async sendBreakpoints(K, J, W) {
					if (!this.raw)
						throw new Error((0, p.localize)(5591, null, "breakpoints"));
					if (!this.raw.readyForBreakpoints) return Promise.resolve(void 0);
					const X = this.kb(K);
					J.length && !X.adapterData && (X.adapterData = J[0].adapterData),
						X.path && (X.path = (0, m.$xO)(X.path));
					const Y = await this.raw.setBreakpoints({
						source: X,
						lines: J.map((ie) => ie.sessionAgnosticData.lineNumber),
						breakpoints: J.map((ie) => ie.toDAP()),
						sourceModified: W,
					});
					if (Y?.body) {
						const ie = new Map();
						for (let ne = 0; ne < J.length; ne++)
							ie.set(J[ne].getId(), Y.body.breakpoints[ne]);
						this.K.setBreakpointSessionData(
							this.getId(),
							this.capabilities,
							ie,
						);
					}
				}
				async sendFunctionBreakpoints(K) {
					if (!this.raw)
						throw new Error(
							(0, p.localize)(5592, null, "function breakpoints"),
						);
					if (this.raw.readyForBreakpoints) {
						const J = await this.raw.setFunctionBreakpoints({
							breakpoints: K.map((W) => W.toDAP()),
						});
						if (J?.body) {
							const W = new Map();
							for (let X = 0; X < K.length; X++)
								W.set(K[X].getId(), J.body.breakpoints[X]);
							this.K.setBreakpointSessionData(
								this.getId(),
								this.capabilities,
								W,
							);
						}
					}
				}
				async sendExceptionBreakpoints(K) {
					if (!this.raw)
						throw new Error(
							(0, p.localize)(5593, null, "exception breakpoints"),
						);
					if (this.raw.readyForBreakpoints) {
						const J = this.capabilities.supportsExceptionFilterOptions
								? {
										filters: [],
										filterOptions: K.map((X) =>
											X.condition
												? { filterId: X.filter, condition: X.condition }
												: { filterId: X.filter },
										),
									}
								: { filters: K.map((X) => X.filter) },
							W = await this.raw.setExceptionBreakpoints(J);
						if (W?.body && W.body.breakpoints) {
							const X = new Map();
							for (let Y = 0; Y < K.length; Y++)
								X.set(K[Y].getId(), W.body.breakpoints[Y]);
							this.K.setBreakpointSessionData(
								this.getId(),
								this.capabilities,
								X,
							);
						}
					}
				}
				dataBytesBreakpointInfo(K, J) {
					if (this.raw?.capabilities.supportsDataBreakpointBytes === !1)
						throw new Error((0, p.localize)(5594, null));
					return this.$({ name: K, bytes: J, asAddress: !0 });
				}
				dataBreakpointInfo(K, J) {
					return this.$({ name: K, variablesReference: J });
				}
				async $(K) {
					if (!this.raw)
						throw new Error(
							(0, p.localize)(5595, null, "data breakpoints info"),
						);
					if (!this.raw.readyForBreakpoints)
						throw new Error((0, p.localize)(5596, null));
					return (await this.raw.dataBreakpointInfo(K))?.body;
				}
				async sendDataBreakpoints(K) {
					if (!this.raw)
						throw new Error((0, p.localize)(5597, null, "data breakpoints"));
					if (this.raw.readyForBreakpoints) {
						const J = await Promise.all(
								K.map(async (X) => {
									try {
										return { dap: await X.toDAP(this), bp: X };
									} catch (Y) {
										return { bp: X, message: Y.message };
									}
								}),
							),
							W = await this.raw.setDataBreakpoints({
								breakpoints: J.map((X) => X.dap).filter(U.$tg),
							});
						if (W?.body) {
							const X = new Map();
							let Y = 0;
							for (const ie of J)
								ie.dap
									? Y < W.body.breakpoints.length &&
										X.set(ie.bp.getId(), W.body.breakpoints[Y++])
									: X.set(ie.bp.getId(), ie.message);
							this.K.setBreakpointSessionData(
								this.getId(),
								this.capabilities,
								X,
							);
						}
					}
				}
				async sendInstructionBreakpoints(K) {
					if (!this.raw)
						throw new Error(
							(0, p.localize)(5598, null, "instruction breakpoints"),
						);
					if (this.raw.readyForBreakpoints) {
						const J = await this.raw.setInstructionBreakpoints({
							breakpoints: K.map((W) => W.toDAP()),
						});
						if (J?.body) {
							const W = new Map();
							for (let X = 0; X < K.length; X++)
								W.set(K[X].getId(), J.body.breakpoints[X]);
							this.K.setBreakpointSessionData(
								this.getId(),
								this.capabilities,
								W,
							);
						}
					}
				}
				async breakpointsLocations(K, J) {
					if (!this.raw)
						throw new Error(
							(0, p.localize)(5599, null, "breakpoints locations"),
						);
					const W = this.kb(K),
						X = await this.raw.breakpointLocations({ source: W, line: J });
					if (!X || !X.body || !X.body.breakpoints) return [];
					const Y = X.body.breakpoints.map((ie) => ({
						lineNumber: ie.line,
						column: ie.column || 1,
					}));
					return (0, i.$Qb)(Y, (ie) => `${ie.lineNumber}:${ie.column}`);
				}
				getDebugProtocolBreakpoint(K) {
					return this.K.getDebugProtocolBreakpoint(K, this.getId());
				}
				customRequest(K, J) {
					if (!this.raw) throw new Error((0, p.localize)(5600, null, K));
					return this.raw.custom(K, J);
				}
				stackTrace(K, J, W, X) {
					if (!this.raw)
						throw new Error((0, p.localize)(5601, null, "stackTrace"));
					const Y = this.lb(K, X);
					return this.raw.stackTrace(
						{ threadId: K, startFrame: J, levels: W },
						Y,
					);
				}
				async exceptionInfo(K) {
					if (!this.raw)
						throw new Error((0, p.localize)(5602, null, "exceptionInfo"));
					const J = await this.raw.exceptionInfo({ threadId: K });
					if (J)
						return {
							id: J.body.exceptionId,
							description: J.body.description,
							breakMode: J.body.breakMode,
							details: J.body.details,
						};
				}
				scopes(K, J) {
					if (!this.raw) throw new Error((0, p.localize)(5603, null, "scopes"));
					const W = this.lb(J);
					return this.raw.scopes({ frameId: K }, W);
				}
				variables(K, J, W, X, Y) {
					if (!this.raw)
						throw new Error((0, p.localize)(5604, null, "variables"));
					const ie = J ? this.lb(J) : void 0;
					return this.raw.variables(
						{ variablesReference: K, filter: W, start: X, count: Y },
						ie,
					);
				}
				evaluate(K, J, W, X) {
					if (!this.raw)
						throw new Error((0, p.localize)(5605, null, "evaluate"));
					return this.raw.evaluate({
						expression: K,
						frameId: J,
						context: W,
						line: X?.line,
						column: X?.column,
						source: X?.source,
					});
				}
				async restartFrame(K, J) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5606, null, "restartFrame"));
					await this.raw.restartFrame({ frameId: K }, J);
				}
				ab(K, J) {
					const W = this.getThread(K);
					W && (W.lastSteppingGranularity = J);
				}
				async next(K, J) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5607, null, "next"));
					this.ab(K, J), await this.raw.next({ threadId: K, granularity: J });
				}
				async stepIn(K, J, W) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5608, null, "stepIn"));
					this.ab(K, W),
						await this.raw.stepIn({ threadId: K, targetId: J, granularity: W });
				}
				async stepOut(K, J) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5609, null, "stepOut"));
					this.ab(K, J),
						await this.raw.stepOut({ threadId: K, granularity: J });
				}
				async stepBack(K, J) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5610, null, "stepBack"));
					this.ab(K, J),
						await this.raw.stepBack({ threadId: K, granularity: J });
				}
				async continue(K) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5611, null, "continue"));
					await this.raw.continue({ threadId: K });
				}
				async reverseContinue(K) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5612, null, "reverse continue"));
					await this.raw.reverseContinue({ threadId: K });
				}
				async pause(K) {
					if (!this.raw) throw new Error((0, p.localize)(5613, null, "pause"));
					await this.raw.pause({ threadId: K });
				}
				async terminateThreads(K) {
					if (!this.raw)
						throw new Error((0, p.localize)(5614, null, "terminateThreads"));
					await this.raw.terminateThreads({ threadIds: K });
				}
				setVariable(K, J, W) {
					if (!this.raw)
						throw new Error((0, p.localize)(5615, null, "setVariable"));
					return this.raw.setVariable({
						variablesReference: K,
						name: J,
						value: W,
					});
				}
				setExpression(K, J, W) {
					if (!this.raw)
						throw new Error((0, p.localize)(5616, null, "setExpression"));
					return this.raw.setExpression({
						expression: J,
						value: W,
						frameId: K,
					});
				}
				gotoTargets(K, J, W) {
					if (!this.raw)
						throw new Error((0, p.localize)(5617, null, "gotoTargets"));
					return this.raw.gotoTargets({ source: K, line: J, column: W });
				}
				goto(K, J) {
					if (!this.raw) throw new Error((0, p.localize)(5618, null, "goto"));
					return this.raw.goto({ threadId: K, targetId: J });
				}
				loadSource(K) {
					if (!this.raw)
						return Promise.reject(
							new Error((0, p.localize)(5619, null, "loadSource")),
						);
					const J = this.getSourceForUri(K);
					let W;
					if (J) W = J.raw;
					else {
						const X = k.$z3.getEncodedDebugData(K);
						W = { path: X.path, sourceReference: X.sourceReference };
					}
					return this.raw.source({
						sourceReference: W.sourceReference || 0,
						source: W,
					});
				}
				async getLoadedSources() {
					if (!this.raw)
						return Promise.reject(
							new Error((0, p.localize)(5620, null, "getLoadedSources")),
						);
					const K = await this.raw.loadedSources({});
					return K?.body && K.body.sources
						? K.body.sources.map((J) => this.getSource(J))
						: [];
				}
				async completions(K, J, W, X, Y, ie) {
					if (!this.raw)
						return Promise.reject(
							new Error((0, p.localize)(5621, null, "completions")),
						);
					const ne = this.lb(J, ie);
					return this.raw.completions(
						{ frameId: K, text: W, column: X.column, line: X.lineNumber },
						ne,
					);
				}
				async stepInTargets(K) {
					return this.raw
						? (await this.raw.stepInTargets({ frameId: K }))?.body.targets
						: Promise.reject(
								new Error((0, p.localize)(5622, null, "stepInTargets")),
							);
				}
				async cancel(K) {
					return this.raw
						? this.raw.cancel({ progressId: K })
						: Promise.reject(new Error((0, p.localize)(5623, null, "cancel")));
				}
				async disassemble(K, J, W, X) {
					return this.raw
						? (
								await this.raw.disassemble({
									memoryReference: K,
									offset: J,
									instructionOffset: W,
									instructionCount: X,
									resolveSymbols: !0,
								})
							)?.body?.instructions
						: Promise.reject(
								new Error((0, p.localize)(5624, null, "disassemble")),
							);
				}
				readMemory(K, J, W) {
					return this.raw
						? this.raw.readMemory({ count: W, memoryReference: K, offset: J })
						: Promise.reject(
								new Error((0, p.localize)(5625, null, "readMemory")),
							);
				}
				writeMemory(K, J, W, X) {
					return this.raw
						? this.raw.writeMemory({
								memoryReference: K,
								offset: J,
								allowPartial: X,
								data: W,
							})
						: Promise.reject(
								new Error((0, p.localize)(5626, null, "disassemble")),
							);
				}
				async resolveLocationReference(K) {
					if (!this.raw)
						throw new Error((0, p.localize)(5627, null, "locations"));
					const J = await this.raw.locations({ locationReference: K });
					if (!J?.body)
						throw new Error((0, p.localize)(5628, null, "locations"));
					const W = this.getSource(J.body.source);
					return { column: 1, ...J.body, source: W };
				}
				getThread(K) {
					return this.g.get(K);
				}
				getAllThreads() {
					const K = [];
					return (
						this.h.forEach((J) => {
							const W = this.g.get(J);
							W && K.push(W);
						}),
						K
					);
				}
				clearThreads(K, J = void 0) {
					if (J != null) {
						const W = this.g.get(J);
						W &&
							(W.clearCallStack(),
							(W.stoppedDetails = void 0),
							(W.stopped = !1),
							K && this.g.delete(J));
					} else
						this.g.forEach((W) => {
							W.clearCallStack(), (W.stoppedDetails = void 0), (W.stopped = !1);
						}),
							K && (this.g.clear(), (this.h = []), P.$H3.allValues.clear());
				}
				getStoppedDetails() {
					return this.r.length >= 1 ? this.r[0] : void 0;
				}
				rawUpdate(K) {
					(this.h = []),
						K.threads.forEach((W) => {
							if ((this.h.push(W.id), !this.g.has(W.id)))
								this.g.set(W.id, new P.$O3(this, W.name, W.id));
							else if (W.name) {
								const X = this.g.get(W.id);
								X && (X.name = W.name);
							}
						}),
						this.g.forEach((W) => {
							this.h.indexOf(W.threadId) === -1 && this.g.delete(W.threadId);
						});
					const J = K.stoppedDetails;
					if (J)
						if (J.allThreadsStopped)
							this.g.forEach((W) => {
								(W.stoppedDetails =
									W.threadId === J.threadId
										? J
										: { reason: W.stoppedDetails?.reason }),
									(W.stopped = !0),
									W.clearCallStack();
							});
						else {
							const W =
								typeof J.threadId == "number" ? this.g.get(J.threadId) : void 0;
							W &&
								((W.stoppedDetails = J), W.clearCallStack(), (W.stopped = !0));
						}
				}
				bb() {
					if (this.H) return (0, w.$Dh)(this.H, H);
				}
				async cb(K) {
					if (this.raw) {
						const J = await this.raw.threads();
						J?.body &&
							J.body.threads &&
							this.K.rawUpdate({
								sessionId: this.getId(),
								threads: J.body.threads,
								stoppedDetails: K,
							});
					}
				}
				initializeForTest(K) {
					(this.raw = K), this.db();
				}
				db() {
					if (!this.raw) return;
					this.k.add(
						this.raw.onDidInitialize(async () => {
							t.$pib(
								this.configuration.noDebug
									? (0, p.localize)(5629, null)
									: (0, p.localize)(5630, null),
							);
							const W = async () => {
								if (
									this.raw &&
									this.raw.capabilities.supportsConfigurationDoneRequest
								)
									try {
										await this.raw.configurationDone();
									} catch (X) {
										this.S.error(X), this.raw?.disconnect({});
									}
							};
							try {
								await this.L.sendAllBreakpoints(this);
							} finally {
								await W(), await this.cb();
							}
						}),
					);
					const K = this.u;
					this.k.add(this.raw.onDidStop((W) => this.eb(W.body))),
						this.k.add(
							this.raw.onDidThread((W) => {
								if ((K.cancel([W.body.threadId]), W.body.reason === "started"))
									this.m ||
										((this.m = new w.$Yh(() => {
											this.cb();
										}, 100)),
										this.k.add(this.m)),
										this.m.isScheduled() || this.m.schedule();
								else if (W.body.reason === "exited") {
									this.K.clearThreads(this.getId(), !0, W.body.threadId);
									const X = this.L.getViewModel(),
										Y = X.focusedThread;
									this.n.cancel(),
										Y &&
											W.body.threadId === Y.threadId &&
											this.L.focusStackFrame(void 0, void 0, X.focusedSession, {
												explicit: !1,
											});
								}
							}),
						),
						this.k.add(
							this.raw.onDidTerminateDebugee(async (W) => {
								t.$pib((0, p.localize)(5631, null)),
									W.body && W.body.restart
										? await this.L.restartSession(this, W.body.restart)
										: this.raw &&
											(await this.raw.disconnect({ terminateDebuggee: !1 }));
							}),
						),
						this.k.add(
							this.raw.onDidContinued((W) => {
								const X = W.body.allThreadsContinued !== !1;
								K.cancel(X ? void 0 : [W.body.threadId]);
								const Y = X ? void 0 : W.body.threadId;
								if (typeof Y == "number") {
									this.r = this.r.filter((ne) => ne.threadId !== Y);
									const ie = this.j.get(Y);
									this.j.delete(Y), ie?.forEach((ne) => ne.dispose(!0));
								} else (this.r = []), this.mb();
								(this.o = Y),
									this.n.schedule(),
									this.K.clearThreads(this.getId(), !1, Y),
									this.w.fire();
							}),
						);
					const J = new w.$Th();
					this.k.add(
						this.raw.onDidOutput(async (W) => {
							const X =
								W.body.category === "stderr"
									? c.default.Error
									: W.body.category === "console"
										? c.default.Warning
										: c.default.Info;
							if (W.body.variablesReference) {
								const Y =
										W.body.source && W.body.line
											? {
													lineNumber: W.body.line,
													column: W.body.column ? W.body.column : 1,
													source: this.getSource(W.body.source),
												}
											: void 0,
									ne = new P.$H3(
										this,
										void 0,
										W.body.variablesReference,
										(0, g.$9g)(),
									).getChildren();
								J.queue(async () => {
									const ee = await ne;
									if (ee.length === 1) {
										this.appendToRepl(
											{
												output: W.body.output,
												expression: ee[0],
												sev: X,
												source: Y,
											},
											W.body.category === "important",
										);
										return;
									}
									ee.forEach((_) => {
										(_.name = null),
											this.appendToRepl(
												{ output: "", expression: _, sev: X, source: Y },
												W.body.category === "important",
											);
									});
								});
								return;
							}
							J.queue(async () => {
								if (!W.body || !this.raw) return;
								if (W.body.category === "telemetry") {
									const ie = this.raw.dbgr.getCustomTelemetryEndpoint();
									if (ie && this.M.telemetryLevel !== y.TelemetryLevel.NONE) {
										let ne = W.body.data;
										!ie.sendErrorTelemetry &&
											W.body.data &&
											(ne = (0, L.$m3)(W.body.data)),
											this.V.publicLog(ie, W.body.output, ne);
									}
									return;
								}
								const Y =
									W.body.source && W.body.line
										? {
												lineNumber: W.body.line,
												column: W.body.column ? W.body.column : 1,
												source: this.getSource(W.body.source),
											}
										: void 0;
								if (
									W.body.group === "start" ||
									W.body.group === "startCollapsed"
								) {
									const ie = W.body.group === "start";
									this.q.startGroup(W.body.output || "", ie, Y);
									return;
								}
								(W.body.group === "end" &&
									(this.q.endGroup(), !W.body.output)) ||
									(typeof W.body.output == "string" &&
										this.appendToRepl(
											{ output: W.body.output, sev: X, source: Y },
											W.body.category === "important",
										));
							});
						}),
					),
						this.k.add(
							this.raw.onDidBreakpoint((W) => {
								const X =
										W.body && W.body.breakpoint ? W.body.breakpoint.id : void 0,
									Y = this.K.getBreakpoints().find(
										(_) => _.getIdFromAdapter(this.getId()) === X,
									),
									ie = this.K.getFunctionBreakpoints().find(
										(_) => _.getIdFromAdapter(this.getId()) === X,
									),
									ne = this.K.getDataBreakpoints().find(
										(_) => _.getIdFromAdapter(this.getId()) === X,
									),
									ee = this.K.getExceptionBreakpoints().find(
										(_) => _.getIdFromAdapter(this.getId()) === X,
									);
								if (
									W.body.reason === "new" &&
									W.body.breakpoint.source &&
									W.body.breakpoint.line
								) {
									const _ = this.getSource(W.body.breakpoint.source),
										te = this.K.addBreakpoints(
											_.uri,
											[
												{
													column: W.body.breakpoint.column,
													enabled: !0,
													lineNumber: W.body.breakpoint.line,
												},
											],
											!1,
										);
									if (te.length === 1) {
										const Q = new Map([[te[0].getId(), W.body.breakpoint]]);
										this.K.setBreakpointSessionData(
											this.getId(),
											this.capabilities,
											Q,
										);
									}
								}
								if (
									(W.body.reason === "removed" &&
										(Y && this.K.removeBreakpoints([Y]),
										ie && this.K.removeFunctionBreakpoints(ie.getId()),
										ne && this.K.removeDataBreakpoints(ne.getId())),
									W.body.reason === "changed")
								) {
									if (Y) {
										Y.column || (W.body.breakpoint.column = void 0);
										const _ = new Map([[Y.getId(), W.body.breakpoint]]);
										this.K.setBreakpointSessionData(
											this.getId(),
											this.capabilities,
											_,
										);
									}
									if (ie) {
										const _ = new Map([[ie.getId(), W.body.breakpoint]]);
										this.K.setBreakpointSessionData(
											this.getId(),
											this.capabilities,
											_,
										);
									}
									if (ne) {
										const _ = new Map([[ne.getId(), W.body.breakpoint]]);
										this.K.setBreakpointSessionData(
											this.getId(),
											this.capabilities,
											_,
										);
									}
									if (ee) {
										const _ = new Map([[ee.getId(), W.body.breakpoint]]);
										this.K.setBreakpointSessionData(
											this.getId(),
											this.capabilities,
											_,
										);
									}
								}
							}),
						),
						this.k.add(
							this.raw.onDidLoadedSource((W) => {
								this.y.fire({
									reason: W.body.reason,
									source: this.getSource(W.body.source),
								});
							}),
						),
						this.k.add(
							this.raw.onDidCustomEvent((W) => {
								this.z.fire(W);
							}),
						),
						this.k.add(
							this.raw.onDidProgressStart((W) => {
								this.A.fire(W);
							}),
						),
						this.k.add(
							this.raw.onDidProgressUpdate((W) => {
								this.B.fire(W);
							}),
						),
						this.k.add(
							this.raw.onDidProgressEnd((W) => {
								this.C.fire(W);
							}),
						),
						this.k.add(
							this.raw.onDidInvalidateMemory((W) => {
								this.D.fire(W);
							}),
						),
						this.k.add(
							this.raw.onDidInvalidated(async (W) => {
								const X = W.body.areas || ["all"];
								if (
									X.includes("threads") ||
									X.includes("stacks") ||
									X.includes("all")
								) {
									this.mb(), this.K.clearThreads(this.getId(), !0);
									const ie = this.r;
									(this.r.length = 1),
										await Promise.all(ie.map((ne) => this.eb(ne)));
								}
								const Y = this.L.getViewModel();
								Y.focusedSession === this && Y.updateViews();
							}),
						),
						this.k.add(this.raw.onDidExitAdapter((W) => this.hb(W)));
				}
				async eb(K) {
					this.n.cancel(),
						this.r.push(K),
						K.hitBreakpointIds && (this.H = this.fb(K.hitBreakpointIds)),
						this.u.run(
							this.cb(K).then(() =>
								K.threadId === void 0 ? this.h : [K.threadId],
							),
							async (J, W) => {
								const X = K.threadId === void 0 && this.h.length > 10,
									Y = this.L.getViewModel().focusedThread,
									ie =
										Y !== void 0 &&
										Y.session === this &&
										!this.g.has(Y.threadId);
								ie && this.L.focusStackFrame(void 0, void 0);
								const ne = typeof J == "number" ? this.getThread(J) : void 0;
								if (ne) {
									const ee = this.K.refreshTopOfCallstack(ne, !X),
										_ = async () => {
											if (
												!this.L.getIsRecording() &&
												(ie ||
													(!K.preserveFocusHint && ne.getCallStack().length))
											) {
												const Q = this.L.getViewModel().focusedStackFrame;
												if (!Q || Q.thread.session === this) {
													const Z =
														!this.O.getValue("debug").focusEditorOnBreak;
													await this.L.focusStackFrame(void 0, ne, void 0, {
														preserveFocus: Z,
													});
												}
												ne.stoppedDetails &&
													!W.isCancellationRequested &&
													(ne.stoppedDetails.reason === "breakpoint" &&
														this.O.getValue("debug").openDebug ===
															"openOnDebugBreak" &&
														!this.suppressDebugView &&
														(await this.P.openPaneComposite(
															T.$Q4,
															S.ViewContainerLocation.Sidebar,
														)),
													this.O.getValue("debug").focusWindowOnBreak &&
														!this.W.extensionTestsLocationURI &&
														((0, O.$Ogb)().document.hasFocus() ||
															(await this.N.focus(B.$Bfb, { force: !0 }))));
											}
										};
									if (
										(await ee.topCallStack,
										K.hitBreakpointIds || (this.H = this.fb(ne)),
										W.isCancellationRequested ||
											(_(), await ee.wholeCallStack, W.isCancellationRequested))
									)
										return;
									const te = this.L.getViewModel().focusedStackFrame;
									(!te || (0, T.$65)(te)) && _();
								}
								this.w.fire();
							},
						);
				}
				async fb(K) {
					let J;
					if (Array.isArray(K))
						J = this.K.getBreakpoints().filter((Y) =>
							K.includes(Y.getIdFromAdapter(this.I)),
						);
					else {
						const Y = K.getTopStackFrame();
						if (
							Y === void 0 ||
							(K.stoppedDetails && K.stoppedDetails.reason !== "breakpoint")
						)
							return;
						J = this.gb(
							Y.source.uri,
							Y.range.startLineNumber,
							Y.range.endLineNumber,
							Y.range.startColumn,
							Y.range.endColumn,
						);
					}
					const W = new Set();
					this.K.getBreakpoints({ triggeredOnly: !0, enabledOnly: !0 }).forEach(
						(Y) => {
							J.forEach((ie) => {
								Y.enabled &&
									Y.triggeredBy === ie.getId() &&
									(Y.setSessionDidTrigger(this.getId()),
									W.add(Y.uri.toString()));
							});
						},
					);
					const X = [];
					return (
						W.forEach((Y) =>
							X.push(this.L.sendBreakpoints(n.URI.parse(Y), void 0, this)),
						),
						Promise.all(X)
					);
				}
				gb(K, J, W, X, Y) {
					return this.K.getBreakpoints({ uri: K }).filter(
						(ie) =>
							!(
								ie.lineNumber < J ||
								ie.lineNumber > W ||
								(ie.column && (ie.column < X || ie.column > Y))
							),
					);
				}
				hb(K) {
					(this.b = !0),
						this.K.setBreakpointSessionData(
							this.getId(),
							this.capabilities,
							void 0,
						),
						this.jb(),
						this.x.fire(K);
				}
				jb() {
					this.k.clear(),
						this.raw &&
							(this.raw.disconnect({}),
							this.raw.dispose(),
							(this.raw = void 0)),
						this.m?.dispose(),
						(this.m = void 0),
						this.n.cancel(),
						this.n.dispose(),
						this.K.clearThreads(this.getId(), !0),
						this.w.fire();
				}
				dispose() {
					this.mb(), this.k.dispose(), this.l.dispose();
				}
				getSourceForUri(K) {
					return this.f.get(this.T.asCanonicalUri(K).toString());
				}
				getSource(K) {
					let J = new k.$z3(K, this.getId(), this.T, this.X);
					const W = J.uri.toString(),
						X = this.f.get(W);
					return (
						X
							? ((J = X),
								(J.raw = (0, u.$yo)(J.raw, K)),
								J.raw && K && (J.raw.presentationHint = K.presentationHint))
							: this.f.set(W, J),
						J
					);
				}
				kb(K) {
					const J = this.getSourceForUri(K);
					if (J) return J.raw;
					{
						const W = k.$z3.getEncodedDebugData(K);
						return {
							name: W.name,
							path: W.path,
							sourceReference: W.sourceReference,
						};
					}
				}
				lb(K, J) {
					const W = new E.$Ce(J),
						X = this.j.get(K) || [];
					return X.push(W), this.j.set(K, X), W.token;
				}
				mb() {
					this.j.forEach((K) => K.forEach((J) => J.dispose(!0))),
						this.j.clear();
				}
				getReplElements() {
					return this.q.getReplElements();
				}
				hasSeparateRepl() {
					return !this.parentSession || this.c.repl !== "mergeWithParent";
				}
				removeReplExpressions() {
					this.q.removeReplExpressions();
				}
				async addReplExpression(K, J) {
					await this.q.addReplExpression(this, K, J),
						this.L.getViewModel().updateViews();
				}
				appendToRepl(K, J) {
					this.q.appendToRepl(this, K),
						J &&
							this.S.notify({
								message: K.output.toString(),
								severity: K.sev,
								source: this.name,
							});
				}
			};
			(e.$XQc = q),
				(e.$XQc = q =
					Ne(
						[
							j(5, T.$75),
							j(6, y.$km),
							j(7, N.$asb),
							j(8, o.$gj),
							j(9, R.$6Sb),
							j(10, v.$Vi),
							j(11, l.$Bk),
							j(12, s.$4N),
							j(13, A.$n6),
							j(14, $.$Vl),
							j(15, f.$Li),
							j(16, y.$nm),
							j(17, M.$r8),
							j(18, b.$ik),
							j(19, z.$sqc),
							j(20, F.$Kqc),
							j(21, x.$XK),
						],
						q,
					));
			class V extends r.$1c {
				constructor() {
					super(...arguments), (this.a = []), (this.b = this.D(new r.$0c()));
				}
				async run(K, J) {
					const W = new Set();
					this.a.push(W);
					const X = await K;
					for (let Y = 0; Y < this.a.length; Y++) {
						const ie = this.a[Y];
						if (ie === W) {
							this.a.splice(Y, 1);
							break;
						} else for (const ne of X) ie.add(ne);
					}
					W.has(void 0) ||
						(await Promise.all(
							X.map((Y) => {
								if (W.has(Y)) return;
								this.b.get(Y)?.cancel();
								const ie = new E.$Ce();
								return this.b.set(Y, ie), J(Y, ie.token);
							}),
						));
				}
				cancel(K) {
					if (K)
						for (const J of K) {
							this.b.get(J)?.cancel(), this.b.deleteAndDispose(J);
							for (const W of this.a) W.add(J);
						}
					else {
						for (const [J, W] of this.b) W.cancel();
						this.b.clearAndDisposeAll();
						for (const J of this.a) J.add(void 0);
					}
				}
			}
			e.$YQc = V;
		},
	),
		define(
			de[3686],
			he([1, 0, 132, 215, 264, 843, 300]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$AJc = void 0);
				class d {
					constructor() {
						this.a = [];
					}
					static {
						this.matchQuery = t.$Zk;
					}
					set filterQuery(r) {
						if (((this.a = []), (r = r.trim()), r && r !== "")) {
							const u = (0, i.$Hk)(r, ",")
								.map((a) => a.trim())
								.filter((a) => !!a.length);
							for (const a of u)
								a.startsWith("\\")
									? this.a.push({ type: "include", query: a.slice(1) })
									: a.startsWith("!")
										? this.a.push({ type: "exclude", query: a.slice(1) })
										: this.a.push({ type: "include", query: a });
						}
					}
					filter(r, u) {
						if (
							r instanceof E.$$Hc ||
							r instanceof E.$_Hc ||
							r instanceof C.$K3
						)
							return w.TreeVisibility.Visible;
						let a = !1,
							h = !1;
						const c = r.toString(!0);
						for (const { type: n, query: g } of this.a) {
							if (n === "exclude" && d.matchQuery(g, c)) return !1;
							n === "include" && ((a = !0), d.matchQuery(g, c) && (h = !0));
						}
						return a ? h : typeof u < "u" ? u : w.TreeVisibility.Visible;
					}
				}
				e.$AJc = d;
			},
		),
		define(
			de[220],
			he([1, 0, 44, 22, 8, 3, 67, 61, 85, 179, 6, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UUb =
						e.$TUb =
						e.LexicographicOptions =
						e.UndoConfirmLevel =
						e.SortOrder =
						e.$SUb =
						e.$RUb =
						e.$QUb =
						e.$PUb =
						e.$OUb =
						e.$NUb =
						e.$MUb =
						e.$LUb =
						e.$KUb =
						e.$JUb =
						e.$IUb =
						e.$HUb =
						e.$GUb =
						e.$FUb =
						e.$EUb =
						e.$DUb =
						e.$CUb =
						e.$BUb =
						e.$AUb =
						e.$zUb =
						e.$yUb =
						e.$xUb =
						e.$wUb =
						e.$vUb =
							void 0),
					(e.$vUb = "workbench.view.explorer"),
					(e.$wUb = "workbench.explorer.fileView"),
					(e.$xUb = new w.$5j("explorerViewletVisible", !0, {
						type: "boolean",
						description: (0, a.localize)(7021, null),
					})),
					(e.$yUb = new w.$5j("foldersViewVisible", !0, {
						type: "boolean",
						description: (0, a.localize)(7022, null),
					})),
					(e.$zUb = new w.$5j("explorerResourceIsFolder", !1, {
						type: "boolean",
						description: (0, a.localize)(7023, null),
					})),
					(e.$AUb = new w.$5j("explorerResourceReadonly", !1, {
						type: "boolean",
						description: (0, a.localize)(7024, null),
					})),
					(e.$BUb = e.$AUb.toNegated()),
					(e.$CUb = new w.$5j("explorerResourceAvailableEditorIds", "")),
					(e.$DUb = new w.$5j("explorerResourceIsRoot", !1, {
						type: "boolean",
						description: (0, a.localize)(7025, null),
					})),
					(e.$EUb = new w.$5j("explorerResourceCut", !1, {
						type: "boolean",
						description: (0, a.localize)(7026, null),
					})),
					(e.$FUb = new w.$5j("explorerResourceMoveableToTrash", !1, {
						type: "boolean",
						description: (0, a.localize)(7027, null),
					})),
					(e.$GUb = new w.$5j("filesExplorerFocus", !0, {
						type: "boolean",
						description: (0, a.localize)(7028, null),
					})),
					(e.$HUb = new w.$5j("openEditorsFocus", !0, {
						type: "boolean",
						description: (0, a.localize)(7029, null),
					})),
					(e.$IUb = new w.$5j("explorerViewletFocus", !0, {
						type: "boolean",
						description: (0, a.localize)(7030, null),
					})),
					(e.$JUb = new w.$5j("explorerViewletCompressedFocus", !0, {
						type: "boolean",
						description: (0, a.localize)(7031, null),
					})),
					(e.$KUb = new w.$5j("explorerViewletCompressedFirstFocus", !0, {
						type: "boolean",
						description: (0, a.localize)(7032, null),
					})),
					(e.$LUb = new w.$5j("explorerViewletCompressedLastFocus", !0, {
						type: "boolean",
						description: (0, a.localize)(7033, null),
					})),
					(e.$MUb = new w.$5j("viewHasSomeCollapsibleItem", !1, {
						type: "boolean",
						description: (0, a.localize)(7034, null),
					})),
					(e.$NUb = w.$Kj.and(e.$yUb, e.$GUb, w.$Kj.not(r.$aMb))),
					(e.$OUb = w.$Kj.and(e.$yUb, e.$IUb, w.$Kj.not(r.$aMb))),
					(e.$PUb = "workbench.editors.files.textFileEditor"),
					(e.$QUb = "workbench.editors.files.fileEditorInput"),
					(e.$RUb = "workbench.editors.files.binaryFileEditor"),
					(e.$SUb = "code-text-binary");
				var c;
				(function (f) {
					(f.Default = "default"),
						(f.Mixed = "mixed"),
						(f.FilesFirst = "filesFirst"),
						(f.Type = "type"),
						(f.Modified = "modified"),
						(f.FoldersNestsFiles = "foldersNestsFiles");
				})(c || (e.SortOrder = c = {}));
				var n;
				(function (f) {
					(f.Verbose = "verbose"), (f.Default = "default"), (f.Light = "light");
				})(n || (e.UndoConfirmLevel = n = {}));
				var g;
				(function (f) {
					(f.Default = "default"),
						(f.Upper = "upper"),
						(f.Lower = "lower"),
						(f.Unicode = "unicode");
				})(g || (e.LexicographicOptions = g = {}));
				let p = (h = class extends E.$1c {
					constructor(b, s, l, y) {
						super(),
							(this.b = b),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.a = this.D(new E.$2c()));
					}
					static async open(b, s, l, y, $) {
						await y.openEditor({
							original: { resource: h.h(s, b) },
							modified: { resource: b },
							label: l,
							options: $,
						});
					}
					static h(b, s) {
						return s.with({
							scheme: b,
							query: JSON.stringify({ scheme: s.scheme, query: s.query }),
						});
					}
					static j(b) {
						const { scheme: s, query: l } = JSON.parse(b.query);
						return b.with({ scheme: s, query: l });
					}
					async provideTextContent(b) {
						if (!b.query) return null;
						const s = h.j(b),
							l = await this.m(b);
						if (!this.a.value) {
							const y = new E.$Zc();
							(this.a.value = y),
								y.add(
									this.c.onDidFilesChange(($) => {
										$.contains(s, i.FileChangeType.UPDATED) && this.m(b, !1);
									}),
								),
								l && y.add(u.Event.once(l.onWillDispose)(() => this.a.clear()));
						}
						return l;
					}
					async m(b, s = !0) {
						const l = h.j(b),
							y = await this.b.readStream(l);
						let $ = this.g.getModel(b);
						if ($) this.g.updateModel($, y.value);
						else if (s) {
							const v = this.g.getModel(l);
							let S;
							v
								? (S = this.f.createById(v.getLanguageId()))
								: (S = this.f.createByFilepathOrFirstLine(l)),
								($ = this.g.createModel(y.value, S, b));
						}
						return $;
					}
				});
				(e.$TUb = p),
					(e.$TUb =
						p =
						h =
							Ne([j(0, m.$kZ), j(1, i.$ll), j(2, d.$nM), j(3, C.$QO)], p));
				class o {
					static {
						this.b = 0;
					}
					constructor(b, s) {
						(this.c = b), (this.d = s), (this.a = o.b++);
					}
					get editor() {
						return this.c;
					}
					get group() {
						return this.d;
					}
					get groupId() {
						return this.d.id;
					}
					getId() {
						return `openeditor:${this.groupId}:${this.a}`;
					}
					isPreview() {
						return !this.d.isPinned(this.editor);
					}
					isSticky() {
						return this.d.isSticky(this.editor);
					}
					getResource() {
						return t.$A1.getOriginalUri(this.editor, {
							supportSideBySide: t.SideBySideEditor.PRIMARY,
						});
					}
				}
				e.$UUb = o;
			},
		),
		define(
			de[844],
			he([
				1, 0, 44, 478, 1225, 22, 85, 5, 3, 42, 220, 73, 170, 18, 19, 6, 23, 122,
				165, 125, 399,
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
			) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nec = void 0);
				var y;
				(function (v) {
					(v[(v.None = 0)] = "None"),
						(v[(v.Text = 1)] = "Text"),
						(v[(v.Binary = 2)] = "Binary");
				})(y || (y = {}));
				let $ = (l = class extends i.$R1b {
					get typeId() {
						return u.$QUb;
					}
					get editorId() {
						return t.$b1.id;
					}
					get capabilities() {
						let S = t.EditorInputCapabilities.CanSplitInGroup;
						return (
							this.$
								? this.$.isReadonly() &&
									(S |= t.EditorInputCapabilities.Readonly)
								: this.m.hasProvider(this.resource)
									? this.n.isReadonly(this.resource) &&
										(S |= t.EditorInputCapabilities.Readonly)
									: (S |= t.EditorInputCapabilities.Untitled),
							S & t.EditorInputCapabilities.Readonly ||
								(S |= t.EditorInputCapabilities.CanDropIntoEditor),
							S
						);
					}
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B, U, z, F, x) {
						super(S, I, U, N, R, O, B, F, x),
							(this.cb = M),
							(this.db = A),
							(this.eb = z),
							(this.Z = y.None),
							(this.$ = void 0),
							(this.ab = void 0),
							(this.bb = this.D(new m.$Zc())),
							(this.$ = this.R.files.get(S)),
							T && this.setPreferredName(T),
							P && this.setPreferredDescription(P),
							k && this.setPreferredEncoding(k),
							L && this.setPreferredLanguageId(L),
							typeof D == "string" && this.setPreferredContents(D),
							this.D(this.R.files.onDidCreate((H) => this.fb(H))),
							this.$ && this.gb(this.$);
					}
					fb(S) {
						(0, n.$gh)(S.resource, this.resource) && ((this.$ = S), this.gb(S));
					}
					gb(S) {
						this.bb.clear(),
							this.bb.add(S.onDidChangeDirty(() => this.b.fire())),
							this.bb.add(S.onDidChangeReadonly(() => this.g.fire())),
							this.bb.add(S.onDidSaveError(() => this.b.fire())),
							this.bb.add(
								g.Event.once(S.onWillDispose)(() => {
									this.bb.clear(), (this.$ = void 0);
								}),
							);
					}
					getName() {
						return this.c || super.getName();
					}
					setPreferredName(S) {
						this.hb() && this.c !== S && ((this.c = S), this.f.fire());
					}
					hb() {
						return (
							this.resource.scheme !== this.eb.defaultUriScheme &&
							this.resource.scheme !== p.Schemas.vscodeUserData &&
							this.resource.scheme !== p.Schemas.file &&
							this.resource.scheme !== p.Schemas.vscodeRemote
						);
					}
					getPreferredName() {
						return this.c;
					}
					isReadonly() {
						return this.$
							? this.$.isReadonly()
							: this.n.isReadonly(this.resource);
					}
					getDescription(S) {
						return this.U || super.getDescription(S);
					}
					setPreferredDescription(S) {
						this.hb() && this.U !== S && ((this.U = S), this.f.fire());
					}
					getPreferredDescription() {
						return this.U;
					}
					getTitle(S) {
						let I = super.getTitle(S);
						const T = this.ib();
						return T && (I = `${T} (${I})`), I;
					}
					ib() {
						if (this.c && this.U) return `${this.c} ${this.U}`;
						if (this.c || this.U) return this.c ?? this.U;
					}
					getEncoding() {
						return this.$ ? this.$.getEncoding() : this.W;
					}
					getPreferredEncoding() {
						return this.W;
					}
					async setEncoding(S, I) {
						return this.setPreferredEncoding(S), this.$?.setEncoding(S, I);
					}
					setPreferredEncoding(S) {
						(this.W = S), this.setForceOpenAsText();
					}
					getLanguageId() {
						return this.$ ? this.$.getLanguageId() : this.X;
					}
					getPreferredLanguageId() {
						return this.X;
					}
					setLanguageId(S, I) {
						this.setPreferredLanguageId(S), this.$?.setLanguageId(S, I);
					}
					setPreferredLanguageId(S) {
						(this.X = S), this.setForceOpenAsText();
					}
					setPreferredContents(S) {
						(this.Y = S), this.setForceOpenAsText();
					}
					setForceOpenAsText() {
						this.Z = y.Text;
					}
					setForceOpenAsBinary() {
						this.Z = y.Binary;
					}
					isDirty() {
						return !!this.$?.isDirty();
					}
					isSaving() {
						return this.$?.hasState(C.TextFileEditorModelState.SAVED) ||
							this.$?.hasState(C.TextFileEditorModelState.CONFLICT) ||
							this.$?.hasState(C.TextFileEditorModelState.ERROR)
							? !1
							: this.n.hasShortAutoSaveDelay(this)
								? !0
								: super.isSaving();
					}
					prefersEditorPane(S) {
						return this.Z === y.Binary
							? S.find((I) => I.typeId === u.$RUb)
							: S.find((I) => I.typeId === u.$PUb);
					}
					resolve(S) {
						return this.Z === y.Binary ? this.kb() : this.jb(S);
					}
					async jb(S) {
						try {
							const I = this.Y;
							(this.Y = void 0),
								await this.R.files.resolve(this.resource, {
									languageId: this.X,
									encoding: this.W,
									contents: typeof I == "string" ? (0, o.$7X)(I) : void 0,
									reload: { async: !0 },
									allowBinary: this.Z === y.Text,
									reason: C.TextFileResolveReason.EDITOR,
									limits: this.P(S),
								}),
								this.ab ||
									(this.ab = await this.db.createModelReference(this.resource));
							const T = this.ab.object;
							return this.isDisposed() && this.lb(), T;
						} catch (I) {
							if (
								I.textFileOperationResult ===
								C.TextFileOperationResult.FILE_IS_BINARY
							)
								return this.kb();
							throw I;
						}
					}
					async kb() {
						const S = this.cb.createInstance(
							w.$mec,
							this.preferredResource,
							this.getName(),
						);
						return await S.resolve(), S;
					}
					isResolved() {
						return !!this.$;
					}
					async rename(S, I) {
						return {
							editor: {
								resource: I,
								encoding: this.getEncoding(),
								options: { viewState: (0, t.$h1)(this, S, this.Q) },
							},
						};
					}
					toUntyped(S) {
						const I = {
							resource: this.preferredResource,
							forceFile: !0,
							options: { override: this.editorId },
						};
						return (
							typeof S?.preserveViewState == "number" &&
								((I.encoding = this.getEncoding()),
								(I.languageId = this.getLanguageId()),
								(I.contents = (() => {
									const T = this.R.files.get(this.resource);
									if (
										T?.isDirty() &&
										!T.textEditorModel.isTooLargeForHeapOperation()
									)
										return T.textEditorModel.getValue();
								})()),
								(I.options = {
									...I.options,
									viewState: (0, t.$h1)(this, S.preserveViewState, this.Q),
								})),
							I
						);
					}
					matches(S) {
						return this === S
							? !0
							: S instanceof l
								? (0, n.$gh)(S.resource, this.resource)
								: (0, t.$i1)(S)
									? super.matches(S)
									: !1;
					}
					dispose() {
						(this.$ = void 0), this.lb(), super.dispose();
					}
					lb() {
						(0, m.$Vc)(this.ab), (this.ab = void 0);
					}
				});
				(e.$nec = $),
					(e.$nec =
						$ =
						l =
							Ne(
								[
									j(7, d.$Li),
									j(8, C.$kZ),
									j(9, r.$MO),
									j(10, a.$3N),
									j(11, E.$ll),
									j(12, h.$_Y),
									j(13, c.$IY),
									j(14, f.$I8),
									j(15, b.$XO),
									j(16, s.$QIb),
								],
								$,
							));
			},
		),
		define(
			de[1882],
			he([
				1, 0, 4, 163, 19, 50, 9, 22, 85, 5, 3, 42, 59, 296, 8, 220, 844, 554,
				40, 41, 21, 62, 6, 18, 12, 23, 131, 44, 136, 559,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VMc = e.$UMc = e.$TMc = e.$SMc = e.$RMc = void 0),
					(e.$RMc = "saveConflictResolutionContext"),
					(e.$SMc = "conflictResolution");
				const L = "learnMoreDirtyWriteError",
					D = (0, t.localize)(6663, null);
				let M = class extends u.$1c {
					static {
						this.ID = "workbench.contrib.textFileSaveErrorHandler";
					}
					constructor(X, Y, ie, ne, ee, _, te, Q) {
						super(),
							(this.f = X),
							(this.g = Y),
							(this.h = ie),
							(this.j = ne),
							(this.m = _),
							(this.n = te),
							(this.q = Q),
							(this.a = new h.$Gc()),
							(this.b = new n.$5j(e.$RMc, !1, !0).bindTo(this.h)),
							(this.c = void 0);
						const Z = this.D(_.createInstance(g.$TUb));
						this.D(ee.registerTextModelContentProvider(e.$SMc, Z)),
							(this.g.files.saveErrorHandler = this),
							this.r();
					}
					r() {
						this.D(this.g.files.onDidSave((X) => this.t(X.model.resource))),
							this.D(this.g.files.onDidRevert((X) => this.t(X.resource))),
							this.D(this.j.onDidActiveEditorChange(() => this.s()));
					}
					s() {
						let X = !1,
							Y;
						const ie = this.j.activeEditor;
						ie instanceof c.$GVb &&
							ie.original.resource?.scheme === e.$SMc &&
							((X = !0), (Y = ie.modified.resource)),
							this.b.set(X),
							(this.c = Y);
					}
					t(X) {
						const Y = this.a.get(X);
						Y && (Y.close(), this.a.delete(X));
					}
					onSaveError(X, Y, ie) {
						const ne = X,
							ee = Y.resource;
						let _;
						const te = [],
							Q = [];
						if (
							ne.fileOperationResult ===
							d.FileOperationResult.FILE_MODIFIED_SINCE
						)
							if (this.c && (0, w.$gh)(this.c, Y.resource)) {
								if (this.n.getBoolean(L, s.StorageScope.APPLICATION)) return;
								(_ = D),
									te.push(this.m.createInstance(R)),
									Q.push(this.m.createInstance(O));
							} else
								(_ = (0, t.localize)(6664, null, (0, w.$kh)(ee))),
									te.push(this.m.createInstance(B, Y)),
									te.push(this.m.createInstance(q, Y, ie)),
									Q.push(this.m.createInstance(V));
						else {
							const Z =
									ne.fileOperationResult ===
									d.FileOperationResult.FILE_WRITE_LOCKED,
								se = Z && ne.options?.unlock,
								re =
									ne.fileOperationResult ===
									d.FileOperationResult.FILE_PERMISSION_DENIED,
								le = ee.scheme === S.Schemas.file;
							le && (re || se)
								? te.push(this.m.createInstance(U, Y, ie, !!se))
								: Z
									? te.push(this.m.createInstance(H, Y, ie))
									: te.push(this.m.createInstance(z, Y, ie)),
								te.push(this.m.createInstance(x, Y)),
								te.push(this.m.createInstance(F, Y)),
								Z
									? se && le
										? (_ = v.$l
												? (0, t.localize)(6665, null, (0, w.$kh)(ee))
												: (0, t.localize)(6666, null, (0, w.$kh)(ee)))
										: (_ = (0, t.localize)(6667, null, (0, w.$kh)(ee)))
									: le && re
										? (_ = v.$l
												? (0, t.localize)(6668, null, (0, w.$kh)(ee))
												: (0, t.localize)(6669, null, (0, w.$kh)(ee)))
										: (_ = (0, t.localize)(
												6670,
												null,
												(0, w.$kh)(ee),
												(0, i.$xj)(X, !1),
											));
						}
						if (ie.showPrettyDialogOnError) {
							const Z =
									te.length > 0 ? { id: te[0].id, label: te[0].label } : void 0,
								se = te
									.slice(1)
									.map((le) => ({
										id: le.id,
										label: le.label,
										type: "secondary",
									})),
								re = { id: "cancel", label: "Cancel" };
							this.q
								.openDialog({
									title: "Save Error",
									message: _,
									primaryButton: Z,
									extraButtons: se,
									cancelButton: re,
								})
								.then(async (le) => {
									const oe = te.find((ae) => ae.id === le);
									oe && (await oe.run()), (0, u.$Vc)(te), (0, u.$Vc)(Q);
								});
						} else {
							const Z = { primary: te, secondary: Q },
								se = this.f.notify({
									id: `${(0, P.$Aj)(Y.resource.toString())}`,
									severity: f.Severity.Error,
									message: _,
									actions: Z,
								});
							y.Event.once(se.onDidClose)(() => {
								(0, u.$Vc)(te), (0, u.$Vc)(Q);
							}),
								this.a.set(Y.resource, se);
						}
					}
					dispose() {
						super.dispose(), this.a.clear();
					}
				};
				(e.$TMc = M),
					(e.$TMc = M =
						Ne(
							[
								j(0, f.$4N),
								j(1, m.$kZ),
								j(2, n.$6j),
								j(3, $.$IY),
								j(4, a.$MO),
								j(5, r.$Li),
								j(6, s.$lq),
								j(7, k.$hdc),
							],
							M,
						));
				const N = [];
				function A() {
					for (; N.length > 0; ) N.pop()?.close();
				}
				let R = class extends E.$rj {
					constructor(X) {
						super(
							"workbench.files.action.resolveConflictLearnMore",
							(0, t.localize)(6671, null),
						),
							(this.a = X);
					}
					async run() {
						await this.a.open(
							C.URI.parse("https://go.microsoft.com/fwlink/?linkid=868264"),
						);
					}
				};
				R = Ne([j(0, b.$7rb)], R);
				let O = class extends E.$rj {
					constructor(X) {
						super(
							"workbench.files.action.resolveConflictLearnMoreDoNotShowAgain",
							(0, t.localize)(6672, null),
						),
							(this.a = X);
					}
					async run(X) {
						this.a.store(
							L,
							!0,
							s.StorageScope.APPLICATION,
							s.StorageTarget.USER,
						),
							X.dispose();
					}
				};
				O = Ne([j(0, s.$lq)], O);
				let B = class extends E.$rj {
					constructor(X, Y, ie, ne, ee) {
						super(
							"workbench.files.action.resolveConflict",
							(0, t.localize)(6673, null),
						),
							(this.a = X),
							(this.b = Y),
							(this.c = ie),
							(this.f = ne),
							(this.g = ee);
					}
					async run() {
						if (!this.a.isDisposed()) {
							const X = this.a.resource,
								Y = (0, w.$kh)(X),
								ie = (0, t.localize)(6674, null, Y, Y, this.g.nameLong);
							await g.$TUb.open(X, e.$SMc, ie, this.b, { pinned: !0 });
							const ne = { primary: [this.f.createInstance(R)] },
								ee = this.c.notify({
									id: `${(0, P.$Aj)(X.toString())}`,
									severity: f.Severity.Info,
									message: D,
									actions: ne,
									neverShowAgain: { id: L, isSecondary: !0 },
								});
							y.Event.once(ee.onDidClose)(() => (0, u.$Vc)(ne.primary)),
								N.push(ee);
						}
					}
				};
				B = Ne([j(1, $.$IY), j(2, f.$4N), j(3, r.$Li), j(4, l.$Bk)], B);
				class U extends E.$rj {
					constructor(X, Y, ie) {
						super(
							"workbench.files.action.saveModelElevated",
							ie
								? v.$l
									? (0, t.localize)(6675, null)
									: (0, t.localize)(6676, null)
								: v.$l
									? (0, t.localize)(6677, null)
									: (0, t.localize)(6678, null),
						),
							(this.a = X),
							(this.b = Y),
							(this.c = ie);
					}
					async run() {
						this.a.isDisposed() ||
							(await this.a.save({
								...this.b,
								writeElevated: !0,
								writeUnlock: this.c,
								reason: T.SaveReason.EXPLICIT,
							}));
					}
				}
				class z extends E.$rj {
					constructor(X, Y) {
						super(
							"workbench.files.action.saveModel",
							(0, t.localize)(6679, null),
						),
							(this.a = X),
							(this.b = Y);
					}
					async run() {
						this.a.isDisposed() ||
							(await this.a.save({ ...this.b, reason: T.SaveReason.EXPLICIT }));
					}
				}
				class F extends E.$rj {
					constructor(X) {
						super(
							"workbench.files.action.revertModel",
							(0, t.localize)(6680, null),
						),
							(this.a = X);
					}
					async run() {
						this.a.isDisposed() || (await this.a.revert());
					}
				}
				let x = class extends E.$rj {
					constructor(X, Y) {
						super("workbench.files.action.saveModelAs", o.$7Ub.value),
							(this.a = X),
							(this.b = Y);
					}
					async run() {
						if (!this.a.isDisposed()) {
							const X = this.c();
							X &&
								(await this.b.save(X, {
									saveAs: !0,
									reason: T.SaveReason.EXPLICIT,
								}));
						}
					}
					c() {
						let X;
						const Y = this.b.findEditors(this.a.resource, {
							supportSideBySide: T.SideBySideEditor.PRIMARY,
						});
						for (const ie of Y)
							if (ie.editor instanceof p.$nec) {
								X = ie;
								break;
							} else X || (X = ie);
						return X;
					}
				};
				x = Ne([j(1, $.$IY)], x);
				class H extends E.$rj {
					constructor(X, Y) {
						super("workbench.files.action.unlock", (0, t.localize)(6681, null)),
							(this.a = X),
							(this.b = Y);
					}
					async run() {
						this.a.isDisposed() ||
							(await this.a.save({
								...this.b,
								writeUnlock: !0,
								reason: T.SaveReason.EXPLICIT,
							}));
					}
				}
				class q extends E.$rj {
					constructor(X, Y) {
						super(
							"workbench.files.action.saveIgnoreModifiedSince",
							(0, t.localize)(6682, null),
						),
							(this.a = X),
							(this.b = Y);
					}
					async run() {
						this.a.isDisposed() ||
							(await this.a.save({
								...this.b,
								ignoreModifiedSince: !0,
								reason: T.SaveReason.EXPLICIT,
							}));
					}
				}
				let V = class extends E.$rj {
					constructor(X) {
						super(
							"workbench.files.action.configureSaveConflict",
							(0, t.localize)(6683, null),
						),
							(this.a = X);
					}
					async run() {
						this.a.openSettings({ query: "files.saveConflictResolution" });
					}
				};
				V = Ne([j(0, I.$7Z)], V);
				const G = (W, X) => J(W, X, !0);
				e.$UMc = G;
				const K = (W, X) => J(W, X, !1);
				e.$VMc = K;
				async function J(W, X, Y) {
					const ie = W.get($.$IY),
						ne = ie.activeEditorPane;
					if (!ne) return;
					const ee = ne.input,
						_ = ne.group;
					if ((A(), Y)) {
						const te = {
							ignoreModifiedSince: !0,
							reason: T.SaveReason.EXPLICIT,
						};
						await ie.save({ editor: ee, groupId: _.id }, te);
					} else await ie.revert({ editor: ee, groupId: _.id });
					return await ie.openEditor({ resource: X }, _), _.closeEditor(ee);
				}
			},
		),
		define(
			de[710],
			he([1, 0, 9, 249, 54, 59, 22, 37, 24, 3, 138, 6, 19, 220, 3062, 28]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KWb = e.$JWb = e.$IWb = void 0);
				class p {
					constructor(s, l, y, $, v) {
						(this.f = s), (this.g = l), (this.d = new a.$re());
						const S = () =>
							(this.a = this.f
								.getWorkspace()
								.folders.map(
									(I) => new o(I.uri, y, $, v, void 0, !0, !1, !1, !1, I.name),
								));
						S(),
							(this.b = this.f.onDidChangeWorkspaceFolders(() => {
								S(), this.d.fire();
							}));
					}
					get roots() {
						return this.a;
					}
					get onDidChangeRoots() {
						return this.d.event;
					}
					findAll(s) {
						return (0, m.$Lb)(this.roots.map((l) => l.find(s)));
					}
					findClosest(s) {
						const l = this.f.getWorkspaceFolder(s);
						if (l) {
							const y = this.roots.find(($) =>
								this.g.extUri.isEqual($.resource, l.uri),
							);
							if (y) return y.find(s);
						}
						return null;
					}
					dispose() {
						(0, r.$Vc)(this.b);
					}
				}
				e.$IWb = p;
				class o {
					constructor(s, l, y, $, v, S, I, T, P, k = (0, h.$jh)(s), L, D = !1) {
						(this.resource = s),
							(this.b = l),
							(this.d = y),
							(this.f = $),
							(this.g = v),
							(this.h = S),
							(this.j = I),
							(this.k = T),
							(this.l = P),
							(this.m = k),
							(this.n = L),
							(this.o = D),
							(this.error = void 0),
							(this.a = !1),
							(this._isDirectoryResolved = !1);
					}
					get isExcluded() {
						return this.a ? !0 : this.g ? this.g.isExcluded : !1;
					}
					set isExcluded(s) {
						this.a = s;
					}
					hasChildren(s) {
						return this.hasNests
							? (this.nestedChildren?.some((l) => s(l)) ?? !1)
							: this.isDirectory;
					}
					get hasNests() {
						return !!this.nestedChildren?.length;
					}
					get isDirectoryResolved() {
						return this._isDirectoryResolved;
					}
					get isSymbolicLink() {
						return !!this.j;
					}
					get isDirectory() {
						return !!this.h;
					}
					get isReadonly() {
						return this.f.isReadonly(this.resource, {
							resource: this.resource,
							name: this.name,
							readonly: this.k,
							locked: this.l,
						});
					}
					get mtime() {
						return this.n;
					}
					get name() {
						return this.m;
					}
					get isUnknown() {
						return this.o;
					}
					get parent() {
						return this.g;
					}
					get root() {
						return this.g ? this.g.root : this;
					}
					get children() {
						return new Map();
					}
					q(s) {
						this.g?.removeChild(this), (this.m = s), this.g?.addChild(this);
					}
					getId() {
						return (
							this.root.resource.toString() + "::" + this.resource.toString()
						);
					}
					toString() {
						return `ExplorerItem: ${this.name}`;
					}
					get isRoot() {
						return this === this.root;
					}
					static create(s, l, y, $, v, S) {
						const I = new o(
							$.resource,
							s,
							l,
							y,
							v,
							$.isDirectory,
							$.isSymbolicLink,
							$.readonly,
							$.locked,
							$.name,
							$.mtime,
							!$.isFile && !$.isDirectory,
						);
						if (
							I.isDirectory &&
							((I._isDirectoryResolved =
								!!$.children ||
								(!!S && S.some((T) => (0, h.$hh)(T, I.resource)))),
							$.children)
						)
							for (let T = 0, P = $.children.length; T < P; T++) {
								const k = o.create(s, l, y, $.children[T], I, S);
								I.addChild(k);
							}
						return I;
					}
					static mergeLocalWithDisk(s, l) {
						if (s.resource.toString() !== l.resource.toString()) return;
						const y = s.isDirectory || l.isDirectory;
						if (
							!(y && l._isDirectoryResolved && !s._isDirectoryResolved) &&
							((l.resource = s.resource),
							l.isRoot || l.q(s.name),
							(l.h = s.isDirectory),
							(l.n = s.mtime),
							(l._isDirectoryResolved = s._isDirectoryResolved),
							(l.j = s.isSymbolicLink),
							(l.error = s.error),
							y && s._isDirectoryResolved)
						) {
							const $ = new E.$Gc();
							l.children.forEach((v) => {
								$.set(v.resource, v);
							}),
								l.children.clear(),
								s.children.forEach((v) => {
									const S = $.get(v.resource);
									S
										? (o.mergeLocalWithDisk(v, S),
											l.addChild(S),
											$.delete(v.resource))
										: l.addChild(v);
								}),
								$.forEach((v) => {
									v instanceof f && l.addChild(v);
								});
						}
					}
					addChild(s) {
						(s.g = this), s.v(!1), this.children.set(this.u(s.name), s);
					}
					getChild(s) {
						return this.children.get(this.u(s));
					}
					fetchChildren(s) {
						const l = this.d.getValue({ resource: this.root.resource }).explorer
							.fileNesting;
						return l.enabled && this.nestedChildren
							? this.nestedChildren
							: (async () => {
									if (!this._isDirectoryResolved) {
										const $ = s === c.SortOrder.Modified;
										this.error = void 0;
										try {
											const v = await this.b.resolve(this.resource, {
													resolveSingleChildDescendants: !0,
													resolveMetadata: $,
												}),
												S = o.create(this.b, this.d, this.f, v, this);
											o.mergeLocalWithDisk(S, this);
										} catch (v) {
											throw ((this.error = v), v);
										}
										this._isDirectoryResolved = !0;
									}
									const y = [];
									if (l.enabled) {
										const $ = [],
											v = [];
										for (const I of this.children.entries())
											(I[1].nestedParent = void 0),
												I[1].isDirectory ? v.push(I) : $.push(I);
										const S = this.t.nest(
											$.map(([I]) => I),
											this.u(this.name),
										);
										for (const [I, T] of $) {
											const P = S.get(I);
											if (P !== void 0) {
												T.nestedChildren = [];
												for (const k of P.keys()) {
													const L = (0, g.$wg)(this.children.get(k));
													T.nestedChildren.push(L), (L.nestedParent = T);
												}
												y.push(T);
											} else T.nestedChildren = void 0;
										}
										for (const [I, T] of v.values()) y.push(T);
									} else
										this.children.forEach(($) => {
											y.push($);
										});
									return y;
								})();
					}
					get t() {
						if (!this.root.s) {
							const s = this.d.getValue({ resource: this.root.resource })
									.explorer.fileNesting,
								l = Object.entries(s.patterns)
									.filter(
										(y) =>
											typeof y[0] == "string" &&
											typeof y[1] == "string" &&
											y[0] &&
											y[1],
									)
									.map(([y, $]) => [
										this.u(y.trim()),
										$.split(",")
											.map((v) =>
												this.u(
													v
														.trim()
														.replace(/\u200b/g, "")
														.trim(),
												),
											)
											.filter((v) => v !== ""),
									]);
							this.root.s = new n.$FWb(l);
						}
						return this.root.s;
					}
					removeChild(s) {
						(this.nestedChildren = void 0),
							this.children.delete(this.u(s.name));
					}
					forgetChildren() {
						this.children.clear(),
							(this.nestedChildren = void 0),
							(this._isDirectoryResolved = !1),
							(this.s = void 0);
					}
					u(s) {
						return this.b.hasCapability(
							this.resource,
							C.FileSystemProviderCapabilities.PathCaseSensitive,
						)
							? s
							: s.toLowerCase();
					}
					move(s) {
						this.nestedParent?.removeChild(this),
							this.g?.removeChild(this),
							s.removeChild(this),
							s.addChild(this),
							this.v(!0);
					}
					v(s) {
						this.g && (this.resource = (0, h.$nh)(this.g.resource, this.name)),
							s &&
								this.isDirectory &&
								this.children.forEach((l) => {
									l.v(!0);
								});
					}
					rename(s) {
						this.q(s.name), (this.n = s.mtime), this.v(!0);
					}
					find(s) {
						const l = !this.b.hasCapability(
							s,
							C.FileSystemProviderCapabilities.PathCaseSensitive,
						);
						return s &&
							this.resource.scheme === s.scheme &&
							(0, d.$Mf)(this.resource.authority, s.authority) &&
							(l
								? (0, d.$Nf)(s.path, this.resource.path)
								: s.path.startsWith(this.resource.path))
							? this.w(
									(0, d.$uf)(s.path, w.$lc.sep),
									this.resource.path.length,
									l,
								)
							: null;
					}
					w(s, l, y) {
						if ((0, i.$Kg)((0, d.$uf)(this.resource.path, w.$lc.sep), s, y))
							return this;
						if (this.isDirectory) {
							for (; l < s.length && s[l] === w.$lc.sep; ) l++;
							let $ = s.indexOf(w.$lc.sep, l);
							$ === -1 && ($ = s.length);
							const v = s.substring(l, $),
								S = this.children.get(this.u(v));
							if (S) return S.w(s, $, y);
						}
						return null;
					}
				}
				(e.$JWb = o), Ne([u.$ei], o.prototype, "children", null);
				class f extends o {
					constructor(s, l, y, $, v) {
						super(t.URI.file(""), s, l, y, $, v),
							(this._isDirectoryResolved = !0);
					}
				}
				e.$KWb = f;
			},
		),
		define(
			de[3687],
			he([
				1, 0, 6, 25, 3, 220, 710, 22, 19, 10, 121, 18, 68, 199, 155, 84, 33, 15,
				87, 970, 170, 32,
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
			) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Mc = e.$3Mc = void 0),
					(e.$3Mc = new n.$JN());
				let $ = class {
					static {
						y = this;
					}
					static {
						this.a = 500;
					}
					constructor(T, P, k, L, D, M, N, A, R, O, B) {
						(this.m = T),
							(this.n = P),
							(this.o = k),
							(this.q = L),
							(this.t = D),
							(this.u = M),
							(this.v = N),
							(this.w = A),
							(this.x = O),
							(this.y = B),
							(this.b = new w.$Zc()),
							(this.k = []),
							(this.d = this.n.getValue("explorer")),
							(this.h = new C.$IWb(this.o, this.u, this.m, this.n, this.x)),
							this.b.add(this.h),
							this.b.add(this.m.onDidRunOperation((U) => this.z(U))),
							(this.j = new o.$Yh(async () => {
								const U = this.k;
								this.k = [];
								const z = [d.FileChangeType.DELETED];
								this.d.sortOrder === E.SortOrder.Modified &&
									z.push(d.FileChangeType.UPDATED);
								let F = !1;
								this.roots.forEach((x) => {
									this.g && !F && (F = v(x, this.g, U, z));
								}),
									U.forEach((x) => {
										if (!F)
											for (const H of x.rawAdded) {
												const q = this.h.findClosest((0, m.$mh)(H));
												if (q && !q.getChild((0, m.$kh)(H))) {
													F = !0;
													break;
												}
											}
									}),
									F && (await this.refresh(!1));
							}, y.a)),
							this.b.add(
								this.m.onDidFilesChange((U) => {
									this.k.push(U),
										!this.c && (this.j.isScheduled() || this.j.schedule());
								}),
							),
							this.b.add(this.n.onDidChangeConfiguration((U) => this.B(U))),
							this.b.add(
								t.Event.any(
									this.m.onDidChangeFileSystemProviderRegistrations,
									this.m.onDidChangeFileSystemProviderCapabilities,
								)(async (U) => {
									let z = !1;
									this.h.roots.forEach((F) => {
										F.resource.scheme === U.scheme &&
											((z = !0), F.forgetChildren());
									}),
										z && this.g && (await this.g.setTreeInput());
								}),
							),
							this.b.add(
								this.h.onDidChangeRoots(() => {
									this.g?.setTreeInput();
								}),
							),
							this.b.add(
								R.onDidChangeFocus((U) => {
									U && this.refresh(!1);
								}),
							),
							(this.l = new b.$0Y(
								(U) => S(P.getValue({ resource: U })),
								(U) => U.affectsConfiguration("explorer.autoRevealExclude"),
								k,
								P,
							)),
							this.b.add(this.l);
					}
					get roots() {
						return this.h.roots;
					}
					get sortOrderConfiguration() {
						return {
							sortOrder: this.d.sortOrder,
							lexicographicOptions: this.d.sortOrderLexicographicOptions,
							reverse: this.d.sortOrderReverse,
						};
					}
					registerView(T) {
						this.g = T;
					}
					getContext(T, P = !1) {
						if (!this.g) return [];
						const k = new Set(this.g.getContext(T));
						return (
							k.forEach((L) => {
								try {
									if (T && !P && this.g?.isItemCollapsed(L) && L.nestedChildren)
										for (const D of L.nestedChildren) k.add(D);
								} catch {
									return;
								}
							}),
							[...k]
						);
					}
					async applyBulkEdit(T, P) {
						const k = new p.$Ce(),
							L = P.progressLocation ?? g.ProgressLocation.Window;
						let D;
						L === g.ProgressLocation.Window
							? (D = {
									location: L,
									title: P.progressLabel,
									cancellable: T.length > 1,
								})
							: (D = {
									location: L,
									title: P.progressLabel,
									cancellable: T.length > 1,
									delay: 500,
								});
						const M = this.w.withProgress(
							D,
							async (N) => {
								await this.v.apply(T, {
									undoRedoSource: e.$3Mc,
									label: P.undoLabel,
									code: "undoredo.explorerOperation",
									progress: N,
									token: k.token,
									confirmBeforeUndo: P.confirmBeforeUndo,
								});
							},
							() => k.cancel(),
						);
						await this.w.withProgress(
							{ location: g.ProgressLocation.Explorer, delay: 500 },
							() => M,
						),
							k.dispose();
					}
					hasViewFocus() {
						return !!this.g && this.g.hasFocus();
					}
					findClosest(T) {
						return this.h.findClosest(T);
					}
					findClosestRoot(T) {
						const P = this.h.roots
							.filter((k) => this.u.extUri.isEqualOrParent(T, k.resource))
							.sort((k, L) => L.resource.path.length - k.resource.path.length);
						return P.length ? P[0] : null;
					}
					async setEditable(T, P) {
						if (!this.g) return;
						P ? (this.c = { stat: T, data: P }) : (this.c = void 0);
						const k = this.isEditable(T);
						try {
							await this.g.setEditable(T, k);
						} catch {
							const L = T.parent,
								D = {
									parentIsDirectory: L?.isDirectory,
									isDirectory: T.isDirectory,
									isReadonly: !!T.isReadonly,
									parentIsReadonly: !!L?.isReadonly,
									parentIsExcluded: L?.isExcluded,
									isExcluded: T.isExcluded,
									parentIsRoot: L?.isRoot,
									isRoot: T.isRoot,
									parentHasNests: L?.hasNests,
									hasNests: T.hasNests,
								};
							this.y.publicLogError2("explorerView.setEditableError", D);
							return;
						}
						!this.c &&
							this.k.length &&
							!this.j.isScheduled() &&
							this.j.schedule();
					}
					async setToCopy(T, P) {
						const k = this.f;
						(this.f = P ? T : void 0),
							await this.q.writeResources(T.map((L) => L.resource)),
							this.g?.itemsCopied(T, P, k);
					}
					isCut(T) {
						return (
							!!this.f &&
							this.f.some((P) => this.u.extUri.isEqual(P.resource, T.resource))
						);
					}
					getEditable() {
						return this.c;
					}
					getEditableData(T) {
						return this.c && this.c.stat === T ? this.c.data : void 0;
					}
					isEditable(T) {
						return !!this.c && (this.c.stat === T || !T);
					}
					async select(T, P) {
						if (!this.g) return;
						const k = P === "force",
							L = this.findClosest(T);
						if (L)
							return this.A(L, k)
								? (await this.g.selectResource(L.resource, P),
									Promise.resolve(void 0))
								: void 0;
						const D = {
								resolveTo: [T],
								resolveMetadata: this.d.sortOrder === E.SortOrder.Modified,
							},
							M = this.findClosestRoot(T);
						if (M)
							try {
								const N = await this.m.resolve(M.resource, D),
									A = C.$JWb.create(
										this.m,
										this.n,
										this.x,
										N,
										void 0,
										D.resolveTo,
									);
								C.$JWb.mergeLocalWithDisk(A, M);
								const R = M.find(T);
								if ((await this.g.refresh(!0, M), R && !this.A(R, k))) return;
								await this.g.selectResource(R ? R.resource : void 0, P);
							} catch (N) {
								(M.error = N), await this.g.refresh(!1, M);
							}
					}
					async refresh(T = !0) {
						if ((this.h.roots.forEach((P) => P.forgetChildren()), this.g)) {
							await this.g.refresh(!0);
							const P = this.t.activeEditor?.resource,
								k = this.n.getValue().explorer.autoReveal;
							T && P && k && this.select(P, k);
						}
					}
					async z(T) {
						const P = this.d.fileNesting.enabled;
						if (
							T.isOperation(d.FileOperation.CREATE) ||
							T.isOperation(d.FileOperation.COPY)
						) {
							const k = T.target,
								L = (0, m.$mh)(k.resource),
								D = this.h.findAll(L);
							D.length &&
								(await Promise.all(
									D.map(async (M) => {
										const N = this.d.sortOrder === "modified";
										if (!M.isDirectoryResolved) {
											const R = await this.m.resolve(M.resource, {
												resolveMetadata: N,
											});
											if (R) {
												const O = C.$JWb.create(
													this.m,
													this.n,
													this.x,
													R,
													M.parent,
												);
												C.$JWb.mergeLocalWithDisk(O, M);
											}
										}
										const A = C.$JWb.create(
											this.m,
											this.n,
											this.x,
											k,
											M.parent,
										);
										M.removeChild(A),
											M.addChild(A),
											await this.g?.refresh(P, M);
									}),
								));
						} else if (T.isOperation(d.FileOperation.MOVE)) {
							const k = T.resource,
								L = T.target,
								D = (0, m.$mh)(k),
								M = (0, m.$mh)(L.resource),
								N = this.h.findAll(k);
							if (
								N.every((R) => !R.nestedParent) &&
								this.u.extUri.isEqual(D, M)
							)
								await Promise.all(
									N.map(async (R) => {
										R.rename(L), await this.g?.refresh(P, R.parent);
									}),
								);
							else {
								const R = this.h.findAll(M);
								R.length &&
									N.length &&
									(await Promise.all(
										N.map(async (O, B) => {
											const U = O.parent,
												z = O.nestedParent;
											O.move(R[B]),
												z && (await this.g?.refresh(!1, z)),
												await this.g?.refresh(!1, U),
												await this.g?.refresh(P, R[B]);
										}),
									));
							}
						} else if (T.isOperation(d.FileOperation.DELETE)) {
							const k = this.h.findAll(T.resource);
							await Promise.all(
								k.map(async (L) => {
									if (L.parent) {
										const D = L.parent;
										D.removeChild(L), this.g?.focusNext();
										const M = L.nestedParent;
										M && (M.removeChild(L), await this.g?.refresh(!1, M)),
											await this.g?.refresh(P, D),
											this.g?.getFocus().length === 0 && this.g?.focusLast();
									}
								}),
							);
						}
					}
					A(T, P) {
						if (T === void 0 || P) return !0;
						if (
							this.l.matches(
								T.resource,
								(D) => !!(T.parent && T.parent.getChild(D)),
							)
						)
							return !1;
						const k = T.root;
						let L = T.parent;
						for (; L !== k; ) {
							if (L === void 0) return !0;
							if (this.l.matches(L.resource)) return !1;
							L = L.parent;
						}
						return !0;
					}
					async B(T) {
						if (!T.affectsConfiguration("explorer")) return;
						let P = !1;
						T.affectsConfiguration("explorer.fileNesting") && (P = !0);
						const k = this.n.getValue(),
							L = k?.explorer?.sortOrder || E.SortOrder.Default;
						this.d.sortOrder !== L && (P = this.d.sortOrder !== void 0);
						const D =
							k?.explorer?.sortOrderLexicographicOptions ||
							E.LexicographicOptions.Default;
						this.d.sortOrderLexicographicOptions !== D &&
							(P = P || this.d.sortOrderLexicographicOptions !== void 0);
						const M = k?.explorer?.sortOrderReverse || !1;
						this.d.sortOrderReverse !== M &&
							(P = P || this.d.sortOrderReverse !== void 0),
							(this.d = k.explorer),
							P && (await this.refresh());
					}
					dispose() {
						this.b.dispose();
					}
				};
				(e.$4Mc = $),
					(e.$4Mc =
						$ =
						y =
							Ne(
								[
									j(0, d.$ll),
									j(1, r.$gj),
									j(2, i.$Vi),
									j(3, u.$Vxb),
									j(4, a.$IY),
									j(5, h.$Vl),
									j(6, c.$rzb),
									j(7, g.$8N),
									j(8, f.$asb),
									j(9, s.$_Y),
									j(10, l.$km),
								],
								$,
							));
				function v(I, T, P, k) {
					for (const [L, D] of I.children)
						if (
							T.isItemVisible(D) &&
							(P.some((M) => M.contains(D.resource, ...k)) ||
								(D.isDirectory && D.isDirectoryResolved && v(D, T, P, k)))
						)
							return !0;
					return !1;
				}
				function S(I) {
					const T = I && I.explorer && I.explorer.autoRevealExclude;
					return T || {};
				}
			},
		),
		define(
			de[382],
			he([1, 0, 9, 93, 220, 44, 278, 710, 24, 1170, 5, 7]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LWb = void 0),
					(e.$MWb = c),
					(e.$NWb = n),
					(e.$OWb = g),
					(e.$LWb = (0, u.$Mi)("explorerService"));
				function h(p) {
					const o = p.lastFocusedList,
						f = o?.getHTMLElement();
					if (f && (0, a.$Kgb)(f)) {
						let b;
						if (o instanceof C.List) {
							const s = o.getFocusedElements();
							s.length && (b = s[0]);
						} else if (o instanceof r.$Fpb) {
							const s = o.getFocus();
							s.length && (b = s[0]);
						}
						return b;
					}
				}
				function c(p, o, f) {
					if (t.URI.isUri(p)) return p;
					const b = h(f);
					return b instanceof d.$JWb
						? b.resource
						: b instanceof w.$UUb
							? b.getResource()
							: E.$A1.getOriginalUri(o.activeEditor, {
									supportSideBySide: E.SideBySideEditor.PRIMARY,
								});
				}
				function n(p, o, f, b, s) {
					const l = o.lastFocusedList,
						y = l?.getHTMLElement();
					if (y && (0, a.$Kgb)(y)) {
						if (
							l instanceof r.$Fpb &&
							l.getFocus().every((I) => I instanceof d.$JWb)
						) {
							const I = s.getContext(!0, !0);
							if (I.length) return I.map((T) => T.resource);
						}
						if (l instanceof C.List) {
							const I = (0, m.$Lb)(
									l
										.getSelectedElements()
										.filter((D) => D instanceof w.$UUb)
										.map((D) => D.getResource()),
								),
								T = l.getFocusedElements(),
								P = T.length ? T[0] : void 0;
							let k;
							if (t.URI.isUri(p)) k = p.toString();
							else if (P instanceof w.$UUb) {
								const D = P.getResource();
								k = D ? D.toString() : void 0;
							}
							const L = I.findIndex((D) => D.toString() === k);
							if (L !== -1) {
								const D = I[L];
								return I.splice(L, 1), I.unshift(D), I;
							}
						}
					}
					const v = b.activeGroup.selectedEditors;
					if (v.length > 1 && t.URI.isUri(p)) {
						const I = v.findIndex((T) => T.matches({ resource: p }));
						if (I !== -1) {
							const T = v[I];
							return (
								v.splice(I, 1),
								v.unshift(T),
								v.map((P) => E.$A1.getOriginalUri(P)).filter((P) => !!P)
							);
						}
					}
					const S = c(p, f, o);
					return S ? [S] : [];
				}
				function g(p) {
					const o = p.get(i.$fMb).lastFocusedList,
						f = o?.getHTMLElement();
					if (f && (0, a.$Kgb)(f) && o instanceof C.List) {
						const b = (0, m.$Lb)(
								o.getSelectedElements().filter(($) => $ instanceof w.$UUb),
							),
							s = o.getFocusedElements(),
							l = s.length ? s[0] : void 0;
						let y;
						return (
							l instanceof w.$UUb && (y = l),
							b.some(($) => $ === y) ? b : y ? [y] : void 0
						);
					}
				}
			},
		),
		define(
			de[3688],
			he([
				1, 0, 4, 10, 9, 11, 107, 100, 22, 382, 31, 23, 24, 143, 8, 55, 3, 12,
				54, 52, 30, 1612, 117, 93, 18, 66,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ExternalTerminalContribution = void 0),
					(t = mt(t));
				const I = "openInTerminal",
					T = "openInIntegratedTerminal";
				function P(L, D) {
					u.$fk.registerCommand({
						id: L,
						handler: async (M, N) => {
							const A = M.get(i.$gj),
								R = M.get(m.$ll),
								O = M.get(C.$iIb),
								B = M.get(c.$$m),
								U = M.get(C.$lIb);
							let z;
							try {
								z = M.get(l.IExternalTerminalService);
							} catch {}
							const F = (0, r.$NWb)(
								N,
								M.get($.$fMb),
								M.get(v.$IY),
								M.get(S.$EY),
								M.get(r.$LWb),
							);
							return R.resolveAll(F.map((x) => ({ resource: x }))).then(
								async (x) => {
									const H = A.getValue(),
										q = B.getConnection() || D === "integrated",
										V = (0, h.$Qb)(x.filter((G) => G.success));
									if (q) {
										const G = {},
											K = V.map(({ stat: J }) => {
												const W = J.resource;
												return J.isDirectory
													? W
													: w.URI.from({
															scheme: W.scheme,
															authority: W.authority,
															fragment: W.fragment,
															query: W.query,
															path: (0, f.$rc)(W.path),
														});
											});
										for (const J of K) {
											if (G[J.path]) return;
											G[J.path] = !0;
											const W = await O.createTerminal({ config: { cwd: J } });
											W &&
												W.target !== y.TerminalLocation.Editor &&
												(F.length === 1 ||
													!N ||
													J.path === N.path ||
													J.path === (0, f.$rc)(N.path)) &&
												(O.setActiveInstance(W), U.showPanel(!0));
										}
									} else
										z &&
											(0, h.$Qb)(
												V.map(({ stat: G }) =>
													G.isDirectory
														? G.resource.fsPath
														: (0, f.$rc)(G.resource.fsPath),
												),
											).forEach((G) => {
												z.openTerminal(H.terminal.external, G);
											});
								},
							);
						},
					});
				}
				P(I, "external"), P(T, "integrated");
				let k = class extends p.$1c {
					constructor(D) {
						super(), (this._configurationService = D);
						const M = n.$Kj.and(
								d.$BQb.Scheme.isEqualTo(a.Schemas.file),
								n.$Kj.or(
									n.$Kj.equals("config.terminal.explorerKind", "integrated"),
									n.$Kj.equals("config.terminal.explorerKind", "both"),
								),
							),
							N = n.$Kj.and(
								d.$BQb.Scheme.isEqualTo(a.Schemas.file),
								n.$Kj.or(
									n.$Kj.equals("config.terminal.explorerKind", "external"),
									n.$Kj.equals("config.terminal.explorerKind", "both"),
								),
							);
						(this._openInIntegratedTerminalMenuItem = {
							group: "navigation",
							order: 30,
							command: { id: T, title: t.localize(6630, null) },
							when: n.$Kj.or(
								M,
								d.$BQb.Scheme.isEqualTo(a.Schemas.vscodeRemote),
							),
						}),
							(this._openInTerminalMenuItem = {
								group: "navigation",
								order: 31,
								command: { id: I, title: t.localize(6631, null) },
								when: N,
							}),
							E.$ZX.appendMenuItem(
								E.$XX.ExplorerContext,
								this._openInTerminalMenuItem,
							),
							E.$ZX.appendMenuItem(
								E.$XX.ExplorerContext,
								this._openInIntegratedTerminalMenuItem,
							),
							this.D(
								this._configurationService.onDidChangeConfiguration((A) => {
									(A.affectsConfiguration("terminal.explorerKind") ||
										A.affectsConfiguration("terminal.external")) &&
										this._refreshOpenInTerminalMenuItemTitle();
								}),
							),
							this._refreshOpenInTerminalMenuItemTitle();
					}
					isWindows() {
						const D = this._configurationService.getValue().terminal;
						if (o.$l && D.external?.windowsExec) {
							const M = (0, f.$sc)(D.external.windowsExec);
							if (M === "wt" || M === "wt.exe") return !0;
						}
						return !1;
					}
					_refreshOpenInTerminalMenuItemTitle() {
						this.isWindows() &&
							(this._openInTerminalMenuItem.command.title = t.localize(
								6632,
								null,
							));
					}
				};
				(e.ExternalTerminalContribution = k),
					(e.ExternalTerminalContribution = k = Ne([j(0, i.$gj)], k)),
					s.$Io
						.as(g.Extensions.Workbench)
						.registerWorkbenchContribution(k, b.LifecyclePhase.Restored);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3689],
		he([
			1, 0, 229, 29, 6, 3, 77, 19, 111, 67, 42, 4, 57, 5, 21, 44, 416, 3076,
			3078, 3080, 687, 18, 85,
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
				(e.$Cnc = e.$Bnc = void 0),
				(m = xi(m));
			let v = class {
				constructor(L, D, M, N) {
					(this.a = L), (this.b = D), (this.c = M), (this.d = N);
				}
				async createInputModel(L) {
					const D = new E.$Zc(),
						[M, N, A, R] = await Promise.all([
							this.c.createModelReference(L.base),
							this.c.createModelReference(L.result),
							P(L.input1, this.c, D),
							P(L.input2, this.c, D),
						]);
					D.add(M), D.add(N);
					const O = N.object.textEditorModel.uri.with({
							scheme: "merge-result",
						}),
						B = this.d.createModel(
							"",
							{
								languageId: N.object.textEditorModel.getLanguageId(),
								onDidChange: w.Event.None,
							},
							O,
						);
					D.add(B);
					const U = this.b.createInstance(f.$JZb),
						z = this.b.createInstance(
							b.$OZb,
							M.object.textEditorModel,
							A,
							R,
							B,
							U,
							{ resetResult: !0 },
							this.a,
						);
					return (
						D.add(z),
						await z.onInitialized,
						this.b.createInstance(S, z, D, N.object, L.result)
					);
				}
			};
			(e.$Bnc = v),
				(e.$Bnc = v = Ne([j(1, c.$Li), j(2, u.$MO), j(3, r.$QO)], v));
			let S = class extends p.$PO {
				constructor(L, D, M, N, A, R, O) {
					super(),
						(this.model = L),
						(this.g = D),
						(this.j = M),
						(this.resultUri = N),
						(this.n = A),
						(this.q = R),
						(this.r = O),
						(this.a = (0, C.observableValue)(
							this,
							this.model.resultTextModel.getAlternativeVersionId(),
						)),
						(this.b = (0, C.observableFromEvent)(
							this,
							(B) => this.model.resultTextModel.onDidChangeContent(B),
							() => this.model.resultTextModel.getAlternativeVersionId(),
						)),
						(this.isDirty = (0, C.derived)(
							this,
							(B) => this.b.read(B) !== this.a.read(B),
						)),
						(this.c = !1);
				}
				dispose() {
					this.g.dispose(), super.dispose();
				}
				async accept() {
					const L = await this.model.resultTextModel.getValue();
					this.j.textEditorModel.setValue(L),
						this.a.set(
							this.model.resultTextModel.getAlternativeVersionId(),
							void 0,
						),
						await this.n.save(this.j.textEditorModel.uri),
						(this.c = !0);
				}
				async s() {
					await this.n.revert(this.model.resultTextModel.uri),
						this.a.set(
							this.model.resultTextModel.getAlternativeVersionId(),
							void 0,
						),
						(this.c = !0);
				}
				shouldConfirmClose() {
					return !0;
				}
				async confirmClose(L) {
					(0, t.$nd)(() => L.some((N) => N === this));
					const D = L.some((N) => N.isDirty.get());
					let M;
					if (D) {
						const N = L.length > 1,
							A = N
								? (0, a.localize)(7593, null, L.length)
								: (0, a.localize)(
										7594,
										null,
										(0, d.$kh)(L[0].model.resultTextModel.uri),
									),
							R = L.some((B) => B.model.hasUnhandledConflicts.get()),
							O = [
								{
									label: R
										? (0, a.localize)(7595, null)
										: (0, a.localize)(7596, null),
									run: () => h.ConfirmResult.SAVE,
								},
								{
									label: (0, a.localize)(7597, null),
									run: () => h.ConfirmResult.DONT_SAVE,
								},
							];
						M = (
							await this.q.prompt({
								type: m.default.Info,
								message: A,
								detail: R
									? N
										? (0, a.localize)(7598, null)
										: (0, a.localize)(7599, null)
									: N
										? (0, a.localize)(7600, null)
										: (0, a.localize)(7601, null),
								buttons: O,
								cancelButton: { run: () => h.ConfirmResult.CANCEL },
							})
						).result;
					} else M = h.ConfirmResult.DONT_SAVE;
					return (
						M === h.ConfirmResult.SAVE
							? await Promise.all(L.map((N) => N.accept()))
							: M === h.ConfirmResult.DONT_SAVE &&
								(await Promise.all(L.map((N) => N.s()))),
						M
					);
				}
				async save(L) {
					this.c ||
						(async () => {
							const { confirmed: D } = await this.q.confirm({
								message: (0, a.localize)(7602, null),
								detail: (0, a.localize)(7603, null),
								primaryButton: (0, a.localize)(7604, null),
							});
							if (D) {
								await this.accept();
								const M = this.r
									.findEditors(this.resultUri)
									.filter((N) => N.editor.typeId === "mergeEditor.Input");
								await this.r.closeEditors(M);
							}
						})();
				}
				async revert(L) {}
			};
			S = Ne([j(4, y.$kZ), j(5, h.$GO), j(6, l.$IY)], S);
			let I = class {
				static {
					$ = this;
				}
				constructor(L, D, M, N) {
					(this.a = L), (this.b = D), (this.c = M), (this.d = N);
				}
				static {
					this.f = g.$p1.registerSource(
						"merge-editor.source",
						(0, a.localize)(7605, null),
					);
				}
				async createInputModel(L) {
					const D = new E.$Zc();
					let M;
					const N = D.add(new E.$Zc()),
						A = (V) => {
							(0, d.$gh)(L.result, V.resource) && (N.clear(), (M = V));
						};
					N.add(this.d.files.onDidCreate(A)), this.d.files.models.forEach(A);
					const [R, O, B, U] = await Promise.all([
						this.c.createModelReference(L.base),
						this.c.createModelReference(L.result),
						P(L.input1, this.c, D),
						P(L.input2, this.c, D),
					]);
					if ((D.add(R), D.add(O), !M)) throw new i.$gb();
					await M.save({ source: $.f });
					const x = M.textEditorModel
							.getLinesContent()
							.some((V) => V.startsWith(o.$znc.start)),
						H = this.b.createInstance(f.$JZb),
						q = this.b.createInstance(
							b.$OZb,
							R.object.textEditorModel,
							B,
							U,
							O.object.textEditorModel,
							H,
							{ resetResult: x },
							this.a,
						);
					return (
						D.add(q),
						await q.onInitialized,
						this.b.createInstance(T, q, D, M, this.a)
					);
				}
			};
			(e.$Cnc = I),
				(e.$Cnc = I = $ = Ne([j(1, c.$Li), j(2, u.$MO), j(3, y.$kZ)], I));
			let T = class extends p.$PO {
				constructor(L, D, M, N, A, R) {
					super(),
						(this.model = L),
						(this.c = D),
						(this.g = M),
						(this.j = N),
						(this.n = A),
						(this.q = R),
						(this.isDirty = (0, C.observableFromEvent)(
							this,
							w.Event.any(this.g.onDidChangeDirty, this.g.onDidSaveError),
							() => this.g.isDirty(),
						)),
						(this.a = !1),
						(this.b = new Date());
				}
				dispose() {
					this.c.dispose(), super.dispose(), this.r(!1);
				}
				r(L) {
					if (!this.a) {
						const D = this.model.unhandledConflictsCount.get(),
							M = new Date().getTime() - this.b.getTime();
						this.j.reportMergeEditorClosed({
							durationOpenedSecs: M / 1e3,
							remainingConflictCount: D,
							accepted: L,
							conflictCount: this.model.conflictCount,
							combinableConflictCount: this.model.combinableConflictCount,
							conflictsResolvedWithBase: this.model.conflictsResolvedWithBase,
							conflictsResolvedWithInput1:
								this.model.conflictsResolvedWithInput1,
							conflictsResolvedWithInput2:
								this.model.conflictsResolvedWithInput2,
							conflictsResolvedWithSmartCombination:
								this.model.conflictsResolvedWithSmartCombination,
							manuallySolvedConflictCountThatEqualNone:
								this.model.manuallySolvedConflictCountThatEqualNone,
							manuallySolvedConflictCountThatEqualSmartCombine:
								this.model.manuallySolvedConflictCountThatEqualSmartCombine,
							manuallySolvedConflictCountThatEqualInput1:
								this.model.manuallySolvedConflictCountThatEqualInput1,
							manuallySolvedConflictCountThatEqualInput2:
								this.model.manuallySolvedConflictCountThatEqualInput2,
							manuallySolvedConflictCountThatEqualNoneAndStartedWithBase:
								this.model
									.manuallySolvedConflictCountThatEqualNoneAndStartedWithBase,
							manuallySolvedConflictCountThatEqualNoneAndStartedWithInput1:
								this.model
									.manuallySolvedConflictCountThatEqualNoneAndStartedWithInput1,
							manuallySolvedConflictCountThatEqualNoneAndStartedWithInput2:
								this.model
									.manuallySolvedConflictCountThatEqualNoneAndStartedWithInput2,
							manuallySolvedConflictCountThatEqualNoneAndStartedWithBothNonSmart:
								this.model
									.manuallySolvedConflictCountThatEqualNoneAndStartedWithBothNonSmart,
							manuallySolvedConflictCountThatEqualNoneAndStartedWithBothSmart:
								this.model
									.manuallySolvedConflictCountThatEqualNoneAndStartedWithBothSmart,
						}),
							(this.a = !0);
					}
				}
				async accept() {
					this.r(!0), await this.g.save();
				}
				get resultUri() {
					return this.g.resource;
				}
				async save(L) {
					await this.g.save(L);
				}
				async revert(L) {
					await this.g.revert(L);
				}
				shouldConfirmClose() {
					return !0;
				}
				async confirmClose(L) {
					const D = L.length > 1,
						M = L.some((A) => A.isDirty.get()),
						N = L.some((A) => A.model.hasUnhandledConflicts.get());
					if (M) {
						const A = D
								? (0, a.localize)(7606, null, L.length)
								: (0, a.localize)(7607, null, (0, d.$kh)(L[0].resultUri)),
							{ result: R } = await this.n.prompt({
								type: m.default.Info,
								message: A,
								detail: N
									? D
										? (0, a.localize)(7608, null)
										: (0, a.localize)(7609, null)
									: D
										? (0, a.localize)(7610, null)
										: (0, a.localize)(7611, null),
								buttons: [
									{
										label: N
											? (0, a.localize)(7612, null)
											: (0, a.localize)(7613, null),
										run: () => h.ConfirmResult.SAVE,
									},
									{
										label: (0, a.localize)(7614, null),
										run: () => h.ConfirmResult.DONT_SAVE,
									},
								],
								cancelButton: { run: () => h.ConfirmResult.CANCEL },
							});
						return R;
					} else if (
						N &&
						!this.q.getBoolean(s.$g1b, n.StorageScope.PROFILE, !1)
					) {
						const { confirmed: A, checkboxChecked: R } = await this.n.confirm({
							message: D
								? (0, a.localize)(7615, null, L.length)
								: (0, a.localize)(7616, null, (0, d.$kh)(L[0].resultUri)),
							detail: N
								? D
									? (0, a.localize)(7617, null)
									: (0, a.localize)(7618, null)
								: void 0,
							primaryButton: N
								? (0, a.localize)(7619, null)
								: (0, a.localize)(7620, null),
							checkbox: { label: (0, a.localize)(7621, null) },
						});
						return (
							R &&
								this.q.store(
									s.$g1b,
									!0,
									n.StorageScope.PROFILE,
									n.StorageTarget.USER,
								),
							A ? h.ConfirmResult.SAVE : h.ConfirmResult.CANCEL
						);
					} else return h.ConfirmResult.SAVE;
				}
			};
			T = Ne([j(4, h.$GO), j(5, n.$lq)], T);
			async function P(k, L, D) {
				const M = await L.createModelReference(k.uri);
				return (
					D.add(M),
					{
						textModel: M.object.textEditorModel,
						title: k.title,
						description: k.description,
						detail: k.detail,
					}
				);
			}
		},
	),
		define(
			de[711],
			he([
				1, 0, 229, 77, 19, 28, 125, 4, 10, 22, 5, 73, 44, 399, 478, 3689, 3077,
				18, 170, 85,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Enc = e.$Dnc = void 0);
				class l {
					constructor(v, S, I, T) {
						(this.uri = v),
							(this.title = S),
							(this.detail = I),
							(this.description = T);
					}
				}
				e.$Dnc = l;
				let y = class extends n.$R1b {
					static {
						s = this;
					}
					static {
						this.ID = "mergeEditor.Input";
					}
					get U() {
						return this.X.getValue("mergeEditor.useWorkingCopy") ?? !1;
					}
					constructor(v, S, I, T, P, k, L, D, M, N, A, R, O) {
						super(T, void 0, k, L, D, M, A, R, O),
							(this.base = v),
							(this.input1 = S),
							(this.input2 = I),
							(this.result = T),
							(this.W = P),
							(this.X = N),
							(this.closeHandler = {
								showConfirm: () => this.c?.shouldConfirmClose() ?? !1,
								confirm: async (B) => {
									(0, t.$nd)(() => B.every((z) => z.editor instanceof s));
									const U = B.map((z) => z.editor.c).filter(E.$tg);
									return await this.c.confirmClose(U);
								},
							}),
							(this.Y = this.W.createInstance(
								this.U ? g.$Bnc : g.$Cnc,
								this.W.createInstance(p.$NZb),
							));
					}
					dispose() {
						super.dispose();
					}
					get typeId() {
						return s.ID;
					}
					get editorId() {
						return h.$b1.id;
					}
					get capabilities() {
						let v =
							super.capabilities | h.EditorInputCapabilities.MultipleEditors;
						return this.U && (v |= h.EditorInputCapabilities.Untitled), v;
					}
					getName() {
						return (0, d.localize)(7592, null, super.getName());
					}
					async resolve() {
						if (!this.c) {
							const v = this.D(
								await this.Y.createInputModel({
									base: this.base,
									input1: this.input1,
									input2: this.input2,
									result: this.result,
								}),
							);
							(this.c = v),
								this.D(
									(0, i.autorun)((S) => {
										v.isDirty.read(S), this.b.fire();
									}),
								),
								await this.c.model.onInitialized;
						}
						return this.c;
					}
					async accept() {
						await this.c?.accept();
					}
					async save(v, S) {
						await this.c?.save(S);
					}
					toUntyped() {
						return {
							input1: {
								resource: this.input1.uri,
								label: this.input1.title,
								description: this.input1.description,
								detail: this.input1.detail,
							},
							input2: {
								resource: this.input2.uri,
								label: this.input2.title,
								description: this.input2.description,
								detail: this.input2.detail,
							},
							base: { resource: this.base },
							result: { resource: this.result },
							options: { override: this.typeId },
						};
					}
					matches(v) {
						return this === v
							? !0
							: v instanceof s
								? (0, w.$gh)(this.base, v.base) &&
									(0, w.$gh)(this.input1.uri, v.input1.uri) &&
									(0, w.$gh)(this.input2.uri, v.input2.uri) &&
									(0, w.$gh)(this.result, v.result)
								: (0, h.$o1)(v)
									? (this.editorId === v.options?.override ||
											v.options?.override === void 0) &&
										(0, w.$gh)(this.base, v.base.resource) &&
										(0, w.$gh)(this.input1.uri, v.input1.resource) &&
										(0, w.$gh)(this.input2.uri, v.input2.resource) &&
										(0, w.$gh)(this.result, v.result.resource)
									: !1;
					}
					async revert(v, S) {
						return this.c?.revert(S);
					}
					isDirty() {
						return this.c?.isDirty.get() ?? !1;
					}
					setLanguageId(v, S) {
						this.c?.model.setLanguageId(v, S);
					}
				};
				(e.$Enc = y),
					(e.$Enc =
						y =
						s =
							Ne(
								[
									j(4, u.$Li),
									j(5, o.$IY),
									j(6, b.$kZ),
									j(7, a.$3N),
									j(8, r.$ll),
									j(9, m.$gj),
									j(10, f.$_Y),
									j(11, C.$XO),
									j(12, c.$QIb),
								],
								y,
							));
			},
		),
		