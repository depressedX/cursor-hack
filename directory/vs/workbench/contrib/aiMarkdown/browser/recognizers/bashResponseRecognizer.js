define(de[3921], he([1, 0, 2, 337, 236]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$_0b = void 0);
			const E = (0, t.template)(
					'<div class="markdown-bash-response"><div>See output',
				),
				C = (0, t.template)('<div class="markdown-bash-response-output"> ');
			e.$_0b = {
				elementType: w.MarkdownElementType.BASH_RESPONSE,
				start: (d, m, r) => {
					const u = d[d.length - 1];
					if (
						u.type === w.MarkdownElementType.BASH_RESPONSE ||
						u.type === w.MarkdownElementType.BLOCK_CODE ||
						u.type === w.MarkdownElementType.BLOCK_LATEX ||
						u.type === w.MarkdownElementType.INLINE_CODE
					)
						return { state: "failed" };
					const h = new RegExp(`^\\s*${i.$igc}`).exec(m);
					if (h)
						return {
							state: "success",
							length: h[0].length,
							elementType: w.MarkdownElementType.BASH_RESPONSE,
							startOrEnd: "start",
						};
					for (let c = 1; c <= i.$igc.length; c++) {
						const g = new RegExp(`^\\s*${i.$igc.substring(0, c)}`).exec(m);
						if (g && g[0].length === m.length) return { state: "possible" };
					}
					return { state: "failed" };
				},
				end: (d, m) => {
					const u = new RegExp(`^\\s*${i.$jgc}`).exec(m);
					if (u)
						return {
							state: "success",
							length: u[0].length,
							elementType: w.MarkdownElementType.BASH_RESPONSE,
							startOrEnd: "end",
						};
					for (let a = 1; a <= i.$jgc.length; a++) {
						const c = new RegExp(`^\\s*${i.$jgc.substring(0, a)}`).exec(m);
						if (c && c[0].length === m.length) return { state: "possible" };
					}
					return { state: "failed" };
				},
				createElement: (d, m, r, u, a) => {
					const h = (() => {
							const p = E(),
								o = p.firstChild;
							return (
								p.style.setProperty("margin-top", "12px"),
								o.addEventListener("click", () => {
									const f = h.children,
										b = f[f.length - 1];
									b &&
										(b.style.display =
											b.style.display === "none" ? "block" : "none");
								}),
								o.style.setProperty(
									"color",
									"var(--vscode-textLink-foreground)",
								),
								o.style.setProperty("cursor", "pointer"),
								o.style.setProperty("user-select", "none"),
								p
							);
						})(),
						c = (() => {
							const p = C();
							return (
								p.style.setProperty("display", "none"),
								p.style.setProperty("padding", "12px"),
								p.style.setProperty(
									"background-color",
									"var(--vscode-editor-background)",
								),
								p.style.setProperty(
									"border",
									"1px solid var(--vscode-editorWidget-border)",
								),
								p
							);
						})();
					h.appendChild(c);
					const n = { type: w.MarkdownElementType.BASH_RESPONSE, ref: c };
					d[d.length - 1].ref.appendChild(h), d.push(n);
				},
			};
		}),
		define(
			de[1927],
			he([
				1, 0, 7, 14, 58, 3, 23, 9, 5, 21, 32, 35, 217, 223, 123, 418, 140, 337,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pgc = e.$ogc = e.$ngc = e.$mgc = void 0);
				const b = "workbench.editor.aichat";
				class s {
					canSerialize(S) {
						return S instanceof l;
					}
					serialize(S) {
						if (S instanceof l) return JSON.stringify({ state: "chat" });
					}
					deserialize(S, I) {
						try {
							return S.createInstance(l);
						} catch {
							return;
						}
					}
				}
				e.$mgc = s;
				class l extends c.$LO {
					static {
						this.ID = "workbench.editor.aichat.input";
					}
					get typeId() {
						return l.ID;
					}
					get resource() {
						return d.URI.from({
							scheme: C.Schemas.aiChat,
							path: "cursor/aichat",
						});
					}
					constructor() {
						super();
					}
					matches(S) {
						return super.matches(S) ? !0 : S instanceof l;
					}
					getName() {
						return "AI Chat";
					}
					getIcon() {
						return i.$ak.comment;
					}
				}
				e.$ngc = l;
				let y = class extends h.$JEb {
					static {
						f = this;
					}
					static {
						this.ID = b;
					}
					constructor(S, I, T, P, k, L, D) {
						super(f.ID, S, I, T, P),
							(this.g = k),
							(this.j = L),
							(this.m = D),
							(this.f = new p.$Sgc(() => this.m.chatData));
					}
					Y(S) {
						S.classList.add("aichat-pane"),
							(this.c = (0, t.$fhb)(S, (0, t.$)(`.${w.$bX}`))),
							(this.c.tabIndex = 0),
							(this.c.style.outline = "none"),
							this.c.setAttribute("role", "document"),
							(this.c.style.width = "100%"),
							(this.c.style.height = "100%"),
							(this.c.style.backgroundColor =
								this.n.getColorTheme().getColor(n.$wGb)?.toString() ?? ""),
							this.D(
								this.n.onDidColorThemeChange((I) => {
									this.c &&
										(this.c.style.backgroundColor =
											this.n.getColorTheme().getColor(n.$wGb)?.toString() ??
											"");
								}),
							),
							this.s();
					}
					focus(S) {
						super.focus(),
							this.Q.publicLog2("ai/chat/focus/editor"),
							this.j.focus(S);
					}
					focusFollowup() {
						super.focus(),
							this.Q.publicLog2("ai/chat/focusFollowup/editor"),
							this.f.focusFollowup();
					}
					focusBubble(S) {
						super.focus(), this.f.focusBubble(S);
					}
					isFocused(S) {
						return this.f.isFocused(S);
					}
					s() {
						this.c !== void 0 &&
							(this.b || (this.b = this.j.render(this.c, this.f, !0)));
					}
					async setInput(S, I, T, P) {
						await super.setInput(S, I, T, P), this.s();
					}
					layout(S, I) {
						this.a = S;
					}
					dispose() {
						this.b?.dispose(), super.dispose();
					}
					I() {
						this.j.saveState(), super.I();
					}
				};
				(e.$ogc = y),
					(e.$ogc =
						y =
						f =
							Ne(
								[
									j(1, u.$km),
									j(2, a.$iP),
									j(3, r.$lq),
									j(4, m.$Li),
									j(5, g.$qgc),
									j(6, o.$kgc),
								],
								y,
							));
				class $ extends E.$1c {
					static {
						this.ID = "editor.contrib.aichat";
					}
					constructor(S) {
						super(), (this.a = S);
					}
				}
				e.$pgc = $;
			},
		),
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
		define(
			de[209],
			he([
				1, 0, 3, 19, 9, 54, 280, 20, 5, 45, 21, 25, 262, 225, 715, 299, 167,
				1318, 126, 58, 560, 47, 22, 246, 12, 42, 3617, 124, 216, 271,
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
			) {
				"use strict";
				var L;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerDataService = e.IComposerDataService = void 0);
				const D = 15,
					M = 10;
				e.IComposerDataService = (0, m.$Mi)("composerDataService");
				let N = class extends t.$1c {
					static {
						L = this;
					}
					get composerDataStorageID() {
						return b.$DX;
					}
					pushKeepAliveHandle(R) {
						for (
							this.keepAliveHandles.push(R);
							this.keepAliveHandles.length > 3;
						)
							this.keepAliveHandles.shift()?.dispose();
						for (let O = 0; O < this.keepAliveHandles.length - 1; O++) {
							const B = this.keepAliveHandles[O];
							B.data.conversation.length > 100 &&
								(B.dispose(), this.keepAliveHandles.splice(O, 1), O--);
						}
					}
					constructor(R, O, B, U, z, F, x, H, q, V) {
						super(),
							(this._storageService = R),
							(this._workspaceContextService = O),
							(this._reactiveStorageService = B),
							(this._instantiationService = U),
							(this._everythingProviderService = z),
							(this._gitGraphService = F),
							(this._recentFilesTrackerService = x),
							(this._fileService = H),
							(this._textModelService = q),
							(this._selectedContextService = V),
							(this.modelReferenceCache = new Map()),
							(this.keepAliveHandles = []),
							(this.onInlineDiffsLoadedHookReady = new Promise((G) => {
								this.onInlineDiffsLoadedHookReadyResolver = G;
							})),
							(this.onInlineDiffsLoadedHook = (G) => Promise.resolve()),
							(this.composerDataHandleManager = (0,
							I.createComposerDataHandleManager)(
								this._instantiationService,
								this.composerWasLoadedHook.bind(this),
								async (G) => (
									await this.onInlineDiffsLoadedHookReady,
									await this.onInlineDiffsLoadedHook(G)
								),
							)),
							([
								this.allComposersData,
								this.setAllComposersData,
								this.resetComposers,
								this.getHandleOptions,
							] = (0, o.createComposerData)(
								this._storageService,
								this._reactiveStorageService,
								this._workspaceContextService,
								this.composerDataHandleManager,
								this.composerDataStorageID,
							)),
							(this.reactiveStorageRoot = this.D(
								this._reactiveStorageService.createScoped(this),
							)),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [() => this.allComposersData.selectedComposerId],
								onChange: ({ deps: G, prevDeps: K, prevReturnValue: J }) => {
									const W = G[0];
									if (
										!this.applicationComposerSettings.unification &&
										this.allComposersData.allComposers.find(
											(Y) => Y.composerId === W,
										)?.forceMode === "chat"
									) {
										const Y = this.allComposersData.allComposers.filter(
											(ie) => ie.forceMode !== "chat",
										)?.[0]?.composerId;
										Y && this.setAllComposersData("selectedComposerId", Y);
										return;
									}
									if (
										this.allComposersData.selectedComposerHandle?.data
											.composerId !== W
									) {
										const X =
											this.allComposersData.selectedComposerHandlePromise;
										let Y = 1e3;
										this.getHandleOptions
											.shouldWaitFor10SecondsWhileReadingFromDiskAtStartup &&
											Date.now() - this.getHandleOptions.fromDate <= 60 * 1e3 &&
											(Y = 1e4);
										const ie = this.composerDataHandleManager.getHandle(W, Y);
										this.setAllComposersData(
											"selectedComposerHandlePromise",
											ie,
										),
											ie.then((ne) => {
												if (ne === void 0) {
													this.deleteComposer(W, {
														forceMode: "edit",
														isCurrentlySelected: !0,
													});
													return;
												}
												ie ===
													this.allComposersData.selectedComposerHandlePromise &&
													(this.allComposersData.selectedComposerHandle?.dispose(),
													this.setAllComposersData(
														"selectedComposerHandle",
														ne,
													),
													X?.then((_) => {
														_?.dispose();
													}));
											});
									}
								},
								runNowToo: !0,
							}),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [() => this.allComposersData.selectedChatId],
								onChange: ({ deps: G, prevDeps: K, prevReturnValue: J }) => {
									const W = G[0];
									if (
										this.allComposersData.selectedChatHandle?.data
											.composerId !== W
									) {
										const X = this.allComposersData.selectedChatHandlePromise;
										let Y = 1e3;
										this.getHandleOptions
											.shouldWaitFor10SecondsWhileReadingFromDiskAtStartup &&
											Date.now() - this.getHandleOptions.fromDate <= 60 * 1e3 &&
											(Y = 1e4);
										const ie = this.composerDataHandleManager.getHandle(W, Y);
										this.setAllComposersData("selectedChatHandlePromise", ie),
											ie.then((ne) => {
												if (ne === void 0) {
													this.deleteComposer(W, {
														forceMode: "chat",
														isCurrentlySelected: !0,
													});
													return;
												}
												ne.setData("forceMode", "chat"),
													ie ===
														this.allComposersData.selectedChatHandlePromise &&
														(this.allComposersData.selectedChatHandle?.dispose(),
														this.setAllComposersData("selectedChatHandle", ne),
														X?.then((_) => {
															_?.dispose();
														}));
											});
									}
								},
								runNowToo: !0,
							});
						for (const G of L.registeredActions)
							G(this._reactiveStorageService, this);
						this.D(
							this._storageService.onWillSaveState(() => {
								this.saveComposers();
							}),
						),
							this.D(
								this._reactiveStorageService.onChangeEffectManuallyDisposed({
									deps: [
										() =>
											this._reactiveStorageService
												.applicationUserPersistentStorage.composerState
												.unification,
									],
									onChange: ({ deps: G }) => {
										const K = G[0],
											J = this.allComposersData.allComposers.find(
												(W) => W.composerId === this.selectedComposerId,
											)?.forceMode;
										if (!K && J === "chat") {
											const W = this.allComposersData.allComposers.filter(
												(X) => X.forceMode !== "chat",
											)?.[0]?.composerId;
											W && this.setAllComposersData("selectedComposerId", W);
										}
									},
								}),
							);
					}
					getHasAgenticBeforeBubble(R, O) {
						const B = this.getComposerData(R);
						if (!B) return !1;
						if (!O) return B.conversation.some((z) => z.isAgentic);
						const U = B.conversation.findIndex((z) => z.bubbleId === O);
						for (let z = 0; z < U; z++)
							if (B.conversation[z].isAgentic) return !0;
						return !1;
					}
					async updateComposerDataAsync(R, O) {
						const B = await this.composerDataHandleManager.getHandle(R);
						if (B)
							try {
								O(B.setData);
							} finally {
								B.dispose();
							}
					}
					dispose() {
						super.dispose();
						for (const R of this.modelReferenceCache.values())
							for (const O of Object.values(R)) O.dispose();
						this.modelReferenceCache.clear();
					}
					async getMaybeCachedModelReference(R, O) {
						let B = this.modelReferenceCache.get(R);
						B || ((B = {}), this.modelReferenceCache.set(R, B));
						let U = B[O.toString()];
						return (
							U ||
								((U = await this._textModelService.createModelReference(O)),
								(B[O.toString()] = U)),
							U
						);
					}
					getWeakHandleOptimistic(R) {
						return this.composerDataHandleManager.getWeakHandleOptimistic(R);
					}
					getComposerForceMode(R) {
						return this.applicationComposerSettings.unification
							? "edit"
							: typeof R == "string"
								? (this.allComposersData.allComposers.find(
										(B) => B.composerId === R,
									)?.forceMode ?? "edit")
								: "forceMode" in R
									? R.forceMode
									: (R.data?.forceMode ?? "edit");
					}
					getSelectedIdByForceMode(R) {
						return this.applicationComposerSettings.unification
							? this.selectedComposerId
							: R === "chat"
								? this.selectedChatId
								: this.selectedComposerId;
					}
					async composerWasLoadedHook(R) {
						try {
							try {
								const O = R.data;
								try {
									R.setData(
										"capabilities",
										(0, h.getComposerCapabilities)(
											this._instantiationService,
											this._reactiveStorageService,
											O.composerId,
											O.capabilities,
										),
									);
								} catch (B) {
									console.error(
										"[composer] Error instantiating capabilities:",
										B,
									);
								}
							} finally {
								R.setData("hasLoaded", !0);
							}
						} catch (O) {
							console.error("[composer] Error loading composer data:", O);
						}
						this.reactiveStorageRoot.onChangeEffect({
							deps: [
								() => R.data.composerId,
								() => R.data.name,
								() => R.data.lastUpdatedAt,
								() => R.data.createdAt,
							],
							onChange: ({ deps: O }) => {
								const B = O[0],
									U = O[1],
									z = O[2],
									F = O[3];
								this.setAllComposersData(
									"allComposers",
									(x) => x.composerId === B,
									{ name: U, lastUpdatedAt: z, createdAt: F },
								);
							},
						});
					}
					async setOnInlineDiffsLoadedHook(R) {
						(this.onInlineDiffsLoadedHook = R),
							this.onInlineDiffsLoadedHookReadyResolver?.();
					}
					get applicationComposerSettings() {
						return this._reactiveStorageService.applicationUserPersistentStorage
							.composerState;
					}
					static {
						this.registeredActions = [];
					}
					static registerAction(R) {
						this.registeredActions.push(R);
					}
					get selectedComposer() {
						const R = this.allComposersData.selectedComposerHandle;
						if (R) return R.data;
					}
					async getSelectedComposerHandle() {
						return await this.composerDataHandleManager.getHandle(
							this.selectedComposerId,
						);
					}
					async getComposerHandleById(R) {
						return await this.composerDataHandleManager.getHandle(R);
					}
					get selectedComposerId() {
						if (this.allComposersData.selectedComposerId)
							return this.allComposersData.selectedComposerId;
						if (this.allComposersData.allComposers.length > 0) {
							console.log(
								"[composer] no selected composer found, selecting first one",
							);
							const R = this.allComposersData.allComposers.filter(
								(O) => this.getComposerForceMode(O) !== "chat",
							)[0];
							if (R)
								return (
									this.setAllComposersData("selectedComposerId", R.composerId),
									R.composerId
								);
						}
						return (
							console.log("[composer] no composers found, resetting"),
							this.resetComposers().composerId
						);
					}
					get selectedChatId() {
						if (this.allComposersData.selectedChatId)
							return this.allComposersData.selectedChatId;
						if (this.allComposersData.allComposers.length > 0) {
							console.log(
								"[composer] no selected composer found, selecting first one",
							);
							const R = this.allComposersData.allComposers.filter(
								(O) => this.getComposerForceMode(O) === "chat",
							)[0];
							if (R)
								return (
									this.setAllComposersData("selectedChatId", R.composerId),
									R.composerId
								);
						}
						return (
							console.log("[composer] no composers found, resetting"),
							this.resetComposers().composerId
						);
					}
					updateSelectedComposer(R) {
						const O = this.allComposersData.selectedComposerHandle;
						O && O.setData(R);
					}
					updateComposerDataSetStore(R, O) {
						if (typeof R == "string") {
							const B =
								this.composerDataHandleManager.getWeakHandleOptimistic(R);
							if (!B)
								throw new Error("[composer] No composer data handle found");
							O(B.setData), B.dispose();
						} else O(R.setData);
					}
					updateComposerData(R, O) {
						if (typeof R == "string") {
							const B =
								this.composerDataHandleManager.getWeakHandleOptimistic(R);
							if (!B)
								throw new Error("[composer] No composer data handle found");
							B.setData((U) => ({ ...U, ...O })), B.dispose();
						} else R.setData(O);
					}
					HACKY_PLEASE_DO_NOT_USE_getComposerHandleById_ONLY_IF_LOADED(R) {
						return this.composerDataHandleManager.getWeakHandleOptimistic(R);
					}
					saveComposers() {
						const R = {
								allComposers: this.allComposersData.allComposers,
								selectedComposerId: this.allComposersData.selectedComposerId,
								selectedChatId: this.allComposersData.selectedChatId,
								hasMigratedChatData: this.allComposersData.hasMigratedChatData,
								hasMigratedUseAutoContext:
									this.allComposersData.hasMigratedUseAutoContext,
								hasMigratedComposerData:
									this.allComposersData.hasMigratedComposerData,
							},
							O = JSON.stringify(R);
						this._storageService.store(
							this.composerDataStorageID,
							O,
							u.StorageScope.WORKSPACE,
							u.StorageTarget.MACHINE,
						);
					}
					getComposerFromIdOrHandle(R) {
						return typeof R == "string" ? this.getComposerData(R) : R.data;
					}
					getComposerCodeBlock(R, O, B) {
						const U = this.getComposerFromIdOrHandle(R);
						if (U) return U.codeBlockData?.[O.toString()]?.[B];
					}
					appendComposer(R) {
						const O = (0, c.getComposerHeaderData)(R);
						this.setAllComposersData("allComposers", (U) => [O, ...U]);
						const B = this.composerDataHandleManager.pushComposer(R);
						this.pushKeepAliveHandle(B);
					}
					deleteComposer(R, O) {
						if (
							(this.setAllComposersData("allComposers", (U) =>
								U.filter((z) => z.composerId !== R),
							),
							this.composerDataHandleManager.deleteComposer(R),
							O?.isCurrentlySelected)
						) {
							const U = this.allComposersData.allComposers.filter(
								(z) => this.getComposerForceMode(z) === O.forceMode,
							);
							U.length > 0
								? this.setAllComposersData(
										O.forceMode === "chat"
											? "selectedChatId"
											: "selectedComposerId",
										U[0].composerId,
									)
								: this.resetComposers();
						}
						const B = this.modelReferenceCache.get(R);
						if (B) for (const U of Object.values(B)) U.dispose();
						this.modelReferenceCache.delete(R);
					}
					updateComposerCodeBlock(R, O, B, U) {
						const z = this.getComposerFromIdOrHandle(R);
						if (!z) return;
						if (!z.codeBlockData[O.toString()][B]) {
							console.trace(
								"[composer] updateReactiveCodeBlock called for uri that does not exist",
								O,
							);
							return;
						}
						try {
							this.updateComposerDataSetStore(R, (x) =>
								x(
									"codeBlockData",
									O.toString(),
									(H) => H.version === B,
									(H) => ({ ...H, ...U }),
								),
							);
						} catch {}
					}
					getCodeBlockStatus(R, O, B) {
						const U = this.getComposerFromIdOrHandle(R);
						if (!U) return "none";
						const z = U?.codeBlockData[O.toString()];
						return z
							? (z.find((F) => F.version === B)?.status ?? "none")
							: "none";
					}
					setCodeBlockStatus(R, O, B, U) {
						!this.getComposerFromIdOrHandle(R) ||
							!R ||
							this.updateComposerCodeBlock(R, O, B, { status: U });
					}
					getCodeBlocksOfStatuses(R, O) {
						const B = this.getComposerFromIdOrHandle(R);
						if (!B) return [];
						const U = B.codeBlockData,
							z = Array.isArray(O) ? O : [O],
							F = [];
						for (const x of Object.keys(U)) {
							const H = U[x];
							for (const q of H) z.includes(q.status) && F.push(q);
						}
						return F;
					}
					setGeneratingCodeBlocksToAborted(R) {
						const O = this.getCodeBlocksOfStatuses(R, "generating");
						for (const B of O)
							this.setCodeBlockStatus(R, B.uri, B.version, "aborted");
					}
					getLatestCodeBlock(R) {
						const O = this.getComposerFromIdOrHandle(R);
						if (O)
							for (let B = O.conversation.length - 1; B >= 0; B--) {
								const U = O.conversation[B];
								if (U.codeBlocks && U.codeBlocks.length > 0) {
									const { uri: z, version: F } =
										U.codeBlocks[U.codeBlocks.length - 1];
									return this.getComposerCodeBlock(R, z, F);
								}
							}
					}
					getLatestCodeBlocks(R) {
						const O = this.getComposerFromIdOrHandle(R);
						if (!O) return [];
						const B = [];
						return (
							Object.values(O.codeBlockData ?? {}).forEach((U) => {
								U.length > 0 && B.push(U[U.length - 1]);
							}),
							B
						);
					}
					getLatestCodeBlockForUri(R, O) {
						const B = this.getLatestCodeBlocks(R);
						if (!(!B || B.length === 0))
							return B.find((U) => U.uri.toString() === O.toString());
					}
					getLatestCodeBlocksOfStatuses(R, O) {
						if (!this.getComposerFromIdOrHandle(R)) return [];
						const U = Array.isArray(O) ? O : [O];
						return this.getLatestCodeBlocks(R).filter((z) => {
							const F = z.status;
							return U.includes(F);
						});
					}
					getLatestCodeBlockVersion(R, O, B) {
						const U = this.getComposerFromIdOrHandle(R);
						if (!U) return -1;
						const z = U.codeBlockData[O.toString()];
						if (!z || z.length === 0) return -1;
						const F = z[z.length - 1]?.version;
						return B?.excludeNonAppliedCodeBlocks
							? z.filter((x) => x.isNotApplied !== !0).length - 1
							: F;
					}
					getVersionExcludingNonAppliedCodeBlocks(R, O, B) {
						const U = this.getComposerFromIdOrHandle(R);
						if (!U) return -1;
						const z = U.codeBlockData[O.toString()];
						return !z || z.length === 0 || z[B].isNotApplied === !0
							? -1
							: z
									.filter((F) => F.isNotApplied !== !0)
									.findIndex((F) => F.version === B);
					}
					getLatestCodeBlockVersionForMessage(R, O, B, U) {
						const z = this.getComposerData(R);
						if (!z) return -1;
						const F = O.toString();
						let x = -1;
						for (let H = 0; H <= B; H++) {
							const q = z.conversation[H];
							if (q.type === f.ConversationMessage_MessageType.AI) {
								const V =
									q.codeBlocks?.filter((G) => G.uri.toString() === F) ?? [];
								for (const G of V) {
									if (H === B && G.codeBlockIdx > U) break;
									G.version > x && (x = G.version);
								}
							}
						}
						return x;
					}
					getInlineDiff(R, O, B) {
						return this._reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
							(U) =>
								U.uri.toString() === O.toString() &&
								U.composerMetadata?.composerId === R &&
								(B ? U.composerMetadata?.version === B : !0),
						);
					}
					getAllInlineDiffs(R) {
						return this._reactiveStorageService.nonPersistentStorage.inlineDiffs.filter(
							(O) => O.composerMetadata?.composerId === R,
						);
					}
					doesFileHaveInlineDiff(R, O) {
						return !!this.getInlineDiff(R, O);
					}
					getComposerData(R) {
						if (typeof R == "string") {
							const O =
								this.composerDataHandleManager.getWeakHandleOptimistic(R);
							if (!O) return;
							try {
								return O.data;
							} finally {
								O.dispose();
							}
						} else return R.data;
					}
					getAllCachedCodeBlocks(R) {
						const O = this.getComposerData(R);
						if (!O) throw Error("[composer] composer doesn't exist");
						const { codeBlockData: B } = O;
						return Object.values(B)
							.flat()
							.filter(({ isCached: z }) => z === !0);
					}
					addTypesToCapabilityStatuses(R, O, B, U) {
						this.updateComposerDataSetStore(R, (z) =>
							z(
								"conversation",
								(F) => F.bubbleId === O,
								"capabilityStatuses",
								B,
								(F) => [...F, ...U.map((x) => ({ type: x, status: "none" }))],
							),
						);
					}
					removeTypesFromCapabilityStatuses(R, O, B, U) {
						this.updateComposerDataSetStore(R, (z) =>
							z(
								"conversation",
								(F) => F.bubbleId === O,
								"capabilityStatuses",
								B,
								(F) => [...F.filter((x) => !U.includes(x.type))],
							),
						);
					}
					setCapabilityStatus(R, O, B, U, z) {
						const F = this.getComposerBubble(R, O);
						!F ||
							!F.capabilityStatuses ||
							(F.capabilityStatuses[B] &&
								!F.capabilityStatuses[B].map((H) => H.type).includes(U)) ||
							this.updateComposerDataSetStore(R, (x) =>
								x(
									"conversation",
									(H) => H.bubbleId === O,
									"capabilityStatuses",
									B,
									(H) => H.type === U,
									{ type: U, status: z },
								),
							);
					}
					setGeneratingCapabilitiesToAborted(R) {
						const O = this.getComposerData(R);
						if (O) {
							for (const B of O.conversation)
								if (B.capabilityStatuses)
									for (const U of Object.keys(B.capabilityStatuses))
										for (const z of B.capabilityStatuses[U])
											z.status === "generating" &&
												this.setCapabilityStatus(
													R,
													B.bubbleId,
													U,
													z.type,
													"aborted",
												);
						}
					}
					setGeneratingCapabilityCodeBlocksToAborted(R) {
						const O = this.getComposerData(R);
						if (O) {
							for (const B of O.conversation)
								if (B.capabilityCodeBlocks)
									for (const U of B.capabilityCodeBlocks)
										U.status === "generating" &&
											this.updateComposerCapabilityCodeBlock(
												R,
												B.bubbleId,
												U.codeBlockIdx,
												{ status: "aborted" },
											);
						}
					}
					isRunningCapabilities(R) {
						const O = this.getComposerData(R);
						if (!O) return !1;
						for (let B = O.conversation.length - 1; B >= 0; B--) {
							const U = O.conversation[B];
							if (U.capabilityStatuses) {
								for (const z of Object.keys(U.capabilityStatuses))
									for (const F of U.capabilityStatuses[z])
										if (F.status === "generating") return !0;
							}
							if (U.capabilityCodeBlocks) {
								for (const z of U.capabilityCodeBlocks)
									if (z.status === "generating" || z.status === "loading")
										return !0;
							}
						}
						return !1;
					}
					getToolFormer(R) {
						const O = this.getComposerCapability(
							R,
							p.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER,
						);
						if (O) return O;
					}
					getPendingUserDecisionGroup(R) {
						const O = this.getToolFormer(R);
						return O ? O.getPendingUserDecisionGroup()() : [];
					}
					getIsBlockingUserDecision(R) {
						const O = this.getToolFormer(R);
						return O ? O.getIsBlockingUserDecision()() : !1;
					}
					setLoadingToolFormerToolsToCancelled(R) {
						const O = this.getToolFormer(R);
						O && O.setLoadingToolsToCancelled();
					}
					addCapabilityRan(R, O, B, U) {
						this.updateComposerDataSetStore(R, (z) =>
							z(
								"conversation",
								(F) => F.bubbleId === O,
								"capabilitiesRan",
								B,
								(F) => [...F, U],
							),
						);
					}
					getComposerCapabilityCodeBlock(R, O, B) {
						const U = this.getComposerBubble(R, O);
						if (U)
							return U.capabilityCodeBlocks?.find((z) => z.codeBlockIdx === B);
					}
					updateComposerCapabilityCodeBlock(R, O, B, U) {
						this.updateComposerDataSetStore(R, (z) =>
							z(
								"conversation",
								(F) => F.bubbleId === O,
								"capabilityCodeBlocks",
								(F) => F.codeBlockIdx === B,
								(F) => ({ ...F, ...U }),
							),
						);
					}
					getComposerCapability(R, O) {
						const B = this.getComposerData(R);
						if (B) return B.capabilities.find((U) => U.type === O);
					}
					getComposerBubble(R, O) {
						const B = this.getComposerFromIdOrHandle(R);
						if (B) return B.conversation.find((U) => U.bubbleId === O);
					}
					updateComposerBubble(R, O, B) {
						this.updateComposerDataSetStore(R, (U) =>
							U(
								"conversation",
								(z) => z.bubbleId === O,
								(z) => ({ ...z, ...B }),
							),
						);
					}
					getLastHumanBubbleId(R) {
						const O = this.getComposerData(R);
						if (O)
							for (let B = O.conversation.length - 1; B >= 0; B--) {
								const U = O.conversation[B];
								if (U.type === f.ConversationMessage_MessageType.HUMAN)
									return U.bubbleId;
							}
					}
					getLastAiBubbleId(R) {
						const O = this.getComposerData(R);
						if (O)
							for (let B = O.conversation.length - 1; B >= 0; B--) {
								const U = O.conversation[B];
								if (U.type === f.ConversationMessage_MessageType.AI)
									return U.bubbleId;
							}
					}
					getLastBubbleId(R) {
						return this.getLastBubble(R)?.bubbleId;
					}
					getLastBubble(R) {
						const O = this.getComposerData(R);
						if (O) return O.conversation[O.conversation.length - 1];
					}
					getLastHumanBubble(R) {
						const O = this.getComposerData(R);
						if (O) {
							for (let B = O.conversation.length - 1; B >= 0; B--)
								if (
									O.conversation[B].type ===
									f.ConversationMessage_MessageType.HUMAN
								)
									return O.conversation[B];
						}
					}
					getLastAiBubble(R) {
						const O = this.getComposerData(R);
						if (O) {
							for (let B = O.conversation.length - 1; B >= 0; B--)
								if (
									O.conversation[B].type ===
									f.ConversationMessage_MessageType.AI
								)
									return O.conversation[B];
						}
					}
					getLastAiBubbleWhere(R, O) {
						const B = this.getComposerData(R);
						return B
							? [...B.conversation]
									.reverse()
									.find(
										(z) =>
											z.type === f.ConversationMessage_MessageType.AI && O(z),
									)
							: void 0;
					}
					getLastBubbleWhere(R, O) {
						const B = this.getComposerData(R);
						return B ? [...B.conversation].reverse().find((z) => O(z)) : void 0;
					}
					getLastAiBubbles(R) {
						const O = this.getComposerData(R);
						if (!O) return [];
						const B = this.getLastHumanBubbleId(R),
							U = O.conversation.findIndex((z) => z.bubbleId === B);
						return U === -1 ? [] : O.conversation.slice(U + 1);
					}
					getComposerId(R) {
						return typeof R == "string" ? R : R.data.composerId;
					}
					getActionButtons(R) {
						const O = this.getComposerId(R);
						return (
							this._reactiveStorageService.nonPersistentStorage.composerState
								.actionButtons?.[O] ?? []
						);
					}
					addActionButton(R, O, B, U) {
						const z = this.getComposerId(R);
						if (
							!this._reactiveStorageService.nonPersistentStorage.composerState
								.actionButtons
						)
							this._reactiveStorageService.setNonPersistentStorage(
								"composerState",
								"actionButtons",
								{},
							);
						else if (
							this._reactiveStorageService.nonPersistentStorage.composerState.actionButtons?.[
								z
							]?.find((V) => V.id === U?.id)
						) {
							console.error(
								"[composer] trying to add an action button that already exists, skipping",
							);
							return;
						}
						const F =
								this._reactiveStorageService.nonPersistentStorage.composerState
									.actionButtons?.[z] ?? [],
							x = F.length === 0,
							H = F.length === 1,
							q = U?.id ?? (0, l.$9g)();
						this._reactiveStorageService.setNonPersistentStorage(
							"composerState",
							"actionButtons",
							z,
							[
								...(this._reactiveStorageService.nonPersistentStorage
									.composerState.actionButtons?.[z] ?? []),
								{
									id: q,
									label: O,
									onClick: (V) => {
										const G = B(V);
										return this.removeActionButton(z, q), G;
									},
									onRemove: U?.onRemove,
									buttonType: x ? "primary" : "secondary",
									keybindingLabel: x
										? "\u23CE"
										: H
											? v.$m
												? " \u2325\u23CE"
												: " alt+\u23CE"
											: void 0,
									icon: U?.icon,
									hintText: U?.hintText,
								},
							],
						);
					}
					removeActionButton(R, O) {
						this._reactiveStorageService.nonPersistentStorage.composerState
							.actionButtons?.[R] &&
							this._reactiveStorageService.setNonPersistentStorage(
								"composerState",
								"actionButtons",
								R,
								(
									this._reactiveStorageService.nonPersistentStorage
										.composerState.actionButtons?.[R] ?? []
								).filter((B) => (B.id === O ? (B.onRemove?.(), !1) : !0)),
							);
					}
					clearActionButtons(R) {
						if (
							!this._reactiveStorageService.nonPersistentStorage.composerState
								.actionButtons?.[R]
						)
							return;
						(
							this._reactiveStorageService.nonPersistentStorage.composerState
								.actionButtons?.[R] ?? []
						).forEach((B) => {
							B.onRemove?.();
						}),
							this._reactiveStorageService.setNonPersistentStorage(
								"composerState",
								"actionButtons",
								R,
								[],
							);
					}
					async getCurrentFilesContent(R) {
						const O = new Map();
						for (const B of R) {
							if (!(await this._fileService.exists(w.URI.parse(B)))) continue;
							const U = w.URI.parse(B),
								z = await this._textModelService.createModelReference(U),
								x = z.object.textEditorModel.getLinesContent();
							z.dispose(), O.set(B, x);
						}
						return O;
					}
					selectLastHumanBubbleAboveInput(R) {
						const O = this.getComposerData(R);
						if (!O) return !1;
						for (let B = O.conversation.length - 1; B >= 0; B--) {
							const U = O.conversation[B];
							if (U.type === f.ConversationMessage_MessageType.HUMAN)
								return (
									this.updateComposerData(R, { selectedBubbleId: U.bubbleId }),
									(0, $.focusBubble)(U.bubbleId),
									!0
								);
						}
						return !1;
					}
					getNonTabFilesInContext(R) {
						const O = this.getComposerData(R);
						if (!O) return [];
						const B = new Set(
								O.tabs
									.filter((F) => F.type === "code")
									.map((F) => F.uri.toString()),
							),
							U = new Set(),
							z = new Set();
						for (const F of O.context.fileSelections) {
							const x = w.URI.revive(F.uri);
							B.has(x.toString()) || U.add(x.toString());
						}
						for (const F of O.context.selections) {
							const x = w.URI.revive(F.uri);
							!B.has(x.toString()) &&
								!U.has(x.toString()) &&
								z.add(x.toString());
						}
						return [
							...Array.from(U).map((F) => ({
								uri: w.URI.parse(F),
								type: "file",
							})),
							...Array.from(z).map((F) => ({
								uri: w.URI.parse(F),
								type: "selection",
							})),
						];
					}
					async getRelevantFiles(R) {
						const O = this.getComposerData(R);
						if (!O) return [];
						const B =
								O.gitGraphFileSuggestions ??
								(await this.getContextGraphFilesFromFileSelections(R)),
							U = this.getRecentlyViewedFiles(),
							z = new Set(),
							F = [];
						for (const x of [...B, ...U]) {
							const H = (0, g.$8gc)(x);
							(await this._fileService.exists(w.URI.parse(H))) &&
								(z.has(H) || (z.add(H), F.push(x)));
						}
						return (
							await new Promise((x) =>
								this._selectedContextService.addOnCursorIgnoreLoadedCallback(
									() => x(void 0),
								),
							),
							await this._selectedContextService.filterCursorIgnoredFiles(
								F,
								(x) => w.URI.revive(x.uri),
							)
						);
					}
					async getContextGraphFiles(R) {
						let O = 0;
						for (; !this._everythingProviderService.provider && O < 20; )
							await new Promise((q) => setTimeout(q, 1e3)), O++;
						if (!R.length) return [];
						const B = R.map(async (q) =>
								(
									await this._gitGraphService.getRelatedFiles({
										uri: w.URI.revive(q.uri),
										maxNumFiles: D,
									})
								).map((G) => ({ ...G })),
							),
							U = (await Promise.all(B)).flat(),
							z = new Set(R.map((q) => (0, g.$8gc)(q)));
						return U.reduce((q, V) => {
							const G = V.uri;
							if (z.has(G.toString())) return q;
							const K = q.find((J) => i.$dh.isEqual(J.uri, V.uri));
							return (
								(!K || V.weight > K.weight) &&
									(K && (q = q.filter((J) => !i.$dh.isEqual(J.uri, V.uri))),
									q.push(V)),
								q
							);
						}, [])
							.sort((q, V) => V.weight - q.weight)
							.slice(0, D)
							.map((q) => ({ uri: q.uri, fileName: (0, E.$sc)(q.uri.fsPath) }));
					}
					getRecentlyViewedFiles() {
						return this._recentFilesTrackerService
							.getRecentlyViewedFiles(M)
							.map((O) => ({
								uri: this._workspaceContextService.resolveRelativePath(
									O.relativePath,
								),
							}));
					}
					async getContextGraphFilesFromFileSelections(R) {
						let O = 0;
						for (; !this._everythingProviderService.provider && O < 20; )
							await new Promise((z) => setTimeout(z, 1e3)), O++;
						const B = this.getComposerData(R);
						if (!B) return [];
						if (!B.context.fileSelections.length)
							return (
								this.updateComposerData(R, { gitGraphFileSuggestions: [] }), []
							);
						const U = await this.getContextGraphFiles(B.context.fileSelections);
						return (
							this.updateComposerData(R, { gitGraphFileSuggestions: U }), U
						);
					}
					getAssociatedFileUris(R) {
						const O = this.getComposerData(R);
						if (!O) return [];
						const B = new Set(),
							U = (x) => B.add(x.toString()),
							z = (x) => {
								x?.forEach((H) => {
									H.to &&
										U(this._workspaceContextService.resolveRelativePath(H.to));
								});
							},
							F = this.getToolFormer(R);
						return (
							O.conversation.forEach((x) => {
								if (x.type === f.ConversationMessage_MessageType.HUMAN) {
									x.attachedCodeChunks.forEach((q) => {
										U(
											this._workspaceContextService.resolveRelativePath(
												q.relativeWorkspacePath,
											),
										);
									}),
										x.codebaseContextChunks.forEach((q) => {
											U(
												this._workspaceContextService.resolveRelativePath(
													q.relativeWorkspacePath,
												),
											);
										}),
										x.commits?.forEach((q) => z(q.diff)),
										x.pullRequests?.forEach((q) => z(q.diff)),
										x.gitDiffs?.forEach((q) => z(q.diffs)),
										x.notepads?.forEach((q) => {
											q.attachedCodeChunks?.forEach((V) => {
												U(
													this._workspaceContextService.resolveRelativePath(
														V.relativeWorkspacePath,
													),
												);
											}),
												q.commits?.forEach((V) => z(V.diff)),
												q.pullRequests?.forEach((V) => z(V.diff)),
												q.gitDiffs?.forEach((V) => z(V.diffs));
										});
									const H = F?.getBubbleData(x.bubbleId);
									if (H)
										switch (H.tool) {
											case T.ClientSideToolV2.READ_SEMSEARCH_FILES:
												H.result?.codeResults.forEach((q) => {
													q.codeBlock &&
														q.codeBlock.relativeWorkspacePath &&
														U(
															this._workspaceContextService.resolveRelativePath(
																q.codeBlock.relativeWorkspacePath,
															),
														);
												});
												break;
											case T.ClientSideToolV2.READ_FILE:
												H.result?.relativeWorkspacePath &&
													U(
														this._workspaceContextService.resolveRelativePath(
															H.result.relativeWorkspacePath,
														),
													);
												break;
											case T.ClientSideToolV2.RIPGREP_SEARCH:
												H.result?.internal?.results.forEach((q) => {
													q.resource && U(w.URI.parse(q.resource));
												});
												break;
											case T.ClientSideToolV2.LIST_DIR: {
												const q =
													this._workspaceContextService.resolveRelativePath(
														H.params?.directoryPath ?? "",
													);
												H.result?.files.forEach((V) => {
													V.isDirectory ||
														U(
															this._workspaceContextService.resolveRelativePath(
																w.URI.joinPath(q, V.name).toString(),
															),
														);
												});
												break;
											}
											case T.ClientSideToolV2.EDIT_FILE:
												H.params?.relativeWorkspacePath &&
													U(
														this._workspaceContextService.resolveRelativePath(
															H.params.relativeWorkspacePath,
														),
													);
												break;
											case T.ClientSideToolV2.SEMANTIC_SEARCH_FULL:
												H.result?.codeResults.forEach((q) => {
													q.codeBlock &&
														q.codeBlock.relativeWorkspacePath &&
														U(
															this._workspaceContextService.resolveRelativePath(
																q.codeBlock.relativeWorkspacePath,
															),
														);
												});
												break;
										}
								}
							}),
							O.context.fileSelections.forEach((x) => U(w.URI.revive(x.uri))),
							Object.keys(O.codeBlockData).forEach((x) => U(w.URI.parse(x))),
							Array.from(B).map((x) => w.URI.parse(x))
						);
					}
					toggleMainComposerMode() {
						const R =
							this._reactiveStorageService.applicationUserPersistentStorage
								.composerState.mainComposerMode;
						this._reactiveStorageService.setApplicationUserPersistentStorage(
							"composerState",
							"mainComposerMode",
							R === "chat" ? "edit" : "chat",
						);
					}
					setMainComposerMode(R) {
						this._reactiveStorageService.setApplicationUserPersistentStorage(
							"composerState",
							"mainComposerMode",
							R,
						);
					}
					getMainComposerMode() {
						return (
							this._reactiveStorageService.applicationUserPersistentStorage
								.composerState.mainComposerMode ?? "edit"
						);
					}
					getDebugInfo() {
						return {
							allComposersData: this.allComposersData,
							selectedComposerId: this.selectedComposerId,
							selectedChatId: this.selectedChatId,
						};
					}
					getLoadedComposers() {
						return this.composerDataHandleManager.getLoadedComposers();
					}
				};
				(e.ComposerDataService = N),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getHasAgenticBeforeBubble")],
						N.prototype,
						"getHasAgenticBeforeBubble",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.updateComposerDataAsync")],
						N.prototype,
						"updateComposerDataAsync",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getMaybeCachedModelReference")],
						N.prototype,
						"getMaybeCachedModelReference",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getWeakHandleOptimistic")],
						N.prototype,
						"getWeakHandleOptimistic",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getSelectedIdByForceMode")],
						N.prototype,
						"getSelectedIdByForceMode",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.composerWasLoadedHook")],
						N.prototype,
						"composerWasLoadedHook",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.onInlineDiffsLoadedHook")],
						N.prototype,
						"setOnInlineDiffsLoadedHook",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getSelectedComposerHandle")],
						N.prototype,
						"getSelectedComposerHandle",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getComposerHandleById")],
						N.prototype,
						"getComposerHandleById",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.updateSelectedComposer")],
						N.prototype,
						"updateSelectedComposer",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.updateComposerDataSetStore")],
						N.prototype,
						"updateComposerDataSetStore",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.updateComposerData")],
						N.prototype,
						"updateComposerData",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.HACKY_PLEASE_DO_NOT_USE_getComposerHandleById_ONLY_IF_LOADED",
							),
						],
						N.prototype,
						"HACKY_PLEASE_DO_NOT_USE_getComposerHandleById_ONLY_IF_LOADED",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.saveComposers")],
						N.prototype,
						"saveComposers",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getComposerFromIdOrHandle")],
						N.prototype,
						"getComposerFromIdOrHandle",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getComposerCodeBlock")],
						N.prototype,
						"getComposerCodeBlock",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.appendComposer")],
						N.prototype,
						"appendComposer",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.deleteComposer")],
						N.prototype,
						"deleteComposer",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.updateComposerCodeBlock")],
						N.prototype,
						"updateComposerCodeBlock",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getCodeBlockStatus")],
						N.prototype,
						"getCodeBlockStatus",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.setCodeBlockStatus")],
						N.prototype,
						"setCodeBlockStatus",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getCodeBlocksOfStatuses")],
						N.prototype,
						"getCodeBlocksOfStatuses",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.setGeneratingCodeBlocksToAborted",
							),
						],
						N.prototype,
						"setGeneratingCodeBlocksToAborted",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLatestCodeBlock")],
						N.prototype,
						"getLatestCodeBlock",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLatestCodeBlocks")],
						N.prototype,
						"getLatestCodeBlocks",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLatestCodeBlockForUri")],
						N.prototype,
						"getLatestCodeBlockForUri",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLatestCodeBlocksOfStatuses")],
						N.prototype,
						"getLatestCodeBlocksOfStatuses",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLatestCodeBlockVersion")],
						N.prototype,
						"getLatestCodeBlockVersion",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.getVersionExcludingNonAppliedCodeBlocks",
							),
						],
						N.prototype,
						"getVersionExcludingNonAppliedCodeBlocks",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.getLatestCodeBlockVersionForMessage",
							),
						],
						N.prototype,
						"getLatestCodeBlockVersionForMessage",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getInlineDiff")],
						N.prototype,
						"getInlineDiff",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getAllInlineDiffs")],
						N.prototype,
						"getAllInlineDiffs",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.doesFileHaveInlineDiff")],
						N.prototype,
						"doesFileHaveInlineDiff",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getAllCachedCodeBlocks")],
						N.prototype,
						"getAllCachedCodeBlocks",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.addTypesToCapabilityStatuses")],
						N.prototype,
						"addTypesToCapabilityStatuses",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.removeTypesFromCapabilityStatuses",
							),
						],
						N.prototype,
						"removeTypesFromCapabilityStatuses",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.setCapabilityStatus")],
						N.prototype,
						"setCapabilityStatus",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.setGeneratingCapabilitiesToAborted",
							),
						],
						N.prototype,
						"setGeneratingCapabilitiesToAborted",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.setGeneratingCapabilityCodeBlocksToAborted",
							),
						],
						N.prototype,
						"setGeneratingCapabilityCodeBlocksToAborted",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.isRunningCapabilities")],
						N.prototype,
						"isRunningCapabilities",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getToolFormer")],
						N.prototype,
						"getToolFormer",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getPendingUserDecisionGroup")],
						N.prototype,
						"getPendingUserDecisionGroup",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getIsBlockingUserDecision")],
						N.prototype,
						"getIsBlockingUserDecision",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.setGeneratingToolFormerToolsToAborted",
							),
						],
						N.prototype,
						"setLoadingToolFormerToolsToCancelled",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.addCapabilityRan")],
						N.prototype,
						"addCapabilityRan",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getComposerCapabilityCodeBlock")],
						N.prototype,
						"getComposerCapabilityCodeBlock",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.updateComposerCapabilityCodeBlock",
							),
						],
						N.prototype,
						"updateComposerCapabilityCodeBlock",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getComposerCapability")],
						N.prototype,
						"getComposerCapability",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getComposerBubble")],
						N.prototype,
						"getComposerBubble",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.updateComposerBubble")],
						N.prototype,
						"updateComposerBubble",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastHumanBubbleId")],
						N.prototype,
						"getLastHumanBubbleId",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastAiBubbleId")],
						N.prototype,
						"getLastAiBubbleId",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastBubbleId")],
						N.prototype,
						"getLastBubbleId",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastBubble")],
						N.prototype,
						"getLastBubble",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastHumanBubble")],
						N.prototype,
						"getLastHumanBubble",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastAiBubble")],
						N.prototype,
						"getLastAiBubble",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastAiBubbleWhere")],
						N.prototype,
						"getLastAiBubbleWhere",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLastBubbleWhere")],
						N.prototype,
						"getLastBubbleWhere",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getActionButtons")],
						N.prototype,
						"getActionButtons",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.addActionButton")],
						N.prototype,
						"addActionButton",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.removeActionButton")],
						N.prototype,
						"removeActionButton",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.clearActionButtons")],
						N.prototype,
						"clearActionButtons",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getCurrentFilesContent")],
						N.prototype,
						"getCurrentFilesContent",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.selectLastHumanBubbleAboveInput",
							),
						],
						N.prototype,
						"selectLastHumanBubbleAboveInput",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getNonTabFilesInContext")],
						N.prototype,
						"getNonTabFilesInContext",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getRelevantFiles")],
						N.prototype,
						"getRelevantFiles",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getContextGraphFiles")],
						N.prototype,
						"getContextGraphFiles",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getRecentlyViewedFiles")],
						N.prototype,
						"getRecentlyViewedFiles",
						null,
					),
					Ne(
						[
							(0, P.$KOb)(
								"ComposerDataService.getContextGraphFilesFromFileSelections",
							),
						],
						N.prototype,
						"getContextGraphFilesFromFileSelections",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getAssociatedFileUris")],
						N.prototype,
						"getAssociatedFileUris",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.toggleMainComposerMode")],
						N.prototype,
						"toggleMainComposerMode",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.setMainComposerMode")],
						N.prototype,
						"setMainComposerMode",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getMainComposerMode")],
						N.prototype,
						"getMainComposerMode",
						null,
					),
					Ne(
						[(0, P.$KOb)("ComposerDataService.getLoadedComposers")],
						N.prototype,
						"getLoadedComposers",
						null,
					),
					(e.ComposerDataService =
						N =
						L =
							Ne(
								[
									j(0, u.$lq),
									j(1, a.$Vi),
									j(2, r.$0zb),
									j(3, m.$Li),
									j(4, C.$3Db),
									j(5, n.$cEb),
									j(6, s.$lcc),
									j(7, y.$ll),
									j(8, S.$MO),
									j(9, k.$Q9b),
								],
								N,
							)),
					(0, d.$lK)(e.IComposerDataService, N, d.InstantiationType.Eager);
			},
		),
		define(
			de[3922],
			he([
				1, 0, 126, 167, 9, 219, 262, 395, 351, 225, 209, 25, 226, 22, 246, 271,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ContextPlanner = void 0);
				const p = 50,
					o = 100,
					f = 50,
					b = 1e4;
				let s = class extends C.ComposerCapability {
					constructor(y, $, v, S, I, T, P, k) {
						super(y, $),
							(this.composerDataService = v),
							(this.composerService = S),
							(this.workspaceContextService = I),
							(this.repositoryService = T),
							(this.fileService = P),
							(this.selectedContextService = k),
							(this.priority = 1),
							(this.type =
								i.ComposerCapabilityRequest_ComposerCapabilityType.CONTEXT_PLANNER),
							(this.name =
								C.capabilityTypeLabels[
									i.ComposerCapabilityRequest_ComposerCapabilityType.CONTEXT_PLANNER
								]),
							(this.schema = m.contextPlannerSchema),
							(this._semSearchFiles = []),
							(this._newFilesToAdd = []),
							(this._needsToMutateRequest = !1);
					}
					shouldRunOnBeforeSubmitChat(y) {
						return !y.isCapabilityIteration;
					}
					async onBeforeSubmitChat(y) {
						const $ = this.composerDataService.getComposerData(this.composerId);
						if (!$) return;
						const v = this.composerDataService.getComposerBubble(
							this.composerId,
							y.humanBubbleId,
						);
						if (!v) return;
						if (this._newFilesToAdd.length > 0) {
							y.contextUsed &&
								(y.contextUsed.fileSelections = [
									...y.contextUsed.fileSelections,
									...this._newFilesToAdd.map((T) => ({ uri: T })),
								]),
								(this._newFilesToAdd = []);
							return;
						}
						const S = new AbortController();
						let I = [];
						try {
							const T = this.repositoryService.parallelSearch(v.text, o, f, {
									fast: !0,
									raceNRequests: 6,
									abortSignal: S.signal,
								}),
								P = setTimeout(() => {
									console.error(
										"[composer] Aborting context planner semantic search",
									),
										S.abort();
								}, b),
								k = await T;
							if ((clearTimeout(P), k.length > 0)) {
								const L = new Set(
									$.context.fileSelections.map((D) =>
										this.workspaceContextService.asRelativePath(
											w.URI.revive(D.uri),
										),
									),
								);
								(I = (0, n.dedupeCodeResults)(k)
									.filter((D) => !L.has(D))
									.slice(0, p)),
									console.log("[composer] Semantic search results:", I);
							}
						} catch (T) {
							console.error("[composer] Error during semantic search:", T);
						}
						(this._semSearchFiles = I.map((T) =>
							this.workspaceContextService.resolveRelativePath(T),
						)),
							(this._needsToMutateRequest = !0),
							await this.composerService.submitChatMaybeAbortCurrent(
								this.composerId,
								"",
								{
									isThought: !0,
									isCapabilityIteration: !0,
									skipAddNewHumanMessage: !0,
									capabilityProcessesToSkip: [
										"composer-settled",
										"before-submit-chat",
									],
									modelOverride: this.data.model,
								},
							),
							(this._needsToMutateRequest = !1);
					}
					silentRunInPlaceMutateRequestBeforeSubmit(y) {
						return !0;
					}
					shouldRunInPlaceMutateRequestBeforeSubmit(y) {
						return this._semSearchFiles.length > 0;
					}
					async runInPlaceMutateRequestBeforeSubmit(y, $) {
						const v = y.conversation?.[y.conversation.length - 1];
						if (
							!v ||
							v.type !== t.ConversationMessage_MessageType.HUMAN ||
							((y.conversation = y.conversation?.filter((P, k) => {
								if (P.type === t.ConversationMessage_MessageType.AI)
									return !P.capabilityCodeBlocks?.some(
										(L) => L.type === r.ContextPlannerCodeBlockAlias,
									);
								if (
									P.type === t.ConversationMessage_MessageType.HUMAN &&
									k < (y.conversation?.length ?? 0) - 1
								) {
									const L = y.conversation?.[k + 1];
									if (L && L.type === t.ConversationMessage_MessageType.AI)
										return !L.capabilityCodeBlocks?.some(
											(D) => D.type === r.ContextPlannerCodeBlockAlias,
										);
								}
								return !0;
							})),
							!this._needsToMutateRequest)
						)
							return;
						const S = this._semSearchFiles.map((P) => ({ uri: P })),
							I =
								await this.selectedContextService.getCodeChunksFromFileSelections(
									S,
								),
							T = new i.$1z({
								type: i.ComposerCapabilityRequest_ComposerCapabilityType
									.CONTEXT_PLANNER,
								data: {
									case: "contextPlanner",
									value: {
										customInstructions: this.data.customInstructions,
										attachedCodeChunks: I,
									},
								},
							});
						(v.capabilities = [...(v.capabilities ?? []), T]),
							(this._semSearchFiles = []);
					}
					shouldProcessCodeBlock(y) {
						const $ = y.capabilityCodeBlock;
						return $?.type === r.ContextPlannerCodeBlockAlias && !!$.content;
					}
					async processCodeBlock(y) {
						const $ = y.capabilityCodeBlock;
						if (!$?.content || $.type !== r.ContextPlannerCodeBlockAlias)
							throw new Error(
								"[composer] Invalid code block for ContextPlanner",
							);
						try {
							const v = await this.parseContextPlannerContent($.content);
							if (!v)
								throw new Error(
									"[composer] Invalid context planner content format",
								);
							this.composerDataService.updateComposerCapabilityCodeBlock(
								this.composerId,
								y.aiBubbleId,
								$.codeBlockIdx,
								{
									type: r.ContextPlannerCodeBlockAlias,
									parsedContextPlanner: v,
									status: "completed",
								},
							),
								(this._newFilesToAdd = v);
						} catch (v) {
							throw (
								(console.error(
									"[composer] Error processing context planner code block:",
									v,
								),
								v)
							);
						}
					}
					async parseContextPlannerContent(y) {
						try {
							const $ = JSON.parse(y);
							if (!Array.isArray($)) return null;
							const v = [];
							for (const S of $) {
								if (typeof S != "string") continue;
								const I = this.workspaceContextService.resolveRelativePath(S);
								!I || !(await this.fileService.exists(I)) || v.push(I);
							}
							return v;
						} catch ($) {
							throw (
								(console.error(
									"[composer] Error parsing context planner content:",
									$,
								),
								$)
							);
						}
					}
				};
				(e.ContextPlanner = s),
					(e.ContextPlanner = s =
						Ne(
							[
								(0, d.autoCancellableAndStatusUpdater)(),
								j(2, u.IComposerDataService),
								j(3, E.IComposerService),
								j(4, a.$Vi),
								j(5, h.$J6b),
								j(6, c.$ll),
								j(7, g.$Q9b),
							],
							s,
						)),
					(0, C.registerComposerCapability)(
						i.ComposerCapabilityRequest_ComposerCapabilityType.CONTEXT_PLANNER,
						s,
					);
			},
		),
		define(
			de[3923],
			he([
				1, 0, 167, 45, 219, 262, 395, 351, 209, 67, 9, 17, 64, 18, 44, 19, 47,
				506, 2404,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.EditTrail = void 0);
				const f = 5;
				let b = class extends E.ComposerCapability {
					constructor(l, y, $, v, S, I, T, P) {
						super(l, y),
							(this.composerDataService = $),
							(this.composerService = v),
							(this.composerViewService = S),
							(this.reactiveStorageService = I),
							(this.modelService = T),
							(this.editorService = P),
							(this.priority = 1),
							(this.type =
								t.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL),
							(this.name =
								E.capabilityTypeLabels[
									t.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL
								]),
							(this.schema = d.editTrailSchema),
							(this.modelTrackers = new Map()),
							(this.decorationOptions = {
								description: "edit-trail-decoration",
								stickiness:
									h.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
								isWholeLine: !0,
								className: "edit-trail-decoration",
							}),
							(this.finalStates = new Map()),
							(this.dirtyFiles = new Set()),
							([this.state, this.setState] = (0,
							E.createEditTrailParamsSignal)()),
							this.D(
								this.reactiveStorageService.onChangeEffectManuallyDisposed({
									deps: [() => this.state().isTrailing],
									onChange: ({ deps: k, prevDeps: L }) => {
										const [D] = k,
											[M] = L ?? [];
										D !== M && (D ? this.startTrailing() : this.stopTrailing());
									},
								}),
							),
							this.D(
								this.modelService.onModelAdded((k) => {
									this.state().isTrailing && this.trackModel(k);
								}),
							),
							this.D(
								this.modelService.onModelRemoved((k) => {
									this.disposeTracker(k.uri);
								}),
							),
							this.D(
								this.composerViewService.onDidHide(() => {
									this.state().isTrailing && this.setState("isTrailing", !1);
								}),
							);
					}
					silentOnStartSubmitChat(l) {
						return !1;
					}
					async onStartSubmitChatReturnShouldStop(l) {
						return (
							!this.state().isTrailing ||
								l.isCapabilityIteration ||
								(await this.stopTrailing(), this.setState("isTrailing", !1)),
							!1
						);
					}
					silentRunInPlaceMutateRequestBeforeSubmit(l) {
						return !0;
					}
					async runInPlaceMutateRequestBeforeSubmit(l, y) {
						if (
							!(
								!this.composerDataService.getComposerData(this.composerId) ||
								!l.conversation
							)
						)
							for (let v = 0; v < l.conversation.length; v++) {
								const S = l.conversation[v];
								if (!S) continue;
								const I = S.context;
								if (!I || !I.editTrailContexts) continue;
								const T = I.editTrailContexts.map((P) => ({
									uniqueId: (0, p.$9g)(),
									editTrailSorted: P.editTrailSorted.map((k) => {
										const L = u.URI.revive(k.uri).toString(),
											D = P.finalStates[L],
											M = D
												? this.getContextLines(D, k.range.startLine, f)
												: "";
										return {
											relativeWorkspacePath: L,
											contextLines: M,
											text: k.text,
											textRange: k.textRange,
											initialRange: k.initialRange,
											range: k.range,
										};
									}),
								}));
								l.conversation[v].editTrailContexts = T;
							}
					}
					startTrailing() {
						this.finalStates.clear();
						for (const l of this.modelService.getModels()) this.trackModel(l);
					}
					trackModel(l) {
						const y = l.uri.toString();
						if (this.modelTrackers.has(y)) return;
						const $ = [],
							v = {
								model: l,
								decorations: [],
								originalContent: l.getValue(),
								dispose: () => {
									$.forEach((I) => I.dispose());
									const S = v.decorations.map((I) => I.id);
									S.length && l.deltaDecorations(S, []);
								},
							};
						$.push(
							l.onDidChangeContent((S) => {
								this.state().hasModifiedAnyModel ||
									this.setState("hasModifiedAnyModel", !0);
								const T = l.uri.toString();
								this.dirtyFiles.has(T) || this.dirtyFiles.add(T);
								for (const P of S.changes)
									if (P.text === "") {
										const k = a.$iL.lift(P.range);
										v.decorations = v.decorations.filter((L) => {
											const D = l.getDecorationRange(L.id);
											return D
												? k.containsRange(D)
													? (l.deltaDecorations([L.id], []), !1)
													: !0
												: !1;
										});
									}
								for (const P of S.changes)
									if (P.text !== "") {
										const k = P.text.split(`
`),
											L = new a.$iL(
												P.range.startLineNumber,
												1,
												P.range.startLineNumber + k.length - 1,
												l.getLineMaxColumn(
													P.range.startLineNumber + k.length - 1,
												),
											);
										if (
											v.decorations.find((N) => {
												const A = l.getDecorationRange(N.id);
												return A
													? A.startLineNumber <= L.startLineNumber &&
															A.endLineNumber >= L.endLineNumber
													: !1;
											})
										)
											continue;
										const M = l.deltaDecorations(
											[],
											[{ range: L, options: this.decorationOptions }],
										)[0];
										v.decorations.push({
											id: M,
											timestamp: Date.now(),
											uri: l.uri,
											initialRange: L,
										});
									}
							}),
						),
							this.modelTrackers.set(y, v);
					}
					disposeTracker(l) {
						const y = this.modelTrackers.get(l.toString());
						y &&
							(y.dispose(),
							this.modelTrackers.delete(l.toString()),
							this.dirtyFiles.delete(l.toString()));
					}
					async stopTrailing() {
						const l = [],
							y = new Map();
						this.finalStates.clear(), this.setState("hasModifiedAnyModel", !1);
						for (const [T, P] of this.modelTrackers) {
							const k = P.model;
							for (const L of P.decorations) {
								const D = k.getDecorationRange(L.id);
								D &&
									l.push({
										uri: L.uri,
										timestamp: L.timestamp,
										range: {
											startLine: D.startLineNumber,
											endLineInclusive: D.endLineNumber,
										},
										initialRange: {
											startLine: L.initialRange.startLineNumber,
											endLineInclusive: L.initialRange.endLineNumber,
										},
										text: k.getValueInRange({
											startLineNumber: D.startLineNumber,
											startColumn: 1,
											endLineNumber: D.endLineNumber,
											endColumn: k.getLineMaxColumn(D.endLineNumber),
										}),
										textRange: {
											startLine: D.startLineNumber,
											endLineInclusive: D.endLineNumber,
										},
										contextLines: "",
									});
							}
							if (this.dirtyFiles.has(T)) {
								this.finalStates.set(T, k.getValue()),
									this.disposeTracker(u.URI.parse(T)),
									k.pushEditOperations(
										null,
										[
											{
												range: new a.$iL(
													1,
													1,
													k.getLineCount(),
													k.getLineMaxColumn(k.getLineCount()),
												),
												text: P.originalContent,
											},
										],
										() => null,
									);
								const L = this.editorService.findEditors(k.uri)[0];
								L &&
									(await this.editorService.save(L, {
										reason: n.SaveReason.EXPLICIT,
									}));
							}
							y.set(T, k);
						}
						l.sort((T, P) => T.timestamp - P.timestamp);
						const $ = [];
						for (const T of l) {
							const P = $[$.length - 1];
							if (!P || !g.$dh.isEqual(u.URI.from(P.uri), u.URI.from(T.uri))) {
								$.push(T);
								continue;
							}
							(T.range.startLine <= P.range.endLineInclusive &&
								T.range.endLineInclusive >= P.range.startLine) ||
							Math.abs(T.range.startLine - P.range.endLineInclusive) <= 1 ||
							Math.abs(P.range.startLine - T.range.endLineInclusive) <= 1
								? y.get(T.uri.toString()) &&
									((P.range = {
										startLine: Math.min(P.range.startLine, T.range.startLine),
										endLineInclusive: Math.max(
											P.range.endLineInclusive,
											T.range.endLineInclusive,
										),
									}),
									T.range.startLine < P.range.startLine
										? (P.text = `${T.text}
${P.text}`)
										: (P.text += `
${T.text}`))
								: $.push(T);
						}
						const v = new Map(),
							S = [];
						for (const T of $) {
							const P = this.finalStates.get(T.uri.toString());
							if (P) {
								v.set(T.uri.toString(), P);
								const k = T.text.split(`
`).length,
									L = this.getContextLines(P, T.range.startLine, k, f),
									D = Math.min(f, T.range.startLine - 1),
									M = { startLine: D + 1, endLineInclusive: D + k };
								S.push({ ...T, contextLines: L, textRange: M });
							} else S.push(T);
						}
						for (const T of S) {
							const P = [];
							if (
								(P.push("<user_edit_instructions>"),
								P.push(
									`In file ${T.uri.toString()} at line ${T.initialRange.startLine}:`,
								),
								v.has(T.uri.toString()))
							) {
								const k = T.contextLines.split(`
`),
									L = k.slice(0, T.textRange.startLine - 1),
									D = k.slice(T.textRange.endLineInclusive);
								P.push(
									L.join(`
`),
								),
									P.push(">>>>>"),
									P.push(T.text),
									P.push("<<<<<"),
									P.push(
										D.join(`
`),
									);
							}
							P.push("</user_edit_instructions>"),
								P.push("---"),
								console.log(
									P.join(`
`),
								),
								console.log("text:", T.text),
								console.log("contextLines:", T.contextLines),
								console.log("textRange:", T.textRange);
						}
						const I = {
							files: Array.from(v.keys()).map((T) => u.URI.parse(T)),
							editTrailSorted: S,
							finalStates: Object.fromEntries(v),
							uniqueId: (0, p.$9g)(),
						};
						this.finalStates.clear(), this.dirtyFiles.clear();
						for (const [T] of this.modelTrackers)
							this.disposeTracker(u.URI.parse(T));
						if (I.editTrailSorted.length === 0) {
							this.setState("hasModifiedAnyModel", !1);
							return;
						}
						this.composerService.addContext({
							composerId: this.composerId,
							contextType: "editTrailContexts",
							value: I,
							uuid: I.uniqueId,
						});
					}
					dispose() {
						this.finalStates.clear();
						for (const [l] of this.modelTrackers)
							this.disposeTracker(u.URI.parse(l));
						super.dispose();
					}
					getContextLines(l, y, $, v = 5) {
						const S = l.split(`
`),
							I = Math.max(0, y - v - 1),
							T = Math.min(S.length, y + $ + v - 1);
						return S.slice(I, T).join(`
`);
					}
				};
				(e.EditTrail = b),
					(e.EditTrail = b =
						Ne(
							[
								(0, C.autoCancellableAndStatusUpdater)(),
								j(2, m.IComposerDataService),
								j(3, w.IComposerService),
								j(4, o.IComposerViewsService),
								j(5, i.$0zb),
								j(6, r.$QO),
								j(7, c.$IY),
							],
							b,
						)),
					(0, E.registerComposerCapability)(
						t.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL,
						b,
					);
			},
		),
		define(
			de[3924],
			he([1, 0, 262, 351, 617, 209, 126, 167, 395]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.LoopOnCommand = void 0);
				let r = class extends t.ComposerCapability {
					constructor(a, h, c, n) {
						super(a, h),
							(this.terminalExecutionService = c),
							(this.composerDataService = n),
							(this.type =
								d.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_COMMAND),
							(this.name =
								t.capabilityTypeLabels[
									d.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_COMMAND
								]),
							(this.priority = 2),
							(this.schema = i.loopOnCommandSchema),
							(this.lastExecutionResult = null),
							(this.sessionId = void 0),
							this.terminalExecutionService
								.startSession()
								.then(({ sessionId: g }) => (this.sessionId = g));
					}
					silentRunInPlaceMutateRequestBeforeSubmit() {
						return !0;
					}
					async executeCommand() {
						if (!this.lastExecutionResult) {
							let a = this.sessionId;
							if (!a) {
								const { sessionId: c, terminalInstance: n } =
									await this.terminalExecutionService.startSession();
								(this.sessionId = c), (a = c);
							}
							const h = await this.terminalExecutionService.execute(
								a,
								this.data.command,
							);
							this.lastExecutionResult = {
								output: h.output,
								exitCode: h.exitCode ?? 0,
							};
						}
						return this.lastExecutionResult;
					}
					async runInPlaceMutateRequestBeforeSubmit(a, h) {
						const { composerId: c } = h,
							n = this.composerDataService.getComposerData(c),
							g = a.conversation?.[a.conversation.length - 1];
						if (!g || !n || g.type !== C.ConversationMessage_MessageType.HUMAN)
							return;
						const p = await this.executeCommand(),
							o = new d.$1z({
								type: d.ComposerCapabilityRequest_ComposerCapabilityType
									.LOOP_ON_COMMAND,
								data: {
									case: "loopOnCommand",
									value: {
										command: this.data.command,
										customInstructions: this.data.customInstructions,
										output: p.output,
										exitCode: p.exitCode,
									},
								},
							});
						(g.capabilities = [...(g.capabilities ?? []), o]),
							(this.lastExecutionResult = null);
					}
					async onComposerSettledReturnShouldLoop(a) {
						const { composerId: h } = a,
							c = this.composerDataService.getComposerData(h);
						if (!c) return !1;
						const n = (0,
							t.countCapabilityIterationsFromLastHumanMessageExcludingCurrent)(
								c.conversation,
							),
							g = this.data.maxIterations ?? 5;
						if (n >= g) return !1;
						const p = await this.executeCommand();
						return (this.lastExecutionResult = null), p.exitCode !== 0;
					}
					silentOnComposerSettled(a) {
						return !1;
					}
				};
				(e.LoopOnCommand = r),
					(e.LoopOnCommand = r =
						Ne(
							[
								(0, m.autoCancellableAndStatusUpdater)(),
								j(2, w.$Ycc),
								j(3, E.IComposerDataService),
							],
							r,
						)),
					(0, t.registerComposerCapability)(
						d.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_COMMAND,
						r,
					);
			},
		),
		define(
			de[3925],
			he([1, 0, 126, 167, 219, 262, 395, 351, 225, 209]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.MegaPlanner = void 0);
				let u = class extends E.ComposerCapability {
					constructor(h, c, n, g) {
						super(h, c),
							(this.composerDataService = n),
							(this.composerService = g),
							(this.priority = 1),
							(this.type =
								i.ComposerCapabilityRequest_ComposerCapabilityType.MEGA_PLANNER),
							(this.name =
								E.capabilityTypeLabels[
									i.ComposerCapabilityRequest_ComposerCapabilityType.MEGA_PLANNER
								]),
							(this.schema = d.megaPlannerSchema),
							(this._needsToMutateRequest = !1);
					}
					shouldRunOnBeforeSubmitChat(h) {
						return !this._needsToMutateRequest && !h.isCapabilityIteration;
					}
					async onBeforeSubmitChat(h) {
						const { composerId: c } = h;
						let n = this.composerDataService.getComposerData(c);
						if (
							!n ||
							!this.composerDataService.getComposerBubble(c, h.humanBubbleId)
						)
							return;
						if (
							((this._needsToMutateRequest = !0),
							await this.composerService.submitChatMaybeAbortCurrent(c, "", {
								isThought: !0,
								isCapabilityIteration: !0,
								skipAddNewHumanMessage: !0,
								capabilityProcessesToSkip: ["composer-settled"],
								modelOverride: this.data.model,
							}),
							(this._needsToMutateRequest = !1),
							this.composerDataService.getComposerData(h.composerId)?.status ===
								"aborted" || this.isAborted())
						)
							throw new Error("[composer] User aborted mega planner chat");
						const p = (0, m.createDefaultConversationMessage)();
						(p.isCapabilityIteration = !0),
							this.composerDataService.updateComposerDataSetStore(c, (o) =>
								o("conversation", [
									...n.conversation,
									{
										...p,
										text: "Complete the above plan without missing any steps.",
									},
								]),
							);
					}
					silentRunInPlaceMutateRequestBeforeSubmit() {
						return !0;
					}
					shouldRunInPlaceMutateRequestBeforeSubmit() {
						return this._needsToMutateRequest;
					}
					async runInPlaceMutateRequestBeforeSubmit(h, c) {
						const { composerId: n } = c,
							g = this.composerDataService.getComposerData(n),
							p = h.conversation?.[h.conversation.length - 1];
						if (!p || !g || p.type !== t.ConversationMessage_MessageType.HUMAN)
							return;
						const o = new i.$1z({
							type: i.ComposerCapabilityRequest_ComposerCapabilityType
								.MEGA_PLANNER,
							data: {
								case: "megaPlanner",
								value: { customInstructions: this.data.customInstructions },
							},
						});
						p.capabilities = [...(p.capabilities ?? []), o];
					}
					async onComposerSettledReturnShouldLoop(h) {
						return !1;
					}
					silentOnComposerSettled(h) {
						return !1;
					}
				};
				(e.MegaPlanner = u),
					(e.MegaPlanner = u =
						Ne(
							[
								(0, C.autoCancellableAndStatusUpdater)(),
								j(2, r.IComposerDataService),
								j(3, w.IComposerService),
							],
							u,
						)),
					(0, E.registerComposerCapability)(
						i.ComposerCapabilityRequest_ComposerCapabilityType.MEGA_PLANNER,
						u,
					);
			},
		),
		define(
			de[3926],
			he([1, 0, 126, 167, 45, 219, 262, 395, 351, 209]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.RememberThis = void 0);
				let u = class extends C.ComposerCapability {
					constructor(h, c, n, g, p) {
						super(h, c),
							(this.composerDataService = n),
							(this.composerService = g),
							(this.reactiveStorageService = p),
							(this.priority = 1),
							(this.type =
								i.ComposerCapabilityRequest_ComposerCapabilityType.REMEMBER_THIS),
							(this.name = "Remember This"),
							(this.schema = m.rememberThisSchema),
							(this._needsToMutateRequest = { type: "inject-memory" });
					}
					get memories() {
						return (
							this.reactiveStorageService.workspaceUserPersistentStorage
								.composerState?.memories ?? []
						);
					}
					updateMemories(h) {
						this.reactiveStorageService.setWorkspaceUserPersistentStorage(
							"composerState",
							{ memories: h },
						);
					}
					shouldRunOnAfterSubmitChat(h) {
						const c = this.composerDataService.getComposerBubble(
							h.composerId,
							h.humanBubbleId,
						);
						return (
							!h.isCapabilityIteration && c?.context?.useRememberThis === !0
						);
					}
					async onAfterSubmitChat(h) {
						const { composerId: c } = h;
						let n = this.composerDataService.getComposerData(c);
						if (
							!n ||
							!this.composerDataService.getComposerBubble(c, h.humanBubbleId) ||
							((this._needsToMutateRequest = {
								type: "produce-memory",
								humanBubbleId: h.humanBubbleId,
							}),
							await this.composerService.submitChatMaybeAbortCurrent(
								c,
								"Based on the above conversation, give me back a short summary of the most important points to remember. Just output the summary, nothing else.",
								{
									isThought: !0,
									isCapabilityIteration: !0,
									capabilityProcessesToSkip: [
										"composer-settled",
										"after-submit-chat",
										"before-submit-chat",
										"start-submit-chat",
									],
									modelOverride: "gpt-4o-mini",
								},
							),
							(n = this.composerDataService.getComposerData(c)),
							!n)
						)
							return;
						const p = n.conversation[n.conversation.length - 1].text;
						this.updateMemories([...this.memories, p]),
							(this._needsToMutateRequest = { type: "inject-memory" });
					}
					silentRunInPlaceMutateRequestBeforeSubmit() {
						return !0;
					}
					async runInPlaceMutateRequestBeforeSubmit(h, c) {
						const { composerId: n } = c,
							g = this.composerDataService.getComposerData(n),
							p = h.conversation?.[h.conversation.length - 1];
						if (
							!(
								!p ||
								!g ||
								p.type !== t.ConversationMessage_MessageType.HUMAN ||
								!h.conversation
							)
						) {
							if (this._needsToMutateRequest.type === "inject-memory") {
								const o = new i.$1z({
									type: i.ComposerCapabilityRequest_ComposerCapabilityType
										.REMEMBER_THIS,
									data: {
										case: "rememberThis",
										value: {
											customInstructions: this.data.customInstructions,
											memory: this.memories.join(`
`),
										},
									},
								});
								p.capabilities = [...(p.capabilities ?? []), o];
							} else if (this._needsToMutateRequest.type === "produce-memory") {
								const o = h.conversation.findIndex(
									(f) =>
										f.bubbleId === this._needsToMutateRequest.humanBubbleId,
								);
								if (o === -1) return;
								h.conversation = h.conversation.slice(o);
							}
						}
					}
					deleteLastMemory() {
						this.updateMemories(this.memories.slice(0, -1));
					}
				};
				(e.RememberThis = u),
					(e.RememberThis = u =
						Ne(
							[
								(0, d.autoCancellableAndStatusUpdater)(),
								j(2, r.IComposerDataService),
								j(3, E.IComposerService),
								j(4, w.$0zb),
							],
							u,
						)),
					(0, C.registerComposerCapability)(
						i.ComposerCapabilityRequest_ComposerCapabilityType.REMEMBER_THIS,
						u,
					);
			},
		),
		define(
			de[3927],
			he([1, 0, 272, 83, 3, 47, 5, 45, 418, 140, 337, 3045, 1729, 246]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$q0b = e.$p0b = void 0);
				const n = (f) => {
						switch (f) {
							case h.ChatKind.normalChat:
								return "norm";
							case h.ChatKind.advancedContextChat:
								return "adv";
							case h.ChatKind.longContextChat:
								return "long";
						}
					},
					g = (f) => {
						switch (f) {
							case t.RerankerAlgorithm.UMEA:
								return "umea";
							case t.RerankerAlgorithm.VOYAGE:
								return "voyage";
							case t.RerankerAlgorithm.VOYAGE_EMBEDS:
								return "voy_emb";
							case t.RerankerAlgorithm.COHERE:
								return "cohere";
							case t.RerankerAlgorithm.LULEA:
								return "lulea";
							case t.RerankerAlgorithm.LULEA_HAIKU:
								return "lul_hku";
							case t.RerankerAlgorithm.NONE:
								return "none";
							case t.RerankerAlgorithm.IDENTITY:
								return "ident";
							case t.RerankerAlgorithm.UNSPECIFIED:
								return "unspec";
						}
						return "<unk>";
					};
				class p {
					constructor(b) {
						(this.d = b), (this.b = 0), (this.c = []);
					}
					async acquire() {
						if (this.b < this.d) {
							this.b++;
							return;
						}
						await new Promise((b) => {
							this.c.push(b);
						});
					}
					release() {
						this.b--, this.c.length > 0 && this.c.shift()();
					}
				}
				e.$p0b = (0, C.$Mi)("evalService");
				let o = class extends w.$1c {
					constructor(b, s, l) {
						super(), (this.b = b), (this.c = s), (this.f = l);
					}
					g() {
						return this.c.applicationUserPersistentStorage.isEvalMode;
					}
					h(b, s, l) {
						const y = (0, E.$9g)(),
							$ = (0, c.createUserBubble)({ text: s });
						return (
							($.advancedCodebaseContextOptions = {
								numResultsPerSearch: 1200,
								reranker: l.reranker ?? t.RerankerAlgorithm.NONE,
								reasoningStep: !1,
								rechunker:
									l.rechunker ?? t.RechunkerChoice.RECHUNKER_CHOICE_IDENTITY,
							}),
							($.text = s),
							this.f.setChatData("tabs", (v) => [
								{
									tabId: y,
									chatTitle: `${JSON.stringify(s.slice(0, 10))} - ${l.model} - ${n(l.chatKind)} - ${g(l.reranker ?? t.RerankerAlgorithm.NONE)}`,
									bubbles: [$],
									lastSendTime: Date.now(),
									tabState: r.TabState.chat,
									additionalData: void 0,
									longContextModeEnabled:
										l.chatKind === h.ChatKind.longContextChat,
									evalInfo: {
										task: b,
										chatConfig: l,
										query: s,
										chatHasRun: !1,
									},
									lastFocusedBubbleId: $.id,
								},
								...v,
							]),
							y
						);
					}
					j(b, s) {
						return b.queries.map((y) => s.map(($) => this.h(b, y, $)));
					}
					m(b, s) {
						this.f.setChatData("tabs", (y) =>
							y.filter(($) => !$.evalInfo?.chatConfig),
						);
						const l = b.map((y) => this.j(y, s));
						return console.log("tabs", this.f.chatData.tabs), l;
					}
					loadDefaultTasks() {
						if (!this.g()) return [];
						const b = this.m(a.$n0b, a.$o0b);
						return (
							fetch("http://localhost:7999/evals/writeEvalTasks", {
								method: "POST",
								body: JSON.stringify(a.$n0b),
							}),
							b
						);
					}
					async n(b) {
						const s = await Promise.all(b.map(async (v) => this.s(v))),
							l = b.filter((v, S) => !s[S]),
							y = new p(5);
						let $ = !1;
						return (
							await Promise.allSettled(
								l.map(async (v, S) => {
									try {
										if ((await y.acquire(), !this.s(v) && (await this.s(v)))) {
											console.log(
												"SKIPPING TAB",
												v.chatTitle,
												"requestId",
												this.q(v),
											);
											return;
										}
										console.log(
											"running chat",
											S,
											"/",
											l.length,
											"time",
											new Date().toLocaleTimeString(),
										),
											await this.t(v);
										const I = this.r(v.tabId);
										this.s(I) ||
											(console.log("Chat did not run", I?.chatTitle), ($ = !0));
									} finally {
										y.release();
									}
								}),
							),
							$
						);
					}
					q(b) {
						if (b) return b.evalInfo?.requestId;
					}
					r(b) {
						return this.f.chatData.tabs.find((s) => s.tabId === b);
					}
					async s(b) {
						try {
							if (!b) return !1;
							const s = this.r(b.tabId);
							if (s?.evalInfo?.chatHasRun) return s.evalInfo.chatHasRun;
							const l = this.q(s);
							if (!l) return !1;
							const v = (
								await (
									await fetch(
										"http://localhost:7999/evals/hasContextEval?requestId=" + l,
									)
								).json()
							).hasContextEval;
							return (
								v &&
									s &&
									this.f.setChatData(
										"tabs",
										(S) => S.tabId === s.tabId,
										"evalInfo",
										(S) => S && { ...S, chatHasRun: v },
									),
								v
							);
						} catch {
							return !1;
						}
					}
					async runRecentEvalChats() {
						if (!this.g()) return;
						const b = this.f.chatData.tabs.filter((s) => s.evalInfo);
						for (let s = 0; s < 20; s++) {
							await this.n(b);
							const l = (v) =>
									Array.isArray(v)
										? v.map(l)
										: typeof v == "object"
											? Object.fromEntries(
													Object.entries(v)
														.filter(([S]) => S !== "codebaseResults")
														.map(([S, I]) => [S, l(I)]),
												)
											: v,
								y = l(
									JSON.parse(
										JSON.stringify(
											this.f.chatData.tabs.filter(
												(v) => v.evalInfo?.chatHasRun,
											),
										),
									),
								);
							let $ = !1;
							for (let v of this.f.chatData.tabs)
								if (v.evalInfo && !(await this.s(v))) {
									$ = !0;
									break;
								}
							if (
								(await fetch("http://localhost:7999/evals/writeEvalTabData", {
									method: "POST",
									body: JSON.stringify(y),
								}),
								!$)
							)
								break;
							await new Promise((v) => setTimeout(v, 3e4));
						}
					}
					async t(b) {
						if (!b) return;
						const s = b.bubbles[0],
							l = b.evalInfo;
						if (!l || s.type !== "user") return;
						const { chatConfig: y, task: $, query: v } = l;
						s.text = v;
						const { model: S, chatKind: I, reranker: T } = y,
							P = {
								[h.ChatKind.normalChat]: { chatType: "context" },
								[h.ChatKind.advancedContextChat]: {
									chatType: "context",
									useAdvancedContext: !0,
								},
								[h.ChatKind.longContextChat]: {
									chatType: "context",
									longContextModeEnabled: !0,
								},
							};
						await this.b.submitUnifiedChat({
							bubbleID: s.id,
							tabID: b.tabId,
							overrideModelDetails: new i.$Zs({ modelName: S }),
							...P[I],
						}),
							await this.f.setChatData(
								"tabs",
								(k) => k.tabId === b.tabId && !!k.evalInfo,
								"bubbles",
								(k, L) => k.type === "user" && L === 0,
								(k) => ({ ...k, rawText: b.evalInfo?.query ?? "" }),
							),
							console.log("SAVING CACHED STATUS", await this.s(b));
					}
				};
				(e.$q0b = o),
					(e.$q0b = o = Ne([j(0, m.$qgc), j(1, d.$0zb), j(2, u.$kgc)], o));
			},
		),
		