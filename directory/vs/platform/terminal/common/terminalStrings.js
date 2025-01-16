define(de[776], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$aIb = t);
			function t(i, w = {}) {
				let E = "";
				return (
					w.excludeLeadingNewLine ||
						(E += `\r
`),
					(E += "\x1B[0m\x1B[7m * "),
					w.loudFormatting ? (E += "\x1B[0;104m") : (E += "\x1B[0m"),
					(E += ` ${i} \x1B[0m
\r`),
					E
				);
			}
		}),
		define(
			de[1202],
			he([1, 0, 117, 3, 675, 1653, 2823, 189, 2825, 6, 2821, 9, 775, 37]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RHb = e.ShellIntegrationOscPs = void 0),
					(e.$SHb = b),
					(e.$THb = s),
					(e.$UHb = l);
				var n;
				(function (y) {
					(y[(y.FinalTerm = 133)] = "FinalTerm"),
						(y[(y.VSCode = 633)] = "VSCode"),
						(y[(y.ITerm = 1337)] = "ITerm"),
						(y[(y.SetCwd = 7)] = "SetCwd"),
						(y[(y.SetWindowsFriendlyCwd = 9)] = "SetWindowsFriendlyCwd");
				})(n || (e.ShellIntegrationOscPs = n = {}));
				var g;
				(function (y) {
					(y.PromptStart = "A"),
						(y.CommandStart = "B"),
						(y.CommandExecuted = "C"),
						(y.CommandFinished = "D");
				})(g || (g = {}));
				var p;
				(function (y) {
					(y.PromptStart = "A"),
						(y.CommandStart = "B"),
						(y.CommandExecuted = "C"),
						(y.CommandFinished = "D"),
						(y.CommandLine = "E"),
						(y.ContinuationStart = "F"),
						(y.ContinuationEnd = "G"),
						(y.RightPromptStart = "H"),
						(y.RightPromptEnd = "I"),
						(y.Property = "P"),
						(y.SetMark = "SetMark");
				})(p || (p = {}));
				var o;
				(function (y) {
					(y.SetMark = "SetMark"), (y.CurrentDir = "CurrentDir");
				})(o || (o = {}));
				class f extends i.$1c {
					get status() {
						return this.g;
					}
					constructor($, v, S, I) {
						super(),
							(this.j = $),
							(this.m = v),
							(this.n = S),
							(this.q = I),
							(this.capabilities = this.D(new w.$KHb())),
							(this.b = !1),
							(this.f = []),
							(this.g = t.ShellIntegrationStatus.Off),
							(this.h = new r.$re()),
							(this.onDidChangeStatus = this.h.event),
							this.D(
								(0, i.$Yc)(() => {
									this.y(), this.r();
								}),
							);
					}
					r() {
						(0, i.$Vc)(this.f), (this.f.length = 0);
					}
					activate($) {
						(this.a = $),
							this.capabilities.add(
								d.TerminalCapability.PartialCommandDetection,
								this.D(new m.$PHb(this.a)),
							),
							this.D($.parser.registerOscHandler(n.VSCode, (v) => this.u(v))),
							this.D($.parser.registerOscHandler(n.ITerm, (v) => this.H(v))),
							this.f.push(
								$.parser.registerOscHandler(n.FinalTerm, (v) => this.s(v)),
							),
							this.D($.parser.registerOscHandler(n.SetCwd, (v) => this.J(v))),
							this.D(
								$.parser.registerOscHandler(n.SetWindowsFriendlyCwd, (v) =>
									this.I(v),
								),
							),
							this.w();
					}
					getMarkerId($, v) {
						this.N($).getMark(v);
					}
					s($) {
						const v = this.t($);
						return (
							this.g === t.ShellIntegrationStatus.Off &&
								((this.g = t.ShellIntegrationStatus.FinalTerm),
								this.h.fire(this.g)),
							v
						);
					}
					t($) {
						if (!this.a) return !1;
						const [v, ...S] = $.split(";");
						switch (v) {
							case g.PromptStart:
								return this.M(this.a).handlePromptStart(), !0;
							case g.CommandStart:
								return (
									this.M(this.a).handleCommandStart({ ignoreCommandLine: !0 }),
									!0
								);
							case g.CommandExecuted:
								return this.M(this.a).handleCommandExecuted(), !0;
							case g.CommandFinished: {
								const I = S.length === 1 ? parseInt(S[0]) : void 0;
								return this.M(this.a).handleCommandFinished(I), !0;
							}
						}
						return !1;
					}
					u($) {
						const v = this.z($);
						return (
							!this.b &&
								v &&
								(this.n?.publicLog2(
									"terminal/shellIntegrationActivationSucceeded",
								),
								(this.b = !0),
								this.y()),
							this.g !== t.ShellIntegrationStatus.VSCode &&
								((this.g = t.ShellIntegrationStatus.VSCode),
								this.h.fire(this.g)),
							v
						);
					}
					async w() {
						!this.n ||
							this.m ||
							(this.c = setTimeout(() => {
								!this.capabilities.get(d.TerminalCapability.CommandDetection) &&
									!this.capabilities.get(d.TerminalCapability.CwdDetection) &&
									(this.n?.publicLog2(
										"terminal/shellIntegrationActivationTimeout",
									),
									this.q.warn(
										"Shell integration failed to add capabilities within 10 seconds",
									)),
									(this.b = !0);
							}, 1e4));
					}
					y() {
						this.c !== void 0 && (clearTimeout(this.c), (this.c = void 0));
					}
					z($) {
						if (!this.a) return !1;
						const v = $.indexOf(";"),
							S = v === -1 ? $ : $.substring(0, v),
							I = v === -1 ? [] : $.substring(v + 1).split(";");
						switch (S) {
							case p.PromptStart:
								return this.M(this.a).handlePromptStart(), !0;
							case p.CommandStart:
								return this.M(this.a).handleCommandStart(), !0;
							case p.CommandExecuted:
								return this.M(this.a).handleCommandExecuted(), !0;
							case p.CommandFinished: {
								const T = I[0],
									P = T !== void 0 ? parseInt(T) : void 0;
								return this.M(this.a).handleCommandFinished(P), !0;
							}
							case p.CommandLine: {
								const T = I[0],
									P = I[1];
								let k;
								return (
									T !== void 0 ? (k = b(T)) : (k = ""),
									this.M(this.a).setCommandLine(k, P === this.j),
									!0
								);
							}
							case p.ContinuationStart:
								return this.M(this.a).handleContinuationStart(), !0;
							case p.ContinuationEnd:
								return this.M(this.a).handleContinuationEnd(), !0;
							case p.RightPromptStart:
								return this.M(this.a).handleRightPromptStart(), !0;
							case p.RightPromptEnd:
								return this.M(this.a).handleRightPromptEnd(), !0;
							case p.Property: {
								const T = I[0],
									P = T !== void 0 ? b(T) : "",
									{ key: k, value: L } = s(P);
								if (L === void 0) return !0;
								switch (k) {
									case "ContinuationPrompt":
										return this.C((0, c.$0f)(L)), !0;
									case "Cwd":
										return this.G(L), !0;
									case "IsWindows":
										return this.M(this.a).setIsWindowsPty(L === "True"), !0;
									case "Prompt": {
										const D = L.replace(/\x1b\[[0-9;]*m/g, "");
										return this.F(D), !0;
									}
									case "Task":
										return (
											this.N(this.a),
											this.capabilities
												.get(d.TerminalCapability.CommandDetection)
												?.setIsCommandStorageDisabled(),
											!0
										);
								}
							}
							case p.SetMark:
								return this.N(this.a).addMark(l(I)), !0;
						}
						return !1;
					}
					C($) {
						this.a && this.M(this.a).setContinuationPrompt($);
					}
					F($) {
						if (!this.a) return;
						const v = $.substring(
								$.lastIndexOf(`
`) + 1,
							),
							S = v.substring(v.lastIndexOf(" "));
						S && this.M(this.a).setPromptTerminator(S, v);
					}
					G($) {
						($ = (0, h.$Deb)($)),
							this.L().updateCwd($),
							this.capabilities
								.get(d.TerminalCapability.CommandDetection)
								?.setCwd($);
					}
					H($) {
						if (!this.a) return !1;
						const [v] = $.split(";");
						switch (v) {
							case o.SetMark:
								this.N(this.a).addMark();
							default: {
								const { key: S, value: I } = s(v);
								if (I === void 0) return !0;
								switch (S) {
									case o.CurrentDir:
										return this.G(I), !0;
								}
							}
						}
						return !1;
					}
					I($) {
						if (!this.a) return !1;
						const [v, ...S] = $.split(";");
						switch (v) {
							case "9":
								return S.length && this.G(S[0]), !0;
						}
						return !1;
					}
					J($) {
						if (!this.a) return !1;
						const [v] = $.split(";");
						if (v.match(/^file:\/\/.*\//)) {
							const S = a.URI.parse(v);
							if (S.path && S.path.length > 0) return this.G(S.path), !0;
						}
						return !1;
					}
					serialize() {
						return !this.a ||
							!this.capabilities.has(d.TerminalCapability.CommandDetection)
							? { isWindowsPty: !1, commands: [], promptInputModel: void 0 }
							: this.M(this.a).serialize();
					}
					deserialize($) {
						if (!this.a)
							throw new Error(
								"Cannot restore commands before addon is activated",
							);
						this.M(this.a).deserialize($);
					}
					L() {
						let $ = this.capabilities.get(d.TerminalCapability.CwdDetection);
						return (
							$ ||
								(($ = this.D(new C.$OHb())),
								this.capabilities.add(d.TerminalCapability.CwdDetection, $)),
							$
						);
					}
					M($) {
						let v = this.capabilities.get(
							d.TerminalCapability.CommandDetection,
						);
						return (
							v ||
								((v = this.D(new E.$MHb($, this.q))),
								this.capabilities.add(
									d.TerminalCapability.CommandDetection,
									v,
								)),
							v
						);
					}
					N($) {
						let v = this.capabilities.get(
							d.TerminalCapability.BufferMarkDetection,
						);
						return (
							v ||
								((v = this.D(new u.$QHb($))),
								this.capabilities.add(
									d.TerminalCapability.BufferMarkDetection,
									v,
								)),
							v
						);
					}
				}
				e.$RHb = f;
				function b(y) {
					return y.replaceAll(/\\(\\|x([0-9a-f]{2}))/gi, ($, v, S) =>
						S ? String.fromCharCode(parseInt(S, 16)) : v,
					);
				}
				function s(y) {
					const $ = y.indexOf("=");
					return $ === -1
						? { key: y, value: void 0 }
						: { key: y.substring(0, $), value: y.substring(1 + $) };
				}
				function l(y) {
					let $,
						v = !1;
					for (const S of y)
						S !== void 0 &&
							(S === "Hidden" && (v = !0),
							S.startsWith("Id=") && ($ = S.substring(3)));
					return { id: $, hidden: v };
				}
			},
		),
		define(
			de[306],
			he([1, 0, 229, 15, 97, 6, 250, 30, 4]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HP = e.$vP = e.$uP = e.ColorTransformType = void 0),
					(e.$qP = r),
					(e.$rP = u),
					(e.$sP = a),
					(e.$tP = c),
					(e.$wP = p),
					(e.$xP = o),
					(e.$yP = f),
					(e.$zP = b),
					(e.$AP = s),
					(e.$BP = l),
					(e.$CP = y),
					(e.$DP = $),
					(e.$EP = v),
					(e.$FP = S),
					(e.$GP = I),
					(d = mt(d)),
					(m = mt(m));
				function r(k) {
					return `--vscode-${k.replace(/\./g, "-")}`;
				}
				function u(k) {
					return `var(${r(k)})`;
				}
				function a(k, L) {
					return `var(${r(k)}, ${L})`;
				}
				var h;
				(function (k) {
					(k[(k.Darken = 0)] = "Darken"),
						(k[(k.Lighten = 1)] = "Lighten"),
						(k[(k.Transparent = 2)] = "Transparent"),
						(k[(k.Opaque = 3)] = "Opaque"),
						(k[(k.OneOf = 4)] = "OneOf"),
						(k[(k.LessProminent = 5)] = "LessProminent"),
						(k[(k.IfDefinedThenElse = 6)] = "IfDefinedThenElse");
				})(h || (e.ColorTransformType = h = {}));
				function c(k) {
					return (
						k !== null && typeof k == "object" && "light" in k && "dark" in k
					);
				}
				(e.$uP = { ColorContribution: "base.contributions.colors" }),
					(e.$vP = "default");
				class n {
					constructor() {
						(this.c = new E.$re()),
							(this.onDidChangeSchema = this.c.event),
							(this.e = { type: "object", properties: {} }),
							(this.f = { type: "string", enum: [], enumDescriptions: [] }),
							(this.d = {});
					}
					notifyThemeUpdate(L) {
						for (const D of Object.keys(this.d)) {
							const M = L.getColor(D);
							M &&
								(this.e.properties[D].oneOf[0].defaultSnippets[0].body =
									`\${1:${M.toString()}}`);
						}
						this.c.fire();
					}
					registerColor(L, D, M, N = !1, A) {
						const R = {
							id: L,
							description: M,
							defaults: D,
							needsTransparency: N,
							deprecationMessage: A,
						};
						this.d[L] = R;
						const O = {
							type: "string",
							format: "color-hex",
							defaultSnippets: [{ body: "${1:#ff0000}" }],
						};
						return (
							A && (O.deprecationMessage = A),
							N &&
								((O.pattern =
									"^#(?:(?<rgba>[0-9a-fA-f]{3}[0-9a-eA-E])|(?:[0-9a-fA-F]{6}(?:(?![fF]{2})(?:[0-9a-fA-F]{2}))))?$"),
								(O.patternErrorMessage = m.localize(2366, null))),
							(this.e.properties[L] = {
								description: M,
								oneOf: [
									O,
									{
										type: "string",
										const: e.$vP,
										description: m.localize(2367, null),
									},
								],
							}),
							this.f.enum.push(L),
							this.f.enumDescriptions.push(M),
							this.c.fire(),
							L
						);
					}
					deregisterColor(L) {
						delete this.d[L], delete this.e.properties[L];
						const D = this.f.enum.indexOf(L);
						D !== -1 &&
							(this.f.enum.splice(D, 1), this.f.enumDescriptions.splice(D, 1)),
							this.c.fire();
					}
					getColors() {
						return Object.keys(this.d).map((L) => this.d[L]);
					}
					resolveDefaultColor(L, D) {
						const M = this.d[L];
						if (M?.defaults) {
							const N = c(M.defaults) ? M.defaults[D.type] : M.defaults;
							return I(N, D);
						}
					}
					getColorSchema() {
						return this.e;
					}
					getColorReferenceSchema() {
						return this.f;
					}
					toString() {
						const L = (D, M) => {
							const N = D.indexOf(".") === -1 ? 0 : 1,
								A = M.indexOf(".") === -1 ? 0 : 1;
							return N !== A ? N - A : D.localeCompare(M);
						};
						return Object.keys(this.d)
							.sort(L)
							.map((D) => `- \`${D}\`: ${this.d[D].description}`)
							.join(`
`);
					}
				}
				const g = new n();
				d.$Io.add(e.$uP.ColorContribution, g);
				function p(k, L, D, M, N) {
					return g.registerColor(k, L, D, M, N);
				}
				function o() {
					return g;
				}
				function f(k, L) {
					switch (k.op) {
						case h.Darken:
							return I(k.value, L)?.darken(k.factor);
						case h.Lighten:
							return I(k.value, L)?.lighten(k.factor);
						case h.Transparent:
							return I(k.value, L)?.transparent(k.factor);
						case h.Opaque: {
							const D = I(k.background, L);
							return D ? I(k.value, L)?.makeOpaque(D) : I(k.value, L);
						}
						case h.OneOf:
							for (const D of k.values) {
								const M = I(D, L);
								if (M) return M;
							}
							return;
						case h.IfDefinedThenElse:
							return I(L.defines(k.if) ? k.then : k.else, L);
						case h.LessProminent: {
							const D = I(k.value, L);
							if (!D) return;
							const M = I(k.background, L);
							return M
								? D.isDarkerThan(M)
									? w.$UL
											.getLighterColor(D, M, k.factor)
											.transparent(k.transparency)
									: w.$UL
											.getDarkerColor(D, M, k.factor)
											.transparent(k.transparency)
								: D.transparent(k.factor * k.transparency);
						}
						default:
							throw (0, t.$kd)(k);
					}
				}
				function b(k, L) {
					return { op: h.Darken, value: k, factor: L };
				}
				function s(k, L) {
					return { op: h.Lighten, value: k, factor: L };
				}
				function l(k, L) {
					return { op: h.Transparent, value: k, factor: L };
				}
				function y(k, L) {
					return { op: h.Opaque, value: k, background: L };
				}
				function $(...k) {
					return { op: h.OneOf, values: k };
				}
				function v(k, L, D) {
					return { op: h.IfDefinedThenElse, if: k, then: L, else: D };
				}
				function S(k, L, D, M) {
					return {
						op: h.LessProminent,
						value: k,
						background: L,
						factor: D,
						transparency: M,
					};
				}
				function I(k, L) {
					if (k !== null) {
						if (typeof k == "string")
							return k[0] === "#" ? w.$UL.fromHex(k) : L.getColor(k);
						if (k instanceof w.$UL) return k;
						if (typeof k == "object") return f(k, L);
					}
				}
				e.$HP = "vscode://schemas/workbench-colors";
				const T = d.$Io.as(C.$Jo.JSONContribution);
				T.registerSchema(e.$HP, g.getColorSchema());
				const P = new i.$Yh(() => T.notifySchemaChanged(e.$HP), 200);
				g.onDidChangeSchema(() => {
					P.isScheduled() || P.schedule();
				});
			},
		),
		