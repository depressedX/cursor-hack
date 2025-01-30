import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/map.js';
import '../../../../base/common/network.js';
import '../../../../base/common/types.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../common/editor.js';
import '../common/variableResolver.js';
define(
			de[3252],
			he([1, 0, 15, 59, 23, 28, 56, 4, 10, 21, 25, 44, 1797]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*map*/,
 w /*network*/,
 E /*types*/,
 C /*editorBrowser*/,
 d /*nls*/,
 m /*configuration*/,
 r /*storage*/,
 u /*workspace*/,
 a /*editor*/,
 h /*variableResolver*/) {
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
		