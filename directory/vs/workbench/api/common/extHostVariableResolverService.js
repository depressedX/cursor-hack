import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lazy.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/path.js';
import '../../../base/common/process.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHostDocumentsAndEditors.js';
import './extHostEditorTabs.js';
import './extHostExtensionService.js';
import './extHostTypes.js';
import './extHostWorkspace.js';
import '../../services/configurationResolver/common/variableResolver.js';
import './extHostConfiguration.js';
define(
			Pe[94],
			Ne([1, 0, 71, 3, 18, 80, 5, 93, 117, 75, 11, 63, 533, 56]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$0hd = t.$9hd = void 0),
					(S = tt(S)),
					(N = tt(N)),
					(t.$9hd = (0, P.$Mi)("IExtHostVariableResolverProvider"));
				class g extends d.$Peb {
					constructor($, T, a, u, s, f, o) {
						function w() {
							if (a) {
								const m = a.activeEditor();
								if (m) return m.document.uri;
								const E = u.tabGroups.all.find((R) => R.isActive)?.activeTab;
								if (E !== void 0) {
									if (E.input instanceof p.$cdb || E.input instanceof p.$hdb)
										return E.input.modified;
									if (
										E.input instanceof p.$bdb ||
										E.input instanceof p.$gdb ||
										E.input instanceof p.$edb
									)
										return E.input.uri;
								}
							}
						}
						super(
							{
								getFolderUri: (m) => {
									const E = f.folders.filter((R) => R.name === m);
									if (E && E.length > 0) return E[0].uri;
								},
								getWorkspaceFolderCount: () => f.folders.length,
								getConfigurationValue: (m, E) =>
									s.getConfiguration(void 0, m).get(E),
								getAppRoot: () => N.cwd(),
								getExecPath: () => N.env.VSCODE_EXEC_PATH,
								getFilePath: () => {
									const m = w();
									if (m) return S.$mc(m.fsPath);
								},
								getWorkspaceFolderPathForFile: () => {
									if (T) {
										const m = w();
										if (m) {
											const E = T.getWorkspaceFolder(m);
											if (E) return S.$mc(E.uri.fsPath);
										}
									}
								},
								getSelectedText: () => {
									if (a) {
										const m = a.activeEditor();
										if (m && !m.selection.isEmpty)
											return m.document.getText(m.selection);
									}
								},
								getLineNumber: () => {
									if (a) {
										const m = a.activeEditor();
										if (m) return String(m.selection.end.line + 1);
									}
								},
								getExtension: (m) => $.getExtension(m),
							},
							void 0,
							o ? Promise.resolve(o) : void 0,
							Promise.resolve(N.env),
						);
					}
				}
				let c = class extends r.$1c {
					constructor($, T, a, u, s) {
						super(),
							(this.b = $),
							(this.c = T),
							(this.g = a),
							(this.h = u),
							(this.j = s),
							(this.a = new e.$Y(async () => {
								const f = await this.h.getConfigProvider(),
									w = { folders: (await this.c.getWorkspaceFolders2()) || [] };
								return (
									this.D(
										this.c.onDidChangeWorkspace(async (m) => {
											w.folders = (await this.c.getWorkspaceFolders2()) || [];
										}),
									),
									new g(this.b, this.c, this.g, this.j, f, w, this.m())
								);
							}));
					}
					getResolver() {
						return this.a.value;
					}
					m() {}
				};
				(t.$0hd = c),
					(t.$0hd = c =
						wt(
							[
								rt(0, n.$6hd),
								rt(1, y.$m9),
								rt(2, I.$Xdb),
								rt(3, k.$phd),
								rt(4, l.$Ehd),
							],
							c,
						));
			},
		),
		