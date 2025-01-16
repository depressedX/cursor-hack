define(de[3862], he([1, 0, 3, 184, 44, 227]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$C2c = void 0);
			let C = class extends t.$1c {
				static {
					this.ID = "workbench.contrib.saveAccessibilitySignal";
				}
				constructor(m, r) {
					super(),
						(this.a = m),
						(this.b = r),
						this.D(
							this.b.onDidSave((u) =>
								this.a.playSignal(i.$Twb.save, {
									userGesture: u.reason === w.SaveReason.EXPLICIT,
								}),
							),
						);
				}
			};
			(e.$C2c = C), (e.$C2c = C = Ne([j(0, i.$Owb), j(1, E.$gY)], C));
		}),
		define(
			de[3863],
			he([
				1, 0, 20, 130, 55, 52, 30, 3545, 3627, 1901, 3862, 3546, 3138, 1278,
				178, 3761, 3544, 3803,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$1Lb)(),
					(0, t.$lK)(n.$HLb, g.$H2c, t.InstantiationType.Delayed),
					(0, t.$lK)(c.$QMb, c.$RMb, t.InstantiationType.Delayed);
				const f = C.$Io.as(w.Extensions.Workbench);
				f.registerWorkbenchContribution(r.$JXc, E.LifecyclePhase.Eventually),
					f.registerWorkbenchContribution(d.$A2c, E.LifecyclePhase.Restored),
					f.registerWorkbenchContribution(p.$I2c, E.LifecyclePhase.Eventually),
					f.registerWorkbenchContribution(p.$J2c, E.LifecyclePhase.Eventually),
					(0, w.$s6)(m.$B2c.ID, m.$B2c, w.WorkbenchPhase.BlockRestore),
					(0, w.$s6)(o.$K2c.ID, o.$K2c, w.WorkbenchPhase.BlockRestore),
					(0, w.$s6)(u.$C2c.ID, u.$C2c, w.WorkbenchPhase.AfterRestored),
					(0, w.$s6)(h.$E2c.ID, h.$E2c, w.WorkbenchPhase.AfterRestored),
					(0, w.$s6)(a.$D2c.ID, a.$D2c, w.WorkbenchPhase.AfterRestored),
					(0, w.$s6)(i.$3Lb.ID, i.$3Lb, w.WorkbenchPhase.AfterRestored);
			},
		),
		define(
			de[3864],
			he([1, 0, 4, 1336, 32, 35, 844, 220, 21, 116, 231, 44, 296]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Mc = void 0);
				let n = class extends i.$puc {
					static {
						c = this;
					}
					static {
						this.ID = d.$RUb;
					}
					constructor(p, o, f, b, s) {
						super(c.ID, p, { openInternal: (l, y) => this.gb(l, y) }, o, f, s),
							(this.fb = b);
					}
					async gb(p, o) {
						if (p instanceof C.$nec && this.group.activeEditor) {
							const f = this.group.activeEditor,
								b = f?.toUntyped();
							if (!b) return;
							let s = await this.fb.resolveEditor(
								{ ...b, options: { ...o, override: r.EditorResolution.PICK } },
								this.group,
							);
							if (s === u.ResolvedStatus.NONE) s = void 0;
							else if (s === u.ResolvedStatus.ABORT) return;
							if ((0, a.$v1)(s))
								for (const l of s.editor instanceof h.$GVb
									? [s.editor.original, s.editor.modified]
									: [s.editor])
									l instanceof C.$nec &&
										(l.setForceOpenAsText(), l.setPreferredLanguageId(d.$SUb));
							await this.group.replaceEditors([
								{
									editor: f,
									replacement: s?.editor ?? p,
									options: { ...(s?.options ?? o) },
								},
							]);
						}
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(6654, null);
					}
				};
				(e.$2Mc = n),
					(e.$2Mc =
						n =
						c =
							Ne([j(1, w.$km), j(2, E.$iP), j(3, u.$E6), j(4, m.$lq)], n));
			},
		),
		define(
			de[3865],
			he([
				1, 0, 4, 240, 28, 165, 50, 220, 85, 1337, 44, 549, 1225, 844, 22, 32,
				25, 21, 125, 5, 35, 98, 18, 66, 116, 68, 382, 142, 60, 10, 131, 87, 170,
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
			) {
				"use strict";
				var N;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oec = void 0);
				let A = class extends r.$lec {
					static {
						N = this;
					}
					static {
						this.ID = d.$PUb;
					}
					constructor(
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
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
					) {
						super(N.ID, O, B, F, H, q, G, V, K, U),
							(this.f = z),
							(this.$ = x),
							(this.Xb = J),
							(this.Yb = W),
							(this.Zb = X),
							(this.$b = Y),
							(this.ac = ie),
							(this.bc = ne),
							(this.cc = ee),
							(this.dc = _),
							this.D(this.xb.onDidFilesChange((te) => this.ec(te))),
							this.D(this.xb.onDidRunOperation((te) => this.fc(te)));
					}
					ec(O) {
						for (const B of O.rawDeleted) this.lb(B);
					}
					fc(O) {
						O.operation === n.FileOperation.MOVE &&
							O.target &&
							this.kb(O.resource, O.target.resource, this.Zb.extUri);
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(6655, null);
					}
					get input() {
						return this.W;
					}
					async setInput(O, B, U, z) {
						(0, i.mark)("code/willSetInputToTextFileEditor"),
							await super.setInput(O, B, U, z);
						try {
							const F = await O.resolve(B);
							if (z.isCancellationRequested) return;
							if (F instanceof h.$mec) return this.hc(O, B);
							const x = F,
								H = (0, w.$wg)(this.a);
							if ((H.setModel(x.textEditorModel), !(0, u.$C1)(B?.viewState))) {
								const q = this.jb(O, U);
								q &&
									(B?.selection && (q.cursorState = []), H.restoreViewState(q));
							}
							B && (0, a.applyTextEditorOptions)(B, H, l.ScrollType.Immediate),
								H.updateOptions(this.Gb(x.isReadonly())),
								H.handleInitialized && H.handleInitialized();
						} catch (F) {
							await this.gc(F, O, B);
						}
						(0, i.mark)("code/didSetInputToTextFileEditor");
					}
					async gc(O, B, U) {
						if (
							O.textFileOperationResult ===
							m.TextFileOperationResult.FILE_IS_BINARY
						)
							return this.hc(B, U);
						if (
							O.fileOperationResult === n.FileOperationResult.FILE_IS_DIRECTORY
						) {
							const z = [];
							throw (
								(z.push(
									(0, C.$wj)({
										id: "workbench.files.action.openFolder",
										label: (0, t.localize)(6656, null),
										run: async () =>
											this.cc.openWindow([{ folderUri: B.resource }], {
												forceNewWindow: !0,
											}),
									}),
								),
								this.$.isInsideWorkspace(B.preferredResource) &&
									z.push(
										(0, C.$wj)({
											id: "workbench.files.action.reveal",
											label: (0, t.localize)(6657, null),
											run: async () => (
												await this.f.openPaneComposite(
													d.$vUb,
													P.ViewContainerLocation.Sidebar,
													!0,
												),
												this.Yb.select(B.preferredResource, !0)
											),
										}),
									),
								(0, u.$E1)((0, t.localize)(6658, null), z, {
									forceMessage: !0,
								}))
							);
						}
						if (
							O.fileOperationResult === n.FileOperationResult.FILE_TOO_LARGE
						) {
							let z;
							throw (
								(O instanceof n.$Hl
									? (z = (0, t.localize)(6659, null, n.$Tl.formatSize(O.size)))
									: (z = (0, t.localize)(6660, null)),
								(0, u.$u1)(this.group, B, U, z, this.bc))
							);
						}
						throw O.fileOperationResult ===
							n.FileOperationResult.FILE_NOT_FOUND &&
							!this.dc.isReadonly(B.preferredResource) &&
							(await this.$b.hasValidBasename(B.preferredResource))
							? (0, u.$E1)(
									new n.$Gl(
										(0, t.localize)(6661, null),
										n.FileOperationResult.FILE_NOT_FOUND,
									),
									[
										(0, C.$wj)({
											id: "workbench.files.action.createMissingFile",
											label: (0, t.localize)(6662, null),
											run: async () => (
												await this.Xb.create([
													{ resource: B.preferredResource },
												]),
												this.u.openEditor({
													resource: B.preferredResource,
													options: { pinned: !0 },
												})
											),
										}),
									],
									{ allowDialog: !0 },
								)
							: O;
					}
					hc(O, B) {
						const U = this.ac.getValue("workbench.editor.defaultBinaryEditor"),
							z = { ...B, activation: v.EditorActivation.PRESERVE };
						U && U !== "" && U !== u.$b1.id
							? this.ic(this.group, U, O, z)
							: this.jc(this.group, U, O, z);
					}
					ic(O, B, U, z) {
						this.u.replaceEditors(
							[
								{
									editor: U,
									replacement: {
										resource: U.resource,
										options: { ...z, override: B },
									},
								},
							],
							O,
						);
					}
					jc(O, B, U, z) {
						B === u.$b1.id
							? (U.setForceOpenAsText(),
								U.setPreferredLanguageId(d.$SUb),
								(z = { ...z, forceReload: !0 }))
							: U.setForceOpenAsBinary(),
							O.openEditor(U, z);
					}
					clearInput() {
						super.clearInput(), this.a?.setModel(null);
					}
					Lb(O, B) {
						(0, i.mark)("code/willCreateTextFileEditorControl"),
							super.Lb(O, B),
							(0, i.mark)("code/didCreateTextFileEditorControl");
					}
					nb(O) {
						return O instanceof c.$nec;
					}
					ob() {
						return !0;
					}
				};
				(e.$oec = A),
					(e.$oec =
						A =
						N =
							Ne(
								[
									j(1, g.$km),
									j(2, n.$ll),
									j(3, T.$6Sb),
									j(4, b.$Li),
									j(5, p.$Vi),
									j(6, o.$lq),
									j(7, f.$XO),
									j(8, y.$IY),
									j(9, s.$iP),
									j(10, $.$EY),
									j(11, m.$kZ),
									j(12, I.$LWb),
									j(13, S.$Vl),
									j(14, E.$I8),
									j(15, k.$gj),
									j(16, L.$7Z),
									j(17, D.$asb),
									j(18, M.$_Y),
								],
								A,
							));
			},
		),
		define(
			de[3866],
			he([1, 0, 4, 220, 3, 260, 227, 334, 170]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Mc = void 0),
					(t = mt(t));
				let r = class extends w.$1c {
					static {
						this.ID = "workbench.contrib.dirtyFilesIndicator";
					}
					constructor(a, h, c) {
						super(),
							(this.c = a),
							(this.f = h),
							(this.g = c),
							(this.a = this.D(new w.$2c())),
							(this.b = 0),
							this.m(),
							this.h();
					}
					h() {
						this.D(this.f.onDidChangeDirty((a) => this.j(a)));
					}
					j(a) {
						const h = a.isDirty();
						(h &&
							!(a.capabilities & d.WorkingCopyCapabilities.Untitled) &&
							this.g.hasShortAutoSaveDelay(a.resource)) ||
							((h || this.b > 0) && this.m());
					}
					m() {
						const a = (this.b = this.f.dirtyCount);
						a > 0
							? (this.a.value = this.c.showViewContainerActivity(i.$vUb, {
									badge: new E.$8qc(a, (h) =>
										h === 1
											? t.localize(7019, null)
											: t.localize(7020, null, a),
									),
								}))
							: this.a.clear();
					}
				};
				(e.$6Mc = r),
					(e.$6Mc = r = Ne([j(0, E.$7qc), j(1, C.$gY), j(2, m.$_Y)], r));
			},
		),
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
		define(
			de[3867],
			he([1, 0, 14, 19, 9, 4, 11, 8, 57, 41, 21, 711, 1050, 687, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dSc =
						e.$cSc =
						e.$bSc =
						e.$aSc =
						e.$_Rc =
						e.$$Rc =
						e.$0Rc =
						e.$9Rc =
						e.$8Rc =
						e.$7Rc =
						e.$6Rc =
						e.$5Rc =
						e.$4Rc =
						e.$3Rc =
						e.$2Rc =
						e.$1Rc =
						e.$ZRc =
						e.$YRc =
						e.$XRc =
						e.$WRc =
							void 0);
				class g extends C.$3X {
					constructor(x) {
						super(x);
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						if (H instanceof h.$TRc) {
							const q = H.viewModel.get();
							if (!q) return;
							this.runWithViewModel(q, x);
						}
					}
				}
				class p extends C.$3X {
					constructor(x) {
						super(x);
					}
					run(x, ...H) {
						const { activeEditorPane: q } = x.get(n.$IY);
						if (q instanceof h.$TRc) {
							const V = q.viewModel.get();
							return V
								? this.runWithMergeEditor(
										{
											viewModel: V,
											inputModel: q.inputModel.get(),
											input: q.input,
											editorIdentifier: {
												editor: q.input,
												groupId: q.group.id,
											},
										},
										x,
										...H,
									)
								: void 0;
						}
					}
				}
				class o extends C.$3X {
					constructor() {
						super({
							id: "_open.mergeEditor",
							title: (0, E.localize2)(7554, "Open Merge Editor"),
						});
					}
					run(x, ...H) {
						const q = f.validate(H[0]),
							V = {
								base: { resource: q.base },
								input1: {
									resource: q.input1.uri,
									label: q.input1.title,
									description: q.input1.description,
									detail: q.input1.detail,
								},
								input2: {
									resource: q.input2.uri,
									label: q.input2.title,
									description: q.input2.description,
									detail: q.input2.detail,
								},
								result: { resource: q.output },
								options: { preserveFocus: !0 },
							};
						x.get(n.$IY).openEditor(V);
					}
				}
				e.$WRc = o;
				var f;
				(function (F) {
					function x(G) {
						if (!G || typeof G != "object")
							throw new TypeError("invalid argument");
						const K = G,
							J = q(K.base),
							W = q(K.output),
							X = H(K.input1),
							Y = H(K.input2);
						return { base: J, input1: X, input2: Y, output: W };
					}
					F.validate = x;
					function H(G) {
						if (typeof G == "string")
							return new a.$Dnc(w.URI.parse(G, !0), void 0, void 0, void 0);
						if (!G || typeof G != "object")
							throw new TypeError("invalid argument");
						if (V(G))
							return new a.$Dnc(w.URI.revive(G), void 0, void 0, void 0);
						const K = G,
							J = K.title,
							W = q(K.uri),
							X = K.detail,
							Y = K.description;
						return new a.$Dnc(W, J, X, Y);
					}
					function q(G) {
						if (typeof G == "string") return w.URI.parse(G, !0);
						if (G && typeof G == "object") return w.URI.revive(G);
						throw new TypeError("invalid argument");
					}
					function V(G) {
						if (!G || typeof G != "object") return !1;
						const K = G;
						return (
							typeof K.scheme == "string" &&
							typeof K.authority == "string" &&
							typeof K.path == "string" &&
							typeof K.query == "string" &&
							typeof K.fragment == "string"
						);
					}
				})(f || (f = {}));
				class b extends C.$3X {
					constructor() {
						super({
							id: "merge.mixedLayout",
							title: (0, E.localize2)(7555, "Mixed Layout"),
							toggled: c.$a1b.isEqualTo("mixed"),
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: c.$$Zb,
									group: "1_merge",
									order: 9,
								},
							],
							precondition: c.$$Zb,
						});
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						H instanceof h.$TRc && H.setLayoutKind("mixed");
					}
				}
				e.$XRc = b;
				class s extends C.$3X {
					constructor() {
						super({
							id: "merge.columnLayout",
							title: (0, E.localize2)(7556, "Column Layout"),
							toggled: c.$a1b.isEqualTo("columns"),
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: c.$$Zb,
									group: "1_merge",
									order: 10,
								},
							],
							precondition: c.$$Zb,
						});
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						H instanceof h.$TRc && H.setLayoutKind("columns");
					}
				}
				e.$YRc = s;
				class l extends C.$3X {
					constructor() {
						super({
							id: "merge.showNonConflictingChanges",
							title: (0, E.localize2)(7557, "Show Non-Conflicting Changes"),
							toggled: c.$d1b.isEqualTo(!0),
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: c.$$Zb,
									group: "3_merge",
									order: 9,
								},
							],
							precondition: c.$$Zb,
						});
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						H instanceof h.$TRc && H.toggleShowNonConflictingChanges();
					}
				}
				e.$ZRc = l;
				class y extends C.$3X {
					constructor() {
						super({
							id: "merge.showBase",
							title: (0, E.localize2)(7558, "Show Base"),
							toggled: c.$b1b.isEqualTo(!0),
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: d.$Kj.and(c.$$Zb, c.$a1b.isEqualTo("columns")),
									group: "2_merge",
									order: 9,
								},
							],
						});
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						H instanceof h.$TRc && H.toggleBase();
					}
				}
				e.$1Rc = y;
				class $ extends C.$3X {
					constructor() {
						super({
							id: "merge.showBaseTop",
							title: (0, E.localize2)(7559, "Show Base Top"),
							toggled: d.$Kj.and(c.$b1b, c.$c1b),
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: d.$Kj.and(c.$$Zb, c.$a1b.isEqualTo("mixed")),
									group: "2_merge",
									order: 10,
								},
							],
						});
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						H instanceof h.$TRc && H.toggleShowBaseTop();
					}
				}
				e.$2Rc = $;
				class v extends C.$3X {
					constructor() {
						super({
							id: "merge.showBaseCenter",
							title: (0, E.localize2)(7560, "Show Base Center"),
							toggled: d.$Kj.and(c.$b1b, c.$c1b.negate()),
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: d.$Kj.and(c.$$Zb, c.$a1b.isEqualTo("mixed")),
									group: "2_merge",
									order: 11,
								},
							],
						});
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						H instanceof h.$TRc && H.toggleShowBaseCenter();
					}
				}
				e.$3Rc = v;
				const S = (0, E.localize2)(7561, "Merge Editor");
				class I extends g {
					constructor() {
						super({
							id: "merge.openResult",
							icon: t.$ak.goToFile,
							title: (0, E.localize2)(7562, "Open File"),
							category: S,
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: c.$$Zb,
									group: "navigation",
									order: 1,
								},
							],
							precondition: c.$$Zb,
						});
					}
					runWithViewModel(x, H) {
						H.get(n.$IY).openEditor({ resource: x.model.resultTextModel.uri });
					}
				}
				e.$4Rc = I;
				class T extends g {
					constructor() {
						super({
							id: "merge.goToNextUnhandledConflict",
							category: S,
							title: (0, E.localize2)(7563, "Go to Next Unhandled Conflict"),
							icon: t.$ak.arrowDown,
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: c.$$Zb,
									group: "navigation",
									order: 3,
								},
							],
							f1: !0,
							precondition: c.$$Zb,
						});
					}
					runWithViewModel(x) {
						x.model.telemetry.reportNavigationToNextConflict(),
							x.goToNextModifiedBaseRange((H) => !x.model.isHandled(H).get());
					}
				}
				e.$5Rc = T;
				class P extends g {
					constructor() {
						super({
							id: "merge.goToPreviousUnhandledConflict",
							category: S,
							title: (0, E.localize2)(
								7564,
								"Go to Previous Unhandled Conflict",
							),
							icon: t.$ak.arrowUp,
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: c.$$Zb,
									group: "navigation",
									order: 2,
								},
							],
							f1: !0,
							precondition: c.$$Zb,
						});
					}
					runWithViewModel(x) {
						x.model.telemetry.reportNavigationToPreviousConflict(),
							x.goToPreviousModifiedBaseRange(
								(H) => !x.model.isHandled(H).get(),
							);
					}
				}
				e.$6Rc = P;
				class k extends g {
					constructor() {
						super({
							id: "merge.toggleActiveConflictInput1",
							category: S,
							title: (0, E.localize2)(
								7565,
								"Toggle Current Conflict from Left",
							),
							f1: !0,
							precondition: c.$$Zb,
						});
					}
					runWithViewModel(x) {
						x.toggleActiveConflict(1);
					}
				}
				e.$7Rc = k;
				class L extends g {
					constructor() {
						super({
							id: "merge.toggleActiveConflictInput2",
							category: S,
							title: (0, E.localize2)(
								7566,
								"Toggle Current Conflict from Right",
							),
							f1: !0,
							precondition: c.$$Zb,
						});
					}
					runWithViewModel(x) {
						x.toggleActiveConflict(2);
					}
				}
				e.$8Rc = L;
				class D extends g {
					constructor() {
						super({
							id: "mergeEditor.compareInput1WithBase",
							category: S,
							title: (0, E.localize2)(7567, "Compare Input 1 With Base"),
							shortTitle: (0, E.localize)(7548, null),
							f1: !0,
							precondition: c.$$Zb,
							menu: { id: C.$XX.MergeInput1Toolbar, group: "primary" },
							icon: t.$ak.compareChanges,
						});
					}
					runWithViewModel(x, H) {
						const q = H.get(n.$IY);
						N(x, q, 1);
					}
				}
				e.$9Rc = D;
				class M extends g {
					constructor() {
						super({
							id: "mergeEditor.compareInput2WithBase",
							category: S,
							title: (0, E.localize2)(7568, "Compare Input 2 With Base"),
							shortTitle: (0, E.localize)(7549, null),
							f1: !0,
							precondition: c.$$Zb,
							menu: { id: C.$XX.MergeInput2Toolbar, group: "primary" },
							icon: t.$ak.compareChanges,
						});
					}
					runWithViewModel(x, H) {
						const q = H.get(n.$IY);
						N(x, q, 2);
					}
				}
				e.$0Rc = M;
				async function N(F, x, H) {
					x.openEditor(x.activeEditor, { pinned: !0 });
					const V = F.model.base,
						G =
							H === 1
								? F.inputCodeEditorView1.editor
								: F.inputCodeEditorView2.editor,
						K = G.getPosition().lineNumber;
					await x.openEditor({
						original: { resource: V.uri },
						modified: { resource: G.getModel().uri },
						options: {
							selection: { startLineNumber: K, startColumn: 1 },
							revealIfOpened: !0,
							revealIfVisible: !0,
						},
					});
				}
				class A extends g {
					constructor() {
						super({
							id: "merge.openBaseEditor",
							category: S,
							title: (0, E.localize2)(7569, "Open Base File"),
							f1: !0,
							precondition: c.$$Zb,
						});
					}
					runWithViewModel(x, H) {
						H.get(r.$7rb).open(x.model.base.uri);
					}
				}
				e.$$Rc = A;
				class R extends g {
					constructor() {
						super({
							id: "merge.acceptAllInput1",
							category: S,
							title: (0, E.localize2)(7570, "Accept All Changes from Left"),
							f1: !0,
							precondition: c.$$Zb,
							menu: { id: C.$XX.MergeInput1Toolbar, group: "primary" },
							icon: t.$ak.checkAll,
						});
					}
					runWithViewModel(x) {
						x.acceptAll(1);
					}
				}
				e.$_Rc = R;
				class O extends g {
					constructor() {
						super({
							id: "merge.acceptAllInput2",
							category: S,
							title: (0, E.localize2)(7571, "Accept All Changes from Right"),
							f1: !0,
							precondition: c.$$Zb,
							menu: { id: C.$XX.MergeInput2Toolbar, group: "primary" },
							icon: t.$ak.checkAll,
						});
					}
					runWithViewModel(x) {
						x.acceptAll(2);
					}
				}
				e.$aSc = O;
				class B extends g {
					constructor() {
						super({
							id: "mergeEditor.resetResultToBaseAndAutoMerge",
							category: S,
							title: (0, E.localize2)(7572, "Reset Result"),
							shortTitle: (0, E.localize)(7550, null),
							f1: !0,
							precondition: c.$$Zb,
							menu: { id: C.$XX.MergeInputResultToolbar, group: "primary" },
							icon: t.$ak.discard,
						});
					}
					runWithViewModel(x, H) {
						x.model.reset();
					}
				}
				e.$bSc = B;
				class U extends C.$3X {
					constructor() {
						super({
							id: "mergeEditor.resetCloseWithConflictsChoice",
							category: S,
							title: (0, E.localize2)(
								7573,
								"Reset Choice for 'Close with Conflicts'",
							),
							f1: !0,
						});
					}
					run(x) {
						x.get(u.$lq).remove(c.$g1b, u.StorageScope.PROFILE);
					}
				}
				e.$cSc = U;
				class z extends p {
					constructor() {
						super({
							id: "mergeEditor.acceptMerge",
							category: S,
							title: (0, E.localize2)(7574, "Complete Merge"),
							f1: !1,
							precondition: c.$$Zb,
						});
					}
					async runWithMergeEditor(
						{ inputModel: x, editorIdentifier: H, viewModel: q },
						V,
					) {
						const G = V.get(m.$GO),
							K = V.get(n.$IY);
						if (q.model.unhandledConflictsCount.get() > 0) {
							const { confirmed: J } = await G.confirm({
								message: (0, E.localize)(7551, null, (0, i.$kh)(x.resultUri)),
								detail: (0, E.localize)(7552, null),
								primaryButton: (0, E.localize)(7553, null),
							});
							if (!J) return { successful: !1 };
						}
						return await x.accept(), await K.closeEditor(H), { successful: !0 };
					}
				}
				e.$dSc = z;
			},
		),
		define(
			de[3868],
			he([1, 0, 76, 14, 9, 61, 4, 11, 121, 57, 22, 40, 63, 1050, 687, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gSc = e.$fSc = e.$eSc = void 0);
				const p = (0, C.localize2)(7585, "Merge Editor (Dev)");
				class o extends d.$3X {
					constructor() {
						super({
							id: "merge.dev.copyContentsJson",
							category: p,
							title: (0, C.localize2)(7586, "Copy Merge Editor State as JSON"),
							icon: i.$ak.layoutCentered,
							f1: !0,
							precondition: n.$$Zb,
						});
					}
					run(y) {
						const { activeEditorPane: $ } = y.get(g.$IY),
							v = y.get(m.$Vxb),
							S = y.get(a.$4N);
						if (!($ instanceof c.$TRc)) {
							S.info({
								name: (0, C.localize)(7575, null),
								message: (0, C.localize)(7576, null),
							});
							return;
						}
						const I = $.model;
						if (!I) return;
						const T = {
								languageId: I.resultTextModel.getLanguageId(),
								base: I.base.getValue(),
								input1: I.input1.textModel.getValue(),
								input2: I.input2.textModel.getValue(),
								result: I.resultTextModel.getValue(),
								initialResult: I.getInitialResultValue(),
							},
							P = JSON.stringify(T, void 0, 4);
						v.writeText(P),
							S.info({
								name: (0, C.localize)(7577, null),
								message: (0, C.localize)(7578, null),
							});
					}
				}
				e.$eSc = o;
				class f extends d.$3X {
					constructor() {
						super({
							id: "merge.dev.saveContentsToFolder",
							category: p,
							title: (0, C.localize2)(
								7587,
								"Save Merge Editor State to Folder",
							),
							icon: i.$ak.layoutCentered,
							f1: !0,
							precondition: n.$$Zb,
						});
					}
					async run(y) {
						const { activeEditorPane: $ } = y.get(g.$IY),
							v = y.get(a.$4N),
							S = y.get(r.$IO),
							I = y.get(u.$ll),
							T = y.get(E.$nM);
						if (!($ instanceof c.$TRc)) {
							v.info({
								name: (0, C.localize)(7579, null),
								message: (0, C.localize)(7580, null),
							});
							return;
						}
						const P = $.model;
						if (!P) return;
						const k = await S.showOpenDialog({
							canSelectFiles: !1,
							canSelectFolders: !0,
							canSelectMany: !1,
							title: (0, C.localize)(7581, null),
						});
						if (!k) return;
						const L = k[0],
							D = T.getExtensions(P.resultTextModel.getLanguageId())[0] || "";
						async function M(N, A) {
							await I.writeFile(
								w.URI.joinPath(L, N + D),
								t.$Te.fromString(A),
								{},
							);
						}
						await Promise.all([
							M("base", P.base.getValue()),
							M("input1", P.input1.textModel.getValue()),
							M("input2", P.input2.textModel.getValue()),
							M("result", P.resultTextModel.getValue()),
							M("initialResult", P.getInitialResultValue()),
						]),
							v.info({
								name: (0, C.localize)(7582, null),
								message: (0, C.localize)(7583, null),
							});
					}
				}
				e.$fSc = f;
				class b extends d.$3X {
					constructor() {
						super({
							id: "merge.dev.loadContentsFromFolder",
							category: p,
							title: (0, C.localize2)(
								7588,
								"Load Merge Editor State from Folder",
							),
							icon: i.$ak.layoutCentered,
							f1: !0,
						});
					}
					async run(y, $) {
						const v = y.get(r.$IO),
							S = y.get(g.$IY),
							I = y.get(u.$ll),
							T = y.get(h.$DJ);
						$ || ($ = {});
						let P;
						if ($.folderUri) P = $.folderUri;
						else {
							const B = await v.showOpenDialog({
								canSelectFiles: !1,
								canSelectFolders: !0,
								canSelectMany: !1,
								title: (0, C.localize)(7584, null),
							});
							if (!B) return;
							P = B[0];
						}
						const k = await I.resolve(P);
						function L(B) {
							return k.children.find((U) => U.name.startsWith(B))?.resource;
						}
						const D = await s(T, $.resultState),
							M = L("base"),
							N = L("input1"),
							A = L("input2"),
							R = L(D ? "initialResult" : "result"),
							O = {
								base: { resource: M },
								input1: {
									resource: N,
									label: "Input 1",
									description: "Input 1",
									detail: "(from file)",
								},
								input2: {
									resource: A,
									label: "Input 2",
									description: "Input 2",
									detail: "(from file)",
								},
								result: { resource: R },
							};
						S.openEditor(O);
					}
				}
				e.$gSc = b;
				async function s(l, y) {
					return y
						? y === "initial"
						: (
								await l.pick(
									[
										{ label: "result", result: !1 },
										{ label: "initial result", result: !0 },
									],
									{ canPickMany: !1 },
								)
							)?.result;
				}
			},
		),
		define(
			de[3869],
			he([
				1, 0, 4, 11, 81, 102, 30, 192, 55, 44, 3867, 3868, 711, 1050, 52, 3690,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					C.$Io
						.as(r.$a1.EditorPane)
						.registerEditorPane(
							d.$vVb.create(c.$TRc, c.$TRc.ID, (0, t.localize)(7589, null)),
							[new E.$Ji(h.$Enc)],
						),
					C.$Io
						.as(r.$a1.EditorFactory)
						.registerEditorSerializer(h.$Enc.ID, g.$hSc),
					C.$Io
						.as(w.$No.Configuration)
						.registerConfiguration({
							properties: {
								"mergeEditor.diffAlgorithm": {
									type: "string",
									enum: ["legacy", "advanced"],
									default: "advanced",
									markdownEnumDescriptions: [
										(0, t.localize)(7590, null),
										(0, t.localize)(7591, null),
									],
								},
								"mergeEditor.showDeletionMarkers": {
									type: "boolean",
									default: !0,
									description:
										"Controls if deletions in base or one of the inputs should be indicated by a vertical bar.",
								},
							},
						}),
					(0, i.$4X)(u.$4Rc),
					(0, i.$4X)(u.$XRc),
					(0, i.$4X)(u.$YRc),
					(0, i.$4X)(u.$WRc),
					(0, i.$4X)(u.$$Rc),
					(0, i.$4X)(u.$ZRc),
					(0, i.$4X)(u.$1Rc),
					(0, i.$4X)(u.$2Rc),
					(0, i.$4X)(u.$3Rc),
					(0, i.$4X)(u.$5Rc),
					(0, i.$4X)(u.$6Rc),
					(0, i.$4X)(u.$7Rc),
					(0, i.$4X)(u.$8Rc),
					(0, i.$4X)(u.$9Rc),
					(0, i.$4X)(u.$0Rc),
					(0, i.$4X)(u.$_Rc),
					(0, i.$4X)(u.$aSc),
					(0, i.$4X)(u.$bSc),
					(0, i.$4X)(u.$dSc),
					(0, i.$4X)(u.$cSc),
					(0, i.$4X)(a.$eSc),
					(0, i.$4X)(a.$fSc),
					(0, i.$4X)(a.$gSc),
					C.$Io
						.as(m.Extensions.Workbench)
						.registerWorkbenchContribution(c.$URc, n.LifecyclePhase.Restored),
					(0, m.$s6)(c.$VRc.ID, c.$VRc, m.WorkbenchPhase.BlockStartup);
			},
		),
		define(
			de[3870],
			he([1, 0, 76, 14, 249, 9, 61, 4, 11, 121, 113, 22, 63, 1050, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lgd = e.$Kgd = void 0);
				const g = (0, d.localize2)(7690, "Merge Editor (Dev)");
				class p extends m.$3X {
					constructor() {
						super({
							id: "merge.dev.openContentsJson",
							category: g,
							title: (0, d.localize2)(
								7691,
								"Open Merge Editor State from JSON",
							),
							icon: i.$ak.layoutCentered,
							f1: !0,
						});
					}
					async run(l, y) {
						const $ = l.get(h.$DJ),
							v = l.get(r.$Vxb),
							S = l.get(n.$IY),
							I = l.get(C.$nM),
							T = l.get(u.$Ui),
							P = l.get(a.$ll);
						y || (y = {});
						let k;
						if (y.data) k = y.data;
						else {
							const F = await $.input({
								prompt: (0, d.localize)(7689, null),
								value: await v.readText(),
							});
							if (F === void 0) return;
							k =
								F !== ""
									? JSON.parse(F)
									: {
											base: "",
											input1: "",
											input2: "",
											result: "",
											languageId: "plaintext",
										};
						}
						const L = E.URI.joinPath(T.tmpDir, (0, w.$Ug)()),
							D = I.getExtensions(k.languageId)[0] || "",
							M = E.URI.joinPath(L, `/base${D}`),
							N = E.URI.joinPath(L, `/input1${D}`),
							A = E.URI.joinPath(L, `/input2${D}`),
							R = E.URI.joinPath(L, `/result${D}`),
							O = E.URI.joinPath(L, `/initialResult${D}`);
						async function B(F, x) {
							await P.writeFile(F, t.$Te.fromString(x));
						}
						const U = await o($, y.resultState);
						await Promise.all([
							B(M, k.base),
							B(N, k.input1),
							B(A, k.input2),
							B(R, U ? k.initialResult || "" : k.result),
							B(O, k.initialResult || ""),
						]);
						const z = {
							base: { resource: M },
							input1: {
								resource: N,
								label: "Input 1",
								description: "Input 1",
								detail: "(from JSON)",
							},
							input2: {
								resource: A,
								label: "Input 2",
								description: "Input 2",
								detail: "(from JSON)",
							},
							result: { resource: R },
						};
						S.openEditor(z);
					}
				}
				e.$Kgd = p;
				async function o(s, l) {
					return l
						? l === "initial"
						: (
								await s.pick(
									[
										{ label: "result", result: !1 },
										{ label: "initial result", result: !0 },
									],
									{ canPickMany: !1 },
								)
							)?.result;
				}
				class f extends m.$3X {
					constructor(l) {
						super(l);
					}
					run(l) {
						const { activeEditorPane: y } = l.get(n.$IY);
						if (y instanceof c.$TRc) {
							const $ = y.viewModel.get();
							if (!$) return;
							this.runWithViewModel($, l);
						}
					}
				}
				class b extends f {
					constructor() {
						super({
							id: "merge.dev.openSelectionInTemporaryMergeEditor",
							category: g,
							title: (0, d.localize2)(
								7692,
								"Open Selection In Temporary Merge Editor",
							),
							icon: i.$ak.layoutCentered,
							f1: !0,
						});
					}
					async runWithViewModel(l, y) {
						const $ = l.selectionInBase.get()?.rangesInBase;
						if (!$ || $.length === 0) return;
						const v = $.map((P) => l.model.base.getValueInRange(P)).join(`
`),
							S = $.map((P) =>
								l.inputCodeEditorView1.editor
									.getModel()
									.getValueInRange(l.model.translateBaseRangeToInput(1, P)),
							).join(`
`),
							I = $.map((P) =>
								l.inputCodeEditorView2.editor
									.getModel()
									.getValueInRange(l.model.translateBaseRangeToInput(2, P)),
							).join(`
`),
							T = $.map((P) =>
								l.resultCodeEditorView.editor
									.getModel()
									.getValueInRange(l.model.translateBaseRangeToResult(P)),
							).join(`
`);
						new p().run(y, {
							data: {
								base: v,
								input1: S,
								input2: I,
								result: T,
								languageId: l.resultCodeEditorView.editor
									.getModel()
									.getLanguageId(),
							},
						});
					}
				}
				e.$Lgd = b;
			},
		),
		