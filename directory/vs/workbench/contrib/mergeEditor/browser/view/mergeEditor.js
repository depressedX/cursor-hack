define(
			de[1050],
			he([
				1, 0, 7, 759, 279, 97, 29, 6, 3, 77, 19, 28, 65, 98, 125, 4, 10, 8, 22,
				5, 21, 32, 35, 718, 44, 549, 1026, 711, 508, 326, 3081, 3085, 3086,
				3087, 687, 613, 66, 231, 18, 3082, 3088, 2451, 989,
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
			) {
				"use strict";
				var x, H;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VRc = e.$URc = e.$TRc = void 0);
				let q = class extends $.$BVb {
					static {
						x = this;
					}
					static {
						this.ID = "mergeEditor";
					}
					get viewModel() {
						return this.f;
					}
					get inputModel() {
						return this.gc;
					}
					get model() {
						return this.inputModel.get()?.model;
					}
					get hc() {
						return !!this.mc.getValue("mergeEditor.writableInputs");
					}
					constructor(W, X, Y, ie, ne, ee, _, te, Q, Z, se, re, le) {
						super(x.ID, W, ie, X, ne, _, ee, Q, Z, se),
							(this.lc = Y),
							(this.mc = te),
							(this.nc = re),
							(this.oc = le),
							(this.c = new m.$Zc()),
							(this.f = (0, r.observableValue)(this, void 0)),
							(this.Sb = this.D(new m.$2c())),
							(this.Tb = this.D(this.m.createInstance(z.$8Zb, 1, this.f))),
							(this.Ub = (0, r.observableValue)(this, void 0)),
							(this.Vb = (0, r.observableValue)(this, void 0)),
							(this.Wb = this.D(this.m.createInstance(z.$8Zb, 2, this.f))),
							(this.Xb = this.D(this.m.createInstance(F.$h1b, this.f))),
							(this.Yb = this.m.createInstance(V)),
							(this.Zb = (0, r.observableValue)(this, this.Yb.value)),
							(this.$b = A.$$Zb.bindTo(this.lc)),
							(this.ac = A.$a1b.bindTo(this.lc)),
							(this.bc = A.$b1b.bindTo(this.lc)),
							(this.cc = A.$c1b.bindTo(this.lc)),
							(this.dc = A.$f1b.bindTo(this.lc)),
							(this.ec = A.$e1b.bindTo(this.lc)),
							(this.fc = A.$d1b.bindTo(this.lc)),
							(this.gc = (0, r.observableValue)(this, void 0)),
							(this.ic = new N.$QRc(
								this.Tb.editor,
								this.Wb.editor,
								this.Xb.editor,
							)),
							(this.jc = (0, k.$Mwb)(
								"mergeEditor.showCodeLenses",
								!0,
								this.oc,
							)),
							(this.kc = this.D(
								new D.$ORc(this.f, this.Tb, this.Wb, this.Ub, this.Xb, this.Zb),
							)),
							(this.pc = new d.$re()),
							(this.onDidChangeSizeConstraints = this.pc.event),
							(this.wc = this.D(new m.$Zc())),
							(this.Cc = this.m.createInstance(
								P.$oZb,
								"mergeEditor/showNonConflictingChanges",
							)),
							(this.Dc = (0, r.observableValue)(this, this.Cc.get() ?? !1));
					}
					dispose() {
						this.c.dispose(),
							this.$b.reset(),
							this.ac.reset(),
							this.fc.reset(),
							super.dispose();
					}
					get minimumWidth() {
						return this.Yb.value.kind === "mixed"
							? this.Tb.view.minimumWidth + this.Wb.view.minimumWidth
							: this.Tb.view.minimumWidth +
									this.Wb.view.minimumWidth +
									this.Xb.view.minimumWidth;
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, g.localize)(7679, null);
					}
					Lb(W, X) {
						(this.$ = W),
							W.classList.add("merge-editor"),
							this.xc(this.Yb.value),
							this.sc(X);
					}
					Mb(W) {
						this.sc(W);
					}
					sc(W) {
						const X = (0, P.$nZb)(W, {
							minimap: { enabled: !1 },
							glyphMargin: !1,
							lineNumbersMinChars: 2,
							readOnly: !this.hc,
						});
						this.Tb.updateOptions(X),
							this.Wb.updateOptions(X),
							this.Vb.set({ ...this.Wb.editor.getRawOptions() }, void 0),
							this.Xb.updateOptions(W);
					}
					Nb() {
						return this.Xb.editor;
					}
					layout(W) {
						this.Sb.value?.layout(W.width, W.height);
					}
					async setInput(W, X, Y, ie) {
						if (!(W instanceof T.$Enc))
							throw new C.$gb("ONLY MergeEditorInput is supported");
						await super.setInput(W, X, Y, ie),
							this.c.clear(),
							(0, r.transaction)((se) => {
								this.f.set(void 0, se), this.gc.set(void 0, se);
							});
						const ne = await W.resolve(),
							ee = ne.model,
							_ = this.m.createInstance(
								M.$i1b,
								ee,
								this.Tb,
								this.Wb,
								this.Xb,
								this.Ub,
								this.Dc,
							);
						ee.telemetry.reportMergeEditorOpened({
							combinableConflictCount: ee.combinableConflictCount,
							conflictCount: ee.conflictCount,
							baseTop: this.Zb.get().showBaseAtTop,
							baseVisible: this.Zb.get().showBase,
							isColumnView: this.Zb.get().kind === "columns",
						}),
							(0, r.transaction)((se) => {
								this.f.set(_, se), this.gc.set(ne, se);
							}),
							this.c.add(_),
							this.dc.set(ne.resultUri.toString()),
							this.ec.set(ee.base.uri.toString()),
							this.c.add(
								(0, m.$Yc)(() => {
									this.ec.reset(), this.dc.reset();
								}),
							),
							this.c.add(
								(0, r.autorunWithStore)((se, re) => {
									const le = this.Ub.read(se);
									this.Xb.editor.changeViewZones((oe) => {
										const ae = this.Zb.read(se),
											pe = ae.kind === "columns",
											$e = ae.kind === "mixed" && !ae.showBaseAtTop;
										this.Tb.editor.changeViewZones((ye) => {
											this.Wb.editor.changeViewZones((ue) => {
												le
													? le.editor.changeViewZones((fe) => {
															re.add(
																this.uc(
																	se,
																	_,
																	this.Tb.editor,
																	ye,
																	this.Wb.editor,
																	ue,
																	le.editor,
																	fe,
																	$e,
																	this.Xb.editor,
																	oe,
																	pe,
																),
															);
														})
													: re.add(
															this.uc(
																se,
																_,
																this.Tb.editor,
																ye,
																this.Wb.editor,
																ue,
																void 0,
																void 0,
																!1,
																this.Xb.editor,
																oe,
																pe,
															),
														);
											});
										});
									}),
										this.kc.updateScrolling();
								}),
							);
						const te = this.jb(W, Y);
						te
							? this.zc(te)
							: this.c.add(
									(0, P.$lZb)(ee.onInitialized, () => {
										const se = ee.modifiedBaseRanges
											.get()
											.find((re) => re.isConflicting);
										se &&
											(this.Tb.editor.revealLineInCenter(
												se.input1Range.startLineNumber,
											),
											(0, r.transaction)((re) => {
												_.setActiveModifiedBaseRange(se, re);
											}));
									}),
								);
						const Q = (se) => {
							const re = (0, I.$H1b)(se, this.nc);
							(0, I.$G1b)(ee.input2.textModel, re, this.nc),
								(0, I.$G1b)(ee.input1.textModel, re, this.nc),
								(0, I.$G1b)(ee.resultTextModel, re, this.nc);
							const le = this.Ub.get()?.editor.getModel();
							le && (0, I.$G1b)(le, re, this.nc);
						};
						this.c.add(
							this.nc.onDidChangeTransientModelProperty((se) => {
								Q(se);
							}),
						),
							Q(this.Xb.editor.getModel());
						const Z = this;
						this.c.add(
							new (class {
								constructor() {
									this.b = new m.$Zc();
									for (const se of this.c())
										this.b.add(se.onDidChangeContent(() => this.d()));
								}
								dispose() {
									this.b.dispose();
								}
								*c() {
									yield ee.base,
										yield ee.input1.textModel,
										yield ee.input2.textModel;
								}
								d() {
									for (const se of this.c())
										if (se.getValueLength() > 0) return;
									Z.u.replaceEditors(
										[
											{
												editor: W,
												replacement: {
													resource: W.result,
													options: { preserveFocus: !0 },
												},
												forceReplaceDirty: !0,
											},
										],
										Z.group,
									);
								}
							})(),
						);
					}
					uc(W, X, Y, ie, ne, ee, _, te, Q, Z, se, re) {
						const le = [],
							oe = [],
							ae = [],
							pe = [],
							$e = this.ic.computeViewZones(W, X, {
								codeLensesVisible: this.jc.read(W),
								showNonConflictingChanges: this.Dc.read(W),
								shouldAlignBase: Q,
								shouldAlignResult: re,
							}),
							ye = new m.$Zc();
						if (te) for (const ue of $e.baseViewZones) ue.create(te, ae, ye);
						for (const ue of $e.resultViewZones) ue.create(se, pe, ye);
						for (const ue of $e.input1ViewZones) ue.create(ie, le, ye);
						for (const ue of $e.input2ViewZones) ue.create(ee, oe, ye);
						return (
							ye.add({
								dispose: () => {
									Y.changeViewZones((ue) => {
										for (const fe of le) ue.removeZone(fe);
									}),
										ne.changeViewZones((ue) => {
											for (const fe of oe) ue.removeZone(fe);
										}),
										_?.changeViewZones((ue) => {
											for (const fe of ae) ue.removeZone(fe);
										}),
										Z.changeViewZones((ue) => {
											for (const fe of pe) ue.removeZone(fe);
										});
								},
							}),
							ye
						);
					}
					setOptions(W) {
						super.setOptions(W),
							W &&
								(0, S.applyTextEditorOptions)(
									W,
									this.Xb.editor,
									c.ScrollType.Smooth,
								);
					}
					clearInput() {
						super.clearInput(), this.c.clear();
						for (const { editor: W } of [this.Tb, this.Wb, this.Xb])
							W.setModel(null);
					}
					focus() {
						super.focus(), (this.getControl() ?? this.Xb.editor).focus();
					}
					hasFocus() {
						for (const { editor: W } of [this.Tb, this.Wb, this.Xb])
							if (W.hasTextFocus()) return !0;
						return super.hasFocus();
					}
					Z(W) {
						super.Z(W);
						for (const { editor: X } of [this.Tb, this.Wb, this.Xb])
							W ? X.onVisible() : X.onHide();
						this.$b.set(W);
					}
					getControl() {
						return this.Xb.editor;
					}
					get scopedContextKeyService() {
						return this.getControl()?.invokeWithinContext((X) => X.get(o.$6j));
					}
					toggleBase() {
						this.setLayout({
							...this.Yb.value,
							showBase: !this.Yb.value.showBase,
						});
					}
					toggleShowBaseTop() {
						const W = this.Yb.value.showBase && this.Yb.value.showBaseAtTop;
						this.setLayout({
							...this.Yb.value,
							showBaseAtTop: !0,
							showBase: !W,
						});
					}
					toggleShowBaseCenter() {
						const W = this.Yb.value.showBase && !this.Yb.value.showBaseAtTop;
						this.setLayout({
							...this.Yb.value,
							showBaseAtTop: !1,
							showBase: !W,
						});
					}
					setLayoutKind(W) {
						this.setLayout({ ...this.Yb.value, kind: W });
					}
					setLayout(W) {
						const X = this.Yb.value;
						JSON.stringify(X) !== JSON.stringify(W) &&
							(this.model?.telemetry.reportLayoutChange({
								baseTop: W.showBaseAtTop,
								baseVisible: W.showBase,
								isColumnView: W.kind === "columns",
							}),
							this.xc(W));
					}
					xc(W) {
						(0, r.transaction)((X) => {
							if (W.showBase && !this.Ub.get()) {
								this.wc.clear();
								const Y = this.wc.add(
									this.m.createInstance(L.$7Zb, this.viewModel),
								);
								this.wc.add(
									(0, r.autorun)((ie) => {
										const ne = this.Vb.read(ie);
										ne && Y.updateOptions(ne);
									}),
								),
									this.Ub.set(Y, X);
							} else
								!W.showBase &&
									this.Ub.get() &&
									(this.Ub.set(void 0, X), this.wc.clear());
							W.kind === "mixed"
								? this.yc(
										[
											W.showBaseAtTop && W.showBase
												? { size: 38, data: this.Ub.get().view }
												: void 0,
											{
												size: 38,
												groups: [
													{ data: this.Tb.view },
													!W.showBaseAtTop && W.showBase
														? { data: this.Ub.get().view }
														: void 0,
													{ data: this.Wb.view },
												].filter(a.$tg),
											},
											{ size: 62, data: this.Xb.view },
										].filter(a.$tg),
									)
								: W.kind === "columns" &&
									this.yc(
										[
											W.showBase
												? { size: 40, data: this.Ub.get().view }
												: void 0,
											{
												size: 60,
												groups: [
													{ data: this.Tb.view },
													{ data: this.Xb.view },
													{ data: this.Wb.view },
												],
											},
										].filter(a.$tg),
									),
								(this.Yb.value = W),
								this.ac.set(W.kind),
								this.bc.set(W.showBase),
								this.cc.set(W.showBaseAtTop),
								this.pc.fire(),
								this.Zb.set(W, X);
						});
					}
					yc(W) {
						let X = -1,
							Y = -1;
						this.Sb.value &&
							((X = this.Sb.value.width), (Y = this.Sb.value.height)),
							(this.Sb.value = i.$Cob.from(
								{ orientation: w.Orientation.VERTICAL, size: 100, groups: W },
								{
									styles: {
										separatorBorder:
											this.h.getColor(R.$0Bc) ?? E.$UL.transparent,
									},
									proportionalLayout: !0,
								},
							)),
							(0, t.$hhb)(this.$, this.Sb.value.element),
							X !== -1 && this.Sb.value.layout(X, Y);
					}
					zc(W) {
						W &&
							(this.Xb.editor.restoreViewState(W),
							W.input1State && this.Tb.editor.restoreViewState(W.input1State),
							W.input2State && this.Wb.editor.restoreViewState(W.input2State),
							W.focusIndex >= 0 &&
								[this.Tb.editor, this.Wb.editor, this.Xb.editor][
									W.focusIndex
								].focus());
					}
					mb(W) {
						if (!(0, u.$gh)(this.inputModel.get()?.resultUri, W)) return;
						const X = this.Xb.editor.saveViewState();
						if (!X) return;
						const Y = this.Tb.editor.saveViewState() ?? void 0,
							ie = this.Wb.editor.saveViewState() ?? void 0,
							ne = [this.Tb.editor, this.Wb.editor, this.Xb.editor].findIndex(
								(ee) => ee.hasWidgetFocus(),
							);
						return { ...X, input1State: Y, input2State: ie, focusIndex: ne };
					}
					nb(W) {
						return W instanceof T.$Enc;
					}
					toggleShowNonConflictingChanges() {
						this.Dc.set(!this.Dc.get(), void 0),
							this.Cc.set(this.Dc.get()),
							this.fc.set(this.Dc.get());
					}
				};
				(e.$TRc = q),
					(e.$TRc =
						q =
						x =
							Ne(
								[
									j(1, b.$Li),
									j(2, o.$6j),
									j(3, l.$km),
									j(4, s.$lq),
									j(5, y.$iP),
									j(6, n.$XO),
									j(7, p.$gj),
									j(8, U.$IY),
									j(9, O.$EY),
									j(10, f.$ll),
									j(11, h.$dtb),
									j(12, p.$gj),
								],
								q,
							));
				let V = class {
					static {
						H = this;
					}
					static {
						this.b = "mergeEditor/layout";
					}
					constructor(W) {
						(this.d = W),
							(this.c = { kind: "mixed", showBase: !1, showBaseAtTop: !0 });
						const X = W.get(H.b, s.StorageScope.PROFILE, "mixed");
						if (X === "mixed" || X === "columns")
							this.c = { kind: X, showBase: !1, showBaseAtTop: !0 };
						else if (X)
							try {
								this.c = JSON.parse(X);
							} catch (Y) {
								(0, C.$4)(Y);
							}
					}
					get value() {
						return this.c;
					}
					set value(W) {
						this.c !== W &&
							((this.c = W),
							this.d.store(
								H.b,
								JSON.stringify(this.c),
								s.StorageScope.PROFILE,
								s.StorageTarget.USER,
							));
					}
				};
				V = H = Ne([j(0, s.$lq)], V);
				let G = class extends m.$1c {
					constructor(W, X) {
						super(),
							(this.b = W),
							this.B.add(X.registerCodeEditorOpenHandler(this.c.bind(this)));
					}
					async c(W, X, Y) {
						const ie = this.b.activeEditorPane;
						if (
							!Y &&
							W.options &&
							ie instanceof q &&
							ie.getControl() &&
							ie.input instanceof T.$Enc &&
							(0, u.$gh)(W.resource, ie.input.result)
						) {
							const ne = ie.getControl();
							return (
								(0, S.applyTextEditorOptions)(
									W.options,
									ne,
									c.ScrollType.Smooth,
								),
								ne
							);
						}
						return null;
					}
				};
				(e.$URc = G), (e.$URc = G = Ne([j(0, U.$IY), j(1, h.$dtb)], G));
				let K = class extends m.$1c {
					static {
						this.ID = "workbench.contrib.mergeEditorResolver";
					}
					constructor(W, X) {
						super();
						const Y = (ie) => ({
							editor: X.createInstance(
								T.$Enc,
								ie.base.resource,
								{
									uri: ie.input1.resource,
									title: ie.input1.label ?? (0, u.$kh)(ie.input1.resource),
									description: ie.input1.description ?? "",
									detail: ie.input1.detail,
								},
								{
									uri: ie.input2.resource,
									title: ie.input2.label ?? (0, u.$kh)(ie.input2.resource),
									description: ie.input2.description ?? "",
									detail: ie.input2.detail,
								},
								ie.result.resource,
							),
						});
						this.D(
							W.registerEditor(
								"*",
								{
									id: v.$b1.id,
									label: v.$b1.displayName,
									detail: v.$b1.providerDisplayName,
									priority: B.RegisteredEditorPriority.builtin,
								},
								{},
								{ createMergeEditorInput: Y },
							),
						);
					}
				};
				(e.$VRc = K), (e.$VRc = K = Ne([j(0, B.$E6), j(1, b.$Li)], K));
			},
		),
		