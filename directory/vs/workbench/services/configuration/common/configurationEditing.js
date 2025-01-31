import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/json.js';
import '../../../../base/common/jsonEdit.js';
import '../../../../base/common/async.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../textfile/common/textfiles.js';
import './configuration.js';
import '../../../../platform/files/common/files.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../editor/common/editorService.js';
import '../../../../platform/notification/common/notification.js';
import '../../preferences/common/preferences.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/core/editOperation.js';
import '../../../../editor/common/core/selection.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../base/common/errors.js';
define(
			de[3779],
			he([
				1, 0, 4, 187, 586, 15, 30, 25, 85, 261, 22, 42, 81, 18, 40, 131, 68, 17,
				188, 104, 133, 129, 29,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*json*/,
				w /*jsonEdit*/,
				E /*async*/,
				C /*platform*/,
				d /*workspace*/,
				m /*textfiles*/,
				r /*configuration*/,
				u /*files*/,
				a /*resolverService*/,
				h /*configurationRegistry*/,
				c /*editorService*/,
				n /*notification*/,
				g /*preferences*/,
				p /*uriIdentity*/,
				o /*range*/,
				f /*editOperation*/,
				b /*selection*/,
				s /*userDataProfile*/,
				l /*userDataProfile*/,
				y /*errors*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$y3c =
						e.EditableConfigurationTarget =
						e.$x3c =
						e.ConfigurationEditingErrorCode =
							void 0),
					(t = mt(t)),
					(i = mt(i));
				var $;
				(function (T) {
					(T[(T.ERROR_UNKNOWN_KEY = 0)] = "ERROR_UNKNOWN_KEY"),
						(T[(T.ERROR_INVALID_WORKSPACE_CONFIGURATION_APPLICATION = 1)] =
							"ERROR_INVALID_WORKSPACE_CONFIGURATION_APPLICATION"),
						(T[(T.ERROR_INVALID_WORKSPACE_CONFIGURATION_MACHINE = 2)] =
							"ERROR_INVALID_WORKSPACE_CONFIGURATION_MACHINE"),
						(T[(T.ERROR_INVALID_FOLDER_CONFIGURATION = 3)] =
							"ERROR_INVALID_FOLDER_CONFIGURATION"),
						(T[(T.ERROR_INVALID_USER_TARGET = 4)] =
							"ERROR_INVALID_USER_TARGET"),
						(T[(T.ERROR_INVALID_WORKSPACE_TARGET = 5)] =
							"ERROR_INVALID_WORKSPACE_TARGET"),
						(T[(T.ERROR_INVALID_FOLDER_TARGET = 6)] =
							"ERROR_INVALID_FOLDER_TARGET"),
						(T[(T.ERROR_INVALID_RESOURCE_LANGUAGE_CONFIGURATION = 7)] =
							"ERROR_INVALID_RESOURCE_LANGUAGE_CONFIGURATION"),
						(T[(T.ERROR_NO_WORKSPACE_OPENED = 8)] =
							"ERROR_NO_WORKSPACE_OPENED"),
						(T[(T.ERROR_CONFIGURATION_FILE_DIRTY = 9)] =
							"ERROR_CONFIGURATION_FILE_DIRTY"),
						(T[(T.ERROR_CONFIGURATION_FILE_MODIFIED_SINCE = 10)] =
							"ERROR_CONFIGURATION_FILE_MODIFIED_SINCE"),
						(T[(T.ERROR_INVALID_CONFIGURATION = 11)] =
							"ERROR_INVALID_CONFIGURATION"),
						(T[(T.ERROR_POLICY_CONFIGURATION = 12)] =
							"ERROR_POLICY_CONFIGURATION"),
						(T[(T.ERROR_INTERNAL = 13)] = "ERROR_INTERNAL");
				})($ || (e.ConfigurationEditingErrorCode = $ = {}));
				class v extends y.$fb {
					constructor(P, k) {
						super(P), (this.code = k);
					}
				}
				e.$x3c = v;
				var S;
				(function (T) {
					(T[(T.USER_LOCAL = 1)] = "USER_LOCAL"),
						(T[(T.USER_REMOTE = 2)] = "USER_REMOTE"),
						(T[(T.WORKSPACE = 3)] = "WORKSPACE"),
						(T[(T.WORKSPACE_FOLDER = 4)] = "WORKSPACE_FOLDER");
				})(S || (e.EditableConfigurationTarget = S = {}));
				let I = class {
					constructor(P, k, L, D, M, N, A, R, O, B, U, z) {
						(this.b = P),
							(this.c = k),
							(this.d = L),
							(this.e = D),
							(this.f = M),
							(this.g = N),
							(this.h = A),
							(this.i = R),
							(this.j = O),
							(this.k = B),
							(this.l = U),
							(this.m = z),
							(this.a = new E.$Th());
					}
					async writeConfiguration(P, k, L = {}) {
						const D = this.F(P, k, L.scopes || {});
						return this.a.queue(async () => {
							try {
								await this.n(D, L);
							} catch (M) {
								if (L.donotNotifyError) throw M;
								await this.t(M, D, L.scopes);
							}
						});
					}
					async n(P, k) {
						await this.E(P.target, P, !k.handleDirtyFile, k.scopes || {});
						const L = P.resource,
							D = await this.C(L);
						try {
							const M = this.s(D.object.textEditorModel);
							await this.o(P, D.object.textEditorModel, M, k);
						} finally {
							D.dispose();
						}
					}
					async o(P, k, L, D) {
						if (this.D(k.getValue(), P))
							throw this.y($.ERROR_INVALID_CONFIGURATION, P.target, P);
						if (this.i.isDirty(k.uri) && D.handleDirtyFile)
							switch (D.handleDirtyFile) {
								case "save":
									await this.p(k, P);
									break;
								case "revert":
									await this.i.revert(k.uri);
									break;
							}
						const M = this.r(P, k.getValue(), L)[0];
						M && this.q(M, k) && (await this.p(k, P));
					}
					async p(P, k) {
						try {
							await this.i.save(P.uri, { ignoreErrorHandler: !0 });
						} catch (L) {
							throw L.fileOperationResult ===
								u.FileOperationResult.FILE_MODIFIED_SINCE
								? this.y($.ERROR_CONFIGURATION_FILE_MODIFIED_SINCE, k.target, k)
								: new v(
										t.localize(12114, null, this.A(k.target), L.message),
										$.ERROR_INTERNAL,
									);
						}
					}
					q(P, k) {
						const L = k.getPositionAt(P.offset),
							D = k.getPositionAt(P.offset + P.length),
							M = new o.$iL(L.lineNumber, L.column, D.lineNumber, D.column),
							N = k.getValueInRange(M);
						if (P.content !== N) {
							const A = N
								? f.$jL.replace(M, P.content)
								: f.$jL.insert(L, P.content);
							return (
								k.pushEditOperations(
									[new b.$kL(L.lineNumber, L.column, L.lineNumber, L.column)],
									[A],
									() => [],
								),
								!0
							);
						}
						return !1;
					}
					r({ value: P, jsonPath: k }, L, D) {
						return k.length
							? (0, w.$ro)(L, k, P, D)
							: [
									{
										content: JSON.stringify(
											P,
											null,
											D.insertSpaces && D.tabSize
												? " ".repeat(D.tabSize)
												: "	",
										),
										length: L.length,
										offset: 0,
									},
								];
					}
					s(P) {
						const { insertSpaces: k, tabSize: L } = P.getOptions(),
							D = P.getEOL();
						return { insertSpaces: k, tabSize: L, eol: D };
					}
					async t(P, k, L) {
						switch (P.code) {
							case $.ERROR_INVALID_CONFIGURATION:
								this.u(P, k);
								break;
							case $.ERROR_CONFIGURATION_FILE_DIRTY:
								this.v(P, k, L);
								break;
							case $.ERROR_CONFIGURATION_FILE_MODIFIED_SINCE:
								return this.n(k, { scopes: L, handleDirtyFile: "revert" });
							default:
								this.j.error(P.message);
						}
					}
					u(P, k) {
						const L =
							k.workspaceStandAloneConfigurationKey === r.$NZ
								? t.localize(12115, null)
								: k.workspaceStandAloneConfigurationKey === r.$OZ
									? t.localize(12116, null)
									: null;
						L
							? this.j.prompt(n.Severity.Error, P.message, [
									{ label: L, run: () => this.x(k.resource) },
								])
							: this.j.prompt(n.Severity.Error, P.message, [
									{ label: t.localize(12117, null), run: () => this.w(k) },
								]);
					}
					v(P, k, L) {
						const D =
							k.workspaceStandAloneConfigurationKey === r.$NZ
								? t.localize(12118, null)
								: k.workspaceStandAloneConfigurationKey === r.$OZ
									? t.localize(12119, null)
									: null;
						D
							? this.j.prompt(n.Severity.Error, P.message, [
									{
										label: t.localize(12120, null),
										run: () => {
											const M = k.key
												? `${k.workspaceStandAloneConfigurationKey}.${k.key}`
												: k.workspaceStandAloneConfigurationKey;
											this.writeConfiguration(
												k.target,
												{ key: M, value: k.value },
												{ handleDirtyFile: "save", scopes: L },
											);
										},
									},
									{ label: D, run: () => this.x(k.resource) },
								])
							: this.j.prompt(n.Severity.Error, P.message, [
									{
										label: t.localize(12121, null),
										run: () =>
											this.writeConfiguration(
												k.target,
												{ key: k.key, value: k.value },
												{ handleDirtyFile: "save", scopes: L },
											),
									},
									{ label: t.localize(12122, null), run: () => this.w(k) },
								]);
					}
					w(P) {
						const k = { jsonEditor: !0 };
						switch (P.target) {
							case S.USER_LOCAL:
								this.k.openUserSettings(k);
								break;
							case S.USER_REMOTE:
								this.k.openRemoteSettings(k);
								break;
							case S.WORKSPACE:
								this.k.openWorkspaceSettings(k);
								break;
							case S.WORKSPACE_FOLDER:
								if (P.resource) {
									const L = this.d.getWorkspaceFolder(P.resource);
									L &&
										this.k.openFolderSettings({
											folderUri: L.uri,
											jsonEditor: !0,
										});
								}
								break;
						}
					}
					x(P) {
						this.l.openEditor({ resource: P, options: { pinned: !0 } });
					}
					y(P, k, L) {
						const D = this.z(P, k, L);
						return new v(D, P);
					}
					z(P, k, L) {
						switch (P) {
							case $.ERROR_POLICY_CONFIGURATION:
								return t.localize(12123, null, L.key);
							case $.ERROR_UNKNOWN_KEY:
								return t.localize(12124, null, this.A(k), L.key);
							case $.ERROR_INVALID_WORKSPACE_CONFIGURATION_APPLICATION:
								return t.localize(12125, null, L.key);
							case $.ERROR_INVALID_WORKSPACE_CONFIGURATION_MACHINE:
								return t.localize(12126, null, L.key);
							case $.ERROR_INVALID_FOLDER_CONFIGURATION:
								return t.localize(12127, null, L.key);
							case $.ERROR_INVALID_USER_TARGET:
								return t.localize(12128, null, L.key);
							case $.ERROR_INVALID_WORKSPACE_TARGET:
								return t.localize(12129, null, L.key);
							case $.ERROR_INVALID_FOLDER_TARGET:
								return t.localize(12130, null);
							case $.ERROR_INVALID_RESOURCE_LANGUAGE_CONFIGURATION:
								return t.localize(12131, null, L.key);
							case $.ERROR_NO_WORKSPACE_OPENED:
								return t.localize(12132, null, this.A(k));
							case $.ERROR_INVALID_CONFIGURATION: {
								if (L.workspaceStandAloneConfigurationKey === r.$NZ)
									return t.localize(12133, null);
								if (L.workspaceStandAloneConfigurationKey === r.$OZ)
									return t.localize(12134, null);
								switch (k) {
									case S.USER_LOCAL:
										return t.localize(12135, null);
									case S.USER_REMOTE:
										return t.localize(12136, null);
									case S.WORKSPACE:
										return t.localize(12137, null);
									case S.WORKSPACE_FOLDER: {
										let D = "<<unknown>>";
										if (L.resource) {
											const M = this.d.getWorkspaceFolder(L.resource);
											M && (D = M.name);
										}
										return t.localize(12138, null, D);
									}
									default:
										return "";
								}
							}
							case $.ERROR_CONFIGURATION_FILE_DIRTY: {
								if (L.workspaceStandAloneConfigurationKey === r.$NZ)
									return t.localize(12139, null);
								if (L.workspaceStandAloneConfigurationKey === r.$OZ)
									return t.localize(12140, null);
								switch (k) {
									case S.USER_LOCAL:
										return t.localize(12141, null);
									case S.USER_REMOTE:
										return t.localize(12142, null);
									case S.WORKSPACE:
										return t.localize(12143, null);
									case S.WORKSPACE_FOLDER: {
										let D = "<<unknown>>";
										if (L.resource) {
											const M = this.d.getWorkspaceFolder(L.resource);
											M && (D = M.name);
										}
										return t.localize(12144, null, D);
									}
									default:
										return "";
								}
							}
							case $.ERROR_CONFIGURATION_FILE_MODIFIED_SINCE:
								if (L.workspaceStandAloneConfigurationKey === r.$NZ)
									return t.localize(12145, null);
								if (L.workspaceStandAloneConfigurationKey === r.$OZ)
									return t.localize(12146, null);
								switch (k) {
									case S.USER_LOCAL:
										return t.localize(12147, null);
									case S.USER_REMOTE:
										return t.localize(12148, null);
									case S.WORKSPACE:
										return t.localize(12149, null);
									case S.WORKSPACE_FOLDER:
										return t.localize(12150, null);
								}
							case $.ERROR_INTERNAL:
								return t.localize(12151, null, this.A(k));
						}
					}
					A(P) {
						switch (P) {
							case S.USER_LOCAL:
								return t.localize(12152, null);
							case S.USER_REMOTE:
								return t.localize(12153, null);
							case S.WORKSPACE:
								return t.localize(12154, null);
							case S.WORKSPACE_FOLDER:
								return t.localize(12155, null);
							default:
								return "";
						}
					}
					B(P) {
						const k = this.m.extUri.basename(P);
						switch (k.substr(0, k.length - this.m.extUri.extname(P).length)) {
							case r.$NZ:
								return r.$SZ;
							default:
								return "{}";
						}
					}
					async C(P) {
						return (
							(await this.g.exists(P)) ||
								(await this.i.write(P, this.B(P), { encoding: "utf8" })),
							this.h.createModelReference(P)
						);
					}
					D(P, k) {
						if (k.workspaceStandAloneConfigurationKey && !k.key) return !1;
						const L = [];
						return (
							i.$do(P, L, { allowTrailingComma: !0, allowEmptyContent: !0 }),
							L.length > 0
						);
					}
					async E(P, k, L, D) {
						if (this.c.inspect(k.key).policyValue !== void 0)
							throw this.y($.ERROR_POLICY_CONFIGURATION, P, k);
						const N = C.$Io
							.as(h.$No.Configuration)
							.getConfigurationProperties()[k.key]?.scope;
						if (
							!k.workspaceStandAloneConfigurationKey &&
							this.c.keys().default.indexOf(k.key) < 0 &&
							!h.$Xo.test(k.key) &&
							k.value !== void 0
						)
							throw this.y($.ERROR_UNKNOWN_KEY, P, k);
						if (
							k.workspaceStandAloneConfigurationKey &&
							k.workspaceStandAloneConfigurationKey !== r.$NZ &&
							(P === S.USER_LOCAL || P === S.USER_REMOTE)
						)
							throw this.y($.ERROR_INVALID_USER_TARGET, P, k);
						if (
							(P === S.WORKSPACE || P === S.WORKSPACE_FOLDER) &&
							this.d.getWorkbenchState() === d.WorkbenchState.EMPTY
						)
							throw this.y($.ERROR_NO_WORKSPACE_OPENED, P, k);
						if (
							P === S.WORKSPACE &&
							!k.workspaceStandAloneConfigurationKey &&
							!h.$Xo.test(k.key)
						) {
							if (N === h.ConfigurationScope.APPLICATION)
								throw this.y(
									$.ERROR_INVALID_WORKSPACE_CONFIGURATION_APPLICATION,
									P,
									k,
								);
							if (N === h.ConfigurationScope.MACHINE)
								throw this.y(
									$.ERROR_INVALID_WORKSPACE_CONFIGURATION_MACHINE,
									P,
									k,
								);
						}
						if (P === S.WORKSPACE_FOLDER) {
							if (!k.resource)
								throw this.y($.ERROR_INVALID_FOLDER_TARGET, P, k);
							if (
								!k.workspaceStandAloneConfigurationKey &&
								!h.$Xo.test(k.key) &&
								N !== void 0 &&
								!r.$MZ.includes(N)
							)
								throw this.y($.ERROR_INVALID_FOLDER_CONFIGURATION, P, k);
						}
						if (
							D.overrideIdentifiers?.length &&
							N !== h.ConfigurationScope.LANGUAGE_OVERRIDABLE
						)
							throw this.y(
								$.ERROR_INVALID_RESOURCE_LANGUAGE_CONFIGURATION,
								P,
								k,
							);
						if (!k.resource) throw this.y($.ERROR_INVALID_FOLDER_TARGET, P, k);
						if (L && this.i.isDirty(k.resource))
							throw this.y($.ERROR_CONFIGURATION_FILE_DIRTY, P, k);
					}
					F(P, k, L) {
						if (k.key) {
							const O = P === S.USER_LOCAL ? r.$QZ : r.$PZ,
								B = Object.keys(O);
							for (const U of B) {
								const z = this.H(P, U, O[U], L.resource, void 0);
								if (k.key === U) {
									const x = this.G(z) ? [U] : [];
									return {
										key: x[x.length - 1],
										jsonPath: x,
										value: k.value,
										resource: z ?? void 0,
										workspaceStandAloneConfigurationKey: U,
										target: P,
									};
								}
								const F = `${U}.`;
								if (k.key.indexOf(F) === 0) {
									const x = this.G(z)
										? [U, k.key.substr(F.length)]
										: [k.key.substr(F.length)];
									return {
										key: x[x.length - 1],
										jsonPath: x,
										value: k.value,
										resource: z ?? void 0,
										workspaceStandAloneConfigurationKey: U,
										target: P,
									};
								}
							}
						}
						const D = k.key,
							N = C.$Io.as(h.$No.Configuration).getConfigurationProperties()[
								D
							]?.scope;
						let A = L.overrideIdentifiers?.length
							? [(0, h.$Zo)(L.overrideIdentifiers), D]
							: [D];
						if (P === S.USER_LOCAL || P === S.USER_REMOTE)
							return {
								key: D,
								jsonPath: A,
								value: k.value,
								resource: this.H(P, D, "", null, N) ?? void 0,
								target: P,
							};
						const R = this.H(P, D, r.$xZ, L.resource, N);
						return (
							this.G(R) && (A = ["settings", ...A]),
							{
								key: D,
								jsonPath: A,
								value: k.value,
								resource: R ?? void 0,
								target: P,
							}
						);
					}
					G(P) {
						const k = this.d.getWorkspace();
						return !!(
							k.configuration &&
							P &&
							k.configuration.fsPath === P.fsPath
						);
					}
					H(P, k, L, D, M) {
						if (P === S.USER_LOCAL)
							return k === r.$NZ
								? this.e.currentProfile.tasksResource
								: !this.e.currentProfile.isDefault &&
										this.c.isSettingAppliedForAllProfiles(k)
									? this.f.defaultProfile.settingsResource
									: this.e.currentProfile.settingsResource;
						if (P === S.USER_REMOTE) return this.b;
						const N = this.d.getWorkbenchState();
						if (N !== d.WorkbenchState.EMPTY) {
							const A = this.d.getWorkspace();
							if (P === S.WORKSPACE) {
								if (N === d.WorkbenchState.WORKSPACE)
									return A.configuration ?? null;
								if (N === d.WorkbenchState.FOLDER)
									return A.folders[0].toResource(L);
							}
							if (P === S.WORKSPACE_FOLDER && D) {
								const R = this.d.getWorkspaceFolder(D);
								if (R) return R.toResource(L);
							}
						}
						return null;
					}
				};
				(e.$y3c = I),
					(e.$y3c = I =
						Ne(
							[
								j(1, r.$RZ),
								j(2, d.$Vi),
								j(3, s.$P8),
								j(4, l.$Xl),
								j(5, u.$ll),
								j(6, a.$MO),
								j(7, m.$kZ),
								j(8, n.$4N),
								j(9, g.$7Z),
								j(10, c.$IY),
								j(11, p.$Vl),
							],
							I,
						));
			},
		)
