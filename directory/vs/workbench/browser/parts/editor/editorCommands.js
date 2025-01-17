import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/network.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../nls.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/telemetry/common/telemetry.js';
import './editorQuickAccess.js';
import './sideBySideEditor.js';
import './textDiffEditor.js';
import '../../../common/contextkeys.js';
import '../../../common/editor.js';
import '../../../common/editor/diffEditorInput.js';
import '../../../common/editor/sideBySideEditorInput.js';
import '../../../services/editor/common/editorGroupColumn.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorResolverService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/path/common/pathService.js';
import '../../../services/untitled/common/untitledTextEditorService.js';
import './diffEditorCommands.js';
import './editorCommandsContext.js';
define(
			de[247],
			he([
				1, 0, 27, 23, 19, 28, 9, 56, 71, 4, 99, 11, 31, 10, 8, 116, 5, 43, 93,
				41, 63, 32, 1015, 825, 1338, 100, 44, 296, 313, 446, 66, 231, 18, 165,
				631, 1916, 1014,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CWb =
						e.$BWb =
						e.$AWb =
						e.$zWb =
						e.$yWb =
						e.$xWb =
						e.$wWb =
						e.$vWb =
						e.$uWb =
						e.$tWb =
						e.$sWb =
						e.$rWb =
						e.$qWb =
						e.$pWb =
						e.$oWb =
						e.$nWb =
						e.$mWb =
						e.$lWb =
						e.$kWb =
						e.$jWb =
						e.$iWb =
						e.$hWb =
						e.$gWb =
						e.$fWb =
						e.$eWb =
						e.$dWb =
						e.$cWb =
						e.$bWb =
						e.$aWb =
						e.$_Vb =
						e.$$Vb =
						e.$0Vb =
						e.$9Vb =
						e.$8Vb =
						e.$7Vb =
						e.$6Vb =
						e.$5Vb =
						e.$4Vb =
						e.$3Vb =
						e.$2Vb =
						e.$1Vb =
						e.$ZVb =
						e.$YVb =
						e.$XVb =
						e.$WVb =
						e.$VVb =
						e.$UVb =
							void 0),
					(e.$DWb = q),
					(e.$EWb = Y),
					(e.$UVb = "workbench.action.closeUnmodifiedEditors"),
					(e.$VVb = "workbench.action.closeEditorsInGroup"),
					(e.$WVb = "workbench.action.closeEditorsAndGroup"),
					(e.$XVb = "workbench.action.closeEditorsToTheRight"),
					(e.$YVb = "workbench.action.closeActiveEditor"),
					(e.$ZVb = "workbench.action.closeActivePinnedEditor"),
					(e.$1Vb = "workbench.action.closeGroup"),
					(e.$2Vb = "workbench.action.closeOtherEditors"),
					(e.$3Vb = "moveActiveEditor"),
					(e.$4Vb = "copyActiveEditor"),
					(e.$5Vb = "layoutEditorGroups"),
					(e.$6Vb = "workbench.action.keepEditor"),
					(e.$7Vb = "workbench.action.toggleKeepEditors"),
					(e.$8Vb = "workbench.action.toggleEditorGroupLock"),
					(e.$9Vb = "workbench.action.lockEditorGroup"),
					(e.$0Vb = "workbench.action.unlockEditorGroup"),
					(e.$$Vb = "workbench.action.showEditorsInGroup"),
					(e.$_Vb = "workbench.action.reopenWithEditor"),
					(e.$aWb = "workbench.action.pinEditor"),
					(e.$bWb = "workbench.action.unpinEditor"),
					(e.$cWb = "workbench.action.splitEditor"),
					(e.$dWb = "workbench.action.splitEditorUp"),
					(e.$eWb = "workbench.action.splitEditorDown"),
					(e.$fWb = "workbench.action.splitEditorLeft"),
					(e.$gWb = "workbench.action.splitEditorRight"),
					(e.$hWb = "workbench.action.toggleMaximizeEditorGroup"),
					(e.$iWb = "workbench.action.splitEditorInGroup"),
					(e.$jWb = "workbench.action.toggleSplitEditorInGroup"),
					(e.$kWb = "workbench.action.joinEditorInGroup"),
					(e.$lWb = "workbench.action.toggleSplitEditorInGroupLayout"),
					(e.$mWb = "workbench.action.focusFirstSideEditor"),
					(e.$nWb = "workbench.action.focusSecondSideEditor"),
					(e.$oWb = "workbench.action.focusOtherSideEditor"),
					(e.$pWb = "workbench.action.focusLeftGroupWithoutWrap"),
					(e.$qWb = "workbench.action.focusRightGroupWithoutWrap"),
					(e.$rWb = "workbench.action.focusAboveGroupWithoutWrap"),
					(e.$sWb = "workbench.action.focusBelowGroupWithoutWrap"),
					(e.$tWb = "workbench.action.openEditorAtIndex"),
					(e.$uWb = "workbench.action.moveEditorToNewWindow"),
					(e.$vWb = "workbench.action.copyEditorToNewWindow"),
					(e.$wWb = "workbench.action.moveEditorGroupToNewWindow"),
					(e.$xWb = "workbench.action.copyEditorGroupToNewWindow"),
					(e.$yWb = "workbench.action.newEmptyEditorWindow"),
					(e.$zWb = "_workbench.open"),
					(e.$AWb = "_workbench.diff"),
					(e.$BWb = "_workbench.openWith"),
					(e.$CWb = [e.$cWb, e.$YVb, e.$bWb, e.$0Vb, e.$hWb]);
				const B = function (ie) {
					return !(
						!(0, E.$ng)(ie) ||
						!(0, E.$lg)(ie.to) ||
						(!(0, E.$sg)(ie.by) && !(0, E.$lg)(ie.by)) ||
						(!(0, E.$sg)(ie.value) && !(0, E.$pg)(ie.value))
					);
				};
				function U() {
					const ie = {
						type: "object",
						required: ["to"],
						properties: {
							to: { type: "string", enum: ["left", "right"] },
							by: { type: "string", enum: ["tab", "group"] },
							value: { type: "number" },
						},
					};
					o.$TX.registerCommandAndKeybindingRule({
						id: e.$3Vb,
						weight: o.KeybindingWeight.WorkbenchContrib,
						when: m.EditorContextKeys.editorTextFocus,
						primary: 0,
						handler: (te, Q) => ne(!0, Q, te),
						metadata: {
							description: (0, r.localize)(3416, null),
							args: [
								{
									name: (0, r.localize)(3417, null),
									description: (0, r.localize)(3418, null),
									constraint: B,
									schema: ie,
								},
							],
						},
					}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$4Vb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: m.EditorContextKeys.editorTextFocus,
							primary: 0,
							handler: (te, Q) => ne(!1, Q, te),
							metadata: {
								description: (0, r.localize)(3419, null),
								args: [
									{
										name: (0, r.localize)(3420, null),
										description: (0, r.localize)(3421, null),
										constraint: B,
										schema: ie,
									},
								],
							},
						});
					function ne(te, Q = Object.create(null), Z) {
						(Q.to = Q.to || "right"),
							(Q.by = Q.by || "tab"),
							(Q.value = typeof Q.value == "number" ? Q.value : 1);
						const se = Z.get(M.$IY).activeEditorPane;
						if (se)
							switch (Q.by) {
								case "tab":
									if (te) return ee(Q, se);
									break;
								case "group":
									return _(te, Q, se, Z);
							}
					}
					function ee(te, Q) {
						const Z = Q.group;
						let se = Z.getIndexOfEditor(Q.input);
						switch (te.to) {
							case "first":
								se = 0;
								break;
							case "last":
								se = Z.count - 1;
								break;
							case "left":
								se = se - (te.value ?? 1);
								break;
							case "right":
								se = se + (te.value ?? 1);
								break;
							case "center":
								se = Math.round(Z.count / 2) - 1;
								break;
							case "position":
								se = (te.value ?? 1) - 1;
								break;
						}
						(se = se < 0 ? 0 : se >= Z.count ? Z.count - 1 : se),
							Z.moveEditor(Q.input, Z, { index: se });
					}
					function _(te, Q, Z, se) {
						const re = se.get(L.$EY),
							le = se.get(c.$gj),
							oe = Z.group;
						let ae;
						switch (Q.to) {
							case "left":
								(ae = re.findGroup({ direction: L.GroupDirection.LEFT }, oe)),
									ae || (ae = re.addGroup(oe, L.GroupDirection.LEFT));
								break;
							case "right":
								(ae = re.findGroup({ direction: L.GroupDirection.RIGHT }, oe)),
									ae || (ae = re.addGroup(oe, L.GroupDirection.RIGHT));
								break;
							case "up":
								(ae = re.findGroup({ direction: L.GroupDirection.UP }, oe)),
									ae || (ae = re.addGroup(oe, L.GroupDirection.UP));
								break;
							case "down":
								(ae = re.findGroup({ direction: L.GroupDirection.DOWN }, oe)),
									ae || (ae = re.addGroup(oe, L.GroupDirection.DOWN));
								break;
							case "first":
								ae = re.findGroup({ location: L.GroupLocation.FIRST }, oe);
								break;
							case "last":
								ae = re.findGroup({ location: L.GroupLocation.LAST }, oe);
								break;
							case "previous":
								ae = re.findGroup({ location: L.GroupLocation.PREVIOUS }, oe);
								break;
							case "next":
								(ae = re.findGroup({ location: L.GroupLocation.NEXT }, oe)),
									ae || (ae = re.addGroup(oe, (0, L.$HY)(le)));
								break;
							case "center":
								ae = re.getGroups(L.GroupsOrder.GRID_APPEARANCE)[
									re.count / 2 - 1
								];
								break;
							case "position":
								ae = re.getGroups(L.GroupsOrder.GRID_APPEARANCE)[
									(Q.value ?? 1) - 1
								];
								break;
						}
						ae &&
							(te
								? oe.moveEditor(Z.input, ae)
								: oe.id !== ae.id && oe.copyEditor(Z.input, ae),
							ae.focus());
					}
				}
				function z() {
					function ie(ne, ee) {
						if (!ee || typeof ee != "object") return;
						ne.get(L.$EY).applyLayout(ee);
					}
					h.$fk.registerCommand(e.$5Vb, (ne, ee) => {
						ie(ne, ee);
					}),
						h.$fk.registerCommand({
							id: "vscode.setEditorLayout",
							handler: (ne, ee) => ie(ne, ee),
							metadata: {
								description: "Set Editor Layout",
								args: [
									{
										name: "args",
										schema: {
											type: "object",
											required: ["groups"],
											properties: {
												orientation: {
													type: "number",
													default: 0,
													enum: [0, 1],
												},
												groups: {
													$ref: "#/definitions/editorGroupsSchema",
													default: [{}, {}],
												},
											},
										},
									},
								],
							},
						}),
						h.$fk.registerCommand({
							id: "vscode.getEditorLayout",
							handler: (ne) => ne.get(L.$EY).getLayout(),
							metadata: {
								description: "Get Editor Layout",
								args: [],
								returns:
									"An editor layout object, in the same format as vscode.setEditorLayout",
							},
						});
				}
				function F() {
					function ie(ne, ee, _) {
						return ne
							? [
									{ ...ne.editorOptions, ...(ee ?? Object.create(null)) },
									ne.sideBySide ? M.$KY : _,
								]
							: [ee, _];
					}
					h.$fk.registerCommand({
						id: "vscode.open",
						handler: (ne, ee) => {
							ne.get(h.$ek).executeCommand(e.$zWb, ee);
						},
						metadata: {
							description: "Opens the provided resource in the editor.",
							args: [{ name: "Uri" }],
						},
					}),
						h.$fk.registerCommand(e.$zWb, async function (ne, ee, _, te, Q) {
							const Z = ne.get(M.$IY),
								se = ne.get(L.$EY),
								re = ne.get(b.$7rb),
								le = ne.get(N.$I8),
								oe = ne.get(c.$gj),
								ae = ne.get(A.$7Y),
								pe = typeof ee == "string" ? ee : C.URI.from(ee, !0),
								[$e, ye] = _ ?? [];
							if (
								ye ||
								typeof $e == "number" ||
								(0, i.$Vg)(pe, i.Schemas.untitled)
							) {
								const [ue, fe] = ie(Q, ye, $e),
									me = C.URI.isUri(pe) ? pe : C.URI.parse(pe);
								let ve;
								ae.isUntitledWithAssociatedResource(me)
									? (ve = {
											resource: me.with({ scheme: le.defaultUriScheme }),
											forceUntitled: !0,
											options: ue,
											label: te,
										})
									: (ve = { resource: me, options: ue, label: te }),
									await Z.openEditor(ve, (0, k.$a8)(se, oe, fe));
							} else {
								if ((0, i.$Vg)(pe, i.Schemas.command)) return;
								await re.open(pe, {
									openToSide: Q?.sideBySide,
									editorOptions: Q?.editorOptions,
								});
							}
						}),
						h.$fk.registerCommand({
							id: "vscode.diff",
							handler: (ne, ee, _, te) => {
								ne.get(h.$ek).executeCommand(e.$AWb, ee, _, te);
							},
							metadata: {
								description:
									"Opens the provided resources in the diff editor to compare their contents.",
								args: [
									{
										name: "left",
										description: "Left-hand side resource of the diff editor",
									},
									{
										name: "right",
										description: "Right-hand side resource of the diff editor",
									},
									{
										name: "title",
										description: "Human readable title for the diff editor",
									},
								],
							},
						}),
						h.$fk.registerCommand(e.$AWb, async function (ne, ee, _, te, Q, Z) {
							const se = ne.get(M.$IY),
								re = ne.get(L.$EY),
								le = ne.get(c.$gj),
								[oe, ae] = Q ?? [],
								[pe, $e] = ie(Z, ae, oe);
							let ye, ue;
							typeof te == "string"
								? (ye = te)
								: te && ((ye = te.label), (ue = te.description)),
								await se.openEditor(
									{
										original: { resource: C.URI.from(ee, !0) },
										modified: { resource: C.URI.from(_, !0) },
										label: ye,
										description: ue,
										options: pe,
									},
									(0, k.$a8)(re, le, $e),
								);
						}),
						h.$fk.registerCommand(e.$BWb, async (ne, ee, _, te) => {
							const Q = ne.get(M.$IY),
								Z = ne.get(L.$EY),
								se = ne.get(c.$gj),
								[re, le] = te ?? [];
							await Q.openEditor(
								{
									resource: C.URI.from(ee, !0),
									options: { ...le, pinned: !0, override: _ },
								},
								(0, k.$a8)(Z, se, re),
							);
						}),
						h.$fk.registerCommand({
							id: "vscode.changes",
							handler: (ne, ee, _) => {
								ne.get(h.$ek).executeCommand("_workbench.changes", ee, _);
							},
							metadata: {
								description:
									"Opens a list of resources in the changes editor to compare their contents.",
								args: [
									{
										name: "title",
										description: "Human readable title for the diff editor",
									},
									{
										name: "resources",
										description:
											"List of resources to open in the changes editor",
									},
								],
							},
						}),
						h.$fk.registerCommand("_workbench.changes", async (ne, ee, _) => {
							const te = ne.get(M.$IY),
								Q = [];
							for (const [Z, se, re] of _)
								Q.push({
									resource: C.URI.revive(Z),
									original: { resource: C.URI.revive(se) },
									modified: { resource: C.URI.revive(re) },
								});
							await te.openEditor({ resources: Q, label: ee });
						}),
						h.$fk.registerCommand(
							"_workbench.openMultiDiffEditor",
							async (ne, ee) => {
								await ne
									.get(M.$IY)
									.openEditor({
										multiDiffSource: ee.multiDiffSourceUri
											? C.URI.revive(ee.multiDiffSourceUri)
											: void 0,
										resources: ee.resources?.map((te) => ({
											original: { resource: C.URI.revive(te.originalUri) },
											modified: { resource: C.URI.revive(te.modifiedUri) },
										})),
										label: ee.title,
									});
							},
						);
				}
				function x() {
					const ie = (ee, _) => {
						const te = ee.get(M.$IY),
							Q = te.activeEditorPane;
						if (Q) {
							const Z = Q.group.getEditorByIndex(_);
							Z && te.openEditor(Z);
						}
					};
					h.$fk.registerCommand({ id: e.$tWb, handler: ie });
					for (let ee = 0; ee < 9; ee++) {
						const _ = ee,
							te = ee + 1;
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$tWb + te,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: t.KeyMod.Alt | ne(te),
							mac: { primary: t.KeyMod.WinCtrl | ne(te) },
							handler: (Q) => ie(Q, _),
						});
					}
					function ne(ee) {
						switch (ee) {
							case 0:
								return t.KeyCode.Digit0;
							case 1:
								return t.KeyCode.Digit1;
							case 2:
								return t.KeyCode.Digit2;
							case 3:
								return t.KeyCode.Digit3;
							case 4:
								return t.KeyCode.Digit4;
							case 5:
								return t.KeyCode.Digit5;
							case 6:
								return t.KeyCode.Digit6;
							case 7:
								return t.KeyCode.Digit7;
							case 8:
								return t.KeyCode.Digit8;
							case 9:
								return t.KeyCode.Digit9;
						}
						throw new Error("invalid index");
					}
				}
				function H() {
					for (let ee = 1; ee < 8; ee++)
						o.$TX.registerCommandAndKeybindingRule({
							id: ie(ee),
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: t.KeyMod.CtrlCmd | ne(ee),
							handler: (_) => {
								const te = _.get(L.$EY),
									Q = _.get(c.$gj);
								if (ee > te.count) return;
								const Z = te.getGroups(L.GroupsOrder.GRID_APPEARANCE);
								if (Z[ee]) return Z[ee].focus();
								const se = (0, L.$HY)(Q),
									re = te.findGroup({ location: L.GroupLocation.LAST });
								if (!re) return;
								te.addGroup(re, se).focus();
							},
						});
					function ie(ee) {
						switch (ee) {
							case 1:
								return "workbench.action.focusSecondEditorGroup";
							case 2:
								return "workbench.action.focusThirdEditorGroup";
							case 3:
								return "workbench.action.focusFourthEditorGroup";
							case 4:
								return "workbench.action.focusFifthEditorGroup";
							case 5:
								return "workbench.action.focusSixthEditorGroup";
							case 6:
								return "workbench.action.focusSeventhEditorGroup";
							case 7:
								return "workbench.action.focusEighthEditorGroup";
						}
						throw new Error("Invalid index");
					}
					function ne(ee) {
						switch (ee) {
							case 1:
								return t.KeyCode.Digit2;
							case 2:
								return t.KeyCode.Digit3;
							case 3:
								return t.KeyCode.Digit4;
							case 4:
								return t.KeyCode.Digit5;
							case 5:
								return t.KeyCode.Digit6;
							case 6:
								return t.KeyCode.Digit7;
							case 7:
								return t.KeyCode.Digit8;
						}
						throw new Error("Invalid index");
					}
				}
				function q(ie, ne, ee) {
					if (!ee.groupedEditors.length) return;
					const { group: _, editors: te } = ee.groupedEditors[0],
						Q = ee.preserveFocus,
						Z = ie.addGroup(_, ne);
					for (const se of te)
						se &&
							!se.hasCapability(I.EditorInputCapabilities.Singleton) &&
							_.copyEditor(se, Z, { preserveFocus: Q });
					Z.focus();
				}
				function V() {
					[
						{ id: e.$dWb, direction: L.GroupDirection.UP },
						{ id: e.$eWb, direction: L.GroupDirection.DOWN },
						{ id: e.$fWb, direction: L.GroupDirection.LEFT },
						{ id: e.$gWb, direction: L.GroupDirection.RIGHT },
					].forEach(({ id: ie, direction: ne }) => {
						h.$fk.registerCommand(ie, function (ee, ..._) {
							const te = (0, O.$TVb)(
								_,
								ee.get(M.$IY),
								ee.get(L.$EY),
								ee.get(f.$fMb),
							);
							q(ee.get(L.$EY), ne, te);
						});
					});
				}
				function G() {
					function ie(ne, ee, ..._) {
						const te = ne.get(L.$EY),
							Q = ne.get(M.$IY);
						let Z;
						if (
							(ee || _.length
								? (Z = !1)
								: (Z =
										te.partOptions.preventPinnedEditorClose === "keyboard" ||
										te.partOptions.preventPinnedEditorClose ===
											"keyboardAndMouse"),
							Z)
						) {
							const le = te.activeGroup,
								oe = le.activeEditor;
							if (oe && le.isSticky(oe)) {
								const ae = le.getEditors(I.EditorsOrder.MOST_RECENTLY_ACTIVE, {
									excludeSticky: !0,
								})[0];
								if (ae) return le.openEditor(ae);
								const pe = Q.getEditors(I.EditorsOrder.MOST_RECENTLY_ACTIVE, {
									excludeSticky: !0,
								})[0];
								if (pe)
									return Promise.resolve(
										te.getGroup(pe.groupId)?.openEditor(pe.editor),
									);
							}
						}
						const se = (0, O.$TVb)(
								_,
								ne.get(M.$IY),
								ne.get(L.$EY),
								ne.get(f.$fMb),
							),
							re = se.preserveFocus;
						return Promise.all(
							se.groupedEditors.map(async ({ group: le, editors: oe }) => {
								const ae = oe.filter((pe) => !Z || !le.isSticky(pe));
								await le.closeEditors(ae, { preserveFocus: re });
							}),
						);
					}
					o.$TX.registerCommandAndKeybindingRule({
						id: e.$YVb,
						weight: o.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyW,
						win: {
							primary: t.KeyMod.CtrlCmd | t.KeyCode.F4,
							secondary: [t.KeyMod.CtrlCmd | t.KeyCode.KeyW],
						},
						handler: (ne, ...ee) => ie(ne, !1, ...ee),
					}),
						h.$fk.registerCommand(e.$ZVb, (ne, ...ee) => ie(ne, !0, ...ee)),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$VVb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: (0, t.$os)(t.$ps, t.KeyCode.KeyW),
							mac: { primary: (0, t.$os)(t.$qs, t.KeyCode.KeyW) },
							handler: (ne, ...ee) => {
								const _ = (0, O.$TVb)(
									ee,
									ne.get(M.$IY),
									ne.get(L.$EY),
									ne.get(f.$fMb),
								);
								return Promise.all(
									_.groupedEditors.map(async ({ group: te }) => {
										await te.closeAllEditors({ excludeSticky: !0 });
									}),
								);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$1Vb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: n.$Kj.and(S.$ZPb, S.$4Pb),
							primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyW,
							win: {
								primary: t.KeyMod.CtrlCmd | t.KeyCode.F4,
								secondary: [t.KeyMod.CtrlCmd | t.KeyCode.KeyW],
							},
							handler: (ne, ...ee) => {
								const _ = ne.get(L.$EY),
									te = (0, O.$TVb)(ee, ne.get(M.$IY), _, ne.get(f.$fMb));
								te.groupedEditors.length &&
									_.removeGroup(te.groupedEditors[0].group);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$UVb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: (0, t.$os)(t.$ps, t.KeyCode.KeyU),
							mac: { primary: (0, t.$os)(t.$qs, t.KeyCode.KeyU) },
							handler: (ne, ...ee) => {
								const _ = (0, O.$TVb)(
									ee,
									ne.get(M.$IY),
									ne.get(L.$EY),
									ne.get(f.$fMb),
								);
								return Promise.all(
									_.groupedEditors.map(async ({ group: te }) => {
										await te.closeEditors(
											{ savedOnly: !0, excludeSticky: !0 },
											{ preserveFocus: _.preserveFocus },
										);
									}),
								);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$2Vb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							mac: {
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyT,
							},
							handler: (ne, ...ee) => {
								const _ = (0, O.$TVb)(
									ee,
									ne.get(M.$IY),
									ne.get(L.$EY),
									ne.get(f.$fMb),
								);
								return Promise.all(
									_.groupedEditors.map(async ({ group: te, editors: Q }) => {
										const Z = te
											.getEditors(I.EditorsOrder.SEQUENTIAL, {
												excludeSticky: !0,
											})
											.filter((se) => !Q.includes(se));
										for (const se of Q) se && te.pinEditor(se);
										await te.closeEditors(Z, {
											preserveFocus: _.preserveFocus,
										});
									}),
								);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$XVb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: async (ne, ...ee) => {
								const _ = (0, O.$TVb)(
									ee,
									ne.get(M.$IY),
									ne.get(L.$EY),
									ne.get(f.$fMb),
								);
								if (_.groupedEditors.length) {
									const { group: te, editors: Q } = _.groupedEditors[0];
									te.activeEditor && te.pinEditor(te.activeEditor),
										await te.closeEditors(
											{
												direction: I.CloseDirection.RIGHT,
												except: Q[0],
												excludeSticky: !0,
											},
											{ preserveFocus: _.preserveFocus },
										);
								}
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$_Vb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: async (ne, ...ee) => {
								const _ = ne.get(M.$IY),
									te = ne.get(D.$E6),
									Q = ne.get(l.$km),
									Z = (0, O.$TVb)(ee, _, ne.get(L.$EY), ne.get(f.$fMb)),
									se = new Map();
								for (const { group: re, editors: le } of Z.groupedEditors)
									for (const oe of le) {
										const ae = oe.toUntyped();
										if (!ae) return;
										ae.options = {
											..._.activeEditorPane?.options,
											override: g.EditorResolution.PICK,
										};
										const pe = await te.resolveEditor(ae, re);
										if (!(0, I.$w1)(pe)) return;
										let $e = se.get(re);
										$e || (($e = []), se.set(re, $e)),
											$e.push({
												editor: oe,
												replacement: pe.editor,
												forceReplaceDirty:
													oe.resource?.scheme === i.Schemas.untitled,
												options: pe.options,
											}),
											Q.publicLog2("workbenchEditorReopen", {
												scheme: oe.resource?.scheme ?? "",
												ext: oe.resource ? (0, w.$lh)(oe.resource) : "",
												from: oe.editorId ?? "",
												to: pe.editor.editorId ?? "",
											});
									}
								for (const [re, le] of se)
									await re.replaceEditors(le),
										await re.openEditor(le[0].replacement);
							},
						}),
						h.$fk.registerCommand(e.$WVb, async (ne, ...ee) => {
							const _ = ne.get(L.$EY),
								te = (0, O.$TVb)(ee, ne.get(M.$IY), _, ne.get(f.$fMb));
							if (te.groupedEditors.length) {
								const { group: Q } = te.groupedEditors[0];
								await Q.closeAllEditors(),
									Q.count === 0 && _.getGroup(Q.id) && _.removeGroup(Q);
							}
						});
				}
				function K() {
					const ie = [
						{ id: e.$pWb, direction: L.GroupDirection.LEFT },
						{ id: e.$qWb, direction: L.GroupDirection.RIGHT },
						{ id: e.$rWb, direction: L.GroupDirection.UP },
						{ id: e.$sWb, direction: L.GroupDirection.DOWN },
					];
					for (const ne of ie)
						h.$fk.registerCommand(ne.id, async (ee) => {
							const _ = ee.get(L.$EY);
							_.findGroup(
								{ direction: ne.direction },
								_.activeGroup,
								!1,
							)?.focus();
						});
				}
				function J() {
					async function ie(ee, _) {
						const te = ee.get(p.$Li);
						if (!_.groupedEditors.length) return;
						const { group: Q, editors: Z } = _.groupedEditors[0],
							se = Z[0];
						se &&
							(await Q.replaceEditors([
								{
									editor: se,
									replacement: te.createInstance(P.$iY, void 0, void 0, se, se),
									forceReplaceDirty: !0,
								},
							]));
					}
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: e.$iWb,
									title: (0, r.localize2)(3422, "Split Editor in Group"),
									category: u.$ck.View,
									precondition: S.$SPb,
									f1: !0,
									keybinding: {
										weight: o.KeybindingWeight.WorkbenchContrib,
										when: S.$SPb,
										primary: (0, t.$os)(
											t.$ps,
											t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backslash,
										),
										mac: {
											primary: (0, t.$os)(
												t.$qs,
												t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backslash,
											),
										},
									},
								});
							}
							run(ee, ..._) {
								return ie(
									ee,
									(0, O.$TVb)(_, ee.get(M.$IY), ee.get(L.$EY), ee.get(f.$fMb)),
								);
							}
						},
					);
					async function ne(ee) {
						if (!ee.groupedEditors.length) return;
						const { group: _, editors: te } = ee.groupedEditors[0],
							Q = te[0];
						if (!Q || !(Q instanceof P.$iY)) return;
						let Z;
						const se = _.activeEditorPane;
						if (se instanceof $.$AVb && _.activeEditor === Q) {
							for (const re of [
								se.getPrimaryEditorPane(),
								se.getSecondaryEditorPane(),
							])
								if (re?.hasFocus()) {
									Z = { viewState: re.getViewState() };
									break;
								}
						}
						await _.replaceEditors([
							{ editor: Q, replacement: Q.primary, options: Z },
						]);
					}
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: e.$kWb,
									title: (0, r.localize2)(3423, "Join Editor in Group"),
									category: u.$ck.View,
									precondition: S.$XPb,
									f1: !0,
									keybinding: {
										weight: o.KeybindingWeight.WorkbenchContrib,
										when: S.$XPb,
										primary: (0, t.$os)(
											t.$ps,
											t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backslash,
										),
										mac: {
											primary: (0, t.$os)(
												t.$qs,
												t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backslash,
											),
										},
									},
								});
							}
							run(ee, ..._) {
								return ne(
									(0, O.$TVb)(_, ee.get(M.$IY), ee.get(L.$EY), ee.get(f.$fMb)),
								);
							}
						},
					),
						(0, a.$4X)(
							class extends a.$3X {
								constructor() {
									super({
										id: e.$jWb,
										title: (0, r.localize2)(
											3424,
											"Toggle Split Editor in Group",
										),
										category: u.$ck.View,
										precondition: n.$Kj.or(S.$SPb, S.$XPb),
										f1: !0,
									});
								}
								async run(ee, ..._) {
									const te = (0, O.$TVb)(
										_,
										ee.get(M.$IY),
										ee.get(L.$EY),
										ee.get(f.$fMb),
									);
									if (!te.groupedEditors.length) return;
									const { editors: Q } = te.groupedEditors[0];
									Q[0] instanceof P.$iY
										? await ne(te)
										: Q[0] && (await ie(ee, te));
								}
							},
						),
						(0, a.$4X)(
							class extends a.$3X {
								constructor() {
									super({
										id: e.$lWb,
										title: (0, r.localize2)(
											3425,
											"Toggle Layout of Split Editor in Group",
										),
										category: u.$ck.View,
										precondition: S.$XPb,
										f1: !0,
									});
								}
								async run(ee) {
									const _ = ee.get(c.$gj),
										te = _.getValue($.$AVb.SIDE_BY_SIDE_LAYOUT_SETTING);
									let Q;
									return (
										te !== "horizontal" ? (Q = "horizontal") : (Q = "vertical"),
										_.updateValue($.$AVb.SIDE_BY_SIDE_LAYOUT_SETTING, Q)
									);
								}
							},
						);
				}
				function W() {
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: e.$mWb,
									title: (0, r.localize2)(
										3426,
										"Focus First Side in Active Editor",
									),
									category: u.$ck.View,
									precondition: n.$Kj.or(S.$XPb, S.$WPb),
									f1: !0,
								});
							}
							async run(ie) {
								const ne = ie.get(M.$IY),
									ee = ie.get(h.$ek),
									_ = ne.activeEditorPane;
								_ instanceof $.$AVb
									? _.getSecondaryEditorPane()?.focus()
									: _ instanceof v.$IVb && (await ee.executeCommand(R.$NVb));
							}
						},
					),
						(0, a.$4X)(
							class extends a.$3X {
								constructor() {
									super({
										id: e.$nWb,
										title: (0, r.localize2)(
											3427,
											"Focus Second Side in Active Editor",
										),
										category: u.$ck.View,
										precondition: n.$Kj.or(S.$XPb, S.$WPb),
										f1: !0,
									});
								}
								async run(ie) {
									const ne = ie.get(M.$IY),
										ee = ie.get(h.$ek),
										_ = ne.activeEditorPane;
									_ instanceof $.$AVb
										? _.getPrimaryEditorPane()?.focus()
										: _ instanceof v.$IVb && (await ee.executeCommand(R.$MVb));
								}
							},
						),
						(0, a.$4X)(
							class extends a.$3X {
								constructor() {
									super({
										id: e.$oWb,
										title: (0, r.localize2)(
											3428,
											"Focus Other Side in Active Editor",
										),
										category: u.$ck.View,
										precondition: n.$Kj.or(S.$XPb, S.$WPb),
										f1: !0,
									});
								}
								async run(ie) {
									const ne = ie.get(M.$IY),
										ee = ie.get(h.$ek),
										_ = ne.activeEditorPane;
									_ instanceof $.$AVb
										? _.getPrimaryEditorPane()?.hasFocus()
											? _.getSecondaryEditorPane()?.focus()
											: _.getPrimaryEditorPane()?.focus()
										: _ instanceof v.$IVb && (await ee.executeCommand(R.$OVb));
								}
							},
						);
				}
				function X() {
					o.$TX.registerCommandAndKeybindingRule({
						id: e.$6Vb,
						weight: o.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: (0, t.$os)(t.$ps, t.KeyCode.Enter),
						mac: { primary: (0, t.$os)(t.$qs, t.KeyCode.Enter) },
						handler: async (ne, ...ee) => {
							const _ = (0, O.$TVb)(
								ee,
								ne.get(M.$IY),
								ne.get(L.$EY),
								ne.get(f.$fMb),
							);
							for (const { group: te, editors: Q } of _.groupedEditors)
								for (const Z of Q) te.pinEditor(Z);
						},
					}),
						h.$fk.registerCommand({
							id: e.$7Vb,
							handler: (ne) => {
								const ee = ne.get(c.$gj),
									te = ee.getValue("workbench.editor.enablePreview") !== !0;
								ee.updateValue("workbench.editor.enablePreview", te);
							},
						});
					function ie(ne, ee, ..._) {
						const Q = (0, O.$TVb)(
							_,
							ne.get(M.$IY),
							ne.get(L.$EY),
							ne.get(f.$fMb),
						).groupedEditors[0]?.group;
						Q?.lock(ee ?? !Q.isLocked);
					}
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: e.$8Vb,
									title: (0, r.localize2)(3429, "Toggle Editor Group Lock"),
									category: u.$ck.View,
									f1: !0,
								});
							}
							async run(ne, ...ee) {
								ie(ne, void 0, ...ee);
							}
						},
					),
						(0, a.$4X)(
							class extends a.$3X {
								constructor() {
									super({
										id: e.$9Vb,
										title: (0, r.localize2)(3430, "Lock Editor Group"),
										category: u.$ck.View,
										precondition: S.$3Pb.toNegated(),
										f1: !0,
									});
								}
								async run(ne, ...ee) {
									ie(ne, !0, ...ee);
								}
							},
						),
						(0, a.$4X)(
							class extends a.$3X {
								constructor() {
									super({
										id: e.$0Vb,
										title: (0, r.localize2)(3431, "Unlock Editor Group"),
										precondition: S.$3Pb,
										category: u.$ck.View,
										f1: !0,
									});
								}
								async run(ne, ...ee) {
									ie(ne, !1, ...ee);
								}
							},
						),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$aWb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: S.$NPb.toNegated(),
							primary: (0, t.$os)(t.$ps, t.KeyMod.Shift | t.KeyCode.Enter),
							mac: {
								primary: (0, t.$os)(t.$qs, t.KeyMod.Shift | t.KeyCode.Enter),
							},
							handler: async (ne, ...ee) => {
								const _ = (0, O.$TVb)(
									ee,
									ne.get(M.$IY),
									ne.get(L.$EY),
									ne.get(f.$fMb),
								);
								for (const { group: te, editors: Q } of _.groupedEditors)
									for (const Z of Q) te.stickEditor(Z);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: R.$PVb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: m.EditorContextKeys.inDiffEditor,
							primary: (0, t.$os)(t.$ps, t.KeyMod.Shift | t.KeyCode.KeyO),
							mac: {
								primary: (0, t.$os)(t.$qs, t.KeyMod.Shift | t.KeyCode.KeyO),
							},
							handler: async (ne) => {
								const ee = ne.get(M.$IY),
									_ = ne.get(L.$EY),
									te = ee.activeEditor,
									Q = ee.activeTextEditorControl;
								if (!(0, d.$$sb)(Q) || !(te instanceof T.$GVb)) return;
								let Z;
								return (
									Q.getOriginalEditor().hasTextFocus()
										? (Z = te.original)
										: (Z = te.modified),
									_.activeGroup.openEditor(Z)
								);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$bWb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: S.$NPb,
							primary: (0, t.$os)(t.$ps, t.KeyMod.Shift | t.KeyCode.Enter),
							mac: {
								primary: (0, t.$os)(t.$qs, t.KeyMod.Shift | t.KeyCode.Enter),
							},
							handler: async (ne, ...ee) => {
								const _ = (0, O.$TVb)(
									ee,
									ne.get(M.$IY),
									ne.get(L.$EY),
									ne.get(f.$fMb),
								);
								for (const { group: te, editors: Q } of _.groupedEditors)
									for (const Z of Q) te.unstickEditor(Z);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$$Vb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: (ne, ...ee) => {
								const _ = ne.get(L.$EY),
									te = ne.get(s.$DJ),
									Z = (0, O.$TVb)(ee, ne.get(M.$IY), _, ne.get(f.$fMb))
										.groupedEditors[0]?.group;
								return (
									Z && _.activateGroup(Z), te.quickAccess.show(y.$sVb.PREFIX)
								);
							},
						});
				}
				function Y() {
					U(), z(), (0, R.$SVb)(), F(), x(), G(), X(), J(), W(), H(), V(), K();
				}
			},
		),
		