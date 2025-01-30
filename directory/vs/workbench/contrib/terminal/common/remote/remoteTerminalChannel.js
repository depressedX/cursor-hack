import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../services/configuration/common/configuration.js';
import '../../../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../platform/terminal/common/environmentVariableShared.js';
import '../../../../services/configurationResolver/common/configurationResolver.js';
import '../../../../common/editor.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../../base/common/network.js';
import '../../../../../platform/label/common/label.js';
import '../environmentVariable.js';
import '../../../../../platform/terminal/common/terminal.js';
import './terminal.js';
define(
			de[3269],
			he([1, 0, 261, 211, 25, 774, 358, 44, 18, 23, 73, 807, 117, 3148]),
			function (ce /*require*/,
 e /*exports*/,
 t /*configuration*/,
 i /*remoteAuthorityResolver*/,
 w /*workspace*/,
 E /*environmentVariableShared*/,
 C /*configurationResolver*/,
 d /*editor*/,
 m /*editorService*/,
 r /*network*/,
 u /*label*/,
 a /*environmentVariable*/,
 h /*terminal*/,
 c /*terminal*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Seb = e.$Reb = void 0),
					(e.$Reb = "remoteterminal");
				let n = class {
					get onPtyHostExit() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnPtyHostExitEvent,
						);
					}
					get onPtyHostStart() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnPtyHostStartEvent,
						);
					}
					get onPtyHostUnresponsive() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnPtyHostUnresponsiveEvent,
						);
					}
					get onPtyHostResponsive() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnPtyHostResponsiveEvent,
						);
					}
					get onPtyHostRequestResolveVariables() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent
								.OnPtyHostRequestResolveVariablesEvent,
						);
					}
					get onProcessData() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnProcessDataEvent,
						);
					}
					get onProcessExit() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnProcessExitEvent,
						);
					}
					get onProcessReady() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnProcessReadyEvent,
						);
					}
					get onProcessReplay() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnProcessReplayEvent,
						);
					}
					get onProcessOrphanQuestion() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnProcessOrphanQuestion,
						);
					}
					get onExecuteCommand() {
						return this.b.listen(c.RemoteTerminalChannelEvent.OnExecuteCommand);
					}
					get onDidRequestDetach() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnDidRequestDetach,
						);
					}
					get onDidChangeProperty() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnDidChangeProperty,
						);
					}
					constructor(p, o, f, b, s, l, y, $, v, S) {
						(this.a = p),
							(this.b = o),
							(this.c = f),
							(this.d = b),
							(this.e = s),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.i = v),
							(this.j = S);
					}
					restartPtyHost() {
						return this.b.call(
							c.RemoteTerminalChannelRequest.RestartPtyHost,
							[],
						);
					}
					async createProcess(p, o, f, b, s, l, y, $) {
						await this.c.whenRemoteConfigurationLoaded();
						const v = Object.create(null),
							S = f ? (this.d.getWorkspaceFolder(f) ?? void 0) : void 0;
						let I;
						try {
							I = (
								await this.e.resolveAnyMap(S, {
									shellLaunchConfig: p,
									configuration: o,
								})
							).resolvedVariables;
						} catch (R) {
							this.h.error(R);
						}
						if (I)
							for (const [R, O] of I.entries())
								(/^config:/.test(R) ||
									R === "selectedText" ||
									R === "lineNumber") &&
									(v[R] = O);
						const T = [];
						for (const [R, O] of this.f.collections.entries())
							T.push([R, (0, E.$_J)(O.map), (0, E.$aK)(O.descriptionMap)]);
						const P = await this.g.resolveAuthority(this.a),
							k = P.options && P.options.extensionHostEnv,
							L = this.d.getWorkspace(),
							D = L.folders,
							M = f ? this.d.getWorkspaceFolder(f) : null,
							N = d.$A1.getOriginalUri(this.i.activeEditor, {
								supportSideBySide: d.SideBySideEditor.PRIMARY,
								filterByScheme: [
									r.Schemas.file,
									r.Schemas.vscodeUserData,
									r.Schemas.vscodeRemote,
								],
							}),
							A = {
								configuration: o,
								resolvedVariables: v,
								envVariableCollections: T,
								shellLaunchConfig: p,
								workspaceId: L.id,
								workspaceName: this.j.getWorkspaceLabel(L),
								workspaceFolders: D,
								activeWorkspaceFolder: M,
								activeFileResource: N,
								shouldPersistTerminal: s,
								options: b,
								cols: l,
								rows: y,
								unicodeVersion: $,
								resolverEnv: k,
							};
						return await this.b.call(
							c.RemoteTerminalChannelRequest.CreateProcess,
							A,
						);
					}
					requestDetachInstance(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.RequestDetachInstance,
							[p, o],
						);
					}
					acceptDetachInstanceReply(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.AcceptDetachInstanceReply,
							[p, o],
						);
					}
					attachToProcess(p) {
						return this.b.call(c.RemoteTerminalChannelRequest.AttachToProcess, [
							p,
						]);
					}
					detachFromProcess(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.DetachFromProcess,
							[p, o],
						);
					}
					listProcesses() {
						return this.b.call(c.RemoteTerminalChannelRequest.ListProcesses);
					}
					getLatency() {
						return this.b.call(c.RemoteTerminalChannelRequest.GetLatency);
					}
					getPerformanceMarks() {
						return this.b.call(
							c.RemoteTerminalChannelRequest.GetPerformanceMarks,
						);
					}
					reduceConnectionGraceTime() {
						return this.b.call(
							c.RemoteTerminalChannelRequest.ReduceConnectionGraceTime,
						);
					}
					processBinary(p, o) {
						return this.b.call(c.RemoteTerminalChannelRequest.ProcessBinary, [
							p,
							o,
						]);
					}
					start(p) {
						return this.b.call(c.RemoteTerminalChannelRequest.Start, [p]);
					}
					input(p, o) {
						return this.b.call(c.RemoteTerminalChannelRequest.Input, [p, o]);
					}
					acknowledgeDataEvent(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.AcknowledgeDataEvent,
							[p, o],
						);
					}
					setUnicodeVersion(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.SetUnicodeVersion,
							[p, o],
						);
					}
					shutdown(p, o) {
						return this.b.call(c.RemoteTerminalChannelRequest.Shutdown, [p, o]);
					}
					resize(p, o, f) {
						return this.b.call(c.RemoteTerminalChannelRequest.Resize, [
							p,
							o,
							f,
						]);
					}
					clearBuffer(p) {
						return this.b.call(c.RemoteTerminalChannelRequest.ClearBuffer, [p]);
					}
					getInitialCwd(p) {
						return this.b.call(c.RemoteTerminalChannelRequest.GetInitialCwd, [
							p,
						]);
					}
					getCwd(p) {
						return this.b.call(c.RemoteTerminalChannelRequest.GetCwd, [p]);
					}
					orphanQuestionReply(p) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.OrphanQuestionReply,
							[p],
						);
					}
					sendCommandResult(p, o, f) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.SendCommandResult,
							[p, o, f],
						);
					}
					freePortKillProcess(p) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.FreePortKillProcess,
							[p],
						);
					}
					installAutoReply(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.InstallAutoReply,
							[p, o],
						);
					}
					uninstallAllAutoReplies() {
						return this.b.call(
							c.RemoteTerminalChannelRequest.UninstallAllAutoReplies,
							[],
						);
					}
					getDefaultSystemShell(p) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.GetDefaultSystemShell,
							[p],
						);
					}
					getProfiles(p, o, f) {
						return this.b.call(c.RemoteTerminalChannelRequest.GetProfiles, [
							this.d.getWorkspace().id,
							p,
							o,
							f,
						]);
					}
					acceptPtyHostResolvedVariables(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.AcceptPtyHostResolvedVariables,
							[p, o],
						);
					}
					getEnvironment() {
						return this.b.call(c.RemoteTerminalChannelRequest.GetEnvironment);
					}
					getWslPath(p, o) {
						return this.b.call(c.RemoteTerminalChannelRequest.GetWslPath, [
							p,
							o,
						]);
					}
					setTerminalLayoutInfo(p) {
						const f = {
							workspaceId: this.d.getWorkspace().id,
							tabs: p ? p.tabs : [],
						};
						return this.b.call(
							c.RemoteTerminalChannelRequest.SetTerminalLayoutInfo,
							f,
						);
					}
					updateTitle(p, o, f) {
						return this.b.call(c.RemoteTerminalChannelRequest.UpdateTitle, [
							p,
							o,
							f,
						]);
					}
					updateIcon(p, o, f, b) {
						return this.b.call(c.RemoteTerminalChannelRequest.UpdateIcon, [
							p,
							o,
							f,
							b,
						]);
					}
					refreshProperty(p, o) {
						return this.b.call(c.RemoteTerminalChannelRequest.RefreshProperty, [
							p,
							o,
						]);
					}
					updateProperty(p, o, f) {
						return this.b.call(c.RemoteTerminalChannelRequest.UpdateProperty, [
							p,
							o,
							f,
						]);
					}
					getTerminalLayoutInfo() {
						const o = { workspaceId: this.d.getWorkspace().id };
						return this.b.call(
							c.RemoteTerminalChannelRequest.GetTerminalLayoutInfo,
							o,
						);
					}
					reviveTerminalProcesses(p, o, f) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.ReviveTerminalProcesses,
							[p, o, f],
						);
					}
					getRevivedPtyNewId(p) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.GetRevivedPtyNewId,
							[p],
						);
					}
					serializeTerminalState(p) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.SerializeTerminalState,
							[p],
						);
					}
				};
				(e.$Seb = n),
					(e.$Seb = n =
						Ne(
							[
								j(2, t.$RZ),
								j(3, w.$Vi),
								j(4, C.$zeb),
								j(5, a.$ceb),
								j(6, i.$3l),
								j(7, h.$YJ),
								j(8, m.$IY),
								j(9, u.$3N),
							],
							n,
						));
			},
		),
		