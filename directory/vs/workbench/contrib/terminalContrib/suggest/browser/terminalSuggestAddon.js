define(
			de[3655],
			he([
				1, 0, 7, 14, 6, 3, 54, 37, 1692, 10, 5, 21, 189, 1202, 106, 51, 107,
				691, 809, 3651, 3652, 3654,
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
			) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SWc = e.VSCodeSuggestOscPt = void 0),
					(e.$TWc = T),
					(t = mt(t));
				var $;
				(function (D) {
					(D.Completions = "Completions"),
						(D.CompletionsPwshCommands = "CompletionsPwshCommands"),
						(D.CompletionsBash = "CompletionsBash"),
						(D.CompletionsBashFirstWord = "CompletionsBashFirstWord");
				})($ || (e.VSCodeSuggestOscPt = $ = {}));
				const v = {
					0: i.$ak.symbolText,
					1: i.$ak.history,
					2: i.$ak.symbolMethod,
					3: i.$ak.symbolFile,
					4: i.$ak.folder,
					5: i.$ak.symbolProperty,
					6: i.$ak.symbolMethod,
					7: i.$ak.symbolVariable,
					8: i.$ak.symbolValue,
					9: i.$ak.symbolVariable,
					10: i.$ak.symbolNamespace,
					11: i.$ak.symbolInterface,
					12: i.$ak.symbolKeyword,
					13: i.$ak.symbolKeyword,
				};
				let S = class extends E.$1c {
					static {
						y = this;
					}
					static {
						this.requestCompletionsSequence = "\x1B[24~e";
					}
					static {
						this.requestGlobalCompletionsSequence = "\x1B[24~f";
					}
					static {
						this.requestEnableGitCompletionsSequence = "\x1B[24~g";
					}
					static {
						this.requestEnableCodeCompletionsSequence = "\x1B[24~h";
					}
					constructor(M, N, A, R, O, B) {
						super(),
							(this.P = M),
							(this.Q = N),
							(this.R = A),
							(this.S = R),
							(this.U = O),
							(this.W = B),
							(this.h = this.D(new E.$2c())),
							(this.t = !0),
							(this.u = C.sep),
							(this.w = !1),
							(this.z = !1),
							(this.C = !1),
							(this.G = 0),
							(this.H = 0),
							(this.I = 0),
							(this.L = this.D(new w.$re())),
							(this.onBell = this.L.event),
							(this.M = this.D(new w.$re())),
							(this.onAcceptedCompletion = this.M.event),
							(this.N = this.D(new w.$re())),
							(this.onDidRequestCompletions = this.N.event),
							(this.O = this.D(new w.$re())),
							(this.onDidReceiveCompletions = this.O.event),
							(this.ab = 0),
							(this.bb = 0),
							(this.db = new Set()),
							(this.eb = new Set()),
							(this.fb = new Set()),
							(this.gb = new Set()),
							this.D(
								w.Event.runAndSubscribe(
									w.Event.any(
										this.Q.onDidAddCapabilityType,
										this.Q.onDidRemoveCapabilityType,
									),
									() => {
										const U = this.Q.get(h.TerminalCapability.CommandDetection);
										U
											? this.g !== U.promptInputModel &&
												((this.g = U.promptInputModel),
												(this.h.value = (0, E.$Xc)(
													this.g.onDidChangeInput((z) => this.Z(z)),
													this.g.onDidFinishInput(() =>
														this.hideSuggestWidget(),
													),
												)))
											: (this.g = void 0);
									},
								),
							);
					}
					activate(M) {
						(this.f = M),
							this.D(
								M.parser.registerOscHandler(
									c.ShellIntegrationOscPs.VSCode,
									(N) => this.$(N),
								),
							),
							this.D(
								M.onData((N) => {
									(this.J = N), (this.H = Date.now());
								}),
							);
					}
					setPanel(M) {
						this.q = M;
					}
					setScreen(M) {
						this.r = M;
					}
					X() {
						if (!this.g) return;
						const M = this.S.getValue(f.$fIb).builtinCompletions;
						!this.z &&
							M.pwshCode &&
							(this.M.fire(y.requestEnableCodeCompletionsSequence),
							(this.z = !0)),
							!this.C &&
								M.pwshGit &&
								(this.M.fire(y.requestEnableGitCompletionsSequence),
								(this.C = !0)),
							this.P.size === 0 && this.Y(),
							this.H > this.I &&
								(this.M.fire(y.requestCompletionsSequence), this.N.fire());
					}
					Y() {
						this.M.fire(y.requestGlobalCompletionsSequence);
					}
					Z(M) {
						const N = this.S.getValue(f.$fIb);
						if (!this.j || M.cursorIndex > this.j.cursorIndex) {
							let O = !1;
							if (
								(this.R.get() ||
									(N.quickSuggestions &&
										(M.cursorIndex === 1 || M.prefix.match(/([\s\[])[^\s]$/)) &&
										(this.J?.match(/^\x1b[\[O]?[A-D]$/) ||
											(this.X(), (O = !0)))),
								N.suggestOnTriggerCharacters && !O)
							) {
								const B = M.prefix;
								(B?.match(/\s[\-]$/) || (this.w && B?.match(/[\\\/]$/))) &&
									(this.X(), (O = !0));
							}
						}
						if (
							((this.j = M), !this.g || !this.f || !this.s || this.F === void 0)
						)
							return;
						if (
							((this.m = M),
							this.m.cursorIndex > 1 &&
								this.m.value.at(this.m.cursorIndex - 1) === " ")
						) {
							this.hideSuggestWidget();
							return;
						}
						if (this.m.cursorIndex < this.ab + this.bb) {
							this.hideSuggestWidget();
							return;
						}
						if (this.R.get()) {
							this.G = this.m.cursorIndex - (this.ab + this.bb);
							let O = this.m.value.substring(
								this.ab,
								this.ab + this.bb + this.G,
							);
							this.w && (O = L(O, this.u));
							const B = new s.$$Uc(O, this.G);
							this.s.setLineContext(B);
						}
						if (!this.s.hasCompletions()) {
							this.hideSuggestWidget();
							return;
						}
						const A = this.kb();
						if (!A.width || !A.height) return;
						const R = this.r.getBoundingClientRect();
						this.s.showSuggestions(0, !1, !1, {
							left: R.left + this.f.buffer.active.cursorX * A.width,
							top: R.top + this.f.buffer.active.cursorY * A.height,
							height: A.height,
						});
					}
					$(M) {
						if (!this.f) return !1;
						const [N, ...A] = M.split(";");
						switch (N) {
							case $.Completions:
								return this.cb(this.f, M, N, A), !0;
							case $.CompletionsBash:
								return this.jb(this.f, M, N, A), !0;
							case $.CompletionsBashFirstWord:
								return this.ib(this.f, M, N, A);
						}
						return !1;
					}
					cb(M, N, A, R) {
						if ((this.O.fire(), !M.element || !this.t || !this.g)) return;
						let O = 0,
							B = this.g.cursorIndex;
						(this.m = {
							value: this.g.value,
							prefix: this.g.prefix,
							suffix: this.g.suffix,
							cursorIndex: this.g.cursorIndex,
							ghostTextIndex: this.g.ghostTextIndex,
						}),
							(this.F = this.m.prefix.substring(O, O + B + this.G));
						const U = N.slice(
								A.length + R[0].length + R[1].length + R[2].length + 4,
							),
							z = R.length === 0 || U.length === 0 ? void 0 : JSON.parse(U),
							F = T(z),
							x = this.F.length === 0 ? "" : this.F[0];
						this.F.includes(" ") || x === "["
							? ((O = parseInt(R[0])),
								(B = parseInt(R[1])),
								(this.F = this.g.prefix))
							: F.push(...this.P),
							(this.ab = O),
							(this.bb = B),
							this.y?.isDirectory &&
								F.every((G) => G.completion.isDirectory) &&
								F.push(new b.$0Uc(this.y)),
							(this.y = void 0),
							(this.G = this.m.cursorIndex - (O + B));
						let H = this.F;
						if (((this.w = F.some((G) => G.completion.isDirectory)), this.w)) {
							const G = F.find((K) => K.completion.isDirectory);
							(this.u =
								G?.completion.label.match(/(?<sep>[\\\/])/)?.groups?.sep ??
								C.sep),
								(H = L(H, this.u));
						}
						const q = new s.$$Uc(H, this.G),
							V = new s.$_Uc(F, q, O, B);
						this.lb(V);
					}
					ib(M, N, A, R) {
						const O = R[0],
							B = N.slice(A.length + O.length + 2).split(";");
						let U;
						switch (O) {
							case "alias":
								U = this.db;
								break;
							case "builtin":
								U = this.eb;
								break;
							case "command":
								U = this.fb;
								break;
							case "keyword":
								U = this.gb;
								break;
							default:
								return !1;
						}
						U.clear();
						const z = new Set();
						for (const F of B) z.add(F);
						for (const F of z)
							U.add(
								new b.$0Uc({ label: F, icon: i.$ak.symbolString, detail: O }),
							);
						return (this.hb = void 0), !0;
					}
					jb(M, N, A, R) {
						if (!M.element) return;
						let O = parseInt(R[0]);
						const B = parseInt(R[1]);
						if (!R[2]) {
							this.L.fire();
							return;
						}
						const U = N.slice(
							A.length + R[0].length + R[1].length + R[2].length + 4,
						).split(";");
						let z;
						if (
							(O !== 100 && U.length > 0
								? (z = U.map(
										(x) => new b.$0Uc({ label: x, icon: i.$ak.symbolProperty }),
									))
								: ((O = 0),
									this.hb ||
										((this.hb = [
											...this.db,
											...this.eb,
											...this.fb,
											...this.gb,
										]),
										this.hb.sort((x, H) => {
											const q = x.completion.label.charCodeAt(0),
												V = H.completion.label.charCodeAt(0),
												G = q < 65 || (q > 90 && q < 97) || q > 122 ? 1 : 0,
												K = V < 65 || (V > 90 && V < 97) || V > 122 ? 1 : 0;
											return G !== K
												? G - K
												: x.completion.label.localeCompare(H.completion.label);
										})),
									(z = this.hb)),
							z.length === 0)
						)
							return;
						this.F = z[0].completion.label.slice(0, B);
						const F = new s.$_Uc(z, new s.$$Uc(this.F, O), O, B);
						if (
							z.length === 1 &&
							z[0].completion.label.substring(B).length === 0
						) {
							this.L.fire();
							return;
						}
						this.lb(F);
					}
					kb() {
						const M = this.f._core._renderService.dimensions.css.cell;
						return { width: M.width, height: M.height };
					}
					lb(M) {
						if (!this.f?.element) return;
						const N = this.mb(this.f);
						if ((N.setCompletionModel(M), M.items.length === 0 || !this.g))
							return;
						this.n = M;
						const A = this.kb();
						if (!A.width || !A.height) return;
						const R = this.r.getBoundingClientRect();
						N.showSuggestions(0, !1, !1, {
							left: R.left + this.f.buffer.active.cursorX * A.width,
							top: R.top + this.f.buffer.active.cursorY * A.height,
							height: A.height,
						});
					}
					mb(M) {
						if ((this.R.set(!0), !this.s)) {
							const N = this.W.config,
								A = this.W.getFont(t.$Ogb()),
								R = {
									fontFamily: A.fontFamily,
									fontSize: A.fontSize,
									lineHeight: Math.ceil(1.5 * A.fontSize),
									fontWeight: N.fontWeight.toString(),
									letterSpacing: A.letterSpacing,
								};
							(this.s = this.D(
								this.U.createInstance(
									l.$cVc,
									this.q,
									this.U.createInstance(I),
									() => R,
									{},
								),
							)),
								this.s.list.style(
									(0, n.$Eyb)({
										listInactiveFocusBackground: m.$FDb,
										listInactiveFocusOutline: g.$PP,
									}),
								),
								this.D(
									this.s.onDidSelect(async (O) =>
										this.acceptSelectedSuggestion(O),
									),
								),
								this.D(this.s.onDidHide(() => this.R.set(!1))),
								this.D(this.s.onDidShow(() => this.R.set(!0)));
						}
						return this.s;
					}
					selectPreviousSuggestion() {
						this.s?.selectPrevious();
					}
					selectPreviousPageSuggestion() {
						this.s?.selectPreviousPage();
					}
					selectNextSuggestion() {
						this.s?.selectNext();
					}
					selectNextPageSuggestion() {
						this.s?.selectNextPage();
					}
					acceptSelectedSuggestion(M, N) {
						M || (M = this.s?.getFocusedItem());
						const A = this.j;
						if (!M || !A || !this.F || !this.n) return;
						(this.I = Date.now()), this.s?.hide();
						const R = this.m ?? A,
							O = R.value.substring(this.n.replacementIndex, R.cursorIndex);
						let B = "";
						if (
							(R.ghostTextIndex === -1 || R.ghostTextIndex > R.cursorIndex) &&
							R.value.length > R.cursorIndex + 1 &&
							R.value.at(R.cursorIndex) !== " "
						) {
							const G = R.value
								.substring(
									R.cursorIndex,
									R.ghostTextIndex === -1 ? void 0 : R.ghostTextIndex,
								)
								.indexOf(" ");
							B = R.value.substring(
								R.cursorIndex,
								G === -1 ? void 0 : R.cursorIndex + G,
							);
						}
						const U = M.item.completion,
							z = U.label;
						let F = !1;
						if (N)
							switch (this.S.getValue(f.$fIb).runOnEnter) {
								case "always": {
									F = !0;
									break;
								}
								case "exactMatch": {
									F = O.toLowerCase() === z.toLowerCase();
									break;
								}
								case "exactMatchIgnoreExtension": {
									(F = O.toLowerCase() === z.toLowerCase()),
										U.isFile &&
											(F ||=
												O.toLowerCase() ===
												z.toLowerCase().replace(/\.[^\.]+$/, ""));
									break;
								}
							}
						U.icon === i.$ak.folder && (this.I = 0), (this.y = U);
						const x = (0, d.$Of)(O, U.label),
							H = O.substring(O.length - 1 - x, O.length - 1),
							q = U.label.substring(x);
						let V;
						R.suffix.length > 0 &&
						R.prefix.endsWith(H) &&
						R.suffix.startsWith(q)
							? (V = "\x1BOC".repeat(U.label.length - x))
							: (V = [
									"\x7F".repeat(O.length - x),
									"\x1B[3~".repeat(B.length),
									q,
									F ? "\r" : "",
								].join("")),
							this.M.fire(V),
							this.hideSuggestWidget();
					}
					hideSuggestWidget() {
						(this.m = void 0), (this.F = void 0), this.s?.hide();
					}
				};
				(e.$SWc = S),
					(e.$SWc = S = y = Ne([j(3, r.$gj), j(4, u.$Li), j(5, p.$jIb)], S));
				let I = class {
					constructor(M) {
						(this.f = M), (this.d = o.TerminalStorageKeys.TerminalSuggestSize);
					}
					restore() {
						const M = this.f.get(this.d, a.StorageScope.PROFILE) ?? "";
						try {
							const N = JSON.parse(M);
							if (t.$pgb.is(N)) return t.$pgb.lift(N);
						} catch {}
					}
					store(M) {
						this.f.store(
							this.d,
							JSON.stringify(M),
							a.StorageScope.PROFILE,
							a.StorageTarget.MACHINE,
						);
					}
					reset() {
						this.f.remove(this.d, a.StorageScope.PROFILE);
					}
				};
				I = Ne([j(0, a.$lq)], I);
				function T(D) {
					if (!D) return [];
					let M;
					if (!Array.isArray(D)) M = [D];
					else {
						if (D.length === 0) return [];
						typeof D[0] == "string"
							? (M = [D].map((N) => ({
									CompletionText: N[0],
									ResultType: N[1],
									ToolTip: N[2],
									CustomIcon: N[3],
								})))
							: Array.isArray(D[0])
								? (M = D.map((N) => ({
										CompletionText: N[0],
										ResultType: N[1],
										ToolTip: N[2],
										CustomIcon: N[3],
									})))
								: (M = D);
					}
					return M.map((N) => P(N));
				}
				function P(D) {
					let M = D.CompletionText;
					if (
						D.ResultType === 4 &&
						!M.match(/^[\-+]$/) &&
						!M.match(/^\.\.?$/) &&
						!M.match(/[\\\/]$/)
					) {
						const O = M.match(/(?<sep>[\\\/])/)?.groups?.sep ?? C.sep;
						M = M + O;
					}
					const N = D.ToolTip ?? M,
						A = k(D.ResultType, D.CustomIcon);
					return (
						D.ResultType === 2 &&
							D.CompletionText.match(/\.[a-z0-9]{2,4}$/i) &&
							(D.ResultType = 3),
						new b.$0Uc({
							label: M,
							icon: A,
							detail: N,
							isFile: D.ResultType === 3,
							isDirectory: D.ResultType === 4,
							isKeyword: D.ResultType === 12,
						})
					);
				}
				function k(D, M) {
					if (M) {
						const N = M in i.$ak ? i.$ak[M] : i.$ak.symbolText;
						if (N) return N;
					}
					return v[D] ?? i.$ak.symbolText;
				}
				function L(D, M) {
					return M === "/" ? D.replaceAll("\\", "/") : D.replaceAll("/", "\\");
				}
			},
		),
		