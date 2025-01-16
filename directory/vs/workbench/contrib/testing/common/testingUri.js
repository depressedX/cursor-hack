define(de[813], he([1, 0, 229, 9]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$3Kc = e.$2Kc = e.TestUriType = e.$1Kc = void 0),
				(e.$1Kc = "vscode-test-data");
			var w;
			(function (m) {
				(m[(m.TaskOutput = 0)] = "TaskOutput"),
					(m[(m.TestOutput = 1)] = "TestOutput"),
					(m[(m.ResultMessage = 2)] = "ResultMessage"),
					(m[(m.ResultActualOutput = 3)] = "ResultActualOutput"),
					(m[(m.ResultExpectedOutput = 4)] = "ResultExpectedOutput");
			})(w || (e.TestUriType = w = {}));
			var E;
			(function (m) {
				(m.Results = "results"),
					(m.AllOutput = "output"),
					(m.Messages = "message"),
					(m.Text = "TestFailureMessage"),
					(m.ActualOutput = "ActualOutput"),
					(m.ExpectedOutput = "ExpectedOutput");
			})(E || (E = {}));
			const C = (m) => {
				const r = m.authority,
					[u, ...a] = m.path.slice(1).split("/");
				if (a[0] === E.Messages) {
					const h = Number(a[1]),
						c = m.query,
						n = Number(a[2]),
						g = a[3];
					if (r === E.Results)
						switch (g) {
							case E.Text:
								return {
									resultId: u,
									taskIndex: h,
									testExtId: c,
									messageIndex: n,
									type: w.ResultMessage,
								};
							case E.ActualOutput:
								return {
									resultId: u,
									taskIndex: h,
									testExtId: c,
									messageIndex: n,
									type: w.ResultActualOutput,
								};
							case E.ExpectedOutput:
								return {
									resultId: u,
									taskIndex: h,
									testExtId: c,
									messageIndex: n,
									type: w.ResultExpectedOutput,
								};
							case E.Messages:
						}
				}
				if (a[0] === E.AllOutput) {
					const h = m.query,
						c = Number(a[1]);
					return h
						? { resultId: u, taskIndex: c, testExtId: h, type: w.TestOutput }
						: { resultId: u, taskIndex: c, type: w.TaskOutput };
				}
			};
			e.$2Kc = C;
			const d = (m) => {
				const r = { scheme: e.$1Kc, authority: E.Results };
				if (m.type === w.TaskOutput)
					return i.URI.from({
						...r,
						path: ["", m.resultId, E.AllOutput, m.taskIndex].join("/"),
					});
				const u = (a, ...h) =>
					i.URI.from({
						...r,
						query: m.testExtId,
						path: ["", a, E.Messages, ...h].join("/"),
					});
				switch (m.type) {
					case w.ResultActualOutput:
						return u(m.resultId, m.taskIndex, m.messageIndex, E.ActualOutput);
					case w.ResultExpectedOutput:
						return u(m.resultId, m.taskIndex, m.messageIndex, E.ExpectedOutput);
					case w.ResultMessage:
						return u(m.resultId, m.taskIndex, m.messageIndex, E.Text);
					case w.TestOutput:
						return i.URI.from({
							...r,
							query: m.testExtId,
							path: ["", m.resultId, E.AllOutput, m.taskIndex].join("/"),
						});
					default:
						(0, t.$kd)(m, "Invalid test uri");
				}
			};
			e.$3Kc = d;
		}),
		define(
			de[1002],
			he([1, 0, 221, 17, 259, 185, 813]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jLc =
						e.$iLc =
						e.$hLc =
						e.$gLc =
						e.$fLc =
						e.$eLc =
						e.$dLc =
						e.$cLc =
							void 0);
				const d = (g, p) => ({
					$mid: t.MarshalledId.TestMessageMenuArgs,
					test: E.InternalTestItem.serialize(g),
					message: E.ITestMessage.serialize(p),
				});
				e.$cLc = d;
				const m = (g) => g instanceof r && !!g.stack?.length;
				e.$dLc = m;
				class r {
					get controllerId() {
						return w.$k4.root(this.test.extId);
					}
					get isDiffable() {
						return (
							this.message.type === E.TestMessageType.Error &&
							E.ITestMessage.isDiffable(this.message)
						);
					}
					get contextValue() {
						return this.message.type === E.TestMessageType.Error
							? this.message.contextValue
							: void 0;
					}
					get stack() {
						return this.message.type === E.TestMessageType.Error &&
							this.message.stackTrace?.length
							? this.message.stackTrace
							: void 0;
					}
					constructor(p, o, f, b) {
						(this.result = p),
							(this.taskIndex = f),
							(this.messageIndex = b),
							(this.test = o.item);
						const s = o.tasks[f].messages;
						this.messageIndex = b;
						const l = {
							messageIndex: b,
							resultId: p.id,
							taskIndex: f,
							testExtId: o.item.extId,
						};
						(this.expectedUri = (0, C.$3Kc)({
							...l,
							type: C.TestUriType.ResultExpectedOutput,
						})),
							(this.actualUri = (0, C.$3Kc)({
								...l,
								type: C.TestUriType.ResultActualOutput,
							})),
							(this.messageUri = (0, C.$3Kc)({
								...l,
								type: C.TestUriType.ResultMessage,
							}));
						const y = (this.message = s[this.messageIndex]);
						(this.context = (0, e.$cLc)(o, y)),
							(this.revealLocation =
								y.location ??
								(o.item.uri && o.item.range
									? { uri: o.item.uri, range: i.$iL.lift(o.item.range) }
									: void 0));
					}
				}
				e.$eLc = r;
				class u {
					get controllerId() {
						return this.result.tasks[this.taskIndex].ctrlId;
					}
					constructor(p, o) {
						(this.result = p),
							(this.taskIndex = o),
							(this.outputUri = (0, C.$3Kc)({
								resultId: p.id,
								taskIndex: o,
								type: C.TestUriType.TaskOutput,
							}));
					}
				}
				e.$fLc = u;
				class a {
					get controllerId() {
						return w.$k4.root(this.test.item.extId);
					}
					constructor(p, o, f) {
						(this.result = p),
							(this.taskIndex = o),
							(this.test = f),
							(this.outputUri = (0, C.$3Kc)({
								resultId: this.result.id,
								taskIndex: this.taskIndex,
								testExtId: this.test.item.extId,
								type: C.TestUriType.TestOutput,
							})),
							(this.task = p.tasks[this.taskIndex]);
					}
				}
				e.$gLc = a;
				const h = (g, p) =>
					(g instanceof r && p instanceof r && g.message === p.message) ||
					(g instanceof u &&
						p instanceof u &&
						g.result === p.result &&
						g.taskIndex === p.taskIndex) ||
					(g instanceof a &&
						p instanceof a &&
						g.test === p.test &&
						g.taskIndex === p.taskIndex);
				e.$hLc = h;
				const c = (g, p) => {
					for (let o = 0; o < g.tasks.length; o++) {
						const f = g.tasks[o];
						for (let b = 0; b < f.messages.length; b++) {
							const s = p(f, f.messages[b], b, o);
							if (s !== void 0) return s;
						}
					}
				};
				e.$iLc = c;
				const n = (g) => {
					if (g instanceof r) return g.test;
					if (!(g instanceof u)) return g.test.item;
				};
				e.$jLc = n;
			},
		),
		define(
			de[3185],
			he([
				1, 0, 7, 114, 50, 24, 15, 6, 94, 274, 103, 27, 3, 59, 12, 26, 210, 47,
				56, 65, 38, 307, 64, 67, 4, 92, 11, 31, 10, 8, 49, 5, 63, 35, 68, 1236,
				1267, 470, 999, 443, 353, 259, 420, 421, 381, 379, 185, 1772, 812, 563,
				813,
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
				W,
				X,
				Y,
			) {
				"use strict";
				var ie;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Kc = e.$4Kc = void 0),
					(t = mt(t));
				const ne = 128,
					ee = 30,
					_ = y.GlyphMarginLane.Center;
				function te(ge, be) {
					const Ce = ge.listDiffEditors();
					for (const Le of Ce) if (Le.getOriginalEditor() === be) return !0;
					return !1;
				}
				class Q {
					constructor() {
						(this.c = new Map()), (this.f = new Map());
					}
					get size() {
						return this.c.size + this.f.size;
					}
					getForExactTests(be) {
						const Ce = be.sort().join("\0\0");
						return this.c.get(Ce);
					}
					getMessage(be) {
						return this.f.get(be);
					}
					removeMessage(be) {
						this.f.delete(be);
					}
					addMessage(be) {
						this.f.set(be.testMessage, be);
					}
					addTest(be) {
						const Ce = be.testIds.sort().join("\0\0");
						this.c.set(Ce, be);
					}
					getById(be) {
						for (const Ce of this.c.values()) if (Ce.id === be) return Ce;
						for (const Ce of this.f.values()) if (Ce.id === be) return Ce;
					}
					*[Symbol.iterator]() {
						for (const be of this.c.values()) yield be;
						for (const be of this.f.values()) yield be;
					}
				}
				let Z = class extends h.$1c {
					constructor(be, Ce, Le, Fe, Oe, xe) {
						super(),
							(this.j = Ce),
							(this.n = Le),
							(this.q = Fe),
							(this.r = Oe),
							(this.s = xe),
							(this.c = 0),
							(this.f = new d.$re()),
							(this.g = new c.$Gc()),
							(this.h = new WeakSet()),
							(this.onDidChange = this.f.event),
							be.registerDecorationType(
								"test-message-decoration",
								ve.decorationId,
								{},
								void 0,
							),
							this.D(xe.onModelRemoved((Ke) => this.g.delete(Ke.uri)));
						const He = this.D(new C.$Yh(() => this.u(), 100));
						this.D(
							this.n.onWillProcessDiff((Ke) => {
								for (const Je of Ke) {
									if (Je.op !== K.TestDiffOpType.DocumentSynced) continue;
									const Te = this.g.get(Je.uri);
									Te && (Te.rangeUpdateVersionId = Je.docv);
								}
								He.isScheduled() || He.schedule();
							}),
						),
							this.D(
								d.Event.any(
									this.q.onResultsChanged,
									this.q.onTestChanged,
									this.n.excluded.onTestExclusionsChanged,
									this.n.showInlineOutput.onDidChange,
									d.Event.filter(Ce.onDidChangeConfiguration, (Ke) =>
										Ke.affectsConfiguration(z.TestingConfigKeys.GutterEnabled),
									),
								)(() => {
									He.isScheduled() || He.schedule();
								}),
							),
							this.D(
								R.$aGc.registerGutterActionsGenerator((Ke, Je) => {
									const Te = Ke.editor.getModel(),
										Ee = se.get(Ke.editor);
									if (!Te || !Ee?.currentUri) return;
									const Ie = this.syncDecorations(Ee.currentUri);
									if (!Ie.size) return;
									const Be = Te.getLinesDecorations(
										Ke.lineNumber,
										Ke.lineNumber,
									);
									for (const { id: Se } of Be) {
										const ke = Ie.getById(Se);
										if (ke) {
											const { object: Ue } = ke.getContextMenuActions();
											for (const qe of Ue) Je.push(qe, "1_testing");
										}
									}
								}),
							);
					}
					invalidateResultMessage(be) {
						this.h.add(be), this.u();
					}
					syncDecorations(be) {
						const Ce = this.s.getModel(be);
						if (!Ce) return new Q();
						const Le = this.g.get(be);
						return Le &&
							Le.generation === this.c &&
							(Le.rangeUpdateVersionId === void 0 ||
								Le.rangeUpdateVersionId !== Ce.getVersionId())
							? Le.value
							: this.w(Ce);
					}
					getDecoratedTestPosition(be, Ce) {
						const Le = this.s.getModel(be);
						if (!Le) return;
						const Fe = u.Iterable.find(
							this.syncDecorations(be),
							(Oe) => Oe instanceof ye && Oe.isForTest(Ce),
						);
						if (Fe) return Le.getDecorationRange(Fe.id)?.getStartPosition();
					}
					u() {
						this.c++, this.f.fire();
					}
					updateDecorationsAlternateAction(be, Ce) {
						const Le = this.s.getModel(be),
							Fe = this.g.get(be);
						!Le ||
							!Fe ||
							Fe.isAlt === Ce ||
							((Fe.isAlt = Ce),
							Le.changeDecorations((Oe) => {
								for (const xe of Fe.value)
									xe instanceof ye &&
										xe.editorDecoration.alternate &&
										Oe.changeDecorationOptions(
											xe.id,
											Ce
												? xe.editorDecoration.alternate
												: xe.editorDecoration.options,
										);
							}));
					}
					w(be) {
						const Ce = (0, z.$RJc)(this.j, z.TestingConfigKeys.GutterEnabled),
							Le = be.uri.toString(),
							Fe = this.g.get(be.uri),
							Oe = Fe?.rangeUpdateVersionId === be.getVersionId(),
							xe = Fe?.value ?? new Q();
						return (
							be.changeDecorations((Ke) => {
								const Je = new Q(),
									Te = new J.$XKc();
								for (const Be of this.n.collection.getNodeByUrl(be.uri)) {
									if (!Be.item.range) continue;
									const Se = this.q.getStateById(Be.item.extId),
										ke = Be.item.range.startLineNumber;
									Te.push({ line: ke, id: "", test: Be, resultItem: Se?.[1] });
								}
								for (const [Be, Se] of Te.lines()) {
									const ke = Se.length > 1;
									let Ue = xe.getForExactTests(
										Se.map((qe) => qe.test.item.extId),
									);
									Ue &&
										Oe &&
										be.getDecorationRange(Ue.id)?.startLineNumber !== Be &&
										(Ue = void 0),
										Ue
											? (Ue.replaceOptions(Se, Ce) &&
													Ke.changeDecorationOptions(
														Ue.id,
														Ue.editorDecoration.options,
													),
												Je.addTest(Ue))
											: Je.addTest(
													ke
														? this.r.createInstance(ue, Se, Ce, be)
														: this.r.createInstance(
																fe,
																Se[0].test,
																Se[0].resultItem,
																be,
																Ce,
															),
												);
								}
								const Ee = new Set();
								(0, z.$RJc)(this.j, z.TestingConfigKeys.ShowAllMessages)
									? this.q.results.forEach((Be) =>
											this.y(Be, Ee, Le, xe, be, Je),
										)
									: this.y(this.q.results[0], Ee, Le, xe, be, Je);
								const Ie = new Set();
								for (const Be of Je)
									Be.id === ""
										? (Be.id = Ke.addDecoration(
												Be.editorDecoration.range,
												Be.editorDecoration.options,
											))
										: Ie.add(Be.id);
								for (const Be of xe)
									Ie.has(Be.id) || Ke.removeDecoration(Be.id);
								return (
									this.g.set(be.uri, {
										generation: this.c,
										rangeUpdateVersionId: Fe?.rangeUpdateVersionId,
										value: Je,
									}),
									Je
								);
							}) || xe
						);
					}
					y(be, Ce, Le, Fe, Oe, xe) {
						if (this.n.showInlineOutput.value && be instanceof q.$O4) {
							for (const He of be.tasks)
								for (const Ke of He.otherMessages)
									if (!this.h.has(Ke) && Ke.location?.uri.toString() === Le) {
										const Je =
											Fe.getMessage(Ke) ||
											this.r.createInstance(ve, Ke, void 0, Oe);
										xe.addMessage(Je);
									}
							for (const He of be.tests)
								for (let Ke = 0; Ke < He.tasks.length; Ke++) {
									const Je = He.tasks[Ke];
									for (const Te of [
										K.TestMessageType.Error,
										K.TestMessageType.Output,
									])
										for (let Ee = 0; Ee < Je.messages.length; Ee++) {
											const Ie = Je.messages[Ee];
											if (
												Ie.type !== Te ||
												this.h.has(Ie) ||
												Ie.location?.uri.toString() !== Le
											)
												continue;
											const Be = Ie.location.range.startLineNumber;
											if (!Ce.has(Be)) {
												const Se =
													Fe.getMessage(Ie) ||
													this.r.createInstance(
														ve,
														Ie,
														(0, Y.$3Kc)({
															type: Y.TestUriType.ResultActualOutput,
															messageIndex: Ee,
															taskIndex: Ke,
															resultId: be.id,
															testExtId: He.item.extId,
														}),
														Oe,
													);
												xe.addMessage(Se), Ce.add(Be);
											}
										}
								}
						}
					}
				};
				(e.$4Kc = Z),
					(e.$4Kc = Z =
						Ne(
							[
								j(0, b.$dtb),
								j(1, P.$gj),
								j(2, G.$sqc),
								j(3, V.$Kqc),
								j(4, D.$Li),
								j(5, $.$QO),
							],
							Z,
						));
				let se = class extends h.$1c {
					static get(be) {
						return be.getContribution(F.Testing.DecorationsContributionId);
					}
					get currentUri() {
						return this.c;
					}
					constructor(be, Ce, Le, Fe, Oe) {
						super(),
							(this.h = be),
							(this.j = Ce),
							(this.n = Le),
							(this.q = Fe),
							(this.r = Oe),
							(this.f = new h.$2c()),
							(this.g = new h.$2c()),
							Ce.registerDecorationType(
								"test-message-decoration",
								ve.decorationId,
								{},
								void 0,
								be,
							),
							this.s(be.getModel()?.uri),
							this.D(
								Fe.onDidChange(() => {
									this.c && Fe.syncDecorations(this.c);
								}),
							);
						const xe = t.getWindow(be.getDomNode());
						this.D(
							t.$0fb(xe, "keydown", (Ke) => {
								new i.$7fb(Ke).keyCode === a.KeyCode.Alt &&
									this.c &&
									Fe.updateDecorationsAlternateAction(this.c, !0);
							}),
						),
							this.D(
								t.$0fb(xe, "keyup", (Ke) => {
									new i.$7fb(Ke).keyCode === a.KeyCode.Alt &&
										this.c &&
										Fe.updateDecorationsAlternateAction(this.c, !1);
								}),
							),
							this.D(
								t.$0fb(xe, "blur", () => {
									this.c && Fe.updateDecorationsAlternateAction(this.c, !1);
								}),
							),
							this.D(
								this.h.onKeyUp((Ke) => {
									Ke.keyCode === a.KeyCode.Alt &&
										this.c &&
										Fe.updateDecorationsAlternateAction(this.c, !1);
								}),
							),
							this.D(
								this.h.onDidChangeModel((Ke) =>
									this.s(Ke.newModelUrl || void 0),
								),
							),
							this.D(
								this.h.onMouseDown((Ke) => {
									if (Ke.target.position && this.currentUri) {
										const Je =
											be
												.getModel()
												?.getLineDecorations(Ke.target.position.lineNumber) ??
											[];
										if (!Je.length) return;
										const Te = Fe.syncDecorations(this.currentUri);
										for (const { id: Ee } of Je)
											if (Te.getById(Ee)?.click(Ke)) {
												Ke.event.stopPropagation();
												return;
											}
									}
								}),
							),
							this.D(
								d.Event.accumulate(
									this.h.onDidChangeModelContent,
									0,
									this.B,
								)((Ke) => {
									const Je = be.getModel();
									if (!this.c || !Je) return;
									const Te = Fe.syncDecorations(this.c);
									if (Te.size)
										for (const Ee of Ke)
											for (const Ie of Ee.changes) {
												const Be = Je.getLinesDecorations(
													Ie.range.startLineNumber,
													Ie.range.endLineNumber,
												);
												for (const { id: Se } of Be) {
													const ke = Te.getById(Se);
													ke instanceof ve &&
														Fe.invalidateResultMessage(ke.testMessage);
												}
											}
								}),
							);
						const He = () => {
							this.h
								.getContainerDomNode()
								.style.setProperty(
									"--testMessageDecorationFontFamily",
									be.getOption(s.EditorOption.fontFamily),
								),
								this.h
									.getContainerDomNode()
									.style.setProperty(
										"--testMessageDecorationFontSize",
										`${be.getOption(s.EditorOption.fontSize)}px`,
									);
						};
						this.D(
							this.h.onDidChangeConfiguration((Ke) => {
								Ke.hasChanged(s.EditorOption.fontFamily) && He();
							}),
						),
							He();
					}
					s(be) {
						switch (be && (0, Y.$2Kc)(be)?.type) {
							case Y.TestUriType.ResultExpectedOutput:
								(this.f.value = new pe(this.h)), this.g.clear();
								break;
							case Y.TestUriType.ResultActualOutput:
								this.f.clear(), (this.g.value = new $e(this.h));
								break;
							default:
								this.f.clear(), this.g.clear();
						}
						te(this.j, this.h) && (be = void 0),
							(this.c = be),
							be &&
								(this.q.syncDecorations(be),
								(async () => {
									for await (const Ce of (0, G.$wqc)(this.n, this.r, be, !1))
										if (this.c !== be) break;
								})());
					}
				};
				(e.$5Kc = se),
					(e.$5Kc = se =
						Ne([j(1, b.$dtb), j(2, G.$sqc), j(3, J.$YKc), j(4, A.$Vl)], se));
				const re = (ge) => ({
						startLineNumber: ge.startLineNumber,
						endLineNumber: ge.startLineNumber,
						startColumn: ge.startColumn,
						endColumn: ge.startColumn,
					}),
					le = (ge, be, Ce, Le) => {
						const Fe = ge[0]?.item.range;
						if (!Fe)
							throw new Error(
								"Test decorations can only be created for tests with a range",
							);
						if (!Ce)
							return {
								range: re(Fe),
								options: {
									isWholeLine: !0,
									description: "run-test-decoration",
								},
							};
						let Oe = K.TestResultState.Unset;
						const xe = [];
						let He,
							Ke = !1;
						for (let Ue = 0; Ue < ge.length; Ue++) {
							const qe = ge[Ue],
								Ae = be[Ue],
								Me = Ae?.computedState ?? K.TestResultState.Unset;
							xe.length < 10 && xe.push((0, F.$zqc)(qe.item.label, Me)),
								(Oe = (0, X.$z4)(Oe, Me)),
								(Ke = Ke || !!Ae?.retired),
								!He &&
									Ae?.tasks.some((De) => De.messages.length) &&
									(He = qe.item.extId);
						}
						const Je = ge.length > 1 || ge[0].children.size > 0,
							Te =
								Oe === K.TestResultState.Unset
									? Je
										? B.$wKc
										: B.$uKc
									: B.$PKc.get(Oe),
							Ee =
								Le === z.DefaultGutterClickAction.Debug
									? Je
										? B.$wKc
										: B.$uKc
									: Je
										? B.$xKc
										: B.$yKc;
						let Ie,
							Be = "testing-run-glyph";
						Ke && (Be += " retired");
						const Se = {
								description: "run-test-decoration",
								showIfCollapsed: !0,
								get hoverMessage() {
									if (!Ie) {
										const Ue = (Ie = new m.$cl("", !0).appendText(
											xe.join(", ") + ".",
										));
										if (He) {
											const qe = encodeURIComponent(JSON.stringify([He]));
											Ue.appendMarkdown(
												` [${(0, v.localize)(10756, null)}](command:vscode.peekTestError?${qe})`,
											);
										}
									}
									return Ie;
								},
								glyphMargin: { position: _ },
								glyphMarginClassName: `${g.ThemeIcon.asClassName(Te)} ${Be}`,
								stickiness:
									y.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								zIndex: 1e4,
							},
							ke = {
								...Se,
								glyphMarginClassName: `${g.ThemeIcon.asClassName(Ee)} ${Be}`,
							};
						return { range: re(Fe), options: Se, alternate: ke };
					};
				var oe;
				(function (ge) {
					(ge.FontFamily = "testingDiffLensFontFamily"),
						(ge.FontFeatures = "testingDiffLensFontFeatures");
				})(oe || (oe = {}));
				class ae {
					constructor(be) {
						(this.g = be),
							(this.allowEditorOverflow = !1),
							(this.suppressMouseDown = !0),
							(this.c = t.$("span")),
							queueMicrotask(() => {
								this.h(), this.g.addContentWidget(this);
							});
					}
					h() {
						let be = this.g.getOption(s.EditorOption.codeLensFontSize),
							Ce;
						!be || be < 5
							? ((be = (this.g.getOption(s.EditorOption.fontSize) * 0.9) | 0),
								(Ce = this.g.getOption(s.EditorOption.lineHeight)))
							: (Ce =
									(be *
										Math.max(
											1.3,
											this.g.getOption(s.EditorOption.lineHeight) /
												this.g.getOption(s.EditorOption.fontSize),
										)) |
									0);
						const Le = this.g.getOption(s.EditorOption.fontInfo),
							Fe = this.c;
						Fe.classList.add("testing-diff-lens-widget"),
							(Fe.textContent = this.j()),
							(Fe.style.lineHeight = `${Ce}px`),
							(Fe.style.fontSize = `${be}px`),
							(Fe.style.fontFamily = `var(--${oe.FontFamily})`),
							(Fe.style.fontFeatureSettings = `var(--${oe.FontFeatures})`);
						const Oe = this.g.getContainerDomNode().style;
						Oe.setProperty(
							oe.FontFamily,
							this.g.getOption(s.EditorOption.codeLensFontFamily) ?? "inherit",
						),
							Oe.setProperty(oe.FontFeatures, Le.fontFeatureSettings),
							this.g.changeViewZones((xe) => {
								this.f && xe.removeZone(this.f),
									(this.f = xe.addZone({
										afterLineNumber: 0,
										afterColumn: p.Constants.MAX_SAFE_SMALL_INTEGER,
										domNode: document.createElement("div"),
										heightInPx: 20,
									}));
							});
					}
					getDomNode() {
						return this.c;
					}
					dispose() {
						this.g.changeViewZones((be) => {
							this.f && be.removeZone(this.f);
						}),
							this.g.removeContentWidget(this);
					}
					getPosition() {
						return {
							position: { column: 0, lineNumber: 0 },
							preference: [f.ContentWidgetPositionPreference.ABOVE],
						};
					}
				}
				class pe extends ae {
					getId() {
						return "expectedTestingLens";
					}
					j() {
						return (0, v.localize)(10757, null);
					}
				}
				class $e extends ae {
					getId() {
						return "actualTestingLens";
					}
					j() {
						return (0, v.localize)(10758, null);
					}
				}
				let ye = class {
					get line() {
						return this.editorDecoration.range.startLineNumber;
					}
					get testIds() {
						return this.c.map((be) => be.test.item.extId);
					}
					constructor(be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te, Ee) {
						(this.c = be),
							(this.f = Ce),
							(this.g = Le),
							(this.h = Fe),
							(this.j = Oe),
							(this.k = xe),
							(this.l = He),
							(this.n = Ke),
							(this.o = Je),
							(this.p = Te),
							(this.q = Ee),
							(this.id = ""),
							(this.displayedStates = be.map(
								(Ie) => Ie.resultItem?.computedState,
							)),
							(this.editorDecoration = le(
								be.map((Ie) => Ie.test),
								be.map((Ie) => Ie.resultItem),
								Ce,
								(0, z.$RJc)(
									this.n,
									z.TestingConfigKeys.DefaultGutterClickAction,
								),
							)),
							(this.editorDecoration.options.glyphMarginHoverMessage =
								new m.$cl().appendText(this.u()));
					}
					click(be) {
						if (
							be.target.type !== f.MouseTargetType.GUTTER_GLYPH_MARGIN ||
							be.target.detail.glyphMarginLane !== _ ||
							be.event.rightButton ||
							(n.$m && be.event.leftButton && be.event.ctrlKey)
						)
							return !1;
						const Ce = be.event.altKey;
						switch (
							(0, z.$RJc)(this.n, z.TestingConfigKeys.DefaultGutterClickAction)
						) {
							case z.DefaultGutterClickAction.ContextMenu:
								this.s(be);
								break;
							case z.DefaultGutterClickAction.Debug:
								this.r(
									Ce
										? K.TestRunProfileBitset.Run
										: K.TestRunProfileBitset.Debug,
								);
								break;
							case z.DefaultGutterClickAction.Coverage:
								this.r(
									Ce
										? K.TestRunProfileBitset.Debug
										: K.TestRunProfileBitset.Coverage,
								);
								break;
							case z.DefaultGutterClickAction.Run:
							default:
								this.r(
									Ce
										? K.TestRunProfileBitset.Debug
										: K.TestRunProfileBitset.Run,
								);
								break;
						}
						return !0;
					}
					replaceOptions(be, Ce) {
						const Le = be.map((xe) => xe.resultItem?.computedState);
						if (Ce === this.f && (0, E.$yb)(this.displayedStates, Le))
							return !1;
						(this.c = be), (this.displayedStates = Le), (this.f = Ce);
						const { options: Fe, alternate: Oe } = le(
							be.map((xe) => xe.test),
							be.map((xe) => xe.resultItem),
							Ce,
							(0, z.$RJc)(this.n, z.TestingConfigKeys.DefaultGutterClickAction),
						);
						return (
							(this.editorDecoration.options = Fe),
							(this.editorDecoration.alternate = Oe),
							(this.editorDecoration.options.glyphMarginHoverMessage =
								new m.$cl().appendText(this.u())),
							!0
						);
					}
					isForTest(be) {
						return this.c.some((Ce) => Ce.test.item.extId === be);
					}
					r(be) {
						return this.j.runTests({
							tests: (0, G.$yqc)(
								this.j.collection,
								this.c.map(({ test: Ce }) => Ce),
							),
							group: be,
						});
					}
					s(be) {
						this.h
							.listCodeEditors()
							.find((Le) => Le.getModel() === this.g)
							?.getContribution(R.$bGc.ID)
							?.show(be);
					}
					u() {
						switch (
							(0, z.$RJc)(this.n, z.TestingConfigKeys.DefaultGutterClickAction)
						) {
							case z.DefaultGutterClickAction.ContextMenu:
								return (0, v.localize)(10759, null);
							case z.DefaultGutterClickAction.Debug:
								return (0, v.localize)(10760, null);
							case z.DefaultGutterClickAction.Coverage:
								return (0, v.localize)(10761, null);
							case z.DefaultGutterClickAction.Run:
							default:
								return (0, v.localize)(10762, null);
						}
					}
					w(be, Ce) {
						const Le = [],
							Fe = this.o.capabilitiesForTest(be.item);
						[
							{
								bitset: K.TestRunProfileBitset.Run,
								label: (0, v.localize)(10763, null),
							},
							{
								bitset: K.TestRunProfileBitset.Debug,
								label: (0, v.localize)(10764, null),
							},
							{
								bitset: K.TestRunProfileBitset.Coverage,
								label: (0, v.localize)(10765, null),
							},
						].forEach(({ bitset: xe, label: He }) => {
							Fe & xe &&
								Le.push(
									new w.$rj(`testing.gutter.${xe}`, He, void 0, void 0, () =>
										this.j.runTests({ group: xe, tests: [be] }),
									),
								);
						}),
							Fe & K.TestRunProfileBitset.HasNonDefaultProfile &&
								Le.push(
									new w.$rj(
										"testing.runUsing",
										(0, v.localize)(10766, null),
										void 0,
										void 0,
										async () => {
											const xe = await this.l.executeCommand(
												"vscode.pickTestProfile",
												{ onlyForTest: be },
											);
											xe &&
												this.j.runResolvedTests({
													group: xe.group,
													targets: [
														{
															profileId: xe.profileId,
															controllerId: xe.controllerId,
															testIds: [be.item.extId],
														},
													],
												});
										},
									),
								),
							Ce &&
								(0, X.$v4)(Ce.computedState) &&
								Le.push(
									new w.$rj(
										"testing.gutter.peekFailure",
										(0, v.localize)(10767, null),
										void 0,
										void 0,
										() =>
											this.l.executeCommand(
												"vscode.peekTestError",
												be.item.extId,
											),
									),
								),
							Le.push(
								new w.$rj(
									"testing.gutter.reveal",
									(0, v.localize)(10768, null),
									void 0,
									void 0,
									() =>
										this.l.executeCommand(
											"_revealTestInExplorer",
											be.item.extId,
										),
								),
							);
						const Oe = this.x(be, Fe);
						return { object: w.$tj.join(Le, Oe), dispose() {} };
					}
					x(be, Ce) {
						const Le = this.p.createOverlay((0, O.$UKc)(be, Ce)),
							Fe = [],
							Oe = (0, G.$uqc)(this.j.collection, be.item.extId),
							xe = this.q.getMenuActions(I.$XX.TestItemGutter, Le, {
								shouldForwardArgs: !0,
								arg: Oe,
							});
						return (0, S.$Jyb)(xe, Fe), Fe;
					}
				};
				ye = Ne(
					[
						j(3, b.$dtb),
						j(4, G.$sqc),
						j(5, L.$Xxb),
						j(6, T.$ek),
						j(7, P.$gj),
						j(8, H.$Bqc),
						j(9, k.$6j),
						j(10, I.$YX),
					],
					ye,
				);
				let ue = class extends ye {
					constructor(be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te, Ee, Ie) {
						super(be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te, Ee), (this.y = Ie);
					}
					getContextMenuActions() {
						const be = [];
						[
							{
								bitset: K.TestRunProfileBitset.Run,
								label: (0, v.localize)(10769, null),
							},
							{
								bitset: K.TestRunProfileBitset.Coverage,
								label: (0, v.localize)(10770, null),
							},
							{
								bitset: K.TestRunProfileBitset.Debug,
								label: (0, v.localize)(10771, null),
							},
						].forEach(({ bitset: Je, label: Te }, Ee) => {
							this.c.some(
								({ test: Be }) => this.o.capabilitiesForTest(Be.item) & Je,
							) &&
								be.push(
									new w.$rj(`testing.gutter.run${Ee}`, Te, void 0, void 0, () =>
										this.r(Je),
									),
								);
						});
						const Ce = this.c.map((Je) => ({
								currentLabel: Je.test.item.label,
								testItem: Je,
								parent: x.$k4.fromString(Je.test.item.extId).parentId,
							})),
							Le = (Je) => {
								const Te = new Map();
								for (const Ee of Je)
									Te.set(Ee.currentLabel, (Te.get(Ee.currentLabel) || 0) + 1);
								return Je.filter((Ee) => Te.get(Ee.currentLabel) > 1);
							};
						let Fe,
							Oe = !0;
						for (; (Fe = Le(Ce)).length && Oe; )
							for (const Je of Fe)
								if (Je.parent) {
									const Te = this.j.collection.getNodeById(
										Je.parent.toString(),
									);
									(Je.currentLabel = Te?.item.label + " > " + Je.currentLabel),
										(Je.parent = Je.parent.parentId);
								} else Oe = !1;
						Ce.sort((Je, Te) => {
							const Ee = Je.testItem.test.item,
								Ie = Te.testItem.test.item;
							return (Ee.sortText || Ee.label).localeCompare(
								Ie.sortText || Ie.label,
							);
						});
						const xe = new h.$Zc();
						let He = Ce.map(({ currentLabel: Je, testItem: Te }) => {
							const Ee = this.w(Te.test, Te.resultItem);
							xe.add(Ee);
							let Ie = (0, r.$$k)(Je);
							const Be = Ie.indexOf(`
`);
							return (
								Be !== -1 && (Ie = Ie.slice(0, Be)),
								new w.$uj(Te.test.item.extId, Ie, Ee.object)
							);
						});
						const Ke = He.length - ee;
						return (
							Ke > 0 &&
								((He = He.slice(0, ee)),
								He.push(
									new w.$rj(
										"testing.gutter.overflow",
										(0, v.localize)(10772, null, Ke),
										void 0,
										void 0,
										() => this.z(Ce),
									),
								)),
							{ object: w.$tj.join(be, He), dispose: () => xe.dispose() }
						);
					}
					async z(be) {
						const Ce = (Oe, xe) =>
								new Promise((He) => {
									const Ke = new h.$Zc(),
										Je = Ke.add(this.y.createQuickPick());
									(Je.placeholder = xe),
										(Je.items = Oe),
										Ke.add(
											Je.onDidHide(() => {
												He(void 0), Ke.dispose();
											}),
										),
										Ke.add(
											Je.onDidAccept(() => {
												He(Je.selectedItems[0]), Ke.dispose();
											}),
										),
										Je.show();
								}),
							Le = await Ce(
								be.map(({ currentLabel: Oe, testItem: xe }) => ({
									label: Oe,
									test: xe.test,
									result: xe.resultItem,
								})),
								(0, v.localize)(10773, null),
							);
						if (!Le) return;
						const Fe = this.w(Le.test, Le.result);
						try {
							(await Ce(Fe.object, Le.label))?.run();
						} finally {
							Fe.dispose();
						}
					}
				};
				ue = Ne(
					[
						j(3, b.$dtb),
						j(4, G.$sqc),
						j(5, L.$Xxb),
						j(6, T.$ek),
						j(7, P.$gj),
						j(8, H.$Bqc),
						j(9, k.$6j),
						j(10, I.$YX),
						j(11, M.$DJ),
					],
					ue,
				);
				let fe = class extends ye {
					constructor(be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te, Ee, Ie) {
						super(
							[{ test: be, resultItem: Ce }],
							Fe,
							Le,
							Oe,
							xe,
							Ke,
							He,
							Je,
							Te,
							Ee,
							Ie,
						);
					}
					getContextMenuActions() {
						return this.w(this.c[0].test, this.c[0].resultItem);
					}
				};
				fe = Ne(
					[
						j(4, b.$dtb),
						j(5, G.$sqc),
						j(6, T.$ek),
						j(7, L.$Xxb),
						j(8, P.$gj),
						j(9, H.$Bqc),
						j(10, k.$6j),
						j(11, I.$YX),
					],
					fe,
				);
				const me = /\r?\n\s*/g;
				let ve = class {
					static {
						ie = this;
					}
					static {
						this.inlineClassName = "test-message-inline-content";
					}
					static {
						this.decorationId = `testmessage-${(0, o.$9g)()}`;
					}
					constructor(be, Ce, Le, Fe, Oe) {
						(this.testMessage = be),
							(this.f = Ce),
							(this.g = Fe),
							(this.id = ""),
							(this.c = `test-message-inline-content-id${(0, o.$9g)()}`),
							(this.location = be.location),
							(this.line = this.location.range.startLineNumber);
						const xe = be.type,
							He = be.message,
							Ke = Oe.resolveDecorationOptions(ie.decorationId, !0);
						(Ke.hoverMessage =
							typeof He == "string" ? new m.$cl().appendText(He) : He),
							(Ke.zIndex = 10),
							(Ke.className = `testing-inline-message-severity-${xe}`),
							(Ke.isWholeLine = !0),
							(Ke.stickiness =
								y.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges),
							(Ke.collapseOnReplaceEdit = !0);
						let Je = (0, U.$VKc)(He).replace(me, " ");
						Je.length > ne && (Je = Je.slice(0, ne - 1) + "\u2026"),
							(Ke.after = {
								content: " ".repeat(4) + Je,
								inlineClassName: `test-message-inline-content test-message-inline-content-s${xe} ${this.c} ${Ce ? "test-message-inline-content-clickable" : ""}`,
							}),
							(Ke.showIfCollapsed = !0);
						const Te = xe === K.TestMessageType.Error ? l.$9T : l.$$T;
						Te &&
							(Ke.overviewRuler = {
								color: (0, N.$jP)(Te),
								position: y.OverviewRulerLane.Right,
							});
						const Ee = Le.getLineLength(this.location.range.startLineNumber),
							Ie = Ee ? Ee + 1 : this.location.range.endColumn;
						this.editorDecoration = {
							options: Ke,
							range: {
								startLineNumber: this.location.range.startLineNumber,
								startColumn: Ie,
								endColumn: Ie,
								endLineNumber: this.location.range.startLineNumber,
							},
						};
					}
					click(be) {
						return (
							be.event.rightButton ||
								!this.f ||
								(be.target.element?.className.includes(this.c) &&
									this.g.peekUri(this.f)),
							!1
						);
					}
					getContextMenuActions() {
						return { object: [], dispose: () => {} };
					}
				};
				ve = ie = Ne([j(3, W.$ZKc), j(4, b.$dtb)], ve);
			},
		),
		define(
			de[3186],
			he([1, 0, 76, 3, 37, 61, 67, 42, 4, 381, 185, 813]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FMc = void 0);
				let h = class {
					constructor(n, g, p, o) {
						(this.a = g),
							(this.b = p),
							(this.c = o),
							n.registerTextModelContentProvider(a.$1Kc, this);
					}
					async provideTextContent(n) {
						const g = this.b.getModel(n);
						if (g && !g.isDisposed()) return g;
						const p = (0, a.$2Kc)(n);
						if (!p) return null;
						const o = this.c.getResult(p.resultId);
						if (!o) return null;
						if (p.type === a.TestUriType.TaskOutput) {
							const l = o.tasks[p.taskIndex],
								y = this.b.createModel("", null, n, !1),
								$ = (T) =>
									y.applyEdits([
										{
											range: {
												startColumn: 1,
												endColumn: 1,
												startLineNumber: 1 / 0,
												endLineNumber: 1 / 0,
											},
											text: T,
										},
									]),
								v = t.$Te.concat(l.output.buffers, l.output.length).toString();
							$((0, w.$9f)(v));
							let S = v.length > 0;
							const I = new i.$Zc();
							return (
								I.add(
									l.output.onDidWriteData((T) => {
										(S ||= T.byteLength > 0), $((0, w.$9f)(T.toString()));
									}),
								),
								l.output.endPromise.then(() => {
									I.isDisposed ||
										S ||
										($((0, m.localize)(10915, null)), I.dispose());
								}),
								y.onWillDispose(() => I.dispose()),
								y
							);
						}
						const f = o?.getStateById(p.testExtId);
						if (!f) return null;
						let b,
							s = null;
						switch (p.type) {
							case a.TestUriType.ResultActualOutput: {
								const l = f.tasks[p.taskIndex].messages[p.messageIndex];
								l?.type === u.TestMessageType.Error && (b = l.actual);
								break;
							}
							case a.TestUriType.TestOutput: {
								b = "";
								const l = o.tasks[p.taskIndex].output;
								for (const y of f.tasks[p.taskIndex].messages)
									y.type === u.TestMessageType.Output &&
										(b += (0, w.$9f)(
											l.getRange(y.offset, y.length).toString(),
										));
								break;
							}
							case a.TestUriType.ResultExpectedOutput: {
								const l = f.tasks[p.taskIndex].messages[p.messageIndex];
								l?.type === u.TestMessageType.Error && (b = l.expected);
								break;
							}
							case a.TestUriType.ResultMessage: {
								const l = f.tasks[p.taskIndex].messages[p.messageIndex];
								if (!l) break;
								if (l.type === u.TestMessageType.Output) {
									const y = o.tasks[p.taskIndex].output.getRange(
										l.offset,
										l.length,
									);
									b = (0, w.$9f)(y.toString());
								} else
									typeof l.message == "string"
										? (b = (0, w.$9f)(l.message))
										: ((b = l.message.value),
											(s = this.a.createById("markdown")));
							}
						}
						return b === void 0 ? null : this.b.createModel(b, s, n, !1);
					}
				};
				(e.$FMc = h),
					(e.$FMc = h =
						Ne([j(0, d.$MO), j(1, E.$nM), j(2, C.$QO), j(3, r.$Kqc)], h));
			},
		),
		