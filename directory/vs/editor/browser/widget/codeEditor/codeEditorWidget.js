define(
			de[206],
			he([
				1, 0, 7, 29, 6, 136, 3, 23, 321, 1607, 653, 46, 65, 2853, 2762, 1534,
				2799, 38, 435, 307, 48, 17, 104, 944, 248, 2556, 98, 71, 152, 64, 946,
				122, 69, 493, 2767, 2904, 751, 4, 91, 31, 8, 5, 128, 40, 51, 35, 11,
				308, 2796, 2279,
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
				J,
			) {
				"use strict";
				var W;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$twb = e.$swb = e.$rwb = void 0),
					(t = mt(t)),
					(I = mt(I)),
					(B = mt(B));
				let X = class extends C.$1c {
					static {
						W = this;
					}
					static {
						this.b = D.$eY.register({
							description: "workbench-dnd-target",
							className: "dnd-target",
						});
					}
					get isChatCodeblock() {
						return this.qb.isChatCodeblock;
					}
					get isHallucinatedFunctionPreviewBox() {
						return this.qb.isHallucinatedFunctionPreviewBox;
					}
					get cursorCodeBlockType() {
						return this.qb.cursorCodeBlockType;
					}
					get isSimpleWidget() {
						return this.qb.isSimpleWidget;
					}
					get contextMenuId() {
						return this.qb.contextMenuId;
					}
					get contextKeyService() {
						return this.vb;
					}
					constructor(ue, fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe, He, Ke) {
						super(),
							(this.Ib = xe),
							(this.Jb = Ke),
							(this.c = (0, w.$se)()),
							(this.f = this.D(new p.$Qvb())),
							(this.g = this.D(new w.$re())),
							(this.onDidDispose = this.g.event),
							(this.h = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModelContent = this.h.event),
							(this.j = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModelLanguage = this.j.event),
							(this.m = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModelLanguageConfiguration = this.m.event),
							(this.n = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModelOptions = this.n.event),
							(this.q = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModelDecorations = this.q.event),
							(this.t = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModelTokens = this.t.event),
							(this.u = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeConfiguration = this.u.event),
							(this.w = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onWillChangeModel = this.w.event),
							(this.y = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModel = this.y.event),
							(this.z = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeCursorPosition = this.z.event),
							(this.C = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeCursorSelection = this.C.event),
							(this.F = this.D(new _(this.f, this.c))),
							(this.onDidAttemptReadOnlyEdit = this.F.event),
							(this.G = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidLayoutChange = this.G.event),
							(this.H = this.D(new ee({ deliveryQueue: this.c }))),
							(this.onDidFocusEditorText = this.H.onDidChangeToTrue),
							(this.onDidBlurEditorText = this.H.onDidChangeToFalse),
							(this.I = this.D(new ee({ deliveryQueue: this.c }))),
							(this.onDidFocusEditorWidget = this.I.onDidChangeToTrue),
							(this.onDidBlurEditorWidget = this.I.onDidChangeToFalse),
							(this.J = this.D(new _(this.f, this.c))),
							(this.onWillType = this.J.event),
							(this.L = this.D(new _(this.f, this.c))),
							(this.onDidType = this.L.event),
							(this.M = this.D(new _(this.f, this.c))),
							(this.onDidCompositionStart = this.M.event),
							(this.N = this.D(new _(this.f, this.c))),
							(this.onDidCompositionEnd = this.N.event),
							(this.O = this.D(new _(this.f, this.c))),
							(this.onDidPaste = this.O.event),
							(this.P = this.D(new _(this.f, this.c))),
							(this.onMouseUp = this.P.event),
							(this.Q = this.D(new _(this.f, this.c))),
							(this.onMouseDown = this.Q.event),
							(this.R = this.D(new _(this.f, this.c))),
							(this.onMouseDrag = this.R.event),
							(this.S = this.D(new _(this.f, this.c))),
							(this.onMouseDrop = this.S.event),
							(this.U = this.D(new _(this.f, this.c))),
							(this.onMouseDropCanceled = this.U.event),
							(this.W = this.D(new _(this.f, this.c))),
							(this.onDropIntoEditor = this.W.event),
							(this.X = this.D(new _(this.f, this.c))),
							(this.onContextMenu = this.X.event),
							(this.Y = this.D(new _(this.f, this.c))),
							(this.onMouseMove = this.Y.event),
							(this.Z = this.D(new _(this.f, this.c))),
							(this.onMouseLeave = this.Z.event),
							(this.ab = this.D(new _(this.f, this.c))),
							(this.onMouseWheel = this.ab.event),
							(this.bb = this.D(new _(this.f, this.c))),
							(this.onKeyUp = this.bb.event),
							(this.db = this.D(new _(this.f, this.c))),
							(this.onKeyDown = this.db.event),
							(this.eb = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidContentSizeChange = this.eb.event),
							(this.fb = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidScrollChange = this.fb.event),
							(this.gb = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeViewZones = this.gb.event),
							(this.hb = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeHiddenAreas = this.hb.event),
							(this.ib = 0),
							(this.jb = this.D(new w.$re())),
							(this.onBeginUpdate = this.jb.event),
							(this.lb = this.D(new w.$re())),
							(this.onEndUpdate = this.lb.event),
							(this.sb = new Map()),
							(this.Gb = null),
							(this.Hb = this.createDecorationsCollection()),
							ge.willCreateCodeEditor(),
							(this.shouldShowHover = !0);
						const Je = { ...fe };
						(this.nb = ue),
							(this.ob = Je.overflowWidgetsDomNode),
							delete Je.overflowWidgetsDomNode,
							(this.pb = ++Y),
							(this.Eb = {}),
							(this.Fb = {}),
							(this.mb = me.telemetryData),
							(this.qb = this.D(
								this.Kb(
									me.isSimpleWidget || !1,
									me.contextMenuId ??
										(me.isSimpleWidget
											? K.$XX.SimpleEditorContext
											: K.$XX.EditorContext),
									Je,
									Oe,
									me.isChatCodeblock ?? !1,
									me.isHallucinatedFunctionPreviewBox ?? !1,
									me.cursorCodeBlockType,
								),
							)),
							this.D(
								this.qb.onDidChange((Ie) => {
									this.u.fire(Ie);
									const Be = this.qb.options;
									if (Ie.hasChanged(o.EditorOption.layoutInfo)) {
										const Se = Be.get(o.EditorOption.layoutInfo);
										this.G.fire(Se);
									}
								}),
							),
							(this.vb = this.D(Ce.createScoped(this.nb))),
							(this.wb = Fe),
							(this.xb = ge),
							(this.yb = be),
							(this.zb = Le),
							this.D(new te(this, this.vb, this.Jb)),
							this.D(new Q(this, this.vb, He)),
							(this.ub = this.D(ve.createChild(new H.$Ki([F.$6j, this.vb])))),
							(this.tb = null),
							(this.Ab = new Z(ue, this.ob)),
							this.D(
								this.Ab.onChange(() => {
									this.I.setValue(this.Ab.hasFocus());
								}),
							),
							(this.Bb = {}),
							(this.Cb = {}),
							(this.Db = {});
						let Te;
						Array.isArray(me.contributions)
							? (Te = me.contributions)
							: (Te = a.EditorExtensionsRegistry.getEditorContributions()),
							this.f.initialize(this, Te, this.ub);
						for (const Ie of a.EditorExtensionsRegistry.getEditorActions()) {
							if (this.sb.has(Ie.id)) {
								(0, i.$4)(
									new Error(
										`Cannot have two actions with the same id ${Ie.id}`,
									),
								);
								continue;
							}
							const Be = new S.$Rvb(
								Ie.id,
								Ie.label,
								Ie.alias,
								Ie.metadata,
								Ie.precondition ?? void 0,
								(Se) =>
									this.ub.invokeFunction((ke) =>
										Promise.resolve(Ie.runEditorCommand(ke, this, Se)),
									),
								this.vb,
							);
							this.sb.set(Be.id, Be);
						}
						const Ee = () =>
							!this.qb.options.get(o.EditorOption.readOnly) &&
							this.qb.options.get(o.EditorOption.dropIntoEditor).enabled;
						this.D(
							new t.$Hhb(this.nb, {
								onDragOver: (Ie) => {
									if (!Ee()) return;
									const Be = this.getTargetAtClientPoint(
										Ie.clientX,
										Ie.clientY,
									);
									Be?.position && this.ic(Be.position);
								},
								onDrop: async (Ie) => {
									if (!Ee() || (this.jc(), !Ie.dataTransfer)) return;
									const Be = this.getTargetAtClientPoint(
										Ie.clientX,
										Ie.clientY,
									);
									Be?.position &&
										this.W.fire({ position: Be.position, event: Ie });
								},
								onDragLeave: () => {
									this.jc();
								},
								onDragEnd: () => {
									this.jc();
								},
							}),
						),
							this.xb.addCodeEditor(this);
					}
					writeScreenReaderContent(ue) {
						this.tb?.view.writeScreenReaderContent(ue);
					}
					Kb(ue, fe, me, ve, ge = !1, be = !1, Ce = void 0) {
						return new r.$ssb(ue, fe, me, this.nb, ve, ge, be, Ce);
					}
					getId() {
						return this.getEditorType() + ":" + this.pb;
					}
					getEditorType() {
						return I.EditorType.ICodeEditor;
					}
					dispose() {
						this.xb.removeCodeEditor(this),
							this.Ab.dispose(),
							this.sb.clear(),
							(this.Bb = {}),
							(this.Cb = {}),
							this.Lb(),
							this.dc(this.ec()),
							this.g.fire(),
							super.dispose();
					}
					invokeWithinContext(ue) {
						return this.ub.invokeFunction(ue);
					}
					updateOptions(ue) {
						this.qb.updateOptions(ue || {});
					}
					getOptions() {
						return this.qb.options;
					}
					getOption(ue) {
						return this.qb.options.get(ue);
					}
					getRawOptions() {
						return this.qb.getRawOptions();
					}
					getOverflowWidgetsDomNode() {
						return this.ob;
					}
					getConfiguredWordAtPosition(ue) {
						return this.tb
							? $.$Ftb.getWordAtPosition(
									this.tb.model,
									this.qb.options.get(o.EditorOption.wordSeparators),
									this.qb.options.get(o.EditorOption.wordSegmenterLocales),
									ue,
								)
							: null;
					}
					getValue(ue = null) {
						if (!this.tb) return "";
						const fe = !!(ue && ue.preserveBOM);
						let me = k.EndOfLinePreference.TextDefined;
						return (
							ue &&
							ue.lineEnding &&
							ue.lineEnding ===
								`
`
								? (me = k.EndOfLinePreference.LF)
								: ue &&
									ue.lineEnding &&
									ue.lineEnding ===
										`\r
` &&
									(me = k.EndOfLinePreference.CRLF),
							this.tb.model.getValue(me, fe)
						);
					}
					setValue(ue) {
						try {
							if ((this.kc(), !this.tb)) return;
							this.tb.model.setValue(ue);
						} finally {
							this.lc();
						}
					}
					getModel() {
						return this.tb ? this.tb.model : null;
					}
					setModel(ue = null) {
						try {
							this.kc();
							const fe = ue;
							if (
								(this.tb === null && fe === null) ||
								(this.tb && this.tb.model === fe)
							)
								return;
							const me = {
								oldModelUrl: this.tb?.model.uri || null,
								newModelUrl: fe?.uri || null,
							};
							this.w.fire(me);
							const ve = this.hasTextFocus(),
								ge = this.ec();
							this.bc(fe),
								ve && this.hasModel() && this.focus(),
								this.Lb(),
								this.y.fire(me),
								this.dc(ge),
								(this.rb = this.f.onAfterModelAttached());
						} finally {
							this.lc();
						}
					}
					Lb() {
						if (((this.Eb = {}), this.Fb)) {
							for (const ue in this.Fb) {
								const fe = this.Fb[ue];
								for (const me in fe) this.gc(ue + "-" + me);
							}
							this.Fb = {};
						}
					}
					getVisibleRanges() {
						return this.tb ? this.tb.viewModel.getVisibleRanges() : [];
					}
					getVisibleRangesPlusViewportAboveBelow() {
						return this.tb
							? this.tb.viewModel.getVisibleRangesPlusViewportAboveBelow()
							: [];
					}
					getWhitespaces() {
						return this.tb ? this.tb.viewModel.viewLayout.getWhitespaces() : [];
					}
					static Mb(ue, fe, me, ve) {
						const ge = ue.model.validatePosition({
								lineNumber: fe,
								column: me,
							}),
							be =
								ue.viewModel.coordinatesConverter.convertModelPositionToViewPosition(
									ge,
								);
						return ue.viewModel.viewLayout.getVerticalOffsetAfterLineNumber(
							be.lineNumber,
							ve,
						);
					}
					getTopForLineNumber(ue, fe = !1) {
						return this.tb ? W.Nb(this.tb, ue, 1, fe) : -1;
					}
					getTopForPosition(ue, fe) {
						return this.tb ? W.Nb(this.tb, ue, fe, !1) : -1;
					}
					static Nb(ue, fe, me, ve = !1) {
						const ge = ue.model.validatePosition({
								lineNumber: fe,
								column: me,
							}),
							be =
								ue.viewModel.coordinatesConverter.convertModelPositionToViewPosition(
									ge,
								);
						return ue.viewModel.viewLayout.getVerticalOffsetForLineNumber(
							be.lineNumber,
							ve,
						);
					}
					getBottomForLineNumber(ue, fe = !1) {
						if (!this.tb) return -1;
						const me = this.tb.model.getLineMaxColumn(ue);
						return W.Mb(this.tb, ue, me, fe);
					}
					setHiddenAreas(ue, fe) {
						this.tb?.viewModel.setHiddenAreas(
							ue.map((me) => l.$iL.lift(me)),
							fe,
						);
					}
					getVisibleColumnFromPosition(ue) {
						if (!this.tb) return ue.column;
						const fe = this.tb.model.validatePosition(ue),
							me = this.tb.model.getOptions().tabSize;
						return (
							f.$BM.visibleColumnFromColumn(
								this.tb.model.getLineContent(fe.lineNumber),
								fe.column,
								me,
							) + 1
						);
					}
					getStatusbarColumn(ue) {
						if (!this.tb) return ue.column;
						const fe = this.tb.model.validatePosition(ue),
							me = this.tb.model.getOptions().tabSize;
						return f.$BM.toStatusbarColumn(
							this.tb.model.getLineContent(fe.lineNumber),
							fe.column,
							me,
						);
					}
					getPosition() {
						return this.tb ? this.tb.viewModel.getPosition() : null;
					}
					setPosition(ue, fe = "api") {
						if (this.tb) {
							if (!s.$hL.isIPosition(ue)) throw new Error("Invalid arguments");
							this.tb.viewModel.setSelections(fe, [
								{
									selectionStartLineNumber: ue.lineNumber,
									selectionStartColumn: ue.column,
									positionLineNumber: ue.lineNumber,
									positionColumn: ue.column,
								},
							]);
						}
					}
					Ob(ue, fe, me, ve) {
						if (!this.tb) return;
						if (!l.$iL.isIRange(ue)) throw new Error("Invalid arguments");
						const ge = this.tb.model.validateRange(ue),
							be =
								this.tb.viewModel.coordinatesConverter.convertModelRangeToViewRange(
									ge,
								);
						this.tb.viewModel.revealRange("api", me, be, fe, ve);
					}
					revealLine(ue, fe = I.ScrollType.Smooth) {
						this.Pb(ue, N.VerticalRevealType.Simple, fe);
					}
					revealLineInCenter(ue, fe = I.ScrollType.Smooth) {
						this.Pb(ue, N.VerticalRevealType.Center, fe);
					}
					revealLineInCenterIfOutsideViewport(ue, fe = I.ScrollType.Smooth) {
						this.Pb(ue, N.VerticalRevealType.CenterIfOutsideViewport, fe);
					}
					revealLineNearTop(ue, fe = I.ScrollType.Smooth) {
						this.Pb(ue, N.VerticalRevealType.NearTop, fe);
					}
					Pb(ue, fe, me) {
						if (typeof ue != "number") throw new Error("Invalid arguments");
						this.Ob(new l.$iL(ue, 1, ue, 1), fe, !1, me);
					}
					revealPosition(ue, fe = I.ScrollType.Smooth) {
						this.Qb(ue, N.VerticalRevealType.Simple, !0, fe);
					}
					revealPositionInCenter(ue, fe = I.ScrollType.Smooth) {
						this.Qb(ue, N.VerticalRevealType.Center, !0, fe);
					}
					revealPositionInCenterIfOutsideViewport(
						ue,
						fe = I.ScrollType.Smooth,
					) {
						this.Qb(ue, N.VerticalRevealType.CenterIfOutsideViewport, !0, fe);
					}
					revealPositionNearTop(ue, fe = I.ScrollType.Smooth) {
						this.Qb(ue, N.VerticalRevealType.NearTop, !0, fe);
					}
					Qb(ue, fe, me, ve) {
						if (!s.$hL.isIPosition(ue)) throw new Error("Invalid arguments");
						this.Ob(
							new l.$iL(ue.lineNumber, ue.column, ue.lineNumber, ue.column),
							fe,
							me,
							ve,
						);
					}
					getSelection() {
						return this.tb ? this.tb.viewModel.getSelection() : null;
					}
					getSelections() {
						return this.tb ? this.tb.viewModel.getSelections() : null;
					}
					setSelection(ue, fe = "api") {
						const me = y.$kL.isISelection(ue),
							ve = l.$iL.isIRange(ue);
						if (!me && !ve) throw new Error("Invalid arguments");
						if (me) this.Rb(ue, fe);
						else if (ve) {
							const ge = {
								selectionStartLineNumber: ue.startLineNumber,
								selectionStartColumn: ue.startColumn,
								positionLineNumber: ue.endLineNumber,
								positionColumn: ue.endColumn,
							};
							this.Rb(ge, fe);
						}
					}
					Rb(ue, fe) {
						if (!this.tb) return;
						const me = new y.$kL(
							ue.selectionStartLineNumber,
							ue.selectionStartColumn,
							ue.positionLineNumber,
							ue.positionColumn,
						);
						this.tb.viewModel.setSelections(fe, [me]);
					}
					revealLines(ue, fe, me = I.ScrollType.Smooth) {
						this.Sb(ue, fe, N.VerticalRevealType.Simple, me);
					}
					revealLinesInCenter(ue, fe, me = I.ScrollType.Smooth) {
						this.Sb(ue, fe, N.VerticalRevealType.Center, me);
					}
					revealLinesInCenterIfOutsideViewport(
						ue,
						fe,
						me = I.ScrollType.Smooth,
					) {
						this.Sb(ue, fe, N.VerticalRevealType.CenterIfOutsideViewport, me);
					}
					revealLinesNearTop(ue, fe, me = I.ScrollType.Smooth) {
						this.Sb(ue, fe, N.VerticalRevealType.NearTop, me);
					}
					Sb(ue, fe, me, ve) {
						if (typeof ue != "number" || typeof fe != "number")
							throw new Error("Invalid arguments");
						this.Ob(new l.$iL(ue, 1, fe, 1), me, !1, ve);
					}
					revealRange(ue, fe = I.ScrollType.Smooth, me = !1, ve = !0) {
						this.Tb(
							ue,
							me ? N.VerticalRevealType.Center : N.VerticalRevealType.Simple,
							ve,
							fe,
						);
					}
					revealRangeInCenter(ue, fe = I.ScrollType.Smooth) {
						this.Tb(ue, N.VerticalRevealType.Center, !0, fe);
					}
					revealRangeInCenterIfOutsideViewport(ue, fe = I.ScrollType.Smooth) {
						this.Tb(ue, N.VerticalRevealType.CenterIfOutsideViewport, !0, fe);
					}
					revealRangeNearTop(ue, fe = I.ScrollType.Smooth) {
						this.Tb(ue, N.VerticalRevealType.NearTop, !0, fe);
					}
					revealRangeNearTopIfOutsideViewport(ue, fe = I.ScrollType.Smooth) {
						this.Tb(ue, N.VerticalRevealType.NearTopIfOutsideViewport, !0, fe);
					}
					revealRangeAtTop(ue, fe = I.ScrollType.Smooth) {
						this.Tb(ue, N.VerticalRevealType.Top, !0, fe);
					}
					Tb(ue, fe, me, ve) {
						if (!l.$iL.isIRange(ue)) throw new Error("Invalid arguments");
						this.Ob(l.$iL.lift(ue), fe, me, ve);
					}
					setSelections(ue, fe = "api", me = v.CursorChangeReason.NotSet) {
						if (this.tb) {
							if (!ue || ue.length === 0) throw new Error("Invalid arguments");
							for (let ve = 0, ge = ue.length; ve < ge; ve++)
								if (!y.$kL.isISelection(ue[ve]))
									throw new Error("Invalid arguments");
							this.tb.viewModel.setSelections(fe, ue, me);
						}
					}
					getContentWidth() {
						return this.tb
							? this.tb.viewModel.viewLayout.getContentWidth()
							: -1;
					}
					getScrollWidth() {
						return this.tb ? this.tb.viewModel.viewLayout.getScrollWidth() : -1;
					}
					getScrollLeft() {
						return this.tb
							? this.tb.viewModel.viewLayout.getCurrentScrollLeft()
							: -1;
					}
					getContentHeight() {
						return this.tb
							? this.tb.viewModel.viewLayout.getContentHeight()
							: -1;
					}
					getScrollHeight() {
						return this.tb
							? this.tb.viewModel.viewLayout.getScrollHeight()
							: -1;
					}
					getScrollTop() {
						return this.tb
							? this.tb.viewModel.viewLayout.getCurrentScrollTop()
							: -1;
					}
					setScrollLeft(ue, fe = I.ScrollType.Immediate) {
						if (this.tb) {
							if (typeof ue != "number") throw new Error("Invalid arguments");
							this.tb.viewModel.viewLayout.setScrollPosition(
								{ scrollLeft: ue },
								fe,
							);
						}
					}
					setScrollTop(ue, fe = I.ScrollType.Immediate) {
						if (this.tb) {
							if (typeof ue != "number") throw new Error("Invalid arguments");
							this.tb.viewModel.viewLayout.setScrollPosition(
								{ scrollTop: ue },
								fe,
							);
						}
					}
					setScrollPosition(ue, fe = I.ScrollType.Immediate) {
						this.tb && this.tb.viewModel.viewLayout.setScrollPosition(ue, fe);
					}
					hasPendingScrollAnimation() {
						return this.tb
							? this.tb.viewModel.viewLayout.hasPendingScrollAnimation()
							: !1;
					}
					saveViewState() {
						if (!this.tb) return null;
						const ue = this.f.saveViewState(),
							fe = this.tb.viewModel.saveCursorState(),
							me = this.tb.viewModel.saveState();
						return { cursorState: fe, viewState: me, contributionsState: ue };
					}
					restoreViewState(ue) {
						if (!this.tb || !this.tb.hasRealView) return;
						const fe = ue;
						if (fe && fe.cursorState && fe.viewState) {
							const me = fe.cursorState;
							Array.isArray(me)
								? me.length > 0 && this.tb.viewModel.restoreCursorState(me)
								: this.tb.viewModel.restoreCursorState([me]),
								this.f.restoreViewState(fe.contributionsState || {});
							const ve = this.tb.viewModel.reduceRestoreState(fe.viewState);
							this.tb.view.restoreState(ve);
						}
					}
					handleInitialized() {
						this._getViewModel()?.visibleLinesStabilized();
					}
					onVisible() {
						this.tb?.view.refreshFocusState();
					}
					onHide() {
						this.tb?.view.refreshFocusState(), this.Ab.refreshState();
					}
					getContribution(ue) {
						return this.f.get(ue);
					}
					getActions() {
						return Array.from(this.sb.values());
					}
					getSupportedActions() {
						let ue = this.getActions();
						return (ue = ue.filter((fe) => fe.isSupported())), ue;
					}
					getAction(ue) {
						return this.sb.get(ue) || null;
					}
					trigger(ue, fe, me) {
						me = me || {};
						try {
							switch ((this.kc(), fe)) {
								case I.Handler.CompositionStart:
									this.Vb();
									return;
								case I.Handler.CompositionEnd:
									this.Wb(ue);
									return;
								case I.Handler.Type: {
									const ge = me;
									this.Xb(ue, ge.text || "");
									return;
								}
								case I.Handler.ReplacePreviousChar: {
									const ge = me;
									this.Yb(ue, ge.text || "", ge.replaceCharCnt || 0, 0, 0);
									return;
								}
								case I.Handler.CompositionType: {
									const ge = me;
									this.Yb(
										ue,
										ge.text || "",
										ge.replacePrevCharCnt || 0,
										ge.replaceNextCharCnt || 0,
										ge.positionDelta || 0,
									);
									return;
								}
								case I.Handler.Paste: {
									const ge = me;
									this.Zb(
										ue,
										ge.text || "",
										ge.pasteOnNewLine || !1,
										ge.multicursorText || null,
										ge.mode || null,
										ge.clipboardEvent,
									);
									return;
								}
								case I.Handler.Cut:
									this.$b(ue);
									return;
							}
							const ve = this.getAction(fe);
							if (ve) {
								Promise.resolve(ve.run(me)).then(void 0, i.$4);
								return;
							}
							if (!this.tb || this.ac(ue, fe, me)) return;
							this.Ub(fe, me);
						} finally {
							this.lc();
						}
					}
					Ub(ue, fe) {
						this.yb.executeCommand(ue, fe);
					}
					Vb() {
						this.tb && (this.tb.viewModel.startComposition(), this.M.fire());
					}
					Wb(ue) {
						this.tb && (this.tb.viewModel.endComposition(ue), this.N.fire());
					}
					Xb(ue, fe) {
						!this.tb ||
							fe.length === 0 ||
							(ue === "keyboard" && this.J.fire(fe),
							this.tb.viewModel.type(fe, ue),
							ue === "keyboard" && this.L.fire(fe));
					}
					Yb(ue, fe, me, ve, ge) {
						this.tb && this.tb.viewModel.compositionType(fe, me, ve, ge, ue);
					}
					Zb(ue, fe, me, ve, ge, be) {
						if (!this.tb) return;
						const Ce = this.tb.viewModel,
							Le = Ce.getSelection().getStartPosition();
						Ce.paste(fe, me, ve, ue);
						const Fe = Ce.getSelection().getStartPosition();
						ue === "keyboard" &&
							this.O.fire({
								clipboardEvent: be,
								range: new l.$iL(
									Le.lineNumber,
									Le.column,
									Fe.lineNumber,
									Fe.column,
								),
								languageId: ge,
							});
					}
					$b(ue) {
						this.tb && this.tb.viewModel.cut(ue);
					}
					ac(ue, fe, me) {
						const ve = a.EditorExtensionsRegistry.getEditorCommand(fe);
						return ve
							? ((me = me || {}),
								(me.source = ue),
								this.ub.invokeFunction((ge) => {
									Promise.resolve(ve.runEditorCommand(ge, this, me)).then(
										void 0,
										i.$4,
									);
								}),
								!0)
							: !1;
					}
					_getViewModel() {
						return this.tb ? this.tb.viewModel : null;
					}
					pushUndoStop() {
						return !this.tb || this.qb.options.get(o.EditorOption.readOnly)
							? !1
							: (this.tb.model.pushStackElement(), !0);
					}
					popUndoStop() {
						return !this.tb || this.qb.options.get(o.EditorOption.readOnly)
							? !1
							: (this.tb.model.popStackElement(), !0);
					}
					executeEdits(ue, fe, me) {
						if (!this.tb || this.qb.options.get(o.EditorOption.readOnly))
							return !1;
						let ve;
						return (
							me
								? Array.isArray(me)
									? (ve = () => me)
									: (ve = me)
								: (ve = () => null),
							this.tb.viewModel.executeEdits(ue, fe, ve),
							!0
						);
					}
					executeCommand(ue, fe) {
						this.tb && this.tb.viewModel.executeCommand(fe, ue);
					}
					executeCommands(ue, fe) {
						this.tb && this.tb.viewModel.executeCommands(fe, ue);
					}
					createDecorationsCollection(ue) {
						return new se(this, ue);
					}
					changeDecorations(ue) {
						return this.tb
							? this.tb.model.changeDecorations(ue, this.pb)
							: null;
					}
					getLineDecorations(ue) {
						return this.tb
							? this.tb.model.getLineDecorations(
									ue,
									this.pb,
									(0, o.filterValidationDecorations)(this.qb.options),
								)
							: null;
					}
					getDecorationsInRange(ue) {
						return this.tb
							? this.tb.model.getDecorationsInRange(
									ue,
									this.pb,
									(0, o.filterValidationDecorations)(this.qb.options),
								)
							: null;
					}
					deltaDecorations(ue, fe) {
						return this.tb
							? ue.length === 0 && fe.length === 0
								? ue
								: this.tb.model.deltaDecorations(ue, fe, this.pb)
							: [];
					}
					removeDecorations(ue) {
						!this.tb ||
							ue.length === 0 ||
							this.tb.model.changeDecorations((fe) => {
								fe.deltaDecorations(ue, []);
							});
					}
					setDecorationsByType(ue, fe, me) {
						const ve = {},
							ge = this.Fb[fe] || {};
						this.Fb[fe] = ve;
						const be = [];
						for (const Le of me) {
							let Fe = fe;
							if (Le.renderOptions) {
								const xe = (0, E.$Aj)(Le.renderOptions).toString(16);
								(Fe = fe + "-" + xe),
									!ge[xe] && !ve[xe] && this.fc(ue, Fe, Le.renderOptions, fe),
									(ve[xe] = !0);
							}
							const Oe = this.hc(Fe, !!Le.hoverMessage);
							Le.hoverMessage && (Oe.hoverMessage = Le.hoverMessage),
								be.push({ range: Le.range, options: Oe });
						}
						for (const Le in ge) ve[Le] || this.gc(fe + "-" + Le);
						const Ce = this.Eb[fe] || [];
						this.changeDecorations(
							(Le) => (this.Eb[fe] = Le.deltaDecorations(Ce, be)),
						);
					}
					setDecorationsByTypeFast(ue, fe) {
						const me = this.Fb[ue] || {};
						for (const Ce in me) this.gc(ue + "-" + Ce);
						this.Fb[ue] = {};
						const ve = D.$eY.createDynamic(this.hc(ue, !1)),
							ge = new Array(fe.length);
						for (let Ce = 0, Le = fe.length; Ce < Le; Ce++)
							ge[Ce] = { range: fe[Ce], options: ve };
						const be = this.Eb[ue] || [];
						this.changeDecorations(
							(Ce) => (this.Eb[ue] = Ce.deltaDecorations(be, ge)),
						);
					}
					removeDecorationsByType(ue) {
						const fe = this.Eb[ue];
						fe && this.changeDecorations((me) => me.deltaDecorations(fe, [])),
							this.Eb.hasOwnProperty(ue) && delete this.Eb[ue],
							this.Fb.hasOwnProperty(ue) && delete this.Fb[ue];
					}
					getLayoutInfo() {
						return this.qb.options.get(o.EditorOption.layoutInfo);
					}
					createOverviewRuler(ue) {
						return !this.tb || !this.tb.hasRealView
							? null
							: this.tb.view.createOverviewRuler(ue);
					}
					getContainerDomNode() {
						return this.nb;
					}
					getDomNode() {
						return !this.tb || !this.tb.hasRealView
							? null
							: this.tb.view.domNode.domNode;
					}
					delegateVerticalScrollbarPointerDown(ue) {
						!this.tb ||
							!this.tb.hasRealView ||
							this.tb.view.delegateVerticalScrollbarPointerDown(ue);
					}
					delegateScrollFromMouseWheelEvent(ue) {
						!this.tb ||
							!this.tb.hasRealView ||
							this.tb.view.delegateScrollFromMouseWheelEvent(ue);
					}
					layout(ue, fe = !1) {
						this.qb.observeContainer(ue), fe || this.render();
					}
					focus() {
						!this.tb || !this.tb.hasRealView || this.tb.view.focus();
					}
					hasTextFocus() {
						return !this.tb || !this.tb.hasRealView
							? !1
							: this.tb.view.isFocused();
					}
					hasWidgetFocus() {
						return this.Ab && this.Ab.hasFocus();
					}
					addContentWidget(ue) {
						const fe = { widget: ue, position: ue.getPosition() };
						this.Bb.hasOwnProperty(ue.getId()) &&
							console.warn(
								"Overwriting a content widget with the same id:" + ue.getId(),
							),
							(this.Bb[ue.getId()] = fe),
							this.tb &&
								this.tb.hasRealView &&
								this.tb.view.addContentWidget(fe);
					}
					layoutContentWidget(ue) {
						const fe = ue.getId();
						if (this.Bb.hasOwnProperty(fe)) {
							const me = this.Bb[fe];
							(me.position = ue.getPosition()),
								this.tb &&
									this.tb.hasRealView &&
									this.tb.view.layoutContentWidget(me);
						}
					}
					removeContentWidget(ue) {
						const fe = ue.getId();
						if (this.Bb.hasOwnProperty(fe)) {
							const me = this.Bb[fe];
							delete this.Bb[fe],
								this.tb &&
									this.tb.hasRealView &&
									this.tb.view.removeContentWidget(me);
						}
					}
					addOverlayWidget(ue) {
						const fe = { widget: ue, position: ue.getPosition() };
						this.Cb.hasOwnProperty(ue.getId()) &&
							console.warn("Overwriting an overlay widget with the same id."),
							(this.Cb[ue.getId()] = fe),
							this.tb &&
								this.tb.hasRealView &&
								this.tb.view.addOverlayWidget(fe);
					}
					layoutOverlayWidget(ue) {
						const fe = ue.getId();
						if (this.Cb.hasOwnProperty(fe)) {
							const me = this.Cb[fe];
							(me.position = ue.getPosition()),
								this.tb &&
									this.tb.hasRealView &&
									this.tb.view.layoutOverlayWidget(me);
						}
					}
					removeOverlayWidget(ue) {
						const fe = ue.getId();
						if (this.Cb.hasOwnProperty(fe)) {
							const me = this.Cb[fe];
							delete this.Cb[fe],
								this.tb &&
									this.tb.hasRealView &&
									this.tb.view.removeOverlayWidget(me);
						}
					}
					addGlyphMarginWidget(ue) {
						const fe = { widget: ue, position: ue.getPosition() };
						this.Db.hasOwnProperty(ue.getId()) &&
							console.warn(
								"Overwriting a glyph margin widget with the same id.",
							),
							(this.Db[ue.getId()] = fe),
							this.tb &&
								this.tb.hasRealView &&
								this.tb.view.addGlyphMarginWidget(fe);
					}
					layoutGlyphMarginWidget(ue) {
						const fe = ue.getId();
						if (this.Db.hasOwnProperty(fe)) {
							const me = this.Db[fe];
							(me.position = ue.getPosition()),
								this.tb &&
									this.tb.hasRealView &&
									this.tb.view.layoutGlyphMarginWidget(me);
						}
					}
					removeGlyphMarginWidget(ue) {
						const fe = ue.getId();
						if (this.Db.hasOwnProperty(fe)) {
							const me = this.Db[fe];
							delete this.Db[fe],
								this.tb &&
									this.tb.hasRealView &&
									this.tb.view.removeGlyphMarginWidget(me);
						}
					}
					changeViewZones(ue) {
						!this.tb || !this.tb.hasRealView || this.tb.view.change(ue);
					}
					getTargetAtClientPoint(ue, fe) {
						return !this.tb || !this.tb.hasRealView
							? null
							: this.tb.view.getTargetAtClientPoint(ue, fe);
					}
					getScrolledVisiblePosition(ue) {
						if (!this.tb || !this.tb.hasRealView) return null;
						const fe = this.tb.model.validatePosition(ue),
							me = this.qb.options,
							ve = me.get(o.EditorOption.layoutInfo),
							ge =
								W.Nb(this.tb, fe.lineNumber, fe.column) - this.getScrollTop(),
							be =
								this.tb.view.getOffsetForColumn(fe.lineNumber, fe.column) +
								ve.glyphMarginWidth +
								ve.lineNumbersWidth +
								ve.decorationsWidth -
								this.getScrollLeft();
						return {
							top: ge,
							left: be,
							height: me.get(o.EditorOption.lineHeight),
						};
					}
					getOffsetForColumn(ue, fe) {
						return !this.tb || !this.tb.hasRealView
							? -1
							: this.tb.view.getOffsetForColumn(ue, fe);
					}
					render(ue = !1) {
						!this.tb ||
							!this.tb.hasRealView ||
							this.tb.viewModel.batchEvents(() => {
								this.tb.view.render(!0, ue);
							});
					}
					setAriaOptions(ue) {
						!this.tb || !this.tb.hasRealView || this.tb.view.setAriaOptions(ue);
					}
					applyFontInfo(ue) {
						(0, m.$jsb)(ue, this.qb.options.get(o.EditorOption.fontInfo));
					}
					setBanner(ue, fe) {
						this.Gb && this.nb.contains(this.Gb) && this.Gb.remove(),
							(this.Gb = ue),
							this.qb.setReservedHeight(ue ? fe : 0),
							this.Gb && this.nb.prepend(this.Gb);
					}
					bc(ue) {
						if (!ue) {
							this.tb = null;
							return;
						}
						const fe = [];
						this.nb.setAttribute("data-mode-id", ue.getLanguageId()),
							this.qb.setIsDominatedByLongLines(ue.isDominatedByLongLines()),
							this.qb.setModelLineCount(ue.getLineCount());
						const me = ue.onBeforeAttached(),
							ve = new R.$qwb(
								this.pb,
								this.qb,
								ue,
								n.$Pvb.create(t.getWindow(this.nb)),
								A.$Svb.create(this.qb.options),
								(Ce) => t.$hgb(t.getWindow(this.nb), Ce),
								this.Ib,
								this.zb,
								me,
								{
									batchChanges: (Ce) => {
										try {
											return this.kc(), Ce();
										} finally {
											this.lc();
										}
									},
								},
							);
						fe.push(ue.onWillDispose(() => this.setModel(null))),
							fe.push(
								ve.onEvent((Ce) => {
									switch (Ce.kind) {
										case O.OutgoingViewModelEventKind.ContentSizeChanged:
											this.eb.fire(Ce);
											break;
										case O.OutgoingViewModelEventKind.FocusChanged:
											this.H.setValue(Ce.hasFocus);
											break;
										case O.OutgoingViewModelEventKind.ScrollChanged:
											this.fb.fire(Ce);
											break;
										case O.OutgoingViewModelEventKind.ViewZonesChanged:
											this.gb.fire();
											break;
										case O.OutgoingViewModelEventKind.HiddenAreasChanged:
											this.hb.fire();
											break;
										case O.OutgoingViewModelEventKind.ReadOnlyEditAttempt:
											this.F.fire();
											break;
										case O.OutgoingViewModelEventKind.CursorStateChanged: {
											if (Ce.reachedMaxCursorCount) {
												const xe = this.getOption(
														o.EditorOption.multiCursorLimit,
													),
													He = B.localize(189, null, xe);
												this.wb.prompt(q.Severity.Warning, He, [
													{
														label: "Find and Replace",
														run: () => {
															this.yb.executeCommand(
																"editor.action.startFindReplaceAction",
															);
														},
													},
													{
														label: B.localize(190, null),
														run: () => {
															this.yb.executeCommand(
																"workbench.action.openSettings2",
																{ query: "editor.multiCursorLimit" },
															);
														},
													},
												]);
											}
											const Le = [];
											for (let xe = 0, He = Ce.selections.length; xe < He; xe++)
												Le[xe] = Ce.selections[xe].getPosition();
											const Fe = {
												position: Le[0],
												secondaryPositions: Le.slice(1),
												reason: Ce.reason,
												source: Ce.source,
											};
											this.z.fire(Fe);
											const Oe = {
												selection: Ce.selections[0],
												secondarySelections: Ce.selections.slice(1),
												modelVersionId: Ce.modelVersionId,
												oldSelections: Ce.oldSelections,
												oldModelVersionId: Ce.oldModelVersionId,
												source: Ce.source,
												reason: Ce.reason,
											};
											this.C.fire(Oe);
											break;
										}
										case O.OutgoingViewModelEventKind.ModelDecorationsChanged:
											this.q.fire(Ce.event);
											break;
										case O.OutgoingViewModelEventKind.ModelLanguageChanged:
											this.nb.setAttribute("data-mode-id", ue.getLanguageId()),
												this.j.fire(Ce.event);
											break;
										case O.OutgoingViewModelEventKind
											.ModelLanguageConfigurationChanged:
											this.m.fire(Ce.event);
											break;
										case O.OutgoingViewModelEventKind.ModelContentChanged:
											this.h.fire(Ce.event);
											break;
										case O.OutgoingViewModelEventKind.ModelOptionsChanged:
											this.n.fire(Ce.event);
											break;
										case O.OutgoingViewModelEventKind.ModelTokensChanged:
											this.t.fire(Ce.event);
											break;
									}
								}),
							);
						const [ge, be] = this.cc(ve);
						if (be) {
							this.nb.appendChild(ge.domNode.domNode);
							let Ce = Object.keys(this.Bb);
							for (let Le = 0, Fe = Ce.length; Le < Fe; Le++) {
								const Oe = Ce[Le];
								ge.addContentWidget(this.Bb[Oe]);
							}
							Ce = Object.keys(this.Cb);
							for (let Le = 0, Fe = Ce.length; Le < Fe; Le++) {
								const Oe = Ce[Le];
								ge.addOverlayWidget(this.Cb[Oe]);
							}
							Ce = Object.keys(this.Db);
							for (let Le = 0, Fe = Ce.length; Le < Fe; Le++) {
								const Oe = Ce[Le];
								ge.addGlyphMarginWidget(this.Db[Oe]);
							}
							ge.render(!1, !0),
								ge.domNode.domNode.setAttribute("data-uri", ue.uri.toString());
						}
						this.tb = new ie(ue, ve, ge, be, fe, me);
					}
					cc(ue) {
						let fe;
						this.isSimpleWidget
							? (fe = {
									paste: (ge, be, Ce, Le) => {
										this.Zb("keyboard", ge, be, Ce, Le);
									},
									type: (ge) => {
										this.Xb("keyboard", ge);
									},
									compositionType: (ge, be, Ce, Le) => {
										this.Yb("keyboard", ge, be, Ce, Le);
									},
									startComposition: () => {
										this.Vb();
									},
									endComposition: () => {
										this.Wb("keyboard");
									},
									cut: () => {
										this.$b("keyboard");
									},
								})
							: (fe = {
									paste: (ge, be, Ce, Le) => {
										const Fe = {
											text: ge,
											pasteOnNewLine: be,
											multicursorText: Ce,
											mode: Le,
										};
										this.yb.executeCommand(I.Handler.Paste, Fe);
									},
									type: (ge) => {
										const be = { text: ge };
										this.yb.executeCommand(I.Handler.Type, be);
									},
									compositionType: (ge, be, Ce, Le) => {
										if (Ce || Le) {
											const Fe = {
												text: ge,
												replacePrevCharCnt: be,
												replaceNextCharCnt: Ce,
												positionDelta: Le,
											};
											this.yb.executeCommand(I.Handler.CompositionType, Fe);
										} else {
											const Fe = { text: ge, replaceCharCnt: be };
											this.yb.executeCommand(I.Handler.ReplacePreviousChar, Fe);
										}
									},
									startComposition: () => {
										this.yb.executeCommand(I.Handler.CompositionStart, {});
									},
									endComposition: () => {
										this.yb.executeCommand(I.Handler.CompositionEnd, {});
									},
									cut: () => {
										this.yb.executeCommand(I.Handler.Cut, {});
									},
								});
						const me = new g.$Yub(ue.coordinatesConverter);
						return (
							(me.onKeyDown = (ge) => this.db.fire(ge)),
							(me.onKeyUp = (ge) => this.bb.fire(ge)),
							(me.onContextMenu = (ge) => this.X.fire(ge)),
							(me.onMouseMove = (ge) => this.Y.fire(ge)),
							(me.onMouseLeave = (ge) => this.Z.fire(ge)),
							(me.onMouseDown = (ge) => this.Q.fire(ge)),
							(me.onMouseUp = (ge) => this.P.fire(ge)),
							(me.onMouseDrag = (ge) => this.R.fire(ge)),
							(me.onMouseDrop = (ge) => this.S.fire(ge)),
							(me.onMouseDropCanceled = (ge) => this.U.fire(ge)),
							(me.onMouseWheel = (ge) => this.ab.fire(ge)),
							[
								new c.View(
									fe,
									this.qb,
									this.zb.getColorTheme(),
									ue,
									me,
									this.ob,
									this.ub,
								),
								!0,
							]
						);
					}
					dc(ue) {
						ue?.removeAllDecorationsWithOwnerId(this.pb);
					}
					ec() {
						if ((this.rb?.dispose(), (this.rb = void 0), !this.tb)) return null;
						const ue = this.tb.model,
							fe = this.tb.hasRealView ? this.tb.view.domNode.domNode : null;
						return (
							this.tb.dispose(),
							(this.tb = null),
							this.nb.removeAttribute("data-mode-id"),
							fe && this.nb.contains(fe) && fe.remove(),
							this.Gb && this.nb.contains(this.Gb) && this.Gb.remove(),
							ue
						);
					}
					fc(ue, fe, me, ve) {
						this.xb.registerDecorationType(ue, fe, me, ve, this);
					}
					gc(ue) {
						this.xb.removeDecorationType(ue);
					}
					hc(ue, fe) {
						return this.xb.resolveDecorationOptions(ue, fe);
					}
					getTelemetryData() {
						return this.mb;
					}
					hasModel() {
						return this.tb !== null;
					}
					ic(ue) {
						const fe = [
							{
								range: new l.$iL(
									ue.lineNumber,
									ue.column,
									ue.lineNumber,
									ue.column,
								),
								options: W.b,
							},
						];
						this.Hb.set(fe), this.revealPosition(ue, I.ScrollType.Immediate);
					}
					jc() {
						this.Hb.clear();
					}
					setContextValue(ue, fe) {
						this.vb.createKey(ue, fe);
					}
					kc() {
						this.ib++, this.ib === 1 && this.jb.fire();
					}
					lc() {
						this.ib--, this.ib === 0 && this.lb.fire();
					}
				};
				(e.$rwb = X),
					(e.$rwb =
						X =
						W =
							Ne(
								[
									j(3, x.$Li),
									j(4, h.$dtb),
									j(5, z.$ek),
									j(6, F.$6j),
									j(7, G.$iP),
									j(8, q.$4N),
									j(9, U.$XK),
									j(10, P.$aN),
									j(11, M.$k3),
									j(12, J.$5X),
								],
								X,
							));
				let Y = 0;
				class ie {
					constructor(ue, fe, me, ve, ge, be) {
						(this.model = ue),
							(this.viewModel = fe),
							(this.view = me),
							(this.hasRealView = ve),
							(this.listenersToRemove = ge),
							(this.attachedView = be);
					}
					dispose() {
						(0, C.$Vc)(this.listenersToRemove),
							this.model.onBeforeDetached(this.attachedView),
							this.hasRealView && this.view.dispose(),
							this.viewModel.dispose();
					}
				}
				var ne;
				(function (ye) {
					(ye[(ye.NotSet = 0)] = "NotSet"),
						(ye[(ye.False = 1)] = "False"),
						(ye[(ye.True = 2)] = "True");
				})(ne || (ne = {}));
				class ee extends C.$1c {
					constructor(ue) {
						super(),
							(this.g = ue),
							(this.b = this.D(new w.$re(this.g))),
							(this.onDidChangeToTrue = this.b.event),
							(this.c = this.D(new w.$re(this.g))),
							(this.onDidChangeToFalse = this.c.event),
							(this.f = ne.NotSet);
					}
					setValue(ue) {
						const fe = ue ? ne.True : ne.False;
						this.f !== fe &&
							((this.f = fe),
							this.f === ne.True
								? this.b.fire()
								: this.f === ne.False && this.c.fire());
					}
				}
				e.$swb = ee;
				class _ extends w.$re {
					constructor(ue, fe) {
						super({ deliveryQueue: fe }), (this.h = ue);
					}
					fire(ue) {
						this.h.onBeforeInteractionEvent(), super.fire(ue);
					}
				}
				class te extends C.$1c {
					constructor(ue, fe, me) {
						super(),
							(this.b = ue),
							fe.createKey("editorId", ue.getId()),
							(this.c = T.EditorContextKeys.editorSimpleInput.bindTo(fe)),
							(this.f = T.EditorContextKeys.focus.bindTo(fe)),
							(this.g = T.EditorContextKeys.textInputFocus.bindTo(fe)),
							(this.h = T.EditorContextKeys.editorTextFocus.bindTo(fe)),
							(this.j = T.EditorContextKeys.tabMovesFocus.bindTo(fe)),
							(this.m = T.EditorContextKeys.readOnly.bindTo(fe)),
							(this.n = T.EditorContextKeys.inDiffEditor.bindTo(fe)),
							(this.q = T.EditorContextKeys.columnSelection.bindTo(fe)),
							(this.t = T.EditorContextKeys.hasMultipleSelections.bindTo(fe)),
							(this.u = T.EditorContextKeys.hasNonEmptySelection.bindTo(fe)),
							(this.w = T.EditorContextKeys.canUndo.bindTo(fe)),
							(this.y = T.EditorContextKeys.canRedo.bindTo(fe)),
							this.D(this.b.onDidChangeConfiguration(() => this.z())),
							this.D(this.b.onDidChangeCursorSelection(() => this.C())),
							this.D(this.b.onDidFocusEditorWidget(() => this.F())),
							this.D(this.b.onDidBlurEditorWidget(() => this.F())),
							this.D(
								this.b.onDidFocusEditorText(() => {
									!this.m.get() &&
										!this.b.isChatCodeblock &&
										me.registerEvent("editor.focus"),
										this.F();
								}),
							),
							this.D(this.b.onDidBlurEditorText(() => this.F())),
							this.D(this.b.onDidChangeModel(() => this.G())),
							this.D(this.b.onDidChangeConfiguration(() => this.G())),
							this.D(u.$rsb.onDidChangeTabFocus((ve) => this.j.set(ve))),
							this.z(),
							this.C(),
							this.F(),
							this.G(),
							this.c.set(this.b.isSimpleWidget);
					}
					z() {
						const ue = this.b.getOptions();
						this.j.set(u.$rsb.getTabFocusMode()),
							this.m.set(ue.get(o.EditorOption.readOnly)),
							this.n.set(ue.get(o.EditorOption.inDiffEditor)),
							this.q.set(ue.get(o.EditorOption.columnSelection));
					}
					C() {
						const ue = this.b.getSelections();
						ue
							? (this.t.set(ue.length > 1),
								this.u.set(ue.some((fe) => !fe.isEmpty())))
							: (this.t.reset(), this.u.reset());
					}
					F() {
						this.f.set(this.b.hasWidgetFocus() && !this.b.isSimpleWidget),
							this.h.set(this.b.hasTextFocus() && !this.b.isSimpleWidget),
							this.g.set(this.b.hasTextFocus());
					}
					G() {
						const ue = this.b.getModel();
						this.w.set(!!(ue && ue.canUndo())),
							this.y.set(!!(ue && ue.canRedo()));
					}
				}
				class Q extends C.$1c {
					constructor(ue, fe, me) {
						super(),
							(this.L = ue),
							(this.M = fe),
							(this.N = me),
							(this.b = T.EditorContextKeys.languageId.bindTo(fe)),
							(this.c =
								T.EditorContextKeys.hasCompletionItemProvider.bindTo(fe)),
							(this.f = T.EditorContextKeys.hasCodeActionsProvider.bindTo(fe)),
							(this.g = T.EditorContextKeys.hasCodeLensProvider.bindTo(fe)),
							(this.h = T.EditorContextKeys.hasDefinitionProvider.bindTo(fe)),
							(this.j = T.EditorContextKeys.hasDeclarationProvider.bindTo(fe)),
							(this.m =
								T.EditorContextKeys.hasImplementationProvider.bindTo(fe)),
							(this.n =
								T.EditorContextKeys.hasTypeDefinitionProvider.bindTo(fe)),
							(this.q = T.EditorContextKeys.hasHoverProvider.bindTo(fe)),
							(this.t =
								T.EditorContextKeys.hasDocumentHighlightProvider.bindTo(fe)),
							(this.u =
								T.EditorContextKeys.hasDocumentSymbolProvider.bindTo(fe)),
							(this.w = T.EditorContextKeys.hasReferenceProvider.bindTo(fe)),
							(this.y = T.EditorContextKeys.hasRenameProvider.bindTo(fe)),
							(this.H =
								T.EditorContextKeys.hasSignatureHelpProvider.bindTo(fe)),
							(this.I = T.EditorContextKeys.hasInlayHintsProvider.bindTo(fe)),
							(this.z =
								T.EditorContextKeys.hasDocumentFormattingProvider.bindTo(fe)),
							(this.C =
								T.EditorContextKeys.hasDocumentSelectionFormattingProvider.bindTo(
									fe,
								)),
							(this.F =
								T.EditorContextKeys.hasMultipleDocumentFormattingProvider.bindTo(
									fe,
								)),
							(this.G =
								T.EditorContextKeys.hasMultipleDocumentSelectionFormattingProvider.bindTo(
									fe,
								)),
							(this.J = T.EditorContextKeys.isInEmbeddedEditor.bindTo(fe));
						const ve = () => this.O();
						this.D(ue.onDidChangeModel(ve)),
							this.D(ue.onDidChangeModelLanguage(ve)),
							this.D(me.completionProvider.onDidChange(ve)),
							this.D(me.codeActionProvider.onDidChange(ve)),
							this.D(me.codeLensProvider.onDidChange(ve)),
							this.D(me.definitionProvider.onDidChange(ve)),
							this.D(me.declarationProvider.onDidChange(ve)),
							this.D(me.implementationProvider.onDidChange(ve)),
							this.D(me.typeDefinitionProvider.onDidChange(ve)),
							this.D(me.hoverProvider.onDidChange(ve)),
							this.D(me.documentHighlightProvider.onDidChange(ve)),
							this.D(me.documentSymbolProvider.onDidChange(ve)),
							this.D(me.referenceProvider.onDidChange(ve)),
							this.D(me.renameProvider.onDidChange(ve)),
							this.D(me.documentFormattingEditProvider.onDidChange(ve)),
							this.D(me.documentRangeFormattingEditProvider.onDidChange(ve)),
							this.D(me.signatureHelpProvider.onDidChange(ve)),
							this.D(me.inlayHintsProvider.onDidChange(ve)),
							ve();
					}
					dispose() {
						super.dispose();
					}
					reset() {
						this.M.bufferChangeEvents(() => {
							this.b.reset(),
								this.c.reset(),
								this.f.reset(),
								this.g.reset(),
								this.h.reset(),
								this.j.reset(),
								this.m.reset(),
								this.n.reset(),
								this.q.reset(),
								this.t.reset(),
								this.u.reset(),
								this.w.reset(),
								this.y.reset(),
								this.z.reset(),
								this.C.reset(),
								this.H.reset(),
								this.J.reset();
						});
					}
					O() {
						const ue = this.L.getModel();
						if (!ue) {
							this.reset();
							return;
						}
						this.M.bufferChangeEvents(() => {
							this.b.set(ue.getLanguageId()),
								this.c.set(this.N.completionProvider.has(ue)),
								this.f.set(this.N.codeActionProvider.has(ue)),
								this.g.set(this.N.codeLensProvider.has(ue)),
								this.h.set(this.N.definitionProvider.has(ue)),
								this.j.set(this.N.declarationProvider.has(ue)),
								this.m.set(this.N.implementationProvider.has(ue)),
								this.n.set(this.N.typeDefinitionProvider.has(ue)),
								this.q.set(this.N.hoverProvider.has(ue)),
								this.t.set(this.N.documentHighlightProvider.has(ue)),
								this.u.set(this.N.documentSymbolProvider.has(ue)),
								this.w.set(this.N.referenceProvider.has(ue)),
								this.y.set(this.N.renameProvider.has(ue)),
								this.H.set(this.N.signatureHelpProvider.has(ue)),
								this.I.set(this.N.inlayHintsProvider.has(ue)),
								this.z.set(
									this.N.documentFormattingEditProvider.has(ue) ||
										this.N.documentRangeFormattingEditProvider.has(ue),
								),
								this.C.set(this.N.documentRangeFormattingEditProvider.has(ue)),
								this.F.set(
									this.N.documentFormattingEditProvider.all(ue).length +
										this.N.documentRangeFormattingEditProvider.all(ue).length >
										1,
								),
								this.G.set(
									this.N.documentRangeFormattingEditProvider.all(ue).length > 1,
								),
								this.J.set(
									ue.uri.scheme === d.Schemas.walkThroughSnippet ||
										ue.uri.scheme === d.Schemas.vscodeChatCodeBlock,
								);
						});
					}
				}
				e.$twb = Q;
				class Z extends C.$1c {
					constructor(ue, fe) {
						super(),
							(this.g = this.D(new w.$re())),
							(this.onChange = this.g.event),
							(this.j = void 0),
							(this.b = !1),
							(this.c = this.D(t.$dhb(ue))),
							(this.h = !1),
							this.D(
								this.c.onDidFocus(() => {
									(this.b = !0), this.m();
								}),
							),
							this.D(
								this.c.onDidBlur(() => {
									(this.b = !1), this.m();
								}),
							),
							fe &&
								((this.f = this.D(t.$dhb(fe))),
								this.D(
									this.f.onDidFocus(() => {
										(this.h = !0), this.m();
									}),
								),
								this.D(
									this.f.onDidBlur(() => {
										(this.h = !1), this.m();
									}),
								));
					}
					m() {
						const ue = this.b || this.h;
						this.j !== ue && ((this.j = ue), this.g.fire(void 0));
					}
					hasFocus() {
						return this.j ?? !1;
					}
					refreshState() {
						this.c.refreshState(), this.f?.refreshState?.();
					}
				}
				class se {
					get length() {
						return this.b.length;
					}
					constructor(ue, fe) {
						(this.d = ue),
							(this.b = []),
							(this.c = !1),
							Array.isArray(fe) && fe.length > 0 && this.set(fe);
					}
					onDidChange(ue, fe, me) {
						return this.d.onDidChangeModelDecorations((ve) => {
							this.c || ue.call(fe, ve);
						}, me);
					}
					getRange(ue) {
						return !this.d.hasModel() || ue >= this.b.length
							? null
							: this.d.getModel().getDecorationRange(this.b[ue]);
					}
					getRanges() {
						if (!this.d.hasModel()) return [];
						const ue = this.d.getModel(),
							fe = [];
						for (const me of this.b) {
							const ve = ue.getDecorationRange(me);
							ve && fe.push(ve);
						}
						return fe;
					}
					has(ue) {
						return this.b.includes(ue.id);
					}
					clear() {
						this.b.length !== 0 && this.set([]);
					}
					set(ue) {
						try {
							(this.c = !0),
								this.d.changeDecorations((fe) => {
									this.b = fe.deltaDecorations(this.b, ue);
								});
						} finally {
							this.c = !1;
						}
						return this.b;
					}
					append(ue) {
						let fe = [];
						try {
							(this.c = !0),
								this.d.changeDecorations((me) => {
									(fe = me.deltaDecorations([], ue)),
										(this.b = this.b.concat(fe));
								});
						} finally {
							this.c = !1;
						}
						return fe;
					}
				}
				const re = encodeURIComponent(
						"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 3' enable-background='new 0 0 6 3' height='3' width='6'><g fill='",
					),
					le = encodeURIComponent(
						"'><polygon points='5.5,0 2.5,3 1.1,3 4.1,0'/><polygon points='4,0 6,2 6,0.6 5.4,0'/><polygon points='0,2 1,3 2.4,3 0,0.6'/></g></svg>",
					);
				function oe(ye) {
					return re + encodeURIComponent(ye.toString()) + le;
				}
				const ae = encodeURIComponent(
						'<svg xmlns="http://www.w3.org/2000/svg" height="3" width="12"><g fill="',
					),
					pe = encodeURIComponent(
						'"><circle cx="1" cy="1" r="1"/><circle cx="5" cy="1" r="1"/><circle cx="9" cy="1" r="1"/></g></svg>',
					);
				function $e(ye) {
					return ae + encodeURIComponent(ye.toString()) + pe;
				}
				(0, G.$oP)((ye, ue) => {
					const fe = ye.getColor(V.$gQ);
					fe &&
						ue.addRule(
							`.monaco-editor .${L.ClassName.EditorErrorDecoration} { background: url("data:image/svg+xml,${oe(fe)}") repeat-x bottom left; }`,
						);
					const me = ye.getColor(V.$RP);
					me &&
						ue.addRule(
							`.monaco-editor .${L.ClassName.EditorAIDecoration} { background: url("data:image/svg+xml,${oe(me)}") repeat-x bottom left; }`,
						);
					const ve = ye.getColor(V.$jQ);
					ve &&
						(ue.addRule(
							`.monaco-editor .${L.ClassName.EditorWarningDecoration} { background: url("data:image/svg+xml,${oe(ve)}") repeat-x bottom left; }`,
						),
						ue.addRule(
							`.monaco-editor .cursor-squiggly-non-marker { background: url("data:image/svg+xml,${oe(ve)}") repeat-x bottom left; }`,
						));
					const ge = ye.getColor(V.$mQ);
					ge &&
						ue.addRule(
							`.monaco-editor .${L.ClassName.EditorInfoDecoration} { background: url("data:image/svg+xml,${oe(ge)}") repeat-x bottom left; }`,
						);
					const be = ye.getColor(V.$oQ);
					be &&
						ue.addRule(
							`.monaco-editor .${L.ClassName.EditorHintDecoration} { background: url("data:image/svg+xml,${$e(be)}") no-repeat bottom left; }`,
						);
					const Ce = ye.getColor(b.$4T);
					Ce &&
						ue.addRule(
							`.monaco-editor.showUnused .${L.ClassName.EditorUnnecessaryInlineDecoration} { opacity: ${Ce.rgba.a}; }`,
						);
				});
			},
		),
		