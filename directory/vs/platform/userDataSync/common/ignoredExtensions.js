define(de[957], he([1, 0, 24, 10, 5]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$VAc = e.$UAc = void 0),
				(e.$UAc = (0, w.$Mi)("IIgnoredExtensionsManagementService"));
			let E = class {
				constructor(d) {
					this.a = d;
				}
				hasToNeverSyncExtension(d) {
					return this.b().includes(d.toLowerCase());
				}
				hasToAlwaysSyncExtension(d) {
					return this.b().includes(`-${d.toLowerCase()}`);
				}
				updateIgnoredExtensions(d, m) {
					let r = [...this.a.getValue("settingsSync.ignoredExtensions")].map(
						(u) => u.toLowerCase(),
					);
					return (
						(r = r.filter((u) => u !== d && u !== `-${d}`)),
						m && r.push(d.toLowerCase()),
						this.a.updateValue(
							"settingsSync.ignoredExtensions",
							r.length ? r : void 0,
							i.ConfigurationTarget.USER,
						)
					);
				}
				updateSynchronizedExtensions(d, m) {
					let r = [...this.a.getValue("settingsSync.ignoredExtensions")].map(
						(u) => u.toLowerCase(),
					);
					return (
						(r = r.filter((u) => u !== d && u !== `-${d}`)),
						m && r.push(`-${d.toLowerCase()}`),
						this.a.updateValue(
							"settingsSync.ignoredExtensions",
							r.length ? r : void 0,
							i.ConfigurationTarget.USER,
						)
					);
				}
				getIgnoredExtensions(d) {
					const m = d
							.filter((h) => h.isMachineScoped)
							.map((h) => h.identifier.id.toLowerCase()),
						r = this.b().map((h) => h.toLowerCase()),
						u = [],
						a = [];
					if (Array.isArray(r))
						for (const h of r)
							h.startsWith("-") ? a.push(h.substring(1)) : u.push(h);
					return (0, t.$Qb)([...m, ...u].filter((h) => !a.includes(h)));
				}
				b() {
					let d = this.a.inspect("settingsSync.ignoredExtensions").userValue;
					return d !== void 0 ||
						((d = this.a.inspect("sync.ignoredExtensions").userValue),
						d !== void 0)
						? d
						: (this.a.getValue("settingsSync.ignoredExtensions") || []).map(
								(m) => m.toLowerCase(),
							);
				}
			};
			(e.$VAc = E), (e.$VAc = E = Ne([j(0, i.$gj)], E));
		}),
		