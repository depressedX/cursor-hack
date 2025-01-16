define(
		de[1331],
		he([
			1, 0, 139, 459, 7, 168, 50, 24, 15, 138, 29, 94, 3, 12, 111, 37, 26, 47,
			56, 38, 17, 61, 64, 4, 10, 8, 49, 57, 5, 73, 51, 35, 1236, 1049, 3769,
			352, 112,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$sGc = e.$rGc = void 0),
				(e.$qGc = z),
				(w = mt(w)),
				(c = mt(c)),
				(n = xi(n)),
				($ = mt($)),
				(R = mt(R));
			const B = w.$,
				U = {
					description: "breakpoint-helper-decoration",
					glyphMarginClassName: p.ThemeIcon.asClassName(R.$aKb),
					glyphMargin: { position: y.GlyphMarginLane.Right },
					glyphMarginHoverMessage: new a.$cl().appendText(
						$.localize(5140, null),
					),
					stickiness: y.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
				};
			function z(X, Y, ie, ne, ee, _) {
				const te = [];
				return (
					ie.forEach((Q) => {
						if (Q.lineNumber > Y.getLineCount()) return;
						const Z = ie.some(
								(le) => le !== Q && le.lineNumber === Q.lineNumber,
							),
							se = Y.getLineFirstNonWhitespaceColumn(Q.lineNumber),
							re = Y.validateRange(
								Q.column
									? new s.$iL(
											Q.lineNumber,
											Q.column,
											Q.lineNumber,
											Q.column + 1,
										)
									: new s.$iL(Q.lineNumber, se, Q.lineNumber, se + 1),
							);
						te.push({ options: F(X, Y, Q, ne, ee, _, Z), range: re });
					}),
					te
				);
			}
			function F(X, Y, ie, ne, ee, _, te) {
				const Q = X.get(O.$75),
					Z = X.get(l.$nM),
					se = X.get(k.$3N),
					{
						icon: re,
						message: le,
						showAdapterUnverifiedMessage: oe,
					} = (0, N.$oGc)(ne, ee, ie, se, Q.getModel());
				let ae, pe;
				if (oe) {
					let ue;
					pe = Q.getModel()
						.getSessions()
						.map((fe) => {
							const me = Q.getAdapterManager().getDebugger(
									fe.configuration.type,
								),
								ve = me?.strings?.[O.DebuggerString.UnverifiedBreakpoints];
							if (ve)
								return (
									ue ||
										(ue =
											Z.guessLanguageIdByFilepathOrFirstLine(ie.uri) ?? void 0),
									ue && me.interestedInLanguage(ue) ? ve : void 0
								);
						})
						.find((fe) => !!fe);
				}
				if (le)
					if (
						((ae = new a.$cl(void 0, { isTrusted: !0, supportThemeIcons: !0 })),
						ie.condition || ie.hitCondition)
					) {
						const ue = Y.getLanguageId();
						ae.appendCodeblock(ue, le),
							pe && ae.appendMarkdown("$(warning) " + pe);
					} else
						ae.appendText(le),
							pe &&
								ae.appendMarkdown(
									`

$(warning) ` + pe,
								);
				else
					pe &&
						(ae = new a.$cl(void 0, {
							isTrusted: !0,
							supportThemeIcons: !0,
						}).appendMarkdown(pe));
				let $e = null;
				_ &&
					($e = {
						color: (0, D.$jP)(e.$sGc),
						position: y.OverviewRulerLane.Left,
					});
				const ye =
					ie.column &&
					(te || ie.column > Y.getLineFirstNonWhitespaceColumn(ie.lineNumber));
				return {
					description: "breakpoint-decoration",
					glyphMargin: { position: y.GlyphMarginLane.Right },
					glyphMarginClassName: p.ThemeIcon.asClassName(re),
					glyphMarginHoverMessage: ae,
					stickiness: y.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
					before: ye
						? {
								content: g.$ig,
								inlineClassName: "debug-breakpoint-placeholder",
								inlineClassNameAffectsLetterSpacing: !0,
							}
						: void 0,
					overviewRuler: $e,
					zIndex: 9999,
				};
			}
			async function x(X, Y, ie) {
				return ie.capabilities.supportsBreakpointLocationsRequest
					? await Promise.all(
							(0, d.$Qb)(Y, (ne) => ne).map(async (ne) => {
								try {
									return {
										lineNumber: ne,
										positions: await ie.breakpointsLocations(X.uri, ne),
									};
								} catch {
									return { lineNumber: ne, positions: [] };
								}
							}),
						)
					: [];
			}
			function H(X, Y, ie) {
				const ne = [];
				for (const { positions: ee, lineNumber: _ } of ie) {
					if (ee.length === 0) continue;
					const te = X.getLineFirstNonWhitespaceColumn(_),
						Q = X.getLineLastNonWhitespaceColumn(_);
					ee.forEach((Z) => {
						const se = new s.$iL(
							Z.lineNumber,
							Z.column,
							Z.lineNumber,
							Z.column + 1,
						);
						if (
							(Z.column <= te &&
								!Y.some(
									(le) =>
										le.range.startColumn > te &&
										le.range.startLineNumber === Z.lineNumber,
								)) ||
							Z.column > Q
						)
							return;
						const re = Y.find((le) => le.range.equalsRange(se));
						(re && re.inlineWidget) ||
							ne.push({
								range: se,
								options: {
									description: "breakpoint-placeholder-decoration",
									stickiness:
										y.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
									before: re
										? void 0
										: {
												content: g.$ig,
												inlineClassName: "debug-breakpoint-placeholder",
												inlineClassNameAffectsLetterSpacing: !0,
											},
								},
								breakpoint: re ? re.breakpoint : void 0,
							});
					});
				}
				return ne;
			}
			let q = class {
				constructor(Y, ie, ne, ee, _, te, Q, Z) {
					(this.q = Y),
						(this.r = ie),
						(this.t = ne),
						(this.u = ee),
						(this.w = te),
						(this.x = Q),
						(this.y = Z),
						(this.a = null),
						(this.h = []),
						(this.j = !1),
						(this.k = !1),
						(this.m = []),
						(this.n = []),
						(this.g = O.$94.bindTo(_)),
						(this.o = new m.$Yh(() => this.D(), 30)),
						this.o.schedule(),
						this.z();
				}
				getContextMenuActionsAtPosition(Y, ie) {
					if (!this.r.getAdapterManager().hasEnabledDebuggers()) return [];
					if (!this.r.canSetBreakpointsIn(ie)) return [];
					const ne = this.r
						.getModel()
						.getBreakpoints({ lineNumber: Y, uri: ie.uri });
					return this.A(ne, ie.uri, Y);
				}
				z() {
					this.h.push(
						this.q.onMouseDown(async (Y) => {
							if (!this.r.getAdapterManager().hasEnabledDebuggers()) return;
							const ie = this.q.getModel();
							if (
								!Y.target.position ||
								!ie ||
								Y.target.type !== f.MouseTargetType.GUTTER_GLYPH_MARGIN ||
								Y.target.detail.isAfterLines ||
								(!this.B(Y.target.position.lineNumber) &&
									!Y.target.element?.className.includes("breakpoint"))
							)
								return;
							const ne = this.r.canSetBreakpointsIn(ie),
								ee = Y.target.position.lineNumber,
								_ = ie.uri;
							if (
								!(
									Y.event.rightButton ||
									(c.$m && Y.event.leftButton && Y.event.ctrlKey)
								)
							) {
								const te = this.r
									.getModel()
									.getBreakpoints({ uri: _, lineNumber: ee });
								if (te.length) {
									const Q = Y.event.shiftKey,
										Z = te.some((se) => se.enabled);
									if (Q)
										te.forEach((se) =>
											this.r.enableOrDisableBreakpoints(!Z, se),
										);
									else if (
										!c.$n &&
										te.some(
											(se) =>
												!!se.condition ||
												!!se.logMessage ||
												!!se.hitCondition ||
												!!se.triggeredBy,
										)
									) {
										const se = te.every((ae) => !!ae.logMessage),
											re = se ? $.localize(5141, null) : $.localize(5142, null),
											le = $.localize(
												5143,
												null,
												re.toLowerCase(),
												se ? $.localize(5144, null) : $.localize(5145, null),
											),
											oe = $.localize(
												5146,
												null,
												re.toLowerCase(),
												se ? $.localize(5147, null) : $.localize(5148, null),
											);
										await this.w.prompt({
											type: n.default.Info,
											message: Z ? oe : le,
											buttons: [
												{
													label: $.localize(5149, null, re),
													run: () =>
														te.forEach((ae) =>
															this.r.removeBreakpoints(ae.getId()),
														),
												},
												{
													label: $.localize(
														5150,
														null,
														Z ? $.localize(5151, null) : $.localize(5152, null),
														re,
													),
													run: () =>
														te.forEach((ae) =>
															this.r.enableOrDisableBreakpoints(!Z, ae),
														),
												},
											],
											cancelButton: !0,
										});
									} else
										Z
											? te.forEach((se) => this.r.removeBreakpoints(se.getId()))
											: te.forEach((se) =>
													this.r.enableOrDisableBreakpoints(!Z, se),
												);
								} else if (ne)
									if (Y.event.middleButton) {
										const Q = this.x.getValue("debug").gutterMiddleClickAction;
										if (Q !== "none") {
											let Z;
											switch (Q) {
												case "logpoint":
													Z = O.BreakpointWidgetContext.LOG_MESSAGE;
													break;
												case "conditionalBreakpoint":
													Z = O.BreakpointWidgetContext.CONDITION;
													break;
												case "triggeredBreakpoint":
													Z = O.BreakpointWidgetContext.TRIGGER_POINT;
											}
											this.showBreakpointWidget(ee, void 0, Z);
										}
									} else this.r.addBreakpoints(_, [{ lineNumber: ee }]);
							}
						}),
					),
						(i.$Yfb.pointerEvents && t.$Rfb) ||
							(this.h.push(
								this.q.onMouseMove((Y) => {
									if (!this.r.getAdapterManager().hasEnabledDebuggers()) return;
									let ie = -1;
									const ne = this.q.getModel();
									ne &&
										Y.target.position &&
										(Y.target.type === f.MouseTargetType.GUTTER_GLYPH_MARGIN ||
											Y.target.type ===
												f.MouseTargetType.GUTTER_LINE_NUMBERS) &&
										this.r.canSetBreakpointsIn(ne) &&
										this.B(Y.target.position.lineNumber) &&
										(Y.target.detail.isAfterLines ||
											(ie = Y.target.position.lineNumber)),
										this.C(ie);
								}),
							),
							this.h.push(
								this.q.onMouseLeave(() => {
									this.C(-1);
								}),
							)),
						this.h.push(
							this.q.onDidChangeModel(async () => {
								this.closeBreakpointWidget(), await this.D();
							}),
						),
						this.h.push(
							this.r.getModel().onDidChangeBreakpoints(() => {
								!this.k && !this.o.isScheduled() && this.o.schedule();
							}),
						),
						this.h.push(
							this.r.onDidChangeState(() => {
								this.o.isScheduled() || this.o.schedule();
							}),
						),
						this.h.push(this.q.onDidChangeModelDecorations(() => this.E())),
						this.h.push(
							this.x.onDidChangeConfiguration(async (Y) => {
								(Y.affectsConfiguration(
									"debug.showBreakpointsInOverviewRuler",
								) ||
									Y.affectsConfiguration(
										"debug.showInlineBreakpointCandidates",
									)) &&
									(await this.D());
							}),
						);
				}
				A(Y, ie, ne, ee) {
					const _ = [];
					if (Y.length === 1) {
						const te = Y[0].logMessage
							? $.localize(5153, null)
							: $.localize(5154, null);
						_.push(
							new C.$rj(
								"debug.removeBreakpoint",
								$.localize(5155, null, te),
								void 0,
								!0,
								async () => {
									await this.r.removeBreakpoints(Y[0].getId());
								},
							),
						),
							_.push(
								new C.$rj(
									"workbench.debug.action.editBreakpointAction",
									$.localize(5156, null, te),
									void 0,
									!0,
									() =>
										Promise.resolve(
											this.showBreakpointWidget(Y[0].lineNumber, Y[0].column),
										),
								),
							),
							_.push(
								new C.$rj(
									"workbench.debug.viewlet.action.toggleBreakpoint",
									Y[0].enabled
										? $.localize(5157, null, te)
										: $.localize(5158, null, te),
									void 0,
									!0,
									() => this.r.enableOrDisableBreakpoints(!Y[0].enabled, Y[0]),
								),
							);
					} else if (Y.length > 1) {
						const te = Y.slice().sort((Q, Z) =>
							Q.column && Z.column ? Q.column - Z.column : 1,
						);
						_.push(
							new C.$uj(
								"debug.removeBreakpoints",
								$.localize(5159, null),
								te.map(
									(Q) =>
										new C.$rj(
											"removeInlineBreakpoint",
											Q.column
												? $.localize(5160, null, Q.column)
												: $.localize(5161, null),
											void 0,
											!0,
											() => this.r.removeBreakpoints(Q.getId()),
										),
								),
							),
						),
							_.push(
								new C.$uj(
									"debug.editBreakpoints",
									$.localize(5162, null),
									te.map(
										(Q) =>
											new C.$rj(
												"editBreakpoint",
												Q.column
													? $.localize(5163, null, Q.column)
													: $.localize(5164, null),
												void 0,
												!0,
												() =>
													Promise.resolve(
														this.showBreakpointWidget(Q.lineNumber, Q.column),
													),
											),
									),
								),
							),
							_.push(
								new C.$uj(
									"debug.enableDisableBreakpoints",
									$.localize(5165, null),
									te.map(
										(Q) =>
											new C.$rj(
												Q.enabled
													? "disableColumnBreakpoint"
													: "enableColumnBreakpoint",
												Q.enabled
													? Q.column
														? $.localize(5166, null, Q.column)
														: $.localize(5167, null)
													: Q.column
														? $.localize(5168, null, Q.column)
														: $.localize(5169, null),
												void 0,
												!0,
												() => this.r.enableOrDisableBreakpoints(!Q.enabled, Q),
											),
									),
								),
							);
					} else
						_.push(
							new C.$rj(
								"addBreakpoint",
								$.localize(5170, null),
								void 0,
								!0,
								() =>
									this.r.addBreakpoints(ie, [{ lineNumber: ne, column: ee }]),
							),
						),
							_.push(
								new C.$rj(
									"addConditionalBreakpoint",
									$.localize(5171, null),
									void 0,
									!0,
									() =>
										Promise.resolve(
											this.showBreakpointWidget(
												ne,
												ee,
												O.BreakpointWidgetContext.CONDITION,
											),
										),
								),
							),
							_.push(
								new C.$rj(
									"addLogPoint",
									$.localize(5172, null),
									void 0,
									!0,
									() =>
										Promise.resolve(
											this.showBreakpointWidget(
												ne,
												ee,
												O.BreakpointWidgetContext.LOG_MESSAGE,
											),
										),
								),
							),
							_.push(
								new C.$rj(
									"addTriggeredBreakpoint",
									$.localize(5173, null),
									void 0,
									!0,
									() =>
										Promise.resolve(
											this.showBreakpointWidget(
												ne,
												ee,
												O.BreakpointWidgetContext.TRIGGER_POINT,
											),
										),
								),
							);
					return (
						this.r.state === O.State.Stopped &&
							(_.push(new C.$tj()),
							_.push(
								new C.$rj("runToLine", $.localize(5174, null), void 0, !0, () =>
									this.r.runTo(ie, ne).catch(u.$4),
								),
							)),
						_
					);
				}
				B(Y) {
					const ie = this.q.getLineDecorations(Y);
					if (ie)
						for (const { options: ne } of ie) {
							const ee = ne.glyphMarginClassName;
							if (!ee) continue;
							if (
								!(ee.includes("codicon-") || ee.startsWith("coverage-deco-")) ||
								ee.includes("codicon-testing-") ||
								ee.includes("codicon-merge-") ||
								ee.includes("codicon-arrow-") ||
								ee.includes("codicon-loading") ||
								ee.includes("codicon-fold") ||
								ee.includes("codicon-gutter-lightbulb") ||
								ee.includes("codicon-lightbulb-sparkle")
							)
								return !1;
						}
					return !0;
				}
				C(Y) {
					this.q.changeDecorations((ie) => {
						this.a && (ie.removeDecoration(this.a), (this.a = null)),
							Y !== -1 &&
								(this.a = ie.addDecoration(
									{
										startLineNumber: Y,
										startColumn: 1,
										endLineNumber: Y,
										endColumn: 1,
									},
									U,
								));
					});
				}
				async D() {
					if (!this.q.hasModel()) return;
					const Y = (re, le) => {
							const oe = H(ne, this.m, le),
								ae = re.deltaDecorations(
									this.n.map((pe) => pe.decorationId),
									oe,
								);
							this.n.forEach((pe) => {
								pe.inlineWidget.dispose();
							}),
								(this.n = ae.map((pe, $e) => {
									const ye = oe[$e],
										ue = ye.breakpoint
											? (0, N.$oGc)(
													this.r.state,
													this.r.getModel().areBreakpointsActivated(),
													ye.breakpoint,
													this.y,
													this.r.getModel(),
												).icon
											: R.$8Jb.disabled,
										fe = () =>
											this.A(
												ye.breakpoint ? [ye.breakpoint] : [],
												ie.getModel().uri,
												ye.range.startLineNumber,
												ye.range.startColumn,
											),
										me = new V(
											ie,
											pe,
											p.ThemeIcon.asClassName(ue),
											ye.breakpoint,
											this.r,
											this.t,
											fe,
										);
									return { decorationId: pe, inlineWidget: me };
								}));
						},
						ie = this.q,
						ne = ie.getModel(),
						ee = this.r.getModel().getBreakpoints({ uri: ne.uri }),
						_ = this.x.getValue("debug"),
						te = this.u.invokeFunction((re) =>
							z(
								re,
								ne,
								ee,
								this.r.state,
								this.r.getModel().areBreakpointsActivated(),
								_.showBreakpointsInOverviewRuler,
							),
						),
						Q = this.r.getViewModel().focusedSession,
						Z =
							_.showInlineBreakpointCandidates && Q
								? x(
										this.q.getModel(),
										te.map((re) => re.range.startLineNumber),
										Q,
									)
								: Promise.resolve([]),
						se = await Promise.race([Z, (0, m.$Nh)(500).then(() => {})]);
					se === void 0 &&
						Z.then((re) => ie.changeDecorations((le) => Y(le, re)));
					try {
						(this.j = !0),
							ie.changeDecorations((re) => {
								const le = re.deltaDecorations(
									this.m.map((oe) => oe.decorationId),
									te,
								);
								this.m.forEach((oe) => {
									oe.inlineWidget?.dispose();
								}),
									(this.m = le.map((oe, ae) => {
										let pe;
										const $e = ee[ae];
										if (te[ae].options.before) {
											const ye = () =>
												this.A(
													[$e],
													ie.getModel().uri,
													$e.lineNumber,
													$e.column,
												);
											pe = new V(
												ie,
												oe,
												te[ae].options.glyphMarginClassName,
												$e,
												this.r,
												this.t,
												ye,
											);
										}
										return {
											decorationId: oe,
											breakpoint: $e,
											range: te[ae].range,
											inlineWidget: pe,
										};
									})),
									se && Y(re, se);
							});
					} finally {
						this.j = !1;
					}
					for (const re of this.m)
						re.inlineWidget && this.q.layoutContentWidget(re.inlineWidget);
				}
				async E() {
					if (this.m.length === 0 || this.j || !this.q.hasModel()) return;
					let Y = !1;
					const ie = this.q.getModel();
					if (
						(this.m.forEach((ee) => {
							if (Y) return;
							const _ = ie.getDecorationRange(ee.decorationId);
							_ && !ee.range.equalsRange(_) && ((Y = !0), (ee.range = _));
						}),
						!Y)
					)
						return;
					const ne = new Map();
					for (let ee = 0, _ = this.m.length; ee < _; ee++) {
						const te = this.m[ee],
							Q = ie.getDecorationRange(te.decorationId);
						Q &&
							te.breakpoint &&
							ne.set(te.breakpoint.getId(), {
								lineNumber: Q.startLineNumber,
								column: te.breakpoint.column ? Q.startColumn : void 0,
							});
					}
					try {
						(this.k = !0), await this.r.updateBreakpoints(ie.uri, ne, !0);
					} finally {
						this.k = !1;
					}
				}
				showBreakpointWidget(Y, ie, ne) {
					this.f?.dispose(),
						(this.f = this.u.createInstance(A.$pGc, this.q, Y, ie, ne)),
						this.f.show({ lineNumber: Y, column: 1 }),
						this.g.set(!0);
				}
				closeBreakpointWidget() {
					this.f &&
						(this.f.dispose(),
						(this.f = void 0),
						this.g.reset(),
						this.q.focus());
				}
				dispose() {
					this.f?.dispose(),
						this.q.removeDecorations(this.m.map((Y) => Y.decorationId)),
						(0, h.$Vc)(this.h);
				}
			};
			(e.$rGc = q),
				(e.$rGc = q =
					Ne(
						[
							j(1, O.$75),
							j(2, I.$Xxb),
							j(3, P.$Li),
							j(4, S.$6j),
							j(5, T.$GO),
							j(6, v.$gj),
							j(7, k.$3N),
						],
						q,
					)),
				M.$aGc.registerGutterActionsGenerator(
					({ lineNumber: X, editor: Y, accessor: ie }, ne) => {
						const ee = Y.getModel(),
							_ = ie.get(O.$75);
						if (
							!ee ||
							!_.getAdapterManager().hasEnabledDebuggers() ||
							!_.canSetBreakpointsIn(ee)
						)
							return;
						const te = Y.getContribution(O.$15);
						if (!te) return;
						const Q = te.getContextMenuActionsAtPosition(X, ee);
						for (const Z of Q) ne.push(Z, "2_debug");
					},
				);
			class V {
				constructor(Y, ie, ne, ee, _, te, Q) {
					(this.h = Y),
						(this.j = ie),
						(this.k = ee),
						(this.m = _),
						(this.n = te),
						(this.o = Q),
						(this.allowEditorOverflow = !1),
						(this.suppressMouseDown = !0),
						(this.g = []),
						(this.f = this.h.getModel().getDecorationRange(ie)),
						this.g.push(
							this.h.onDidChangeModelDecorations(() => {
								const se = this.h.getModel().getDecorationRange(this.j);
								this.f &&
									!this.f.equalsRange(se) &&
									((this.f = se), this.h.layoutContentWidget(this));
							}),
						),
						this.q(ne),
						this.h.addContentWidget(this),
						this.h.layoutContentWidget(this);
				}
				q(Y) {
					(this.a = B(".inline-breakpoint-widget")),
						Y && this.a.classList.add(...Y.split(" ")),
						this.g.push(
							w.$0fb(this.a, w.$$gb.CLICK, async (ne) => {
								switch (this.k?.enabled) {
									case void 0:
										await this.m.addBreakpoints(this.h.getModel().uri, [
											{
												lineNumber: this.f.startLineNumber,
												column: this.f.startColumn,
											},
										]);
										break;
									case !0:
										await this.m.removeBreakpoints(this.k.getId());
										break;
									case !1:
										this.m.enableOrDisableBreakpoints(!0, this.k);
										break;
								}
							}),
						),
						this.g.push(
							w.$0fb(this.a, w.$$gb.CONTEXT_MENU, (ne) => {
								const ee = new E.$2fb(w.getWindow(this.a), ne),
									_ = this.o();
								this.n.showContextMenu({
									getAnchor: () => ee,
									getActions: () => _,
									getActionsContext: () => this.k,
									onHide: () => (0, h.$Wc)(_),
								});
							}),
						);
					const ie = () => {
						const ne = this.h.getOption(b.EditorOption.lineHeight);
						(this.a.style.height = `${ne}px`),
							(this.a.style.width = `${Math.ceil(0.8 * ne)}px`),
							(this.a.style.marginLeft = "4px");
					};
					ie(),
						this.g.push(
							this.h.onDidChangeConfiguration((ne) => {
								(ne.hasChanged(b.EditorOption.fontSize) ||
									ne.hasChanged(b.EditorOption.lineHeight)) &&
									ie();
							}),
						);
				}
				getId() {
					return (0, o.$9g)();
				}
				getDomNode() {
					return this.a;
				}
				getPosition() {
					return this.f
						? (this.a.classList.toggle("line-start", this.f.startColumn === 1),
							{
								position: {
									lineNumber: this.f.startLineNumber,
									column: this.f.startColumn - 1,
								},
								preference: [f.ContentWidgetPositionPreference.EXACT],
							})
						: null;
				}
				dispose() {
					this.h.removeContentWidget(this), (0, h.$Vc)(this.g);
				}
			}
			Ne([r.$ei], V.prototype, "getId", null),
				(0, D.$oP)((X, Y) => {
					const ie =
							".monaco-editor .glyph-margin-widgets, .monaco-workbench .debug-breakpoints, .monaco-workbench .disassembly-view, .monaco-editor .contentWidgets",
						ne = X.getColor(e.$sGc);
					ne &&
						(Y.addRule(`${ie} {
			${R.$cKb
				.map((Z) => `${p.ThemeIcon.asCSSSelector(Z.regular)}`)
				.join(`,
		`)},
			${p.ThemeIcon.asCSSSelector(R.$bKb)},
			${p.ThemeIcon.asCSSSelector(R.$aKb)}:not([class*='codicon-debug-breakpoint']):not([class*='codicon-debug-stackframe']),
			${p.ThemeIcon.asCSSSelector(R.$8Jb.regular)}${p.ThemeIcon.asCSSSelector(R.$eKb)}::after,
			${p.ThemeIcon.asCSSSelector(R.$8Jb.regular)}${p.ThemeIcon.asCSSSelector(R.$dKb)}::after {
				color: ${ne} !important;
			}
		}`),
						Y.addRule(`${ie} {
			${p.ThemeIcon.asCSSSelector(R.$8Jb.pending)} {
				color: ${ne} !important;
				font-size: 12px !important;
			}
		}`));
					const ee = X.getColor(G);
					ee &&
						Y.addRule(`${ie} {
			${R.$cKb
				.map((Z) => p.ThemeIcon.asCSSSelector(Z.disabled))
				.join(`,
		`)} {
				color: ${ee};
			}
		}`);
					const _ = X.getColor(K);
					_ &&
						Y.addRule(`${ie} {
			${R.$cKb
				.map((Z) => p.ThemeIcon.asCSSSelector(Z.unverified))
				.join(`,
		`)} {
				color: ${_};
			}
		}`);
					const te = X.getColor(J);
					te &&
						Y.addRule(`
		.monaco-editor .debug-top-stack-frame-column {
			color: ${te} !important;
		}
		${ie} {
			${p.ThemeIcon.asCSSSelector(R.$dKb)} {
				color: ${te} !important;
			}
		}
		`);
					const Q = X.getColor(W);
					Q &&
						Y.addRule(`${ie} {
			${p.ThemeIcon.asCSSSelector(R.$eKb)} {
				color: ${Q} !important;
			}
		}`);
				}),
				(e.$sGc = (0, L.$wP)(
					"debugIcon.breakpointForeground",
					"#E51400",
					$.localize(5175, null),
				));
			const G = (0, L.$wP)(
					"debugIcon.breakpointDisabledForeground",
					"#848484",
					$.localize(5176, null),
				),
				K = (0, L.$wP)(
					"debugIcon.breakpointUnverifiedForeground",
					"#848484",
					$.localize(5177, null),
				),
				J = (0, L.$wP)(
					"debugIcon.breakpointCurrentStackframeForeground",
					{
						dark: "#FFCC00",
						light: "#BE8700",
						hcDark: "#FFCC00",
						hcLight: "#BE8700",
					},
					$.localize(5178, null),
				),
				W = (0, L.$wP)(
					"debugIcon.breakpointStackframeForeground",
					"#89D185",
					$.localize(5179, null),
				);
		},
	),
		