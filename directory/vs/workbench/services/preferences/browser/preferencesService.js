import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/json.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/coreCommands.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../common/editor.js';
import '../../../common/editor/sideBySideEditorInput.js';
import '../../configuration/common/jsonEditing.js';
import '../../editor/common/editorGroupsService.js';
import '../../editor/common/editorService.js';
import './keybindingsEditorInput.js';
import '../common/preferences.js';
import '../common/preferencesEditorInput.js';
import '../common/preferencesModels.js';
import '../../remote/common/remoteAgentService.js';
import '../../textfile/common/textEditorService.js';
import '../../textfile/common/textfiles.js';
import '../../../../base/common/types.js';
import '../../../../editor/contrib/suggest/browser/suggestController.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../base/common/map.js';
import '../../../../base/common/resources.js';
import '../../../../platform/url/common/url.js';
import '../../../../base/common/strings.js';
import '../../extensions/common/extensions.js';
import '../../../../platform/progress/common/progress.js';
define(
			de[3887],
			he([
				1, 0, 29, 6, 187, 3, 23, 9, 498, 56, 67, 42, 4, 10, 81, 22, 20, 5, 39,
				73, 40, 30, 25, 44, 313, 423, 66, 18, 1310, 131, 1312, 838, 143, 719,
				85, 28, 328, 133, 129, 59, 19, 465, 37, 53, 84,
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
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vvc = void 0),
					(C = mt(C)),
					(h = mt(h));
				const G = `{
}`;
				let K = class extends E.$1c {
					constructor(
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
					) {
						super(),
							(this.n = W),
							(this.q = X),
							(this.r = Y),
							(this.s = ie),
							(this.t = ne),
							(this.u = ee),
							(this.w = _),
							(this.y = te),
							(this.z = Q),
							(this.C = Z),
							(this.F = le),
							(this.G = oe),
							(this.H = ae),
							(this.I = pe),
							(this.J = ye),
							(this.L = ue),
							(this.a = this.D(new i.$re())),
							(this.b = this.D(new i.$re())),
							(this.onDidDefaultSettingsContentChanged = this.b.event),
							(this.j = new z.$Hc()),
							(this.m = void 0),
							(this.defaultKeybindingsResource = d.URI.from({
								scheme: C.Schemas.vscode,
								authority: "defaultsettings",
								path: "/keybindings.json",
							})),
							(this.M = d.URI.from({
								scheme: C.Schemas.vscode,
								authority: "defaultsettings",
								path: "/defaultSettings.json",
							})),
							this.D(
								se.onDidUpdateKeybindings(() => {
									const fe = re.getModel(this.defaultKeybindingsResource);
									fe && re.updateModel(fe, (0, D.$4Z)(se));
								}),
							),
							this.D($e.registerHandler(this));
					}
					get userSettingsResource() {
						return this.y.currentProfile.settingsResource;
					}
					get workspaceSettingsResource() {
						if (this.u.getWorkbenchState() === y.WorkbenchState.EMPTY)
							return null;
						const W = this.u.getWorkspace();
						return W.configuration || W.folders[0].toResource(k.$9Z);
					}
					createSettingsEditor2Input() {
						return new L.$uvc(this);
					}
					getFolderSettingsResource(W) {
						const X = this.u.getWorkspaceFolder(W);
						return X ? X.toResource(k.$9Z) : null;
					}
					hasDefaultSettingsContent(W) {
						return (
							this.W(W) ||
							(0, F.$gh)(W, this.M) ||
							(0, F.$gh)(W, this.defaultKeybindingsResource)
						);
					}
					getDefaultSettingsContent(W) {
						if (this.W(W)) {
							const X = this.U(W),
								Y = this.db(X);
							return (
								this.j.has(W) ||
									(this.D(Y.onDidChange(() => this.b.fire(W))), this.j.add(W)),
								Y.getContentWithoutMostCommonlyUsed(!0)
							);
						}
						if ((0, F.$gh)(W, this.M))
							return (
								this.h ||
									((this.h = this.D(
										this.w.createInstance(
											D.$3Z,
											this.db(c.ConfigurationTarget.USER_LOCAL),
										),
									)),
									this.D(this.h.onDidContentChanged(() => this.b.fire(W)))),
								this.h.content
							);
						if ((0, F.$gh)(W, this.defaultKeybindingsResource))
							return this.w.createInstance(D.$5Z, W).content;
					}
					async createPreferencesEditorModel(W) {
						if (this.W(W)) return this.cb(W);
						if (
							this.userSettingsResource.toString() === W.toString() ||
							this.z.defaultProfile.settingsResource.toString() === W.toString()
						)
							return this.bb(c.ConfigurationTarget.USER_LOCAL, W);
						const X = await this.getEditableSettingsURI(
							c.ConfigurationTarget.WORKSPACE,
						);
						if (X && X.toString() === W.toString())
							return this.bb(c.ConfigurationTarget.WORKSPACE, X);
						if (this.u.getWorkbenchState() === y.WorkbenchState.WORKSPACE) {
							const ne = await this.getEditableSettingsURI(
								c.ConfigurationTarget.WORKSPACE_FOLDER,
								W,
							);
							if (ne && ne.toString() === W.toString())
								return this.bb(c.ConfigurationTarget.WORKSPACE_FOLDER, W);
						}
						const Y = await this.H.getEnvironment(),
							ie = Y ? Y.settingsPath : null;
						return ie && ie.toString() === W.toString()
							? this.bb(c.ConfigurationTarget.USER_REMOTE, W)
							: null;
					}
					openRawDefaultSettings() {
						return this.n.openEditor({ resource: this.M });
					}
					openRawUserSettings() {
						return this.n.openEditor({ resource: this.userSettingsResource });
					}
					N() {
						return this.s.getValue("workbench.settings.editor") === "json";
					}
					openSettings(W = {}) {
						return (
							(W = { ...W, target: c.ConfigurationTarget.USER_LOCAL }),
							W.query && (W.jsonEditor = !1),
							this.O(this.userSettingsResource, W)
						);
					}
					openLanguageSpecificSettings(W, X = {}) {
						return (
							this.N()
								? ((X.query = void 0),
									(X.revealSetting = { key: `[${W}]`, edit: !0 }))
								: (X.query = `@lang:${W}${X.query ? ` ${X.query}` : ""}`),
							(X.target = X.target ?? c.ConfigurationTarget.USER_LOCAL),
							this.O(this.userSettingsResource, X)
						);
					}
					O(W, X) {
						return (
							(X = { ...X, jsonEditor: X.jsonEditor ?? this.N() }),
							X.jsonEditor ? this.Q(W, X) : this.P(X)
						);
					}
					async P(W) {
						const X = this.createSettingsEditor2Input();
						return (
							(W = { ...W, focusSearch: !0 }),
							await this.n.openEditor(
								X,
								(0, k.$6Z)(W),
								W.openToSide ? T.$KY : void 0,
							),
							this.q.activeGroup.activeEditorPane
						);
					}
					openApplicationSettings(W = {}) {
						return (
							(W = { ...W, target: c.ConfigurationTarget.USER_LOCAL }),
							this.O(this.z.defaultProfile.settingsResource, W)
						);
					}
					openUserSettings(W = {}) {
						return (
							(W = { ...W, target: c.ConfigurationTarget.USER_LOCAL }),
							this.O(this.userSettingsResource, W)
						);
					}
					async openRemoteSettings(W = {}) {
						const X = await this.H.getEnvironment();
						X &&
							((W = { ...W, target: c.ConfigurationTarget.USER_REMOTE }),
							this.O(X.settingsPath, W));
					}
					openWorkspaceSettings(W = {}) {
						return this.workspaceSettingsResource
							? ((W = { ...W, target: c.ConfigurationTarget.WORKSPACE }),
								this.O(this.workspaceSettingsResource, W))
							: (this.t.info(h.localize(12581, null)), Promise.reject(null));
					}
					async openFolderSettings(W = {}) {
						if (
							((W = { ...W, target: c.ConfigurationTarget.WORKSPACE_FOLDER }),
							!W.folderUri)
						)
							throw new Error("Missing folder URI");
						const X = await this.getEditableSettingsURI(
							c.ConfigurationTarget.WORKSPACE_FOLDER,
							W.folderUri,
						);
						if (!X)
							throw new Error(`Invalid folder URI - ${W.folderUri.toString()}`);
						return this.O(X, W);
					}
					async openGlobalKeybindingSettings(W, X) {
						if (((X = { pinned: !0, revealIfOpened: !0, ...X }), W)) {
							const Y =
									"// " +
									h.localize(12582, null) +
									`
[
]`,
								ie = this.y.currentProfile.keybindingsResource,
								ne = !!this.s.getValue(
									"workbench.settings.openDefaultKeybindings",
								);
							if ((await this.fb(ie, Y), ne)) {
								const ee = this.q.activeGroup,
									_ = this.q.addGroup(ee.id, I.GroupDirection.RIGHT);
								await Promise.all([
									this.n.openEditor({
										resource: this.defaultKeybindingsResource,
										options: {
											pinned: !0,
											preserveFocus: !0,
											revealIfOpened: !0,
											override: $.$b1.id,
										},
										label: h.localize(12583, null),
										description: "",
									}),
									this.n.openEditor({ resource: ie, options: X }, _.id),
								]);
							} else await this.n.openEditor({ resource: ie, options: X });
						} else {
							const Y = await this.n.openEditor(this.w.createInstance(P.$tvc), {
								...X,
							});
							X.query && Y.search(X.query);
						}
					}
					openDefaultKeybindingsFile() {
						return this.n.openEditor({
							resource: this.defaultKeybindingsResource,
							label: h.localize(12584, null),
						});
					}
					async Q(W, X) {
						const Y = X?.openToSide ? T.$KY : void 0,
							ie = await this.R(W, X, Y);
						return (
							ie &&
								X?.revealSetting &&
								(await this.hb(
									X.revealSetting.key,
									!!X.revealSetting.edit,
									ie,
									W,
								)),
							ie
						);
					}
					async R(W, X, Y) {
						const ie = !!this.s.getValue(k.$$Z),
							ne = !!this.s.getValue(k.$0Z);
						if (ie || ne) return this.S(W, X, Y);
						const ee = X?.target ?? c.ConfigurationTarget.USER,
							_ = await this.ab(ee, W);
						return (
							(X = { ...X, pinned: !0 }),
							await this.n.openEditor(_, (0, k.$6Z)(X), Y)
						);
					}
					async S(W, X = {}, Y) {
						const ie = X.target ?? c.ConfigurationTarget.USER;
						await this.eb(ie, W);
						const ne = this.createSplitJsonEditorInput(ie, W);
						return (
							(X = { ...X, pinned: !0 }),
							this.n.openEditor(ne, (0, k.$6Z)(X), Y)
						);
					}
					createSplitJsonEditorInput(W, X) {
						const Y = this.I.createTextEditor({ resource: X }),
							ie = this.I.createTextEditor({ resource: this.$(W) });
						return this.w.createInstance(v.$iY, Y.getName(), void 0, ie, Y);
					}
					createSettings2EditorModel() {
						return this.w.createInstance(
							D.$YZ,
							this.db(c.ConfigurationTarget.USER_LOCAL),
						);
					}
					U(W) {
						return this.Y(W)
							? c.ConfigurationTarget.WORKSPACE
							: this.Z(W)
								? c.ConfigurationTarget.WORKSPACE_FOLDER
								: c.ConfigurationTarget.USER_LOCAL;
					}
					W(W) {
						return this.X(W) || this.Y(W) || this.Z(W);
					}
					X(W) {
						return (
							W.authority === "defaultsettings" &&
							W.scheme === C.Schemas.vscode &&
							!!W.path.match(/\/(\d+\/)?settings\.json$/)
						);
					}
					Y(W) {
						return (
							W.authority === "defaultsettings" &&
							W.scheme === C.Schemas.vscode &&
							!!W.path.match(/\/(\d+\/)?workspaceSettings\.json$/)
						);
					}
					Z(W) {
						return (
							W.authority === "defaultsettings" &&
							W.scheme === C.Schemas.vscode &&
							!!W.path.match(/\/(\d+\/)?resourceSettings\.json$/)
						);
					}
					$(W) {
						switch (W) {
							case c.ConfigurationTarget.WORKSPACE:
								return d.URI.from({
									scheme: C.Schemas.vscode,
									authority: "defaultsettings",
									path: "/workspaceSettings.json",
								});
							case c.ConfigurationTarget.WORKSPACE_FOLDER:
								return d.URI.from({
									scheme: C.Schemas.vscode,
									authority: "defaultsettings",
									path: "/resourceSettings.json",
								});
						}
						return d.URI.from({
							scheme: C.Schemas.vscode,
							authority: "defaultsettings",
							path: "/settings.json",
						});
					}
					async ab(W, X) {
						return (
							await this.eb(W, X), this.I.createTextEditor({ resource: X })
						);
					}
					async bb(W, X) {
						const Y = this.u.getWorkspace();
						if (
							Y.configuration &&
							Y.configuration.toString() === X.toString()
						) {
							const ne = await this.C.createModelReference(X);
							return this.w.createInstance(D.$ZZ, ne, W);
						}
						const ie = await this.C.createModelReference(X);
						return this.w.createInstance(D.$XZ, ie, W);
					}
					async cb(W) {
						const X = await this.C.createModelReference(W),
							Y = this.U(W);
						return this.w.createInstance(D.$2Z, W, X, this.db(Y));
					}
					db(W) {
						return W === c.ConfigurationTarget.WORKSPACE
							? ((this.f ??= this.D(new D.$1Z(this.gb(), W, this.s))), this.f)
							: W === c.ConfigurationTarget.WORKSPACE_FOLDER
								? ((this.g ??= this.D(new D.$1Z(this.gb(), W, this.s))), this.g)
								: ((this.c ??= this.D(new D.$1Z(this.gb(), W, this.s))),
									this.c);
					}
					async getEditableSettingsURI(W, X) {
						switch (W) {
							case c.ConfigurationTarget.APPLICATION:
								return this.z.defaultProfile.settingsResource;
							case c.ConfigurationTarget.USER:
							case c.ConfigurationTarget.USER_LOCAL:
								return this.userSettingsResource;
							case c.ConfigurationTarget.USER_REMOTE: {
								const Y = await this.H.getEnvironment();
								return Y ? Y.settingsPath : null;
							}
							case c.ConfigurationTarget.WORKSPACE:
								return this.workspaceSettingsResource;
							case c.ConfigurationTarget.WORKSPACE_FOLDER:
								if (X) return this.getFolderSettingsResource(X);
						}
						return null;
					}
					async eb(W, X) {
						if (
							this.u.getWorkbenchState() === y.WorkbenchState.WORKSPACE &&
							W === c.ConfigurationTarget.WORKSPACE
						) {
							const Y = this.u.getWorkspace().configuration;
							if (!Y) return;
							const ie = await this.r.read(Y);
							Object.keys((0, w.$do)(ie.value)).indexOf("settings") === -1 &&
								(await this.F.write(
									X,
									[{ path: ["settings"], value: {} }],
									!0,
								));
							return;
						}
						await this.fb(X, G);
					}
					async fb(W, X) {
						try {
							await this.r.read(W, { acceptTextOnly: !0 });
						} catch (Y) {
							if (
								Y.fileOperationResult === g.FileOperationResult.FILE_NOT_FOUND
							)
								try {
									await this.r.write(W, X);
									return;
								} catch (ie) {
									throw new Error(
										h.localize(
											12585,
											null,
											this.G.getUriLabel(W, { relative: !0 }),
											(0, t.$bb)(ie),
										),
									);
								}
							else throw Y;
						}
					}
					gb() {
						return [
							"files.autoSave",
							"editor.fontSize",
							"editor.fontFamily",
							"editor.tabSize",
							"editor.renderWhitespace",
							"editor.cursorStyle",
							"editor.multiCursorModifier",
							"editor.insertSpaces",
							"editor.wordWrap",
							"files.exclude",
							"files.associations",
							"workbench.editor.enablePreview",
						];
					}
					async hb(W, X, Y, ie) {
						const ne = Y ? (0, r.$btb)(Y.getControl()) : null;
						if (!ne) return;
						const ee = await this.createPreferencesEditorModel(ie);
						if (!ee) return;
						const _ = await this.ib(W, X, ee, ne);
						_ &&
							(ne.setPosition(_),
							ne.revealPositionNearTop(_),
							ne.focus(),
							X && O.$KDb.get(ne)?.triggerSuggest());
					}
					async ib(W, X, Y, ie) {
						const ne = ie.getModel();
						if (!ne) return null;
						const ee = l.$Io
								.as(n.$No.Configuration)
								.getConfigurationProperties()[W],
							_ = n.$Xo.test(W);
						if (!ee && !_) return null;
						let te = null;
						const Q = ee?.type ?? "object";
						let Z = Y.getPreference(W);
						if (!Z && X) {
							let se =
								Q === "object" || Q === "array"
									? this.s.inspect(W).defaultValue
									: (0, n.$1o)(Q);
							if (((se = se === void 0 && _ ? {} : se), se !== void 0)) {
								const re = Y instanceof D.$ZZ ? ["settings", W] : [W];
								await this.F.write(Y.uri, [{ path: re, value: se }], !1),
									(Z = Y.getPreference(W));
							}
						}
						if (Z)
							if (X)
								if ((0, R.$ng)(Z.value) || Array.isArray(Z.value)) {
									(te = {
										lineNumber: Z.valueRange.startLineNumber,
										column: Z.valueRange.startColumn + 1,
									}),
										ie.setPosition(te),
										await m.CoreEditingCommands.LineBreakInsert.runEditorCommand(
											null,
											ie,
											null,
										),
										(te = {
											lineNumber: te.lineNumber + 1,
											column: ne.getLineMaxColumn(te.lineNumber + 1),
										});
									const se = ne.getLineFirstNonWhitespaceColumn(te.lineNumber);
									se &&
										(ie.setPosition({ lineNumber: te.lineNumber, column: se }),
										await m.CoreEditingCommands.LineBreakInsert.runEditorCommand(
											null,
											ie,
											null,
										),
										(te = {
											lineNumber: te.lineNumber,
											column: ne.getLineMaxColumn(te.lineNumber),
										}));
								} else
									te = {
										lineNumber: Z.valueRange.startLineNumber,
										column: Z.valueRange.endColumn,
									};
							else
								te = {
									lineNumber: Z.keyRange.startLineNumber,
									column: Z.keyRange.startColumn,
								};
						return te;
					}
					getSetting(W) {
						if (!this.m) {
							const X = this.db(c.ConfigurationTarget.USER),
								Y = this.D(new E.$2c());
							(Y.value = X.onDidChange(() => {
								(this.m = void 0), Y.clear();
							})),
								(this.m = X.getSettingsGroups());
						}
						for (const X of this.m)
							for (const Y of X.sections)
								for (const ie of Y.settings)
									if ((0, H.$Hf)(ie.key, W) === 0) return ie;
					}
					async handleURL(W) {
						if ((0, H.$Hf)(W.authority, k.$_Z) !== 0) return !1;
						const X = W.path.split("/").filter((ee) => !!ee),
							Y = X.length > 0 ? X[0] : void 0;
						if (!Y) return this.openSettings(), !0;
						let ie = this.getSetting(Y);
						!ie &&
							this.J.extensions.length === 0 &&
							(await this.L.withProgress(
								{ location: V.ProgressLocation.Window },
								() => i.Event.toPromise(this.J.onDidRegisterExtensions),
							),
							(ie = this.getSetting(Y)));
						const ne = {};
						return ie && (ne.query = Y), this.openSettings(ne), !0;
					}
					dispose() {
						this.a.fire(), super.dispose();
					}
				};
				(e.$vvc = K),
					(e.$vvc = K =
						Ne(
							[
								j(0, T.$IY),
								j(1, I.$EY),
								j(2, A.$kZ),
								j(3, c.$gj),
								j(4, s.$4N),
								j(5, y.$Vi),
								j(6, o.$Li),
								j(7, B.$P8),
								j(8, U.$Xl),
								j(9, a.$MO),
								j(10, f.$uZ),
								j(11, u.$QO),
								j(12, S.$$Qb),
								j(13, b.$3N),
								j(14, M.$$m),
								j(15, N.$zdc),
								j(16, x.$2rb),
								j(17, q.$q2),
								j(18, V.$8N),
							],
							K,
						)),
					(0, p.$lK)(k.$7Z, K, p.InstantiationType.Delayed);
			},
		),
		