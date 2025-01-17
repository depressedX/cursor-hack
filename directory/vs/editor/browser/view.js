import '../../../require.js';
import '../../../exports.js';
import '../../base/browser/dom.js';
import '../../base/browser/fastDomNode.js';
import '../../base/browser/performance.js';
import '../../base/common/errors.js';
import './controller/mouseTarget.js';
import './controller/pointerHandler.js';
import './controller/textAreaHandler.js';
import './view/renderingContext.js';
import './view/viewController.js';
import './view/viewOverlays.js';
import './view/viewPart.js';
import './view/viewUserInputEvents.js';
import './viewParts/blockDecorations/blockDecorations.js';
import './viewParts/contentWidgets/contentWidgets.js';
import './viewParts/currentLineHighlight/currentLineHighlight.js';
import './viewParts/decorations/decorations.js';
import './viewParts/editorScrollbar/editorScrollbar.js';
import './viewParts/glyphMargin/glyphMargin.js';
import './viewParts/indentGuides/indentGuides.js';
import './viewParts/lineNumbers/lineNumbers.js';
import './viewParts/lines/viewLines.js';
import './viewParts/linesDecorations/linesDecorations.js';
import './viewParts/margin/margin.js';
import './viewParts/marginDecorations/marginDecorations.js';
import './viewParts/minimap/minimap.js';
import './viewParts/overlayWidgets/overlayWidgets.js';
import './viewParts/overviewRuler/decorationsOverviewRuler.js';
import './viewParts/overviewRuler/overviewRuler.js';
import './viewParts/rulers/rulers.js';
import './viewParts/scrollDecoration/scrollDecoration.js';
import './viewParts/selections/selections.js';
import './viewParts/viewCursors/viewCursors.js';
import './viewParts/viewZones/viewZones.js';
import './viewParts/whitespace/whitespace.js';
import '../common/config/editorOptions.js';
import '../common/core/position.js';
import '../common/core/range.js';
import '../common/core/selection.js';
import '../common/editorCommon.js';
import '../common/model.js';
import '../common/viewEventHandler.js';
import '../common/viewLayout/viewLinesViewportData.js';
import '../common/viewModel/viewContext.js';
import '../../platform/instantiation/common/instantiation.js';
import '../../platform/theme/common/themeService.js';
define(
			de[2853],
			he([
				1, 0, 7, 194, 1127, 29, 1662, 2840, 2849, 746, 2798, 2713, 303, 1534,
				2714, 2755, 2847, 2715, 2844, 1191, 2848, 1664, 2841, 2756, 1605, 2757,
				2831, 2716, 2850, 2717, 2718, 2719, 2845, 2851, 2721, 2852, 38, 48, 17,
				104, 98, 64, 750, 2578, 2579, 5, 35,
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
				K,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.View = void 0),
					(t = mt(t));
				let J = class extends H.$Xsb {
					constructor(ie, ne, ee, _, te, Q, Z) {
						super(),
							(this.H = Z),
							(this.F = !1),
							(this.j = [new z.$kL(1, 1, 1, 1)]),
							(this.G = null);
						const se = new u.$Zub(ne, _, te, ie);
						(this.g = new V.$xub(ne, ee, _)),
							this.g.addEventHandler(this),
							(this.u = []),
							(this.w = this.H.createInstance(m.$cvb, this.g, se, this.L())),
							this.u.push(this.w),
							(this.z = (0, i.$Shb)(document.createElement("div"))),
							this.z.setClassName("lines-content monaco-editor-background"),
							this.z.setPosition("absolute"),
							(this.domNode = (0, i.$Shb)(document.createElement("div"))),
							this.domNode.setClassName(this.N()),
							this.domNode.setAttribute("role", "code"),
							(this.C = (0, i.$Shb)(document.createElement("div"))),
							h.$zub.write(this.C, h.PartFingerprint.OverflowGuard),
							this.C.setClassName("overflow-guard"),
							(this.c = new f.$nvb(this.g, this.z, this.domNode, this.C)),
							this.u.push(this.c),
							(this.m = new y.$uvb(this.g, this.z)),
							(this.n = new A.$Mvb(this.g)),
							this.u.push(this.n);
						const re = new P.$Gvb(this.g);
						this.u.push(re);
						const le = new D.$Jvb(this.g);
						this.u.push(le);
						const oe = new a.$fvb(this.g);
						this.u.push(oe),
							oe.addDynamicOverlay(new p.$kvb(this.g)),
							oe.addDynamicOverlay(new M.$Kvb(this.g)),
							oe.addDynamicOverlay(new s.$tvb(this.g)),
							oe.addDynamicOverlay(new o.$mvb(this.g)),
							oe.addDynamicOverlay(new R.$Nvb(this.g));
						const ae = new a.$gvb(this.g);
						this.u.push(ae),
							ae.addDynamicOverlay(new p.$lvb(this.g)),
							ae.addDynamicOverlay(new S.$wvb(this.g)),
							ae.addDynamicOverlay(new $.$vvb(this.g)),
							ae.addDynamicOverlay(new l.$avb(this.g)),
							(this.s = new b.$svb(this.g)),
							this.u.push(this.s);
						const pe = new v.$bvb(this.g);
						pe.getDomNode().appendChild(this.n.marginDomNode),
							pe.getDomNode().appendChild(ae.getDomNode()),
							pe.getDomNode().appendChild(this.s.domNode),
							this.u.push(pe),
							(this.q = new g.$ivb(this.g, this.domNode)),
							this.u.push(this.q),
							(this.t = new N.$Lvb(this.g)),
							this.u.push(this.t),
							(this.r = new T.$Fvb(this.g, this.domNode)),
							this.u.push(this.r);
						const $e = new L.$Ivb(this.g);
						this.u.push($e);
						const ye = new n.$hvb(this.g);
						this.u.push(ye);
						const ue = new I.$Evb(this.g);
						if ((this.u.push(ue), re)) {
							const fe = this.c.getOverviewRulerLayoutInfo();
							fe.parent.insertBefore(re.getDomNode(), fe.insertBefore);
						}
						this.z.appendChild(oe.getDomNode()),
							this.z.appendChild($e.domNode),
							this.z.appendChild(this.n.domNode),
							this.z.appendChild(this.m.getDomNode()),
							this.z.appendChild(this.q.domNode),
							this.z.appendChild(this.t.getDomNode()),
							this.C.appendChild(pe.getDomNode()),
							this.C.appendChild(this.c.getDomNode()),
							this.C.appendChild(le.getDomNode()),
							this.C.appendChild(this.w.textArea),
							this.C.appendChild(this.w.textAreaCover),
							this.C.appendChild(this.r.getDomNode()),
							this.C.appendChild(ue.getDomNode()),
							this.C.appendChild(ye.domNode),
							this.domNode.appendChild(this.C),
							Q
								? (Q.appendChild(
										this.q.overflowingContentWidgetsDomNode.domNode,
									),
									Q.appendChild(
										this.r.overflowingOverlayWidgetsDomNode.domNode,
									))
								: (this.domNode.appendChild(
										this.q.overflowingContentWidgetsDomNode,
									),
									this.domNode.appendChild(
										this.r.overflowingOverlayWidgetsDomNode,
									)),
							this.M(),
							(this.y = this.D(new d.$$ub(this.g, se, this.J())));
					}
					I() {
						const ie = this.g.viewModel.model,
							ne = this.g.viewModel.glyphLanes;
						let ee = [],
							_ = 0;
						(ee = ee.concat(
							ie.getAllMarginDecorations().map((te) => {
								const Q =
									te.options.glyphMargin?.position ?? x.GlyphMarginLane.Center;
								return (
									(_ = Math.max(_, te.range.endLineNumber)),
									{
										range: te.range,
										lane: Q,
										persist: te.options.glyphMargin?.persistLane,
									}
								);
							}),
						)),
							(ee = ee.concat(
								this.s.getWidgets().map((te) => {
									const Q = ie.validateRange(te.preference.range);
									return (
										(_ = Math.max(_, Q.endLineNumber)),
										{ range: Q, lane: te.preference.lane }
									);
								}),
							)),
							ee.sort((te, Q) =>
								U.$iL.compareRangesUsingStarts(te.range, Q.range),
							),
							ne.reset(_);
						for (const te of ee) ne.push(te.lane, te.range, te.persist);
						return ne;
					}
					J() {
						return {
							viewDomNode: this.domNode.domNode,
							linesContentDomNode: this.z.domNode,
							viewLinesDomNode: this.m.getDomNode().domNode,
							focusTextArea: () => {
								this.focus();
							},
							dispatchTextAreaEvent: (ie) => {
								this.w.textArea.domNode.dispatchEvent(ie);
							},
							getLastRenderData: () => {
								const ie = this.t.getLastRenderData() || [],
									ne = this.w.getLastRenderData();
								return new C.$Uub(ie, ne);
							},
							renderNow: () => {
								this.render(!0, !1);
							},
							shouldSuppressMouseDownOnViewZone: (ie) =>
								this.n.shouldSuppressMouseDownOnViewZone(ie),
							shouldSuppressMouseDownOnWidget: (ie) =>
								this.q.shouldSuppressMouseDownOnWidget(ie),
							getPositionFromDOMInfo: (ie, ne) => (
								this.P(), this.m.getPositionFromDOMInfo(ie, ne)
							),
							visibleRangeForPosition: (ie, ne) => (
								this.P(), this.m.visibleRangeForPosition(new B.$hL(ie, ne))
							),
							getLineWidth: (ie) => (this.P(), this.m.getLineWidth(ie)),
						};
					}
					L() {
						return {
							visibleRangeForPosition: (ie) => (
								this.P(), this.m.visibleRangeForPosition(ie)
							),
						};
					}
					M() {
						const ne = this.g.configuration.options.get(
							O.EditorOption.layoutInfo,
						);
						this.domNode.setWidth(ne.width),
							this.domNode.setHeight(ne.height),
							this.C.setWidth(ne.width),
							this.C.setHeight(ne.height),
							this.z.setWidth(16777216),
							this.z.setHeight(16777216);
					}
					N() {
						const ie = this.w.isFocused() ? " focused" : "";
						return (
							this.g.configuration.options.get(O.EditorOption.editorClassName) +
							" " +
							(0, K.$mP)(this.g.theme.type) +
							ie
						);
					}
					handleEvents(ie) {
						super.handleEvents(ie), this.O();
					}
					onConfigurationChanged(ie) {
						return this.domNode.setClassName(this.N()), this.M(), !1;
					}
					onCursorStateChanged(ie) {
						return (this.j = ie.selections), !1;
					}
					onDecorationsChanged(ie) {
						return ie.affectsGlyphMargin && (this.F = !0), !1;
					}
					onFocusChanged(ie) {
						return this.domNode.setClassName(this.N()), !1;
					}
					onThemeChanged(ie) {
						return (
							this.g.theme.update(ie.theme),
							this.domNode.setClassName(this.N()),
							!1
						);
					}
					dispose() {
						this.G !== null && (this.G.dispose(), (this.G = null)),
							this.q.overflowingContentWidgetsDomNode.domNode.remove(),
							this.g.removeEventHandler(this),
							this.m.dispose();
						for (const ie of this.u) ie.dispose();
						super.dispose();
					}
					O() {
						if (this.B.isDisposed) throw new E.$gb();
						if (this.G === null) {
							const ie = this.R();
							this.G = X.INSTANCE.scheduleCoordinatedRendering({
								window: t.getWindow(this.domNode?.domNode),
								prepareRenderText: () => {
									if (this.B.isDisposed) throw new E.$gb();
									try {
										return ie.prepareRenderText();
									} finally {
										this.G = null;
									}
								},
								renderText: () => {
									if (this.B.isDisposed) throw new E.$gb();
									return ie.renderText();
								},
								prepareRender: (ne, ee) => {
									if (this.B.isDisposed) throw new E.$gb();
									return ie.prepareRender(ne, ee);
								},
								render: (ne, ee) => {
									if (this.B.isDisposed) throw new E.$gb();
									return ie.render(ne, ee);
								},
							});
						}
					}
					P() {
						const ie = this.R();
						W(() => ie.prepareRenderText());
						const ne = W(() => ie.renderText());
						if (ne) {
							const [ee, _] = ne;
							W(() => ie.prepareRender(ee, _)), W(() => ie.render(ee, _));
						}
					}
					Q() {
						const ie = [];
						let ne = 0;
						for (const ee of this.u) ee.shouldRender() && (ie[ne++] = ee);
						return ie;
					}
					R() {
						return {
							prepareRenderText: () => {
								if (this.F) {
									this.F = !1;
									const ie = this.I();
									this.g.configuration.setGlyphMarginDecorationLaneCount(
										ie.requiredLanes,
									);
								}
								w.inputLatency.onRenderStart();
							},
							renderText: () => {
								if (!this.domNode.domNode.isConnected) return null;
								let ie = this.Q();
								if (!this.m.shouldRender() && ie.length === 0) return null;
								const ne = this.g.viewLayout.getLinesViewportData();
								this.g.viewModel.setViewport(
									ne.startLineNumber,
									ne.endLineNumber,
									ne.centeredLineNumber,
								);
								const ee = new q.$pub(
									this.j,
									ne,
									this.g.viewLayout.getWhitespaceViewportData(),
									this.g.viewModel,
								);
								return (
									this.q.shouldRender() && this.q.onBeforeRender(ee),
									this.m.shouldRender() &&
										(this.m.renderText(ee),
										this.m.onDidRender(),
										(ie = this.Q())),
									[ie, new r.$rub(this.g.viewLayout, ee, this.m)]
								);
							},
							prepareRender: (ie, ne) => {
								for (const ee of ie) ee.prepareRender(ne);
							},
							render: (ie, ne) => {
								for (const ee of ie) ee.render(ne), ee.onDidRender();
							},
						};
					}
					delegateVerticalScrollbarPointerDown(ie) {
						this.c.delegateVerticalScrollbarPointerDown(ie);
					}
					delegateScrollFromMouseWheelEvent(ie) {
						this.c.delegateScrollFromMouseWheelEvent(ie);
					}
					restoreState(ie) {
						this.g.viewModel.viewLayout.setScrollPosition(
							{ scrollTop: ie.scrollTop, scrollLeft: ie.scrollLeft },
							F.ScrollType.Immediate,
						),
							this.g.viewModel.visibleLinesStabilized();
					}
					getOffsetForColumn(ie, ne) {
						const ee = this.g.viewModel.model.validatePosition({
								lineNumber: ie,
								column: ne,
							}),
							_ =
								this.g.viewModel.coordinatesConverter.convertModelPositionToViewPosition(
									ee,
								);
						this.P();
						const te = this.m.visibleRangeForPosition(
							new B.$hL(_.lineNumber, _.column),
						);
						return te ? te.left : -1;
					}
					getTargetAtClientPoint(ie, ne) {
						const ee = this.y.getTargetAtClientPoint(ie, ne);
						return ee
							? c.$Yub.convertViewToModelMouseTarget(
									ee,
									this.g.viewModel.coordinatesConverter,
								)
							: null;
					}
					createOverviewRuler(ie) {
						return new k.$Hvb(this.g, ie);
					}
					change(ie) {
						this.n.changeViewZones(ie), this.O();
					}
					render(ie, ne) {
						if (ne) {
							this.m.forceShouldRender();
							for (const ee of this.u) ee.forceShouldRender();
						}
						ie ? this.P() : this.O();
					}
					writeScreenReaderContent(ie) {
						this.w.writeScreenReaderContent(ie);
					}
					focus() {
						this.w.focusTextArea();
					}
					isFocused() {
						return this.w.isFocused();
					}
					refreshFocusState() {
						this.w.refreshFocusState();
					}
					setAriaOptions(ie) {
						this.w.setAriaOptions(ie);
					}
					addContentWidget(ie) {
						this.q.addWidget(ie.widget), this.layoutContentWidget(ie), this.O();
					}
					layoutContentWidget(ie) {
						this.q.setWidgetPosition(
							ie.widget,
							ie.position?.position ?? null,
							ie.position?.secondaryPosition ?? null,
							ie.position?.preference ?? null,
							ie.position?.positionAffinity ?? null,
						),
							this.O();
					}
					removeContentWidget(ie) {
						this.q.removeWidget(ie.widget), this.O();
					}
					addOverlayWidget(ie) {
						this.r.addWidget(ie.widget), this.layoutOverlayWidget(ie), this.O();
					}
					layoutOverlayWidget(ie) {
						this.r.setWidgetPosition(ie.widget, ie.position) && this.O();
					}
					removeOverlayWidget(ie) {
						this.r.removeWidget(ie.widget), this.O();
					}
					addGlyphMarginWidget(ie) {
						this.s.addWidget(ie.widget), (this.F = !0), this.O();
					}
					layoutGlyphMarginWidget(ie) {
						const ne = ie.position;
						this.s.setWidgetPosition(ie.widget, ne) &&
							((this.F = !0), this.O());
					}
					removeGlyphMarginWidget(ie) {
						this.s.removeWidget(ie.widget), (this.F = !0), this.O();
					}
				};
				(e.View = J), (e.View = J = Ne([j(6, G.$Li)], J));
				function W(Y) {
					try {
						return Y();
					} catch (ie) {
						return (0, E.$4)(ie), null;
					}
				}
				class X {
					static {
						this.INSTANCE = new X();
					}
					constructor() {
						(this.c = []), (this.d = new Map());
					}
					scheduleCoordinatedRendering(ie) {
						return (
							this.c.push(ie),
							this.f(ie.window),
							{
								dispose: () => {
									const ne = this.c.indexOf(ie);
									if (
										ne !== -1 &&
										(this.c.splice(ne, 1), this.c.length === 0)
									) {
										for (const [ee, _] of this.d) _.dispose();
										this.d.clear();
									}
								},
							}
						);
					}
					f(ie) {
						if (!this.d.has(ie)) {
							const ne = () => {
								this.d.delete(ie), this.g();
							};
							this.d.set(ie, t.$ggb(ie, ne, 100));
						}
					}
					g() {
						const ie = this.c.slice(0);
						this.c = [];
						for (const ee of ie) W(() => ee.prepareRenderText());
						const ne = [];
						for (let ee = 0, _ = ie.length; ee < _; ee++) {
							const te = ie[ee];
							ne[ee] = W(() => te.renderText());
						}
						for (let ee = 0, _ = ie.length; ee < _; ee++) {
							const te = ie[ee],
								Q = ne[ee];
							if (!Q) continue;
							const [Z, se] = Q;
							W(() => te.prepareRender(Z, se));
						}
						for (let ee = 0, _ = ie.length; ee < _; ee++) {
							const te = ie[ee],
								Q = ne[ee];
							if (!Q) continue;
							const [Z, se] = Q;
							W(() => te.render(Z, se));
						}
					}
				}
			},
		),
		