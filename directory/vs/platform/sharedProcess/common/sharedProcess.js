import '../../../../require.js';
import '../../../../exports.js';
define(de[2793], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$W7c = e.$V7c = e.$U7c = void 0),
				(e.$U7c = {
					exit: "vscode:electron-main->shared-process=exit",
					ipcReady: "vscode:shared-process->electron-main=ipc-ready",
					initDone: "vscode:shared-process->electron-main=init-done",
				}),
				(e.$V7c = {
					request: "vscode:createSharedProcessChannelConnection",
					response: "vscode:createSharedProcessChannelConnectionResult",
				}),
				(e.$W7c = {
					request: "vscode:createSharedProcessRawConnection",
					response: "vscode:createSharedProcessRawConnectionResult",
				});
		}),
		