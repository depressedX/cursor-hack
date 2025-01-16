define(
			de[4168],
			he([
				1, 0, 7, 495, 3, 54, 4, 10, 22, 73, 25, 405, 19, 11, 5, 173, 8, 128,
				106, 377, 95, 72,
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
				var y, $, v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aPc = e.$_Oc = e.$$Oc = e.$0Oc = e.$9Oc = void 0),
					(t = mt(t)),
					(E = mt(E)),
					(C = mt(C));
				class S {
					static {
						this.ITEM_HEIGHT = 22;
					}
					getHeight(D) {
						return S.ITEM_HEIGHT;
					}
					getTemplateId(D) {
						if (D instanceof a.$JNc) return I.TEMPLATE_ID;
						if (D instanceof a.$INc) return T.TEMPLATE_ID;
						if (D instanceof a.$FNc) return P.TEMPLATE_ID;
						throw (
							(console.error("Invalid search tree element", D),
							new Error("Invalid search tree element"))
						);
					}
				}
				e.$9Oc = S;
				let I = class extends w.$1c {
					static {
						y = this;
					}
					static {
						this.TEMPLATE_ID = "folderMatch";
					}
					constructor(D, M, N, A, R, O) {
						super(),
							(this.a = D),
							(this.b = M),
							(this.c = N),
							(this.f = A),
							(this.h = R),
							(this.j = O),
							(this.templateId = y.TEMPLATE_ID);
					}
					renderCompressedElements(D, M, N, A) {
						const R = D.element,
							O = R.elements[R.elements.length - 1],
							B = R.elements.map((U) => U.name());
						if (O.resource) {
							const U =
								O instanceof a.$LNc
									? m.FileKind.ROOT_FOLDER
									: m.FileKind.FOLDER;
							N.label.setResource(
								{ resource: O.resource, name: B },
								{
									fileKind: U,
									separator: this.f.getSeparator(O.resource.scheme),
								},
							);
						} else N.label.setLabel(C.localize(9297, null));
						this.m(O, N);
					}
					renderTemplate(D) {
						const M = new w.$Zc(),
							N = t.$fhb(D, t.$(".foldermatch")),
							A = this.b.create(N, {
								supportDescriptionHighlights: !0,
								supportHighlights: !0,
							});
						M.add(A);
						const R = new i.$Hob(t.$fhb(N, t.$(".badge")), {}, f.$zyb),
							O = t.$fhb(N, t.$(".actionBarContainer")),
							B = new w.$Zc();
						M.add(B);
						const U = M.add(this.j.createScoped(D));
						b.$ooc.MatchFocusKey.bindTo(U).set(!1),
							b.$ooc.FileFocusKey.bindTo(U).set(!1),
							b.$ooc.FolderFocusKey.bindTo(U).set(!0);
						const z = this.D(this.h.createChild(new o.$Ki([p.$6j, U]))),
							F = M.add(
								z.createInstance(g.$Tyb, O, c.$XX.SearchActionMenu, {
									menuOptions: { shouldForwardArgs: !0 },
									hiddenItemStrategy: g.HiddenItemStrategy.Ignore,
									toolbarOptions: { primaryGroup: (x) => /^inline/.test(x) },
								}),
							);
						return {
							label: A,
							badge: R,
							actions: F,
							disposables: M,
							elementDisposables: B,
							contextKeyService: U,
						};
					}
					renderElement(D, M, N) {
						const A = D.element;
						if (A.resource) {
							const R = this.c.getWorkspaceFolder(A.resource);
							R && (0, h.$gh)(R.uri, A.resource)
								? N.label.setFile(A.resource, {
										fileKind: m.FileKind.ROOT_FOLDER,
										hidePath: !0,
									})
								: N.label.setFile(A.resource, {
										fileKind: m.FileKind.FOLDER,
										hidePath: this.a.ud,
									});
						} else N.label.setLabel(C.localize(9298, null));
						b.$ooc.IsEditableItemKey.bindTo(N.contextKeyService).set(
							!A.hasOnlyReadOnlyMatches(),
						),
							N.elementDisposables.add(
								A.onChange(() => {
									b.$ooc.IsEditableItemKey.bindTo(N.contextKeyService).set(
										!A.hasOnlyReadOnlyMatches(),
									);
								}),
							),
							this.m(A, N);
					}
					disposeElement(D, M, N) {
						N.elementDisposables.clear();
					}
					disposeCompressedElements(D, M, N, A) {
						N.elementDisposables.clear();
					}
					disposeTemplate(D) {
						D.disposables.dispose();
					}
					m(D, M) {
						const N = D.recursiveMatchCount();
						M.badge.setCount(N),
							M.badge.setTitleFormat(
								N > 1 ? C.localize(9299, null, N) : C.localize(9300, null, N),
							),
							(M.actions.context = { viewer: this.a.getControl(), element: D });
					}
				};
				(e.$0Oc = I),
					(e.$0Oc =
						I =
						y =
							Ne([j(2, u.$Vi), j(3, r.$3N), j(4, n.$Li), j(5, p.$6j)], I));
				let T = class extends w.$1c {
					static {
						$ = this;
					}
					static {
						this.TEMPLATE_ID = "fileMatch";
					}
					constructor(D, M, N, A, R, O) {
						super(),
							(this.a = D),
							(this.b = M),
							(this.c = N),
							(this.f = A),
							(this.h = R),
							(this.j = O),
							(this.templateId = $.TEMPLATE_ID);
					}
					renderCompressedElements(D, M, N, A) {
						throw new Error(
							"Should never happen since node is incompressible.",
						);
					}
					renderTemplate(D) {
						const M = new w.$Zc(),
							N = new w.$Zc();
						M.add(N);
						const A = t.$fhb(D, t.$(".filematch")),
							R = this.b.create(A);
						M.add(R);
						const O = new i.$Hob(t.$fhb(A, t.$(".badge")), {}, f.$zyb),
							B = t.$fhb(A, t.$(".actionBarContainer")),
							U = M.add(this.j.createScoped(D));
						b.$ooc.MatchFocusKey.bindTo(U).set(!1),
							b.$ooc.FileFocusKey.bindTo(U).set(!0),
							b.$ooc.FolderFocusKey.bindTo(U).set(!1);
						const z = this.D(this.h.createChild(new o.$Ki([p.$6j, U]))),
							F = M.add(
								z.createInstance(g.$Tyb, B, c.$XX.SearchActionMenu, {
									menuOptions: { shouldForwardArgs: !0 },
									hiddenItemStrategy: g.HiddenItemStrategy.Ignore,
									toolbarOptions: { primaryGroup: (x) => /^inline/.test(x) },
								}),
							);
						return {
							el: A,
							label: R,
							badge: O,
							actions: F,
							disposables: M,
							elementDisposables: N,
							contextKeyService: U,
						};
					}
					renderElement(D, M, N) {
						const A = D.element;
						N.el.setAttribute("data-resource", A.resource.toString());
						const R = this.f.getValue("search").decorations;
						N.label.setFile(A.resource, {
							hidePath: this.a.ud && !(A.parent() instanceof a.$MNc),
							hideIcon: !1,
							fileDecorations: { colors: R.colors, badges: R.badges },
						});
						const O = A.count();
						N.badge.setCount(O),
							N.badge.setTitleFormat(
								O > 1 ? C.localize(9301, null, O) : C.localize(9302, null, O),
							),
							(N.actions.context = { viewer: this.a.getControl(), element: A }),
							b.$ooc.IsEditableItemKey.bindTo(N.contextKeyService).set(
								!A.hasOnlyReadOnlyMatches(),
							),
							N.elementDisposables.add(
								A.onChange(() => {
									b.$ooc.IsEditableItemKey.bindTo(N.contextKeyService).set(
										!A.hasOnlyReadOnlyMatches(),
									);
								}),
							),
							N.el.parentElement?.parentElement
								?.querySelector(".monaco-tl-twistie")
								?.classList.add("force-twistie");
					}
					disposeElement(D, M, N) {
						N.elementDisposables.clear();
					}
					disposeTemplate(D) {
						D.disposables.dispose();
					}
				};
				(e.$$Oc = T),
					(e.$$Oc =
						T =
						$ =
							Ne([j(2, u.$Vi), j(3, d.$gj), j(4, n.$Li), j(5, p.$6j)], T));
				let P = class extends w.$1c {
					static {
						v = this;
					}
					static {
						this.TEMPLATE_ID = "match";
					}
					constructor(D, M, N, A, R, O) {
						super(),
							(this.a = D),
							(this.b = M),
							(this.c = N),
							(this.f = A),
							(this.h = R),
							(this.j = O),
							(this.templateId = v.TEMPLATE_ID);
					}
					renderCompressedElements(D, M, N, A) {
						throw new Error(
							"Should never happen since node is incompressible.",
						);
					}
					renderTemplate(D) {
						D.classList.add("linematch");
						const M = t.$fhb(D, t.$("span.matchLineNum")),
							N = t.$fhb(D, t.$("a.plain.match")),
							A = t.$fhb(N, t.$("span")),
							R = t.$fhb(N, t.$("span.findInFileMatch")),
							O = t.$fhb(N, t.$("span.replaceMatch")),
							B = t.$fhb(N, t.$("span")),
							U = t.$fhb(D, t.$("span.actionBarContainer")),
							z = new w.$Zc(),
							F = z.add(this.h.createScoped(D));
						b.$ooc.MatchFocusKey.bindTo(F).set(!0),
							b.$ooc.FileFocusKey.bindTo(F).set(!1),
							b.$ooc.FolderFocusKey.bindTo(F).set(!1);
						const x = this.D(this.f.createChild(new o.$Ki([p.$6j, F]))),
							H = z.add(
								x.createInstance(g.$Tyb, U, c.$XX.SearchActionMenu, {
									menuOptions: { shouldForwardArgs: !0 },
									hiddenItemStrategy: g.HiddenItemStrategy.Ignore,
									toolbarOptions: { primaryGroup: (q) => /^inline/.test(q) },
								}),
							);
						return {
							parent: N,
							before: A,
							match: R,
							replace: O,
							after: B,
							lineNumber: M,
							actions: H,
							disposables: z,
							contextKeyService: F,
						};
					}
					renderElement(D, M, N) {
						const A = D.element,
							R = A.preview(),
							O =
								this.a.model.isReplaceActive() &&
								!!this.a.model.replaceString &&
								!(A instanceof a.$HNc && A.isReadonly());
						(N.before.textContent = R.before),
							(N.match.textContent = R.inside),
							N.match.classList.toggle("replace", O),
							(N.replace.textContent = O ? A.replaceString : ""),
							(N.after.textContent = R.after);
						const B = (
							R.fullBefore +
							(O ? A.replaceString : R.inside) +
							R.after
						)
							.trim()
							.substr(0, 999);
						N.disposables.add(
							this.j.setupManagedHover((0, s.$cib)("mouse"), N.parent, B),
						),
							b.$ooc.IsEditableItemKey.bindTo(N.contextKeyService).set(
								!(A instanceof a.$HNc && A.isReadonly()),
							);
						const U = A.range().endLineNumber - A.range().startLineNumber,
							z = U > 0 ? `+${U}` : "",
							F = this.c.getValue("search").showLineNumbers,
							x = F ? `${A.range().startLineNumber}:` : "";
						N.lineNumber.classList.toggle("show", U > 0 || F),
							(N.lineNumber.textContent = x + z),
							N.disposables.add(
								this.j.setupManagedHover(
									(0, s.$cib)("mouse"),
									N.lineNumber,
									this.m(A, F),
								),
							),
							(N.actions.context = { viewer: this.a.getControl(), element: A });
					}
					disposeTemplate(D) {
						D.disposables.dispose();
					}
					m(D, M) {
						const N = D.range().startLineNumber,
							A = D.range().endLineNumber - D.range().startLineNumber,
							R = M ? C.localize(9303, null, N, A) + " " : "",
							O = A > 0 ? "+ " + C.localize(9304, null, A) : "";
						return R + O;
					}
				};
				(e.$_Oc = P),
					(e.$_Oc =
						P =
						v =
							Ne(
								[
									j(1, u.$Vi),
									j(2, d.$gj),
									j(3, n.$Li),
									j(4, p.$6j),
									j(5, l.$Uyb),
								],
								P,
							));
				let k = class {
					constructor(D, M) {
						(this.a = D), (this.b = M);
					}
					getWidgetAriaLabel() {
						return C.localize(9305, null);
					}
					getAriaLabel(D) {
						if (D instanceof a.$JNc) {
							const M = D.allDownstreamFileMatches().reduce(
								(N, A) => N + A.count(),
								0,
							);
							return D.resource
								? C.localize(9306, null, M, D.name())
								: C.localize(9307, null, M);
						}
						if (D instanceof a.$INc) {
							const M =
								this.b.getUriLabel(D.resource, { relative: !0 }) ||
								D.resource.fsPath;
							return C.localize(9308, null, D.count(), D.name(), E.$rc(M));
						}
						if (D instanceof a.$FNc) {
							const M = D,
								N = this.a.model,
								A = N.isReplaceActive() && !!N.replaceString,
								R = M.getMatchString(),
								O = M.range(),
								B = M.text().substr(0, O.endColumn + 150);
							return A
								? C.localize(9309, null, B, O.startColumn, R, M.replaceString)
								: C.localize(9310, null, B, O.startColumn, R);
						}
						return null;
					}
				};
				(e.$aPc = k), (e.$aPc = k = Ne([j(1, r.$3N)], k));
			},
		),
		