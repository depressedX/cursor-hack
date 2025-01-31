import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/event.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/json.js';
import '../../../../base/common/jsonEdit.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/numbers.js';
import '../../../../base/common/path.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uint.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/coreCommands.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/core/editOperation.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/core/wordHelper.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../editor/common/encodedTokenAttributes.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/services/languageFeatureDebounce.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/contrib/hover/browser/contentHoverController2.js';
import '../../../../editor/contrib/hover/browser/hoverOperation.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import './debugHover.js';
import './exceptionWidget.js';
import '../common/debug.js';
import '../common/debugModel.js';
import '../../../services/host/browser/host.js';
define(
			de[1906],
			he([
				1, 0, 7, 265, 114, 15, 33, 138, 29, 6, 187, 586, 27, 3, 201, 54, 12, 37,
				28, 210, 9, 498, 56, 38, 188, 48, 17, 409, 98, 171, 64, 391, 69, 67,
				448, 601, 4, 31, 10, 8, 5, 51, 68, 3828, 3579, 112, 300, 87,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*event*/,
				w /*keyboardEvent*/,
				E /*async*/,
				C /*cancellation*/,
				d /*decorators*/,
				m /*errors*/,
				r /*event*/,
				u /*json*/,
				a /*jsonEdit*/,
				h /*keyCodes*/,
				c /*lifecycle*/,
				n /*numbers*/,
				g /*path*/,
				p /*platform*/,
				o /*strings*/,
				f /*types*/,
				b /*uint*/,
				s /*uri*/,
				l /*coreCommands*/,
				y /*editorBrowser*/,
				$ /*editorOptions*/,
				v /*editOperation*/,
				S /*position*/,
				I /*range*/,
				T /*wordHelper*/,
				P /*editorCommon*/,
				k /*encodedTokenAttributes*/,
				L /*model*/,
				D /*languageFeatureDebounce*/,
				M /*languageFeatures*/,
				N /*model*/,
				A /*contentHoverController2*/,
				R /*hoverOperation*/,
				O /*nls*/,
				B /*commands*/,
				U /*configuration*/,
				z /*contextkey*/,
				F /*instantiation*/,
				x /*colorRegistry*/,
				H /*uriIdentity*/,
				q /*debugHover*/,
				V /*exceptionWidget*/,
				G /*debug*/,
				K /*debugModel*/,
				J /*host*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$IQc = e.$HQc = e.$GQc = void 0),
					(p = mt(p)),
					(o = mt(o)),
					(O = mt(O));
				const W = 100,
					X = 150,
					Y = 500,
					ie = 200;
				(e.$GQc = (0, x.$wP)(
					"editor.inlineValuesForeground",
					{
						dark: "#ffffff80",
						light: "#00000080",
						hcDark: "#ffffff80",
						hcLight: "#00000080",
					},
					O.localize(5495, null),
				)),
					(e.$HQc = (0, x.$wP)(
						"editor.inlineValuesBackground",
						"#ffc80033",
						O.localize(5496, null),
					));
				class ne {
					constructor(le, oe) {
						(this.column = le), (this.text = oe);
					}
				}
				function ee(re, le, oe = b.Constants.MAX_SAFE_SMALL_INTEGER) {
					return (
						le.length > X && (le = le.substring(0, X) + "..."),
						[
							{
								range: {
									startLineNumber: re,
									endLineNumber: re,
									startColumn: oe,
									endColumn: oe,
								},
								options: {
									description: "debug-inline-value-decoration-spacer",
									after: {
										content: o.$ig,
										cursorStops: L.InjectedTextCursorStops.None,
									},
									showIfCollapsed: !0,
								},
							},
							{
								range: {
									startLineNumber: re,
									endLineNumber: re,
									startColumn: oe,
									endColumn: oe,
								},
								options: {
									description: "debug-inline-value-decoration",
									after: {
										content: _(le),
										inlineClassName: "debug-inline-value",
										inlineClassNameAffectsLetterSpacing: !0,
										cursorStops: L.InjectedTextCursorStops.None,
									},
									showIfCollapsed: !0,
								},
							},
						]
					);
				}
				function _(re) {
					return re.replace(/[ \t]/g, o.$ig);
				}
				function te(re, le, oe, ae) {
					const pe = new Map();
					for (const ye of re)
						if ((pe.set(ye.name, ye.value), pe.size >= W)) break;
					const $e = new Map();
					return (
						pe.forEach((ye, ue) => {
							const fe = ae.get(ue);
							if (fe)
								for (const me of fe)
									le.some(
										(ve) => me >= ve.startLineNumber && me <= ve.endLineNumber,
									) &&
										($e.has(me) || $e.set(me, []),
										$e.get(me).indexOf(ue) === -1 && $e.get(me).push(ue));
						}),
						[...$e].map(([ye, ue]) => ({
							line: ye,
							variables: ue
								.sort((fe, me) => {
									const ve = oe.getLineContent(ye);
									return ve.indexOf(fe) - ve.indexOf(me);
								})
								.map((fe) => ({ name: fe, value: pe.get(fe) })),
						}))
					);
				}
				function Q(re, le, oe) {
					if (re.getLineLength(le) > Y) return;
					const pe = re.getLineContent(le);
					re.tokenization.forceTokenization(le);
					const $e = re.tokenization.getLineTokens(le);
					for (let ye = 0, ue = $e.getCount(); ye < ue; ye++)
						if ($e.getStandardTokenType(ye) === k.StandardTokenType.Other) {
							T.$TK.lastIndex = 0;
							const me = $e.getStartOffset(ye),
								ve = $e.getEndOffset(ye),
								ge = pe.substring(me, ve),
								be = T.$TK.exec(ge);
							if (be) {
								const Ce = be[0];
								oe.has(Ce) || oe.set(Ce, []), oe.get(Ce).push(le);
							}
						}
				}
				let Z = class {
					constructor(le, oe, ae, pe, $e, ye, ue, fe, me, ve) {
						(this.w = le),
							(this.x = oe),
							(this.y = ae),
							(this.z = pe),
							(this.A = $e),
							(this.B = ye),
							(this.C = ue),
							(this.D = me),
							(this.g = !1),
							(this.i = !1),
							(this.l = new c.$2c()),
							(this.m = !1),
							(this.o = this.w.createDecorationsCollection()),
							(this.p = new c.$Zc()),
							(this.u = new c.$2c()),
							(this.t = ve.for(me.inlineValuesProvider, "InlineValues", {
								min: ie,
							})),
							(this.d = this.y.createInstance(q.$EQc, this.w)),
							(this.c = [this.u, this.l, this.p]),
							this.E(),
							(this.h = G.$R5.bindTo(fe)),
							this.S();
					}
					E() {
						this.c.push(
							this.x
								.getViewModel()
								.onDidFocusStackFrame((le) => this.L(le.stackFrame)),
						),
							this.c.push(this.w.onMouseDown((le) => this.P(le))),
							this.c.push(this.w.onMouseUp(() => (this.g = !1))),
							this.c.push(this.w.onMouseMove((le) => this.Q(le))),
							this.c.push(
								this.w.onMouseLeave((le) => {
									const oe = this.d.getDomNode();
									if (!oe) return;
									const ae = oe.getBoundingClientRect();
									(le.event.posx < ae.left ||
										le.event.posx > ae.right ||
										le.event.posy < ae.top ||
										le.event.posy > ae.bottom) &&
										this.O();
								}),
							),
							this.c.push(this.w.onKeyDown((le) => this.R(le))),
							this.c.push(
								this.w.onDidChangeModelContent(() => {
									(this.F = void 0), this.V.schedule();
								}),
							),
							this.c.push(
								this.x
									.getViewModel()
									.onWillUpdateViews(() => this.V.schedule()),
							),
							this.c.push(
								this.x
									.getViewModel()
									.onDidEvaluateLazyExpression(() => this.V.schedule()),
							),
							this.c.push(
								this.w.onDidChangeModel(async () => {
									this.H(), this.S(), this.O(), (this.F = void 0);
									const le = this.x.getViewModel().focusedStackFrame;
									await this.W(le);
								}),
							),
							this.c.push(
								this.w.onDidScrollChange(() => {
									this.O();
									const le = this.w.getModel();
									le &&
										this.D.inlineValuesProvider.has(le) &&
										this.V.schedule();
								}),
							),
							this.c.push(
								this.A.onDidChangeConfiguration((le) => {
									le.affectsConfiguration("editor.hover") && this.G();
								}),
							),
							this.c.push(
								this.x.onDidChangeState((le) => {
									le !== G.State.Stopped && this.S();
								}),
							),
							this.G();
					}
					G() {
						const le = this.w.getModel();
						le &&
							(this.q = this.A.getValue("editor.hover", {
								resource: le.uri,
								overrideIdentifier: le.getLanguageId(),
							}));
					}
					H() {
						const le = this.x.getViewModel().focusedStackFrame,
							oe = this.w.getModel();
						oe && this.I(oe, le);
					}
					I(le, oe) {
						if (!oe || !this.C.extUri.isEqual(le.uri, oe.source.uri)) {
							this.l.clear();
							return;
						}
						const ae = this.w.getContainerDomNode().ownerDocument;
						this.l.value = (0, t.$0fb)(ae, "keydown", (pe) => {
							if (new w.$7fb(pe).keyCode === h.KeyCode.Alt) {
								this.m = !0;
								const ye = this.d.isVisible();
								this.d.hide(),
									this.u.clear(),
									ye && this.f && this.K(this.f.position, !1);
								const ue = new i.$mib(ae, "keyup"),
									fe = r.Event.any(
										this.B.onDidChangeFocus,
										ue.event,
									)((me) => {
										let ve;
										(0, t.$8gb)(me) && (ve = new w.$7fb(me)),
											(!ve || ve.keyCode === h.KeyCode.Alt) &&
												((this.m = !1), this.J(), fe.dispose(), ue.dispose());
									});
							}
						});
					}
					async showHover(le, oe, ae) {
						this.J();
						const pe = this.x.getViewModel().focusedStackFrame,
							$e = this.w.getModel();
						pe && $e && this.C.extUri.isEqual(pe.source.uri, $e.uri)
							? (await this.d.showAt(le, oe, ae)) ===
									q.ShowDebugHoverResult.NOT_AVAILABLE && this.K(le, oe)
							: this.K(le, oe);
					}
					J() {
						if (this.u.value || this.q?.enabled === !1) return;
						this.w.getContribution(A.$whc.ID)?.hideContentHover(),
							this.w.updateOptions({ hover: { enabled: !1 } }),
							(this.u.value = {
								dispose: () => {
									this.w.updateOptions({
										hover: { enabled: this.q?.enabled ?? !0 },
									});
								},
							});
					}
					K(le, oe) {
						const ae = this.w.getContribution(A.$whc.ID),
							pe = new I.$iL(
								le.lineNumber,
								le.column,
								le.lineNumber,
								le.column,
							);
						this.u.clear(),
							ae?.showContentHover(
								pe,
								R.HoverStartMode.Immediate,
								R.HoverStartSource.Mouse,
								oe,
							);
					}
					async L(le) {
						const oe = this.w.getModel();
						oe &&
							(this.I(oe, le),
							le && this.C.extUri.isEqual(le.source.uri, oe.uri)
								? await this.S()
								: this.O()),
							await this.W(le);
					}
					get M() {
						const le = this.q?.delay || 0,
							oe = (0, n.$Zm)(2 - (le - 300) / 600, 1, 2);
						return le * oe;
					}
					get N() {
						const le = new E.$Yh(() => {
							this.f &&
								!this.m &&
								this.showHover(this.f.position, !1, this.f.event);
						}, this.M);
						return this.c.push(le), le;
					}
					O() {
						this.d.willBeVisible() && this.d.hide(),
							this.N.cancel(),
							this.u.clear();
					}
					P(le) {
						(this.g = !0),
							!(
								le.target.type === y.MouseTargetType.CONTENT_WIDGET &&
								le.target.detail === q.$EQc.ID
							) && this.O();
					}
					Q(le) {
						if (this.x.state !== G.State.Stopped) return;
						const oe = le.target,
							ae = p.$m ? "metaKey" : "ctrlKey";
						this.m ||
							(oe.type === y.MouseTargetType.GUTTER_GLYPH_MARGIN
								? (this.u.clear(), (this.i = !0))
								: this.i && ((this.i = !1), this.G())),
							!(
								oe.type === y.MouseTargetType.CONTENT_WIDGET &&
								oe.detail === q.$EQc.ID &&
								!le.event[ae] &&
								((this.q?.sticky ?? !0) || this.d.isShowingComplexValue)
							) &&
								(oe.type === y.MouseTargetType.CONTENT_TEXT
									? oe.position &&
										!S.$hL.equals(oe.position, this.f?.position || null) &&
										!this.d.isInSafeTriangle(le.event.posx, le.event.posy) &&
										((this.f = { position: oe.position, event: le.event }),
										this.J(),
										this.N.schedule(this.M))
									: this.g || this.O());
					}
					R(le) {
						const oe = p.$m ? h.KeyCode.Meta : h.KeyCode.Ctrl;
						le.keyCode !== oe && le.keyCode !== h.KeyCode.Alt && this.O();
					}
					async S() {
						const le = this.w.getModel(),
							oe = this.x.getViewModel().focusedStackFrame,
							ae = oe ? oe.thread.getCallStack() : null;
						if (!le || !oe || !ae || ae.length === 0) {
							this.closeExceptionWidget();
							return;
						}
						const pe = ae.find(
							(ye) =>
								!!(
									ye &&
									ye.source &&
									ye.source.available &&
									ye.source.presentationHint !== "deemphasize"
								),
						);
						if (!pe || pe !== oe) {
							this.closeExceptionWidget();
							return;
						}
						const $e = this.C.extUri.isEqual(pe.source.uri, le.uri);
						if (this.j && !$e) this.closeExceptionWidget();
						else if ($e) {
							const ye = await oe.thread.exceptionInfo;
							ye &&
								this.T(
									ye,
									this.x.getViewModel().focusedSession,
									pe.range.startLineNumber,
									pe.range.startColumn,
								);
						}
					}
					T(le, oe, ae, pe) {
						this.j && this.j.dispose(),
							(this.j = this.y.createInstance(V.$FQc, this.w, le, oe)),
							this.j.show({ lineNumber: ae, column: pe }, 0),
							this.j.focus(),
							this.w.revealRangeInCenter({
								startLineNumber: ae,
								startColumn: pe,
								endLineNumber: ae,
								endColumn: pe,
							}),
							this.h.set(!0);
					}
					closeExceptionWidget() {
						if (this.j) {
							const le = this.j.hasFocus();
							this.j.dispose(),
								(this.j = void 0),
								this.h.set(!1),
								le && this.w.focus();
						}
					}
					async addLaunchConfiguration() {
						const le = this.w.getModel();
						if (!le) return;
						let oe, ae;
						const pe = () => {
							let ye = 0;
							(0, u.$ko)(le.getValue(), {
								onObjectProperty: (ue) => {
									ae = ue;
								},
								onArrayBegin: (ue) => {
									ae === "configurations" &&
										ye === 0 &&
										(oe = le.getPositionAt(ue + 1)),
										ye++;
								},
								onArrayEnd: () => {
									ye--;
								},
							});
						};
						if ((pe(), !oe)) {
							const { tabSize: ye, insertSpaces: ue } = le.getOptions(),
								fe = le.getEOL(),
								me =
									(0, g.$sc)(le.uri.fsPath) === "launch.json"
										? (0, a.$ro)(le.getValue(), ["configurations"], [], {
												tabSize: ye,
												insertSpaces: ue,
												eol: fe,
											})[0]
										: (0, a.$ro)(
												le.getValue(),
												["launch"],
												{ configurations: [] },
												{ tabSize: ye, insertSpaces: ue, eol: fe },
											)[0],
								ve = le.getPositionAt(me.offset),
								ge = ve.lineNumber,
								be = new I.$iL(ge, ve.column, ge, le.getLineMaxColumn(ge));
							le.pushEditOperations(
								null,
								[v.$jL.replace(be, me.content)],
								() => null,
							),
								pe();
						}
						if (!oe) return;
						this.w.focus(),
							await ((ye) => (
								le.getLineLastNonWhitespaceColumn(ye.lineNumber) > ye.column &&
									(this.w.setPosition(ye),
									l.CoreEditingCommands.LineBreakInsert.runEditorCommand(
										null,
										this.w,
										null,
									)),
								this.w.setPosition(ye),
								this.z.executeCommand("editor.action.insertLineAfter")
							))(oe),
							await this.z.executeCommand("editor.action.triggerSuggest");
					}
					get U() {
						return new E.$Yh(() => {
							this.p.clear(), this.o.clear();
						}, 100);
					}
					get V() {
						const le = this.w.getModel();
						return new E.$Yh(
							async () => await this.W(this.x.getViewModel().focusedStackFrame),
							le ? this.t.get(le) : ie,
						);
					}
					async W(le) {
						const oe = "{0} = {1}",
							ae = ", ",
							pe = this.w.getModel(),
							$e = this.A.getValue("debug").inlineValues;
						if (
							!(
								$e === !0 ||
								$e === "on" ||
								($e === "auto" && pe && this.D.inlineValuesProvider.has(pe))
							) ||
							!pe ||
							!le ||
							pe.uri.toString() !== le.source.uri.toString()
						) {
							this.U.isScheduled() || this.U.schedule();
							return;
						}
						this.U.cancel(), this.p.clear();
						const ue = this.w.getVisibleRangesPlusViewportAboveBelow();
						let fe;
						const me = new C.$Ce();
						if (
							(this.p.add((0, c.$Yc)(() => me.dispose(!0))),
							this.D.inlineValuesProvider.has(pe))
						) {
							const ge = async (xe, He) => {
									const Ke = await le.getMostSpecificScopes(le.range),
										Je = He ? xe : xe.toLowerCase();
									for (const Te of Ke) {
										const Ie = (await Te.getChildren()).find((Be) =>
											He ? Be.name === Je : Be.name.toLowerCase() === Je,
										);
										if (Ie) return Ie.value;
									}
								},
								be = {
									frameId: le.frameId,
									stoppedLocation: new I.$iL(
										le.range.startLineNumber,
										le.range.startColumn + 1,
										le.range.endLineNumber,
										le.range.endColumn + 1,
									),
								},
								Ce = this.D.inlineValuesProvider.ordered(pe).reverse();
							fe = [];
							const Le = new Map(),
								Fe = Ce.flatMap((xe) =>
									ue.map((He) =>
										Promise.resolve(
											xe.provideInlineValues(pe, He, be, me.token),
										).then(
											async (Ke) => {
												if (Ke)
													for (const Je of Ke) {
														let Te;
														switch (Je.type) {
															case "text":
																Te = Je.text;
																break;
															case "variable": {
																let Ee = Je.variableName;
																Ee ||
																	(Ee = pe
																		.getLineContent(Je.range.startLineNumber)
																		.substring(
																			Je.range.startColumn - 1,
																			Je.range.endColumn - 1,
																		));
																const Ie = await ge(Ee, Je.caseSensitiveLookup);
																Ie && (Te = o.$kf(oe, Ee, Ie));
																break;
															}
															case "expression": {
																let Ee = Je.expression;
																if (
																	(Ee ||
																		(Ee = pe
																			.getLineContent(Je.range.startLineNumber)
																			.substring(
																				Je.range.startColumn - 1,
																				Je.range.endColumn - 1,
																			)),
																	Ee)
																) {
																	const Ie = new K.$J3(Ee);
																	await Ie.evaluate(
																		le.thread.session,
																		le,
																		"watch",
																		!0,
																	),
																		Ie.available &&
																			(Te = o.$kf(oe, Ee, Ie.value));
																}
																break;
															}
														}
														if (Te) {
															const Ee = Je.range.startLineNumber;
															let Ie = Le.get(Ee);
															Ie || ((Ie = []), Le.set(Ee, Ie)),
																Ie.some((Be) => Be.text === Te) ||
																	Ie.push(new ne(Je.range.startColumn, Te));
														}
													}
											},
											(Ke) => {
												(0, m.$5)(Ke);
											},
										),
									),
								),
								Oe = Date.now();
							await Promise.all(Fe),
								(this.V.delay = this.t.update(pe, Date.now() - Oe)),
								Le.forEach((xe, He) => {
									if (xe.length > 0) {
										xe = xe.sort((Je, Te) => Je.column - Te.column);
										const Ke = xe.map((Je) => Je.text).join(ae);
										fe.push(...ee(He, Ke));
									}
								});
						} else {
							const ge = await le.getMostSpecificScopes(le.range),
								be = await Promise.all(
									ge.map(async (Le) => ({
										scope: Le,
										variables: await Le.getChildren(),
									})),
								),
								Ce = new Map();
							for (const { scope: Le, variables: Fe } of be) {
								let Oe = new I.$iL(
									0,
									0,
									le.range.startLineNumber,
									le.range.startColumn,
								);
								Le.range &&
									(Oe = Oe.setStartPosition(
										Le.range.startLineNumber,
										Le.range.startColumn,
									));
								const xe = ue.map((Ke) => Ke.intersectRanges(Oe)).filter(f.$tg);
								this.F ??= new se(pe);
								for (const Ke of xe) this.F.ensureRangePopulated(Ke);
								const He = te(Fe, xe, pe, this.F.value);
								for (const { line: Ke, variables: Je } of He) {
									let Te = Ce.get(Ke);
									Te || ((Te = new Map()), Ce.set(Ke, Te));
									for (const { name: Ee, value: Ie } of Je)
										Te.has(Ee) || Te.set(Ee, Ie);
								}
							}
							fe = [...Ce.entries()].flatMap(([Le, Fe]) =>
								ee(Le, [...Fe].map(([Oe, xe]) => `${Oe} = ${xe}`).join(", ")),
							);
						}
						if (me.token.isCancellationRequested) return;
						let ve;
						if (this.w.getOption($.EditorOption.wordWrap) !== "off") {
							const ge = this.w.getPosition();
							ge &&
								this.w
									.getVisibleRanges()
									.some((be) => be.containsPosition(ge)) &&
								(ve = {
									position: ge,
									top: this.w.getTopForPosition(ge.lineNumber, ge.column),
								});
						}
						if ((this.o.set(fe), ve)) {
							const ge = this.w.getTopForPosition(
								ve.position.lineNumber,
								ve.position.column,
							);
							this.w.setScrollTop(
								this.w.getScrollTop() - (ve.top - ge),
								P.ScrollType.Immediate,
							);
						}
					}
					dispose() {
						this.d && this.d.dispose(),
							this.k && this.k.dispose(),
							(this.c = (0, c.$Vc)(this.c));
					}
				};
				(e.$IQc = Z),
					Ne([d.$ei], Z.prototype, "N", null),
					Ne([d.$ei], Z.prototype, "U", null),
					Ne([d.$ei], Z.prototype, "V", null),
					(e.$IQc = Z =
						Ne(
							[
								j(1, G.$75),
								j(2, F.$Li),
								j(3, B.$ek),
								j(4, U.$gj),
								j(5, J.$asb),
								j(6, H.$Vl),
								j(7, z.$6j),
								j(8, M.$k3),
								j(9, D.$PBb),
							],
							Z,
						));
				class se {
					constructor(le) {
						(this.d = le),
							(this.value = new Map()),
							(this.c = new Uint8Array(Math.ceil(le.getLineCount() / 8)));
					}
					ensureRangePopulated(le) {
						for (let oe = le.startLineNumber; oe <= le.endLineNumber; oe++) {
							const ae = oe >> 3,
								pe = 1 << (oe & 7);
							this.c[ae] & pe ||
								(Q(this.d, oe, this.value), (this.c[ae] |= pe));
						}
					}
				}
				B.$fk.registerCommand(
					"_executeInlineValueProvider",
					async (re, le, oe, ae) => {
						if (
							((0, f.$vg)(s.URI.isUri(le)),
							(0, f.$vg)(I.$iL.isIRange(oe)),
							!ae ||
								typeof ae.frameId != "number" ||
								!I.$iL.isIRange(ae.stoppedLocation))
						)
							throw (0, m.$$)("context");
						const pe = re.get(N.$QO).getModel(le);
						if (!pe) throw (0, m.$$)("uri");
						const $e = I.$iL.lift(oe),
							{ inlineValuesProvider: ye } = re.get(M.$k3),
							ue = ye.ordered(pe);
						return (
							await Promise.all(
								ue.map((me) =>
									me.provideInlineValues(pe, $e, ae, C.CancellationToken.None),
								),
							)
						)
							.flat()
							.filter(f.$tg);
					},
				);
			},
		)
