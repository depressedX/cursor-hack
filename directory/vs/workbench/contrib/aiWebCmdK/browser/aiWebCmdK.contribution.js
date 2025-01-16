define(de[3945], he([1, 0, 1346]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			const t = !0;
		}),
		define(
			de[1929],
			he([
				1, 0, 148, 76, 3, 9, 31, 22, 20, 5, 45, 44, 89, 3002, 554, 107, 66, 18,
				241, 118, 56, 25, 516,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c9b = e.$b9b = void 0),
					(e.$b9b = (0, r.$Mi)("agentDebuggerService"));
				let $ = class extends w.$1c {
					constructor(S, I, T, P, k, L, D, M, N, A, R, O) {
						super(),
							(this.f = S),
							(this.g = I),
							(this.h = T),
							(this.j = P),
							(this.m = k),
							(this.n = L),
							(this.q = D),
							(this.r = M),
							(this.s = N),
							(this.t = A),
							(this.u = R),
							(this.w = O),
							(this.y = void 0),
							(this.c = (B, U) => {
								this.recordTask(B, U);
							}),
							this.f.registerAgentDebuggerRecorder(this.c);
					}
					dispose() {
						this.f.unregisterAgentDebuggerRecorder(this.c), super.dispose();
					}
					async recordTask(S, I) {
						if (!!1) return;
						if (
							this.g.applicationUserPersistentStorage.agentDebuggerState
								.isRecordingTasks === !1
						) {
							console.log(
								"AgentDebuggerService: Not recording tasks because it is disabled in the reactive storage service.",
							);
							return;
						}
						console.log("AgentDebuggerService: Recording task: " + S.taskId);
						const P = await this.h.createTerminal({
								config: {
									isFeatureTerminal: !0,
									isTransient: !0,
									hideFromUser: !0,
								},
							}),
							k = await this.executeAndGetFirstLine(
								P,
								"echo $EVERYSPHERE_ROOT",
							);
						if (k.length < 10) throw new Error("EVERYSPHERE_ROOT is not set");
						await this.m.executeCommand(n.$cVb);
						const M = this.n
								.getGroups(p.GroupsOrder.GRID_APPEARANCE)
								.map((R) => R.activeEditor)
								.map((R) => (R ? a.$A1.getOriginalUri(R) : null))
								.filter((R) => R != null),
							N = {
								instruction: I.toJson(),
								openFiles: M.map((R) => this.w.asRelativePath(R)),
								timeId: new Date().toISOString().replace(/[:.]/g, "-"),
								unixTimestampInMs: Date.now().toString(),
							},
							A = `${k}/eval/eval-agent/recordedTasks/dumps/${N.timeId}/taskInfo.json`;
						await this.q.writeFile(
							E.URI.file(A),
							i.$Te.fromString(JSON.stringify(N, null, 4)),
						),
							P.sendText(`${k}/scripts/record-task.sh ${N.timeId}`, !0);
					}
					async executeAndGetFirstLine(S, I) {
						return new Promise((T, P) => {
							let k = [],
								L = {
									current: setTimeout(() => {
										P("Timeout");
									}, 1e3),
								};
							const D = S.onLineData((N) => {
								clearTimeout(L.current),
									k.push(N),
									(L.current = setTimeout(() => {
										T(N), D.dispose(), M.dispose();
									}, 1e3));
							});
							S.sendText(I, !0);
							const M = S.onExit((N) => {
								D.dispose(),
									N === void 0
										? P(new Error("Could not execute command"))
										: T(
												k.join(`
`),
											),
									M.dispose();
							});
						});
					}
					async getRecordedTaskInfos(S) {
						if (S?.useCached && this.y) return this.y;
						if (!!1) return [];
						const T = await this.h.createTerminal({
								config: {
									isFeatureTerminal: !0,
									isTransient: !0,
									hideFromUser: !0,
								},
							}),
							P = await this.executeAndGetFirstLine(
								T,
								"echo $EVERYSPHERE_ROOT",
							);
						if (P.length < 10) throw new Error("EVERYSPHERE_ROOT is not set");
						const k = `${P}/eval/eval-agent/recordedTasks`,
							L = await this.q.resolve(E.URI.file(k));
						if (!L.children) return [];
						const D = L.children.filter((B) => B.name !== "dumps"),
							M = await Promise.all(
								D.map(async (B) => {
									const U = `${k}/${B.name}/taskInfo.json`,
										z = await this.q.resolve(E.URI.file(U)),
										F = await this.q.readFile(z.resource),
										x = JSON.parse(F.value.toString());
									return (x.id = B.name), (x.favorite = !0), x;
								}),
							),
							N = `${k}/dumps`,
							A = await this.q.resolve(E.URI.file(N));
						if (!A.children) return M;
						const R = A.children,
							O = await Promise.all(
								R.map(async (B) => {
									const U = `${N}/${B.name}/taskInfo.json`,
										z = await this.q.resolve(E.URI.file(U)),
										F = await this.q.readFile(z.resource),
										x = JSON.parse(F.value.toString());
									return (x.id = B.name), (x.favorite = !1), x;
								}),
							);
						return (
							O.sort(
								(B, U) =>
									parseInt(U.unixTimestampInMs) - parseInt(B.unixTimestampInMs),
							),
							(this.y = M.concat(O)),
							this.y
						);
					}
					async checkoutRecordedTask(S) {
						if (!!1) return;
						const T = await this.h.createTerminal({
								config: {
									isFeatureTerminal: !0,
									isTransient: !0,
									hideFromUser: !0,
								},
							}),
							[P, k] = (
								await this.executeAndGetFirstLine(
									T,
									'echo "$EVERYSPHERE_ROOT;$EVERYSPHERE_CLONE_ROOT"',
								)
							)
								.split(";")
								.map((F) => F.trim())
								.slice(0, 2);
						if (P.length < 10) throw new Error("EVERYSPHERE_ROOT is not set");
						if (k.length < 10)
							throw new Error("EVERYSPHERE_CLONE_ROOT is not set");
						if ((await T.getCwd()) !== k) {
							await this.m.executeCommand(
								"vscode.openFolder",
								E.URI.file(k),
								!0,
							);
							return;
						}
						await this.m.executeCommand(n.$cVb);
						const D = this.n.getGroups(p.GroupsOrder.GRID_APPEARANCE);
						D.forEach((F) => {
							F.closeAllEditors();
						});
						const M = S.openFiles
								.map((F, x) => this.n.addGroup(D[0], p.GroupDirection.RIGHT))
								.reverse(),
							N = t.$eI.fromJson(S.instruction),
							A = N.currentFile?.relativeWorkspacePath,
							R = S.openFiles;
						let O = -1;
						const B = R.map(async (F, x) => {
							const H = await this.t.getMagicURIForText(F),
								q = await this.r.openEditor({ resource: H }, M[x].id);
							return F === A && (O = x), q;
						});
						T.sendText(`${P}/scripts/checkout-task.sh ${S.id}`, !0);
						const U = await Promise.all(B);
						if (O !== -1) {
							const F = N.currentFile?.selection;
							if (F && F.endPosition && F.startPosition) {
								const H = U[O]?.getControl();
								H &&
									(0, s.$0sb)(H) &&
									(H.setSelection({
										startLineNumber: F.startPosition.line,
										startColumn: F.startPosition.column,
										endLineNumber: F.endPosition.line,
										endColumn: F.endPosition.column,
									}),
									this.n.activateGroup(M[O].id));
							}
						}
						this.m.executeCommand("aitasks.focus").then(() => {}),
							this.s
								.getViewWithId(c.IAitasksPaneConstants.VIEW_ID)
								?.newTaskWithInstruction(N, { autostart: !0 });
					}
				};
				(e.$c9b = $),
					(e.$c9b = $ =
						Ne(
							[
								j(0, y.$a9b),
								j(1, u.$0zb),
								j(2, g.$iIb),
								j(3, g.$lIb),
								j(4, C.$ek),
								j(5, p.$EY),
								j(6, d.$ll),
								j(7, o.$IY),
								j(8, h.$HMb),
								j(9, f.$q8b),
								j(10, b.$Nfc),
								j(11, l.$Vi),
							],
							$,
						)),
					(0, m.$lK)(e.$b9b, $, m.InstantiationType.Delayed);
			},
		),
		define(
			de[1930],
			he([1, 0, 5, 350, 20, 118, 3, 83, 42, 25, 148]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sec = e.$rec = void 0),
					(e.$rec = (0, t.$Mi)("autoSelectService"));
				const a = ["line", "group", "folding"];
				let h = class extends C.$1c {
					constructor(n, g, p) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.m = (o) => {
								const f = new Set();
								return o.filter((s) => {
									if (!s) return !1;
									const l = `${s.range.startLineNumber},${s.range.startColumn},${s.range.endLineNumber},${s.range.endColumn}`;
									return f.has(l) ? !1 : (f.add(l), !0);
								});
							});
					}
					async smartSelect(n, g, p) {
						console.log("[auto select] smart select");
						const o = n.getModel(),
							f = o?.uri;
						if (!o || !f)
							return console.warn("[auto select] no model or uri found"), [];
						const b = await this.c.aiClient(),
							s = await this.heuristicSelect(n, g, p);
						let l, y;
						const $ = await this.f.createModelReference(f);
						try {
							const k = $.object.textEditorModel;
							l = new d.$Ws({
								relativeWorkspacePath: this.g.asRelativePath(f),
								contents: k.getValue(),
								cursorPosition: { line: g.lineNumber, column: g.column },
							});
							const L = n.getSelection();
							L &&
								!L.isEmpty() &&
								(y = {
									startLineNumber: L.startLineNumber,
									startColumn: L.startColumn,
									endLineNumberInclusive: L.endLineNumber,
									endColumn: L.endColumn,
								});
						} finally {
							$.dispose();
						}
						const v = new d.$Zs({ modelName: "gpt-4" }),
							S = new u.$dE({
								currentFileInfo: l,
								modelDetails: v,
								selectionRange: y,
								heuristicsSelections: s.map(
									(k) =>
										new u.$cE({
											type:
												k.type === "group"
													? u.HeuristicsSelection_HeuristicsSelectionType.GROUP
													: k.type === "folding"
														? u.HeuristicsSelection_HeuristicsSelectionType
																.FOLDING
														: u.HeuristicsSelection_HeuristicsSelectionType
																.LINE,
											startLine: k.initialSelectionRange.startLineNumber,
											endLine: k.initialSelectionRange.endLineNumber,
										}),
								),
							}),
							I = Date.now(),
							T = await b.calculateAutoSelection(S),
							P = Date.now();
						return (
							console.log("[auto select] response", T),
							console.log(`[auto select] calculation took ${P - I} ms`),
							T.results
								? T.results.map((k) => ({
										initialSelectionRange: {
											startLineNumber: k.startLine,
											startColumn: 1,
											endLineNumber: k.endLine,
											endColumn: o.getLineMaxColumn(k.endLine),
										},
										rangeDecorationId: "",
										type: "ai",
									}))
								: []
						);
					}
					async heuristicSelect(n, g, p) {
						const o = p?.shouldDedupe ?? !0,
							f = p?.skipSuggestionTypes ?? [],
							b = a.filter((S) => !f.includes(S)),
							s = await Promise.all(
								b.map(async (S) => ({
									type: S,
									range: await this.h(n, g, S),
									base: g,
								})),
							),
							y = (
								await Promise.all(
									s.map(async (S) => {
										const I = await this.j(n, S);
										return { ...S, score: I };
									}),
								)
							).sort((S, I) => I.score - S.score);
						return (o ? this.m(y) : y).map((S) => ({
							score: S.score,
							type: S.type,
							initialSelectionRange: S.range,
							rangeDecorationId: "",
						}));
					}
					async h(n, g, p) {
						const o = g.lineNumber,
							f = n.getModel();
						if (f) {
							switch (p) {
								case "line":
									return this.n(f, {
										startLineNumber: o,
										startColumn: 1,
										endLineNumber: o,
										endColumn: f.getLineLength(o),
									});
								case "group": {
									let b = o,
										s = o;
									const l = this.getLineIndentAt(n, o);
									for (
										let y = o - 1;
										y > 0 &&
										!(
											this.getLineIndentAt(n, y) < l ||
											f.getLineContent(y).trim() === ""
										);
										y--
									)
										b = y;
									for (
										let y = o + 1;
										y <= f.getLineCount() &&
										!(
											this.getLineIndentAt(n, y) < l ||
											f.getLineContent(y).trim() === ""
										);
										y++
									)
										s = y;
									return this.n(f, {
										startLineNumber: b,
										startColumn: 1,
										endLineNumber: s,
										endColumn: f.getLineMaxColumn(s),
									});
								}
								case "folding": {
									let b = o,
										s = o;
									const l = i.$ZNb.get(n);
									if (!l) break;
									const y = l.getFoldingModel();
									if (!y) break;
									const $ = await y;
									if (!$) break;
									const v = $.getRegionAtLine(o);
									if (v) {
										b = Math.max(1, v.startLineNumber);
										const S = this.getLineIndentAt(n, b),
											I = this.getLineIndentAt(
												n,
												Math.min(f.getLineCount(), v.endLineNumber),
											);
										s = Math.min(
											f.getLineCount(),
											S >= I ? v.endLineNumber : v.endLineNumber + 1,
										);
									}
									return {
										startLineNumber: b,
										startColumn: 1,
										endLineNumber: s,
										endColumn: f.getLineMaxColumn(s),
									};
								}
							}
							return this.n(f, {
								startLineNumber: o,
								startColumn: 1,
								endLineNumber: o,
								endColumn: f.getLineMaxColumn(o),
							});
						}
					}
					async j(n, g) {
						let p = 0;
						const o = n.getModel();
						if (!o) return 0;
						const f = g.base.lineNumber,
							b = o.getLineContent(f),
							s = f > 1 && o.getLineContent(f - 1).trim() === "",
							l = f < o.getLineCount() && o.getLineContent(f + 1).trim() === "",
							y = this.getLineIndentAt(n, f),
							$ = this.getLineIndentAt(n, g.range.endLineNumber),
							v = this.getLineIndentAt(n, g.range.startLineNumber),
							S = f > 1 ? this.getLineIndentAt(n, f - 1) : 0,
							I = f < o.getLineCount() ? this.getLineIndentAt(n, f + 1) : 0;
						switch (g.type) {
							case "group":
								s && (p += 10),
									$ === v ? (p += 10) : (p -= 15),
									!s && S !== y && (p += 5),
									!s && !l && (p += 3),
									l && !s && S === y && (p += 10),
									(v !== y || $ !== y) && (p -= 15),
									y === v && f !== g.range.startLineNumber && (p -= 10),
									$ < v && (p -= 10);
								break;
							case "line":
								s && l && (p += 18),
									o.uri.fsPath.endsWith(".rs") &&
										b.trim().startsWith("#") &&
										(p += 15);
								break;
							case "folding":
								(p += 10),
									s && (p += 10),
									$ === v && (p += 10),
									!s && !l && (p += 5),
									v !== y && (p -= 10),
									$ !== y && (p -= 5),
									f > g.range.startLineNumber && (p -= 10);
								break;
							default:
								return Promise.resolve(0);
						}
						return p;
					}
					getLineIndentAt(n, g) {
						const p = n.getModel();
						return p ? p.getLineFirstNonWhitespaceColumn(g) : 0;
					}
					n(n, g) {
						const p = Math.max(1, g.startLineNumber),
							o = Math.min(n.getLineCount(), g.endLineNumber);
						return {
							startLineNumber: p,
							startColumn: Math.max(1, g.startColumn),
							endLineNumber: o,
							endColumn: Math.min(n.getLineMaxColumn(o), g.endColumn),
						};
					}
				};
				(e.$sec = h),
					(e.$sec = h = Ne([j(0, E.$Nfc), j(1, m.$MO), j(2, r.$Vi)], h)),
					(0, w.$lK)(e.$rec, h, w.InstantiationType.Delayed);
			},
		),
		