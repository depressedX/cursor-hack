import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/telemetry/common/telemetry.js';
import './chatService.js';
define(de[3013], he([1, 0, 31, 32, 218]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$WIc = void 0);
			let E = class {
				constructor(d) {
					this.a = d;
				}
				notifyUserAction(d) {
					if (d.action.kind === "vote")
						this.a.publicLog2("interactiveSessionVote", {
							direction:
								d.action.direction === w.ChatAgentVoteDirection.Up
									? "up"
									: "down",
							agentId: d.agentId ?? "",
							command: d.command,
							reason: d.action.reason,
						});
					else if (d.action.kind === "copy")
						this.a.publicLog2("interactiveSessionCopy", {
							copyKind:
								d.action.copyKind === w.ChatCopyKind.Action
									? "action"
									: "toolbar",
							agentId: d.agentId ?? "",
							command: d.command,
						});
					else if (d.action.kind === "insert")
						this.a.publicLog2("interactiveSessionInsert", {
							newFile: !!d.action.newFile,
							userAction: d.action.userAction,
							codeMapper: d.action.codeMapper,
							agentId: d.agentId ?? "",
							command: d.command,
						});
					else if (d.action.kind === "command") {
						const r = t.$fk.getCommand(d.action.commandButton.command.id)
							? d.action.commandButton.command.id
							: "INVALID";
						this.a.publicLog2("interactiveSessionCommand", {
							commandId: r,
							agentId: d.agentId ?? "",
							command: d.command,
						});
					} else
						d.action.kind === "runInTerminal"
							? this.a.publicLog2("interactiveSessionRunInTerminal", {
									languageId: d.action.languageId ?? "",
									agentId: d.agentId ?? "",
									command: d.command,
								})
							: d.action.kind === "followUp" &&
								this.a.publicLog2("chatFollowupClicked", {
									agentId: d.agentId ?? "",
									command: d.command,
								});
				}
				retrievedFollowups(d, m, r) {
					this.a.publicLog2("chatFollowupsRetrieved", {
						agentId: d,
						command: m,
						numFollowups: r,
					});
				}
			};
			(e.$WIc = E), (e.$WIc = E = Ne([j(0, i.$km)], E));
		}),
		