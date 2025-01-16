define(
			de[3554],
			he([1, 0, 3, 21, 282, 1033, 53]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ContributedExternalUriOpenersStore = void 0);
				let m = class extends t.$1c {
					static {
						d = this;
					}
					static {
						this.STORAGE_ID = "externalUriOpeners";
					}
					constructor(u, a) {
						super(),
							(this._extensionService = a),
							(this._openers = new Map()),
							(this._memento = new w.$eEb(d.STORAGE_ID, u)),
							(this._mementoObject = this._memento.getMemento(
								i.StorageScope.PROFILE,
								i.StorageTarget.MACHINE,
							));
						for (const [h, c] of Object.entries(this._mementoObject || {}))
							this.add(h, c.extensionId, { isCurrentlyRegistered: !1 });
						this.invalidateOpenersOnExtensionsChanged(),
							this.D(
								this._extensionService.onDidChangeExtensions(() =>
									this.invalidateOpenersOnExtensionsChanged(),
								),
							),
							this.D(
								this._extensionService.onDidChangeExtensionsStatus(() =>
									this.invalidateOpenersOnExtensionsChanged(),
								),
							);
					}
					didRegisterOpener(u, a) {
						this.add(u, a, { isCurrentlyRegistered: !0 });
					}
					add(u, a, h) {
						const c = this._openers.get(u);
						if (c) {
							c.isCurrentlyRegistered =
								c.isCurrentlyRegistered || h.isCurrentlyRegistered;
							return;
						}
						const n = {
							extensionId: a,
							isCurrentlyRegistered: h.isCurrentlyRegistered,
						};
						this._openers.set(u, n),
							(this._mementoObject[u] = n),
							this._memento.saveMemento(),
							this.updateSchema();
					}
					delete(u) {
						this._openers.delete(u),
							delete this._mementoObject[u],
							this._memento.saveMemento(),
							this.updateSchema();
					}
					async invalidateOpenersOnExtensionsChanged() {
						await this._extensionService.whenInstalledExtensionsRegistered();
						const u = this._extensionService.extensions;
						for (const [a, h] of this._openers) {
							const c = u.find((n) => n.identifier.value === h.extensionId);
							c
								? this._extensionService.canRemoveExtension(c) ||
									h.isCurrentlyRegistered ||
									this.delete(a)
								: this.delete(a);
						}
					}
					updateSchema() {
						const u = [],
							a = [];
						for (const [h, c] of this._openers)
							u.push(h), a.push(c.extensionId);
						(0, E.updateContributedOpeners)(u, a);
					}
				};
				(e.ContributedExternalUriOpenersStore = m),
					(e.ContributedExternalUriOpenersStore =
						m =
						d =
							Ne([j(0, i.$lq), j(1, C.$q2)], m));
			},
		),
		