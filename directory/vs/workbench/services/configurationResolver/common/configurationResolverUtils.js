define(de[1796], he([1, 0, 4]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$MQc = i),
				(t = mt(t));
			function i(w) {
				(w.pattern = w.pattern || "^(?!.*\\$\\{(env|config|command)\\.)"),
					(w.patternErrorMessage =
						w.patternErrorMessage || t.localize(12180, null));
			}
		}),
		define(
			de[1797],
			he([1, 0, 54, 344, 28, 82, 12, 222, 4, 358, 37]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Peb = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w)),
					(E = mt(E));
				class a {
					static {
						this.VARIABLE_LHS = "${";
					}
					static {
						this.VARIABLE_REGEXP = /\$\{(.*?)\}/g;
					}
					constructor(c, n, g, p) {
						(this.h = new Map()),
							(this.a = c),
							(this.b = n),
							(this.g = g),
							p && (this.c = p.then((o) => this.i(o)));
					}
					i(c) {
						if (C.$l) {
							const n = Object.create(null);
							return (
								Object.keys(c).forEach((g) => {
									n[g.toLowerCase()] = c[g];
								}),
								n
							);
						}
						return c;
					}
					resolveWithEnvironment(c, n, g) {
						return this.l(
							{ env: this.i(c), userHome: void 0 },
							n ? n.uri : void 0,
							g,
						);
					}
					async resolveAsync(c, n) {
						const g = { env: await this.c, userHome: await this.g };
						return this.l(g, c ? c.uri : void 0, n);
					}
					async j(c, n, g, p) {
						const o = E.$vo(n);
						C.$l && o.windows
							? Object.keys(o.windows).forEach((b) => (o[b] = o.windows[b]))
							: C.$m && o.osx
								? Object.keys(o.osx).forEach((b) => (o[b] = o.osx[b]))
								: C.$n &&
									o.linux &&
									Object.keys(o.linux).forEach((b) => (o[b] = o.linux[b])),
							delete o.windows,
							delete o.osx,
							delete o.linux;
						const f = { env: await this.c, userHome: await this.g };
						return this.l(f, c ? c.uri : void 0, o, g, p);
					}
					async resolveAnyAsync(c, n, g) {
						return this.j(c, n, g);
					}
					async resolveAnyMap(c, n, g) {
						const p = new Map();
						return {
							newConfig: await this.j(c, n, g, p),
							resolvedVariables: p,
						};
					}
					resolveWithInteractionReplace(c, n, g, p) {
						throw new Error("resolveWithInteractionReplace not implemented.");
					}
					resolveWithInteraction(c, n, g, p) {
						throw new Error("resolveWithInteraction not implemented.");
					}
					contributeVariable(c, n) {
						if (this.h.has(c))
							throw new Error("Variable " + c + " is contributed twice.");
						this.h.set(c, n);
					}
					async l(c, n, g, p, o) {
						if (w.$lg(g)) return this.m(c, n, g, p, o);
						if (Array.isArray(g))
							return Promise.all(g.map((f) => this.l(c, n, f, p, o)));
						if (w.$ng(g)) {
							const f = Object.create(null),
								b = await Promise.all(
									Object.keys(g).map(async (s) => [
										await this.m(c, n, s, p, o),
										await this.l(c, n, g[s], p, o),
									]),
								);
							for (const [s, l] of b) f[s] = l;
							return f;
						}
						return g;
					}
					m(c, n, g, p, o) {
						return (0, u.$Ef)(g, a.VARIABLE_REGEXP, async (f, b) => {
							if (b.includes(a.VARIABLE_LHS)) return f;
							let s = await this.o(c, f, b, n, p);
							return (
								o?.set(b, s),
								s !== f &&
									w.$lg(s) &&
									s.match(a.VARIABLE_REGEXP) &&
									(s = await this.m(c, n, s, p, o)),
								s
							);
						});
					}
					n(c) {
						return this.b ? this.b.getUriLabel(c, { noPrefix: !0 }) : c.fsPath;
					}
					async o(c, n, g, p, o) {
						let f;
						const b = g.split(":");
						b.length > 1 && ((g = b[0]), (f = b[1]));
						const s = ($) => {
								const v = this.a.getFilePath();
								if (v) return (0, d.$xO)(v);
								throw new r.$Aeb($, (0, m.localize)(12181, null, n));
							},
							l = ($) => {
								const v = s($);
								if (this.a.getWorkspaceFolderPathForFile) {
									const S = this.a.getWorkspaceFolderPathForFile();
									if (S) return (0, d.$xO)(S);
								}
								throw new r.$Aeb($, (0, m.localize)(12182, null, n, t.$sc(v)));
							},
							y = ($) => {
								if (f) {
									const v = this.a.getFolderUri(f);
									if (v) return v;
									throw new r.$Aeb($, (0, m.localize)(12183, null, n, f));
								}
								if (p) return p;
								throw this.a.getWorkspaceFolderCount() > 1
									? new r.$Aeb($, (0, m.localize)(12184, null, n))
									: new r.$Aeb($, (0, m.localize)(12185, null, n));
							};
						switch (g) {
							case "env":
								if (f) {
									if (c.env) {
										const $ = c.env[C.$l ? f.toLowerCase() : f];
										if (w.$lg($)) return $;
									}
									return "";
								}
								throw new r.$Aeb(
									r.VariableKind.Env,
									(0, m.localize)(12186, null, n),
								);
							case "config":
								if (f) {
									const $ = this.a.getConfigurationValue(p, f);
									if (w.$ug($))
										throw new r.$Aeb(
											r.VariableKind.Config,
											(0, m.localize)(12187, null, n, f),
										);
									if (w.$ng($))
										throw new r.$Aeb(
											r.VariableKind.Config,
											(0, m.localize)(12188, null, n, f),
										);
									return $;
								}
								throw new r.$Aeb(
									r.VariableKind.Config,
									(0, m.localize)(12189, null, n),
								);
							case "command":
								return this.p(r.VariableKind.Command, n, f, o, "command");
							case "input":
								return this.p(r.VariableKind.Input, n, f, o, "input");
							case "extensionInstallFolder":
								if (f) {
									const $ = await this.a.getExtension(f);
									if (!$)
										throw new r.$Aeb(
											r.VariableKind.ExtensionInstallFolder,
											(0, m.localize)(12190, null, n, f),
										);
									return this.n($.extensionLocation);
								}
								throw new r.$Aeb(
									r.VariableKind.ExtensionInstallFolder,
									(0, m.localize)(12191, null, n),
								);
							default:
								switch (g) {
									case "workspaceRoot":
									case "workspaceFolder":
										return (0, d.$xO)(
											this.n(y(r.VariableKind.WorkspaceFolder)),
										);
									case "cwd":
										return p || f
											? (0, d.$xO)(this.n(y(r.VariableKind.Cwd)))
											: i.cwd();
									case "workspaceRootFolderName":
									case "workspaceFolderBasename":
										return (0, d.$xO)(
											t.$sc(this.n(y(r.VariableKind.WorkspaceFolderBasename))),
										);
									case "userHome": {
										if (c.userHome) return c.userHome;
										throw new r.$Aeb(
											r.VariableKind.UserHome,
											(0, m.localize)(12192, null, n),
										);
									}
									case "lineNumber": {
										const $ = this.a.getLineNumber();
										if ($) return $;
										throw new r.$Aeb(
											r.VariableKind.LineNumber,
											(0, m.localize)(12193, null, n),
										);
									}
									case "selectedText": {
										const $ = this.a.getSelectedText();
										if ($) return $;
										throw new r.$Aeb(
											r.VariableKind.SelectedText,
											(0, m.localize)(12194, null, n),
										);
									}
									case "file":
										return s(r.VariableKind.File);
									case "fileWorkspaceFolder":
										return l(r.VariableKind.FileWorkspaceFolder);
									case "fileWorkspaceFolderBasename":
										return t.$sc(l(r.VariableKind.FileWorkspaceFolderBasename));
									case "relativeFile":
										return p || f
											? t.$qc(
													this.n(y(r.VariableKind.RelativeFile)),
													s(r.VariableKind.RelativeFile),
												)
											: s(r.VariableKind.RelativeFile);
									case "relativeFileDirname": {
										const $ = t.$rc(s(r.VariableKind.RelativeFileDirname));
										if (p || f) {
											const v = t.$qc(
												this.n(y(r.VariableKind.RelativeFileDirname)),
												$,
											);
											return v.length === 0 ? "." : v;
										}
										return $;
									}
									case "fileDirname":
										return t.$rc(s(r.VariableKind.FileDirname));
									case "fileExtname":
										return t.$tc(s(r.VariableKind.FileExtname));
									case "fileBasename":
										return t.$sc(s(r.VariableKind.FileBasename));
									case "fileBasenameNoExtension": {
										const $ = t.$sc(s(r.VariableKind.FileBasenameNoExtension));
										return $.slice(0, $.length - t.$tc($).length);
									}
									case "fileDirnameBasename":
										return t.$sc(t.$rc(s(r.VariableKind.FileDirnameBasename)));
									case "execPath": {
										const $ = this.a.getExecPath();
										return $ || n;
									}
									case "execInstallFolder": {
										const $ = this.a.getAppRoot();
										return $ || n;
									}
									case "pathSeparator":
									case "/":
										return t.sep;
									default:
										try {
											const $ = f ? `${g}:${f}` : g;
											return this.p(r.VariableKind.Unknown, n, $, o, void 0);
										} catch {
											return n;
										}
								}
						}
					}
					p(c, n, g, p, o) {
						if (g && p) {
							const f = o === void 0 ? p[g] : p[o + ":" + g];
							if (typeof f == "string") return f;
							throw new r.$Aeb(c, (0, m.localize)(12195, null, n));
						}
						return n;
					}
				}
				e.$Peb = a;
			},
		),
		define(
			de[3252],
			he([1, 0, 15, 59, 23, 28, 56, 4, 10, 21, 25, 44, 1797]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$N5c = void 0),
					(E = mt(E)),
					(d = mt(d));
				const c = "configResolveInputLru",
					n = 5;
				class g extends h.$Peb {
					static {
						this.INPUT_OR_COMMAND_VARIABLES_PATTERN =
							/\${((input|command):(.*?))}/g;
					}
					constructor(o, f, b, s, l, y, $, v, S, I, T) {
						super(
							{
								getFolderUri: (P) => {
									const k = y
										.getWorkspace()
										.folders.filter((L) => L.name === P)
										.pop();
									return k ? k.uri : void 0;
								},
								getWorkspaceFolderCount: () => y.getWorkspace().folders.length,
								getConfigurationValue: (P, k) =>
									s.getValue(k, P ? { resource: P } : {}),
								getAppRoot: () => o.getAppRoot(),
								getExecPath: () => o.getExecPath(),
								getFilePath: () => {
									const P = a.$A1.getOriginalUri(b.activeEditor, {
										supportSideBySide: a.SideBySideEditor.PRIMARY,
										filterByScheme: [
											w.Schemas.file,
											w.Schemas.vscodeUserData,
											this.u.defaultUriScheme,
										],
									});
									if (P) return this.t.getUriLabel(P, { noPrefix: !0 });
								},
								getWorkspaceFolderPathForFile: () => {
									const P = a.$A1.getOriginalUri(b.activeEditor, {
										supportSideBySide: a.SideBySideEditor.PRIMARY,
										filterByScheme: [
											w.Schemas.file,
											w.Schemas.vscodeUserData,
											this.u.defaultUriScheme,
										],
									});
									if (!P) return;
									const k = y.getWorkspaceFolder(P);
									if (k) return this.t.getUriLabel(k.uri, { noPrefix: !0 });
								},
								getSelectedText: () => {
									const P = b.activeTextEditorControl;
									let k = null;
									if ((0, C.$0sb)(P)) k = P;
									else if ((0, C.$$sb)(P)) {
										const M = P.getOriginalEditor(),
											N = P.getModifiedEditor();
										k = M.hasWidgetFocus() ? M : N;
									}
									const L = k?.getModel(),
										D = k?.getSelection();
									if (L && D) return L.getValueInRange(D);
								},
								getLineNumber: () => {
									const P = b.activeTextEditorControl;
									if ((0, C.$0sb)(P)) {
										const k = P.getSelection();
										if (k) {
											const L = k.positionLineNumber;
											return String(L);
										}
									}
								},
								getExtension: (P) => I.getExtension(P),
							},
							v,
							S.userHome().then((P) => P.path),
							f,
						),
							(this.e = s),
							(this.k = l),
							(this.q = y),
							(this.r = $),
							(this.t = v),
							(this.u = S),
							(this.w = T),
							(this.d = new t.$Th());
					}
					async resolveWithInteractionReplace(o, f, b, s, l) {
						return (
							(f = await this.resolveAnyAsync(o, f)),
							this.resolveWithInteraction(o, f, b, s, l).then((y) =>
								y
									? y.size > 0
										? this.resolveAnyAsync(o, f, Object.fromEntries(y))
										: f
									: null,
							)
						);
					}
					async resolveWithInteraction(o, f, b, s, l) {
						const y = await this.resolveAnyMap(o, f);
						f = y.newConfig;
						const $ = y.resolvedVariables;
						return this.y(o, f, s, b, l).then((v) => {
							if (this.x(v, $)) return $;
						});
					}
					x(o, f) {
						if (!o) return !1;
						for (const [b, s] of Object.entries(o)) f.set(b, s);
						return !0;
					}
					async y(o, f, b, s, l) {
						if (!f) return Promise.resolve(void 0);
						let y = [];
						if (this.q.getWorkbenchState() !== u.WorkbenchState.EMPTY && s) {
							const S = o ? { resource: o.uri } : {},
								I = this.e.inspect(s, S);
							if (
								I &&
								(I.userValue || I.workspaceValue || I.workspaceFolderValue)
							)
								switch (l) {
									case m.ConfigurationTarget.USER:
										y = I.userValue?.inputs;
										break;
									case m.ConfigurationTarget.WORKSPACE:
										y = I.workspaceValue?.inputs;
										break;
									default:
										y = I.workspaceFolderValue?.inputs;
								}
							else {
								const T = this.e.getValue(s, S);
								T && (y = T.inputs);
							}
						}
						const $ = [];
						this.z(f, $);
						const v = Object.create(null);
						for (const S of $) {
							const [I, T] = S.split(":", 2);
							let P;
							switch (I) {
								case "input":
									P = await this.A(s, T, y);
									break;
								case "command": {
									const k = (b ? b[T] : void 0) || T;
									if (
										((P = await this.k.executeCommand(k, f)),
										typeof P != "string" && !E.$ug(P))
									)
										throw new Error(d.localize(12157, null, k));
									break;
								}
								default:
									this.h.has(S) && (P = await this.h.get(S)());
							}
							if (typeof P == "string") v[S] = P;
							else return;
						}
						return v;
					}
					z(o, f) {
						if (typeof o == "string") {
							let b;
							for (
								;
								(b = g.INPUT_OR_COMMAND_VARIABLES_PATTERN.exec(o)) !== null;
							)
								if (b.length === 4) {
									const s = b[1];
									f.indexOf(s) < 0 && f.push(s);
								}
							for (const s of this.h.keys())
								f.indexOf(s) < 0 && o.indexOf("${" + s + "}") >= 0 && f.push(s);
						} else if (Array.isArray(o)) for (const b of o) this.z(b, f);
						else if (o) for (const b of Object.values(o)) this.z(b, f);
					}
					A(o, f, b) {
						if (!b)
							return Promise.reject(
								new Error(d.localize(12158, null, f, "inputs")),
							);
						const s = b.filter((l) => l.id === f).pop();
						if (s) {
							const l = (S) => {
									throw new Error(d.localize(12159, null, f, s.type, S));
								},
								y = this.C(),
								$ = `${o}.${f}`,
								v = y.get($);
							switch (s.type) {
								case "promptString": {
									E.$lg(s.description) || l("description");
									const S = {
										prompt: s.description,
										ignoreFocusLost: !0,
										value: v,
									};
									return (
										s.default && (S.value = s.default),
										s.password && (S.password = s.password),
										this.d
											.queue(() => this.r.input(S))
											.then(
												(I) => (typeof I == "string" && this.B(y.set($, I)), I),
											)
									);
								}
								case "pickString": {
									if (
										(E.$lg(s.description) || l("description"),
										Array.isArray(s.options))
									)
										for (const T of s.options)
											!E.$lg(T) && !E.$lg(T.value) && l("value");
									else l("options");
									const S = new Array();
									for (const T of s.options) {
										const P = E.$lg(T) ? T : T.value,
											k = E.$lg(T) ? void 0 : T.label,
											L = { label: k ? `${k}: ${P}` : P, value: P };
										P === s.default
											? ((L.description = d.localize(12160, null)),
												S.unshift(L))
											: !s.default && P === v
												? S.unshift(L)
												: S.push(L);
									}
									const I = {
										placeHolder: s.description,
										matchOnDetail: !0,
										ignoreFocusLost: !0,
									};
									return this.d
										.queue(() => this.r.pick(S, I, void 0))
										.then((T) => {
											if (T) {
												const P = T.value;
												return this.B(y.set($, P)), P;
											}
										});
								}
								case "command":
									return (
										E.$lg(s.command) || l("command"),
										this.d
											.queue(() => this.k.executeCommand(s.command, s.args))
											.then((S) => {
												if (typeof S == "string" || E.$ug(S)) return S;
												throw new Error(d.localize(12161, null, f, s.command));
											})
									);
								default:
									throw new Error(d.localize(12162, null, f));
							}
						}
						return Promise.reject(new Error(d.localize(12163, null, f)));
					}
					B(o) {
						this.w.store(
							c,
							JSON.stringify(o.toJSON()),
							r.StorageScope.WORKSPACE,
							r.StorageTarget.MACHINE,
						);
					}
					C() {
						const o = this.w.get(c, r.StorageScope.WORKSPACE),
							f = new i.$Jc(n);
						try {
							o && f.fromJSON(JSON.parse(o));
						} catch {}
						return f;
					}
				}
				e.$N5c = g;
			},
		),
		define(
			de[3253],
			he([
				1, 0, 50, 7, 49, 32, 39, 139, 222, 40, 288, 2229, 253, 12, 10, 2896, 20,
				274, 24, 6, 276, 11, 8, 3,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Add = void 0),
					(i = mt(i));
				let v = class {
					get onDidShowContextMenu() {
						return this.a.onDidShowContextMenu;
					}
					get onDidHideContextMenu() {
						return this.a.onDidHideContextMenu;
					}
					constructor(T, P, k, L, D, M, N) {
						!c.$m && !(0, h.$yY)(L)
							? (this.a = new g.$Q5c(P, T, D, k, M, N))
							: (this.a = new S(T, P, k, M, N));
					}
					dispose() {
						this.a.dispose();
					}
					showContextMenu(T) {
						this.a.showContextMenu(T);
					}
				};
				(e.$Add = v),
					(e.$Add = v =
						Ne(
							[
								j(0, r.$4N),
								j(1, E.$km),
								j(2, C.$uZ),
								j(3, n.$gj),
								j(4, w.$Wxb),
								j(5, l.$YX),
								j(6, y.$6j),
							],
							v,
						));
				let S = class extends $.$1c {
					constructor(T, P, k, L, D) {
						super(),
							(this.c = T),
							(this.f = P),
							(this.g = k),
							(this.h = L),
							(this.j = D),
							(this.a = this.B.add(new b.$re())),
							(this.onDidShowContextMenu = this.a.event),
							(this.b = this.B.add(new b.$re())),
							(this.onDidHideContextMenu = this.b.event);
					}
					showContextMenu(T) {
						T = g.ContextMenuMenuDelegate.transform(T, this.h, this.j);
						const P = T.getActions();
						if (P.length) {
							const k = (0, u.$hb)(() => {
									T.onHide?.(!1),
										i.$Fhb.getInstance().resetKeyStatus(),
										this.b.fire();
								}),
								L = this.m(T, P, k),
								D = T.getAnchor();
							let M,
								N,
								A = (0, d.$Jfb)(i.$Ygb(D) ? i.getWindow(D) : i.$Ogb());
							if (i.$Ygb(D)) {
								const R = i.$tgb(D);
								(A *= i.$ugb(D)),
									T.anchorAxisAlignment === s.AnchorAxisAlignment.HORIZONTAL
										? (T.anchorAlignment === s.AnchorAlignment.LEFT
												? ((M = R.left), (N = R.top))
												: ((M = R.left + R.width), (N = R.top)),
											c.$m ||
												(i.getWindow(D).screen.height - N <
													P.length * (c.$l ? 45 : 32) &&
													(N += R.height)))
										: T.anchorAlignment === s.AnchorAlignment.LEFT
											? ((M = R.left), (N = R.top + R.height))
											: ((M = R.left + R.width), (N = R.top + R.height)),
									c.$m && (N += 4 / A);
							} else (0, s.$gib)(D) && ((M = D.x), (N = D.y));
							typeof M == "number" && (M = Math.floor(M * A)),
								typeof N == "number" && (N = Math.floor(N * A)),
								(0, a.$crb)(
									L,
									{
										x: M,
										y: N,
										positioningItem: T.autoSelectFirstItem ? 0 : void 0,
									},
									() => k(),
								),
								this.a.fire();
						}
					}
					m(T, P, k, L = new Set()) {
						const D = T.actionRunner || new t.$sj();
						return (0, f.$Lb)(P.map((M) => this.n(T, M, D, k, L)));
					}
					n(T, P, k, L, D) {
						if (P instanceof t.$tj) return { type: "separator" };
						if (P instanceof t.$uj) {
							if (D.has(P.id)) {
								console.warn(`Found submenu cycle: ${P.id}`);
								return;
							}
							return {
								label: (0, m.$EO)((0, o.$$k)(P.label)).trim(),
								submenu: this.m(T, P.actions, L, new Set([...D, P.id])),
							};
						} else {
							let M;
							P.checked &&
								(typeof T.getCheckedActionsRepresentation == "function"
									? (M = T.getCheckedActionsRepresentation(P))
									: (M = "checkbox"));
							const N = {
									label: (0, m.$EO)((0, o.$$k)(P.label)).trim(),
									checked: !!P.checked,
									type: M,
									enabled: !!P.enabled,
									click: (R) => {
										L(), this.q(k, P, T, R);
									},
								},
								A = T.getKeyBinding
									? T.getKeyBinding(P)
									: this.g.lookupKeybinding(P.id);
							if (A) {
								const R = A.getElectronAccelerator();
								if (R) N.accelerator = R;
								else {
									const O = A.getLabel();
									O && (N.label = `${N.label} [${O}]`);
								}
							}
							return N;
						}
					}
					async q(T, P, k, L) {
						k.skipTelemetry ||
							this.f.publicLog2("workbenchActionExecuted", {
								id: P.id,
								from: "contextMenu",
							});
						const D = k.getActionsContext ? k.getActionsContext(L) : void 0,
							M = T.run(P, D);
						try {
							await M;
						} catch (N) {
							this.c.error(N);
						}
					}
				};
				(S = Ne(
					[j(0, r.$4N), j(1, E.$km), j(2, C.$uZ), j(3, l.$YX), j(4, y.$6j)],
					S,
				)),
					(0, p.$lK)(w.$Xxb, v, p.InstantiationType.Delayed);
			},
		),
		