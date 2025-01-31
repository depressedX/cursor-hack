import '../../../require.js';
import '../../../exports.js';
import '../../base/common/lifecycle.js';
import '../../nls.js';
import '../../platform/contextkey/common/contextkey.js';
import '../../base/common/resources.js';
import '../../editor/common/languages/language.js';
import '../../platform/files/common/files.js';
import '../../editor/common/services/model.js';
import '../../base/common/network.js';
import './editor.js';
import '../../base/common/platform.js';
define(
			de[100],
			he([1, 0, 3, 4, 8, 19, 61, 22, 67, 23, 44, 12]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*nls*/,
 w /*contextkey*/,
 E /*resources*/,
 C /*language*/,
 d /*files*/,
 m /*model*/,
 r /*network*/,
 u /*editor*/,
 a /*platform*/) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$BQb =
						e.$zQb =
						e.$yQb =
						e.$xQb =
						e.$wQb =
						e.$vQb =
						e.$uQb =
						e.$tQb =
						e.$sQb =
						e.$rQb =
						e.$qQb =
						e.$pQb =
						e.$oQb =
						e.$nQb =
						e.$mQb =
						e.$lQb =
						e.$kQb =
						e.$jQb =
						e.$iQb =
						e.$hQb =
						e.$gQb =
						e.$fQb =
						e.$eQb =
						e.$dQb =
						e.$cQb =
						e.$bQb =
						e.$aQb =
						e.$_Pb =
						e.$$Pb =
						e.$0Pb =
						e.$9Pb =
						e.$8Pb =
						e.$7Pb =
						e.$6Pb =
						e.$5Pb =
						e.$4Pb =
						e.$3Pb =
						e.$2Pb =
						e.$1Pb =
						e.$ZPb =
						e.$YPb =
						e.$XPb =
						e.$WPb =
						e.$VPb =
						e.$UPb =
						e.$TPb =
						e.$SPb =
						e.$RPb =
						e.$QPb =
						e.$PPb =
						e.$OPb =
						e.$NPb =
						e.$MPb =
						e.$LPb =
						e.$KPb =
						e.$JPb =
						e.$IPb =
						e.$HPb =
						e.$GPb =
						e.$FPb =
						e.$EPb =
						e.$DPb =
						e.$CPb =
						e.$BPb =
						e.$APb =
						e.$zPb =
						e.$yPb =
						e.$xPb =
						e.$wPb =
							void 0),
					(e.$AQb = c),
					(e.$CQb = g),
					(e.$wPb = new w.$5j("workbenchState", void 0, {
						type: "string",
						description: (0, i.localize)(4004, null),
					})),
					(e.$xPb = new w.$5j(
						"workspaceFolderCount",
						0,
						(0, i.localize)(4005, null),
					)),
					(e.$yPb = new w.$5j("openFolderWorkspaceSupport", !0, !0)),
					(e.$zPb = new w.$5j("enterMultiRootWorkspaceSupport", !0, !0)),
					(e.$APb = new w.$5j("emptyWorkspaceSupport", !0, !0)),
					(e.$BPb = new w.$5j(
						"dirtyWorkingCopies",
						!1,
						(0, i.localize)(4006, null),
					)),
					(e.$CPb = new w.$5j("remoteName", "", (0, i.localize)(4007, null))),
					(e.$DPb = new w.$5j(
						"virtualWorkspace",
						"",
						(0, i.localize)(4008, null),
					)),
					(e.$EPb = new w.$5j(
						"temporaryWorkspace",
						!1,
						(0, i.localize)(4009, null),
					)),
					(e.$FPb = new w.$5j("isFullscreen", !1, (0, i.localize)(4010, null))),
					(e.$GPb = new w.$5j(
						"isAuxiliaryWindowFocusedContext",
						!1,
						(0, i.localize)(4011, null),
					)),
					(e.$HPb = new w.$5j("hasWebFileSystemAccess", !1, !0)),
					(e.$IPb = new w.$5j(
						"embedderIdentifier",
						void 0,
						(0, i.localize)(4012, null),
					)),
					(e.$JPb = new w.$5j(
						"activeEditorIsDirty",
						!1,
						(0, i.localize)(4013, null),
					)),
					(e.$KPb = new w.$5j(
						"activeEditorIsNotPreview",
						!1,
						(0, i.localize)(4014, null),
					)),
					(e.$LPb = new w.$5j(
						"activeEditorIsFirstInGroup",
						!1,
						(0, i.localize)(4015, null),
					)),
					(e.$MPb = new w.$5j(
						"activeEditorIsLastInGroup",
						!1,
						(0, i.localize)(4016, null),
					)),
					(e.$NPb = new w.$5j(
						"activeEditorIsPinned",
						!1,
						(0, i.localize)(4017, null),
					)),
					(e.$OPb = new w.$5j(
						"activeEditorIsReadonly",
						!1,
						(0, i.localize)(4018, null),
					)),
					(e.$PPb = new w.$5j(
						"activeCompareEditorCanSwap",
						!1,
						(0, i.localize)(4019, null),
					)),
					(e.$QPb = new w.$5j(
						"activeEditorCanToggleReadonly",
						!0,
						(0, i.localize)(4020, null),
					)),
					(e.$RPb = new w.$5j(
						"activeEditorCanRevert",
						!1,
						(0, i.localize)(4021, null),
					)),
					(e.$SPb = new w.$5j("activeEditorCanSplitInGroup", !0)),
					(e.$TPb = new w.$5j("activeEditor", null, {
						type: "string",
						description: (0, i.localize)(4022, null),
					})),
					(e.$UPb = new w.$5j(
						"activeEditorAvailableEditorIds",
						"",
						(0, i.localize)(4023, null),
					)),
					(e.$VPb = new w.$5j(
						"textCompareEditorVisible",
						!1,
						(0, i.localize)(4024, null),
					)),
					(e.$WPb = new w.$5j(
						"textCompareEditorActive",
						!1,
						(0, i.localize)(4025, null),
					)),
					(e.$XPb = new w.$5j(
						"sideBySideEditorActive",
						!1,
						(0, i.localize)(4026, null),
					)),
					(e.$YPb = new w.$5j(
						"groupEditorsCount",
						0,
						(0, i.localize)(4027, null),
					)),
					(e.$ZPb = new w.$5j(
						"activeEditorGroupEmpty",
						!1,
						(0, i.localize)(4028, null),
					)),
					(e.$1Pb = new w.$5j(
						"activeEditorGroupIndex",
						0,
						(0, i.localize)(4029, null),
					)),
					(e.$2Pb = new w.$5j(
						"activeEditorGroupLast",
						!1,
						(0, i.localize)(4030, null),
					)),
					(e.$3Pb = new w.$5j(
						"activeEditorGroupLocked",
						!1,
						(0, i.localize)(4031, null),
					)),
					(e.$4Pb = new w.$5j(
						"multipleEditorGroups",
						!1,
						(0, i.localize)(4032, null),
					)),
					(e.$5Pb = e.$4Pb.toNegated()),
					(e.$6Pb = new w.$5j(
						"multipleEditorsSelectedInGroup",
						!1,
						(0, i.localize)(4033, null),
					)),
					(e.$7Pb = new w.$5j(
						"twoEditorsSelectedInGroup",
						!1,
						(0, i.localize)(4034, null),
					)),
					(e.$8Pb = new w.$5j(
						"SelectedEditorsInGroupFileOrUntitledResourceContextKey",
						!0,
						(0, i.localize)(4035, null),
					)),
					(e.$9Pb = new w.$5j(
						"editorPartMultipleEditorGroups",
						!1,
						(0, i.localize)(4036, null),
					)),
					(e.$0Pb = e.$9Pb.toNegated()),
					(e.$$Pb = new w.$5j(
						"editorPartMaximizedEditorGroup",
						!1,
						(0, i.localize)(4037, null),
					)),
					(e.$_Pb = new w.$5j(
						"isAuxiliaryEditorPart",
						!1,
						(0, i.localize)(4038, null),
					)),
					(e.$aQb = new w.$5j("editorIsOpen", !1, (0, i.localize)(4039, null))),
					(e.$bQb = new w.$5j("inZenMode", !1, (0, i.localize)(4040, null))),
					(e.$cQb = new w.$5j(
						"isCenteredLayout",
						!1,
						(0, i.localize)(4041, null),
					)),
					(e.$dQb = new w.$5j(
						"splitEditorsVertically",
						!1,
						(0, i.localize)(4042, null),
					)),
					(e.$eQb = new w.$5j(
						"mainEditorAreaVisible",
						!0,
						(0, i.localize)(4043, null),
					)),
					(e.$fQb = new w.$5j(
						"editorTabsVisible",
						!0,
						(0, i.localize)(4044, null),
					)),
					(e.$gQb = new w.$5j(
						"sideBarVisible",
						!1,
						(0, i.localize)(4045, null),
					)),
					(e.$hQb = new w.$5j("sideBarFocus", !1, (0, i.localize)(4046, null))),
					(e.$iQb = new w.$5j(
						"activeViewlet",
						"",
						(0, i.localize)(4047, null),
					)),
					(e.$jQb = new w.$5j(
						"statusBarFocused",
						!1,
						(0, i.localize)(4048, null),
					)),
					(e.$kQb = new w.$5j(
						"titleBarStyle",
						a.$n ? "native" : "custom",
						(0, i.localize)(4049, null),
					)),
					(e.$lQb = new w.$5j(
						"titleBarVisible",
						!1,
						(0, i.localize)(4050, null),
					)),
					(e.$mQb = new w.$5j(
						"bannerFocused",
						!1,
						(0, i.localize)(4051, null),
					)),
					(e.$nQb = new w.$5j(
						"notificationFocus",
						!0,
						(0, i.localize)(4052, null),
					)),
					(e.$oQb = new w.$5j(
						"notificationCenterVisible",
						!1,
						(0, i.localize)(4053, null),
					)),
					(e.$pQb = new w.$5j(
						"notificationToastsVisible",
						!1,
						(0, i.localize)(4054, null),
					)),
					(e.$qQb = new w.$5j(
						"activeAuxiliary",
						"",
						(0, i.localize)(4055, null),
					)),
					(e.$rQb = new w.$5j(
						"auxiliaryBarFocus",
						!1,
						(0, i.localize)(4056, null),
					)),
					(e.$sQb = new w.$5j(
						"auxiliaryBarVisible",
						!1,
						(0, i.localize)(4057, null),
					)),
					(e.$tQb = new w.$5j("activePanel", "", (0, i.localize)(4058, null))),
					(e.$uQb = new w.$5j("panelFocus", !1, (0, i.localize)(4059, null))),
					(e.$vQb = new w.$5j(
						"panelPosition",
						"bottom",
						(0, i.localize)(4060, null),
					)),
					(e.$wQb = new w.$5j(
						"panelAlignment",
						"center",
						(0, i.localize)(4061, null),
					)),
					(e.$xQb = new w.$5j("panelVisible", !1, (0, i.localize)(4062, null))),
					(e.$yQb = new w.$5j(
						"panelMaximized",
						!1,
						(0, i.localize)(4063, null),
					)),
					(e.$zQb = new w.$5j("focusedView", "", (0, i.localize)(4064, null)));
				function c(p) {
					return `view.${p}.visible`;
				}
				let n = class {
					static {
						h = this;
					}
					static {
						this.Scheme = new w.$5j("resourceScheme", void 0, {
							type: "string",
							description: (0, i.localize)(4065, null),
						});
					}
					static {
						this.Filename = new w.$5j("resourceFilename", void 0, {
							type: "string",
							description: (0, i.localize)(4066, null),
						});
					}
					static {
						this.Dirname = new w.$5j("resourceDirname", void 0, {
							type: "string",
							description: (0, i.localize)(4067, null),
						});
					}
					static {
						this.Path = new w.$5j("resourcePath", void 0, {
							type: "string",
							description: (0, i.localize)(4068, null),
						});
					}
					static {
						this.LangId = new w.$5j("resourceLangId", void 0, {
							type: "string",
							description: (0, i.localize)(4069, null),
						});
					}
					static {
						this.Resource = new w.$5j("resource", void 0, {
							type: "URI",
							description: (0, i.localize)(4070, null),
						});
					}
					static {
						this.Extension = new w.$5j("resourceExtname", void 0, {
							type: "string",
							description: (0, i.localize)(4071, null),
						});
					}
					static {
						this.HasResource = new w.$5j("resourceSet", void 0, {
							type: "boolean",
							description: (0, i.localize)(4072, null),
						});
					}
					static {
						this.IsFileSystemResource = new w.$5j(
							"isFileSystemResource",
							void 0,
							{ type: "boolean", description: (0, i.localize)(4073, null) },
						);
					}
					constructor(o, f, b, s) {
						(this.m = o),
							(this.n = f),
							(this.o = b),
							(this.p = s),
							(this.a = new t.$Zc()),
							(this.d = h.Scheme.bindTo(this.m)),
							(this.f = h.Filename.bindTo(this.m)),
							(this.g = h.Dirname.bindTo(this.m)),
							(this.h = h.Path.bindTo(this.m)),
							(this.i = h.LangId.bindTo(this.m)),
							(this.c = h.Resource.bindTo(this.m)),
							(this.j = h.Extension.bindTo(this.m)),
							(this.k = h.HasResource.bindTo(this.m)),
							(this.l = h.IsFileSystemResource.bindTo(this.m)),
							this.a.add(
								f.onDidChangeFileSystemProviderRegistrations(() => {
									const l = this.get();
									this.l.set(!!(l && f.hasProvider(l)));
								}),
							),
							this.a.add(
								s.onModelAdded((l) => {
									(0, E.$gh)(l.uri, this.get()) && this.q();
								}),
							),
							this.a.add(
								s.onModelLanguageChanged((l) => {
									(0, E.$gh)(l.model.uri, this.get()) && this.q();
								}),
							);
					}
					dispose() {
						this.a.dispose();
					}
					q() {
						const o = this.get();
						if (!o) {
							this.i.set(null);
							return;
						}
						const f =
							this.p.getModel(o)?.getLanguageId() ??
							this.o.guessLanguageIdByFilepathOrFirstLine(o);
						this.i.set(f);
					}
					set(o) {
						(o = o ?? void 0),
							!(0, E.$gh)(this.b, o) &&
								((this.b = o),
								this.m.bufferChangeEvents(() => {
									this.c.set(o ? o.toString() : null),
										this.d.set(o ? o.scheme : null),
										this.f.set(o ? (0, E.$kh)(o) : null),
										this.g.set(o ? this.r((0, E.$mh)(o)) : null),
										this.h.set(o ? this.r(o) : null),
										this.q(),
										this.j.set(o ? (0, E.$lh)(o) : null),
										this.k.set(!!o),
										this.l.set(o ? this.n.hasProvider(o) : !1);
								}));
					}
					r(o) {
						return o.scheme === r.Schemas.file ? o.fsPath : o.path;
					}
					reset() {
						(this.b = void 0),
							this.m.bufferChangeEvents(() => {
								this.c.reset(),
									this.d.reset(),
									this.f.reset(),
									this.g.reset(),
									this.h.reset(),
									this.i.reset(),
									this.j.reset(),
									this.k.reset(),
									this.l.reset();
							});
					}
					get() {
						return this.b;
					}
				};
				(e.$BQb = n),
					(e.$BQb =
						n =
						h =
							Ne([j(0, w.$6j), j(1, d.$ll), j(2, C.$nM), j(3, m.$QO)], n));
				function g(p, o, f) {
					if (!o) {
						p.set("");
						return;
					}
					const b = o.resource;
					if (b?.scheme === r.Schemas.untitled && o.editorId !== u.$b1.id)
						p.set("");
					else {
						const s = b ? f.getEditors(b).map((l) => l.id) : [];
						p.set(s.join(","));
					}
				}
			},
		)
