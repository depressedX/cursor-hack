define(
			de[850],
			he([
				1, 0, 3, 9, 47, 22, 20, 5, 45, 32, 57, 18, 285, 191, 736, 1117, 137, 85,
				17, 258, 359, 19, 25, 42, 64, 136, 65, 6, 1009, 332, 642, 83, 271, 90,
				367, 1522,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$idc = void 0),
					(e.$idc = (0, d.$Mi)("bugBotLinterService"));
				let R = class extends t.$1c {
					get bugConfig() {
						return this.H.cachedServerConfig.bugConfigResponse ?? new n.$Oab();
					}
					constructor(B, U, z, F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
						super(),
							(this.g = B),
							(this.h = U),
							(this.j = z),
							(this.n = F),
							(this.q = x),
							(this.r = H),
							(this.s = q),
							(this.t = V),
							(this.u = G),
							(this.w = K),
							(this.y = J),
							(this.z = W),
							(this.C = X),
							(this.F = Y),
							(this.G = ie),
							(this.H = ne),
							(this.I = ee),
							(this.b = new T.$re()),
							(this.onDidBugsChange = this.b.event),
							(this.c = new T.$re()),
							(this.onDidChangeBugConfig = this.c.event),
							(this.f = 0),
							(this.activeBugs = new Map()),
							(this.J = new t.$Zc()),
							(this.R = !1),
							(this.a = this.g.createInstance(h.$q6b, { service: g.$8ab })),
							this.D(
								this.C.onCodeEditorAdd((_) => {
									this.attachEditor(_);
								}),
							);
						for (const _ of this.C.listCodeEditors()) this.attachEditor(_);
						this.D(
							this.H.onDidRefreshServerConfig(() => {
								this.M();
							}),
						);
					}
					L() {
						if (
							!this.bugConfig.linterStrategyV1?.enabled &&
							!this.bugConfig.linterStrategyV2?.enabled
						) {
							this.J.clear();
							return;
						}
						this.J.add(
							this.D(
								this.u.files.onDidSave((B) => {
									this.N(B.model.resource);
								}),
							),
						);
					}
					M() {
						this.c.fire(), this.L();
					}
					N(B) {
						this.bugConfig.linterStrategyV2?.enabled === !0 && this.P();
					}
					P() {
						if (this.bugConfig.linterStrategyV2?.enabled !== !0) return;
						const B = this.C.getActiveCodeEditor();
						if (B === null) return;
						const U = B.getModel();
						if (!U) return;
						const z = B.getPosition();
						if (!z) return;
						const F = U.uri,
							x = this.bugConfig.linterStrategyV2?.waitBetweenTriggersMs ?? 1e4,
							H = this.bugConfig.linterStrategyV2?.debounceTriggersMs ?? 1e3;
						clearTimeout(this.O),
							(this.O = setTimeout(() => {
								Date.now() - this.f >= x &&
									this.triggerV2({ uri: F, position: z });
							}, H));
					}
					onDidChangeModelContent(B, U) {
						const z = B.getModel();
						if (!z) return;
						const F = this.activeBugs.get(z.uri.fsPath);
						if (!F) return;
						let x = [];
						for (let H = 0; H < F.length; H++) {
							const q = F[H],
								V = z.getDecorationRange(q.decorationId);
							if (!V) {
								x.push(H),
									console.error("Bug decoration not found, deleting bug:", q);
								continue;
							}
							const G = z.getValueInRange(V),
								K = q.bug.locations.at(0);
							K !== void 0 &&
								G.trim() !== K.codeLines.join(z.getEOL()).trim() &&
								(x.push(H),
								console.log("Bug lines do not match, deleting bug:", q),
								z.deltaDecorations([q.decorationId], []));
						}
						for (const H of x.reverse()) F.splice(H, 1);
						F.length === 0 && this.activeBugs.delete(z.uri.fsPath),
							x.length > 0 && this.b.fire(z.uri.fsPath);
					}
					attachEditor(B) {
						const U = new t.$Zc();
						U.add(
							B.onDidChangeModelContent((z) => {
								this.onDidChangeModelContent(B, z);
							}),
						),
							B.onDidDispose(() => {
								U.dispose();
							});
					}
					async Q(B) {
						const U = this.s.activeEditor;
						if (!U) return { diff: new D.$Cs(), gitRoot: void 0 };
						const z = U.resource;
						if (!z) return { diff: new D.$Cs(), gitRoot: void 0 };
						const F = (0, l.$mh)(z),
							x = await this.y.getGitRoot(F.fsPath);
						if (!x) return { diff: new D.$Cs(), gitRoot: void 0 };
						const H = i.URI.file(x),
							q = await this.y.getBranchDiff({
								cwd: H,
								unifiedContextLines: B.keepLinesAroundChunk,
								targets: [B.target.fsPath],
							});
						return q
							? {
									diff: new D.$Cs({
										diffs: q.map((V) => this.G.fileDiffToProtoDiff(V)),
									}),
									gitRoot: H,
								}
							: { diff: new D.$Cs(), gitRoot: H };
					}
					async triggerV2(B) {
						if (this.R) {
							console.log(
								"Already triggering bug finder, not triggering again!",
							);
							return;
						}
						(this.R = !0), (this.f = Date.now());
						const U = new t.$Zc();
						try {
							const z = this.C.listCodeEditors();
							let F,
								x = null;
							for (const Y of z) {
								const ie = Y.getModel();
								if (ie?.uri === B.uri) {
									(F = ie), (x = Y.getPosition());
									break;
								}
							}
							if (!F) {
								console.log(
									"No active editor URI matches the URI we want to trigger on, skipping!",
								);
								return;
							}
							if (x && Math.abs(x.lineNumber - B.position.lineNumber) > 40) {
								console.log("Position is more than 40 lines away, skipping!");
								return;
							}
							const H = B.position,
								q = B.uri;
							if (F.isTooLargeForSyncing() || F.isTooLargeForTokenization()) {
								console.log("Model is too large for bug finding, skipping!");
								return;
							}
							if (
								F.getLineCount() >
								(this.bugConfig.linterStrategyV2
									?.preventTriggeringForFilesWithThisManyLines ?? 2e4)
							) {
								console.log("Model is too large for bug finding, skipping!");
								return;
							}
							const { diff: V, gitRoot: G } = await this.Q({
								target: q,
								keepLinesAroundChunk:
									this.bugConfig.linterStrategyV2?.keepLinesAroundChunk ?? 100,
							});
							if (V.diffs.length === 0) throw new Error("No file diffs found");
							if (!G) throw new Error("No git root found");
							const K = await this.a.get();
							if (!this.bugConfig.linterStrategyV2?.enabled) return;
							const W = (0, w.$9g)(),
								X = K.streamBugBotLinter(
									{
										gitDiff: V,
										activeFile: (0, l.$ph)(G, q),
										cursorLineNumberOneIndexed: H.lineNumber,
										telemEnabled: this.t.canWeTrackTelem(),
										sessionId: this.t.getCurrentSessionId(),
									},
									{ headers: (0, c.$m6b)(W) },
								);
							this.I.recordBugBotLinterEvent({
								requestId: W,
								model: F,
								eventType: { case: "started", value: {} },
							}),
								await this.S(X, W);
						} catch (z) {
							console.error("Failed to trigger bug finding:", z);
						} finally {
							U.dispose(), (this.R = !1);
						}
					}
					async createDummyBug() {
						const B = this.C.getActiveCodeEditor();
						if (!B) return;
						const U = B.getModel();
						if (!U) return;
						const z = B.getPosition();
						if (!z) return;
						const F = z.lineNumber,
							x = [];
						for (let V = 0; V < 3; V++)
							F + V <= U.getLineCount() && x.push(U.getLineContent(F + V));
						const H = new L.$uv({
								locations: [
									{
										file: this.z.asRelativePath(U.uri),
										startLine: F,
										endLine: F + x.length - 1,
										codeLines: x,
									},
								],
								description:
									"This is a dummy bug for debugging purposes" +
									" This is a dummy bug for debugging purposes".repeat(
										Math.floor(Math.random() * 7),
									),
								id: (0, w.$9g)(),
							}),
							q = (async function* () {
								yield new n.$Tab({ bugs: [H] });
							})();
						await this.S(q, (0, w.$9g)());
					}
					async S(B, U) {
						for await (const z of B)
							for (const F of z.bugs) {
								const x = F.locations.at(0);
								if (x === void 0) {
									console.error("Bug has no location:", F);
									continue;
								}
								if (F.locations.length !== 1) {
									console.error("Bug has multiple locations:", F);
									continue;
								}
								const H = await this.n.createModelReference(
									this.z.resolveRelativePath(x.file),
								);
								try {
									const q = H.object?.textEditorModel;
									if (!q) {
										console.error(
											"Failed to create text model for bug finding:",
											F,
										);
										continue;
									}
									this.U(F, q, U);
									const V = (() => {
										let W = Math.max(1, x.startLine - 10),
											X = Math.min(q.getLineCount(), x.endLine + 10);
										const Y = [];
										for (let te = W; te <= X; te++) {
											const Q = q.getLineContent(te);
											Y.push({ value: Q, hash: (0, S.$Aj)(Q) });
										}
										const ie = x.codeLines.map((te) => ({
												value: te,
												hash: (0, S.$Aj)(te),
											})),
											ne = [];
										for (let te = 0; te <= Y.length - ie.length; te++) {
											let Q = !0;
											for (let Z = 0; Z < ie.length; Z++)
												if (Y[te + Z].hash !== ie[Z].hash) {
													Q = !1;
													break;
												}
											Q && ne.push(te + W);
										}
										if (ne.length === 0)
											return (
												console.log("No matching indices found for bug:", F),
												{
													type: "heuristic",
													heuristic:
														A
															.BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic
															.LINES_MISMATCH,
												}
											);
										const ee = ne.reduce(
											(te, Q) =>
												Math.abs(Q - x.startLine) < Math.abs(te - x.startLine)
													? Q
													: te,
											ne[0],
										);
										let _ = !0;
										for (let te = 0; te < ie.length; te++)
											if (q.getLineContent(ee + te) !== x.codeLines[te]) {
												console.log(
													"Bug lines do not match at index, even after a hash match. This is surprising:",
													te,
												),
													(_ = !1);
												break;
											}
										if (!_)
											return {
												type: "heuristic",
												heuristic:
													A.BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic
														.LINES_MISMATCH,
											};
										if (
											this.bugConfig.linterStrategyV2
												?.preventTriggeringWhenLints
										) {
											const Q = this.F.read({ resource: q.uri }).filter(
												(Z) =>
													Z.startLineNumber >= ee &&
													Z.endLineNumber <= ee + ie.length - 1,
											);
											if (Q.length > 0)
												return (
													console.log(
														"Found overlapping lints, skipping bug finding:",
														Q,
													),
													{
														type: "heuristic",
														heuristic:
															A
																.BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic
																.LINT_OVERLAP,
													}
												);
										}
										return {
											type: "range",
											range: new f.$iL(
												ee,
												0,
												ee + ie.length - 1,
												q.getLineMaxColumn(ee + ie.length - 1),
											),
										};
									})();
									if (V.type === "heuristic") {
										this.I.recordBugBotLinterEvent({
											model: q,
											requestId: U,
											eventType: {
												case: "notShownBecauseHeuristic",
												value: { heuristic: V.heuristic },
											},
										});
										continue;
									}
									const G = V.range,
										K = q.deltaDecorations(
											[],
											[
												{
													range: G,
													options: {
														className: "ai-bug-finder-bug-decoration",
														description: "bug",
														isWholeLine: !0,
														overviewRuler: {
															color: "rgba(255, 100, 100, 0.5)",
															position: v.OverviewRulerLane.Right,
														},
													},
												},
											],
										);
									let J = this.activeBugs.get(q.uri.fsPath);
									J || ((J = []), this.activeBugs.set(q.uri.fsPath, J)),
										J.push({ decorationId: K[0], requestId: U, bug: F }),
										this.b.fire(q.uri.fsPath);
								} catch (q) {
									console.error(
										"Failed to create text model for bug finding:",
										q,
									);
								} finally {
									H.dispose();
								}
							}
					}
					markGoodFind(B, U) {
						const {
							intersectingBugs: z,
							bugs: F,
							model: x,
						} = this.getIntersectingBugs(B, U);
						if (!(z.length === 0 || !x)) {
							for (const H of z)
								this.I.recordBugBotLinterEvent({
									model: x,
									requestId: H.requestId,
									eventType: {
										case: "userFeedback",
										value: { bugReportId: H.bug.id, feedback: "good" },
									},
								});
							this.dismissBugBotLinter(B, U);
						}
					}
					markViewed(B, U) {
						const {
							intersectingBugs: z,
							bugs: F,
							model: x,
						} = this.getIntersectingBugs(B, U);
						if (!(z.length === 0 || !x))
							for (const H of z)
								this.I.recordBugBotLinterEvent({
									model: x,
									requestId: H.requestId,
									eventType: {
										case: "viewedReport",
										value: { bugReportId: H.bug.id },
									},
								});
					}
					markUnviewed(B, U) {
						const {
							intersectingBugs: z,
							bugs: F,
							model: x,
						} = this.getIntersectingBugs(B, U);
						if (!(z.length === 0 || !x))
							for (const H of z)
								this.I.recordBugBotLinterEvent({
									model: x,
									requestId: H.requestId,
									eventType: {
										case: "unviewedReport",
										value: { bugReportId: H.bug.id },
									},
								});
					}
					markUnhelpful(B, U) {
						const {
							intersectingBugs: z,
							bugs: F,
							model: x,
						} = this.getIntersectingBugs(B, U);
						if (!(z.length === 0 || !x)) {
							for (const H of z)
								this.I.recordBugBotLinterEvent({
									model: x,
									requestId: H.requestId,
									eventType: {
										case: "userFeedback",
										value: { bugReportId: H.bug.id, feedback: "bad" },
									},
								});
							this.dismissBugBotLinter(B, U);
						}
					}
					getIntersectingBugs(B, U) {
						const z = B.getModel();
						if (!z) return { intersectingBugs: [], bugs: [], model: null };
						const F = this.activeBugs.get(z.uri.fsPath);
						return F
							? {
									intersectingBugs: (() => {
										if (U?.decorationId)
											return F.filter((V) => V.decorationId === U.decorationId);
										const H = B.getSelections();
										return H === null || H.length === 0
											? []
											: F.filter((V) => {
													const G = z.getDecorationRange(V.decorationId);
													for (const K of H)
														if (G && G.intersectRanges(K)) return !0;
													return !1;
												});
									})(),
									bugs: F,
									model: z,
								}
							: { intersectingBugs: [], bugs: [], model: z };
					}
					dismissBugBotLinter(B, U) {
						const {
							intersectingBugs: z,
							bugs: F,
							model: x,
						} = this.getIntersectingBugs(B, U);
						if (z.length === 0 || !x) return;
						for (const q of z) this.W(q, x);
						let H = [];
						for (let q = 0; q < F.length; q++)
							z.includes(F[q]) &&
								(H.push(q), x.deltaDecorations([F[q].decorationId], []));
						for (const q of H.reverse()) F.splice(q, 1);
						F.length === 0 && this.activeBugs.delete(x.uri.fsPath),
							H.length > 0 && this.b.fire(x.uri.fsPath);
					}
					dispose() {
						super.dispose();
					}
					U(B, U, z) {
						this.I.recordBugBotLinterEvent({
							model: U,
							requestId: z,
							eventType: { case: "lintGenerated", value: { bugReport: B } },
						});
					}
					W(B, U) {
						this.I.recordBugBotLinterEvent({
							model: U,
							requestId: B.requestId,
							eventType: {
								case: "lintDismissed",
								value: { bugReportId: B.bug.id },
							},
						});
					}
				};
				(R = Ne(
					[
						j(0, d.$Li),
						j(1, m.$0zb),
						j(2, r.$km),
						j(3, $.$MO),
						j(4, E.$ll),
						j(5, u.$GO),
						j(6, a.$IY),
						j(7, p.$hfc),
						j(8, o.$kZ),
						j(9, b.$c7),
						j(10, s.$$Db),
						j(11, y.$Vi),
						j(12, I.$dtb),
						j(13, N.$aM),
						j(14, M.$Q9b),
						j(15, P.$fdc),
						j(16, k.$V7b),
					],
					R,
				)),
					(0, C.$lK)(e.$idc, R, C.InstantiationType.Delayed);
			},
		),
		