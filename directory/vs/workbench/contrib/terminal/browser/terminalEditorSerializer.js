define(de[3142], he([1, 0, 107]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$SUc = void 0);
			let i = class {
				constructor(E) {
					this.a = E;
				}
				canSerialize(E) {
					return (
						typeof E.terminalInstance?.persistentProcessId == "number" &&
						E.terminalInstance.shouldPersist
					);
				}
				serialize(E) {
					if (this.canSerialize(E))
						return JSON.stringify(this.b(E.terminalInstance));
				}
				deserialize(E, C) {
					const d = JSON.parse(C);
					return this.a.reviveInput(d);
				}
				b(E) {
					return {
						id: E.persistentProcessId,
						pid: E.processId || 0,
						title: E.title,
						titleSource: E.titleSource,
						cwd: "",
						icon: E.icon,
						color: E.color,
						hasChildProcesses: E.hasChildProcesses,
						isFeatureTerminal: E.shellLaunchConfig.isFeatureTerminal,
						hideFromUser: E.shellLaunchConfig.hideFromUser,
						reconnectionProperties: E.shellLaunchConfig.reconnectionProperties,
						shellIntegrationNonce: E.shellIntegrationNonce,
					};
				}
			};
			(e.$SUc = i), (e.$SUc = i = Ne([j(0, t.$kIb)], i));
		}),
		