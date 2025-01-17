import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/path.js';
import '../../../../base/browser/ui/countBadge/countBadge.js';
import '../../../../base/browser/ui/highlightedlabel/highlightedLabel.js';
import '../../../../platform/markers/common/markers.js';
import './markersModel.js';
import './messages.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import './markersViewActions.js';
import '../../../../platform/label/common/label.js';
import '../../../../base/common/resources.js';
import '../../../../base/browser/ui/tree/tree.js';
import './markersFilterOptions.js';
import '../../../../base/common/event.js';
import '../../../../base/common/types.js';
import '../../../../base/common/actions.js';
import '../../../../nls.js';
import '../../../../base/common/async.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/contrib/codeAction/browser/codeAction.js';
import '../../../../editor/contrib/codeAction/common/types.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/severityIcon/browser/severityIcon.js';
import '../../../../editor/common/languages.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/opener/browser/link.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../common/markers.js';
import '../../../../platform/markers/common/markerService.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../base/common/severity.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../platform/hover/browser/hover.js';
define(
		de[3266],
		he([
			1, 0, 7, 54, 495, 410, 90, 988, 799, 5, 26, 3, 105, 1248, 73, 19, 264,
			1247, 6, 28, 50, 4, 15, 67, 17, 393, 291, 18, 673, 74, 41, 84, 198, 14,
			79, 497, 69, 8, 555, 667, 106, 111, 39, 95, 72,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$LRc =
					e.$KRc =
					e.$JRc =
					e.$IRc =
					e.$HRc =
					e.$GRc =
					e.$FRc =
					e.$ERc =
					e.$DRc =
						void 0),
				(t = mt(t)),
				(i = mt(i)),
				(m = xi(m)),
				(x = xi(x));
			let G = class {
				constructor(ae) {
					this.a = ae;
				}
				getWidgetAriaLabel() {
					return (0, l.localize)(7492, null);
				}
				getAriaLabel(ae) {
					if (ae instanceof d.$sRc) {
						const pe =
							this.a.getUriLabel(ae.resource, { relative: !0 }) ||
							ae.resource.fsPath;
						return m.default.MARKERS_TREE_ARIA_LABEL_RESOURCE(
							ae.markers.length,
							ae.name,
							i.$rc(pe),
						);
					}
					return ae instanceof d.$tRc || ae instanceof d.$uRc
						? m.default.MARKERS_TREE_ARIA_LABEL_MARKER(ae)
						: ae instanceof d.$vRc
							? m.default.MARKERS_TREE_ARIA_LABEL_RELATED_INFORMATION(ae.raw)
							: null;
				}
			};
			(e.$DRc = G), (e.$DRc = G = Ne([j(0, n.$3N)], G));
			var K;
			(function (oe) {
				(oe.ResourceMarkers = "rm"),
					(oe.Marker = "m"),
					(oe.RelatedInformation = "ri");
			})(K || (K = {}));
			class J {
				static {
					this.LINE_HEIGHT = 22;
				}
				constructor(ae) {
					this.a = ae;
				}
				getHeight(ae) {
					if (ae instanceof d.$tRc) {
						const pe = this.a.getViewModel(ae);
						return (!pe || pe.multiline ? ae.lines.length : 1) * J.LINE_HEIGHT;
					}
					return J.LINE_HEIGHT;
				}
				getTemplateId(ae) {
					return ae instanceof d.$sRc
						? K.ResourceMarkers
						: ae instanceof d.$tRc
							? K.Marker
							: K.RelatedInformation;
				}
			}
			e.$ERc = J;
			var W;
			(function (oe) {
				(oe[(oe.ResourceMarkers = 0)] = "ResourceMarkers"),
					(oe[(oe.Marker = 1)] = "Marker"),
					(oe[(oe.RelatedInformation = 2)] = "RelatedInformation");
			})(W || (W = {}));
			class X {
				constructor(ae, pe) {
					(this.d = ae),
						(this.a = new Map()),
						(this.b = new a.$Zc()),
						(this.templateId = K.ResourceMarkers),
						pe(this.e, this, this.b);
				}
				renderTemplate(ae) {
					const pe = t.$fhb(ae, t.$(".resource-label-container")),
						$e = this.d.create(pe, { supportHighlights: !0 }),
						ye = t.$fhb(ae, t.$(".count-badge-wrapper"));
					return { count: new w.$Hob(ye, {}, F.$zyb), resourceLabel: $e };
				}
				renderElement(ae, pe, $e) {
					const ye = ae.element,
						ue = (ae.filterData && ae.filterData.uriMatches) || [];
					$e.resourceLabel.setFile(ye.resource, { matches: ue }),
						this.f(ae, $e);
					const fe = this.a.get(ye) ?? [];
					this.a.set(ye, [...fe, $e]);
				}
				disposeElement(ae, pe, $e) {
					const ye = this.a.get(ae.element) ?? [],
						ue = ye.findIndex((fe) => $e === fe);
					if (ue < 0) throw new Error("Disposing unknown resource marker");
					ye.length === 1 ? this.a.delete(ae.element) : ye.splice(ue, 1);
				}
				disposeTemplate(ae) {
					ae.resourceLabel.dispose();
				}
				e(ae) {
					const pe = this.a.get(ae.element);
					pe && pe.forEach(($e) => this.f(ae, $e));
				}
				f(ae, pe) {
					pe.count.setCount(
						ae.children.reduce(($e, ye) => $e + (ye.visible ? 1 : 0), 0),
					);
				}
				dispose() {
					this.b.dispose();
				}
			}
			e.$FRc = X;
			class Y extends X {}
			e.$GRc = Y;
			let ie = class {
				constructor(ae, pe, $e, ye) {
					(this.a = ae),
						(this.b = pe),
						(this.d = $e),
						(this.e = ye),
						(this.templateId = K.Marker);
				}
				renderTemplate(ae) {
					const pe = Object.create(null);
					return (
						(pe.markerWidget = new Q(ae, this.a, this.b, this.e, this.d)), pe
					);
				}
				renderElement(ae, pe, $e) {
					$e.markerWidget.render(ae.element, ae.filterData);
				}
				disposeTemplate(ae) {
					ae.markerWidget.dispose();
				}
			};
			(e.$HRc = ie),
				(e.$HRc = ie = Ne([j(1, V.$Uyb), j(2, r.$Li), j(3, L.$7rb)], ie));
			const ne = (0, A.$$O)(
					"markers-view-multi-line-expanded",
					N.$ak.chevronUp,
					(0, l.localize)(7493, null),
				),
				ee = (0, A.$$O)(
					"markers-view-multi-line-collapsed",
					N.$ak.chevronDown,
					(0, l.localize)(7494, null),
				),
				_ = "problems.action.toggleMultiline";
			class te extends M.$_ib {
				render(ae) {
					super.render(ae), this.b();
				}
				G() {
					super.G(), this.b();
				}
				b() {
					this.element?.setAttribute(
						"aria-expanded",
						`${this._action.class === u.ThemeIcon.asClassName(ne)}`,
					);
				}
			}
			class Q extends a.$1c {
				constructor(ae, pe, $e, ye, ue) {
					super(),
						(this.m = ae),
						(this.q = pe),
						(this.s = $e),
						(this.t = ye),
						(this.j = this.D(new a.$Zc())),
						(this.a = this.D(
							new h.$eib(t.$fhb(ae, t.$(".actions")), {
								actionViewItemProvider: (fe, me) =>
									fe.id === c.$zRc.ID
										? ue.createInstance(c.$ARc, fe, me)
										: void 0,
							}),
						)),
						(this.f = t.$fhb(ae, t.$(""))),
						(this.b = t.$fhb(this.f, t.$(""))),
						(this.g = t.$fhb(ae, t.$(".marker-message-details-container"))),
						(this.h = this.D(
							this.s.setupManagedHover((0, q.$cib)("mouse"), this.g, ""),
						));
				}
				render(ae, pe) {
					this.a.clear(),
						this.j.clear(),
						t.$9fb(this.g),
						(this.f.className = `marker-icon ${x.default.toString(C.MarkerSeverity.toSeverity(ae.marker.severity))}`),
						(this.b.className = `codicon ${P.SeverityIcon.className(C.MarkerSeverity.toSeverity(ae.marker.severity))}`),
						this.u(ae),
						this.y(ae, pe),
						this.j.add(
							t.$0fb(this.m, t.$$gb.MOUSE_OVER, () =>
								this.q.onMarkerMouseHover(ae),
							),
						),
						this.j.add(
							t.$0fb(this.m, t.$$gb.MOUSE_LEAVE, () =>
								this.q.onMarkerMouseLeave(ae),
							),
						);
				}
				u(ae) {
					const pe = this.q.getViewModel(ae);
					if (pe) {
						const $e = pe.quickFixAction;
						this.a.push([$e], { icon: !0, label: !1 }),
							this.f.classList.toggle("quickFix", $e.enabled),
							$e.onDidChange(
								({ enabled: ye }) => {
									(0, b.$ug)(ye) || this.f.classList.toggle("quickFix", ye);
								},
								this,
								this.j,
							),
							$e.onShowQuickFixes(
								() => {
									const ye = this.a.viewItems[0];
									ye && ye.showQuickFixes();
								},
								this,
								this.j,
							);
					}
				}
				w(ae, pe) {
					const $e = this.j.add(
						new h.$eib(t.$fhb(pe, t.$(".multiline-actions")), {
							actionViewItemProvider: (me, ve) => {
								if (me.id === _) return new te(void 0, me, { ...ve, icon: !0 });
							},
						}),
					);
					this.j.add((0, a.$Yc)(() => $e.dispose()));
					const ye = this.q.getViewModel(ae),
						ue = ye && ye.multiline,
						fe = new s.$rj(_);
					(fe.enabled = !!ye && ae.lines.length > 1),
						(fe.tooltip = ue
							? (0, l.localize)(7495, null)
							: (0, l.localize)(7496, null)),
						(fe.class = u.ThemeIcon.asClassName(ue ? ne : ee)),
						(fe.run = () => (
							ye && (ye.multiline = !ye.multiline), Promise.resolve()
						)),
						$e.push([fe], { icon: !0, label: !1 });
				}
				y(ae, pe) {
					const { marker: $e, lines: ye } = ae,
						ue = this.q.getViewModel(ae),
						fe = !ue || ue.multiline,
						me = (pe && pe.lineMatches) || [];
					this.h.update(ae.marker.message);
					const ve = [];
					for (let ge = 0; ge < (fe ? ye.length : 1); ge++) {
						const be = t.$fhb(this.g, t.$(".marker-message-line")),
							Ce = t.$fhb(be, t.$(".marker-message"));
						this.j
							.add(new E.$Wob(Ce))
							.set(
								ye[ge].length > 1e3 ? `${ye[ge].substring(0, 1e3)}...` : ye[ge],
								me[ge],
							),
							ye[ge] === "" && (be.style.height = `${J.LINE_HEIGHT}px`),
							ve.push(be);
					}
					this.z($e, pe, ve[0]), this.w(ae, ve[0]);
				}
				z(ae, pe, $e) {
					if (($e.classList.add("details-container"), ae.source || ae.code)) {
						const ue = this.j.add(
								new E.$Wob(t.$fhb($e, t.$(".marker-source"))),
							),
							fe = (pe && pe.sourceMatches) || [];
						if ((ue.set(ae.source, fe), ae.code))
							if (typeof ae.code == "string") {
								const me = this.j.add(
										new E.$Wob(t.$fhb($e, t.$(".marker-code"))),
									),
									ve = (pe && pe.codeMatches) || [];
								me.set(ae.code, ve);
							} else {
								const me = t.$(".marker-code"),
									ve = this.j.add(new E.$Wob(me)),
									ge = ae.code.target.toString(!0);
								this.j.add(
									new R.Link(
										$e,
										{ href: ge, label: me, title: ge },
										void 0,
										this.s,
										this.t,
									),
								);
								const be = (pe && pe.codeMatches) || [];
								ve.set(ae.code.value, be);
							}
					}
					const ye = t.$fhb($e, t.$("span.marker-line"));
					ye.textContent = m.default.MARKERS_PANEL_AT_LINE_COL_NUMBER(
						ae.startLineNumber,
						ae.startColumn,
					);
				}
			}
			let Z = class {
				constructor(ae) {
					(this.a = ae), (this.templateId = K.RelatedInformation);
				}
				renderTemplate(ae) {
					const pe = Object.create(null);
					t.$fhb(ae, t.$(".actions")),
						t.$fhb(ae, t.$(".icon")),
						(pe.resourceLabel = new E.$Wob(
							t.$fhb(ae, t.$(".related-info-resource")),
						)),
						(pe.lnCol = t.$fhb(ae, t.$("span.marker-line")));
					const $e = t.$fhb(ae, t.$("span.related-info-resource-separator"));
					return (
						($e.textContent = ":"),
						($e.style.paddingRight = "4px"),
						(pe.description = new E.$Wob(
							t.$fhb(ae, t.$(".marker-description")),
						)),
						pe
					);
				}
				renderElement(ae, pe, $e) {
					const ye = ae.element.raw,
						ue = (ae.filterData && ae.filterData.uriMatches) || [],
						fe = (ae.filterData && ae.filterData.messageMatches) || [],
						me = this.a.getUriLabel(ye.resource, { relative: !0 });
					$e.resourceLabel.set((0, g.$kh)(ye.resource), ue, me),
						($e.lnCol.textContent = m.default.MARKERS_PANEL_AT_LINE_COL_NUMBER(
							ye.startLineNumber,
							ye.startColumn,
						)),
						$e.description.set(ye.message, fe, ye.message);
				}
				disposeTemplate(ae) {
					ae.resourceLabel.dispose(), ae.description.dispose();
				}
			};
			(e.$IRc = Z), (e.$IRc = Z = Ne([j(0, n.$3N)], Z));
			class se {
				constructor(ae) {
					this.options = ae;
				}
				filter(ae, pe) {
					return ae instanceof d.$sRc
						? this.a(ae)
						: ae instanceof d.$tRc
							? this.b(ae, pe)
							: this.d(ae, pe);
				}
				a(ae) {
					if (
						z.$jic.has(ae.resource.scheme) ||
						this.options.excludesMatcher.matches(ae.resource)
					)
						return !1;
					if (this.options.includesMatcher.matches(ae.resource)) return !0;
					if (this.options.textFilter.text && !this.options.textFilter.negate) {
						const pe = o.$CRc._filter(
							this.options.textFilter.text,
							(0, g.$kh)(ae.resource),
						);
						if (pe)
							return {
								visibility: !0,
								data: { type: W.ResourceMarkers, uriMatches: pe || [] },
							};
					}
					return p.TreeVisibility.Recurse;
				}
				b(ae, pe) {
					if (
						!(
							(this.options.showErrors &&
								C.MarkerSeverity.Error === ae.marker.severity) ||
							(this.options.showWarnings &&
								C.MarkerSeverity.Warning === ae.marker.severity) ||
							(this.options.showInfos &&
								C.MarkerSeverity.Info === ae.marker.severity)
						)
					)
						return !1;
					if (!this.options.textFilter.text) return !0;
					const ye = [];
					for (const ve of ae.lines) {
						const ge = o.$CRc._messageFilter(this.options.textFilter.text, ve);
						ye.push(ge || []);
					}
					const ue = ae.marker.source
							? o.$CRc._filter(this.options.textFilter.text, ae.marker.source)
							: void 0,
						fe = ae.marker.code
							? o.$CRc._filter(
									this.options.textFilter.text,
									typeof ae.marker.code == "string"
										? ae.marker.code
										: ae.marker.code.value,
								)
							: void 0,
						me = ue || fe || ye.some((ve) => ve.length > 0);
					return me && !this.options.textFilter.negate
						? {
								visibility: !0,
								data: {
									type: W.Marker,
									lineMatches: ye,
									sourceMatches: ue || [],
									codeMatches: fe || [],
								},
							}
						: me &&
								this.options.textFilter.negate &&
								pe === p.TreeVisibility.Recurse
							? !1
							: !me &&
									this.options.textFilter.negate &&
									pe === p.TreeVisibility.Recurse
								? !0
								: pe;
				}
				d(ae, pe) {
					if (!this.options.textFilter.text) return !0;
					const $e = o.$CRc._filter(
							this.options.textFilter.text,
							(0, g.$kh)(ae.raw.resource),
						),
						ye = o.$CRc._messageFilter(
							this.options.textFilter.text,
							i.$sc(ae.raw.message),
						),
						ue = $e || ye;
					return ue && !this.options.textFilter.negate
						? {
								visibility: !0,
								data: {
									type: W.RelatedInformation,
									uriMatches: $e || [],
									messageMatches: ye || [],
								},
							}
						: ue &&
								this.options.textFilter.negate &&
								pe === p.TreeVisibility.Recurse
							? !1
							: !ue &&
									this.options.textFilter.negate &&
									pe === p.TreeVisibility.Recurse
								? !0
								: pe;
				}
			}
			e.$JRc = se;
			let re = class extends a.$1c {
				constructor(ae, pe, $e, ye, ue, fe) {
					super(),
						(this.g = ae),
						(this.h = pe),
						(this.j = $e),
						(this.m = ye),
						(this.q = ue),
						(this.s = fe),
						(this.a = this.D(new f.$re())),
						(this.onDidChange = this.a.event),
						(this.b = null),
						(this.f = null),
						(this.t = !0),
						(this.u = null),
						this.D(
							(0, a.$Yc)(() => {
								this.b && this.b.cancel(), this.f && this.f.cancel();
							}),
						);
				}
				get multiline() {
					return this.t;
				}
				set multiline(ae) {
					this.t !== ae && ((this.t = ae), this.a.fire());
				}
				get quickFixAction() {
					return (
						this.u || (this.u = this.D(this.j.createInstance(c.$zRc, this.g))),
						this.u
					);
				}
				showLightBulb() {
					this.w(!0);
				}
				async w(ae) {
					const pe = await this.y(ae);
					(this.quickFixAction.quickFixes = pe ? this.z(pe) : []),
						this.quickFixAction.autoFixable(!!pe && pe.hasAutoFix);
				}
				y(ae) {
					return this.f !== null
						? this.f
						: this.F(ae).then((pe) =>
								pe
									? (this.f ||
											(this.f = (0, y.$zh)(($e) =>
												(0, S.$UAb)(
													this.q.codeActionProvider,
													pe,
													new v.$iL(
														this.g.range.startLineNumber,
														this.g.range.startColumn,
														this.g.range.endLineNumber,
														this.g.range.endColumn,
													),
													{
														type: k.CodeActionTriggerType.Invoke,
														triggerAction:
															I.CodeActionTriggerSource.ProblemsView,
														filter: { include: I.$GAb.QuickFix },
													},
													D.$0N.None,
													$e,
													this.s,
												).then((ye) => this.D(ye)),
											)),
										this.f)
									: null,
							);
				}
				z(ae) {
					return ae.validActions.map(
						(pe) =>
							new s.$rj(
								pe.action.command ? pe.action.command.id : pe.action.title,
								pe.action.title,
								void 0,
								!0,
								() =>
									this.C(this.g).then(() =>
										this.j.invokeFunction(
											S.$VAb,
											pe,
											S.ApplyCodeActionReason.FromProblemsView,
										),
									),
							),
					);
				}
				C(ae) {
					const { resource: pe, selection: $e } = {
						resource: ae.resource,
						selection: ae.range,
					};
					return this.m
						.openEditor(
							{
								resource: pe,
								options: {
									selection: $e,
									preserveFocus: !0,
									pinned: !1,
									revealIfVisible: !0,
								},
							},
							T.$JY,
						)
						.then(() => {});
				}
				F(ae) {
					const pe = this.h.getModel(this.g.resource);
					return pe
						? Promise.resolve(pe)
						: ae
							? (this.b ||
									(this.b = (0, y.$zh)(
										($e) =>
											new Promise((ye) => {
												this.D(
													this.h.onModelAdded((ue) => {
														(0, g.$gh)(ue.uri, this.g.resource) && ye(ue);
													}),
												);
											}),
									)),
								this.b)
							: Promise.resolve(null);
				}
			};
			(e.$KRc = re),
				(e.$KRc = re =
					Ne(
						[j(1, $.$QO), j(2, r.$Li), j(3, T.$IY), j(4, O.$k3), j(5, H.$uZ)],
						re,
					));
			let le = class extends a.$1c {
				constructor(ae = !0, pe = U.MarkersViewMode.Tree, $e, ye) {
					super(),
						(this.s = $e),
						(this.t = ye),
						(this.a = this.D(new f.$re())),
						(this.onDidChange = this.a.event),
						(this.b = this.D(new f.$re())),
						(this.onDidChangeViewMode = this.b.event),
						(this.f = new Map()),
						(this.g = new Map()),
						(this.h = !1),
						(this.j = null),
						(this.m = new y.$Jh(300)),
						(this.u = !0),
						(this.w = U.MarkersViewMode.Tree),
						(this.u = ae),
						(this.w = pe),
						(this.q = U.MarkersContextKeys.MarkersViewModeContextKey.bindTo(
							this.s,
						)),
						this.q.set(pe);
				}
				add(ae) {
					if (!this.f.has(ae.id)) {
						const pe = this.t.createInstance(re, ae),
							$e = [pe];
						(pe.multiline = this.multiline),
							pe.onDidChange(
								() => {
									this.h || this.a.fire(ae);
								},
								this,
								$e,
							),
							this.f.set(ae.id, { viewModel: pe, disposables: $e });
						const ye = this.g.get(ae.resource.toString()) || [];
						ye.push(ae), this.g.set(ae.resource.toString(), ye);
					}
				}
				remove(ae) {
					const pe = this.g.get(ae.toString()) || [];
					for (const $e of pe) {
						const ye = this.f.get($e.id);
						ye && (0, a.$Vc)(ye.disposables),
							this.f.delete($e.id),
							this.j === $e && (this.j = null);
					}
					this.g.delete(ae.toString());
				}
				getViewModel(ae) {
					const pe = this.f.get(ae.id);
					return pe ? pe.viewModel : null;
				}
				onMarkerMouseHover(ae) {
					(this.j = ae),
						this.m.trigger(() => {
							if (this.j) {
								const pe = this.getViewModel(this.j);
								pe && pe.showLightBulb();
							}
						});
				}
				onMarkerMouseLeave(ae) {
					this.j === ae && (this.j = null);
				}
				get multiline() {
					return this.u;
				}
				set multiline(ae) {
					let pe = !1;
					this.u !== ae && ((this.u = ae), (pe = !0)),
						(this.h = !0),
						this.f.forEach(({ viewModel: $e }) => {
							$e.multiline !== ae && (($e.multiline = ae), (pe = !0));
						}),
						(this.h = !1),
						pe && this.a.fire(void 0);
				}
				get viewMode() {
					return this.w;
				}
				set viewMode(ae) {
					this.w !== ae && ((this.w = ae), this.b.fire(ae), this.q.set(ae));
				}
				dispose() {
					this.f.forEach(({ disposables: ae }) => (0, a.$Vc)(ae)),
						this.f.clear(),
						this.g.clear(),
						super.dispose();
				}
			};
			(e.$LRc = le), (e.$LRc = le = Ne([j(2, B.$6j), j(3, r.$Li)], le));
		},
	),
		