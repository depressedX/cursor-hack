define(
		de[4025],
		he([
			1, 0, 7, 50, 32, 18, 988, 5, 1248, 10, 799, 824, 35, 21, 4, 8, 103, 6, 93,
			1247, 82, 25, 3266, 49, 11, 39, 114, 233, 90, 282, 27, 146, 60, 41, 198,
			68, 3, 24, 59, 44, 362, 3075, 555, 518, 72, 390, 2450,
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
			H,
			q,
			V,
			G,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$NRc = void 0),
				(t = mt(t)),
				(u = xi(u));
			function K(X) {
				return p.Iterable.map(X.markers, (Y) => {
					const ie = p.Iterable.from(Y.relatedInformation),
						ne = p.Iterable.map(ie, (ee) => ({ element: ee }));
					return { element: Y, children: ne };
				});
			}
			let J = class extends D.$UMb {
				constructor(
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
				) {
					const ue = new k.$eEb(H.Markers.MARKERS_VIEW_STORAGE_ID, ae),
						fe = ue.getMemento(
							c.StorageScope.WORKSPACE,
							c.StorageTarget.MACHINE,
						);
					super(
						{
							...Y,
							filterOptions: {
								ariaLabel: u.default.MARKERS_PANEL_FILTER_ARIA_LABEL,
								placeholder: u.default.MARKERS_PANEL_FILTER_PLACEHOLDER,
								focusContextKey:
									H.MarkersContextKeys.MarkerViewFilterFocusContextKey.key,
								text: fe.filter || "",
								history: fe.filterHistory || [],
							},
						},
						oe,
						re,
						_,
						Z,
						ne,
						ie,
						pe,
						$e,
						te,
						ye,
					),
						(this.pc = ee),
						(this.qc = Q),
						(this.rc = se),
						(this.sc = le),
						(this.a = 0),
						(this.b = null),
						(this.ab = this.D(new O.$Zc())),
						(this.cc = this.D(new O.$Zc())),
						(this.ic = 0),
						(this.jc = 0),
						(this.mc = void 0),
						(this.nc = !1),
						(this.onDidChangeVisibility = this.onDidChangeBodyVisibility),
						(this.kc = ue),
						(this.lc = fe),
						(this.h = this.D(ie.createInstance(C.$wRc))),
						(this.oc = this.D(
							ie.createInstance(
								y.$LRc,
								this.lc.multiline,
								this.lc.viewMode ?? this.zc(),
							),
						)),
						this.D(this.onDidChangeVisibility((me) => this.Ic(me))),
						this.D(this.oc.onDidChangeViewMode((me) => this.Lc())),
						(this.fc = ie.createInstance(y.$DRc)),
						(this.ec = {
							getId(me) {
								return me.id;
							},
						}),
						this.Oc(),
						(this.s = new y.$JRc(b.$CRc.EMPTY(le))),
						(this.c = this.D(this.Db.createInstance(a.$u4b))),
						(this.filters = this.D(
							new m.$yRc(
								{
									filterHistory: this.lc.filterHistory || [],
									showErrors: this.lc.showErrors !== !1,
									showWarnings: this.lc.showWarnings !== !1,
									showInfos: this.lc.showInfos !== !1,
									excludedFiles: !!this.lc.useFilesExclude,
									activeFile: !!this.lc.activeFile,
								},
								this.Bb,
							),
						)),
						this.D(
							this.Ab.onDidChangeConfiguration((me) => {
								this.filters.excludedFiles &&
									me.affectsConfiguration("files.exclude") &&
									this.yc();
							}),
						);
				}
				render() {
					super.render(),
						this.D(
							(0, q.$D3b)({
								name: "markersView",
								focusNotifiers: [this, this.filterWidget],
								focusNextWidget: () => {
									this.filterWidget.hasFocus() && this.focus();
								},
								focusPreviousWidget: () => {
									this.filterWidget.hasFocus() || this.focusFilter();
								},
							}),
						);
				}
				W(Y) {
					super.W(Y),
						Y.classList.add("markers-panel"),
						this.D(
							t.$0fb(Y, "keydown", (ne) => {
								const ee = new I.$7fb(ne);
								if (!this.yb.mightProducePrintableCharacter(ee)) return;
								const _ = this.yb.softDispatch(ee, ee.target);
								_.kind === G.ResultKind.MoreChordsNeeded ||
									_.kind === G.ResultKind.KbFound ||
									this.focusFilter();
							}),
						);
					const ie = t.$fhb(Y, t.$(".markers-panel-container"));
					this.Ec(ie),
						this.Dc(ie),
						(this.dc = t.$fhb(ie, t.$(".widget-container"))),
						this.Fc(this.dc),
						this.yc(),
						this.Rc();
				}
				getTitle() {
					return u.default.MARKERS_PANEL_TITLE_PROBLEMS.value;
				}
				L(Y = this.ic, ie = this.jc) {
					this.gc && (this.gc.style.height = `${Y}px`),
						this.sb.layout(Y, ie),
						(this.ic = Y),
						(this.jc = ie);
				}
				focus() {
					super.focus(),
						!t.$Kgb(this.sb.getHTMLElement()) &&
							(this.Qc()
								? this.gc.focus()
								: (this.sb.domFocus(), this.sb.setMarkerSelection()));
				}
				isFocused() {
					return t.$Kgb(this.sb.getHTMLElement());
				}
				focusFilter() {
					this.filterWidget.focus();
				}
				updateBadge(Y, ie) {
					this.filterWidget.updateBadge(
						Y === ie || Y === 0 ? void 0 : (0, n.localize)(7497, null, ie, Y),
					);
				}
				checkMoreFilters() {
					this.filterWidget.checkMoreFilters(
						!this.filters.showErrors ||
							!this.filters.showWarnings ||
							!this.filters.showInfos ||
							this.filters.excludedFiles ||
							this.filters.activeFile,
					);
				}
				clearFilterText() {
					this.filterWidget.setFilterText("");
				}
				showQuickFixes(Y) {
					const ie = this.oc.getViewModel(Y);
					ie && ie.quickFixAction.run();
				}
				openFileAtElement(Y, ie, ne, ee) {
					const { resource: _, selection: te } =
						Y instanceof C.$tRc
							? { resource: Y.resource, selection: Y.range }
							: Y instanceof C.$vRc
								? { resource: Y.raw.resource, selection: Y.raw }
								: "marker" in Y
									? { resource: Y.marker.resource, selection: Y.marker.range }
									: { resource: null, selection: null };
					return _ && te
						? (this.pc
								.openEditor(
									{
										resource: _,
										options: {
											selection: te,
											preserveFocus: ie,
											pinned: ee,
											revealIfVisible: !0,
										},
									},
									ne ? E.$KY : E.$JY,
								)
								.then((Q) => {
									Q && ie
										? this.c.highlightRange(
												{ resource: _, range: te },
												Q.getControl(),
											)
										: this.c.removeHighlightRange();
								}),
							!0)
						: (this.c.removeHighlightRange(), !1);
				}
				vc(Y) {
					if (this.isVisible()) {
						const ie = this.sb.getSelection().length > 0;
						Y
							? Y instanceof C.$tRc
								? this.sb.updateMarker(Y)
								: Y.added.size || Y.removed.size
									? this.xc()
									: this.sb.update([...Y.updated])
							: this.xc(),
							ie && this.sb.setMarkerSelection(),
							(this.mc = void 0);
						const { total: ne, filtered: ee } = this.getFilterStats();
						this.ed(ne === 0 || ee === 0),
							this.Sc(),
							this.updateBadge(ne, ee),
							this.checkMoreFilters();
					}
				}
				wc(Y) {
					this.vc(Y);
				}
				xc() {
					this.sb.reset(this.Cc());
				}
				yc() {
					(this.s.options = new b.$CRc(
						this.filterWidget.getFilterText(),
						this.Ac(),
						this.filters.showWarnings,
						this.filters.showErrors,
						this.filters.showInfos,
						this.sc,
					)),
						this.sb.filterMarkers(this.Cc(), this.s.options),
						(this.mc = void 0);
					const { total: Y, filtered: ie } = this.getFilterStats();
					this.ed(Y === 0 || ie === 0),
						this.Sc(),
						this.updateBadge(Y, ie),
						this.checkMoreFilters();
				}
				zc() {
					switch (this.Ab.getValue("problems.defaultViewMode")) {
						case "table":
							return H.MarkersViewMode.Table;
						case "tree":
							return H.MarkersViewMode.Tree;
						default:
							return H.MarkersViewMode.Tree;
					}
				}
				Ac() {
					if (!this.filters.excludedFiles) return [];
					const Y = this.rc.getWorkspace().folders;
					return Y.length
						? Y.map((ie) => ({ root: ie.uri, expression: this.Bc(ie.uri) }))
						: this.Bc();
				}
				Bc(Y) {
					return (
						(0, s.$vo)(this.Ab.getValue("files.exclude", { resource: Y })) || {}
					);
				}
				Cc() {
					if (!this.filters.activeFile) return this.h.resourceMarkers;
					let Y = [];
					if (this.b) {
						const ie = this.h.getResourceMarkers(this.b);
						ie && (Y = [ie]);
					}
					return Y;
				}
				Dc(Y) {
					(this.gc = t.$fhb(Y, t.$(".message-box-container"))),
						this.gc.setAttribute("aria-labelledby", "markers-panel-arialabel");
				}
				Ec(Y) {
					(this.hc = t.$fhb(Y, t.$(""))),
						this.hc.setAttribute("id", "markers-panel-arialabel");
				}
				Fc(Y) {
					(this.sb =
						this.oc.viewMode === H.MarkersViewMode.Table
							? this.Gc(Y)
							: this.Hc(Y)),
						this.cc.add(this.sb);
					const ie = H.MarkersContextKeys.MarkerFocusContextKey.bindTo(
							this.sb.contextKeyService,
						),
						ne = H.MarkersContextKeys.RelatedInformationFocusContextKey.bindTo(
							this.sb.contextKeyService,
						);
					this.cc.add(
						this.sb.onDidChangeFocus((ee) => {
							ie.set(ee.elements.some((_) => _ instanceof C.$tRc)),
								ne.set(ee.elements.some((_) => _ instanceof C.$vRc));
						}),
					),
						this.cc.add(
							o.Event.debounce(
								this.sb.onDidOpen,
								(ee, _) => _,
								75,
								!0,
							)((ee) => {
								this.openFileAtElement(
									ee.element,
									!!ee.editorOptions.preserveFocus,
									ee.sideBySide,
									!!ee.editorOptions.pinned,
								);
							}),
						),
						this.cc.add(
							o.Event.any(
								this.sb.onDidChangeSelection,
								this.sb.onDidChangeFocus,
							)(() => {
								const ee = [...this.sb.getSelection(), ...this.sb.getFocus()];
								for (const _ of ee)
									_ instanceof C.$tRc &&
										this.oc.getViewModel(_)?.showLightBulb();
							}),
						),
						this.cc.add(this.sb.onContextMenu(this.cd, this)),
						this.cc.add(this.sb.onDidChangeSelection(this.Pc, this));
				}
				Gc(Y) {
					return this.Db.createInstance(
						x.$MRc,
						t.$fhb(Y, t.$(".markers-table-container")),
						this.oc,
						this.Cc(),
						this.s.options,
						{
							accessibilityProvider: this.fc,
							dnd: this.Db.createInstance(F.$VSb, (ne) =>
								ne instanceof C.$uRc
									? (0, N.$8rb)(ne.resource, ne.range)
									: null,
							),
							horizontalScrolling: !1,
							identityProvider: this.ec,
							multipleSelectionSupport: !0,
							selectionNavigation: !0,
						},
					);
				}
				Hc(Y) {
					const ie = new o.$Ae(),
						ne = this.Db.createInstance(T.$uPb, this),
						ee = new y.$ERc(this.oc),
						_ = [
							this.Db.createInstance(y.$FRc, ne, ie.event),
							this.Db.createInstance(y.$HRc, this.oc),
							this.Db.createInstance(y.$IRc),
						],
						te = this.Db.createInstance(
							W,
							"MarkersView",
							t.$fhb(Y, t.$(".tree-container.show-file-icons")),
							ee,
							_,
							{
								filter: this.s,
								accessibilityProvider: this.fc,
								identityProvider: this.ec,
								dnd: this.Db.createInstance(F.$VSb, (Q) =>
									Q instanceof C.$sRc
										? Q.resource
										: Q instanceof C.$tRc
											? (0, N.$8rb)(Q.resource, Q.range)
											: Q instanceof C.$vRc
												? (0, N.$8rb)(Q.raw.resource, Q.raw)
												: null,
								),
								expandOnlyOnTwistieClick: (Q) =>
									Q instanceof C.$tRc && Q.relatedInformation.length > 0,
								overrideStyles: this.Zb().listOverrideStyles,
								selectionNavigation: !0,
								multipleSelectionSupport: !0,
							},
						);
					return (ie.input = te.onDidChangeRenderNodeCount), te;
				}
				collapseAll() {
					this.sb.collapseMarkers();
				}
				setMultiline(Y) {
					this.oc.multiline = Y;
				}
				setViewMode(Y) {
					this.oc.viewMode = Y;
				}
				Ic(Y) {
					if ((this.ab.clear(), Y)) {
						for (const ie of this.Jc()) this.ab.add(ie);
						this.vc();
					}
				}
				Jc() {
					const Y = [],
						ie = (ne) =>
							this.qc.read({
								resource: ne,
								severities:
									P.MarkerSeverity.Error |
									P.MarkerSeverity.Warning |
									P.MarkerSeverity.Info,
							});
					return (
						this.h.setResourceMarkers(
							(0, B.$Db)(ie(), C.$rRc).map((ne) => [ne[0].resource, ne]),
						),
						Y.push(
							o.Event.debounce(
								this.qc.onMarkerChanged,
								(ne, ee) => (
									(ne = ne || new U.$Gc()), ee.forEach((_) => ne.set(_, _)), ne
								),
								64,
							)((ne) => {
								this.h.setResourceMarkers(
									[...ne.values()].map((ee) => [ee, ie(ee)]),
								);
							}),
						),
						Y.push(
							o.Event.any(
								this.h.onDidChange,
								this.pc.onDidActiveEditorChange,
							)((ne) => {
								ne ? this.Kc(ne) : this.Nc();
							}),
						),
						Y.push((0, O.$Yc)(() => this.h.reset())),
						this.h.resourceMarkers.forEach((ne) =>
							ne.markers.forEach((ee) => this.oc.add(ee)),
						),
						Y.push(this.oc.onDidChange((ne) => this.wc(ne))),
						Y.push(
							(0, O.$Yc)(() =>
								this.h.resourceMarkers.forEach((ne) =>
									this.oc.remove(ne.resource),
								),
							),
						),
						Y.push(
							this.filters.onDidChange((ne) => {
								ne.activeFile
									? this.vc()
									: (ne.excludedFiles ||
											ne.showWarnings ||
											ne.showErrors ||
											ne.showInfos) &&
										this.yc();
							}),
						),
						Y.push(this.filterWidget.onDidChangeFilterText((ne) => this.yc())),
						Y.push(
							(0, O.$Yc)(() => {
								this.mc = void 0;
							}),
						),
						Y.push((0, O.$Yc)(() => this.c.removeHighlightRange())),
						Y
					);
				}
				Kc(Y) {
					const ie = [...Y.added, ...Y.removed, ...Y.updated],
						ne = [];
					for (const { resource: ee } of ie) {
						this.oc.remove(ee);
						const _ = this.h.getResourceMarkers(ee);
						if (_) for (const te of _.markers) this.oc.add(te);
						ne.push(ee);
					}
					(this.nc = this.nc || this.Mc(ne)),
						this.vc(Y),
						this.ad(),
						this.nc && (this.Zc(), (this.nc = !1));
				}
				Lc() {
					this.dc && this.sb && ((this.dc.textContent = ""), this.cc.clear());
					const Y = new Set();
					for (const ne of this.sb.getSelection())
						ne instanceof C.$sRc
							? ne.markers.forEach((ee) => Y.add(ee))
							: (ne instanceof C.$tRc || ne instanceof C.$uRc) && Y.add(ne);
					const ie = new Set();
					for (const ne of this.sb.getFocus())
						(ne instanceof C.$tRc || ne instanceof C.$uRc) && ie.add(ne);
					this.Fc(this.dc),
						this.vc(),
						Y.size > 0 &&
							(this.sb.setMarkerSelection(Array.from(Y), Array.from(ie)),
							this.sb.domFocus());
				}
				Mc(Y) {
					const ie = this.b;
					return !ie || this.$c()
						? !1
						: Y.some((ee) => ee.toString() === ie.toString());
				}
				Nc() {
					this.Oc(), this.filters.activeFile && this.vc(), this.Zc();
				}
				Oc() {
					const Y = this.pc.activeEditor;
					this.b = Y
						? (z.$A1.getOriginalUri(Y, {
								supportSideBySide: z.SideBySideEditor.PRIMARY,
							}) ?? null)
						: null;
				}
				Pc() {
					const Y = this.sb.getSelection();
					Y && Y.length > 0 && (this.a = this.sb.getRelativeTop(Y[0]) || 0);
				}
				Qc() {
					const { total: Y, filtered: ie } = this.getFilterStats();
					return Y === 0 || ie === 0;
				}
				Rc() {
					(this.mc = void 0), this.xc(), this.ed(this.Qc()), this.Sc();
				}
				Sc() {
					if (!this.gc || !this.hc) return;
					t.$9fb(this.gc);
					const { total: Y, filtered: ie } = this.getFilterStats();
					ie === 0
						? ((this.gc.style.display = "block"),
							this.gc.setAttribute("tabIndex", "0"),
							this.filters.activeFile
								? this.Tc(this.gc)
								: Y > 0
									? this.Uc(this.gc)
									: this.Wc(this.gc))
						: ((this.gc.style.display = "none"),
							ie === Y
								? this.Xc((0, n.localize)(7498, null, Y))
								: this.Xc((0, n.localize)(7499, null, ie, Y)),
							this.gc.removeAttribute("tabIndex"));
				}
				Tc(Y) {
					this.b && this.h.getResourceMarkers(this.b) ? this.Uc(Y) : this.Vc(Y);
				}
				Uc(Y) {
					const ie = t.$fhb(Y, t.$("span"));
					ie.textContent = u.default.MARKERS_PANEL_NO_PROBLEMS_FILTERS;
					const ne = t.$fhb(Y, t.$("a.messageAction"));
					(ne.textContent = (0, n.localize)(7500, null)),
						ne.setAttribute("tabIndex", "0");
					const ee = t.$fhb(Y, t.$("span"));
					(ee.textContent = "."),
						t.$$fb(ne, t.$$gb.CLICK, () => this.Yc()),
						t.$$fb(ne, t.$$gb.KEY_DOWN, (_) => {
							(_.equals(L.KeyCode.Enter) || _.equals(L.KeyCode.Space)) &&
								(this.Yc(), _.stopPropagation());
						}),
						this.Xc(u.default.MARKERS_PANEL_NO_PROBLEMS_FILTERS);
				}
				Vc(Y) {
					const ie = t.$fhb(Y, t.$("span"));
					(ie.textContent =
						u.default.MARKERS_PANEL_NO_PROBLEMS_ACTIVE_FILE_BUILT),
						this.Xc(u.default.MARKERS_PANEL_NO_PROBLEMS_ACTIVE_FILE_BUILT);
				}
				Wc(Y) {
					const ie = t.$fhb(Y, t.$("span"));
					(ie.textContent = u.default.MARKERS_PANEL_NO_PROBLEMS_BUILT),
						this.Xc(u.default.MARKERS_PANEL_NO_PROBLEMS_BUILT);
				}
				Xc(Y) {
					this.sb.setAriaLabel(Y), this.hc.setAttribute("aria-label", Y);
				}
				Yc() {
					this.filterWidget.setFilterText(""),
						(this.filters.excludedFiles = !1),
						(this.filters.showErrors = !0),
						(this.filters.showWarnings = !0),
						(this.filters.showInfos = !0);
				}
				Zc(Y = !1) {
					if (this.filters.activeFile) return;
					const ie = this.Ab.getValue("problems.autoReveal");
					if (typeof ie == "boolean" && ie) {
						const ne = this.$c();
						this.sb.revealMarkers(ne, Y, this.a);
					}
				}
				$c() {
					return this.b ? this.h.getResourceMarkers(this.b) : null;
				}
				ad() {
					this.c.removeHighlightRange(),
						t.$Kgb(this.sb.getHTMLElement()) && this.bd();
				}
				bd() {
					const Y = this.sb.getSelection() ?? [];
					if (Y.length !== 1) return;
					const ie = Y[0];
					ie instanceof C.$tRc && this.c.highlightRange(ie);
				}
				cd(Y) {
					const ie = Y.element;
					ie &&
						(Y.browserEvent.preventDefault(),
						Y.browserEvent.stopPropagation(),
						this.zb.showContextMenu({
							getAnchor: () => Y.anchor,
							menuId: v.$XX.ProblemsPanelContext,
							contextKeyService: this.sb.contextKeyService,
							getActions: () => this.dd(ie),
							getActionViewItem: (ne) => {
								const ee = this.yb.lookupKeybinding(ne.id);
								if (ee)
									return new A.$_ib(ne, ne, {
										label: !0,
										keybinding: ee.getLabel(),
									});
							},
							onHide: (ne) => {
								ne && this.sb.domFocus();
							},
						}));
				}
				dd(Y) {
					const ie = [];
					if (Y instanceof C.$tRc) {
						const ne = this.oc.getViewModel(Y);
						if (ne) {
							const ee = ne.quickFixAction.quickFixes;
							ee.length && (ie.push(...ee), ie.push(new i.$tj()));
						}
					}
					return ie;
				}
				getFocusElement() {
					return this.sb.getFocus()[0] ?? void 0;
				}
				getFocusedSelectedElements() {
					const Y = this.getFocusElement();
					if (!Y) return null;
					const ie = this.sb.getSelection();
					if (ie.includes(Y)) {
						const ne = [];
						for (const ee of ie) ee && ne.push(ee);
						return ne;
					} else return [Y];
				}
				getAllResourceMarkers() {
					return this.h.resourceMarkers;
				}
				getFilterStats() {
					return (
						this.mc ||
							(this.mc = {
								total: this.h.total,
								filtered: this.sb?.getVisibleItemCount() ?? 0,
							}),
						this.mc
					);
				}
				ed(Y) {
					this.sb.toggleVisibility(Y), this.L();
				}
				saveState() {
					(this.lc.filter = this.filterWidget.getFilterText()),
						(this.lc.filterHistory = this.filters.filterHistory),
						(this.lc.showErrors = this.filters.showErrors),
						(this.lc.showWarnings = this.filters.showWarnings),
						(this.lc.showInfos = this.filters.showInfos),
						(this.lc.useFilesExclude = this.filters.excludedFiles),
						(this.lc.activeFile = this.filters.activeFile),
						(this.lc.multiline = this.oc.multiline),
						(this.lc.viewMode = this.oc.viewMode),
						this.kc.saveMemento(),
						super.saveState();
				}
				dispose() {
					super.dispose();
				}
			};
			(e.$NRc = J),
				(e.$NRc = J =
					Ne(
						[
							j(1, d.$Li),
							j(2, M.$K1),
							j(3, E.$IY),
							j(4, r.$gj),
							j(5, w.$km),
							j(6, P.$aM),
							j(7, g.$6j),
							j(8, l.$Vi),
							j(9, $.$Xxb),
							j(10, R.$Vl),
							j(11, S.$uZ),
							j(12, c.$lq),
							j(13, N.$7rb),
							j(14, h.$iP),
							j(15, V.$Uyb),
						],
						J,
					));
			let W = class extends f.$CMb {
				constructor(Y, ie, ne, ee, _, te, Q, Z, se, re) {
					super(Y, ie, ne, ee, _, te, Q, Z, re),
						(this.b = ie),
						(this.a =
							H.MarkersContextKeys.MarkersTreeVisibilityContextKey.bindTo(Q));
				}
				collapseMarkers() {
					this.collapseAll(),
						this.setSelection([]),
						this.setFocus([]),
						this.getHTMLElement().focus(),
						this.focusFirst();
				}
				filterMarkers() {
					this.refilter();
				}
				getVisibleItemCount() {
					let Y = 0;
					const ie = this.getNode();
					for (const ne of ie.children)
						for (const ee of ne.children) ne.visible && ee.visible && Y++;
					return Y;
				}
				isVisible() {
					return !this.b.classList.contains("hidden");
				}
				toggleVisibility(Y) {
					this.a.set(!Y), this.b.classList.toggle("hidden", Y);
				}
				reset(Y) {
					this.setChildren(
						null,
						p.Iterable.map(Y, (ie) => ({ element: ie, children: K(ie) })),
					);
				}
				revealMarkers(Y, ie, ne) {
					Y
						? this.hasElement(Y) &&
							(!this.isCollapsed(Y) && this.g(Y)
								? (this.reveal(this.getSelection()[0], ne),
									ie && this.setFocus(this.getSelection()))
								: (this.expand(Y),
									this.reveal(Y, 0),
									ie && (this.setFocus([Y]), this.setSelection([Y]))))
						: ie && (this.setSelection([]), this.focusFirst());
				}
				setAriaLabel(Y) {
					this.ariaLabel = Y;
				}
				setMarkerSelection(Y, ie) {
					if (this.isVisible()) {
						if (Y && Y.length > 0)
							this.setSelection(Y.map((ne) => this.c(ne))),
								ie && ie.length > 0
									? this.setFocus(ie.map((ne) => this.c(ne)))
									: this.setFocus([this.c(Y[0])]),
								this.reveal(this.c(Y[0]));
						else if (this.getSelection().length === 0) {
							const ne = this.firstVisibleElement,
								ee = ne
									? ne instanceof C.$sRc
										? ne.markers[0]
										: ne instanceof C.$tRc
											? ne
											: void 0
									: void 0;
							ee &&
								(this.setSelection([ee]), this.setFocus([ee]), this.reveal(ee));
						}
					}
				}
				update(Y) {
					for (const ie of Y)
						this.hasElement(ie) &&
							(this.setChildren(ie, K(ie)), this.rerender(ie));
				}
				updateMarker(Y) {
					this.rerender(Y);
				}
				c(Y) {
					for (const ie of this.getNode().children)
						for (const ne of ie.children)
							if (
								ne.element instanceof C.$tRc &&
								ne.element.marker === Y.marker
							)
								return ne.element;
					return null;
				}
				g(Y) {
					const ie = this.getSelection();
					return !!(
						ie &&
						ie.length > 0 &&
						ie[0] instanceof C.$tRc &&
						Y.has(ie[0].marker.resource)
					);
				}
				dispose() {
					super.dispose();
				}
				layout(Y, ie) {
					(this.b.style.height = `${Y}px`), super.layout(Y, ie);
				}
			};
			W = Ne(
				[j(5, d.$Li), j(6, g.$6j), j(7, f.$fMb), j(8, h.$iP), j(9, r.$gj)],
				W,
			);
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	