define(
			de[3772],
			he([
				1, 0, 7, 278, 3, 10, 8, 5, 39, 93, 35, 556, 3771, 206, 309, 11, 49, 40,
				801, 463, 345, 173, 1253, 91, 4, 2454,
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
				var S, I, T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iFc = e.$hFc = e.$gFc = e.$fFc = e.$eFc = e.$dFc = void 0),
					(t = mt(t));
				let P = class {
					constructor(R, O) {
						this.b = O;
						const B = this.b.getValue("editor");
						this.a = b.$OK.createFromRawSettings(
							B,
							s.$sjb.getInstance(R).value,
						).lineHeight;
					}
					getHeight(R) {
						return R.getHeight(this.a);
					}
					hasDynamicHeight(R) {
						return !1;
					}
					getTemplateId(R) {
						switch (R.type) {
							case "delete":
							case "insert":
								return L.TEMPLATE_ID;
							case "modified":
							case "unchanged":
								return D.TEMPLATE_ID;
							case "placeholder":
								return k.TEMPLATE_ID;
						}
					}
				};
				(e.$dFc = P), (e.$dFc = P = Ne([j(1, E.$gj)], P));
				let k = class {
					static {
						S = this;
					}
					static {
						this.TEMPLATE_ID = "cell_diff_placeholder";
					}
					constructor(R, O) {
						(this.notebookEditor = R), (this.a = O);
					}
					get templateId() {
						return S.TEMPLATE_ID;
					}
					renderTemplate(R) {
						const O = t.$(".cell-placeholder-body");
						t.$fhb(R, O);
						const B = new w.$Zc(),
							U = new h.$bFc(O),
							z = t.$fhb(O, t.$(".contents")),
							F = t.$fhb(
								z,
								t.$("span.text", { title: (0, v.localize)(8008, null) }),
							);
						return {
							body: O,
							container: R,
							placeholder: F,
							marginOverlay: U,
							elementDisposables: B,
						};
					}
					renderElement(R, O, B, U) {
						B.body.classList.remove("left", "right", "full"),
							B.elementDisposables.add(this.a.createInstance(h.$0Ec, R, B));
					}
					disposeTemplate(R) {
						R.container.innerText = "";
					}
					disposeElement(R, O, B) {
						B.elementDisposables.clear();
					}
				};
				(e.$eFc = k), (e.$eFc = k = S = Ne([j(1, d.$Li)], k));
				let L = class {
					static {
						I = this;
					}
					static {
						this.TEMPLATE_ID = "cell_diff_single";
					}
					constructor(R, O) {
						(this.notebookEditor = R), (this.a = O);
					}
					get templateId() {
						return I.TEMPLATE_ID;
					}
					renderTemplate(R) {
						const O = t.$(".cell-body");
						t.$fhb(R, O);
						const B = t.$(".cell-diff-editor-container");
						t.$fhb(O, B);
						const U = t.$fhb(O, t.$(".diagonal-fill")),
							z = t.$fhb(B, t.$(".input-header-container")),
							F = t.$fhb(B, t.$(".source-container")),
							{ editor: x, editorContainer: H } = this.b(F),
							q = t.$fhb(B, t.$(".metadata-header-container")),
							V = t.$fhb(B, t.$(".metadata-info-container")),
							G = t.$fhb(B, t.$(".output-header-container")),
							K = t.$fhb(B, t.$(".output-info-container")),
							J = t.$fhb(O, t.$(".border-container")),
							W = t.$fhb(J, t.$(".left-border")),
							X = t.$fhb(J, t.$(".right-border")),
							Y = t.$fhb(J, t.$(".top-border")),
							ie = t.$fhb(J, t.$(".bottom-border"));
						return {
							body: O,
							container: R,
							editorContainer: H,
							diffEditorContainer: B,
							diagonalFill: U,
							cellHeaderContainer: z,
							sourceEditor: x,
							metadataHeaderContainer: q,
							metadataInfoContainer: V,
							outputHeaderContainer: G,
							outputInfoContainer: K,
							leftBorder: W,
							rightBorder: X,
							topBorder: Y,
							bottomBorder: ie,
							elementDisposables: new w.$Zc(),
						};
					}
					b(R) {
						const O = t.$fhb(R, t.$(".editor-container"));
						return {
							editor: this.a.createInstance(
								c.$rwb,
								O,
								{
									...y.$wEc,
									glyphMargin: !1,
									dimension: {
										width:
											(this.notebookEditor.getLayoutInfo().width - 2 * a.$yEc) /
												2 -
											18,
										height: 0,
									},
									automaticLayout: !1,
									overflowWidgetsDomNode:
										this.notebookEditor.getOverflowContainerDomNode(),
								},
								{},
							),
							editorContainer: O,
						};
					}
					renderElement(R, O, B, U) {
						switch (
							(B.body.classList.remove("left", "right", "full"), R.type)
						) {
							case "delete":
								B.elementDisposables.add(
									this.a.createInstance(h.$$Ec, this.notebookEditor, R, B),
								);
								return;
							case "insert":
								B.elementDisposables.add(
									this.a.createInstance(h.$_Ec, this.notebookEditor, R, B),
								);
								return;
							default:
								break;
						}
					}
					disposeTemplate(R) {
						(R.container.innerText = ""),
							R.sourceEditor.dispose(),
							R.elementDisposables.dispose();
					}
					disposeElement(R, O, B) {
						B.elementDisposables.clear();
					}
				};
				(e.$fFc = L), (e.$fFc = L = I = Ne([j(1, d.$Li)], L));
				let D = class {
					static {
						T = this;
					}
					static {
						this.TEMPLATE_ID = "cell_diff_side_by_side";
					}
					constructor(R, O, B, U, z, F, x, H, q) {
						(this.notebookEditor = R),
							(this.a = O),
							(this.b = B),
							(this.c = U),
							(this.d = z),
							(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.i = q);
					}
					get templateId() {
						return T.TEMPLATE_ID;
					}
					renderTemplate(R) {
						const O = t.$(".cell-body");
						t.$fhb(R, O);
						const B = t.$(".cell-diff-editor-container");
						t.$fhb(O, B);
						const U = t.$fhb(B, t.$(".input-header-container")),
							z = t.$fhb(B, t.$(".source-container")),
							{ editor: F, editorContainer: x } = this.j(z),
							H = t.$fhb(z, t.$(".editor-input-toolbar-container")),
							q = t.$fhb(H, t.$("div.property-toolbar")),
							V = this.a.createInstance(l.$Syb, q, {
								actionViewItemProvider: (Q, Z) => {
									if (Q instanceof g.$2X)
										return new f.$M3b(
											Q,
											{ hoverDelegate: Z.hoverDelegate },
											this.c,
											this.g,
											this.f,
											this.h,
											this.b,
											this.i,
										);
								},
								highlightToggledItems: !0,
							}),
							G = t.$fhb(B, t.$(".metadata-header-container")),
							K = t.$fhb(B, t.$(".metadata-info-container")),
							J = t.$fhb(B, t.$(".output-header-container")),
							W = t.$fhb(B, t.$(".output-info-container")),
							X = t.$fhb(O, t.$(".border-container")),
							Y = t.$fhb(X, t.$(".left-border")),
							ie = t.$fhb(X, t.$(".right-border")),
							ne = t.$fhb(X, t.$(".top-border")),
							ee = t.$fhb(X, t.$(".bottom-border")),
							_ = new h.$cFc(O),
							te = new w.$Zc();
						return {
							body: O,
							container: R,
							diffEditorContainer: B,
							cellHeaderContainer: U,
							sourceEditor: F,
							editorContainer: x,
							inputToolbarContainer: H,
							toolbar: V,
							metadataHeaderContainer: G,
							metadataInfoContainer: K,
							outputHeaderContainer: J,
							outputInfoContainer: W,
							leftBorder: Y,
							rightBorder: ie,
							topBorder: ne,
							bottomBorder: ee,
							marginOverlay: _,
							elementDisposables: te,
						};
					}
					j(R) {
						const O = t.$fhb(R, t.$(".editor-container"));
						return {
							editor: this.a.createInstance(
								n.$3yb,
								O,
								{
									...y.$xEc,
									overflowWidgetsDomNode:
										this.notebookEditor.getOverflowContainerDomNode(),
									originalEditable: !1,
									ignoreTrimWhitespace: !1,
									automaticLayout: !1,
									dimension: { height: 0, width: 0 },
									renderSideBySide: !0,
									useInlineViewWhenSpaceIsLimited: !1,
								},
								{
									originalEditor: (0, h.$9Ec)(),
									modifiedEditor: (0, h.$9Ec)(),
								},
							),
							editorContainer: O,
						};
					}
					renderElement(R, O, B, U) {
						switch (
							(B.body.classList.remove("left", "right", "full"), R.type)
						) {
							case "unchanged":
								B.elementDisposables.add(
									this.a.createInstance(h.$aFc, this.notebookEditor, R, B),
								);
								return;
							case "modified":
								B.elementDisposables.add(
									this.a.createInstance(h.$aFc, this.notebookEditor, R, B),
								);
								return;
							default:
								break;
						}
					}
					disposeTemplate(R) {
						(R.container.innerText = ""),
							R.sourceEditor.dispose(),
							R.toolbar?.dispose(),
							R.elementDisposables.dispose();
					}
					disposeElement(R, O, B) {
						B.toolbar && (B.toolbar.context = void 0),
							B.elementDisposables.clear();
					}
				};
				(e.$gFc = D),
					(e.$gFc =
						D =
						T =
							Ne(
								[
									j(1, d.$Li),
									j(2, p.$Xxb),
									j(3, m.$uZ),
									j(4, g.$YX),
									j(5, C.$6j),
									j(6, o.$4N),
									j(7, u.$iP),
									j(8, $.$XK),
								],
								D,
							));
				class M extends i.$Oib {
					u(R) {
						if ((0, i.$Eib)(R.browserEvent.target)) {
							const O = typeof R.index > "u" ? [] : [R.index];
							this.k.setFocus(O, R.browserEvent);
						} else super.u(R);
					}
				}
				e.$hFc = M;
				let N = class extends r.$yMb {
					get rowsContainer() {
						return this.k.containerDomNode;
					}
					constructor(R, O, B, U, z, F, x, H, q) {
						super(R, O, B, U, F, z, x, H, q);
					}
					D(R) {
						return new M(this);
					}
					getCellViewScrollTop(R) {
						const O = this.indexOf(R);
						return this.k.elementTop(O);
					}
					getScrollHeight() {
						return this.k.scrollHeight;
					}
					triggerScrollFromMouseWheelEvent(R) {
						this.k.delegateScrollFromMouseWheelEvent(R);
					}
					delegateVerticalScrollbarPointerDown(R) {
						this.k.delegateVerticalScrollbarPointerDown(R);
					}
					clear() {
						super.splice(0, this.length);
					}
					updateElementHeight2(R, O) {
						const B = this.indexOf(R),
							U = this.getFocus();
						this.k.updateElementHeight(B, O, U.length ? U[0] : null);
					}
					style(R) {
						const O = this.k.domId;
						this.p || (this.p = t.$Rgb(this.k.domNode));
						const B = O && `.${O}`,
							U = [];
						R.listBackground &&
							U.push(
								`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows { background: ${R.listBackground}; }`,
							),
							R.listFocusBackground &&
								(U.push(
									`.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { background-color: ${R.listFocusBackground}; }`,
								),
								U.push(
									`.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused:hover { background-color: ${R.listFocusBackground}; }`,
								)),
							R.listFocusForeground &&
								U.push(
									`.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { color: ${R.listFocusForeground}; }`,
								),
							R.listActiveSelectionBackground &&
								(U.push(
									`.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { background-color: ${R.listActiveSelectionBackground}; }`,
								),
								U.push(
									`.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected:hover { background-color: ${R.listActiveSelectionBackground}; }`,
								)),
							R.listActiveSelectionForeground &&
								U.push(
									`.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { color: ${R.listActiveSelectionForeground}; }`,
								),
							R.listFocusAndSelectionBackground &&
								U.push(`
				.monaco-drag-image,
				.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected.focused { background-color: ${R.listFocusAndSelectionBackground}; }
			`),
							R.listFocusAndSelectionForeground &&
								U.push(`
				.monaco-drag-image,
				.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected.focused { color: ${R.listFocusAndSelectionForeground}; }
			`),
							R.listInactiveFocusBackground &&
								(U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { background-color:  ${R.listInactiveFocusBackground}; }`,
								),
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused:hover { background-color:  ${R.listInactiveFocusBackground}; }`,
								)),
							R.listInactiveSelectionBackground &&
								(U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { background-color:  ${R.listInactiveSelectionBackground}; }`,
								),
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected:hover { background-color:  ${R.listInactiveSelectionBackground}; }`,
								)),
							R.listInactiveSelectionForeground &&
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { color: ${R.listInactiveSelectionForeground}; }`,
								),
							R.listHoverBackground &&
								U.push(
									`.monaco-list${B}:not(.drop-target) > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover:not(.selected):not(.focused) { background-color:  ${R.listHoverBackground}; }`,
								),
							R.listHoverForeground &&
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${R.listHoverForeground}; }`,
								),
							R.listSelectionOutline &&
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { outline: 1px dotted ${R.listSelectionOutline}; outline-offset: -1px; }`,
								),
							R.listFocusOutline &&
								U.push(`
				.monaco-drag-image,
				.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { outline: 1px solid ${R.listFocusOutline}; outline-offset: -1px; }
			`),
							R.listInactiveFocusOutline &&
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { outline: 1px dotted ${R.listInactiveFocusOutline}; outline-offset: -1px; }`,
								),
							R.listHoverOutline &&
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover { outline: 1px dashed ${R.listHoverOutline}; outline-offset: -1px; }`,
								),
							R.listDropOverBackground &&
								U.push(`
				.monaco-list${B}.drop-target,
				.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows.drop-target,
				.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-row.drop-target { background-color: ${R.listDropOverBackground} !important; color: inherit !important; }
			`);
						const z = U.join(`
`);
						z !== this.p.textContent && (this.p.textContent = z);
					}
				};
				(e.$iFc = N),
					(e.$iFc = N = Ne([j(6, r.$fMb), j(7, E.$gj), j(8, d.$Li)], N));
			},
		),
		