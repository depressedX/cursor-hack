define(
			de[2904],
			he([
				1, 0, 24, 15, 97, 3, 12, 37, 38, 1199, 346, 248, 48, 17, 98, 64, 590,
				74, 171, 172, 597, 493, 2724, 1592, 290, 1631, 751, 2903, 2765,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qwb = void 0),
					(C = mt(C)),
					(d = mt(d)),
					(p = mt(p)),
					(l = mt(l));
				const k = !0;
				class L extends E.$1c {
					constructor(U, z, F, x, H, q, V, G, K, J) {
						if (
							(super(),
							(this.s = V),
							(this.t = G),
							(this.u = K),
							(this.w = J),
							(this.I = new N()),
							(this.J = []),
							(this.a = U),
							(this.b = z),
							(this.model = F),
							(this.c = new I.$Wvb()),
							(this.onEvent = this.c.onEvent),
							(this.cursorConfig = new u.$xsb(
								this.model.getLanguageId(),
								this.model.getOptions(),
								this.b,
								this.s,
							)),
							(this.f = this.D(new i.$Yh(() => this.y(), 0))),
							(this.g = !1),
							(this.h = D.create(this.model)),
							(this.glyphLanes = new P.$pwb(0)),
							k && this.model.isTooLargeForTokenization())
						)
							this.m = new T.$kwb(this.model);
						else {
							const W = this.b.options,
								X = W.get(m.EditorOption.fontInfo),
								Y = W.get(m.EditorOption.wrappingStrategy),
								ie = W.get(m.EditorOption.wrappingInfo),
								ne = W.get(m.EditorOption.wrappingIndent),
								ee = W.get(m.EditorOption.wordBreak);
							this.m = new T.$jwb(
								this.a,
								this.model,
								x,
								H,
								X,
								this.model.getOptions().tabSize,
								Y,
								ie.wrappingColumn,
								ne,
								ee,
							);
						}
						(this.coordinatesConverter = this.m.createCoordinatesConverter()),
							(this.n = this.D(
								new r.$_vb(
									F,
									this,
									this.coordinatesConverter,
									this.cursorConfig,
								),
							)),
							(this.viewLayout = this.D(
								new y.$hwb(this.b, this.getLineCount(), q),
							)),
							this.D(
								this.viewLayout.onDidScroll((W) => {
									W.scrollTopChanged && this.C(),
										W.scrollTopChanged && this.h.invalidate(),
										this.c.emitSingleViewEvent(new l.$Ssb(W)),
										this.c.emitOutgoingEvent(
											new I.$1vb(
												W.oldScrollWidth,
												W.oldScrollLeft,
												W.oldScrollHeight,
												W.oldScrollTop,
												W.scrollWidth,
												W.scrollLeft,
												W.scrollHeight,
												W.scrollTop,
											),
										);
								}),
							),
							this.D(
								this.viewLayout.onDidContentSizeChange((W) => {
									this.c.emitOutgoingEvent(W);
								}),
							),
							(this.q = new S.$lwb(
								this.a,
								this.model,
								this.b,
								this.m,
								this.coordinatesConverter,
							)),
							this.H(),
							this.D(
								this.b.onDidChangeFast((W) => {
									try {
										const X = this.c.beginEmitViewEvents();
										this.G(X, W);
									} finally {
										this.c.endEmitViewEvents();
									}
								}),
							),
							this.D(
								$.$Bvb.getInstance().onDidChange(() => {
									this.c.emitSingleViewEvent(new l.$Vsb());
								}),
							),
							this.D(
								this.t.onDidColorThemeChange((W) => {
									this.P(), this.c.emitSingleViewEvent(new l.$Tsb(W));
								}),
							),
							this.y();
					}
					dispose() {
						super.dispose(),
							this.q.dispose(),
							this.m.dispose(),
							this.h.dispose(),
							this.c.dispose();
					}
					createLineBreaksComputer() {
						return this.m.createLineBreaksComputer();
					}
					addViewEventHandler(U) {
						this.c.addViewEventHandler(U);
					}
					removeViewEventHandler(U) {
						this.c.removeViewEventHandler(U);
					}
					y() {
						this.b.setViewLineCount(this.m.getViewLineCount());
					}
					z() {
						const U = this.viewLayout.getLinesViewportData(),
							z = new c.$iL(
								U.startLineNumber,
								this.getLineMinColumn(U.startLineNumber),
								U.endLineNumber,
								this.getLineMaxColumn(U.endLineNumber),
							);
						return this.L(z);
					}
					visibleLinesStabilized() {
						const U = this.z();
						this.u.setVisibleLines(U, !0);
					}
					C() {
						const U = this.z();
						this.u.setVisibleLines(U, !1);
					}
					setHasFocus(U) {
						(this.g = U),
							this.n.setHasFocus(U),
							this.c.emitSingleViewEvent(new l.$Lsb(U)),
							this.c.emitOutgoingEvent(new I.$Zvb(!U, U));
					}
					onCompositionStart() {
						this.c.emitSingleViewEvent(new l.$Fsb());
					}
					onCompositionEnd() {
						this.c.emitSingleViewEvent(new l.$Gsb());
					}
					F() {
						if (this.h.isValid && this.viewLayout.getCurrentScrollTop() > 0) {
							const U = new h.$hL(
									this.h.viewLineNumber,
									this.getLineMinColumn(this.h.viewLineNumber),
								),
								z =
									this.coordinatesConverter.convertViewPositionToModelPosition(
										U,
									);
							return new O(z, this.h.startLineDelta);
						}
						return new O(null, 0);
					}
					G(U, z) {
						const F = this.F(),
							x = this.b.options,
							H = x.get(m.EditorOption.fontInfo),
							q = x.get(m.EditorOption.wrappingStrategy),
							V = x.get(m.EditorOption.wrappingInfo),
							G = x.get(m.EditorOption.wrappingIndent),
							K = x.get(m.EditorOption.wordBreak);
						this.m.setWrappingSettings(H, q, V.wrappingColumn, G, K) &&
							(U.emitViewEvent(new l.$Ksb()),
							U.emitViewEvent(new l.$Nsb()),
							U.emitViewEvent(new l.$Jsb(null)),
							this.n.onLineMappingChanged(U),
							this.q.onLineMappingChanged(),
							this.viewLayout.onFlushed(this.getLineCount()),
							this.f.schedule()),
							z.hasChanged(m.EditorOption.readOnly) &&
								(this.q.reset(), U.emitViewEvent(new l.$Jsb(null))),
							z.hasChanged(m.EditorOption.renderValidationDecorations) &&
								(this.q.reset(), U.emitViewEvent(new l.$Jsb(null))),
							U.emitViewEvent(new l.$Hsb(z)),
							this.viewLayout.onConfigurationChanged(z),
							F.recoverViewportStart(
								this.coordinatesConverter,
								this.viewLayout,
							),
							u.$xsb.shouldRecreate(z) &&
								((this.cursorConfig = new u.$xsb(
									this.model.getLanguageId(),
									this.model.getOptions(),
									this.b,
									this.s,
								)),
								this.n.updateConfiguration(this.cursorConfig));
					}
					H() {
						this.D(
							this.model.onDidChangeContentOrInjectedText((U) => {
								try {
									const F = this.c.beginEmitViewEvents();
									let x = !1,
										H = !1;
									const q =
											U instanceof p.$BN
												? U.rawContentChangedEvent.changes
												: U.changes,
										V =
											U instanceof p.$BN
												? U.rawContentChangedEvent.versionId
												: null,
										G = this.m.createLineBreaksComputer();
									for (const W of q)
										switch (W.changeType) {
											case p.RawContentChangedType.LinesInserted: {
												for (let X = 0; X < W.detail.length; X++) {
													const Y = W.detail[X];
													let ie = W.injectedTexts[X];
													ie &&
														(ie = ie.filter(
															(ne) => !ne.ownerId || ne.ownerId === this.a,
														)),
														G.addRequest(Y, ie, null);
												}
												break;
											}
											case p.RawContentChangedType.LineChanged: {
												let X = null;
												W.injectedText &&
													(X = W.injectedText.filter(
														(Y) => !Y.ownerId || Y.ownerId === this.a,
													)),
													G.addRequest(W.detail, X, null);
												break;
											}
										}
									const K = G.finalize(),
										J = new t.$cc(K);
									for (const W of q)
										switch (W.changeType) {
											case p.RawContentChangedType.Flush: {
												this.m.onModelFlushed(),
													F.emitViewEvent(new l.$Ksb()),
													this.q.reset(),
													this.viewLayout.onFlushed(this.getLineCount()),
													(x = !0);
												break;
											}
											case p.RawContentChangedType.LinesDeleted: {
												const X = this.m.onModelLinesDeleted(
													V,
													W.fromLineNumber,
													W.toLineNumber,
												);
												X !== null &&
													(F.emitViewEvent(X),
													this.viewLayout.onLinesDeleted(
														X.fromLineNumber,
														X.toLineNumber,
													)),
													(x = !0);
												break;
											}
											case p.RawContentChangedType.LinesInserted: {
												const X = J.takeCount(W.detail.length),
													Y = this.m.onModelLinesInserted(
														V,
														W.fromLineNumber,
														W.toLineNumber,
														X,
													);
												Y !== null &&
													(F.emitViewEvent(Y),
													this.viewLayout.onLinesInserted(
														Y.fromLineNumber,
														Y.toLineNumber,
													)),
													(x = !0);
												break;
											}
											case p.RawContentChangedType.LineChanged: {
												const X = J.dequeue(),
													[Y, ie, ne, ee] = this.m.onModelLineChanged(
														V,
														W.lineNumber,
														X,
													);
												(H = Y),
													ie && F.emitViewEvent(ie),
													ne &&
														(F.emitViewEvent(ne),
														this.viewLayout.onLinesInserted(
															ne.fromLineNumber,
															ne.toLineNumber,
														)),
													ee &&
														(F.emitViewEvent(ee),
														this.viewLayout.onLinesDeleted(
															ee.fromLineNumber,
															ee.toLineNumber,
														));
												break;
											}
											case p.RawContentChangedType.EOLChanged:
												break;
										}
									V !== null && this.m.acceptVersionId(V),
										this.viewLayout.onHeightMaybeChanged(),
										!x &&
											H &&
											(F.emitViewEvent(new l.$Nsb()),
											F.emitViewEvent(new l.$Jsb(null)),
											this.n.onLineMappingChanged(F),
											this.q.onLineMappingChanged());
								} finally {
									this.c.endEmitViewEvents();
								}
								const z = this.h.isValid;
								if (
									(this.h.invalidate(),
									this.b.setModelLineCount(this.model.getLineCount()),
									this.y(),
									!this.g && this.model.getAttachedEditorCount() >= 2 && z)
								) {
									const F = this.model._getTrackedRange(
										this.h.modelTrackedRange,
									);
									if (F) {
										const x =
												this.coordinatesConverter.convertModelPositionToViewPosition(
													F.getStartPosition(),
												),
											H = this.viewLayout.getVerticalOffsetForLineNumber(
												x.lineNumber,
											);
										this.viewLayout.setScrollPosition(
											{ scrollTop: H + this.h.startLineDelta },
											n.ScrollType.Immediate,
										);
									}
								}
								try {
									const F = this.c.beginEmitViewEvents();
									U instanceof p.$BN &&
										F.emitOutgoingEvent(new I.$9vb(U.contentChangedEvent)),
										this.n.onModelContentChanged(F, U);
								} finally {
									this.c.endEmitViewEvents();
								}
								this.C();
							}),
						),
							this.D(
								this.model.onDidChangeTokens((U) => {
									const z = [];
									for (let F = 0, x = U.ranges.length; F < x; F++) {
										const H = U.ranges[F],
											q =
												this.coordinatesConverter.convertModelPositionToViewPosition(
													new h.$hL(H.fromLineNumber, 1),
												).lineNumber,
											V =
												this.coordinatesConverter.convertModelPositionToViewPosition(
													new h.$hL(
														H.toLineNumber,
														this.model.getLineMaxColumn(H.toLineNumber),
													),
												).lineNumber;
										z[F] = { fromLineNumber: q, toLineNumber: V };
									}
									this.c.emitSingleViewEvent(new l.$Usb(z)),
										this.c.emitOutgoingEvent(new I.$$vb(U));
								}),
							),
							this.D(
								this.model.onDidChangeLanguageConfiguration((U) => {
									this.c.emitSingleViewEvent(new l.$Msb()),
										(this.cursorConfig = new u.$xsb(
											this.model.getLanguageId(),
											this.model.getOptions(),
											this.b,
											this.s,
										)),
										this.n.updateConfiguration(this.cursorConfig),
										this.c.emitOutgoingEvent(new I.$8vb(U));
								}),
							),
							this.D(
								this.model.onDidChangeLanguage((U) => {
									(this.cursorConfig = new u.$xsb(
										this.model.getLanguageId(),
										this.model.getOptions(),
										this.b,
										this.s,
									)),
										this.n.updateConfiguration(this.cursorConfig),
										this.c.emitOutgoingEvent(new I.$7vb(U));
								}),
							),
							this.D(
								this.model.onDidChangeOptions((U) => {
									if (this.m.setTabSize(this.model.getOptions().tabSize)) {
										try {
											const z = this.c.beginEmitViewEvents();
											z.emitViewEvent(new l.$Ksb()),
												z.emitViewEvent(new l.$Nsb()),
												z.emitViewEvent(new l.$Jsb(null)),
												this.n.onLineMappingChanged(z),
												this.q.onLineMappingChanged(),
												this.viewLayout.onFlushed(this.getLineCount());
										} finally {
											this.c.endEmitViewEvents();
										}
										this.f.schedule();
									}
									(this.cursorConfig = new u.$xsb(
										this.model.getLanguageId(),
										this.model.getOptions(),
										this.b,
										this.s,
									)),
										this.n.updateConfiguration(this.cursorConfig),
										this.c.emitOutgoingEvent(new I.$0vb(U));
								}),
							),
							this.D(
								this.model.onDidChangeDecorations((U) => {
									this.q.onModelDecorationsChanged(),
										this.c.emitSingleViewEvent(new l.$Jsb(U)),
										this.c.emitOutgoingEvent(new I.$6vb(U));
								}),
							);
					}
					setHiddenAreas(U, z) {
						this.I.setHiddenAreas(z, U);
						const F = this.I.getMergedRanges();
						if (F === this.J) return;
						this.J = F;
						const x = this.F();
						let H = !1;
						try {
							const q = this.c.beginEmitViewEvents();
							(H = this.m.setHiddenAreas(F)),
								H &&
									(q.emitViewEvent(new l.$Ksb()),
									q.emitViewEvent(new l.$Nsb()),
									q.emitViewEvent(new l.$Jsb(null)),
									this.n.onLineMappingChanged(q),
									this.q.onLineMappingChanged(),
									this.viewLayout.onFlushed(this.getLineCount()),
									this.viewLayout.onHeightMaybeChanged());
							const V = x.viewportStartModelPosition?.lineNumber;
							(V &&
								F.some(
									(K) => K.startLineNumber <= V && V <= K.endLineNumber,
								)) ||
								x.recoverViewportStart(
									this.coordinatesConverter,
									this.viewLayout,
								);
						} finally {
							this.c.endEmitViewEvents();
						}
						this.f.schedule(), H && this.c.emitOutgoingEvent(new I.$3vb());
					}
					getVisibleRangesPlusViewportAboveBelow() {
						const U = this.b.options.get(m.EditorOption.layoutInfo),
							z = this.b.options.get(m.EditorOption.lineHeight),
							F = Math.max(20, Math.round(U.height / z)),
							x = this.viewLayout.getLinesViewportData(),
							H = Math.max(1, x.completelyVisibleStartLineNumber - F),
							q = Math.min(
								this.getLineCount(),
								x.completelyVisibleEndLineNumber + F,
							);
						return this.L(
							new c.$iL(
								H,
								this.getLineMinColumn(H),
								q,
								this.getLineMaxColumn(q),
							),
						);
					}
					getVisibleRanges() {
						const U = this.getCompletelyVisibleViewRange();
						return this.L(U);
					}
					getHiddenAreas() {
						return this.m.getHiddenAreas();
					}
					L(U) {
						const z = this.coordinatesConverter.convertViewRangeToModelRange(U),
							F = this.m.getHiddenAreas();
						if (F.length === 0) return [z];
						const x = [];
						let H = 0,
							q = z.startLineNumber,
							V = z.startColumn;
						const G = z.endLineNumber,
							K = z.endColumn;
						for (let J = 0, W = F.length; J < W; J++) {
							const X = F[J].startLineNumber,
								Y = F[J].endLineNumber;
							Y < q ||
								X > G ||
								(q < X &&
									(x[H++] = new c.$iL(
										q,
										V,
										X - 1,
										this.model.getLineMaxColumn(X - 1),
									)),
								(q = Y + 1),
								(V = 1));
						}
						return (
							(q < G || (q === G && V < K)) && (x[H++] = new c.$iL(q, V, G, K)),
							x
						);
					}
					getCompletelyVisibleViewRange() {
						const U = this.viewLayout.getLinesViewportData(),
							z = U.completelyVisibleStartLineNumber,
							F = U.completelyVisibleEndLineNumber;
						return new c.$iL(
							z,
							this.getLineMinColumn(z),
							F,
							this.getLineMaxColumn(F),
						);
					}
					getCompletelyVisibleViewRangeAtScrollTop(U) {
						const z = this.viewLayout.getLinesViewportDataAtScrollTop(U),
							F = z.completelyVisibleStartLineNumber,
							x = z.completelyVisibleEndLineNumber;
						return new c.$iL(
							F,
							this.getLineMinColumn(F),
							x,
							this.getLineMaxColumn(x),
						);
					}
					saveState() {
						const U = this.viewLayout.saveState(),
							z = U.scrollTop,
							F = this.viewLayout.getLineNumberAtVerticalOffset(z),
							x = this.coordinatesConverter.convertViewPositionToModelPosition(
								new h.$hL(F, this.getLineMinColumn(F)),
							),
							H = this.viewLayout.getVerticalOffsetForLineNumber(F) - z;
						return {
							scrollLeft: U.scrollLeft,
							firstPosition: x,
							firstPositionDeltaTop: H,
						};
					}
					reduceRestoreState(U) {
						if (typeof U.firstPosition > "u") return this.M(U);
						const z = this.model.validatePosition(U.firstPosition),
							F =
								this.coordinatesConverter.convertModelPositionToViewPosition(z),
							x =
								this.viewLayout.getVerticalOffsetForLineNumber(F.lineNumber) -
								U.firstPositionDeltaTop;
						return { scrollLeft: U.scrollLeft, scrollTop: x };
					}
					M(U) {
						return {
							scrollLeft: U.scrollLeft,
							scrollTop: U.scrollTopWithoutViewZones,
						};
					}
					N() {
						return this.model.getOptions().tabSize;
					}
					getLineCount() {
						return this.m.getViewLineCount();
					}
					setViewport(U, z, F) {
						this.h.update(this, U);
					}
					getActiveIndentGuide(U, z, F) {
						return this.m.getActiveIndentGuide(U, z, F);
					}
					getLinesIndentGuides(U, z) {
						return this.m.getViewLinesIndentGuides(U, z);
					}
					getBracketGuidesInRangeByLine(U, z, F, x) {
						return this.m.getViewLinesBracketGuides(U, z, F, x);
					}
					getLineContent(U) {
						return this.m.getViewLineContent(U);
					}
					getLineLength(U) {
						return this.m.getViewLineLength(U);
					}
					getLineMinColumn(U) {
						return this.m.getViewLineMinColumn(U);
					}
					getLineMaxColumn(U) {
						return this.m.getViewLineMaxColumn(U);
					}
					getLineFirstNonWhitespaceColumn(U) {
						const z = d.$Bf(this.getLineContent(U));
						return z === -1 ? 0 : z + 1;
					}
					getLineLastNonWhitespaceColumn(U) {
						const z = d.$Df(this.getLineContent(U));
						return z === -1 ? 0 : z + 2;
					}
					getMinimapDecorationsInRange(U) {
						return this.q.getMinimapDecorationsInRange(U);
					}
					getDecorationsInViewport(U) {
						return this.q.getDecorationsViewportData(U).decorations;
					}
					getInjectedTextAt(U) {
						return this.m.getInjectedTextAt(U);
					}
					getViewportViewLineRenderingData(U, z) {
						const x =
							this.q.getDecorationsViewportData(U).inlineDecorations[
								z - U.startLineNumber
							];
						return this.O(z, x);
					}
					getViewLineRenderingData(U) {
						const z = this.q.getInlineDecorationsOnLine(U);
						return this.O(U, z);
					}
					O(U, z) {
						const F = this.model.mightContainRTL(),
							x = this.model.mightContainNonBasicASCII(),
							H = this.N(),
							q = this.m.getViewLineData(U);
						return (
							q.inlineDecorations &&
								(z = [
									...z,
									...q.inlineDecorations.map((V) => V.toInlineDecoration(U)),
								]),
							new v.$2sb(
								q.minColumn,
								q.maxColumn,
								q.content,
								q.continuesWithWrappedLine,
								F,
								x,
								q.tokens,
								z,
								H,
								q.startVisibleColumn,
							)
						);
					}
					getViewLineData(U) {
						return this.m.getViewLineData(U);
					}
					getMinimapLinesRenderingData(U, z, F) {
						const x = this.m.getViewLinesData(U, z, F);
						return new v.$Zsb(this.N(), x);
					}
					getAllOverviewRulerDecorations(U) {
						const z = this.model.getOverviewRulerDecorations(
								this.a,
								(0, m.filterValidationDecorations)(this.b.options),
							),
							F = new M();
						for (const x of z) {
							const H = x.options,
								q = H.overviewRuler;
							if (!q) continue;
							const V = q.position;
							if (V === 0) continue;
							const G = q.getColor(U.value),
								K = this.coordinatesConverter.getViewLineNumberOfModelPosition(
									x.range.startLineNumber,
									x.range.startColumn,
								),
								J = this.coordinatesConverter.getViewLineNumberOfModelPosition(
									x.range.endLineNumber,
									x.range.endColumn,
								);
							F.accept(G, H.zIndex, K, J, V);
						}
						return F.asArray;
					}
					P() {
						const U = this.model.getOverviewRulerDecorations();
						for (const z of U)
							z.options.overviewRuler?.invalidateCachedColor(),
								z.options.minimap?.invalidateCachedColor();
					}
					getValueInRange(U, z) {
						const F = this.coordinatesConverter.convertViewRangeToModelRange(U);
						return this.model.getValueInRange(F, z);
					}
					getValueLengthInRange(U, z) {
						const F = this.coordinatesConverter.convertViewRangeToModelRange(U);
						return this.model.getValueLengthInRange(F, z);
					}
					modifyPosition(U, z) {
						const F =
								this.coordinatesConverter.convertViewPositionToModelPosition(U),
							x = this.model.modifyPosition(F, z);
						return this.coordinatesConverter.convertModelPositionToViewPosition(
							x,
						);
					}
					deduceModelPositionRelativeToViewPosition(U, z, F) {
						const x =
							this.coordinatesConverter.convertViewPositionToModelPosition(U);
						this.model.getEOL().length === 2 && (z < 0 ? (z -= F) : (z += F));
						const q = this.model.getOffsetAt(x) + z;
						return this.model.getPositionAt(q);
					}
					getPlainTextToCopy(U, z, F) {
						const x = F
							? `\r
`
							: this.model.getEOL();
						(U = U.slice(0)), U.sort(c.$iL.compareRangesUsingStarts);
						let H = !1,
							q = !1;
						for (const G of U) G.isEmpty() ? (H = !0) : (q = !0);
						if (!q) {
							if (!z) return "";
							const G = U.map((J) => J.startLineNumber);
							let K = "";
							for (let J = 0; J < G.length; J++)
								(J > 0 && G[J - 1] === G[J]) ||
									(K += this.model.getLineContent(G[J]) + x);
							return K;
						}
						if (H && z) {
							const G = [];
							let K = 0;
							for (const J of U) {
								const W = J.startLineNumber;
								J.isEmpty()
									? W !== K && G.push(this.model.getLineContent(W))
									: G.push(
											this.model.getValueInRange(
												J,
												F
													? g.EndOfLinePreference.CRLF
													: g.EndOfLinePreference.TextDefined,
											),
										),
									(K = W);
							}
							return G.length === 1 ? G[0] : G;
						}
						const V = [];
						for (const G of U)
							G.isEmpty() ||
								V.push(
									this.model.getValueInRange(
										G,
										F
											? g.EndOfLinePreference.CRLF
											: g.EndOfLinePreference.TextDefined,
									),
								);
						return V.length === 1 ? V[0] : V;
					}
					getRichTextToCopy(U, z) {
						const F = this.model.getLanguageId();
						if (F === b.$0M || U.length !== 1) return null;
						let x = U[0];
						if (x.isEmpty()) {
							if (!z) return null;
							const J = x.startLineNumber;
							x = new c.$iL(
								J,
								this.model.getLineMinColumn(J),
								J,
								this.model.getLineMaxColumn(J),
							);
						}
						const H = this.b.options.get(m.EditorOption.fontInfo),
							q = this.R(),
							G =
								/[:;\\\/<>]/.test(H.fontFamily) ||
								H.fontFamily === m.EDITOR_FONT_DEFAULTS.fontFamily;
						let K;
						return (
							G
								? (K = m.EDITOR_FONT_DEFAULTS.fontFamily)
								: ((K = H.fontFamily),
									(K = K.replace(/"/g, "'")),
									/[,']/.test(K) || (/[+ ]/.test(K) && (K = `'${K}'`)),
									(K = `${K}, ${m.EDITOR_FONT_DEFAULTS.fontFamily}`)),
							{
								mode: F,
								html:
									`<div style="color: ${q[f.ColorId.DefaultForeground]};background-color: ${q[f.ColorId.DefaultBackground]};font-family: ${K};font-weight: ${H.fontWeight};font-size: ${H.fontSize}px;line-height: ${H.lineHeight}px;white-space: pre;">` +
									this.Q(x, q) +
									"</div>",
							}
						);
					}
					Q(U, z) {
						const F = U.startLineNumber,
							x = U.startColumn,
							H = U.endLineNumber,
							q = U.endColumn,
							V = this.N();
						let G = "";
						for (let K = F; K <= H; K++) {
							const J = this.model.tokenization.getLineTokens(K),
								W = J.getLineContent(),
								X = K === F ? x - 1 : 0,
								Y = K === H ? q - 1 : W.length;
							W === ""
								? (G += "<br>")
								: (G += (0, s.$dwb)(W, J.inflate(), z, X, Y, V, C.$l));
						}
						return G;
					}
					R() {
						const U = o.$lM.getColorMap(),
							z = ["#000000"];
						if (U)
							for (let F = 1, x = U.length; F < x; F++)
								z[F] = w.$UL.Format.CSS.formatHex(U[F]);
						return z;
					}
					getPrimaryCursorState() {
						return this.n.getPrimaryCursorState();
					}
					getLastAddedCursorIndex() {
						return this.n.getLastAddedCursorIndex();
					}
					getCursorStates() {
						return this.n.getCursorStates();
					}
					setCursorStates(U, z, F) {
						return this.U((x) => this.n.setStates(x, U, z, F));
					}
					getCursorColumnSelectData() {
						return this.n.getCursorColumnSelectData();
					}
					getCursorAutoClosedCharacters() {
						return this.n.getAutoClosedCharacters();
					}
					setCursorColumnSelectData(U) {
						this.n.setCursorColumnSelectData(U);
					}
					getPrevEditOperationType() {
						return this.n.getPrevEditOperationType();
					}
					setPrevEditOperationType(U) {
						this.n.setPrevEditOperationType(U);
					}
					getSelection() {
						return this.n.getSelection();
					}
					getSelections() {
						return this.n.getSelections();
					}
					getPosition() {
						return this.n.getPrimaryCursorState().modelState.position;
					}
					setSelections(U, z, F = a.CursorChangeReason.NotSet) {
						this.U((x) => this.n.setSelections(x, U, z, F));
					}
					saveCursorState() {
						return this.n.saveState();
					}
					restoreCursorState(U) {
						this.U((z) => this.n.restoreState(z, U));
					}
					S(U) {
						if (this.n.context.cursorConfig.readOnly) {
							this.c.emitOutgoingEvent(new I.$5vb());
							return;
						}
						this.U(U);
					}
					executeEdits(U, z, F) {
						this.S((x) => this.n.executeEdits(x, U, z, F));
					}
					startComposition() {
						this.S((U) => this.n.startComposition(U));
					}
					endComposition(U) {
						this.S((z) => this.n.endComposition(z, U));
					}
					type(U, z) {
						this.S((F) => this.n.type(F, U, z));
					}
					compositionType(U, z, F, x, H) {
						this.S((q) => this.n.compositionType(q, U, z, F, x, H));
					}
					paste(U, z, F, x) {
						this.S((H) => this.n.paste(H, U, z, F, x));
					}
					cut(U) {
						this.S((z) => this.n.cut(z, U));
					}
					executeCommand(U, z) {
						this.S((F) => this.n.executeCommand(F, U, z));
					}
					executeCommands(U, z) {
						this.S((F) => this.n.executeCommands(F, U, z));
					}
					revealAllCursors(U, z, F = !1) {
						this.U((x) =>
							this.n.revealAll(
								x,
								U,
								F,
								l.VerticalRevealType.Simple,
								z,
								n.ScrollType.Smooth,
							),
						);
					}
					revealPrimaryCursor(U, z, F = !1) {
						this.U((x) =>
							this.n.revealPrimary(
								x,
								U,
								F,
								l.VerticalRevealType.Simple,
								z,
								n.ScrollType.Smooth,
							),
						);
					}
					revealTopMostCursor(U) {
						const z = this.n.getTopMostViewPosition(),
							F = new c.$iL(z.lineNumber, z.column, z.lineNumber, z.column);
						this.U((x) =>
							x.emitViewEvent(
								new l.$Rsb(
									U,
									!1,
									F,
									null,
									l.VerticalRevealType.Simple,
									!0,
									n.ScrollType.Smooth,
								),
							),
						);
					}
					revealBottomMostCursor(U) {
						const z = this.n.getBottomMostViewPosition(),
							F = new c.$iL(z.lineNumber, z.column, z.lineNumber, z.column);
						this.U((x) =>
							x.emitViewEvent(
								new l.$Rsb(
									U,
									!1,
									F,
									null,
									l.VerticalRevealType.Simple,
									!0,
									n.ScrollType.Smooth,
								),
							),
						);
					}
					revealRange(U, z, F, x, H) {
						this.U((q) => q.emitViewEvent(new l.$Rsb(U, !1, F, null, x, z, H)));
					}
					changeWhitespace(U) {
						this.viewLayout.changeWhitespace(U) &&
							(this.c.emitSingleViewEvent(new l.$Wsb()),
							this.c.emitOutgoingEvent(new I.$2vb()));
					}
					U(U) {
						return this.w.batchChanges(() => {
							try {
								const z = this.c.beginEmitViewEvents();
								return U(z);
							} finally {
								this.c.endEmitViewEvents();
							}
						});
					}
					batchEvents(U) {
						this.U(() => {
							U();
						});
					}
					normalizePosition(U, z) {
						return this.m.normalizePosition(U, z);
					}
					getLineIndentColumn(U) {
						return this.m.getLineIndentColumn(U);
					}
				}
				e.$qwb = L;
				class D {
					static create(U) {
						const z = U._setTrackedRange(
							null,
							new c.$iL(1, 1, 1, 1),
							g.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						);
						return new D(U, 1, !1, z, 0);
					}
					get viewLineNumber() {
						return this.b;
					}
					get isValid() {
						return this.c;
					}
					get modelTrackedRange() {
						return this.f;
					}
					get startLineDelta() {
						return this.g;
					}
					constructor(U, z, F, x, H) {
						(this.a = U),
							(this.b = z),
							(this.c = F),
							(this.f = x),
							(this.g = H);
					}
					dispose() {
						this.a._setTrackedRange(
							this.f,
							null,
							g.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						);
					}
					update(U, z) {
						const F = U.coordinatesConverter.convertViewPositionToModelPosition(
								new h.$hL(z, U.getLineMinColumn(z)),
							),
							x = U.model._setTrackedRange(
								this.f,
								new c.$iL(F.lineNumber, F.column, F.lineNumber, F.column),
								g.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							),
							H = U.viewLayout.getVerticalOffsetForLineNumber(z),
							q = U.viewLayout.getCurrentScrollTop();
						(this.b = z), (this.c = !0), (this.f = x), (this.g = q - H);
					}
					invalidate() {
						this.c = !1;
					}
				}
				class M {
					constructor() {
						(this.a = Object.create(null)), (this.asArray = []);
					}
					accept(U, z, F, x, H) {
						const q = this.a[U];
						if (q) {
							const V = q.data,
								G = V[V.length - 3],
								K = V[V.length - 1];
							if (G === H && K + 1 >= F) {
								x > K && (V[V.length - 1] = x);
								return;
							}
							V.push(H, F, x);
						} else {
							const V = new v.$6sb(U, z, [H, F, x]);
							(this.a[U] = V), this.asArray.push(V);
						}
					}
				}
				class N {
					constructor() {
						(this.a = new Map()), (this.b = !1), (this.c = []);
					}
					setHiddenAreas(U, z) {
						const F = this.a.get(U);
						(F && R(F, z)) || (this.a.set(U, z), (this.b = !0));
					}
					getMergedRanges() {
						if (!this.b) return this.c;
						this.b = !1;
						const U = Array.from(this.a.values()).reduce((z, F) => A(z, F), []);
						return R(this.c, U) ? this.c : ((this.c = U), this.c);
					}
				}
				function A(B, U) {
					const z = [];
					let F = 0,
						x = 0;
					for (; F < B.length && x < U.length; ) {
						const H = B[F],
							q = U[x];
						if (H.endLineNumber < q.startLineNumber - 1) z.push(B[F++]);
						else if (q.endLineNumber < H.startLineNumber - 1) z.push(U[x++]);
						else {
							const V = Math.min(H.startLineNumber, q.startLineNumber),
								G = Math.max(H.endLineNumber, q.endLineNumber);
							z.push(new c.$iL(V, 1, G, 1)), F++, x++;
						}
					}
					for (; F < B.length; ) z.push(B[F++]);
					for (; x < U.length; ) z.push(U[x++]);
					return z;
				}
				function R(B, U) {
					if (B.length !== U.length) return !1;
					for (let z = 0; z < B.length; z++)
						if (!B[z].equalsRange(U[z])) return !1;
					return !0;
				}
				class O {
					constructor(U, z) {
						(this.viewportStartModelPosition = U), (this.startLineDelta = z);
					}
					recoverViewportStart(U, z) {
						if (!this.viewportStartModelPosition) return;
						const F = U.convertModelPositionToViewPosition(
								this.viewportStartModelPosition,
							),
							x = z.getVerticalOffsetForLineNumber(F.lineNumber);
						z.setScrollPosition(
							{ scrollTop: x + this.startLineDelta },
							n.ScrollType.Immediate,
						);
					}
				}
			},
		),
		