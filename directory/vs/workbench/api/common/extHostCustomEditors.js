import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/hash.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/resources.js';
import '../../../base/common/uri.js';
import './extHostTypeConverters.js';
import './extHostWebview.js';
import './cache.js';
import './extHost.protocol.js';
import './extHostTypes.js';
define(
			Pe[565],
			Ne([1, 0, 23, 78, 3, 16, 24, 2, 17, 145, 186, 6, 11]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Dhd = void 0),
					(l = tt(l)),
					(y = tt(y)),
					(d = tt(d));
				class k {
					constructor(o, w) {
						(this.document = o),
							(this.b = w),
							(this.a = 1),
							(this.c = new p.$7gd("custom documents"));
					}
					addEdit(o) {
						return this.c.add([o]);
					}
					async undo(o, w) {
						await this.f(o).undo(), w || this.disposeBackup();
					}
					async redo(o, w) {
						await this.f(o).redo(), w || this.disposeBackup();
					}
					disposeEdits(o) {
						for (const w of o) this.c.delete(w);
					}
					getNewBackupUri() {
						if (!this.b)
							throw new Error("Backup requires a valid storage path");
						const o = s(this.document.uri) + this.a++;
						return (0, P.$nh)(this.b, o);
					}
					updateBackup(o) {
						this.d?.delete(), (this.d = o);
					}
					disposeBackup() {
						this.d?.delete(), (this.d = void 0);
					}
					f(o) {
						const w = this.c.get(o, 0);
						if (!w) throw new Error("No edit found");
						return w;
					}
				}
				class g {
					constructor() {
						this.a = new Map();
					}
					get(o, w) {
						return this.a.get(this.b(o, w));
					}
					add(o, w, m) {
						const E = this.b(o, w.uri);
						if (this.a.has(E))
							throw new Error(
								`Document already exists for viewType:${o} resource:${w.uri}`,
							);
						const R = new k(w, m);
						return this.a.set(E, R), R;
					}
					delete(o, w) {
						const m = this.b(o, w.uri);
						this.a.delete(m);
					}
					b(o, w) {
						return `${o}@@@${w}`;
					}
				}
				var c;
				(function (f) {
					(f[(f.Text = 0)] = "Text"), (f[(f.Custom = 1)] = "Custom");
				})(c || (c = {}));
				class h {
					constructor() {
						this.a = new Map();
					}
					addTextProvider(o, w, m) {
						return this.b(o, { type: c.Text, extension: w, provider: m });
					}
					addCustomProvider(o, w, m) {
						return this.b(o, { type: c.Custom, extension: w, provider: m });
					}
					get(o) {
						return this.a.get(o);
					}
					b(o, w) {
						if (this.a.has(o))
							throw new Error(`Provider for viewType:${o} already registered`);
						return this.a.set(o, w), new d.$nbb(() => this.a.delete(o));
					}
				}
				class $ {
					constructor(o, w, m, E, R) {
						(this.d = w),
							(this.f = m),
							(this.g = E),
							(this.h = R),
							(this.b = new h()),
							(this.c = new g()),
							(this.a = o.getProxy(y.$lbb.MainThreadCustomEditors));
					}
					registerCustomEditorProvider(o, w, m, E) {
						const R = new S.$Zc();
						return (
							a(m)
								? (R.add(this.b.addTextProvider(w, o, m)),
									this.a.$registerTextEditorProvider(
										(0, n.$Ahd)(o),
										w,
										E.webviewOptions || {},
										{ supportsMove: !!m.moveCustomTextEditor },
										(0, n.$yhd)(o),
									))
								: (R.add(this.b.addCustomProvider(w, o, m)),
									T(m) &&
										R.add(
											m.onDidChangeCustomDocument((C) => {
												const O = this.i(w, C.document.uri);
												if (u(C)) {
													const A = O.addEdit(C);
													this.a.$onDidEdit(C.document.uri, w, A, C.label);
												} else this.a.$onContentChange(C.document.uri, w);
											}),
										),
									this.a.$registerCustomEditorProvider(
										(0, n.$Ahd)(o),
										w,
										E.webviewOptions || {},
										!!E.supportsMultipleEditorsPerDocument,
										(0, n.$yhd)(o),
									)),
							d.$nbb.from(
								R,
								new d.$nbb(() => {
									this.a.$unregisterEditorProvider(w);
								}),
							)
						);
					}
					async $createCustomDocument(o, w, m, E, R) {
						const C = this.b.get(w);
						if (!C) throw new Error(`No provider found for '${w}'`);
						if (C.type !== c.Custom)
							throw new Error(`Invalid provide type for '${w}'`);
						const O = I.URI.revive(o),
							A = await C.provider.openCustomDocument(
								O,
								{ backupId: m, untitledDocumentData: E?.buffer },
								R,
							);
						let J;
						return (
							T(C.provider) &&
								this.f &&
								(J =
									this.f.workspaceValue(C.extension) ??
									this.f.globalValue(C.extension)),
							this.c.add(w, A, J),
							{ editable: T(C.provider) }
						);
					}
					async $disposeCustomDocument(o, w) {
						const m = this.b.get(w);
						if (!m) throw new Error(`No provider found for '${w}'`);
						if (m.type !== c.Custom)
							throw new Error(`Invalid provider type for '${w}'`);
						const E = I.URI.revive(o),
							{ document: R } = this.i(w, E);
						this.c.delete(w, R), R.dispose();
					}
					async $resolveCustomEditor(o, w, m, E, R, C) {
						const O = this.b.get(m);
						if (!O) throw new Error(`No provider found for '${m}'`);
						const A = l.ViewColumn.to(R),
							J = this.g.createNewWebview(w, E.contentOptions, O.extension),
							L = this.h.createNewWebviewPanel(
								w,
								m,
								E.title,
								A,
								E.options,
								J,
								E.active,
							),
							b = I.URI.revive(o);
						switch (O.type) {
							case c.Custom: {
								const { document: F } = this.i(m, b);
								return O.provider.resolveCustomEditor(F, L, C);
							}
							case c.Text: {
								const F = this.d.getDocument(b);
								return O.provider.resolveCustomTextEditor(F, L, C);
							}
							default:
								throw new Error("Unknown webview provider type");
						}
					}
					$disposeEdits(o, w, m) {
						this.i(w, o).disposeEdits(m);
					}
					async $onMoveCustomEditor(o, w, m) {
						const E = this.b.get(m);
						if (!E) throw new Error(`No provider found for '${m}'`);
						if (!E.provider.moveCustomTextEditor)
							throw new Error(`Provider does not implement move '${m}'`);
						const R = this.h.getWebviewPanel(o);
						if (!R) throw new Error("No webview found");
						const C = I.URI.revive(w),
							O = this.d.getDocument(C);
						await E.provider.moveCustomTextEditor(
							O,
							R,
							e.CancellationToken.None,
						);
					}
					async $undo(o, w, m, E) {
						return this.i(w, o).undo(m, E);
					}
					async $redo(o, w, m, E) {
						return this.i(w, o).redo(m, E);
					}
					async $revert(o, w, m) {
						const E = this.i(w, o);
						await this.j(w).revertCustomDocument(E.document, m),
							E.disposeBackup();
					}
					async $onSave(o, w, m) {
						const E = this.i(w, o);
						await this.j(w).saveCustomDocument(E.document, m),
							E.disposeBackup();
					}
					async $onSaveAs(o, w, m, E) {
						const R = this.i(w, o);
						return this.j(w).saveCustomDocumentAs(
							R.document,
							I.URI.revive(m),
							E,
						);
					}
					async $backup(o, w, m) {
						const E = this.i(w, o),
							C = await this.j(w).backupCustomDocument(
								E.document,
								{ destination: E.getNewBackupUri() },
								m,
							);
						return E.updateBackup(C), C.id;
					}
					i(o, w) {
						const m = this.c.get(o, I.URI.revive(w));
						if (!m) throw new Error("No custom document found");
						return m;
					}
					j(o) {
						const m = this.b.get(o)?.provider;
						if (!m || !T(m)) throw new Error("Custom document is not editable");
						return m;
					}
				}
				t.$Dhd = $;
				function T(f) {
					return !!f.onDidChangeCustomDocument;
				}
				function a(f) {
					return typeof f.resolveCustomTextEditor == "function";
				}
				function u(f) {
					return typeof f.undo == "function" && typeof f.redo == "function";
				}
				function s(f) {
					const o =
						f.scheme === N.Schemas.file || f.scheme === N.Schemas.untitled
							? f.fsPath
							: f.toString();
					return (0, r.$Aj)(o) + "";
				}
			},
		),
		