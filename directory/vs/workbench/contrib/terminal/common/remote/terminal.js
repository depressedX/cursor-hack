define(de[3148], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.RemoteTerminalChannelRequest =
					e.RemoteTerminalChannelEvent =
					e.$yeb =
						void 0),
				(e.$yeb = "remoteterminal");
			var t;
			(function (w) {
				(w.OnPtyHostExitEvent = "$onPtyHostExitEvent"),
					(w.OnPtyHostStartEvent = "$onPtyHostStartEvent"),
					(w.OnPtyHostUnresponsiveEvent = "$onPtyHostUnresponsiveEvent"),
					(w.OnPtyHostResponsiveEvent = "$onPtyHostResponsiveEvent"),
					(w.OnPtyHostRequestResolveVariablesEvent =
						"$onPtyHostRequestResolveVariablesEvent"),
					(w.OnProcessDataEvent = "$onProcessDataEvent"),
					(w.OnProcessReadyEvent = "$onProcessReadyEvent"),
					(w.OnProcessExitEvent = "$onProcessExitEvent"),
					(w.OnProcessReplayEvent = "$onProcessReplayEvent"),
					(w.OnProcessOrphanQuestion = "$onProcessOrphanQuestion"),
					(w.OnExecuteCommand = "$onExecuteCommand"),
					(w.OnDidRequestDetach = "$onDidRequestDetach"),
					(w.OnDidChangeProperty = "$onDidChangeProperty");
			})(t || (e.RemoteTerminalChannelEvent = t = {}));
			var i;
			(function (w) {
				(w.RestartPtyHost = "$restartPtyHost"),
					(w.CreateProcess = "$createProcess"),
					(w.AttachToProcess = "$attachToProcess"),
					(w.DetachFromProcess = "$detachFromProcess"),
					(w.ListProcesses = "$listProcesses"),
					(w.GetLatency = "$getLatency"),
					(w.GetPerformanceMarks = "$getPerformanceMarks"),
					(w.OrphanQuestionReply = "$orphanQuestionReply"),
					(w.AcceptPtyHostResolvedVariables =
						"$acceptPtyHostResolvedVariables"),
					(w.Start = "$start"),
					(w.Input = "$input"),
					(w.AcknowledgeDataEvent = "$acknowledgeDataEvent"),
					(w.Shutdown = "$shutdown"),
					(w.Resize = "$resize"),
					(w.ClearBuffer = "$clearBuffer"),
					(w.GetInitialCwd = "$getInitialCwd"),
					(w.GetCwd = "$getCwd"),
					(w.ProcessBinary = "$processBinary"),
					(w.SendCommandResult = "$sendCommandResult"),
					(w.InstallAutoReply = "$installAutoReply"),
					(w.UninstallAllAutoReplies = "$uninstallAllAutoReplies"),
					(w.GetDefaultSystemShell = "$getDefaultSystemShell"),
					(w.GetProfiles = "$getProfiles"),
					(w.GetEnvironment = "$getEnvironment"),
					(w.GetWslPath = "$getWslPath"),
					(w.GetTerminalLayoutInfo = "$getTerminalLayoutInfo"),
					(w.SetTerminalLayoutInfo = "$setTerminalLayoutInfo"),
					(w.SerializeTerminalState = "$serializeTerminalState"),
					(w.ReviveTerminalProcesses = "$reviveTerminalProcesses"),
					(w.GetRevivedPtyNewId = "$getRevivedPtyNewId"),
					(w.SetUnicodeVersion = "$setUnicodeVersion"),
					(w.ReduceConnectionGraceTime = "$reduceConnectionGraceTime"),
					(w.UpdateIcon = "$updateIcon"),
					(w.UpdateTitle = "$updateTitle"),
					(w.UpdateProperty = "$updateProperty"),
					(w.RefreshProperty = "$refreshProperty"),
					(w.RequestDetachInstance = "$requestDetachInstance"),
					(w.AcceptDetachInstanceReply = "$acceptDetachInstanceReply"),
					(w.AcceptDetachedInstance = "$acceptDetachedInstance"),
					(w.FreePortKillProcess = "$freePortKillProcess");
			})(i || (e.RemoteTerminalChannelRequest = i = {}));
		}),
		