define(de[555], he([1, 0, 8]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.MarkersContextKeys = e.Markers = e.MarkersViewMode = void 0);
			var i;
			(function (C) {
				(C.Table = "table"), (C.Tree = "tree");
			})(i || (e.MarkersViewMode = i = {}));
			var w;
			(function (C) {
				(C.MARKERS_CONTAINER_ID = "workbench.panel.markers"),
					(C.MARKERS_VIEW_ID = "workbench.panel.markers.view"),
					(C.MARKERS_VIEW_STORAGE_ID = "workbench.panel.markers"),
					(C.MARKER_COPY_ACTION_ID = "problems.action.copy"),
					(C.MARKER_COPY_MESSAGE_ACTION_ID = "problems.action.copyMessage"),
					(C.RELATED_INFORMATION_COPY_MESSAGE_ACTION_ID =
						"problems.action.copyRelatedInformationMessage"),
					(C.FOCUS_PROBLEMS_FROM_FILTER =
						"problems.action.focusProblemsFromFilter"),
					(C.MARKERS_VIEW_FOCUS_FILTER = "problems.action.focusFilter"),
					(C.MARKERS_VIEW_CLEAR_FILTER_TEXT =
						"problems.action.clearFilterText"),
					(C.MARKERS_VIEW_SHOW_MULTILINE_MESSAGE =
						"problems.action.showMultilineMessage"),
					(C.MARKERS_VIEW_SHOW_SINGLELINE_MESSAGE =
						"problems.action.showSinglelineMessage"),
					(C.MARKER_OPEN_ACTION_ID = "problems.action.open"),
					(C.MARKER_OPEN_SIDE_ACTION_ID = "problems.action.openToSide"),
					(C.MARKER_SHOW_PANEL_ID = "workbench.action.showErrorsWarnings"),
					(C.MARKER_SHOW_QUICK_FIX = "problems.action.showQuickFixes"),
					(C.TOGGLE_MARKERS_VIEW_ACTION_ID =
						"workbench.actions.view.toggleProblems");
			})(w || (e.Markers = w = {}));
			var E;
			(function (C) {
				(C.MarkersViewModeContextKey = new t.$5j("problemsViewMode", i.Tree)),
					(C.MarkersTreeVisibilityContextKey = new t.$5j(
						"problemsVisibility",
						!1,
					)),
					(C.MarkerFocusContextKey = new t.$5j("problemFocus", !1)),
					(C.MarkerViewFilterFocusContextKey = new t.$5j(
						"problemsFilterFocus",
						!1,
					)),
					(C.RelatedInformationFocusContextKey = new t.$5j(
						"relatedInformationFocus",
						!1,
					)),
					(C.ShowErrorsFilterContextKey = new t.$5j(
						"problems.filter.errors",
						!0,
					)),
					(C.ShowWarningsFilterContextKey = new t.$5j(
						"problems.filter.warnings",
						!0,
					)),
					(C.ShowInfoFilterContextKey = new t.$5j("problems.filter.info", !0)),
					(C.ShowActiveFileFilterContextKey = new t.$5j(
						"problems.filter.activeFile",
						!1,
					)),
					(C.ShowExcludedFilesFilterContextKey = new t.$5j(
						"problems.filter.excludedFiles",
						!0,
					));
			})(E || (e.MarkersContextKeys = E = {}));
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1248],
		he([1, 0, 7, 50, 49, 799, 3, 6, 14, 26, 198, 555, 2449]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ARc = e.$zRc = e.$yRc = void 0),
				(t = mt(t)),
				(E = xi(E));
			class h extends C.$1c {
				constructor(p, o) {
					super(),
						(this.b = o),
						(this.a = this.D(new d.$re())),
						(this.onDidChange = this.a.event),
						(this.c =
							a.MarkersContextKeys.ShowExcludedFilesFilterContextKey.bindTo(
								this.b,
							)),
						(this.f =
							a.MarkersContextKeys.ShowActiveFileFilterContextKey.bindTo(
								this.b,
							)),
						(this.g = a.MarkersContextKeys.ShowWarningsFilterContextKey.bindTo(
							this.b,
						)),
						(this.h = a.MarkersContextKeys.ShowErrorsFilterContextKey.bindTo(
							this.b,
						)),
						(this.j = a.MarkersContextKeys.ShowInfoFilterContextKey.bindTo(
							this.b,
						)),
						this.h.set(p.showErrors),
						this.g.set(p.showWarnings),
						this.j.set(p.showInfos),
						this.c.set(p.excludedFiles),
						this.f.set(p.activeFile),
						(this.filterHistory = p.filterHistory);
				}
				get excludedFiles() {
					return !!this.c.get();
				}
				set excludedFiles(p) {
					this.c.get() !== p &&
						(this.c.set(p), this.a.fire({ excludedFiles: !0 }));
				}
				get activeFile() {
					return !!this.f.get();
				}
				set activeFile(p) {
					this.f.get() !== p &&
						(this.f.set(p), this.a.fire({ activeFile: !0 }));
				}
				get showWarnings() {
					return !!this.g.get();
				}
				set showWarnings(p) {
					this.g.get() !== p &&
						(this.g.set(p), this.a.fire({ showWarnings: !0 }));
				}
				get showErrors() {
					return !!this.h.get();
				}
				set showErrors(p) {
					this.h.get() !== p &&
						(this.h.set(p), this.a.fire({ showErrors: !0 }));
				}
				get showInfos() {
					return !!this.j.get();
				}
				set showInfos(p) {
					this.j.get() !== p && (this.j.set(p), this.a.fire({ showInfos: !0 }));
				}
			}
			e.$yRc = h;
			class c extends i.$rj {
				static {
					this.ID = "workbench.actions.problems.quickfix";
				}
				static {
					this.a =
						"markers-panel-action-quickfix " +
						r.ThemeIcon.asClassName(m.$ak.lightBulb);
				}
				static {
					this.b = c.a + " autofixable";
				}
				get quickFixes() {
					return this.f;
				}
				set quickFixes(p) {
					(this.f = p), (this.enabled = this.f.length > 0);
				}
				autoFixable(p) {
					this.class = p ? c.b : c.a;
				}
				constructor(p) {
					super(c.ID, E.default.MARKERS_PANEL_ACTION_TOOLTIP_QUICKFIX, c.a, !1),
						(this.marker = p),
						(this.c = this.D(new d.$re())),
						(this.onShowQuickFixes = this.c.event),
						(this.f = []);
				}
				run() {
					return this.c.fire(), Promise.resolve();
				}
			}
			e.$zRc = c;
			let n = class extends u.$_ib {
				constructor(p, o, f) {
					super(null, p, { ...o, icon: !0, label: !1 }), (this.a = f);
				}
				onClick(p) {
					t.$ahb.stop(p, !0), this.showQuickFixes();
				}
				showQuickFixes() {
					if (!this.element || !this.isEnabled()) return;
					const p = t.$tgb(this.element),
						o = this.action.quickFixes;
					o.length &&
						this.a.showContextMenu({
							getAnchor: () => ({ x: p.left + 10, y: p.top + p.height + 4 }),
							getActions: () => o,
						});
				}
			};
			(e.$ARc = n), (e.$ARc = n = Ne([j(2, w.$Xxb)], n));
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3075],
		he([
			1, 0, 4, 7, 6, 3, 5, 93, 410, 988, 90, 673, 105, 73, 1247, 497, 41, 1248,
			265, 799, 28, 17, 667, 111, 72,
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
				(e.$MRc = void 0),
				(i = mt(i)),
				(b = xi(b)),
				($ = xi($));
			const P = i.$;
			let k = class {
				static {
					S = this;
				}
				static {
					this.TEMPLATE_ID = "severity";
				}
				constructor(B, U) {
					(this.c = B), (this.d = U), (this.templateId = S.TEMPLATE_ID);
				}
				renderTemplate(B) {
					const U = i.$fhb(B, P(".severity")),
						z = i.$fhb(U, P("")),
						F = i.$fhb(B, P(".actions"));
					return {
						actionBar: new h.$eib(F, {
							actionViewItemProvider: (H, q) =>
								H.id === o.$zRc.ID
									? this.d.createInstance(o.$ARc, H, q)
									: void 0,
						}),
						icon: z,
					};
				}
				renderElement(B, U, z, F) {
					const x = (q) => {
						(0, s.$ug)(q) ||
							i.$Egb(z.icon, "monaco-table-td").classList.toggle("quickFix", q);
					};
					(z.icon.title = u.MarkerSeverity.toString(B.marker.severity)),
						(z.icon.className = `marker-icon ${$.default.toString(u.MarkerSeverity.toSeverity(B.marker.severity))} codicon ${a.SeverityIcon.className(u.MarkerSeverity.toSeverity(B.marker.severity))}`),
						z.actionBar.clear();
					const H = this.c.getViewModel(B);
					if (H) {
						const q = H.quickFixAction;
						z.actionBar.push([q], { icon: !0, label: !1 }),
							x(H.quickFixAction.enabled),
							q.onDidChange(({ enabled: V }) => x(V)),
							q.onShowQuickFixes(() => {
								const V = z.actionBar.viewItems[0];
								V && V.showQuickFixes();
							});
					}
				}
				disposeTemplate(B) {}
			};
			k = S = Ne([j(1, C.$Li)], k);
			let L = class {
				static {
					I = this;
				}
				static {
					this.TEMPLATE_ID = "code";
				}
				constructor(B, U) {
					(this.c = B), (this.d = U), (this.templateId = I.TEMPLATE_ID);
				}
				renderTemplate(B) {
					const U = new E.$Zc(),
						z = i.$fhb(B, P(".code")),
						F = U.add(new m.$Wob(z));
					F.element.classList.add("source-label");
					const x = U.add(new m.$Wob(z));
					x.element.classList.add("code-label");
					const H = U.add(
						new g.Link(z, { href: "", label: "" }, {}, this.c, this.d),
					);
					return {
						codeColumn: z,
						sourceLabel: F,
						codeLabel: x,
						codeLink: H,
						templateDisposable: U,
					};
				}
				renderElement(B, U, z, F) {
					if (
						(z.codeColumn.classList.remove("code-label"),
						z.codeColumn.classList.remove("code-link"),
						B.marker.source && B.marker.code)
					)
						if (typeof B.marker.code == "string")
							z.codeColumn.classList.add("code-label"),
								(z.codeColumn.title = `${B.marker.source} (${B.marker.code})`),
								z.sourceLabel.set(B.marker.source, B.sourceMatches),
								z.codeLabel.set(B.marker.code, B.codeMatches);
						else {
							z.codeColumn.classList.add("code-link"),
								(z.codeColumn.title = `${B.marker.source} (${B.marker.code.value})`),
								z.sourceLabel.set(B.marker.source, B.sourceMatches);
							const x = z.templateDisposable.add(
								new m.$Wob(P(".code-link-label")),
							);
							x.set(B.marker.code.value, B.codeMatches),
								(z.codeLink.link = {
									href: B.marker.code.target.toString(),
									title: B.marker.code.target.toString(),
									label: x.element,
								});
						}
					else (z.codeColumn.title = ""), z.sourceLabel.set("-");
				}
				disposeTemplate(B) {
					B.templateDisposable.dispose();
				}
			};
			L = I = Ne([j(0, v.$Uyb), j(1, p.$7rb)], L);
			class D {
				constructor() {
					this.templateId = D.TEMPLATE_ID;
				}
				static {
					this.TEMPLATE_ID = "message";
				}
				renderTemplate(B) {
					const U = i.$fhb(B, P(".message")),
						z = new m.$Wob(U);
					return { columnElement: U, highlightedLabel: z };
				}
				renderElement(B, U, z, F) {
					(z.columnElement.title = B.marker.message),
						z.highlightedLabel.set(B.marker.message, B.messageMatches);
				}
				disposeTemplate(B) {
					B.highlightedLabel.dispose();
				}
			}
			let M = class {
				static {
					T = this;
				}
				static {
					this.TEMPLATE_ID = "file";
				}
				constructor(B) {
					(this.c = B), (this.templateId = T.TEMPLATE_ID);
				}
				renderTemplate(B) {
					const U = i.$fhb(B, P(".file")),
						z = new m.$Wob(U);
					z.element.classList.add("file-label");
					const F = new m.$Wob(U);
					return (
						F.element.classList.add("file-position"),
						{ columnElement: U, fileLabel: z, positionLabel: F }
					);
				}
				renderElement(B, U, z, F) {
					const x = b.default.MARKERS_PANEL_AT_LINE_COL_NUMBER(
						B.marker.startLineNumber,
						B.marker.startColumn,
					);
					(z.columnElement.title = `${this.c.getUriLabel(B.marker.resource, { relative: !1 })} ${x}`),
						z.fileLabel.set(
							this.c.getUriLabel(B.marker.resource, { relative: !0 }),
							B.fileMatches,
						),
						z.positionLabel.set(x, void 0);
				}
				disposeTemplate(B) {
					B.fileLabel.dispose(), B.positionLabel.dispose();
				}
			};
			M = T = Ne([j(0, c.$3N)], M);
			class N {
				constructor() {
					this.templateId = N.TEMPLATE_ID;
				}
				static {
					this.TEMPLATE_ID = "owner";
				}
				renderTemplate(B) {
					const U = i.$fhb(B, P(".owner")),
						z = new m.$Wob(U);
					return { columnElement: U, highlightedLabel: z };
				}
				renderElement(B, U, z, F) {
					(z.columnElement.title = B.marker.owner),
						z.highlightedLabel.set(B.marker.owner, B.ownerMatches);
				}
				disposeTemplate(B) {
					B.highlightedLabel.dispose();
				}
			}
			class A {
				constructor() {
					this.headerRowHeight = A.HEADER_ROW_HEIGHT;
				}
				static {
					this.HEADER_ROW_HEIGHT = 24;
				}
				static {
					this.ROW_HEIGHT = 24;
				}
				getHeight(B) {
					return A.ROW_HEIGHT;
				}
			}
			let R = class extends E.$1c {
				constructor(B, U, z, F, x, H, q) {
					super(),
						(this.h = B),
						(this.j = U),
						(this.n = z),
						(this.q = F),
						(this.r = H),
						(this.s = q),
						(this.c = 0),
						(this.g = this.r.createInstance(
							d.$AMb,
							"Markers",
							this.h,
							new A(),
							[
								{
									label: "",
									tooltip: "",
									weight: 0,
									minimumWidth: 36,
									maximumWidth: 36,
									templateId: k.TEMPLATE_ID,
									project(X) {
										return X;
									},
								},
								{
									label: (0, t.localize)(7488, null),
									tooltip: "",
									weight: 1,
									minimumWidth: 100,
									maximumWidth: 300,
									templateId: L.TEMPLATE_ID,
									project(X) {
										return X;
									},
								},
								{
									label: (0, t.localize)(7489, null),
									tooltip: "",
									weight: 4,
									templateId: D.TEMPLATE_ID,
									project(X) {
										return X;
									},
								},
								{
									label: (0, t.localize)(7490, null),
									tooltip: "",
									weight: 2,
									templateId: M.TEMPLATE_ID,
									project(X) {
										return X;
									},
								},
								{
									label: (0, t.localize)(7491, null),
									tooltip: "",
									weight: 1,
									minimumWidth: 100,
									maximumWidth: 300,
									templateId: N.TEMPLATE_ID,
									project(X) {
										return X;
									},
								},
							],
							[
								this.r.createInstance(k, this.j),
								this.r.createInstance(L),
								this.r.createInstance(D),
								this.r.createInstance(M),
								this.r.createInstance(N),
							],
							x,
						));
					const V = this.g.domNode.querySelector(".monaco-list-rows"),
						G = w.Event.chain(this.D(new f.$mib(V, "mouseover")).event, (X) =>
							X.map((Y) =>
								i.$Egb(Y.target, "monaco-list-row", "monaco-list-rows"),
							)
								.filter((Y) => !!Y)
								.map((Y) => parseInt(Y.getAttribute("data-index"))),
						),
						K = w.Event.map(
							this.D(new f.$mib(V, "mouseleave")).event,
							() => -1,
						),
						J = w.Event.latch(w.Event.any(G, K)),
						W = w.Event.debounce(J, (X, Y) => Y, 500);
					this.D(
						W((X) => {
							X !== -1 &&
								this.g.row(X) &&
								this.j.onMarkerMouseHover(this.g.row(X));
						}),
					);
				}
				get contextKeyService() {
					return this.g.contextKeyService;
				}
				get onContextMenu() {
					return this.g.onContextMenu;
				}
				get onDidOpen() {
					return this.g.onDidOpen;
				}
				get onDidChangeFocus() {
					return this.g.onDidChangeFocus;
				}
				get onDidChangeSelection() {
					return this.g.onDidChangeSelection;
				}
				collapseMarkers() {}
				domFocus() {
					this.g.domFocus();
				}
				filterMarkers(B, U) {
					(this.q = U), this.reset(B);
				}
				getFocus() {
					const B = this.g.getFocus();
					return B.length > 0 ? [...B.map((U) => this.g.row(U))] : [];
				}
				getHTMLElement() {
					return this.g.getHTMLElement();
				}
				getRelativeTop(B) {
					return B ? this.g.getRelativeTop(this.g.indexOf(B)) : null;
				}
				getSelection() {
					const B = this.g.getSelection();
					return B.length > 0 ? [...B.map((U) => this.g.row(U))] : [];
				}
				getVisibleItemCount() {
					return this.c;
				}
				isVisible() {
					return !this.h.classList.contains("hidden");
				}
				layout(B, U) {
					(this.h.style.height = `${B}px`), this.g.layout(B, U);
				}
				reset(B) {
					this.n = B;
					const U = [];
					for (const z of this.n)
						for (const F of z.markers) {
							if (
								y.$jic.has(F.resource.scheme) ||
								this.q.excludesMatcher.matches(F.resource)
							)
								continue;
							if (this.q.includesMatcher.matches(F.resource)) {
								U.push(new r.$uRc(F));
								continue;
							}
							if (
								(this.q.showErrors &&
									u.MarkerSeverity.Error === F.marker.severity) ||
								(this.q.showWarnings &&
									u.MarkerSeverity.Warning === F.marker.severity) ||
								(this.q.showInfos &&
									u.MarkerSeverity.Info === F.marker.severity)
							) {
								if (this.q.textFilter.text) {
									const H = F.marker.source
											? (n.$CRc._filter(
													this.q.textFilter.text,
													F.marker.source,
												) ?? void 0)
											: void 0,
										q = F.marker.code
											? (n.$CRc._filter(
													this.q.textFilter.text,
													typeof F.marker.code == "string"
														? F.marker.code
														: F.marker.code.value,
												) ?? void 0)
											: void 0,
										V =
											n.$CRc._messageFilter(
												this.q.textFilter.text,
												F.marker.message,
											) ?? void 0,
										G =
											n.$CRc._messageFilter(
												this.q.textFilter.text,
												this.s.getUriLabel(F.resource, { relative: !0 }),
											) ?? void 0,
										K =
											n.$CRc._messageFilter(
												this.q.textFilter.text,
												F.marker.owner,
											) ?? void 0,
										J = H || q || V || G || K;
									((J && !this.q.textFilter.negate) ||
										(!J && this.q.textFilter.negate)) &&
										U.push(new r.$uRc(F, H, q, V, G, K));
									continue;
								}
								U.push(new r.$uRc(F));
							}
						}
					(this.c = U.length),
						this.g.splice(
							0,
							Number.POSITIVE_INFINITY,
							U.sort((z, F) => {
								let x = u.MarkerSeverity.compare(
									z.marker.severity,
									F.marker.severity,
								);
								return (
									x === 0 && (x = (0, r.$rRc)(z.marker, F.marker)),
									x === 0 &&
										(x = l.$iL.compareRangesUsingStarts(z.marker, F.marker)),
									x
								);
							}),
						);
				}
				revealMarkers(B, U, z) {
					if (B) {
						const F = this.n.indexOf(B);
						if (F !== -1)
							if (this.u(B)) {
								const x = this.g.getSelection();
								this.g.reveal(x[0], z), U && this.g.setFocus(x);
							} else
								this.g.reveal(F, 0),
									U && (this.g.setFocus([F]), this.g.setSelection([F]));
					} else U && (this.g.setSelection([]), this.g.focusFirst());
				}
				setAriaLabel(B) {
					this.g.domNode.ariaLabel = B;
				}
				setMarkerSelection(B, U) {
					this.isVisible() &&
						(B && B.length > 0
							? (this.g.setSelection(B.map((z) => this.t(z))),
								U && U.length > 0
									? this.g.setFocus(U.map((z) => this.t(z)))
									: this.g.setFocus([this.t(B[0])]),
								this.g.reveal(this.t(B[0])))
							: this.getSelection().length === 0 &&
								this.getVisibleItemCount() > 0 &&
								(this.g.setSelection([0]),
								this.g.setFocus([0]),
								this.g.reveal(0)));
				}
				toggleVisibility(B) {
					this.h.classList.toggle("hidden", B);
				}
				update(B) {
					for (const U of B) {
						const z = this.n.indexOf(U);
						this.n.splice(z, 1, U);
					}
					this.reset(this.n);
				}
				updateMarker(B) {
					this.g.rerender();
				}
				t(B) {
					for (let U = 0; U < this.g.length; U++)
						if (this.g.row(U).marker === B.marker) return U;
					return -1;
				}
				u(B) {
					const U = this.getSelection();
					return !!(
						U &&
						U.length > 0 &&
						U[0] instanceof r.$tRc &&
						B.has(U[0].marker.resource)
					);
				}
			};
			(e.$MRc = R), (e.$MRc = R = Ne([j(5, C.$Li), j(6, c.$3N)], R));
		},
	),
		