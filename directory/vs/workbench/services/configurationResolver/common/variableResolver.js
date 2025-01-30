import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/path.js';
import '../../../../base/common/process.js';
import '../../../../base/common/types.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/labels.js';
import '../../../../nls.js';
import './configurationResolver.js';
import '../../../../base/common/strings.js';
define(
			de[1797],
			he([1, 0, 54, 344, 28, 82, 12, 222, 4, 358, 37]),
			function (ce /*require*/,
 e /*exports*/,
 t /*path*/,
 i /*process*/,
 w /*types*/,
 E /*objects*/,
 C /*platform*/,
 d /*labels*/,
 m /*nls*/,
 r /*configurationResolver*/,
 u /*strings*/) {
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
		